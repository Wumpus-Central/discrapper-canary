"use strict";
n.d(t, { A: () => S });
var r = n(311907),
    i = n(713402),
    s = n(73153),
    a = n(141468),
    o = n(287809),
    l = n(756377);
function u(e) {
    if (null == e) return 1e13;
    try {
        return new Date(e).getTime();
    } catch (t) {
        throw Error(`Invalid date given (${e})`);
    }
}
let d = new i.J(
        (e) => {
            let { saveData: t } = e;
            return [l.Yf.ALL, null != t.dueAt ? l.Yf.REMINDER : l.Yf.BOOKMARK];
        },
        (e) => {
            let { saveData: t } = e;
            return null != t.dueAt ? u(t.dueAt) : 1e13 - u(t.savedAt);
        },
    ),
    c = !0,
    _ = 0,
    f = new Set(),
    E = new Set(),
    h = new Map();
function p(e) {
    let t = h.get(e);
    return null != t && t.size > 0;
}
function m(e) {
    let { channelId: t, messageId: n } = e;
    return `${t}-${n}`;
}
function g(e) {
    let t = m(e.saveData);
    null == d.get(t) && (_ = Date.now()), d.set(t, e);
    let n = e.saveData.messageId,
        r = e.saveData.channelId,
        i = h.get(r) ?? new Set();
    i.add(n),
        h.set(r, i),
        null == e.message && E.add(n),
        null != e.saveData.dueAt && new Date() > e.saveData.dueAt ? f.add(n) : f.delete(n);
}
function A(e) {
    let { messageId: t, channelId: n } = e,
        r = m({ messageId: t, channelId: n }),
        i = d.get(r);
    if (i?.message == null) return !1;
    let s = { ...i };
    return (s.message = null), d.set(r, s), !0;
}
function I() {
    if (0 === E.size || c) return !1;
    c = !0;
}
class T extends r.Ay.Store {
    static displayName = "SavedMessagesStore";
    initialize() {
        this.waitFor(o.default);
    }
    getSavedMessages() {
        return d.values(l.Yf.ALL);
    }
    getSavedMessage(e, t) {
        return d.get(m({ channelId: e, messageId: t }));
    }
    getMessageBookmarks() {
        return d.values(l.Yf.BOOKMARK);
    }
    getMessageReminders() {
        return d.values(l.Yf.REMINDER);
    }
    getOverdueMessageReminderCount() {
        return f.size;
    }
    hasOverdueReminder() {
        return f.size > 0;
    }
    getSavedMessageCount() {
        return d.size();
    }
    getIsStale() {
        return c;
    }
    getLastChanged() {
        return _;
    }
    isMessageBookmarked(e, t) {
        let n = d.get(m({ channelId: e, messageId: t }));
        return null != n && null == n.saveData.dueAt;
    }
    isMessageReminder(e, t) {
        let n = d.get(m({ channelId: e, messageId: t }));
        return null != n && null != n.saveData.dueAt;
    }
}
let S = new T(s.h, {
    POST_CONNECTION_OPEN: function () {
        c = !0;
    },
    LOGOUT: function () {
        (c = !0), d.clear(), h.clear(), E.clear();
    },
    SAVED_MESSAGES_UPDATE: function (e) {
        let { savedMessages: t } = e;
        for (let e of ((c = !1), d.clear(), h.clear(), E.clear(), t)) g(e);
    },
    SAVED_MESSAGE_CREATE: function (e) {
        let { savedMessage: t } = e;
        g(t);
    },
    SAVED_MESSAGE_DELETE: function (e) {
        let { savedMessageData: t } = e,
            n = m(t),
            r = d.get(n);
        if (null == r) return !1;
        d.delete(n);
        let i = t.messageId;
        h.get(r.saveData.channelId)?.delete(i), E.delete(i), f.delete(i), (_ = Date.now());
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
        let n = m({ messageId: t.id, channelId: t.channel_id }),
            r = d.get(n);
        if (r?.message == null) return !1;
        let i = { ...r };
        (i.message = (0, a.IU)(r.message, t)), d.set(n, i);
    },
    GUILD_CREATE: I,
    GUILD_UPDATE: I,
    GUILD_DELETE: I,
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (0 === E.size || c || !p(t.id)) return !1;
        c = !0;
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        if (0 === E.size || c) return !1;
        let n = !1;
        for (let e of t) p(e.id) && ((c = !0), (n = !0));
        return n;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        if (0 === E.size || c || !p(t.id)) return !1;
        c = !0;
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { user: t } = e;
        if (0 === E.size || c || t.id !== o.default.getCurrentUser()?.id) return !1;
        c = !0;
    },
    GUILD_ROLE_CREATE: I,
    GUILD_ROLE_UPDATE: I,
    GUILD_ROLE_DELETE: I,
    MESSAGE_REMINDER_DUE: function (e) {
        let { savedMessage: t } = e;
        f.add(t.saveData.messageId);
    },
});
