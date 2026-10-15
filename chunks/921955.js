let r;
(n.d(t, { A: () => L }), n(321073));
var i = n(17928),
    l = n(73153),
    s = n(308368),
    o = n(115718),
    a = n(47167),
    u = n(734057),
    d = n(71393),
    c = n(480595),
    h = n(290863),
    f = n(994500),
    g = n(287809),
    p = n(645959),
    m = n(652215),
    A = n(105292);
let y = [o.rD.TEXT_CHANNEL, o.rD.GROUP_DM, o.rD.USER],
    v = null,
    x = null,
    w = [],
    E = [],
    C = [];
function b(e) {
    ((w = [...w, e]),
        (C = _((E = E.map((e) => (e.type === o.rD.HEADER ? e : { ...e, sent: w.includes(e.data.record.id) }))))),
        k.emitChange());
}
function N(e) {
    let t = v?.application_id;
    return null != t && null != h.A.findActivity(e, (e) => e.application_id === t, null, !1);
}
function O(e) {
    return { type: o.rD.HEADER, sent: !1, data: (0, o.jF)(e) };
}
function _(e) {
    if (v?.application_id == null) return e;
    let t = [],
        n = [];
    for (let r of e) r.type === o.rD.USER && !0 === r.playingSameGame ? t.push(r) : n.push(r);
    return 0 === t.length || 0 === n.length
        ? e
        : [O(A.intl.formatToPlainString(A.t.HBJiRR, { name: v.name })), ...t, O(A.intl.string(A.t.Jf0OOQ)), ...n];
}
function D() {
    return (
        (null != v || null != r) &&
        ((v = null), null != r && (r.destroy(), (r = null)), null != x && (x(), (x = null)), !0)
    );
}
function I(e) {
    if (null == v || null == r) return !1;
    let t =
            null != e
                ? new Set(
                      e.map((e) => {
                          let { user: t } = e;
                          return t.id;
                      }),
                  )
                : null,
        n = E.map((e) => {
            if (e.type !== o.rD.USER || (null != t && !t.has(e.data.record.id))) return e;
            let n = h.A.getStatus(e.data.record.id),
                r = N(e.data.record.id);
            return n === e.status && r === e.playingSameGame ? e : { ...e, status: n, playingSameGame: r };
        });
    return !n.every((e, t) => e === E[t]) && ((C = _((E = n))), !0);
}
function S() {
    return I(null);
}
function j() {
    let e = null != v && null != v.application_id ? c.A.getApplicationActivity(v.application_id) : null;
    return null != v && (null == e || null == e.party || null == e.party.id) && D();
}
class T extends i.Ay.Store {
    static displayName = "ActivityInviteModalStore";
    initialize() {
        this.waitFor(u.A, d.A, c.A, h.A, p.A, g.default);
    }
    getActivity() {
        return v;
    }
    getQuery() {
        return r?.query ?? "";
    }
    getResults() {
        return C;
    }
}
let k = new T(l.h, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
            ((v = e.activity),
                (x = e.resolve),
                (w = []),
                null == r &&
                    (r = new o.Ay(
                        (e, t) => {
                            let n;
                            ((C = _(
                                (E = (
                                    "" === t.trim()
                                        ? ((n = []),
                                          p.A.getPrivateChannelIds().forEach((e) => {
                                              let t = u.A.getChannel(e);
                                              if (null != t)
                                                  if (t.type === m.rbe.DM) {
                                                      let e = t.getRecipientId(),
                                                          r = null != e ? g.default.getUser(e) : null;
                                                      null != r && n.push({ type: o.rD.USER, record: r, score: 0 });
                                                  } else
                                                      t.isMultiUserDM() &&
                                                          n.push({ type: o.rD.GROUP_DM, record: t, score: 0 });
                                          }),
                                          n)
                                        : e
                                )
                                    .map((e) => {
                                        switch (e.type) {
                                            case o.rD.USER: {
                                                let { record: t } = e;
                                                return {
                                                    type: o.rD.USER,
                                                    sent: w.includes(t.id),
                                                    status: h.A.getStatus(t.id),
                                                    playingSameGame: N(t.id),
                                                    data: e,
                                                };
                                            }
                                            case o.rD.TEXT_CHANNEL: {
                                                let { record: t } = e,
                                                    n = u.A.getChannel(t.parent_id),
                                                    r = d.A.getGuild(t.guild_id);
                                                return {
                                                    type: o.rD.TEXT_CHANNEL,
                                                    sent: w.includes(t.id),
                                                    categoryName: null != n ? (0, a.m1)(n, g.default, f.A) : "",
                                                    guildName: r?.name ?? "",
                                                    data: e,
                                                };
                                            }
                                            case o.rD.GROUP_DM: {
                                                let { record: t } = e;
                                                return { type: o.rD.GROUP_DM, sent: w.includes(t.id), data: e };
                                            }
                                            default:
                                                return null;
                                        }
                                    })
                                    .filter((e) => null != e)),
                            )),
                                k.emitChange());
                        },
                        y,
                        100,
                    )),
                r.search(""));
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
            let { query: t } = e;
            if (null == r || t === r.query) return !1;
            r.search(t);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
            if (null == v) return !1;
            let t = e.channelId,
                n = e.userId;
            return (
                null != t
                    ? s.A.sendActivityInvite({
                          channelId: t,
                          type: m.xL.JOIN,
                          activity: v,
                          location: "Channel Text Area - Invite to Join Modal",
                      }).then(() => b(t))
                    : null != n &&
                      s.A.sendActivityInviteUser({
                          userId: n,
                          type: m.xL.JOIN,
                          activity: v,
                          location: "Channel Text Area - Invite to Join Modal",
                      }).then(() => b(n)),
                !1
            );
        },
        ACTIVITY_INVITE_MODAL_CLOSE: D,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t } = e;
            return !!t && null != v && (D(), !0);
        },
        PRESENCE_UPDATES: function (e) {
            let { updates: t } = e;
            return I(t);
        },
        PRESENCES_REPLACE: S,
        CONNECTION_OPEN_SUPPLEMENTAL: S,
        LOCAL_ACTIVITY_UPDATE: j,
        RPC_APP_DISCONNECTED: j,
    }),
    L = 221552 == n.j ? k : null;
