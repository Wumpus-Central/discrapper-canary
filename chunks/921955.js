let r;
(n.d(t, { A: () => _ }), n(321073));
var i = n(17928),
    s = n(73153),
    l = n(308368),
    o = n(115718),
    a = n(47167),
    d = n(734057),
    u = n(71393),
    c = n(480595),
    h = n(290863),
    f = n(994500),
    g = n(287809),
    m = n(645959),
    p = n(652215);
let A = [o.rD.TEXT_CHANNEL, o.rD.GROUP_DM, o.rD.USER],
    y = null,
    v = null,
    w = [],
    x = [];
function E(e) {
    ((w = [...w, e]), (x = x.map((e) => ({ ...e, sent: w.includes(e.data.record.id) }))), O.emitChange());
}
function b() {
    ((y = null), null != r && (r.destroy(), (r = null)), null != v && v());
}
function C() {
    let e = null != y && null != y.application_id ? c.A.getApplicationActivity(y.application_id) : null;
    if (null != y && (null == e || null == e.party || null == e.party.id)) return b();
}
class N extends i.Ay.Store {
    static displayName = "ActivityInviteModalStore";
    initialize() {
        this.waitFor(d.A, u.A, c.A, h.A, m.A, g.default);
    }
    getActivity() {
        return y;
    }
    getQuery() {
        return r?.query ?? "";
    }
    getResults() {
        return x;
    }
}
let O = new N(s.h, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
            ((y = e.activity),
                (v = e.resolve),
                (w = []),
                null == r &&
                    (r = new o.Ay(
                        (e, t) => {
                            let n;
                            ((x = (
                                "" === t.trim()
                                    ? ((n = []),
                                      m.A.getPrivateChannelIds().forEach((e) => {
                                          let t = d.A.getChannel(e);
                                          if (null != t)
                                              if (t.type === p.rbe.DM) {
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
                                                data: e,
                                            };
                                        }
                                        case o.rD.TEXT_CHANNEL: {
                                            let { record: t } = e,
                                                n = d.A.getChannel(t.parent_id),
                                                r = u.A.getGuild(t.guild_id);
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
                                O.emitChange());
                        },
                        A,
                        100,
                    )),
                r.search(""));
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
            let { query: t } = e;
            null != r && r.search(t);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
            if (null == y) return;
            let t = e.channelId,
                n = e.userId;
            null != t
                ? l.A.sendActivityInvite({
                      channelId: t,
                      type: p.xL.JOIN,
                      activity: y,
                      location: "Channel Text Area - Invite to Join Modal",
                  }).then(() => E(t))
                : null != n &&
                  l.A.sendActivityInviteUser({
                      userId: n,
                      type: p.xL.JOIN,
                      activity: y,
                      location: "Channel Text Area - Invite to Join Modal",
                  }).then(() => E(n));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: b,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t } = e;
            return !!t && null != y && (b(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: C,
        RPC_APP_DISCONNECTED: C,
    }),
    _ = 221552 == n.j ? O : null;
