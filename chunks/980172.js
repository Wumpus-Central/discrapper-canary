n.d(t, {
    A: () => el,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    c = n(311907),
    u = n(827734),
    d = n(990078),
    f = n(397927),
    p = n(297413),
    _ = n(935649),
    h = n(847599),
    m = n(36149),
    g = n(521933),
    E = n(50268),
    b = n(922301),
    y = n(81400),
    O = n(557722),
    A = n(951122),
    v = n(772786),
    S = n(207560),
    I = n(195043),
    T = n(790114),
    C = n(262),
    N = n(950191),
    R = n(854627),
    w = n(542535),
    P = n(915614),
    D = n(662758),
    x = n(752319),
    L = n(287809),
    j = n(957565),
    M = n(427262),
    k = n(837921),
    U = n(64313),
    G = n(253932),
    V = n(780964),
    F = n(192501),
    B = n(840065),
    H = n(531525),
    Y = n(652215),
    W = n(53516),
    K = n(789622),
    z = n(985018),
    q = n(240342);

function X(e, t, n) {
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

function Z(e) {
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
                X(e, t, n[t]);
            });
    }
    return e;
}

function Q(e, t) {
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

function $(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let J = k.Ay.getEnableHardwareAcceleration() ? f.JsQ : f.euF;

function ee() {
    (0, B.openUserSettings)(V.X.PROFILE_PANEL, {
        section: Y.nc_.PROFILE_CUSTOMIZATION,
    });
}

function et(e) {
    var t, a;
    let { className: o, user: l } = e,
        c = i.useRef(null),
        p = (0, A.Jz)(),
        _ = (0, v.g)(),
        h = (0, y.EC)(),
        m = null != (t = null == h || null == (a = h.nick) ? void 0 : a[0]) ? t : null,
        [g, E] = i.useState(!1);
    i.useEffect(() => {
        E(null != c.current && c.current.scrollWidth > c.current.clientWidth);
    }, [l.username]);
    let b = !l.isClaimed(),
        O = (p && !l.hasUniqueUsername() && !l.hasVerifiedEmailOrPhone()) || b,
        S = O ? z.intl.string(z.t["7Ngnyr"]) : void 0;
    return (0, r.jsxs)("div", {
        className: s()(q.ZZ, o),
        children: [
            (0, r.jsx)("div", {
                className: q.NQ,
                children: (0, r.jsxs)("div", {
                    className: q.Fj,
                    children: [
                        (0, r.jsx)(f.Text, {
                            variant: "text-md/medium",
                            className: q.p9,
                            children: z.intl.string(z.t.qqhR3L),
                        }),
                        (0, r.jsxs)("div", {
                            className: q.HR,
                            ref: c,
                            children: [
                                (0, r.jsx)(f.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: l.username,
                                }),
                                !l.hasUniqueUsername() &&
                                    (0, r.jsxs)(f.Text, {
                                        tag: "span",
                                        color: "text-default",
                                        variant: "text-md/normal",
                                        children: ["#", l.discriminator],
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
            _ &&
                (0, r.jsx)("div", {
                    className: q.d6,
                    children: (0, r.jsx)(d.m, {
                        text: z.intl.string(z.t.HHC5Z4),
                        children: (0, r.jsx)(f.EpV, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: u.A.colors.STATUS_WARNING.css,
                        }),
                    }),
                }),
            null != m &&
                (0, r.jsx)("div", {
                    className: q.d6,
                    children: (0, r.jsx)(d.m, {
                        __unsupportedReactNodeAsText: m,
                        "aria-label": !1,
                        children: (0, r.jsx)(f.EpV, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: u.A.colors.STATUS_WARNING.css,
                        }),
                    }),
                }),
            (0, r.jsx)(d.m, {
                text: S,
                children: (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: q.pr,
                    children: (0, r.jsx)(f.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: g ? z.intl.string(z.t["16kTw/"]) : z.intl.string(z.t.bt75uw),
                        disabled: O,
                        "aria-label": z.intl.string(z.t.JECa91),
                        onClick: () =>
                            (0, f.mMO)(async () => {
                                if (_) {
                                    let { default: e } = await n.e("54160").then(n.bind(n, 914131));
                                    return (t) =>
                                        (0, r.jsx)(
                                            e,
                                            Z(
                                                {
                                                    source: K.gg.USER_SETTINGS_EDIT,
                                                },
                                                t,
                                            ),
                                        );
                                }
                                {
                                    let { default: e } = await n.e("27533").then(n.bind(n, 993468));
                                    return (t) => (0, r.jsx)(e, Z({}, t));
                                }
                            }),
                    }),
                }),
            }),
        ],
    });
}

function en(e) {
    var t, n;
    let { user: a, className: o } = e,
        l = (0, y.EC)(),
        c = null != (t = null == l || null == (n = l.nick) ? void 0 : n[0]) ? t : null,
        p = M.Ay.getGlobalName(a),
        _ = i.useRef(null),
        [h, m] = i.useState(!1);
    return (
        i.useEffect(() => {
            m(null != _.current && _.current.scrollWidth > _.current.clientWidth);
        }, [p]),
        (0, r.jsxs)("div", {
            className: s()(q.ZZ, o),
            children: [
                (0, r.jsx)("div", {
                    className: q.NQ,
                    children: (0, r.jsxs)("div", {
                        className: q.Fj,
                        children: [
                            (0, r.jsx)(f.Text, {
                                variant: "text-md/medium",
                                className: q.p9,
                                children: z.intl.string(z.t["9AjdkD"]),
                            }),
                            (0, r.jsx)("div", {
                                className: q.HR,
                                ref: _,
                                children: (0, r.jsx)(f.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: null == p ? z.intl.string(z.t.ep5kjK) : p,
                                }),
                            }),
                        ],
                    }),
                }),
                null != c &&
                    (0, r.jsx)("div", {
                        className: q.d6,
                        children: (0, r.jsx)(d.m, {
                            __unsupportedReactNodeAsText: c,
                            "aria-label": !1,
                            children: (0, r.jsx)(f.EpV, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: u.A.colors.STATUS_WARNING.css,
                            }),
                        }),
                    }),
                (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: q.pr,
                    children: (0, r.jsx)(f.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: h ? z.intl.string(z.t["16kTw/"]) : z.intl.string(z.t.bt75uw),
                        "aria-label": z.intl.string(z.t.YXeWYM),
                        onClick: ee,
                    }),
                }),
            ],
        })
    );
}

function er(e) {
    let { text: t, censor: n, revealLabel: a, hideLabel: s } = e,
        [o, l] = i.useState(!1),
        c = o ? t : n(t);
    return (0, r.jsxs)("div", {
        className: q.c1,
        children: [
            c,
            (0, r.jsx)(f.QWc, {
                variant: "primary",
                textVariant: "text-sm/medium",
                "aria-label": o ? s : a,
                onClick: () => l(!o),
                text: o ? z.intl.string(z.t.fgq1gs) : z.intl.string(z.t.dcztdU),
            }),
        ],
    });
}

function ei(e) {
    let t,
        { className: i, user: a } = e;
    if (a.isClaimed())
        if (null == a.email)
            t = {
                buttonText: z.intl.string(z.t.OYkgVk),
                buttonAriaLabel: z.intl.string(z.t["pvBD+W"]),
                valueMessage: z.intl.string(z.t["8SfTN/"]),
                handleClick: () =>
                    (0, f.mMO)(async () => {
                        let { default: e } = await n.e("83269").then(n.bind(n, 350116));
                        return (t) => (0, r.jsx)(e, Z({}, t));
                    }),
            };
        else {
            let { email: e } = a;
            t = {
                buttonText: z.intl.string(z.t.bt75uw),
                buttonAriaLabel: z.intl.string(z.t["8peUT0"]),
                valueMessage: (0, r.jsx)(er, {
                    text: e,
                    censor: F.B,
                    revealLabel: z.intl.string(z.t["Zvx+yV"]),
                    hideLabel: z.intl.string(z.t.nqTD4d),
                }),
                handleClick: () =>
                    (0, f.mMO)(async () => {
                        let { default: e } = await n.e("83269").then(n.bind(n, 350116));
                        return (t) => (0, r.jsx)(e, Z({}, t));
                    }),
            };
        }
    else
        t = {
            buttonText: z.intl.string(z.t.BleMPB),
            buttonAriaLabel: z.intl.string(z.t.BleMPB),
            valueMessage: z.intl.string(z.t.qxk9zo),
            handleClick: () => g.A.openClaimAccountModal(),
        };
    return (0, r.jsxs)("div", {
        className: s()(q.ZZ, i),
        children: [
            (0, r.jsx)("div", {
                className: q.NQ,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(f.Text, {
                            variant: "text-md/medium",
                            className: q.p9,
                            children: z.intl.string(z.t.tlZllC),
                        }),
                        (0, r.jsx)("div", {
                            children: (0, r.jsx)(f.Text, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: t.valueMessage,
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: q.pr,
                children: (0, r.jsx)(f.Button, {
                    variant: "secondary",
                    size: "sm",
                    text: t.buttonText,
                    "aria-label": t.buttonAriaLabel,
                    onClick: t.handleClick,
                }),
            }),
        ],
    });
}

function ea(e) {
    let t,
        { className: i, user: a } = e;
    if (!a.isClaimed()) return null;
    let { phone: o, email: l } = a,
        c = null != o,
        u = null != l;

    function d() {
        (0, f.mMO)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        Z(
                            {
                                reason: O.d.USER_SETTINGS_UPDATE,
                            },
                            t,
                        ),
                    );
            },
            {
                modalKey: W.V,
            },
        );
    }

    function p() {
        (0, f.qfG)((e) =>
            (0, r.jsx)(
                D.default,
                $(Z({}, e), {
                    title: z.intl.string(z.t["3CTiKi"]),
                    children: a.hasFlag(Y.nhx.MFA_SMS) ? z.intl.string(z.t.jrhJyo) : void 0,
                    actionText: z.intl.string(z.t.N86XcP),
                    handleSubmit: (e) => O.A.removePhone(e, O.d.USER_SETTINGS_UPDATE),
                }),
            ),
        );
    }
    return (
        (t = c
            ? (0, r.jsx)(er, {
                  text: o,
                  censor: F.D,
                  revealLabel: z.intl.string(z.t.eY3xlT),
                  hideLabel: z.intl.string(z.t["jllbv+"]),
              })
            : z.intl.string(z.t.I5kDqj)),
        (0, r.jsxs)("div", {
            className: s()(q.ZZ, i),
            children: [
                (0, r.jsx)("div", {
                    className: q.NQ,
                    children: (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(f.Text, {
                                variant: "text-md/medium",
                                className: q.p9,
                                children: z.intl.string(z.t.kerONq),
                            }),
                            (0, r.jsx)("div", {
                                children: (0, r.jsx)(f.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: t,
                                }),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: q.PU,
                    children: [
                        c && u
                            ? (0, r.jsx)("div", {
                                  className: s()(q.pr, q.DT),
                                  children: (0, r.jsx)(f.QWc, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: z.intl.string(z.t.N86XcP),
                                      "aria-label": z.intl.string(z.t.Rpn4A3),
                                      onClick: p,
                                  }),
                              })
                            : null,
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: q.pr,
                            children: (0, r.jsx)(f.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: c ? z.intl.string(z.t.bt75uw) : z.intl.string(z.t.OYkgVk),
                                "aria-label": c ? z.intl.string(z.t.YDabSe) : z.intl.string(z.t["SfUuE+"]),
                                onClick: d,
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}

function es(e) {
    let { user: t } = e,
        n = (0, E.A)({
            id: t.id,
            label: z.intl.string(z.t["/AXYnE"]),
        }),
        a = G.Q_.useSetting(),
        s = i.useRef(null);
    return a && j.p5
        ? (0, r.jsx)(f.YNO, {
              targetElementRef: s,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(f.W1t, {
                      onClose: t,
                      onSelect: void 0,
                      navId: "copy-id",
                      "aria-label": z.intl.string(z.t.RANhlE),
                      children: n,
                  });
              },
              children: (e) =>
                  (0, r.jsx)(
                      f.DUT,
                      $(Z({}, e), {
                          innerRef: s,
                          className: q.SI,
                          "aria-label": z.intl.string(z.t.DEoVWZ),
                          children: (0, r.jsx)(f.jNK, {
                              size: "md",
                              color: "currentColor",
                              className: q.D$,
                          }),
                      }),
                  ),
          })
        : null;
}

function eo(e) {
    let { className: t } = e,
        n = (0, m.b8)(),
        a = (0, m.yM)(),
        o = !n || a,
        l = i.useMemo(
            () => (n ? (a ? z.intl.string(z.t.sK0dmH) : z.intl.string(z.t.XxRj7f)) : z.intl.string(z.t.UX0Ode)),
            [n, a],
        );
    return (0, r.jsxs)("div", {
        className: s()(q.ZZ, t),
        children: [
            (0, r.jsx)("div", {
                className: q.NQ,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(f.Text, {
                            variant: "text-md/medium",
                            className: q.p9,
                            children: z.intl.string(z.t["/52UYy"]),
                        }),
                        (0, r.jsx)("div", {
                            children: (0, r.jsx)(f.Text, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: l,
                            }),
                        }),
                    ],
                }),
            }),
            o &&
                (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: q.pr,
                    children: (0, r.jsx)(f.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: a ? z.intl.string(z.t.KPGVWl) : z.intl.string(z.t.yNGjyK),
                        "aria-label": a ? z.intl.string(z.t.KPGVWl) : z.intl.string(z.t.yNGjyK),
                        onClick: () =>
                            _.A.showAgeVerificationGetStartedModal({
                                entryPoint: h.q1.ACCOUNT_AGE_GROUP,
                            }),
                    }),
                }),
        ],
    });
}

function el() {
    var e;
    let t = (0, c.bG)([L.default], () => {
            let e = L.default.getCurrentUser();
            return l()(null != e, "UserSettingsAccountProfileCard: currentUser cannot be undefined"), e;
        }),
        n = (0, N.Ay)(t.id),
        i = (0, C.A)(n),
        a = G.jP.useSetting(),
        s = (0, c.bG)([x.A], () => x.A.getErrors()),
        o = null == s || null == (e = s.avatar) ? void 0 : e[0],
        { avatarSrc: u, avatarDecorationSrc: d } = (0, R.A)({
            userId: null == t ? void 0 : t.id,
            size: f._3J.SIZE_80,
        }),
        _ = (0, T.A)(),
        h = (0, S.fk)(),
        m = (0, U.j)("UserSettingsAccountProfileCard"),
        g = h || m;
    return (0, r.jsxs)("div", {
        className: q.DM,
        children: [
            (0, r.jsx)(P.o, {
                user: t,
                displayProfile: n,
                avatarSize: f._3J.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: _ ? 696 : 660,
                bannerHeight: 100,
                themePadding: 0,
            }),
            (0, r.jsxs)("div", {
                className: q.eF,
                children: [
                    (0, r.jsx)(J, {
                        className: q.my,
                        src: u,
                        avatarDecoration: d,
                        status: a,
                        size: f._3J.SIZE_80,
                        "aria-label": t.username,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: q.Ib,
                                children: [
                                    (0, r.jsx)(p.A, {
                                        user: t,
                                        className: q.a1,
                                        discriminatorClass: q.D2,
                                        displayNameStylesType: b.G.STATIC,
                                    }),
                                    (0, r.jsx)(es, {
                                        user: t,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(w.A, {
                                badges: i,
                                className: q.C_,
                                badgeClassName: q.qS,
                            }),
                        ],
                    }),
                    (0, r.jsx)(f.Button, {
                        variant: "primary",
                        size: "sm",
                        text: z.intl.string(z.t["2p2aYz"]),
                        onClick: ee,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: q.Tp,
                children: [
                    null != o
                        ? (0, r.jsx)(f.Text, {
                              className: q.mx,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: o,
                          })
                        : null,
                    (0, r.jsxs)("div", {
                        className: q.FL,
                        children: [
                            (0, r.jsx)(I.x, {
                                setting: H.H.ACCOUNT_DISPLAY_NAME,
                                children: (0, r.jsx)(en, {
                                    className: q.mS,
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(I.x, {
                                setting: H.H.ACCOUNT_USERNAME,
                                children: (0, r.jsx)(et, {
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(I.x, {
                                setting: H.H.ACCOUNT_EMAIL,
                                children: (0, r.jsx)(ei, {
                                    className: q.Zr,
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(I.x, {
                                setting: H.H.ACCOUNT_PHONE_NUMBER,
                                children: (0, r.jsx)(ea, {
                                    className: q.Zr,
                                    user: t,
                                }),
                            }),
                            g &&
                                (0, r.jsx)(I.x, {
                                    setting: H.H.ACCOUNT_AGE_GROUP,
                                    children: (0, r.jsx)(eo, {
                                        className: q.Zr,
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
