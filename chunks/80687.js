r.d(t, { D: () => o });
var n = r(627968);
r(64700);
var a = r(113494),
    l = r(782134),
    s = r(460890),
    i = r(657718);
function o(e) {
    let { "aria-label": t, playing: r, ...o } = e,
        { i18n: c } = (0, s.G9)();
    return (0, n.jsx)(i.S, {
        ...o,
        "aria-label": t ?? (r ? c.PAUSE_BUTTON_LABEL : c.PLAY_BUTTON_LABEL),
        icon: r ? a.E : l.u,
        variant: "overlay-secondary",
        fullWidth: !1,
        rounded: !0,
    });
}
