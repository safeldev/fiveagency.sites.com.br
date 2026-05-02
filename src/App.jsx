import React, { useEffect, useState } from 'react';
import UnicornScene from 'unicornstudio-react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    goal: '',
    details: ''
  });

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleMobileMenu = (e) => {
    e.preventDefault();
    alert('Menu móvel clicado');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Solicitação enviada! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', budget: '', goal: '', details: '' });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div 
      className="h-full w-full"
      style={{
        fontFamily: "'Inter', system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif"
      }}
    >
      {/* Background */}
      <div className="aura-background-component -z-10 w-full h-[1040px] absolute top-0">
        <div className="absolute w-full h-full left-0 top-0 -z-10" style={{ filter: 'hue-rotate(90deg)' }}>
          <UnicornScene projectId="vTTCp5g4cVl9nwjlT56Z" />
        </div>
      </div>

      {/* VIEW: Landing Page */}
      <div id="landing-view" className="h-full overflow-y-auto w-full transition-opacity duration-500">
        <header className="relative">
          <div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
            {/* Nav */}
            <nav className="flex mt-6 items-center justify-between">
              <a href="/" className="flex items-center gap-2">
                <img src="https://i.ibb.co/ZRc2kt2R/logotype.png" alt="Five Agency" className="w-auto h-12" />
              </a>

              <div className="hidden md:flex md:gap-x-2 bg-white/5 border-white/10 border rounded-full pt-1 pr-1 pb-1 pl-1 backdrop-blur-lg gap-x-2 gap-y-1 items-center">
                <a href="#manifesto" className="hover:text-white text-sm font-medium text-white/80 font-geist pt-2 pr-3 pb-2 pl-3">A Diferença</a>
                <a href="#ecosystem" className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist">O Que Fazemos</a>
                <a href="#pricing" className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white font-geist">Investimento</a>
                <div className="relative inline-block group text-xs rounded-full">
                  <a href="https://wa.me/5511914417241?text=Ol%C3%A1%2C%20vim%20pelo%20site%20Five%20Agency%20e%20quero%20um%20or%C3%A7amento!" target="_blank" rel="noopener noreferrer" className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] relative z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] text-white bg-neutral-900/60 border-white/20 border pt-3 pr-6 pb-3 pl-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] text-xs rounded-full cursor-pointer inline-flex">
                    <span className="relative z-10 inline-flex items-center gap-2 font-medium text-xs rounded-full font-geist">Falar com Especialista</span>
                    <span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0 text-xs rounded-full"></span>
                    <span className="glow pointer-events-none absolute inset-0 -z-10 text-xs rounded-full" aria-hidden="true" style={{ transform: 'scale(0.95) translate(0px, -24px)' }}></span>
                  </a>
                </div>
              </div>

              <button 
                className="md:hidden inline-flex text-sm font-medium font-geist bg-white/5 border-white/10 border rounded-lg pt-2 pr-3 pb-2 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center" 
                id="mobileMenuToggle"
                onClick={handleMobileMenu}
              >
                <iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24" class="h-5 w-5"></iconify-icon>
                Menu
              </button>
            </nav>

            {/* Hero */}
            <section className="z-10 sm:pt-20 md:pt-48 md:pb-24 text-center max-w-5xl mr-auto ml-auto pt-20 pb-32 relative">
              <h1 style={{animation:'fadeSlideIn 1s ease-out 0.2s forwards', opacity:0}} className="sm:text-6xl md:text-7xl text-4xl tracking-tighter font-geist max-w-5xl mr-auto ml-auto">
                Dois Donos de Negócio.<br />O Mesmo Ponto de Partida.<br />Resultados Completamente Diferentes.
              </h1>
              <p className="sm:text-lg [animation:fadeSlideIn_1s_ease-out_0.3s_both] text-base font-normal text-white/70 font-geist max-w-2xl mt-6 mr-auto ml-auto">
                Um tem fila de clientes. O outro espera o telefone tocar. A diferença não é o produto — é quem aparece no Google quando o cliente está procurando. A Five Agency coloca você no lugar certo, na hora certa.
              </p>
              <div className="flex flex-col sm:flex-row [animation:fadeSlideIn_1s_ease-out_0.4s_both] mt-8 gap-x-3 gap-y-3 items-center justify-center">
                <a href="https://wa.me/5511914417241?text=Ol%C3%A1%2C%20vim%20pelo%20site%20Five%20Agency%20e%20quero%20um%20or%C3%A7amento!" target="_blank" rel="noopener noreferrer" className="group relative inline-flex min-w-[140px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-semibold text-neutral-400 tracking-tight bg-neutral-800 border-neutral-600 border rounded-full pt-[12px] pr-[20px] pb-[12px] pl-[20px] items-center justify-center">
                  <span className="relative z-10 font-medium rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md font-geist">Quero Aparecer no Google</span>
                  <span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 rounded-full blur-md font-geist">Falar Agora</span>
                  <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-neutral-200 to-transparent rounded-full blur-[2px]"></span>
                </a>
                <a href="#ecosystem" className="inline-flex items-center gap-2 hover:bg-white/10 text-base font-medium text-white/90 bg-white/5 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 backdrop-blur font-geist">
                  Ver Como Funciona
                </a>
              </div>
            </section>
          </div>
        </header>

        {/* Trusted By */}
        <section className="z-10 sm:px-6 lg:px-8 max-w-7xl mt-12 mr-auto ml-auto pr-6 pb-16 pl-6 relative">
          <p className="[animation:fadeSlideIn_1s_ease-out_0.5s_both] text-sm font-medium text-white/50 text-center mb-6 font-geist">Negócios que já escolheram crescer com a Five Agency</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-8 items-center justify-items-center [animation:fadeSlideIn_1s_ease-out_0.6s_both]">
            <div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d052699d-f578-4c01-9806-f5b6c8609489_320w.png')] bg-cover rounded invert opacity-60 hover:opacity-100 transition-opacity"></div>
            <div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3185425e-0207-434a-9554-cdb5bd455ea5_320w.png')] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
            <div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c26c041-308e-4034-9227-5a6c57d94f4d_1600w.png')] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
            <div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8de253ef-3c06-4a22-8e14-1a6a9d8580d5_320w.png')] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
            <div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d3f4a52-05b5-4539-987a-d4b1ff330ef1_1600w.png')] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
            <div className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e561d59c-a675-431e-a035-187a88fbe4c2_1600w.png')] bg-cover rounded opacity-60 hover:opacity-100 transition-opacity"></div>
          </div>
        </section>

        {/* 1. THE MANIFESTO */}
        <section id="manifesto" className="relative py-24 border-y border-white/5 bg-white/[0.02]">
          <div className="sm:px-6 lg:px-8 max-w-4xl mr-auto ml-auto pr-6 pl-6 text-center">
            <h2 style={{animation:'fadeSlideIn 1s ease-out 0.1s both'}} className="text-xs font-semibold tracking-wider text-blue-500 uppercase font-geist animate-on-scroll">A Verdade que Ninguém Conta</h2>
            <h3 className="mt-4 text-3xl sm:text-5xl font-geist tracking-tighter text-white animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
              Todo Dia Sem Site Profissional<br />É um Dia Trabalhando Para o Concorrente.
            </h3>
            
            <div className="mt-10 relative bg-neutral-900/50 border border-white/10 rounded-2xl p-8 sm:p-12 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
               <iconify-icon icon="solar:quote-left-bold" width="32" height="32" class="absolute top-6 left-6 text-white/20 transform -translate-x-2 -translate-y-2"></iconify-icon>
               <p className="relative text-lg sm:text-xl text-white/80 font-geist leading-relaxed">
                 Dois donos de negócio abriram empresa no mesmo ano. Mesmos produtos. Mesmo bairro. Cinco anos depois, um fatura três vezes mais que o outro. A diferença? Um investiu num site que vende enquanto dorme. O outro ainda depende de indicação. Seu cliente está no Google agora — a pergunta é: ele está te encontrando ou encontrando o concorrente?
               </p>
               <div className="mt-6 flex items-center justify-center gap-3">
                 <div className="h-px w-12 bg-white/20"></div>
                 <span className="text-sm font-medium text-white/50 font-geist">Five Agency — Criamos Sites que Vendem</span>
                 <div className="h-px w-12 bg-white/20"></div>
               </div>
            </div>
          </div>
        </section>

        {/* 2. US VS THEM */}
        <section className="relative py-24 overflow-hidden">
          <div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
            <div className="text-center mb-16 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter">O Que Separa Quem Cresce<br />de Quem Estagna</h2>
              <p className="mt-4 text-white/60 font-geist max-w-2xl mx-auto">Não é sorte. Não é capital. É a presença digital certa no momento certo.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
              {/* Them */}
              <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col gap-6 opacity-60 grayscale transition hover:opacity-80 hover:grayscale-0">
                <h3 className="text-xl font-medium text-white/50 font-geist">Sem um Site Profissional</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-white/50">
                    <iconify-icon icon="solar:close-circle-linear" width="20" height="20" class="text-red-500/50"></iconify-icon>
                    <span className="font-geist">Invisível no Google</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/50">
                    <iconify-icon icon="solar:close-circle-linear" width="20" height="20" class="text-red-500/50"></iconify-icon>
                    <span className="font-geist">Depende 100% de Indicação</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/50">
                    <iconify-icon icon="solar:close-circle-linear" width="20" height="20" class="text-red-500/50"></iconify-icon>
                    <span className="font-geist">Perde Clientes para o Concorrente</span>
                  </li>
                  <li className="flex items-center gap-3 text-white/50">
                    <iconify-icon icon="solar:close-circle-linear" width="20" height="20" class="text-red-500/50"></iconify-icon>
                    <span className="font-geist">Sem Credibilidade no Mercado</span>
                  </li>
                </ul>
              </div>

              {/* Us */}
              <div className="relative p-8 rounded-2xl border border-blue-500/30 bg-blue-900/10 flex flex-col gap-6 shadow-[0_0_50px_-12px_rgba(59,130,246,0.2)]">
                <div className="absolute -top-3 -right-3">
                  <span className="relative flex h-6 w-6">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-6 w-6 bg-blue-500 items-center justify-center">
                      <iconify-icon icon="solar:check-circle-linear" width="14" height="14" class="text-white"></iconify-icon>
                    </span>
                  </span>
                </div>
                <h3 className="text-xl font-medium text-white font-geist">Com a Five Agency</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-white">
                    <div className="bg-blue-500/20 p-1 rounded-full">
                      <iconify-icon icon="solar:check-circle-linear" width="16" height="16" class="text-blue-400"></iconify-icon>
                    </div>
                    <span className="font-geist font-medium">Encontrado por Quem Está Comprando</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <div className="bg-blue-500/20 p-1 rounded-full">
                      <iconify-icon icon="solar:check-circle-linear" width="16" height="16" class="text-blue-400"></iconify-icon>
                    </div>
                    <span className="font-geist font-medium">Site Entregue em até 7 Dias</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <div className="bg-blue-500/20 p-1 rounded-full">
                      <iconify-icon icon="solar:check-circle-linear" width="16" height="16" class="text-blue-400"></iconify-icon>
                    </div>
                    <span className="font-geist font-medium">Pagamento Único — Sem Mensalidade</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <div className="bg-blue-500/20 p-1 rounded-full">
                      <iconify-icon icon="solar:check-circle-linear" width="16" height="16" class="text-blue-400"></iconify-icon>
                    </div>
                    <span className="font-geist font-medium">Autoridade e Credibilidade Imediatas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. EXPANDED SERVICES (Total Ecosystem) */}
        <section className="z-10 sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-20 pl-6 relative" id="ecosystem">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-sm font-medium text-white/50 font-geist [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">O Que Está Incluído</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">Um Ativo Digital Completo.<br />Não Apenas um Site.</h2>
              <p className="mt-3 text-base text-white/70 font-geist [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">Cada detalhe pensado para gerar clientes, não apenas impressionar visualmente.</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 gap-x-6 gap-y-6">
            {/* Card 1: Development */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll group hover:bg-white/[0.07] transition-colors md:col-span-1">
              <div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <iconify-icon icon="solar:code-square-linear" width="24" height="24" class="text-blue-400"></iconify-icon>
                  </div>
                </div>
                <h3 className="text-xl font-medium tracking-tight font-geist text-white">Velocidade que Converte</h3>
                <p className="mt-3 text-sm text-white/70 font-geist leading-relaxed">53% dos usuários abandona um site que demora mais de 3 segundos. Entregamos sites que carregam em menos de 2s — porque cada segundo perdido é um cliente que foi embora.</p>
              </div>
            </div>

            {/* Card 2: Design */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll group hover:bg-white/[0.07] transition-colors md:col-span-1">
               <div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                    <iconify-icon icon="solar:lightbulb-minimalistic-linear" width="24" height="24" class="text-purple-400"></iconify-icon>
                  </div>
                </div>
                <h3 className="text-xl font-medium tracking-tight font-geist text-white">Design que Fecha Negócios</h3>
                <p className="mt-3 text-sm text-white/70 font-geist leading-relaxed">Não fazemos sites bonitos por fazer. Projetamos cada seção para guiar o visitante até o contato. Layout, cores, textos e botões — tudo estrategicamente posicionado para vender.</p>
              </div>
            </div>

            {/* Card 3: Growth */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 [animation:fadeSlideIn_1s_ease-out_0.7s_both] animate-on-scroll group hover:bg-white/[0.07] transition-colors md:col-span-1">
              <div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <iconify-icon icon="solar:chart-up-linear" width="24" height="24" class="text-blue-400"></iconify-icon>
                  </div>
                </div>
                <h3 className="text-xl font-medium tracking-tight font-geist text-white">Visível no Google desde o Dia 1</h3>
                <p className="mt-3 text-sm text-white/70 font-geist leading-relaxed">SEO não é opcional — é o que traz clientes enquanto você dorme. Configuramos tudo tecnicamente correto desde o início: meta tags, velocidade, estrutura e indexação.</p>
              </div>
            </div>

            {/* Big feature: Portfolio Item */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:col-span-3 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll mt-6">
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10"></div>
              <img src="COLE_URL_DA_SUA_IMAGEM_AQUI" alt="Case Study" className="absolute right-0 top-0 h-full w-2/3 object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" />
              
              <div className="p-8 sm:p-12 relative z-20 h-full flex flex-col justify-center max-w-xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 rounded-full border border-blue-400/30 bg-blue-400/15 px-2 py-0.5 text-[11px] font-medium text-blue-200 font-geist">Resultado Real</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-geist tracking-tighter">De Invisível a Referência no Bairro</h3>
                <p className="mt-4 text-base sm:text-lg text-white/70 font-geist">Uma clínica estética sem presença online. Em 7 dias entregamos um site otimizado. Em 30 dias, os agendamentos triplicaram — vindos diretamente do Google, sem gastar um real em anúncios.</p>
                <div className="mt-8">
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-black bg-white rounded-lg px-4 py-2 hover:bg-neutral-200 transition font-geist">
                    Ver Estudo de Caso
                    <iconify-icon icon="solar:arrow-right-linear" width="24" height="24" class="w-4 h-4"></iconify-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PROCESS PATH */}
        <section className="py-24 bg-white/[0.02] border-y border-white/5 relative">
            <div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
                 <div className="text-center mb-16 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter">Do Zero ao Ar em 7 Dias.</h2>
                    <p className="mt-4 text-white/60 font-geist">Sem enrolação. Sem reuniões intermináveis. Só resultado.</p>
                </div>

                <div className="relative grid md:grid-cols-3 gap-8">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                    {/* Step 1 */}
                    <div className="relative flex flex-col items-center text-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
                        <div className="w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center relative z-10 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            <span className="text-xl font-bold font-geist text-white">01</span>
                        </div>
                        <h3 className="text-xl font-medium text-white font-geist mb-2">Você Conta, Nós Escutamos</h3>
                        <p className="text-sm text-white/60 font-geist leading-relaxed max-w-xs">Uma conversa rápida para entender seu negócio, seus clientes e o que você precisa comunicar. Sem formulários complicados.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex flex-col items-center text-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
                        <div className="w-16 h-16 rounded-full bg-black border border-blue-500/50 flex items-center justify-center relative z-10 mb-6 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                            <span className="text-xl font-bold font-geist text-blue-400">02</span>
                        </div>
                        <h3 className="text-xl font-medium text-white font-geist mb-2">Criamos com Velocidade</h3>
                        <p className="text-sm text-white/60 font-geist leading-relaxed max-w-xs">Design, desenvolvimento e otimização em paralelo. Você acompanha o progresso diariamente e aprova antes de publicar.</p>
                    </div>

                     {/* Step 3 */}
                     <div className="relative flex flex-col items-center text-center animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both]">
                        <div className="w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center relative z-10 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            <span className="text-xl font-bold font-geist text-white">03</span>
                        </div>
                        <h3 className="text-xl font-medium text-white font-geist mb-2">No Ar e Gerando Clientes</h3>
                        <p className="text-sm text-white/60 font-geist leading-relaxed max-w-xs">Publicamos, configuramos o Google e entregamos as chaves. Seu negócio passa a ser encontrado por quem está procurando o que você oferece.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Pricing Section: Limited Edition */}
        <section className="sm:p-8 sm:ml-8 sm:mr-8 sm:mb-10 mt-10 mr-8 mb-10 ml-8 pt-6 pr-6 pb-6 pl-6" id="pricing">
          <div className="relative">
            {/* Header */}
            <div className="relative max-w-5xl mx-auto text-center [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-white"></span>
                <span className="text-xs font-normal font-geist">Investimento</span>
              </div>
              <h2 className="text-[40px] sm:text-6xl leading-[0.95] text-white mt-4 font-geist tracking-tighter">Menos do que um Mês<br />de Cliente Perdido.</h2>
              <p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl mx-auto font-geist">
                Pagamento único. Sem mensalidade. Sem contrato. Um investimento que se paga na primeira semana de clientes novos.
              </p>
            </div>

            {/* Plans Grid */}
            <div className="relative max-w-[900px] mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Tier 1: The Launchpad */}
              <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll flex flex-col h-full hover:bg-white/[0.07] transition-colors duration-300">
                <div className="relative flex flex-col gap-1 mb-6">
                  <h3 className="text-lg text-white font-medium tracking-tight font-geist">Presença Imediata</h3>
                  <p className="text-xs text-white/50 font-geist">Para quem precisa estar online rápido e bem.</p>
                </div>
                <div className="relative mb-6">
                  <div className="flex items-end gap-1">
                    <p className="text-3xl lg:text-4xl text-white font-geist tracking-tighter">R$1.999</p>
                    <span className="text-white/40 text-xs mb-1.5 font-geist uppercase tracking-wide">/ Único</span>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-white/70 font-geist">
                    <iconify-icon icon="solar:clock-circle-linear" width="12" height="12"></iconify-icon>
                    Entrega: 48 Horas
                  </div>
                </div>
                <ul className="space-y-3.5 flex-1 mb-8">
                  <li className="flex items-start gap-3"><iconify-icon icon="solar:check-circle-linear" width="16" height="16" class="text-blue-400 mt-0.5 shrink-0"></iconify-icon><span className="text-sm text-white/80 font-geist">1 Landing Page Profissional</span></li>
                  <li className="flex items-start gap-3"><iconify-icon icon="solar:check-circle-linear" width="16" height="16" class="text-blue-400 mt-0.5 shrink-0"></iconify-icon><span className="text-sm text-white/80 font-geist">Perfeito em Celular e Desktop</span></li>
                  <li className="flex items-start gap-3"><iconify-icon icon="solar:check-circle-linear" width="16" height="16" class="text-blue-400 mt-0.5 shrink-0"></iconify-icon><span className="text-sm text-white/80 font-geist">Carrega em Menos de 2 Segundos</span></li>
                  <li className="flex items-start gap-3"><iconify-icon icon="solar:check-circle-linear" width="16" height="16" class="text-blue-400 mt-0.5 shrink-0"></iconify-icon><span className="text-sm text-white/80 font-geist">Botão Direto para seu WhatsApp</span></li>
                </ul>
                <a href="https://wa.me/5511914417241?text=Ol%C3%A1%2C%20vim%20pelo%20site%20Five%20Agency%20e%20quero%20um%20or%C3%A7amento!" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center h-10 rounded-lg bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition font-geist border border-white/10">Quero Começar</a>
              </article>

              {/* Tier 2: The Brand Core */}
              <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll flex flex-col h-full hover:bg-white/[0.07] transition-colors duration-300">
                <div className="relative flex flex-col gap-1 mb-6">
                  <h3 className="text-lg text-white font-medium tracking-tight font-geist">Autoridade Digital</h3>
                  <p className="text-xs text-white/50 font-geist">Para negócios que querem ser referência no mercado.</p>
                </div>
                <div className="relative mb-6">
                  <div className="flex items-end gap-1">
                    <p className="text-3xl lg:text-4xl text-white font-geist tracking-tighter">R$5.999</p>
                    <span className="text-white/40 text-xs mb-1.5 font-geist uppercase tracking-wide">/ Único</span>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-white/70 font-geist">
                    <iconify-icon icon="solar:clock-circle-linear" width="12" height="12"></iconify-icon>
                    Entrega: 5-7 Dias
                  </div>
                </div>
                <ul className="space-y-3.5 flex-1 mb-8">
                  <li className="flex items-start gap-3"><iconify-icon icon="solar:check-circle-linear" width="16" height="16" class="text-blue-400 mt-0.5 shrink-0"></iconify-icon><span className="text-sm text-white/80 font-geist">Até 5 Páginas Estratégicas</span></li>
                  <li className="flex items-start gap-3"><iconify-icon icon="solar:check-circle-linear" width="16" height="16" class="text-blue-400 mt-0.5 shrink-0"></iconify-icon><span className="text-sm text-white/80 font-geist">Você Edita o Conteúdo Sozinho</span></li>
                  <li className="flex items-start gap-3"><iconify-icon icon="solar:check-circle-linear" width="16" height="16" class="text-blue-400 mt-0.5 shrink-0"></iconify-icon><span className="text-sm text-white/80 font-geist">Indexado e Otimizado no Google</span></li>
                  <li className="flex items-start gap-3"><iconify-icon icon="solar:check-circle-linear" width="16" height="16" class="text-blue-400 mt-0.5 shrink-0"></iconify-icon><span className="text-sm text-white/80 font-geist">Integrado às Redes Sociais</span></li>
                </ul>
                <a href="https://wa.me/5511914417241?text=Ol%C3%A1%2C%20vim%20pelo%20site%20Five%20Agency%20e%20quero%20um%20or%C3%A7amento!" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center h-10 rounded-lg bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition font-geist border border-white/10">Quero Este Plano</a>
              </article>


            </div>
          </div>
        </section>

        {/* 5. APPLICATION FORM */}
        <section className="overflow-hidden bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/278bbef6-c861-4ed8-b799-a4713ff032b4_3840w.jpg')] bg-cover relative py-24" id="application">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
          <div className="sm:px-6 lg:px-8 max-w-3xl mr-auto ml-auto pr-4 pl-4 relative z-10">
            
            <div className="text-center mb-10 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur font-geist">Sem Compromisso</span>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-geist tracking-tighter text-white">Seu Próximo Cliente<br />Está a Uma Conversa de Distância.</h2>
              <p className="mt-4 text-lg text-white/70 font-geist">Preencha abaixo. Em até 24h um especialista entra em contato — sem enrolação, sem pitch de vendas. Só uma conversa honesta sobre o que faz sentido para o seu negócio.</p>
            </div>

            <form onSubmit={handleFormSubmit} className="bg-black/50 border border-white/10 p-6 sm:p-10 rounded-2xl backdrop-blur-xl animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="col-span-1">
                        <label htmlFor="name" className="block text-xs font-medium text-white/60 mb-2 font-geist">Nome</label>
                        <input type="text" id="name" value={formData.name} onChange={handleInputChange} required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition font-geist placeholder-white/20" placeholder="Seu Nome" />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="email" className="block text-xs font-medium text-white/60 mb-2 font-geist">E-mail</label>
                        <input type="email" id="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition font-geist placeholder-white/20" placeholder="joao@empresa.com" />
                    </div>
                    <div className="col-span-1">
                         <label htmlFor="budget" className="block text-xs font-medium text-white/60 mb-2 font-geist">Orçamento Estimado</label>
                         <div className="relative">
                            <select id="budget" value={formData.budget} onChange={handleInputChange} required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition font-geist appearance-none">
                                <option value="" className="bg-black text-white/70">Selecione o Intervalo</option>
                                <option value="3k-5k" className="bg-black">R$3k - R$5k</option>
                                <option value="5k-10k" className="bg-black">R$5k - R$10k</option>
                                <option value="10k+" className="bg-black">R$10k+</option>
                            </select>
                            <svg className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-white/40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                         </div>
                    </div>
                     <div className="col-span-1">
                         <label htmlFor="goal" className="block text-xs font-medium text-white/60 mb-2 font-geist">Objetivo Principal</label>
                         <div className="relative">
                            <select id="goal" value={formData.goal} onChange={handleInputChange} required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition font-geist appearance-none">
                                <option value="" className="bg-black text-white/70">Selecione o Objetivo</option>
                                <option value="brand" className="bg-black">Autoridade de Marca</option>
                                <option value="leads" className="bg-black">Geração de Leads</option>
                                <option value="sales" className="bg-black">Vendas Diretas / E-com</option>
                            </select>
                            <svg className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-white/40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                         </div>
                    </div>
                    <div className="col-span-1 sm:col-span-2">
                        <label htmlFor="details" className="block text-xs font-medium text-white/60 mb-2 font-geist">Detalhes do Projeto</label>
                        <textarea id="details" value={formData.details} onChange={handleInputChange} rows="3" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition font-geist placeholder-white/20" placeholder="Conte-nos sobre a sua visão..."></textarea>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <button type="submit" className="inline-flex items-center gap-2 rounded-xl border border-blue-500/20 bg-blue-500 px-8 py-4 text-sm font-semibold text-white hover:bg-blue-400 transition font-geist shadow-[0_0_30px_rgba(59,130,246,0.3)] w-full sm:w-auto justify-center">
                        Quero Ser Encontrado no Google
                        <iconify-icon icon="solar:arrow-right-linear" width="24" height="24" class="w-4 h-4"></iconify-icon>
                    </button>
                </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="xl:mt-0 border-white/10 border-t relative bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid gap-8 md:grid-cols-4">
              <div className="md:col-span-2">
                <a href="/" className="flex items-center gap-2">
                  <img src="https://i.ibb.co/ZRc2kt2R/logotype.png" alt="Five Agency" className="h-6 w-auto" />
                </a>
                <p className="mt-4 text-sm text-white/70 max-w-md font-geist">Transformamos pequenos negócios em referências digitais. Sites que vendem, carregam rápido e aparecem no Google — entregues em até 7 dias, pagamento único.</p>
              </div>

              <div>
                <h4 className="text-sm font-semibold tracking-tight font-geist">Navegação</h4>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li><a href="#manifesto" className="hover:text-white font-geist">A Diferença</a></li>
                  <li><a href="#ecosystem" className="hover:text-white font-geist">O Que Fazemos</a></li>
                  <li><a href="#pricing" className="hover:text-white font-geist">Investimento</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold tracking-tight font-geist">Legal</h4>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li><a href="#" className="hover:text-white font-geist">Termos de Serviço</a></li>
                  <li><a href="#" className="hover:text-white font-geist">Política de Privacidade</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
              <p className="text-xs text-white/50 font-geist">© <span id="year" className="font-geist">{new Date().getFullYear()}</span> Five Agency. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
