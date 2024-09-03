import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import data from '../utils/dashboardData.json'


const Widgets = (props) => {
    //const {categoryName} = props.data.categoryName
    // const {setDashData} = props;
    console.log(props)
    const {categoryName,widgets} = props.data
    const {addWidget} = props
    console.log(addWidget)
    

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const catRef = useRef();
    const widNameRef = useRef();
    const widTextRef = useRef();

    const handleAddToWidgets = () => {
      const categoryName = catRef.current.value
      const widgetName = widNameRef.current.value
      const widgetText = widTextRef.current.value

      const newWidget = {
        "categoryName" : categoryName,
        "widgetName" : widgetName,
        "widgetText" : widgetText
      }

      addWidget(newWidget)

      // setDashData((prevData) => {
      //   console.log(prevData)
      //   prevData.map((item) => {
      //     if(item.categoryName == categoryName) {
      //       // item.Widgets.push(newWidget)
      //       console.log(categoryName)
      //       console.log(item)
      //       return item.widgets = [...item.widgets,newWidget]
      //       console.log(item)
      //       console.log(newWidget)
      //     }
      //   })
      // })
    }

  return (
    <div className='p-1 bg-slate-100'>
        <h3>{categoryName}</h3>
        <div className=''>
          <div className='flex '>
            {widgets.map((widget) => (
              <div className='bg-slate-200 p-2 rounded-2xl'>
                <div className='m-4 p-5 bg-white rounded-lg w-[300px] shadow-lg'>
                  <h5>{widget.widgetName}</h5>
                  <p>{widget.widgetText}</p>
                </div>
              </div>
            ))}
            <div className='bg-slate-200 p-2 rounded-2xl items-center'>
              <div className='m-4 flex p-5 bg-white rounded-lg w-[300px] justify-center shadow-lg'>
                <button className='border-2 rounded-md px-2' onClick={handleShow}>+ Add widget</button>
              </div>
            </div>
          </div>
        </div>
        <div>
            <Modal
            className='bg-neutral-300 p-2 w-[50vw]'
            show={show}
            onHide={handleClose}
            backdrop='static'
            keyboard={false}
            >
            <Modal.Header closeButton>
              <Modal.Title>Add widget</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='flex flex-col'>
                <label className='mx-2'>Category Name</label>
                <input type="text" ref={catRef} className='border-2 rounded-md' />
                <label className='mx-2'>Widget Name</label>
                <input type="text" ref={widNameRef} className='border-2 rounded-md' />
                <label className='mx-2'>Widget Text</label>
                <input type="text" ref={widTextRef} className='border-2 rounded-md' />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button className='bg-neutral-400 m-1 p-1 rounded' onClick={handleClose}>
                Close
              </Button>
              <Button className='bg-neutral-400 m-1 p-1 rounded' onClick={handleAddToWidgets}>Confirm</Button>
            </Modal.Footer>
          </Modal>
        </div>
        
    </div>
  )
}

export default Widgets