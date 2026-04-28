import { Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xqewrqrv");

  if (state.succeeded) {
    return (
      <section className="min-h-screen bg-slate-900 px-6 py-20">
        <div className="max-w-3xl mx-auto text-center text-green-300 p-10 bg-green-500/10 border border-green-500/40 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Message envoyé !</h2>
          <p>Merci de m’avoir contacté. Je vous répondrai rapidement.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="min-h-screen bg-slate-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-4">
            Me contacter
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Je suis ouvert à de nouvelles opportunités.
          </p>
        </div>

        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-slate-800/50 backdrop-blur rounded-lg p-8 border border-slate-700 hover:border-indigo-500/50 transition w-full max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Prénom
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  required
                  className="w-full rounded-lg bg-slate-700/50 px-4 py-3 text-white border border-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Nom
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  required
                  className="w-full rounded-lg bg-slate-700/50 px-4 py-3 text-white border border-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-white mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full rounded-lg bg-slate-700/50 px-4 py-3 text-white border border-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full rounded-lg bg-slate-700/50 px-4 py-3 text-white border border-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 resize-none"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full group bg-linear-to-br from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
              <Send size={20} />
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
