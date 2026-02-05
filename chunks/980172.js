n.d(t, { A: () => er });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(284009),
    o = n.n(l),
    c = n(311907),
    d = n(827734),
    u = n(990078),
    _ = n(397927),
    m = n(297413),
    A = n(935649),
    g = n(847599),
    E = n(870383),
    h = n(36149),
    p = n(521933),
    C = n(50268),
    x = n(922301),
    T = n(81400),
    I = n(557722),
    S = n(951122),
    f = n(772786),
    N = n(207560),
    b = n(195043),
    R = n(790114),
    v = n(836602),
    O = n(262),
    j = n(950191),
    P = n(854627),
    y = n(542535),
    L = n(915614),
    D = n(662758),
    M = n(287809),
    G = n(957565),
    U = n(427262),
    k = n(837921),
    B = n(64313),
    w = n(253932),
    H = n(780964),
    V = n(192501),
    F = n(840065),
    Y = n(531525),
    W = n(652215),
    z = n(53516),
    K = n(789622),
    Z = n(985018),
    X = n(240342);
let q = k.Ay.getEnableHardwareAcceleration() ? _.JsQ : _.euF;
function J() {
    (0, F.openUserSettings)(H.X.PROFILE_PANEL, { section: W.nc_.PROFILE_CUSTOMIZATION });
}
function Q(e) {
    let { className: t, user: r } = e,
        l = s.useRef(null),
        o = (0, S.Jz)(),
        c = (0, f.g)(),
        m = (0, T.EC)(),
        A = m?.nick?.[0] ?? null,
        [g, E] = s.useState(!1);
    s.useEffect(() => {
        E(null != l.current && l.current.scrollWidth > l.current.clientWidth);
    }, [r.username]);
    let h = !r.isClaimed(),
        p = (o && !r.hasUniqueUsername() && !r.hasVerifiedEmailOrPhone()) || h,
        C = p ? Z.intl.string(Z.t["7Ngnyr"]) : void 0;
    return (0, i.jsxs)("div", {
        className: a()(X.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: X.NQ,
                children: (0, i.jsxs)("div", {
                    className: X.Fj,
                    children: [
                        (0, i.jsx)(_.Text, {
                            variant: "text-md/medium",
                            className: X.p9,
                            children: Z.intl.string(Z.t.qqhR3L),
                        }),
                        (0, i.jsxs)("div", {
                            className: X.HR,
                            ref: l,
                            children: [
                                (0, i.jsx)(_.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: r.username,
                                }),
                                !r.hasUniqueUsername() &&
                                    (0, i.jsxs)(_.Text, {
                                        tag: "span",
                                        color: "text-default",
                                        variant: "text-md/normal",
                                        children: ["#", r.discriminator],
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
            c &&
                (0, i.jsx)("div", {
                    className: X.d6,
                    children: (0, i.jsx)(u.m, {
                        text: Z.intl.string(Z.t.HHC5Z4),
                        children: (0, i.jsx)(_.EpV, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: d.A.colors.STATUS_WARNING.css,
                        }),
                    }),
                }),
            null != A &&
                (0, i.jsx)("div", {
                    className: X.d6,
                    children: (0, i.jsx)(u.m, {
                        __unsupportedReactNodeAsText: A,
                        "aria-label": !1,
                        children: (0, i.jsx)(_.EpV, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: d.A.colors.STATUS_WARNING.css,
                        }),
                    }),
                }),
            (0, i.jsx)(u.m, {
                text: C,
                children: (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: X.pr,
                    children: (0, i.jsx)(_.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: g ? Z.intl.string(Z.t["16kTw/"]) : Z.intl.string(Z.t.bt75uw),
                        disabled: p,
                        "aria-label": Z.intl.string(Z.t.JECa91),
                        onClick: () =>
                            (0, _.mMO)(async () => {
                                if (c) {
                                    let { default: e } = await n.e("54160").then(n.bind(n, 914131));
                                    return (t) => (0, i.jsx)(e, { source: K.gg.USER_SETTINGS_EDIT, ...t });
                                }
                                {
                                    let { default: e } = await n.e("27533").then(n.bind(n, 993468));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                }
                            }),
                    }),
                }),
            }),
        ],
    });
}
function $(e) {
    let { user: t, className: n } = e,
        r = (0, T.EC)(),
        l = r?.nick?.[0] ?? null,
        o = U.Ay.getGlobalName(t),
        c = s.useRef(null),
        [m, A] = s.useState(!1);
    return (
        s.useEffect(() => {
            A(null != c.current && c.current.scrollWidth > c.current.clientWidth);
        }, [o]),
        (0, i.jsxs)("div", {
            className: a()(X.ZZ, n),
            children: [
                (0, i.jsx)("div", {
                    className: X.NQ,
                    children: (0, i.jsxs)("div", {
                        className: X.Fj,
                        children: [
                            (0, i.jsx)(_.Text, {
                                variant: "text-md/medium",
                                className: X.p9,
                                children: Z.intl.string(Z.t["9AjdkD"]),
                            }),
                            (0, i.jsx)("div", {
                                className: X.HR,
                                ref: c,
                                children: (0, i.jsx)(_.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: null == o ? Z.intl.string(Z.t.ep5kjK) : o,
                                }),
                            }),
                        ],
                    }),
                }),
                null != l &&
                    (0, i.jsx)("div", {
                        className: X.d6,
                        children: (0, i.jsx)(u.m, {
                            __unsupportedReactNodeAsText: l,
                            "aria-label": !1,
                            children: (0, i.jsx)(_.EpV, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: d.A.colors.STATUS_WARNING.css,
                            }),
                        }),
                    }),
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: X.pr,
                    children: (0, i.jsx)(_.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: m ? Z.intl.string(Z.t["16kTw/"]) : Z.intl.string(Z.t.bt75uw),
                        "aria-label": Z.intl.string(Z.t.YXeWYM),
                        onClick: J,
                    }),
                }),
            ],
        })
    );
}
function ee(e) {
    let { text: t, censor: n, revealLabel: r, hideLabel: a } = e,
        [l, o] = s.useState(!1),
        c = l ? t : n(t);
    return (0, i.jsxs)("div", {
        className: X.c1,
        children: [
            c,
            (0, i.jsx)(_.QWc, {
                variant: "primary",
                textVariant: "text-sm/medium",
                "aria-label": l ? a : r,
                onClick: () => o(!l),
                text: l ? Z.intl.string(Z.t.fgq1gs) : Z.intl.string(Z.t.dcztdU),
            }),
        ],
    });
}
function et(e) {
    let t,
        { className: s, user: r } = e;
    if (r.isClaimed())
        if (null == r.email)
            t = {
                buttonText: Z.intl.string(Z.t.OYkgVk),
                buttonAriaLabel: Z.intl.string(Z.t["pvBD+W"]),
                valueMessage: Z.intl.string(Z.t["8SfTN/"]),
                handleClick: () =>
                    (0, _.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("83269"), n.e("14551")]).then(n.bind(n, 350116));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
            };
        else {
            let { email: e } = r;
            t = {
                buttonText: Z.intl.string(Z.t.bt75uw),
                buttonAriaLabel: Z.intl.string(Z.t["8peUT0"]),
                valueMessage: (0, i.jsx)(ee, {
                    text: e,
                    censor: V.B,
                    revealLabel: Z.intl.string(Z.t["Zvx+yV"]),
                    hideLabel: Z.intl.string(Z.t.nqTD4d),
                }),
                handleClick: () =>
                    (0, _.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("83269"), n.e("14551")]).then(n.bind(n, 350116));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
            };
        }
    else
        t = {
            buttonText: Z.intl.string(Z.t.BleMPB),
            buttonAriaLabel: Z.intl.string(Z.t.BleMPB),
            valueMessage: Z.intl.string(Z.t.qxk9zo),
            handleClick: () => p.A.openClaimAccountModal(),
        };
    return (0, i.jsxs)("div", {
        className: a()(X.ZZ, s),
        children: [
            (0, i.jsx)("div", {
                className: X.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(_.Text, {
                            variant: "text-md/medium",
                            className: X.p9,
                            children: Z.intl.string(Z.t.tlZllC),
                        }),
                        (0, i.jsx)("div", {
                            children: (0, i.jsx)(_.Text, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: t.valueMessage,
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: X.pr,
                children: (0, i.jsx)(_.Button, {
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
function en(e) {
    let t,
        { className: s, user: r } = e;
    if (!r.isClaimed()) return null;
    let { phone: l, email: o } = r,
        c = null != l;
    return (
        (t = c
            ? (0, i.jsx)(ee, {
                  text: l,
                  censor: V.D,
                  revealLabel: Z.intl.string(Z.t.eY3xlT),
                  hideLabel: Z.intl.string(Z.t["jllbv+"]),
              })
            : Z.intl.string(Z.t.I5kDqj)),
        (0, i.jsxs)("div", {
            className: a()(X.ZZ, s),
            children: [
                (0, i.jsx)("div", {
                    className: X.NQ,
                    children: (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(_.Text, {
                                variant: "text-md/medium",
                                className: X.p9,
                                children: Z.intl.string(Z.t.kerONq),
                            }),
                            (0, i.jsx)("div", {
                                children: (0, i.jsx)(_.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: t,
                                }),
                            }),
                        ],
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: X.PU,
                    children: [
                        c && null != o
                            ? (0, i.jsx)("div", {
                                  className: a()(X.pr, X.DT),
                                  children: (0, i.jsx)(_.QWc, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: Z.intl.string(Z.t.N86XcP),
                                      "aria-label": Z.intl.string(Z.t.Rpn4A3),
                                      onClick: function () {
                                          (0, _.qfG)((e) =>
                                              (0, i.jsx)(D.default, {
                                                  ...e,
                                                  title: Z.intl.string(Z.t["3CTiKi"]),
                                                  children: r.hasFlag(W.nhx.MFA_SMS)
                                                      ? Z.intl.string(Z.t.jrhJyo)
                                                      : void 0,
                                                  actionText: Z.intl.string(Z.t.N86XcP),
                                                  handleSubmit: (e) => I.A.removePhone(e, I.d.USER_SETTINGS_UPDATE),
                                              }),
                                          );
                                      },
                                  }),
                              })
                            : null,
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: X.pr,
                            children: (0, i.jsx)(_.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: c ? Z.intl.string(Z.t.bt75uw) : Z.intl.string(Z.t.OYkgVk),
                                "aria-label": c ? Z.intl.string(Z.t.YDabSe) : Z.intl.string(Z.t["SfUuE+"]),
                                onClick: function () {
                                    (0, _.mMO)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                                            return (t) => (0, i.jsx)(e, { reason: I.d.USER_SETTINGS_UPDATE, ...t });
                                        },
                                        { modalKey: z.V },
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
function ei(e) {
    let { user: t } = e,
        n = (0, C.A)({ id: t.id, label: Z.intl.string(Z.t["/AXYnE"]) }),
        r = w.Q_.useSetting(),
        a = s.useRef(null);
    return r && G.p5
        ? (0, i.jsx)(_.YNO, {
              targetElementRef: a,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(_.W1t, {
                      "data-menu-migrated": !0,
                      onClose: t,
                      onSelect: void 0,
                      navId: "copy-id",
                      "aria-label": Z.intl.string(Z.t.RANhlE),
                      children: n,
                  });
              },
              children: (e) =>
                  (0, i.jsx)(_.DUT, {
                      ...e,
                      innerRef: a,
                      className: X.SI,
                      "aria-label": Z.intl.string(Z.t.DEoVWZ),
                      children: (0, i.jsx)(_.jNK, { size: "md", color: "currentColor", className: X.D$ }),
                  }),
          })
        : null;
}
function es(e) {
    let { className: t } = e,
        n = (0, h.b8)(),
        r = (0, h.yM)(),
        l = !n || r,
        o = (0, E.W)(Z.intl.string(Z.t.KPGVWl), Z.intl.string(Z.t["9KiIz6"])),
        c = (0, E.W)(Z.intl.string(Z.t.yNGjyK), Z.intl.string(Z.t.DVywUB)),
        d = (0, E.W)(Z.intl.string(Z.t.UX0Ode), Z.intl.string(Z.t.lKDPGA)),
        u = s.useMemo(() => (n ? (r ? Z.intl.string(Z.t.sK0dmH) : Z.intl.string(Z.t.XxRj7f)) : d), [n, r, d]);
    return (0, i.jsxs)("div", {
        className: a()(X.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: X.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(_.Text, {
                            variant: "text-md/medium",
                            className: X.p9,
                            children: Z.intl.string(Z.t["/52UYy"]),
                        }),
                        (0, i.jsx)("div", {
                            children: (0, i.jsx)(_.Text, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: u,
                            }),
                        }),
                    ],
                }),
            }),
            l &&
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: X.pr,
                    children: (0, i.jsx)(_.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: r ? o : c,
                        "aria-label": r ? o : c,
                        onClick: () => A.A.showAgeVerificationGetStartedModal({ entryPoint: g.q1.ACCOUNT_AGE_GROUP }),
                    }),
                }),
        ],
    });
}
function er() {
    let e = (0, c.bG)([M.default], () => {
            let e = M.default.getCurrentUser();
            return o()(null != e, "UserSettingsAccountProfileCard: currentUser cannot be undefined"), e;
        }),
        t = (0, j.Ay)(e.id),
        n = (0, O.A)(t),
        s = w.jP.useSetting(),
        r = (0, c.bG)([v.A], () => v.A.getErrors()),
        a = r?.avatar?.[0],
        { avatarSrc: l, avatarDecorationSrc: d } = (0, P.A)({ userId: e?.id, size: _._3J.SIZE_80 }),
        u = (0, R.A)(),
        A = (0, N.fk)(),
        g = (0, B.j)("UserSettingsAccountProfileCard");
    return (0, i.jsxs)("div", {
        className: X.DM,
        children: [
            (0, i.jsx)(L.o, {
                user: e,
                displayProfile: t,
                avatarSize: _._3J.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: u ? 696 : 660,
                bannerHeight: 100,
                themePadding: 0,
            }),
            (0, i.jsxs)("div", {
                className: X.eF,
                children: [
                    (0, i.jsx)(q, {
                        className: X.my,
                        src: l,
                        avatarDecoration: d,
                        status: s,
                        size: _._3J.SIZE_80,
                        "aria-label": e.username,
                    }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)("div", {
                                className: X.Ib,
                                children: [
                                    (0, i.jsx)(m.A, {
                                        user: e,
                                        className: X.a1,
                                        discriminatorClass: X.D2,
                                        displayNameStylesType: x.G.STATIC,
                                    }),
                                    (0, i.jsx)(ei, { user: e }),
                                ],
                            }),
                            (0, i.jsx)(y.A, { badges: n, className: X.C_, badgeClassName: X.qS }),
                        ],
                    }),
                    (0, i.jsx)(_.Button, {
                        variant: "primary",
                        size: "sm",
                        text: Z.intl.string(Z.t["2p2aYz"]),
                        onClick: J,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: X.Tp,
                children: [
                    null != a
                        ? (0, i.jsx)(_.Text, {
                              className: X.mx,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: a,
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: X.FL,
                        children: [
                            (0, i.jsx)(b.x, {
                                setting: Y.H.ACCOUNT_DISPLAY_NAME,
                                children: (0, i.jsx)($, { className: X.mS, user: e }),
                            }),
                            (0, i.jsx)(b.x, { setting: Y.H.ACCOUNT_USERNAME, children: (0, i.jsx)(Q, { user: e }) }),
                            (0, i.jsx)(b.x, {
                                setting: Y.H.ACCOUNT_EMAIL,
                                children: (0, i.jsx)(et, { className: X.Zr, user: e }),
                            }),
                            (0, i.jsx)(b.x, {
                                setting: Y.H.ACCOUNT_PHONE_NUMBER,
                                children: (0, i.jsx)(en, { className: X.Zr, user: e }),
                            }),
                            (A || g) &&
                                (0, i.jsx)(b.x, {
                                    setting: Y.H.ACCOUNT_AGE_GROUP,
                                    children: (0, i.jsx)(es, { className: X.Zr }),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
