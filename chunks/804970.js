n.d(t, { q6: () => a });
var r = n(253231),
    i = n(571670);
function a(e) {
    let t = l((0, r.r3)(e));
    t !== e && (t && o(t, e), e && s(e, t));
}
function o(e, t) {
    e.dispatchEvent(new FocusEvent("blur", { relatedTarget: t })),
        e.dispatchEvent(
            new FocusEvent("focusout", {
                bubbles: !0,
                relatedTarget: t,
            }),
        );
}
function s(e, t) {
    e.dispatchEvent(new FocusEvent("focus", { relatedTarget: t })),
        e.dispatchEvent(
            new FocusEvent("focusin", {
                bubbles: !0,
                relatedTarget: t,
            }),
        );
}
function l(e) {
    let t = (0, i.vY)(e),
        n = null == t ? void 0 : t.getAttribute("aria-activedescendant");
    return (n && e.getElementById(n)) || t;
}
