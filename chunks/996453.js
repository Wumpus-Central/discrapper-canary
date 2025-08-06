(n.d(t, {
    G: () => g,
    Z: () => f
}),
    n(388685));
var i = n(255367),
    s = n(73800),
    l = n(755721),
    a = n(481060),
    r = n(749210),
    o = n(820160),
    c = n(600164),
    d = n(313201),
    u = n(594174),
    m = n(892880),
    x = n(458879),
    C = n(981631),
    h = n(388032),
    p = n(685554);
function g(e) {
    var t;
    let { guildTemplate: n, onClose: g, onBack: f, onHubGuildInfoSet: j, onGuildCreated: _, isSlideReady: b, hasFooter: L = !0, isCommunity: N = !1 } = e,
        [I, y] = s.useState(m.Z.getGuildNameSuggestion()),
        [v, Z] = s.useState(null),
        [S, E] = s.useState(!1),
        [T, O] = s.useState(null),
        B = !!(null == (t = u.default.getCurrentUser()) ? void 0 : t.isStaff()),
        [M, k] = s.useState(B),
        H = (0, d.Dt)(),
        D = s.useRef(null);
    s.useEffect(() => {
        var e;
        b && (null == (e = D.current) || e.focus());
    }, [b]);
    let G = s.useCallback(
            async (e) => {
                if ((e.preventDefault(), null != n)) {
                    (E(!0), O(null));
                    try {
                        if (null != j) j(I, v);
                        else {
                            let e = await x.Z.createGuildFromTemplate(I, v, n, N, M);
                            (r.Z.transitionToGuildSync(e.id), null == _ || _(e.id));
                        }
                    } catch (e) {
                        O(e);
                    }
                    E(!1);
                }
            },
            [n, j, I, v, N, M, _]
        ),
        w = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.zxk, {
                    variant: 'primary',
                    text: null != j ? h.intl.string(h.t.PDTjLC) : h.intl.string(h.t.CumH4u),
                    onClick: G,
                    disabled: 0 === I.length,
                    loading: S
                }),
                (0, i.jsx)(l.zx, {
                    className: p.backButton,
                    look: l.zx.Looks.BLANK,
                    size: l.zx.Sizes.MIN,
                    onClick: f,
                    children: h.intl.string(h.t['13/7kZ'])
                })
            ]
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(a.xBx, {
                    direction: c.Z.Direction.VERTICAL,
                    className: p.header,
                    separator: !1,
                    children: [
                        (0, i.jsx)(a.X6q, {
                            className: p.title,
                            variant: 'heading-xl/semibold',
                            children: h.intl.string(h.t['2H6Nio'])
                        }),
                        (0, i.jsx)(a.Text, {
                            className: p.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: h.intl.string(h.t.AAfVqa)
                        }),
                        null != g &&
                            (0, i.jsx)(a.olH, {
                                className: p.closeButton,
                                onClick: g
                            })
                    ]
                }),
                (0, i.jsxs)(a.hzk, {
                    className: p.createGuild,
                    children: [
                        (0, i.jsx)('div', {
                            className: p.uploadIcon,
                            children: (0, i.jsx)(o.Z, {
                                icon: v,
                                onChange: Z
                            })
                        }),
                        (0, i.jsxs)('form', {
                            onSubmit: G,
                            children: [
                                (0, i.jsxs)(a.xJW, {
                                    className: p.nameInput,
                                    error: null == T ? void 0 : T.getFirstFieldErrorMessage('name'),
                                    children: [
                                        (0, i.jsx)(a.vwX, {
                                            tag: 'label',
                                            htmlFor: H,
                                            children: h.intl.string(h.t.dBih7e)
                                        }),
                                        (0, i.jsx)(a.oil, {
                                            type: 'text',
                                            value: I,
                                            maxLength: 100,
                                            onChange: y,
                                            inputRef: D,
                                            id: H
                                        })
                                    ]
                                }),
                                B &&
                                    (0, i.jsx)(a.j7V, {
                                        hideBorder: !0,
                                        value: M,
                                        onChange: (e) => k(e),
                                        note: h.intl.string(h.t.edQ5vb),
                                        className: p.formItemSpaced,
                                        children: (0, i.jsx)(a.vwX, {
                                            tag: 'label',
                                            children: 'Staff Only'
                                        })
                                    }),
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    className: p.guidelines,
                                    children: h.intl.format(h.t['2bprX1'], { guidelinesURL: C.EYA.GUIDELINES })
                                })
                            ]
                        }),
                        null == T || T.hasFieldErrors()
                            ? null
                            : (0, i.jsx)(a.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'text-danger',
                                  children: T.message
                              })
                    ]
                }),
                L &&
                    (0, i.jsx)(a.mzw, {
                        justify: c.Z.Justify.BETWEEN,
                        children: w
                    })
            ]
        }),
        footer: w
    };
}
function f(e) {
    let { content: t } = g(e);
    return t;
}
