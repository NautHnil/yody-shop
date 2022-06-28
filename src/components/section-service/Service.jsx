import * as React from 'react';
import ser1 from '../../assets/image/ser_1.webp'
import ser2 from '../../assets/image/ser_2.webp'
import ser3 from '../../assets/image/ser_3.webp'
import ser4 from '../../assets/image/ser_4.webp'
import './service.scss'
import Grid from '@mui/material/Grid';


export default function Service() {
  return (
      <>
      <div className="container">
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
        
                <div className="service">
                    <img className='service-left' src={ser1} alt='ser-1'/>
                    <div className="service-right">
                        <div className="service-sumary">Miễn phí giao hàng</div>
                        <div className="service-sumary">FREESHIP mọi đơn từ <span>1/4 - 30/4</span></div>
                    </div>
                </div>
            
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
        
                <div className="service">
                    <img className='service-left' src={ser2} alt='ser-2'/>
                    <div className="service-right">
                        <div className="service-sumary">Thanh toán COD</div>
                        <div className="service-sumary">Thanh toán khi <span>nhận hàng (COD)</span></div>
                    </div>
                </div>
            
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
        
                <div className="service">
                    <img className='service-left' src={ser3} alt='ser-3'/>
                    <div className="service-right">
                        <div className="service-sumary">Khách hàng VIP</div>
                        <div className="service-sumary">Ưu đãi dành cho <span>khách hàng VIP</span></div>
                    </div>
                </div>
            
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
        
                <div className="service">
                    <img className='service-left' src={ser4} alt='ser-4'/>
                    <div className="service-right">
                        <div className="service-sumary">Hỗ trợ bảo hành</div>
                        <div className="service-sumary"><span>Đổi, sửa</span> đồ tại tất cả YODY Store</div>
                    </div>
                </div>
            
            </Grid>
        </Grid>
      </div>
    </>
  );
}
