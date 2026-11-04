import ph from '@iconify-json/ph/icons.json'
import HeaderPage from "./components/screens/HeaderPage.jsx";
import SearchInput from "./components/filters/SearchInput.jsx";
import { useMemo, useState} from "react";
import Section from "./components/screens/Section.jsx";
import IconStore from "./components/IconStore.jsx";
import Preview from "./components/Preview.jsx";
import ColorPallet from "./components/ColorPallet.jsx";
import HomeScreenPreview from "./components/HomeScreenPreview.jsx";

function App() {
  const [search, setSearch] = useState('');

  const filteredIconNames = useMemo(
    () => {
      const names = Object.keys(ph.icons);

      if (!search) {
        const suggestions = ['chart', 'cube', 'calendar', 'chat', 'folder']
        return names.filter(name => suggestions.some((s) => name.includes(s + '-duotone')))
      }

      return names.filter(name => {
        const matchesDuotone = name.toLowerCase().endsWith('-duotone');
        const matchesSearch = name.toLowerCase().includes(search.toLowerCase());
        return matchesDuotone && matchesSearch;
      });
    }, [search]
  )

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
          <Section title="3 • Colors">
            <ColorPallet/>
          </Section>
        </div>
        <div className="second-group">
          <Section title="">
            <Preview title="Preview"/>
          </Section>
          <Section title="">
            <HomeScreenPreview title="In context • home screen"/>
          </Section>
        </div>
      </main>
    </>
  )
}

export default App
