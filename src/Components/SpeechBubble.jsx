
import React from 'react';

const SpeechBubble = ({ text }) => {
    //speech bubble to resonate a effect that the pokemon is speaking something
  return (
    <div className="relative inline-block">
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white text-black p-2 rounded shadow-lg">
        {text}
      </div>
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -mb-1 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
    </div>
  );
};

export default SpeechBubble;
