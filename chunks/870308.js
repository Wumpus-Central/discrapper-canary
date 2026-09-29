n.d(t, { A: () => E });
var i = n(582128),
    r = n(379197),
    a = n(488430),
    s = n(17928),
    l = n(554146),
    o = n(192308),
    d = n(131607),
    c = n(457421),
    u = n(212407),
    _ = n(966971);
let E = function () {
    let e = (0, s.bG)([c.A], () => c.A.getMarketingBySurface(r.R.DESKTOP_SHOP_BUTTON)),
        t = !(0, o.hasAnyModalOpen)(),
        [n, E] = (0, d.RF)(t ? l.M.COLLECTIBLES_SHOP_ENTRY_MARKETING : null, e?.version ?? 0, void 0, !0),
        A = (0, u.bv)(e),
        h =
            null != n
                ? (function (e, t) {
                      if (t?.type === a.G.BADGE)
                          return {
                              type: _.FF.BADGE,
                              badgeIcon: t.badgeIcon,
                              badgeText: t.badgeText,
                              badgeCountdownEndsAt: t.badgeCountdownEndsAt,
                              entrypointBackgroundStyle: t.refTargetBackground?.style,
                              entryPointBackgroundAssets: {
                                  srcDark: e.buttonBGRestingDark,
                                  srcLight: e.buttonBGRestingLight,
                                  srcDarkHovered: e.buttonBGHoverDark,
                                  srcLightHovered: e.buttonBGHoverLight,
                              },
                              showHoverGradient: t.showHoverGradient,
                          };
                      if (t?.type === a.G.COACHMARK) {
                          let e = t.refTargetBackground;
                          return {
                              type: _.FF.COACHMARK,
                              title: () => t.title,
                              body: () => t.body,
                              assetDark: t.assetDark,
                              assetLight: t.assetLight,
                              buttonLabel: t.buttonLabel,
                              badgeIcon: t.badgeIcon,
                              badgeText: t.badgeText,
                              badgeCountdownEndsAt: t.badgeCountdownEndsAt,
                              showHoverGradient: t.showHoverGradient,
                              version: t.version,
                              displayType: t.displayType,
                              entrypointBackgroundStyle: e?.style,
                              entryPointBackgroundAssets: {
                                  srcDarkHovered: e?.asset?.hovered?.dark,
                                  srcLightHovered: e?.asset?.hovered?.light,
                              },
                          };
                      }
                      return t?.type === a.G.TAB_TOOLTIP
                          ? {
                                type: _.FF.TAB_TOOLTIP,
                                title: () => t.title,
                                body: () => t.body,
                                asset: t.asset,
                                badgeIcon: t.badgeIcon,
                                badgeText: t.badgeText,
                                badgeCountdownEndsAt: t.badgeCountdownEndsAt,
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
                  })(A, e)
                : null,
        I = i.useCallback(
            (e) => {
                null != h && E(e);
            },
            [h, E],
        );
    return { shopButtonDisplayOptions: h, dismissShopButtonDC: I };
};
