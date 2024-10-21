import { Row } from 'react-bootstrap';

const gradientStyles: React.CSSProperties = {
  marginBottom: '10px',
  background: 'linear-gradient(90deg, #ffda00, #eef9f9)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

export default () => {
    return (
        <Row style={{ background: "#000" }}>
            <p className="py-3 m-0 text-center text-light">
                &copy; <span className="fs-5" style={gradientStyles}>{new Date().getFullYear()} PrimSoft SpA. Todos los derechos reservados.</span>
            </p>
        </Row>
    )
}