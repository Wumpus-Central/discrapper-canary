n.d(t, {
    G: () => h,
    Z: () => g,
}),
    n(388685);
var i = n(951288),
    s = n(647438),
    l = n(481060),
    r = n(749210),
    a = n(820160),
    o = n(600164),
    c = n(313201),
    d = n(594174),
    u = n(892880),
    m = n(458879),
    x = n(981631),
    C = n(388032),
    p = n(960780);
function h(e) {
    var t;
    let {
            guildTemplate: n,
            onClose: h,
            onBack: g,
            onHubGuildInfoSet: f,
            onGuildCreated: j,
            isSlideReady: _,
            hasFooter: b = !0,
            isCommunity: L = !1,
        } = e,
        [v, I] = s.useState(u.Z.getGuildNameSuggestion()),
        [N, y] = s.useState(null),
        [Z, O] = s.useState(!1),
        [T, E] = s.useState(null),
        S = !!(null == (t = d.default.getCurrentUser()) ? void 0 : t.isStaff()),
        [M, H] = s.useState(S),
        G = (0, c.Dt)(),
        k = s.useRef(null);
    s.useEffect(() => {
        var e;
        _ && (null == (e = k.current) || e.focus());
    }, [_]);
    let D = s.useCallback(
            async (e) => {
                if ((e.preventDefault(), null != n)) {
                    O(!0), E(null);
                    try {
                        if (null != f) f(v, N);
                        else {
                            let e = await m.Z.createGuildFromTemplate(v, N, n, L, M);
                            r.Z.transitionToGuildSync(e.id), null == j || j(e.id);
                        }
                    } catch (e) {
                        E(e);
                    }
                    O(!1);
                }
            },
            [n, f, v, N, L, M, j],
        ),
        w = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.zxk, {
                    variant: "primary",
                    text: null != f ? C.intl.string(C.t.PDTjLC) : C.intl.string(C.t.CumH4u),
                    onClick: D,
                    disabled: 0 === v.length,
                    loading: Z,
                }),
                (0, i.jsx)(l.Avr, {
                    size: "sm",
                    variant: "secondary",
                    text: C.intl.string(C.t["13/7kZ"]),
                    onClick: g,
                }),
            ],
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(l.xBx, {
                    direction: o.Z.Direction.VERTICAL,
                    className: p.header,
                    separator: !1,
                    children: [
                        (0, i.jsx)(l.X6q, {
                            className: p.title,
                            variant: "heading-xl/semibold",
                            children: C.intl.string(C.t["2H6Nio"]),
                        }),
                        (0, i.jsx)(l.Text, {
                            className: p.subtitle,
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: C.intl.string(C.t.AAfVqa),
                        }),
                        null != h &&
                            (0, i.jsx)(l.olH, {
                                className: p.closeButton,
                                onClick: h,
                            }),
                    ],
                }),
                (0, i.jsxs)(l.hzk, {
                    className: p.createGuild,
                    children: [
                        (0, i.jsx)("div", {
                            className: p.uploadIcon,
                            children: (0, i.jsx)(a.Z, {
                                icon: N,
                                onChange: y,
                            }),
                        }),
                        (0, i.jsxs)("form", {
                            onSubmit: D,
                            children: [
                                (0, i.jsx)(l.oil, {
                                    label: C.intl.string(C.t.dBih7e),
                                    required: !0,
                                    error: null == T ? void 0 : T.getFirstFieldErrorMessage("name"),
                                    value: v,
                                    maxLength: 100,
                                    onChange: I,
                                    inputRef: k,
                                    id: G,
                                }),
                                S &&
                                    (0, i.jsx)(l.j7V, {
                                        hideBorder: !0,
                                        value: M,
                                        onChange: (e) => H(e),
                                        note: C.intl.string(C.t.edQ5vb),
                                        className: p.formItemSpaced,
                                        children: (0, i.jsx)(l.vwX, { children: "Staff Only" }),
                                    }),
                                (0, i.jsx)(l.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    className: p.guidelines,
                                    children: C.intl.format(C.t["2bprX1"], { guidelinesURL: x.EYA.GUIDELINES }),
                                }),
                            ],
                        }),
                        null == T || T.hasFieldErrors()
                            ? null
                            : (0, i.jsx)(l.Text, {
                                  variant: "text-xs/normal",
                                  color: "text-danger",
                                  children: T.message,
                              }),
                    ],
                }),
                b &&
                    (0, i.jsx)(l.mzw, {
                        className: p.footer,
                        children: w,
                    }),
            ],
        }),
        footer: w,
    };
}
function g(e) {
    let { content: t } = h(e);
    return t;
}
