
interface Props {
  title: string;
  text: string;
  stringIcon?: string;
  children?: JSX.Element;
}

const IconAndText: React.FC<Props> = ({stringIcon,children, title, text}) => {
  return (
    <section

    className='icontext-container'>
        {
          children ? children : 
          (
            <i className={`icon ${stringIcon}`}></i>
          )
        }
       <div>
      <h4 className="tectitle">{title}</h4>
       <p>
            {text}
        </p>
       </div>
    </section>
  )
}

export default IconAndText