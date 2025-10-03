n.d(t, { Z: () => N }), n(388685), n(49124), n(457542), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(849055),
    o = n(442837),
    s = n(755721),
    l = n(481060),
    c = n(239091),
    u = n(313201),
    d = n(202858),
    f = n(287880),
    _ = n(358085),
    p = n(960048),
    h = n(998502),
    m = n(365007),
    g = n(15980),
    E = n(755733),
    b = n(981631),
    y = n(388032),
    O = n(421156);
function v(e, t, n) {
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
function I(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e) {
    let { transitionState: t, onClose: o, ticket: s, challenge: c } = e,
        f = (0, u.Dt)(),
        [g, v] = i.useState(""),
        [I, T] = i.useState(!0),
        [S, A] = i.useState(E.x.INIT),
        [C, N] = i.useState(""),
        [R, P] = i.useState(null),
        w = async () => {
            let e;
            A(E.x.REGISTER);
            let t =
                _.isPlatformEmbedded && h.ZP.supportsFeature(b.eRX.WEBAUTHN)
                    ? h.ZP.webAuthnRegister(c)
                    : a.Ue(JSON.parse(c)).then((e) => JSON.stringify(e));
            try {
                e = await t;
            } catch (e) {
                p.Z.captureException(e), P(y.intl.string(y.t.xSCvBQ)), A(E.x.INIT);
                return;
            }
            N(e), A(E.x.NAME);
        };
    return (0, r.jsxs)(l.Y0X, {
        transitionState: t,
        "aria-labelledby": f,
        parentComponent: "UserSettingsWebAuthn",
        children: [
            (0, r.jsxs)(l.xBx, {
                className: O.header,
                separator: !1,
                children: [
                    (0, r.jsxs)(l.X6q, {
                        id: f,
                        variant: "heading-lg/semibold",
                        children: [
                            S === E.x.INIT && y.intl.string(y.t.vrOCCg),
                            S === E.x.REGISTER && y.intl.string(y.t.wePEBA),
                            S === E.x.NAME && y.intl.string(y.t["cY/IOj"]),
                        ],
                    }),
                    (0, r.jsx)(l.olH, {
                        onClick: o,
                        className: O.modalCloseButton,
                    }),
                ],
            }),
            (0, r.jsxs)(l.MyZ, {
                activeSlide: S,
                width: 440,
                children: [
                    (0, r.jsxs)(l.Mi4, {
                        id: E.x.INIT,
                        children: [
                            (0, r.jsxs)(l.hzk, {
                                className: O.content,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: O.icon,
                                        children: (0, r.jsx)("img", {
                                            alt: "",
                                            src: n(773072),
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        children:
                                            null != R &&
                                            (0, r.jsx)(l.Text, {
                                                variant: "text-md/normal",
                                                color: "status-danger",
                                                children: R,
                                            }),
                                    }),
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(l.Text, {
                                            variant: "text-md/normal",
                                            children: y.intl.string(y.t.Lh5vTU),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(l.mzw, {
                                children: (0, r.jsx)(l.zxk, {
                                    variant: "primary",
                                    text: y.intl.string(y.t.oibaQU),
                                    onClick: w,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(l.Mi4, {
                        id: E.x.REGISTER,
                        children: [
                            (0, r.jsxs)(l.hzk, {
                                className: O.content,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: O.icon,
                                        children: (0, r.jsx)("img", {
                                            alt: "",
                                            src: n(773072),
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(l.Text, {
                                            variant: "text-md/normal",
                                            children: y.intl.string(y.t.aVMiX1),
                                        }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(l.mzw, {
                                children: (0, r.jsx)(l.zxk, {
                                    variant: "primary",
                                    text: "",
                                    loading: !0,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(l.Mi4, {
                        id: E.x.NAME,
                        children: (0, r.jsxs)("form", {
                            onSubmit: (e) => {
                                e.preventDefault(),
                                    m
                                        .Sr(g, s, C)
                                        .then(async () => {
                                            await (0, d.Yn)(!1);
                                        })
                                        .then(() => o())
                                        .catch(() => {
                                            P(y.intl.string(y.t.fEptJC)), A(E.x.INIT);
                                        });
                            },
                            children: [
                                (0, r.jsxs)(l.hzk, {
                                    className: O.content,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: O.icon,
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
                                                    children: y.intl.string(y.t["Jzd+z8"]),
                                                }),
                                                (0, r.jsx)(l.oil, {
                                                    value: g,
                                                    onChange: (e) => {
                                                        v(e), T(0 === e.length);
                                                    },
                                                    autoFocus: !0,
                                                    minLength: 1,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(l.mzw, {
                                    className: O.footer,
                                    children: (0, r.jsxs)(l.hE2, {
                                        direction: "horizontal-reverse",
                                        children: [
                                            (0, r.jsx)(l.zxk, {
                                                variant: "primary",
                                                text: y.intl.string(y.t["5dyZ1d"]),
                                                type: "submit",
                                                disabled: I,
                                            }),
                                            (0, r.jsx)(l.zxk, {
                                                variant: "secondary",
                                                text: y.intl.string(y.t["13/7kZ"]),
                                                onClick: () => {
                                                    A(E.x.INIT);
                                                },
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
function C(e) {
    let { onSelect: t, credential: i } = e;
    return (0, r.jsxs)(l.v2r, {
        navId: "webauthn-credential-actions",
        onClose: c.Zy,
        "aria-label": y.intl.string(y.t["+nrTbG"]),
        onSelect: t,
        children: [
            (0, r.jsx)(l.sNh, {
                id: "webauthn-edit-credential-".concat(i.id),
                label: y.intl.string(y.t.bt75u7),
                action: () => {
                    (0, l.ZDy)(async () => {
                        let { default: e } = await n.e("804").then(n.bind(n, 89616));
                        return (t) => (0, r.jsx)(e, I({ credential: i }, t));
                    });
                },
            }),
            (0, r.jsx)(l.sNh, {
                id: "webauthn-delete-credential-".concat(i.id),
                label: y.intl.string(y.t["+xgS+P"]),
                color: "danger",
                action: () => {
                    m.cT(i);
                },
            }),
        ],
    });
}
function N() {
    let {
        credentials: e,
        hasFetchedCredentials: t,
        hasPendingRegisterTrigger: n,
    } = (0, o.cj)([g.Z], () => ({
        hasFetchedCredentials: g.Z.hasFetchedCredentials(),
        credentials: g.Z.getCredentials(),
        hasPendingRegisterTrigger: g.Z.hasPendingRegisterTrigger(),
    }));
    i.useEffect(() => {
        t || m.hL();
    }, [t]),
        i.useEffect(
            () => () => {
                g.Z.hasPendingRegisterTrigger() && m.vg();
            },
            [],
        );
    let [a, u] = i.useState(!1),
        d = i.useCallback(() => {
            u(!0),
                m
                    .L$()
                    .then((e) => {
                        let { ticket: t, challenge: n } = e;
                        (0, l.h7j)((e) =>
                            (0, r.jsx)(
                                A,
                                S(I({}, e), {
                                    ticket: t,
                                    challenge: n,
                                }),
                            ),
                        );
                    })
                    .catch((e) => {
                        e.message !== y.intl.string(y.t.N2yb9f) && p.Z.captureException(e);
                    })
                    .finally(() => {
                        u(!1);
                    });
        }, []);
    return (
        i.useEffect(() => {
            n && !a && (m.vg(), d());
        }, [n, a, d]),
        (0, r.jsxs)(l.hjN, {
            title: y.intl.string(y.t.y7SXYW),
            className: O.settings,
            children: [
                (0, r.jsx)(l.R94, {
                    type: l.R94.Types.DESCRIPTION,
                    className: O.description,
                    children: y.intl.string(y.t.TMukAA),
                }),
                e.length > 0 &&
                    (0, r.jsx)("div", {
                        className: O.credentialList,
                        children: e.map((e) =>
                            (0, r.jsxs)(
                                "div",
                                {
                                    className: O.credentialItem,
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
                                                (0, c.vq)(t, (t) => (0, r.jsx)(C, S(I({}, t), { credential: e })));
                                            },
                                            "aria-label": y.intl.string(y.t["+nrTbG"]),
                                            innerClassName: O.credentialOptions,
                                            children: (0, r.jsx)(l.Huf, {
                                                size: "md",
                                                className: O.__invalid_overflowIcon,
                                                colorClass: O.__invalid_overflowIconFg,
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
                    children: (0, r.jsx)(l.zxk, {
                        variant: "primary",
                        size: "sm",
                        text: y.intl.string(y.t.vrOCCg),
                        onClick: d,
                        loading: a,
                        disabled: !f.Ae,
                    }),
                }),
            ],
        })
    );
}
