"use strict";
n.d(t, { J: () => o });
var r = n(627968);
n(64700);
var i = n(972213),
    s = n(460890),
    a = n(657718);
function o(e) {
    let { variant: t = "icon-only", "aria-label": n, ...o } = e,
        { i18n: l } = (0, s.G9)();
    return (0, r.jsx)(a.S, {
        ...o,
        "aria-label": n ?? l.CLOSE_BUTTON_LABEL,
        icon: i.d,
        variant: t,
        text: void 0,
        fullWidth: !1,
    });
}
