n.r(t), n.d(t, { default: () => d }), n(388685), n(457542);
var r = n(951288),
    a = n(647438),
    i = n(493773),
    l = n(989373),
    o = n(522474),
    c = n(238246),
    u = n(51144),
    s = n(922588);
function d(e) {
    let { windowKey: t, channelId: n, guildId: d } = e,
        _ = a.useRef(null),
        [m, f] = a.useState(!1);
    return ((0, i.ZP)(() => {
        let e = o.Z.getWindow(t);
        null != e &&
            (0, l.waitForCSSLoad)(e, _).finally(() => {
                f(!0);
            });
    }),
    (0, i.zq)(() => {
        clearInterval(_.current);
    }),
    m && (0, u.vP)())
        ? (0, r.jsx)(c.Z, {
              withTitleBar: !0,
              windowKey: t,
              title: "Shuffle Names",
              children: (0, r.jsx)(s.Z, {
                  channelId: n,
                  guildId: d,
              }),
          })
        : null;
}
