i.d(t, {
    G: () => f,
    Z: () => j
}),
    i(47120);
var n = i(200651),
    s = i(192379),
    l = i(120356),
    a = i.n(l),
    r = i(481060),
    o = i(749210),
    c = i(820160),
    d = i(600164),
    u = i(313201),
    m = i(594174),
    x = i(892880),
    C = i(458879),
    h = i(981631),
    _ = i(388032),
    g = i(732881);
function f(e) {
    var t;
    let { guildTemplate: i, onClose: l, onBack: f, onHubGuildInfoSet: j, onGuildCreated: p, isSlideReady: L, hasFooter: N = !0, isCommunity: I = !1 } = e,
        [b, Z] = s.useState(x.Z.getGuildNameSuggestion()),
        [T, k] = s.useState(null),
        [v, E] = s.useState(!1),
        [S, B] = s.useState(null),
        M = !!(null === (t = m.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()),
        [H, y] = s.useState(M),
        G = (0, u.Dt)(),
        U = s.useRef(null);
    s.useEffect(() => {
        var e;
        L && (null === (e = U.current) || void 0 === e || e.focus());
    }, [L]);
    let R = s.useCallback(
            async (e) => {
                if ((e.preventDefault(), null != i)) {
                    E(!0), B(null);
                    try {
                        if (null != j) j(b, T);
                        else {
                            let e = await C.Z.createGuildFromTemplate(b, T, i, I, H);
                            o.Z.transitionToGuildSync(e.id), null == p || p(e.id);
                        }
                    } catch (e) {
                        B(e);
                    }
                    E(!1);
                }
            },
            [i, j, b, T, I, H, p]
        ),
        D = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(r.zxk, {
                    color: r.zxk.Colors.BRAND,
                    onClick: R,
                    disabled: 0 === b.length,
                    submitting: v,
                    children: null != j ? _.intl.string(_.t.PDTjLC) : _.intl.string(_.t.CumH4u)
                }),
                (0, n.jsx)(r.zxk, {
                    className: g.backButton,
                    look: r.zxk.Looks.BLANK,
                    size: r.zxk.Sizes.MIN,
                    onClick: f,
                    children: _.intl.string(_.t['13/7kZ'])
                })
            ]
        });
    return {
        content: (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(r.xBx, {
                    direction: d.Z.Direction.VERTICAL,
                    className: g.header,
                    separator: !1,
                    children: [
                        (0, n.jsx)(r.X6q, {
                            className: a()(g.title),
                            variant: 'heading-xl/semibold',
                            children: _.intl.string(_.t['2H6Nio'])
                        }),
                        (0, n.jsx)(r.Text, {
                            className: g.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: _.intl.string(_.t.AAfVqa)
                        }),
                        null != l &&
                            (0, n.jsx)(r.olH, {
                                className: g.closeButton,
                                onClick: l
                            })
                    ]
                }),
                (0, n.jsxs)(r.hzk, {
                    className: g.createGuild,
                    children: [
                        (0, n.jsx)('div', {
                            className: g.uploadIcon,
                            children: (0, n.jsx)(c.Z, {
                                icon: T,
                                onChange: k
                            })
                        }),
                        (0, n.jsxs)('form', {
                            onSubmit: R,
                            children: [
                                (0, n.jsxs)(r.xJW, {
                                    className: g.nameInput,
                                    error: null == S ? void 0 : S.getFirstFieldErrorMessage('name'),
                                    children: [
                                        (0, n.jsx)(r.vwX, {
                                            tag: 'label',
                                            htmlFor: G,
                                            children: _.intl.string(_.t.dBih7e)
                                        }),
                                        (0, n.jsx)(r.oil, {
                                            type: 'text',
                                            value: b,
                                            maxLength: 100,
                                            onChange: Z,
                                            inputRef: U,
                                            id: G
                                        })
                                    ]
                                }),
                                M &&
                                    (0, n.jsx)(r.j7V, {
                                        hideBorder: !0,
                                        value: H,
                                        onChange: (e) => y(e),
                                        note: _.intl.string(_.t.edQ5vb),
                                        className: g.formItemSpaced,
                                        children: (0, n.jsx)(r.vwX, {
                                            tag: 'label',
                                            children: 'Staff Only'
                                        })
                                    }),
                                (0, n.jsx)(r.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    className: g.guidelines,
                                    children: _.intl.format(_.t['2bprX1'], { guidelinesURL: h.EYA.GUIDELINES })
                                })
                            ]
                        }),
                        null == S || S.hasFieldErrors()
                            ? null
                            : (0, n.jsx)(r.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'text-danger',
                                  children: S.message
                              })
                    ]
                }),
                N &&
                    (0, n.jsx)(r.mzw, {
                        justify: d.Z.Justify.BETWEEN,
                        children: D
                    })
            ]
        }),
        footer: D
    };
}
function j(e) {
    let { content: t } = f(e);
    return t;
}
