n.d(t, { Z: () => S }), n(47120), n(773603);
var i = n(200651),
    s = n(192379),
    l = n(849055),
    r = n(442837),
    a = n(481060),
    o = n(239091),
    c = n(554300),
    d = n(313201),
    u = n(202858),
    h = n(287880),
    m = n(358085),
    g = n(960048),
    x = n(998502),
    _ = n(365007),
    p = n(15980),
    E = n(755733),
    C = n(981631),
    f = n(388032),
    N = n(384989);
function I(e) {
    let { transitionState: t, onClose: r, ticket: o, challenge: c } = e,
        h = (0, d.Dt)(),
        [p, I] = s.useState(''),
        [T, S] = s.useState(!0),
        [j, v] = s.useState(E.x.INIT),
        [b, A] = s.useState(''),
        [O, R] = s.useState(null),
        D = async () => {
            let e;
            v(E.x.REGISTER);
            let t = m.isPlatformEmbedded && x.ZP.supportsFeature(C.eRX.WEBAUTHN) ? x.ZP.webAuthnRegister(c) : l.Ue(JSON.parse(c)).then((e) => JSON.stringify(e));
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
        'aria-labelledby': h,
        children: [
            (0, i.jsxs)(a.xBx, {
                className: N.header,
                separator: !1,
                children: [
                    (0, i.jsxs)(a.X6q, {
                        id: h,
                        variant: 'heading-lg/semibold',
                        children: [j === E.x.INIT && f.intl.string(f.t.vrOCCg), j === E.x.REGISTER && f.intl.string(f.t.wePEBA), j === E.x.NAME && f.intl.string(f.t['cY/IOj'])]
                    }),
                    (0, i.jsx)(a.olH, {
                        onClick: r,
                        className: N.modalCloseButton
                    })
                ]
            }),
            (0, i.jsxs)(a.MyZ, {
                activeSlide: j,
                width: 440,
                children: [
                    (0, i.jsxs)(a.Mi4, {
                        id: E.x.INIT,
                        children: [
                            (0, i.jsxs)(a.hzk, {
                                className: N.content,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: N.icon,
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
                                    onClick: D,
                                    children: f.intl.string(f.t.oibaQU)
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)(a.Mi4, {
                        id: E.x.REGISTER,
                        children: [
                            (0, i.jsxs)(a.hzk, {
                                className: N.content,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: N.icon,
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
                                    (0, _.Sr)(p, o, b)
                                        .then(async () => {
                                            await (0, u.Yn)(!1);
                                        })
                                        .then(() => r())
                                        .catch(() => {
                                            R(f.intl.string(f.t.fEptJC)), v(E.x.INIT);
                                        });
                            },
                            children: [
                                (0, i.jsxs)(a.hzk, {
                                    className: N.content,
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: N.icon,
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
                                                    className: N.input,
                                                    value: p,
                                                    onChange: (e) => {
                                                        I(e), S(0 === e.length);
                                                    },
                                                    autoFocus: !0,
                                                    minLength: 1
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(a.mzw, {
                                    className: N.footer,
                                    children: [
                                        (0, i.jsx)(a.zxk, {
                                            type: 'submit',
                                            disabled: T,
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
function T(e) {
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
                    (0, _.cT)(s);
                }
            })
        ]
    });
}
function S() {
    let { credentials: e, hasFetchedCredentials: t } = (0, r.cj)([p.Z], () => ({
        hasFetchedCredentials: p.Z.hasFetchedCredentials(),
        credentials: p.Z.getCredentials()
    }));
    s.useEffect(() => {
        t || (0, _.hL)();
    }, [t]);
    let [n, l] = s.useState(!1);
    return (0, i.jsxs)(a.hjN, {
        title: f.intl.string(f.t.y7SXYW),
        className: N.settings,
        children: [
            (0, i.jsx)(a.R94, {
                type: a.R94.Types.DESCRIPTION,
                className: N.description,
                children: f.intl.string(f.t.TMukAA)
            }),
            e.length > 0 &&
                (0, i.jsx)('div', {
                    className: N.credentialList,
                    children: e.map((e) =>
                        (0, i.jsx)(
                            c.Z,
                            {
                                avatar: null,
                                name: e.name,
                                className: N.credentialItem,
                                onContextMenu: (t) => {
                                    (0, o.vq)(t, (t) =>
                                        (0, i.jsx)(T, {
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
                                            (0, i.jsx)(T, {
                                                ...t,
                                                credential: e
                                            })
                                        );
                                    },
                                    'aria-label': f.intl.string(f.t['+nrTbG']),
                                    innerClassName: N.credentialOptions,
                                    children: (0, i.jsx)(a.Huf, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: N.__invalid_overflowIcon,
                                        colorClass: N.__invalid_overflowIconFg,
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
                        l(!0),
                            (0, _.L$)()
                                .then((e) => {
                                    let { ticket: t, challenge: n } = e;
                                    (0, a.h7j)((e) =>
                                        (0, i.jsx)(I, {
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
                                    l(!1);
                                });
                    },
                    submitting: n,
                    disabled: !h.Ae,
                    size: a.zxk.Sizes.SMALL,
                    children: f.intl.string(f.t.vrOCCg)
                })
            })
        ]
    });
}
