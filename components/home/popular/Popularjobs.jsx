import { useState } from "react";
import {
      View,
      Text,
      TouchableOpacity,
      FlatList,
      ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopulerjobCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {
      const router = useRouter();
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(false);
      return (
            <View style={styles.container}>
                  <View style={styles.header}>
                        <Text style={styles.headerTitle}>Popular Jobs</Text>
                        <TouchableOpacity>
                              <Text style={styles.headerBtn}>Show all</Text>
                        </TouchableOpacity>
                  </View>

                  <View style={styles.cardsContainer}>
                        {loading ? (
                              <ActivityIndicator
                                    size="large"
                                    color={COLORS.primary}
                              />
                        ) : error ? (
                              <Text>Something Went Wrong...</Text>
                        ) : (
                              <FlatList
                                    data={[1, 2, 3, 4, 5]}
                                    renderItem={(item) =>(
                                      <PopulerjobCard 
                                      item={item}
                                      key={item}
                                      />)}
                                    keyExtractor={ item => item?.job_id}
                                    contentContainerStyle={{columnGap: SIZES.medium}}
                                    horizontal
                              />
                        )}
                  </View>
            </View>
      );
};

export default Popularjobs;
