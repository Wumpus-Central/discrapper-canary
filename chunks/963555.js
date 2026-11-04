var r = n(855986),
    i = n(349435);
n.d(
    t,
    {},
    {
        F: function (e, t) {
            return (0, r.bG)([i.Ay], () => i.Ay.getChannelSafetyWarnings(e), [e])
                .filter((e) => e.type === t)
                .find((e) => null == e.dismiss_timestamp && (e?.expiry == null || Date.parse(e.expiry) > Date.now()));
        },
    },
);
