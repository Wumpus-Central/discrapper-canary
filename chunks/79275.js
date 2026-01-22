l.d(t, { A: () => A }), l(321073), l(896048);
var r = l(627968),
    n = l(64700),
    i = l(512750),
    s = l(311907),
    o = l(554146),
    a = l(192308),
    u = l(342494),
    d = l(379848),
    c = l(186111),
    f = l(89305),
    p = l(49999),
    m = l(333354),
    v = l(985018);
function A(e) {
    let { powerup: t, targetRef: l, isCardVisible: A } = e,
        g = (0, s.bG)([c.A], () => c.A.hasLayers()),
        x = (0, a.useHasAnyModalOpen)(),
        b =
            t.skuId === i.FB
                ? {
                      title: v.intl.string(m.default.YWo6VL),
                      body: v.intl.string(m.default.gXVvKc),
                      dismissibleContentType: o.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
                  }
                : null,
        h = [];
    null == b || g || !A || x || h.push(b.dismissibleContentType);
    let [j, _] = (0, d.kn)(h),
        E = n.useCallback(() => {
            _(p.i.INDIRECT_ACTION);
        }, [_]);
    return ((0, f.A)({
        targetRef: l,
        onShouldClose: E,
        enabled: null != j,
    }),
    null == b || null == j)
        ? null
        : (0, r.jsx)(u.AM, {
              targetElementRef: l,
              shouldShow: !0,
              position: "right",
              align: "top",
              size: "sm",
              caretConfig: { align: "start" },
              title: b.title,
              body: b.body,
              onRequestClose: () => {
                  _(p.i.USER_DISMISS);
              },
          });
}
