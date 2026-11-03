t.d(n, { A: () => y });
var l = t(477900),
    i = t(582128),
    a = t(503698),
    s = t.n(a),
    r = t(17928),
    o = t(331322),
    c = t(661531),
    u = t(192308),
    d = t(834730),
    h = t(939249),
    g = t(689175),
    A = t(66834),
    m = t(306537),
    p = t(47167),
    j = t(713654),
    f = t(46054),
    x = t(506164),
    N = t(734057),
    b = t(105292),
    C = t(596490),
    E = t(814316);
function I(e) {
    let { guild: n, channelId: a } = e,
        s = (0, r.bG)([N.A], () => N.A.getChannel(a)),
        [g, E] = i.useState(!1),
        I = i.useCallback(() => {
            A.A.nsfwReturnToSafety(n?.id);
        }, [n]),
        y = i.useCallback(() => {
            A.A.spoilerAgree(a);
        }, [a]),
        _ = (0, p.Ay)(s),
        T = null != s ? (0, j.gU)(s) : null,
        S =
            null != s
                ? (0, l.jsxs)(o.B, {
                      direction: "horizontal",
                      align: "center",
                      gap: 4,
                      className: C.$,
                      children: [
                          null != T &&
                              (0, l.jsx)("span", {
                                  className: C.P0,
                                  children: (0, l.jsx)(T, { size: "md", color: c.A.colors.TEXT_DEFAULT }),
                              }),
                          (0, l.jsx)("span", { className: C.HA, children: _ }),
                      ],
                  })
                : b.intl.string(b.t["q38/ae"]),
        v = i.useCallback((e) => {
            null != e && E(e.scrollHeight - e.clientHeight > 1);
        }, []),
        k = i.useCallback(() => {
            null != s &&
                null != n &&
                (0, u.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([t.e("921903"), t.e("608939")]).then(t.bind(t, 181094));
                    return (t) => (0, l.jsx)(e, { ...t, channel: s, guild: n });
                });
        }, [s, n]),
        R =
            s?.topic != null && "" !== s.topic.trim()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(d.E, {
                              ref: v,
                              variant: "body-md/medium",
                              color: "text-muted",
                              className: C.VA,
                              lineClamp: 3,
                              children: f.A.parseTruncatedTopic(s.topic, !0, { channelId: a }),
                          }),
                          g &&
                              (0, l.jsx)(h.D, {
                                  className: C.zT,
                                  onClick: k,
                                  children: (0, l.jsx)(d.E, {
                                      variant: "body-md/medium",
                                      color: "text-brand",
                                      className: C.ql,
                                      children: b.intl.string(b.t["/QvRak"]),
                                  }),
                              }),
                          (0, l.jsx)("div", { className: C.yF }),
                      ],
                  })
                : null;
    return (0, l.jsx)(x.A, {
        onAgree: y,
        onDisagree: I,
        modalType: m.A5.SPOILER_CHANNEL,
        title: S,
        subtitle: R,
        description: b.intl.string(b.t["08bm2Z"]),
        agreement: b.intl.string(b.t.KmRwcW),
        disagreement: b.intl.string(b.t["/g10LC"]),
        guildId: n?.id,
        channelId: a,
    });
}
let y = function (e) {
    let { guild: n, channelId: t, className: a } = e,
        r = i.useRef(null);
    return (
        i.useEffect(() => {
            let { current: e } = r;
            e?.scrollToBottom();
        }, []),
        (0, l.jsx)(g.Ch, {
            ref: r,
            className: E.X,
            children: (0, l.jsx)("div", {
                className: s()(a, E.i),
                children: (0, l.jsx)(I, { guild: n, channelId: t }, t),
            }),
        })
    );
};
