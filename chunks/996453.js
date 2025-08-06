(e.d(n, {
    G: () => g,
    Z: () => x
}),
    e(388685));
var i = e(255367),
    l = e(73800),
    a = e(755721),
    s = e(481060),
    r = e(749210),
    d = e(820160),
    c = e(600164),
    o = e(313201),
    m = e(594174),
    C = e(892880),
    p = e(458879),
    u = e(981631),
    _ = e(388032),
    L = e(685554);
function g(t) {
    var n;
    let { guildTemplate: e, onClose: g, onBack: x, onHubGuildInfoSet: T, onGuildCreated: E, isSlideReady: h, hasFooter: I = !0, isCommunity: G = !1 } = t,
        [y, D] = l.useState(C.Z.getGuildNameSuggestion()),
        [z, U] = l.useState(null),
        [j, N] = l.useState(!1),
        [f, A] = l.useState(null),
        M = !!(null == (n = m.default.getCurrentUser()) ? void 0 : n.isStaff()),
        [S, v] = l.useState(M),
        O = (0, o.Dt)(),
        R = l.useRef(null);
    l.useEffect(() => {
        var t;
        h && (null == (t = R.current) || t.focus());
    }, [h]);
    let Z = l.useCallback(
            async (t) => {
                if ((t.preventDefault(), null != e)) {
                    (N(!0), A(null));
                    try {
                        if (null != T) T(y, z);
                        else {
                            let t = await p.Z.createGuildFromTemplate(y, z, e, G, S);
                            (r.Z.transitionToGuildSync(t.id), null == E || E(t.id));
                        }
                    } catch (t) {
                        A(t);
                    }
                    N(!1);
                }
            },
            [e, T, y, z, G, S, E]
        ),
        b = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.zxk, {
                    variant: 'primary',
                    text: null != T ? _.intl.string(_.t.PDTjLC) : _.intl.string(_.t.CumH4u),
                    onClick: Z,
                    disabled: 0 === y.length,
                    loading: j
                }),
                (0, i.jsx)(a.zx, {
                    className: L.backButton,
                    look: a.zx.Looks.BLANK,
                    size: a.zx.Sizes.MIN,
                    onClick: x,
                    children: _.intl.string(_.t['13/7kZ'])
                })
            ]
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(s.xBx, {
                    direction: c.Z.Direction.VERTICAL,
                    className: L.header,
                    separator: !1,
                    children: [
                        (0, i.jsx)(s.X6q, {
                            className: L.title,
                            variant: 'heading-xl/semibold',
                            children: _.intl.string(_.t['2H6Nio'])
                        }),
                        (0, i.jsx)(s.Text, {
                            className: L.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: _.intl.string(_.t.AAfVqa)
                        }),
                        null != g &&
                            (0, i.jsx)(s.olH, {
                                className: L.closeButton,
                                onClick: g
                            })
                    ]
                }),
                (0, i.jsxs)(s.hzk, {
                    className: L.createGuild,
                    children: [
                        (0, i.jsx)('div', {
                            className: L.uploadIcon,
                            children: (0, i.jsx)(d.Z, {
                                icon: z,
                                onChange: U
                            })
                        }),
                        (0, i.jsxs)('form', {
                            onSubmit: Z,
                            children: [
                                (0, i.jsxs)(s.xJW, {
                                    className: L.nameInput,
                                    error: null == f ? void 0 : f.getFirstFieldErrorMessage('name'),
                                    children: [
                                        (0, i.jsx)(s.vwX, {
                                            tag: 'label',
                                            htmlFor: O,
                                            children: _.intl.string(_.t.dBih7e)
                                        }),
                                        (0, i.jsx)(s.oil, {
                                            type: 'text',
                                            value: y,
                                            maxLength: 100,
                                            onChange: D,
                                            inputRef: R,
                                            id: O
                                        })
                                    ]
                                }),
                                M &&
                                    (0, i.jsx)(s.j7V, {
                                        hideBorder: !0,
                                        value: S,
                                        onChange: (t) => v(t),
                                        note: _.intl.string(_.t.edQ5vb),
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
                                    children: _.intl.format(_.t['2bprX1'], { guidelinesURL: u.EYA.GUIDELINES })
                                })
                            ]
                        }),
                        null == f || f.hasFieldErrors()
                            ? null
                            : (0, i.jsx)(s.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'text-danger',
                                  children: f.message
                              })
                    ]
                }),
                I &&
                    (0, i.jsx)(s.mzw, {
                        justify: c.Z.Justify.BETWEEN,
                        children: b
                    })
            ]
        }),
        footer: b
    };
}
function x(t) {
    let { content: n } = g(t);
    return n;
}
