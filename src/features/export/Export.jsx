import {useTuilo} from "../../hooks/useTuilo.js";
import { downloadSvg, downloadPng } from '../../lib/download.js'
import { buildSVG } from '../../lib/buildSVG.js'
import './Export.css'

export default function Export() {

  const { createdIcon } = useTuilo()
  console.log(createdIcon)
  const svgString = buildSVG(createdIcon)

  const formats = [
    { id: 'svg', label: 'SVG', onDownload: () => downloadSvg(svgString) },
    { id: 'png', label: 'PNG', onDownload: () => downloadPng(svgString) },
  ]

  return (
    <div className="buttonExport">
      {
        formats.map(format => (
          <button
            type="button"
            className="btn"
            key={format.id}
            name={format.label}
            onClick={format.onDownload}
          >Export to {format.label}</button>
        ))
      }
    </div>
  )
}
