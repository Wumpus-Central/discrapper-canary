n.d(t, { Z: () => b });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(168107),
    l = n(480916),
    c = n(592125),
    u = n(944486),
    d = n(471253),
    f = n(623633),
    p = n(930180),
    _ = n(430104),
    m = n(388032),
    h = n(486550);
function g(e) {
    if (!e && (0, _.u1)())
        return void s.Z.showAgeVerificationGetStartedModal({ entryPoint: l.cU.STAGE_CHANNEL_RAISE_HAND });
    let t = u.Z.getVoiceChannelId();
    if (null == t) return;
    let n = c.Z.getChannel(t);
    null != n && (0, d.RK)(n, e);
}
function E(e) {
    var t, n;
    let { channelId: i } = e,
        o = null != (t = (0, p._d)(i)) ? t : 0,
        s = null != (n = (0, p.K3)(i)) ? n : 0;
    return o > 0 && s > 0
        ? (0, r.jsx)("div", {
              className: h.blocked,
              children: (0, r.jsx)("div", {
                  className: a()(h.blockedText, h.noIcon),
                  children: m.intl.string(m.t.xlJRfv),
              }),
          })
        : o > 0
          ? (0, r.jsx)("div", {
                className: h.blocked,
                children: (0, r.jsx)("div", {
                    className: a()(h.blockedText, h.noIcon),
                    children: m.intl.string(m.t.WYad9Z),
                }),
            })
          : s > 0
            ? (0, r.jsx)("div", {
                  className: h.blocked,
                  children: (0, r.jsx)("div", {
                      className: a()(h.blockedText, h.noIcon),
                      children: m.intl.string(m.t.eHq2OF),
                  }),
              })
            : null;
}
function b() {
    let e = (0, f.Z)();
    return null == e
        ? null
        : (0, r.jsxs)(o.qXd, {
              className: h.container,
              color: o.DM8.DEFAULT,
              children: [
                  m.intl.string(m.t.Ul1RJQ),
                  (0, r.jsx)(E, { channelId: e.id }),
                  (0, r.jsxs)(o.ButtonGroup, {
                      size: "sm",
                      className: h.buttonGroup,
                      children: [
                          (0, r.jsx)(o.Button, {
                              variant: "overlay-primary",
                              text: m.intl.string(m.t.MpO0px),
                              onClick: () => g(!1),
                          }),
                          (0, r.jsx)(o.Button, {
                              variant: "secondary",
                              onClick: () => g(!0),
                              text: m.intl.string(m.t["1YDv7a"]),
                          }),
                      ],
                  }),
              ],
          });
}
