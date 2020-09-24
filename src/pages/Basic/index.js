import React from 'react'
//import { Calendar, momentLocalizer } from 'react-big-calendar'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
//import moment from 'moment'

//const localizer = momentLocalizer(moment); 

export default function Basic(){
  return(
    <div>
       <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'timeGridDay,timeGridWeek,dayGridMonth'
        }}
        initialView="timeGridDay"

        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}

        select={() => alert("Teste")}
        eventClick={() => alert("Teste")}
      /> 
    </div>
  );
  }