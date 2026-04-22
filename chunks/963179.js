n.r(t), n.d(t, { ItemDetailsModal: () => C });
var a = n(627968);
n(64700);
var l = n(423090),
    r = n(311907),
    i = n(638916),
    s = n(67480),
    o = n(328968),
    d = n(371794),
    c = n(998218),
    u = n(56754),
    m = n(550732),
    _ = n(376374),
    p = n(86889),
    h = n(652215),
    A = n(985018);
function C(e) {
    let { onClose: t, transitionState: n, skuId: C, appId: x, onHeaderTitleClick: f } = e,
        E = (0, r.bG)([o.A], () => o.A.getForSKU(C), [C]),
        I = (0, r.bG)([s.A], () => s.A.get(C), [C]),
        N = (0, u.L)(C);
    if (null == I) return null;
    let g = I.name ?? "",
        v = E?.description?.trim() ?? void 0,
        T = E?.headerBackground != null ? (c.A.toURLSafe((0, d.YE)(x, E.headerBackground, 256)) ?? void 0) : void 0,
        b = I.type === h.Puh.DURABLE && N,
        S = I.type === h.Puh.DURABLE ? (b ? A.intl.string(A.t.bm82mm) : A.intl.string(A.t["6gprwf"])) : void 0,
        { price: j } = I;
    return null == j
        ? null
        : (0, a.jsx)(m.C, {
              appId: x,
              skuId: I.id,
              transitionState: n,
              onHeaderTitleClick: f ?? t,
              onClose: t,
              footer: (0, a.jsx)(_.$P, { appId: x, sku: I }),
              children: (0, a.jsx)(p.D, {
                  appId: x,
                  skuId: I.id,
                  title: g,
                  description: v,
                  imgSrc: T,
                  tag: null != S ? (0, a.jsx)(l.v, { text: S }) : void 0,
                  FallbackIcon: i.q,
              }),
          });
}
