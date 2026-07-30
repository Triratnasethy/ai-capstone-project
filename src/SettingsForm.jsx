import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { settingsSchema } from './settingsSchema';

export default function SettingsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      username: '',
      email: '',
      notifications: false,
    },
  });

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Saved precisely:", data);
  };

  return (
    <div className="settings-container" style={{ maxWidth: '400px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>Account Settings</h2>
      
      {isSubmitSuccessful && (
        <div style={{ padding: '10px', background: '#d4edda', color: '#155724', marginBottom: '15px', borderRadius: '4px' }}>
          Settings saved successfully!
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Username</label>
          <input
            id="username"
            type="text"
            {...register('username')}
            aria-invalid={errors.username ? "true" : "false"}
            style={{ width: '100%', padding: '8px', border: errors.username ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
          />
          {errors.username && <span role="alert" style={{ color: 'red', fontSize: '12px' }}>{errors.username.message}</span>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email Address</label>
          <input
            id="email"
            type="email"
            {...register('email')}
            aria-invalid={errors.email ? "true" : "false"}
            style={{ width: '100%', padding: '8px', border: errors.email ? '1px solid red' : '1px solid #ccc', borderRadius: '4px' }}
          />
          {errors.email && <span role="alert" style={{ color: 'red', fontSize: '12px' }}>{errors.email.message}</span>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              {...register('notifications')}
            />
            Receive email notifications
          </label>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          style={{ padding: '10px 15px', background: isSubmitting ? '#ccc' : '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
        >
          {isSubmitting ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
}
