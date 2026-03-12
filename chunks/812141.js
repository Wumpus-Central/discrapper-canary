"use strict";
n.d(t, { p: () => l });
var i = n(989349),
    s = n.n(i);
let l = (e) => {
    let t = e > 0 ? s()().add(e, "second").toISOString() : null;
    return { muted: !0, mute_config: { selected_time_window: e, end_time: t } };
};
