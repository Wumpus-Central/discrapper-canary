(n.d(t, { A: () => q }), n(134528), n(947204));
var i = n(574381),
    r = n(855986),
    a = n(73153),
    s = n(283047),
    l = n(340344),
    o = n(650048),
    d = n(309010),
    c = n(967198),
    u = n(287809);
function _(e, t) {
    return "route" === e.kind
        ? "route" === t.kind && e.routePath === t.routePath
        : "channel" === t.kind && e.channelId === t.channelId;
}
function E(e, t) {
    return e.pinned && !_(e, t);
}
var A = n(20517),
    f = n(858760),
    h = n(652215),
    I = n(746080);
function p() {
    return u.default.getCurrentUser()?.isStaff() === !0 ? 25 : 9;
}
let m = [],
    g = null,
    T = [],
    S = 1,
    N = null,
    C = !1,
    O = !1;
function R() {
    return O && f.A.getConfig({ location: "ChannelTabsStore" }).enabled && (0, i.xl)();
}
let L = [],
    y = new Set(),
    D = null,
    b = [],
    v = new s.A({ computeBonus: () => 100, lookupKey: (e) => e, afterCompute: () => {}, numFrequentlyItems: 10 });
function P() {
    let e = new Set(v.frequently);
    for (let t of Object.keys(v.usageHistory)) e.has(t) || delete v.usageHistory[t];
}
function M(e) {
    var t;
    return "route" === e.kind && e.routePath === h.BVt.FRIENDS
        ? (y.add(e.id), !1)
        : (y.delete(e.id),
          !("channel" !== e.kind || (0, I.jq)(e.channelId)) &&
              !!R() &&
              ((t = e.channelId), v.track(t), P(), (L = L.filter((e) => e.channelId !== t)), !0));
}
function U(e) {
    return (t) => {
        let n = !1 !== e(t),
            i = m.find((e) => e.id === g),
            r = null != i && y.has(i.id) && M(i);
        return n || r;
    };
}
function w(e) {
    T = [e, ...T.filter((t) => t !== e)].slice(0, p());
}
function G(e) {
    (null != g && g !== e && w(g), (g = e), w(e));
}
function x() {
    T = T.filter((e) => m.some((t) => t.id === e));
}
function k() {
    ((m = []), (g = null), (T = []));
}
function F(e) {
    m = m.map((t) => {
        if (t.id !== g) return t;
        let n = [...t.entries.slice(0, t.index + 1), e].slice(-50);
        return V(t, e, n, n.length - 1);
    });
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g,
        n = null != t ? (m.find((e) => e.id === t) ?? m.find((e) => e.id === g)) : void 0,
        i = null != n ? n.entries.slice(Math.max(0, n.index - 10), n.index + 1).map((e) => ({ ...e })) : [],
        r = i.at(-1),
        a = null != r && _(r, e) ? i : [...i, e].slice(-11);
    return { id: String(S++), ...e, pinned: !1, entries: a, index: a.length - 1 };
}
function V(e, t, n, i) {
    return { id: e.id, pinned: !0 === e.pinned, ...t, entries: n, index: i };
}
function H(e) {
    if (m.length >= p() && null != g) {
        ((N = g), (m = K(m.map((e) => (e.id === g ? { ...e, pinned: !1 } : e)))), F(e));
        return;
    }
    let t = B(e);
    ((m = [...m, t]), G(t.id));
}
function j(e) {
    let t = B(e);
    ((m = [t]), G(t.id));
}
function W() {
    let e = (0, A.rv)(window.location);
    if (null != e) return { kind: "route", ...e };
    let t = d.Ay.getCurrentlySelectedChannelId();
    return null == t || (0, I.jq)(t) ? null : { kind: "channel", channelId: t, guildId: c.A.getGuildId() ?? null };
}
function Y() {
    let e = W();
    return null != e && (j(e), !0);
}
function K(e) {
    return [...e.filter((e) => e.pinned), ...e.filter((e) => !e.pinned)];
}
function $(e) {
    let t = m.find((e) => e.id === g);
    if (null == t) return !1;
    let n = t.index + e,
        i = t.entries[n];
    if (null == i) return !1;
    m = m.map((e) => (e.id === g ? V(e, i, e.entries, n) : e));
}
function X(e) {
    let { channel: t } = e;
    if (!R()) return !1;
    function n(e) {
        return "channel" === e.kind && e.channelId === t.id;
    }
    if (0 === m.filter((e) => n(e) && e.id !== g).length) return !1;
    ((m = m.filter((e) => !n(e) || e.id === g)), x());
}
class z extends r.Ay.PersistedStore {
    static displayName = "ChannelTabsStore";
    static persistKey = "ChannelTabsStore";
    static migrations = [(e) => ({ tabs: [], activeTabId: null, enabled: e?.enabled ?? !1 })];
    initialize(e) {
        (this.waitFor(l.A, o.A, d.Ay, c.A, u.default),
            (O = e?.enabled ?? !1),
            (m = K(
                (e?.tabs ?? []).map((e) => {
                    var t = V(
                        e,
                        "route" === e.kind
                            ? { kind: "route", routePath: e.routePath, routeLabel: e.routeLabel }
                            : { kind: "channel", channelId: e.channelId, guildId: e.guildId },
                        e.entries,
                        e.index,
                    );
                    if (!Array.isArray(t.entries) || t.entries.length <= 50) return t;
                    let n = Math.min(Math.max(t.index, 0), t.entries.length - 1),
                        i = Math.min(n, t.entries.length - 50);
                    return { ...t, entries: t.entries.slice(i, i + 50), index: n - i };
                }),
            )),
            (g = e?.activeTabId ?? null),
            (T = []),
            (S =
                m.reduce((e, t) => {
                    let n = Number(t.id);
                    return Number.isFinite(n) && n > e ? n : e;
                }, 0) + 1),
            null == g || m.some((e) => e.id === g) || (g = m[0]?.id ?? null),
            v.overwriteHistory(
                (function (e) {
                    let t = {};
                    if (null == e || "object" != typeof e) return t;
                    for (let [n, i] of Object.entries(e)) {
                        let e = Array.isArray(i?.recentUses)
                            ? i.recentUses.filter((e) => "number" == typeof e && e > 0)
                            : [];
                        "number" == typeof i?.totalUses &&
                            0 !== e.length &&
                            (t[n] = { totalUses: i.totalUses, recentUses: e, frecency: -1, score: 0 });
                    }
                    return t;
                })(e?.openedChannels),
            ),
            P());
    }
    getState() {
        let e = {};
        for (let [t, { totalUses: n, recentUses: i }] of Object.entries(v.usageHistory))
            e[t] = { totalUses: n, recentUses: i };
        return { tabs: m, activeTabId: g, enabled: O, openedChannels: e };
    }
    getTabs() {
        return m;
    }
    getActiveTabId() {
        return g;
    }
    getActiveTab() {
        return m.find((e) => e.id === g) ?? null;
    }
    isEnabled() {
        return R();
    }
    isUserOptedIn() {
        return O;
    }
    isTabBarVisible() {
        return R() && m.length > 0;
    }
    getTabUnpinnedAtLimit() {
        return m.find((e) => e.id === N) ?? null;
    }
    getRecentlyClosed() {
        return L;
    }
    getFrequentlyOpenedChannelIds() {
        let e = v.frequently;
        return (e !== D && ((D = e), (b = e.filter((e) => (v.usageHistory[e]?.totalUses ?? 0) >= 2))), b);
    }
    getMaxTabs() {
        return p();
    }
    isAtMaxTabs() {
        return m.length >= p();
    }
    canGoBackInActiveTab() {
        let e = this.getActiveTab();
        return null != e && e.index > 0;
    }
    canGoForwardInActiveTab() {
        let e = this.getActiveTab();
        return null != e && e.index < e.entries.length - 1;
    }
}
let q = new z(a.h, {
    CHANNEL_TABS_OPEN: function (e) {
        if (m.length >= p()) return !1;
        let t = B(
            "route" === e.location.kind
                ? { kind: "route", routePath: e.location.routePath, routeLabel: e.location.routeLabel }
                : { kind: "channel", channelId: e.location.channelId, guildId: e.location.guildId },
            void 0 === e.sourceTabId ? g : e.sourceTabId,
        );
        ((m = [...m, t]), (!0 !== e.background || null == g) && G(t.id), M(t));
    },
    CHANNEL_TABS_CLOSE: function (e) {
        let { tabId: t } = e,
            n = m.findIndex((e) => e.id === t);
        if (-1 === n || 1 === m.length) return !1;
        let i = m[n],
            r = i.id === g;
        if (
            ((m = m.filter((e) => e.id !== t)),
            x(),
            !(function (e) {
                if ((y.delete(e.id), "channel" !== e.kind || !R())) return;
                let { channelId: t, guildId: n } = e;
                L = [{ channelId: t, guildId: n, closedAt: Date.now() }, ...L.filter((e) => e.channelId !== t)].slice(
                    0,
                    10,
                );
            })(i),
            r)
        ) {
            let e = m[Math.min(n, m.length - 1)];
            ((g = null), G(T[0] ?? e.id));
        }
    },
    CHANNEL_TABS_SET_ACTIVE: function (e) {
        let { tabId: t } = e;
        if (g === t || null == m.find((e) => e.id === t)) return !1;
        G(t);
    },
    CHANNEL_TABS_MOVE: function (e) {
        let { tabId: t, toIndex: n } = e,
            i = m.findIndex((e) => e.id === t);
        if (-1 === i) return !1;
        let r = m.filter((e) => e.pinned).length,
            [a, s] = m[i].pinned ? [0, r - 1] : [r, m.length - 1],
            l = Math.max(a, Math.min(n, s));
        if (i === l) return !1;
        let o = [...m],
            [d] = o.splice(i, 1);
        (o.splice(l, 0, d), (m = o));
    },
    CHANNEL_TABS_SET_PINNED: function (e) {
        let { tabId: t, pinned: n } = e,
            i = m.find((e) => e.id === t);
        if (null == i || i.pinned === n) return !1;
        let r = m.filter((e) => e.id !== i.id),
            a = r.filter((e) => e.pinned).length;
        m = [...r.slice(0, a), { ...i, pinned: n }, ...r.slice(a)];
    },
    CHANNEL_TABS_BACK: U(function () {
        return $(-1);
    }),
    CHANNEL_TABS_FORWARD: U(function () {
        return $(1);
    }),
    CHANNEL_TABS_SET_ENABLED: function (e) {
        let { enabled: t } = e;
        if (O === t) return !1;
        (O = t) ? 0 === m.length && R() && Y() : k();
    },
    CHANNEL_TABS_NAVIGATE_ROUTE: U(function (e) {
        let { routePath: t, routeLabel: n } = e;
        if (((N = null), !R())) return !1;
        let i = { kind: "route", routePath: t, routeLabel: n };
        if (0 === m.length) return j(i);
        let r = m.find((e) => e.id === g);
        return null != r && ("route" !== r.kind || r.routePath !== t) && (E(r, i) ? H(i) : void F(i));
    }),
    CHANNEL_SELECT: U(function (e) {
        let { channelId: t, guildId: n } = e;
        if (((N = null), !R() || null == t || (0, I.jq)(t))) return !1;
        let i = { kind: "channel", channelId: t, guildId: n ?? null };
        if (0 === m.length) return j(i);
        let r = m.find((e) => e.id === g);
        return null != r && ("channel" !== r.kind || r.channelId !== t) && (E(r, i) ? H(i) : void F(i));
    }),
    CHANNEL_DELETE: X,
    CONNECTION_OPEN: function () {
        let e = !C;
        if (((C = !0), !R())) return !1;
        if (!e && 0 === m.length) return Y();
        let t = (function () {
            let e = m.length - p();
            if (e <= 0) return !1;
            let t = new Set(
                m
                    .filter((e) => e.id !== g)
                    .slice(-e)
                    .map((e) => e.id),
            );
            return ((m = m.filter((e) => !t.has(e.id))), x(), !0);
        })();
        return (
            (e &&
                (function () {
                    let e = (0, A.rv)({ pathname: o.A.defaultRoute }),
                        t = W() ?? (null != e ? { kind: "route", ...e } : null);
                    if (null == t) return !1;
                    let n = m.at(-1);
                    if (null == n || (n.pinned && m.length < p())) {
                        let e = B(t, null);
                        return ((m = [...m, e]), G(e.id), !0);
                    }
                    return (
                        G(n.id),
                        n.pinned && (m = K(m.map((e) => (e.id === n.id ? { ...e, pinned: !1 } : e)))),
                        _(n, t) || F(t),
                        !0
                    );
                })()) ||
            t
        );
    },
    THREAD_DELETE: X,
    LOGOUT: function () {
        (k(), (y = new Set()), (L = []), v.overwriteHistory({}));
    },
});
