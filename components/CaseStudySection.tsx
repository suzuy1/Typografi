import React from 'react';

const CaseStudySection: React.FC = () => {
  return (
    <section id="case-study" className="py-24 md:py-32 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 
            className="font-display text-4xl sm:text-5xl font-bold tracking-tighter"
          >
            <div className="line-wrap">
              <div data-aos="reveal-up">Studi Kasus: Rebrand <span className="text-brand-blue">Nexus Corp</span></div>
            </div>
          </h2>
          <p 
            className="max-w-3xl mx-auto text-lg text-gray-400 mt-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Dari Kuno menjadi Dinamis: Transformasi Tipografi yang Mendefinisikan Ulang sebuah Merek.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div data-aos="fade-right" data-aos-delay="200">
            <img 
              src="https://placehold.co/1000x800/0a0a0a/3b82f6/png?text=Rebrand+Nexus+Corp&font=syne" 
              alt="Sebuah mockup materi merek Nexus Corp setelah desain ulang" 
              className="rounded-lg shadow-2xl object-cover w-full h-full"
            />
          </div>
          <div className="space-y-8 text-gray-300" data-aos="fade-left" data-aos-delay="400">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 text-white">Tantangan</h3>
              <p>Branding Nexus Corp terasa tidak konsisten dan gagal terhubung dengan audiens target mereka yang melek teknologi. Pesan visual mereka terfragmentasi di berbagai platform digital karena kurangnya sistem tipografi yang kohesif.</p>
            </div>
             <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 text-white">Solusi Tipografi Kami</h3>
              <p>Kami menerapkan perombakan total yang berpusat pada dua jenis huruf inti. 'Inter' dipilih untuk teks isi, memastikan keterbacaan yang jernih dan nuansa modern yang bersih. Untuk judul, 'Syne' Bold memberikan suara yang kuat dan percaya diri yang menyampaikan inovasi. Sistem baru ini membangun hierarki yang jelas, membuat komunikasi mereka menjadi langsung dan berdampak.</p>
            </div>
             <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 text-white">Hasil</h3>
              <p>Rebrand ini menghasilkan <span className="font-bold text-brand-blue">peningkatan 40% dalam keterlibatan pengguna</span> dan dorongan signifikan dalam pengenalan merek. Suara tipografi baru ini berhasil memposisikan ulang Nexus Corp sebagai pemimpin industri modern, membuktikan kekuatan huruf dalam membentuk persepsi.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;