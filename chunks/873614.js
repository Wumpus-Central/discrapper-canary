l.d(n, { A: () => _ });
var t = l(477900),
    i = l(582128),
    a = l(503698),
    s = l.n(a),
    r = l(17928),
    c = l(331322),
    u = l(661531),
    d = l(192308),
    o = l(834730),
    A = l(939249),
    h = l(689175),
    g = l(66834),
    m = l(847599),
    x = l(47167),
    f = l(713654),
    j = l(46054),
    N = l(506164),
    p = l(734057),
    C = l(375708),
    E = l(596490),
    I = l(814316);
function b(e) {
    let { guild: n, channelId: a } = e,
        s = (0, r.bG)([p.A], () => p.A.getChannel(a)),
        [h, I] = i.useState(!1),
        b = i.useCallback(() => {
            g.A.nsfwReturnToSafety(n?.id);
        }, [n]),
        _ = i.useCallback(() => {
            g.A.spoilerAgree(a);
        }, [a]),
        y = (0, x.Ay)(s),
        T = null != s ? (0, f.gU)(s) : null,
        S =
            null != s
                ? (0, t.jsxs)(c.B, {
                      direction: "horizontal",
                      align: "center",
                      gap: 4,
                      className: E.$,
                      children: [
                          null != T &&
                              (0, t.jsx)("span", {
                                  className: E.P0,
                                  children: (0, t.jsx)(T, { size: "md", color: u.A.colors.TEXT_DEFAULT }),
                              }),
                          (0, t.jsx)("span", { className: E.HA, children: y }),
                      ],
                  })
                : C.intl.string(C.t["q38/ae"]),
        v = i.useCallback((e) => {
            null != e && I(e.scrollHeight - e.clientHeight > 1);
        }, []),
        k = i.useCallback(() => {
            null != s &&
                null != n &&
                (0, d.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([l.e("921903"), l.e("608939")]).then(l.bind(l, 181094));
                    return (l) => (0, t.jsx)(e, { ...l, channel: s, guild: n });
                });
        }, [s, n]),
        R =
            s?.topic != null && "" !== s.topic.trim()
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(o.E, {
                              ref: v,
                              variant: "text-md/medium",
                              color: "text-muted",
                              className: E.VA,
                              lineClamp: 3,
                              children: j.A.parseTruncatedTopic(s.topic, !0, { channelId: a }),
                          }),
                          h &&
                              (0, t.jsx)(A.D, {
                                  className: E.zT,
                                  onClick: k,
                                  children: (0, t.jsx)(o.E, {
                                      variant: "text-md/medium",
                                      color: "text-brand",
                                      className: E.ql,
                                      children: C.intl.string(C.t["/QvRak"]),
                                  }),
                              }),
                          (0, t.jsx)("div", { className: E.yF }),
                      ],
                  })
                : null;
    return (0, t.jsx)(N.A, {
        onAgree: _,
        onDisagree: b,
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
    let { guild: n, channelId: l, className: a } = e,
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
                children: (0, t.jsx)(b, { guild: n, channelId: l }, l),
            }),
        })
    );
};
