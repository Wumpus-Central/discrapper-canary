n.d(t, { Z: () => C }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(793030),
    l = n(442837),
    s = n(681715),
    o = n(481060),
    c = n(906732),
    d = n(104505),
    u = n(863886),
    m = n(277511),
    p = n(594174),
    h = n(164670),
    f = n(927613),
    x = n(848118),
    b = n(582113),
    g = n(228168),
    v = n(388032),
    j = n(702631);
function y(e) {
    let { sku: t, handleOpenUserProfileModal: n, analyticsLocations: l } = e,
        p = r.useRef(null),
        { analyticsLocations: h } = (0, c.ZP)(null != l ? l : []),
        { isHoveringOrFocusing: f } = (0, d.Z)(p),
        [b, y] = r.useState(!1),
        C = r.useCallback(
            async (e) => {
                if ((e.stopPropagation(), !b)) {
                    y(!0);
                    try {
                        await m.Z.addSkuToWishlist(t.id, h), n({ tabSection: g.oh.WISHLIST });
                    } catch (e) {
                        (0, o.showToast)((0, o.createToast)(v.intl.string(v.t.F8FvUy), o.ToastType.FAILURE)),
                            i.uvj.announce(v.intl.string(v.t.F8FvUy));
                    } finally {
                        y(!1);
                    }
                }
            },
            [t.id, h, n, b],
        );
    return (0, a.jsx)(s.u, {
        __unsupportedReactNodeAsText: (0, a.jsxs)("div", {
            className: j.tooltipContent,
            children: [
                (0, a.jsx)(i.xvT, {
                    variant: "text-sm/medium",
                    children: v.intl.string(v.t["8DkMEQ"]),
                }),
                (0, a.jsx)(i.xvT, {
                    variant: "text-sm/normal",
                    lineClamp: 1,
                    color: "text-default",
                    children: t.name,
                }),
            ],
        }),
        position: "top",
        asContainer: !0,
        children: (0, a.jsxs)(i.kL8, {
            className: j.card,
            ref: p,
            "aria-label": t.name,
            onClick: C,
            children: [
                (0, a.jsx)(
                    x.A,
                    {
                        shape: "custom",
                        containerClassName: j.card,
                        foregroundImageClassName: j.cardImage,
                        backgroundImageClassName: j.cardBackgroundImage,
                        sku: t,
                    },
                    t.id,
                ),
                (f || b) &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("div", { className: j.highlightOverlay }),
                            (0, a.jsx)("div", {
                                className: j.plusIconContainer,
                                children: b ? (0, a.jsx)(u.T, {}) : (0, a.jsx)(i.svS, { size: "lg" }),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
function C(e) {
    let { wishlist: t, handleOpenUserProfileModal: n, analyticsLocations: i } = e,
        s = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        o = (0, f.Z)({
            guildId: (0, h.ac)(),
            numWishlistItems: 9,
            location: "SocialLayerAddToWishlistGrid",
            applicationId: b.t9,
            userIds: null != s ? [s.id] : void 0,
            includeWishlists: !1,
        }),
        c = r.useMemo(() => {
            var e;
            return new Set(null != (e = null == t ? void 0 : t.items.map((e) => e.skuId)) ? e : []);
        }, [t]),
        d = o.recommendations.filter((e) => !c.has(e.skuId));
    return "success" !== o.state
        ? (0, a.jsx)("div", {
              className: j.loadingContainer,
              children: (0, a.jsx)(u.T, {}),
          })
        : (0, a.jsx)("ul", {
              className: j.grid,
              children: d.map((e) =>
                  (0, a.jsx)(
                      y,
                      {
                          sku: e.sku,
                          handleOpenUserProfileModal: n,
                          analyticsLocations: i,
                      },
                      e.skuId,
                  ),
              ),
          });
}
