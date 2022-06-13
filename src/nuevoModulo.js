//le agrego parametros llamados PROPS//
//le puedo agregar el estilo, en este caso "color" con una etiqueta style dentro del h1, siempre con llaves{} porque es un objeto!!//

const ModuloExportado = (props) => {
    
    return <h1 style={{color:props.color}}>
        {props.message}
        </h1>
}

export default ModuloExportado;