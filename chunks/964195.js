"use strict";
n.d(t, { A: () => g, F: () => A });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(397927),
    u = n(975460),
    c = n(850046),
    d = n(619517),
    _ = n(633075),
    f = n(622543),
    p = n(576622),
    h = n(985018),
    m = n(754434);
function E(e, t) {
    let n = (0, c.A)(
            e,
            i.useMemo(() => (null != t ? [t.id] : []), [t]),
        ),
        r = (0, o.bG)([f.A], () => f.A.getUserProfile(e));
    i.useEffect(() => {
        let t = new AbortController();
        return (0, p.A)(e, void 0, { abortSignal: t.signal }), () => t.abort();
    }, [e]);
    let s = i.useMemo(
        () => null != r && null != r.widgets && r.widgets.some((e) => e instanceof _.R && e.applicationId === t?.id),
        [r, t],
    );
    return null == t || null == n[t.id] || null == r ? null : { previewData: n[t.id], hasWidget: s };
}
function g(e) {
    let t = (0, u.g)(e.activityApplication),
        n = E(e.userId, t);
    return null == n ? null : (0, r.jsx)(A, { ...e, ...n });
}
function A(e) {
    let {
        previewData: { previewIcon: t, previewText: n },
        hasWidget: i,
    } = e;
    return (0, r.jsxs)("div", {
        className: a()(m.kL, e.className),
        children: [
            (0, r.jsx)("div", {
                className: m.Qs,
                children: (0, r.jsxs)(l.Text, {
                    variant: "text-xs/semibold",
                    lineClamp: 1,
                    children: [
                        null != t &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", {
                                        className: m.Kk,
                                        children: (0, r.jsx)(d.Ay, {
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
                (0, r.jsx)(l.DUT, {
                    "aria-label": h.intl.string(h.t["OBCR+p"]),
                    className: m.NO,
                    onClick: (t) => {
                        e.onClickViewMore(t);
                    },
                    children: (0, r.jsx)(l.KS6, { size: "xxs" }),
                }),
        ],
    });
}
