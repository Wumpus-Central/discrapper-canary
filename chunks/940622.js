t.d(r, { C: () => m, JE: () => d, NE: () => f, VU: () => _, bA: () => g, mb: () => v, oM: () => A }),
    t(323874),
    t(14289),
    t(35956);
var a = t(64700),
    n = t(735438),
    l = t(353640),
    i = t(121894),
    o = t(816866),
    s = t(87558),
    u = t(559474);
function c(e) {
    null != e.previewSrc && URL.revokeObjectURL(e.previewSrc),
        Object.values(e.layerSrcByLayerId).forEach((e) => URL.revokeObjectURL(e));
}
function p(e) {
    let { collectionAssets: r, avatarDecorationAssets: t, profileFrameAssets: a, previewProfileEffectSkuId: n } = e;
    return Object.keys(r).length > 0 || Object.keys(t).length > 0 || Object.keys(a).length > 0 || null != n;
}
let d = (0, l.v)((e) => ({
        previewEnabled: !1,
        collectionAssets: {},
        avatarDecorationAssets: {},
        profileFrameAssets: {},
        previewProfileEffectSkuId: null,
        previewAvatarDecorationKey: null,
        previewProfileFrameKey: null,
        heroLogoMaxHeight: null,
        heroResponsive: !1,
        setPreviewEnabled: (r) => e({ previewEnabled: r }),
        setHeroLogoMaxHeight: (r) => e({ heroLogoMaxHeight: r }),
        setHeroResponsive: (r) => e({ heroResponsive: r }),
        upsertCollectionAsset: (r, t) =>
            (0, i.r)(() => {
                e((e) => {
                    let a = e.collectionAssets[r];
                    null != a && URL.revokeObjectURL(a.src);
                    let n = URL.createObjectURL(t),
                        l = { ...e.collectionAssets };
                    return (
                        (l[r] = { type: r, name: t.name, src: n }), { ...e, collectionAssets: l, previewEnabled: !0 }
                    );
                });
            }),
        deleteCollectionAsset: (r) =>
            (0, i.r)(() => {
                e((e) => {
                    let t = e.collectionAssets[r];
                    if (null == t) return e;
                    URL.revokeObjectURL(t.src);
                    let { [r]: a, ...n } = e.collectionAssets;
                    return { ...e, collectionAssets: n, previewEnabled: p({ ...e, collectionAssets: n }) };
                });
            }),
        upsertAvatarDecorationAsset: (r) =>
            (0, i.r)(() => {
                e((e) => {
                    let t = e.avatarDecorationAssets[r.name];
                    null != t && URL.revokeObjectURL(t.src);
                    let a = URL.createObjectURL(r),
                        n = { ...e.avatarDecorationAssets };
                    return (
                        (n[r.name] = { type: u.Jn.AVATAR_DECORATION, name: r.name, src: a }),
                        { ...e, avatarDecorationAssets: n, previewEnabled: !0 }
                    );
                });
            }),
        deleteAvatarDecorationAsset: (r) =>
            (0, i.r)(() => {
                e((e) => {
                    let t = e.avatarDecorationAssets[r];
                    if (null == t) return e;
                    URL.revokeObjectURL(t.src);
                    let { [r]: a, ...n } = e.avatarDecorationAssets;
                    return { ...e, avatarDecorationAssets: n, previewEnabled: p({ ...e, avatarDecorationAssets: n }) };
                });
            }),
        upsertProfileFrame: (r, t) =>
            (0, i.r)(() => {
                e((e) => {
                    let a = e.profileFrameAssets[r];
                    return (
                        null != a && c(a),
                        { ...e, profileFrameAssets: { ...e.profileFrameAssets, [r]: t }, previewEnabled: !0 }
                    );
                });
            }),
        deleteProfileFrame: (r) =>
            (0, i.r)(() => {
                e((e) => {
                    let t = e.profileFrameAssets[r];
                    if (null == t) return e;
                    c(t);
                    let { [r]: a, ...n } = e.profileFrameAssets,
                        l = e.previewProfileFrameKey === r;
                    return {
                        ...e,
                        profileFrameAssets: n,
                        previewProfileFrameKey: l ? null : e.previewProfileFrameKey,
                        previewEnabled: p({ ...e, profileFrameAssets: n }),
                    };
                });
            }),
        clearAssets: () =>
            (0, i.r)(() => {
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
        setPreviewProfileEffectSkuId: (r) =>
            (0, i.r)(() =>
                e((e) => ({
                    previewProfileEffectSkuId: r,
                    previewEnabled: null != r || p({ ...e, previewProfileEffectSkuId: r }),
                })),
            ),
        setPreviewAvatarDecorationKey: (r) =>
            (0, i.r)(() => e((e) => ({ previewAvatarDecorationKey: r, previewEnabled: null != r || p(e) }))),
        setPreviewProfileFrameKey: (r) =>
            (0, i.r)(() => e((e) => ({ previewProfileFrameKey: r, previewEnabled: null != r || p(e) }))),
    })),
    f = () => {
        let e = d((e) => e.collectionAssets),
            r = d((e) => e.avatarDecorationAssets);
        return a.useMemo(
            () => ({
                collectionAssets: Object.values(e).sort((e, r) => e.name.localeCompare(r.name)),
                avatarDecorationAssets: Object.values(r).sort((e, r) => e.name.localeCompare(r.name)),
            }),
            [e, r],
        );
    },
    v = (e) => d((r) => (r.previewEnabled ? r.collectionAssets[e]?.src : null)),
    m = (e) => {
        let { previewEnabled: r, previewProfileEffectSkuId: t } = d(),
            l = (0, o.ZK)(r ? t : null);
        return a.useMemo(() => {
            if (null == l || null == e) return null;
            let { effects: r, stillFrames: t } = l,
                a = null != t && Object.keys(t).length > 0;
            if (0 === r.length && !a) return null;
            let i = (0, n.cloneDeep)(e);
            return (
                (i.title = l.name),
                (i.effects = r.map((e) => {
                    let { base64: r, ...t } = e;
                    return t;
                })),
                a &&
                    ((i.reducedMotionSrc = t[s.qH.REDUCED_MOTION]?.src ?? ""),
                    (i.staticFrameSrc = t[s.qH.STATIC]?.src ?? ""),
                    (i.thumbnailPreviewSrc = t[s.qH.THUMBNAIL]?.src ?? "")),
                i
            );
        }, [l, e]);
    },
    _ = () =>
        d((e) => {
            if (!e.previewEnabled) return null;
            let r = e.previewAvatarDecorationKey;
            if (null != r) return e.avatarDecorationAssets[r]?.src ?? null;
            let t = Object.values(e.avatarDecorationAssets);
            return t[0]?.src;
        }),
    A = () => {
        let e = d((e) =>
            e.previewEnabled && null != e.previewProfileFrameKey
                ? (e.profileFrameAssets[e.previewProfileFrameKey] ?? null)
                : null,
        );
        return a.useMemo(() => {
            if (null == e) return null;
            let r = {};
            for (let t of e.layers) {
                let a = e.layerSrcByLayerId[t.id];
                if (null == a) continue;
                let n = new Image();
                (n.src = a), (r[t.id] = n);
            }
            return { layers: e.layers, layerData: r };
        }, [e]);
    },
    g = () => {
        let e = d((e) => e.profileFrameAssets);
        return a.useMemo(() => Object.values(e).sort((e, r) => e.key.localeCompare(r.key)), [e]);
    };
