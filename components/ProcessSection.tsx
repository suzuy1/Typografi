import React from 'react';

const processSteps = [
  {
    number: '01',
    title: 'Penemuan & Strategi',
    description: 'Kami memulai dengan memahami merek, audiens, dan tujuan Anda. Fase ini adalah tentang mendengarkan secara mendalam dan perencanaan strategis untuk menetapkan arah yang jelas.',
  },
  {
    number: '02',
    title: 'Konsep & Desain',
    description: 'Tim kreatif kami menjelajahi berbagai gaya tipografi dan konsep tata letak. Kami merancang arahan visual yang selaras dengan strategi dan menghidupkan pesan Anda.',
  },
  {
    number: '03',
    title: 'Eksekusi & Penyempurnaan',
    description: 'Dengan konsep yang terpilih, kami membangun desain dengan cermat, memperhatikan setiap detail jarak, hierarki, dan keterbacaan untuk hasil akhir yang sempurna.',
  },
  {
    number: '04',
    title: 'Pengiriman & Dampak',
    description: 'Kami mengirimkan aset final, siap untuk memikat audiens Anda. Karya kami tidak hanya terlihat bagus—ia berfungsi, berkomunikasi, dan menciptakan dampak.',
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-black/50 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 
            className="font-display text-4xl sm:text-5xl font-bold tracking-tighter"
          >
            <div className="line-wrap">
              <div data-aos="reveal-up">Proses Kreatif Kami</div>
            </div>
          </h2>
          <p 
            className="max-w-2xl mx-auto text-lg text-gray-400 mt-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Sebuah perjalanan yang efisien dari konsep hingga mahakarya, memastikan kejelasan dan keunggulan di setiap langkah.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className="border border-gray-800 p-8 rounded-lg transition-transform duration-300 hover:-translate-y-2 bg-gray-900/30"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="font-display font-bold text-4xl sm:text-5xl text-brand-blue mb-4">{step.number}</div>
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;