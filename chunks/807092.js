n.d(t, { Z: () => C }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(592125),
    s = n(375954),
    l = n(709054);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = {},
    _ = {},
    m = {};
function h(e) {
    let { channel: t, message: n, shouldMention: r = !0, showMentionToggle: i = !0, source: a } = e;
    (p[t.id] = {
        channel: t,
        message: n,
        shouldMention: r,
        showMentionToggle: i,
    }),
        (m[t.id] = a);
}
function g(e) {
    let { channel: t, messageId: n, shouldMention: r = !0, showMentionToggle: i = !0 } = e;
    _[t.id] = {
        channelId: t.id,
        messageId: n,
        shouldMention: r,
        showMentionToggle: i,
    };
}
function E(e) {
    let { channelId: t, shouldMention: n } = e;
    t in p && (p[t] = f(u({}, p[t]), { shouldMention: n })), t in _ && (_[t] = f(u({}, _[t]), { shouldMention: n }));
}
function b(e) {
    let { channelId: t } = e;
    delete p[t], delete _[t];
}
function y(e) {
    var t, n, r;
    let { id: i, channelId: a } = e;
    if ((null == (n = p[a]) || null == (t = n.message) ? void 0 : t.id) === i) delete p[a], delete m[a];
    else {
        if ((null == (r = _[a]) ? void 0 : r.messageId) !== i) return !1;
        delete _[a], delete m[a];
    }
}
function O(e) {
    if (null == e) return !1;
    let t = _[e];
    if (null == t) return !1;
    let n = s.Z.getMessage(e, t.messageId),
        r = o.Z.getChannel(t.channelId);
    if (null == n || null == r) return !1;
    (p[e] = {
        channel: r,
        message: n,
        shouldMention: t.shouldMention,
        showMentionToggle: t.showMentionToggle,
    }),
        delete _[e];
}
function v(e) {
    let { channelId: t } = e;
    O(t);
}
function S(e) {
    let { channelId: t } = e;
    O(t);
}
function I() {
    l.default.keys(_).forEach((e) => {
        null == o.Z.getChannel(e) && delete _[e];
    });
}
function T() {
    (p = {}), (_ = {}), (m = {});
}
class A extends (r = i.ZP.PersistedStore) {
    getState() {
        let e = {};
        for (let [t, n] of l.default.entries(p))
            e[t] = {
                channelId: t,
                messageId: n.message.id,
                shouldMention: n.shouldMention,
                showMentionToggle: n.showMentionToggle,
            };
        return u({}, _, e);
    }
    initialize(e) {
        this.waitFor(s.Z, o.Z), (_ = null != e ? e : {});
    }
    getPendingReply(e) {
        return p[e];
    }
    getPendingReplyActionSource(e) {
        return m[e];
    }
}
c(A, "displayName", "PendingReplyStore"),
    c(A, "persistKey", "PendingReplyStore"),
    c(A, "migrations", [(e) => (null != e ? e : {})]);
let C = new A(a.Z, {
    CREATE_PENDING_REPLY: h,
    CREATE_SHALLOW_PENDING_REPLY: g,
    SET_PENDING_REPLY_SHOULD_MENTION: E,
    DELETE_PENDING_REPLY: b,
    CONNECTION_OPEN: I,
    LOGOUT: T,
    MESSAGE_DELETE: y,
    CHANNEL_SELECT: v,
    LOAD_MESSAGES_SUCCESS: S,
});
