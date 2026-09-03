n.d(l, { A: () => b });
var t = n(477900),
    i = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    c = n(331322),
    u = n(661531),
    d = n(192308),
    o = n(834730),
    A = n(939249),
    h = n(689175),
    g = n(66834),
    m = n(847599),
    x = n(47167),
    f = n(713654),
    j = n(46054),
    N = n(506164),
    C = n(734057),
    E = n(375708),
    p = n(596490),
    I = n(814316);
function _(e) {
    let { guild: l, channelId: a } = e,
        s = (0, r.bG)([C.A], () => C.A.getChannel(a)),
        [h, I] = i.useState(!1),
        _ = i.useCallback(() => {
            g.A.nsfwReturnToSafety(l?.id);
        }, [l]),
        b = i.useCallback(() => {
            g.A.spoilerAgree(a);
        }, [a]),
        T = (0, x.Ay)(s),
        S = null != s ? (0, f.gU)(s) : null,
        y =
            null != s
                ? (0, t.jsxs)(c.B, {
                      direction: "horizontal",
                      align: "center",
                      gap: 4,
                      className: p.$,
                      children: [
                          null != S &&
                              (0, t.jsx)("span", {
                                  className: p.P0,
                                  children: (0, t.jsx)(S, { size: "md", color: u.A.colors.TEXT_DEFAULT }),
                              }),
                          (0, t.jsx)("span", { className: p.HA, children: T }),
                      ],
                  })
                : E.intl.string(E.t["q38/ae"]),
        v = i.useCallback((e) => {
            null != e && I(e.scrollHeight - e.clientHeight > 1);
        }, []),
        k = i.useCallback(() => {
            null != s &&
                null != l &&
                (0, d.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("921903"), n.e("608939")]).then(n.bind(n, 181094));
                    return (n) => (0, t.jsx)(e, { ...n, channel: s, guild: l });
                });
        }, [s, l]),
        R =
            s?.topic != null && "" !== s.topic.trim()
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(o.E, {
                              ref: v,
                              variant: "text-md/medium",
                              color: "text-muted",
                              className: p.VA,
                              lineClamp: 3,
                              children: j.A.parseTruncatedTopic(s.topic, !0, { channelId: a }),
                          }),
                          h &&
                              (0, t.jsx)(A.D, {
                                  className: p.zT,
                                  onClick: k,
                                  children: (0, t.jsx)(o.E, {
                                      variant: "text-md/medium",
                                      color: "text-brand",
                                      className: p.ql,
                                      children: E.intl.string(E.t["/QvRak"]),
                                  }),
                              }),
                          (0, t.jsx)("div", { className: p.yF }),
                      ],
                  })
                : null;
    return (0, t.jsx)(N.A, {
        onAgree: b,
        onDisagree: _,
        modalType: m.A5.SPOILER_CHANNEL,
        title: y,
        subtitle: R,
        description: E.intl.string(E.t["08bm2Z"]),
        agreement: E.intl.string(E.t.KmRwcW),
        disagreement: E.intl.string(E.t["/g10LC"]),
        guildId: l?.id,
        channelId: a,
    });
}
let b = function (e) {
    let { guild: l, channelId: n, className: a } = e,
        r = i.useRef(null);
    return (
        i.useEffect(() => {
            let { current: e } = r;
            e?.scrollToBottom();
        }, []),
        (0, t.jsx)(h.Ch, {
            ref: r,
            className: I.X,
            children: (0, t.jsx)("div", {
                className: s()(a, I.i),
                children: (0, t.jsx)(_, { guild: l, channelId: n }, n),
            }),
        })
    );
};
