import React from 'react'

const Map = () => {
	return (
		<div>
			<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d428.9847536533706!2d124.7057961953558!3d6.390186813955195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1725881059411!5m2!1sen!2sph"
				style={{ border: 0 }}
				allowFullScreen
				loading="lazy"
				className="rounded-xl w-80 h-52 md:w-[400px] md:h-64 lg:w-[576px] lg:h-96"
				referrerPolicy="no-referrer-when-downgrade">
			</iframe>
		</div>
	)
}

export default Map