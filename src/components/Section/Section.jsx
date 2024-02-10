import css from "./Sectiom.module.css";

export const Section = ({ children, title }) => {
  return (
    <section className={title ? css.superSection : css.baseSection}>
      {title && <h2 className={css.title}>{title}</h2>}
      {children}
    </section>
  );
};
