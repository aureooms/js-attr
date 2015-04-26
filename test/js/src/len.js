
test( "len" , function ( ) {

	deepEqual( ( "abcd" )[attr.len] , 4 , "string length" ) ;
	deepEqual( ( new Array( 17 ) )[attr.len] , 17 , "array length" ) ;
	deepEqual( Object.keys( { a : 0 , b : 0 , c : 0 } )[attr.len] , 3 , "object keys length" ) ;
	deepEqual( ( function ( a , b ) { return a + b ; } )[attr.len] , 2 , "function length" ) ;

} ) ;
