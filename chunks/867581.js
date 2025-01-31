let i, l;
n.d(t, { Z: () => U }), n(47120);
var r = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    c = n(481060),
    u = n(447543),
    _ = n(881052),
    d = n(600164),
    m = n(313201),
    p = n(703656),
    I = n(782605),
    f = n(981631),
    N = n(388032),
    T = n(44922),
    E = n(216019),
    C = n(286359);
let S = 'hTKzmak',
    L = (0, m.hQ)(),
    A = ((i = window.GLOBAL_ENV.INVITE_HOST), (l = ''), null == i && ((i = location.host), (l = f.Z5c.INVITE(''))), ''.concat(location.protocol, '//').concat(i).concat(l, '/')),
    D = [S, ''.concat(A).concat(S), ''.concat(A).concat('wumpus-friends')],
    x = (e) => {
        let { onClick: t } = e;
        return (0, r.jsxs)(c.P3F, {
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
                    src: C
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(c.X6q, {
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
                    src: E
                })
            ]
        });
    };
function U(e) {
    let { onBack: t, onClose: n, isSlideReady: i } = e,
        [l, a] = o.useState(''),
        [m, p] = o.useState(!1),
        [f, E] = o.useState(null),
        C = o.useRef(null);
    o.useEffect(() => {
        var e;
        i && (null === (e = C.current) || void 0 === e || e.focus());
    }, [i]);
    let U = (e) => {
        e.preventDefault();
        let t = l.trim();
        if ('' === t) {
            E(N.intl.string(N.t.IRq5am));
            return;
        }
        E(null), p(!0);
        let i = t.split('/'),
            r = i[i.length - 1];
        u.Z.resolveInvite(r, 'Join Guild', { inputValue: t }).then(
            (e) => {
                let { invite: t } = e;
                if ((p(!1), null == t)) {
                    E(N.intl.string(N.t['GEYI+f']));
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
                            e instanceof _.yZ || e instanceof _.Hx ? E((0, I.O)(e.code)) : E(N.intl.string(N.t.dDZRd3));
                        }
                    );
                }
            },
            (e) => {
                p(!1);
                let t = new _.yZ(e);
                E((0, I.O)(t.code));
            }
        );
    };
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsxs)(c.xBx, {
                className: T.header,
                direction: d.Z.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, r.jsx)(c.X6q, {
                        className: T.title,
                        variant: 'heading-xl/semibold',
                        children: N.intl.string(N.t.riOUtL)
                    }),
                    (0, r.jsx)(c.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: N.intl.string(N.t['7jub2t'])
                    }),
                    (0, r.jsx)(c.olH, {
                        className: T.closeButton,
                        onClick: n
                    })
                ]
            }),
            (0, r.jsxs)(c.hzk, {
                className: T.__invalid_content,
                children: [
                    (0, r.jsx)('form', {
                        onSubmit: U,
                        className: T.inputForm,
                        children: (0, r.jsxs)(c.xJW, {
                            children: [
                                (0, r.jsx)(c.vwX, {
                                    id: L,
                                    error: f,
                                    className: s()(T.formTitle, { [T.error]: null != f }),
                                    required: !0,
                                    children: N.intl.string(N.t.qreV29)
                                }),
                                (0, r.jsx)(c.oil, {
                                    value: l,
                                    onChange: a,
                                    className: T.input,
                                    inputClassName: T.inputInner,
                                    placeholder: ''.concat(A).concat(S),
                                    inputRef: C,
                                    required: !0,
                                    'aria-labelledby': L
                                })
                            ]
                        })
                    }),
                    (0, r.jsx)(c.xJW, {
                        title: N.intl.string(N.t.Bnq46O),
                        titleClassName: T.formTitle,
                        className: T.examplesForm,
                        children: D.map((e) =>
                            (0, r.jsx)(
                                c.P3F,
                                {
                                    className: T.sampleLink,
                                    onClick: () => a(e),
                                    children: e
                                },
                                e
                            )
                        )
                    }),
                    (0, r.jsx)(x, { onClick: n })
                ]
            }),
            (0, r.jsxs)(c.mzw, {
                className: T.footer,
                children: [
                    (0, r.jsx)(c.zxk, {
                        color: c.zxk.Colors.BRAND,
                        submitting: m,
                        onClick: U,
                        children: N.intl.string(N.t['Ts/9AQ'])
                    }),
                    (0, r.jsx)(c.zxk, {
                        color: c.zxk.Colors.PRIMARY,
                        look: c.zxk.Looks.LINK,
                        size: c.zxk.Sizes.MIN,
                        onClick: t,
                        children: N.intl.string(N.t['13/7kZ'])
                    })
                ]
            })
        ]
    });
}
