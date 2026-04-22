n.d(e, { A: () => S });
var t = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(311907),
    c = n(935462),
    d = n(534514),
    o = n(834730),
    x = n(954197),
    m = n(260598),
    g = n(825484),
    p = n(821609),
    N = n(73153),
    A = n(235986),
    h = n(207913),
    j = n(393033),
    E = n(985481),
    u = n(239093),
    _ = n(985018),
    C = n(633757),
    I = n(503193);
function S(i) {
    let { className: e, isDsaEligible: n = !1, onClose: s, onNext: S, onBack: v } = i,
        k = (0, E.y5)(),
        L = (0, r.bG)([h.A], () => h.A.getFreeTextAppealReason()),
        [T, b] = a.useState(""),
        [P, f] = a.useState(!1);
    a.useEffect(() => {
        b(L ?? ""), f(k === u.Iv.SOMETHING_ELSE);
    }, [L, k, n]);
    let D = u.Qv.map((i) => ({ value: i, name: (0, j.l0)(i) }));
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(c.rQ, {
                "data-migration-pending": !0,
                direction: A.A.Direction.VERTICAL,
                className: I.wx,
                separator: !1,
                children: [
                    (0, t.jsx)(d.D, {
                        className: I.DD,
                        variant: "heading-xl/semibold",
                        children: _.intl.string(_.t["C5q+pW"]),
                    }),
                    (0, t.jsx)(o.E, {
                        className: I.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: _.intl.string(_.t.VEcRhw),
                    }),
                    null != s && (0, t.jsx)(c.s_, { "data-migration-pending": !0, className: I.b, onClick: s }),
                ],
            }),
            (0, t.jsxs)(c.$m, {
                "data-migration-pending": !0,
                className: l()(C.j, e),
                paddingFix: !1,
                children: [
                    (0, t.jsx)(x.z, {
                        value: k,
                        options: D,
                        onChange: (i) => {
                            f(i === u.Iv.SOMETHING_ELSE),
                                i !== u.Iv.SOMETHING_ELSE &&
                                    (b(""),
                                    N.h.dispatch({
                                        type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                                        userInput: "",
                                    })),
                                N.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT", signal: i });
                        },
                    }),
                    n &&
                        P &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(m.f, {
                                    rows: 4,
                                    maxLength: 1024,
                                    placeholder: _.intl.string(_.t.bQrZIN),
                                    value: T,
                                    onChange: b,
                                    autoFocus: !0,
                                }),
                                (0, t.jsx)(o.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: _.intl.string(_.t.xfNY3L),
                                }),
                            ],
                        }),
                    (0, t.jsx)(o.E, {
                        variant: "text-sm/normal",
                        className: C.e,
                        children: _.intl.format(_.t["8k9GCW"], {}),
                    }),
                ],
            }),
            (0, t.jsx)(c.jl, {
                "data-migration-pending": !0,
                children: (0, t.jsxs)(g.e, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, t.jsx)(p.$, {
                            variant: "primary",
                            text: _.intl.string(_.t.PDTjLN),
                            onClick: () => {
                                N.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput: T }),
                                    S?.();
                            },
                        }),
                        (0, t.jsx)(p.$, {
                            variant: "secondary",
                            text: _.intl.string(_.t["13/7kX"]),
                            onClick: () => {
                                N.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput: T }),
                                    v?.();
                            },
                        }),
                    ],
                }),
            }),
        ],
    });
}
