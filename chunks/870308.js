l.d(t, { A: () => A });
var a = l(64700),
    r = l(379197),
    n = l(488430),
    s = l(17928),
    o = l(554146),
    i = l(192308),
    d = l(932001),
    c = l(457421),
    h = l(212407),
    g = l(158216),
    u = l(49999);
let A = () => {
    let e = (0, s.bG)([c.A], () => c.A.getMarketingBySurface(r.R.DESKTOP_SHOP_BUTTON)),
        t = !(0, i.hasAnyModalOpen)(),
        [l, A] = (0, d.RF)(t ? o.M.COLLECTIBLES_SHOP_ENTRY_MARKETING : null, e?.version ?? 0, void 0, !0),
        R = (0, h.bv)(e),
        T =
            null != l
                ? ((e, t) => {
                      if (t?.type === n.G.COACHMARK) {
                          let e = t.refTargetBackground;
                          return {
                              type: g.FF.COACHMARK,
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
                      return t?.type === n.G.TAB_TOOLTIP
                          ? {
                                type: g.FF.TAB_TOOLTIP,
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
                  })(R, e)
                : null,
        m = a.useCallback(() => {
            null != T && A(u.i.AUTO);
        }, [T, A]);
    return { shopButtonDisplayOptions: T, dismissShopButtonDC: m };
};
