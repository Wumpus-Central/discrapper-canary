n.d(t, {
    Oi: () => p,
    UI: () => m,
    YG: () => d,
    _M: () => h,
    hr: () => u,
    kc: () => f,
    mB: () => g,
});
var r = n(473749),
    i = n(264181),
    l = n(884697),
    a = n(15400),
    o = n(619899),
    s = n(281598),
    c = n(215023);
let u = (e) => {
        let t = (0, o.zL)(s.jE.HERO_LOGO),
            n = (0, o.zL)(s.jE.HERO_BANNER_STATIC),
            i = (0, o.zL)(s.jE.HERO_BANNER_ANIMATED),
            l = (0, o.zL)(s.jE.HERO_BANNER_RIVE),
            c = (0, a.Y)("HeroBlock");
        return r.useMemo(() => {
            var r, a;
            let o = null != n || null != i || null != l,
                s = null != n && null == i;
            if (c)
                return {
                    bannerStyleOverrides: o ? void 0 : e.bannerDisplayConfig,
                    logoStyleOverrides: o ? void 0 : e.logoDisplayConfig,
                    heroLogo: null != t ? t : e.heroLogoUrl,
                    heroBannerStatic: null != n ? n : e.heroBannerUrl,
                    heroBannerAnimated: s ? void 0 : null != i ? i : e.heroBannerAnimatedUrl,
                    heroBannerRive: null != l ? l : e.heroRiveUrl,
                };
            let u = null == (r = e.bannerAsset) ? void 0 : r.animated,
                d = (null == u ? void 0 : u.endsWith(".riv")) ? u : e.heroRiveUrl;
            return {
                bannerStyleOverrides: o ? void 0 : e.bannerDisplayConfig,
                logoStyleOverrides: o ? void 0 : e.logoDisplayConfig,
                heroLogo: null != t ? t : e.logoUrl,
                heroBannerStatic: null != n ? n : null == (a = e.bannerAsset) ? void 0 : a.static,
                heroBannerAnimated: s ? void 0 : null != i ? i : u,
                heroBannerRive: s ? void 0 : null != l ? l : d,
            };
        }, [t, n, i, l, e, c]);
    },
    d = (e, t) => {
        var n, r;
        let i = (0, o.zL)(s.jE.FEATURED_BLOCK);
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
        let r = (0, o.zL)(s.jE.CATALOG_BANNER_STATIC),
            i = (0, o.zL)(s.jE.CATALOG_BANNER_ANIMATED);
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
        let t = (0, o.zL)(s.jE.PDP_BACKGROUND),
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
    g = (e) => {
        let t = (0, o.zL)(s.jE.SHOP_BUTTON_BG_HOVER),
            n = (0, o.zL)(s.jE.SHOP_BUTTON_BG_HOVER_DARK),
            l = (0, o.zL)(s.jE.SHOP_BUTTON_BG_HOVER_LIGHT),
            a = (0, o.zL)(s.jE.SHOP_BUTTON_BG_RESTING),
            c = (0, o.zL)(s.jE.SHOP_BUTTON_BG_RESTING_DARK),
            u = (0, o.zL)(s.jE.SHOP_BUTTON_BG_RESTING_LIGHT),
            d = (0, o.zL)(s.jE.COACHTIP_AVATAR);
        return r.useMemo(() => {
            var r, o, s, p, f;
            let g = [t, n, l, a, c, u, d].some((e) => null != e);
            if ((null == e ? void 0 : e.type) === i.Z.COACHMARK) return { hasPreviewAssets: !1 };
            let h = null == e || null == (r = e.refTargetBackground) ? void 0 : r.asset,
                m = null == h ? void 0 : h.resting,
                b = null == h ? void 0 : h.hovered;
            return {
                hasPreviewAssets: g,
                buttonBGHoverDark: null != (o = null != n ? n : t) ? o : null == b ? void 0 : b.dark,
                buttonBGHoverLight: null != (s = null != l ? l : t) ? s : null == b ? void 0 : b.light,
                buttonBGRestingDark: null != (p = null != c ? c : a) ? p : null == m ? void 0 : m.dark,
                buttonBGRestingLight: null != (f = null != u ? u : a) ? f : null == m ? void 0 : m.light,
                coachtipAvatar: null != d ? d : null == e ? void 0 : e.avatar,
            };
        }, [t, n, l, a, c, u, d, e]);
    },
    h = (e) => {
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
