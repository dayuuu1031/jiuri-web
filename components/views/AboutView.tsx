
import React, { useState } from 'react';
import { TRANSLATIONS, HONORS, HISTORY_ITEMS, CORPORATE_SPIRIT, CORE_VALUES } from '../../constants';

interface AboutViewProps {
  lang: 'zh' | 'en';
  activeTab: 'overview' | 'culture' | 'history' | 'honors' | 'tech';
  onTabChange: (t: any) => void;
}

const AboutView: React.FC<AboutViewProps> = ({ lang, activeTab, onTabChange }) => {
  const t = TRANSLATIONS[lang].nav;
  const ab = TRANSLATIONS[lang].about;
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', name: t.about_overview },
    { id: 'culture', name: t.about_culture },
    { id: 'history', name: t.about_history },
    { id: 'honors', name: t.about_honors },
    { id: 'tech', name: t.about_tech },
  ];

  const overviewImages = [
    "https://i.postimg.cc/cH2rvSmB/e47e2c5f1189779329956f94f586105d.jpg",
    "https://i.postimg.cc/9QKzfVFN/watermark-2026-1-8-6a18250c-ec68-11f0-9cf1-0242ac110005.jpg",
    "https://i.postimg.cc/mgJhrR2n/watermark-2026-1-8-6ded6166-ec67-11f0-9cf1-0242ac110005.jpg",
    "https://i.postimg.cc/t4w7gyC8/watermark-2026-1-8-83dbc91a-ec6a-11f0-9cf1-0242ac110005.jpg",
    "https://i.postimg.cc/FH81KmsB/watermark-2026-1-8-99d5e572-ec68-11f0-9cf1-0242ac110005.jpg",
    "https://i.postimg.cc/2SM35mS8/watermark-2026-1-8-dea9e940-ec69-11f0-9cf1-0242ac110005.jpg"
  ];

  const factoryImages = [
    "https://i.postimg.cc/v8KWnRB5/watermark-2026-1-8-1f10eaac-ec69-11f0-9cf1-0242ac110005.jpg",
    "https://i.postimg.cc/L4WzPdXL/watermark-2026-1-8-4ab527b8-ec69-11f0-9cf1-0242ac110005.jpg",
    "https://i.postimg.cc/c1zQ3qHQ/watermark-2026-1-8-e89b3ff4-ec68-11f0-9cf1-0242ac110005.jpg",
    "https://i.postimg.cc/fWPxd4Lc/watermark-2026-1-8-84ea19ac-ec69-11f0-9cf1-0242ac110005.jpg"
  ];

  const manufacturingImages = [
    "https://i.postimg.cc/Rh7bWMBP/watermark-2026-1-8-d4f02304-ec66-11f0-9cf1-0242ac110005.jpg",
    "https://i.postimg.cc/vB6KdrSB/watermark-2026-1-8-25d7b946-ec65-11f0-9cf1-0242ac110005.jpg",
    "https://i.postimg.cc/2yRKj1PT/watermark-2026-1-8-972d6dec-ec6b-11f0-9cf1-0242ac110005.jpg",
    "https://i.postimg.cc/sxY0MVzF/watermark-2026-1-8-d6ee8fc4-ec6b-11f0-9cf1-0242ac110005.jpg",
    "https://i.postimg.cc/PJsRfCB6/watermark-2026-1-8-83668f28-ec66-11f0-9cf1-0242ac110005.jpg",
    "https://i.postimg.cc/prf1m2HY/watermark-2026-1-8-ad09801e-ec67-11f0-9cf1-0242ac110005.jpg",
    "https://i.postimg.cc/QCQnFX3m/watermark-2026-1-8-bb399936-ec6b-11f0-9cf1-0242ac110005.jpg",
    "https://i.postimg.cc/WzLHpdQ7/watermark-2026-1-8-697c747e-ec6b-11f0-9cf1-0242ac110005.jpg",
    "https://i.postimg.cc/VvQVsJ3n/watermark-2026-1-8-20d1425e-ec66-11f0-9cf1-0242ac110005.jpg",
    "https://i.postimg.cc/cCyb1vVM/watermark-2026-1-8-344f390c-ec67-11f0-9cf1-0242ac110005.jpg",
    "https://i.postimg.cc/SR6tny4y/watermark-2026-1-8-dab7a2fe-ec6a-11f0-9cf1-0242ac110005.jpg",
    "https://i.postimg.cc/Fz5BFY2c/watermark-2026-1-8-4e580afe-ec6c-11f0-9cf1-0242ac110005.jpg"
  ];

  const manufacturingFeatures = [
    {
      title: lang === 'zh' ? '装备实力' : 'Equipment Strength',
      desc: lang === 'zh' 
        ? '汇聚大型龙门铣、落地镗等尖端母机，驾驭巨型工件的精密制造。' 
        : 'Aggregates high-end parent machines such as large gantry milling and floor boring, mastering the precision manufacturing of giant workpieces.',
      icon: 'fa-gears'
    },
    {
      title: lang === 'zh' ? '工艺深度' : 'Process Depth',
      desc: lang === 'zh' 
        ? '深度融合精密机加、结构焊接与电气集成，构建全产业链制造闭环。' 
        : 'Deeply integrates precision machining, structural welding, and electrical integration to build a closed-loop manufacturing system for the entire industry chain.',
      icon: 'fa-layer-group'
    },
    {
      title: lang === 'zh' ? '匠心品质' : 'Craftsmanship Quality',
      desc: lang === 'zh' 
        ? '严谨的工人实操与现代化的生产流程，确保每一处细节的完美交付。' 
        : 'Rigorous worker operations and modern production processes ensure the perfect delivery of every detail.',
      icon: 'fa-gem'
    }
  ];

  return (
    <div className="pt-28 min-h-screen relative overflow-hidden">
      
      {/* Lightbox Overlay */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[3000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-fadeIn"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-10 right-10 text-white text-4xl hover:text-blue-400 transition-colors z-10">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <img 
            src={selectedImg} 
            className="max-w-full max-h-full object-contain shadow-[0_0_100px_rgba(0,212,255,0.2)]" 
            alt="Enlarged view" 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* 全屏固定虚化背景图 */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://i.postimg.cc/x1dkm5NP/image-no-watermark.png" 
          className="w-full h-full object-cover blur-[12px] scale-110 brightness-[0.7] contrast-[0.9]"
          alt="Jiuri Factory Background"
        />
        <div className="absolute inset-0 bg-gray-500/20 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* 侧边栏 */}
          <aside className="lg:w-1/4">
            <div className="bg-gray-100/10 backdrop-blur-2xl border border-white/20 sticky top-32 overflow-hidden shadow-2xl rounded-none">
              <div className="p-8 bg-gray-400/20 border-b border-white/10 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[4px] h-8 bg-[#004ea1] shadow-[0_0_15px_#004ea1]"></div>
                <h2 className="text-[22px] font-black tracking-tight text-white leading-none">
                  {lang === 'zh' ? '关于久日' : 'ABOUT JIURI'}
                </h2>
              </div>
              <div className="flex flex-col">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`w-full text-left px-8 py-5 font-bold text-[16px] transition-all flex items-center justify-between group border-b border-white/5 last:border-none rounded-none ${
                      activeTab === tab.id 
                        ? 'bg-white/20 text-[#00d4ff] backdrop-blur-md border-l-4 border-blue-500' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="tracking-wide">{tab.name}</span>
                    <i className={`fa-solid fa-chevron-right text-[10px] transition-transform ${activeTab === tab.id ? 'translate-x-1 opacity-100' : 'opacity-30'}`}></i>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* 主面板 */}
          <main className="lg:w-3/4 bg-gray-100/10 backdrop-blur-3xl border border-white/20 shadow-2xl p-10 md:p-16 min-h-[850px] relative overflow-hidden rounded-none">
            
            {/* 企业介绍模块 */}
            {activeTab === 'overview' && (
              <div className="animate-fadeIn space-y-16">
                <div>
                  <h3 className="text-4xl font-black text-white mb-6 flex items-center gap-5">
                    <span className="w-2 h-10 bg-blue-600 inline-block shadow-[0_0_15px_rgba(37,99,235,0.5)]"></span>
                    {ab.overview_title}
                  </h3>
                  <div className="h-[1px] w-full bg-white/10 mb-10"></div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-8">
                      <p className="text-xl font-bold text-gray-100 leading-relaxed border-l-4 border-blue-500 pl-8 bg-gray-400/10 py-8">
                        {ab.overview_text}
                      </p>
                      <div className="p-6 bg-[#004ea1]/20 border border-white/10 shadow-xl border-l-8 border-[#00d4ff]">
                        <h4 className="text-blue-300 font-black text-[10px] tracking-[0.2em] uppercase mb-4">Core Campus Data / 核心园区数据</h4>
                        <div className="grid grid-cols-2 gap-6">
                           <div>
                              <span className="text-2xl font-black text-white block">66,000 m²</span>
                              <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{lang === 'zh' ? '占地面积' : 'Total Area'}</span>
                           </div>
                           <div>
                              <span className="text-2xl font-black text-white block">11,000 m²</span>
                              <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{lang === 'zh' ? '总装基地' : 'Assembly Base'}</span>
                           </div>
                           <div>
                              <span className="text-2xl font-black text-white block">15,000 m²</span>
                              <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{lang === 'zh' ? '生产基地' : 'Production Base'}</span>
                           </div>
                           <div>
                              <span className="text-2xl font-black text-white block">3,000 m²</span>
                              <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{lang === 'zh' ? '研发中心' : 'R&D Center'}</span>
                           </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* 企业展示网格 */}
                    <div className="grid grid-cols-2 gap-4">
                      {overviewImages.map((img, idx) => (
                        <div 
                          key={idx} 
                          onClick={() => setSelectedImg(img)}
                          className={`relative overflow-hidden group shadow-2xl border border-white/10 cursor-zoom-in ${idx === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'}`}
                        >
                           <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Jiuri Intro" />
                           <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <i className="fa-solid fa-expand text-white text-2xl drop-shadow-lg"></i>
                           </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 工厂环境展示 */}
                  <div className="mt-20">
                    <h4 className="text-2xl font-black text-white mb-8 flex items-center gap-4">
                      <i className="fa-solid fa-industry text-blue-400"></i>
                      {lang === 'zh' ? '工厂环境展示' : 'Factory Environment'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                      {factoryImages.map((img, idx) => (
                        <div 
                          key={idx} 
                          onClick={() => setSelectedImg(img)}
                          className="group relative aspect-video overflow-hidden border border-white/10 shadow-lg hover:border-blue-500/50 transition-all cursor-zoom-in"
                        >
                           <img src={img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Factory View" />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <i className="fa-solid fa-expand text-white text-xl"></i>
                           </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 企业文化板块 */}
            {activeTab === 'culture' && (
              <div className="animate-fadeIn space-y-20">
                {/* 1. 人才理念 (Top) */}
                <section className="relative group overflow-hidden border border-white/10 shadow-2xl min-h-[500px] flex items-center bg-gray-900 rounded-none">
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600" 
                      className="w-full h-full object-cover brightness-[0.3] transition-transform duration-[15s] group-hover:scale-110"
                      alt="Talent Banner"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#000a1a] via-[#000a1a]/40 to-transparent"></div>
                  </div>
                  <div className="relative z-10 p-12 md:p-16 w-full">
                    {/* Synchronized Header Style for Talent */}
                    <div className="flex items-center gap-6 mb-12">
                       <h3 className="text-2xl font-black text-white uppercase tracking-wider whitespace-nowrap">
                         {lang === 'zh' ? `${ab.talent_title} / TALENT` : 'TALENT PHILOSOPHY'}
                       </h3>
                       <div className="flex-grow h-[1px] bg-white/20"></div>
                       <div className="text-[10px] font-mono-tech text-blue-300 uppercase tracking-[0.4em] hidden md:block">
                         {lang === 'zh' ? 'Advocate Tech · Respect Craft · Encourage Innovation' : 'ADVOCATE TECH · RESPECT CRAFT · ENCOURAGE INNOVATION'}
                       </div>
                    </div>

                    <h4 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
                      {ab.talent_philosophy}
                    </h4>
                    <p className="text-lg font-bold text-gray-300 leading-relaxed mb-10 border-l-4 border-blue-500 pl-6 bg-white/5 py-4 max-w-3xl">
                      {ab.talent_text}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {(ab.talent_keywords as string).split(' · ').map((kw, i) => (
                        <span key={i} className="px-5 py-2 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 text-[#00d4ff] font-black text-xs uppercase tracking-widest">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </section>

                {/* 2. 企业精神 (Spirit) */}
                <section>
                   <div className="flex items-center gap-6 mb-12">
                      <h3 className="text-2xl font-black text-white uppercase tracking-wider">
                        {lang === 'zh' ? `${ab.spirit} / SPIRIT` : 'SPIRIT'}
                      </h3>
                      <div className="flex-grow h-[1px] bg-white/10"></div>
                      <div className="text-[10px] font-mono-tech text-blue-300/40 uppercase tracking-[0.4em]">
                        {lang === 'zh' ? 'Professional · Focus · Craftsmanship · Innovation' : 'PROFESSIONAL · FOCUS · CRAFTSMANSHIP · INNOVATION'}
                      </div>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                     {CORPORATE_SPIRIT.map((s) => (
                       <div key={s.word} className="group relative p-8 bg-gray-100/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition-all shadow-xl rounded-none text-center border-b-4 border-transparent hover:border-blue-500">
                         <div className="w-16 h-16 mx-auto bg-blue-600/10 rounded-none flex items-center justify-center text-blue-400 mb-6 transition-transform group-hover:scale-110">
                            <i className={`fa-solid ${s.icon} text-2xl`}></i>
                         </div>
                         <h4 className="text-xl font-black text-white mb-2 group-hover:text-blue-300 transition-colors">
                           {lang === 'zh' ? s.cn : s.word.toUpperCase()}
                         </h4>
                         {lang === 'zh' && (
                           <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">
                             {s.word}
                           </p>
                         )}
                         <p className="text-xs text-gray-400 font-bold leading-relaxed opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                           {lang === 'zh' ? s.cnDesc : s.desc}
                         </p>
                       </div>
                     ))}
                   </div>
                </section>

                {/* 3. 企业价值观 (Core Values) */}
                <section className="relative">
                  {/* Synchronized Header Style for Values */}
                  <div className="flex items-center gap-6 mb-12">
                    <h3 className="text-2xl font-black text-white uppercase tracking-wider whitespace-nowrap">
                      {lang === 'zh' ? '企业价值观 / VALUES' : 'CORE VALUES'}
                    </h3>
                    <div className="flex-grow h-[1px] bg-white/10"></div>
                    <div className="text-[10px] font-mono-tech text-blue-300/40 uppercase tracking-[0.4em] hidden md:block">
                      {lang === 'zh' ? 'Customer · Technology · Quality · Efficiency · Safety' : 'CUSTOMER · TECHNOLOGY · QUALITY · EFFICIENCY · SAFETY'}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {CORE_VALUES.map((v) => (
                      <div key={v.id} className="relative group bg-gray-100/5 backdrop-blur-md border border-white/10 p-8 rounded-none transition-all hover:bg-white/10 hover:shadow-2xl overflow-hidden min-h-[300px] flex flex-col justify-between">
                         <div className="absolute -right-4 -top-4 text-7xl font-black text-white/5 group-hover:text-blue-400/10 transition-colors">{v.id}</div>
                         <div className="relative z-10">
                            <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform origin-left">
                               <i className={`fa-solid ${v.icon} text-3xl`}></i>
                            </div>
                            <h4 className="text-xl font-black text-white mb-2">{lang === 'zh' ? v.title : v.enTitle}</h4>
                            <div className="w-8 h-[2px] bg-blue-500 mb-4 group-hover:w-full transition-all duration-500"></div>
                            <p className="text-blue-300 font-black text-sm mb-2">{lang === 'zh' ? v.subtitle : v.enSubtitle}</p>
                         </div>
                         <div className="relative z-10 mt-auto opacity-40 group-hover:opacity-100 transition-opacity">
                            <p className="text-[10px] font-mono-tech text-gray-400 uppercase tracking-widest">
                               {lang === 'zh' ? v.enTitle : v.title}
                            </p>
                         </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Bottom Quote */}
                <div className="py-12 border-t border-white/5 text-center">
                   <p className="text-2xl font-black text-white/40 italic tracking-widest">
                     “ {lang === 'zh' ? '专注焊管装备 · 提升中国制造' : 'Focus on Welding Equipment · Enhance Chinese Manufacturing'} ”
                   </p>
                </div>
              </div>
            )}

            {/* 制造能力 (Manufacturing Capability) */}
            {activeTab === 'tech' && (
              <div className="animate-fadeIn space-y-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div>
                    <h3 className="text-4xl font-black text-white mb-4 flex items-center gap-5">
                      <span className="w-2 h-10 bg-blue-600 inline-block"></span>
                      {t.about_tech}
                    </h3>
                    <div className="h-[1px] w-48 bg-blue-500/50"></div>
                  </div>
                  <p className="text-blue-300 font-mono-tech text-[10px] uppercase tracking-[0.4em] opacity-50">
                    High-End Precision Manufacturing Facility
                  </p>
                </div>

                {/* Feature Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {manufacturingFeatures.map((feat, i) => (
                    <div key={i} className="group relative p-10 bg-white/5 border border-white/10 border-l-4 border-l-blue-600 backdrop-blur-xl shadow-2xl transition-all hover:bg-white/10">
                      <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none opacity-5">
                        <i className={`fa-solid ${feat.icon} text-9xl -mr-8 -mt-8`}></i>
                      </div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-600/10 text-blue-400 text-2xl mb-6 transition-transform group-hover:scale-110">
                          <i className={`fa-solid ${feat.icon}`}></i>
                        </div>
                        <h4 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-blue-300 transition-colors">
                          {feat.title}
                        </h4>
                        <p className="text-gray-300 font-bold leading-relaxed text-[15px] opacity-80">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Image Gallery */}
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <h4 className="text-lg font-black text-white uppercase tracking-widest">{lang === 'zh' ? '生产车间实景' : 'Live Production Workshop'}</h4>
                    <div className="flex-grow h-[1px] bg-white/10"></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {manufacturingImages.map((img, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => setSelectedImg(img)}
                        className="group relative aspect-video overflow-hidden border border-white/10 shadow-xl bg-gray-900 transition-all hover:border-blue-400 cursor-zoom-in rounded-none"
                      >
                         <img 
                          src={img} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-110" 
                          alt={`Manufacturing capability ${idx + 1}`} 
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                           <span className="text-[10px] font-mono-tech text-blue-300 uppercase tracking-widest">Jiuri Precision // Facility_{idx + 1}</span>
                         </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="py-12 text-center">
                   <p className="text-sm font-bold text-gray-400 max-w-2xl mx-auto italic">
                     {lang === 'zh' 
                        ? '我们坚持核心母机全自主维护，关键工艺百分百受控，确保久日出品必属精品。' 
                        : 'We insist on independent maintenance of core machines and 100% controlled key processes to ensure premium quality.'}
                   </p>
                </div>
              </div>
            )}

            {/* Honors Tab */}
            {activeTab === 'honors' && (
              <div className="animate-fadeIn">
                <h3 className="text-4xl font-black text-white mb-14 flex items-center gap-5">
                  <span className="w-2 h-10 bg-blue-600 inline-block"></span>
                  {t.about_honors}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {HONORS.map((item, i) => (
                    <div 
                      key={i} 
                      onClick={() => setSelectedImg(item.img)}
                      className="group bg-gray-100/10 backdrop-blur-xl border border-white/10 p-4 rounded-none transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 cursor-zoom-in border-b-4 border-transparent hover:border-blue-500"
                    >
                       <div className="relative aspect-[3/4] overflow-hidden bg-gray-500/20 rounded-none flex items-center justify-center p-6 border border-white/5">
                          <img src={item.img} className="w-full h-full object-contain drop-shadow-2xl brightness-90 group-hover:brightness-100" alt={item.cn} />
                       </div>
                       <div className="p-6 text-center">
                         <p className="text-white text-[14px] font-black leading-tight line-clamp-2 opacity-80 group-hover:opacity-100">
                           {lang === 'zh' ? item.cn : item.en}
                         </p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* History Tab */}
            {activeTab === 'history' && (
              <div className="animate-fadeIn">
                <h3 className="text-4xl font-black text-white mb-14 flex items-center gap-5">
                  <span className="w-2 h-10 bg-blue-600 inline-block"></span>
                  {t.about_history}
                </h3>
                <div className="relative border-l-4 border-white/10 ml-8 pl-14 space-y-16">
                  {HISTORY_ITEMS.map((item) => (
                    <div key={item.year} className="relative group">
                      <div className="absolute -left-[70px] top-1 w-6 h-6 rounded-none bg-blue-600 border-4 border-gray-900 z-10 shadow-[0_0_15px_#2563eb] rotate-45"></div>
                      <div className="bg-gray-100/10 backdrop-blur-xl p-10 border border-white/10 rounded-none hover:bg-gray-100/20 transition-all shadow-xl border-l-4 border-blue-500">
                        <span className="text-4xl font-black text-blue-400 mb-4 block tracking-tighter">{item.year}</span>
                        <p className="text-xl font-black text-white mb-2">{item.cn}</p>
                        <p className="text-[12px] font-black text-gray-400 uppercase tracking-widest">{item.en}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </main>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
