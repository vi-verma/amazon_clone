import { Carousel } from 'antd';
import React from 'react';

const MainCarousel = () => {
    const contentStyle = {
        height: '50vh',
        width:'100%',
        // color: '#fff',
        // lineHeight: '160px',
        // textAlign: 'center',
        // background: '#364d79',
    };
    return (
        <div>
            <Carousel dots={false} autoplay>
                <div>
                    <img  style={contentStyle} src="https://image.shutterstock.com/image-photo/science-molecule-molecular-dna-model-600w-260947274.jpg"alt="img4"/>
                </div>
                <div>
                    {/* <h3 style={contentStyle}>2</h3> */}
                    <img  style={contentStyle}  src="https://image.shutterstock.com/image-photo/business-technology-internet-network-concept-600w-592436522.jpg" alt="img3"/>
                </div>
                <div>
                    {/* <h3 style={contentStyle}>3</h3> */}
                    <img  style={contentStyle} src="https://image.shutterstock.com/image-photo/enzymelinked-immunosorbent-assay-elisa-plate-600w-1175278900.jpg" alt="mob img"/>
                </div>
                <div>
                    {/* <h3 style={contentStyle}>4</h3> */}
                    <img  style={contentStyle} src="https://image.shutterstock.com/image-photo/enzymelinked-immunosorbent-assay-elisa-plate-600w-1175278900.jpg" alt="mob img"/>
                </div>
            </Carousel>
        </div>
    );
};

export default MainCarousel;