import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const Users = () => {

    const {data: users, isLoading, refetch} = useQuery('users',()=>fetch('https://vast-savannah-22839.herokuapp.com/users',{
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res =>res.json()))
   
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleMakeAdmin = (email) =>{
        fetch(`https://vast-savannah-22839.herokuapp.com/users/admin/${email}`,{
            method: 'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if (res.status === 403) {
                toast.error('Failed to make admin')
            }
            return res.json()})
        .then(adminData => {
            if (adminData.modifiedCount>0) {
                toast.success('Make admin successfully')
                refetch()
            }
        })
    }

    return (
        <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
              users.map((user, index) =>
              <tr key={user._id}>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{user.role !== 'admin' && <button onClick={()=>handleMakeAdmin(user.email)} className='btn btn-xs btn-primary text-white'>make admin</button>}</td>
          </tr>)
          }
        </tbody>
      </table>
    </div>
    );
};

export default Users;