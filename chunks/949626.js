var r = n(108591),
    i = n(739305),
    a = i.aTypedArray,
    s = i.exportTypedArrayMethod,
    o = i.getTypedArrayConstructor;
s("toReversed", function () {
    return r(a(this), o(this));
});
