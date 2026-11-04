(t(323874), t(14289), t(35956));
var l = t(582128),
    o = t(435558),
    n = t(196765),
    a = t(121894),
    s = t(816866),
    i = t(87558),
    c = t(163697),
    u = t(455256);
function f(e) {
    (null != e.previewSrc && URL.revokeObjectURL(e.previewSrc),
        Object.values(e.layerSrcByLayerId).forEach((e) => URL.revokeObjectURL(e)));
}
function p(e) {
    let { collectionAssets: r, avatarDecorationAssets: t, profileFrameAssets: l, previewProfileEffectSkuId: o } = e;
    return Object.keys(r).length > 0 || Object.keys(t).length > 0 || Object.keys(l).length > 0 || null != o;
}
let v = (0, n.v)((e) => ({
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
        (0, a.r)(() => {
            e((e) => {
                let l = e.collectionAssets[r];
                null != l && URL.revokeObjectURL(l.src);
                let o = URL.createObjectURL(t),
                    n = { ...e.collectionAssets };
                return ((n[r] = { type: r, name: t.name, src: o }), { ...e, collectionAssets: n, previewEnabled: !0 });
            });
        }),
    deleteCollectionAsset: (r) =>
        (0, a.r)(() => {
            e((e) => {
                let t = e.collectionAssets[r];
                if (null == t) return e;
                URL.revokeObjectURL(t.src);
                let { [r]: l, ...o } = e.collectionAssets;
                return { ...e, collectionAssets: o, previewEnabled: p({ ...e, collectionAssets: o }) };
            });
        }),
    upsertAvatarDecorationAsset: (r) =>
        (0, a.r)(() => {
            e((e) => {
                let t = e.avatarDecorationAssets[r.name];
                null != t && URL.revokeObjectURL(t.src);
                let l = URL.createObjectURL(r),
                    o = { ...e.avatarDecorationAssets };
                return (
                    (o[r.name] = { type: u.J.AVATAR_DECORATION, name: r.name, src: l }),
                    {
                        ...e,
                        avatarDecorationAssets: o,
                        previewAvatarDecorationKey: e.previewAvatarDecorationKey ?? r.name,
                        previewEnabled: !0,
                    }
                );
            });
        }),
    deleteAvatarDecorationAsset: (r) =>
        (0, a.r)(() => {
            e((e) => {
                let t = e.avatarDecorationAssets[r];
                if (null == t) return e;
                URL.revokeObjectURL(t.src);
                let { [r]: l, ...o } = e.avatarDecorationAssets,
                    n = e.previewAvatarDecorationKey === r;
                return {
                    ...e,
                    avatarDecorationAssets: o,
                    previewAvatarDecorationKey: n ? null : e.previewAvatarDecorationKey,
                    previewEnabled: p({ ...e, avatarDecorationAssets: o }),
                };
            });
        }),
    upsertProfileFrame: (r, t) =>
        (0, a.r)(() => {
            e((e) => {
                let l = e.profileFrameAssets[r];
                return (
                    null != l && f(l),
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
        (0, a.r)(() => {
            e((e) => {
                let t = e.profileFrameAssets[r];
                if (null == t) return e;
                f(t);
                let { [r]: l, ...o } = e.profileFrameAssets,
                    n = e.previewProfileFrameKey === r;
                return {
                    ...e,
                    profileFrameAssets: o,
                    previewProfileFrameKey: n ? null : e.previewProfileFrameKey,
                    previewEnabled: p({ ...e, profileFrameAssets: o }),
                };
            });
        }),
    clearAssets: () =>
        (0, a.r)(() => {
            e(
                (e) => (
                    Object.values(e.collectionAssets).forEach((e) => URL.revokeObjectURL(e.src)),
                    Object.values(e.avatarDecorationAssets).forEach((e) => URL.revokeObjectURL(e.src)),
                    Object.values(e.profileFrameAssets).forEach(f),
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
        (0, a.r)(() =>
            e((e) => ({
                previewProfileEffectSkuId: r,
                previewEnabled: null != r || p({ ...e, previewProfileEffectSkuId: r }),
            })),
        ),
    setPreviewAvatarDecorationKey: (r) =>
        (0, a.r)(() => e((e) => ({ previewAvatarDecorationKey: r, previewEnabled: null != r || p(e) }))),
    setPreviewProfileFrameKey: (r) =>
        (0, a.r)(() => e((e) => ({ previewProfileFrameKey: r, previewEnabled: null != r || p(e) }))),
}));
t.d(
    r,
    {},
    {
        C: function (e) {
            let { previewEnabled: r, previewProfileEffectSkuId: t } = v(),
                n = (0, s.ZK)(r ? t : null);
            return l.useMemo(() => {
                if (null == n || null == e) return null;
                let { effects: r, stillFrames: t } = n,
                    l = null != t && Object.keys(t).length > 0;
                if (0 === r.length && !l) return null;
                let a = (0, o.cloneDeep)(e);
                return (
                    (a.title = n.name),
                    (a.effects = r.map((e) => {
                        let { base64: r, ...t } = e;
                        return t;
                    })),
                    l &&
                        ((a.reducedMotionSrc = t[i.qH.REDUCED_MOTION]?.src ?? ""),
                        (a.staticFrameSrc = t[i.qH.STATIC]?.src ?? ""),
                        (a.thumbnailPreviewSrc = t[i.qH.THUMBNAIL]?.src ?? "")),
                    a
                );
            }, [n, e]);
        },
        JE: v,
        NE: function () {
            let e = v((e) => e.collectionAssets),
                r = v((e) => e.avatarDecorationAssets);
            return l.useMemo(
                () => ({
                    collectionAssets: Object.values(e).sort((e, r) => e.name.localeCompare(r.name)),
                    avatarDecorationAssets: Object.values(r).sort((e, r) => e.name.localeCompare(r.name)),
                }),
                [e, r],
            );
        },
        VU: function () {
            return v((e) =>
                e.previewEnabled && null != e.previewAvatarDecorationKey
                    ? (e.avatarDecorationAssets[e.previewAvatarDecorationKey]?.src ?? null)
                    : null,
            );
        },
        bA: function () {
            let e = v((e) => e.profileFrameAssets);
            return l.useMemo(() => Object.values(e).sort((e, r) => e.key.localeCompare(r.key)), [e]);
        },
        eo: function () {
            let e = v((e) =>
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
                    let o = new Image();
                    ((o.src = l), (r[t.id] = o));
                }
                return { layers: e.layers, layerData: r, css: (0, c.i)(e) };
            }, [e]);
        },
        lM: function () {
            let e = v((e) =>
                e.previewEnabled && null != e.previewProfileFrameKey
                    ? (e.profileFrameAssets[e.previewProfileFrameKey] ?? null)
                    : null,
            );
            return l.useMemo(() => (null == e ? null : (0, c.i)(e)), [e]);
        },
        mb: function (e) {
            return v((r) => (r.previewEnabled ? r.collectionAssets[e]?.src : null));
        },
    },
);
