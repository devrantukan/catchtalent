"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BizKimiz() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Biz Kimiz
        </motion.h1>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-[60vh] mb-16 rounded-2xl overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056"
            alt="Catch Talent Ofis"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent">
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-3xl font-bold mb-4">Catch Talent</h2>
              <p className="text-xl text-gray-200 max-w-2xl">
                İstisnai sanatçıları çığır açan projelerle buluşturan lider
                yetenek ajansı.
              </p>
            </div>
          </div>
        </motion.div>

        {/* About Sections */}
        <div className="space-y-24">
          {/* Section 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059"
                alt="Catch Talent Hakkında"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Hikayemiz</h2>
              <p className="text-gray-300">
                Catch Talent, cast direktörü Özgün Ozan tarafından kuruldu. 2013
                yılından bu yana Türkiye, Avrupa ve Orta Doğu’daki yetenekler ve
                yapım şirketleri ile iş birliği yaparak reklam, moda fotoğraf
                çekimleri, uzun metraj filmler, kısa filmler, belgeseller ve
                müzik klipleri gibi çeşitli medya projelerine katkı sağlıyoruz.
                Yıllara dayanan sektör deneyimimizle, her projeye sanatsal ve
                profesyonel çözümler sunan benzersiz bir vizyonla yaklaşıyoruz.
              </p>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6 md:order-2">
              <h2 className="text-3xl font-bold">Vizyonumuz</h2>
              <p className="text-gray-300">
                Uluslararası bağlantılarımız ve sektördeki uzmanlığımızla
                misyonumuz, doğru yetenekleri doğru projelerle buluşturmak ve
                yaratıcı sürecin en iyi şekilde işlemesini sağlamaktır. Ortak
                yapımlarda uzmanlaşarak, çok dilli oyuncular, yönetmenler ve set
                ekipleri ile çalışıyor; global yetenekleri etkileyici projelerle
                bir araya getiriyoruz. 🎬 Catch Talent, en iyi yetenekleri
                keşfetmek ve projelerinize değer katmak için burada!
              </p>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                alt="Vizyonumuz"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
