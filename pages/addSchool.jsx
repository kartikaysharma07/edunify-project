import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function AddSchool() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        Object.keys(data).forEach(key => formData.append(key, data[key]));
        formData.append('image', data.image[0]);

        try {
            await axios.post('/api/addSchool', formData);
            alert('School added successfully!');
        } catch (error) {
            alert('Failed to add school.');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="p-4">
            <input {...register('name', { required: true })} placeholder="Name" className="block mb-2" />
            {errors.name && <p>Name is required</p>}

            <input {...register('address', { required: true })} placeholder="Address" className="block mb-2" />
            {errors.address && <p>Address is required</p>}

            <input {...register('city', { required: true })} placeholder="City" className="block mb-2" />
            {errors.city && <p>City is required</p>}

            <input {...register('state', { required: true })} placeholder="State" className="block mb-2" />
            {errors.state && <p>State is required</p>}

            <input {...register('contact', { required: true })} placeholder="Contact" className="block mb-2" />
            {errors.contact && <p>Contact is required</p>}

            <input type="file" {...register('image', { required: true })} className="block mb-2" />
            {errors.image && <p>Image is required</p>}

            <input {...register('email_id', { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" className="block mb-2" />
            {errors.email_id && <p>Valid email is required</p>}

            <button type="submit" className="bg-blue-500 text-white p-2">Add School</button>
        </form>
    );
}
