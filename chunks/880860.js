var i = r(67867),
    a = r(228042),
    o = r(146321),
    s = o.get,
    l = o.has,
    u = o.set;
i(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        emplace: function (e, n) {
            var r,
                i,
                o = a(this);
            return l(o, e) ? ((r = s(o, e)), 'update' in n && ((r = n.update(r, e, o)), u(o, e, r)), r) : ((i = n.insert(e, o)), u(o, e, i), i);
        }
    }
);
