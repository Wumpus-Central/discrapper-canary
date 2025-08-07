t.d(n, { Z: () => u });
var i = t(255367);
t(73800);
var l = t(481060),
    r = t(493683),
    a = t(592125),
    o = t(388032);
function u(e, n) {
    let t = a.Z.getChannel(e);
    return null == t || t.isMultiUserDM()
        ? null
        : (0, i.jsx)(l.sNh, {
              id: "close-dm",
              label: o.intl.string(o.t.jsvgc3),
              action: () => r.Z.closePrivateChannel(e, n),
          });
}
