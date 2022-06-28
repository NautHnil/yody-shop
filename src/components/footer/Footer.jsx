import React from 'react'
import { Link } from 'react-router-dom'
import social1 from '../../assets/image/social_1.webp'
import social2 from '../../assets/image/social_2.webp'
import social3 from '../../assets/image/social_3.webp'
import social4 from '../../assets/image/social_4.webp'
import social5 from '../../assets/image/social_5.webp'
import social6 from '../../assets/image/social_6.webp'
import social7 from '../../assets/image/social_7.webp'
import social8 from '../../assets/image/social_8.webp'
import location from '../../assets/image/map.svg'
import phone from '../../assets/image/phone.svg'
import email from '../../assets/image/email.svg'
import logobct from '../../assets/image/logo_bct.webp'
import Grid from '@mui/material/Grid';

import './footer.scss'
const Footer = props => {
  return (
    <div className='footer'>
      <div className="container">
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={4} >
            <ul className="footer__post">
              <li className="footer__item__header">“Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ hành động của mình” là sứ mệnh, là triết lý, chiến lược.. luôn cùng YODY tiến bước”</li>
              <li className="footer__item__social">
                <Link to='#'>
                  <img src={social1} alt="social1" />
                </Link>
                <Link to='#'>
                  <img src={social2} alt="social2" />
                </Link>
                <Link to='#'>
                  <img src={social3} alt="social3" />
                </Link>
                <Link to='#'>
                  <img src={social4} alt="social4" />
                </Link>
                <Link to='#'>
                  <img src={social5} alt="social5" />
                </Link>
                <Link to='#'>
                  <img src={social6} alt="social6" />
                </Link>
                <Link to='#'>
                  <img src={social7} alt="social7" />
                </Link>
                <Link to='#'>
                  <img src={social8} alt="social8" />
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <ul className="footer__post">
              <li className="footer__item__header">VỀ YODY</li>
              <li className="footer__item__info">
                <Link to ="#">
                  <div>Giới thiệu</div>
                </Link>
                <Link to="#">
                  <div>Liên hệ</div>
                </Link>
                <Link to="#">
                  <div>Tin tức</div>
                </Link>
                <Link to="#">
                  <div>Hệ thống cửa hàng</div>
                </Link>

              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <ul className="footer__post">
              <li className="footer__item__header">HỖ TRỢ KHÁCH HÀNG</li>
              <li className="footer__item__info">
                <Link to="#">
                  <div>Hướng dẫn chọn size</div>
                </Link>
                <Link to="#">
                  <div>Chính sách khách hàng thân thiết</div>
                </Link>
                <Link to="#">
                  <div>Chính sách đổi/trả</div>   
                </Link>
                <Link to="#">
                  <div>Chính sách bảo mật</div>
                </Link>
                <Link to="#">
                  <div>Thanh toán, giao nhận</div>  
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ul className="footer__post">
              <li className="footer__item__header">Công ty cổ phần Thời trang YODY</li>
              <li className="footer__item__info">
                <div className="footer__item__info__adddress footer-mobile">
                  <img className='img' src={location} alt="location" />
                  <div>Địa chỉ: Đường An Định - Phường Việt Hoa - Thành phố Hải Dương - Hải Dương</div>
                  <div>Mã số thuế: 0801206940</div>
                </div>
                <div className="footer__item__info__contact footer-mobile">
                  <img className='img' src={phone} alt="phone" />
                  <Link to="#">
                    <div>Liên hệ đặt hàng: 024 730 56665</div>
                  </Link>
                    <Link to="#">
                      <div>Thắc mắc đơn hàng: 024 730 16661</div>
                    </Link>
                  <Link to="#">
                    <div>Góp ý khiếu nại: 1800 2086</div>
                  </Link>
                </div>
                <div className="footer__item__info__social footer-mobile">
                  <img className='img' src={email} alt="email" />
                  <Link to="#">
                    <div>Email: chamsockhachhang@yody.vn</div>
                  </Link>
                </div>
                <div className="footer__item__info__social footer-mobile">
                  <Link to="#">
                  <img className='img' src={logobct} alt="logobct" />
                  </Link>
                </div>
              </li>
            </ul>
          </Grid>
        </Grid>
        <div className="copyright">
        @ Bản quyền thuộc về <span>Yody.vn </span>All right reserved
        </div>
      </div>
    </div>
  )
}

Footer.propTypes = {}

export default Footer