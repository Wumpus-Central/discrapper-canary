t.d(r, { C: () => v, JE: () => m, NE: () => _, VU: () => g, bA: () => E, eo: () => O, lM: () => h, mb: () => d }),
    t(323874),
    t(14289),
    t(35956);
var n = t(582128),
    a = t(435558),
    l = t(196765),
    i = t(121894),
    o = t(816866),
    s = t(87558),
    u = t(875741),
    c = t(25176);
function p(e) {
    null != e.previewSrc && URL.revokeObjectURL(e.previewSrc),
        Object.values(e.layerSrcByLayerId).forEach((e) => URL.revokeObjectURL(e));
}
function f(e) {
    let { collectionAssets: r, avatarDecorationAssets: t, profileFrameAssets: n, previewProfileEffectSkuId: a } = e;
    return Object.keys(r).length > 0 || Object.keys(t).length > 0 || Object.keys(n).length > 0 || null != a;
}
let m = (0, l.v)((e) => ({
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
                let n = e.collectionAssets[r];
                null != n && URL.revokeObjectURL(n.src);
                let a = URL.createObjectURL(t),
                    l = { ...e.collectionAssets };
                return (l[r] = { type: r, name: t.name, src: a }), { ...e, collectionAssets: l, previewEnabled: !0 };
            });
        }),
    deleteCollectionAsset: (r) =>
        (0, i.r)(() => {
            e((e) => {
                let t = e.collectionAssets[r];
                if (null == t) return e;
                URL.revokeObjectURL(t.src);
                let { [r]: n, ...a } = e.collectionAssets;
                return { ...e, collectionAssets: a, previewEnabled: f({ ...e, collectionAssets: a }) };
            });
        }),
    upsertAvatarDecorationAsset: (r) =>
        (0, i.r)(() => {
            e((e) => {
                let t = e.avatarDecorationAssets[r.name];
                null != t && URL.revokeObjectURL(t.src);
                let n = URL.createObjectURL(r),
                    a = { ...e.avatarDecorationAssets };
                return (
                    (a[r.name] = { type: c.Jn.AVATAR_DECORATION, name: r.name, src: n }),
                    {
                        ...e,
                        avatarDecorationAssets: a,
                        previewAvatarDecorationKey: e.previewAvatarDecorationKey ?? r.name,
                        previewEnabled: !0,
                    }
                );
            });
        }),
    deleteAvatarDecorationAsset: (r) =>
        (0, i.r)(() => {
            e((e) => {
                let t = e.avatarDecorationAssets[r];
                if (null == t) return e;
                URL.revokeObjectURL(t.src);
                let { [r]: n, ...a } = e.avatarDecorationAssets,
                    l = e.previewAvatarDecorationKey === r;
                return {
                    ...e,
                    avatarDecorationAssets: a,
                    previewAvatarDecorationKey: l ? null : e.previewAvatarDecorationKey,
                    previewEnabled: f({ ...e, avatarDecorationAssets: a }),
                };
            });
        }),
    upsertProfileFrame: (r, t) =>
        (0, i.r)(() => {
            e((e) => {
                let n = e.profileFrameAssets[r];
                return (
                    null != n && p(n),
                    {
                        ...e,
                        profileFrameAssets: { ...e.profileFrameAssets, [r]: t },
                        previewProfileFrameKey: e.previewProfileFrameKey ?? r,
                        previewEnabled: !0,
                    }
                );
            });
        }),
    deleteProfileFrame: (r) =>
        (0, i.r)(() => {
            e((e) => {
                let t = e.profileFrameAssets[r];
                if (null == t) return e;
                p(t);
                let { [r]: n, ...a } = e.profileFrameAssets,
                    l = e.previewProfileFrameKey === r;
                return {
                    ...e,
                    profileFrameAssets: a,
                    previewProfileFrameKey: l ? null : e.previewProfileFrameKey,
                    previewEnabled: f({ ...e, profileFrameAssets: a }),
                };
            });
        }),
    clearAssets: () =>
        (0, i.r)(() => {
            e(
                (e) => (
                    Object.values(e.collectionAssets).forEach((e) => URL.revokeObjectURL(e.src)),
                    Object.values(e.avatarDecorationAssets).forEach((e) => URL.revokeObjectURL(e.src)),
                    Object.values(e.profileFrameAssets).forEach(p),
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
                previewEnabled: null != r || f({ ...e, previewProfileEffectSkuId: r }),
            })),
        ),
    setPreviewAvatarDecorationKey: (r) =>
        (0, i.r)(() => e((e) => ({ previewAvatarDecorationKey: r, previewEnabled: null != r || f(e) }))),
    setPreviewProfileFrameKey: (r) =>
        (0, i.r)(() => e((e) => ({ previewProfileFrameKey: r, previewEnabled: null != r || f(e) }))),
}));
function _() {
    let e = m((e) => e.collectionAssets),
        r = m((e) => e.avatarDecorationAssets);
    return n.useMemo(
        () => ({
            collectionAssets: Object.values(e).sort((e, r) => e.name.localeCompare(r.name)),
            avatarDecorationAssets: Object.values(r).sort((e, r) => e.name.localeCompare(r.name)),
        }),
        [e, r],
    );
}
function d(e) {
    return m((r) => (r.previewEnabled ? r.collectionAssets[e]?.src : null));
}
function v(e) {
    let { previewEnabled: r, previewProfileEffectSkuId: t } = m(),
        l = (0, o.ZK)(r ? t : null);
    return n.useMemo(() => {
        if (null == l || null == e) return null;
        let { effects: r, stillFrames: t } = l,
            n = null != t && Object.keys(t).length > 0;
        if (0 === r.length && !n) return null;
        let i = (0, a.cloneDeep)(e);
        return (
            (i.title = l.name),
            (i.effects = r.map((e) => {
                let { base64: r, ...t } = e;
                return t;
            })),
            n &&
                ((i.reducedMotionSrc = t[s.qH.REDUCED_MOTION]?.src ?? ""),
                (i.staticFrameSrc = t[s.qH.STATIC]?.src ?? ""),
                (i.thumbnailPreviewSrc = t[s.qH.THUMBNAIL]?.src ?? "")),
            i
        );
    }, [l, e]);
}
function g() {
    return m((e) =>
        e.previewEnabled && null != e.previewAvatarDecorationKey
            ? (e.avatarDecorationAssets[e.previewAvatarDecorationKey]?.src ?? null)
            : null,
    );
}
function h() {
    let e = m((e) =>
        e.previewEnabled && null != e.previewProfileFrameKey
            ? (e.profileFrameAssets[e.previewProfileFrameKey] ?? null)
            : null,
    );
    return n.useMemo(() => (null == e ? null : (0, u.i)(e)), [e]);
}
function O() {
    let e = m((e) =>
        e.previewEnabled && null != e.previewProfileFrameKey
            ? (e.profileFrameAssets[e.previewProfileFrameKey] ?? null)
            : null,
    );
    return n.useMemo(() => {
        if (null == e) return null;
        let r = {};
        for (let t of e.layers) {
            let n = e.layerSrcByLayerId[t.id];
            if (null == n) continue;
            let a = new Image();
            (a.src = n), (r[t.id] = a);
        }
        return { layers: e.layers, layerData: r, css: (0, u.i)(e) };
    }, [e]);
}
function E() {
    let e = m((e) => e.profileFrameAssets);
    return n.useMemo(() => Object.values(e).sort((e, r) => e.key.localeCompare(r.key)), [e]);
}
