n.d(t, {
    Oi: () => c,
    UI: () => f,
    YG: () => s,
    _M: () => p,
    hr: () => o,
    kc: () => u,
    mB: () => d,
});
var r = n(473749),
    i = n(264181),
    l = n(619899),
    a = n(281598);
let o = (e) => {
        let t = (0, l.zL)(a.jE.HERO_LOGO),
            n = (0, l.zL)(a.jE.HERO_BANNER_STATIC),
            i = (0, l.zL)(a.jE.HERO_BANNER_ANIMATED),
            o = (0, l.zL)(a.jE.HERO_BANNER_RIVE);
        return r.useMemo(() => {
            let r = null != n || null != i || null != o || null != t,
                l = null != n && null == i;
            return {
                bannerDisplayConfig: r ? void 0 : e.bannerDisplayConfig,
                logoDisplayConfig: r ? void 0 : e.logoDisplayConfig,
                heroLogo: null != t ? t : e.heroLogoUrl,
                heroBannerStatic: null != n ? n : e.heroBannerUrl,
                heroBannerAnimated: l ? void 0 : null != i ? i : e.heroBannerAnimatedUrl,
                heroBannerRive: null != o ? o : e.heroRiveUrl,
            };
        }, [t, n, i, o, e]);
    },
    s = (e, t) => {
        var n;
        let r = (0, l.zL)(a.jE.FEATURED_BLOCK);
        return null != (n = null != r ? r : null == t ? void 0 : t.assetUrl)
            ? n
            : null == e
              ? void 0
              : e.featuredBlockUrl;
    },
    c = (e) => {
        let t = (0, l.zL)(a.jE.CATALOG_BANNER_STATIC),
            n = (0, l.zL)(a.jE.CATALOG_BANNER_ANIMATED),
            r = (0, l.zL)(a.jE.CATALOG_BANNER_RIVE);
        return {
            catalogBannerStatic: null != t ? t : e.catalogBannerUrl,
            catalogBannerAnimated: null != n ? n : e.catalogBannerAnimatedUrl,
            catalogBannerRive: null != r ? r : e.catalogBannerRiveUrl,
        };
    },
    u = (e) => {
        let t = (0, l.zL)(a.jE.PDP_BACKGROUND);
        return null != t ? t : e.pdpBgUrl;
    },
    d = (e) => {
        let t = (0, l.zL)(a.jE.SHOP_BUTTON_BG_HOVER),
            n = (0, l.zL)(a.jE.SHOP_BUTTON_BG_HOVER_DARK),
            o = (0, l.zL)(a.jE.SHOP_BUTTON_BG_HOVER_LIGHT),
            s = (0, l.zL)(a.jE.SHOP_BUTTON_BG_RESTING),
            c = (0, l.zL)(a.jE.SHOP_BUTTON_BG_RESTING_DARK),
            u = (0, l.zL)(a.jE.SHOP_BUTTON_BG_RESTING_LIGHT),
            d = (0, l.zL)(a.jE.COACHTIP_AVATAR);
        return r.useMemo(() => {
            var r, l, a, p, f;
            let g = [t, n, o, s, c, u, d].some((e) => null != e);
            if ((null == e ? void 0 : e.type) === i.Z.COACHMARK) return { hasPreviewAssets: !1 };
            let h = null == e || null == (r = e.refTargetBackground) ? void 0 : r.asset,
                m = null == h ? void 0 : h.resting,
                b = null == h ? void 0 : h.hovered;
            return {
                hasPreviewAssets: g,
                buttonBGHoverDark: null != (l = null != n ? n : t) ? l : null == b ? void 0 : b.dark,
                buttonBGHoverLight: null != (a = null != o ? o : t) ? a : null == b ? void 0 : b.light,
                buttonBGRestingDark: null != (p = null != c ? c : s) ? p : null == m ? void 0 : m.dark,
                buttonBGRestingLight: null != (f = null != u ? u : s) ? f : null == m ? void 0 : m.light,
                coachtipAvatar: null != d ? d : null == e ? void 0 : e.avatar,
            };
        }, [t, n, o, s, c, u, d, e]);
    },
    p = (e) => ({
        bannerUrl: e.bannerUrl,
        bannerAnimatedUrl: e.bannerAnimatedUrl,
    }),
    f = (e) => ({
        bannerURL: e.bannerURL,
        bannerAnimatedURL: e.bannerAnimatedURL,
    });
