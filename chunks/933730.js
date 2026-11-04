var i,
    a = n(477900),
    r = n(582128),
    l = n(492462),
    o = n(855986),
    s = n(195118),
    d = n(208756),
    c = n(31188),
    u = n(627330),
    m = n(478542),
    f = n(403581),
    g = n(775602),
    b = n(688810),
    p = n(607470),
    A = n(362280),
    P = n(273185),
    E = n(778705),
    C = n(682901);
n(92737);
var T = n(652215),
    _ = n(49999),
    O = n(792996),
    R = n(137326),
    h =
        (((i = {})[(i.NAVIGATE_TO_PERK = 0)] = "NAVIGATE_TO_PERK"),
        (i[(i.OPEN_PAYMENT_MODAL = 1)] = "OPEN_PAYMENT_MODAL"),
        i);
n.d(
    t,
    {},
    {
        A: function (e) {
            let {
                    targetElementRef: t,
                    dismissPopover: n,
                    title: i,
                    body: h,
                    assetUrl: v,
                    ctaType: N,
                    ctaTextOverride: x,
                    perkCardId: I,
                    analyticsLocation: y,
                    children: L,
                } = e,
                { analyticsLocations: M } = (0, b.Ay)(y),
                j = (0, o.bG)([g.Ay], () => g.Ay.useReducedMotion),
                S = r.useCallback(() => {
                    (0, A.A)(T.BVt.NITRO_HOME, { search: (0, l.As)({ perk: I }) });
                }, [I]),
                U = r.useCallback(() => {
                    switch ((n(_.i.TAKE_ACTION), N)) {
                        case 0:
                            S();
                            break;
                        case 1:
                            (0, E.A)({
                                subscriptionTier: C.pe.TIER_2,
                                analyticsLocations: M,
                                onSubscriptionConfirmation: S,
                            });
                    }
                }, [M, N, n, S]),
                D =
                    0 === N
                        ? { text: null != x ? x : O.intl.string(O.t.pVBlCH), variant: "secondary", onClick: U }
                        : {
                              text: null != x ? x : O.intl.string(O.t.hIVbiP),
                              variant: "expressive",
                              icon: f.t,
                              iconPosition: "start",
                              onClick: U,
                          };
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)("div", { children: L }),
                    (0, a.jsx)(s.x, {
                        targetElementRef: t,
                        onRequestClose: () => n(_.i.USER_DISMISS),
                        alignmentStrategy: "edge",
                        align: "top",
                        position: "right",
                        caretConfig: { align: "start" },
                        children: (0, a.jsxs)("div", {
                            "data-mana-component": "popover",
                            children: [
                                (0, a.jsx)(m.p, { onClick: () => n(_.i.USER_DISMISS) }),
                                null != v &&
                                    (0, a.jsx)("div", {
                                        className: R.Q,
                                        children: (0, P.r1)(v)
                                            ? (0, a.jsx)(p.A, {
                                                  src: v,
                                                  autoPlay: !1 === j,
                                                  loop: !0,
                                                  muted: !0,
                                                  playsInline: !0,
                                                  "aria-hidden": !0,
                                                  className: R.$,
                                              })
                                            : (0, a.jsx)("img", { src: v, alt: "", "aria-hidden": !0, className: R.$ }),
                                    }),
                                (0, a.jsx)(u.D, { title: i, body: h }),
                                (0, a.jsx)(d.Z, { actions: [D] }),
                                (0, a.jsx)(c.F, {}),
                            ],
                        }),
                    }),
                ],
            });
        },
        g: h,
    },
);
