import { useState } from "react";
import {
      View,
      Text,
      TextInput,
      TouchableOpacity,
      Image,
      FlatList,
} from "react-native";

import { router, useRouter } from "expo-router";
import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const jobTypes = ["Full-Time", "Part-Time", "Contractor"];

const Welcome = () => {
      const [searchTerm, setSearchTerm] = useState("");
      const [activeJobType, setActiveJobType] = useState("full-Time")
      return (
            <View>
                  <View style={styles.container}>
                        <Text style={styles.userName}>Hello Sasindu</Text>
                        <Text style={styles.welcomeMessage}>
                              Find your perfect job
                        </Text>
                  </View>
                  <View style={styles.searchContainer}>
                        <View style={styles.searchWrapper}>
                              <TextInput
                                    style={styles.searchInput}
                                    value={searchTerm}
                                    onChangeText={(text) => setSearchTerm(text)}
                                    placeholder="What are you looking for?"
                              />
                        </View>
                        <TouchableOpacity
                              style={styles.searchBtn}
                              onPress={() => {}}
                        >
                              <Image
                                    source={icons.search}
                                    style={styles.searchBtnImage}
                              />
                        </TouchableOpacity>
                  </View>
                  <View style={styles.tabsContainer}>
                        <FlatList
                              data={jobTypes}
                              renderItem={({ item }) => (
                                    <TouchableOpacity
                                          style={styles.tab(activeJobType, item)}
                                          key={item}
                                          onPress={() => {
                                                setActiveJobType(item)
                                                router.push(`/search/${item}`)
                                          }}
                                    >
                                          <Text style={styles.tabText(activeJobType, item)>{item}}>
                                                {item}
                                          </Text>
                                    </TouchableOpacity>
                              )}
                              keyExtractor={(item) => item}
                              horizontal
                              contentContainerStyle={{columnGap: SIZES.small}}
                              showsHorizontalScrollIndicator={false}
                        />
                  </View>
            </View>
      );
};

export default Welcome;
