n.d(t, { A: () => u });
var r = n(832712),
    l = n(543465),
    i = n(477427),
    a = n(393432),
    s = n(652215),
    o = n(790782),
    c = n(355097);
function u(e, t, n) {
    r.A.updateChannelOverrideSettings(
        e,
        t,
        { flags: (0, a.mD)(l.Ay.getChannelIdFlags(e, t), n) },
        i.G_.unreads(n === c.vv.UNREADS_ALL_MESSAGES ? o.e.ALL_MESSAGES : o.e.ONLY_MENTIONS),
        { object: s.ZSU.NOTIFICATION_SETTING_UNREAD_NOTICE },
    );
}
