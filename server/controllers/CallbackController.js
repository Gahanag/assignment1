const CallbackRequest = require('../models/CallbackRequest');

exports.submitCallbackRequest = async (req, res) => {
  try {
    // Save the callback request in the database
    const callbackRequest = new CallbackRequest({
      name: req.body.name,
      contactNumber: req.body.contactNumber,
      preferredCallbackTime: req.body.preferredCallbackTime,
      additionalComments: req.body.additionalComments,
    });

    await callbackRequest.save();

    res.status(200).json({ message: 'Callback request submitted successfully' });
  } catch (error) {
    console.error('Error submitting callback request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
