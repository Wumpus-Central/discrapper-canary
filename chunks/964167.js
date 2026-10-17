if (
    (t.d(n, { Dw: () => u, V1: () => s, gu: () => h, qz: () => i, rm: () => a }),
    t(323874),
    t(14289),
    t(35956),
    221552 == t.j)
)
    var c = t(806163);
var e = t(976860);
function u(r) {
    return "chat" === new URLSearchParams(r).get("view");
}
function a() {
    return u((0, e.JK)().location.search);
}
function i() {
    return u((0, c.zy)().search);
}
function h(r) {
    return `${r}?view=chat`;
}
function s(r) {
    return a() ? h(r) : r;
}
