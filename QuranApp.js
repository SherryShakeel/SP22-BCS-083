import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, SafeAreaView, StatusBar } from "react-native";
import { surahNames, surahDetails } from "./QuranData";

const QuranApp = () => {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleSearch = (event) => {
    setSearch(event.nativeEvent.text);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const filteredSurahNames = surahNames.filter((name) =>
    name.english.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={darkMode ? styles.darkModeContainer : styles.lightModeContainer}>
      <StatusBar barStyle={darkMode ? "light-content" : "dark-content"} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search Surah"
        value={search}
        onChange={handleSearch}
      />
      <Button title="Toggle Dark Mode" onPress={handleDarkMode} />
      <ScrollView>
        {filteredSurahNames.map((name) => {
          const surahDetail = surahDetails.find(
            (detail) => detail.name.toLowerCase() === name.english.toLowerCase()
          );

          if (surahDetail) {
            return (
              <View key={surahDetail.id} style={styles.surahDetailContainer}>
                <Text style={styles.surahName}>{surahDetail.name}</Text>
                <Text style={styles.surahVerses}>{surahDetail.verses}</Text>
                <Text style={styles.surahChapters}>{surahDetail.chapters}</Text>
              </View>
            );
          }

          return null;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    lightModeContainer: {
      flex: 1,
      backgroundColor: "white",
      padding: 16,
    },
    darkModeContainer: {
      flex: 1,
      backgroundColor: "#333",
      padding: 16,
    },
    searchInput: {
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      marginBottom: 16,
      paddingHorizontal: 8,
      borderRadius: 4,
    },
    surahDetailContainer: {
      marginBottom: 16,
      padding: 8,
      backgroundColor: "#f2f2f2",
      borderRadius: 4,
    },
    surahName: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 4,
      color: "#333",
    },
    surahVerses: {
      fontSize: 16,
      marginBottom: 4,
      color: "#333",
    },
    surahChapters: {
      fontSize: 16,
      marginBottom: 4,
      color: "#333",
    },
  });
export default QuranApp;