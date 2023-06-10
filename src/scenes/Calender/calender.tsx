import FullCalendar from "@fullcalendar/react";
import { CalendarApi, EventApi, formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

// import FullCalendar from "@fullcalendar/react";
// import { formatDate } from "@fullcalendar/core";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import listPlugin from "@fullcalendar/list";
import { useState } from "react";

import {
  useTheme,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const CalendarView = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const events: EventApi[] = [];
  const [currentEvents, setCurrentEvents] = useState(events);

  const handleDateClick = (selected: any) => {
    const title = prompt("Please Enter new Title for your Event");
    const calenderApi: CalendarApi = selected.view.calendar;
    calenderApi.unselect();

    if (title) {
      calenderApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: any) => {
    if (
      window.confirm(
        `Are you sure, You want to delete an event '${selected.event.title}`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <Box>
      <Header
        title="CALENDAR"
        subTitle="Full Calendar Interactive Page"
      ></Header>
      <Box display="flex" justifyContent="space-between">
        <Box
          flex="1 1 20%"
          p="15px"
          m="20px"
          borderRadius="4px"
          sx={{
            backgroundColor: colors.primary[600],
          }}
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event: any) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next,today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events: EventApi[]) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2023-06-08",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2023-06-14",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CalendarView;
