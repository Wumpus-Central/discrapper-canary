var n = e(299623),
    o = e(345374),
    i = e(874652),
    u = e(644659),
    a = e(97131).f,
    c = e(828114),
    s = e(535586),
    f = e(992051),
    l = e(325008),
    p = 'Array Iterator',
    v = u.set,
    d = u.getterFor(p);
t.exports = c(
    Array,
    'Array',
    function (t, r) {
        v(this, {
            type: p,
            target: n(t),
            index: 0,
            kind: r
        });
    },
    function () {
        var t = d(this),
            r = t.target,
            e = t.kind,
            n = t.index++;
        if (!r || n >= r.length) return (t.target = void 0), s(void 0, !0);
        switch (e) {
            case 'keys':
                return s(n, !1);
            case 'values':
                return s(r[n], !1);
        }
        return s([n, r[n]], !1);
    },
    'values'
);
var y = (i.Arguments = i.Array);
if ((o('keys'), o('values'), o('entries'), !f && l && 'values' !== y.name))
    try {
        a(y, 'name', { value: 'values' });
    } catch (t) {}
