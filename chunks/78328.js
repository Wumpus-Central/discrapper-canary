var i = r(859209),
    a = r(581031),
    o = r(714050),
    s = r(202934),
    l = URLSearchParams,
    u = l.prototype,
    c = a(u.getAll),
    d = a(u.has),
    f = new l('a=1');
(f.has('a', 2) || !f.has('a', void 0)) &&
    i(
        u,
        'has',
        function (e) {
            var n = arguments.length,
                r = n < 2 ? void 0 : arguments[1];
            if (n && void 0 === r) return d(this, e);
            var i = c(this, e);
            s(n, 1);
            for (var a = o(r), l = 0; l < i.length; ) if (i[l++] === a) return !0;
            return !1;
        },
        {
            enumerable: !0,
            unsafe: !0
        }
    );
