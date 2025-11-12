import React, { useState } from 'react';

 function LanguageSwitcher() {
  const [language, setLanguage] = useState('en');

  const content = {
    en: "Just move forward; don't listen to what anyone says. Keep doing what you have to do for your own good.",
    bn: "শুধু সামনে এগিয়ে যাও; কে কী বলছে- তাতে কান দিও না। নিজের ভালোর জন্য যা করতে হবে, করতে থাকো।"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Language Switcher
        </h1>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setLanguage('en')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              language === 'en'
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105'
            }`}
          >
            Eng
          </button>
          <button
            onClick={() => setLanguage('bn')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              language === 'bn'
                ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105'
            }`}
          >
            বাংলা
          </button>
        </div>

        {/* Content Display */}
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl p-6 text-center">
          <p className="text-xl font-medium text-gray-800 leading-relaxed">
            {content[language]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LanguageSwitcher