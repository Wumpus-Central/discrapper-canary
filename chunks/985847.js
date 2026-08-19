"use strict";
function n(e, t) {
    if (!e) return !1;
    let r = window.getComputedStyle(e),
        n = /(auto|scroll)/.test(r.overflow + r.overflowX + r.overflowY);
    return n && t && (n = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), n;
}
r.d(t, { o: () => n });
