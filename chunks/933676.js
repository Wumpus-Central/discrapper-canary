var r = n(581031),
    i = n(936940),
    o = n(354848),
    a = n(974971),
    s = n(545576),
    l = n(943329),
    c = function () {},
    u = [],
    d = s('Reflect', 'construct'),
    f = /^\s*(?:class|function)\b/,
    p = r(f.exec),
    _ = !f.exec(c),
    h = function (e) {
        if (!o(e)) return !1;
        try {
            return d(c, u, e), !0;
        } catch (e) {
            return !1;
        }
    },
    m = function (e) {
        if (!o(e)) return !1;
        switch (a(e)) {
            case 'AsyncFunction':
            case 'GeneratorFunction':
            case 'AsyncGeneratorFunction':
                return !1;
        }
        try {
            return _ || !!p(f, l(e));
        } catch (e) {
            return !0;
        }
    };
(m.sham = !0),
    (e.exports =
        !d ||
        i(function () {
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
