e.d(n, { H: () => c });
var i = e(951288);
e(647438);
var r = e(442837),
    l = e(481060),
    s = e(378298),
    a = e(359119),
    d = e(832239),
    u = e(594174),
    o = e(388032);
function c(t) {
    let n = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
        e = (0, r.e7)([a.ZP], () => a.ZP.getChannelSafetyWarnings(t.id));
    return (null == n ? void 0 : n.isStaff()) !== !0 || null == e || 0 === e.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(l.sNh, {
                      id: "delete-safety-warnings",
                      label: o.intl.string(o.t.g7o9bm),
                      action: () => (0, d.Vp)(t.id),
                  }),
                  (0, i.jsx)(l.sNh, {
                      id: "clear-safety-warnings",
                      label: o.intl.string(o.t.VuSvGh),
                      action: () => (0, s.wS)(t.id),
                  }),
              ],
          });
}
