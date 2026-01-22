n.d(t, { A: () => c }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n(397927),
    o = n(613566),
    l = n(252561);
let c = () => {
    let [e, t] = i.useState(0),
        [n, c] = i.useState(4),
        [u, d] = i.useState(2),
        [f, p] = i.useState(o.fh.LIGHT),
        [_, h] = i.useState(o.qP.BLUE),
        [m, g] = i.useState("darkslategray"),
        [E, b] = i.useState("blanchedalmond"),
        [y, O] = i.useState("pink"),
        A = i.useMemo(
            () =>
                Object.entries(o.fh).map((e) => {
                    let [t, n] = e;
                    return {
                        id: n,
                        label: t,
                        value: n,
                    };
                }),
            [],
        ),
        v = i.useMemo(
            () =>
                Object.entries(o.qP).map((e) => {
                    let [t, n] = e;
                    return {
                        id: n,
                        label: t,
                        value: n,
                    };
                }),
            [],
        );
    return (0, r.jsxs)(l.LB, {
        children: [
            (0, r.jsx)(o.Ay, {
                progress: u,
                minimum: e,
                maximum: n,
                weight: f,
                variant: _,
                override: {
                    default: {
                        background: m,
                        gradientStart: E,
                        gradientEnd: y,
                    },
                },
            }),
            (0, r.jsx)(l.nB, {}),
            (0, r.jsx)(l.MG, {
                children: (0, r.jsx)(s.ksK, {
                    type: "number",
                    value: u.toString(),
                    onChange: (t) => {
                        d((0, a.clamp)(+t, e, n));
                    },
                    label: "Progress ( ".concat(e, " - ").concat(n, " ) "),
                }),
            }),
            (0, r.jsx)(l.MG, {
                children: (0, r.jsx)(s.ksK, {
                    type: "number",
                    value: e.toString(),
                    onChange: (e) => {
                        0 > +e || +e >= n || (u < +e && d(+e), t(+e));
                    },
                    label: "Minimum Value",
                }),
            }),
            (0, r.jsx)(l.MG, {
                children: (0, r.jsx)(s.ksK, {
                    type: "number",
                    value: n.toString(),
                    onChange: (t) => {
                        +t <= e || 1 > +t || (u > +t && d(+t), c(+t));
                    },
                    label: "Maximum Value",
                }),
            }),
            (0, r.jsx)(l.MG, {
                children: (0, r.jsx)(s.l6P, {
                    label: "Variant",
                    hideLabel: !0,
                    placeholder: "Variant",
                    onSelectionChange: (e) => {
                        null !== e && h(e);
                    },
                    value: _,
                    options: v,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            }),
            (0, r.jsx)(l.MG, {
                children: (0, r.jsx)(s.l6P, {
                    label: "Weight",
                    selectionMode: "single",
                    placeholder: "Weight",
                    onSelectionChange: (e) => {
                        null !== e && p(e);
                    },
                    value: f,
                    options: A,
                }),
            }),
            (0, r.jsx)(l.nB, {}),
            (0, r.jsx)(s.Text, {
                variant: "text-lg/semibold",
                color: "text-feedback-critical",
                children: "To use overrides, the variant must be set to UNSET",
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                children:
                    'Note: this component allows setting overrides per theme. For simplicity in this story, we only set the "default" override which applies to all themes',
            }),
            (0, r.jsx)(l.MG, {
                children: (0, r.jsx)(s.ksK, {
                    value: m,
                    onChange: (e) => {
                        g(e);
                    },
                    label: "Background (optional)",
                }),
            }),
            (0, r.jsx)(l.MG, {
                children: (0, r.jsx)(s.ksK, {
                    value: E,
                    onChange: (e) => {
                        b(e);
                    },
                    label: "Gradient Start",
                }),
            }),
            (0, r.jsx)(l.MG, {
                children: (0, r.jsx)(s.ksK, {
                    value: y,
                    onChange: (e) => {
                        O(e);
                    },
                    label: "Gradient End",
                }),
            }),
        ],
    });
};
