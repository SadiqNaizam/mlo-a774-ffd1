import React from 'react';
import AuthenticationCard from '../components/Authentication/AuthenticationCard';
import MainAppLayout from '../components/layout/MainAppLayout';

/**
 * IndexPage serves as the main entry point for the application, 
 * displaying the authentication form.
 * 
 * It utilizes the MainAppLayout to provide a consistent, centered layout
 * and renders the AuthenticationCard which contains all the login UI and logic.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <AuthenticationCard />
    </MainAppLayout>
  );
};

export default IndexPage;
