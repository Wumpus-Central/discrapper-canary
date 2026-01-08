n.d(t, { Z: () => s });
var i = n(54381);
n(473749);
var r = n(481060),
    l = n(493683),
    a = n(592125),
    o = n(388032);
function s(e, t) {
    let n = a.Z.getChannel(e);
    return null == n || n.isMultiUserDM()
        ? null
        : (0, i.jsx)(r.sNh, {
              id: "close-dm",
              label: o.intl.string(o.t.jsvgc3),
              action: () => l.Z.closePrivateChannel(e, t),
          });
}
