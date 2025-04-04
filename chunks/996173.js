var n = e(299623),
    o = e(345374),
    i = e(874652),
    a = e(644659),
    s = e(97131).f,
    u = e(828114),
    c = e(535586),
    f = e(992051),
    l = e(325008),
    p = 'Array Iterator',
    v = a.set,
    h = a.getterFor(p);
t.exports = u(
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
        var t = h(this),
            r = t.target,
            e = t.kind,
            n = t.index++;
        if (!r || n >= r.length) return (t.target = void 0), c(void 0, !0);
        switch (e) {
            case 'keys':
                return c(n, !1);
            case 'values':
                return c(r[n], !1);
        }
        return c([n, r[n]], !1);
    },
    'values'
);
var d = (i.Arguments = i.Array);
if ((o('keys'), o('values'), o('entries'), !f && l && 'values' !== d.name))
    try {
        s(d, 'name', { value: 'values' });
    } catch (t) {}
