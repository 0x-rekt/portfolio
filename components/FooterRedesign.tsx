import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function FooterRedesign() {
  return (
    <footer className="dossier-footer">
      <div className="dossier-rail footer-inner">
        <div>
          <p className="mono-label">Have a difficult system to build?</p>
          <h2>Let&apos;s make it legible.</h2>
        </div>
        <div className="footer-links">
          <a href="mailto:sowdarjyakolay@gmail.com">Email <FiMail aria-hidden="true" /></a>
          <a href="https://github.com/0x-rekt" target="_blank" rel="noreferrer">GitHub <FiGithub aria-hidden="true" /></a>
          <a href="https://www.linkedin.com/in/sowdarjya-kolay-616176314" target="_blank" rel="noreferrer">LinkedIn <FiLinkedin aria-hidden="true" /></a>
          <a href="#hero">Back to top <FiArrowUpRight aria-hidden="true" /></a>
        </div>
        <p className="footer-meta">© {new Date().getFullYear()} Sowdarjya Kolay. Built with care.</p>
      </div>
    </footer>
  );
}
