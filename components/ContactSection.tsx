import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-black/50 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 
            className="font-display text-4xl sm:text-5xl font-bold tracking-tighter"
          >
            <div className="line-wrap">
              <div data-aos="reveal-up">Mari Berkreasi Bersama</div>
            </div>
          </h2>
          <p 
            className="max-w-2xl mx-auto text-lg text-gray-400 mt-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Punya proyek dalam pikiran? Kami ingin sekali mendengarnya. Hubungi kami dan mari kita mulai percakapan.
          </p>
        </div>
        <div 
            className="max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
        >
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Alamat Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                  placeholder="anda@contoh.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Pesan</label>
              <textarea 
                id="message" 
                name="message" 
                rows={5}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition"
                placeholder="Ceritakan tentang proyek Anda..."
              ></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit"
                className="bg-brand-blue text-white font-bold py-3 px-10 text-base sm:py-4 sm:px-12 sm:text-lg rounded-full hover:bg-blue-500 transition-colors duration-300"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;