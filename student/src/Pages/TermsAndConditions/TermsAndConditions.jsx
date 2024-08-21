import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import View from "../../components/View"; 

function TermsAndConditions() {
  const faqs = [
    {
      question: '1. Use of the App',
      answer: 'The Rural Rise app is designed to provide educational resources and interactive learning opportunities to students in rural areas. Users must be at least Minimum Age years old or have the consent of their parent or guardian. The app is for personal and educational use only. Commercial use is strictly prohibited.'
    },
    {
      question: '2. Account Registration',
      answer: 'Users may be required to register an account to access certain features of the app. Accurate and complete information must be provided during registration. Account security is the responsibility of the user. Any unauthorized use should be reported immediately.'
    }
  ];

  return (
    <View>
      <HeaderComponent page='Terms and Conditions' />
      <View style={{ width: '80%', margin: '20px auto' }}>
      <h4>Welcome to Rural Rise!</h4>
          <p>
            These Terms and Conditions govern your use of the Rural Rise app and provide important information about your rights and obligations. By accessing or using the Rural Rise app, you agree to be bound by these Terms and Conditions and our Privacy Policy.
          </p>
        {faqs.map((faq, index) => (
          <View key={index} style={{ marginBottom: '20px' }}>
            <View style={{
              backgroundColor: '#F0F0F0',
              padding: '10px',
              border: '1px solid black',
              borderRadius: '5px'
            }}>
              {faq.question}
            </View>
            <View style={{
              backgroundColor: '#FFFFFF',
              padding: '10px',
              border: '1px solid black',
              borderRadius: '5px',
              marginTop: '5px'
            }}>
               {faq.answer}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

export default TermsAndConditions;
