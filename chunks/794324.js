n.d(t, {
    Oi: () => d,
    YG: () => u,
    hr: () => c,
    kc: () => p,
    mB: () => f,
});
var r = n(647438),
    i = n(264181),
    l = n(884697),
    a = n(619899),
    o = n(281598),
    s = n(215023);
let c = (e) => {
        let t = (0, a.zL)(o.jE.HERO_LOGO),
            n = (0, a.zL)(o.jE.HERO_BANNER_STATIC),
            i = (0, a.zL)(o.jE.HERO_BANNER_ANIMATED);
        return r.useMemo(() => {
            var r, l, a;
            let o = null != n || null != i,
                s = null != n && null == i;
            return {
                bannerStyleOverrides: o ? void 0 : e.bannerConfig,
                logoStyleOverrides: o ? void 0 : e.logoConfig,
                heroLogo: null != t ? t : e.logoUrl,
                heroBannerStatic:
                    null != (a = null != n ? n : null == (r = e.bannerAsset) ? void 0 : r.static)
                        ? a
                        : e.fallbackBannerUrl,
                heroBannerAnimated: s ? void 0 : null != i ? i : null == (l = e.bannerAsset) ? void 0 : l.animated,
            };
        }, [t, n, i, e]);
    },
    u = (e, t) => {
        var n;
        let r = (0, a.zL)(o.jE.FEATURED_BLOCK),
            i = (0, l.uV)(null == e ? void 0 : e.featuredBlock, {
                size: s.J0,
                format: "png",
            });
        return null != (n = null != r ? r : null == t ? void 0 : t.bannerUrl) ? n : i;
    },
    d = (e) => {
        var t, n;
        let r = (0, a.zL)(o.jE.CATALOG_BANNER_STATIC),
            i = (0, a.zL)(o.jE.CATALOG_BANNER_ANIMATED);
        return {
            catalogBannerStatic: null != r ? r : null == (t = e.catalogBannerAsset) ? void 0 : t.static,
            catalogBannerAnimated: null != i ? i : null == (n = e.catalogBannerAsset) ? void 0 : n.animated,
        };
    },
    p = (e) => {
        let t = (0, a.zL)(o.jE.PDP_BACKGROUND);
        if (null != t) return t;
        let n = e.pdpBg;
        return (null == n ? void 0 : n.startsWith("http"))
            ? n
            : (0, l.uV)(n, {
                  size: 540,
                  format: "jpg",
              });
    },
    f = (e) => {
        let t = (0, a.zL)(o.jE.SHOP_BUTTON_BG_HOVER),
            n = (0, a.zL)(o.jE.SHOP_BUTTON_BG_HOVER_DARK),
            l = (0, a.zL)(o.jE.SHOP_BUTTON_BG_HOVER_LIGHT),
            s = (0, a.zL)(o.jE.SHOP_BUTTON_BG_RESTING),
            c = (0, a.zL)(o.jE.SHOP_BUTTON_BG_RESTING_DARK),
            u = (0, a.zL)(o.jE.SHOP_BUTTON_BG_RESTING_LIGHT),
            d = (0, a.zL)(o.jE.COACHTIP_AVATAR);
        return r.useMemo(() => {
            var r, a, o, p, f;
            let h = [t, n, l, s, c, u, d].some((e) => null != e);
            if ((null == e ? void 0 : e.type) === i.Z.COACHMARK) return { hasPreviewAssets: !1 };
            let g = null == e || null == (r = e.refTargetBackground) ? void 0 : r.asset,
                m = null == g ? void 0 : g.resting,
                b = null == g ? void 0 : g.hovered;
            return {
                hasPreviewAssets: h,
                buttonBGHoverDark: null != (a = null != n ? n : t) ? a : null == b ? void 0 : b.dark,
                buttonBGHoverLight: null != (o = null != l ? l : t) ? o : null == b ? void 0 : b.light,
                buttonBGRestingDark: null != (p = null != c ? c : s) ? p : null == m ? void 0 : m.dark,
                buttonBGRestingLight: null != (f = null != u ? u : s) ? f : null == m ? void 0 : m.light,
                coachtipAvatar: null != d ? d : null == e ? void 0 : e.avatar,
            };
        }, [t, n, l, s, c, u, d, e]);
    };
