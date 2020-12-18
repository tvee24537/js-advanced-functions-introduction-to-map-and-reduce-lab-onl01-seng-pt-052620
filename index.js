// Your code here
function mapToNegativize(sourceArray){
    let y = []
    for (let x of sourceArray){
        y.push(x*-1)
    }
    return y
}

function mapToNoChange(sourceArray){
    return sourceArray
}

function mapToDouble(sourceArray){
    let y = []
    for (let x of sourceArray){
        y.push(x*2)
    }
    return y
}

function mapToSquare(sourceArray){
    let y = []
    for (let x of sourceArray){
        y.push(x**2)
    }
    return y
};

function reduceToTotal(sourceArray, startingPoint){
    let tots = startingPoint ?  startingPoint : 0
    for (let y of sourceArray){
        tots += y
    }
    return tots
}

function reduceToAllTrue(sourceArray){
    let truthcounter = true
    for (let x of sourceArray){
        if (truthcounter == true && !!x == true){
            truthcounter = true
        } else {
            truthcounter = false
        }
    }
    return truthcounter

}

function reduceToAnyTrue(sourceArray){
    let truthcounter = false 
    for (let x of sourceArray){
        if (!!x === true){
            truthcounter = true
        }
    }
    return truthcounter

}