function i(e) {
    return new ResizeObserver(e);
}
function r(e, t) {
    e.observe(t);
}
function l(e, t) {
    e.unobserve(t);
}
n.d(t, {
    UC: () => l,
    YP: () => r,
    pP: () => i
});
