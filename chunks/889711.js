function r(e) {
    return new ResizeObserver(e);
}
function l(e, t) {
    e.observe(t);
}
function i(e, t) {
    e.unobserve(t);
}
n.d(t, {
    UC: () => i,
    YP: () => l,
    pP: () => r
});
