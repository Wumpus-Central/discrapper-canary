var r = n(67867),
    i = n(548828),
    o = n(228042),
    a = n(146321),
    s = TypeError,
    l = a.get,
    c = a.has,
    u = a.set;
r(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        update: function (e, t) {
            var n = o(this),
                r = arguments.length;
            i(t);
            var a = c(n, e);
            if (!a && r < 3) throw new s('Updating absent value');
            var d = a ? l(n, e) : i(r > 2 ? arguments[2] : void 0)(e, n);
            return u(n, e, t(d, e, n)), n;
        }
    }
);
