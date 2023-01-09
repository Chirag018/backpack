import type { SvgProps } from "react-native-svg";
import Svg, { Defs, LinearGradient, Path, Rect, Stop } from "react-native-svg";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@hooks";

export const CheckBadge = (props: SvgProps) => (
  // <div
  //   style={{
  //     display: "inline-block",
  //     position: "relative",
  //     top: "4px",
  //     left: "5px",
  //   }}
  // >
  // </div>
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9c0 4.14 3.36 7.5 7.5 7.5 4.14 0 7.5-3.36 7.5-7.5 0-4.14-3.36-7.5-7.5-7.5ZM6.968 12.217 4.274 9.525a.747.747 0 1 1 1.057-1.058l2.168 2.16 5.16-5.16a.747.747 0 1 1 1.057 1.058l-5.692 5.692a.747.747 0 0 1-1.058 0Z"
      fill="#42C337"
    />
  </Svg>
);

export const RedBackpack = (props: SvgProps) => (
  <Svg viewBox="0 0 55 80" width={55} height={80} fill="none" {...props}>
    <Path
      d="M32.71 6.29c2.908 0 5.635.39 8.16 1.113C38.398 1.641 33.266 0 27.553 0c-5.724 0-10.866 1.647-13.333 7.437 2.507-.748 5.222-1.147 8.12-1.147H32.71Zm-11.036 5.785C7.867 12.075 0 22.937 0 36.336V50.1c0 1.34 1.12 2.4 2.5 2.4h50c1.38 0 2.5-1.06 2.5-2.4V36.336c0-13.399-9.148-24.26-22.955-24.26H21.674Zm5.806 24.38a8.75 8.75 0 1 0 0-17.5 8.75 8.75 0 0 0 0 17.5ZM0 60.59c0-1.34 1.12-2.426 2.5-2.426h50c1.38 0 2.5 1.086 2.5 2.426v14.557c0 2.68-2.239 4.852-5 4.852H5c-2.761 0-5-2.173-5-4.852V60.59Z"
      fill="#E33E3F"
    />
  </Svg>
);

export const EthereumIcon = (props: SvgProps) => (
  <Svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}>
    <Path
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
      fill="#627EEA"
    />
    <Path
      d="M20.623 5v11.087l9.37 4.188L20.624 5ZM20.622 5 11.25 20.275l9.372-4.188V5ZM20.623 27.46v7.534L30 22.02l-9.377 5.44ZM20.622 34.994v-7.535L11.25 22.02l9.372 12.974ZM20.623 25.716l9.37-5.44-9.37-4.186v9.626ZM11.25 20.275l9.372 5.441V16.09l-9.372 4.185Z"
      fill="#fff"
    />
  </Svg>
);

