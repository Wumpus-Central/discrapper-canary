"use strict";
n.d(t, { gZ: () => k, Ez: () => F });
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
    h = n(121197);
let f = (0, n(945810).mj)({
    kind: "user",
    name: "2026-05-dice-roll-slash-command",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var p = n(838111),
    E = n(451909),
    m = n(135621),
    g = n(268761),
    A = n(659617),
    I = n(406704),
    T = n(885386),
    S = n(734057),
    y = n(576705),
    N = n(287809),
    v = n(927813),
    C = n(427262),
    R = n(392054),
    O = n(73510),
    b = n(652215),
    D = n(46013),
    L = n(200700),
    w = n(381941),
    M = n(375708);
let P = n(743361).A,
    x = (e, t) => e.find((e) => e.name === t)?.value,
    k = {
        [O.Ik.BUILT_IN]: {
            id: O.Ik.BUILT_IN,
            type: R.Hf.BUILT_IN,
            get name() {
                return M.intl.string(M.t.fI5MTa);
            },
        },
        [O.Ik.FRECENCY]: {
            id: O.Ik.FRECENCY,
            type: R.Hf.BUILT_IN,
            get name() {
                return M.intl.string(M.t["+cGVV6"]);
            },
        },
    },
    U = [
        ...P,
        {
            id: "-1",
            untranslatedName: "shrug",
            displayName: "shrug",
            type: _.kc.CHAT,
            inputType: R.y$.BUILT_IN_TEXT,
            applicationId: O.Ik.BUILT_IN,
            get untranslatedDescription() {
                return M.intl.string(M.t.j5xUSW);
            },
            get displayDescription() {
                return M.intl.string(M.t.j5xUSW);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return M.intl.string(M.t.JewOrS);
                    },
                    get displayDescription() {
                        return M.intl.string(M.t.JewOrS);
                    },
                },
            ],
            execute: (e) => {
                let t = x(e, "message") ?? "";
                return { content: `${t} \xaf\\_(\u{30C4})_/\xaf`.trim() };
            },
        },
        {
            id: "-2",
            untranslatedName: "tableflip",
            displayName: "tableflip",
            type: _.kc.CHAT,
            inputType: R.y$.BUILT_IN_TEXT,
            applicationId: O.Ik.BUILT_IN,
            get untranslatedDescription() {
                return M.intl.string(M.t.nrQRce);
            },
            get displayDescription() {
                return M.intl.string(M.t.nrQRce);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return M.intl.string(M.t.EI80tw);
                    },
                    get displayDescription() {
                        return M.intl.string(M.t.EI80tw);
                    },
                },
            ],
            execute: (e) => {
                let t = x(e, "message") ?? "";
                return { content: `${t} (\u{256F}\xb0\u{25A1}\xb0)\u{256F}\u{FE35} \u{253B}\u{2501}\u{253B}`.trim() };
            },
        },
        {
            id: "-3",
            untranslatedName: "unflip",
            displayName: "unflip",
            type: _.kc.CHAT,
            inputType: R.y$.BUILT_IN_TEXT,
            applicationId: O.Ik.BUILT_IN,
            get untranslatedDescription() {
                return M.intl.string(M.t.pnnn8e);
            },
            get displayDescription() {
                return M.intl.string(M.t.pnnn8e);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return M.intl.string(M.t.ETs6go);
                    },
                    get displayDescription() {
                        return M.intl.string(M.t.ETs6go);
                    },
                },
            ],
            execute: (e) => {
                let t = x(e, "message") ?? "";
                return { content: `${t} \u{252C}\u{2500}\u{252C}\u{30CE}( \xba _ \xba\u{30CE})`.trim() };
            },
        },
        {
            id: "-4",
            untranslatedName: "tts",
            displayName: "tts",
            type: _.kc.CHAT,
            inputType: R.y$.BUILT_IN_TEXT,
            applicationId: O.Ik.BUILT_IN,
            get untranslatedDescription() {
                return M.intl.string(M.t.jZcIid);
            },
            get displayDescription() {
                return M.intl.string(M.t.jZcIid);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return M.intl.string(M.t["k+sw9g"]);
                    },
                    get displayDescription() {
                        return M.intl.string(M.t["k+sw9g"]);
                    },
                    required: !0,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return null != t && !t.isPrivate() && T.on.getSetting() && y.A.can(b.xBc.SEND_TTS_MESSAGES, t);
            },
            execute: (e) => ({ content: x(e, "message") ?? "", tts: !0 }),
        },
        {
            id: "-5",
            untranslatedName: "me",
            displayName: "me",
            type: _.kc.CHAT,
            inputType: R.y$.BUILT_IN_TEXT,
            applicationId: O.Ik.BUILT_IN,
            get untranslatedDescription() {
                return M.intl.string(M.t.UGO8fU);
            },
            get displayDescription() {
                return M.intl.string(M.t.UGO8fU);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return M.intl.string(M.t.RWTgNd);
                    },
                    get displayDescription() {
                        return M.intl.string(M.t.RWTgNd);
                    },
                    required: !0,
                },
            ],
            execute: (e) => {
                let t = x(e, "message") ?? "";
                return { content: `_${t}_` };
            },
        },
        {
            id: "-6",
            untranslatedName: "spoiler",
            displayName: "spoiler",
            type: _.kc.CHAT,
            inputType: R.y$.BUILT_IN_TEXT,
            applicationId: O.Ik.BUILT_IN,
            get untranslatedDescription() {
                return M.intl.string(M.t.v0eDdV);
            },
            get displayDescription() {
                return M.intl.string(M.t.v0eDdV);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return M.intl.string(M.t.D13pbc);
                    },
                    get displayDescription() {
                        return M.intl.string(M.t.D13pbc);
                    },
                    required: !0,
                },
            ],
            execute: (e) => {
                let t = x(e, "message") ?? "";
                return { content: (0, b.ZGg)(t).trim() };
            },
        },
        {
            id: "-7",
            untranslatedName: "nick",
            displayName: "nick",
            type: _.kc.CHAT,
            inputType: R.y$.BUILT_IN,
            applicationId: O.Ik.BUILT_IN,
            get untranslatedDescription() {
                return M.intl.string(M.t["jiHfS/"]);
            },
            get displayDescription() {
                return M.intl.string(M.t["jiHfS/"]);
            },
            options: [
                {
                    name: "new_nick",
                    displayName: "new_nick",
                    type: _.n4.STRING,
                    get description() {
                        return M.intl.string(M.t.WTSzVu);
                    },
                    get displayDescription() {
                        return M.intl.string(M.t.WTSzVu);
                    },
                    maxLength: b.zzC,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return (
                    null != t &&
                    !t.isPrivate() &&
                    (y.A.can(b.xBc.CHANGE_NICKNAME, t) || y.A.can(b.xBc.MANAGE_NICKNAMES, t))
                );
            },
            execute: (e, t) => {
                let { guild: n, channel: i } = t;
                if (null == n || null == i) return;
                let r = x(e, "new_nick") ?? "";
                l.A.changeNickname(n.id, i.id, b.ME, r || "");
            },
        },
        {
            id: "-10",
            untranslatedName: "thread",
            displayName: "thread",
            type: _.kc.CHAT,
            inputType: R.y$.BUILT_IN,
            applicationId: O.Ik.BUILT_IN,
            get untranslatedDescription() {
                return M.intl.string(M.t.t6ZAS0);
            },
            get displayDescription() {
                return M.intl.string(M.t.t6ZAS0);
            },
            options: [
                {
                    name: "name",
                    displayName: "name",
                    type: _.n4.STRING,
                    get description() {
                        return M.intl.string(M.t.TffOfY);
                    },
                    get displayDescription() {
                        return M.intl.string(M.t.TffOfY);
                    },
                    required: !0,
                    maxLength: b.Ign,
                },
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return M.intl.string(M.t.QXfSfU);
                    },
                    get displayDescription() {
                        return M.intl.string(M.t.QXfSfU);
                    },
                    get maxLength() {
                        return (0, m.a)();
                    },
                    required: !0,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return null != t && (0, I.D1)(t);
            },
            execute: async (e, t) => {
                let { channel: n } = t,
                    i = x(e, "name") ?? "",
                    r = x(e, "message") ?? "",
                    s = await (0, A.Nw)(n, i, o.r.PUBLIC_THREAD, (0, g.Gl)(n, null), "Slash Command");
                d.A.sendMessage(s.id, E.Ay.parse(s, r), !0, { location: w.Hx.THREAD_CREATION });
            },
        },
        {
            id: "-11",
            untranslatedName: "kick",
            displayName: "kick",
            type: _.kc.CHAT,
            inputType: R.y$.BUILT_IN,
            applicationId: O.Ik.BUILT_IN,
            get untranslatedDescription() {
                return M.intl.string(M.t["03N0UL"]);
            },
            get displayDescription() {
                return M.intl.string(M.t["03N0UL"]);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: _.n4.USER,
                    get description() {
                        return M.intl.string(M.t.gF8IpD);
                    },
                    get displayDescription() {
                        return M.intl.string(M.t.gF8IpD);
                    },
                    required: !0,
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: _.n4.STRING,
                    get description() {
                        return M.intl.string(M.t.QWldgj);
                    },
                    get displayDescription() {
                        return M.intl.string(M.t.QWldgj);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return y.A.can(b.xBc.KICK_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: i } = t;
                if (null == n || null == i) return;
                let r = x(e, "user") ?? "";
                y.A.canManageUser(b.xBc.KICK_MEMBERS, r, n)
                    ? (async () => {
                          let t = N.default.getUser(r);
                          if (null == t) throw Error();
                          await c.A.kickUser(n.id, r, x(e, "reason") ?? ""),
                              d.A.sendBotMessage(
                                  i.id,
                                  M.intl.formatToPlainString(M.t["9wzHDV"], { user: C.Ay.getUserTag(t) }),
                              );
                      })().catch(() => {
                          d.A.sendBotMessage(i.id, M.intl.string(M.t.l0gNlp));
                      })
                    : d.A.sendBotMessage(i.id, M.intl.string(M.t["6RIwPI"]));
            },
        },
        {
            id: "-12",
            untranslatedName: "ban",
            displayName: "ban",
            type: _.kc.CHAT,
            inputType: R.y$.BUILT_IN,
            applicationId: O.Ik.BUILT_IN,
            get untranslatedDescription() {
                return M.intl.string(M.t.HWuskv);
            },
            get displayDescription() {
                return M.intl.string(M.t.HWuskv);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: _.n4.USER,
                    get description() {
                        return M.intl.string(M.t.z3XPjr);
                    },
                    get displayDescription() {
                        return M.intl.string(M.t.z3XPjr);
                    },
                    required: !0,
                },
                {
                    name: "delete_messages",
                    displayName: "delete_messages",
                    type: _.n4.INTEGER,
                    get description() {
                        return M.intl.string(M.t.smrvA6);
                    },
                    get displayDescription() {
                        return M.intl.string(M.t.smrvA6);
                    },
                    required: !0,
                    get choices() {
                        return [
                            { name: M.intl.string(M.t["4obaMS"]), displayName: M.intl.string(M.t["4obaMS"]), value: 0 },
                            {
                                name: M.intl.string(M.t.RKpitY),
                                displayName: M.intl.string(M.t.RKpitY),
                                value: v.A.Seconds.HOUR,
                            },
                            {
                                name: M.intl.string(M.t["8WfJZ8"]),
                                displayName: M.intl.string(M.t["8WfJZ8"]),
                                value: 6 * v.A.Seconds.HOUR,
                            },
                            {
                                name: M.intl.string(M.t.p1up7u),
                                displayName: M.intl.string(M.t.p1up7u),
                                value: 12 * v.A.Seconds.HOUR,
                            },
                            {
                                name: M.intl.string(M.t.XuVkkD),
                                displayName: M.intl.string(M.t.XuVkkD),
                                value: v.A.Seconds.DAY,
                            },
                            {
                                name: M.intl.string(M.t["gMcDS+"]),
                                displayName: M.intl.string(M.t["gMcDS+"]),
                                value: 3 * v.A.Seconds.DAY,
                            },
                            {
                                name: M.intl.string(M.t.FA7IUk),
                                displayName: M.intl.string(M.t.FA7IUk),
                                value: 7 * v.A.Seconds.DAY,
                            },
                        ];
                    },
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: _.n4.STRING,
                    get description() {
                        return M.intl.string(M.t.dG4noU);
                    },
                    get displayDescription() {
                        return M.intl.string(M.t.dG4noU);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return y.A.can(b.xBc.BAN_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: i } = t;
                if (null == n || null == i) return;
                let r = x(e, "user") ?? "";
                y.A.canManageUser(b.xBc.BAN_MEMBERS, r, n)
                    ? (async () => {
                          if ("" === r) throw Error();
                          let t = x(e, "delete_messages") ?? 0,
                              s = x(e, "reason") ?? "",
                              a = N.default.getUser(r);
                          await c.A.banUser(n.id, r, t, s),
                              d.A.sendBotMessage(
                                  i.id,
                                  M.intl.formatToPlainString(M.t.YflWdM, { user: null != a ? C.Ay.getUserTag(a) : r }),
                              );
                      })().catch(() => {
                          d.A.sendBotMessage(i.id, M.intl.string(M.t.w2J6Qs));
                      })
                    : d.A.sendBotMessage(i.id, M.intl.string(M.t.R27LJl));
            },
        },
        {
            id: "-13",
            untranslatedName: "timeout",
            displayName: "timeout",
            type: _.kc.CHAT,
            inputType: R.y$.BUILT_IN,
            applicationId: O.Ik.BUILT_IN,
            get untranslatedDescription() {
                return M.intl.string(M.t.KkPcep);
            },
            get displayDescription() {
                return M.intl.string(M.t.KkPcep);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: _.n4.USER,
                    get description() {
                        return M.intl.string(M.t.UU3VRm);
                    },
                    get displayDescription() {
                        return M.intl.string(M.t.UU3VRm);
                    },
                    required: !0,
                },
                {
                    name: "duration",
                    displayName: "duration",
                    type: _.n4.INTEGER,
                    get description() {
                        return M.intl.string(M.t.SNqN1e);
                    },
                    get displayDescription() {
                        return M.intl.string(M.t.SNqN1e);
                    },
                    required: !0,
                    get choices() {
                        return (0, L.ny)().map((e) => ({ ...e, name: e.label, displayName: e.label }));
                    },
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: _.n4.STRING,
                    get description() {
                        return M.intl.string(M.t.akHScA);
                    },
                    get displayDescription() {
                        return M.intl.string(M.t.akHScA);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return y.A.can(b.xBc.MODERATE_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: i } = t;
                if (null == n || null == i) return;
                let r = x(e, "user");
                (0, p.b)(n.id, r)
                    ? (async () => {
                          let t = x(e, "duration") ?? "",
                              s = x(e, "reason") ?? "",
                              o = N.default.getUser(r);
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
                                  M.intl.formatToPlainString(M.t.BbRV6o, { user: C.Ay.getUserTag(o), duration: t }),
                              );
                      })().catch(() => {
                          d.A.sendBotMessage(i.id, M.intl.string(M.t["+mWyVq"]));
                      })
                    : d.A.sendBotMessage(i.id, M.intl.string(M.t.F5pqSf));
            },
        },
        {
            id: "-14",
            untranslatedName: "msg",
            displayName: "msg",
            type: _.kc.CHAT,
            inputType: R.y$.BUILT_IN,
            applicationId: O.Ik.BUILT_IN,
            get untranslatedDescription() {
                return M.intl.string(M.t.Dg8XZw);
            },
            get displayDescription() {
                return M.intl.string(M.t.Dg8XZw);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: _.n4.USER,
                    get description() {
                        return M.intl.string(M.t["KmVq/D"]);
                    },
                    get displayDescription() {
                        return M.intl.string(M.t["KmVq/D"]);
                    },
                    required: !0,
                },
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return M.intl.string(M.t.oGUuOJ);
                    },
                    get displayDescription() {
                        return M.intl.string(M.t.oGUuOJ);
                    },
                    required: !0,
                    get maxLength() {
                        return (0, m.a)();
                    },
                },
            ],
            execute: (e, t) => {
                let { channel: n } = t;
                if (null == n) return;
                let i = x(e, "user"),
                    s = x(e, "message") ?? "";
                (async () => {
                    await u.A.openPrivateChannel({ recipientIds: i }).then((e) => {
                        let t = S.A.getChannel(e);
                        r()(null != t, "Newly created PrivateChannel is null"),
                            d.A.sendMessage(t.id, E.Ay.parse(t, s), !0, { location: w.Hx.PRIVATE_MESSAGE_COMMAND });
                    });
                })().catch(() => {
                    d.A.sendBotMessage(n.id, M.intl.string(M.t["3XaE95"]));
                });
            },
        },
        {
            id: "-18",
            untranslatedName: "roll-dice",
            displayName: "roll-dice",
            type: _.kc.CHAT,
            inputType: R.y$.BUILT_IN,
            applicationId: O.Ik.BUILT_IN,
            get untranslatedDescription() {
                return M.intl.string(M.t.reVgOh);
            },
            get displayDescription() {
                return M.intl.string(M.t.reVgOh);
            },
            options: [
                {
                    name: "count",
                    displayName: "count",
                    type: _.n4.INTEGER,
                    get description() {
                        return M.intl.formatToPlainString(M.t.iSbJTZ, { max: 10 });
                    },
                    get displayDescription() {
                        return M.intl.formatToPlainString(M.t.iSbJTZ, { max: 10 });
                    },
                    minValue: 1,
                    maxValue: 10,
                },
                {
                    name: "size",
                    displayName: "size",
                    type: _.n4.INTEGER,
                    get description() {
                        return M.intl.string(M.t.pV214H);
                    },
                    get displayDescription() {
                        return M.intl.string(M.t.pV214H);
                    },
                    choices: D.s.map((e) => ({ name: `D${e}`, displayName: `D${e}`, value: e })),
                },
            ],
            execute: (e, t) => {
                let { channel: n } = t;
                if (null == n) return;
                let i = Number(x(e, "count") ?? 1),
                    r = Number(x(e, "size") ?? 6);
                (0, h.t)(n.id, i, r);
            },
        },
    ],
    G = U.filter((e) =>
        ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.untranslatedName),
    ),
    F = (e, t, n) => {
        let i = t ? U : G,
            r = f.getConfig({ location: "getBuiltInCommands" }).enabled;
        return i.filter(
            (t) =>
                e.includes(t.type) &&
                (!n || t.inputType === R.y$.BUILT_IN_TEXT || t.inputType === R.y$.BUILT_IN_INTEGRATION) &&
                (r || "roll-dice" !== t.untranslatedName),
        );
    };
