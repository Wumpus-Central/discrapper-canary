n.d(t, { D: () => E });
var i = n(477900);
n(582128);
var s = n(113494),
    a = n(782134),
    l = n(460890),
    r = n(657718);
function E(e) {
    let { "aria-label": t, playing: n, ...E } = e,
        { i18n: o } = (0, l.G9)();
    return (0, i.jsx)(r.S, {
        ...E,
        "aria-label": t ?? (n ? o.PAUSE_BUTTON_LABEL : o.PLAY_BUTTON_LABEL),
        icon: n ? s.PauseIcon : a.PlayIcon,
        variant: "overlay-secondary",
        fullWidth: !1,
        rounded: !0,
    });
}
