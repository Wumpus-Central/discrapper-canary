n.d(t, {
    Ac: () => m,
    OR: () => h,
    YG: () => _,
    hr: () => f,
    mB: () => g,
    t0: () => p
});
var r = n(73800),
    i = n(264181),
    a = n(884697),
    o = n(318028),
    s = n(823941),
    l = n(219778),
    c = n(619899),
    u = n(281598),
    d = n(215023);
let f = (e) => {
        let t = (0, c.zL)(u.jE.HERO_LOGO),
            n = (0, c.zL)(u.jE.HERO_BANNER_STATIC),
            i = (0, c.zL)(u.jE.HERO_BANNER_ANIMATED),
            a = (0, l.n)(null == e ? void 0 : e.categorySkuId);
        return r.useMemo(() => {
            var r, o, s, l, c;
            let u = (0, d.ZS)(e.categorySkuId),
                f = null != n || null != i;
            return {
                isPreviewingStaticBanner: null != n && null == i,
                bannerOverrides: u,
                bannerStyleOverrides: f ? void 0 : a,
                heroLogo: null != t ? t : e.logoUrl,
                heroBannerStatic: null != (l = null != n ? n : null == (r = e.bannerAsset) ? void 0 : r.static) ? l : e.fallbackBannerUrl,
                heroBannerAnimated: null != (c = null != i ? i : null == u || null == (o = u.heroBanner) ? void 0 : o.animationSource) ? c : null == (s = e.bannerAsset) ? void 0 : s.animated
            };
        }, [a, t, n, i, e]);
    },
    _ = (e, t) => {
        let n = (0, c.zL)(u.jE.FEATURED_BLOCK);
        return r.useMemo(() => {
            var r;
            let i = null == e ? void 0 : e.featuredBlock,
                o =
                    null != i
                        ? (0, a.uV)(i, {
                              size: d.J0,
                              format: 'png'
                          })
                        : void 0;
            return { featuredBlockBanner: null != (r = null != n ? n : null == t ? void 0 : t.bannerUrl) ? r : o };
        }, [n, e, t]);
    },
    p = (e) => {
        let t = (0, c.zL)(u.jE.SHOP_ALL_BANNER_STATIC),
            n = (0, c.zL)(u.jE.SHOP_ALL_BANNER_ANIMATED);
        return r.useMemo(() => {
            var r, i, a, o, s, l;
            let c = (0, d.ZS)(e.skuId);
            return {
                bannerOverrides: c,
                shopAllBannerStatic: null != (o = null != (a = null != t ? t : n) ? a : null == (r = e.bannerAsset) ? void 0 : r.static) ? o : e.banner,
                shopAllBannerAnimated: null != (l = null != (s = null != n ? n : t) ? s : null == c ? void 0 : c.animatedBanner) ? l : null == (i = e.bannerAsset) ? void 0 : i.animated
            };
        }, [t, n, e]);
    },
    h = (e, t) => {
        let n = (0, c.zL)(u.jE.PDP_BACKGROUND),
            i = (0, c.zL)(u.jE.PDP_LOGO);
        return r.useMemo(() => {
            var r;
            return {
                pdpBackground: null != (r = null != n ? n : e.pdpBg) ? r : t.banner,
                logo: null != i ? i : (0, a.uV)(e.logo, { size: s.n })
            };
        }, [n, i, e, t]);
    },
    m = (e) => {
        let { category: t } = (0, o.l)(e.skuId),
            n = (0, c.zL)(u.jE.COLLECTED_MODAL_BG);
        return r.useMemo(() => {
            var r;
            return { collectedModalBackground: null != (r = null != n ? n : null == t ? void 0 : t.successModalBg) ? r : e.banner };
        }, [n, t, e]);
    },
    g = (e) => {
        let t = (0, c.zL)(u.jE.SHOP_BUTTON_BG_HOVER),
            n = (0, c.zL)(u.jE.SHOP_BUTTON_BG_HOVER_DARK),
            a = (0, c.zL)(u.jE.SHOP_BUTTON_BG_HOVER_LIGHT),
            o = (0, c.zL)(u.jE.SHOP_BUTTON_BG_RESTING),
            s = (0, c.zL)(u.jE.SHOP_BUTTON_BG_RESTING_DARK),
            l = (0, c.zL)(u.jE.SHOP_BUTTON_BG_RESTING_LIGHT),
            d = (0, c.zL)(u.jE.COACHTIP_AVATAR);
        return r.useMemo(() => {
            var r, c, u, f, _;
            let p = [t, n, a, o, s, l, d].some((e) => null != e);
            if ((null == e ? void 0 : e.type) === i.Z.COACHMARK) return { hasPreviewAssets: !1 };
            let h = null == e || null == (r = e.refTargetBackground) ? void 0 : r.asset,
                m = null == h ? void 0 : h.resting,
                g = null == h ? void 0 : h.hovered;
            return {
                hasPreviewAssets: p,
                buttonBGHoverDark: null != (c = null != n ? n : t) ? c : null == g ? void 0 : g.dark,
                buttonBGHoverLight: null != (u = null != a ? a : t) ? u : null == g ? void 0 : g.light,
                buttonBGRestingDark: null != (f = null != s ? s : o) ? f : null == m ? void 0 : m.dark,
                buttonBGRestingLight: null != (_ = null != l ? l : o) ? _ : null == m ? void 0 : m.light,
                coachtipAvatar: null != d ? d : null == e ? void 0 : e.avatar
            };
        }, [t, n, a, o, s, l, d, e]);
    };
