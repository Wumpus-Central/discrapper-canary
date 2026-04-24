"use strict";
n.d(t, { C: () => p, JE: () => d, NE: () => u, VU: () => m, mb: () => _ }), n(323874), n(14289), n(35956);
var a = n(64700),
    r = n(735438),
    i = n(353640),
    l = n(121894),
    s = n(816866),
    o = n(87558),
    c = n(559474);
let d = (0, i.v)((e) => ({
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
        upsertCollectionAsset: (t, n) =>
            (0, l.r)(() => {
                e((e) => {
                    let a = e.collectionAssets[t];
                    null != a && URL.revokeObjectURL(a.src);
                    let r = URL.createObjectURL(n),
                        i = { ...e.collectionAssets };
                    return (
                        (i[t] = { type: t, name: n.name, src: r }), { ...e, collectionAssets: i, previewEnabled: !0 }
                    );
                });
            }),
        deleteCollectionAsset: (t) =>
            (0, l.r)(() => {
                e((e) => {
                    let n = e.collectionAssets[t];
                    if (null == n) return e;
                    URL.revokeObjectURL(n.src);
                    let { [t]: a, ...r } = e.collectionAssets,
                        i = Object.keys(r).length > 0 || Object.keys(e.avatarDecorationAssets).length > 0;
                    return { ...e, collectionAssets: r, previewEnabled: i };
                });
            }),
        upsertAvatarDecorationAsset: (t) =>
            (0, l.r)(() => {
                e((e) => {
                    let n = e.avatarDecorationAssets[t.name];
                    null != n && URL.revokeObjectURL(n.src);
                    let a = URL.createObjectURL(t),
                        r = { ...e.avatarDecorationAssets };
                    return (
                        (r[t.name] = { type: c.Jn.AVATAR_DECORATION, name: t.name, src: a }),
                        { ...e, avatarDecorationAssets: r, previewEnabled: !0 }
                    );
                });
            }),
        deleteAvatarDecorationAsset: (t) =>
            (0, l.r)(() => {
                e((e) => {
                    let n = e.avatarDecorationAssets[t];
                    if (null == n) return e;
                    URL.revokeObjectURL(n.src);
                    let { [t]: a, ...r } = e.avatarDecorationAssets,
                        i = Object.keys(r).length > 0 || Object.keys(e.collectionAssets).length > 0;
                    return { ...e, avatarDecorationAssets: r, previewEnabled: i };
                });
            }),
        clearAssets: () =>
            (0, l.r)(() => {
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
            (0, l.r)(() => e({ previewProfileEffectSkuId: t, previewEnabled: null != t })),
        setPreviewAvatarDecorationKey: (t) =>
            (0, l.r)(() => e({ previewAvatarDecorationKey: t, previewEnabled: null != t })),
    })),
    u = () => {
        let e = d((e) => e.collectionAssets),
            t = d((e) => e.avatarDecorationAssets);
        return a.useMemo(
            () => ({
                collectionAssets: Object.values(e).sort((e, t) => e.name.localeCompare(t.name)),
                avatarDecorationAssets: Object.values(t).sort((e, t) => e.name.localeCompare(t.name)),
            }),
            [e, t],
        );
    },
    _ = (e) => d((t) => (t.previewEnabled ? t.collectionAssets[e]?.src : null)),
    p = (e) => {
        let { previewEnabled: t, previewProfileEffectSkuId: n } = d(),
            i = (0, s.ZK)(t ? n : null);
        return a.useMemo(() => {
            if (null == i || null == e) return null;
            let { effects: t, stillFrames: n } = i,
                a = null != n && Object.keys(n).length > 0;
            if (0 === t.length && !a) return null;
            let l = (0, r.cloneDeep)(e);
            return (
                (l.title = i.name),
                (l.effects = t.map((e) => {
                    let { base64: t, ...n } = e;
                    return n;
                })),
                a &&
                    ((l.reducedMotionSrc = n[o.qH.REDUCED_MOTION]?.src ?? ""),
                    (l.staticFrameSrc = n[o.qH.STATIC]?.src ?? ""),
                    (l.thumbnailPreviewSrc = n[o.qH.THUMBNAIL]?.src ?? "")),
                l
            );
        }, [i, e]);
    },
    m = () =>
        d((e) => {
            if (!e.previewEnabled) return null;
            let t = e.previewAvatarDecorationKey;
            if (null != t) return e.avatarDecorationAssets[t]?.src ?? null;
            let n = Object.values(e.avatarDecorationAssets);
            return n[0]?.src;
        });
