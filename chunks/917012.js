"use strict";
n.d(t, { gZ: () => G, Ez: () => F });
var i = n(284009),
    r = n.n(i),
    a = n(989349),
    s = n.n(a),
    l = n(478437),
    o = n(715943),
    d = n(308528),
    c = n(66834),
    u = n(493336),
    _ = n(155718),
    E = n(121197);
let A = (0, n(945810).mj)({
    kind: "user",
    name: "2026-05-dice-roll-slash-command",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var h = n(838111),
    I = n(451909),
    f = n(135621),
    p = n(268761),
    T = n(659617),
    m = n(406704),
    g = n(885386),
    S = n(734057),
    N = n(576705),
    C = n(287809),
    O = n(927813),
    R = n(427262),
    L = n(392054),
    y = n(73510),
    D = n(652215),
    v = n(46013),
    b = n(200700),
    M = n(381941),
    P = n(375708);
let U = n(743361).A;
function w(e, t) {
    return e.find((e) => e.name === t)?.value;
}
let G = {
        [y.Ik.BUILT_IN]: {
            id: y.Ik.BUILT_IN,
            type: L.Hf.BUILT_IN,
            get name() {
                return P.intl.string(P.t.fI5MTa);
            },
        },
        [y.Ik.FRECENCY]: {
            id: y.Ik.FRECENCY,
            type: L.Hf.BUILT_IN,
            get name() {
                return P.intl.string(P.t["+cGVV6"]);
            },
        },
    },
    x = [
        ...U,
        {
            id: "-1",
            untranslatedName: "shrug",
            displayName: "shrug",
            type: _.kc.CHAT,
            inputType: L.y$.BUILT_IN_TEXT,
            applicationId: y.Ik.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t.j5xUSW);
            },
            get displayDescription() {
                return P.intl.string(P.t.j5xUSW);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return P.intl.string(P.t.JewOrS);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.JewOrS);
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
            inputType: L.y$.BUILT_IN_TEXT,
            applicationId: y.Ik.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t.nrQRce);
            },
            get displayDescription() {
                return P.intl.string(P.t.nrQRce);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return P.intl.string(P.t.EI80tw);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.EI80tw);
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
            inputType: L.y$.BUILT_IN_TEXT,
            applicationId: y.Ik.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t.pnnn8e);
            },
            get displayDescription() {
                return P.intl.string(P.t.pnnn8e);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return P.intl.string(P.t.ETs6go);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.ETs6go);
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
            inputType: L.y$.BUILT_IN_TEXT,
            applicationId: y.Ik.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t.jZcIid);
            },
            get displayDescription() {
                return P.intl.string(P.t.jZcIid);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return P.intl.string(P.t["k+sw9g"]);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t["k+sw9g"]);
                    },
                    required: !0,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return null != t && !t.isPrivate() && g.on.getSetting() && N.A.can(D.xBc.SEND_TTS_MESSAGES, t);
            },
            execute: (e) => ({ content: w(e, "message") ?? "", tts: !0 }),
        },
        {
            id: "-5",
            untranslatedName: "me",
            displayName: "me",
            type: _.kc.CHAT,
            inputType: L.y$.BUILT_IN_TEXT,
            applicationId: y.Ik.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t.UGO8fU);
            },
            get displayDescription() {
                return P.intl.string(P.t.UGO8fU);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return P.intl.string(P.t.RWTgNd);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.RWTgNd);
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
            inputType: L.y$.BUILT_IN_TEXT,
            applicationId: y.Ik.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t.v0eDdV);
            },
            get displayDescription() {
                return P.intl.string(P.t.v0eDdV);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return P.intl.string(P.t.D13pbc);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.D13pbc);
                    },
                    required: !0,
                },
            ],
            execute: (e) => {
                let t = w(e, "message") ?? "";
                return { content: (0, D.ZGg)(t).trim() };
            },
        },
        {
            id: "-7",
            untranslatedName: "nick",
            displayName: "nick",
            type: _.kc.CHAT,
            inputType: L.y$.BUILT_IN,
            applicationId: y.Ik.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t["jiHfS/"]);
            },
            get displayDescription() {
                return P.intl.string(P.t["jiHfS/"]);
            },
            options: [
                {
                    name: "new_nick",
                    displayName: "new_nick",
                    type: _.n4.STRING,
                    get description() {
                        return P.intl.string(P.t.WTSzVu);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.WTSzVu);
                    },
                    maxLength: D.zzC,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return (
                    null != t &&
                    !t.isPrivate() &&
                    (N.A.can(D.xBc.CHANGE_NICKNAME, t) || N.A.can(D.xBc.MANAGE_NICKNAMES, t))
                );
            },
            execute: (e, t) => {
                let { guild: n, channel: i } = t;
                if (null == n || null == i) return;
                let r = w(e, "new_nick") ?? "";
                o.A.changeNickname(n.id, i.id, D.ME, r || "");
            },
        },
        {
            id: "-10",
            untranslatedName: "thread",
            displayName: "thread",
            type: _.kc.CHAT,
            inputType: L.y$.BUILT_IN,
            applicationId: y.Ik.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t.t6ZAS0);
            },
            get displayDescription() {
                return P.intl.string(P.t.t6ZAS0);
            },
            options: [
                {
                    name: "name",
                    displayName: "name",
                    type: _.n4.STRING,
                    get description() {
                        return P.intl.string(P.t.TffOfY);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.TffOfY);
                    },
                    required: !0,
                    maxLength: D.Ign,
                },
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return P.intl.string(P.t.QXfSfU);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.QXfSfU);
                    },
                    get maxLength() {
                        return (0, f.a)();
                    },
                    required: !0,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return null != t && (0, m.D1)(t);
            },
            execute: async (e, t) => {
                let { channel: n } = t,
                    i = w(e, "name") ?? "",
                    r = w(e, "message") ?? "",
                    a = await (0, T.Nw)(n, i, l.r.PUBLIC_THREAD, (0, p.Gl)(n, null), "Slash Command");
                u.A.sendMessage(a.id, I.Ay.parse(a, r), !0, { location: M.Hx.THREAD_CREATION });
            },
        },
        {
            id: "-11",
            untranslatedName: "kick",
            displayName: "kick",
            type: _.kc.CHAT,
            inputType: L.y$.BUILT_IN,
            applicationId: y.Ik.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t["03N0UL"]);
            },
            get displayDescription() {
                return P.intl.string(P.t["03N0UL"]);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: _.n4.USER,
                    get description() {
                        return P.intl.string(P.t.gF8IpD);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.gF8IpD);
                    },
                    required: !0,
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: _.n4.STRING,
                    get description() {
                        return P.intl.string(P.t.QWldgj);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.QWldgj);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return N.A.can(D.xBc.KICK_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: i } = t;
                if (null == n || null == i) return;
                let r = w(e, "user") ?? "";
                N.A.canManageUser(D.xBc.KICK_MEMBERS, r, n)
                    ? (async function () {
                          if (null == n || null == i) return;
                          let t = C.default.getUser(r);
                          if (null == t) throw Error();
                          await c.A.kickUser(n.id, r, w(e, "reason") ?? ""),
                              u.A.sendBotMessage(
                                  i.id,
                                  P.intl.formatToPlainString(P.t["9wzHDV"], { user: R.Ay.getUserTag(t) }),
                              );
                      })().catch(() => {
                          u.A.sendBotMessage(i.id, P.intl.string(P.t.l0gNlp));
                      })
                    : u.A.sendBotMessage(i.id, P.intl.string(P.t["6RIwPI"]));
            },
        },
        {
            id: "-12",
            untranslatedName: "ban",
            displayName: "ban",
            type: _.kc.CHAT,
            inputType: L.y$.BUILT_IN,
            applicationId: y.Ik.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t.HWuskv);
            },
            get displayDescription() {
                return P.intl.string(P.t.HWuskv);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: _.n4.USER,
                    get description() {
                        return P.intl.string(P.t.z3XPjr);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.z3XPjr);
                    },
                    required: !0,
                },
                {
                    name: "delete_messages",
                    displayName: "delete_messages",
                    type: _.n4.INTEGER,
                    get description() {
                        return P.intl.string(P.t.smrvA6);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.smrvA6);
                    },
                    required: !0,
                    get choices() {
                        return [
                            { name: P.intl.string(P.t["4obaMS"]), displayName: P.intl.string(P.t["4obaMS"]), value: 0 },
                            {
                                name: P.intl.string(P.t.RKpitY),
                                displayName: P.intl.string(P.t.RKpitY),
                                value: O.A.Seconds.HOUR,
                            },
                            {
                                name: P.intl.string(P.t["8WfJZ8"]),
                                displayName: P.intl.string(P.t["8WfJZ8"]),
                                value: 6 * O.A.Seconds.HOUR,
                            },
                            {
                                name: P.intl.string(P.t.p1up7u),
                                displayName: P.intl.string(P.t.p1up7u),
                                value: 12 * O.A.Seconds.HOUR,
                            },
                            {
                                name: P.intl.string(P.t.XuVkkD),
                                displayName: P.intl.string(P.t.XuVkkD),
                                value: O.A.Seconds.DAY,
                            },
                            {
                                name: P.intl.string(P.t["gMcDS+"]),
                                displayName: P.intl.string(P.t["gMcDS+"]),
                                value: 3 * O.A.Seconds.DAY,
                            },
                            {
                                name: P.intl.string(P.t.FA7IUk),
                                displayName: P.intl.string(P.t.FA7IUk),
                                value: 7 * O.A.Seconds.DAY,
                            },
                        ];
                    },
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: _.n4.STRING,
                    get description() {
                        return P.intl.string(P.t.dG4noU);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.dG4noU);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return N.A.can(D.xBc.BAN_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: i } = t;
                if (null == n || null == i) return;
                let r = w(e, "user") ?? "";
                N.A.canManageUser(D.xBc.BAN_MEMBERS, r, n)
                    ? (async function () {
                          if (null == n || null == i) return;
                          if ("" === r) throw Error();
                          let t = w(e, "delete_messages") ?? 0,
                              a = w(e, "reason") ?? "",
                              s = C.default.getUser(r);
                          await c.A.banUser(n.id, r, t, a),
                              u.A.sendBotMessage(
                                  i.id,
                                  P.intl.formatToPlainString(P.t.YflWdM, { user: null != s ? R.Ay.getUserTag(s) : r }),
                              );
                      })().catch(() => {
                          u.A.sendBotMessage(i.id, P.intl.string(P.t.w2J6Qs));
                      })
                    : u.A.sendBotMessage(i.id, P.intl.string(P.t.R27LJl));
            },
        },
        {
            id: "-13",
            untranslatedName: "timeout",
            displayName: "timeout",
            type: _.kc.CHAT,
            inputType: L.y$.BUILT_IN,
            applicationId: y.Ik.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t.KkPcep);
            },
            get displayDescription() {
                return P.intl.string(P.t.KkPcep);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: _.n4.USER,
                    get description() {
                        return P.intl.string(P.t.UU3VRm);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.UU3VRm);
                    },
                    required: !0,
                },
                {
                    name: "duration",
                    displayName: "duration",
                    type: _.n4.INTEGER,
                    get description() {
                        return P.intl.string(P.t.SNqN1e);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.SNqN1e);
                    },
                    required: !0,
                    get choices() {
                        return (0, b.ny)().map((e) => ({ ...e, name: e.label, displayName: e.label }));
                    },
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: _.n4.STRING,
                    get description() {
                        return P.intl.string(P.t.akHScA);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.akHScA);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return N.A.can(D.xBc.MODERATE_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: i } = t;
                if (null == n || null == i) return;
                let r = w(e, "user");
                (0, h.b)(n.id, r)
                    ? (async function () {
                          if (null == n || null == i) return;
                          let t = w(e, "duration") ?? "",
                              a = w(e, "reason") ?? "",
                              l = C.default.getUser(r);
                          if (null == l) throw Error();
                          await c.A.setCommunicationDisabledUntil({
                              guildId: n.id,
                              userId: r,
                              communicationDisabledUntilTimestamp: s()().add(t, "s").toISOString(),
                              duration: t,
                              reason: a,
                          }),
                              u.A.sendBotMessage(
                                  i.id,
                                  P.intl.formatToPlainString(P.t.BbRV6o, { user: R.Ay.getUserTag(l), duration: t }),
                              );
                      })().catch(() => {
                          u.A.sendBotMessage(i.id, P.intl.string(P.t["+mWyVq"]));
                      })
                    : u.A.sendBotMessage(i.id, P.intl.string(P.t.F5pqSf));
            },
        },
        {
            id: "-14",
            untranslatedName: "msg",
            displayName: "msg",
            type: _.kc.CHAT,
            inputType: L.y$.BUILT_IN,
            applicationId: y.Ik.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t.Dg8XZw);
            },
            get displayDescription() {
                return P.intl.string(P.t.Dg8XZw);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: _.n4.USER,
                    get description() {
                        return P.intl.string(P.t["KmVq/D"]);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t["KmVq/D"]);
                    },
                    required: !0,
                },
                {
                    name: "message",
                    displayName: "message",
                    type: _.n4.STRING,
                    get description() {
                        return P.intl.string(P.t.oGUuOJ);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.oGUuOJ);
                    },
                    required: !0,
                    get maxLength() {
                        return (0, f.a)();
                    },
                },
            ],
            execute: (e, t) => {
                let { channel: n } = t;
                if (null == n) return;
                let i = w(e, "user"),
                    a = w(e, "message") ?? "";
                (async function () {
                    await d.A.openPrivateChannel({ recipientIds: i }).then((e) => {
                        let t = S.A.getChannel(e);
                        r()(null != t, "Newly created PrivateChannel is null"),
                            u.A.sendMessage(t.id, I.Ay.parse(t, a), !0, { location: M.Hx.PRIVATE_MESSAGE_COMMAND });
                    });
                })().catch(() => {
                    u.A.sendBotMessage(n.id, P.intl.string(P.t["3XaE95"]));
                });
            },
        },
        {
            id: "-18",
            untranslatedName: "roll-dice",
            displayName: "roll-dice",
            type: _.kc.CHAT,
            inputType: L.y$.BUILT_IN,
            applicationId: y.Ik.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t.reVgOh);
            },
            get displayDescription() {
                return P.intl.string(P.t.reVgOh);
            },
            options: [
                {
                    name: "count",
                    displayName: "count",
                    type: _.n4.INTEGER,
                    get description() {
                        return P.intl.formatToPlainString(P.t.iSbJTZ, { max: 10 });
                    },
                    get displayDescription() {
                        return P.intl.formatToPlainString(P.t.iSbJTZ, { max: 10 });
                    },
                    minValue: 1,
                    maxValue: 10,
                },
                {
                    name: "size",
                    displayName: "size",
                    type: _.n4.INTEGER,
                    get description() {
                        return P.intl.string(P.t.pV214H);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.pV214H);
                    },
                    choices: v.s.map((e) => ({ name: `D${e}`, displayName: `D${e}`, value: e })),
                },
            ],
            execute: (e, t) => {
                let { channel: n } = t;
                if (null == n) return;
                let i = Number(w(e, "count") ?? 1),
                    r = Number(w(e, "size") ?? 6);
                (0, E.t)(n.id, i, r);
            },
        },
    ],
    k = x.filter((e) =>
        ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.untranslatedName),
    );
function F(e, t, n) {
    let i = t ? x : k,
        r = A.getConfig({ location: "getBuiltInCommands" }).enabled;
    return i.filter(
        (t) =>
            e.includes(t.type) &&
            (!n || t.inputType === L.y$.BUILT_IN_TEXT || t.inputType === L.y$.BUILT_IN_INTEGRATION) &&
            (r || "roll-dice" !== t.untranslatedName),
    );
}
