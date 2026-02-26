n.d(t, { A: () => ee });
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
    A = n(36149),
    g = n(521933),
    h = n(50268),
    x = n(922301),
    p = n(81400),
    E = n(557722),
    C = n(207560),
    T = n(195043),
    S = n(790114),
    I = n(836602),
    f = n(262),
    N = n(950191),
    b = n(854627),
    j = n(542535),
    v = n(915614),
    O = n(662758),
    R = n(957565),
    y = n(975571),
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
    Y = n(949268),
    F = n(72936);
let z = L.Ay.getEnableHardwareAcceleration() ? d.JsQ : d.euF;
function W() {
    (0, k.openUserSettings)(G.X.PROFILE_PANEL, { section: H.nc_.PROFILE_CUSTOMIZATION });
}
function K(e) {
    let { className: t, user: a } = e,
        r = s.useRef(null),
        u = (0, p.EC)(),
        _ = u?.nick?.[0] ?? null,
        [m, A] = s.useState(!1);
    s.useEffect(() => {
        A(null != r.current && r.current.scrollWidth > r.current.clientWidth);
    }, [a.username]);
    let g = !a.isClaimed(),
        h = g ? B.intl.string(B.t["7Ngnyr"]) : void 0;
    return (0, i.jsxs)("div", {
        className: l()(F.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: F.NQ,
                children: (0, i.jsxs)("div", {
                    className: F.Fj,
                    children: [
                        (0, i.jsx)(d.Text, {
                            variant: "text-md/medium",
                            className: F.p9,
                            children: B.intl.string(B.t.qqhR3L),
                        }),
                        (0, i.jsxs)("div", {
                            className: F.HR,
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
                    className: F.a$,
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
                    className: F.pr,
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
function Z(e) {
    let { user: t, className: n } = e,
        a = (0, p.EC)(),
        r = a?.nick?.[0] ?? null,
        u = P.Ay.getGlobalName(t),
        _ = s.useRef(null),
        [m, A] = s.useState(!1);
    return (
        s.useEffect(() => {
            A(null != _.current && _.current.scrollWidth > _.current.clientWidth);
        }, [u]),
        (0, i.jsxs)("div", {
            className: l()(F.ZZ, n),
            children: [
                (0, i.jsx)("div", {
                    className: F.NQ,
                    children: (0, i.jsxs)("div", {
                        className: F.Fj,
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: "text-md/medium",
                                className: F.p9,
                                children: B.intl.string(B.t["9AjdkD"]),
                            }),
                            (0, i.jsx)("div", {
                                className: F.HR,
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
                        className: F.a$,
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
                    className: F.pr,
                    children: (0, i.jsx)(d.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: m ? B.intl.string(B.t["16kTw/"]) : B.intl.string(B.t.bt75uw),
                        "aria-label": B.intl.string(B.t.YXeWYM),
                        onClick: W,
                    }),
                }),
            ],
        })
    );
}
function q(e) {
    let { text: t, censor: n, revealLabel: a, hideLabel: l } = e,
        [r, o] = s.useState(!1),
        c = r ? t : n(t);
    return (0, i.jsxs)("div", {
        className: F.c1,
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
function X(e) {
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
                        let { default: e } = await Promise.all([n.e("83269"), n.e("5689")]).then(n.bind(n, 350116));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
            };
        else {
            let { email: e } = a;
            t = {
                buttonText: B.intl.string(B.t.bt75uw),
                buttonAriaLabel: B.intl.string(B.t["8peUT0"]),
                valueMessage: (0, i.jsx)(q, {
                    text: e,
                    censor: U.B,
                    revealLabel: B.intl.string(B.t["Zvx+yV"]),
                    hideLabel: B.intl.string(B.t.nqTD4d),
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
            buttonText: B.intl.string(B.t.BleMPB),
            buttonAriaLabel: B.intl.string(B.t.BleMPB),
            valueMessage: B.intl.string(B.t.qxk9zo),
            handleClick: () => g.A.openClaimAccountModal(),
        };
    return (0, i.jsxs)("div", {
        className: l()(F.ZZ, s),
        children: [
            (0, i.jsx)("div", {
                className: F.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(d.Text, {
                            variant: "text-md/medium",
                            className: F.p9,
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
                className: F.pr,
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
function Q(e) {
    let t,
        { className: s, user: a } = e;
    if (!a.isClaimed()) return null;
    let { phone: r, email: o } = a,
        c = null != r;
    return (
        (t = c
            ? (0, i.jsx)(q, {
                  text: r,
                  censor: U.D,
                  revealLabel: B.intl.string(B.t.eY3xlT),
                  hideLabel: B.intl.string(B.t["jllbv+"]),
              })
            : B.intl.string(B.t.I5kDqj)),
        (0, i.jsxs)("div", {
            className: l()(F.ZZ, s),
            children: [
                (0, i.jsx)("div", {
                    className: F.NQ,
                    children: (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsx)(d.Text, {
                                variant: "text-md/medium",
                                className: F.p9,
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
                    className: F.PU,
                    children: [
                        c && null != o
                            ? (0, i.jsx)("div", {
                                  className: l()(F.pr, F.DT),
                                  children: (0, i.jsx)(d.QWc, {
                                      textVariant: "text-sm/medium",
                                      variant: "secondary",
                                      text: B.intl.string(B.t.N86XcP),
                                      "aria-label": B.intl.string(B.t.Rpn4A3),
                                      onClick: function () {
                                          (0, d.qfG)((e) =>
                                              (0, i.jsx)(O.default, {
                                                  ...e,
                                                  title: B.intl.string(B.t["3CTiKi"]),
                                                  children: a.hasFlag(H.nhx.MFA_SMS)
                                                      ? B.intl.string(B.t.jrhJyo)
                                                      : void 0,
                                                  actionText: B.intl.string(B.t.N86XcP),
                                                  handleSubmit: (e) => E.A.removePhone(e, E.d.USER_SETTINGS_UPDATE),
                                              }),
                                          );
                                      },
                                  }),
                              })
                            : null,
                        (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: F.pr,
                            children: (0, i.jsx)(d.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: c ? B.intl.string(B.t.bt75uw) : B.intl.string(B.t.OYkgVk),
                                "aria-label": c ? B.intl.string(B.t.YDabSe) : B.intl.string(B.t["SfUuE+"]),
                                onClick: function () {
                                    (0, d.mMO)(
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
        n = (0, h.A)({ id: t.id, label: B.intl.string(B.t["/AXYnE"]) }),
        a = M.Q_.useSetting(),
        l = s.useRef(null);
    return a && R.p5
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
                      className: F.SI,
                      "aria-label": B.intl.string(B.t.DEoVWZ),
                      children: (0, i.jsx)(d.jNK, { size: "md", color: "currentColor", className: F.D$ }),
                  }),
          })
        : null;
}
function $(e) {
    let { className: t } = e,
        a = (0, A.b8)(),
        r = (0, A.yM)(),
        o = (0, A.Y2)(),
        c = !a || r,
        u = B.intl.string(B.t["9KiIz6"]),
        g = B.intl.string(B.t.DVywUB),
        h = B.intl.string(B.t.lKDPGA),
        x = s.useCallback(() => {
            window.open(y.A.getArticleURL(H.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
        }, []),
        p = s.useCallback(() => {
            (0, d.mMO)(async () => {
                let { default: e } = await n.e("45361").then(n.bind(n, 151080));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        }, []),
        E = s.useMemo(
            () =>
                a
                    ? r
                        ? B.intl.string(B.t.sK0dmH)
                        : o
                          ? B.intl.format(Y.default.WM5adV, { handleOnHelpUrlHook: x })
                          : B.intl.string(B.t.XxRj7f)
                    : h,
            [a, r, o, h, x],
        ),
        C = a && !r && o;
    return (0, i.jsxs)("div", {
        className: l()(F.ZZ, t),
        children: [
            (0, i.jsx)("div", {
                className: F.NQ,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(d.Text, {
                            variant: "text-md/medium",
                            className: F.p9,
                            children: B.intl.string(B.t["/52UYy"]),
                        }),
                        (0, i.jsx)("div", {
                            children: (0, i.jsxs)(d.Text, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: [o && a && !r ? `${B.intl.string(B.t.XxRj7f)} • ` : null, E],
                            }),
                        }),
                    ],
                }),
            }),
            C &&
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: F.pr,
                    children: (0, i.jsx)(d.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: B.intl.string(B.t.bt75uw),
                        "aria-label": B.intl.string(B.t.bt75uw),
                        onClick: p,
                    }),
                }),
            c &&
                !C &&
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: F.pr,
                    children: (0, i.jsx)(d.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: r ? u : g,
                        "aria-label": r ? u : g,
                        onClick: () => _.A.showAgeVerificationGetStartedModal({ entryPoint: m.q1.ACCOUNT_AGE_GROUP }),
                    }),
                }),
        ],
    });
}
function ee(e) {
    let { currentUser: t } = e,
        n = (0, N.Ay)(t.id),
        s = (0, f.A)(n),
        a = M.jP.useSetting(),
        l = (0, r.bG)([I.A], () => I.A.getErrors()),
        o = l?.avatar?.[0],
        { avatarSrc: c, avatarDecorationSrc: _ } = (0, b.A)({ userId: t?.id, size: d._3J.SIZE_80 }),
        m = (0, S.A)(),
        A = (0, C.fk)(),
        g = (0, D.j)("UserSettingsAccountProfileCard");
    return (0, i.jsxs)("div", {
        className: F.DM,
        children: [
            (0, i.jsx)(v.o, {
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
                className: F.eF,
                children: [
                    (0, i.jsx)(z, {
                        className: F.my,
                        src: c,
                        avatarDecoration: _,
                        status: a,
                        size: d._3J.SIZE_80,
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
                            (0, i.jsx)(j.A, { badges: s, className: F.C_, badgeClassName: F.qS }),
                        ],
                    }),
                    (0, i.jsx)(d.Button, {
                        variant: "primary",
                        size: "sm",
                        text: B.intl.string(B.t["2p2aYz"]),
                        onClick: W,
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: F.Tp,
                children: [
                    null != o
                        ? (0, i.jsx)(d.Text, {
                              className: F.mx,
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              children: o,
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: F.FL,
                        children: [
                            (0, i.jsx)(T.x, {
                                setting: V.H.ACCOUNT_DISPLAY_NAME,
                                children: (0, i.jsx)(Z, { className: F.mS, user: t }),
                            }),
                            (0, i.jsx)(T.x, { setting: V.H.ACCOUNT_USERNAME, children: (0, i.jsx)(K, { user: t }) }),
                            (0, i.jsx)(T.x, {
                                setting: V.H.ACCOUNT_EMAIL,
                                children: (0, i.jsx)(X, { className: F.Zr, user: t }),
                            }),
                            (0, i.jsx)(T.x, {
                                setting: V.H.ACCOUNT_PHONE_NUMBER,
                                children: (0, i.jsx)(Q, { className: F.Zr, user: t }),
                            }),
                            (A || g) &&
                                (0, i.jsx)(T.x, {
                                    setting: V.H.ACCOUNT_AGE_GROUP,
                                    children: (0, i.jsx)($, { className: F.Zr }),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
