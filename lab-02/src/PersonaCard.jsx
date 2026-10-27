export default function PersonaCard({ person }) {
  return (
    <article className="persona-detail" aria-live="polite">
      <div className="persona-overview">
        <span className="eyebrow">
          {person.id} / {person.role}
        </span>
        <h2>{person.name}</h2>
        <p className="age">{person.age}</p>
        <blockquote>«{person.quote}»</blockquote>
        <small>Змодельоване висловлювання</small>
        <div className="persona-need">
          <strong>Що потрібно від Focusly</strong>
          <p>{person.needs}</p>
        </div>
      </div>
      <div className="persona-body">
        <section>
          <h3>Контекст життя</h3>
          <p>{person.context}</p>
        </section>
        <section>
          <h3>Технологічний досвід</h3>
          <p>{person.tech}</p>
        </section>
        <div className="goals-pains">
          <section>
            <h3>Цілі</h3>
            <ul>
              {person.goals.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3>Болі та перешкоди</h3>
            <ul>
              {person.pain.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </section>
        </div>
        <section className="scenario">
          <span className="eyebrow">СЦЕНАРІЙ ВЗАЄМОДІЇ</span>
          <p>{person.scenario}</p>
        </section>
      </div>
    </article>
  );
}
