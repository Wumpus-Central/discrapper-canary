t.d(l, { A: () => T });
var n = t(477900),
    i = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(17928),
    c = t(331322),
    u = t(661531),
    d = t(192308),
    o = t(834730),
    m = t(939249),
    A = t(689175),
    g = t(66834),
    h = t(847599),
    x = t(47167),
    N = t(713654),
    f = t(46054),
    j = t(506164),
    E = t(734057),
    C = t(375708),
    p = t(54093),
    _ = t(790801);
function I(e) {
    let { guild: l, channelId: s } = e,
        a = (0, r.bG)([E.A], () => E.A.getChannel(s)),
        [A, _] = i.useState(!1),
        I = i.useCallback(() => {
            g.A.nsfwReturnToSafety(l?.id);
        }, [l]),
        T = i.useCallback(() => {
            g.A.spoilerAgree(s);
        }, [s]),
        b = (0, x.Ay)(a),
        S = null != a ? (0, N.gU)(a) : null,
        k =
            null != a
                ? (0, n.jsxs)(c.B, {
                      direction: "horizontal",
                      align: "center",
                      gap: 4,
                      className: p.$,
                      children: [
                          null != S &&
                              (0, n.jsx)("span", {
                                  className: p.P0,
                                  children: (0, n.jsx)(S, { size: "md", color: u.A.colors.TEXT_DEFAULT }),
                              }),
                          (0, n.jsx)("span", { className: p.HA, children: b }),
                      ],
                  })
                : C.intl.string(C.t["q38/ae"]),
        v = i.useCallback((e) => {
            null != e && _(e.scrollHeight - e.clientHeight > 1);
        }, []),
        y = i.useCallback(() => {
            null != a &&
                null != l &&
                (0, d.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([t.e("93388"), t.e("8939")]).then(t.bind(t, 181094));
                    return (t) => (0, n.jsx)(e, { ...t, channel: a, guild: l });
                });
        }, [a, l]),
        R =
            a?.topic != null && "" !== a.topic.trim()
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(o.E, {
                              ref: v,
                              variant: "text-md/medium",
                              color: "text-muted",
                              className: p.VA,
                              lineClamp: 3,
                              children: f.A.parseTopic(a.topic, !0, { channelId: s }),
                          }),
                          A &&
                              (0, n.jsx)(m.D, {
                                  className: p.zT,
                                  onClick: y,
                                  children: (0, n.jsx)(o.E, {
                                      variant: "text-md/medium",
                                      color: "text-brand",
                                      className: p.ql,
                                      children: C.intl.string(C.t["/QvRak"]),
                                  }),
                              }),
                          (0, n.jsx)("div", { className: p.yF }),
                      ],
                  })
                : null;
    return (0, n.jsx)(j.A, {
        onAgree: T,
        onDisagree: I,
        modalType: h.A5.SPOILER_CHANNEL,
        title: k,
        subtitle: R,
        description: C.intl.string(C.t["08bm2Z"]),
        agreement: C.intl.string(C.t.KmRwcW),
        disagreement: C.intl.string(C.t["/g10LC"]),
        guildId: l?.id,
        channelId: s,
    });
}
let T = function (e) {
    let { guild: l, channelId: t, className: s } = e,
        r = i.useRef(null);
    return (
        i.useEffect(() => {
            let { current: e } = r;
            e?.scrollToBottom();
        }, []),
        (0, n.jsx)(A.Ch, {
            ref: r,
            className: _.X,
            children: (0, n.jsx)("div", {
                className: a()(s, _.i),
                children: (0, n.jsx)(I, { guild: l, channelId: t }, t),
            }),
        })
    );
};
