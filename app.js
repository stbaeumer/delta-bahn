const translations = {
  de: {
    pageTitle: 'Delta Bahn',
    pageSubtitle: 'Plane deine Reise mit bahn.de. Teile deine Verbindung mit Deltachat.',
    languageLabel: 'Sprache:',
    searchLinkLabel: 'ICS-Datei hochladen:',
    searchLinkHint: 'Wählen Sie in bahn.de "In Kalender speichern", um calendar.ics herunterzuladen.',
    icsFileLoadedHint: 'Datei bereits hochgeladen',
    icsFileLoadedUnknown: 'Datei bereits hochgeladen.',
    coachLabel: 'Wagen (optional):',
    seatLabel: 'Platz (optional):',
    showConnectionButton: 'Verbindung zeigen',
    delayButton: 'Verspätung zeigen',
    liveDepartureButton: 'Live-Abfahrt',
    liveArrivalButton: 'Live-Ankunft',
    deleteButton: 'Verbindung löschen',
    sendButton: 'Senden',
    tripHint: 'Datei geladen. Prüfen Sie die Vorschau und senden Sie die Verbindung.',
    outputHeading: 'Vorschau',
    footerLinkLabel: 'Delta Bahn auf Codeberg',
    apiFooterInfo: 'Bahn API: v6.db.transport.rest',
    fallbackHint: 'webxdc ist nicht verfügbar. Nachricht wurde kopiert.',
    preparedHint: 'Der Chat-Entwurf mit ICS-Datei wurde vorbereitet.',
    errorHint: 'Die Nachricht konnte nicht gesendet werden.',
    savedHint: 'Verbindung erfolgreich erkannt und gespeichert.',
    deletedHint: 'Gespeicherte Verbindung gelöscht.',
    parseErrorHint: 'Ungültige ICS-Datei. Bitte eine Bahn-calendar.ics hochladen.',
    saveFirstHint: 'Bitte zuerst eine gültige ICS-Datei hochladen.',
    previewPlaceholder: 'Noch keine gültige ICS-Datei geladen.\nBitte zuerst eine calendar.ics hochladen.',
    delayLoadingHint: 'Verspätungsdaten werden abgerufen…',
    liveDepartureLoadingHint: 'Live-Abfahrtsdaten werden abgerufen…',
    liveArrivalLoadingHint: 'Live-Ankunftsdaten werden abgerufen…',
    delayFetchErrorHint: 'Verspätungsdaten konnten nicht abgerufen werden.',
    liveFetchErrorHint: 'Live-Daten konnten nicht abgerufen werden.',
    delayHeading: '🔴 Aktuelle Verspätungsinformation:',
    liveDepartureHeading: '🟢 Live-Abfahrt:',
    liveArrivalHeading: '🟢 Live-Ankunft:',
    delayOnTime: 'Pünktlich',
    delayUnit: 'Min',
    delayNoData: 'Keine Echtzeitdaten',
    liveNoData: 'Keine passenden Live-Daten gefunden',
    iconRoute: '🚂',
    iconDeparture: '🕐',
    iconArrival: '⏰',
    iconLeg: '🚆',
    iconSeat: '💺',
    iconPlatform: '🛤️',
    labelRoute: 'Verbindung',
    labelDeparture: 'Abfahrt',
    labelArrival: 'Ankunft',
    labelLeg: 'Teilfahrt',
    labelSeatPlan: 'Sitzplan',
    labelCoach: 'Wagen',
    labelSeat: 'Platz',
    labelPlatform: 'Gleis',
    labelPlanned: 'geplant',
    hintLine: 'ℹ️ Aus ICS-Datei ausgelesene Verbindungsdaten:'
  },
  en: {
    pageTitle: 'Delta Train',
    pageSubtitle: 'Plan your trip on bahn.de. Share your connection in Delta Chat.',
    languageLabel: 'Language:',
    searchLinkLabel: 'Upload ICS file:',
    searchLinkHint: 'Choose "Save in calendar" to download calendar.ics. Upload calendar.ics here to share your trip data.',
    icsFileLoadedHint: 'File already uploaded',
    icsFileLoadedUnknown: 'A file is already uploaded.',
    coachLabel: 'Coach (optional):',
    seatLabel: 'Seat (optional):',
    showConnectionButton: 'Show connection',
    delayButton: 'Show delays',
    liveDepartureButton: 'Live departure',
    liveArrivalButton: 'Live arrival',
    deleteButton: 'Delete connection',
    sendButton: 'Send',
    tripHint: 'File loaded. Check the preview and send your connection.',
    outputHeading: 'Preview',
    footerLinkLabel: 'Delta Train on Codeberg',
    apiFooterInfo: 'Rail API: v6.db.transport.rest',
    fallbackHint: 'webxdc is not available. Message was copied.',
    preparedHint: 'The chat draft with ICS file was prepared.',
    errorHint: 'The message could not be sent.',
    savedHint: 'Connection parsed and saved.',
    deletedHint: 'Saved connection deleted.',
    parseErrorHint: 'Invalid ICS file. Please upload a Bahn calendar.ics file.',
    saveFirstHint: 'Please upload a valid ICS file first.',
    previewPlaceholder: 'No valid ICS file loaded yet.\nPlease upload calendar.ics first.',
    delayLoadingHint: 'Fetching delay data…',
    liveDepartureLoadingHint: 'Fetching live departure data…',
    liveArrivalLoadingHint: 'Fetching live arrival data…',
    delayFetchErrorHint: 'Could not fetch delay data.',
    liveFetchErrorHint: 'Could not fetch live data.',
    delayHeading: '🔴 Current delay information:',
    liveDepartureHeading: '🟢 Live departure:',
    liveArrivalHeading: '🟢 Live arrival:',
    delayOnTime: 'On time',
    delayUnit: 'min',
    delayNoData: 'No real-time data',
    liveNoData: 'No matching live data found',
    iconRoute: '🚂',
    iconDeparture: '🕐',
    iconArrival: '⏰',
    iconLeg: '🚆',
    iconSeat: '💺',
    iconPlatform: '🛤️',
    labelRoute: 'Route',
    labelDeparture: 'Departure',
    labelArrival: 'Arrival',
    labelLeg: 'Leg',
    labelSeatPlan: 'Seat plan',
    labelCoach: 'Coach',
    labelSeat: 'Seat',
    labelPlatform: 'Platform',
    labelPlanned: 'planned',
    hintLine: 'ℹ️ Parsed trip data from ICS file:'
  }
};

