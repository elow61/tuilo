import ph from '@iconify-json/ph/icons.json'
import {icons} from "@iconify-json/ph";
import recolor from "./lib/recolor.js";
import HeaderPage from "./components/screens/HeaderPage.jsx";

function App() {
    const name = Object.keys(ph.icons)
    const duotones = name.filter((n) => n.endsWith('-duotone'))

    console.log('Total d\'icônes :', name.length)
    console.log('Duotone :', duotones.length)
    console.log('calendar-duotone :', ph.icons['calendar-duotone'])

    const icone = ph.icons['calendar-duotone']

    const change = recolor(icone.body, '#6e89a3', '#85b5a3');
    console.log(change)

    return (
      <>
          <HeaderPage title='Tuilo' summary='App icons for Odoo'/>
          <main>

          </main>
      </>
    )
}

export default App
