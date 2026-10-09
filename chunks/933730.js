n.d(t, { A: () => O, g: () => v });
var i,
    a = n(477900),
    r = n(582128),
    l = n(492462),
    o = n(17928),
    s = n(273875),
    d = n(208756),
    c = n(798618),
    u = n(627330),
    m = n(478542),
    f = n(403581),
    g = n(775602),
    b = n(688810),
    p = n(607470),
    T = n(741231),
    C = n(59318),
    P = n(75678),
    _ = n(202541);
n(92737);
var h = n(652215),
    A = n(49999),
    E = n(660183),
    x = n(137326),
    v =
        (((i = {})[(i.NAVIGATE_TO_PERK = 0)] = "NAVIGATE_TO_PERK"),
        (i[(i.OPEN_PAYMENT_MODAL = 1)] = "OPEN_PAYMENT_MODAL"),
        i);
function O(e) {
    let {
            targetElementRef: t,
            dismissPopover: n,
            title: i,
            body: v,
            assetUrl: O,
            ctaType: R,
            ctaTextOverride: N,
            perkCardId: y,
            analyticsLocation: I,
            children: S,
        } = e,
        { analyticsLocations: j } = (0, b.Ay)(I),
        L = (0, o.bG)([g.Ay], () => g.Ay.useReducedMotion),
        U = r.useCallback(() => {
            (0, T.A)(h.BVt.NITRO_HOME, { search: (0, l.stringify)({ perk: y }) });
        }, [y]),
        M = r.useCallback(() => {
            switch ((n(A.i.TAKE_ACTION), R)) {
                case 0:
                    U();
                    break;
                case 1:
                    (0, P.A)({ subscriptionTier: _.pe.TIER_2, analyticsLocations: j, onSubscriptionConfirmation: U });
            }
        }, [j, R, n, U]),
        D =
            0 === R
                ? { text: null != N ? N : E.intl.string(E.t.pVBlCH), variant: "secondary", onClick: M }
                : {
                      text: null != N ? N : E.intl.string(E.t.hIVbiP),
                      variant: "expressive",
                      icon: f.t,
                      iconPosition: "start",
                      onClick: M,
                  };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", { children: S }),
            (0, a.jsx)(s.x, {
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
                        null != O &&
                            (0, a.jsx)("div", {
                                className: x.Q,
                                children: (0, C.r1)(O)
                                    ? (0, a.jsx)(p.A, {
                                          src: O,
                                          autoPlay: !1 === L,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          "aria-hidden": !0,
                                          className: x.$,
                                      })
                                    : (0, a.jsx)("img", { src: O, alt: "", "aria-hidden": !0, className: x.$ }),
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
