n.d(i, { A: () => h }), n(896048);
var t = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(311907),
    d = n(397927),
    c = n(73153),
    o = n(235986),
    x = n(207913),
    m = n(393033),
    g = n(985481),
    p = n(239093),
    N = n(985018),
    u = n(249942),
    A = n(299916);
function h(e) {
    let { className: i, isDsaEligible: n = !1, onClose: s, onNext: h, onBack: j } = e,
        _ = (0, g.y5)(),
        C = (0, r.bG)([x.A], () => x.A.getFreeTextAppealReason()),
        [E, I] = a.useState(""),
        [v, S] = a.useState(!1);
    a.useEffect(() => {
        I(null != C ? C : ""), S(_ === p.Iv.SOMETHING_ELSE);
    }, [C, _, n]);
    let T = p.Qv.map((e) => ({
        value: e,
        name: (0, m.l0)(e),
    }));
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsxs)(d.rQ0, {
                "data-migration-pending": !0,
                direction: o.A.Direction.VERTICAL,
                className: A.wx,
                separator: !1,
                children: [
                    (0, t.jsx)(d.Heading, {
                        className: A.DD,
                        variant: "heading-xl/semibold",
                        children: N.intl.string(N.t["C5q+pW"]),
                    }),
                    (0, t.jsx)(d.Text, {
                        className: A.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: N.intl.string(N.t.VEcRhw),
                    }),
                    null != s &&
                        (0, t.jsx)(d.s_y, {
                            "data-migration-pending": !0,
                            className: A.b,
                            onClick: s,
                        }),
                ],
            }),
            (0, t.jsxs)(d.$mQ, {
                "data-migration-pending": !0,
                className: l()(u.j, i),
                paddingFix: !1,
                children: [
                    (0, t.jsx)(d.z6M, {
                        value: _,
                        options: T,
                        onChange: (e) => {
                            S(e === p.Iv.SOMETHING_ELSE),
                                e !== p.Iv.SOMETHING_ELSE &&
                                    (I(""),
                                    c.h.dispatch({
                                        type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                                        userInput: "",
                                    })),
                                c.h.dispatch({
                                    type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT",
                                    signal: e,
                                });
                        },
                    }),
                    n &&
                        v &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(d.fs1, {
                                    rows: 4,
                                    maxLength: 1024,
                                    placeholder: N.intl.string(N.t.bQrZIN),
                                    value: E,
                                    onChange: I,
                                    autoFocus: !0,
                                }),
                                (0, t.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: N.intl.string(N.t.xfNY3L),
                                }),
                            ],
                        }),
                    (0, t.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        className: u.e,
                        children: N.intl.format(N.t["8k9GCW"], {}),
                    }),
                ],
            }),
            (0, t.jsx)(d.jlY, {
                "data-migration-pending": !0,
                children: (0, t.jsxs)(d.ButtonGroup, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, t.jsx)(d.Button, {
                            variant: "primary",
                            text: N.intl.string(N.t.PDTjLN),
                            onClick: () => {
                                c.h.dispatch({
                                    type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                                    userInput: E,
                                }),
                                    null == h || h();
                            },
                        }),
                        (0, t.jsx)(d.Button, {
                            variant: "secondary",
                            text: N.intl.string(N.t["13/7kX"]),
                            onClick: () => {
                                c.h.dispatch({
                                    type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                                    userInput: E,
                                }),
                                    null == j || j();
                            },
                        }),
                    ],
                }),
            }),
        ],
    });
}
