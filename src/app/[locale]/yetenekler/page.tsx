"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function YeteneklerPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold mb-8"
        >
          Oyuncular İçin
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text mb-6">
            Oyunculuk, sadece bir yetenek değil, aynı zamanda doğru fırsatlarla
            gelişen bir yolculuktur. Catch Talent olarak, yeni yetenekleri
            keşfetmek ve deneyimli isimleri projelerimizle buluşturmak için
            buradayız.
            <br /> <br />
            Menajerlik hizmeti vermiyor, oyuncu temsili yapmıyoruz. Sizi
            yalnızca cast direktörlüğünü yaptığımız projeler için
            değerlendiriyoruz. Eğer sözleşmeli olarak çalıştığınız bir ajans
            varsa, lütfen bunu kayıt formunda belirtin. Sizin için uygun
            projeler olduğunda, süreci en sağlıklı şekilde ilerletebilmek adına
            ajansınızla doğrudan iletişime geçebiliriz.
            <br /> <br />
            Her şey birkaç fotoğraf ve sizi daha yakından tanıyabileceğimiz kısa
            bir tanıtım videosu ile başlıyor. Kendinizi göstermeye ve
            yeteneğinizi sergilemeye hazır mısınız?
            <br /> <br />
            Sizi de aramızda görmek için sabırsızlanıyoruz!
          </p>

          <div className="text-center mt-8">
            <Link
              href="/tr/yetenekler/kayit"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-200 transition-colors"
            >
              Kayıt Ol
            </Link>
          </div>
          {/* Add more content as needed */}
        </motion.div>
      </div>
    </div>
  );
}
