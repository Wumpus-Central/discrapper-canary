n.d(t, { A: () => g }), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(512750),
    s = n(311907),
    o = n(554146),
    a = n(192308),
    u = n(342494),
    d = n(379848),
    c = n(186111),
    p = n(89305),
    m = n(49999),
    A = n(333354),
    _ = n(985018);
function g(e) {
    let { powerup: t, targetRef: n, isCardVisible: g } = e,
        f = (0, s.bG)([c.A], () => c.A.hasLayers()),
        x = (0, a.useHasAnyModalOpen)(),
        h =
            t.skuId === i.FB
                ? {
                      title: _.intl.string(A.default.YWo6VL),
                      body: _.intl.string(A.default.gXVvKc),
                      dismissibleContentType: o.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
                  }
                : null,
        v = [];
    null == h || f || !g || x || v.push(h.dismissibleContentType);
    let [j, b] = (0, d.kn)(v),
        E = l.useCallback(() => {
            b(m.i.INDIRECT_ACTION);
        }, [b]);
    return ((0, p.A)({ targetRef: n, onShouldClose: E, enabled: null != j }), null == h || null == j)
        ? null
        : (0, r.jsx)(u.AM, {
              targetElementRef: n,
              shouldShow: !0,
              position: "right",
              align: "top",
              size: "sm",
              caretConfig: { align: "start" },
              title: h.title,
              body: h.body,
              onRequestClose: () => {
                  b(m.i.USER_DISMISS);
              },
          });
}
