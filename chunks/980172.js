n.d(t, { A: () => ea });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(284009),
    o = n.n(r),
    c = n(311907),
    d = n(827734),
    u = n(990078),
    _ = n(397927),
    m = n(297413),
    A = n(935649),
    g = n(847599),
    h = n(870383),
    x = n(36149),
    p = n(521933),
    E = n(50268),
    C = n(922301),
    T = n(81400),
    S = n(557722),
    I = n(951122),
    f = n(772786),
    N = n(207560),
    b = n(195043),
    j = n(790114),
    v = n(836602),
    O = n(262),
    R = n(950191),
    y = n(854627),
    P = n(542535),
    L = n(915614),
    D = n(662758),
    M = n(287809),
    G = n(957565),
    U = n(427262),
    k = n(837921),
    V = n(64313),
    H = n(253932),
    w = n(780964),
    B = n(192501),
    Y = n(840065),
    F = n(531525),
    z = n(652215),
    W = n(53516),
    K = n(789622),
    Z = n(985018),
    q = n(72936);
let X = k.Ay.getEnableHardwareAcceleration() ? _.JsQ : _.euF;
function J() {
    (0, Y.openUserSettings)(w.X.PROFILE_PANEL, { section: z.nc_.PROFILE_CUSTOMIZATION });
}
function Q(e) {
    let { className: t, user: a } = e,
        r = s.useRef(null),
        o = (0, I.Jz)(),
        c = (0, f.g)(),
        m = (0, T.EC)(),
        A = m?.nick?.[0] ?? null,
        [g, h] = s.useState(!1);
    s.useEffect(() => {
        h(null != r.current && r.current.scrollWidth > r.current.clientWidth);
    }, [a.username]);
    let x = !a.isClaimed(),
        p = (o && !a.hasUniqueUsername() && !a.hasVerifiedEmailOrPhone()) || x,
        E = p ? Z.intl.string(Z.t["7Ngnyr"]) : void 0;
    return (0, i.jsxs)("div", {
        className: l()(q.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: q.NQ,
                children: (0, i.jsxs)("div", {
                    className: q.Fj,
                    children: [
                        (0, i.jsx)(_.Text, {
                            variant: "text-md/medium",
                            className: q.p9,
                            children: Z.intl.string(Z.t.qqhR3L),
                        }),
                        (0, i.jsxs)("div", {
                            className: q.HR,
                            ref: r,
                            children: [
                                (0, i.jsx)(_.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: a.username,
                                }),
                                !a.hasUniqueUsername() &&
                                    (0, i.jsxs)(_.Text, {
                                        tag: "span",
                                        color: "text-default",
                                        variant: "text-md/normal",
                                        children: ["#", a.discriminator],
                                    }),
                            ],
                        }),
                    ],
                }),
            }),
            c &&
                (0, i.jsx)("div", {
                    className: q.d6,
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
                    className: q.d6,
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
                text: E,
                children: (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: q.pr,
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
        a = (0, T.EC)(),
        r = a?.nick?.[0] ?? null,
        o = U.Ay.getGlobalName(t),
        c = s.useRef(null),
        [m, A] = s.useState(!1);
    return (
        s.useEffect(() => {
            A(null != c.current && c.current.scrollWidth > c.current.clientWidth);
        }, [o]),
        (0, i.jsxs)("div", {
            className: l()(q.ZZ, n),
            children: [
                (0, i.jsx)("div", {
                    className: q.NQ,
                    children: (0, i.jsxs)("div", {
                        className: q.Fj,
                        children: [
                            (0, i.jsx)(_.Text, {
                                variant: "text-md/medium",
                                className: q.p9,
                                children: Z.intl.string(Z.t["9AjdkD"]),
                            }),
                            (0, i.jsx)("div", {
                                className: q.HR,
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
                null != r &&
                    (0, i.jsx)("div", {
                        className: q.d6,
                        children: (0, i.jsx)(u.m, {
                            __unsupportedReactNodeAsText: r,
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
                    className: q.pr,
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
    let { text: t, censor: n, revealLabel: a, hideLabel: l } = e,
        [r, o] = s.useState(!1),
        c = r ? t : n(t);
    return (0, i.jsxs)("div", {
        className: q.c1,
        children: [
            c,
            (0, i.jsx)(_.QWc, {
                variant: "primary",
                textVariant: "text-sm/medium",
                "aria-label": r ? l : a,
                onClick: () => o(!r),
                text: r ? Z.intl.string(Z.t.fgq1gs) : Z.intl.string(Z.t.dcztdU),
            }),
        ],
    });
}
function et(e) {
    let t,
        { className: s, user: a } = e;
    if (a.isClaimed())
        if (null == a.email)
            t = {
                buttonText: Z.intl.string(Z.t.OYkgVk),
                buttonAriaLabel: Z.intl.string(Z.t["pvBD+W"]),
                valueMessage: Z.intl.string(Z.t["8SfTN/"]),
                handleClick: () =>
                    (0, _.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("83269"), n.e("5689")]).then(n.bind(n, 350116));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
            };
        else {
            let { email: e } = a;
            t = {
                buttonText: Z.intl.string(Z.t.bt75uw),
                buttonAriaLabel: Z.intl.string(Z.t["8peUT0"]),
                valueMessage: (0, i.jsx)(ee, {
                    text: e,
                    censor: B.B,
                    revealLabel: Z.intl.string(Z.t["Zvx+yV"]),
                    hideLabel: Z.intl.string(Z.t.nqTD4d),
                }),
                handleClick: () =>
                    (0, _.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("83269"), n.e("5689")]).then(n.bind(n, 350116));
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
        className: l()(q.ZZ, s),
        children: [
            (0, i.jsx)("div", {
                className: q.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(_.Text, {
                            variant: "text-md/medium",
                            className: q.p9,
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
                className: q.pr,
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
        { className: s, user: a } = e;
    if (!a.isClaimed()) return null;
    let { phone: r, email: o } = a,
        c = null != r;
    return (
        (t = c
            ? (0, i.jsx)(ee, {
                  text: r,
                  censor: B.D,
                  revealLabel: Z.intl.string(Z.t.eY3xlT),
                  hideLabel: Z.intl.string(Z.t["jllbv+"]),
              })
            : Z.intl.string(Z.t.I5kDqj)),
        (0, i.jsxs)("div", {
            className: l()(q.ZZ, s),
            children: [
                (0, i.jsx)("div", {
                    className: q.NQ,
                    children: (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(_.Text, {
                                variant: "text-md/medium",
                                className: q.p9,
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
                    className: q.PU,
                    children: [
                        c && null != o
                            ? (0, i.jsx)("div", {
                                  className: l()(q.pr, q.DT),
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
                                                  children: a.hasFlag(z.nhx.MFA_SMS)
                                                      ? Z.intl.string(Z.t.jrhJyo)
                                                      : void 0,
                                                  actionText: Z.intl.string(Z.t.N86XcP),
                                                  handleSubmit: (e) => S.A.removePhone(e, S.d.USER_SETTINGS_UPDATE),
                                              }),
                                          );
                                      },
                                  }),
                              })
                            : null,
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: q.pr,
                            children: (0, i.jsx)(_.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: c ? Z.intl.string(Z.t.bt75uw) : Z.intl.string(Z.t.OYkgVk),
                                "aria-label": c ? Z.intl.string(Z.t.YDabSe) : Z.intl.string(Z.t["SfUuE+"]),
                                onClick: function () {
                                    (0, _.mMO)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                                            return (t) => (0, i.jsx)(e, { reason: S.d.USER_SETTINGS_UPDATE, ...t });
                                        },
                                        { modalKey: W.V },
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
        n = (0, E.A)({ id: t.id, label: Z.intl.string(Z.t["/AXYnE"]) }),
        a = H.Q_.useSetting(),
        l = s.useRef(null);
    return a && G.p5
        ? (0, i.jsx)(_.YNO, {
              targetElementRef: l,
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
                      innerRef: l,
                      className: q.SI,
                      "aria-label": Z.intl.string(Z.t.DEoVWZ),
                      children: (0, i.jsx)(_.jNK, { size: "md", color: "currentColor", className: q.D$ }),
                  }),
          })
        : null;
}
function es(e) {
    let { className: t } = e,
        n = (0, x.b8)(),
        a = (0, x.yM)(),
        r = !n || a,
        o = (0, h.W)(Z.intl.string(Z.t.KPGVWl), Z.intl.string(Z.t["9KiIz6"])),
        c = (0, h.W)(Z.intl.string(Z.t.yNGjyK), Z.intl.string(Z.t.DVywUB)),
        d = (0, h.W)(Z.intl.string(Z.t.UX0Ode), Z.intl.string(Z.t.lKDPGA)),
        u = s.useMemo(() => (n ? (a ? Z.intl.string(Z.t.sK0dmH) : Z.intl.string(Z.t.XxRj7f)) : d), [n, a, d]);
    return (0, i.jsxs)("div", {
        className: l()(q.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: q.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(_.Text, {
                            variant: "text-md/medium",
                            className: q.p9,
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
            r &&
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: q.pr,
                    children: (0, i.jsx)(_.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: a ? o : c,
                        "aria-label": a ? o : c,
                        onClick: () => A.A.showAgeVerificationGetStartedModal({ entryPoint: g.q1.ACCOUNT_AGE_GROUP }),
                    }),
                }),
        ],
    });
}
function ea() {
    let e = (0, c.bG)([M.default], () => {
            let e = M.default.getCurrentUser();
            return o()(null != e, "UserSettingsAccountProfileCard: currentUser cannot be undefined"), e;
        }),
        t = (0, R.Ay)(e.id),
        n = (0, O.A)(t),
        s = H.jP.useSetting(),
        a = (0, c.bG)([v.A], () => v.A.getErrors()),
        l = a?.avatar?.[0],
        { avatarSrc: r, avatarDecorationSrc: d } = (0, y.A)({ userId: e?.id, size: _._3J.SIZE_80 }),
        u = (0, j.A)(),
        A = (0, N.fk)(),
        g = (0, V.j)("UserSettingsAccountProfileCard");
    return (0, i.jsxs)("div", {
        className: q.DM,
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
                className: q.eF,
                children: [
                    (0, i.jsx)(X, {
                        className: q.my,
                        src: r,
                        avatarDecoration: d,
                        status: s,
                        size: _._3J.SIZE_80,
                        "aria-label": e.username,
                    }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)("div", {
                                className: q.Ib,
                                children: [
                                    (0, i.jsx)(m.A, {
                                        user: e,
                                        className: q.a1,
                                        discriminatorClass: q.D2,
                                        displayNameStylesType: C.G.STATIC,
                                    }),
                                    (0, i.jsx)(ei, { user: e }),
                                ],
                            }),
                            (0, i.jsx)(P.A, { badges: n, className: q.C_, badgeClassName: q.qS }),
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
                className: q.Tp,
                children: [
                    null != l
                        ? (0, i.jsx)(_.Text, {
                              className: q.mx,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: l,
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: q.FL,
                        children: [
                            (0, i.jsx)(b.x, {
                                setting: F.H.ACCOUNT_DISPLAY_NAME,
                                children: (0, i.jsx)($, { className: q.mS, user: e }),
                            }),
                            (0, i.jsx)(b.x, { setting: F.H.ACCOUNT_USERNAME, children: (0, i.jsx)(Q, { user: e }) }),
                            (0, i.jsx)(b.x, {
                                setting: F.H.ACCOUNT_EMAIL,
                                children: (0, i.jsx)(et, { className: q.Zr, user: e }),
                            }),
                            (0, i.jsx)(b.x, {
                                setting: F.H.ACCOUNT_PHONE_NUMBER,
                                children: (0, i.jsx)(en, { className: q.Zr, user: e }),
                            }),
                            (A || g) &&
                                (0, i.jsx)(b.x, {
                                    setting: F.H.ACCOUNT_AGE_GROUP,
                                    children: (0, i.jsx)(es, { className: q.Zr }),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
