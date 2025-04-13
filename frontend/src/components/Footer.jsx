const Footer = () => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <h1 className="text-2xl font-bold mb-2">Track your work</h1>

      <div className="flex flex-wrap justify-center gap-2">
        <h1>Made with ❤ by Rahul |</h1>
        <a
          href="https://github.com/ADVAYA1"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub |
        </a>
        <a
          href="https://www.linkedin.com/in/rahul-gupta-3b9632261"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn |
        </a>
      </div>

      <p className="mt-2 max-w-md text-sm">
        Note: this is a personal project for Internship purpose only.
        Reach out to me if you have queries?
      </p>
    </div>
  );
};

export default Footer;
