n.d(e, { C4: () => E, D8: () => y, XN: () => S, nO: () => T });
var l = n(582128),
    i = n(17928),
    a = n(573648),
    r = n(541806),
    s = n(141639),
    o = n(61330),
    c = n(587895),
    u = n(429913),
    d = n(569926),
    A = n(82149),
    f = n(174459),
    p = n(970928),
    g = n(486020),
    m = n(20805),
    x = n(327098),
    _ = n(652215),
    I = n(818023),
    N = n(375708);
function E(t) {
    let e = t?.getIconURL(I.iu.LARGE),
        n = t?.name;
    if (null != e)
        return {
            src: e,
            alt:
                null == n
                    ? N.intl.string(N.t["2B/phM"])
                    : N.intl.formatToPlainString(N.t.tiKyYg, { applicationName: n }),
        };
}
function T(t) {
    let e,
        { entry: n, showCoverImage: l = !0, trackingSource: i } = t,
        { activity: a, activityApplication: r, fallbackApplication: s } = (0, x.A)(n),
        o = s ?? r,
        { largeImage: c, smallImage: u } = y(a, r),
        { largeImage: A } = C(a, o),
        f = o?.getCanonicalGameId(),
        { data: g } = (0, d.I)(f),
        _ = g?.getCoverURL(),
        N =
            (0, m.Tq)(n) && n.extra.entries.length > 0
                ? { src: n.extra.entries[0].media.image_url }
                : (0, m.Lf)(n)
                  ? {
                        src: (0, p.uD)(n.extra.application_id, n.extra.media_assets_large_image, I.iu.LARGE),
                        alt: n.extra.media_title,
                    }
                  : (0, m.p6)(n)
                    ? { src: n.extra.media.image_url }
                    : void 0;
    return (
        (e =
            null != c
                ? { largeImage: c, smallImage: u }
                : null != N
                  ? { largeImage: N, smallImage: void 0 }
                  : null != _ && l
                    ? { largeImage: { src: _ }, smallImage: void 0 }
                    : { largeImage: A, smallImage: void 0 }),
        h({ activity: a, application: s ?? r, largeImageSrc: e.largeImage?.src, trackingSource: i }),
        e
    );
}
function C(t, e) {
    let { largeImage: n, smallImage: l } = y(t, e);
    return (function (t) {
        let { activity: e, application: n, largeImage: l, smallImage: i } = t;
        if (null != l) return { largeImage: l, smallImage: i };
        if ((0, A.Cy)(e)) {
            let t = (0, A.UW)(e),
                n =
                    null != t
                        ? g.Ay.getGuildIconURL({ id: t.guildId, icon: e?.assets?.small_image, size: I.iu.SMALL })
                        : void 0;
            return { largeImage: null != n ? { src: n } : void 0, smallImage: void 0 };
        }
        if ((0, o.A)(e))
            return {
                largeImage: { src: a.A.get(_.fg2.XBOX).icon.customPNG, alt: N.intl.string(N.t.Nfvo72) },
                smallImage: void 0,
            };
        if (null == i && (0, s.A)(e))
            return {
                largeImage: { src: a.A.get(_.fg2.PLAYSTATION).icon.lightPNG, alt: N.intl.string(N.t.fFl4jo) },
                smallImage: void 0,
            };
        let r = E(n);
        return null != r ? { largeImage: r, smallImage: i } : { largeImage: i, smallImage: void 0 };
    })({ activity: t, application: e, largeImage: n, smallImage: l });
}
function S(t, e, n) {
    let l = C(t, e);
    return (h({ activity: t, application: e, largeImageSrc: l.largeImage?.src, trackingSource: n }), l);
}
function h(t) {
    let { activity: e, application: n, largeImageSrc: a, trackingSource: r } = t,
        s = e?.application_id,
        o = (0, u.h)(s),
        d = (0, i.bG)([c.A], () => null != s && c.A.didFetchingApplicationFail(s)),
        A = null == s || null != o || d,
        p = null != o || null != n,
        g = null == a,
        m = e?.name,
        x = e?.type,
        I = e?.session_id,
        N = e?.assets?.large_image != null || e?.assets?.small_image != null,
        E = null != e;
    (0, l.useEffect)(() => {
        E &&
            A &&
            g &&
            f.default.track(_.HAw.ACTIVITY_DEFAULT_ICON_SHOWN, {
                source: r,
                application_id: s,
                activity_name: m,
                activity_type: x,
                activity_session_id: I,
                application_found: p,
                has_rich_assets: N,
            });
    }, [r, E, A, g, s, m, x, I, p, N]);
}
function y(t, e) {
    let n = (0, u.h)(t?.application_id);
    if (null == t) return { largeImage: void 0, smallImage: void 0 };
    let l = t?.assets?.large_image,
        i =
            null != l
                ? {
                      src: (0, p.uD)(t.application_id, l, [I.iu.LARGE, I.iu.LARGE]),
                      text: t.assets?.large_text?.trim(),
                      url: t.assets?.large_url,
                  }
                : void 0,
        a = (0, r.A)(t) ? void 0 : t?.assets?.small_image,
        s =
            null != a
                ? {
                      src: (0, p.uD)(t.application_id, a, [I.iu.LARGE, I.iu.LARGE]),
                      text: t.assets?.small_text?.trim(),
                      url: t.assets?.small_url,
                  }
                : void 0;
    return { largeImage: i ?? E(e ?? n), smallImage: s };
}
