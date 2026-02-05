"use strict";
n.d(t, { C: () => p, Iv: () => A, JE: () => d, NE: () => _, br: () => I, mb: () => f, od: () => E }),
    n(323874),
    n(14289),
    n(35956);
var r = n(64700),
    i = n(735438),
    a = n(353640),
    s = n(575593),
    o = n(121894),
    l = n(43708),
    u = n(14752),
    c = n(559474);
let d = (0, a.v)((e) => ({
        previewEnabled: !1,
        collectionAssets: {},
        avatarDecorationAssets: {},
        previewProfileEffectSkuId: null,
        previewAvatarDecorationSkuId: null,
        setPreviewEnabled: (t) => e({ previewEnabled: t }),
        upsertCollectionAsset: (t, n) =>
            (0, o.r)(() => {
                e((e) => {
                    let r = e.collectionAssets[t];
                    null != r && URL.revokeObjectURL(r.src);
                    let i = URL.createObjectURL(n),
                        a = { ...e.collectionAssets };
                    return (
                        (a[t] = { type: t, name: n.name, src: i }), { ...e, collectionAssets: a, previewEnabled: !0 }
                    );
                });
            }),
        deleteCollectionAsset: (t) =>
            (0, o.r)(() => {
                e((e) => {
                    let n = e.collectionAssets[t];
                    if (null == n) return e;
                    URL.revokeObjectURL(n.src);
                    let { [t]: r, ...i } = e.collectionAssets,
                        a = Object.keys(i).length > 0 || Object.keys(e.avatarDecorationAssets).length > 0;
                    return { ...e, collectionAssets: i, previewEnabled: a };
                });
            }),
        upsertAvatarDecorationAsset: (t) =>
            (0, o.r)(() => {
                e((e) => {
                    let n = e.avatarDecorationAssets[t.name];
                    null != n && URL.revokeObjectURL(n.src);
                    let r = URL.createObjectURL(t),
                        i = { ...e.avatarDecorationAssets };
                    return (
                        (i[t.name] = { type: c.Jn.AVATAR_DECORATION, name: t.name, src: r }),
                        { ...e, avatarDecorationAssets: i, previewEnabled: !0 }
                    );
                });
            }),
        deleteAvatarDecorationAsset: (t) =>
            (0, o.r)(() => {
                e((e) => {
                    let n = e.avatarDecorationAssets[t];
                    if (null == n) return e;
                    URL.revokeObjectURL(n.src);
                    let { [t]: r, ...i } = e.avatarDecorationAssets,
                        a = Object.keys(i).length > 0 || Object.keys(e.collectionAssets).length > 0;
                    return { ...e, avatarDecorationAssets: i, previewEnabled: a };
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
                            previewAvatarDecorationSkuId: null,
                        }
                    ),
                );
            }),
        setPreviewProfileEffectSkuId: (t) =>
            (0, o.r)(() => e({ previewProfileEffectSkuId: t, previewEnabled: null != t })),
        setPreviewAvatarDecorationSkuId: (t) =>
            (0, o.r)(() => e({ previewAvatarDecorationSkuId: t, previewEnabled: null != t })),
    })),
    _ = () => {
        let e = d((e) => e.collectionAssets),
            t = d((e) => e.avatarDecorationAssets);
        return r.useMemo(
            () => ({
                collectionAssets: Object.values(e).sort((e, t) => e.name.localeCompare(t.name)),
                avatarDecorationAssets: Object.values(t).sort((e, t) => e.name.localeCompare(t.name)),
            }),
            [e, t],
        );
    },
    f = (e) => d((t) => (t.previewEnabled ? t.collectionAssets[e]?.src : null)),
    p = (e) => {
        let { previewEnabled: t, previewProfileEffectSkuId: n } = d(),
            a = t ? n : null,
            s = (0, l.ZK)(a);
        return r.useMemo(() => {
            if (null == s || null == e) return null;
            let { effects: t, stillFrames: n } = s.config,
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
                    ((a.reducedMotionSrc = n[u.qH.REDUCED_MOTION]?.src ?? ""),
                    (a.staticFrameSrc = n[u.qH.STATIC]?.src ?? ""),
                    (a.thumbnailPreviewSrc = n[u.qH.THUMBNAIL]?.src ?? "")),
                a
            );
        }, [s, e]);
    },
    h = (e, t) => ({ ...e, asset: t.src }),
    m = (e, t) => {
        if (e.type !== s.R.AVATAR_DECORATION) return e;
        let n = (0, i.cloneDeep)(e);
        if (n.items.length > 0) {
            let r = n.items[0];
            (e.name = t.name.replace(".png", "")), (n.items[0] = h(r, t));
        }
        return n;
    },
    g = (e, t, n) => {
        let r = Object.values(t);
        return e && 0 !== r.length ? (null != n ? t[n] : r[0]) : null;
    },
    E = (e) => {
        let { previewEnabled: t, previewAvatarDecorationSkuId: n } = d(),
            i = d((e) => e.avatarDecorationAssets);
        return r.useMemo(() => {
            let r = Object.values(i);
            if (!t || 0 === r.length || 0 === e.length) return e;
            if (null != n) {
                let t = i[n];
                return null == t ? e : e.map((e) => m(e, t));
            }
            return e.map((e, t) => {
                let n = t % r.length;
                return m(e, r[n]);
            });
        }, [e, t, n, i]);
    },
    A = (e) => {
        let { previewEnabled: t, previewAvatarDecorationSkuId: n } = d(),
            i = d((e) => e.avatarDecorationAssets);
        return r.useMemo(() => {
            if (null == e || e.type !== s.R.AVATAR_DECORATION || 0 === e.items.length) return e;
            let r = g(t, i, n);
            return null == r ? e : m(e, r);
        }, [e, t, n, i]);
    },
    I = (e) => {
        let { previewEnabled: t, previewAvatarDecorationSkuId: n } = d(),
            i = d((e) => e.avatarDecorationAssets);
        return r.useMemo(() => {
            if (null == e) return null;
            let r = g(t, i, n);
            return null == r ? e : h(e, r);
        }, [e, t, n, i]);
    };
