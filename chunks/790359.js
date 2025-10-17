n.d(t, { Z: () => l }), n(704826), n(35282);
var r = n(951288),
    i = n(481060),
    s = n(203377);
function l(e) {
    let { value: t, onChange: n, error: l, disabled: a, autoFocus: c = !1 } = e;
    return (0, r.jsx)(i.oil, {
        leading: "".concat(s.mf, "/"),
        value: t,
        onChange: (e) => {
            n(e.replace(/ /g, "-"));
        },
        maxLength: 25,
        error: l,
        disabled: a,
        autoFocus: c,
    });
}
