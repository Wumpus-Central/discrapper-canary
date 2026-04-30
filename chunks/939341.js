"use strict";
n.d(t, { C4: () => m, D8: () => I, XN: () => A, nO: () => g });
var i = n(573648),
    r = n(541806),
    s = n(141639),
    a = n(61330),
    o = n(429913),
    l = n(569926),
    u = n(82149),
    c = n(970928),
    d = n(486020),
    _ = n(20805),
    f = n(327098),
    h = n(652215),
    p = n(360469),
    E = n(375708);
function m(e) {
    let t = e?.getIconURL(p.iu.LARGE),
        n = e?.name;
    if (null != t)
        return {
            src: t,
            alt:
                null == n
                    ? E.intl.string(E.t["2B/phM"])
                    : E.intl.formatToPlainString(E.t.tiKyYg, { applicationName: n }),
        };
}
function g(e) {
    let { entry: t, showCoverImage: n = !0 } = e,
        { activity: i, activityApplication: r, fallbackApplication: s } = (0, f.A)(t),
        { largeImage: a, smallImage: o } = I(i, r),
        { largeImage: u } = A(i, s ?? r),
        { data: d } = (0, l.I)((s ?? r)?.id),
        h = d?.getCoverURL(),
        E =
            (0, _.Tq)(t) && t.extra.entries.length > 0
                ? { src: t.extra.entries[0].media.image_url }
                : (0, _.Lf)(t)
                  ? {
                        src: (0, c.uD)(t.extra.application_id, t.extra.media_assets_large_image, p.iu.LARGE),
                        alt: t.extra.media_title,
                    }
                  : (0, _.p6)(t)
                    ? { src: t.extra.media.image_url }
                    : void 0;
    return null != a
        ? { largeImage: a, smallImage: o }
        : null != E
          ? { largeImage: E, smallImage: void 0 }
          : null != h && n
            ? { largeImage: { src: h }, smallImage: void 0 }
            : { largeImage: u, smallImage: void 0 };
}
function A(e, t) {
    let { largeImage: n, smallImage: r } = I(e, t);
    if (null != n) return { largeImage: n, smallImage: r };
    if ((0, u.Cy)(e)) {
        let t = (0, u.UW)(e),
            n =
                null != t
                    ? d.Ay.getGuildIconURL({ id: t.guildId, icon: e?.assets?.small_image, size: p.iu.SMALL })
                    : void 0;
        return { largeImage: null != n ? { src: n } : void 0, smallImage: void 0 };
    }
    if (null == n && (0, a.A)(e))
        return {
            largeImage: { src: i.A.get(h.fg2.XBOX).icon.customPNG, alt: E.intl.string(E.t.Nfvo72) },
            smallImage: void 0,
        };
    if (null == n && null == r && (0, s.A)(e))
        return {
            largeImage: { src: i.A.get(h.fg2.PLAYSTATION).icon.lightPNG, alt: E.intl.string(E.t.fFl4jo) },
            smallImage: void 0,
        };
    let o = m(t);
    return null != o ? { largeImage: o, smallImage: r } : { largeImage: r, smallImage: void 0 };
}
function I(e, t) {
    let n = (0, o.h)(e?.application_id);
    if (null == e) return { largeImage: void 0, smallImage: void 0 };
    let i = e?.assets?.large_image,
        s =
            null != i
                ? {
                      src: (0, c.uD)(e.application_id, i, [p.iu.LARGE, p.iu.LARGE]),
                      text: e.assets?.large_text?.trim(),
                      url: e.assets?.large_url,
                  }
                : void 0,
        a = (0, r.A)(e) ? void 0 : e?.assets?.small_image,
        l =
            null != a
                ? {
                      src: (0, c.uD)(e.application_id, a, [p.iu.LARGE, p.iu.LARGE]),
                      text: e.assets?.small_text?.trim(),
                      url: e.assets?.small_url,
                  }
                : void 0;
    return { largeImage: s ?? m(t ?? n), smallImage: l };
}
