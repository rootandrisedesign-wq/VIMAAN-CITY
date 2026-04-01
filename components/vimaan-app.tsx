"use client";

import React, { useMemo, useState } from "react";
import {
  Sparkles,
  Bell,
  Diamond,
  Medal,
  ChevronRight,
  Home,
  Map,
  Shirt,
  Store,
  Users,
  X,
} from "lucide-react";
import { VimaanLogo } from "./vimaan-logo";

type View = "dashboard" | "quiz" | "result";
type Answer = 0 | 1;

const glassCard = "bg-white/5 backdrop-blur-2xl border border-[#D4AF37]/18 rounded-3xl";
const particles = [
  { left: 6, size: 5, delay: 0.2, duration: 12.5, drift: 10, alpha: 0.18 },
  { left: 13, size: 7, delay: 1.5, duration: 14.2, drift: 16, alpha: 0.24 },
  { left: 21, size: 4, delay: 0.8, duration: 11.4, drift: 12, alpha: 0.16 },
  { left: 29, size: 6, delay: 2.4, duration: 13.8, drift: 18, alpha: 0.22 },
  { left: 37, size: 8, delay: 1.1, duration: 15.2, drift: 14, alpha: 0.26 },
  { left: 46, size: 5, delay: 3.1, duration: 12.9, drift: 10, alpha: 0.18 },
  { left: 54, size: 6, delay: 0.4, duration: 13.1, drift: 16, alpha: 0.2 },
  { left: 63, size: 4, delay: 2.0, duration: 11.8, drift: 12, alpha: 0.16 },
  { left: 72, size: 7, delay: 1.7, duration: 14.6, drift: 20, alpha: 0.24 },
  { left: 81, size: 5, delay: 2.8, duration: 12.2, drift: 14, alpha: 0.18 },
  { left: 89, size: 6, delay: 0.9, duration: 13.7, drift: 12, alpha: 0.2 },
  { left: 95, size: 4, delay: 3.4, duration: 11.5, drift: 10, alpha: 0.15 },
];

