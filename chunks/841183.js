var t = l(913563),
    i = l(898985),
    a = l(469054),
    r = l(792996),
    s = l(842671);
l.d(
    n,
    {},
    {
        Fk: function (e, n) {
            let l = null === e,
                t = void 0 === e;
            return l || (t && null == n)
                ? r.intl.string(r.t["3Xph0/"])
                : t
                  ? r.intl.string(r.t["16GpW/"])
                  : ((e.assetOrigin === a.E.ARCHIVED_ASSET ? e.originalAsset.description : e.description) ??
                    r.intl.string(r.t.cqdtrR));
        },
        I9: function (e) {
            if (null == e) return r.intl.string(r.t["3Xph0/"]);
            let n = r.intl.string((0, t.A)(e.fontId)),
                l = r.intl.string(i.J[e.effectId] ?? s.default.OpWJ3f),
                a = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
            return r.intl.formatToPlainString(r.t.Igwax6, { fontName: n, effectName: l, colors: a });
        },
        ID: function (e, n) {
            let l = null === e,
                t = void 0 === e;
            return l || (t && null == n) ? r.intl.string(r.t["3Xph0/"]) : t ? r.intl.string(r.t.keN7ib) : e.description;
        },
    },
);
