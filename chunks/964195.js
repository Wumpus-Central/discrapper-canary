"use strict";
n.d(t, { A: () => v, F: () => R });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(435428),
    l = n(598748),
    d = n(17928),
    _ = n(834730),
    u = n(939249),
    c = n(554830),
    E = n(975460),
    h = n(369374),
    m = n(531913),
    f = n(850046),
    g = n(619517),
    p = n(633075),
    A = n(841595),
    I = n(576622),
    T = n(985018),
    S = n(532786);
function N(e, t) {
    let n = (0, d.bG)([A.A], () => A.A.getUserProfile(e));
    return (
        r.useEffect(() => {
            let t = new AbortController();
            return (0, I.A)(e, void 0, { abortSignal: t.signal }), () => t.abort();
        }, [e]),
        r.useMemo(
            () => ({
                hasWidget:
                    null != n &&
                    null != n.widgets &&
                    n.widgets.some((e) => e instanceof p.R && e.applicationId === t?.id),
                isLoadingProfile: null == n,
            }),
            [n, t],
        )
    );
}
function C(e) {
    let t = (0, E.g)(e.activityApplication),
        n = (function (e, t) {
            let n = (0, f.A)(
                    e,
                    r.useMemo(() => (null != t ? [t.id] : []), [t]),
                ),
                { hasWidget: i, isLoadingProfile: s } = N(e, t);
            return null == t || null == n[t.id] || s ? null : { previewData: n[t.id], hasWidget: i };
        })(e.userId, t);
    return null == n ? null : (0, i.jsx)(R, { ...e, ...n });
}
function R(e) {
    let {
        previewData: { previewIcon: t, previewText: n },
        hasWidget: r,
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(S.kL, e.className),
        children: [
            (0, i.jsx)("div", {
                className: S.Qs,
                children: (0, i.jsxs)(_.E, {
                    variant: "text-xs/semibold",
                    lineClamp: 1,
                    children: [
                        null != t &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", {
                                        className: S.Kk,
                                        children: (0, i.jsx)(g.Ay, {
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
            r &&
                (0, i.jsx)(u.D, {
                    "aria-label": T.intl.string(T.t["OBCR+p"]),
                    className: S.NO,
                    onClick: (t) => {
                        e.onClickViewMore(t);
                    },
                    children: (0, i.jsx)(c.K, { size: "xxs" }),
                }),
        ],
    });
}
function O(e) {
    let t = (0, E.g)(e.activityApplication);
    return null == t ? null : (0, i.jsx)(y, { ...e, widgetApplication: t });
}
function y(e) {
    let t = (0, m.A)(e.userId, e.widgetApplication.id),
        n = t.surfaceConfigs[l.m.ACTIVITY_ACCESSORY],
        { hasWidget: r, isLoadingProfile: s } = N(e.userId, e.widgetApplication);
    return null == n || s
        ? null
        : (0, i.jsxs)("div", {
              className: a()(S.kL, e.className),
              children: [
                  (0, i.jsx)("div", {
                      className: S.Qs,
                      children: (0, i.jsx)(o.kH, { ...t, surface: l.m.ACTIVITY_ACCESSORY, surfaceConfig: n }),
                  }),
                  r &&
                      (0, i.jsx)(u.D, {
                          "aria-label": T.intl.string(T.t["OBCR+p"]),
                          className: S.NO,
                          onClick: e.onClickViewMore,
                          children: (0, i.jsx)(c.K, { size: "xxs" }),
                      }),
              ],
          });
}
function v(e) {
    let { enabled: t } = h.A.useConfig({ location: "ActivityApplicationWidgetPreview" });
    return t ? (0, i.jsx)(O, { ...e }) : (0, i.jsx)(C, { ...e });
}
