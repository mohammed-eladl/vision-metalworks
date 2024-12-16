
import {Linkedin,  } from 'lucide-react';

// Twitter Facebook Instagram
export const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {[
        // { Icon: Facebook, href: '#' },
        // { Icon: Twitter, href: '#' },
        // { Icon: Instagram, href: '#' },
        { Icon: Linkedin, href: 'https://www.linkedin.com/company/vision-metalworks/people/' },
      ].map(({ Icon, href }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-200"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
};