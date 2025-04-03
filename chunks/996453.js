n.d(t, {
    G: () => g,
    Z: () => p
}),
    n(47120);
var s = n(200651),
    i = n(192379),
    r = n(481060),
    l = n(749210),
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
    let { guildTemplate: n, onClose: g, onBack: p, onHubGuildInfoSet: f, onGuildCreated: _, isSlideReady: j, hasFooter: N = !0, isCommunity: b = !1 } = e,
        [L, I] = i.useState(u.Z.getGuildNameSuggestion()),
        [y, v] = i.useState(null),
        [Z, S] = i.useState(!1),
        [T, E] = i.useState(null),
        k = !!(null == (t = d.default.getCurrentUser()) ? void 0 : t.isStaff()),
        [O, B] = i.useState(k),
        M = (0, c.Dt)(),
        H = i.useRef(null);
    i.useEffect(() => {
        var e;
        j && (null == (e = H.current) || e.focus());
    }, [j]);
    let D = i.useCallback(
            async (e) => {
                if ((e.preventDefault(), null != n)) {
                    S(!0), E(null);
                    try {
                        if (null != f) f(L, y);
                        else {
                            let e = await m.Z.createGuildFromTemplate(L, y, n, b, O);
                            l.Z.transitionToGuildSync(e.id), null == _ || _(e.id);
                        }
                    } catch (e) {
                        E(e);
                    }
                    S(!1);
                }
            },
            [n, f, L, y, b, O, _]
        ),
        w = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(r.zxk, {
                    color: r.zxk.Colors.BRAND,
                    onClick: D,
                    disabled: 0 === L.length,
                    submitting: Z,
                    children: null != f ? C.NW.string(C.t.PDTjLC) : C.NW.string(C.t.CumH4u)
                }),
                (0, s.jsx)(r.zxk, {
                    className: h.backButton,
                    look: r.zxk.Looks.BLANK,
                    size: r.zxk.Sizes.MIN,
                    onClick: p,
                    children: C.NW.string(C.t['13/7kZ'])
                })
            ]
        });
    return {
        content: (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)(r.xBx, {
                    direction: o.Z.Direction.VERTICAL,
                    className: h.header,
                    separator: !1,
                    children: [
                        (0, s.jsx)(r.X6q, {
                            className: h.title,
                            variant: 'heading-xl/semibold',
                            children: C.NW.string(C.t['2H6Nio'])
                        }),
                        (0, s.jsx)(r.Text, {
                            className: h.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: C.NW.string(C.t.AAfVqa)
                        }),
                        null != g &&
                            (0, s.jsx)(r.olH, {
                                className: h.closeButton,
                                onClick: g
                            })
                    ]
                }),
                (0, s.jsxs)(r.hzk, {
                    className: h.createGuild,
                    children: [
                        (0, s.jsx)('div', {
                            className: h.uploadIcon,
                            children: (0, s.jsx)(a.Z, {
                                icon: y,
                                onChange: v
                            })
                        }),
                        (0, s.jsxs)('form', {
                            onSubmit: D,
                            children: [
                                (0, s.jsxs)(r.xJW, {
                                    className: h.nameInput,
                                    error: null == T ? void 0 : T.getFirstFieldErrorMessage('name'),
                                    children: [
                                        (0, s.jsx)(r.vwX, {
                                            tag: 'label',
                                            htmlFor: M,
                                            children: C.NW.string(C.t.dBih7e)
                                        }),
                                        (0, s.jsx)(r.oil, {
                                            type: 'text',
                                            value: L,
                                            maxLength: 100,
                                            onChange: I,
                                            inputRef: H,
                                            id: M
                                        })
                                    ]
                                }),
                                k &&
                                    (0, s.jsx)(r.j7V, {
                                        hideBorder: !0,
                                        value: O,
                                        onChange: (e) => B(e),
                                        note: C.NW.string(C.t.edQ5vb),
                                        className: h.formItemSpaced,
                                        children: (0, s.jsx)(r.vwX, {
                                            tag: 'label',
                                            children: 'Staff Only'
                                        })
                                    }),
                                (0, s.jsx)(r.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    className: h.guidelines,
                                    children: C.NW.format(C.t['2bprX1'], { guidelinesURL: x.EYA.GUIDELINES })
                                })
                            ]
                        }),
                        null == T || T.hasFieldErrors()
                            ? null
                            : (0, s.jsx)(r.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'text-danger',
                                  children: T.message
                              })
                    ]
                }),
                N &&
                    (0, s.jsx)(r.mzw, {
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
