n.d(t, {
    JA: () => L,
    Jw: () => C,
    Od: () => x,
    Wj: () => w,
    gK: () => P,
    oD: () => O,
    vH: () => R
}),
    n(757143),
    n(653041),
    n(47120);
var i = n(192379),
    r = n(544891),
    a = n(570140),
    s = n(668781),
    o = n(430742),
    l = n(904245),
    u = n(166459),
    c = n(238349),
    d = n(228392),
    f = n(957730),
    _ = n(467798),
    p = n(592125),
    h = n(703558),
    m = n(375954),
    g = n(300429),
    E = n(70956),
    v = n(630388),
    y = n(709054),
    I = n(968437),
    b = n(665906),
    T = n(456077),
    S = n(124368),
    A = n(981631),
    N = n(388032),
    C = (function (e) {
        return (e[(e.Disabled = 1)] = 'Disabled'), (e[(e.Enabled = 2)] = 'Enabled'), (e[(e.PrivateOnly = 3)] = 'PrivateOnly'), e;
    })({});
function R(e) {
    let t = (0, b.NE)(e);
    return (0, b.Xu)(e) ? (t ? 2 : 3) : 1;
}
function O(e, t) {
    var n;
    return 3 === t || (null !== (n = e.isPrivate) && void 0 !== n && n);
}
function D(e, t) {
    return e.length > t ? e.substring(0, t) + '...' : e;
}
function x(e, t) {
    var n, i, r, a, s, o, l;
    let u = null == t ? null : m.Z.getMessage(e.id, t),
        c = null !== (s = null == u ? void 0 : null === (i = u.embeds) || void 0 === i ? void 0 : null === (n = i[0]) || void 0 === n ? void 0 : n.rawTitle) && void 0 !== s ? s : '',
        d = null !== (o = null == u ? void 0 : null === (a = u.poll) || void 0 === a ? void 0 : null === (r = a.question) || void 0 === r ? void 0 : r.text) && void 0 !== o ? o : '';
    if ('' !== c) return D(c, 40);
    if ('' !== d) return D(d, 80);
    {
        let t = f.ZP.unparse(null !== (l = null == u ? void 0 : u.content) && void 0 !== l ? l : '', e.id, !0),
            n = (0, T.Z)(t.split('\n')[0], !0);
        n = n.replace(/^[ #-]+/, '');
        let i = [];
        for (;;) {
            let e = n.match(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/);
            if (null == e || null == e.index) {
                i.push(n);
                break;
            }
            i.push(n.substring(0, e.index)), i.push(e[0]), (n = n.substring(e.index + e[0].length));
        }
        let r = i[0];
        for (let e = 1; e < i.length; e++) {
            let t = r + i[e];
            if (t.length > 40) break;
            r = t;
        }
        return D(r, 40);
    }
}
function L(e) {
    let { parentChannel: t, parentMessageId: n, threadSettings: a, privateThreadMode: s, location: l, onThreadCreated: c, useDefaultThreadName: d, uploadHandler: f } = e;
    return i.useCallback(
        async (e, i, _) => {
            var m;
            let g = null == n,
                E = O(a, s),
                v = null !== (m = a.name) && void 0 !== m ? m : '';
            if ('' === v && d) {
                let e = x(t, n);
                v = '' !== e ? e : N.intl.string(N.t['7Xm5QE']);
            }
            let b = (0, I.WD)(t),
                T = p.Z.getChannel(y.default.castMessageIdAsChannelId(n)),
                S = await k(t, () => {
                    let e = null != n ? A.ANM.CHANNEL_MESSAGE_THREADS(t.id, n) : A.ANM.CHANNEL_THREADS(t.id);
                    return r.tn.post({
                        url: e,
                        body: {
                            name: v,
                            type: E ? A.d4z.PRIVATE_THREAD : t.type === A.d4z.GUILD_ANNOUNCEMENT ? A.d4z.ANNOUNCEMENT_THREAD : A.d4z.PUBLIC_THREAD,
                            auto_archive_duration: b,
                            location: l
                        },
                        rejectWithError: !1
                    });
                });
            S !== T && (o.Z.clearDraft(t.id, h.d.ThreadSettings), o.Z.clearDraft(t.id, h.d.FirstThreadMessage), null == c || c(S), (g || e.length > 0 || (null != i && i.length > 0) || (null != _ && _.length > 0)) && M(S, e, i, _, f)), u.Z.clearAll(t.id, h.d.FirstThreadMessage);
        },
        [t, n, a, c, s, l, d, f]
    );
}
function P(e, t, n, i, a) {
    return k(e, () =>
        r.tn.post({
            url: A.ANM.CHANNEL_THREADS(e.id),
            body: {
                name: t,
                type: n,
                auto_archive_duration: i,
                location: a
            },
            rejectWithError: !1
        })
    );
}
function w(e) {
    let { parentChannel: t, name: n, appliedTags: a, onThreadCreated: s, upload: l } = e;
    return i.useCallback(
        async (e, i, c) => {
            let f = 0,
                [p, m] = (0, _.Z)(e);
            p && ((e = m), (f = (0, v.pj)(f, A.iLy.SUPPRESS_NOTIFICATIONS)));
            let g = (0, I.WD)(t, null),
                E = A.ANM.CHANNEL_THREADS(t.id) + '?use_nested_fields=true',
                y = {
                    name: n,
                    auto_archive_duration: g,
                    applied_tags: a,
                    message: {
                        content: e,
                        sticker_ids: i,
                        flags: 0 !== f ? f : void 0
                    }
                },
                b = await k(t, () =>
                    null != c && c.length > 0
                        ? l(E, y, c)
                        : r.tn.post({
                              url: E,
                              body: y,
                              rejectWithError: !1
                          })
                );
            return (
                o.Z.clearDraft(t.id, h.d.ThreadSettings),
                o.Z.clearDraft(t.id, h.d.FirstThreadMessage),
                u.Z.clearAll(t.id, h.d.FirstThreadMessage),
                (0, d.Je)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: b.id
                }),
                null == s || s(b),
                b
            );
        },
        [t, n, s, a, l]
    );
}
function M(e, t, n, i, r) {
    if (null != r && null != i && i.length > 0) r(e, i, t, n);
    else if (null != n && n.length > 0) return l.Z.sendStickers(e.id, n, t);
    else return l.Z.sendMessage(e.id, f.ZP.parse(e, t));
}
async function k(e, t) {
    let n;
    let i = e.isForumLikeChannel();
    try {
        (n = await t()),
            null == n.body
                ? s.Z.show({
                      title: N.intl.string(N.t.j2d6Ki),
                      body: N.intl.string(N.t.fEptJC)
                  })
                : (a.Z.dispatch({
                      type: 'SLOWMODE_RESET_COOLDOWN',
                      slowmodeType: g.S.CreateThread,
                      channelId: e.id
                  }),
                  a.Z.dispatch({
                      type: 'THREAD_CREATE_LOCAL',
                      channelId: n.body.id
                  }));
    } catch (t) {
        var r, o, u, d, f, _;
        if ((null === (r = t.body) || void 0 === r ? void 0 : r.code) === A.evJ.TOO_MANY_THREADS)
            s.Z.show({
                title: i ? N.intl.string(N.t.vWNFk5) : N.intl.string(N.t['1KEdvL']),
                body: i ? N.intl.string(N.t.KGaiEB) : N.intl.string(N.t.P0wT5e)
            });
        else if ((null === (o = t.body) || void 0 === o ? void 0 : o.code) === A.evJ.TOO_MANY_ANNOUNCEMENT_THREADS)
            s.Z.show({
                title: N.intl.string(N.t['1KEdvL']),
                body: N.intl.string(N.t.jDMxz8)
            });
        else if ((null === (u = t.body) || void 0 === u ? void 0 : u.code) === A.evJ.SLOWMODE_RATE_LIMITED) {
            let n = null !== (_ = t.body.retry_after) && void 0 !== _ ? _ : 0;
            n > 0 &&
                a.Z.dispatch({
                    type: 'SLOWMODE_SET_COOLDOWN',
                    channelId: e.id,
                    slowmodeType: g.S.CreateThread,
                    cooldownMs: n * E.Z.Millis.SECOND
                });
        } else if (429 === t.status)
            s.Z.show({
                title: i ? N.intl.string(N.t.vWNFk5) : N.intl.string(N.t['1KEdvL']),
                body: N.intl.string(N.t['Whhv4+'])
            });
        else if (S.fZ.has(null === (d = t.body) || void 0 === d ? void 0 : d.code)) throw t;
        else {
            if (S.RN.has(null === (f = t.body) || void 0 === f ? void 0 : f.code))
                return new Promise((e, n) => {
                    null == t.body && n(),
                        c.Z.addConditionalChangeListener(() => {
                            let t = c.Z.getAndDeleteMostRecentUserCreatedThreadId();
                            if (null != t) {
                                let i = p.Z.getChannel(t);
                                return (
                                    a.Z.wait(() => {
                                        null == i ? n() : e(i);
                                    }),
                                    !1
                                );
                            }
                        });
                });
            s.Z.show({
                title: N.intl.string(N.t.j2d6Ki),
                body: N.intl.string(N.t.fEptJC)
            });
        }
    }
    let h = await new Promise((e, t) => {
        null == n.body && t(),
            p.Z.addConditionalChangeListener(() => {
                let t = p.Z.getChannel(n.body.id);
                if (null != t)
                    return (
                        a.Z.wait(() => {
                            e(t);
                        }),
                        !1
                    );
            });
    });
    try {
        await l.Z.fetchMessages({
            channelId: h.id,
            limit: A.AQB
        });
    } catch (e) {}
    return h;
}
