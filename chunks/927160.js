(t.d(r, { Z: () => s }), t(704826), t(35282));
var n = t(255367),
    a = t(263145),
    i = t(203377);
function s(e) {
    let { value: r, onChange: t, error: s, disabled: l, className: o } = e;
    return (0, n.jsx)(a.Z, {
        prefix: ''.concat(i.mf, '/'),
        value: r,
        onChange: (e) => {
            t(e.replace(/ /g, '-'));
        },
        maxLength: 25,
        error: s,
        disabled: l,
        className: o
    });
}
