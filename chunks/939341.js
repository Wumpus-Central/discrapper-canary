"use strict";
n.d(t, { C4: () => E, D8: () => T, XN: () => I, nO: () => A });
var r = n(573648),
    i = n(541806),
    a = n(141639),
    s = n(61330),
    o = n(429913),
    l = n(585958),
    u = n(82149),
    c = n(139675),
    d = n(486020),
    _ = n(20805),
    f = n(327098),
    p = n(652215),
    h = n(360469),
    m = n(985018);
function g(e) {
    return (0, _.Tq)(e) && e.extra.entries.length > 0
        ? { src: e.extra.entries[0].media.image_url }
        : (0, _.Lf)(e)
          ? {
                src: (0, c.uD)(e.extra.application_id, e.extra.media_assets_large_image, h.iu.LARGE),
                alt: e.extra.media_title,
            }
          : (0, _.p6)(e)
            ? { src: e.extra.media.image_url }
            : void 0;
}
function E(e) {
    let t = e?.getIconURL(h.iu.LARGE),
        n = e?.name;
    if (null != t)
        return {
            src: t,
            alt:
                null == n
                    ? m.intl.string(m.t["2B/phM"])
                    : m.intl.formatToPlainString(m.t.tiKyYg, { applicationName: n }),
        };
}
function A(e) {
    let { entry: t, showCoverImage: n = !0 } = e,
        { activity: r, activityApplication: i, fallbackApplication: a } = (0, f.A)(t),
        { largeImage: s, smallImage: o } = T(r, i),
        { largeImage: u } = I(r, a ?? i),
        { coverImageUrl: c } = (0, l.n)((a ?? i)?.id),
        d = g(t);
    return null != s
        ? { largeImage: s, smallImage: o }
        : null != d
          ? { largeImage: d, smallImage: void 0 }
          : null != c && n
            ? { largeImage: { src: c }, smallImage: void 0 }
            : { largeImage: u, smallImage: void 0 };
}
function I(e, t) {
    let { largeImage: n, smallImage: i } = T(e, t);
    if (null != n) return { largeImage: n, smallImage: i };
    if ((0, u.Cy)(e)) {
        let t = (0, u.UW)(e),
            n =
                null != t
                    ? d.Ay.getGuildIconURL({ id: t.guildId, icon: e?.assets?.small_image, size: h.iu.SMALL })
                    : void 0;
        return { largeImage: null != n ? { src: n } : void 0, smallImage: void 0 };
    }
    if (null == n && (0, s.A)(e))
        return {
            largeImage: { src: r.A.get(p.fg2.XBOX).icon.customPNG, alt: m.intl.string(m.t.Nfvo72) },
            smallImage: void 0,
        };
    if (null == n && null == i && (0, a.A)(e))
        return {
            largeImage: { src: r.A.get(p.fg2.PLAYSTATION).icon.lightPNG, alt: m.intl.string(m.t.fFl4jo) },
            smallImage: void 0,
        };
    let o = E(t);
    return null != o ? { largeImage: o, smallImage: i } : { largeImage: i, smallImage: void 0 };
}
function T(e, t) {
    let n = (0, o.h)(e?.application_id);
    if (null == e) return { largeImage: void 0, smallImage: void 0 };
    let r = e?.assets?.large_image,
        a =
            null != r
                ? {
                      src: (0, c.uD)(e.application_id, r, [h.iu.LARGE, h.iu.LARGE]),
                      text: e.assets?.large_text?.trim(),
                      url: e.assets?.large_url,
                  }
                : void 0,
        s = (0, i.A)(e) ? void 0 : e?.assets?.small_image,
        l =
            null != s
                ? {
                      src: (0, c.uD)(e.application_id, s, [h.iu.LARGE, h.iu.LARGE]),
                      text: e.assets?.small_text?.trim(),
                      url: e.assets?.small_url,
                  }
                : void 0;
    return { largeImage: a ?? E(t ?? n), smallImage: l };
}
