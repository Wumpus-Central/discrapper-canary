n.d(t, {
    G: () => L,
    Z: () => _
}),
    n(388685);
var i = n(200651),
    s = n(192379),
    a = n(481060),
    l = n(749210),
    r = n(820160),
    d = n(600164),
    c = n(313201),
    o = n(594174),
    C = n(892880),
    m = n(458879),
    p = n(981631),
    N = n(388032),
    u = n(685554);
function L(e) {
    var t;
    let { guildTemplate: n, onClose: L, onBack: _, onHubGuildInfoSet: g, onGuildCreated: x, isSlideReady: T, hasFooter: E = !0, isCommunity: h = !1 } = e,
        [I, G] = s.useState(C.Z.getGuildNameSuggestion()),
        [W, D] = s.useState(null),
        [y, U] = s.useState(!1),
        [z, j] = s.useState(null),
        f = !!(null == (t = o.default.getCurrentUser()) ? void 0 : t.isStaff()),
        [A, M] = s.useState(f),
        S = (0, c.Dt)(),
        O = s.useRef(null);
    s.useEffect(() => {
        var e;
        T && (null == (e = O.current) || e.focus());
    }, [T]);
    let R = s.useCallback(
            async (e) => {
                if ((e.preventDefault(), null != n)) {
                    U(!0), j(null);
                    try {
                        if (null != g) g(I, W);
                        else {
                            let e = await m.Z.createGuildFromTemplate(I, W, n, h, A);
                            l.Z.transitionToGuildSync(e.id), null == x || x(e.id);
                        }
                    } catch (e) {
                        j(e);
                    }
                    U(!1);
                }
            },
            [n, g, I, W, h, A, x]
        ),
        v = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.zxk, {
                    color: a.zxk.Colors.BRAND,
                    onClick: R,
                    disabled: 0 === I.length,
                    submitting: y,
                    children: null != g ? N.NW.string(N.t.PDTjLC) : N.NW.string(N.t.CumH4u)
                }),
                (0, i.jsx)(a.zxk, {
                    className: u.backButton,
                    look: a.zxk.Looks.BLANK,
                    size: a.zxk.Sizes.MIN,
                    onClick: _,
                    children: N.NW.string(N.t['13/7kZ'])
                })
            ]
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(a.xBx, {
                    direction: d.Z.Direction.VERTICAL,
                    className: u.header,
                    separator: !1,
                    children: [
                        (0, i.jsx)(a.X6q, {
                            className: u.title,
                            variant: 'heading-xl/semibold',
                            children: N.NW.string(N.t['2H6Nio'])
                        }),
                        (0, i.jsx)(a.Text, {
                            className: u.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: N.NW.string(N.t.AAfVqa)
                        }),
                        null != L &&
                            (0, i.jsx)(a.olH, {
                                className: u.closeButton,
                                onClick: L
                            })
                    ]
                }),
                (0, i.jsxs)(a.hzk, {
                    className: u.createGuild,
                    children: [
                        (0, i.jsx)('div', {
                            className: u.uploadIcon,
                            children: (0, i.jsx)(r.Z, {
                                icon: W,
                                onChange: D
                            })
                        }),
                        (0, i.jsxs)('form', {
                            onSubmit: R,
                            children: [
                                (0, i.jsxs)(a.xJW, {
                                    className: u.nameInput,
                                    error: null == z ? void 0 : z.getFirstFieldErrorMessage('name'),
                                    children: [
                                        (0, i.jsx)(a.vwX, {
                                            tag: 'label',
                                            htmlFor: S,
                                            children: N.NW.string(N.t.dBih7e)
                                        }),
                                        (0, i.jsx)(a.oil, {
                                            type: 'text',
                                            value: I,
                                            maxLength: 100,
                                            onChange: G,
                                            inputRef: O,
                                            id: S
                                        })
                                    ]
                                }),
                                f &&
                                    (0, i.jsx)(a.j7V, {
                                        hideBorder: !0,
                                        value: A,
                                        onChange: (e) => M(e),
                                        note: N.NW.string(N.t.edQ5vb),
                                        className: u.formItemSpaced,
                                        children: (0, i.jsx)(a.vwX, {
                                            tag: 'label',
                                            children: 'Staff Only'
                                        })
                                    }),
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    className: u.guidelines,
                                    children: N.NW.format(N.t['2bprX1'], { guidelinesURL: p.EYA.GUIDELINES })
                                })
                            ]
                        }),
                        null == z || z.hasFieldErrors()
                            ? null
                            : (0, i.jsx)(a.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'text-danger',
                                  children: z.message
                              })
                    ]
                }),
                E &&
                    (0, i.jsx)(a.mzw, {
                        justify: d.Z.Justify.BETWEEN,
                        children: v
                    })
            ]
        }),
        footer: v
    };
}
function _(e) {
    let { content: t } = L(e);
    return t;
}
