n.d(t, { H: () => c });
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    s = n(378298),
    a = n(359119),
    d = n(832239),
    o = n(594174),
    u = n(388032);
function c(e) {
    let t = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
        n = (0, l.e7)([a.ZP], () => a.ZP.getChannelSafetyWarnings(e.id));
    return (null == t ? void 0 : t.isStaff()) !== !0 || null == n || 0 === n.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(r.sNh, {
                      id: 'delete-safety-warnings',
                      label: u.intl.string(u.t.g7o9bm),
                      action: () => (0, d.Vp)(e.id)
                  }),
                  (0, i.jsx)(r.sNh, {
                      id: 'clear-safety-warnings',
                      label: u.intl.string(u.t.VuSvGh),
                      action: () => (0, s.wS)(e.id)
                  })
              ]
          });
}
