import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { VStack, Button, Input, Textarea, FormControl, FormLabel, FormErrorMessage, Alert, AlertIcon } from '@chakra-ui/react';

// Validation schema for the form
const ContactFormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().min(25, 'Must be at least 25 characters').required('Message is required'),
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'failure'

  const handleSubmit = (values, actions) => {
    setLoading(true);
    // Simulate a server response delay
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // Randomly simulate success or failure
      if (isSuccess) {
        setStatus('success');
        actions.resetForm(); // Clear form fields on success
      } else {
        setStatus('failure');
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={ContactFormSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <VStack spacing="4" padding="50px" id="contact" bg="gray.100" borderRadius="md" boxShadow="md">
            {/* Name Field */}
            <FormControl isInvalid={errors.name && touched.name}>
              <FormLabel htmlFor="name" fontWeight="bold">Name</FormLabel>
              <Field as={Input} id="name" name="name" placeholder="Your name" variant="filled" />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>

            {/* Email Field */}
            <FormControl isInvalid={errors.email && touched.email}>
              <FormLabel htmlFor="email" fontWeight="bold">Email</FormLabel>
              <Field as={Input} id="email" name="email" placeholder="Your email" variant="filled" />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>

            {/* Message Field */}
            <FormControl isInvalid={errors.message && touched.message}>
              <FormLabel htmlFor="message" fontWeight="bold">Message</FormLabel>
              <Field as={Textarea} id="message" name="message" placeholder="Your message" variant="filled" />
              <FormErrorMessage>{errors.message}</FormErrorMessage>
            </FormControl>

            {/* Submit Button */}
            <Button type="submit" colorScheme="teal" width="full" isLoading={loading}>
              Send
            </Button>

            {/* Alert for Success or Failure */}
            {status === 'success' && (
              <Alert status="success" mt="4">
                <AlertIcon />
                All good! Thanks for your submission, we will get back to you shortly.
              </Alert>
            )}
            {status === 'failure' && (
              <Alert status="error" mt="4">
                <AlertIcon />
                Oops! Something went wrong, please try again later.
              </Alert>
            )}
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;