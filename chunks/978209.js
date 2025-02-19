var r = n(147018),
    i = n(581031),
    o = n(498576),
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
