import styles from './SidebarLayout.module.css';

export interface ISidebarLayout {
  sampleTextProp: string;
}

const SidebarLayout: React.FC<ISidebarLayout> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default SidebarLayout;
