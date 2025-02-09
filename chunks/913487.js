var i = n(570140),
    o = n(703656),
    r = n(981631);
__OVERLAY__ &&
    i.Z.subscribe('OVERLAY_OPEN_MESSAGE', function (e) {
        let { guildId: t, channelId: n, messageId: i } = e;
        (0, o.dL)({ pathname: r.Z5c.CHANNEL(t, n, i) });
    });
