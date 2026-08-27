l.d(t, { A: () => p });
var a = l(477900),
    n = l(582128),
    i = l(435558),
    r = l(95477),
    o = l(691885),
    s = l(150934),
    u = l(834730),
    c = l(914410),
    d = l(349738);
let p = function () {
    let [e, t] = n.useState(0),
        [l, p] = n.useState(4),
        [m, h] = n.useState(2),
        [b, x] = n.useState(c.fh.LIGHT),
        [f, g] = n.useState(c.qP.BLUE),
        [E, y] = n.useState("darkslategray"),
        [v, C] = n.useState("blanchedalmond"),
        [S, j] = n.useState("pink"),
        [T, A] = n.useState(!0),
        I = n.useMemo(
            () =>
                Object.entries(c.fh).map((e) => {
                    let [t, l] = e;
                    return { id: l, label: t, value: l };
                }),
            [],
        ),
        _ = n.useMemo(
            () =>
                Object.entries(c.qP).map((e) => {
                    let [t, l] = e;
                    return { id: l, label: t, value: l };
                }),
            [],
        );
    return (0, a.jsxs)(d.LB, {
        children: [
            (0, a.jsx)(c.Ay, {
                progress: m,
                minimum: e,
                maximum: l,
                weight: b,
                variant: f,
                override: { default: { background: E, gradientStart: v, gradientEnd: S } },
                glowing: T,
            }),
            (0, a.jsx)(d.nB, {}),
            (0, a.jsx)(d.MG, {
                children: (0, a.jsx)(r.k, {
                    type: "number",
                    value: m.toString(),
                    onChange: (t) => {
                        h((0, i.clamp)(+t, e, l));
                    },
                    label: `Progress ( ${e} - ${l} ) `,
                }),
            }),
            (0, a.jsx)(d.MG, {
                children: (0, a.jsx)(r.k, {
                    type: "number",
                    value: e.toString(),
                    onChange: (e) => {
                        0 > +e || +e >= l || (m < +e && h(+e), t(+e));
                    },
                    label: "Minimum Value",
                }),
            }),
            (0, a.jsx)(d.MG, {
                children: (0, a.jsx)(r.k, {
                    type: "number",
                    value: l.toString(),
                    onChange: (t) => {
                        +t <= e || 1 > +t || (m > +t && h(+t), p(+t));
                    },
                    label: "Maximum Value",
                }),
            }),
            (0, a.jsx)(d.MG, {
                children: (0, a.jsx)(o.l, {
                    label: "Variant",
                    hideLabel: !0,
                    placeholder: "Variant",
                    onSelectionChange: (e) => {
                        null !== e && g(e);
                    },
                    value: f,
                    options: _,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            }),
            (0, a.jsx)(d.MG, {
                children: (0, a.jsx)(o.l, {
                    label: "Weight",
                    selectionMode: "single",
                    placeholder: "Weight",
                    onSelectionChange: (e) => {
                        null !== e && x(e);
                    },
                    value: b,
                    options: I,
                }),
            }),
            (0, a.jsx)(d.MG, {
                children: (0, a.jsx)(s.S, {
                    label: "Glowing",
                    checked: T,
                    onChange: (e) => {
                        A(e);
                    },
                }),
            }),
            (0, a.jsx)(d.nB, {}),
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
            (0, a.jsx)(d.MG, {
                children: (0, a.jsx)(r.k, {
                    value: E,
                    onChange: (e) => {
                        y(e);
                    },
                    label: "Background (optional)",
                }),
            }),
            (0, a.jsx)(d.MG, {
                children: (0, a.jsx)(r.k, {
                    value: v,
                    onChange: (e) => {
                        C(e);
                    },
                    label: "Gradient Start",
                }),
            }),
            (0, a.jsx)(d.MG, {
                children: (0, a.jsx)(r.k, {
                    value: S,
                    onChange: (e) => {
                        j(e);
                    },
                    label: "Gradient End",
                }),
            }),
        ],
    });
};
