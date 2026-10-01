(t.d(r, { C: () => w, JE: () => f, NE: () => A, VU: () => d, bA: () => E, eo: () => y, lM: () => b, mb: () => m }),
    t(323874),
    t(14289),
    t(35956));
var l = t(582128),
    s = t(435558),
    o = t(196765),
    n = t(121894),
    a = t(816866),
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
let f = (0, o.v)((e) => ({
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
        (0, n.r)(() => {
            e((e) => {
                let l = e.collectionAssets[r];
                null != l && URL.revokeObjectURL(l.src);
                let s = URL.createObjectURL(t),
                    o = { ...e.collectionAssets };
                return ((o[r] = { type: r, name: t.name, src: s }), { ...e, collectionAssets: o, previewEnabled: !0 });
            });
        }),
    deleteCollectionAsset: (r) =>
        (0, n.r)(() => {
            e((e) => {
                let t = e.collectionAssets[r];
                if (null == t) return e;
                URL.revokeObjectURL(t.src);
                let { [r]: l, ...s } = e.collectionAssets;
                return { ...e, collectionAssets: s, previewEnabled: p({ ...e, collectionAssets: s }) };
            });
        }),
    upsertAvatarDecorationAsset: (r) =>
        (0, n.r)(() => {
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
        (0, n.r)(() => {
            e((e) => {
                let t = e.avatarDecorationAssets[r];
                if (null == t) return e;
                URL.revokeObjectURL(t.src);
                let { [r]: l, ...s } = e.avatarDecorationAssets,
                    o = e.previewAvatarDecorationKey === r;
                return {
                    ...e,
                    avatarDecorationAssets: s,
                    previewAvatarDecorationKey: o ? null : e.previewAvatarDecorationKey,
                    previewEnabled: p({ ...e, avatarDecorationAssets: s }),
                };
            });
        }),
    upsertProfileFrame: (r, t) =>
        (0, n.r)(() => {
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
        (0, n.r)(() => {
            e((e) => {
                let t = e.profileFrameAssets[r];
                if (null == t) return e;
                v(t);
                let { [r]: l, ...s } = e.profileFrameAssets,
                    o = e.previewProfileFrameKey === r;
                return {
                    ...e,
                    profileFrameAssets: s,
                    previewProfileFrameKey: o ? null : e.previewProfileFrameKey,
                    previewEnabled: p({ ...e, profileFrameAssets: s }),
                };
            });
        }),
    clearAssets: () =>
        (0, n.r)(() => {
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
        (0, n.r)(() =>
            e((e) => ({
                previewProfileEffectSkuId: r,
                previewEnabled: null != r || p({ ...e, previewProfileEffectSkuId: r }),
            })),
        ),
    setPreviewAvatarDecorationKey: (r) =>
        (0, n.r)(() => e((e) => ({ previewAvatarDecorationKey: r, previewEnabled: null != r || p(e) }))),
    setPreviewProfileFrameKey: (r) =>
        (0, n.r)(() => e((e) => ({ previewProfileFrameKey: r, previewEnabled: null != r || p(e) }))),
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
        o = (0, a.ZK)(r ? t : null);
    return l.useMemo(() => {
        if (null == o || null == e) return null;
        let { effects: r, stillFrames: t } = o,
            l = null != t && Object.keys(t).length > 0;
        if (0 === r.length && !l) return null;
        let n = (0, s.cloneDeep)(e);
        return (
            (n.title = o.name),
            (n.effects = r.map((e) => {
                let { base64: r, ...t } = e;
                return t;
            })),
            l &&
                ((n.reducedMotionSrc = t[i.qH.REDUCED_MOTION]?.src ?? ""),
                (n.staticFrameSrc = t[i.qH.STATIC]?.src ?? ""),
                (n.thumbnailPreviewSrc = t[i.qH.THUMBNAIL]?.src ?? "")),
            n
        );
    }, [o, e]);
}
function d() {
    return f((e) =>
        e.previewEnabled && null != e.previewAvatarDecorationKey
            ? (e.avatarDecorationAssets[e.previewAvatarDecorationKey]?.src ?? null)
            : null,
    );
}
function b() {
    let e = f((e) =>
        e.previewEnabled && null != e.previewProfileFrameKey
            ? (e.profileFrameAssets[e.previewProfileFrameKey] ?? null)
            : null,
    );
    return l.useMemo(() => (null == e ? null : (0, c.i)(e)), [e]);
}
function y() {
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
