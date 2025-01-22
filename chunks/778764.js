n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120),
    n(773603);
var i = n(200651),
    r = n(192379),
    s = n(849055),
    a = n(442837),
    l = n(481060),
    o = n(239091),
    c = n(554300),
    d = n(313201),
    u = n(202858),
    m = n(287880),
    g = n(358085),
    h = n(960048),
    p = n(998502),
    x = n(365007),
    f = n(15980),
    E = n(755733),
    _ = n(981631),
    C = n(388032),
    T = n(421333);
function S(e) {
    let { transitionState: t, onClose: a, ticket: o, challenge: c } = e,
        m = (0, d.Dt)(),
        [f, S] = r.useState(''),
        [b, I] = r.useState(!0),
        [N, v] = r.useState(E.x.INIT),
        [A, j] = r.useState(''),
        [O, R] = r.useState(null),
        P = async () => {
            let e;
            v(E.x.REGISTER);
            let t = g.isPlatformEmbedded && p.ZP.supportsFeature(_.eRX.WEBAUTHN) ? p.ZP.webAuthnRegister(c) : s.Ue(JSON.parse(c)).then((e) => JSON.stringify(e));
            try {
                e = await t;
            } catch (e) {
                h.Z.captureException(e), R(C.intl.string(C.t.xSCvBQ)), v(E.x.INIT);
                return;
            }
            j(e), v(E.x.NAME);
        };
    return (0, i.jsxs)(l.ModalRoot, {
        transitionState: t,
        'aria-labelledby': m,
        children: [
            (0, i.jsxs)(l.ModalHeader, {
                className: T.header,
                separator: !1,
                children: [
                    (0, i.jsxs)(l.Heading, {
                        id: m,
                        variant: 'heading-lg/semibold',
                        children: [N === E.x.INIT && C.intl.string(C.t.vrOCCg), N === E.x.REGISTER && C.intl.string(C.t.wePEBA), N === E.x.NAME && C.intl.string(C.t['cY/IOj'])]
                    }),
                    (0, i.jsx)(l.ModalCloseButton, {
                        onClick: a,
                        className: T.modalCloseButton
                    })
                ]
            }),
            (0, i.jsxs)(l.Slides, {
                activeSlide: N,
                width: 440,
                children: [
                    (0, i.jsxs)(l.Slide, {
                        id: E.x.INIT,
                        children: [
                            (0, i.jsxs)(l.ModalContent, {
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
                                            (0, i.jsx)(l.Text, {
                                                variant: 'text-md/normal',
                                                color: 'status-danger',
                                                children: O
                                            })
                                    }),
                                    (0, i.jsx)('div', {
                                        children: (0, i.jsx)(l.Text, {
                                            variant: 'text-md/normal',
                                            children: C.intl.string(C.t.Lh5vTU)
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)(l.ModalFooter, {
                                children: (0, i.jsx)(l.Button, {
                                    onClick: P,
                                    children: C.intl.string(C.t.oibaQU)
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)(l.Slide, {
                        id: E.x.REGISTER,
                        children: [
                            (0, i.jsxs)(l.ModalContent, {
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
                                        children: (0, i.jsx)(l.Text, {
                                            variant: 'text-md/normal',
                                            children: C.intl.string(C.t.aVMiX1)
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)(l.ModalFooter, { children: (0, i.jsx)(l.Button, { submitting: !0 }) })
                        ]
                    }),
                    (0, i.jsx)(l.Slide, {
                        id: E.x.NAME,
                        children: (0, i.jsxs)('form', {
                            onSubmit: (e) => {
                                e.preventDefault(),
                                    (0, x.Sr)(f, o, A)
                                        .then(async () => {
                                            await (0, u.Yn)(!1);
                                        })
                                        .then(() => a())
                                        .catch(() => {
                                            R(C.intl.string(C.t.fEptJC)), v(E.x.INIT);
                                        });
                            },
                            children: [
                                (0, i.jsxs)(l.ModalContent, {
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
                                                (0, i.jsx)(l.Text, {
                                                    variant: 'text-md/normal',
                                                    children: C.intl.string(C.t['Jzd+z8'])
                                                }),
                                                (0, i.jsx)(l.TextInput, {
                                                    className: T.input,
                                                    value: f,
                                                    onChange: (e) => {
                                                        S(e), I(0 === e.length);
                                                    },
                                                    autoFocus: !0,
                                                    minLength: 1
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsxs)(l.ModalFooter, {
                                    className: T.footer,
                                    children: [
                                        (0, i.jsx)(l.Button, {
                                            type: 'submit',
                                            disabled: b,
                                            children: C.intl.string(C.t['5dyZ1d'])
                                        }),
                                        (0, i.jsx)(l.Button, {
                                            look: l.Button.Looks.LINK,
                                            color: l.Button.Colors.PRIMARY,
                                            onClick: () => {
                                                v(E.x.INIT);
                                            },
                                            children: C.intl.string(C.t['13/7kZ'])
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
function b(e) {
    let { onSelect: t, credential: r } = e;
    return (0, i.jsxs)(l.Menu, {
        navId: 'webauthn-credential-actions',
        onClose: o.Zy,
        'aria-label': C.intl.string(C.t['+nrTbG']),
        onSelect: t,
        children: [
            (0, i.jsx)(l.MenuItem, {
                id: 'webauthn-edit-credential-'.concat(r.id),
                label: C.intl.string(C.t.bt75u7),
                action: () => {
                    (0, l.openModalLazy)(async () => {
                        let { default: e } = await n.e('804').then(n.bind(n, 89616));
                        return (t) =>
                            (0, i.jsx)(e, {
                                credential: r,
                                ...t
                            });
                    });
                }
            }),
            (0, i.jsx)(l.MenuItem, {
                id: 'webauthn-delete-credential-'.concat(r.id),
                label: C.intl.string(C.t['+xgS+P']),
                color: 'danger',
                action: () => {
                    (0, x.cT)(r);
                }
            })
        ]
    });
}
function I() {
    let { credentials: e, hasFetchedCredentials: t } = (0, a.cj)([f.Z], () => ({
        hasFetchedCredentials: f.Z.hasFetchedCredentials(),
        credentials: f.Z.getCredentials()
    }));
    r.useEffect(() => {
        !t && (0, x.hL)();
    }, [t]);
    let [n, s] = r.useState(!1);
    return (0, i.jsxs)(l.FormSection, {
        title: C.intl.string(C.t.y7SXYW),
        className: T.settings,
        children: [
            (0, i.jsx)(l.FormText, {
                type: l.FormText.Types.DESCRIPTION,
                className: T.description,
                children: C.intl.string(C.t.TMukAA)
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
                                        (0, i.jsx)(b, {
                                            ...t,
                                            credential: e
                                        })
                                    );
                                },
                                children: (0, i.jsx)(l.Button, {
                                    look: l.Button.Looks.BLANK,
                                    color: l.Button.Colors.TRANSPARENT,
                                    size: l.Button.Sizes.ICON,
                                    onClick: (t) => {
                                        (0, o.vq)(t, (t) =>
                                            (0, i.jsx)(b, {
                                                ...t,
                                                credential: e
                                            })
                                        );
                                    },
                                    'aria-label': C.intl.string(C.t['+nrTbG']),
                                    innerClassName: T.credentialOptions,
                                    children: (0, i.jsx)(l.MoreVerticalIcon, {
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
                children: (0, i.jsx)(l.Button, {
                    onClick: () => {
                        s(!0),
                            (0, x.L$)()
                                .then((e) => {
                                    let { ticket: t, challenge: n } = e;
                                    (0, l.openModal)((e) =>
                                        (0, i.jsx)(S, {
                                            ...e,
                                            ticket: t,
                                            challenge: n
                                        })
                                    );
                                })
                                .catch((e) => {
                                    e.message !== C.intl.string(C.t.N2yb9f) && h.Z.captureException(e);
                                })
                                .finally(() => {
                                    s(!1);
                                });
                    },
                    submitting: n,
                    disabled: !m.Ae,
                    size: l.Button.Sizes.SMALL,
                    children: C.intl.string(C.t.vrOCCg)
                })
            })
        ]
    });
}
