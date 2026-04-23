"use strict";
n.d(t, { Nu: () => c, O9: () => l, iq: () => d, oG: () => u });
var r = n(73153),
    i = n(961350),
    s = n(3137),
    a = n(559908),
    o = n(862570);
function l(e) {
    r.h.dispatch({ type: "POGGERMODE_SETTINGS_UPDATE", settings: e });
    let t = { ...s.A.getState(), ...e };
    (0, o.A)(t);
}
function u(e) {
    r.h.dispatch({ type: "POGGERMODE_UPDATE_COMBO", ...e });
}
function c(e) {
    r.h.dispatch({ type: "POGGERMODE_UPDATE_MESSAGE_COMBO", comboMessage: { ...e, displayed: !0 } });
}
function d(e, t) {
    let n = i.default.getId(),
        s = a.Ay.getUserCombo(n, e);
    null != s &&
        r.h.dispatch({
            type: "POGGERMODE_UPDATE_MESSAGE_COMBO",
            comboMessage: { combo: s, channelId: e, messageId: t, displayed: !1 },
        });
    let o = null != s && s?.value > 0 ? (s?.multiplier ?? 0) + 1 : 1;
    r.h.dispatch({ type: "POGGERMODE_UPDATE_COMBO", channelId: e, userId: n, multiplier: o, value: 0 });
}
