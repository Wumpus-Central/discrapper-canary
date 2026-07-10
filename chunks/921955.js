let l;
n.d(t, { A: () => N }), n(321073);
var r = n(17928),
    i = n(228366),
    a = n(308368),
    s = n(115718),
    o = n(47167),
    u = n(734057),
    d = n(71393),
    c = n(480595),
    h = n(290863),
    A = n(994500),
    f = n(287809),
    y = n(645959),
    g = n(652215);
let m = [s.rD.TEXT_CHANNEL, s.rD.GROUP_DM, s.rD.USER],
    x = null,
    p = null,
    v = [],
    w = [];
function E(e) {
    (v = [...v, e]), (w = w.map((e) => ({ ...e, sent: v.includes(e.data.record.id) }))), C.emitChange();
}
function I() {
    (x = null), null != l && (l.destroy(), (l = null)), null != p && p();
}
function _() {
    let e = null != x && null != x.application_id ? c.A.getApplicationActivity(x.application_id) : null;
    if (null != x && (null == e || null == e.party || null == e.party.id)) return I();
}
class O extends r.Ay.Store {
    static displayName = "ActivityInviteModalStore";
    initialize() {
        this.waitFor(u.A, d.A, c.A, h.A, y.A, f.default);
    }
    getActivity() {
        return x;
    }
    getQuery() {
        return l?.query ?? "";
    }
    getResults() {
        return w;
    }
}
let C = new O(i.h, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
            (x = e.activity),
                (p = e.resolve),
                (v = []),
                null == l &&
                    (l = new s.Ay(
                        (e, t) => {
                            let n;
                            (w = (
                                "" === t.trim()
                                    ? ((n = []),
                                      y.A.getPrivateChannelIds().forEach((e) => {
                                          let t = u.A.getChannel(e);
                                          if (null != t)
                                              if (t.type === g.rbe.DM) {
                                                  let e = t.getRecipientId(),
                                                      l = null != e ? f.default.getUser(e) : null;
                                                  null != l && n.push({ type: s.rD.USER, record: l, score: 0 });
                                              } else
                                                  t.isMultiUserDM() &&
                                                      n.push({ type: s.rD.GROUP_DM, record: t, score: 0 });
                                      }),
                                      n)
                                    : e
                            )
                                .map((e) => {
                                    switch (e.type) {
                                        case s.rD.USER: {
                                            let { record: t } = e;
                                            return {
                                                type: s.rD.USER,
                                                sent: v.includes(t.id),
                                                status: h.A.getStatus(t.id),
                                                data: e,
                                            };
                                        }
                                        case s.rD.TEXT_CHANNEL: {
                                            let { record: t } = e,
                                                n = u.A.getChannel(t.parent_id),
                                                l = d.A.getGuild(t.guild_id);
                                            return {
                                                type: s.rD.TEXT_CHANNEL,
                                                sent: v.includes(t.id),
                                                categoryName: null != n ? (0, o.m1)(n, f.default, A.A) : "",
                                                guildName: l?.name ?? "",
                                                data: e,
                                            };
                                        }
                                        case s.rD.GROUP_DM: {
                                            let { record: t } = e;
                                            return { type: s.rD.GROUP_DM, sent: v.includes(t.id), data: e };
                                        }
                                        default:
                                            return null;
                                    }
                                })
                                .filter((e) => null != e)),
                                C.emitChange();
                        },
                        m,
                        100,
                    )),
                l.search("");
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
            let { query: t } = e;
            null != l && l.search(t);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
            if (null == x) return;
            let t = e.channelId,
                n = e.userId;
            null != t
                ? a.A.sendActivityInvite({
                      channelId: t,
                      type: g.xL.JOIN,
                      activity: x,
                      location: "Channel Text Area - Invite to Join Modal",
                  }).then(() => E(t))
                : null != n &&
                  a.A.sendActivityInviteUser({
                      userId: n,
                      type: g.xL.JOIN,
                      activity: x,
                      location: "Channel Text Area - Invite to Join Modal",
                  }).then(() => E(n));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: I,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t } = e;
            return !!t && null != x && (I(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: _,
        RPC_APP_DISCONNECTED: _,
    }),
    N = 21552 == n.j ? C : null;
