import React, { useState, useEffect } from "react";
import { FaAccusoft, FaPlus } from "react-icons/fa";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import axios from "axios";
import Modal from "react-modal";

function Home() {
  const [dataList, setDataList] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/posts", {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((res) => {
        setDataList(res.data.listOfPost);
      });
  }, dataList);

  const columns = [
    {
      field: "title",
      headerName: "Title Post",
      flex: 1,
    },
    {
      field: "postText",
      headerName: "Post Text",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      flex: 1,
    },
    {
      field: "updatedAt",
      headerName: "Updated At",
      flex: 1,
    },
    {
      field: "Likes",
      headerName: "Updated At",
      flex: 1,
    },
    {
      field: "username",
      headerName: "Username",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation(); // don't select this row after clicking

          let html = "";

          console.log(params.row.id);
        };

        return (
          <button onClick={openModal} className="bg-red-500">
            Click
          </button>
        );
      },
    },
  ];

  const rows = dataList;

  const customStyles = {
    overlay: {
      position: "fixed",
      zIndex: 1020,
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      background: "rgba(255, 255, 255, 0.75)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      background: "white",

      overflowY: "auto",

      border: "1px solid black",
      borderRadius: "0.3rem",
    },
  };

  // Modal.setAppElement("root");

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const data = { title: title, postText: text };

  const insertPost = () => {
    console.log("first", title, text);
    axios
      .post("http://localhost:3001/posts", data, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((res) => {
        closeModal();
      });
  };

  return (
    <div className="px-10">
      <div className="h-auto bg-white w-full rounded-md px-5 py-5">
        <div className="flex flex-row overflow-x-hidden">
          <h1 className="font-bold w-full pb-3 text-left">MENU NAME</h1>
        </div>
        <div className="flex flex-col sm:flex-row overflow-x-hidden sm:w-auto justify-end">
          <button
            onClick={openModal}
            className="bg-black flex w-full border-black px-4 py-2 rounded-md sm:w-auto text-white hover:bg-white hover:text-black"
          >
            <FaPlus className="" /> Button
          </button>
          <div className="p-1"></div>
          <button className="bg-black flex w-full border-black rounded-md px-4 py-2 sm:w-auto text-white hover:bg-white hover:text-black">
            <FaAccusoft /> Button
          </button>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          id="add"
        >
          <div className="flex flex-row w-full">
            <div className="w-1/2">
              <form>
                <div class="mb-6 w-11/12">
                  <label class="block mb-2 text-sm font-medium">Title</label>
                  <input
                    type="text"
                    className=" border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 "
                    placeholder="Title Post.."
                    required=""
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div class="mb-6 w-11/12">
                  <label class="block mb-2 text-sm font-medium">Title</label>
                  <input
                    type="text"
                    className=" border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 "
                    placeholder="Title Post.."
                    required=""
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={insertPost}
                >
                  Submit
                </button>
                <button onClick={closeModal}>Close Modal</button>
              </form>
            </div>
            <div className="w-1/2">
              <form>
                <div class="mb-6 w-11/12">
                  <label class="block mb-2 text-sm font-medium">Title</label>
                  <input
                    type="text"
                    className=" border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 "
                    placeholder="Title Post.."
                    required=""
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div class="mb-6 w-11/12">
                  <label class="block mb-2 text-sm font-medium">Title</label>
                  <input
                    type="text"
                    className=" border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-gray-400 "
                    placeholder="Title Post.."
                    required=""
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={insertPost}
                >
                  Submit
                </button>
                <button onClick={closeModal}>Close Modal</button>
              </form>
            </div>
          </div>
        </Modal>
        <div>
          <div class="overflow-x-auto h-full min-h-max py-5 shadow-md sm:rounded-lg">
            <Box sx={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={pageSize}
                onPageSizeChange={(newPage) => setPageSize(newPage)}
                rowsPerPageOptions={[10, 50, 100]}
              />
            </Box>
            <p id="dataList"></p>
          </div>
        </div>
      </div>
      <div className="mb-10"></div>
    </div>
  );
}

export default Home;
