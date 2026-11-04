(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162));
var i = n(435558),
    r = n.n(i),
    a = n(136722),
    s = n(460288);
n.d(
    t,
    {},
    {
        $: function (e) {
            return r().cloneDeepWith(e, (e) =>
                null != e && "object" == typeof e && "__tag__" in e && "bigflag" === e.__tag__
                    ? a.iu(e.data)
                    : (0, s.I)(e)
                      ? new Uint8Array(e.data)
                      : void 0,
            );
        },
        g: function (e) {
            return r().cloneDeepWith(e, (e) =>
                (0, a.H0)(e)
                    ? { __tag__: "bigflag", data: e.toJSON() }
                    : (0, s.mg)(e)
                      ? { __tag__: "uint8array", data: Array.from(e) }
                      : void 0,
            );
        },
    },
);
