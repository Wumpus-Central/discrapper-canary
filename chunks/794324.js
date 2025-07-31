r.d(n, {
    OR: () => v,
    YG: () => g,
    hr: () => d,
    mB: () => m,
    t0: () => b
});
var l = r(73800),
    t = r(264181),
    o = r(884697);
r(318028);
var a = r(823941),
    u = r(219778),
    i = r(619899),
    s = r(281598),
    c = r(215023);
let d = (e) => {
        let n = (0, i.zL)(s.jE.HERO_LOGO),
            r = (0, i.zL)(s.jE.HERO_BANNER_STATIC),
            t = (0, i.zL)(s.jE.HERO_BANNER_ANIMATED),
            o = (0, u.n)(null == e ? void 0 : e.categorySkuId);
        return l.useMemo(() => {
            var l, a, u, i, s, d;
            let g = (0, c.ZS)(e.categorySkuId),
                b = null != r || null != t;
            return {
                isPreviewingStaticBanner: null != r && null == t,
                bannerOverrides: g,
                bannerStyleOverrides: b ? void 0 : null != (i = e.bannerConfig) ? i : o,
                logoStyleOverrides: b ? void 0 : e.logoConfig,
                heroLogo: null != n ? n : e.logoUrl,
                heroBannerStatic: null != (s = null != r ? r : null == (l = e.bannerAsset) ? void 0 : l.static) ? s : e.fallbackBannerUrl,
                heroBannerAnimated: null != (d = null != t ? t : null == g || null == (a = g.heroBanner) ? void 0 : a.animationSource) ? d : null == (u = e.bannerAsset) ? void 0 : u.animated
            };
        }, [n, r, t, e, o]);
    },
    g = (e, n) => {
        let r = (0, i.zL)(s.jE.FEATURED_BLOCK);
        return l.useMemo(() => {
            var l;
            let t = null == e ? void 0 : e.featuredBlock,
                a =
                    null != t
                        ? (0, o.uV)(t, {
                              size: c.J0,
                              format: 'png'
                          })
                        : void 0;
            return { featuredBlockBanner: null != (l = null != r ? r : null == n ? void 0 : n.bannerUrl) ? l : a };
        }, [r, e, n]);
    },
    b = (e) => {
        let n = (0, i.zL)(s.jE.SHOP_ALL_BANNER_STATIC),
            r = (0, i.zL)(s.jE.SHOP_ALL_BANNER_ANIMATED);
        return l.useMemo(() => {
            var l, t, o, a, u, i;
            let s = (0, c.ZS)(e.skuId);
            return {
                bannerOverrides: s,
                shopAllBannerStatic: null != (a = null != (o = null != n ? n : r) ? o : null == (l = e.bannerAsset) ? void 0 : l.static) ? a : e.banner,
                shopAllBannerAnimated: null != (i = null != (u = null != r ? r : n) ? u : null == s ? void 0 : s.animatedBanner) ? i : null == (t = e.bannerAsset) ? void 0 : t.animated
            };
        }, [n, r, e]);
    },
    v = (e, n) => {
        let r = (0, i.zL)(s.jE.PDP_BACKGROUND),
            t = (0, i.zL)(s.jE.PDP_LOGO);
        return l.useMemo(() => {
            var l;
            return {
                pdpBackground: null != (l = null != r ? r : e.pdpBg) ? l : n.banner,
                logo: null != t ? t : (0, o.uV)(e.logo, { size: a.n })
            };
        }, [r, t, e, n]);
    },
    m = (e) => {
        let n = (0, i.zL)(s.jE.SHOP_BUTTON_BG_HOVER),
            r = (0, i.zL)(s.jE.SHOP_BUTTON_BG_HOVER_DARK),
            o = (0, i.zL)(s.jE.SHOP_BUTTON_BG_HOVER_LIGHT),
            a = (0, i.zL)(s.jE.SHOP_BUTTON_BG_RESTING),
            u = (0, i.zL)(s.jE.SHOP_BUTTON_BG_RESTING_DARK),
            c = (0, i.zL)(s.jE.SHOP_BUTTON_BG_RESTING_LIGHT),
            d = (0, i.zL)(s.jE.COACHTIP_AVATAR);
        return l.useMemo(() => {
            var l, i, s, g, b;
            let v = [n, r, o, a, u, c, d].some((e) => null != e);
            if ((null == e ? void 0 : e.type) === t.Z.COACHMARK) return { hasPreviewAssets: !1 };
            let m = null == e || null == (l = e.refTargetBackground) ? void 0 : l.asset,
                O = null == m ? void 0 : m.resting,
                f = null == m ? void 0 : m.hovered;
            return {
                hasPreviewAssets: v,
                buttonBGHoverDark: null != (i = null != r ? r : n) ? i : null == f ? void 0 : f.dark,
                buttonBGHoverLight: null != (s = null != o ? o : n) ? s : null == f ? void 0 : f.light,
                buttonBGRestingDark: null != (g = null != u ? u : a) ? g : null == O ? void 0 : O.dark,
                buttonBGRestingLight: null != (b = null != c ? c : a) ? b : null == O ? void 0 : O.light,
                coachtipAvatar: null != d ? d : null == e ? void 0 : e.avatar
            };
        }, [n, r, o, a, u, c, d, e]);
    };
