"use strict";
n.d(t, { A: () => S });
var i = n(17928),
    r = n(713402),
    a = n(228366),
    s = n(320095),
    l = n(287809),
    o = n(756377);
function d(e) {
    if (null == e) return 1e13;
    try {
        return new Date(e).getTime();
    } catch (t) {
        throw Error(`Invalid date given (${e})`);
    }
}
let c = new r.J(
        (e) => {
            let { saveData: t } = e;
            return [o.Yf.ALL, null != t.dueAt ? o.Yf.REMINDER : o.Yf.BOOKMARK];
        },
        (e) => {
            let { saveData: t } = e;
            return null != t.dueAt ? d(t.dueAt) : 1e13 - d(t.savedAt);
        },
    ),
    u = !0,
    _ = 0,
    E = new Set(),
    A = new Set(),
    h = new Map();
function I(e) {
    let t = h.get(e);
    return null != t && t.size > 0;
}
function f(e) {
    let { channelId: t, messageId: n } = e;
    return `${t}-${n}`;
}
function p(e) {
    let t = f(e.saveData);
    null == c.get(t) && (_ = Date.now()), c.set(t, e);
    let n = e.saveData.messageId,
        i = e.saveData.channelId,
        r = h.get(i) ?? new Set();
    r.add(n),
        h.set(i, r),
        null == e.message && A.add(n),
        null != e.saveData.dueAt && new Date() > e.saveData.dueAt ? E.add(n) : E.delete(n);
}
function T(e) {
    let { messageId: t, channelId: n } = e,
        i = f({ messageId: t, channelId: n }),
        r = c.get(i);
    if (r?.message == null) return !1;
    let a = { ...r };
    return (a.message = null), c.set(i, a), !0;
}
function m() {
    if (0 === A.size || u) return !1;
    u = !0;
}
class g extends i.Ay.Store {
    static displayName = "SavedMessagesStore";
    initialize() {
        this.waitFor(l.default);
    }
    getSavedMessages() {
        return c.values(o.Yf.ALL);
    }
    getSavedMessage(e, t) {
        return c.get(f({ channelId: e, messageId: t }));
    }
    getMessageBookmarks() {
        return c.values(o.Yf.BOOKMARK);
    }
    getMessageReminders() {
        return c.values(o.Yf.REMINDER);
    }
    getOverdueMessageReminderCount() {
        return E.size;
    }
    hasOverdueReminder() {
        return E.size > 0;
    }
    getMostRecentOverdueDueAt() {
        let e = Date.now(),
            t = 0;
        for (let n of c.values(o.Yf.REMINDER)) {
            let i = d(n.saveData.dueAt);
            if (i > e) break;
            t = i;
        }
        return t;
    }
    getSavedMessageCount() {
        return c.size();
    }
    getIsStale() {
        return u;
    }
    getLastChanged() {
        return _;
    }
    isMessageBookmarked(e, t) {
        let n = c.get(f({ channelId: e, messageId: t }));
        return null != n && null == n.saveData.dueAt;
    }
    isMessageReminder(e, t) {
        let n = c.get(f({ channelId: e, messageId: t }));
        return null != n && null != n.saveData.dueAt;
    }
}
let S = new g(a.h, {
    POST_CONNECTION_OPEN: function () {
        u = !0;
    },
    LOGOUT: function () {
        (u = !0), c.clear(), h.clear(), A.clear();
    },
    SAVED_MESSAGES_UPDATE: function (e) {
        let { savedMessages: t } = e;
        for (let e of ((u = !1), c.clear(), h.clear(), A.clear(), t)) p(e);
    },
    SAVED_MESSAGE_CREATE: function (e) {
        let { savedMessage: t } = e;
        p(t);
    },
    SAVED_MESSAGE_DELETE: function (e) {
        let { savedMessageData: t } = e,
            n = f(t),
            i = c.get(n);
        if (null == i) return !1;
        c.delete(n);
        let r = t.messageId;
        h.get(i.saveData.channelId)?.delete(r), A.delete(r), E.delete(r), (_ = Date.now());
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e;
        return T({ messageId: t, channelId: n });
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: n } = e;
        for (let e of t) T({ messageId: e, channelId: n });
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        if (null == t.id || null == t.channel_id) return !1;
        let n = f({ messageId: t.id, channelId: t.channel_id }),
            i = c.get(n);
        if (i?.message == null) return !1;
        let r = { ...i };
        (r.message = (0, s.IU)(i.message, t)), c.set(n, r);
    },
    GUILD_CREATE: m,
    GUILD_UPDATE: m,
    GUILD_DELETE: m,
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (0 === A.size || u || !I(t.id)) return !1;
        u = !0;
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        if (0 === A.size || u) return !1;
        let n = !1;
        for (let e of t) I(e.id) && ((u = !0), (n = !0));
        return n;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        if (0 === A.size || u || !I(t.id)) return !1;
        u = !0;
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { user: t } = e;
        if (0 === A.size || u || t.id !== l.default.getCurrentUser()?.id) return !1;
        u = !0;
    },
    GUILD_ROLE_CREATE: m,
    GUILD_ROLE_UPDATE: m,
    GUILD_ROLE_DELETE: m,
    MESSAGE_REMINDER_DUE: function (e) {
        let { savedMessage: t } = e;
        E.add(t.saveData.messageId);
    },
});
