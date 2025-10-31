n.d(t, {
    RegisterWebAuthnCredentialModal: () => R,
    Z: () => w,
}),
    n(388685),
    n(49124),
    n(457542);
var r = n(951288),
    i = n(647438),
    a = n(849055),
    o = n(442837),
    s = n(755721),
    l = n(481060),
    c = n(239091),
    u = n(313201),
    d = n(454585),
    f = n(313789),
    _ = n(202858),
    p = n(518596),
    h = n(287880),
    m = n(358085),
    g = n(960048),
    E = n(998502),
    b = n(365007),
    y = n(15980),
    O = n(755733),
    v = n(981631),
    I = n(388032),
    T = n(421156);
function S(e, t, n) {
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
function A(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R(e) {
    let {
            transitionState: t,
            onClose: o,
            ticket: s,
            challenge: c,
            showAccountSettingsButton: h = !1,
            initialSlide: y = O.x.INIT,
        } = e,
        S = (0, u.Dt)(),
        [A, C] = i.useState(I.intl.string(I.t["I/sJtJ"])),
        [N, R] = i.useState(!1),
        [P, w] = i.useState(y),
        [D, x] = i.useState(""),
        [L, M] = i.useState(null),
        j = async () => {
            let e;
            w(O.x.REGISTER);
            let t =
                m.isPlatformEmbedded && E.ZP.supportsFeature(v.eRX.WEBAUTHN)
                    ? E.ZP.webAuthnRegister(c)
                    : a.Ue(JSON.parse(c)).then((e) => JSON.stringify(e));
            try {
                e = await t;
            } catch (e) {
                g.Z.captureException(e), M(I.intl.string(I.t.xSCvBf)), w(O.x.INIT);
                return;
            }
            x(e), w(O.x.NAME);
        };
    return (0, r.jsxs)(l.Y0X, {
        transitionState: t,
        "aria-labelledby": S,
        parentComponent: "UserSettingsWebAuthn",
        children: [
            (0, r.jsxs)(l.xBx, {
                className: T.header,
                separator: !1,
                children: [
                    (0, r.jsxs)(l.Heading, {
                        id: S,
                        variant: "heading-lg/semibold",
                        children: [
                            P === O.x.INIT && I.intl.string(I.t.vrOCCk),
                            P === O.x.REGISTER && I.intl.string(I.t.wePEBF),
                            P === O.x.NAME && I.intl.string(I.t["cY/IOu"]),
                            P === O.x.SUCCESS && d.Z.parse(I.intl.string(I.t.FXC7ZC)),
                        ],
                    }),
                    (0, r.jsx)(l.olH, {
                        onClick: o,
                        className: T.modalCloseButton,
                    }),
                ],
            }),
            (0, r.jsxs)(l.MyZ, {
                activeSlide: P,
                width: 440,
                children: [
                    (0, r.jsxs)(l.Mi4, {
                        id: O.x.INIT,
                        children: [
                            (0, r.jsxs)(l.hzk, {
                                className: T.content,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: T.icon,
                                        children: (0, r.jsx)("img", {
                                            alt: "",
                                            src: n(773072),
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        children:
                                            null != L &&
                                            (0, r.jsx)(l.Text, {
                                                variant: "text-md/normal",
                                                color: "status-danger",
                                                children: L,
                                            }),
                                    }),
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(l.Text, {
                                            variant: "text-md/normal",
                                            children: I.intl.string(I.t.Lh5vTW),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(l.mzw, {
                                children: (0, r.jsx)(l.Button, {
                                    variant: "primary",
                                    text: I.intl.string(I.t.oibaQa),
                                    onClick: j,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(l.Mi4, {
                        id: O.x.REGISTER,
                        children: [
                            (0, r.jsxs)(l.hzk, {
                                className: T.content,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: T.icon,
                                        children: (0, r.jsx)("img", {
                                            alt: "",
                                            src: n(773072),
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(l.Text, {
                                            variant: "text-md/normal",
                                            children: I.intl.string(I.t.aVMiX3),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(l.mzw, {
                                children: (0, r.jsx)(l.Button, {
                                    variant: "primary",
                                    text: "",
                                    loading: !0,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(l.Mi4, {
                        id: O.x.NAME,
                        children: (0, r.jsxs)("form", {
                            onSubmit: (e) => {
                                e.preventDefault(),
                                    b
                                        .Sr(A, s, D)
                                        .then(async () => {
                                            h ? w(O.x.SUCCESS) : (await (0, _.Yn)(!1), o());
                                        })
                                        .catch(() => {
                                            M(I.intl.string(I.t.fEptJP)), w(O.x.INIT);
                                        });
                            },
                            children: [
                                (0, r.jsxs)(l.hzk, {
                                    className: T.content,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: T.icon,
                                            children: (0, r.jsx)("img", {
                                                alt: "",
                                                src: n(637163),
                                            }),
                                        }),
                                        (0, r.jsxs)(l.Kqy, {
                                            gap: 8,
                                            children: [
                                                (0, r.jsx)(l.Text, {
                                                    variant: "text-md/normal",
                                                    children: I.intl.string(I.t["Jzd+z/"]),
                                                }),
                                                (0, r.jsx)(l.oil, {
                                                    value: A,
                                                    onChange: (e) => {
                                                        C(e), R(0 === e.length);
                                                    },
                                                    autoFocus: !0,
                                                    minLength: 1,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(l.mzw, {
                                    className: T.footer,
                                    children: (0, r.jsxs)(l.ButtonGroup, {
                                        direction: "horizontal-reverse",
                                        children: [
                                            (0, r.jsx)(l.Button, {
                                                variant: "primary",
                                                text: I.intl.string(I.t["5dyZ1S"]),
                                                type: "submit",
                                                disabled: N,
                                            }),
                                            (0, r.jsx)(l.Button, {
                                                variant: "secondary",
                                                text: I.intl.string(I.t["13/7kX"]),
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
                    (0, r.jsxs)(l.Mi4, {
                        id: O.x.SUCCESS,
                        children: [
                            (0, r.jsxs)(l.hzk, {
                                className: T.content,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: T.icon,
                                        children: (0, r.jsx)("img", {
                                            alt: "",
                                            src: n(637163),
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(l.Text, {
                                            variant: "text-md/normal",
                                            children: I.intl.string(I.t.e1qv6i),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(l.mzw, {
                                className: T.footer,
                                children: (0, r.jsxs)(l.ButtonGroup, {
                                    direction: "horizontal-reverse",
                                    children: [
                                        (0, r.jsx)(l.Button, {
                                            variant: "primary",
                                            text: I.intl.string(I.t.MubYG8),
                                            onClick: () => {
                                                o(),
                                                    (0, p.openUserSettings)(f.n.ACCOUNT_PANEL, {
                                                        section: v.oAB.ACCOUNT,
                                                    });
                                            },
                                        }),
                                        (0, r.jsx)(l.Button, {
                                            variant: "secondary",
                                            text: I.intl.string(I.t.i4jeWR),
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
function P(e) {
    let { onSelect: t, credential: i } = e;
    return (0, r.jsxs)(l.v2r, {
        navId: "webauthn-credential-actions",
        onClose: c.Zy,
        "aria-label": I.intl.string(I.t["+nrTbK"]),
        onSelect: t,
        children: [
            (0, r.jsx)(l.sNh, {
                id: "webauthn-edit-credential-".concat(i.id),
                label: I.intl.string(I.t.bt75uw),
                action: () => {
                    (0, l.ZDy)(async () => {
                        let { default: e } = await n.e("804").then(n.bind(n, 89616));
                        return (t) => (0, r.jsx)(e, A({ credential: i }, t));
                    });
                },
            }),
            (0, r.jsx)(l.sNh, {
                id: "webauthn-delete-credential-".concat(i.id),
                label: I.intl.string(I.t["+xgS+L"]),
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
    let [a, u] = i.useState(!1),
        d = i.useCallback(() => {
            u(!0),
                b
                    .startRegisterWebAuthnCredential()
                    .then((e) => {
                        let { ticket: t, challenge: n } = e;
                        (0, l.h7j)((e) =>
                            (0, r.jsx)(
                                R,
                                N(A({}, e), {
                                    ticket: t,
                                    challenge: n,
                                }),
                            ),
                        );
                    })
                    .catch((e) => {
                        e.message !== I.intl.string(I.t.N2yb9a) && g.Z.captureException(e);
                    })
                    .finally(() => {
                        u(!1);
                    });
        }, []);
    return (
        i.useEffect(() => {
            n && !a && (b.vg(), d());
        }, [n, a, d]),
        (0, r.jsxs)(l.gNt, {
            label: I.intl.string(I.t.y7SXYX),
            description: I.intl.string(I.t.TMukAN),
            children: [
                e.length > 0 &&
                    (0, r.jsx)("div", {
                        className: T.credentialList,
                        children: e.map((e) =>
                            (0, r.jsxs)(
                                "div",
                                {
                                    className: T.credentialItem,
                                    children: [
                                        (0, r.jsx)(l.Text, {
                                            variant: "text-md/semibold",
                                            children: e.name,
                                        }),
                                        (0, r.jsx)(s.zx, {
                                            look: s.zx.Looks.BLANK,
                                            color: s.zx.Colors.TRANSPARENT,
                                            size: s.zx.Sizes.ICON,
                                            onClick: (t) => {
                                                (0, c.vq)(t, (t) => (0, r.jsx)(P, N(A({}, t), { credential: e })));
                                            },
                                            "aria-label": I.intl.string(I.t["+nrTbK"]),
                                            innerClassName: T.credentialOptions,
                                            children: (0, r.jsx)(l.Huf, {
                                                size: "md",
                                                className: T.__invalid_overflowIcon,
                                                colorClass: T.__invalid_overflowIconFg,
                                                "aria-hidden": !0,
                                            }),
                                        }),
                                    ],
                                },
                                e.id,
                            ),
                        ),
                    }),
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(l.Button, {
                        variant: "primary",
                        size: "sm",
                        text: I.intl.string(I.t.vrOCCk),
                        onClick: d,
                        loading: a,
                        disabled: !h.Ae,
                    }),
                }),
            ],
        })
    );
}
