(n.d(t, { Z: () => T }), n(388685), n(49124), n(953529), n(457542));
var i = n(255367),
    r = n(73800),
    s = n(849055),
    a = n(442837),
    l = n(755721),
    o = n(481060),
    c = n(239091),
    d = n(313201),
    u = n(202858),
    m = n(287880),
    p = n(358085),
    g = n(960048),
    h = n(998502),
    f = n(365007),
    b = n(15980),
    x = n(755733),
    _ = n(981631),
    j = n(388032),
    E = n(49149);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
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
function v(e) {
    let { transitionState: t, onClose: a, ticket: c, challenge: m } = e,
        b = (0, d.Dt)(),
        [O, C] = r.useState(''),
        [v, S] = r.useState(!0),
        [T, N] = r.useState(x.x.INIT),
        [I, y] = r.useState(''),
        [A, P] = r.useState(null),
        R = async () => {
            let e;
            N(x.x.REGISTER);
            let t = p.isPlatformEmbedded && h.ZP.supportsFeature(_.eRX.WEBAUTHN) ? h.ZP.webAuthnRegister(m) : s.Ue(JSON.parse(m)).then((e) => JSON.stringify(e));
            try {
                e = await t;
            } catch (e) {
                (g.Z.captureException(e), P(j.intl.string(j.t.xSCvBQ)), N(x.x.INIT));
                return;
            }
            (y(e), N(x.x.NAME));
        };
    return (0, i.jsxs)(o.Y0X, {
        transitionState: t,
        'aria-labelledby': b,
        parentComponent: 'UserSettingsWebAuthn',
        children: [
            (0, i.jsxs)(o.xBx, {
                className: E.header,
                separator: !1,
                children: [
                    (0, i.jsxs)(o.X6q, {
                        id: b,
                        variant: 'heading-lg/semibold',
                        children: [T === x.x.INIT && j.intl.string(j.t.vrOCCg), T === x.x.REGISTER && j.intl.string(j.t.wePEBA), T === x.x.NAME && j.intl.string(j.t['cY/IOj'])]
                    }),
                    (0, i.jsx)(o.olH, {
                        onClick: a,
                        className: E.modalCloseButton
                    })
                ]
            }),
            (0, i.jsxs)(o.MyZ, {
                activeSlide: T,
                width: 440,
                children: [
                    (0, i.jsxs)(o.Mi4, {
                        id: x.x.INIT,
                        children: [
                            (0, i.jsxs)(o.hzk, {
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
                                            null != A &&
                                            (0, i.jsx)(o.Text, {
                                                variant: 'text-md/normal',
                                                color: 'status-danger',
                                                children: A
                                            })
                                    }),
                                    (0, i.jsx)('div', {
                                        children: (0, i.jsx)(o.Text, {
                                            variant: 'text-md/normal',
                                            children: j.intl.string(j.t.Lh5vTU)
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)(o.mzw, {
                                children: (0, i.jsx)(o.zxk, {
                                    variant: 'primary',
                                    text: j.intl.string(j.t.oibaQU),
                                    onClick: R
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)(o.Mi4, {
                        id: x.x.REGISTER,
                        children: [
                            (0, i.jsxs)(o.hzk, {
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
                                        children: (0, i.jsx)(o.Text, {
                                            variant: 'text-md/normal',
                                            children: j.intl.string(j.t.aVMiX1)
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)(o.mzw, {
                                children: (0, i.jsx)(o.zxk, {
                                    variant: 'primary',
                                    text: '',
                                    loading: !0
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(o.Mi4, {
                        id: x.x.NAME,
                        children: (0, i.jsxs)('form', {
                            onSubmit: (e) => {
                                (e.preventDefault(),
                                    (0, f.Sr)(O, c, I)
                                        .then(async () => {
                                            await (0, u.Yn)(!1);
                                        })
                                        .then(() => a())
                                        .catch(() => {
                                            (P(j.intl.string(j.t.fEptJC)), N(x.x.INIT));
                                        }));
                            },
                            children: [
                                (0, i.jsxs)(o.hzk, {
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
                                                (0, i.jsx)(o.Text, {
                                                    variant: 'text-md/normal',
                                                    children: j.intl.string(j.t['Jzd+z8'])
                                                }),
                                                (0, i.jsx)(l.Is, {
                                                    className: E.input,
                                                    value: O,
                                                    onChange: (e) => {
                                                        (C(e), S(0 === e.length));
                                                    },
                                                    autoFocus: !0,
                                                    minLength: 1
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsx)(o.mzw, {
                                    className: E.footer,
                                    children: (0, i.jsxs)(o.hE2, {
                                        direction: 'horizontal-reverse',
                                        children: [
                                            (0, i.jsx)(o.zxk, {
                                                variant: 'primary',
                                                text: j.intl.string(j.t['5dyZ1d']),
                                                type: 'submit',
                                                disabled: v
                                            }),
                                            (0, i.jsx)(o.zxk, {
                                                variant: 'secondary',
                                                text: j.intl.string(j.t['13/7kZ']),
                                                onClick: () => {
                                                    N(x.x.INIT);
                                                }
                                            })
                                        ]
                                    })
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
    return (0, i.jsxs)(o.v2r, {
        navId: 'webauthn-credential-actions',
        onClose: c.Zy,
        'aria-label': j.intl.string(j.t['+nrTbG']),
        onSelect: t,
        children: [
            (0, i.jsx)(o.sNh, {
                id: 'webauthn-edit-credential-'.concat(r.id),
                label: j.intl.string(j.t.bt75u7),
                action: () => {
                    (0, o.ZDy)(async () => {
                        let { default: e } = await n.e('804').then(n.bind(n, 89616));
                        return (t) => (0, i.jsx)(e, O({ credential: r }, t));
                    });
                }
            }),
            (0, i.jsx)(o.sNh, {
                id: 'webauthn-delete-credential-'.concat(r.id),
                label: j.intl.string(j.t['+xgS+P']),
                color: 'danger',
                action: () => {
                    (0, f.cT)(r);
                }
            })
        ]
    });
}
function T() {
    let { credentials: e, hasFetchedCredentials: t } = (0, a.cj)([b.Z], () => ({
        hasFetchedCredentials: b.Z.hasFetchedCredentials(),
        credentials: b.Z.getCredentials()
    }));
    r.useEffect(() => {
        t || (0, f.hL)();
    }, [t]);
    let [n, s] = r.useState(!1);
    return (0, i.jsxs)(o.hjN, {
        title: j.intl.string(j.t.y7SXYW),
        className: E.settings,
        children: [
            (0, i.jsx)(o.R94, {
                type: o.R94.Types.DESCRIPTION,
                className: E.description,
                children: j.intl.string(j.t.TMukAA)
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
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-md/semibold',
                                        children: e.name
                                    }),
                                    (0, i.jsx)(l.zx, {
                                        look: l.zx.Looks.BLANK,
                                        color: l.zx.Colors.TRANSPARENT,
                                        size: l.zx.Sizes.ICON,
                                        onClick: (t) => {
                                            (0, c.vq)(t, (t) => (0, i.jsx)(S, C(O({}, t), { credential: e })));
                                        },
                                        'aria-label': j.intl.string(j.t['+nrTbG']),
                                        innerClassName: E.credentialOptions,
                                        children: (0, i.jsx)(o.Huf, {
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
                children: (0, i.jsx)(o.zxk, {
                    variant: 'primary',
                    size: 'sm',
                    text: j.intl.string(j.t.vrOCCg),
                    onClick: () => {
                        (s(!0),
                            (0, f.L$)()
                                .then((e) => {
                                    let { ticket: t, challenge: n } = e;
                                    (0, o.h7j)((e) =>
                                        (0, i.jsx)(
                                            v,
                                            C(O({}, e), {
                                                ticket: t,
                                                challenge: n
                                            })
                                        )
                                    );
                                })
                                .catch((e) => {
                                    e.message !== j.intl.string(j.t.N2yb9f) && g.Z.captureException(e);
                                })
                                .finally(() => {
                                    s(!1);
                                }));
                    },
                    loading: n,
                    disabled: !m.Ae
                })
            })
        ]
    });
}
