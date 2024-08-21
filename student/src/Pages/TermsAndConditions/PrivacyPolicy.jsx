import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import View from "../../components/View"; 

function PrivacyPolicy() {
  const faqs = [
    {
      question: '1. Information We Collect',
      answer: 'We collect information that identifies, relates to, describes, or could reasonably be linked, directly or indirectly, with our users ("personal information"). In particular, we have collected the following categories of personal information within the last twelve (12) months: Identifiers: such as name, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name, or other similar identifiers'
    },
    {
      question: '2. Use of Your Information',
      answer: 'Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Application to: Create and manage your account. Deliver targeted educational content and resources. Application.'
    }
  ];

  return (
    <View>
      <HeaderComponent page='Privacy Policy' />
      <View style={{ width: '80%', margin: '20px auto' }}>
      <h4>Welcome to Rural Rise!</h4>
          <p>
          Education App ("Rural Rise," "we," "us," or "our"). Your privacy is of paramount importance to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our mobile application (the "Application"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.          </p>
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

export default PrivacyPolicy;
