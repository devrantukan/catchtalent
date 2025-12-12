"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { useTalentRegistration } from "@/hooks/useTalentRegistration";

export default function TalentRegistration() {
  const { form, isSubmitting, submitError, submitSuccess, onSubmit } =
    useTalentRegistration();
  const {
    register,
    formState: { errors },
    setValue,
  } = form;

  const [photos, setPhotos] = useState<File[]>([]);
  const [video, setVideo] = useState<File | null>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newPhotos = Array.from(e.target.files);
      console.log(
        "Selected photos:",
        newPhotos.map((photo) => ({
          name: photo.name,
          type: photo.type,
          size: photo.size,
        }))
      );
      const updatedPhotos = [...photos, ...newPhotos].slice(0, 10); // Max 10 photos
      setPhotos(updatedPhotos);
      setValue("photos", updatedPhotos);
    }
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedVideo = e.target.files[0];
      console.log("Selected video:", {
        name: selectedVideo.name,
        type: selectedVideo.type,
        size: selectedVideo.size,
      });
      setVideo(selectedVideo);
      setValue("video", selectedVideo);
    }
  };

  const removePhoto = (index: number) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setPhotos(updatedPhotos);
    setValue("photos", updatedPhotos);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Yetenek Kayıt Formu
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Projelerimizde yer almak için aşağıdaki formu doldurun. En kısa
            sürede sizinle iletişime geçeceğiz.
          </p>
        </motion.div>

        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-900/50 border border-green-500 rounded-lg p-6 mb-8"
          >
            <h3 className="text-green-400 font-bold text-lg mb-2">
              Kayıt Başarılı!
            </h3>
            <p className="text-green-300">
              Kayıt başarıyla gönderildi! En kısa sürede sizinle iletişime
              geçeceğiz.
            </p>
          </motion.div>
        )}

        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-900/50 border border-red-500 rounded-lg p-6 mb-8"
          >
            <h3 className="text-red-400 font-bold text-lg mb-2">Hata!</h3>
            <p className="text-red-300">{submitError}</p>
          </motion.div>
        )}

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={onSubmit}
          className="space-y-8"
        >
          {/* Kişisel Bilgiler */}
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6 text-white">
              Kişisel Bilgiler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium mb-2"
                >
                  Ad *
                </label>
                <input
                  type="text"
                  id="firstName"
                  {...register("firstName")}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                />
                {errors.firstName && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium mb-2"
                >
                  Soyad *
                </label>
                <input
                  type="text"
                  id="lastName"
                  {...register("lastName")}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                />
                {errors.lastName && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  E-posta *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="age" className="block text-sm font-medium mb-2">
                  Yaş *
                </label>
                <input
                  type="number"
                  id="age"
                  {...register("age", { valueAsNumber: true })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                />
                {errors.age && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.age.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium mb-2"
                >
                  Cinsiyet *
                </label>
                <select
                  id="gender"
                  {...register("gender")}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                >
                  <option value="">Seçiniz</option>
                  <option value="erkek">Erkek</option>
                  <option value="kadın">Kadın</option>
                  <option value="diğer">Diğer</option>
                </select>
                {errors.gender && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.gender.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Fiziksel Özellikler */}
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6 text-white">
              Fiziksel Özellikler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="height"
                  className="block text-sm font-medium mb-2"
                >
                  Boy (cm) *
                </label>
                <input
                  type="number"
                  id="height"
                  {...register("height", { valueAsNumber: true })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                />
                {errors.height && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.height.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="weight"
                  className="block text-sm font-medium mb-2"
                >
                  Kilo (kg) *
                </label>
                <input
                  type="number"
                  id="weight"
                  {...register("weight", { valueAsNumber: true })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                />
                {errors.weight && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.weight.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="eyeColor"
                  className="block text-sm font-medium mb-2"
                >
                  Göz Rengi *
                </label>
                <input
                  type="text"
                  id="eyeColor"
                  {...register("eyeColor")}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                />
                {errors.eyeColor && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.eyeColor.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="hairColor"
                  className="block text-sm font-medium mb-2"
                >
                  Saç Rengi *
                </label>
                <input
                  type="text"
                  id="hairColor"
                  {...register("hairColor")}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                />
                {errors.hairColor && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.hairColor.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Profesyonel Bilgiler */}
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6 text-white">
              Profesyonel Bilgiler
            </h2>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="languages"
                  className="block text-sm font-medium mb-2"
                >
                  Konuştuğunuz Diller *
                </label>
                <input
                  type="text"
                  id="languages"
                  {...register("languages")}
                  placeholder="Örn: Türkçe, İngilizce, Almanca"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                />
                {errors.languages && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.languages.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium mb-2"
                >
                  Oyunculuk Deneyimi *
                </label>
                <select
                  id="experience"
                  {...register("experience")}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                >
                  <option value="">Seçiniz</option>
                  <option value="yeni-baslayan">Yeni Başlayan</option>
                  <option value="az-deneyimli">Az Deneyimli (1-2 yıl)</option>
                  <option value="orta-deneyimli">
                    Orta Deneyimli (3-5 yıl)
                  </option>
                  <option value="deneyimli">Deneyimli (5+ yıl)</option>
                  <option value="profesyonel">Profesyonel</option>
                </select>
                {errors.experience && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.experience.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="specialSkills"
                  className="block text-sm font-medium mb-2"
                >
                  Özel Yetenekler *
                </label>
                <textarea
                  id="specialSkills"
                  {...register("specialSkills")}
                  rows={3}
                  placeholder="Dans, müzik, spor, aksiyon, vs."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white resize-none"
                />
                {errors.specialSkills && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.specialSkills.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Ajans Bilgileri */}
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6 text-white">
              Ajans Bilgileri
            </h2>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="agency"
                  className="block text-sm font-medium mb-2"
                >
                  Ajans Adı *
                </label>
                <input
                  type="text"
                  id="agency"
                  {...register("agency")}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                />
                {errors.agency && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.agency.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="agencyContact"
                  className="block text-sm font-medium mb-2"
                >
                  Ajans İletişim Bilgileri *
                </label>
                <input
                  type="text"
                  id="agencyContact"
                  {...register("agencyContact")}
                  placeholder="E-posta veya telefon"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                />
                {errors.agencyContact && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.agencyContact.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Medya Dosyaları */}
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6 text-white">
              Medya Dosyaları
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Daha iyi bir sonuç için şu ipuçlarını takip edin: * Yarım vücut
              plan fotoğrafınız ve tanıtım videonuz için akıllı telefonunuzun
              kamerasını mutlaka yatay kullanın. * Boy fotoğrafınız için
              kamerayı dikey kullanabilirsiniz. Herhangi bir nesne, mobilya veya
              kapı/pencere olmayan düz ve iyi ışık alan bir arka planda durmanız
              sizi daha iyi gösterecektir. * Günlük kıyafetler ile bakımlı bir
              görünümüz olmalı. * Kadınlar için hafif makyaj önemlidir. * Güler
              yüzlü olmayı ihmal etmeyin.
            </p>
            <div className="space-y-6">
              {/* Fotoğraflar */}
              <div>
                <label
                  htmlFor="photos"
                  className="block text-sm font-medium mb-2"
                >
                  Fotoğraflar (Maksimum 10 adet) *
                </label>
                <input
                  type="file"
                  id="photos"
                  name="photos"
                  multiple
                  accept="image/*"
                  onChange={handlePhotoChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:bg-gray-200"
                />
                <p className="text-sm text-gray-400 mt-2">
                  Profesyonel headshot ve full body fotoğrafları tercih edilir.
                </p>
                {errors.photos && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.photos.message}
                  </p>
                )}
                {photos.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-300 mb-2">
                      Seçilen fotoğraflar:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {photos.map((photo, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-gray-800 px-3 py-1 rounded-full text-sm"
                        >
                          <span className="text-gray-300">{photo.name}</span>
                          <button
                            type="button"
                            onClick={() => removePhoto(index)}
                            className="ml-2 text-red-400 hover:text-red-300"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Video */}
              <div>
                <label
                  htmlFor="video"
                  className="block text-sm font-medium mb-2"
                >
                  Tanıtım Videosu (Maksimum 2 dakika) *
                </label>
                <input
                  type="file"
                  id="video"
                  name="video"
                  accept="video/*"
                  onChange={handleVideoChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:bg-gray-200"
                />
                <p className="text-sm text-gray-400 mt-2">
                  Kendinizi tanıtan kısa bir video.
                </p>
                {errors.video && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.video.message}
                  </p>
                )}
                {video && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-300">
                      Seçilen video: {video.name}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Ek Bilgiler */}
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6 text-white">Ek Bilgiler</h2>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium mb-2"
                >
                  Şehir *
                </label>
                <input
                  type="text"
                  id="location"
                  {...register("location")}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                />
                {errors.location && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.location.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="availability"
                  className="block text-sm font-medium mb-2"
                >
                  Müsaitlik Durumu *
                </label>
                <select
                  id="availability"
                  {...register("availability")}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                >
                  <option value="">Seçiniz</option>
                  <option value="tam-zamanli">Tam Zamanlı</option>
                  <option value="yarim-zamanli">Yarı Zamanlı</option>
                  <option value="hafta-sonu">Hafta Sonu</option>
                  <option value="proje-bazli">Proje Bazlı</option>
                </select>
                {errors.availability && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.availability.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="bio" className="block text-sm font-medium mb-2">
                  Hakkınızda *
                </label>
                <textarea
                  id="bio"
                  {...register("bio")}
                  rows={4}
                  placeholder="Kendinizi tanıtın, deneyimlerinizi ve hedeflerinizi paylaşın..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white resize-none"
                />
                {errors.bio && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.bio.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-12 py-4 rounded-lg font-medium text-lg transition-colors ${
                isSubmitting
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              {isSubmitting ? "Gönderiliyor..." : "Kayıt Ol"}
            </motion.button>
            <p className="text-sm text-gray-400 mt-4">
              * işaretli alanlar zorunludur
            </p>
          </div>
        </motion.form>

        {/* Back to Talents Page */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/tr/yetenekler"
            className="text-gray-400 hover:text-white transition-colors"
          >
            ← Yetenekler sayfasına dön
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
