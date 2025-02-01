var r = a(299623),
    n = a(345374),
    o = a(874652),
    _ = a(644659),
    i = a(97131).f,
    c = a(828114),
    s = a(535586),
    E = a(992051),
    l = a(325008),
    u = 'Array Iterator',
    I = _.set,
    R = _.getterFor(u);
t.exports = c(
    Array,
    'Array',
    function (t, e) {
        I(this, {
            type: u,
            target: r(t),
            index: 0,
            kind: e
        });
    },
    function () {
        var t = R(this),
            e = t.target,
            a = t.kind,
            r = t.index++;
        if (!e || r >= e.length) return (t.target = void 0), s(void 0, !0);
        switch (a) {
            case 'keys':
                return s(r, !1);
            case 'values':
                return s(e[r], !1);
        }
        return s([r, e[r]], !1);
    },
    'values'
);
var d = (o.Arguments = o.Array);
if ((n('keys'), n('values'), n('entries'), !E && l && 'values' !== d.name))
    try {
        i(d, 'name', { value: 'values' });
    } catch (t) {}
