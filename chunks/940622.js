(t.d(r, { C: () => w, JE: () => f, NE: () => A, VU: () => b, bA: () => E, eo: () => d, lM: () => y, mb: () => m }),
    t(323874),
    t(14289),
    t(35956));
var l = t(582128),
    s = t(435558),
    a = t(196765),
    o = t(121894),
    n = t(816866),
    i = t(87558),
    c = t(163697),
    u = t(455256);
function v(e) {
    (null != e.previewSrc && URL.revokeObjectURL(e.previewSrc),
        Object.values(e.layerSrcByLayerId).forEach((e) => URL.revokeObjectURL(e)));
}
function p(e) {
    let { collectionAssets: r, avatarDecorationAssets: t, profileFrameAssets: l, previewProfileEffectSkuId: s } = e;
    return Object.keys(r).length > 0 || Object.keys(t).length > 0 || Object.keys(l).length > 0 || null != s;
}
let f = (0, a.v)((e) => ({
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
        (0, o.r)(() => {
            e((e) => {
                let l = e.collectionAssets[r];
                null != l && URL.revokeObjectURL(l.src);
                let s = URL.createObjectURL(t),
                    a = { ...e.collectionAssets };
                return ((a[r] = { type: r, name: t.name, src: s }), { ...e, collectionAssets: a, previewEnabled: !0 });
            });
        }),
    deleteCollectionAsset: (r) =>
        (0, o.r)(() => {
            e((e) => {
                let t = e.collectionAssets[r];
                if (null == t) return e;
                URL.revokeObjectURL(t.src);
                let { [r]: l, ...s } = e.collectionAssets;
                return { ...e, collectionAssets: s, previewEnabled: p({ ...e, collectionAssets: s }) };
            });
        }),
    upsertAvatarDecorationAsset: (r) =>
        (0, o.r)(() => {
            e((e) => {
                let t = e.avatarDecorationAssets[r.name];
                null != t && URL.revokeObjectURL(t.src);
                let l = URL.createObjectURL(r),
                    s = { ...e.avatarDecorationAssets };
                return (
                    (s[r.name] = { type: u.J.AVATAR_DECORATION, name: r.name, src: l }),
                    {
                        ...e,
                        avatarDecorationAssets: s,
                        previewAvatarDecorationKey: e.previewAvatarDecorationKey ?? r.name,
                        previewEnabled: !0,
                    }
                );
            });
        }),
    deleteAvatarDecorationAsset: (r) =>
        (0, o.r)(() => {
            e((e) => {
                let t = e.avatarDecorationAssets[r];
                if (null == t) return e;
                URL.revokeObjectURL(t.src);
                let { [r]: l, ...s } = e.avatarDecorationAssets,
                    a = e.previewAvatarDecorationKey === r;
                return {
                    ...e,
                    avatarDecorationAssets: s,
                    previewAvatarDecorationKey: a ? null : e.previewAvatarDecorationKey,
                    previewEnabled: p({ ...e, avatarDecorationAssets: s }),
                };
            });
        }),
    upsertProfileFrame: (r, t) =>
        (0, o.r)(() => {
            e((e) => {
                let l = e.profileFrameAssets[r];
                return (
                    null != l && v(l),
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
        (0, o.r)(() => {
            e((e) => {
                let t = e.profileFrameAssets[r];
                if (null == t) return e;
                v(t);
                let { [r]: l, ...s } = e.profileFrameAssets,
                    a = e.previewProfileFrameKey === r;
                return {
                    ...e,
                    profileFrameAssets: s,
                    previewProfileFrameKey: a ? null : e.previewProfileFrameKey,
                    previewEnabled: p({ ...e, profileFrameAssets: s }),
                };
            });
        }),
    clearAssets: () =>
        (0, o.r)(() => {
            e(
                (e) => (
                    Object.values(e.collectionAssets).forEach((e) => URL.revokeObjectURL(e.src)),
                    Object.values(e.avatarDecorationAssets).forEach((e) => URL.revokeObjectURL(e.src)),
                    Object.values(e.profileFrameAssets).forEach(v),
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
        (0, o.r)(() =>
            e((e) => ({
                previewProfileEffectSkuId: r,
                previewEnabled: null != r || p({ ...e, previewProfileEffectSkuId: r }),
            })),
        ),
    setPreviewAvatarDecorationKey: (r) =>
        (0, o.r)(() => e((e) => ({ previewAvatarDecorationKey: r, previewEnabled: null != r || p(e) }))),
    setPreviewProfileFrameKey: (r) =>
        (0, o.r)(() => e((e) => ({ previewProfileFrameKey: r, previewEnabled: null != r || p(e) }))),
}));
function A() {
    let e = f((e) => e.collectionAssets),
        r = f((e) => e.avatarDecorationAssets);
    return l.useMemo(
        () => ({
            collectionAssets: Object.values(e).sort((e, r) => e.name.localeCompare(r.name)),
            avatarDecorationAssets: Object.values(r).sort((e, r) => e.name.localeCompare(r.name)),
        }),
        [e, r],
    );
}
function m(e) {
    return f((r) => (r.previewEnabled ? r.collectionAssets[e]?.src : null));
}
function w(e) {
    let { previewEnabled: r, previewProfileEffectSkuId: t } = f(),
        a = (0, n.ZK)(r ? t : null);
    return l.useMemo(() => {
        if (null == a || null == e) return null;
        let { effects: r, stillFrames: t } = a,
            l = null != t && Object.keys(t).length > 0;
        if (0 === r.length && !l) return null;
        let o = (0, s.cloneDeep)(e);
        return (
            (o.title = a.name),
            (o.effects = r.map((e) => {
                let { base64: r, ...t } = e;
                return t;
            })),
            l &&
                ((o.reducedMotionSrc = t[i.qH.REDUCED_MOTION]?.src ?? ""),
                (o.staticFrameSrc = t[i.qH.STATIC]?.src ?? ""),
                (o.thumbnailPreviewSrc = t[i.qH.THUMBNAIL]?.src ?? "")),
            o
        );
    }, [a, e]);
}
function b() {
    return f((e) =>
        e.previewEnabled && null != e.previewAvatarDecorationKey
            ? (e.avatarDecorationAssets[e.previewAvatarDecorationKey]?.src ?? null)
            : null,
    );
}
function y() {
    let e = f((e) =>
        e.previewEnabled && null != e.previewProfileFrameKey
            ? (e.profileFrameAssets[e.previewProfileFrameKey] ?? null)
            : null,
    );
    return l.useMemo(() => (null == e ? null : (0, c.i)(e)), [e]);
}
function d() {
    let e = f((e) =>
        e.previewEnabled && null != e.previewProfileFrameKey
            ? (e.profileFrameAssets[e.previewProfileFrameKey] ?? null)
            : null,
    );
    return l.useMemo(() => {
        if (null == e) return null;
        let r = {};
        for (let t of e.layers) {
            let l = e.layerSrcByLayerId[t.id];
            if (null == l) continue;
            let s = new Image();
            ((s.src = l), (r[t.id] = s));
        }
        return { layers: e.layers, layerData: r, css: (0, c.i)(e) };
    }, [e]);
}
function E() {
    let e = f((e) => e.profileFrameAssets);
    return l.useMemo(() => Object.values(e).sort((e, r) => e.key.localeCompare(r.key)), [e]);
}
