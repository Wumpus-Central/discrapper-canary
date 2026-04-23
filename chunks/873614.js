n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(331322),
    d = n(827734),
    c = n(192308),
    u = n(834730),
    h = n(939249),
    A = n(599319),
    _ = n(686956),
    m = n(847599),
    g = n(47167),
    p = n(713654),
    f = n(46054),
    E = n(506164),
    x = n(734057),
    I = n(985018),
    C = n(240389),
    b = n(311177);
function N(e) {
    let { guild: t, channelId: s } = e,
        a = (0, r.bG)([x.A], () => x.A.getChannel(s)),
        [A, b] = l.useState(!1),
        N = l.useCallback(() => {
            _.A.nsfwReturnToSafety(t?.id);
        }, [t]),
        S = l.useCallback(() => {
            _.A.spoilerAgree(s);
        }, [s]),
        v = (0, g.Ay)(a),
        T = null != a ? (0, p.gU)(a) : null,
        y =
            null != a
                ? (0, i.jsxs)(o.B, {
                      direction: "horizontal",
                      align: "center",
                      gap: 4,
                      className: C.$,
                      children: [
                          null != T &&
                              (0, i.jsx)("span", {
                                  className: C.P0,
                                  children: (0, i.jsx)(T, { size: "md", color: d.A.colors.TEXT_DEFAULT }),
                              }),
                          (0, i.jsx)("span", { className: C.HA, children: v }),
                      ],
                  })
                : I.intl.string(I.t["q38/ae"]),
        j = l.useCallback((e) => {
            null != e && b(e.scrollHeight - e.clientHeight > 1);
        }, []),
        R = l.useCallback(() => {
            null != a &&
                null != t &&
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await n.e("8939").then(n.bind(n, 181094));
                    return (n) => (0, i.jsx)(e, { ...n, channel: a, guild: t });
                });
        }, [a, t]),
        L =
            a?.topic != null && "" !== a.topic.trim()
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(u.E, {
                              ref: j,
                              variant: "text-md/medium",
                              color: "text-muted",
                              className: C.VA,
                              lineClamp: 3,
                              children: f.A.parseTopic(a.topic, !0, { channelId: s }),
                          }),
                          A &&
                              (0, i.jsx)(h.D, {
                                  className: C.zT,
                                  onClick: R,
                                  children: (0, i.jsx)(u.E, {
                                      variant: "text-md/medium",
                                      color: "text-brand",
                                      className: C.ql,
                                      children: I.intl.string(I.t["/QvRak"]),
                                  }),
                              }),
                          (0, i.jsx)("div", { className: C.yF }),
                      ],
                  })
                : null;
    return (0, i.jsx)(E.A, {
        onAgree: S,
        onDisagree: N,
        modalType: m.A5.SPOILER_CHANNEL,
        title: y,
        subtitle: L,
        description: I.intl.string(I.t["34D1HC"]),
        agreement: I.intl.string(I.t.KmRwcW),
        disagreement: I.intl.string(I.t["/g10LC"]),
        guildId: t?.id,
        channelId: s,
    });
}
let S = function (e) {
    let { guild: t, channelId: n, className: s } = e,
        r = l.useRef(null);
    return (
        l.useEffect(() => {
            let { current: e } = r;
            e?.scrollToBottom();
        }, []),
        (0, i.jsx)(A.Ch, {
            ref: r,
            className: b.X,
            children: (0, i.jsx)("div", {
                className: a()(s, b.i),
                children: (0, i.jsx)(N, { guild: t, channelId: n }, n),
            }),
        })
    );
};
