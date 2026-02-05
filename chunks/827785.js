"use strict";
n.d(t, { Ez: () => M, gZ: () => w });
var r = n(284009),
    i = n.n(r),
    a = n(989349),
    s = n.n(a),
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
    g = n(406704),
    E = n(253932),
    A = n(734057),
    I = n(576705),
    T = n(287809),
    y = n(927813),
    S = n(427262),
    v = n(392054),
    C = n(73510),
    b = n(652215),
    N = n(200700),
    R = n(381941),
    O = n(985018);
let D = n(743361).A,
    L = (e, t) => e.find((e) => e.name === t)?.value,
    w = {
        [C.Ik.BUILT_IN]: {
            id: C.Ik.BUILT_IN,
            type: v.Hf.BUILT_IN,
            get name() {
                return O.intl.string(O.t.fI5MTa);
            },
        },
        [C.Ik.FRECENCY]: {
            id: C.Ik.FRECENCY,
            type: v.Hf.BUILT_IN,
            get name() {
                return O.intl.string(O.t["+cGVV6"]);
            },
        },
    },
    x = [
        ...D,
        {
            id: "-1",
            untranslatedName: "shrug",
            displayName: "shrug",
            type: _.kc.CHAT,
            inputType: v.y$.BUILT_IN_TEXT,
            applicationId: C.Ik.BUILT_IN,
            get untranslatedDescription() {
                return O.intl.string(O.t.j5xUSW);
            },
            get displayDescription() {
                return O.intl.string(O.t.j5xUSW);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return O.intl.string(O.t.JewOrS);
                    },
                    get displayDescription() {
                        return O.intl.string(O.t.JewOrS);
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
            applicationId: C.Ik.BUILT_IN,
            get untranslatedDescription() {
                return O.intl.string(O.t.nrQRce);
            },
            get displayDescription() {
                return O.intl.string(O.t.nrQRce);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return O.intl.string(O.t.EI80tw);
                    },
                    get displayDescription() {
                        return O.intl.string(O.t.EI80tw);
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
            applicationId: C.Ik.BUILT_IN,
            get untranslatedDescription() {
                return O.intl.string(O.t.pnnn8e);
            },
            get displayDescription() {
                return O.intl.string(O.t.pnnn8e);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return O.intl.string(O.t.ETs6go);
                    },
                    get displayDescription() {
                        return O.intl.string(O.t.ETs6go);
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
            applicationId: C.Ik.BUILT_IN,
            get untranslatedDescription() {
                return O.intl.string(O.t.jZcIid);
            },
            get displayDescription() {
                return O.intl.string(O.t.jZcIid);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return O.intl.string(O.t["k+sw9g"]);
                    },
                    get displayDescription() {
                        return O.intl.string(O.t["k+sw9g"]);
                    },
                    required: !0,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return null != t && !t.isPrivate() && E.on.getSetting() && I.A.can(b.xBc.SEND_TTS_MESSAGES, t);
            },
            execute: (e) => ({ content: L(e, "message") ?? "", tts: !0 }),
        },
        {
            id: "-5",
            untranslatedName: "me",
            displayName: "me",
            type: _.kc.CHAT,
            inputType: v.y$.BUILT_IN_TEXT,
            applicationId: C.Ik.BUILT_IN,
            get untranslatedDescription() {
                return O.intl.string(O.t.UGO8fU);
            },
            get displayDescription() {
                return O.intl.string(O.t.UGO8fU);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return O.intl.string(O.t.RWTgNd);
                    },
                    get displayDescription() {
                        return O.intl.string(O.t.RWTgNd);
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
            applicationId: C.Ik.BUILT_IN,
            get untranslatedDescription() {
                return O.intl.string(O.t.v0eDdV);
            },
            get displayDescription() {
                return O.intl.string(O.t.v0eDdV);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return O.intl.string(O.t.D13pbc);
                    },
                    get displayDescription() {
                        return O.intl.string(O.t.D13pbc);
                    },
                    required: !0,
                },
            ],
            execute: (e) => {
                let t = L(e, "message") ?? "";
                return { content: (0, b.ZGg)(t).trim() };
            },
        },
        {
            id: "-7",
            untranslatedName: "nick",
            displayName: "nick",
            type: _.kc.CHAT,
            inputType: v.y$.BUILT_IN,
            applicationId: C.Ik.BUILT_IN,
            get untranslatedDescription() {
                return O.intl.string(O.t["jiHfS/"]);
            },
            get displayDescription() {
                return O.intl.string(O.t["jiHfS/"]);
            },
            options: [
                {
                    name: "new_nick",
                    displayName: "new_nick",
                    type: _.n4.STRING,
                    get description() {
                        return O.intl.string(O.t.WTSzVu);
                    },
                    get displayDescription() {
                        return O.intl.string(O.t.WTSzVu);
                    },
                    maxLength: b.zzC,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return (
                    null != t &&
                    !t.isPrivate() &&
                    (I.A.can(b.xBc.CHANGE_NICKNAME, t) || I.A.can(b.xBc.MANAGE_NICKNAMES, t))
                );
            },
            execute: (e, t) => {
                let { guild: n, channel: r } = t;
                if (null == n || null == r) return;
                let i = L(e, "new_nick") ?? "";
                l.A.changeNickname(n.id, r.id, b.ME, i || "");
            },
        },
        {
            id: "-10",
            untranslatedName: "thread",
            displayName: "thread",
            type: _.kc.CHAT,
            inputType: v.y$.BUILT_IN,
            applicationId: C.Ik.BUILT_IN,
            get untranslatedDescription() {
                return O.intl.string(O.t.t6ZAS0);
            },
            get displayDescription() {
                return O.intl.string(O.t.t6ZAS0);
            },
            options: [
                {
                    name: "name",
                    displayName: "name",
                    type: _.n4.STRING,
                    get description() {
                        return O.intl.string(O.t.TffOfY);
                    },
                    get displayDescription() {
                        return O.intl.string(O.t.TffOfY);
                    },
                    required: !0,
                },
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return O.intl.string(O.t.QXfSfU);
                    },
                    get displayDescription() {
                        return O.intl.string(O.t.QXfSfU);
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
                    r = L(e, "name") ?? "",
                    i = L(e, "message") ?? "",
                    a = await (0, m.Nw)(n, r, o.r.PUBLIC_THREAD, (0, h.Gl)(n, null), "Slash Command");
                d.A.sendMessage(a.id, p.Ay.parse(a, i), !0, { location: R.Hx.THREAD_CREATION });
            },
        },
        {
            id: "-11",
            untranslatedName: "kick",
            displayName: "kick",
            type: _.kc.CHAT,
            inputType: v.y$.BUILT_IN,
            applicationId: C.Ik.BUILT_IN,
            get untranslatedDescription() {
                return O.intl.string(O.t["03N0UL"]);
            },
            get displayDescription() {
                return O.intl.string(O.t["03N0UL"]);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: _.n4.USER,
                    get description() {
                        return O.intl.string(O.t.gF8IpD);
                    },
                    get displayDescription() {
                        return O.intl.string(O.t.gF8IpD);
                    },
                    required: !0,
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: _.n4.STRING,
                    get description() {
                        return O.intl.string(O.t.QWldgj);
                    },
                    get displayDescription() {
                        return O.intl.string(O.t.QWldgj);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return I.A.can(b.xBc.KICK_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: r } = t;
                if (null == n || null == r) return;
                let i = L(e, "user") ?? "";
                I.A.canManageUser(b.xBc.KICK_MEMBERS, i, n)
                    ? (async () => {
                          let t = T.default.getUser(i);
                          if (null == t) throw Error();
                          await c.A.kickUser(n.id, i, L(e, "reason") ?? ""),
                              d.A.sendBotMessage(
                                  r.id,
                                  O.intl.formatToPlainString(O.t["9wzHDV"], { user: S.Ay.getUserTag(t) }),
                              );
                      })().catch(() => {
                          d.A.sendBotMessage(r.id, O.intl.string(O.t.l0gNlp));
                      })
                    : d.A.sendBotMessage(r.id, O.intl.string(O.t["6RIwPI"]));
            },
        },
        {
            id: "-12",
            untranslatedName: "ban",
            displayName: "ban",
            type: _.kc.CHAT,
            inputType: v.y$.BUILT_IN,
            applicationId: C.Ik.BUILT_IN,
            get untranslatedDescription() {
                return O.intl.string(O.t.HWuskv);
            },
            get displayDescription() {
                return O.intl.string(O.t.HWuskv);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: _.n4.USER,
                    get description() {
                        return O.intl.string(O.t.z3XPjr);
                    },
                    get displayDescription() {
                        return O.intl.string(O.t.z3XPjr);
                    },
                    required: !0,
                },
                {
                    name: "delete_messages",
                    displayName: "delete_messages",
                    type: _.n4.INTEGER,
                    get description() {
                        return O.intl.string(O.t.smrvA6);
                    },
                    get displayDescription() {
                        return O.intl.string(O.t.smrvA6);
                    },
                    required: !0,
                    get choices() {
                        return [
                            { name: O.intl.string(O.t["4obaMS"]), displayName: O.intl.string(O.t["4obaMS"]), value: 0 },
                            {
                                name: O.intl.string(O.t.RKpitY),
                                displayName: O.intl.string(O.t.RKpitY),
                                value: y.A.Seconds.HOUR,
                            },
                            {
                                name: O.intl.string(O.t["8WfJZ8"]),
                                displayName: O.intl.string(O.t["8WfJZ8"]),
                                value: 6 * y.A.Seconds.HOUR,
                            },
                            {
                                name: O.intl.string(O.t.p1up7u),
                                displayName: O.intl.string(O.t.p1up7u),
                                value: 12 * y.A.Seconds.HOUR,
                            },
                            {
                                name: O.intl.string(O.t.XuVkkD),
                                displayName: O.intl.string(O.t.XuVkkD),
                                value: y.A.Seconds.DAY,
                            },
                            {
                                name: O.intl.string(O.t["gMcDS+"]),
                                displayName: O.intl.string(O.t["gMcDS+"]),
                                value: 3 * y.A.Seconds.DAY,
                            },
                            {
                                name: O.intl.string(O.t.FA7IUk),
                                displayName: O.intl.string(O.t.FA7IUk),
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
                        return O.intl.string(O.t.dG4noU);
                    },
                    get displayDescription() {
                        return O.intl.string(O.t.dG4noU);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return I.A.can(b.xBc.BAN_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: r } = t;
                if (null == n || null == r) return;
                let i = L(e, "user") ?? "";
                I.A.canManageUser(b.xBc.BAN_MEMBERS, i, n)
                    ? (async () => {
                          if ("" === i) throw Error();
                          let t = L(e, "delete_messages") ?? 0,
                              a = L(e, "reason") ?? "",
                              s = T.default.getUser(i);
                          await c.A.banUser(n.id, i, t, a),
                              d.A.sendBotMessage(
                                  r.id,
                                  O.intl.formatToPlainString(O.t.YflWdM, { user: null != s ? S.Ay.getUserTag(s) : i }),
                              );
                      })().catch(() => {
                          d.A.sendBotMessage(r.id, O.intl.string(O.t.w2J6Qs));
                      })
                    : d.A.sendBotMessage(r.id, O.intl.string(O.t.R27LJl));
            },
        },
        {
            id: "-13",
            untranslatedName: "timeout",
            displayName: "timeout",
            type: _.kc.CHAT,
            inputType: v.y$.BUILT_IN,
            applicationId: C.Ik.BUILT_IN,
            get untranslatedDescription() {
                return O.intl.string(O.t.KkPcep);
            },
            get displayDescription() {
                return O.intl.string(O.t.KkPcep);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: _.n4.USER,
                    get description() {
                        return O.intl.string(O.t.UU3VRm);
                    },
                    get displayDescription() {
                        return O.intl.string(O.t.UU3VRm);
                    },
                    required: !0,
                },
                {
                    name: "duration",
                    displayName: "duration",
                    type: _.n4.INTEGER,
                    get description() {
                        return O.intl.string(O.t.SNqN1e);
                    },
                    get displayDescription() {
                        return O.intl.string(O.t.SNqN1e);
                    },
                    required: !0,
                    get choices() {
                        return (0, N.ny)().map((e) => ({ ...e, name: e.label, displayName: e.label }));
                    },
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: _.n4.STRING,
                    get description() {
                        return O.intl.string(O.t.akHScA);
                    },
                    get displayDescription() {
                        return O.intl.string(O.t.akHScA);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return I.A.can(b.xBc.MODERATE_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: r } = t;
                if (null == n || null == r) return;
                let i = L(e, "user");
                (0, f.b)(n.id, i)
                    ? (async () => {
                          let t = L(e, "duration") ?? "",
                              a = L(e, "reason") ?? "",
                              o = T.default.getUser(i);
                          if (null == o) throw Error();
                          await c.A.setCommunicationDisabledUntil({
                              guildId: n.id,
                              userId: i,
                              communicationDisabledUntilTimestamp: s()().add(t, "s").toISOString(),
                              duration: t,
                              reason: a,
                          }),
                              d.A.sendBotMessage(
                                  r.id,
                                  O.intl.formatToPlainString(O.t.BbRV6o, { user: S.Ay.getUserTag(o), duration: t }),
                              );
                      })().catch(() => {
                          d.A.sendBotMessage(r.id, O.intl.string(O.t["+mWyVq"]));
                      })
                    : d.A.sendBotMessage(r.id, O.intl.string(O.t.F5pqSf));
            },
        },
        {
            id: "-14",
            untranslatedName: "msg",
            displayName: "msg",
            type: _.kc.CHAT,
            inputType: v.y$.BUILT_IN,
            applicationId: C.Ik.BUILT_IN,
            get untranslatedDescription() {
                return O.intl.string(O.t.Dg8XZw);
            },
            get displayDescription() {
                return O.intl.string(O.t.Dg8XZw);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: _.n4.USER,
                    get description() {
                        return O.intl.string(O.t["KmVq/D"]);
                    },
                    get displayDescription() {
                        return O.intl.string(O.t["KmVq/D"]);
                    },
                    required: !0,
                },
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return O.intl.string(O.t.oGUuOJ);
                    },
                    get displayDescription() {
                        return O.intl.string(O.t.oGUuOJ);
                    },
                    required: !0,
                    get maxLength() {
                        return T.default.getCurrentUser()?.premiumType ? b.CS1 : b.uvi;
                    },
                },
            ],
            execute: (e, t) => {
                let { channel: n } = t;
                if (null == n) return;
                let r = L(e, "user"),
                    a = L(e, "message") ?? "";
                (async () => {
                    await u.A.openPrivateChannel({ recipientIds: r }).then((e) => {
                        let t = A.A.getChannel(e);
                        i()(null != t, "Newly created PrivateChannel is null"),
                            d.A.sendMessage(t.id, p.Ay.parse(t, a), !0, { location: R.Hx.PRIVATE_MESSAGE_COMMAND });
                    });
                })().catch(() => {
                    d.A.sendBotMessage(n.id, O.intl.string(O.t["3XaE95"]));
                });
            },
        },
    ],
    P = x.filter((e) =>
        ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.untranslatedName),
    ),
    M = (e, t, n) => {
        let r = t ? x : P;
        return r.filter(
            (t) =>
                e.includes(t.type) &&
                (!n || t.inputType === v.y$.BUILT_IN_TEXT || t.inputType === v.y$.BUILT_IN_INTEGRATION),
        );
    };
