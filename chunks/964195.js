"use strict";
n.d(t, { A: () => R, F: () => v });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(485584),
    l = n(598748),
    u = n(311907),
    c = n(834730),
    d = n(939249),
    _ = n(554830),
    f = n(975460),
    p = n(369374),
    h = n(531913),
    E = n(850046),
    m = n(619517),
    g = n(633075),
    A = n(622543),
    I = n(576622),
    T = n(985018),
    S = n(532786);
function y(e, t) {
    let n = (0, u.bG)([A.A], () => A.A.getUserProfile(e));
    return (
        i.useEffect(() => {
            let t = new AbortController();
            return (0, I.A)(e, void 0, { abortSignal: t.signal }), () => t.abort();
        }, [e]),
        i.useMemo(
            () => ({
                hasWidget:
                    null != n &&
                    null != n.widgets &&
                    n.widgets.some((e) => e instanceof g.R && e.applicationId === t?.id),
                isLoadingProfile: null == n,
            }),
            [n, t],
        )
    );
}
function N(e) {
    let t = (0, f.g)(e.activityApplication),
        n = (function (e, t) {
            let n = (0, E.A)(
                    e,
                    i.useMemo(() => (null != t ? [t.id] : []), [t]),
                ),
                { hasWidget: r, isLoadingProfile: s } = y(e, t);
            return null == t || null == n[t.id] || s ? null : { previewData: n[t.id], hasWidget: r };
        })(e.userId, t);
    return null == n ? null : (0, r.jsx)(v, { ...e, ...n });
}
function v(e) {
    let {
        previewData: { previewIcon: t, previewText: n },
        hasWidget: i,
    } = e;
    return (0, r.jsxs)("div", {
        className: a()(S.kL, e.className),
        children: [
            (0, r.jsx)("div", {
                className: S.Qs,
                children: (0, r.jsxs)(c.E, {
                    variant: "text-xs/semibold",
                    lineClamp: 1,
                    children: [
                        null != t &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", {
                                        className: S.Kk,
                                        children: (0, r.jsx)(m.Ay, {
                                            src: t.proxyUrl,
                                            width: t.width,
                                            height: t.height,
                                            responsive: !0,
                                        }),
                                    }),
                                    " ",
                                ],
                            }),
                        n,
                    ],
                }),
            }),
            i &&
                (0, r.jsx)(d.D, {
                    "aria-label": T.intl.string(T.t["OBCR+p"]),
                    className: S.NO,
                    onClick: (t) => {
                        e.onClickViewMore(t);
                    },
                    children: (0, r.jsx)(_.K, { size: "xxs" }),
                }),
        ],
    });
}
function C(e) {
    let t = (0, f.g)(e.activityApplication);
    return null == t ? null : (0, r.jsx)(O, { ...e, widgetApplication: t });
}
function O(e) {
    let t = (0, h.A)(e.userId, e.widgetApplication.id),
        n = t.surfaceConfigs[l.m.ACTIVITY_ACCESSORY],
        { hasWidget: i, isLoadingProfile: s } = y(e.userId, e.widgetApplication);
    return null == n || s
        ? null
        : (0, r.jsxs)("div", {
              className: a()(S.kL, e.className),
              children: [
                  (0, r.jsx)("div", {
                      className: S.Qs,
                      children: (0, r.jsx)(o.kH, { ...t, surface: l.m.ACTIVITY_ACCESSORY, surfaceConfig: n }),
                  }),
                  i &&
                      (0, r.jsx)(d.D, {
                          "aria-label": T.intl.string(T.t["OBCR+p"]),
                          className: S.NO,
                          onClick: e.onClickViewMore,
                          children: (0, r.jsx)(_.K, { size: "xxs" }),
                      }),
              ],
          });
}
function R(e) {
    let { enabled: t } = p.A.useConfig({ location: "ActivityApplicationWidgetPreview" });
    return t ? (0, r.jsx)(C, { ...e }) : (0, r.jsx)(N, { ...e });
}
