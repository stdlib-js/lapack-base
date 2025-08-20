<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# LAPACK

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base (i.e., lower-level) linear algebra package (LAPACK) routines.



<section class="usage">

## Usage

```javascript
import lapack from 'https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { clacgv, clacpy, claset, claswp, crot, dgetrans, dgttrf, dlacpy, dlamch, dlapy2, dlapy3, dlaset, dlassq, dlaswp, dpttrf, iladlc, iladlr, sgetrans, slacpy, slaswp, spttrf, zlacgv, zlacpy, zlaset, zlaswp, zrot } from 'https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base@esm/index.mjs';
```

#### lapack

Namespace for "base" (i.e., lower-level) linear algebra package (LAPACK) routines.

```javascript
var o = lapack;
// returns {...}
```

The namespace contains the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`clacgv( N, cx, strideCX )`][@stdlib/lapack/base/clacgv]</span><span class="delimiter">: </span><span class="description">conjugate each element in a single-precision complex floating-point vector.</span>
-   <span class="signature">[`clacpy( order, uplo, M, N, A, LDA, B, LDB )`][@stdlib/lapack/base/clacpy]</span><span class="delimiter">: </span><span class="description">copy all or part of a matrix `A` to another matrix `B`.</span>
-   <span class="signature">[`claset( order, uplo, M, N, alpha, beta, A, LDA )`][@stdlib/lapack/base/claset]</span><span class="delimiter">: </span><span class="description">set the off-diagonal elements and the diagonal elements of a single-precision complex floating-point matrix to specified values.</span>
-   <span class="signature">[`crot( N, cx, strideCX, cy, strideCY, c, s )`][@stdlib/lapack/base/crot]</span><span class="delimiter">: </span><span class="description">apply a plane rotation with real cosine and complex sine to a pair of single-precision complex floating-point vectors.</span>
-   <span class="signature">[`dgetrans( order, M, N, A, LDA, out, LDO )`][@stdlib/lapack/base/dge-trans]</span><span class="delimiter">: </span><span class="description">convert a matrix from row-major layout to column-major layout or vice versa.</span>
-   <span class="signature">[`dlacpy( order, uplo, M, N, A, LDA, B, LDB )`][@stdlib/lapack/base/dlacpy]</span><span class="delimiter">: </span><span class="description">copy all or part of a matrix `A` to another matrix `B`.</span>
-   <span class="signature">[`dlamch( cmach )`][@stdlib/lapack/base/dlamch]</span><span class="delimiter">: </span><span class="description">determine double-precision floating-point machine parameters.</span>
-   <span class="signature">[`dlassq( N, X, strideX, scale, sumsq )`][@stdlib/lapack/base/dlassq]</span><span class="delimiter">: </span><span class="description">return an updated sum of squares represented in scaled form.</span>
-   <span class="signature">[`dlaswp( N, A, LDA, k1, k2, IPIV, incx )`][@stdlib/lapack/base/dlaswp]</span><span class="delimiter">: </span><span class="description">perform a series of row interchanges on an input matrix.</span>
-   <span class="signature">[`dpttrf( N, D, E )`][@stdlib/lapack/base/dpttrf]</span><span class="delimiter">: </span><span class="description">compute the `L * D * L^T` factorization of a real symmetric positive definite tridiagonal matrix `A`.</span>
-   <span class="signature">[`sgetrans( order, M, N, A, LDA, out, LDO )`][@stdlib/lapack/base/sge-trans]</span><span class="delimiter">: </span><span class="description">convert a matrix from row-major layout to column-major layout or vice versa.</span>
-   <span class="signature">[`slacpy( order, uplo, M, N, A, LDA, B, LDB )`][@stdlib/lapack/base/slacpy]</span><span class="delimiter">: </span><span class="description">copy all or part of a matrix `A` to another matrix `B`.</span>
-   <span class="signature">[`slaswp( N, A, LDA, k1, k2, IPIV, incx )`][@stdlib/lapack/base/slaswp]</span><span class="delimiter">: </span><span class="description">perform a series of row interchanges on an input matrix.</span>
-   <span class="signature">[`spttrf( N, D, E )`][@stdlib/lapack/base/spttrf]</span><span class="delimiter">: </span><span class="description">compute the `L * D * L^T` factorization of a real symmetric positive definite tridiagonal matrix `A`.</span>
-   <span class="signature">[`zlacgv( N, zx, strideZX )`][@stdlib/lapack/base/zlacgv]</span><span class="delimiter">: </span><span class="description">conjugate each element in a double-precision complex floating-point vector.</span>
-   <span class="signature">[`zlacpy( order, uplo, M, N, A, LDA, B, LDB )`][@stdlib/lapack/base/zlacpy]</span><span class="delimiter">: </span><span class="description">copy all or part of a matrix `A` to another matrix `B`.</span>
-   <span class="signature">[`zlaset( order, uplo, M, N, alpha, beta, A, LDA )`][@stdlib/lapack/base/zlaset]</span><span class="delimiter">: </span><span class="description">set the off-diagonal elements and the diagonal elements of a double-precision complex floating-point matrix to specified values.</span>
-   <span class="signature">[`zrot( N, zx, strideX, zy, strideY, c, s )`][@stdlib/lapack/base/zrot]</span><span class="delimiter">: </span><span class="description">apply a plane rotation with real cosine and complex sine to a pair of double-precision complex floating-point vectors.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs';
import lapack from 'https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base@esm/index.mjs';

