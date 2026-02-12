n.d(t, { A: () => T });
var i = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(311907),
    o = n(397927),
    c = n(966327),
    d = n(386467),
    u = n(449859),
    m = n(943220),
    _ = n(734057),
    p = n(572855),
    E = n(358731),
    A = n(597351),
    f = n(985018),
    S = n(70438);
let h = a.memo(function (e) {
    let { message: t } = e,
        n = (0, r.bG)([_.A], () => _.A.getChannel(t.channel_id));
    return null == n
        ? null
        : (0, i.jsx)(E.Ay, {
              children: (e) =>
                  (0, i.jsxs)(d.A.Provider, {
                      value: n.guild_id,
                      children: [
                          (0, i.jsx)(c.A, { user: t.author, size: o._3J.SIZE_40, className: l()(S.Du, e) }),
                          (0, i.jsxs)("div", {
                              className: l()(S.cy, e),
                              children: [
                                  (0, i.jsx)(o.M1G, {
                                      children: (0, i.jsx)("div", {
                                          className: S.mG,
                                          children: (0, i.jsx)(m.A, { className: S.fh, message: t, channel: n }),
                                      }),
                                  }),
                                  (0, i.jsx)(u.A, {
                                      timestamp: t.timestamp,
                                      className: S.vE,
                                      tooltipPosition: "bottom",
                                  }),
                              ],
                          }),
                      ],
                  }),
          });
});
function T(e) {
    let { item: t, hideMediaOptions: n, onClose: a } = e,
        s = t.sourceMetadata?.message;
    return (0, i.jsxs)("div", {
        className: S.XV,
        children: [
            null != s && (0, i.jsx)(h, { message: s }),
            (0, i.jsx)(p.A, { item: t, hideMediaOptions: n }),
            (0, i.jsx)(E.Ay, {
                mode: E.nY.PINNED,
                children: (e) =>
                    (0, i.jsx)(A.A, {
                        onClick: a,
                        icon: o.PGe,
                        tooltip: f.intl.string(f.t.cpT0Cq),
                        className: l()(S.b, e),
                    }),
            }),
        ],
    });
}
