"use strict";
r.d(t, { Ig: () => a, vX: () => o });
var n = r(745391),
    i = r(712247);
function o(e) {
    var t, r, o;
    let s,
        l,
        u =
            ((t = (0, n.TW)(e)),
            ((l = null == (s = (0, i.bq)(t)) ? void 0 : s.getAttribute("aria-activedescendant")) &&
                t.getElementById(l)) ||
                s);
    u !== e &&
        (u &&
            ((r = u),
            (o = e),
            r.dispatchEvent(new FocusEvent("blur", { relatedTarget: o })),
            r.dispatchEvent(new FocusEvent("focusout", { bubbles: !0, relatedTarget: o }))),
        e && a(e, u));
}
function a(e, t) {
    e.dispatchEvent(new FocusEvent("focus", { relatedTarget: t })),
        e.dispatchEvent(new FocusEvent("focusin", { bubbles: !0, relatedTarget: t }));
}
