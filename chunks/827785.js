n.d(t, {
    Ez: () => V,
    gZ: () => M,
}),
    n(896048),
    n(733351),
    n(65821);
var r = n(284009),
    i = n.n(r),
    a = n(989349),
    s = n.n(a),
    o = n(478437),
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
    b = n(734057),
    y = n(576705),
    O = n(287809),
    A = n(927813),
    v = n(427262),
    S = n(392054),
    I = n(73510),
    T = n(652215),
    C = n(200700),
    N = n(381941),
    R = n(985018);

function w(e, t, n) {
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
                w(e, t, n[t]);
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

function x(e, t) {
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
let L = n(743361).A,
    j = (e, t) => {
        var n;
        return null == (n = e.find((e) => e.name === t)) ? void 0 : n.value;
    },
    M = {
        [I.Ik.BUILT_IN]: {
            id: I.Ik.BUILT_IN,
            type: S.Hf.BUILT_IN,
            get name() {
                return R.intl.string(R.t.fI5MTa);
            },
        },
        [I.Ik.FRECENCY]: {
            id: I.Ik.FRECENCY,
            type: S.Hf.BUILT_IN,
            get name() {
                return R.intl.string(R.t["+cGVV6"]);
            },
        },
    },
    k = [
        ...L,
        {
            id: "-1",
            untranslatedName: "shrug",
            displayName: "shrug",
            type: f.kc.CHAT,
            inputType: S.y$.BUILT_IN_TEXT,
            applicationId: I.Ik.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.j5xUSW);
            },
            get displayDescription() {
                return R.intl.string(R.t.j5xUSW);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: f.n4.STRING,
                    get description() {
                        return R.intl.string(R.t.JewOrS);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.JewOrS);
                    },
                },
            ],
            execute: (e) => {
                var t;
                let n = null != (t = j(e, "message")) ? t : "";
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
            inputType: S.y$.BUILT_IN_TEXT,
            applicationId: I.Ik.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.nrQRce);
            },
            get displayDescription() {
                return R.intl.string(R.t.nrQRce);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: f.n4.STRING,
                    get description() {
                        return R.intl.string(R.t.EI80tw);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.EI80tw);
                    },
                },
            ],
            execute: (e) => {
                var t;
                let n = null != (t = j(e, "message")) ? t : "";
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
            inputType: S.y$.BUILT_IN_TEXT,
            applicationId: I.Ik.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.pnnn8e);
            },
            get displayDescription() {
                return R.intl.string(R.t.pnnn8e);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: f.n4.STRING,
                    get description() {
                        return R.intl.string(R.t.ETs6go);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.ETs6go);
                    },
                },
            ],
            execute: (e) => {
                var t;
                let n = null != (t = j(e, "message")) ? t : "";
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
            inputType: S.y$.BUILT_IN_TEXT,
            applicationId: I.Ik.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.jZcIid);
            },
            get displayDescription() {
                return R.intl.string(R.t.jZcIid);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: f.n4.STRING,
                    get description() {
                        return R.intl.string(R.t["k+sw9g"]);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t["k+sw9g"]);
                    },
                    required: !0,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return null != t && !t.isPrivate() && E.on.getSetting() && y.A.can(T.xBc.SEND_TTS_MESSAGES, t);
            },
            execute: (e) => {
                var t;
                return {
                    content: null != (t = j(e, "message")) ? t : "",
                    tts: !0,
                };
            },
        },
        {
            id: "-5",
            untranslatedName: "me",
            displayName: "me",
            type: f.kc.CHAT,
            inputType: S.y$.BUILT_IN_TEXT,
            applicationId: I.Ik.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.UGO8fU);
            },
            get displayDescription() {
                return R.intl.string(R.t.UGO8fU);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: f.n4.STRING,
                    get description() {
                        return R.intl.string(R.t.RWTgNd);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.RWTgNd);
                    },
                    required: !0,
                },
            ],
            execute: (e) => {
                var t;
                let n = null != (t = j(e, "message")) ? t : "";
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
            inputType: S.y$.BUILT_IN_TEXT,
            applicationId: I.Ik.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.v0eDdV);
            },
            get displayDescription() {
                return R.intl.string(R.t.v0eDdV);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: f.n4.STRING,
                    get description() {
                        return R.intl.string(R.t.D13pbc);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.D13pbc);
                    },
                    required: !0,
                },
            ],
            execute: (e) => {
                var t;
                let n = null != (t = j(e, "message")) ? t : "";
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
            inputType: S.y$.BUILT_IN,
            applicationId: I.Ik.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t["jiHfS/"]);
            },
            get displayDescription() {
                return R.intl.string(R.t["jiHfS/"]);
            },
            options: [
                {
                    name: "new_nick",
                    displayName: "new_nick",
                    type: f.n4.STRING,
                    get description() {
                        return R.intl.string(R.t.WTSzVu);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.WTSzVu);
                    },
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return (
                    null != t &&
                    !t.isPrivate() &&
                    (y.A.can(T.xBc.CHANGE_NICKNAME, t) || y.A.can(T.xBc.MANAGE_NICKNAMES, t))
                );
            },
            execute: (e, t) => {
                var n;
                let { guild: r, channel: i } = t;
                if (null == r || null == i) return;
                let a = null != (n = j(e, "new_nick")) ? n : "";
                l.A.changeNickname(r.id, i.id, T.ME, a || "");
            },
        },
        {
            id: "-10",
            untranslatedName: "thread",
            displayName: "thread",
            type: f.kc.CHAT,
            inputType: S.y$.BUILT_IN,
            applicationId: I.Ik.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.t6ZAS0);
            },
            get displayDescription() {
                return R.intl.string(R.t.t6ZAS0);
            },
            options: [
                {
                    name: "name",
                    displayName: "name",
                    type: f.n4.STRING,
                    get description() {
                        return R.intl.string(R.t.TffOfY);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.TffOfY);
                    },
                    required: !0,
                },
                {
                    name: "message",
                    displayName: "message",
                    type: f.n4.STRING,
                    get description() {
                        return R.intl.string(R.t.QXfSfU);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.QXfSfU);
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
                    a = null != (n = j(e, "name")) ? n : "",
                    s = null != (r = j(e, "message")) ? r : "",
                    l = await (0, m.Nw)(i, a, o.r.PUBLIC_THREAD, (0, h.Gl)(i, null), "Slash Command");
                d.A.sendMessage(l.id, _.Ay.parse(l, s), !0, {
                    location: N.Hx.THREAD_CREATION,
                });
            },
        },
        {
            id: "-11",
            untranslatedName: "kick",
            displayName: "kick",
            type: f.kc.CHAT,
            inputType: S.y$.BUILT_IN,
            applicationId: I.Ik.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t["03N0UL"]);
            },
            get displayDescription() {
                return R.intl.string(R.t["03N0UL"]);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: f.n4.USER,
                    get description() {
                        return R.intl.string(R.t.gF8IpD);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.gF8IpD);
                    },
                    required: !0,
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: f.n4.STRING,
                    get description() {
                        return R.intl.string(R.t.QWldgj);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.QWldgj);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return y.A.can(T.xBc.KICK_MEMBERS, t);
            },
            execute: (e, t) => {
                var n;
                let { guild: r, channel: i } = t;
                if (null == r || null == i) return;
                let a = null != (n = j(e, "user")) ? n : "";
                y.A.canManageUser(T.xBc.KICK_MEMBERS, a, r)
                    ? (async () => {
                          var t;
                          let n = O.default.getUser(a);
                          if (null == n) throw Error();
                          await u.A.kickUser(r.id, a, null != (t = j(e, "reason")) ? t : ""),
                              d.A.sendBotMessage(
                                  i.id,
                                  R.intl.formatToPlainString(R.t["9wzHDV"], {
                                      user: v.Ay.getUserTag(n),
                                  }),
                              );
                      })().catch(() => {
                          d.A.sendBotMessage(i.id, R.intl.string(R.t.l0gNlp));
                      })
                    : d.A.sendBotMessage(i.id, R.intl.string(R.t["6RIwPI"]));
            },
        },
        {
            id: "-12",
            untranslatedName: "ban",
            displayName: "ban",
            type: f.kc.CHAT,
            inputType: S.y$.BUILT_IN,
            applicationId: I.Ik.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.HWuskv);
            },
            get displayDescription() {
                return R.intl.string(R.t.HWuskv);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: f.n4.USER,
                    get description() {
                        return R.intl.string(R.t.z3XPjr);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.z3XPjr);
                    },
                    required: !0,
                },
                {
                    name: "delete_messages",
                    displayName: "delete_messages",
                    type: f.n4.INTEGER,
                    get description() {
                        return R.intl.string(R.t.smrvA6);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.smrvA6);
                    },
                    required: !0,
                    get choices() {
                        return [
                            {
                                name: R.intl.string(R.t["4obaMS"]),
                                displayName: R.intl.string(R.t["4obaMS"]),
                                value: 0,
                            },
                            {
                                name: R.intl.string(R.t.RKpitY),
                                displayName: R.intl.string(R.t.RKpitY),
                                value: A.A.Seconds.HOUR,
                            },
                            {
                                name: R.intl.string(R.t["8WfJZ8"]),
                                displayName: R.intl.string(R.t["8WfJZ8"]),
                                value: 6 * A.A.Seconds.HOUR,
                            },
                            {
                                name: R.intl.string(R.t.p1up7u),
                                displayName: R.intl.string(R.t.p1up7u),
                                value: 12 * A.A.Seconds.HOUR,
                            },
                            {
                                name: R.intl.string(R.t.XuVkkD),
                                displayName: R.intl.string(R.t.XuVkkD),
                                value: A.A.Seconds.DAY,
                            },
                            {
                                name: R.intl.string(R.t["gMcDS+"]),
                                displayName: R.intl.string(R.t["gMcDS+"]),
                                value: 3 * A.A.Seconds.DAY,
                            },
                            {
                                name: R.intl.string(R.t.FA7IUk),
                                displayName: R.intl.string(R.t.FA7IUk),
                                value: 7 * A.A.Seconds.DAY,
                            },
                        ];
                    },
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: f.n4.STRING,
                    get description() {
                        return R.intl.string(R.t.dG4noU);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.dG4noU);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return y.A.can(T.xBc.BAN_MEMBERS, t);
            },
            execute: (e, t) => {
                var n;
                let { guild: r, channel: i } = t;
                if (null == r || null == i) return;
                let a = null != (n = j(e, "user")) ? n : "";
                y.A.canManageUser(T.xBc.BAN_MEMBERS, a, r)
                    ? (async () => {
                          var t, n;
                          if ("" === a) throw Error();
                          let s = null != (t = j(e, "delete_messages")) ? t : 0,
                              o = null != (n = j(e, "reason")) ? n : "",
                              l = O.default.getUser(a);
                          await u.A.banUser(r.id, a, s, o),
                              d.A.sendBotMessage(
                                  i.id,
                                  R.intl.formatToPlainString(R.t.YflWdM, {
                                      user: null != l ? v.Ay.getUserTag(l) : a,
                                  }),
                              );
                      })().catch(() => {
                          d.A.sendBotMessage(i.id, R.intl.string(R.t.w2J6Qs));
                      })
                    : d.A.sendBotMessage(i.id, R.intl.string(R.t.R27LJl));
            },
        },
        {
            id: "-13",
            untranslatedName: "timeout",
            displayName: "timeout",
            type: f.kc.CHAT,
            inputType: S.y$.BUILT_IN,
            applicationId: I.Ik.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.KkPcep);
            },
            get displayDescription() {
                return R.intl.string(R.t.KkPcep);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: f.n4.USER,
                    get description() {
                        return R.intl.string(R.t.UU3VRm);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.UU3VRm);
                    },
                    required: !0,
                },
                {
                    name: "duration",
                    displayName: "duration",
                    type: f.n4.INTEGER,
                    get description() {
                        return R.intl.string(R.t.SNqN1e);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.SNqN1e);
                    },
                    required: !0,
                    get choices() {
                        return (0, C.ny)().map((e) =>
                            x(P({}, e), {
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
                        return R.intl.string(R.t.akHScA);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.akHScA);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return y.A.can(T.xBc.MODERATE_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: r } = t;
                if (null == n || null == r) return;
                let i = j(e, "user");
                (0, p.b)(n.id, i)
                    ? (async () => {
                          var t, a;
                          let o = null != (t = j(e, "duration")) ? t : "",
                              l = null != (a = j(e, "reason")) ? a : "",
                              c = O.default.getUser(i);
                          if (null == c) throw Error();
                          await u.A.setCommunicationDisabledUntil({
                              guildId: n.id,
                              userId: i,
                              communicationDisabledUntilTimestamp: s()().add(o, "s").toISOString(),
                              duration: o,
                              reason: l,
                          }),
                              d.A.sendBotMessage(
                                  r.id,
                                  R.intl.formatToPlainString(R.t.BbRV6o, {
                                      user: v.Ay.getUserTag(c),
                                      duration: o,
                                  }),
                              );
                      })().catch(() => {
                          d.A.sendBotMessage(r.id, R.intl.string(R.t["+mWyVq"]));
                      })
                    : d.A.sendBotMessage(r.id, R.intl.string(R.t.F5pqSf));
            },
        },
        {
            id: "-14",
            untranslatedName: "msg",
            displayName: "msg",
            type: f.kc.CHAT,
            inputType: S.y$.BUILT_IN,
            applicationId: I.Ik.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.Dg8XZw);
            },
            get displayDescription() {
                return R.intl.string(R.t.Dg8XZw);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: f.n4.USER,
                    get description() {
                        return R.intl.string(R.t["KmVq/D"]);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t["KmVq/D"]);
                    },
                    required: !0,
                },
                {
                    name: "message",
                    displayName: "message",
                    type: f.n4.STRING,
                    get description() {
                        return R.intl.string(R.t.oGUuOJ);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.oGUuOJ);
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
                let a = j(e, "user"),
                    s = null != (n = j(e, "message")) ? n : "";
                (async () => {
                    await c.A.openPrivateChannel({
                        recipientIds: a,
                    }).then((e) => {
                        let t = b.A.getChannel(e);
                        i()(null != t, "Newly created PrivateChannel is null"),
                            d.A.sendMessage(t.id, _.Ay.parse(t, s), !0, {
                                location: N.Hx.PRIVATE_MESSAGE_COMMAND,
                            });
                    });
                })().catch(() => {
                    d.A.sendBotMessage(r.id, R.intl.string(R.t["3XaE95"]));
                });
            },
        },
    ],
    G = k.filter((e) =>
        ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.untranslatedName),
    ),
    V = (e, t, n) => {
        let r = t ? k : G;
        return r.filter(
            (t) =>
                e.includes(t.type) &&
                (!n || t.inputType === S.y$.BUILT_IN_TEXT || t.inputType === S.y$.BUILT_IN_INTEGRATION),
        );
    };
