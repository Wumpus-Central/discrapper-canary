n.d(e, { default: () => C });
var i = n(627968),
    s = n(64700),
    a = n(562465),
    r = n(109802),
    l = n(452027),
    c = n(935462),
    o = n(534514),
    d = n(430690),
    p = n(834730),
    u = n(292666),
    f = n(825484),
    h = n(821609),
    x = n(512950),
    m = n(235986),
    j = n(957565),
    _ = n(677558),
    g = n(652215),
    N = n(985018),
    b = n(577796);
function y(t) {
    let { name: e, value: n } = t,
        [a, c] = s.useState(r.q.DEFAULT);
    return (0, i.jsx)("div", {
        className: b.lj,
        children: (0, i.jsx)(l.D, {
            label: e,
            children: (0, i.jsx)(r.e, {
                value: n,
                mode: a,
                supportsCopy: j.p5,
                onCopy: () => {
                    (0, j.C)(
                        n,
                        () => c(r.q.SUCCESS),
                        () => c(r.q.ERROR),
                    );
                },
            }),
        }),
    });
}
function C(t) {
    let { onClose: e, transitionState: n } = t,
        [r, l] = s.useState(""),
        [j, C] = s.useState(""),
        [v, R] = s.useState(null),
        [k, I] = s.useState(!1),
        [D, E] = s.useState("DOMAIN"),
        O = () => {
            I(!0),
                R(null),
                a.Bo.post({ url: g.Rsh.CONNECTION(g.fg2.DOMAIN, r), body: {}, rejectWithError: !1 })
                    .then(() => {
                        e();
                    })
                    .catch((t) => {
                        t.body?.proof && "DOMAIN" === D
                            ? (C(t.body.proof), E("PROOF_DNS"))
                            : R(t.body?.errors?.domain?._errors?.[0]?.message || t.body?.message || t.message);
                    })
                    .finally(() => {
                        I(!1);
                    });
        };
    return (0, i.jsxs)(c.EO, {
        "data-migration-pending": !0,
        transitionState: n,
        className: b.__invalid_modal,
        parentComponent: "DomainVerifyModal",
        children: [
            (0, i.jsxs)(c.rQ, {
                "data-migration-pending": !0,
                direction: m.A.Direction.VERTICAL,
                className: b.wx,
                separator: !1,
                children: [
                    (0, i.jsx)(o.D, { variant: "heading-xl/semibold", children: N.intl.string(N.t["7lo8+e"]) }),
                    (0, i.jsx)(c.s_, { "data-migration-pending": !0, className: b.b, onClick: e }),
                ],
            }),
            (0, i.jsxs)(d.t, {
                activeSlide: D,
                width: 440,
                children: [
                    (0, i.jsx)(d.q, {
                        id: "DOMAIN",
                        children: (0, i.jsxs)("form", {
                            onSubmit: (t) => {
                                t.preventDefault(), O();
                            },
                            children: [
                                (0, i.jsxs)(c.$m, {
                                    "data-migration-pending": !0,
                                    className: b.Qs,
                                    children: [
                                        (0, i.jsx)(p.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            className: b.h_,
                                            children: N.intl.string(N.t.NxPUqY),
                                        }),
                                        (0, i.jsx)(u.k, {
                                            label: N.intl.string(N.t["4jIAa+"]),
                                            error: v,
                                            onChange: l,
                                            placeholder: _.Ai,
                                            maxLength: 253,
                                            value: r,
                                            disabled: k,
                                            autoFocus: !0,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(c.jl, {
                                    "data-migration-pending": !0,
                                    className: b.qr,
                                    children: (0, i.jsxs)(f.e, {
                                        direction: "horizontal-reverse",
                                        children: [
                                            (0, i.jsx)(h.$, {
                                                variant: "primary",
                                                text: N.intl.string(N.t.PDTjLN),
                                                type: "submit",
                                                loading: k,
                                                disabled: "" === r,
                                            }),
                                            (0, i.jsx)(h.$, {
                                                variant: "secondary",
                                                text: N.intl.string(N.t["ETE/oC"]),
                                                onClick: e,
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                    (0, i.jsxs)(d.q, {
                        id: "PROOF_DNS",
                        children: [
                            (0, i.jsxs)(c.$m, {
                                "data-migration-pending": !0,
                                className: b.Qs,
                                children: [
                                    (0, i.jsxs)("ol", {
                                        className: b.p_,
                                        children: [
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(p.E, {
                                                    tag: "span",
                                                    variant: "text-md/normal",
                                                    children: N.intl.string(N.t["yOxxA+"]),
                                                }),
                                            }),
                                            (0, i.jsxs)("li", {
                                                children: [
                                                    (0, i.jsx)(p.E, {
                                                        tag: "span",
                                                        variant: "text-md/normal",
                                                        children: N.intl.string(N.t.cSURbq),
                                                    }),
                                                    (0, i.jsxs)("div", {
                                                        className: b.st,
                                                        children: [
                                                            (0, i.jsx)(y, {
                                                                name: N.intl.string(N.t.GL3q7k),
                                                                value: (0, _.hE)(r),
                                                            }),
                                                            (0, i.jsx)(y, {
                                                                name: N.intl.string(N.t.Ccmixu),
                                                                value: "TXT",
                                                            }),
                                                            (0, i.jsx)(y, {
                                                                name: N.intl.string(N.t.PVLriT),
                                                                value: j,
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(x.p, {
                                        messageType: x.Y.INFO,
                                        className: b.Qq,
                                        children: N.intl.string(N.t.CUBxDB),
                                    }),
                                    null != v &&
                                        (0, i.jsx)(p.E, {
                                            variant: "text-sm/normal",
                                            color: "text-feedback-critical",
                                            className: b.Qq,
                                            children: v,
                                        }),
                                ],
                            }),
                            (0, i.jsxs)(c.jl, {
                                "data-migration-pending": !0,
                                className: b.qr,
                                direction: m.A.Direction.HORIZONTAL,
                                children: [
                                    (0, i.jsx)(h.$, {
                                        variant: "secondary",
                                        text: N.intl.string(N.t["13/7kX"]),
                                        onClick: () => {
                                            E("DOMAIN"), R(null);
                                        },
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: b.Um,
                                        children: [
                                            (0, i.jsx)("div", {
                                                "data-button-hoisted-classname-wrapper": !0,
                                                className: b.__invalid_switchButton,
                                                children: (0, i.jsx)(h.$, {
                                                    variant: "secondary",
                                                    text: N.intl.string(N.t.CkfdNx),
                                                    onClick: () => {
                                                        E("PROOF_HTTP"), R(null);
                                                    },
                                                }),
                                            }),
                                            (0, i.jsx)(h.$, {
                                                variant: "primary",
                                                text: N.intl.string(N.t["13ofGu"]),
                                                loading: k,
                                                onClick: O,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)(d.q, {
                        id: "PROOF_HTTP",
                        children: [
                            (0, i.jsxs)(c.$m, {
                                "data-migration-pending": !0,
                                className: b.Qs,
                                children: [
                                    (0, i.jsx)(p.E, {
                                        tag: "span",
                                        variant: "text-md/normal",
                                        children: N.intl.string(N.t.p4ql7y),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: b.eX,
                                        children: [
                                            (0, i.jsx)(y, { name: N.intl.string(N.t.GL3q7k), value: (0, _.uu)(r) }),
                                            (0, i.jsx)(y, { name: N.intl.string(N.t.PVLriT), value: j }),
                                        ],
                                    }),
                                    null != v &&
                                        (0, i.jsx)(p.E, {
                                            variant: "text-sm/normal",
                                            color: "text-feedback-critical",
                                            className: b.Qq,
                                            children: v,
                                        }),
                                ],
                            }),
                            (0, i.jsxs)(c.jl, {
                                "data-migration-pending": !0,
                                className: b.qr,
                                direction: m.A.Direction.HORIZONTAL,
                                children: [
                                    (0, i.jsx)(h.$, {
                                        variant: "secondary",
                                        text: N.intl.string(N.t["13/7kX"]),
                                        onClick: () => {
                                            E("DOMAIN"), R(null);
                                        },
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: b.Um,
                                        children: [
                                            (0, i.jsx)("div", {
                                                "data-button-hoisted-classname-wrapper": !0,
                                                className: b.__invalid_switchButton,
                                                children: (0, i.jsx)(h.$, {
                                                    variant: "secondary",
                                                    text: N.intl.string(N.t.RhJMVQ),
                                                    onClick: () => {
                                                        E("PROOF_DNS"), R(null);
                                                    },
                                                }),
                                            }),
                                            (0, i.jsx)(h.$, {
                                                variant: "primary",
                                                text: N.intl.string(N.t["13ofGu"]),
                                                loading: k,
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
