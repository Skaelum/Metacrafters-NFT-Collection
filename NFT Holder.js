// Variable to store NFT's
let holder = [];

// Function to create and pass NFT's to array
function mintNFT (name, type, age, value, colour) {

    let nft = {
        
        name : name,
        type : type, 
        age : age, 
        value : value, 
        colour : colour

    };

    holder.push(nft);

}

// Function to loop and print through holder
function listNFTs () {

    for(i = 0; i < holder.length; i++ ){
        console.log("Name: " + holder[i].name);
        console.log("Type: " + holder[i].type);
        console.log("Age: " + holder[i].age);
        console.log("Value: " + holder[i].value);
        console.log("Colour: " + holder[i].colour);
        console.log("\n");
    }

}

// Function to get total number of created NFT's
function getTotalSupply() {
    return holder.length;
}

// Final Function Calls
mintNFT('Blinky', 'bombardic', '2', 4000, 'lilac');
mintNFT('Wobbly', 'jellyfishian', '3', 5000, 'turquoise');
mintNFT('Squiggly', 'noodlian', '1', 3000, 'chartreuse');
mintNFT('Bumpy', 'cactusian', '4', 4500, 'cerulean');
mintNFT('Fluffy', 'cloudian', '5', 5200, 'periwinkle');
mintNFT('Sparky', 'zaptrooper', '3', 4700, 'teal');
mintNFT('Grumpy', 'trollkin', '2', 3800, 'fuchsia');
mintNFT('Zippy', 'zaptoidian', '1', 3200, 'vermillion');
mintNFT('Snarky', 'sarcastron', '4', 4100, 'aubergine');
mintNFT('Giggly', 'laughmeister', '5', 4900, 'mauve');

listNFTs();
console.log('Total Supply : ' + getTotalSupply());