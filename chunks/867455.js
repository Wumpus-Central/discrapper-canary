"use strict";
n.d(t, { A: () => R }), n(938796);
var i = n(392421),
    r = n(636537),
    s = n(228366),
    a = n(157559),
    o = n(465532),
    l = n(58149),
    d = n(721768),
    _ = n(95701),
    u = n(495544),
    c = n(734057),
    E = n(576705),
    h = n(403362),
    m = n(45494),
    f = n(152007),
    g = n(780057),
    p = n(707539),
    A = n(736130),
    I = n(652215),
    T = n(746080),
    S = n(985018);
function N(e, t) {
    return r.Bo.patch({ url: I.Rsh.CHANNEL(e.id), body: t, rejectWithError: !1 }).then(
        (t) => (
            s.h.dispatch({ type: "THREAD_UPDATE", channel: (0, _.UE)(t.body) }),
            e.isForumPost() && null != e.parent_id && s.h.dispatch({ type: "RESORT_THREADS", channelId: e.parent_id }),
            t
        ),
    );
}
function C(e, t) {
    s.h.dispatch({
        type: "THREAD_MEMBER_LOCAL_UPDATE",
        id: e.id,
        guildId: e.getGuildId(),
        userId: u.default.getId(),
        isJoining: t,
    });
}
let R = {
    archiveThread(e, t) {
        let n = { archived: !0 };
        return t && (n.locked = !0), N(e, n);
    },
    async lockThread(e) {
        let t = e.isArchivedThread();
        return t && (await this.unarchiveThread(e, !1)), N(e, { locked: !0, archived: t });
    },
    async unlockThread(e) {
        let t = e.isArchivedThread();
        return t && (await this.unarchiveThread(e, !0)), N(e, { locked: !1, archived: t });
    },
    async unarchiveThread(e, t) {
        let n = { archived: !1 },
            i = e.isForumPost();
        t && (n.locked = !1);
        try {
            return await N(e, n);
        } catch (e) {
            throw (
                (e.body?.code === I.t02.TOO_MANY_THREADS
                    ? a.A.show({
                          title: i ? S.intl.string(S.t.kwyWNX) : S.intl.string(S.t["PeIE/r"]),
                          body: i ? S.intl.string(S.t.KGaiEK) : S.intl.string(S.t.P0wT5S),
                      })
                    : e.body?.code === I.t02.TOO_MANY_ANNOUNCEMENT_THREADS
                      ? a.A.show({ title: S.intl.string(S.t["PeIE/r"]), body: S.intl.string(S.t.jDMxz2) })
                      : 429 === e.status
                        ? a.A.show({
                              title: i ? S.intl.string(S.t.kwyWNX) : S.intl.string(S.t["PeIE/r"]),
                              body: S.intl.string(S.t.Whhv4w),
                          })
                        : a.A.show({ title: S.intl.string(S.t.j2d6Km), body: S.intl.string(S.t.fEptJP) }),
                e)
            );
        }
    },
    async unarchiveThreadIfNecessary(e) {
        let t = c.A.getChannel(e),
            n = E.A.can(I.xBc.MANAGE_THREADS, t);
        null != t &&
            t.isArchivedThread() &&
            (n || t.threadMetadata?.locked !== !0) &&
            (await this.unarchiveThread(t, !1));
    },
    setInvitable: (e, t) => N(e, { invitable: t }),
    async joinThread(e, t) {
        e.isForumPost() && C(e, !0);
        try {
            return await r.Bo.post({ url: I.Rsh.THREAD_MEMBER(e.id), query: { location: t }, rejectWithError: !1 });
        } catch (t) {
            if (t.body?.code === I.t02.TOO_MANY_THREAD_MEMBERS) {
                let t = e.isForumPost();
                a.A.show({
                    title: t ? S.intl.string(S.t.EMYJFi) : S.intl.string(S.t.gtdVcs),
                    body: t ? S.intl.string(S.t.QYyad3) : S.intl.string(S.t.abMwgm),
                });
            } else a.A.show({ title: S.intl.string(S.t.j2d6Km), body: S.intl.string(S.t.fEptJP) });
            e.isForumPost() && C(e, !1);
        }
    },
    async addMember(e, t, n) {
        try {
            return await r.Bo.post({ url: I.Rsh.THREAD_MEMBER(e.id, t), query: { location: n }, rejectWithError: !1 });
        } catch (t) {
            if (t.body?.code === I.t02.TOO_MANY_THREAD_MEMBERS) {
                let t = e.isForumPost();
                a.A.show({
                    title: t ? S.intl.string(S.t["0yAqqN"]) : S.intl.string(S.t.YErysD),
                    body: t ? S.intl.string(S.t.QYyad3) : S.intl.string(S.t.abMwgm),
                });
            } else a.A.show({ title: S.intl.string(S.t.j2d6Km), body: S.intl.string(S.t.fEptJP) });
        }
    },
    leaveThread: (e, t) => (
        e.isForumPost() && C(e, !1),
        r.Bo.del({ url: I.Rsh.THREAD_MEMBER(e.id), query: { location: t }, rejectWithError: !1 })
    ),
    removeMember: (e, t, n) =>
        r.Bo.del({ url: I.Rsh.THREAD_MEMBER(e, t), query: { location: n }, rejectWithError: !1 }),
    setAutoArchiveDuration: (e, t) =>
        r.Bo.patch({ url: I.Rsh.CHANNEL(e.id), body: { auto_archive_duration: t }, rejectWithError: !1 }),
    pin(e) {
        let t = e.flags | T.lx.PINNED;
        this.updateFlags(e, t, e.isArchivedThread());
    },
    unpin(e) {
        let t = e.flags & ~T.lx.PINNED;
        this.updateFlags(e, t);
    },
    async updateFlags(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        s.h.dispatch({ type: "THREAD_UPDATE", channel: e.merge({ flags: t }) });
        let i = { flags: t };
        n && (i.archived = !1);
        try {
            await r.Bo.patch({ url: I.Rsh.CHANNEL(e.id), body: i, rejectWithError: !0 });
        } catch {
            s.h.dispatch({ type: "THREAD_UPDATE", channel: e });
        }
    },
    async replacePin(e, t) {
        let n = e.merge({ flags: e.flags & ~T.lx.PINNED }),
            i = t.merge({ flags: t.flags | T.lx.PINNED });
        s.h.dispatch({ type: "THREAD_UPDATE", channel: n }),
            s.h.dispatch({ type: "THREAD_UPDATE", channel: i }),
            await this.unarchiveThreadIfNecessary(e.id),
            await this.unarchiveThreadIfNecessary(t.id);
        try {
            await r.Bo.patch({
                url: I.Rsh.CHANNEL(e.id),
                body: { flags: e.flags & ~T.lx.PINNED },
                rejectWithError: !0,
            });
        } catch {
            s.h.dispatch({ type: "THREAD_UPDATE", channel: e }), s.h.dispatch({ type: "THREAD_UPDATE", channel: t });
            return;
        }
        try {
            await r.Bo.patch({ url: I.Rsh.CHANNEL(t.id), body: { flags: t.flags | T.lx.PINNED }, rejectWithError: !0 });
        } catch {
            s.h.dispatch({ type: "THREAD_UPDATE", channel: t });
        }
    },
    openThreadCreationForMobile(e, t, n) {
        (0, l.zV)(I.HAw.THREAD_CREATION_STARTED, { location: n, channel_id: e.id, guild_id: e.guild_id }),
            o.A.changeThreadSettings(e.id, { parentMessageId: t, isPrivate: !1, location: n }),
            null == t && (0, d.Gf)({ channelId: e.id, command: null, section: null });
    },
    async setNotificationSettings(e, t) {
        return (
            (0, p.hs)(e, t),
            f.A.hasJoined(e.id) || (await this.joinThread(e, "Change Notification Settings")),
            r.Bo.patch({ url: I.Rsh.THREAD_MEMBER_SETTINGS(e.id), body: t, rejectWithError: !1 })
        );
    },
    loadArchivedThreads(e) {
        let { guildId: t, channelId: n, sortOrder: i, tagFilter: a, tagSetting: o, offset: l } = e;
        m.A.isLoading(n, i, a, o) ||
            (s.h.dispatch({ type: "LOAD_ARCHIVED_THREADS", channelId: n, sortOrder: i, tagFilter: a, tagSetting: o }),
            r.Bo.get({
                url: I.Rsh.THREAD_SEARCH(n),
                query: {
                    archived: !0,
                    sort_by: "last_message_time",
                    sort_order: "desc",
                    limit: m.m,
                    tag: a.size > 0 ? Array.from(a).join(",") : void 0,
                    tag_setting: o,
                    offset: l,
                },
                retries: 2,
                rejectWithError: !0,
            }).then(
                (e) => {
                    let {
                        body: { threads: r, members: d, has_more: _, first_messages: u, most_recent_messages: c },
                    } = e;
                    null == r
                        ? s.h.dispatch({
                              type: "LOAD_ARCHIVED_THREADS_FAIL",
                              channelId: n,
                              sortOrder: i,
                              tagFilter: a,
                              tagSetting: o,
                          })
                        : s.h.dispatch({
                              type: "LOAD_ARCHIVED_THREADS_SUCCESS",
                              guildId: t,
                              channelId: n,
                              offset: l,
                              sortOrder: i,
                              tagFilter: a,
                              tagSetting: o,
                              threads: r,
                              firstMessages: u,
                              mostRecentMessages: c,
                              members: (d ?? []).map((e) => (0, A.A)(e)),
                              owners: r.map((e) => e.owner).filter(h.Vq),
                              hasMore: _,
                          });
                },
                () => {
                    s.h.dispatch({
                        type: "LOAD_ARCHIVED_THREADS_FAIL",
                        channelId: n,
                        sortOrder: i,
                        tagFilter: a,
                        tagSetting: o,
                    });
                },
            ));
    },
    async searchThreads(e, t, n, a) {
        let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : i.n.MATCH_SOME,
            l = null != a && a.size > 0 ? Array.from(a).join(",") : void 0,
            {
                body: { threads: d, members: _, first_messages: u, most_recent_messages: c },
            } = await r.Bo.get({
                url: I.Rsh.THREAD_SEARCH(t),
                query: { name: n, tag: l, tag_setting: o },
                rejectWithError: !1,
            });
        return (
            s.h.dispatch({
                type: "LOAD_THREADS_SUCCESS",
                threads: d,
                members: _,
                guildId: e,
                firstMessages: u,
                mostRecentMessages: c,
            }),
            d.map((e) => e.id)
        );
    },
    summarizeThread(e, t) {
        if (!(!e.isThread() || g.A.isInProgress()))
            return (
                s.h.dispatch({ type: "SUMMARIZE_THREAD_START" }),
                r.Bo.post({ url: I.Rsh.AI_SUMMARIZE_THREAD(e.id), body: { ephemeral: t ?? !0 }, rejectWithError: !1 })
                    .then(() => {
                        s.h.dispatch({ type: "SUMMARIZE_THREAD_SUCCESS", channelId: e.id });
                    })
                    .catch(() => {
                        s.h.dispatch({ type: "SUMMARIZE_THREAD_FAILURE", channelId: e.id }),
                            a.A.show({ title: S.intl.string(S.t.j2d6Km), body: S.intl.string(S.t.fEptJP) });
                    })
            );
    },
};
