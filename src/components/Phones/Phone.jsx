import PropTypes from 'prop-types';
import PhoneCard from './PhoneCard';

const Phone = ({ phones }) => {
    return (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {
                phones.map((phone) => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
            }
        </div>
    );
};

Phone.propTypes = {
    phones: PropTypes.array.isRequired,
}

export default Phone;