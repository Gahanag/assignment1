import React, { useState } from 'react';

function RequestCallbackPopup() {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [preferredCallbackTime, setPreferredCallbackTime] = useState('');
  const [additionalComments, setAdditionalComments] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the callback request data to the server
    try {
      const response = await fetch('/api/callback/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, contactNumber, preferredCallbackTime, additionalComments }),
      });

      if (response.ok) {
        // Redirect to the success message page
        window.location.href = '/success';
      } else {
        // Handle error
        console.error('Error submitting callback request');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Request Callback</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Contact Number:
            <input type="tel" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />
          </label>
          <label>
            Preferred Callback Time:
            <input type="text" value={preferredCallbackTime} onChange={(e) => setPreferredCallbackTime(e.target.value)} />
          </label>
          <label>
            Additional Comments:
            <textarea value={additionalComments} onChange={(e) => setAdditionalComments(e.target.value)} />
          </label>
          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
}

export default RequestCallbackPopup;
