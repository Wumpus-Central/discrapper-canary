"use strict";
n.d(t, { Ez: () => U, gZ: () => M });
var i = n(284009),
    r = n.n(i),
    s = n(989349),
    a = n.n(s),
    o = n(478437),
    l = n(715943),
    u = n(308528),
    c = n(66834),
    d = n(720149),
    _ = n(155718),
    f = n(838111),
    h = n(451909),
    p = n(135621),
    E = n(268761),
    m = n(659617),
    g = n(406704),
    A = n(885386),
    I = n(734057),
    T = n(576705),
    S = n(287809),
    N = n(927813),
    y = n(427262),
    C = n(392054),
    v = n(73510),
    O = n(652215),
    R = n(200700),
    b = n(381941),
    D = n(375708);
let L = n(743361).A,
    w = (e, t) => e.find((e) => e.name === t)?.value,
    M = {
        [v.Ik.BUILT_IN]: {
            id: v.Ik.BUILT_IN,
            type: C.Hf.BUILT_IN,
            get name() {
                return D.intl.string(D.t.fI5MTa);
            },
        },
        [v.Ik.FRECENCY]: {
            id: v.Ik.FRECENCY,
            type: C.Hf.BUILT_IN,
            get name() {
                return D.intl.string(D.t["+cGVV6"]);
            },
        },
    },
    P = [
        ...L,
        {
            id: "-1",
            untranslatedName: "shrug",
            displayName: "shrug",
            type: _.kc.CHAT,
            inputType: C.y$.BUILT_IN_TEXT,
            applicationId: v.Ik.BUILT_IN,
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
                return { content: `${t} \xaf\\_(\u{30C4})_/\xaf`.trim() };
            },
        },
        {
            id: "-2",
            untranslatedName: "tableflip",
            displayName: "tableflip",
            type: _.kc.CHAT,
            inputType: C.y$.BUILT_IN_TEXT,
            applicationId: v.Ik.BUILT_IN,
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
                return { content: `${t} (\u{256F}\xb0\u{25A1}\xb0)\u{256F}\u{FE35} \u{253B}\u{2501}\u{253B}`.trim() };
            },
        },
        {
            id: "-3",
            untranslatedName: "unflip",
            displayName: "unflip",
            type: _.kc.CHAT,
            inputType: C.y$.BUILT_IN_TEXT,
            applicationId: v.Ik.BUILT_IN,
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
                return { content: `${t} \u{252C}\u{2500}\u{252C}\u{30CE}( \xba _ \xba\u{30CE})`.trim() };
            },
        },
        {
            id: "-4",
            untranslatedName: "tts",
            displayName: "tts",
            type: _.kc.CHAT,
            inputType: C.y$.BUILT_IN_TEXT,
            applicationId: v.Ik.BUILT_IN,
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
                return null != t && !t.isPrivate() && A.on.getSetting() && T.A.can(O.xBc.SEND_TTS_MESSAGES, t);
            },
            execute: (e) => ({ content: w(e, "message") ?? "", tts: !0 }),
        },
        {
            id: "-5",
            untranslatedName: "me",
            displayName: "me",
            type: _.kc.CHAT,
            inputType: C.y$.BUILT_IN_TEXT,
            applicationId: v.Ik.BUILT_IN,
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
            applicationId: v.Ik.BUILT_IN,
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
                return { content: (0, O.ZGg)(t).trim() };
            },
        },
        {
            id: "-7",
            untranslatedName: "nick",
            displayName: "nick",
            type: _.kc.CHAT,
            inputType: C.y$.BUILT_IN,
            applicationId: v.Ik.BUILT_IN,
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
                    maxLength: O.zzC,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return (
                    null != t &&
                    !t.isPrivate() &&
                    (T.A.can(O.xBc.CHANGE_NICKNAME, t) || T.A.can(O.xBc.MANAGE_NICKNAMES, t))
                );
            },
            execute: (e, t) => {
                let { guild: n, channel: i } = t;
                if (null == n || null == i) return;
                let r = w(e, "new_nick") ?? "";
                l.A.changeNickname(n.id, i.id, O.ME, r || "");
            },
        },
        {
            id: "-10",
            untranslatedName: "thread",
            displayName: "thread",
            type: _.kc.CHAT,
            inputType: C.y$.BUILT_IN,
            applicationId: v.Ik.BUILT_IN,
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
                    maxLength: O.Ign,
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
                        return (0, p.a)();
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
                    i = w(e, "name") ?? "",
                    r = w(e, "message") ?? "",
                    s = await (0, m.Nw)(n, i, o.r.PUBLIC_THREAD, (0, E.Gl)(n, null), "Slash Command");
                d.A.sendMessage(s.id, h.Ay.parse(s, r), !0, { location: b.Hx.THREAD_CREATION });
            },
        },
        {
            id: "-11",
            untranslatedName: "kick",
            displayName: "kick",
            type: _.kc.CHAT,
            inputType: C.y$.BUILT_IN,
            applicationId: v.Ik.BUILT_IN,
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
                return T.A.can(O.xBc.KICK_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: i } = t;
                if (null == n || null == i) return;
                let r = w(e, "user") ?? "";
                T.A.canManageUser(O.xBc.KICK_MEMBERS, r, n)
                    ? (async () => {
                          let t = S.default.getUser(r);
                          if (null == t) throw Error();
                          await c.A.kickUser(n.id, r, w(e, "reason") ?? ""),
                              d.A.sendBotMessage(
                                  i.id,
                                  D.intl.formatToPlainString(D.t["9wzHDV"], { user: y.Ay.getUserTag(t) }),
                              );
                      })().catch(() => {
                          d.A.sendBotMessage(i.id, D.intl.string(D.t.l0gNlp));
                      })
                    : d.A.sendBotMessage(i.id, D.intl.string(D.t["6RIwPI"]));
            },
        },
        {
            id: "-12",
            untranslatedName: "ban",
            displayName: "ban",
            type: _.kc.CHAT,
            inputType: C.y$.BUILT_IN,
            applicationId: v.Ik.BUILT_IN,
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
                                value: N.A.Seconds.HOUR,
                            },
                            {
                                name: D.intl.string(D.t["8WfJZ8"]),
                                displayName: D.intl.string(D.t["8WfJZ8"]),
                                value: 6 * N.A.Seconds.HOUR,
                            },
                            {
                                name: D.intl.string(D.t.p1up7u),
                                displayName: D.intl.string(D.t.p1up7u),
                                value: 12 * N.A.Seconds.HOUR,
                            },
                            {
                                name: D.intl.string(D.t.XuVkkD),
                                displayName: D.intl.string(D.t.XuVkkD),
                                value: N.A.Seconds.DAY,
                            },
                            {
                                name: D.intl.string(D.t["gMcDS+"]),
                                displayName: D.intl.string(D.t["gMcDS+"]),
                                value: 3 * N.A.Seconds.DAY,
                            },
                            {
                                name: D.intl.string(D.t.FA7IUk),
                                displayName: D.intl.string(D.t.FA7IUk),
                                value: 7 * N.A.Seconds.DAY,
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
                return T.A.can(O.xBc.BAN_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: i } = t;
                if (null == n || null == i) return;
                let r = w(e, "user") ?? "";
                T.A.canManageUser(O.xBc.BAN_MEMBERS, r, n)
                    ? (async () => {
                          if ("" === r) throw Error();
                          let t = w(e, "delete_messages") ?? 0,
                              s = w(e, "reason") ?? "",
                              a = S.default.getUser(r);
                          await c.A.banUser(n.id, r, t, s),
                              d.A.sendBotMessage(
                                  i.id,
                                  D.intl.formatToPlainString(D.t.YflWdM, { user: null != a ? y.Ay.getUserTag(a) : r }),
                              );
                      })().catch(() => {
                          d.A.sendBotMessage(i.id, D.intl.string(D.t.w2J6Qs));
                      })
                    : d.A.sendBotMessage(i.id, D.intl.string(D.t.R27LJl));
            },
        },
        {
            id: "-13",
            untranslatedName: "timeout",
            displayName: "timeout",
            type: _.kc.CHAT,
            inputType: C.y$.BUILT_IN,
            applicationId: v.Ik.BUILT_IN,
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
                        return (0, R.ny)().map((e) => ({ ...e, name: e.label, displayName: e.label }));
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
                return T.A.can(O.xBc.MODERATE_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: i } = t;
                if (null == n || null == i) return;
                let r = w(e, "user");
                (0, f.b)(n.id, r)
                    ? (async () => {
                          let t = w(e, "duration") ?? "",
                              s = w(e, "reason") ?? "",
                              o = S.default.getUser(r);
                          if (null == o) throw Error();
                          await c.A.setCommunicationDisabledUntil({
                              guildId: n.id,
                              userId: r,
                              communicationDisabledUntilTimestamp: a()().add(t, "s").toISOString(),
                              duration: t,
                              reason: s,
                          }),
                              d.A.sendBotMessage(
                                  i.id,
                                  D.intl.formatToPlainString(D.t.BbRV6o, { user: y.Ay.getUserTag(o), duration: t }),
                              );
                      })().catch(() => {
                          d.A.sendBotMessage(i.id, D.intl.string(D.t["+mWyVq"]));
                      })
                    : d.A.sendBotMessage(i.id, D.intl.string(D.t.F5pqSf));
            },
        },
        {
            id: "-14",
            untranslatedName: "msg",
            displayName: "msg",
            type: _.kc.CHAT,
            inputType: C.y$.BUILT_IN,
            applicationId: v.Ik.BUILT_IN,
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
                        return (0, p.a)();
                    },
                },
            ],
            execute: (e, t) => {
                let { channel: n } = t;
                if (null == n) return;
                let i = w(e, "user"),
                    s = w(e, "message") ?? "";
                (async () => {
                    await u.A.openPrivateChannel({ recipientIds: i }).then((e) => {
                        let t = I.A.getChannel(e);
                        r()(null != t, "Newly created PrivateChannel is null"),
                            d.A.sendMessage(t.id, h.Ay.parse(t, s), !0, { location: b.Hx.PRIVATE_MESSAGE_COMMAND });
                    });
                })().catch(() => {
                    d.A.sendBotMessage(n.id, D.intl.string(D.t["3XaE95"]));
                });
            },
        },
    ],
    x = P.filter((e) =>
        ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.untranslatedName),
    ),
    U = (e, t, n) => {
        let i = t ? P : x;
        return i.filter(
            (t) =>
                e.includes(t.type) &&
                (!n || t.inputType === C.y$.BUILT_IN_TEXT || t.inputType === C.y$.BUILT_IN_INTEGRATION),
        );
    };
