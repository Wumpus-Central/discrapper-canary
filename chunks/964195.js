"use strict";
n.d(t, { A: () => j, F: () => b });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(435428),
    o = n(598748),
    c = n(17928),
    u = n(834730),
    d = n(939249),
    h = n(554830),
    m = n(975460),
    p = n(369374),
    f = n(531913),
    g = n(850046),
    _ = n(619517),
    x = n(633075),
    C = n(841595),
    A = n(576622),
    E = n(985018),
    I = n(532786);
function v(e, t) {
    let n = (0, c.bG)([C.A], () => C.A.getUserProfile(e));
    return (
        i.useEffect(() => {
            let t = new AbortController();
            return (0, A.A)(e, void 0, { abortSignal: t.signal }), () => t.abort();
        }, [e]),
        i.useMemo(
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
                    i.useMemo(() => (null != t ? [t.id] : []), [t]),
                ),
                { hasWidget: l, isLoadingProfile: s } = v(e, t);
            return null == t || null == n[t.id] || s ? null : { previewData: n[t.id], hasWidget: l };
        })(e.userId, t);
    return null == n ? null : (0, l.jsx)(b, { ...e, ...n });
}
function b(e) {
    let {
        previewData: { previewIcon: t, previewText: n },
        hasWidget: i,
    } = e;
    return (0, l.jsxs)("div", {
        className: a()(I.kL, e.className),
        children: [
            (0, l.jsx)("div", {
                className: I.Qs,
                children: (0, l.jsxs)(u.E, {
                    variant: "text-xs/semibold",
                    lineClamp: 1,
                    children: [
                        null != t &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)("div", {
                                        className: I.Kk,
                                        children: (0, l.jsx)(_.Ay, {
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
                (0, l.jsx)(d.D, {
                    "aria-label": E.intl.string(E.t["OBCR+p"]),
                    className: I.NO,
                    onClick: (t) => {
                        e.onClickViewMore(t);
                    },
                    children: (0, l.jsx)(h.K, { size: "xxs" }),
                }),
        ],
    });
}
function S(e) {
    let t = (0, m.g)(e.activityApplication);
    return null == t ? null : (0, l.jsx)(N, { ...e, widgetApplication: t });
}
function N(e) {
    let t = (0, f.A)(e.userId, e.widgetApplication.id),
        n = t.surfaceConfigs[o.m.ACTIVITY_ACCESSORY],
        { hasWidget: i, isLoadingProfile: s } = v(e.userId, e.widgetApplication);
    return null == n || s
        ? null
        : (0, l.jsxs)("div", {
              className: a()(I.kL, e.className),
              children: [
                  (0, l.jsx)("div", {
                      className: I.Qs,
                      children: (0, l.jsx)(r.kH, { ...t, surface: o.m.ACTIVITY_ACCESSORY, surfaceConfig: n }),
                  }),
                  i &&
                      (0, l.jsx)(d.D, {
                          "aria-label": E.intl.string(E.t["OBCR+p"]),
                          className: I.NO,
                          onClick: e.onClickViewMore,
                          children: (0, l.jsx)(h.K, { size: "xxs" }),
                      }),
              ],
          });
}
function j(e) {
    let { enabled: t } = p.A.useConfig({ location: "ActivityApplicationWidgetPreview" });
    return t ? (0, l.jsx)(S, { ...e }) : (0, l.jsx)(y, { ...e });
}