export const SolanaIcon = (props: SvgProps) => (
  <Svg
    width={41}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 41 40"
    {...props}>
    <Path
      d="M20.5 40c11.046 0 20-8.954 20-20s-8.954-20-20-20S.5 8.954.5 20s8.954 20 20 20Z"
      fill="#000"
    />
    <Path
      d="M40 20c0 10.77-8.73 19.5-19.5 19.5S1 30.77 1 20 9.73.5 20.5.5 40 9.23 40 20Z"
      stroke="#fff"
    />
    <Path
      d="M12.842 25.513a.804.804 0 0 1 .594-.263l18.328.015a.403.403 0 0 1 .297.674l-3.903 4.298a.805.805 0 0 1-.595.263l-18.327-.015a.403.403 0 0 1-.297-.674l3.903-4.298Zm19.219-3.578a.403.403 0 0 1-.297.675l-18.328.015a.803.803 0 0 1-.594-.263l-3.903-4.3a.403.403 0 0 1 .297-.675l18.328-.015a.804.804 0 0 1 .594.264l3.903 4.3ZM12.84 9.764a.804.804 0 0 1 .595-.263l18.328.015a.403.403 0 0 1 .297.675l-3.903 4.297a.805.805 0 0 1-.595.263l-18.327-.015a.403.403 0 0 1-.297-.675l3.903-4.297Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={9.542}
        y1={30.958}
        x2={31.458}
        y2={9.042}
        gradientUnits="userSpaceOnUse">
        <Stop />
        <Stop offset={0.2} />
        <Stop offset={1} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export const AvalancheIcon = (props: SvgProps) => (
  <Svg
    width={40}
    height={40}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}>
    <Path d="M32.335 6.862H7.638v22.447h24.697V6.862Z" fill="#fff" />
    <Path
      d="M39.987 20c0 11.031-8.949 19.973-19.987 19.973C8.962 39.973.013 31.031.013 20 .013 8.969 8.962.027 20 .027 31.038.027 39.987 8.969 39.987 20Zm-25.65 7.948h-3.88c-.814 0-1.217 0-1.463-.157a.985.985 0 0 1-.446-.77c-.015-.29.186-.643.589-1.35l9.577-16.87c.408-.716.614-1.074.874-1.207a.989.989 0 0 1 .894 0c.26.133.466.491.874 1.207l1.969 3.435.01.018c.44.768.663 1.158.76 1.567.108.447.108.918 0 1.364-.098.412-.319.805-.765 1.585l-5.031 8.887-.013.023c-.443.775-.668 1.167-.979 1.464a2.93 2.93 0 0 1-1.193.692c-.408.112-.864.112-1.778.112Zm9.795 0h5.558c.82 0 1.232 0 1.478-.161a.982.982 0 0 0 .447-.776c.014-.28-.183-.62-.569-1.285l-.04-.069-2.784-4.76-.032-.053c-.391-.661-.589-.995-.842-1.124a.978.978 0 0 0-.889 0c-.255.133-.461.48-.869 1.183l-2.774 4.759-.01.016c-.406.7-.609 1.051-.594 1.338.02.314.182.604.447.776.24.156.653.156 1.473.156Z"
      fill="#E84142"
    />
  </Svg>
);

export const PolygonIcon = (props: SvgProps) => (
  <Svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}>
    <Path
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
      fill="#8247E5"
    />
    <Path
      d="M26.496 15.799c-.464-.26-1.06-.26-1.59 0l-3.713 2.15-2.519 1.367-3.646 2.15c-.464.26-1.06.26-1.59 0l-2.85-1.694a1.583 1.583 0 0 1-.796-1.368v-3.256c0-.521.265-1.043.795-1.368l2.85-1.628c.465-.26 1.061-.26 1.591 0l2.85 1.693c.465.26.796.781.796 1.368v2.149l2.52-1.433v-2.214c0-.521-.266-1.042-.796-1.368l-5.303-3.061c-.464-.26-1.06-.26-1.591 0l-5.436 3.126a1.43 1.43 0 0 0-.795 1.303v6.122c0 .52.265 1.042.795 1.368l5.37 3.06c.463.261 1.06.261 1.59 0l3.646-2.084 2.52-1.432 3.645-2.084c.464-.261 1.06-.261 1.59 0l2.851 1.628c.464.26.796.781.796 1.367v3.257c0 .52-.265 1.042-.796 1.368l-2.784 1.628c-.464.26-1.06.26-1.59 0l-2.851-1.628a1.583 1.583 0 0 1-.796-1.368v-2.084l-2.518 1.433v2.149c0 .52.265 1.042.795 1.368l5.37 3.06c.463.261 1.06.261 1.59 0l5.37-3.06c.464-.26.795-.782.795-1.368v-6.187c0-.521-.265-1.042-.796-1.368l-5.369-3.061Z"
      fill="#fff"
    />
  </Svg>
);

