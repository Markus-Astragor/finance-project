import React, { useEffect } from "react";
import ApexCharts from 'apexcharts';

import styles from './style.module.css';
import Logo from "../MainPage/Logo";

function UserPage() {
  useEffect(() => {
    var options = {
      chart: {
        type: 'donut'
      },
      series: [44, 55, 41, 56],
      labels: ['Apple', 'Banana', 'Cherry', 'Durian'],
      annotations: {
        position: 'center',
        text: 'total: 145',
        textAnchor: 'middle',
        fontSize: '20px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 'bold',
        textColor: '#000000'
      },
      plotOptions: {
        pie: {
          customScale: 1
        }
      }
    }

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Зупинити або видалити графік при знищенні компоненти
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className={styles.userpage}>
      <div className={styles.userpage_container}>
        <div className={styles.content_header}>
          <div className={styles.content_header_logo}><Logo /></div>
          <div className={styles.content_header_navbar}>
            <div className={styles.navbar_item}>About Us</div>
            <div className={styles.navbar_item}>Our Project</div>
            <div className={styles.navbar_item}>Money+</div>
            <div className={styles.navbar_item}>Info</div>
            <div className={styles.navbar_item}>QA</div>
          </div>
        </div>
        <div className={styles.Diagramm}>
          <div id="chart"></div>
        </div>
      </div>
    </div>
  )
}

export default UserPage;
