"use strict";
let i;
n.d(t, { A: () => R }), n(321073);
var r = n(17928),
    s = n(228366),
    a = n(308368),
    o = n(115718),
    l = n(47167),
    u = n(734057),
    c = n(71393),
    d = n(480595),
    _ = n(290863),
    h = n(994500),
    f = n(287809),
    p = n(645959),
    E = n(652215);
let m = [o.rD.TEXT_CHANNEL, o.rD.GROUP_DM, o.rD.USER],
    g = null,
    A = null,
    I = [],
    T = [];
function S(e) {
    (I = [...I, e]), (T = T.map((e) => ({ ...e, sent: I.includes(e.data.record.id) }))), v.emitChange();
}
function y() {
    (g = null), null != i && (i.destroy(), (i = null)), null != A && A();
}
function C() {
    let e = null != g && null != g.application_id ? d.A.getApplicationActivity(g.application_id) : null;
    if (null != g && (null == e || null == e.party || null == e.party.id)) return y();
}
class N extends r.Ay.Store {
    static displayName = "ActivityInviteModalStore";
    initialize() {
        this.waitFor(u.A, c.A, d.A, _.A, p.A, f.default);
    }
    getActivity() {
        return g;
    }
    getQuery() {
        return i?.query ?? "";
    }
    getResults() {
        return T;
    }
}
let v = new N(s.h, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
            (g = e.activity),
                (A = e.resolve),
                (I = []),
                null == i &&
                    (i = new o.Ay(
                        (e, t) => {
                            let n;
                            (T = (
                                "" === t.trim()
                                    ? ((n = []),
                                      p.A.getPrivateChannelIds().forEach((e) => {
                                          let t = u.A.getChannel(e);
                                          if (null != t)
                                              if (t.type === E.rbe.DM) {
                                                  let e = t.getRecipientId(),
                                                      i = null != e ? f.default.getUser(e) : null;
                                                  null != i && n.push({ type: o.rD.USER, record: i, score: 0 });
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
                                                sent: I.includes(t.id),
                                                status: _.A.getStatus(t.id),
                                                data: e,
                                            };
                                        }
                                        case o.rD.TEXT_CHANNEL: {
                                            let { record: t } = e,
                                                n = u.A.getChannel(t.parent_id),
                                                i = c.A.getGuild(t.guild_id);
                                            return {
                                                type: o.rD.TEXT_CHANNEL,
                                                sent: I.includes(t.id),
                                                categoryName: null != n ? (0, l.m1)(n, f.default, h.A) : "",
                                                guildName: i?.name ?? "",
                                                data: e,
                                            };
                                        }
                                        case o.rD.GROUP_DM: {
                                            let { record: t } = e;
                                            return { type: o.rD.GROUP_DM, sent: I.includes(t.id), data: e };
                                        }
                                        default:
                                            return null;
                                    }
                                })
                                .filter((e) => null != e)),
                                v.emitChange();
                        },
                        m,
                        100,
                    )),
                i.search("");
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
            let { query: t } = e;
            null != i && i.search(t);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
            if (null == g) return;
            let t = e.channelId,
                n = e.userId;
            null != t
                ? a.A.sendActivityInvite({
                      channelId: t,
                      type: E.xL.JOIN,
                      activity: g,
                      location: "Channel Text Area - Invite to Join Modal",
                  }).then(() => S(t))
                : null != n &&
                  a.A.sendActivityInviteUser({
                      userId: n,
                      type: E.xL.JOIN,
                      activity: g,
                      location: "Channel Text Area - Invite to Join Modal",
                  }).then(() => S(n));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: y,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t } = e;
            return !!t && null != g && (y(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: C,
        RPC_APP_DISCONNECTED: C,
    }),
    R = v;
