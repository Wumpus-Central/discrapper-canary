var r = n(220159),
    o = n(691593),
    a = n(519467),
    i = n(613694),
    s = i.get,
    c = i.has,
    l = i.set;
r(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        getOrInsertComputed: function (e, t) {
            if ((a(this), o(t), c(this, e))) return s(this, e);
            0 === e && 1 / e == -1 / 0 && (e = 0);
            var n = t(e);
            return l(this, e, n), n;
        }
    }
);
