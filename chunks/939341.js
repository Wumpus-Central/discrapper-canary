"use strict";
n.d(t, { C4: () => _, D8: () => C, XN: () => A, nO: () => x });
var i = n(573648),
    l = n(541806),
    s = n(141639),
    r = n(61330),
    a = n(429913),
    o = n(454908),
    c = n(82149),
    u = n(139675),
    d = n(486020),
    h = n(20805),
    m = n(327098),
    p = n(652215),
    f = n(360469),
    g = n(985018);
function _(e) {
    let t = e?.getIconURL(f.iu.LARGE),
        n = e?.name;
    if (null != t)
        return {
            src: t,
            alt:
                null == n
                    ? g.intl.string(g.t["2B/phM"])
                    : g.intl.formatToPlainString(g.t.tiKyYg, { applicationName: n }),
        };
}
function x(e) {
    let { entry: t, showCoverImage: n = !0 } = e,
        { activity: i, activityApplication: l, fallbackApplication: s } = (0, m.A)(t),
        { largeImage: r, smallImage: a } = C(i, l),
        { largeImage: c } = A(i, s ?? l),
        { data: d } = (0, o.I)((s ?? l)?.id),
        p = d?.getCoverURL(),
        g =
            (0, h.Tq)(t) && t.extra.entries.length > 0
                ? { src: t.extra.entries[0].media.image_url }
                : (0, h.Lf)(t)
                  ? {
                        src: (0, u.uD)(t.extra.application_id, t.extra.media_assets_large_image, f.iu.LARGE),
                        alt: t.extra.media_title,
                    }
                  : (0, h.p6)(t)
                    ? { src: t.extra.media.image_url }
                    : void 0;
    return null != r
        ? { largeImage: r, smallImage: a }
        : null != g
          ? { largeImage: g, smallImage: void 0 }
          : null != p && n
            ? { largeImage: { src: p }, smallImage: void 0 }
            : { largeImage: c, smallImage: void 0 };
}
function A(e, t) {
    let { largeImage: n, smallImage: l } = C(e, t);
    if (null != n) return { largeImage: n, smallImage: l };
    if ((0, c.Cy)(e)) {
        let t = (0, c.UW)(e),
            n =
                null != t
                    ? d.Ay.getGuildIconURL({ id: t.guildId, icon: e?.assets?.small_image, size: f.iu.SMALL })
                    : void 0;
        return { largeImage: null != n ? { src: n } : void 0, smallImage: void 0 };
    }
    if (null == n && (0, r.A)(e))
        return {
            largeImage: { src: i.A.get(p.fg2.XBOX).icon.customPNG, alt: g.intl.string(g.t.Nfvo72) },
            smallImage: void 0,
        };
    if (null == n && null == l && (0, s.A)(e))
        return {
            largeImage: { src: i.A.get(p.fg2.PLAYSTATION).icon.lightPNG, alt: g.intl.string(g.t.fFl4jo) },
            smallImage: void 0,
        };
    let a = _(t);
    return null != a ? { largeImage: a, smallImage: l } : { largeImage: l, smallImage: void 0 };
}
function C(e, t) {
    let n = (0, a.h)(e?.application_id);
    if (null == e) return { largeImage: void 0, smallImage: void 0 };
    let i = e?.assets?.large_image,
        s =
            null != i
                ? {
                      src: (0, u.uD)(e.application_id, i, [f.iu.LARGE, f.iu.LARGE]),
                      text: e.assets?.large_text?.trim(),
                      url: e.assets?.large_url,
                  }
                : void 0,
        r = (0, l.A)(e) ? void 0 : e?.assets?.small_image,
        o =
            null != r
                ? {
                      src: (0, u.uD)(e.application_id, r, [f.iu.LARGE, f.iu.LARGE]),
                      text: e.assets?.small_text?.trim(),
                      url: e.assets?.small_url,
                  }
                : void 0;
    return { largeImage: s ?? _(t ?? n), smallImage: o };
}
