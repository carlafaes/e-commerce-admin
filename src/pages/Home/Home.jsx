import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/actions';
import style from './Home.module.scss';

//COMPONENTES
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';
import Sidebar from '../../components/SideBar/Sidebar';
import { Grid } from '@mui/material';

const Home = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.allProducts);
	const token = useSelector((state) => state.currentUser.accessToken);

	//Buscamos todos los productos creados
	useEffect(() => {
		dispatch(getAllProducts(token));
	}, []);

	return (
		<Grid container direction='row' className={style.container}>
			<Sidebar />
			{products ? (
				<ProductsContainer products={products} token={token} />
			) : null}
		</Grid>
	);
};
export default Home;
