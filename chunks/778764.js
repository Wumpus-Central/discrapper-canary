n.d(t, {
    RegisterWebAuthnCredentialModal: () => P,
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
    u = n(136097),
    d = n(313201),
    f = n(454585),
    _ = n(313789),
    p = n(202858),
    h = n(518596),
    m = n(287880),
    g = n(358085),
    E = n(960048),
    b = n(998502),
    y = n(365007),
    O = n(15980),
    v = n(755733),
    I = n(981631),
    T = n(388032),
    S = n(421156);
function A(e, t, n) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
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
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e) {
    let {
            transitionState: t,
            onClose: o,
            ticket: s,
            challenge: c,
            showAccountSettingsButton: u = !1,
            initialSlide: m = v.x.INIT,
        } = e,
        O = (0, d.Dt)(),
        [A, C] = i.useState(T.intl.string(T.t["I/sJtJ"])),
        [N, R] = i.useState(!1),
        [P, D] = i.useState(m),
        [w, x] = i.useState(""),
        [L, M] = i.useState(null),
        j = async () => {
            let e;
            D(v.x.REGISTER);
            let t =
                g.isPlatformEmbedded && b.ZP.supportsFeature(I.eRX.WEBAUTHN)
                    ? b.ZP.webAuthnRegister(c)
                    : a.Ue(JSON.parse(c)).then((e) => JSON.stringify(e));
            try {
                e = await t;
            } catch (e) {
                E.Z.captureException(e), M(T.intl.string(T.t.xSCvBf)), D(v.x.INIT);
                return;
            }
            x(e), D(v.x.NAME);
        };
    return (0, r.jsxs)(l.Y0X, {
        transitionState: t,
        "aria-labelledby": O,
        parentComponent: "UserSettingsWebAuthn",
        children: [
            (0, r.jsxs)(l.xBx, {
                className: S.header,
                separator: !1,
                children: [
                    (0, r.jsxs)(l.Heading, {
                        id: O,
                        variant: "heading-lg/semibold",
                        children: [
                            P === v.x.INIT && T.intl.string(T.t.vrOCCk),
                            P === v.x.REGISTER && T.intl.string(T.t.wePEBF),
                            P === v.x.NAME && T.intl.string(T.t["cY/IOu"]),
                            P === v.x.SUCCESS && f.Z.parse(T.intl.string(T.t.FXC7ZC)),
                        ],
                    }),
                    (0, r.jsx)(l.olH, {
                        onClick: o,
                        className: S.modalCloseButton,
                    }),
                ],
            }),
            (0, r.jsxs)(l.MyZ, {
                activeSlide: P,
                width: 440,
                children: [
                    (0, r.jsxs)(l.Mi4, {
                        id: v.x.INIT,
                        children: [
                            (0, r.jsxs)(l.hzk, {
                                className: S.content,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: S.icon,
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
                                            children: T.intl.string(T.t.Lh5vTW),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(l.mzw, {
                                children: (0, r.jsx)(l.Button, {
                                    variant: "primary",
                                    text: T.intl.string(T.t.oibaQa),
                                    onClick: j,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(l.Mi4, {
                        id: v.x.REGISTER,
                        children: [
                            (0, r.jsxs)(l.hzk, {
                                className: S.content,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: S.icon,
                                        children: (0, r.jsx)("img", {
                                            alt: "",
                                            src: n(773072),
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(l.Text, {
                                            variant: "text-md/normal",
                                            children: T.intl.string(T.t.aVMiX3),
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
                        id: v.x.NAME,
                        children: (0, r.jsxs)("form", {
                            onSubmit: (e) => {
                                e.preventDefault(),
                                    y
                                        .Sr(A, s, w)
                                        .then(async () => {
                                            u ? D(v.x.SUCCESS) : (await (0, p.Yn)(!1), o());
                                        })
                                        .catch(() => {
                                            M(T.intl.string(T.t.fEptJP)), D(v.x.INIT);
                                        });
                            },
                            children: [
                                (0, r.jsxs)(l.hzk, {
                                    className: S.content,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: S.icon,
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
                                                    children: T.intl.string(T.t["Jzd+z/"]),
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
                                    className: S.footer,
                                    children: (0, r.jsxs)(l.ButtonGroup, {
                                        direction: "horizontal-reverse",
                                        children: [
                                            (0, r.jsx)(l.Button, {
                                                variant: "primary",
                                                text: T.intl.string(T.t["5dyZ1S"]),
                                                type: "submit",
                                                disabled: N,
                                            }),
                                            (0, r.jsx)(l.Button, {
                                                variant: "secondary",
                                                text: T.intl.string(T.t["13/7kX"]),
                                                onClick: () => {
                                                    D(v.x.INIT);
                                                },
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)(l.Mi4, {
                        id: v.x.SUCCESS,
                        children: [
                            (0, r.jsxs)(l.hzk, {
                                className: S.content,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: S.icon,
                                        children: (0, r.jsx)("img", {
                                            alt: "",
                                            src: n(637163),
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(l.Text, {
                                            variant: "text-md/normal",
                                            children: T.intl.string(T.t.e1qv6i),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(l.mzw, {
                                className: S.footer,
                                children: (0, r.jsxs)(l.ButtonGroup, {
                                    direction: "horizontal-reverse",
                                    children: [
                                        (0, r.jsx)(l.Button, {
                                            variant: "primary",
                                            text: T.intl.string(T.t.MubYG8),
                                            onClick: () => {
                                                o(),
                                                    (0, h.openUserSettings)(_.n.ACCOUNT_PANEL, {
                                                        section: I.oAB.ACCOUNT,
                                                    });
                                            },
                                        }),
                                        (0, r.jsx)(l.Button, {
                                            variant: "secondary",
                                            text: T.intl.string(T.t.i4jeWR),
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
function D(e) {
    let { onSelect: t, credential: i } = e;
    return (0, r.jsxs)(l.v2r, {
        navId: "webauthn-credential-actions",
        onClose: c.Zy,
        "aria-label": T.intl.string(T.t["+nrTbK"]),
        onSelect: t,
        children: [
            (0, r.jsx)(l.sNh, {
                id: "webauthn-edit-credential-".concat(i.id),
                label: T.intl.string(T.t.bt75uw),
                action: () => {
                    (0, l.ZDy)(async () => {
                        let { default: e } = await n.e("58760").then(n.bind(n, 89616));
                        return (t) => (0, r.jsx)(e, C({ credential: i }, t));
                    });
                },
            }),
            (0, r.jsx)(l.sNh, {
                id: "webauthn-delete-credential-".concat(i.id),
                label: T.intl.string(T.t["+xgS+L"]),
                color: "danger",
                action: () => {
                    y.cT(i);
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
    } = (0, o.cj)([O.Z], () => ({
        hasFetchedCredentials: O.Z.hasFetchedCredentials(),
        credentials: O.Z.getCredentials(),
        hasPendingRegisterTrigger: O.Z.hasPendingRegisterTrigger(),
    }));
    i.useEffect(() => {
        t || y.hL();
    }, [t]),
        i.useEffect(
            () => () => {
                O.Z.hasPendingRegisterTrigger() && y.vg();
            },
            [],
        );
    let [a, s] = i.useState(!1),
        c = i.useCallback(() => {
            s(!0),
                y
                    .startRegisterWebAuthnCredential()
                    .then((e) => {
                        let { ticket: t, challenge: n } = e;
                        (0, l.h7j)((e) =>
                            (0, r.jsx)(
                                P,
                                R(C({}, e), {
                                    ticket: t,
                                    challenge: n,
                                }),
                            ),
                        );
                    })
                    .catch((e) => {
                        e.message !== T.intl.string(T.t.N2yb9a) && E.Z.captureException(e);
                    })
                    .finally(() => {
                        s(!1);
                    });
        }, []);
    return (
        i.useEffect(() => {
            n && !a && (y.vg(), c());
        }, [n, a, c]),
        (0, r.jsxs)(l.gNt, {
            label: T.intl.string(T.t.y7SXYX),
            description: T.intl.string(T.t.TMukAN),
            children: [
                e.length > 0 &&
                    (0, r.jsx)("div", {
                        className: S.credentialList,
                        children: e.map(L),
                    }),
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(l.Button, {
                        variant: "primary",
                        size: "sm",
                        text: T.intl.string(T.t.vrOCCk),
                        onClick: c,
                        loading: a,
                        disabled: !m.Ae,
                    }),
                }),
            ],
        })
    );
}
function x(e) {
    if (null !== e.last_used)
        return (0, r.jsx)(l.Text, {
            variant: "text-sm/normal",
            children: T.intl.format(T.t["7JgxF5"], { lastUsed: (0, u.p)(e.last_used) }),
        });
}
function L(e) {
    return (0, r.jsxs)(
        "div",
        {
            className: S.credentialItem,
            children: [
                (0, r.jsx)(l.Text, {
                    variant: "text-md/semibold",
                    children: e.name,
                }),
                x(e),
                (0, r.jsx)(s.zx, {
                    look: s.zx.Looks.BLANK,
                    color: s.zx.Colors.TRANSPARENT,
                    size: s.zx.Sizes.ICON,
                    onClick: (t) => {
                        (0, c.vq)(t, (t) => (0, r.jsx)(D, R(C({}, t), { credential: e })));
                    },
                    "aria-label": T.intl.string(T.t["+nrTbK"]),
                    innerClassName: S.credentialOptions,
                    children: (0, r.jsx)(l.Huf, {
                        size: "md",
                        className: S.__invalid_overflowIcon,
                        colorClass: S.__invalid_overflowIconFg,
                        "aria-hidden": !0,
                    }),
                }),
            ],
        },
        e.id,
    );
}
