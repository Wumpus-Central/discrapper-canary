n.d(t, {
    Ac: () => p,
    OR: () => _,
    YG: () => d,
    hr: () => u,
    tK: () => f
});
var r = n(192379),
    i = n(884697),
    o = n(318028),
    a = n(823941),
    s = n(619899),
    l = n(281598),
    c = n(215023);
let u = (e) => {
        let t = (0, s.z)(l.Fr.HERO_LOGO),
            n = (0, s.z)(l.Fr.HERO_BANNER_STATIC),
            i = (0, s.z)(l.Fr.HERO_BANNER_ANIMATED);
        return r.useMemo(() => {
            var r, o, a, s, l;
            let u = (0, c.ZS)(e.categorySkuId);
            return {
                bannerOverride: u,
                heroLogo: null != t ? t : e.logoUrl,
                heroBannerStatic: null !== (s = null != n ? n : null === (r = e.bannerAsset) || void 0 === r ? void 0 : r.static) && void 0 !== s ? s : e.fallbackBannerUrl,
                heroBannerAnimated: null !== (l = null != i ? i : null == u ? void 0 : null === (o = u.heroBanner) || void 0 === o ? void 0 : o.animationSource) && void 0 !== l ? l : null === (a = e.bannerAsset) || void 0 === a ? void 0 : a.animated
            };
        }, [t, n, i, e]);
    },
    d = (e, t) => {
        let n = (0, s.z)(l.Fr.FEATURED_BLOCK);
        return r.useMemo(() => {
            var r;
            let o = null == e ? void 0 : e.featuredBlock,
                a =
                    null != o
                        ? (0, i.uV)(o, {
                              size: c.J0,
                              format: 'png'
                          })
                        : void 0;
            return { featuredBlockBanner: null !== (r = null != n ? n : null == t ? void 0 : t.bannerUrl) && void 0 !== r ? r : a };
        }, [n, e, t]);
    },
    f = (e) => {
        let t = (0, s.z)(l.Fr.CATEGORY_BANNER_STATIC),
            n = (0, s.z)(l.Fr.CATEGORY_BANNER_ANIMATED);
        return r.useMemo(() => {
            var r, i, o, a;
            let s = (0, c.ZS)(e.skuId);
            return {
                categoryBannerStatic: null !== (o = null != t ? t : null === (r = e.bannerAsset) || void 0 === r ? void 0 : r.static) && void 0 !== o ? o : e.banner,
                categoryBannerAnimated: null !== (a = null != n ? n : null == s ? void 0 : s.animatedBanner) && void 0 !== a ? a : null === (i = e.bannerAsset) || void 0 === i ? void 0 : i.animated
            };
        }, [t, n, e]);
    },
    _ = (e, t) => {
        let n = (0, s.z)(l.Fr.PDP_BACKGROUND),
            o = (0, s.z)(l.Fr.PDP_LOGO);
        return r.useMemo(() => {
            var r;
            return {
                pdpBackground: null !== (r = null != n ? n : e.pdpBg) && void 0 !== r ? r : t.banner,
                logo: null != o ? o : (0, i.uV)(e.logo, { size: a.n })
            };
        }, [n, o, e, t]);
    },
    p = (e) => {
        let { category: t } = (0, o.l)(e.skuId),
            n = (0, s.z)(l.Fr.COLLECTED_MODAL_BG);
        return r.useMemo(() => {
            var r;
            return { collectedModalBackground: null !== (r = null != n ? n : null == t ? void 0 : t.successModalBg) && void 0 !== r ? r : e.banner };
        }, [n, t, e]);
    };
