"use strict";
n.d(t, { C: () => f, JE: () => c, NE: () => d, VU: () => p, mb: () => _ }), n(323874), n(14289), n(35956);
var r = n(64700),
    i = n(735438),
    s = n(353640),
    a = n(121894),
    o = n(816866),
    l = n(87558),
    u = n(559474);
let c = (0, s.v)((e) => ({
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
            (0, a.r)(() => {
                e((e) => {
                    let r = e.collectionAssets[t];
                    null != r && URL.revokeObjectURL(r.src);
                    let i = URL.createObjectURL(n),
                        s = { ...e.collectionAssets };
                    return (
                        (s[t] = { type: t, name: n.name, src: i }), { ...e, collectionAssets: s, previewEnabled: !0 }
                    );
                });
            }),
        deleteCollectionAsset: (t) =>
            (0, a.r)(() => {
                e((e) => {
                    let n = e.collectionAssets[t];
                    if (null == n) return e;
                    URL.revokeObjectURL(n.src);
                    let { [t]: r, ...i } = e.collectionAssets,
                        s = Object.keys(i).length > 0 || Object.keys(e.avatarDecorationAssets).length > 0;
                    return { ...e, collectionAssets: i, previewEnabled: s };
                });
            }),
        upsertAvatarDecorationAsset: (t) =>
            (0, a.r)(() => {
                e((e) => {
                    let n = e.avatarDecorationAssets[t.name];
                    null != n && URL.revokeObjectURL(n.src);
                    let r = URL.createObjectURL(t),
                        i = { ...e.avatarDecorationAssets };
                    return (
                        (i[t.name] = { type: u.Jn.AVATAR_DECORATION, name: t.name, src: r }),
                        { ...e, avatarDecorationAssets: i, previewEnabled: !0 }
                    );
                });
            }),
        deleteAvatarDecorationAsset: (t) =>
            (0, a.r)(() => {
                e((e) => {
                    let n = e.avatarDecorationAssets[t];
                    if (null == n) return e;
                    URL.revokeObjectURL(n.src);
                    let { [t]: r, ...i } = e.avatarDecorationAssets,
                        s = Object.keys(i).length > 0 || Object.keys(e.collectionAssets).length > 0;
                    return { ...e, avatarDecorationAssets: i, previewEnabled: s };
                });
            }),
        clearAssets: () =>
            (0, a.r)(() => {
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
            (0, a.r)(() => e({ previewProfileEffectSkuId: t, previewEnabled: null != t })),
        setPreviewAvatarDecorationKey: (t) =>
            (0, a.r)(() => e({ previewAvatarDecorationKey: t, previewEnabled: null != t })),
    })),
    d = () => {
        let e = c((e) => e.collectionAssets),
            t = c((e) => e.avatarDecorationAssets);
        return r.useMemo(
            () => ({
                collectionAssets: Object.values(e).sort((e, t) => e.name.localeCompare(t.name)),
                avatarDecorationAssets: Object.values(t).sort((e, t) => e.name.localeCompare(t.name)),
            }),
            [e, t],
        );
    },
    _ = (e) => c((t) => (t.previewEnabled ? t.collectionAssets[e]?.src : null)),
    f = (e) => {
        let { previewEnabled: t, previewProfileEffectSkuId: n } = c(),
            s = (0, o.ZK)(t ? n : null);
        return r.useMemo(() => {
            if (null == s || null == e) return null;
            let { effects: t, stillFrames: n } = s,
                r = null != n && Object.keys(n).length > 0;
            if (0 === t.length && !r) return null;
            let a = (0, i.cloneDeep)(e);
            return (
                (a.title = s.name),
                (a.effects = t.map((e) => {
                    let { base64: t, ...n } = e;
                    return n;
                })),
                r &&
                    ((a.reducedMotionSrc = n[l.qH.REDUCED_MOTION]?.src ?? ""),
                    (a.staticFrameSrc = n[l.qH.STATIC]?.src ?? ""),
                    (a.thumbnailPreviewSrc = n[l.qH.THUMBNAIL]?.src ?? "")),
                a
            );
        }, [s, e]);
    },
    p = () =>
        c((e) => {
            if (!e.previewEnabled) return null;
            let t = e.previewAvatarDecorationKey;
            if (null != t) return e.avatarDecorationAssets[t]?.src ?? null;
            let n = Object.values(e.avatarDecorationAssets);
            return n[0]?.src;
        });
