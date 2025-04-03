var r = n(67867),
    o = n(96403),
    a = n(952256),
    i = o([].reverse),
    s = [1, 2];
r(
    {
        target: 'Array',
        proto: !0,
        forced: String(s) === String(s.reverse())
    },
    {
        reverse: function () {
            return a(this) && (this.length = this.length), i(this);
        }
    }
);
