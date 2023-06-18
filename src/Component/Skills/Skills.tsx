import styles from './Skills.module.scss';
import angularSVG from '../../Assets/Img/Angular.svg';

const Skills = () => {
  return <section className={ styles['skills-section'] }>
    <div>Angular</div>
    <div>React</div>
    <div>JavaScript</div>
    <div>TypeScript</div>
    <div>HTML</div>
    <div>SCSS</div>
    <div>Data Structures</div>
    <div>Git</div>
  </section>
}

export default Skills;
