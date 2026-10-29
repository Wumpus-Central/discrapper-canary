n.d(t, { J: () => l });
var i = n(477900);
n(582128);
var r = n(972213),
    a = n(460890),
    s = n(657718);
function l(e) {
    let { variant: t = "icon-only", "aria-label": n, ...l } = e,
        { i18n: o } = (0, a.G9)();
    return (0, i.jsx)(s.S, {
        ...l,
        "aria-label": n ?? o.CLOSE_BUTTON_LABEL,
        icon: r.XLargeIcon,
        variant: t,
        text: void 0,
        fullWidth: !1,
    });
}
