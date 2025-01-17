r.d(n, {
    JA: function () {
        return k;
    },
    Jw: function () {
        return i;
    },
    Od: function () {
        return M;
    },
    Wj: function () {
        return B;
    },
    gK: function () {
        return U;
    },
    oD: function () {
        return w;
    },
    vH: function () {
        return x;
    }
});
var i,
    a = r(757143);
var s = r(653041);
var o = r(47120);
var l = r(192379),
    u = r(544891),
    c = r(570140),
    d = r(668781),
    f = r(430742),
    _ = r(904245),
    h = r(166459),
    p = r(238349),
    m = r(228392),
    g = r(957730),
    E = r(467798),
    v = r(592125),
    I = r(703558),
    T = r(375954),
    b = r(300429),
    y = r(70956),
    S = r(630388),
    A = r(709054),
    N = r(968437),
    C = r(665906),
    R = r(456077),
    O = r(124368),
    D = r(981631),
    L = r(388032);
function x(e) {
    let n = (0, C.NE)(e);
    return (0, C.Xu)(e) ? (n ? 2 : 3) : 1;
}
function w(e, n) {
    var r;
    if (3 === n) return !0;
    return null !== (r = e.isPrivate) && void 0 !== r && r;
}
function P(e, n) {
    return e.length > n ? e.substring(0, n) + '...' : e;
}
function M(e, n) {
    var r, i, a, s, o, l, u;
    let c = null == n ? null : T.Z.getMessage(e.id, n),
        d = null !== (o = null == c ? void 0 : null === (i = c.embeds) || void 0 === i ? void 0 : null === (r = i[0]) || void 0 === r ? void 0 : r.rawTitle) && void 0 !== o ? o : '',
        f = null !== (l = null == c ? void 0 : null === (s = c.poll) || void 0 === s ? void 0 : null === (a = s.question) || void 0 === a ? void 0 : a.text) && void 0 !== l ? l : '';
    if ('' !== d) return P(d, 40);
    if ('' !== f) return P(f, 80);
    {
        let n = g.ZP.unparse(null !== (u = null == c ? void 0 : c.content) && void 0 !== u ? u : '', e.id, !0),
            r = (0, R.Z)(n.split('\n')[0], !0);
        r = r.replace(/^[ #-]+/, '');
        let i = [];
        for (;;) {
            let e = r.match(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/);
            if (null == e || null == e.index) {
                i.push(r);
                break;
            }
            i.push(r.substring(0, e.index)), i.push(e[0]), (r = r.substring(e.index + e[0].length));
        }
        let a = i[0];
        for (let e = 1; e < i.length; e++) {
            let n = a + i[e];
            if (n.length > 40) break;
            a = n;
        }
        return P(a, 40);
    }
}
function k(e) {
    let { parentChannel: n, parentMessageId: r, threadSettings: i, privateThreadMode: a, location: s, onThreadCreated: o, useDefaultThreadName: c, uploadHandler: d } = e;
    return l.useCallback(
        async (e, l, _) => {
            var p;
            let m = null == r,
                g = w(i, a),
                E = null !== (p = i.name) && void 0 !== p ? p : '';
            if ('' === E && c) {
                let e = M(n, r);
                E = '' !== e ? e : L.intl.string(L.t['7Xm5QE']);
            }
            let T = (0, N.WD)(n),
                b = v.Z.getChannel(A.default.castMessageIdAsChannelId(r)),
                y = await Z(n, () => {
                    let e = null != r ? D.ANM.CHANNEL_MESSAGE_THREADS(n.id, r) : D.ANM.CHANNEL_THREADS(n.id);
                    return u.tn.post({
                        url: e,
                        body: {
                            name: E,
                            type: g ? D.d4z.PRIVATE_THREAD : n.type === D.d4z.GUILD_ANNOUNCEMENT ? D.d4z.ANNOUNCEMENT_THREAD : D.d4z.PUBLIC_THREAD,
                            auto_archive_duration: T,
                            location: s
                        },
                        rejectWithError: !1
                    });
                });
            y !== b && (f.Z.clearDraft(n.id, I.d.ThreadSettings), f.Z.clearDraft(n.id, I.d.FirstThreadMessage), null == o || o(y), (m || e.length > 0 || (null != l && l.length > 0) || (null != _ && _.length > 0)) && G(y, e, l, _, d)), h.Z.clearAll(n.id, I.d.FirstThreadMessage);
        },
        [n, r, i, o, a, s, c, d]
    );
}
function U(e, n, r, i, a) {
    return Z(e, () =>
        u.tn.post({
            url: D.ANM.CHANNEL_THREADS(e.id),
            body: {
                name: n,
                type: r,
                auto_archive_duration: i,
                location: a
            },
            rejectWithError: !1
        })
    );
}
function B(e) {
    let { parentChannel: n, name: r, appliedTags: i, onThreadCreated: a, upload: s } = e;
    return l.useCallback(
        async (e, o, l) => {
            let c = 0,
                [d, _] = (0, E.Z)(e);
            d && ((e = _), (c = (0, S.pj)(c, D.iLy.SUPPRESS_NOTIFICATIONS)));
            let p = (0, N.WD)(n, null),
                g = D.ANM.CHANNEL_THREADS(n.id) + '?use_nested_fields=true',
                v = {
                    name: r,
                    auto_archive_duration: p,
                    applied_tags: i,
                    message: {
                        content: e,
                        sticker_ids: o,
                        flags: 0 !== c ? c : void 0
                    }
                },
                T = await Z(n, () =>
                    null != l && l.length > 0
                        ? s(g, v, l)
                        : u.tn.post({
                              url: g,
                              body: v,
                              rejectWithError: !1
                          })
                );
            return (
                f.Z.clearDraft(n.id, I.d.ThreadSettings),
                f.Z.clearDraft(n.id, I.d.FirstThreadMessage),
                h.Z.clearAll(n.id, I.d.FirstThreadMessage),
                (0, m.Je)({
                    guildId: n.guild_id,
                    channelId: n.id,
                    postId: T.id
                }),
                null == a || a(T),
                T
            );
        },
        [n, r, a, i, s]
    );
}
function G(e, n, r, i, a) {
    if (null != a && null != i && i.length > 0) a(e, i, n, r);
    else if (null != r && r.length > 0) return _.Z.sendStickers(e.id, r, n);
    else return _.Z.sendMessage(e.id, g.ZP.parse(e, n));
}
async function Z(e, n) {
    let r;
    let i = e.isForumLikeChannel();
    try {
        (r = await n()),
            null == r.body
                ? d.Z.show({
                      title: L.intl.string(L.t.j2d6Ki),
                      body: L.intl.string(L.t.fEptJC)
                  })
                : (c.Z.dispatch({
                      type: 'SLOWMODE_RESET_COOLDOWN',
                      slowmodeType: b.S.CreateThread,
                      channelId: e.id
                  }),
                  c.Z.dispatch({
                      type: 'THREAD_CREATE_LOCAL',
                      channelId: r.body.id
                  }));
    } catch (n) {
        var a, s, o, l, u, f;
        if ((null === (a = n.body) || void 0 === a ? void 0 : a.code) === D.evJ.TOO_MANY_THREADS)
            d.Z.show({
                title: i ? L.intl.string(L.t.vWNFk5) : L.intl.string(L.t['1KEdvL']),
                body: i ? L.intl.string(L.t.KGaiEB) : L.intl.string(L.t.P0wT5e)
            });
        else if ((null === (s = n.body) || void 0 === s ? void 0 : s.code) === D.evJ.TOO_MANY_ANNOUNCEMENT_THREADS)
            d.Z.show({
                title: L.intl.string(L.t['1KEdvL']),
                body: L.intl.string(L.t.jDMxz8)
            });
        else if ((null === (o = n.body) || void 0 === o ? void 0 : o.code) === D.evJ.SLOWMODE_RATE_LIMITED) {
            let r = null !== (f = n.body.retry_after) && void 0 !== f ? f : 0;
            r > 0 &&
                c.Z.dispatch({
                    type: 'SLOWMODE_SET_COOLDOWN',
                    channelId: e.id,
                    slowmodeType: b.S.CreateThread,
                    cooldownMs: r * y.Z.Millis.SECOND
                });
        } else if (429 === n.status)
            d.Z.show({
                title: i ? L.intl.string(L.t.vWNFk5) : L.intl.string(L.t['1KEdvL']),
                body: L.intl.string(L.t['Whhv4+'])
            });
        else if (O.fZ.has(null === (l = n.body) || void 0 === l ? void 0 : l.code)) throw n;
        else {
            if (O.RN.has(null === (u = n.body) || void 0 === u ? void 0 : u.code))
                return new Promise((e, r) => {
                    null == n.body && r(),
                        p.Z.addConditionalChangeListener(() => {
                            let n = p.Z.getAndDeleteMostRecentUserCreatedThreadId();
                            if (null != n) {
                                let i = v.Z.getChannel(n);
                                return (
                                    c.Z.wait(() => {
                                        null == i ? r() : e(i);
                                    }),
                                    !1
                                );
                            }
                        });
                });
            d.Z.show({
                title: L.intl.string(L.t.j2d6Ki),
                body: L.intl.string(L.t.fEptJC)
            });
        }
    }
    let h = await new Promise((e, n) => {
        null == r.body && n(),
            v.Z.addConditionalChangeListener(() => {
                let n = v.Z.getChannel(r.body.id);
                if (null != n)
                    return (
                        c.Z.wait(() => {
                            e(n);
                        }),
                        !1
                    );
            });
    });
    try {
        await _.Z.fetchMessages({
            channelId: h.id,
            limit: D.AQB
        });
    } catch (e) {}
    return h;
}
!(function (e) {
    (e[(e.Disabled = 1)] = 'Disabled'), (e[(e.Enabled = 2)] = 'Enabled'), (e[(e.PrivateOnly = 3)] = 'PrivateOnly');
})(i || (i = {}));
