e.d(n, { default: () => m }), e(388685), e(457542), e(953529);
var i = e(951288),
    s = e(647438),
    a = e(544891),
    l = e(481060),
    r = e(600164),
    o = e(572004),
    c = e(472305),
    d = e(981631),
    x = e(388032),
    u = e(46601);
function h(t) {
    let { name: n, value: e } = t,
        [a, r] = s.useState(l.uA3.DEFAULT);
    return (0, i.jsx)("div", {
        className: u.infoRow,
        children: (0, i.jsx)(l.gNt, {
            label: n,
            children: (0, i.jsx)(l.kO8, {
                value: e,
                mode: a,
                supportsCopy: o.wS,
                onCopy: () => {
                    (0, o.JG)(
                        e,
                        () => r(l.uA3.SUCCESS),
                        () => r(l.uA3.ERROR),
                    );
                },
            }),
        }),
    });
}
function m(t) {
    let { onClose: n, transitionState: e } = t,
        [o, m] = s.useState(""),
        [j, p] = s.useState(""),
        [v, N] = s.useState(null),
        [_, g] = s.useState(!1),
        [C, b] = s.useState("DOMAIN"),
        f = () => {
            g(!0),
                N(null),
                a.tn
                    .post({
                        url: d.ANM.CONNECTION(d.ABu.DOMAIN, o),
                        body: {},
                        rejectWithError: !1,
                    })
                    .then(() => {
                        n();
                    })
                    .catch((t) => {
                        var n, e, i, s, a, l, r;
                        (null == (n = t.body) ? void 0 : n.proof) && "DOMAIN" === C
                            ? (p(t.body.proof), b("PROOF_DNS"))
                            : N(
                                  (null == (l = t.body) ||
                                  null == (a = l.errors) ||
                                  null == (s = a.domain) ||
                                  null == (i = s._errors) ||
                                  null == (e = i[0])
                                      ? void 0
                                      : e.message) ||
                                      (null == (r = t.body) ? void 0 : r.message) ||
                                      t.message,
                              );
                    })
                    .finally(() => {
                        g(!1);
                    });
        };
    return (0, i.jsxs)(l.Y0X, {
        transitionState: e,
        className: u.__invalid_modal,
        parentComponent: "DomainVerifyModal",
        children: [
            (0, i.jsxs)(l.xBx, {
                direction: r.Z.Direction.VERTICAL,
                className: u.header,
                separator: !1,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        children: x.intl.string(x.t["7lo8+e"]),
                    }),
                    (0, i.jsx)(l.olH, {
                        className: u.closeButton,
                        onClick: n,
                    }),
                ],
            }),
            (0, i.jsxs)(l.MyZ, {
                activeSlide: C,
                width: 440,
                children: [
                    (0, i.jsx)(l.Mi4, {
                        id: "DOMAIN",
                        children: (0, i.jsxs)("form", {
                            onSubmit: (t) => {
                                t.preventDefault(), f();
                            },
                            children: [
                                (0, i.jsxs)(l.hzk, {
                                    className: u.content,
                                    children: [
                                        (0, i.jsx)(l.Text, {
                                            variant: "text-md/normal",
                                            color: "header-secondary",
                                            className: u.description,
                                            children: x.intl.string(x.t.NxPUqY),
                                        }),
                                        (0, i.jsx)(l.oil, {
                                            label: x.intl.string(x.t["4jIAa+"]),
                                            error: v,
                                            onChange: m,
                                            placeholder: c.pL,
                                            maxLength: 253,
                                            value: o,
                                            disabled: _,
                                            autoFocus: !0,
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(l.mzw, {
                                    className: u.footer,
                                    children: (0, i.jsxs)(l.ButtonGroup, {
                                        direction: "horizontal-reverse",
                                        children: [
                                            (0, i.jsx)(l.Button, {
                                                variant: "primary",
                                                text: x.intl.string(x.t.PDTjLN),
                                                type: "submit",
                                                loading: _,
                                                disabled: "" === o,
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
                    (0, i.jsxs)(l.Mi4, {
                        id: "PROOF_DNS",
                        children: [
                            (0, i.jsxs)(l.hzk, {
                                className: u.content,
                                children: [
                                    (0, i.jsxs)("ol", {
                                        className: u.list,
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
                                                        className: u.dnsRecordContainer,
                                                        children: [
                                                            (0, i.jsx)(h, {
                                                                name: x.intl.string(x.t.GL3q7k),
                                                                value: (0, c.Qv)(o),
                                                            }),
                                                            (0, i.jsx)(h, {
                                                                name: x.intl.string(x.t.Ccmixu),
                                                                value: "TXT",
                                                            }),
                                                            (0, i.jsx)(h, {
                                                                name: x.intl.string(x.t.PVLriT),
                                                                value: j,
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(l.Wn, {
                                        messageType: l.QYI.INFO,
                                        className: u.text,
                                        children: x.intl.string(x.t.CUBxDB),
                                    }),
                                    null != v &&
                                        (0, i.jsx)(l.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-danger",
                                            className: u.text,
                                            children: v,
                                        }),
                                ],
                            }),
                            (0, i.jsxs)(l.mzw, {
                                className: u.footer,
                                direction: r.Z.Direction.HORIZONTAL,
                                children: [
                                    (0, i.jsx)(l.Button, {
                                        variant: "secondary",
                                        text: x.intl.string(x.t["13/7kX"]),
                                        onClick: () => {
                                            b("DOMAIN"), N(null);
                                        },
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: u.footerInner,
                                        children: [
                                            (0, i.jsx)("div", {
                                                "data-button-hoisted-classname-wrapper": !0,
                                                className: u.__invalid_switchButton,
                                                children: (0, i.jsx)(l.Button, {
                                                    variant: "secondary",
                                                    text: x.intl.string(x.t.CkfdNx),
                                                    onClick: () => {
                                                        b("PROOF_HTTP"), N(null);
                                                    },
                                                }),
                                            }),
                                            (0, i.jsx)(l.Button, {
                                                variant: "primary",
                                                text: x.intl.string(x.t["13ofGu"]),
                                                loading: _,
                                                onClick: f,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)(l.Mi4, {
                        id: "PROOF_HTTP",
                        children: [
                            (0, i.jsxs)(l.hzk, {
                                className: u.content,
                                children: [
                                    (0, i.jsx)(l.Text, {
                                        tag: "span",
                                        variant: "text-md/normal",
                                        children: x.intl.string(x.t.p4ql7y),
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: u.httpFileContainer,
                                        children: [
                                            (0, i.jsx)(h, {
                                                name: x.intl.string(x.t.GL3q7k),
                                                value: (0, c.F9)(o),
                                            }),
                                            (0, i.jsx)(h, {
                                                name: x.intl.string(x.t.PVLriT),
                                                value: j,
                                            }),
                                        ],
                                    }),
                                    null != v &&
                                        (0, i.jsx)(l.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-danger",
                                            className: u.text,
                                            children: v,
                                        }),
                                ],
                            }),
                            (0, i.jsxs)(l.mzw, {
                                className: u.footer,
                                direction: r.Z.Direction.HORIZONTAL,
                                children: [
                                    (0, i.jsx)(l.Button, {
                                        variant: "secondary",
                                        text: x.intl.string(x.t["13/7kX"]),
                                        onClick: () => {
                                            b("DOMAIN"), N(null);
                                        },
                                    }),
                                    (0, i.jsxs)("div", {
                                        className: u.footerInner,
                                        children: [
                                            (0, i.jsx)("div", {
                                                "data-button-hoisted-classname-wrapper": !0,
                                                className: u.__invalid_switchButton,
                                                children: (0, i.jsx)(l.Button, {
                                                    variant: "secondary",
                                                    text: x.intl.string(x.t.RhJMVQ),
                                                    onClick: () => {
                                                        b("PROOF_DNS"), N(null);
                                                    },
                                                }),
                                            }),
                                            (0, i.jsx)(l.Button, {
                                                variant: "primary",
                                                text: x.intl.string(x.t["13ofGu"]),
                                                loading: _,
                                                onClick: f,
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
