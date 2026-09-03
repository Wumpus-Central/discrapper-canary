n.d(t, { C4: () => I, D8: () => _, XN: () => N, nO: () => y });
var l = n(582128),
    i = n(17928),
    s = n(573648),
    r = n(541806),
    a = n(141639),
    o = n(61330),
    u = n(587895),
    c = n(429913),
    d = n(569926),
    h = n(82149),
    m = n(174459),
    f = n(970928),
    p = n(486020),
    g = n(20805),
    x = n(327098),
    A = n(652215),
    E = n(360469),
    C = n(375708);
function I(e) {
    let t = e?.getIconURL(E.iu.LARGE),
        n = e?.name;
    if (null != t)
        return {
            src: t,
            alt:
                null == n
                    ? C.intl.string(C.t["2B/phM"])
                    : C.intl.formatToPlainString(C.t.tiKyYg, { applicationName: n }),
        };
}
function y(e) {
    let t,
        { entry: n, showCoverImage: l = !0, trackingSource: i } = e,
        { activity: s, activityApplication: r, fallbackApplication: a } = (0, x.A)(n),
        o = a ?? r,
        { largeImage: u, smallImage: c } = _(s, r),
        { largeImage: h } = S(s, o),
        m = o?.getCanonicalGameId(),
        { data: p } = (0, d.I)(m),
        A = p?.getCoverURL(),
        C =
            (0, g.Tq)(n) && n.extra.entries.length > 0
                ? { src: n.extra.entries[0].media.image_url }
                : (0, g.Lf)(n)
                  ? {
                        src: (0, f.uD)(n.extra.application_id, n.extra.media_assets_large_image, E.iu.LARGE),
                        alt: n.extra.media_title,
                    }
                  : (0, g.p6)(n)
                    ? { src: n.extra.media.image_url }
                    : void 0;
    return (
        (t =
            null != u
                ? { largeImage: u, smallImage: c }
                : null != C
                  ? { largeImage: C, smallImage: void 0 }
                  : null != A && l
                    ? { largeImage: { src: A }, smallImage: void 0 }
                    : { largeImage: h, smallImage: void 0 }),
        v({ activity: s, application: a ?? r, largeImageSrc: t.largeImage?.src, trackingSource: i }),
        t
    );
}
function S(e, t) {
    let { largeImage: n, smallImage: l } = _(e, t);
    return (function (e) {
        let { activity: t, application: n, largeImage: l, smallImage: i } = e;
        if (null != l) return { largeImage: l, smallImage: i };
        if ((0, h.Cy)(t)) {
            let e = (0, h.UW)(t),
                n =
                    null != e
                        ? p.Ay.getGuildIconURL({ id: e.guildId, icon: t?.assets?.small_image, size: E.iu.SMALL })
                        : void 0;
            return { largeImage: null != n ? { src: n } : void 0, smallImage: void 0 };
        }
        if ((0, o.A)(t))
            return {
                largeImage: { src: s.A.get(A.fg2.XBOX).icon.customPNG, alt: C.intl.string(C.t.Nfvo72) },
                smallImage: void 0,
            };
        if (null == i && (0, a.A)(t))
            return {
                largeImage: { src: s.A.get(A.fg2.PLAYSTATION).icon.lightPNG, alt: C.intl.string(C.t.fFl4jo) },
                smallImage: void 0,
            };
        let r = I(n);
        return null != r ? { largeImage: r, smallImage: i } : { largeImage: i, smallImage: void 0 };
    })({ activity: e, application: t, largeImage: n, smallImage: l });
}
function N(e, t, n) {
    let l = S(e, t);
    return v({ activity: e, application: t, largeImageSrc: l.largeImage?.src, trackingSource: n }), l;
}
function v(e) {
    let { activity: t, application: n, largeImageSrc: s, trackingSource: r } = e,
        a = t?.application_id,
        o = (0, c.h)(a),
        d = (0, i.bG)([u.A], () => null != a && u.A.didFetchingApplicationFail(a)),
        h = null == a || null != o || d,
        f = null != o || null != n,
        p = null == s,
        g = t?.name,
        x = t?.type,
        E = t?.session_id,
        C = t?.assets?.large_image != null || t?.assets?.small_image != null,
        I = null != t;
    (0, l.useEffect)(() => {
        I &&
            h &&
            p &&
            m.default.track(A.HAw.ACTIVITY_DEFAULT_ICON_SHOWN, {
                source: r,
                application_id: a,
                activity_name: g,
                activity_type: x,
                activity_session_id: E,
                application_found: f,
                has_rich_assets: C,
            });
    }, [r, I, h, p, a, g, x, E, f, C]);
}
function _(e, t) {
    let n = (0, c.h)(e?.application_id);
    if (null == e) return { largeImage: void 0, smallImage: void 0 };
    let l = e?.assets?.large_image,
        i =
            null != l
                ? {
                      src: (0, f.uD)(e.application_id, l, [E.iu.LARGE, E.iu.LARGE]),
                      text: e.assets?.large_text?.trim(),
                      url: e.assets?.large_url,
                  }
                : void 0,
        s = (0, r.A)(e) ? void 0 : e?.assets?.small_image,
        a =
            null != s
                ? {
                      src: (0, f.uD)(e.application_id, s, [E.iu.LARGE, E.iu.LARGE]),
                      text: e.assets?.small_text?.trim(),
                      url: e.assets?.small_url,
                  }
                : void 0;
    return { largeImage: i ?? I(t ?? n), smallImage: a };
}
