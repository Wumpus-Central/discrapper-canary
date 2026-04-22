"use strict";
n.d(t, { A: () => F });
var r = n(735438),
    i = n(306264),
    s = n(73153),
    a = n(439372),
    o = n(142120),
    l = n(962173),
    u = n(885576),
    d = n(531685),
    c = n(927813),
    _ = n(99066),
    f = n(86070),
    E = n(435738),
    h = n(99753),
    p = n(424994),
    m = n(652215);
let g = 2 * c.A.Millis.MINUTE,
    A = p.X1.GLOBAL_FEED,
    I = 15 * c.A.Millis.MINUTE,
    T = new Map(),
    S = new Set(),
    y = new Map(),
    N = null,
    O = (0, r.debounce)(f.Q1, 3e3, { trailing: !0 });
function R() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return Math.random() * (e + 1) * g;
}
function v(e, t) {
    s.h.dispatch({ type: "CONTENT_INVENTORY_SET_FEED_STATE", feedId: e, state: t });
}
function C(e) {
    if (S.has(e) || (e === p.X1.GAME_PROFILE_FEED && void 0 !== h.A.getFeed(e))) return !1;
    if (e === A) {
        if (
            !(0, _.VS)("ContentInventoryManager") ||
            (E.A.hidden && null != h.A.getFeed(e)) ||
            !d.A.isFocused() ||
            !o.A.isConnected()
        )
            return !1;
        let t = u.A.getIdleSince();
        if (null != t && Date.now() - t > I) return !1;
    }
    return !0;
}
function b(e) {
    v(e, { loading: !1 });
    let t = T.get(e);
    void 0 !== t && (clearTimeout(t), T.delete(e));
}
function D() {
    let e = y.get(A) ?? 0;
    if ((e > 0 && e <= 4) || (b(A), !C(A))) return;
    let t = h.A.getFeed(A);
    if (t?.refresh_stale_inbox_after_ms != null && null == N) return;
    let n = t?.expired_at == null ? 0 : new Date(t.expired_at).getTime() - Date.now(),
        r = Math.max(0, null == N ? 0 : new Date(N).getTime() - Date.now(), n) + (e > 0 ? R() : 0);
    v(A, { loading: !1, nextFetchDate: new Date(Date.now() + r) }),
        T.set(
            A,
            setTimeout(() => L({ feedId: A, feature: i.M.INBOX }), r),
        );
}
async function L(e) {
    let { feedId: t, feature: n, force: r = !1 } = e;
    if (C(t) || r)
        try {
            let e = h.A.getFeed(t);
            S.add(t), v(t, { loading: !0 });
            let r = await (0, f.sy)({ token: e?.refresh_token, feedId: t, feature: n });
            s.h.dispatch({ type: "CONTENT_INVENTORY_SET_FEED", feedId: t, feed: r }),
                y.set(t, 0),
                S.delete(t),
                v(t, { loading: !1 }),
                t === A && ((N = null), D());
        } catch (i) {
            let e = y.get(t) ?? 0;
            if (e < 4) {
                let i = c.A.Millis.MINUTE * Math.pow(2, e),
                    s = R(e);
                T.set(
                    t,
                    setTimeout(() => L({ feedId: t, feature: n, force: r }), i + s),
                ),
                    y.set(t, e + 1);
            } else s.h.dispatch({ type: "CONTENT_INVENTORY_CLEAR_FEED", feedId: t });
            S.delete(t);
        }
}
function w() {
    D();
}
function M() {
    w();
}
function P() {
    b(A);
}
function U(e) {
    let { feedId: t, feature: n } = e;
    b(t), L({ feedId: t, feature: n, force: !0 });
}
function k(e) {
    let { refreshAfterMs: t } = e,
        n = h.A.getFeed(A);
    n?.refresh_stale_inbox_after_ms == null ||
        ((N = new Date(Date.now() + (t ?? n.refresh_stale_inbox_after_ms)).toUTCString()), D());
}
function x(e) {
    let { connectionId: t, track: n } = e;
    null == t || (l.A.getAccount(t, m.fg2.SPOTIFY)?.showActivity && O(t, n));
}
function G() {
    L({ feedId: p.X1.GLOBAL_FEED, feature: i.M.GAME_PROFILE });
}
class V extends a.A {
    actions = {
        POST_CONNECTION_OPEN: M,
        CONNECTION_CLOSED: P,
        WINDOW_FOCUS: w,
        IDLE: w,
        CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: w,
        CONTENT_INVENTORY_MANUAL_REFRESH: U,
        CONTENT_INVENTORY_INBOX_STALE: k,
        SPOTIFY_NEW_TRACK: x,
        GAME_PROFILE_OPEN: G,
    };
}
let F = new V();
