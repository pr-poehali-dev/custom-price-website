import { useState } from "react";
import Icon from "@/components/ui/icon";

const STAMP_IMG = "https://cdn.poehali.dev/projects/d62475b4-fdd3-42b1-a879-13135f5aba2e/files/19b04db1-bea7-4a02-9f0e-e2198f88f31e.jpg";
const OSNASTKA_IMG = "https://cdn.poehali.dev/projects/d62475b4-fdd3-42b1-a879-13135f5aba2e/files/c100e3fd-c3ed-4825-bed7-0507f5aad9fe.jpg";

const CATEGORIES = [
  { id: "ip", label: "Печати ИП" },
  { id: "ul", label: "Печати ЮЛ" },
  { id: "doc", label: "Врача" },
  { id: "ottisk", label: "по оттиску" },
  { id: "shtamp", label: "Штампы" },
  { id: "fax", label: "Факсимиле" },
  { id: "pad", label: "Подушки, краска" },
  { id: "samonar", label: "Самонаборные" },
  { id: "personal", label: "Личные, детские" },
];

const STAMPS = [
  { id: 1, label: "Иванов Иван Иванович" },
  { id: 2, label: "Силинов Анатолий Викторович" },
  { id: 3, label: "Таркалок Сергей Михайлович" },
  { id: 4, label: "ИВАНОВ Иван Иванович" },
  { id: 5, label: "Месвач Алла Евгеньевна" },
  { id: 6, label: "Щукина Алена Юрьева" },
  { id: 7, label: "Иванова Наталья Ивановна" },
  { id: 8, label: "Иванов Иван Иванович" },
  { id: 9, label: "Зинчук Арсений Сергеевич" },
  { id: 10, label: "Тарасов Пётр Вениаминович" },
  { id: 11, label: "Напалтников Арсений Олегович" },
  { id: 12, label: "ИВАНОВ ИВАН ИВАНОВИЧ" },
];

type OsnastkaRow = {
  items: {
    num: number;
    price: string;
    oldPrice?: string;
    sale?: string;
    label?: string;
    withPad?: boolean;
    flash?: boolean;
  }[];
};

const OSNASTKI: OsnastkaRow[] = [
  {
    items: [
      { num: 1, price: "1 000 р." },
      { num: 2, price: "950 р.", oldPrice: "1 650 р.", sale: "-5%" },
      { num: 3, price: "1 050 р." },
      { num: 4, price: "1 050 р." },
      { num: 5, price: "1 050 р." },
      { num: 6, price: "1 450 р.", label: "ПЕЧАТЬ + ПОДУШКА" },
    ],
  },
  {
    items: [
      { num: 7, price: "1 550 р.", withPad: true },
      { num: 8, price: "1 550 р.", withPad: true },
      { num: 9, price: "1 425 р.", oldPrice: "1 550 р.", sale: "-5%", withPad: true },
      { num: 10, price: "1 800 р.", withPad: true },
      { num: 11, price: "1 790 р.", label: "КНОПКИ", withPad: true },
      { num: 12, price: "2 755 р.", oldPrice: "2 900 р.", sale: "-5%", withPad: true },
    ],
  },
];

const PRICE_TABLE = [
  { service: "Печать ИП (стандарт, 1 р.д.)", std: "1 000 р.", urgent: "1 500 р.", night: "1 800 р." },
  { service: "Печать ИП (с дополн. защитой)", std: "1 200 р.", urgent: "1 700 р.", night: "2 000 р." },
  { service: "Печать ЮЛ (ООО / ЗАО / ОАО)", std: "1 100 р.", urgent: "1 600 р.", night: "1 900 р." },
  { service: "Печать врача / специалиста", std: "900 р.", urgent: "1 300 р.", night: "1 600 р." },
  { service: "Штамп текстовый", std: "450 р.", urgent: "700 р.", night: "900 р." },
  { service: "Факсимиле подписи", std: "800 р.", urgent: "1 200 р.", night: "1 500 р." },
  { service: "Самонаборная печать", std: "650 р.", urgent: "—", night: "—" },
];

