n.d(t, { Z: () => S });
var r,
    i = n(442837),
    o = n(570140),
    a = n(375954);
function s(e, t, n) {
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
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = {},
    f = {},
    _ = {};
function p(e) {
    let { channel: t, message: n, shouldMention: r = !0, showMentionToggle: i = !0, source: o } = e;
    (d[t.id] = {
        channel: t,
        message: n,
        shouldMention: r,
        showMentionToggle: i
    }),
        (_[t.id] = o);
}
function h(e) {
    let { channel: t, messageId: n, shouldMention: r = !0, showMentionToggle: i = !0 } = e;
    f[t.id] = {
        channel: t,
        messageId: n,
        shouldMention: r,
        showMentionToggle: i
    };
}
function m(e) {
    let { channelId: t, shouldMention: n } = e;
    t in d && (d[t] = u(l({}, d[t]), { shouldMention: n })), t in f && (f[t] = u(l({}, f[t]), { shouldMention: n }));
}
function g(e) {
    let { channelId: t } = e;
    delete d[t], delete f[t];
}
function E(e) {
    var t, n, r;
    let { id: i, channelId: o } = e;
    if ((null == (n = d[o]) || null == (t = n.message) ? void 0 : t.id) === i) delete d[o], delete _[o];
    else {
        if ((null == (r = f[o]) ? void 0 : r.messageId) !== i) return !1;
        delete f[o], delete _[o];
    }
}
function b(e) {
    if (null == e) return !1;
    let t = f[e];
    if (null == t) return !1;
    let n = a.Z.getMessage(e, t.messageId);
    if (null == n) return !1;
    (d[e] = {
        channel: t.channel,
        message: n,
        shouldMention: t.shouldMention,
        showMentionToggle: t.showMentionToggle
    }),
        delete f[e];
}
function y(e) {
    let { channelId: t } = e;
    b(t);
}
function v(e) {
    let { channelId: t } = e;
    b(t);
}
function O() {
    (d = {}), (f = {}), (_ = {});
}
class I extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(a.Z);
    }
    getPendingReply(e) {
        return d[e];
    }
    getPendingReplyActionSource(e) {
        return _[e];
    }
}
s(I, 'displayName', 'PendingReplyStore');
let S = new I(o.Z, {
    CREATE_PENDING_REPLY: p,
    CREATE_SHALLOW_PENDING_REPLY: h,
    SET_PENDING_REPLY_SHOULD_MENTION: m,
    DELETE_PENDING_REPLY: g,
    CONNECTION_OPEN: O,
    LOGOUT: O,
    MESSAGE_DELETE: E,
    CHANNEL_SELECT: y,
    LOAD_MESSAGES_SUCCESS: v
});
