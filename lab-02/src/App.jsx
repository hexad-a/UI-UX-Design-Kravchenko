import { useEffect, useState } from "react";
import Logo from "./Logo.jsx";
import PersonaCard from "./PersonaCard.jsx";
const personas = [
  {
    "id": "P1",
    "name": "Олена Марченко",
    "role": "Основна персона",
    "age": "19 років, студентка 2 курсу",
    "context": "Навчається очно, має кілька дисциплін і нерівномірне навантаження. Планує день зі смартфона між парами.",
    "tech": "Впевнено користується месенджерами й календарем; не хоче налаштовувати складний менеджер задач.",
    "goals": [
      "Розділяти великі завдання на короткі навчальні сесії.",
      "Бачити найближчий дедлайн і реалістичний план на сьогодні."
    ],
    "pain": [
      "Список справ зростає, але незрозуміло, з чого почати.",
      "Сповіщення відволікають, пропущена сесія руйнує план."
    ],
    "scenario": "Після пар має 45 хвилин до дороги додому. Обирає завдання з програмування, планує сесію на 25 хвилин і після завершення відмічає результат.",
    "quote": "Хочу почати з одного зрозумілого кроку, а не складати ще один список.",
    "needs": "Одна помітна дія початку сесії, короткий план на день і просте перенесення."
  },
  {
    "id": "P2",
    "name": "Андрій Бондар",
    "role": "Додаткова персона",
    "age": "22 роки, студент 4 курсу",
    "context": "Поєднує навчання з частковою зайнятістю. Розклад змінюється; навчається ввечері з ноутбука, перевіряє план з телефона.",
    "tech": "Користується цифровими календарями й таск менеджерами; цінує швидкість і можливість змінити план.",
    "goals": [
      "Вміщувати навчання у доступні проміжки часу.",
      "Не втрачати дедлайни після зміни робочого графіка."
    ],
    "pain": [
      "Жорсткий план не враховує затримку на роботі.",
      "Повторне введення задач забирає час."
    ],
    "scenario": "Робоча зміна затягнулася. Переносить дві заплановані сесії на завтра, перевіряє близький дедлайн та залишає одну коротку сесію на вечір.",
    "quote": "План має змінюватися разом із моїм днем.",
    "needs": "Редагування тривалості, перенесення без повторного введення, збереження дедлайну."
  },
  {
    "id": "P3",
    "name": "Софія Коваль",
    "role": "Додаткова персона",
    "age": "18 років, студентка 1 курсу",
    "context": "Адаптується до самостійного навчання. Починає з телефона вдома; великі завдання здаються незрозумілими.",
    "tech": "Добре володіє базовими мобільними застосунками, але не має звички систематичного планування.",
    "goals": [
      "Навчитися планувати невеликі кроки без перевантаження.",
      "Бачити власний поступ після кожної сесії."
    ],
    "pain": [
      "Незрозумілі терміни та порожній стартовий екран.",
      "Почуття провини після пропуску знижує мотивацію."
    ],
    "scenario": "Вперше відкриває Focusly перед підготовкою до семінару. За підказкою створює завдання «Прочитати 5 сторінок», обирає 15 хвилин і завершує першу сесію.",
    "quote": "Покажіть, що зробити спочатку, і я спробую.",
    "needs": "Приклад першої задачі, короткий вступ, нейтральний зворотний зв’язок без покарання."
  }
];

const empathy = [
  [
    "Думає",
    "Чи встигну до дедлайну? Яке завдання зараз найважливіше?"
  ],
  [
    "Відчуває",
    "Тривогу через накопичені справи, полегшення після маленького завершеного кроку."
  ],
  [
    "Бачить",
    "Кілька чатів дисциплін, дедлайни у різних місцях, довгий список невиконаних задач."
  ],
  [
    "Чує",
    "Нагадування викладачів про здачу робіт і розмови одногрупників про брак часу."
  ],
  [
    "Говорить",
    "«У мене лише пів години»; «Не знаю, з чого почати». Це змодельовані висловлювання."
  ],
  [
    "Робить",
    "Перевіряє дедлайни, відкладає складні задачі, перемикається між навчанням і повідомленнями."
  ],
  [
    "Болі",
    "Перевантаження вибором, відволікання, нереалістичний план, складність повернення після пропуску."
  ],
  [
    "Очікувані вигоди",
    "Зрозумілий наступний крок, відчутний поступ і можливість спокійно перепланувати день."
  ]
];

