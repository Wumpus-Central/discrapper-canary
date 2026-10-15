l.d(n, { Fk: () => d, I9: () => u, ID: () => o });
var t = l(913563),
    a = l(898985),
    r = l(469054),
    i = l(105292),
    s = l(701974);
function u(e) {
    if (null == e) return i.intl.string(i.t["3Xph0/"]);
    let n = i.intl.string((0, t.A)(e.fontId)),
        l = i.intl.string(a.J[e.effectId] ?? s.default.OpWJ3f),
        r = e.colors.map((e) => `#${e.toString(16).padStart(6, "0")}`).join(", ");
    return i.intl.formatToPlainString(i.t.Igwax6, { fontName: n, effectName: l, colors: r });
}
function o(e, n) {
    let l = null === e,
        t = void 0 === e;
    return l || (t && null == n) ? i.intl.string(i.t["3Xph0/"]) : t ? i.intl.string(i.t.keN7ib) : e.description;
}
function d(e, n) {
    let l = null === e,
        t = void 0 === e;
    return l || (t && null == n)
        ? i.intl.string(i.t["3Xph0/"])
        : t
          ? i.intl.string(i.t["16GpW/"])
          : ((e.assetOrigin === r.E.ARCHIVED_ASSET ? e.originalAsset.description : e.description) ??
            i.intl.string(i.t.cqdtrR));
}