function localeForLanguage(language) {
  return language === 'de' ? 'de-DE' : 'en-GB';
}

const STORAGE_KEY = 'delta-bahn-trip-v2';
const API_BASE = 'https://v6.db.transport.rest';
const BAHN_IMAGE_PATH = 'icons/bahn.png';
const stopIdCache = new Map();

const form = document.getElementById('tripForm');
const languageSelect = document.getElementById('language');
const icsFileInput = document.getElementById('icsFile');
const icsFileStatus = document.getElementById('icsFileStatus');
const detailsSection = document.getElementById('detailsSection');
const coachInput = document.getElementById('coach');
const seatInput = document.getElementById('seat');
const showConnectionButton = document.getElementById('showConnectionButton');
const delayButton = document.getElementById('delayButton');
const liveDepartureButton = document.getElementById('liveDepartureButton');
const liveArrivalButton = document.getElementById('liveArrivalButton');
const deleteButton = document.getElementById('deleteButton');
const sendButton = document.getElementById('sendButton');
const tripHint = document.getElementById('tripHint');
const outputHeading = document.getElementById('outputHeading');
const tripOutput = document.getElementById('tripOutput');

let feedbackTimer = 0;
let parsedTrip = null;
let parsedSourceLink = '';
let parsedSourceFileName = '';
let previewMode = 'connection';
let lastDelayResults = null;
let lastLiveDepartureResult = null;
let lastLiveArrivalResult = null;

function decodeParamValue(value) {
  return (value || '').replace(/\+/g, ' ').trim();
}

function parseStationFromOid(oid) {
  if (!oid) return '';
  const match = oid.match(/(?:^|@)O=([^@]*)@/);
  return match ? decodeParamValue(match[1]) : '';
}

function parseCompactTimestamp(ts) {
  if (!/^\d{12}$/.test(ts || '')) return null;
  const year = Number(ts.slice(0, 4));
  const month = Number(ts.slice(4, 6)) - 1;
  const day = Number(ts.slice(6, 8));
  const hour = Number(ts.slice(8, 10));
  const minute = Number(ts.slice(10, 12));
  const date = new Date(year, month, day, hour, minute, 0, 0);
  return Number.isNaN(date.getTime()) ? null : date;
}

