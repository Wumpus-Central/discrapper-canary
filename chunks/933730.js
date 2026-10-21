n.d(t, { A: () => h, g: () => v });
var i,
    a = n(477900),
    r = n(582128),
    l = n(492462),
    s = n(17928),
    o = n(273875),
    d = n(208756),
    c = n(798618),
    u = n(627330),
    m = n(478542),
    f = n(403581),
    g = n(775602),
    b = n(688810),
    p = n(607470),
    A = n(741231),
    P = n(59318),
    E = n(75678),
    C = n(202541);
n(92737);
var T = n(652215),
    _ = n(49999),
    O = n(105292),
    R = n(137326),
    v =
        (((i = {})[(i.NAVIGATE_TO_PERK = 0)] = "NAVIGATE_TO_PERK"),
        (i[(i.OPEN_PAYMENT_MODAL = 1)] = "OPEN_PAYMENT_MODAL"),
        i);
function h(e) {
    let {
            targetElementRef: t,
            dismissPopover: n,
            title: i,
            body: v,
            assetUrl: h,
            ctaType: N,
            ctaTextOverride: x,
            perkCardId: I,
            analyticsLocation: y,
            children: L,
        } = e,
        { analyticsLocations: M } = (0, b.Ay)(y),
        j = (0, s.bG)([g.Ay], () => g.Ay.useReducedMotion),
        U = r.useCallback(() => {
            (0, A.A)(T.BVt.NITRO_HOME, { search: (0, l.stringify)({ perk: I }) });
        }, [I]),
        S = r.useCallback(() => {
            switch ((n(_.i.TAKE_ACTION), N)) {
                case 0:
                    U();
                    break;
                case 1:
                    (0, E.A)({ subscriptionTier: C.pe.TIER_2, analyticsLocations: M, onSubscriptionConfirmation: U });
            }
        }, [M, N, n, U]),
        D =
            0 === N
                ? { text: null != x ? x : O.intl.string(O.t.pVBlCH), variant: "secondary", onClick: S }
                : {
                      text: null != x ? x : O.intl.string(O.t.hIVbiP),
                      variant: "expressive",
                      icon: f.t,
                      iconPosition: "start",
                      onClick: S,
                  };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { children: L }),
            (0, a.jsx)(o.x, {
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
                        null != h &&
                            (0, a.jsx)("div", {
                                className: R.Q,
                                children: (0, P.r1)(h)
                                    ? (0, a.jsx)(p.A, {
                                          src: h,
                                          autoPlay: !1 === j,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          "aria-hidden": !0,
                                          className: R.$,
                                      })
                                    : (0, a.jsx)("img", { src: h, alt: "", "aria-hidden": !0, className: R.$ }),
                            }),
                        (0, a.jsx)(u.D, { title: i, body: v }),
                        (0, a.jsx)(d.Z, { actions: [D] }),
                        (0, a.jsx)(c.F, {}),
                    ],
                }),
            }),
        ],
    });
}
