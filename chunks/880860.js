var i = n(67867),
    r = n(228042),
    a = n(146321),
    s = a.get,
    o = a.has,
    l = a.set;
i(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        emplace: function (e, t) {
            var n,
                i,
                a = r(this);
            return o(a, e) ? ((n = s(a, e)), 'update' in t && ((n = t.update(n, e, a)), l(a, e, n)), n) : ((i = t.insert(e, a)), l(a, e, i), i);
        }
    }
);
