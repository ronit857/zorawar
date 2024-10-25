// import { View, Text } from "react-native";
// const Home = () =>{
//     return(
//         <View>
//             <Text>Home</Text>
//         </View>
//     )
// }
// export default Home




import React, { useState } from "react";
import { View, TextInput, Button, Text, Alert, Image } from "react-native";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // Simple form validation
    if (name === "" || email === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    Alert.alert("Form Submitted", `Name: ${name}\nEmail: ${email}`);
  };

  return (
    <View style={{ padding: 20 }}>
      <Image
        source={require("../images/image.webp")}
        style={{
          width: "100%",
          height: 300,
          borderRadius: 10, // Optional for rounded image
          marginBottom: 30,
        }}
      />
      <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 30 }}>
        Form
      </Text>
      <Text>Name:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
        }}
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text>Email:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
        }}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default Home;
