e.d(n, { default: () => h }), e(388685), e(457542), e(953529);
var a = e(54381),
    i = e(473749),
    s = e(544891),
    l = e(481060),
    r = e(600164),
    o = e(572004),
    c = e(472305),
    d = e(981631),
    x = e(388032),
    u = e(611007);
function m(t) {
    let { name: n, value: e } = t,
        [s, r] = i.useState(l.uA3.DEFAULT);
    return (0, a.jsx)("div", {
        className: u.infoRow,
        children: (0, a.jsx)(l.gNt, {
            label: n,
            children: (0, a.jsx)(l.kO8, {
                value: e,
                mode: s,
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
function h(t) {
    let { onClose: n, transitionState: e } = t,
        [o, h] = i.useState(""),
        [j, p] = i.useState(""),
        [v, b] = i.useState(null),
        [N, g] = i.useState(!1),
        [f, C] = i.useState("DOMAIN"),
        _ = () => {
            g(!0),
                b(null),
                s.tn
                    .post({
                        url: d.ANM.CONNECTION(d.ABu.DOMAIN, o),
                        body: {},
                        rejectWithError: !1,
                    })
                    .then(() => {
                        n();
                    })
                    .catch((t) => {
                        var n, e, a, i, s, l, r;
                        (null == (n = t.body) ? void 0 : n.proof) && "DOMAIN" === f
                            ? (p(t.body.proof), C("PROOF_DNS"))
                            : b(
                                  (null == (l = t.body) ||
                                  null == (s = l.errors) ||
                                  null == (i = s.domain) ||
                                  null == (a = i._errors) ||
                                  null == (e = a[0])
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
    return (0, a.jsxs)(l.Y0X, {
        transitionState: e,
        className: u.__invalid_modal,
        parentComponent: "DomainVerifyModal",
        children: [
            (0, a.jsxs)(l.xBx, {
                direction: r.Z.Direction.VERTICAL,
                className: u.header,
                separator: !1,
                children: [
                    (0, a.jsx)(l.Heading, {
                        variant: "heading-xl/semibold",
                        children: x.intl.string(x.t["7lo8+e"]),
                    }),
                    (0, a.jsx)(l.olH, {
                        className: u.closeButton,
                        onClick: n,
                    }),
                ],
            }),
            (0, a.jsxs)(l.MyZ, {
                activeSlide: f,
                width: 440,
                children: [
                    (0, a.jsx)(l.Mi4, {
                        id: "DOMAIN",
                        children: (0, a.jsxs)("form", {
                            onSubmit: (t) => {
                                t.preventDefault(), _();
                            },
                            children: [
                                (0, a.jsxs)(l.hzk, {
                                    className: u.content,
                                    children: [
                                        (0, a.jsx)(l.Text, {
                                            variant: "text-md/normal",
                                            color: "text-default",
                                            className: u.description,
                                            children: x.intl.string(x.t.NxPUqY),
                                        }),
                                        (0, a.jsx)(l.oil, {
                                            label: x.intl.string(x.t["4jIAa+"]),
                                            error: v,
                                            onChange: h,
                                            placeholder: c.pL,
                                            maxLength: 253,
                                            value: o,
                                            disabled: N,
                                            autoFocus: !0,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(l.mzw, {
                                    className: u.footer,
                                    children: (0, a.jsxs)(l.ButtonGroup, {
                                        direction: "horizontal-reverse",
                                        children: [
                                            (0, a.jsx)(l.Button, {
                                                variant: "primary",
                                                text: x.intl.string(x.t.PDTjLN),
                                                type: "submit",
                                                loading: N,
                                                disabled: "" === o,
                                            }),
                                            (0, a.jsx)(l.Button, {
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
                    (0, a.jsxs)(l.Mi4, {
                        id: "PROOF_DNS",
                        children: [
                            (0, a.jsxs)(l.hzk, {
                                className: u.content,
                                children: [
                                    (0, a.jsxs)("ol", {
                                        className: u.list,
                                        children: [
                                            (0, a.jsx)("li", {
                                                children: (0, a.jsx)(l.Text, {
                                                    tag: "span",
                                                    variant: "text-md/normal",
                                                    children: x.intl.string(x.t["yOxxA+"]),
                                                }),
                                            }),
                                            (0, a.jsxs)("li", {
                                                children: [
                                                    (0, a.jsx)(l.Text, {
                                                        tag: "span",
                                                        variant: "text-md/normal",
                                                        children: x.intl.string(x.t.cSURbq),
                                                    }),
                                                    (0, a.jsxs)("div", {
                                                        className: u.dnsRecordContainer,
                                                        children: [
                                                            (0, a.jsx)(m, {
                                                                name: x.intl.string(x.t.GL3q7k),
                                                                value: (0, c.Qv)(o),
                                                            }),
                                                            (0, a.jsx)(m, {
                                                                name: x.intl.string(x.t.Ccmixu),
                                                                value: "TXT",
                                                            }),
                                                            (0, a.jsx)(m, {
                                                                name: x.intl.string(x.t.PVLriT),
                                                                value: j,
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, a.jsx)(l.Wn, {
                                        messageType: l.QYI.INFO,
                                        className: u.text,
                                        children: x.intl.string(x.t.CUBxDB),
                                    }),
                                    null != v &&
                                        (0, a.jsx)(l.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-feedback-critical",
                                            className: u.text,
                                            children: v,
                                        }),
                                ],
                            }),
                            (0, a.jsxs)(l.mzw, {
                                className: u.footer,
                                direction: r.Z.Direction.HORIZONTAL,
                                children: [
                                    (0, a.jsx)(l.Button, {
                                        variant: "secondary",
                                        text: x.intl.string(x.t["13/7kX"]),
                                        onClick: () => {
                                            C("DOMAIN"), b(null);
                                        },
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: u.footerInner,
                                        children: [
                                            (0, a.jsx)("div", {
                                                "data-button-hoisted-classname-wrapper": !0,
                                                className: u.__invalid_switchButton,
                                                children: (0, a.jsx)(l.Button, {
                                                    variant: "secondary",
                                                    text: x.intl.string(x.t.CkfdNx),
                                                    onClick: () => {
                                                        C("PROOF_HTTP"), b(null);
                                                    },
                                                }),
                                            }),
                                            (0, a.jsx)(l.Button, {
                                                variant: "primary",
                                                text: x.intl.string(x.t["13ofGu"]),
                                                loading: N,
                                                onClick: _,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsxs)(l.Mi4, {
                        id: "PROOF_HTTP",
                        children: [
                            (0, a.jsxs)(l.hzk, {
                                className: u.content,
                                children: [
                                    (0, a.jsx)(l.Text, {
                                        tag: "span",
                                        variant: "text-md/normal",
                                        children: x.intl.string(x.t.p4ql7y),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: u.httpFileContainer,
                                        children: [
                                            (0, a.jsx)(m, {
                                                name: x.intl.string(x.t.GL3q7k),
                                                value: (0, c.F9)(o),
                                            }),
                                            (0, a.jsx)(m, {
                                                name: x.intl.string(x.t.PVLriT),
                                                value: j,
                                            }),
                                        ],
                                    }),
                                    null != v &&
                                        (0, a.jsx)(l.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-feedback-critical",
                                            className: u.text,
                                            children: v,
                                        }),
                                ],
                            }),
                            (0, a.jsxs)(l.mzw, {
                                className: u.footer,
                                direction: r.Z.Direction.HORIZONTAL,
                                children: [
                                    (0, a.jsx)(l.Button, {
                                        variant: "secondary",
                                        text: x.intl.string(x.t["13/7kX"]),
                                        onClick: () => {
                                            C("DOMAIN"), b(null);
                                        },
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: u.footerInner,
                                        children: [
                                            (0, a.jsx)("div", {
                                                "data-button-hoisted-classname-wrapper": !0,
                                                className: u.__invalid_switchButton,
                                                children: (0, a.jsx)(l.Button, {
                                                    variant: "secondary",
                                                    text: x.intl.string(x.t.RhJMVQ),
                                                    onClick: () => {
                                                        C("PROOF_DNS"), b(null);
                                                    },
                                                }),
                                            }),
                                            (0, a.jsx)(l.Button, {
                                                variant: "primary",
                                                text: x.intl.string(x.t["13ofGu"]),
                                                loading: N,
                                                onClick: _,
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
