n.d(t, {
    YG: () => d,
    hr: () => u,
    kc: () => f,
    mB: () => h,
    t0: () => p,
});
var r = n(647438),
    i = n(264181),
    l = n(884697),
    a = n(219778),
    o = n(619899),
    s = n(281598),
    c = n(215023);
let u = (e) => {
        let t = (0, o.zL)(s.jE.HERO_LOGO),
            n = (0, o.zL)(s.jE.HERO_BANNER_STATIC),
            i = (0, o.zL)(s.jE.HERO_BANNER_ANIMATED),
            l = (0, a.n)(null == e ? void 0 : e.categorySkuId);
        return r.useMemo(() => {
            var r, a, o, s, u, d;
            let p = (0, c.ZS)(e.categorySkuId),
                f = null != n || null != i,
                h = null != n && null == i;
            return {
                bannerOverrides: p,
                bannerStyleOverrides: f ? void 0 : null != (s = e.bannerConfig) ? s : l,
                logoStyleOverrides: f ? void 0 : e.logoConfig,
                heroLogo: null != t ? t : e.logoUrl,
                heroBannerStatic:
                    null != (u = null != n ? n : null == (r = e.bannerAsset) ? void 0 : r.static)
                        ? u
                        : e.fallbackBannerUrl,
                heroBannerAnimated: h
                    ? void 0
                    : null != (d = null != i ? i : null == p || null == (a = p.heroBanner) ? void 0 : a.animationSource)
                      ? d
                      : null == (o = e.bannerAsset)
                        ? void 0
                        : o.animated,
            };
        }, [t, n, i, e, l]);
    },
    d = (e, t) => {
        let n = (0, o.zL)(s.jE.FEATURED_BLOCK);
        return r.useMemo(() => {
            var r;
            let i = null == e ? void 0 : e.featuredBlock,
                a =
                    null != i
                        ? (0, l.uV)(i, {
                              size: c.J0,
                              format: "png",
                          })
                        : void 0;
            return { featuredBlockBanner: null != (r = null != n ? n : null == t ? void 0 : t.bannerUrl) ? r : a };
        }, [n, e, t]);
    },
    p = (e) => {
        let t = (0, o.zL)(s.jE.SHOP_ALL_BANNER_STATIC),
            n = (0, o.zL)(s.jE.SHOP_ALL_BANNER_ANIMATED);
        return r.useMemo(() => {
            var r, i, l, a, o, s;
            let u = (0, c.ZS)(e.skuId);
            return {
                bannerOverrides: u,
                shopAllBannerStatic:
                    null != (a = null != (l = null != t ? t : n) ? l : null == (r = e.bannerAsset) ? void 0 : r.static)
                        ? a
                        : e.banner,
                shopAllBannerAnimated:
                    null != (s = null != (o = null != n ? n : t) ? o : null == u ? void 0 : u.animatedBanner)
                        ? s
                        : null == (i = e.bannerAsset)
                          ? void 0
                          : i.animated,
            };
        }, [t, n, e]);
    },
    f = (e) => {
        let t = (0, o.zL)(s.jE.PDP_BACKGROUND);
        return null != t ? t : e.pdpBg;
    },
    h = (e) => {
        let t = (0, o.zL)(s.jE.SHOP_BUTTON_BG_HOVER),
            n = (0, o.zL)(s.jE.SHOP_BUTTON_BG_HOVER_DARK),
            l = (0, o.zL)(s.jE.SHOP_BUTTON_BG_HOVER_LIGHT),
            a = (0, o.zL)(s.jE.SHOP_BUTTON_BG_RESTING),
            c = (0, o.zL)(s.jE.SHOP_BUTTON_BG_RESTING_DARK),
            u = (0, o.zL)(s.jE.SHOP_BUTTON_BG_RESTING_LIGHT),
            d = (0, o.zL)(s.jE.COACHTIP_AVATAR);
        return r.useMemo(() => {
            var r, o, s, p, f;
            let h = [t, n, l, a, c, u, d].some((e) => null != e);
            if ((null == e ? void 0 : e.type) === i.Z.COACHMARK) return { hasPreviewAssets: !1 };
            let g = null == e || null == (r = e.refTargetBackground) ? void 0 : r.asset,
                m = null == g ? void 0 : g.resting,
                b = null == g ? void 0 : g.hovered;
            return {
                hasPreviewAssets: h,
                buttonBGHoverDark: null != (o = null != n ? n : t) ? o : null == b ? void 0 : b.dark,
                buttonBGHoverLight: null != (s = null != l ? l : t) ? s : null == b ? void 0 : b.light,
                buttonBGRestingDark: null != (p = null != c ? c : a) ? p : null == m ? void 0 : m.dark,
                buttonBGRestingLight: null != (f = null != u ? u : a) ? f : null == m ? void 0 : m.light,
                coachtipAvatar: null != d ? d : null == e ? void 0 : e.avatar,
            };
        }, [t, n, l, a, c, u, d, e]);
    };
