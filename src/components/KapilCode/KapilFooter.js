import React from "react";

const KapilFooter = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-sm">&copy; 2024 Your Company Name</p>
          <div>
            <a href="#" className="text-sm mr-4 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default KapilFooter;