const NAV_TOP = ["Главная", "Печати ИП", "Печати ЮЛ", "Штампы", "Факсимиле", "Доставка"];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("ip");
  const [selectedStamp, setSelectedStamp] = useState<number | null>(null);
  const [selectedOsnastka, setSelectedOsnastka] = useState<number | null>(null);
  const [form, setForm] = useState({ klishe: "", inn: "", fio: "", osnastka: "", phone: "", comment: "" });
  const [sent, setSent] = useState(false);
  const [showPrices, setShowPrices] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#f0f0f0]">

      {/* TOP HEADER */}
      <header className="bg-[#0057a8] text-white">
        <div className="max-w-[1100px] mx-auto px-2 py-1.5 flex items-center justify-between flex-wrap gap-1">
          <div className="flex items-center gap-3">
            <div className="bg-white text-[#0057a8] font-black text-xl px-3 py-1 rounded leading-none">
              ПЕЧАТИ
            </div>
            <div className="text-xs leading-tight">
              <div className="font-bold text-sm">ПЕЧАТИ и ШТАМПЫ Калининград</div>
              <div className="text-blue-200">Круглосуточно. Быстро. Качественно.</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5">
              <Icon name="Phone" size={14} />
              <a href="tel:89527926002" className="font-bold text-base text-white hover:text-yellow-300 transition-colors">
                8 (952) 792-60-02
              </a>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-blue-200">
              <Icon name="MapPin" size={12} />
              <span>г. Калининград, Красносельская 82 к.2</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-blue-200">
              <Icon name="Clock" size={12} />
              <span>Круглосуточно, без выходных</span>
            </div>
          </div>
        </div>
      </header>

      {/* TOP NAV */}
      <nav className="bg-[#003d80] border-b border-[#002a5a]">
        <div className="max-w-[1100px] mx-auto px-2 flex flex-wrap">
          {NAV_TOP.map((item) => (
            <a key={item} href="#"
              className="text-white text-xs px-3 py-2 hover:bg-[#0057a8] transition-colors whitespace-nowrap">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* CATEGORY TABS */}
      <div className="max-w-[1100px] mx-auto px-2 pt-3">
        <div className="flex flex-wrap gap-0.5 border-b border-[#bbb]">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`tab-btn ${activeCategory === cat.id ? "active" : ""}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-[1100px] mx-auto px-2 py-3">
        <div className="flex gap-3">

          {/* LEFT + CENTER */}
          <div className="flex-1 min-w-0">

            {/* STEPS BAR */}
            <div className="flex items-stretch mb-3 border border-[#ccc] bg-white overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#f5f5f5] border-r border-[#ccc] text-sm text-[#888]">
                <div className="step-num">1</div>
                <span>Категория</span>
              </div>
              <div className="flex-1 flex items-center gap-2 px-4 py-2 bg-[#ddeeff] border-r border-[#ccc] step-active">
                <div className="step-num">2</div>
                <span className="font-bold text-sm text-[#003d80]">Выбрать клише и оснастку</span>
              </div>
              <div className="flex-1 flex items-center gap-2 px-4 py-2 bg-[#d4edda]">
                <div className="step-num">3</div>
                <span className="font-bold text-sm text-[#1a5c1a]">Ввести данные и заказать</span>
              </div>
            </div>

            {/* DELIVERY BANNER */}
            <div className="mb-3 flex justify-end">
              <a href="#" className="inline-flex items-center gap-2 bg-[#fff3cd] border border-[#ffc107] px-3 py-1.5 text-sm font-bold text-[#856404] hover:bg-[#ffeaa0] transition-colors">
                <Icon name="Truck" size={18} />
                Доставка
              </a>
            </div>

            {/* КЛИШЕ */}
            <div className="mb-4 bg-white border border-[#ccc]">
              <div className="section-header mb-3">
                Клише печатей {CATEGORIES.find(c => c.id === activeCategory)?.label}
              </div>
              <div className="px-3 pb-3">
                <div className="grid grid-cols-6 gap-2 mb-2">
                  {STAMPS.map((stamp) => (
                    <div
                      key={stamp.id}
                      onClick={() => setSelectedStamp(stamp.id)}
                      className={`stamp-thumb flex flex-col items-center p-1 rounded ${selectedStamp === stamp.id ? "selected" : ""}`}
                    >
                      <div className="w-full aspect-square flex items-center justify-center bg-[#f0f6ff] mb-1 rounded overflow-hidden">
                        <img src={STAMP_IMG} alt={stamp.label} className="w-full h-full object-cover opacity-80" />
                      </div>
                      <span className="text-[10px] text-center text-[#0057a8] font-bold leading-tight">{stamp.id}</span>
                    </div>
                  ))}
                </div>

                {selectedStamp && (
                  <div className="mt-2 p-2 bg-[#e8f4ff] border border-[#0057a8] text-xs text-[#003d80] font-bold">
                    ✓ Выбрано клише № {selectedStamp}
                  </div>
                )}

                <div className="mt-2 text-[11px] text-[#cc0000] font-bold text-center italic">
                  ! Стоимость в Выходные и праздничные дни уточняйте по телефону !
                </div>
              </div>
            </div>

            {/* ОСНАСТКИ */}
            <div className="mb-4 bg-white border border-[#ccc]">
              <div className="section-header flex items-center justify-between">
                <span>Оснастки печатей</span>
                <div className="flex gap-1 text-[11px]">
                  <span className="bg-[#0057a8] text-white px-2 py-0.5 font-bold">Стандарт</span>
                  <span className="bg-[#e05000] text-white px-2 py-0.5 font-bold">Срочно (1-2 часа)</span>
                  <span className="bg-[#333] text-white px-2 py-0.5 font-bold">Ночью с 20:00</span>
                </div>
              </div>

              <div className="px-3 py-3 space-y-2">
                {OSNASTKI.map((row, ri) => (
                  <div key={ri} className="grid grid-cols-6 gap-2">
                    {row.items.map((item) => (
                      <div
                        key={item.num}
                        onClick={() => setSelectedOsnastka(item.num)}
                        className={`osnastka-cell rounded p-1.5 flex flex-col items-center ${selectedOsnastka === item.num ? "selected" : ""}`}
                      >
                        {item.sale && <span className="sale-tag">{item.sale}</span>}
                        <div className="w-full aspect-square bg-[#f5f5f5] flex items-center justify-center mb-1 overflow-hidden rounded">
                          <img src={OSNASTKA_IMG} alt={`Оснастка ${item.num}`} className="w-full h-full object-cover opacity-70" />
                        </div>
                        {item.label && (
                          <div className="text-[9px] text-center text-[#555] font-bold leading-tight mb-0.5">{item.label}</div>
                        )}
                        {item.withPad && (
                          <div className="text-[9px] text-[#0057a8] text-center font-bold leading-tight">с встроенной подушкой</div>
                        )}
                        <div className="text-[11px] text-center mt-0.5">
                          {item.oldPrice && (
                            <div className="text-[#999] line-through text-[10px]">{item.oldPrice}</div>
                          )}
                          <div className="font-bold text-[#0057a8]">{item.price}</div>
                        </div>
                        <div className="text-[10px] text-[#666] text-center">{item.num}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {selectedOsnastka && (
                <div className="mx-3 mb-3 p-2 bg-[#e8f4ff] border border-[#0057a8] text-xs text-[#003d80] font-bold">
                  ✓ Выбрана оснастка № {selectedOsnastka}
                </div>
              )}
            </div>

            {/* PRICE TABLE */}
            <div className="bg-white border border-[#ccc]">
              <div
                className="section-header cursor-pointer flex items-center justify-between"
                onClick={() => setShowPrices(!showPrices)}
              >
                <span>Прайс-лист на изготовление печатей и штампов</span>
                <Icon name={showPrices ? "ChevronUp" : "ChevronDown"} size={16} />
              </div>
              {showPrices && (
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-[#ddeeff]">
                        <th className="text-left p-2 border border-[#ccc]">Услуга</th>
                        <th className="p-2 border border-[#ccc] text-[#0057a8]">Стандарт<br/><span className="font-normal text-[10px]">1 рабочий день</span></th>
                        <th className="p-2 border border-[#ccc] text-[#e05000]">Срочно<br/><span className="font-normal text-[10px]">1–2 часа</span></th>
                        <th className="p-2 border border-[#ccc] text-[#333]">Ночью<br/><span className="font-normal text-[10px]">с 20:00</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      {PRICE_TABLE.map((row, i) => (
                        <tr key={row.service} className={i % 2 === 0 ? "bg-white" : "bg-[#f8f8f8]"}>
                          <td className="p-2 border border-[#e0e0e0]">{row.service}</td>
                          <td className="p-2 border border-[#e0e0e0] text-center font-bold text-[#0057a8]">{row.std}</td>
                          <td className="p-2 border border-[#e0e0e0] text-center font-bold text-[#e05000]">{row.urgent}</td>
                          <td className="p-2 border border-[#e0e0e0] text-center font-bold">{row.night}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="p-2 text-[11px] text-[#cc0000] italic">
                    * Цены указаны с учётом стоимости оснастки № 1. Итоговая цена зависит от выбранной оснастки.
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* RIGHT — ORDER FORM */}
          <div className="w-[240px] flex-shrink-0">
            <div className="bg-[#2d7a2d] sticky top-0">
              <button className="btn-red w-full py-3 px-4 text-center">
                ON-LINE заказ
              </button>

              {sent ? (
                <div className="bg-white p-4 text-center">
                  <div className="text-[#2d7a2d] font-bold text-sm mb-2">✓ Заявка принята!</div>
                  <div className="text-xs text-[#555] mb-3">Свяжемся с вами в ближайшее время</div>
                  <button onClick={() => setSent(false)} className="text-[#0057a8] text-xs underline">Новый заказ</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-3 space-y-2.5">
                  <div className="text-[11px] text-[#cc0000] font-bold">* Обязательный вопрос</div>

                  <div>
                    <label className="text-[11px] text-[#333] block mb-1">
                      Укажите № клише <span className="text-[#cc0000]">*</span>
                    </label>
                    <input
                      className="form-input"
                      placeholder="Мой ответ"
                      value={form.klishe}
                      onChange={e => setForm({ ...form, klishe: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-[#333] block mb-1">
                      ИНН Вашего ИП <span className="text-[#cc0000]">*</span>
                    </label>
                    <input
                      className="form-input"
                      placeholder="Мой ответ"
                      value={form.inn}
                      onChange={e => setForm({ ...form, inn: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-[#333] block mb-1">
                      Ф.И.О. <span className="text-[#cc0000]">*</span>
                    </label>
                    <input
                      className="form-input"
                      placeholder="Мой ответ"
                      value={form.fio}
                      onChange={e => setForm({ ...form, fio: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-[#333] block mb-1">
                      № оснастки <span className="text-[#cc0000]">*</span>
                    </label>
                    <input
                      className="form-input"
                      placeholder={selectedOsnastka ? `№ ${selectedOsnastka}` : "Мой ответ"}
                      value={form.osnastka || (selectedOsnastka ? String(selectedOsnastka) : "")}
                      onChange={e => setForm({ ...form, osnastka: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-[#333] block mb-1">
                      Телефон <span className="text-[#cc0000]">*</span>
                    </label>
                    <input
                      className="form-input"
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-[#333] block mb-1">Комментарий</label>
                    <textarea
                      className="form-input resize-none"
                      rows={3}
                      placeholder="Мой ответ"
                      value={form.comment}
                      onChange={e => setForm({ ...form, comment: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-green w-full py-2.5 px-3 rounded">
                    Отправить заявку
                  </button>

                  <div className="text-[10px] text-[#888] text-center leading-tight">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                  </div>
                </form>
              )}

              {/* CONTACTS BLOCK */}
              <div className="bg-[#003d80] text-white p-3 space-y-2 text-xs mt-0.5">
                <div className="font-bold text-sm border-b border-[#0057a8] pb-1.5 mb-2">Контакты</div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={12} />
                  <a href="tel:89527926002" className="font-bold text-white hover:text-yellow-300 transition-colors">
                    8 (952) 792-60-02
                  </a>
                </div>
                <div className="flex items-start gap-2 text-[#aac8ff]">
                  <Icon name="MapPin" size={12} className="mt-0.5 flex-shrink-0" />
                  <span>г. Калининград, Красносельская 82 к.2</span>
                </div>
                <div className="flex items-center gap-2 text-[#aac8ff]">
                  <Icon name="Clock" size={12} />
                  <span>Круглосуточно, без выходных</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={12} />
                  <a href="mailto:401125@bk.ru" className="text-white hover:text-yellow-300 transition-colors">
                    401125@bk.ru
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#003d80] text-white text-xs py-3 px-4 mt-4">
        <div className="max-w-[1100px] mx-auto flex flex-wrap justify-between items-center gap-2">
          <span>© 2026 ПЕЧАТИ и ШТАМПЫ Калининград — Круглосуточно. Все права защищены.</span>
          <span className="text-[#aac8ff]">8 (952) 792-60-02 · г. Калининград, Красносельская 82 к.2</span>
        </div>
      </footer>

    </div>
  );
}