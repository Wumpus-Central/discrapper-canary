n.d(t, { A: () => _ });
var i = n(64700),
    r = n(379197),
    l = n(488430),
    a = n(311907),
    s = n(554146),
    o = n(397927),
    d = n(379848),
    c = n(457421),
    u = n(212407),
    A = n(158216),
    h = n(49999);
let _ = () => {
    let e = (0, a.bG)([c.A], () => c.A.getMarketingBySurface(r.R.DESKTOP_SHOP_BUTTON)),
        t = !(0, o.ueM)(),
        [n, _] = (0, d.RF)(t ? s.M.COLLECTIBLES_SHOP_ENTRY_MARKETING : null, e?.version ?? 0, void 0, !0),
        m = (0, u.bv)(e),
        p =
            null != n
                ? ((e, t) => {
                      if (t?.type === l.G.COACHTIP || e.hasPreviewAssets) {
                          let n =
                              null != t
                                  ? {
                                        title: () => t.title,
                                        body: () => t.body,
                                        assetIds: t.decorations,
                                        avatarDecorationSkuIds: t.avatarDecorationSkuIds,
                                        entrypointBackgroundStyle: t.refTargetBackground?.style,
                                    }
                                  : { title: () => "", assetIds: [] };
                          return {
                              type: A.FF.COACHTIP,
                              ...n,
                              imageSrc: e.coachtipAvatar ?? "",
                              badgeIcon: t?.badgeIcon,
                              badgeText: t?.badgeText,
                              entryPointBackgroundAssets: {
                                  srcDark: e.buttonBGRestingDark,
                                  srcLight: e.buttonBGRestingLight,
                                  srcDarkHovered: e.buttonBGHoverDark,
                                  srcLightHovered: e.buttonBGHoverLight,
                              },
                          };
                      }
                      if (t?.type === l.G.COACHMARK) {
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
                      return null;
                  })(m, e)
                : null,
        g = i.useCallback(() => {
            null != p && _(h.i.AUTO);
        }, [p, _]);
    return { shopButtonDisplayOptions: p, dismissShopButtonDC: g };
};
