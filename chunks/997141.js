var a = t(87391),
    i = t(855986),
    l = t(540999);
let r = a.w.ALL & ~a.w.DEV_LINKS,
    o = a.w.ALL,
    u = a.w.QUOTES;
t.d(
    n,
    {},
    {
        Z: u,
        j: function () {
            let { excluded: e = 0 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return ((0, i.bG)([l.A], () => l.A.isDeveloper, []) ? o : r) & ~e;
        },
    },
);
