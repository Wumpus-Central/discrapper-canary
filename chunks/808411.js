l.d(t, { A: () => p });
var a = l(627968),
    n = l(64700),
    i = l(735438),
    r = l(292666),
    o = l(691885),
    s = l(150934),
    u = l(834730),
    d = l(914410),
    c = l(52822);
let p = function () {
    let [e, t] = n.useState(0),
        [l, p] = n.useState(4),
        [m, b] = n.useState(2),
        [h, x] = n.useState(d.fh.LIGHT),
        [y, f] = n.useState(d.qP.BLUE),
        [v, g] = n.useState("darkslategray"),
        [E, S] = n.useState("blanchedalmond"),
        [C, j] = n.useState("pink"),
        [T, P] = n.useState(!0),
        I = n.useMemo(
            () =>
                Object.entries(d.fh).map((e) => {
                    let [t, l] = e;
                    return { id: l, label: t, value: l };
                }),
            [],
        ),
        A = n.useMemo(
            () =>
                Object.entries(d.qP).map((e) => {
                    let [t, l] = e;
                    return { id: l, label: t, value: l };
                }),
            [],
        );
    return (0, a.jsxs)(c.LB, {
        children: [
            (0, a.jsx)(d.Ay, {
                progress: m,
                minimum: e,
                maximum: l,
                weight: h,
                variant: y,
                override: { default: { background: v, gradientStart: E, gradientEnd: C } },
                glowing: T,
            }),
            (0, a.jsx)(c.nB, {}),
            (0, a.jsx)(c.MG, {
                children: (0, a.jsx)(r.k, {
                    type: "number",
                    value: m.toString(),
                    onChange: (t) => {
                        b((0, i.clamp)(+t, e, l));
                    },
                    label: `Progress ( ${e} - ${l} ) `,
                }),
            }),
            (0, a.jsx)(c.MG, {
                children: (0, a.jsx)(r.k, {
                    type: "number",
                    value: e.toString(),
                    onChange: (e) => {
                        0 > +e || +e >= l || (m < +e && b(+e), t(+e));
                    },
                    label: "Minimum Value",
                }),
            }),
            (0, a.jsx)(c.MG, {
                children: (0, a.jsx)(r.k, {
                    type: "number",
                    value: l.toString(),
                    onChange: (t) => {
                        +t <= e || 1 > +t || (m > +t && b(+t), p(+t));
                    },
                    label: "Maximum Value",
                }),
            }),
            (0, a.jsx)(c.MG, {
                children: (0, a.jsx)(o.l, {
                    label: "Variant",
                    hideLabel: !0,
                    placeholder: "Variant",
                    onSelectionChange: (e) => {
                        null !== e && f(e);
                    },
                    value: y,
                    options: A,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            }),
            (0, a.jsx)(c.MG, {
                children: (0, a.jsx)(o.l, {
                    label: "Weight",
                    selectionMode: "single",
                    placeholder: "Weight",
                    onSelectionChange: (e) => {
                        null !== e && x(e);
                    },
                    value: h,
                    options: I,
                }),
            }),
            (0, a.jsx)(c.MG, {
                children: (0, a.jsx)(s.S, {
                    label: "Glowing",
                    checked: T,
                    onChange: (e) => {
                        P(e);
                    },
                }),
            }),
            (0, a.jsx)(c.nB, {}),
            (0, a.jsx)(u.E, {
                variant: "text-lg/semibold",
                color: "text-feedback-critical",
                children: "To use overrides, the variant must be set to UNSET",
            }),
            (0, a.jsx)(u.E, {
                variant: "text-md/normal",
                children:
                    'Note: this component allows setting overrides per theme. For simplicity in this story, we only set the "default" override which applies to all themes',
            }),
            (0, a.jsx)(c.MG, {
                children: (0, a.jsx)(r.k, {
                    value: v,
                    onChange: (e) => {
                        g(e);
                    },
                    label: "Background (optional)",
                }),
            }),
            (0, a.jsx)(c.MG, {
                children: (0, a.jsx)(r.k, {
                    value: E,
                    onChange: (e) => {
                        S(e);
                    },
                    label: "Gradient Start",
                }),
            }),
            (0, a.jsx)(c.MG, {
                children: (0, a.jsx)(r.k, {
                    value: C,
                    onChange: (e) => {
                        j(e);
                    },
                    label: "Gradient End",
                }),
            }),
        ],
    });
};
