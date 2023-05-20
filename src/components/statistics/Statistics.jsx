import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomHexColor } from './randomeColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title ? (
        <h2 className={css.title}>{title}</h2>
      ) : (
        <h2 className={css.title}>UPLOAD STATS</h2>
      )}

      <ul className={css.stat_list}>
        {stats.map(item => (
          <li style={{ backgroundColor: getRandomHexColor() }} key={item.id}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
