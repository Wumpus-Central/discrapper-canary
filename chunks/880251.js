n.d(t, { E: () => c });
var r = n(473749),
    i = n(361213),
    a = n(778569),
    o = n(783097),
    s = n(768581),
    l = n(758199);
function c(e) {
    let { bot: t } = e,
        n = (0, o.ye)(e),
        { url: c } = (0, a.Z)({
            applicationId: n ? e.id : void 0,
            size: 600,
            names: ["embedded_cover"],
        });
    return r.useMemo(() => {
        let r,
            a,
            u = l.u.BOT;
        if (null != t) {
            let { banner: e } = t;
            (r = (0, s.aN)({
                id: t.id,
                banner: e,
                size: 512,
                canAnimate: !1,
            })),
                (0, s.xR)(e) &&
                    null == c &&
                    (a = (0, s.aN)({
                        id: t.id,
                        banner: e,
                        size: 512,
                        canAnimate: !0,
                    }));
        }
        if (n) {
            let t = (0, o.yJ)(e);
            null != c && ((r = c), (u = l.u.ACTIVITY));
            let n = null == t ? void 0 : t.activity_preview_video_asset_id;
            null != n && ((a = (0, i.Z)(e.id, n)), (u = l.u.ACTIVITY));
        }
        return {
            staticBannerSrc: r,
            videoBannerSrc: a,
            bannerAspectRatio: u,
        };
    }, [c, t, n, e]);
}
