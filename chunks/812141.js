n.d(e, { p: () => r });
var i = n(989349),
    l = n.n(i);
function r(t) {
    let e = t > 0 ? l()().add(t, "second").toISOString() : null;
    return { muted: !0, mute_config: { selected_time_window: t, end_time: e } };
}
