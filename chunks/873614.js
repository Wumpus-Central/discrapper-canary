t.d(n, { A: () => _ });
var l = t(477900),
    i = t(582128),
    a = t(503698),
    s = t.n(a),
    r = t(17928),
    c = t(331322),
    o = t(661531),
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
    C = t(105292),
    b = t(596490),
    E = t(814316);
function I(e) {
    let { guild: n, channelId: a } = e,
        s = (0, r.bG)([N.A], () => N.A.getChannel(a)),
        [g, E] = i.useState(!1),
        I = i.useCallback(() => {
            A.A.nsfwReturnToSafety(n?.id);
        }, [n]),
        _ = i.useCallback(() => {
            A.A.spoilerAgree(a);
        }, [a]),
        T = (0, p.Ay)(s),
        y = null != s ? (0, j.gU)(s) : null,
        S =
            null != s
                ? (0, l.jsxs)(c.B, {
                      direction: "horizontal",
                      align: "center",
                      gap: 4,
                      className: b.$,
                      children: [
                          null != y &&
                              (0, l.jsx)("span", {
                                  className: b.P0,
                                  children: (0, l.jsx)(y, { size: "md", color: o.A.colors.TEXT_DEFAULT }),
                              }),
                          (0, l.jsx)("span", { className: b.HA, children: T }),
                      ],
                  })
                : C.intl.string(C.t["q38/ae"]),
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
                              variant: "text-md/medium",
                              color: "text-muted",
                              className: b.VA,
                              lineClamp: 3,
                              children: f.A.parseTruncatedTopic(s.topic, !0, { channelId: a }),
                          }),
                          g &&
                              (0, l.jsx)(h.D, {
                                  className: b.zT,
                                  onClick: k,
                                  children: (0, l.jsx)(d.E, {
                                      variant: "text-md/medium",
                                      color: "text-brand",
                                      className: b.ql,
                                      children: C.intl.string(C.t["/QvRak"]),
                                  }),
                              }),
                          (0, l.jsx)("div", { className: b.yF }),
                      ],
                  })
                : null;
    return (0, l.jsx)(x.A, {
        onAgree: _,
        onDisagree: I,
        modalType: m.A5.SPOILER_CHANNEL,
        title: S,
        subtitle: R,
        description: C.intl.string(C.t["08bm2Z"]),
        agreement: C.intl.string(C.t.KmRwcW),
        disagreement: C.intl.string(C.t["/g10LC"]),
        guildId: n?.id,
        channelId: a,
    });
}
let _ = function (e) {
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
