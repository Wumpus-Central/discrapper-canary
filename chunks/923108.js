n.d(t, { U: () => o });
var r = n(669470),
    i = n(677061),
    a = n(43341);
function o(e) {
    let { description: t, errorMessage: n, isInvalid: o, validationState: s } = e,
        { labelProps: l, fieldProps: c } = (0, r.N)(e),
        u = (0, i.mp)([!!t, !!n, o, s]),
        d = (0, i.mp)([!!t, !!n, o, s]);
    return {
        labelProps: l,
        fieldProps: (c = (0, a.d)(c, {
            "aria-describedby": [u, d, e["aria-describedby"]].filter(Boolean).join(" ") || void 0,
        })),
        descriptionProps: { id: u },
        errorMessageProps: { id: d },
    };
}
