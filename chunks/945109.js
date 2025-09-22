n.d(t, { J: () => o });
var r = n(253231);
function i(e) {
    let t = (0, r.kR)(e);
    if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
    let { display: n, visibility: i } = e.style,
        a = "none" !== n && "hidden" !== i && "collapse" !== i;
    if (a) {
        let { getComputedStyle: t } = e.ownerDocument.defaultView,
            { display: n, visibility: r } = t(e);
        a = "none" !== n && "hidden" !== r && "collapse" !== r;
    }
    return a;
}
function a(e, t) {
    return (
        !e.hasAttribute("hidden") &&
        !e.hasAttribute("data-react-aria-prevent-focus") &&
        ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
    );
}
function o(e, t) {
    return "#comment" !== e.nodeName && i(e) && a(e, t) && (!e.parentElement || o(e.parentElement, e));
}
