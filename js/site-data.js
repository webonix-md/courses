/* ============================================================
   Все данные, которые может понадобиться поменять, — здесь.
   ШАБЛОН: название, телефоны, адрес, цены и год — вымышленные,
   подставить данные заказчика (см. DEMO-CHECKLIST.md)
   ============================================================ */
window.SITE = {
  brand: "ELECTRO",
  brandFull: "Учебный центр «ELECTRO»",
  brandFull_ro: "Centrul de instruire «ELECTRO»",
  since: 2004,

  // Ближайший старт. null → «идёт набор, дату уточняйте по телефону»
  nextStart: null, // например: "12 октября"
  nextStart_ro: null, // например: "12 octombrie"

  phones: [
    { tel: "+37369000000", label: "+373 69 000 000", note: "администратор", note_ro: "administrator" },
    { tel: "+37322000000", label: "+373 22 000 000", note: "городской", note_ro: "fix" }
  ],
  // RO-версия (ro.html) берёт поля с суффиксом _ro, если они есть

  viber: "viber://chat?number=%2B37369000000",
  whatsapp: "https://wa.me/37369000000",

  address: "ул. Примерная 10, сектор Центр, Кишинёв",
  addressNote: "учебный корпус, 1 этаж",
  address_ro: "str. Exemplu 10, sectorul Centru, Chișinău",
  addressNote_ro: "blocul de studii, etajul 1",
  mapQuery: "Chișinău, Centru",
  intake: "пн–чт, 18:00–19:00 — по предварительному звонку",
  intake_ro: "luni–joi, 18:00–19:00 — cu apel telefonic în prealabil",

  courses: {
    radio: { months: 8, pricePerMonth: 1600 },
    electro: { months: 5.5, pricePerMonth: 1100 }
  }
};
