import { useState } from 'react'
import { Collapse, Button, Accordion, Card } from 'react-bootstrap'
// import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

import Driver from "./Driver"

const DriverClass = ({id, driverClass, drivers}) => {

    const getDriversInClass = (classAlias, drivers) => {
        return drivers.filter(function(driver){
            return driver.class === classAlias;
        })
    }

    const [open, setOpen] = useState(false);

    return (
        // <Card className="driver-classes">
        <>
            <Accordion.Card>

            </Accordion.Card>

            </>
        // </Card>
        // <>
        //     <div class="container pt-4">
        //         <div class="row">
        //             <div class="panel-heading">
        //                 <h4 class="panel-title" data-toggle="collapse" data-target="#collapseTwo">Collapsible Group Item #2</h4>
        //             </div>
        //             <div class="col-sm-8 panel-heading">



        //                 <Button variant="accordion-button" className="panel-title" onClick={() => setOpen(!open)} aria-expanded={open}><h4 >{driverClass.name}</h4> </Button>
        //             </div>
        //             <Card>
        //                 <Accordion.Toggle as={Card.Header} eventKey="0">
        //                 Click me!
        //                 </Accordion.Toggle>
        //             </Card>

                    
        //             <div class="col-sm-4 text-muted align-self-center">
        //                 <h4>{driverClass.count} Drivers</h4>
        //             </div> 
        //         </div>
        //     </div>

        //     <Collapse in={open}>
        //         <div>
        //             {getDriversInClass(driverClass.alias, drivers).map((driver) => (
        //                 <Driver driver={driver} />
        //             ))}
        //         </div>
        //     </Collapse>
        // </>
    )
}

export default DriverClass
