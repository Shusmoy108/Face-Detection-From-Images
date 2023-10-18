import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl, box}) => {
	return(
		<div className='center'>
			<div className='absolute mt2'>
				<img id='inputImage' alt='' src={imageUrl} width='100%' height='auto' />
				<div className='boundingbox'
				style={{top:box.topRow, right:box.rightCol, bottom:box.bottomRow, left:box.leftCol}}></div>
			</div>
		</div>
	);
}
export default FaceRecognition;