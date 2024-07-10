import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "@/constants";

const TabButton = ({ tab, activeTab, onHandleSearchType }) => (
  <TouchableOpacity
    style={styles.btn(tab, activeTab)}
    onPress={() => onHandleSearchType(tab)}
  >
    <Text style={styles.btnText(tab, activeTab)}>{tab}</Text>
  </TouchableOpacity>
);

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        renderItem={({ item }) => (
          <TabButton
            tab={item}
            activeTab={activeTab}
            onHandleSearchType={setActiveTab}
          />
        )}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default Tabs;