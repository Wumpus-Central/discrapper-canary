var r = n(67867),
    o = n(228042),
    a = n(146321),
    i = a.get,
    s = a.has,
    c = a.set;
r(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        emplace: function (e, t) {
            var n,
                r,
                a = o(this);
            return s(a, e) ? ((n = i(a, e)), 'update' in t && ((n = t.update(n, e, a)), c(a, e, n)), n) : ((r = t.insert(e, a)), c(a, e, r), r);
        }
    }
);
