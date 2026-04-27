"use strict";
r.d(t, { C: () => p, JE: () => d, NE: () => u, VU: () => f, mb: () => _ }), r(323874), r(14289), r(35956);
var n = r(64700),
    i = r(735438),
    a = r(353640),
    s = r(121894),
    l = r(816866),
    o = r(87558),
    c = r(559474);
let d = (0, a.v)((e) => ({
        previewEnabled: !1,
        collectionAssets: {},
        avatarDecorationAssets: {},
        previewProfileEffectSkuId: null,
        previewAvatarDecorationKey: null,
        heroLogoMaxHeight: null,
        heroResponsive: !1,
        setPreviewEnabled: (t) => e({ previewEnabled: t }),
        setHeroLogoMaxHeight: (t) => e({ heroLogoMaxHeight: t }),
        setHeroResponsive: (t) => e({ heroResponsive: t }),
        upsertCollectionAsset: (t, r) =>
            (0, s.r)(() => {
                e((e) => {
                    let n = e.collectionAssets[t];
                    null != n && URL.revokeObjectURL(n.src);
                    let i = URL.createObjectURL(r),
                        a = { ...e.collectionAssets };
                    return (
                        (a[t] = { type: t, name: r.name, src: i }), { ...e, collectionAssets: a, previewEnabled: !0 }
                    );
                });
            }),
        deleteCollectionAsset: (t) =>
            (0, s.r)(() => {
                e((e) => {
                    let r = e.collectionAssets[t];
                    if (null == r) return e;
                    URL.revokeObjectURL(r.src);
                    let { [t]: n, ...i } = e.collectionAssets,
                        a = Object.keys(i).length > 0 || Object.keys(e.avatarDecorationAssets).length > 0;
                    return { ...e, collectionAssets: i, previewEnabled: a };
                });
            }),
        upsertAvatarDecorationAsset: (t) =>
            (0, s.r)(() => {
                e((e) => {
                    let r = e.avatarDecorationAssets[t.name];
                    null != r && URL.revokeObjectURL(r.src);
                    let n = URL.createObjectURL(t),
                        i = { ...e.avatarDecorationAssets };
                    return (
                        (i[t.name] = { type: c.Jn.AVATAR_DECORATION, name: t.name, src: n }),
                        { ...e, avatarDecorationAssets: i, previewEnabled: !0 }
                    );
                });
            }),
        deleteAvatarDecorationAsset: (t) =>
            (0, s.r)(() => {
                e((e) => {
                    let r = e.avatarDecorationAssets[t];
                    if (null == r) return e;
                    URL.revokeObjectURL(r.src);
                    let { [t]: n, ...i } = e.avatarDecorationAssets,
                        a = Object.keys(i).length > 0 || Object.keys(e.collectionAssets).length > 0;
                    return { ...e, avatarDecorationAssets: i, previewEnabled: a };
                });
            }),
        clearAssets: () =>
            (0, s.r)(() => {
                e(
                    (e) => (
                        Object.values(e.collectionAssets).forEach((e) => URL.revokeObjectURL(e.src)),
                        Object.values(e.avatarDecorationAssets).forEach((e) => URL.revokeObjectURL(e.src)),
                        {
                            collectionAssets: {},
                            avatarDecorationAssets: {},
                            previewEnabled: !1,
                            previewProfileEffectSkuId: null,
                            previewAvatarDecorationKey: null,
                            heroLogoMaxHeight: null,
                            heroResponsive: !1,
                        }
                    ),
                );
            }),
        setPreviewProfileEffectSkuId: (t) =>
            (0, s.r)(() => e({ previewProfileEffectSkuId: t, previewEnabled: null != t })),
        setPreviewAvatarDecorationKey: (t) =>
            (0, s.r)(() => e({ previewAvatarDecorationKey: t, previewEnabled: null != t })),
    })),
    u = () => {
        let e = d((e) => e.collectionAssets),
            t = d((e) => e.avatarDecorationAssets);
        return n.useMemo(
            () => ({
                collectionAssets: Object.values(e).sort((e, t) => e.name.localeCompare(t.name)),
                avatarDecorationAssets: Object.values(t).sort((e, t) => e.name.localeCompare(t.name)),
            }),
            [e, t],
        );
    },
    _ = (e) => d((t) => (t.previewEnabled ? t.collectionAssets[e]?.src : null)),
    p = (e) => {
        let { previewEnabled: t, previewProfileEffectSkuId: r } = d(),
            a = (0, l.ZK)(t ? r : null);
        return n.useMemo(() => {
            if (null == a || null == e) return null;
            let { effects: t, stillFrames: r } = a,
                n = null != r && Object.keys(r).length > 0;
            if (0 === t.length && !n) return null;
            let s = (0, i.cloneDeep)(e);
            return (
                (s.title = a.name),
                (s.effects = t.map((e) => {
                    let { base64: t, ...r } = e;
                    return r;
                })),
                n &&
                    ((s.reducedMotionSrc = r[o.qH.REDUCED_MOTION]?.src ?? ""),
                    (s.staticFrameSrc = r[o.qH.STATIC]?.src ?? ""),
                    (s.thumbnailPreviewSrc = r[o.qH.THUMBNAIL]?.src ?? "")),
                s
            );
        }, [a, e]);
    },
    f = () =>
        d((e) => {
            if (!e.previewEnabled) return null;
            let t = e.previewAvatarDecorationKey;
            if (null != t) return e.avatarDecorationAssets[t]?.src ?? null;
            let r = Object.values(e.avatarDecorationAssets);
            return r[0]?.src;
        });