function toIsoLocal(date) {
  if (!date) return '';
  const yyyy = String(date.getFullYear());
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const hh = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}T${hh}:${min}:00`;
}

function parseHdTimestamp(hdValue) {
  if (!hdValue) return null;
  const date = new Date(hdValue);
  return Number.isNaN(date.getTime()) ? null : date;
}

function parseLegsFromGh(ghValue) {
  if (!ghValue) return [];
  const legs = [];
  const pattern = /(?:^|[§¶])T\$[^$]*?@O=([^@]*)@[^$]*?@L=(\d+)@[^$]*?\$[^$]*?@O=([^@]*)@[^$]*?@L=(\d+)@[^$]*?\$(\d{12})\$(\d{12})\$([^$]*)\$/g;
  let match;

  while ((match = pattern.exec(ghValue)) !== null) {
    const dep = parseCompactTimestamp(match[5]);
    const arr = parseCompactTimestamp(match[6]);
    legs.push({
      from: decodeParamValue(match[1]),
      fromId: match[2],
      to: decodeParamValue(match[3]),
      toId: match[4],
      departure: dep ? toIsoLocal(dep) : '',
      arrival: arr ? toIsoLocal(arr) : '',
      train: (match[7] || '').trim().replace(/\s+/g, ' ')
    });
  }

  return legs;
}

function parseGermanLocalDateTime(dateText, timeText) {
  const dateMatch = /^([0-3]?\d)\.([0-1]?\d)\.(\d{4})$/.exec((dateText || '').trim());
  const timeMatch = /^([0-2]?\d):([0-5]\d)$/.exec((timeText || '').trim());
  if (!dateMatch || !timeMatch) return null;

  const day = Number(dateMatch[1]);
  const month = Number(dateMatch[2]) - 1;
  const year = Number(dateMatch[3]);
  const hour = Number(timeMatch[1]);
  const minute = Number(timeMatch[2]);
  const date = new Date(year, month, day, hour, minute, 0, 0);
  return Number.isNaN(date.getTime()) ? null : date;
}

function decodeIcsText(value) {
  return String(value || '')
    .replace(/\\n/g, '\n')
    .replace(/\\,/g, ',')
    .replace(/\\;/g, ';')
    .replace(/\\\\/g, '\\');
}

function unfoldIcsText(text) {
  return String(text || '').replace(/\r\n/g, '\n').replace(/\n[ \t]/g, '');
}

function extractIcsProperty(eventText, propName) {
  const regex = new RegExp(`^${propName}(?:;[^:]+)?:([\\s\\S]*?)$`, 'mi');
  const match = eventText.match(regex);
  return match ? decodeIcsText(match[1].trim()) : '';
}

function parseIcsDateTime(value) {
  const raw = String(value || '').trim();
  const match = raw.match(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})?(Z)?$/);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]) - 1;
  const day = Number(match[3]);
  const hour = Number(match[4]);
  const minute = Number(match[5]);
  const second = Number(match[6] || '0');
  if (match[7] === 'Z') {
    return new Date(Date.UTC(year, month, day, hour, minute, second));
  }
  return new Date(year, month, day, hour, minute, second, 0);
}

function isPlausibleIcsText(text) {
  const normalized = String(text || '').toLowerCase();
  return normalized.includes('begin:vcalendar')
    && normalized.includes('begin:vevent')
    && normalized.includes('summary:')
    && normalized.includes('description:');
}

function parseLegsFromDescription(description, fallbackDateText) {
  const lines = String(description || '').split('\n').map((line) => line.trim());
  const dateLine = lines.find((line) => /^datum:/i.test(line)) || '';
  const dateMatch = dateLine.match(/(\d{2}\.\d{2}\.\d{4})/)
    || String(fallbackDateText || '').match(/(\d{2}\.\d{2}\.\d{4})/);
  const routeIndexList = [];
  for (let i = 0; i < lines.length; i += 1) {
    if (lines[i].includes('➞') && !/^datum:/i.test(lines[i])) routeIndexList.push(i);
  }

  const legs = [];
  routeIndexList.forEach((routeIdx) => {
    const routeLine = lines[routeIdx] || '';
    const trainLine = (lines[routeIdx + 1] || '').trim();
    const depLine = lines.slice(routeIdx + 1, routeIdx + 6).find((line) => /●\s*ab/i.test(line)) || '';
    const arrLine = lines.slice(routeIdx + 1, routeIdx + 8).find((line) => /○\s*an/i.test(line)) || '';

    const routeMatch = routeLine.match(/^(.*?)\s*➞\s*(.*?)$/);
    const depMatch = depLine.match(/●\s*ab\s*([0-2]?\d:[0-5]\d)\s*(.*?)\s*▷\s*Gleis\s*(.+)$/i);
    const arrMatch = arrLine.match(/○\s*an\s*([0-2]?\d:[0-5]\d)\s*(.*?)\s*▷\s*Gleis\s*(.+)$/i);
    if (!routeMatch || !depMatch || !arrMatch) return;

    const dateText = dateMatch ? dateMatch[1] : '';
    const depDate = parseGermanLocalDateTime(dateText, depMatch[1]);
    const arrDate = parseGermanLocalDateTime(dateText, arrMatch[1]);
    const train = trainLine && !trainLine.includes('➞') ? trainLine : '';

    legs.push({
      from: (routeMatch[1] || depMatch[2] || '').trim(),
      fromId: '',
      to: (routeMatch[2] || arrMatch[2] || '').trim(),
      toId: '',
      departure: depDate ? toIsoLocal(depDate) : '',
      arrival: arrDate ? toIsoLocal(arrDate) : '',
      train,
      departurePlatform: (depMatch[3] || '').trim(),
      arrivalPlatform: (arrMatch[3] || '').trim()
    });
  });

  return legs;
}

function parseConnectionInput(icsText) {
  if (!isPlausibleIcsText(icsText)) {
    throw new Error('invalid-ics');
  }

  const unfolded = unfoldIcsText(icsText);
  const eventMatch = unfolded.match(/BEGIN:VEVENT\n([\s\S]*?)\nEND:VEVENT/i);
  if (!eventMatch) {
    throw new Error('missing-vevent');
  }

  const eventText = eventMatch[1];
  const summary = extractIcsProperty(eventText, 'SUMMARY');
  const description = extractIcsProperty(eventText, 'DESCRIPTION');
  const dtStartRaw = extractIcsProperty(eventText, 'DTSTART');
  const dtEndRaw = extractIcsProperty(eventText, 'DTEND');

  const depDate = parseIcsDateTime(dtStartRaw);
  const arrDate = parseIcsDateTime(dtEndRaw);
  const routeMatch = summary.match(/^(.*?)\s*[➞\-]>?\s*(.*?)$/);
  const legs = parseLegsFromDescription(description, '') || [];

  const firstLeg = legs[0] || null;
  const lastLeg = legs.length > 0 ? legs[legs.length - 1] : null;
  const from = routeMatch ? routeMatch[1].trim() : (firstLeg ? firstLeg.from : '');
  const to = routeMatch ? routeMatch[2].trim() : (lastLeg ? lastLeg.to : '');

  return {
    sourceLink: '',
    sourceDescription: description,
    summary,
    from,
    to,
    departure: depDate ? toIsoLocal(depDate) : (firstLeg ? firstLeg.departure : ''),
    arrival: arrDate ? toIsoLocal(arrDate) : (lastLeg ? lastLeg.arrival : ''),
    legs
  };
}

function normalizeStationName(name) {
  return String(name || '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[()\[\],.]/g, '')
    .trim();
}

async function resolveStopId(stationName) {
  const name = String(stationName || '').trim();
  if (!name) return '';

  const key = normalizeStationName(name);
  if (stopIdCache.has(key)) {
    return stopIdCache.get(key);
  }

  try {
    const url = `${API_BASE}/locations?query=${encodeURIComponent(name)}&stops=true&results=8&language=de`;
    const response = await fetch(url);
    if (!response.ok) {
      stopIdCache.set(key, '');
      return '';
    }

    const data = await response.json();
    const locations = Array.isArray(data) ? data : [];
    const stops = locations.filter((item) => item && (item.type === 'stop' || item.type === 'station'));
    if (stops.length === 0) {
      stopIdCache.set(key, '');
      return '';
    }

    const exact = stops.find((item) => normalizeStationName(item.name) === key);
    const startsWith = stops.find((item) => normalizeStationName(item.name).startsWith(key) || key.startsWith(normalizeStationName(item.name)));
    const chosen = exact || startsWith || stops[0];
    const id = chosen && chosen.id ? String(chosen.id) : '';
    stopIdCache.set(key, id);
    return id;
  } catch (_error) {
    stopIdCache.set(key, '');
    return '';
  }
}

async function enrichParsedTripStopIds(parsed) {
  if (!parsed || !Array.isArray(parsed.legs) || parsed.legs.length === 0) {
    return parsed;
  }

  await Promise.all(parsed.legs.map(async (leg) => {
    if (!leg.fromId) {
      leg.fromId = await resolveStopId(leg.from);
    }
    if (!leg.toId) {
      leg.toId = await resolveStopId(leg.to);
    }
  }));

  return parsed;
}

async function fetchDelays(parsed) {
  if (!parsed || !parsed.legs || parsed.legs.length === 0) {
    throw new Error('no-legs');
  }

  const results = [];
  for (const leg of parsed.legs) {
    if (!leg.fromId || !leg.departure) {
      results.push({ leg, departure: null });
      continue;
    }
    try {
      const when = new Date(leg.departure).toISOString();
      const url = `${API_BASE}/stops/${encodeURIComponent(leg.fromId)}/departures?when=${encodeURIComponent(when)}&results=30&duration=10&language=de`;
      const response = await fetch(url);
      if (!response.ok) {
        results.push({ leg, departure: null });
        continue;
      }
      const data = await response.json();
      const departures = Array.isArray(data) ? data : (data.departures || []);
      const scheduledDep = new Date(leg.departure);
      const match = departures.find((dep) => {
        if (!dep.plannedWhen) return false;
        const plannedTime = new Date(dep.plannedWhen);
        return Math.abs(plannedTime - scheduledDep) < 3 * 60 * 1000;
      });
      results.push({ leg, departure: match || null });
    } catch (_error) {
      results.push({ leg, departure: null });
    }
  }
  return results;
}

function buildDelayMessage(parsed, values, delayResults) {
  const copy = translations[languageSelect.value] || translations.de;
  const lines = [copy.delayHeading, ''];

  delayResults.forEach((result) => {
    const { leg, departure } = result;
    const depText = formatDateTimeForMessage(leg.departure, languageSelect.value);
    const legLabel = `${leg.from || '?'} → ${leg.to || '?'}`;
    const trainLabel = leg.train ? ` (${leg.train})` : '';

    if (!departure) {
      lines.push(`❓ ${legLabel}${trainLabel}: ${copy.delayNoData}`);
      return;
    }

    const delaySeconds = departure.delay || 0;
    const delayMin = Math.round(delaySeconds / 60);
    const plannedText = departure.plannedWhen
      ? formatDateTimeForMessage(departure.plannedWhen, languageSelect.value)
      : depText;
    const actualText = departure.when
      ? formatDateTimeForMessage(departure.when, languageSelect.value)
      : null;

    if (delayMin > 0) {
      lines.push(`🔴 ${legLabel}${trainLabel}: +${delayMin} ${copy.delayUnit}`);
      if (actualText && actualText !== plannedText) {
        lines.push(`   ${copy.labelDeparture}: ${plannedText} → ${actualText}`);
      }
    } else if (delayMin < 0) {
      lines.push(`🟡 ${legLabel}${trainLabel}: ${delayMin} ${copy.delayUnit}`);
    } else {
      lines.push(`🟢 ${legLabel}${trainLabel}: ${copy.delayOnTime}`);
    }
  });

  const seatLine = buildSeatLine(values, copy);
  if (seatLine) {
    lines.push('');
    lines.push(seatLine);
  }
  return lines.join('\n');
}

async function fetchLiveEvent(stopId, plannedWhenIso, endpoint) {
  if (!stopId || !plannedWhenIso) return null;
  const when = new Date(plannedWhenIso).toISOString();
  const url = `${API_BASE}/stops/${encodeURIComponent(stopId)}/${endpoint}?when=${encodeURIComponent(when)}&results=30&duration=20&language=de`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('live-fetch-failed');
  }

  const data = await response.json();
  const items = Array.isArray(data) ? data : (data[endpoint] || []);
  const scheduled = new Date(plannedWhenIso);
  return items.find((item) => {
    if (!item || !item.plannedWhen) return false;
    const planned = new Date(item.plannedWhen);
    return Math.abs(planned - scheduled) < 3 * 60 * 1000;
  }) || null;
}

function buildLiveEventMessage(type, parsed, values, result) {
  const copy = translations[languageSelect.value] || translations.de;
  const isDeparture = type === 'departure';
  const heading = isDeparture ? copy.liveDepartureHeading : copy.liveArrivalHeading;
  const leg = isDeparture ? parsed.legs[0] : parsed.legs[parsed.legs.length - 1];
  const placeLabel = isDeparture ? (leg.from || parsed.from || '?') : (leg.to || parsed.to || '?');
  const plannedIso = isDeparture ? leg.departure : leg.arrival;
  const plannedText = formatDateTimeForMessage(plannedIso, languageSelect.value) || '?';

  const lines = [heading, ''];
  lines.push(`${copy.iconRoute} ${copy.labelRoute}: ${parsed.from || '?'} -> ${parsed.to || '?'}`);

  if (!result) {
    lines.push(`❓ ${copy.liveNoData}`);
  } else {
    const actualIso = result.when || result.plannedWhen || '';
    const actualText = formatDateTimeForMessage(actualIso, languageSelect.value) || plannedText;
    const delayMin = Math.round((result.delay || 0) / 60);
    const timeLabel = isDeparture ? copy.labelDeparture : copy.labelArrival;
    const icon = isDeparture ? copy.iconDeparture : copy.iconArrival;
    const delayText = delayMin > 0
      ? ` (+${delayMin} ${copy.delayUnit})`
      : (delayMin < 0 ? ` (${delayMin} ${copy.delayUnit})` : ` (${copy.delayOnTime})`);

    lines.push(`${icon} ${timeLabel} ${placeLabel}: ${actualText}${delayText}`);
    if (actualText !== plannedText) {
      lines.push(`   ${timeLabel} ${copy.labelPlanned}: ${plannedText}`);
    }
  }

  const seatLine = buildSeatLine(values, copy);
  if (seatLine) {
    lines.push('');
    lines.push(seatLine);
  }
  return lines.join('\n');
}

function collectFormValues() {
  return {
    sourceFileName: parsedSourceFileName || '',
    coach: (coachInput.value || '').trim(),
    seat: (seatInput.value || '').trim()
  };
}

function formatDateTimeForMessage(isoLike, language) {
  if (!isoLike) return '';
  const date = new Date(isoLike);
  if (Number.isNaN(date.getTime())) return '';

  const formatter = new Intl.DateTimeFormat(localeForLanguage(language), {
    dateStyle: 'medium',
    timeStyle: 'short'
  });
  return formatter.format(date);
}

function buildSeatLine(values, copy) {
  const parts = [];
  if (values.coach) parts.push(`${copy.labelCoach}: ${values.coach}`);
  if (values.seat) parts.push(`${copy.labelSeat}: ${values.seat}`);
  if (parts.length === 0) return '';
  return `${copy.iconSeat} ${copy.labelSeatPlan}: ${parts.join(', ')}`;
}

function buildTripMessage(parsed, values) {
  const copy = translations[languageSelect.value] || translations.de;
  if (!parsed) return copy.previewPlaceholder;

  const lines = [copy.hintLine, ''];

  if (parsed.from || parsed.to) {
    lines.push(`${copy.iconRoute} ${copy.labelRoute}: ${parsed.from || '?'} -> ${parsed.to || '?'}`);
  }

  const depText = formatDateTimeForMessage(parsed.departure, languageSelect.value);
  if (depText) lines.push(`${copy.iconDeparture} ${copy.labelDeparture}: ${depText}`);

  const arrText = formatDateTimeForMessage(parsed.arrival, languageSelect.value);
  if (arrText) lines.push(`${copy.iconArrival} ${copy.labelArrival}: ${arrText}`);

  parsed.legs.forEach((leg, index) => {
    const legDep = formatDateTimeForMessage(leg.departure, languageSelect.value) || '?';
    const legArr = formatDateTimeForMessage(leg.arrival, languageSelect.value) || '?';
    const trainSuffix = leg.train ? ` (${leg.train})` : '';
    const depPlatform = leg.departurePlatform ? ` | ${copy.iconPlatform} ${copy.labelDeparture} ${copy.labelPlatform}: ${leg.departurePlatform}` : '';
    const arrPlatform = leg.arrivalPlatform ? ` | ${copy.iconPlatform} ${copy.labelArrival} ${copy.labelPlatform}: ${leg.arrivalPlatform}` : '';
    lines.push(`${copy.iconLeg} ${copy.labelLeg} ${index + 1}: ${leg.from || '?'} -> ${leg.to || '?'} | ${legDep} - ${legArr}${trainSuffix}${depPlatform}${arrPlatform}`);
  });

  const seatLine = buildSeatLine(values, copy);
  if (seatLine) lines.push(seatLine);

  return lines.join('\n');
}

function escapeIcsText(value) {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r\n|\r|\n/g, '\\n');
}

function createUid() {
  if (window.crypto && typeof window.crypto.randomUUID === 'function') {
    return `${window.crypto.randomUUID()}@delta-bahn.webxdc`;
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 12)}@delta-bahn.webxdc`;
}

