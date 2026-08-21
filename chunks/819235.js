"use strict";
n.d(t, { A: () => V });
var i = n(435558),
    r = n(306264),
    a = n(228366),
    s = n(439372),
    l = n(493560),
    o = n(30370),
    d = n(885576),
    c = n(531685),
    u = n(927813),
    _ = n(99066),
    E = n(86070),
    A = n(435738),
    h = n(99753),
    I = n(424994),
    f = n(652215);
let p = 2 * u.A.Millis.MINUTE,
    T = I.X1.GLOBAL_FEED,
    m = 15 * u.A.Millis.MINUTE,
    g = new Map(),
    S = new Set(),
    N = new Map(),
    C = null,
    O = (0, i.debounce)(E.Q1, 3e3, { trailing: !0 });
function R() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return Math.random() * (e + 1) * p;
}
function L(e, t) {
    a.h.dispatch({ type: "CONTENT_INVENTORY_SET_FEED_STATE", feedId: e, state: t });
}
function y(e) {
    if (S.has(e) || (e === I.X1.GAME_PROFILE_FEED && void 0 !== h.A.getFeed(e))) return !1;
    if (e === T) {
        if (
            !(0, _.VS)("ContentInventoryManager") ||
            (A.A.hidden && null != h.A.getFeed(e)) ||
            !c.A.isFocused() ||
            !l.A.isConnected()
        )
            return !1;
        let t = d.A.getIdleSince();
        if (null != t && Date.now() - t > m) return !1;
    }
    return !0;
}
function D(e) {
    L(e, { loading: !1 });
    let t = g.get(e);
    void 0 !== t && (clearTimeout(t), g.delete(e));
}
function v() {
    let e = N.get(T) ?? 0;
    if ((e > 0 && e <= 4) || (D(T), !y(T))) return;
    let t = h.A.getFeed(T);
    if (t?.refresh_stale_inbox_after_ms != null && null == C) return;
    let n = t?.expired_at == null ? 0 : new Date(t.expired_at).getTime() - Date.now(),
        i = Math.max(0, null == C ? 0 : new Date(C).getTime() - Date.now(), n) + (e > 0 ? R() : 0);
    L(T, { loading: !1, nextFetchDate: new Date(Date.now() + i) }),
        g.set(
            T,
            setTimeout(() => b({ feedId: T, feature: r.M.INBOX }), i),
        );
}
async function b(e) {
    let { feedId: t, feature: n, force: i = !1 } = e;
    if (y(t) || i)
        try {
            let e = h.A.getFeed(t);
            S.add(t), L(t, { loading: !0 });
            let i = await (0, E.sy)({ token: e?.refresh_token, feedId: t, feature: n });
            a.h.dispatch({ type: "CONTENT_INVENTORY_SET_FEED", feedId: t, feed: i }),
                N.set(t, 0),
                S.delete(t),
                L(t, { loading: !1 }),
                t === T && ((C = null), v());
        } catch (r) {
            let e = N.get(t) ?? 0;
            if (e < 4) {
                let r = u.A.Millis.MINUTE * Math.pow(2, e),
                    a = R(e);
                g.set(
                    t,
                    setTimeout(() => b({ feedId: t, feature: n, force: i }), r + a),
                ),
                    N.set(t, e + 1);
            } else a.h.dispatch({ type: "CONTENT_INVENTORY_CLEAR_FEED", feedId: t });
            S.delete(t);
        }
}
function M() {
    v();
}
function P() {
    M();
}
function U() {
    D(T);
}
function w(e) {
    let { feedId: t, feature: n } = e;
    D(t), b({ feedId: t, feature: n, force: !0 });
}
function G(e) {
    let { refreshAfterMs: t } = e,
        n = h.A.getFeed(T);
    n?.refresh_stale_inbox_after_ms == null ||
        ((C = new Date(Date.now() + (t ?? n.refresh_stale_inbox_after_ms)).toUTCString()), v());
}
function x(e) {
    let { connectionId: t, track: n } = e;
    null == t || (o.A.getAccount(t, f.fg2.SPOTIFY)?.showActivity && O(t, n));
}
function k() {
    b({ feedId: I.X1.GLOBAL_FEED, feature: r.M.GAME_PROFILE });
}
class F extends s.A {
    actions = {
        POST_CONNECTION_OPEN: P,
        CONNECTION_CLOSED: U,
        WINDOW_FOCUS: M,
        IDLE: M,
        CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: M,
        CONTENT_INVENTORY_MANUAL_REFRESH: w,
        CONTENT_INVENTORY_INBOX_STALE: G,
        SPOTIFY_NEW_TRACK: x,
        GAME_PROFILE_OPEN: k,
    };
}
let V = new F();
