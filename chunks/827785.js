n.d(t, { Ez: () => b, gZ: () => G });
var i = n(284009),
    r = n.n(i),
    a = n(989349),
    l = n.n(a),
    s = n(478437),
    E = n(715943),
    _ = n(308528),
    o = n(686956),
    u = n(720149),
    A = n(155718),
    d = n(838111),
    c = n(451909),
    I = n(135621),
    T = n(268761),
    N = n(393309),
    S = n(406704),
    O = n(253932),
    C = n(734057),
    p = n(576705),
    R = n(287809),
    g = n(927813),
    M = n(427262),
    h = n(392054),
    m = n(73510),
    L = n(652215),
    D = n(200700),
    y = n(381941),
    f = n(985018);
let U = n(743361).A,
    P = (e, t) => e.find((e) => e.name === t)?.value,
    G = {
        [m.Ik.BUILT_IN]: {
            id: m.Ik.BUILT_IN,
            type: h.Hf.BUILT_IN,
            get name() {
                return f.intl.string(f.t.fI5MTa);
            },
        },
        [m.Ik.FRECENCY]: {
            id: m.Ik.FRECENCY,
            type: h.Hf.BUILT_IN,
            get name() {
                return f.intl.string(f.t["+cGVV6"]);
            },
        },
    },
    B = [
        ...U,
        {
            id: "-1",
            untranslatedName: "shrug",
            displayName: "shrug",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN_TEXT,
            applicationId: m.Ik.BUILT_IN,
            get untranslatedDescription() {
                return f.intl.string(f.t.j5xUSW);
            },
            get displayDescription() {
                return f.intl.string(f.t.j5xUSW);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: A.n4.STRING,
                    get description() {
                        return f.intl.string(f.t.JewOrS);
                    },
                    get displayDescription() {
                        return f.intl.string(f.t.JewOrS);
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
            applicationId: m.Ik.BUILT_IN,
            get untranslatedDescription() {
                return f.intl.string(f.t.nrQRce);
            },
            get displayDescription() {
                return f.intl.string(f.t.nrQRce);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: A.n4.STRING,
                    get description() {
                        return f.intl.string(f.t.EI80tw);
                    },
                    get displayDescription() {
                        return f.intl.string(f.t.EI80tw);
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
            applicationId: m.Ik.BUILT_IN,
            get untranslatedDescription() {
                return f.intl.string(f.t.pnnn8e);
            },
            get displayDescription() {
                return f.intl.string(f.t.pnnn8e);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: A.n4.STRING,
                    get description() {
                        return f.intl.string(f.t.ETs6go);
                    },
                    get displayDescription() {
                        return f.intl.string(f.t.ETs6go);
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
            applicationId: m.Ik.BUILT_IN,
            get untranslatedDescription() {
                return f.intl.string(f.t.jZcIid);
            },
            get displayDescription() {
                return f.intl.string(f.t.jZcIid);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: A.n4.STRING,
                    get description() {
                        return f.intl.string(f.t["k+sw9g"]);
                    },
                    get displayDescription() {
                        return f.intl.string(f.t["k+sw9g"]);
                    },
                    required: !0,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return null != t && !t.isPrivate() && O.on.getSetting() && p.A.can(L.xBc.SEND_TTS_MESSAGES, t);
            },
            execute: (e) => ({ content: P(e, "message") ?? "", tts: !0 }),
        },
        {
            id: "-5",
            untranslatedName: "me",
            displayName: "me",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN_TEXT,
            applicationId: m.Ik.BUILT_IN,
            get untranslatedDescription() {
                return f.intl.string(f.t.UGO8fU);
            },
            get displayDescription() {
                return f.intl.string(f.t.UGO8fU);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: A.n4.STRING,
                    get description() {
                        return f.intl.string(f.t.RWTgNd);
                    },
                    get displayDescription() {
                        return f.intl.string(f.t.RWTgNd);
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
            applicationId: m.Ik.BUILT_IN,
            get untranslatedDescription() {
                return f.intl.string(f.t.v0eDdV);
            },
            get displayDescription() {
                return f.intl.string(f.t.v0eDdV);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: A.n4.STRING,
                    get description() {
                        return f.intl.string(f.t.D13pbc);
                    },
                    get displayDescription() {
                        return f.intl.string(f.t.D13pbc);
                    },
                    required: !0,
                },
            ],
            execute: (e) => {
                let t = P(e, "message") ?? "";
                return { content: (0, L.ZGg)(t).trim() };
            },
        },
        {
            id: "-7",
            untranslatedName: "nick",
            displayName: "nick",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN,
            applicationId: m.Ik.BUILT_IN,
            get untranslatedDescription() {
                return f.intl.string(f.t["jiHfS/"]);
            },
            get displayDescription() {
                return f.intl.string(f.t["jiHfS/"]);
            },
            options: [
                {
                    name: "new_nick",
                    displayName: "new_nick",
                    type: A.n4.STRING,
                    get description() {
                        return f.intl.string(f.t.WTSzVu);
                    },
                    get displayDescription() {
                        return f.intl.string(f.t.WTSzVu);
                    },
                    maxLength: L.zzC,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return (
                    null != t &&
                    !t.isPrivate() &&
                    (p.A.can(L.xBc.CHANGE_NICKNAME, t) || p.A.can(L.xBc.MANAGE_NICKNAMES, t))
                );
            },
            execute: (e, t) => {
                let { guild: n, channel: i } = t;
                if (null == n || null == i) return;
                let r = P(e, "new_nick") ?? "";
                E.A.changeNickname(n.id, i.id, L.ME, r || "");
            },
        },
        {
            id: "-10",
            untranslatedName: "thread",
            displayName: "thread",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN,
            applicationId: m.Ik.BUILT_IN,
            get untranslatedDescription() {
                return f.intl.string(f.t.t6ZAS0);
            },
            get displayDescription() {
                return f.intl.string(f.t.t6ZAS0);
            },
            options: [
                {
                    name: "name",
                    displayName: "name",
                    type: A.n4.STRING,
                    get description() {
                        return f.intl.string(f.t.TffOfY);
                    },
                    get displayDescription() {
                        return f.intl.string(f.t.TffOfY);
                    },
                    required: !0,
                    maxLength: L.Ign,
                },
                {
                    name: "message",
                    displayName: "message",
                    type: A.n4.STRING,
                    get description() {
                        return f.intl.string(f.t.QXfSfU);
                    },
                    get displayDescription() {
                        return f.intl.string(f.t.QXfSfU);
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
                u.A.sendMessage(a.id, c.Ay.parse(a, r), !0, { location: y.Hx.THREAD_CREATION });
            },
        },
        {
            id: "-11",
            untranslatedName: "kick",
            displayName: "kick",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN,
            applicationId: m.Ik.BUILT_IN,
            get untranslatedDescription() {
                return f.intl.string(f.t["03N0UL"]);
            },
            get displayDescription() {
                return f.intl.string(f.t["03N0UL"]);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: A.n4.USER,
                    get description() {
                        return f.intl.string(f.t.gF8IpD);
                    },
                    get displayDescription() {
                        return f.intl.string(f.t.gF8IpD);
                    },
                    required: !0,
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: A.n4.STRING,
                    get description() {
                        return f.intl.string(f.t.QWldgj);
                    },
                    get displayDescription() {
                        return f.intl.string(f.t.QWldgj);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return p.A.can(L.xBc.KICK_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: i } = t;
                if (null == n || null == i) return;
                let r = P(e, "user") ?? "";
                p.A.canManageUser(L.xBc.KICK_MEMBERS, r, n)
                    ? (async () => {
                          let t = R.default.getUser(r);
                          if (null == t) throw Error();
                          await o.A.kickUser(n.id, r, P(e, "reason") ?? ""),
                              u.A.sendBotMessage(
                                  i.id,
                                  f.intl.formatToPlainString(f.t["9wzHDV"], { user: M.Ay.getUserTag(t) }),
                              );
                      })().catch(() => {
                          u.A.sendBotMessage(i.id, f.intl.string(f.t.l0gNlp));
                      })
                    : u.A.sendBotMessage(i.id, f.intl.string(f.t["6RIwPI"]));
            },
        },
        {
            id: "-12",
            untranslatedName: "ban",
            displayName: "ban",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN,
            applicationId: m.Ik.BUILT_IN,
            get untranslatedDescription() {
                return f.intl.string(f.t.HWuskv);
            },
            get displayDescription() {
                return f.intl.string(f.t.HWuskv);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: A.n4.USER,
                    get description() {
                        return f.intl.string(f.t.z3XPjr);
                    },
                    get displayDescription() {
                        return f.intl.string(f.t.z3XPjr);
                    },
                    required: !0,
                },
                {
                    name: "delete_messages",
                    displayName: "delete_messages",
                    type: A.n4.INTEGER,
                    get description() {
                        return f.intl.string(f.t.smrvA6);
                    },
                    get displayDescription() {
                        return f.intl.string(f.t.smrvA6);
                    },
                    required: !0,
                    get choices() {
                        return [
                            { name: f.intl.string(f.t["4obaMS"]), displayName: f.intl.string(f.t["4obaMS"]), value: 0 },
                            {
                                name: f.intl.string(f.t.RKpitY),
                                displayName: f.intl.string(f.t.RKpitY),
                                value: g.A.Seconds.HOUR,
                            },
                            {
                                name: f.intl.string(f.t["8WfJZ8"]),
                                displayName: f.intl.string(f.t["8WfJZ8"]),
                                value: 6 * g.A.Seconds.HOUR,
                            },
                            {
                                name: f.intl.string(f.t.p1up7u),
                                displayName: f.intl.string(f.t.p1up7u),
                                value: 12 * g.A.Seconds.HOUR,
                            },
                            {
                                name: f.intl.string(f.t.XuVkkD),
                                displayName: f.intl.string(f.t.XuVkkD),
                                value: g.A.Seconds.DAY,
                            },
                            {
                                name: f.intl.string(f.t["gMcDS+"]),
                                displayName: f.intl.string(f.t["gMcDS+"]),
                                value: 3 * g.A.Seconds.DAY,
                            },
                            {
                                name: f.intl.string(f.t.FA7IUk),
                                displayName: f.intl.string(f.t.FA7IUk),
                                value: 7 * g.A.Seconds.DAY,
                            },
                        ];
                    },
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: A.n4.STRING,
                    get description() {
                        return f.intl.string(f.t.dG4noU);
                    },
                    get displayDescription() {
                        return f.intl.string(f.t.dG4noU);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return p.A.can(L.xBc.BAN_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: i } = t;
                if (null == n || null == i) return;
                let r = P(e, "user") ?? "";
                p.A.canManageUser(L.xBc.BAN_MEMBERS, r, n)
                    ? (async () => {
                          if ("" === r) throw Error();
                          let t = P(e, "delete_messages") ?? 0,
                              a = P(e, "reason") ?? "",
                              l = R.default.getUser(r);
                          await o.A.banUser(n.id, r, t, a),
                              u.A.sendBotMessage(
                                  i.id,
                                  f.intl.formatToPlainString(f.t.YflWdM, { user: null != l ? M.Ay.getUserTag(l) : r }),
                              );
                      })().catch(() => {
                          u.A.sendBotMessage(i.id, f.intl.string(f.t.w2J6Qs));
                      })
                    : u.A.sendBotMessage(i.id, f.intl.string(f.t.R27LJl));
            },
        },
        {
            id: "-13",
            untranslatedName: "timeout",
            displayName: "timeout",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN,
            applicationId: m.Ik.BUILT_IN,
            get untranslatedDescription() {
                return f.intl.string(f.t.KkPcep);
            },
            get displayDescription() {
                return f.intl.string(f.t.KkPcep);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: A.n4.USER,
                    get description() {
                        return f.intl.string(f.t.UU3VRm);
                    },
                    get displayDescription() {
                        return f.intl.string(f.t.UU3VRm);
                    },
                    required: !0,
                },
                {
                    name: "duration",
                    displayName: "duration",
                    type: A.n4.INTEGER,
                    get description() {
                        return f.intl.string(f.t.SNqN1e);
                    },
                    get displayDescription() {
                        return f.intl.string(f.t.SNqN1e);
                    },
                    required: !0,
                    get choices() {
                        return (0, D.ny)().map((e) => ({ ...e, name: e.label, displayName: e.label }));
                    },
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: A.n4.STRING,
                    get description() {
                        return f.intl.string(f.t.akHScA);
                    },
                    get displayDescription() {
                        return f.intl.string(f.t.akHScA);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return p.A.can(L.xBc.MODERATE_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: i } = t;
                if (null == n || null == i) return;
                let r = P(e, "user");
                (0, d.b)(n.id, r)
                    ? (async () => {
                          let t = P(e, "duration") ?? "",
                              a = P(e, "reason") ?? "",
                              s = R.default.getUser(r);
                          if (null == s) throw Error();
                          await o.A.setCommunicationDisabledUntil({
                              guildId: n.id,
                              userId: r,
                              communicationDisabledUntilTimestamp: l()().add(t, "s").toISOString(),
                              duration: t,
                              reason: a,
                          }),
                              u.A.sendBotMessage(
                                  i.id,
                                  f.intl.formatToPlainString(f.t.BbRV6o, { user: M.Ay.getUserTag(s), duration: t }),
                              );
                      })().catch(() => {
                          u.A.sendBotMessage(i.id, f.intl.string(f.t["+mWyVq"]));
                      })
                    : u.A.sendBotMessage(i.id, f.intl.string(f.t.F5pqSf));
            },
        },
        {
            id: "-14",
            untranslatedName: "msg",
            displayName: "msg",
            type: A.kc.CHAT,
            inputType: h.y$.BUILT_IN,
            applicationId: m.Ik.BUILT_IN,
            get untranslatedDescription() {
                return f.intl.string(f.t.Dg8XZw);
            },
            get displayDescription() {
                return f.intl.string(f.t.Dg8XZw);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: A.n4.USER,
                    get description() {
                        return f.intl.string(f.t["KmVq/D"]);
                    },
                    get displayDescription() {
                        return f.intl.string(f.t["KmVq/D"]);
                    },
                    required: !0,
                },
                {
                    name: "message",
                    displayName: "message",
                    type: A.n4.STRING,
                    get description() {
                        return f.intl.string(f.t.oGUuOJ);
                    },
                    get displayDescription() {
                        return f.intl.string(f.t.oGUuOJ);
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
                    await _.A.openPrivateChannel({ recipientIds: i }).then((e) => {
                        let t = C.A.getChannel(e);
                        r()(null != t, "Newly created PrivateChannel is null"),
                            u.A.sendMessage(t.id, c.Ay.parse(t, a), !0, { location: y.Hx.PRIVATE_MESSAGE_COMMAND });
                    });
                })().catch(() => {
                    u.A.sendBotMessage(n.id, f.intl.string(f.t["3XaE95"]));
                });
            },
        },
    ],
    v = B.filter((e) =>
        ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.untranslatedName),
    ),
    b = (e, t, n) => {
        let i = t ? B : v;
        return i.filter(
            (t) =>
                e.includes(t.type) &&
                (!n || t.inputType === h.y$.BUILT_IN_TEXT || t.inputType === h.y$.BUILT_IN_INTEGRATION),
        );
    };
