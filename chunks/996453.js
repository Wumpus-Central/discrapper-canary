e.d(n, {
    G: () => _,
    Z: () => g
}),
    e(388685);
var i = e(200651),
    l = e(192379),
    s = e(481060),
    a = e(749210),
    r = e(820160),
    d = e(600164),
    c = e(313201),
    o = e(594174),
    C = e(892880),
    m = e(458879),
    p = e(981631),
    u = e(388032),
    L = e(685554);
function _(t) {
    var n;
    let { guildTemplate: e, onClose: _, onBack: g, onHubGuildInfoSet: x, onGuildCreated: T, isSlideReady: E, hasFooter: h = !0, isCommunity: I = !1 } = t,
        [G, D] = l.useState(C.Z.getGuildNameSuggestion()),
        [y, U] = l.useState(null),
        [z, N] = l.useState(!1),
        [j, f] = l.useState(null),
        A = !!(null == (n = o.default.getCurrentUser()) ? void 0 : n.isStaff()),
        [M, S] = l.useState(A),
        O = (0, c.Dt)(),
        R = l.useRef(null);
    l.useEffect(() => {
        var t;
        E && (null == (t = R.current) || t.focus());
    }, [E]);
    let v = l.useCallback(
            async (t) => {
                if ((t.preventDefault(), null != e)) {
                    N(!0), f(null);
                    try {
                        if (null != x) x(G, y);
                        else {
                            let t = await m.Z.createGuildFromTemplate(G, y, e, I, M);
                            a.Z.transitionToGuildSync(t.id), null == T || T(t.id);
                        }
                    } catch (t) {
                        f(t);
                    }
                    N(!1);
                }
            },
            [e, x, G, y, I, M, T]
        ),
        k = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.zxk, {
                    color: s.zxk.Colors.BRAND,
                    onClick: v,
                    disabled: 0 === G.length,
                    submitting: z,
                    children: null != x ? u.intl.string(u.t.PDTjLC) : u.intl.string(u.t.CumH4u)
                }),
                (0, i.jsx)(s.zxk, {
                    className: L.backButton,
                    look: s.zxk.Looks.BLANK,
                    size: s.zxk.Sizes.MIN,
                    onClick: g,
                    children: u.intl.string(u.t['13/7kZ'])
                })
            ]
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(s.xBx, {
                    direction: d.Z.Direction.VERTICAL,
                    className: L.header,
                    separator: !1,
                    children: [
                        (0, i.jsx)(s.X6q, {
                            className: L.title,
                            variant: 'heading-xl/semibold',
                            children: u.intl.string(u.t['2H6Nio'])
                        }),
                        (0, i.jsx)(s.Text, {
                            className: L.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: u.intl.string(u.t.AAfVqa)
                        }),
                        null != _ &&
                            (0, i.jsx)(s.olH, {
                                className: L.closeButton,
                                onClick: _
                            })
                    ]
                }),
                (0, i.jsxs)(s.hzk, {
                    className: L.createGuild,
                    children: [
                        (0, i.jsx)('div', {
                            className: L.uploadIcon,
                            children: (0, i.jsx)(r.Z, {
                                icon: y,
                                onChange: U
                            })
                        }),
                        (0, i.jsxs)('form', {
                            onSubmit: v,
                            children: [
                                (0, i.jsxs)(s.xJW, {
                                    className: L.nameInput,
                                    error: null == j ? void 0 : j.getFirstFieldErrorMessage('name'),
                                    children: [
                                        (0, i.jsx)(s.vwX, {
                                            tag: 'label',
                                            htmlFor: O,
                                            children: u.intl.string(u.t.dBih7e)
                                        }),
                                        (0, i.jsx)(s.oil, {
                                            type: 'text',
                                            value: G,
                                            maxLength: 100,
                                            onChange: D,
                                            inputRef: R,
                                            id: O
                                        })
                                    ]
                                }),
                                A &&
                                    (0, i.jsx)(s.j7V, {
                                        hideBorder: !0,
                                        value: M,
                                        onChange: (t) => S(t),
                                        note: u.intl.string(u.t.edQ5vb),
                                        className: L.formItemSpaced,
                                        children: (0, i.jsx)(s.vwX, {
                                            tag: 'label',
                                            children: 'Staff Only'
                                        })
                                    }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    className: L.guidelines,
                                    children: u.intl.format(u.t['2bprX1'], { guidelinesURL: p.EYA.GUIDELINES })
                                })
                            ]
                        }),
                        null == j || j.hasFieldErrors()
                            ? null
                            : (0, i.jsx)(s.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'text-danger',
                                  children: j.message
                              })
                    ]
                }),
                h &&
                    (0, i.jsx)(s.mzw, {
                        justify: d.Z.Justify.BETWEEN,
                        children: k
                    })
            ]
        }),
        footer: k
    };
}
function g(t) {
    let { content: n } = _(t);
    return n;
}
