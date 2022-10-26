import '../assets/styles/pages/moduls.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import img from '../assets/images/stack-of-paper.png';

const Moduls = () => {
	return (
		<div className="moduls">
			<Navbar />
			<div className="header">
				<div className="w-50 text-center text-white">
					<img src={img} alt="" style={{ width: '5rem' }} />
					<h3 className='mt-2'>MODUL</h3>
					<p className='desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At qui ipsum ad iste vero debitis.</p>
				</div>
			</div>
			<div className="modulList"></div>
			<Footer />
		</div>
	);
};

export default Moduls;
