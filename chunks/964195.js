"use strict";
n.d(t, { A: () => R, F: () => v });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(485584),
    l = n(598748),
    u = n(311907),
    c = n(397927),
    d = n(975460),
    _ = n(369374),
    f = n(531913),
    p = n(850046),
    h = n(619517),
    m = n(633075),
    E = n(622543),
    g = n(576622),
    A = n(985018),
    I = n(24813);
function T(e, t) {
    let n = (0, u.bG)([E.A], () => E.A.getUserProfile(e));
    return (
        i.useEffect(() => {
            let t = new AbortController();
            return (0, g.A)(e, void 0, { abortSignal: t.signal }), () => t.abort();
        }, [e]),
        i.useMemo(
            () => ({
                hasWidget:
                    null != n &&
                    null != n.widgets &&
                    n.widgets.some((e) => e instanceof m.R && e.applicationId === t?.id),
                isLoadingProfile: null == n,
            }),
            [n, t],
        )
    );
}
function S(e, t) {
    let n = (0, p.A)(
            e,
            i.useMemo(() => (null != t ? [t.id] : []), [t]),
        ),
        { hasWidget: r, isLoadingProfile: s } = T(e, t);
    return null == t || null == n[t.id] || s ? null : { previewData: n[t.id], hasWidget: r };
}
function y(e) {
    let t = (0, d.g)(e.activityApplication),
        n = S(e.userId, t);
    return null == n ? null : (0, r.jsx)(v, { ...e, ...n });
}
function v(e) {
    let {
        previewData: { previewIcon: t, previewText: n },
        hasWidget: i,
    } = e;
    return (0, r.jsxs)("div", {
        className: a()(I.kL, e.className),
        children: [
            (0, r.jsx)("div", {
                className: I.Qs,
                children: (0, r.jsxs)(c.Text, {
                    variant: "text-xs/semibold",
                    lineClamp: 1,
                    children: [
                        null != t &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", {
                                        className: I.Kk,
                                        children: (0, r.jsx)(h.Ay, {
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
                (0, r.jsx)(c.DUT, {
                    "aria-label": A.intl.string(A.t["OBCR+p"]),
                    className: I.NO,
                    onClick: (t) => {
                        e.onClickViewMore(t);
                    },
                    children: (0, r.jsx)(c.KS6, { size: "xxs" }),
                }),
        ],
    });
}
function N(e) {
    let t = (0, d.g)(e.activityApplication);
    return null == t ? null : (0, r.jsx)(C, { ...e, widgetApplication: t });
}
function C(e) {
    let t = (0, f.A)(e.userId, e.widgetApplication.id),
        n = t.surfaceConfigs[l.m.ACTIVITY_ACCESSORY],
        { hasWidget: i, isLoadingProfile: s } = T(e.userId, e.widgetApplication);
    return null == n || s
        ? null
        : (0, r.jsxs)("div", {
              className: a()(I.kL, e.className),
              children: [
                  (0, r.jsx)("div", {
                      className: I.Qs,
                      children: (0, r.jsx)(o.kH, { ...t, surface: l.m.ACTIVITY_ACCESSORY, surfaceConfig: n }),
                  }),
                  i &&
                      (0, r.jsx)(c.DUT, {
                          "aria-label": A.intl.string(A.t["OBCR+p"]),
                          className: I.NO,
                          onClick: e.onClickViewMore,
                          children: (0, r.jsx)(c.KS6, { size: "xxs" }),
                      }),
              ],
          });
}
function R(e) {
    let { enabled: t } = _.A.useConfig({ location: "ActivityApplicationWidgetPreview" });
    return t ? (0, r.jsx)(N, { ...e }) : (0, r.jsx)(y, { ...e });
}
