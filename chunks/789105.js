"use strict";
n.d(t, { A: () => _ });
var i = n(439372),
    r = n(16236),
    a = n(5180);
function s(e) {
    let {
        channel: { id: t },
    } = e;
    (0, r.i_)(t, { trackAnalytics: !1 });
}
function l(e) {
    let { id: t } = e;
    (0, r._2)(!0, t);
}
function o(e) {
    let { id: t } = e;
    (0, r._2)(!1, t);
}
function d(e) {
    let { guildId: t } = e;
    (0, a.ai)(t) && (0, r._2)(!0);
}
function c(e) {
    let { guildId: t } = e;
    (0, a.ai)(t) && (0, r._2)(!1);
}
class u extends i.A {
    actions = {
        CHANNEL_DELETE: s,
        CATEGORY_COLLAPSE: l,
        CATEGORY_EXPAND: o,
        CATEGORY_COLLAPSE_ALL: d,
        CATEGORY_EXPAND_ALL: c,
    };
}
let _ = new u();
