class Restaurant
{
    #name;
    #address;
    #city;
    constructor( name, address, city )
    {
        this.name = name;
        this.address = address;
        this.city = city;
    }

    get( fieldName )
    {
        if( fieldName in this )
        {
            return this[ fieldName ];
        }
        return undefined;
    }
};

class RestaurantList
{
    #data = []; // array of Restaurant objects

    constructor()
    {
        this.filterKey = null; // no filter is enabled initially
        this.filterValue = null;
    }

    add( name, address, city ) // add Restaurant object to <data> array
    {
        return this.#data.push( new Restaurant( name, address, city ) );
    }

    filter( key, value = null ) // enable filter by property name & value
    {
        this.filterKey = key;
        this.filterValue = value;
    }

    #describe( obj ) // helper for print()
    {
        console.log( `Name: ${obj.get( "name" )}\nAddress: ${obj.get( "address" )}\nCity: ${obj.get( "city" )}\n` )
    }

    print() // prints Restaurant objects in <data> array
    {
        if( this.filterKey !== null && this.filterValue !== null )
        {
            // print filtered data
            this.#data.filter( obj => obj[ this.filterKey ] === this.filterValue )
                .forEach( obj => this.#describe( obj) );
        }
        else
        {
            // print all data
            this.#data.forEach( obj => this.#describe( obj ) );
        }
    }

    sort( key = "name", ascending = true ) // sort items by property name & value
    {
        if ( key in new Restaurant() )
        {
            this.#data = this.#data.sort( ( item1, item2 ) =>
            {
                let so = item1[ key ]
                    .localeCompare( item2[ key ] );
                return ( ascending ? so : - so );
            });
        }
    }
};

const restList = new RestaurantList();
restList.add( "Shruti", "cp-13", "bhiwani" );
restList.add( "Neel", "sec14", "nagarkoti" );
//restList.filter("name", "haldwani");
//restList.print();
restList.sort("name");
restList.print();

class restaurantManager{
    constructor(name,address,city){
  let restlist= [
   {
       name : "Shruti" ,
      address : "cp-13" ,
       city : "bhiwani" 
   },
   {
        name : "Neel" ,
        address : "sec14" , 
      city : "nagarkoti"
   }];
   }
}
console.log(restList);
