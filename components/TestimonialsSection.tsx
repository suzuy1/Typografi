import React from 'react';

const testimonials = [
  {
    quote: "Bekerja dengan Tipografi adalah sebuah terobosan. Perhatian mereka terhadap detail dan visi kreatif mengubah suara merek kami menjadi sesuatu yang benar-benar menarik.",
    name: 'Sarah Johnson',
    company: 'CEO, Innovate Co.',
  },
  {
    quote: "Tingkat profesionalisme dan keahlian tipografi mereka tidak ada tandingannya. Mereka memberikan identitas visual yang melebihi semua ekspektasi kami.",
    name: 'Michael Chen',
    company: 'Art Director, Visionary Studios',
  },
    {
    quote: "Dari awal hingga akhir, prosesnya berjalan mulus. Hasil akhirnya tidak hanya indah tetapi juga sangat efektif dalam mengkomunikasikan pesan inti kami.",
    name: 'Emily Rodriguez',
    company: 'Marketing Lead, Nexus Corp',
  },
];

const QuoteIcon = () => (
    <svg className="absolute top-0 left-0 w-16 h-16 text-gray-800 transform -translate-x-6 -translate-y-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.333 8h-4.666v16h16v-4.667c0-2.933-2.367-5.333-5.333-5.333h-1.333c-.733 0-1.333-.6-1.333-1.333v-4.667zM27.333 8h-4.667v16h16v-4.667c0-2.933-2.367-5.333-5.333-5.333h-1.333c-.733 0-1.333-.6-1.333-1.333v-4.667z"></path>
    </svg>
)

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 scroll-mt-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 
            className="font-display text-4xl sm:text-5xl font-bold tracking-tighter"
          >
            <div className="line-wrap">
              <div data-aos="reveal-up">Apa Kata Klien Kami</div>
            </div>
          </h2>
          <p 
            className="max-w-2xl mx-auto text-lg text-gray-400 mt-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Kisah nyata dari para mitra yang telah merasakan kekuatan tipografi yang hebat.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-8 rounded-lg relative border border-gray-800 transition-all duration-300 hover:border-brand-blue hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
                <QuoteIcon />
              <blockquote className="relative z-10 text-xl text-gray-300 italic mb-6">
                "{testimonial.quote}"
              </blockquote>
              <footer className="relative z-10">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-brand-blue">{testimonial.company}</p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;