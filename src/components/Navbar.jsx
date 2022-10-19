import { faMagnifyingGlass, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
	return (
		<div className="navbar bg-dark text-light sticky-top">
			<div className="container">
				<span className="fs-3">KALKULUS</span>
				<div className="row">
					<div className="col">
						<button className="btn btn-transparent text-light fs-4">
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</button>
					</div>
					<div className="col">
						<button className="btn btn-transparent text-light fs-4">
							<FontAwesomeIcon icon={faSun} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
