import React from 'react'
import GridLayout from "react-grid-layout";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import '../../../node_modules/react-grid-layout/css/styles.css'
import '../../../node_modules/react-resizable/css/styles.css'



const layouts = {
  lg: [
    { i: "main", x: 0, y: 0, w: 2, h: 2},
    { i: "1", x: 2, y: 0, w: 3, h: 2 },
    { i: "2", x: 5, y: 0, w: 1, h: 2 }
  ],
  md: [
    { i: "main", x: 0, y: 0, w: 2, h: 2},
    { i: "1", x: 2, y: 0, w: 3, h: 2 },
    { i: "2", x: 0, y: 2, w: 1, h: 2 }
  ]
};


export default function Grid() {
  return (
   <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        <div key="main">main</div>
        <div key="1">1</div>
        <div key="2">2</div>
      </ResponsiveGridLayout>
  )
}
