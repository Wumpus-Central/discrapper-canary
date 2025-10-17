n.d(t, {
    Z: () => C,
    b: () => y,
}),
    n(388685);
var a = n(951288),
    r = n(647438),
    i = n(442837),
    l = n(704215),
    o = n(907862),
    s = n(243778),
    c = n(246133),
    d = n(695346),
    u = n(819640),
    m = n(885110),
    p = n(70956),
    h = n(809930),
    x = n(921944),
    f = n(231338),
    g = n(388032),
    b = n(668073);
let v = p.Z.Millis.HOUR,
    j = p.Z.Millis.DAY,
    _ = 4 * p.Z.Millis.DAY;
function y() {
    let [e, t] = r.useState(Date.now()),
        n = (0, i.e7)([u.Z], () => u.Z.hasLayers()),
        a = (0, i.e7)([m.Z], () => m.Z.getStatus()),
        o = d.P4.useSetting(),
        c = (null == o ? void 0 : o.value) != null ? Number(o.value) : null,
        p = d.Cr.useSetting(),
        g = a === f.Sk.DND && null != c && e - c > j && "0" === p,
        { enabled: b } = (0, h.a)({
            location: "useDoNotDisturbReminderPopoverDismissibleContent",
            autoTrackExposure: g,
            disable: !g,
        });
    return (
        r.useEffect(() => {
            if (a === f.Sk.DND) {
                t(Date.now());
                let e = setInterval(() => t(Date.now()), v);
                return () => clearInterval(e);
            }
        }, [a]),
        (0, s.bf)(
            b && !n ? l.z.DO_NOT_DISTURB_REMINDER_POPOVER : null,
            {
                cooldownDurationMs: _,
                numTimesToRecur: 2,
            },
            x.R.ACCOUNT_NAME_ZONE,
            !0,
        )
    );
}
function C(e) {
    let { targetElementRef: t, onDismiss: n, children: r } = e,
        {
            enabled: i,
            titleText: l,
            bodyText: s,
        } = (0, h.a)({
            location: "popover",
            autoTrackExposure: !1,
        });
    return null != t.current && i
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  r,
                  (0, a.jsx)(o.J2, {
                      targetElementRef: t,
                      title: g.intl.string(l),
                      body: g.intl.string(s),
                      caretConfig: { align: "start" },
                      gradientColor: "purple",
                      actions: [
                          {
                              text: g.intl.string(g.t.fwPura),
                              onClick: () => {
                                  (0, c.Z)({ nextStatus: f.Sk.ONLINE }), null == n || n(x.L.PRIMARY);
                              },
                          },
                      ],
                      graphic: {
                          type: "image",
                          src: b,
                      },
                      onRequestClose: () => (null == n ? void 0 : n(x.L.DISMISS)),
                  }),
              ],
          })
        : r;
}
