var primes = [2];

function getPrimes( count )
{
	console.log( 'getting ' + count + ' primes');
	if( primes.length < count ){
		calculatePrimes( count );
	}
	var res = new Array( count );
	for( var i = 0; i < count; ++i )
	{
		res[i] = primes[i];
	}
	return res;
}

function calculatePrimes( count )
{
	console.log( 'calculating primes up to ' + count );
	var current = primes[primes.length - 1];
	while( primes.length < count ){
		++current;
		console.log( 'testing ' + current );
		var isPrime = true;
		for( var i = 0; i < primes.length; ++i ){
			if( current % primes[i] == 0 ){
				isPrime = false;
				break;
			}
		}
		if( isPrime ){
			console.log( 'IS PRIME!' );
			primes.push( current );
		}
	}
	
	/*for( var i = primes.length; i < count; ++i ){
		primes.push( i );
	}*/
}

exports.getPrimes = getPrimes;