"use strict";
n.d(t, { A: () => S });
var i = n(17928),
    r = n(713402),
    s = n(228366),
    a = n(320095),
    o = n(287809),
    l = n(756377);
function d(e) {
    if (null == e) return 1e13;
    try {
        return new Date(e).getTime();
    } catch (t) {
        throw Error(`Invalid date given (${e})`);
    }
}
let _ = new r.J(
        (e) => {
            let { saveData: t } = e;
            return [l.Yf.ALL, null != t.dueAt ? l.Yf.REMINDER : l.Yf.BOOKMARK];
        },
        (e) => {
            let { saveData: t } = e;
            return null != t.dueAt ? d(t.dueAt) : 1e13 - d(t.savedAt);
        },
    ),
    u = !0,
    c = 0,
    E = new Set(),
    h = new Set(),
    m = new Map();
function f(e) {
    let t = m.get(e);
    return null != t && t.size > 0;
}
function g(e) {
    let { channelId: t, messageId: n } = e;
    return `${t}-${n}`;
}
function p(e) {
    let t = g(e.saveData);
    null == _.get(t) && (c = Date.now()), _.set(t, e);
    let n = e.saveData.messageId,
        i = e.saveData.channelId,
        r = m.get(i) ?? new Set();
    r.add(n),
        m.set(i, r),
        null == e.message && h.add(n),
        null != e.saveData.dueAt && new Date() > e.saveData.dueAt ? E.add(n) : E.delete(n);
}
function A(e) {
    let { messageId: t, channelId: n } = e,
        i = g({ messageId: t, channelId: n }),
        r = _.get(i);
    if (r?.message == null) return !1;
    let s = { ...r };
    return (s.message = null), _.set(i, s), !0;
}
function I() {
    if (0 === h.size || u) return !1;
    u = !0;
}
class T extends i.Ay.Store {
    static displayName = "SavedMessagesStore";
    initialize() {
        this.waitFor(o.default);
    }
    getSavedMessages() {
        return _.values(l.Yf.ALL);
    }
    getSavedMessage(e, t) {
        return _.get(g({ channelId: e, messageId: t }));
    }
    getMessageBookmarks() {
        return _.values(l.Yf.BOOKMARK);
    }
    getMessageReminders() {
        return _.values(l.Yf.REMINDER);
    }
    getOverdueMessageReminderCount() {
        return E.size;
    }
    hasOverdueReminder() {
        return E.size > 0;
    }
    getSavedMessageCount() {
        return _.size();
    }
    getIsStale() {
        return u;
    }
    getLastChanged() {
        return c;
    }
    isMessageBookmarked(e, t) {
        let n = _.get(g({ channelId: e, messageId: t }));
        return null != n && null == n.saveData.dueAt;
    }
    isMessageReminder(e, t) {
        let n = _.get(g({ channelId: e, messageId: t }));
        return null != n && null != n.saveData.dueAt;
    }
}
let S = new T(s.h, {
    POST_CONNECTION_OPEN: function () {
        u = !0;
    },
    LOGOUT: function () {
        (u = !0), _.clear(), m.clear(), h.clear();
    },
    SAVED_MESSAGES_UPDATE: function (e) {
        let { savedMessages: t } = e;
        for (let e of ((u = !1), _.clear(), m.clear(), h.clear(), t)) p(e);
    },
    SAVED_MESSAGE_CREATE: function (e) {
        let { savedMessage: t } = e;
        p(t);
    },
    SAVED_MESSAGE_DELETE: function (e) {
        let { savedMessageData: t } = e,
            n = g(t),
            i = _.get(n);
        if (null == i) return !1;
        _.delete(n);
        let r = t.messageId;
        m.get(i.saveData.channelId)?.delete(r), h.delete(r), E.delete(r), (c = Date.now());
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e;
        return A({ messageId: t, channelId: n });
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: n } = e;
        for (let e of t) A({ messageId: e, channelId: n });
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        if (null == t.id || null == t.channel_id) return !1;
        let n = g({ messageId: t.id, channelId: t.channel_id }),
            i = _.get(n);
        if (i?.message == null) return !1;
        let r = { ...i };
        (r.message = (0, a.IU)(i.message, t)), _.set(n, r);
    },
    GUILD_CREATE: I,
    GUILD_UPDATE: I,
    GUILD_DELETE: I,
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (0 === h.size || u || !f(t.id)) return !1;
        u = !0;
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        if (0 === h.size || u) return !1;
        let n = !1;
        for (let e of t) f(e.id) && ((u = !0), (n = !0));
        return n;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        if (0 === h.size || u || !f(t.id)) return !1;
        u = !0;
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { user: t } = e;
        if (0 === h.size || u || t.id !== o.default.getCurrentUser()?.id) return !1;
        u = !0;
    },
    GUILD_ROLE_CREATE: I,
    GUILD_ROLE_UPDATE: I,
    GUILD_ROLE_DELETE: I,
    MESSAGE_REMINDER_DUE: function (e) {
        let { savedMessage: t } = e;
        E.add(t.saveData.messageId);
    },
});
