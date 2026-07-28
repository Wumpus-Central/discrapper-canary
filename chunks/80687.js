"use strict";
n.d(t, { D: () => o });
var i = n(477900);
n(582128);
var r = n(113494),
    a = n(782134),
    s = n(460890),
    l = n(657718);
function o(e) {
    let { "aria-label": t, playing: n, ...o } = e,
        { i18n: d } = (0, s.G9)();
    return (0, i.jsx)(l.S, {
        ...o,
        "aria-label": t ?? (n ? d.PAUSE_BUTTON_LABEL : d.PLAY_BUTTON_LABEL),
        icon: n ? r.E : a.u,
        variant: "overlay-secondary",
        fullWidth: !1,
        rounded: !0,
    });
}
