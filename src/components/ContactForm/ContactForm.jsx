import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset form after submission
    setIsSubmitted(true);
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="min-h-screen bg-slate-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Parlons de votre projet
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Vous avez une idée en tête ? Une question ? N'hésitez pas à me
            contacter. Je serai ravi de discuter avec vous.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Email */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-indigo-500 transition">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-500/20 rounded-lg">
                    <Mail className="text-indigo-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-slate-300">votre.email@example.com</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-indigo-500 transition">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-500/20 rounded-lg">
                    <Phone className="text-indigo-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Téléphone</h3>
                    <p className="text-slate-300">+33 (0) 6 XX XX XX XX</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-indigo-500 transition">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-500/20 rounded-lg">
                    <MapPin className="text-indigo-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Localisation
                    </h3>
                    <p className="text-slate-300">Votre ville, Votre région</p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-linear-to-br from-indigo-500/10 to-purple-500/10 rounded-lg p-6 border border-indigo-500/30">
                <p className="text-indigo-300 font-semibold mb-2">
                  ⚡ Temps de réponse
                </p>
                <p className="text-slate-300">
                  Je vous réponds généralement dans les 24 heures.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-slate-800/50 backdrop-blur rounded-lg p-8 border border-slate-700 hover:border-indigo-500/50 transition">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold text-white mb-2">
                    Prénom
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 border border-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition"
                    placeholder="Vincent"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold text-white mb-2">
                    Nom
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 border border-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition"
                    placeholder="Maury"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-white mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 border border-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition"
                  placeholder="votre.email@example.com"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 border border-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition resize-none"
                  placeholder="Votre message ici..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full group bg-linear-to-br from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                <Send size={20} />
                Envoyer le message
              </button>

              {/* Success Message */}
              {isSubmitted && (
                <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <p className="text-green-300 font-semibold">
                    ✓ Message envoyé avec succès ! Merci de m'avoir contacté.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
