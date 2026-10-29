l.d(a, { D: () => c });
var t = l(477900);
l(582128);
var n = l(113494),
    r = l(782134),
    s = l(460890),
    i = l(657718);
function c(e) {
    let { "aria-label": a, playing: l, ...c } = e,
        { i18n: u } = (0, s.G9)();
    return (0, t.jsx)(i.S, {
        ...c,
        "aria-label": a ?? (l ? u.PAUSE_BUTTON_LABEL : u.PLAY_BUTTON_LABEL),
        icon: l ? n.PauseIcon : r.PlayIcon,
        variant: "overlay-secondary",
        fullWidth: !1,
        rounded: !0,
    });
}
