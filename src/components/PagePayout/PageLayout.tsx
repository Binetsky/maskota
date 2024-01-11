import { PropsWithChildren } from 'react';

/**
 * Компонент основной разметки страницы
 * @param props - PropsWithChildren
 * @returns FC
 */
export const PageLayout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <div>
      <header>Шапка</header>
      <main>{children}</main>
      <footer>Подвал</footer>
    </div>
  );
};
