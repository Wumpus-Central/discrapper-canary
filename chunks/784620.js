var r = n(98405),
    i = n(46015),
    o = n(497464),
    a = n(77826),
    s = n(382698),
    l = n(621523),
    c = i(''.charAt);
r(
    {
        target: 'String',
        proto: !0,
        forced: l(function () {
            return '\uD842' !== '\uD842\uDFB7'.at(-2);
        })
    },
    {
        at: function (e) {
            var t = s(o(this)),
                n = t.length,
                r = a(e),
                i = r >= 0 ? r : n + r;
            return i < 0 || i >= n ? void 0 : c(t, i);
        }
    }
);
