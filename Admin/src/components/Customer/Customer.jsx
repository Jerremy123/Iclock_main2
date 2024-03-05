import { useEffect, useState } from "react";
import "./Customer.css";
import remove_icon from "../../assets/cross_icon.png";
import edit_icon from "../../assets/681286-200.png";

const Customer = () => {
  const [users, setAllUser] = useState([]);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const fetchInfor = async () => {
    await fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((data) => {
        setAllUser(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchInfor();
  }, []);

  const removeUser = async (_id) => {
    await fetch(`http://localhost:4000/deleteUser/${_id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: _id }),
    });
    await fetchInfor();
  };

  const changePassword = async (_id) => {
    if (!oldPassword || !newPassword) {
      alert("Vui lòng nhập đầy đủ thông tin mật khẩu");
      return;
    }
    const rsp = await fetch(`http://localhost:4000/changepassword/${_id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ oldPassword, newPassword, _id }),
    });
    const data = await rsp.json();

    // Kiểm tra mật khẩu cũ đúng
    if (!data.success) {
      alert(data.errors);
      return;
    } else {
      alert(data.message);
    }
    await fetchInfor();
  };

  return (
    <div className="list-user">
      <h1>Danh sách người dùng</h1>
      <div className="list_user-main">
        {/* <p>Mã định danh</p> */}
        <p>Tên người dùng</p>
        <p>Email</p>
        {/* <p>Mật khẩu</p> */}
        <p>Mật khẩu cũ</p>
        <p>Mật khẩu mới</p>
        <p>Đổi mật khẩu</p>
        <p>Xoá người dùng</p>
      </div>
      <div className="list_user-allusers">
        <hr />
        {users.map((user, i) => {
          return (
            <>
              <div key={i} className="list_user-main list_user-format">
                {/* <img src={product.image} alt="" className="list_product-icon" /> */}
                <p>{user.name}</p>
                <p>{user.email}</p>
                {/* <p>{user.password}</p> */}
                <input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                {/* <button onClick={() => changePassword(user._id)}>
                  Đổi mật khẩu
                </button> */}
                <img
                  className="list_product-remove-icon"
                  onClick={() => {
                    changePassword(user._id);
                  }}
                  src={edit_icon}
                  alt=""
                />
                <img
                  onClick={() => {
                    removeUser(user._id);
                  }}
                  className="list_product-remove-icon"
                  src={remove_icon}
                  alt=""
                />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Customer;
