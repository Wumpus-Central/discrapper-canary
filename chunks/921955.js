let n;
l.d(t, { A: () => D }), l(321073);
var a = l(17928),
    r = l(228366),
    s = l(308368),
    i = l(115718),
    u = l(47167),
    o = l(734057),
    c = l(71393),
    d = l(375492),
    h = l(290863),
    x = l(994500),
    f = l(287809),
    y = l(567761),
    p = l(652215);
let g = [i.rD.TEXT_CHANNEL, i.rD.GROUP_DM, i.rD.USER],
    A = null,
    v = null,
    m = [],
    _ = [];
function I(e) {
    (m = [...m, e]), (_ = _.map((e) => ({ ...e, sent: m.includes(e.data.record.id) }))), w.emitChange();
}
function M() {
    (A = null), null != n && (n.destroy(), (n = null)), null != v && v();
}
function E() {
    let e = null != A && null != A.application_id ? d.A.getApplicationActivity(A.application_id) : null;
    if (null != A && (null == e || null == e.party || null == e.party.id)) return M();
}
class C extends a.Ay.Store {
    static displayName = "ActivityInviteModalStore";
    initialize() {
        this.waitFor(o.A, c.A, d.A, h.A, y.default, f.default);
    }
    getActivity() {
        return A;
    }
    getQuery() {
        return n?.query ?? "";
    }
    getResults() {
        return _;
    }
}
let w = new C(r.h, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
            (A = e.activity),
                (v = e.resolve),
                (m = []),
                null == n &&
                    (n = new i.Ay(
                        (e, t) => {
                            let l;
                            (_ = (
                                "" === t.trim()
                                    ? ((l = []),
                                      y.default.getPrivateChannelIds().forEach((e) => {
                                          let t = o.A.getChannel(e);
                                          if (null != t)
                                              if (t.type === p.rbe.DM) {
                                                  let e = t.getRecipientId(),
                                                      n = null != e ? f.default.getUser(e) : null;
                                                  null != n && l.push({ type: i.rD.USER, record: n, score: 0 });
                                              } else
                                                  t.isMultiUserDM() &&
                                                      l.push({ type: i.rD.GROUP_DM, record: t, score: 0 });
                                      }),
                                      l)
                                    : e
                            )
                                .map((e) => {
                                    switch (e.type) {
                                        case i.rD.USER: {
                                            let { record: t } = e;
                                            return {
                                                type: i.rD.USER,
                                                sent: m.includes(t.id),
                                                status: h.A.getStatus(t.id),
                                                data: e,
                                            };
                                        }
                                        case i.rD.TEXT_CHANNEL: {
                                            let { record: t } = e,
                                                l = o.A.getChannel(t.parent_id),
                                                n = c.A.getGuild(t.guild_id);
                                            return {
                                                type: i.rD.TEXT_CHANNEL,
                                                sent: m.includes(t.id),
                                                categoryName: null != l ? (0, u.m1)(l, f.default, x.A) : "",
                                                guildName: n?.name ?? "",
                                                data: e,
                                            };
                                        }
                                        case i.rD.GROUP_DM: {
                                            let { record: t } = e;
                                            return { type: i.rD.GROUP_DM, sent: m.includes(t.id), data: e };
                                        }
                                        default:
                                            return null;
                                    }
                                })
                                .filter((e) => null != e)),
                                w.emitChange();
                        },
                        g,
                        100,
                    )),
                n.search("");
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
            let { query: t } = e;
            null != n && n.search(t);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
            if (null == A) return;
            let t = e.channelId,
                l = e.userId;
            null != t
                ? s.A.sendActivityInvite({
                      channelId: t,
                      type: p.xL.JOIN,
                      activity: A,
                      location: "Channel Text Area - Invite to Join Modal",
                  }).then(() => I(t))
                : null != l &&
                  s.A.sendActivityInviteUser({
                      userId: l,
                      type: p.xL.JOIN,
                      activity: A,
                      location: "Channel Text Area - Invite to Join Modal",
                  }).then(() => I(l));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: M,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t } = e;
            return !!t && null != A && (M(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: E,
        RPC_APP_DISCONNECTED: E,
    }),
    D = 21552 == l.j ? w : null;
