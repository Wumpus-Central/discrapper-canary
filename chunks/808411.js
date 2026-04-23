l.d(t, { A: () => p });
var a = l(627968),
    n = l(64700),
    r = l(735438),
    i = l(292666),
    o = l(691885),
    s = l(150934),
    d = l(834730),
    c = l(914410),
    u = l(52822);
let p = () => {
    let [e, t] = n.useState(0),
        [l, p] = n.useState(4),
        [m, b] = n.useState(2),
        [h, x] = n.useState(c.fh.LIGHT),
        [y, g] = n.useState(c.qP.BLUE),
        [v, f] = n.useState("darkslategray"),
        [_, E] = n.useState("blanchedalmond"),
        [C, S] = n.useState("pink"),
        [j, T] = n.useState(!0),
        P = n.useMemo(
            () =>
                Object.entries(c.fh).map((e) => {
                    let [t, l] = e;
                    return { id: l, label: t, value: l };
                }),
            [],
        ),
        I = n.useMemo(
            () =>
                Object.entries(c.qP).map((e) => {
                    let [t, l] = e;
                    return { id: l, label: t, value: l };
                }),
            [],
        );
    return (0, a.jsxs)(u.LB, {
        children: [
            (0, a.jsx)(c.Ay, {
                progress: m,
                minimum: e,
                maximum: l,
                weight: h,
                variant: y,
                override: { default: { background: v, gradientStart: _, gradientEnd: C } },
                glowing: j,
            }),
            (0, a.jsx)(u.nB, {}),
            (0, a.jsx)(u.MG, {
                children: (0, a.jsx)(i.k, {
                    type: "number",
                    value: m.toString(),
                    onChange: (t) => {
                        b((0, r.clamp)(+t, e, l));
                    },
                    label: `Progress ( ${e} - ${l} ) `,
                }),
            }),
            (0, a.jsx)(u.MG, {
                children: (0, a.jsx)(i.k, {
                    type: "number",
                    value: e.toString(),
                    onChange: (e) => {
                        0 > +e || +e >= l || (m < +e && b(+e), t(+e));
                    },
                    label: "Minimum Value",
                }),
            }),
            (0, a.jsx)(u.MG, {
                children: (0, a.jsx)(i.k, {
                    type: "number",
                    value: l.toString(),
                    onChange: (t) => {
                        +t <= e || 1 > +t || (m > +t && b(+t), p(+t));
                    },
                    label: "Maximum Value",
                }),
            }),
            (0, a.jsx)(u.MG, {
                children: (0, a.jsx)(o.l, {
                    label: "Variant",
                    hideLabel: !0,
                    placeholder: "Variant",
                    onSelectionChange: (e) => {
                        null !== e && g(e);
                    },
                    value: y,
                    options: I,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            }),
            (0, a.jsx)(u.MG, {
                children: (0, a.jsx)(o.l, {
                    label: "Weight",
                    selectionMode: "single",
                    placeholder: "Weight",
                    onSelectionChange: (e) => {
                        null !== e && x(e);
                    },
                    value: h,
                    options: P,
                }),
            }),
            (0, a.jsx)(u.MG, {
                children: (0, a.jsx)(s.S, {
                    label: "Glowing",
                    checked: j,
                    onChange: (e) => {
                        T(e);
                    },
                }),
            }),
            (0, a.jsx)(u.nB, {}),
            (0, a.jsx)(d.E, {
                variant: "text-lg/semibold",
                color: "text-feedback-critical",
                children: "To use overrides, the variant must be set to UNSET",
            }),
            (0, a.jsx)(d.E, {
                variant: "text-md/normal",
                children:
                    'Note: this component allows setting overrides per theme. For simplicity in this story, we only set the "default" override which applies to all themes',
            }),
            (0, a.jsx)(u.MG, {
                children: (0, a.jsx)(i.k, {
                    value: v,
                    onChange: (e) => {
                        f(e);
                    },
                    label: "Background (optional)",
                }),
            }),
            (0, a.jsx)(u.MG, {
                children: (0, a.jsx)(i.k, {
                    value: _,
                    onChange: (e) => {
                        E(e);
                    },
                    label: "Gradient Start",
                }),
            }),
            (0, a.jsx)(u.MG, {
                children: (0, a.jsx)(i.k, {
                    value: C,
                    onChange: (e) => {
                        S(e);
                    },
                    label: "Gradient End",
                }),
            }),
        ],
    });
};
