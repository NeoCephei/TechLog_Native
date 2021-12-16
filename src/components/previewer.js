import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import testStyle from "../styles/test.styles"

const FlexDirectionBasics = () => {
  const [flexDirection, setflexDirection] = useState("column");

  const PreviewLayout = ({label, children, values, selectedValue, setSelectedValue}) => (
    <View style={{ padding: 10, flex: 1 }}>
      <Text style={testStyle.label}>{label}</Text>
      <View style={testStyle.row}>
        {values.map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => setSelectedValue(value)}
            style={[
              testStyle.button,
              selectedValue === value && testStyle.selected,
            ]}
          >
            <Text
              style={[
                testStyle.buttonLabel,
                selectedValue === value && testStyle.selectedLabel,
              ]}
            >
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={[testStyle.container, { [label]: selectedValue }]}>
        {children}
      </View>
    </View>
  );

  return (
    <PreviewLayout
      label="flexDirection"
      values={["column", "row", "row-reverse", "column-reverse"]}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}
    >
      <View
        style={[testStyle.box, { backgroundColor: "powderblue" }]}
      />
      <View
        style={[testStyle.box, { backgroundColor: "skyblue" }]}
      />
      <View
        style={[testStyle.box, { backgroundColor: "steelblue" }]}
      />
    </PreviewLayout>
  );
};

export default FlexDirectionBasics;