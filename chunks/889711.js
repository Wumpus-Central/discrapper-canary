function i(e) {
    return new ResizeObserver(e);
}
function r(e, t) {
    e.observe(t);
}
function a(e, t) {
    e.unobserve(t);
}
n.d(t, {
    UC: function () {
        return a;
    },
    YP: function () {
        return r;
    },
    pP: function () {
        return i;
    }
});
