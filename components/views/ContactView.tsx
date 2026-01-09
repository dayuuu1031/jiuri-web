
import React from 'react';
import { TRANSLATIONS } from '../../constants';

interface ContactViewProps {
  lang: 'zh' | 'en';
}

const ContactView: React.FC<ContactViewProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].contact;
  const mapUrl = "https://surl.amap.com/PQDyDgefRf";

  return (
    <div className="pt-28 min-h-screen relative overflow-hidden">
      
      {/* 全屏固定虚化背景图 */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://i.postimg.cc/x1dkm5NP/image-no-watermark.png" 
          className="w-full h-full object-cover blur-[12px] scale-110 brightness-[0.7]"
          alt="Background"
        />
        <div className="absolute inset-0 bg-gray-500/20 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 灰色半透明联系信息面板 */}
          <div className="bg-gray-100/10 backdrop-blur-3xl border border-white/20 p-12 md:p-16 rounded-none shadow-2xl animate-slideUp border-l-8 border-blue-600">
            <h2 className="text-5xl font-black text-white mb-16 tracking-tighter">{t.title}</h2>
            <div className="space-y-12">
              <div className="flex gap-8 items-start group">
                <div className="w-16 h-16 bg-white/5 backdrop-blur-md rounded-none flex items-center justify-center text-[#00d4ff] text-2xl flex-shrink-0 transition-all border border-white/10 group-hover:bg-[#00d4ff] group-hover:text-white">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div>
                  <p className="text-xs text-blue-300/60 font-black uppercase tracking-widest mb-2">{t.phone}</p>
                  <p className="text-2xl font-black text-white tracking-tighter">0513-88211688</p>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="w-16 h-16 bg-white/5 backdrop-blur-md rounded-none flex items-center justify-center text-[#00d4ff] text-2xl flex-shrink-0 transition-all border border-white/10 group-hover:bg-[#00d4ff] group-hover:text-white">
                  <i className="fa-solid fa-mobile-screen"></i>
                </div>
                <div>
                  <p className="text-xs text-blue-300/60 font-black uppercase tracking-widest mb-2">{t.mobile}</p>
                  <div className="flex flex-col gap-2">
                    <p className="text-2xl font-black text-white tracking-tighter">18801759985</p>
                    <p className="text-2xl font-black text-white tracking-tighter">13806277962</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="w-16 h-16 bg-white/5 backdrop-blur-md rounded-none flex items-center justify-center text-[#00d4ff] text-2xl flex-shrink-0 transition-all border border-white/10 group-hover:bg-[#00d4ff] group-hover:text-white">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <p className="text-xs text-blue-300/60 font-black uppercase tracking-widest mb-2">{t.email}</p>
                  <p className="text-2xl font-black text-white underline decoration-blue-500/30 underline-offset-8">284933015@qq.com</p>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="w-16 h-16 bg-white/5 backdrop-blur-md rounded-none flex items-center justify-center text-[#00d4ff] text-2xl flex-shrink-0 transition-all border border-white/10 group-hover:bg-[#00d4ff] group-hover:text-white">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p className="text-xs text-blue-300/60 font-black uppercase tracking-widest mb-2">{t.address}</p>
                  <p className="text-xl font-black text-white leading-snug">{t.address_text}</p>
                </div>
              </div>
            </div>

            <div className="mt-20 p-10 bg-[#004ea1]/20 backdrop-blur-md border border-white/10 rounded-none text-white shadow-2xl relative overflow-hidden group border-l-4 border-[#00d4ff]">
              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-4 flex items-center gap-3">
                  <i className="fa-solid fa-user-plus text-blue-400"></i>
                  {t.recruitment_title}
                </h4>
                <p className="font-bold opacity-80 leading-relaxed text-lg">{t.recruitment}</p>
              </div>
            </div>
          </div>

          {/* 灰色半透明地图展示区 - 现在集成了链接 */}
          <div className="bg-gray-100/10 backdrop-blur-3xl border border-white/20 rounded-none shadow-2xl overflow-hidden min-h-[600px] animate-slideUp delay-200 group relative border-l-8 border-blue-600">
            <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] group-hover:scale-110 transition-transform duration-[20s]"></div>
            
            <div className="h-full w-full bg-white/5 flex items-center justify-center text-gray-400 text-center p-16 relative z-10">
               <div className="max-w-md w-full">
                  <div className="relative mb-12 flex justify-center">
                    <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-none scale-150 animate-pulse"></div>
                    <i className="fa-solid fa-map-location-dot text-9xl text-[#00d4ff] relative z-10 drop-shadow-[0_0_20px_rgba(0,212,255,0.5)]"></i>
                  </div>
                  
                  <h3 className="font-black text-3xl text-white mb-6 tracking-tight">江苏久日机床科技有限公司</h3>
                  <p className="text-sm font-bold text-gray-300 leading-relaxed mb-12">
                    江苏省海安市李堡工业集中区<br />
                    <span className="text-blue-300/50 uppercase tracking-widest text-[10px] block mt-2">Libao Industrial Concentration Zone, Haian City</span>
                  </p>
                  
                  <a 
                    href={mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 bg-[#00d4ff] hover:bg-white text-[#001428] px-10 py-5 rounded-none font-black text-sm uppercase tracking-[0.2em] transition-all transform hover:scale-105 active:scale-95 shadow-[0_15px_35px_rgba(0,212,255,0.4)] border-l-4 border-white"
                  >
                    <i className="fa-solid fa-diamond-turn-right text-lg"></i>
                    {lang === 'zh' ? '开启高德导航' : 'Open Amap Navigation'}
                  </a>

                  <div className="mt-16 px-10 py-5 border-2 border-dashed border-white/10 rounded-none text-xs font-mono-tech text-blue-300/40 uppercase tracking-widest">
                    GIS Coordinate: 32.5317, 120.6124
                  </div>
               </div>
            </div>

            {/* 装饰性的 HUD 元素 */}
            <div className="absolute top-8 right-8 text-[10px] font-mono-tech text-blue-300/20 uppercase tracking-[0.5em] writing-mode-vertical">
              Live Satellite Feed // Active
            </div>
            <div className="absolute bottom-8 left-8 flex gap-2">
               <div className="w-2 h-2 bg-blue-500 rounded-none animate-ping"></div>
               <div className="w-2 h-2 bg-blue-500 rounded-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
