import React, { useState } from 'react';
import { Vet } from '../../types';
import { CloseIcon, StarIcon } from '../icons/Icons';

interface RatingModalProps {
  vet: Vet;
  onClose: () => void;
  onSubmit: () => void;
}

const RatingModal: React.FC<RatingModalProps> = ({ vet, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Rating for ${vet.name}: ${rating} stars, Comment: ${comment}`);
    onSubmit();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md mx-auto transform transition-all animate-fade-in-up">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-text">Rate Your Service</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <CloseIcon />
            </button>
          </div>
          
          <p className="text-center text-text-light mb-4">How was your experience with <span className="font-semibold text-text">{vet.name}</span>?</p>
          
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center mb-6 space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="focus:outline-none"
                >
                  <StarIcon
                    className={`w-10 h-10 transition-colors ${
                      (hoverRating || rating) >= star ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
            
            <div className="mb-4">
              <label htmlFor="comment" className="sr-only">Add a comment</label>
              <textarea
                id="comment"
                rows={3}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand focus:outline-none bg-white text-black"
                placeholder="Share more about your experience..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={rating === 0}
                className="w-full px-6 py-3 bg-brand text-white rounded-md hover:bg-brand-dark font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RatingModal;