var r = n(67867),
    i = n(96403),
    o = n(952256),
    a = i([].reverse),
    s = [1, 2];
r(
    {
        target: 'Array',
        proto: !0,
        forced: String(s) === String(s.reverse())
    },
    {
        reverse: function () {
            return o(this) && (this.length = this.length), a(this);
        }
    }
);
