n.d(t, { C: () => p, JE: () => d, NE: () => u, VU: () => f, mb: () => _ }), n(323874), n(14289), n(35956);
var a = n(64700),
    i = n(735438),
    l = n(353640),
    r = n(121894),
    o = n(816866),
    s = n(87558),
    c = n(559474);
let d = (0, l.v)((e) => ({
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
            (0, r.r)(() => {
                e((e) => {
                    let a = e.collectionAssets[t];
                    null != a && URL.revokeObjectURL(a.src);
                    let i = URL.createObjectURL(n),
                        l = { ...e.collectionAssets };
                    return (
                        (l[t] = { type: t, name: n.name, src: i }), { ...e, collectionAssets: l, previewEnabled: !0 }
                    );
                });
            }),
        deleteCollectionAsset: (t) =>
            (0, r.r)(() => {
                e((e) => {
                    let n = e.collectionAssets[t];
                    if (null == n) return e;
                    URL.revokeObjectURL(n.src);
                    let { [t]: a, ...i } = e.collectionAssets,
                        l = Object.keys(i).length > 0 || Object.keys(e.avatarDecorationAssets).length > 0;
                    return { ...e, collectionAssets: i, previewEnabled: l };
                });
            }),
        upsertAvatarDecorationAsset: (t) =>
            (0, r.r)(() => {
                e((e) => {
                    let n = e.avatarDecorationAssets[t.name];
                    null != n && URL.revokeObjectURL(n.src);
                    let a = URL.createObjectURL(t),
                        i = { ...e.avatarDecorationAssets };
                    return (
                        (i[t.name] = { type: c.Jn.AVATAR_DECORATION, name: t.name, src: a }),
                        { ...e, avatarDecorationAssets: i, previewEnabled: !0 }
                    );
                });
            }),
        deleteAvatarDecorationAsset: (t) =>
            (0, r.r)(() => {
                e((e) => {
                    let n = e.avatarDecorationAssets[t];
                    if (null == n) return e;
                    URL.revokeObjectURL(n.src);
                    let { [t]: a, ...i } = e.avatarDecorationAssets,
                        l = Object.keys(i).length > 0 || Object.keys(e.collectionAssets).length > 0;
                    return { ...e, avatarDecorationAssets: i, previewEnabled: l };
                });
            }),
        clearAssets: () =>
            (0, r.r)(() => {
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
            (0, r.r)(() => e({ previewProfileEffectSkuId: t, previewEnabled: null != t })),
        setPreviewAvatarDecorationKey: (t) =>
            (0, r.r)(() => e({ previewAvatarDecorationKey: t, previewEnabled: null != t })),
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
            l = (0, o.ZK)(t ? n : null);
        return a.useMemo(() => {
            if (null == l || null == e) return null;
            let { effects: t, stillFrames: n } = l,
                a = null != n && Object.keys(n).length > 0;
            if (0 === t.length && !a) return null;
            let r = (0, i.cloneDeep)(e);
            return (
                (r.title = l.name),
                (r.effects = t.map((e) => {
                    let { base64: t, ...n } = e;
                    return n;
                })),
                a &&
                    ((r.reducedMotionSrc = n[s.qH.REDUCED_MOTION]?.src ?? ""),
                    (r.staticFrameSrc = n[s.qH.STATIC]?.src ?? ""),
                    (r.thumbnailPreviewSrc = n[s.qH.THUMBNAIL]?.src ?? "")),
                r
            );
        }, [l, e]);
    },
    f = () =>
        d((e) => {
            if (!e.previewEnabled) return null;
            let t = e.previewAvatarDecorationKey;
            if (null != t) return e.avatarDecorationAssets[t]?.src ?? null;
            let n = Object.values(e.avatarDecorationAssets);
            return n[0]?.src;
        });
