var i,
    a = n(477900),
    l = n(582128),
    r = n(492462),
    s = n(855986),
    o = n(195118),
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
var O = n(652215),
    T = n(49999),
    C = n(792996),
    R = n(137326),
    N =
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
                    body: N,
                    assetUrl: h,
                    ctaType: v,
                    ctaTextOverride: I,
                    perkCardId: x,
                    analyticsLocation: M,
                    children: y,
                } = e,
                { analyticsLocations: L } = (0, b.Ay)(M),
                S = (0, s.bG)([g.Ay], () => g.Ay.useReducedMotion),
                j = l.useCallback(() => {
                    (0, p.A)(O.BVt.NITRO_HOME, { search: (0, r.As)({ perk: x }) });
                }, [x]),
                U = l.useCallback(() => {
                    switch ((n(T.i.TAKE_ACTION), v)) {
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
                        ? { text: null != I ? I : C.intl.string(C.t.pVBlCH), variant: "secondary", onClick: U }
                        : {
                              text: null != I ? I : C.intl.string(C.t.hIVbiP),
                              variant: "expressive",
                              icon: m.NitroWheelIcon,
                              iconPosition: "start",
                              onClick: U,
                          };
            return (0, a.jsxs)(a.Fragment, {
                children: [
                    (0, a.jsx)("div", { children: y }),
                    (0, a.jsx)(o.x, {
                        targetElementRef: t,
                        onRequestClose: () => n(T.i.USER_DISMISS),
                        alignmentStrategy: "edge",
                        align: "top",
                        position: "right",
                        caretConfig: { align: "start" },
                        children: (0, a.jsxs)("div", {
                            "data-mana-component": "popover",
                            children: [
                                (0, a.jsx)(f.p, { onClick: () => n(T.i.USER_DISMISS) }),
                                null != h &&
                                    (0, a.jsx)("div", {
                                        className: R.Q,
                                        children: (0, P.r1)(h)
                                            ? (0, a.jsx)(A.A, {
                                                  src: h,
                                                  autoPlay: !1 === S,
                                                  loop: !0,
                                                  muted: !0,
                                                  playsInline: !0,
                                                  "aria-hidden": !0,
                                                  className: R.$,
                                              })
                                            : (0, a.jsx)("img", { src: h, alt: "", "aria-hidden": !0, className: R.$ }),
                                    }),
                                (0, a.jsx)(u.D, { title: i, body: N }),
                                (0, a.jsx)(d.Z, { actions: [D] }),
                                (0, a.jsx)(c.F, {}),
                            ],
                        }),
                    }),
                ],
            });
        },
        g: N,
    },
);