export const BscIcon = (props: SvgProps) => (
  <Svg
    width={41}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 41 40"
    {...props}>
    <Path
      d="M20.5 0c11.047 0 20 8.954 20 20 0 11.047-8.953 20-20 20-11.046 0-20-8.953-20-20 0-11.046 8.954-20 20-20Z"
      fill="#F0B90B"
    />
    <Path
      d="m11.492 20 .014 5.289L16 27.933v3.096L8.877 26.85v-8.397L11.492 20Zm0-5.288v3.081l-2.617-1.548v-3.081l2.617-1.548 2.63 1.548-2.63 1.548Zm6.385-1.548 2.617-1.548 2.63 1.548-2.63 1.548-2.617-1.548Z"
      fill="#fff"
    />
    <Path
      d="M13.383 24.192v-3.096L16 22.644v3.082l-2.617-1.534Zm4.494 4.85 2.617 1.548 2.63-1.548v3.081l-2.63 1.549-2.617-1.548v-3.082Zm9-15.878 2.617-1.548 2.63 1.548v3.081l-2.63 1.548v-3.081l-2.617-1.548Zm2.617 12.125L29.508 20l2.617-1.548v8.397l-7.123 4.178v-3.096l4.492-2.642Z"
      fill="#fff"
    />
    <Path d="M27.617 24.192 25 25.726v-3.082l2.617-1.548v3.096Z" fill="#fff" />
    <Path
      d="m27.617 15.808.014 3.096-4.506 2.644v5.302l-2.617 1.533-2.617-1.534v-5.3l-4.506-2.645v-3.096l2.628-1.548 4.479 2.657 4.506-2.657 2.63 1.548h-.011ZM13.383 10.52l7.11-4.192 7.124 4.192L25 12.069l-4.506-2.657L16 12.069l-2.617-1.548Z"
      fill="#fff"
    />
  </Svg>
);

