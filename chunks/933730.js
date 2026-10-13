n.d(t, { A: () => v, g: () => O });
var i,
    r = n(477900),
    a = n(582128),
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
    P = n(741231),
    T = n(59318),
    _ = n(75678),
    C = n(202541);
n(92737);
var A = n(652215),
    h = n(49999),
    E = n(660183),
    x = n(137326),
    O =
        (((i = {})[(i.NAVIGATE_TO_PERK = 0)] = "NAVIGATE_TO_PERK"),
        (i[(i.OPEN_PAYMENT_MODAL = 1)] = "OPEN_PAYMENT_MODAL"),
        i);
function v(e) {
    let {
            targetElementRef: t,
            dismissPopover: n,
            title: i,
            body: O,
            assetUrl: v,
            ctaType: R,
            ctaTextOverride: N,
            perkCardId: I,
            analyticsLocation: y,
            children: S,
        } = e,
        { analyticsLocations: j } = (0, b.Ay)(y),
        L = (0, s.bG)([g.Ay], () => g.Ay.useReducedMotion),
        M = a.useCallback(() => {
            (0, P.A)(A.BVt.NITRO_HOME, { search: (0, l.stringify)({ perk: I }) });
        }, [I]),
        U = a.useCallback(() => {
            switch ((n(h.i.TAKE_ACTION), R)) {
                case 0:
                    M();
                    break;
                case 1:
                    (0, _.A)({ subscriptionTier: C.pe.TIER_2, analyticsLocations: j, onSubscriptionConfirmation: M });
            }
        }, [j, R, n, M]),
        w =
            0 === R
                ? { text: null != N ? N : E.intl.string(E.t.pVBlCH), variant: "secondary", onClick: U }
                : {
                      text: null != N ? N : E.intl.string(E.t.hIVbiP),
                      variant: "expressive",
                      icon: f.t,
                      iconPosition: "start",
                      onClick: U,
                  };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", { children: S }),
            (0, r.jsx)(o.x, {
                targetElementRef: t,
                onRequestClose: () => n(h.i.USER_DISMISS),
                alignmentStrategy: "edge",
                align: "top",
                position: "right",
                caretConfig: { align: "start" },
                children: (0, r.jsxs)("div", {
                    "data-mana-component": "popover",
                    children: [
                        (0, r.jsx)(m.p, { onClick: () => n(h.i.USER_DISMISS) }),
                        null != v &&
                            (0, r.jsx)("div", {
                                className: x.Q,
                                children: (0, T.r1)(v)
                                    ? (0, r.jsx)(p.A, {
                                          src: v,
                                          autoPlay: !1 === L,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          "aria-hidden": !0,
                                          className: x.$,
                                      })
                                    : (0, r.jsx)("img", { src: v, alt: "", "aria-hidden": !0, className: x.$ }),
                            }),
                        (0, r.jsx)(u.D, { title: i, body: O }),
                        (0, r.jsx)(d.Z, { actions: [w] }),
                        (0, r.jsx)(c.F, {}),
                    ],
                }),
            }),
        ],
    });
}
