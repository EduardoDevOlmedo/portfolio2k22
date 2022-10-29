

interface Props {
    text: string;
    style?: React.CSSProperties;
}

const Paragraph: React.FC<Props> = ({text, style}) => {
  return (
    <>
        <p
            className="skills text"
            style={style}
        >
            {text}
        </p>
    </>
  )
}

export default Paragraph