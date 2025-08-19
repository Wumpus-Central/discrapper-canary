n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    a = n(647438),
    i = n(904245),
    o = n(367907),
    l = n(138201),
    s = n(592125),
    c = n(496675),
    d = n(981631),
    u = n(388032);
let _ = (e) => {
    let { message: t, reportId: n } = e,
        [_, m] = a.useState(!1),
        p = a.useCallback(() => {
            m(!0),
                o.ZP.trackWithMetadata(d.rMx.IAR_DELETE_MESSAGE_BUTTON_CLICKED, { report_id: n }),
                i.Z.deleteMessage(t.getChannelId(), t.id);
        }, [t, n]),
        g = a.useMemo(() => {
            let e = s.Z.getChannel(t.getChannelId());
            return (
                null != e &&
                e.type !== d.d4z.DM &&
                e.type !== d.d4z.GROUP_DM &&
                c.Z.canWithPartialContext(d.Plq.MANAGE_MESSAGES, { channelId: e.id })
            );
        }, [t]);
    return null != t && g
        ? (0, r.jsx)(l.JZ, {
              title: u.intl.string(u.t.c9BHLy),
              description: u.intl.string(u.t.dK8S09),
              buttonText: _ ? u.intl.string(u.t.f3pnLC) : u.intl.string(u.t.ch2xbm),
              buttonDisabled: _,
              buttonVariant: "critical-primary",
              onButtonPress: p,
          })
        : null;
};
