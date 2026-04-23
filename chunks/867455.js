"use strict";
n.d(t, { A: () => v }), n(938796);
var r = n(392421),
    i = n(562465),
    s = n(73153),
    a = n(157559),
    o = n(465532),
    l = n(58149),
    u = n(721768),
    c = n(95701),
    d = n(961350),
    _ = n(734057),
    f = n(576705),
    p = n(403362),
    h = n(45494),
    E = n(152007),
    m = n(780057),
    g = n(707539),
    A = n(736130),
    I = n(652215),
    T = n(746080),
    S = n(985018);
function y(e, t) {
    return i.Bo.patch({ url: I.Rsh.CHANNEL(e.id), body: t, rejectWithError: !1 }).then(
        (t) => (
            s.h.dispatch({ type: "THREAD_UPDATE", channel: (0, c.UE)(t.body) }),
            e.isForumPost() && null != e.parent_id && s.h.dispatch({ type: "RESORT_THREADS", channelId: e.parent_id }),
            t
        ),
    );
}
function N(e, t) {
    s.h.dispatch({
        type: "THREAD_MEMBER_LOCAL_UPDATE",
        id: e.id,
        guildId: e.getGuildId(),
        userId: d.default.getId(),
        isJoining: t,
    });
}
let v = {
    archiveThread(e, t) {
        let n = { archived: !0 };
        return t && (n.locked = !0), y(e, n);
    },
    async lockThread(e) {
        let t = e.isArchivedThread();
        return t && (await this.unarchiveThread(e, !1)), y(e, { locked: !0, archived: t });
    },
    async unlockThread(e) {
        let t = e.isArchivedThread();
        return t && (await this.unarchiveThread(e, !0)), y(e, { locked: !1, archived: t });
    },
    async unarchiveThread(e, t) {
        let n = { archived: !1 },
            r = e.isForumPost();
        t && (n.locked = !1);
        try {
            return await y(e, n);
        } catch (e) {
            throw (
                (e.body?.code === I.t02.TOO_MANY_THREADS
                    ? a.A.show({
                          title: r ? S.intl.string(S.t.kwyWNX) : S.intl.string(S.t["PeIE/r"]),
                          body: r ? S.intl.string(S.t.KGaiEK) : S.intl.string(S.t.P0wT5S),
                      })
                    : e.body?.code === I.t02.TOO_MANY_ANNOUNCEMENT_THREADS
                      ? a.A.show({ title: S.intl.string(S.t["PeIE/r"]), body: S.intl.string(S.t.jDMxz2) })
                      : 429 === e.status
                        ? a.A.show({
                              title: r ? S.intl.string(S.t.kwyWNX) : S.intl.string(S.t["PeIE/r"]),
                              body: S.intl.string(S.t.Whhv4w),
                          })
                        : a.A.show({ title: S.intl.string(S.t.j2d6Km), body: S.intl.string(S.t.fEptJP) }),
                e)
            );
        }
    },
    async unarchiveThreadIfNecessary(e) {
        let t = _.A.getChannel(e),
            n = f.A.can(I.xBc.MANAGE_THREADS, t);
        null != t &&
            t.isArchivedThread() &&
            (n || t.threadMetadata?.locked !== !0) &&
            (await this.unarchiveThread(t, !1));
    },
    setInvitable: (e, t) => y(e, { invitable: t }),
    async joinThread(e, t) {
        e.isForumPost() && N(e, !0);
        try {
            return await i.Bo.post({ url: I.Rsh.THREAD_MEMBER(e.id), query: { location: t }, rejectWithError: !1 });
        } catch (t) {
            if (t.body?.code === I.t02.TOO_MANY_THREAD_MEMBERS) {
                let t = e.isForumPost();
                a.A.show({
                    title: t ? S.intl.string(S.t.EMYJFi) : S.intl.string(S.t.gtdVcs),
                    body: t ? S.intl.string(S.t.QYyad3) : S.intl.string(S.t.abMwgm),
                });
            } else a.A.show({ title: S.intl.string(S.t.j2d6Km), body: S.intl.string(S.t.fEptJP) });
            e.isForumPost() && N(e, !1);
        }
    },
    async addMember(e, t, n) {
        try {
            return await i.Bo.post({ url: I.Rsh.THREAD_MEMBER(e.id, t), query: { location: n }, rejectWithError: !1 });
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
        e.isForumPost() && N(e, !1),
        i.Bo.del({ url: I.Rsh.THREAD_MEMBER(e.id), query: { location: t }, rejectWithError: !1 })
    ),
    removeMember: (e, t, n) =>
        i.Bo.del({ url: I.Rsh.THREAD_MEMBER(e, t), query: { location: n }, rejectWithError: !1 }),
    setAutoArchiveDuration: (e, t) =>
        i.Bo.patch({ url: I.Rsh.CHANNEL(e.id), body: { auto_archive_duration: t }, rejectWithError: !1 }),
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
        let r = { flags: t };
        n && (r.archived = !1);
        try {
            await i.Bo.patch({ url: I.Rsh.CHANNEL(e.id), body: r, rejectWithError: !0 });
        } catch {
            s.h.dispatch({ type: "THREAD_UPDATE", channel: e });
        }
    },
    async replacePin(e, t) {
        let n = e.merge({ flags: e.flags & ~T.lx.PINNED }),
            r = t.merge({ flags: t.flags | T.lx.PINNED });
        s.h.dispatch({ type: "THREAD_UPDATE", channel: n }),
            s.h.dispatch({ type: "THREAD_UPDATE", channel: r }),
            await this.unarchiveThreadIfNecessary(e.id),
            await this.unarchiveThreadIfNecessary(t.id);
        try {
            await i.Bo.patch({
                url: I.Rsh.CHANNEL(e.id),
                body: { flags: e.flags & ~T.lx.PINNED },
                rejectWithError: !0,
            });
        } catch {
            s.h.dispatch({ type: "THREAD_UPDATE", channel: e }), s.h.dispatch({ type: "THREAD_UPDATE", channel: t });
            return;
        }
        try {
            await i.Bo.patch({ url: I.Rsh.CHANNEL(t.id), body: { flags: t.flags | T.lx.PINNED }, rejectWithError: !0 });
        } catch {
            s.h.dispatch({ type: "THREAD_UPDATE", channel: t });
        }
    },
    openThreadCreationForMobile(e, t, n) {
        (0, l.zV)(I.HAw.THREAD_CREATION_STARTED, { location: n, channel_id: e.id, guild_id: e.guild_id }),
            o.A.changeThreadSettings(e.id, { parentMessageId: t, isPrivate: !1, location: n }),
            null == t && (0, u.Gf)({ channelId: e.id, command: null, section: null });
    },
    async setNotificationSettings(e, t) {
        return (
            (0, g.hs)(e, t),
            E.A.hasJoined(e.id) || (await this.joinThread(e, "Change Notification Settings")),
            i.Bo.patch({ url: I.Rsh.THREAD_MEMBER_SETTINGS(e.id), body: t, rejectWithError: !1 })
        );
    },
    loadArchivedThreads(e) {
        let { guildId: t, channelId: n, sortOrder: r, tagFilter: a, tagSetting: o, offset: l } = e;
        h.A.isLoading(n, r, a, o) ||
            (s.h.dispatch({ type: "LOAD_ARCHIVED_THREADS", channelId: n, sortOrder: r, tagFilter: a, tagSetting: o }),
            i.Bo.get({
                url: I.Rsh.THREAD_SEARCH(n),
                query: {
                    archived: !0,
                    sort_by: "last_message_time",
                    sort_order: "desc",
                    limit: h.m,
                    tag: a.size > 0 ? Array.from(a).join(",") : void 0,
                    tag_setting: o,
                    offset: l,
                },
                retries: 2,
                rejectWithError: !0,
            }).then(
                (e) => {
                    let {
                        body: { threads: i, members: u, has_more: c, first_messages: d, most_recent_messages: _ },
                    } = e;
                    null == i
                        ? s.h.dispatch({
                              type: "LOAD_ARCHIVED_THREADS_FAIL",
                              channelId: n,
                              sortOrder: r,
                              tagFilter: a,
                              tagSetting: o,
                          })
                        : s.h.dispatch({
                              type: "LOAD_ARCHIVED_THREADS_SUCCESS",
                              guildId: t,
                              channelId: n,
                              offset: l,
                              sortOrder: r,
                              tagFilter: a,
                              tagSetting: o,
                              threads: i,
                              firstMessages: d,
                              mostRecentMessages: _,
                              members: (u ?? []).map((e) => (0, A.A)(e)),
                              owners: i.map((e) => e.owner).filter(p.Vq),
                              hasMore: c,
                          });
                },
                () => {
                    s.h.dispatch({
                        type: "LOAD_ARCHIVED_THREADS_FAIL",
                        channelId: n,
                        sortOrder: r,
                        tagFilter: a,
                        tagSetting: o,
                    });
                },
            ));
    },
    async searchThreads(e, t, n, a) {
        let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.n.MATCH_SOME,
            l = null != a && a.size > 0 ? Array.from(a).join(",") : void 0,
            {
                body: { threads: u, members: c, first_messages: d, most_recent_messages: _ },
            } = await i.Bo.get({
                url: I.Rsh.THREAD_SEARCH(t),
                query: { name: n, tag: l, tag_setting: o },
                rejectWithError: !1,
            });
        return (
            s.h.dispatch({
                type: "LOAD_THREADS_SUCCESS",
                threads: u,
                members: c,
                guildId: e,
                firstMessages: d,
                mostRecentMessages: _,
            }),
            u.map((e) => e.id)
        );
    },
    summarizeThread(e, t) {
        if (!(!e.isThread() || m.A.isInProgress()))
            return (
                s.h.dispatch({ type: "SUMMARIZE_THREAD_START" }),
                i.Bo.post({ url: I.Rsh.AI_SUMMARIZE_THREAD(e.id), body: { ephemeral: t ?? !0 }, rejectWithError: !1 })
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
