n.d(e, { Z: () => c });
var i = n(818710),
    l = n(442837),
    u = n(509613),
    r = n(131951),
    s = n(313789),
    a = n(546997),
    o = n(388032);
let c = (0, u.qs)(s.n.STREAMING_OS_MENU_SCREEN_CAPTURE, {
    useTitle: () => o.intl.string(o.t.lt8rRx),
    useSubtitle: () => o.intl.string(o.t.ie1mgY),
    usePredicate: function () {
        return (0, l.e7)([r.Z], () => r.Z.supportsSystemScreensharePicker() && (0, i.V5)());
    },
    useValue: function () {
        return (0, l.e7)([r.Z], () => r.Z.getUseSystemScreensharePicker());
    },
    setValue: a.E,
});
