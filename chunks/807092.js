(n.d(t, { Z: () => N }), n(388685));
var r,
    i = n(442837),
    o = n(570140),
    a = n(592125),
    s = n(375954),
    l = n(709054);
function c(e, t, n) {
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
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            }));
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
let _ = {},
    p = {},
    h = {};
function m(e) {
    let { channel: t, message: n, shouldMention: r = !0, showMentionToggle: i = !0, source: o } = e;
    ((_[t.id] = {
        channel: t,
        message: n,
        shouldMention: r,
        showMentionToggle: i
    }),
        (h[t.id] = o));
}
function g(e) {
    let { channel: t, messageId: n, shouldMention: r = !0, showMentionToggle: i = !0 } = e;
    p[t.id] = {
        channelId: t.id,
        messageId: n,
        shouldMention: r,
        showMentionToggle: i
    };
}
function E(e) {
    let { channelId: t, shouldMention: n } = e;
    (t in _ && (_[t] = f(u({}, _[t]), { shouldMention: n })), t in p && (p[t] = f(u({}, p[t]), { shouldMention: n })));
}
function b(e) {
    let { channelId: t } = e;
    (delete _[t], delete p[t]);
}
function y(e) {
    var t, n, r;
    let { id: i, channelId: o } = e;
    if ((null == (n = _[o]) || null == (t = n.message) ? void 0 : t.id) === i) (delete _[o], delete h[o]);
    else {
        if ((null == (r = p[o]) ? void 0 : r.messageId) !== i) return !1;
        (delete p[o], delete h[o]);
    }
}
function O(e) {
    if (null == e) return !1;
    let t = p[e];
    if (null == t) return !1;
    let n = s.Z.getMessage(e, t.messageId),
        r = a.Z.getChannel(t.channelId);
    if (null == n || null == r) return !1;
    ((_[e] = {
        channel: r,
        message: n,
        shouldMention: t.shouldMention,
        showMentionToggle: t.showMentionToggle
    }),
        delete p[e]);
}
function v(e) {
    let { channelId: t } = e;
    O(t);
}
function I(e) {
    let { channelId: t } = e;
    O(t);
}
function T() {
    l.default.keys(p).forEach((e) => {
        null == a.Z.getChannel(e) && delete p[e];
    });
}
function S() {
    ((_ = {}), (p = {}), (h = {}));
}
class A extends (r = i.ZP.PersistedStore) {
    getState() {
        let e = {};
        for (let [t, n] of l.default.entries(_))
            e[t] = {
                channelId: t,
                messageId: n.message.id,
                shouldMention: n.shouldMention,
                showMentionToggle: n.showMentionToggle
            };
        return u({}, p, e);
    }
    initialize(e) {
        (this.waitFor(s.Z, a.Z), (p = null != e ? e : {}));
    }
    getPendingReply(e) {
        return _[e];
    }
    getPendingReplyActionSource(e) {
        return h[e];
    }
}
(c(A, 'displayName', 'PendingReplyStore'), c(A, 'persistKey', 'PendingReplyStore'), c(A, 'migrations', [(e) => (null != e ? e : {})]));
let N = new A(o.Z, {
    CREATE_PENDING_REPLY: m,
    CREATE_SHALLOW_PENDING_REPLY: g,
    SET_PENDING_REPLY_SHOULD_MENTION: E,
    DELETE_PENDING_REPLY: b,
    CONNECTION_OPEN: T,
    LOGOUT: S,
    MESSAGE_DELETE: y,
    CHANNEL_SELECT: v,
    LOAD_MESSAGES_SUCCESS: I
});
