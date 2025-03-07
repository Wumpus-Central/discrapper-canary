n.d(t, {
    OR: () => m,
    YG: () => c,
    hr: () => d,
    tK: () => u
});
var r = n(192379),
    l = n(884697),
    a = n(823941),
    s = n(619899),
    o = n(281598),
    i = n(215023);
let d = (e) => {
        let t = (0, s.z)(o.Fr.HERO_LOGO),
            n = (0, s.z)(o.Fr.HERO_BANNER_STATIC),
            l = (0, s.z)(o.Fr.HERO_BANNER_ANIMATED);
        return r.useMemo(() => {
            var r, a, s, o, d;
            let c = (0, i.ZS)(e.categorySkuId);
            return {
                bannerOverride: c,
                heroLogo: null != t ? t : e.logoUrl,
                heroBannerStatic: null !== (o = null != n ? n : null === (r = e.bannerAsset) || void 0 === r ? void 0 : r.static) && void 0 !== o ? o : e.fallbackBannerUrl,
                heroBannerAnimated: null !== (d = null != l ? l : null == c ? void 0 : null === (a = c.heroBanner) || void 0 === a ? void 0 : a.animationSource) && void 0 !== d ? d : null === (s = e.bannerAsset) || void 0 === s ? void 0 : s.animated
            };
        }, [t, n, l, e]);
    },
    c = (e, t) => {
        let n = (0, s.z)(o.Fr.FEATURED_BLOCK);
        return r.useMemo(() => {
            var r;
            let a = null == e ? void 0 : e.featuredBlock,
                s =
                    null != a
                        ? (0, l.uV)(a, {
                              size: i.J0,
                              format: 'png'
                          })
                        : void 0;
            return { featuredBlockBanner: null !== (r = null != n ? n : null == t ? void 0 : t.bannerUrl) && void 0 !== r ? r : s };
        }, [n, e, t]);
    },
    u = (e) => {
        let t = (0, s.z)(o.Fr.CATEGORY_BANNER_STATIC),
            n = (0, s.z)(o.Fr.CATEGORY_BANNER_ANIMATED);
        return r.useMemo(() => {
            var r, l, a, s;
            let o = (0, i.ZS)(e.skuId);
            return {
                categoryBannerStatic: null !== (a = null != t ? t : null === (r = e.bannerAsset) || void 0 === r ? void 0 : r.static) && void 0 !== a ? a : e.banner,
                categoryBannerAnimated: null !== (s = null != n ? n : null == o ? void 0 : o.animatedBanner) && void 0 !== s ? s : null === (l = e.bannerAsset) || void 0 === l ? void 0 : l.animated
            };
        }, [t, n, e]);
    },
    m = (e, t) => {
        let n = (0, s.z)(o.Fr.PDP_BACKGROUND),
            i = (0, s.z)(o.Fr.PDP_LOGO);
        return r.useMemo(() => {
            var r;
            return {
                pdpBackground: null !== (r = null != n ? n : e.pdpBg) && void 0 !== r ? r : t.banner,
                logo: null != i ? i : (0, l.uV)(e.logo, { size: a.n })
            };
        }, [n, i, e, t]);
    };
