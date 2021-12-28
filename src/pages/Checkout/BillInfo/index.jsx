import React from 'react';
import Input from '../../../component/Input';
import Select from '../../../component/Select';
import BillHeading from '../BillHeading';
import './style.scss';
function BillInfo({ register, error }) {
    
    return (
        <div className='bill__info form'>
            <BillHeading desc = 'Please enter your billing info' step={1}/>
            <div className="form__inputs">
                <Input label='First name' placeholder='First name' register={{ ...register('firstname', { required: true }, {required: 'First name là bắt buộc'}) }} error={error}/>
                <Input label='Last name' placeholder='Last name'register={{...register('lastname', {required: true},{required: 'Last name là bắt buộc'})}} error={error}/>
                <Input label='Email address' placeholder='Email address'register={{...register('email', {required: true , pattern: 'email'},{required: 'Email là bắt buộc', pattern: 'Email không hợp lệ'})}} error={error}/>
                <Input label='Phone number' placeholder='Phone number'register={{...register('phone', {required: true, pattern: 'phone'},{required: 'Số điện thoại là bắt buộc', pattern: 'Số điện thoại không hợp lệ'})}} error={error}/>
                <Input label='Address' placeholder='Address' register={{...register('address', {required: true},{required: 'Địa chỉ là bắt buộc'})}} error={error}/>
                <Input label='Town / City' placeholder='Town / City'register={{...register('city', {required: true},{required: 'Thành phố là bắt buộc'})}}error={error} />
                {/* <Input label='State / Country' placeholder='State / Country'register={{...register('state', {required: true},{})}} error={error}/> */}
                <Select label='State / Country' register={{...register('state', {required: true},{})}} error={error}/>
                <Input label='ZIP/Postal code' placeholder='ZIP/Postal code' register={{ ...register('zip', { required: true }, {required: 'Zip chỉ là bắt buộc'}) }} error={error} />
                <Input label='' placeholder='Ship to a different address?' checkbox={true} register={{ ...register('ship', { required: false }, {}) }} error={error}/>
            </div>
        </div>
    );
}

export default BillInfo;