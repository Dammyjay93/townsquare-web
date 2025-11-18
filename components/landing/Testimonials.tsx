'use client';

import { Star } from 'phosphor-react';

export default function Testimonials() {
  const rowOneTestimonials = [
    {
      name: 'Chioma A.',
      text: 'This is exactly what I needed. I can already see stylists I know and new ones I want to try. Way better than scrolling through Instagram.',
      rating: 5,
    },
    {
      name: 'Tunde O.',
      text: 'Finally! Having all the vendors in one app with their work visible makes so much sense. This will save me hours.',
      rating: 5,
    },
    {
      name: 'Amara N.',
      text: 'I love how simple it is. Just browse, see their work, and message directly on WhatsApp. No complicated booking systems.',
      rating: 5,
    },
    {
      name: 'Yemi K.',
      text: 'Been waiting for something like this. The direct contact feature is perfect. No middleman, just straight to the vendor.',
      rating: 5,
    },
    {
      name: 'Ada M.',
      text: 'Showed this to my friends and everyone wants access. The idea of having all Nigerian vendors in Berlin in one place is brilliant.',
      rating: 5,
    },
    {
      name: 'Chidi P.',
      text: 'The app is clean and easy to use. I can already tell this will be my go-to when I need anything.',
      rating: 5,
    },
  ];

  const rowTwoTestimonials = [
    {
      name: 'Folake B.',
      text: 'As someone new to Berlin, this app solves a real problem. I can see who does what before reaching out. Super helpful.',
      rating: 5,
    },
    {
      name: 'Emeka C.',
      text: 'Testing this as a vendor. The setup was easy and I like that customers can see my work before contacting me. No time wasted.',
      rating: 5,
    },
    {
      name: 'Nneka D.',
      text: 'The interface is intuitive. I found what I was looking for in seconds. This is going to be huge for the community.',
      rating: 5,
    },
    {
      name: 'Bola S.',
      text: 'Love the concept. Instead of asking around in group chats, I can just open the app and browse. Wish this existed years ago.',
      rating: 5,
    },
    {
      name: 'Kemi L.',
      text: 'The portfolio feature is perfect. I can see actual work before deciding who to contact. Makes choosing so much easier.',
      rating: 5,
    },
    {
      name: 'Uche R.',
      text: 'Simple, straightforward, and exactly what the Nigerian community in Berlin needs. Already recommending it to friends.',
      rating: 5,
    },
  ];

  // Duplicate for seamless infinite scroll
  const duplicatedRowOne = [...rowOneTestimonials, ...rowOneTestimonials];
  const duplicatedRowTwo = [...rowTwoTestimonials, ...rowTwoTestimonials];

  const TestimonialCard = ({ testimonial }: { testimonial: typeof rowOneTestimonials[0] }) => (
    <div className="bg-slate-50 rounded-2xl p-6 space-y-4 w-[280px] sm:w-[320px] flex-shrink-0">
      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={18} weight="fill" className="text-primary-500" />
        ))}
      </div>

      {/* Text */}
      <p className="text-sm text-slate-700 leading-relaxed line-clamp-4">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center flex-shrink-0">
          <span className="text-sm font-semibold text-primary-600">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <p className="text-sm font-semibold text-slate-900">
          {testimonial.name}
        </p>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="w-full py-12 sm:py-16 overflow-hidden">
      {/* Header */}
      <div className="text-center space-y-4 mb-12 px-4 max-w-6xl mx-auto">
        <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 text-xs font-medium rounded-full uppercase tracking-wide">
          Early Feedback
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
          What early testers are saying
        </h2>
        <p className="text-base text-slate-600 max-w-2xl mx-auto">
          Feedback from Nigerians in Berlin testing TownSquare.
        </p>
      </div>

      {/* Two Rows with Infinite Scroll - Full Viewport Width */}
      <div className="space-y-6">
        {/* Row 1 - Scrolling Right to Left */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4 sm:gap-6 animate-scroll-left">
            {duplicatedRowOne.map((testimonial, index) => (
              <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolling Left to Right */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4 sm:gap-6 animate-scroll-right">
            {duplicatedRowTwo.map((testimonial, index) => (
              <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
