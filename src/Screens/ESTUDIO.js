import React from "react";
import styles from "./ESTUDIO.module.css";

const Services = () => {
  return (
    <div name="ESTUDIO" className={styles.services}>
      <p><b>ESTUDIO DEL CONTEXTO</b><br/>
los trabajos de monitoreo son importantes para contar con información de calidad y mayor cobertura, con el objetivo de diseñar políticas e implementar proyectos que efectivamente mejoren la Calidad del Aire, lo que también demanda el compromiso y responsabilidad de varios sectores de la población. Los peligros de la mala Calidad del Aire son alarmantes si el aire exterior no se filtra y limpia de manera efectiva, existe el riesgo de que el aire interior contenga una gran cantidad de partículas dañinas que pueden llegar a las vías respiratorias y al sistema circulatorio de las personas. Estas partículas y otras sustancias pueden combinarse con las que ya están presentes dentro de los edificios y volverse más agresivas y dañinas, haciendo que la contaminación del aire interior muchas veces sea tan peligrosa como la contaminación del aire exterior. Los contaminantes atmosféricos riesgosos para la salud humana son el material particulado inhalable y compuestos químicos gaseosos tales como Dióxido de Nitrógeno, Ozono, Dióxido de Azufre y Monóxido de Carbono. Ahora bien, la exposición a contaminantes del aire no solo puede aumentar la tasa de morbilidad y mortalidad también puede aumentar el número de ingresos hospitalarios de pacientes con síntomas respiratorios y cardiovasculares. La contaminación del aire es importante en la determinación de la calidad de vida de niños menores, ancianos y en pacientes con enfermedades respiratorias y cardiovasculares, debido a que durante la inhalación de oxígeno, muchas sustancias presentes en el aire pasan de forma libre a través del tracto respiratorio y se depositan en la tráquea, los bronquios, los bronquiolos y los alveolos, provocando obstrucción aérea o problemas de toxicidad que incluyen desde la irritación hasta enfermedades pulmonar obstructiva crónica, tumores.
El monitoreo dependiente de la cantidad de contaminación existente, hace que su estudio involucre diferentes variantes, que inciden en mayor y menor escala, a un todo que refleja la calidad o detrimento del estado en que se encuentra el medio ambiente del municipio; de acuerdo a ello, realizamos una delimitación espacial situándonos, dentro del municipio en que nos encontramos, es decir:
</p><br/>

<ul>
  <li><p>Estado Plurinacional De Bolivia</p></li>
  <li><p>Departamento De Nuestra Señora De La Paz</p></li>
  <li><p>Municipio De La Paz</p></li>
</ul>
<p>Y que de acuerdo a los estudios realizados por entes municipales, hacemos una particularizacion de las siguientes “Estaciones de Monitoreo”, distribuidas en las zonas estratégicas del área urbana del municipio estudiado, que son:</p>
<tr>
  <td>
  <ul>
      <li><p>Cota Cota.</p></li>                                     
      <li><p>Obrajes.</p></li>                      
      <li><p>Pza. Humboldt.</p></li>               
      <li><p>Pza. I. la Catolica.</p></li>       
      <li><p>V. Fatima.</p></li>                    
      <li><p>Cotahuma.</p></li>                     
      <li><p>S. Francisco.</p></li>                 
      <li><p>P. Autopista</p></li>                 
  </ul>
  </td>
  <td>
    <ul>
    <li><p>Garaje Municipal.</p></li>
    <li><p>Transito.</p></li> 
    <li><p>Terminal de Buses.</p></li>
    <li><p>Pza. Villarroel.</p></li> 
    <li><p>Los Pinos.</p></li>
    <li><p>San Antonio.</p></li>
    <li><p>Llojeta - Buenos Aires.</p></li>
    <li><p>Portada Central.</p></li>

    </ul>
  </td>
</tr><br/>
<p>Ademas, señalamos las concentraciones de contaminante monitoreados, que son:</p>   
<ul>
  <li><p>PM2,5 (Material particulado en suspensión con diámetros aerodinámicos menores o iguales a 2.5 micrómetros).</p></li>
  <li><p>PM10 (Material particulado en suspensión con diámetros aerodinámicos menores o iguales a 10 micrómetros).</p></li>
  <li><p>CO (Monóxido de Carbono).</p></li>
  <li><p>NO (Monoxido de Nitrogeno).</p></li>
  <li><p>NOx (Oxido de Nitrógeno).</p></li>
</ul>
      <img
        className={styles.webImage}
        src={require("../assets/th.jpg")}
      ></img>
    </div>
  );
};

export default Services;