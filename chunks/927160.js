(n.d(t, { Z: () => s }), n(704826), n(35282));
var r = n(255367),
    i = n(263145),
    a = n(203377);
function s(e) {
    let { value: t, onChange: n, error: s, disabled: l, className: d } = e;
    return (0, r.jsx)(i.Z, {
        prefix: ''.concat(a.mf, '/'),
        value: t,
        onChange: (e) => {
            n(e.replace(/ /g, '-'));
        },
        maxLength: 25,
        error: s,
        disabled: l,
        className: d
    });
}
