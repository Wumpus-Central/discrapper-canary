"use strict";
var r = n(108591),
    i = n(739305),
    s = i.aTypedArray,
    a = i.exportTypedArrayMethod,
    o = i.getTypedArrayConstructor;
a("toReversed", function () {
    return r(s(this), o(this));
});
