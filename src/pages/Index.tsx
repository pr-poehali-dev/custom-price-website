import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/d62475b4-fdd3-42b1-a879-13135f5aba2e/files/8fadeda0-3ac0-48ee-aaf8-776175fa21f7.jpg";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "Цены", href: "#prices" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  { icon: "Wrench", title: "Сантехника", desc: "Установка и ремонт сантехники любой сложности. Протечки, засоры, замена труб." },
  { icon: "Zap", title: "Электрика", desc: "Монтаж проводки, розеток, выключателей. Замена счётчиков и щитков." },
  { icon: "Hammer", title: "Строительство", desc: "Демонтаж и монтаж перегородок, штукатурка, выравнивание полов и стен." },
  { icon: "Paintbrush", title: "Отделка", desc: "Покраска, поклейка обоев, укладка плитки и ламината. Любые виды отделки." },
  { icon: "DoorOpen", title: "Двери и окна", desc: "Установка и регулировка дверей, замков, оконных конструкций." },
  { icon: "Settings", title: "Прочее", desc: "Сборка мебели, монтаж карнизов, полок, кондиционеров и бытовой техники." },
];

const PRICES = [
  { service: "Замена смесителя", price: "от 800 ₽" },
  { service: "Устранение засора", price: "от 600 ₽" },
  { service: "Замена розетки / выключателя", price: "от 500 ₽" },
  { service: "Установка люстры", price: "от 700 ₽" },
  { service: "Поклейка обоев (1 рулон)", price: "от 400 ₽" },
  { service: "Укладка плитки (м²)", price: "от 900 ₽" },
  { service: "Сборка мебели", price: "от 1 000 ₽" },
  { service: "Установка двери", price: "от 2 500 ₽" },
];

const PORTFOLIO = [
  { title: "Ремонт ванной комнаты", tag: "Сантехника + Отделка" },
  { title: "Прокладка проводки", tag: "Электрика" },
  { title: "Замена напольного покрытия", tag: "Отделка" },
  { title: "Установка кухонного гарнитура", tag: "Монтаж" },
  { title: "Демонтаж перегородки", tag: "Строительство" },
  { title: "Установка входной двери", tag: "Двери" },
];

