import styles from './Layout.module.scss'

import Header from './Header/Header'

const Layout = ({ children, height = '350px', bgImage }) => {
	return (
		<div
			className={styles.wrapper}
			style={{ height, backgroundImage: `url(${bgImage})` }}
		>
			<Header />
			<div>{children}</div>
		</div>
	)
}

export default Layout
