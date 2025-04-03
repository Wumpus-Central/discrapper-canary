let r, o;
n.d(t, { Z: () => D }), n(47120), n(566702), n(301563);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    s = n.n(a),
    c = n(481060),
    u = n(447543),
    _ = n(881052),
    d = n(600164),
    p = n(313201),
    m = n(703656),
    f = n(782605),
    N = n(981631),
    I = n(388032),
    T = n(400024),
    E = n(216019),
    S = n(286359);
let O = 'hTKzmak',
    C = (0, p.hQ)(),
    b = ((r = window.GLOBAL_ENV.INVITE_HOST), (o = ''), null == r && ((r = location.host), (o = N.Z5c.INVITE(''))), ''.concat(location.protocol, '//').concat(r).concat(o, '/')),
    g = [O, ''.concat(b).concat(O), ''.concat(b).concat('wumpus-friends')],
    L = (e) => {
        let { onClick: t } = e;
        return (0, i.jsxs)(c.P3F, {
            className: T.rowContainer,
            onClick: () => {
                t(), (0, m.uL)(N.Z5c.GUILD_DISCOVERY);
            },
            children: [
                (0, i.jsx)('img', {
                    width: 40,
                    height: 40,
                    className: T.rowIcon,
                    alt: '',
                    src: S
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(c.X6q, {
                            className: T.rowText,
                            variant: 'heading-md/semibold',
                            children: I.NW.string(I.t.DwDxDQ)
                        }),
                        (0, i.jsx)(c.Text, {
                            className: T.rowText,
                            variant: 'text-xs/normal',
                            children: I.NW.string(I.t['5RL4CA'])
                        })
                    ]
                }),
                (0, i.jsx)('img', {
                    className: T.rowArrow,
                    alt: '',
                    src: E
                })
            ]
        });
    };
function D(e) {
    let { onBack: t, onClose: n, isSlideReady: r } = e,
        [o, a] = l.useState(''),
        [p, m] = l.useState(!1),
        [N, E] = l.useState(null),
        S = l.useRef(null);
    l.useEffect(() => {
        var e;
        r && (null == (e = S.current) || e.focus());
    }, [r]);
    let D = (e) => {
        e.preventDefault();
        let t = o.trim();
        if ('' === t) return void E(I.NW.string(I.t.IRq5am));
        E(null), m(!0);
        let r = t.split('/'),
            i = r[r.length - 1];
        u.ZP.resolveInvite(i, 'Join Guild', { inputValue: t }).then(
            (e) => {
                let { invite: t } = e;
                if ((m(!1), null == t)) return void E(I.NW.string(I.t['GEYI+f']));
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
                            e instanceof _.yZ || e instanceof _.Hx ? E((0, f.O)(e.code)) : E(I.NW.string(I.t.dDZRd3));
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
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsxs)(c.xBx, {
                className: T.header,
                direction: d.Z.Direction.VERTICAL,
                separator: !1,
                children: [
                    (0, i.jsx)(c.X6q, {
                        className: T.title,
                        variant: 'heading-xl/semibold',
                        children: I.NW.string(I.t.riOUtL)
                    }),
                    (0, i.jsx)(c.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: I.NW.string(I.t['7jub2t'])
                    }),
                    (0, i.jsx)(c.olH, {
                        className: T.closeButton,
                        onClick: n
                    })
                ]
            }),
            (0, i.jsxs)(c.hzk, {
                className: T.__invalid_content,
                children: [
                    (0, i.jsx)('form', {
                        onSubmit: D,
                        className: T.inputForm,
                        children: (0, i.jsxs)(c.xJW, {
                            children: [
                                (0, i.jsx)(c.vwX, {
                                    id: C,
                                    error: N,
                                    className: s()(T.formTitle, { [T.error]: null != N }),
                                    required: !0,
                                    children: I.NW.string(I.t.qreV29)
                                }),
                                (0, i.jsx)(c.oil, {
                                    value: o,
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
                    (0, i.jsx)(c.xJW, {
                        title: I.NW.string(I.t.Bnq46O),
                        titleClassName: T.formTitle,
                        className: T.examplesForm,
                        children: g.map((e) =>
                            (0, i.jsx)(
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
                    (0, i.jsx)(L, { onClick: n })
                ]
            }),
            (0, i.jsxs)(c.mzw, {
                className: T.footer,
                children: [
                    (0, i.jsx)(c.zxk, {
                        color: c.zxk.Colors.BRAND,
                        submitting: p,
                        onClick: D,
                        children: I.NW.string(I.t['Ts/9AQ'])
                    }),
                    (0, i.jsx)(c.zxk, {
                        color: c.zxk.Colors.PRIMARY,
                        look: c.zxk.Looks.LINK,
                        size: c.zxk.Sizes.MIN,
                        onClick: t,
                        children: I.NW.string(I.t['13/7kZ'])
                    })
                ]
            })
        ]
    });
}
