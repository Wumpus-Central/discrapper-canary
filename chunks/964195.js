"use strict";
n.d(t, { A: () => T, F: () => S });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(485584),
    o = n(598748),
    c = n(311907),
    u = n(834730),
    d = n(939249),
    h = n(554830),
    m = n(975460),
    p = n(369374),
    f = n(531913),
    g = n(850046),
    _ = n(619517),
    x = n(633075),
    A = n(622543),
    C = n(576622),
    E = n(985018),
    I = n(532786);
function v(e, t) {
    let n = (0, c.bG)([A.A], () => A.A.getUserProfile(e));
    return (
        l.useEffect(() => {
            let t = new AbortController();
            return (0, C.A)(e, void 0, { abortSignal: t.signal }), () => t.abort();
        }, [e]),
        l.useMemo(
            () => ({
                hasWidget:
                    null != n &&
                    null != n.widgets &&
                    n.widgets.some((e) => e instanceof x.R && e.applicationId === t?.id),
                isLoadingProfile: null == n,
            }),
            [n, t],
        )
    );
}
function y(e) {
    let t = (0, m.g)(e.activityApplication),
        n = (function (e, t) {
            let n = (0, g.A)(
                    e,
                    l.useMemo(() => (null != t ? [t.id] : []), [t]),
                ),
                { hasWidget: i, isLoadingProfile: s } = v(e, t);
            return null == t || null == n[t.id] || s ? null : { previewData: n[t.id], hasWidget: i };
        })(e.userId, t);
    return null == n ? null : (0, i.jsx)(S, { ...e, ...n });
}
function S(e) {
    let {
        previewData: { previewIcon: t, previewText: n },
        hasWidget: l,
    } = e;
    return (0, i.jsxs)("div", {
        className: r()(I.kL, e.className),
        children: [
            (0, i.jsx)("div", {
                className: I.Qs,
                children: (0, i.jsxs)(u.E, {
                    variant: "text-xs/semibold",
                    lineClamp: 1,
                    children: [
                        null != t &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", {
                                        className: I.Kk,
                                        children: (0, i.jsx)(_.Ay, {
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
            l &&
                (0, i.jsx)(d.D, {
                    "aria-label": E.intl.string(E.t["OBCR+p"]),
                    className: I.NO,
                    onClick: (t) => {
                        e.onClickViewMore(t);
                    },
                    children: (0, i.jsx)(h.K, { size: "xxs" }),
                }),
        ],
    });
}
function b(e) {
    let t = (0, m.g)(e.activityApplication);
    return null == t ? null : (0, i.jsx)(N, { ...e, widgetApplication: t });
}
function N(e) {
    let t = (0, f.A)(e.userId, e.widgetApplication.id),
        n = t.surfaceConfigs[o.m.ACTIVITY_ACCESSORY],
        { hasWidget: l, isLoadingProfile: s } = v(e.userId, e.widgetApplication);
    return null == n || s
        ? null
        : (0, i.jsxs)("div", {
              className: r()(I.kL, e.className),
              children: [
                  (0, i.jsx)("div", {
                      className: I.Qs,
                      children: (0, i.jsx)(a.kH, { ...t, surface: o.m.ACTIVITY_ACCESSORY, surfaceConfig: n }),
                  }),
                  l &&
                      (0, i.jsx)(d.D, {
                          "aria-label": E.intl.string(E.t["OBCR+p"]),
                          className: I.NO,
                          onClick: e.onClickViewMore,
                          children: (0, i.jsx)(h.K, { size: "xxs" }),
                      }),
              ],
          });
}
function T(e) {
    let { enabled: t } = p.A.useConfig({ location: "ActivityApplicationWidgetPreview" });
    return t ? (0, i.jsx)(b, { ...e }) : (0, i.jsx)(y, { ...e });
}
