n.d(t, { Z: () => m }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(904245),
    a = n(367907),
    s = n(138201),
    o = n(592125),
    d = n(496675),
    c = n(981631),
    u = n(388032);
let m = (e) => {
    let { message: t, reportId: n } = e,
        [m, p] = l.useState(!1),
        g = l.useCallback(() => {
            p(!0),
                a.ZP.trackWithMetadata(c.rMx.IAR_DELETE_MESSAGE_BUTTON_CLICKED, { report_id: n }),
                i.Z.deleteMessage(t.getChannelId(), t.id);
        }, [t, n]),
        _ = l.useMemo(() => {
            let e = o.Z.getChannel(t.getChannelId());
            return (
                null != e &&
                e.type !== c.d4z.DM &&
                e.type !== c.d4z.GROUP_DM &&
                d.Z.canWithPartialContext(c.Plq.MANAGE_MESSAGES, { channelId: e.id })
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
