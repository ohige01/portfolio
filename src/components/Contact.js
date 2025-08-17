import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '../config/personalInfo';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    // 실제 구현에서는 여기에 이메일 전송 로직을 추가하세요
    // 예: emailjs, formspree, 또는 백엔드 API 호출
    
    try {
      // 시뮬레이션을 위한 지연
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 성공 시뮬레이션
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: '이메일',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`
    },
    {
      icon: <Phone size={24} />,
      title: '전화번호',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`
    },
    {
      icon: <MapPin size={24} />,
      title: '위치',
      value: personalInfo.location,
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      title: 'GitHub',
      link: personalInfo.github
    },
    {
      icon: <Linkedin size={24} />,
      title: 'LinkedIn',
      link: personalInfo.linkedin
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">언제든지 연락주세요. 함께 멋진 프로젝트를 만들어봐요!</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>연락처 정보</h3>
            <p className="contact-description">
              새로운 기회나 협업에 관심이 있으시다면 언제든지 연락해 주세요. 
              빠른 시일 내에 답변드리겠습니다.
            </p>
            
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <div key={index} className="contact-method">
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-info">
                    <h4>{method.title}</h4>
                    {method.link ? (
                      <a href={method.link}>{method.value}</a>
                    ) : (
                      <span>{method.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="social-links">
              <h4>소셜 미디어</h4>
              <div className="social-buttons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    title={social.title}
                  >
                    {social.icon}
                    <span>{social.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>메시지 보내기</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">이름</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={formStatus === 'sending'}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">이메일</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={formStatus === 'sending'}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">제목</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={formStatus === 'sending'}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">메시지</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={formStatus === 'sending'}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? (
                  <>
                    <div className="spinner"></div>
                    전송 중...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    메시지 전송
                  </>
                )}
              </button>
              
              {formStatus === 'success' && (
                <div className="form-message success">
                  <CheckCircle size={20} />
                  메시지가 성공적으로 전송되었습니다!
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="form-message error">
                  <AlertCircle size={20} />
                  메시지 전송에 실패했습니다. 다시 시도해 주세요.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;