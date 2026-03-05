n.d(t, { A: () => $ });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(827734),
    d = n(990078),
    c = n(397927),
    u = n(297413),
    _ = n(935649),
    g = n(847599),
    m = n(36149),
    A = n(521933),
    h = n(50268),
    p = n(922301),
    x = n(81400),
    E = n(557722),
    T = n(207560),
    S = n(195043),
    C = n(790114),
    f = n(836602),
    I = n(262),
    b = n(950191),
    N = n(854627),
    v = n(542535),
    j = n(915614),
    O = n(662758),
    R = n(957565),
    y = n(975571),
    P = n(427262),
    L = n(837921),
    D = n(253932),
    G = n(780964),
    M = n(192501),
    U = n(840065),
    k = n(531525),
    V = n(652215),
    w = n(53516),
    H = n(985018),
    B = n(949268),
    Y = n(72936);
let F = L.Ay.getEnableHardwareAcceleration() ? c.JsQ : c.euF;
function z() {
    (0, U.openUserSettings)(G.X.PROFILE_PANEL, { section: V.nc_.PROFILE_CUSTOMIZATION });
}
function X(e) {
    let { className: t, user: l } = e,
        r = s.useRef(null),
        u = (0, x.EC)(),
        _ = u?.nick?.[0] ?? null,
        [g, m] = s.useState(!1);
    s.useEffect(() => {
        m(null != r.current && r.current.scrollWidth > r.current.clientWidth);
    }, [l.username]);
    let A = !l.isClaimed(),
        h = A ? H.intl.string(H.t["7Ngnyr"]) : void 0;
    return (0, i.jsxs)("div", {
        className: a()(Y.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: Y.NQ,
                children: (0, i.jsxs)("div", {
                    className: Y.Fj,
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: "text-md/medium",
                            className: Y.p9,
                            children: H.intl.string(H.t.qqhR3L),
                        }),
                        (0, i.jsxs)("div", {
                            className: Y.HR,
                            ref: r,
                            children: [
                                (0, i.jsx)(c.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: l.username,
                                }),
                                !l.hasUniqueUsername() &&
                                    (0, i.jsxs)(c.Text, {
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
            null != _ &&
                (0, i.jsx)("div", {
                    className: Y.a$,
                    children: (0, i.jsx)(d.m, {
                        __unsupportedReactNodeAsText: _,
                        "aria-label": !1,
                        children: (0, i.jsx)(c.EpV, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: o.A.colors.STATUS_WARNING.css,
                        }),
                    }),
                }),
            (0, i.jsx)(d.m, {
                text: h,
                children: (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: Y.pr,
                    children: (0, i.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: g ? H.intl.string(H.t["16kTw/"]) : H.intl.string(H.t.bt75uw),
                        disabled: A,
                        "aria-label": H.intl.string(H.t.JECa91),
                        onClick: () =>
                            (0, c.mMO)(async () => {
                                let { default: e } = await n.e("27533").then(n.bind(n, 993468));
                                return (t) => (0, i.jsx)(e, { ...t });
                            }),
                    }),
                }),
            }),
        ],
    });
}
function W(e) {
    let { user: t, className: n } = e,
        l = (0, x.EC)(),
        r = l?.nick?.[0] ?? null,
        u = P.Ay.getGlobalName(t),
        _ = s.useRef(null),
        [g, m] = s.useState(!1);
    return (
        s.useEffect(() => {
            m(null != _.current && _.current.scrollWidth > _.current.clientWidth);
        }, [u]),
        (0, i.jsxs)("div", {
            className: a()(Y.ZZ, n),
            children: [
                (0, i.jsx)("div", {
                    className: Y.NQ,
                    children: (0, i.jsxs)("div", {
                        className: Y.Fj,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: "text-md/medium",
                                className: Y.p9,
                                children: H.intl.string(H.t["9AjdkD"]),
                            }),
                            (0, i.jsx)("div", {
                                className: Y.HR,
                                ref: _,
                                children: (0, i.jsx)(c.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: null == u ? H.intl.string(H.t.ep5kjK) : u,
                                }),
                            }),
                        ],
                    }),
                }),
                null != r &&
                    (0, i.jsx)("div", {
                        className: Y.a$,
                        children: (0, i.jsx)(d.m, {
                            __unsupportedReactNodeAsText: r,
                            "aria-label": !1,
                            children: (0, i.jsx)(c.EpV, {
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
                    children: (0, i.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: g ? H.intl.string(H.t["16kTw/"]) : H.intl.string(H.t.bt75uw),
                        "aria-label": H.intl.string(H.t.YXeWYM),
                        onClick: z,
                    }),
                }),
            ],
        })
    );
}
function K(e) {
    let { text: t, censor: n, revealLabel: l, hideLabel: a } = e,
        [r, o] = s.useState(!1),
        d = r ? t : n(t);
    return (0, i.jsxs)("div", {
        className: Y.c1,
        children: [
            d,
            (0, i.jsx)(c.QWc, {
                variant: "primary",
                textVariant: "text-sm/medium",
                "aria-label": r ? a : l,
                onClick: () => o(!r),
                text: r ? H.intl.string(H.t.fgq1gs) : H.intl.string(H.t.dcztdU),
            }),
        ],
    });
}
function Z(e) {
    let t,
        { className: s, user: l } = e;
    if (l.isClaimed())
        if (null == l.email)
            t = {
                buttonText: H.intl.string(H.t.OYkgVk),
                buttonAriaLabel: H.intl.string(H.t["pvBD+W"]),
                valueMessage: H.intl.string(H.t["8SfTN/"]),
                handleClick: () =>
                    (0, c.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("83269"), n.e("5689")]).then(n.bind(n, 350116));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
            };
        else {
            let { email: e } = l;
            t = {
                buttonText: H.intl.string(H.t.bt75uw),
                buttonAriaLabel: H.intl.string(H.t["8peUT0"]),
                valueMessage: (0, i.jsx)(K, {
                    text: e,
                    censor: M.B,
                    revealLabel: H.intl.string(H.t["Zvx+yV"]),
                    hideLabel: H.intl.string(H.t.nqTD4d),
                }),
                handleClick: () =>
                    (0, c.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("83269"), n.e("5689")]).then(n.bind(n, 350116));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
            };
        }
    else
        t = {
            buttonText: H.intl.string(H.t.BleMPB),
            buttonAriaLabel: H.intl.string(H.t.BleMPB),
            valueMessage: H.intl.string(H.t.qxk9zo),
            handleClick: () => A.A.openClaimAccountModal(),
        };
    return (0, i.jsxs)("div", {
        className: a()(Y.ZZ, s),
        children: [
            (0, i.jsx)("div", {
                className: Y.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: "text-md/medium",
                            className: Y.p9,
                            children: H.intl.string(H.t.tlZllC),
                        }),
                        (0, i.jsx)("div", {
                            children: (0, i.jsx)(c.Text, {
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
                children: (0, i.jsx)(c.Button, {
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
function q(e) {
    let t,
        { className: s, user: l } = e;
    if (!l.isClaimed()) return null;
    let { phone: r, email: o } = l,
        d = null != r;
    return (
        (t = d
            ? (0, i.jsx)(K, {
                  text: r,
                  censor: M.D,
                  revealLabel: H.intl.string(H.t.eY3xlT),
                  hideLabel: H.intl.string(H.t["jllbv+"]),
              })
            : H.intl.string(H.t.I5kDqj)),
        (0, i.jsxs)("div", {
            className: a()(Y.ZZ, s),
            children: [
                (0, i.jsx)("div", {
                    className: Y.NQ,
                    children: (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: "text-md/medium",
                                className: Y.p9,
                                children: H.intl.string(H.t.kerONq),
                            }),
                            (0, i.jsx)("div", {
                                children: (0, i.jsx)(c.Text, {
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
                        d && null != o
                            ? (0, i.jsx)("div", {
                                  className: a()(Y.pr, Y.DT),
                                  children: (0, i.jsx)(c.QWc, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: H.intl.string(H.t.N86XcP),
                                      "aria-label": H.intl.string(H.t.Rpn4A3),
                                      onClick: function () {
                                          (0, c.qfG)((e) =>
                                              (0, i.jsx)(O.default, {
                                                  ...e,
                                                  title: H.intl.string(H.t["3CTiKi"]),
                                                  children: l.hasFlag(V.nhx.MFA_SMS)
                                                      ? H.intl.string(H.t.jrhJyo)
                                                      : void 0,
                                                  actionText: H.intl.string(H.t.N86XcP),
                                                  handleSubmit: (e) => E.A.removePhone(e, E.d.USER_SETTINGS_UPDATE),
                                              }),
                                          );
                                      },
                                  }),
                              })
                            : null,
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: Y.pr,
                            children: (0, i.jsx)(c.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: d ? H.intl.string(H.t.bt75uw) : H.intl.string(H.t.OYkgVk),
                                "aria-label": d ? H.intl.string(H.t.YDabSe) : H.intl.string(H.t["SfUuE+"]),
                                onClick: function () {
                                    (0, c.mMO)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                                            return (t) => (0, i.jsx)(e, { reason: E.d.USER_SETTINGS_UPDATE, ...t });
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
        n = (0, h.A)({ id: t.id, label: H.intl.string(H.t["/AXYnE"]) }),
        l = D.Q_.useSetting(),
        a = s.useRef(null);
    return l && R.p5
        ? (0, i.jsx)(c.YNO, {
              targetElementRef: a,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(c.W1t, {
                      "data-menu-migrated": !0,
                      onClose: t,
                      onSelect: void 0,
                      navId: "copy-id",
                      "aria-label": H.intl.string(H.t.RANhlE),
                      children: n,
                  });
              },
              children: (e) =>
                  (0, i.jsx)(c.DUT, {
                      ...e,
                      innerRef: a,
                      className: Y.SI,
                      "aria-label": H.intl.string(H.t.DEoVWZ),
                      children: (0, i.jsx)(c.jNK, { size: "md", color: "currentColor", className: Y.D$ }),
                  }),
          })
        : null;
}
function Q(e) {
    let { className: t } = e,
        l = (0, m.b8)(),
        r = (0, m.yM)(),
        o = (0, m.Y2)(),
        d = !l || r,
        u = H.intl.string(H.t["9KiIz6"]),
        A = H.intl.string(H.t.DVywUB),
        h = H.intl.string(H.t.lKDPGA),
        p = s.useCallback(() => {
            window.open(y.A.getArticleURL(V.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
        }, []),
        x = s.useCallback(() => {
            (0, c.mMO)(async () => {
                let { default: e } = await n.e("45361").then(n.bind(n, 151080));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        }, []),
        E = s.useMemo(
            () =>
                l
                    ? r
                        ? H.intl.string(H.t.sK0dmH)
                        : o
                          ? H.intl.format(B.default.WM5adV, { handleOnHelpUrlHook: p })
                          : H.intl.string(H.t.XxRj7f)
                    : h,
            [l, r, o, h, p],
        ),
        T = l && !r && o;
    return (0, i.jsxs)("div", {
        className: a()(Y.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: Y.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: "text-md/medium",
                            className: Y.p9,
                            children: H.intl.string(H.t["/52UYy"]),
                        }),
                        (0, i.jsx)("div", {
                            children: (0, i.jsxs)(c.Text, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: [o && l && !r ? `${H.intl.string(H.t.XxRj7f)} • ` : null, E],
                            }),
                        }),
                    ],
                }),
            }),
            T &&
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: Y.pr,
                    children: (0, i.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: H.intl.string(H.t.bt75uw),
                        "aria-label": H.intl.string(H.t.bt75uw),
                        onClick: x,
                    }),
                }),
            d &&
                !T &&
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: Y.pr,
                    children: (0, i.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: r ? u : A,
                        "aria-label": r ? u : A,
                        onClick: () => _.A.showAgeVerificationGetStartedModal({ entryPoint: g.q1.ACCOUNT_AGE_GROUP }),
                    }),
                }),
        ],
    });
}
function $(e) {
    let { currentUser: t } = e,
        n = (0, b.Ay)(t.id),
        s = (0, I.A)(n),
        l = D.jP.useSetting(),
        a = (0, r.bG)([f.A], () => f.A.getErrors()),
        o = a?.avatar?.[0],
        { avatarSrc: d, avatarDecorationSrc: _ } = (0, N.A)({ userId: t?.id, size: c._3J.SIZE_80 }),
        g = (0, C.A)(),
        m = (0, T.fk)();
    return (0, i.jsxs)("div", {
        className: Y.DM,
        children: [
            (0, i.jsx)(j.o, {
                user: t,
                displayProfile: n,
                avatarSize: c._3J.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: g ? 696 : 660,
                bannerHeight: 100,
                themePadding: 0,
            }),
            (0, i.jsxs)("div", {
                className: Y.eF,
                children: [
                    (0, i.jsx)(F, {
                        className: Y.my,
                        src: d,
                        avatarDecoration: _,
                        status: l,
                        size: c._3J.SIZE_80,
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
                    (0, i.jsx)(c.Button, {
                        variant: "primary",
                        size: "sm",
                        text: H.intl.string(H.t["2p2aYz"]),
                        onClick: z,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: Y.Tp,
                children: [
                    null != o
                        ? (0, i.jsx)(c.Text, {
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
                                setting: k.H.ACCOUNT_DISPLAY_NAME,
                                children: (0, i.jsx)(W, { className: Y.mS, user: t }),
                            }),
                            (0, i.jsx)(S.x, { setting: k.H.ACCOUNT_USERNAME, children: (0, i.jsx)(X, { user: t }) }),
                            (0, i.jsx)(S.x, {
                                setting: k.H.ACCOUNT_EMAIL,
                                children: (0, i.jsx)(Z, { className: Y.Zr, user: t }),
                            }),
                            (0, i.jsx)(S.x, {
                                setting: k.H.ACCOUNT_PHONE_NUMBER,
                                children: (0, i.jsx)(q, { className: Y.Zr, user: t }),
                            }),
                            m &&
                                (0, i.jsx)(S.x, {
                                    setting: k.H.ACCOUNT_AGE_GROUP,
                                    children: (0, i.jsx)(Q, { className: Y.Zr }),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
