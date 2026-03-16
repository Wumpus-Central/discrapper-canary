n.d(t, { A: () => $ });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(827734),
    d = n(990078),
    c = n(397927),
    u = n(297413),
    _ = n(935649),
    m = n(847599),
    g = n(36149),
    A = n(521933),
    h = n(50268),
    x = n(922301),
    p = n(81400),
    T = n(557722),
    E = n(207560),
    C = n(195043),
    S = n(790114),
    f = n(836602),
    N = n(262),
    b = n(950191),
    I = n(854627),
    v = n(542535),
    j = n(915614),
    O = n(662758),
    y = n(957565),
    R = n(975571),
    P = n(427262),
    D = n(837921),
    L = n(253932),
    M = n(780964),
    G = n(192501),
    U = n(840065),
    k = n(531525),
    V = n(652215),
    w = n(53516),
    B = n(985018),
    H = n(536242),
    F = n(240342);
let Y = D.Ay.getEnableHardwareAcceleration() ? c.JsQ : c.euF;
function z() {
    (0, U.openUserSettings)(M.X.PROFILE_PANEL, { section: V.nc_.PROFILE_CUSTOMIZATION });
}
function X(e) {
    let { className: t, user: l } = e,
        a = s.useRef(null),
        u = (0, p.EC)(),
        _ = u?.nick?.[0] ?? null,
        [m, g] = s.useState(!1);
    s.useEffect(() => {
        g(null != a.current && a.current.scrollWidth > a.current.clientWidth);
    }, [l.username]);
    let A = !l.isClaimed(),
        h = A ? B.intl.string(B.t["7Ngnyr"]) : void 0;
    return (0, i.jsxs)("div", {
        className: r()(F.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: F.NQ,
                children: (0, i.jsxs)("div", {
                    className: F.Fj,
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: "text-md/medium",
                            className: F.p9,
                            children: B.intl.string(B.t.qqhR3L),
                        }),
                        (0, i.jsxs)("div", {
                            className: F.HR,
                            ref: a,
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
                    className: F.a$,
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
                    className: F.pr,
                    children: (0, i.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: m ? B.intl.string(B.t["16kTw/"]) : B.intl.string(B.t.bt75uw),
                        disabled: A,
                        "aria-label": B.intl.string(B.t.JECa91),
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
        l = (0, p.EC)(),
        a = l?.nick?.[0] ?? null,
        u = P.Ay.getGlobalName(t),
        _ = s.useRef(null),
        [m, g] = s.useState(!1);
    return (
        s.useEffect(() => {
            g(null != _.current && _.current.scrollWidth > _.current.clientWidth);
        }, [u]),
        (0, i.jsxs)("div", {
            className: r()(F.ZZ, n),
            children: [
                (0, i.jsx)("div", {
                    className: F.NQ,
                    children: (0, i.jsxs)("div", {
                        className: F.Fj,
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: "text-md/medium",
                                className: F.p9,
                                children: B.intl.string(B.t["9AjdkD"]),
                            }),
                            (0, i.jsx)("div", {
                                className: F.HR,
                                ref: _,
                                children: (0, i.jsx)(c.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: null == u ? B.intl.string(B.t.ep5kjK) : u,
                                }),
                            }),
                        ],
                    }),
                }),
                null != a &&
                    (0, i.jsx)("div", {
                        className: F.a$,
                        children: (0, i.jsx)(d.m, {
                            __unsupportedReactNodeAsText: a,
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
                    className: F.pr,
                    children: (0, i.jsx)(c.Button, {
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
function K(e) {
    let { text: t, censor: n, revealLabel: l, hideLabel: r } = e,
        [a, o] = s.useState(!1),
        d = a ? t : n(t);
    return (0, i.jsxs)("div", {
        className: F.c1,
        children: [
            d,
            (0, i.jsx)(c.QWc, {
                variant: "primary",
                textVariant: "text-sm/medium",
                "aria-label": a ? r : l,
                onClick: () => o(!a),
                text: a ? B.intl.string(B.t.fgq1gs) : B.intl.string(B.t.dcztdU),
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
                buttonText: B.intl.string(B.t.OYkgVk),
                buttonAriaLabel: B.intl.string(B.t["pvBD+W"]),
                valueMessage: B.intl.string(B.t["8SfTN/"]),
                handleClick: () =>
                    (0, c.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("83269"), n.e("14551")]).then(n.bind(n, 350116));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
            };
        else {
            let { email: e } = l;
            t = {
                buttonText: B.intl.string(B.t.bt75uw),
                buttonAriaLabel: B.intl.string(B.t["8peUT0"]),
                valueMessage: (0, i.jsx)(K, {
                    text: e,
                    censor: G.B,
                    revealLabel: B.intl.string(B.t["Zvx+yV"]),
                    hideLabel: B.intl.string(B.t.nqTD4d),
                }),
                handleClick: () =>
                    (0, c.mMO)(async () => {
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
            handleClick: () => A.A.openClaimAccountModal(),
        };
    return (0, i.jsxs)("div", {
        className: r()(F.ZZ, s),
        children: [
            (0, i.jsx)("div", {
                className: F.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: "text-md/medium",
                            className: F.p9,
                            children: B.intl.string(B.t.tlZllC),
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
                className: F.pr,
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
    let { phone: a, email: o } = l,
        d = null != a;
    return (
        (t = d
            ? (0, i.jsx)(K, {
                  text: a,
                  censor: G.D,
                  revealLabel: B.intl.string(B.t.eY3xlT),
                  hideLabel: B.intl.string(B.t["jllbv+"]),
              })
            : B.intl.string(B.t.I5kDqj)),
        (0, i.jsxs)("div", {
            className: r()(F.ZZ, s),
            children: [
                (0, i.jsx)("div", {
                    className: F.NQ,
                    children: (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(c.Text, {
                                variant: "text-md/medium",
                                className: F.p9,
                                children: B.intl.string(B.t.kerONq),
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
                    className: F.PU,
                    children: [
                        d && null != o
                            ? (0, i.jsx)("div", {
                                  className: r()(F.pr, F.DT),
                                  children: (0, i.jsx)(c.QWc, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: B.intl.string(B.t.N86XcP),
                                      "aria-label": B.intl.string(B.t.Rpn4A3),
                                      onClick: function () {
                                          (0, c.qfG)((e) =>
                                              (0, i.jsx)(O.default, {
                                                  ...e,
                                                  title: B.intl.string(B.t["3CTiKi"]),
                                                  children: l.hasFlag(V.nhx.MFA_SMS)
                                                      ? B.intl.string(B.t.jrhJyo)
                                                      : void 0,
                                                  actionText: B.intl.string(B.t.N86XcP),
                                                  handleSubmit: (e) => T.A.removePhone(e, T.d.USER_SETTINGS_UPDATE),
                                              }),
                                          );
                                      },
                                  }),
                              })
                            : null,
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: F.pr,
                            children: (0, i.jsx)(c.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: d ? B.intl.string(B.t.bt75uw) : B.intl.string(B.t.OYkgVk),
                                "aria-label": d ? B.intl.string(B.t.YDabSe) : B.intl.string(B.t["SfUuE+"]),
                                onClick: function () {
                                    (0, c.mMO)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                                            return (t) => (0, i.jsx)(e, { reason: T.d.USER_SETTINGS_UPDATE, ...t });
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
        n = (0, h.A)({ id: t.id, label: B.intl.string(B.t["/AXYnE"]) }),
        l = L.Q_.useSetting(),
        r = s.useRef(null);
    return l && y.p5
        ? (0, i.jsx)(c.YNO, {
              targetElementRef: r,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(c.W1t, {
                      "data-menu-migrated": !0,
                      onClose: t,
                      onSelect: void 0,
                      navId: "copy-id",
                      "aria-label": B.intl.string(B.t.RANhlE),
                      children: n,
                  });
              },
              children: (e) =>
                  (0, i.jsx)(c.DUT, {
                      ...e,
                      innerRef: r,
                      className: F.SI,
                      "aria-label": B.intl.string(B.t.DEoVWZ),
                      children: (0, i.jsx)(c.jNK, { size: "md", color: "currentColor", className: F.D$ }),
                  }),
          })
        : null;
}
function Q(e) {
    let { className: t } = e,
        l = (0, g.b8)(),
        a = (0, g.yM)(),
        o = (0, g.Y2)(),
        d = !l || a,
        u = B.intl.string(B.t["9KiIz6"]),
        A = B.intl.string(B.t.DVywUB),
        h = B.intl.string(B.t.lKDPGA),
        x = s.useCallback(() => {
            window.open(R.A.getArticleURL(V.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
        }, []),
        p = s.useCallback(() => {
            (0, c.mMO)(async () => {
                let { default: e } = await n.e("45361").then(n.bind(n, 151080));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        }, []),
        T = s.useMemo(
            () =>
                l
                    ? a
                        ? B.intl.string(B.t.sK0dmH)
                        : o
                          ? B.intl.format(H.default.WM5adV, { handleOnHelpUrlHook: x })
                          : B.intl.string(B.t.XxRj7f)
                    : h,
            [l, a, o, h, x],
        ),
        E = l && !a && o;
    return (0, i.jsxs)("div", {
        className: r()(F.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: F.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: "text-md/medium",
                            className: F.p9,
                            children: B.intl.string(B.t["/52UYy"]),
                        }),
                        (0, i.jsx)("div", {
                            children: (0, i.jsxs)(c.Text, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: [o && l && !a ? `${B.intl.string(B.t.XxRj7f)} • ` : null, T],
                            }),
                        }),
                    ],
                }),
            }),
            E &&
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: F.pr,
                    children: (0, i.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: B.intl.string(B.t.bt75uw),
                        "aria-label": B.intl.string(B.t.bt75uw),
                        onClick: p,
                    }),
                }),
            d &&
                !E &&
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: F.pr,
                    children: (0, i.jsx)(c.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: a ? u : A,
                        "aria-label": a ? u : A,
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
        l = L.jP.useSetting(),
        r = (0, a.bG)([f.A], () => f.A.getErrors()),
        o = r?.avatar?.[0],
        { avatarSrc: d, avatarDecorationSrc: _ } = (0, I.A)({ userId: t?.id, size: c._3J.SIZE_80 }),
        m = (0, S.A)(),
        g = (0, E.fk)();
    return (0, i.jsxs)("div", {
        className: F.DM,
        children: [
            (0, i.jsx)(j.o, {
                user: t,
                displayProfile: n,
                avatarSize: c._3J.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: m ? 696 : 660,
                bannerHeight: 100,
                themePadding: 0,
            }),
            (0, i.jsxs)("div", {
                className: F.eF,
                children: [
                    (0, i.jsx)(Y, {
                        className: F.my,
                        src: d,
                        avatarDecoration: _,
                        status: l,
                        size: c._3J.SIZE_80,
                        "aria-label": t.username,
                    }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)("div", {
                                className: F.Ib,
                                children: [
                                    (0, i.jsx)(u.A, {
                                        user: t,
                                        className: F.a1,
                                        discriminatorClass: F.D2,
                                        displayNameStylesType: x.G.STATIC,
                                    }),
                                    (0, i.jsx)(J, { user: t }),
                                ],
                            }),
                            (0, i.jsx)(v.A, { badges: s, className: F.C_, badgeClassName: F.qS }),
                        ],
                    }),
                    (0, i.jsx)(c.Button, {
                        variant: "primary",
                        size: "sm",
                        text: B.intl.string(B.t["2p2aYz"]),
                        onClick: z,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: F.Tp,
                children: [
                    null != o
                        ? (0, i.jsx)(c.Text, {
                              className: F.mx,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: o,
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: F.FL,
                        children: [
                            (0, i.jsx)(C.x, {
                                setting: k.H.ACCOUNT_DISPLAY_NAME,
                                children: (0, i.jsx)(W, { className: F.mS, user: t }),
                            }),
                            (0, i.jsx)(C.x, { setting: k.H.ACCOUNT_USERNAME, children: (0, i.jsx)(X, { user: t }) }),
                            (0, i.jsx)(C.x, {
                                setting: k.H.ACCOUNT_EMAIL,
                                children: (0, i.jsx)(Z, { className: F.Zr, user: t }),
                            }),
                            (0, i.jsx)(C.x, {
                                setting: k.H.ACCOUNT_PHONE_NUMBER,
                                children: (0, i.jsx)(q, { className: F.Zr, user: t }),
                            }),
                            g &&
                                (0, i.jsx)(C.x, {
                                    setting: k.H.ACCOUNT_AGE_GROUP,
                                    children: (0, i.jsx)(Q, { className: F.Zr }),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
