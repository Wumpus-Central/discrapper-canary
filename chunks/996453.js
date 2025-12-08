n.d(t, {
    G: () => f,
    Z: () => j,
}),
    n(388685);
var i = n(54381),
    l = n(473749),
    a = n(481060),
    r = n(749210),
    s = n(820160),
    o = n(600164),
    c = n(313201),
    d = n(594174),
    u = n(892880),
    m = n(458879),
    x = n(981631),
    g = n(388032),
    C = n(960780);
function f(e) {
    var t;
    let {
            guildTemplate: n,
            onClose: f,
            onBack: j,
            onHubGuildInfoSet: p,
            onGuildCreated: b,
            isSlideReady: h,
            hasFooter: L = !0,
            isCommunity: _ = !1,
        } = e,
        [v, y] = l.useState(u.Z.getGuildNameSuggestion()),
        [Z, O] = l.useState(null),
        [I, S] = l.useState(!1),
        [T, N] = l.useState(null),
        E = !!(null == (t = d.default.getCurrentUser()) ? void 0 : t.isStaff()),
        [H, M] = l.useState(E),
        G = (0, c.Dt)(),
        w = l.useRef(null);
    l.useEffect(() => {
        var e;
        h && (null == (e = w.current) || e.focus());
    }, [h]);
    let k = l.useCallback(
            async (e) => {
                if ((e.preventDefault(), null != n)) {
                    S(!0), N(null);
                    try {
                        if (null != p) p(v, Z);
                        else {
                            let e = await m.Z.createGuildFromTemplate(v, Z, n, _, H);
                            r.Z.transitionToGuildSync(e.id), null == b || b(e.id);
                        }
                    } catch (e) {
                        N(e);
                    }
                    S(!1);
                }
            },
            [n, p, v, Z, _, H, b],
        ),
        U = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.Button, {
                    variant: "primary",
                    text: null != p ? g.intl.string(g.t.PDTjLN) : g.intl.string(g.t.CumH4u),
                    onClick: k,
                    disabled: 0 === v.length,
                    loading: I,
                }),
                (0, i.jsx)(a.Avr, {
                    size: "sm",
                    variant: "secondary",
                    text: g.intl.string(g.t["13/7kX"]),
                    onClick: j,
                }),
            ],
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(a.xBx, {
                    "data-migration-pending": !0,
                    direction: o.Z.Direction.VERTICAL,
                    className: C.header,
                    separator: !1,
                    children: [
                        (0, i.jsx)(a.Heading, {
                            className: C.title,
                            variant: "heading-xl/semibold",
                            children: g.intl.string(g.t["2H6Nij"]),
                        }),
                        (0, i.jsx)(a.Text, {
                            className: C.subtitle,
                            color: "text-default",
                            variant: "text-md/normal",
                            children: g.intl.string(g.t.AAfVqR),
                        }),
                        null != f &&
                            (0, i.jsx)(a.olH, {
                                "data-migration-pending": !0,
                                className: C.closeButton,
                                onClick: f,
                            }),
                    ],
                }),
                (0, i.jsxs)(a.hzk, {
                    "data-migration-pending": !0,
                    className: C.createGuild,
                    children: [
                        (0, i.jsx)("div", {
                            className: C.uploadIcon,
                            children: (0, i.jsx)(s.Z, {
                                icon: Z,
                                onChange: O,
                            }),
                        }),
                        (0, i.jsx)("form", {
                            onSubmit: k,
                            children: (0, i.jsxs)(a.Kqy, {
                                gap: 16,
                                children: [
                                    (0, i.jsx)(a.oil, {
                                        label: g.intl.string(g.t.dBih7e),
                                        required: !0,
                                        error: null == T ? void 0 : T.getFirstFieldErrorMessage("name"),
                                        value: v,
                                        maxLength: 100,
                                        onChange: y,
                                        inputRef: w,
                                        id: G,
                                    }),
                                    E &&
                                        (0, i.jsx)(a.rsf, {
                                            label: "Staff Only",
                                            description: g.intl.string(g.t.edQ5va),
                                            checked: H,
                                            onChange: (e) => M(e),
                                        }),
                                    (0, i.jsx)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: g.intl.format(g.t["2bprXx"], { guidelinesURL: x.EYA.GUIDELINES }),
                                    }),
                                ],
                            }),
                        }),
                        null == T || T.hasFieldErrors()
                            ? null
                            : (0, i.jsx)(a.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  children: T.message,
                              }),
                    ],
                }),
                L &&
                    (0, i.jsx)(a.mzw, {
                        "data-migration-pending": !0,
                        className: C.footer,
                        children: U,
                    }),
            ],
        }),
        footer: U,
    };
}
function j(e) {
    let { content: t } = f(e);
    return t;
}
