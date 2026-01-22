n.d(t, {
    C4: () => E,
    D8: () => O,
    XN: () => y,
    nO: () => b,
}),
    n(896048),
    n(733351);
var r = n(573648),
    i = n(541806),
    a = n(141639),
    s = n(61330),
    o = n(429913),
    l = n(585958),
    c = n(82149),
    u = n(139675),
    d = n(486020),
    f = n(20805),
    p = n(327098),
    _ = n(652215),
    h = n(360469),
    m = n(985018);
function g(e) {
    return (0, f.Tq)(e) && e.extra.entries.length > 0
        ? { src: e.extra.entries[0].media.image_url }
        : (0, f.Lf)(e)
          ? {
                src: (0, u.uD)(e.extra.application_id, e.extra.media_assets_large_image, h.iu.LARGE),
                alt: e.extra.media_title,
            }
          : (0, f.p6)(e)
            ? { src: e.extra.media.image_url }
            : void 0;
}
function E(e) {
    let t = null == e ? void 0 : e.getIconURL(h.iu.LARGE),
        n = null == e ? void 0 : e.name;
    if (null != t)
        return {
            src: t,
            alt:
                null == n
                    ? m.intl.string(m.t["2B/phM"])
                    : m.intl.formatToPlainString(m.t.tiKyYg, { applicationName: n }),
        };
}
function b(e) {
    var t;
    let { entry: n, showCoverImage: r = !0 } = e,
        { activity: i, activityApplication: a, fallbackApplication: s } = (0, p.A)(n),
        { largeImage: o, smallImage: c } = O(i, a),
        { largeImage: u } = y(i, null != s ? s : a),
        { coverImageUrl: d } = (0, l.n)(null == (t = null != s ? s : a) ? void 0 : t.id),
        f = g(n);
    return null != o
        ? {
              largeImage: o,
              smallImage: c,
          }
        : null != f
          ? {
                largeImage: f,
                smallImage: void 0,
            }
          : null != d && r
            ? {
                  largeImage: { src: d },
                  smallImage: void 0,
              }
            : {
                  largeImage: u,
                  smallImage: void 0,
              };
}
function y(e, t) {
    let { largeImage: n, smallImage: i } = O(e, t);
    if (null != n)
        return {
            largeImage: n,
            smallImage: i,
        };
    if ((0, c.Cy)(e)) {
        var o;
        let t = (0, c.UW)(e),
            n =
                null != t
                    ? d.Ay.getGuildIconURL({
                          id: t.guildId,
                          icon: null == e || null == (o = e.assets) ? void 0 : o.small_image,
                          size: h.iu.SMALL,
                      })
                    : void 0;
        return {
            largeImage: null != n ? { src: n } : void 0,
            smallImage: void 0,
        };
    }
    if (null == n && (0, s.A)(e))
        return {
            largeImage: {
                src: r.A.get(_.fg2.XBOX).icon.customPNG,
                alt: m.intl.string(m.t.Nfvo72),
            },
            smallImage: void 0,
        };
    if (null == n && null == i && (0, a.A)(e))
        return {
            largeImage: {
                src: r.A.get(_.fg2.PLAYSTATION).icon.lightPNG,
                alt: m.intl.string(m.t.fFl4jo),
            },
            smallImage: void 0,
        };
    let l = E(t);
    return null != l
        ? {
              largeImage: l,
              smallImage: i,
          }
        : {
              largeImage: i,
              smallImage: void 0,
          };
}
function O(e, t) {
    var n, r, a, s, l, c, d, f;
    let p = (0, o.h)(null == e ? void 0 : e.application_id);
    if (null == e)
        return {
            largeImage: void 0,
            smallImage: void 0,
        };
    let _ = null == e || null == (n = e.assets) ? void 0 : n.large_image,
        m =
            null != _
                ? {
                      src: (0, u.uD)(e.application_id, _, [h.iu.LARGE, h.iu.LARGE]),
                      text: null == (a = e.assets) || null == (r = a.large_text) ? void 0 : r.trim(),
                      url: null == (s = e.assets) ? void 0 : s.large_url,
                  }
                : void 0,
        g = (0, i.A)(e) || null == e || null == (l = e.assets) ? void 0 : l.small_image,
        b =
            null != g
                ? {
                      src: (0, u.uD)(e.application_id, g, [h.iu.LARGE, h.iu.LARGE]),
                      text: null == (d = e.assets) || null == (c = d.small_text) ? void 0 : c.trim(),
                      url: null == (f = e.assets) ? void 0 : f.small_url,
                  }
                : void 0;
    return {
        largeImage: null != m ? m : E(null != t ? t : p),
        smallImage: b,
    };
}
