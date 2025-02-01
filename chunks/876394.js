var i = n(67867),
    r = n(96403),
    a = n(952256),
    s = r([].reverse),
    o = [1, 2];
i(
    {
        target: 'Array',
        proto: !0,
        forced: String(o) === String(o.reverse())
    },
    {
        reverse: function () {
            return a(this) && (this.length = this.length), s(this);
        }
    }
);
