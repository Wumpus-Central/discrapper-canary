n.d(t, { Z: () => I });
var i,
    r = n(442837),
    a = n(570140),
    s = n(375954);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = {},
    u = {},
    c = {};
function d(e) {
    let { channel: t, message: n, shouldMention: i = !0, showMentionToggle: r = !0, source: a } = e;
    (l[t.id] = {
        channel: t,
        message: n,
        shouldMention: i,
        showMentionToggle: r
    }),
        (c[t.id] = a);
}
function f(e) {
    let { channel: t, messageId: n, shouldMention: i = !0, showMentionToggle: r = !0 } = e;
    u[t.id] = {
        channel: t,
        messageId: n,
        shouldMention: i,
        showMentionToggle: r
    };
}
function _(e) {
    let { channelId: t, shouldMention: n } = e;
    t in l &&
        (l[t] = {
            ...l[t],
            shouldMention: n
        }),
        t in u &&
            (u[t] = {
                ...u[t],
                shouldMention: n
            });
}
function p(e) {
    let { channelId: t } = e;
    delete l[t], delete u[t];
}
function h(e) {
    var t, n, i;
    let { id: r, channelId: a } = e;
    if ((null === (n = l[a]) || void 0 === n ? void 0 : null === (t = n.message) || void 0 === t ? void 0 : t.id) === r) delete l[a], delete c[a];
    else {
        if ((null === (i = u[a]) || void 0 === i ? void 0 : i.messageId) !== r) return !1;
        delete u[a], delete c[a];
    }
}
function m(e) {
    if (null == e) return !1;
    let t = u[e];
    if (null == t) return !1;
    let n = s.Z.getMessage(e, t.messageId);
    if (null == n) return !1;
    (l[e] = {
        channel: t.channel,
        message: n,
        shouldMention: t.shouldMention,
        showMentionToggle: t.showMentionToggle
    }),
        delete u[e];
}
function g(e) {
    let { channelId: t } = e;
    m(t);
}
function E(e) {
    let { channelId: t } = e;
    m(t);
}
function v() {
    (l = {}), (u = {}), (c = {});
}
class y extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(s.Z);
    }
    getPendingReply(e) {
        return l[e];
    }
    getPendingReplyActionSource(e) {
        return c[e];
    }
}
o(y, 'displayName', 'PendingReplyStore');
let I = new y(a.Z, {
    CREATE_PENDING_REPLY: d,
    CREATE_SHALLOW_PENDING_REPLY: f,
    SET_PENDING_REPLY_SHOULD_MENTION: _,
    DELETE_PENDING_REPLY: p,
    CONNECTION_OPEN: v,
    LOGOUT: v,
    MESSAGE_DELETE: h,
    CHANNEL_SELECT: g,
    LOAD_MESSAGES_SUCCESS: E
});
