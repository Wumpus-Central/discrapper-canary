n.d(t, { Z: () => O });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(592125),
    c = n(944486),
    s = n(471253),
    u = n(623633),
    d = n(930180),
    _ = n(388032),
    E = n(250043);
function I(e) {
    let t = c.Z.getVoiceChannelId();
    if (null == t) return;
    let n = o.Z.getChannel(t);
    null != n && (0, s.RK)(n, e);
}
function T(e) {
    var t, n;
    let { channelId: i } = e,
        a = null != (t = (0, d._d)(i)) ? t : 0,
        o = null != (n = (0, d.K3)(i)) ? n : 0;
    return a > 0 && o > 0
        ? (0, r.jsx)("div", {
              className: E.blocked,
              children: (0, r.jsx)("div", {
                  className: l()(E.blockedText, E.noIcon),
                  children: _.intl.string(_.t.xlJRfn),
              }),
          })
        : a > 0
          ? (0, r.jsx)("div", {
                className: E.blocked,
                children: (0, r.jsx)("div", {
                    className: l()(E.blockedText, E.noIcon),
                    children: _.intl.string(_.t.WYad9f),
                }),
            })
          : o > 0
            ? (0, r.jsx)("div", {
                  className: E.blocked,
                  children: (0, r.jsx)("div", {
                      className: l()(E.blockedText, E.noIcon),
                      children: _.intl.string(_.t.eHq2OD),
                  }),
              })
            : null;
}
function O() {
    let e = (0, u.Z)();
    return null == e
        ? null
        : (0, r.jsxs)(a.qXd, {
              className: E.container,
              color: a.DM8.DEFAULT,
              children: [
                  _.intl.string(_.t.Ul1RJS),
                  (0, r.jsx)(T, { channelId: e.id }),
                  (0, r.jsxs)(a.hE2, {
                      size: "sm",
                      className: E.buttonGroup,
                      children: [
                          (0, r.jsx)(a.zxk, {
                              variant: "overlay-primary",
                              text: _.intl.string(_.t.MpO0p6),
                              onClick: () => I(!1),
                          }),
                          (0, r.jsx)(a.zxk, {
                              variant: "secondary",
                              onClick: () => I(!0),
                              text: _.intl.string(_.t["1YDv7e"]),
                          }),
                      ],
                  }),
              ],
          });
}
