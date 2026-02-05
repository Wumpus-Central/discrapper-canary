"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n(397927),
    o = n(613566),
    l = n(252561);
let u = () => {
    let [e, t] = i.useState(0),
        [n, u] = i.useState(4),
        [c, d] = i.useState(2),
        [_, f] = i.useState(o.fh.LIGHT),
        [p, h] = i.useState(o.qP.BLUE),
        [m, g] = i.useState("darkslategray"),
        [E, A] = i.useState("blanchedalmond"),
        [I, T] = i.useState("pink"),
        y = i.useMemo(
            () =>
                Object.entries(o.fh).map((e) => {
                    let [t, n] = e;
                    return { id: n, label: t, value: n };
                }),
            [],
        ),
        S = i.useMemo(
            () =>
                Object.entries(o.qP).map((e) => {
                    let [t, n] = e;
                    return { id: n, label: t, value: n };
                }),
            [],
        );
    return (0, r.jsxs)(l.LB, {
        children: [
            (0, r.jsx)(o.Ay, {
                progress: c,
                minimum: e,
                maximum: n,
                weight: _,
                variant: p,
                override: { default: { background: m, gradientStart: E, gradientEnd: I } },
            }),
            (0, r.jsx)(l.nB, {}),
            (0, r.jsx)(l.MG, {
                children: (0, r.jsx)(s.ksK, {
                    type: "number",
                    value: c.toString(),
                    onChange: (t) => {
                        d((0, a.clamp)(+t, e, n));
                    },
                    label: `Progress ( ${e} - ${n} ) `,
                }),
            }),
            (0, r.jsx)(l.MG, {
                children: (0, r.jsx)(s.ksK, {
                    type: "number",
                    value: e.toString(),
                    onChange: (e) => {
                        0 > +e || +e >= n || (c < +e && d(+e), t(+e));
                    },
                    label: "Minimum Value",
                }),
            }),
            (0, r.jsx)(l.MG, {
                children: (0, r.jsx)(s.ksK, {
                    type: "number",
                    value: n.toString(),
                    onChange: (t) => {
                        +t <= e || 1 > +t || (c > +t && d(+t), u(+t));
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
                    value: p,
                    options: S,
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
                        null !== e && f(e);
                    },
                    value: _,
                    options: y,
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
                        A(e);
                    },
                    label: "Gradient Start",
                }),
            }),
            (0, r.jsx)(l.MG, {
                children: (0, r.jsx)(s.ksK, {
                    value: I,
                    onChange: (e) => {
                        T(e);
                    },
                    label: "Gradient End",
                }),
            }),
        ],
    });
};
