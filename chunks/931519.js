(n.d(t, { A: () => V }), n(134528), n(947204));
var i = n(574381),
    r = n(855986),
    a = n(73153),
    s = n(340344),
    l = n(650048),
    o = n(309010),
    d = n(967198),
    c = n(287809);
function u(e, t) {
    return "route" === e.kind
        ? "route" === t.kind && e.routePath === t.routePath
        : "channel" === t.kind && e.channelId === t.channelId;
}
function _(e, t) {
    return e.pinned && !u(e, t);
}
var E = n(20517),
    A = n(858760),
    f = n(746080);
function h() {
    return c.default.getCurrentUser()?.isStaff() === !0 ? 25 : 9;
}
let I = [],
    p = null,
    m = [],
    T = 1,
    g = null,
    S = null,
    N = !1,
    C = !1;
function O() {
    return C && A.A.getConfig({ location: "ChannelTabsStore" }).enabled && (0, i.xl)();
}
function R(e) {
    m = [e, ...m.filter((t) => t !== e)].slice(0, h());
}
function L(e) {
    (null != p && p !== e && R(p), (p = e), R(e));
}
function y() {
    m = m.filter((e) => I.some((t) => t.id === e));
}
function D() {
    ((I = []), (p = null), (m = []), (g = null));
}
function b(e) {
    (g === p && (g = null),
        (I = I.map((t) => {
            if (t.id !== p) return t;
            let n = [...t.entries.slice(0, t.index + 1), e].slice(-50);
            return P(t, e, n, n.length - 1);
        })));
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p,
        n = null != t ? (I.find((e) => e.id === t) ?? I.find((e) => e.id === p)) : void 0,
        i = null != n ? n.entries.slice(Math.max(0, n.index - 10), n.index + 1).map((e) => ({ ...e })) : [],
        r = i.at(-1),
        a = null != r && u(r, e) ? i : [...i, e].slice(-11);
    return { id: String(T++), ...e, pinned: !1, entries: a, index: a.length - 1 };
}
function P(e, t, n, i) {
    return { id: e.id, pinned: !0 === e.pinned, ...t, entries: n, index: i };
}
function M(e) {
    if (I.length >= h() && null != p) {
        ((S = p), (I = x(I.map((e) => (e.id === p ? { ...e, pinned: !1 } : e)))), b(e));
        return;
    }
    let t = v(e);
    ((I = [...I, t]), L(t.id));
}
function U(e) {
    let t = v(e);
    ((I = [t]), L(t.id));
}
function w() {
    let e = (0, E.r)(window.location);
    if (null != e) return { kind: "route", ...e };
    let t = o.Ay.getCurrentlySelectedChannelId();
    return null == t || (0, f.jq)(t) ? null : { kind: "channel", channelId: t, guildId: d.A.getGuildId() ?? null };
}
function G() {
    let e = w();
    return null != e && (U(e), !0);
}
function x(e) {
    return [...e.filter((e) => e.pinned), ...e.filter((e) => !e.pinned)];
}
function k(e) {
    let t = I.find((e) => e.id === p);
    if (null == t) return !1;
    let n = t.index + e,
        i = t.entries[n];
    if (null == i) return !1;
    (g === p && (g = null), (I = I.map((e) => (e.id === p ? P(e, i, e.entries, n) : e))));
}
function F(e) {
    let { channel: t } = e;
    if (!O()) return !1;
    function n(e) {
        return "channel" === e.kind && e.channelId === t.id;
    }
    if (0 === I.filter((e) => n(e) && e.id !== p).length) return !1;
    ((I = I.filter((e) => !n(e) || e.id === p)), y());
}
class B extends r.Ay.PersistedStore {
    static displayName = "ChannelTabsStore";
    static persistKey = "ChannelTabsStore";
    static migrations = [(e) => ({ tabs: [], activeTabId: null, enabled: e?.enabled ?? !1 })];
    initialize(e) {
        (this.waitFor(s.A, l.A, o.Ay, d.A, c.default),
            (C = e?.enabled ?? !1),
            (I = x(
                (e?.tabs ?? []).map((e) => {
                    var t = P(
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
            (p = e?.activeTabId ?? null),
            (m = []),
            (T =
                I.reduce((e, t) => {
                    let n = Number(t.id);
                    return Number.isFinite(n) && n > e ? n : e;
                }, 0) + 1),
            null == p || I.some((e) => e.id === p) || (p = I[0]?.id ?? null));
    }
    getState() {
        return { tabs: I, activeTabId: p, enabled: C };
    }
    getTabs() {
        return I;
    }
    getActiveTabId() {
        return p;
    }
    getActiveTab() {
        return I.find((e) => e.id === p) ?? null;
    }
    isEnabled() {
        return O();
    }
    isUserOptedIn() {
        return C;
    }
    isTabBarVisible() {
        return O() && I.length > 0;
    }
    getTabUnpinnedAtLimit() {
        return I.find((e) => e.id === S) ?? null;
    }
    isActiveTabFresh() {
        return null != g && g === p;
    }
    getMaxTabs() {
        return h();
    }
    isAtMaxTabs() {
        return I.length >= h();
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
let V = new B(a.h, {
    CHANNEL_TABS_OPEN: function (e) {
        if (I.length >= h()) return !1;
        let t = v(
            "route" === e.kind
                ? { kind: "route", routePath: e.routePath, routeLabel: e.routeLabel }
                : { kind: "channel", channelId: e.channelId, guildId: e.guildId },
            e.sourceTabId ?? p,
        );
        ((I = [...I, t]), (!0 === e.active || null == p) && L(t.id), !0 === e.fresh && (g = t.id));
    },
    CHANNEL_TABS_CLOSE: function (e) {
        let { tabId: t } = e,
            n = I.findIndex((e) => e.id === t);
        if (-1 === n || 1 === I.length) return !1;
        let i = I[n].id === p;
        if ((g === t && (g = null), (I = I.filter((e) => e.id !== t)), y(), i)) {
            let e = I[Math.min(n, I.length - 1)];
            ((p = null), L(m[0] ?? e.id));
        }
    },
    CHANNEL_TABS_SET_ACTIVE: function (e) {
        let { tabId: t } = e;
        if (p === t || null == I.find((e) => e.id === t)) return !1;
        L(t);
    },
    CHANNEL_TABS_MOVE: function (e) {
        let { tabId: t, toIndex: n } = e,
            i = I.findIndex((e) => e.id === t);
        if (-1 === i) return !1;
        let r = I.filter((e) => e.pinned).length,
            [a, s] = I[i].pinned ? [0, r - 1] : [r, I.length - 1],
            l = Math.max(a, Math.min(n, s));
        if (i === l) return !1;
        let o = [...I],
            [d] = o.splice(i, 1);
        (o.splice(l, 0, d), (I = o));
    },
    CHANNEL_TABS_SET_PINNED: function (e) {
        let { tabId: t, pinned: n } = e,
            i = I.find((e) => e.id === t);
        if (null == i || i.pinned === n) return !1;
        let r = I.filter((e) => e.id !== i.id),
            a = r.filter((e) => e.pinned).length;
        I = [...r.slice(0, a), { ...i, pinned: n }, ...r.slice(a)];
    },
    CHANNEL_TABS_BACK: function () {
        return k(-1);
    },
    CHANNEL_TABS_FORWARD: function () {
        return k(1);
    },
    CHANNEL_TABS_SET_ENABLED: function (e) {
        let { enabled: t } = e;
        if (C === t) return !1;
        (C = t) ? 0 === I.length && O() && G() : D();
    },
    CHANNEL_TABS_NAVIGATE_ROUTE: function (e) {
        let { routePath: t, routeLabel: n } = e;
        if (((S = null), !O())) return !1;
        let i = { kind: "route", routePath: t, routeLabel: n };
        if (0 === I.length) return U(i);
        let r = I.find((e) => e.id === p);
        return null != r && ("route" !== r.kind || r.routePath !== t) && (_(r, i) ? M(i) : void b(i));
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t, guildId: n } = e;
        if (((S = null), !O() || null == t || (0, f.jq)(t))) return !1;
        let i = { kind: "channel", channelId: t, guildId: n ?? null };
        if (0 === I.length) return U(i);
        let r = I.find((e) => e.id === p);
        return null != r && ("channel" !== r.kind || r.channelId !== t) && (_(r, i) ? M(i) : void b(i));
    },
    CHANNEL_DELETE: F,
    CONNECTION_OPEN: function () {
        let e = !N;
        if (((N = !0), !O())) return !1;
        if (!e && 0 === I.length) return G();
        let t = (function () {
            let e = I.length - h();
            if (e <= 0) return !1;
            let t = new Set(
                I.filter((e) => e.id !== p)
                    .slice(-e)
                    .map((e) => e.id),
            );
            return ((I = I.filter((e) => !t.has(e.id))), y(), !0);
        })();
        return (
            (e &&
                (function () {
                    let e = (0, E.r)({ pathname: l.A.defaultRoute }),
                        t = w() ?? (null != e ? { kind: "route", ...e } : null);
                    if (null == t) return !1;
                    let n = I.at(-1);
                    if (null == n || (n.pinned && I.length < h())) {
                        let e = v(t, null);
                        return ((I = [...I, e]), L(e.id), !0);
                    }
                    return (
                        L(n.id),
                        n.pinned && (I = x(I.map((e) => (e.id === n.id ? { ...e, pinned: !1 } : e)))),
                        u(n, t) || b(t),
                        !0
                    );
                })()) ||
            t
        );
    },
    THREAD_DELETE: F,
    LOGOUT: function () {
        if (0 === I.length) return !1;
        D();
    },
});
