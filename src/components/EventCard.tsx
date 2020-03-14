//this is a test comment
// React Imports
import React from 'react';

// Custom Imports
import pifLogo from '../media/icons/pif-logo.png'; // PLACEHOLDER

import { getThreeEvents_event } from '../generated/getThreeEvents';

// This is a re-usable Card component for event info
// Layout:
// Event Logo, Event Information

interface Props {
  event: getThreeEvents_event;
}

const EventCard = ({ event }: Props) => {
  const { title, location, date, nonprofit } = event;
  return (
    <div className="flex flex-row justify-end pb-2">
      {/* Event Logo */}
      <div className="flex justify-center items-center bg-white h-24 w-24">
        <img src={pifLogo} alt="event image" />
      </div>
      {/* Event Information */}
      <div className="flex flex-col pl-2 bg-blue-400 w-64 h-24">
        <h1 className="text-s">{nonprofit['display_name']}</h1>
        <h1 className="text font-semibold">{title}</h1>
        <h1 className="text-s">{date}</h1>
        <h1 className="text-xs truncate">{location}</h1>
      </div>
    </div>
  );
};

export default EventCard;