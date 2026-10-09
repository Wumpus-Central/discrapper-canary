n.d(t, { A: () => y });
var i = n(17928),
    r = n(713402),
    a = n(73153),
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
    h = null,
    f = o.Z7.LOADED_FINISHED,
    I = !1,
    p = null,
    T = new Set(),
    m = new Map();
function g(e) {
    let t = m.get(e);
    return null != t && t.size > 0;
}
function S(e) {
    let { channelId: t, messageId: n } = e;
    return `${t}-${n}`;
}
function N(e) {
    let t = S(e.saveData);
    (null == c.get(t) && (_ = Date.now()), c.set(t, e));
    let n = e.saveData.messageId;
    null == e.saveData.dueAt ? A.add(n) : A.delete(n);
    let i = e.saveData.channelId,
        r = m.get(i) ?? new Set();
    (r.add(n),
        m.set(i, r),
        null == e.message && T.add(n),
        null != e.saveData.dueAt && new Date() > e.saveData.dueAt ? E.add(n) : E.delete(n));
}
function C(e) {
    for (let t of (c.clear(), m.clear(), T.clear(), A.clear(), e)) A.add(t);
    ((h = null), (p = null), (I = !1), (f = A.size > 0 ? o.Z7.LOADED_HAS_MORE : o.Z7.LOADED_FINISHED));
}
function O(e) {
    let { messageId: t, channelId: n } = e,
        i = S({ messageId: t, channelId: n }),
        r = c.get(i);
    if (r?.message == null) return !1;
    let a = { ...r };
    return ((a.message = null), c.set(i, a), !0);
}
function R() {
    if (0 === T.size || u) return !1;
    u = !0;
}
class L extends i.Ay.Store {
    static displayName = "SavedMessagesStore";
    initialize() {
        this.waitFor(l.default);
    }
    getSavedMessages() {
        return c.values(o.Yf.ALL);
    }
    getSavedMessage(e, t) {
        return c.get(S({ channelId: e, messageId: t }));
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
        return c.values(o.Yf.REMINDER).length + A.size;
    }
    getBookmarkCount() {
        return A.size;
    }
    getBookmarksCursor() {
        return h;
    }
    getBookmarksFetchState() {
        return f;
    }
    hasFetchedBookmarks() {
        return I;
    }
    getIsStale() {
        return u;
    }
    getLastChanged() {
        return _;
    }
    isMessageBookmarked(e, t) {
        return A.has(t);
    }
    isMessageReminder(e, t) {
        let n = c.get(S({ channelId: e, messageId: t }));
        return null != n && null != n.saveData.dueAt;
    }
}
let y = new L(a.h, {
    POST_CONNECTION_OPEN: function () {
        u = !0;
    },
    LOGOUT: function () {
        ((u = !0), C([]));
    },
    SAVED_MESSAGES_UPDATE: function (e) {
        let { reminders: t, bookmarkIds: n } = e;
        for (let e of ((u = !1), C(n), t)) N(e);
    },
    SAVED_MESSAGE_CREATE: function (e) {
        let { savedMessage: t } = e;
        N(t);
    },
    SAVED_MESSAGE_DELETE: function (e) {
        let t,
            n,
            i,
            { savedMessageData: r } = e;
        return (
            (t = S(r)),
            (n = r.messageId),
            null == (i = c.get(t))
                ? A.delete(n)
                : (c.delete(t),
                  A.delete(n),
                  m.get(i.saveData.channelId)?.delete(n),
                  T.delete(n),
                  E.delete(n),
                  (_ = Date.now()),
                  !0)
        );
    },
    BOOKMARKS_FETCH: function (e) {
        let { requestId: t } = e;
        ((f = o.Z7.LOADING), (p = t));
    },
    BOOKMARKS_FETCH_SUCCESS: function (e) {
        let { requestId: t, nextBefore: n, bookmarks: i, hasMore: r } = e;
        if (t !== p) return !1;
        for (let e of ((p = null), (f = r ? o.Z7.LOADED_HAS_MORE : o.Z7.LOADED_FINISHED), (I = !0), (h = n), i))
            A.has(e.saveData.messageId) && N(e);
    },
    BOOKMARKS_FETCH_FAILURE: function (e) {
        let { requestId: t } = e;
        if (t !== p) return !1;
        ((p = null), (f = o.Z7.FAILED));
    },
    MESSAGE_DELETE: function (e) {
        let { id: t, channelId: n } = e;
        return O({ messageId: t, channelId: n });
    },
    MESSAGE_DELETE_BULK: function (e) {
        let { ids: t, channelId: n } = e;
        for (let e of t) O({ messageId: e, channelId: n });
    },
    MESSAGE_UPDATE: function (e) {
        let { message: t } = e;
        if (null == t.id || null == t.channel_id) return !1;
        let n = S({ messageId: t.id, channelId: t.channel_id }),
            i = c.get(n);
        if (i?.message == null) return !1;
        let r = { ...i };
        ((r.message = (0, s.IU)(i.message, t)), c.set(n, r));
    },
    GUILD_CREATE: R,
    GUILD_UPDATE: R,
    GUILD_DELETE: R,
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        if (0 === T.size || u || !g(t.id)) return !1;
        u = !0;
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e;
        if (0 === T.size || u) return !1;
        let n = !1;
        for (let e of t) g(e.id) && ((u = !0), (n = !0));
        return n;
    },
    CHANNEL_DELETE: function (e) {
        let { channel: t } = e;
        if (0 === T.size || u || !g(t.id)) return !1;
        u = !0;
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { user: t } = e;
        if (0 === T.size || u || t.id !== l.default.getCurrentUser()?.id) return !1;
        u = !0;
    },
    GUILD_ROLE_CREATE: R,
    GUILD_ROLE_UPDATE: R,
    GUILD_ROLE_DELETE: R,
    MESSAGE_REMINDER_DUE: function (e) {
        let { savedMessage: t } = e;
        E.add(t.saveData.messageId);
    },
});
