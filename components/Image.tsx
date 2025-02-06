type Props = React.ImgHTMLAttributes<HTMLImageElement>;

export default function Image({ src, ...props }: Props) {
  return (
    <img
      src={`${process.env.NODE_ENV === "production" ? "/atros-doc" : ""}${src}`}
      {...props}
    />
  );
}
