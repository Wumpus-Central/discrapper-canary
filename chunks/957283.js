var i = n(855986),
    r = n(940382),
    l = n(799704);
n.d(
    t,
    {},
    {
        N: function () {
            let e = (0, i.bG)([l.Ay], () => l.Ay.getSidebarState(l.fe)),
                t = e?.type === r.PE.VIEW_MESSAGE_REQUEST ? e : null;
            return {
                channelId: t?.channelId,
                hasSingleMessageRequest: t?.details != null && t.details.hasSingleMessageRequest,
            };
        },
    },
);
