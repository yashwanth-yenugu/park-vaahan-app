import { useThemeColor } from "@/hooks/useThemeColor";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

export type ThemedButtonProps = TouchableOpacityProps & {
  lightColor?: string;
  darkColor?: string;
  lightTextColor?: string;
  darkTextColor?: string;
  title: string;
  variant?: "solid" | "outline";
};

export function ThemedButton({
  style,
  lightColor,
  darkColor,
  lightTextColor,
  darkTextColor,
  title,
  variant = "solid",
  disabled,
  ...otherProps
}: ThemedButtonProps) {
  const backgroundColor = useThemeColor(
    {
      light: lightColor || "#007AFF",
      dark: darkColor || "#0A84FF",
    },
    "tint" // Using tint for the primary button color
  );

  const textColor = useThemeColor(
    {
      light: lightTextColor || "#FFFFFF",
      dark: darkTextColor || "#FFFFFF",
    },
    "text"
  );

  const buttonStyles =
    variant === "outline"
      ? {
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: backgroundColor,
        }
      : {
          backgroundColor,
        };

  const textStyles =
    variant === "outline" ? { color: backgroundColor } : { color: textColor };

  return (
    <TouchableOpacity
      style={[
        {
          paddingHorizontal: 16,
          paddingVertical: 10,
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
          opacity: disabled ? 0.5 : 1,
        },
        buttonStyles,
        style,
      ]}
      disabled={disabled}
      {...otherProps}
    >
      <Text
        style={[
          {
            fontSize: 16,
            fontWeight: "600",
          },
          textStyles,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
