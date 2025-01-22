var i = r(67867),
    a = r(96403),
    o = r(952256),
    s = a([].reverse),
    l = [1, 2];
i(
    {
        target: 'Array',
        proto: !0,
        forced: String(l) === String(l.reverse())
    },
    {
        reverse: function () {
            return o(this) && (this.length = this.length), s(this);
        }
    }
);
