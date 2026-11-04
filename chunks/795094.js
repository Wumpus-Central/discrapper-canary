var n = r(514912),
    i = r(652664),
    o = r(802649);
r.d(
    t,
    {},
    {
        M: function (e) {
            let { description: t, errorMessage: r, isInvalid: a, validationState: s } = e,
                { labelProps: l, fieldProps: u } = (0, n.M)(e),
                c = (0, o.X1)([!!t, !!r, a, s]),
                f = (0, o.X1)([!!t, !!r, a, s]);
            return {
                labelProps: l,
                fieldProps: (u = (0, i.v)(u, {
                    "aria-describedby": [c, f, e["aria-describedby"]].filter(Boolean).join(" ") || void 0,
                })),
                descriptionProps: { id: c },
                errorMessageProps: { id: f },
            };
        },
    },
);
