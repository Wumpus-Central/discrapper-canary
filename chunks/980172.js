n.d(t, { A: () => et });
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
    P = n(975571),
    L = n(427262),
    D = n(837921),
    G = n(64313),
    M = n(253932),
    U = n(780964),
    k = n(192501),
    V = n(840065),
    w = n(531525),
    H = n(652215),
    B = n(53516),
    Y = n(985018),
    F = n(949268),
    z = n(72936);
let W = D.Ay.getEnableHardwareAcceleration() ? d.JsQ : d.euF;
function K() {
    (0, V.openUserSettings)(U.X.PROFILE_PANEL, { section: H.nc_.PROFILE_CUSTOMIZATION });
}
function Z(e) {
    let { className: t, user: a } = e,
        r = s.useRef(null),
        u = (0, E.EC)(),
        _ = u?.nick?.[0] ?? null,
        [m, A] = s.useState(!1);
    s.useEffect(() => {
        A(null != r.current && r.current.scrollWidth > r.current.clientWidth);
    }, [a.username]);
    let g = !a.isClaimed(),
        h = g ? Y.intl.string(Y.t["7Ngnyr"]) : void 0;
    return (0, i.jsxs)("div", {
        className: l()(z.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: z.NQ,
                children: (0, i.jsxs)("div", {
                    className: z.Fj,
                    children: [
                        (0, i.jsx)(d.Text, {
                            variant: "text-md/medium",
                            className: z.p9,
                            children: Y.intl.string(Y.t.qqhR3L),
                        }),
                        (0, i.jsxs)("div", {
                            className: z.HR,
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
                    className: z.a$,
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
                    className: z.pr,
                    children: (0, i.jsx)(d.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: m ? Y.intl.string(Y.t["16kTw/"]) : Y.intl.string(Y.t.bt75uw),
                        disabled: g,
                        "aria-label": Y.intl.string(Y.t.JECa91),
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
function q(e) {
    let { user: t, className: n } = e,
        a = (0, E.EC)(),
        r = a?.nick?.[0] ?? null,
        u = L.Ay.getGlobalName(t),
        _ = s.useRef(null),
        [m, A] = s.useState(!1);
    return (
        s.useEffect(() => {
            A(null != _.current && _.current.scrollWidth > _.current.clientWidth);
        }, [u]),
        (0, i.jsxs)("div", {
            className: l()(z.ZZ, n),
            children: [
                (0, i.jsx)("div", {
                    className: z.NQ,
                    children: (0, i.jsxs)("div", {
                        className: z.Fj,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: "text-md/medium",
                                className: z.p9,
                                children: Y.intl.string(Y.t["9AjdkD"]),
                            }),
                            (0, i.jsx)("div", {
                                className: z.HR,
                                ref: _,
                                children: (0, i.jsx)(d.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: null == u ? Y.intl.string(Y.t.ep5kjK) : u,
                                }),
                            }),
                        ],
                    }),
                }),
                null != r &&
                    (0, i.jsx)("div", {
                        className: z.a$,
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
                    className: z.pr,
                    children: (0, i.jsx)(d.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: m ? Y.intl.string(Y.t["16kTw/"]) : Y.intl.string(Y.t.bt75uw),
                        "aria-label": Y.intl.string(Y.t.YXeWYM),
                        onClick: K,
                    }),
                }),
            ],
        })
    );
}
function X(e) {
    let { text: t, censor: n, revealLabel: a, hideLabel: l } = e,
        [r, o] = s.useState(!1),
        c = r ? t : n(t);
    return (0, i.jsxs)("div", {
        className: z.c1,
        children: [
            c,
            (0, i.jsx)(d.QWc, {
                variant: "primary",
                textVariant: "text-sm/medium",
                "aria-label": r ? l : a,
                onClick: () => o(!r),
                text: r ? Y.intl.string(Y.t.fgq1gs) : Y.intl.string(Y.t.dcztdU),
            }),
        ],
    });
}
function Q(e) {
    let t,
        { className: s, user: a } = e;
    if (a.isClaimed())
        if (null == a.email)
            t = {
                buttonText: Y.intl.string(Y.t.OYkgVk),
                buttonAriaLabel: Y.intl.string(Y.t["pvBD+W"]),
                valueMessage: Y.intl.string(Y.t["8SfTN/"]),
                handleClick: () =>
                    (0, d.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("83269"), n.e("5689")]).then(n.bind(n, 350116));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
            };
        else {
            let { email: e } = a;
            t = {
                buttonText: Y.intl.string(Y.t.bt75uw),
                buttonAriaLabel: Y.intl.string(Y.t["8peUT0"]),
                valueMessage: (0, i.jsx)(X, {
                    text: e,
                    censor: k.B,
                    revealLabel: Y.intl.string(Y.t["Zvx+yV"]),
                    hideLabel: Y.intl.string(Y.t.nqTD4d),
                }),
                handleClick: () =>
                    (0, d.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("83269"), n.e("5689")]).then(n.bind(n, 350116));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
            };
        }
    else
        t = {
            buttonText: Y.intl.string(Y.t.BleMPB),
            buttonAriaLabel: Y.intl.string(Y.t.BleMPB),
            valueMessage: Y.intl.string(Y.t.qxk9zo),
            handleClick: () => h.A.openClaimAccountModal(),
        };
    return (0, i.jsxs)("div", {
        className: l()(z.ZZ, s),
        children: [
            (0, i.jsx)("div", {
                className: z.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(d.Text, {
                            variant: "text-md/medium",
                            className: z.p9,
                            children: Y.intl.string(Y.t.tlZllC),
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
                className: z.pr,
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
function J(e) {
    let t,
        { className: s, user: a } = e;
    if (!a.isClaimed()) return null;
    let { phone: r, email: o } = a,
        c = null != r;
    return (
        (t = c
            ? (0, i.jsx)(X, {
                  text: r,
                  censor: k.D,
                  revealLabel: Y.intl.string(Y.t.eY3xlT),
                  hideLabel: Y.intl.string(Y.t["jllbv+"]),
              })
            : Y.intl.string(Y.t.I5kDqj)),
        (0, i.jsxs)("div", {
            className: l()(z.ZZ, s),
            children: [
                (0, i.jsx)("div", {
                    className: z.NQ,
                    children: (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: "text-md/medium",
                                className: z.p9,
                                children: Y.intl.string(Y.t.kerONq),
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
                    className: z.PU,
                    children: [
                        c && null != o
                            ? (0, i.jsx)("div", {
                                  className: l()(z.pr, z.DT),
                                  children: (0, i.jsx)(d.QWc, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: Y.intl.string(Y.t.N86XcP),
                                      "aria-label": Y.intl.string(Y.t.Rpn4A3),
                                      onClick: function () {
                                          (0, d.qfG)((e) =>
                                              (0, i.jsx)(R.default, {
                                                  ...e,
                                                  title: Y.intl.string(Y.t["3CTiKi"]),
                                                  children: a.hasFlag(H.nhx.MFA_SMS)
                                                      ? Y.intl.string(Y.t.jrhJyo)
                                                      : void 0,
                                                  actionText: Y.intl.string(Y.t.N86XcP),
                                                  handleSubmit: (e) => C.A.removePhone(e, C.d.USER_SETTINGS_UPDATE),
                                              }),
                                          );
                                      },
                                  }),
                              })
                            : null,
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: z.pr,
                            children: (0, i.jsx)(d.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: c ? Y.intl.string(Y.t.bt75uw) : Y.intl.string(Y.t.OYkgVk),
                                "aria-label": c ? Y.intl.string(Y.t.YDabSe) : Y.intl.string(Y.t["SfUuE+"]),
                                onClick: function () {
                                    (0, d.mMO)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                                            return (t) => (0, i.jsx)(e, { reason: C.d.USER_SETTINGS_UPDATE, ...t });
                                        },
                                        { modalKey: B.V },
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
function $(e) {
    let { user: t } = e,
        n = (0, x.A)({ id: t.id, label: Y.intl.string(Y.t["/AXYnE"]) }),
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
                      "aria-label": Y.intl.string(Y.t.RANhlE),
                      children: n,
                  });
              },
              children: (e) =>
                  (0, i.jsx)(d.DUT, {
                      ...e,
                      innerRef: l,
                      className: z.SI,
                      "aria-label": Y.intl.string(Y.t.DEoVWZ),
                      children: (0, i.jsx)(d.jNK, { size: "md", color: "currentColor", className: z.D$ }),
                  }),
          })
        : null;
}
function ee(e) {
    let { className: t } = e,
        a = (0, g.b8)(),
        r = (0, g.yM)(),
        o = (0, g.Y2)(),
        c = !a || r,
        u = (0, A.W)(Y.intl.string(Y.t.KPGVWl), Y.intl.string(Y.t["9KiIz6"])),
        h = (0, A.W)(Y.intl.string(Y.t.yNGjyK), Y.intl.string(Y.t.DVywUB)),
        x = (0, A.W)(Y.intl.string(Y.t.UX0Ode), Y.intl.string(Y.t.lKDPGA)),
        p = s.useCallback(() => {
            window.open(P.A.getArticleURL(H.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
        }, []),
        E = s.useCallback(() => {
            (0, d.mMO)(async () => {
                let { default: e } = await n.e("45361").then(n.bind(n, 151080));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        }, []),
        C = s.useMemo(
            () =>
                a
                    ? r
                        ? Y.intl.string(Y.t.sK0dmH)
                        : o
                          ? Y.intl.format(F.default.WM5adV, { handleOnHelpUrlHook: p })
                          : Y.intl.string(Y.t.XxRj7f)
                    : x,
            [a, r, o, x, p],
        ),
        T = a && !r && o;
    return (0, i.jsxs)("div", {
        className: l()(z.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: z.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(d.Text, {
                            variant: "text-md/medium",
                            className: z.p9,
                            children: Y.intl.string(Y.t["/52UYy"]),
                        }),
                        (0, i.jsx)("div", {
                            children: (0, i.jsxs)(d.Text, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: [o && a && !r ? `${Y.intl.string(Y.t.XxRj7f)} • ` : null, C],
                            }),
                        }),
                    ],
                }),
            }),
            T &&
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: z.pr,
                    children: (0, i.jsx)(d.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: Y.intl.string(Y.t.bt75uw),
                        "aria-label": Y.intl.string(Y.t.bt75uw),
                        onClick: E,
                    }),
                }),
            c &&
                !T &&
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: z.pr,
                    children: (0, i.jsx)(d.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: r ? u : h,
                        "aria-label": r ? u : h,
                        onClick: () => _.A.showAgeVerificationGetStartedModal({ entryPoint: m.q1.ACCOUNT_AGE_GROUP }),
                    }),
                }),
        ],
    });
}
function et(e) {
    let { currentUser: t } = e,
        n = (0, b.Ay)(t.id),
        s = (0, N.A)(n),
        a = M.jP.useSetting(),
        l = (0, r.bG)([f.A], () => f.A.getErrors()),
        o = l?.avatar?.[0],
        { avatarSrc: c, avatarDecorationSrc: _ } = (0, j.A)({ userId: t?.id, size: d._3J.SIZE_80 }),
        m = (0, I.A)(),
        A = (0, T.fk)(),
        g = (0, G.j)("UserSettingsAccountProfileCard");
    return (0, i.jsxs)("div", {
        className: z.DM,
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
                className: z.eF,
                children: [
                    (0, i.jsx)(W, {
                        className: z.my,
                        src: c,
                        avatarDecoration: _,
                        status: a,
                        size: d._3J.SIZE_80,
                        "aria-label": t.username,
                    }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)("div", {
                                className: z.Ib,
                                children: [
                                    (0, i.jsx)(u.A, {
                                        user: t,
                                        className: z.a1,
                                        discriminatorClass: z.D2,
                                        displayNameStylesType: p.G.STATIC,
                                    }),
                                    (0, i.jsx)($, { user: t }),
                                ],
                            }),
                            (0, i.jsx)(v.A, { badges: s, className: z.C_, badgeClassName: z.qS }),
                        ],
                    }),
                    (0, i.jsx)(d.Button, {
                        variant: "primary",
                        size: "sm",
                        text: Y.intl.string(Y.t["2p2aYz"]),
                        onClick: K,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: z.Tp,
                children: [
                    null != o
                        ? (0, i.jsx)(d.Text, {
                              className: z.mx,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: o,
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: z.FL,
                        children: [
                            (0, i.jsx)(S.x, {
                                setting: w.H.ACCOUNT_DISPLAY_NAME,
                                children: (0, i.jsx)(q, { className: z.mS, user: t }),
                            }),
                            (0, i.jsx)(S.x, { setting: w.H.ACCOUNT_USERNAME, children: (0, i.jsx)(Z, { user: t }) }),
                            (0, i.jsx)(S.x, {
                                setting: w.H.ACCOUNT_EMAIL,
                                children: (0, i.jsx)(Q, { className: z.Zr, user: t }),
                            }),
                            (0, i.jsx)(S.x, {
                                setting: w.H.ACCOUNT_PHONE_NUMBER,
                                children: (0, i.jsx)(J, { className: z.Zr, user: t }),
                            }),
                            (A || g) &&
                                (0, i.jsx)(S.x, {
                                    setting: w.H.ACCOUNT_AGE_GROUP,
                                    children: (0, i.jsx)(ee, { className: z.Zr }),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