export const CosmosIcon = (props: SvgProps) => (
  <Svg
    width={45}
    height={44}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 45 44"
    {...props}>
    <Path
      d="M22.5.042C34.627.042 44.458 9.873 44.458 22c0 12.127-9.831 21.958-21.958 21.958C10.373 43.958.542 34.127.542 22 .542 9.873 10.373.042 22.5.042Z"
      fill="#171717"
    />
    <Path
      d="M22.458 9.332c6.996 0 12.668 5.672 12.668 12.668 0 6.996-5.672 12.668-12.668 12.668C15.462 34.668 9.79 28.996 9.79 22c0-6.996 5.671-12.668 12.668-12.668Z"
      fill="#000"
    />
    <Path
      opacity={0.67}
      d="M22.845 3.798c-.174-.16-.264-.163-.28-.163-.015 0-.105.003-.28.163-.178.165-.392.45-.623.888-.46.875-.9 2.199-1.28 3.907-.428 1.92-.765 4.267-.978 6.895a80.15 80.15 0 0 1 3.161 1.619 80.18 80.18 0 0 1 3.162-1.62c-.213-2.627-.55-4.974-.978-6.894-.38-1.708-.82-3.032-1.28-3.907-.231-.439-.445-.723-.624-.888ZM21.665 17.6c-.79-.42-1.568-.816-2.33-1.19a78.83 78.83 0 0 0-.134 2.612 87.88 87.88 0 0 1 2.464-1.422Zm-3.09-2.506c.617-7.205 2.17-12.318 3.99-12.318 1.82 0 3.374 5.112 3.99 12.317 6.553-3.068 11.76-4.279 12.67-2.704.91 1.575-2.744 5.476-8.679 9.612 5.935 4.137 9.589 8.038 8.679 9.613-.91 1.574-6.117.363-12.67-2.705-.616 7.205-2.17 12.317-3.99 12.317-1.82 0-3.373-5.112-3.99-12.318-6.552 3.069-11.76 4.28-12.67 2.706-.91-1.575 2.744-5.476 8.679-9.613-5.935-4.136-9.588-8.037-8.679-9.612.91-1.575 6.118-.364 12.67 2.705ZM15.34 21.48c-2.17-1.499-4.036-2.964-5.487-4.294-1.29-1.183-2.216-2.226-2.745-3.062-.265-.419-.404-.746-.457-.984-.052-.23-.01-.31-.002-.322.007-.013.055-.09.281-.16.232-.073.586-.116 1.081-.096.99.04 2.357.32 4.027.845 1.877.59 4.08 1.472 6.463 2.602a80.015 80.015 0 0 0-.177 3.544 79.912 79.912 0 0 0-2.984 1.927Zm0 1.04c-2.17 1.499-4.036 2.965-5.487 4.294-1.29 1.183-2.216 2.226-2.745 3.062-.265.42-.404.746-.457.984-.052.23-.01.31-.002.323.007.012.054.089.281.16.232.072.586.115 1.081.096.99-.04 2.357-.32 4.027-.846 1.877-.59 4.08-1.472 6.463-2.601a80.012 80.012 0 0 1-.177-3.545 79.913 79.913 0 0 1-2.984-1.926Zm2.961.902A78.962 78.962 0 0 1 16.106 22a78.962 78.962 0 0 1 2.196-1.422 87.858 87.858 0 0 0 0 2.844Zm.87.536a86.303 86.303 0 0 1 0-3.916 86.281 86.281 0 0 1 3.393-1.957 86.449 86.449 0 0 1 3.394 1.958 86.267 86.267 0 0 1 0 3.914 86.342 86.342 0 0 1-3.394 1.958 85.934 85.934 0 0 1-3.393-1.957Zm.03 1.021c.03.893.076 1.765.133 2.611.762-.373 1.54-.77 2.33-1.19a87.014 87.014 0 0 1-2.463-1.42Zm3.363 1.915a80.15 80.15 0 0 1-3.16 1.619c.212 2.627.55 4.974.976 6.895.38 1.707.82 3.03 1.281 3.906.23.439.445.723.624.888.174.16.264.164.28.164.015 0 .105-.003.279-.164.179-.165.393-.449.624-.888.46-.875.9-2.199 1.28-3.906.427-1.92.765-4.268.978-6.895a80.04 80.04 0 0 1-3.162-1.62Zm4.063 1.098c2.384 1.13 4.586 2.01 6.464 2.601 1.67.526 3.037.806 4.026.846.495.02.849-.024 1.081-.096.227-.071.274-.148.282-.16.007-.013.05-.092-.003-.323-.053-.238-.192-.565-.457-.984-.529-.836-1.455-1.88-2.745-3.062-1.45-1.33-3.316-2.795-5.487-4.293a80.05 80.05 0 0 1-2.983 1.926 80.04 80.04 0 0 1-.178 3.545Zm3.161-6.512c2.17-1.499 4.036-2.964 5.487-4.294 1.29-1.183 2.216-2.226 2.745-3.062.265-.419.404-.746.457-.984.052-.23.01-.31.003-.322-.008-.013-.055-.09-.282-.16-.232-.073-.586-.116-1.081-.096-.99.04-2.357.32-4.026.845-1.878.59-4.08 1.472-6.463 2.601a80.04 80.04 0 0 1 .177 3.546 80.05 80.05 0 0 1 2.983 1.926Zm-2.96-.901c.758.473 1.491.948 2.195 1.421a78.55 78.55 0 0 1-2.195 1.422 86.662 86.662 0 0 0 0-2.843Zm-.9-1.558a78.876 78.876 0 0 0-.134-2.611c-.762.373-1.54.77-2.33 1.19a87.014 87.014 0 0 1 2.464 1.421Zm-.134 8.57a79.07 79.07 0 0 1-2.33-1.19 87.014 87.014 0 0 0 2.464-1.422 78.876 78.876 0 0 1-.134 2.612Z"
      fill="#fff"
    />
    <Path
      d="M10.277 16.616a1.352 1.352 0 1 1 0 2.704 1.352 1.352 0 0 1 0-2.704ZM31.764 11.984a1.353 1.353 0 1 1 0 2.705 1.353 1.353 0 0 1 0-2.705ZM19.841 33.214a1.352 1.352 0 1 1 0 2.704 1.352 1.352 0 0 1 0-2.704ZM22.49 19.7a2.29 2.29 0 1 1 0 4.58 2.29 2.29 0 0 1 0-4.58Z"
      fill="#fff"
    />
  </Svg>
);

type IconProps = {
  color?: string;
  size?: number;
};

export function TwitterIcon({
  color = "#1D9BF0",
  size = 24,
}: IconProps): JSX.Element {
  return <MaterialCommunityIcons name="twitter" color={color} size={size} />;
}

