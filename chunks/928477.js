n.d(t, {
    JA: () => j,
    Jw: () => w,
    Od: () => k,
    Wj: () => G,
    gK: () => U,
    oD: () => x,
    vH: () => L,
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
    _ = n(228392),
    p = n(58873),
    h = n(957730),
    m = n(48854),
    g = n(467798),
    E = n(592125),
    b = n(703558),
    y = n(375954),
    O = n(300429),
    v = n(70956),
    I = n(709054),
    T = n(861990),
    S = n(968437),
    A = n(665906),
    C = n(543855),
    N = n(124368),
    R = n(981631),
    P = n(959517),
    D = n(388032),
    w = (function (e) {
        return (
            (e[(e.Disabled = 1)] = "Disabled"),
            (e[(e.Enabled = 2)] = "Enabled"),
            (e[(e.PrivateOnly = 3)] = "PrivateOnly"),
            e
        );
    })({});
function L(e) {
    let t = (0, A.NE)(e);
    return (0, A.Xu)(e) ? (t ? 2 : 3) : 1;
}
function x(e, t) {
    var n;
    return 3 === t || (null != (n = e.isPrivate) && n);
}
function M(e, t) {
    return e.length > t ? e.substring(0, t) + "..." : e;
}
function k(e, t) {
    var n, r, i, a, o, s, l;
    let c = null == t ? null : y.Z.getMessage(e.id, t),
        u = null != (o = null == c || null == (r = c.embeds) || null == (n = r[0]) ? void 0 : n.rawTitle) ? o : "",
        d = null != (s = null == c || null == (a = c.poll) || null == (i = a.question) ? void 0 : i.text) ? s : "";
    if ("" !== u) return M(u, 40);
    {
        if ("" !== d) return M(d, 80);
        let t = h.ZP.unparse(null != (l = null == c ? void 0 : c.content) ? l : "", e.id, !0),
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
        return M(i, 40);
    }
}
function j(e) {
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
        async (e, r, _) => {
            var p;
            let h = null == n,
                m = x(i, o),
                g = null != (p = i.name) ? p : "";
            if ("" === g && d) {
                let e = k(t, n);
                g = "" !== e ? e : D.intl.string(D.t["7Xm5QI"]);
            }
            let y = (0, S.WD)(t),
                O = E.Z.getChannel(I.default.castMessageIdAsChannelId(n)),
                v = await Z(t, [], void 0, () => {
                    let e = null != n ? R.ANM.CHANNEL_MESSAGE_THREADS(t.id, n) : R.ANM.CHANNEL_THREADS(t.id);
                    return a.tn.post({
                        url: e,
                        body: {
                            name: g,
                            type: m
                                ? R.d4z.PRIVATE_THREAD
                                : t.type === R.d4z.GUILD_ANNOUNCEMENT
                                  ? R.d4z.ANNOUNCEMENT_THREAD
                                  : R.d4z.PUBLIC_THREAD,
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
                (h || e.length > 0 || (null != r && r.length > 0) || (null != _ && _.length > 0)) && B(v, e, r, _, f)),
                u.Z.clearAll(t.id, b.d.FirstThreadMessage);
        },
        [t, n, i, c, o, s, d, f],
    );
}
function U(e, t, n, r, i) {
    return Z(e, [], void 0, () =>
        a.tn.post({
            url: R.ANM.CHANNEL_THREADS(e.id),
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
            let h,
                m = 0,
                [E, y] = (0, g.Z)(e);
            E && ((e = y), (m = (0, i.pj)(m, R.iLy.SUPPRESS_NOTIFICATIONS)));
            let O = (0, S.WD)(t, null),
                v = R.ANM.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
                I = {
                    name: n,
                    auto_archive_duration: O,
                    applied_tags: o,
                    message: {
                        content: e,
                        sticker_ids: r,
                        flags: 0 !== m ? m : void 0,
                    },
                };
            if (null != f && f.length > 0)
                try {
                    let e = await d(f);
                    (h = e.uploaderFile), (I.message.attachments = e.files.map((e, t) => (0, T.B)(e, t)));
                } catch (i) {
                    let { file: e, code: n, reason: r } = i;
                    throw (
                        ((0, p.A)({
                            file: e,
                            guildId: t.getGuildId(),
                            analyticsLocations: null != s ? s : [],
                            code: n,
                            reason: r,
                        }),
                        i)
                    );
                }
            let A = await Z(t, s, h, () =>
                a.tn.post({
                    url: v,
                    body: I,
                    rejectWithError: !1,
                }),
            );
            return (
                l.Z.clearDraft(t.id, b.d.ThreadSettings),
                l.Z.clearDraft(t.id, b.d.FirstThreadMessage),
                u.Z.clearAll(t.id, b.d.FirstThreadMessage),
                (0, _.Je)({
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
function B(e, t, n, r, i) {
    if (null != i && null != r && r.length > 0) i(e, r, t, n);
    else if (null != n && n.length > 0) return c.Z.sendStickers(e.id, n, t, { location: P.dy.THREAD_CREATION });
    else return c.Z.sendMessage(e.id, h.ZP.parse(e, t), void 0, { location: P.dy.THREAD_CREATION });
}
async function Z(e, t, n, r) {
    let i,
        a = e.isForumLikeChannel();
    try {
        (i = await r()),
            null == i.body
                ? s.Z.show({
                      title: D.intl.string(D.t.j2d6Km),
                      body: D.intl.string(D.t.fEptJP),
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
        var l, u, _, h, g, b, y, I, T;
        if ((null == (l = r.body) ? void 0 : l.code) === R.evJ.TOO_MANY_THREADS)
            s.Z.show({
                title: a ? D.intl.string(D.t.vWNFkx) : D.intl.string(D.t["1KEdvB"]),
                body: a ? D.intl.string(D.t.KGaiEK) : D.intl.string(D.t.P0wT5S),
            });
        else if ((null == (u = r.body) ? void 0 : u.code) === R.evJ.TOO_MANY_ANNOUNCEMENT_THREADS)
            s.Z.show({
                title: D.intl.string(D.t["1KEdvB"]),
                body: D.intl.string(D.t.jDMxz2),
            });
        else if ((null == (_ = r.body) ? void 0 : _.code) === R.evJ.SLOWMODE_RATE_LIMITED) {
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
                title: a ? D.intl.string(D.t.vWNFkx) : D.intl.string(D.t["1KEdvB"]),
                body: D.intl.string(D.t.Whhv4w),
            });
        else if (N.fZ.has(null == (h = r.body) ? void 0 : h.code)) throw r;
        else if (N.RN.has(null == (g = r.body) ? void 0 : g.code)) {
            if (null != n)
                if ((null == (y = r.body) ? void 0 : y.code) === R.evJ.EXPLICIT_CONTENT) {
                    let t = (0, m.r)();
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
                    (0, p.A)({
                        file: n,
                        guildId: e.getGuildId(),
                        analyticsLocations: null != t ? t : [],
                        code: null == (I = r.body) ? void 0 : I.code,
                        reason: null == (T = r.body) ? void 0 : T.reason,
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
                title: D.intl.string(D.t.j2d6Km),
                body: D.intl.string(D.t.fEptJP),
            });
    }
    let S = await new Promise((e, t) => {
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
            channelId: S.id,
            limit: R.AQB,
        });
    } catch (e) {}
    return S;
}
