l.d(t, { A: () => u });
var a = l(627968),
    n = l(64700),
    r = l(735438),
    i = l(397927),
    s = l(613566),
    o = l(252561);
let u = () => {
    let [e, t] = n.useState(0),
        [l, u] = n.useState(4),
        [c, d] = n.useState(2),
        [p, m] = n.useState(s.fh.LIGHT),
        [h, x] = n.useState(s.qP.BLUE),
        [b, g] = n.useState("darkslategray"),
        [y, E] = n.useState("blanchedalmond"),
        [f, v] = n.useState("pink"),
        [S, j] = n.useState(!0),
        T = n.useMemo(
            () =>
                Object.entries(s.fh).map((e) => {
                    let [t, l] = e;
                    return { id: l, label: t, value: l };
                }),
            [],
        ),
        C = n.useMemo(
            () =>
                Object.entries(s.qP).map((e) => {
                    let [t, l] = e;
                    return { id: l, label: t, value: l };
                }),
            [],
        );
    return (0, a.jsxs)(o.LB, {
        children: [
            (0, a.jsx)(s.Ay, {
                progress: c,
                minimum: e,
                maximum: l,
                weight: p,
                variant: h,
                override: { default: { background: b, gradientStart: y, gradientEnd: f } },
                glowing: S,
            }),
            (0, a.jsx)(o.nB, {}),
            (0, a.jsx)(o.MG, {
                children: (0, a.jsx)(i.ksK, {
                    type: "number",
                    value: c.toString(),
                    onChange: (t) => {
                        d((0, r.clamp)(+t, e, l));
                    },
                    label: `Progress ( ${e} - ${l} ) `,
                }),
            }),
            (0, a.jsx)(o.MG, {
                children: (0, a.jsx)(i.ksK, {
                    type: "number",
                    value: e.toString(),
                    onChange: (e) => {
                        0 > +e || +e >= l || (c < +e && d(+e), t(+e));
                    },
                    label: "Minimum Value",
                }),
            }),
            (0, a.jsx)(o.MG, {
                children: (0, a.jsx)(i.ksK, {
                    type: "number",
                    value: l.toString(),
                    onChange: (t) => {
                        +t <= e || 1 > +t || (c > +t && d(+t), u(+t));
                    },
                    label: "Maximum Value",
                }),
            }),
            (0, a.jsx)(o.MG, {
                children: (0, a.jsx)(i.l6P, {
                    label: "Variant",
                    hideLabel: !0,
                    placeholder: "Variant",
                    onSelectionChange: (e) => {
                        null !== e && x(e);
                    },
                    value: h,
                    options: C,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            }),
            (0, a.jsx)(o.MG, {
                children: (0, a.jsx)(i.l6P, {
                    label: "Weight",
                    selectionMode: "single",
                    placeholder: "Weight",
                    onSelectionChange: (e) => {
                        null !== e && m(e);
                    },
                    value: p,
                    options: T,
                }),
            }),
            (0, a.jsx)(o.MG, {
                children: (0, a.jsx)(i.Checkbox, {
                    label: "Glowing",
                    checked: S,
                    onChange: (e) => {
                        j(e);
                    },
                }),
            }),
            (0, a.jsx)(o.nB, {}),
            (0, a.jsx)(i.Text, {
                variant: "text-lg/semibold",
                color: "text-feedback-critical",
                children: "To use overrides, the variant must be set to UNSET",
            }),
            (0, a.jsx)(i.Text, {
                variant: "text-md/normal",
                children:
                    'Note: this component allows setting overrides per theme. For simplicity in this story, we only set the "default" override which applies to all themes',
            }),
            (0, a.jsx)(o.MG, {
                children: (0, a.jsx)(i.ksK, {
                    value: b,
                    onChange: (e) => {
                        g(e);
                    },
                    label: "Background (optional)",
                }),
            }),
            (0, a.jsx)(o.MG, {
                children: (0, a.jsx)(i.ksK, {
                    value: y,
                    onChange: (e) => {
                        E(e);
                    },
                    label: "Gradient Start",
                }),
            }),
            (0, a.jsx)(o.MG, {
                children: (0, a.jsx)(i.ksK, {
                    value: f,
                    onChange: (e) => {
                        v(e);
                    },
                    label: "Gradient End",
                }),
            }),
        ],
    });
};
