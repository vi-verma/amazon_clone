import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Navigation.module.css";
import logo from "../../resources/Amazon-Logo.png";
import flag from "../../resources/indian-flag.png";
import { Input, Space, Select, Menu, Dropdown, Button } from "antd";
// import '../../App.css';
import {
  EnvironmentOutlined,
  // DownOutlined,
  SearchOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const { Option } = Select;
const { Search } = Input;

const Navigation = (props) => {
  const [products, SetProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const unitOfItemsInCart = useContext(CartContext).totalItems;
  // console.log(filteredProducts,'filteredProducts');

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => SetProducts(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    props.onFliterItems([...filteredProducts])
  },[filteredProducts])

  const onSelectCategory = (selectedCategory) => {
    if (selectedCategory !== 'All' && selectedCategory !== '') {
      // console.log(selectedCategory,'selectedCategory');
      setFilteredProducts(products.filter((item) => {
        return item.category === selectedCategory
      }));
    } else if(selectedCategory === 'All') {
      setFilteredProducts([...products]);
    }else{
    setFilteredProducts(products.filter((item) => {
      return item.category === selectedCategory
    }));
    }
  };
  const onSearch = (searchKey) => {
    const searchKeayword = searchKey.toLowerCase();
    const productsToFilter = filteredProducts.length > 0 ? filteredProducts : products;
    setFilteredProducts(productsToFilter.filter((item) => {
        return (
          item.description.toLowerCase().includes(searchKeayword) ||
          item.title.toLowerCase().includes(searchKeayword)
        );
      })
    );
  };
  // console.log(filteredProducts, "filter");

  const categories = products.map((p) => { return p.category; });
  let uniqueCategories = categories.filter((item, i, ar) => ar.indexOf(item) === i);
  // console.log(uniqueCategories, 'categories');
  const addOnBefore = (
    <Select defaultValue="All" onChange={(e) => { onSelectCategory(e); }}
    // style={{ backgroundColor:'#e6e6e6',border:'1px solid red', borderRadius:'20px' }}
    >
      <Option value="All">All</Option>
      {uniqueCategories.map((categ) => (
        <Option key={categ} value={categ}>
          {categ}
        </Option>
      ))}
    </Select>
  );

  const languageMenu = (
    <Menu>
      <Menu.Item key="English">English</Menu.Item>
      <Menu.Item key="Hindi">Hindi</Menu.Item>
      {/* <Menu.Item>3rd menu item</Menu.Item> */}
    </Menu>
  );
  const userMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/login">Login</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/new-user-signup">signup</Link>
      </Menu.Item>
      {/* <Menu.Item>3rd menu item</Menu.Item> */}
    </Menu>
  );

  return (
    <ul className={classes.main_navigation}>
      {/* <Space direction="horizontal"> */}
      <li>
        <div className={classes.logo}>
          <Link to="/">
            <img src={logo} alt="amazon img" />
            <span>.in</span>
          </Link>
        </div>
      </li>
      <li>
        <div className={classes.user_location}>
          <div>
            <EnvironmentOutlined className={classes.location_img} />
          </div>
          <div className={classes.location_text}>
            <span>Hello</span>
            <span>Select your address</span>
          </div>
        </div>
      </li>
      <li className={classes.search_filter_bar}>
        <Search
          className={classes.search_filter}
          addonBefore={addOnBefore}
          placeholder="input search text"
          allowClear
          enterButton={
            <Link to='/filter'>
              <SearchOutlined />
          </Link>
          }
          // size="large"
          onSearch={onSearch}
        // autoSize={{minRows: 6, maxRows: 6 }}
        />
      </li>
      <li>
        <div className={classes.language_dropdown}>
          <Dropdown overlay={languageMenu} placement="bottomRight" arrow>
            <button className={classes.language_dropdown_button}>
              <img src={flag} alt="flag img" />
              <span>
                <CaretDownOutlined />
              </span>
            </button>
          </Dropdown>
        </div>
      </li>
      <li>
        <div className={classes.login_signup}>
          <Dropdown overlay={userMenu} placement="bottomRight" arrow>
            <button>
              {" "}
              <span>Hello, Sign in</span>
              <span>
                Account & Lists
                <CaretDownOutlined />
              </span>
            </button>
          </Dropdown>
        </div>
      </li>
      <li>
        <div className={classes.order_action}>
          <span>Returns</span>
          <span>& Order</span>
        </div>
      </li>
      <li>
        <div className={classes.cart}>
          <Link to="/cart">
            <div>{unitOfItemsInCart || "0"}</div>
            <div className={classes.cart_icon}>
              <span>
                {" "}
                <ShoppingCartOutlined />
              </span>
              <span>cart</span>
            </div>
          </Link>
        </div>
      </li>
      {/* </Space> */}
    </ul>
  );
};

export default Navigation;
