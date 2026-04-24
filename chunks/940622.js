a.d(t, { C: () => p, JE: () => d, NE: () => u, VU: () => m, mb: () => h }), a(323874), a(14289), a(35956);
var n = a(64700),
    r = a(735438),
    l = a(353640),
    i = a(121894),
    s = a(816866),
    o = a(87558),
    c = a(559474);
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
        upsertCollectionAsset: (t, a) =>
            (0, i.r)(() => {
                e((e) => {
                    let n = e.collectionAssets[t];
                    null != n && URL.revokeObjectURL(n.src);
                    let r = URL.createObjectURL(a),
                        l = { ...e.collectionAssets };
                    return (
                        (l[t] = { type: t, name: a.name, src: r }), { ...e, collectionAssets: l, previewEnabled: !0 }
                    );
                });
            }),
        deleteCollectionAsset: (t) =>
            (0, i.r)(() => {
                e((e) => {
                    let a = e.collectionAssets[t];
                    if (null == a) return e;
                    URL.revokeObjectURL(a.src);
                    let { [t]: n, ...r } = e.collectionAssets,
                        l = Object.keys(r).length > 0 || Object.keys(e.avatarDecorationAssets).length > 0;
                    return { ...e, collectionAssets: r, previewEnabled: l };
                });
            }),
        upsertAvatarDecorationAsset: (t) =>
            (0, i.r)(() => {
                e((e) => {
                    let a = e.avatarDecorationAssets[t.name];
                    null != a && URL.revokeObjectURL(a.src);
                    let n = URL.createObjectURL(t),
                        r = { ...e.avatarDecorationAssets };
                    return (
                        (r[t.name] = { type: c.Jn.AVATAR_DECORATION, name: t.name, src: n }),
                        { ...e, avatarDecorationAssets: r, previewEnabled: !0 }
                    );
                });
            }),
        deleteAvatarDecorationAsset: (t) =>
            (0, i.r)(() => {
                e((e) => {
                    let a = e.avatarDecorationAssets[t];
                    if (null == a) return e;
                    URL.revokeObjectURL(a.src);
                    let { [t]: n, ...r } = e.avatarDecorationAssets,
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
    h = (e) => d((t) => (t.previewEnabled ? t.collectionAssets[e]?.src : null)),
    p = (e) => {
        let { previewEnabled: t, previewProfileEffectSkuId: a } = d(),
            l = (0, s.ZK)(t ? a : null);
        return n.useMemo(() => {
            if (null == l || null == e) return null;
            let { effects: t, stillFrames: a } = l,
                n = null != a && Object.keys(a).length > 0;
            if (0 === t.length && !n) return null;
            let i = (0, r.cloneDeep)(e);
            return (
                (i.title = l.name),
                (i.effects = t.map((e) => {
                    let { base64: t, ...a } = e;
                    return a;
                })),
                n &&
                    ((i.reducedMotionSrc = a[o.qH.REDUCED_MOTION]?.src ?? ""),
                    (i.staticFrameSrc = a[o.qH.STATIC]?.src ?? ""),
                    (i.thumbnailPreviewSrc = a[o.qH.THUMBNAIL]?.src ?? "")),
                i
            );
        }, [l, e]);
    },
    m = () =>
        d((e) => {
            if (!e.previewEnabled) return null;
            let t = e.previewAvatarDecorationKey;
            if (null != t) return e.avatarDecorationAssets[t]?.src ?? null;
            let a = Object.values(e.avatarDecorationAssets);
            return a[0]?.src;
        });
