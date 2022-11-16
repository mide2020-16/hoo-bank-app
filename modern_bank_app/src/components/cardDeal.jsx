import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const cardDeal = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal  <br className='sm:block hidden' /> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[500px] mt-5`}>With our invoicing system, we can provide back-to-back quality product for you and your organization with no hindrance at all.</p>
        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]'/>
      </div>
      </section>
  )


export default cardDeal