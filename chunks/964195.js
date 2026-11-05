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
    f = e(531913),
    g = e(633075),
    m = e(851767),
    p = e(917445),
    x = e(792996),
    I = e(374129);
function _(t) {
    var n, e;
    let a,
        { hasWidget: r, isLoadingProfile: s } =
            ((n = t.userId),
            (e = t.widgetApplication),
            (a = (0, c.bG)([m.A], () => m.A.getUserProfile(n))),
            i.useEffect(() => {
                let t = new AbortController();
                return ((0, p.A)(n, void 0, { abortSignal: t.signal }), () => t.abort());
            }, [n]),
            i.useMemo(
                () => ({
                    hasWidget: null != a && null != a.widgets && a.widgets.some((t) => (0, g.E)(t, e?.id)),
                    isLoadingProfile: null == a,
                }),
                [a, e],
            ));
    return s
        ? null
        : (0, l.jsx)(N, {
              className: t.className,
              userId: t.userId,
              widgetApplicationId: t.widgetApplication.id,
              hasWidget: r,
              onClickViewMore: t.onClickViewMore,
          });
}
function N(t) {
    let {
            className: n,
            userId: e,
            widgetApplicationId: i,
            hasWidget: a,
            compactViewMore: c = !1,
            onClickViewMore: A,
        } = t,
        g = (0, f.A)(e, i),
        m = g.surfaceConfigs[o.m.ACTIVITY_ACCESSORY];
    return null != m && g.hasIdentity
        ? (0, l.jsxs)("div", {
              className: r()(I.kL, n),
              children: [
                  (0, l.jsx)("div", {
                      className: I.Qs,
                      children: (0, l.jsx)(s.kH, { ...g, surface: o.m.ACTIVITY_ACCESSORY, surfaceConfig: m }),
                  }),
                  a &&
                      (0, l.jsx)(u.D, {
                          "aria-label": x.intl.string(x.t["OBCR+p"]),
                          className: r()(I.NO, { [I.O7]: c }),
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
            return null == n ? null : (0, l.jsx)(_, { ...t, widgetApplication: n });
        },
        F: N,
    },
);
