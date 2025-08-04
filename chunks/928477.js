(n.d(t, {
    JA: () => M,
    Jw: () => w,
    Od: () => k,
    Wj: () => U,
    gK: () => j,
    oD: () => L,
    vH: () => D
}),
    n(35282),
    n(704826),
    n(539854),
    n(388685));
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
    h = n(48854),
    m = n(467798),
    g = n(592125),
    E = n(703558),
    b = n(375954),
    y = n(300429),
    O = n(70956),
    v = n(630388),
    I = n(709054),
    T = n(861990),
    S = n(968437),
    A = n(665906),
    N = n(456077),
    C = n(124368),
    R = n(981631),
    P = n(388032),
    w = (function (e) {
        return ((e[(e.Disabled = 1)] = 'Disabled'), (e[(e.Enabled = 2)] = 'Enabled'), (e[(e.PrivateOnly = 3)] = 'PrivateOnly'), e);
    })({});
function D(e) {
    let t = (0, A.NE)(e);
    return (0, A.Xu)(e) ? (t ? 2 : 3) : 1;
}
function L(e, t) {
    var n;
    return 3 === t || (null != (n = e.isPrivate) && n);
}
function x(e, t) {
    return e.length > t ? e.substring(0, t) + '...' : e;
}
function k(e, t) {
    var n, r, i, a, o, s, l;
    let c = null == t ? null : b.Z.getMessage(e.id, t),
        u = null != (o = null == c || null == (r = c.embeds) || null == (n = r[0]) ? void 0 : n.rawTitle) ? o : '',
        d = null != (s = null == c || null == (a = c.poll) || null == (i = a.question) ? void 0 : i.text) ? s : '';
    if ('' !== u) return x(u, 40);
    {
        if ('' !== d) return x(d, 80);
        let t = p.ZP.unparse(null != (l = null == c ? void 0 : c.content) ? l : '', e.id, !0),
            n = (0, N.Z)(t.split('\n')[0], !0);
        n = n.replace(/^[ #-]+/, '');
        let r = [];
        for (;;) {
            let e = n.match(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/);
            if (null == e || null == e.index) {
                r.push(n);
                break;
            }
            (r.push(n.substring(0, e.index)), r.push(e[0]), (n = n.substring(e.index + e[0].length)));
        }
        let i = r[0];
        for (let e = 1; e < r.length; e++) {
            let t = i + r[e];
            if (t.length > 40) break;
            i = t;
        }
        return x(i, 40);
    }
}
function M(e) {
    let { parentChannel: t, parentMessageId: n, threadSettings: a, privateThreadMode: o, location: l, onThreadCreated: u, useDefaultThreadName: d, uploadHandler: f } = e;
    return r.useCallback(
        async (e, r, _) => {
            var p;
            let h = null == n,
                m = L(a, o),
                b = null != (p = a.name) ? p : '';
            if ('' === b && d) {
                let e = k(t, n);
                b = '' !== e ? e : P.intl.string(P.t['7Xm5QE']);
            }
            let y = (0, S.WD)(t),
                O = g.Z.getChannel(I.default.castMessageIdAsChannelId(n)),
                v = await B(t, [], void 0, () => {
                    let e = null != n ? R.ANM.CHANNEL_MESSAGE_THREADS(t.id, n) : R.ANM.CHANNEL_THREADS(t.id);
                    return i.tn.post({
                        url: e,
                        body: {
                            name: b,
                            type: m ? R.d4z.PRIVATE_THREAD : t.type === R.d4z.GUILD_ANNOUNCEMENT ? R.d4z.ANNOUNCEMENT_THREAD : R.d4z.PUBLIC_THREAD,
                            auto_archive_duration: y,
                            location: l
                        },
                        rejectWithError: !1
                    });
                });
            (v !== O && (s.Z.clearDraft(t.id, E.d.ThreadSettings), s.Z.clearDraft(t.id, E.d.FirstThreadMessage), null == u || u(v), (h || e.length > 0 || (null != r && r.length > 0) || (null != _ && _.length > 0)) && G(v, e, r, _, f)), c.Z.clearAll(t.id, E.d.FirstThreadMessage));
        },
        [t, n, a, u, o, l, d, f]
    );
}
function j(e, t, n, r, a) {
    return B(e, [], void 0, () =>
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
function U(e) {
    let { parentChannel: t, name: n, appliedTags: a, analyticsLocations: o, onThreadCreated: l, upload: u } = e;
    return r.useCallback(
        async (e, r, d) => {
            let p,
                h = 0,
                [g, b] = (0, m.Z)(e);
            g && ((e = b), (h = (0, v.pj)(h, R.iLy.SUPPRESS_NOTIFICATIONS)));
            let y = (0, S.WD)(t, null),
                O = R.ANM.CHANNEL_THREADS(t.id) + '?use_nested_fields=true',
                I = {
                    name: n,
                    auto_archive_duration: y,
                    applied_tags: a,
                    message: {
                        content: e,
                        sticker_ids: r,
                        flags: 0 !== h ? h : void 0
                    }
                };
            if (null != d && d.length > 0)
                try {
                    let e = await u(d);
                    ((p = e.uploaderFile), (I.message.attachments = e.files.map((e, t) => (0, T.B)(e, t))));
                } catch (i) {
                    let { file: e, code: n, reason: r } = i;
                    throw (
                        (0, _.A)({
                            file: e,
                            guildId: t.getGuildId(),
                            analyticsLocations: null != o ? o : [],
                            code: n,
                            reason: r
                        }),
                        i
                    );
                }
            let A = await B(t, o, p, () =>
                i.tn.post({
                    url: O,
                    body: I,
                    rejectWithError: !1
                })
            );
            return (
                s.Z.clearDraft(t.id, E.d.ThreadSettings),
                s.Z.clearDraft(t.id, E.d.FirstThreadMessage),
                c.Z.clearAll(t.id, E.d.FirstThreadMessage),
                (0, f.Je)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: A.id
                }),
                null == l || l(A),
                A
            );
        },
        [t, n, a, l, o, u]
    );
}
function G(e, t, n, r, i) {
    if (null != i && null != r && r.length > 0) i(e, r, t, n);
    else if (null != n && n.length > 0) return l.Z.sendStickers(e.id, n, t);
    else return l.Z.sendMessage(e.id, p.ZP.parse(e, t));
}
async function B(e, t, n, r) {
    let i,
        s = e.isForumLikeChannel();
    try {
        ((i = await r()),
            null == i.body
                ? o.Z.show({
                      title: P.intl.string(P.t.j2d6Ki),
                      body: P.intl.string(P.t.fEptJC)
                  })
                : (a.Z.dispatch({
                      type: 'SLOWMODE_RESET_COOLDOWN',
                      slowmodeType: y.S.CreateThread,
                      channelId: e.id
                  }),
                  a.Z.dispatch({
                      type: 'THREAD_CREATE_LOCAL',
                      channelId: i.body.id
                  })));
    } catch (r) {
        var c, f, p, m, E, b, v, I, T;
        if ((null == (c = r.body) ? void 0 : c.code) === R.evJ.TOO_MANY_THREADS)
            o.Z.show({
                title: s ? P.intl.string(P.t.vWNFk5) : P.intl.string(P.t['1KEdvL']),
                body: s ? P.intl.string(P.t.KGaiEB) : P.intl.string(P.t.P0wT5e)
            });
        else if ((null == (f = r.body) ? void 0 : f.code) === R.evJ.TOO_MANY_ANNOUNCEMENT_THREADS)
            o.Z.show({
                title: P.intl.string(P.t['1KEdvL']),
                body: P.intl.string(P.t.jDMxz8)
            });
        else if ((null == (p = r.body) ? void 0 : p.code) === R.evJ.SLOWMODE_RATE_LIMITED) {
            let t = null != (b = r.body.retry_after) ? b : 0;
            t > 0 &&
                a.Z.dispatch({
                    type: 'SLOWMODE_SET_COOLDOWN',
                    channelId: e.id,
                    slowmodeType: y.S.CreateThread,
                    cooldownMs: t * O.Z.Millis.SECOND
                });
        } else if (429 === r.status)
            o.Z.show({
                title: s ? P.intl.string(P.t.vWNFk5) : P.intl.string(P.t['1KEdvL']),
                body: P.intl.string(P.t['Whhv4+'])
            });
        else if (C.fZ.has(null == (m = r.body) ? void 0 : m.code)) throw r;
        else if (C.RN.has(null == (E = r.body) ? void 0 : E.code)) {
            if (null != n)
                if ((null == (v = r.body) ? void 0 : v.code) === R.evJ.EXPLICIT_CONTENT) {
                    let t = (0, h.r)();
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
                        reason: null == (T = r.body) ? void 0 : T.reason
                    });
            return new Promise((e, t) => {
                (null == r.body && t(),
                    u.Z.addConditionalChangeListener(() => {
                        let n = u.Z.getAndDeleteMostRecentUserCreatedThreadId();
                        if (null != n) {
                            let r = g.Z.getChannel(n);
                            return (
                                a.Z.wait(() => {
                                    null == r ? t() : e(r);
                                }),
                                !1
                            );
                        }
                    }));
            });
        } else
            o.Z.show({
                title: P.intl.string(P.t.j2d6Ki),
                body: P.intl.string(P.t.fEptJC)
            });
    }
    let S = await new Promise((e, t) => {
        (null == i.body && t(),
            g.Z.addConditionalChangeListener(() => {
                let t = g.Z.getChannel(i.body.id);
                if (null != t)
                    return (
                        a.Z.wait(() => {
                            e(t);
                        }),
                        !1
                    );
            }));
    });
    try {
        await l.Z.fetchMessages({
            channelId: S.id,
            limit: R.AQB
        });
    } catch (e) {}
    return S;
}
