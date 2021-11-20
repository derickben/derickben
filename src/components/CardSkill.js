const CardSkill = ({ skillSet }) => {
  const { title, skillList } = skillSet;
  return (
    <div className="cardSkill">
      <p className="cardSkill__title">{title}</p>

      {skillList.map((item, idx) => (
        <ul className="cardSkill__list">
          <li className="cardSkill__list--item">
            <div>
              <img src={item.icon} alt="skill logo" />
              <p>{item.name}</p>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default CardSkill;
