import { FooterWrapper } from './FooterStyles';

export default function Footer() {
  return (
    <FooterWrapper>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> DevSquid </span>
      </h5>
      <h5>All rights reserved</h5>
    </FooterWrapper>
  );
}
