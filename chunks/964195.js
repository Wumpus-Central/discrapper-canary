var l = e(477900),
    i = e(582128),
    a = e(503698),
    r = e.n(a),
    s = e(886100),
    o = e(598748),
    c = e(855986),
    u = e(939249),
    d = e(554830),
    A = e(975460),
    x = e(531913),
    m = e(633075),
    f = e(851767),
    g = e(917445),
    p = e(792996),
    _ = e(374129);
function I(t) {
    var n, e;
    let a,
        { hasWidget: r, isLoadingProfile: s } =
            ((n = t.userId),
            (e = t.widgetApplication),
            (a = (0, c.bG)([f.A], () => f.A.getUserProfile(n))),
            i.useEffect(() => {
                let t = new AbortController();
                return ((0, g.A)(n, void 0, { abortSignal: t.signal }), () => t.abort());
            }, [n]),
            i.useMemo(
                () => ({
                    hasWidget: null != a && null != a.widgets && a.widgets.some((t) => (0, m.E)(t, e?.id)),
                    isLoadingProfile: null == a,
                }),
                [a, e],
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
            className: n,
            userId: e,
            widgetApplicationId: i,
            hasWidget: a,
            compactViewMore: c = !1,
            onClickViewMore: A,
        } = t,
        m = (0, x.A)(e, i),
        f = m.surfaceConfigs[o.m.ACTIVITY_ACCESSORY];
    return null != f && m.hasIdentity
        ? (0, l.jsxs)("div", {
              className: r()(_.kL, n),
              children: [
                  (0, l.jsx)("div", {
                      className: _.Qs,
                      children: (0, l.jsx)(s.kH, { ...m, surface: o.m.ACTIVITY_ACCESSORY, surfaceConfig: f }),
                  }),
                  a &&
                      (0, l.jsx)(u.D, {
                          "aria-label": p.intl.string(p.t["OBCR+p"]),
                          className: r()(_.NO, { [_.O7]: c }),
                          onClick: A,
                          children: (0, l.jsx)(d.ArrowLargeRightIcon, { size: "xxs" }),
                      }),
              ],
          })
        : null;
}
e.d(
    n,
    {},
    {
        A: function (t) {
            let n = (0, A.g)(t.activityApplication);
            return null == n ? null : (0, l.jsx)(I, { ...t, widgetApplication: n });
        },
        F: E,
    },
);
