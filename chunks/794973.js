t.d(n, { Z: () => s });
var i = t(54381);
t(473749);
var l = t(481060),
    r = t(493683),
    a = t(489618),
    o = t(592125),
    u = t(388032);
function s(e, n) {
    let { rearrangeContextMenu: t } = a.Z.useExperiment({ location: "useCloseDMItem" }),
        s = o.Z.getChannel(e);
    return null == s || s.isMultiUserDM()
        ? null
        : (0, i.jsx)(l.sNh, {
              id: "close-dm",
              label: u.intl.string(t ? u.t.oI64T4 : u.t.jsvgc3),
              subtext: t ? u.intl.string(u.t.JENR6J) : void 0,
              action: () => r.Z.closePrivateChannel(e, n),
          });
}
