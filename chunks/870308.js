"use strict";
n.d(t, { A: () => h });
var i = n(64700),
    r = n(379197),
    s = n(488430),
    a = n(17928),
    o = n(554146),
    l = n(192308),
    u = n(131607),
    c = n(457421),
    d = n(212407),
    _ = n(966971),
    f = n(49999);
let h = () => {
    let e = (0, a.bG)([c.A], () => c.A.getMarketingBySurface(r.R.DESKTOP_SHOP_BUTTON)),
        t = !(0, l.hasAnyModalOpen)(),
        [n, h] = (0, u.RF)(t ? o.M.COLLECTIBLES_SHOP_ENTRY_MARKETING : null, e?.version ?? 0, void 0, !0),
        p = (0, d.bv)(e),
        E =
            null != n
                ? ((e, t) => {
                      if (t?.type === s.G.COACHMARK) {
                          let e = t.refTargetBackground;
                          return {
                              type: _.FF.COACHMARK,
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
                      return t?.type === s.G.TAB_TOOLTIP
                          ? {
                                type: _.FF.TAB_TOOLTIP,
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
                  })(p, e)
                : null,
        m = i.useCallback(() => {
            null != E && h(f.i.AUTO);
        }, [E, h]);
    return { shopButtonDisplayOptions: E, dismissShopButtonDC: m };
};
