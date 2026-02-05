"use strict";
n.d(t, { A: () => j });
var r = n(735438),
    i = n(306264),
    a = n(73153),
    s = n(439372),
    o = n(658160),
    l = n(142120),
    u = n(962173),
    c = n(885576),
    d = n(531685),
    _ = n(927813),
    f = n(99066),
    p = n(86070),
    h = n(435738),
    m = n(99753),
    g = n(424994),
    E = n(652215);
let A = 4,
    I = 2 * _.A.Millis.MINUTE,
    T = g.X1.GLOBAL_FEED,
    y = 15 * _.A.Millis.MINUTE,
    S = new Map(),
    v = new Set(),
    C = new Map(),
    b = null,
    N = (0, r.debounce)(p.Q1, 3e3, { trailing: !0 });
function R() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return Math.random() * (e + 1) * I;
}
function O(e, t) {
    a.h.dispatch({ type: "CONTENT_INVENTORY_SET_FEED_STATE", feedId: e, state: t });
}
function D(e) {
    if (
        v.has(e) ||
        (e === g.X1.GAME_PROFILE_FEED && (!(0, o.L0)("ContentInventoryManager") || void 0 !== m.A.getFeed(e)))
    )
        return !1;
    if (e === T) {
        if (
            !(0, f.VS)("ContentInventoryManager") ||
            (h.A.hidden && null != m.A.getFeed(e)) ||
            !d.A.isFocused() ||
            !l.A.isConnected()
        )
            return !1;
        let t = c.A.getIdleSince();
        if (null != t && Date.now() - t > y) return !1;
    }
    return !0;
}
function L(e) {
    O(e, { loading: !1 });
    let t = S.get(e);
    void 0 !== t && (clearTimeout(t), S.delete(e));
}
function w() {
    let e = C.get(T) ?? 0;
    if ((e > 0 && e <= A) || (L(T), !D(T))) return;
    let t = m.A.getFeed(T);
    if (t?.refresh_stale_inbox_after_ms != null && null == b) return;
    let n = t?.expired_at == null ? 0 : new Date(t.expired_at).getTime() - Date.now(),
        r = Math.max(0, null == b ? 0 : new Date(b).getTime() - Date.now(), n) + (e > 0 ? R() : 0);
    O(T, { loading: !1, nextFetchDate: new Date(Date.now() + r) }),
        S.set(
            T,
            setTimeout(() => x({ feedId: T, feature: i.M.INBOX }), r),
        );
}
async function x(e) {
    let { feedId: t, feature: n, force: r = !1 } = e;
    if (D(t) || r)
        try {
            let e = m.A.getFeed(t);
            v.add(t), O(t, { loading: !0 });
            let r = await (0, p.sy)({ token: e?.refresh_token, feedId: t, feature: n });
            a.h.dispatch({ type: "CONTENT_INVENTORY_SET_FEED", feedId: t, feed: r }),
                C.set(t, 0),
                v.delete(t),
                O(t, { loading: !1 }),
                t === T && ((b = null), w());
        } catch (i) {
            let e = C.get(t) ?? 0;
            if (e < A) {
                let i = _.A.Millis.MINUTE * Math.pow(2, e) + R(e);
                S.set(
                    t,
                    setTimeout(() => x({ feedId: t, feature: n, force: r }), i),
                ),
                    C.set(t, e + 1);
            } else a.h.dispatch({ type: "CONTENT_INVENTORY_CLEAR_FEED", feedId: t });
            v.delete(t);
        }
}
function P() {
    w();
}
function M() {
    P();
}
function k() {
    L(T);
}
function U(e) {
    let { feedId: t, feature: n } = e;
    L(t), x({ feedId: t, feature: n, force: !0 });
}
function G(e) {
    let { refreshAfterMs: t } = e,
        n = m.A.getFeed(T);
    n?.refresh_stale_inbox_after_ms == null ||
        ((b = new Date(Date.now() + (t ?? n.refresh_stale_inbox_after_ms)).toUTCString()), w());
}
function V(e) {
    let { connectionId: t, track: n } = e;
    null == t || (u.A.getAccount(t, E.fg2.SPOTIFY)?.showActivity && N(t, n));
}
function F() {
    x({ feedId: g.X1.GLOBAL_FEED, feature: i.M.GAME_PROFILE });
}
class B extends s.A {
    actions = {
        POST_CONNECTION_OPEN: M,
        CONNECTION_CLOSED: k,
        WINDOW_FOCUS: P,
        IDLE: P,
        CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: P,
        CONTENT_INVENTORY_MANUAL_REFRESH: U,
        CONTENT_INVENTORY_INBOX_STALE: G,
        SPOTIFY_NEW_TRACK: V,
        GAME_PROFILE_OPEN: F,
    };
}
let j = new B();
