n.r(t), n.d(t, { ItemDetailsModal: () => E });
var l = n(627968);
n(64700);
var a = n(423090),
    r = n(311907),
    s = n(397927),
    i = n(67480),
    o = n(328968),
    d = n(371794),
    c = n(998218),
    u = n(56754),
    m = n(550732),
    p = n(376374),
    A = n(86889),
    h = n(652215),
    C = n(985018);
function E(e) {
    let { onClose: t, transitionState: n, skuId: E, appId: x, onHeaderTitleClick: N } = e,
        I = (0, r.bG)([o.A], () => o.A.getForSKU(E), [E]),
        _ = (0, r.bG)([i.A], () => i.A.get(E), [E]),
        f = (0, u.L)(E);
    if (null == _) return null;
    let g = _.name ?? "",
        T = I?.description?.trim() ?? void 0,
        v = I?.headerBackground != null ? (c.A.toURLSafe((0, d.YE)(x, I.headerBackground, 256)) ?? void 0) : void 0,
        j = _.type === h.Puh.DURABLE && f,
        S = _.type === h.Puh.DURABLE ? (j ? C.intl.string(C.t.bm82mm) : C.intl.string(C.t["6gprwf"])) : void 0,
        { price: O } = _;
    return null == O
        ? null
        : (0, l.jsx)(m.C, {
              appId: x,
              skuId: _.id,
              transitionState: n,
              onHeaderTitleClick: N ?? t,
              onClose: t,
              footer: (0, l.jsx)(p.$P, { appId: x, sku: _ }),
              children: (0, l.jsx)(A.D, {
                  appId: x,
                  skuId: _.id,
                  title: g,
                  description: T,
                  imgSrc: v,
                  tag: null != S ? (0, l.jsx)(a.v, { text: S }) : void 0,
                  FallbackIcon: s.qyI,
              }),
          });
}
