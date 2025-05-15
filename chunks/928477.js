n.d(t, {
    JA: () => j,
    Jw: () => D,
    Od: () => M,
    Wj: () => G,
    gK: () => U,
    oD: () => x,
    vH: () => L
}),
    n(35282),
    n(704826),
    n(539854),
    n(388685);
var r = n(73800),
    i = n(544891),
    a = n(570140),
    o = n(668781),
    s = n(430742),
    l = n(904245),
    c = n(166459),
    u = n(238349),
    d = n(577347),
    f = n(228392),
    _ = n(58873),
    p = n(957730),
    h = n(608530),
    m = n(48854),
    g = n(467798),
    E = n(592125),
    b = n(703558),
    y = n(375954),
    O = n(300429),
    v = n(70956),
    I = n(630388),
    S = n(709054),
    T = n(861990),
    A = n(968437),
    N = n(665906),
    C = n(456077),
    P = n(124368),
    R = n(981631),
    w = n(388032),
    D = (function (e) {
        return (e[(e.Disabled = 1)] = 'Disabled'), (e[(e.Enabled = 2)] = 'Enabled'), (e[(e.PrivateOnly = 3)] = 'PrivateOnly'), e;
    })({});
function L(e) {
    let t = (0, N.NE)(e);
    return (0, N.Xu)(e) ? (t ? 2 : 3) : 1;
}
function x(e, t) {
    var n;
    return 3 === t || (null != (n = e.isPrivate) && n);
}
function k(e, t) {
    return e.length > t ? e.substring(0, t) + '...' : e;
}
function M(e, t) {
    var n, r, i, a, o, s, l;
    let c = null == t ? null : y.Z.getMessage(e.id, t),
        u = null != (o = null == c || null == (r = c.embeds) || null == (n = r[0]) ? void 0 : n.rawTitle) ? o : '',
        d = null != (s = null == c || null == (a = c.poll) || null == (i = a.question) ? void 0 : i.text) ? s : '';
    if ('' !== u) return k(u, 40);
    {
        if ('' !== d) return k(d, 80);
        let t = p.ZP.unparse(null != (l = null == c ? void 0 : c.content) ? l : '', e.id, !0),
            n = (0, C.Z)(t.split('\n')[0], !0);
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
        return k(i, 40);
    }
}
function j(e) {
    let { parentChannel: t, parentMessageId: n, threadSettings: a, privateThreadMode: o, location: l, onThreadCreated: u, useDefaultThreadName: d, uploadHandler: f } = e;
    return r.useCallback(
        async (e, r, _) => {
            var p;
            let h = null == n,
                m = x(a, o),
                g = null != (p = a.name) ? p : '';
            if ('' === g && d) {
                let e = M(t, n);
                g = '' !== e ? e : w.intl.string(w.t['7Xm5QE']);
            }
            let y = (0, A.WD)(t),
                O = E.Z.getChannel(S.default.castMessageIdAsChannelId(n)),
                v = await F(t, [], void 0, () => {
                    let e = null != n ? R.ANM.CHANNEL_MESSAGE_THREADS(t.id, n) : R.ANM.CHANNEL_THREADS(t.id);
                    return i.tn.post({
                        url: e,
                        body: {
                            name: g,
                            type: m ? R.d4z.PRIVATE_THREAD : t.type === R.d4z.GUILD_ANNOUNCEMENT ? R.d4z.ANNOUNCEMENT_THREAD : R.d4z.PUBLIC_THREAD,
                            auto_archive_duration: y,
                            location: l
                        },
                        rejectWithError: !1
                    });
                });
            v !== O && (s.Z.clearDraft(t.id, b.d.ThreadSettings), s.Z.clearDraft(t.id, b.d.FirstThreadMessage), null == u || u(v), (h || e.length > 0 || (null != r && r.length > 0) || (null != _ && _.length > 0)) && B(v, e, r, _, f)), c.Z.clearAll(t.id, b.d.FirstThreadMessage);
        },
        [t, n, a, u, o, l, d, f]
    );
}
function U(e, t, n, r, a) {
    return F(e, [], void 0, () =>
        i.tn.post({
            url: R.ANM.CHANNEL_THREADS(e.id),
            body: {
                name: t,
                type: n,
                auto_archive_duration: r,
                location: a
            },
            rejectWithError: !1
        })
    );
}
function G(e) {
    let { parentChannel: t, name: n, appliedTags: a, analyticsLocations: o, onThreadCreated: l, upload: u, uploadSimple: d } = e;
    return r.useCallback(
        async (e, r, p) => {
            let m,
                E = 0,
                [y, O] = (0, g.Z)(e);
            y && ((e = O), (E = (0, I.pj)(E, R.iLy.SUPPRESS_NOTIFICATIONS)));
            let v = (0, A.WD)(t, null),
                S = R.ANM.CHANNEL_THREADS(t.id) + '?use_nested_fields=true',
                N = {
                    name: n,
                    auto_archive_duration: v,
                    applied_tags: a,
                    message: {
                        content: e,
                        sticker_ids: r,
                        flags: 0 !== E ? E : void 0
                    }
                };
            if (null != d && (0, h.L)('useCreateForumPostCommon')) {
                let e;
                if (null != p && p.length > 0)
                    try {
                        let t = await d(p);
                        (e = t.uploaderFile), (N.message.attachments = t.files.map((e, t) => (0, T.B)(e, t)));
                    } catch (i) {
                        let { file: e, code: n, reason: r } = i;
                        throw (
                            ((0, _.A)({
                                file: e,
                                guildId: t.getGuildId(),
                                analyticsLocations: null != o ? o : [],
                                code: n,
                                reason: r
                            }),
                            i)
                        );
                    }
                m = await F(t, o, e, () =>
                    i.tn.post({
                        url: S,
                        body: N,
                        rejectWithError: !1
                    })
                );
            } else
                m = await F(t, o, void 0, () =>
                    null != p && p.length > 0
                        ? u(S, N, p)
                        : i.tn.post({
                              url: S,
                              body: N,
                              rejectWithError: !1
                          })
                );
            return (
                s.Z.clearDraft(t.id, b.d.ThreadSettings),
                s.Z.clearDraft(t.id, b.d.FirstThreadMessage),
                c.Z.clearAll(t.id, b.d.FirstThreadMessage),
                (0, f.Je)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: m.id
                }),
                null == l || l(m),
                m
            );
        },
        [t, n, a, l, o, d, u]
    );
}
function B(e, t, n, r, i) {
    if (null != i && null != r && r.length > 0) i(e, r, t, n);
    else if (null != n && n.length > 0) return l.Z.sendStickers(e.id, n, t);
    else return l.Z.sendMessage(e.id, p.ZP.parse(e, t));
}
async function F(e, t, n, r) {
    let i,
        s = e.isForumLikeChannel();
    try {
        (i = await r()),
            null == i.body
                ? o.Z.show({
                      title: w.intl.string(w.t.j2d6Ki),
                      body: w.intl.string(w.t.fEptJC)
                  })
                : (a.Z.dispatch({
                      type: 'SLOWMODE_RESET_COOLDOWN',
                      slowmodeType: O.S.CreateThread,
                      channelId: e.id
                  }),
                  a.Z.dispatch({
                      type: 'THREAD_CREATE_LOCAL',
                      channelId: i.body.id
                  }));
    } catch (r) {
        var c, f, p, h, g, b, y, I, S;
        if ((null == (c = r.body) ? void 0 : c.code) === R.evJ.TOO_MANY_THREADS)
            o.Z.show({
                title: s ? w.intl.string(w.t.vWNFk5) : w.intl.string(w.t['1KEdvL']),
                body: s ? w.intl.string(w.t.KGaiEB) : w.intl.string(w.t.P0wT5e)
            });
        else if ((null == (f = r.body) ? void 0 : f.code) === R.evJ.TOO_MANY_ANNOUNCEMENT_THREADS)
            o.Z.show({
                title: w.intl.string(w.t['1KEdvL']),
                body: w.intl.string(w.t.jDMxz8)
            });
        else if ((null == (p = r.body) ? void 0 : p.code) === R.evJ.SLOWMODE_RATE_LIMITED) {
            let t = null != (b = r.body.retry_after) ? b : 0;
            t > 0 &&
                a.Z.dispatch({
                    type: 'SLOWMODE_SET_COOLDOWN',
                    channelId: e.id,
                    slowmodeType: O.S.CreateThread,
                    cooldownMs: t * v.Z.Millis.SECOND
                });
        } else if (429 === r.status)
            o.Z.show({
                title: s ? w.intl.string(w.t.vWNFk5) : w.intl.string(w.t['1KEdvL']),
                body: w.intl.string(w.t['Whhv4+'])
            });
        else if (P.fZ.has(null == (h = r.body) ? void 0 : h.code)) throw r;
        else if (P.RN.has(null == (g = r.body) ? void 0 : g.code)) {
            if (null != n)
                if ((null == (y = r.body) ? void 0 : y.code) === R.evJ.EXPLICIT_CONTENT) {
                    let t = (0, m.r)();
                    null != r.body.attachments &&
                        r.body.attachments.length > 0 &&
                        (a.Z.dispatch({
                            type: 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE',
                            messageId: t,
                            channelId: e.id,
                            attachments: r.body.attachments
                        }),
                        (0, d.Z)(e.id, t));
                } else
                    (0, _.A)({
                        file: n,
                        guildId: e.getGuildId(),
                        analyticsLocations: null != t ? t : [],
                        code: null == (I = r.body) ? void 0 : I.code,
                        reason: null == (S = r.body) ? void 0 : S.reason
                    });
            return new Promise((e, t) => {
                null == r.body && t(),
                    u.Z.addConditionalChangeListener(() => {
                        let n = u.Z.getAndDeleteMostRecentUserCreatedThreadId();
                        if (null != n) {
                            let r = E.Z.getChannel(n);
                            return (
                                a.Z.wait(() => {
                                    null == r ? t() : e(r);
                                }),
                                !1
                            );
                        }
                    });
            });
        } else
            o.Z.show({
                title: w.intl.string(w.t.j2d6Ki),
                body: w.intl.string(w.t.fEptJC)
            });
    }
    let T = await new Promise((e, t) => {
        null == i.body && t(),
            E.Z.addConditionalChangeListener(() => {
                let t = E.Z.getChannel(i.body.id);
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
            channelId: T.id,
            limit: R.AQB
        });
    } catch (e) {}
    return T;
}
