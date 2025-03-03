r.d(t, {
    Y: () => c,
    h: () => s
});
var n = r(192379),
    l = r(884697),
    i = r(619899),
    o = r(281598),
    a = r(215023);
let s = (e) => {
        let t = (0, i.z)(o.Fr.HERO_LOGO),
            r = (0, i.z)(o.Fr.HERO_BANNER_STATIC),
            l = (0, i.z)(o.Fr.HERO_BANNER_ANIMATED);
        return n.useMemo(() => {
            var n, i, o, s, c;
            let u = (0, a.ZS)(e.categorySkuId);
            return {
                bannerOverride: u,
                heroLogo: null != t ? t : e.logoUrl,
                heroBannerStatic: null !== (s = null != r ? r : null === (n = e.bannerAsset) || void 0 === n ? void 0 : n.static) && void 0 !== s ? s : e.fallbackBannerUrl,
                heroBannerAnimated: null !== (c = null != l ? l : null == u ? void 0 : null === (i = u.heroBanner) || void 0 === i ? void 0 : i.animationSource) && void 0 !== c ? c : null === (o = e.bannerAsset) || void 0 === o ? void 0 : o.animated
            };
        }, [t, r, l, e]);
    },
    c = (e, t) => {
        let r = (0, i.z)(o.Fr.FEATURED_BLOCK);
        return n.useMemo(() => {
            var n;
            let i = null == e ? void 0 : e.featuredBlock,
                o =
                    null != i
                        ? (0, l.uV)(i, {
                              size: a.J0,
                              format: 'png'
                          })
                        : void 0;
            return { featuredBlockBanner: null !== (n = null != r ? r : null == t ? void 0 : t.bannerUrl) && void 0 !== n ? n : o };
        }, [r, e, t]);
    };
