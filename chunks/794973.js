n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(493683),
    a = n(592125),
    o = n(388032);
function s(e, t) {
    let n = a.Z.getChannel(e);
    return null == n || n.isMultiUserDM()
        ? null
        : (0, r.jsx)(i.sNh, {
              id: 'close-dm',
              label: o.NW.string(o.t.jsvgc3),
              action: () => l.Z.closePrivateChannel(e, t)
          });
}
