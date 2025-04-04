function r(e) {
    return new ResizeObserver(e);
}
function i(e, t) {
    e.observe(t);
}
function o(e, t) {
    e.unobserve(t);
}
n.d(t, {
    UC: () => o,
    YP: () => i,
    pP: () => r
});
