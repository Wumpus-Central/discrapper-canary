n.d(t, {
    Z: () => C,
    b: () => y,
}),
    n(388685);
var a = n(951288),
    i = n(647438),
    r = n(442837),
    l = n(704215),
    s = n(907862),
    o = n(243778),
    c = n(246133),
    d = n(695346),
    u = n(819640),
    m = n(885110),
    p = n(70956),
    h = n(809930),
    x = n(921944),
    g = n(231338),
    f = n(388032),
    b = n(668073);
let v = p.Z.Millis.HOUR,
    j = p.Z.Millis.DAY,
    _ = 4 * p.Z.Millis.DAY;
function y() {
    let [e, t] = i.useState(Date.now()),
        n = (0, r.e7)([u.Z], () => u.Z.hasLayers()),
        a = (0, r.e7)([m.Z], () => m.Z.getStatus()),
        s = d.P4.useSetting(),
        c = (null == s ? void 0 : s.value) != null ? Number(s.value) : null,
        p = d.Cr.useSetting(),
        f = a === g.Sk.DND && null != c && e - c > j && "0" === p,
        { enabled: b } = (0, h.a)({
            location: "useDoNotDisturbReminderPopoverDismissibleContent",
            autoTrackExposure: f,
            disable: !f,
        });
    return (
        i.useEffect(() => {
            if (a === g.Sk.DND) {
                t(Date.now());
                let e = setInterval(() => t(Date.now()), v);
                return () => clearInterval(e);
            }
        }, [a]),
        (0, o.bf)(
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
    let { targetElementRef: t, onDismiss: n, children: i } = e,
        {
            enabled: r,
            titleText: l,
            bodyText: o,
        } = (0, h.a)({
            location: "popover",
            autoTrackExposure: !1,
        });
    return null != t.current && r
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  i,
                  (0, a.jsx)(s.J2, {
                      targetElementRef: t,
                      title: f.intl.string(l),
                      body: f.intl.string(o),
                      caretConfig: { align: "start" },
                      gradientColor: "purple",
                      actions: [
                          {
                              text: f.intl.string(f.t.fwPurU),
                              onClick: () => {
                                  (0, c.Z)({ nextStatus: g.Sk.ONLINE }), null == n || n(x.L.PRIMARY);
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
        : i;
}
