import { useState } from 'react'
import Header from './components/Header/Header.jsx'
import Section from './components/Section/Section.jsx'
import SearchInput from './features/search/SearchInput.jsx'
import useIconSearch from './hooks/useIconSearch.js'
import IconStore from './features/icons/IconStore.jsx'
import ColorPalette from './features/colors/ColorPalette.jsx'
import IconPreview from './features/preview/IconPreview.jsx'
import HomeScreenPreview from './features/home-screen/HomeScreenPreview.jsx'
import Export from "./features/export/Export.jsx";

function App() {
  const [search, setSearch] = useState('')
  const filteredIconNames = useIconSearch(search)

  return (
    <>
      <Header title='Tuilo' summary='Odoo icon builder'/>
      <main>
        <div className="first-group">
          <Section title="1 • Keyword">
            <SearchInput onValueChange={setSearch} />
          </Section>
          <Section title="2 • Picto">
            <IconStore iconNames={filteredIconNames}/>
          </Section>
          <Section title="3 • Colors">
            <ColorPalette/>
          </Section>
        </div>
        <div className="second-group">
          <div className="group">
            <Section>
              <IconPreview title="Preview"/>
            </Section>
            <Section title="4 • Export">
              <Export/>
            </Section>
          </div>
          <Section>
            <HomeScreenPreview title="In context • home screen"/>
          </Section>
        </div>
      </main>
    </>
  )
}

export default App
