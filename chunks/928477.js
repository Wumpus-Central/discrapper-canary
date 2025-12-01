n.d(t, {
    JA: () => k,
    Jw: () => D,
    Od: () => M,
    Wj: () => G,
    gK: () => U,
    oD: () => L,
    vH: () => x,
}),
    n(35282),
    n(704826),
    n(539854),
    n(388685);
var r = n(473749),
    i = n(95015),
    a = n(544891),
    o = n(570140),
    s = n(668781),
    l = n(430742),
    c = n(904245),
    u = n(166459),
    d = n(238349),
    f = n(577347),
    p = n(228392),
    _ = n(58873),
    m = n(957730),
    h = n(48854),
    g = n(467798),
    E = n(592125),
    b = n(703558),
    y = n(375954),
    O = n(300429),
    v = n(70956),
    S = n(709054),
    I = n(861990),
    T = n(968437),
    A = n(665906),
    C = n(456077),
    N = n(124368),
    P = n(981631),
    R = n(959517),
    w = n(388032),
    D = (function (e) {
        return (
            (e[(e.Disabled = 1)] = "Disabled"),
            (e[(e.Enabled = 2)] = "Enabled"),
            (e[(e.PrivateOnly = 3)] = "PrivateOnly"),
            e
        );
    })({});
