"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BizKimiz() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
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
                src="/hikayemiz.jpeg"
                alt="Catch Talent Hakkında"
                fill
                className="object-cover p-0 md:p-16"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Hikayemiz</h2>
              <p className="text-gray-300">
                Catch Talent, cast direktörü Özgün Ozan tarafından kuruldu.{" "}
                <br /> <br /> 2013 yılından bu yana reklam, moda fotoğraf
                çekimleri, uzun metraj filmler, kısa filmler, belgeseller ve
                müzik klipleri gibi farklı medya projeleri için Türkiye, Avrupa
                ve Orta Doğu’daki yetenekler ve yapım firmaları ile çalışıyor;
                her projeye özel bir vizyonla yaklaşarak sanatsal ve profesyonel
                çözümler sunuyoruz. <br /> <br /> Uluslararası bağlantılarımız
                ve sektördeki uzmanlığımız sayesinde, özellikle ortak yapımlar
                için yalnızca yabancı dil konuşan oyuncuları değil, yönetmenleri
                ve set ekiplerini de bir araya getiriyoruz. <br /> <br /> 🎬
                Catch Talent, sektörün en iyi yeteneklerini keşfetmek ve
                projelerinize değer katmak için burada!
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
            <div className="space-y-6 md:order-1 order-2">
              <h2 className="text-3xl font-bold">Vizyonumuz</h2>
              <p className="text-gray-300">
                Uluslararası bağlantılarımız ve sektördeki uzmanlığımızla
                misyonumuz, doğru yetenekleri doğru projelerle buluşturmak ve
                yaratıcı sürecin en iyi şekilde işlemesini sağlamaktır. Ortak
                yapımlarda uzmanlaşarak, çok dilli oyuncular, yönetmenler ve set
                ekipleri ile çalışıyor; global yetenekleri etkileyici projelerle
                bir araya getiriyoruz.
                <br /> <br />
                🎬 Catch Talent, en iyi yetenekleri keşfetmek ve projelerinize
                değer katmak için burada!
              </p>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden md:order-2 order-1">
              <Image
                src="/vizyonumuz.jpeg"
                alt="Vizyonumuz"
                fill
                className="object-cover p-0 md:p-16"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
