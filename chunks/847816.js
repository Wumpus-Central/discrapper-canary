"use strict";
n.d(t, { A: () => T });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(311907),
    o = n(778712),
    c = n(247928),
    u = n(789645),
    d = n(966327),
    _ = n(386467),
    p = n(449859),
    m = n(943220),
    A = n(734057),
    h = n(572855),
    f = n(358731),
    g = n(597351),
    E = n(985018),
    I = n(897003);
let v = a.memo(function (e) {
    let { message: t } = e,
        n = (0, s.bG)([A.A], () => A.A.getChannel(t.channel_id));
    return null == n
        ? null
        : (0, i.jsx)(f.Ay, {
              children: (e) =>
                  (0, i.jsxs)(_.A.Provider, {
                      value: n.guild_id,
                      children: [
                          (0, i.jsx)(d.A, { user: t.author, size: o._3.SIZE_40, className: l()(I.Du, e) }),
                          (0, i.jsxs)("div", {
                              className: l()(I.cy, e),
                              children: [
                                  (0, i.jsx)(c.M, {
                                      children: (0, i.jsx)("div", {
                                          className: I.mG,
                                          children: (0, i.jsx)(m.A, { className: I.fh, message: t, channel: n }),
                                      }),
                                  }),
                                  (0, i.jsx)(p.A, {
                                      timestamp: t.timestamp,
                                      className: I.vE,
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
        r = t.sourceMetadata?.message;
    return (0, i.jsxs)("div", {
        className: I.XV,
        children: [
            null != r && (0, i.jsx)(v, { message: r }),
            (0, i.jsx)(h.A, { item: t, hideMediaOptions: n }),
            (0, i.jsx)(f.Ay, {
                mode: f.nY.PINNED,
                children: (e) =>
                    (0, i.jsx)(g.A, {
                        onClick: a,
                        icon: u.P,
                        tooltip: E.intl.string(E.t.cpT0Cq),
                        className: l()(I.b, e),
                    }),
            }),
        ],
    });
}
