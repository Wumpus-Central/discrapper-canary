var r = n(717441),
    i = n(192291),
    o = n(536524),
    a = n(959318),
    s = n(165915),
    l = i.aTypedArray,
    c = i.getTypedArrayConstructor;
(0, i.exportTypedArrayMethod)(
    'with',
    {
        with: function (e, t) {
            var n = l(this),
                i = a(e),
                u = o(n) ? s(t) : +t;
            return r(n, c(n), i, u);
        }
    }.with,
    !(function () {
        try {
            new Int8Array(1).with(2, {
                valueOf: function () {
                    throw 8;
                }
            });
        } catch (e) {
            return 8 === e;
        }
    })()
);
