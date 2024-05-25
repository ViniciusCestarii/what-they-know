import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row gap-2 pt-16 justify-between relative before:content-[''] before:w-full before:h-[1px] before:bg-primary before:absolute before:top-12 ">
      <span className="text-sm">
        The data displayed on this website is not stored or used in any way.
      </span>
      <address className="flex justify-end">
        <span>
          Made with ❤️ by{' '}
          <a
            href="https://github.com/ViniciusCestarii"
            className="hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            @ViniciusCestarii
          </a>
        </span>
      </address>
    </footer>
  )
}

export default Footer