export function DiscordIcon({
  color = "#5865F2",
  size = 24,
}: IconProps): JSX.Element {
  return <MaterialCommunityIcons name="discord" color={color} size={size} />;
}

export function WidgetIcon({
  color = "#E33E3F",
  size = 24,
}: IconProps): JSX.Element {
  return <MaterialCommunityIcons name="widgets" color={color} size={size} />;
}

export function MenuIcon({ color, size = 24 }: IconProps): JSX.Element {
  const theme = useTheme();
  return (
    <MaterialIcons
      name="menu"
      color={color ? color : theme.custom.colors.fontColor}
      size={size}
    />
  );
}

export function ContentCopyIcon({ color, size = 24 }: IconProps): JSX.Element {
  const theme = useTheme();
  return (
    <MaterialIcons
      name="content-copy"
      color={color ? color : theme.custom.colors.fontColor}
      size={size}
    />
  );
}

export const CrossIcon = (props: SvgProps) => (
  <Svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    {...props}>
    <Rect width={48} height={48} rx={24} fill="#E95050" />
    <Path
      d="m33.333 16.547-1.88-1.88L24 22.12l-7.453-7.453-1.88 1.88L22.12 24l-7.453 7.454 1.88 1.88L24 25.88l7.453 7.454 1.88-1.88L25.88 24l7.453-7.453Z"
      fill="#fff"
    />
  </Svg>
);

export function CheckIcon({ fill = "#35A63A" }: { fill?: string }) {
  return (
    <Svg width={48} height={48} fill="none" viewBox="0 0 48 48 ">
      <Rect width={48} height={48} rx={24} fill={fill} />
      <Path
        d="M20 29.56 14.44 24l-1.893 1.88L20 33.333l16-16-1.88-1.88L20 29.56Z"
        fill="#fff"
      />
    </Svg>
  );
}

export function IconCheckmark({
  size = 32,
  color,
}: {
  size?: number;
  color?: string;
}): JSX.Element {
  return <MaterialIcons name="check" size={size} color={color} />;
}

export function QuestionIcon({
  fill = "#A1A1AA",
  ...props
}: {
  fill?: string;
  props?: SvgProps;
}) {
  return (
    <Svg
      width={56}
      height={56}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 56"
      {...props}>
      <Path
        d="M28.335 5C15.468 5 5 15.468 5 28.335S15.468 51.67 28.335 51.67 51.67 41.202 51.67 28.335 41.202 5 28.335 5Zm-.972 36.947a2.918 2.918 0 0 1 0-5.834 2.918 2.918 0 0 1 0 5.834Zm8.383-17.254c-.601.962-1.742 2.044-3.427 3.245-2.724 2.015-2.65 2.462-2.65 4.286h-4.778c0-1.425-.031-2.52.74-3.852.491-.854 1.393-1.762 2.704-2.723 1.573-1.123 3.102-2.207 3.102-4.093 0-1.767-1.513-2.398-3.28-2.398-1.803 0-3.859.59-6.167 1.768l-1.966-3.947c4.194-2.351 10.814-3.415 14.432-.469 2.657 2.164 2.672 5.97 1.29 8.183Z"
        fill={fill}
      />
    </Svg>
  );
}

export function WarningIcon({
  fill = "#A1A1AA",
  ...props
}: {
  fill?: string;
  props?: SvgProps;
}) {
  return (
    <Svg
      width={56}
      height={56}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 56"
      style={{ alignSelf: "center" }}
      {...props}>
      <Path
        d="M10.43 47.842h35.14c3.593 0 5.833-3.897 4.037-7l-17.57-30.357c-1.797-3.103-6.277-3.103-8.074 0L6.393 40.842c-1.796 3.103.444 7 4.037 7ZM28 31.51a2.34 2.34 0 0 1-2.333-2.334V24.51A2.34 2.34 0 0 1 28 22.175a2.34 2.34 0 0 1 2.333 2.334v4.666A2.34 2.34 0 0 1 28 31.51Zm2.333 9.333h-4.666v-4.667h4.666v4.667Z"
        fill={fill}
      />
    </Svg>
  );
}

