var i = n(536637),
    l = n.n(i);
n.d(
    e,
    {},
    {
        p: function (t) {
            let e = t > 0 ? l()().add(t, "second").toISOString() : null;
            return { muted: !0, mute_config: { selected_time_window: t, end_time: e } };
        },
    },
);
