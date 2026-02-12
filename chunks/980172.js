n.d(t, { A: () => $ });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(311907),
    o = n(827734),
    c = n(990078),
    d = n(397927),
    u = n(297413),
    _ = n(935649),
    m = n(847599),
    A = n(870383),
    g = n(36149),
    h = n(521933),
    x = n(50268),
    p = n(922301),
    E = n(81400),
    C = n(557722),
    T = n(207560),
    S = n(195043),
    I = n(790114),
    f = n(836602),
    N = n(262),
    b = n(950191),
    j = n(854627),
    v = n(542535),
    O = n(915614),
    R = n(662758),
    y = n(957565),
    P = n(427262),
    L = n(837921),
    D = n(64313),
    M = n(253932),
    G = n(780964),
    U = n(192501),
    k = n(840065),
    V = n(531525),
    H = n(652215),
    w = n(53516),
    B = n(985018),
    Y = n(240342);
let F = L.Ay.getEnableHardwareAcceleration() ? d.JsQ : d.euF;
function z() {
    (0, k.openUserSettings)(G.X.PROFILE_PANEL, { section: H.nc_.PROFILE_CUSTOMIZATION });
}
function W(e) {
    let { className: t, user: a } = e,
        r = s.useRef(null),
        u = (0, E.EC)(),
        _ = u?.nick?.[0] ?? null,
        [m, A] = s.useState(!1);
    s.useEffect(() => {
        A(null != r.current && r.current.scrollWidth > r.current.clientWidth);
    }, [a.username]);
    let g = !a.isClaimed(),
        h = g ? B.intl.string(B.t["7Ngnyr"]) : void 0;
    return (0, i.jsxs)("div", {
        className: l()(Y.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: Y.NQ,
                children: (0, i.jsxs)("div", {
                    className: Y.Fj,
                    children: [
                        (0, i.jsx)(d.Text, {
                            variant: "text-md/medium",
                            className: Y.p9,
                            children: B.intl.string(B.t.qqhR3L),
                        }),
                        (0, i.jsxs)("div", {
                            className: Y.HR,
                            ref: r,
                            children: [
                                (0, i.jsx)(d.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: a.username,
                                }),
                                !a.hasUniqueUsername() &&
                                    (0, i.jsxs)(d.Text, {
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
            null != _ &&
                (0, i.jsx)("div", {
                    className: Y.a$,
                    children: (0, i.jsx)(c.m, {
                        __unsupportedReactNodeAsText: _,
                        "aria-label": !1,
                        children: (0, i.jsx)(d.EpV, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: o.A.colors.STATUS_WARNING.css,
                        }),
                    }),
                }),
            (0, i.jsx)(c.m, {
                text: h,
                children: (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: Y.pr,
                    children: (0, i.jsx)(d.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: m ? B.intl.string(B.t["16kTw/"]) : B.intl.string(B.t.bt75uw),
                        disabled: g,
                        "aria-label": B.intl.string(B.t.JECa91),
                        onClick: () =>
                            (0, d.mMO)(async () => {
                                let { default: e } = await n.e("27533").then(n.bind(n, 993468));
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                    }),
                }),
            }),
        ],
    });
}
function K(e) {
    let { user: t, className: n } = e,
        a = (0, E.EC)(),
        r = a?.nick?.[0] ?? null,
        u = P.Ay.getGlobalName(t),
        _ = s.useRef(null),
        [m, A] = s.useState(!1);
    return (
        s.useEffect(() => {
            A(null != _.current && _.current.scrollWidth > _.current.clientWidth);
        }, [u]),
        (0, i.jsxs)("div", {
            className: l()(Y.ZZ, n),
            children: [
                (0, i.jsx)("div", {
                    className: Y.NQ,
                    children: (0, i.jsxs)("div", {
                        className: Y.Fj,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: "text-md/medium",
                                className: Y.p9,
                                children: B.intl.string(B.t["9AjdkD"]),
                            }),
                            (0, i.jsx)("div", {
                                className: Y.HR,
                                ref: _,
                                children: (0, i.jsx)(d.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: null == u ? B.intl.string(B.t.ep5kjK) : u,
                                }),
                            }),
                        ],
                    }),
                }),
                null != r &&
                    (0, i.jsx)("div", {
                        className: Y.a$,
                        children: (0, i.jsx)(c.m, {
                            __unsupportedReactNodeAsText: r,
                            "aria-label": !1,
                            children: (0, i.jsx)(d.EpV, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: o.A.colors.STATUS_WARNING.css,
                            }),
                        }),
                    }),
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: Y.pr,
                    children: (0, i.jsx)(d.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: m ? B.intl.string(B.t["16kTw/"]) : B.intl.string(B.t.bt75uw),
                        "aria-label": B.intl.string(B.t.YXeWYM),
                        onClick: z,
                    }),
                }),
            ],
        })
    );
}
function Z(e) {
    let { text: t, censor: n, revealLabel: a, hideLabel: l } = e,
        [r, o] = s.useState(!1),
        c = r ? t : n(t);
    return (0, i.jsxs)("div", {
        className: Y.c1,
        children: [
            c,
            (0, i.jsx)(d.QWc, {
                variant: "primary",
                textVariant: "text-sm/medium",
                "aria-label": r ? l : a,
                onClick: () => o(!r),
                text: r ? B.intl.string(B.t.fgq1gs) : B.intl.string(B.t.dcztdU),
            }),
        ],
    });
}
function q(e) {
    let t,
        { className: s, user: a } = e;
    if (a.isClaimed())
        if (null == a.email)
            t = {
                buttonText: B.intl.string(B.t.OYkgVk),
                buttonAriaLabel: B.intl.string(B.t["pvBD+W"]),
                valueMessage: B.intl.string(B.t["8SfTN/"]),
                handleClick: () =>
                    (0, d.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("83269"), n.e("14551")]).then(n.bind(n, 350116));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
            };
        else {
            let { email: e } = a;
            t = {
                buttonText: B.intl.string(B.t.bt75uw),
                buttonAriaLabel: B.intl.string(B.t["8peUT0"]),
                valueMessage: (0, i.jsx)(Z, {
                    text: e,
                    censor: U.B,
                    revealLabel: B.intl.string(B.t["Zvx+yV"]),
                    hideLabel: B.intl.string(B.t.nqTD4d),
                }),
                handleClick: () =>
                    (0, d.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("83269"), n.e("14551")]).then(n.bind(n, 350116));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
            };
        }
    else
        t = {
            buttonText: B.intl.string(B.t.BleMPB),
            buttonAriaLabel: B.intl.string(B.t.BleMPB),
            valueMessage: B.intl.string(B.t.qxk9zo),
            handleClick: () => h.A.openClaimAccountModal(),
        };
    return (0, i.jsxs)("div", {
        className: l()(Y.ZZ, s),
        children: [
            (0, i.jsx)("div", {
                className: Y.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(d.Text, {
                            variant: "text-md/medium",
                            className: Y.p9,
                            children: B.intl.string(B.t.tlZllC),
                        }),
                        (0, i.jsx)("div", {
                            children: (0, i.jsx)(d.Text, {
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
                className: Y.pr,
                children: (0, i.jsx)(d.Button, {
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
function X(e) {
    let t,
        { className: s, user: a } = e;
    if (!a.isClaimed()) return null;
    let { phone: r, email: o } = a,
        c = null != r;
    return (
        (t = c
            ? (0, i.jsx)(Z, {
                  text: r,
                  censor: U.D,
                  revealLabel: B.intl.string(B.t.eY3xlT),
                  hideLabel: B.intl.string(B.t["jllbv+"]),
              })
            : B.intl.string(B.t.I5kDqj)),
        (0, i.jsxs)("div", {
            className: l()(Y.ZZ, s),
            children: [
                (0, i.jsx)("div", {
                    className: Y.NQ,
                    children: (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: "text-md/medium",
                                className: Y.p9,
                                children: B.intl.string(B.t.kerONq),
                            }),
                            (0, i.jsx)("div", {
                                children: (0, i.jsx)(d.Text, {
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
                    className: Y.PU,
                    children: [
                        c && null != o
                            ? (0, i.jsx)("div", {
                                  className: l()(Y.pr, Y.DT),
                                  children: (0, i.jsx)(d.QWc, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: B.intl.string(B.t.N86XcP),
                                      "aria-label": B.intl.string(B.t.Rpn4A3),
                                      onClick: function () {
                                          (0, d.qfG)((e) =>
                                              (0, i.jsx)(R.default, {
                                                  ...e,
                                                  title: B.intl.string(B.t["3CTiKi"]),
                                                  children: a.hasFlag(H.nhx.MFA_SMS)
                                                      ? B.intl.string(B.t.jrhJyo)
                                                      : void 0,
                                                  actionText: B.intl.string(B.t.N86XcP),
                                                  handleSubmit: (e) => C.A.removePhone(e, C.d.USER_SETTINGS_UPDATE),
                                              }),
                                          );
                                      },
                                  }),
                              })
                            : null,
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: Y.pr,
                            children: (0, i.jsx)(d.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: c ? B.intl.string(B.t.bt75uw) : B.intl.string(B.t.OYkgVk),
                                "aria-label": c ? B.intl.string(B.t.YDabSe) : B.intl.string(B.t["SfUuE+"]),
                                onClick: function () {
                                    (0, d.mMO)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                                            return (t) => (0, i.jsx)(e, { reason: C.d.USER_SETTINGS_UPDATE, ...t });
                                        },
                                        { modalKey: w.V },
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
function J(e) {
    let { user: t } = e,
        n = (0, x.A)({ id: t.id, label: B.intl.string(B.t["/AXYnE"]) }),
        a = M.Q_.useSetting(),
        l = s.useRef(null);
    return a && y.p5
        ? (0, i.jsx)(d.YNO, {
              targetElementRef: l,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(d.W1t, {
                      "data-menu-migrated": !0,
                      onClose: t,
                      onSelect: void 0,
                      navId: "copy-id",
                      "aria-label": B.intl.string(B.t.RANhlE),
                      children: n,
                  });
              },
              children: (e) =>
                  (0, i.jsx)(d.DUT, {
                      ...e,
                      innerRef: l,
                      className: Y.SI,
                      "aria-label": B.intl.string(B.t.DEoVWZ),
                      children: (0, i.jsx)(d.jNK, { size: "md", color: "currentColor", className: Y.D$ }),
                  }),
          })
        : null;
}
function Q(e) {
    let { className: t } = e,
        n = (0, g.b8)(),
        a = (0, g.yM)(),
        r = !n || a,
        o = (0, A.W)(B.intl.string(B.t.KPGVWl), B.intl.string(B.t["9KiIz6"])),
        c = (0, A.W)(B.intl.string(B.t.yNGjyK), B.intl.string(B.t.DVywUB)),
        u = (0, A.W)(B.intl.string(B.t.UX0Ode), B.intl.string(B.t.lKDPGA)),
        h = s.useMemo(() => (n ? (a ? B.intl.string(B.t.sK0dmH) : B.intl.string(B.t.XxRj7f)) : u), [n, a, u]);
    return (0, i.jsxs)("div", {
        className: l()(Y.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: Y.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(d.Text, {
                            variant: "text-md/medium",
                            className: Y.p9,
                            children: B.intl.string(B.t["/52UYy"]),
                        }),
                        (0, i.jsx)("div", {
                            children: (0, i.jsx)(d.Text, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: h,
                            }),
                        }),
                    ],
                }),
            }),
            r &&
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: Y.pr,
                    children: (0, i.jsx)(d.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: a ? o : c,
                        "aria-label": a ? o : c,
                        onClick: () => _.A.showAgeVerificationGetStartedModal({ entryPoint: m.q1.ACCOUNT_AGE_GROUP }),
                    }),
                }),
        ],
    });
}
function $(e) {
    let { currentUser: t } = e,
        n = (0, b.Ay)(t.id),
        s = (0, N.A)(n),
        a = M.jP.useSetting(),
        l = (0, r.bG)([f.A], () => f.A.getErrors()),
        o = l?.avatar?.[0],
        { avatarSrc: c, avatarDecorationSrc: _ } = (0, j.A)({ userId: t?.id, size: d._3J.SIZE_80 }),
        m = (0, I.A)(),
        A = (0, T.fk)(),
        g = (0, D.j)("UserSettingsAccountProfileCard");
    return (0, i.jsxs)("div", {
        className: Y.DM,
        children: [
            (0, i.jsx)(O.o, {
                user: t,
                displayProfile: n,
                avatarSize: d._3J.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: m ? 696 : 660,
                bannerHeight: 100,
                themePadding: 0,
            }),
            (0, i.jsxs)("div", {
                className: Y.eF,
                children: [
                    (0, i.jsx)(F, {
                        className: Y.my,
                        src: c,
                        avatarDecoration: _,
                        status: a,
                        size: d._3J.SIZE_80,
                        "aria-label": t.username,
                    }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)("div", {
                                className: Y.Ib,
                                children: [
                                    (0, i.jsx)(u.A, {
                                        user: t,
                                        className: Y.a1,
                                        discriminatorClass: Y.D2,
                                        displayNameStylesType: p.G.STATIC,
                                    }),
                                    (0, i.jsx)(J, { user: t }),
                                ],
                            }),
                            (0, i.jsx)(v.A, { badges: s, className: Y.C_, badgeClassName: Y.qS }),
                        ],
                    }),
                    (0, i.jsx)(d.Button, {
                        variant: "primary",
                        size: "sm",
                        text: B.intl.string(B.t["2p2aYz"]),
                        onClick: z,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: Y.Tp,
                children: [
                    null != o
                        ? (0, i.jsx)(d.Text, {
                              className: Y.mx,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: o,
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: Y.FL,
                        children: [
                            (0, i.jsx)(S.x, {
                                setting: V.H.ACCOUNT_DISPLAY_NAME,
                                children: (0, i.jsx)(K, { className: Y.mS, user: t }),
                            }),
                            (0, i.jsx)(S.x, { setting: V.H.ACCOUNT_USERNAME, children: (0, i.jsx)(W, { user: t }) }),
                            (0, i.jsx)(S.x, {
                                setting: V.H.ACCOUNT_EMAIL,
                                children: (0, i.jsx)(q, { className: Y.Zr, user: t }),
                            }),
                            (0, i.jsx)(S.x, {
                                setting: V.H.ACCOUNT_PHONE_NUMBER,
                                children: (0, i.jsx)(X, { className: Y.Zr, user: t }),
                            }),
                            (A || g) &&
                                (0, i.jsx)(S.x, {
                                    setting: V.H.ACCOUNT_AGE_GROUP,
                                    children: (0, i.jsx)(Q, { className: Y.Zr }),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
