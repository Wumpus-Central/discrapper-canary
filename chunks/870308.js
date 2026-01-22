n.d(t, {
    A: () => h,
}),
    n(896048);
var r = n(64700),
    i = n(379197),
    l = n(488430),
    a = n(311907),
    s = n(554146),
    o = n(397927),
    c = n(379848),
    u = n(457421),
    d = n(212407),
    p = n(158216),
    f = n(49999);
let h = () => {
    var e;
    let t = (0, a.bG)([u.A], () => u.A.getMarketingBySurface(i.R.DESKTOP_SHOP_BUTTON)),
        n = !(0, o.ueM)(),
        [h, A] = (0, c.RF)(
            n ? s.M.COLLECTIBLES_SHOP_ENTRY_MARKETING : null,
            null != (e = null == t ? void 0 : t.version) ? e : 0,
            void 0,
            !0,
        ),
        g = (0, d.bv)(t),
        m =
            null != h
                ? ((e, t) => {
                      var n, r, i, a, s, o, c, u;
                      if ((null == t ? void 0 : t.type) === l.G.COACHTIP || e.hasPreviewAssets) {
                          let i =
                              null != t
                                  ? {
                                        title: () => t.title,
                                        body: () => t.body,
                                        assetIds: t.decorations,
                                        entrypointBackgroundStyle:
                                            null == (r = t.refTargetBackground) ? void 0 : r.style,
                                    }
                                  : {
                                        title: () => "",
                                        assetIds: [],
                                    };
                          return (
                              (c = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              }),
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })(
                                  {
                                      type: p.FF.COACHTIP,
                                  },
                                  i,
                              )),
                              (u = u =
                                  {
                                      imageSrc: null != (n = e.coachtipAvatar) ? n : "",
                                      badgeIcon: null == t ? void 0 : t.badgeIcon,
                                      badgeText: null == t ? void 0 : t.badgeText,
                                      entryPointBackgroundAssets: {
                                          srcDark: e.buttonBGRestingDark,
                                          srcLight: e.buttonBGRestingLight,
                                          srcDarkHovered: e.buttonBGHoverDark,
                                          srcLightHovered: e.buttonBGHoverLight,
                                      },
                                  }),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(u))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(u)).forEach(function (e) {
                                        Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(u, e));
                                    }),
                              c
                          );
                      }
                      if ((null == t ? void 0 : t.type) === l.G.COACHMARK) {
                          let e = t.refTargetBackground;
                          return {
                              type: p.FF.COACHMARK,
                              title: () => t.title,
                              body: () => t.body,
                              assetDark: t.assetDark,
                              assetLight: t.assetLight,
                              badgeIcon: t.badgeIcon,
                              badgeText: t.badgeText,
                              entrypointBackgroundStyle: null == e ? void 0 : e.style,
                              entryPointBackgroundAssets: {
                                  srcDarkHovered:
                                      null == e || null == (a = e.asset) || null == (i = a.hovered) ? void 0 : i.dark,
                                  srcLightHovered:
                                      null == e || null == (o = e.asset) || null == (s = o.hovered) ? void 0 : s.light,
                              },
                          };
                      }
                      return null;
                  })(g, t)
                : null,
        b = r.useCallback(() => {
            null != m && A(f.i.AUTO);
        }, [m, A]);
    return {
        shopButtonDisplayOptions: m,
        dismissShopButtonDC: b,
    };
};
