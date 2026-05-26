"use strict";
n.d(t, { C: () => p, JE: () => _, NE: () => f, VU: () => E, bA: () => g, mb: () => h, oM: () => m }),
    n(323874),
    n(14289),
    n(35956);
var i = n(64700),
    r = n(735438),
    s = n(353640),
    a = n(121894),
    o = n(816866),
    l = n(87558),
    u = n(559474);
function c(e) {
    null != e.previewSrc && URL.revokeObjectURL(e.previewSrc),
        Object.values(e.layerSrcByLayerId).forEach((e) => URL.revokeObjectURL(e));
}
function d(e) {
    let { collectionAssets: t, avatarDecorationAssets: n, profileFrameAssets: i, previewProfileEffectSkuId: r } = e;
    return Object.keys(t).length > 0 || Object.keys(n).length > 0 || Object.keys(i).length > 0 || null != r;
}
let _ = (0, s.v)((e) => ({
        previewEnabled: !1,
        collectionAssets: {},
        avatarDecorationAssets: {},
        profileFrameAssets: {},
        previewProfileEffectSkuId: null,
        previewAvatarDecorationKey: null,
        previewProfileFrameKey: null,
        heroLogoMaxHeight: null,
        heroResponsive: !1,
        setPreviewEnabled: (t) => e({ previewEnabled: t }),
        setHeroLogoMaxHeight: (t) => e({ heroLogoMaxHeight: t }),
        setHeroResponsive: (t) => e({ heroResponsive: t }),
        upsertCollectionAsset: (t, n) =>
            (0, a.r)(() => {
                e((e) => {
                    let i = e.collectionAssets[t];
                    null != i && URL.revokeObjectURL(i.src);
                    let r = URL.createObjectURL(n),
                        s = { ...e.collectionAssets };
                    return (
                        (s[t] = { type: t, name: n.name, src: r }), { ...e, collectionAssets: s, previewEnabled: !0 }
                    );
                });
            }),
        deleteCollectionAsset: (t) =>
            (0, a.r)(() => {
                e((e) => {
                    let n = e.collectionAssets[t];
                    if (null == n) return e;
                    URL.revokeObjectURL(n.src);
                    let { [t]: i, ...r } = e.collectionAssets;
                    return { ...e, collectionAssets: r, previewEnabled: d({ ...e, collectionAssets: r }) };
                });
            }),
        upsertAvatarDecorationAsset: (t) =>
            (0, a.r)(() => {
                e((e) => {
                    let n = e.avatarDecorationAssets[t.name];
                    null != n && URL.revokeObjectURL(n.src);
                    let i = URL.createObjectURL(t),
                        r = { ...e.avatarDecorationAssets };
                    return (
                        (r[t.name] = { type: u.Jn.AVATAR_DECORATION, name: t.name, src: i }),
                        { ...e, avatarDecorationAssets: r, previewEnabled: !0 }
                    );
                });
            }),
        deleteAvatarDecorationAsset: (t) =>
            (0, a.r)(() => {
                e((e) => {
                    let n = e.avatarDecorationAssets[t];
                    if (null == n) return e;
                    URL.revokeObjectURL(n.src);
                    let { [t]: i, ...r } = e.avatarDecorationAssets;
                    return { ...e, avatarDecorationAssets: r, previewEnabled: d({ ...e, avatarDecorationAssets: r }) };
                });
            }),
        upsertProfileFrame: (t, n) =>
            (0, a.r)(() => {
                e((e) => {
                    let i = e.profileFrameAssets[t];
                    return (
                        null != i && c(i),
                        { ...e, profileFrameAssets: { ...e.profileFrameAssets, [t]: n }, previewEnabled: !0 }
                    );
                });
            }),
        deleteProfileFrame: (t) =>
            (0, a.r)(() => {
                e((e) => {
                    let n = e.profileFrameAssets[t];
                    if (null == n) return e;
                    c(n);
                    let { [t]: i, ...r } = e.profileFrameAssets,
                        s = e.previewProfileFrameKey === t;
                    return {
                        ...e,
                        profileFrameAssets: r,
                        previewProfileFrameKey: s ? null : e.previewProfileFrameKey,
                        previewEnabled: d({ ...e, profileFrameAssets: r }),
                    };
                });
            }),
        clearAssets: () =>
            (0, a.r)(() => {
                e(
                    (e) => (
                        Object.values(e.collectionAssets).forEach((e) => URL.revokeObjectURL(e.src)),
                        Object.values(e.avatarDecorationAssets).forEach((e) => URL.revokeObjectURL(e.src)),
                        Object.values(e.profileFrameAssets).forEach(c),
                        {
                            collectionAssets: {},
                            avatarDecorationAssets: {},
                            profileFrameAssets: {},
                            previewEnabled: !1,
                            previewProfileEffectSkuId: null,
                            previewAvatarDecorationKey: null,
                            previewProfileFrameKey: null,
                            heroLogoMaxHeight: null,
                            heroResponsive: !1,
                        }
                    ),
                );
            }),
        setPreviewProfileEffectSkuId: (t) =>
            (0, a.r)(() =>
                e((e) => ({
                    previewProfileEffectSkuId: t,
                    previewEnabled: null != t || d({ ...e, previewProfileEffectSkuId: t }),
                })),
            ),
        setPreviewAvatarDecorationKey: (t) =>
            (0, a.r)(() => e((e) => ({ previewAvatarDecorationKey: t, previewEnabled: null != t || d(e) }))),
        setPreviewProfileFrameKey: (t) =>
            (0, a.r)(() => e((e) => ({ previewProfileFrameKey: t, previewEnabled: null != t || d(e) }))),
    })),
    f = () => {
        let e = _((e) => e.collectionAssets),
            t = _((e) => e.avatarDecorationAssets);
        return i.useMemo(
            () => ({
                collectionAssets: Object.values(e).sort((e, t) => e.name.localeCompare(t.name)),
                avatarDecorationAssets: Object.values(t).sort((e, t) => e.name.localeCompare(t.name)),
            }),
            [e, t],
        );
    },
    h = (e) => _((t) => (t.previewEnabled ? t.collectionAssets[e]?.src : null)),
    p = (e) => {
        let { previewEnabled: t, previewProfileEffectSkuId: n } = _(),
            s = (0, o.ZK)(t ? n : null);
        return i.useMemo(() => {
            if (null == s || null == e) return null;
            let { effects: t, stillFrames: n } = s,
                i = null != n && Object.keys(n).length > 0;
            if (0 === t.length && !i) return null;
            let a = (0, r.cloneDeep)(e);
            return (
                (a.title = s.name),
                (a.effects = t.map((e) => {
                    let { base64: t, ...n } = e;
                    return n;
                })),
                i &&
                    ((a.reducedMotionSrc = n[l.qH.REDUCED_MOTION]?.src ?? ""),
                    (a.staticFrameSrc = n[l.qH.STATIC]?.src ?? ""),
                    (a.thumbnailPreviewSrc = n[l.qH.THUMBNAIL]?.src ?? "")),
                a
            );
        }, [s, e]);
    },
    E = () =>
        _((e) => {
            if (!e.previewEnabled) return null;
            let t = e.previewAvatarDecorationKey;
            if (null != t) return e.avatarDecorationAssets[t]?.src ?? null;
            let n = Object.values(e.avatarDecorationAssets);
            return n[0]?.src;
        }),
    m = () => {
        let e = _((e) =>
            e.previewEnabled && null != e.previewProfileFrameKey
                ? (e.profileFrameAssets[e.previewProfileFrameKey] ?? null)
                : null,
        );
        return i.useMemo(() => {
            if (null == e) return null;
            let t = {};
            for (let n of e.layers) {
                let i = e.layerSrcByLayerId[n.id];
                if (null == i) continue;
                let r = new Image();
                (r.src = i), (t[n.id] = r);
            }
            return { layers: e.layers, layerData: t };
        }, [e]);
    },
    g = () => {
        let e = _((e) => e.profileFrameAssets);
        return i.useMemo(() => Object.values(e).sort((e, t) => e.key.localeCompare(t.key)), [e]);
    };
