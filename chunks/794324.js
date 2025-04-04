n.d(t, {
    Ac: () => h,
    OR: () => p,
    YG: () => f,
    hr: () => d,
    mB: () => m,
    tK: () => _
});
var r = n(192379),
    i = n(884697),
    o = n(318028),
    a = n(823941),
    s = n(219778),
    l = n(619899),
    c = n(281598),
    u = n(215023);
let d = (e) => {
        let t = (0, l.zL)(c.Fr.HERO_LOGO),
            n = (0, l.zL)(c.Fr.HERO_BANNER_STATIC),
            i = (0, l.zL)(c.Fr.HERO_BANNER_ANIMATED),
            o = (0, s.n)(null == e ? void 0 : e.categorySkuId);
        return r.useMemo(() => {
            var r, a, s, l, c;
            let d = (0, u.ZS)(e.categorySkuId),
                f = null != n || null != i;
            return {
                isPreviewingStaticBanner: null != n && null == i,
                bannerOverrides: d,
                bannerStyleOverrides: f ? void 0 : o,
                heroLogo: null != t ? t : e.logoUrl,
                heroBannerStatic: null != (l = null != n ? n : null == (r = e.bannerAsset) ? void 0 : r.static) ? l : e.fallbackBannerUrl,
                heroBannerAnimated: null != (c = null != i ? i : null == d || null == (a = d.heroBanner) ? void 0 : a.animationSource) ? c : null == (s = e.bannerAsset) ? void 0 : s.animated
            };
        }, [o, t, n, i, e]);
    },
    f = (e, t) => {
        let n = (0, l.zL)(c.Fr.FEATURED_BLOCK);
        return r.useMemo(() => {
            var r;
            let o = null == e ? void 0 : e.featuredBlock,
                a =
                    null != o
                        ? (0, i.uV)(o, {
                              size: u.J0,
                              format: 'png'
                          })
                        : void 0;
            return { featuredBlockBanner: null != (r = null != n ? n : null == t ? void 0 : t.bannerUrl) ? r : a };
        }, [n, e, t]);
    },
    _ = (e) => {
        let t = (0, l.zL)(c.Fr.CATEGORY_BANNER_STATIC),
            n = (0, l.zL)(c.Fr.CATEGORY_BANNER_ANIMATED);
        return r.useMemo(() => {
            var r, i, o, a, s, l;
            let c = (0, u.ZS)(e.skuId);
            return {
                bannerOverrides: c,
                categoryBannerStatic: null != (a = null != (o = null != t ? t : n) ? o : null == (r = e.bannerAsset) ? void 0 : r.static) ? a : e.banner,
                categoryBannerAnimated: null != (l = null != (s = null != n ? n : t) ? s : null == c ? void 0 : c.animatedBanner) ? l : null == (i = e.bannerAsset) ? void 0 : i.animated
            };
        }, [t, n, e]);
    },
    p = (e, t) => {
        let n = (0, l.zL)(c.Fr.PDP_BACKGROUND),
            o = (0, l.zL)(c.Fr.PDP_LOGO);
        return r.useMemo(() => {
            var r;
            return {
                pdpBackground: null != (r = null != n ? n : e.pdpBg) ? r : t.banner,
                logo: null != o ? o : (0, i.uV)(e.logo, { size: a.n })
            };
        }, [n, o, e, t]);
    },
    h = (e) => {
        let { category: t } = (0, o.l)(e.skuId),
            n = (0, l.zL)(c.Fr.COLLECTED_MODAL_BG);
        return r.useMemo(() => {
            var r;
            return { collectedModalBackground: null != (r = null != n ? n : null == t ? void 0 : t.successModalBg) ? r : e.banner };
        }, [n, t, e]);
    },
    m = (e) => {
        let t = (0, l.zL)(c.Fr.SHOP_BUTTON_BG_HOVER),
            n = (0, l.zL)(c.Fr.SHOP_BUTTON_BG_HOVER_DARK),
            i = (0, l.zL)(c.Fr.SHOP_BUTTON_BG_HOVER_LIGHT),
            o = (0, l.zL)(c.Fr.SHOP_BUTTON_BG_RESTING),
            a = (0, l.zL)(c.Fr.SHOP_BUTTON_BG_RESTING_DARK),
            s = (0, l.zL)(c.Fr.SHOP_BUTTON_BG_RESTING_LIGHT),
            u = (0, l.zL)(c.Fr.COACHTIP_AVATAR);
        return r.useMemo(() => {
            var r, l, c, d, f;
            let _ = [t, n, i, o, a, s, u].some((e) => null != e),
                p = null == e || null == (r = e.refTargetBackground) ? void 0 : r.asset,
                h = null == p ? void 0 : p.resting,
                m = null == p ? void 0 : p.hovered;
            return {
                hasPreviewAssets: _,
                buttonBGHoverDark: null != (l = null != n ? n : t) ? l : null == m ? void 0 : m.dark,
                buttonBGHoverLight: null != (c = null != i ? i : t) ? c : null == m ? void 0 : m.light,
                buttonBGRestingDark: null != (d = null != a ? a : o) ? d : null == h ? void 0 : h.dark,
                buttonBGRestingLight: null != (f = null != s ? s : o) ? f : null == h ? void 0 : h.light,
                coachtipAvatar: null != u ? u : null == e ? void 0 : e.avatar
            };
        }, [t, n, i, o, a, s, u, e]);
    };
