t.d(n, { D: () => s });
var a = t(477900);
t(582128);
var l = t(113494),
    i = t(782134),
    r = t(460890),
    d = t(657718);
function s(e) {
    let { "aria-label": n, playing: t, ...s } = e,
        { i18n: _ } = (0, r.G9)();
    return (0, a.jsx)(d.S, {
        ...s,
        "aria-label": n ?? (t ? _.PAUSE_BUTTON_LABEL : _.PLAY_BUTTON_LABEL),
        icon: t ? l.PauseIcon : i.PlayIcon,
        variant: "overlay-secondary",
        fullWidth: !1,
        rounded: !0,
    });
}
