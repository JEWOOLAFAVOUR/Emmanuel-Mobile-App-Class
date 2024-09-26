import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";

const _layout = () => {
  const studentData = [
    {
      id: 1,
      student: "Basit",
      level: 400,
      image:
        "https://img.freepik.com/free-photo/african-student-red-attire-posing-with-interested-smile-good-humoured-black-man-glasses-holding-books-expressing-happiness_197531-20293.jpg?t=st=1727361292~exp=1727364892~hmac=96dffc43966990d2dd0e7d5da4b7888fcb70010fc2ae8867b510a1c299c226e2&w=360",
    },
    {
      id: 2,
      student: "Ade",
      level: 400,
      image:
        "https://img.freepik.com/free-photo/portrait-male-student-with-books_23-2148882427.jpg?t=st=1727361338~exp=1727364938~hmac=10564bc00518e303b1fee789189084443076b487169c17b038802ca315c5baf3&w=360",
    },
    {
      id: 3,
      student: "LUKU",
      level: 400,
      image:
        "https://img.freepik.com/free-photo/full-length-image-smiling-african-woman-leather-jacket_171337-14041.jpg?t=st=1727361373~exp=1727364973~hmac=ddf0ae53ca0162287acedce324fe57b96baa73af8e770a00d437a3db49eb4a20&w=360",
    },
  ];

  return (
    <View style={styles.page}>
      <Text style={{ fontSize: 25, color: "black", marginBottom: 20 }}>
        Advance FlatList Class
      </Text>

      <FlatList
        data={studentData}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Image
                source={{
                  uri: item.image,
                }}
                style={{ height: 70, width: 70, borderRadius: 100 }}
              />
              <Text style={{ fontSize: 15, color: "black", marginTop: 10 }}>
                {item.student}
              </Text>
              <Text style={{ fontSize: 15, color: "black", marginTop: 10 }}>
                {item.level}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default _layout;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  container: {
    height: 150,
    width: "45%",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
