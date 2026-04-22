a.d(t, { D: () => o });
var n = a(627968);
a(64700);
var r = a(113494),
    l = a(782134),
    i = a(460890),
    s = a(657718);
function o(e) {
    let { "aria-label": t, playing: a, ...o } = e,
        { i18n: c } = (0, i.G9)();
    return (0, n.jsx)(s.S, {
        ...o,
        "aria-label": t ?? (a ? c.PAUSE_BUTTON_LABEL : c.PLAY_BUTTON_LABEL),
        icon: a ? r.E : l.u,
        variant: "overlay-secondary",
        fullWidth: !1,
        rounded: !0,
    });
}
