n.d(t, {
    Ez: () => F,
    gZ: () => j,
}),
    n(896048),
    n(733351),
    n(65821);
var r = n(284009),
    i = n.n(r),
    a = n(989349),
    o = n.n(a),
    s = n(478437),
    l = n(715943),
    c = n(308528),
    u = n(686956),
    d = n(843472),
    f = n(155718),
    p = n(838111),
    _ = n(451909),
    h = n(268761),
    m = n(393309),
    g = n(406704),
    E = n(253932),
    y = n(734057),
    b = n(576705),
    O = n(287809),
    v = n(927813),
    A = n(427262),
    I = n(392054),
    S = n(73510),
    T = n(652215),
    C = n(200700),
    N = n(381941),
    w = n(985018);

function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                R(e, t, n[t]);
            });
    }
    return e;
}

function D(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = n(743361).A,
    M = (e, t) => {
        var n;
        return null == (n = e.find((e) => e.name === t)) ? void 0 : n.value;
    },
    j = {
        [S.Ik.BUILT_IN]: {
            id: S.Ik.BUILT_IN,
            type: I.Hf.BUILT_IN,
            get name() {
                return w.intl.string(w.t.fI5MTa);
            },
        },
        [S.Ik.FRECENCY]: {
            id: S.Ik.FRECENCY,
            type: I.Hf.BUILT_IN,
            get name() {
                return w.intl.string(w.t["+cGVV6"]);
            },
        },
    },
    k = [
        ...x,
        {
            id: "-1",
            untranslatedName: "shrug",
            displayName: "shrug",
            type: f.kc.CHAT,
            inputType: I.y$.BUILT_IN_TEXT,
            applicationId: S.Ik.BUILT_IN,
            get untranslatedDescription() {
                return w.intl.string(w.t.j5xUSW);
            },
            get displayDescription() {
                return w.intl.string(w.t.j5xUSW);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: f.n4.STRING,
                    get description() {
                        return w.intl.string(w.t.JewOrS);
                    },
                    get displayDescription() {
                        return w.intl.string(w.t.JewOrS);
                    },
                },
            ],
            execute: (e) => {
                var t;
                let n = null != (t = M(e, "message")) ? t : "";
                return {
                    content: "".concat(n, " \xaf\\_(ツ)_/\xaf").trim(),
                };
            },
        },
        {
            id: "-2",
            untranslatedName: "tableflip",
            displayName: "tableflip",
            type: f.kc.CHAT,
            inputType: I.y$.BUILT_IN_TEXT,
            applicationId: S.Ik.BUILT_IN,
            get untranslatedDescription() {
                return w.intl.string(w.t.nrQRce);
            },
            get displayDescription() {
                return w.intl.string(w.t.nrQRce);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: f.n4.STRING,
                    get description() {
                        return w.intl.string(w.t.EI80tw);
                    },
                    get displayDescription() {
                        return w.intl.string(w.t.EI80tw);
                    },
                },
            ],
            execute: (e) => {
                var t;
                let n = null != (t = M(e, "message")) ? t : "";
                return {
                    content: "".concat(n, " (╯\xb0□\xb0)╯︵ ┻━┻").trim(),
                };
            },
        },
        {
            id: "-3",
            untranslatedName: "unflip",
            displayName: "unflip",
            type: f.kc.CHAT,
            inputType: I.y$.BUILT_IN_TEXT,
            applicationId: S.Ik.BUILT_IN,
            get untranslatedDescription() {
                return w.intl.string(w.t.pnnn8e);
            },
            get displayDescription() {
                return w.intl.string(w.t.pnnn8e);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: f.n4.STRING,
                    get description() {
                        return w.intl.string(w.t.ETs6go);
                    },
                    get displayDescription() {
                        return w.intl.string(w.t.ETs6go);
                    },
                },
            ],
            execute: (e) => {
                var t;
                let n = null != (t = M(e, "message")) ? t : "";
                return {
                    content: "".concat(n, " ┬─┬ノ( \xba _ \xbaノ)").trim(),
                };
            },
        },
        {
            id: "-4",
            untranslatedName: "tts",
            displayName: "tts",
            type: f.kc.CHAT,
            inputType: I.y$.BUILT_IN_TEXT,
            applicationId: S.Ik.BUILT_IN,
            get untranslatedDescription() {
                return w.intl.string(w.t.jZcIid);
            },
            get displayDescription() {
                return w.intl.string(w.t.jZcIid);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: f.n4.STRING,
                    get description() {
                        return w.intl.string(w.t["k+sw9g"]);
                    },
                    get displayDescription() {
                        return w.intl.string(w.t["k+sw9g"]);
                    },
                    required: !0,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return null != t && !t.isPrivate() && E.on.getSetting() && b.A.can(T.xBc.SEND_TTS_MESSAGES, t);
            },
            execute: (e) => {
                var t;
                return {
                    content: null != (t = M(e, "message")) ? t : "",
                    tts: !0,
                };
            },
        },
        {
            id: "-5",
            untranslatedName: "me",
            displayName: "me",
            type: f.kc.CHAT,
            inputType: I.y$.BUILT_IN_TEXT,
            applicationId: S.Ik.BUILT_IN,
            get untranslatedDescription() {
                return w.intl.string(w.t.UGO8fU);
            },
            get displayDescription() {
                return w.intl.string(w.t.UGO8fU);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: f.n4.STRING,
                    get description() {
                        return w.intl.string(w.t.RWTgNd);
                    },
                    get displayDescription() {
                        return w.intl.string(w.t.RWTgNd);
                    },
                    required: !0,
                },
            ],
            execute: (e) => {
                var t;
                let n = null != (t = M(e, "message")) ? t : "";
                return {
                    content: "_".concat(n, "_"),
                };
            },
        },
        {
            id: "-6",
            untranslatedName: "spoiler",
            displayName: "spoiler",
            type: f.kc.CHAT,
            inputType: I.y$.BUILT_IN_TEXT,
            applicationId: S.Ik.BUILT_IN,
            get untranslatedDescription() {
                return w.intl.string(w.t.v0eDdV);
            },
            get displayDescription() {
                return w.intl.string(w.t.v0eDdV);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: f.n4.STRING,
                    get description() {
                        return w.intl.string(w.t.D13pbc);
                    },
                    get displayDescription() {
                        return w.intl.string(w.t.D13pbc);
                    },
                    required: !0,
                },
            ],
            execute: (e) => {
                var t;
                let n = null != (t = M(e, "message")) ? t : "";
                return {
                    content: (0, T.ZGg)(n).trim(),
                };
            },
        },
        {
            id: "-7",
            untranslatedName: "nick",
            displayName: "nick",
            type: f.kc.CHAT,
            inputType: I.y$.BUILT_IN,
            applicationId: S.Ik.BUILT_IN,
            get untranslatedDescription() {
                return w.intl.string(w.t["jiHfS/"]);
            },
            get displayDescription() {
                return w.intl.string(w.t["jiHfS/"]);
            },
            options: [
                {
                    name: "new_nick",
                    displayName: "new_nick",
                    type: f.n4.STRING,
                    get description() {
                        return w.intl.string(w.t.WTSzVu);
                    },
                    get displayDescription() {
                        return w.intl.string(w.t.WTSzVu);
                    },
                    maxLength: T.zzC,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return (
                    null != t &&
                    !t.isPrivate() &&
                    (b.A.can(T.xBc.CHANGE_NICKNAME, t) || b.A.can(T.xBc.MANAGE_NICKNAMES, t))
                );
            },
            execute: (e, t) => {
                var n;
                let { guild: r, channel: i } = t;
                if (null == r || null == i) return;
                let a = null != (n = M(e, "new_nick")) ? n : "";
                l.A.changeNickname(r.id, i.id, T.ME, a || "");
            },
        },
        {
            id: "-10",
            untranslatedName: "thread",
            displayName: "thread",
            type: f.kc.CHAT,
            inputType: I.y$.BUILT_IN,
            applicationId: S.Ik.BUILT_IN,
            get untranslatedDescription() {
                return w.intl.string(w.t.t6ZAS0);
            },
            get displayDescription() {
                return w.intl.string(w.t.t6ZAS0);
            },
            options: [
                {
                    name: "name",
                    displayName: "name",
                    type: f.n4.STRING,
                    get description() {
                        return w.intl.string(w.t.TffOfY);
                    },
                    get displayDescription() {
                        return w.intl.string(w.t.TffOfY);
                    },
                    required: !0,
                },
                {
                    name: "message",
                    displayName: "message",
                    type: f.n4.STRING,
                    get description() {
                        return w.intl.string(w.t.QXfSfU);
                    },
                    get displayDescription() {
                        return w.intl.string(w.t.QXfSfU);
                    },
                    required: !0,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return null != t && (0, g.D1)(t);
            },
            execute: async (e, t) => {
                var n, r;
                let { channel: i } = t,
                    a = null != (n = M(e, "name")) ? n : "",
                    o = null != (r = M(e, "message")) ? r : "",
                    l = await (0, m.Nw)(i, a, s.r.PUBLIC_THREAD, (0, h.Gl)(i, null), "Slash Command");
                d.A.sendMessage(l.id, _.Ay.parse(l, o), !0, {
                    location: N.Hx.THREAD_CREATION,
                });
            },
        },
        {
            id: "-11",
            untranslatedName: "kick",
            displayName: "kick",
            type: f.kc.CHAT,
            inputType: I.y$.BUILT_IN,
            applicationId: S.Ik.BUILT_IN,
            get untranslatedDescription() {
                return w.intl.string(w.t["03N0UL"]);
            },
            get displayDescription() {
                return w.intl.string(w.t["03N0UL"]);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: f.n4.USER,
                    get description() {
                        return w.intl.string(w.t.gF8IpD);
                    },
                    get displayDescription() {
                        return w.intl.string(w.t.gF8IpD);
                    },
                    required: !0,
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: f.n4.STRING,
                    get description() {
                        return w.intl.string(w.t.QWldgj);
                    },
                    get displayDescription() {
                        return w.intl.string(w.t.QWldgj);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return b.A.can(T.xBc.KICK_MEMBERS, t);
            },
            execute: (e, t) => {
                var n;
                let { guild: r, channel: i } = t;
                if (null == r || null == i) return;
                let a = null != (n = M(e, "user")) ? n : "";
                b.A.canManageUser(T.xBc.KICK_MEMBERS, a, r)
                    ? (async () => {
                          var t;
                          let n = O.default.getUser(a);
                          if (null == n) throw Error();
                          await u.A.kickUser(r.id, a, null != (t = M(e, "reason")) ? t : ""),
                              d.A.sendBotMessage(
                                  i.id,
                                  w.intl.formatToPlainString(w.t["9wzHDV"], {
                                      user: A.Ay.getUserTag(n),
                                  }),
                              );
                      })().catch(() => {
                          d.A.sendBotMessage(i.id, w.intl.string(w.t.l0gNlp));
                      })
                    : d.A.sendBotMessage(i.id, w.intl.string(w.t["6RIwPI"]));
            },
        },
        {
            id: "-12",
            untranslatedName: "ban",
            displayName: "ban",
            type: f.kc.CHAT,
            inputType: I.y$.BUILT_IN,
            applicationId: S.Ik.BUILT_IN,
            get untranslatedDescription() {
                return w.intl.string(w.t.HWuskv);
            },
            get displayDescription() {
                return w.intl.string(w.t.HWuskv);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: f.n4.USER,
                    get description() {
                        return w.intl.string(w.t.z3XPjr);
                    },
                    get displayDescription() {
                        return w.intl.string(w.t.z3XPjr);
                    },
                    required: !0,
                },
                {
                    name: "delete_messages",
                    displayName: "delete_messages",
                    type: f.n4.INTEGER,
                    get description() {
                        return w.intl.string(w.t.smrvA6);
                    },
                    get displayDescription() {
                        return w.intl.string(w.t.smrvA6);
                    },
                    required: !0,
                    get choices() {
                        return [
                            {
                                name: w.intl.string(w.t["4obaMS"]),
                                displayName: w.intl.string(w.t["4obaMS"]),
                                value: 0,
                            },
                            {
                                name: w.intl.string(w.t.RKpitY),
                                displayName: w.intl.string(w.t.RKpitY),
                                value: v.A.Seconds.HOUR,
                            },
                            {
                                name: w.intl.string(w.t["8WfJZ8"]),
                                displayName: w.intl.string(w.t["8WfJZ8"]),
                                value: 6 * v.A.Seconds.HOUR,
                            },
                            {
                                name: w.intl.string(w.t.p1up7u),
                                displayName: w.intl.string(w.t.p1up7u),
                                value: 12 * v.A.Seconds.HOUR,
                            },
                            {
                                name: w.intl.string(w.t.XuVkkD),
                                displayName: w.intl.string(w.t.XuVkkD),
                                value: v.A.Seconds.DAY,
                            },
                            {
                                name: w.intl.string(w.t["gMcDS+"]),
                                displayName: w.intl.string(w.t["gMcDS+"]),
                                value: 3 * v.A.Seconds.DAY,
                            },
                            {
                                name: w.intl.string(w.t.FA7IUk),
                                displayName: w.intl.string(w.t.FA7IUk),
                                value: 7 * v.A.Seconds.DAY,
                            },
                        ];
                    },
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: f.n4.STRING,
                    get description() {
                        return w.intl.string(w.t.dG4noU);
                    },
                    get displayDescription() {
                        return w.intl.string(w.t.dG4noU);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return b.A.can(T.xBc.BAN_MEMBERS, t);
            },
            execute: (e, t) => {
                var n;
                let { guild: r, channel: i } = t;
                if (null == r || null == i) return;
                let a = null != (n = M(e, "user")) ? n : "";
                b.A.canManageUser(T.xBc.BAN_MEMBERS, a, r)
                    ? (async () => {
                          var t, n;
                          if ("" === a) throw Error();
                          let o = null != (t = M(e, "delete_messages")) ? t : 0,
                              s = null != (n = M(e, "reason")) ? n : "",
                              l = O.default.getUser(a);
                          await u.A.banUser(r.id, a, o, s),
                              d.A.sendBotMessage(
                                  i.id,
                                  w.intl.formatToPlainString(w.t.YflWdM, {
                                      user: null != l ? A.Ay.getUserTag(l) : a,
                                  }),
                              );
                      })().catch(() => {
                          d.A.sendBotMessage(i.id, w.intl.string(w.t.w2J6Qs));
                      })
                    : d.A.sendBotMessage(i.id, w.intl.string(w.t.R27LJl));
            },
        },
        {
            id: "-13",
            untranslatedName: "timeout",
            displayName: "timeout",
            type: f.kc.CHAT,
            inputType: I.y$.BUILT_IN,
            applicationId: S.Ik.BUILT_IN,
            get untranslatedDescription() {
                return w.intl.string(w.t.KkPcep);
            },
            get displayDescription() {
                return w.intl.string(w.t.KkPcep);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: f.n4.USER,
                    get description() {
                        return w.intl.string(w.t.UU3VRm);
                    },
                    get displayDescription() {
                        return w.intl.string(w.t.UU3VRm);
                    },
                    required: !0,
                },
                {
                    name: "duration",
                    displayName: "duration",
                    type: f.n4.INTEGER,
                    get description() {
                        return w.intl.string(w.t.SNqN1e);
                    },
                    get displayDescription() {
                        return w.intl.string(w.t.SNqN1e);
                    },
                    required: !0,
                    get choices() {
                        return (0, C.ny)().map((e) =>
                            L(P({}, e), {
                                name: e.label,
                                displayName: e.label,
                            }),
                        );
                    },
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: f.n4.STRING,
                    get description() {
                        return w.intl.string(w.t.akHScA);
                    },
                    get displayDescription() {
                        return w.intl.string(w.t.akHScA);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return b.A.can(T.xBc.MODERATE_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: r } = t;
                if (null == n || null == r) return;
                let i = M(e, "user");
                (0, p.b)(n.id, i)
                    ? (async () => {
                          var t, a;
                          let s = null != (t = M(e, "duration")) ? t : "",
                              l = null != (a = M(e, "reason")) ? a : "",
                              c = O.default.getUser(i);
                          if (null == c) throw Error();
                          await u.A.setCommunicationDisabledUntil({
                              guildId: n.id,
                              userId: i,
                              communicationDisabledUntilTimestamp: o()().add(s, "s").toISOString(),
                              duration: s,
                              reason: l,
                          }),
                              d.A.sendBotMessage(
                                  r.id,
                                  w.intl.formatToPlainString(w.t.BbRV6o, {
                                      user: A.Ay.getUserTag(c),
                                      duration: s,
                                  }),
                              );
                      })().catch(() => {
                          d.A.sendBotMessage(r.id, w.intl.string(w.t["+mWyVq"]));
                      })
                    : d.A.sendBotMessage(r.id, w.intl.string(w.t.F5pqSf));
            },
        },
        {
            id: "-14",
            untranslatedName: "msg",
            displayName: "msg",
            type: f.kc.CHAT,
            inputType: I.y$.BUILT_IN,
            applicationId: S.Ik.BUILT_IN,
            get untranslatedDescription() {
                return w.intl.string(w.t.Dg8XZw);
            },
            get displayDescription() {
                return w.intl.string(w.t.Dg8XZw);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: f.n4.USER,
                    get description() {
                        return w.intl.string(w.t["KmVq/D"]);
                    },
                    get displayDescription() {
                        return w.intl.string(w.t["KmVq/D"]);
                    },
                    required: !0,
                },
                {
                    name: "message",
                    displayName: "message",
                    type: f.n4.STRING,
                    get description() {
                        return w.intl.string(w.t.oGUuOJ);
                    },
                    get displayDescription() {
                        return w.intl.string(w.t.oGUuOJ);
                    },
                    required: !0,
                    get maxLength() {
                        var U;
                        return (null == (U = O.default.getCurrentUser()) ? void 0 : U.premiumType) ? T.CS1 : T.uvi;
                    },
                },
            ],
            execute: (e, t) => {
                var n;
                let { channel: r } = t;
                if (null == r) return;
                let a = M(e, "user"),
                    o = null != (n = M(e, "message")) ? n : "";
                (async () => {
                    await c.A.openPrivateChannel({
                        recipientIds: a,
                    }).then((e) => {
                        let t = y.A.getChannel(e);
                        i()(null != t, "Newly created PrivateChannel is null"),
                            d.A.sendMessage(t.id, _.Ay.parse(t, o), !0, {
                                location: N.Hx.PRIVATE_MESSAGE_COMMAND,
                            });
                    });
                })().catch(() => {
                    d.A.sendBotMessage(r.id, w.intl.string(w.t["3XaE95"]));
                });
            },
        },
    ],
    G = k.filter((e) =>
        ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.untranslatedName),
    ),
    F = (e, t, n) => {
        let r = t ? k : G;
        return r.filter(
            (t) =>
                e.includes(t.type) &&
                (!n || t.inputType === I.y$.BUILT_IN_TEXT || t.inputType === I.y$.BUILT_IN_INTEGRATION),
        );
    };
