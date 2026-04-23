n.d(t, { C4: () => S, D8: () => R, XN: () => O, nO: () => N });
var i = n(573648),
    r = n(541806),
    a = n(141639),
    s = n(61330),
    _ = n(429913),
    l = n(569926),
    o = n(82149),
    E = n(970928),
    d = n(486020),
    c = n(20805),
    u = n(327098),
    I = n(652215),
    A = n(360469),
    T = n(985018);
function S(e) {
    let t = e?.getIconURL(A.iu.LARGE),
        n = e?.name;
    if (null != t)
        return {
            src: t,
            alt:
                null == n
                    ? T.intl.string(T.t["2B/phM"])
                    : T.intl.formatToPlainString(T.t.tiKyYg, { applicationName: n }),
        };
}
function N(e) {
    let { entry: t, showCoverImage: n = !0 } = e,
        { activity: i, activityApplication: r, fallbackApplication: a } = (0, u.A)(t),
        { largeImage: s, smallImage: _ } = R(i, r),
        { largeImage: o } = O(i, a ?? r),
        { data: d } = (0, l.I)((a ?? r)?.id),
        I = d?.getCoverURL(),
        T =
            (0, c.Tq)(t) && t.extra.entries.length > 0
                ? { src: t.extra.entries[0].media.image_url }
                : (0, c.Lf)(t)
                  ? {
                        src: (0, E.uD)(t.extra.application_id, t.extra.media_assets_large_image, A.iu.LARGE),
                        alt: t.extra.media_title,
                    }
                  : (0, c.p6)(t)
                    ? { src: t.extra.media.image_url }
                    : void 0;
    return null != s
        ? { largeImage: s, smallImage: _ }
        : null != T
          ? { largeImage: T, smallImage: void 0 }
          : null != I && n
            ? { largeImage: { src: I }, smallImage: void 0 }
            : { largeImage: o, smallImage: void 0 };
}
function O(e, t) {
    let { largeImage: n, smallImage: r } = R(e, t);
    if (null != n) return { largeImage: n, smallImage: r };
    if ((0, o.Cy)(e)) {
        let t = (0, o.UW)(e),
            n =
                null != t
                    ? d.Ay.getGuildIconURL({ id: t.guildId, icon: e?.assets?.small_image, size: A.iu.SMALL })
                    : void 0;
        return { largeImage: null != n ? { src: n } : void 0, smallImage: void 0 };
    }
    if (null == n && (0, s.A)(e))
        return {
            largeImage: { src: i.A.get(I.fg2.XBOX).icon.customPNG, alt: T.intl.string(T.t.Nfvo72) },
            smallImage: void 0,
        };
    if (null == n && null == r && (0, a.A)(e))
        return {
            largeImage: { src: i.A.get(I.fg2.PLAYSTATION).icon.lightPNG, alt: T.intl.string(T.t.fFl4jo) },
            smallImage: void 0,
        };
    let _ = S(t);
    return null != _ ? { largeImage: _, smallImage: r } : { largeImage: r, smallImage: void 0 };
}
function R(e, t) {
    let n = (0, _.h)(e?.application_id);
    if (null == e) return { largeImage: void 0, smallImage: void 0 };
    let i = e?.assets?.large_image,
        a =
            null != i
                ? {
                      src: (0, E.uD)(e.application_id, i, [A.iu.LARGE, A.iu.LARGE]),
                      text: e.assets?.large_text?.trim(),
                      url: e.assets?.large_url,
                  }
                : void 0,
        s = (0, r.A)(e) ? void 0 : e?.assets?.small_image,
        l =
            null != s
                ? {
                      src: (0, E.uD)(e.application_id, s, [A.iu.LARGE, A.iu.LARGE]),
                      text: e.assets?.small_text?.trim(),
                      url: e.assets?.small_url,
                  }
                : void 0;
    return { largeImage: a ?? S(t ?? n), smallImage: l };
}
