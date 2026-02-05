"use strict";
n.d(t, { A: () => G });
var r = n(311907),
    i = n(713402),
    a = n(73153),
    s = n(141468),
    o = n(287809),
    l = n(756377);
let u = 1e13;
function c(e) {
    if (null == e) return u;
    try {
        return new Date(e).getTime();
    } catch (t) {
        throw Error(`Invalid date given (${e})`);
    }
}
function d(e) {
    return null != e.dueAt ? c(e.dueAt) : u - c(e.savedAt);
}
let _ = new i.J(
        (e) => {
            let { saveData: t } = e;
            return [l.Yf.ALL, null != t.dueAt ? l.Yf.REMINDER : l.Yf.BOOKMARK];
        },
        (e) => {
            let { saveData: t } = e;
            return d(t);
        },
    ),
    f = !0,
    p = 0,
    h = new Set(),
    m = new Set(),
    g = new Map();
function E(e) {
    let t = g.get(e);
    return null != t && t.size > 0;
}
function A(e) {
    let { channelId: t, messageId: n } = e;
    return `${t}-${n}`;
}
function I(e) {
    let t = A(e.saveData);
    null == _.get(t) && (p = Date.now()), _.set(t, e);
    let n = e.saveData.messageId,
        r = e.saveData.channelId,
        i = g.get(r) ?? new Set();
    i.add(n),
        g.set(r, i),
        null == e.message && m.add(n),
        null != e.saveData.dueAt && new Date() > e.saveData.dueAt ? h.add(n) : h.delete(n);
}
function T(e) {
    let t = A(e),
        n = _.get(t);
    if (null == n) return !1;
    _.delete(t);
    let r = e.messageId;
    g.get(n.saveData.channelId)?.delete(r), m.delete(r), h.delete(r), (p = Date.now());
}
function y() {
    f = !0;
}
function S() {
    (f = !0), _.clear(), g.clear(), m.clear();
}
function v(e) {
    let { savedMessages: t } = e;
    for (let e of ((f = !1), _.clear(), g.clear(), m.clear(), t)) I(e);
}
function C(e) {
    let { savedMessage: t } = e;
    I(t);
}
function b(e) {
    let { savedMessageData: t } = e;
    return T(t);
}
function N(e) {
    let { messageId: t, channelId: n } = e,
        r = A({ messageId: t, channelId: n }),
        i = _.get(r);
    if (i?.message == null) return !1;
    let a = { ...i };
    return (a.message = null), _.set(r, a), !0;
}
function R(e) {
    let { id: t, channelId: n } = e;
    return N({ messageId: t, channelId: n });
}
function O(e) {
    let { ids: t, channelId: n } = e;
    for (let e of t) N({ messageId: e, channelId: n });
}
function D(e) {
    let { message: t } = e;
    if (null == t.id || null == t.channel_id) return !1;
    let n = A({ messageId: t.id, channelId: t.channel_id }),
        r = _.get(n);
    if (r?.message == null) return !1;
    let i = { ...r };
    (i.message = (0, s.IU)(r.message, t)), _.set(n, i);
}
function L() {
    if (0 === m.size || f) return !1;
    f = !0;
}
function w(e) {
    let { channel: t } = e;
    if (0 === m.size || f || !E(t.id)) return !1;
    f = !0;
}
function x(e) {
    let { channels: t } = e;
    if (0 === m.size || f) return !1;
    let n = !1;
    for (let e of t) E(e.id) && ((f = !0), (n = !0));
    return n;
}
function P(e) {
    let { channel: t } = e;
    if (0 === m.size || f || !E(t.id)) return !1;
    f = !0;
}
function M(e) {
    let { user: t } = e;
    if (0 === m.size || f || t.id !== o.default.getCurrentUser()?.id) return !1;
    f = !0;
}
function k(e) {
    let { savedMessage: t } = e;
    h.add(t.saveData.messageId);
}
class U extends r.Ay.Store {
    static displayName = "SavedMessagesStore";
    initialize() {
        this.waitFor(o.default);
    }
    getSavedMessages() {
        return _.values(l.Yf.ALL);
    }
    getSavedMessage(e, t) {
        return _.get(A({ channelId: e, messageId: t }));
    }
    getMessageBookmarks() {
        return _.values(l.Yf.BOOKMARK);
    }
    getMessageReminders() {
        return _.values(l.Yf.REMINDER);
    }
    getOverdueMessageReminderCount() {
        return h.size;
    }
    hasOverdueReminder() {
        return h.size > 0;
    }
    getSavedMessageCount() {
        return _.size();
    }
    getIsStale() {
        return f;
    }
    getLastChanged() {
        return p;
    }
    isMessageBookmarked(e, t) {
        let n = _.get(A({ channelId: e, messageId: t }));
        return null != n && null == n.saveData.dueAt;
    }
    isMessageReminder(e, t) {
        let n = _.get(A({ channelId: e, messageId: t }));
        return null != n && null != n.saveData.dueAt;
    }
}
let G = new U(a.h, {
    POST_CONNECTION_OPEN: y,
    LOGOUT: S,
    SAVED_MESSAGES_UPDATE: v,
    SAVED_MESSAGE_CREATE: C,
    SAVED_MESSAGE_DELETE: b,
    MESSAGE_DELETE: R,
    MESSAGE_DELETE_BULK: O,
    MESSAGE_UPDATE: D,
    GUILD_CREATE: L,
    GUILD_UPDATE: L,
    GUILD_DELETE: L,
    CHANNEL_CREATE: w,
    CHANNEL_UPDATES: x,
    CHANNEL_DELETE: P,
    GUILD_MEMBER_UPDATE: M,
    GUILD_ROLE_CREATE: L,
    GUILD_ROLE_UPDATE: L,
    GUILD_ROLE_DELETE: L,
    MESSAGE_REMINDER_DUE: k,
});
