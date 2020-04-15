// Function to calculate latency of RAM //

function calculateLatency(clock, CR) {
    if ( clock < 1.0 ) {
        clock = 1.0;
    }
    if ( CR < 1.0 ) {
        CR = 1.0;
    }

    return ( 1.0/(clock/CR) * 2000.0 ); 
}

// Called upon function in HTML to get data and call calculateLatency function //

function calculateForm() {
    let clock = Number(document.getElementById("clock").value);
    let CR = Number(document.getElementById("CR").value);
    let output = calculateLatency(clock, CR);

    document.getElementById("output").innerHTML = output.toString().substr( 0, 10);
}