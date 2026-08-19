"use strict";
r.d(t, { Ig: () => a, vX: () => i });
var n = r(745391),
    o = r(712247);
function i(e) {
    var t, r, i;
    let s,
        l,
        u =
            ((t = (0, n.TW)(e)),
            ((l = null == (s = (0, o.bq)(t)) ? void 0 : s.getAttribute("aria-activedescendant")) &&
                t.getElementById(l)) ||
                s);
    u !== e &&
        (u &&
            ((r = u),
            (i = e),
            r.dispatchEvent(new FocusEvent("blur", { relatedTarget: i })),
            r.dispatchEvent(new FocusEvent("focusout", { bubbles: !0, relatedTarget: i }))),
        e && a(e, u));
}
function a(e, t) {
    e.dispatchEvent(new FocusEvent("focus", { relatedTarget: t })),
        e.dispatchEvent(new FocusEvent("focusin", { bubbles: !0, relatedTarget: t }));
}
