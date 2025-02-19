n.d(t, {
    JA: () => D,
    Jw: () => A,
    Od: () => w,
    Wj: () => L,
    gK: () => x,
    oD: () => R,
    vH: () => C
}),
    n(301563),
    n(757143),
    n(653041),
    n(47120);
var r = n(192379),
    i = n(544891),
    o = n(570140),
    a = n(668781),
    s = n(430742),
    l = n(904245),
    c = n(166459),
    u = n(238349),
    d = n(228392),
    f = n(957730),
    p = n(467798),
    _ = n(592125),
    h = n(703558),
    m = n(375954),
    g = n(300429),
    E = n(70956),
    v = n(630388),
    b = n(709054),
    y = n(968437),
    O = n(665906),
    S = n(456077),
    I = n(124368),
    T = n(981631),
    N = n(388032),
    A = (function (e) {
        return (e[(e.Disabled = 1)] = 'Disabled'), (e[(e.Enabled = 2)] = 'Enabled'), (e[(e.PrivateOnly = 3)] = 'PrivateOnly'), e;
    })({});
function C(e) {
    let t = (0, O.NE)(e);
    return (0, O.Xu)(e) ? (t ? 2 : 3) : 1;
}
function R(e, t) {
    var n;
    return 3 === t || (null !== (n = e.isPrivate) && void 0 !== n && n);
}
function P(e, t) {
    return e.length > t ? e.substring(0, t) + '...' : e;
}
function w(e, t) {
    var n, r, i, o, a, s, l;
    let c = null == t ? null : m.Z.getMessage(e.id, t),
        u = null !== (a = null == c ? void 0 : null === (r = c.embeds) || void 0 === r ? void 0 : null === (n = r[0]) || void 0 === n ? void 0 : n.rawTitle) && void 0 !== a ? a : '',
        d = null !== (s = null == c ? void 0 : null === (o = c.poll) || void 0 === o ? void 0 : null === (i = o.question) || void 0 === i ? void 0 : i.text) && void 0 !== s ? s : '';
    if ('' !== u) return P(u, 40);
    if ('' !== d) return P(d, 80);
    {
        let t = f.ZP.unparse(null !== (l = null == c ? void 0 : c.content) && void 0 !== l ? l : '', e.id, !0),
            n = (0, S.Z)(t.split('\n')[0], !0);
        n = n.replace(/^[ #-]+/, '');
        let r = [];
        for (;;) {
            let e = n.match(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/);
            if (null == e || null == e.index) {
                r.push(n);
                break;
            }
            r.push(n.substring(0, e.index)), r.push(e[0]), (n = n.substring(e.index + e[0].length));
        }
        let i = r[0];
        for (let e = 1; e < r.length; e++) {
            let t = i + r[e];
            if (t.length > 40) break;
            i = t;
        }
        return P(i, 40);
    }
}
function D(e) {
    let { parentChannel: t, parentMessageId: n, threadSettings: o, privateThreadMode: a, location: l, onThreadCreated: u, useDefaultThreadName: d, uploadHandler: f } = e;
    return r.useCallback(
        async (e, r, p) => {
            var m;
            let g = null == n,
                E = R(o, a),
                v = null !== (m = o.name) && void 0 !== m ? m : '';
            if ('' === v && d) {
                let e = w(t, n);
                v = '' !== e ? e : N.NW.string(N.t['7Xm5QE']);
            }
            let O = (0, y.WD)(t),
                S = _.Z.getChannel(b.default.castMessageIdAsChannelId(n)),
                I = await k(t, () => {
                    let e = null != n ? T.ANM.CHANNEL_MESSAGE_THREADS(t.id, n) : T.ANM.CHANNEL_THREADS(t.id);
                    return i.tn.post({
                        url: e,
                        body: {
                            name: v,
                            type: E ? T.d4z.PRIVATE_THREAD : t.type === T.d4z.GUILD_ANNOUNCEMENT ? T.d4z.ANNOUNCEMENT_THREAD : T.d4z.PUBLIC_THREAD,
                            auto_archive_duration: O,
                            location: l
                        },
                        rejectWithError: !1
                    });
                });
            I !== S && (s.Z.clearDraft(t.id, h.d.ThreadSettings), s.Z.clearDraft(t.id, h.d.FirstThreadMessage), null == u || u(I), (g || e.length > 0 || (null != r && r.length > 0) || (null != p && p.length > 0)) && M(I, e, r, p, f)), c.Z.clearAll(t.id, h.d.FirstThreadMessage);
        },
        [t, n, o, u, a, l, d, f]
    );
}
function x(e, t, n, r, o) {
    return k(e, () =>
        i.tn.post({
            url: T.ANM.CHANNEL_THREADS(e.id),
            body: {
                name: t,
                type: n,
                auto_archive_duration: r,
                location: o
            },
            rejectWithError: !1
        })
    );
}
function L(e) {
    let { parentChannel: t, name: n, appliedTags: o, onThreadCreated: a, upload: l } = e;
    return r.useCallback(
        async (e, r, u) => {
            let f = 0,
                [_, m] = (0, p.Z)(e);
            _ && ((e = m), (f = (0, v.pj)(f, T.iLy.SUPPRESS_NOTIFICATIONS)));
            let g = (0, y.WD)(t, null),
                E = T.ANM.CHANNEL_THREADS(t.id) + '?use_nested_fields=true',
                b = {
                    name: n,
                    auto_archive_duration: g,
                    applied_tags: o,
                    message: {
                        content: e,
                        sticker_ids: r,
                        flags: 0 !== f ? f : void 0
                    }
                },
                O = await k(t, () =>
                    null != u && u.length > 0
                        ? l(E, b, u)
                        : i.tn.post({
                              url: E,
                              body: b,
                              rejectWithError: !1
                          })
                );
            return (
                s.Z.clearDraft(t.id, h.d.ThreadSettings),
                s.Z.clearDraft(t.id, h.d.FirstThreadMessage),
                c.Z.clearAll(t.id, h.d.FirstThreadMessage),
                (0, d.Je)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: O.id
                }),
                null == a || a(O),
                O
            );
        },
        [t, n, a, o, l]
    );
}
function M(e, t, n, r, i) {
    if (null != i && null != r && r.length > 0) i(e, r, t, n);
    else if (null != n && n.length > 0) return l.Z.sendStickers(e.id, n, t);
    else return l.Z.sendMessage(e.id, f.ZP.parse(e, t));
}
async function k(e, t) {
    let n;
    let r = e.isForumLikeChannel();
    try {
        (n = await t()),
            null == n.body
                ? a.Z.show({
                      title: N.NW.string(N.t.j2d6Ki),
                      body: N.NW.string(N.t.fEptJC)
                  })
                : (o.Z.dispatch({
                      type: 'SLOWMODE_RESET_COOLDOWN',
                      slowmodeType: g.S.CreateThread,
                      channelId: e.id
                  }),
                  o.Z.dispatch({
                      type: 'THREAD_CREATE_LOCAL',
                      channelId: n.body.id
                  }));
    } catch (t) {
        var i, s, c, d, f, p;
        if ((null === (i = t.body) || void 0 === i ? void 0 : i.code) === T.evJ.TOO_MANY_THREADS)
            a.Z.show({
                title: r ? N.NW.string(N.t.vWNFk5) : N.NW.string(N.t['1KEdvL']),
                body: r ? N.NW.string(N.t.KGaiEB) : N.NW.string(N.t.P0wT5e)
            });
        else if ((null === (s = t.body) || void 0 === s ? void 0 : s.code) === T.evJ.TOO_MANY_ANNOUNCEMENT_THREADS)
            a.Z.show({
                title: N.NW.string(N.t['1KEdvL']),
                body: N.NW.string(N.t.jDMxz8)
            });
        else if ((null === (c = t.body) || void 0 === c ? void 0 : c.code) === T.evJ.SLOWMODE_RATE_LIMITED) {
            let n = null !== (p = t.body.retry_after) && void 0 !== p ? p : 0;
            n > 0 &&
                o.Z.dispatch({
                    type: 'SLOWMODE_SET_COOLDOWN',
                    channelId: e.id,
                    slowmodeType: g.S.CreateThread,
                    cooldownMs: n * E.Z.Millis.SECOND
                });
        } else if (429 === t.status)
            a.Z.show({
                title: r ? N.NW.string(N.t.vWNFk5) : N.NW.string(N.t['1KEdvL']),
                body: N.NW.string(N.t['Whhv4+'])
            });
        else if (I.fZ.has(null === (d = t.body) || void 0 === d ? void 0 : d.code)) throw t;
        else {
            if (I.RN.has(null === (f = t.body) || void 0 === f ? void 0 : f.code))
                return new Promise((e, n) => {
                    null == t.body && n(),
                        u.Z.addConditionalChangeListener(() => {
                            let t = u.Z.getAndDeleteMostRecentUserCreatedThreadId();
                            if (null != t) {
                                let r = _.Z.getChannel(t);
                                return (
                                    o.Z.wait(() => {
                                        null == r ? n() : e(r);
                                    }),
                                    !1
                                );
                            }
                        });
                });
            a.Z.show({
                title: N.NW.string(N.t.j2d6Ki),
                body: N.NW.string(N.t.fEptJC)
            });
        }
    }
    let h = await new Promise((e, t) => {
        null == n.body && t(),
            _.Z.addConditionalChangeListener(() => {
                let t = _.Z.getChannel(n.body.id);
                if (null != t)
                    return (
                        o.Z.wait(() => {
                            e(t);
                        }),
                        !1
                    );
            });
    });
    try {
        await l.Z.fetchMessages({
            channelId: h.id,
            limit: T.AQB
        });
    } catch (e) {}
    return h;
}
