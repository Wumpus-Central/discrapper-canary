"use strict";
n.d(t, { A: () => R, F: () => C });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(127382),
    l = n(598748),
    u = n(17928),
    c = n(834730),
    d = n(939249),
    _ = n(554830),
    f = n(975460),
    h = n(369374),
    p = n(531913),
    E = n(850046),
    m = n(619517),
    g = n(633075),
    A = n(841595),
    I = n(903209),
    T = n(375708),
    S = n(532786);
function N(e, t) {
    let n = (0, u.bG)([A.A], () => A.A.getUserProfile(e));
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
                    n.widgets.some((e) => e instanceof g.R && e.applicationId === t?.id),
                isLoadingProfile: null == n,
            }),
            [n, t],
        )
    );
}
function y(e) {
    let t = (0, f.g)(e.activityApplication),
        n = (function (e, t) {
            let n = (0, E.A)(
                    e,
                    r.useMemo(() => (null != t ? [t.id] : []), [t]),
                ),
                { hasWidget: i, isLoadingProfile: s } = N(e, t);
            return null == t || null == n[t.id] || s ? null : { previewData: n[t.id], hasWidget: i };
        })(e.userId, t);
    return null == n ? null : (0, i.jsx)(C, { ...e, ...n });
}
function C(e) {
    let {
        previewData: { previewIcon: t, previewText: n },
        hasWidget: r,
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(S.kL, e.className),
        children: [
            (0, i.jsx)("div", {
                className: S.Qs,
                children: (0, i.jsxs)(c.E, {
                    variant: "text-xs/semibold",
                    lineClamp: 1,
                    children: [
                        null != t &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", {
                                        className: S.Kk,
                                        children: (0, i.jsx)(m.Ay, {
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
                (0, i.jsx)(d.D, {
                    "aria-label": T.intl.string(T.t["OBCR+p"]),
                    className: S.NO,
                    onClick: (t) => {
                        e.onClickViewMore(t);
                    },
                    children: (0, i.jsx)(_.K, { size: "xxs" }),
                }),
        ],
    });
}
function v(e) {
    let t = (0, f.g)(e.activityApplication);
    return null == t ? null : (0, i.jsx)(O, { ...e, widgetApplication: t });
}
function O(e) {
    let t = (0, p.A)(e.userId, e.widgetApplication.id),
        n = t.surfaceConfigs[l.m.ACTIVITY_ACCESSORY],
        { hasWidget: r, isLoadingProfile: s } = N(e.userId, e.widgetApplication);
    return null == n || s || !t.hasIdentity
        ? null
        : (0, i.jsxs)("div", {
              className: a()(S.kL, e.className),
              children: [
                  (0, i.jsx)("div", {
                      className: S.Qs,
                      children: (0, i.jsx)(o.kH, { ...t, surface: l.m.ACTIVITY_ACCESSORY, surfaceConfig: n }),
                  }),
                  r &&
                      (0, i.jsx)(d.D, {
                          "aria-label": T.intl.string(T.t["OBCR+p"]),
                          className: S.NO,
                          onClick: e.onClickViewMore,
                          children: (0, i.jsx)(_.K, { size: "xxs" }),
                      }),
              ],
          });
}
function R(e) {
    let { enabled: t } = h.A.useConfig({ location: "ActivityApplicationWidgetPreview" });
    return t ? (0, i.jsx)(v, { ...e }) : (0, i.jsx)(y, { ...e });
}
