export default interface buttonProps {
  border?: string | "0px";
  color?: string;
  children?: React.ReactNode;
  height?: string;
  onClick: () => void;
  radius?: string
  width?: string;
}