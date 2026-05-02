a.d(t, { C: () => p, JE: () => u, NE: () => _, VU: () => E, mb: () => A }), a(323874), a(14289), a(35956);
var r = a(64700),
    n = a(735438),
    l = a(353640),
    o = a(121894),
    i = a(816866),
    s = a(87558),
    c = a(559474);
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
        upsertCollectionAsset: (t, a) =>
            (0, o.r)(() => {
                e((e) => {
                    let r = e.collectionAssets[t];
                    null != r && URL.revokeObjectURL(r.src);
                    let n = URL.createObjectURL(a),
                        l = { ...e.collectionAssets };
                    return (
                        (l[t] = { type: t, name: a.name, src: n }), { ...e, collectionAssets: l, previewEnabled: !0 }
                    );
                });
            }),
        deleteCollectionAsset: (t) =>
            (0, o.r)(() => {
                e((e) => {
                    let a = e.collectionAssets[t];
                    if (null == a) return e;
                    URL.revokeObjectURL(a.src);
                    let { [t]: r, ...n } = e.collectionAssets,
                        l = Object.keys(n).length > 0 || Object.keys(e.avatarDecorationAssets).length > 0;
                    return { ...e, collectionAssets: n, previewEnabled: l };
                });
            }),
        upsertAvatarDecorationAsset: (t) =>
            (0, o.r)(() => {
                e((e) => {
                    let a = e.avatarDecorationAssets[t.name];
                    null != a && URL.revokeObjectURL(a.src);
                    let r = URL.createObjectURL(t),
                        n = { ...e.avatarDecorationAssets };
                    return (
                        (n[t.name] = { type: c.Jn.AVATAR_DECORATION, name: t.name, src: r }),
                        { ...e, avatarDecorationAssets: n, previewEnabled: !0 }
                    );
                });
            }),
        deleteAvatarDecorationAsset: (t) =>
            (0, o.r)(() => {
                e((e) => {
                    let a = e.avatarDecorationAssets[t];
                    if (null == a) return e;
                    URL.revokeObjectURL(a.src);
                    let { [t]: r, ...n } = e.avatarDecorationAssets,
                        l = Object.keys(n).length > 0 || Object.keys(e.collectionAssets).length > 0;
                    return { ...e, avatarDecorationAssets: n, previewEnabled: l };
                });
            }),
        clearAssets: () =>
            (0, o.r)(() => {
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
            (0, o.r)(() => e({ previewProfileEffectSkuId: t, previewEnabled: null != t })),
        setPreviewAvatarDecorationKey: (t) =>
            (0, o.r)(() => e({ previewAvatarDecorationKey: t, previewEnabled: null != t })),
    })),
    _ = () => {
        let e = u((e) => e.collectionAssets),
            t = u((e) => e.avatarDecorationAssets);
        return r.useMemo(
            () => ({
                collectionAssets: Object.values(e).sort((e, t) => e.name.localeCompare(t.name)),
                avatarDecorationAssets: Object.values(t).sort((e, t) => e.name.localeCompare(t.name)),
            }),
            [e, t],
        );
    },
    A = (e) => u((t) => (t.previewEnabled ? t.collectionAssets[e]?.src : null)),
    p = (e) => {
        let { previewEnabled: t, previewProfileEffectSkuId: a } = u(),
            l = (0, i.ZK)(t ? a : null);
        return r.useMemo(() => {
            if (null == l || null == e) return null;
            let { effects: t, stillFrames: a } = l,
                r = null != a && Object.keys(a).length > 0;
            if (0 === t.length && !r) return null;
            let o = (0, n.cloneDeep)(e);
            return (
                (o.title = l.name),
                (o.effects = t.map((e) => {
                    let { base64: t, ...a } = e;
                    return a;
                })),
                r &&
                    ((o.reducedMotionSrc = a[s.qH.REDUCED_MOTION]?.src ?? ""),
                    (o.staticFrameSrc = a[s.qH.STATIC]?.src ?? ""),
                    (o.thumbnailPreviewSrc = a[s.qH.THUMBNAIL]?.src ?? "")),
                o
            );
        }, [l, e]);
    },
    E = () =>
        u((e) => {
            if (!e.previewEnabled) return null;
            let t = e.previewAvatarDecorationKey;
            if (null != t) return e.avatarDecorationAssets[t]?.src ?? null;
            let a = Object.values(e.avatarDecorationAssets);
            return a[0]?.src;
        });
