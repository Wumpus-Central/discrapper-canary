n.d(t, {
    G: () => f,
    Z: () => _
}),
    n(47120);
var s = n(200651),
    i = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(749210),
    c = n(820160),
    d = n(600164),
    u = n(313201),
    m = n(594174),
    x = n(892880),
    C = n(458879),
    h = n(981631),
    g = n(388032),
    p = n(583311);
function f(e) {
    var t;
    let { guildTemplate: n, onClose: r, onBack: f, onHubGuildInfoSet: _, onGuildCreated: j, isSlideReady: N, hasFooter: b = !0, isCommunity: L = !1 } = e,
        [I, y] = i.useState(x.Z.getGuildNameSuggestion()),
        [v, Z] = i.useState(null),
        [S, T] = i.useState(!1),
        [k, E] = i.useState(null),
        O = !!(null === (t = m.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()),
        [B, M] = i.useState(O),
        H = (0, u.Dt)(),
        D = i.useRef(null);
    i.useEffect(() => {
        var e;
        N && (null === (e = D.current) || void 0 === e || e.focus());
    }, [N]);
    let w = i.useCallback(
            async (e) => {
                if ((e.preventDefault(), null != n)) {
                    T(!0), E(null);
                    try {
                        if (null != _) _(I, v);
                        else {
                            let e = await C.Z.createGuildFromTemplate(I, v, n, L, B);
                            o.Z.transitionToGuildSync(e.id), null == j || j(e.id);
                        }
                    } catch (e) {
                        E(e);
                    }
                    T(!1);
                }
            },
            [n, _, I, v, L, B, j]
        ),
        G = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(a.zxk, {
                    color: a.zxk.Colors.BRAND,
                    onClick: w,
                    disabled: 0 === I.length,
                    submitting: S,
                    children: null != _ ? g.NW.string(g.t.PDTjLC) : g.NW.string(g.t.CumH4u)
                }),
                (0, s.jsx)(a.zxk, {
                    className: p.backButton,
                    look: a.zxk.Looks.BLANK,
                    size: a.zxk.Sizes.MIN,
                    onClick: f,
                    children: g.NW.string(g.t['13/7kZ'])
                })
            ]
        });
    return {
        content: (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(a.xBx, {
                    direction: d.Z.Direction.VERTICAL,
                    className: p.header,
                    separator: !1,
                    children: [
                        (0, s.jsx)(a.X6q, {
                            className: l()(p.title),
                            variant: 'heading-xl/semibold',
                            children: g.NW.string(g.t['2H6Nio'])
                        }),
                        (0, s.jsx)(a.Text, {
                            className: p.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: g.NW.string(g.t.AAfVqa)
                        }),
                        null != r &&
                            (0, s.jsx)(a.olH, {
                                className: p.closeButton,
                                onClick: r
                            })
                    ]
                }),
                (0, s.jsxs)(a.hzk, {
                    className: p.createGuild,
                    children: [
                        (0, s.jsx)('div', {
                            className: p.uploadIcon,
                            children: (0, s.jsx)(c.Z, {
                                icon: v,
                                onChange: Z
                            })
                        }),
                        (0, s.jsxs)('form', {
                            onSubmit: w,
                            children: [
                                (0, s.jsxs)(a.xJW, {
                                    className: p.nameInput,
                                    error: null == k ? void 0 : k.getFirstFieldErrorMessage('name'),
                                    children: [
                                        (0, s.jsx)(a.vwX, {
                                            tag: 'label',
                                            htmlFor: H,
                                            children: g.NW.string(g.t.dBih7e)
                                        }),
                                        (0, s.jsx)(a.oil, {
                                            type: 'text',
                                            value: I,
                                            maxLength: 100,
                                            onChange: y,
                                            inputRef: D,
                                            id: H
                                        })
                                    ]
                                }),
                                O &&
                                    (0, s.jsx)(a.j7V, {
                                        hideBorder: !0,
                                        value: B,
                                        onChange: (e) => M(e),
                                        note: g.NW.string(g.t.edQ5vb),
                                        className: p.formItemSpaced,
                                        children: (0, s.jsx)(a.vwX, {
                                            tag: 'label',
                                            children: 'Staff Only'
                                        })
                                    }),
                                (0, s.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    className: p.guidelines,
                                    children: g.NW.format(g.t['2bprX1'], { guidelinesURL: h.EYA.GUIDELINES })
                                })
                            ]
                        }),
                        null == k || k.hasFieldErrors()
                            ? null
                            : (0, s.jsx)(a.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'text-danger',
                                  children: k.message
                              })
                    ]
                }),
                b &&
                    (0, s.jsx)(a.mzw, {
                        justify: d.Z.Justify.BETWEEN,
                        children: G
                    })
            ]
        }),
        footer: G
    };
}
function _(e) {
    let { content: t } = f(e);
    return t;
}
