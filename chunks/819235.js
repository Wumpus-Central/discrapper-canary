"use strict";
n.d(t, { A: () => F });
var i = n(735438),
    r = n(306264),
    s = n(228366),
    a = n(439372),
    o = n(366853),
    l = n(30370),
    d = n(885576),
    _ = n(531685),
    u = n(927813),
    c = n(99066),
    E = n(86070),
    h = n(435738),
    m = n(99753),
    f = n(424994),
    g = n(652215);
let p = 2 * u.A.Millis.MINUTE,
    A = f.X1.GLOBAL_FEED,
    I = 15 * u.A.Millis.MINUTE,
    T = new Map(),
    S = new Set(),
    N = new Map(),
    C = null,
    R = (0, i.debounce)(E.Q1, 3e3, { trailing: !0 });
function O() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return Math.random() * (e + 1) * p;
}
function y(e, t) {
    s.h.dispatch({ type: "CONTENT_INVENTORY_SET_FEED_STATE", feedId: e, state: t });
}
function v(e) {
    if (S.has(e) || (e === f.X1.GAME_PROFILE_FEED && void 0 !== m.A.getFeed(e))) return !1;
    if (e === A) {
        if (
            !(0, c.VS)("ContentInventoryManager") ||
            (h.A.hidden && null != m.A.getFeed(e)) ||
            !_.A.isFocused() ||
            !o.A.isConnected()
        )
            return !1;
        let t = d.A.getIdleSince();
        if (null != t && Date.now() - t > I) return !1;
    }
    return !0;
}
function D(e) {
    y(e, { loading: !1 });
    let t = T.get(e);
    void 0 !== t && (clearTimeout(t), T.delete(e));
}
function L() {
    let e = N.get(A) ?? 0;
    if ((e > 0 && e <= 4) || (D(A), !v(A))) return;
    let t = m.A.getFeed(A);
    if (t?.refresh_stale_inbox_after_ms != null && null == C) return;
    let n = t?.expired_at == null ? 0 : new Date(t.expired_at).getTime() - Date.now(),
        i = Math.max(0, null == C ? 0 : new Date(C).getTime() - Date.now(), n) + (e > 0 ? O() : 0);
    y(A, { loading: !1, nextFetchDate: new Date(Date.now() + i) }),
        T.set(
            A,
            setTimeout(() => b({ feedId: A, feature: r.M.INBOX }), i),
        );
}
async function b(e) {
    let { feedId: t, feature: n, force: i = !1 } = e;
    if (v(t) || i)
        try {
            let e = m.A.getFeed(t);
            S.add(t), y(t, { loading: !0 });
            let i = await (0, E.sy)({ token: e?.refresh_token, feedId: t, feature: n });
            s.h.dispatch({ type: "CONTENT_INVENTORY_SET_FEED", feedId: t, feed: i }),
                N.set(t, 0),
                S.delete(t),
                y(t, { loading: !1 }),
                t === A && ((C = null), L());
        } catch (r) {
            let e = N.get(t) ?? 0;
            if (e < 4) {
                let r = u.A.Millis.MINUTE * Math.pow(2, e),
                    s = O(e);
                T.set(
                    t,
                    setTimeout(() => b({ feedId: t, feature: n, force: i }), r + s),
                ),
                    N.set(t, e + 1);
            } else s.h.dispatch({ type: "CONTENT_INVENTORY_CLEAR_FEED", feedId: t });
            S.delete(t);
        }
}
function w() {
    L();
}
function P() {
    w();
}
function k() {
    D(A);
}
function M(e) {
    let { feedId: t, feature: n } = e;
    D(t), b({ feedId: t, feature: n, force: !0 });
}
function U(e) {
    let { refreshAfterMs: t } = e,
        n = m.A.getFeed(A);
    n?.refresh_stale_inbox_after_ms == null ||
        ((C = new Date(Date.now() + (t ?? n.refresh_stale_inbox_after_ms)).toUTCString()), L());
}
function x(e) {
    let { connectionId: t, track: n } = e;
    null == t || (l.A.getAccount(t, g.fg2.SPOTIFY)?.showActivity && R(t, n));
}
function G() {
    b({ feedId: f.X1.GLOBAL_FEED, feature: r.M.GAME_PROFILE });
}
class V extends a.A {
    actions = {
        POST_CONNECTION_OPEN: P,
        CONNECTION_CLOSED: k,
        WINDOW_FOCUS: w,
        IDLE: w,
        CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: w,
        CONTENT_INVENTORY_MANUAL_REFRESH: M,
        CONTENT_INVENTORY_INBOX_STALE: U,
        SPOTIFY_NEW_TRACK: x,
        GAME_PROFILE_OPEN: G,
    };
}
let F = new V();
