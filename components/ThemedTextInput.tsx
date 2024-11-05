import { useThemeColor } from "@/hooks/useThemeColor";
import { TextInput, TextInputProps } from "react-native";

export type ThemedTextInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
  lightPlaceholderColor?: string;
  darkPlaceholderColor?: string;
};

export function ThemedTextInput({
  style,
  lightColor,
  darkColor,
  lightPlaceholderColor,
  darkPlaceholderColor,
  placeholderTextColor,
  ...otherProps
}: ThemedTextInputProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  const color = useThemeColor({ light: "#000", dark: "#fff" }, "text");
  const defaultPlaceholderColor = useThemeColor(
    {
      light: lightPlaceholderColor || "#999999",
      dark: darkPlaceholderColor || "#666666",
    },
    "tabIconDefault" // Using tabIconDefault for placeholder as it's typically a muted color
  );

  return (
    <TextInput
      style={[
        {
          backgroundColor,
          color,
          paddingHorizontal: 12,
          paddingVertical: 8,
          borderRadius: 6,
          borderWidth: 1,
          borderColor: useThemeColor(
            { light: "#e2e2e2", dark: "#404040" },
            "tabIconDefault"
          ),
        },
        style,
      ]}
      placeholderTextColor={placeholderTextColor || defaultPlaceholderColor}
      {...otherProps}
    />
  );
}
