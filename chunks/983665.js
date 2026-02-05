i.d(n, { default: () => u });
var e = i(627968),
    s = i(64700),
    a = i(562465),
    r = i(397927),
    l = i(235986),
    o = i(957565),
    d = i(677558),
    c = i(652215),
    x = i(985018),
    m = i(159621);
function h(t) {
    let { name: n, value: i } = t,
        [a, l] = s.useState(r.qCr.DEFAULT);
    return (0, e.jsx)("div", {
        className: m.lj,
        children: (0, e.jsx)(r.D0$, {
            label: n,
            children: (0, e.jsx)(r.e2O, {
                value: i,
                mode: a,
                supportsCopy: o.p5,
                onCopy: () => {
                    (0, o.C)(
                        i,
                        () => l(r.qCr.SUCCESS),
                        () => l(r.qCr.ERROR),
                    );
                },
            }),
        }),
    });
}
function u(t) {
    let { onClose: n, transitionState: i } = t,
        [o, u] = s.useState(""),
        [j, g] = s.useState(""),
        [p, _] = s.useState(null),
        [N, v] = s.useState(!1),
        [b, C] = s.useState("DOMAIN"),
        O = () => {
            v(!0),
                _(null),
                a.Bo.post({ url: c.Rsh.CONNECTION(c.fg2.DOMAIN, o), body: {}, rejectWithError: !1 })
                    .then(() => {
                        n();
                    })
                    .catch((t) => {
                        t.body?.proof && "DOMAIN" === b
                            ? (g(t.body.proof), C("PROOF_DNS"))
                            : _(t.body?.errors?.domain?._errors?.[0]?.message || t.body?.message || t.message);
                    })
                    .finally(() => {
                        v(!1);
                    });
        };
    return (0, e.jsxs)(r.EOs, {
        "data-migration-pending": !0,
        transitionState: i,
        className: m.__invalid_modal,
        parentComponent: "DomainVerifyModal",
        children: [
            (0, e.jsxs)(r.rQ0, {
                "data-migration-pending": !0,
                direction: l.A.Direction.VERTICAL,
                className: m.wx,
                separator: !1,
                children: [
                    (0, e.jsx)(r.Heading, { variant: "heading-xl/semibold", children: x.intl.string(x.t["7lo8+e"]) }),
                    (0, e.jsx)(r.s_y, { "data-migration-pending": !0, className: m.b, onClick: n }),
                ],
            }),
            (0, e.jsxs)(r.tN_, {
                activeSlide: b,
                width: 440,
                children: [
                    (0, e.jsx)(r.q7S, {
                        id: "DOMAIN",
                        children: (0, e.jsxs)("form", {
                            onSubmit: (t) => {
                                t.preventDefault(), O();
                            },
                            children: [
                                (0, e.jsxs)(r.$mQ, {
                                    "data-migration-pending": !0,
                                    className: m.Qs,
                                    children: [
                                        (0, e.jsx)(r.Text, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            className: m.h_,
                                            children: x.intl.string(x.t.NxPUqY),
                                        }),
                                        (0, e.jsx)(r.ksK, {
                                            label: x.intl.string(x.t["4jIAa+"]),
                                            error: p,
                                            onChange: u,
                                            placeholder: d.Ai,
                                            maxLength: 253,
                                            value: o,
                                            disabled: N,
                                            autoFocus: !0,
                                        }),
                                    ],
                                }),
                                (0, e.jsx)(r.jlY, {
                                    "data-migration-pending": !0,
                                    className: m.qr,
                                    children: (0, e.jsxs)(r.ButtonGroup, {
                                        direction: "horizontal-reverse",
                                        children: [
                                            (0, e.jsx)(r.Button, {
                                                variant: "primary",
                                                text: x.intl.string(x.t.PDTjLN),
                                                type: "submit",
                                                loading: N,
                                                disabled: "" === o,
                                            }),
                                            (0, e.jsx)(r.Button, {
                                                variant: "secondary",
                                                text: x.intl.string(x.t["ETE/oC"]),
                                                onClick: n,
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                    (0, e.jsxs)(r.q7S, {
                        id: "PROOF_DNS",
                        children: [
                            (0, e.jsxs)(r.$mQ, {
                                "data-migration-pending": !0,
                                className: m.Qs,
                                children: [
                                    (0, e.jsxs)("ol", {
                                        className: m.p_,
                                        children: [
                                            (0, e.jsx)("li", {
                                                children: (0, e.jsx)(r.Text, {
                                                    tag: "span",
                                                    variant: "text-md/normal",
                                                    children: x.intl.string(x.t["yOxxA+"]),
                                                }),
                                            }),
                                            (0, e.jsxs)("li", {
                                                children: [
                                                    (0, e.jsx)(r.Text, {
                                                        tag: "span",
                                                        variant: "text-md/normal",
                                                        children: x.intl.string(x.t.cSURbq),
                                                    }),
                                                    (0, e.jsxs)("div", {
                                                        className: m.st,
                                                        children: [
                                                            (0, e.jsx)(h, {
                                                                name: x.intl.string(x.t.GL3q7k),
                                                                value: (0, d.hE)(o),
                                                            }),
                                                            (0, e.jsx)(h, {
                                                                name: x.intl.string(x.t.Ccmixu),
                                                                value: "TXT",
                                                            }),
                                                            (0, e.jsx)(h, {
                                                                name: x.intl.string(x.t.PVLriT),
                                                                value: j,
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, e.jsx)(r.po8, {
                                        messageType: r.YCn.INFO,
                                        className: m.Qq,
                                        children: x.intl.string(x.t.CUBxDB),
                                    }),
                                    null != p &&
                                        (0, e.jsx)(r.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-feedback-critical",
                                            className: m.Qq,
                                            children: p,
                                        }),
                                ],
                            }),
                            (0, e.jsxs)(r.jlY, {
                                "data-migration-pending": !0,
                                className: m.qr,
                                direction: l.A.Direction.HORIZONTAL,
                                children: [
                                    (0, e.jsx)(r.Button, {
                                        variant: "secondary",
                                        text: x.intl.string(x.t["13/7kX"]),
                                        onClick: () => {
                                            C("DOMAIN"), _(null);
                                        },
                                    }),
                                    (0, e.jsxs)("div", {
                                        className: m.Um,
                                        children: [
                                            (0, e.jsx)("div", {
                                                "data-button-hoisted-classname-wrapper": !0,
                                                className: m.__invalid_switchButton,
                                                children: (0, e.jsx)(r.Button, {
                                                    variant: "secondary",
                                                    text: x.intl.string(x.t.CkfdNx),
                                                    onClick: () => {
                                                        C("PROOF_HTTP"), _(null);
                                                    },
                                                }),
                                            }),
                                            (0, e.jsx)(r.Button, {
                                                variant: "primary",
                                                text: x.intl.string(x.t["13ofGu"]),
                                                loading: N,
                                                onClick: O,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, e.jsxs)(r.q7S, {
                        id: "PROOF_HTTP",
                        children: [
                            (0, e.jsxs)(r.$mQ, {
                                "data-migration-pending": !0,
                                className: m.Qs,
                                children: [
                                    (0, e.jsx)(r.Text, {
                                        tag: "span",
                                        variant: "text-md/normal",
                                        children: x.intl.string(x.t.p4ql7y),
                                    }),
                                    (0, e.jsxs)("div", {
                                        className: m.eX,
                                        children: [
                                            (0, e.jsx)(h, { name: x.intl.string(x.t.GL3q7k), value: (0, d.uu)(o) }),
                                            (0, e.jsx)(h, { name: x.intl.string(x.t.PVLriT), value: j }),
                                        ],
                                    }),
                                    null != p &&
                                        (0, e.jsx)(r.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-feedback-critical",
                                            className: m.Qq,
                                            children: p,
                                        }),
                                ],
                            }),
                            (0, e.jsxs)(r.jlY, {
                                "data-migration-pending": !0,
                                className: m.qr,
                                direction: l.A.Direction.HORIZONTAL,
                                children: [
                                    (0, e.jsx)(r.Button, {
                                        variant: "secondary",
                                        text: x.intl.string(x.t["13/7kX"]),
                                        onClick: () => {
                                            C("DOMAIN"), _(null);
                                        },
                                    }),
                                    (0, e.jsxs)("div", {
                                        className: m.Um,
                                        children: [
                                            (0, e.jsx)("div", {
                                                "data-button-hoisted-classname-wrapper": !0,
                                                className: m.__invalid_switchButton,
                                                children: (0, e.jsx)(r.Button, {
                                                    variant: "secondary",
                                                    text: x.intl.string(x.t.RhJMVQ),
                                                    onClick: () => {
                                                        C("PROOF_DNS"), _(null);
                                                    },
                                                }),
                                            }),
                                            (0, e.jsx)(r.Button, {
                                                variant: "primary",
                                                text: x.intl.string(x.t["13ofGu"]),
                                                loading: N,
                                                onClick: O,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
