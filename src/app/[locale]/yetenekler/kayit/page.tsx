"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function TalentRegistration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    eyeColor: "",
    hairColor: "",
    languages: "",
    experience: "",
    agency: "",
    agencyContact: "",
    specialSkills: "",
    availability: "",
    location: "",
    bio: "",
  });

  const [photos, setPhotos] = useState<File[]>([]);
  const [video, setVideo] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newPhotos = Array.from(e.target.files);
      setPhotos((prev) => [...prev, ...newPhotos].slice(0, 10)); // Max 10 photos
    }
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideo(e.target.files[0]);
    }
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would typically send the data to your backend
    console.log("Form data:", formData);
    console.log("Photos:", photos);
    console.log("Video:", video);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    alert(
      "Kayıt başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz."
    );
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

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
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
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                  required
                />
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
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                  required
                />
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
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                  required
                />
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
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="age" className="block text-sm font-medium mb-2">
                  Yaş *
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                  required
                />
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
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                  required
                >
                  <option value="">Seçiniz</option>
                  <option value="erkek">Erkek</option>
                  <option value="kadın">Kadın</option>
                  <option value="diğer">Diğer</option>
                </select>
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
                  Boy (cm)
                </label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="weight"
                  className="block text-sm font-medium mb-2"
                >
                  Kilo (kg)
                </label>
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="eyeColor"
                  className="block text-sm font-medium mb-2"
                >
                  Göz Rengi
                </label>
                <input
                  type="text"
                  id="eyeColor"
                  name="eyeColor"
                  value={formData.eyeColor}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="hairColor"
                  className="block text-sm font-medium mb-2"
                >
                  Saç Rengi
                </label>
                <input
                  type="text"
                  id="hairColor"
                  name="hairColor"
                  value={formData.hairColor}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                />
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
                  Konuştuğunuz Diller
                </label>
                <input
                  type="text"
                  id="languages"
                  name="languages"
                  value={formData.languages}
                  onChange={handleInputChange}
                  placeholder="Örn: Türkçe, İngilizce, Almanca"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium mb-2"
                >
                  Oyunculuk Deneyimi
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
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
              </div>
              <div>
                <label
                  htmlFor="specialSkills"
                  className="block text-sm font-medium mb-2"
                >
                  Özel Yetenekler
                </label>
                <textarea
                  id="specialSkills"
                  name="specialSkills"
                  value={formData.specialSkills}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Dans, müzik, spor, aksiyon, vs."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white resize-none"
                />
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
                  Ajans Adı (Varsa)
                </label>
                <input
                  type="text"
                  id="agency"
                  name="agency"
                  value={formData.agency}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="agencyContact"
                  className="block text-sm font-medium mb-2"
                >
                  Ajans İletişim Bilgileri
                </label>
                <input
                  type="text"
                  id="agencyContact"
                  name="agencyContact"
                  value={formData.agencyContact}
                  onChange={handleInputChange}
                  placeholder="E-posta veya telefon"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                />
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
                  Tanıtım Videosu (Maksimum 2 dakika)
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
                  Kendinizi tanıtan kısa bir video. (İsteğe bağlı)
                </p>
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
                  Şehir
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="availability"
                  className="block text-sm font-medium mb-2"
                >
                  Müsaitlik Durumu
                </label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                >
                  <option value="">Seçiniz</option>
                  <option value="tam-zamanli">Tam Zamanlı</option>
                  <option value="yarim-zamanli">Yarı Zamanlı</option>
                  <option value="hafta-sonu">Hafta Sonu</option>
                  <option value="proje-bazli">Proje Bazlı</option>
                </select>
              </div>
              <div>
                <label htmlFor="bio" className="block text-sm font-medium mb-2">
                  Hakkınızda
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Kendinizi tanıtın, deneyimlerinizi ve hedeflerinizi paylaşın..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white resize-none"
                />
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
