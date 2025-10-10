t.d(n, { H: () => u });
var i = t(951288);
t(647438);
var r = t(442837),
    l = t(481060),
    a = t(378298),
    s = t(359119),
    o = t(832239),
    d = t(594174),
    c = t(388032);
function u(e) {
    let n = (0, r.e7)([d.default], () => d.default.getCurrentUser()),
        t = (0, r.e7)([s.ZP], () => s.ZP.getChannelSafetyWarnings(e.id));
    return (null == n ? void 0 : n.isStaff()) !== !0 || null == t || 0 === t.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(l.sNh, {
                      id: "delete-safety-warnings",
                      label: c.intl.string(c.t.g7o9bm),
                      action: () => (0, o.Vp)(e.id),
                  }),
                  (0, i.jsx)(l.sNh, {
                      id: "clear-safety-warnings",
                      label: c.intl.string(c.t.VuSvGh),
                      action: () => (0, a.wS)(e.id),
                  }),
              ],
          });
}
