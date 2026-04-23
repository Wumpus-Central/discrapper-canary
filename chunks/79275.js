n.d(t, { A: () => x }), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(512750),
    s = n(311907),
    a = n(554146),
    o = n(192308),
    d = n(265486),
    u = n(932001),
    c = n(186111),
    _ = n(89305),
    m = n(49999),
    p = n(853513),
    A = n(985018);
function x(e) {
    let { powerup: t, targetRef: n, isCardVisible: x } = e,
        g = (0, s.bG)([c.A], () => c.A.hasLayers()),
        f = (0, o.useHasAnyModalOpen)(),
        h =
            t.skuId === l.FB
                ? {
                      title: A.intl.string(p.default.YWo6VL),
                      body: A.intl.string(p.default.gXVvKc),
                      dismissibleContentType: a.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
                  }
                : null,
        v = [];
    null == h || g || !x || f || v.push(h.dismissibleContentType);
    let [E, S] = (0, u.kn)(v),
        I = i.useCallback(() => {
            S(m.i.INDIRECT_ACTION);
        }, [S]);
    return ((0, _.A)({ targetRef: n, onShouldClose: I, enabled: null != E }), null == h || null == E)
        ? null
        : (0, r.jsx)(d.A, {
              targetElementRef: n,
              shouldShow: !0,
              position: "right",
              align: "top",
              size: "sm",
              caretConfig: { align: "start" },
              title: h.title,
              body: h.body,
              onRequestClose: () => {
                  S(m.i.USER_DISMISS);
              },
          });
}
