import ContactForm from '../../components/contact/ContactForm';
import { StyledWrapper } from '../../components/contact/ContactForm/ContactStyled';

export default function ContactPage() {
  return (
    <StyledWrapper>
      <div className='title'>
        <h1>Contact us</h1>
        <div className='underline'></div>
      </div>
      <ContactForm />
    </StyledWrapper>
  );
}
