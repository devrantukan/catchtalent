"use client";

import { motion } from "framer-motion";

export default function Producers() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          Yapımcılar İçin
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-xl mb-6">
            Doğru Oyuncu, Güçlü Yapım
            <br /> <br />
            Bir yapımın başarısında hikâyeyi taşıyan en önemli unsurlardan biri
            doğru oyuncu seçimidir. Cast süreci, sadece bir liste oluşturmak
            değil, projenin ruhuna en uygun yetenekleri bulmak ve yönetmenle
            birlikte en iyi performansı ortaya çıkaracak oyuncuları
            belirlemektir.
            <br /> <br />
            Biz, hikâyenizin gereksinimlerini en ince ayrıntısına kadar analiz
            ediyor, karakterlerinizi en iyi şekilde yansıtacak oyuncuları
            belirlemek için titizlikle çalışıyoruz. Yalnızca deneyimli isimleri
            değil, aynı zamanda yeni yetenekleri keşfetmeye de odaklanıyoruz.
            <br /> <br />
            Süreç boyunca sizlere hızlı, verimli ve yaratıcı çözümlerle, ulusal
            ve uluslararası oyuncu havuzumuzdaki n en iyi seçenekleri sunarak
            zaman ve bütçe yönetimini optimize ediyoruz.
            <br /> <br />
            Her projeye özel yaklaşıyoruz ve sadece oyuncu seçiminde değil, set
            içi oyuncu yönetimi ve gerektiğinde oyuncu koçluğu ile de projeye
            katkı sağlıyoruz. Deneyimimiz ve sektördeki bağlantılarımız
            sayesinde, prodüksiyon sürecinizin en önemli aşamalarından biri olan
            cast sürecini sizin için sorunsuz ve verimli hale getiriyoruz.
            <br /> <br />
            Doğru oyuncularla güçlü projeler yaratmak için buradayız.
          </p>
          {/* Add more content as needed */}
        </motion.div>
      </div>
    </div>
  );
}
