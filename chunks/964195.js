"use strict";
n.d(t, { A: () => T, F: () => g });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(284513),
    o = n(598748),
    d = n(17928),
    c = n(939249),
    u = n(554830),
    _ = n(975460),
    E = n(531913),
    A = n(633075),
    h = n(321191),
    I = n(903209),
    f = n(375708),
    p = n(532786);
function T(e) {
    let t = (0, _.g)(e.activityApplication);
    return null == t ? null : (0, i.jsx)(m, { ...e, widgetApplication: t });
}
function m(e) {
    var t, n;
    let a,
        { hasWidget: s, isLoadingProfile: l } =
            ((t = e.userId),
            (n = e.widgetApplication),
            (a = (0, d.bG)([h.A], () => h.A.getUserProfile(t))),
            r.useEffect(() => {
                let e = new AbortController();
                return (0, I.A)(t, void 0, { abortSignal: e.signal }), () => e.abort();
            }, [t]),
            r.useMemo(
                () => ({
                    hasWidget: null != a && null != a.widgets && a.widgets.some((e) => (0, A.E)(e, n?.id)),
                    isLoadingProfile: null == a,
                }),
                [a, n],
            ));
    return l
        ? null
        : (0, i.jsx)(g, {
              className: e.className,
              userId: e.userId,
              widgetApplicationId: e.widgetApplication.id,
              hasWidget: s,
              onClickViewMore: e.onClickViewMore,
          });
}
function g(e) {
    let {
            className: t,
            userId: n,
            widgetApplicationId: r,
            hasWidget: a,
            compactViewMore: d = !1,
            onClickViewMore: _,
        } = e,
        A = (0, E.A)(n, r),
        h = A.surfaceConfigs[o.m.ACTIVITY_ACCESSORY];
    return null != h && A.hasIdentity
        ? (0, i.jsxs)("div", {
              className: s()(p.kL, t),
              children: [
                  (0, i.jsx)("div", {
                      className: p.Qs,
                      children: (0, i.jsx)(l.kH, { ...A, surface: o.m.ACTIVITY_ACCESSORY, surfaceConfig: h }),
                  }),
                  a &&
                      (0, i.jsx)(c.D, {
                          "aria-label": f.intl.string(f.t["OBCR+p"]),
                          className: s()(p.NO, { [p.O7]: d }),
                          onClick: _,
                          children: (0, i.jsx)(u.K, { size: "xxs" }),
                      }),
              ],
          })
        : null;
}
