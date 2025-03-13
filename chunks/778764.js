n.d(t, { Z: () => v }), n(47120), n(26686), n(266796), n(773603);
var r = n(200651),
    i = n(192379),
    s = n(849055),
    a = n(442837),
    l = n(481060),
    o = n(239091),
    c = n(313201),
    d = n(202858),
    u = n(287880),
    m = n(358085),
    g = n(960048),
    p = n(998502),
    h = n(365007),
    f = n(15980),
    b = n(755733),
    x = n(981631),
    N = n(388032),
    _ = n(902255);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e) {
    let { transitionState: t, onClose: a, ticket: o, challenge: u } = e,
        f = (0, c.Dt)(),
        [E, j] = i.useState(''),
        [C, O] = i.useState(!0),
        [v, S] = i.useState(b.x.INIT),
        [T, I] = i.useState(''),
        [y, A] = i.useState(null),
        P = async () => {
            let e;
            S(b.x.REGISTER);
            let t = m.isPlatformEmbedded && p.ZP.supportsFeature(x.eRX.WEBAUTHN) ? p.ZP.webAuthnRegister(u) : s.Ue(JSON.parse(u)).then((e) => JSON.stringify(e));
            try {
                e = await t;
            } catch (e) {
                g.Z.captureException(e), A(N.NW.string(N.t.xSCvBQ)), S(b.x.INIT);
                return;
            }
            I(e), S(b.x.NAME);
        };
    return (0, r.jsxs)(l.Y0X, {
        transitionState: t,
        'aria-labelledby': f,
        children: [
            (0, r.jsxs)(l.xBx, {
                className: _.header,
                separator: !1,
                children: [
                    (0, r.jsxs)(l.X6q, {
                        id: f,
                        variant: 'heading-lg/semibold',
                        children: [v === b.x.INIT && N.NW.string(N.t.vrOCCg), v === b.x.REGISTER && N.NW.string(N.t.wePEBA), v === b.x.NAME && N.NW.string(N.t['cY/IOj'])]
                    }),
                    (0, r.jsx)(l.olH, {
                        onClick: a,
                        className: _.modalCloseButton
                    })
                ]
            }),
            (0, r.jsxs)(l.MyZ, {
                activeSlide: v,
                width: 440,
                children: [
                    (0, r.jsxs)(l.Mi4, {
                        id: b.x.INIT,
                        children: [
                            (0, r.jsxs)(l.hzk, {
                                className: _.content,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: _.icon,
                                        children: (0, r.jsx)('img', {
                                            alt: '',
                                            src: n(773072)
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        children:
                                            null != y &&
                                            (0, r.jsx)(l.Text, {
                                                variant: 'text-md/normal',
                                                color: 'status-danger',
                                                children: y
                                            })
                                    }),
                                    (0, r.jsx)('div', {
                                        children: (0, r.jsx)(l.Text, {
                                            variant: 'text-md/normal',
                                            children: N.NW.string(N.t.Lh5vTU)
                                        })
                                    })
                                ]
                            }),
                            (0, r.jsx)(l.mzw, {
                                children: (0, r.jsx)(l.zxk, {
                                    onClick: P,
                                    children: N.NW.string(N.t.oibaQU)
                                })
                            })
                        ]
                    }),
                    (0, r.jsxs)(l.Mi4, {
                        id: b.x.REGISTER,
                        children: [
                            (0, r.jsxs)(l.hzk, {
                                className: _.content,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: _.icon,
                                        children: (0, r.jsx)('img', {
                                            alt: '',
                                            src: n(773072)
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        children: (0, r.jsx)(l.Text, {
                                            variant: 'text-md/normal',
                                            children: N.NW.string(N.t.aVMiX1)
                                        })
                                    })
                                ]
                            }),
                            (0, r.jsx)(l.mzw, { children: (0, r.jsx)(l.zxk, { submitting: !0 }) })
                        ]
                    }),
                    (0, r.jsx)(l.Mi4, {
                        id: b.x.NAME,
                        children: (0, r.jsxs)('form', {
                            onSubmit: (e) => {
                                e.preventDefault(),
                                    (0, h.Sr)(E, o, T)
                                        .then(async () => {
                                            await (0, d.Yn)(!1);
                                        })
                                        .then(() => a())
                                        .catch(() => {
                                            A(N.NW.string(N.t.fEptJC)), S(b.x.INIT);
                                        });
                            },
                            children: [
                                (0, r.jsxs)(l.hzk, {
                                    className: _.content,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: _.icon,
                                            children: (0, r.jsx)('img', {
                                                alt: '',
                                                src: n(637163)
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            children: [
                                                (0, r.jsx)(l.Text, {
                                                    variant: 'text-md/normal',
                                                    children: N.NW.string(N.t['Jzd+z8'])
                                                }),
                                                (0, r.jsx)(l.oil, {
                                                    className: _.input,
                                                    value: E,
                                                    onChange: (e) => {
                                                        j(e), O(0 === e.length);
                                                    },
                                                    autoFocus: !0,
                                                    minLength: 1
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsxs)(l.mzw, {
                                    className: _.footer,
                                    children: [
                                        (0, r.jsx)(l.zxk, {
                                            type: 'submit',
                                            disabled: C,
                                            children: N.NW.string(N.t['5dyZ1d'])
                                        }),
                                        (0, r.jsx)(l.zxk, {
                                            look: l.zxk.Looks.LINK,
                                            color: l.zxk.Colors.PRIMARY,
                                            onClick: () => {
                                                S(b.x.INIT);
                                            },
                                            children: N.NW.string(N.t['13/7kZ'])
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
function O(e) {
    let { onSelect: t, credential: i } = e;
    return (0, r.jsxs)(l.v2r, {
        navId: 'webauthn-credential-actions',
        onClose: o.Zy,
        'aria-label': N.NW.string(N.t['+nrTbG']),
        onSelect: t,
        children: [
            (0, r.jsx)(l.sNh, {
                id: 'webauthn-edit-credential-'.concat(i.id),
                label: N.NW.string(N.t.bt75u7),
                action: () => {
                    (0, l.ZDy)(async () => {
                        let { default: e } = await n.e('804').then(n.bind(n, 89616));
                        return (t) => (0, r.jsx)(e, E({ credential: i }, t));
                    });
                }
            }),
            (0, r.jsx)(l.sNh, {
                id: 'webauthn-delete-credential-'.concat(i.id),
                label: N.NW.string(N.t['+xgS+P']),
                color: 'danger',
                action: () => {
                    (0, h.cT)(i);
                }
            })
        ]
    });
}
function v() {
    let { credentials: e, hasFetchedCredentials: t } = (0, a.cj)([f.Z], () => ({
        hasFetchedCredentials: f.Z.hasFetchedCredentials(),
        credentials: f.Z.getCredentials()
    }));
    i.useEffect(() => {
        t || (0, h.hL)();
    }, [t]);
    let [n, s] = i.useState(!1);
    return (0, r.jsxs)(l.hjN, {
        title: N.NW.string(N.t.y7SXYW),
        className: _.settings,
        children: [
            (0, r.jsx)(l.R94, {
                type: l.R94.Types.DESCRIPTION,
                className: _.description,
                children: N.NW.string(N.t.TMukAA)
            }),
            e.length > 0 &&
                (0, r.jsx)('div', {
                    className: _.credentialList,
                    children: e.map((e) =>
                        (0, r.jsxs)(
                            'div',
                            {
                                className: _.credentialItem,
                                children: [
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-md/semibold',
                                        children: e.name
                                    }),
                                    (0, r.jsx)(l.zxk, {
                                        look: l.zxk.Looks.BLANK,
                                        color: l.zxk.Colors.TRANSPARENT,
                                        size: l.zxk.Sizes.ICON,
                                        onClick: (t) => {
                                            (0, o.vq)(t, (t) => (0, r.jsx)(O, j(E({}, t), { credential: e })));
                                        },
                                        'aria-label': N.NW.string(N.t['+nrTbG']),
                                        innerClassName: _.credentialOptions,
                                        children: (0, r.jsx)(l.Huf, {
                                            size: 'md',
                                            className: _.__invalid_overflowIcon,
                                            colorClass: _.__invalid_overflowIconFg,
                                            'aria-hidden': !0
                                        })
                                    })
                                ]
                            },
                            e.id
                        )
                    )
                }),
            (0, r.jsx)('div', {
                children: (0, r.jsx)(l.zxk, {
                    onClick: () => {
                        s(!0),
                            (0, h.L$)()
                                .then((e) => {
                                    let { ticket: t, challenge: n } = e;
                                    (0, l.h7j)((e) =>
                                        (0, r.jsx)(
                                            C,
                                            j(E({}, e), {
                                                ticket: t,
                                                challenge: n
                                            })
                                        )
                                    );
                                })
                                .catch((e) => {
                                    e.message !== N.NW.string(N.t.N2yb9f) && g.Z.captureException(e);
                                })
                                .finally(() => {
                                    s(!1);
                                });
                    },
                    submitting: n,
                    disabled: !u.Ae,
                    size: l.zxk.Sizes.SMALL,
                    children: N.NW.string(N.t.vrOCCg)
                })
            })
        ]
    });
}
