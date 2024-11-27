import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // HTTP로 번역 파일 로드
  .use(LanguageDetector) // 언어 자동 감지
  .use(initReactI18next) // React에서 사용 가능하게 초기화
  .init({
    fallbackLng: "ko", // 기본 언어
    supportedLngs: ["en", "ko"], // 지원 언어
    debug: true,
    interpolation: {
      escapeValue: false, // React는 기본적으로 XSS 방지 처리
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // 번역 파일 경로
    },
  });

export default i18n;
