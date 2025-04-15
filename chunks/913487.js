var i = n(570140),
    r = n(703656),
    s = n(981631);
__OVERLAY__ &&
    i.Z.subscribe('OVERLAY_OPEN_MESSAGE', function (e) {
        let { guildId: t, channelId: n, messageId: i } = e;
        (0, r.dL)({ pathname: s.Z5c.CHANNEL(t, n, i) });
    });
