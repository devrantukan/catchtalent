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
    alert("Registration submitted successfully! We will contact you soon.");
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
            Talent Registration Form
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Fill out the form below to be part of our projects. We will contact
            you as soon as possible.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {/* Personal Information */}
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6 text-white">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium mb-2"
                >
                  First Name *
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
                  Last Name *
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
                  Email *
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
                  Phone *
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
                  Age *
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
                  Gender *
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                  required
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Physical Characteristics */}
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6 text-white">
              Physical Characteristics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="height"
                  className="block text-sm font-medium mb-2"
                >
                  Height (cm)
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
                  Weight (kg)
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
                  Eye Color
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
                  Hair Color
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

          {/* Professional Information */}
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6 text-white">
              Professional Information
            </h2>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="languages"
                  className="block text-sm font-medium mb-2"
                >
                  Languages Spoken
                </label>
                <input
                  type="text"
                  id="languages"
                  name="languages"
                  value={formData.languages}
                  onChange={handleInputChange}
                  placeholder="e.g., English, Turkish, German"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="experience"
                  className="block text-sm font-medium mb-2"
                >
                  Acting Experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                >
                  <option value="">Select</option>
                  <option value="beginner">Beginner</option>
                  <option value="some-experience">
                    Some Experience (1-2 years)
                  </option>
                  <option value="moderate-experience">
                    Moderate Experience (3-5 years)
                  </option>
                  <option value="experienced">Experienced (5+ years)</option>
                  <option value="professional">Professional</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="specialSkills"
                  className="block text-sm font-medium mb-2"
                >
                  Special Skills
                </label>
                <textarea
                  id="specialSkills"
                  name="specialSkills"
                  value={formData.specialSkills}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Dancing, music, sports, action, etc."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white resize-none"
                />
              </div>
            </div>
          </div>

          {/* Agency Information */}
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6 text-white">
              Agency Information
            </h2>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="agency"
                  className="block text-sm font-medium mb-2"
                >
                  Agency Name (If any)
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
                  Agency Contact Information
                </label>
                <input
                  type="text"
                  id="agencyContact"
                  name="agencyContact"
                  value={formData.agencyContact}
                  onChange={handleInputChange}
                  placeholder="Email or phone"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                />
              </div>
            </div>
          </div>

          {/* Media Files */}
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6 text-white">Media Files</h2>
            <p className="text-sm text-gray-400 mb-6">
              For a better result, please follow these tips: * Always use your
              smartphone&apos;s camera horizontally for half-body shots and
              promotional videos. You can use the camera vertically for
              full-body shots. * Standing in front of a plain background with
              good lighting, free of objects, furniture, or doors/windows, will
              make you look better. * Wear casual clothes and ensure you have a
              neat appearance. Light makeup is important for women. * Don’t
              forget to smile.
            </p>
            <div className="space-y-6">
              {/* Photos */}
              <div>
                <label
                  htmlFor="photos"
                  className="block text-sm font-medium mb-2"
                >
                  Photos (Maximum 10) *
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
                  Professional headshots and full body photos are preferred.
                </p>
                {photos.length > 0 && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-300 mb-2">
                      Selected photos:
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
                  Introduction Video (Maximum 2 minutes)
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
                  A short video introducing yourself. (Optional)
                </p>
                {video && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-300">
                      Selected video: {video.name}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-gray-900/50 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6 text-white">
              Additional Information
            </h2>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium mb-2"
                >
                  City
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
                  Availability
                </label>
                <select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 text-white"
                >
                  <option value="">Select</option>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="weekends">Weekends</option>
                  <option value="project-based">Project Based</option>
                </select>
              </div>
              <div>
                <label htmlFor="bio" className="block text-sm font-medium mb-2">
                  About You
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about yourself, your experiences and goals..."
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
              {isSubmitting ? "Submitting..." : "Register"}
            </motion.button>
            <p className="text-sm text-gray-400 mt-4">* Required fields</p>
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
            href="/talents"
            className="text-gray-400 hover:text-white transition-colors"
          >
            ← Back to Talents page
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
