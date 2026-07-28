"use strict";
n.d(t, { Ig: () => o, vX: () => a });
var r = n(745391),
    i = n(712247);
function a(e) {
    var t, n, a;
    let s,
        l,
        u =
            ((t = (0, r.TW)(e)),
            ((l = null == (s = (0, i.bq)(t)) ? void 0 : s.getAttribute("aria-activedescendant")) &&
                t.getElementById(l)) ||
                s);
    u !== e &&
        (u &&
            ((n = u),
            (a = e),
            n.dispatchEvent(new FocusEvent("blur", { relatedTarget: a })),
            n.dispatchEvent(new FocusEvent("focusout", { bubbles: !0, relatedTarget: a }))),
        e && o(e, u));
}
function o(e, t) {
    e.dispatchEvent(new FocusEvent("focus", { relatedTarget: t })),
        e.dispatchEvent(new FocusEvent("focusin", { bubbles: !0, relatedTarget: t }));
}
