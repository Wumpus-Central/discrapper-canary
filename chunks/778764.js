n.d(t, { Z: () => S }), n(47120), n(26686), n(266796), n(773603);
var r = n(200651),
    i = n(192379),
    s = n(849055),
    a = n(442837),
    l = n(481060),
    o = n(239091),
    c = n(554300),
    d = n(313201),
    u = n(202858),
    m = n(287880),
    g = n(358085),
    p = n(960048),
    h = n(998502),
    f = n(365007),
    N = n(15980),
    x = n(755733),
    b = n(981631),
    _ = n(388032),
    E = n(372811);
function j(e) {
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
function C(e, t) {
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
function O(e) {
    let { transitionState: t, onClose: a, ticket: o, challenge: c } = e,
        m = (0, d.Dt)(),
        [N, j] = i.useState(''),
        [C, O] = i.useState(!0),
        [v, S] = i.useState(x.x.INIT),
        [T, I] = i.useState(''),
        [y, A] = i.useState(null),
        P = async () => {
            let e;
            S(x.x.REGISTER);
            let t = g.isPlatformEmbedded && h.ZP.supportsFeature(b.eRX.WEBAUTHN) ? h.ZP.webAuthnRegister(c) : s.Ue(JSON.parse(c)).then((e) => JSON.stringify(e));
            try {
                e = await t;
            } catch (e) {
                p.Z.captureException(e), A(_.NW.string(_.t.xSCvBQ)), S(x.x.INIT);
                return;
            }
            I(e), S(x.x.NAME);
        };
    return (0, r.jsxs)(l.Y0X, {
        transitionState: t,
        'aria-labelledby': m,
        children: [
            (0, r.jsxs)(l.xBx, {
                className: E.header,
                separator: !1,
                children: [
                    (0, r.jsxs)(l.X6q, {
                        id: m,
                        variant: 'heading-lg/semibold',
                        children: [v === x.x.INIT && _.NW.string(_.t.vrOCCg), v === x.x.REGISTER && _.NW.string(_.t.wePEBA), v === x.x.NAME && _.NW.string(_.t['cY/IOj'])]
                    }),
                    (0, r.jsx)(l.olH, {
                        onClick: a,
                        className: E.modalCloseButton
                    })
                ]
            }),
            (0, r.jsxs)(l.MyZ, {
                activeSlide: v,
                width: 440,
                children: [
                    (0, r.jsxs)(l.Mi4, {
                        id: x.x.INIT,
                        children: [
                            (0, r.jsxs)(l.hzk, {
                                className: E.content,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: E.icon,
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
                                            children: _.NW.string(_.t.Lh5vTU)
                                        })
                                    })
                                ]
                            }),
                            (0, r.jsx)(l.mzw, {
                                children: (0, r.jsx)(l.zxk, {
                                    onClick: P,
                                    children: _.NW.string(_.t.oibaQU)
                                })
                            })
                        ]
                    }),
                    (0, r.jsxs)(l.Mi4, {
                        id: x.x.REGISTER,
                        children: [
                            (0, r.jsxs)(l.hzk, {
                                className: E.content,
                                children: [
                                    (0, r.jsx)('div', {
                                        className: E.icon,
                                        children: (0, r.jsx)('img', {
                                            alt: '',
                                            src: n(773072)
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        children: (0, r.jsx)(l.Text, {
                                            variant: 'text-md/normal',
                                            children: _.NW.string(_.t.aVMiX1)
                                        })
                                    })
                                ]
                            }),
                            (0, r.jsx)(l.mzw, { children: (0, r.jsx)(l.zxk, { submitting: !0 }) })
                        ]
                    }),
                    (0, r.jsx)(l.Mi4, {
                        id: x.x.NAME,
                        children: (0, r.jsxs)('form', {
                            onSubmit: (e) => {
                                e.preventDefault(),
                                    (0, f.Sr)(N, o, T)
                                        .then(async () => {
                                            await (0, u.Yn)(!1);
                                        })
                                        .then(() => a())
                                        .catch(() => {
                                            A(_.NW.string(_.t.fEptJC)), S(x.x.INIT);
                                        });
                            },
                            children: [
                                (0, r.jsxs)(l.hzk, {
                                    className: E.content,
                                    children: [
                                        (0, r.jsx)('div', {
                                            className: E.icon,
                                            children: (0, r.jsx)('img', {
                                                alt: '',
                                                src: n(637163)
                                            })
                                        }),
                                        (0, r.jsxs)('div', {
                                            children: [
                                                (0, r.jsx)(l.Text, {
                                                    variant: 'text-md/normal',
                                                    children: _.NW.string(_.t['Jzd+z8'])
                                                }),
                                                (0, r.jsx)(l.oil, {
                                                    className: E.input,
                                                    value: N,
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
                                    className: E.footer,
                                    children: [
                                        (0, r.jsx)(l.zxk, {
                                            type: 'submit',
                                            disabled: C,
                                            children: _.NW.string(_.t['5dyZ1d'])
                                        }),
                                        (0, r.jsx)(l.zxk, {
                                            look: l.zxk.Looks.LINK,
                                            color: l.zxk.Colors.PRIMARY,
                                            onClick: () => {
                                                S(x.x.INIT);
                                            },
                                            children: _.NW.string(_.t['13/7kZ'])
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
function v(e) {
    let { onSelect: t, credential: i } = e;
    return (0, r.jsxs)(l.v2r, {
        navId: 'webauthn-credential-actions',
        onClose: o.Zy,
        'aria-label': _.NW.string(_.t['+nrTbG']),
        onSelect: t,
        children: [
            (0, r.jsx)(l.sNh, {
                id: 'webauthn-edit-credential-'.concat(i.id),
                label: _.NW.string(_.t.bt75u7),
                action: () => {
                    (0, l.ZDy)(async () => {
                        let { default: e } = await n.e('804').then(n.bind(n, 89616));
                        return (t) => (0, r.jsx)(e, j({ credential: i }, t));
                    });
                }
            }),
            (0, r.jsx)(l.sNh, {
                id: 'webauthn-delete-credential-'.concat(i.id),
                label: _.NW.string(_.t['+xgS+P']),
                color: 'danger',
                action: () => {
                    (0, f.cT)(i);
                }
            })
        ]
    });
}
function S() {
    let { credentials: e, hasFetchedCredentials: t } = (0, a.cj)([N.Z], () => ({
        hasFetchedCredentials: N.Z.hasFetchedCredentials(),
        credentials: N.Z.getCredentials()
    }));
    i.useEffect(() => {
        t || (0, f.hL)();
    }, [t]);
    let [n, s] = i.useState(!1);
    return (0, r.jsxs)(l.hjN, {
        title: _.NW.string(_.t.y7SXYW),
        className: E.settings,
        children: [
            (0, r.jsx)(l.R94, {
                type: l.R94.Types.DESCRIPTION,
                className: E.description,
                children: _.NW.string(_.t.TMukAA)
            }),
            e.length > 0 &&
                (0, r.jsx)('div', {
                    className: E.credentialList,
                    children: e.map((e) =>
                        (0, r.jsx)(
                            c.Z,
                            {
                                avatar: null,
                                name: e.name,
                                className: E.credentialItem,
                                onContextMenu: (t) => {
                                    (0, o.vq)(t, (t) => (0, r.jsx)(v, C(j({}, t), { credential: e })));
                                },
                                children: (0, r.jsx)(l.zxk, {
                                    look: l.zxk.Looks.BLANK,
                                    color: l.zxk.Colors.TRANSPARENT,
                                    size: l.zxk.Sizes.ICON,
                                    onClick: (t) => {
                                        (0, o.vq)(t, (t) => (0, r.jsx)(v, C(j({}, t), { credential: e })));
                                    },
                                    'aria-label': _.NW.string(_.t['+nrTbG']),
                                    innerClassName: E.credentialOptions,
                                    children: (0, r.jsx)(l.Huf, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: E.__invalid_overflowIcon,
                                        colorClass: E.__invalid_overflowIconFg,
                                        'aria-hidden': !0
                                    })
                                })
                            },
                            e.id
                        )
                    )
                }),
            (0, r.jsx)('div', {
                children: (0, r.jsx)(l.zxk, {
                    onClick: () => {
                        s(!0),
                            (0, f.L$)()
                                .then((e) => {
                                    let { ticket: t, challenge: n } = e;
                                    (0, l.h7j)((e) =>
                                        (0, r.jsx)(
                                            O,
                                            C(j({}, e), {
                                                ticket: t,
                                                challenge: n
                                            })
                                        )
                                    );
                                })
                                .catch((e) => {
                                    e.message !== _.NW.string(_.t.N2yb9f) && p.Z.captureException(e);
                                })
                                .finally(() => {
                                    s(!1);
                                });
                    },
                    submitting: n,
                    disabled: !m.Ae,
                    size: l.zxk.Sizes.SMALL,
                    children: _.NW.string(_.t.vrOCCg)
                })
            })
        ]
    });
}
