n.d(t, {
    G: () => g,
    Z: () => p
}),
    n(388685);
var i = n(200651),
    s = n(192379),
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
    h = n(685554);
function g(e) {
    var t;
    let { guildTemplate: n, onClose: g, onBack: p, onHubGuildInfoSet: f, onGuildCreated: _, isSlideReady: j, hasFooter: b = !0, isCommunity: L = !1 } = e,
        [N, I] = s.useState(u.Z.getGuildNameSuggestion()),
        [y, v] = s.useState(null),
        [Z, S] = s.useState(!1),
        [T, E] = s.useState(null),
        k = !!(null == (t = d.default.getCurrentUser()) ? void 0 : t.isStaff()),
        [O, B] = s.useState(k),
        M = (0, c.Dt)(),
        H = s.useRef(null);
    s.useEffect(() => {
        var e;
        j && (null == (e = H.current) || e.focus());
    }, [j]);
    let D = s.useCallback(
            async (e) => {
                if ((e.preventDefault(), null != n)) {
                    S(!0), E(null);
                    try {
                        if (null != f) f(N, y);
                        else {
                            let e = await m.Z.createGuildFromTemplate(N, y, n, L, O);
                            r.Z.transitionToGuildSync(e.id), null == _ || _(e.id);
                        }
                    } catch (e) {
                        E(e);
                    }
                    S(!1);
                }
            },
            [n, f, N, y, L, O, _]
        ),
        w = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.zxk, {
                    color: l.zxk.Colors.BRAND,
                    onClick: D,
                    disabled: 0 === N.length,
                    submitting: Z,
                    children: null != f ? C.intl.string(C.t.PDTjLC) : C.intl.string(C.t.CumH4u)
                }),
                (0, i.jsx)(l.zxk, {
                    className: h.backButton,
                    look: l.zxk.Looks.BLANK,
                    size: l.zxk.Sizes.MIN,
                    onClick: p,
                    children: C.intl.string(C.t['13/7kZ'])
                })
            ]
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(l.xBx, {
                    direction: o.Z.Direction.VERTICAL,
                    className: h.header,
                    separator: !1,
                    children: [
                        (0, i.jsx)(l.X6q, {
                            className: h.title,
                            variant: 'heading-xl/semibold',
                            children: C.intl.string(C.t['2H6Nio'])
                        }),
                        (0, i.jsx)(l.Text, {
                            className: h.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: C.intl.string(C.t.AAfVqa)
                        }),
                        null != g &&
                            (0, i.jsx)(l.olH, {
                                className: h.closeButton,
                                onClick: g
                            })
                    ]
                }),
                (0, i.jsxs)(l.hzk, {
                    className: h.createGuild,
                    children: [
                        (0, i.jsx)('div', {
                            className: h.uploadIcon,
                            children: (0, i.jsx)(a.Z, {
                                icon: y,
                                onChange: v
                            })
                        }),
                        (0, i.jsxs)('form', {
                            onSubmit: D,
                            children: [
                                (0, i.jsxs)(l.xJW, {
                                    className: h.nameInput,
                                    error: null == T ? void 0 : T.getFirstFieldErrorMessage('name'),
                                    children: [
                                        (0, i.jsx)(l.vwX, {
                                            tag: 'label',
                                            htmlFor: M,
                                            children: C.intl.string(C.t.dBih7e)
                                        }),
                                        (0, i.jsx)(l.oil, {
                                            type: 'text',
                                            value: N,
                                            maxLength: 100,
                                            onChange: I,
                                            inputRef: H,
                                            id: M
                                        })
                                    ]
                                }),
                                k &&
                                    (0, i.jsx)(l.j7V, {
                                        hideBorder: !0,
                                        value: O,
                                        onChange: (e) => B(e),
                                        note: C.intl.string(C.t.edQ5vb),
                                        className: h.formItemSpaced,
                                        children: (0, i.jsx)(l.vwX, {
                                            tag: 'label',
                                            children: 'Staff Only'
                                        })
                                    }),
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    className: h.guidelines,
                                    children: C.intl.format(C.t['2bprX1'], { guidelinesURL: x.EYA.GUIDELINES })
                                })
                            ]
                        }),
                        null == T || T.hasFieldErrors()
                            ? null
                            : (0, i.jsx)(l.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'text-danger',
                                  children: T.message
                              })
                    ]
                }),
                b &&
                    (0, i.jsx)(l.mzw, {
                        justify: o.Z.Justify.BETWEEN,
                        children: w
                    })
            ]
        }),
        footer: w
    };
}
function p(e) {
    let { content: t } = g(e);
    return t;
}
