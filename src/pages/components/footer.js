import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div>
          {/* About Section */}
          <div>
            <h4 className="text-xl font-semibold mb-2 underline md:text-2xl font-[PlayFair]">About Us</h4>
            <p className="text-sm md:w-96 md:text-base font-[Geist]">
            Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-semibold mt-5 mb-2 underline md:text-2xl font-[PlayFair]">Contact</h4>
            <ul className="space-y-2 text-sm md:text-base font-[Geist]">
              <li>Phone: +91 1-800-123-4567</li>
              <li>Email: support@bistrobliss.com</li>
              <li>Address: 123 Galleria Market, Gurugram</li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2025 Bistro Bliss. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
