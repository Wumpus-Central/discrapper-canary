"use strict";
n.d(t, { C4: () => T, D8: () => C, XN: () => N, nO: () => S });
var i = n(64700),
    r = n(17928),
    s = n(573648),
    a = n(541806),
    o = n(141639),
    l = n(61330),
    u = n(587895),
    c = n(429913),
    d = n(569926),
    _ = n(82149),
    h = n(174459),
    f = n(970928),
    p = n(486020),
    E = n(20805),
    m = n(327098),
    g = n(652215),
    A = n(360469),
    I = n(375708);
function T(e) {
    let t = e?.getIconURL(A.iu.LARGE),
        n = e?.name;
    if (null != t)
        return {
            src: t,
            alt:
                null == n
                    ? I.intl.string(I.t["2B/phM"])
                    : I.intl.formatToPlainString(I.t.tiKyYg, { applicationName: n }),
        };
}
function S(e) {
    let t,
        { entry: n, showCoverImage: i = !0, trackingSource: r } = e,
        { activity: s, activityApplication: a, fallbackApplication: o } = (0, m.A)(n),
        l = o ?? a,
        { largeImage: u, smallImage: c } = C(s, a),
        { largeImage: _ } = y(s, l),
        h = l?.getCanonicalGameId(),
        { data: p } = (0, d.I)(h),
        g = p?.getCoverURL(),
        I =
            (0, E.Tq)(n) && n.extra.entries.length > 0
                ? { src: n.extra.entries[0].media.image_url }
                : (0, E.Lf)(n)
                  ? {
                        src: (0, f.uD)(n.extra.application_id, n.extra.media_assets_large_image, A.iu.LARGE),
                        alt: n.extra.media_title,
                    }
                  : (0, E.p6)(n)
                    ? { src: n.extra.media.image_url }
                    : void 0;
    return (
        (t =
            null != u
                ? { largeImage: u, smallImage: c }
                : null != I
                  ? { largeImage: I, smallImage: void 0 }
                  : null != g && i
                    ? { largeImage: { src: g }, smallImage: void 0 }
                    : { largeImage: _, smallImage: void 0 }),
        v({ activity: s, application: o ?? a, largeImageSrc: t.largeImage?.src, trackingSource: r }),
        t
    );
}
function y(e, t) {
    let { largeImage: n, smallImage: i } = C(e, t);
    return (function (e) {
        let { activity: t, application: n, largeImage: i, smallImage: r } = e;
        if (null != i) return { largeImage: i, smallImage: r };
        if ((0, _.Cy)(t)) {
            let e = (0, _.UW)(t),
                n =
                    null != e
                        ? p.Ay.getGuildIconURL({ id: e.guildId, icon: t?.assets?.small_image, size: A.iu.SMALL })
                        : void 0;
            return { largeImage: null != n ? { src: n } : void 0, smallImage: void 0 };
        }
        if (null == i && (0, l.A)(t))
            return {
                largeImage: { src: s.A.get(g.fg2.XBOX).icon.customPNG, alt: I.intl.string(I.t.Nfvo72) },
                smallImage: void 0,
            };
        if (null == i && null == r && (0, o.A)(t))
            return {
                largeImage: { src: s.A.get(g.fg2.PLAYSTATION).icon.lightPNG, alt: I.intl.string(I.t.fFl4jo) },
                smallImage: void 0,
            };
        let a = T(n);
        return null != a ? { largeImage: a, smallImage: r } : { largeImage: r, smallImage: void 0 };
    })({ activity: e, application: t, largeImage: n, smallImage: i });
}
function N(e, t, n) {
    let i = y(e, t);
    return v({ activity: e, application: t, largeImageSrc: i.largeImage?.src, trackingSource: n }), i;
}
function v(e) {
    let { activity: t, application: n, largeImageSrc: s, trackingSource: a } = e,
        o = t?.application_id,
        l = (0, c.h)(o),
        d = (0, r.bG)([u.A], () => null != o && u.A.didFetchingApplicationFail(o)),
        _ = null == o || null != l || d,
        f = null != l || null != n,
        p = null == s,
        E = t?.name,
        m = t?.type,
        A = t?.session_id,
        I = t?.assets?.large_image != null || t?.assets?.small_image != null,
        T = null != t;
    (0, i.useEffect)(() => {
        T &&
            _ &&
            p &&
            h.default.track(g.HAw.ACTIVITY_DEFAULT_ICON_SHOWN, {
                source: a,
                application_id: o,
                activity_name: E,
                activity_type: m,
                activity_session_id: A,
                application_found: f,
                has_rich_assets: I,
            });
    }, [a, T, _, p, o, E, m, A, f, I]);
}
function C(e, t) {
    let n = (0, c.h)(e?.application_id);
    if (null == e) return { largeImage: void 0, smallImage: void 0 };
    let i = e?.assets?.large_image,
        r =
            null != i
                ? {
                      src: (0, f.uD)(e.application_id, i, [A.iu.LARGE, A.iu.LARGE]),
                      text: e.assets?.large_text?.trim(),
                      url: e.assets?.large_url,
                  }
                : void 0,
        s = (0, a.A)(e) ? void 0 : e?.assets?.small_image,
        o =
            null != s
                ? {
                      src: (0, f.uD)(e.application_id, s, [A.iu.LARGE, A.iu.LARGE]),
                      text: e.assets?.small_text?.trim(),
                      url: e.assets?.small_url,
                  }
                : void 0;
    return { largeImage: r ?? T(t ?? n), smallImage: o };
}
