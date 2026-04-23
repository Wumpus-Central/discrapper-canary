n.d(t, { A: () => S });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(311907),
    o = n(778712),
    c = n(247928),
    d = n(789645),
    u = n(966327),
    m = n(386467),
    p = n(449859),
    _ = n(943220),
    A = n(734057),
    h = n(572855),
    g = n(358731),
    f = n(597351),
    E = n(985018),
    C = n(897003);
let I = i.memo(function (e) {
    let { message: t } = e,
        n = (0, s.bG)([A.A], () => A.A.getChannel(t.channel_id));
    return null == n
        ? null
        : (0, a.jsx)(g.Ay, {
              children: (e) =>
                  (0, a.jsxs)(m.A.Provider, {
                      value: n.guild_id,
                      children: [
                          (0, a.jsx)(u.A, { user: t.author, size: o._3.SIZE_40, className: r()(C.Du, e) }),
                          (0, a.jsxs)("div", {
                              className: r()(C.cy, e),
                              children: [
                                  (0, a.jsx)(c.M, {
                                      children: (0, a.jsx)("div", {
                                          className: C.mG,
                                          children: (0, a.jsx)(_.A, { className: C.fh, message: t, channel: n }),
                                      }),
                                  }),
                                  (0, a.jsx)(p.A, {
                                      timestamp: t.timestamp,
                                      className: C.vE,
                                      tooltipPosition: "bottom",
                                  }),
                              ],
                          }),
                      ],
                  }),
          });
});
function S(e) {
    let { item: t, hideMediaOptions: n, onClose: i } = e,
        l = t.sourceMetadata?.message;
    return (0, a.jsxs)("div", {
        className: C.XV,
        children: [
            null != l && (0, a.jsx)(I, { message: l }),
            (0, a.jsx)(h.A, { item: t, hideMediaOptions: n }),
            (0, a.jsx)(g.Ay, {
                mode: g.nY.PINNED,
                children: (e) =>
                    (0, a.jsx)(f.A, {
                        onClick: i,
                        icon: d.P,
                        tooltip: E.intl.string(E.t.cpT0Cq),
                        className: r()(C.b, e),
                    }),
            }),
        ],
    });
}
