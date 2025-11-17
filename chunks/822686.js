n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(904245),
    a = n(367907),
    s = n(138201),
    o = n(592125),
    c = n(496675),
    d = n(981631),
    u = n(388032);
let m = (e) => {
    let { message: t, reportId: n } = e,
        [m, p] = i.useState(!1),
        g = i.useCallback(() => {
            p(!0),
                a.ZP.trackWithMetadata(d.rMx.IAR_DELETE_MESSAGE_BUTTON_CLICKED, { report_id: n }),
                l.Z.deleteMessage(t.getChannelId(), t.id);
        }, [t, n]),
        _ = i.useMemo(() => {
            let e = o.Z.getChannel(t.getChannelId());
            return (
                null != e &&
                e.type !== d.d4z.DM &&
                e.type !== d.d4z.GROUP_DM &&
                c.Z.canWithPartialContext(d.Plq.MANAGE_MESSAGES, { channelId: e.id })
            );
        }, [t]);
    return null != t && _
        ? (0, r.jsx)(s.JZ, {
              title: u.intl.string(u.t.c9BHL9),
              description: u.intl.string(u.t.dK8S0w),
              buttonText: m ? u.intl.string(u.t.f3pnLL) : u.intl.string(u.t.ch2xbt),
              buttonDisabled: m,
              buttonVariant: "critical-primary",
              onButtonPress: g,
          })
        : null;
};
