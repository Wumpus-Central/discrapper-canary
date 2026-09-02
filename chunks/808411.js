l.d(t, { A: () => p });
var a = l(477900),
    n = l(582128),
    i = l(435558),
    r = l(95477),
    o = l(691885),
    s = l(150934),
    u = l(834730),
    d = l(914410),
    c = l(349738);
let p = function () {
    let [e, t] = n.useState(0),
        [l, p] = n.useState(4),
        [m, b] = n.useState(2),
        [h, x] = n.useState(d.fh.LIGHT),
        [f, y] = n.useState(d.qP.BLUE),
        [g, v] = n.useState("darkslategray"),
        [E, S] = n.useState("blanchedalmond"),
        [C, T] = n.useState("pink"),
        [j, A] = n.useState(!0),
        I = n.useMemo(
            () =>
                Object.entries(d.fh).map((e) => {
                    let [t, l] = e;
                    return { id: l, label: t, value: l };
                }),
            [],
        ),
        P = n.useMemo(
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
                variant: f,
                override: { default: { background: g, gradientStart: E, gradientEnd: C } },
                glowing: j,
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
                        null !== e && y(e);
                    },
                    value: f,
                    options: P,
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
                    checked: j,
                    onChange: (e) => {
                        A(e);
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
                    value: g,
                    onChange: (e) => {
                        v(e);
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
                        T(e);
                    },
                    label: "Gradient End",
                }),
            }),
        ],
    });
};
