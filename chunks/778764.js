n.d(t, { Z: () => S }), n(47120), n(773603);
var i = n(200651),
    s = n(192379),
    r = n(849055),
    l = n(442837),
    a = n(481060),
    o = n(239091),
    c = n(554300),
    d = n(313201),
    u = n(202858),
    m = n(287880),
    h = n(358085),
    g = n(960048),
    _ = n(998502),
    x = n(365007),
    p = n(15980),
    E = n(755733),
    C = n(981631),
    f = n(388032),
    T = n(421333);
function N(e) {
    let { transitionState: t, onClose: l, ticket: o, challenge: c } = e,
        m = (0, d.Dt)(),
        [p, N] = s.useState(''),
        [I, S] = s.useState(!0),
        [b, v] = s.useState(E.x.INIT),
        [j, A] = s.useState(''),
        [O, R] = s.useState(null),
        P = async () => {
            let e;
            v(E.x.REGISTER);
            let t = h.isPlatformEmbedded && _.ZP.supportsFeature(C.eRX.WEBAUTHN) ? _.ZP.webAuthnRegister(c) : r.Ue(JSON.parse(c)).then((e) => JSON.stringify(e));
            try {
                e = await t;
            } catch (e) {
                g.Z.captureException(e), R(f.intl.string(f.t.xSCvBQ)), v(E.x.INIT);
                return;
            }
            A(e), v(E.x.NAME);
        };
    return (0, i.jsxs)(a.Y0X, {
        transitionState: t,
        'aria-labelledby': m,
        children: [
            (0, i.jsxs)(a.xBx, {
                className: T.header,
                separator: !1,
                children: [
                    (0, i.jsxs)(a.X6q, {
                        id: m,
                        variant: 'heading-lg/semibold',
                        children: [b === E.x.INIT && f.intl.string(f.t.vrOCCg), b === E.x.REGISTER && f.intl.string(f.t.wePEBA), b === E.x.NAME && f.intl.string(f.t['cY/IOj'])]
                    }),
                    (0, i.jsx)(a.olH, {
                        onClick: l,
                        className: T.modalCloseButton
                    })
                ]
            }),
            (0, i.jsxs)(a.MyZ, {
                activeSlide: b,
                width: 440,
                children: [
                    (0, i.jsxs)(a.Mi4, {
                        id: E.x.INIT,
                        children: [
                            (0, i.jsxs)(a.hzk, {
                                className: T.content,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: T.icon,
                                        children: (0, i.jsx)('img', {
                                            alt: '',
                                            src: n(773072)
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        children:
                                            null != O &&
                                            (0, i.jsx)(a.Text, {
                                                variant: 'text-md/normal',
                                                color: 'status-danger',
                                                children: O
                                            })
                                    }),
                                    (0, i.jsx)('div', {
                                        children: (0, i.jsx)(a.Text, {
                                            variant: 'text-md/normal',
                                            children: f.intl.string(f.t.Lh5vTU)
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)(a.mzw, {
                                children: (0, i.jsx)(a.zxk, {
                                    onClick: P,
                                    children: f.intl.string(f.t.oibaQU)
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)(a.Mi4, {
                        id: E.x.REGISTER,
                        children: [
                            (0, i.jsxs)(a.hzk, {
                                className: T.content,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: T.icon,
                                        children: (0, i.jsx)('img', {
                                            alt: '',
                                            src: n(773072)
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        children: (0, i.jsx)(a.Text, {
                                            variant: 'text-md/normal',
                                            children: f.intl.string(f.t.aVMiX1)
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)(a.mzw, { children: (0, i.jsx)(a.zxk, { submitting: !0 }) })
                        ]
                    }),
                    (0, i.jsx)(a.Mi4, {
                        id: E.x.NAME,
                        children: (0, i.jsxs)('form', {
                            onSubmit: (e) => {
                                e.preventDefault(),
                                    (0, x.Sr)(p, o, j)
                                        .then(async () => {
                                            await (0, u.Yn)(!1);
                                        })
                                        .then(() => l())
                                        .catch(() => {
                                            R(f.intl.string(f.t.fEptJC)), v(E.x.INIT);
                                        });
                            },
                            children: [
                                (0, i.jsxs)(a.hzk, {
                                    className: T.content,
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: T.icon,
                                            children: (0, i.jsx)('img', {
                                                alt: '',
                                                src: n(637163)
                                            })
                                        }),
                                        (0, i.jsxs)('div', {
                                            children: [
                                                (0, i.jsx)(a.Text, {
                                                    variant: 'text-md/normal',
                                                    children: f.intl.string(f.t['Jzd+z8'])
                                                }),
                                                (0, i.jsx)(a.oil, {
                                                    className: T.input,
                                                    value: p,
                                                    onChange: (e) => {
                                                        N(e), S(0 === e.length);
                                                    },
                                                    autoFocus: !0,
                                                    minLength: 1
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(a.mzw, {
                                    className: T.footer,
                                    children: [
                                        (0, i.jsx)(a.zxk, {
                                            type: 'submit',
                                            disabled: I,
                                            children: f.intl.string(f.t['5dyZ1d'])
                                        }),
                                        (0, i.jsx)(a.zxk, {
                                            look: a.zxk.Looks.LINK,
                                            color: a.zxk.Colors.PRIMARY,
                                            onClick: () => {
                                                v(E.x.INIT);
                                            },
                                            children: f.intl.string(f.t['13/7kZ'])
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function I(e) {
    let { onSelect: t, credential: s } = e;
    return (0, i.jsxs)(a.v2r, {
        navId: 'webauthn-credential-actions',
        onClose: o.Zy,
        'aria-label': f.intl.string(f.t['+nrTbG']),
        onSelect: t,
        children: [
            (0, i.jsx)(a.sNh, {
                id: 'webauthn-edit-credential-'.concat(s.id),
                label: f.intl.string(f.t.bt75u7),
                action: () => {
                    (0, a.ZDy)(async () => {
                        let { default: e } = await n.e('804').then(n.bind(n, 89616));
                        return (t) =>
                            (0, i.jsx)(e, {
                                credential: s,
                                ...t
                            });
                    });
                }
            }),
            (0, i.jsx)(a.sNh, {
                id: 'webauthn-delete-credential-'.concat(s.id),
                label: f.intl.string(f.t['+xgS+P']),
                color: 'danger',
                action: () => {
                    (0, x.cT)(s);
                }
            })
        ]
    });
}
function S() {
    let { credentials: e, hasFetchedCredentials: t } = (0, l.cj)([p.Z], () => ({
        hasFetchedCredentials: p.Z.hasFetchedCredentials(),
        credentials: p.Z.getCredentials()
    }));
    s.useEffect(() => {
        t || (0, x.hL)();
    }, [t]);
    let [n, r] = s.useState(!1);
    return (0, i.jsxs)(a.hjN, {
        title: f.intl.string(f.t.y7SXYW),
        className: T.settings,
        children: [
            (0, i.jsx)(a.R94, {
                type: a.R94.Types.DESCRIPTION,
                className: T.description,
                children: f.intl.string(f.t.TMukAA)
            }),
            e.length > 0 &&
                (0, i.jsx)('div', {
                    className: T.credentialList,
                    children: e.map((e) =>
                        (0, i.jsx)(
                            c.Z,
                            {
                                avatar: null,
                                name: e.name,
                                className: T.credentialItem,
                                onContextMenu: (t) => {
                                    (0, o.vq)(t, (t) =>
                                        (0, i.jsx)(I, {
                                            ...t,
                                            credential: e
                                        })
                                    );
                                },
                                children: (0, i.jsx)(a.zxk, {
                                    look: a.zxk.Looks.BLANK,
                                    color: a.zxk.Colors.TRANSPARENT,
                                    size: a.zxk.Sizes.ICON,
                                    onClick: (t) => {
                                        (0, o.vq)(t, (t) =>
                                            (0, i.jsx)(I, {
                                                ...t,
                                                credential: e
                                            })
                                        );
                                    },
                                    'aria-label': f.intl.string(f.t['+nrTbG']),
                                    innerClassName: T.credentialOptions,
                                    children: (0, i.jsx)(a.Huf, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: T.__invalid_overflowIcon,
                                        colorClass: T.__invalid_overflowIconFg,
                                        'aria-hidden': !0
                                    })
                                })
                            },
                            e.id
                        )
                    )
                }),
            (0, i.jsx)('div', {
                children: (0, i.jsx)(a.zxk, {
                    onClick: () => {
                        r(!0),
                            (0, x.L$)()
                                .then((e) => {
                                    let { ticket: t, challenge: n } = e;
                                    (0, a.h7j)((e) =>
                                        (0, i.jsx)(N, {
                                            ...e,
                                            ticket: t,
                                            challenge: n
                                        })
                                    );
                                })
                                .catch((e) => {
                                    e.message !== f.intl.string(f.t.N2yb9f) && g.Z.captureException(e);
                                })
                                .finally(() => {
                                    r(!1);
                                });
                    },
                    submitting: n,
                    disabled: !m.Ae,
                    size: a.zxk.Sizes.SMALL,
                    children: f.intl.string(f.t.vrOCCg)
                })
            })
        ]
    });
}
