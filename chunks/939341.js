n.d(t, { C4: () => g, D8: () => S, XN: () => _, nO: () => A });
var i = n(573648),
    l = n(541806),
    r = n(141639),
    s = n(61330),
    a = n(429913),
    o = n(569926),
    u = n(82149),
    d = n(970928),
    c = n(486020),
    h = n(20805),
    p = n(327098),
    m = n(652215),
    f = n(360469),
    E = n(985018);
function g(e) {
    let t = e?.getIconURL(f.iu.LARGE),
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
function A(e) {
    let { entry: t, showCoverImage: n = !0 } = e,
        { activity: i, activityApplication: l, fallbackApplication: r } = (0, p.A)(t),
        { largeImage: s, smallImage: a } = S(i, l),
        { largeImage: u } = _(i, r ?? l),
        { data: c } = (0, o.I)((r ?? l)?.id),
        m = c?.getCoverURL(),
        E =
            (0, h.Tq)(t) && t.extra.entries.length > 0
                ? { src: t.extra.entries[0].media.image_url }
                : (0, h.Lf)(t)
                  ? {
                        src: (0, d.uD)(t.extra.application_id, t.extra.media_assets_large_image, f.iu.LARGE),
                        alt: t.extra.media_title,
                    }
                  : (0, h.p6)(t)
                    ? { src: t.extra.media.image_url }
                    : void 0;
    return null != s
        ? { largeImage: s, smallImage: a }
        : null != E
          ? { largeImage: E, smallImage: void 0 }
          : null != m && n
            ? { largeImage: { src: m }, smallImage: void 0 }
            : { largeImage: u, smallImage: void 0 };
}
function _(e, t) {
    let { largeImage: n, smallImage: l } = S(e, t);
    if (null != n) return { largeImage: n, smallImage: l };
    if ((0, u.Cy)(e)) {
        let t = (0, u.UW)(e),
            n =
                null != t
                    ? c.Ay.getGuildIconURL({ id: t.guildId, icon: e?.assets?.small_image, size: f.iu.SMALL })
                    : void 0;
        return { largeImage: null != n ? { src: n } : void 0, smallImage: void 0 };
    }
    if (null == n && (0, s.A)(e))
        return {
            largeImage: { src: i.A.get(m.fg2.XBOX).icon.customPNG, alt: E.intl.string(E.t.Nfvo72) },
            smallImage: void 0,
        };
    if (null == n && null == l && (0, r.A)(e))
        return {
            largeImage: { src: i.A.get(m.fg2.PLAYSTATION).icon.lightPNG, alt: E.intl.string(E.t.fFl4jo) },
            smallImage: void 0,
        };
    let a = g(t);
    return null != a ? { largeImage: a, smallImage: l } : { largeImage: l, smallImage: void 0 };
}
function S(e, t) {
    let n = (0, a.h)(e?.application_id);
    if (null == e) return { largeImage: void 0, smallImage: void 0 };
    let i = e?.assets?.large_image,
        r =
            null != i
                ? {
                      src: (0, d.uD)(e.application_id, i, [f.iu.LARGE, f.iu.LARGE]),
                      text: e.assets?.large_text?.trim(),
                      url: e.assets?.large_url,
                  }
                : void 0,
        s = (0, l.A)(e) ? void 0 : e?.assets?.small_image,
        o =
            null != s
                ? {
                      src: (0, d.uD)(e.application_id, s, [f.iu.LARGE, f.iu.LARGE]),
                      text: e.assets?.small_text?.trim(),
                      url: e.assets?.small_url,
                  }
                : void 0;
    return { largeImage: r ?? g(t ?? n), smallImage: o };
}