function x(e) {
    let t = (0, A.NE)(e);
    return (0, A.Xu)(e) ? (t ? 2 : 3) : 1;
}
function L(e, t) {
    var n;
    return 3 === t || (null != (n = e.isPrivate) && n);
}
function j(e, t) {
    return e.length > t ? e.substring(0, t) + "..." : e;
}
function M(e, t) {
    var n, r, i, a, o, s, l;
    let c = null == t ? null : y.Z.getMessage(e.id, t),
        u = null != (o = null == c || null == (r = c.embeds) || null == (n = r[0]) ? void 0 : n.rawTitle) ? o : "",
        d = null != (s = null == c || null == (a = c.poll) || null == (i = a.question) ? void 0 : i.text) ? s : "";
    if ("" !== u) return j(u, 40);
    {
        if ("" !== d) return j(d, 80);
        let t = m.ZP.unparse(null != (l = null == c ? void 0 : c.content) ? l : "", e.id, !0),
            n = (0, C.Z)(t.split("\n")[0], !0);
        n = n.replace(/^[ #-]+/, "");
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
        return j(i, 40);
    }
}
function k(e) {
    let {
        parentChannel: t,
        parentMessageId: n,
        threadSettings: i,
        privateThreadMode: o,
        location: s,
        onThreadCreated: c,
        useDefaultThreadName: d,
        uploadHandler: f,
    } = e;
    return r.useCallback(
        async (e, r, p) => {
            var _;
            let m = null == n,
                h = L(i, o),
                g = null != (_ = i.name) ? _ : "";
            if ("" === g && d) {
                let e = M(t, n);
                g = "" !== e ? e : w.intl.string(w.t["7Xm5QI"]);
            }
            let y = (0, T.WD)(t),
                O = E.Z.getChannel(S.default.castMessageIdAsChannelId(n)),
                v = await B(t, [], void 0, () => {
                    let e = null != n ? P.ANM.CHANNEL_MESSAGE_THREADS(t.id, n) : P.ANM.CHANNEL_THREADS(t.id);
                    return a.tn.post({
                        url: e,
                        body: {
                            name: g,
                            type: h
                                ? P.d4z.PRIVATE_THREAD
                                : t.type === P.d4z.GUILD_ANNOUNCEMENT
                                  ? P.d4z.ANNOUNCEMENT_THREAD
                                  : P.d4z.PUBLIC_THREAD,
                            auto_archive_duration: y,
                            location: s,
                        },
                        rejectWithError: !1,
                    });
                });
            v !== O &&
                (l.Z.clearDraft(t.id, b.d.ThreadSettings),
                l.Z.clearDraft(t.id, b.d.FirstThreadMessage),
                null == c || c(v),
                (m || e.length > 0 || (null != r && r.length > 0) || (null != p && p.length > 0)) && Z(v, e, r, p, f)),
                u.Z.clearAll(t.id, b.d.FirstThreadMessage);
        },
        [t, n, i, c, o, s, d, f],
    );
}
function U(e, t, n, r, i) {
    return B(e, [], void 0, () =>
        a.tn.post({
            url: P.ANM.CHANNEL_THREADS(e.id),
            body: {
                name: t,
                type: n,
                auto_archive_duration: r,
                location: i,
            },
            rejectWithError: !1,
        }),
    );
}
function G(e) {
    let { parentChannel: t, name: n, appliedTags: o, analyticsLocations: s, onThreadCreated: c, upload: d } = e;
    return r.useCallback(
        async (e, r, f) => {
            let m,
                h = 0,
                [E, y] = (0, g.Z)(e);
            E && ((e = y), (h = (0, i.pj)(h, P.iLy.SUPPRESS_NOTIFICATIONS)));
            let O = (0, T.WD)(t, null),
                v = P.ANM.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
                S = {
                    name: n,
                    auto_archive_duration: O,
                    applied_tags: o,
                    message: {
                        content: e,
                        sticker_ids: r,
                        flags: 0 !== h ? h : void 0,
                    },
                };
            if (null != f && f.length > 0)
                try {
                    let e = await d(f);
                    (m = e.uploaderFile), (S.message.attachments = e.files.map((e, t) => (0, I.B)(e, t)));
                } catch (i) {
                    let { file: e, code: n, reason: r } = i;
                    throw (
                        ((0, _.A)({
                            file: e,
                            guildId: t.getGuildId(),
                            analyticsLocations: null != s ? s : [],
                            code: n,
                            reason: r,
                        }),
                        i)
                    );
                }
            let A = await B(t, s, m, () =>
                a.tn.post({
                    url: v,
                    body: S,
                    rejectWithError: !1,
                }),
            );
            return (
                l.Z.clearDraft(t.id, b.d.ThreadSettings),
                l.Z.clearDraft(t.id, b.d.FirstThreadMessage),
                u.Z.clearAll(t.id, b.d.FirstThreadMessage),
                (0, p.Je)({
                    guildId: t.guild_id,
                    channelId: t.id,
                    postId: A.id,
                }),
                null == c || c(A),
                A
            );
        },
        [t, n, o, c, s, d],
    );
}
function Z(e, t, n, r, i) {
    if (null != i && null != r && r.length > 0) i(e, r, t, n);
    else if (null != n && n.length > 0) return c.Z.sendStickers(e.id, n, t, { location: R.dy.THREAD_CREATION });
    else return c.Z.sendMessage(e.id, m.ZP.parse(e, t), void 0, { location: R.dy.THREAD_CREATION });
}
async function B(e, t, n, r) {
    let i,
        a = e.isForumLikeChannel();
    try {
        (i = await r()),
            null == i.body
                ? s.Z.show({
                      title: w.intl.string(w.t.j2d6Km),
                      body: w.intl.string(w.t.fEptJP),
                  })
                : (o.Z.dispatch({
                      type: "SLOWMODE_RESET_COOLDOWN",
                      slowmodeType: O.S.CreateThread,
                      channelId: e.id,
                  }),
                  o.Z.dispatch({
                      type: "THREAD_CREATE_LOCAL",
                      channelId: i.body.id,
                  }));
    } catch (r) {
        var l, u, p, m, g, b, y, S, I;
        if ((null == (l = r.body) ? void 0 : l.code) === P.evJ.TOO_MANY_THREADS)
            s.Z.show({
                title: a ? w.intl.string(w.t.vWNFkx) : w.intl.string(w.t["1KEdvB"]),
                body: a ? w.intl.string(w.t.KGaiEK) : w.intl.string(w.t.P0wT5S),
            });
        else if ((null == (u = r.body) ? void 0 : u.code) === P.evJ.TOO_MANY_ANNOUNCEMENT_THREADS)
            s.Z.show({
                title: w.intl.string(w.t["1KEdvB"]),
                body: w.intl.string(w.t.jDMxz2),
            });
        else if ((null == (p = r.body) ? void 0 : p.code) === P.evJ.SLOWMODE_RATE_LIMITED) {
            let t = null != (b = r.body.retry_after) ? b : 0;
            t > 0 &&
                o.Z.dispatch({
                    type: "SLOWMODE_SET_COOLDOWN",
                    channelId: e.id,
                    slowmodeType: O.S.CreateThread,
                    cooldownMs: t * v.Z.Millis.SECOND,
                });
        } else if (429 === r.status)
            s.Z.show({
                title: a ? w.intl.string(w.t.vWNFkx) : w.intl.string(w.t["1KEdvB"]),
                body: w.intl.string(w.t.Whhv4w),
            });
        else if (N.fZ.has(null == (m = r.body) ? void 0 : m.code)) throw r;
        else if (N.RN.has(null == (g = r.body) ? void 0 : g.code)) {
            if (null != n)
                if ((null == (y = r.body) ? void 0 : y.code) === P.evJ.EXPLICIT_CONTENT) {
                    let t = (0, h.r)();
                    null != r.body.attachments &&
                        r.body.attachments.length > 0 &&
                        (o.Z.dispatch({
                            type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
                            messageId: t,
                            channelId: e.id,
                            attachments: r.body.attachments,
                        }),
                        (0, f.Z)(e.id, t));
                } else
                    (0, _.A)({
                        file: n,
                        guildId: e.getGuildId(),
                        analyticsLocations: null != t ? t : [],
                        code: null == (S = r.body) ? void 0 : S.code,
                        reason: null == (I = r.body) ? void 0 : I.reason,
                    });
            return new Promise((e, t) => {
                null == r.body && t(),
                    d.Z.addConditionalChangeListener(() => {
                        let n = d.Z.getAndDeleteMostRecentUserCreatedThreadId();
                        if (null != n) {
                            let r = E.Z.getChannel(n);
                            return (
                                o.Z.wait(() => {
                                    null == r ? t() : e(r);
                                }),
                                !1
                            );
                        }
                    });
            });
        } else
            s.Z.show({
                title: w.intl.string(w.t.j2d6Km),
                body: w.intl.string(w.t.fEptJP),
            });
    }
    let T = await new Promise((e, t) => {
        null == i.body && t(),
            E.Z.addConditionalChangeListener(() => {
                let t = E.Z.getChannel(i.body.id);
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
        await c.Z.fetchMessages({
            channelId: T.id,
            limit: P.AQB,
        });
    } catch (e) {}
    return T;
}
