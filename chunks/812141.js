"use strict";
n.d(t, { p: () => r });
var a = n(989349),
    i = n.n(a);
let r = (e) => {
    let t = e > 0 ? i()().add(e, "second").toISOString() : null;
    return { muted: !0, mute_config: { selected_time_window: e, end_time: t } };
};