console.log( objectKeys( lapack ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/lapack-base.svg
[npm-url]: https://npmjs.org/package/@stdlib/lapack-base

[test-image]: https://github.com/stdlib-js/lapack-base/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/lapack-base/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/lapack-base/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/lapack-base?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/lapack-base.svg
[dependencies-url]: https://david-dm.org/stdlib-js/lapack-base/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/lapack-base/tree/deno
[deno-readme]: https://github.com/stdlib-js/lapack-base/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/lapack-base/tree/umd
[umd-readme]: https://github.com/stdlib-js/lapack-base/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/lapack-base/tree/esm
[esm-readme]: https://github.com/stdlib-js/lapack-base/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/lapack-base/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/lapack-base/main/LICENSE

<!-- <toc-links> -->

[@stdlib/lapack/base/clacgv]: https://github.com/stdlib-js/lapack-base-clacgv/tree/esm

[@stdlib/lapack/base/clacpy]: https://github.com/stdlib-js/lapack-base-clacpy/tree/esm

[@stdlib/lapack/base/claset]: https://github.com/stdlib-js/lapack-base-claset/tree/esm

[@stdlib/lapack/base/crot]: https://github.com/stdlib-js/lapack-base-crot/tree/esm

[@stdlib/lapack/base/dge-trans]: https://github.com/stdlib-js/lapack-base-dge-trans/tree/esm

[@stdlib/lapack/base/dlacpy]: https://github.com/stdlib-js/lapack-base-dlacpy/tree/esm

[@stdlib/lapack/base/dlamch]: https://github.com/stdlib-js/lapack-base-dlamch/tree/esm

[@stdlib/lapack/base/dlassq]: https://github.com/stdlib-js/lapack-base-dlassq/tree/esm

[@stdlib/lapack/base/dlaswp]: https://github.com/stdlib-js/lapack-base-dlaswp/tree/esm

[@stdlib/lapack/base/dpttrf]: https://github.com/stdlib-js/lapack-base-dpttrf/tree/esm

[@stdlib/lapack/base/sge-trans]: https://github.com/stdlib-js/lapack-base-sge-trans/tree/esm

[@stdlib/lapack/base/slacpy]: https://github.com/stdlib-js/lapack-base-slacpy/tree/esm

[@stdlib/lapack/base/slaswp]: https://github.com/stdlib-js/lapack-base-slaswp/tree/esm

[@stdlib/lapack/base/spttrf]: https://github.com/stdlib-js/lapack-base-spttrf/tree/esm

[@stdlib/lapack/base/zlacgv]: https://github.com/stdlib-js/lapack-base-zlacgv/tree/esm

[@stdlib/lapack/base/zlacpy]: https://github.com/stdlib-js/lapack-base-zlacpy/tree/esm

[@stdlib/lapack/base/zlaset]: https://github.com/stdlib-js/lapack-base-zlaset/tree/esm

[@stdlib/lapack/base/zrot]: https://github.com/stdlib-js/lapack-base-zrot/tree/esm

<!-- </toc-links> -->

</section>

<!-- /.links -->
