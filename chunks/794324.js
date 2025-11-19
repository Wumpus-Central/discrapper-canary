n.d(t, {
    Oi: () => p,
    UI: () => m,
    YG: () => d,
    _M: () => g,
    hr: () => u,
    kc: () => f,
    mB: () => h,
});
var r = n(473749),
    i = n(264181),
    l = n(884697),
    a = n(15400),
    s = n(619899),
    o = n(281598),
    c = n(215023);
let u = (e) => {
        let t = (0, s.zL)(o.jE.HERO_LOGO),
            n = (0, s.zL)(o.jE.HERO_BANNER_STATIC),
            i = (0, s.zL)(o.jE.HERO_BANNER_ANIMATED),
            l = (0, a.Y)("HeroBlock");
        return r.useMemo(() => {
            var r, a;
            let s = null != n || null != i,
                o = null != n && null == i;
            if (l)
                return {
                    bannerStyleOverrides: s ? void 0 : e.bannerDisplayConfig,
                    logoStyleOverrides: s ? void 0 : e.logoDisplayConfig,
                    heroLogo: null != t ? t : e.heroLogoUrl,
                    heroBannerStatic: null != n ? n : e.heroBannerUrl,
                    heroBannerAnimated: o ? void 0 : null != i ? i : e.heroBannerAnimatedUrl,
                    heroBannerRive: null != i ? i : e.heroRiveUrl,
                };
            let c = null == (r = e.bannerAsset) ? void 0 : r.animated,
                u = (null == c ? void 0 : c.endsWith(".riv")) ? c : e.heroRiveUrl;
            return {
                bannerStyleOverrides: s ? void 0 : e.bannerDisplayConfig,
                logoStyleOverrides: s ? void 0 : e.logoDisplayConfig,
                heroLogo: null != t ? t : e.logoUrl,
                heroBannerStatic: null != n ? n : null == (a = e.bannerAsset) ? void 0 : a.static,
                heroBannerAnimated: o ? void 0 : null != i ? i : c,
                heroBannerRive: o ? void 0 : null != i ? i : u,
            };
        }, [t, n, i, e, l]);
    },
    d = (e, t) => {
        var n, r;
        let i = (0, s.zL)(o.jE.FEATURED_BLOCK);
        if ((0, a.Y)("FeaturedBlock"))
            return null != (n = null != i ? i : null == t ? void 0 : t.assetUrl)
                ? n
                : null == e
                  ? void 0
                  : e.featuredBlockUrl;
        let u = (0, l.uV)(null == e ? void 0 : e.featuredBlock, {
            size: c.J0,
            format: "png",
        });
        return null != (r = null != i ? i : null == t ? void 0 : t.bannerUrl) ? r : u;
    },
    p = (e) => {
        var t, n;
        let r = (0, s.zL)(o.jE.CATALOG_BANNER_STATIC),
            i = (0, s.zL)(o.jE.CATALOG_BANNER_ANIMATED);
        return (0, a.Y)("CatalogBanner")
            ? {
                  catalogBannerStatic: null != r ? r : e.catalogBannerUrl,
                  catalogBannerAnimated: null != i ? i : e.catalogBannerAnimatedUrl,
              }
            : {
                  catalogBannerStatic: null != r ? r : null == (t = e.catalogBannerAsset) ? void 0 : t.static,
                  catalogBannerAnimated: null != i ? i : null == (n = e.catalogBannerAsset) ? void 0 : n.animated,
              };
    },
    f = (e) => {
        let t = (0, s.zL)(o.jE.PDP_BACKGROUND),
            n = (0, a.Y)("PDPBackground");
        if (null != t) return t;
        if (n) return e.pdpBgUrl;
        let r = e.pdpBg;
        return (null == r ? void 0 : r.startsWith("http"))
            ? r
            : (0, l.uV)(r, {
                  size: 540,
                  format: "jpg",
              });
    },
    h = (e) => {
        let t = (0, s.zL)(o.jE.SHOP_BUTTON_BG_HOVER),
            n = (0, s.zL)(o.jE.SHOP_BUTTON_BG_HOVER_DARK),
            l = (0, s.zL)(o.jE.SHOP_BUTTON_BG_HOVER_LIGHT),
            a = (0, s.zL)(o.jE.SHOP_BUTTON_BG_RESTING),
            c = (0, s.zL)(o.jE.SHOP_BUTTON_BG_RESTING_DARK),
            u = (0, s.zL)(o.jE.SHOP_BUTTON_BG_RESTING_LIGHT),
            d = (0, s.zL)(o.jE.COACHTIP_AVATAR);
        return r.useMemo(() => {
            var r, s, o, p, f;
            let h = [t, n, l, a, c, u, d].some((e) => null != e);
            if ((null == e ? void 0 : e.type) === i.Z.COACHMARK) return { hasPreviewAssets: !1 };
            let g = null == e || null == (r = e.refTargetBackground) ? void 0 : r.asset,
                m = null == g ? void 0 : g.resting,
                _ = null == g ? void 0 : g.hovered;
            return {
                hasPreviewAssets: h,
                buttonBGHoverDark: null != (s = null != n ? n : t) ? s : null == _ ? void 0 : _.dark,
                buttonBGHoverLight: null != (o = null != l ? l : t) ? o : null == _ ? void 0 : _.light,
                buttonBGRestingDark: null != (p = null != c ? c : a) ? p : null == m ? void 0 : m.dark,
                buttonBGRestingLight: null != (f = null != u ? u : a) ? f : null == m ? void 0 : m.light,
                coachtipAvatar: null != d ? d : null == e ? void 0 : e.avatar,
            };
        }, [t, n, l, a, c, u, d, e]);
    },
    g = (e) => {
        var t, n;
        return (0, a.Y)("ImmersiveBanner")
            ? {
                  bannerUrl: e.bannerUrl,
                  bannerAnimatedUrl: e.bannerAnimatedUrl,
              }
            : {
                  bannerUrl: null == (t = e.bannerAsset) ? void 0 : t.static,
                  bannerAnimatedUrl: null == (n = e.bannerAsset) ? void 0 : n.animated,
              };
    },
    m = (e) =>
        (0, a.Y)("WideBanner")
            ? {
                  bannerURL: e.bannerURL,
                  bannerAnimatedURL: e.bannerAnimatedURL,
              }
            : {
                  bannerURL: e.oldBannerURL,
                  bannerAnimatedURL: void 0,
              };
