n.d(t, {
    A: () => ea,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(284009),
    o = n.n(a),
    c = n(311907),
    d = n(827734),
    u = n(990078),
    _ = n(397927),
    p = n(297413),
    m = n(935649),
    g = n(847599),
    A = n(870383),
    f = n(36149),
    h = n(521933),
    b = n(50268),
    E = n(922301),
    x = n(81400),
    O = n(557722),
    C = n(951122),
    I = n(772786),
    T = n(207560),
    S = n(195043),
    j = n(790114),
    v = n(262),
    N = n(950191),
    y = n(854627),
    P = n(542535),
    R = n(915614),
    D = n(662758),
    w = n(752319),
    L = n(287809),
    M = n(957565),
    U = n(427262),
    G = n(837921),
    k = n(64313),
    V = n(253932),
    H = n(780964),
    B = n(192501),
    F = n(840065),
    Y = n(531525),
    W = n(652215),
    z = n(53516),
    K = n(789622),
    Z = n(985018),
    X = n(240342);

function q(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function J(e, t) {
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
let Q = G.Ay.getEnableHardwareAcceleration() ? _.JsQ : _.euF;

function $() {
    (0, F.openUserSettings)(H.X.PROFILE_PANEL, {
        section: W.nc_.PROFILE_CUSTOMIZATION,
    });
}

function ee(e) {
    var t, l;
    let { className: a, user: o } = e,
        c = i.useRef(null),
        p = (0, C.Jz)(),
        m = (0, I.g)(),
        g = (0, x.EC)(),
        A = null != (t = null == g || null == (l = g.nick) ? void 0 : l[0]) ? t : null,
        [f, h] = i.useState(!1);
    i.useEffect(() => {
        h(null != c.current && c.current.scrollWidth > c.current.clientWidth);
    }, [o.username]);
    let b = !o.isClaimed(),
        E = (p && !o.hasUniqueUsername() && !o.hasVerifiedEmailOrPhone()) || b,
        O = E ? Z.intl.string(Z.t["7Ngnyr"]) : void 0;
    return (0, r.jsxs)("div", {
        className: s()(X.ZZ, a),
        children: [
            (0, r.jsx)("div", {
                className: X.NQ,
                children: (0, r.jsxs)("div", {
                    className: X.Fj,
                    children: [
                        (0, r.jsx)(_.Text, {
                            variant: "text-md/medium",
                            className: X.p9,
                            children: Z.intl.string(Z.t.qqhR3L),
                        }),
                        (0, r.jsxs)("div", {
                            className: X.HR,
                            ref: c,
                            children: [
                                (0, r.jsx)(_.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: o.username,
                                }),
                                !o.hasUniqueUsername() &&
                                    (0, r.jsxs)(_.Text, {
                                        tag: "span",
                                        color: "text-default",
                                        variant: "text-md/normal",
                                        children: ["#", o.discriminator],
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
            m &&
                (0, r.jsx)("div", {
                    className: X.d6,
                    children: (0, r.jsx)(u.m, {
                        text: Z.intl.string(Z.t.HHC5Z4),
                        children: (0, r.jsx)(_.EpV, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: d.A.colors.STATUS_WARNING.css,
                        }),
                    }),
                }),
            null != A &&
                (0, r.jsx)("div", {
                    className: X.d6,
                    children: (0, r.jsx)(u.m, {
                        __unsupportedReactNodeAsText: A,
                        "aria-label": !1,
                        children: (0, r.jsx)(_.EpV, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: d.A.colors.STATUS_WARNING.css,
                        }),
                    }),
                }),
            (0, r.jsx)(u.m, {
                text: O,
                children: (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: X.pr,
                    children: (0, r.jsx)(_.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: f ? Z.intl.string(Z.t["16kTw/"]) : Z.intl.string(Z.t.bt75uw),
                        disabled: E,
                        "aria-label": Z.intl.string(Z.t.JECa91),
                        onClick: () =>
                            (0, _.mMO)(async () => {
                                if (m) {
                                    let { default: e } = await n.e("54160").then(n.bind(n, 914131));
                                    return (t) =>
                                        (0, r.jsx)(
                                            e,
                                            q(
                                                {
                                                    source: K.gg.USER_SETTINGS_EDIT,
                                                },
                                                t,
                                            ),
                                        );
                                }
                                {
                                    let { default: e } = await n.e("27533").then(n.bind(n, 993468));
                                    return (t) => (0, r.jsx)(e, q({}, t));
                                }
                            }),
                    }),
                }),
            }),
        ],
    });
}

function et(e) {
    var t, n;
    let { user: l, className: a } = e,
        o = (0, x.EC)(),
        c = null != (t = null == o || null == (n = o.nick) ? void 0 : n[0]) ? t : null,
        p = U.Ay.getGlobalName(l),
        m = i.useRef(null),
        [g, A] = i.useState(!1);
    return (
        i.useEffect(() => {
            A(null != m.current && m.current.scrollWidth > m.current.clientWidth);
        }, [p]),
        (0, r.jsxs)("div", {
            className: s()(X.ZZ, a),
            children: [
                (0, r.jsx)("div", {
                    className: X.NQ,
                    children: (0, r.jsxs)("div", {
                        className: X.Fj,
                        children: [
                            (0, r.jsx)(_.Text, {
                                variant: "text-md/medium",
                                className: X.p9,
                                children: Z.intl.string(Z.t["9AjdkD"]),
                            }),
                            (0, r.jsx)("div", {
                                className: X.HR,
                                ref: m,
                                children: (0, r.jsx)(_.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: null == p ? Z.intl.string(Z.t.ep5kjK) : p,
                                }),
                            }),
                        ],
                    }),
                }),
                null != c &&
                    (0, r.jsx)("div", {
                        className: X.d6,
                        children: (0, r.jsx)(u.m, {
                            __unsupportedReactNodeAsText: c,
                            "aria-label": !1,
                            children: (0, r.jsx)(_.EpV, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: d.A.colors.STATUS_WARNING.css,
                            }),
                        }),
                    }),
                (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: X.pr,
                    children: (0, r.jsx)(_.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: g ? Z.intl.string(Z.t["16kTw/"]) : Z.intl.string(Z.t.bt75uw),
                        "aria-label": Z.intl.string(Z.t.YXeWYM),
                        onClick: $,
                    }),
                }),
            ],
        })
    );
}

function en(e) {
    let { text: t, censor: n, revealLabel: l, hideLabel: s } = e,
        [a, o] = i.useState(!1),
        c = a ? t : n(t);
    return (0, r.jsxs)("div", {
        className: X.c1,
        children: [
            c,
            (0, r.jsx)(_.QWc, {
                variant: "primary",
                textVariant: "text-sm/medium",
                "aria-label": a ? s : l,
                onClick: () => o(!a),
                text: a ? Z.intl.string(Z.t.fgq1gs) : Z.intl.string(Z.t.dcztdU),
            }),
        ],
    });
}

function er(e) {
    let t,
        { className: i, user: l } = e;
    if (l.isClaimed())
        if (null == l.email)
            t = {
                buttonText: Z.intl.string(Z.t.OYkgVk),
                buttonAriaLabel: Z.intl.string(Z.t["pvBD+W"]),
                valueMessage: Z.intl.string(Z.t["8SfTN/"]),
                handleClick: () =>
                    (0, _.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("83269"), n.e("14551")]).then(n.bind(n, 350116));
                        return (t) => (0, r.jsx)(e, q({}, t));
                    }),
            };
        else {
            let { email: e } = l;
            t = {
                buttonText: Z.intl.string(Z.t.bt75uw),
                buttonAriaLabel: Z.intl.string(Z.t["8peUT0"]),
                valueMessage: (0, r.jsx)(en, {
                    text: e,
                    censor: B.B,
                    revealLabel: Z.intl.string(Z.t["Zvx+yV"]),
                    hideLabel: Z.intl.string(Z.t.nqTD4d),
                }),
                handleClick: () =>
                    (0, _.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("83269"), n.e("14551")]).then(n.bind(n, 350116));
                        return (t) => (0, r.jsx)(e, q({}, t));
                    }),
            };
        }
    else
        t = {
            buttonText: Z.intl.string(Z.t.BleMPB),
            buttonAriaLabel: Z.intl.string(Z.t.BleMPB),
            valueMessage: Z.intl.string(Z.t.qxk9zo),
            handleClick: () => h.A.openClaimAccountModal(),
        };
    return (0, r.jsxs)("div", {
        className: s()(X.ZZ, i),
        children: [
            (0, r.jsx)("div", {
                className: X.NQ,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(_.Text, {
                            variant: "text-md/medium",
                            className: X.p9,
                            children: Z.intl.string(Z.t.tlZllC),
                        }),
                        (0, r.jsx)("div", {
                            children: (0, r.jsx)(_.Text, {
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
                className: X.pr,
                children: (0, r.jsx)(_.Button, {
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

function ei(e) {
    let t,
        { className: i, user: l } = e;
    if (!l.isClaimed()) return null;
    let { phone: a, email: o } = l,
        c = null != a;
    return (
        (t = c
            ? (0, r.jsx)(en, {
                  text: a,
                  censor: B.D,
                  revealLabel: Z.intl.string(Z.t.eY3xlT),
                  hideLabel: Z.intl.string(Z.t["jllbv+"]),
              })
            : Z.intl.string(Z.t.I5kDqj)),
        (0, r.jsxs)("div", {
            className: s()(X.ZZ, i),
            children: [
                (0, r.jsx)("div", {
                    className: X.NQ,
                    children: (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(_.Text, {
                                variant: "text-md/medium",
                                className: X.p9,
                                children: Z.intl.string(Z.t.kerONq),
                            }),
                            (0, r.jsx)("div", {
                                children: (0, r.jsx)(_.Text, {
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
                    className: X.PU,
                    children: [
                        c && null != o
                            ? (0, r.jsx)("div", {
                                  className: s()(X.pr, X.DT),
                                  children: (0, r.jsx)(_.QWc, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: Z.intl.string(Z.t.N86XcP),
                                      "aria-label": Z.intl.string(Z.t.Rpn4A3),
                                      onClick: function () {
                                          (0, _.qfG)((e) =>
                                              (0, r.jsx)(
                                                  D.default,
                                                  J(q({}, e), {
                                                      title: Z.intl.string(Z.t["3CTiKi"]),
                                                      children: l.hasFlag(W.nhx.MFA_SMS)
                                                          ? Z.intl.string(Z.t.jrhJyo)
                                                          : void 0,
                                                      actionText: Z.intl.string(Z.t.N86XcP),
                                                      handleSubmit: (e) => O.A.removePhone(e, O.d.USER_SETTINGS_UPDATE),
                                                  }),
                                              ),
                                          );
                                      },
                                  }),
                              })
                            : null,
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: X.pr,
                            children: (0, r.jsx)(_.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: c ? Z.intl.string(Z.t.bt75uw) : Z.intl.string(Z.t.OYkgVk),
                                "aria-label": c ? Z.intl.string(Z.t.YDabSe) : Z.intl.string(Z.t["SfUuE+"]),
                                onClick: function () {
                                    (0, _.mMO)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                                            return (t) =>
                                                (0, r.jsx)(
                                                    e,
                                                    q(
                                                        {
                                                            reason: O.d.USER_SETTINGS_UPDATE,
                                                        },
                                                        t,
                                                    ),
                                                );
                                        },
                                        {
                                            modalKey: z.V,
                                        },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
            ],
        })
    );
}

function el(e) {
    let { user: t } = e,
        n = (0, b.A)({
            id: t.id,
            label: Z.intl.string(Z.t["/AXYnE"]),
        }),
        l = V.Q_.useSetting(),
        s = i.useRef(null);
    return l && M.p5
        ? (0, r.jsx)(_.YNO, {
              targetElementRef: s,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(_.W1t, {
                      "data-menu-migrated": !0,
                      onClose: t,
                      onSelect: void 0,
                      navId: "copy-id",
                      "aria-label": Z.intl.string(Z.t.RANhlE),
                      children: n,
                  });
              },
              children: (e) =>
                  (0, r.jsx)(
                      _.DUT,
                      J(q({}, e), {
                          innerRef: s,
                          className: X.SI,
                          "aria-label": Z.intl.string(Z.t.DEoVWZ),
                          children: (0, r.jsx)(_.jNK, {
                              size: "md",
                              color: "currentColor",
                              className: X.D$,
                          }),
                      }),
                  ),
          })
        : null;
}

function es(e) {
    let { className: t } = e,
        n = (0, f.b8)(),
        l = (0, f.yM)(),
        a = !n || l,
        o = (0, A.W)(Z.intl.string(Z.t.KPGVWl), Z.intl.string(Z.t["9KiIz6"])),
        c = (0, A.W)(Z.intl.string(Z.t.yNGjyK), Z.intl.string(Z.t.DVywUB)),
        d = (0, A.W)(Z.intl.string(Z.t.UX0Ode), Z.intl.string(Z.t.lKDPGA)),
        u = i.useMemo(() => (n ? (l ? Z.intl.string(Z.t.sK0dmH) : Z.intl.string(Z.t.XxRj7f)) : d), [n, l, d]);
    return (0, r.jsxs)("div", {
        className: s()(X.ZZ, t),
        children: [
            (0, r.jsx)("div", {
                className: X.NQ,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(_.Text, {
                            variant: "text-md/medium",
                            className: X.p9,
                            children: Z.intl.string(Z.t["/52UYy"]),
                        }),
                        (0, r.jsx)("div", {
                            children: (0, r.jsx)(_.Text, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: u,
                            }),
                        }),
                    ],
                }),
            }),
            a &&
                (0, r.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: X.pr,
                    children: (0, r.jsx)(_.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: l ? o : c,
                        "aria-label": l ? o : c,
                        onClick: () =>
                            m.A.showAgeVerificationGetStartedModal({
                                entryPoint: g.q1.ACCOUNT_AGE_GROUP,
                            }),
                    }),
                }),
        ],
    });
}

function ea() {
    var e;
    let t = (0, c.bG)([L.default], () => {
            let e = L.default.getCurrentUser();
            return o()(null != e, "UserSettingsAccountProfileCard: currentUser cannot be undefined"), e;
        }),
        n = (0, N.Ay)(t.id),
        i = (0, v.A)(n),
        l = V.jP.useSetting(),
        s = (0, c.bG)([w.A], () => w.A.getErrors()),
        a = null == s || null == (e = s.avatar) ? void 0 : e[0],
        { avatarSrc: d, avatarDecorationSrc: u } = (0, y.A)({
            userId: null == t ? void 0 : t.id,
            size: _._3J.SIZE_80,
        }),
        m = (0, j.A)(),
        g = (0, T.fk)(),
        A = (0, k.j)("UserSettingsAccountProfileCard");
    return (0, r.jsxs)("div", {
        className: X.DM,
        children: [
            (0, r.jsx)(R.o, {
                user: t,
                displayProfile: n,
                avatarSize: _._3J.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: m ? 696 : 660,
                bannerHeight: 100,
                themePadding: 0,
            }),
            (0, r.jsxs)("div", {
                className: X.eF,
                children: [
                    (0, r.jsx)(Q, {
                        className: X.my,
                        src: d,
                        avatarDecoration: u,
                        status: l,
                        size: _._3J.SIZE_80,
                        "aria-label": t.username,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: X.Ib,
                                children: [
                                    (0, r.jsx)(p.A, {
                                        user: t,
                                        className: X.a1,
                                        discriminatorClass: X.D2,
                                        displayNameStylesType: E.G.STATIC,
                                    }),
                                    (0, r.jsx)(el, {
                                        user: t,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(P.A, {
                                badges: i,
                                className: X.C_,
                                badgeClassName: X.qS,
                            }),
                        ],
                    }),
                    (0, r.jsx)(_.Button, {
                        variant: "primary",
                        size: "sm",
                        text: Z.intl.string(Z.t["2p2aYz"]),
                        onClick: $,
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: X.Tp,
                children: [
                    null != a
                        ? (0, r.jsx)(_.Text, {
                              className: X.mx,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: a,
                          })
                        : null,
                    (0, r.jsxs)("div", {
                        className: X.FL,
                        children: [
                            (0, r.jsx)(S.x, {
                                setting: Y.H.ACCOUNT_DISPLAY_NAME,
                                children: (0, r.jsx)(et, {
                                    className: X.mS,
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(S.x, {
                                setting: Y.H.ACCOUNT_USERNAME,
                                children: (0, r.jsx)(ee, {
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(S.x, {
                                setting: Y.H.ACCOUNT_EMAIL,
                                children: (0, r.jsx)(er, {
                                    className: X.Zr,
                                    user: t,
                                }),
                            }),
                            (0, r.jsx)(S.x, {
                                setting: Y.H.ACCOUNT_PHONE_NUMBER,
                                children: (0, r.jsx)(ei, {
                                    className: X.Zr,
                                    user: t,
                                }),
                            }),
                            (g || A) &&
                                (0, r.jsx)(S.x, {
                                    setting: Y.H.ACCOUNT_AGE_GROUP,
                                    children: (0, r.jsx)(es, {
                                        className: X.Zr,
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
