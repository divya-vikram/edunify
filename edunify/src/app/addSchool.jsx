import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function AddSchool() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        for (let key in data) {
            formData.append(key, data[key]);
        }
        try {
            const response = await axios.post('/api/addSchool', data);
            alert(response.data.message);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Add School</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name</label>
                    <input {...register('name', { required: 'Name is required' })} />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div>
                    <label>Address</label>
                    <input {...register('address', { required: 'Address is required' })} />
                    {errors.address && <p>{errors.address.message}</p>}
                </div>
                <div>
                    <label>City</label>
                    <input {...register('city', { required: 'City is required' })} />
                    {errors.city && <p>{errors.city.message}</p>}
                </div>
                <div>
                    <label>State</label>
                    <input {...register('state', { required: 'State is required' })} />
                    {errors.state && <p>{errors.state.message}</p>}
                </div>
                <div>
                    <label>Contact</label>
                    <input type="number" {...register('contact', { required: 'Contact is required' })} />
                    {errors.contact && <p>{errors.contact.message}</p>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" {...register('email_id', { required: 'Email is required' })} />
                    {errors.email_id && <p>{errors.email_id.message}</p>}
                </div>
                <div>
                    <label>Image</label>
                    <input type="file" {...register('image', { required: 'Image is required' })} />
                    {errors.image && <p>{errors.image.message}</p>}
                </div>
                <button type="submit">Add School</button>
            </form>
        </div>
    );
}
