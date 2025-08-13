n.d(t, { Z: () => l }), n(704826), n(35282);
var r = n(255367),
    s = n(263145),
    i = n(203377);
function l(e) {
    let { value: t, onChange: n, error: l, disabled: a, className: c, autoFocus: u = !1 } = e;
    return (0, r.jsx)(s.Z, {
        prefix: "".concat(i.mf, "/"),
        value: t,
        onChange: (e) => {
            n(e.replace(/ /g, "-"));
        },
        maxLength: 25,
        error: l,
        disabled: a,
        className: c,
        autoFocus: u,
    });
}
