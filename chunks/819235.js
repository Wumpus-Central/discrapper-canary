var i = n(435558),
    r = n(306264),
    a = n(73153),
    s = n(439372),
    l = n(225123),
    o = n(417869),
    d = n(885576),
    c = n(531685),
    u = n(927813),
    _ = n(99066),
    E = n(86070),
    A = n(435738),
    f = n(99753),
    h = n(424994),
    I = n(652215);
let p = 2 * u.A.Millis.MINUTE,
    m = h.X1.GLOBAL_FEED,
    T = 15 * u.A.Millis.MINUTE,
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
    if (S.has(e) || (e === h.X1.GAME_PROFILE_FEED && void 0 !== f.A.getFeed(e))) return !1;
    if (e === m) {
        if (
            !(0, _.VS)("ContentInventoryManager") ||
            (A.A.hidden && null != f.A.getFeed(e)) ||
            !c.A.isFocused() ||
            !l.A.isConnected()
        )
            return !1;
        let t = d.A.getIdleSince();
        if (null != t && Date.now() - t > T) return !1;
    }
    return !0;
}
function D(e) {
    L(e, { loading: !1 });
    let t = g.get(e);
    void 0 !== t && (clearTimeout(t), g.delete(e));
}
function b() {
    let e = N.get(m) ?? 0;
    if ((e > 0 && e <= 4) || (D(m), !y(m))) return;
    let t = f.A.getFeed(m);
    if (t?.refresh_stale_inbox_after_ms != null && null == C) return;
    let n = t?.expired_at == null ? 0 : new Date(t.expired_at).getTime() - Date.now(),
        i = Math.max(0, null == C ? 0 : new Date(C).getTime() - Date.now(), n) + (e > 0 ? R() : 0);
    (L(m, { loading: !1, nextFetchDate: new Date(Date.now() + i) }),
        g.set(
            m,
            setTimeout(() => v({ feedId: m, feature: r.M.INBOX }), i),
        ));
}
async function v(e) {
    let { feedId: t, feature: n, force: i = !1 } = e;
    if (y(t) || i)
        try {
            let e = f.A.getFeed(t);
            (S.add(t), L(t, { loading: !0 }));
            let i = await (0, E.sy)({ token: e?.refresh_token, feedId: t, feature: n });
            (a.h.dispatch({ type: "CONTENT_INVENTORY_SET_FEED", feedId: t, feed: i }),
                N.set(t, 0),
                S.delete(t),
                L(t, { loading: !1 }),
                t === m && ((C = null), b()));
        } catch (r) {
            let e = N.get(t) ?? 0;
            if (e < 4) {
                let r = u.A.Millis.MINUTE * Math.pow(2, e),
                    a = R(e);
                (g.set(
                    t,
                    setTimeout(() => v({ feedId: t, feature: n, force: i }), r + a),
                ),
                    N.set(t, e + 1));
            } else a.h.dispatch({ type: "CONTENT_INVENTORY_CLEAR_FEED", feedId: t });
            S.delete(t);
        }
}
function P() {
    b();
}
function M() {
    P();
}
function U() {
    D(m);
}
function w(e) {
    let { feedId: t, feature: n } = e;
    (D(t), v({ feedId: t, feature: n, force: !0 }));
}
function G(e) {
    let { refreshAfterMs: t } = e,
        n = f.A.getFeed(m);
    n?.refresh_stale_inbox_after_ms == null ||
        ((C = new Date(Date.now() + (t ?? n.refresh_stale_inbox_after_ms)).toUTCString()), b());
}
function x(e) {
    let { connectionId: t, track: n } = e;
    null == t || (o.A.getAccount(t, I.fg2.SPOTIFY)?.showActivity && O(t, n));
}
function k() {
    let e = f.A.getFeed(m);
    (null != e && new Date(e.expired_at).getTime() > Date.now()) || v({ feedId: m, feature: r.M.GAME_PROFILE });
}
class F extends s.A {
    actions = {
        POST_CONNECTION_OPEN: M,
        CONNECTION_CLOSED: U,
        WINDOW_FOCUS: P,
        IDLE: P,
        CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: P,
        CONTENT_INVENTORY_MANUAL_REFRESH: w,
        CONTENT_INVENTORY_INBOX_STALE: G,
        SPOTIFY_NEW_TRACK: x,
        GAME_PROFILE_OPEN: k,
    };
}
let B = new F();
n.d(t, {}, { A: B });
