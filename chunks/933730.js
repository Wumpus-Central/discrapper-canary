var i,
    a = n(477900),
    l = n(582128),
    r = n(492462),
    o = n(855986),
    s = n(195118),
    d = n(208756),
    c = n(31188),
    u = n(627330),
    f = n(478542),
    m = n(403581),
    g = n(775602),
    b = n(688810),
    A = n(607470),
    p = n(362280),
    P = n(273185),
    E = n(778705),
    _ = n(682901);
n(92737);
var T = n(652215),
    C = n(49999),
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
                    assetUrl: N,
                    ctaType: v,
                    ctaTextOverride: x,
                    perkCardId: I,
                    analyticsLocation: M,
                    children: y,
                } = e,
                { analyticsLocations: L } = (0, b.Ay)(M),
                S = (0, o.bG)([g.Ay], () => g.Ay.useReducedMotion),
                j = l.useCallback(() => {
                    (0, p.A)(T.BVt.NITRO_HOME, { search: (0, r.As)({ perk: I }) });
                }, [I]),
                U = l.useCallback(() => {
                    switch ((n(C.i.TAKE_ACTION), v)) {
                        case 0:
                            j();
                            break;
                        case 1:
                            (0, E.A)({
                                subscriptionTier: _.pe.TIER_2,
                                analyticsLocations: L,
                                onSubscriptionConfirmation: j,
                            });
                    }
                }, [L, v, n, j]),
                D =
                    0 === v
                        ? { text: null != x ? x : O.intl.string(O.t.pVBlCH), variant: "secondary", onClick: U }
                        : {
                              text: null != x ? x : O.intl.string(O.t.hIVbiP),
                              variant: "expressive",
                              icon: m.NitroWheelIcon,
                              iconPosition: "start",
                              onClick: U,
                          };
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)("div", { children: y }),
                    (0, a.jsx)(s.x, {
                        targetElementRef: t,
                        onRequestClose: () => n(C.i.USER_DISMISS),
                        alignmentStrategy: "edge",
                        align: "top",
                        position: "right",
                        caretConfig: { align: "start" },
                        children: (0, a.jsxs)("div", {
                            "data-mana-component": "popover",
                            children: [
                                (0, a.jsx)(f.p, { onClick: () => n(C.i.USER_DISMISS) }),
                                null != N &&
                                    (0, a.jsx)("div", {
                                        className: R.Q,
                                        children: (0, P.r1)(N)
                                            ? (0, a.jsx)(A.A, {
                                                  src: N,
                                                  autoPlay: !1 === S,
                                                  loop: !0,
                                                  muted: !0,
                                                  playsInline: !0,
                                                  "aria-hidden": !0,
                                                  className: R.$,
                                              })
                                            : (0, a.jsx)("img", { src: N, alt: "", "aria-hidden": !0, className: R.$ }),
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
