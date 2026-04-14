n.d(t, { A: () => x });
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
    p = n(985018),
    g = n(879317),
    f = n(324025);
function E(e) {
    let { guild: t, channelId: s } = e,
        a = (0, r.bG)([m.A], () => m.A.getChannel(s)),
        [f, E] = l.useState(!1),
        x = l.useCallback(() => {
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
                      className: g.$,
                      children: [
                          null != N &&
                              (0, i.jsx)("span", {
                                  className: g.P0,
                                  children: (0, i.jsx)(N, { size: "md", color: o.LU0.colors.TEXT_DEFAULT }),
                              }),
                          (0, i.jsx)("span", { className: g.HA, children: C }),
                      ],
                  })
                : p.intl.string(p.t["q38/ae"]),
        S = l.useCallback((e) => {
            null != e && E(e.scrollHeight - e.clientHeight > 1);
        }, []),
        b = l.useCallback(() => {
            null != a &&
                null != t &&
                (0, o.mMO)(async () => {
                    let { default: e } = await n.e("8939").then(n.bind(n, 181094));
                    return (n) => (0, i.jsx)(e, { ...n, channel: a, guild: t });
                });
        }, [a, t]),
        y =
            a?.topic != null && "" !== a.topic.trim()
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.Text, {
                              ref: S,
                              variant: "text-md/medium",
                              color: "text-muted",
                              className: g.VA,
                              lineClamp: 3,
                              children: A.A.parseTopic(a.topic, !0, { channelId: s }),
                          }),
                          f &&
                              (0, i.jsx)(o.DUT, {
                                  className: g.zT,
                                  onClick: b,
                                  children: (0, i.jsx)(o.Text, {
                                      variant: "text-md/medium",
                                      color: "text-brand",
                                      className: g.ql,
                                      children: p.intl.string(p.t["/QvRak"]),
                                  }),
                              }),
                          (0, i.jsx)("div", { className: g.yF }),
                      ],
                  })
                : null;
    return (0, i.jsx)(_.A, {
        onAgree: I,
        onDisagree: x,
        modalType: c.A5.SPOILER_CHANNEL,
        title: T,
        subtitle: y,
        description: p.intl.string(p.t["34D1HC"]),
        agreement: p.intl.string(p.t.KmRwcW),
        disagreement: p.intl.string(p.t["/g10LC"]),
        guildId: t?.id,
        channelId: s,
    });
}
let x = function (e) {
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
                children: (0, i.jsx)(E, { guild: t, channelId: n }, n),
            }),
        })
    );
};
