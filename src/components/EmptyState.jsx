import { faCloudBolt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import '~/components/EmptyState.scss'

export const EmptyState = () => {
  return (
    <div className="empty-state">
        <span>No encontramos resultados</span>
        <FontAwesomeIcon icon={faCloudBolt} size={"9x"}/>
    </div>
  )
}
