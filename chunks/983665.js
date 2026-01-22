e.d(n, {
    default: () => h,
}),
    e(896048),
    e(492834),
    e(228524);
var i = e(627968),
    a = e(64700),
    s = e(562465),
    l = e(397927),
    r = e(235986),
    d = e(957565),
    c = e(677558),
    o = e(652215),
    x = e(985018),
    m = e(159621);

function u(t) {
    let { name: n, value: e } = t,
        [s, r] = a.useState(l.qCr.DEFAULT);
    return (0, i.jsx)("div", {
        className: m.lj,
        children: (0, i.jsx)(l.D0$, {
            label: n,
            children: (0, i.jsx)(l.e2O, {
                value: e,
                mode: s,
                supportsCopy: d.p5,
                onCopy: () => {
                    (0, d.C)(
                        e,
                        () => r(l.qCr.SUCCESS),
                        () => r(l.qCr.ERROR),
                    );
                },
            }),
        }),
    });
}

function h(t) {
    let { onClose: n, transitionState: e } = t,
        [d, h] = a.useState(""),
        [j, g] = a.useState(""),
        [p, v] = a.useState(null),
        [N, _] = a.useState(!1),
        [f, C] = a.useState("DOMAIN"),
        O = () => {
            _(!0),
                v(null),
                s.Bo.post({
                    url: o.Rsh.CONNECTION(o.fg2.DOMAIN, d),
                    body: {},
                    rejectWithError: !1,
                })
                    .then(() => {
                        n();
                    })
                    .catch((t) => {
                        var n, e, i, a, s, l, r;
                        (null == (n = t.body) ? void 0 : n.proof) && "DOMAIN" === f
                            ? (g(t.body.proof), C("PROOF_DNS"))
                            : v(
                                  (null == (l = t.body) ||
                                  null == (s = l.errors) ||
                                  null == (a = s.domain) ||
                                  null == (i = a._errors) ||
                                  null == (e = i[0])
                                      ? void 0
                                      : e.message) ||
                                      (null == (r = t.body) ? void 0 : r.message) ||
                                      t.message,
                              );
                    })
                    .finally(() => {
                        _(!1);
                    });
        };
    return (0, i.jsxs)(l.EOs, {
        "data-migration-pending": !0,
        transitionState: e,
        className: m.__invalid_modal,
        parentComponent: "DomainVerifyModal",
        children: [
            (0, i.jsxs)(l.rQ0, {
                "data-migration-pending": !0,
                direction: r.A.Direction.VERTICAL,
                className: m.wx,
                separator: !1,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        children: x.intl.string(x.t["7lo8+e"]),
                    }),
                    (0, i.jsx)(l.s_y, {
                        "data-migration-pending": !0,
                        className: m.b,
                        onClick: n,
                    }),
                ],
            }),
            (0, i.jsxs)(l.tN_, {
                activeSlide: f,
                width: 440,
                children: [
                    (0, i.jsx)(l.q7S, {
                        id: "DOMAIN",
                        children: (0, i.jsxs)("form", {
                            onSubmit: (t) => {
                                t.preventDefault(), O();
                            },
                            children: [
                                (0, i.jsxs)(l.$mQ, {
                                    "data-migration-pending": !0,
                                    className: m.Qs,
                                    children: [
                                        (0, i.jsx)(l.Text, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            className: m.h_,
                                            children: x.intl.string(x.t.NxPUqY),
                                        }),
                                        (0, i.jsx)(l.ksK, {
                                            label: x.intl.string(x.t["4jIAa+"]),
                                            error: p,
                                            onChange: h,
                                            placeholder: c.Ai,
                                            maxLength: 253,
                                            value: d,
                                            disabled: N,
                                            autoFocus: !0,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(l.jlY, {
                                    "data-migration-pending": !0,
                                    className: m.qr,
                                    children: (0, i.jsxs)(l.ButtonGroup, {
                                        direction: "horizontal-reverse",
                                        children: [
                                            (0, i.jsx)(l.Button, {
                                                variant: "primary",
                                                text: x.intl.string(x.t.PDTjLN),
                                                type: "submit",
                                                loading: N,
                                                disabled: "" === d,
                                            }),
                                            (0, i.jsx)(l.Button, {
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
                    (0, i.jsxs)(l.q7S, {
                        id: "PROOF_DNS",
                        children: [
                            (0, i.jsxs)(l.$mQ, {
                                "data-migration-pending": !0,
                                className: m.Qs,
                                children: [
                                    (0, i.jsxs)("ol", {
                                        className: m.p_,
                                        children: [
                                            (0, i.jsx)("li", {
                                                children: (0, i.jsx)(l.Text, {
                                                    tag: "span",
                                                    variant: "text-md/normal",
                                                    children: x.intl.string(x.t["yOxxA+"]),
                                                }),
                                            }),
                                            (0, i.jsxs)("li", {
                                                children: [
                                                    (0, i.jsx)(l.Text, {
                                                        tag: "span",
                                                        variant: "text-md/normal",
                                                        children: x.intl.string(x.t.cSURbq),
                                                    }),
                                                    (0, i.jsxs)("div", {
                                                        className: m.st,
                                                        children: [
                                                            (0, i.jsx)(u, {
                                                                name: x.intl.string(x.t.GL3q7k),
                                                                value: (0, c.hE)(d),
                                                            }),
                                                            (0, i.jsx)(u, {
                                                                name: x.intl.string(x.t.Ccmixu),
                                                                value: "TXT",
                                                            }),
                                                            (0, i.jsx)(u, {
                                                                name: x.intl.string(x.t.PVLriT),
                                                                value: j,
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(l.po8, {
                                        messageType: l.YCn.INFO,
                                        className: m.Qq,
                                        children: x.intl.string(x.t.CUBxDB),
                                    }),
                                    null != p &&
                                        (0, i.jsx)(l.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-feedback-critical",
                                            className: m.Qq,
                                            children: p,
                                        }),
                                ],
                            }),
                            (0, i.jsxs)(l.jlY, {
                                "data-migration-pending": !0,
                                className: m.qr,
                                direction: r.A.Direction.HORIZONTAL,
                                children: [
                                    (0, i.jsx)(l.Button, {
                                        variant: "secondary",
                                        text: x.intl.string(x.t["13/7kX"]),
                                        onClick: () => {
                                            C("DOMAIN"), v(null);
                                        },
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: m.Um,
                                        children: [
                                            (0, i.jsx)("div", {
                                                "data-button-hoisted-classname-wrapper": !0,
                                                className: m.__invalid_switchButton,
                                                children: (0, i.jsx)(l.Button, {
                                                    variant: "secondary",
                                                    text: x.intl.string(x.t.CkfdNx),
                                                    onClick: () => {
                                                        C("PROOF_HTTP"), v(null);
                                                    },
                                                }),
                                            }),
                                            (0, i.jsx)(l.Button, {
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
                    (0, i.jsxs)(l.q7S, {
                        id: "PROOF_HTTP",
                        children: [
                            (0, i.jsxs)(l.$mQ, {
                                "data-migration-pending": !0,
                                className: m.Qs,
                                children: [
                                    (0, i.jsx)(l.Text, {
                                        tag: "span",
                                        variant: "text-md/normal",
                                        children: x.intl.string(x.t.p4ql7y),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: m.eX,
                                        children: [
                                            (0, i.jsx)(u, {
                                                name: x.intl.string(x.t.GL3q7k),
                                                value: (0, c.uu)(d),
                                            }),
                                            (0, i.jsx)(u, {
                                                name: x.intl.string(x.t.PVLriT),
                                                value: j,
                                            }),
                                        ],
                                    }),
                                    null != p &&
                                        (0, i.jsx)(l.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-feedback-critical",
                                            className: m.Qq,
                                            children: p,
                                        }),
                                ],
                            }),
                            (0, i.jsxs)(l.jlY, {
                                "data-migration-pending": !0,
                                className: m.qr,
                                direction: r.A.Direction.HORIZONTAL,
                                children: [
                                    (0, i.jsx)(l.Button, {
                                        variant: "secondary",
                                        text: x.intl.string(x.t["13/7kX"]),
                                        onClick: () => {
                                            C("DOMAIN"), v(null);
                                        },
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: m.Um,
                                        children: [
                                            (0, i.jsx)("div", {
                                                "data-button-hoisted-classname-wrapper": !0,
                                                className: m.__invalid_switchButton,
                                                children: (0, i.jsx)(l.Button, {
                                                    variant: "secondary",
                                                    text: x.intl.string(x.t.RhJMVQ),
                                                    onClick: () => {
                                                        C("PROOF_DNS"), v(null);
                                                    },
                                                }),
                                            }),
                                            (0, i.jsx)(l.Button, {
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
