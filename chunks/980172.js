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
    D = n(253932),
    M = n(780964),
    G = n(192501),
    U = n(840065),
    k = n(531525),
    V = n(652215),
    H = n(53516),
    w = n(985018),
    B = n(536242),
    Y = n(240342);
let F = L.Ay.getEnableHardwareAcceleration() ? d.JsQ : d.euF;
function z() {
    (0, U.openUserSettings)(M.X.PROFILE_PANEL, { section: V.nc_.PROFILE_CUSTOMIZATION });
}
function W(e) {
    let { className: t, user: a } = e,
        r = s.useRef(null),
        u = (0, p.EC)(),
        _ = u?.nick?.[0] ?? null,
        [m, A] = s.useState(!1);
    s.useEffect(() => {
        A(null != r.current && r.current.scrollWidth > r.current.clientWidth);
    }, [a.username]);
    let g = !a.isClaimed(),
        h = g ? w.intl.string(w.t["7Ngnyr"]) : void 0;
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
                            children: w.intl.string(w.t.qqhR3L),
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
                        text: m ? w.intl.string(w.t["16kTw/"]) : w.intl.string(w.t.bt75uw),
                        disabled: g,
                        "aria-label": w.intl.string(w.t.JECa91),
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
                                children: w.intl.string(w.t["9AjdkD"]),
                            }),
                            (0, i.jsx)("div", {
                                className: Y.HR,
                                ref: _,
                                children: (0, i.jsx)(d.Text, {
                                    tag: "span",
                                    color: "text-strong",
                                    variant: "text-md/normal",
                                    children: null == u ? w.intl.string(w.t.ep5kjK) : u,
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
                        text: m ? w.intl.string(w.t["16kTw/"]) : w.intl.string(w.t.bt75uw),
                        "aria-label": w.intl.string(w.t.YXeWYM),
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
                text: r ? w.intl.string(w.t.fgq1gs) : w.intl.string(w.t.dcztdU),
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
                buttonText: w.intl.string(w.t.OYkgVk),
                buttonAriaLabel: w.intl.string(w.t["pvBD+W"]),
                valueMessage: w.intl.string(w.t["8SfTN/"]),
                handleClick: () =>
                    (0, d.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("83269"), n.e("14551")]).then(n.bind(n, 350116));
                        return (t) => (0, i.jsx)(e, { ...t });
                    }),
            };
        else {
            let { email: e } = a;
            t = {
                buttonText: w.intl.string(w.t.bt75uw),
                buttonAriaLabel: w.intl.string(w.t["8peUT0"]),
                valueMessage: (0, i.jsx)(Z, {
                    text: e,
                    censor: G.B,
                    revealLabel: w.intl.string(w.t["Zvx+yV"]),
                    hideLabel: w.intl.string(w.t.nqTD4d),
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
            buttonText: w.intl.string(w.t.BleMPB),
            buttonAriaLabel: w.intl.string(w.t.BleMPB),
            valueMessage: w.intl.string(w.t.qxk9zo),
            handleClick: () => g.A.openClaimAccountModal(),
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
                            children: w.intl.string(w.t.tlZllC),
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
                  censor: G.D,
                  revealLabel: w.intl.string(w.t.eY3xlT),
                  hideLabel: w.intl.string(w.t["jllbv+"]),
              })
            : w.intl.string(w.t.I5kDqj)),
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
                                children: w.intl.string(w.t.kerONq),
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
                                      text: w.intl.string(w.t.N86XcP),
                                      "aria-label": w.intl.string(w.t.Rpn4A3),
                                      onClick: function () {
                                          (0, d.qfG)((e) =>
                                              (0, i.jsx)(O.default, {
                                                  ...e,
                                                  title: w.intl.string(w.t["3CTiKi"]),
                                                  children: a.hasFlag(V.nhx.MFA_SMS)
                                                      ? w.intl.string(w.t.jrhJyo)
                                                      : void 0,
                                                  actionText: w.intl.string(w.t.N86XcP),
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
                            children: (0, i.jsx)(d.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: c ? w.intl.string(w.t.bt75uw) : w.intl.string(w.t.OYkgVk),
                                "aria-label": c ? w.intl.string(w.t.YDabSe) : w.intl.string(w.t["SfUuE+"]),
                                onClick: function () {
                                    (0, d.mMO)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                                            return (t) => (0, i.jsx)(e, { reason: E.d.USER_SETTINGS_UPDATE, ...t });
                                        },
                                        { modalKey: H.V },
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
function Q(e) {
    let { user: t } = e,
        n = (0, h.A)({ id: t.id, label: w.intl.string(w.t["/AXYnE"]) }),
        a = D.Q_.useSetting(),
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
                      "aria-label": w.intl.string(w.t.RANhlE),
                      children: n,
                  });
              },
              children: (e) =>
                  (0, i.jsx)(d.DUT, {
                      ...e,
                      innerRef: l,
                      className: Y.SI,
                      "aria-label": w.intl.string(w.t.DEoVWZ),
                      children: (0, i.jsx)(d.jNK, { size: "md", color: "currentColor", className: Y.D$ }),
                  }),
          })
        : null;
}
function J(e) {
    let { className: t } = e,
        a = (0, A.b8)(),
        r = (0, A.yM)(),
        o = (0, A.Y2)(),
        c = !a || r,
        u = w.intl.string(w.t["9KiIz6"]),
        g = w.intl.string(w.t.DVywUB),
        h = w.intl.string(w.t.lKDPGA),
        x = s.useCallback(() => {
            window.open(y.A.getArticleURL(V.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank");
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
                        ? w.intl.string(w.t.sK0dmH)
                        : o
                          ? w.intl.format(B.default.WM5adV, { handleOnHelpUrlHook: x })
                          : w.intl.string(w.t.XxRj7f)
                    : h,
            [a, r, o, h, x],
        ),
        C = a && !r && o;
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
                            children: w.intl.string(w.t["/52UYy"]),
                        }),
                        (0, i.jsx)("div", {
                            children: (0, i.jsxs)(d.Text, {
                                tag: "span",
                                color: "text-strong",
                                variant: "text-md/normal",
                                children: [o && a && !r ? `${w.intl.string(w.t.XxRj7f)} • ` : null, E],
                            }),
                        }),
                    ],
                }),
            }),
            C &&
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: Y.pr,
                    children: (0, i.jsx)(d.Button, {
                        variant: "secondary",
                        size: "sm",
                        text: w.intl.string(w.t.bt75uw),
                        "aria-label": w.intl.string(w.t.bt75uw),
                        onClick: p,
                    }),
                }),
            c &&
                !C &&
                (0, i.jsx)("div", {
                    "data-button-hoisted-classname-wrapper": !0,
                    className: Y.pr,
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
function $(e) {
    let { currentUser: t } = e,
        n = (0, N.Ay)(t.id),
        s = (0, f.A)(n),
        a = D.jP.useSetting(),
        l = (0, r.bG)([I.A], () => I.A.getErrors()),
        o = l?.avatar?.[0],
        { avatarSrc: c, avatarDecorationSrc: _ } = (0, b.A)({ userId: t?.id, size: d._3J.SIZE_80 }),
        m = (0, S.A)(),
        A = (0, C.fk)();
    return (0, i.jsxs)("div", {
        className: Y.DM,
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
                                        displayNameStylesType: x.G.STATIC,
                                    }),
                                    (0, i.jsx)(Q, { user: t }),
                                ],
                            }),
                            (0, i.jsx)(j.A, { badges: s, className: Y.C_, badgeClassName: Y.qS }),
                        ],
                    }),
                    (0, i.jsx)(d.Button, {
                        variant: "primary",
                        size: "sm",
                        text: w.intl.string(w.t["2p2aYz"]),
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
                            (0, i.jsx)(T.x, {
                                setting: k.H.ACCOUNT_DISPLAY_NAME,
                                children: (0, i.jsx)(K, { className: Y.mS, user: t }),
                            }),
                            (0, i.jsx)(T.x, { setting: k.H.ACCOUNT_USERNAME, children: (0, i.jsx)(W, { user: t }) }),
                            (0, i.jsx)(T.x, {
                                setting: k.H.ACCOUNT_EMAIL,
                                children: (0, i.jsx)(q, { className: Y.Zr, user: t }),
                            }),
                            (0, i.jsx)(T.x, {
                                setting: k.H.ACCOUNT_PHONE_NUMBER,
                                children: (0, i.jsx)(X, { className: Y.Zr, user: t }),
                            }),
                            A &&
                                (0, i.jsx)(T.x, {
                                    setting: k.H.ACCOUNT_AGE_GROUP,
                                    children: (0, i.jsx)(J, { className: Y.Zr }),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
