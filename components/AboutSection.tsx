import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-black/50 relative scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-5 gap-8 md:gap-16 items-center">
          <div className="md:col-span-2 relative z-10">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
              <div className="line-wrap">
                <div data-aos="reveal-up">Filosofi <span className="text-brand-blue">Bentuk</span></div>
              </div>
              <div className="line-wrap">
                <div data-aos="reveal-up" data-aos-delay="100">&amp; Fungsi.</div>
              </div>
            </h2>
          </div>
          <div className="md:col-span-3 text-lg md:text-xl text-gray-400 space-y-6" data-aos="fade-up" data-aos-delay="300">
            <p>
              Tipografi lebih dari sekadar menyusun huruf di atas halaman. Ini adalah seni memberi kehidupan pada teks, memberinya suara, kepribadian, dan tujuan. Ia adalah konduktor sunyi komunikasi, yang memandu mata pembaca dan membentuk respons emosional mereka.
            </p>
            <p>
              Kami percaya pada proses desain di mana setiap pilihan jenis huruf, ketebalan, dan jarak dibuat dengan sengaja. Pendekatan kami menggabungkan prinsip-prinsip tipografi abadi dengan estetika modern untuk menciptakan tata letak yang tidak hanya indah tetapi juga sangat jelas dan efektif.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;