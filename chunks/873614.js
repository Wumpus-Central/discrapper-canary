n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    d = n(686956),
    c = n(847599),
    u = n(47167),
    h = n(713654),
    A = n(46054),
    _ = n(506164),
    m = n(734057),
    g = n(985018),
    p = n(859822),
    f = n(643272);
function x(e) {
    let { guild: t, channelId: s } = e,
        a = (0, r.bG)([m.A], () => m.A.getChannel(s)),
        [f, x] = l.useState(!1),
        E = l.useCallback(() => {
            d.A.nsfwReturnToSafety(t?.id);
        }, [t]),
        I = l.useCallback(() => {
            d.A.spoilerAgree(s);
        }, [s]),
        C = (0, u.Ay)(a),
        N = null != a ? (0, h.gU)(a) : null,
        T =
            null != a
                ? (0, i.jsxs)(o.BJc, {
                      direction: "horizontal",
                      align: "center",
                      gap: 4,
                      children: [null != N && (0, i.jsx)(N, { size: "md", color: o.LU0.colors.TEXT_DEFAULT }), C],
                  })
                : g.intl.string(g.t["q38/ae"]),
        S = l.useCallback((e) => {
            null != e && x(e.scrollHeight - e.clientHeight > 1);
        }, []),
        b = l.useCallback(() => {
            null != a &&
                null != t &&
                (0, o.mMO)(async () => {
                    let { default: e } = await n.e("8939").then(n.bind(n, 181094));
                    return (n) => (0, i.jsx)(e, { ...n, channel: a, guild: t });
                });
        }, [a, t]),
        v =
            a?.topic != null && "" !== a.topic.trim()
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.Text, {
                              ref: S,
                              variant: "text-md/medium",
                              color: "text-muted",
                              className: p.VA,
                              lineClamp: 3,
                              children: A.A.parseTopic(a.topic, !0, { channelId: s }),
                          }),
                          f &&
                              (0, i.jsx)(o.DUT, {
                                  className: p.zT,
                                  onClick: b,
                                  children: (0, i.jsx)(o.Text, {
                                      variant: "text-md/medium",
                                      color: "text-brand",
                                      className: p.ql,
                                      children: g.intl.string(g.t["/QvRak"]),
                                  }),
                              }),
                          (0, i.jsx)("div", { className: p.yF }),
                      ],
                  })
                : null;
    return (0, i.jsx)(_.A, {
        onAgree: I,
        onDisagree: E,
        modalType: c.A5.SPOILER_CHANNEL,
        title: T,
        subtitle: v,
        description: g.intl.string(g.t["34D1HC"]),
        agreement: g.intl.string(g.t.KmRwcW),
        disagreement: g.intl.string(g.t["/g10LC"]),
        guildId: t?.id,
        channelId: s,
    });
}
let E = function (e) {
    let { guild: t, channelId: n, className: s } = e,
        r = l.useRef(null);
    return (
        l.useEffect(() => {
            let { current: e } = r;
            e?.scrollToBottom();
        }, []),
        (0, i.jsx)(o.T7Y, {
            ref: r,
            className: f.X,
            children: (0, i.jsx)("div", {
                className: a()(s, f.i),
                children: (0, i.jsx)(x, { guild: t, channelId: n }, n),
            }),
        })
    );
};
