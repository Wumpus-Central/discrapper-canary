"use strict";
n.d(t, { D: () => l });
var r = n(627968);
n(64700);
var i = n(113494),
    s = n(782134),
    a = n(460890),
    o = n(657718);
function l(e) {
    let { "aria-label": t, playing: n, ...l } = e,
        { i18n: u } = (0, a.G9)();
    return (0, r.jsx)(o.S, {
        ...l,
        "aria-label": t ?? (n ? u.PAUSE_BUTTON_LABEL : u.PLAY_BUTTON_LABEL),
        icon: n ? i.E : s.u,
        variant: "overlay-secondary",
        fullWidth: !1,
        rounded: !0,
    });
}
