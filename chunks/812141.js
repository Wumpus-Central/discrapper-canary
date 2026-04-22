"use strict";
n.d(t, { p: () => a });
var i = n(989349),
    r = n.n(i);
let a = (e) => {
    let t = e > 0 ? r()().add(e, "second").toISOString() : null;
    return { muted: !0, mute_config: { selected_time_window: e, end_time: t } };
};
