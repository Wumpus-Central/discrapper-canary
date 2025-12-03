n.d(t, {
    G: () => p,
    Z: () => f,
}),
    n(388685);
var i = n(54381),
    l = n(473749),
    r = n(481060),
    s = n(749210),
    a = n(820160),
    o = n(600164),
    c = n(313201),
    d = n(594174),
    u = n(892880),
    m = n(458879),
    x = n(981631),
    C = n(388032),
    g = n(960780);
function p(e) {
    var t;
    let {
            guildTemplate: n,
            onClose: p,
            onBack: f,
            onHubGuildInfoSet: j,
            onGuildCreated: h,
            isSlideReady: b,
            hasFooter: _ = !0,
            isCommunity: L = !1,
        } = e,
        [v, I] = l.useState(u.Z.getGuildNameSuggestion()),
        [y, O] = l.useState(null),
        [Z, S] = l.useState(!1),
        [N, T] = l.useState(null),
        E = !!(null == (t = d.default.getCurrentUser()) ? void 0 : t.isStaff()),
        [M, H] = l.useState(E),
        G = (0, c.Dt)(),
        U = l.useRef(null);
    l.useEffect(() => {
        var e;
        b && (null == (e = U.current) || e.focus());
    }, [b]);
    let D = l.useCallback(
            async (e) => {
                if ((e.preventDefault(), null != n)) {
                    S(!0), T(null);
                    try {
                        if (null != j) j(v, y);
                        else {
                            let e = await m.Z.createGuildFromTemplate(v, y, n, L, M);
                            s.Z.transitionToGuildSync(e.id), null == h || h(e.id);
                        }
                    } catch (e) {
                        T(e);
                    }
                    S(!1);
                }
            },
            [n, j, v, y, L, M, h],
        ),
        w = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(r.Button, {
                    variant: "primary",
                    text: null != j ? C.intl.string(C.t.PDTjLN) : C.intl.string(C.t.CumH4u),
                    onClick: D,
                    disabled: 0 === v.length,
                    loading: Z,
                }),
                (0, i.jsx)(r.Avr, {
                    size: "sm",
                    variant: "secondary",
                    text: C.intl.string(C.t["13/7kX"]),
                    onClick: f,
                }),
            ],
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(r.xBx, {
                    "data-migration-pending": !0,
                    direction: o.Z.Direction.VERTICAL,
                    className: g.header,
                    separator: !1,
                    children: [
                        (0, i.jsx)(r.Heading, {
                            className: g.title,
                            variant: "heading-xl/semibold",
                            children: C.intl.string(C.t["2H6Nij"]),
                        }),
                        (0, i.jsx)(r.Text, {
                            className: g.subtitle,
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: C.intl.string(C.t.AAfVqR),
                        }),
                        null != p &&
                            (0, i.jsx)(r.olH, {
                                "data-migration-pending": !0,
                                className: g.closeButton,
                                onClick: p,
                            }),
                    ],
                }),
                (0, i.jsxs)(r.hzk, {
                    "data-migration-pending": !0,
                    className: g.createGuild,
                    children: [
                        (0, i.jsx)("div", {
                            className: g.uploadIcon,
                            children: (0, i.jsx)(a.Z, {
                                icon: y,
                                onChange: O,
                            }),
                        }),
                        (0, i.jsx)("form", {
                            onSubmit: D,
                            children: (0, i.jsxs)(r.Kqy, {
                                gap: 16,
                                children: [
                                    (0, i.jsx)(r.oil, {
                                        label: C.intl.string(C.t.dBih7e),
                                        required: !0,
                                        error: null == N ? void 0 : N.getFirstFieldErrorMessage("name"),
                                        value: v,
                                        maxLength: 100,
                                        onChange: I,
                                        inputRef: U,
                                        id: G,
                                    }),
                                    E &&
                                        (0, i.jsx)(r.rsf, {
                                            label: "Staff Only",
                                            description: C.intl.string(C.t.edQ5va),
                                            checked: M,
                                            onChange: (e) => H(e),
                                        }),
                                    (0, i.jsx)(r.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: C.intl.format(C.t["2bprXx"], { guidelinesURL: x.EYA.GUIDELINES }),
                                    }),
                                ],
                            }),
                        }),
                        null == N || N.hasFieldErrors()
                            ? null
                            : (0, i.jsx)(r.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  children: N.message,
                              }),
                    ],
                }),
                _ &&
                    (0, i.jsx)(r.mzw, {
                        "data-migration-pending": !0,
                        className: g.footer,
                        children: w,
                    }),
            ],
        }),
        footer: w,
    };
}
function f(e) {
    let { content: t } = p(e);
    return t;
}
