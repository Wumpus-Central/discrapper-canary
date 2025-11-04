n.r(t), n.d(t, { default: () => s }), n(388685), n(457542);
var r = n(951288),
    a = n(647438),
    i = n(493773),
    l = n(989373),
    o = n(522474),
    c = n(238246),
    u = n(922588);
function s(e) {
    let { windowKey: t, channelId: n, guildId: s } = e,
        d = a.useRef(null),
        [_, m] = a.useState(!1);
    return ((0, i.ZP)(() => {
        let e = o.Z.getWindow(t);
        null != e &&
            (0, l.waitForCSSLoad)(e, d).finally(() => {
                m(!0);
            });
    }),
    (0, i.zq)(() => {
        clearInterval(d.current);
    }),
    _)
        ? (0, r.jsx)(c.Z, {
              withTitleBar: !0,
              windowKey: t,
              title: "Shuffle Names",
              children: (0, r.jsx)(u.Z, {
                  channelId: n,
                  guildId: s,
              }),
          })
        : null;
}
