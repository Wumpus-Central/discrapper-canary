var i = r(67867),
    a = r(548828),
    o = r(228042),
    s = r(146321),
    l = TypeError,
    u = s.get,
    c = s.has,
    d = s.set;
i(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        update: function (e, n) {
            var r = o(this),
                i = arguments.length;
            a(n);
            var s = c(r, e);
            if (!s && i < 3) throw new l('Updating absent value');
            var f = s ? u(r, e) : a(i > 2 ? arguments[2] : void 0)(e, r);
            return d(r, e, n(f, e, r)), r;
        }
    }
);
