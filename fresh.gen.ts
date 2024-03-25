// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_well_known_caldav from './routes/.well-known/caldav.tsx';
import * as $_well_known_carddav from './routes/.well-known/carddav.tsx';
import * as $_404 from './routes/_404.tsx';
import * as $_app from './routes/_app.tsx';
import * as $_middleware from './routes/_middleware.tsx';
import * as $api_calendar_add_event from './routes/api/calendar/add-event.tsx';
import * as $api_calendar_add from './routes/api/calendar/add.tsx';
import * as $api_calendar_delete_event from './routes/api/calendar/delete-event.tsx';
import * as $api_calendar_delete from './routes/api/calendar/delete.tsx';
import * as $api_calendar_get_events from './routes/api/calendar/get-events.tsx';
import * as $api_calendar_search_events from './routes/api/calendar/search-events.tsx';
import * as $api_calendar_update from './routes/api/calendar/update.tsx';
import * as $api_contacts_add from './routes/api/contacts/add.tsx';
import * as $api_contacts_delete from './routes/api/contacts/delete.tsx';
import * as $api_contacts_get from './routes/api/contacts/get.tsx';
import * as $api_contacts_import from './routes/api/contacts/import.tsx';
import * as $api_dashboard_save_links from './routes/api/dashboard/save-links.tsx';
import * as $api_dashboard_save_notes from './routes/api/dashboard/save-notes.tsx';
import * as $api_news_add_feed from './routes/api/news/add-feed.tsx';
import * as $api_news_delete_feed from './routes/api/news/delete-feed.tsx';
import * as $api_news_import_feeds from './routes/api/news/import-feeds.tsx';
import * as $api_news_mark_read from './routes/api/news/mark-read.tsx';
import * as $api_news_refresh_articles from './routes/api/news/refresh-articles.tsx';
import * as $calendar from './routes/calendar.tsx';
import * as $calendar_calendarEventId_ from './routes/calendar/[calendarEventId].tsx';
import * as $calendars from './routes/calendars.tsx';
import * as $contacts from './routes/contacts.tsx';
import * as $contacts_contactId_ from './routes/contacts/[contactId].tsx';
import * as $dashboard from './routes/dashboard.tsx';
import * as $dav_addressbooks from './routes/dav/addressbooks.tsx';
import * as $dav_addressbooks_contacts from './routes/dav/addressbooks/contacts.tsx';
import * as $dav_addressbooks_contacts_contactId_vcf from './routes/dav/addressbooks/contacts/[contactId].vcf.tsx';
import * as $dav_calendars from './routes/dav/calendars.tsx';
import * as $dav_calendars_calendarId_ from './routes/dav/calendars/[calendarId].tsx';
import * as $dav_calendars_calendarId_calendarEventId_ics from './routes/dav/calendars/[calendarId]/[calendarEventId].ics.tsx';
import * as $dav_files from './routes/dav/files.tsx';
import * as $dav_index from './routes/dav/index.tsx';
import * as $dav_principals from './routes/dav/principals.tsx';
import * as $index from './routes/index.tsx';
import * as $login from './routes/login.tsx';
import * as $logout from './routes/logout.tsx';
import * as $news from './routes/news.tsx';
import * as $news_feeds from './routes/news/feeds.tsx';
import * as $remote_php_davRoute_ from './routes/remote.php/[davRoute].tsx';
import * as $settings from './routes/settings.tsx';
import * as $signup from './routes/signup.tsx';
import * as $Settings from './islands/Settings.tsx';
import * as $calendar_CalendarWrapper from './islands/calendar/CalendarWrapper.tsx';
import * as $calendar_Calendars from './islands/calendar/Calendars.tsx';
import * as $calendar_ViewCalendarEvent from './islands/calendar/ViewCalendarEvent.tsx';
import * as $contacts_Contacts from './islands/contacts/Contacts.tsx';
import * as $contacts_ViewContact from './islands/contacts/ViewContact.tsx';
import * as $dashboard_Links from './islands/dashboard/Links.tsx';
import * as $dashboard_Notes from './islands/dashboard/Notes.tsx';
import * as $news_Articles from './islands/news/Articles.tsx';
import * as $news_Feeds from './islands/news/Feeds.tsx';
import { type Manifest } from '$fresh/server.ts';

