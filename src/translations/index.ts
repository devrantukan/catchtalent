export const translations = {
  en: {
    navigation: {
      home: "Home",
      whoAreWe: "Who Are We",
      contact: "Contact",
      getStarted: "Get Started",
    },
    whoAreWe: {
      title: "Who Are We",
      about: {
        title: "About Catch Talent",
        content:
          "Catch Talent is a premier recruitment and staffing agency specializing in connecting exceptional talent with innovative companies.",
      },
      mission: {
        title: "Our Mission",
        content:
          "We are dedicated to building meaningful connections between talented professionals and forward-thinking organizations.",
      },
      whatSetsUsApart: {
        title: "What Sets Us Apart",
        items: [
          "Personalized approach",
          "Deep industry expertise",
          "Long-term relationship focus",
          "Comprehensive solutions",
          "Commitment to excellence",
        ],
      },
      services: {
        title: "Our Services",
        forEmployers: {
          title: "For Employers",
          items: [
            "Executive Search",
            "Professional Recruitment",
            "Contract Staffing",
            "Recruitment Process Management",
          ],
        },
        forCandidates: {
          title: "For Candidates",
          items: [
            "Career Counseling",
            "Job Search Support",
            "Interview Preparation",
            "Professional Development",
          ],
        },
      },
      contact: {
        title: "Get in Touch",
        content:
          "Ready to take the next step in your career or find the perfect talent for your organization? Connect with our team to explore how we can help you achieve your goals.",
        button: "Contact Us",
      },
    },
    contact: {
      title: "Contact Us",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        company: "Company",
        message: "Message",
        submit: "Send Message",
      },
    },
  },
  tr: {
    navigation: {
      home: "Ana Sayfa",
      whoAreWe: "Biz Kimiz",
      contact: "İletişim",
      getStarted: "Başlayın",
    },
    whoAreWe: {
      title: "Biz Kimiz",
      about: {
        title: "Catch Talent Hakkında",
        content:
          "Catch Talent, istisnai yetenekleri yenilikçi şirketlerle buluşturmada uzmanlaşmış önde gelen bir işe alım ve personel ajansıdır. İşe alım dünyasını dönüştürme vizyonuyla kurulan şirketimiz, yetenek kazanımına taze ve kişiselleştirilmiş bir yaklaşım getirmektedir.",
      },
      mission: {
        title: "Misyonumuz",
        content:
          "Yetenekli profesyoneller ile ileriye dönük düşünen organizasyonlar arasında anlamlı bağlantılar kurmaya kendimizi adadık. Misyonumuz, stratejik yetenek çözümleri aracılığıyla hem adaylarımızın kariyerlerini hem de müşterilerimizin iş hedeflerini anlamak, desteklemek ve yükseltmektir.",
      },
      whatSetsUsApart: {
        title: "Bizi Özel Kılan",
        items: [
          "Kişiselleştirilmiş işe alım yaklaşımı",
          "Derin sektör uzmanlığı",
          "Uzun vadeli ilişki odağı",
          "Kapsamlı yetenek çözümleri",
          "Mükemmellik taahhüdü",
        ],
      },
      services: {
        title: "Hizmetlerimiz",
        forEmployers: {
          title: "İşverenler İçin",
          items: [
            "Üst Düzey Yönetici Araması",
            "Profesyonel İşe Alım",
            "Sözleşmeli Personel",
            "İşe Alım Süreç Yönetimi",
          ],
        },
        forCandidates: {
          title: "Adaylar İçin",
          items: [
            "Kariyer Danışmanlığı",
            "İş Arama Desteği",
            "Mülakat Hazırlığı",
            "Profesyonel Gelişim",
          ],
        },
      },
      contact: {
        title: "İletişime Geçin",
        content:
          "Kariyerinizde bir sonraki adımı atmaya veya organizasyonunuz için mükemmel yeteneği bulmaya hazır mısınız? Hedeflerinize ulaşmanıza nasıl yardımcı olabileceğimizi keşfetmek için ekibimizle iletişime geçin.",
        button: "İletişime Geçin",
      },
    },
    contact: {
      title: "İletişim",
      form: {
        name: "İsim",
        email: "E-posta",
        phone: "Telefon",
        company: "Şirket",
        message: "Mesajınız",
        submit: "Gönder",
      },
    },
  },
};

export const getTranslations = (lang: string) => {
  return translations[lang as keyof typeof translations] || translations.en;
};
