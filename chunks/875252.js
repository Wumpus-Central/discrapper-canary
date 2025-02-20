n.d(t, { H: () => d });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(378298),
    o = n(359119),
    s = n(832239),
    c = n(594174),
    u = n(388032);
function d(e) {
    let t = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        n = (0, i.e7)([o.ZP], () => o.ZP.getChannelSafetyWarnings(e.id));
    return (null == t ? void 0 : t.isStaff()) !== !0 || null == n || 0 === n.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(l.sNh, {
                      id: 'delete-safety-warnings',
                      label: u.NW.string(u.t.g7o9bm),
                      action: () => (0, s.Vp)(e.id)
                  }),
                  (0, r.jsx)(l.sNh, {
                      id: 'clear-safety-warnings',
                      label: u.NW.string(u.t.VuSvGh),
                      action: () => (0, a.wS)(e.id)
                  })
              ]
          });
}
