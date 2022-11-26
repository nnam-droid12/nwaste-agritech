import React, { useState } from 'react';
import { saveDiary } from '../../firebase/firebaseFunction';
import { Timestamp } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const AddDiary = () =>{

        const [name, setName] = useState("");
        const [createdAt, setCreatedAt] = useState({createdAt: Timestamp.now().toDate()})
        const [desc, setDesc] = useState("");
        const [price, setPrice] = useState("");
        const [fields, setFields] = useState(false);
        const [alertStatus, setAlertStatus] = useState("danger");
        const [msg, setMsg] = useState(null);

        const saveDiaryDetails = () => {
        try {
          if ((!name || !price || !desc )) {
            setFields(true);
            setMsg("Required fields can't be empty");
            setAlertStatus("danger");
            setTimeout(() => {
              setFields(false);
            }, 4000);
          } else {
            const data = {
              id: `${Date.now()}`,
              name: name,
              desc: desc,
              qty: 1,
              price: price,
              createdAt: Timestamp.now().toDate()
            };
    
            saveDiary(data);
            setFields(true);
            setMsg("Data uploaded successfully 😊");
            setAlertStatus("success");
            setTimeout(() => {
              setFields(false);
            }, 4000);
    
            clearData();
          }
        } catch (error) {
          console.log(error);
          setFields(true);
          setMsg('Error while submitting!. Try again ');
          setAlertStatus('danger');
          setTimeout(() => {
          setFields(false);
          }, 6000)
        }
      };

      const clearData = () => {
        setName('');
        setPrice('');
        setDesc('')
      }

    return(
        <AnimatePresence>
           <div className="flex flex-col items-center justify-center create-product">
        <div className="w-[40%] flex flex-col items-center justify-center p-2 border gap-4 border-gray-300 rounded-lg">
          {fields && (
            <motion.p
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className={`w-full p-2 rounded-lg text-center ${
                alertStatus === "danger"
                  ? "bg-red-400 text-red-800"
                  : "bg-emerald-400 text-emerald-800"
              }`}
            >
              {msg}
            </motion.p>
          )}

          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Product name..."
              className="w-full h-full text-lg  bg-transparent outline-none order-none placeholder:text-gray-500"
            />
          </div>


            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
              <input
                type="text"
                required
                placeholder="Add the price..."
                className="w-full h-full text-lg  bg-transparent outline-none order-none placeholder:text-gray-500"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <input
              type="text"
              required
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Enter product description..."
              className="w-full h-full text-lg  bg-transparent outline-none order-none placeholder:text-gray-500"
            />
          </div>
          </div>

          <div className="flex items-center w-full">
            <button
              type="button"
              className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
              onClick={saveDiaryDetails}
            >
              Save
            </button>
          </div>
        </div>
      </AnimatePresence>
    )
}

export default AddDiary;