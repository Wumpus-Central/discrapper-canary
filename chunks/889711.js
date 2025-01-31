function i(e) {
    return new ResizeObserver(e);
}
function l(e, t) {
    e.observe(t);
}
function a(e, t) {
    e.unobserve(t);
}
n.d(t, {
    UC: () => a,
    YP: () => l,
    pP: () => i
});
