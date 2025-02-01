var i = n(717441),
    r = n(192291),
    a = n(536524),
    s = n(959318),
    o = n(165915),
    l = r.aTypedArray,
    u = r.getTypedArrayConstructor;
(0, r.exportTypedArrayMethod)(
    'with',
    {
        with: function (e, t) {
            var n = l(this),
                r = s(e),
                c = a(n) ? o(t) : +t;
            return i(n, u(n), r, c);
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
