var i = n(67867),
    r = n(548828),
    a = n(228042),
    s = n(146321),
    o = TypeError,
    l = s.get,
    u = s.has,
    c = s.set;
i(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        update: function (e, t) {
            var n = a(this),
                i = arguments.length;
            r(t);
            var s = u(n, e);
            if (!s && i < 3) throw new o('Updating absent value');
            var d = s ? l(n, e) : r(i > 2 ? arguments[2] : void 0)(e, n);
            return c(n, e, t(d, e, n)), n;
        }
    }
);
