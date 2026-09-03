var n = {
    current: function (e) {
        return r.g.cancelAnimationFrame(e);
    },
    inject: function (e) {
        n.current = e;
    },
};
e.exports = n;
