i.d(e, { r: () => T });
var n = i(574381),
    l = i(311907),
    s = i(419954),
    r = i(430452),
    u = i(780964),
    a = i(565824),
    o = i(985018);
let T = (0, s.zD)(u.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
    useTitle: () => o.intl.string(o.t.lt8rRx),
    useSubtitle: () => o.intl.string(o.t.ie1mgY),
    useValue: function () {
        return (0, l.bG)([r.A], () => r.A.getUseSystemScreensharePicker());
    },
    setValue: a.I,
    usePredicate: function () {
        return (0, l.bG)([r.A], () => r.A.supportsSystemScreensharePicker() && (0, n.cX)());
    },
});
