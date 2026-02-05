"use strict";
n.d(t, { D: () => o });
var r = n(627968);
n(64700);
var i = n(934551),
    a = n(460890),
    s = n(657718);
function o(e) {
    let { "aria-label": t, playing: n, ...o } = e,
        { i18n: l } = (0, a.G9)();
    return (0, r.jsx)(s.S, {
        ...o,
        "aria-label": t ?? (n ? l.PAUSE_BUTTON_LABEL : l.PLAY_BUTTON_LABEL),
        icon: n ? i.PauseIcon : i.PlayIcon,
        variant: "overlay-secondary",
        fullWidth: !1,
        rounded: !0,
    });
}
