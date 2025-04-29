n.d(t, { Z: () => v }), n(388685), n(49124), n(953529), n(457542);
var i = n(255367),
    r = n(73800),
    s = n(849055),
    l = n(442837),
    a = n(481060),
    o = n(239091),
    c = n(313201),
    d = n(202858),
    u = n(287880),
    m = n(358085),
    p = n(960048),
    g = n(998502),
    h = n(365007),
    f = n(15980),
    b = n(755733),
    _ = n(981631),
    x = n(388032),
    E = n(49149);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e) {
    let { transitionState: t, onClose: l, ticket: o, challenge: u } = e,
        f = (0, c.Dt)(),
        [j, C] = r.useState(''),
        [O, S] = r.useState(!0),
        [v, T] = r.useState(b.x.INIT),
        [N, I] = r.useState(''),
        [y, A] = r.useState(null),
        P = async () => {
            let e;
            T(b.x.REGISTER);
            let t = m.isPlatformEmbedded && g.ZP.supportsFeature(_.eRX.WEBAUTHN) ? g.ZP.webAuthnRegister(u) : s.Ue(JSON.parse(u)).then((e) => JSON.stringify(e));
            try {
                e = await t;
            } catch (e) {
                p.Z.captureException(e), A(x.intl.string(x.t.xSCvBQ)), T(b.x.INIT);
                return;
            }
            I(e), T(b.x.NAME);
        };
    return (0, i.jsxs)(a.Y0X, {
        transitionState: t,
        'aria-labelledby': f,
        children: [
            (0, i.jsxs)(a.xBx, {
                className: E.header,
                separator: !1,
                children: [
                    (0, i.jsxs)(a.X6q, {
                        id: f,
                        variant: 'heading-lg/semibold',
                        children: [v === b.x.INIT && x.intl.string(x.t.vrOCCg), v === b.x.REGISTER && x.intl.string(x.t.wePEBA), v === b.x.NAME && x.intl.string(x.t['cY/IOj'])]
                    }),
                    (0, i.jsx)(a.olH, {
                        onClick: l,
                        className: E.modalCloseButton
                    })
                ]
            }),
            (0, i.jsxs)(a.MyZ, {
                activeSlide: v,
                width: 440,
                children: [
                    (0, i.jsxs)(a.Mi4, {
                        id: b.x.INIT,
                        children: [
                            (0, i.jsxs)(a.hzk, {
                                className: E.content,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: E.icon,
                                        children: (0, i.jsx)('img', {
                                            alt: '',
                                            src: n(773072)
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        children:
                                            null != y &&
                                            (0, i.jsx)(a.Text, {
                                                variant: 'text-md/normal',
                                                color: 'status-danger',
                                                children: y
                                            })
                                    }),
                                    (0, i.jsx)('div', {
                                        children: (0, i.jsx)(a.Text, {
                                            variant: 'text-md/normal',
                                            children: x.intl.string(x.t.Lh5vTU)
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)(a.mzw, {
                                children: (0, i.jsx)(a.zxk, {
                                    onClick: P,
                                    children: x.intl.string(x.t.oibaQU)
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)(a.Mi4, {
                        id: b.x.REGISTER,
                        children: [
                            (0, i.jsxs)(a.hzk, {
                                className: E.content,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: E.icon,
                                        children: (0, i.jsx)('img', {
                                            alt: '',
                                            src: n(773072)
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        children: (0, i.jsx)(a.Text, {
                                            variant: 'text-md/normal',
                                            children: x.intl.string(x.t.aVMiX1)
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)(a.mzw, { children: (0, i.jsx)(a.zxk, { submitting: !0 }) })
                        ]
                    }),
                    (0, i.jsx)(a.Mi4, {
                        id: b.x.NAME,
                        children: (0, i.jsxs)('form', {
                            onSubmit: (e) => {
                                e.preventDefault(),
                                    (0, h.Sr)(j, o, N)
                                        .then(async () => {
                                            await (0, d.Yn)(!1);
                                        })
                                        .then(() => l())
                                        .catch(() => {
                                            A(x.intl.string(x.t.fEptJC)), T(b.x.INIT);
                                        });
                            },
                            children: [
                                (0, i.jsxs)(a.hzk, {
                                    className: E.content,
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: E.icon,
                                            children: (0, i.jsx)('img', {
                                                alt: '',
                                                src: n(637163)
                                            })
                                        }),
                                        (0, i.jsxs)('div', {
                                            children: [
                                                (0, i.jsx)(a.Text, {
                                                    variant: 'text-md/normal',
                                                    children: x.intl.string(x.t['Jzd+z8'])
                                                }),
                                                (0, i.jsx)(a.oil, {
                                                    className: E.input,
                                                    value: j,
                                                    onChange: (e) => {
                                                        C(e), S(0 === e.length);
                                                    },
                                                    autoFocus: !0,
                                                    minLength: 1
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(a.mzw, {
                                    className: E.footer,
                                    children: [
                                        (0, i.jsx)(a.zxk, {
                                            type: 'submit',
                                            disabled: O,
                                            children: x.intl.string(x.t['5dyZ1d'])
                                        }),
                                        (0, i.jsx)(a.zxk, {
                                            look: a.zxk.Looks.LINK,
                                            color: a.zxk.Colors.PRIMARY,
                                            onClick: () => {
                                                T(b.x.INIT);
                                            },
                                            children: x.intl.string(x.t['13/7kZ'])
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
function S(e) {
    let { onSelect: t, credential: r } = e;
    return (0, i.jsxs)(a.v2r, {
        navId: 'webauthn-credential-actions',
        onClose: o.Zy,
        'aria-label': x.intl.string(x.t['+nrTbG']),
        onSelect: t,
        children: [
            (0, i.jsx)(a.sNh, {
                id: 'webauthn-edit-credential-'.concat(r.id),
                label: x.intl.string(x.t.bt75u7),
                action: () => {
                    (0, a.ZDy)(async () => {
                        let { default: e } = await n.e('804').then(n.bind(n, 89616));
                        return (t) => (0, i.jsx)(e, j({ credential: r }, t));
                    });
                }
            }),
            (0, i.jsx)(a.sNh, {
                id: 'webauthn-delete-credential-'.concat(r.id),
                label: x.intl.string(x.t['+xgS+P']),
                color: 'danger',
                action: () => {
                    (0, h.cT)(r);
                }
            })
        ]
    });
}
function v() {
    let { credentials: e, hasFetchedCredentials: t } = (0, l.cj)([f.Z], () => ({
        hasFetchedCredentials: f.Z.hasFetchedCredentials(),
        credentials: f.Z.getCredentials()
    }));
    r.useEffect(() => {
        t || (0, h.hL)();
    }, [t]);
    let [n, s] = r.useState(!1);
    return (0, i.jsxs)(a.hjN, {
        title: x.intl.string(x.t.y7SXYW),
        className: E.settings,
        children: [
            (0, i.jsx)(a.R94, {
                type: a.R94.Types.DESCRIPTION,
                className: E.description,
                children: x.intl.string(x.t.TMukAA)
            }),
            e.length > 0 &&
                (0, i.jsx)('div', {
                    className: E.credentialList,
                    children: e.map((e) =>
                        (0, i.jsxs)(
                            'div',
                            {
                                className: E.credentialItem,
                                children: [
                                    (0, i.jsx)(a.Text, {
                                        variant: 'text-md/semibold',
                                        children: e.name
                                    }),
                                    (0, i.jsx)(a.zxk, {
                                        look: a.zxk.Looks.BLANK,
                                        color: a.zxk.Colors.TRANSPARENT,
                                        size: a.zxk.Sizes.ICON,
                                        onClick: (t) => {
                                            (0, o.vq)(t, (t) => (0, i.jsx)(S, C(j({}, t), { credential: e })));
                                        },
                                        'aria-label': x.intl.string(x.t['+nrTbG']),
                                        innerClassName: E.credentialOptions,
                                        children: (0, i.jsx)(a.Huf, {
                                            size: 'md',
                                            className: E.__invalid_overflowIcon,
                                            colorClass: E.__invalid_overflowIconFg,
                                            'aria-hidden': !0
                                        })
                                    })
                                ]
                            },
                            e.id
                        )
                    )
                }),
            (0, i.jsx)('div', {
                children: (0, i.jsx)(a.zxk, {
                    onClick: () => {
                        s(!0),
                            (0, h.L$)()
                                .then((e) => {
                                    let { ticket: t, challenge: n } = e;
                                    (0, a.h7j)((e) =>
                                        (0, i.jsx)(
                                            O,
                                            C(j({}, e), {
                                                ticket: t,
                                                challenge: n
                                            })
                                        )
                                    );
                                })
                                .catch((e) => {
                                    e.message !== x.intl.string(x.t.N2yb9f) && p.Z.captureException(e);
                                })
                                .finally(() => {
                                    s(!1);
                                });
                    },
                    submitting: n,
                    disabled: !u.Ae,
                    size: a.zxk.Sizes.SMALL,
                    children: x.intl.string(x.t.vrOCCg)
                })
            })
        ]
    });
}
