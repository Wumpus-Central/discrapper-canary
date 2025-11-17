n.d(t, { Z: () => a }), n(704826), n(35282);
var r = n(54381),
    i = n(481060),
    l = n(203377);
function a(e) {
    let { value: t, onChange: n, error: a, disabled: s, autoFocus: o = !1 } = e;
    return (0, r.jsx)(i.oil, {
        leading: "".concat(l.mf, "/"),
        value: t,
        onChange: (e) => {
            n(e.replace(/ /g, "-"));
        },
        maxLength: 25,
        error: a,
        disabled: s,
        autoFocus: o,
    });
}