const VimaanApp = () => {
  const [view, setView] = useState<View>("dashboard");
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const questions = [
    { q: "บน Skywalk แยกปทุมวัน แสงไฟ Glitch เป็นรหัสลับ...", a1: "พยายามถอดรหัส", a2: "เช็คความปลอดภัยรอบๆ" },
    { q: "เจอโดรนส่งของตกอยู่ และมันกำลังร้องขอความช่วยเหลือ...", a1: "รีบเข้าไปซ่อมระบบ", a2: "แจ้งศูนย์ควบคุมกลาง" },
    { q: "ร้านอาหารบรรทัดทอง ระบบเชียร์ AI รวนจนคิววุ่นวาย...", a1: "ช่วยจัดระเบียบคน", a2: "แอบดู Code เพื่อแก้ปัญหา" },
    { q: "เจอ Graphic บนกำแพงดิจิทัลที่ด่าทอระบบการปกครอง...", a1: "ลบออกเพื่อความสงบ", a2: "พยายามเข้าใจสารที่ซ่อนอยู่" },
    { q: "มหาเศรษฐีประกาศหาอาสาสมัครทดสอบระบบ VR เสี่ยงอันตราย...", a1: "เสนอตัวเป็นแนวหน้า", a2: "ขออ่านเงื่อนไขและโครงสร้าง" },
    { q: "วันหยุดในวิมาน (VIMAAN) คุณมักจะไปที่ไหน?", a1: "แกลเลอรี่ลับตลาดน้อย", a2: "Co-working Space" },
    { q: "จู่ๆ ไฟฟ้าทั้งเมืองดับลง ระบบความปลอดภัยหยุดทำงาน...", a1: "เดินเช็คช่วยเหลือคน", a2: "หาจุดที่ Server ล่ม" },
    { q: "AI ถามคุณว่า 'คุณต้องการทิ้งอะไรไว้ให้ วิมาน?'", a1: "มิตรภาพและเครือข่าย", a2: "ผลงานสร้างสรรค์ที่งดงาม" },
  ];

  const total = questions.length;

  const result = useMemo(() => {
    const a1 = answers.filter((a) => a === 0).length;
    const a2 = answers.filter((a) => a === 1).length;
    if (a1 >= a2) {
      return {
        title: "Guardian of VIMAAN",
        desc: "คุณคือผู้ปกป้องเมืองด้วยพลังของความสัมพันธ์ ความมั่นคง และหัวใจของชุมชน",
      };
    }
    return {
      title: "Architect of VIMAAN",
      desc: "คุณคือผู้ออกแบบอนาคตด้วยวิสัยทัศน์ ความคิดสร้างสรรค์ และความเข้าใจระบบอย่างลึกซึ้ง",
    };
  }, [answers]);

  const startQuiz = () => {
    setAnswers([]);
    setCurrentStep(0);
    setView("quiz");
  };

  const leaveQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setView("dashboard");
  };

  const choose = (answer: Answer) => {
    const next = [...answers, answer];
    setAnswers(next);
    if (currentStep < total - 1) {
      setCurrentStep((s) => s + 1);
      return;
    }
    setView("result");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white bg-[#090909] font-thai-ui">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage:
            "url('/vimaan-bg.png')",
          filter: view === "quiz" ? "blur(7px) brightness(0.5)" : "brightness(0.62)",
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1f1236]/50 via-transparent to-black/85" />
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[#F5E6A3] blur-[1.4px] opacity-70 animate-[goldenFloat_var(--dur)_ease-in-out_infinite]"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              bottom: `${-10 - (i % 5) * 10}%`,
              animationDelay: `${p.delay}s`,
              opacity: p.alpha,
              ["--dur" as string]: `${p.duration}s`,
              ["--drift" as string]: `${p.drift}px`,
            }}
          />
        ))}
        {/* โคมลอย / Lanterns */}
        {[0, 1, 2, 3].map((i) => (
          <div
            key={`lantern-${i}`}
            className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#F5E6A3]/18 bg-gradient-to-br from-[#F5E6A3]/18 via-[#D4AF37]/10 to-transparent blur-[1px] animate-[lanternFloat_26s_ease-in-out_infinite]"
            style={{
              left: `${18 + i * 18}%`,
              bottom: `${-20 - i * 8}%`,
              animationDelay: `${i * 4.3}s`,
            }}
          >
            <div className="absolute inset-1 rounded-full bg-radial from-[#F5E6A3]/45 via-transparent to-transparent animate-[lanternTwinkle_5s_ease-in-out_infinite]" />
          </div>
        ))}
      </div>

      <header className="relative z-20 flex justify-between items-center p-6 pt-12">
        <div className={`flex items-center gap-3 px-4 py-2 rounded-full ${glassCard}`}>
          <VimaanLogo
            className="h-10 w-auto object-contain drop-shadow-[0_0_14px_rgba(212,175,55,0.85)]"
          />
          <div className="flex flex-col border-l border-white/20 pl-3">
            <span className="font-serif tracking-[0.25em] font-bold text-[13px] text-[#D4AF37]">VIMAAN</span>
            <span className="text-[9px] text-white/70 tracking-[0.35em] uppercase -mt-1">วิมาน</span>
          </div>
        </div>

        <div className="flex gap-2">
          <div className={`flex items-center gap-2 px-3 py-2 rounded-full ${glassCard}`}>
            <Diamond size={14} className="text-[#D4AF37]" />
            <span className="text-xs font-bold font-mono">1,250</span>
          </div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${glassCard}`}>
            <Bell size={18} className="text-[#D4AF37]" />
          </div>
        </div>
      </header>

      {view === "dashboard" && (
        <main className="relative z-20 flex flex-col items-center mt-12 px-8 text-center animate-in fade-in duration-1000 transition-all duration-700">
          <h1
            className="text-6xl font-serif font-bold tracking-tight mb-2 text-[#F4E6C5] drop-shadow-[0_0_15px_rgba(212,175,55,0.7)]"
            style={{
              textShadow:
                "0 0 12px rgba(212,175,55,.70), 0 0 26px rgba(212,175,55,.35), 0 2px 8px rgba(0,0,0,.55)",
              animation: "titleFloat 6s ease-in-out infinite",
            }}
          >
            วิมาน
          </h1>
          <p className="text-[9px] text-[#F0DA9A] uppercase tracking-[0.4em] mb-10">
            NEO-SIAM DIGITAL METROPOLIS
          </p>

          <button
            onClick={startQuiz}
            className="px-10 py-4 bg-gradient-to-r from-[#C6A53A] via-[#E3C86A] to-[#F9EDC4] text-black rounded-full font-bold text-sm flex items-center gap-2 mb-12 animate-[goldPulse_2.6s_ease-in-out_infinite] transition-all duration-500"
            style={{ boxShadow: "0 0 20px rgba(227,200,106,.55)" }}
          >
            <Sparkles size={16} /> เริ่มการเดินทาง
          </button>

          <div className={`w-full max-w-2xl rounded-[2.5rem] p-6 shadow-2xl ${glassCard}`}>
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-serif text-lg font-bold">สภาวิมานประกาศ</h3>
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-ping" />
            </div>
            <div className={`p-4 rounded-2xl flex justify-between items-center ${glassCard}`}>
              <div className="flex items-center gap-4 text-left">
                <Medal className="text-[#D4AF37]" />
                <div>
                  <p className="text-sm font-bold">คดีปริศนาพญานาคดิจิทัล</p>
                  <p className="text-[10px] text-white/55 tracking-wider uppercase">VIMAAN Quest Available</p>
                </div>
              </div>
              <ChevronRight size={18} className="text-white/30" />
            </div>
          </div>
        </main>
      )}

      {view === "quiz" && (
        <div className="relative z-30 min-h-screen flex flex-col items-center justify-center p-8 animate-in zoom-in-95 duration-700 transition-all">
          <button onClick={leaveQuiz} className={`absolute top-12 right-8 h-10 w-10 rounded-full ${glassCard}`}>
            <X className="mx-auto text-white/70" />
          </button>

          <div className={`w-full max-w-xl rounded-[2rem] p-6 md:p-8 ${glassCard}`}>
            <div className="w-full bg-white/10 h-1 rounded-full mb-8 overflow-hidden">
              <div
                className="bg-[#D4AF37] h-full transition-all duration-500"
                style={{ width: `${((currentStep + 1) / total) * 100}%` }}
              />
            </div>

            <p className="text-[#D4AF37] font-bold text-[10px] tracking-[0.35em] mb-3 text-center uppercase">
              Sequence {currentStep + 1}/{total}
            </p>
            <h2 className="text-2xl font-serif font-bold text-center mb-8 leading-snug">
              {questions[currentStep].q}
            </h2>

            <div className="space-y-4">
              {[questions[currentStep].a1, questions[currentStep].a2].map((ans, i) => (
                <button
                  key={ans}
                  onClick={() => choose(i as Answer)}
                  className={`w-full p-5 text-center rounded-2xl transition-all font-medium text-sm tracking-wide hover:border-[#D4AF37] hover:bg-white/10 ${glassCard}`}
                >
                  {ans}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {view === "result" && (
        <div className="relative z-30 min-h-screen flex flex-col items-center justify-center p-8 animate-in fade-in duration-700 transition-all">
          <div className={`w-full max-w-xl rounded-[2rem] p-8 text-center ${glassCard}`}>
            <p className="text-[10px] tracking-[0.4em] uppercase text-white/65 mb-2">VIMAAN Identity</p>
            <h2
              className="text-3xl font-serif font-bold text-[#f4e7be]"
              style={{ textShadow: "0 0 12px rgba(212,175,55,.7), 0 0 24px rgba(212,175,55,.25)" }}
            >
              {result.title}
            </h2>
            <p className="mt-4 text-sm text-white/80 leading-relaxed">{result.desc}</p>

            <div className="mt-7 space-y-3">
              <button
                onClick={startQuiz}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F5E6AD] text-black rounded-full font-bold text-sm animate-[goldPulse_2.4s_ease-in-out_infinite]"
              >
                เล่นอีกครั้ง
              </button>
              <button
                onClick={leaveQuiz}
                className={`w-full px-8 py-4 rounded-full font-semibold text-sm transition-all hover:bg-white/10 ${glassCard}`}
              >
                กลับสู่แดชบอร์ด
              </button>
            </div>
          </div>
        </div>
      )}

      <nav
        className={`absolute bottom-4 left-4 right-4 z-40 px-8 py-5 flex justify-between items-center ${glassCard} shadow-[0_12px_40px_rgba(0,0,0,0.35)]`}
      >
        <Home className="text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" size={24} />
        <Map className="text-[#D4AF37]/70" size={24} />
        <div className="relative -mt-14">
          <div className="w-16 h-16 bg-gradient-to-b from-[#D4AF37] to-[#8a6d1a] rounded-3xl flex items-center justify-center rotate-45 shadow-[0_10px_20px_rgba(0,0,0,0.5)] border-[3px] border-[#1a1a1a]">
            <Shirt className="-rotate-45 text-black" size={28} strokeWidth={2.5} />
          </div>
          <div className="absolute inset-0 bg-[#D4AF37] rounded-3xl blur-xl opacity-25 -z-10" />
        </div>
        <Store className="text-[#D4AF37]/70" size={24} />
        <Users className="text-[#D4AF37]/70" size={24} />
      </nav>

      <style jsx>{`
        @keyframes titleFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-9px);
          }
        }
        @keyframes goldPulse {
          0%,
          100% {
            box-shadow: 0 0 18px rgba(212, 175, 55, 0.45), 0 0 0 rgba(212, 175, 55, 0);
          }
          50% {
            box-shadow: 0 0 36px rgba(212, 175, 55, 0.75), 0 0 10px rgba(245, 230, 173, 0.65);
          }
        }
        @keyframes goldenFloat {
          0% {
            transform: translateY(0) translateX(0) scale(0.9);
            opacity: 0;
          }
          20% {
            opacity: 0.7;
          }
          80% {
            opacity: 0.45;
          }
          100% {
            transform: translateY(-110vh) translateX(var(--drift)) scale(1.1);
            opacity: 0;
          }
        }
        @keyframes lanternFloat {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          15% {
            opacity: 0.7;
          }
          70% {
            opacity: 0.55;
          }
          100% {
            transform: translateY(-120vh) translateX(18px);
            opacity: 0;
          }
        }
        @keyframes lanternTwinkle {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default VimaanApp;
