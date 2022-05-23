import useParts from '../../hooks/useParts';
import Part from './Part';

const Parts = () => {

    const [parts] = useParts();

    return (
        <div className='bg-gray-100 py-5 px-5 rounded-lg'>
            <h2 className="text-3xl font-bold text-center">Our Parts</h2>
            <div className="divider"></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
            {
                parts.slice(0, 6).map(part => <Part key={part._id} part={part}/>)
            }
            </div>
        </div>
    );
};

export default Parts;