n.d(t, { A: () => I }), n(938796);
var r = n(392421),
    i = n(562465),
    a = n(73153),
    s = n(157559),
    o = n(465532),
    l = n(58149),
    c = n(721768),
    u = n(95701),
    d = n(961350),
    f = n(734057),
    p = n(576705),
    _ = n(403362),
    h = n(45494),
    m = n(152007),
    g = n(780057),
    E = n(707539),
    b = n(736130),
    y = n(652215),
    O = n(746080),
    A = n(985018);
function v(e, t) {
    return i.Bo.patch({
        url: y.Rsh.CHANNEL(e.id),
        body: t,
        rejectWithError: !1,
    }).then(
        (t) => (
            a.h.dispatch({
                type: "THREAD_UPDATE",
                channel: (0, u.UE)(t.body),
            }),
            e.isForumPost() &&
                null != e.parent_id &&
                a.h.dispatch({
                    type: "RESORT_THREADS",
                    channelId: e.parent_id,
                }),
            t
        ),
    );
}
function S(e, t) {
    a.h.dispatch({
        type: "THREAD_MEMBER_LOCAL_UPDATE",
        id: e.id,
        guildId: e.getGuildId(),
        userId: d.default.getId(),
        isJoining: t,
    });
}
let I = {
    archiveThread(e, t) {
        let n = { archived: !0 };
        return t && (n.locked = !0), v(e, n);
    },
    async lockThread(e) {
        let t = e.isArchivedThread();
        return (
            t && (await this.unarchiveThread(e, !1)),
            v(e, {
                locked: !0,
                archived: t,
            })
        );
    },
    async unlockThread(e) {
        let t = e.isArchivedThread();
        return (
            t && (await this.unarchiveThread(e, !0)),
            v(e, {
                locked: !1,
                archived: t,
            })
        );
    },
    async unarchiveThread(e, t) {
        let n = { archived: !1 },
            r = e.isForumPost();
        t && (n.locked = !1);
        try {
            return await v(e, n);
        } catch (e) {
            var i, a;
            throw (
                ((null == (i = e.body) ? void 0 : i.code) === y.t02.TOO_MANY_THREADS
                    ? s.A.show({
                          title: r ? A.intl.string(A.t.kwyWNX) : A.intl.string(A.t["PeIE/r"]),
                          body: r ? A.intl.string(A.t.KGaiEK) : A.intl.string(A.t.P0wT5S),
                      })
                    : (null == (a = e.body) ? void 0 : a.code) === y.t02.TOO_MANY_ANNOUNCEMENT_THREADS
                      ? s.A.show({
                            title: A.intl.string(A.t["PeIE/r"]),
                            body: A.intl.string(A.t.jDMxz2),
                        })
                      : 429 === e.status
                        ? s.A.show({
                              title: r ? A.intl.string(A.t.kwyWNX) : A.intl.string(A.t["PeIE/r"]),
                              body: A.intl.string(A.t.Whhv4w),
                          })
                        : s.A.show({
                              title: A.intl.string(A.t.j2d6Km),
                              body: A.intl.string(A.t.fEptJP),
                          }),
                e)
            );
        }
    },
    async unarchiveThreadIfNecessary(e) {
        var t;
        let n = f.A.getChannel(e),
            r = p.A.can(y.xBc.MANAGE_THREADS, n);
        null != n &&
            n.isArchivedThread() &&
            (r || (null == (t = n.threadMetadata) ? void 0 : t.locked) !== !0) &&
            (await this.unarchiveThread(n, !1));
    },
    setInvitable: (e, t) => v(e, { invitable: t }),
    async joinThread(e, t) {
        e.isForumPost() && S(e, !0);
        try {
            return await i.Bo.post({
                url: y.Rsh.THREAD_MEMBER(e.id),
                query: { location: t },
                rejectWithError: !1,
            });
        } catch (t) {
            var n;
            if ((null == (n = t.body) ? void 0 : n.code) === y.t02.TOO_MANY_THREAD_MEMBERS) {
                let t = e.isForumPost();
                s.A.show({
                    title: t ? A.intl.string(A.t.EMYJFi) : A.intl.string(A.t.gtdVcs),
                    body: t ? A.intl.string(A.t.QYyad3) : A.intl.string(A.t.abMwgm),
                });
            } else
                s.A.show({
                    title: A.intl.string(A.t.j2d6Km),
                    body: A.intl.string(A.t.fEptJP),
                });
            e.isForumPost() && S(e, !1);
        }
    },
    async addMember(e, t, n) {
        try {
            return await i.Bo.post({
                url: y.Rsh.THREAD_MEMBER(e.id, t),
                query: { location: n },
                rejectWithError: !1,
            });
        } catch (t) {
            var r;
            if ((null == (r = t.body) ? void 0 : r.code) === y.t02.TOO_MANY_THREAD_MEMBERS) {
                let t = e.isForumPost();
                s.A.show({
                    title: t ? A.intl.string(A.t["0yAqqN"]) : A.intl.string(A.t.YErysD),
                    body: t ? A.intl.string(A.t.QYyad3) : A.intl.string(A.t.abMwgm),
                });
            } else
                s.A.show({
                    title: A.intl.string(A.t.j2d6Km),
                    body: A.intl.string(A.t.fEptJP),
                });
        }
    },
    leaveThread: (e, t) => (
        e.isForumPost() && S(e, !1),
        i.Bo.del({
            url: y.Rsh.THREAD_MEMBER(e.id),
            query: { location: t },
            rejectWithError: !1,
        })
    ),
    removeMember: (e, t, n) =>
        i.Bo.del({
            url: y.Rsh.THREAD_MEMBER(e, t),
            query: { location: n },
            rejectWithError: !1,
        }),
    setAutoArchiveDuration: (e, t) =>
        i.Bo.patch({
            url: y.Rsh.CHANNEL(e.id),
            body: { auto_archive_duration: t },
            rejectWithError: !1,
        }),
    pin(e) {
        let t = e.flags | O.lx.PINNED;
        this.updateFlags(e, t, e.isArchivedThread());
    },
    unpin(e) {
        let t = e.flags & ~O.lx.PINNED;
        this.updateFlags(e, t);
    },
    async updateFlags(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        a.h.dispatch({
            type: "THREAD_UPDATE",
            channel: e.merge({ flags: t }),
        });
        let r = { flags: t };
        n && (r.archived = !1);
        try {
            await i.Bo.patch({
                url: y.Rsh.CHANNEL(e.id),
                body: r,
                rejectWithError: !0,
            });
        } catch (t) {
            a.h.dispatch({
                type: "THREAD_UPDATE",
                channel: e,
            });
        }
    },
    async replacePin(e, t) {
        let n = e.merge({ flags: e.flags & ~O.lx.PINNED }),
            r = t.merge({ flags: t.flags | O.lx.PINNED });
        a.h.dispatch({
            type: "THREAD_UPDATE",
            channel: n,
        }),
            a.h.dispatch({
                type: "THREAD_UPDATE",
                channel: r,
            }),
            await this.unarchiveThreadIfNecessary(e.id),
            await this.unarchiveThreadIfNecessary(t.id);
        try {
            await i.Bo.patch({
                url: y.Rsh.CHANNEL(e.id),
                body: { flags: e.flags & ~O.lx.PINNED },
                rejectWithError: !0,
            });
        } catch (n) {
            a.h.dispatch({
                type: "THREAD_UPDATE",
                channel: e,
            }),
                a.h.dispatch({
                    type: "THREAD_UPDATE",
                    channel: t,
                });
            return;
        }
        try {
            await i.Bo.patch({
                url: y.Rsh.CHANNEL(t.id),
                body: { flags: t.flags | O.lx.PINNED },
                rejectWithError: !0,
            });
        } catch (e) {
            a.h.dispatch({
                type: "THREAD_UPDATE",
                channel: t,
            });
        }
    },
    openThreadCreationForMobile(e, t, n) {
        (0, l.zV)(y.HAw.THREAD_CREATION_STARTED, {
            location: n,
            channel_id: e.id,
            guild_id: e.guild_id,
        }),
            o.A.changeThreadSettings(e.id, {
                parentMessageId: t,
                isPrivate: !1,
                location: n,
            }),
            null == t &&
                (0, c.Gf)({
                    channelId: e.id,
                    command: null,
                    section: null,
                });
    },
    async setNotificationSettings(e, t) {
        return (
            (0, E.hs)(e, t),
            m.A.hasJoined(e.id) || (await this.joinThread(e, "Change Notification Settings")),
            i.Bo.patch({
                url: y.Rsh.THREAD_MEMBER_SETTINGS(e.id),
                body: t,
                rejectWithError: !1,
            })
        );
    },
    loadArchivedThreads(e) {
        let { guildId: t, channelId: n, sortOrder: r, tagFilter: s, tagSetting: o, offset: l } = e;
        h.A.isLoading(n, r, s, o) ||
            (a.h.dispatch({
                type: "LOAD_ARCHIVED_THREADS",
                channelId: n,
                sortOrder: r,
                tagFilter: s,
                tagSetting: o,
            }),
            i.Bo.get({
                url: y.Rsh.THREAD_SEARCH(n),
                query: {
                    archived: !0,
                    sort_by: "last_message_time",
                    sort_order: "desc",
                    limit: h.m,
                    tag: s.size > 0 ? Array.from(s).join(",") : void 0,
                    tag_setting: o,
                    offset: l,
                },
                retries: 2,
                rejectWithError: !0,
            }).then(
                (e) => {
                    let {
                        body: { threads: i, members: c, has_more: u, first_messages: d, most_recent_messages: f },
                    } = e;
                    null == i
                        ? a.h.dispatch({
                              type: "LOAD_ARCHIVED_THREADS_FAIL",
                              channelId: n,
                              sortOrder: r,
                              tagFilter: s,
                              tagSetting: o,
                          })
                        : a.h.dispatch({
                              type: "LOAD_ARCHIVED_THREADS_SUCCESS",
                              guildId: t,
                              channelId: n,
                              offset: l,
                              sortOrder: r,
                              tagFilter: s,
                              tagSetting: o,
                              threads: i,
                              firstMessages: d,
                              mostRecentMessages: f,
                              members: (null != c ? c : []).map((e) => (0, b.A)(e)),
                              owners: i.map((e) => e.owner).filter(_.Vq),
                              hasMore: u,
                          });
                },
                () => {
                    a.h.dispatch({
                        type: "LOAD_ARCHIVED_THREADS_FAIL",
                        channelId: n,
                        sortOrder: r,
                        tagFilter: s,
                        tagSetting: o,
                    });
                },
            ));
    },
    async searchThreads(e, t, n, s) {
        let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.n.MATCH_SOME,
            l = null != s && s.size > 0 ? Array.from(s).join(",") : void 0,
            {
                body: { threads: c, members: u, first_messages: d, most_recent_messages: f },
            } = await i.Bo.get({
                url: y.Rsh.THREAD_SEARCH(t),
                query: {
                    name: n,
                    tag: l,
                    tag_setting: o,
                },
                rejectWithError: !1,
            });
        return (
            a.h.dispatch({
                type: "LOAD_THREADS_SUCCESS",
                threads: c,
                members: u,
                guildId: e,
                firstMessages: d,
                mostRecentMessages: f,
            }),
            c.map((e) => e.id)
        );
    },
    summarizeThread(e, t) {
        if (!(!e.isThread() || g.A.isInProgress()))
            return (
                a.h.dispatch({ type: "SUMMARIZE_THREAD_START" }),
                i.Bo.post({
                    url: y.Rsh.AI_SUMMARIZE_THREAD(e.id),
                    body: { ephemeral: null == t || t },
                    rejectWithError: !1,
                })
                    .then(() => {
                        a.h.dispatch({
                            type: "SUMMARIZE_THREAD_SUCCESS",
                            channelId: e.id,
                        });
                    })
                    .catch(() => {
                        a.h.dispatch({
                            type: "SUMMARIZE_THREAD_FAILURE",
                            channelId: e.id,
                        }),
                            s.A.show({
                                title: A.intl.string(A.t.j2d6Km),
                                body: A.intl.string(A.t.fEptJP),
                            });
                    })
            );
    },
};
