import drumImg from "@/assets/dong-son-drum.jpg";
import patternImg from "@/assets/drum-pattern.png";
import { DrumOrnament } from "./DrumOrnament";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-patina-deep">
      {/* Background drum image */}
      <div className="absolute inset-0">
        <img
          src={drumImg}
          alt="Trống đồng Đông Sơn cổ đại với hoa văn mặt trời và chim Lạc"
          className="h-full w-full object-cover opacity-40"
          width={1600}
          height={1600}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-patina-deep/70 via-patina-deep/50 to-patina-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-patina-deep via-transparent to-patina-deep/80" />
      </div>

      {/* Spinning ornament rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <img
          src={patternImg}
          alt=""
          className="w-[900px] h-[900px] max-w-none opacity-15 animate-spin-slow"
          aria-hidden
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[1100px] h-[1100px] rounded-full border border-gold/20 animate-spin-reverse" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-fade-up">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/40 bg-patina-deep/50 backdrop-blur-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-xs tracking-[0.3em] uppercase text-gold-light font-medium">
            Bảo tàng số · Di sản Việt
          </span>
        </div>

        <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.95] text-background mb-6">
          Hồn Việt
          <br />
          <span className="italic text-gradient-bronze">ngàn đời</span>
        </h1>

        <DrumOrnament className="text-gold/60 w-64 h-5 mx-auto my-8" />

        <p className="text-lg md:text-xl text-background/75 max-w-2xl mx-auto leading-relaxed font-light">
          Hành trình qua bốn nghìn năm văn hiến — từ tiếng trống đồng Đông Sơn vọng từ thuở Văn Lang,
          đến những làn điệu quan họ, ca trù, cồng chiêng còn ngân vang đến hôm nay.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
            href="#timeline"
            className="group px-8 py-4 bg-gradient-to-r from-gold-deep to-gold text-patina-deep font-medium tracking-wide hover:shadow-warm transition-all duration-500 ease-out"
          >
            Khám phá dòng thời gian
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#heritage"
            className="px-8 py-4 border border-gold/40 text-gold-light hover:bg-gold/10 transition-all duration-500"
          >
            Di sản phi vật thể
          </a>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-4 text-background/60">
          {[
            ["4000+", "năm văn hiến"],
            ["15", "di sản UNESCO"],
            ["54", "dân tộc anh em"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="font-display text-3xl text-gold">{n}</div>
              <div className="text-xs uppercase tracking-widest mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-light/60 text-xs tracking-widest uppercase animate-float">
        ↓ cuộn xuống
      </div>
    </section>
  );
};