function toIcsLocal(isoLike) {
  if (!isoLike) return '';
  const date = new Date(isoLike);
  if (Number.isNaN(date.getTime())) return '';
  const yyyy = String(date.getFullYear());
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const hh = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  return `${yyyy}${mm}${dd}T${hh}${min}00`;
}

function durationMinutesToIso(minutes) {
  if (!minutes || minutes <= 0) return '';
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours > 0 && mins > 0) return `PT${hours}H${mins}M`;
  if (hours > 0) return `PT${hours}H`;
  return `PT${mins}M`;
}

function getDtStampUtc() {
  return new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
}

function buildIcsContent(parsed, values) {
  const summary = parsed.from && parsed.to ? `Reise von ${parsed.from} bis ${parsed.to}` : 'Bahnfahrt';
  const description = buildTripMessage(parsed, values).split('\n').slice(1).join('\n');
  const dtStart = toIcsLocal(parsed.departure);

  let duration = '';
  if (parsed.departure && parsed.arrival) {
    const dep = new Date(parsed.departure);
    const arr = new Date(parsed.arrival);
    if (!Number.isNaN(dep.getTime()) && !Number.isNaN(arr.getTime()) && arr > dep) {
      const minutes = Math.round((arr - dep) / 60000);
      duration = durationMinutesToIso(minutes);
    }
  }

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Delta Bahn//DE',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${escapeIcsText(createUid())}`,
    `DTSTAMP:${getDtStampUtc()}`,
    'SEQUENCE:0',
    `SUMMARY:${escapeIcsText(summary)}`
  ];

  if (description) lines.push(`DESCRIPTION:${escapeIcsText(description)}`);
  if (dtStart) lines.push(`DTSTART;TZID=Europe/Berlin:${dtStart}`);
  if (duration) lines.push(`DURATION:${duration}`);
  if (parsed.from || parsed.to) {
    lines.push(`LOCATION:${escapeIcsText(`${parsed.from || '?'} -> ${parsed.to || '?'}`)}`);
  }

  lines.push('END:VEVENT');
  lines.push('END:VCALENDAR');
  return `${lines.join('\r\n')}\r\n`;
}

