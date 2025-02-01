var i = n(570140),
    a = n(703656),
    o = n(981631);
__OVERLAY__ &&
    i.Z.subscribe('OVERLAY_OPEN_MESSAGE', function (e) {
        let { guildId: t, channelId: n, messageId: i } = e;
        (0, a.dL)({ pathname: o.Z5c.CHANNEL(t, n, i) });
    });