export function EyeIcon({
  fill = "#A1A1AA",
  ...props
}: {
  fill?: string;
  props?: SvgProps;
}) {
  return (
    <Svg
      width={40}
      height={40}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      style={{ alignSelf: "center" }}
      {...props}>
      <Path
        d="M20 10.783c4.6 0 8.334 3.734 8.334 8.334 0 .85-.167 1.666-.4 2.433l5.1 5.1a19.67 19.67 0 0 0 5.3-7.55C35.45 11.8 28.334 6.617 20 6.617c-2.116 0-4.15.333-6.066.95l3.616 3.616c.784-.233 1.6-.4 2.45-.4ZM4.517 5.217c-.65.65-.65 1.7 0 2.35L7.8 10.85C5.1 13 2.95 15.833 1.667 19.117c2.883 7.316 10 12.5 18.333 12.5 2.534 0 4.95-.5 7.184-1.367l4.533 4.533c.65.65 1.7.65 2.35 0 .65-.65.65-1.7 0-2.35L6.884 5.217a1.68 1.68 0 0 0-2.367 0ZM20 27.45a8.336 8.336 0 0 1-8.333-8.333c0-1.284.3-2.5.817-3.567l2.616 2.617c-.05.3-.1.616-.1.95 0 2.766 2.234 5 5 5 .334 0 .634-.05.95-.117l2.617 2.617A8.02 8.02 0 0 1 20 27.45Zm4.95-8.883a4.948 4.948 0 0 0-4.4-4.4l4.4 4.4Z"
        fill={fill}
      />
    </Svg>
  );
}

export function ExpandCollapseIcon({
  isExpanded,
  size = 24,
  color,
}: {
  isExpanded: boolean;
  size?: number;
  color?: string;
}): JSX.Element {
  const theme = useTheme();
  return (
    <MaterialIcons
      name={isExpanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
      size={size}
      color={color ? color : theme.custom.colors.fontColor}
    />
  );
}

export function IconCloseModal({
  tintColor,
}: {
  tintColor: string;
}): JSX.Element {
  return (
    <MaterialIcons
      name="close"
      size={28}
      color={tintColor}
      style={{ padding: 8 }}
    />
  );
}

export function HardwareIcon({
  fill = "#8F929E",
  size = 24,
}: {
  fill?: string;
  size?: number;
}): JSX.Element {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24">
      <Path
        d="M8.555 10.887c-.309 0-.575.107-.79.32a1.064 1.064 0 0 0-.324.783c0 .307.108.57.324.784.215.213.481.32.79.32.31 0 .575-.107.79-.32.216-.213.325-.477.325-.784 0-.306-.109-.57-.324-.783a1.086 1.086 0 0 0-.79-.32ZM18.807 8.5H5.923a.785.785 0 0 0-.573.222.794.794 0 0 0-.225.588v5.263c0 .247.07.464.215.645a.718.718 0 0 0 .583.282h12.884a.738.738 0 0 0 .603-.282c.145-.18.215-.398.215-.645V9.31a.794.794 0 0 0-.225-.588.811.811 0 0 0-.593-.222Zm-.62 5.576H6.563V9.924h11.625v4.152Z"
        fill={fill}
        stroke="#8F929E"
        opacity={0.5}
      />
    </Svg>
  );
}

export function ImportedIcon({
  fill = "#8F929E",
  size = 24,
}: {
  fill?: string;
  size?: number;
}): JSX.Element {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24">
      <Path
        d="M11.56 6.058 8.378 9.24a.625.625 0 1 0 .884.884l2.115-2.115V14.5a.625.625 0 0 0 1.25 0V8.009l2.115 2.115a.625.625 0 1 0 .884-.884l-3.182-3.182a.625.625 0 0 0-.884 0Z"
        fill={fill}
        stroke="#8F929E"
      />
      <Path stroke="#8F929E" d="M8.25 16.377h7.5" />
    </Svg>
  );
}

export function MnemonicIcon({
  fill = "#8F929E",
}: {
  fill?: string;
}): JSX.Element {
  return <ImportedIcon fill={fill} />;
}
