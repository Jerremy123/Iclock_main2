import React, { useRef, useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
// import nav_dropdown from "../Asset/dropdown_icon.png";
// import instagram_icon from "../Asset/instagram_icon.png";
// import pinterest_icon from "../Asset/pintester_icon.png";
// import whatsapp_icon from "../Asset/whatsapp_icon.png";
const Footer = ({ collectionRef }) => {
  const [menu, setMenu] = useState("shop");
  const { getTotalItem } = useContext(ShopContext);
  const menuRef = useRef();

  const handleScrollToCollection = () => {
    collectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    // <div className="footer">
    //   <div className="footer-logo">
    //     <img src={footer_logo} alt="" />
    //     <p>iClock</p>
    //   </div>
    //   <ul className="footer-links">
    //     <li>Về chúng tôi</li>
    //     <li>Sản phẩm của chúng tôi</li>
    //     <li>Trụ sở</li>
    //     <li>Chính sách đổi trả và bảo hành</li>
    //     <li>Liên hệ</li>
    //   </ul>
    //   <div className="footer-social-icon">
    //     <div className="footer-icons-container">
    //       <img src={instagram_icon} alt="" />
    //     </div>
    //     <div className="footer-icons-container">
    //       <img src={pinterest_icon} alt="" />
    //     </div>
    //     <div className="footer-icons-container">
    //       <img src={whatsapp_icon} alt="" />
    //     </div>
    //   </div>
    //   <div className="footer-copyright">
    //     <hr />
    //     <p>Copyright @ 2024 - Mọi quyền được bảo lưu</p>
    //   </div>
    // </div>
    <div className="footer-new">
      <div className="infomation-footer">
        <p>iClock</p>
        <span>Nơi thời trang được lên ngôi</span>
        <div className="phone-info">
          <i class="fa-solid fa-phone"></i>
          <span>0123456789</span>
        </div>
        <div className="social-info">
          <i class="fa-solid fa-earth-americas"></i>
          <span>www.iclock.vn</span>
        </div>
        <div className="mail-info">
          <i class="fa-solid fa-envelope"></i>
          <span>iclockhotro@gmail.com</span>
        </div>
        <div className="address-info">
          <i class="fa-solid fa-location-dot"></i>
          <span>
            Khu 2, đường 3 tháng 2, phường Xuân Khánh, quận Ninh Kiều, Cần Thơ
          </span>
        </div>
      </div>
      <div className="footer-link">
        <div className="social-media">
          <div className="link">
            <span>Hỗ trợ</span>
            <ul>
              <li>
                <a href="">Bảo mật thông tin</a>
              </li>
              <li>
                <a href="">Bảo hành và đổi trả</a>
              </li>
              <li>
                <a href="">Điều khoản sử dụng</a>
              </li>
              <li>
                <a href="">Chính sách hoàn tiền</a>
              </li>
              <li>
                <a href="">Chính sách vận chuyển</a>
              </li>
              <li>
                <a href="">Liên hệ</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="social-media">
          <div className="link">
            <span>Menu chính</span>
            <ul>
              <li onClick={() => {
                setMenu("shop");
              }}>
                <Link style={{ textDecoration: "none", color: "#7d7878" }} to="/">
                  Trang chủ
                </Link>
              </li>
              <li>
                <a href="">Ưu đãi</a>
              </li>
              <li onClick={handleScrollToCollection}>
                <a href="" onClick={handleScrollToCollection}>Bộ sưu tập</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="social-media">
          <div className="link">
            <span>Sản phẩm</span>
            <ul>
              <li onClick={() => {
                  setMenu("mens");
                }}>   
                <Link style={{ textDecoration: "none", color: "#7d7878" }} to="/mens">
                    Phái Mạnh
                </Link>
               </li>
              <li onClick={() => {
                  setMenu("womens");
                }}>
                <Link style={{ textDecoration: "none", color: "#7d7878" }} to="/womens">
                    Phái Đẹp
                </Link>
              </li>
              <li
              onClick={() => {
              setMenu("kids");
              }}>
                <Link style={{ textDecoration: "none", color: "#7d7878" }} to="/kids">
                    Trẻ Em
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
