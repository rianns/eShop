import { NavLink } from "react-router-dom";

const Carousel = () => {
	return (
		<div
			id='photosCarousel'
			className='carousel slide'
			data-ride='carousel'
		>
			{/* <ol className='carousel-indicators'>
				<li
					data-target='#photosCarousel'
					data-slide-to='0'
					className='active'
				></li>
				<li
					data-target='#photosCarousel'
					data-slide-to='1'
				></li>
				<li
					data-target='#photosCarousel'
					data-slide-to='2'
				></li>
			</ol> */}
			<div className='carousel-inner'>
				<div className='carousel-item active'>
					<NavLink to='/eShop/products/XRFgNgUPpARijLT6gVYz'>
						<img
							className='d-block w-100'
							src='src/assets/images/landscape.jpg'
							alt='Landscape Photography'
						/>
					</NavLink>
				</div>
				<div className='carousel-item'>
					<NavLink to='/eShop/products/52ANUGp1vddw5GONYHDk'>
						<img
							className='d-block w-100'
							src='src/assets/images/infant.jpg'
							alt='Infant Photography'
						/>
					</NavLink>
				</div>
				<div className='carousel-item'>
					<NavLink to='/eShop/products/qU6DpGW1cL6TVijYkw33'>
						<img
							className='d-block w-100'
							src='src/assets/images/event.jpg'
							alt='Event Photography'
						/>
					</NavLink>
				</div>
			</div>
			<a
				className='carousel-control-prev'
				data-target='#photosCarousel'
				role='button'
				data-slide='prev'
			>
				<span
					className='carousel-control-prev-icon'
					aria-hidden='true'
				></span>
				<span className='sr-only'></span>
			</a>
			<a
				className='carousel-control-next'
				data-target='#photosCarousel'
				role='button'
				data-slide='next'
			>
				<span
					className='carousel-control-next-icon'
					aria-hidden='true'
				></span>
				<span className='sr-only'></span>
			</a>
		</div>
	);
};
export default Carousel;