function generateIcsFileName(from, to) {
  const clean = (value) =>
    (value || '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '');

  const fromClean = clean(from);
  const toClean = clean(to);

  if (fromClean && toClean) return `reiseplan_${fromClean}_${toClean}.ics`;
  if (fromClean || toClean) return `reiseplan_${fromClean || toClean}.ics`;
  return 'reiseplan.ics';
}

async function loadBahnImageBlob() {
  const response = await fetch(BAHN_IMAGE_PATH);
  if (!response.ok) {
    throw new Error('bahn-image-not-found');
  }
  return response.blob();
}

function showFeedback(message, state) {
  tripHint.dataset.feedback = 'true';
  tripHint.textContent = message;
  tripHint.classList.toggle('is-success', state === 'success');
  tripHint.classList.toggle('is-error', state === 'error');

  window.clearTimeout(feedbackTimer);
  feedbackTimer = window.setTimeout(() => {
    const copy = translations[languageSelect.value] || translations.de;
    tripHint.dataset.feedback = '';
    tripHint.textContent = copy.tripHint;
    tripHint.classList.remove('is-success', 'is-error');
  }, 2800);
}

function updatePreview() {
  const values = collectFormValues();
  const copy = translations[languageSelect.value] || translations.de;

  if (!parsedTrip) {
    outputHeading.textContent = copy.outputHeading;
    tripOutput.textContent = copy.previewPlaceholder;
    return;
  }

  outputHeading.textContent = parsedTrip.summary || copy.outputHeading;

  if (previewMode === 'delay' && Array.isArray(lastDelayResults) && lastDelayResults.length > 0) {
    tripOutput.textContent = buildDelayMessage(parsedTrip, values, lastDelayResults);
    return;
  }

  if (previewMode === 'liveDeparture') {
    tripOutput.textContent = buildLiveEventMessage('departure', parsedTrip, values, lastLiveDepartureResult);
    return;
  }

  if (previewMode === 'liveArrival') {
    tripOutput.textContent = buildLiveEventMessage('arrival', parsedTrip, values, lastLiveArrivalResult);
    return;
  }

  tripOutput.textContent = buildTripMessage(parsedTrip, values);
}

function setDetailsVisible(isVisible) {
  detailsSection.classList.toggle('hidden', !isVisible);
}

function updateIcsFileStatus() {
  const copy = translations[languageSelect.value] || translations.de;
  if (parsedTrip) {
    const statusText = parsedSourceFileName
      ? `${copy.icsFileLoadedHint}: ${parsedSourceFileName}`
      : copy.icsFileLoadedUnknown;
    icsFileStatus.textContent = statusText;
    icsFileStatus.classList.remove('hidden');
    return;
  }
  icsFileStatus.textContent = '';
  icsFileStatus.classList.add('hidden');
}

function persistTripData() {
  const values = collectFormValues();
  const payload = {
    sourceFileName: values.sourceFileName,
    coach: values.coach,
    seat: values.seat,
    parsedTrip,
    parsedSourceLink,
    parsedSourceFileName
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function clearTripState() {
  parsedTrip = null;
  parsedSourceLink = '';
  parsedSourceFileName = '';
  previewMode = 'connection';
  lastDelayResults = null;
  lastLiveDepartureResult = null;
  lastLiveArrivalResult = null;
  setDetailsVisible(false);
  updateIcsFileStatus();
}

async function applyIcsTextState(icsText, fileName, showError) {
  const copy = translations[languageSelect.value] || translations.de;
  const source = String(icsText || '').trim();

  if (!source) {
    clearTripState();
    updatePreview();
    return;
  }

  if (!isPlausibleIcsText(source)) {
    clearTripState();
    updatePreview();
    if (showError) showFeedback(copy.parseErrorHint, 'error');
    return;
  }

  try {
    parsedTrip = parseConnectionInput(source);
    await enrichParsedTripStopIds(parsedTrip);
    parsedSourceLink = source;
    parsedSourceFileName = fileName || '';
    previewMode = 'connection';
    lastDelayResults = null;
    lastLiveDepartureResult = null;
    lastLiveArrivalResult = null;
    setDetailsVisible(true);
    updateIcsFileStatus();
    persistTripData();
    updatePreview();
  } catch (_error) {
    clearTripState();
    updatePreview();
    if (showError) showFeedback(copy.parseErrorHint, 'error');
  }
}

function localizePage(language) {
  const copy = translations[language] || translations.de;
  document.documentElement.lang = language;
  document.title = copy.pageTitle;

  Object.entries(copy).forEach(([key, value]) => {
    const node = document.getElementById(key);
    if (node) node.textContent = value;
  });

  showConnectionButton.textContent = `🔍 ${copy.showConnectionButton}`;
  delayButton.textContent = `⏱️ ${copy.delayButton}`;
  liveDepartureButton.textContent = `🟢 ${copy.liveDepartureButton}`;
  liveArrivalButton.textContent = `🟢 ${copy.liveArrivalButton}`;
  deleteButton.textContent = `🗑️ ${copy.deleteButton}`;
  sendButton.textContent = `📤 ${copy.sendButton}`;
  updateIcsFileStatus();

  if (!tripHint.dataset.feedback) {
    tripHint.textContent = copy.tripHint;
    tripHint.classList.remove('is-success', 'is-error');
  }

  updatePreview();
}

function loadTripData() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return;

  try {
    const data = JSON.parse(stored);
    coachInput.value = data.coach || '';
    seatInput.value = data.seat || '';
    parsedTrip = data.parsedTrip || null;
    parsedSourceLink = data.parsedSourceLink || '';
    parsedSourceFileName = data.parsedSourceFileName || data.sourceFileName || '';
    if (parsedTrip) {
      setDetailsVisible(true);
      updateIcsFileStatus();
      enrichParsedTripStopIds(parsedTrip)
        .then(() => {
          persistTripData();
          updatePreview();
        })
        .catch(() => {
          // Keep existing data if ID enrichment fails.
        });
    }
  } catch (error) {
    console.error('Could not load stored data:', error);
  }
}

function deleteTrip() {
  const copy = translations[languageSelect.value] || translations.de;
  if (!window.confirm('Wirklich die gespeicherte Verbindung löschen?')) return;

  icsFileInput.value = '';
  coachInput.value = '';
  seatInput.value = '';
  clearTripState();
  localStorage.removeItem(STORAGE_KEY);

  showFeedback(copy.deletedHint, 'success');
  updatePreview();
}

async function sendMessageToChat() {
  const copy = translations[languageSelect.value] || translations.de;

  if (!parsedTrip) {
    showFeedback(copy.saveFirstHint, 'error');
    return;
  }

  const text = tripOutput.textContent;
  if (!text || text === copy.previewPlaceholder) {
    showFeedback(copy.saveFirstHint, 'error');
    return;
  }

  const values = collectFormValues();
  const icsContent = buildIcsContent(parsedTrip, values);
  const icsBlob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const fileName = generateIcsFileName(parsedTrip.from, parsedTrip.to);

  try {
    if (!window.webxdc || window.webxdc.__isFallback || typeof window.webxdc.sendToChat !== 'function') {
      await navigator.clipboard.writeText(text);
      showFeedback(copy.fallbackHint, 'success');
      return;
    }

    await window.webxdc.sendToChat({
      text: '',
      file: {
        name: fileName,
        blob: icsBlob
      }
    });

    try {
      const bahnImageBlob = await loadBahnImageBlob();
      await window.webxdc.sendToChat({
        text,
        file: {
          name: 'bahn.png',
          blob: bahnImageBlob
        }
      });
    } catch (imageError) {
      console.error('Could not send bahn.png:', imageError);
    }

    showFeedback(copy.preparedHint, 'success');
  } catch (error) {
    console.error(error);
    showFeedback(copy.errorHint, 'error');
  }
}

languageSelect.addEventListener('change', () => {
  localizePage(languageSelect.value);
});

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error('file-read-failed'));
    reader.readAsText(file, 'utf-8');
  });
}

