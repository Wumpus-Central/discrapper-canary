var i = n(581031),
    r = n(936940),
    a = n(354848),
    s = n(974971),
    o = n(545576),
    l = n(943329),
    u = function () {},
    c = [],
    d = o('Reflect', 'construct'),
    f = /^\s*(?:class|function)\b/,
    _ = i(f.exec),
    p = !f.exec(u),
    h = function (e) {
        if (!a(e)) return !1;
        try {
            return d(u, c, e), !0;
        } catch (e) {
            return !1;
        }
    },
    m = function (e) {
        if (!a(e)) return !1;
        switch (s(e)) {
            case 'AsyncFunction':
            case 'GeneratorFunction':
            case 'AsyncGeneratorFunction':
                return !1;
        }
        try {
            return p || !!_(f, l(e));
        } catch (e) {
            return !0;
        }
    };
(m.sham = !0),
    (e.exports =
        !d ||
        r(function () {
            var e;
            return (
                h(h.call) ||
                !h(Object) ||
                !h(function () {
                    e = !0;
                }) ||
                e
            );
        })
            ? m
            : h);
