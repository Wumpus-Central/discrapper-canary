n.d(t, {
    G: () => p,
    Z: () => f,
}),
    n(388685);
var i = n(951288),
    l = n(647438),
    s = n(481060),
    r = n(749210),
    a = n(820160),
    o = n(600164),
    c = n(313201),
    d = n(594174),
    u = n(892880),
    m = n(458879),
    x = n(981631),
    C = n(388032),
    g = n(800268);
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
        [I, v] = l.useState(u.Z.getGuildNameSuggestion()),
        [y, Z] = l.useState(null),
        [O, S] = l.useState(!1),
        [T, N] = l.useState(null),
        E = !!(null == (t = d.default.getCurrentUser()) ? void 0 : t.isStaff()),
        [M, G] = l.useState(E),
        H = (0, c.Dt)(),
        U = l.useRef(null);
    l.useEffect(() => {
        var e;
        b && (null == (e = U.current) || e.focus());
    }, [b]);
    let D = l.useCallback(
            async (e) => {
                if ((e.preventDefault(), null != n)) {
                    S(!0), N(null);
                    try {
                        if (null != j) j(I, y);
                        else {
                            let e = await m.Z.createGuildFromTemplate(I, y, n, L, M);
                            r.Z.transitionToGuildSync(e.id), null == h || h(e.id);
                        }
                    } catch (e) {
                        N(e);
                    }
                    S(!1);
                }
            },
            [n, j, I, y, L, M, h],
        ),
        w = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.zxk, {
                    variant: "primary",
                    text: null != j ? C.intl.string(C.t.PDTjLC) : C.intl.string(C.t.CumH4u),
                    onClick: D,
                    disabled: 0 === I.length,
                    loading: O,
                }),
                (0, i.jsx)(s.Avr, {
                    size: "sm",
                    variant: "secondary",
                    text: C.intl.string(C.t["13/7kZ"]),
                    onClick: f,
                }),
            ],
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(s.xBx, {
                    direction: o.Z.Direction.VERTICAL,
                    className: g.header,
                    separator: !1,
                    children: [
                        (0, i.jsx)(s.X6q, {
                            className: g.title,
                            variant: "heading-xl/semibold",
                            children: C.intl.string(C.t["2H6Nio"]),
                        }),
                        (0, i.jsx)(s.Text, {
                            className: g.subtitle,
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: C.intl.string(C.t.AAfVqa),
                        }),
                        null != p &&
                            (0, i.jsx)(s.olH, {
                                className: g.closeButton,
                                onClick: p,
                            }),
                    ],
                }),
                (0, i.jsxs)(s.hzk, {
                    className: g.createGuild,
                    children: [
                        (0, i.jsx)("div", {
                            className: g.uploadIcon,
                            children: (0, i.jsx)(a.Z, {
                                icon: y,
                                onChange: Z,
                            }),
                        }),
                        (0, i.jsx)("form", {
                            onSubmit: D,
                            children: (0, i.jsxs)(s.Kqy, {
                                gap: 16,
                                children: [
                                    (0, i.jsx)(s.oil, {
                                        label: C.intl.string(C.t.dBih7e),
                                        required: !0,
                                        error: null == T ? void 0 : T.getFirstFieldErrorMessage("name"),
                                        value: I,
                                        maxLength: 100,
                                        onChange: v,
                                        inputRef: U,
                                        id: H,
                                    }),
                                    E &&
                                        (0, i.jsx)(s.rsf, {
                                            label: "Staff Only",
                                            description: C.intl.string(C.t.edQ5vb),
                                            checked: M,
                                            onChange: (e) => G(e),
                                        }),
                                    (0, i.jsx)(s.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: C.intl.format(C.t["2bprX1"], { guidelinesURL: x.EYA.GUIDELINES }),
                                    }),
                                ],
                            }),
                        }),
                        null == T || T.hasFieldErrors()
                            ? null
                            : (0, i.jsx)(s.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-danger",
                                  children: T.message,
                              }),
                    ],
                }),
                _ &&
                    (0, i.jsx)(s.mzw, {
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
