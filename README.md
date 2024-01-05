# Package datatype-convertors

This package provides a set of utility functions for converting between different data types.

## Installation

You can install the package using npm:

```
npm install datatype-convertors
```

## Usage

```
import { bufferToHexString } from "datatype-convertors";

console.log(bufferToHexString(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8])));
```