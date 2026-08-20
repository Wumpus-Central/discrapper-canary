n.d(l, { A: () => T });
var t = n(477900),
    i = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(17928),
    c = n(331322),
    u = n(661531),
    d = n(192308),
    o = n(834730),
    m = n(939249),
    A = n(689175),
    h = n(66834),
    g = n(847599),
    x = n(47167),
    N = n(713654),
    f = n(46054),
    j = n(506164),
    E = n(734057),
    C = n(375708),
    p = n(596490),
    _ = n(814316);
function I(e) {
    let { guild: l, channelId: s } = e,
        a = (0, r.bG)([E.A], () => E.A.getChannel(s)),
        [A, _] = i.useState(!1),
        I = i.useCallback(() => {
            h.A.nsfwReturnToSafety(l?.id);
        }, [l]),
        T = i.useCallback(() => {
            h.A.spoilerAgree(s);
        }, [s]),
        S = (0, x.Ay)(a),
        b = null != a ? (0, N.gU)(a) : null,
        k =
            null != a
                ? (0, t.jsxs)(c.B, {
                      direction: "horizontal",
                      align: "center",
                      gap: 4,
                      className: p.$,
                      children: [
                          null != b &&
                              (0, t.jsx)("span", {
                                  className: p.P0,
                                  children: (0, t.jsx)(b, { size: "md", color: u.A.colors.TEXT_DEFAULT }),
                              }),
                          (0, t.jsx)("span", { className: p.HA, children: S }),
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
                    let { default: e } = await Promise.all([n.e("921903"), n.e("608939")]).then(n.bind(n, 181094));
                    return (n) => (0, t.jsx)(e, { ...n, channel: a, guild: l });
                });
        }, [a, l]),
        R =
            a?.topic != null && "" !== a.topic.trim()
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(o.E, {
                              ref: v,
                              variant: "text-md/medium",
                              color: "text-muted",
                              className: p.VA,
                              lineClamp: 3,
                              children: f.A.parseTruncatedTopic(a.topic, !0, { channelId: s }),
                          }),
                          A &&
                              (0, t.jsx)(m.D, {
                                  className: p.zT,
                                  onClick: y,
                                  children: (0, t.jsx)(o.E, {
                                      variant: "text-md/medium",
                                      color: "text-brand",
                                      className: p.ql,
                                      children: C.intl.string(C.t["/QvRak"]),
                                  }),
                              }),
                          (0, t.jsx)("div", { className: p.yF }),
                      ],
                  })
                : null;
    return (0, t.jsx)(j.A, {
        onAgree: T,
        onDisagree: I,
        modalType: g.A5.SPOILER_CHANNEL,
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
    let { guild: l, channelId: n, className: s } = e,
        r = i.useRef(null);
    return (
        i.useEffect(() => {
            let { current: e } = r;
            e?.scrollToBottom();
        }, []),
        (0, t.jsx)(A.Ch, {
            ref: r,
            className: _.X,
            children: (0, t.jsx)("div", {
                className: a()(s, _.i),
                children: (0, t.jsx)(I, { guild: l, channelId: n }, n),
            }),
        })
    );
};
