var i = n(192291),
    r = n(82246).findLastIndex,
    a = i.aTypedArray;
(0, i.exportTypedArrayMethod)('findLastIndex', function (e) {
    return r(a(this), e, arguments.length > 1 ? arguments[1] : void 0);
});