const journey = [
  [
    "1 Вхід",
    "Відкриває Focusly після пар",
    "Невпевненість",
    "Порожній екран не пояснює наступний крок",
    "Коротка підказка та дія «Створити завдання»"
  ],
  [
    "2 Планування",
    "Вводить задачу, дедлайн і тривалість",
    "Обережний інтерес",
    "Складно оцінити час",
    "Прості варіанти 15, 25, 45 хв і власне значення"
  ],
  [
    "3 Навчання",
    "Починає сесію та працює",
    "Зосередженість",
    "Відволікання або вимушена перерва",
    "Помітний стан сесії, пауза та продовження"
  ],
  [
    "4 Завершення",
    "Фіксує виконаний крок",
    "Задоволення",
    "Незрозуміло, чи збережено результат",
    "Підтвердження та оновлення прогресу"
  ],
  [
    "5 Повернення",
    "Переглядає і змінює завтрашній план",
    "Впевненість",
    "План зламався після пропуску",
    "Перенесення без повторного введення"
  ]
];

const requirements = [
  [
    "R1",
    "Початок роботи",
    "При першому вході показати приклад задачі та зрозумілу дію створення.",
    "Новий користувач створює першу задачу без зовнішнього пояснення."
  ],
  [
    "R2",
    "План на день",
    "Назва задачі, дедлайн, тривалість і список сесій на сьогодні.",
    "Після збереження видно задачу, тривалість і дату; помилкові значення пояснено."
  ],
  [
    "R3",
    "Керування сесією",
    "Початок, пауза, продовження та завершення з чітким станом.",
    "Після паузи користувач може продовжити ту саму сесію."
  ],
  [
    "R4",
    "Поступ",
    "Підтвердження завершення і кількість виконаних сесій.",
    "Завершена сесія відображається один раз; повторне натискання не дублює її."
  ],
  [
    "R5",
    "Перепланування",
    "Зміна дати та тривалості зі збереженням задачі й дедлайну.",
    "Перенесення змінює дату сесії, але не видаляє введені дані."
  ],
  [
    "R6",
    "Доступність",
    "Текстові назви дій, видимий фокус, керування клавіатурою; стан не лише кольором.",
    "Усі основні дії доступні з клавіатури; поточний стан має текстову назву."
  ]
];

