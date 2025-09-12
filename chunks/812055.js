n.d(t, {
    Z: () => T,
    b: () => I,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(704215),
    s = n(907862),
    l = n(243778),
    c = n(246133),
    u = n(695346),
    d = n(819640),
    f = n(885110),
    _ = n(70956),
    p = n(809930),
    h = n(921944),
    m = n(231338),
    g = n(388032),
    E = n(668073);
let b = _.Z.Millis.HOUR,
    y = _.Z.Millis.DAY,
    O = 4 * _.Z.Millis.DAY,
    v = 2;
function I() {
    let [e, t] = i.useState(Date.now()),
        n = (0, a.e7)([d.Z], () => d.Z.hasLayers()),
        r = (0, a.e7)([f.Z], () => f.Z.getStatus()),
        s = u.P4.useSetting(),
        c = (null == s ? void 0 : s.value) != null ? Number(s.value) : null,
        _ = u.Cr.useSetting(),
        g = null != c && e - c > y,
        E = r === m.Sk.DND && g && "0" === _,
        { enabled: I } = (0, p.a)({
            location: "useDoNotDisturbReminderPopoverDismissibleContent",
            autoTrackExposure: E,
            disable: !E,
        }),
        T = I && !n;
    return (
        i.useEffect(() => {
            if (r === m.Sk.DND) {
                t(Date.now());
                let e = setInterval(() => t(Date.now()), b);
                return () => clearInterval(e);
            }
        }, [r]),
        (0, l.bf)(
            T ? o.z.DO_NOT_DISTURB_REMINDER_POPOVER : null,
            {
                cooldownDurationMs: O,
                numTimesToRecur: v,
            },
            h.R.ACCOUNT_NAME_ZONE,
            !0,
        )
    );
}
function T(e) {
    let { targetElementRef: t, onDismiss: n, children: i } = e,
        {
            enabled: a,
            titleText: o,
            bodyText: l,
        } = (0, p.a)({
            location: "popover",
            autoTrackExposure: !1,
        });
    return null != t.current && a
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  i,
                  (0, r.jsx)(s.J2, {
                      targetElementRef: t,
                      title: g.intl.string(o),
                      body: g.intl.string(l),
                      caretConfig: { align: "start" },
                      gradientColor: "purple",
                      actions: [
                          {
                              text: g.intl.string(g.t.fwPura),
                              onClick: () => {
                                  (0, c.Z)({ nextStatus: m.Sk.ONLINE }), null == n || n(h.L.PRIMARY);
                              },
                          },
                      ],
                      graphic: {
                          type: "image",
                          src: E,
                      },
                      onRequestClose: () => (null == n ? void 0 : n(h.L.DISMISS)),
                  }),
              ],
          })
        : i;
}
