n.d(t, { A: () => _ });
var i = n(64700),
    r = n(379197),
    a = n(488430),
    l = n(311907),
    s = n(554146),
    o = n(397927),
    d = n(932001),
    c = n(457421),
    u = n(212407),
    A = n(158216),
    h = n(49999);
let _ = () => {
    let e = (0, l.bG)([c.A], () => c.A.getMarketingBySurface(r.R.DESKTOP_SHOP_BUTTON)),
        t = !(0, o.ueM)(),
        [n, _] = (0, d.RF)(t ? s.M.COLLECTIBLES_SHOP_ENTRY_MARKETING : null, e?.version ?? 0, void 0, !0),
        m = (0, u.bv)(e),
        p =
            null != n
                ? ((e, t) => {
                      if (t?.type === a.G.COACHMARK) {
                          let e = t.refTargetBackground;
                          return {
                              type: A.FF.COACHMARK,
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
                      return t?.type === a.G.TAB_TOOLTIP
                          ? {
                                type: A.FF.TAB_TOOLTIP,
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
                  })(m, e)
                : null,
        g = i.useCallback(() => {
            null != p && _(h.i.AUTO);
        }, [p, _]);
    return { shopButtonDisplayOptions: p, dismissShopButtonDC: g };
};
