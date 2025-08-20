/**
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

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name clacgv
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/clacgv}
*/
setReadOnly( ns, 'clacgv', require( '@stdlib/lapack-base-clacgv' ) );

/**
* @name clacpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/clacpy}
*/
setReadOnly( ns, 'clacpy', require( '@stdlib/lapack-base-clacpy' ) );

/**
* @name claset
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/claset}
*/
setReadOnly( ns, 'claset', require( '@stdlib/lapack-base-claset' ) );

/**
* @name claswp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/claswp}
*/
setReadOnly( ns, 'claswp', require( '@stdlib/lapack-base-claswp' ) );

/**
* @name crot
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/crot}
*/
setReadOnly( ns, 'crot', require( '@stdlib/lapack-base-crot' ) );

/**
* @name dgetrans
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/dge-trans}
*/
setReadOnly( ns, 'dgetrans', require( '@stdlib/lapack-base-dge-trans' ) );

/**
* @name dgttrf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/dgttrf}
*/
setReadOnly( ns, 'dgttrf', require( '@stdlib/lapack-base-dgttrf' ) );

/**
* @name dlacpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/dlacpy}
*/
setReadOnly( ns, 'dlacpy', require( '@stdlib/lapack-base-dlacpy' ) );

/**
* @name dlamch
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/dlamch}
*/
setReadOnly( ns, 'dlamch', require( '@stdlib/lapack-base-dlamch' ) );

/**
* @name dlapy2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/dlapy2}
*/
setReadOnly( ns, 'dlapy2', require( '@stdlib/lapack-base-dlapy2' ) );

/**
* @name dlapy3
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/dlapy3}
*/
setReadOnly( ns, 'dlapy3', require( '@stdlib/lapack-base-dlapy3' ) );

/**
* @name dlaset
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/dlaset}
*/
setReadOnly( ns, 'dlaset', require( '@stdlib/lapack-base-dlaset' ) );

/**
* @name dlassq
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/dlassq}
*/
setReadOnly( ns, 'dlassq', require( '@stdlib/lapack-base-dlassq' ) );

/**
* @name dlaswp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/dlaswp}
*/
setReadOnly( ns, 'dlaswp', require( '@stdlib/lapack-base-dlaswp' ) );

/**
* @name dpttrf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/dpttrf}
*/
setReadOnly( ns, 'dpttrf', require( '@stdlib/lapack-base-dpttrf' ) );

/**
* @name iladlc
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/iladlc}
*/
setReadOnly( ns, 'iladlc', require( '@stdlib/lapack-base-iladlc' ) );

/**
* @name iladlr
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/iladlr}
*/
setReadOnly( ns, 'iladlr', require( '@stdlib/lapack-base-iladlr' ) );

/**
* @name sgetrans
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/sge-trans}
*/
setReadOnly( ns, 'sgetrans', require( '@stdlib/lapack-base-sge-trans' ) );

/**
* @name slacpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/slacpy}
*/
setReadOnly( ns, 'slacpy', require( '@stdlib/lapack-base-slacpy' ) );

/**
* @name slaswp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/slaswp}
*/
setReadOnly( ns, 'slaswp', require( '@stdlib/lapack-base-slaswp' ) );

/**
* @name spttrf
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/spttrf}
*/
setReadOnly( ns, 'spttrf', require( '@stdlib/lapack-base-spttrf' ) );

/**
* @name zlacgv
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/zlacgv}
*/
setReadOnly( ns, 'zlacgv', require( '@stdlib/lapack-base-zlacgv' ) );

/**
* @name zlacpy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/zlacpy}
*/
setReadOnly( ns, 'zlacpy', require( '@stdlib/lapack-base-zlacpy' ) );

/**
* @name zlaset
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/zlaset}
*/
setReadOnly( ns, 'zlaset', require( '@stdlib/lapack-base-zlaset' ) );

/**
* @name zlaswp
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/zlaswp}
*/
setReadOnly( ns, 'zlaswp', require( '@stdlib/lapack-base-zlaswp' ) );

/**
* @name zrot
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/lapack/base/zrot}
*/
setReadOnly( ns, 'zrot', require( '@stdlib/lapack-base-zrot' ) );


// EXPORTS //

module.exports = ns;
