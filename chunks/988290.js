n.d(t, {
    e: () => s,
    x: () => a
});
var r = n(192379),
    i = n(442837),
    o = n(411149),
    a = (function (e) {
        return (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.BLURRED = 1)] = 'BLURRED'), e;
    })({});
function s() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = (0, i.Wu)([o.Z], () => o.Z.wallpapers);
    return r.useMemo(() => t.filter((t) => (1 === e ? t.isBlurred : !t.isBlurred)), [t, e]);
}
