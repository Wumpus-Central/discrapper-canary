"use strict";
var i = n(108591),
    r = n(739305),
    s = r.aTypedArray,
    a = r.exportTypedArrayMethod,
    o = r.getTypedArrayConstructor;
a("toReversed", function () {
    return i(s(this), o(this));
});
