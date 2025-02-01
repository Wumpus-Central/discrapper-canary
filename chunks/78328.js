var i = n(859209),
    r = n(581031),
    a = n(714050),
    s = n(202934),
    o = URLSearchParams,
    l = o.prototype,
    u = r(l.getAll),
    c = r(l.has),
    d = new o('a=1');
(d.has('a', 2) || !d.has('a', void 0)) &&
    i(
        l,
        'has',
        function (e) {
            var t = arguments.length,
                n = t < 2 ? void 0 : arguments[1];
            if (t && void 0 === n) return c(this, e);
            var i = u(this, e);
            s(t, 1);
            for (var r = a(n), o = 0; o < i.length; ) if (i[o++] === r) return !0;
            return !1;
        },
        {
            enumerable: !0,
            unsafe: !0
        }
    );
