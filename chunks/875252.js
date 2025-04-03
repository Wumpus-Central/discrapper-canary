t.d(e, { H: () => c });
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    d = t(378298),
    s = t(359119),
    a = t(832239),
    u = t(594174),
    o = t(388032);
function c(n) {
    let e = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
        t = (0, l.e7)([s.ZP], () => s.ZP.getChannelSafetyWarnings(n.id));
    return (null == e ? void 0 : e.isStaff()) !== !0 || null == t || 0 === t.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(r.sNh, {
                      id: 'delete-safety-warnings',
                      label: o.NW.string(o.t.g7o9bm),
                      action: () => (0, a.Vp)(n.id)
                  }),
                  (0, i.jsx)(r.sNh, {
                      id: 'clear-safety-warnings',
                      label: o.NW.string(o.t.VuSvGh),
                      action: () => (0, d.wS)(n.id)
                  })
              ]
          });
}
