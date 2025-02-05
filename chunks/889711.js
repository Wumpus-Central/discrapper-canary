function l(e) {
    return new ResizeObserver(e);
}
function i(e, t) {
    e.observe(t);
}
function r(e, t) {
    e.unobserve(t);
}
n.d(t, {
    UC: () => r,
    YP: () => i,
    pP: () => l
});
