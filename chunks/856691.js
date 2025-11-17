n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(692547),
    l = n(481060),
    a = n(168107),
    s = n(480916),
    o = n(728285),
    c = n(881824),
    d = n(430104),
    u = n(688641),
    p = n(388032);
function h(e) {
    let { className: t, channel: n, highlight: h } = e,
        f = (0, o.bp)();
    return (0, d.sP)()
        ? null
        : (0, r.jsx)(u.Z, {
              highlight: null != h && h,
              className: t,
              icon: (0, r.jsx)(l.ewx, {
                  size: "custom",
                  color: "currentColor",
                  height: 20,
                  width: 20,
              }),
              color: i.Z.unsafe_rawColors.GREEN_360.css,
              title: p.intl.string(p.t.OYbHfv),
              description: p.intl.string(p.t.yXwLMQ),
              onClick: function () {
                  if ((0, d.u1)())
                      return void a.Z.showAgeVerificationGetStartedModal({ entryPoint: s.cU.START_STAGE_PROMPT });
                  (0, c.T)(n, f);
              },
          });
}
