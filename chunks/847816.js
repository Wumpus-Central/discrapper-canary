a.d(t, { A: () => S });
var n = a(627968),
    i = a(64700),
    l = a(503698),
    s = a.n(l),
    r = a(311907),
    o = a(397927),
    c = a(966327),
    d = a(386467),
    u = a(449859),
    m = a(943220),
    _ = a(734057),
    p = a(572855),
    A = a(358731),
    h = a(597351),
    g = a(985018),
    E = a(100204);
let T = i.memo(function (e) {
    let { message: t } = e,
        a = (0, r.bG)([_.A], () => _.A.getChannel(t.channel_id));
    return null == a
        ? null
        : (0, n.jsx)(A.Ay, {
              children: (e) =>
                  (0, n.jsxs)(d.A.Provider, {
                      value: a.guild_id,
                      children: [
                          (0, n.jsx)(c.A, { user: t.author, size: o._3J.SIZE_40, className: s()(E.Du, e) }),
                          (0, n.jsxs)("div", {
                              className: s()(E.cy, e),
                              children: [
                                  (0, n.jsx)(o.M1G, {
                                      children: (0, n.jsx)("div", {
                                          className: E.mG,
                                          children: (0, n.jsx)(m.A, { className: E.fh, message: t, channel: a }),
                                      }),
                                  }),
                                  (0, n.jsx)(u.A, {
                                      timestamp: t.timestamp,
                                      className: E.vE,
                                      tooltipPosition: "bottom",
                                  }),
                              ],
                          }),
                      ],
                  }),
          });
});
function S(e) {
    let { item: t, hideMediaOptions: a, onClose: i } = e,
        l = t.sourceMetadata?.message;
    return (0, n.jsxs)("div", {
        className: E.XV,
        children: [
            null != l && (0, n.jsx)(T, { message: l }),
            (0, n.jsx)(p.A, { item: t, hideMediaOptions: a }),
            (0, n.jsx)(A.Ay, {
                mode: A.nY.PINNED,
                children: (e) =>
                    (0, n.jsx)(h.A, {
                        onClick: i,
                        icon: o.PGe,
                        tooltip: g.intl.string(g.t.cpT0Cq),
                        className: s()(E.b, e),
                    }),
            }),
        ],
    });
}