const sections = [
  ["personas", "Персони"],
  ["empathy", "Карта емпатії"],
  ["journey", "Шлях користувача"],
  ["requirements", "Вимоги"],
];
function initialTheme() {
  try {
    const value = localStorage.getItem("focusly-lab2-theme");
    if (["light", "dark"].includes(value)) return value;
  } catch {}
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
function initialSection() {
  return sections.some(([id]) => id === location.hash.slice(1))
    ? location.hash.slice(1)
    : "personas";
}
export default function App() {
  const [theme, setTheme] = useState(initialTheme);
  const [section, setSection] = useState(initialSection);
  const [selected, setSelected] = useState("P1");
  const person = personas.find((p) => p.id === selected);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("focusly-lab2-theme", theme);
    } catch {}
  }, [theme]);
  useEffect(() => {
    const update = () => setSection(initialSection());
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  return (
    <div className="app-shell">
      <header className="topbar">
        <a href="#personas" aria-label="Focusly — головна">
          <Logo className="brand" />
        </a>
        <span className="lab-label">ПРАКТИЧНА 02</span>
        <button
          className="theme-button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "☀ Світла тема" : "☾ Темна тема"}
        </button>
      </header>
      <main>
        <section className="intro">
          <div>
            <p className="eyebrow">FOCUSLY / USER RESEARCH</p>
            <h1>
              Навчання починається
              <br />з розуміння людини<span>.</span>
            </h1>
            <p className="lead">
              Хто планує навчальні сесії, що заважає почати та як Focusly може
              допомогти. Персони й сценарії розвитку студентського
              планувальника.
            </p>
          </div>
          <aside className="summary">
            <span className="summary-number">03</span>
            <strong>різні ритми навчання</strong>
            <p>
              Одна мета — знайти час
              <br />
              для наступного кроку.
            </p>
            <span className="status">
              <i /> Проєктні гіпотези
            </span>
          </aside>
        </section>
        <nav className="section-nav" aria-label="Розділи дослідження">
          {sections.map(([id, label], i) => (
            <a
              key={id}
              href={"#" + id}
              aria-current={section === id ? "page" : undefined}
            >
              <span>0{i + 1}</span>
              {label}
            </a>
          ))}
        </nav>
        <div className="section-content" key={section}>
          {section === "personas" && (
            <>
              <SectionHeading
                number="01"
                title="Знайомтеся з користувачами"
                text="Сегменти відрізняються поведінкою та потребами, а не лише віком."
              />
              <div className="persona-picker" aria-label="Вибір персони">
                {personas.map((p, i) => (
                  <button
                    key={p.id}
                    aria-pressed={selected === p.id}
                    onClick={() => setSelected(p.id)}
                  >
                    <span className={"avatar avatar-" + i}>
                      {p.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                    <span>
                      <strong>{p.name}</strong>
                      <small>{p.role}</small>
                    </span>
                    <span className="picker-arrow">↗</span>
                  </button>
                ))}
              </div>
              <PersonaCard person={person} />
              <article className="anti-persona">
                <span className="eyebrow">МЕЖІ АУДИТОРІЇ / АНТИПЕРСОНА</span>
                <h3>Корпоративний керівник</h3>
                <p>
                  Максим, 35 років, шукає контроль зайнятості команди, розподіл
                  задач між працівниками та фінансову звітність. Focusly
                  зосереджений на особистому навчанні, тому корпоративний
                  моніторинг не входить до пріоритетів.
                </p>
              </article>
            </>
          )}
          {section === "empathy" && (
            <>
              <SectionHeading
                number="02"
                title="Погляд очима Олени"
                text="Карта емпатії основної персони P1. Ситуація: короткий проміжок між парами та іншими справами."
              />
              <div className="empathy-grid">
                {empathy.map(([label, text], i) => (
                  <article key={label} className="empathy-cell">
                    <span className="cell-number">0{i + 1}</span>
                    <h3>{label}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
              <p className="insight">
                Проєктний висновок: показати один зрозумілий наступний крок і
                дозволити перепланувати день без зайвих дій.
              </p>
            </>
          )}
          {section === "journey" && (
            <>
              <SectionHeading
                number="03"
                title="Від наміру до завершеної сесії"
                text="Майбутній сценарій Олени: відкрити Focusly після пар, запланувати коротку сесію та повернутися до навчання завтра."
              />
              <div className="journey-list">
                {journey.map(
                  ([stage, action, emotion, pain, solution, source], i) => (
                    <article key={stage}>
                      <span className="step-number">{i + 1}</span>
                      <div>
                        <h3>{stage.slice(2)}</h3>
                        <p>{action}</p>
                        <span className="emotion">{emotion}</span>
                      </div>
                      <div>
                        <small>БАР’ЄР</small>
                        <p>{pain}</p>
                      </div>
                      <div>
                        <small>РІШЕННЯ FOCUSLY</small>
                        <p>{solution}</p>
                        <span className="source">{source}</span>
                      </div>
                    </article>
                  ),
                )}
              </div>
            </>
          )}
          {section === "requirements" && (
            <>
              <SectionHeading
                number="04"
                title="Від потреб до рішень"
                text="Шість вимог із критеріями перевірки та зв’язком із персонами й етапами шляху."
              />
              <div className="requirements">
                {requirements.map(
                  ([id, title, text, check, source]) => (
                    <article key={id}>
                      <span className="requirement-id">{id}</span>
                      <div>
                        <h3>{title}</h3>
                        <p>{text}</p>
                        <details>
                          <summary>Критерій перевірки</summary>
                          <p>{check}</p>
                        </details>
                      </div>
                      <span className="source">{source}</span>
                    </article>
                  ),
                )}
              </div>
            </>
          )}
        </div>
      </main>
      <footer>
        <Logo withWordmark={false} className="footer-logo" />
        <p>Focusly · Кравченко І.А. · 2026</p>
        <span>UI/UX дизайн · ХАІ · каф. 603</span>
      </footer>
    </div>
  );
}
function SectionHeading({ number, title, text }) {
  return (
    <header className="section-heading">
      <span className="eyebrow">ДОСЛІДЖЕННЯ / {number}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </header>
  );
}
