function i(e) {
    return new ResizeObserver(e);
}
function l(e, t) {
    e.observe(t);
}
function r(e, t) {
    e.unobserve(t);
}
n.d(t, {
    UC: function () {
        return r;
    },
    YP: function () {
        return l;
    },
    pP: function () {
        return i;
    }
});
