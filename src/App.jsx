import ph from '@iconify-json/ph/icons.json'
import recolor from "./lib/recolor.js";
import HeaderPage from "./components/screens/HeaderPage.jsx";
import SearchInput from "./components/SearchInput.jsx";
import {useEffect, useMemo, useState} from "react";
import Section from "./components/Section.jsx";
import IconStore from "./components/IconStore.jsx";

function App() {
  const [icons, setIcons] = useState({});
  const [search, setSearch] = useState('');

  const filteredIconNames = useMemo(
    () => {
      const names = Object.keys(ph.icons);
      return names.filter(name => {
        const matchesDuotone = name.toLowerCase().endsWith('-duotone');
        const matchesSearch = name.toLowerCase().includes(search.toLowerCase());
        return matchesDuotone && matchesSearch;
      });
    }, [search]
  )

    // console.log(ph)
    // const name = Object.keys(ph.icons)
    // const duotones = name.filter((n) => n.endsWith('-duotone'))
    // console.log('Total d\'icônes :', name.length)
    // console.log('Duotone :', duotones.length)
    // console.log('calendar-duotone :', ph.icons['calendar-duotone'])
    // const icone = ph.icons['calendar-duotone']
    // const change = recolor(icone.body, '#6e89a3', '#85b565');
    // console.log(change)

    return (
      <>
        <HeaderPage title='Tuilo' summary='Odoo icon builder'/>
        <main>
          <div className="first-group">
            <Section title="1 • Keyword">
              <SearchInput onValueChange={setSearch} />
            </Section>
            <Section title="2 • Picto">
              <IconStore iconNames={filteredIconNames}/>
            </Section>
          </div>
          <div className="second-group">
            <Section title="Preview"/>
          </div>
        </main>
      </>
    )
}

export default App
