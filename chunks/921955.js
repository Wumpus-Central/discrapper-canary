let r;
(n.d(t, { A: () => _ }), n(321073));
var i = n(17928),
    s = n(73153),
    l = n(308368),
    o = n(115718),
    a = n(47167),
    c = n(734057),
    u = n(71393),
    d = n(480595),
    h = n(290863),
    f = n(994500),
    p = n(287809),
    g = n(645959),
    m = n(652215);
let A = [o.rD.TEXT_CHANNEL, o.rD.GROUP_DM, o.rD.USER],
    y = null,
    v = null,
    x = [],
    w = [];
function E(e) {
    ((x = [...x, e]), (w = w.map((e) => ({ ...e, sent: x.includes(e.data.record.id) }))), O.emitChange());
}
function C() {
    ((y = null), null != r && (r.destroy(), (r = null)), null != v && v());
}
function b() {
    let e = null != y && null != y.application_id ? d.A.getApplicationActivity(y.application_id) : null;
    if (null != y && (null == e || null == e.party || null == e.party.id)) return C();
}
class N extends i.Ay.Store {
    static displayName = "ActivityInviteModalStore";
    initialize() {
        this.waitFor(c.A, u.A, d.A, h.A, g.A, p.default);
    }
    getActivity() {
        return y;
    }
    getQuery() {
        return r?.query ?? "";
    }
    getResults() {
        return w;
    }
}
let O = new N(s.h, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
            ((y = e.activity),
                (v = e.resolve),
                (x = []),
                null == r &&
                    (r = new o.Ay(
                        (e, t) => {
                            let n;
                            ((w = (
                                "" === t.trim()
                                    ? ((n = []),
                                      g.A.getPrivateChannelIds().forEach((e) => {
                                          let t = c.A.getChannel(e);
                                          if (null != t)
                                              if (t.type === m.rbe.DM) {
                                                  let e = t.getRecipientId(),
                                                      r = null != e ? p.default.getUser(e) : null;
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
                                                sent: x.includes(t.id),
                                                status: h.A.getStatus(t.id),
                                                data: e,
                                            };
                                        }
                                        case o.rD.TEXT_CHANNEL: {
                                            let { record: t } = e,
                                                n = c.A.getChannel(t.parent_id),
                                                r = u.A.getGuild(t.guild_id);
                                            return {
                                                type: o.rD.TEXT_CHANNEL,
                                                sent: x.includes(t.id),
                                                categoryName: null != n ? (0, a.m1)(n, p.default, f.A) : "",
                                                guildName: r?.name ?? "",
                                                data: e,
                                            };
                                        }
                                        case o.rD.GROUP_DM: {
                                            let { record: t } = e;
                                            return { type: o.rD.GROUP_DM, sent: x.includes(t.id), data: e };
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
                      type: m.xL.JOIN,
                      activity: y,
                      location: "Channel Text Area - Invite to Join Modal",
                  }).then(() => E(t))
                : null != n &&
                  l.A.sendActivityInviteUser({
                      userId: n,
                      type: m.xL.JOIN,
                      activity: y,
                      location: "Channel Text Area - Invite to Join Modal",
                  }).then(() => E(n));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: C,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t } = e;
            return !!t && null != y && (C(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: b,
        RPC_APP_DISCONNECTED: b,
    }),
    _ = 221552 == n.j ? O : null;
