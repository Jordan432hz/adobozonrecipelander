import Image from "next/image";

function OptinCard() {
  return (
    <div className="flex flex-col w-[460px] mt-[6px] p-[28px] rounded-lg gap-[14px] shadow-[8px_8px_0px_var(--color-green)] bg-white border-[3px] border-solid border-ink">
      <div className="flex flex-col gap-[2px]">
        <div className="font-display text-lg tracking-tight text-ink">
          GET THE FREE GUIDE
        </div>
        <div className="font-body text-sm text-ink-dim">
          5 recipes, straight to your inbox
        </div>
      </div>

      <div className="flex flex-col gap-[6px]">
        <label
          htmlFor="firstName"
          className="font-body font-bold text-xs tracking-wide uppercase text-green-dark"
        >
          First Name
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Your first name"
          className="flex items-center py-[13px] px-[14px] rounded-md bg-yellow-tint border-[1.5px] border-solid border-brown font-body text-base text-ink placeholder:text-ink-dim outline-none focus:border-blue-dark"
        />
      </div>

      <div className="flex flex-col gap-[6px]">
        <label
          htmlFor="email"
          className="font-body font-bold text-xs tracking-wide uppercase text-green-dark"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@email.com"
          className="flex items-center py-[13px] px-[14px] rounded-md bg-yellow-tint border-[1.5px] border-solid border-brown font-body text-base text-ink placeholder:text-ink-dim outline-none focus:border-blue-dark"
        />
      </div>

      <div className="flex flex-col items-center gap-[10px]">
        <button
          type="submit"
          className="flex items-center justify-center w-full p-2 rounded-md shadow-[4px_4px_0px_var(--color-ink)] bg-red border-[3px] border-solid border-ink font-display text-[17px] tracking-tight text-white cursor-pointer"
        >
          SEND ME THE RECIPES
        </button>
        <div className="font-body text-xs text-ink-dim">
          Just recipes &amp; tips. No spam, ever.
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  rotate,
  iconBg,
  icon,
  title,
  desc,
}: {
  rotate: string;
  iconBg: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div
      className={`flex flex-col items-center w-[250px] py-[28px] px-[20px] rounded-lg gap-[14px] shrink-0 bg-yellow-tint border-2 border-solid border-ink`}
      style={{ transform: `rotate(${rotate})` }}
    >
      <div
        className={`flex items-center justify-center shrink-0 rounded-full size-16 ${iconBg}`}
      >
        {icon}
      </div>
      <div className="font-display text-[15px] text-center tracking-tight leading-[18px] text-ink">
        {title}
      </div>
      <div className="font-body text-center text-ink-dim text-sm">{desc}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col w-[1440px] max-w-none mx-auto bg-white antialiased [font-synthesis:none]">
      {/* Top Bar */}
      <div className="flex items-center justify-center w-full py-[28px] px-8 gap-[14px] bg-white">
        <div className="font-display text-xl tracking-tight leading-none text-red">
          ADOBO&rsquo;ZON
        </div>
        <div className="w-[5px] h-[5px] rounded-full shrink-0 bg-brown" />
        <div className="font-body font-bold text-xs tracking-wider uppercase text-green">
          Adobo &amp; Saz&oacute;n in One Step
        </div>
      </div>

      {/* Hero */}
      <div className="flex items-center justify-center w-full pt-[56px] pb-[88px] gap-16 px-[80px] bg-yellow-tint">
        <div className="flex flex-col w-[520px] shrink-0 gap-[22px]">
          <div
            className="flex items-center w-fit py-1 px-2 rounded-full gap-1 bg-white border-2 border-solid border-blue"
            style={{ transform: "rotate(-2deg)" }}
          >
            <div className="w-[7px] h-[7px] rounded-full shrink-0 bg-red" />
            <div className="font-body font-bold text-[13px] tracking-wide uppercase text-blue-dark">
              100% Free Recipe Guide
            </div>
          </div>

          <div className="flex flex-col gap-[2px]">
            <div className="font-display tracking-tight text-ink text-5xl leading-[105%]">
              COOK LIKE
            </div>
            <div className="font-display tracking-tight text-red text-5xl leading-[105%]">
              ABUELA
            </div>
            <div className="font-accent text-[44px] leading-[110%] mt-[4px] font-black italic text-green">
              tonight.
            </div>
          </div>

          <div className="flex">
            <div className="font-body font-normal max-w-[460px] text-ink-dim text-lg leading-[165%]">
              Grab 5 Abuela-Approved Recipes Using Adobo&rsquo;Zon, free, and
              bring real Puerto Rican flavor to your table tonight. No
              artificial anything, no fuss.
            </div>
          </div>

          <OptinCard />
        </div>

        <div className="flex items-center justify-center w-[580px] h-[580px] shrink-0 relative">
          <div
            className="absolute w-[480px] h-[480px] top-[50px] left-[40px] bg-green"
            style={{
              borderRadius: "45% 55% 50% 50% / 50% 45% 55% 50%",
            }}
          />
          <div className="absolute w-[520px] h-[520px] top-[30px] left-[20px] rounded-full border-[3px] border-dashed border-blue" />
          <Image
            src="/images/free-recipe-guide.png"
            alt="Adobo'Zon Free Recipe Guide cover: 5 Abuela-Approved Recipes Using Adobo'Zon"
            width={520}
            height={520}
            priority
            className="absolute drop-shadow-[0_26px_30px_rgba(38,36,33,0.4)]"
            style={{ top: "60px", left: "30px", transform: "rotate(4deg)" }}
          />
          <div
            className="absolute flex items-center justify-center w-[108px] h-[108px] top-[10px] right-[-10px] rounded-full bg-blue border-[3px] border-solid border-white shadow-[0_8px_18px_rgba(4,123,205,0.4)]"
            style={{ transform: "rotate(12deg)" }}
          >
            <div className="flex flex-col items-center">
              <div className="font-display text-lg leading-none text-white">
                FREE
              </div>
              <div className="font-body font-bold text-[9px] tracking-wide uppercase mt-[2px] leading-3 text-white">
                Guide
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="flex flex-col items-center w-full py-[88px] px-[80px] gap-[20px] bg-green">
        <div
          className="flex items-center py-1 px-[18px] rounded-full bg-white"
          style={{ transform: "rotate(-2deg)" }}
        >
          <div className="font-display text-[13px] tracking-wide text-green-dark">
            ABUELA&rsquo;S ACENTO
          </div>
        </div>
        <div className="font-display tracking-tight text-center max-w-[720px] text-white text-3xl leading-[105%]">
          WHY MIRA MADE ADOBO&rsquo;ZON
        </div>
        <div className="font-body max-w-[740px] text-center text-[#FFFFFFEB] text-lg leading-[165%]">
          Mira, a Holistic Life &amp; Nutrition Coach, spent years working
          through her own chronic pain and inflammation, looking hard at
          everything on her plate, including what was in her spice cabinet.
          She wasn&rsquo;t willing to give up the adobo and saz&oacute;n that
          tasted like home, so she made her own: all-natural, no artificial
          preservatives, colors, or dyes.
        </div>
        <div className="font-accent text-xl text-center mt-[6px] font-black italic leading-[120%] text-yellow">
          Every jar carries a little of Abuela&rsquo;s acento.
        </div>
      </div>

      {/* Why Different */}
      <div className="flex flex-col items-center w-full py-12 px-[80px] gap-[44px] bg-white">
        <div className="font-display text-3xl tracking-tight text-center leading-[56px] text-ink">
          WHY IT&rsquo;S DIFFERENT
        </div>
        <div className="flex items-start justify-center w-full gap-[28px]">
          <FeatureCard
            rotate="-1.5deg"
            iconBg="bg-red"
            title="NO ARTIFICIAL PRESERVATIVES"
            desc="Just real ingredients, the way it's always been done."
            icon={
              <svg width="30" height="30" viewBox="0 0 24 24">
                <path
                  d="M12 20c-5-3-7-8-6-13 5-1 10 1 13 6-2 5-7 7-7 7z"
                  fill="none"
                  stroke="var(--color-white)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 8c4 3 6 7 7 11"
                  fill="none"
                  stroke="var(--color-white)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <FeatureCard
            rotate="0.5deg"
            iconBg="bg-blue"
            title="NO ARTIFICIAL COLORS OR DYES"
            desc="The color comes from real spices, not a lab."
            icon={
              <svg width="30" height="30" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="8.5"
                  fill="none"
                  stroke="var(--color-white)"
                  strokeWidth="2"
                />
                <line
                  x1="6"
                  y1="18"
                  x2="18"
                  y2="6"
                  stroke="var(--color-white)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            }
          />
          <FeatureCard
            rotate="-2deg"
            iconBg="bg-green"
            title="TRADITIONAL FLAVOR, ONE STEP"
            desc="Adobo and saz&oacute;n in a single jar, no more reaching for two."
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24">
                <rect
                  x="7"
                  y="8"
                  width="10"
                  height="12"
                  rx="1.5"
                  fill="none"
                  stroke="var(--color-white)"
                  strokeWidth="2"
                />
                <path
                  d="M9 8V5a3 3 0 0 1 6 0v3"
                  fill="none"
                  stroke="var(--color-white)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="7"
                  y1="13"
                  x2="17"
                  y2="13"
                  stroke="var(--color-white)"
                  strokeWidth="2"
                />
              </svg>
            }
          />
          <FeatureCard
            rotate="1deg"
            iconBg="bg-brown"
            title="ALL-NATURAL INGREDIENTS"
            desc="Nothing you can't pronounce, nothing you don't want."
            icon={
              <svg width="28" height="28" viewBox="0 0 24 24">
                <path
                  d="M12 20V11"
                  fill="none"
                  stroke="var(--color-ink)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M12 12c0-4-3-6-7-6 0 4 3 6 7 6z"
                  fill="none"
                  stroke="var(--color-ink)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 10c0-3 2.5-4.5 6-4.5 0 3-2.5 4.5-6 4.5z"
                  fill="none"
                  stroke="var(--color-ink)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        </div>
      </div>

      {/* Testimonial */}
      <div className="flex flex-col items-center w-full py-12 px-[80px] gap-[22px] bg-blue-dark">
        <div className="font-accent text-[80px] leading-none font-black text-yellow">
          &ldquo;
        </div>
        <div className="font-accent text-[30px] leading-[140%] text-center max-w-[780px] -mt-3 font-medium italic text-white">
          Hi Coach Mira, so today I made rice and beans and I marinated some
          pork chops last night. Wow, huge difference. It&rsquo;s got a very
          unique taste. I absolutely love it.
        </div>
        <div className="font-display text-[15px] tracking-wide text-yellow">
          PAULA
        </div>
      </div>

      {/* Second CTA */}
      <div className="flex flex-col items-center w-full pt-12 pb-[104px] gap-[28px] px-[80px] bg-yellow-tint">
        <div className="font-display text-3xl tracking-tight text-center leading-[56px] text-ink">
          READY TO COOK LIKE ABUELA?
        </div>
        <div className="font-body text-lg text-center text-ink-dim">
          Get the free recipe guide + tips straight to your inbox.
        </div>
        <OptinCard />
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center w-full py-4 px-[80px] gap-[6px] bg-ink">
        <div className="font-display text-[18px] leading-[22px] text-yellow">
          ADOBO&rsquo;ZON
        </div>
        <div className="font-body text-[13px] text-[#FFFFFFB3]">
          Orlando, FL &middot; Breaking Bread with Mira, Inc.
        </div>
      </div>
    </div>
  );
}
