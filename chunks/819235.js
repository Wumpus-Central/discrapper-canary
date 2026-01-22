n.d(t, {
    A: () => H,
}),
    n(896048);
var r = n(735438),
    i = n(306264),
    a = n(73153),
    s = n(439372),
    o = n(658160),
    l = n(142120),
    c = n(962173),
    u = n(885576),
    d = n(531685),
    f = n(927813),
    p = n(99066),
    _ = n(86070),
    h = n(435738),
    m = n(99753),
    g = n(424994),
    E = n(652215);

function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let y = 4,
    O = 2 * f.A.Millis.MINUTE,
    A = g.X1.GLOBAL_FEED,
    v = 15 * f.A.Millis.MINUTE,
    S = new Map(),
    I = new Set(),
    T = new Map(),
    C = null,
    N = (0, r.debounce)(_.Q1, 3e3, {
        trailing: !0,
    });

function R() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
    return Math.random() * (e + 1) * O;
}

function w(e, t) {
    a.h.dispatch({
        type: "CONTENT_INVENTORY_SET_FEED_STATE",
        feedId: e,
        state: t,
    });
}

function P(e) {
    if (
        I.has(e) ||
        (e === g.X1.GAME_PROFILE_FEED && (!(0, o.L0)("ContentInventoryManager") || void 0 !== m.A.getFeed(e)))
    )
        return !1;
    if (e === A) {
        if (
            !(0, p.VS)("ContentInventoryManager") ||
            (h.A.hidden && null != m.A.getFeed(e)) ||
            !d.A.isFocused() ||
            !l.A.isConnected()
        )
            return !1;
        let t = u.A.getIdleSince();
        if (null != t && Date.now() - t > v) return !1;
    }
    return !0;
}

function D(e) {
    w(e, {
        loading: !1,
    });
    let t = S.get(e);
    void 0 !== t && (clearTimeout(t), S.delete(e));
}

function x() {
    var e;
    let t = null != (e = T.get(A)) ? e : 0;
    if ((t > 0 && t <= y) || (D(A), !P(A))) return;
    let n = m.A.getFeed(A);
    if ((null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null && null == C) return;
    let r = (null == n ? void 0 : n.expired_at) == null ? 0 : new Date(n.expired_at).getTime() - Date.now(),
        a = Math.max(0, null == C ? 0 : new Date(C).getTime() - Date.now(), r) + (t > 0 ? R() : 0);
    w(A, {
        loading: !1,
        nextFetchDate: new Date(Date.now() + a),
    }),
        S.set(
            A,
            setTimeout(
                () =>
                    L({
                        feedId: A,
                        feature: i.M.INBOX,
                    }),
                a,
            ),
        );
}
async function L(e) {
    let { feedId: t, feature: n, force: r = !1 } = e;
    if (P(t) || r)
        try {
            let e = m.A.getFeed(t);
            I.add(t),
                w(t, {
                    loading: !0,
                });
            let r = await (0, _.sy)({
                token: null == e ? void 0 : e.refresh_token,
                feedId: t,
                feature: n,
            });
            a.h.dispatch({
                type: "CONTENT_INVENTORY_SET_FEED",
                feedId: t,
                feed: r,
            }),
                T.set(t, 0),
                I.delete(t),
                w(t, {
                    loading: !1,
                }),
                t === A && ((C = null), x());
        } catch (s) {
            var i;
            let e = null != (i = T.get(t)) ? i : 0;
            if (e < y) {
                let i = f.A.Millis.MINUTE * Math.pow(2, e) + R(e);
                S.set(
                    t,
                    setTimeout(
                        () =>
                            L({
                                feedId: t,
                                feature: n,
                                force: r,
                            }),
                        i,
                    ),
                ),
                    T.set(t, e + 1);
            } else
                a.h.dispatch({
                    type: "CONTENT_INVENTORY_CLEAR_FEED",
                    feedId: t,
                });
            I.delete(t);
        }
}

function j() {
    x();
}

function M() {
    j();
}

function k() {
    D(A);
}

function U(e) {
    let { feedId: t, feature: n } = e;
    D(t),
        L({
            feedId: t,
            feature: n,
            force: !0,
        });
}

function G(e) {
    let { refreshAfterMs: t } = e,
        n = m.A.getFeed(A);
    (null == n ? void 0 : n.refresh_stale_inbox_after_ms) == null ||
        ((C = new Date(Date.now() + (null != t ? t : n.refresh_stale_inbox_after_ms)).toUTCString()), x());
}

function V(e) {
    var t;
    let { connectionId: n, track: r } = e;
    null == n || ((null == (t = c.A.getAccount(n, E.fg2.SPOTIFY)) ? void 0 : t.showActivity) && N(n, r));
}

function F() {
    L({
        feedId: g.X1.GLOBAL_FEED,
        feature: i.M.GAME_PROFILE,
    });
}
class B extends s.A {
    constructor(...e) {
        super(...e),
            b(this, "actions", {
                POST_CONNECTION_OPEN: M,
                CONNECTION_CLOSED: k,
                WINDOW_FOCUS: j,
                IDLE: j,
                CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: j,
                CONTENT_INVENTORY_MANUAL_REFRESH: U,
                CONTENT_INVENTORY_INBOX_STALE: G,
                SPOTIFY_NEW_TRACK: V,
                GAME_PROFILE_OPEN: F,
            });
    }
}
let H = new B();
