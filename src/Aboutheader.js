//Nombre del archivo : AboutCard.js
//Versión :1.0.3
//Fecha de creación:12-08-2024
//Fecha de modificación:15-08-2024
//Descripción:Diseño del header en la parte About.js ("Actividades") con la informacion relevante.

import React from 'react';
import './headerabout.css';
import { Link } from 'react-router-dom';

class Aboutheader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeID: 0,
      prevID: 0, // Para gestionar el estado anterior
      wrapperStyle: {
        backgroundImage: `url('${props.data[0].img}')`
      },
      panelStyle: {
        backgroundColor: props.data[0].colour
      },
      buttonHover: false,
      buttonStyle: {
        color: '#ffffff'
      },
      wrapperClass: 'fade-in',
      panelClass: 'fade-in'
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this._changeActive((this.state.activeID + 1) % this.props.data.length);
    }, 3000); // Cambia cada 3 segundos
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  _changeActive = (id) => {
    const { data } = this.props;

    // Cambia el estado para aplicar animación de desvanecimiento
    this.setState(prevState => ({
      prevID: prevState.activeID,
      activeID: id,
      wrapperStyle: {
        backgroundImage: `url('${data[id].img}')`
      },
      panelStyle: {
        backgroundColor: data[id].colour
      },
      wrapperClass: 'fade-out',
      panelClass: 'fade-out'
    }), () => {
      // Después de la animación de desvanecimiento, actualiza el estado
      setTimeout(() => {
        this.setState({
          wrapperClass: 'fade-in',
          panelClass: 'fade-in'
        });
      }, 500); // Duración de la animación
    });
  };

  _buttonColour = () => {
    this.setState(prevState => ({
      buttonHover: !prevState.buttonHover,
      buttonStyle: {
        color: prevState.buttonHover ? '#ffffff' : this.props.data[this.state.activeID].colour
      }
    }));
  };

  render() {
    const { data } = this.props;
    const { activeID, wrapperStyle, panelStyle, buttonStyle, wrapperClass, panelClass } = this.state;

    return (
      <section className={`wrapper ${wrapperClass}`} style={wrapperStyle}>
        <Selectors 
          data={data}
          activeID={activeID}
          _changeActive={this._changeActive}
        />
        <Panel 
          data={data[activeID]}
          panelStyle={panelStyle}
          buttonStyle={buttonStyle}
          _buttonColour={this._buttonColour}
          panelClass={panelClass}
        />
      </section>
    );
  }
}

const Panel = ({ data, panelStyle, buttonStyle, _buttonColour, panelClass }) => (
  <aside className={`panel ${panelClass}`} style={panelStyle}>
    <h2 className="panel-header">{data.header}</h2>
    <p className="panel-info">{data.body}</p>
    <Link 
      to="./Acceder"  // Ruta a la que quieres redirigir
      className="panel-button"
      style={buttonStyle}
      onMouseEnter={_buttonColour}
      onMouseLeave={_buttonColour}
    >
      Acceder Curso..
    </Link>
  </aside>
);

const Selectors = ({ data, activeID, _changeActive }) => (
  <div className="selectors">
    {data.map((item) => (
      <Selector 
        key={item.id}
        id={item.id}
        _changeActive={_changeActive}
        activeID={activeID}
      />
    ))}
  </div>
);

const Selector = ({ id, _changeActive, activeID }) => {
  const componentClass = `selector ${activeID === id ? 'active' : ''}`;
  return (
    <div className={componentClass} onClick={() => _changeActive(id)}></div>
  );
};

export default Aboutheader;
