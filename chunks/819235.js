"use strict";
n.d(t, { A: () => B });
var r = n(735438),
    i = n(306264),
    s = n(73153),
    a = n(439372),
    o = n(142120),
    l = n(962173),
    u = n(885576),
    c = n(531685),
    d = n(927813),
    _ = n(99066),
    f = n(86070),
    p = n(435738),
    h = n(99753),
    m = n(424994),
    E = n(652215);
let g = 4,
    A = 2 * d.A.Millis.MINUTE,
    I = m.X1.GLOBAL_FEED,
    T = 15 * d.A.Millis.MINUTE,
    S = new Map(),
    y = new Set(),
    v = new Map(),
    N = null,
    C = (0, r.debounce)(f.Q1, 3e3, { trailing: !0 });
function R() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return Math.random() * (e + 1) * A;
}
function O(e, t) {
    s.h.dispatch({ type: "CONTENT_INVENTORY_SET_FEED_STATE", feedId: e, state: t });
}
function b(e) {
    if (y.has(e) || (e === m.X1.GAME_PROFILE_FEED && void 0 !== h.A.getFeed(e))) return !1;
    if (e === I) {
        if (
            !(0, _.VS)("ContentInventoryManager") ||
            (p.A.hidden && null != h.A.getFeed(e)) ||
            !c.A.isFocused() ||
            !o.A.isConnected()
        )
            return !1;
        let t = u.A.getIdleSince();
        if (null != t && Date.now() - t > T) return !1;
    }
    return !0;
}
function D(e) {
    O(e, { loading: !1 });
    let t = S.get(e);
    void 0 !== t && (clearTimeout(t), S.delete(e));
}
function L() {
    let e = v.get(I) ?? 0;
    if ((e > 0 && e <= g) || (D(I), !b(I))) return;
    let t = h.A.getFeed(I);
    if (t?.refresh_stale_inbox_after_ms != null && null == N) return;
    let n = t?.expired_at == null ? 0 : new Date(t.expired_at).getTime() - Date.now(),
        r = Math.max(0, null == N ? 0 : new Date(N).getTime() - Date.now(), n) + (e > 0 ? R() : 0);
    O(I, { loading: !1, nextFetchDate: new Date(Date.now() + r) }),
        S.set(
            I,
            setTimeout(() => w({ feedId: I, feature: i.M.INBOX }), r),
        );
}
async function w(e) {
    let { feedId: t, feature: n, force: r = !1 } = e;
    if (b(t) || r)
        try {
            let e = h.A.getFeed(t);
            y.add(t), O(t, { loading: !0 });
            let r = await (0, f.sy)({ token: e?.refresh_token, feedId: t, feature: n });
            s.h.dispatch({ type: "CONTENT_INVENTORY_SET_FEED", feedId: t, feed: r }),
                v.set(t, 0),
                y.delete(t),
                O(t, { loading: !1 }),
                t === I && ((N = null), L());
        } catch (i) {
            let e = v.get(t) ?? 0;
            if (e < g) {
                let i = d.A.Millis.MINUTE * Math.pow(2, e) + R(e);
                S.set(
                    t,
                    setTimeout(() => w({ feedId: t, feature: n, force: r }), i),
                ),
                    v.set(t, e + 1);
            } else s.h.dispatch({ type: "CONTENT_INVENTORY_CLEAR_FEED", feedId: t });
            y.delete(t);
        }
}
function M() {
    L();
}
function x() {
    M();
}
function P() {
    D(I);
}
function k(e) {
    let { feedId: t, feature: n } = e;
    D(t), w({ feedId: t, feature: n, force: !0 });
}
function U(e) {
    let { refreshAfterMs: t } = e,
        n = h.A.getFeed(I);
    n?.refresh_stale_inbox_after_ms == null ||
        ((N = new Date(Date.now() + (t ?? n.refresh_stale_inbox_after_ms)).toUTCString()), L());
}
function G(e) {
    let { connectionId: t, track: n } = e;
    null == t || (l.A.getAccount(t, E.fg2.SPOTIFY)?.showActivity && C(t, n));
}
function F() {
    w({ feedId: m.X1.GLOBAL_FEED, feature: i.M.GAME_PROFILE });
}
class V extends a.A {
    actions = {
        POST_CONNECTION_OPEN: x,
        CONNECTION_CLOSED: P,
        WINDOW_FOCUS: M,
        IDLE: M,
        CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: M,
        CONTENT_INVENTORY_MANUAL_REFRESH: k,
        CONTENT_INVENTORY_INBOX_STALE: U,
        SPOTIFY_NEW_TRACK: G,
        GAME_PROFILE_OPEN: F,
    };
}
let B = new V();
