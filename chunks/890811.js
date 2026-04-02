i.d(t, { A: () => j });
var n = i(627968),
    a = i(64700),
    s = i(503698),
    l = i.n(s),
    r = i(311907),
    d = i(397927),
    c = i(73153),
    o = i(235986),
    x = i(207913),
    m = i(393033),
    g = i(985481),
    p = i(239093),
    N = i(985018),
    A = i(574652),
    h = i(551606);
function j(e) {
    let { className: t, isDsaEligible: i = !1, onClose: s, onNext: j, onBack: u } = e,
        _ = (0, g.y5)(),
        C = (0, r.bG)([x.A], () => x.A.getFreeTextAppealReason()),
        [E, I] = a.useState(""),
        [S, T] = a.useState(!1);
    a.useEffect(() => {
        I(C ?? ""), T(_ === p.Iv.SOMETHING_ELSE);
    }, [C, _, i]);
    let v = p.Qv.map((e) => ({ value: e, name: (0, m.l0)(e) }));
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(d.rQ0, {
                "data-migration-pending": !0,
                direction: o.A.Direction.VERTICAL,
                className: h.wx,
                separator: !1,
                children: [
                    (0, n.jsx)(d.Heading, {
                        className: h.DD,
                        variant: "heading-xl/semibold",
                        children: N.intl.string(N.t["C5q+pW"]),
                    }),
                    (0, n.jsx)(d.Text, {
                        className: h.VA,
                        color: "text-default",
                        variant: "text-md/normal",
                        children: N.intl.string(N.t.VEcRhw),
                    }),
                    null != s && (0, n.jsx)(d.s_y, { "data-migration-pending": !0, className: h.b, onClick: s }),
                ],
            }),
            (0, n.jsxs)(d.$mQ, {
                "data-migration-pending": !0,
                className: l()(A.j, t),
                paddingFix: !1,
                children: [
                    (0, n.jsx)(d.z6M, {
                        value: _,
                        options: v,
                        onChange: (e) => {
                            T(e === p.Iv.SOMETHING_ELSE),
                                e !== p.Iv.SOMETHING_ELSE &&
                                    (I(""),
                                    c.h.dispatch({
                                        type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE",
                                        userInput: "",
                                    })),
                                c.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_SELECT", signal: e });
                        },
                    }),
                    i &&
                        S &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(d.fs1, {
                                    rows: 4,
                                    maxLength: 1024,
                                    placeholder: N.intl.string(N.t.bQrZIN),
                                    value: E,
                                    onChange: I,
                                    autoFocus: !0,
                                }),
                                (0, n.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: N.intl.string(N.t.xfNY3L),
                                }),
                            ],
                        }),
                    (0, n.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        className: A.e,
                        children: N.intl.format(N.t["8k9GCW"], {}),
                    }),
                ],
            }),
            (0, n.jsx)(d.jlY, {
                "data-migration-pending": !0,
                children: (0, n.jsxs)(d.ButtonGroup, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, n.jsx)(d.Button, {
                            variant: "primary",
                            text: N.intl.string(N.t.PDTjLN),
                            onClick: () => {
                                c.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput: E }),
                                    j?.();
                            },
                        }),
                        (0, n.jsx)(d.Button, {
                            variant: "secondary",
                            text: N.intl.string(N.t["13/7kX"]),
                            onClick: () => {
                                c.h.dispatch({ type: "SAFETY_HUB_APPEAL_SIGNAL_CUSTOM_INPUT_CHANGE", userInput: E }),
                                    u?.();
                            },
                        }),
                    ],
                }),
            }),
        ],
    });
}
