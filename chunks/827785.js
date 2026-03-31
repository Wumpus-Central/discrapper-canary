"use strict";
n.d(t, { Ez: () => x, gZ: () => w });
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
    h = n(268761),
    m = n(393309),
    E = n(406704),
    g = n(253932),
    A = n(734057),
    I = n(576705),
    T = n(287809),
    S = n(927813),
    y = n(427262),
    v = n(392054),
    N = n(73510),
    C = n(652215),
    R = n(200700),
    O = n(381941),
    b = n(985018);
let D = n(743361).A,
    L = (e, t) => e.find((e) => e.name === t)?.value,
    w = {
        [N.Ik.BUILT_IN]: {
            id: N.Ik.BUILT_IN,
            type: v.Hf.BUILT_IN,
            get name() {
                return b.intl.string(b.t.fI5MTa);
            },
        },
        [N.Ik.FRECENCY]: {
            id: N.Ik.FRECENCY,
            type: v.Hf.BUILT_IN,
            get name() {
                return b.intl.string(b.t["+cGVV6"]);
            },
        },
    },
    M = [
        ...D,
        {
            id: "-1",
            untranslatedName: "shrug",
            displayName: "shrug",
            type: _.kc.CHAT,
            inputType: v.y$.BUILT_IN_TEXT,
            applicationId: N.Ik.BUILT_IN,
            get untranslatedDescription() {
                return b.intl.string(b.t.j5xUSW);
            },
            get displayDescription() {
                return b.intl.string(b.t.j5xUSW);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return b.intl.string(b.t.JewOrS);
                    },
                    get displayDescription() {
                        return b.intl.string(b.t.JewOrS);
                    },
                },
            ],
            execute: (e) => {
                let t = L(e, "message") ?? "";
                return { content: `${t} \xaf\\_(ツ)_/\xaf`.trim() };
            },
        },
        {
            id: "-2",
            untranslatedName: "tableflip",
            displayName: "tableflip",
            type: _.kc.CHAT,
            inputType: v.y$.BUILT_IN_TEXT,
            applicationId: N.Ik.BUILT_IN,
            get untranslatedDescription() {
                return b.intl.string(b.t.nrQRce);
            },
            get displayDescription() {
                return b.intl.string(b.t.nrQRce);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return b.intl.string(b.t.EI80tw);
                    },
                    get displayDescription() {
                        return b.intl.string(b.t.EI80tw);
                    },
                },
            ],
            execute: (e) => {
                let t = L(e, "message") ?? "";
                return { content: `${t} (╯\xb0□\xb0)╯︵ ┻━┻`.trim() };
            },
        },
        {
            id: "-3",
            untranslatedName: "unflip",
            displayName: "unflip",
            type: _.kc.CHAT,
            inputType: v.y$.BUILT_IN_TEXT,
            applicationId: N.Ik.BUILT_IN,
            get untranslatedDescription() {
                return b.intl.string(b.t.pnnn8e);
            },
            get displayDescription() {
                return b.intl.string(b.t.pnnn8e);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return b.intl.string(b.t.ETs6go);
                    },
                    get displayDescription() {
                        return b.intl.string(b.t.ETs6go);
                    },
                },
            ],
            execute: (e) => {
                let t = L(e, "message") ?? "";
                return { content: `${t} ┬─┬ノ( \xba _ \xbaノ)`.trim() };
            },
        },
        {
            id: "-4",
            untranslatedName: "tts",
            displayName: "tts",
            type: _.kc.CHAT,
            inputType: v.y$.BUILT_IN_TEXT,
            applicationId: N.Ik.BUILT_IN,
            get untranslatedDescription() {
                return b.intl.string(b.t.jZcIid);
            },
            get displayDescription() {
                return b.intl.string(b.t.jZcIid);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return b.intl.string(b.t["k+sw9g"]);
                    },
                    get displayDescription() {
                        return b.intl.string(b.t["k+sw9g"]);
                    },
                    required: !0,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return null != t && !t.isPrivate() && g.on.getSetting() && I.A.can(C.xBc.SEND_TTS_MESSAGES, t);
            },
            execute: (e) => ({ content: L(e, "message") ?? "", tts: !0 }),
        },
        {
            id: "-5",
            untranslatedName: "me",
            displayName: "me",
            type: _.kc.CHAT,
            inputType: v.y$.BUILT_IN_TEXT,
            applicationId: N.Ik.BUILT_IN,
            get untranslatedDescription() {
                return b.intl.string(b.t.UGO8fU);
            },
            get displayDescription() {
                return b.intl.string(b.t.UGO8fU);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return b.intl.string(b.t.RWTgNd);
                    },
                    get displayDescription() {
                        return b.intl.string(b.t.RWTgNd);
                    },
                    required: !0,
                },
            ],
            execute: (e) => {
                let t = L(e, "message") ?? "";
                return { content: `_${t}_` };
            },
        },
        {
            id: "-6",
            untranslatedName: "spoiler",
            displayName: "spoiler",
            type: _.kc.CHAT,
            inputType: v.y$.BUILT_IN_TEXT,
            applicationId: N.Ik.BUILT_IN,
            get untranslatedDescription() {
                return b.intl.string(b.t.v0eDdV);
            },
            get displayDescription() {
                return b.intl.string(b.t.v0eDdV);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return b.intl.string(b.t.D13pbc);
                    },
                    get displayDescription() {
                        return b.intl.string(b.t.D13pbc);
                    },
                    required: !0,
                },
            ],
            execute: (e) => {
                let t = L(e, "message") ?? "";
                return { content: (0, C.ZGg)(t).trim() };
            },
        },
        {
            id: "-7",
            untranslatedName: "nick",
            displayName: "nick",
            type: _.kc.CHAT,
            inputType: v.y$.BUILT_IN,
            applicationId: N.Ik.BUILT_IN,
            get untranslatedDescription() {
                return b.intl.string(b.t["jiHfS/"]);
            },
            get displayDescription() {
                return b.intl.string(b.t["jiHfS/"]);
            },
            options: [
                {
                    name: "new_nick",
                    displayName: "new_nick",
                    type: _.n4.STRING,
                    get description() {
                        return b.intl.string(b.t.WTSzVu);
                    },
                    get displayDescription() {
                        return b.intl.string(b.t.WTSzVu);
                    },
                    maxLength: C.zzC,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return (
                    null != t &&
                    !t.isPrivate() &&
                    (I.A.can(C.xBc.CHANGE_NICKNAME, t) || I.A.can(C.xBc.MANAGE_NICKNAMES, t))
                );
            },
            execute: (e, t) => {
                let { guild: n, channel: r } = t;
                if (null == n || null == r) return;
                let i = L(e, "new_nick") ?? "";
                l.A.changeNickname(n.id, r.id, C.ME, i || "");
            },
        },
        {
            id: "-10",
            untranslatedName: "thread",
            displayName: "thread",
            type: _.kc.CHAT,
            inputType: v.y$.BUILT_IN,
            applicationId: N.Ik.BUILT_IN,
            get untranslatedDescription() {
                return b.intl.string(b.t.t6ZAS0);
            },
            get displayDescription() {
                return b.intl.string(b.t.t6ZAS0);
            },
            options: [
                {
                    name: "name",
                    displayName: "name",
                    type: _.n4.STRING,
                    get description() {
                        return b.intl.string(b.t.TffOfY);
                    },
                    get displayDescription() {
                        return b.intl.string(b.t.TffOfY);
                    },
                    required: !0,
                },
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return b.intl.string(b.t.QXfSfU);
                    },
                    get displayDescription() {
                        return b.intl.string(b.t.QXfSfU);
                    },
                    required: !0,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return null != t && (0, E.D1)(t);
            },
            execute: async (e, t) => {
                let { channel: n } = t,
                    r = L(e, "name") ?? "",
                    i = L(e, "message") ?? "",
                    s = await (0, m.Nw)(n, r, o.r.PUBLIC_THREAD, (0, h.Gl)(n, null), "Slash Command");
                d.A.sendMessage(s.id, p.Ay.parse(s, i), !0, { location: O.Hx.THREAD_CREATION });
            },
        },
        {
            id: "-11",
            untranslatedName: "kick",
            displayName: "kick",
            type: _.kc.CHAT,
            inputType: v.y$.BUILT_IN,
            applicationId: N.Ik.BUILT_IN,
            get untranslatedDescription() {
                return b.intl.string(b.t["03N0UL"]);
            },
            get displayDescription() {
                return b.intl.string(b.t["03N0UL"]);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: _.n4.USER,
                    get description() {
                        return b.intl.string(b.t.gF8IpD);
                    },
                    get displayDescription() {
                        return b.intl.string(b.t.gF8IpD);
                    },
                    required: !0,
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: _.n4.STRING,
                    get description() {
                        return b.intl.string(b.t.QWldgj);
                    },
                    get displayDescription() {
                        return b.intl.string(b.t.QWldgj);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return I.A.can(C.xBc.KICK_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: r } = t;
                if (null == n || null == r) return;
                let i = L(e, "user") ?? "";
                I.A.canManageUser(C.xBc.KICK_MEMBERS, i, n)
                    ? (async () => {
                          let t = T.default.getUser(i);
                          if (null == t) throw Error();
                          await c.A.kickUser(n.id, i, L(e, "reason") ?? ""),
                              d.A.sendBotMessage(
                                  r.id,
                                  b.intl.formatToPlainString(b.t["9wzHDV"], { user: y.Ay.getUserTag(t) }),
                              );
                      })().catch(() => {
                          d.A.sendBotMessage(r.id, b.intl.string(b.t.l0gNlp));
                      })
                    : d.A.sendBotMessage(r.id, b.intl.string(b.t["6RIwPI"]));
            },
        },
        {
            id: "-12",
            untranslatedName: "ban",
            displayName: "ban",
            type: _.kc.CHAT,
            inputType: v.y$.BUILT_IN,
            applicationId: N.Ik.BUILT_IN,
            get untranslatedDescription() {
                return b.intl.string(b.t.HWuskv);
            },
            get displayDescription() {
                return b.intl.string(b.t.HWuskv);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: _.n4.USER,
                    get description() {
                        return b.intl.string(b.t.z3XPjr);
                    },
                    get displayDescription() {
                        return b.intl.string(b.t.z3XPjr);
                    },
                    required: !0,
                },
                {
                    name: "delete_messages",
                    displayName: "delete_messages",
                    type: _.n4.INTEGER,
                    get description() {
                        return b.intl.string(b.t.smrvA6);
                    },
                    get displayDescription() {
                        return b.intl.string(b.t.smrvA6);
                    },
                    required: !0,
                    get choices() {
                        return [
                            { name: b.intl.string(b.t["4obaMS"]), displayName: b.intl.string(b.t["4obaMS"]), value: 0 },
                            {
                                name: b.intl.string(b.t.RKpitY),
                                displayName: b.intl.string(b.t.RKpitY),
                                value: S.A.Seconds.HOUR,
                            },
                            {
                                name: b.intl.string(b.t["8WfJZ8"]),
                                displayName: b.intl.string(b.t["8WfJZ8"]),
                                value: 6 * S.A.Seconds.HOUR,
                            },
                            {
                                name: b.intl.string(b.t.p1up7u),
                                displayName: b.intl.string(b.t.p1up7u),
                                value: 12 * S.A.Seconds.HOUR,
                            },
                            {
                                name: b.intl.string(b.t.XuVkkD),
                                displayName: b.intl.string(b.t.XuVkkD),
                                value: S.A.Seconds.DAY,
                            },
                            {
                                name: b.intl.string(b.t["gMcDS+"]),
                                displayName: b.intl.string(b.t["gMcDS+"]),
                                value: 3 * S.A.Seconds.DAY,
                            },
                            {
                                name: b.intl.string(b.t.FA7IUk),
                                displayName: b.intl.string(b.t.FA7IUk),
                                value: 7 * S.A.Seconds.DAY,
                            },
                        ];
                    },
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: _.n4.STRING,
                    get description() {
                        return b.intl.string(b.t.dG4noU);
                    },
                    get displayDescription() {
                        return b.intl.string(b.t.dG4noU);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return I.A.can(C.xBc.BAN_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: r } = t;
                if (null == n || null == r) return;
                let i = L(e, "user") ?? "";
                I.A.canManageUser(C.xBc.BAN_MEMBERS, i, n)
                    ? (async () => {
                          if ("" === i) throw Error();
                          let t = L(e, "delete_messages") ?? 0,
                              s = L(e, "reason") ?? "",
                              a = T.default.getUser(i);
                          await c.A.banUser(n.id, i, t, s),
                              d.A.sendBotMessage(
                                  r.id,
                                  b.intl.formatToPlainString(b.t.YflWdM, { user: null != a ? y.Ay.getUserTag(a) : i }),
                              );
                      })().catch(() => {
                          d.A.sendBotMessage(r.id, b.intl.string(b.t.w2J6Qs));
                      })
                    : d.A.sendBotMessage(r.id, b.intl.string(b.t.R27LJl));
            },
        },
        {
            id: "-13",
            untranslatedName: "timeout",
            displayName: "timeout",
            type: _.kc.CHAT,
            inputType: v.y$.BUILT_IN,
            applicationId: N.Ik.BUILT_IN,
            get untranslatedDescription() {
                return b.intl.string(b.t.KkPcep);
            },
            get displayDescription() {
                return b.intl.string(b.t.KkPcep);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: _.n4.USER,
                    get description() {
                        return b.intl.string(b.t.UU3VRm);
                    },
                    get displayDescription() {
                        return b.intl.string(b.t.UU3VRm);
                    },
                    required: !0,
                },
                {
                    name: "duration",
                    displayName: "duration",
                    type: _.n4.INTEGER,
                    get description() {
                        return b.intl.string(b.t.SNqN1e);
                    },
                    get displayDescription() {
                        return b.intl.string(b.t.SNqN1e);
                    },
                    required: !0,
                    get choices() {
                        return (0, R.ny)().map((e) => ({ ...e, name: e.label, displayName: e.label }));
                    },
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: _.n4.STRING,
                    get description() {
                        return b.intl.string(b.t.akHScA);
                    },
                    get displayDescription() {
                        return b.intl.string(b.t.akHScA);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return I.A.can(C.xBc.MODERATE_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: r } = t;
                if (null == n || null == r) return;
                let i = L(e, "user");
                (0, f.b)(n.id, i)
                    ? (async () => {
                          let t = L(e, "duration") ?? "",
                              s = L(e, "reason") ?? "",
                              o = T.default.getUser(i);
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
                                  b.intl.formatToPlainString(b.t.BbRV6o, { user: y.Ay.getUserTag(o), duration: t }),
                              );
                      })().catch(() => {
                          d.A.sendBotMessage(r.id, b.intl.string(b.t["+mWyVq"]));
                      })
                    : d.A.sendBotMessage(r.id, b.intl.string(b.t.F5pqSf));
            },
        },
        {
            id: "-14",
            untranslatedName: "msg",
            displayName: "msg",
            type: _.kc.CHAT,
            inputType: v.y$.BUILT_IN,
            applicationId: N.Ik.BUILT_IN,
            get untranslatedDescription() {
                return b.intl.string(b.t.Dg8XZw);
            },
            get displayDescription() {
                return b.intl.string(b.t.Dg8XZw);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: _.n4.USER,
                    get description() {
                        return b.intl.string(b.t["KmVq/D"]);
                    },
                    get displayDescription() {
                        return b.intl.string(b.t["KmVq/D"]);
                    },
                    required: !0,
                },
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return b.intl.string(b.t.oGUuOJ);
                    },
                    get displayDescription() {
                        return b.intl.string(b.t.oGUuOJ);
                    },
                    required: !0,
                    get maxLength() {
                        return T.default.getCurrentUser()?.premiumType != null ? C.CS1 : C.uvi;
                    },
                },
            ],
            execute: (e, t) => {
                let { channel: n } = t;
                if (null == n) return;
                let r = L(e, "user"),
                    s = L(e, "message") ?? "";
                (async () => {
                    await u.A.openPrivateChannel({ recipientIds: r }).then((e) => {
                        let t = A.A.getChannel(e);
                        i()(null != t, "Newly created PrivateChannel is null"),
                            d.A.sendMessage(t.id, p.Ay.parse(t, s), !0, { location: O.Hx.PRIVATE_MESSAGE_COMMAND });
                    });
                })().catch(() => {
                    d.A.sendBotMessage(n.id, b.intl.string(b.t["3XaE95"]));
                });
            },
        },
    ],
    P = M.filter((e) =>
        ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.untranslatedName),
    ),
    x = (e, t, n) => {
        let r = t ? M : P;
        return r.filter(
            (t) =>
                e.includes(t.type) &&
                (!n || t.inputType === v.y$.BUILT_IN_TEXT || t.inputType === v.y$.BUILT_IN_INTEGRATION),
        );
    };
