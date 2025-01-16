let i, l;
n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var r = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    c = n(481060),
    u = n(447543),
    d = n(881052),
    _ = n(600164),
    m = n(313201),
    p = n(703656),
    I = n(782605),
    f = n(981631),
    N = n(388032),
    T = n(44922),
    C = n(216019),
    E = n(286359);
let S = 'hTKzmak',
    L = (0, m.hQ)();
let A = ((i = window.GLOBAL_ENV.INVITE_HOST), (l = ''), null == i && ((i = location.host), (l = f.Z5c.INVITE(''))), ''.concat(location.protocol, '//').concat(i).concat(l, '/')),
    D = [S, ''.concat(A).concat(S), ''.concat(A).concat('cool-people')],
    U = (e) => {
        let { onClick: t } = e;
        return (0, r.jsxs)(c.Clickable, {
            className: T.rowContainer,
            onClick: () => {
                t(), (0, p.uL)(f.Z5c.GUILD_DISCOVERY);
            },
            children: [
                (0, r.jsx)('img', {
                    width: 40,
                    height: 40,
                    className: T.rowIcon,
                    alt: '',
                    src: E
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(c.Heading, {
                            className: T.rowText,
                            variant: 'heading-md/semibold',
                            children: N.intl.string(N.t.DwDxDQ)
                        }),
                        (0, r.jsx)(c.Text, {
                            className: T.rowText,
                            variant: 'text-xs/normal',
                            children: N.intl.string(N.t['5RL4CA'])
                        })
                    ]
                }),
                (0, r.jsx)('img', {
                    className: T.rowArrow,
                    alt: '',
                    src: C
                })
            ]
        });
    };
function h(e) {
    let { onBack: t, onClose: n, isSlideReady: i } = e,
        [l, a] = o.useState(''),
        [m, p] = o.useState(!1),
        [f, C] = o.useState(null),
        E = o.useRef(null);
    o.useEffect(() => {
        var e;
        i && (null === (e = E.current) || void 0 === e || e.focus());
    }, [i]);
    let h = (e) => {
        e.preventDefault();
        let t = l.trim();
        if ('' === t) {
            C(N.intl.string(N.t.IRq5am));
            return;
        }
        C(null), p(!0);
        let i = t.split('/'),
            r = i[i.length - 1];
        u.Z.resolveInvite(r, 'Join Guild', { inputValue: t }).then(
            (e) => {
                let { invite: t } = e;
                if ((p(!1), null == t)) {
                    C(N.intl.string(N.t['GEYI+f']));
                    return;
                }
                if (null != t.channel) {
                    let e = u.Z.getInviteContext('Join Guild', t);
                    u.Z.acceptInvite({
                        inviteKey: t.code,
                        context: e,
                        callback: (e) => {
                            n(), u.Z.transitionToInvite(e);
                        }
                    }).then(
                        () => {},
                        (e) => {
                            e instanceof d.yZ || e instanceof d.Hx ? C((0, I.O)(e.code)) : C(N.intl.string(N.t.dDZRd3));
                        }
                    );
                }
            },
            (e) => {
                p(!1);
                let t = new d.yZ(e);
                C((0, I.O)(t.code));
            }
        );
    };
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsxs)(c.ModalHeader, {
                className: T.header,
                direction: _.Z.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, r.jsx)(c.Heading, {
                        className: T.title,
                        variant: 'heading-xl/semibold',
                        children: N.intl.string(N.t.riOUtL)
                    }),
                    (0, r.jsx)(c.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: N.intl.string(N.t['7jub2t'])
                    }),
                    (0, r.jsx)(c.ModalCloseButton, {
                        className: T.closeButton,
                        onClick: n
                    })
                ]
            }),
            (0, r.jsxs)(c.ModalContent, {
                className: T.__invalid_content,
                children: [
                    (0, r.jsx)('form', {
                        onSubmit: h,
                        className: T.inputForm,
                        children: (0, r.jsxs)(c.FormItem, {
                            children: [
                                (0, r.jsx)(c.FormTitle, {
                                    id: L,
                                    error: f,
                                    className: s()(T.formTitle, { [T.error]: null != f }),
                                    required: !0,
                                    children: N.intl.string(N.t.qreV29)
                                }),
                                (0, r.jsx)(c.TextInput, {
                                    value: l,
                                    onChange: a,
                                    className: T.input,
                                    inputClassName: T.inputInner,
                                    placeholder: ''.concat(A).concat(S),
                                    inputRef: E,
                                    required: !0,
                                    'aria-labelledby': L
                                })
                            ]
                        })
                    }),
                    (0, r.jsx)(c.FormItem, {
                        title: N.intl.string(N.t.Bnq46O),
                        titleClassName: T.formTitle,
                        className: T.examplesForm,
                        children: D.map((e) =>
                            (0, r.jsx)(
                                c.Clickable,
                                {
                                    className: T.sampleLink,
                                    onClick: () => a(e),
                                    children: e
                                },
                                e
                            )
                        )
                    }),
                    (0, r.jsx)(U, { onClick: n })
                ]
            }),
            (0, r.jsxs)(c.ModalFooter, {
                className: T.footer,
                children: [
                    (0, r.jsx)(c.Button, {
                        color: c.Button.Colors.BRAND,
                        submitting: m,
                        onClick: h,
                        children: N.intl.string(N.t['Ts/9AQ'])
                    }),
                    (0, r.jsx)(c.Button, {
                        color: c.Button.Colors.PRIMARY,
                        look: c.Button.Looks.LINK,
                        size: c.Button.Sizes.MIN,
                        onClick: t,
                        children: N.intl.string(N.t['13/7kZ'])
                    })
                ]
            })
        ]
    });
}
