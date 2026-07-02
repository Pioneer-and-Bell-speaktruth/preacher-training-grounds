import React, { createContext, useState, useEffect } from 'react';

export const SermonContext = createContext();

/**
 * Generic LocalStorage helper
 */
function loadItem(key, fallback) {
  try {
    const stored = window.localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

function saveItem(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore write errors
  }
}

export default function SermonContextProvider({ children }) {
  // -------------------------
  // SERMONS
  // -------------------------
  const [sermons, setSermons] = useState(() => loadItem('sermons', []));

  const addSermon = (sermon) => {
    const updated = [...sermons, sermon, { ...sermon, tags: sermon.tags || [] }];
    setSermons(updated);
    saveItem('sermons', updated);
  };
  
  const updateSermon = (index, updatedSermon) => {
    const updatedList = [...sermons];
    updatedList[index] = updatedSermon;
    setSermons(updatedList);
    saveItem('sermons', updatedList);
  };
  const deleteSermon = (index) => {
    const updated = sermons.filter((_, i) => i !== index);
    setSermons(updated);
    saveItem('sermons', updated);
  };

  // -------------------------
  // SERIES
  // -------------------------
  const [series, setSeries] = useState(() => loadItem('series', []));

  const addSeries = (newSeries) => {
    const updated = [...series, newSeries];
    setSeries(updated);
    saveItem('series', updated);
  };

  const updateSeries = (index, updatedSeries) => {
    const updated = [...series];
    updated[index] = updatedSeries;
    setSeries(updated);
    saveItem('series', updated);
  };

  const deleteSeries = (index) => {
    const updated = series.filter((_, i) => i !== index);
    setSeries(updated);
    saveItem('series', updated);
  };
  
  const updateLesson = (seriesIndex, lessonIndex, updatedLesson) => {
    const updatedSeriesList = [...series];
    const updatedLessons = [...updatedSeriesList[seriesIndex].lessons];

    updatedLessons[lessonIndex] = updatedLesson;
    updatedSeriesList[seriesIndex].lessons = updatedLessons;

    setSeries(updatedSeriesList);
    saveItem('series', updatedSeriesList);
  };

  const deleteLesson = (seriesIndex, lessonIndex) => {
    const updatedSeriesList = [...series];
    const updatedLessons = updatedSeriesList[seriesIndex].lessons.filter(
      (_, i) => i !== lessonIndex
    );

    updatedSeriesList[seriesIndex].lessons = updatedLessons;

    setSeries(updatedSeriesList);
    saveItem('series', updatedSeriesList);
  };

  // -------------------------
  // THEME SETTINGS
  // -------------------------
  const [darkMode, setDarkMode] = useState(() => loadItem('darkMode', false));
  const [fontSize, setFontSize] = useState(() => loadItem('fontSize', 16));

  const toggleDarkMode = () => {
    const newValue = !darkMode;
    setDarkMode(newValue);
    saveItem('darkMode', newValue);
  };

  const changeFontSize = (size) => {
    setFontSize(size);
    saveItem('fontSize', size);
  };

  // -------------------------
  // APPEARANCE SETTINGS
  // -------------------------
  const [accentColor, setAccentColor] = useState(() =>
    loadItem('accentColor', '#2c3e50')
  );
  const [fontFamily, setFontFamily] = useState(() =>
    loadItem('fontFamily', 'default')
  );
  const [density, setDensity] = useState(() =>
    loadItem('density', 'comfortable')
  );
  const [highContrast, setHighContrast] = useState(() =>
    loadItem('highContrast', false)
  );
  const [useSystemTheme, setUseSystemTheme] = useState(() =>
    loadItem('useSystemTheme', false)
  );
  const [buttonShape, setButtonShape] = useState(() =>
    loadItem('buttonShape', 'rounded')
  );

// -------------------------
// HOME ORDER
// -------------------------
const [homeOrder, setHomeOrder] = useState([]);

// Load and validate homeOrder on startup
useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("homeOrder"));

  // Default order (must match HomeScreen.js)
  const defaultTitles = [
    'Scripture Encouragement',
    'Daily Bible Study',
    'Training Modules',
    'Sermon Builder',
    'Series Planner',
    'Sermon Types',
    'Wisdom Library',
    'Journal & Prayer',
    'Settings',
    'About',
  ];

  if (!saved) {
    // No saved order → use default
    localStorage.setItem("homeOrder", JSON.stringify(defaultTitles));
    setHomeOrder(defaultTitles);
    return;
  }

  // Validate saved order
  const savedSet = new Set(saved);
  const isValid =
    saved.length === defaultTitles.length &&
    defaultTitles.every(title => savedSet.has(title));

  if (!isValid) {
    // Saved order is outdated, empty, or missing items → reset
    localStorage.setItem("homeOrder", JSON.stringify(defaultTitles));
    setHomeOrder(defaultTitles);
  } else {
    setHomeOrder(saved);
  }
}, []);

// Save only when user intentionally changes order
const saveHomeOrder = (order) => {
  setHomeOrder(order);
  saveItem('homeOrder', order);
};

  // -------------------------
  // INITIAL LOAD (sync state with LocalStorage)
  // -------------------------
  useEffect(() => {
    saveItem('sermons', sermons);
  }, [sermons]);

  useEffect(() => {
    saveItem('series', series);
  }, [series]);

  useEffect(() => {
    saveItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    saveItem('fontSize', fontSize);
  }, [fontSize]);

  useEffect(() => {
    saveItem('accentColor', accentColor);
  }, [accentColor]);

  useEffect(() => {
    saveItem('fontFamily', fontFamily);
  }, [fontFamily]);

  useEffect(() => {
    saveItem('density', density);
  }, [density]);

  useEffect(() => {
    saveItem('highContrast', highContrast);
  }, [highContrast]);

  useEffect(() => {
    saveItem('useSystemTheme', useSystemTheme);
  }, [useSystemTheme]);

  useEffect(() => {
    saveItem('buttonShape', buttonShape);
  }, [buttonShape]);

  useEffect(() => {
    saveItem('homeOrder', homeOrder);
  }, [homeOrder]);

  return (
    <SermonContext.Provider
      value={{
        sermons,
        addSermon,
        updateSermon,
        deleteSermon,

        series,
        addSeries,
        updateSeries,
        deleteSeries,
        updateLesson,
        deleteLesson,

        darkMode,
        toggleDarkMode,

        fontSize,
        changeFontSize,

        accentColor,
        setAccentColor,
        fontFamily,
        setFontFamily,
        density,
        setDensity,
        highContrast,
        setHighContrast,
        useSystemTheme,
        setUseSystemTheme,
        buttonShape,
        setButtonShape,
        homeOrder,
        saveHomeOrder,
      }}
    >
      {children}
    </SermonContext.Provider>
  );
}
