n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var l = n(979554),
    i = n(429368),
    o = n(786040),
    s = n(453713),
    a = n(201964),
    c = n(361110);
let u = (e) => {
        let { product: t } = e,
            n = (0, i.o)(t),
            { previewingVariantIndex: o, handleEntering: u, handleLeaving: d } = (0, c.f)(t),
            g = (0, a.o)(t, o);
        return (0, r.jsx)(s.P, {
            previewingVariantIndexProps: {
                previewingVariantIndex: o,
                handleEntering: u,
                handleLeaving: d,
            },
            variantGroupProduct: t,
            selectedVariantIndex: n,
            minimal: !0,
            alternativeBackgroundColor: (null == g ? void 0 : g.type) === l.Z.PROFILE_EFFECT,
        });
    },
    d = (e) => {
        let { skuId: t } = e,
            n = (0, o.LJ)(t);
        return null == n || n.type !== l.Z.VARIANTS_GROUP ? null : (0, r.jsx)(u, { product: n });
    };
