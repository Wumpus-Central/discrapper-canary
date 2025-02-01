var i = {
    current: function (e) {
        return n.g.cancelAnimationFrame(e);
    },
    inject: function (e) {
        i.current = e;
    }
};
e.exports = i;
