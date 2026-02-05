"use strict";
n.d(t, { G: () => o, b: () => s });
var r = n(562465),
    i = n(73153),
    a = n(652215);
function s(e, t) {
    r.Bo.patch({ url: a.Rsh.GAME_NOTIFICATION_SETTING_UPDATE(e), body: { muted: t }, rejectWithError: !0 }).then(
        (e) => {
            let { body: t } = e;
            i.h.dispatch({ type: "REPLACE_GAME_MENTION_SETTINGS", settings: t });
        },
    );
}
async function o() {
    await r.Bo.get({ url: a.Rsh.GAME_NOTIFICATION_SETTINGS, rejectWithError: !0 }).then((e) => {
        let { body: t } = e;
        i.h.dispatch({ type: "REPLACE_GAME_MENTION_SETTINGS", settings: t });
    });
}
