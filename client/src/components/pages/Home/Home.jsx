import Layout from '../../common/Layout'
import Button from '../../common/ui/Button/Button'
import Counters from '../../common/ui/Counters/Counters'
import bgImage from '../../../images/home-bg.jpg'
import styles from './Home.module.scss'

const Home = () => {
	return (
		<Layout height='100%' bgImage={bgImage}>
			<Button type='main' text='New' callback={() => {}} />
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			<Counters />
		</Layout>
	)
}

export default Home
