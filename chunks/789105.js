"use strict";
n.d(t, { A: () => A });
var i = n(439372),
    r = n(16236),
    a = n(117600),
    s = n(5180);
function l(e) {
    let {
        channel: { id: t },
    } = e;
    (0, r.i_)(t, { trackAnalytics: !1 });
}
function o(e) {
    let { id: t } = e;
    (0, r._2)(!0, t);
}
function d(e) {
    let { id: t } = e;
    (0, r._2)(!1, t);
}
function c(e) {
    let { guildId: t } = e;
    (0, s.ai)(t) && (0, r._2)(!0);
}
function u(e) {
    let { guildId: t } = e;
    (0, s.ai)(t) && (0, r._2)(!1);
}
function _() {
    (0, a.CU)(a.E9);
}
class E extends i.A {
    actions = {
        CHANNEL_DELETE: l,
        CATEGORY_COLLAPSE: o,
        CATEGORY_EXPAND: d,
        CATEGORY_COLLAPSE_ALL: c,
        CATEGORY_EXPAND_ALL: u,
        LOGOUT: _,
    };
}
let A = new E();
