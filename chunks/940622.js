n.d(t, {
    C: () => v,
    Iv: () => N,
    JE: () => y,
    NE: () => O,
    br: () => R,
    mb: () => A,
    od: () => C,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(638769),
    n(747238),
    n(812715);
var r = n(64700),
    i = n(735438),
    a = n(353640),
    s = n(575593),
    o = n(121894),
    l = n(43708),
    c = n(14752),
    u = n(559474);

function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}

function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = m(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function g(e, t) {
    if ("object" !== b(e) || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
        var r = n.call(e, t || "default");
        if ("object" !== b(r)) return r;
        throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t ? String : Number)(e);
}

function E(e) {
    var t = g(e, "string");
    return "symbol" === b(t) ? t : String(t);
}

function b(e) {
    return e && "u" > typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
}
let y = (0, a.v)((e) => ({
        previewEnabled: !1,
        collectionAssets: {},
        avatarDecorationAssets: {},
        previewProfileEffectSkuId: null,
        previewAvatarDecorationSkuId: null,
        setPreviewEnabled: (t) =>
            e({
                previewEnabled: t,
            }),
        upsertCollectionAsset: (t, n) =>
            (0, o.r)(() => {
                e((e) => {
                    let r = e.collectionAssets[t];
                    null != r && URL.revokeObjectURL(r.src);
                    let i = URL.createObjectURL(n),
                        a = f({}, e.collectionAssets);
                    return (
                        (a[t] = {
                            type: t,
                            name: n.name,
                            src: i,
                        }),
                        _(f({}, e), {
                            collectionAssets: a,
                            previewEnabled: !0,
                        })
                    );
                });
            }),
        deleteCollectionAsset: (t) =>
            (0, o.r)(() => {
                e((e) => {
                    let n = e.collectionAssets[t];
                    if (null == n) return e;
                    URL.revokeObjectURL(n.src);
                    let r = e.collectionAssets,
                        { [t]: i } = r,
                        a = h(r, [E(t)]),
                        s = Object.keys(a).length > 0 || Object.keys(e.avatarDecorationAssets).length > 0;
                    return _(f({}, e), {
                        collectionAssets: a,
                        previewEnabled: s,
                    });
                });
            }),
        upsertAvatarDecorationAsset: (t) =>
            (0, o.r)(() => {
                e((e) => {
                    let n = e.avatarDecorationAssets[t.name];
                    null != n && URL.revokeObjectURL(n.src);
                    let r = URL.createObjectURL(t),
                        i = f({}, e.avatarDecorationAssets);
                    return (
                        (i[t.name] = {
                            type: u.Jn.AVATAR_DECORATION,
                            name: t.name,
                            src: r,
                        }),
                        _(f({}, e), {
                            avatarDecorationAssets: i,
                            previewEnabled: !0,
                        })
                    );
                });
            }),
        deleteAvatarDecorationAsset: (t) =>
            (0, o.r)(() => {
                e((e) => {
                    let n = e.avatarDecorationAssets[t];
                    if (null == n) return e;
                    URL.revokeObjectURL(n.src);
                    let r = e.avatarDecorationAssets,
                        { [t]: i } = r,
                        a = h(r, [E(t)]),
                        s = Object.keys(a).length > 0 || Object.keys(e.collectionAssets).length > 0;
                    return _(f({}, e), {
                        avatarDecorationAssets: a,
                        previewEnabled: s,
                    });
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
            (0, o.r)(() =>
                e({
                    previewProfileEffectSkuId: t,
                    previewEnabled: null != t,
                }),
            ),
        setPreviewAvatarDecorationSkuId: (t) =>
            (0, o.r)(() =>
                e({
                    previewAvatarDecorationSkuId: t,
                    previewEnabled: null != t,
                }),
            ),
    })),
    O = () => {
        let e = y((e) => e.collectionAssets),
            t = y((e) => e.avatarDecorationAssets);
        return r.useMemo(
            () => ({
                collectionAssets: Object.values(e).sort((e, t) => e.name.localeCompare(t.name)),
                avatarDecorationAssets: Object.values(t).sort((e, t) => e.name.localeCompare(t.name)),
            }),
            [e, t],
        );
    },
    A = (e) =>
        y((t) => {
            var n;
            return t.previewEnabled ? (null == (n = t.collectionAssets[e]) ? void 0 : n.src) : null;
        }),
    v = (e) => {
        let { previewEnabled: t, previewProfileEffectSkuId: n } = y(),
            a = t ? n : null,
            s = (0, l.ZK)(a);
        return r.useMemo(() => {
            if (null == s || null == e) return null;
            let { effects: t, stillFrames: n } = s.config,
                r = null != n && Object.keys(n).length > 0;
            if (0 === t.length && !r) return null;
            let a = (0, i.cloneDeep)(e);
            if (
                ((a.title = s.name),
                (a.effects = t.map((e) => {
                    let { base64: t } = e;
                    return h(e, ["base64"]);
                })),
                r)
            ) {
                var o, l, u, d, f, p;
                (a.reducedMotionSrc = null != (o = null == (d = n[c.qH.REDUCED_MOTION]) ? void 0 : d.src) ? o : ""),
                    (a.staticFrameSrc = null != (l = null == (f = n[c.qH.STATIC]) ? void 0 : f.src) ? l : ""),
                    (a.thumbnailPreviewSrc = null != (u = null == (p = n[c.qH.THUMBNAIL]) ? void 0 : p.src) ? u : "");
            }
            return a;
        }, [s, e]);
    },
    S = (e, t) =>
        _(f({}, e), {
            asset: t.src,
        }),
    I = (e, t) => {
        if (e.type !== s.R.AVATAR_DECORATION) return e;
        let n = (0, i.cloneDeep)(e);
        if (n.items.length > 0) {
            let r = n.items[0];
            (e.name = t.name.replace(".png", "")), (n.items[0] = S(r, t));
        }
        return n;
    },
    T = (e, t, n) => {
        let r = Object.values(t);
        return e && 0 !== r.length ? (null != n ? t[n] : r[0]) : null;
    },
    C = (e) => {
        let { previewEnabled: t, previewAvatarDecorationSkuId: n } = y(),
            i = y((e) => e.avatarDecorationAssets);
        return r.useMemo(() => {
            let r = Object.values(i);
            if (!t || 0 === r.length || 0 === e.length) return e;
            if (null != n) {
                let t = i[n];
                return null == t ? e : e.map((e) => I(e, t));
            }
            return e.map((e, t) => {
                let n = t % r.length;
                return I(e, r[n]);
            });
        }, [e, t, n, i]);
    },
    N = (e) => {
        let { previewEnabled: t, previewAvatarDecorationSkuId: n } = y(),
            i = y((e) => e.avatarDecorationAssets);
        return r.useMemo(() => {
            if (null == e || e.type !== s.R.AVATAR_DECORATION || 0 === e.items.length) return e;
            let r = T(t, i, n);
            return null == r ? e : I(e, r);
        }, [e, t, n, i]);
    },
    R = (e) => {
        let { previewEnabled: t, previewAvatarDecorationSkuId: n } = y(),
            i = y((e) => e.avatarDecorationAssets);
        return r.useMemo(() => {
            if (null == e) return null;
            let r = T(t, i, n);
            return null == r ? e : S(e, r);
        }, [e, t, n, i]);
    };
