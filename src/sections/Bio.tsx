import Button from '@mui/material/Button';
const code = require("../assets/Componente 17 – 1.svg").default;

const Bio = () => {


  return (
    <section className="biography">
        <div className="text-cont">
            <h1>
                Hello,<br />  I am <strong>Eduardo Olmedo,</strong> <br />
                a FullStack Developer.
            </h1> 
            <div className="btn-cont">
              <Button
              size="large"
              sx={{
                border: '3px solid #F13131',
                color: '#F13131',
                fontFamily: 'Montserrat',
                width: "clamp(120px, 30%, 170px)",
                ':hover': {
                  border: '3px solid #F13131', 
                  cursor: 'pointer'
                },
              }}
              variant="outlined" href='#contacts'>Contact</Button>
              <Button
              size="large"
              sx={{
                fontFamily: 'Montserrat',
                background: '#F13131',
                color: '#fff',
                padding: '4px 15px',
                width: "clamp(120px, 30%, 250px)",
                 ':hover': {
                   bgcolor: '#A62222',
                   cursor: 'pointer'
                 },
              }}
              variant="text" href='#projects'>See projects</Button>
            </div>
        </div>
        <div className="image-cont">
          <img
             alt="code-svg"
              src={code}
          />
        </div>
    </section>
  )
}

export default Bio