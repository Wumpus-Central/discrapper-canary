n.d(t, { C: () => A, JE: () => u, NE: () => d, VU: () => g, mb: () => p }), n(323874), n(14289), n(35956);
var a = n(64700),
    r = n(735438),
    l = n(353640),
    i = n(121894),
    o = n(816866),
    s = n(87558),
    c = n(559474);
let u = (0, l.v)((e) => ({
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
            (0, i.r)(() => {
                e((e) => {
                    let a = e.collectionAssets[t];
                    null != a && URL.revokeObjectURL(a.src);
                    let r = URL.createObjectURL(n),
                        l = { ...e.collectionAssets };
                    return (
                        (l[t] = { type: t, name: n.name, src: r }), { ...e, collectionAssets: l, previewEnabled: !0 }
                    );
                });
            }),
        deleteCollectionAsset: (t) =>
            (0, i.r)(() => {
                e((e) => {
                    let n = e.collectionAssets[t];
                    if (null == n) return e;
                    URL.revokeObjectURL(n.src);
                    let { [t]: a, ...r } = e.collectionAssets,
                        l = Object.keys(r).length > 0 || Object.keys(e.avatarDecorationAssets).length > 0;
                    return { ...e, collectionAssets: r, previewEnabled: l };
                });
            }),
        upsertAvatarDecorationAsset: (t) =>
            (0, i.r)(() => {
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
            (0, i.r)(() => {
                e((e) => {
                    let n = e.avatarDecorationAssets[t];
                    if (null == n) return e;
                    URL.revokeObjectURL(n.src);
                    let { [t]: a, ...r } = e.avatarDecorationAssets,
                        l = Object.keys(r).length > 0 || Object.keys(e.collectionAssets).length > 0;
                    return { ...e, avatarDecorationAssets: r, previewEnabled: l };
                });
            }),
        clearAssets: () =>
            (0, i.r)(() => {
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
            (0, i.r)(() => e({ previewProfileEffectSkuId: t, previewEnabled: null != t })),
        setPreviewAvatarDecorationKey: (t) =>
            (0, i.r)(() => e({ previewAvatarDecorationKey: t, previewEnabled: null != t })),
    })),
    d = () => {
        let e = u((e) => e.collectionAssets),
            t = u((e) => e.avatarDecorationAssets);
        return a.useMemo(
            () => ({
                collectionAssets: Object.values(e).sort((e, t) => e.name.localeCompare(t.name)),
                avatarDecorationAssets: Object.values(t).sort((e, t) => e.name.localeCompare(t.name)),
            }),
            [e, t],
        );
    },
    p = (e) => u((t) => (t.previewEnabled ? t.collectionAssets[e]?.src : null)),
    A = (e) => {
        let { previewEnabled: t, previewProfileEffectSkuId: n } = u(),
            l = (0, o.ZK)(t ? n : null);
        return a.useMemo(() => {
            if (null == l || null == e) return null;
            let { effects: t, stillFrames: n } = l,
                a = null != n && Object.keys(n).length > 0;
            if (0 === t.length && !a) return null;
            let i = (0, r.cloneDeep)(e);
            return (
                (i.title = l.name),
                (i.effects = t.map((e) => {
                    let { base64: t, ...n } = e;
                    return n;
                })),
                a &&
                    ((i.reducedMotionSrc = n[s.qH.REDUCED_MOTION]?.src ?? ""),
                    (i.staticFrameSrc = n[s.qH.STATIC]?.src ?? ""),
                    (i.thumbnailPreviewSrc = n[s.qH.THUMBNAIL]?.src ?? "")),
                i
            );
        }, [l, e]);
    },
    g = () =>
        u((e) => {
            if (!e.previewEnabled) return null;
            let t = e.previewAvatarDecorationKey;
            if (null != t) return e.avatarDecorationAssets[t]?.src ?? null;
            let n = Object.values(e.avatarDecorationAssets);
            return n[0]?.src;
        });
