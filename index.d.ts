/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import dlacpy = require( '@stdlib/lapack-base-dlacpy' );
import dlaswp = require( '@stdlib/lapack-base-dlaswp' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
	/**
	* Copies all or part of a matrix `A` to another matrix `B`.
	*
	* @param order - storage layout of `A` and `B`
	* @param uplo - specifies whether to copy the upper or lower triangular/trapezoidal part of matrix `A`
	* @param M - number of rows in matrix `A`
	* @param N - number of columns in matrix `A`
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param B - output matrix
	* @param LDB - stride of the first dimension of `B` (a.k.a., leading dimension of the matrix `B`)
	* @returns `B`
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var B = new Float64Array( 4 );
	*
	* ns.dlacpy( 'row-major', 'all', 2, 2, A, 2, B, 2 );
	* // B => <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
	*
	* @example
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var A = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0 ] );
	* var B = new Float64Array( [ 0.0, 0.0, 11.0, 312.0, 53.0, 412.0 ] );
	*
	* ns.dlacpy.ndarray( 'all', 2, 2, A, 2, 1, 1, B, 2, 1, 2 );
	* // B => <Float64Array>[ 0.0, 0.0, 1.0, 2.0, 3.0, 4.0 ]
	*/
	dlacpy: typeof dlacpy;

	/**
	* Performs a series of row interchanges on a matrix `A` using pivot indices stored in `IPIV`.
	*
	* @param order - storage layout
	* @param N - number of columns in `A`
	* @param A - input matrix
	* @param LDA - stride of the first dimension of `A` (a.k.a., leading dimension of the matrix `A`)
	* @param k1 - index of first row to interchange
	* @param k2 - index of last row to interchange
	* @param IPIV - vector of pivot indices
	* @param incx - increment between successive values of `IPIV`
	* @returns permuted matrix `A`
	*
	* @example
	* var Int32Array = require( '@stdlib/array-int32' );
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var IPIV = new Int32Array( [ 2, 0, 1 ] );
	* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ); // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
	*
	* ns.dlaswp( 'row-major', 2, A, 2, 0, 2, IPIV, 1 );
	* // A => <Float64Array>[ 3.0, 4.0, 1.0, 2.0, 5.0, 6.0 ]
	*
	* @example
	* var Int32Array = require( '@stdlib/array-int32' );
	* var Float64Array = require( '@stdlib/array-float64' );
	*
	* var IPIV = new Int32Array( [ 2, 0, 1 ] );
	* var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ); // => [ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
	*
	* ns.dlaswp.ndarray( 2, A, 2, 1, 0, 0, 2, 1, IPIV, 1, 0 );
	* // A => <Float64Array>[ 3.0, 4.0, 1.0, 2.0, 5.0, 6.0 ]
	*/
	dlaswp: typeof dlaswp;
}

/**
* Base (i.e., lower-level) LAPACK routines.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;