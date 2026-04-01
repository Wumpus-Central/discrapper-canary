"use strict";
n.d(t, { Ez: () => k, gZ: () => M });
var r = n(284009),
    i = n.n(r),
    s = n(989349),
    a = n.n(s),
    o = n(478437),
    l = n(715943),
    u = n(308528),
    c = n(686956),
    d = n(843472),
    _ = n(155718),
    f = n(838111),
    p = n(451909),
    h = n(135621),
    m = n(268761),
    E = n(393309),
    g = n(406704),
    A = n(253932),
    I = n(734057),
    T = n(576705),
    S = n(287809),
    y = n(927813),
    v = n(427262),
    C = n(392054),
    N = n(73510),
    R = n(652215),
    O = n(200700),
    b = n(381941),
    D = n(985018);
let L = n(743361).A,
    w = (e, t) => e.find((e) => e.name === t)?.value,
    M = {
        [N.Ik.BUILT_IN]: {
            id: N.Ik.BUILT_IN,
            type: C.Hf.BUILT_IN,
            get name() {
                return D.intl.string(D.t.fI5MTa);
            },
        },
        [N.Ik.FRECENCY]: {
            id: N.Ik.FRECENCY,
            type: C.Hf.BUILT_IN,
            get name() {
                return D.intl.string(D.t["+cGVV6"]);
            },
        },
    },
    x = [
        ...L,
        {
            id: "-1",
            untranslatedName: "shrug",
            displayName: "shrug",
            type: _.kc.CHAT,
            inputType: C.y$.BUILT_IN_TEXT,
            applicationId: N.Ik.BUILT_IN,
            get untranslatedDescription() {
                return D.intl.string(D.t.j5xUSW);
            },
            get displayDescription() {
                return D.intl.string(D.t.j5xUSW);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return D.intl.string(D.t.JewOrS);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.JewOrS);
                    },
                },
            ],
            execute: (e) => {
                let t = w(e, "message") ?? "";
                return { content: `${t} \xaf\\_(ツ)_/\xaf`.trim() };
            },
        },
        {
            id: "-2",
            untranslatedName: "tableflip",
            displayName: "tableflip",
            type: _.kc.CHAT,
            inputType: C.y$.BUILT_IN_TEXT,
            applicationId: N.Ik.BUILT_IN,
            get untranslatedDescription() {
                return D.intl.string(D.t.nrQRce);
            },
            get displayDescription() {
                return D.intl.string(D.t.nrQRce);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return D.intl.string(D.t.EI80tw);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.EI80tw);
                    },
                },
            ],
            execute: (e) => {
                let t = w(e, "message") ?? "";
                return { content: `${t} (╯\xb0□\xb0)╯︵ ┻━┻`.trim() };
            },
        },
        {
            id: "-3",
            untranslatedName: "unflip",
            displayName: "unflip",
            type: _.kc.CHAT,
            inputType: C.y$.BUILT_IN_TEXT,
            applicationId: N.Ik.BUILT_IN,
            get untranslatedDescription() {
                return D.intl.string(D.t.pnnn8e);
            },
            get displayDescription() {
                return D.intl.string(D.t.pnnn8e);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return D.intl.string(D.t.ETs6go);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.ETs6go);
                    },
                },
            ],
            execute: (e) => {
                let t = w(e, "message") ?? "";
                return { content: `${t} ┬─┬ノ( \xba _ \xbaノ)`.trim() };
            },
        },
        {
            id: "-4",
            untranslatedName: "tts",
            displayName: "tts",
            type: _.kc.CHAT,
            inputType: C.y$.BUILT_IN_TEXT,
            applicationId: N.Ik.BUILT_IN,
            get untranslatedDescription() {
                return D.intl.string(D.t.jZcIid);
            },
            get displayDescription() {
                return D.intl.string(D.t.jZcIid);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return D.intl.string(D.t["k+sw9g"]);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t["k+sw9g"]);
                    },
                    required: !0,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return null != t && !t.isPrivate() && A.on.getSetting() && T.A.can(R.xBc.SEND_TTS_MESSAGES, t);
            },
            execute: (e) => ({ content: w(e, "message") ?? "", tts: !0 }),
        },
        {
            id: "-5",
            untranslatedName: "me",
            displayName: "me",
            type: _.kc.CHAT,
            inputType: C.y$.BUILT_IN_TEXT,
            applicationId: N.Ik.BUILT_IN,
            get untranslatedDescription() {
                return D.intl.string(D.t.UGO8fU);
            },
            get displayDescription() {
                return D.intl.string(D.t.UGO8fU);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return D.intl.string(D.t.RWTgNd);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.RWTgNd);
                    },
                    required: !0,
                },
            ],
            execute: (e) => {
                let t = w(e, "message") ?? "";
                return { content: `_${t}_` };
            },
        },
        {
            id: "-6",
            untranslatedName: "spoiler",
            displayName: "spoiler",
            type: _.kc.CHAT,
            inputType: C.y$.BUILT_IN_TEXT,
            applicationId: N.Ik.BUILT_IN,
            get untranslatedDescription() {
                return D.intl.string(D.t.v0eDdV);
            },
            get displayDescription() {
                return D.intl.string(D.t.v0eDdV);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return D.intl.string(D.t.D13pbc);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.D13pbc);
                    },
                    required: !0,
                },
            ],
            execute: (e) => {
                let t = w(e, "message") ?? "";
                return { content: (0, R.ZGg)(t).trim() };
            },
        },
        {
            id: "-7",
            untranslatedName: "nick",
            displayName: "nick",
            type: _.kc.CHAT,
            inputType: C.y$.BUILT_IN,
            applicationId: N.Ik.BUILT_IN,
            get untranslatedDescription() {
                return D.intl.string(D.t["jiHfS/"]);
            },
            get displayDescription() {
                return D.intl.string(D.t["jiHfS/"]);
            },
            options: [
                {
                    name: "new_nick",
                    displayName: "new_nick",
                    type: _.n4.STRING,
                    get description() {
                        return D.intl.string(D.t.WTSzVu);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.WTSzVu);
                    },
                    maxLength: R.zzC,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return (
                    null != t &&
                    !t.isPrivate() &&
                    (T.A.can(R.xBc.CHANGE_NICKNAME, t) || T.A.can(R.xBc.MANAGE_NICKNAMES, t))
                );
            },
            execute: (e, t) => {
                let { guild: n, channel: r } = t;
                if (null == n || null == r) return;
                let i = w(e, "new_nick") ?? "";
                l.A.changeNickname(n.id, r.id, R.ME, i || "");
            },
        },
        {
            id: "-10",
            untranslatedName: "thread",
            displayName: "thread",
            type: _.kc.CHAT,
            inputType: C.y$.BUILT_IN,
            applicationId: N.Ik.BUILT_IN,
            get untranslatedDescription() {
                return D.intl.string(D.t.t6ZAS0);
            },
            get displayDescription() {
                return D.intl.string(D.t.t6ZAS0);
            },
            options: [
                {
                    name: "name",
                    displayName: "name",
                    type: _.n4.STRING,
                    get description() {
                        return D.intl.string(D.t.TffOfY);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.TffOfY);
                    },
                    required: !0,
                    maxLength: R.Ign,
                },
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return D.intl.string(D.t.QXfSfU);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.QXfSfU);
                    },
                    get maxLength() {
                        return (0, h.a)();
                    },
                    required: !0,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return null != t && (0, g.D1)(t);
            },
            execute: async (e, t) => {
                let { channel: n } = t,
                    r = w(e, "name") ?? "",
                    i = w(e, "message") ?? "",
                    s = await (0, E.Nw)(n, r, o.r.PUBLIC_THREAD, (0, m.Gl)(n, null), "Slash Command");
                d.A.sendMessage(s.id, p.Ay.parse(s, i), !0, { location: b.Hx.THREAD_CREATION });
            },
        },
        {
            id: "-11",
            untranslatedName: "kick",
            displayName: "kick",
            type: _.kc.CHAT,
            inputType: C.y$.BUILT_IN,
            applicationId: N.Ik.BUILT_IN,
            get untranslatedDescription() {
                return D.intl.string(D.t["03N0UL"]);
            },
            get displayDescription() {
                return D.intl.string(D.t["03N0UL"]);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: _.n4.USER,
                    get description() {
                        return D.intl.string(D.t.gF8IpD);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.gF8IpD);
                    },
                    required: !0,
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: _.n4.STRING,
                    get description() {
                        return D.intl.string(D.t.QWldgj);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.QWldgj);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return T.A.can(R.xBc.KICK_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: r } = t;
                if (null == n || null == r) return;
                let i = w(e, "user") ?? "";
                T.A.canManageUser(R.xBc.KICK_MEMBERS, i, n)
                    ? (async () => {
                          let t = S.default.getUser(i);
                          if (null == t) throw Error();
                          await c.A.kickUser(n.id, i, w(e, "reason") ?? ""),
                              d.A.sendBotMessage(
                                  r.id,
                                  D.intl.formatToPlainString(D.t["9wzHDV"], { user: v.Ay.getUserTag(t) }),
                              );
                      })().catch(() => {
                          d.A.sendBotMessage(r.id, D.intl.string(D.t.l0gNlp));
                      })
                    : d.A.sendBotMessage(r.id, D.intl.string(D.t["6RIwPI"]));
            },
        },
        {
            id: "-12",
            untranslatedName: "ban",
            displayName: "ban",
            type: _.kc.CHAT,
            inputType: C.y$.BUILT_IN,
            applicationId: N.Ik.BUILT_IN,
            get untranslatedDescription() {
                return D.intl.string(D.t.HWuskv);
            },
            get displayDescription() {
                return D.intl.string(D.t.HWuskv);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: _.n4.USER,
                    get description() {
                        return D.intl.string(D.t.z3XPjr);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.z3XPjr);
                    },
                    required: !0,
                },
                {
                    name: "delete_messages",
                    displayName: "delete_messages",
                    type: _.n4.INTEGER,
                    get description() {
                        return D.intl.string(D.t.smrvA6);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.smrvA6);
                    },
                    required: !0,
                    get choices() {
                        return [
                            { name: D.intl.string(D.t["4obaMS"]), displayName: D.intl.string(D.t["4obaMS"]), value: 0 },
                            {
                                name: D.intl.string(D.t.RKpitY),
                                displayName: D.intl.string(D.t.RKpitY),
                                value: y.A.Seconds.HOUR,
                            },
                            {
                                name: D.intl.string(D.t["8WfJZ8"]),
                                displayName: D.intl.string(D.t["8WfJZ8"]),
                                value: 6 * y.A.Seconds.HOUR,
                            },
                            {
                                name: D.intl.string(D.t.p1up7u),
                                displayName: D.intl.string(D.t.p1up7u),
                                value: 12 * y.A.Seconds.HOUR,
                            },
                            {
                                name: D.intl.string(D.t.XuVkkD),
                                displayName: D.intl.string(D.t.XuVkkD),
                                value: y.A.Seconds.DAY,
                            },
                            {
                                name: D.intl.string(D.t["gMcDS+"]),
                                displayName: D.intl.string(D.t["gMcDS+"]),
                                value: 3 * y.A.Seconds.DAY,
                            },
                            {
                                name: D.intl.string(D.t.FA7IUk),
                                displayName: D.intl.string(D.t.FA7IUk),
                                value: 7 * y.A.Seconds.DAY,
                            },
                        ];
                    },
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: _.n4.STRING,
                    get description() {
                        return D.intl.string(D.t.dG4noU);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.dG4noU);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return T.A.can(R.xBc.BAN_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: r } = t;
                if (null == n || null == r) return;
                let i = w(e, "user") ?? "";
                T.A.canManageUser(R.xBc.BAN_MEMBERS, i, n)
                    ? (async () => {
                          if ("" === i) throw Error();
                          let t = w(e, "delete_messages") ?? 0,
                              s = w(e, "reason") ?? "",
                              a = S.default.getUser(i);
                          await c.A.banUser(n.id, i, t, s),
                              d.A.sendBotMessage(
                                  r.id,
                                  D.intl.formatToPlainString(D.t.YflWdM, { user: null != a ? v.Ay.getUserTag(a) : i }),
                              );
                      })().catch(() => {
                          d.A.sendBotMessage(r.id, D.intl.string(D.t.w2J6Qs));
                      })
                    : d.A.sendBotMessage(r.id, D.intl.string(D.t.R27LJl));
            },
        },
        {
            id: "-13",
            untranslatedName: "timeout",
            displayName: "timeout",
            type: _.kc.CHAT,
            inputType: C.y$.BUILT_IN,
            applicationId: N.Ik.BUILT_IN,
            get untranslatedDescription() {
                return D.intl.string(D.t.KkPcep);
            },
            get displayDescription() {
                return D.intl.string(D.t.KkPcep);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: _.n4.USER,
                    get description() {
                        return D.intl.string(D.t.UU3VRm);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.UU3VRm);
                    },
                    required: !0,
                },
                {
                    name: "duration",
                    displayName: "duration",
                    type: _.n4.INTEGER,
                    get description() {
                        return D.intl.string(D.t.SNqN1e);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.SNqN1e);
                    },
                    required: !0,
                    get choices() {
                        return (0, O.ny)().map((e) => ({ ...e, name: e.label, displayName: e.label }));
                    },
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: _.n4.STRING,
                    get description() {
                        return D.intl.string(D.t.akHScA);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.akHScA);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return T.A.can(R.xBc.MODERATE_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: r } = t;
                if (null == n || null == r) return;
                let i = w(e, "user");
                (0, f.b)(n.id, i)
                    ? (async () => {
                          let t = w(e, "duration") ?? "",
                              s = w(e, "reason") ?? "",
                              o = S.default.getUser(i);
                          if (null == o) throw Error();
                          await c.A.setCommunicationDisabledUntil({
                              guildId: n.id,
                              userId: i,
                              communicationDisabledUntilTimestamp: a()().add(t, "s").toISOString(),
                              duration: t,
                              reason: s,
                          }),
                              d.A.sendBotMessage(
                                  r.id,
                                  D.intl.formatToPlainString(D.t.BbRV6o, { user: v.Ay.getUserTag(o), duration: t }),
                              );
                      })().catch(() => {
                          d.A.sendBotMessage(r.id, D.intl.string(D.t["+mWyVq"]));
                      })
                    : d.A.sendBotMessage(r.id, D.intl.string(D.t.F5pqSf));
            },
        },
        {
            id: "-14",
            untranslatedName: "msg",
            displayName: "msg",
            type: _.kc.CHAT,
            inputType: C.y$.BUILT_IN,
            applicationId: N.Ik.BUILT_IN,
            get untranslatedDescription() {
                return D.intl.string(D.t.Dg8XZw);
            },
            get displayDescription() {
                return D.intl.string(D.t.Dg8XZw);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: _.n4.USER,
                    get description() {
                        return D.intl.string(D.t["KmVq/D"]);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t["KmVq/D"]);
                    },
                    required: !0,
                },
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return D.intl.string(D.t.oGUuOJ);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.oGUuOJ);
                    },
                    required: !0,
                    get maxLength() {
                        return (0, h.a)();
                    },
                },
            ],
            execute: (e, t) => {
                let { channel: n } = t;
                if (null == n) return;
                let r = w(e, "user"),
                    s = w(e, "message") ?? "";
                (async () => {
                    await u.A.openPrivateChannel({ recipientIds: r }).then((e) => {
                        let t = I.A.getChannel(e);
                        i()(null != t, "Newly created PrivateChannel is null"),
                            d.A.sendMessage(t.id, p.Ay.parse(t, s), !0, { location: b.Hx.PRIVATE_MESSAGE_COMMAND });
                    });
                })().catch(() => {
                    d.A.sendBotMessage(n.id, D.intl.string(D.t["3XaE95"]));
                });
            },
        },
    ],
    P = x.filter((e) =>
        ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.untranslatedName),
    ),
    k = (e, t, n) => {
        let r = t ? x : P;
        return r.filter(
            (t) =>
                e.includes(t.type) &&
                (!n || t.inputType === C.y$.BUILT_IN_TEXT || t.inputType === C.y$.BUILT_IN_INTEGRATION),
        );
    };