const manifest = {
  routes: {
    './routes/.well-known/caldav.tsx': $_well_known_caldav,
    './routes/.well-known/carddav.tsx': $_well_known_carddav,
    './routes/_404.tsx': $_404,
    './routes/_app.tsx': $_app,
    './routes/_middleware.tsx': $_middleware,
    './routes/api/calendar/add-event.tsx': $api_calendar_add_event,
    './routes/api/calendar/add.tsx': $api_calendar_add,
    './routes/api/calendar/delete-event.tsx': $api_calendar_delete_event,
    './routes/api/calendar/delete.tsx': $api_calendar_delete,
    './routes/api/calendar/get-events.tsx': $api_calendar_get_events,
    './routes/api/calendar/search-events.tsx': $api_calendar_search_events,
    './routes/api/calendar/update.tsx': $api_calendar_update,
    './routes/api/contacts/add.tsx': $api_contacts_add,
    './routes/api/contacts/delete.tsx': $api_contacts_delete,
    './routes/api/contacts/get.tsx': $api_contacts_get,
    './routes/api/contacts/import.tsx': $api_contacts_import,
    './routes/api/dashboard/save-links.tsx': $api_dashboard_save_links,
    './routes/api/dashboard/save-notes.tsx': $api_dashboard_save_notes,
    './routes/api/news/add-feed.tsx': $api_news_add_feed,
    './routes/api/news/delete-feed.tsx': $api_news_delete_feed,
    './routes/api/news/import-feeds.tsx': $api_news_import_feeds,
    './routes/api/news/mark-read.tsx': $api_news_mark_read,
    './routes/api/news/refresh-articles.tsx': $api_news_refresh_articles,
    './routes/calendar.tsx': $calendar,
    './routes/calendar/[calendarEventId].tsx': $calendar_calendarEventId_,
    './routes/calendars.tsx': $calendars,
    './routes/contacts.tsx': $contacts,
    './routes/contacts/[contactId].tsx': $contacts_contactId_,
    './routes/dashboard.tsx': $dashboard,
    './routes/dav/addressbooks.tsx': $dav_addressbooks,
    './routes/dav/addressbooks/contacts.tsx': $dav_addressbooks_contacts,
    './routes/dav/addressbooks/contacts/[contactId].vcf.tsx': $dav_addressbooks_contacts_contactId_vcf,
    './routes/dav/calendars.tsx': $dav_calendars,
    './routes/dav/calendars/[calendarId].tsx': $dav_calendars_calendarId_,
    './routes/dav/calendars/[calendarId]/[calendarEventId].ics.tsx': $dav_calendars_calendarId_calendarEventId_ics,
    './routes/dav/files.tsx': $dav_files,
    './routes/dav/index.tsx': $dav_index,
    './routes/dav/principals.tsx': $dav_principals,
    './routes/index.tsx': $index,
    './routes/login.tsx': $login,
    './routes/logout.tsx': $logout,
    './routes/news.tsx': $news,
    './routes/news/feeds.tsx': $news_feeds,
    './routes/remote.php/[davRoute].tsx': $remote_php_davRoute_,
    './routes/settings.tsx': $settings,
    './routes/signup.tsx': $signup,
  },
  islands: {
    './islands/Settings.tsx': $Settings,
    './islands/calendar/CalendarWrapper.tsx': $calendar_CalendarWrapper,
    './islands/calendar/Calendars.tsx': $calendar_Calendars,
    './islands/calendar/ViewCalendarEvent.tsx': $calendar_ViewCalendarEvent,
    './islands/contacts/Contacts.tsx': $contacts_Contacts,
    './islands/contacts/ViewContact.tsx': $contacts_ViewContact,
    './islands/dashboard/Links.tsx': $dashboard_Links,
    './islands/dashboard/Notes.tsx': $dashboard_Notes,
    './islands/news/Articles.tsx': $news_Articles,
    './islands/news/Feeds.tsx': $news_Feeds,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
