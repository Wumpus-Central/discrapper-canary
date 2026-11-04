l.d(n, { dM: () => A, Ug: () => _, FD: () => f, lF: () => m, um: () => g, lv: () => E });
var t = l(620632),
    i = l(73153),
    a = l(210470);
let r = Object.freeze({ DISCOVERABLE_CONTENT: (e) => `/guilds/${e}/discoverable-content` });
var u = l(131904),
    s = l(22464);
function d(e) {
    return { channelId: e.channel_id, eligible: e.eligible, included: e.included };
}
function c(e) {
    return { enabled: e.enabled, channels: e.channels.map(d) };
}
function o(e) {
    return { [s.y.CHANNEL_SUMMARIES]: c(e[s.y.CHANNEL_SUMMARIES]), [s.y.CHANNEL_MESSAGES]: c(e[s.y.CHANNEL_MESSAGES]) };
}
let h = new Set();
async function f(e) {
    if (!(null != u.A.getFeatures(e) || u.A.fetchFailed(e)) && !h.has(e)) {
        h.add(e);
        try {
            let n = await t.Bo.get({ url: r.DISCOVERABLE_CONTENT(e), rejectWithError: !0 }),
                l = o(n.body);
            i.h.dispatch({ type: "PINOT_FETCH_SUCCESS", guildId: e, features: l });
        } catch {
            i.h.dispatch({ type: "PINOT_FETCH_FAILURE", guildId: e });
        } finally {
            h.delete(e);
        }
    }
}
async function g(e) {
    let n = u.A.getFeatures(e);
    if (null == n || u.A.isSaving()) return;
    let l = {};
    for (let t of s.P) {
        let i = u.A.getDraft(e, t);
        if (null == i) continue;
        let r = (0, a.Pg)(n[t], i);
        Object.keys(r).length > 0 && (l[t] = r);
    }
    if (0 !== Object.keys(l).length) {
        i.h.dispatch({ type: "PINOT_SAVE_START", guildId: e });
        try {
            let n = await t.Bo.patch({ url: r.DISCOVERABLE_CONTENT(e), body: l, rejectWithError: !0 });
            i.h.dispatch({ type: "PINOT_SAVE_SUCCESS", guildId: e, features: o(n.body) });
        } catch {
            i.h.dispatch({ type: "PINOT_SAVE_FAILURE", guildId: e });
        }
    }
}
function E(e, n, l) {
    i.h.dispatch({ type: "PINOT_DRAFT_UPDATE", guildId: e, featureKey: n, draft: l });
}
function m(e) {
    i.h.dispatch({ type: "PINOT_OPEN_FEATURE", featureKey: e });
}
function A(e) {
    i.h.dispatch({ type: "PINOT_ADMIN_NOTICE_ACK", guildId: e });
}
function _(e) {
    i.h.dispatch({ type: "PINOT_ADMIN_NOTICE_HIDE", guildId: e });
}
