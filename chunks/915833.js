n.d(e, { XN: () => R, C4: () => O, nO: () => j, D8: () => b });
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
    f = n(879418),
    p = n(462887),
    g = n(736653),
    m = n(661531),
    x = n(191521);
function _(t) {
    let e = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><mask id="wand"><rect x="2" y="2" width="20" height="20" rx="3" fill="#fff"/><g transform="translate(6 6) scale(0.5)" fill="#000"><path d="${x.fy}"/><path d="${x.tW}"/><path d="${x.tE}"/></g></mask><rect x="2" y="2" width="20" height="20" rx="3" fill="${t}" mask="url(#wand)"/></svg>`;
    return `data:image/svg+xml,${encodeURIComponent(e)}`;
}
let I = {
    light: _(m.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex()),
    dark: _(m.A.unsafe_rawColors.WHITE.resolve({ saturation: 1 }).hex()),
};
var N = n(174459),
    E = n(970928),
    h = n(486020),
    T = n(20805),
    C = n(327098),
    S = n(652215),
    v = n(818023),
    y = n(375708);
function O(t) {
    let e = t?.getIconURL(v.iu.LARGE),
        n = t?.name;
    if (null != e)
        return {
            src: e,
            alt:
                null == n
                    ? y.intl.string(y.t["2B/phM"])
                    : y.intl.formatToPlainString(y.t.tiKyYg, { applicationName: n }),
        };
}
function j(t) {
    let e,
        { entry: n, showCoverImage: l = !0, trackingSource: i } = t,
        { activity: a, activityApplication: r, fallbackApplication: s } = (0, C.A)(n),
        o = s ?? r,
        { largeImage: c, smallImage: u } = b(a, r),
        { largeImage: A } = P(a, o),
        f = o?.getCanonicalGameId(),
        { data: p } = (0, d.I)(f),
        g = p?.getCoverURL(),
        m =
            (0, T.Tq)(n) && n.extra.entries.length > 0
                ? { src: n.extra.entries[0].media.image_url }
                : (0, T.Lf)(n)
                  ? {
                        src: (0, E.uD)(n.extra.application_id, n.extra.media_assets_large_image, v.iu.LARGE),
                        alt: n.extra.media_title,
                    }
                  : (0, T.p6)(n)
                    ? { src: n.extra.media.image_url }
                    : void 0;
    return (
        (e =
            null != c
                ? { largeImage: c, smallImage: u }
                : null != m
                  ? { largeImage: m, smallImage: void 0 }
                  : null != g && l
                    ? { largeImage: { src: g }, smallImage: void 0 }
                    : { largeImage: A, smallImage: void 0 }),
        L({ activity: a, application: s ?? r, largeImageSrc: e.largeImage?.src, trackingSource: i }),
        e
    );
}
function P(t, e) {
    let { largeImage: n, smallImage: l } = b(t, e);
    return (function (t) {
        let { activity: e, application: n, largeImage: l, smallImage: i, conjuringImage: r } = t;
        if (null != l) return { largeImage: l, smallImage: i };
        if ((0, A.Cy)(e)) {
            let t = (0, A.UW)(e),
                n =
                    null != t
                        ? h.Ay.getGuildIconURL({ id: t.guildId, icon: e?.assets?.small_image, size: v.iu.SMALL })
                        : void 0;
            return { largeImage: null != n ? { src: n } : void 0, smallImage: void 0 };
        }
        if ((0, o.A)(e))
            return {
                largeImage: { src: a.A.get(S.fg2.XBOX).icon.customPNG, alt: y.intl.string(y.t.Nfvo72) },
                smallImage: void 0,
            };
        if (null == i && (0, s.A)(e))
            return {
                largeImage: { src: a.A.get(S.fg2.PLAYSTATION).icon.lightPNG, alt: y.intl.string(y.t.fFl4jo) },
                smallImage: void 0,
            };
        if ((0, f.HL)(e)) return { largeImage: { src: r, alt: e?.name }, smallImage: void 0 };
        let c = O(n);
        return null != c ? { largeImage: c, smallImage: i } : { largeImage: i, smallImage: void 0 };
    })({
        activity: t,
        application: e,
        largeImage: n,
        smallImage: l,
        conjuringImage: (0, p.M)((0, g.Ay)()) ? I.dark : I.light,
    });
}
function R(t, e, n) {
    let l = P(t, e);
    return (L({ activity: t, application: e, largeImageSrc: l.largeImage?.src, trackingSource: n }), l);
}
function L(t) {
    let { activity: e, application: n, largeImageSrc: a, trackingSource: r } = t,
        s = e?.application_id,
        o = (0, u.h)(s),
        d = (0, i.bG)([c.A], () => null != s && c.A.didFetchingApplicationFail(s)),
        A = null == s || null != o || d,
        f = null != o || null != n,
        p = null == a,
        g = e?.name,
        m = e?.type,
        x = e?.session_id,
        _ = e?.assets?.large_image != null || e?.assets?.small_image != null,
        I = null != e;
    (0, l.useEffect)(() => {
        I &&
            A &&
            p &&
            N.default.track(S.HAw.ACTIVITY_DEFAULT_ICON_SHOWN, {
                source: r,
                application_id: s,
                activity_name: g,
                activity_type: m,
                activity_session_id: x,
                application_found: f,
                has_rich_assets: _,
            });
    }, [r, I, A, p, s, g, m, x, f, _]);
}
function b(t, e) {
    let n = (0, u.h)(t?.application_id);
    if (null == t) return { largeImage: void 0, smallImage: void 0 };
    let l = t?.assets?.large_image,
        i =
            null != l
                ? {
                      src: (0, E.uD)(t.application_id, l, [v.iu.LARGE, v.iu.LARGE]),
                      text: t.assets?.large_text?.trim(),
                      url: t.assets?.large_url,
                  }
                : void 0,
        a = (0, r.A)(t) ? void 0 : t?.assets?.small_image,
        s =
            null != a
                ? {
                      src: (0, E.uD)(t.application_id, a, [v.iu.LARGE, v.iu.LARGE]),
                      text: t.assets?.small_text?.trim(),
                      url: t.assets?.small_url,
                  }
                : void 0;
    return { largeImage: i ?? O(e ?? n), smallImage: s };
}
