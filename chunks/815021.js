"use strict";
n.d(t, { J: () => o });
var r = n(627968);
n(64700);
var i = n(934551),
    a = n(460890),
    s = n(657718);
function o(e) {
    let { variant: t = "icon-only", "aria-label": n, ...o } = e,
        { i18n: l } = (0, a.G9)();
    return (0, r.jsx)(s.S, {
        ...o,
        "aria-label": n ?? l.CLOSE_BUTTON_LABEL,
        icon: i.XLargeIcon,
        variant: t,
        text: void 0,
        fullWidth: !1,
    });
}
