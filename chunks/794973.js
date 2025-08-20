e.d(n, { Z: () => u });
var i = e(951288);
e(647438);
var r = e(481060),
    l = e(493683),
    s = e(489618),
    a = e(592125),
    d = e(388032);
function u(t, n) {
    let { rearrangeContextMenu: e } = s.Z.useExperiment({ location: "useCloseDMItem" }),
        u = a.Z.getChannel(t);
    return null == u || u.isMultiUserDM()
        ? null
        : (0, i.jsx)(r.sNh, {
              id: "close-dm",
              label: d.intl.string(e ? d.t.oI64T0 : d.t.jsvgc3),
              subtext: e ? d.intl.string(d.t.JENR6O) : void 0,
              action: () => l.Z.closePrivateChannel(t, n),
          });
}
