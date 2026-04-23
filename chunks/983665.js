i.d(n, { default: () => O });
var e = i(627968),
    s = i(64700),
    a = i(562465),
    r = i(109802),
    l = i(452027),
    d = i(935462),
    o = i(534514),
    c = i(430690),
    x = i(834730),
    m = i(292666),
    h = i(825484),
    j = i(821609),
    g = i(512950),
    p = i(235986),
    u = i(957565),
    _ = i(677558),
    N = i(652215),
    v = i(985018),
    b = i(577796);
function C(t) {
    let { name: n, value: i } = t,
        [a, d] = s.useState(r.q.DEFAULT);
    return (0, e.jsx)("div", {
        className: b.lj,
        children: (0, e.jsx)(l.D, {
            label: n,
            children: (0, e.jsx)(r.e, {
                value: i,
                mode: a,
                supportsCopy: u.p5,
                onCopy: () => {
                    (0, u.C)(
                        i,
                        () => d(r.q.SUCCESS),
                        () => d(r.q.ERROR),
                    );
                },
            }),
        }),
    });
}
function O(t) {
    let { onClose: n, transitionState: i } = t,
        [r, l] = s.useState(""),
        [u, O] = s.useState(""),
        [k, y] = s.useState(null),
        [f, q] = s.useState(!1),
        [D, A] = s.useState("DOMAIN"),
        E = () => {
            q(!0),
                y(null),
                a.Bo.post({ url: N.Rsh.CONNECTION(N.fg2.DOMAIN, r), body: {}, rejectWithError: !1 })
                    .then(() => {
                        n();
                    })
                    .catch((t) => {
                        t.body?.proof && "DOMAIN" === D
                            ? (O(t.body.proof), A("PROOF_DNS"))
                            : y(t.body?.errors?.domain?._errors?.[0]?.message || t.body?.message || t.message);
                    })
                    .finally(() => {
                        q(!1);
                    });
        };
    return (0, e.jsxs)(d.EO, {
        "data-migration-pending": !0,
        transitionState: i,
        className: b.__invalid_modal,
        parentComponent: "DomainVerifyModal",
        children: [
            (0, e.jsxs)(d.rQ, {
                "data-migration-pending": !0,
                direction: p.A.Direction.VERTICAL,
                className: b.wx,
                separator: !1,
                children: [
                    (0, e.jsx)(o.D, { variant: "heading-xl/semibold", children: v.intl.string(v.t["7lo8+e"]) }),
                    (0, e.jsx)(d.s_, { "data-migration-pending": !0, className: b.b, onClick: n }),
                ],
            }),
            (0, e.jsxs)(c.t, {
                activeSlide: D,
                width: 440,
                children: [
                    (0, e.jsx)(c.q, {
                        id: "DOMAIN",
                        children: (0, e.jsxs)("form", {
                            onSubmit: (t) => {
                                t.preventDefault(), E();
                            },
                            children: [
                                (0, e.jsxs)(d.$m, {
                                    "data-migration-pending": !0,
                                    className: b.Qs,
                                    children: [
                                        (0, e.jsx)(x.E, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            className: b.h_,
                                            children: v.intl.string(v.t.NxPUqY),
                                        }),
                                        (0, e.jsx)(m.k, {
                                            label: v.intl.string(v.t["4jIAa+"]),
                                            error: k,
                                            onChange: l,
                                            placeholder: _.Ai,
                                            maxLength: 253,
                                            value: r,
                                            disabled: f,
                                            autoFocus: !0,
                                        }),
                                    ],
                                }),
                                (0, e.jsx)(d.jl, {
                                    "data-migration-pending": !0,
                                    className: b.qr,
                                    children: (0, e.jsxs)(h.e, {
                                        direction: "horizontal-reverse",
                                        children: [
                                            (0, e.jsx)(j.$, {
                                                variant: "primary",
                                                text: v.intl.string(v.t.PDTjLN),
                                                type: "submit",
                                                loading: f,
                                                disabled: "" === r,
                                            }),
                                            (0, e.jsx)(j.$, {
                                                variant: "secondary",
                                                text: v.intl.string(v.t["ETE/oC"]),
                                                onClick: n,
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                    (0, e.jsxs)(c.q, {
                        id: "PROOF_DNS",
                        children: [
                            (0, e.jsxs)(d.$m, {
                                "data-migration-pending": !0,
                                className: b.Qs,
                                children: [
                                    (0, e.jsxs)("ol", {
                                        className: b.p_,
                                        children: [
                                            (0, e.jsx)("li", {
                                                children: (0, e.jsx)(x.E, {
                                                    tag: "span",
                                                    variant: "text-md/normal",
                                                    children: v.intl.string(v.t["yOxxA+"]),
                                                }),
                                            }),
                                            (0, e.jsxs)("li", {
                                                children: [
                                                    (0, e.jsx)(x.E, {
                                                        tag: "span",
                                                        variant: "text-md/normal",
                                                        children: v.intl.string(v.t.cSURbq),
                                                    }),
                                                    (0, e.jsxs)("div", {
                                                        className: b.st,
                                                        children: [
                                                            (0, e.jsx)(C, {
                                                                name: v.intl.string(v.t.GL3q7k),
                                                                value: (0, _.hE)(r),
                                                            }),
                                                            (0, e.jsx)(C, {
                                                                name: v.intl.string(v.t.Ccmixu),
                                                                value: "TXT",
                                                            }),
                                                            (0, e.jsx)(C, {
                                                                name: v.intl.string(v.t.PVLriT),
                                                                value: u,
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, e.jsx)(g.p, {
                                        messageType: g.Y.INFO,
                                        className: b.Qq,
                                        children: v.intl.string(v.t.CUBxDB),
                                    }),
                                    null != k &&
                                        (0, e.jsx)(x.E, {
                                            variant: "text-sm/normal",
                                            color: "text-feedback-critical",
                                            className: b.Qq,
                                            children: k,
                                        }),
                                ],
                            }),
                            (0, e.jsxs)(d.jl, {
                                "data-migration-pending": !0,
                                className: b.qr,
                                direction: p.A.Direction.HORIZONTAL,
                                children: [
                                    (0, e.jsx)(j.$, {
                                        variant: "secondary",
                                        text: v.intl.string(v.t["13/7kX"]),
                                        onClick: () => {
                                            A("DOMAIN"), y(null);
                                        },
                                    }),
                                    (0, e.jsxs)("div", {
                                        className: b.Um,
                                        children: [
                                            (0, e.jsx)("div", {
                                                "data-button-hoisted-classname-wrapper": !0,
                                                className: b.__invalid_switchButton,
                                                children: (0, e.jsx)(j.$, {
                                                    variant: "secondary",
                                                    text: v.intl.string(v.t.CkfdNx),
                                                    onClick: () => {
                                                        A("PROOF_HTTP"), y(null);
                                                    },
                                                }),
                                            }),
                                            (0, e.jsx)(j.$, {
                                                variant: "primary",
                                                text: v.intl.string(v.t["13ofGu"]),
                                                loading: f,
                                                onClick: E,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, e.jsxs)(c.q, {
                        id: "PROOF_HTTP",
                        children: [
                            (0, e.jsxs)(d.$m, {
                                "data-migration-pending": !0,
                                className: b.Qs,
                                children: [
                                    (0, e.jsx)(x.E, {
                                        tag: "span",
                                        variant: "text-md/normal",
                                        children: v.intl.string(v.t.p4ql7y),
                                    }),
                                    (0, e.jsxs)("div", {
                                        className: b.eX,
                                        children: [
                                            (0, e.jsx)(C, { name: v.intl.string(v.t.GL3q7k), value: (0, _.uu)(r) }),
                                            (0, e.jsx)(C, { name: v.intl.string(v.t.PVLriT), value: u }),
                                        ],
                                    }),
                                    null != k &&
                                        (0, e.jsx)(x.E, {
                                            variant: "text-sm/normal",
                                            color: "text-feedback-critical",
                                            className: b.Qq,
                                            children: k,
                                        }),
                                ],
                            }),
                            (0, e.jsxs)(d.jl, {
                                "data-migration-pending": !0,
                                className: b.qr,
                                direction: p.A.Direction.HORIZONTAL,
                                children: [
                                    (0, e.jsx)(j.$, {
                                        variant: "secondary",
                                        text: v.intl.string(v.t["13/7kX"]),
                                        onClick: () => {
                                            A("DOMAIN"), y(null);
                                        },
                                    }),
                                    (0, e.jsxs)("div", {
                                        className: b.Um,
                                        children: [
                                            (0, e.jsx)("div", {
                                                "data-button-hoisted-classname-wrapper": !0,
                                                className: b.__invalid_switchButton,
                                                children: (0, e.jsx)(j.$, {
                                                    variant: "secondary",
                                                    text: v.intl.string(v.t.RhJMVQ),
                                                    onClick: () => {
                                                        A("PROOF_DNS"), y(null);
                                                    },
                                                }),
                                            }),
                                            (0, e.jsx)(j.$, {
                                                variant: "primary",
                                                text: v.intl.string(v.t["13ofGu"]),
                                                loading: f,
                                                onClick: E,
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
