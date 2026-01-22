n.r(t), n.d(t, { ItemDetailsModal: () => g }), n(228524), n(733351);
var r = n(627968);
n(64700);
var i = n(423090),
    a = n(311907),
    s = n(397927),
    o = n(67480),
    l = n(328968),
    c = n(371794),
    u = n(998218),
    d = n(56754),
    f = n(550732),
    p = n(376374),
    _ = n(86889),
    h = n(652215),
    m = n(985018);
function g(e) {
    var t, n, g, E;
    let { onClose: b, transitionState: y, skuId: O, appId: A, onHeaderTitleClick: v } = e,
        S = (0, a.bG)([l.A], () => l.A.getForSKU(O), [O]),
        I = (0, a.bG)([o.A], () => o.A.get(O), [O]),
        T = (0, d.L)(O);
    if (null == I) return null;
    let C = null != (t = I.name) ? t : "",
        N = null != (n = null == S || null == (E = S.description) ? void 0 : E.trim()) ? n : void 0,
        R =
            (null == S ? void 0 : S.headerBackground) != null &&
            null != (g = u.A.toURLSafe((0, c.YE)(A, S.headerBackground, 256)))
                ? g
                : void 0,
        w = I.type === h.Puh.DURABLE && T,
        P = I.type === h.Puh.DURABLE ? (w ? m.intl.string(m.t.bm82mm) : m.intl.string(m.t["6gprwf"])) : void 0,
        { price: D } = I;
    return null == D
        ? null
        : (0, r.jsx)(f.C, {
              appId: A,
              skuId: I.id,
              transitionState: y,
              onHeaderTitleClick: null != v ? v : b,
              onClose: b,
              footer: (0, r.jsx)(p.$P, {
                  appId: A,
                  sku: I,
              }),
              children: (0, r.jsx)(_.D, {
                  appId: A,
                  skuId: I.id,
                  title: C,
                  description: N,
                  imgSrc: R,
                  tag: null != P ? (0, r.jsx)(i.v, { text: P }) : void 0,
                  FallbackIcon: s.qyI,
              }),
          });
}
