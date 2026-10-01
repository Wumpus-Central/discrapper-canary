n.d(e, { A: () => I, F: () => E });
var l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(589812),
    o = n(598748),
    c = n(17928),
    u = n(939249),
    d = n(554830),
    A = n(975460),
    f = n(531913),
    p = n(633075),
    g = n(321191),
    m = n(903209),
    x = n(375708),
    _ = n(374129);
function I(t) {
    let e = (0, A.g)(t.activityApplication);
    return null == e ? null : (0, l.jsx)(N, { ...t, widgetApplication: e });
}
function N(t) {
    var e, n;
    let a,
        { hasWidget: r, isLoadingProfile: s } =
            ((e = t.userId),
            (n = t.widgetApplication),
            (a = (0, c.bG)([g.A], () => g.A.getUserProfile(e))),
            i.useEffect(() => {
                let t = new AbortController();
                return ((0, m.A)(e, void 0, { abortSignal: t.signal }), () => t.abort());
            }, [e]),
            i.useMemo(
                () => ({
                    hasWidget: null != a && null != a.widgets && a.widgets.some((t) => (0, p.E)(t, n?.id)),
                    isLoadingProfile: null == a,
                }),
                [a, n],
            ));
    return s
        ? null
        : (0, l.jsx)(E, {
              className: t.className,
              userId: t.userId,
              widgetApplicationId: t.widgetApplication.id,
              hasWidget: r,
              onClickViewMore: t.onClickViewMore,
          });
}
function E(t) {
    let {
            className: e,
            userId: n,
            widgetApplicationId: i,
            hasWidget: a,
            compactViewMore: c = !1,
            onClickViewMore: A,
        } = t,
        p = (0, f.A)(n, i),
        g = p.surfaceConfigs[o.m.ACTIVITY_ACCESSORY];
    return null != g && p.hasIdentity
        ? (0, l.jsxs)("div", {
              className: r()(_.kL, e),
              children: [
                  (0, l.jsx)("div", {
                      className: _.Qs,
                      children: (0, l.jsx)(s.kH, { ...p, surface: o.m.ACTIVITY_ACCESSORY, surfaceConfig: g }),
                  }),
                  a &&
                      (0, l.jsx)(u.D, {
                          "aria-label": x.intl.string(x.t["OBCR+p"]),
                          className: r()(_.NO, { [_.O7]: c }),
                          onClick: A,
                          children: (0, l.jsx)(d.K, { size: "xxs" }),
                      }),
              ],
          })
        : null;
}
