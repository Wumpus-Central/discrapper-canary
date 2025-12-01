n.d(t, {
    RegisterWebAuthnCredentialModal: () => R,
    Z: () => D,
}),
    n(388685),
    n(49124),
    n(457542);
var r = n(54381),
    i = n(473749),
    a = n(849055),
    o = n(442837),
    s = n(755721),
    l = n(481060),
    c = n(239091),
    u = n(136097),
    d = n(313201),
    f = n(454585),
    p = n(313789),
    _ = n(202858),
    m = n(518596),
    h = n(287880),
    g = n(358085),
    E = n(960048),
    b = n(998502),
    y = n(365007),
    O = n(15980),
    v = n(755733),
    S = n(981631),
    I = n(388032),
    T = n(421156);
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
function P(e, t) {
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
function R(e) {
    let {
            transitionState: t,
            onClose: o,
            ticket: s,
            challenge: c,
            showAccountSettingsButton: u = !1,
            initialSlide: h = v.x.INIT,
        } = e,
        O = (0, d.Dt)(),
        [A, C] = i.useState(I.intl.string(I.t["I/sJtJ"])),
        [N, P] = i.useState(!1),
        [R, w] = i.useState(h),
        [D, x] = i.useState(""),
        [L, j] = i.useState(null),
        M = async () => {
            let e;
            w(v.x.REGISTER);
            let t =
                g.isPlatformEmbedded && b.ZP.supportsFeature(S.eRX.WEBAUTHN)
                    ? b.ZP.webAuthnRegister(c)
                    : a.Ue(JSON.parse(c)).then((e) => JSON.stringify(e));
            try {
                e = await t;
            } catch (e) {
                E.Z.captureException(e), j(I.intl.string(I.t.xSCvBf)), w(v.x.INIT);
                return;
            }
            x(e), w(v.x.NAME);
        };
    return (0, r.jsxs)(l.Y0X, {
        transitionState: t,
        "aria-labelledby": O,
        parentComponent: "UserSettingsWebAuthn",
        children: [
            (0, r.jsxs)(l.xBx, {
                className: T.header,
                separator: !1,
                children: [
                    (0, r.jsxs)(l.Heading, {
                        id: O,
                        variant: "heading-lg/semibold",
                        children: [
                            R === v.x.INIT && I.intl.string(I.t.vrOCCk),
                            R === v.x.REGISTER && I.intl.string(I.t.wePEBF),
                            R === v.x.NAME && I.intl.string(I.t["cY/IOu"]),
                            R === v.x.SUCCESS && f.Z.parse(I.intl.string(I.t.FXC7ZC)),
                        ],
                    }),
                    (0, r.jsx)(l.olH, {
                        onClick: o,
                        className: T.modalCloseButton,
                    }),
                ],
            }),
            (0, r.jsxs)(l.MyZ, {
                activeSlide: R,
                width: 440,
                children: [
                    (0, r.jsxs)(l.Mi4, {
                        id: v.x.INIT,
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
                                    onClick: M,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(l.Mi4, {
                        id: v.x.REGISTER,
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
                        id: v.x.NAME,
                        children: (0, r.jsxs)("form", {
                            onSubmit: (e) => {
                                e.preventDefault(),
                                    y
                                        .Sr(A, s, D)
                                        .then(async () => {
                                            u ? w(v.x.SUCCESS) : (await (0, _.Yn)(!1), o());
                                        })
                                        .catch(() => {
                                            j(I.intl.string(I.t.fEptJP)), w(v.x.INIT);
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
                                                        C(e), P(0 === e.length);
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
                                                    w(v.x.INIT);
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
                                                    (0, m.openUserSettings)(p.n.ACCOUNT_PANEL, {
                                                        section: S.oAB.ACCOUNT,
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
function w(e) {
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
                        return (t) => (0, r.jsx)(e, C({ credential: i }, t));
                    });
                },
            }),
            (0, r.jsx)(l.sNh, {
                id: "webauthn-delete-credential-".concat(i.id),
                label: I.intl.string(I.t["+xgS+L"]),
                color: "danger",
                action: () => {
                    y.cT(i);
                },
            }),
        ],
    });
}
function D() {
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
                                R,
                                P(C({}, e), {
                                    ticket: t,
                                    challenge: n,
                                }),
                            ),
                        );
                    })
                    .catch((e) => {
                        e.message !== I.intl.string(I.t.N2yb9a) && E.Z.captureException(e);
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
            label: I.intl.string(I.t.y7SXYX),
            description: I.intl.string(I.t.TMukAN),
            children: [
                e.length > 0 &&
                    (0, r.jsx)("div", {
                        className: T.credentialList,
                        children: e.map(L),
                    }),
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(l.Button, {
                        variant: "primary",
                        size: "sm",
                        text: I.intl.string(I.t.vrOCCk),
                        onClick: c,
                        loading: a,
                        disabled: !h.Ae,
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
            children: I.intl.format(I.t["7JgxF5"], { lastUsed: (0, u.p)(e.last_used) }),
        });
}
function L(e) {
    return (0, r.jsxs)(
        "div",
        {
            className: T.credentialItem,
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
                        (0, c.vq)(t, (t) => (0, r.jsx)(w, P(C({}, t), { credential: e })));
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
    );
}
