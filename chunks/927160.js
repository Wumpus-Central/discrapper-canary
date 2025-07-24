(n.d(t, { Z: () => s }), n(704826), n(35282));
var r = n(255367),
    i = n(263145),
    l = n(203377);
function s(e) {
    let { value: t, onChange: n, error: s, disabled: a, className: o, autoFocus: c = !1 } = e;
    return (0, r.jsx)(i.Z, {
        prefix: ''.concat(l.mf, '/'),
        value: t,
        onChange: (e) => {
            n(e.replace(/ /g, '-'));
        },
        maxLength: 25,
        error: s,
        disabled: a,
        className: o,
        autoFocus: c
    });
}
