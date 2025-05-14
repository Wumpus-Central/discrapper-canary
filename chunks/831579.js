var r = n(98405),
    i = n(154028),
    o = n(621523),
    a = n(338045),
    s = n(382698),
    l = n(394227),
    c = i('URL'),
    u =
        l &&
        o(function () {
            c.canParse();
        }),
    d = o(function () {
        return 1 !== c.canParse.length;
    });
r(
    {
        target: 'URL',
        stat: !0,
        forced: !u || d
    },
    {
        canParse: function (e) {
            var t = a(arguments.length, 1),
                n = s(e),
                r = t < 2 || void 0 === arguments[1] ? void 0 : s(arguments[1]);
            try {
                return new c(n, r), !0;
            } catch (e) {
                return !1;
            }
        }
    }
);
