import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products, categories, reviews } from "../data/products";
import { motion } from "motion/react";
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  RefreshCw,
  Headset,
  Star,
  Play,
} from "lucide-react";

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
            alt="Hero background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
              Limited Edition Collection
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9] mb-8">
              CRAFTED FOR <br />
              <span className="text-emerald-600">MODERN</span> LIVING.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              Experience the perfect intersection of luxury and utility. Our
              premium essentials are designed to elevate every moment of your
              day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/products"
                className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all hover:scale-105 active:scale-95 group shadow-xl"
              >
                SHOP COLLECTION{" "}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <button className="flex items-center justify-center gap-3 font-bold text-slate-900 px-8 py-5 rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white">
                  <Play size={16} fill="white" />
                </div>
                OUR STORY
              </button>
            </div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute right-[-10%] top-[20%] hidden lg:block w-[40%] aspect-square"
        >
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&q=80"
            alt="Featured product"
            className="w-full h-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
          />
        </motion.div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Truck size={24} />,
              title: "Free Shipping",
              desc: "On all orders over $150",
            },
            {
              icon: <ShieldCheck size={24} />,
              title: "Secure Payment",
              desc: "100% secure checkout",
            },
            {
              icon: <RefreshCw size={24} />,
              title: "Easy Returns",
              desc: "30-day return policy",
            },
            {
              icon: <Headset size={24} />,
              title: "24/7 Support",
              desc: "Dedicated support team",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest mb-4 block">
                Categories
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 leading-tight">
                SHOP BY <span className="text-slate-400">CATEGORY.</span>
              </h2>
            </div>
            <a
              href="/products"
              className="text-sm font-bold flex items-center gap-2 hover:text-emerald-600 transition-colors group"
            >
              VIEW ALL{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 3).map((cat, idx) => (
              <motion.a
                href={`/products?category=${cat.name}`}
                key={idx}
                whileHover={{ y: -10 }}
                className={`relative overflow-hidden rounded-3xl group ${idx === 0 ? "lg:row-span-2 md:h-auto h-[400px]" : "h-[300px]"}`}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-3xl font-black text-white tracking-tighter">
                    {cat.name.toUpperCase()}
                  </h3>
                  <p className="text-white/80 text-sm font-medium mt-2 flex items-center gap-2">
                    Explore Collection <ArrowRight size={16} />
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest mb-4 block">
              Trending Now
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">
              BEST SELLERS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="/products"
              className="inline-block bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-lg"
            >
              VIEW ALL PRODUCTS
            </a>
          </div>
        </div>
      </section>

      {/* Discount Banner */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/10 skew-x-12 translate-x-1/4" />

            <div className="relative z-10 text-center md:text-left max-w-xl">
              <span className="bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest inline-block">
                Season Finale Sale
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-none">
                UP TO 40% OFF <br />
                <span className="text-emerald-500">EVERYTHING.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 font-medium">
                Use code{" "}
                <span className="text-white border-b border-white">AURA40</span>{" "}
                at checkout. Offer ends in 48 hours.
              </p>
              <a
                href="/products"
                className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-emerald-500 hover:text-white transition-all inline-block"
              >
                SHOP THE SALE
              </a>
            </div>

            <div className="relative z-10 w-full md:w-1/2 flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80"
                  alt="Promo"
                  className="rounded-2xl shadow-2xl rotate-3"
                />
                <img
                  src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&q=80"
                  alt="Promo"
                  className="rounded-2xl shadow-2xl -rotate-3 translate-y-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest mb-4 block">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">
              WHAT OUR <span className="text-slate-400">COMMUNITY SAYS.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 relative group"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${i < review.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"}`}
                    />
                  ))}
                </div>
                <p className="text-slate-600 mb-8 italic text-lg leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center font-bold text-emerald-700">
                    {review.user[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{review.user}</h4>
                    <p className="text-xs text-emerald-600 font-bold uppercase tracking-widest">
                      {review.product}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-6 uppercase">
              Join the <span className="text-emerald-600">Aura</span> Club.
            </h2>
            <p className="text-slate-600 text-lg mb-10 font-medium">
              Be the first to hear about new arrivals, private sales, and
              exclusive events.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:border-emerald-500 transition-colors shadow-sm text-lg"
              />
              <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-lg text-lg">
                SUBSCRIBE
              </button>
            </form>
            <p className="mt-6 text-xs text-slate-400">
              By subscribing, you agree to our Privacy Policy and Terms of
              Service.
            </p>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}
