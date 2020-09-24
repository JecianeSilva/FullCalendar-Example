import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import moment from 'moment'

export default class Calendar extends React.Component {
  calendarComponentRef = React.createRef();
  render() {

  return (  
        <div>
            <FullCalendar
                    locale='pt-br'
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                    left: 'prev,next',
                    center: 'title',
                    right: 'timeGridDay,timeGridWeek,dayGridMonth'
                    }}
                    initialView='timeGridDay'
                    nowIndicator={true}
                    now = {moment().format("YYYY-MM-DDTHH:mm:ss[Z]")}            
                    allDayContent={false}
                    timeFormat={'H(:mm)'}
                    /*slotLabelFormat= {[
                    { month: 'long', year: 'numeric' }, // top level of text
                    { weekday: 'short' } // lower level of text
                    ]}*/
                    eventTimeFormat= {{ // like '14:30:00'
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12:true    
                    }}
                    firstHour= {7}
                    buttonText={{
                    today:    'Hoje',
                    month:    'Mensal',
                    week:     'Semanal',
                    day:      'Diario'
                    }}   
                    views = {[
                    {
                        timeGridDay: { // name of view
                        titleFormat: { year: 'string', month: '4-digit', day: '4-digit' }
                        // other view-specific options here
                    }
                    }
                ]}
                timeZone= 'UTC'
                events= {[
                    {
                    id: 'a',
                    title: 'my event',
                    start: '2020-09-23T00:00:00.000Z',
                    end: '2020-09-23T12:30:00.000Z',
                    }
                ]}
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    eventClick={()=> {alert() }}
                    select={()=>{let calendarApi = this.calendarComponentRef.current.getApi();
                if(calendarApi.view.type==="dayGridMonth" || calendarApi.view.type==="timeGridWeek");
                    return this.gotoPast();
                }}
                    ref={this.calendarComponentRef}
                    /* you can update a remote database when these fire:
                    eventAdd={function(){}}
                    eventChange={function(){}}
                    eventRemove={function(){}}
                    */
                />
        </div>
  );
}
gotoPast = () => {
  let calendarApi = this.calendarComponentRef.current.getApi();
  calendarApi.changeView("timeGridDay");
};
}