const REVIEWS = [
  { name: "Анна К.", text: "Всё сделали быстро и аккуратно. Пришли вовремя, убрали за собой. Рекомендую!", rating: 5 },
  { name: "Сергей М.", text: "Заменили проводку в квартире. Качество отличное, цена адекватная. Обращусь ещё.", rating: 5 },
  { name: "Ирина Л.", text: "Помогли с ремонтом ванной — плитка, сантехника. Очень довольна результатом!", rating: 5 },
  { name: "Дмитрий П.", text: "Собрали мебель и повесили карнизы. Всё ровно, чисто, без замечаний.", rating: 5 },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-xl font-black font-['Montserrat'] gold-gradient">МАСТЕР</span>
            <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase mt-0.5">профессионал</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-[var(--gold)] transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#contacts" className="gold-btn px-5 py-2 rounded text-sm">
              Оставить заявку
            </a>
          </nav>

          {/* Mobile burger */}
          <button className="md:hidden text-foreground p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-4 py-4 flex flex-col gap-3">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium py-2 border-b border-border text-muted-foreground hover:text-[var(--gold)] transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#contacts" onClick={() => setMenuOpen(false)}
              className="gold-btn px-5 py-2 rounded text-sm text-center mt-2">
              Оставить заявку
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
              <span className="text-xs font-semibold text-[var(--gold)] uppercase tracking-wider">Работаем по Москве и МО</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 animate-fade-in-up">
              Мастер на все руки<br />
              <span className="gold-gradient">под ключ</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-in-up delay-200">
              Сантехника, электрика, строительство, отделка.<br />
              Приезжаю в день обращения. Гарантия на все работы.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <a href="#contacts" className="gold-btn px-8 py-3.5 rounded text-base text-center">
                Вызвать мастера
              </a>
              <a href="#services"
                className="px-8 py-3.5 rounded text-base border border-border text-foreground hover:border-[var(--gold)] transition-colors text-center font-semibold font-['Montserrat']">
                Смотреть услуги
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-14 animate-fade-in-up delay-400">
              {[
                { val: "8 лет", label: "опыт работы" },
                { val: "500+", label: "выполнено заказов" },
                { val: "24/7", label: "приём заявок" },
              ].map(stat => (
                <div key={stat.val}>
                  <div className="text-2xl font-black gold-gradient font-['Montserrat']">{stat.val}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-[var(--gold)]" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-[var(--gold)] uppercase tracking-widest mb-3">Что я делаю</p>
            <h2 className="text-3xl md:text-4xl font-black section-title section-title-center">Услуги</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title}
                className="card-hover bg-card border border-border rounded-xl p-6 group cursor-default">
                <div className="w-12 h-12 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--gold)]/20 transition-colors">
                  <Icon name={s.icon} size={22} className="text-[var(--gold)]" />
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-[var(--gold)] uppercase tracking-widest mb-3">Прозрачно и честно</p>
            <h2 className="text-3xl md:text-4xl font-black section-title section-title-center">Цены</h2>
            <p className="text-muted-foreground mt-6 text-sm">Итоговая стоимость зависит от объёма и сложности. Выезд и оценка — бесплатно.</p>
          </div>

          <div className="border border-border rounded-xl overflow-hidden">
            {PRICES.map((row, i) => (
              <div key={row.service}
                className={`flex justify-between items-center px-6 py-4 ${i % 2 === 0 ? 'bg-background' : 'bg-card'} border-b border-border last:border-0 hover:bg-[var(--gold)]/5 transition-colors`}>
                <span className="font-medium">{row.service}</span>
                <span className="text-[var(--gold)] font-bold font-['Montserrat'] text-lg whitespace-nowrap ml-4">{row.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="#contacts" className="gold-btn px-8 py-3.5 rounded-lg inline-block">
              Узнать точную стоимость
            </a>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-[var(--gold)] uppercase tracking-widest mb-3">Мои работы</p>
            <h2 className="text-3xl md:text-4xl font-black section-title section-title-center">Портфолио</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PORTFOLIO.map((item) => (
              <div key={item.title}
                className="card-hover relative rounded-xl overflow-hidden aspect-[4/3] group cursor-pointer">
                <img
                  src={HERO_IMAGE}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-xs text-[var(--gold)] font-semibold uppercase tracking-wider">{item.tag}</span>
                  <h3 className="text-white font-bold mt-1">{item.title}</h3>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[var(--gold)]/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Icon name="ArrowUpRight" size={16} className="text-[var(--gold)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-[var(--gold)] uppercase tracking-widest mb-3">Что говорят клиенты</p>
            <h2 className="text-3xl md:text-4xl font-black section-title section-title-center">Отзывы</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {REVIEWS.map((r) => (
              <div key={r.name} className="card-hover bg-background border border-border rounded-xl p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="text-[var(--gold)] fill-[var(--gold)]" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[var(--gold)]/15 flex items-center justify-center">
                    <span className="text-sm font-bold text-[var(--gold)]">{r.name[0]}</span>
                  </div>
                  <span className="font-semibold text-sm">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS + FORM */}
      <section id="contacts" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-[var(--gold)] uppercase tracking-widest mb-3">Свяжитесь со мной</p>
            <h2 className="text-3xl md:text-4xl font-black section-title section-title-center">Контакты</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Contact info */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Иван Петров</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Мастер с 8-летним опытом. Работаю в Москве и Московской области.
                  Приезжаю в день обращения. Даю гарантию на все выполненные работы.
                </p>
              </div>

              {[
                { icon: "Phone", label: "Телефон", value: "+7 (999) 123-45-67", href: "tel:+79991234567" },
                { icon: "MessageCircle", label: "WhatsApp / Telegram", value: "@master_ivan", href: "#" },
                { icon: "MapPin", label: "Район работы", value: "Москва и МО", href: "#" },
                { icon: "Clock", label: "Режим работы", value: "Ежедневно 8:00 – 22:00", href: "#" },
              ].map(c => (
                <a key={c.label} href={c.href} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center group-hover:bg-[var(--gold)]/20 transition-colors flex-shrink-0">
                    <Icon name={c.icon} size={20} className="text-[var(--gold)]" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{c.label}</div>
                    <div className="font-semibold group-hover:text-[var(--gold)] transition-colors">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Form */}
            <div className="bg-card border border-border rounded-xl p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 py-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--gold)]/15 flex items-center justify-center">
                    <Icon name="CheckCircle" size={32} className="text-[var(--gold)]" />
                  </div>
                  <h3 className="text-xl font-bold">Заявка принята!</h3>
                  <p className="text-muted-foreground text-sm">Свяжусь с вами в ближайшее время.</p>
                  <button onClick={() => setSent(false)}
                    className="text-sm text-[var(--gold)] hover:underline mt-2">
                    Отправить ещё одну
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-6">Оставить заявку</h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="text-xs text-muted-foreground mb-1.5 block">Ваше имя</label>
                      <input
                        type="text"
                        required
                        placeholder="Иван Иванов"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors placeholder:text-muted-foreground"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1.5 block">Номер телефона</label>
                      <input
                        type="tel"
                        required
                        placeholder="+7 (___) ___-__-__"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors placeholder:text-muted-foreground"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1.5 block">Опишите задачу</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Расскажите, что нужно сделать..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors placeholder:text-muted-foreground resize-none"
                      />
                    </div>
                    <button type="submit" className="gold-btn w-full py-3.5 rounded-lg text-base mt-2">
                      Отправить заявку
                    </button>
                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xl font-black font-['Montserrat'] gold-gradient">МАСТЕР</span>
          <p className="text-xs text-muted-foreground text-center">
            © 2026 · Иван Петров · Мастер на все руки · Москва
          </p>
          <a href="tel:+79991234567"
            className="text-sm font-semibold text-[var(--gold)] hover:underline">
            +7 (999) 123-45-67
          </a>
        </div>
      </footer>

    </div>
  );
}