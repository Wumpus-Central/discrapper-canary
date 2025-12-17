n.d(t, {
    G: () => C,
    Z: () => j,
}),
    n(388685);
var i = n(54381),
    a = n(473749),
    l = n(481060),
    r = n(749210),
    s = n(820160),
    o = n(600164),
    c = n(313201),
    d = n(594174),
    u = n(892880),
    f = n(458879),
    m = n(981631),
    x = n(388032),
    g = n(666863);
function C(e) {
    var t;
    let {
            guildTemplate: n,
            onClose: C,
            onBack: j,
            onHubGuildInfoSet: p,
            onGuildCreated: b,
            isSlideReady: h,
            hasFooter: L = !0,
            isCommunity: v = !1,
        } = e,
        [y, Z] = a.useState(u.Z.getGuildNameSuggestion()),
        [O, I] = a.useState(null),
        [S, T] = a.useState(!1),
        [N, _] = a.useState(null),
        E = !!(null == (t = d.default.getCurrentUser()) ? void 0 : t.isStaff()),
        [H, M] = a.useState(E),
        G = (0, c.Dt)(),
        w = a.useRef(null);
    a.useEffect(() => {
        var e;
        h && (null == (e = w.current) || e.focus());
    }, [h]);
    let k = a.useCallback(
            async (e) => {
                if ((e.preventDefault(), null != n)) {
                    T(!0), _(null);
                    try {
                        if (null != p) p(y, O);
                        else {
                            let e = await f.Z.createGuildFromTemplate(y, O, n, v, H);
                            r.Z.transitionToGuildSync(e.id), null == b || b(e.id);
                        }
                    } catch (e) {
                        _(e);
                    }
                    T(!1);
                }
            },
            [n, p, y, O, v, H, b],
        ),
        U = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.Button, {
                    variant: "primary",
                    text: null != p ? x.intl.string(x.t.PDTjLN) : x.intl.string(x.t.CumH4u),
                    onClick: k,
                    disabled: 0 === y.length,
                    loading: S,
                }),
                (0, i.jsx)(l.Avr, {
                    size: "sm",
                    variant: "secondary",
                    text: x.intl.string(x.t["13/7kX"]),
                    onClick: j,
                }),
            ],
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(l.xBx, {
                    "data-migration-pending": !0,
                    direction: o.Z.Direction.VERTICAL,
                    className: g.header,
                    separator: !1,
                    children: [
                        (0, i.jsx)(l.Heading, {
                            className: g.title,
                            variant: "heading-xl/semibold",
                            children: x.intl.string(x.t["2H6Nij"]),
                        }),
                        (0, i.jsx)(l.Text, {
                            className: g.subtitle,
                            color: "text-default",
                            variant: "text-md/normal",
                            children: x.intl.string(x.t.AAfVqR),
                        }),
                        null != C &&
                            (0, i.jsx)(l.olH, {
                                "data-migration-pending": !0,
                                className: g.closeButton,
                                onClick: C,
                            }),
                    ],
                }),
                (0, i.jsxs)(l.hzk, {
                    "data-migration-pending": !0,
                    className: g.createGuild,
                    children: [
                        (0, i.jsx)("div", {
                            className: g.uploadIcon,
                            children: (0, i.jsx)(s.Z, {
                                icon: O,
                                onChange: I,
                            }),
                        }),
                        (0, i.jsx)("form", {
                            onSubmit: k,
                            children: (0, i.jsxs)(l.Kqy, {
                                gap: 16,
                                children: [
                                    (0, i.jsx)(l.oil, {
                                        label: x.intl.string(x.t.dBih7e),
                                        required: !0,
                                        error: null == N ? void 0 : N.getFirstFieldErrorMessage("name"),
                                        value: y,
                                        maxLength: 100,
                                        onChange: Z,
                                        inputRef: w,
                                        id: G,
                                    }),
                                    E &&
                                        (0, i.jsx)(l.rsf, {
                                            label: "Staff Only",
                                            description: x.intl.string(x.t.edQ5va),
                                            checked: H,
                                            onChange: (e) => M(e),
                                        }),
                                    (0, i.jsx)(l.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: x.intl.format(x.t["2bprXx"], { guidelinesURL: m.EYA.GUIDELINES }),
                                    }),
                                ],
                            }),
                        }),
                        null == N || N.hasFieldErrors()
                            ? null
                            : (0, i.jsx)(l.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  children: N.message,
                              }),
                    ],
                }),
                L &&
                    (0, i.jsx)(l.mzw, {
                        "data-migration-pending": !0,
                        className: g.footer,
                        children: U,
                    }),
            ],
        }),
        footer: U,
    };
}
function j(e) {
    let { content: t } = C(e);
    return t;
}
