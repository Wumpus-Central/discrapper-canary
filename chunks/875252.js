e.d(t, { H: () => c });
var i = e(200651);
e(192379);
var l = e(442837),
    r = e(481060),
    d = e(378298),
    s = e(359119),
    a = e(832239),
    u = e(594174),
    o = e(388032);
function c(n) {
    let t = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
        e = (0, l.e7)([s.ZP], () => s.ZP.getChannelSafetyWarnings(n.id));
    return (null == t ? void 0 : t.isStaff()) !== !0 || null == e || 0 === e.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(r.sNh, {
                      id: 'delete-safety-warnings',
                      label: o.intl.string(o.t.g7o9bm),
                      action: () => (0, a.Vp)(n.id)
                  }),
                  (0, i.jsx)(r.sNh, {
                      id: 'clear-safety-warnings',
                      label: o.intl.string(o.t.VuSvGh),
                      action: () => (0, d.wS)(n.id)
                  })
              ]
          });
}
