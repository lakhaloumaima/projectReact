import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react'
import { CameraOutlined  } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteproduct, updateproduct, updateproductimage } from '../../features/products/productsSlice';
import { Form, Input, Button, Checkbox } from 'antd';
import { selectcategories } from '../../features/categories/categoriesSlice';
import { Select } from 'antd';

const { Option } = Select;

const ProductItem = ({ product }) => {

    const categories = useSelector(selectcategories)

    const [isModalVisible, setIsModalVisible] = useState(false);

    const dispatch = useDispatch()

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values) => {
        console.log('Success:', values);

        let data = {
            id : product._id,
            data : values
        }


        dispatch(updateproduct(data))
        setIsModalVisible(false)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handlefilechanged = (e) => {
        let fdt = new FormData()

        fdt.append('image', e.target.files[0])

        let data = {
            id: product._id,
            data: fdt
        }

        dispatch(updateproductimage(data))
        window.location.reload()
    }

    return (
        <div>
           {/* Product List Start */}
<div className="product-view">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-8">
        <div className="row">
          <div className="col-md-12">
            <div className="product-view-top">
              <div className="row">
                <div className="col-md-4">
                  <div className="product-search">
                    <input type="email" defaultValue="Search By Max Price" />
                    <button><i className="fa fa-search" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
 
          <div className="col-md-4">
            <div className="product-item">
              <div className="product-title">
                <a href="#">{product.name}</a>
            
              </div>
              <div className="product-image">
                <a href="#">
                <img src={'http://localhost:5000/getfile/' + product.image} alt="" />
                          
                </a>
                <div className="product-action">
                  <a href="#"><i className="fa fa-cart-plus" /></a>
                  
                </div>
              </div>
              <div className="product-price">
                <h5><span>{product.price}</span>DT</h5>
                <div class="choose">
                        <ul class="nav nav-pills nav-justified">
                            <li><a onClick={() => showModal()} ><i class="glyphicon glyphicon-pencil"></i>Update</a></li>
              
                            <li><a onClick={() => dispatch(deleteproduct(product._id))}  ><i class="glyphicon glyphicon-trash"></i>Delete</a></li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
         </div>
         
          
        <div className="col-md-12">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex={-1}>Previous</a>
              </li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
        {/* Pagination Start */}
      </div>           
      {/* Side Bar Start */}
      <div className="col-lg-4 sidebar">
        <div className="sidebar-widget category">
          <h2 className="title">Category</h2>
          <nav className="navbar bg-light">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-female" />Fashion &amp; Beauty</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-child" />Kids &amp; Babies Clothes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-tshirt" />Men &amp; Women Clothes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-mobile-alt" />Gadgets &amp; Accessories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-microchip" />Electronics &amp; Accessories</a>
              </li>
            </ul>
          </nav>
        </div>
       
    
      
      
      </div>
      {/* Side Bar End */}
    </div>
  </div>
</div>
{/* Product List End */}
  


            <Modal footer={null}  title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <img src={'http://localhost:5000/getfile/' + product.image} alt="" style={{ width: "100%", height: "200px" }} />
                <div style={{ dispaly: "flex", justifyContent: 'center' }} >
                    <input type="file" id='upload' hidden onChange={(e) => handlefilechanged(e)} />
                    <CameraOutlined onClick={() => document.getElementById('upload').click()} style={{ marginLeft: "50%", fontSize: "25px", color: "orange", cursor: 'pointer' }} />
                </div>

                <Form
                    
                    initialValues={{ 

                        name: product.name,
                        price: product.price,
                        qte: product.qte,
                        description: product.description,
                        category: product.category._id

                     }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout={"vertical"}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input product name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{ required: true, message: 'Please input product price!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="quantity"
                        name="qte"
                        rules={[{ required: true, message: 'Please input product quantity!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: 'Please input product description!' }]}
                    >
                        <Input />
                    </Form.Item>

                    {<Form.Item
                        label="Category"
                        name="category"
                        rules={[{ required: true, message: 'Please select product category!' }]}
                    >
                        <Select  >
                            {
                                categories.map((c) => {
                                    return(
                                        <Option value={c._id}>{c.name}</Option>
                                    )
                                })
                            }
                        </Select>
                    </Form.Item>}

                    
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            update
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>


        </div>
    )
}

export default ProductItem
