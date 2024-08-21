import React from 'react';
import HeaderComponent from '../../components/HeaderComponent';
import View from "../../components/View"; 

function FAQ() {
  const faqs = [
    {
      question: '1. What is Rural Rise?',
      answer: 'Rural Rise is an innovative educational app designed to empower students in rural areas with access to quality educational resources, interactive learning tools, and mentorship programs to enhance their learning journey.'
    },
    {
      question: '2. How does Rural Rise work?',
      answer: 'Rural Rise provides a platform where students can access a wide range of educational materials, including video lessons, interactive quizzes, and eBooks, tailored to their educational needs. The app also connects students with educators and mentors for personalized guidance.'
    }
  ];

  return (
    <View>
      <HeaderComponent page='FAQs' />
      <View style={{ width: '80%', margin: '20px auto' }}>
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

export default FAQ;