icsFileInput.addEventListener('change', async () => {
  const copy = translations[languageSelect.value] || translations.de;
  const file = icsFileInput.files && icsFileInput.files[0];
  if (!file) {
    clearTripState();
    updatePreview();
    return;
  }

  if (!/\.ics$/i.test(file.name)) {
    showFeedback(copy.parseErrorHint, 'error');
    clearTripState();
    updatePreview();
    return;
  }

  try {
    const icsText = await readFileAsText(file);
    await applyIcsTextState(icsText, file.name, true);
  } catch (_error) {
    showFeedback(copy.parseErrorHint, 'error');
    clearTripState();
    updatePreview();
  }
});

showConnectionButton.addEventListener('click', (event) => {
  event.preventDefault();
  const copy = translations[languageSelect.value] || translations.de;
  if (!parsedTrip) {
    showFeedback(copy.saveFirstHint, 'error');
    return;
  }
  previewMode = 'connection';
  updatePreview();
});

delayButton.addEventListener('click', async (event) => {
  event.preventDefault();
  const copy = translations[languageSelect.value] || translations.de;
  if (!parsedTrip) {
    showFeedback(copy.saveFirstHint, 'error');
    return;
  }
  const values = collectFormValues();
  tripOutput.textContent = copy.delayLoadingHint;
  delayButton.disabled = true;
  try {
    await enrichParsedTripStopIds(parsedTrip);
    persistTripData();
    const delayResults = await fetchDelays(parsedTrip);
    lastDelayResults = delayResults;
    lastLiveDepartureResult = null;
    lastLiveArrivalResult = null;
    previewMode = 'delay';
    tripOutput.textContent = buildDelayMessage(parsedTrip, values, delayResults);
  } catch (_error) {
    showFeedback(copy.delayFetchErrorHint, 'error');
    previewMode = 'connection';
    updatePreview();
  } finally {
    delayButton.disabled = false;
  }
});

