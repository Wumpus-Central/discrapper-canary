n.d(t, {
    Z: () => _,
    b: () => C,
}),
    n(388685);
var a = n(54381),
    r = n(473749),
    l = n(442837),
    i = n(704215),
    s = n(907862),
    o = n(243778),
    c = n(246133),
    d = n(695346),
    u = n(819640),
    m = n(885110),
    p = n(70956),
    h = n(809930),
    f = n(921944),
    x = n(231338),
    b = n(388032),
    g = n(668073);
let v = p.Z.Millis.HOUR,
    j = p.Z.Millis.DAY,
    y = 4 * p.Z.Millis.DAY;
function C() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { shouldShow: t = !0 } = e,
        [n, a] = r.useState(Date.now()),
        s = (0, l.e7)([u.Z], () => u.Z.hasLayers()),
        c = (0, l.e7)([m.Z], () => m.Z.getStatus()),
        p = d.P4.useSetting(),
        b = (null == p ? void 0 : p.value) != null ? Number(p.value) : null,
        g = d.Cr.useSetting(),
        C = c === x.Sk.DND && null != b && n - b > j && "0" === g,
        { enabled: _ } = (0, h.a)({
            location: "useDoNotDisturbReminderPopoverDismissibleContent",
            autoTrackExposure: C,
            disable: !C,
        });
    return (
        r.useEffect(() => {
            if (c === x.Sk.DND) {
                a(Date.now());
                let e = setInterval(() => a(Date.now()), v);
                return () => clearInterval(e);
            }
        }, [c]),
        (0, o.bf)(
            _ && !s && t ? i.z.DO_NOT_DISTURB_REMINDER_POPOVER : null,
            {
                cooldownDurationMs: y,
                numTimesToRecur: 2,
            },
            f.R.ACCOUNT_NAME_ZONE,
            !0,
        )
    );
}
function _(e) {
    let { targetElementRef: t, onDismiss: n, children: r } = e,
        {
            enabled: l,
            titleText: i,
            bodyText: o,
        } = (0, h.a)({
            location: "popover",
            autoTrackExposure: !1,
        });
    return null != t.current && l
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  r,
                  (0, a.jsx)(s.J2, {
                      targetElementRef: t,
                      title: b.intl.string(i),
                      body: b.intl.string(o),
                      caretConfig: { align: "start" },
                      gradientColor: "purple",
                      actions: [
                          {
                              text: b.intl.string(b.t.fwPurU),
                              onClick: () => {
                                  (0, c.Z)({ nextStatus: x.Sk.ONLINE }), null == n || n(f.L.PRIMARY);
                              },
                          },
                      ],
                      graphic: {
                          type: "image",
                          src: g,
                      },
                      onRequestClose: () => (null == n ? void 0 : n(f.L.DISMISS)),
                  }),
              ],
          })
        : r;
}
