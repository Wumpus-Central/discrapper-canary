n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(904245),
    a = n(367907),
    o = n(138201),
    s = n(592125),
    c = n(496675),
    d = n(981631),
    u = n(388032);
let m = (e) => {
    let { message: t, reportId: n } = e,
        [m, _] = i.useState(!1),
        p = i.useCallback(() => {
            _(!0),
                a.ZP.trackWithMetadata(d.rMx.IAR_DELETE_MESSAGE_BUTTON_CLICKED, { report_id: n }),
                l.Z.deleteMessage(t.getChannelId(), t.id);
        }, [t, n]),
        f = i.useMemo(() => {
            let e = s.Z.getChannel(t.getChannelId());
            return (
                null != e &&
                e.type !== d.d4z.DM &&
                e.type !== d.d4z.GROUP_DM &&
                c.Z.canWithPartialContext(d.Plq.MANAGE_MESSAGES, { channelId: e.id })
            );
        }, [t]);
    return null != t && f
        ? (0, r.jsx)(o.JZ, {
              title: u.intl.string(u.t.c9BHLy),
              description: u.intl.string(u.t.dK8S09),
              buttonText: m ? u.intl.string(u.t.f3pnLC) : u.intl.string(u.t.ch2xbm),
              buttonDisabled: m,
              buttonVariant: "critical-primary",
              onButtonPress: p,
          })
        : null;
};
