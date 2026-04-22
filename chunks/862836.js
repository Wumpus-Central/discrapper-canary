"use strict";
n.d(t, { Ig: () => a, vX: () => s });
var r = n(297987),
    i = n(241827);
function s(e) {
    var t, n, s;
    let o,
        l,
        u =
            ((t = (0, r.TW)(e)),
            ((l = null == (o = (0, i.bq)(t)) ? void 0 : o.getAttribute("aria-activedescendant")) &&
                t.getElementById(l)) ||
                o);
    u !== e &&
        (u &&
            ((n = u),
            (s = e),
            n.dispatchEvent(new FocusEvent("blur", { relatedTarget: s })),
            n.dispatchEvent(new FocusEvent("focusout", { bubbles: !0, relatedTarget: s }))),
        e && a(e, u));
}
function a(e, t) {
    e.dispatchEvent(new FocusEvent("focus", { relatedTarget: t })),
        e.dispatchEvent(new FocusEvent("focusin", { bubbles: !0, relatedTarget: t }));
}
