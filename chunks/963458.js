var r = n(192291),
    i = n(22092),
    s = r.aTypedArrayConstructor;
(0, r.exportTypedArrayStaticMethod)(
    'of',
    function () {
        for (var t = 0, e = arguments.length, n = new (s(this))(e); e > t; ) n[t] = arguments[t++];
        return n;
    },
    i
);
