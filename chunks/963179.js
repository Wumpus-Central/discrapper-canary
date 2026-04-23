l.r(e), l.d(e, { ItemDetailsModal: () => j });
var n = l(627968);
l(64700);
var r = l(423090),
    s = l(17928),
    i = l(638916),
    a = l(67480),
    o = l(328968),
    c = l(371794),
    d = l(998218),
    u = l(56754),
    x = l(550732),
    _ = l(376374),
    h = l(888781),
    m = l(652215),
    v = l(985018);
function j(t) {
    let { onClose: e, transitionState: l, skuId: j, appId: E, onHeaderTitleClick: A } = t,
        g = (0, s.bG)([o.A], () => o.A.getForSKU(j), [j]),
        p = (0, s.bG)([a.A], () => a.A.get(j), [j]),
        S = (0, u.L)(j);
    if (null == p) return null;
    let f = p.name ?? "",
        I = g?.description?.trim() ?? void 0,
        T = g?.headerBackground != null ? (d.A.toURLSafe((0, c.YE)(E, g.headerBackground, 256)) ?? void 0) : void 0,
        C = p.type === m.Puh.DURABLE && S,
        R = p.type === m.Puh.DURABLE ? (C ? v.intl.string(v.t.bm82mm) : v.intl.string(v.t["6gprwf"])) : void 0,
        { price: k } = p;
    return null == k
        ? null
        : (0, n.jsx)(x.C, {
              appId: E,
              skuId: p.id,
              transitionState: l,
              onHeaderTitleClick: A ?? e,
              onClose: e,
              footer: (0, n.jsx)(_.$P, { appId: E, sku: p }),
              children: (0, n.jsx)(h.D, {
                  appId: E,
                  skuId: p.id,
                  title: f,
                  description: I,
                  imgSrc: T,
                  tag: null != R ? (0, n.jsx)(r.v, { text: R }) : void 0,
                  FallbackIcon: i.q,
              }),
          });
}
