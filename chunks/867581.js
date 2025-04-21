let r, i;
n.d(t, { Z: () => D }), n(388685), n(781311), n(35282);
var l = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    c = n(481060),
    u = n(447543),
    _ = n(881052),
    d = n(600164),
    p = n(313201),
    m = n(703656),
    f = n(782605),
    I = n(981631),
    N = n(388032),
    T = n(400024),
    E = n(216019),
    S = n(286359);
let O = 'hTKzmak',
    C = (0, p.hQ)(),
    b = ((r = window.GLOBAL_ENV.INVITE_HOST), (i = ''), null == r && ((r = location.host), (i = I.Z5c.INVITE(''))), ''.concat(location.protocol, '//').concat(r).concat(i, '/')),
    g = [O, ''.concat(b).concat(O), ''.concat(b).concat('wumpus-friends')],
    L = (e) => {
        let { onClick: t } = e;
        return (0, l.jsxs)(c.P3F, {
            className: T.rowContainer,
            onClick: () => {
                t(), (0, m.uL)(I.Z5c.GUILD_DISCOVERY);
            },
            children: [
                (0, l.jsx)('img', {
                    width: 40,
                    height: 40,
                    className: T.rowIcon,
                    alt: '',
                    src: S
                }),
                (0, l.jsxs)('div', {
                    children: [
                        (0, l.jsx)(c.X6q, {
                            className: T.rowText,
                            variant: 'heading-md/semibold',
                            children: N.intl.string(N.t.DwDxDQ)
                        }),
                        (0, l.jsx)(c.Text, {
                            className: T.rowText,
                            variant: 'text-xs/normal',
                            children: N.intl.string(N.t['5RL4CA'])
                        })
                    ]
                }),
                (0, l.jsx)('img', {
                    className: T.rowArrow,
                    alt: '',
                    src: E
                })
            ]
        });
    };
function D(e) {
    let { onBack: t, onClose: n, isSlideReady: r } = e,
        [i, a] = o.useState(''),
        [p, m] = o.useState(!1),
        [I, E] = o.useState(null),
        S = o.useRef(null);
    o.useEffect(() => {
        var e;
        r && (null == (e = S.current) || e.focus());
    }, [r]);
    let D = (e) => {
        e.preventDefault();
        let t = i.trim();
        if ('' === t) return void E(N.intl.string(N.t.IRq5am));
        E(null), m(!0);
        let r = t.split('/'),
            l = r[r.length - 1];
        u.ZP.resolveInvite(l, 'Join Guild', { inputValue: t }).then(
            (e) => {
                let { invite: t } = e;
                if ((m(!1), null == t)) return void E(N.intl.string(N.t['GEYI+f']));
                if (null != t.channel) {
                    let e = u.ZP.getInviteContext('Join Guild', t);
                    u.ZP.acceptInvite({
                        inviteKey: t.code,
                        context: e,
                        callback: (e) => {
                            n(), u.ZP.transitionToInvite(e);
                        }
                    }).then(
                        () => {},
                        (e) => {
                            e instanceof _.yZ || e instanceof _.Hx ? E((0, f.O)(e.code)) : E(N.intl.string(N.t.dDZRd3));
                        }
                    );
                }
            },
            (e) => {
                m(!1);
                let t = new _.yZ(e);
                E((0, f.O)(t.code));
            }
        );
    };
    return (0, l.jsxs)('div', {
        children: [
            (0, l.jsxs)(c.xBx, {
                className: T.header,
                direction: d.Z.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, l.jsx)(c.X6q, {
                        className: T.title,
                        variant: 'heading-xl/semibold',
                        children: N.intl.string(N.t.riOUtL)
                    }),
                    (0, l.jsx)(c.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: N.intl.string(N.t['7jub2t'])
                    }),
                    (0, l.jsx)(c.olH, {
                        className: T.closeButton,
                        onClick: n
                    })
                ]
            }),
            (0, l.jsxs)(c.hzk, {
                className: T.__invalid_content,
                children: [
                    (0, l.jsx)('form', {
                        onSubmit: D,
                        className: T.inputForm,
                        children: (0, l.jsxs)(c.xJW, {
                            children: [
                                (0, l.jsx)(c.vwX, {
                                    id: C,
                                    error: I,
                                    className: s()(T.formTitle, { [T.error]: null != I }),
                                    required: !0,
                                    children: N.intl.string(N.t.qreV29)
                                }),
                                (0, l.jsx)(c.oil, {
                                    value: i,
                                    onChange: a,
                                    className: T.input,
                                    inputClassName: T.inputInner,
                                    placeholder: ''.concat(b).concat(O),
                                    inputRef: S,
                                    required: !0,
                                    'aria-labelledby': C
                                })
                            ]
                        })
                    }),
                    (0, l.jsx)(c.xJW, {
                        title: N.intl.string(N.t.Bnq46O),
                        titleClassName: T.formTitle,
                        className: T.examplesForm,
                        children: g.map((e) =>
                            (0, l.jsx)(
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
                    (0, l.jsx)(L, { onClick: n })
                ]
            }),
            (0, l.jsxs)(c.mzw, {
                className: T.footer,
                children: [
                    (0, l.jsx)(c.zxk, {
                        color: c.zxk.Colors.BRAND,
                        submitting: p,
                        onClick: D,
                        children: N.intl.string(N.t['Ts/9AQ'])
                    }),
                    (0, l.jsx)(c.zxk, {
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
