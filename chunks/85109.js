n.d(t, { A: () => F }), n(65821), n(896048);
var r,
    i = n(311907),
    a = n(713402),
    s = n(73153),
    o = n(141468),
    l = n(287809),
    c = n(756377);
function u(e, t, n) {
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
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
let f = 10000000000000;
function p(e) {
    if (null == e) return f;
    try {
        return new Date(e).getTime();
    } catch (t) {
        throw Error("Invalid date given (".concat(e, ")"));
    }
}
function _(e) {
    return null != e.dueAt ? p(e.dueAt) : f - p(e.savedAt);
}
let h = new a.J(
        (e) => {
            let { saveData: t } = e;
            return [c.Yf.ALL, null != t.dueAt ? c.Yf.REMINDER : c.Yf.BOOKMARK];
        },
        (e) => {
            let { saveData: t } = e;
            return _(t);
        },
    ),
    m = !0,
    g = 0,
    E = new Set(),
    b = new Set(),
    y = new Map();
function O(e) {
    let t = y.get(e);
    return null != t && t.size > 0;
}
function A(e) {
    let { channelId: t, messageId: n } = e;
    return "".concat(t, "-").concat(n);
}
function v(e) {
    var t;
    let n = A(e.saveData);
    null == h.get(n) && (g = Date.now()), h.set(n, e);
    let r = e.saveData.messageId,
        i = e.saveData.channelId,
        a = null != (t = y.get(i)) ? t : new Set();
    a.add(r),
        y.set(i, a),
        null == e.message && b.add(r),
        null != e.saveData.dueAt && new Date() > e.saveData.dueAt ? E.add(r) : E.delete(r);
}
function S(e) {
    var t;
    let n = A(e),
        r = h.get(n);
    if (null == r) return !1;
    h.delete(n);
    let i = e.messageId;
    null == (t = y.get(r.saveData.channelId)) || t.delete(i), b.delete(i), E.delete(i), (g = Date.now());
}
function I() {
    m = !0;
}
function T() {
    (m = !0), h.clear(), y.clear(), b.clear();
}
function C(e) {
    let { savedMessages: t } = e;
    for (let e of ((m = !1), h.clear(), y.clear(), b.clear(), t)) v(e);
}
function N(e) {
    let { savedMessage: t } = e;
    v(t);
}
function R(e) {
    let { savedMessageData: t } = e;
    return S(t);
}
function w(e) {
    let { messageId: t, channelId: n } = e,
        r = A({
            messageId: t,
            channelId: n,
        }),
        i = h.get(r);
    if ((null == i ? void 0 : i.message) == null) return !1;
    let a = d({}, i);
    return (a.message = null), h.set(r, a), !0;
}
function P(e) {
    let { id: t, channelId: n } = e;
    return w({
        messageId: t,
        channelId: n,
    });
}
function D(e) {
    let { ids: t, channelId: n } = e;
    for (let e of t)
        w({
            messageId: e,
            channelId: n,
        });
}
function x(e) {
    let { message: t } = e;
    if (null == t.id || null == t.channel_id) return !1;
    let n = A({
            messageId: t.id,
            channelId: t.channel_id,
        }),
        r = h.get(n);
    if ((null == r ? void 0 : r.message) == null) return !1;
    let i = d({}, r);
    (i.message = (0, o.IU)(r.message, t)), h.set(n, i);
}
function L() {
    if (0 === b.size || m) return !1;
    m = !0;
}
function j(e) {
    let { channel: t } = e;
    if (0 === b.size || m || !O(t.id)) return !1;
    m = !0;
}
function M(e) {
    let { channels: t } = e;
    if (0 === b.size || m) return !1;
    let n = !1;
    for (let e of t) O(e.id) && ((m = !0), (n = !0));
    return n;
}
function k(e) {
    let { channel: t } = e;
    if (0 === b.size || m || !O(t.id)) return !1;
    m = !0;
}
function U(e) {
    var t;
    let { user: n } = e;
    if (0 === b.size || m || n.id !== (null == (t = l.default.getCurrentUser()) ? void 0 : t.id)) return !1;
    m = !0;
}
function G(e) {
    let { savedMessage: t } = e;
    E.add(t.saveData.messageId);
}
class V extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(l.default);
    }
    getSavedMessages() {
        return h.values(c.Yf.ALL);
    }
    getSavedMessage(e, t) {
        return h.get(
            A({
                channelId: e,
                messageId: t,
            }),
        );
    }
    getMessageBookmarks() {
        return h.values(c.Yf.BOOKMARK);
    }
    getMessageReminders() {
        return h.values(c.Yf.REMINDER);
    }
    getOverdueMessageReminderCount() {
        return E.size;
    }
    hasOverdueReminder() {
        return E.size > 0;
    }
    getSavedMessageCount() {
        return h.size();
    }
    getIsStale() {
        return m;
    }
    getLastChanged() {
        return g;
    }
    isMessageBookmarked(e, t) {
        let n = h.get(
            A({
                channelId: e,
                messageId: t,
            }),
        );
        return null != n && null == n.saveData.dueAt;
    }
    isMessageReminder(e, t) {
        let n = h.get(
            A({
                channelId: e,
                messageId: t,
            }),
        );
        return null != n && null != n.saveData.dueAt;
    }
}
u(V, "displayName", "SavedMessagesStore");
let F = new V(s.h, {
    POST_CONNECTION_OPEN: I,
    LOGOUT: T,
    SAVED_MESSAGES_UPDATE: C,
    SAVED_MESSAGE_CREATE: N,
    SAVED_MESSAGE_DELETE: R,
    MESSAGE_DELETE: P,
    MESSAGE_DELETE_BULK: D,
    MESSAGE_UPDATE: x,
    GUILD_CREATE: L,
    GUILD_UPDATE: L,
    GUILD_DELETE: L,
    CHANNEL_CREATE: j,
    CHANNEL_UPDATES: M,
    CHANNEL_DELETE: k,
    GUILD_MEMBER_UPDATE: U,
    GUILD_ROLE_CREATE: L,
    GUILD_ROLE_UPDATE: L,
    GUILD_ROLE_DELETE: L,
    MESSAGE_REMINDER_DUE: G,
});
