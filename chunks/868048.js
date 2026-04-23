n.d(t, { A: () => d });
var i = n(832712),
    l = n(543465),
    a = n(477427),
    s = n(393432),
    r = n(652215),
    o = n(790782),
    c = n(355097);
function d(e, t, n) {
    i.A.updateChannelOverrideSettings(
        e,
        t,
        { flags: (0, s.mD)(l.Ay.getChannelIdFlags(e, t), n) },
        a.G_.unreads(n === c.vv.UNREADS_ALL_MESSAGES ? o.e.ALL_MESSAGES : o.e.ONLY_MENTIONS),
        { object: r.ZSU.NOTIFICATION_SETTING_UNREAD_NOTICE },
    );
}
