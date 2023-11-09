import DataTable from 'react-data-table-component';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';


const Dashboard = () => {
    const navigate = useNavigate(); 
    const verify = 'promotersIntl';
    const [disabled,setDisabled] = useState(true)
    // object to save
    const [events, setEvents] = useState({
        loading: true,
        results: [],
        err: null,
        reload: 0
    });
    //use effect load when enter the page
    useEffect(() => {
        setEvents({ ...events, loading: true });    
        if (Cookies.get('auth') !== verify) navigate('/'); 
        axios
            .get("https://api-promoters-intl.onrender.com/get-events")
            .then((res) => {
                setEvents({ ...events, results: res.data, loading: false, err: null })
                console.log(events.results);
            })
            .catch((err) => {
                setEvents({
                    ...events,
                    loading: false,
                    err: "something went wrong, please try again later !"
                })
            })
    }, [events.reload]);

    const handleDelete = async (params) => {
        setEvents({ ...events, loading: true });  
        await axios
            .delete("https://api-promoters-intl.onrender.com/delete-event",{
              data : {id: params._id},
              withCredentials: true
            })
            .then((res) => {
              setEvents({...events,reload: !events.reload,loading: false})
              console.log(res);
            })
            .catch((err) => {
              setEvents({
                    ...events,
                    loading: false,
                    err: "something went wrong  , please try again later ! error desc :" + err
                    
                })
                console.log(err);
            })
    };

    const handleLogOut = async () => {
      try {
        await axios.get("https://api-promoters-intl.onrender.com/admin-logout")
        .then((res)=>{
          Cookies.remove("auth");
        });

      } catch (error) {
        alert("Error while logging out");
        console.log(error);
      }
    }

    const columns = [
        {
            name: 'Cover Photo',
            selector: row => (<img src={row.cover} width={70} />),
            center: true
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
            center: true
        },
        {
            name: 'Description',
            selector: row => row.description,
            sortable: true,
            center: true
        },
        {
            name: 'Category',
            selector: row => row.category,
            sortable: true,
            center: true
        },
        {
          name: "Delete",
          cell: (param) => deleteBook(param),
        },
        // {
        //     name: "",
        //     cell: (param) => updateBook(param),
        //     center: true
        // },
        // {
        //     name: <button disabled={disabled} className='btn deleteAllBtn' onClick={() => handleDeleteAll()}>Delete All</button>,
        //     cell: (param) => deleteBook(param),
        // },
    ];


    const deleteBook = (param) => {
        return (
            <>
                <button className='btn deleteBtn' onClick={() => handleDelete(param)}>
                    delete
                </button>
            </>
        );
    };

    return (
        <>
            <div className="title-datatable">
                <h2>All Books</h2>
                <div className="a-container">
                    <Link to={"/admin-create-event"} className="">
                        Add Event
                    </Link>
                    <Link onClick={handleLogOut} to={"/admin-login"} className="">
                        Log out
                    </Link>
                </div>
            </div>
            <DataTable
                columns={columns}
                data={events.results}
                selectableRows
                pagination
            />
        </>
    );
}

export default Dashboard;
