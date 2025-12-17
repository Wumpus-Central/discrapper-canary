n.d(t, {
    RegisterWebAuthnCredentialModal: () => P,
    Z: () => w,
}),
    n(388685),
    n(49124),
    n(457542);
var r = n(54381),
    i = n(473749),
    a = n(849055),
    o = n(442837),
    s = n(481060),
    l = n(239091),
    c = n(136097),
    u = n(313201),
    d = n(454585),
    f = n(313789),
    p = n(202858),
    _ = n(518596),
    m = n(287880),
    h = n(358085),
    g = n(960048),
    E = n(998502),
    b = n(365007),
    y = n(15980),
    O = n(755733),
    v = n(981631),
    S = n(388032),
    I = n(689471);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e) {
    let {
            transitionState: t,
            onClose: o,
            ticket: l,
            challenge: c,
            showAccountSettingsButton: m = !1,
            initialSlide: y = O.x.INIT,
        } = e,
        T = (0, u.Dt)(),
        [C, A] = i.useState(S.intl.string(S.t["I/sJtJ"])),
        [N, P] = i.useState(!1),
        [R, w] = i.useState(y),
        [D, x] = i.useState(""),
        [L, j] = i.useState(null),
        M = async () => {
            let e;
            w(O.x.REGISTER);
            let t =
                h.isPlatformEmbedded && E.ZP.supportsFeature(v.eRX.WEBAUTHN)
                    ? E.ZP.webAuthnRegister(c)
                    : a.Ue(JSON.parse(c)).then((e) => JSON.stringify(e));
            try {
                e = await t;
            } catch (e) {
                g.Z.captureException(e), j(S.intl.string(S.t.xSCvBf)), w(O.x.INIT);
                return;
            }
            x(e), w(O.x.NAME);
        };
    return (0, r.jsxs)(s.Y0X, {
        transitionState: t,
        "aria-labelledby": T,
        parentComponent: "UserSettingsWebAuthn",
        children: [
            (0, r.jsxs)(s.xBx, {
                className: I.header,
                separator: !1,
                children: [
                    (0, r.jsxs)(s.Heading, {
                        id: T,
                        variant: "heading-lg/semibold",
                        children: [
                            R === O.x.INIT && S.intl.string(S.t.vrOCCk),
                            R === O.x.REGISTER && S.intl.string(S.t.wePEBF),
                            R === O.x.NAME && S.intl.string(S.t["cY/IOu"]),
                            R === O.x.SUCCESS && d.Z.parse(S.intl.string(S.t.FXC7ZC)),
                        ],
                    }),
                    (0, r.jsx)(s.olH, {
                        onClick: o,
                        className: I.modalCloseButton,
                    }),
                ],
            }),
            (0, r.jsxs)(s.MyZ, {
                activeSlide: R,
                width: 440,
                children: [
                    (0, r.jsxs)(s.Mi4, {
                        id: O.x.INIT,
                        children: [
                            (0, r.jsxs)(s.hzk, {
                                className: I.content,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: I.icon,
                                        children: (0, r.jsx)("img", {
                                            alt: "",
                                            src: n(773072),
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        children:
                                            null != L &&
                                            (0, r.jsx)(s.Text, {
                                                variant: "text-md/normal",
                                                color: "status-danger",
                                                children: L,
                                            }),
                                    }),
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(s.Text, {
                                            variant: "text-md/normal",
                                            children: S.intl.string(S.t.Lh5vTW),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(s.mzw, {
                                children: (0, r.jsx)(s.Button, {
                                    variant: "primary",
                                    text: S.intl.string(S.t.oibaQa),
                                    onClick: M,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(s.Mi4, {
                        id: O.x.REGISTER,
                        children: [
                            (0, r.jsxs)(s.hzk, {
                                className: I.content,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: I.icon,
                                        children: (0, r.jsx)("img", {
                                            alt: "",
                                            src: n(773072),
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(s.Text, {
                                            variant: "text-md/normal",
                                            children: S.intl.string(S.t.aVMiX3),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(s.mzw, {
                                children: (0, r.jsx)(s.Button, {
                                    variant: "primary",
                                    text: "",
                                    loading: !0,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(s.Mi4, {
                        id: O.x.NAME,
                        children: (0, r.jsxs)("form", {
                            onSubmit: (e) => {
                                e.preventDefault(),
                                    b
                                        .Sr(C, l, D)
                                        .then(async () => {
                                            m ? w(O.x.SUCCESS) : (await (0, p.Yn)(!1), o());
                                        })
                                        .catch(() => {
                                            j(S.intl.string(S.t.fEptJP)), w(O.x.INIT);
                                        });
                            },
                            children: [
                                (0, r.jsxs)(s.hzk, {
                                    className: I.content,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: I.icon,
                                            children: (0, r.jsx)("img", {
                                                alt: "",
                                                src: n(637163),
                                            }),
                                        }),
                                        (0, r.jsxs)(s.Kqy, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(s.Text, {
                                                    variant: "text-md/normal",
                                                    children: S.intl.string(S.t["Jzd+z/"]),
                                                }),
                                                (0, r.jsx)(s.oil, {
                                                    value: C,
                                                    onChange: (e) => {
                                                        A(e), P(0 === e.length);
                                                    },
                                                    autoFocus: !0,
                                                    minLength: 1,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(s.mzw, {
                                    className: I.footer,
                                    children: (0, r.jsxs)(s.ButtonGroup, {
                                        direction: "horizontal-reverse",
                                        children: [
                                            (0, r.jsx)(s.Button, {
                                                variant: "primary",
                                                text: S.intl.string(S.t["5dyZ1S"]),
                                                type: "submit",
                                                disabled: N,
                                            }),
                                            (0, r.jsx)(s.Button, {
                                                variant: "secondary",
                                                text: S.intl.string(S.t["13/7kX"]),
                                                onClick: () => {
                                                    w(O.x.INIT);
                                                },
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)(s.Mi4, {
                        id: O.x.SUCCESS,
                        children: [
                            (0, r.jsxs)(s.hzk, {
                                className: I.content,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: I.icon,
                                        children: (0, r.jsx)("img", {
                                            alt: "",
                                            src: n(637163),
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(s.Text, {
                                            variant: "text-md/normal",
                                            children: S.intl.string(S.t.e1qv6i),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(s.mzw, {
                                className: I.footer,
                                children: (0, r.jsxs)(s.ButtonGroup, {
                                    direction: "horizontal-reverse",
                                    children: [
                                        (0, r.jsx)(s.Button, {
                                            variant: "primary",
                                            text: S.intl.string(S.t.MubYG8),
                                            onClick: () => {
                                                o(),
                                                    (0, _.openUserSettings)(f.n.ACCOUNT_PANEL, {
                                                        section: v.oAB.ACCOUNT,
                                                    });
                                            },
                                        }),
                                        (0, r.jsx)(s.Button, {
                                            variant: "secondary",
                                            text: S.intl.string(S.t.i4jeWR),
                                            onClick: o,
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function R(e) {
    let { onSelect: t, credential: i } = e;
    return (0, r.jsxs)(s.v2r, {
        navId: "webauthn-credential-actions",
        onClose: l.Zy,
        "aria-label": S.intl.string(S.t["+nrTbK"]),
        onSelect: t,
        children: [
            (0, r.jsx)(s.sNh, {
                id: "webauthn-edit-credential-".concat(i.id),
                label: S.intl.string(S.t.bt75uw),
                action: () => {
                    (0, s.ZDy)(async () => {
                        let { default: e } = await n.e("804").then(n.bind(n, 89616));
                        return (t) => (0, r.jsx)(e, C({ credential: i }, t));
                    });
                },
            }),
            (0, r.jsx)(s.sNh, {
                id: "webauthn-delete-credential-".concat(i.id),
                label: S.intl.string(S.t["+xgS+L"]),
                color: "danger",
                action: () => {
                    b.cT(i);
                },
            }),
        ],
    });
}
function w() {
    let {
        credentials: e,
        hasFetchedCredentials: t,
        hasPendingRegisterTrigger: n,
    } = (0, o.cj)([y.Z], () => ({
        hasFetchedCredentials: y.Z.hasFetchedCredentials(),
        credentials: y.Z.getCredentials(),
        hasPendingRegisterTrigger: y.Z.hasPendingRegisterTrigger(),
    }));
    i.useEffect(() => {
        t || b.hL();
    }, [t]),
        i.useEffect(
            () => () => {
                y.Z.hasPendingRegisterTrigger() && b.vg();
            },
            [],
        );
    let [a, l] = i.useState(!1),
        c = i.useCallback(() => {
            l(!0),
                b
                    .startRegisterWebAuthnCredential()
                    .then((e) => {
                        let { ticket: t, challenge: n } = e;
                        (0, s.h7j)((e) =>
                            (0, r.jsx)(
                                P,
                                N(C({}, e), {
                                    ticket: t,
                                    challenge: n,
                                }),
                            ),
                        );
                    })
                    .catch((e) => {
                        e.message !== S.intl.string(S.t.N2yb9a) && g.Z.captureException(e);
                    })
                    .finally(() => {
                        l(!1);
                    });
        }, []);
    return (
        i.useEffect(() => {
            n && !a && (b.vg(), c());
        }, [n, a, c]),
        (0, r.jsxs)(s.gNt, {
            label: S.intl.string(S.t.y7SXYX),
            description: S.intl.string(S.t.TMukAN),
            children: [
                e.length > 0 &&
                    (0, r.jsx)("div", {
                        className: I.credentialList,
                        children: e.map(x),
                    }),
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(s.Button, {
                        variant: "primary",
                        size: "sm",
                        text: S.intl.string(S.t.vrOCCk),
                        onClick: c,
                        loading: a,
                        disabled: !m.Ae,
                    }),
                }),
            ],
        })
    );
}
function D(e) {
    if (null !== e.last_used)
        return (0, r.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: S.intl.format(S.t["7JgxF5"], { lastUsed: (0, c.p)(e.last_used) }),
        });
}
function x(e) {
    return (0, r.jsxs)(
        "div",
        {
            className: I.credentialItem,
            children: [
                (0, r.jsx)(s.Text, {
                    variant: "text-md/semibold",
                    children: e.name,
                }),
                D(e),
                (0, r.jsx)(s.hU, {
                    icon: {
                        type: "icon",
                        asset: s.Huf,
                    },
                    onClick: (t) => {
                        (0, l.vq)(t, (t) => (0, r.jsx)(R, N(C({}, t), { credential: e })));
                    },
                    "aria-label": S.intl.string(S.t["+nrTbK"]),
                    size: "sm",
                    variant: "icon-only",
                }),
            ],
        },
        e.id,
    );
}
