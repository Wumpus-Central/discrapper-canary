n.d(t, {
    G: function () {
        return L;
    },
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(481060),
    r = n(749210),
    c = n(820160),
    d = n(600164),
    u = n(313201),
    m = n(594174),
    C = n(892880),
    x = n(458879),
    f = n(981631),
    h = n(388032),
    g = n(732881);
function L(e) {
    var t;
    let { guildTemplate: n, onClose: s, onBack: L, onHubGuildInfoSet: p, onGuildCreated: b, isSlideReady: j, hasFooter: _ = !0, isCommunity: I = !1 } = e,
        [N, B] = l.useState(C.Z.getGuildNameSuggestion()),
        [T, Z] = l.useState(null),
        [S, M] = l.useState(!1),
        [E, v] = l.useState(null),
        H = !!(null === (t = m.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()),
        [y, A] = l.useState(H),
        D = (0, u.Dt)(),
        k = l.useRef(null);
    l.useEffect(() => {
        var e;
        j && (null === (e = k.current) || void 0 === e || e.focus());
    }, [j]);
    let R = l.useCallback(
            async (e) => {
                if ((e.preventDefault(), null != n)) {
                    M(!0), v(null);
                    try {
                        if (null != p) p(N, T);
                        else {
                            let e = await x.Z.createGuildFromTemplate(N, T, n, I, y);
                            r.Z.transitionToGuildSync(e.id), null == b || b(e.id);
                        }
                    } catch (e) {
                        v(e);
                    }
                    M(!1);
                }
            },
            [n, p, N, T, I, y, b]
        ),
        U = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.Button, {
                    color: o.Button.Colors.BRAND,
                    onClick: R,
                    disabled: 0 === N.length,
                    submitting: S,
                    children: null != p ? h.intl.string(h.t.PDTjLC) : h.intl.string(h.t.CumH4u)
                }),
                (0, i.jsx)(o.Button, {
                    className: g.backButton,
                    look: o.Button.Looks.BLANK,
                    size: o.Button.Sizes.MIN,
                    onClick: L,
                    children: h.intl.string(h.t['13/7kZ'])
                })
            ]
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(o.ModalHeader, {
                    direction: d.Z.Direction.VERTICAL,
                    className: g.header,
                    separator: !1,
                    children: [
                        (0, i.jsx)(o.Heading, {
                            className: a()(g.title),
                            variant: 'heading-xl/semibold',
                            children: h.intl.string(h.t['2H6Nio'])
                        }),
                        (0, i.jsx)(o.Text, {
                            className: g.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: h.intl.string(h.t.AAfVqa)
                        }),
                        null != s &&
                            (0, i.jsx)(o.ModalCloseButton, {
                                className: g.closeButton,
                                onClick: s
                            })
                    ]
                }),
                (0, i.jsxs)(o.ModalContent, {
                    className: g.createGuild,
                    children: [
                        (0, i.jsx)('div', {
                            className: g.uploadIcon,
                            children: (0, i.jsx)(c.Z, {
                                icon: T,
                                onChange: Z
                            })
                        }),
                        (0, i.jsxs)('form', {
                            onSubmit: R,
                            children: [
                                (0, i.jsxs)(o.FormItem, {
                                    className: g.nameInput,
                                    error: null == E ? void 0 : E.getFirstFieldErrorMessage('name'),
                                    children: [
                                        (0, i.jsx)(o.FormTitle, {
                                            tag: 'label',
                                            htmlFor: D,
                                            children: h.intl.string(h.t.dBih7e)
                                        }),
                                        (0, i.jsx)(o.TextInput, {
                                            type: 'text',
                                            value: N,
                                            maxLength: 100,
                                            onChange: B,
                                            inputRef: k,
                                            id: D
                                        })
                                    ]
                                }),
                                H &&
                                    (0, i.jsx)(o.FormSwitch, {
                                        hideBorder: !0,
                                        value: y,
                                        onChange: (e) => A(e),
                                        note: h.intl.string(h.t.edQ5vb),
                                        className: g.formItemSpaced,
                                        children: (0, i.jsx)(o.FormTitle, {
                                            tag: 'label',
                                            children: 'Staff Only'
                                        })
                                    }),
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'text-muted',
                                    className: g.guidelines,
                                    children: h.intl.format(h.t['2bprX1'], { guidelinesURL: f.EYA.GUIDELINES })
                                })
                            ]
                        }),
                        null == E || E.hasFieldErrors()
                            ? null
                            : (0, i.jsx)(o.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'text-danger',
                                  children: E.message
                              })
                    ]
                }),
                _ &&
                    (0, i.jsx)(o.ModalFooter, {
                        justify: d.Z.Justify.BETWEEN,
                        children: U
                    })
            ]
        }),
        footer: U
    };
}
function p(e) {
    let { content: t } = L(e);
    return t;
}
