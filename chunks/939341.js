"use strict";
n.d(t, { C4: () => g, D8: () => R, XN: () => C, nO: () => S });
var i = n(64700),
    r = n(17928),
    a = n(573648),
    s = n(541806),
    l = n(141639),
    o = n(61330),
    d = n(587895),
    c = n(429913),
    u = n(569926),
    _ = n(82149),
    E = n(174459),
    A = n(970928),
    h = n(486020),
    I = n(20805),
    f = n(327098),
    p = n(652215),
    T = n(360469),
    m = n(375708);
function g(e) {
    let t = e?.getIconURL(T.iu.LARGE),
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
function S(e) {
    let t,
        { entry: n, showCoverImage: i = !0, trackingSource: r } = e,
        { activity: a, activityApplication: s, fallbackApplication: l } = (0, f.A)(n),
        o = l ?? s,
        { largeImage: d, smallImage: c } = R(a, s),
        { largeImage: _ } = N(a, o),
        E = o?.getCanonicalGameId(),
        { data: h } = (0, u.I)(E),
        p = h?.getCoverURL(),
        m =
            (0, I.Tq)(n) && n.extra.entries.length > 0
                ? { src: n.extra.entries[0].media.image_url }
                : (0, I.Lf)(n)
                  ? {
                        src: (0, A.uD)(n.extra.application_id, n.extra.media_assets_large_image, T.iu.LARGE),
                        alt: n.extra.media_title,
                    }
                  : (0, I.p6)(n)
                    ? { src: n.extra.media.image_url }
                    : void 0;
    return (
        (t =
            null != d
                ? { largeImage: d, smallImage: c }
                : null != m
                  ? { largeImage: m, smallImage: void 0 }
                  : null != p && i
                    ? { largeImage: { src: p }, smallImage: void 0 }
                    : { largeImage: _, smallImage: void 0 }),
        O({ activity: a, application: l ?? s, largeImageSrc: t.largeImage?.src, trackingSource: r }),
        t
    );
}
function N(e, t) {
    let { largeImage: n, smallImage: i } = R(e, t);
    return (function (e) {
        let { activity: t, application: n, largeImage: i, smallImage: r } = e;
        if (null != i) return { largeImage: i, smallImage: r };
        if ((0, _.Cy)(t)) {
            let e = (0, _.UW)(t),
                n =
                    null != e
                        ? h.Ay.getGuildIconURL({ id: e.guildId, icon: t?.assets?.small_image, size: T.iu.SMALL })
                        : void 0;
            return { largeImage: null != n ? { src: n } : void 0, smallImage: void 0 };
        }
        if ((0, o.A)(t))
            return {
                largeImage: { src: a.A.get(p.fg2.XBOX).icon.customPNG, alt: m.intl.string(m.t.Nfvo72) },
                smallImage: void 0,
            };
        if (null == r && (0, l.A)(t))
            return {
                largeImage: { src: a.A.get(p.fg2.PLAYSTATION).icon.lightPNG, alt: m.intl.string(m.t.fFl4jo) },
                smallImage: void 0,
            };
        let s = g(n);
        return null != s ? { largeImage: s, smallImage: r } : { largeImage: r, smallImage: void 0 };
    })({ activity: e, application: t, largeImage: n, smallImage: i });
}
function C(e, t, n) {
    let i = N(e, t);
    return O({ activity: e, application: t, largeImageSrc: i.largeImage?.src, trackingSource: n }), i;
}
function O(e) {
    let { activity: t, application: n, largeImageSrc: a, trackingSource: s } = e,
        l = t?.application_id,
        o = (0, c.h)(l),
        u = (0, r.bG)([d.A], () => null != l && d.A.didFetchingApplicationFail(l)),
        _ = null == l || null != o || u,
        A = null != o || null != n,
        h = null == a,
        I = t?.name,
        f = t?.type,
        T = t?.session_id,
        m = t?.assets?.large_image != null || t?.assets?.small_image != null,
        g = null != t;
    (0, i.useEffect)(() => {
        g &&
            _ &&
            h &&
            E.default.track(p.HAw.ACTIVITY_DEFAULT_ICON_SHOWN, {
                source: s,
                application_id: l,
                activity_name: I,
                activity_type: f,
                activity_session_id: T,
                application_found: A,
                has_rich_assets: m,
            });
    }, [s, g, _, h, l, I, f, T, A, m]);
}
function R(e, t) {
    let n = (0, c.h)(e?.application_id);
    if (null == e) return { largeImage: void 0, smallImage: void 0 };
    let i = e?.assets?.large_image,
        r =
            null != i
                ? {
                      src: (0, A.uD)(e.application_id, i, [T.iu.LARGE, T.iu.LARGE]),
                      text: e.assets?.large_text?.trim(),
                      url: e.assets?.large_url,
                  }
                : void 0,
        a = (0, s.A)(e) ? void 0 : e?.assets?.small_image,
        l =
            null != a
                ? {
                      src: (0, A.uD)(e.application_id, a, [T.iu.LARGE, T.iu.LARGE]),
                      text: e.assets?.small_text?.trim(),
                      url: e.assets?.small_url,
                  }
                : void 0;
    return { largeImage: r ?? g(t ?? n), smallImage: l };
}
