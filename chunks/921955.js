let r;
n.d(t, { A: () => _ }), n(321073);
var i = n(17928),
    s = n(228366),
    o = n(308368),
    l = n(115718),
    a = n(47167),
    c = n(734057),
    u = n(71393),
    d = n(480595),
    h = n(290863),
    f = n(994500),
    p = n(287809),
    m = n(645959),
    g = n(652215);
let A = [l.rD.TEXT_CHANNEL, l.rD.GROUP_DM, l.rD.USER],
    v = null,
    y = null,
    x = [],
    w = [];
function E(e) {
    (x = [...x, e]), (w = w.map((e) => ({ ...e, sent: x.includes(e.data.record.id) }))), O.emitChange();
}
function C() {
    (v = null), null != r && (r.destroy(), (r = null)), null != y && y();
}
function N() {
    let e = null != v && null != v.application_id ? d.A.getApplicationActivity(v.application_id) : null;
    if (null != v && (null == e || null == e.party || null == e.party.id)) return C();
}
class b extends i.Ay.Store {
    static displayName = "ActivityInviteModalStore";
    initialize() {
        this.waitFor(c.A, u.A, d.A, h.A, m.A, p.default);
    }
    getActivity() {
        return v;
    }
    getQuery() {
        return r?.query ?? "";
    }
    getResults() {
        return w;
    }
}
let O = new b(s.h, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
            (v = e.activity),
                (y = e.resolve),
                (x = []),
                null == r &&
                    (r = new l.Ay(
                        (e, t) => {
                            let n;
                            (w = (
                                "" === t.trim()
                                    ? ((n = []),
                                      m.A.getPrivateChannelIds().forEach((e) => {
                                          let t = c.A.getChannel(e);
                                          if (null != t)
                                              if (t.type === g.rbe.DM) {
                                                  let e = t.getRecipientId(),
                                                      r = null != e ? p.default.getUser(e) : null;
                                                  null != r && n.push({ type: l.rD.USER, record: r, score: 0 });
                                              } else
                                                  t.isMultiUserDM() &&
                                                      n.push({ type: l.rD.GROUP_DM, record: t, score: 0 });
                                      }),
                                      n)
                                    : e
                            )
                                .map((e) => {
                                    switch (e.type) {
                                        case l.rD.USER: {
                                            let { record: t } = e;
                                            return {
                                                type: l.rD.USER,
                                                sent: x.includes(t.id),
                                                status: h.A.getStatus(t.id),
                                                data: e,
                                            };
                                        }
                                        case l.rD.TEXT_CHANNEL: {
                                            let { record: t } = e,
                                                n = c.A.getChannel(t.parent_id),
                                                r = u.A.getGuild(t.guild_id);
                                            return {
                                                type: l.rD.TEXT_CHANNEL,
                                                sent: x.includes(t.id),
                                                categoryName: null != n ? (0, a.m1)(n, p.default, f.A) : "",
                                                guildName: r?.name ?? "",
                                                data: e,
                                            };
                                        }
                                        case l.rD.GROUP_DM: {
                                            let { record: t } = e;
                                            return { type: l.rD.GROUP_DM, sent: x.includes(t.id), data: e };
                                        }
                                        default:
                                            return null;
                                    }
                                })
                                .filter((e) => null != e)),
                                O.emitChange();
                        },
                        A,
                        100,
                    )),
                r.search("");
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
            let { query: t } = e;
            null != r && r.search(t);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
            if (null == v) return;
            let t = e.channelId,
                n = e.userId;
            null != t
                ? o.A.sendActivityInvite({
                      channelId: t,
                      type: g.xL.JOIN,
                      activity: v,
                      location: "Channel Text Area - Invite to Join Modal",
                  }).then(() => E(t))
                : null != n &&
                  o.A.sendActivityInviteUser({
                      userId: n,
                      type: g.xL.JOIN,
                      activity: v,
                      location: "Channel Text Area - Invite to Join Modal",
                  }).then(() => E(n));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: C,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t } = e;
            return !!t && null != v && (C(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: N,
        RPC_APP_DISCONNECTED: N,
    }),
    _ = 21552 == n.j ? O : null;
