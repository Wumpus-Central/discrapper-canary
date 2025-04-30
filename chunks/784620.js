var r = n(98405),
    i = n(46015),
    a = n(497464),
    o = n(77826),
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
            var t = s(a(this)),
                n = t.length,
                r = o(e),
                i = r >= 0 ? r : n + r;
            return i < 0 || i >= n ? void 0 : c(t, i);
        }
    }
);
