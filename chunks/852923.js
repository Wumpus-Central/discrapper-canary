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
    _ = n(930180),
    p = n(430104),
    h = n(388032),
    m = n(250043);
function g(e) {
    if (!e && (0, p.u1)())
        return void s.Z.showAgeVerificationGetStartedModal({ entryPoint: l.cU.STAGE_CHANNEL_RAISE_HAND });
    let t = u.Z.getVoiceChannelId();
    if (null == t) return;
    let n = c.Z.getChannel(t);
    null != n && (0, d.RK)(n, e);
}
function E(e) {
    var t, n;
    let { channelId: i } = e,
        o = null != (t = (0, _._d)(i)) ? t : 0,
        s = null != (n = (0, _.K3)(i)) ? n : 0;
    return o > 0 && s > 0
        ? (0, r.jsx)("div", {
              className: m.blocked,
              children: (0, r.jsx)("div", {
                  className: a()(m.blockedText, m.noIcon),
                  children: h.intl.string(h.t.xlJRfv),
              }),
          })
        : o > 0
          ? (0, r.jsx)("div", {
                className: m.blocked,
                children: (0, r.jsx)("div", {
                    className: a()(m.blockedText, m.noIcon),
                    children: h.intl.string(h.t.WYad9Z),
                }),
            })
          : s > 0
            ? (0, r.jsx)("div", {
                  className: m.blocked,
                  children: (0, r.jsx)("div", {
                      className: a()(m.blockedText, m.noIcon),
                      children: h.intl.string(h.t.eHq2OF),
                  }),
              })
            : null;
}
function b() {
    let e = (0, f.Z)();
    return null == e
        ? null
        : (0, r.jsxs)(o.qXd, {
              className: m.container,
              color: o.DM8.DEFAULT,
              children: [
                  h.intl.string(h.t.Ul1RJQ),
                  (0, r.jsx)(E, { channelId: e.id }),
                  (0, r.jsxs)(o.ButtonGroup, {
                      size: "sm",
                      className: m.buttonGroup,
                      children: [
                          (0, r.jsx)(o.Button, {
                              variant: "overlay-primary",
                              text: h.intl.string(h.t.MpO0px),
                              onClick: () => g(!1),
                          }),
                          (0, r.jsx)(o.Button, {
                              variant: "secondary",
                              onClick: () => g(!0),
                              text: h.intl.string(h.t["1YDv7a"]),
                          }),
                      ],
                  }),
              ],
          });
}
