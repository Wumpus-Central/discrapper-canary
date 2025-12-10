t.d(n, { Z: () => d });
var i = t(54381);
t(473749);
var r = t(481060),
    l = t(493683),
    a = t(489618),
    s = t(592125),
    o = t(388032);
function d(e, n) {
    let { rearrangeContextMenu: t } = a.Z.useExperiment({ location: "useCloseDMItem" }),
        d = s.Z.getChannel(e);
    return null == d || d.isMultiUserDM()
        ? null
        : (0, i.jsx)(r.sNh, {
              id: "close-dm",
              label: o.intl.string(t ? o.t.oI64T4 : o.t.jsvgc3),
              subtext: t ? o.intl.string(o.t.JENR6J) : void 0,
              action: () => l.Z.closePrivateChannel(e, n),
          });
}
