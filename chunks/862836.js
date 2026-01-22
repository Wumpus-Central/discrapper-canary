n.d(t, {
    Ig: () => o,
    vX: () => a,
});
var r = n(297987),
    i = n(241827);
function a(e) {
    let t = l((0, r.TW)(e));
    t !== e && (t && s(t, e), e && o(e, t));
}
function s(e, t) {
    e.dispatchEvent(new FocusEvent("blur", { relatedTarget: t })),
        e.dispatchEvent(
            new FocusEvent("focusout", {
                bubbles: !0,
                relatedTarget: t,
            }),
        );
}
function o(e, t) {
    e.dispatchEvent(new FocusEvent("focus", { relatedTarget: t })),
        e.dispatchEvent(
            new FocusEvent("focusin", {
                bubbles: !0,
                relatedTarget: t,
            }),
        );
}
function l(e) {
    let t = (0, i.bq)(e),
        n = null == t ? void 0 : t.getAttribute("aria-activedescendant");
    return (n && e.getElementById(n)) || t;
}
