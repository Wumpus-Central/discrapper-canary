n.d(t, { A: () => C, F: () => I });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(794248),
    o = n(598748),
    u = n(17928),
    c = n(939249),
    d = n(554830),
    h = n(975460),
    m = n(531913),
    f = n(633075),
    p = n(321191),
    g = n(903209),
    x = n(375708),
    A = n(374129);
function C(e) {
    let t = (0, h.g)(e.activityApplication);
    return null == t ? null : (0, l.jsx)(E, { ...e, widgetApplication: t });
}
function E(e) {
    var t, n;
    let s,
        { hasWidget: r, isLoadingProfile: a } =
            ((t = e.userId),
            (n = e.widgetApplication),
            (s = (0, u.bG)([p.A], () => p.A.getUserProfile(t))),
            i.useEffect(() => {
                let e = new AbortController();
                return (0, g.A)(t, void 0, { abortSignal: e.signal }), () => e.abort();
            }, [t]),
            i.useMemo(
                () => ({
                    hasWidget: null != s && null != s.widgets && s.widgets.some((e) => (0, f.E)(e, n?.id)),
                    isLoadingProfile: null == s,
                }),
                [s, n],
            ));
    return a
        ? null
        : (0, l.jsx)(I, {
              className: e.className,
              userId: e.userId,
              widgetApplicationId: e.widgetApplication.id,
              hasWidget: r,
              onClickViewMore: e.onClickViewMore,
          });
}
function I(e) {
    let {
            className: t,
            userId: n,
            widgetApplicationId: i,
            hasWidget: s,
            compactViewMore: u = !1,
            onClickViewMore: h,
        } = e,
        f = (0, m.A)(n, i),
        p = f.surfaceConfigs[o.m.ACTIVITY_ACCESSORY];
    return null != p && f.hasIdentity
        ? (0, l.jsxs)("div", {
              className: r()(A.kL, t),
              children: [
                  (0, l.jsx)("div", {
                      className: A.Qs,
                      children: (0, l.jsx)(a.kH, { ...f, surface: o.m.ACTIVITY_ACCESSORY, surfaceConfig: p }),
                  }),
                  s &&
                      (0, l.jsx)(c.D, {
                          "aria-label": x.intl.string(x.t["OBCR+p"]),
                          className: r()(A.NO, { [A.O7]: u }),
                          onClick: h,
                          children: (0, l.jsx)(d.K, { size: "xxs" }),
                      }),
              ],
          })
        : null;
}
