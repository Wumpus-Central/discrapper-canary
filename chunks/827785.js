n.d(t, { Ez: () => b, gZ: () => G });
var i = n(284009),
    r = n.n(i),
    a = n(989349),
    l = n.n(a),
    s = n(478437),
    o = n(715943),
    u = n(308528),
    _ = n(686956),
    E = n(720149),
    A = n(155718),
    c = n(838111),
    d = n(451909),
    I = n(135621),
    T = n(268761),
    N = n(393309),
    S = n(406704),
    p = n(253932),
    O = n(734057),
    C = n(576705),
    g = n(287809),
    R = n(927813),
    m = n(427262),
    h = n(392054),
    M = n(73510),
    f = n(652215),
    L = n(200700),
    y = n(381941),
    D = n(985018);
let U = n(743361).A,
    P = (e, t) => e.find((e) => e.name === t)?.value,
    G = {
        [M.Ik.BUILT_IN]: {
            id: M.Ik.BUILT_IN,
            type: h.Hf.BUILT_IN,
            get name() {
                return D.intl.string(D.t.fI5MTa);
            },
        },
        [M.Ik.FRECENCY]: {
            id: M.Ik.FRECENCY,
            type: h.Hf.BUILT_IN,
            get name() {
                return D.intl.string(D.t["+cGVV6"]);
            },
        },
    },
    v = [
        ...U,
        {
            id: "-1",
            untranslatedName: "shrug",
            displayName: "shrug",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN_TEXT,
            applicationId: M.Ik.BUILT_IN,
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
                    type: A.n4.STRING,
                    get description() {
                        return D.intl.string(D.t.JewOrS);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.JewOrS);
                    },
                },
            ],
            execute: (e) => {
                let t = P(e, "message") ?? "";
                return { content: `${t} \xaf\\_(ツ)_/\xaf`.trim() };
            },
        },
        {
            id: "-2",
            untranslatedName: "tableflip",
            displayName: "tableflip",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN_TEXT,
            applicationId: M.Ik.BUILT_IN,
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
                    type: A.n4.STRING,
                    get description() {
                        return D.intl.string(D.t.EI80tw);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.EI80tw);
                    },
                },
            ],
            execute: (e) => {
                let t = P(e, "message") ?? "";
                return { content: `${t} (╯\xb0□\xb0)╯︵ ┻━┻`.trim() };
            },
        },
        {
            id: "-3",
            untranslatedName: "unflip",
            displayName: "unflip",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN_TEXT,
            applicationId: M.Ik.BUILT_IN,
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
                    type: A.n4.STRING,
                    get description() {
                        return D.intl.string(D.t.ETs6go);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.ETs6go);
                    },
                },
            ],
            execute: (e) => {
                let t = P(e, "message") ?? "";
                return { content: `${t} ┬─┬ノ( \xba _ \xbaノ)`.trim() };
            },
        },
        {
            id: "-4",
            untranslatedName: "tts",
            displayName: "tts",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN_TEXT,
            applicationId: M.Ik.BUILT_IN,
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
                    type: A.n4.STRING,
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
                return null != t && !t.isPrivate() && p.on.getSetting() && C.A.can(f.xBc.SEND_TTS_MESSAGES, t);
            },
            execute: (e) => ({ content: P(e, "message") ?? "", tts: !0 }),
        },
        {
            id: "-5",
            untranslatedName: "me",
            displayName: "me",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN_TEXT,
            applicationId: M.Ik.BUILT_IN,
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
                    type: A.n4.STRING,
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
                let t = P(e, "message") ?? "";
                return { content: `_${t}_` };
            },
        },
        {
            id: "-6",
            untranslatedName: "spoiler",
            displayName: "spoiler",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN_TEXT,
            applicationId: M.Ik.BUILT_IN,
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
                    type: A.n4.STRING,
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
                let t = P(e, "message") ?? "";
                return { content: (0, f.ZGg)(t).trim() };
            },
        },
        {
            id: "-7",
            untranslatedName: "nick",
            displayName: "nick",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN,
            applicationId: M.Ik.BUILT_IN,
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
                    type: A.n4.STRING,
                    get description() {
                        return D.intl.string(D.t.WTSzVu);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.WTSzVu);
                    },
                    maxLength: f.zzC,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return (
                    null != t &&
                    !t.isPrivate() &&
                    (C.A.can(f.xBc.CHANGE_NICKNAME, t) || C.A.can(f.xBc.MANAGE_NICKNAMES, t))
                );
            },
            execute: (e, t) => {
                let { guild: n, channel: i } = t;
                if (null == n || null == i) return;
                let r = P(e, "new_nick") ?? "";
                o.A.changeNickname(n.id, i.id, f.ME, r || "");
            },
        },
        {
            id: "-10",
            untranslatedName: "thread",
            displayName: "thread",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN,
            applicationId: M.Ik.BUILT_IN,
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
                    type: A.n4.STRING,
                    get description() {
                        return D.intl.string(D.t.TffOfY);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.TffOfY);
                    },
                    required: !0,
                    maxLength: f.Ign,
                },
                {
                    name: "message",
                    displayName: "message",
                    type: A.n4.STRING,
                    get description() {
                        return D.intl.string(D.t.QXfSfU);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.QXfSfU);
                    },
                    get maxLength() {
                        return (0, I.a)();
                    },
                    required: !0,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return null != t && (0, S.D1)(t);
            },
            execute: async (e, t) => {
                let { channel: n } = t,
                    i = P(e, "name") ?? "",
                    r = P(e, "message") ?? "",
                    a = await (0, N.Nw)(n, i, s.r.PUBLIC_THREAD, (0, T.Gl)(n, null), "Slash Command");
                E.A.sendMessage(a.id, d.Ay.parse(a, r), !0, { location: y.Hx.THREAD_CREATION });
            },
        },
        {
            id: "-11",
            untranslatedName: "kick",
            displayName: "kick",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN,
            applicationId: M.Ik.BUILT_IN,
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
                    type: A.n4.USER,
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
                    type: A.n4.STRING,
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
                return C.A.can(f.xBc.KICK_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: i } = t;
                if (null == n || null == i) return;
                let r = P(e, "user") ?? "";
                C.A.canManageUser(f.xBc.KICK_MEMBERS, r, n)
                    ? (async () => {
                          let t = g.default.getUser(r);
                          if (null == t) throw Error();
                          await _.A.kickUser(n.id, r, P(e, "reason") ?? ""),
                              E.A.sendBotMessage(
                                  i.id,
                                  D.intl.formatToPlainString(D.t["9wzHDV"], { user: m.Ay.getUserTag(t) }),
                              );
                      })().catch(() => {
                          E.A.sendBotMessage(i.id, D.intl.string(D.t.l0gNlp));
                      })
                    : E.A.sendBotMessage(i.id, D.intl.string(D.t["6RIwPI"]));
            },
        },
        {
            id: "-12",
            untranslatedName: "ban",
            displayName: "ban",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN,
            applicationId: M.Ik.BUILT_IN,
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
                    type: A.n4.USER,
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
                    type: A.n4.INTEGER,
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
                                value: R.A.Seconds.HOUR,
                            },
                            {
                                name: D.intl.string(D.t["8WfJZ8"]),
                                displayName: D.intl.string(D.t["8WfJZ8"]),
                                value: 6 * R.A.Seconds.HOUR,
                            },
                            {
                                name: D.intl.string(D.t.p1up7u),
                                displayName: D.intl.string(D.t.p1up7u),
                                value: 12 * R.A.Seconds.HOUR,
                            },
                            {
                                name: D.intl.string(D.t.XuVkkD),
                                displayName: D.intl.string(D.t.XuVkkD),
                                value: R.A.Seconds.DAY,
                            },
                            {
                                name: D.intl.string(D.t["gMcDS+"]),
                                displayName: D.intl.string(D.t["gMcDS+"]),
                                value: 3 * R.A.Seconds.DAY,
                            },
                            {
                                name: D.intl.string(D.t.FA7IUk),
                                displayName: D.intl.string(D.t.FA7IUk),
                                value: 7 * R.A.Seconds.DAY,
                            },
                        ];
                    },
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: A.n4.STRING,
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
                return C.A.can(f.xBc.BAN_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: i } = t;
                if (null == n || null == i) return;
                let r = P(e, "user") ?? "";
                C.A.canManageUser(f.xBc.BAN_MEMBERS, r, n)
                    ? (async () => {
                          if ("" === r) throw Error();
                          let t = P(e, "delete_messages") ?? 0,
                              a = P(e, "reason") ?? "",
                              l = g.default.getUser(r);
                          await _.A.banUser(n.id, r, t, a),
                              E.A.sendBotMessage(
                                  i.id,
                                  D.intl.formatToPlainString(D.t.YflWdM, { user: null != l ? m.Ay.getUserTag(l) : r }),
                              );
                      })().catch(() => {
                          E.A.sendBotMessage(i.id, D.intl.string(D.t.w2J6Qs));
                      })
                    : E.A.sendBotMessage(i.id, D.intl.string(D.t.R27LJl));
            },
        },
        {
            id: "-13",
            untranslatedName: "timeout",
            displayName: "timeout",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN,
            applicationId: M.Ik.BUILT_IN,
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
                    type: A.n4.USER,
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
                    type: A.n4.INTEGER,
                    get description() {
                        return D.intl.string(D.t.SNqN1e);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.SNqN1e);
                    },
                    required: !0,
                    get choices() {
                        return (0, L.ny)().map((e) => ({ ...e, name: e.label, displayName: e.label }));
                    },
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: A.n4.STRING,
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
                return C.A.can(f.xBc.MODERATE_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: i } = t;
                if (null == n || null == i) return;
                let r = P(e, "user");
                (0, c.b)(n.id, r)
                    ? (async () => {
                          let t = P(e, "duration") ?? "",
                              a = P(e, "reason") ?? "",
                              s = g.default.getUser(r);
                          if (null == s) throw Error();
                          await _.A.setCommunicationDisabledUntil({
                              guildId: n.id,
                              userId: r,
                              communicationDisabledUntilTimestamp: l()().add(t, "s").toISOString(),
                              duration: t,
                              reason: a,
                          }),
                              E.A.sendBotMessage(
                                  i.id,
                                  D.intl.formatToPlainString(D.t.BbRV6o, { user: m.Ay.getUserTag(s), duration: t }),
                              );
                      })().catch(() => {
                          E.A.sendBotMessage(i.id, D.intl.string(D.t["+mWyVq"]));
                      })
                    : E.A.sendBotMessage(i.id, D.intl.string(D.t.F5pqSf));
            },
        },
        {
            id: "-14",
            untranslatedName: "msg",
            displayName: "msg",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN,
            applicationId: M.Ik.BUILT_IN,
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
                    type: A.n4.USER,
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
                    type: A.n4.STRING,
                    get description() {
                        return D.intl.string(D.t.oGUuOJ);
                    },
                    get displayDescription() {
                        return D.intl.string(D.t.oGUuOJ);
                    },
                    required: !0,
                    get maxLength() {
                        return (0, I.a)();
                    },
                },
            ],
            execute: (e, t) => {
                let { channel: n } = t;
                if (null == n) return;
                let i = P(e, "user"),
                    a = P(e, "message") ?? "";
                (async () => {
                    await u.A.openPrivateChannel({ recipientIds: i }).then((e) => {
                        let t = O.A.getChannel(e);
                        r()(null != t, "Newly created PrivateChannel is null"),
                            E.A.sendMessage(t.id, d.Ay.parse(t, a), !0, { location: y.Hx.PRIVATE_MESSAGE_COMMAND });
                    });
                })().catch(() => {
                    E.A.sendBotMessage(n.id, D.intl.string(D.t["3XaE95"]));
                });
            },
        },
    ],
    B = v.filter((e) =>
        ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.untranslatedName),
    ),
    b = (e, t, n) => {
        let i = t ? v : B;
        return i.filter(
            (t) =>
                e.includes(t.type) &&
                (!n || t.inputType === h.y$.BUILT_IN_TEXT || t.inputType === h.y$.BUILT_IN_INTEGRATION),
        );
    };
