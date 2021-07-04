
import DriverClass from "./DriverClass"
import { Collapse, Button, Accordion, Card } from 'react-bootstrap'

const DriverClasses = ({results}) => {
    return (
        <Accordion className="pt-4 accordion-flush" variant="accordion-flush">
            {results.hasOwnProperty("class") ? Object.values(results.class).map((item, i) =>
                <DriverClass key={i} id={i} driverClass={item} drivers={results.drivers}/>
            ) : "No results."}
        </Accordion>

    )
}

export default DriverClasses
