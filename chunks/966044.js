n.d(t, {
    UU: () => s,
    uZ: () => o,
});
var r = n(951288),
    i = n(603113);
let a = "popover-portal";
function o() {
    return (0, r.jsx)("div", { id: a });
}
function s(e) {
    let { children: t } = e,
        n = document.getElementById(a);
    return null == n ? null : (0, i.createPortal)(t, n);
}
