n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(592125),
    l = n(944486),
    c = n(471253),
    u = n(623633),
    d = n(930180),
    f = n(388032),
    _ = n(250043);
function p(e) {
    let t = l.Z.getVoiceChannelId();
    if (null == t) return;
    let n = s.Z.getChannel(t);
    null != n && (0, c.RK)(n, e);
}
function h(e) {
    var t, n;
    let { channelId: i } = e,
        o = null != (t = (0, d._d)(i)) ? t : 0,
        s = null != (n = (0, d.K3)(i)) ? n : 0;
    return o > 0 && s > 0
        ? (0, r.jsx)("div", {
              className: _.blocked,
              children: (0, r.jsx)("div", {
                  className: a()(_.blockedText, _.noIcon),
                  children: f.intl.string(f.t.xlJRfn),
              }),
          })
        : o > 0
          ? (0, r.jsx)("div", {
                className: _.blocked,
                children: (0, r.jsx)("div", {
                    className: a()(_.blockedText, _.noIcon),
                    children: f.intl.string(f.t.WYad9f),
                }),
            })
          : s > 0
            ? (0, r.jsx)("div", {
                  className: _.blocked,
                  children: (0, r.jsx)("div", {
                      className: a()(_.blockedText, _.noIcon),
                      children: f.intl.string(f.t.eHq2OD),
                  }),
              })
            : null;
}
function m() {
    let e = (0, u.Z)();
    return null == e
        ? null
        : (0, r.jsxs)(o.qXd, {
              className: _.container,
              color: o.DM8.DEFAULT,
              children: [
                  f.intl.string(f.t.Ul1RJS),
                  (0, r.jsx)(h, { channelId: e.id }),
                  (0, r.jsxs)(o.hE2, {
                      size: "sm",
                      className: _.buttonGroup,
                      children: [
                          (0, r.jsx)(o.zxk, {
                              variant: "overlay-primary",
                              text: f.intl.string(f.t.MpO0p6),
                              onClick: () => p(!1),
                          }),
                          (0, r.jsx)(o.zxk, {
                              variant: "secondary",
                              onClick: () => p(!0),
                              text: f.intl.string(f.t["1YDv7e"]),
                          }),
                      ],
                  }),
              ],
          });
}
