n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
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
        a = null != (t = (0, d._d)(i)) ? t : 0,
        s = null != (n = (0, d.K3)(i)) ? n : 0;
    return a > 0 && s > 0
        ? (0, r.jsx)("div", {
              className: _.blocked,
              children: (0, r.jsx)("div", {
                  className: o()(_.blockedText, _.noIcon),
                  children: f.intl.string(f.t.xlJRfn),
              }),
          })
        : a > 0
          ? (0, r.jsx)("div", {
                className: _.blocked,
                children: (0, r.jsx)("div", {
                    className: o()(_.blockedText, _.noIcon),
                    children: f.intl.string(f.t.WYad9f),
                }),
            })
          : s > 0
            ? (0, r.jsx)("div", {
                  className: _.blocked,
                  children: (0, r.jsx)("div", {
                      className: o()(_.blockedText, _.noIcon),
                      children: f.intl.string(f.t.eHq2OD),
                  }),
              })
            : null;
}
function m() {
    let e = (0, u.Z)();
    return null == e
        ? null
        : (0, r.jsxs)(a.qXd, {
              className: _.container,
              color: a.DM8.DEFAULT,
              children: [
                  f.intl.string(f.t.Ul1RJS),
                  (0, r.jsx)(h, { channelId: e.id }),
                  (0, r.jsxs)(a.hE2, {
                      size: "sm",
                      className: _.buttonGroup,
                      children: [
                          (0, r.jsx)(a.zxk, {
                              variant: "overlay-primary",
                              text: f.intl.string(f.t.MpO0p6),
                              onClick: () => p(!1),
                          }),
                          (0, r.jsx)(a.zxk, {
                              variant: "secondary",
                              onClick: () => p(!0),
                              text: f.intl.string(f.t["1YDv7e"]),
                          }),
                      ],
                  }),
              ],
          });
}
