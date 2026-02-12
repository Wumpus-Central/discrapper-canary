n.d(t, { A: () => en });
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
    I = n(207560),
    f = n(195043),
    N = n(790114),
    b = n(836602),
    j = n(262),
    v = n(950191),
    O = n(854627),
    R = n(542535),
    y = n(915614),
    P = n(662758),
    L = n(287809),
    D = n(957565),
    M = n(427262),
    G = n(837921),
    U = n(64313),
    k = n(253932),
    V = n(780964),
    H = n(192501),
    w = n(840065),
    B = n(531525),
    Y = n(652215),
    F = n(53516),
    z = n(985018),
    W = n(240342);
let K = G.Ay.getEnableHardwareAcceleration() ? _.JsQ : _.euF;
function Z() {
    (0, w.openUserSettings)(V.X.PROFILE_PANEL, { section: Y.nc_.PROFILE_CUSTOMIZATION });
}
function q(e) {
    let { className: t, user: a } = e,
        r = s.useRef(null),
        o = (0, T.EC)(),
        c = o?.nick?.[0] ?? null,
        [m, A] = s.useState(!1);
    s.useEffect(() => {
        A(null != r.current && r.current.scrollWidth > r.current.clientWidth);
    }, [a.username]);
    let g = !a.isClaimed(),
        h = g ? z.intl.string(z.t["7Ngnyr"]) : void 0;
    return (0, i.jsxs)("div", {
        className: l()(W.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: W.NQ,
                children: (0, i.jsxs)("div", {
                    className: W.Fj,
                    children: [
                        (0, i.jsx)(_.Text, {
                            variant: "text-md/medium",
                            className: W.p9,
                            children: z.intl.string(z.t.qqhR3L),
                        }),
                        (0, i.jsxs)("div", {
                            className: W.HR,
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
            null != c &&
                (0, i.jsx)("div", {
                    className: W.a$,
                    children: (0, i.jsx)(u.m, {
                        __unsupportedReactNodeAsText: c,
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
                text: h,
                children: (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: W.pr,
                    children: (0, i.jsx)(_.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: m ? z.intl.string(z.t["16kTw/"]) : z.intl.string(z.t.bt75uw),
                        disabled: g,
                        "aria-label": z.intl.string(z.t.JECa91),
                        onClick: () =>
                            (0, _.mMO)(async () => {
                                let { default: e } = await n.e("27533").then(n.bind(n, 993468));
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                    }),
                }),
            }),
        ],
    });
}
function X(e) {
    let { user: t, className: n } = e,
        a = (0, T.EC)(),
        r = a?.nick?.[0] ?? null,
        o = M.Ay.getGlobalName(t),
        c = s.useRef(null),
        [m, A] = s.useState(!1);
    return (
        s.useEffect(() => {
            A(null != c.current && c.current.scrollWidth > c.current.clientWidth);
        }, [o]),
        (0, i.jsxs)("div", {
            className: l()(W.ZZ, n),
            children: [
                (0, i.jsx)("div", {
                    className: W.NQ,
                    children: (0, i.jsxs)("div", {
                        className: W.Fj,
                        children: [
                            (0, i.jsx)(_.Text, {
                                variant: "text-md/medium",
                                className: W.p9,
                                children: z.intl.string(z.t["9AjdkD"]),
                            }),
                            (0, i.jsx)("div", {
                                className: W.HR,
                                ref: c,
                                children: (0, i.jsx)(_.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: null == o ? z.intl.string(z.t.ep5kjK) : o,
                                }),
                            }),
                        ],
                    }),
                }),
                null != r &&
                    (0, i.jsx)("div", {
                        className: W.a$,
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
                    className: W.pr,
                    children: (0, i.jsx)(_.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: m ? z.intl.string(z.t["16kTw/"]) : z.intl.string(z.t.bt75uw),
                        "aria-label": z.intl.string(z.t.YXeWYM),
                        onClick: Z,
                    }),
                }),
            ],
        })
    );
}
function J(e) {
    let { text: t, censor: n, revealLabel: a, hideLabel: l } = e,
        [r, o] = s.useState(!1),
        c = r ? t : n(t);
    return (0, i.jsxs)("div", {
        className: W.c1,
        children: [
            c,
            (0, i.jsx)(_.QWc, {
                variant: "primary",
                textVariant: "text-sm/medium",
                "aria-label": r ? l : a,
                onClick: () => o(!r),
                text: r ? z.intl.string(z.t.fgq1gs) : z.intl.string(z.t.dcztdU),
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
                buttonText: z.intl.string(z.t.OYkgVk),
                buttonAriaLabel: z.intl.string(z.t["pvBD+W"]),
                valueMessage: z.intl.string(z.t["8SfTN/"]),
                handleClick: () =>
                    (0, _.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("83269"), n.e("14551")]).then(n.bind(n, 350116));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
            };
        else {
            let { email: e } = a;
            t = {
                buttonText: z.intl.string(z.t.bt75uw),
                buttonAriaLabel: z.intl.string(z.t["8peUT0"]),
                valueMessage: (0, i.jsx)(J, {
                    text: e,
                    censor: H.B,
                    revealLabel: z.intl.string(z.t["Zvx+yV"]),
                    hideLabel: z.intl.string(z.t.nqTD4d),
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
            buttonText: z.intl.string(z.t.BleMPB),
            buttonAriaLabel: z.intl.string(z.t.BleMPB),
            valueMessage: z.intl.string(z.t.qxk9zo),
            handleClick: () => p.A.openClaimAccountModal(),
        };
    return (0, i.jsxs)("div", {
        className: l()(W.ZZ, s),
        children: [
            (0, i.jsx)("div", {
                className: W.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(_.Text, {
                            variant: "text-md/medium",
                            className: W.p9,
                            children: z.intl.string(z.t.tlZllC),
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
                className: W.pr,
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
function $(e) {
    let t,
        { className: s, user: a } = e;
    if (!a.isClaimed()) return null;
    let { phone: r, email: o } = a,
        c = null != r;
    return (
        (t = c
            ? (0, i.jsx)(J, {
                  text: r,
                  censor: H.D,
                  revealLabel: z.intl.string(z.t.eY3xlT),
                  hideLabel: z.intl.string(z.t["jllbv+"]),
              })
            : z.intl.string(z.t.I5kDqj)),
        (0, i.jsxs)("div", {
            className: l()(W.ZZ, s),
            children: [
                (0, i.jsx)("div", {
                    className: W.NQ,
                    children: (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(_.Text, {
                                variant: "text-md/medium",
                                className: W.p9,
                                children: z.intl.string(z.t.kerONq),
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
                    className: W.PU,
                    children: [
                        c && null != o
                            ? (0, i.jsx)("div", {
                                  className: l()(W.pr, W.DT),
                                  children: (0, i.jsx)(_.QWc, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: z.intl.string(z.t.N86XcP),
                                      "aria-label": z.intl.string(z.t.Rpn4A3),
                                      onClick: function () {
                                          (0, _.qfG)((e) =>
                                              (0, i.jsx)(P.default, {
                                                  ...e,
                                                  title: z.intl.string(z.t["3CTiKi"]),
                                                  children: a.hasFlag(Y.nhx.MFA_SMS)
                                                      ? z.intl.string(z.t.jrhJyo)
                                                      : void 0,
                                                  actionText: z.intl.string(z.t.N86XcP),
                                                  handleSubmit: (e) => S.A.removePhone(e, S.d.USER_SETTINGS_UPDATE),
                                              }),
                                          );
                                      },
                                  }),
                              })
                            : null,
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: W.pr,
                            children: (0, i.jsx)(_.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: c ? z.intl.string(z.t.bt75uw) : z.intl.string(z.t.OYkgVk),
                                "aria-label": c ? z.intl.string(z.t.YDabSe) : z.intl.string(z.t["SfUuE+"]),
                                onClick: function () {
                                    (0, _.mMO)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                                            return (t) => (0, i.jsx)(e, { reason: S.d.USER_SETTINGS_UPDATE, ...t });
                                        },
                                        { modalKey: F.V },
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
function ee(e) {
    let { user: t } = e,
        n = (0, E.A)({ id: t.id, label: z.intl.string(z.t["/AXYnE"]) }),
        a = k.Q_.useSetting(),
        l = s.useRef(null);
    return a && D.p5
        ? (0, i.jsx)(_.YNO, {
              targetElementRef: l,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(_.W1t, {
                      "data-menu-migrated": !0,
                      onClose: t,
                      onSelect: void 0,
                      navId: "copy-id",
                      "aria-label": z.intl.string(z.t.RANhlE),
                      children: n,
                  });
              },
              children: (e) =>
                  (0, i.jsx)(_.DUT, {
                      ...e,
                      innerRef: l,
                      className: W.SI,
                      "aria-label": z.intl.string(z.t.DEoVWZ),
                      children: (0, i.jsx)(_.jNK, { size: "md", color: "currentColor", className: W.D$ }),
                  }),
          })
        : null;
}
function et(e) {
    let { className: t } = e,
        n = (0, x.b8)(),
        a = (0, x.yM)(),
        r = !n || a,
        o = (0, h.W)(z.intl.string(z.t.KPGVWl), z.intl.string(z.t["9KiIz6"])),
        c = (0, h.W)(z.intl.string(z.t.yNGjyK), z.intl.string(z.t.DVywUB)),
        d = (0, h.W)(z.intl.string(z.t.UX0Ode), z.intl.string(z.t.lKDPGA)),
        u = s.useMemo(() => (n ? (a ? z.intl.string(z.t.sK0dmH) : z.intl.string(z.t.XxRj7f)) : d), [n, a, d]);
    return (0, i.jsxs)("div", {
        className: l()(W.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: W.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(_.Text, {
                            variant: "text-md/medium",
                            className: W.p9,
                            children: z.intl.string(z.t["/52UYy"]),
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
                    className: W.pr,
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
function en() {
    let e = (0, c.bG)([L.default], () => {
            let e = L.default.getCurrentUser();
            return o()(null != e, "UserSettingsAccountProfileCard: currentUser cannot be undefined"), e;
        }),
        t = (0, v.Ay)(e.id),
        n = (0, j.A)(t),
        s = k.jP.useSetting(),
        a = (0, c.bG)([b.A], () => b.A.getErrors()),
        l = a?.avatar?.[0],
        { avatarSrc: r, avatarDecorationSrc: d } = (0, O.A)({ userId: e?.id, size: _._3J.SIZE_80 }),
        u = (0, N.A)(),
        A = (0, I.fk)(),
        g = (0, U.j)("UserSettingsAccountProfileCard");
    return (0, i.jsxs)("div", {
        className: W.DM,
        children: [
            (0, i.jsx)(y.o, {
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
                className: W.eF,
                children: [
                    (0, i.jsx)(K, {
                        className: W.my,
                        src: r,
                        avatarDecoration: d,
                        status: s,
                        size: _._3J.SIZE_80,
                        "aria-label": e.username,
                    }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)("div", {
                                className: W.Ib,
                                children: [
                                    (0, i.jsx)(m.A, {
                                        user: e,
                                        className: W.a1,
                                        discriminatorClass: W.D2,
                                        displayNameStylesType: C.G.STATIC,
                                    }),
                                    (0, i.jsx)(ee, { user: e }),
                                ],
                            }),
                            (0, i.jsx)(R.A, { badges: n, className: W.C_, badgeClassName: W.qS }),
                        ],
                    }),
                    (0, i.jsx)(_.Button, {
                        variant: "primary",
                        size: "sm",
                        text: z.intl.string(z.t["2p2aYz"]),
                        onClick: Z,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: W.Tp,
                children: [
                    null != l
                        ? (0, i.jsx)(_.Text, {
                              className: W.mx,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: l,
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: W.FL,
                        children: [
                            (0, i.jsx)(f.x, {
                                setting: B.H.ACCOUNT_DISPLAY_NAME,
                                children: (0, i.jsx)(X, { className: W.mS, user: e }),
                            }),
                            (0, i.jsx)(f.x, { setting: B.H.ACCOUNT_USERNAME, children: (0, i.jsx)(q, { user: e }) }),
                            (0, i.jsx)(f.x, {
                                setting: B.H.ACCOUNT_EMAIL,
                                children: (0, i.jsx)(Q, { className: W.Zr, user: e }),
                            }),
                            (0, i.jsx)(f.x, {
                                setting: B.H.ACCOUNT_PHONE_NUMBER,
                                children: (0, i.jsx)($, { className: W.Zr, user: e }),
                            }),
                            (A || g) &&
                                (0, i.jsx)(f.x, {
                                    setting: B.H.ACCOUNT_AGE_GROUP,
                                    children: (0, i.jsx)(et, { className: W.Zr }),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
