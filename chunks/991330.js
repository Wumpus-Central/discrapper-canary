var i = r(67867),
    a = r(447631),
    o = r(688313),
    s = r(729605),
    l = r(65007),
    u = r(256110);
i(
    {
        target: 'Object',
        stat: !0,
        sham: !a
    },
    {
        getOwnPropertyDescriptors: function (e) {
            for (var n, r, i = s(e), a = l.f, c = o(i), d = {}, f = 0; c.length > f; ) void 0 !== (r = a(i, (n = c[f++]))) && u(d, n, r);
            return d;
        }
    }
);
