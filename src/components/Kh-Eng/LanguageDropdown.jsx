import { useState, useEffect } from 'react';
import { FaChevronDown, FaCheck } from 'react-icons/fa';
import i18n from '../../i18n';
import flagEg from '../../assets/flag-english.jpg';
import flagKh from '../../assets/flag-cambodia.jpg';

const languages = [
    { code: 'en', label: 'English', flag: flagEg },
    { code: 'km', label: 'ភាសាខ្មែរ', flag: flagKh },
];

const LanguageDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState(i18n.language || 'en');

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setSelectedLang(lang);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleLangChanged = (lng) => {
            setSelectedLang(lng);
        };
        i18n.on('languageChanged', handleLangChanged);
        return () => {
            i18n.off('languageChanged', handleLangChanged);
        };
    }, []);

    const selected = languages.find((l) => l.code === selectedLang) || languages[0];


    return (
        <div className="relative inline-block ml-4">
            {/* Trigger button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#1e1e2f] hover:bg-[#2b2b3f] text-sm text-white font-medium transition"
            >
                <img src={selected.flag} alt={selected.label} className="w-5 h-5 rounded-sm" />
                {selected.label}
                <FaChevronDown className="text-xs mt-0.5" />
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <div className="absolute  mt-2 w-30 rounded-md bg-[#1e1e2f] border border-gray-700 shadow-lg z-50">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleChangeLanguage(lang.code)}
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-[#2e2e3f] hover:text-white transition"
                        >
                            {selectedLang === lang.code && (
                                <FaCheck className="text-blue-500 mr-2 text-3xl" />
                            )}
                            {!selectedLang === lang.code && <span className="w-4 mr-2" />} {/* space align */}
                            <img src={lang.flag} alt={lang.label} className="w-5 h-5 rounded-sm mr-2" />
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageDropdown;
