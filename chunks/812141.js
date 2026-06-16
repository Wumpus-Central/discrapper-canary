i.d(e, { p: () => r });
var n = i(989349),
    l = i.n(n);
let r = (t) => {
    let e = t > 0 ? l()().add(t, "second").toISOString() : null;
    return { muted: !0, mute_config: { selected_time_window: t, end_time: e } };
};
