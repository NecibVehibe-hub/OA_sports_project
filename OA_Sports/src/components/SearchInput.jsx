// import React, { useState, useEffect, useRef } from 'react';
// import { useTranslation } from "react-i18next";



// export default function VoiceSearch() {
//     const {t,i18n}=useTranslation();
//     const [query, setQuery] = useState('');
//     const [isListening, setIsListening] = useState(false);
//     const [isSupported, setIsSupported] = useState(true);
//     const recognitionRef = useRef(null);

//     useEffect(() => {
//         const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        
//         if (!SpeechRecognition) {
//         setIsSupported(false);
//         return;
//         }

//     const recognition = new SpeechRecognition();
//     recognition.lang = i18n;
//     recognition.interimResults = false;
//     recognition.maxAlternatives = 1;

//     // Ses başarıyla metne çevrildiğinde
//         recognition.onresult = (event) => {
//         const speechResult = event.results[0][0].transcript;
//         setQuery(speechResult);
//         };

//         // Konuşma bittiğinde veya kullanıcı sustuğunda
//         recognition.onspeechend = () => {
//         recognition.stop();
//         setIsListening(false);
//         };

//         // Hata durumunda (İzin reddi, sessizlik vb.)
//         recognition.onerror = (event) => {
//         console.error('Ses tanıma hatası:', event.error);
//         setIsListening(false);
//         };

//         recognitionRef.current = recognition;
//     }, []);

//     const toggleListening = () => {
//         if (!recognitionRef.current) return;

//         if (isListening) {
//         recognitionRef.current.stop();
//         setIsListening(false);
//         } else {
//         recognitionRef.current.start();
//         setIsListening(true);
//         }
//     };

//     const handleSearchSubmit = (e) => {
//         e.preventDefault();
//         if (!query.trim()) return;
        
//         // Arama tetiklendiğinde yapılacak işlem (örn: API çağrısı veya yönlendirme)
//         alert(`Aranan kelime: ${query}`);
//     };

//     return (
//         <div className="w-full max-w-md mx-auto p-4">
//         <form onSubmit={handleSearchSubmit} className="relative flex items-center system-search">
//             <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder={isSupported ? "Search by topic..." : "Tarayıcınız sesli aramayı desteklemiyor..."}
//             disabled={!isSupported}
//             className="w-full pl-3.5 pr-1 py-2.5 border border-[#535862] rounded-xl focus:outline-none  focus:border-mainYellow  disabled:bg-gray-100 disabled:cursor-not-allowed text-white placeholder-gray-400"
//             />
            
//             {isSupported && (
//             <button
//                 type="button"
//                 onClick={toggleListening}
//                 className={`absolute right-1 cursor-pointer p-2 transition-all border-l border-l-[#535862] duration-200 focus:outline-none ${
//                 isListening 
//                     ? ' text-white animate-pulse shadow-lg shadow-red-500/50' 
//                     : 'hover:bg-mainYellow hover:rounded-full text-gray-600'
//                 }`}
//                 title={isListening ? "Dinlemeyi Durdur" : "Sesle Ara"}
//             >
//                 {isListening ? (
//                 // Dinliyor İkonu (Kare/Durdur simgesi)
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <rect x="6" y="6" width="12" height="12" rx="2" strokeWidth="2" fill="currentColor"/>
//                 </svg>
//                 ) : (
//                 // Mikrofon İkonu
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
//                 </svg>
//                 )}
//             </button>
//             )}
//         </form>
//         </div>
//     );
// }

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";

export default function VoiceSearch() {
    const { t, i18n } = useTranslation();
    const [query, setQuery] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [isSupported, setIsSupported] = useState(true);
    const recognitionRef = useRef(null);

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        
        if (!SpeechRecognition) {
            setIsSupported(false);
            return;
        }

        const recognition = new SpeechRecognition();
        
        const currentLang = i18n.language; 
        
        if (currentLang === 'ar') recognition.lang = 'ar-SA';
        else if (currentLang === 'tr') recognition.lang = 'tr-TR';
        else if (currentLang === 'en') recognition.lang = 'en-US';
        else if (currentLang === 'de') recognition.lang = 'de-DE';
        else if (currentLang === 'fr') recognition.lang = 'fr-FR';
        else if (currentLang === 'es') recognition.lang = 'es-ES';
        else if (currentLang === 'ru') recognition.lang = 'ru-RU';
        else recognition.lang = currentLang;

        recognition.continuous = false;
        recognition.interimResults = false; 
        recognition.maxAlternatives = 1;

        recognition.onresult = (event) => {
            if (event.results && event.results.length > 0) {
                const lastResultIndex = event.results.length - 1;
                const speechResult = event.results[lastResultIndex].transcript;
                setQuery(speechResult);
            }
        };

        recognition.onspeechend = () => {
            recognition.stop();
            setIsListening(false);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognition.onerror = (event) => {
            console.error('Ses tanıma hatası:', event.error);
            setIsListening(false);
        };

        recognitionRef.current = recognition;

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.abort();
            }
        };
    }, [i18n.language]);

    const toggleListening = () => {
        if (!recognitionRef.current) return;

        if (isListening) {
            recognitionRef.current.stop();
            setIsListening(false);
        } else {
            try {
                recognitionRef.current.start();
                setIsListening(true);
            } catch (e) {
                console.log("Mikrofon zaten açık:", e);
            }
        }
    };

    // ENTER'A BASILDIĞINDA ÇALIŞAN FONKSİYON
    const handleSearchSubmit = (e) => {
        e.preventDefault(); // Sayfanın yenilenmesini engeller
        if (!query.trim()) return;
        
        // 1. Burada arama işleminizi yapın (Örn: API çağrısı veya router yönlendirmesi)
        alert(`Aranan kelime: ${query}`); 
        
        // 2. KESİN ÇÖZÜM: Enter sonrası input alanını tamamen temizler
        setQuery(''); 
    };

    return (
        <div className="w-full mx-auto py-5">
            <form onSubmit={handleSearchSubmit} className="relative flex bg-blackBg  items-center w-full system-search">
                
                {/* SOLDAKİ SEARCH İKONU */}
                <div className="absolute left-3.5 pointer-events-none flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="#535862" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.604 10.604Z" />
                    </svg>
                </div>

                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={isSupported ? "Search by topic..." : "Tarayıcınız sesli aramayı desteklemiyor..."}
                    disabled={!isSupported}
                    className="w-full pl-10 pr-1 py-4 border border-[#535862] rounded-xl focus:outline-none focus:border-mainYellow disabled:bg-gray-100 disabled:cursor-not-allowed text-white placeholder-gray-400 bg-transparent"
                />
                
                {isSupported && (
                    <button
                        type="button"
                        onClick={toggleListening}
                        className={`absolute right-1 cursor-pointer p-2 transition-all duration-300  border-l border-l-[#535862]  focus:outline-none ${
                            isListening 
                                ? 'text-white animate-pulse shadow-lg shadow-red-500/50' 
                                : 'hover:bg-mainYellow hover:rounded-full text-gray-600'
                        }`}
                        title={isListening ? "Dinlemeyi Durdur" : "Sesle Ara"}
                    >
                        {isListening ? (
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <rect x="6" y="6" width="12" height="12" rx="2" strokeWidth="2" fill="currentColor"/>
                            </svg>
                        ) : (
                            <svg className="w-7 h-7 " fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                            </svg>
                        )}
                    </button>
                )}
            </form>
        </div>
    );
}
