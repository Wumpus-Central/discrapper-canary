"use strict";
n.d(t, { C: () => I, JE: () => E, NE: () => A, VU: () => f, bA: () => m, eo: () => T, lM: () => p, mb: () => h }),
    n(323874),
    n(14289),
    n(35956);
var i = n(64700),
    r = n(435558),
    a = n(353640),
    s = n(121894),
    l = n(816866),
    o = n(87558),
    d = n(875741),
    c = n(25176);
function u(e) {
    null != e.previewSrc && URL.revokeObjectURL(e.previewSrc),
        Object.values(e.layerSrcByLayerId).forEach((e) => URL.revokeObjectURL(e));
}
function _(e) {
    let { collectionAssets: t, avatarDecorationAssets: n, profileFrameAssets: i, previewProfileEffectSkuId: r } = e;
    return Object.keys(t).length > 0 || Object.keys(n).length > 0 || Object.keys(i).length > 0 || null != r;
}
let E = (0, a.v)((e) => ({
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
        (0, s.r)(() => {
            e((e) => {
                let i = e.collectionAssets[t];
                null != i && URL.revokeObjectURL(i.src);
                let r = URL.createObjectURL(n),
                    a = { ...e.collectionAssets };
                return (a[t] = { type: t, name: n.name, src: r }), { ...e, collectionAssets: a, previewEnabled: !0 };
            });
        }),
    deleteCollectionAsset: (t) =>
        (0, s.r)(() => {
            e((e) => {
                let n = e.collectionAssets[t];
                if (null == n) return e;
                URL.revokeObjectURL(n.src);
                let { [t]: i, ...r } = e.collectionAssets;
                return { ...e, collectionAssets: r, previewEnabled: _({ ...e, collectionAssets: r }) };
            });
        }),
    upsertAvatarDecorationAsset: (t) =>
        (0, s.r)(() => {
            e((e) => {
                let n = e.avatarDecorationAssets[t.name];
                null != n && URL.revokeObjectURL(n.src);
                let i = URL.createObjectURL(t),
                    r = { ...e.avatarDecorationAssets };
                return (
                    (r[t.name] = { type: c.Jn.AVATAR_DECORATION, name: t.name, src: i }),
                    {
                        ...e,
                        avatarDecorationAssets: r,
                        previewAvatarDecorationKey: e.previewAvatarDecorationKey ?? t.name,
                        previewEnabled: !0,
                    }
                );
            });
        }),
    deleteAvatarDecorationAsset: (t) =>
        (0, s.r)(() => {
            e((e) => {
                let n = e.avatarDecorationAssets[t];
                if (null == n) return e;
                URL.revokeObjectURL(n.src);
                let { [t]: i, ...r } = e.avatarDecorationAssets,
                    a = e.previewAvatarDecorationKey === t;
                return {
                    ...e,
                    avatarDecorationAssets: r,
                    previewAvatarDecorationKey: a ? null : e.previewAvatarDecorationKey,
                    previewEnabled: _({ ...e, avatarDecorationAssets: r }),
                };
            });
        }),
    upsertProfileFrame: (t, n) =>
        (0, s.r)(() => {
            e((e) => {
                let i = e.profileFrameAssets[t];
                return (
                    null != i && u(i),
                    {
                        ...e,
                        profileFrameAssets: { ...e.profileFrameAssets, [t]: n },
                        previewProfileFrameKey: e.previewProfileFrameKey ?? t,
                        previewEnabled: !0,
                    }
                );
            });
        }),
    deleteProfileFrame: (t) =>
        (0, s.r)(() => {
            e((e) => {
                let n = e.profileFrameAssets[t];
                if (null == n) return e;
                u(n);
                let { [t]: i, ...r } = e.profileFrameAssets,
                    a = e.previewProfileFrameKey === t;
                return {
                    ...e,
                    profileFrameAssets: r,
                    previewProfileFrameKey: a ? null : e.previewProfileFrameKey,
                    previewEnabled: _({ ...e, profileFrameAssets: r }),
                };
            });
        }),
    clearAssets: () =>
        (0, s.r)(() => {
            e(
                (e) => (
                    Object.values(e.collectionAssets).forEach((e) => URL.revokeObjectURL(e.src)),
                    Object.values(e.avatarDecorationAssets).forEach((e) => URL.revokeObjectURL(e.src)),
                    Object.values(e.profileFrameAssets).forEach(u),
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
        (0, s.r)(() =>
            e((e) => ({
                previewProfileEffectSkuId: t,
                previewEnabled: null != t || _({ ...e, previewProfileEffectSkuId: t }),
            })),
        ),
    setPreviewAvatarDecorationKey: (t) =>
        (0, s.r)(() => e((e) => ({ previewAvatarDecorationKey: t, previewEnabled: null != t || _(e) }))),
    setPreviewProfileFrameKey: (t) =>
        (0, s.r)(() => e((e) => ({ previewProfileFrameKey: t, previewEnabled: null != t || _(e) }))),
}));
function A() {
    let e = E((e) => e.collectionAssets),
        t = E((e) => e.avatarDecorationAssets);
    return i.useMemo(
        () => ({
            collectionAssets: Object.values(e).sort((e, t) => e.name.localeCompare(t.name)),
            avatarDecorationAssets: Object.values(t).sort((e, t) => e.name.localeCompare(t.name)),
        }),
        [e, t],
    );
}
function h(e) {
    return E((t) => (t.previewEnabled ? t.collectionAssets[e]?.src : null));
}
function I(e) {
    let { previewEnabled: t, previewProfileEffectSkuId: n } = E(),
        a = (0, l.ZK)(t ? n : null);
    return i.useMemo(() => {
        if (null == a || null == e) return null;
        let { effects: t, stillFrames: n } = a,
            i = null != n && Object.keys(n).length > 0;
        if (0 === t.length && !i) return null;
        let s = (0, r.cloneDeep)(e);
        return (
            (s.title = a.name),
            (s.effects = t.map((e) => {
                let { base64: t, ...n } = e;
                return n;
            })),
            i &&
                ((s.reducedMotionSrc = n[o.qH.REDUCED_MOTION]?.src ?? ""),
                (s.staticFrameSrc = n[o.qH.STATIC]?.src ?? ""),
                (s.thumbnailPreviewSrc = n[o.qH.THUMBNAIL]?.src ?? "")),
            s
        );
    }, [a, e]);
}
function f() {
    return E((e) =>
        e.previewEnabled && null != e.previewAvatarDecorationKey
            ? (e.avatarDecorationAssets[e.previewAvatarDecorationKey]?.src ?? null)
            : null,
    );
}
function p() {
    let e = E((e) =>
        e.previewEnabled && null != e.previewProfileFrameKey
            ? (e.profileFrameAssets[e.previewProfileFrameKey] ?? null)
            : null,
    );
    return i.useMemo(() => (null == e ? null : (0, d.i)(e)), [e]);
}
function T() {
    let e = E((e) =>
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
        return { layers: e.layers, layerData: t, css: (0, d.i)(e) };
    }, [e]);
}
function m() {
    let e = E((e) => e.profileFrameAssets);
    return i.useMemo(() => Object.values(e).sort((e, t) => e.key.localeCompare(t.key)), [e]);
}
