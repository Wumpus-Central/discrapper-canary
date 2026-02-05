let i;
n.d(t, { A: () => y }), n(321073);
var l = n(311907),
    a = n(73153),
    s = n(308368),
    r = n(629357),
    o = n(47167),
    c = n(734057),
    d = n(71393),
    u = n(375492),
    h = n(290863),
    m = n(994500),
    A = n(287809),
    p = n(645959),
    g = n(652215);
let f = [r.rD.TEXT_CHANNEL, r.rD.GROUP_DM, r.rD.USER],
    _ = null,
    E = null,
    C = [],
    x = [];
function S(e) {
    (C = [...C, e]), (x = x.map((e) => ({ ...e, sent: C.includes(e.data.record.id) }))), v.emitChange();
}
function T() {
    (_ = null), null != i && (i.destroy(), (i = null)), null != E && E();
}
function I() {
    let e = null != _ && null != _.application_id ? u.A.getApplicationActivity(_.application_id) : null;
    if (null != _ && (null == e || null == e.party || null == e.party.id)) return T();
}
class N extends l.Ay.Store {
    static displayName = "ActivityInviteModalStore";
    initialize() {
        this.waitFor(c.A, d.A, u.A, h.A, p.default, A.default);
    }
    getActivity() {
        return _;
    }
    getQuery() {
        return i?.query ?? "";
    }
    getResults() {
        return x;
    }
}
let v = new N(a.h, {
        ACTIVITY_INVITE_MODAL_OPEN: function (e) {
            (_ = e.activity),
                (E = e.resolve),
                (C = []),
                null == i &&
                    (i = new r.Ay(
                        (e, t) => {
                            let n;
                            (x = (
                                "" === t.trim()
                                    ? ((n = []),
                                      p.default.getPrivateChannelIds().forEach((e) => {
                                          let t = c.A.getChannel(e);
                                          if (null != t)
                                              if (t.type === g.rbe.DM) {
                                                  let e = t.getRecipientId(),
                                                      i = null != e ? A.default.getUser(e) : null;
                                                  null != i && n.push({ type: r.rD.USER, record: i, score: 0 });
                                              } else
                                                  t.isMultiUserDM() &&
                                                      n.push({ type: r.rD.GROUP_DM, record: t, score: 0 });
                                      }),
                                      n)
                                    : e
                            )
                                .map((e) => {
                                    switch (e.type) {
                                        case r.rD.USER: {
                                            let { record: t } = e;
                                            return {
                                                type: r.rD.USER,
                                                sent: C.includes(t.id),
                                                status: h.A.getStatus(t.id),
                                                data: e,
                                            };
                                        }
                                        case r.rD.TEXT_CHANNEL: {
                                            let { record: t } = e,
                                                n = c.A.getChannel(t.parent_id),
                                                i = d.A.getGuild(t.guild_id);
                                            return {
                                                type: r.rD.TEXT_CHANNEL,
                                                sent: C.includes(t.id),
                                                categoryName: null != n ? (0, o.m1)(n, A.default, m.A) : "",
                                                guildName: i?.name ?? "",
                                                data: e,
                                            };
                                        }
                                        case r.rD.GROUP_DM: {
                                            let { record: t } = e;
                                            return { type: r.rD.GROUP_DM, sent: C.includes(t.id), data: e };
                                        }
                                        default:
                                            return null;
                                    }
                                })
                                .filter((e) => null != e)),
                                v.emitChange();
                        },
                        f,
                        100,
                    )),
                i.search("");
        },
        ACTIVITY_INVITE_MODAL_QUERY: function (e) {
            let { query: t } = e;
            null != i && i.search(t);
        },
        ACTIVITY_INVITE_MODAL_SEND: function (e) {
            if (null == _) return;
            let t = e.channelId,
                n = e.userId;
            null != t
                ? s.A.sendActivityInvite({
                      channelId: t,
                      type: g.xL.JOIN,
                      activity: _,
                      location: "Channel Text Area - Invite to Join Modal",
                  }).then(() => S(t))
                : null != n &&
                  s.A.sendActivityInviteUser({
                      userId: n,
                      type: g.xL.JOIN,
                      activity: _,
                      location: "Channel Text Area - Invite to Join Modal",
                  }).then(() => S(n));
        },
        ACTIVITY_INVITE_MODAL_CLOSE: T,
        OVERLAY_SET_INPUT_LOCKED: function (e) {
            let { locked: t } = e;
            return !!t && null != _ && (T(), !0);
        },
        LOCAL_ACTIVITY_UPDATE: I,
        RPC_APP_DISCONNECTED: I,
    }),
    y = 21552 == n.j ? v : null;
