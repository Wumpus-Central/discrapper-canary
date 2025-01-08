t.d(n, {
    $Z: function () {
        return T;
    },
    B8: function () {
        return A;
    },
    F4: function () {
        return j;
    },
    HH: function () {
        return C;
    },
    Hd: function () {
        return b;
    },
    Xl: function () {
        return N;
    },
    dF: function () {
        return R;
    },
    eM: function () {
        return O;
    },
    fB: function () {
        return _;
    },
    gK: function () {
        return L;
    },
    mG: function () {
        return y;
    },
    qe: function () {
        return D;
    },
    rY: function () {
        return P;
    },
    ts: function () {
        return G;
    },
    zW: function () {
        return S;
    }
}),
    t(200651),
    t(192379),
    t(481060);
var i = t(332148),
    l = t(904245),
    r = t(257559),
    a = t(143740),
    o = t(912332),
    s = t(434404);
t(726521);
var u = t(623292),
    d = t(324701),
    c = t(488131),
    g = t(314897),
    f = t(592125),
    m = t(626135),
    h = t(934415),
    E = t(572004),
    v = t(585483),
    I = t(709054),
    p = t(111618),
    M = t(50284),
    Z = t(730954),
    x = t(981631);
function S(e) {
    let n = e.getGuildId();
    null != n && s.Z.open(n, x.pNK.OVERVIEW);
}
function j(e, n, t) {
    (0, E.JG)(t.shiftKey ? ''.concat(n.channel_id, '-').concat(n.id) : n.id);
}
function _(e, n) {
    m.default.track(x.rMx.MESSAGE_LINK_COPIED, {
        message_id: n.id,
        channel: n.channel_id
    }),
        (0, E.JG)((0, h.wR)(e.guild_id, e.id, n.id));
}
function T(e, n, t) {
    n.state === x.yb.SEND_FAILED || t.shiftKey ? l.Z.deleteMessage(e.id, n.id, n.state === x.yb.SEND_FAILED) : r.Z.confirmDelete(e, n);
}
function b(e, n) {
    l.Z.startEditMessage(e.id, n.id, n.content);
}
function A(e, n) {
    (0, M.Z)(e.id, n.id);
}
function P(e, n, t) {
    if (!1 === n.pinned) {
        t.shiftKey ? i.Z.pinMessage(e, n.id) : r.Z.confirmPin(e, n);
        return;
    }
    t.shiftKey ? i.Z.unpinMessage(e, n.id) : r.Z.confirmUnpin(e, n);
}
function N(e, n) {
    (0, a.Z)(e.id, n.id);
}
function y(e, n) {
    (0, Z.Z)(e, n, void 0, p.Z.getOptions(n.id));
}
function C(e, n, t) {
    let i = e.isPrivate(),
        l = n.author.id === g.default.getId();
    (0, u.fE)({
        channel: e,
        message: n,
        shouldMention: !t.shiftKey && !l,
        showMentionToggle: !i && !l
    }),
        v.S.dispatchToLastSubscribed(x.CkL.TEXTAREA_FOCUS);
}
function L(e, n) {
    (0, c.R6)(e, n, 'Message');
}
function D(e, n) {
    let t = f.Z.getChannel(I.default.castMessageIdAsChannelId(n.id));
    null != t && (0, c.ok)(t);
}
function R(e, n) {
    (0, d.z)({
        channelId: e.id,
        messageId: n.id
    });
}
function O(e, n) {
    (0, d.x)({
        channelId: e.id,
        messageId: n.id
    });
}
function G(e, n) {
    (0, o.l8)({
        message: n,
        source: 'message-actions'
    });
}
