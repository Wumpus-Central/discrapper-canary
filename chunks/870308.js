n.d(t, { A: () => A });
var i = n(64700),
    a = n(379197),
    r = n(488430),
    s = n(17928),
    l = n(554146),
    o = n(192308),
    d = n(932001),
    c = n(457421),
    _ = n(212407),
    E = n(158216),
    u = n(49999);
let A = () => {
    let e = (0, s.bG)([c.A], () => c.A.getMarketingBySurface(a.R.DESKTOP_SHOP_BUTTON)),
        t = !(0, o.hasAnyModalOpen)(),
        [n, A] = (0, d.RF)(t ? l.M.COLLECTIBLES_SHOP_ENTRY_MARKETING : null, e?.version ?? 0, void 0, !0),
        I = (0, _.bv)(e),
        T =
            null != n
                ? ((e, t) => {
                      if (t?.type === r.G.COACHMARK) {
                          let e = t.refTargetBackground;
                          return {
                              type: E.FF.COACHMARK,
                              title: () => t.title,
                              body: () => t.body,
                              assetDark: t.assetDark,
                              assetLight: t.assetLight,
                              badgeIcon: t.badgeIcon,
                              badgeText: t.badgeText,
                              entrypointBackgroundStyle: e?.style,
                              entryPointBackgroundAssets: {
                                  srcDarkHovered: e?.asset?.hovered?.dark,
                                  srcLightHovered: e?.asset?.hovered?.light,
                              },
                          };
                      }
                      return t?.type === r.G.TAB_TOOLTIP
                          ? {
                                type: E.FF.TAB_TOOLTIP,
                                title: () => t.title,
                                body: () => t.body,
                                asset: t.asset,
                                badgeIcon: t.badgeIcon,
                                badgeText: t.badgeText,
                                entrypointBackgroundStyle: t.refTargetBackground?.style,
                                entryPointBackgroundAssets: {
                                    srcDark: e.buttonBGRestingDark,
                                    srcLight: e.buttonBGRestingLight,
                                    srcDarkHovered: e.buttonBGHoverDark,
                                    srcLightHovered: e.buttonBGHoverLight,
                                },
                                showHoverGradient: t.showHoverGradient,
                            }
                          : null;
                  })(I, e)
                : null,
        h = i.useCallback(() => {
            null != T && A(u.i.AUTO);
        }, [T, A]);
    return { shopButtonDisplayOptions: T, dismissShopButtonDC: h };
};