liveDepartureButton.addEventListener('click', async (event) => {
  event.preventDefault();
  const copy = translations[languageSelect.value] || translations.de;
  if (!parsedTrip || !parsedTrip.legs || parsedTrip.legs.length === 0) {
    showFeedback(copy.saveFirstHint, 'error');
    return;
  }

  const values = collectFormValues();
  tripOutput.textContent = copy.liveDepartureLoadingHint;
  liveDepartureButton.disabled = true;
  try {
    await enrichParsedTripStopIds(parsedTrip);
    persistTripData();
    const firstLeg = parsedTrip.legs[0];
    const result = await fetchLiveEvent(firstLeg.fromId, firstLeg.departure, 'departures');
    lastLiveDepartureResult = result;
    lastLiveArrivalResult = null;
    lastDelayResults = null;
    previewMode = 'liveDeparture';
    tripOutput.textContent = buildLiveEventMessage('departure', parsedTrip, values, result);
  } catch (_error) {
    showFeedback(copy.liveFetchErrorHint, 'error');
    previewMode = 'connection';
    updatePreview();
  } finally {
    liveDepartureButton.disabled = false;
  }
});

liveArrivalButton.addEventListener('click', async (event) => {
  event.preventDefault();
  const copy = translations[languageSelect.value] || translations.de;
  if (!parsedTrip || !parsedTrip.legs || parsedTrip.legs.length === 0) {
    showFeedback(copy.saveFirstHint, 'error');
    return;
  }

  const values = collectFormValues();
  tripOutput.textContent = copy.liveArrivalLoadingHint;
  liveArrivalButton.disabled = true;
  try {
    await enrichParsedTripStopIds(parsedTrip);
    persistTripData();
    const lastLeg = parsedTrip.legs[parsedTrip.legs.length - 1];
    const result = await fetchLiveEvent(lastLeg.toId, lastLeg.arrival, 'arrivals');
    lastLiveArrivalResult = result;
    lastLiveDepartureResult = null;
    lastDelayResults = null;
    previewMode = 'liveArrival';
    tripOutput.textContent = buildLiveEventMessage('arrival', parsedTrip, values, result);
  } catch (_error) {
    showFeedback(copy.liveFetchErrorHint, 'error');
    previewMode = 'connection';
    updatePreview();
  } finally {
    liveArrivalButton.disabled = false;
  }
});

deleteButton.addEventListener('click', (event) => {
  event.preventDefault();
  deleteTrip();
});

sendButton.addEventListener('click', (event) => {
  event.preventDefault();
  sendMessageToChat();
});

[coachInput, seatInput].forEach((field) => {
  field.addEventListener('input', () => {
    if (parsedTrip) {
      try {
        persistTripData();
      } catch (error) {
        console.error('Could not save data:', error);
      }
    }
    updatePreview();
  });
  field.addEventListener('change', () => {
    if (parsedTrip) {
      try {
        persistTripData();
      } catch (error) {
        console.error('Could not save data:', error);
      }
    }
    updatePreview();
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

loadTripData();
localizePage(languageSelect.value);
updatePreview();
