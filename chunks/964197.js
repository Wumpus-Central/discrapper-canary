var r = n(220159),
    o = n(178476),
    a = n(592802),
    i = n(565130),
    s = n(91345),
    c = o('URL');
r(
    {
        target: 'URL',
        stat: !0,
        forced: !s
    },
    {
        parse: function (e) {
            var t = a(arguments.length, 1),
                n = i(e),
                r = t < 2 || void 0 === arguments[1] ? void 0 : i(arguments[1]);
            try {
                return new c(n, r);
            } catch (e) {
                return null;
            }
        }
    }
);
