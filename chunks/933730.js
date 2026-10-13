n.d(t, { A: () => v, g: () => O });
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
    P = n(741231),
    _ = n(59318),
    T = n(75678),
    C = n(202541);
n(92737);
var E = n(652215),
    A = n(49999),
    h = n(660183),
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
            ctaType: N,
            ctaTextOverride: R,
            perkCardId: I,
            analyticsLocation: y,
            children: S,
        } = e,
        { analyticsLocations: j } = (0, b.Ay)(y),
        L = (0, s.bG)([g.Ay], () => g.Ay.useReducedMotion),
        M = r.useCallback(() => {
            (0, P.A)(E.BVt.NITRO_HOME, { search: (0, l.stringify)({ perk: I }) });
        }, [I]),
        U = r.useCallback(() => {
            switch ((n(A.i.TAKE_ACTION), N)) {
                case 0:
                    M();
                    break;
                case 1:
                    (0, T.A)({ subscriptionTier: C.pe.TIER_2, analyticsLocations: j, onSubscriptionConfirmation: M });
            }
        }, [j, N, n, M]),
        w =
            0 === N
                ? { text: null != R ? R : h.intl.string(h.t.pVBlCH), variant: "secondary", onClick: U }
                : {
                      text: null != R ? R : h.intl.string(h.t.hIVbiP),
                      variant: "expressive",
                      icon: f.t,
                      iconPosition: "start",
                      onClick: U,
                  };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { children: S }),
            (0, a.jsx)(o.x, {
                targetElementRef: t,
                onRequestClose: () => n(A.i.USER_DISMISS),
                alignmentStrategy: "edge",
                align: "top",
                position: "right",
                caretConfig: { align: "start" },
                children: (0, a.jsxs)("div", {
                    "data-mana-component": "popover",
                    children: [
                        (0, a.jsx)(m.p, { onClick: () => n(A.i.USER_DISMISS) }),
                        null != v &&
                            (0, a.jsx)("div", {
                                className: x.Q,
                                children: (0, _.r1)(v)
                                    ? (0, a.jsx)(p.A, {
                                          src: v,
                                          autoPlay: !1 === L,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          "aria-hidden": !0,
                                          className: x.$,
                                      })
                                    : (0, a.jsx)("img", { src: v, alt: "", "aria-hidden": !0, className: x.$ }),
                            }),
                        (0, a.jsx)(u.D, { title: i, body: O }),
                        (0, a.jsx)(d.Z, { actions: [w] }),
                        (0, a.jsx)(c.F, {}),
                    ],
                }),
            }),
        ],
    });
}
