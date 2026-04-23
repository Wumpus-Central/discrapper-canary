n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(331322),
    d = n(661531),
    c = n(192308),
    u = n(834730),
    h = n(939249),
    A = n(689175),
    _ = n(686956),
    g = n(847599),
    m = n(47167),
    p = n(713654),
    f = n(46054),
    E = n(506164),
    C = n(734057),
    x = n(985018),
    I = n(240389),
    b = n(311177);
function S(e) {
    let { guild: t, channelId: s } = e,
        r = (0, a.bG)([C.A], () => C.A.getChannel(s)),
        [A, b] = l.useState(!1),
        S = l.useCallback(() => {
            _.A.nsfwReturnToSafety(t?.id);
        }, [t]),
        N = l.useCallback(() => {
            _.A.spoilerAgree(s);
        }, [s]),
        T = (0, m.Ay)(r),
        v = null != r ? (0, p.gU)(r) : null,
        y =
            null != r
                ? (0, i.jsxs)(o.B, {
                      direction: "horizontal",
                      align: "center",
                      gap: 4,
                      className: I.$,
                      children: [
                          null != v &&
                              (0, i.jsx)("span", {
                                  className: I.P0,
                                  children: (0, i.jsx)(v, { size: "md", color: d.A.colors.TEXT_DEFAULT }),
                              }),
                          (0, i.jsx)("span", { className: I.HA, children: T }),
                      ],
                  })
                : x.intl.string(x.t["q38/ae"]),
        R = l.useCallback((e) => {
            null != e && b(e.scrollHeight - e.clientHeight > 1);
        }, []),
        j = l.useCallback(() => {
            null != r &&
                null != t &&
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await n.e("8939").then(n.bind(n, 181094));
                    return (n) => (0, i.jsx)(e, { ...n, channel: r, guild: t });
                });
        }, [r, t]),
        L =
            r?.topic != null && "" !== r.topic.trim()
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(u.E, {
                              ref: R,
                              variant: "text-md/medium",
                              color: "text-muted",
                              className: I.VA,
                              lineClamp: 3,
                              children: f.A.parseTopic(r.topic, !0, { channelId: s }),
                          }),
                          A &&
                              (0, i.jsx)(h.D, {
                                  className: I.zT,
                                  onClick: j,
                                  children: (0, i.jsx)(u.E, {
                                      variant: "text-md/medium",
                                      color: "text-brand",
                                      className: I.ql,
                                      children: x.intl.string(x.t["/QvRak"]),
                                  }),
                              }),
                          (0, i.jsx)("div", { className: I.yF }),
                      ],
                  })
                : null;
    return (0, i.jsx)(E.A, {
        onAgree: N,
        onDisagree: S,
        modalType: g.A5.SPOILER_CHANNEL,
        title: y,
        subtitle: L,
        description: x.intl.string(x.t["34D1HC"]),
        agreement: x.intl.string(x.t.KmRwcW),
        disagreement: x.intl.string(x.t["/g10LC"]),
        guildId: t?.id,
        channelId: s,
    });
}
let N = function (e) {
    let { guild: t, channelId: n, className: s } = e,
        a = l.useRef(null);
    return (
        l.useEffect(() => {
            let { current: e } = a;
            e?.scrollToBottom();
        }, []),
        (0, i.jsx)(A.Ch, {
            ref: a,
            className: b.X,
            children: (0, i.jsx)("div", {
                className: r()(s, b.i),
                children: (0, i.jsx)(S, { guild: t, channelId: n }, n),
            }),
        })
    );
};
