(a.d(t, { x: () => p1 }), a(321073));
var n,
    l,
    s,
    i,
    r = a(477900),
    o = a(582128),
    d = a(17928),
    c = a(314116),
    u = a(270003),
    m = a(193249),
    h = a(532446),
    x = a(821609),
    p = a(834730),
    g = a(364522),
    v = a(611677),
    j = a(691885),
    f = a(95477),
    b = a(404778),
    y = a(77729),
    E = a(952818),
    C = a(905552),
    _ = a(25578),
    S = a(157257),
    N = a(507868),
    A = a(915725),
    k = a(341923),
    D = a(614584),
    I = a(423341),
    T = a(574206),
    O = a(564973),
    R = a(227628),
    w = a(468550);
let M = (0, a(196765).v)(() => ({ enabled: !1, pending: null, lastResult: null }));
function L(e) {
    M.setState({ enabled: e });
}
function P(e) {
    M.setState({ pending: e });
}
function U(e) {
    M.setState({ lastResult: e });
}
var G = a(781710),
    B = a(696016),
    F = a(264572).Buffer;
function $() {
    let e = M((e) => e.enabled),
        t = M((e) => e.pending),
        a = M((e) => e.lastResult),
        n = o.useCallback(async (e, t, a, n) => {
            let l = _.Ay.getMediaEngine();
            if (null == l.setClipsPerfMonitoring) return (U("setClipsPerfMonitoring unsupported in this build"), null);
            P(n);
            try {
                let n = await l.setClipsPerfMonitoring(e, t, a);
                return (L(n.enabled), n);
            } catch (e) {
                return (U(`${n} failed: ${e instanceof Error ? e.message : String(e)}`), null);
            } finally {
                P(null);
            }
        }, []),
        l = o.useCallback(
            async (t) => {
                L(t);
                let a = await n(t, !1, !1, t ? "enable" : "disable");
                null != a ? U(`recorder ${a.enabled ? "enabled" : "disabled"}`) : L(e);
            },
            [n, e],
        ),
        s = o.useCallback(async () => {
            let t = await n(e, !0, !1, "save");
            if (null == t) return;
            if ("" === t.html) return void U("save: server returned empty html");
            let a = `clips-perf-${new Date().toISOString().replace(/[:.]/g, "-")}.html`;
            try {
                let e = F.from(t.html, "utf8"),
                    n = await y.A.fileManager.saveWithDialog2(e, a);
                if (null != n && !0 === n.canceledByUser) return void U("save: canceled");
                U(`saved ${t.eventCount} events (${t.html.length} bytes)`);
            } catch (e) {
                U(`save failed: ${e instanceof Error ? e.message : String(e)}`);
            }
        }, [n, e]),
        i = o.useCallback(async () => {
            let t = await n(e, !1, !0, "clear");
            null != t && U(`cleared ${t.eventCount} events`);
        }, [n, e]);
    return (0, r.jsxs)(u.n, {
        label: "Clips v3 Performance",
        children: [
            (0, r.jsx)(m.d, {
                label: "Record Clips v3 performance",
                description: "Toggles the in-process perf recorder inside discord_clips.exe.",
                checked: e,
                disabled: null != t,
                onChange: l,
            }),
            (0, r.jsxs)(h.M, {
                children: [
                    (0, r.jsx)(x.$, { text: "Save as file...", disabled: null != t, onClick: s }),
                    (0, r.jsx)(x.$, { text: "Clear recording", variant: "secondary", disabled: null != t, onClick: i }),
                ],
            }),
            (null != t || null != a) &&
                (0, r.jsx)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: null != t ? `working: ${t}...` : a,
                }),
        ],
    });
}
let V = [
    { label: "Laughter Model", flag: B.pZ.LAUGHTER },
    { label: "Shouting Model", flag: B.pZ.SHOUTING },
    { label: "Events", flag: B.pZ.GAME_EVENTS },
];
function W() {
    let e = (0, d.bG)([N.A], () => N.A.isStaffBypassDisabled()),
        t = (0, d.bG)([N.A], () => N.A.isStaffBypassActive()),
        a = (0, d.bG)([N.A], () => N.A.hasLoadedCapabilities()),
        n = (0, d.bG)([N.A], () => N.A.getGameCapabilities().size),
        l = (0, d.bG)([E.Ay], () => E.Ay.getVisibleGame()),
        s = l?.id,
        i = (0, d.bG)([N.A], () => N.A.getCapabilities(s), [s]),
        o = (0, d.bG)([N.A], () => null != s && N.A.getGameCapabilities().has(s), [s]),
        c = (0, k.GZ)(s);
    return (0, r.jsxs)(u.n, {
        label: "Autoclipping Game Capabilities",
        children: [
            (0, r.jsx)(m.d, {
                label: "Ignore staff bypass",
                description:
                    "Staff normally get autoclipping for every game. Turn this on to be treated as a regular user, so autoclipping follows the server capabilities map. Resets to off each time Discord launches.",
                checked: e,
                onChange: D.jE,
            }),
            (0, r.jsxs)(p.E, {
                variant: "text-md/normal",
                children: ["capabilities: ", a ? `loaded, ${n} game(s)` : "not loaded yet"],
            }),
            (0, r.jsxs)(p.E, { variant: "text-md/normal", children: ["staff bypass active: ", String(t)] }),
            null == l
                ? (0, r.jsx)(p.E, { variant: "text-md/normal", children: "no visible game running" })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)(p.E, { variant: "text-md/normal", children: [l.name, " (", l.id, ")"] }),
                          (0, r.jsxs)(p.E, {
                              variant: "text-md/normal",
                              children: ["autoclipping: ", c ? "Yes" : "No"],
                          }),
                          (0, r.jsxs)(p.E, {
                              variant: "text-md/normal",
                              children: ["in capabilities map: ", o ? "Yes" : "No", " (bitmask ", i, ")"],
                          }),
                          V.map((e) => {
                              let { label: t, flag: a } = e;
                              return (0, r.jsxs)(
                                  p.E,
                                  { variant: "text-md/normal", children: [t, ": ", (i & a) != 0 ? "Yes" : "No"] },
                                  t,
                              );
                          }),
                          !o &&
                              c &&
                              (0, r.jsx)(p.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children:
                                      'This game isn\'t in the map \u2014 autoclipping is on via the staff bypass, so every capability above reads No. Turn on "Ignore staff bypass" to see what a regular user gets.',
                              }),
                      ],
                  }),
            (0, r.jsx)(x.$, {
                text: "refetch capabilities",
                variant: "secondary",
                disabled: null == s,
                onClick: () => {
                    null != s && O.b.refetchMany([s]);
                },
            }),
        ],
    });
}
function z(e, t) {
    let a = new T.k(e);
    for (let e of t) a.recordSavedClip(e);
    return (a.end(), a);
}
function H() {
    let e = (0, R.MZ)((e) => e.isOpen),
        t = (0, w.sY)((e) => e.isOpen),
        [a, n] = o.useState(3),
        l = o.useCallback((e) => {
            let t = Object.values(A.Ay.getClips()),
                a = t.find((e) => null != e.applicationId);
            if (a?.applicationId == null) return;
            let n = a.applicationId,
                l = t.filter((e) => e.applicationId === n).slice(0, e);
            (A.Ay.devSetLastClipsSession(z(n, l)), (0, w.M8)(n));
        }, []),
        s = o.useCallback(
            (e) => {
                e ? l(a) : (0, w.kF)();
            },
            [l, a],
        ),
        i = o.useCallback(() => {
            let e = Object.values(A.Ay.getClips()),
                t = (0, C.A)(E.Ay, S.A),
                a =
                    (t?.id != null ? e.find((e) => e.applicationId === t.id) : void 0) ??
                    e.find((e) => null != e.applicationId);
            if (a?.applicationId == null) return;
            let n = a.applicationId,
                l = e.filter((e) => e.applicationId === n).slice(0, 10);
            (A.Ay.devSetLastClipsSession(z(n, l)), (0, R.w9)());
        }, []),
        _ = o.useCallback(
            (e) => {
                e ? i() : (0, R.yj)();
            },
            [i],
        ),
        N = o.useCallback(
            (e) => {
                (n(e), t && l(e));
            },
            [l, t],
        ),
        [k, T] = o.useState(B.rb.KILL),
        [O, M] = o.useState(1),
        [L, P] = o.useState(""),
        [U, F] = o.useState(""),
        V = (0, d.bG)([A.Ay], () => A.Ay.isAutoStashEnabled()),
        H = o.useCallback((e) => {
            e
                ? (0, c.A)({
                      title: "Stash all gaming sessions?",
                      subtitle:
                          "Every gaming session will be stashed to your Desktop (inside the `decider_stash` folder) when it ends. This setting is not persistent \u2014 it resets to off each time Discord launches.",
                      confirmText: "Enable",
                      variant: "primary",
                      onConfirm: () => {
                          D.mN(!0);
                      },
                  })
                : D.mN(!1);
        }, []),
        [K, Y] = o.useState([]),
        [q, J] = o.useState(void 0),
        Q = o.useCallback((e) => {
            (Y(e), J((t) => (null != t && e.includes(t) ? t : e[0])));
        }, []),
        X = o.useCallback(async () => {
            let e = y.A.clips.debugListStashedClipDeciderSessions;
            null != e && Q(await e());
        }, [Q]);
    o.useEffect(() => {
        let e = !0,
            t = y.A.clips.debugListStashedClipDeciderSessions;
        if (null != t)
            return (
                t().then((t) => {
                    e && Q(t);
                }),
                () => {
                    e = !1;
                }
            );
    }, [Q]);
    let Z = (0, d.bG)([A.Ay], () => A.Ay.getState().clipsSettings.enableAutoclipping),
        ee = (0, d.bG)([A.Ay], () => A.Ay.getEnableAutoclipping());
    return (0, r.jsx)(g.Ip, {
        children: (0, r.jsxs)(v.l, {
            children: [
                (0, r.jsx)(u.n, {
                    label: "Send Test Signals",
                    children: (0, r.jsxs)(h.M, {
                        children: [
                            (0, r.jsx)(x.$, { text: "Manual", onClick: () => D.Ts({ type: B.Gy.MANUAL }) }),
                            (0, r.jsx)(x.$, {
                                text: "Distributed",
                                onClick: () =>
                                    D.Ts({
                                        type: B.Gy.DISTRIBUTED,
                                        remoteTriggerUserId: "123",
                                        remoteTriggerClipId: "456",
                                    }),
                            }),
                            (0, r.jsx)(x.$, {
                                text: "Shouting",
                                onClick: () => D.Ts({ type: B.Gy.SHOUTING, userId: "123", confidence: 1 }),
                            }),
                            (0, r.jsx)(x.$, { text: "Laughter", onClick: () => I.A.debugCreateRankableLaughterClip() }),
                        ],
                    }),
                }),
                (0, r.jsxs)(u.n, {
                    label: "Game Event Creator",
                    children: [
                        (0, r.jsxs)(h.M, {
                            children: [
                                (0, r.jsx)(j.l, {
                                    label: "Event Type",
                                    value: k,
                                    onSelectionChange: (e) => T(e),
                                    options: [
                                        { id: "kill", label: "Kill", value: B.rb.KILL },
                                        { id: "multikill", label: "Multikill", value: B.rb.MULTIKILL },
                                        { id: "death", label: "Death", value: B.rb.DEATH },
                                        { id: "assist", label: "Assist", value: B.rb.ASSIST },
                                        { id: "item", label: "Item", value: B.rb.ITEM },
                                        { id: "victory", label: "Victory", value: B.rb.VICTORY },
                                        { id: "defeat", label: "Defeat", value: B.rb.DEFEAT },
                                        { id: "level_up", label: "Level Up", value: B.rb.LEVEL_UP },
                                        { id: "treasure", label: "Treasure", value: B.rb.TREASURE },
                                        { id: "objective_kill", label: "Objective Kill", value: B.rb.OBJECTIVE_KILL },
                                    ],
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(j.l, {
                                    label: "Importance",
                                    value: O,
                                    onSelectionChange: M,
                                    options: [
                                        { id: "low", label: "Low", value: 0 },
                                        { id: "medium", label: "Medium", value: 0.5 },
                                        { id: "high", label: "High", value: 1 },
                                    ],
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                            ],
                        }),
                        (0, r.jsx)(f.k, {
                            label: "Title (optional)",
                            value: L,
                            onChange: P,
                            placeholder: "e.g., First Blood",
                        }),
                        (0, r.jsx)(f.k, {
                            label: "Description (optional)",
                            value: U,
                            onChange: F,
                            placeholder: "e.g., Killed enemy ADC in bot lane",
                        }),
                        (0, r.jsx)(x.$, {
                            text: "Create Game Event",
                            onClick: () => {
                                D.Ts({ type: B.Gy.GAME_EVENT, eventType: k, importance: O, title: L, description: U });
                            },
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Auto-stash decider data",
                            description:
                                "Stashes every gaming session to your Desktop when it ends. Resets to off on each Discord launch.",
                            checked: V,
                            onChange: H,
                        }),
                        (0, r.jsx)(j.l, {
                            label: "Stash session (re-run ranking)",
                            value: q,
                            onSelectionChange: (e) => J(e),
                            options: K.map((e) => ({ id: e, label: e, value: e })),
                            placeholder: 0 === K.length ? "No stashed sessions" : "Most recent",
                            disabled: 0 === K.length,
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                        (0, r.jsxs)(h.M, {
                            children: [
                                (0, r.jsx)(x.$, {
                                    text: "re-run ranking",
                                    onClick: () => {
                                        I.i.debugRerunRanking(q).catch((e) => {
                                            B.nx.error("re-run ranking failed", e);
                                        });
                                    },
                                }),
                                (0, r.jsx)(x.$, {
                                    text: "run automontage",
                                    onClick: () => {
                                        I.i.debugRunAutoMontage(q).catch((e) => {
                                            B.nx.error("run automontage failed", e);
                                        });
                                    },
                                }),
                                (0, r.jsx)(x.$, {
                                    text: "refresh sessions",
                                    variant: "secondary",
                                    onClick: () => {
                                        X();
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(u.n, { label: "Clip Metadata Tool", children: (0, r.jsx)(G.A, {}) }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)($, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(W, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsxs)(u.n, {
                    label: "Reminder UI",
                    children: [
                        (0, r.jsx)(m.d, {
                            label: "Clips Quick Bar",
                            description:
                                "Force-show the inline quick bar above the account panel. Fabricates a session (up to 10 clips) from your recent clips so it can be tested without capturing a real game session.",
                            checked: e,
                            onChange: _,
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Clips Reminder",
                            description:
                                "Force-show the post-session ClipsReminder panel. Fabricates a session from your most recent clips (and game) so it can be tested without capturing a real game session.",
                            checked: t,
                            onChange: s,
                        }),
                        (0, r.jsx)(j.l, {
                            label: "Clip count",
                            value: a,
                            onSelectionChange: N,
                            options: [
                                { id: "1", label: "1 clip", value: 1 },
                                { id: "2", label: "2 clips", value: 2 },
                                { id: "3", label: "3 clips", value: 3 },
                            ],
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                        (0, r.jsx)(b.c, {}),
                        (0, r.jsxs)(u.n, {
                            label: "Clips Settings",
                            children: [
                                (0, r.jsxs)(p.E, {
                                    variant: "text-md/normal",
                                    children: ["autoclippingEnabled (internal): ", String(Z)],
                                }),
                                (0, r.jsxs)(p.E, {
                                    variant: "text-md/normal",
                                    children: ["autoclippingEnabled (exposed): ", String(ee)],
                                }),
                                (0, r.jsx)(x.$, {
                                    text: "unset autoclipping default",
                                    onClick: () => {
                                        D.uL(void 0, !1);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
var K = a(503698),
    Y = a.n(K),
    q = a(939249),
    J = a(683071),
    Q = a(331322),
    X = a(811893),
    Z = a(297264),
    ee = a(538064),
    et = a(265059),
    ea = a(902592),
    en = a(869146);
(a(323874), a(14289), a(35956));
var el = a(789645),
    es = a(589158),
    ei = a(65593),
    er = a(377980),
    eo = a(581298),
    ed = a(393284),
    ec = a(287809),
    eu = a(901139),
    em = a(641886),
    eh = a(780898),
    ex = a(652215),
    ep = a(44137),
    eg = a(427262);
function ev(e) {
    let { nameplate: t } = e,
        a = (0, d.bG)([ec.default], () => ec.default.getCurrentUser()),
        n = eg.Ay.useName(a) ?? "";
    return (0, r.jsx)(ep.g, {
        username: n,
        selfMute: !1,
        selfDeaf: !1,
        serverMute: !1,
        serverDeaf: !1,
        suppress: !1,
        speaking: !1,
        streaming: !1,
        status: ex.clD.ONLINE,
        currentUser: a,
        activities: [],
        applicationStream: void 0,
        userTag: "",
        speakingWhileMuted: !1,
        occluded: !1,
        dismissibleContents: { avatar: [], settings: [] },
        isOrbchievementsEnabled: !1,
        awaitingRemote: !1,
        nameplate: t,
        voiceChannel: null,
        isQuestBarEmpty: !0,
        isListenAlongVisible: !1,
    });
}
var ej = a(736653),
    ef = a(653523),
    eb = a(475601);
function ey(e) {
    let { selected: t, onSelect: a } = e,
        n = (0, ej.Ay)();
    return (0, r.jsxs)("div", {
        className: eb.N,
        children: [
            (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "Preselected Gradient" }),
            (0, r.jsx)("div", {
                className: eb.Z,
                children: em.Z6.map((e) => {
                    let l = n !== ex.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
                        s = t === e.name;
                    return (0, r.jsx)(
                        ef.S4,
                        { onSelect: () => a(e), style: { background: l }, name: e.name, isSelected: s },
                        e.name,
                    );
                }),
            }),
        ],
    });
}
var eE = a(715069),
    eC = a(95701),
    e_ = a(331884);
function eS(e) {
    let { selected: t, nameplate: a } = e,
        n = (0, e_.i)(),
        l = new eC.cq({ id: "0", type: ex.rbe.DM, name: "self", guild_id: "0", recipients: [n.id] });
    return (0, r.jsx)(eE.th, { selected: t, channel: l, user: n, nameplate: a });
}
var eN = a(698638),
    eA = a(52940);
function ek() {
    let [e, t] = (0, o.useState)(!1),
        [a, n] = (0, o.useState)(!1),
        [l, s] = (0, o.useState)(null),
        { node: i } = (0, eo.Ay)(ed.k, ""),
        d = (0, eu.Ay)((e) => e.toolsCache),
        { setToolsCache: c, removeToolsCache: u } = (0, eu.DE)(),
        { setImgCache: m } = (0, eu.TW)(),
        h = (0, o.useCallback)(
            (e) => {
                let t = d[e];
                null != t
                    ? s({ previewToolKey: t.url, palette: t.palette, skuId: "0" })
                    : s((t) =>
                          null == t ? { previewToolKey: e, palette: em.Wj, skuId: "0" } : { ...t, previewToolKey: e },
                      );
            },
            [d],
        ),
        g = (0, o.useCallback)((e) => {
            s((t) => (null == t ? null : { ...t, palette: e }));
        }, []),
        v = (0, o.useCallback)(
            (e) => {
                u(e);
            },
            [u],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: eA.ne,
                children: [
                    (0, r.jsxs)("div", {
                        className: eA.gO,
                        children: [
                            (0, r.jsx)(x.$, {
                                size: "sm",
                                onClick: () => {
                                    (n(!1), t((e) => !e));
                                },
                                variant: "secondary",
                                text: "Toggle Themes",
                            }),
                            (0, r.jsx)(x.$, {
                                size: "sm",
                                onClick: () => {
                                    (t(!1), n((e) => !e));
                                },
                                variant: "secondary",
                                text: "Toggle Gradients",
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: eA.uQ,
                        children: [
                            e && (0, r.jsx)(er.A, { node: i }),
                            a &&
                                (0, r.jsx)(ey, {
                                    selected: l?.palette?.name,
                                    onSelect: (e) => {
                                        (l?.previewToolKey != null && c(l.previewToolKey, l.previewToolKey, e), g(e));
                                    },
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: eA.iW,
                children: [
                    (0, r.jsx)(eD, { nameplate: l }, l?.palette?.name),
                    (0, r.jsxs)("div", {
                        className: eA.Uo,
                        children: [
                            (0, r.jsx)(p.E, {
                                variant: "text-sm/semibold",
                                children: "Drag background image to screen",
                            }),
                            (0, r.jsx)(ei.A, {
                                title: "upload image",
                                description: "upload the background",
                                icons: eN.xi,
                                onDrop: async (e) => {
                                    let t = URL.createObjectURL(e[0]),
                                        a = e[0],
                                        n = await a.arrayBuffer();
                                    (m(t, t, (0, eh.nI)(n)), c(t, t, em.Wj));
                                },
                            }),
                            (0, r.jsx)("div", {
                                className: eA.is,
                                children: Object.values(d).map((e) => {
                                    let { url: t } = e;
                                    return (0, r.jsx)(eI, { src: t, onSetStatic: h, removeAsset: v }, t);
                                }),
                            }),
                            (0, r.jsx)(eO, {
                                label: "gradient override",
                                onChange: (e) => g({ name: em.AK, darkBackground: e, lightBackground: e }),
                            }),
                            (0, r.jsx)(eT, { label: "set", onClick: () => {} }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eD(e) {
    let { nameplate: t } = e,
        [a, n] = (0, o.useState)(320),
        l = (0, o.useRef)(null),
        s = (0, o.useRef)(null),
        i = (0, o.useRef)(null),
        d = (0, o.useRef)(document),
        c = (0, o.useCallback)((e) => {
            if (null != l.current) {
                let t = l.current.getBoundingClientRect();
                n(Math.max(264, Math.min(432, e.clientX - t.left)));
            }
        }, []),
        u = (0, o.useCallback)(
            (e) => {
                (e.preventDefault(), e.stopPropagation());
                let t = e.currentTarget.ownerDocument;
                function a(e) {
                    (e.preventDefault(), c(e));
                }
                function n() {
                    (null != s.current && (t.removeEventListener("mousemove", s.current), (s.current = null)),
                        null != i.current && (t.removeEventListener("mouseup", i.current), (i.current = null)));
                }
                ((d.current = t),
                    (s.current = a),
                    (i.current = n),
                    t.addEventListener("mousemove", a),
                    t.addEventListener("mouseup", n));
            },
            [c],
        );
    return (
        (0, o.useEffect)(
            () => () => {
                (null != s.current && (d.current.removeEventListener("mousemove", s.current), (s.current = null)),
                    null != i.current && (d.current.removeEventListener("mouseup", i.current), (i.current = null)));
            },
            [],
        ),
        (0, r.jsx)(g.Ip, {
            className: eA.Fp,
            orientation: "horizontal",
            children: (0, r.jsxs)("div", {
                ref: l,
                className: eA.ey,
                style: { width: `${a}px` },
                children: [
                    (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "Memberlist" }),
                    (0, r.jsx)(eR, { nameplate: t }),
                    (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "DMs" }),
                    (0, r.jsx)(ew, { nameplate: t }),
                    (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "RTC" }),
                    (0, r.jsx)(eM, { nameplate: t }),
                    (0, r.jsx)("div", { className: eA.Di, onMouseDown: u }),
                ],
            }),
        })
    );
}
function eI(e) {
    let { src: t, onSetStatic: a, removeAsset: n } = e;
    return (0, r.jsxs)("div", {
        className: eA.xO,
        children: [
            (0, r.jsx)(q.D, {
                onClick: () => n(t),
                className: eA.yV,
                children: (0, r.jsx)(el.P, { size: "custom", width: 16, height: 16, name: "x" }),
            }),
            (0, r.jsx)("img", { className: eA.Ez, src: t, alt: "" }),
            (0, r.jsx)("div", {
                className: eA.Lu,
                children: (0, r.jsx)(x.$, {
                    onClick: () => a(t),
                    size: "sm",
                    variant: "secondary",
                    text: "set nameplate",
                }),
            }),
        ],
    });
}
function eT(e) {
    let { label: t, onClick: a } = e;
    return (0, r.jsxs)("div", {
        className: eA.Uu,
        children: [
            (0, r.jsx)(p.E, { variant: "text-sm/normal", children: "coming soon" }),
            (0, r.jsx)(x.$, { variant: "secondary", size: "sm", text: t, disabled: !0, onClick: a }),
        ],
    });
}
function eO(e) {
    let { label: t, onChange: a } = e;
    return (0, r.jsxs)("div", {
        className: eA.Im,
        children: [
            (0, r.jsx)(p.E, { variant: "text-sm/normal", children: t }),
            (0, r.jsx)("input", {
                onChange: (e) => {
                    a(e.target.value);
                },
                className: eA.QL,
                placeholder: "#000000",
            }),
        ],
    });
}
function eR(e) {
    let { nameplate: t } = e,
        a = (0, d.bG)([ec.default], () => ec.default.getCurrentUser());
    return (0, r.jsx)("div", {
        className: eA.VH,
        children: (0, r.jsxs)("div", {
            className: eA.H1,
            children: [
                (0, r.jsx)(p.E, { className: eA.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(es.A, { nameplate: t, user: a, currentUser: a }),
                (0, r.jsx)(p.E, { className: eA.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(es.A, { nameplate: t, selected: !0, user: a, currentUser: a }),
                        (0, r.jsx)(es.A, { selected: !0, user: a, currentUser: a }),
                    ],
                }),
            ],
        }),
    });
}
function ew(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: eA.VH,
        children: (0, r.jsxs)("div", {
            className: eA.H1,
            children: [
                (0, r.jsx)(p.E, { className: eA.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(eS, { nameplate: t }),
                (0, r.jsx)(p.E, { className: eA.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(eS, { selected: !0, nameplate: t }), (0, r.jsx)(eS, { selected: !0 })],
                }),
            ],
        }),
    });
}
function eM(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: eA.VH,
        children: (0, r.jsx)("div", { className: eA.X2, children: (0, r.jsx)(ev, { nameplate: t }) }),
    });
}
a(508300);
var eL = a(132500),
    eP = a(157559),
    eU = a(780777),
    eG = a(993408),
    eB = a(579151),
    eF = a(559474),
    e$ = a(816866),
    eV = a(87558),
    eW = a(575593),
    ez = a(631903),
    eH = a(224640),
    eK = a(408278),
    eY = a(972213),
    eq = a(43990),
    eJ = a(192308),
    eQ = a(661531),
    eX = a(231723),
    eZ = a(900686),
    e0 = a(986687),
    e1 = a(394979),
    e2 = a(435558),
    e3 = a.n(e2),
    e6 = a(855915),
    e5 = a(480335);
let e8 = (e) => {
    let { profileEffect: t } = e,
        a = o.useMemo(() => (0, e2.cloneDeep)(t), [t]),
        n = o.useMemo(
            () => t.effects.some((e) => null != e.randomizedSources && e.randomizedSources.length > 0),
            [t.effects],
        ),
        l = o.useMemo(() => {
            if (n) {
                var e;
                let n =
                    1 ===
                    (e = a.effects.reduce((e, t) => {
                        let a = 1 + (t.randomizedSources ?? []).length;
                        return a > 1 ? (1 === e ? a : Math.min(a, e)) : e;
                    }, 1))
                        ? -1
                        : Math.floor(Math.random() * e);
                n > 0 &&
                    t.effects.forEach((e, t) => {
                        null != e.randomizedSources &&
                            e.randomizedSources.length > 0 &&
                            (a.effects[t].src = e.randomizedSources[n - 1].src);
                    });
            }
            return a;
        }, [t.effects, a, n]),
        s = "debug",
        { layerData: i } = (0, e6.A)({ skuId: s, layers: l.effects });
    return (0, r.jsx)(e5.p, { profileEffect: l, skuId: s, layerData: i });
};
var e4 = a(586886),
    e9 = a(778765);
let e7 =
        "https://cdn.discordapp.com/assets/content/ad2a252a6866e1ecb3bab521e2baaabbf13ab2d1ecaa8af67862c53c91f76761.png",
    te = { [eV.qH.THUMBNAIL]: null, [eV.qH.STATIC]: null, [eV.qH.REDUCED_MOTION]: null },
    tt = "debug",
    ta = "reduced-motion-preview-modal";
function tn(e) {
    let { transitionState: t, onClose: a, frameSrc: n, theme: l } = e;
    return (0, r.jsx)(eH.d, {
        transitionState: t,
        size: "md",
        onClose: a,
        maxHeight: "viewport",
        children: (0, r.jsxs)("div", {
            className: e4.Xd,
            children: [
                (0, r.jsx)("div", {
                    className: e4.y6,
                    children: (0, r.jsx)(eK.K, {
                        "aria-label": "Close",
                        onClick: a,
                        icon: eY.XLargeIcon,
                        variant: "overlay-secondary",
                        size: "sm",
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: e4.rU,
                    children: [
                        (0, r.jsx)(eq.N, {
                            theme: l,
                            children: (e) =>
                                (0, r.jsx)("img", { src: e7, alt: "", className: Y()(e4.aM, e), "aria-hidden": !0 }),
                        }),
                        null != n &&
                            "" !== n &&
                            (0, r.jsx)("img", { src: n, className: e4.SD, alt: "Reduced motion preview" }),
                    ],
                }),
            ],
        }),
    });
}
function tl(e) {
    let { type: t, frame: a, theme: n, onClear: l } = e,
        s = t === eV.qH.REDUCED_MOTION,
        i = s ? e7 : e9.A,
        o = (0, r.jsx)(eq.N, {
            theme: n,
            children: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("img", { src: i, alt: "", className: Y()(e4.aM, e), "aria-hidden": !0 }),
                        a?.src != null &&
                            "" !== a.src &&
                            (0, r.jsx)("img", { src: a.src, className: Y()(e4.SD, e), alt: "" }),
                    ],
                }),
        });
    return (0, r.jsxs)("div", {
        className: e4.pK,
        children: [
            (0, r.jsx)(Z.D, { variant: "heading-sm/bold", children: t }),
            s
                ? (0, r.jsx)(q.D, {
                      className: Y()(e4.zd, e4.eB),
                      onClick: function () {
                          (0, eJ.hasModalOpen)(ta)
                              ? (0, eJ.closeModal)(ta)
                              : (0, eJ.openModalLazy)(
                                    () =>
                                        Promise.resolve((e) =>
                                            (0, r.jsx)(tn, { ...e, frameSrc: a?.src ?? null, theme: n }),
                                        ),
                                    { modalKey: ta, onCloseRequest: () => (0, eJ.closeModal)(ta) },
                                );
                      },
                      children: o,
                  })
                : (0, r.jsx)("div", { className: e4.zd, children: o }),
            null != a && (0, r.jsx)(x.$, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: l }),
        ],
    });
}
let ts = (e) => {
        let { profileEffect: t } = e,
            { upsertProfileEffect: a } = (0, e$.wu)(),
            n = (0, d.bG)([ec.default], () => ec.default.getCurrentUser()),
            [l, s] = o.useState(!0),
            i = o.useRef({}),
            [c, u] = o.useState(!1),
            [m, h] = o.useState(!1),
            [g, v] = o.useState(8),
            [j, f] = o.useState([]),
            [b, y] = o.useState(te),
            E = o.useRef([]),
            [C, _] = o.useState(t.name),
            S = C.toLowerCase().replace(/\s+/g, "_"),
            N = o.useMemo(
                () => ({
                    type: eW.R.PROFILE_EFFECT,
                    skuId: tt,
                    title: tt,
                    description: tt,
                    accessibilityLabel: tt,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: j,
                    animationType: ez.l.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [j],
            ),
            A = c ? eQ.A.themes.DARK : eQ.A.themes.LIGHT;
        function k(e) {
            let t = e.currentTarget.files;
            return null == t ? null : t[0];
        }
        function D(e, t) {
            let a = k(t);
            null != a &&
                (0, eV.Mz)(a, (t) => {
                    y((n) => ({ ...n, [e]: (0, eV.GT)(t, a) }));
                });
        }
        (o.useEffect(() => {
            let e = t.effects;
            e.length > 0 &&
                f(
                    e.map((e) => ({
                        ...e,
                        name: e.name ?? (0, eV.XG)(e.src),
                        randomizedSources: e.randomizedSources?.map((e) => ({
                            ...e,
                            filename: e.filename ?? (0, eV.XG)(e.src),
                        })),
                    })),
                );
        }, [t.effects]),
            o.useEffect(() => {
                let e = t.stillFrames;
                null != e &&
                    Object.entries(e).forEach((e) => {
                        let [t, a] = e;
                        if (null != a) {
                            if ("" !== a.src && null != a.src && ("" === a.base64 || null == a.base64))
                                y((e) => ({ ...e, [t]: a }));
                            else if ("" !== a.base64 && null != a.base64) {
                                let e = (0, eV.fB)(a.base64);
                                ((a.src = e), E.current.push(e), y((e) => ({ ...e, [t]: a })));
                            }
                        }
                    });
            }, [t.stillFrames]));
        let I = { profileEffect: t, upsertProfileEffect: a },
            T = o.useRef(I);
        return (o.useEffect(() => {
            T.current = I;
        }),
        o.useEffect(() => {
            let { profileEffect: e, upsertProfileEffect: t } = T.current;
            e.readonly || t({ skuId: e.skuId, name: C, effects: j, stillFrames: b });
        }, [j, b, C]),
        o.useEffect(
            () => () => {
                (E.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (E.current = []));
            },
            [],
        ),
        null == n)
            ? (0, r.jsx)("div", {})
            : (0, r.jsxs)("div", {
                  className: e4.zr,
                  children: [
                      (0, r.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, r.jsx)(eU.A, {
                                  ref: (e) => {
                                      i.current.animated = e;
                                  },
                                  onChange: function (e) {
                                      let t = k(e);
                                      null != t &&
                                          (0, eV.Mz)(t, async (e) => {
                                              let a = await (0, eV.Ay)(e, t, j.length);
                                              f((e) => [...e, a]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eU.A, {
                                  ref: (e) => {
                                      i.current.thumbnail = e;
                                  },
                                  onChange: (e) => D(eV.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eU.A, {
                                  ref: (e) => {
                                      i.current.static = e;
                                  },
                                  onChange: (e) => D(eV.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eU.A, {
                                  ref: (e) => {
                                      i.current.reducedMotion = e;
                                  },
                                  onChange: (e) => D(eV.qH.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: e4.Vg,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: Y()(e4.nM, e4.uW),
                                  children: [
                                      (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Profile Effect Name" }),
                                      (0, r.jsx)("input", {
                                          type: "text",
                                          value: C,
                                          className: e4.hF,
                                          onChange: (e) => {
                                              _(e.target.value);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: e4.nM,
                                  children: [
                                      (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Dark Theme" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: c,
                                          className: e4.OO,
                                          onChange: () => {
                                              u(!c);
                                          },
                                      }),
                                      (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Show User Profile" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: m,
                                          className: e4.OO,
                                          onChange: () => {
                                              h(!m);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: e4.nM,
                                  children: [
                                      (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Border Radius" }),
                                      (0, r.jsx)("input", {
                                          type: "range",
                                          min: 4,
                                          max: 24,
                                          step: 2,
                                          value: g,
                                          onChange: (e) => v(+e.target.value),
                                      }),
                                      (0, r.jsxs)(p.E, { variant: "text-sm/normal", children: [g, "px"] }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: Y()(e4.nz, e4.VH),
                                  style: { borderRadius: g },
                                  children: [
                                      m
                                          ? (0, r.jsx)("div", {
                                                className: e4.jq,
                                                children: (0, r.jsx)(e1.A, {
                                                    user: n,
                                                    currentUser: n,
                                                    transitionState: eX.ip.ENTERED,
                                                    onClose: () => {},
                                                    themeContainerClassName: e4.JB,
                                                }),
                                            })
                                          : (0, r.jsx)(eq.N, {
                                                theme: A,
                                                children: (e) =>
                                                    (0, r.jsx)("div", {
                                                        className: Y()(e4.aM, e),
                                                        children: (0, r.jsx)("img", { src: e9.A, alt: "", width: 400 }),
                                                    }),
                                            }),
                                      l &&
                                          (0, r.jsx)("div", {
                                              className: e4.KJ,
                                              children: (0, r.jsx)(e8, { profileEffect: N }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  children:
                                      m &&
                                      (0, r.jsxs)("div", {
                                          className: Y()(e4.f5, e4.VH),
                                          style: { borderRadius: g },
                                          children: [
                                              (0, r.jsx)(e0.A, {
                                                  user: n,
                                                  pendingAvatar: void 0,
                                                  pendingProfileEffect: null,
                                                  hideProfileFrame: !0,
                                                  canUsePremiumCustomization: !0,
                                                  isTryItOut: !0,
                                              }),
                                              (0, r.jsx)(e8, { profileEffect: N }),
                                          ],
                                      }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: e4.nz,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: e4.nM,
                                          children: [
                                              (0, r.jsx)(x.$, {
                                                  variant: "active",
                                                  text: "Upload Animated Layer",
                                                  onClick: () => i.current.animated?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(p.E, {
                                                  variant: "text-sm/semibold",
                                                  children: "Make sure to upload the bottommost layer first!",
                                              }),
                                          ],
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: e4.nM,
                                          children: [
                                              (0, r.jsx)(x.$, {
                                                  variant: "active",
                                                  text: "Upload thumbnail.png",
                                                  onClick: () => i.current.thumbnail?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(x.$, {
                                                  variant: "active",
                                                  text: "Upload static.png",
                                                  onClick: () => i.current.static?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(x.$, {
                                                  variant: "active",
                                                  text: "Upload reduced_motion.png",
                                                  onClick: () => i.current.reducedMotion?.activateUploadDialogue(),
                                              }),
                                          ],
                                      }),
                                      (0, r.jsx)("div", {
                                          className: e4.q6,
                                          children: (0, r.jsx)("div", {
                                              className: e4.nM,
                                              children: (0, r.jsx)(x.$, {
                                                  variant: "primary",
                                                  text: "Replay Animation",
                                                  onClick: () => {
                                                      (s(!1), setTimeout(() => s(!0), 100));
                                                  },
                                              }),
                                          }),
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: Y()(e4.q6, e4.XA),
                                          children: [
                                              (0, r.jsx)(p.E, {
                                                  variant: "text-sm/semibold",
                                                  children: "Please download both configs for the drop package!",
                                              }),
                                              (0, r.jsx)(p.E, {
                                                  variant: "text-sm/bold",
                                                  color: "text-feedback-critical",
                                                  children: "WARNING: The full config is really big :0",
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: e4.nM,
                                                  children: [
                                                      (0, r.jsx)(eZ.A, {
                                                          fileContents: () => (0, eV.rs)(j),
                                                          contentType: "text/plain",
                                                          fileName: `${S}_timing_config.txt`,
                                                          children: (0, r.jsx)(x.$, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Timing Config",
                                                          }),
                                                      }),
                                                      (0, r.jsx)(eZ.A, {
                                                          fileContents: function () {
                                                              return JSON.stringify({
                                                                  ...t,
                                                                  name: C,
                                                                  readonly: !1,
                                                                  effects: j,
                                                                  stillFrames: b,
                                                              });
                                                          },
                                                          contentType: "text/plain",
                                                          fileName: `${S}_config.txt`,
                                                          children: (0, r.jsx)(x.$, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Full Config",
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: e4.uW,
                                          children: [
                                              (0, r.jsx)(Z.D, { variant: "heading-lg/bold", children: "Still Frames" }),
                                              (0, r.jsx)("div", {
                                                  className: e4.mv,
                                                  children: Object.entries(b).map((e) => {
                                                      let [t, a] = e;
                                                      return (0, r.jsx)(
                                                          tl,
                                                          {
                                                              type: t,
                                                              frame: a,
                                                              theme: A,
                                                              onClear: () => {
                                                                  y((e) => ({ ...e, [t]: null }));
                                                              },
                                                          },
                                                          t,
                                                      );
                                                  }),
                                              }),
                                          ],
                                      }),
                                      j.some((e) => (e.randomizedSources ?? []).length > 0) &&
                                          (0, r.jsxs)("div", {
                                              className: Y()(e4.uW, e4.l7),
                                              children: [
                                                  (0, r.jsx)(p.E, {
                                                      variant: "text-md/bold",
                                                      children: "Rules of Randomized Effects",
                                                  }),
                                                  (0, r.jsxs)("ol", {
                                                      children: [
                                                          (0, r.jsx)("li", {
                                                              children:
                                                                  "When an effect has randomization, all layers with random options must have the same number of options.",
                                                          }),
                                                          (0, r.jsx)("li", {
                                                              children:
                                                                  "The duration for the random options of a layer must be the same",
                                                          }),
                                                          (0, r.jsx)("li", {
                                                              children:
                                                                  "If multiple layers have randomization, the same option will be used for all layers. (For example, the second option will be used for ALL layers)",
                                                          }),
                                                          (0, r.jsx)("li", {
                                                              children:
                                                                  'Click "Replay Animation" to "reroll" the randomization',
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: Y()(e4.Vg, e4.ZF),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: e4.cD,
                                          children: (0, r.jsx)(x.$, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: function () {
                                                  (f([]), y(te));
                                              },
                                          }),
                                      }),
                                      j.map((e, t) =>
                                          (0, r.jsxs)(
                                              "div",
                                              {
                                                  className: e4.ec,
                                                  children: [
                                                      (0, r.jsxs)("div", {
                                                          className: e4.D1,
                                                          children: [
                                                              (0, r.jsx)(Z.D, {
                                                                  variant: "heading-md/bold",
                                                                  children: e.name,
                                                              }),
                                                              (0, r.jsx)("img", {
                                                                  src: e.src,
                                                                  className: e4.oq,
                                                                  alt: "",
                                                              }),
                                                              null != e.randomizedSources &&
                                                                  (0, r.jsxs)(r.Fragment, {
                                                                      children: [
                                                                          (0, r.jsx)(Z.D, {
                                                                              variant: "heading-md/bold",
                                                                              children: "Alternatives",
                                                                          }),
                                                                          e.randomizedSources.map((e, t) =>
                                                                              (0, r.jsxs)(
                                                                                  "div",
                                                                                  {
                                                                                      children: [
                                                                                          null != e.filename &&
                                                                                              (0, r.jsx)(Z.D, {
                                                                                                  variant:
                                                                                                      "heading-sm/semibold",
                                                                                                  children: e.filename,
                                                                                              }),
                                                                                          (0, r.jsx)("img", {
                                                                                              src: e.src,
                                                                                              className: e4.oq,
                                                                                              alt: "",
                                                                                          }),
                                                                                      ],
                                                                                  },
                                                                                  e.filename ?? `randomized-${t}`,
                                                                              ),
                                                                          ),
                                                                      ],
                                                                  }),
                                                          ],
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                          className: Y()(e4.Vg, e4.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: e4.nz,
                                                                  children: [
                                                                      (0, r.jsx)(p.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: e4.hF,
                                                                          onChange: (e) => {
                                                                              f((a) => {
                                                                                  let n = [...a],
                                                                                      l = a[t];
                                                                                  return (
                                                                                      (l.start = +e.target.value),
                                                                                      (n[t] = l),
                                                                                      n
                                                                                  );
                                                                              });
                                                                          },
                                                                          contentEditable: !0,
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, r.jsxs)("div", {
                                                                  className: e4.nz,
                                                                  children: [
                                                                      (0, r.jsx)(p.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: e4.hF,
                                                                          onChange: (e) => {
                                                                              f((a) => {
                                                                                  let n = [...a],
                                                                                      l = a[t];
                                                                                  return (
                                                                                      (l.duration = +e.target.value),
                                                                                      (n[t] = l),
                                                                                      n
                                                                                  );
                                                                              });
                                                                          },
                                                                          contentEditable: !0,
                                                                      }),
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                          className: Y()(e4.Vg, e4.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: e4.nz,
                                                                  children: [
                                                                      (0, r.jsx)(p.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: e4.OO,
                                                                          onChange: (e) => {
                                                                              f((a) => {
                                                                                  let n = [...a],
                                                                                      l = a[t];
                                                                                  return (
                                                                                      (l.loop = e.target.checked),
                                                                                      (n[t] = l),
                                                                                      n
                                                                                  );
                                                                              });
                                                                          },
                                                                      }),
                                                                  ],
                                                              }),
                                                              (0, r.jsx)("div", {
                                                                  className: e4.nz,
                                                                  children:
                                                                      e.loop &&
                                                                      (0, r.jsxs)(r.Fragment, {
                                                                          children: [
                                                                              (0, r.jsx)(p.E, {
                                                                                  variant: "text-md/bold",
                                                                                  children: "Loop Delay",
                                                                              }),
                                                                              (0, r.jsx)("input", {
                                                                                  type: "number",
                                                                                  value: e.loopDelay,
                                                                                  className: e4.hF,
                                                                                  onChange: (e) => {
                                                                                      f((a) => {
                                                                                          let n = [...a],
                                                                                              l = a[t];
                                                                                          return (
                                                                                              (l.loopDelay =
                                                                                                  +e.target.value),
                                                                                              (n[t] = l),
                                                                                              n
                                                                                          );
                                                                                      });
                                                                                  },
                                                                                  contentEditable: !0,
                                                                              }),
                                                                          ],
                                                                      }),
                                                              }),
                                                          ],
                                                      }),
                                                      (0, r.jsx)("div", {
                                                          style: { display: "none" },
                                                          children: (0, r.jsx)(eU.A, {
                                                              ref: (e) => {
                                                                  i.current[`randomized-${t}`] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let a;
                                                                  null != (a = k(e)) &&
                                                                      (0, eV.Mz)(a, (e) => {
                                                                          f((n) => {
                                                                              let l = [...n],
                                                                                  s = n[t];
                                                                              if (null == s) return n;
                                                                              let i = { ...s };
                                                                              return (
                                                                                  null == i.randomizedSources &&
                                                                                      (i.randomizedSources = []),
                                                                                  i.randomizedSources.push({
                                                                                      src: e,
                                                                                      filename: a.name,
                                                                                  }),
                                                                                  (l[t] = i),
                                                                                  l
                                                                              );
                                                                          });
                                                                      });
                                                              },
                                                              multiple: !1,
                                                          }),
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                          className: Y()(e4.nM, e4._N),
                                                          children: [
                                                              (0, r.jsx)(x.$, {
                                                                  variant: "secondary",
                                                                  text: "Add Alternative",
                                                                  onClick: () =>
                                                                      i.current[
                                                                          `randomized-${t}`
                                                                      ]?.activateUploadDialogue(),
                                                              }),
                                                              (0, r.jsx)(x.$, {
                                                                  variant: "critical-secondary",
                                                                  text: "Remove Layer",
                                                                  onClick: () => {
                                                                      f((t) => t.filter((t) => t !== e));
                                                                  },
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              },
                                              t,
                                          ),
                                      ),
                                  ],
                              }),
                          ],
                      }),
                  ],
              });
    },
    ti = "Make sure you're only uploading text files!";
function tr(e) {
    let { profileEffect: t, onClick: a } = e,
        { deleteProfileEffect: n } = (0, e$.wu)();
    return (0, r.jsxs)(q.D, {
        className: e4.B0,
        onClick: a,
        children: [
            (0, r.jsx)("div", { className: e4.yV, style: { backgroundImage: `url(${t.effects?.[0]?.base64})` } }),
            (0, r.jsxs)("div", {
                className: e4.eL,
                children: [
                    (0, r.jsx)(p.E, { variant: "text-md/bold", children: t.name }),
                    (0, r.jsx)(x.$, {
                        variant: "critical-secondary",
                        text: "Delete",
                        onClick: (e) => {
                            (e.preventDefault(), e.stopPropagation(), n(t.skuId));
                        },
                    }),
                ],
            }),
        ],
    });
}
function to() {
    let { profileEffects: e, upsertProfileEffect: t, clearAll: a } = (0, e$.wu)(),
        [n, l] = o.useState(),
        s = o.useRef(null),
        { categories: i } = (0, eB.A)(),
        d = o.useMemo(() => (0, eG.Wj)(i), [i]),
        [c, u] = o.useState(""),
        m = o.useMemo(
            () =>
                "" === c
                    ? d
                    : d.filter((e) => {
                          let t = c.toLowerCase(),
                              a = e.title?.toLowerCase() ?? "",
                              n = e.description?.toLowerCase() ?? "";
                          return a.includes(t) || n.includes(t);
                      }),
            [c, d],
        ),
        h = o.useCallback(
            (e, a) => {
                if (null == a || !e.type.startsWith("text/")) return (0, eF.Ni)(ti);
                let [n, l] = a.split(",");
                if (!n.includes("text/plain")) return (0, eF.Ni)(ti);
                let s = JSON.parse(atob(l));
                ((s.skuId = (0, eL.A)()), t(s), (0, eF.GF)("Profile Effect (maybe??) imported!"));
            },
            [t],
        ),
        g = o.useCallback(
            (e) => {
                e.currentTarget?.files == null
                    ? (0, eF.Ni)("Error uploading file. Try again!")
                    : (0, eF.KE)(e.currentTarget.files, h, eF.Ni);
            },
            [h],
        );
    return (0, r.jsxs)("div", {
        className: e4.zr,
        children: [
            null == n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: e4.nz,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: Y()(e4.uW, e4.nM),
                                    children: [
                                        (0, r.jsx)(Z.D, {
                                            variant: "heading-xl/bold",
                                            children: "Custom Profile Effects",
                                        }),
                                        (0, r.jsx)(x.$, {
                                            variant: "critical-secondary",
                                            text: "Clear All",
                                            onClick: async () => {
                                                (await eP.A.confirm({
                                                    title: "Clear All Profile Effects",
                                                    body: "Are you sure you want to clear all profile effects? This cannot be undone.",
                                                    confirmText: "Clear All",
                                                    confirmVariant: "critical-primary",
                                                })) && (a(), (0, eF.GF)("All profile effects cleared!"));
                                            },
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: e4.Iv,
                                    children: Object.values(e).map((e) =>
                                        (0, r.jsx)(tr, { profileEffect: e, onClick: () => l(e) }, e.skuId),
                                    ),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: Y()(e4.nM, e4._N, e4.uW),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: e4.au,
                                    children: [
                                        (0, r.jsx)(p.E, {
                                            variant: "text-md/normal",
                                            color: "text-overlay-light",
                                            children: "Import Shared Config",
                                        }),
                                        (0, r.jsx)(eU.A, { ref: s, onChange: g, multiple: !1 }),
                                    ],
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Create New Effect",
                                    onClick: function () {
                                        t({ skuId: (0, eL.A)(), name: "New Profile Effect", effects: [] });
                                    },
                                }),
                            ],
                        }),
                        (0, r.jsx)("hr", {}),
                        (0, r.jsxs)("div", {
                            className: e4.uW,
                            children: [
                                (0, r.jsx)(Z.D, { variant: "heading-xl/bold", children: "All Effects" }),
                                (0, r.jsx)(f.k, {
                                    value: c,
                                    onChange: (e) => {
                                        u(e);
                                    },
                                }),
                                (0, r.jsx)("div", {
                                    className: e4.xm,
                                    children: m.map((e) =>
                                        (0, r.jsx)(
                                            q.D,
                                            {
                                                className: e4.S5,
                                                style: { backgroundImage: `url(${e.thumbnailPreviewSrc})` },
                                                onClick: () => {
                                                    let t = {
                                                        [eV.qH.THUMBNAIL]:
                                                            null != e.thumbnailPreviewSrc &&
                                                            "" !== e.thumbnailPreviewSrc
                                                                ? {
                                                                      src: e.thumbnailPreviewSrc,
                                                                      name: "thumbnail.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [eV.qH.STATIC]:
                                                            null != e.staticFrameSrc && "" !== e.staticFrameSrc
                                                                ? {
                                                                      src: e.staticFrameSrc,
                                                                      name: "static.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [eV.qH.REDUCED_MOTION]:
                                                            null != e.reducedMotionSrc && "" !== e.reducedMotionSrc
                                                                ? {
                                                                      src: e.reducedMotionSrc,
                                                                      name: "reduced_motion.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                    };
                                                    l({
                                                        skuId: e.skuId,
                                                        name: e.title,
                                                        effects: e.effects,
                                                        stillFrames: t,
                                                        readonly: !0,
                                                    });
                                                },
                                                children: (0, r.jsx)("div", {
                                                    className: e4.Hd,
                                                    children: (0, r.jsx)(p.E, {
                                                        variant: "text-md/normal",
                                                        color: "text-overlay-light",
                                                        children: e.title,
                                                    }),
                                                }),
                                            },
                                            e.skuId,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                    ],
                }),
            null != n && (0, r.jsx)(ts, { profileEffect: n }),
        ],
    });
}
var td = a(935399),
    tc = a(462887),
    tu = a(289873),
    tm = a(478016),
    th = a(565645),
    tx = a(7584),
    tp = a(619499),
    tg = a(207803),
    tv = a(84540),
    tj = a(836602),
    tf = a(999291),
    tb = a(903209),
    ty = a(841702),
    tE = a(892118),
    tC = a(744808),
    t_ = a(965452),
    tS = a(626768),
    tN = a(464896);
function tA() {
    let e = (0, ej.Ay)();
    return (0, r.jsxs)("div", {
        className: t_.z3,
        children: [
            (0, r.jsx)("img", { src: (0, tc.M)(e) ? tS : tN, alt: "" }),
            (0, r.jsx)(p.E, {
                variant: "text-sm/normal",
                children:
                    "No frames found on your account. You must be granted test profile frame entitlements to use this tool.",
            }),
        ],
    });
}
function tk() {
    let e = (0, d.bG)([ec.default], () => ec.default.getCurrentUser()),
        t = (0, tf.Ay)(e?.id);
    o.useEffect(() => {
        e?.id != null && (0, tb.A)(e.id);
    }, [e?.id]);
    let { purchases: a, isFetchingPurchases: n } = (0, ty.Bf)(),
        l = o.useMemo(() => (0, eG.MG)(a, new Map()), [a]),
        [{ pendingProfileFrame: s }, i] = (0, d.yK)([tj.A], () => [tj.A.getPendingChanges(), tj.A.showNotice()]),
        c = void 0 === s ? t?.profileFrame : s,
        u = null != c ? a.get(c.skuId) : void 0,
        m = (0, tE.s)(u?.items[0]) ? u.items[0] : void 0;
    return (
        (0, td.l0)(tg.RE),
        (0, r.jsxs)("div", {
            className: t_.kL,
            children: [
                (0, r.jsxs)(Z.D, {
                    variant: "heading-xl/bold",
                    children: [
                        (0, r.jsx)(th.A, {
                            emojiName: tx.Ay.getByName("frame_with_picture")?.surrogates,
                            className: t_.Zg,
                        }),
                        "Profile Frames!",
                    ],
                }),
                0 === l.length && n && (0, r.jsx)(tu.y, {}),
                0 === l.length && !n && (0, r.jsx)(tA, {}),
                l.length > 0 &&
                    (0, r.jsxs)("div", {
                        className: t_.MK,
                        children: [
                            (0, r.jsx)(p.E, {
                                variant: "text-sm/normal",
                                children: "Select a frame to preview. Save to apply the frame to your main profile.",
                            }),
                            (0, r.jsxs)("ul", {
                                className: t_.p_,
                                children: [
                                    (0, r.jsx)(
                                        "li",
                                        {
                                            children: (0, r.jsx)(x.$, {
                                                text: "None",
                                                variant: "secondary",
                                                fullWidth: !0,
                                                icon: null == c ? tm.U : void 0,
                                                disabled: null == c,
                                                onClick: () => (0, tv.p)({ profileFrame: null }),
                                            }),
                                        },
                                        "none",
                                    ),
                                    l.map((e) => {
                                        let t = a.get(e.skuId);
                                        return null == t
                                            ? null
                                            : (0, r.jsx)(
                                                  "li",
                                                  {
                                                      children: (0, r.jsx)(x.$, {
                                                          text: t.name,
                                                          variant: "secondary",
                                                          fullWidth: !0,
                                                          icon: c?.skuId === e.skuId ? tm.U : void 0,
                                                          disabled: c?.skuId === e.skuId,
                                                          onClick: () => (0, tv.p)({ profileFrame: e }),
                                                      }),
                                                  },
                                                  e.skuId,
                                              );
                                    }),
                                ],
                            }),
                            i && (0, r.jsx)(tp.A, {}),
                            (0, r.jsxs)("div", {
                                className: t_.VH,
                                children: [
                                    (0, r.jsx)(p.E, { variant: "text-sm/normal", children: "Preview:" }),
                                    (0, r.jsxs)("div", {
                                        className: t_.ME,
                                        children: [
                                            (0, r.jsx)("img", { src: e9.A, alt: "" }),
                                            null != m && (0, r.jsx)(tC.A, { frame: m, isPreview: !0 }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
            ],
        })
    );
}
var tD = a(702841),
    tI = a(793574),
    tT = a(590180),
    tO = a(4227),
    tR = a(258245),
    tw = a(61750),
    tM = a(73153),
    tL = a(499454),
    tP = a(202541);
let tU = "devtools-collectibles-gift";
async function tG(e) {
    let { skuId: t, sender: a } = e,
        n = {
            code: tU,
            user: { id: a.id },
            sku_id: t,
            uses: 0,
            max_uses: 1,
            expires_at: null,
            redeemed: !1,
            application_id: ex.FYj,
            gift_style: tP.o2.STANDARD_BOX,
        };
    (await tM.h.dispatch({ type: "GIFT_CODE_RESOLVE_SUCCESS", giftCode: n }), (0, tL.h)({ processedCode: tU }));
}
var tB = a(80101);
let tF = (e) => {
        let [t, a] = o.useState(0);
        return (
            o.useLayoutEffect(() => {
                let e = tO.A.getPurchase;
                return (
                    (tO.A.getPurchase = (e) => void 0),
                    tO.A.emitChange(),
                    a(1),
                    () => {
                        ((tO.A.getPurchase = e), tO.A.emitChange());
                    }
                );
            }, []),
            (0, r.jsx)("div", { className: tB.Do, children: (0, r.jsx)(tR.A, { ...e }, t) })
        );
    },
    t$ = () => {
        let e = (0, tD.bG)([ec.default], () => ec.default.getCurrentUser()),
            t = (0, tD.bG)([tT.A], () => tT.A.categories),
            a = (0, tD.bG)([tO.A], () => tO.A.purchases),
            n = (0, tD.bG)([tT.A], () => tT.A.lastSuccessfulFetch),
            l = t.size > 0 && a.size > 0 && null != n,
            { isFetching: s, categories: i } = (0, ty.Ay)({ logPerf: !1, stalePurchasesOK: !0, noOp: l }),
            d = l ? t : i,
            c = l || (!s && d.size > 0),
            [u, m] = o.useState(""),
            [h, g] = o.useState(null),
            [v, j] = o.useState(null);
        return (o.useEffect(() => {
            if ("" === u.trim() || !c) {
                (g(null), j(null));
                return;
            }
            let e = tT.A.getProduct(u),
                t = tT.A.getCategoryForProduct(u);
            null != e && null != t ? (g(e), j(t)) : (g(null), j(null));
        }, [u, c]),
        s)
            ? (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Loading categories and collectibles..." })
            : null == e
              ? (0, r.jsx)(p.E, { variant: "text-md/normal", children: "No user found" })
              : (0, r.jsxs)("div", {
                    className: tB.kL,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tB.uW,
                            children: [
                                (0, r.jsx)(Z.D, { variant: "heading-lg/semibold", children: "Product Configuration" }),
                                (0, r.jsxs)("div", {
                                    className: tB.qp,
                                    children: [
                                        (0, r.jsx)(p.E, {
                                            variant: "text-md/semibold",
                                            className: tB.NB,
                                            children: "Primary Product SKU ID",
                                        }),
                                        (0, r.jsx)(f.k, { value: u, onChange: m, placeholder: "Enter product SKU ID" }),
                                        !c &&
                                            "" !== u.trim() &&
                                            (0, r.jsx)(p.E, {
                                                variant: "text-sm/normal",
                                                className: tB.KQ,
                                                children: "Loading products...",
                                            }),
                                        c &&
                                            "" !== u.trim() &&
                                            null == h &&
                                            (0, r.jsx)(p.E, {
                                                variant: "text-sm/normal",
                                                className: tB.kc,
                                                children: "Product not found",
                                            }),
                                        null != h &&
                                            (0, r.jsxs)(p.E, {
                                                variant: "text-sm/normal",
                                                className: tB.xT,
                                                children: ["Found: ", h.name],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: tB.uW,
                            children: [
                                (0, r.jsx)(Z.D, { variant: "heading-lg/semibold", children: "Product Preview" }),
                                null != h && null != v
                                    ? (0, r.jsxs)("div", {
                                          className: tB.i1,
                                          children: [
                                              (0, r.jsx)(tF, { skuId: h.skuId }),
                                              (0, r.jsx)(x.$, {
                                                  variant: "primary",
                                                  onClick: function () {
                                                      null != h &&
                                                          null != e &&
                                                          (0, tw.A)({
                                                              product: h,
                                                              analyticsLocations: [tI.A.COLLECTIBLES_SHOP_CARD],
                                                          });
                                                  },
                                                  text: "Show Collectibles Collected Modal",
                                              }),
                                              (0, r.jsx)(x.$, {
                                                  variant: "primary",
                                                  onClick: function () {
                                                      null != h && null != e && tG({ skuId: h.skuId, sender: e });
                                                  },
                                                  text: "Show Gift Accept Modal",
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)("div", {
                                          className: tB.qf,
                                          children: (0, r.jsx)(p.E, {
                                              variant: "text-md/normal",
                                              className: tB.X2,
                                              children: "Enter a valid product SKU ID to see the preview",
                                          }),
                                      }),
                            ],
                        }),
                    ],
                });
    };
var tV = a(646695);
let tW = { profile_effects: 1, nameplates: 2, profile_frames: 3, product_preview: 4 };
function tz(e) {
    let { setTab: t } = e,
        a = (0, d.bG)([en.A], () => en.A.getWindowOpen(ex.MLl.DEVTOOLS_POPOUT));
    return (0, r.jsxs)("div", {
        className: tV.Qs,
        children: [
            (0, r.jsx)(q.D, {
                onClick: () => {
                    t(1);
                },
                children: (0, r.jsx)("div", {
                    className: Y()(tV.vK, tV.Dg),
                    children: (0, r.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-overlay-light",
                        children: "Profile Effects",
                    }),
                }),
            }),
            (0, r.jsx)(q.D, {
                onClick: () => {
                    t(2);
                },
                children: (0, r.jsx)("div", {
                    className: Y()(tV.vK, tV.st),
                    children: (0, r.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-overlay-light",
                        children: "Nameplates",
                    }),
                }),
            }),
            (0, r.jsx)(q.D, {
                onClick: () => {
                    t(3);
                },
                children: (0, r.jsx)("div", {
                    className: Y()(tV.vK, tV.BW),
                    children: (0, r.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-overlay-light",
                        children: "Profile Frames",
                    }),
                }),
            }),
            (0, r.jsx)(q.D, {
                onClick: () => {
                    t(4);
                },
                children: (0, r.jsx)("div", {
                    className: Y()(tV.vK, tV.IP),
                    children: (0, r.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-overlay-light",
                        children: "Products",
                    }),
                }),
            }),
            !a &&
                (0, r.jsx)("div", {
                    style: { marginTop: 16 },
                    children: (0, r.jsx)(J.w, {
                        type: "warning",
                        children: (0, r.jsxs)(Q.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(p.E, { variant: "text-md/semibold", children: "Not enough space?" }),
                                (0, r.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    children: "You can pop out the DevTools to see the full layout.",
                                }),
                                (0, r.jsx)(x.$, {
                                    size: "sm",
                                    icon: X.t,
                                    variant: "secondary",
                                    onClick: ea.openDevToolsPopout,
                                    text: "Popout DevTools",
                                }),
                            ],
                        }),
                    }),
                }),
        ],
    });
}
let tH = function () {
    let [e, t] = o.useState(() => {
        let e = et.A.lastOpenSubTabId;
        return null != e && e in tW ? tW[e] : 0;
    });
    return (
        o.useEffect(() => {
            null != et.A.lastOpenSubTabId && (0, ee.Jt)({ lastOpenSubTabId: null });
        }, []),
        (0, r.jsxs)(g.Ip, {
            className: tV.iE,
            children: [
                (0, r.jsxs)("div", {
                    className: tV.C$,
                    children: [
                        (0, r.jsx)(Z.D, { variant: "heading-xxl/medium", children: "Collectibles DevTools" }),
                        0 !== e && (0, r.jsx)(x.$, { variant: "primary", onClick: () => t(0), text: "Back" }),
                    ],
                }),
                (function () {
                    switch (e) {
                        case 1:
                            return (0, r.jsx)(to, {});
                        case 2:
                            return (0, r.jsx)(ek, {});
                        case 3:
                            return (0, r.jsx)(tk, {});
                        case 4:
                            return (0, r.jsx)(t$, {});
                        default:
                            return (0, r.jsx)(tz, { setTab: t });
                    }
                })(),
            ],
        })
    );
};
var tK = a(681154),
    tY = a(306264),
    tq = a(506774),
    tJ = a(587895),
    tQ = a(429913),
    tX = a(475825),
    tZ = a(730441);
function t0(e) {
    let { columns: t, data: a, className: n, rowClassName: l, onClickRow: s, selectedRowKey: i, rowHeight: d = 40 } = e,
        c = o.useMemo(
            () =>
                t.map((e) => ({
                    renderHeader: () => (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: e.key }),
                    ...e,
                })),
            [t],
        ),
        u = 0 === a.length ? [1] : [a.length];
    return (0, r.jsx)("div", {
        className: tZ.CZ,
        children: (0, r.jsx)(tX.OZ, {
            className: n,
            innerClassName: tZ.tp,
            sections: u,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    n = tZ.ZR;
                return (0, r.jsx)(
                    "div",
                    {
                        className: n,
                        children: c.map((e) => {
                            let n = e.cellClassName,
                                l = { width: `calc(${e.cellWidth ?? "1fr"} - 16px)` };
                            return (0, r.jsx)(
                                "div",
                                { className: n, style: l, children: e.renderHeader?.(e, a) },
                                `dev-tools-th-${t}-${e.key}`,
                            );
                        }),
                    },
                    `dev-tools-header-${t}`,
                );
            },
            rowHeight: d,
            renderRow: (e) => {
                let { rowIndex: t } = e,
                    n = a[t];
                if (null == n) return null;
                let o = n.key,
                    u = Y()(tZ.jD, { [tZ.wD]: o === i, rowClassName: l });
                return (0, r.jsx)(
                    q.D,
                    {
                        className: u,
                        onClick: () => s?.(n),
                        children: c.map((e) => {
                            let a = e.cellClassName,
                                l = { width: `calc(${e.cellWidth ?? "1fr"} - 16px)`, height: `calc(${d}px - 16px)` };
                            return (0, r.jsx)(
                                "div",
                                { className: a, style: l, children: e.render?.(n, void 0, t) },
                                `dev-tools-td-${t}-${e.key}`,
                            );
                        }),
                    },
                    `dev-tools-tr-${t}`,
                );
            },
        }),
    });
}
var t1 = a(409626),
    t2 = a(692969),
    t3 = a(760751),
    t6 = a(403362),
    t5 = a(435738),
    t8 = a(99753),
    t4 = a(402860),
    t9 = a(574520),
    t7 = a(808323),
    ae = a(583846),
    at = a(424994),
    aa = a(14570);
function an(e) {
    let { id: t } = e,
        a = (0, d.bG)([ec.default], () => ec.default.getUser(t));
    return null == a
        ? null
        : (0, r.jsx)(q.D, {
              className: aa._,
              onClick: function () {
                  (0, t4.openUserProfileModal)({ sourceAnalyticsLocations: [tI.A.DEV_TOOLS], userId: t });
              },
              children: (0, r.jsx)(p.E, { variant: "text-md/semibold", children: a.username }),
          });
}
function al() {
    let e = (0, d.bG)([t8.A], () => t8.A.getFeed(at.X1.GLOBAL_FEED)),
        t = (0, d.bG)([t8.A], () => t8.A.getFilters()),
        a = (0, d.cf)(
            [t9.A],
            () => {
                let t = {};
                for (let a of e?.entries ?? []) t[(0, t9.$)(a.content)] = t9.A.canRenderContent(a.content);
                return t;
            },
            [e],
        ),
        n = (0, d.bG)([t5.A], () => t5.A.getImpressionCappedItemIds());
    if (null == t) return null;
    let l = e?.entries?.flatMap((e) => {
        let { content: l } = e;
        if (!(0, t7.l)(t, l)) return [];
        let s = a[(0, t9.$)(l)];
        return (0, r.jsxs)(
            "li",
            {
                className: aa.p,
                children: [
                    (0, r.jsx)(an, { type: l.author_type, id: l.author_id }),
                    !s && (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Expired or no matching presence" }),
                    (0, ae.I5)(l) &&
                        (0, r.jsxs)(p.E, { variant: "text-md/normal", children: ["Expired at ", l.expires_at] }),
                    n.has(l.id) && (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Impression capped" }),
                ],
            },
            l.id,
        );
    });
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(Z.D, { variant: "heading-md/semibold", children: "Selected Content" }),
            null != l ? (0, r.jsx)("ul", { children: l }) : (0, r.jsx)("div", { children: "(none?)" }),
        ],
    });
}
var as = a(576470),
    ai = a(693879);
function ar() {
    let e = (0, d.bG)([t8.A], () => t8.A.getFeed(at.X1.GLOBAL_FEED)?.refresh_stale_inbox_after_ms != null),
        { loading: t, nextFetchDate: a } = (0, d.cf)(
            [t8.A],
            () => t8.A.getFeedState(at.X1.GLOBAL_FEED) ?? { loading: !1 },
        ),
        n = (0, d.bG)([t8.A], () => t8.A.getLastFeedFetchDate(at.X1.GLOBAL_FEED));
    return (0, r.jsxs)("div", {
        children: [
            t
                ? (0, r.jsx)(p.E, { variant: "text-md/normal", children: "(fetching)" })
                : (0, r.jsxs)(p.E, {
                      variant: "text-md/normal",
                      children: [
                          "Next fetch: ",
                          null != a ? (0, r.jsx)(as.A, { deadline: a }) : e ? "(awaiting push)" : "(unscheduled)",
                      ],
                  }),
            (0, r.jsxs)(p.E, {
                variant: "text-md/normal",
                children: [
                    "Last fetch:",
                    " ",
                    null != n ? (0, r.jsx)(ai.z, { inline: !0, entry: { start: n.getTime() } }) : "(never)",
                ],
            }),
        ],
    });
}
var ao = a(225418);
let ad = [
    {
        key: "type",
        cellClassName: Y()(ao.Hn, ao.T$),
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(p.E, { variant: "text-md/semibold", children: tK.ContentInventoryEntryType[t] });
        },
    },
    {
        key: "count",
        cellClassName: Y()(ao.Hn, ao.MX),
        render(e) {
            let { entries: t } = e;
            return (0, r.jsx)("div", { children: (0, r.jsx)(p.E, { variant: "text-md/normal", children: t.length }) });
        },
    },
    {
        key: "only?",
        cellClassName: ao.Hn,
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(ac, { type: t });
        },
    },
];
function ac(e) {
    let { type: t } = e,
        a = (0, d.bG)([t8.A], () => t8.A.getFilters()),
        n = a?.types?.has(t) ?? !1;
    return (0, r.jsx)(m.d, {
        checked: n,
        onChange: function () {
            n
                ? tM.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: void 0 })
                : tM.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: { types: new Set([t]) } });
        },
    });
}
function au() {
    var e;
    let t,
        a = (0, d.bG)([t8.A], () => t8.A.getFeed(at.X1.GLOBAL_FEED)),
        n = (0, d.bG)([t8.A], () => t8.A.getDebugImpressionCappingDisabled()),
        l = (0, d.bG)([t5.A], () => t5.A.getDebugFastImpressionCappingEnabled()),
        s =
            ((e = a?.entries?.map((e) => e.content)),
            Object.keys((t = e3().groupBy(e, (e) => e.content_type))).map((e) => {
                let a = t[e];
                return { key: `${e}`, type: a[0].content_type, entries: a };
            })),
        i = (0, d.bG)([t8.A], () => t8.A.getFeedState(at.X1.GLOBAL_FEED)?.loading === !0),
        [c, u] = o.useState(""),
        m = (0, d.bG)(
            [t3.A, tJ.A],
            () => (parseInt(c) > 0 ? c : (t3.A.searchGamesByName(c)[0] ?? tJ.A.getApplicationByName(c)?.id)),
            [c],
        ),
        h = (0, t2.A)({
            applicationId: m,
            location: "DevToolsContentInventory",
            source: t1.GameProfileSources.DevTools,
        }),
        v = Object.entries(tq.w.get("GameProfileModal") ?? {})
            .filter((e) => {
                let [t, a] = e;
                return a;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        j = (0, tQ.A)(v).filter(t6.Vq);
    return (0, r.jsx)("div", {
        className: tZ.nd,
        children: (0, r.jsxs)(g.Ip, {
            className: ao.Qs,
            children: [
                (0, r.jsxs)(Q.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.E, { variant: "text-md/semibold", children: "Inventory" }),
                        s.length > 0 && (0, r.jsx)(t0, { columns: ad, data: s }),
                        (0, r.jsx)(ar, {}),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Refresh Now",
                            fullWidth: !0,
                            onClick: function () {
                                tM.h.dispatch({
                                    type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                                    feedId: at.X1.GLOBAL_FEED,
                                    feature: tY.M.INBOX,
                                });
                            },
                            loading: i,
                        }),
                    ],
                }),
                (0, r.jsxs)(Q.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.E, { variant: "text-md/semibold", children: "Impression Capping" }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Clear Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                tM.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Log Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                tM.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: n ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                tM.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: l ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                tM.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING" });
                            },
                        }),
                    ],
                }),
                !1,
                (0, r.jsx)(al, {}),
                (0, r.jsxs)(Q.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.E, { variant: "text-md/semibold", children: "Game Profile" }),
                        (0, r.jsx)(f.k, {
                            placeholder: "App ID or full name",
                            onChange: (e) => (0 === e.length || e.length >= 18) && u(e),
                            onKeyDown: (e) => {
                                "Enter" === e.key && (c === e.currentTarget.value ? h?.(e) : u(e.currentTarget.value));
                            },
                            error:
                                c.length > 0 && null == h ? `No game profile for ${m ?? c + " - try by id"}.` : void 0,
                            helperText: null != h ? "Game profile found" : void 0,
                        }),
                        (0, r.jsx)("ul", {
                            children: j.map((e) =>
                                (0, r.jsx)(
                                    "li",
                                    { children: (0, r.jsx)(am, { application: e }) },
                                    `follow-game-${e.id}`,
                                ),
                            ),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function am(e) {
    let { application: t } = e,
        a = (0, t2.A)({
            applicationId: t.id,
            location: "DevToolsContentInventory",
            source: t1.GameProfileSources.DevTools,
        });
    return (0, r.jsx)(q.D, {
        onClick: a,
        children: (0, r.jsx)(p.E, { variant: "text-xs/normal", color: "text-muted", children: t.name }),
    });
}
var ah = a(267355),
    ax = a(489277),
    ap = a(222506),
    ag = a(567249),
    av = a(744893),
    aj = a(188321),
    af = a(25202);
function ab(e) {
    let { label: t, value: a } = e;
    return (0, r.jsxs)(Q.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            (0, r.jsx)(p.E, { variant: "text-md/normal", color: "text-muted", children: t }),
            (0, r.jsx)(p.E, { variant: "text-md/medium", children: a }),
        ],
    });
}
function ay(e) {
    return e ? "yes" : "no";
}
function aE(e) {
    return e > 0 ? `${e} fps` : "uncapped";
}
function aC() {
    let e = (0, d.cf)([aj.A, ax.A, ap.A, ag.A], () => ({
            enabled: aj.A.enabled,
            hasRunningGame: aj.A.hasRunningGame,
            isThrottling: aj.A.isThrottling,
            frameRate: (0, af.A)(),
            overlayFrameRate: (0, af.j)(),
            isOverlayOpen: (0, ah.isOverlayCurrentlyVisibleAndUnlocked)(),
            isDiscordFocused: aj.A.isDiscordFocused,
            isDiscordHovered: aj.A.isDiscordHovered,
            suppressedGameCount: aj.A.suppressedPromptGameCount,
        })),
        t = e.isThrottling
            ? null
            : e.enabled
              ? e.hasRunningGame
                  ? e.isDiscordFocused
                      ? "Relaxed: levers lift while Discord is focused."
                      : e.isDiscordHovered
                        ? "Relaxed: levers lift while the cursor is over Discord."
                        : "The 2026-08-game-mode experiment is off for this account."
                  : "No non-launcher game is running."
              : "Turned off in Settings > System > Game Mode.",
        a = e.suppressedGameCount > 0;
    return (0, r.jsxs)(Q.B, {
        gap: 32,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)(Q.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(Z.D, { variant: "heading-md/bold", children: "Status" }),
                    (0, r.jsx)(ab, { label: "Throttling", value: ay(e.isThrottling) }),
                    (0, r.jsx)(ab, { label: "Running game detected", value: ay(e.hasRunningGame) }),
                    (0, r.jsx)(ab, { label: "Discord focused", value: ay(e.isDiscordFocused) }),
                    (0, r.jsx)(ab, { label: "Discord hovered", value: ay(e.isDiscordHovered) }),
                    null != t && (0, r.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: "Set a debug running game from the Detected Games tab to simulate a game.",
                    }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(Q.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(Z.D, { variant: "heading-md/bold", children: "Applied Levers" }),
                    (0, r.jsx)(ab, { label: "Frame rate cap", value: aE(e.frameRate) }),
                    (0, r.jsx)(ab, { label: "Overlay frame rate cap", value: aE(e.overlayFrameRate) }),
                    (0, r.jsx)(ab, { label: "Reduce motion", value: ay(e.isThrottling) }),
                    (0, r.jsx)(ab, { label: "Pause animated media", value: ay(e.isThrottling) }),
                    (0, r.jsx)(ab, { label: "Overlay open", value: ay(e.isOverlayOpen) }),
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children:
                            "Levers key off Throttling, except the frame rate caps: the main cap also lifts while the overlay is open, and the overlay cap holds whenever game mode is active, ignoring focus and hover. Values live in GameModeConstants.tsx.",
                    }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(Q.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(Z.D, { variant: "heading-md/bold", children: "Overlay Prompt" }),
                    (0, r.jsx)(ab, { label: "Suppressed games", value: String(e.suppressedGameCount) }),
                    (0, r.jsx)(Q.B, {
                        direction: "horizontal",
                        children: (0, r.jsx)(x.$, {
                            variant: "secondary",
                            text: "Reset Overlay Prompt",
                            disabled: !a,
                            onClick: () => av.jt(),
                        }),
                    }),
                ],
            }),
        ],
    });
}
var a_ = a(890497),
    aS = a(769015),
    aN = a(311043),
    aA = a(569926),
    ak = a(282435);
function aD(e) {
    return ak.jN.get(e) ?? 0;
}
function aI(e) {
    let { gameId: t } = e,
        { data: a, isLoading: n } = (0, aA.I)(t),
        l = (0, d.bG)([aN.A], () => aN.A.hasNoData(t), [t]);
    return n || (null == a && !l)
        ? (0, r.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading\u2026" })
        : null == a
          ? (0, r.jsxs)(p.E, {
                variant: "text-sm/normal",
                color: "text-feedback-critical",
                children: ["No game found for ID ", t],
            })
          : (0, r.jsxs)(Q.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(aS.A, { game: a, size: aS.M.SMALL }),
                    (0, r.jsxs)(Q.B, {
                        gap: 0,
                        children: [
                            (0, r.jsx)(p.E, { variant: "text-md/semibold", children: a.name }),
                            (0, r.jsx)(p.E, { variant: "text-xxs/normal", color: "text-muted", children: a.id }),
                        ],
                    }),
                ],
            });
}
function aT() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(""),
        l = (0, d.bG)([t3.A], () => t3.A.games),
        s = o.useMemo(
            () =>
                l
                    .filter((e) => null != e.name && "" !== e.name)
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sort((e, t) => aD(t.value) - aD(e.value)),
            [l],
        ),
        i = o.useMemo(() => ({ baseSort: (e, t) => aD(t.item.value) - aD(e.item.value), keys: ["label"] }), []),
        c = o.useCallback((e) => {
            (t(e), null != e && n(""));
        }, []),
        u = o.useCallback((e) => {
            (n(e), e.trim().length > 0 && t(null));
        }, []),
        m = a.trim(),
        h = m.length > 0 ? m : (e ?? void 0),
        g = (0, t2.A)({ gameId: h, location: "DevToolsGameProfile", source: t1.GameProfileSources.DevTools });
    return (0, r.jsx)("div", {
        className: tZ.nd,
        children: (0, r.jsxs)(Q.B, {
            gap: 32,
            padding: 12,
            fullWidth: !1,
            children: [
                (0, r.jsxs)(Q.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(Z.D, { variant: "heading-md/bold", children: "Game Profile" }),
                        (0, r.jsx)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "Search for a game by name, or paste a game ID, then open its profile.",
                        }),
                    ],
                }),
                (0, r.jsxs)(Q.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(Z.D, { variant: "heading-sm/bold", children: "Search" }),
                        (0, r.jsx)(a_.Z, {
                            label: "Search games",
                            hideLabel: !0,
                            placeholder: "Search for a game\u2026",
                            options: s,
                            value: m.length > 0 ? void 0 : (e ?? void 0),
                            onSelectionChange: c,
                            selectionMode: "single",
                            clearable: !0,
                            matchSorterOptions: i,
                        }),
                    ],
                }),
                (0, r.jsxs)(Q.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(Z.D, { variant: "heading-sm/bold", children: "Game ID" }),
                        (0, r.jsx)(f.k, {
                            label: "Game ID",
                            hideLabel: !0,
                            placeholder: "Paste a game ID",
                            value: a,
                            onChange: u,
                        }),
                        m.length > 0 && (0, r.jsx)(aI, { gameId: m }),
                    ],
                }),
                (0, r.jsx)(x.$, {
                    variant: "primary",
                    text: "Open Game Profile",
                    fullWidth: !0,
                    disabled: null == g,
                    onClick: g ?? void 0,
                }),
            ],
        }),
    });
}
var aO = a(923477),
    aR = a(750672);
function aw() {
    let e = (0, aO.O)((e) => e.requestHighlightFirstCard);
    return (0, r.jsxs)("div", {
        className: Y()(tZ.nd, aR.k),
        children: [
            (0, r.jsx)(Z.D, { variant: "heading-lg/normal", children: "Game Server Hosting" }),
            (0, r.jsx)(p.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children:
                    'Replays the post-purchase scroll + highlight on the first card in the "Your game servers" list, exactly like clicking "View game server" after checkout. Open the Game Servers shop tab (/shop?tab=game-servers) with at least one owned server first.',
            }),
            (0, r.jsx)(x.$, { variant: "secondary", text: "Run post-purchase highlight (first card)", onClick: e }),
        ],
    });
}
var aM = a(554146),
    aL = a(594061),
    aP = a(617617),
    aU = a(355898),
    aG = a(644103),
    aB = a(574560),
    aF = a(434265);
let a$ = [
        aM.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
        aM.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
        aM.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
    ].map((e) => ({ id: String(e), label: aM.M[e], value: e })),
    aV = { "global-cooldown": "global cooldown", "per-game-cooldown": "per-game cooldown", disabled: "disabled" };
function aW() {
    let [e, t] = o.useState("dismissals"),
        [a, n] = o.useState(aM.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL),
        l = (0, d.bG)([aP.A], () => aP.A.settings.userContent?.recurringDismissibleContentStates[a] ?? null),
        s = (0, d.bG)([aB.A], () => aB.A.getAllGameUpsellDismissals(a)),
        i = o.useMemo(() => Object.keys(s ?? {}), [s]),
        c = (0, tQ.A)(i),
        [u, m] = o.useState(""),
        [h, g] = o.useState([]);
    o.useEffect(
        () =>
            (0, aG.Y)((e) => {
                g((t) => [e, ...t].slice(0, 100));
            }),
        [],
    );
    let v = o.useMemo(() => {
            let e = new Set();
            for (let t of h) for (let a of t.applicationIds) e.add(a);
            return [...e];
        }, [h]),
        y = (0, tQ.A)(v),
        E = o.useMemo(() => Object.fromEntries(v.map((e, t) => [e, y[t]])), [v, y]),
        C =
            l?.lastDismissedAtMs != null && "0" !== l.lastDismissedAtMs
                ? new Date(Number(l.lastDismissedAtMs)).toLocaleString()
                : "Never";
    return (0, r.jsxs)("div", {
        className: aF.nd,
        children: [
            (0, r.jsxs)("div", {
                className: aF.$H,
                children: [
                    (0, r.jsx)(q.D, {
                        className: Y()(aF.V3, { [aF.u7]: "dismissals" === e }),
                        onClick: () => t("dismissals"),
                        children: "Dismissals",
                    }),
                    (0, r.jsxs)(q.D, {
                        className: Y()(aF.V3, { [aF.u7]: "call-log" === e }),
                        onClick: () => t("call-log"),
                        children: ["Call Log ", h.length > 0 ? `(${h.length})` : ""],
                    }),
                ],
            }),
            "dismissals" === e
                ? (0, r.jsxs)("div", {
                      className: aF.Lj,
                      children: [
                          (0, r.jsx)("div", {
                              className: aF.uW,
                              children: (0, r.jsx)(j.l, {
                                  label: "Dismissible Content",
                                  value: a,
                                  onSelectionChange: (e) => n(e),
                                  options: a$,
                                  selectionMode: "single",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              className: aF.uW,
                              children: [
                                  (0, r.jsx)(Z.D, { variant: "heading-md/bold", children: "Global DCF State" }),
                                  (0, r.jsxs)(p.E, { variant: "text-sm/normal", children: ["Last dismissed: ", C] }),
                                  (0, r.jsxs)(p.E, {
                                      variant: "text-sm/normal",
                                      children: ["Times dismissed: ", l?.numTimesDismissed ?? 0],
                                  }),
                                  (0, r.jsx)(x.$, {
                                      variant: "secondary",
                                      text: "Reset Global DCF State",
                                      onClick: () => (0, aL._N)(a),
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: aF.uW,
                              children: [
                                  (0, r.jsx)(Z.D, { variant: "heading-md/bold", children: "Mark as Dismissed" }),
                                  (0, r.jsx)(f.k, {
                                      label: "Game ID",
                                      value: u,
                                      onChange: (e) => m(e),
                                      placeholder: "Enter Game ID",
                                  }),
                                  (0, r.jsx)(x.$, {
                                      variant: "secondary",
                                      text: "Mark as Dismissed",
                                      disabled: "" === u.trim(),
                                      onClick: () => {
                                          ((0, aU.M)([u.trim()], a), m(""));
                                      },
                                  }),
                              ],
                          }),
                          (0, r.jsx)(b.c, {}),
                          (0, r.jsxs)("div", {
                              className: Y()(aF.uW, aF.LY),
                              children: [
                                  (0, r.jsxs)(Z.D, {
                                      variant: "heading-md/bold",
                                      children: ["Per-Game Dismissals (", i.length, ")"],
                                  }),
                                  0 === i.length
                                      ? (0, r.jsx)(p.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: "No dismissal data for this content type.",
                                        })
                                      : (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                i.map((e, t) => {
                                                    let n = c[t],
                                                        l = s?.[e];
                                                    if (null == l) return null;
                                                    let i = n?.getIconURL(32);
                                                    return (0, r.jsxs)(
                                                        "div",
                                                        {
                                                            className: aF.Nr,
                                                            children: [
                                                                (0, r.jsxs)("div", {
                                                                    className: aF.MY,
                                                                    children: [
                                                                        null != i &&
                                                                            (0, r.jsx)("img", {
                                                                                src: i,
                                                                                alt: "",
                                                                                className: aF.Z2,
                                                                            }),
                                                                        (0, r.jsxs)("div", {
                                                                            className: aF.qi,
                                                                            children: [
                                                                                (0, r.jsx)(p.E, {
                                                                                    variant: "text-sm/semibold",
                                                                                    children: n?.name ?? "Unknown App",
                                                                                }),
                                                                                (0, r.jsx)(p.E, {
                                                                                    variant: "text-xs/normal",
                                                                                    color: "text-muted",
                                                                                    children: e,
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        (0, r.jsx)(x.$, {
                                                                            variant: "secondary",
                                                                            text: "Clear",
                                                                            onClick: () => (0, aU.e)(e, a),
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, r.jsxs)(p.E, {
                                                                    variant: "text-xs/normal",
                                                                    children: [
                                                                        "Last dismissed: ",
                                                                        new Date(l.dismissedAt).toLocaleString(),
                                                                    ],
                                                                }),
                                                                (0, r.jsxs)(p.E, {
                                                                    variant: "text-xs/normal",
                                                                    children: ["Times dismissed: ", l.timesDismissed],
                                                                }),
                                                            ],
                                                        },
                                                        e,
                                                    );
                                                }),
                                                (0, r.jsx)(x.$, {
                                                    variant: "critical-primary",
                                                    text: "Clear All",
                                                    onClick: () => {
                                                        for (let e of i) (0, aU.e)(e, a);
                                                    },
                                                }),
                                            ],
                                        }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: aF.Lj,
                      children: (0, r.jsxs)("div", {
                          className: aF.uW,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: aF.aq,
                                  children: [
                                      (0, r.jsxs)(Z.D, {
                                          variant: "heading-md/bold",
                                          children: ["Hook Calls (", h.length, ")"],
                                      }),
                                      (0, r.jsx)(x.$, { variant: "secondary", text: "Clear", onClick: () => g([]) }),
                                  ],
                              }),
                              0 === h.length
                                  ? (0, r.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "No calls recorded yet. Hook calls to useShouldShowGameUpsellForMultipleGames will appear here.",
                                    })
                                  : h.map((e, t) =>
                                        (0, r.jsxs)(
                                            "div",
                                            {
                                                className: aF.Nr,
                                                children: [
                                                    (0, r.jsxs)("div", {
                                                        className: aF.O9,
                                                        children: [
                                                            (0, r.jsx)(p.E, {
                                                                variant: "text-xs/semibold",
                                                                children: new Date(e.timestamp).toLocaleTimeString(),
                                                            }),
                                                            e.disabled &&
                                                                (0, r.jsx)("span", {
                                                                    className: aF.t7,
                                                                    children: "(disabled)",
                                                                }),
                                                            (0, r.jsx)(p.E, {
                                                                variant: "text-xs/normal",
                                                                color: "text-muted",
                                                                children: aM.M[e.dismissibleContent],
                                                            }),
                                                        ],
                                                    }),
                                                    0 === e.applicationIds.length
                                                        ? (0, r.jsx)(p.E, {
                                                              variant: "text-xs/normal",
                                                              color: "text-muted",
                                                              children: "No apps",
                                                          })
                                                        : e.applicationIds.map((t) => {
                                                              let a = E[t],
                                                                  n = a?.getIconURL(20),
                                                                  l = e.eligibleToShow.includes(t),
                                                                  s = e.excludedReasons[t];
                                                              return (0, r.jsxs)(
                                                                  "div",
                                                                  {
                                                                      className: aF.Ss,
                                                                      children: [
                                                                          null != n &&
                                                                              (0, r.jsx)("img", {
                                                                                  src: n,
                                                                                  alt: "",
                                                                                  className: aF.rb,
                                                                              }),
                                                                          (0, r.jsx)("span", {
                                                                              className: aF.Jd,
                                                                              children: a?.name ?? t,
                                                                          }),
                                                                          l
                                                                              ? (0, r.jsx)("span", {
                                                                                    className: aF.OK,
                                                                                    children: "eligible",
                                                                                })
                                                                              : null != s
                                                                                ? (0, r.jsx)("span", {
                                                                                      className: aF.t7,
                                                                                      children: aV[s],
                                                                                  })
                                                                                : null,
                                                                      ],
                                                                  },
                                                                  t,
                                                              );
                                                          }),
                                                ],
                                            },
                                            t,
                                        ),
                                    ),
                          ],
                      }),
                  }),
        ],
    });
}
var az = a(696986),
    aH = a(47167),
    aK = a(734057),
    aY = a(994500),
    aq = a(310031),
    aJ = a(394953),
    aQ = a(618216);
let aX = [
        {
            key: "channelName",
            cellClassName: Y()(aQ.Hn, aQ.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(p.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: Y()(aQ.Hn, aQ.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(p.E, { variant: "text-md/normal", children: t });
            },
        },
    ],
    aZ = [
        {
            key: "channelName",
            cellClassName: Y()(aQ.Hn, aQ.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(p.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "loadState",
            cellClassName: Y()(aQ.Hn, aQ.C7),
            render(e) {
                let { loadState: t } = e;
                return (0, r.jsx)(p.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: Y()(aQ.Hn, aQ.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(p.E, { variant: "text-md/normal", children: t });
            },
        },
    ];
function a0() {
    let { unreadRecentMentionsCount: e, unreadChannelIds: t } = (0, aJ.U4)(),
        {
            isLoading: a,
            hasLoadedEver: n,
            hasPreloaded: l,
            hasMoreToLoad: s,
            isLoadingComplete: i,
        } = (0, tD.cf)([aq.A], () => ({
            isLoading: aq.A.isLoading,
            hasLoadedEver: aq.A.hasLoadedEver,
            hasPreloaded: aq.A.hasPreloaded,
            hasMoreToLoad: aq.A.hasMoreToLoad,
            isLoadingComplete: aq.A.isLoadingComplete,
        })),
        o = (0, tD.bG)([aq.A], () => aq.A.currentRequestAnalyticsPayload),
        d = (0, tD.cf)([aq.A], () => aq.A.getChannelInfoMap()),
        c = (0, tD.cf)([aK.A], () => {
            let e = {};
            return (
                Object.entries(d).forEach((t) => {
                    let [a] = t,
                        n = aK.A.getChannel(a);
                    e[a] = n ?? null;
                }),
                e
            );
        }),
        u = (0, tD.cf)([aK.A], () =>
            t.reduce((e, t) => {
                let a = aK.A.getChannel(t);
                return ((e[t] = a ?? null), e);
            }, {}),
        ),
        h = (0, tD.bG)([aq.A], () => aq.A.getInboxMessages()),
        x = (0, tD.bG)([aq.A], () => aq.A.getDevOverrides().navOnClick);
    return (0, r.jsx)("div", {
        className: tZ.nd,
        children: (0, r.jsxs)(g.Ip, {
            className: aQ.Qs,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(Z.D, { variant: "heading-lg/semibold", children: "Inbox" }),
                        (0, r.jsxs)("div", { children: ["Inbox Message Count: ", h.length] }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(Z.D, { variant: "heading-lg/semibold", children: "Dev Overrides" }),
                        (0, r.jsx)("div", {
                            style: { display: "flex", alignItems: "center", marginTop: 8 },
                            children: (0, r.jsx)(m.d, {
                                label: "Nav On Click",
                                checked: !!x,
                                onChange: (e) => {
                                    tM.h.dispatch({ type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES", navOnClick: e });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(Z.D, { variant: "heading-lg/semibold", children: "Unreads and Badging" }),
                        (0, r.jsx)(az.h, { size: 8 }),
                        (0, r.jsxs)("div", { children: ["Unread Recent Mentions Count: ", e] }),
                        (0, r.jsxs)("div", { children: ["Unread Channel Count: ", t.length] }),
                        (0, r.jsx)(t0, {
                            columns: aX,
                            data: Object.entries(u).map((e) => {
                                let [t, a] = e;
                                return {
                                    key: t,
                                    channelId: t,
                                    channelName: null != a ? (0, aH.m1)(a, ec.default, aY.A) : "",
                                };
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(Z.D, { variant: "heading-lg/semibold", children: "Store State" }),
                        (0, r.jsxs)("div", { children: ["Is Loading: ", a ? "\u2705" : "\u274C"] }),
                        (0, r.jsxs)("div", { children: ["Has Preloaded: ", l ? "\u2705" : "\u274C"] }),
                        (0, r.jsxs)("div", { children: ["Has Loaded Ever: ", n ? "\u2705" : "\u274C"] }),
                        (0, r.jsxs)("div", { children: ["Has More To Load: ", s ? "\u2705" : "\u274C"] }),
                        (0, r.jsxs)("div", { children: ["Is Loading Complete: ", i ? "\u2705" : "\u274C"] }),
                        (0, r.jsxs)("div", { children: ["Last Loading Trigger: ", o?.loadingTrigger] }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(Z.D, { variant: "heading-lg/semibold", children: "Channel Info Map" }),
                        (0, r.jsxs)("div", { children: ["Total Channels: ", Object.keys(d).length] }),
                        (0, r.jsx)(t0, {
                            columns: aZ,
                            data: Object.entries(d).map((e) => {
                                let t,
                                    [a, n] = e;
                                return {
                                    key: a,
                                    channelId: a,
                                    channelName: null != (t = c[a]) ? (0, aH.m1)(t, ec.default, aY.A) : "",
                                    loadState: n.loadState,
                                };
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var a1 = a(976860),
    a2 = a(396813),
    a3 = a(786800);
let a6 = function () {
    return (0, r.jsxs)("div", {
        className: a3.k,
        children: [
            (0, r.jsx)(p.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                style: { marginBottom: "8px" },
                children: "Click the button below to clear your Minor Reward Capping History.",
            }),
            (0, r.jsx)(x.$, {
                onClick: () => {
                    ((0, a2.Ov)(), (0, a1.pX)(ex.BVt.QUEST_HOME));
                },
                text: "Clear History",
            }),
            (0, r.jsx)(p.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                children:
                    "Your may have to refresh your client after being redirected to the Quest Home in order to see these changes.",
            }),
        ],
    });
};
var a5 = a(271866),
    a8 = a(868511),
    a4 = a(147964),
    a9 = a(760716),
    a7 = a(115093),
    ne = a(970628);
let nt = window.GLOBAL_ENV.RELEASE_CHANNEL === a7.B.STAGING ? "1438571444891025408" : "1346069614634864772";
function na() {
    let e = (0, a9.i)((e) => e.overrideApplicationId),
        t = (0, a9.i)((e) => e.setOverrideApplicationId),
        a = null != e,
        n = (0, a9.i)((e) => e.overrideNitroEligibilityForSocialLayerStorefront),
        l = (0, a9.i)((e) => e.setOverrideNitroEligibilityForSocialLayerStorefront),
        s = (0, a9.i)((e) => e.isNitroEligibleForSocialLayerStorefront),
        i = (0, a9.i)((e) => e.setIsNitroEligibleForSocialLayerStorefront),
        [c, u] = o.useState(nt),
        [h, p] = o.useState(ex.FYj),
        g = o.useCallback(
            (e) => {
                e ? t(c) : t(null);
            },
            [c, t],
        ),
        v = o.useCallback(
            (e) => {
                (u(e), a && t(e));
            },
            [a, t],
        ),
        j = (0, a9.i)((e) => e.showSelfActivity),
        b = (0, a9.i)((e) => e.setShowSelfActivity),
        y = (0, a9.i)((e) => e.recommendationApplicationIds),
        E = (0, a9.i)((e) => e.setRecommendationApplicationIds),
        C = o.useCallback(
            (e) => {
                e ? E(h) : E(null);
            },
            [h, E],
        ),
        _ = (0, d.bG)([a4.A], () => null != a4.A.testModeApplicationId),
        S = o.useCallback((e) => {
            e ? (0, eJ.openModal)((e) => (0, r.jsx)(a8.A, { ...e })) : a5.cL();
        }, []),
        N = (0, t2.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: c,
            source: t1.GameProfileSources.Embed,
            trackEntryPointImpression: !0,
        }),
        A = o.useCallback(
            (e) => {
                N?.(e);
            },
            [N],
        ),
        k = o.useCallback(() => {
            (0, a1.pX)(ex.BVt.COLLECTIBLES_SHOP_GAME_SHOP(c));
        }, [c]);
    return (0, r.jsx)("div", {
        className: Y()(tZ.nd, ne.n),
        children: (0, r.jsxs)("div", {
            className: ne.k,
            children: [
                (0, r.jsx)(f.k, { label: "Application ID", value: c, onChange: v }),
                (0, r.jsx)(Z.D, { variant: "heading-lg/normal", children: "Activity Override" }),
                (0, r.jsx)(m.d, { label: "Override activity application ID", checked: a, onChange: g }),
                (0, r.jsx)(m.d, { label: "Show own voice activity (bypass self check)", checked: j, onChange: b }),
                (0, r.jsx)(m.d, { label: "Enable application test mode", checked: _, onChange: S }),
                (0, r.jsx)(x.$, { text: "Open Game Profile Modal", onClick: A }),
                (0, r.jsx)(x.$, { text: "Navigate to App Game Shop", onClick: k }),
                (0, r.jsx)(Z.D, { variant: "heading-lg/normal", children: "Wishlists" }),
                (0, r.jsx)(f.k, {
                    label: "Recommendation application IDs",
                    value: h,
                    onChange: p,
                    disabled: null == y,
                }),
                (0, r.jsx)(m.d, {
                    label: "Enable recommendation application IDs override",
                    checked: null != y,
                    onChange: C,
                }),
                (0, r.jsx)(m.d, {
                    label: "Override nitro eligibility for social layer storefront",
                    checked: n,
                    onChange: l,
                }),
                (0, r.jsx)(m.d, { label: "Is nitro eligible for social layer storefront", checked: s, onChange: i }),
            ],
        }),
    });
}
var nn = a(540999),
    nl = a(723702),
    ns = a(865116);
(a(79455), a(772958));
var ni = a(58736);
(a(558179), a(21574));
var nr = a(231545),
    no = a(761929),
    nd = a(180808);
function nc(e) {
    let { resizableNode: t, minHeight: a, onResize: n } = e,
        l = (0, no.A)({
            minDimension: a,
            resizableDomNodeRef: t,
            onElementResize: n,
            orientation: no.R.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, r.jsx)("div", { onPointerDown: l, className: nd.Di });
}
function nu(e) {
    let { children: t, className: a, initialHeight: n, minHeight: l } = e,
        s = o.useRef(null),
        [i, d] = o.useState(n);
    return (0, r.jsxs)("div", {
        ref: s,
        className: nd.kL,
        style: { minHeight: l, height: i },
        children: [
            (0, r.jsx)(nc, { resizableNode: s, minHeight: l, onResize: d }),
            (0, r.jsx)("div", { className: Y()(nd.KZ, a), children: t }),
        ],
    });
}
var nm = a(231643),
    nh = a(362688);
(a(140346), nh.fu.NONE, nh.fu.NONE);
var nx = a(825484),
    np = a(688810),
    ng = a(975460),
    nv = a(206828),
    nj = a(487431),
    nf = a(712440),
    nb = a(733110),
    ny = a(134861),
    nE = a(71393),
    nC = a(967198),
    n_ = a(942370),
    nS = a(375708),
    nN = a(211850),
    nA = a(681135);
function nk() {
    var e;
    let t,
        a,
        n = o.useRef(null),
        { analyticsLocations: l } = (0, np.Ay)(tI.A.DEV_TOOLS),
        [s, i] = o.useState(""),
        c = (0, d.bG)([nC.A], () => nC.A.getGuildId()),
        u = (0, d.bG)([nE.A], () => nE.A.getGuild(c)),
        m = u?.gameApplicationIds ?? [],
        h = (0, tQ.A)(m).filter((e) => null != e),
        g = (0, d.bG)([E.Ay, S.A], () => (0, C.A)(E.Ay, S.A)),
        v = (0, tQ.h)(s),
        j = (0, ng.g)(v),
        y = (0, d.yK)(
            [tJ.A],
            () => v?.linkedGames?.map((e) => tJ.A.getApplication(e.id)).filter((e) => null != e) ?? [],
        ),
        _ = (0, nv.RD)(v, { allowedFlows: [n_._.RPC], debug: !0 }),
        N = (0, nv.RD)(v, { allowedFlows: [n_._.WEB], debug: !0 }),
        A = (0, d.bG)([ny.A], () => null != j && ny.A.isConnected(j.id)),
        k = (0, nv.RD)(v, { debug: !0 }),
        { canDeauthorize: D, deauthorize: I } =
            ((e = k.connectionApp?.id),
            (t = (0, d.bG)([nb.default], () => nb.default.getNewestTokenForApplication(e))),
            (a = o.useCallback(() => {
                null != t && nf.A.delete(t.id);
            }, [t])),
            { canDeauthorize: null != t, deauthorize: a });
    return (0, r.jsxs)("div", {
        ref: n,
        className: Y()(tZ.nd, nA.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nA.kL,
                children: [
                    (0, r.jsx)(Z.D, { variant: "heading-lg/normal", children: "Application" }),
                    (0, r.jsx)(f.k, { label: "Application ID", value: s, onChange: i }),
                    null != g && null != g.id
                        ? (0, r.jsx)(x.$, {
                              onClick: () => i(g.id),
                              variant: "primary",
                              text: `Use detected game: ${g.name} (${g.id})`,
                          })
                        : null,
                    null != u
                        ? h.length > 0
                            ? (0, r.jsxs)("div", {
                                  className: nA.Mc,
                                  children: [
                                      (0, r.jsxs)(p.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-subtle",
                                          children: [u.name, " (", u.id, ") \xb7 Official games"],
                                      }),
                                      (0, r.jsx)(nx.e, {
                                          size: "sm",
                                          wrap: !0,
                                          children: h.map((e) =>
                                              (0, r.jsx)(
                                                  x.$,
                                                  {
                                                      onClick: () => i(e.id),
                                                      variant: s === e.id ? "primary" : "secondary",
                                                      text: `${e.name} (${e.id})`,
                                                  },
                                                  e.id,
                                              ),
                                          ),
                                      }),
                                  ],
                              })
                            : (0, r.jsxs)(p.E, {
                                  variant: "text-md/normal",
                                  color: "text-subtle",
                                  children: [u.name, " (", u.id, ") \xb7 No official games"],
                              })
                        : (0, r.jsx)(p.E, {
                              variant: "text-md/normal",
                              color: "text-subtle",
                              children: "No guild selected",
                          }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)("div", {
                        className: nA.J3,
                        children: [
                            (0, r.jsxs)(p.E, {
                                variant: "text-md/normal",
                                children: ["Application Name: ", null != v ? v.name : "N/A"],
                            }),
                            (0, r.jsxs)(p.E, {
                                variant: "text-md/normal",
                                children: [
                                    "Linked Games:",
                                    " ",
                                    y.length > 0
                                        ? y.map((e) => ((0, ng.t)(v)?.id === e.id ? `${e.name}*` : e.name)).join(", ")
                                        : "N/A",
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)("div", {
                className: nA.kL,
                children: [
                    (0, r.jsx)(Z.D, { variant: "heading-lg/normal", children: "Authorization status" }),
                    (0, r.jsx)(nj.VT, {
                        flow: n_._.RPC,
                        showGlobalFlowToggle: !0,
                        overallStatus: _.debug.isSubscribedToAuthorizeRequest
                            ? nj.nW.OVERALL_GOOD
                            : A
                              ? nj.nW.WARN
                              : nj.nW.OVERALL_BAD,
                        name: nS.intl.string(nN.default.AGLx00),
                        steps: [
                            {
                                status: A ? nj.nW.GOOD : nj.nW.BAD,
                                text: nS.intl.string(nN.default.kxF9br),
                                description: A ? null : nS.intl.string(nN.default.PFxxJa),
                                learnMoreLink: A
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: _.debug.isSubscribedToAuthorizeRequest
                                    ? nj.nW.GOOD
                                    : A
                                      ? nj.nW.WARN
                                      : nj.nW.BAD,
                                text: nS.intl.string(nN.default.S94dzs),
                                description:
                                    _.debug.isSubscribedToAuthorizeRequest || !A
                                        ? null
                                        : nS.intl.string(nN.default.aTULMB),
                                learnMoreLink:
                                    _.debug.isSubscribedToAuthorizeRequest || !A
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: k.chosenFlow === n_._.RPC,
                    }),
                    (0, r.jsx)(nj.VT, {
                        flow: n_._.WEB,
                        showGlobalFlowToggle: !0,
                        overallStatus: N.debug.hasConnectionEntrypointUrl ? nj.nW.OVERALL_GOOD : nj.nW.OVERALL_BAD,
                        name: nS.intl.string(nN.default.K3ObrU),
                        steps: [
                            {
                                status: N.debug.hasConnectionEntrypointUrl ? nj.nW.GOOD : nj.nW.BAD,
                                text: nS.intl.string(nN.default["8a7IrV"]),
                                description: N.debug.hasConnectionEntrypointUrl
                                    ? nS.intl.formatToPlainString(nN.default["9iLeL2"], {
                                          url: N.connectionApp?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: k.chosenFlow === n_._.WEB,
                    }),
                    (0, r.jsx)(nj.Sy, {
                        status: k.hasAlreadyLinked ? nj.nW.OVERALL_GOOD : nj.nW.OVERALL_BAD,
                        text: nS.intl.string(nS.t["Vu/zmQ"]),
                    }),
                    0 === k.debug.validFlows.length &&
                        (0, r.jsx)(p.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: nS.intl.string(nN.default.eg0mNa),
                        }),
                    (0, r.jsx)(x.$, {
                        disabled: !k.canStartAuthorization,
                        fullWidth: !0,
                        onClick: () => k.startAuthorization({ analyticsLocations: l }),
                        variant: "primary",
                        text: "Start Authorization",
                    }),
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children:
                            "This will start whichever authorization flow is available. RPC authorization takes precedence over web.",
                    }),
                    (0, r.jsxs)(nx.e, {
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(x.$, {
                                disabled: !_.canStartAuthorization,
                                onClick: () => _.startAuthorization({ analyticsLocations: l }),
                                variant: "secondary",
                                text: "Start In-App Authorization",
                            }),
                            (0, r.jsx)(x.$, {
                                disabled: !N.canStartAuthorization,
                                onClick: () => N.startAuthorization({ analyticsLocations: l }),
                                variant: "secondary",
                                text: "Start Web Authorization",
                            }),
                        ],
                    }),
                    (0, r.jsx)(x.$, {
                        disabled: !D,
                        fullWidth: !0,
                        onClick: I,
                        variant: "critical-primary",
                        text: "Deauthorize",
                    }),
                ],
            }),
            v?.applicationAccountLinkBenefitConfig != null &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(b.c, {}),
                        (0, r.jsxs)("div", {
                            className: nA.kL,
                            children: [
                                (0, r.jsx)(Z.D, { variant: "heading-lg/normal", children: "Benefit configuration" }),
                                (0, r.jsx)("div", {
                                    className: nA.Nr,
                                    children: (0, r.jsxs)("div", {
                                        className: nA.Tc,
                                        children: [
                                            null != v.applicationAccountLinkBenefitConfig.reward_image &&
                                                (0, r.jsx)("img", {
                                                    src: v.applicationAccountLinkBenefitConfig.reward_image,
                                                    alt: "Reward",
                                                    className: nA.L8,
                                                }),
                                            (0, r.jsx)(p.E, {
                                                variant: "text-md/semibold",
                                                children:
                                                    v.applicationAccountLinkBenefitConfig.reward_name ??
                                                    "Unnamed Reward",
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var nD = a(427358),
    nI = a(541660);
function nT(e) {
    let { title: t, sortKey: a, activeSortKey: n, sortDir: l, onClick: s } = e,
        i = n === a ? ("desc" === l ? " \u25BC" : " \u25B2") : "";
    return (0, r.jsx)(q.D, {
        className: nI.K8,
        onClick: () => s(a),
        children: (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: t + i }),
    });
}
function nO() {
    let [e, t] = o.useState("affinity"),
        [a, n] = o.useState("desc"),
        l = o.useCallback(
            (a) => {
                e === a ? n((e) => ("asc" === e ? "desc" : "asc")) : (t(a), n("username" === a ? "asc" : "desc"));
            },
            [e],
        ),
        s = (0, d.yK)([nD.A, ec.default], () =>
            nD.A.getUserAffinities().map((e) => {
                let { otherUserId: t, communicationProbability: a, vcProbability: n, isFriend: l } = e;
                return { user: ec.default.getUser(t), affinity: a, vcProbability: n, isFriend: l, key: t };
            }),
        ),
        i = o.useMemo(
            () =>
                [...s].sort((t, n) => {
                    let l;
                    if ("username" === e) {
                        let e = t.user?.username ?? t.key,
                            a = n.user?.username ?? n.key;
                        l = e.localeCompare(a);
                    } else l = t[e] - n[e];
                    return "desc" === a ? -l : l;
                }),
            [s, e, a],
        ),
        c = o.useMemo(
            () => [
                {
                    key: "user",
                    cellClassName: nI.iL,
                    renderHeader: () =>
                        (0, r.jsx)(nT, {
                            title: "USER",
                            sortKey: "username",
                            activeSortKey: e,
                            sortDir: a,
                            onClick: l,
                        }),
                    render(e) {
                        let { user: t, key: a } = e;
                        return t?.username ?? a;
                    },
                },
                {
                    key: "affinity",
                    renderHeader: () =>
                        (0, r.jsx)(nT, {
                            title: "COMMUNICATION AFFINITY",
                            sortKey: "affinity",
                            activeSortKey: e,
                            sortDir: a,
                            onClick: l,
                        }),
                    cellClassName: nI.nz,
                    render(e) {
                        let { affinity: t } = e;
                        return t.toFixed(5);
                    },
                },
                {
                    key: "vcProbability",
                    renderHeader: () =>
                        (0, r.jsx)(nT, {
                            title: "VOICE AFFINITY",
                            sortKey: "vcProbability",
                            activeSortKey: e,
                            sortDir: a,
                            onClick: l,
                        }),
                    cellClassName: nI.nz,
                    render(e) {
                        let { vcProbability: t } = e;
                        return t.toFixed(5);
                    },
                },
                {
                    key: "isFriend",
                    renderHeader: () => (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "IS FRIEND" }),
                    cellClassName: nI.nz,
                    render(e) {
                        let { isFriend: t } = e;
                        return t.toString();
                    },
                },
            ],
            [e, a, l],
        );
    return 0 === s.length ? null : (0, r.jsx)(t0, { className: tZ.nd, columns: c, rowClassName: nI.nM, data: i });
}
var nR = a(379257),
    nw = a(306537),
    nM = a(486866);
function nL() {
    return (0, r.jsx)("div", {
        className: Y()(tZ.nd, nM.k),
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(Z.D, { variant: "heading-lg/semibold", children: "Quick Actions" }),
                (0, r.jsx)(b.c, { gap: 16 }),
                (0, r.jsxs)("div", {
                    className: nM.h,
                    children: [
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Launch Age Verification Test Tool",
                            onClick: () =>
                                void (0, eJ.openModalLazy)(
                                    async () => {
                                        let { default: e } = await a.e("629079").then(a.bind(a, 357578));
                                        return (t) => (0, r.jsx)(e, { ...t });
                                    },
                                    { onCloseCallback: void 0 },
                                ),
                            fullWidth: !0,
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Launch Age Verification Modal",
                            onClick: () =>
                                nR.A.showAgeVerificationGetStartedModal({ entryPoint: nw.q1.DEV_TOOLS_QUICK_ACTIONS }),
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var nP = a(536637),
    nU = a.n(nP),
    nG = a(862482),
    nB = a(624479),
    nF = a(555704),
    n$ = a(285796),
    nV = a(241326),
    nW = a(683438),
    nz = a(297413),
    nH = a(379078),
    nK = a(704554),
    nY = a(957565),
    nq = a(58703),
    nJ = a(80703),
    nQ = a(280450);
let nX = 0,
    nZ = [],
    n0 = 0,
    n1 = [],
    n2 = !1;
class n3 extends d.Ay.Store {
    static displayName = "AnalyticsLogStore";
    initialize() {
        this.waitFor(nQ.default, nn.A);
    }
    get loggedEvents() {
        return nZ;
    }
    get loggedEventsVersion() {
        return n0;
    }
    get loggedTriggers() {
        return n1;
    }
    get trackTriggers() {
        return n2;
    }
}
let n6 = new n3(tM.h, {
    TRACK: function (e) {
        let { event: t, properties: a, fingerprint: n } = e;
        nn.A.isDeveloper &&
            (nZ.push({
                key: (nX++).toString(),
                event: t,
                properties: a,
                fingerprint: null != n ? (0, nJ.d)(n) : nQ.default.getId(),
                timestamp: new Date(),
            }),
            n0++,
            nZ.length > 500 && (nZ = nZ.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: a, exposureType: n, excluded: l, location: s, previouslyTracked: i } = e;
        !nn.A.isDeveloper ||
            (n2 &&
                (n1 = [
                    ...n1,
                    {
                        key: (0, eL.A)(),
                        experimentId: t,
                        descriptor: a,
                        exposureType: n,
                        excluded: l,
                        location: s,
                        previouslyTracked: i,
                        timestamp: new Date(),
                    },
                ]).length > 500 &&
                n1.shift());
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        n2 = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        ((nZ = []), n0++, (n1 = []));
    },
});
var n5 = a(658675);
function n8(e) {
    let { className: t, children: a } = e;
    return (0, r.jsx)("dl", { className: Y()(tZ.qo, t), children: a });
}
function n4(e) {
    let { name: t, children: a, copyValue: n } = e,
        [l, s] = o.useState(!1);
    return (
        o.useEffect(() => {
            if (l) {
                let e = setTimeout(() => s(!1), 1e3);
                return () => clearTimeout(e);
            }
        }, [l]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("dt", { className: tZ.Bz, children: t }),
                (0, r.jsxs)("dd", {
                    className: tZ.Nw,
                    children: [
                        a,
                        null != n
                            ? (0, r.jsx)(q.D, {
                                  tag: "span",
                                  className: tZ.nH,
                                  onClick: () => (0, nY.C)(n, () => s(!0)),
                                  children: l
                                      ? (0, r.jsx)(tm.U, { color: "currentColor", size: "sm" })
                                      : (0, r.jsx)(nB.CopyIcon, { color: "currentColor", size: "sm" }),
                              })
                            : null,
                    ],
                }),
            ],
        })
    );
}
function n9(e) {
    let { value: t } = e;
    return (0, r.jsx)(n5.P, { checked: t });
}
var n7 = a(412966);
let le = [
    {
        key: "Event",
        cellClassName: n7.Hz,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "Location",
        cellClassName: n7.QN,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function lt(e) {
    let { children: t } = e;
    return (0, r.jsx)(g.Ip, { orientation: "auto", className: n7._D, children: (0, r.jsx)("dl", { children: t }) });
}
function la(e) {
    let { name: t, children: a, copyValue: n } = e,
        [l, s] = o.useState(!1);
    return (
        o.useEffect(() => {
            if (l) {
                let e = setTimeout(() => s(!1), 1e3);
                return () => clearTimeout(e);
            }
        }, [l]),
        (0, r.jsxs)("div", {
            className: n7.fY,
            children: [
                (0, r.jsx)("dt", { className: n7.m2, children: t }),
                (0, r.jsx)("dd", { children: a }),
                (0, r.jsx)(q.D, {
                    tag: "span",
                    className: n7.nH,
                    onClick: () => (0, nY.C)(JSON.stringify(n), () => s(!0)),
                    children: l
                        ? (0, r.jsx)(tm.U, { color: "currentColor", size: "sm" })
                        : (0, r.jsx)(nB.CopyIcon, { color: "currentColor", size: "sm" }),
                }),
            ],
        })
    );
}
let ln = new Set(["client_performance_cpu", "client_performance_memory"]),
    ll = [
        {
            id: "details",
            name: "Details",
            group: nh.fu.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: a, timestamp: n, fingerprint: l },
                        onClose: s,
                        filteredEvents: i,
                    } = e,
                    o = ec.default.getUser(l),
                    d = nU()(n);
                return (0, r.jsxs)("div", {
                    className: n7.sw,
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, r.jsxs)(ni.Ay, {
                            className: Y()(tZ.jr, n7.nZ),
                            children: [
                                (0, r.jsx)(ni.Ay.Icon, { icon: nF.U, tooltip: t }),
                                (0, r.jsxs)(ni.Ay.Title, {
                                    wrapperClassName: n7.qd,
                                    children: [
                                        t,
                                        (0, r.jsx)(q.D, {
                                            tag: "span",
                                            className: n7.KE,
                                            onClick: () => (0, nY.C)(t),
                                            children: (0, r.jsx)(nB.CopyIcon, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(ni.Ay.Icon, {
                                    icon: nB.CopyIcon,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, nY.C)(
                                            JSON.stringify(
                                                { event: t, timestamp: n, fingerprint: l, user: o?.id, ...a },
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, r.jsx)(ni.Ay.Icon, { icon: n$.a, tooltip: "Close", onClick: s }),
                            ],
                        }),
                        (0, r.jsxs)(n8, {
                            className: n7.ZK,
                            children: [
                                (0, r.jsx)(n4, {
                                    name: "Timestamp (local)",
                                    copyValue: n.toISOString(),
                                    children: (0, r.jsxs)("time", {
                                        dateTime: n.toISOString(),
                                        title: (0, nq.i$)(d, "LLLL"),
                                        children: ["(", nU().locale(), ") ", (0, nq.mk)(d)],
                                    }),
                                }),
                                null != o &&
                                    (0, r.jsx)(n4, {
                                        name: "User",
                                        copyValue: o.id,
                                        children: (0, r.jsx)(nz.A, { user: o }),
                                    }),
                                (0, r.jsx)(n4, {
                                    name: "Fingerprint",
                                    copyValue: l,
                                    children: (0, r.jsx)("code", { children: l }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(lt, {
                            children: Object.entries(a).map((e) => {
                                let [a, n] = e,
                                    l = ln.has(a)
                                        ? (function (e, t, a) {
                                              let n = e.filter((e) => e.event === t);
                                              if (0 === n.length) return { average: null, count: 0 };
                                              let l = null,
                                                  s = 0;
                                              for (let e of n) {
                                                  let t = e.properties[a];
                                                  "number" == typeof t && ((s += 1), null == l ? (l = t) : (l += t));
                                              }
                                              return { average: null !== l ? l / n.length : null, count: s };
                                          })(i, t, a)
                                        : null;
                                return (0, r.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, r.jsx)(
                                                la,
                                                {
                                                    name: `${a}:`,
                                                    copyValue: { [a]: n || null },
                                                    children:
                                                        null != n
                                                            ? (0, r.jsx)("code", { children: JSON.stringify(n) })
                                                            : (0, r.jsx)("code", {
                                                                  className: n7.HO,
                                                                  children: "null",
                                                              }),
                                                },
                                                a,
                                            ),
                                            null !== l &&
                                                null !== l.average &&
                                                (0, r.jsx)(
                                                    la,
                                                    {
                                                        name: `${a}_avg:`,
                                                        copyValue: { [a]: n || null },
                                                        children: (0, r.jsxs)("code", {
                                                            children: [l.average.toFixed(3), " (", l.count, ")"],
                                                        }),
                                                    },
                                                    `${a}_avg`,
                                                ),
                                        ],
                                    },
                                    `${a}_container`,
                                );
                            }),
                        }),
                    ],
                });
            },
        },
    ],
    ls = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(ls)
                    .filter((e) => {
                        let [t] = e;
                        return "events" !== t;
                    })
                    .map((t) => {
                        let [a, { filter: n }] = t;
                        return !n(e);
                    })
                    .every((e) => e),
        },
        experiments: {
            label: "Experiments",
            filter: (e) => ["experiment_user_triggered", "experiment_guild_triggered"].includes(e.event),
        },
        impressions: { label: "Impressions", filter: (e) => e.event.startsWith("impression_") },
        networkActions: { label: "Network", filter: (e) => e.event.startsWith("network_action") },
    },
    li = {
        searchType: nH.n.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: a } = e;
            return null != a.location ? [t, a.location] : t;
        },
        throttleMs: 100,
    };
function lr() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (0, d.bG)([n6], () => n6.loggedEventsVersion),
        [l, s] = o.useState(() => Object.keys(ls)),
        [i, c] = o.useState(n6.loggedEvents),
        u = o.useCallback((e) => {
            c(e);
        }, []);
    (0, nK.RT)(t, n6.loggedEvents, u, li, [n]);
    let m = i.filter((e) => {
            for (let t of l) if (ls[t].filter(e)) return !0;
            return !1;
        }),
        [h, x] = o.useState(void 0),
        p = m.find((e) => e.key === h),
        { TabBar: g, renderSelectedTab: v } = (0, nm.A)({ tabs: ll }, []);
    return (0, r.jsxs)("div", {
        ref: e,
        className: Y()(tZ.nd, n7.nd),
        children: [
            (0, r.jsxs)("div", {
                className: n7.rh,
                children: [
                    (0, r.jsx)(nG.$n, {
                        className: n7.Q$,
                        look: nG.$n.Looks.BLANK,
                        size: nG.$n.Sizes.ICON,
                        onClick: ee.eY,
                        children: (0, r.jsx)("span", {
                            title: nS.intl.string(nS.t.VkKicb),
                            children: (0, r.jsx)(nV.TrashIcon, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": nS.intl.string(nS.t.VkKicb),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", { className: n7.Bi }),
                    (0, r.jsx)("div", {
                        className: n7.uW,
                        children: Object.entries(ls).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                q.D,
                                {
                                    className: Y()(n7.pb, l.includes(t) && n7.bx),
                                    onClick: () => {
                                        s((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: a.label,
                                },
                                t,
                            );
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: n7.rh,
                children: (0, r.jsx)(nW.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, r.jsx)(t0, { columns: le, data: m, selectedRowKey: h, onClickRow: (e) => x(e.key) }),
            null != p &&
                (0, r.jsxs)(nu, {
                    className: n7.rf,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(g, {}), v({ loggedEvent: p, onClose: () => x(void 0), filteredEvents: m })],
                }),
        ],
    });
}
var lo = a(382483),
    ld = a(385113),
    lc = a(317672);
function lu(e) {
    let { config: t } = e,
        a = Object.entries(t.surfaces ?? {});
    return (0, r.jsxs)(Q.B, {
        gap: 8,
        padding: 8,
        className: lc.lt,
        children: [
            (0, r.jsx)(p.E, { variant: "text-sm/semibold", color: "text-strong", children: t.display_name }),
            (0, r.jsxs)(p.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["Config ID: ", t.config_id],
            }),
            (0, r.jsxs)(p.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["App ID: ", t.application_id],
            }),
            (0, r.jsxs)(p.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", t.status] }),
            null != t.updated_at &&
                (0, r.jsxs)(p.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: ["Updated: ", t.updated_at],
                }),
            null != t.published_at &&
                (0, r.jsxs)(p.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: ["Published: ", t.published_at],
                }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(p.E, {
                variant: "text-xs/semibold",
                color: "text-strong",
                children: ["Surfaces (", a.length, ")"],
            }),
            0 === a.length
                ? (0, r.jsx)(p.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: "No surfaces configured",
                  })
                : a.map((e) => {
                      let [t, a] = e;
                      return (0, r.jsxs)(
                          Q.B,
                          {
                              gap: 4,
                              padding: 4,
                              className: lc.YL,
                              children: [
                                  (0, r.jsx)(p.E, { variant: "text-xs/semibold", color: "text-default", children: t }),
                                  (0, r.jsxs)(p.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: ["Layout: ", a.layout],
                                  }),
                              ],
                          },
                          t,
                      );
                  }),
        ],
    });
}
function lm(e) {
    let { config: t, isSelected: a, onSelect: n } = e;
    return (0, r.jsxs)(Q.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: a ? lc.FM : lc.gt,
        children: [
            (0, r.jsx)(q.D, {
                className: lc.Av,
                onClick: n,
                children: (0, r.jsxs)(Q.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(p.E, { variant: "text-sm/medium", color: "text-strong", children: t.display_name }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.config_id, " \xb7 ", t.application_id],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(x.$, {
                variant: "secondary",
                size: "sm",
                text: "Refetch",
                onClick: () => (0, lo.un)(t.application_id, { force: !0 }),
            }),
        ],
    });
}
function lh() {
    let e = (0, d.bG)([ld.A], () => ld.A.getFeaturedFetchState());
    return (0, r.jsxs)(Q.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(Q.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(p.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Featured Configs",
                    }),
                    (0, r.jsxs)(p.E, { variant: "text-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, r.jsx)(x.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, lo.Wq)({ force: !0 }),
            }),
        ],
    });
}
function lx() {
    let e = (0, d.bG)([ld.A], () => ld.A.getDeveloperFetchState());
    return (0, r.jsxs)(Q.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(Q.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(p.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Developer Configs",
                    }),
                    (0, r.jsxs)(p.E, { variant: "text-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, r.jsx)(x.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, lo.i$)({ force: !0 }),
            }),
        ],
    });
}
function lp() {
    let [e, t] = o.useState(""),
        a = (0, d.bG)([ld.A], () => (e.length > 0 ? ld.A.getFetchState(e) : null)),
        n = (0, d.bG)([ld.A], () => (e.length > 0 ? ld.A.getConfigs(e) : null));
    return (0, r.jsxs)(Q.B, {
        gap: 8,
        children: [
            (0, r.jsx)(p.E, { variant: "text-md/semibold", color: "text-strong", children: "Fetch by Application ID" }),
            (0, r.jsx)(f.k, { placeholder: "Application ID", value: e, onChange: (e) => t(e) }),
            (0, r.jsx)(x.$, {
                variant: "primary",
                size: "sm",
                text: "Fetch",
                disabled: 0 === e.length,
                onClick: () => (0, lo.un)(e, { force: !0 }),
            }),
            null != a &&
                (0, r.jsxs)(p.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", a] }),
            null != n &&
                n.length > 0 &&
                (0, r.jsx)(Q.B, { gap: 4, children: n.map((e) => (0, r.jsx)(lu, { config: e }, e.config_id)) }),
        ],
    });
}
function lg(e) {
    let { configs: t, selectedConfigId: a, onSelectConfig: n } = e,
        l = (0, d.bG)([ld.A], () => ld.A.getFeaturedFetchState());
    return (0, r.jsxs)(Q.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(p.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: ["All Loaded Configs (", t.length, ")"],
            }),
            l === ld.e.FETCHING &&
                (0, r.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading..." }),
            t.map((e) =>
                (0, r.jsx)(
                    lm,
                    {
                        config: e,
                        isSelected: a === e.config_id,
                        onSelect: () => n(a === e.config_id ? null : e.config_id),
                    },
                    e.config_id,
                ),
            ),
        ],
    });
}
function lv(e) {
    let { config: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(Q.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(p.E, { variant: "text-md/semibold", color: "text-strong", children: "Config Details" }),
                    (0, r.jsx)(lu, { config: t }),
                ],
            }),
        ],
    });
}
function lj() {
    let [e, t] = o.useState(null),
        a = Object.values((0, d.bG)([ld.A], () => ld.A.getAllConfigsByApplication())).flat(),
        n = null != e ? a.find((t) => t.config_id === e) : null;
    return (0, r.jsx)(g.Ar, {
        children: (0, r.jsxs)(Q.B, {
            gap: 16,
            padding: 8,
            className: lc.zr,
            children: [
                (0, r.jsx)(Z.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: "Application Widget Configs",
                }),
                (0, r.jsx)(x.$, {
                    size: "sm",
                    variant: "critical-secondary",
                    text: "Reset store",
                    onClick: () => tM.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEBUG_RESET" }),
                }),
                (0, r.jsx)(lh, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(lx, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(lp, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(lg, { configs: a, selectedConfigId: e, onSelectConfig: t }),
                null != n && (0, r.jsx)(lv, { config: n }),
            ],
        }),
    });
}
var lf = a(513520),
    lb = a(130100),
    ly = a(468747);
let lE = [
    {
        key: "Channel",
        cellClassName: ly._w,
        render(e) {
            let { channelName: t } = e;
            return t;
        },
    },
    {
        key: "score",
        renderHeader: () => (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "SCORE" }),
        cellClassName: ly.t6,
        render(e) {
            let { score: t } = e;
            return t.toFixed(5);
        },
    },
];
function lC() {
    o.useEffect(() => {
        (0, lf.I)();
    }, []);
    let e = (0, d.yK)([lb.A, aK.A], () =>
        lb.A.getChannelAffinities()
            .map((e) => {
                let { channelId: t, score: a } = e;
                return { key: t, channelName: aK.A.getChannel(t)?.name ?? t, score: a };
            })
            .sort((e, t) => t.score - e.score),
    );
    return 0 === e.length ? null : (0, r.jsx)(t0, { className: tZ.nd, columns: lE, rowClassName: ly.nM, data: e });
}
function l_() {
    return (0, r.jsxs)(p.E, {
        variant: "text-lg/normal",
        children: [
            "Under Construction",
            " ",
            (0, r.jsx)("span", { role: "img", "aria-label": "Construction", children: "\uD83D\uDEA7" }),
        ],
    });
}
var lS = a(105565),
    lN = a(355903),
    lA = a(333714);
function lk(e) {
    switch (e) {
        case lS.r.DC_DISMISSED:
            return "DISMISS:";
        case lS.r.DC_SHOWN:
            return "SHOW:";
        case lS.r.DC_SHOW_REQUEST:
            return "REQUEST TO SHOW:";
        default:
            return "UNKNOWN TYPE:";
    }
}
let lD = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: a } = e;
                return `${t} ${aM.M[a]}`;
            },
        },
    ],
    lI = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return `${aM.M[t]}`;
            },
        },
    ];
function lT() {
    let e = (0, d.bG)([lS.A], () => lS.A.getDCFEvents()),
        t = (0, lN.Ay)((e) => e.candidates),
        a = (0, lN.Ay)((e) => e.lastWinnerTime),
        n = 0 !== a ? nU()(a).fromNow() : "n/a",
        l = (0, lN.Ay)((e) => (0 === e.lastWinnerTime ? null : e.recentlyShown[0])),
        s = e.map((e) => {
            let { eventType: t, dismissibleContent: a } = e;
            return { key: lk(t) + a.toString(), event: lk(t), dismissibleContent: a };
        }),
        i = Array.from(t.keys()).map((e) => ({ key: e.toString(), dismissibleContent: e }));
    return (0, r.jsxs)("div", {
        className: lA.KE,
        children: [
            (0, r.jsxs)("div", { className: lA.pq, children: ["Last winner time: ", n] }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("div", { className: lA.pq, children: ["Last winner: ", null != l ? aM.M[l] : "None"] }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("div", {
                className: lA.uI,
                children: (0, r.jsx)(t0, { className: lA.Th, columns: lI, data: i }),
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)(t0, { columns: lD, data: s }),
        ],
    });
}
var lO = a(689175),
    lR = a(541689),
    lw = a(199773);
function lM() {
    let e = (0, o.useCallback)((e) => {
        let t = new Set(lL());
        t.delete(e);
        let a = Array.from(t).slice(0, 4);
        (a.unshift(e), tq.w.set("RecentDismissibleOverrides", a));
    }, []);
    return [lL(), e];
}
function lL() {
    return tq.w.get("RecentDismissibleOverrides") ?? [];
}
a(667532);
var lP = a(662546),
    lU = a(643278),
    lG = a(256787),
    lB = a(20439);
let lF = o.memo(function (e) {
    let { className: t, content: a, onChange: n } = e,
        l = aM.M[a],
        { isDismissed: s, handleToggleDismissState: i } = (0, lB.A)(l),
        [d, c] = o.useState(!1),
        u = o.useCallback(() => {
            (n?.(a), i());
        }, [n, i, a]),
        h = o.useCallback(
            (e) => {
                (e.preventDefault(), c(!0), navigator.clipboard.writeText(a.toLowerCase()));
            },
            [a],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(Q.B, {
                className: t,
                direction: "horizontal",
                align: "center",
                children: [
                    (0, r.jsx)(eK.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: d ? lP.O : lU.ClipboardListIcon,
                        onClick: h,
                        "aria-label": d ? "Copied" : "Copy",
                    }),
                    (0, r.jsx)(m.d, {
                        label: `${a.toLowerCase()} (${aM.M[a]})`,
                        description: (0, lG.Zm)(l)
                            ? (function (e) {
                                  let t = aP.A.settings.userContent?.recurringDismissibleContentStates?.[e];
                                  if (null == t) return null;
                                  let a = [],
                                      { lastDismissedVersion: n, lastDismissedAtMs: l, lastDismissedObjectId: s } = t;
                                  if (
                                      (void 0 !== n && 0 !== n && a.push(`last_dismissed_version: ${n}`), void 0 !== l)
                                  ) {
                                      let e = Number(l),
                                          t = Number.isNaN(e) ? "n/a" : new Date(e).toLocaleString();
                                      a.push(`last_dismissed_at: ${t}`);
                                  }
                                  return (void 0 !== s && "0" !== s && a.push(`last_dismissed_object_id: ${s}`),
                                  0 === a.length)
                                      ? null
                                      : a.join(", ");
                              })(l)
                            : null,
                        checked: s,
                        onChange: u,
                    }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
        ],
    });
});
function l$(e) {
    let { items: t, onChange: a } = e,
        [n, l] = lM(),
        s = (0, o.useCallback)(
            (e) => {
                (l(e), a?.(e));
            },
            [l, a],
        );
    return (0, r.jsx)(Q.B, {
        gap: 16,
        children: t.filter((e) => isNaN(Number(e))).map((e) => (0, r.jsx)(lF, { content: e, onChange: s }, e)),
    });
}
function lV(e) {
    let { searchQuery: t = "" } = e,
        a = (0, lN.Ay)((e) => e.recentlyShown),
        [n, l] = lM(),
        s = n
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .filter((e) => !a.includes(aM.M[e]))
            .slice(0, 3);
    return 0 === s.length
        ? null
        : (0, r.jsx)(u.n, { label: "Recent Overrides", children: (0, r.jsx)(l$, { items: s }) });
}
function lW(e) {
    let { searchQuery: t = "" } = e,
        a = (0, lN.Ay)((e) => e.recentlyShown)
            .map((e) => aM.M[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .slice(0, 3);
    return 0 === a.length ? null : (0, r.jsx)(u.n, { label: "Recently Shown", children: (0, r.jsx)(l$, { items: a }) });
}
var lz = a(607734);
function lH() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: a,
        } = (0, d.cf)([lw.A], () => ({
            dailyCapReached: lw.A.hasUserHitDCCap(),
            dailyCapOverridden: lw.A.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: lw.A.newUserMinAgeRequiredOverridden,
        })),
        [n, l] = o.useState(""),
        [s, i] = o.useState(20),
        c = o.useMemo(
            () =>
                Object.keys(aM.M)
                    .filter((e) => e.toLowerCase().includes(n.toLowerCase()))
                    .reverse(),
            [n],
        ),
        h = o.useCallback(
            (e) => {
                let t = e.currentTarget;
                t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && s < c.length && i((e) => e + 100);
            },
            [s, c.length],
        );
    return (0, r.jsx)(lO.Ch, {
        onScroll: h,
        children: (0, r.jsxs)("div", {
            className: lz.KE,
            children: [
                (0, r.jsxs)(u.n, {
                    label: "Dismissible Content Overrides",
                    children: [
                        (0, r.jsxs)(Q.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Reset Daily Cap",
                                    onClick: () => (0, lR.Ab)(),
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Undismiss All DCs",
                                    onClick: () => (0, aL.nT)(),
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Dismiss All DCs",
                                    onClick: () => (0, aL.D1)(),
                                }),
                                (0, r.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: `Daily Cap Reached: ${e ? "Yes" : "No"}`,
                                }),
                            ],
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Override Dismissible Content Daily Cap",
                            checked: t,
                            onChange: lR.SE,
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: a,
                            onChange: lR.U$,
                        }),
                    ],
                }),
                (0, r.jsx)(lW, {}),
                (0, r.jsx)(lV, {}),
                (0, r.jsxs)(u.n, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, r.jsx)(nW.I, { query: n, onChange: l, onClear: () => l("") }),
                        (0, r.jsx)(l$, { items: c.slice(0, s) }),
                    ],
                }),
            ],
        }),
    });
}
var lK = a(276086),
    lY = a(154323),
    lq = a(504565);
function lJ() {
    let e = (0, d.bG)([lY.A], () => lY.A.allWithDescriptions(), [], d.My),
        t = o.useMemo(
            () =>
                e.map((e) => {
                    let [t, a, n] = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                m.d,
                                { label: n, description: t, checked: a, onChange: (e) => (0, lK.L)(t, e) },
                                t,
                            ),
                            (0, r.jsx)(b.c, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, r.jsxs)("div", {
        className: lq.kL,
        children: [
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: lq.x6,
                children: (0, r.jsx)(x.$, { variant: "primary", text: "Clear all", onClick: lK.$, fullWidth: !0 }),
            }),
            (0, r.jsx)("div", { className: lq.vu, children: t }),
        ],
    });
}
var lQ = a(106839);
function lX() {
    let e = (0, d.bG)([t3.A], () => t3.A.detectableGamesEtag),
        t = (0, d.bG)([t3.A], () => t3.A.lastFetched),
        a = (0, d.bG)([t3.A], () => t3.A.games.length);
    return (0, r.jsxs)(Q.B, {
        gap: 4,
        children: [
            (0, r.jsx)(Z.D, { variant: "heading-sm/bold", children: "Cache Status" }),
            (0, r.jsxs)(p.E, {
                variant: "text-sm/normal",
                children: [(0, r.jsx)("strong", { children: "Total games:" }), " ", a],
            }),
            (0, r.jsxs)(p.E, {
                variant: "text-sm/normal",
                children: [
                    (0, r.jsx)("strong", { children: "ETag:" }),
                    " ",
                    "" === e ? "(empty)" : (0, r.jsx)("span", { className: lQ.ti, children: e }),
                ],
            }),
            (0, r.jsxs)(p.E, {
                variant: "text-sm/normal",
                children: [
                    (0, r.jsx)("strong", { children: "Last fetched:" }),
                    " ",
                    null == t ? "never" : new Date(t).toLocaleString(),
                ],
            }),
        ],
    });
}
function lZ(e) {
    let { game: t } = e,
        { data: a } = (0, aA.I)(t.id),
        n = null != a && a.name !== t.name;
    return (0, r.jsxs)(Q.B, {
        gap: 12,
        className: lQ.f_,
        children: [
            (0, r.jsxs)(Q.B, {
                direction: "horizontal",
                gap: 12,
                align: "center",
                children: [
                    (0, r.jsx)(aS.A, { game: a, size: aS.M.LARGE }),
                    (0, r.jsxs)(Q.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(Z.D, { variant: "heading-lg/bold", children: t.name }),
                            (0, r.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: t.id }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)(Q.B, {
                gap: 4,
                children: [
                    (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "GameStore" }),
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children:
                            null == a
                                ? "No record fetched. The icon above comes from here, not from the detectable payload, so it is blank."
                                : `name: ${a.name}`,
                    }),
                    n &&
                        (0, r.jsx)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-feedback-critical",
                            children: "Differs from the detectable name above.",
                        }),
                ],
            }),
            (0, r.jsxs)(Q.B, {
                gap: 4,
                className: lQ.Uq,
                children: [
                    (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "DetectableGameStore" }),
                    (0, r.jsx)("pre", { className: lQ.aY, children: JSON.stringify(t, null, 2) }),
                ],
            }),
        ],
    });
}
function l0() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(""),
        l = (0, d.bG)([t3.A], () => t3.A.games),
        s = o.useMemo(
            () =>
                l.filter((e) => null != e.name && "" !== e.name).map((e) => ({ id: e.id, value: e.id, label: e.name })),
            [l],
        ),
        i = o.useCallback((e) => {
            (t(e), null != e && n(""));
        }, []),
        c = o.useCallback((e) => {
            (n(e), e.trim().length > 0 && t(null));
        }, []),
        u = a.trim(),
        m = u.length > 0 ? u : (e ?? void 0),
        h = (0, d.bG)([t3.A], () => (null != m ? (t3.A.getDetectableGame(m) ?? null) : null), [m]);
    return (0, r.jsx)("div", {
        className: Y()(tZ.nd, lQ.kL),
        children: (0, r.jsxs)(Q.B, {
            gap: 16,
            padding: 12,
            className: lQ.rf,
            children: [
                (0, r.jsxs)(Q.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(Z.D, { variant: "heading-md/bold", children: "Detectable Cache" }),
                        (0, r.jsx)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Inspect the local detectable games cache. Use this to verify whether a SKU or executable change has propagated to your client.",
                        }),
                    ],
                }),
                (0, r.jsx)(lX, {}),
                (0, r.jsxs)(Q.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(Z.D, { variant: "heading-sm/bold", children: "Search" }),
                        (0, r.jsx)(a_.Z, {
                            label: "Search games",
                            hideLabel: !0,
                            placeholder: "Search for a game\u2026",
                            options: s,
                            value: u.length > 0 ? void 0 : (e ?? void 0),
                            onSelectionChange: i,
                            selectionMode: "single",
                            clearable: !0,
                        }),
                    ],
                }),
                (0, r.jsxs)(Q.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(Z.D, { variant: "heading-sm/bold", children: "Game ID" }),
                        (0, r.jsx)(f.k, {
                            label: "Game ID",
                            hideLabel: !0,
                            placeholder: "Paste a game ID",
                            value: a,
                            onChange: c,
                        }),
                    ],
                }),
                null != m &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(b.c, {}),
                            null != h
                                ? (0, r.jsx)(lZ, { game: h })
                                : (0, r.jsxs)(p.E, {
                                      variant: "text-sm/normal",
                                      color: "text-feedback-critical",
                                      children: ["No entry in cache for ID ", m, "."],
                                  }),
                        ],
                    }),
            ],
        }),
    });
}
var l1 = a(376357),
    l2 = a(97483),
    l3 = a(123292),
    l6 = a(780907),
    l5 = a(56562);
let l8 = [
    { label: "Wuthering Waves", value: "1247227126416146462" },
    { label: "Marvel Rivals", value: "1314395942253756416" },
    { label: "VALORANT", value: "700136079562375258" },
    { label: "League of Legends", value: "1402418696126992445" },
    { label: "World of Warcraft", value: "356875762940379136" },
];
function l4(e) {
    let { runningGame: t, isDebugGame: a } = e,
        { data: n } = (0, aA.I)(t.id);
    return (0, r.jsxs)(Q.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            null != n && (0, r.jsx)(aS.A, { game: n }),
            (0, r.jsxs)(Q.B, {
                justify: "center",
                gap: 0,
                children: [
                    (0, r.jsx)(p.E, { variant: "text-md/normal", children: n?.name }),
                    a && (0, r.jsx)(p.E, { variant: "text-xxs/normal", children: "Debug" }),
                ],
            }),
        ],
    });
}
function l9() {
    let e = (0, d.bG)([E.Ay], () => E.Ay.getRunningGames()),
        t = (0, d.bG)([E.Ay], () => E.Ay.getDebugRunningGame()),
        [a, n] = (0, o.useState)(t?.id ?? ""),
        l = (0, o.useMemo)(
            () =>
                l8.map((e) => {
                    let { label: t, value: a } = e;
                    return { label: t, value: a, id: a };
                }),
            [],
        );
    function s(e) {
        if (null == e || "" === e) return void (0, l6.xt)(null);
        let t = t3.A.getDetectableGame(e),
            a = t?.executables[0],
            n = t?.thirdPartySkus[0]?.distributor;
        if (null == t || null == a)
            return (0, l1.P)({ id: "devtools-set-debug-game-error", type: l2.Ck.FAILURE, message: "Invalid Game ID" });
        (0, l6.xt)({
            id: t.id,
            name: t.name,
            exeName: a.name,
            exePath: "",
            lastFocused: Date.now() / 1e3,
            pid: -1,
            pidPath: [],
            hidden: !1,
            elevated: !1,
            processName: a.name,
            distributor: n,
            windowHandle: void 0,
            fullscreenType: l5.aI.UNKNOWN,
            cmdLine: "",
            nativeProcessObserverId: -1,
        });
    }
    return (0, r.jsxs)(Q.B, {
        gap: 32,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)(Q.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(Z.D, { variant: "heading-md/bold", children: "Running Games" }),
                    e.length > 0 &&
                        (0, r.jsx)("div", {
                            children: e.map((e) =>
                                (0, r.jsx)(l4, { runningGame: e, isDebugGame: t?.id === e.id }, e.id),
                            ),
                        }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(Q.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(Z.D, { variant: "heading-md/bold", children: "Set Debug Running Game" }),
                    (0, r.jsx)(f.k, { label: "Custom Game ID", value: a, onChange: n }),
                    (0, r.jsx)(a_.Z, {
                        label: "Pick a Preset Game",
                        options: l,
                        value: t?.id ?? "",
                        onSelectionChange: function (e) {
                            s(e);
                        },
                        selectionMode: "single",
                        clearable: !0,
                    }),
                    (0, r.jsxs)(Q.B, {
                        direction: "horizontal",
                        gap: 16,
                        justify: "end",
                        align: "end",
                        children: [
                            null != t &&
                                (0, r.jsx)(l3.Q, { variant: "secondary", text: "Clear", onClick: () => s(null) }),
                            (0, r.jsx)(x.$, { variant: "primary", text: "Detect Game", onClick: () => s(a) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var l7 = a(636537),
    se = a(240248),
    st = a(974009);
function sa() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        i = o.useCallback(async () => {
            try {
                (t(!0), n(null), s(null));
                let e = await l7.Bo.put({
                    url: "/users/@me/developer-portal/onboarding",
                    body: { completed: !1 },
                    rejectWithError: !0,
                });
                n(`${e.status}: ${e.text}`);
            } catch (e) {
                s(e instanceof Error ? e.message : String(e));
            } finally {
                t(!1);
            }
        }, []);
    return (0, r.jsxs)(Q.B, {
        direction: "vertical",
        gap: 4,
        children: [
            (0, r.jsx)(x.$, { variant: "primary", onClick: i, text: "Reset Onboarding", disabled: e, fullWidth: !0 }),
            !(0, se.uJ)(a) && (0, r.jsx)(p.E, { variant: "text-md/normal", color: "status-positive", children: a }),
            !(0, se.uJ)(l) &&
                (0, r.jsx)(p.E, { variant: "text-md/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function sn() {
    return (0, r.jsx)("div", {
        className: st.n,
        children: (0, r.jsx)(Q.B, { direction: "vertical", gap: 16, children: (0, r.jsx)(sa, {}) }),
    });
}
a(172879);
var sl = a(64015),
    ss = a.n(sl),
    si = a(874804),
    sr = a(866665),
    so = a(782134),
    sd = a(113494),
    sc = a(603349),
    su = a(108715);
function sm(e) {
    return parseFloat(e.toFixed(3));
}
let sh = [
    {
        key: "Store",
        cellClassName: su.lA,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "Time",
        cellClassName: su.i7,
        render(e) {
            let { trace: t } = e;
            return `${sm(t.time)} ms`;
        },
    },
];
function sx(e) {
    let { actionLog: t } = e,
        a = o.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, r.jsx)(g.Ip, { children: (0, r.jsx)(t0, { columns: sh, data: a }) });
}
let sp = [
    {
        id: "action",
        name: "Action",
        group: nh.fu.NONE,
        render(e) {
            let { actionLog: t } = e,
                a = nU()(t.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(n8, {
                        className: su.mP,
                        children: [
                            (0, r.jsx)(n4, {
                                name: "Created at",
                                children: (0, r.jsx)("time", {
                                    dateTime: t.createdAt?.toISOString(),
                                    title: (0, nq.i$)(a, "LLLL"),
                                    children: (0, nq.mk)(a),
                                }),
                            }),
                            (0, r.jsxs)(n4, { name: "Total Time", children: [sm(t.totalTime), " ms"] }),
                        ],
                    }),
                    (0, r.jsx)(g.Ip, { className: su.Dx, children: (0, r.jsx)(nr.A, { data: t.action }) }),
                ],
            });
        },
    },
    {
        id: "traces",
        name: "Store Handlers",
        group: nh.fu.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, r.jsx)(sx, { actionLog: t });
        },
    },
];
function sg(e) {
    let { actionLog: t, initialHeight: a } = e,
        n = o.useMemo(
            () =>
                t.error
                    ? [
                          ...sp,
                          {
                              id: "error",
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(sc.A, { className: su.ik }), "Error"],
                              }),
                              group: nh.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: Y()(su.u4, tZ.KE),
                                              children: (0, r.jsx)("div", {
                                                  className: tZ.R5,
                                                  children: (0, r.jsx)(nG.$n, {
                                                      className: tZ.Q$,
                                                      size: nG.$n.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, r.jsx)(g.Ip, {
                                              className: su.Dx,
                                              children: (0, r.jsx)(nr.A, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : sp,
            [t],
        ),
        { TabBar: l, renderSelectedTab: s } = (0, nm.A)({ tabs: n }, [n]);
    return (0, r.jsxs)(nu, {
        className: su.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(ni.Ay, {
                className: Y()(tZ.jr, su.nZ),
                children: [
                    (0, r.jsx)(ni.Ay.Icon, { icon: si.K, tooltip: t.name }),
                    (0, r.jsx)(ni.Ay.Title, {
                        wrapperClassName: Y()(tZ.qd, tZ.ZE),
                        className: tZ.Pz,
                        children: t.name,
                    }),
                    (0, r.jsx)(ni.Ay.Icon, {
                        icon: nB.CopyIcon,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let a = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, a) => {
                                    var n;
                                    return ((t[a] = ((n = e[a]), ex.AKn.test(n) ? "REDACTED" : n)), t);
                                }, {}),
                                null,
                                2,
                            );
                            (0, nY.C)(a, () =>
                                (0, l1.P)({
                                    id: "copy-action-log-name",
                                    type: l2.Ck.SUCCESS,
                                    message: "Copied action log data to clipboard",
                                }),
                            );
                        },
                    }),
                ],
            }),
            s({ actionLog: t }),
        ],
    });
}
let sv = [
        {
            key: "Action",
            cellClassName: su.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.error && (0, r.jsx)(sc.A, { className: su.ik }), t.name],
                });
            },
        },
        {
            key: "Total Time",
            cellClassName: su.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${sm(t.totalTime)} ms`;
            },
        },
        {
            key: "Timestamp",
            cellClassName: su.i7,
            render(e) {
                let { actionLog: t } = e;
                return nU()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    sj = {
        searchType: nH.n.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function sf() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (function (e) {
            let [t, a] = o.useState(e.logs);
            return (
                o.useEffect(() => {
                    let t = ss()(() => {
                        a([...e.logs]);
                    }, 500);
                    return (
                        e.on("log", t),
                        () => {
                            e.off("log", t);
                        }
                    );
                }, [e]),
                t
            );
        })(tM.h.actionLogger),
        l = o.useMemo(() => n.map((e) => ({ key: e.id.toString(), actionLog: e })).toReversed(), [n]),
        [s, i] = o.useState(l),
        [d, c] = o.useState(l),
        [u, m] = o.useState(!1),
        [h, x] = o.useState(),
        p = o.useCallback((e) => {
            c(e);
        }, []);
    (0, nK.RT)(t, u ? s : l, p, sj);
    let g = o.useCallback(
            (e) => {
                (i(l), m(e));
            },
            [l],
        ),
        v = t.trim().length > 0,
        j = o.useMemo(() => (v ? d : u ? s : l), [l, d, v, u, s]),
        f = u ? "Enable Event Tracking" : "Pause Event Tracking";
    return (0, r.jsxs)("div", {
        ref: e,
        className: Y()(tZ.nd, su.nd),
        children: [
            (0, r.jsxs)("div", {
                className: su.KE,
                children: [
                    (0, r.jsx)(sr.m, {
                        text: f,
                        children: (0, r.jsx)(eK.K, {
                            size: "sm",
                            variant: u ? "primary" : "active",
                            icon: u ? so.PlayIcon : sd.PauseIcon,
                            "aria-label": f,
                            onClick: () => g(!u),
                        }),
                    }),
                    (0, r.jsx)(nW.I, {
                        size: "sm",
                        query: t,
                        onChange: a,
                        onClear: () => a(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, r.jsx)(t0, {
                columns: sv,
                data: j,
                selectedRowKey: h?.id.toString(),
                onClickRow: (e) => x(e.actionLog),
            }),
            null != h &&
                (0, r.jsx)(sg, { actionLog: h, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
var sb = a(936388),
    sy = a(269248);
function sE() {
    let e = o.useRef(null);
    return (0, r.jsx)("div", {
        ref: e,
        className: Y()(tZ.nd, sy.n),
        children: (0, r.jsx)(x.$, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: sb.A.clearUploadedKeyVersions,
        }),
    });
}
var sC = a(409181),
    s_ = a(881520),
    sS = a(670455),
    sN = a(932661);
let sA = [
    { id: "seconds", label: "second(s)", value: 1e3 },
    { id: "minutes", label: "minute(s)", value: 6e4 },
    { id: "hours", label: "hour(s)", value: 36e5 },
    { id: "days", label: "day(s)", value: 864e5 },
];
function sk() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(0),
        [l, s] = o.useState(1e3),
        [i, c] = o.useState(0),
        m = (0, d.bG)([s_.A], () => (null === e ? null : (s_.A.getFeedbackConfig(sS.MW[e]) ?? sC.u[sS.MW[e]]))),
        h = Object.entries(sS.MW),
        g = h.slice(h.length / 2).map((e) => {
            let [t] = e;
            return { id: t, label: t, value: t };
        }),
        v = o.useMemo(() => null != e && i >= 0 && i <= 100 && a >= 0, [e, i, a]);
    return (0, r.jsx)("div", {
        className: sN.kL,
        children: (0, r.jsxs)(Q.B, {
            gap: 32,
            children: [
                (0, r.jsx)(j.l, {
                    label: "Feedback Survey",
                    options: g,
                    value: e,
                    onSelectionChange: t,
                    placeholder: "Select Feedback Survey",
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsxs)(u.n, {
                    label: "Override Survey Cooldown",
                    children: [
                        null != m &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "Current cooldown" }),
                                    (0, r.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        children: `${m.cooldown / 1e3} second(s) or`,
                                    }),
                                    (0, r.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        children: `${m.cooldown / 6e4} minute(s) or`,
                                    }),
                                    (0, r.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        children: `${m.cooldown / 36e5} hour(s) or`,
                                    }),
                                    (0, r.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        children: `${m.cooldown / 864e5} day(s)`,
                                    }),
                                ],
                            }),
                        (0, r.jsxs)(Q.B, {
                            direction: "horizontal",
                            align: "end",
                            children: [
                                (0, r.jsx)(f.k, {
                                    label: "Override cooldown",
                                    min: 0,
                                    value: a.toString(),
                                    type: "number",
                                    placeholder: "Duration length",
                                    onChange: (e) => n(parseFloat(e)),
                                }),
                                (0, r.jsx)(j.l, {
                                    label: "Override cooldown duration type",
                                    hideLabel: !0,
                                    options: sA,
                                    value: l,
                                    onSelectionChange: s,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(u.n, {
                    label: "Override Survey Chance",
                    children: (0, r.jsx)(f.k, {
                        label: "Override chance",
                        description: null != m ? `Current chance: ${100 * m.chance}%` : void 0,
                        helperText: "As a percentage",
                        min: 0,
                        max: 100,
                        value: i.toString(),
                        type: "number",
                        onChange: (e) => c(parseFloat(e)),
                    }),
                }),
                (0, r.jsxs)(nx.e, {
                    children: [
                        (0, r.jsx)(x.$, {
                            variant: "critical-primary",
                            text: "Clear Override",
                            onClick: () =>
                                void (
                                    null != m &&
                                    tM.h.dispatch({ type: "FEEDBACK_OVERRIDE_CLEAR", feedbackType: m.feedbackType })
                                ),
                            disabled: !v,
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Update",
                            onClick: () =>
                                void (
                                    null != m &&
                                    tM.h.dispatch({
                                        type: "FEEDBACK_OVERRIDE_SET",
                                        feedbackType: m.feedbackType,
                                        cooldown: a * l,
                                        chance: i / 100,
                                    })
                                ),
                            disabled: !v,
                        }),
                    ],
                }),
                null == e &&
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: need to select a survey",
                    }),
                !(a >= 0) &&
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: cooldown needs to be a number greater than 0",
                    }),
                !(i >= 0 && i <= 100) &&
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: chance needs to be a number between 0 and 100",
                    }),
                (0, r.jsx)(p.E, {
                    variant: "text-sm/normal",
                    children: "Clear override resets a feedback survey to its default values",
                }),
            ],
        }),
    });
}
var sD = a(334279),
    sI = a(663417),
    sT = a(147925),
    sO = a(557009);
async function sR() {
    return (
        await l7.Bo.get({
            url: ex.Rsh.ENTITLEMENTS_FOR_APPLICATION(tP.tv),
            oldFormErrors: !0,
            query: { exclude_consumed: !0, exclude_ended: !0 },
            rejectWithError: !0,
        })
    ).body.map((e) => sO.A.createFromServer(e));
}
async function sw(e) {
    await l7.Bo.post({
        url: "/debug/entitlements/fractional-premium",
        body: { count: 1, sku_id: e },
        rejectWithError: !1,
    });
}
async function sM(e) {
    let t = "/debug/entitlements/fractional-premium";
    (null != e && (t = `${t}/${e}`), await l7.Bo.del({ url: t, rejectWithError: !0 }));
}
async function sL() {
    await l7.Bo.post({ url: "/debug/entitlements/fulfillment", rejectWithError: !1 });
}
function sP() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState(!1),
        l = (0, o.useCallback)(async () => {
            try {
                n(!0);
                let e = await sR();
                t(e);
            } finally {
                n(!1);
            }
        }, []),
        s = (0, o.useCallback)(
            async (e) => {
                (await sw(e), await l());
            },
            [l],
        );
    return {
        grantFractionalPremium: s,
        deleteFractionalPremium: (0, o.useCallback)(
            async (e) => {
                (await sM(e), await l());
            },
            [l],
        ),
        triggerNextEntitlementFulfillment: (0, o.useCallback)(async () => {
            (await sL(), await l());
        }, [l]),
        refreshEntitlementList: l,
        entitlements: e,
        loading: a,
    };
}
var sU = a(267577),
    sG = a(370109);
let sB = {
    [ex.GD.QUEST_REWARD]: "Quest Reward",
    [ex.GD.DEVELOPER_GIFT]: "Developer Gift",
    [ex.GD.INVOICE]: "Invoice",
    [ex.GD.REVERSE_TRIAL]: "Reverse Trial",
    [ex.GD.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
    [ex.GD.SUBSCRIPTION]: "Subscription",
    [ex.GD.SUBSCRIPTION_MEMBER]: "Subscription Member",
};
function sF(e) {
    let t,
        { entitlement: a, active: n, onDelete: l } = e;
    function s(e) {
        return null != e ? (0, nq.i$)(e, "LLL") : "---";
    }
    return (0, r.jsxs)("div", {
        className: Y()(sU.Nr, n ? sG.C1 : ""),
        children: [
            (0, r.jsxs)(p.E, { variant: "text-md/normal", children: ["ID: ", a.id, " "] }),
            !n &&
                (0, r.jsxs)(p.E, {
                    variant: "text-md/normal",
                    children: ["SKU: ", s$.find((e) => e.value === a.skuId)?.label],
                }),
            null != a.startsAt &&
                null != a.endsAt &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(p.E, { variant: "text-md/normal", children: ["Start: ", s(a.startsAt), " "] }),
                        (0, r.jsxs)(p.E, { variant: "text-md/normal", children: ["End: ", s(a.endsAt), " "] }),
                    ],
                }),
            (0, r.jsxs)(p.E, {
                variant: "text-md/normal",
                children: [
                    "Entitlement source type: ",
                    null != (t = a.sourceType) && t in sB ? sB[t] : `Unknown source type ${t}`,
                ],
            }),
            n &&
                null != l &&
                (0, r.jsx)(nG.$n, {
                    className: sU.RW,
                    size: nG.$n.Sizes.TINY,
                    color: nG.$n.Colors.RED,
                    look: nG.$n.Looks.OUTLINED,
                    onClick: l,
                    children: "Delete",
                }),
        ],
    });
}
let s$ = [
    { id: "1h", label: "1 hour", value: sD.j.PREMIUM_TIER_2_1_HOUR },
    { id: "1d", label: "1 day", value: sD.j.PREMIUM_TIER_2_1_DAY },
    { id: "3d", label: "3 days", value: sD.j.PREMIUM_TIER_2_3_DAY },
];
function sV() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(sD.j.PREMIUM_TIER_2_1_HOUR),
        [l, s] = o.useState([]),
        [i, d] = o.useState([]),
        {
            refreshEntitlementList: c,
            grantFractionalPremium: u,
            deleteFractionalPremium: m,
            triggerNextEntitlementFulfillment: h,
            entitlements: v,
            loading: f,
        } = sP();
    return (
        o.useEffect(() => {
            c();
        }, [c]),
        o.useEffect(() => {
            (s(v.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === ex.zF_.FRACTIONAL_REDEMPTION)),
                d(v.filter((e) => Object.values(sD.j).includes(e.skuId) && null == e.startsAt)));
        }, [v]),
        (0, r.jsx)(g.Ip, {
            className: tZ.nd,
            children: (0, r.jsxs)("div", {
                className: sG.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: sG.dL,
                        children: [
                            (0, r.jsx)(p.E, {
                                style: { marginBottom: "8px" },
                                variant: "text-lg/bold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, r.jsxs)(q.D, {
                                onClick: () => t(!e),
                                className: sU.As,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Info" }),
                                    }),
                                    (0, r.jsx)(sT.A, { direction: e ? sT.A.Directions.UP : sT.A.Directions.DOWN }),
                                ],
                            }),
                        ],
                    }),
                    e &&
                        (0, r.jsxs)("div", {
                            style: { margin: "8px 0" },
                            children: [
                                (0, r.jsx)(p.E, {
                                    variant: "text-md/normal",
                                    style: { fontStyle: "italic" },
                                    color: "text-muted",
                                    children:
                                        "Subscriptions paused by Fractional Nitro do not automatically resume in local or staging environments. Subscription has to be resumed manually via Admin.",
                                }),
                                (0, r.jsx)("br", {}),
                                (0, r.jsx)(p.E, {
                                    variant: "text-md/normal",
                                    style: { fontStyle: "italic" },
                                    color: "text-muted",
                                    children:
                                        "Entitlement fulfillment tasks do not run automatically in local environments. This task is required to handle the scheduled unfulfillment of Fractional Nitro after it's time has elapsed.",
                                }),
                            ],
                        }),
                    (0, r.jsxs)("section", {
                        style: { marginBottom: "8px" },
                        className: Y()([sU.uW, sG.Uo]),
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Fractional Premium SKU",
                                value: a,
                                options: s$,
                                onSelectionChange: n,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Grant Fractional Nitro",
                                onClick: () => u(a),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("section", {
                        className: sU.uW,
                        children: [
                            (0, r.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: sG.dL,
                                children: [
                                    (0, r.jsx)(p.E, {
                                        style: { marginBottom: "8px" },
                                        variant: "text-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: sU.GC,
                                        children: [
                                            (0, r.jsx)(nG.$n, {
                                                disabled: f,
                                                size: nG.$n.Sizes.TINY,
                                                color: nG.$n.Colors.PRIMARY,
                                                look: nG.$n.Looks.OUTLINED,
                                                onClick: () => h(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, r.jsx)(nG.$n, {
                                                disabled: f,
                                                size: nG.$n.Sizes.TINY,
                                                color: nG.$n.Colors.RED,
                                                look: nG.$n.Looks.OUTLINED,
                                                onClick: () => m(),
                                                children: "Delete all",
                                            }),
                                            (0, r.jsx)(nG.$n, {
                                                disabled: f,
                                                look: nG.$n.Looks.BLANK,
                                                size: nG.$n.Sizes.ICON,
                                                onClick: c,
                                                children: (0, r.jsx)("span", {
                                                    title: "Refresh",
                                                    children: (0, r.jsx)(sI.RefreshIcon, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            l.length > 0 &&
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(p.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Active premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: l.map((e) =>
                                                (0, r.jsx)(
                                                    sF,
                                                    { entitlement: e, active: !0, onDelete: () => m(e.id) },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                            i.length > 0 &&
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(p.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Unconsumed Fractional Premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: i.map((e) => (0, r.jsx)(sF, { entitlement: e }, e.id)),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
        })
    );
}
var sW = a(832604),
    sz = a(264572).Buffer;
let sH = /[^a-zA-Z0-9_.-]+/g;
function sK(e) {
    let { runningGame: t } = e,
        a = (0, sW.A)(t.pid, void 0),
        [n, l] = (0, o.useState)(!1),
        s = t.name ?? t.exeName ?? "",
        i = null != a && !n;
    async function d() {
        if (null != a) {
            l(!0);
            try {
                let e,
                    t = await y.A.fileManager.saveWithDialog2(
                        sz.from(a.slice(a.indexOf(",") + 1), "base64"),
                        ((e = s.trim().replace(sH, "_")), `${e.length > 0 ? e : "icon"}.png`),
                        void 0,
                    );
                null == t ||
                    t.canceledByUser ||
                    (0, l1.P)({
                        id: "devtools-save-icon-success",
                        type: l2.Ck.SUCCESS,
                        message: `Saved icon to ${t.directory}`,
                    });
            } catch {
                (0, l1.P)({ id: "devtools-save-icon-failure", type: l2.Ck.FAILURE, message: "Failed to save icon" });
            } finally {
                l(!1);
            }
        }
    }
    return (0, r.jsxs)(Q.B, {
        direction: "horizontal",
        align: "center",
        justify: "space-between",
        gap: 12,
        children: [
            (0, r.jsxs)(Q.B, {
                direction: "horizontal",
                align: "center",
                gap: 12,
                fullWidth: !1,
                children: [
                    null != a
                        ? (0, r.jsx)("img", { src: a, alt: s, width: 48, height: 48 })
                        : (0, r.jsx)(p.E, { variant: "text-xxs/normal", color: "text-muted", children: "no icon" }),
                    (0, r.jsxs)(Q.B, {
                        direction: "vertical",
                        gap: 0,
                        fullWidth: !1,
                        children: [
                            (0, r.jsx)(p.E, { variant: "text-md/normal", children: s }),
                            (0, r.jsxs)(p.E, {
                                variant: "text-xxs/normal",
                                color: "text-muted",
                                children: [
                                    t.id ?? "(no id)",
                                    " \xb7 ",
                                    t.distributor ?? "unknown",
                                    ":",
                                    t.sku ?? "\u2014",
                                ],
                            }),
                            (0, r.jsx)(p.E, { variant: "text-xxs/normal", color: "text-muted", children: t.exePath }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(x.$, { variant: "primary", text: "Save Icon", onClick: d, disabled: !i }),
        ],
    });
}
function sY() {
    let e = (0, d.bG)([E.Ay], () => E.Ay.getRunningGames());
    return (0, r.jsxs)(Q.B, {
        gap: 16,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)(Q.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(Z.D, { variant: "heading-md/bold", children: "Game Icon Extractor" }),
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        children: "Save a running game's locally-detected icon as a PNG.",
                    }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(Q.B, {
                gap: 12,
                children: [
                    (0, r.jsx)(Z.D, { variant: "heading-sm/bold", children: "Running Games" }),
                    0 === e.length
                        ? (0, r.jsx)(p.E, {
                              variant: "text-sm/normal",
                              children: "No games detected. Launch a game first.",
                          })
                        : e.map((e) => (0, r.jsx)(sK, { runningGame: e }, `${e.pid}-${e.exePath}`)),
                ],
            }),
        ],
    });
}
var sq = a(390544),
    sJ = a(498480),
    sQ = a(475669),
    sX = a(486223);
function sZ() {
    let e = (0, d.bG)([nC.A], () => nC.A.getGuildId()),
        t = (0, d.bG)([nE.A], () => nE.A.getGuild(e)?.name),
        a = (0, d.bG)([sQ.A], () => sQ.A.getStateForGuild(e)?.instances),
        n = o.useMemo(() => Object.values(a ?? {})[0], [a]),
        l = o.useCallback(
            (t) => {
                null != n &&
                    null != e &&
                    tM.h.dispatch({
                        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                        guildId: e,
                        instance: { ...n, status: t },
                    });
            },
            [n, e],
        ),
        s = o.useMemo(
            () =>
                Object.values(sq.M).map((e) =>
                    (0, r.jsx)(
                        x.$,
                        {
                            variant: "primary",
                            text: e,
                            onClick: () => {
                                l(e);
                            },
                        },
                        e,
                    ),
                ),
            [l],
        ),
        i = o.useCallback(() => {
            null != n &&
                null != e &&
                tM.h.dispatch({
                    type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                    guildId: e,
                    instance: { ...n, serverIP: void 0, port: void 0, gameServerPanelUrl: void 0 },
                });
        }, [n, e]);
    return null == e
        ? null
        : (0, r.jsxs)(g.Ip, {
              className: sX.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: sX.uW,
                      children: (0, r.jsx)(Z.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                  }),
                  (0, r.jsxs)("div", {
                      className: sX.uW,
                      children: [
                          (0, r.jsx)(p.E, {
                              variant: "eyebrow",
                              children: `Set server state for first server: ${n?.name}`,
                          }),
                          (0, r.jsx)("div", { className: sX.UD, children: s }),
                          (0, r.jsx)(p.E, { variant: "eyebrow", children: "Remove Server Info" }),
                          (0, r.jsx)("div", {
                              className: sX.UD,
                              children: (0, r.jsx)(x.$, {
                                  variant: "primary",
                                  text: "Remove IP Address & Game Server Panel URL",
                                  onClick: i,
                              }),
                          }),
                          (0, r.jsx)(p.E, { variant: "eyebrow", children: "Reset server" }),
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              text: "Reset",
                              onClick: () => {
                                  (0, sJ.cq)(e);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
function s0(e, t) {
    let a = "boolean" == typeof t ? t : !ns.Ay.get(e);
    tM.h.dispatch({ type: "DEV_TOOLS_DEV_SETTING_SET", toggle: e, value: a });
}
var s1 = a(257446);
function s2(e) {
    let { devSettingsCategory: t } = e,
        a = (0, d.bG)([ns.Ay], () => ns.Ay.allByCategory(t), [t], d.My),
        n = o.useMemo(
            () =>
                a.map((e) => {
                    let [t, a, { label: n }] = e;
                    return (0, r.jsx)(m.d, { label: n, description: t, checked: a, onChange: (e) => s0(t, e) }, t);
                }),
            [a],
        );
    return (0, r.jsx)("div", { className: Y()(tZ.nd, s1.n), children: n });
}
var s3 = a(950305),
    s6 = a(231483),
    s5 = a(597770),
    s8 = a(433492),
    s4 = a(695458),
    s9 = a(796140),
    s7 = a(268791),
    ie = a(836480),
    it = a(855473),
    ia = a(626258),
    il = a(420854),
    is = a(373846),
    ii = a(657044),
    ir = a(141060),
    io = a(608599),
    id = a(685761),
    ic = a(157225),
    iu = a(362704),
    im = a(625903),
    ih = a(628284),
    ix = a(320448),
    ip = a(562708),
    ig = a(830215),
    iv = a(381689),
    ij = a(889227),
    ib = a(499785),
    iy = a(315069);
class iE extends iy.A {
    id;
    summary;
    userIds;
    password;
    constructor(e) {
        (super(), (this.id = e.pool_id), (this.summary = e.summary), (this.userIds = e.user_ids));
    }
    static fromServer(e) {
        return new iE(e);
    }
    setPassword(e) {
        return ((this.password = e), this);
    }
}
let iC = { pools: null, users: null };
function i_(e) {
    (null == iC.users && (iC.users = new Map()), iC.users.set(e.id, new ij.A(e)));
}
class iS extends d.Ay.PersistedStore {
    static displayName = "GeneratedTestUsersStore";
    static persistKey = "GeneratedTestUsersStore";
    initialize(e) {
        null != e &&
            (null != e.pools && (iC.pools = new Map(Object.entries(e.pools))),
            null != e.users && (iC.users = new Map(Object.entries(e.users))));
    }
    getState() {
        return {
            pools: null != iC.pools ? Object.fromEntries(iC.pools) : null,
            users: null != iC.users ? Object.fromEntries(iC.users) : null,
        };
    }
    getUsersForPool(e) {
        return Array.from(iC.users?.values() ?? []).filter((t) => iC.pools?.get(e)?.userIds.includes(t.id));
    }
    getPool(e) {
        return iC.pools?.get(e) ?? null;
    }
    getUser(e) {
        return iC.users?.get(e) ?? null;
    }
    getPools() {
        return null === iC.pools ? null : Array.from(iC.pools.values());
    }
}
let iN = new iS(tM.h, {
    GENERATED_POOL_BY_ID_FETCH_SUCCESS: function (e) {
        let { pool: t, users: a } = e;
        (null == iC.pools && (iC.pools = new Map()), iC.pools.set(t.id, t), a.forEach(i_));
    },
    GENERATED_POOL_REMOVE_FROM_LIST: function (e) {
        let { poolId: t } = e,
            a = iC.pools?.get(t);
        if (null == a) return !1;
        (a.userIds.length > 0 &&
            a.userIds.forEach((e) => {
                iC.users?.delete(e);
            }),
            iC.pools?.delete(t));
    },
});
var iA = a(835002);
async function ik(e, t) {
    return await ib.A.get({
        url: ex.Rsh.GENERATED_POOL_BY_ID(e),
        trackedActionData: { event: ip.NetworkActionNames.USER_LOGIN },
        rejectWithError: !1,
    })
        .then((e) => {
            let { ok: a, body: n } = e;
            if (!a) return void iv.A.showFailedToast(iA.OB.GENERIC_ERROR);
            let { generated_pool: l, users: s } = n;
            tM.h.dispatch({
                type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                pool: iE.fromServer(l).setPassword(t),
                users: s.map((e) => new ij.A(e)),
            });
        })
        .catch(() => (iv.A.showFailedToast(iA.OB.GENERIC_ERROR), null));
}
var iD = a(844330),
    iI = a(157416);
let iT = [
        s3.UserIcon,
        s6.ShieldIcon,
        s5.GiftIcon,
        s8.K,
        s4.m,
        s9.c,
        s7.$,
        ie.CompassIcon,
        it.Z,
        ia.A,
        il.E,
        is.C,
        ii._,
        ir.i,
        io.L,
        id.f,
        ic.N,
        iu.Y,
        im.SettingsIcon,
    ],
    iO = [
        "text-default",
        "text-feedback-positive",
        "text-feedback-warning",
        "text-feedback-info",
        "text-feedback-critical",
    ];
function iR() {
    let [e, t] = o.useState(""),
        [a, n] = o.useState(""),
        [l, s] = o.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("form", {
                onSubmit: async (l) => {
                    (l.preventDefault(), s(!0));
                    try {
                        (await ik(e, a), t(""), n(""));
                    } finally {
                        s(!1);
                    }
                },
                children: (0, r.jsxs)(Q.B, {
                    direction: "vertical",
                    align: "center",
                    gap: 8,
                    children: [
                        (0, r.jsxs)(Q.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            children: [
                                (0, r.jsx)(f.k, {
                                    fullWidth: !0,
                                    value: e,
                                    onChange: t,
                                    placeholder: "Pool ID",
                                    disabled: l,
                                }),
                                (0, r.jsx)(f.k, {
                                    type: "password",
                                    fullWidth: !0,
                                    value: a,
                                    onChange: n,
                                    placeholder: "Password",
                                    disabled: l,
                                }),
                            ],
                        }),
                        (0, r.jsxs)(Q.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            children: [
                                (0, r.jsx)(x.$, {
                                    type: "button",
                                    size: "md",
                                    fullWidth: !0,
                                    variant: "secondary",
                                    text: "Clear",
                                    onClick: () => {
                                        (t(""), n(""));
                                    },
                                    disabled: 0 === e.length || 0 === a.length || l,
                                }),
                                (0, r.jsx)(x.$, {
                                    type: "submit",
                                    size: "md",
                                    fullWidth: !0,
                                    variant: "primary",
                                    text: "Add Pool",
                                    disabled: 0 === e.length || 0 === a.length || l,
                                    loading: l,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(b.c, { gap: 4 }),
        ],
    });
}
function iw(e) {
    let { pool: t } = e,
        { id: a, summary: n } = t,
        l = iN.getUsersForPool(a),
        s = (0, d.bG)([nQ.default], () => nQ.default.getId()),
        i = iT[Number(a) % iT.length],
        c = iO[Number(a) % iO.length],
        u = o.useCallback(() => {
            tM.h.dispatch({ type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId: a });
        }, [a]);
    return (0, r.jsx)(Q.B, {
        direction: "horizontal",
        align: "start",
        justify: "space-between",
        children: (0, r.jsx)(iD.A, {
            icon: (0, r.jsx)(p.E, {
                variant: "text-md/medium",
                color: c,
                className: iI.td,
                children: (0, r.jsx)(i, { size: "custom", width: 24, height: 24, color: "currentColor" }),
            }),
            title: n,
            className: iI.JC,
            subtitle: `${l.length} users`,
            children: (0, r.jsxs)(Q.B, {
                direction: "vertical",
                gap: 4,
                padding: { left: 24, right: 8, bottom: 16 },
                fullWidth: !1,
                children: [
                    l.map((e, a) =>
                        (0, r.jsxs)(
                            o.Fragment,
                            {
                                children: [
                                    0 !== a && (0, r.jsx)(b.c, { gap: 4 }),
                                    (0, r.jsx)(
                                        q.D,
                                        {
                                            onClick: (a) => {
                                                (a.stopPropagation(),
                                                    (function (e, t) {
                                                        let a = iN.getUser(t);
                                                        if (null == a) throw Error("User not found");
                                                        let n = iN.getPool(e)?.password;
                                                        if (null == n) throw Error("Pool password not found");
                                                        if (null == a.email) throw Error("User email not found");
                                                        ig.A.login({
                                                            login: a.email,
                                                            password: n,
                                                            isMultiAccount: !0,
                                                            source: "generated_test_user",
                                                        }).catch(
                                                            () => (iv.A.showFailedToast(iA.OB.GENERIC_ERROR), null),
                                                        );
                                                    })(t.id, e.id));
                                            },
                                            "aria-disabled": s === e.id,
                                            className: Y()(iI.vk, { [iI.Pe]: s === e.id }),
                                            children: (0, r.jsxs)(
                                                Q.B,
                                                {
                                                    direction: "horizontal",
                                                    align: "center",
                                                    justify: "space-between",
                                                    gap: 8,
                                                    padding: { right: 8 },
                                                    fullWidth: !1,
                                                    children: [
                                                        (0, r.jsxs)(Q.B, {
                                                            direction: "horizontal",
                                                            align: "center",
                                                            gap: 8,
                                                            fullWidth: !1,
                                                            className: Y()({ [iI.WP]: s === e.id }),
                                                            children: [
                                                                (0, r.jsx)(s3.UserIcon, {
                                                                    size: "custom",
                                                                    width: 20,
                                                                    height: 20,
                                                                    color: "currentColor",
                                                                }),
                                                                (0, r.jsxs)("div", {
                                                                    children: [
                                                                        (0, r.jsx)(p.E, {
                                                                            variant: "text-sm/normal",
                                                                            color: "text-default",
                                                                            children: e.username,
                                                                        }),
                                                                        (0, r.jsx)(p.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: iI.c1,
                                                                            children: e.email,
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        s === e.id
                                                            ? (0, r.jsx)(p.E, {
                                                                  variant: "text-sm/normal",
                                                                  color: "text-feedback-positive",
                                                                  children: (0, r.jsx)(ih.y, {
                                                                      size: "sm",
                                                                      color: "currentColor",
                                                                  }),
                                                              })
                                                            : (0, r.jsx)(ix._, { size: "sm", color: "currentColor" }),
                                                    ],
                                                },
                                                e.id,
                                            ),
                                        },
                                        e.id,
                                    ),
                                ],
                            },
                            e.id,
                        ),
                    ),
                    (0, r.jsx)("div", {
                        className: iI.UD,
                        children: (0, r.jsx)(x.$, {
                            icon: nV.TrashIcon,
                            text: "",
                            size: "sm",
                            variant: "secondary",
                            onClick: u,
                        }),
                    }),
                ],
            }),
        }),
    });
}
function iM() {
    let e = (0, d.yK)([iN], () => iN.getPools() ?? []);
    return (0, r.jsxs)(Q.B, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: iI.kL,
        children: [
            (0, r.jsx)(iR, {}),
            (0, r.jsx)(g.Ip, { className: iI.Ik, children: e?.map((e) => (0, r.jsx)(iw, { pool: e }, e.id)) }),
        ],
    });
}
var iL = a(582306),
    iP = a(507104),
    iU = a(846466);
function iG(e) {
    let t = new Date(e);
    return (
        t.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " " +
        t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 })
    );
}
function iB(e, t) {
    return null != t ? `/users/@me/gift-intents/dismissals/${e}/${t}` : `/users/@me/gift-intents/dismissals/${e}`;
}
let iF = tP.np.FRIEND_ANNIVERSARY;
function i$(e) {
    return 403 === e?.status
        ? "Forbidden (403). This account is likely not in the backend-persistence experiment; clearing also requires a staff account."
        : e instanceof Error
          ? e.message
          : String(e);
}
function iV() {
    let e = (0, d.bG)([iP.Ay], () => iP.Ay.getDevToolTotalFriendAnniversaries()),
        t = (0, d.bG)([iP.Ay], () => iP.Ay.getDevToolCurrentDate()),
        a = (0, d.bG)([iP.Ay], () => iP.Ay.getMessageGiftIntentLastShownMap()),
        n = (0, d.bG)([iP.Ay], () => iP.Ay.getHighestAffinityFriendAnniversaries()),
        l = (0, d.bG)([iP.Ay], () => iP.Ay.getHighAffinityFriendAnniversaries()),
        s = (0, d.bG)([ec.default], () => ec.default.getCurrentUser()?.isStaff() ?? !1),
        i = (0, d.bG)(
            [aY.A],
            () => aY.A.getFriendIDs().filter((e) => !aY.A.isIgnored(e) && null != aY.A.getSince(e)).length,
        ),
        c = (0, d.bG)([aP.A], () => {
            let e = Number(aP.A.settings.userContent?.lastGiftIntentDismissedAtMs ?? "0");
            return Number.isNaN(e) || 0 === e ? null : e;
        }),
        [u, m] = o.useState([]),
        [h, v] = o.useState(null),
        [f, b] = o.useState(!1),
        [y, E] = o.useState(!1),
        [C, _] = o.useState(!1),
        [S, N] = o.useState(void 0),
        A = o.useCallback(async () => {
            E(!0);
            try {
                let { body: e } = await l7.Bo.get({ url: "/users/@me/gift-intent-dismissals", rejectWithError: !0 });
                (m(e.dismissals ?? []), v(null), b(!1));
            } catch (t) {
                let e = t.status;
                (v(i$(t)), b(403 === e), 403 === e && m([]));
            } finally {
                E(!1);
            }
        }, []);
    async function k(e) {
        _(!0);
        try {
            (await e(), v(null), await A());
        } catch (e) {
            v(i$(e));
        } finally {
            _(!1);
        }
    }
    o.useEffect(() => {
        A();
    }, [A, c]);
    let D = u.filter((e) => e.intent_type === iF),
        I = new Map(D.map((e) => [e.target_id, Number(e.dismissed_at_ms)])),
        T = Array.from(new Set([...Object.keys(a), ...I.keys()])),
        O = Array.from(new Set([...n, ...l])),
        R = O.map((e) => ({ id: e, value: e, label: ec.default.getUser(e)?.username ?? `Unknown User (${e})` })),
        w = y || C;
    function M(e) {
        tM.h.dispatch({ type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: e });
    }
    function L(e) {
        let t = nD.A.getUserAffinity(e);
        return t?.dmProbability != null ? `${(100 * t.dmProbability).toFixed(3)}%` : "N/A";
    }
    return (0, r.jsx)(g.Ip, {
        className: tZ.nd,
        children: (0, r.jsxs)("div", {
            className: iU.l$,
            children: [
                (0, r.jsx)(p.E, { className: iU.Iv, variant: "text-lg/bold", children: "Friend Anniversary" }),
                (0, r.jsx)("div", {
                    className: iU.Pm,
                    children: (0, r.jsxs)(Q.B, {
                        gap: 8,
                        direction: "horizontal",
                        style: { flex: 1 },
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Number of anniversaries to generate",
                                selectionMode: "single",
                                options: [
                                    { id: "none", label: "None", value: null },
                                    { id: "1", label: "1", value: 1 },
                                    { id: "2", label: "2", value: 2 },
                                    { id: "3", label: "3", value: 3 },
                                    { id: "4", label: "4", value: 4 },
                                    { id: "5", label: "5", value: 5 },
                                    { id: "10", label: "10", value: 10 },
                                    { id: "25", label: "25", value: 25 },
                                ],
                                value: e,
                                onSelectionChange: (e) => {
                                    M(e);
                                },
                            }),
                            (0, r.jsx)(x.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Re-randomize",
                                disabled: null == e,
                                onClick: function () {
                                    tM.h.dispatch({ type: "DEV_TOOLS_RESAMPLE_FRIEND_ANNIVERSARIES" });
                                },
                            }),
                            (0, r.jsx)(x.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Clear",
                                onClick: () => {
                                    M(null);
                                },
                            }),
                        ],
                    }),
                }),
                null != e &&
                    (0, r.jsx)("div", {
                        className: iU.Pm,
                        children: (0, r.jsxs)(Q.B, {
                            gap: 8,
                            children: [
                                0 === i
                                    ? (0, r.jsx)(p.E, {
                                          variant: "text-xs/normal",
                                          color: "text-feedback-warning",
                                          children:
                                              "No friends with an anniversary date, so no anniversaries can be generated.",
                                      })
                                    : (0, r.jsxs)(p.E, {
                                          variant: "text-xs/normal",
                                          children: [
                                              "Generated ",
                                              O.length,
                                              " of ",
                                              e,
                                              " requested",
                                              O.length < e
                                                  ? ` (only ${i} friend${1 === i ? "" : "s"} with an anniversary date).`
                                                  : ".",
                                          ],
                                      }),
                                (0, r.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    children:
                                        "Affinity is the percent chance that User A will DM or GDM User B in the next 7 days.",
                                }),
                                (0, r.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    children:
                                        "The devtool automatically assigns users as high affinity regardless of actual affinity for testing.",
                                }),
                                n.length > 0 &&
                                    (0, r.jsxs)(Q.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(p.E, {
                                                variant: "text-xs/semibold",
                                                children: "Highest Affinity Friend Anniversaries:",
                                            }),
                                            n.map((e) => {
                                                let t = ec.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, r.jsxs)(
                                                    p.E,
                                                    { variant: "text-xs/normal", children: [a, " (", L(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                                l.length > 0 &&
                                    (0, r.jsxs)(Q.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(p.E, {
                                                variant: "text-xs/semibold",
                                                children: "High Affinity Friend Anniversaries:",
                                            }),
                                            l.map((e) => {
                                                let t = ec.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, r.jsxs)(
                                                    p.E,
                                                    { variant: "text-xs/normal", children: [a, " (", L(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                (0, r.jsx)("div", {
                    className: iU.Pm,
                    children: (0, r.jsxs)(Q.B, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, r.jsx)(iL.J, {
                                label: "Override current date used for cooldowns",
                                value: null != t ? nU()(t) : void 0,
                                onSelect: function (e) {
                                    let t = nU()(),
                                        a = e
                                            .clone()
                                            .hours(t.hours())
                                            .minutes(t.minutes())
                                            .seconds(t.seconds())
                                            .milliseconds(t.milliseconds());
                                    tM.h.dispatch({ type: "DEV_TOOLS_SET_CURRENT_DATE", date: a.valueOf() });
                                },
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Clear",
                                onClick: function () {
                                    tM.h.dispatch({ type: "DEV_TOOLS_RESET_CURRENT_DATE" });
                                },
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: iU.Pm,
                    children: [
                        (0, r.jsx)(p.E, {
                            variant: "text-md/normal",
                            children: "Reset gift message cooldown (per-user, 14d)",
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Reset",
                            onClick: function () {
                                tM.h.dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iU.Pm,
                    children: [
                        (0, r.jsx)(p.E, {
                            variant: "text-md/normal",
                            children: "Clear last seen friend anniversaries in All Friends",
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Clear",
                            onClick: function () {
                                tM.h.dispatch({ type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: iU.Pm,
                    children: (0, r.jsxs)(Q.B, {
                        gap: 12,
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(p.E, { variant: "text-md/semibold", children: "Backend dismissal sync" }),
                            (0, r.jsxs)(Q.B, {
                                gap: 4,
                                children: [
                                    f &&
                                        (0, r.jsx)(p.E, {
                                            variant: "text-xs/normal",
                                            color: "text-feedback-warning",
                                            children:
                                                "This account is not in the backend-persistence experiment, so nothing here will persist to the server.",
                                        }),
                                    !s &&
                                        (0, r.jsx)(p.E, {
                                            variant: "text-xs/normal",
                                            color: "text-feedback-warning",
                                            children: "Clearing server dismissals requires a staff account.",
                                        }),
                                    (0, r.jsxs)(p.E, {
                                        variant: "text-xs/normal",
                                        children: [
                                            "Server last recorded a dismissal:",
                                            " ",
                                            null != c ? iG(c) : "never",
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(Q.B, {
                                gap: 8,
                                direction: "horizontal",
                                align: "end",
                                children: [
                                    (0, r.jsx)(x.$, {
                                        size: "sm",
                                        variant: "secondary",
                                        text: "Refresh",
                                        onClick: () => {
                                            A();
                                        },
                                        disabled: w,
                                    }),
                                    (0, r.jsx)(x.$, {
                                        size: "sm",
                                        variant: "primary",
                                        text: "Clear all",
                                        onClick: function () {
                                            k(() => l7.Bo.del({ url: iB(iF), rejectWithError: !0 }));
                                        },
                                        disabled: w || !s || f || 0 === D.length,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(Q.B, {
                                gap: 8,
                                direction: "horizontal",
                                align: "end",
                                children: [
                                    (0, r.jsx)(j.l, {
                                        label: "Dismiss a generated anniversary on the server",
                                        selectionMode: "single",
                                        options: R,
                                        value: S,
                                        onSelectionChange: (e) => {
                                            N(e);
                                        },
                                    }),
                                    (0, r.jsx)(x.$, {
                                        size: "sm",
                                        variant: "secondary",
                                        text: "Dismiss on server",
                                        onClick: function () {
                                            null != S &&
                                                k(() =>
                                                    l7.Bo.post({
                                                        url: "/users/@me/gift-intents/dismiss",
                                                        body: { intent_type: iF, target_id: S },
                                                        rejectWithError: !0,
                                                    }),
                                                );
                                        },
                                        disabled: w || f || null == S,
                                    }),
                                ],
                            }),
                            0 === R.length &&
                                (0, r.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    children: "Generate friend anniversaries above to pick a target to dismiss.",
                                }),
                            null != h &&
                                (0, r.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    color: "text-feedback-critical",
                                    children: h,
                                }),
                            y && (0, r.jsx)(p.E, { variant: "text-xs/normal", children: "Loading..." }),
                            !y &&
                                0 === T.length &&
                                (0, r.jsx)(p.E, {
                                    variant: "text-xs/normal",
                                    children: "No dismissals recorded locally or on the server.",
                                }),
                            !y &&
                                T.length > 0 &&
                                (0, r.jsxs)(Q.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(p.E, {
                                            variant: "text-xs/semibold",
                                            children: "Local vs. server (per friend):",
                                        }),
                                        T.map((e) => {
                                            let t = ec.default.getUser(e),
                                                n = t?.username ?? `Unknown User (${e})`,
                                                l = a[e],
                                                i = I.get(e);
                                            return (0, r.jsxs)(
                                                Q.B,
                                                {
                                                    gap: 8,
                                                    direction: "horizontal",
                                                    justify: "space-between",
                                                    align: "center",
                                                    children: [
                                                        (0, r.jsxs)(p.E, {
                                                            variant: "text-xs/normal",
                                                            children: [
                                                                n,
                                                                ": local ",
                                                                null != l ? iG(l) : "none",
                                                                ", server",
                                                                " ",
                                                                null != i ? iG(i) : "none",
                                                            ],
                                                        }),
                                                        null != i &&
                                                            (0, r.jsx)(x.$, {
                                                                size: "sm",
                                                                variant: "secondary",
                                                                text: "Clear",
                                                                onClick: () => {
                                                                    k(() =>
                                                                        l7.Bo.del({
                                                                            url: iB(iF, e),
                                                                            rejectWithError: !0,
                                                                        }),
                                                                    );
                                                                },
                                                                disabled: w || !s || f,
                                                            }),
                                                    ],
                                                },
                                                e,
                                            );
                                        }),
                                    ],
                                }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
var iW = a(460890),
    iz = a(28863),
    iH = a(517461),
    iK = a(214947),
    iY = a(403581),
    iq = a(34188);
let iJ = [
    "ILLO_BLUE",
    "ILLO_GREEN",
    "ILLO_PINK",
    "ILLO_ORANGE",
    "ILLO_PURPLE",
    "ILLO_YELLOW",
    "BLUE_NEW",
    "GREEN_NEW",
    "NEUTRAL",
    "ORANGE_NEW",
    "RED_NEW",
    "TEAL_NEW",
    "YELLOW_NEW",
];
var iQ = a(277583);
let iX = [0, 0.5, 1],
    iZ = ["Center", "Inner ring", "Outer ring"],
    i0 = iX.length,
    i1 = "ILLO_BLUE",
    i2 = "ILLO_BLUE_40",
    i3 = Array.from({ length: i0 }, () => i2),
    i6 = Array.from({ length: i0 }, () => i1),
    i5 = ["1", "0.5", "0"],
    i8 = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i,
    i4 = [
        { label: "Light", value: ex.NJ8.LIGHT, id: ex.NJ8.LIGHT },
        { label: "Ash", value: ex.NJ8.ASH, id: ex.NJ8.ASH },
        { label: "Dark", value: ex.NJ8.DARK, id: ex.NJ8.DARK },
        { label: "Onyx", value: ex.NJ8.ONYX, id: ex.NJ8.ONYX },
    ],
    i9 = { [ex.NJ8.ASH]: ex.NJ8.DARK, [ex.NJ8.ONYX]: ex.NJ8.DARK, [ex.NJ8.LIGHT]: ex.NJ8.DARK },
    i7 = { [ex.NJ8.LIGHT]: "light", [ex.NJ8.ASH]: "ash", [ex.NJ8.DARK]: "dark", [ex.NJ8.ONYX]: "onyx" },
    re = [
        { id: "friends", icon: iK.$, text: "Friends" },
        { id: "nitro", icon: iY.t, text: "Nitro Home", nitroHoverGradient: !0 },
        { id: "shop", icon: iq.U, text: "Shop", useCustomGradient: !0 },
    ],
    rt = iJ.map((e) => ({ label: e, value: e, id: e })),
    ra = Object.fromEntries(
        iJ.map((e) => [
            e,
            Object.keys(eQ.A.unsafe_rawColors)
                .filter((t) => String(t).startsWith(e + "_"))
                .sort(
                    (e, t) =>
                        parseInt(String(e).split("_").pop() ?? "0", 10) -
                        parseInt(String(t).split("_").pop() ?? "0", 10),
                )
                .map((e) => {
                    let t = String(e).split("_").pop() ?? e,
                        [a, n, l] = eQ.A.unsafe_rawColors[e].resolve().rgba(),
                        s =
                            (0.299 * a + 0.587 * n + 0.114 * l) / 255 > 0.5
                                ? eQ.A.unsafe_rawColors.OPACITY_BLACK_28
                                : eQ.A.unsafe_rawColors.OPACITY_WHITE_28,
                        i = (0, r.jsx)("span", {
                            className: iQ.oP,
                            style: { background: `rgb(${a}, ${n}, ${l})`, border: `1px solid ${s.css}` },
                        });
                    return { label: t, value: e, id: String(e), leading: i };
                }),
        ]),
    );
var rn = a(306327);
function rl(e, t, a) {
    return e.map((e, n) => (n === t ? a : e));
}
function rs(e, t) {
    let [a, n, l, s] = eQ.A.unsafe_rawColors[e].resolve().rgba({ opacity: t });
    return { r: a, g: n, b: l, a: s };
}
function ri(e, t) {
    let a = eQ.A.unsafe_rawColors[e].resolve();
    return null != t ? a.hex({ opacity: t }) : a.hex();
}
function rr(e) {
    let { yaml: t, label: a } = e,
        n = o.useCallback(() => {
            navigator.clipboard.writeText(t);
        }, [t]);
    return (0, r.jsxs)(Q.B, {
        gap: 4,
        children: [
            (0, r.jsxs)(Q.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                justify: "space-between",
                children: [
                    (0, r.jsx)(p.E, { variant: "text-md/semibold", children: a }),
                    (0, r.jsx)(eK.K, {
                        icon: nB.CopyIcon,
                        "aria-label": `Copy ${a} YAML`,
                        onClick: n,
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            (0, r.jsx)("pre", { className: iQ.RP, children: t }),
        ],
    });
}
function ro(e) {
    let { allResolvedStops: t } = e,
        a = o.useMemo(
            () =>
                iZ.map((e, a) => {
                    let n;
                    return (
                        (n = i4
                            .map((e) => {
                                let n,
                                    l,
                                    { value: s } = e,
                                    i = i7[s],
                                    r = t[s];
                                return `  ${i}:
    color: ${-1 === (l = (n = String(r.colors[a]).toLowerCase()).lastIndexOf("_")) ? n.replace(/_/g, "-") : n.slice(0, l).replace(/_/g, "-") + "." + n.slice(l + 1)}
    opacity: ${r.opacities[a]}`;
                            })
                            .join("\n")),
                        `type: background
colors:
${n}
gradient-colors:
  color-mix: false
codegen:
  web: true
  mobile: false`
                    );
                }),
            [t],
        );
    return (0, r.jsxs)(Q.B, {
        gap: 16,
        children: [
            (0, r.jsx)(Z.D, { variant: "heading-sm/semibold", children: "Token YAML" }),
            iZ.map((e, t) => (0, r.jsx)(rr, { yaml: a[t], label: e }, e)),
        ],
    });
}
function rd(e, t, a) {
    let {
            r: n,
            g: l,
            b: s,
            a: i,
        } = (function (e, t) {
            if (t <= e[0].position) {
                let t = e[0];
                return { r: t.r, g: t.g, b: t.b, a: t.opacity };
            }
            for (let a = 0; a < e.length - 1; a++) {
                let n = e[a],
                    l = e[a + 1];
                if (t <= l.position) {
                    if (l.position === n.position) return { r: n.r, g: n.g, b: n.b, a: n.opacity };
                    let e = (t - n.position) / (l.position - n.position);
                    return {
                        r: n.r + (l.r - n.r) * e,
                        g: n.g + (l.g - n.g) * e,
                        b: n.b + (l.b - n.b) * e,
                        a: n.opacity + (l.opacity - n.opacity) * e,
                    };
                }
            }
            let a = e[e.length - 1];
            return { r: a.r, g: a.g, b: a.b, a: a.opacity };
        })(t, a),
        r = 0.5 * i;
    return new rn.A("srgb", [
        (e.r * (1 - r) + n * r) / 255,
        (e.g * (1 - r) + l * r) / 255,
        (e.b * (1 - r) + s * r) / 255,
    ]);
}
function rc(e, t, a) {
    var n;
    let l = a.map((e) => {
            let [t, a, n] = eQ.A.unsafe_rawColors[e.color].resolve().rgba();
            return { r: t, g: a, b: n, opacity: e.opacity, position: e.position };
        }),
        s = 1 / 0;
    for (let a of l) (n = e.contrast(rd(t, l, a.position), "WCAG21")) < s && (s = n);
    for (let a = 0; a < l.length - 1; a++) {
        let { contrast: n } = (function (e, t, a, n, l) {
            let s = 1 / 0,
                i = n;
            for (let r = 0; r <= 100; r++) {
                let o = n + (r / 100) * (l - n),
                    d = a.contrast(rd(e, t, o), "WCAG21");
                d < s && ((s = d), (i = o));
            }
            return { contrast: s, position: i };
        })(t, l, e, l[a].position, l[a + 1].position);
        n < s && (s = n);
    }
    return Math.round(100 * s) / 100;
}
function ru(e) {
    let [t, a, n] = eQ.A.colors.TEXT_DEFAULT.resolve(e).rgba(),
        [l, s, i] = eQ.A.colors.BACKGROUND_BASE_LOWEST.resolve(e).rgba(),
        [r, o, d, c] = eQ.A.colors.INTERACTIVE_BACKGROUND_HOVER.resolve(e).rgba();
    return {
        text: new rn.A("srgb", [t / 255, a / 255, n / 255]),
        background: { r: l * (1 - c) + r * c, g: s * (1 - c) + o * c, b: i * (1 - c) + d * c },
    };
}
function rm() {
    return {
        colors: Array.from({ length: i0 }, () => void 0),
        scales: Array.from({ length: i0 }, () => void 0),
        opacities: Array.from({ length: i0 }, () => void 0),
    };
}
function rh() {
    return {
        [ex.NJ8.LIGHT]: rm(),
        [ex.NJ8.ASH]: { colors: [...i3], scales: [...i6], opacities: [...i5] },
        [ex.NJ8.DARK]: rm(),
        [ex.NJ8.ONYX]: rm(),
    };
}
function rx() {
    let e = (0, iW.G9)(),
        [t, a] = o.useState(ex.NJ8.DARK),
        [n, l] = (0, iH.V)("DevToolsGradientContrastPanel_themeStops", rh()),
        s = n ?? rh(),
        [i, d] = o.useState(["", "", ""]),
        [c, u] = o.useState([null, null, null]),
        [m, h] = o.useState(null),
        { images: v, renderPickers: j } = (function () {
            let [e, t] = o.useState(null),
                a = o.useRef(null),
                n = o.useCallback((e) => {
                    let a = e.target.files?.[0];
                    if (null == a) return;
                    let n = new FileReader();
                    ((n.onload = () => t({ src: n.result, name: a.name })), n.readAsDataURL(a), (e.target.value = ""));
                }, []),
                l = o.useCallback(
                    () =>
                        (0, r.jsxs)(Q.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "center",
                            children: [
                                (0, r.jsx)("input", {
                                    ref: a,
                                    type: "file",
                                    accept: "image/jpeg,image/png,image/gif,image/webp,image/avif",
                                    onChange: n,
                                    style: { display: "none" },
                                }),
                                null != e
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(p.E, { variant: "text-sm/normal", children: e.name }),
                                              (0, r.jsx)(l3.Q, {
                                                  text: "Remove",
                                                  variant: "critical",
                                                  textVariant: "text-sm/medium",
                                                  onClick: () => t(null),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(x.$, {
                                          variant: "secondary",
                                          size: "sm",
                                          text: "Upload button hover image",
                                          onClick: () => a.current?.click(),
                                      }),
                            ],
                        }),
                    [e, n],
                );
            return { images: { buttonBackground: e }, renderPickers: l };
        })(),
        b = o.useMemo(
            () =>
                Object.fromEntries(
                    i4.map((e) => {
                        let { value: t } = e;
                        return [
                            t,
                            (function (e, t) {
                                let a = [],
                                    n = [],
                                    l = [];
                                for (let s = 0; s < i0; s++) {
                                    let i,
                                        r,
                                        o,
                                        d = t;
                                    for (; null != d;) {
                                        let t = e[d];
                                        if (
                                            ((i ??= t.colors[s]),
                                            (r ??= t.scales[s]),
                                            (o ??= t.opacities[s]),
                                            null != i && null != r && null != o)
                                        )
                                            break;
                                        d = i9[d];
                                    }
                                    (a.push(i ?? i3[s]), n.push(r ?? i6[s]), l.push(o ?? i5[s]));
                                }
                                return { colors: a, scales: n, opacities: l };
                            })(s, t),
                        ];
                    }),
                ),
            [s],
        ),
        y = b[t],
        E = o.useCallback(
            (e) => {
                l({ ...s, [t]: e(s[t]) });
            },
            [t, l, s],
        ),
        C = o.useMemo(() => ru({ theme: t, saturation: 1 }), [t]),
        _ = o.useMemo(() => {
            let e = [];
            for (let t = 0; t < i0; t++) {
                let a = parseFloat(y.opacities[t]);
                if (isNaN(a) || a < 0 || a > 1) return null;
                e.push({ color: y.colors[t], opacity: a, position: iX[t] });
            }
            return e;
        }, [y]),
        S = o.useMemo(() => {
            if (null == _) return null;
            let { text: e, background: t } = C;
            return iZ.map((a, n) =>
                ra[y.scales[n]].map((a) => {
                    let l = rc(e, t, rl(_, n, { ..._[n], color: a.value }));
                    return { ...a, trailing: `(${l}:1)` };
                }),
            );
        }, [_, C, y.scales]),
        N = o.useMemo(() => {
            try {
                return i4.map((e) => {
                    let { value: t, label: a } = e,
                        n = b[t],
                        l = [];
                    for (let e = 0; e < i0; e++) {
                        let s = parseFloat(n.opacities[e]);
                        if (isNaN(s) || s < 0 || s > 1) return { theme: t, label: a, result: null };
                        l.push({ color: n.colors[e], opacity: s, position: iX[e] });
                    }
                    return {
                        theme: t,
                        label: a,
                        result: (function (e, t) {
                            let a,
                                { text: n, background: l } = ru(t),
                                s = rc(n, l, e),
                                i = s >= 4.5;
                            if (!i)
                                for (let t = 0; t < e.length; t++) {
                                    let s = (function (e) {
                                        let t = String(e).match(/^(.+)_\d+$/);
                                        if (null == t) return null;
                                        let a = t[1];
                                        return iJ.includes(a) ? a : null;
                                    })(e[t].color);
                                    if (null == s) continue;
                                    let i = parseInt(String(e[t].color).split("_").pop() ?? "0", 10),
                                        r = 1 / 0;
                                    for (let { value: o } of ra[s]) {
                                        if (o === e[t].color) continue;
                                        let s = rc(n, l, rl(e, t, { ...e[t], color: o }));
                                        if (s >= 4.5) {
                                            let e = Math.abs(parseInt(String(o).split("_").pop() ?? "0", 10) - i);
                                            e < r &&
                                                ((r = e),
                                                (a = { stopIndex: t, suggestedColor: o, resultingMinContrast: s }));
                                        }
                                    }
                                }
                            return { passes: i, minContrastRatio: s, suggestion: a };
                        })(l, { theme: t, saturation: 1 }),
                    };
                });
            } catch {
                return null;
            }
        }, [b]);
    return (0, r.jsx)(g.Ar, {
        className: iQ.XG,
        children: (0, r.jsxs)(Q.B, {
            gap: 24,
            padding: 8,
            className: iQ.zr,
            children: [
                (0, r.jsx)(Z.D, {
                    variant: "heading-lg/medium",
                    children: "Tab Hover Gradient Token Generator & Contrast Checker",
                }),
                (0, r.jsxs)(Q.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.E, {
                            variant: "text-md/normal",
                            children:
                                "Checks that tab hover gradients pass WCAG AA (4.5:1) contrast against the text in the tab, accounting for opacities and hover states.",
                        }),
                        (0, r.jsx)(p.E, {
                            variant: "text-sm/normal",
                            children:
                                "Pick colors for each gradient stop (center, inner ring, outer ring) per theme. Each color in the dropdown will show the minimum contrast ratio for the gradient if the color were selected. Dark-family themes inherit: values set on Dark cascade to Darker and Onyx unless overridden.",
                        }),
                        (0, r.jsx)(p.E, {
                            variant: "text-sm/normal",
                            children:
                                "Use the hex field to paste in a hex color \u2014 it will snap to the closest allowed token and show the deltaE distance.",
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            children: [
                                "Copy the generated YAML at the bottom to create your token definitions to be used by the",
                                " ",
                                (0, r.jsx)(iz.Anchor, {
                                    href: "https://design.discord.tools/foundations/color/token-pipeline",
                                    children: "token pipeline",
                                }),
                                ".",
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(a_.Z, {
                    selectionMode: "single",
                    label: "Theme",
                    value: t,
                    onSelectionChange: (e) => a(e),
                    closeOnSelect: !0,
                    options: i4,
                }),
                (0, r.jsxs)(Q.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(Z.D, { variant: "heading-sm/semibold", children: "Gradient Stops" }),
                        (0, r.jsx)("div", {
                            className: iQ.G9,
                            children: iZ.map((e, t) => {
                                let a = "" !== i[t];
                                return (0, r.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            (0, r.jsxs)(Q.B, {
                                                gap: 0,
                                                className: iQ.hi,
                                                children: [
                                                    (0, r.jsx)(p.E, { variant: "text-md/medium", children: e }),
                                                    (0, r.jsx)(l3.Q, {
                                                        variant: "secondary",
                                                        textVariant: "text-xs/normal",
                                                        text: `(${ri(y.colors[t], parseFloat(y.opacities[t]))})`,
                                                        onClick: () =>
                                                            navigator.clipboard.writeText(
                                                                ri(y.colors[t], parseFloat(y.opacities[t])),
                                                            ),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(a_.Z, {
                                                selectionMode: "single",
                                                label: "Scale",
                                                disabled: a,
                                                value: y.scales[t],
                                                onSelectionChange: (e) => {
                                                    let a = ra[e][0]?.value;
                                                    E((n) => ({
                                                        ...n,
                                                        scales: rl(n.scales, t, e),
                                                        colors: null != a ? rl(n.colors, t, a) : n.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: rt,
                                            }),
                                            (0, r.jsx)(a_.Z, {
                                                selectionMode: "single",
                                                label: "Value",
                                                disabled: a,
                                                value: y.colors[t],
                                                onSelectionChange: (e) =>
                                                    E((a) => ({ ...a, colors: rl(a.colors, t, e) })),
                                                closeOnSelect: !0,
                                                options: S?.[t] ?? ra[y.scales[t]],
                                            }),
                                            (0, r.jsx)(f.k, {
                                                label: "Opacity",
                                                name: `opacity-${t}`,
                                                value: y.opacities[t],
                                                onChange: (e) => E((a) => ({ ...a, opacities: rl(a.opacities, t, e) })),
                                                placeholder: "0\u20131",
                                            }),
                                            (0, r.jsx)(f.k, {
                                                label: `Hex${a && null != c[t] ? ` (dE: ${c[t]})` : ""}`,
                                                name: `hex-${t}`,
                                                value: i[t],
                                                onChange: (e) => {
                                                    d((a) => rl(a, t, e));
                                                    let a = (function (e) {
                                                        if (!i8.test(e)) return null;
                                                        try {
                                                            return new rn.A(e.startsWith("#") ? e : `#${e}`);
                                                        } catch {
                                                            return null;
                                                        }
                                                    })(e);
                                                    if (null != a) {
                                                        let e = (function (e) {
                                                            let t = i2,
                                                                a = i1,
                                                                n = 1 / 0;
                                                            for (let l of iJ)
                                                                for (let s of ra[l]) {
                                                                    let i = e.deltaE(
                                                                        (function (e) {
                                                                            let [t, a, n] = eQ.A.unsafe_rawColors[e]
                                                                                .resolve()
                                                                                .rgba();
                                                                            return new rn.A("srgb", [
                                                                                t / 255,
                                                                                a / 255,
                                                                                n / 255,
                                                                            ]);
                                                                        })(s.value),
                                                                        "2000",
                                                                    );
                                                                    i < n && ((n = i), (t = s.value), (a = l));
                                                                }
                                                            return {
                                                                color: t,
                                                                scale: a,
                                                                deltaE: Math.round(100 * n) / 100,
                                                            };
                                                        })(a);
                                                        (u((a) => rl(a, t, e.deltaE)),
                                                            E((a) => ({
                                                                ...a,
                                                                scales: rl(a.scales, t, e.scale),
                                                                colors: rl(a.colors, t, e.color),
                                                            })));
                                                    } else u((e) => rl(e, t, null));
                                                },
                                                placeholder: "#hex",
                                            }),
                                        ],
                                    },
                                    t,
                                );
                            }),
                        }),
                    ],
                }),
                j(),
                (0, r.jsx)(Z.D, { variant: "heading-sm/semibold", children: "Preview" }),
                (0, r.jsx)(iW.GE, {
                    value: { ...e, theme: t },
                    children: (0, r.jsx)(eq.N, {
                        theme: t,
                        children: (e) =>
                            (0, r.jsx)("div", {
                                className: e,
                                children: (0, r.jsx)(Q.B, {
                                    gap: 16,
                                    children: (0, r.jsx)("ul", {
                                        className: iQ.$8,
                                        style: { background: eQ.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: re.map((e, t) =>
                                            (0, r.jsx)(
                                                eE.z9,
                                                {
                                                    route: "",
                                                    selected: m === e.id,
                                                    onClick: () => h(e.id),
                                                    icon: e.icon,
                                                    text: e.text,
                                                    showHoverGradient: !0,
                                                    nitroHoverGradient: "nitroHoverGradient" in e,
                                                    role: "listitem",
                                                    tabIndex: 0,
                                                    onFocus: () => {},
                                                    ...("useCustomGradient" in e && {
                                                        hoverGradientStart: rs(y.colors[0], parseFloat(y.opacities[0])),
                                                        hoverGradientMiddle: rs(
                                                            y.colors[1],
                                                            parseFloat(y.opacities[1]),
                                                        ),
                                                        hoverGradientEnd: rs(y.colors[2], parseFloat(y.opacities[2])),
                                                    }),
                                                    ...{ "data-list-item-id": `devtools-preview-${t}` },
                                                    children:
                                                        "useCustomGradient" in e &&
                                                        v.buttonBackground?.src != null &&
                                                        (0, r.jsx)("div", {
                                                            style: {
                                                                position: "absolute",
                                                                height: "100%",
                                                                bottom: 0,
                                                                insetInlineEnd: 0,
                                                                pointerEvents: "none",
                                                                borderRadius: "inherit",
                                                            },
                                                            children: (0, r.jsx)("img", {
                                                                src: v.buttonBackground.src,
                                                                alt: "",
                                                                "aria-hidden": !0,
                                                                style: {
                                                                    height: "100%",
                                                                    maxWidth: "100%",
                                                                    objectFit: "cover",
                                                                    objectPosition: "bottom right",
                                                                    borderRadius: "inherit",
                                                                },
                                                            }),
                                                        }),
                                                },
                                                e.id,
                                            ),
                                        ),
                                    }),
                                }),
                            }),
                    }),
                }),
                null != N &&
                    (0, r.jsxs)(Q.B, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(Z.D, { variant: "heading-sm/semibold", children: "Results" }),
                            N.map((e) => {
                                let { theme: t, label: a, result: n } = e;
                                return null != n
                                    ? (0, r.jsxs)(
                                          Q.B,
                                          {
                                              gap: 8,
                                              children: [
                                                  (0, r.jsx)(p.E, { variant: "text-md/semibold", children: a }),
                                                  (0, r.jsxs)(J.w, {
                                                      type: n.passes ? "success" : "critical",
                                                      children: [
                                                          n.passes ? "\u2713 Passes" : "\u2717 Fails",
                                                          " WCAG AA \u2014 Min contrast: ",
                                                          n.minContrastRatio,
                                                          " : 1",
                                                      ],
                                                  }),
                                                  !n.passes &&
                                                      null != n.suggestion &&
                                                      (0, r.jsxs)(Q.B, {
                                                          gap: 4,
                                                          children: [
                                                              (0, r.jsx)(p.E, {
                                                                  variant: "text-sm/semibold",
                                                                  children: "Suggestion:",
                                                              }),
                                                              (0, r.jsxs)(p.E, {
                                                                  variant: "text-sm/normal",
                                                                  children: [
                                                                      iZ[n.suggestion.stopIndex],
                                                                      ": ",
                                                                      (0, r.jsx)("strong", {
                                                                          children: n.suggestion.suggestedColor,
                                                                      }),
                                                                      " \u2192",
                                                                      " ",
                                                                      n.suggestion.resultingMinContrast,
                                                                      " : 1",
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                  !n.passes &&
                                                      null == n.suggestion &&
                                                      (0, r.jsx)(p.E, {
                                                          variant: "text-sm/normal",
                                                          children:
                                                              "No single swap from the same color scale would fix the contrast ratio.",
                                                      }),
                                              ],
                                          },
                                          t,
                                      )
                                    : null;
                            }),
                        ],
                    }),
                (0, r.jsx)(ro, { allResolvedStops: b }),
            ],
        }),
    });
}
var rp = a(820739),
    rg = a(230135),
    rv = a(45780),
    rj = a(868652),
    rf = a(859241);
let rb = [
        aM.M.GUILD_POWERUP_PERKS_COACHMARK,
        aM.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        aM.M.GUILD_POWERUP_NOTIFICATION,
        aM.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
        aM.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE,
    ],
    ry = [
        aM.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        aM.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        aM.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        aM.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
        aM.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
    ],
    rE = [aM.V.ADOPT_CLAN_IDENTITY_NOTICE];
function rC(e) {
    switch (e) {
        case aM.V.GUILD_POWERUP_LEVEL_1_COACHMARK:
            return "GUILD_POWERUP_LEVEL_1_COACHMARK";
        case aM.V.GUILD_POWERUP_LEVEL_2_COACHMARK:
            return "GUILD_POWERUP_LEVEL_2_COACHMARK";
        case aM.V.GUILD_POWERUP_LEVEL_3_COACHMARK:
            return "GUILD_POWERUP_LEVEL_3_COACHMARK";
        case aM.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK";
        case aM.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK";
        case aM.V.ADOPT_CLAN_IDENTITY_NOTICE:
            return "ADOPT_CLAN_IDENTITY_NOTICE";
        default:
            return String(e);
    }
}
var r_ = a(374336);
async function rS(e, t, a) {
    (await l7.Bo.patch({
        url: ex.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
        body: { applied_boost_ids: t.map((e) => e.id), ends_at: a ? null : nU()().add(1, "day") },
        rejectWithError: !0,
    }),
        (0, rp.VU)(e),
        (0, rj.Xd)(e, !0));
}
async function rN(e) {
    await l7.Bo.post({ url: ex.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e), rejectWithError: !0 });
}
function rA() {
    let e = (0, d.bG)([nC.A], () => nC.A.getGuildId()),
        t = (0, d.bG)([nE.A], () => nE.A.getGuild(e)?.name),
        a = (0, d.yK)([aP.A], () => [...ry, ...rE].filter((t) => null != e && (0, rv.zs)(t, e))),
        n = (0, d.yK)([rf.A], () => (null != e ? (rf.A.getAppliedGuildBoostsForGuild(e) ?? []) : []));
    if (null != e)
        return (0, r.jsxs)(g.Ip, {
            className: r_.kL,
            children: [
                (0, r.jsx)("div", {
                    className: r_.uW,
                    children: (0, r.jsx)(Z.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                }),
                (0, r.jsxs)("div", {
                    className: r_.uW,
                    children: [
                        (0, r.jsx)(p.E, {
                            variant: "eyebrow",
                            className: r_.wx,
                            children: "Reset Notification Indicators",
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Reset",
                            onClick: () => {
                                (0, rj.qM)();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: r_.uW,
                    children: [
                        (0, r.jsx)(p.E, { variant: "eyebrow", className: r_.wx, children: "Reset Progress Bar State" }),
                        (0, r.jsx)(x.$, { variant: "primary", text: "Reset", onClick: rg.O }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: r_.uW,
                    children: [
                        (0, r.jsx)(p.E, { variant: "eyebrow", children: "Set Warning State" }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Set Half Boosts expiring in 1 day",
                                    onClick: () => {
                                        rS(e, n.slice(Math.floor(n.length / 2)), !1);
                                    },
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        rS(e, n, !0);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: r_.uW,
                    children: [
                        (0, r.jsx)(p.E, { variant: "eyebrow", className: r_.wx, children: "Reset User Level DCs" }),
                        (0, r.jsx)(Q.B, {
                            gap: 16,
                            children: rb.map((e) => (0, r.jsx)(lF, { className: r_.z6, content: aM.M[e] }, aM.M[e])),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: r_.uW,
                    children: (0, r.jsx)(u.n, {
                        label: "Reset Guild Level DCs",
                        children: ry.map((t) =>
                            (0, r.jsx)(
                                m.d,
                                {
                                    label: rC(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, rv._$)(t, e, !1)
                                            : ((0, aL._N)(aM.M.GUILD_POWERUP_NOTIFICATION), (0, rv.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: r_.uW,
                    children: (0, r.jsx)(u.n, {
                        label: "Reset Server Tag Guild Level DCs",
                        children: rE.map((t) =>
                            (0, r.jsx)(
                                m.d,
                                {
                                    label: rC(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, rv._$)(t, e, !1)
                                            : ((0, aL._N)(aM.M.GUILD_POWERUP_NOTIFICATION), (0, rv.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: r_.uW,
                    children: [
                        (0, r.jsx)(p.E, {
                            variant: "eyebrow",
                            className: r_.wx,
                            children: "Send Powerups System Message",
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                rN(e);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(x.$, {
                    variant: "primary",
                    text: "Reset GameServer ToS",
                    onClick: () => {
                        (0, sJ.Wp)(!1);
                    },
                }),
            ],
        });
}
var rk = a(450510),
    rD = a(648048);
function rI(e) {
    let { hotspotLocation: t } = e,
        [a, n] = (0, d.yK)([rk.HP], () => [rk.HP.hasHotspot(t, !0), rk.HP.getHotspotOverride(t)]);
    return (0, r.jsx)(j.l, {
        label: t,
        errorMessage: a ? "Inactive" : void 0,
        successMessage: a ? "Active" : void 0,
        value: n,
        options: [
            { id: "none", value: void 0, label: "No Override" },
            { id: "active", value: !0, label: "Force Active" },
            { id: "inactive", value: !1, label: "Force Inactive" },
        ],
        onSelectionChange: (e) => (null != e ? (0, rk.Kl)(t, e) : (0, rk.LF)(t)),
        selectionMode: "single",
        fullWidth: !0,
    });
}
function rT() {
    return (0, r.jsx)(g.Ip, {
        className: tZ.nd,
        children: (0, r.jsx)(u.n, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: rD.IN,
            children: (0, r.jsx)(Q.B, {
                gap: 20,
                children: Object.keys(rk._2)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, r.jsx)(rI, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
var rO = a(632296),
    rR = a(855522),
    rw = a(37646),
    rM = a(773669);
function rL() {
    let e = (0, d.bG)([rM.default], () => rM.default.locale),
        [t, a] = o.useState(),
        n = (0, rO.runtimeHashMessageKey)(t ?? ""),
        l = o.useMemo(() => nS.t[n], [n]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(ni.Ay, {
                children: [
                    (0, r.jsx)(ni.Ay.Icon, { icon: rw.U, tooltip: "Locale" }),
                    (0, r.jsx)(ni.Ay.Title, { children: "Locale" }),
                ],
            }),
            (0, r.jsxs)(n8, {
                children: [
                    (0, r.jsx)(n4, { name: "Active System", children: "@discord/intl" }),
                    (0, r.jsx)(n4, { name: "App", children: e }),
                    (0, r.jsx)(n4, { name: "System", children: nS.systemLocale }),
                    (0, r.jsx)(n4, { name: "@discord/intl", children: nS.intl.currentLocale }),
                    (0, r.jsx)(n4, { name: "common i18n", children: rR.A.getLocale() }),
                    (0, r.jsx)(n4, { name: "Moment", children: nU().locale() }),
                ],
            }),
            (0, r.jsxs)(ni.Ay, {
                children: [
                    (0, r.jsx)(ni.Ay.Icon, { icon: rw.U, tooltip: "Messages" }),
                    (0, r.jsx)(ni.Ay.Title, { children: "New System Messages" }),
                ],
            }),
            (0, r.jsx)(n8, {
                children: (0, r.jsx)(n4, { name: "Unique Rendered Main Messages", children: Object.keys(nS.t).length }),
            }),
            (0, r.jsx)("div", {
                style: { margin: 16 },
                children: (0, r.jsx)(f.k, {
                    onChange: function (e) {
                        a(e);
                    },
                    name: "Message name",
                    placeholder: "Find a message",
                }),
            }),
            (0, r.jsxs)(n8, {
                children: [
                    (0, r.jsx)(n4, { name: "Hashed key", children: n }),
                    (0, r.jsx)(n4, { name: "Exists?", children: null != l ? "yes" : "no" }),
                ],
            }),
            (0, r.jsx)(nr.A, { data: l?.(e) }),
        ],
    });
}
var rP = a(434404);
function rU() {
    let { node: e } = (0, eo.Ay)(rP.F, "");
    return (0, r.jsx)(g.Ip, {
        className: tZ.nd,
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-8)" },
            children: (0, r.jsx)(er.A, { node: e }, e.key),
        }),
    });
}
var rG = a(361158),
    rB = a(80556),
    rF = a(219503),
    r$ = a(665095),
    rV = a(87404);
function rW() {
    return (0, r.jsx)(g.Ip, {
        className: tZ.nd,
        children: (0, r.jsxs)("div", {
            className: sG.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: sG.uW,
                    children: [
                        (0, r.jsx)(Z.D, { variant: "heading-md/semibold", children: "Verification Layer" }),
                        (0, r.jsx)("div", {
                            className: sG.bd,
                            children: (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Open Verification Layer",
                                onClick: function () {
                                    (0, rG.B8)(() => (0, r.jsx)(r$.A, {}), { layerKey: rV._s, Layer: rB.Ay });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: sG.uW,
                    children: [
                        (0, r.jsx)(Z.D, { variant: "heading-md/semibold", children: "Safety Flow" }),
                        (0, r.jsx)("div", {
                            className: sG.bd,
                            children: (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Open Safety Flow",
                                onClick: function () {
                                    (0, rG.B8)(
                                        (e) => {
                                            let { closeLayer: t } = e;
                                            return (0, r.jsx)(rF.A, { onClose: t });
                                        },
                                        { layerKey: rV._s, Layer: rB.Ay },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: sG.uW,
                    children: [
                        (0, r.jsx)(Z.D, { variant: "heading-md/semibold", children: "Layer Controls" }),
                        (0, r.jsx)("div", {
                            className: sG.bd,
                            children: (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Close All Layers",
                                onClick: function () {
                                    rG.xr.setState({ fullScreenLayers: [] });
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
(a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162));
var rz = a(687813),
    rH = a(604121);
let rK = {
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_Messages_Opt.lottie":
        () => a.e("136508").then(a.t.bind(a, 655671, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_Notifications_Opt.lottie":
        () => a.e("405252").then(a.t.bind(a, 323823, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_Servers_CombinedEE.lottie":
        () => a.e("565154").then(a.t.bind(a, 670649, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_Servers_Opt.lottie":
        () => a.e("277248").then(a.t.bind(a, 342787, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_You_Opt.lottie": () =>
        a.e("393401").then(a.t.bind(a, 959328, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Requests_Messages.lottie": () =>
        a.e("748614").then(a.t.bind(a, 713893, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Activities.lottie": () =>
        a.e("32431").then(a.t.bind(a, 857778, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/AppsIcon.lottie": () =>
        a.e("337415").then(a.t.bind(a, 996858, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Camera.lottie": () =>
        a.e("475913").then(a.t.bind(a, 999344, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Deafen.lottie": () =>
        a.e("61309").then(a.t.bind(a, 433356, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/EndCall.lottie": () =>
        a.e("727847").then(a.t.bind(a, 72922, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/GIF.lottie": () =>
        a.e("932886").then(a.t.bind(a, 456309, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Gift.lottie": () =>
        a.e("243734").then(a.t.bind(a, 733813, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Microphone.lottie": () =>
        a.e("926620").then(a.t.bind(a, 890007, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/OrbsEarnSpend.lottie": () =>
        a.e("492568").then(a.t.bind(a, 149707, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/OrbsEarnSpendLightTheme.lottie": () =>
        a.e("282715").then(a.t.bind(a, 147734, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Screenshare.lottie": () =>
        a.e("829721").then(a.t.bind(a, 218048, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Settings.lottie": () =>
        a.e("494483").then(a.t.bind(a, 155806, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Soundboard.lottie": () =>
        a.e("350115").then(a.t.bind(a, 535662, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Sticker.lottie": () =>
        a.e("897473").then(a.t.bind(a, 956248, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Waveform.lottie": () =>
        a.e("665373").then(a.t.bind(a, 914028, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge01.lottie":
        () => a.e("875199").then(a.t.bind(a, 904066, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge02.lottie":
        () => a.e("633900").then(a.t.bind(a, 185319, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge03.lottie":
        () => a.e("665405").then(a.t.bind(a, 743372, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge06.lottie":
        () => a.e("227648").then(a.t.bind(a, 195011, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge09.lottie":
        () => a.e("729095").then(a.t.bind(a, 619578, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge12.lottie":
        () => a.e("994131").then(a.t.bind(a, 676574, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge15.lottie":
        () => a.e("765404").then(a.t.bind(a, 384407, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge18.lottie":
        () => a.e("911817").then(a.t.bind(a, 110320, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge24.lottie":
        () => a.e("284996").then(a.t.bind(a, 248476, 17)),
    "discord_common/js/shared/animations/app/gifts/seasonal/box/box-action.lottiejson": () =>
        a.e("719534").then(a.t.bind(a, 87037, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/box/box-idle.lottiejson": () =>
        a.e("812250").then(a.t.bind(a, 553998, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/box/box-loop.lottiejson": () =>
        a.e("58526").then(a.t.bind(a, 138157, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/cake/cake-action.lottiejson": () =>
        a.e("964376").then(a.t.bind(a, 37259, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/cake/cake-idle.lottiejson": () =>
        a.e("730800").then(a.t.bind(a, 683891, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/cake/cake-loop.lottiejson": () =>
        a.e("852436").then(a.t.bind(a, 45887, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/chest/chest-action.lottiejson": () =>
        a.e("403086").then(a.t.bind(a, 118301, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/chest/chest-idle.lottiejson": () =>
        a.e("437690").then(a.t.bind(a, 733057, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/chest/chest-loop.lottiejson": () =>
        a.e("582078").then(a.t.bind(a, 553101, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/coffee/coffee-action.lottiejson": () =>
        a.e("751992").then(a.t.bind(a, 558251, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/coffee/coffee-idle.lottiejson": () =>
        a.e("264400").then(a.t.bind(a, 94995, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/coffee/coffee-loop.lottiejson": () =>
        a.e("239476").then(a.t.bind(a, 367327, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/gift_icon/seasonal-gifting-wumpus-action.lottiejson":
        () => a.e("827568").then(a.t.bind(a, 579571, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/gift_icon/seasonal-gifting-wumpus-loop.lottiejson":
        () => a.e("525676").then(a.t.bind(a, 322151, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/seasonal_wumpus/seasonal-wumpus-action.lottiejson":
        () => a.e("710803").then(a.t.bind(a, 27870, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/seasonal_wumpus/seasonal-wumpus-idle.lottiejson":
        () => a.e("410191").then(a.t.bind(a, 837074, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/seasonal_wumpus/seasonal-wumpus-loop.lottiejson":
        () => a.e("761223").then(a.t.bind(a, 547450, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/nitroween/halloween-action.lottiejson": () =>
        a.e("969842").then(a.t.bind(a, 809865, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/nitroween/halloween-idle.lottiejson": () =>
        a.e("699166").then(a.t.bind(a, 334829, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/box/box-action.lottiejson": () =>
        a.e("698287").then(a.t.bind(a, 380082, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/box/box-idle.lottiejson": () =>
        a.e("212427").then(a.t.bind(a, 676614, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/box/box-loop.lottiejson": () =>
        a.e("831939").then(a.t.bind(a, 900110, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/cake/cake-action.lottiejson": () =>
        a.e("371305").then(a.t.bind(a, 629456, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/cake/cake-idle.lottiejson": () =>
        a.e("170625").then(a.t.bind(a, 254424, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/cake/cake-loop.lottiejson": () =>
        a.e("233449").then(a.t.bind(a, 690576, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/chest/chest-action.lottiejson": () =>
        a.e("346791").then(a.t.bind(a, 690842, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/chest/chest-idle.lottiejson": () =>
        a.e("828115").then(a.t.bind(a, 755678, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/chest/chest-loop.lottiejson": () =>
        a.e("408891").then(a.t.bind(a, 778422, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/coffee/coffee-action.lottiejson": () =>
        a.e("958009").then(a.t.bind(a, 433504, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/coffee/coffee-idle.lottiejson": () =>
        a.e("702897").then(a.t.bind(a, 976584, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/coffee/coffee-loop.lottiejson": () =>
        a.e("252793").then(a.t.bind(a, 858464, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Anime_v01_Lottie.lottiejson": () =>
        a.e("674149").then(a.t.bind(a, 965892, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Arcade_v01.lottiejson": () =>
        a.e("517087").then(a.t.bind(a, 44194, 19)),
    "discord_app/images/burst_reactions/BurstReaction_BlackHoles_v01.lottiejson": () =>
        a.e("4289").then(a.t.bind(a, 141208, 19)),
    "discord_app/images/burst_reactions/BurstReaction_BlastOff_v04.lottiejson": () =>
        a.e("277339").then(a.t.bind(a, 420054, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Crystal_v04.lottiejson": () =>
        a.e("366414").then(a.t.bind(a, 33565, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Fireworks_v03.lottiejson": () =>
        a.e("331165").then(a.t.bind(a, 414956, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Fusion_v03.lottiejson": () =>
        a.e("158541").then(a.t.bind(a, 221340, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Pop_v04.lottiejson": () =>
        a.e("910169").then(a.t.bind(a, 710208, 19)),
    "discord_app/images/burst_reactions/BurstReaction_PowerUp_v05.lottiejson": () =>
        a.e("276601").then(a.t.bind(a, 333984, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Puzzle_v01_Lottie.lottiejson": () =>
        a.e("484163").then(a.t.bind(a, 211342, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Spotlight_v01_Lottie.lottiejson": () =>
        a.e("252029").then(a.t.bind(a, 714316, 19)),
    "discord_app/images/burst_reactions/BurstReaction_StarBlast_v03.lottiejson": () =>
        a.e("623997").then(a.t.bind(a, 851404, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Tube_v01_Lottie.lottiejson": () =>
        a.e("667133").then(a.t.bind(a, 821644, 19)),
    "discord_app/images/burst_reactions/BurstReaction_UFO_v01_Lottie.lottiejson": () =>
        a.e("684765").then(a.t.bind(a, 51244, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Whirlwind_v01_Lottie.lottiejson": () =>
        a.e("235583").then(a.t.bind(a, 668994, 19)),
    "discord_app/images/burst_reactions/mobile/fullscreen/SuperReactions_Mobile_Send_Spotlight_v1.lottiejson": () =>
        a.e("47862").then(a.t.bind(a, 911573, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Anime_v1.lottiejson": () =>
        a.e("946711").then(a.t.bind(a, 23434, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Arcade_v1.lottiejson": () =>
        a.e("751153").then(a.t.bind(a, 743496, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_BlackHoles_v1.lottiejson": () =>
        a.e("32803").then(a.t.bind(a, 252462, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_BlastOff_v1.lottiejson": () =>
        a.e("819842").then(a.t.bind(a, 341529, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Crystal_v1.lottiejson": () =>
        a.e("585529").then(a.t.bind(a, 762464, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Fireworks_v1.lottiejson": () =>
        a.e("697197").then(a.t.bind(a, 47036, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Fusion_v1.lottiejson": () =>
        a.e("192933").then(a.t.bind(a, 279172, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Pop_v1.lottiejson": () =>
        a.e("905560").then(a.t.bind(a, 824888, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_PowerUp_v1.lottiejson": () =>
        a.e("863011").then(a.t.bind(a, 432302, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Puzzle_v1.lottiejson": () =>
        a.e("369845").then(a.t.bind(a, 854420, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Spotlight_v1.lottiejson": () =>
        a.e("888607").then(a.t.bind(a, 997730, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_StarBlast_v2.lottiejson": () =>
        a.e("696874").then(a.t.bind(a, 281073, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Tube_v1.lottiejson": () =>
        a.e("894147").then(a.t.bind(a, 192718, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_UFO_v2.lottiejson": () =>
        a.e("84992").then(a.t.bind(a, 513667, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Whirlwind_v1.lottiejson": () =>
        a.e("349693").then(a.t.bind(a, 754124, 19)),
    "discord_app/modules/guild_member_verification/images/islandMiddleAnimation.lottiejson": () =>
        a.e("244678").then(a.t.bind(a, 144759, 19)),
    "discord_app/modules/premium/web/animations/guild_sidebar_premium_entrypoint_dt.json": () =>
        a.e("515048").then(a.t.bind(a, 366043, 19)),
    "discord_app/modules/premium/web/animations/guild_sidebar_premium_entrypoint_lt.json": () =>
        a.e("612512").then(a.t.bind(a, 789091, 19)),
    "discord_common/js/shared/animations/app/activities/AppsIconWordlePromo.lottiejson": () =>
        a.e("173550").then(a.t.bind(a, 527613, 19)),
    "discord_common/js/shared/animations/app/nearby/nearby.lottiejson": () =>
        a.e("293780").then(a.t.bind(a, 957439, 19)),
    "discord_common/js/shared/animations/app/premium_guild_subscribe/dark.lottiejson": () =>
        a.e("245470").then(a.t.bind(a, 622637, 19)),
    "discord_common/js/shared/animations/app/premium_guild_subscribe/light.lottiejson": () =>
        a.e("23478").then(a.t.bind(a, 262037, 19)),
    "discord_common/js/shared/animations/app/premium_guild_subscription_system_message_easter_egg/index.lottiejson":
        () => a.e("698150").then(a.t.bind(a, 633343, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/hd_streaming.lottiejson": () =>
        a.e("520795").then(a.t.bind(a, 551574, 19)),
    "discord_common/js/shared/animations/app/premium-payment-tier-2/index.lottiejson": () =>
        a.e("869421").then(a.t.bind(a, 548375, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Bubbles_v03.lottiejson": () =>
        a.e("91770").then(a.t.bind(a, 95553, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Portal_v03.lottiejson": () =>
        a.e("196515").then(a.t.bind(a, 178862, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Slime_v02.lottiejson": () =>
        a.e("109302").then(a.t.bind(a, 16341, 19)),
    "discord_app/images/burst_reactions/mobile/fullscreen/SuperReactions_Mobile_Send_Slime_v1.lottiejson": () =>
        a.e("247554").then(a.t.bind(a, 748761, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Bubbles_v2.lottiejson": () =>
        a.e("807739").then(a.t.bind(a, 106870, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Portal_v1.lottiejson": () =>
        a.e("979067").then(a.t.bind(a, 458486, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Slime_v2.lottiejson": () =>
        a.e("924584").then(a.t.bind(a, 388059, 19)),
    "discord_app/modules/app_launcher/native/images/onboarding_glow.lottiejson": () =>
        a.e("507985").then(a.t.bind(a, 9640, 19)),
    "discord_app/modules/global_discovery_apps/discovering-dabatouille-animation.lottiejson": () =>
        a.e("995947").then(a.t.bind(a, 604902, 19)),
    "discord_app/modules/guild_boosting/animations/animated_guild_icon.lottiejson": () =>
        a.e("24645").then(a.t.bind(a, 624420, 19)),
    "discord_app/modules/guild_member_verification/images/wavingHandLottieAnimation.lottiejson": () =>
        a.e("515423").then(a.t.bind(a, 155147, 19)),
    "discord_app/modules/guild_onboarding/native/animations/landing.lottiejson": () =>
        a.e("124093").then(a.t.bind(a, 280780, 19)),
    "discord_app/modules/guild_onboarding/web/animations/balloon-dog.lottiejson": () =>
        a.e("225961").then(a.t.bind(a, 739408, 19)),
    "discord_app/modules/guild_onboarding/web/animations/bubble-island-02.lottiejson": () =>
        a.e("187356").then(a.t.bind(a, 194199, 19)),
    "discord_app/modules/guild_onboarding/web/animations/grilling-island-02.lottiejson": () =>
        a.e("556026").then(a.t.bind(a, 113473, 19)),
    "discord_app/modules/guild_onboarding/web/animations/main-island-02.lottiejson": () =>
        a.e("416301").then(a.t.bind(a, 694268, 19)),
    "discord_app/modules/guild_onboarding/web/animations/waffle-island-02.lottiejson": () =>
        a.e("722191").then(a.t.bind(a, 896018, 19)),
    "discord_app/modules/poggermode/images/enable_animation.lottiejson": () =>
        a.e("504660").then(a.t.bind(a, 662336, 19)),
    "discord_app/modules/premium/powerups/web/images/server_boost_highlight.json": () =>
        a.e("867807").then(a.t.bind(a, 217762, 19)),
    "discord_app/modules/quests/images/confetti.lottiejson": () => a.e("40119").then(a.t.bind(a, 718698, 19)),
    "discord_app/modules/quests/web/images/quest_bar_background.json": () =>
        a.e("837316").then(a.t.bind(a, 599279, 19)),
    "discord_app/modules/quests/web/images/quest_bar_sparkle.json": () => a.e("897536").then(a.t.bind(a, 478979, 19)),
    "discord_app/modules/self_mod/inappropriate_conversation/images/vibing_wumpus.lottiejson": () =>
        a.e("114823").then(a.t.bind(a, 718074, 19)),
    "discord_common/js/shared/animations/app/everyone_popout/dark.lottiejson": () =>
        a.e("480467").then(a.t.bind(a, 661022, 19)),
    "discord_common/js/shared/animations/app/everyone_popout/light.lottiejson": () =>
        a.e("892705").then(a.t.bind(a, 111992, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/coachmark/seasonal-gifting-coachmark.lottiejson":
        () => a.e("561250").then(a.t.bind(a, 762361, 19)),
    "discord_common/js/shared/animations/app/playstation/playstation_connecting.lottiejson": () =>
        a.e("435066").then(a.t.bind(a, 844512, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/emoji.lottiejson": () =>
        a.e("717124").then(a.t.bind(a, 616175, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/interstitial_wheel_dark.lottiejson": () =>
        a.e("394675").then(a.t.bind(a, 735678, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/interstitial_wheel_light.lottiejson": () =>
        a.e("278465").then(a.t.bind(a, 247704, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/profile_customization.lottiejson": () =>
        a.e("762807").then(a.t.bind(a, 202282, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/unlock.lottiejson": () =>
        a.e("131838").then(a.t.bind(a, 650125, 19)),
    "discord_common/js/shared/animations/app/premium_marketing/index.lottiejson": () =>
        a.e("406954").then(a.t.bind(a, 186910, 19)),
    "discord_common/js/shared/animations/app/premium_payment_guild/index.lottiejson": () =>
        a.e("945870").then(a.t.bind(a, 738503, 19)),
    "discord_common/js/shared/animations/app/premium-activated-tier-1/premium-activated-tier-1.lottiejson": () =>
        a.e("505642").then(a.t.bind(a, 242993, 19)),
    "discord_common/js/shared/animations/app/premium-payment-tier-0/index.lottiejson": () =>
        a.e("678503").then(a.t.bind(a, 635489, 19)),
    "discord_common/js/shared/animations/app/premium-payment-tier-1/index.lottiejson": () =>
        a.e("119898").then(a.t.bind(a, 262546, 19)),
    "discord_common/js/shared/animations/app/xbox/voice_connect.lottiejson": () =>
        a.e("40348").then(a.t.bind(a, 971799, 19)),
    "discord_common/js/shared/animations/app/xbox/xbox_connecting.lottiejson": () =>
        a.e("876121").then(a.t.bind(a, 709376, 19)),
};
function rY(e) {
    let { default: t } = e;
    return fetch(t)
        .then((e) => e.arrayBuffer())
        .then(
            (e) =>
                new Promise((t, a) => {
                    let n = new Uint8Array(e);
                    rz.$1(n, (e, n) => {
                        null != e && a(e);
                        let l = Object.keys(n).reduce((e, t) => ({ ...e, [t]: JSON.parse(rz.he(n[t])) }), {}),
                            s = l["manifest.json"];
                        t(l[`animations/${s.animations[0].id}.json`]);
                    });
                }),
        );
}
function rq() {
    let [e, t] = o.useState(void 0),
        [a, n] = o.useState(400),
        [l, s] = o.useState(400);
    return (0, r.jsx)("div", {
        style: { margin: 24 },
        children: (0, r.jsxs)(Q.B, {
            gap: 24,
            children: [
                (0, r.jsx)(a_.Z, {
                    options: Object.keys(rK).map((e) => ({ id: e, label: e, value: e })),
                    value: e,
                    onSelectionChange: t,
                    selectionMode: "single",
                }),
                (0, r.jsxs)(Q.B, {
                    gap: 8,
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(f.k, { value: a.toString(), onChange: (e) => n(Number(e)), label: "Width" }),
                        (0, r.jsx)(f.k, { value: l.toString(), onChange: (e) => s(Number(e)), label: "Height" }),
                    ],
                }),
                (0, r.jsx)(x.$, {
                    size: "sm",
                    disabled: null == e,
                    onClick: async () => {
                        if (null == e) return;
                        let t = rK[e],
                            a = new Blob(
                                [
                                    JSON.stringify(
                                        e.endsWith(".lottie")
                                            ? await t().then(rY).then(e3().cloneDeep)
                                            : await t().then((e) => e3().cloneDeep(e.default)),
                                    ),
                                ],
                                { type: "application/json" },
                            ),
                            n = URL.createObjectURL(a),
                            l = document.createElement("a");
                        ((l.href = n),
                            (l.download = `${e.split("/").pop()}.json`),
                            document.body.appendChild(l),
                            l.click(),
                            document.body.removeChild(l),
                            URL.revokeObjectURL(n));
                    },
                    text: "Download",
                }),
                null != e &&
                    (0, r.jsx)("div", {
                        style: { width: a, height: l },
                        children: (0, r.jsx)(
                            rH.a,
                            {
                                importData: () => {
                                    let t = rK[e];
                                    return e.endsWith(".lottie")
                                        ? t().then(rY).then(e3().cloneDeep)
                                        : t().then((e) => e3().cloneDeep(e.default));
                                },
                            },
                            e,
                        ),
                    }),
            ],
        }),
    });
}
var rJ = a(442433),
    rQ = a(395671);
let rX = {
        ClipsContextMenu: async () => {
            let { default: e } = await a.e("344751").then(a.bind(a, 575538));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        ActivityPopoutHeaderOverflowMenu: async () => {
            let { default: e } = await a.e("832986").then(a.bind(a, 728033)),
                t = new rQ.kJ({
                    id: "123456789",
                    name: "Test Activity",
                    icon: null,
                    description: "A test activity for devtools",
                    type: 1,
                    coverImage: void 0,
                    primarySkuId: void 0,
                    bot: void 0,
                    splash: void 0,
                    thirdPartySkus: [],
                    isMonetized: !1,
                    isVerified: !1,
                    roleConnectionsVerificationUrl: void 0,
                    parentId: void 0,
                    connectionEntrypointUrl: void 0,
                });
            return () => (0, r.jsx)(e, { application: t, channelId: "987654321", onClose: rJ.Z_ });
        },
        GuildChannelListContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("309004"), a.e("419690"), a.e("845322"), a.e("110758")]).then(
                    a.bind(a, 455557),
                ),
                t = Object.values(nE.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
        },
        GuildContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e("876364"),
                    a.e("996907"),
                    a.e("8159"),
                    a.e("361922"),
                    a.e("403032"),
                    a.e("684290"),
                    a.e("301850"),
                    a.e("936875"),
                    a.e("862179"),
                    a.e("722784"),
                    a.e("906470"),
                    a.e("774550"),
                    a.e("923981"),
                    a.e("331696"),
                    a.e("806391"),
                    a.e("803511"),
                    a.e("424216"),
                    a.e("840100"),
                    a.e("22865"),
                    a.e("173896"),
                    a.e("57358"),
                    a.e("722765"),
                    a.e("33909"),
                    a.e("754596"),
                    a.e("357625"),
                    a.e("308093"),
                    a.e("401106"),
                    a.e("498589"),
                    a.e("21486"),
                    a.e("304419"),
                    a.e("45268"),
                    a.e("617281"),
                    a.e("733199"),
                    a.e("259465"),
                    a.e("655327"),
                    a.e("335532"),
                    a.e("138545"),
                    a.e("536490"),
                    a.e("463455"),
                    a.e("403655"),
                    a.e("317615"),
                    a.e("577154"),
                    a.e("877730"),
                    a.e("611899"),
                    a.e("527552"),
                    a.e("769266"),
                    a.e("487873"),
                    a.e("765626"),
                    a.e("683302"),
                    a.e("660608"),
                    a.e("744554"),
                    a.e("941827"),
                    a.e("923972"),
                    a.e("323423"),
                    a.e("331212"),
                    a.e("638259"),
                    a.e("635958"),
                    a.e("683621"),
                    a.e("711162"),
                    a.e("275179"),
                    a.e("289789"),
                    a.e("116125"),
                    a.e("977412"),
                    a.e("19385"),
                    a.e("692811"),
                    a.e("249681"),
                    a.e("869047"),
                    a.e("996382"),
                    a.e("771657"),
                    a.e("122218"),
                    a.e("309004"),
                    a.e("449145"),
                    a.e("430997"),
                    a.e("728136"),
                    a.e("343116"),
                    a.e("216084"),
                    a.e("273669"),
                    a.e("284819"),
                    a.e("466147"),
                    a.e("50342"),
                    a.e("428235"),
                    a.e("161058"),
                    a.e("333097"),
                    a.e("409391"),
                    a.e("115368"),
                    a.e("810262"),
                    a.e("346313"),
                    a.e("463726"),
                    a.e("256373"),
                    a.e("343233"),
                    a.e("756684"),
                    a.e("419690"),
                    a.e("583827"),
                    a.e("806354"),
                    a.e("556026"),
                    a.e("416301"),
                    a.e("722191"),
                    a.e("225961"),
                    a.e("359702"),
                    a.e("708364"),
                    a.e("452823"),
                    a.e("8422"),
                    a.e("779348"),
                    a.e("647011"),
                    a.e("269178"),
                    a.e("553584"),
                    a.e("466913"),
                    a.e("583518"),
                    a.e("752695"),
                    a.e("71719"),
                    a.e("893767"),
                    a.e("213848"),
                    a.e("39214"),
                    a.e("588307"),
                    a.e("514878"),
                    a.e("676376"),
                    a.e("426508"),
                    a.e("361347"),
                    a.e("842935"),
                    a.e("73091"),
                    a.e("37786"),
                    a.e("886692"),
                    a.e("916373"),
                    a.e("528038"),
                    a.e("324484"),
                    a.e("925172"),
                    a.e("232347"),
                    a.e("8458"),
                    a.e("11810"),
                    a.e("591977"),
                    a.e("890152"),
                    a.e("174337"),
                    a.e("646570"),
                    a.e("287973"),
                    a.e("357197"),
                    a.e("314863"),
                    a.e("623386"),
                    a.e("384951"),
                    a.e("560165"),
                    a.e("712390"),
                    a.e("71167"),
                    a.e("113446"),
                    a.e("637038"),
                    a.e("161309"),
                    a.e("694529"),
                    a.e("303807"),
                    a.e("995210"),
                    a.e("156455"),
                    a.e("721300"),
                    a.e("966016"),
                    a.e("218489"),
                    a.e("317699"),
                    a.e("257032"),
                    a.e("772238"),
                    a.e("845322"),
                    a.e("114748"),
                    a.e("426386"),
                    a.e("204665"),
                    a.e("652191"),
                    a.e("314656"),
                    a.e("639855"),
                    a.e("214530"),
                    a.e("149409"),
                    a.e("124468"),
                    a.e("632607"),
                    a.e("935277"),
                ]).then(a.bind(a, 237600)),
                t = Object.values(nE.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
        },
        GuildFolderContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("114748"), a.e("906240")]).then(a.bind(a, 595139));
            return (t) => (0, r.jsx)(e, { ...t, folderId: 1, folderColor: void 0, folderName: void 0, unread: !1 });
        },
        DeveloperContextMenu: async () => {
            let { default: e } = await a.e("715687").then(a.bind(a, 646938));
            return (t) => (0, r.jsx)(e, { ...t, id: "123456789", label: "Copy Test ID" });
        },
        UserSettingsMenu: async () => {
            let { default: e } = await Promise.all([a.e("594045"), a.e("926132"), a.e("44491")]).then(
                a.bind(a, 907206),
            );
            return (t) => (0, r.jsx)(e, { ...t, onClose: rJ.Z_ });
        },
        ExpressionPickerContextMenu: async () => {
            let { default: e } = await a.e("446132").then(a.bind(a, 233503));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        ForumTagContextMenu: async () => {
            let { default: e } = await a.e("432612").then(a.bind(a, 960015)),
                t = { id: "123456789", name: "Test Forum Tag" };
            return () => (0, r.jsx)(e, { tag: t });
        },
        GuildRoleConnectionsModalContextMenu: async () => {
            let { default: e } = await a.e("868001").then(a.bind(a, 699896));
            return (t) =>
                (0, r.jsx)(e, {
                    ...t,
                    roleId: "123456789",
                    onLeaveRole: () => {
                        (console.log("Leave role clicked"), (0, rJ.Z_)());
                    },
                });
        },
        StaffOnlyEntryDebugMenu: async () => {
            let { default: e } = await a.e("789346").then(a.bind(a, 949881)),
                { ContentInventoryEntryType: t } = await Promise.resolve().then(a.bind(a, 681154)),
                { ContentInventoryAuthorType: n } = await Promise.resolve().then(a.bind(a, 6161)),
                l = ec.default.getCurrentUser(),
                s = {
                    id: "mock-entry-123",
                    author_id: l?.id ?? "123456789",
                    author_type: n.USER,
                    content_type: t.PLAYED_GAME,
                    participants: [],
                    traits: [],
                    extra: { type: "played_game_extra", game_name: "Test Game", application_id: "123456789" },
                };
            return () => (0, r.jsx)(e, { entry: s, requestId: "mock-request-123" });
        },
        AddQuestionsContextMenu: async () => {
            let { AddQuestionsContextMenu: e } = await Promise.all([
                    a.e("289789"),
                    a.e("722765"),
                    a.e("11810"),
                    a.e("314656"),
                ]).then(a.bind(a, 892921)),
                t = Object.values(nE.A.getGuilds())[0];
            return null == t
                ? () => null
                : (a) =>
                      (0, r.jsx)(e, {
                          ...a,
                          addFormField: (e) => {
                              (console.log("Add form field:", e), (0, rJ.Z_)());
                          },
                          guild: t,
                          allowTerms: !0,
                      });
        },
        ChannelListThreadContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e("926132"),
                    a.e("955557"),
                    a.e("947502"),
                    a.e("343266"),
                    a.e("965789"),
                    a.e("412255"),
                    a.e("63340"),
                    a.e("65200"),
                    a.e("285802"),
                    a.e("703869"),
                    a.e("51212"),
                    a.e("584615"),
                ]).then(a.bind(a, 612826)),
                t = nE.A.getGuilds(),
                n = null;
            for (let e of Object.values(t)) {
                for (let t of Object.values(aK.A.getMutableGuildChannelsForGuild(e.id))) {
                    let e = aK.A.getAllThreadsForParent(t.id);
                    if (e.length > 0) {
                        n = e[0];
                        break;
                    }
                }
                if (null != n) break;
            }
            return null == n
                ? (console.log("No thread channel found for ChannelListThreadContextMenu"), () => null)
                : (t) => (0, r.jsx)(e, { ...t, channel: n });
        },
        MembersTableSortContextMenu: async () => {
            let { default: e } = await a.e("73091").then(a.bind(a, 779662)),
                t = Object.values(nE.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rJ.Z_ });
        },
        MembersTableJoinTypeContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("323423"), a.e("71719"), a.e("514878"), a.e("966016")]).then(
                    a.bind(a, 316173),
                ),
                t = Object.values(nE.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rJ.Z_ });
        },
    },
    rZ = {
        GuildShopSortOptions: o.lazy(async () => {
            let { default: e } = await Promise.all([a.e("583518"), a.e("255197"), a.e("250974")]).then(
                    a.bind(a, 324269),
                ),
                { default: t } = await a.e("255197").then(a.bind(a, 558060));
            return { default: () => (0, r.jsx)(t, { defaultSortOption: void 0, children: (0, r.jsx)(e, {}) }) };
        }),
    };
function r0() {
    let e = o.useMemo(
            () =>
                Object.keys(rX)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        t = o.useMemo(
            () =>
                Object.keys(rZ)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        i = o.useCallback(
            (e) => {
                null != a && (0, rJ.L3)(e, rX[a]);
            },
            [a],
        ),
        d = null != l ? rZ[l] : null;
    return (0, r.jsx)(g.Ip, {
        className: tZ.nd,
        children: (0, r.jsxs)(Q.B, {
            className: sG.l$,
            gap: 16,
            children: [
                (0, r.jsxs)(Q.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.E, { variant: "eyebrow", children: "Context Menus" }),
                        (0, r.jsx)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a menu and click Open to trigger it as a context menu at the button position.",
                        }),
                    ],
                }),
                (0, r.jsxs)(Q.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(a_.Z, {
                            label: "Open a Context Menu",
                            placeholder: "Select a menu",
                            options: e,
                            value: a,
                            onSelectionChange: n,
                            selectionMode: "single",
                        }),
                        (0, r.jsx)(x.$, { variant: "primary", text: "Open", disabled: null == a, onClick: i }),
                    ],
                }),
                (0, r.jsxs)(Q.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.E, { variant: "eyebrow", children: "Popout Menus" }),
                        (0, r.jsx)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a popout menu to render it. Click the rendered button to open the popout.",
                        }),
                    ],
                }),
                (0, r.jsx)(Q.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: (0, r.jsx)(a_.Z, {
                        label: "Render a Popout Menu",
                        placeholder: "Select a popout",
                        options: t,
                        value: l,
                        onSelectionChange: s,
                        selectionMode: "single",
                    }),
                }),
                null != d &&
                    (0, r.jsx)(o.Suspense, {
                        fallback: (0, r.jsx)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "Loading...",
                        }),
                        children: (0, r.jsx)(d, {}),
                    }),
            ],
        }),
    });
}
var r1 = a(253506),
    r2 = a(665260),
    r3 = a(97808),
    r6 = a(778712),
    r5 = a(308528),
    r8 = a(148494),
    r4 = a(571694),
    r9 = a(963852),
    r7 = a(704844),
    oe = a(309010),
    ot = a(645959),
    oa = a(716371),
    on = a(32946);
let ol = [
    { id: "USER_JOIN", value: ex.lAJ.USER_JOIN, label: "User Join" },
    { id: "CHANNEL_PINNED_MESSAGE", value: ex.lAJ.CHANNEL_PINNED_MESSAGE, label: "Channel Pinned Message" },
    { id: "GUILD_BOOST", value: ex.lAJ.GUILD_BOOST, label: "Guild Boost" },
    { id: "GUILD_BOOST_TIER_1", value: ex.lAJ.GUILD_BOOST_TIER_1, label: "Guild Boost Tier 1" },
    { id: "GUILD_BOOST_TIER_2", value: ex.lAJ.GUILD_BOOST_TIER_2, label: "Guild Boost Tier 2" },
    { id: "GUILD_BOOST_TIER_3", value: ex.lAJ.GUILD_BOOST_TIER_3, label: "Guild Boost Tier 3" },
    { id: "THREAD_CREATED", value: ex.lAJ.THREAD_CREATED, label: "Thread Created" },
    { id: "CHANNEL_FOLLOW_ADD", value: ex.lAJ.CHANNEL_FOLLOW_ADD, label: "Channel Follow Add" },
    { id: "STAGE_START", value: ex.lAJ.STAGE_START, label: "Stage Start" },
    { id: "STAGE_END", value: ex.lAJ.STAGE_END, label: "Stage End" },
    { id: "STAGE_SPEAKER", value: ex.lAJ.STAGE_SPEAKER, label: "Stage Speaker" },
    { id: "STAGE_RAISE_HAND", value: ex.lAJ.STAGE_RAISE_HAND, label: "Stage Raise Hand" },
    { id: "STAGE_TOPIC", value: ex.lAJ.STAGE_TOPIC, label: "Stage Topic" },
    { id: "VOICE_SESSION", value: ex.lAJ.VOICE_SESSION, label: "Voice Session" },
    { id: "FRIEND_REQUEST_ACCEPTED", value: ex.lAJ.FRIEND_REQUEST_ACCEPTED, label: "Friend Request Accepted" },
    { id: "GUILD_DISCOVERY_DISQUALIFIED", value: ex.lAJ.GUILD_DISCOVERY_DISQUALIFIED, label: "Discovery Disqualified" },
    { id: "GUILD_DISCOVERY_REQUALIFIED", value: ex.lAJ.GUILD_DISCOVERY_REQUALIFIED, label: "Discovery Requalified" },
    {
        id: "GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING",
        value: ex.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING,
        label: "Discovery Grace Initial Warning",
    },
    {
        id: "GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING",
        value: ex.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING,
        label: "Discovery Grace Final Warning",
    },
    { id: "RECIPIENT_ADD", value: ex.lAJ.RECIPIENT_ADD, label: "Recipient Add" },
    { id: "RECIPIENT_REMOVE", value: ex.lAJ.RECIPIENT_REMOVE, label: "Recipient Remove" },
    { id: "CALL", value: ex.lAJ.CALL, label: "Call" },
];
function os() {
    let [e, t] = o.useState(ex.lAJ.USER_JOIN),
        a = (0, d.bG)([oe.Ay], () => oe.Ay.getChannelId(), []),
        n = o.useCallback(() => {
            if (null == a || null == e) return;
            let t = (0, r9.Ay)({ channelId: a, content: "", type: e, state: ex.cmJ.SENT });
            r8.A.receiveMessage(a, t, !1);
        }, [a, e]),
        l = o.useCallback(() => {
            if (null != a)
                for (let { value: e } of ol) {
                    let t = (0, r9.Ay)({ channelId: a, content: "", type: e, state: ex.cmJ.SENT });
                    r8.A.receiveMessage(a, t, !1);
                }
        }, [a]);
    return (0, r.jsxs)("div", {
        className: on.gs,
        children: [
            (0, r.jsx)(a_.Z, {
                label: "Inject System Message",
                selectionMode: "single",
                options: ol,
                placeholder: "Select type",
                value: e,
                onSelectionChange: t,
            }),
            (0, r.jsx)(x.$, {
                variant: "primary",
                size: "sm",
                text: "Inject",
                onClick: n,
                disabled: null == a || null == e,
            }),
            (0, r.jsx)(x.$, { variant: "secondary", size: "sm", text: "Inject All", onClick: l, disabled: null == a }),
        ],
    });
}
function oi() {
    let e = (0, d.yK)([ot.A], () => ot.A.getSortedChannels()[1]),
        [t, a] = o.useState(e.length > 0 ? e[0].channelId : void 0),
        { selectedChannel: n, options: l } = (0, d.cf)([aK.A, ec.default, aY.A], () => ({
            selectedChannel: aK.A.getChannel(t),
            options: e.map((e) => {
                let t = aK.A.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, aH.m1)(t, ec.default, aY.A) : e.channelId,
                    leading:
                        null != t
                            ? (0, r.jsx)(r3.eu, { src: (0, r4.Y)(t), "aria-hidden": !0, size: r6._3.SIZE_16 })
                            : void 0,
                };
            }),
        })),
        s = o.useCallback(() => {
            if (null == n || !n.isPrivate()) return;
            let e = (0, r2.PQ)(n.recipientFlags ?? 0, r1.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            r7.A.updatePrivateChannelRecipientFlags(n.id, e);
        }, [n]),
        i = !!n?.isPrivate() && (0, r2.Lt)(n.recipientFlags ?? 0, r1.o.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, r.jsxs)("div", {
        className: on.gs,
        children: [
            (0, r.jsx)(a_.Z, {
                label: "In-Game NUX Message for DMs",
                selectionMode: "single",
                options: l,
                placeholder: "Select DM",
                value: t,
                onSelectionChange: a,
            }),
            (0, r.jsx)(x.$, {
                variant: "primary",
                size: "sm",
                text: i ? "Clear NUX Flag" : "Set NUX Flag",
                onClick: s,
                disabled: null == t,
            }),
        ],
    });
}
function or() {
    let e = o.useCallback(() => {
        r5.A.openPrivateChannel({ recipientIds: [oa.K] });
    }, []);
    return (0, r.jsx)(x.$, { variant: "primary", size: "sm", text: "Open System DM", onClick: e });
}
function oo() {
    let e = (0, d.bG)([ns.Ay], () => ns.Ay.allByCategory(ns.xW.MESSAGING), [], d.My).map((e) => {
        let [t, a, { label: n }] = e;
        return (0, r.jsx)(m.d, { label: n, description: t, checked: a, onChange: (e) => s0(t, e) }, t);
    });
    return (0, r.jsxs)("div", {
        className: Y()(tZ.nd, on.nd),
        children: [
            e,
            (0, r.jsx)("div", { className: on.yF }),
            (0, r.jsx)(os, {}),
            (0, r.jsx)("div", { className: on.yF }),
            (0, r.jsx)(oi, {}),
            (0, r.jsx)("div", { className: on.yF }),
            (0, r.jsx)(or, {}),
        ],
    });
}
var od = a(205693),
    oc = a(772707),
    ou = a(150934),
    om = a(598653),
    oh = a(166403),
    ox = a(625494),
    op = a(204925),
    og = a(325278);
let ov = {
    EmailEnterModal: async () => {
        let { default: e } = await a.e("429232").then(a.bind(a, 180275));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: nS.intl.string(nS.t.ZLRYGU),
                confirmButtonText: nS.intl.string(nS.t.PDTjLN),
                confirmButtonVariant: "primary",
            });
    },
    EmailPincodeModal: async () => {
        let { default: e } = await a.e("919840").then(a.bind(a, 79779));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: nS.intl.string(nS.t.H3Q7U8),
                onFormSubmit: () => {},
                onResend: () => {},
                onSuccess: () => {},
                confirmButtonText: nS.intl.string(nS.t["13ofGu"]),
                impression: { impressionName: ip.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
            });
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await Promise.all([a.e("469663"), a.e("518467")]).then(a.bind(a, 297102));
        return (t) => (0, r.jsx)(e, { ...t, entryPoint: nw.q1.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL });
    },
    ExistingUserAgeGatePrompt: async () => {
        let { default: e } = await Promise.all([a.e("533651"), a.e("682758"), a.e("280022"), a.e("810136")]).then(
            a.bind(a, 776971),
        );
        return (t) => (0, r.jsx)(e, { ...t, source: op.w_.NSFW_SERVER });
    },
    ExistingUserAgeGateUnderage: async () => {
        let { default: e } = await a.e("280959").then(a.bind(a, 784578));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NewUserAgeGate: async () => {
        let { default: e } = await Promise.all([
            a.e("533651"),
            a.e("682758"),
            a.e("319623"),
            a.e("280022"),
            a.e("401143"),
        ]).then(a.bind(a, 284778));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NUFModal: async () => {
        let { default: e } = await Promise.all([
            a.e("140606"),
            a.e("122326"),
            a.e("533651"),
            a.e("944492"),
            a.e("419580"),
            a.e("197804"),
            a.e("756856"),
            a.e("682758"),
            a.e("999574"),
            a.e("280022"),
            a.e("250475"),
            a.e("993265"),
            a.e("258118"),
        ]).then(a.bind(a, 111185));
        return (t) => (0, r.jsx)(e, { ...t, onSlideChange: () => {} });
    },
    ClaimAccountModal: async () => {
        let { default: e } = await Promise.all([a.e("213042"), a.e("319623"), a.e("121007")]).then(a.bind(a, 110744));
        return (t) => (0, r.jsx)(e, { claimRequired: !0, ...t });
    },
    AutomatedUnderageAppealModal: async () => {
        let { default: e } = await Promise.all([a.e("51194"), a.e("909018")]).then(a.bind(a, 466702));
        return (t) => (0, r.jsx)(e, { ...t, classificationId: "123" });
    },
    AutomodRaidResolveModal: async () => {
        let { default: e } = await Promise.all([a.e("513221"), a.e("273669"), a.e("307133")]).then(a.bind(a, 580812));
        return (t) => (0, r.jsx)(e, { ...t, guildId: "123", messageId: null });
    },
    AutomodUserProfileQuarantineAlert: async () => {
        let { default: e } = await a.e("452343").then(a.bind(a, 725034));
        return (t) => (0, r.jsx)(e, { ...t, guildId: "123" });
    },
    PhoneVerificationModal: async () => {
        let { default: e } = await Promise.all([a.e("590275"), a.e("766806"), a.e("989545"), a.e("311493")]).then(
            a.bind(a, 914724),
        );
        return (t) => (0, r.jsx)(e, { error: null, working: !1, validPhone: !1, ...t });
    },
    VoiceSettingsModal: async () => {
        let { default: e } = await a.e("796531").then(a.bind(a, 880510));
        return (t) => (0, r.jsx)(e, { ...t, mediaEngineContext: od.x.DEFAULT, subtitle: "Devtools subtitle" });
    },
    DynamicGraphicDemo: async () => {
        let { DynamicGraphicComponent: e } = await Promise.resolve().then(a.bind(a, 116833));
        return (t) =>
            (0, r.jsx)(oc.k, {
                ...t,
                title: "Dynamic Graphics Demo",
                subtitle: "This modal demonstrates the dynamic graphics system",
                graphic: {
                    type: "dynamic",
                    component: e.DEMO,
                    aspectRatio: "6/4",
                    props: { text: "Dynamic Content Loaded!" },
                },
                actions: [{ variant: "primary", text: "Close", onClick: t.onClose }],
                children: (0, r.jsx)("div", {
                    children:
                        "This modal showcases the new dynamic graphics system where components can be loaded dynamically based on enum values, providing type safety while maintaining runtime flexibility.",
                }),
            });
    },
    OverlayDisabledSurveyModal: async () => {
        let { default: e } = await Promise.all([a.e("914052"), a.e("82318")]).then(a.bind(a, 387101)),
            { OverlayToggledClientSettingType: t } = await Promise.resolve().then(a.bind(a, 810412));
        return (a) => (0, r.jsx)(e, { ...a, clientSettingType: t.LEGACY_GAME, gameId: "123456789" });
    },
    PremiumSubscriptionPauseModal: async () => {
        let { PremiumSubscriptionPauseModalSelect: e } = await Promise.all([a.e("489361"), a.e("80347")]).then(
                a.bind(a, 318998),
            ),
            { CancellationContext: t } = await Promise.resolve().then(a.bind(a, 916974)),
            { PremiumTypes: n } = await Promise.resolve().then(a.bind(a, 202541)),
            l = {
                id: "test-subscription-id",
                userId: "test-user-id",
                status: 1,
                currency: "usd",
                currentPeriodStart: new Date(),
                currentPeriodEnd: new Date(Date.now() + 2592e6),
                items: [{ id: "test-item-id", planId: "511651880837840896", quantity: 1 }],
                paymentSourceId: "test-payment-source",
                renewalMutations: null,
                hasActiveTrial: !1,
            },
            s = o.forwardRef((a, s) => {
                let [i, d] = o.useState(null);
                return (0, r.jsx)(t.Provider, {
                    value: {
                        setStep: () => {},
                        premiumType: n.TIER_2,
                        onClose: a.onClose,
                        transitionState: a.transitionState,
                        premiumSubscription: l,
                        analyticsLocations: [],
                        analyticsLocation: void 0,
                        confettiCanvas: null,
                        churnUserDiscountOffer: null,
                        isFetchingChurnDiscountOffer: !1,
                        fullPrice: "$9.99",
                        discountedPrice: void 0,
                        planId: "511651880837840896",
                        paymentsBlocked: !1,
                        renewalInvoice: null,
                        renewalInvoiceDetails: null,
                        handleCancellation: async () => {},
                        applyOffer: async () => {},
                        pauseDuration: i,
                        setPauseDuration: d,
                    },
                    children: (0, r.jsx)(e, {}),
                });
            });
        return ((s.displayName = "PremiumSubscriptionPauseModalWrapper"), (e) => (0, r.jsx)(s, { ...e }));
    },
    NewMemberActionModal: async () => {
        let { default: e } = await Promise.all([
                a.e("266281"),
                a.e("287973"),
                a.e("652191"),
                a.e("813949"),
                a.e("354569"),
            ]).then(a.bind(a, 251632)),
            { NewMemberActionTypes: t } = await Promise.resolve().then(a.bind(a, 374084)),
            n = {
                channelId: "123456789",
                title: "Welcome to the server!",
                description: "Say hello in the welcome channel",
                actionType: t.CHAT,
                emoji: null,
                icon: null,
            };
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                guildId: "123456789",
                action: n,
                onSave: (e, t, a) => {
                    console.log("NewMemberActionModal onSave:", { action: e, iconData: t, shouldSaveIcon: a });
                },
                onDelete: () => {
                    console.log("NewMemberActionModal onDelete");
                },
            });
    },
    PlayStationModal: async () => {
        let { default: e } = await Promise.all([a.e("187880"), a.e("538035")]).then(a.bind(a, 14860)),
            t = await Promise.resolve().then(a.bind(a, 643501)),
            { createChannelRecord: n } = await Promise.resolve().then(a.bind(a, 95701)),
            l = n({
                id: "123456789",
                name: "test-voice-channel",
                type: 2,
                guild_id: "987654321",
                position: 0,
                permissionOverwrites: {},
                parent_id: void 0,
                nsfw: !1,
                topic: void 0,
                lastMessageId: void 0,
                bitrate: 64e3,
                userLimit: 0,
                rateLimitPerUser: 0,
                icon: null,
                ownerId: null,
                application_id: null,
                lastPinTimestamp: null,
                rtcRegion: null,
                videoQualityMode: null,
                messageCount: 0,
                memberCount: 0,
                threadMetadata: void 0,
                member: void 0,
                defaultAutoArchiveDuration: void 0,
                flags: 0,
                totalMessageSent: 0,
                availableTags: [],
                appliedTags: [],
                defaultReactionEmoji: null,
                defaultThreadRateLimitPerUser: 0,
                defaultSortOrder: null,
                defaultForumLayout: 0,
            }),
            s = {
                "device-1": { id: "device-1", name: "PS5 - Living Room", platform: "playstation" },
                "device-2": { id: "device-2", name: "PS5 - Bedroom", platform: "playstation" },
                "device-3": { id: "device-3", name: "PS4 - Office", platform: "playstation" },
            },
            i = (a) => {
                let n = t.default.getDevicesForPlatform,
                    i = t.default.getFetchingDevices,
                    o = t.default.getLastSelectedDeviceByPlatform,
                    d = t.default.getAwaitingRemoteSessionInfo;
                ((t.default.getDevicesForPlatform = (e) => (e === ex.fg2.PLAYSTATION ? s : n.call(t.default, e))),
                    (t.default.getFetchingDevices = (e) => e !== ex.fg2.PLAYSTATION && i.call(t.default, e)),
                    (t.default.getLastSelectedDeviceByPlatform = (e) =>
                        e === ex.fg2.PLAYSTATION ? "device-1" : o.call(t.default, e)),
                    (t.default.getAwaitingRemoteSessionInfo = () => null));
                let c = a.onClose;
                return (
                    (a.onClose = async () => {
                        ((t.default.getDevicesForPlatform = n),
                            (t.default.getFetchingDevices = i),
                            (t.default.getLastSelectedDeviceByPlatform = o),
                            (t.default.getAwaitingRemoteSessionInfo = d),
                            await c());
                    }),
                    (0, r.jsx)(e, { ...a, channel: l, platform: ex.fg2.PLAYSTATION })
                );
            };
        return ((i.displayName = "PlayStationModalWrapper"), i);
    },
    GameDetectionReportModal: async () => {
        let { default: e } = await Promise.all([a.e("568035"), a.e("627495")]).then(a.bind(a, 651930));
        return (t) => (0, r.jsx)(e, { ...t, detected: { applicationId: "123456789", name: "Test Game" } });
    },
    AppealIngestionModal: async () => {
        let { default: e } = await Promise.all([a.e("742978"), a.e("292030"), a.e("51471")]).then(a.bind(a, 550560));
        return (t) => (0, r.jsx)(e, { ...t, classificationId: "123456789" });
    },
    CreateTagModal: async () => {
        let { default: e } = await Promise.all([a.e("143172"), a.e("347326")]).then(a.bind(a, 950989));
        return (t) => (0, r.jsx)(e, { ...t, channelId: "123456789", guildId: "987654321" });
    },
    CreateTagModalEdit: async () => {
        let { default: e } = await Promise.all([a.e("143172"), a.e("347326")]).then(a.bind(a, 950989)),
            t = { id: "tag-123", name: "Bug Report", emojiId: "123456789", emojiName: "\uD83D\uDC1B", moderated: !0 };
        return (a) => (0, r.jsx)(e, { ...a, channelId: "123456789", guildId: "987654321", tag: t });
    },
    ConfirmModal: async () => {
        let { ConfirmModal: e } = await Promise.all([a.e("304823"), a.e("223976"), a.e("977260")]).then(
            a.bind(a, 397927),
        );
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                title: "Confirm Action",
                subtitle: "Are you sure you want to perform this action? This action cannot be undone.",
                confirmText: "Confirm",
                onConfirm: () => console.log("ConfirmModal: Confirmed"),
                onCancel: () => console.log("ConfirmModal: Cancelled"),
            });
    },
    AlertModal: async () => {
        let { Alert: e } = await Promise.all([a.e("844331"), a.e("21553")]).then(a.bind(a, 381512));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                title: "Alert",
                body: "This is an alert message with a single action.",
                confirmText: "OK",
                onConfirm: () => console.log("AlertModal: Confirmed"),
            });
    },
    AlertModalWithCancel: async () => {
        let { Alert: e } = await Promise.all([a.e("844331"), a.e("21553")]).then(a.bind(a, 381512));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                title: "Confirm Action",
                body: "Are you sure you want to proceed with this action?",
                confirmText: "Yes",
                cancelText: "No",
                onConfirm: () => console.log("AlertModalWithCancel: Confirmed"),
                onCancel: () => console.log("AlertModalWithCancel: Cancelled"),
            });
    },
    AlertModalWithSecondary: async () => {
        let { Alert: e } = await Promise.all([a.e("844331"), a.e("21553")]).then(a.bind(a, 381512));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                title: "Settings Change",
                body: "This will change your account settings.",
                confirmText: "Apply",
                cancelText: "Cancel",
                secondaryConfirmText: "Don't show this again",
                onConfirm: () => console.log("AlertModalWithSecondary: Confirmed"),
                onCancel: () => console.log("AlertModalWithSecondary: Cancelled"),
                onConfirmSecondary: () => console.log("AlertModalWithSecondary: Secondary action confirmed"),
            });
    },
    GuildDisableCommunicationModal: async () => {
        let {
                Button: e,
                Text: t,
                Heading: n,
                Checkbox: l,
                ButtonGroup: s,
            } = await Promise.all([a.e("304823"), a.e("223976"), a.e("977260")]).then(a.bind(a, 397927)),
            { DisableCommunicationDuration: i, getFriendlyDurationString: o } = await Promise.resolve().then(
                a.bind(a, 200700),
            ),
            d = await Promise.resolve().then(a.t.bind(a, 582128, 19)),
            c = "TestUser";
        function u(a) {
            let [u, m] = d.useState(i.DURATION_60_SEC),
                [h, x] = d.useState(""),
                [p, g] = d.useState(!1),
                [v, j] = d.useState(!1),
                f = [
                    { value: i.DURATION_60_SEC, label: o(i.DURATION_60_SEC) },
                    { value: i.DURATION_5_MIN, label: o(i.DURATION_5_MIN) },
                    { value: i.DURATION_10_MIN, label: o(i.DURATION_10_MIN) },
                    { value: i.DURATION_1_HOUR, label: o(i.DURATION_1_HOUR) },
                    { value: i.DURATION_1_DAY, label: o(i.DURATION_1_DAY) },
                    { value: i.DURATION_1_WEEK, label: o(i.DURATION_1_WEEK) },
                ],
                b = d.useCallback(async () => {
                    (g(!0),
                        console.log("GuildDisableCommunicationModal: Timing out user", {
                            user: c,
                            duration: o(u),
                            reason: null != h ? h : "No reason provided",
                            resolveFlag: v,
                        }),
                        await new Promise((e) => setTimeout(e, 1e3)),
                        g(!1),
                        a.onClose());
                }, [u, h, v, a]);
            return (0, r.jsxs)("div", {
                style: { padding: "20px", maxWidth: "500px" },
                children: [
                    (0, r.jsxs)(n, {
                        variant: "heading-lg/semibold",
                        className: "mb-2",
                        children: ["Disable Communication for ", c, "#", "0001"],
                    }),
                    (0, r.jsx)(t, {
                        variant: "text-sm/normal",
                        className: "mb-4",
                        color: "text-subtle",
                        children: "This will temporarily disable the user's ability to communicate in this server.",
                    }),
                    (0, r.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            (0, r.jsx)(n, { variant: "heading-sm/semibold", className: "mb-2", children: "Duration" }),
                            (0, r.jsx)(s, {
                                children: f.map((t) =>
                                    (0, r.jsx)(
                                        e,
                                        {
                                            variant: u === t.value ? "primary" : "secondary",
                                            size: "sm",
                                            text: t.label,
                                            onClick: () => m(t.value),
                                        },
                                        t.value,
                                    ),
                                ),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            (0, r.jsx)(n, {
                                variant: "heading-sm/semibold",
                                className: "mb-2",
                                children: "Reason (Optional)",
                            }),
                            (0, r.jsx)("textarea", {
                                value: h,
                                onChange: (e) => x(e.target.value),
                                placeholder: "Enter reason for timeout...",
                                style: {
                                    width: "100%",
                                    minHeight: "80px",
                                    padding: "8px",
                                    border: "1px solid var(--border-subtle)",
                                    borderRadius: "4px",
                                    backgroundColor: "var(--background-base-low)",
                                    color: "var(--text-strong)",
                                    resize: "vertical",
                                },
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: "mb-4",
                        children: (0, r.jsx)(l, { checked: v, onChange: j, label: "Resolve associated mod report" }),
                    }),
                    (0, r.jsxs)("div", {
                        style: { display: "flex", gap: "8px", justifyContent: "flex-end" },
                        children: [
                            (0, r.jsx)(e, { variant: "secondary", text: "Cancel", onClick: a.onClose }),
                            (0, r.jsx)(e, { variant: "primary", text: "Timeout User", onClick: b, disabled: p }),
                        ],
                    }),
                ],
            });
        }
        return (e) => (0, r.jsx)(u, { ...e });
    },
    GuildPowerupDeactivateModal: async () => {
        let {
                Button: e,
                Text: t,
                Heading: n,
                Checkbox: l,
            } = await Promise.all([a.e("304823"), a.e("223976"), a.e("977260")]).then(a.bind(a, 397927)),
            s = await Promise.resolve().then(a.t.bind(a, 582128, 19)),
            i = "Level 3 Server Boost",
            o = 200,
            d = 60,
            c = 8;
        function u(a) {
            let [u, m] = s.useState(!1),
                [h, x] = s.useState(!1),
                p = s.useCallback(async () => {
                    (x(!0),
                        console.log("GuildPowerupDeactivateModal: Deactivating powerup", {
                            powerup: i,
                            guildId: "123456789",
                        }),
                        await new Promise((e) => setTimeout(e, 2e3)),
                        x(!1),
                        a.onClose());
                }, [a]);
            return (0, r.jsxs)("div", {
                style: { padding: "20px", maxWidth: "500px" },
                children: [
                    (0, r.jsxs)(n, { variant: "heading-lg/semibold", className: "mb-2", children: ["Deactivate ", i] }),
                    (0, r.jsxs)(t, {
                        variant: "text-sm/normal",
                        className: "mb-4",
                        color: "text-subtle",
                        children: [
                            "This will remove the ",
                            i,
                            " from your server and disable all associated features.",
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: "mb-4",
                        style: {
                            backgroundColor: "var(--background-base-lower)",
                            padding: "16px",
                            borderRadius: "8px",
                            border: "1px solid var(--border-subtle)",
                        },
                        children: [
                            (0, r.jsx)(n, {
                                variant: "heading-sm/semibold",
                                className: "mb-2",
                                children: "Current Features",
                            }),
                            (0, r.jsxs)("div", {
                                style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" },
                                children: [
                                    (0, r.jsxs)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: ["\u2022 ", o, " emoji slots"],
                                    }),
                                    (0, r.jsxs)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: ["\u2022 ", d, " sticker slots"],
                                    }),
                                    (0, r.jsxs)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: ["\u2022 ", c, " sound slots"],
                                    }),
                                    (0, r.jsx)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: "\u2022 Custom server banner",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: "mb-4",
                        style: {
                            backgroundColor: "var(--background-danger)",
                            padding: "16px",
                            borderRadius: "8px",
                            border: "1px solid var(--border-feedback-critical)",
                        },
                        children: [
                            (0, r.jsxs)(t, {
                                variant: "eyebrow",
                                color: "text-feedback-critical",
                                className: "mb-2",
                                children: [
                                    (0, r.jsx)("span", {
                                        role: "img",
                                        "aria-label": "Warning",
                                        children: "\u26A0\uFE0F",
                                    }),
                                    " ",
                                    "Warning",
                                ],
                            }),
                            (0, r.jsx)(t, {
                                variant: "text-sm/medium",
                                color: "text-feedback-critical",
                                children:
                                    "Deactivating this powerup will immediately remove all Level 3 features from your server. Members will lose access to custom emojis, stickers, and other premium features. This action cannot be undone.",
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: "mb-4",
                        children: (0, r.jsx)(l, {
                            checked: u,
                            onChange: m,
                            label: "I understand that deactivating this powerup will remove all Level 3 features from my server",
                            labelType: "secondary",
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        style: { display: "flex", gap: "8px", justifyContent: "flex-end" },
                        children: [
                            (0, r.jsx)(e, { variant: "secondary", text: "Cancel", onClick: a.onClose }),
                            (0, r.jsx)(e, {
                                variant: "critical-primary",
                                text: "Deactivate Level",
                                onClick: p,
                                disabled: !u,
                                loading: h,
                            }),
                        ],
                    }),
                ],
            });
        }
        return (e) => (0, r.jsx)(u, { ...e });
    },
    DataHarvestModal: async () => {
        let { default: e } = await a.e("292063").then(a.bind(a, 970018));
        return (t) =>
            (0, r.jsx)(e, {
                modalProps: t,
                onConfirm: (e) => {
                    (console.log("DataHarvestModal: Requesting data export for:", e),
                        setTimeout(() => {
                            console.log("DataHarvestModal: Data export request submitted successfully");
                        }, 1e3));
                },
            });
    },
    EnableCommunityModal: async () => {
        let { default: e } = await Promise.all([a.e("443159"), a.e("82721"), a.e("452823"), a.e("674832")]).then(
            a.bind(a, 709779),
        );
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                onClose: async () => {
                    (console.log("EnableCommunityModal: Closed"), await t.onClose());
                },
            });
    },
    DeprivateModal: async () => {
        let e = (await Promise.all([a.e("315273"), a.e("254857")]).then(a.bind(a, 147696))).default;
        return (t) => (0, r.jsx)(e, { ...t, guildId: "123456789012345678", startingChannelId: "987654321098765432" });
    },
    CameraPreviewModal: async () => {
        let { default: e } = await Promise.all([a.e("650100"), a.e("410534")]).then(a.bind(a, 308229));
        return (t) => (0, r.jsx)(e, { ...t, videoEnabled: !1, onEnable: () => console.log("Camera enabled") });
    },
    CameraPreviewModalWithVideo: async () => {
        let { default: e } = await Promise.all([a.e("650100"), a.e("410534")]).then(a.bind(a, 308229));
        return (t) => (0, r.jsx)(e, { ...t, videoEnabled: !0, onEnable: () => console.log("Camera enabled") });
    },
    ModeratorReportResolveConfirmModal: async () => {
        let { default: e } = await Promise.resolve().then(a.bind(a, 390897));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                handleResolveFlag: () => console.log("ModeratorReportResolveConfirmModal: Flag resolved"),
            });
    },
    SelectFriendsModal: async () => {
        let { default: e, SelectFriendsModalScreens: t } = await Promise.resolve().then(a.bind(a, 303682));
        return (a) => {
            let { onClose: n, ...l } = a;
            return (0, r.jsx)(e, {
                onClose: async () => {
                    (console.log("SelectFriendsModal: Closed"), await n());
                },
                startingScreen: t.SELECT_FRIENDS,
                ...l,
            });
        };
    },
    SelectFriendsModalReminder: async () => {
        let { default: e, SelectFriendsModalScreens: t } = await Promise.resolve().then(a.bind(a, 303682));
        return (a) => {
            let { onClose: n, ...l } = a;
            return (0, r.jsx)(e, {
                onClose: async () => {
                    (console.log("SelectFriendsModalReminder: Closed"), await n());
                },
                startingScreen: t.REMINDER,
                ...l,
            });
        };
    },
    FavoritesGuildAddChannelModal: async () => {
        let { default: e } = await Promise.all([
            a.e("866475"),
            a.e("385663"),
            a.e("850979"),
            a.e("236946"),
            a.e("692639"),
            a.e("890480"),
            a.e("440963"),
            a.e("766031"),
            a.e("394317"),
            a.e("79362"),
            a.e("276340"),
        ]).then(a.bind(a, 826271));
        return (t) => (0, r.jsx)(e, { ...t, parentId: null, source: "devtools" });
    },
    ActivityShareMomentModal: async () => {
        let { default: e } = await Promise.all([
            a.e("866475"),
            a.e("385663"),
            a.e("58243"),
            a.e("236946"),
            a.e("692639"),
            a.e("890480"),
            a.e("440963"),
            a.e("766031"),
            a.e("394317"),
            a.e("521743"),
        ]).then(a.bind(a, 190930));
        return (t) =>
            (0, r.jsx)(e, { ...t, applicationId: "123456789", mediaUrl: "https://picsum.photos/400/300.jpg" });
    },
    CallUserConfirmationModal: async () => {
        let { default: e } = await a.e("19106").then(a.bind(a, 502054));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                onSubmit: () => {
                    (console.log("CallUserConfirmationModal: Call confirmed"), t.onClose());
                },
            });
    },
    OptInReorderAttemptModal: async () => {
        let { default: e } = await Promise.all([a.e("57729"), a.e("697585"), a.e("24848")]).then(a.bind(a, 354643));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                onClose: () => (console.log("OptInReorderAttemptModal: Modal closed"), t.onClose()),
            });
    },
    GuildAntiRaidReportModal: async () => {
        let { default: e } = await Promise.all([a.e("273669"), a.e("364499")]).then(a.bind(a, 296222));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                guildId: "123456789",
                onClose: () => (console.log("GuildAntiRaidReportModal: Modal closed"), t.onClose()),
            });
    },
    ConsentCheckBoxModal: async () => {
        let { ConfirmModal: e } = await Promise.all([a.e("304823"), a.e("223976"), a.e("977260")]).then(
                a.bind(a, 397927),
            ),
            { Text: t, Heading: n } = await Promise.all([a.e("304823"), a.e("223976"), a.e("977260")]).then(
                a.bind(a, 397927),
            ),
            l = await Promise.resolve().then(a.t.bind(a, 582128, 19));
        function s(a) {
            let [s, i] = l.useState(!1),
                [o, d] = l.useState(!1);
            return (0, r.jsx)(e, {
                ...a,
                title: "Consent CheckBox Examples",
                confirmText: "Close",
                cancelText: "",
                onConfirm: () => (console.log("ConsentCheckBoxModal: Modal closed"), a.onClose()),
                onCancel: () => {},
                children: (0, r.jsxs)("div", {
                    style: { padding: "20px", display: "flex", flexDirection: "column", gap: "20px" },
                    children: [
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(n, {
                                    variant: "heading-md/semibold",
                                    style: { marginBottom: "12px" },
                                    children: "Terms of Service Consent",
                                }),
                                (0, r.jsx)(ou.S, {
                                    label: "I agree to Discord's Terms of Service and Privacy Policy",
                                    checked: s,
                                    onChange: (e) => i(e),
                                    labelType: "secondary",
                                }),
                                (0, r.jsxs)(t, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    style: { marginTop: "8px" },
                                    children: ["Consent status: ", s ? "Agreed" : "Not agreed"],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(n, {
                                    variant: "heading-md/semibold",
                                    style: { marginBottom: "12px" },
                                    children: "Promotional Email Consent",
                                }),
                                (0, r.jsx)(ou.S, {
                                    label: "I would like to receive promotional emails from Discord about new features, events, and other updates.",
                                    checked: o,
                                    onChange: (e) => d(e),
                                    labelType: "secondary",
                                }),
                                (0, r.jsxs)(t, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    style: { marginTop: "8px" },
                                    children: ["Promo consent status: ", o ? "Opted in" : "Not opted in"],
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        return ((s.displayName = "ConsentCheckBoxModalContent"), (e) => (0, r.jsx)(s, { ...e }));
    },
    GuildRaidLockdownFeedbackModal: async () => {
        let { default: e } = await Promise.all([a.e("660608"), a.e("346313")]).then(a.bind(a, 336496));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                guildId: "123456789",
                onClose: () => (console.log("GuildRaidLockdownFeedbackModal: Modal closed"), t.onClose()),
            });
    },
    GuildVerificationLevelModal: async () => {
        let { default: e } = await Promise.all([
                a.e("955424"),
                a.e("623386"),
                a.e("78618"),
                a.e("149409"),
                a.e("970232"),
            ]).then(a.bind(a, 313003)),
            { dangerouslyConstructGuildRecordFromUntypedObject: t } = await Promise.resolve().then(a.bind(a, 149790)),
            n = t({
                id: "123456789",
                name: "Test Server",
                description: "A test server for development",
                ownerId: "987654321",
                icon: null,
                splash: null,
                banner: null,
                homeHeader: null,
                features: [],
                preferredLocale: "en-US",
                afkChannelId: null,
                afkTimeout: 300,
                systemChannelId: null,
                verificationLevel: 2,
                joinedAt: new Date(),
                defaultMessageNotifications: 0,
                mfaLevel: 0,
                application_id: null,
                explicitContentFilter: 0,
                vanityURLCode: null,
                premiumTier: 0,
                premiumSubscriberCount: 0,
                premiumProgressBarEnabled: !1,
                systemChannelFlags: 0,
                discoverySplash: null,
                rulesChannelId: null,
                safetyAlertsChannelId: null,
                publicUpdatesChannelId: null,
                maxStageVideoChannelUsers: 10,
                maxVideoChannelUsers: 25,
                maxMembers: 5e5,
                nsfwLevel: 0,
                ownerConfiguredContentLevel: null,
                hubType: null,
                latestOnboardingQuestionId: null,
                profile: null,
                premiumFeatures: null,
                moderatorReporting: null,
            });
        return (t) => (0, r.jsx)(e, { ...t, guild: n });
    },
    GuildVerificationLevelModalCommunity: async () => {
        let { default: e } = await Promise.all([
                a.e("955424"),
                a.e("623386"),
                a.e("78618"),
                a.e("149409"),
                a.e("970232"),
            ]).then(a.bind(a, 313003)),
            { dangerouslyConstructGuildRecordFromUntypedObject: t } = await Promise.resolve().then(a.bind(a, 149790)),
            { GuildFeatures: n } = await Promise.resolve().then(a.bind(a, 652215)),
            l = t({
                id: "123456789",
                name: "Test Community Server",
                description: "A test community server for development",
                ownerId: "987654321",
                icon: null,
                splash: null,
                banner: null,
                homeHeader: null,
                features: [n.COMMUNITY],
                preferredLocale: "en-US",
                afkChannelId: null,
                afkTimeout: 300,
                systemChannelId: null,
                verificationLevel: 3,
                joinedAt: new Date(),
                defaultMessageNotifications: 0,
                mfaLevel: 0,
                application_id: null,
                explicitContentFilter: 0,
                vanityURLCode: null,
                premiumTier: 0,
                premiumSubscriberCount: 0,
                premiumProgressBarEnabled: !1,
                systemChannelFlags: 0,
                discoverySplash: null,
                rulesChannelId: null,
                safetyAlertsChannelId: null,
                publicUpdatesChannelId: null,
                maxStageVideoChannelUsers: 10,
                maxVideoChannelUsers: 25,
                maxMembers: 5e5,
                nsfwLevel: 0,
                ownerConfiguredContentLevel: null,
                hubType: null,
                latestOnboardingQuestionId: null,
                profile: null,
                premiumFeatures: null,
                moderatorReporting: null,
            });
        return (t) => (0, r.jsx)(e, { ...t, guild: l });
    },
    EmojiAddModal: async () => {
        let { EmojiAddModal: e } = await Promise.all([a.e("225560"), a.e("990410")]).then(a.bind(a, 126033));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                guildId: "123456789",
                initialTierEmojiIds: new Set(["emoji1"]),
                onSubmit: (e) => {
                    console.log("EmojiAddModal: Selected emojis:", Array.from(e));
                },
                transitionToManageEmoji: () => {
                    console.log("EmojiAddModal: Transition to manage emoji clicked");
                },
                onClose: () => (console.log("EmojiAddModal: Modal closed"), t.onClose()),
            });
    },
    StreamFullModal: async () => {
        let { default: e } = await a.e("425894").then(a.bind(a, 166789));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    VoiceCallFeedback: async () => {
        let { default: e } = await Promise.all([
                a.e("312513"),
                a.e("36395"),
                a.e("155925"),
                a.e("137381"),
                a.e("847004"),
                a.e("313937"),
                a.e("64054"),
            ]).then(a.bind(a, 47893)),
            t = {
                channel_id: "123456789",
                channel_type: ex.rbe.GUILD_VOICE,
                guild_id: "987654321",
                rtc_connection_id: "devtools-rtc-connection",
                duration: 6e4,
                voice_state_count: 2,
                video_stream_count: 0,
                video_enabled: !1,
                media_session_id: "devtools-media-session",
                duration_muted_ms: 0,
                output_audio_route_type: null,
            };
        return (a) => (0, r.jsx)(e, { ...a, analyticsData: t });
    },
    StreamFeedback: async () => {
        let { default: e } = await Promise.all([
                a.e("312513"),
                a.e("36395"),
                a.e("155925"),
                a.e("137381"),
                a.e("847004"),
                a.e("313937"),
                a.e("617171"),
                a.e("862767"),
            ]).then(a.bind(a, 218738)),
            t = { ownerId: "987654321", guildId: "123456789", channelId: "123456789", streamType: og.U4.GUILD },
            n = { id: "123456789", name: "Test Game" },
            l = {
                rtc_connection_id: "devtools-rtc-connection",
                media_session_id: "devtools-media-session",
                duration: 6e4,
                stream_region: "us-west",
                max_viewers: 3,
                avg_bitrate: 2500,
                avg_fps: 60,
                avg_resolution: 1080,
                inbound_bitrate_estimate_percentile99: 3e3,
                parent_media_session_id: null,
            };
        return (a) => (0, r.jsx)(e, { ...a, isStreamer: !1, stream: t, streamApplication: n, analyticsData: l });
    },
    FamilyCenterAcceptLinkModal: async () => {
        let e = ec.default.getUser("12345"),
            t = ec.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("916131"), a.e("155738"), a.e("331385")]).then(a.bind(a, 58144));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterDeclineLinkModal: async () => {
        let e = ec.default.getUser("12345"),
            t = ec.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("916131"), a.e("155738"), a.e("384811")]).then(a.bind(a, 389094));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterCancelLinkModal: async () => {
        let e = ec.default.getUser("12345"),
            t = ec.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("916131"), a.e("155738"), a.e("817219")]).then(a.bind(a, 187278));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterDisconnectLinkModal: async () => {
        let e = ec.default.getUser("12345"),
            t = ec.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("321855"), a.e("943139")]).then(a.bind(a, 179950));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterQRCodeModal: async () => {
        let { default: e } = await Promise.all([a.e("683023"), a.e("272875")]).then(a.bind(a, 320742));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PremiumGroupFriendsSelectorModal: async () => {
        let { default: e } = await Promise.all([a.e("634508"), a.e("485579")]).then(a.bind(a, 785606)),
            t = oh.A.getPremiumGroupSubscription();
        return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, subscription: t });
    },
    PremiumGroupAcceptInviteModal: async () => {
        let { default: e } = await Promise.all([a.e("56498"), a.e("399910")]).then(a.bind(a, 826181));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                premiumGroupSubscriptionId: "1234567890",
                premiumGroupInviteId: "1234567890",
                isExistingSub: !1,
                premiumGroupPrimaryName: "Test User",
            });
    },
    QuarantineModeInfoModal: async () => {
        let { default: e } = await a.e("474575").then(a.bind(a, 218642));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    CaptchaTestModal: async () => {
        let { default: e } = await a.e("417724").then(a.bind(a, 563255));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PasswordConfirm: async () => {
        let { default: e } = await Promise.resolve().then(a.bind(a, 662758));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                title: "Confirm Password",
                actionText: "Submit",
                handleSubmit: async (e) => {
                    (console.log("PasswordConfirm: Password submitted:", e),
                        await new Promise((e) => setTimeout(e, 1e3)));
                },
            });
    },
    BlockedDomainModal: async () => {
        let { default: e } = await Promise.all([a.e("364956"), a.e("420577"), a.e("335681"), a.e("520723")]).then(
            a.bind(a, 667934),
        );
        return (t) => (0, r.jsx)(e, { ...t, url: "https://example-phishing-site.com/malicious-page" });
    },
    DmSettingsUpsellModal: async () => {
        let { default: e } = await Promise.all([a.e("494150"), a.e("962684")]).then(a.bind(a, 228855)),
            t = Object.keys(nE.A.getGuilds())[0];
        return (a) => (0, r.jsx)(e, { ...a, guildId: t });
    },
    UrgentMessageModal: async () => {
        let { default: e } = await Promise.all([a.e("689913"), a.e("136724")]).then(a.bind(a, 531519));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    UserAgreementsModal: async () => {
        let { default: e } = await Promise.all([a.e("50726"), a.e("482911"), a.e("922220")]).then(a.bind(a, 639719));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    DisableRiskyPermsModal: async () => {
        let { default: e } = await Promise.all([a.e("796057"), a.e("452823"), a.e("971905")]).then(a.bind(a, 868952)),
            t = Object.values(nE.A.getGuilds())[0];
        return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
    },
    OtherFriendRequestsModal: async () => {
        let { default: e } = await Promise.all([
            a.e("827776"),
            a.e("979862"),
            a.e("791370"),
            a.e("548018"),
            a.e("773152"),
            a.e("625281"),
        ]).then(a.bind(a, 516259));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    AcceptInviteModal: async () => {
        let { default: e } = await Promise.all([
            a.e("444038"),
            a.e("807432"),
            a.e("601495"),
            a.e("807265"),
            a.e("549106"),
            a.e("901352"),
            a.e("579023"),
            a.e("248672"),
        ]).then(a.bind(a, 777307));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PremiumGroupSubscribeModal: async () => {
        let { default: e } = await Promise.all([a.e("499709"), a.e("569595")]).then(a.bind(a, 526710));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NewUserOnboarding: async () => {
        let { default: e } = await Promise.all([
            a.e("140606"),
            a.e("122326"),
            a.e("533651"),
            a.e("260634"),
            a.e("194399"),
            a.e("419580"),
            a.e("82721"),
            a.e("197804"),
            a.e("756856"),
            a.e("319623"),
            a.e("999574"),
            a.e("457794"),
            a.e("578963"),
        ]).then(a.bind(a, 427294));
        return (t) => (0, r.jsx)(e, { ...t });
    },
};
function oj() {
    let e = o.useMemo(
            () =>
                Object.keys(ov)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, a] = o.useState(null);
    return (0, r.jsx)(g.Ip, {
        className: tZ.nd,
        children: (0, r.jsxs)("div", {
            className: sG.l$,
            children: [
                (0, r.jsx)("section", {
                    className: sG.uW,
                    children: (0, r.jsxs)(Q.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(a_.Z, {
                                label: "Open a Modal",
                                placeholder: "Select a modal",
                                options: e,
                                value: t,
                                onSelectionChange: a,
                                selectionMode: "single",
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Open",
                                disabled: null == t,
                                onClick: () => null != t && (0, eJ.openModalLazy)(ov[t]),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("section", {
                    className: sG.uW,
                    children: [
                        (0, r.jsx)(Z.D, { variant: "heading-md/semibold", children: "Wow moment" }),
                        (0, r.jsx)("div", {
                            className: sG.bd,
                            children: (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Open",
                                onClick: function () {
                                    ((0, om.o)(!0), ox._.dispatch(ex.jej.PREMIUM_SUBSCRIPTION_CREATED));
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var of = a(933832),
    ob = a(472229),
    oy = a(10392),
    oE = a(669316),
    oC = a(959165),
    o_ = a(354670),
    oS = a(158045);
async function oN() {
    try {
        let { body: e } = await l7.Bo.get({ url: ex.Rsh.USER_OFFER_IDS, rejectWithError: !0 });
        return e;
    } catch (e) {
        return [];
    }
}
async function oA() {
    try {
        let { body: e } = await l7.Bo.get({ url: ex.Rsh.USER_OFFERS, rejectWithError: !0 });
        return { trial: e.trial.map(oC.A.createFromServer), discount: e.discount.map(oE.A.createFromServer) };
    } catch (e) {
        return { trial: [], discount: [] };
    }
}
async function ok(e, t) {
    try {
        await l7.Bo.post({ url: ex.Rsh.CREATE_USER_OFFER(e, t), rejectWithError: !0 });
    } catch {
    } finally {
        await (0, oy._D)();
    }
}
async function oD(e, t) {
    try {
        await l7.Bo.del({ url: ex.Rsh.UPDATE_USER_OFFER(e, t), rejectWithError: !0 });
    } catch {
    } finally {
        await (0, oy._D)();
    }
}
async function oI() {
    try {
        await l7.Bo.del({ url: ex.Rsh.USER_OFFERS, rejectWithError: !0 });
    } catch {
    } finally {
        (await o_.A.forceReset(), await (0, oy._D)());
    }
}
async function oT(e) {
    await l7.Bo.post({ url: ex.Rsh.CREATE_REVERSE_TRIAL, body: { ends_at: e }, rejectWithError: !0 });
}
function oO(e) {
    let { acked: t, expired: a, inStore: n, onClick: l, secondaryBadge: s } = e,
        i = "Created";
    return (
        a ? (i = "Expired") : t ? (i = "Acked") : n && (i = "Active"),
        (0, r.jsxs)("div", {
            className: sG.fC,
            children: [
                (0, r.jsx)(q.D, {
                    onClick: l,
                    className: Y()(sG.qS, sG.vk, { [sG.vu]: n, [sG.R1]: t, [sG._7]: a }),
                    children: (0, r.jsxs)(p.E, {
                        variant: "eyebrow",
                        color: t ? void 0 : "text-overlay-light",
                        children: [i, n ? " *" : ""],
                    }),
                }),
                null != s &&
                    s.active &&
                    (0, r.jsx)("div", {
                        className: Y()(sG.qS, sG.k3),
                        children: (0, r.jsx)(p.E, {
                            variant: "eyebrow",
                            color: "text-overlay-light",
                            children: s.label,
                        }),
                    }),
            ],
        })
    );
}
function oR(e) {
    let { offer: t, offerOptions: a, forceRefetch: n, inStore: l = !1 } = e,
        [s, i] = o.useState(!1),
        [d, c] = o.useState(!1),
        [u, m] = o.useState(!1),
        [h, x] = o.useState(!1);
    o.useEffect(() => {
        u && x(!0);
        let e = setTimeout(() => {
            x(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [u]);
    let { id: g, expiresAt: v, trialId: j, subscriptionTrial: f, referrer: b } = t,
        y =
            a.find((e) => {
                let { value: t } = e;
                return t === j;
            })?.label ?? "Unknown";
    null != b && (y = `${y} from @${b.username}`);
    let E = null != v,
        C = t.hasExpired,
        _ = t.isRedeemed,
        S = f?.skuId === tP.pe.TIER_0;
    async function N() {
        (m(!0), E ? await A({ expiresAt: null }) : await (0, oy.u1)(t), n(), m(!1));
    }
    async function A(e) {
        m(!0);
        try {
            await l7.Bo.patch({
                url: ex.Rsh.UPDATE_USER_OFFER(g, "trial"),
                body: {
                    ...("expiresAt" in e && { expires_at: e.expiresAt }),
                    ...("referrerId" in e && { referrer_id: e.referrerId }),
                },
                rejectWithError: !0,
            });
        } finally {
            (n(), m(!1));
        }
    }
    return (
        o.useEffect(() => {
            if (s) {
                let e = setTimeout(() => {
                    i(!1);
                }, 3e3);
                return () => {
                    clearTimeout(e);
                };
            }
            if (d) {
                let e = setTimeout(() => {
                    c(!1);
                }, 3e3);
                return () => {
                    clearTimeout(e);
                };
            }
        }, [s, d]),
        (0, r.jsxs)("div", {
            className: Y()(sG.Nr, S ? sG.Qf : sG.C1),
            children: [
                (0, r.jsx)("div", {
                    className: Y()(sG.nM, sG.S7),
                    children: (0, r.jsx)(Z.D, {
                        variant: "heading-lg/semibold",
                        color: "text-overlay-light",
                        children: y,
                    }),
                }),
                (0, r.jsxs)(q.D, {
                    className: Y()(sG.nM, sG.QB),
                    onClick: () => {
                        (0, nY.C)(g, () => i(!0));
                    },
                    children: [
                        (0, r.jsxs)(p.E, { variant: "eyebrow", color: "text-overlay-light", children: ["Offer: ", g] }),
                        s
                            ? (0, r.jsx)(of.CheckmarkLargeIcon, { size: "md", color: "currentColor", className: sG.Kk })
                            : (0, r.jsx)(nB.CopyIcon, { size: "xs", color: "currentColor", className: sG.Kk }),
                    ],
                }),
                (0, r.jsxs)(q.D, {
                    className: Y()(sG.nM, sG.QB),
                    onClick: () => {
                        (0, nY.C)(j, () => c(!0));
                    },
                    children: [
                        (0, r.jsxs)(p.E, { variant: "eyebrow", color: "text-overlay-light", children: ["Trial: ", j] }),
                        d
                            ? (0, r.jsx)(of.CheckmarkLargeIcon, { size: "md", color: "currentColor", className: sG.Kk })
                            : (0, r.jsx)(nB.CopyIcon, { size: "xs", color: "currentColor", className: sG.Kk }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: sG.nM,
                    children: (0, r.jsxs)(p.E, {
                        variant: "eyebrow",
                        color: "text-overlay-light",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, oS.re)({
                                intervalType: f?.interval ?? tP.WT.MONTH,
                                intervalCount: f?.intervalCount ?? 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: sG.nM,
                    children: [
                        (0, r.jsxs)(p.E, {
                            variant: "eyebrow",
                            color: "text-overlay-light",
                            children: ["Expires (", (0, ob.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nq.Xm)(v?.toISOString()),
                            onChange: (e) => {
                                A({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: sG.nM,
                    children: [
                        (0, r.jsx)(p.E, { variant: "eyebrow", color: "text-overlay-light", children: "Referrer ID:" }),
                        (0, r.jsx)("input", {
                            type: "text",
                            value: b?.id ?? "",
                            onChange: (e) => A({ referrerId: e.target.value }),
                        }),
                    ],
                }),
                (0, r.jsx)(oO, {
                    acked: E,
                    expired: C,
                    inStore: l,
                    onClick: N,
                    secondaryBadge: { active: _, label: "Redeemed" },
                }),
                (0, r.jsx)(q.D, {
                    onClick: async () => {
                        (m(!0), await oD(g, "trial"), n(), m(!1));
                    },
                    children: (0, r.jsx)(nV.TrashIcon, {
                        size: "md",
                        color: "currentColor",
                        className: Y()(sG.Kk, sG.IT),
                    }),
                }),
                (0, r.jsx)("div", { className: Y()(sG.g4, { [sG.VP]: u || h }), children: (0, r.jsx)(tu.y, {}) }),
            ],
        })
    );
}
function ow(e) {
    let { offer: t, offerOptions: a, forceRefetch: n, inStore: l = !1 } = e,
        [s, i] = o.useState(!1),
        [d, c] = o.useState(!1),
        [u, m] = o.useState(!1),
        [h, x] = o.useState(!1);
    o.useEffect(() => {
        u && x(!0);
        let e = setTimeout(() => {
            x(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [u]);
    let { id: g, expiresAt: v, discountId: j, discount: f } = t,
        b =
            a.find((e) => {
                let { value: t } = e;
                return t === j;
            })?.label ?? "Unknown",
        y = null != v,
        E = t.hasExpired(),
        C = t.isApplied();
    async function _() {
        (m(!0), y ? await S({ expiresAt: null }) : await (0, oy.u1)(void 0, t), n(), m(!1));
    }
    async function S(e) {
        let { expiresAt: t } = e;
        m(!0);
        try {
            await l7.Bo.patch({
                url: ex.Rsh.UPDATE_USER_OFFER(g, "discount"),
                body: { expires_at: t },
                rejectWithError: !0,
            });
        } finally {
            (n(), m(!1));
        }
    }
    return (
        o.useEffect(() => {
            if (s) {
                let e = setTimeout(() => {
                    i(!1);
                }, 3e3);
                return () => {
                    clearTimeout(e);
                };
            }
            if (d) {
                let e = setTimeout(() => {
                    c(!1);
                }, 3e3);
                return () => {
                    clearTimeout(e);
                };
            }
        }, [s, d]),
        (0, r.jsxs)("div", {
            className: Y()(sG.Nr, sG.id),
            children: [
                (0, r.jsx)("div", {
                    className: Y()(sG.nM, sG.S7),
                    children: (0, r.jsx)(Z.D, { variant: "heading-lg/semibold", color: "text-default", children: b }),
                }),
                (0, r.jsxs)(q.D, {
                    className: Y()(sG.nM, sG.QB),
                    onClick: () => {
                        (0, nY.C)(g, () => i(!0));
                    },
                    children: [
                        (0, r.jsxs)(p.E, { variant: "eyebrow", color: "text-default", children: ["Offer: ", g] }),
                        s
                            ? (0, r.jsx)(of.CheckmarkLargeIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: Y()(sG.Kk, sG.mK),
                              })
                            : (0, r.jsx)(nB.CopyIcon, { size: "xs", color: "currentColor", className: sG.Kk }),
                    ],
                }),
                (0, r.jsxs)(q.D, {
                    className: Y()(sG.nM, sG.QB),
                    onClick: () => {
                        (0, nY.C)(j, () => c(!0));
                    },
                    children: [
                        (0, r.jsxs)(p.E, { variant: "eyebrow", color: "text-default", children: ["Discount: ", j] }),
                        d
                            ? (0, r.jsx)(of.CheckmarkLargeIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: Y()(sG.Kk, sG.mK),
                              })
                            : (0, r.jsx)(nB.CopyIcon, { size: "xs", color: "currentColor", className: sG.Kk }),
                    ],
                }),
                f?.amount != null &&
                    (0, r.jsx)("div", {
                        children: (0, r.jsxs)(p.E, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: [f.amount, "% off"],
                        }),
                    }),
                (0, r.jsxs)("div", {
                    className: sG.nM,
                    children: [
                        (0, r.jsxs)(p.E, {
                            variant: "eyebrow",
                            color: "text-overlay-light",
                            children: ["Expires (", (0, ob.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nq.Xm)(v?.toISOString()),
                            onChange: (e) =>
                                S({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null }),
                        }),
                    ],
                }),
                (0, r.jsx)(oO, {
                    acked: y,
                    expired: E,
                    inStore: l,
                    onClick: _,
                    secondaryBadge: { active: C, label: "Applied" },
                }),
                (0, r.jsx)(q.D, {
                    className: sG.aR,
                    onClick: async () => {
                        (m(!0), await oD(g, "discount"), n(), m(!1));
                    },
                    children: (0, r.jsx)(nV.TrashIcon, {
                        size: "md",
                        color: "currentColor",
                        className: Y()(sG.Kk, sG.fy),
                    }),
                }),
                (0, r.jsx)("div", { className: Y()(sG.g4, { [sG.VP]: u || h }), children: (0, r.jsx)(tu.y, {}) }),
            ],
        })
    );
}
function oM() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState([]),
        [l, s] = o.useState(),
        [i, c] = o.useState(),
        [u, m] = o.useState(!0),
        { discountOffers: h, trialOffers: v } = (0, d.cf)([o_.A], () => ({
            discountOffers: Object.values(o_.A.getState().userDiscountOffers).sort((e, t) => e.id.localeCompare(t.id)),
            trialOffers: Object.values(o_.A.getState().userTrialOffers).sort((e, t) => e.id.localeCompare(t.id)),
        })),
        [f, b] = o.useState([]),
        [y, E] = o.useState([]),
        [C, _] = o.useState(10080),
        [S, N] = o.useState([]),
        A = o.useMemo(() => new Set([...v, ...h].map((e) => e.id)), [v, h]),
        k = o.useMemo(() => [...v, ...f.filter((e) => !A.has(e.id))], [v, f, A]),
        D = o.useMemo(() => [...h, ...y.filter((e) => !A.has(e.id))], [h, y, A]),
        { entitlements: I, deleteFractionalPremium: T, refreshEntitlementList: O } = sP();
    async function R() {
        null != l && (await ok(l, "trial"), m(!0));
    }
    async function w() {
        null != i && (await ok(i, "discount"), m(!0));
    }
    async function M() {
        (await oI(), m(!0));
    }
    async function L() {
        let e = new Date(Date.now() + 60 * C * 1e3).toISOString();
        (await oT(e), O());
    }
    return (
        o.useEffect(() => {
            O();
        }, [O]),
        o.useEffect(() => {
            N(I.filter((e) => e.sourceType === ex.GD.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [I]),
        o.useEffect(() => {
            (0 === e.length || 0 === a.length || u) &&
                oN().then((e) => {
                    let a = Object.keys(e.trial).map((t) => ({ label: t, value: e.trial[t] })),
                        r = Object.keys(e.discount).map((t) => ({ label: t, value: e.discount[t] }));
                    (t(a), n(r), null == l && s(a[0].value), null == i && c(r[0].value));
                });
        }, [e, a, l, i, u]),
        o.useEffect(() => {
            u &&
                (m(!1),
                o_.A.forceReset(),
                (0, oy._D)(),
                oA().then((e) => {
                    (b(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        E(e.discount.sort((e, t) => e.id.localeCompare(t.id))));
                }));
        }, [u]),
        (0, r.jsx)(g.Ip, {
            className: tZ.nd,
            children: (0, r.jsxs)("div", {
                className: sG.l$,
                children: [
                    (0, r.jsxs)("section", {
                        className: sG.uW,
                        children: [
                            (0, r.jsx)(Z.D, { variant: "heading-md/semibold", children: "Utils" }),
                            (0, r.jsxs)("div", {
                                className: sG.Uo,
                                children: [
                                    (0, r.jsx)(x.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Clear all User Offers",
                                        onClick: M,
                                    }),
                                    (0, r.jsx)(x.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Clear Mobile Trials DismissibleContent",
                                        onClick: () => (0, aL.xB)(aM.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                    }),
                                    (0, r.jsx)(x.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Clear Offer Nagbar DismissibleContent",
                                        onClick: () => (0, aL._N)(aM.M.NAGBAR_NOTICE_OFFER_EXPIRING),
                                    }),
                                    (0, r.jsx)(x.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Refresh DevTools",
                                        onClick: () => m(!0),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)("section", {
                        className: sG.uW,
                        children: (0, r.jsxs)("div", {
                            className: sG.bd,
                            children: [
                                (0, r.jsx)(j.l, {
                                    label: "Create a Trial Offer",
                                    options: e,
                                    formatOption: (e) => {
                                        let { label: t, value: a } = e;
                                        return { label: t, value: a, id: a };
                                    },
                                    value: l,
                                    placeholder: "Trial Type",
                                    onSelectionChange: s,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(x.$, { variant: "primary", text: "Create", onClick: R }),
                            ],
                        }),
                    }),
                    (0, r.jsx)("section", {
                        className: sG.uW,
                        children: (0, r.jsxs)("div", {
                            className: sG.bd,
                            children: [
                                (0, r.jsx)(j.l, {
                                    label: "Create a Discount Offer",
                                    options: a,
                                    formatOption: (e) => {
                                        let { label: t, value: a } = e;
                                        return { label: t, value: a, id: a };
                                    },
                                    value: i,
                                    placeholder: "Discount Type",
                                    onSelectionChange: c,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(x.$, { variant: "primary", text: "Create", onClick: w }),
                            ],
                        }),
                    }),
                    k.length > 0 &&
                        (0, r.jsxs)("section", {
                            className: sG.uW,
                            children: [
                                (0, r.jsx)(Z.D, { variant: "heading-md/semibold", children: "Existing Trial Offers" }),
                                (0, r.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "* indicates the offer is currently in UserOfferStore.",
                                }),
                                k.map((t) =>
                                    (0, r.jsx)(
                                        oR,
                                        { offer: t, offerOptions: e, forceRefetch: () => m(!0), inStore: A.has(t.id) },
                                        t.id,
                                    ),
                                ),
                            ],
                        }),
                    D.length > 0 &&
                        (0, r.jsxs)("section", {
                            className: sG.uW,
                            children: [
                                (0, r.jsx)(Z.D, {
                                    variant: "heading-md/semibold",
                                    children: "Existing Discount Offers",
                                }),
                                (0, r.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "* indicates the offer is currently in UserOfferStore.",
                                }),
                                D.map((e) =>
                                    (0, r.jsx)(
                                        ow,
                                        { offer: e, offerOptions: a, forceRefetch: () => m(!0), inStore: A.has(e.id) },
                                        e.id,
                                    ),
                                ),
                            ],
                        }),
                    (0, r.jsx)("section", {
                        className: sG.uW,
                        children: (0, r.jsxs)("div", {
                            className: sG.bd,
                            children: [
                                (0, r.jsx)(j.l, {
                                    label: "Create a Reverse Trial Entitlement",
                                    options: [
                                        { id: "5min", label: "5 minutes", value: 5 },
                                        { id: "1hour", label: "1 hour", value: 60 },
                                        { id: "1day", label: "1 day", value: 1440 },
                                        { id: "1week", label: "1 week", value: 10080 },
                                    ],
                                    value: C,
                                    placeholder: "Reverse Trial Length",
                                    onSelectionChange: _,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(x.$, { variant: "primary", text: "Create", onClick: L }),
                            ],
                        }),
                    }),
                    S.length > 0 &&
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(p.E, {
                                    style: { marginTop: "15px" },
                                    variant: "text-md/bold",
                                    children: "Active reverse trial",
                                }),
                                (0, r.jsx)("div", {
                                    children: S.map((e) =>
                                        (0, r.jsx)(sF, { entitlement: e, active: !0, onDelete: () => T(e.id) }, e.id),
                                    ),
                                }),
                            ],
                        }),
                ],
            }),
        })
    );
}
var oL = a(872162),
    oP = a(26279),
    oU = a(628577);
let oG = {
        [oP.Re.UNSPECIFIED]: "Unspecified",
        [oP.Re.DRAFT]: "Draft",
        [oP.Re.SIGNED]: "Signed",
        [oP.Re.DISCARDED]: "Discarded",
        [oP.Re.SIGNING_IN_PROGRESS]: "Signing In Progress",
        [oP.Re.SIGNING_FAILED]: "Signing Failed",
    },
    oB = { [oP.BM.UNSPECIFIED]: "Unspecified", [oP.BM.ONE_TIME]: "One Time", [oP.BM.SUBSCRIPTION]: "Subscription" };
function oF() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(!0),
        [l, s] = o.useState(null),
        i = o.useCallback(async () => {
            (n(!0), s(null));
            try {
                let e = await l7.Bo.get({ url: `${ex.Rsh.ORDER_LIST}?limit=5`, rejectWithError: !0 });
                t(e.body ?? []);
            } catch (e) {
                s(e instanceof Error ? e.message : "Failed to fetch orders");
            } finally {
                n(!1);
            }
        }, []);
    o.useEffect(() => {
        i();
    }, [i]);
    let [d, c] = o.useState(!1),
        [u, m] = o.useState(null),
        [h, v] = o.useState(() => {
            let e = oe.Ay.getChannelId();
            return null != e ? e : "";
        }),
        j = o.useCallback(async () => {
            (c(!0), m(null));
            try {
                let e = h.trim(),
                    t = await l7.Bo.post({
                        url: ex.Rsh.DEBUG_TEMPORAL_INFRA_PROOF_OF_CONCEPT,
                        body: "" !== e ? { channel_id: e } : {},
                        rejectWithError: !0,
                    }),
                    a = null != t.body ? t.body.run_id : "unknown";
                m(`Started workflow run ${a}`);
            } catch (e) {
                m(e instanceof Error ? e.message : "Failed to start workflow");
            } finally {
                c(!1);
            }
        }, [h]);
    return (0, r.jsx)(g.Ip, {
        className: tZ.nd,
        children: (0, r.jsxs)("div", {
            className: sG.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: sG.dL,
                    style: { marginBottom: "16px" },
                    children: [
                        (0, r.jsxs)(p.E, { variant: "text-lg/bold", children: ["Orders (last ", 5, ")"] }),
                        (0, r.jsx)(x.$, { variant: "secondary", size: "sm", text: "Refresh", onClick: i, loading: a }),
                    ],
                }),
                null != l && (0, r.jsx)(J.w, { type: "critical", children: l }),
                !a &&
                    null != e &&
                    0 === e.length &&
                    (0, r.jsx)(p.E, { variant: "text-sm/normal", color: "text-muted", children: "No orders found." }),
                null != e && e.map((e) => (0, r.jsx)(o$, { order: e }, e.id)),
                (0, r.jsxs)(Q.B, {
                    direction: "vertical",
                    gap: 8,
                    style: { marginTop: "16px" },
                    children: [
                        (0, r.jsx)(f.k, {
                            fullWidth: !0,
                            value: h,
                            onChange: v,
                            placeholder: "Channel ID (blank to skip the message)",
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Run Temporal Infra Proof of Concept",
                            onClick: j,
                            loading: d,
                        }),
                        null != u && (0, r.jsx)(p.E, { variant: "text-xs/normal", color: "text-muted", children: u }),
                    ],
                }),
            ],
        }),
    });
}
function o$(e) {
    let { order: t } = e,
        [a, n] = o.useState(!1),
        [l, s] = o.useState(!1),
        i = oG[t.status] ?? `Unknown (${t.status})`,
        d = [
            { id: "status", label: `Status: ${i}`, isDisabled: !1 },
            { id: "revision", label: `Revision: ${t.revision}`, isDisabled: !1 },
            { id: "created", label: `Created: ${new Date(t.created_at).toLocaleString()}`, isDisabled: !1 },
        ],
        c = o.useCallback(() => {
            (navigator.clipboard.writeText(t.id), s(!0), setTimeout(() => s(!1), 2e3));
        }, [t.id]);
    return (0, r.jsxs)("div", {
        className: sG.Nr,
        children: [
            (0, r.jsxs)(Q.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                style: { marginBottom: "4px" },
                children: [
                    (0, r.jsx)(p.E, { variant: "text-md/semibold", children: t.id }),
                    (0, r.jsx)(x.$, { variant: "secondary", size: "sm", text: l ? "Copied!" : "Copy ID", onClick: c }),
                ],
            }),
            (0, r.jsx)(oL.C, { items: d, label: "Order information", layout: "inline" }),
            (0, r.jsxs)(Q.B, {
                direction: "vertical",
                gap: 4,
                style: { marginTop: "8px" },
                children: [
                    (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "Line Items" }),
                    0 === t.order_line_items.length
                        ? (0, r.jsx)(p.E, { variant: "text-xs/normal", color: "text-muted", children: "No line items" })
                        : t.order_line_items.map((e) =>
                              (0, r.jsxs)(
                                  Q.B,
                                  {
                                      direction: "horizontal",
                                      gap: 12,
                                      children: [
                                          (0, r.jsxs)(p.E, {
                                              variant: "text-xs/normal",
                                              children: ["SKU: ", e.sku_id],
                                          }),
                                          (0, r.jsxs)(p.E, {
                                              variant: "text-xs/normal",
                                              children: ["Qty: ", e.quantity],
                                          }),
                                          (0, r.jsxs)(p.E, {
                                              variant: "text-xs/normal",
                                              children: [
                                                  "Type: ",
                                                  oB[e.purchase_type] ?? `Unknown (${e.purchase_type})`,
                                              ],
                                          }),
                                          null != e.subscription_plan_id &&
                                              (0, r.jsxs)(p.E, {
                                                  variant: "text-xs/normal",
                                                  children: ["Plan: ", e.subscription_plan_id],
                                              }),
                                      ],
                                  },
                                  e.id,
                              ),
                          ),
                ],
            }),
            null != t.billing_facet &&
                (0, r.jsxs)("div", {
                    className: oU.VK,
                    style: { marginTop: "8px" },
                    children: [
                        (0, r.jsxs)(q.D, {
                            onClick: () => n((e) => !e),
                            className: oU.Eh,
                            children: [
                                (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "Billing Facet" }),
                                (0, r.jsx)(sT.A, { direction: a ? sT.A.Directions.UP : sT.A.Directions.DOWN }),
                            ],
                        }),
                        a &&
                            (0, r.jsxs)("ul", {
                                className: oU.j3,
                                children: [
                                    (0, r.jsxs)("li", {
                                        children: [
                                            (0, r.jsx)(p.E, {
                                                variant: "text-xs/semibold",
                                                children: "payment_gateway",
                                            }),
                                            (0, r.jsx)(p.E, {
                                                variant: "text-xs/normal",
                                                children: String(t.billing_facet.payment_gateway),
                                            }),
                                        ],
                                    }),
                                    null != t.billing_facet.payment_source_id &&
                                        (0, r.jsxs)("li", {
                                            children: [
                                                (0, r.jsx)(p.E, {
                                                    variant: "text-xs/semibold",
                                                    children: "payment_source_id",
                                                }),
                                                (0, r.jsx)(p.E, {
                                                    variant: "text-xs/normal",
                                                    children: t.billing_facet.payment_source_id,
                                                }),
                                            ],
                                        }),
                                    null != t.billing_facet.currency &&
                                        (0, r.jsxs)("li", {
                                            children: [
                                                (0, r.jsx)(p.E, {
                                                    variant: "text-xs/semibold",
                                                    children: "selected currency",
                                                }),
                                                (0, r.jsx)(p.E, {
                                                    variant: "text-xs/normal",
                                                    children: t.billing_facet.currency,
                                                }),
                                            ],
                                        }),
                                    null != t.billing_facet.invoice_preview &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(p.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "currency",
                                                        }),
                                                        (0, r.jsx)(p.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.currency,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(p.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "subtotal",
                                                        }),
                                                        (0, r.jsx)(p.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.subtotal,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(p.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "tax",
                                                        }),
                                                        (0, r.jsx)(p.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.tax,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(p.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "total",
                                                        }),
                                                        (0, r.jsx)(p.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.total,
                                                        }),
                                                    ],
                                                }),
                                                t.billing_facet.invoice_preview.line_items.length > 0 &&
                                                    (0, r.jsxs)("li", {
                                                        children: [
                                                            (0, r.jsx)(p.E, {
                                                                variant: "text-xs/semibold",
                                                                children: "invoice line items",
                                                            }),
                                                            (0, r.jsx)(Q.B, {
                                                                direction: "vertical",
                                                                gap: 4,
                                                                style: { marginTop: "4px" },
                                                                children:
                                                                    t.billing_facet.invoice_preview.line_items.map(
                                                                        (e) =>
                                                                            (0, r.jsxs)(
                                                                                Q.B,
                                                                                {
                                                                                    direction: "horizontal",
                                                                                    gap: 12,
                                                                                    children: [
                                                                                        (0, r.jsxs)(p.E, {
                                                                                            variant: "text-xs/normal",
                                                                                            children: [
                                                                                                "ref: ",
                                                                                                e.ref_order_line_item_id,
                                                                                            ],
                                                                                        }),
                                                                                        (0, r.jsxs)(p.E, {
                                                                                            variant: "text-xs/normal",
                                                                                            children: [
                                                                                                "unit: ",
                                                                                                e.unit_price,
                                                                                            ],
                                                                                        }),
                                                                                        (0, r.jsxs)(p.E, {
                                                                                            variant: "text-xs/normal",
                                                                                            children: [
                                                                                                "qty: ",
                                                                                                e.quantity,
                                                                                            ],
                                                                                        }),
                                                                                    ],
                                                                                },
                                                                                e.ref_order_line_item_id,
                                                                            ),
                                                                    ),
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                ],
                            }),
                    ],
                }),
        ],
    });
}
var oV = a(935462),
    oW = a(103557),
    oz = a(93688),
    oH = a(717400),
    oK = a(676955),
    oY = a(31300),
    oq = a(500060),
    oJ = a(391973),
    oQ = a(684013),
    oX = a(765671),
    oZ = a(235986),
    o0 = a(742589),
    o1 = a(41984),
    o2 = a(181435),
    o3 = a(435736),
    o6 = a(296027),
    o5 = a(515183),
    o8 = a(127242),
    o4 = a(869014),
    o9 = a(528772),
    o7 = a(38502),
    de = a(532624),
    dt = a(773371),
    da = a(927813),
    dn = a(996439),
    dl = a(350535),
    ds = a(9302),
    di = a(644434),
    dr = a(998798);
let dd = {
        [ex.uss.CLICK_ZONE_DEBUG]: (e) => ({
            type: ex.uss.CLICK_ZONE_DEBUG,
            id: (0, eL.A)(),
            layoutId: e,
            anchor: { top: 0.35, right: 0.35 },
            size: { width: 100, height: 100 },
            ...o7.A.getWidgetDefaultSettings(ex.uss.CLICK_ZONE_DEBUG),
            pinned: !0,
        }),
        [ex.uss.PERFORMANCE_DEBUG]: (e) => ({
            type: ex.uss.PERFORMANCE_DEBUG,
            id: (0, eL.A)(),
            layoutId: e,
            anchor: { top: 0.1, right: 0.1 },
            size: { fixed: !1, width: "auto", height: "auto" },
            ...o7.A.getWidgetDefaultSettings(ex.uss.PERFORMANCE_DEBUG),
            pinned: !0,
        }),
    },
    dc = {};
function du(e) {
    let { id: t } = e,
        [a, n] = o.useState(!1);
    return (
        o.useEffect(() => {
            let e;
            return (
                a &&
                    (e = setTimeout(() => {
                        n(!1);
                    }, 1e3)),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [a]),
        (0, r.jsxs)(nG.$n, {
            look: nG.$n.Looks.LINK,
            color: nG.$n.Colors.LINK,
            size: nG.$n.Sizes.MIN,
            onClick: function () {
                (0, nY.C)(t, () => n(!0));
            },
            className: dr.DT,
            children: ["Game Id: ", t, " ", a ? nS.intl.string(nS.t.t5VZ88) : null],
        })
    );
}
let dm = o.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, d.bG)([E.Ay], () => E.Ay.getGameOrTransformedSubgameForPID(t.pid)),
            n = (0, d.bG)([S.A], () => S.A.getGameForPID(t.pid)),
            { data: l } = (0, aA.I)(n?.id),
            s = (0, d.bG)([E.Ay], () => (null == a ? null : E.Ay.getGameOverlayStatus(a)));
        return (0, r.jsxs)("div", {
            className: dr.st,
            children: [
                (0, r.jsx)(p.E, { variant: "text-md/bold", color: "text-strong", children: t.gameName }),
                (0, r.jsx)(p.E, { variant: "text-sm/bold", color: "text-subtle", children: t.pid }),
                (0, r.jsx)(p.E, { variant: "text-sm/normal", color: "text-subtle", children: a?.exeName }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["isLauncher: ", a?.isLauncher ? "Yes" : "No"],
                }),
                null != t.gameId &&
                    (0, r.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: (0, r.jsx)(du, { id: t.gameId }),
                    }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, o5.wR)(t.fullscreenType)],
                }),
                (0, r.jsxs)(p.E, { variant: "text-sm/normal", color: "text-default", children: ["state: ", t.state] }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"],
                }),
                (0, r.jsxs)("div", {
                    className: dr.st,
                    children: [
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["source: ", t.source],
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["legacyEnabled: ", t.legacyEnabled ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["oopEnabled: ", t.oopEnabled ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["overlayMethod: ", (0, o5.gK)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != s &&
                    (0, r.jsxs)("div", {
                        className: dr.st,
                        children: [
                            (0, r.jsxs)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw source: ", s.source],
                            }),
                            (0, r.jsxs)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledLegacy: ", s.enabledLegacy ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledOOP: ", s.enabledOOP ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw overlayMethod: ", (0, o5.gK)(s.overlayMethod)],
                            }),
                        ],
                    }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hidden: ", a?.hidden ? "Yes" : "No"],
                }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hook: ", l?.hook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlay: ", l?.overlay ? "Yes" : "No"],
                }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlayCompatibilityHook: ", l?.overlayCompatibilityHook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["supportsOutOfProcessOverlay: ", l?.supportsOutOfProcessOverlay ? "Yes" : "No"],
                }),
            ],
        });
    }),
    dh = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, d.cf)([dt.default], () => dt.default.getOverlayPIDStatuses()),
            n = (0, d.cf)([o6.default], () => o6.default.getTrackedGames()),
            l = (0, d.bG)([dt.default], () => dt.default.isInputLocked(t), [t]),
            s = (0, d.bG)([dt.default], () => dt.default.DEV_isInputLockedV3(t), [t]),
            i = (0, d.bG)([dt.default], () => dt.default.DEV_isInputLocked(t), [t]),
            o = (0, d.bG)([dt.default], () => dt.default.isReady(t), [t]);
        return (0, r.jsxs)("div", {
            className: dr.st,
            children: [
                (0, r.jsx)(p.E, { variant: "text-md/semibold", color: "text-strong", children: `${t}` }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: [
                        "Screen Type Resolution: ",
                        (function (e) {
                            let t = n[e]?.timer;
                            if (null == t || null == t.screenTypeResolutionTimestamp) return "...";
                            let a = t.screenTypeResolutionTimestamp - t.startTrackingTimestamp;
                            return `${a.toFixed(2)}ms`;
                        })(t),
                    ],
                }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: [
                        "Window Creation: ",
                        (function (e) {
                            let t = n[e]?.timer;
                            if (
                                null == t ||
                                null == t.moduleTrackingTimestamp ||
                                null == t.screenTypeResolutionTimestamp
                            )
                                return "...";
                            let a = t.moduleTrackingTimestamp - t.screenTypeResolutionTimestamp;
                            return `${a.toFixed(2)}ms`;
                        })(t),
                    ],
                }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: [
                        "Rendering: ",
                        (function (e) {
                            let t = n[e]?.timer;
                            if (null == t || null == t.overlayRenderingTimestamp || null == t.moduleTrackingTimestamp)
                                return "...";
                            let a = t.overlayRenderingTimestamp - t.moduleTrackingTimestamp;
                            return `${a.toFixed(2)}ms`;
                        })(t),
                    ],
                }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["Bridge Status: ", a.get(Number(t))],
                }),
                (0, r.jsxs)(p.E, { variant: "text-sm/normal", color: "text-strong", children: ["isInputLocked: ", l] }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV3: ", s],
                }),
                (0, r.jsxs)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV2: ", i],
                }),
                (0, r.jsxs)(p.E, { variant: "text-sm/normal", color: "text-strong", children: ["isReady: ", o] }),
            ],
        });
    });
function dx(e) {
    var t;
    let a = ((t = Object.values((0, d.yK)([o7.A], () => o7.A.getWidgetsForLayout(di.G)))), t.find((t) => t.type === e));
    return [
        a,
        function () {
            if (null != a) (0, oJ.uv)(a.id);
            else {
                let t = dd[e];
                if (null == t) return;
                let a = t(di.G);
                (0, oJ.jn)(a);
            }
        },
    ];
}
function dp(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? `${e.toFixed(2)}ms` : (0, nq.i$)(nU()(e), "h:mm:ss.SSS");
}
let dg = o.memo(function (e) {
    let { pid: t, ...a } = e,
        n = (0, d.bG)(
            [o6.default],
            () => {
                if (null == t) return "Unknown";
                let e = o6.default.getTrackedGameByPid(t)?.gameName;
                return null != e ? ((dc[t] = e), e) : (dc[t] ?? "Unknown");
            },
            [t],
        );
    return (0, r.jsx)(p.E, { ...a, variant: "text-md/semibold", color: "text-strong", children: n });
});
function dv() {
    let e = (0, d.bG)([o8.A], () => o8.A.hasRenderDebugMode(o1.x7.TrackFocusPIDs)),
        t = (0, d.yK)([o6.default], () => o6.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, r.jsxs)("div", {
        className: dr.st,
        children: [
            (0, r.jsxs)("div", {
                className: dr.Iv,
                children: [
                    (0, r.jsx)(m.d, {
                        checked: e,
                        onChange: () =>
                            void oQ.A.setRenderDebugMode(
                                !o8.A.hasRenderDebugMode(o1.x7.TrackFocusPIDs),
                                o1.x7.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, r.jsx)(q.D, {
                        className: dr.LL,
                        onClick: () => oQ.A.clearTrackedPids(),
                        children: (0, r.jsx)(nV.TrashIcon, { size: "md", color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsxs)(g.Ip, {
                className: Y()(dr.st, dr.XG),
                children: [
                    0 === t.length &&
                        (0, r.jsx)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: "No recent focused pids",
                        }),
                    [...t].reverse().map((e) => {
                        let [t, a, n] = e;
                        return (0, r.jsx)(
                            o.Fragment,
                            {
                                children: (0, r.jsx)(sr.m, {
                                    position: "left",
                                    text: n === o1.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsxs)(p.E, {
                                            variant: "text-sm/medium",
                                            color: n === o1.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                                            children: [
                                                (0, r.jsx)(dg, { pid: a, tag: "span" }),
                                                " - ",
                                                a?.toString() ?? "null",
                                                " @ ",
                                                dp(t),
                                            ],
                                        }),
                                    }),
                                }),
                            },
                            `${a}-${t}`,
                        );
                    }),
                ],
            }),
        ],
    });
}
let dj = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, d.bG)(
                [o6.default, E.Ay],
                () => {
                    if (null == t) return null;
                    let e = o6.default.getTrackedGameByPid(t)?.fullscreenType;
                    if (null != e) return e;
                    let a = E.Ay.getGameOrTransformedSubgameForPID(t);
                    return a?.fullscreenType ?? l5.aI.UNKNOWN;
                },
                [t],
            );
        return (0, r.jsxs)(p.E, {
            variant: "text-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != a ? (0, o5.wR)(a) : "Unknown"],
        });
    }),
    df = o.memo(function () {
        let e = (0, d.cf)([o6.default], () => o6.default.getTrackedGames()),
            [t, a] = o.useState({}),
            n = o.useRef(null);
        return (
            o.useEffect(
                () => (
                    (n.current = setInterval(async () => {
                        let e = E.Ay.getRunningGames(),
                            t = [],
                            n = Date.now();
                        for (let a of e) t.push((0, o5.E1)(a.pid, 0).then((e) => [a.pid, e, n]));
                        let l = await Promise.all(t);
                        a((e) =>
                            l.reduce(
                                (e, t) => {
                                    let [a, n, l] = t;
                                    if (null == n || null == a) return e;
                                    let s = e[a] ?? [],
                                        i = s[s.length - 1]?.screenType;
                                    return (
                                        (0 === s.length || i !== n) &&
                                            (e[a] = [...s, { pid: a, screenType: n, timestamp: l }]),
                                        e
                                    );
                                },
                                { ...e },
                            ),
                        );
                    }, +da.A.Millis.SECOND)),
                    () => clearInterval(n.current)
                ),
                [],
            ),
            (0, r.jsx)(sr.m, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (0, r.jsx)("div", {
                    children: (0, r.jsxs)(g.Ip, {
                        className: Y()(dr.st, dr.XG),
                        children: [
                            0 === Object.keys(e).length &&
                                (0, r.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: "No recent screen types",
                                }),
                            Object.values(e).map((e) =>
                                (0, r.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, r.jsx)(dg, { tag: "div", pid: e.pid }),
                                            (0, r.jsx)(dj, { pid: e.pid }),
                                            null != t[e.pid] &&
                                                [...t[e.pid]].reverse().map((t) => {
                                                    let { screenType: a, timestamp: n } = t;
                                                    return (0, r.jsx)(
                                                        p.E,
                                                        {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            children: `${a}:${(0, o5.wR)(a)} @ ${dp(n)}`,
                                                        },
                                                        `${e.pid}-${a}-${n}`,
                                                    );
                                                }),
                                        ],
                                    },
                                    e.pid,
                                ),
                            ),
                        ],
                    }),
                }),
            })
        );
    }),
    db = o.memo(function () {
        let e = (0, d.cf)([o6.default], () => o6.default.getTrackedGames()),
            t = (0, ds.getPID)(),
            a = (0, d.bG)([o6.default], () => o6.default.isOverlayOOPEnabledForPid(t), [t]),
            [n, l] = (0, d.yK)([o9.A], () => [o9.A.enabled, o9.A.keepOpen]),
            s = (0, d.bG)([dt.default], () => dt.default.getFocusedPID()),
            i = (0, d.bG)([dt.default], () => dt.default.isFocusedPidOutOfProcess());
        return (0, r.jsxs)("div", {
            className: dr.st,
            children: [
                0 === Object.keys(e).length &&
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(e).map((e) => (0, r.jsx)(dh, { pid: e.pid }, e.pid)),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["focusedPID: ", s?.toString() ?? "null"],
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isFocusedPidOutOfProcess: ", i ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["processPid: ", t?.toString() ?? "unknown"],
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isOOPEnabledForPid: ", a ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.enabled: ", n ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.keepOpen: ", l ? "Yes" : "No"],
                        }),
                    ],
                }),
            ],
        });
    }),
    dy = [
        {
            mode: o1.x7.ClickZones,
            label: "Click Zone Debug Mode",
            tooltip: "Enables a red border around click zones to help with debugging.",
        },
        {
            mode: o1.x7.WidgetAreas,
            label: "Render Debug Mode",
            tooltip:
                "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        },
        {
            mode: o1.x7.WindowContainer,
            label: "Window Container Debug Mode",
            tooltip: "Enables a border the overlay window",
        },
        {
            mode: o1.x7.DisabledGPUBoost,
            label: "Disable GPU Boost",
            tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: o1.x7.ForceGPUBoost,
            label: "Force GPU Boost",
            tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: o1.x7.OverlayRafManagerForceEnabled,
            label: "Overlay SmartRAF",
            tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        },
        {
            mode: o1.x7.LegacyOverlayLogging,
            label: "Legacy Overlay Logging",
            tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console.",
        },
    ],
    dE = o.memo(function () {
        let [e, t] = dx(ex.uss.CLICK_ZONE_DEBUG),
            [a, n] = dx(ex.uss.PERFORMANCE_DEBUG),
            l = (0, d.bG)([o8.A], () => o8.A.getRenderDebugModes()),
            [s, i] = o.useState({});
        return (
            o.useEffect(() => {
                let e = setInterval(() => {
                    i({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, r.jsx)("div", {
                className: dr.st,
                children: dy.map((s) => {
                    let i =
                        s.mode === o1.x7.OverlayRafManagerForceEnabled
                            ? `${s.label} (${o4.A.getLastRAFCallbackReason()})`
                            : s.label;
                    function d() {
                        return s.mode === o1.x7.ClickZones
                            ? null != e
                            : s.mode === o1.x7.WidgetAreas
                              ? null != a
                              : l.has(s.mode);
                    }
                    return (0, r.jsx)(
                        o.Fragment,
                        {
                            children: (0, r.jsx)(m.d, {
                                checked: d(),
                                onChange: function () {
                                    var e;
                                    let a = d();
                                    (s.mode === o1.x7.ClickZones && t(),
                                        s.mode === o1.x7.WidgetAreas && n(),
                                        (e = s.mode),
                                        oQ.A.setRenderDebugMode(!a, e));
                                },
                                label: i,
                                description: s.tooltip,
                            }),
                        },
                        s.mode,
                    );
                }),
            })
        );
    }),
    dC = o.memo(function () {
        let e = (0, d.cf)([o6.default], () => o6.default.getTrackedGames()),
            t = (0, d.bG)([E.Ay], () => E.Ay.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                t.length > 0 &&
                    (0, r.jsx)(sr.m, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsxs)("div", {
                                className: dr.st,
                                children: [
                                    (0, r.jsx)(p.E, {
                                        variant: "text-md/bold",
                                        color: "text-feedback-critical",
                                        children: "Untracked Running Games",
                                    }),
                                    t.map((e) =>
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(
                                                    p.E,
                                                    {
                                                        variant: "text-sm/normal",
                                                        color: "text-feedback-critical",
                                                        children: `${e.pid} - ${e.name} (${e.exeName})`,
                                                    },
                                                    e.pid,
                                                ),
                                                (0, r.jsx)(dj, { pid: e.pid }),
                                            ],
                                        }),
                                    ),
                                ],
                            }),
                        }),
                    }),
                (0, r.jsx)(sr.m, {
                    position: "left",
                    text: "The current running games process information",
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: dr.st,
                            children: [
                                0 === Object.keys(e).length &&
                                    (0, r.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: "No running games",
                                    }),
                                Object.values(e).map((e) => (0, r.jsx)(dm, { trackedGame: e }, e.pid)),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    d_ = o.memo(function () {
        let e = (0, d.bG)([o6.default], () => o6.default.getForcedRenderMode()),
            [t, a] = o.useState(e),
            n = [
                { label: o1.V6.UNSET, value: o1.V6.UNSET, id: o1.V6.UNSET },
                { label: o1.V6.IN_PROCESS_V2, value: o1.V6.IN_PROCESS_V2, id: o1.V6.IN_PROCESS_V2 },
                { label: o1.V6.OUT_OF_PROCESS_V3, value: o1.V6.OUT_OF_PROCESS_V3, id: o1.V6.OUT_OF_PROCESS_V3 },
                {
                    label: o1.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: o1.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    id: o1.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => ({ ...t, label: `${t.label} ${e === t.value ? "(current)" : ""}` }));
        return (0, r.jsx)(j.l, {
            label: "Override the overlay render mode",
            value: t,
            options: n,
            onSelectionChange: function (e) {
                (a(e), oQ.A.forceRenderMode(e));
            },
            selectionMode: "single",
            fullWidth: !0,
        });
    });
function dS(e) {
    let { modalProps: t, onClose: a } = e,
        [n, l] = o.useState(null);
    function s() {
        a(null);
    }
    return (0, r.jsxs)(oV.EO, {
        size: oV.rI.LARGE,
        "aria-label": "Breadcrumb Import",
        ...t,
        transitionState: t.transitionState,
        parentComponent: "BreadcrumbImportPanel",
        children: [
            (0, r.jsxs)(oV.rQ, {
                align: oZ.A.Align.CENTER,
                justify: oZ.A.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-feedback-critical",
                        children: "Breadcrumb Import",
                    }),
                    (0, r.jsx)(oV.s_, { onClick: s }),
                ],
            }),
            (0, r.jsx)(oV.$m, {
                children: (0, r.jsx)("div", {
                    className: dr.st,
                    children: (0, r.jsx)(oW.f, { label: "Paste JSON Here", onChange: l, value: n ?? "", rows: 12 }),
                }),
            }),
            (0, r.jsx)(oV.jl, {
                children: (0, r.jsxs)(nx.e, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Import",
                            onClick: function () {
                                a(n);
                            },
                        }),
                        (0, r.jsx)(x.$, { variant: "secondary", text: "Clear", onClick: s }),
                    ],
                }),
            }),
        ],
    });
}
let dN = {
    native: { label: "Native", filter: (e) => e.type === o2.ON.NativeLegacy || e.type === o2.ON.NativeOOP },
    render: { label: "Render", filter: (e) => e.type === o2.ON.Renderer },
    flux: { label: "Flux", filter: (e) => e.type === o2.ON.Flux },
    client: { label: "Client", filter: (e) => e.type === o2.ON.OOPModule || e.type === o2.ON.LegacyModule },
};
function dA(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o2.QJ.Info;
    if (t === o2.QJ.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case o2.ON.NativeLegacy:
            return "var(--yellow-500)";
        case o2.ON.NativeOOP:
            return "var(--green-500)";
        case o2.ON.Flux:
            return "var(--brand-400)";
        case o2.ON.Renderer:
            return "var(--brand-500)";
        case o2.ON.LegacyModule:
            return "var(--yellow-300)";
        case o2.ON.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let dk = [
    {
        key: "type",
        cellClassName: dr.SZ,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: a } = e,
                n = dD(t);
            return (0, r.jsx)("div", {
                className: dr.g$,
                style: { color: dA(t, a) },
                children: (0, r.jsx)(n, { color: "currentColor", size: "sm" }),
            });
        },
    },
    {
        key: "Name",
        cellClassName: dr.Cm,
        render(e) {
            let { name: t, type: a, logType: n } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(p.E, {
                        variant: "text-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case o2.QJ.Info:
                                    return "text-strong";
                                case o2.QJ.Warning:
                                    return "text-feedback-warning";
                                case o2.QJ.Error:
                                    return "text-feedback-critical";
                                default:
                                    return "text-subtle";
                            }
                        })(n),
                        children: t,
                    }),
                    (0, r.jsxs)(p.E, { variant: "text-sm/normal", color: "text-subtle", children: ["(", a, ")"] }),
                ],
            });
        },
    },
    {
        key: "Timestamp",
        cellClassName: dr.DK,
        render(e) {
            let { timestamp: t } = e;
            return (0, nq.i$)(nU()(t), "h:mm:ss.SSS");
        },
    },
];
function dD(e) {
    switch (e) {
        case o2.ON.NativeLegacy:
            return oz.W;
        case o2.ON.NativeOOP:
            return oH.q;
        case o2.ON.Renderer:
        case o2.ON.Flux:
            return oK.v;
        case o2.ON.LegacyModule:
            return oY.k;
        case o2.ON.OOPModule:
            return oq.o;
        default:
            return oY.k;
    }
}
function dI(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let dT = ["__webpack_require__", "fn"],
    dO = ["web.js", "web.js.map"],
    dR = [
        {
            id: "details",
            name: "Details",
            group: nh.fu.NONE,
            render: (e) => {
                let { breadcrumb: t, onClose: a } = e,
                    { name: n, type: l, logType: s, nativeId: i, stack: o, data: d, timestamp: c, pid: u } = t,
                    m = nU()(c),
                    h = dD(l);
                return (0, r.jsxs)(g.Ar, {
                    className: dr.bW,
                    children: [
                        (0, r.jsxs)(o0.A, {
                            className: Y()(tZ.jr, dr.nZ),
                            children: [
                                (0, r.jsx)("div", {
                                    style: { color: dA(l, s) },
                                    className: dr.nr,
                                    children: (0, r.jsx)(h, { color: "currentColor", size: "sm" }),
                                }),
                                (0, r.jsxs)(o0.A.Title, {
                                    wrapperClassName: dr.qd,
                                    children: [
                                        n,
                                        " (",
                                        l,
                                        ")",
                                        (0, r.jsx)(q.D, {
                                            tag: "span",
                                            className: dr.KE,
                                            onClick: () => (0, nY.C)(n),
                                            children: (0, r.jsx)(nB.CopyIcon, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(o0.A.Icon, {
                                    icon: nB.CopyIcon,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, nY.C)(dI(t));
                                    },
                                }),
                                (0, r.jsx)(o0.A.Icon, { icon: n$.a, tooltip: "Close", onClick: a }),
                            ],
                        }),
                        (0, r.jsxs)(n8, {
                            className: dr.ZK,
                            children: [
                                (0, r.jsx)(n4, {
                                    name: "Timestamp",
                                    copyValue: m.toISOString(),
                                    children: (0, r.jsx)("time", {
                                        dateTime: m.toISOString(),
                                        title: (0, nq.i$)(m, "LLLL"),
                                        children: (0, nq.i$)(m, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, r.jsx)(n4, {
                                    name: "Log Type",
                                    copyValue: s,
                                    children: (0, r.jsx)("code", { children: s }),
                                }),
                                (0, r.jsx)(n4, {
                                    name: "PID",
                                    copyValue: u?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: u?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(n4, {
                                    name: "Native ID",
                                    copyValue: i?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: i?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(n4, {
                                    name: "Data",
                                    copyValue: dI(d),
                                    children: (0, r.jsx)("code", { children: dI(d) }),
                                }),
                                null != o &&
                                    (0, r.jsx)(n4, {
                                        name: "Stack Trace",
                                        copyValue: o,
                                        children: (0, r.jsx)("code", {
                                            children: o.split("\n").map((e, t) => {
                                                let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != a) {
                                                    let [, e, n, l, s] = a,
                                                        i = n.split(/[\\/]/).pop();
                                                    return dT.includes(e.trim())
                                                        ? null
                                                        : (0, r.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, r.jsx)("span", {
                                                                          className: dr.e0,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !dO.includes(i ?? "") &&
                                                                          (0, r.jsxs)(r.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, r.jsxs)("span", {
                                                                                      className: dr.lz,
                                                                                      title: n,
                                                                                      children: [i, ":", l, ":", s],
                                                                                  }),
                                                                                  ")",
                                                                              ],
                                                                          }),
                                                                  ],
                                                              },
                                                              t,
                                                          );
                                                }
                                                return (0, r.jsx)("div", { children: e }, t);
                                            }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            },
        },
    ],
    dw = {
        searchType: nH.n.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: a, stack: n, data: l } = e,
                s = [t, a, JSON.stringify(l)];
            return (null != n && s.push(n), s);
        },
        throttleMs: 100,
    };
function dM() {
    let { ref: e, height: t } = (0, oX.Ay)(),
        a = (0, d.bG)([o8.A], () => o8.A.isModuleLoggingEnabled()),
        [n, l] = o.useState(a),
        [s, i] = o.useState(!1),
        [c, u] = o.useState(null),
        [m, h] = o.useState(Object.keys(dN)),
        [x, g] = (0, d.bG)([o8.A], () => o8.A.getOverlayLoggingBreadcrumbs(), [], dn.D),
        [v, j] = o.useState(null),
        f = v ?? x,
        b = null != v ? -1 : g;
    o.useEffect(() => {
        0 !== b &&
            (s
                ? u(f.reduce((e, t) => ("game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e), 0))
                : u(null));
    }, [s, f, b]);
    let [y, E] = o.useState(""),
        C = o.useMemo(
            () =>
                0 === b
                    ? []
                    : f.filter((e) => {
                          if (s && null != c && e.timestamp < c) return !1;
                          for (let t of m) {
                              let { filter: a } = dN[t];
                              if (a(e)) return !0;
                          }
                          return !1;
                      }),
            [f, m, c, s, b],
        ),
        [_, S] = o.useState(C),
        [N, A] = o.useState(null),
        k = o.useMemo(() => f.find((e) => e.key === N), [f, N]),
        D = o.useCallback((e) => {
            S(e);
        }, []),
        { renderSelectedTab: I } = (0, nm.A)({ tabs: dR }, []);
    (0, nK.RT)(y, C, D, dw, [f]);
    let T = o.useCallback((e) => {
            (l(e), oQ.A.setModuleLogging(e));
        }, []),
        [O, R] = o.useState(!1),
        w = o.useRef(null),
        M = o.useCallback(() => {
            ((0, nY.C)(JSON.stringify(C)), R(!0));
        }, [C]);
    o.useEffect(() => {
        if (O)
            return (
                (w.current = setTimeout(() => {
                    R(!1);
                }, 4e3)),
                () => {
                    null != w.current && clearTimeout(w.current);
                }
            );
    }, [O]);
    let L = o.useCallback((e) => {
            j(null != e ? JSON.parse(e) : null);
        }, []),
        P = o.useCallback(
            (e) => {
                if (e) return j(null);
                (0, eJ.openModal)(
                    (e) =>
                        (0, r.jsx)(dS, {
                            modalProps: e,
                            onClose: (t) => {
                                (L(t), e.onClose());
                            },
                        }),
                    { modalKey: "breadcrumb-import-panel" },
                    eX.SY,
                );
            },
            [L],
        );
    return (0, r.jsxs)("div", {
        ref: e,
        className: dr.rh,
        children: [
            (0, r.jsxs)("div", {
                className: dr.st,
                children: [
                    (0, r.jsxs)("div", {
                        className: Y()(dr._V, dr.XQ),
                        children: [
                            (0, r.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: dr.iR,
                                children: (0, r.jsx)(ou.S, { label: "Poll Native", checked: n, onChange: (e) => T(e) }),
                            }),
                            (0, r.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: dr.iR,
                                children: (0, r.jsx)(ou.S, {
                                    label: "Only Active Games",
                                    checked: s,
                                    onChange: (e) => i(e),
                                }),
                            }),
                            (0, r.jsxs)(q.D, {
                                className: dr.ny,
                                onClick: M,
                                children: [
                                    (0, r.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: O ? "Copied" : "Copy All",
                                    }),
                                    O
                                        ? (0, r.jsx)(of.CheckmarkLargeIcon, {
                                              size: "sm",
                                              color: eQ.A.unsafe_rawColors.GREEN_330.css,
                                          })
                                        : (0, r.jsx)(nB.CopyIcon, { color: "currentColor", size: "sm" }),
                                ],
                            }),
                            (0, r.jsx)(q.D, {
                                className: dr.ny,
                                onClick: () => P(null != v),
                                children: (0, r.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    color: "currentColor",
                                    children: null != v ? "Clear" : "Import",
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: Y()(dr._V, dr.XQ),
                        children: Object.entries(dN).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                q.D,
                                {
                                    className: Y()(dr.pb, m.includes(t) && dr.bx),
                                    onClick: () => {
                                        h((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: (0, r.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        color: "currentColor",
                                        children: a.label,
                                    }),
                                },
                                t,
                            );
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: dr._V,
                        children: (0, r.jsx)(nW.I, {
                            query: y,
                            onChange: E,
                            onClear: () => E(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: Y()(dr.st, dr.CZ),
                children: (0, r.jsx)(t0, {
                    columns: dk,
                    data: _,
                    selectedRowKey: N ?? void 0,
                    onClickRow: (e) => A(e.key),
                }),
            }),
            null != k &&
                (0, r.jsx)(nu, {
                    className: Y()(dr.st, dr.rf),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: I({ breadcrumb: k, onClose: () => A(null) }),
                }),
        ],
    });
}
let dL = o.memo(function () {
        let e = (0, d.bG)([ax.A], () => ax.A.getPopoutInitializationStages());
        return (0, r.jsxs)("div", {
            className: dr.st,
            children: [
                (0, r.jsx)("div", {
                    className: dr.Iv,
                    children: (0, r.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: "Popout Initialization Stages",
                    }),
                }),
                (0, r.jsx)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", { children: JSON.stringify(e, void 0, 2) }),
                }),
            ],
        });
    }),
    dP = o.memo(function () {
        let e = (0, d.bG)([o8.A], () => o8.A.isStateDebuggingEnabled()),
            t = (0, d.bG)([o8.A], () => o8.A.getDebuggingState());
        return (
            o.useEffect(
                () => (
                    oQ.A.setStateDebugging(!0),
                    () => {
                        oQ.A.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, r.jsxs)("div", {
                className: dr.st,
                children: [
                    (0, r.jsx)("div", {
                        className: dr.Iv,
                        children: (0, r.jsx)(m.d, {
                            checked: e,
                            onChange: () => oQ.A.setStateDebugging(!e),
                            label: "Poll Native Module State",
                        }),
                    }),
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: (0, r.jsx)("pre", { children: JSON.stringify(t, void 0, 2) }),
                    }),
                ],
            })
        );
    });
function dU() {
    return (0, r.jsx)(g.Ar, {
        children: (0, r.jsxs)("div", {
            className: Y()(tZ.nd, dr.rf),
            children: [
                (0, r.jsx)(dE, {}),
                (0, r.jsx)(d_, {}),
                (0, r.jsx)(dC, {}),
                (0, r.jsx)(db, {}),
                (0, r.jsx)(dv, {}),
                (0, r.jsx)(df, {}),
                (0, r.jsx)(dL, {}),
                (0, r.jsx)(dP, {}),
            ],
        }),
    });
}
function dG(e) {
    switch (e) {
        case "Disabled":
            return;
        case "False":
            return !1;
        case "True":
            return !0;
    }
}
function dB(e) {
    return null == e ? "Disabled" : e ? "True" : "False";
}
let dF = o.memo(function () {
    let e = (0, o3.wW)(),
        t = (0, d.bG)([de.Ay], () => de.Ay.getOverlayKeybind());
    return (0, r.jsxs)("div", {
        className: dr.st,
        children: [
            (0, r.jsx)(Z.D, { variant: "heading-lg/semibold", children: "Overlay Default Keybind Experiment" }),
            (0, r.jsx)(Z.D, { variant: "heading-md/semibold", children: "Experiment State" }),
            (0, r.jsx)(p.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: (0, r.jsx)("pre", {
                    children: JSON.stringify({ ...e, overlayKeybind: (0, dl.dI)(t.shortcut) }, void 0, 2),
                }),
            }),
            (0, r.jsx)(Z.D, { variant: "heading-md/semibold", children: "Overrides" }),
            (0, r.jsx)(j.l, {
                label: "Overlay User Status",
                description: "Override whether the current user was a new or existing user",
                value: dB(e.overrideIsNewOverlayUser),
                options: [
                    { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                    { label: "Existing user", value: "False", id: "False" },
                    { label: "New user", value: "True", id: "True" },
                ],
                onSelectionChange: function (e) {
                    (0, o3.sw)(dG(e));
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(j.l, {
                label: "Override Previous Keybind Status",
                description: "Override whether the user's pre-experiment keybind was the default keybind",
                value: dB(e.overrideIsUsingDefaultOverlayKeybind),
                options: [
                    { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                    { label: "Using default keybind", value: "True", id: "True" },
                    { label: "Not using default keybind", value: "False", id: "False" },
                ],
                onSelectionChange: function (e) {
                    (0, o3.C3)(dG(e));
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(Z.D, { variant: "heading-md/semibold", children: "Actions" }),
            (0, r.jsx)(x.$, { size: "sm", text: "Reset isNewOverlayUser", onClick: () => (0, o3.xc)() }),
            (0, r.jsx)(x.$, { size: "sm", text: "Reset isUsingDefaultOverlayKeybind", onClick: () => (0, o3.tM)() }),
        ],
    });
});
function d$() {
    return (0, r.jsx)(g.Ar, {
        children: (0, r.jsx)("div", { className: Y()(tZ.nd, dr.rf), children: (0, r.jsx)(dF, {}) }),
    });
}
function dV() {
    let [e, t] = o.useState("state");
    return (
        o.useEffect(
            () => (
                tM.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !0 }),
                () => {
                    tM.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !1 });
                }
            ),
            [],
        ),
        (0, r.jsxs)("div", {
            className: Y()(tZ.nd, dr.nd),
            children: [
                (0, r.jsxs)("div", {
                    className: dr._V,
                    children: [
                        (0, r.jsx)(q.D, {
                            className: Y()(dr.k0, "state" === e && dr.a),
                            onClick: () => t("state"),
                            children: (0, r.jsx)(p.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, r.jsx)(q.D, {
                            className: Y()(dr.k0, "logging" === e && dr.a),
                            onClick: () => t("logging"),
                            children: (0, r.jsx)(p.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, r.jsx)(q.D, {
                            className: Y()(dr.k0, "experiments" === e && dr.a),
                            onClick: () => t("experiments"),
                            children: (0, r.jsx)(p.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, r.jsx)(dU, {}),
                "logging" === e && (0, r.jsx)(dM, {}),
                "experiments" === e && (0, r.jsx)(d$, {}),
            ],
        })
    );
}
var dW = a(25409);
let dz = { xbox_game_pass: "Xbox Game Pass" };
function dH(e) {
    return `/debug/partner-subs/${e}`;
}
async function dK() {
    let { body: e } = await l7.Bo.get({ url: "/debug/partner-subs", rejectWithError: !0 });
    return e;
}
async function dY(e, t) {
    await l7.Bo.post({ url: dH(e), body: t, rejectWithError: !0 });
}
async function dq(e, t) {
    await l7.Bo.del({ url: dH(e), body: t, rejectWithError: !0 });
}
function dJ(e) {
    let { active: t } = e;
    return (0, r.jsx)("span", { className: `${dW.Od} ${t ? dW.xk : dW.kS}`, children: t ? "Active" : "Inactive" });
}
function dQ(e) {
    let { partner: t, connectedAccount: a, onChanged: n } = e,
        [l, s] = o.useState(!1),
        i = { external_account_id: a.external_account_id },
        d = Object.keys(a.metadata).length > 0;
    async function c(e) {
        s(!0);
        try {
            await e();
        } finally {
            (await n(), s(!1));
        }
    }
    return (0, r.jsxs)(Q.B, {
        gap: 8,
        className: dW.nM,
        children: [
            (0, r.jsxs)(Q.B, {
                direction: "horizontal",
                align: "center",
                gap: 12,
                children: [
                    (0, r.jsx)("div", { className: dW.un, children: a.external_account_id }),
                    (0, r.jsx)(dJ, { active: a.is_active }),
                    (0, r.jsxs)(Q.B, {
                        direction: "horizontal",
                        gap: 8,
                        fullWidth: !1,
                        className: dW.cm,
                        children: [
                            (0, r.jsx)(m.d, {
                                label: "",
                                checked: a.is_active,
                                onChange: (e) => c(() => dY(t, { ...i, is_active: e })),
                                disabled: l,
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Unlink",
                                onClick: () => c(() => dq(t, i)),
                                disabled: l,
                            }),
                        ],
                    }),
                ],
            }),
            d && (0, r.jsx)("div", { className: dW.en, children: JSON.stringify(a.metadata) }),
        ],
    });
}
function dX(e) {
    var t;
    let { listing: a, onChanged: n } = e,
        [l, s] = o.useState(""),
        [i, d] = o.useState(!0),
        [c, u] = o.useState(!1);
    async function h() {
        u(!0);
        try {
            let e = { is_active: i },
                t = l.trim();
            ("" !== t && (e.external_account_id = t), await dY(a.partner, e), s(""));
        } finally {
            (await n(), u(!1));
        }
    }
    return (0, r.jsxs)(Q.B, {
        gap: 12,
        className: dW.ns,
        children: [
            (0, r.jsxs)("div", {
                className: dW.CM,
                children: [
                    "Leave the id blank for a per-Discord-user default. Set the same id on multiple Discord accounts to test cross-account dedup of the ",
                    dz[(t = a.partner)] ?? t,
                    " membership.",
                ],
            }),
            (0, r.jsx)(f.k, {
                label: "External account id",
                placeholder: a.default_external_account_id,
                value: l,
                onChange: s,
            }),
            (0, r.jsx)(m.d, { label: "Active on link", checked: i, onChange: d }),
            (0, r.jsx)(Q.B, {
                direction: "horizontal",
                justify: "start",
                children: (0, r.jsx)(x.$, {
                    variant: "primary",
                    size: "sm",
                    text: "Link account",
                    onClick: h,
                    disabled: c,
                }),
            }),
        ],
    });
}
function dZ(e) {
    var t;
    let { listing: a, onChanged: n } = e;
    return (0, r.jsxs)(Q.B, {
        gap: 8,
        className: dW.Oy,
        children: [
            (0, r.jsx)(Z.D, { variant: "heading-lg/semibold", children: dz[(t = a.partner)] ?? t }),
            (0, r.jsxs)(p.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: [
                    "Backed by the ",
                    (0, r.jsx)("code", { children: a.connection_type }),
                    " connected account.",
                ],
            }),
            (0, r.jsx)("div", { className: dW.U, children: "Linked accounts" }),
            0 === a.connected_accounts.length
                ? (0, r.jsx)("div", { className: dW.Ie, children: "None linked yet." })
                : a.connected_accounts.map((e) =>
                      (0, r.jsx)(dQ, { partner: a.partner, connectedAccount: e, onChanged: n }, e.connection_id),
                  ),
            (0, r.jsx)("div", { className: dW.U, children: "Link a new account" }),
            (0, r.jsx)(dX, { listing: a, onChanged: n }),
        ],
    });
}
function d0() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState(null),
        l = o.useCallback(async () => {
            try {
                let e = await dK();
                (t(e), n(null));
            } catch (e) {
                n(e instanceof Error ? e.message : String(e));
            }
        }, []);
    return (
        (0, td.Ay)(() => {
            l();
        }),
        (0, r.jsxs)(g.Ip, {
            className: Y()(tZ.nd, dW.kL),
            children: [
                (0, r.jsx)(Z.D, { variant: "heading-lg/semibold", className: tZ.wx, children: "Partner Perks" }),
                (0, r.jsxs)(Q.B, {
                    gap: 16,
                    children: [
                        null != a && (0, r.jsx)(p.E, { variant: "text-sm/normal", className: dW.kc, children: a }),
                        e.map((e) => (0, r.jsx)(dZ, { listing: e, onChanged: l }, e.partner)),
                    ],
                }),
            ],
        })
    );
}
var d1 = a(488428),
    d2 = a(73825),
    d3 = a(277984),
    d6 = a(589078),
    d5 = a(944304),
    d8 = a(300233),
    d4 = a(599941),
    d9 = a(162093),
    d7 = a(4630),
    ce = a(44120),
    ct = a(75678),
    ca = a(216678),
    cn = a(194509),
    cl = a(478996),
    cs = a(37402),
    ci = a(397093);
function cr(e) {
    let { selectedGuildForGuildSub: t } = e,
        a = (0, d4.uk)(t?.id)[0];
    return null != t && null != a
        ? (0, r.jsx)("div", {
              children: a.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(d9.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let co = function () {
    let [e, t] = o.useState(tP.pe.TIER_2),
        [a, n] = o.useState(null),
        l = (0, d.yK)([nE.A], () => nE.A.getGuildsArray()),
        [s] = (0, d.yK)([oh.A], () => [oh.A.getPremiumSubscription()]),
        i = l.map((e) => ({ id: e.id, value: e, label: e.name })),
        [c, m] = o.useState(i.length > 0 ? i[0].value : null),
        [h, v] = o.useState(""),
        [y, E] = o.useState({ plan_id: tP.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        C = "true" !== y.gift && null != s,
        [_, S] = o.useState(i.length > 0 ? i[0].value : null),
        { analyticsLocations: N } = (0, np.Ay)(tI.A.PAYMENT_FLOW_TEST_PAGE),
        [A, k] = o.useState(""),
        [D, I] = o.useState(ex.dJq),
        { balance: T, isFetching: O, error: R } = (0, cl.W0)(),
        { isSubmitting: w, responseMessage: M, redeemVirtualCurrency: L } = (0, cl.Qr)(),
        [P, U] = o.useState(ex.dJq),
        [G, B] = o.useState(""),
        [F, $] = o.useState(ex.dJq),
        [V, W] = o.useState(ex.dJq);
    return (0, r.jsx)(np.f5, {
        value: N,
        children: (0, r.jsx)(g.Ip, {
            className: ci.XG,
            children: (0, r.jsxs)(Q.B, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, r.jsxs)(Q.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Gift",
                                value: e,
                                options: [
                                    { id: "tier_2", value: tP.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: tP.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: tP.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => t(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(cn.A, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: nG.XD.PRIMARY,
                                look: nG.pR.FILLED,
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(Q.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Premium Select Plan",
                                value: a,
                                options: [
                                    { id: "tier_2", value: tP.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: tP.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: tP.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => n(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () => (0, ct.A)({ subscriptionTier: a, analyticsLocations: N }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(Q.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Boost",
                                value: c,
                                options: i,
                                onSelectionChange: (e) => m(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            null != c
                                ? (0, r.jsx)(d5.A, { guild: c, analyticsLocation: {} })
                                : (0, r.jsx)("div", { children: "No Guild to boost" }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(Q.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(iz.Anchor, {
                                href: "https://i.dis.gd/createPromo",
                                children: "How to create promotion",
                            }),
                            (0, r.jsxs)(Q.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(f.k, {
                                        label: "Standalone: Trial Promotion Redemption",
                                        placeholder: "Promotion Code",
                                        value: h,
                                        onChange: (e) => v(e),
                                    }),
                                    (0, r.jsx)(sr.m, {
                                        text: "Need Promotion Code",
                                        shouldShow: h.length < 1,
                                        children: (0, r.jsx)(x.$, {
                                            variant: "primary",
                                            text: "Open Link",
                                            disabled: h.length < 1,
                                            onClick: () => {
                                                window.open(ex.BVt.BILLING_PROMOTION_REDEMPTION(h));
                                            },
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Standalone: Gift/Subscription Purchase",
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Plan",
                                value: y.plan_id,
                                options: [
                                    { id: "tier_2", value: tP.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: tP.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: tP.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic" },
                                ],
                                onSelectionChange: (e) => {
                                    E((t) => ({ ...t, plan_id: e }));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(j.l, {
                                label: "Type",
                                value: y.gift,
                                options: [
                                    { id: "gift", value: "true", label: "Gift" },
                                    { id: "not_gift", value: "false", label: "Not Gift" },
                                ],
                                onSelectionChange: (e) => {
                                    E((t) => ({ ...t, gift: e }));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        ],
                    }),
                    (0, r.jsx)(sr.m, {
                        text: "Already subscribed",
                        shouldShow: C,
                        children: (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: C,
                            onClick: () => {
                                window.open(ex.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + d1.stringify({ ...y }));
                            },
                        }),
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Redeem Virtual Currency for SKU",
                        children: [
                            (0, r.jsxs)(Q.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        children: "Virtual Currency Balance:",
                                    }),
                                    O
                                        ? (0, r.jsx)("div", {
                                              className: ci.wG,
                                              children: (0, r.jsx)(tu.y, { type: tu.t.SPINNING_CIRCLE }),
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: ci.dB,
                                              children: [
                                                  null !== R &&
                                                      (0, r.jsxs)(p.E, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              R.message,
                                                          ],
                                                      }),
                                                  (0, r.jsx)(cs.Gy, {
                                                      balance: T ?? 0,
                                                      balanceWidgetMode: cs.k7.SELECTED,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, r.jsx)(f.k, {
                                label: "SKU ID",
                                placeholder: "SKU ID",
                                value: P,
                                onChange: (e) => U(e),
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Redeem Virtual Currency for SKU",
                                loading: w,
                                onClick: () => L(P, (0, eL.A)()),
                            }),
                            null != M && (0, r.jsx)(p.E, { variant: "text-sm/normal", children: M }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Creator Revenue",
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Premium Server Subscription For",
                                value: _,
                                options: i,
                                onSelectionChange: (e) => S(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(d8.H, {
                                guildId: _?.id,
                                children: (0, r.jsx)(cr, { selectedGuildForGuildSub: _ }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(Q.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsxs)(u.n, {
                                label: "Activities & Application Payment Modals",
                                children: [
                                    (0, r.jsx)(f.k, {
                                        label: "Application Id",
                                        placeholder: "Application Id",
                                        value: A,
                                        onChange: k,
                                    }),
                                    (0, r.jsx)(f.k, {
                                        label: "Sku Id",
                                        placeholder: "Sku Id",
                                        value: D,
                                        onChange: (e) => I(e),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Open App Subs Modal for Activity",
                                onClick: () =>
                                    (0, d7.openIAPPurchaseModal)({
                                        applicationId: A,
                                        skuId: D,
                                        openPremiumPaymentModal: () => !0,
                                        analyticsLocations: [],
                                        analyticsLocationObject: { page: ex.liQ.IN_APP },
                                        context: ex.BRT.APP,
                                    }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsx)(Q.B, {
                        direction: "vertical",
                        gap: 8,
                        children: (0, r.jsx)(u.n, {
                            label: "Standard Payment Modal Test",
                            children: (0, r.jsxs)(Q.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(f.k, {
                                        label: "Application Id",
                                        hideLabel: !0,
                                        placeholder: "Application Id",
                                        value: G,
                                        onChange: B,
                                    }),
                                    (0, r.jsx)(f.k, {
                                        label: "SKU ID",
                                        hideLabel: !0,
                                        placeholder: "SKU ID",
                                        value: F,
                                        onChange: (e) => $(e),
                                    }),
                                    (0, r.jsx)(x.$, {
                                        variant: "primary",
                                        text: "Open Premium Apps Payment Modal for SKU",
                                        onClick: () =>
                                            (0, ca.q)({
                                                applicationId: G,
                                                skuId: F,
                                                analyticsLocations: N,
                                                checkoutFlow: d6.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                            }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(Q.B, {
                        direction: "horizontal",
                        align: "end",
                        gap: 8,
                        children: [
                            (0, r.jsx)(f.k, {
                                label: "Collectibles Payment Modal Test",
                                placeholder: "SKU ID",
                                value: V,
                                onChange: (e) => W(e),
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Open Collectibles Payment Modal for SKU",
                                onClick: () => (0, ce.A)({ skuId: V, analyticsLocations: N }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsx)(u.n, {
                        label: "Helpers",
                        children: (0, r.jsxs)(Q.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionPlanStore",
                                    onClick: () => (0, d2.YG)(),
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, d3.uZ)(),
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsx)(u.n, {
                        label: "Dismissible Content Framework",
                        children: (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Reset DismissibleContentFrameworkStore",
                            onClick: () => (0, lR.Ab)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
var cd = a(219887),
    cc = a(459357),
    cu = a(500380),
    cm = a(102609),
    ch = a(710195),
    cx = a(211287),
    cp = a(295405),
    cg = a(548185);
let cv = [
        { label: "3DS and Failed Cards", value: "", disabled: !0 },
        { label: "Other", value: "OTHER" },
        { label: "Americas", value: "", disabled: !0 },
        { label: "United States", value: "US" },
        { label: "Canada", value: "CA" },
        { label: "Mexico", value: "MX" },
        { label: "Argentina", value: "AR" },
        { label: "Brazil", value: "BR" },
        { label: "Chile", value: "CL" },
        { label: "Colombia", value: "CO" },
        { label: "Costa Rica", value: "CR" },
        { label: "Ecuador", value: "EC" },
        { label: "Panama", value: "PA" },
        { label: "Paraguay", value: "PY" },
        { label: "Peru", value: "PE" },
        { label: "Uruguay", value: "UY" },
        { label: "Europe / Middle East", value: "", disabled: !0 },
        { label: "United Arab Emirates", value: "AE" },
        { label: "Austria", value: "AT" },
        { label: "Belgium", value: "BE" },
        { label: "Bulgaria", value: "BG" },
        { label: "Belarus", value: "BY" },
        { label: "Croatia", value: "HR" },
        { label: "Cyprus", value: "CY" },
        { label: "Czech Republic", value: "CZ" },
        { label: "Denmark", value: "DK" },
        { label: "Estonia", value: "EE" },
        { label: "Finland", value: "FI" },
        { label: "France", value: "FR" },
        { label: "Germany", value: "DE" },
        { label: "Gibraltar", value: "GI" },
        { label: "Greece", value: "GR" },
        { label: "Hungary", value: "HU" },
        { label: "Ireland", value: "IE" },
        { label: "Italy", value: "IT" },
        { label: "Latvia", value: "LV" },
        { label: "Liechtenstein", value: "LI" },
        { label: "Lithuania", value: "LT" },
        { label: "Luxembourg", value: "LU" },
        { label: "Malta", value: "MT" },
        { label: "Netherlands", value: "NL" },
        { label: "Norway", value: "NO" },
        { label: "Poland", value: "PL" },
        { label: "Portugal", value: "PT" },
        { label: "Romania", value: "RO" },
        { label: "Slovenia", value: "SI" },
        { label: "Slovakia", value: "SK" },
        { label: "Spain", value: "ES" },
        { label: "Sweden", value: "SE" },
        { label: "Switzerland", value: "CH" },
        { label: "United Kingdom", value: "GB" },
        { label: "Asia Pacific", value: "", disabled: !0 },
        { label: "Australia", value: "AU" },
        { label: "China", value: "CN" },
        { label: "Hong Kong", value: "HK" },
        { label: "India", value: "IN" },
        { label: "Japan", value: "JP" },
        { label: "Malaysia", value: "MY" },
        { label: "New Zealand", value: "NZ" },
        { label: "Singapore", value: "SG" },
        { label: "Taiwan", value: "TW" },
        { label: "Thailand", value: "TH" },
    ],
    cj = {
        OTHER: [
            { label: "Always Authenticate", value: "pm_card_authenticationRequired" },
            { label: "Decline after attaching", value: "pm_card_chargeCustomerFail" },
        ],
        US: [
            { label: "Visa", value: "pm_card_us" },
            { label: "Visa (debit)", value: "pm_card_visa_debit" },
            { label: "Mastercard", value: "pm_card_mastercard" },
            { label: "Mastercard (debit)", value: "pm_card_mastercard_debit" },
            { label: "Mastercard (prepaid)", value: "pm_card_mastercard_prepaid" },
            { label: "American Express", value: "pm_card_amex" },
            { label: "Discover", value: "pm_card_discover" },
            { label: "Diners Club", value: "pm_card_diners" },
        ],
        AR: [{ label: "Visa", value: "pm_card_ar" }],
        BR: [{ label: "Visa", value: "pm_card_br" }],
        CA: [{ label: "Visa", value: "pm_card_ca" }],
        CL: [{ label: "Visa", value: "pm_card_cl" }],
        CO: [{ label: "Visa", value: "pm_card_co" }],
        CR: [{ label: "Visa", value: "pm_card_cr" }],
        EC: [{ label: "Visa", value: "pm_card_ec" }],
        MX: [{ label: "Visa", value: "pm_card_mx" }],
        PA: [{ label: "Visa", value: "pm_card_pa" }],
        PY: [{ label: "Visa", value: "pm_card_py" }],
        PE: [{ label: "Visa", value: "pm_card_pe" }],
        UY: [{ label: "Visa", value: "pm_card_uy" }],
        AE: [
            { label: "Visa", value: "pm_card_ae" },
            { label: "Mastercard", value: "pm_card_ae_mastercard" },
        ],
        AT: [{ label: "Visa", value: "pm_card_at" }],
        BE: [{ label: "Visa", value: "pm_card_be" }],
        BG: [{ label: "Visa", value: "pm_card_bg" }],
        BY: [{ label: "Visa", value: "pm_card_by" }],
        CH: [{ label: "Visa", value: "pm_card_ch" }],
        CY: [{ label: "Visa", value: "pm_card_cy" }],
        CZ: [{ label: "Visa", value: "pm_card_cz" }],
        DK: [{ label: "Visa", value: "pm_card_dk" }],
        EE: [{ label: "Visa", value: "pm_card_ee" }],
        ES: [{ label: "Visa", value: "pm_card_es" }],
        FI: [{ label: "Visa", value: "pm_card_fi" }],
        FR: [
            { label: "Visa", value: "pm_card_fr" },
            { label: "Carte Bancaires / Visa", value: "pm_card_visa_carteBancaires" },
            { label: "Carte Bancaires / Mastercard", value: "pm_card_mastercard_carteBancaires" },
        ],
        DE: [{ label: "Visa", value: "pm_card_de" }],
        GB: [
            { label: "Visa", value: "pm_card_gb" },
            { label: "Visa (debit)", value: "pm_card_gb_debit" },
            { label: "Mastercard", value: "pm_card_gb_mastercard" },
        ],
        GI: [{ label: "Visa", value: "pm_card_gi" }],
        GR: [{ label: "Visa", value: "pm_card_gr" }],
        HR: [{ label: "Visa", value: "pm_card_hr" }],
        HU: [{ label: "Visa", value: "pm_card_hu" }],
        IE: [{ label: "Visa", value: "pm_card_ie" }],
        IT: [{ label: "Visa", value: "pm_card_it" }],
        LV: [{ label: "Visa", value: "pm_card_lv" }],
        LI: [{ label: "Visa", value: "pm_card_li" }],
        LT: [{ label: "Visa", value: "pm_card_lt" }],
        LU: [{ label: "Visa", value: "pm_card_lu" }],
        MT: [{ label: "Visa", value: "pm_card_mt" }],
        NL: [{ label: "Visa", value: "pm_card_nl" }],
        NO: [{ label: "Visa", value: "pm_card_no" }],
        PL: [{ label: "Visa", value: "pm_card_pl" }],
        PT: [{ label: "Visa", value: "pm_card_pt" }],
        RO: [{ label: "Visa", value: "pm_card_ro" }],
        SI: [{ label: "Visa", value: "pm_card_si" }],
        SK: [{ label: "Visa", value: "pm_card_sk" }],
        SE: [{ label: "Visa", value: "pm_card_se" }],
        AU: [
            { label: "Visa", value: "pm_card_au" },
            { label: "eftpos Australia / Visa", value: "pm_card_visa_debit_eftposAuCoBranded" },
            { label: "eftpos Australia / Mastercard", value: "pm_card_mastercard_debit_eftposAuCoBranded" },
        ],
        CN: [
            { label: "Visa", value: "pm_card_cn" },
            { label: "UnionPay", value: "pm_card_unionpay" },
        ],
        HK: [{ label: "Visa", value: "pm_card_hk" }],
        IN: [{ label: "Visa", value: "pm_card_in" }],
        JP: [
            { label: "Visa", value: "pm_card_jp" },
            { label: "JCB", value: "pm_card_jcb" },
        ],
        MY: [{ label: "Visa", value: "pm_card_my" }],
        NZ: [{ label: "Visa", value: "pm_card_nz" }],
        SG: [{ label: "Visa", value: "pm_card_sg" }],
        TW: [{ label: "Visa", value: "pm_card_tw" }],
        TH: [
            { label: "Visa (credit)", value: "pm_card_th_credit" },
            { label: "Visa (debit)", value: "pm_card_th_debit" },
        ],
    },
    cf = [
        { label: "None", value: "NONE" },
        { label: "Alabama", value: "AL" },
        { label: "Alaska", value: "AK" },
        { label: "Arizona", value: "AZ" },
        { label: "Arkansas", value: "AR" },
        { label: "California", value: "CA" },
        { label: "Colorado", value: "CO" },
        { label: "Connecticut", value: "CT" },
        { label: "Delaware", value: "DE" },
        { label: "Florida", value: "FL" },
        { label: "Georgia", value: "GA" },
        { label: "Hawaii", value: "HI" },
        { label: "Idaho", value: "ID" },
        { label: "Illinois", value: "IL" },
        { label: "Indiana", value: "IN" },
        { label: "Iowa", value: "IA" },
        { label: "Kansas", value: "KS" },
        { label: "Kentucky", value: "KY" },
        { label: "Louisiana", value: "LA" },
        { label: "Maine", value: "ME" },
        { label: "Maryland", value: "MD" },
        { label: "Massachusetts", value: "MA" },
        { label: "Michigan", value: "MI" },
        { label: "Minnesota", value: "MN" },
        { label: "Mississippi", value: "MS" },
        { label: "Missouri", value: "MO" },
        { label: "Montana", value: "MT" },
        { label: "Nebraska", value: "NE" },
        { label: "Nevada", value: "NV" },
        { label: "New Hampshire", value: "NH" },
        { label: "New Jersey", value: "NJ" },
        { label: "New Mexico", value: "NM" },
        { label: "New York", value: "NY" },
        { label: "North Carolina", value: "NC" },
        { label: "North Dakota", value: "ND" },
        { label: "Ohio", value: "OH" },
        { label: "Oklahoma", value: "OK" },
        { label: "Oregon", value: "OR" },
        { label: "Pennsylvania", value: "PA" },
        { label: "Puerto Rico", value: "PR" },
        { label: "Rhode Island", value: "RI" },
        { label: "South Carolina", value: "SC" },
        { label: "South Dakota", value: "SD" },
        { label: "Tennessee", value: "TN" },
        { label: "Texas", value: "TX" },
        { label: "Utah", value: "UT" },
        { label: "Vermont", value: "VT" },
        { label: "Virginia", value: "VA" },
        { label: "Washington", value: "WA" },
        { label: "West Virginia", value: "WV" },
        { label: "Wisconsin", value: "WI" },
        { label: "Wyoming", value: "WY" },
    ],
    cb = {
        NONE: null,
        AL: {
            name: "Alabama State Capitol",
            line_1: "600 Dexter Avenue",
            line_2: "",
            city: "Montgomery",
            state: "AL",
            postal_code: "36130",
            country: "US",
        },
        AK: {
            name: "Alaska State Capitol",
            line_1: "120 4th Street",
            line_2: "",
            city: "Juneau",
            state: "AK",
            postal_code: "99801",
            country: "US",
        },
        AZ: {
            name: "Arizona State Capitol",
            line_1: "1700 W Washington Street",
            line_2: "",
            city: "Phoenix",
            state: "AZ",
            postal_code: "85007",
            country: "US",
        },
        AR: {
            name: "Arkansas State Capitol",
            line_1: "500 Woodlane Street",
            line_2: "",
            city: "Little Rock",
            state: "AR",
            postal_code: "72201",
            country: "US",
        },
        CA: {
            name: "California State Capitol",
            line_1: "1315 10th Street",
            line_2: "",
            city: "Sacramento",
            state: "CA",
            postal_code: "95814",
            country: "US",
        },
        CO: {
            name: "Colorado State Capitol",
            line_1: "200 E Colfax Avenue",
            line_2: "",
            city: "Denver",
            state: "CO",
            postal_code: "80203",
            country: "US",
        },
        CT: {
            name: "Connecticut State Capitol",
            line_1: "210 Capitol Avenue",
            line_2: "",
            city: "Hartford",
            state: "CT",
            postal_code: "06106",
            country: "US",
        },
        DE: {
            name: "Delaware Legislative Hall",
            line_1: "411 Legislative Avenue",
            line_2: "",
            city: "Dover",
            state: "DE",
            postal_code: "19901",
            country: "US",
        },
        FL: {
            name: "Florida State Capitol",
            line_1: "400 S Monroe Street",
            line_2: "",
            city: "Tallahassee",
            state: "FL",
            postal_code: "32399",
            country: "US",
        },
        GA: {
            name: "Georgia State Capitol",
            line_1: "206 Washington Street SW",
            line_2: "",
            city: "Atlanta",
            state: "GA",
            postal_code: "30334",
            country: "US",
        },
        HI: {
            name: "Hawaii State Capitol",
            line_1: "415 S Beretania Street",
            line_2: "",
            city: "Honolulu",
            state: "HI",
            postal_code: "96813",
            country: "US",
        },
        ID: {
            name: "Idaho State Capitol",
            line_1: "700 W Jefferson Street",
            line_2: "",
            city: "Boise",
            state: "ID",
            postal_code: "83720",
            country: "US",
        },
        IL: {
            name: "Illinois State Capitol",
            line_1: "401 S 2nd Street",
            line_2: "",
            city: "Springfield",
            state: "IL",
            postal_code: "62701",
            country: "US",
        },
        IN: {
            name: "Indiana State Capitol",
            line_1: "200 W Washington Street",
            line_2: "",
            city: "Indianapolis",
            state: "IN",
            postal_code: "46204",
            country: "US",
        },
        IA: {
            name: "Iowa State Capitol",
            line_1: "1007 E Grand Avenue",
            line_2: "",
            city: "Des Moines",
            state: "IA",
            postal_code: "50319",
            country: "US",
        },
        KS: {
            name: "Kansas State Capitol",
            line_1: "300 SW 10th Avenue",
            line_2: "",
            city: "Topeka",
            state: "KS",
            postal_code: "66612",
            country: "US",
        },
        KY: {
            name: "Kentucky State Capitol",
            line_1: "700 Capitol Avenue",
            line_2: "",
            city: "Frankfort",
            state: "KY",
            postal_code: "40601",
            country: "US",
        },
        LA: {
            name: "Louisiana State Capitol",
            line_1: "900 N 3rd Street",
            line_2: "",
            city: "Baton Rouge",
            state: "LA",
            postal_code: "70804",
            country: "US",
        },
        ME: {
            name: "Maine State House",
            line_1: "210 State Street",
            line_2: "",
            city: "Augusta",
            state: "ME",
            postal_code: "04333",
            country: "US",
        },
        MD: {
            name: "Maryland State House",
            line_1: "100 State Circle",
            line_2: "",
            city: "Annapolis",
            state: "MD",
            postal_code: "21401",
            country: "US",
        },
        MA: {
            name: "Massachusetts State House",
            line_1: "24 Beacon Street",
            line_2: "",
            city: "Boston",
            state: "MA",
            postal_code: "02133",
            country: "US",
        },
        MI: {
            name: "Michigan State Capitol",
            line_1: "100 N Capitol Avenue",
            line_2: "",
            city: "Lansing",
            state: "MI",
            postal_code: "48933",
            country: "US",
        },
        MN: {
            name: "Minnesota State Capitol",
            line_1: "75 Rev Dr Martin Luther King Jr Blvd",
            line_2: "",
            city: "Saint Paul",
            state: "MN",
            postal_code: "55155",
            country: "US",
        },
        MS: {
            name: "Mississippi State Capitol",
            line_1: "400 High Street",
            line_2: "",
            city: "Jackson",
            state: "MS",
            postal_code: "39201",
            country: "US",
        },
        MO: {
            name: "Missouri State Capitol",
            line_1: "201 W Capitol Avenue",
            line_2: "",
            city: "Jefferson City",
            state: "MO",
            postal_code: "65101",
            country: "US",
        },
        MT: {
            name: "Montana State Capitol",
            line_1: "1301 E 6th Avenue",
            line_2: "",
            city: "Helena",
            state: "MT",
            postal_code: "59601",
            country: "US",
        },
        NE: {
            name: "Nebraska State Capitol",
            line_1: "1445 K Street",
            line_2: "",
            city: "Lincoln",
            state: "NE",
            postal_code: "68509",
            country: "US",
        },
        NV: {
            name: "Nevada State Capitol",
            line_1: "101 N Carson Street",
            line_2: "",
            city: "Carson City",
            state: "NV",
            postal_code: "89701",
            country: "US",
        },
        NH: {
            name: "New Hampshire State House",
            line_1: "107 N Main Street",
            line_2: "",
            city: "Concord",
            state: "NH",
            postal_code: "03301",
            country: "US",
        },
        NJ: {
            name: "New Jersey State House",
            line_1: "125 W State Street",
            line_2: "",
            city: "Trenton",
            state: "NJ",
            postal_code: "08608",
            country: "US",
        },
        NM: {
            name: "New Mexico State Capitol",
            line_1: "490 Old Santa Fe Trail",
            line_2: "",
            city: "Santa Fe",
            state: "NM",
            postal_code: "87501",
            country: "US",
        },
        NY: {
            name: "New York State Capitol",
            line_1: "State Street",
            line_2: "",
            city: "Albany",
            state: "NY",
            postal_code: "12224",
            country: "US",
        },
        NC: {
            name: "North Carolina State Capitol",
            line_1: "16 W Jones Street",
            line_2: "",
            city: "Raleigh",
            state: "NC",
            postal_code: "27601",
            country: "US",
        },
        ND: {
            name: "North Dakota State Capitol",
            line_1: "600 E Boulevard Avenue",
            line_2: "",
            city: "Bismarck",
            state: "ND",
            postal_code: "58505",
            country: "US",
        },
        OH: {
            name: "Ohio State House",
            line_1: "1 Capitol Square",
            line_2: "",
            city: "Columbus",
            state: "OH",
            postal_code: "43215",
            country: "US",
        },
        OK: {
            name: "Oklahoma State Capitol",
            line_1: "2300 N Lincoln Boulevard",
            line_2: "",
            city: "Oklahoma City",
            state: "OK",
            postal_code: "73105",
            country: "US",
        },
        OR: {
            name: "Oregon State Capitol",
            line_1: "900 Court Street NE",
            line_2: "",
            city: "Salem",
            state: "OR",
            postal_code: "97301",
            country: "US",
        },
        PA: {
            name: "Pennsylvania State Capitol",
            line_1: "501 N 3rd Street",
            line_2: "",
            city: "Harrisburg",
            state: "PA",
            postal_code: "17120",
            country: "US",
        },
        PR: {
            name: "Puerto Rico State Capitol",
            line_1: "1 Plaza de la Democracia",
            line_2: "",
            city: "San Juan",
            state: "PR",
            postal_code: "00901",
            country: "US",
        },
        RI: {
            name: "Rhode Island State House",
            line_1: "82 Smith Street",
            line_2: "",
            city: "Providence",
            state: "RI",
            postal_code: "02903",
            country: "US",
        },
        SC: {
            name: "South Carolina State House",
            line_1: "1100 Gervais Street",
            line_2: "",
            city: "Columbia",
            state: "SC",
            postal_code: "29201",
            country: "US",
        },
        SD: {
            name: "South Dakota State Capitol",
            line_1: "500 E Capitol Avenue",
            line_2: "",
            city: "Pierre",
            state: "SD",
            postal_code: "57501",
            country: "US",
        },
        TN: {
            name: "Tennessee State Capitol",
            line_1: "600 Dr Martin L King Jr Blvd",
            line_2: "",
            city: "Nashville",
            state: "TN",
            postal_code: "37243",
            country: "US",
        },
        TX: {
            name: "Texas State Capitol",
            line_1: "1100 Congress Avenue",
            line_2: "",
            city: "Austin",
            state: "TX",
            postal_code: "78701",
            country: "US",
        },
        UT: {
            name: "Utah State Capitol",
            line_1: "350 State Street",
            line_2: "",
            city: "Salt Lake City",
            state: "UT",
            postal_code: "84103",
            country: "US",
        },
        VT: {
            name: "Vermont State House",
            line_1: "115 State Street",
            line_2: "",
            city: "Montpelier",
            state: "VT",
            postal_code: "05633",
            country: "US",
        },
        VA: {
            name: "Virginia State Capitol",
            line_1: "1000 Bank Street",
            line_2: "",
            city: "Richmond",
            state: "VA",
            postal_code: "23218",
            country: "US",
        },
        WA: {
            name: "Washington State Capitol",
            line_1: "416 Sid Snyder Avenue SW",
            line_2: "",
            city: "Olympia",
            state: "WA",
            postal_code: "98504",
            country: "US",
        },
        WV: {
            name: "West Virginia State Capitol",
            line_1: "1900 Kanawha Boulevard E",
            line_2: "",
            city: "Charleston",
            state: "WV",
            postal_code: "25305",
            country: "US",
        },
        WI: {
            name: "Wisconsin State Capitol",
            line_1: "2 E Main Street",
            line_2: "",
            city: "Madison",
            state: "WI",
            postal_code: "53703",
            country: "US",
        },
        WY: {
            name: "Wyoming State Capitol",
            line_1: "2001 Capitol Avenue",
            line_2: "",
            city: "Cheyenne",
            state: "WY",
            postal_code: "82001",
            country: "US",
        },
    },
    cy = [
        { label: "None", value: "NONE" },
        { label: "Alberta", value: "AB" },
        { label: "British Columbia", value: "BC" },
        { label: "Manitoba", value: "MB" },
        { label: "New Brunswick", value: "NB" },
        { label: "Newfoundland and Labrador", value: "NL" },
        { label: "Northwest Territories", value: "NT" },
        { label: "Nova Scotia", value: "NS" },
        { label: "Nunavut", value: "NU" },
        { label: "Ontario", value: "ON" },
        { label: "Prince Edward Island", value: "PE" },
        { label: "Quebec", value: "QC" },
        { label: "Saskatchewan", value: "SK" },
        { label: "Yukon", value: "YT" },
    ],
    cE = {
        NONE: null,
        AB: {
            name: "Alberta Legislature Building",
            line_1: "10800 97 Avenue NW",
            line_2: "",
            city: "Edmonton",
            state: "AB",
            postal_code: "T5K 2B6",
            country: "CA",
        },
        BC: {
            name: "British Columbia Parliament Buildings",
            line_1: "501 Belleville Street",
            line_2: "",
            city: "Victoria",
            state: "BC",
            postal_code: "V8V 2L8",
            country: "CA",
        },
        MB: {
            name: "Manitoba Legislative Building",
            line_1: "450 Broadway",
            line_2: "",
            city: "Winnipeg",
            state: "MB",
            postal_code: "R3C 0V8",
            country: "CA",
        },
        NB: {
            name: "New Brunswick Legislative Building",
            line_1: "706 Queen Street",
            line_2: "",
            city: "Fredericton",
            state: "NB",
            postal_code: "E3B 1C5",
            country: "CA",
        },
        NL: {
            name: "Newfoundland and Labrador Confederation Building",
            line_1: "100 Prince Philip Drive",
            line_2: "",
            city: "St. John's",
            state: "NL",
            postal_code: "A1B 4J6",
            country: "CA",
        },
        NT: {
            name: "Northwest Territories Legislative Assembly",
            line_1: "4570 48 Street",
            line_2: "",
            city: "Yellowknife",
            state: "NT",
            postal_code: "X1A 1A2",
            country: "CA",
        },
        NS: {
            name: "Nova Scotia Province House",
            line_1: "1726 Hollis Street",
            line_2: "",
            city: "Halifax",
            state: "NS",
            postal_code: "B3J 2Y3",
            country: "CA",
        },
        NU: {
            name: "Nunavut Legislative Assembly",
            line_1: "926 Federal Road",
            line_2: "",
            city: "Iqaluit",
            state: "NU",
            postal_code: "X0A 0H0",
            country: "CA",
        },
        ON: {
            name: "Ontario Legislative Building",
            line_1: "111 Wellesley Street West",
            line_2: "",
            city: "Toronto",
            state: "ON",
            postal_code: "M7A 1A2",
            country: "CA",
        },
        PE: {
            name: "Prince Edward Island Province House",
            line_1: "165 Richmond Street",
            line_2: "",
            city: "Charlottetown",
            state: "PE",
            postal_code: "C1A 1J1",
            country: "CA",
        },
        QC: {
            name: "Quebec Parliament Building",
            line_1: "1045 Rue des Parlementaires",
            line_2: "",
            city: "Quebec City",
            state: "QC",
            postal_code: "G1A 1A3",
            country: "CA",
        },
        SK: {
            name: "Saskatchewan Legislative Building",
            line_1: "2405 Legislative Drive",
            line_2: "",
            city: "Regina",
            state: "SK",
            postal_code: "S4S 0B3",
            country: "CA",
        },
        YT: {
            name: "Yukon Legislative Assembly",
            line_1: "2071 2nd Avenue",
            line_2: "",
            city: "Whitehorse",
            state: "YT",
            postal_code: "Y1A 1B3",
            country: "CA",
        },
    };
function cC() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        [i, d] = o.useState(null),
        [c, u] = o.useState(null),
        [m, h] = o.useState("pm_card_us"),
        [v, f] = o.useState(!1),
        b = Object.values((0, tD.bG)([cp.A], () => cp.A.paymentSources)),
        y = cj[e];
    async function E() {
        let t = m;
        ("" === t && (t = "pm_card_us"),
            await l7.Bo.post({
                url: "/debug/payment-source",
                body: { token: t, address: "US" === e ? l : "CA" === e ? c : null },
                rejectWithError: !1,
            }),
            await (0, d3.$o)());
    }
    async function C() {
        (await l7.Bo.del({ url: "/debug/payment-source", rejectWithError: !1 }), await (0, d3.$o)());
    }
    async function _() {
        (await l7.Bo.del({ url: "/debug/rate-limits", rejectWithError: !1 }), window.location.reload());
    }
    return (
        o.useEffect(() => {
            (0, d3.$o)();
        }, []),
        (0, r.jsx)(g.Ip, {
            className: tZ.nd,
            children: (0, r.jsxs)("div", {
                className: sG.l$,
                children: [
                    (0, r.jsxs)(p.E, {
                        style: { marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: [" ", "Manage Payment Sources", " "],
                    }),
                    (0, r.jsxs)("div", {
                        className: sG.Uo,
                        children: [
                            (0, r.jsx)(a_.Z, {
                                selectionMode: "single",
                                label: "Card Type",
                                value: e,
                                options: cv
                                    .filter((e) => !("disabled" in e && e.disabled))
                                    .map((e) => {
                                        let { value: t, label: a } = e;
                                        return {
                                            id: t,
                                            value: t,
                                            label: a,
                                            leading: (0, r.jsx)("img", {
                                                alt: "",
                                                className: cg.bI,
                                                src: (0, cu.t)(t),
                                            }),
                                        };
                                    }),
                                onSelectionChange: function (e) {
                                    (t(e), h(cj[e][0].value), f(1 === cj[e].length));
                                },
                            }),
                            "US" === e &&
                                (0, r.jsx)(j.l, {
                                    selectionMode: "single",
                                    label: "US Address",
                                    hideLabel: !0,
                                    value: a,
                                    options: cf.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: function (e) {
                                        (n(e), s(cb[e] ?? null));
                                    },
                                }),
                            "CA" === e &&
                                (0, r.jsx)(j.l, {
                                    selectionMode: "single",
                                    label: "CA Address",
                                    hideLabel: !0,
                                    value: i,
                                    options: cy.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: function (e) {
                                        (d(e), u(cE[e] ?? null));
                                    },
                                }),
                            (0, r.jsx)(j.l, {
                                selectionMode: "single",
                                label: "Card Token",
                                hideLabel: !0,
                                value: m,
                                options: y.map((e) => {
                                    let { value: t, label: a } = e;
                                    return { id: t, value: t, label: a };
                                }),
                                onSelectionChange: h,
                                disabled: v,
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                size: "sm",
                                text: "Create Stripe Credit Card",
                                onClick: E,
                            }),
                            b.length > 0 &&
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Delete All Payment Sources",
                                    onClick: C,
                                }),
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                size: "sm",
                                text: "Reset API Rate limits and reload app",
                                onClick: _,
                            }),
                        ],
                    }),
                    (0, r.jsx)(p.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Generate Gift Card PIN",
                    }),
                    (0, r.jsx)(cT, {}),
                    (0, r.jsx)(p.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Experiment Overrides",
                    }),
                    (0, r.jsx)(ck, {}),
                    (0, r.jsx)(p.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Existing Payment Sources",
                    }),
                    b.map((e) => (0, r.jsx)(cO, { paymentSource: e }, e.id)),
                ],
            }),
        })
    );
}
let c_ = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0)" },
        { id: "1", value: "1", label: "Treatment (1)" },
    ],
    cS = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Gift cards disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Gift cards enabled" },
    ],
    cN = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Orb redemption via legacy" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Orb redemption via orders" },
    ];
function cA(e) {
    let { experimentName: t, options: a = c_ } = e,
        n = (0, tD.bG)([ch.A, nQ.default], () => {
            let e = nQ.default.getId(),
                a = ch.A.getAssignment("user", e, t);
            return a?.isOverride === !0 ? String(a.variantId) : "none";
        }),
        l = o.useCallback(
            (e) => {
                (0, cm.t$)(cm.l5.APEX, t, "none" === e ? null : Number(e));
            },
            [t],
        );
    return (0, r.jsx)(j.l, { selectionMode: "single", label: t, value: n, options: [...a], onSelectionChange: l });
}
function ck() {
    return (0, r.jsxs)(Q.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsx)(cA, { experimentName: cc.A.definition.name, options: cS }),
            (0, r.jsx)(cA, { experimentName: cx.A.definition.name, options: cN }),
        ],
    });
}
let cD = [
        { id: "US", value: "US", label: "United States (USD)" },
        { id: "CA", value: "CA", label: "Canada (CAD)" },
        { id: "FR", value: "FR", label: "France (EUR)" },
        { id: "GB", value: "GB", label: "United Kingdom (GBP)" },
        { id: "DE", value: "DE", label: "Germany (EUR)" },
    ],
    cI = { US: "usd", CA: "cad", FR: "eur", GB: "gbp", DE: "eur" };
function cT() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState("500"),
        [l, s] = o.useState(null),
        [i, d] = o.useState(!1),
        [c, u] = o.useState(!1),
        [m, h] = o.useState(null),
        p = parseInt(a, 10),
        g = !isNaN(p) && p >= 500 && p <= 5e3;
    async function v() {
        if (g) {
            (d(!0), h(null), s(null), u(!1));
            try {
                let t = await l7.Bo.post({
                    url: "/billing/gift-card/create-on-demand-pin",
                    body: { country: e, currency: cI[e], amount: p },
                    rejectWithError: !0,
                });
                s(t.body.pin);
            } catch (e) {
                h(e instanceof Error ? e.message : "Failed to generate PIN");
            } finally {
                d(!1);
            }
        }
    }
    return (0, r.jsxs)(Q.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsxs)(Q.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, r.jsx)(j.l, {
                        selectionMode: "single",
                        label: "Gift Card Country",
                        value: e,
                        options: cD,
                        onSelectionChange: t,
                    }),
                    (0, r.jsx)(f.k, {
                        label: "Amount (500\u20135000)",
                        type: "number",
                        value: a,
                        onChange: n,
                        min: 500,
                        max: 5e3,
                    }),
                    (0, r.jsx)(x.$, {
                        variant: "primary",
                        size: "sm",
                        text: "Generate Gift Card PIN",
                        onClick: v,
                        loading: i,
                        disabled: !g,
                    }),
                ],
            }),
            null != l &&
                (0, r.jsxs)(Q.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(f.k, { label: "Generated PIN", value: l, onChange: () => {}, readOnly: !0 }),
                        (0, r.jsx)(x.$, {
                            variant: "secondary",
                            size: "sm",
                            text: c ? "Copied!" : "Copy",
                            onClick: () => {
                                (navigator.clipboard.writeText(l), u(!0), setTimeout(() => u(!1), 2e3));
                            },
                        }),
                    ],
                }),
            null != m && (0, r.jsx)(J.w, { type: "critical", children: m }),
        ],
    });
}
function cO(e) {
    let { paymentSource: t } = e;
    async function a() {
        (await l7.Bo.patch({ url: ex.Rsh.BILLING_PAYMENT_SOURCE(t.id), body: { default: !0 }, rejectWithError: !1 }),
            await (0, d3.$o)());
    }
    return (0, r.jsxs)("div", {
        className: sG.bd,
        children: [
            (0, r.jsx)(cd.A, { locale: "en-US", paymentSource: t, showLabels: !0, showPaymentSourceIcon: !0 }, t.id),
            (0, r.jsx)("img", { alt: t.country, className: cg.bI, src: (0, cu.t)(t.country) }),
            t.isDefault
                ? (0, r.jsx)(p.E, { variant: "text-sm/medium", children: "(Default)" })
                : (0, r.jsx)(x.$, { variant: "secondary", size: "sm", text: "Set as Default", onClick: a }),
        ],
    });
}
var cR = a(706712),
    cw = a(441574),
    cM = a(501419),
    cL = a(349871),
    cP = a(55373);
function cU() {
    return (0, r.jsxs)(g.Ip, { className: cP.kL, children: [(0, r.jsx)(cG, {}), (0, r.jsx)(cF, {})] });
}
function cG() {
    let e = (0, d.bG)([ec.default], () => ec.default.getCurrentUser()?.perks ?? null),
        t = o.useMemo(
            () =>
                null == e
                    ? []
                    : Object.values(cw.bb)
                          .filter((e) => "number" == typeof e && e !== cw.bb.UNSPECIFIED)
                          .filter((t) => (0, cL.Nh)(e, t))
                          .map((t) => ({
                              id: t,
                              name: cw.bb[t],
                              sources: (0, cL.kQ)(e, t)?.map((e) => cw.g$[e]) ?? [],
                          })),
            [e],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(Z.D, { className: cP.wx, variant: "heading-lg/semibold", children: "Active Perks" }),
            (0, r.jsx)(cB, { perks: e, activePerks: t }),
            (0, r.jsx)(Z.D, { className: cP.m_, variant: "heading-md/semibold", children: "Debug" }),
            (0, r.jsxs)("p", {
                children: [
                    (0, r.jsx)("strong", { children: "Rules version:" }),
                    " ",
                    null != e ? e.rulesVersion : "n/a",
                ],
            }),
            (0, r.jsxs)("p", {
                children: [
                    (0, r.jsx)("strong", { children: "Active perks bitmask:" }),
                    " ",
                    (0, r.jsx)("code", { children: null != e ? JSON.stringify(e.activePerksBitmask) : "n/a" }),
                ],
            }),
        ],
    });
}
function cB(e) {
    let { perks: t, activePerks: a } = e;
    return null == t
        ? (0, r.jsx)("p", { className: cP.Qb, children: "No perks data available on the current user." })
        : 0 === a.length
          ? (0, r.jsx)("p", { className: cP.Qb, children: "No active perks." })
          : (0, r.jsxs)("table", {
                className: cP.Q,
                children: [
                    (0, r.jsx)("thead", {
                        children: (0, r.jsxs)("tr", {
                            children: [
                                (0, r.jsx)("th", { className: cP.Ts, children: "Perk" }),
                                (0, r.jsx)("th", { className: cP.Ts, children: "Sources" }),
                            ],
                        }),
                    }),
                    (0, r.jsx)("tbody", {
                        children: a.map((e) =>
                            (0, r.jsxs)(
                                "tr",
                                {
                                    children: [
                                        (0, r.jsxs)("td", {
                                            className: cP.iH,
                                            children: [(0, r.jsx)("code", { children: e.name }), " (", e.id, ")"],
                                        }),
                                        (0, r.jsx)("td", {
                                            className: cP.iH,
                                            children: e.sources.length > 0 ? e.sources.join(", ") : "\u2014",
                                        }),
                                    ],
                                },
                                e.id,
                            ),
                        ),
                    }),
                ],
            });
}
function cF() {
    let e = o.useCallback(() => {
            (0, aL._N)(aM.M.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, cM.FZ)(aM.M.NITRO_TENURE_BADGE_LEVEL_UP),
        a = null != t ? new Date(t) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(Z.D, { className: cP.wx, variant: "heading-lg/semibold", children: "Tenure Badges" }),
            (0, r.jsxs)("p", {
                children: [
                    "Level Up DC:\xa0",
                    null != a && (0, r.jsxs)("b", { children: ["Dismissed (", a.toLocaleDateString(), ")"] }),
                    null == a && (0, r.jsx)("b", { children: "Not Dismissed" }),
                ],
            }),
            (0, r.jsx)("div", {
                className: cP.PW,
                children: (0, r.jsx)(x.$, { variant: "primary", text: "Reset Level Up DC", onClick: e }),
            }),
        ],
    });
}
var c$ = a(136722),
    cV = a(576705),
    cW = a(558393),
    cz = a(719366),
    cH = a(643566);
function cK(e) {
    let { title: t, can: a } = e,
        n = a ? of.CheckmarkLargeIcon : el.P,
        l = (0, r.jsx)("div", {
            className: Y()(cH.v_, a ? cH.uU : cH.Ss),
            children: (0, r.jsx)(n, { className: cH.Kk }),
        });
    return (0, r.jsxs)("div", {
        className: cH.z8,
        children: [
            l,
            (0, r.jsx)("div", {
                className: cH.rv,
                children: (0, r.jsx)(p.E, { variant: "text-md/normal", children: t }),
            }),
        ],
    });
}
function cY() {
    let e = (0, d.bG)([oe.Ay], () => oe.Ay.getChannelId()),
        t = (0, d.bG)([nC.A], () => nC.A.getGuildId()),
        a = (0, d.bG)([aK.A], () => aK.A.getChannel(e)),
        n = (0, d.bG)([nE.A], () => nE.A.getGuild(t)),
        l = (0, d.bG)([cV.A], () => cV.A.computePermissions(a)),
        s = (0, d.bG)([cV.A], () => cV.A.computePermissions(n)),
        i = (0, aH.Ay)(a, !0),
        o = null != a ? (0, cz.mW)(a, !1) : null,
        c = null != n ? cW.A.getGuildPermissionSpecMap(n) : null,
        u = Object.values(o ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = c$.zy(l, a);
            return (0, r.jsx)(cK, { title: t, can: n }, t);
        }),
        m = Object.values(c ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = c$.zy(s, a);
            return (0, r.jsx)(cK, { title: t, can: n }, t);
        });
    return (0, r.jsx)("div", {
        className: Y()(tZ.nd, cH.nd),
        children: (0, r.jsxs)("div", {
            className: cH.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: cH.uW,
                    children: [
                        (0, r.jsx)(Z.D, {
                            variant: "heading-md/semibold",
                            children: null != i ? `Permissions in ${i}` : "No channel selected",
                        }),
                        u,
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: cH.uW,
                    children: [
                        (0, r.jsx)(Z.D, {
                            variant: "heading-md/semibold",
                            children: null != n ? `Permissions in ${n.name}` : "No guild selected",
                        }),
                        m,
                    ],
                }),
            ],
        }),
    });
}
var cq = a(873298),
    cJ = a(775602),
    cQ = a(363195),
    cX = a(885386),
    cZ = a(631670),
    c0 = a(817281),
    c1 = a(955572),
    c2 = a(56348),
    c3 = a(385803),
    c6 = a(381941);
let c5 = [ex.NJ8.ASH, ex.NJ8.LIGHT, ex.NJ8.DARK, ex.NJ8.ONYX],
    c8 = [cq.NS.COMPACT, cq.NS.COZY, cq.NS.DEFAULT];
function c4(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function c9() {
    let e,
        t =
            ((e = ec.default.getCurrentUser()),
            oS.Ay.canUseClientThemes(e) ? Object.keys(c3.ag).map((e) => Number(e)) : []),
        a = t.length > 0 && Math.random() > 0.7;
    try {
        if (a) {
            let e,
                a = [...t, null],
                n = c4(a);
            if (null != n) {
                let t = c3.ag[n];
                e = t?.theme ?? ex.NJ8.DARK;
            } else e = c4([ex.NJ8.ASH, ex.NJ8.DARK, ex.NJ8.ONYX]);
            await c0.u_(
                { theme: e, backgroundGradientPresetId: n ?? void 0, customUserThemeSettings: void 0 },
                aL.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = c4(c5);
            await c0.u_(
                { theme: e, backgroundGradientPresetId: void 0, customUserThemeSettings: void 0 },
                aL.Sb.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function c7() {
    let e = tO.A.purchases,
        t = (0, eG.x9)(e),
        a = (0, eG.$W)(e),
        n = t.length > 0,
        l = a.length > 0;
    if (n || l)
        try {
            let e = {};
            (n && (e.avatarDecoration = c4([...t, null])), l && (e.nameplate = c4([...a, null])), (0, tv.p)(e));
            let s = tj.A.getPendingChanges(),
                i = (0, c2.Sk)(s);
            await (0, cZ._L)(i).finally(cZ.pZ);
        } catch (e) {}
}
function ue() {
    try {
        let e = c4(ex.hH7.FONT_SIZES);
        (0, c1.XS)(e);
        let t = c4(c6.qh);
        (0, c1.AC)(t);
        let a = c4(c8);
        cX.Xi.updateSetting(a);
    } catch (e) {}
}
function ut() {
    (0, ty.Bf)();
    let e = (0, d.bG)([ec.default], () => ec.default.getCurrentUser()),
        t = cX.eh.useSetting(),
        a = (0, d.bG)([cQ.A], () => cQ.A.theme),
        n = t.backgroundGradientPresetId,
        l = (0, d.bG)([tO.A], () => tO.A.purchases),
        s = (0, eG.x9)(l),
        i = (0, eG.$W)(l),
        c = e?.avatarDecoration?.skuId,
        u = e?.collectibles?.nameplate?.skuId,
        m = null != c ? (s.find((e) => e.skuId === c) ?? null) : null,
        h = null != u ? (i.find((e) => e.skuId === u) ?? null) : null,
        g = (0, d.bG)([tT.A], () => tT.A.getProduct(m?.skuId)),
        v = (0, d.bG)([tT.A], () => tT.A.getProduct(h?.skuId)),
        j = (0, d.bG)([cJ.Ay], () => cJ.Ay.fontSize),
        f = (0, d.bG)([cJ.Ay], () => cJ.Ay.messageGroupSpacing),
        b = cX.Xi.useSetting();
    return (
        o.useEffect(() => {
            let e = ec.default.getCurrentUser(),
                t = cX.eh.getSetting(),
                a = tO.A.purchases,
                n = (0, eG.x9)(a),
                l = (0, eG.$W)(a),
                s = cQ.A.theme,
                i = t.backgroundGradientPresetId,
                r = e?.avatarDecoration?.skuId,
                o = e?.collectibles?.nameplate?.skuId,
                d = null != r ? (n.find((e) => e.skuId === r) ?? null) : null,
                c = null != o ? (l.find((e) => e.skuId === o) ?? null) : null,
                u = cJ.Ay.fontSize,
                m = cJ.Ay.messageGroupSpacing,
                h = cX.Xi.getSetting();
            return () => {
                try {
                    (c0.u_(
                        { theme: s, backgroundGradientPresetId: i ?? void 0, customUserThemeSettings: void 0 },
                        aL.Sb.INFREQUENT_USER_ACTION,
                    ),
                        (0, tv.p)({ avatarDecoration: d, nameplate: c }));
                    let e = tj.A.getPendingChanges(),
                        t = (0, c2.Sk)(e);
                    ((0, cZ._L)(t).finally(cZ.pZ), (0, c1.XS)(u), (0, c1.AC)(m), cX.Xi.updateSetting(h));
                } catch (e) {}
            };
        }, []),
        (0, r.jsxs)("div", {
            className: lq.kL,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(Z.D, {
                            variant: "heading-lg/semibold",
                            children: "Randomize customization settings",
                        }),
                        (0, r.jsx)(p.E, {
                            variant: "text-md/normal",
                            children:
                                "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state.",
                        }),
                        (0, r.jsx)(x.$, { variant: "primary", size: "sm", text: "Randomize Theme", onClick: c9 }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: c7,
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: ue,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(Z.D, { variant: "heading-lg/semibold", children: "Current Settings" }),
                        (0, r.jsxs)(p.E, { variant: "text-md/normal", children: ["Theme: ", a] }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-md/normal",
                            children: ["Client Theme ID:", " ", null != n ? c3.ag[n]?.getName() : "None"],
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-md/normal",
                            children: ["Avatar Decoration: ", g?.name ?? "None"],
                        }),
                        (0, r.jsxs)(p.E, { variant: "text-md/normal", children: ["Nameplate: ", v?.name ?? "None"] }),
                        (0, r.jsxs)(p.E, { variant: "text-md/normal", children: ["Font Size: ", j, "px"] }),
                        (0, r.jsxs)(p.E, { variant: "text-md/normal", children: ["Message Spacing: ", f] }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-md/normal",
                            children: [
                                "UI Density: ",
                                b,
                                " (",
                                (function (e) {
                                    switch (e) {
                                        case cq.NS.COMPACT:
                                            return "Compact";
                                        case cq.NS.COZY:
                                            return "Cozy";
                                        case cq.NS.DEFAULT:
                                            return "Default";
                                        case cq.NS.RESPONSIVE:
                                            return "Responsive";
                                        default:
                                            return "Unknown";
                                    }
                                })(b),
                                ")",
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var ua = a(656513),
    un = a(885574),
    ul = a(508274),
    us = a(837529);
let ui = [5793266, 2303016],
    ur = [
        { id: "nitro", label: "Nitro", value: "nitro" },
        { id: "non-nitro", label: "Non-Nitro", value: "non-nitro" },
    ];
function uo() {
    let { themeOverride: e, setThemeOverride: t, savedClientTheme: a, setSavedClientTheme: n } = (0, us.Zt)(),
        l = (0, ej.Ay)(),
        s = (0, d.bG)([aP.A], () => aP.A.settings.appearance?.clientThemeSettings),
        i =
            s?.customUserThemeSettings != null &&
            null != s.customUserThemeSettings.colors &&
            s.customUserThemeSettings.colors.length > 0;
    function o() {
        null != a && ((0, c0.u_)({ theme: a.theme, customUserThemeSettings: a.customUserThemeSettings }), n(null));
    }
    return (0, r.jsx)(g.Ar, {
        children: (0, r.jsxs)(Q.B, {
            gap: 16,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(ua.N, {
                            collapsibleContent: (0, r.jsxs)(Q.B, {
                                gap: 8,
                                padding: 4,
                                children: [
                                    (0, r.jsx)(p.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children:
                                            "This panel allows you to override the theme and theme colors that are used when rendering user profiles. The overrides you set here will apply to all user profiles, not just your own.",
                                    }),
                                    (0, r.jsx)(p.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children:
                                            "The intended use case for this tool is to allow you to preview both Nitro and non-Nitro profile component styles across a variety of user profiles regardless of their Nitro status or chosen theme colors.",
                                    }),
                                ],
                            }),
                            children: (e) => {
                                let { onClick: t } = e;
                                return (0, r.jsx)(x.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "What is this?",
                                    icon: un.CircleInformationIcon,
                                    onClick: t,
                                });
                            },
                        }),
                        (0, r.jsx)(b.c, {}),
                    ],
                }),
                null == e
                    ? (0, r.jsx)(x.$, {
                          variant: "primary",
                          text: "Enable Theme Override",
                          onClick: () => t({ mode: "nitro", themeType: null, themeColors: ui }),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(nx.e, {
                                  children: (0, r.jsx)(x.$, {
                                      variant: "critical-primary",
                                      text: "Clear Theme Override",
                                      onClick: function () {
                                          (o(), t(null));
                                      },
                                  }),
                              }),
                              (0, r.jsx)(j.l, {
                                  label: "Profile Type",
                                  selectionMode: "single",
                                  value: e.mode,
                                  options: ur,
                                  onSelectionChange: (a) => t({ ...e, mode: a }),
                              }),
                              "nitro" === e.mode
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(m.d, {
                                                label: "Disable Banner",
                                                checked: !0 === e.disableBanner,
                                                onChange: (a) => t({ ...e, disableBanner: a }),
                                            }),
                                            (0, r.jsx)(x.$, {
                                                variant: "secondary",
                                                text: "Reset Colors",
                                                onClick: () => t({ ...e, themeColors: ui }),
                                            }),
                                            (0, r.jsxs)(Q.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(p.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Primary Color",
                                                    }),
                                                    (0, r.jsx)(ul.VN, {
                                                        wrapperComponentType: "div",
                                                        showEyeDropper: !0,
                                                        eagerUpdate: !0,
                                                        value: e.themeColors?.[0] ?? 0,
                                                        onChange: (a) =>
                                                            t({ ...e, themeColors: [a, e.themeColors?.[1] ?? null] }),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)(Q.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(p.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Secondary Color",
                                                    }),
                                                    (0, r.jsx)(ul.VN, {
                                                        wrapperComponentType: "div",
                                                        showEyeDropper: !0,
                                                        eagerUpdate: !0,
                                                        value: e.themeColors?.[1] ?? 0,
                                                        onChange: (a) =>
                                                            t({ ...e, themeColors: [e.themeColors?.[0] ?? null, a] }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    })
                                  : (0, r.jsxs)(Q.B, {
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(j.l, {
                                                label: "Theme Type",
                                                selectionMode: "single",
                                                value: e.themeType,
                                                options: Object.values(ex.NJ8).map((e) => ({
                                                    id: e,
                                                    label: e,
                                                    value: e,
                                                })),
                                                onSelectionChange: (a) => t({ ...e, themeType: a }),
                                                clearable: !0,
                                                disabled: i,
                                            }),
                                            i &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsx)(p.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-feedback-warning",
                                                            children:
                                                                "You have an active custom theme so setting a theme type does nothing.",
                                                        }),
                                                        (0, r.jsx)(p.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children:
                                                                "Your custom theme will be saved and can be restored manually, or automatically when you clear the override.",
                                                        }),
                                                        (0, r.jsx)(x.$, {
                                                            variant: "critical-secondary",
                                                            size: "sm",
                                                            text: "Use System Theme",
                                                            onClick: function () {
                                                                (s?.customUserThemeSettings != null &&
                                                                    n({
                                                                        theme: l,
                                                                        customUserThemeSettings:
                                                                            s.customUserThemeSettings,
                                                                    }),
                                                                    (0, c0.u_)({ theme: "system" }));
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            null != a &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsx)(p.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children:
                                                                "Your custom theme will be automatically restored when you clear the override.",
                                                        }),
                                                        (0, r.jsx)(x.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Restore Custom Theme",
                                                            onClick: o,
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                          ],
                      }),
            ],
        }),
    });
}
var ud = a(141931),
    uc = a(306173),
    uu = a(597643),
    um = a(237984),
    uh = a(43203),
    ux = a(349435),
    up = a(674272),
    ug = a(466034),
    uv = a(10094),
    uj = a(683760);
function uf() {
    let e = (0, d.bG)([ec.default], () => ec.default.getCurrentUser()),
        t = (0, d.bG)([uj.A], () => {
            let e = uj.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        a = (0, d.bG)([uj.A], () => uj.A.getPremiumTypeOverride());
    return (0, r.jsxs)(Q.B, {
        gap: 16,
        children: [
            (0, r.jsx)(j.l, {
                label: "Override Client-Side Premium Type",
                options: tP.Jm,
                value: a,
                onSelectionChange: (t) => {
                    (0, uv.O)(t, e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(l3.Q, {
                onClick: () => {
                    (0, uv.O)(tP.$I, e);
                },
                text: "Reset premium type override",
            }),
            (0, r.jsx)(iL.J, {
                label: "Override Client-Side Account Created At Date",
                value: nU()(t),
                onSelect: (e) => {
                    var t;
                    return ((t = e.toISOString()), void (0, uv.Y)(new Date(t)));
                },
            }),
            (0, r.jsx)(l3.Q, { onClick: () => (0, uv.Y)(void 0), text: "Reset account created at override" }),
        ],
    });
}
var ub = a(19575),
    uy = a(327337),
    uE = a(431804),
    uC = a(377722),
    u_ = a(221851);
function uS() {
    throw Error("Send help");
}
function uN() {
    let e = cX.j0.useSetting(),
        [t, n] = o.useState(!1);
    return t
        ? {}
        : (0, r.jsxs)(g.Ip, {
              children: [
                  (0, r.jsx)("div", { className: Y()(uC.N, u_.SX), children: (0, r.jsx)(uf, {}) }),
                  (0, r.jsx)("div", {
                      className: Y()(uC.N, u_.QB),
                      children: (0, r.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () => (0, up.A)({ source: uE.y.KEYBIND }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: Y()(uC.N, u_.QB),
                      children: (0, r.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e;
                              return (
                                  (e = oe.Ay.getChannelId() ?? "21154681615024128"),
                                  void (0, eJ.openModalLazy)(
                                      async () => {
                                          let { default: t } = await Promise.all([
                                              a.e("456510"),
                                              a.e("770940"),
                                              a.e("302033"),
                                              a.e("882830"),
                                              a.e("623068"),
                                          ]).then(a.bind(a, 516567));
                                          return (a) =>
                                              (0, r.jsx)(t, {
                                                  otherUserId: "9876543210",
                                                  channelId: e,
                                                  warningId: "test-warning-id",
                                                  warningType: ux._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                  ...a,
                                              });
                                      },
                                      { modalKey: uy.V },
                                  )
                              );
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: Y()(uC.N, u_.QB),
                      children: (0, r.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Captcha Test Tool",
                          onClick: () =>
                              void (0, eJ.openModalLazy)(
                                  async () => {
                                      let { default: e } = await a.e("417724").then(a.bind(a, 563255));
                                      return (t) => (0, r.jsx)(e, { ...t });
                                  },
                                  { onCloseCallback: void 0 },
                              ),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: Y()(uC.N, u_.QB),
                      children: (0, r.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Accept Invite Modal",
                          onClick: () => (0, uh.$)("fortnite", "DevTools Quick Actions"),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: Y()(uC.N, u_.QB),
                      children: (0, r.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: uc.Oy,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: Y()(uC.N, u_.QB),
                      children: (0, r.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Store Error",
                          onClick: () => {
                              let e = uu.A.getSocket();
                              tM.h.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((t) => {
                                  e.resetSocketOnDispatchError({ error: t, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
                              });
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: Y()(uC.N, u_.QB),
                      children: (0, r.jsx)(m.d, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => cX.j0.updateSetting(e),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: Y()(uC.N, u_.QB),
                      children: [
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, um.o)(),
                          }),
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Reset Socket",
                              onClick: () => {
                                  (uu.A.getSocket().close(), uu.A.getSocket().connect());
                              },
                          }),
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Clear Caches",
                              onClick: () => {
                                  tM.h.dispatch({
                                      type: "CLEAR_CACHES",
                                      reason: "Requested by user",
                                      preventWritingCachesAgainThisSession: !0,
                                      resetSocket: !0,
                                  });
                              },
                          }),
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Show TOTP Success",
                              onClick: () => (0, ug.sy)(!0),
                          }),
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Trigger Suspicious Sessions Notifications",
                              onClick: function () {
                                  l7.Bo.post({ url: ex.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                              },
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: Y()(uC.N, u_.QB),
                      children: [
                          (0, r.jsx)(j.l, {
                              label: "Trigger native crash",
                              hideLabel: !0,
                              selectionMode: "single",
                              value: void 0,
                              options: [
                                  { label: "Native libdiscord crash", value: void 0, id: "libdiscord" },
                                  { label: "Abort()", value: 0, id: "abort" },
                                  { label: "SIGSEGV()", value: 1, id: "sigsegv" },
                                  { label: "EXCEPTION_ACCESS_VIOLATION", value: 2, id: "exception_access_violation" },
                                  { label: "RaiseFailFastException", value: 3, id: "raise_fail_fast_exception" },
                                  { label: "Out of Memory", value: 4, id: "out_of_memory" },
                                  { label: "Modified Code", value: 5, id: "modified_code" },
                              ],
                              onSelectionChange: (e) => null != e && ub.Ay.crash(e),
                          }),
                          (0, r.jsx)(j.l, {
                              label: "Trigger JS crash",
                              hideLabel: !0,
                              selectionMode: "single",
                              value: void 0,
                              options: [
                                  { label: "Native JS crash", value: void 0, id: "native_js_crash" },
                                  {
                                      label: "Delayed exception in renderer process",
                                      value: ud.qQ.RendererProcessDelayed,
                                      id: "delayed_exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in renderer process",
                                      value: ud.qQ.RendererProcess,
                                      id: "exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in main process",
                                      value: ud.qQ.MainProcess,
                                      id: "exception_in_main_process",
                                  },
                              ],
                              onSelectionChange: (e) => (null != e ? void ub.Ay.triggerJSException(e) : void 0),
                          }),
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              size: "sm",
                              text: "React Crash",
                              onClick: () => n(!0),
                          }),
                          (0, r.jsx)(x.$, { variant: "primary", size: "sm", text: "onClick Throw", onClick: uS }),
                      ],
                  }),
              ],
          });
}
var uA = a(593924),
    uk = a(653887),
    uD = a(799226);
function uI() {
    let e = Object.keys(uA).map((e) => (0, r.jsx)(uR, { riveName: e }, e));
    return (0, r.jsx)(g.Ar, {
        style: { maxHeight: "100%" },
        children: (0, r.jsxs)(Q.B, {
            gap: 24,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsx)(Z.D, { variant: "heading-lg/medium", children: "Rive Inspector" }),
                (0, r.jsx)(p.E, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to view the animation and interact with its data binding configuration.",
                }),
                (0, r.jsx)(uT, {}),
                (0, r.jsx)(Z.D, { variant: "heading-lg/medium", children: "Rive Overrides" }),
                (0, r.jsx)(p.E, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to replace an existing Rive animation in the app with the new one. Useful for previewing updated versions of existing animations before uploading them via the Rive pipeline.",
                }),
                e,
            ],
        }),
    });
}
function uT() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        [i, d] = o.useState([]),
        c = o.useRef(null),
        [u, m] = o.useState(400),
        [h, x] = o.useState(400),
        p = o.useCallback(() => {
            setTimeout(() => {
                (s(c.current?.getProperties() ?? {}), d(c.current?.getArtboards() ?? []), n({}));
            }, 1e3);
        }, []),
        g = o.useCallback(
            (e, t) => {
                null != a && n((a) => ({ ...a, [e]: { type: l?.[e]?.type, value: t } }));
            },
            [l, a],
        ),
        v = o.useCallback((e) => {
            (s(null), n(null), t(e));
        }, []);
    return (0, r.jsxs)(Q.B, {
        gap: 16,
        children: [
            (0, r.jsx)(uR, { riveName: "Rive inspector", onRiveLoad: v }),
            null != e &&
                (0, r.jsx)("div", {
                    style: { width: u, height: h },
                    children: (0, r.jsx)(uk._, { src: e, ref: c, onLoad: p, dynamicDataBinding: a ?? {} }),
                }),
            null != e && null == a ? (0, r.jsx)(tu.y, {}) : null,
            null != a &&
                (0, r.jsxs)(Q.B, {
                    children: [
                        (0, r.jsxs)(Q.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(Z.D, { variant: "heading-lg/medium", children: "Dimensions" }),
                                (0, r.jsx)(f.k, {
                                    type: "number",
                                    label: "width",
                                    value: u.toString(),
                                    onChange: (e) => m(parseInt(e)),
                                }),
                                (0, r.jsx)(f.k, {
                                    type: "number",
                                    label: "height",
                                    value: h.toString(),
                                    onChange: (e) => x(parseInt(e)),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(Q.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(Z.D, { variant: "heading-lg/medium", children: "Data Binding" }),
                                Object.keys(l ?? {}).map((e) =>
                                    (0, r.jsx)(
                                        uO,
                                        {
                                            property: e,
                                            type: l?.[e]?.type,
                                            value: a?.[e]?.value ?? l?.[e]?.value,
                                            onChange: (t) => g(e, t),
                                            artboards: i,
                                        },
                                        e,
                                    ),
                                ),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
function uO(e) {
    let { property: t, type: a, value: n, onChange: l, artboards: s } = e;
    switch (a) {
        case "string":
            return (0, r.jsx)(f.k, { label: t, value: n, onChange: (e) => l(e) });
        case "number":
            return (0, r.jsx)(f.k, { type: "number", label: t, value: n, onChange: (e) => l(parseInt(e)) });
        case "boolean":
            return (0, r.jsx)(m.d, { label: t, checked: n, onChange: (e) => l(e) });
        case "trigger":
            return (0, r.jsx)(x.$, { text: `Trigger ${t}`, onClick: () => l(Number.isSafeInteger(n) ? n + 1 : 1) });
        case "image":
            return (0, r.jsx)(f.k, { label: t, value: n, onChange: (e) => l(e) });
        case "color":
            return (0, r.jsx)(a_.Z, {
                selectionMode: "single",
                label: t,
                value: n,
                onSelectionChange: (e) => l(e),
                closeOnSelect: !0,
                placeholder: "Select a color...",
                options: Object.entries(eQ.A.colors).map((e) => {
                    let [t, a] = e;
                    return { label: t, value: a, id: t };
                }),
            });
        case "artboard":
            return (0, r.jsx)(a_.Z, {
                selectionMode: "single",
                label: t,
                value: n,
                onSelectionChange: (e) => l(e),
                closeOnSelect: !0,
                placeholder: "Select an artboard...",
                options: s.map((e) => ({ label: e, value: e, id: e })),
            });
        default:
            return null;
    }
}
function uR(e) {
    let { riveName: t, onRiveLoad: a } = e,
        n = uA[t]?.riveSrc,
        l = null == n,
        s = o.useRef(null),
        i = (0, uD.Gy)(n);
    return (0, r.jsxs)(
        Q.B,
        {
            gap: 8,
            children: [
                (0, r.jsx)("label", { children: t }),
                (0, r.jsxs)(Q.B, {
                    justify: "space-between",
                    direction: "horizontal",
                    align: "center",
                    children: [
                        (0, r.jsx)("input", {
                            type: "file",
                            accept: ".riv",
                            onChange: function (e) {
                                let t = e.target.files?.[0];
                                if (null == t) return;
                                let l = new FileReader();
                                ((l.onload = (e) => {
                                    let t = e.target?.result;
                                    (null != n && (0, uD.DS)(n, t), a?.(t));
                                }),
                                    l.readAsArrayBuffer(t));
                            },
                            ref: s,
                        }),
                        (0, r.jsx)(eK.K, {
                            "aria-label": `Clear override for ${t}`,
                            onClick: function () {
                                (null != s.current && (s.current.value = ""),
                                    null != n && (0, uD.DS)(n, null),
                                    a?.(null));
                            },
                            icon: nV.TrashIcon,
                            variant: "critical-primary",
                            size: "sm",
                            disabled: null == i && !l,
                        }),
                    ],
                }),
            ],
        },
        t,
    );
}
var uw = a(926919),
    uM = a(513521),
    uL = a(111162);
function uP() {
    let e = (0, d.bG)([uL.default], () => uL.default.routingKeyTags);
    return (0, r.jsx)(lO.Ch, {
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-16)" },
            children: (0, r.jsxs)(u.n, {
                label: "Routing Key",
                children: [
                    (0, r.jsx)(p.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        children:
                            "A routing key is an opaque set of strings added to outbound network requests, which may be used for debugging and testing of the network path.",
                    }),
                    (0, r.jsxs)(Q.B, {
                        gap: 8,
                        children: [
                            (0, r.jsx)(Z.D, { variant: "heading-md/medium", children: "Overrides" }),
                            (0, r.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: "Manually configure the routing key values",
                            }),
                            (0, r.jsx)(uM.A, {
                                tagsLabel: "Routing Key Values",
                                placeholder: "Enter new value...",
                                tags: e.map((e) => ({ id: e, label: e })),
                                onAddTag: function (t) {
                                    e.includes(t) || (0, uw.f)([...e, t]);
                                },
                                onRemoveTag: function (t) {
                                    (0, uw.f)(e.filter((e) => !t.has(e)));
                                },
                            }),
                            e.length > 0
                                ? (0, r.jsx)(x.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: "Clear all",
                                      onClick: () => (0, uw.f)([]),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
        }),
    });
}
var uU = a(344292);
function uG(e) {
    let { game: t, meta: a } = e;
    return (0, r.jsxs)("div", {
        className: uU.nM,
        children: [
            (0, r.jsxs)("div", {
                className: uU.uV,
                children: [
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/semibold",
                        className: uU._k,
                        children: null == t.name || "" === t.name ? "(no name)" : t.name,
                    }),
                    null != a && (0, r.jsx)(p.E, { variant: "text-xs/normal", className: uU.Bq, children: a }),
                ],
            }),
            (0, r.jsx)(p.E, {
                variant: "text-xs/normal",
                className: uU.C0,
                children: null == t.exePath || "" === t.exePath ? "(no path)" : t.exePath,
            }),
            (0, r.jsxs)(p.E, {
                variant: "text-xs/normal",
                className: uU.en,
                children: ["pid ", t.pid, " \xb7 ", t.id ?? "(no id)"],
            }),
        ],
    });
}
function uB(e) {
    let { title: t, count: a, entries: n, renderMeta: l } = e;
    return (0, r.jsxs)(Q.B, {
        gap: 4,
        children: [
            (0, r.jsxs)(Z.D, { variant: "heading-sm/bold", children: [t, " (", a, ")"] }),
            0 === n.length
                ? (0, r.jsx)(p.E, { variant: "text-sm/normal", className: uU.Ie, children: "none" })
                : (0, r.jsx)(Q.B, {
                      gap: 0,
                      children: n.map((e) =>
                          (0, r.jsx)(
                              uG,
                              { game: e.game, meta: l?.(e.outcome) },
                              `${e.game.pid}-${e.game.id ?? e.game.exeName}`,
                          ),
                      ),
                  }),
        ],
    });
}
function uF(e) {
    return "blocked" !== e.kind
        ? null
        : null != e.matchedExe
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    "blocked by exe substring ",
                    (0, r.jsx)("span", { className: uU.ti, children: e.matchedExe }),
                ],
            })
          : null != e.matchedPattern
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      "blocked by pattern ",
                      (0, r.jsx)("span", { className: uU.ti, children: e.matchedPattern }),
                  ],
              })
            : "blocked (no reason captured)";
}
function u$(e) {
    return "observed_app" !== e.kind
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  "matched observed app",
                  " ",
                  (0, r.jsxs)("span", {
                      className: uU.ti,
                      children: [e.appName, e.streamerTool ? " (streamer tool)" : ""],
                  }),
              ],
          });
}
function uV() {
    var e;
    let t = (0, d.bG)([E.Ay], () => E.Ay.getDetectionDebug()),
        a = o.useMemo(() => {
            let e = [],
                a = [],
                n = [],
                l = [];
            if (null != t)
                for (let s of t.entries)
                    switch (s.outcome.kind) {
                        case "passed":
                            e.push(s);
                            break;
                        case "non_game":
                            a.push(s);
                            break;
                        case "observed_app":
                            n.push(s);
                            break;
                        case "blocked":
                            l.push(s);
                    }
            return { passed: e, nonGames: a, observedApps: n, blocked: l };
        }, [t]);
    return (0, r.jsx)("div", {
        className: Y()(tZ.nd, uU.kL),
        children: (0, r.jsxs)(Q.B, {
            gap: 16,
            padding: 12,
            className: uU.rf,
            children: [
                (0, r.jsxs)(Q.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(Z.D, { variant: "heading-md/bold", children: "Running Game Detection" }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: [
                                "Inspect what native is reporting, which entries get filtered by the JS pipeline, and what ultimately lands in ",
                                (0, r.jsx)("code", { children: "RunningGameStore" }),
                                ". Updates whenever native reports a change.",
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)(Q.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(Z.D, { variant: "heading-sm/bold", children: "Status" }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            children: [
                                (0, r.jsx)("strong", { children: "Last update:" }),
                                " ",
                                null == (e = t?.timestamp) ? "never" : new Date(e).toLocaleTimeString(),
                            ],
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            children: [
                                (0, r.jsx)("strong", { children: "From native:" }),
                                " ",
                                t?.totalFromNative ?? 0,
                            ],
                        }),
                        (0, r.jsxs)(p.E, {
                            variant: "text-sm/normal",
                            children: [
                                (0, r.jsx)("strong", { children: "Passed to RunningGameStore:" }),
                                " ",
                                a.passed.length,
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(uB, { title: "Running games", count: a.passed.length, entries: a.passed }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(uB, { title: "Filtered: non-game", count: a.nonGames.length, entries: a.nonGames }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(uB, {
                    title: "Filtered: matched a hardcoded observed app",
                    count: a.observedApps.length,
                    entries: a.observedApps,
                    renderMeta: u$,
                }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(uB, {
                    title: "Filtered: blocklist",
                    count: a.blocked.length,
                    entries: a.blocked,
                    renderMeta: uF,
                }),
            ],
        }),
    });
}
var uW = a(290136),
    uz = a(299163),
    uH = a(629584),
    uK = a(600239),
    uY = a(940622),
    uq = a(961895),
    uJ = a(343991),
    uQ = a(607027);
function uX() {
    (0, eJ.openModalLazy)(
        async () => {
            let { default: e } = await Promise.resolve().then(a.bind(a, 343991));
            return (t) =>
                (0, r.jsx)(e, {
                    title: "No image or video files found!",
                    help: "Please drop one or more image or video files.",
                    ...t,
                });
        },
        { modalKey: uJ.D },
    );
}
function uZ(e) {
    (e.stopPropagation(), e.preventDefault());
}
let u0 = (e) => {
    let { className: t, onDrop: a, children: n } = e,
        [l, s] = o.useState(!1),
        i = o.useRef(null),
        d = o.useCallback((e) => {
            (uZ(e), s(!0), (0, eJ.closeModal)(uJ.D));
        }, []),
        c = o.useCallback((e) => {
            uZ(e);
            let t = i.current,
                a = e.relatedTarget;
            (null != a && (null == t || t.contains(a))) || s(!1);
        }, []),
        u = o.useCallback(
            async (e) => {
                (uZ(e), s(!1));
                let t = e.dataTransfer;
                if (null == t) return void uX();
                let n = await Promise.all(Array.from(t.items).map((e) => e.webkitGetAsEntry() ?? e.getAsEntry())).then(
                    (e) => e.filter((e) => null != e),
                );
                n.length > 0 ? a(n) : uX();
            },
            [a],
        );
    return (0, r.jsxs)("div", {
        ref: i,
        className: Y()(t, uQ.iE),
        onDragEnter: d,
        onDragOver: uZ,
        onDragLeave: c,
        onDrop: u,
        children: [
            n,
            l &&
                (0, r.jsx)("div", {
                    className: uQ.d2,
                    children: (0, r.jsxs)("div", {
                        className: uQ.vW,
                        children: [
                            (0, r.jsx)(uq.A, { icons: eN.ir }),
                            (0, r.jsx)(Z.D, { variant: "heading-lg/bold", children: "Upload Shop Assets" }),
                            (0, r.jsxs)("div", {
                                className: uQ.GA,
                                children: [
                                    (0, r.jsx)(p.E, {
                                        variant: "text-sm/normal",
                                        children: "Drop file(s) into this panel to preview Shop assets!",
                                    }),
                                    (0, r.jsxs)(p.E, {
                                        variant: "text-sm/normal",
                                        children: [
                                            "Click",
                                            (0, r.jsx)(uW.CircleQuestionIcon, {
                                                className: uQ.q4,
                                                size: "xs",
                                                color: eQ.A.colors.TEXT_DEFAULT,
                                            }),
                                            "above for more instructions.",
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
        ],
    });
};
var u1 = a(374380),
    u2 = a(597404),
    u3 = a(455256);
let u6 = new Set([
        eF.RN.HERO_BANNER_STATIC,
        eF.RN.HERO_LOGO,
        eF.RN.PDP_BACKGROUND,
        eF.RN.LOGO,
        eF.RN.MOBILE_BANNER,
        eF.RN.MOBILE_BACKGROUND,
    ]),
    u5 = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
    u8 = { max: 5e6, warn: 2e6 },
    u4 = { max: 3e6, warn: 1e6 },
    u9 = { max: 2e6, warn: 1e6 },
    u7 = { max: 1e6, warn: 5e5 },
    me = { max: 25e4, warn: 5e4 },
    mt = {
        [u3.J.PROFILE_EFFECT]: u8,
        [u3.J.AVATAR_DECORATION]: u4,
        [u3.J.PROFILE_FRAME]: u9,
        [eF.RN.HERO_BANNER_ANIMATED]: u8,
        [eF.RN.HERO_BANNER_RIVE]: u8,
        [eF.RN.CATALOG_BANNER_RIVE]: u8,
        [eF.RN.SHOP_BUTTON_BG_HOVER]: u4,
        [eF.RN.SHOP_BUTTON_BG_HOVER_DARK]: u4,
        [eF.RN.SHOP_BUTTON_BG_HOVER_LIGHT]: u4,
        [eF.RN.SHOP_BUTTON_BG_RESTING]: u4,
        [eF.RN.SHOP_BUTTON_BG_RESTING_DARK]: u4,
        [eF.RN.SHOP_BUTTON_BG_RESTING_LIGHT]: u4,
        [eF.RN.HERO_BANNER_STATIC]: u9,
        [eF.RN.UPSELL_BANNER]: u7,
        [eF.RN.UPSELL_BANNER_POPOUT]: me,
        [eF.RN.MOBILE_BANNER]: u7,
        [eF.RN.MOBILE_BACKGROUND]: me,
        [eF.RN.MOBILE_HERO]: u7,
        [eF.RN.PDP_BACKGROUND]: me,
        [eF.RN.LOGO]: me,
        [eF.RN.TAB_TOOLTIP]: me,
    },
    ma = [eF.Kx.COLLECTION],
    mn = [eF.Kx.AVATAR_DECORATIONS, eF.Kx.FRAMES, eF.Kx.NAMEPLATES, eF.Kx.PROFILE_EFFECTS];
async function ml(e) {
    let t = e.createReader(),
        a = await new Promise((e) => t.readEntries(e)),
        n = new Set();
    for (let e of a) e.isDirectory && n.add(e.name);
    let l = ma.filter((e) => !n.has(e));
    return (mn.some((e) => n.has(e)) || l.push(`at least one of: ${mn.join(", ")}`), l);
}
let ms = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/;
function mi(e) {
    let { names: t, addError: a } = e,
        n = t.filter((e) => !ms.test(e));
    n.length > 0 && a("File names must be in lowercase snake case", n);
}
function mr(e, t, a, n, l) {
    let s = t.size,
        i = s > 1e6 ? `${(s / 1e6).toFixed(2)}MB` : `${(s / 1e3).toFixed(2)}KB`,
        r = `${l ?? t.name} - ${i}`;
    if (s > e.max) {
        let t = e.max > 1e6 ? `${Math.round(e.max / 1e6)}MB` : `${Math.round(e.max / 1e3)}KB`;
        a("Files exceed the recommended size limit - make sure they are optimized!", [`${r} (max: ${t})`]);
    } else s > e.warn && n("Files are a tad chonky - are you sure they're optimized?", [`${r}`]);
}
function mo(e, t, a, n) {
    let l = mt[e];
    if (null != l) for (let e of t) e.name.endsWith(".txt") || mr(l, e, a, n);
}
function md(e) {
    let t = eF.aL[e];
    return `${e} (${t.map((e) => `.${e}`).join(", ")})`;
}
let mc = ["png", "jpg"];
async function mu(e) {
    let t = URL.createObjectURL(e);
    try {
        return await (0, eF.Lv)(t);
    } finally {
        URL.revokeObjectURL(t);
    }
}
async function mm(e, t) {
    if (e.length < 2) return null;
    let a = (
        await Promise.all(
            e.map(async (e) => {
                try {
                    return t(await mu(e));
                } catch {
                    return null;
                }
            }),
        )
    ).filter((e) => null != e);
    return a.length < 2 || new Set(a).size <= 1 ? null : a;
}
function mh(e) {
    return e.map((e) => `${e}px`).join(", ");
}
async function mx(e, t) {
    for (let [a, n] of Object.entries(e.profileFrameDirsMap)) {
        let e = new Map();
        for (let { file: t } of n.layerFiles) {
            let { parsed: a } = (0, u2.Mf)(t.name);
            if (a?.type !== u1.O.STAPLE) continue;
            let n = e.get(a.anchor) ?? [];
            (n.push(t), e.set(a.anchor, n));
        }
        for (let [n, l] of e) {
            let e = await mm(l, (e) => e.height);
            null != e &&
                t("Staples with the same anchor (top/bottom) must all have the same height", [
                    `${a} (${String(n).toUpperCase()}) - ${mh(e)}`,
                ]);
        }
    }
}
async function mp(e, t) {
    for (let [a, n] of Object.entries(e.profileFrameDirsMap)) {
        let e = n.layerFiles
                .filter((e) => {
                    let { file: t } = e,
                        { parsed: a } = (0, u2.Mf)(t.name);
                    return a?.type === u1.O.STAPLE || a?.type === u1.O.BORDER || a?.type === u1.O.RAIL;
                })
                .map((e) => {
                    let { file: t } = e;
                    return t;
                }),
            l = await mm(e, (e) => e.width);
        null != l && t("All layers (staples, borders, rails) must have the same width", [`${a} - ${mh(l)}`]);
    }
}
var mg = a(275537);
let mv = o.createContext({ setDropHandler: () => {} }),
    mj = [
        { name: "Preview", value: "preview" },
        { name: "Validate", value: "validate" },
    ],
    mf = { id: "none", label: "[none selected]", value: null };
function mb() {
    (0, eJ.hasModalOpen)(uK.k)
        ? (0, eJ.closeModal)(uK.k)
        : (0, eJ.openModalLazy)(
              async () => {
                  let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                  return (t) => (0, r.jsx)(e, { ...t });
              },
              { modalKey: uK.k, onCloseRequest: () => (0, eJ.closeModal)(uK.k) },
          );
}
function my() {
    (0, eJ.hasModalOpen)(uK.g)
        ? (0, eJ.closeModal)(uK.g)
        : (0, eJ.openModalLazy)(
              async () => {
                  let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                  return (t) => (0, r.jsx)(e, { ...t });
              },
              { modalKey: uK.g, onCloseRequest: () => (0, eJ.closeModal)(uK.g) },
          );
}
function mE() {
    let e = (0, e$.pF)(),
        { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: a } = (0, uY.JE)(),
        n = o.useMemo(() => [mf, ...e.map((e) => ({ id: e.skuId, label: e.name, value: e.skuId }))], [e]);
    return 0 === e.length
        ? null
        : (0, r.jsxs)("div", {
              className: mg.kO,
              children: [
                  (0, r.jsx)(az.h, { size: 16 }),
                  (0, r.jsxs)("div", {
                      className: mg.wR,
                      children: [
                          (0, r.jsx)(Z.D, {
                              variant: "heading-sm/semibold",
                              children: `Profile Effect (${e.length} to preview)`,
                          }),
                          (0, r.jsx)(eK.K, {
                              variant: "icon-only",
                              size: "sm",
                              onClick: my,
                              icon: uW.CircleQuestionIcon,
                              "aria-label": "Open PFX preview instructions",
                          }),
                      ],
                  }),
                  (0, r.jsx)(j.l, {
                      label: "Profile Effect",
                      hideLabel: !0,
                      selectionMode: "single",
                      options: n,
                      value: t,
                      maxOptionsVisible: 50,
                      onSelectionChange: a,
                  }),
              ],
          });
}
function mC() {
    let e = (0, uY.bA)(),
        { previewProfileFrameKey: t, setPreviewProfileFrameKey: a } = (0, uY.JE)(),
        n = o.useMemo(() => [mf, ...e.map((e) => ({ id: e.key, label: e.key, value: e.key }))], [e]);
    return 0 === e.length
        ? null
        : (0, r.jsxs)("div", {
              className: mg.kO,
              children: [
                  (0, r.jsx)(az.h, { size: 16 }),
                  (0, r.jsx)(Z.D, {
                      variant: "heading-sm/semibold",
                      children: `Profile Frame (${e.length} to preview)`,
                  }),
                  (0, r.jsx)(j.l, {
                      label: "Profile Frame",
                      hideLabel: !0,
                      selectionMode: "single",
                      options: n,
                      value: t,
                      maxOptionsVisible: 50,
                      onSelectionChange: a,
                  }),
              ],
          });
}
function m_() {
    let { previewAvatarDecorationKey: e, setPreviewAvatarDecorationKey: t } = (0, uY.JE)(),
        { avatarDecorationAssets: a } = (0, uY.NE)(),
        n = o.useMemo(() => [mf, ...a.map((e) => ({ id: e.name, label: e.name, value: e.name }))], [a]);
    return 0 === a.length
        ? null
        : (0, r.jsxs)("div", {
              className: mg.kO,
              children: [
                  (0, r.jsx)(az.h, { size: 16 }),
                  (0, r.jsx)(Z.D, {
                      variant: "heading-sm/semibold",
                      children: `Avatar Decorations (${a.length} to preview)`,
                  }),
                  (0, r.jsx)(j.l, {
                      label: "Avatar Decorations",
                      hideLabel: !0,
                      selectionMode: "single",
                      options: n,
                      value: e,
                      maxOptionsVisible: 50,
                      onSelectionChange: t,
                  }),
              ],
          });
}
let mS = new Set([eF.RN.HERO_BANNER_STATIC, eF.RN.HERO_BANNER_ANIMATED, eF.RN.HERO_BANNER_RIVE]);
function mN(e) {
    let { clearAssets: t, clearIgnoredFiles: a } = e,
        { collectionAssets: n } = (0, uY.NE)(),
        {
            deleteCollectionAsset: l,
            clearAssets: s,
            heroLogoMaxHeight: i,
            setHeroLogoMaxHeight: d,
            heroResponsive: c,
            setHeroResponsive: u,
        } = (0, uY.JE)(),
        h = o.useMemo(() => Object.values(n).map((e) => ({ label: e.name, value: e.type })), [n]),
        g = h.some((e) => e.value === eF.RN.HERO_LOGO),
        v = h.some((e) => mS.has(e.value)),
        j = o.useCallback((e) => l(e), [l]),
        f = o.useCallback(() => {
            (s(), t(), a());
        }, [s, t, a]);
    return 0 === h.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(az.h, { size: 16 }),
                  (g || v) &&
                      (0, r.jsxs)("div", {
                          className: mg.v7,
                          children: [
                              g &&
                                  (0, r.jsxs)("div", {
                                      className: mg.cj,
                                      children: [
                                          (0, r.jsx)(p.E, {
                                              variant: "text-md/normal",
                                              className: mg.Me,
                                              children: "Logo size",
                                          }),
                                          (0, r.jsx)(uz.A, {
                                              className: mg.TQ,
                                              minValue: 90,
                                              maxValue: 200,
                                              initialValue: i ?? 90,
                                              handleSize: 10,
                                              onValueChange: (e) => d(Math.round(e)),
                                              onValueRender: (e) => `${Math.round(e)}px`,
                                              "aria-label": "Hero logo max height",
                                          }),
                                          (0, r.jsx)(p.E, { variant: "text-sm/normal", children: `${i ?? 90}px` }),
                                      ],
                                  }),
                              v &&
                                  (0, r.jsxs)("div", {
                                      className: mg.sy,
                                      children: [
                                          (0, r.jsx)(m.d, { checked: c, onChange: u }),
                                          (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Responsive Hero" }),
                                      ],
                                  }),
                          ],
                      }),
                  (0, r.jsx)(az.h, { size: 16 }),
                  (0, r.jsxs)("div", {
                      className: mg.wR,
                      children: [
                          (0, r.jsx)(Z.D, { variant: "heading-lg/bold", children: "Uploaded Assets" }),
                          (0, r.jsx)(x.$, { variant: "critical-primary", size: "sm", onClick: f, text: "Clear All" }),
                      ],
                  }),
                  (0, r.jsx)("ul", {
                      children: h.map((e) =>
                          (0, r.jsxs)(
                              "li",
                              {
                                  className: mg._0,
                                  children: [
                                      (0, r.jsx)(eK.K, {
                                          variant: "icon-only",
                                          size: "sm",
                                          onClick: () => j(e.value),
                                          icon: el.P,
                                          "aria-label": "Remove asset",
                                      }),
                                      (0, r.jsx)(p.E, { variant: "text-md/normal", children: e.label }),
                                  ],
                              },
                              e.value,
                          ),
                      ),
                  }),
              ],
          });
}
function mA(e) {
    let { ignoredFiles: t, handleClearIgnoredFiles: a } = e;
    return 0 === t.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(az.h, { size: 16 }),
                  (0, r.jsxs)("div", {
                      className: mg.wR,
                      children: [
                          (0, r.jsx)(Z.D, { variant: "heading-lg/bold", children: "Ignored Files" }),
                          (0, r.jsx)(x.$, { variant: "primary", size: "sm", onClick: a, text: "Clear" }),
                      ],
                  }),
                  (0, r.jsx)("ul", {
                      children: t.map((e, t) =>
                          (0, r.jsx)(
                              "li",
                              {
                                  className: mg.yk,
                                  children: (0, r.jsx)(p.E, { variant: "text-md/normal", children: e }),
                              },
                              `${e}-${t}`,
                          ),
                      ),
                  }),
              ],
          });
}
function mk() {
    let {
            validateShopAssetPackage: e,
            reset: t,
            validationComplete: a,
            warnings: n,
            errors: l,
        } = (function () {
            let [e, t] = o.useState(!1),
                [a, n] = o.useState({}),
                [l, s] = o.useState({}),
                i = o.useCallback(function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    s((a) => {
                        let n = a[e] ?? [];
                        return { ...a, [e]: [...n, ...t] };
                    });
                }, []),
                r = o.useCallback(function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    n((a) => {
                        let n = a[e] ?? [];
                        return { ...a, [e]: [...n, ...t] };
                    });
                }, []),
                d = o.useCallback(() => {
                    (t(!1), s({}), n({}));
                }, []);
            return {
                validationComplete: e,
                errors: l,
                warnings: a,
                validateShopAssetPackage: o.useCallback(
                    async (e) => {
                        try {
                            if (0 === e.length) return void i("No files found");
                            if (e.length > 1) return void i("Uploaded multiple files. Expected 1 directory.");
                            let t = e[0];
                            if (!t.isDirectory) return void i("Uploaded a file. Expected a directory.");
                            let a = await ml(t);
                            a.length > 0 && i("Missing required directories", a);
                            let n = await (0, eF.eg)([t]);
                            ((function (e) {
                                let { files: t, addError: a, addWarning: n } = e;
                                for (let e of t.collectionFiles) {
                                    let t = (0, eF.pd)(e),
                                        l = null != t ? mt[t] : null;
                                    null != l && mr(l, e, a, n);
                                }
                                mi({ names: t.collectionFiles.map((e) => e.name), addError: a });
                                let l = new Set(t.collectionFiles.map((e) => (0, eF.pd)(e)).filter((e) => null != e)),
                                    s = Array.from(u6)
                                        .filter((e) => !l.has(e))
                                        .map(md);
                                s.length > 0 && a("Missing required files", s);
                                let i = Object.values(eF.RN)
                                    .filter((e) => !u6.has(e))
                                    .filter((e) => !l.has(e))
                                    .map(md);
                                i.length > 0 && n("Missing optional assets", i);
                            })({ files: n, addError: i, addWarning: r }),
                                (function (e) {
                                    let { files: t, addError: a, addWarning: n } = e;
                                    (mi({ names: Object.keys(t.profileEffectFilesMap), addError: a }),
                                        Object.entries(t.profileEffectFilesMap).forEach((e) => {
                                            let [t, l] = e,
                                                s = l.map((e) => e.name);
                                            (mi({
                                                names: s.map((e) => {
                                                    let t = e.indexOf("-");
                                                    return e.substring(0, t > 0 ? t : e.length);
                                                }),
                                                addError: a,
                                            }),
                                                mo(u3.J.PROFILE_EFFECT, l, a, n));
                                            let i = u5
                                                .filter((e) => !s.some((t) => t.startsWith(e) && t.endsWith(".png")))
                                                .map((e) => `${t}/${e}`);
                                            (i.length > 0 && a("Missing required PFX files with prefix", i),
                                                s.some((e) => e.endsWith(".txt")) ||
                                                    a(
                                                        "PFX configs required - please include both exports! (exception: duplicate variant configs are optional)",
                                                        [t],
                                                    ));
                                            let r = s
                                                .filter((e) => !u5.some((t) => e.startsWith(t)) && !e.endsWith(".txt"))
                                                .map((e) => `${t}/${e}`);
                                            r.length > 0 && n("Contains unrecognized files", r);
                                        }));
                                })({ files: n, addError: i, addWarning: r }),
                                (function (e) {
                                    let { files: t, addError: a, addWarning: n } = e;
                                    (mi({ names: t.avatarDecorationFiles.map((e) => e.name), addError: a }),
                                        mo(u3.J.AVATAR_DECORATION, t.avatarDecorationFiles, a, n));
                                })({ files: n, addError: i, addWarning: r }),
                                (function (e) {
                                    let { files: t, addError: a, addWarning: n } = e,
                                        l = Object.keys(t.profileFrameDirsMap)
                                            .filter((e) => !ms.test(e))
                                            .map((e) => `${eF.Kx.FRAMES}/${e}`);
                                    l.length > 0 && a("File names must be in lowercase snake case", l);
                                    let s = mt[u3.J.PROFILE_FRAME];
                                    Object.entries(t.profileFrameDirsMap).forEach((e) => {
                                        let [t, l] = e,
                                            i = `${eF.Kx.FRAMES}/${t}`,
                                            r = l.previewFile?.name.split(".").pop()?.toLowerCase();
                                        ((null != l.previewFile && null != r && mc.includes(r)) ||
                                            a(
                                                "Missing required preview file for profile frame (preview.png or preview.jpg)",
                                                [`${i}/preview.{${mc.join("|")}}`],
                                            ),
                                            0 === l.layerFiles.length &&
                                                a(
                                                    "Profile frame must contain at least one foreground or background layer",
                                                    [`${i}/{foreground|background}/...`],
                                                ),
                                            l.unrecognizedSubdirs.length > 0 &&
                                                n(
                                                    "Profile frame contains unrecognized folders (expected foreground/, background/, or preview.png)",
                                                    l.unrecognizedSubdirs.map((e) => `${i}/${e}/`),
                                                ));
                                        let o = [];
                                        for (let { file: e, folder: t } of (null == l.previewFile ||
                                            ms.test(l.previewFile.name) ||
                                            o.push(`${i}/${l.previewFile.name}`),
                                        l.layerFiles))
                                            ms.test(e.name) || o.push(`${i}/${t}/${e.name}`);
                                        o.length > 0 && a("File names must be in lowercase snake case", o);
                                        let d = [];
                                        for (let { file: e, folder: t } of l.layerFiles) {
                                            let { parsed: a, errorType: n } = (0, u2.Mf)(e.name);
                                            if (null == a) {
                                                let a = null != n ? u2.h4[n] : "invalid";
                                                d.push(`${i}/${t}/${e.name}: ${a}`);
                                            }
                                        }
                                        if ((d.length > 0 && a("Invalid profile frame layer filenames", d), null != s))
                                            for (let { file: e, folder: t } of (null != l.previewFile &&
                                                mr(s, l.previewFile, a, n, `${i}/${l.previewFile.name}`),
                                            l.layerFiles))
                                                mr(s, e, a, n, `${i}/${t}/${e.name}`);
                                    });
                                })({ files: n, addError: i, addWarning: r }),
                                (function (e) {
                                    let { files: t, addWarning: a } = e;
                                    t.ignoredFilenames.length > 0 &&
                                        a("Contains unrecognized files", t.ignoredFilenames);
                                })({ files: n, addError: i, addWarning: r }),
                                await Promise.all([mx(n, i), mp(n, i)]));
                        } finally {
                            t(!0);
                        }
                    },
                    [i, r],
                ),
                reset: d,
            };
        })(),
        s = Object.entries(l),
        i = Object.entries(n),
        d = s.length > 0,
        c = i.length > 0,
        { setDropHandler: u } = o.useContext(mv),
        m = o.useCallback(
            (a) => {
                (t(), e(a));
            },
            [e, t],
        );
    return (
        o.useEffect(() => {
            u(m);
        }, [m, u]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                a
                    ? (0, r.jsxs)("div", {
                          className: mg._f,
                          children: [
                              (0, r.jsx)(p.E, {
                                  variant: "text-md/normal",
                                  color: d ? "text-feedback-critical" : "text-default",
                                  children: `${s.length} errors`,
                              }),
                              (0, r.jsx)(p.E, {
                                  variant: "text-md/normal",
                                  color: c ? "text-feedback-warning" : "text-default",
                                  children: `${i.length} warnings`,
                              }),
                              (0, r.jsx)(x.$, { variant: "primary", size: "sm", onClick: t, text: "Reset" }),
                          ],
                      })
                    : (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Drop asset folder to validate." }),
                (0, r.jsx)(az.h, { size: 16 }),
                d &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(Z.D, { variant: "heading-lg/bold", children: "Errors" }),
                            (0, r.jsx)(az.h, { size: 8 }),
                            (0, r.jsx)("ul", {
                                className: mg.ck,
                                children: s.map((e, t) => {
                                    let [a, n] = e;
                                    return (0, r.jsxs)(
                                        "li",
                                        {
                                            children: [
                                                (0, r.jsx)(p.E, {
                                                    variant: "text-md/bold",
                                                    color: "text-feedback-critical",
                                                    children: a,
                                                }),
                                                n.length > 0 &&
                                                    (0, r.jsx)("ul", {
                                                        className: mg.ck,
                                                        children: n.map((e, t) =>
                                                            (0, r.jsx)(
                                                                "li",
                                                                {
                                                                    children: (0, r.jsx)(p.E, {
                                                                        variant: "text-sm/normal",
                                                                        color: "text-feedback-critical",
                                                                        children: e,
                                                                    }),
                                                                },
                                                                `${e}-${t}`,
                                                            ),
                                                        ),
                                                    }),
                                            ],
                                        },
                                        `${a}-${t}`,
                                    );
                                }),
                            }),
                        ],
                    }),
                c &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(Z.D, { variant: "heading-lg/bold", children: "Warnings" }),
                            (0, r.jsx)(az.h, { size: 8 }),
                            (0, r.jsx)("ul", {
                                className: mg.ck,
                                children: Object.entries(n).map((e, t) => {
                                    let [a, n] = e;
                                    return (0, r.jsxs)(
                                        "li",
                                        {
                                            children: [
                                                (0, r.jsx)(p.E, {
                                                    variant: "text-md/bold",
                                                    color: "text-feedback-warning",
                                                    children: a,
                                                }),
                                                n.length > 0 &&
                                                    (0, r.jsx)("ul", {
                                                        className: mg.ck,
                                                        children: n.map((e, t) =>
                                                            (0, r.jsx)(
                                                                "li",
                                                                {
                                                                    children: (0, r.jsx)(p.E, {
                                                                        variant: "text-sm/normal",
                                                                        color: "text-feedback-warning",
                                                                        children: e,
                                                                    }),
                                                                },
                                                                `${e}-${t}`,
                                                            ),
                                                        ),
                                                    }),
                                            ],
                                        },
                                        `${a}-${t}`,
                                    );
                                }),
                            }),
                        ],
                    }),
            ],
        })
    );
}
function mD() {
    let { previewEnabled: e, setPreviewEnabled: t, clearAssets: a } = (0, uY.JE)(),
        { ignoredFilenames: n, clearAssets: l, clearIgnoredFilenames: s, processAndUpsertAssets: i } = (0, eF.ds)(),
        { setDropHandler: d } = o.useContext(mv),
        c = o.useCallback(
            (e) => {
                (a(), i(e));
            },
            [i, a],
        );
    return (
        o.useEffect(() => {
            d(c);
        }, [c, d]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: mg.sy,
                    children: [
                        (0, r.jsx)(m.d, { checked: e, onChange: (e) => t(e) }),
                        (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Enable Preview" }),
                        (0, r.jsx)(eK.K, {
                            variant: "icon-only",
                            size: "sm",
                            onClick: mb,
                            icon: uW.CircleQuestionIcon,
                            "aria-label": "Open preview instructions",
                        }),
                    ],
                }),
                (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Drop files in this panel to begin preview." }),
                (0, r.jsx)(mE, {}),
                (0, r.jsx)(mC, {}),
                (0, r.jsx)(m_, {}),
                (0, r.jsx)(mN, { clearAssets: l, clearIgnoredFiles: s }),
                (0, r.jsx)(mA, { ignoredFiles: n, handleClearIgnoredFiles: s }),
            ],
        })
    );
}
function mI() {
    let [e, t] = o.useState("preview");
    return (0, r.jsxs)("div", {
        className: mg.kL,
        children: [
            (0, r.jsx)(uH.I, {
                options: mj,
                value: e,
                onChange: (e) => {
                    let { value: a } = e;
                    return t(a);
                },
                className: mg.Vj,
                optionClassName: mg.UK,
            }),
            (0, r.jsx)(az.h, { size: 8 }),
            "preview" === e && (0, r.jsx)(mD, {}),
            "validate" === e && (0, r.jsx)(mk, {}),
            (0, r.jsx)(az.h, { size: 16 }),
        ],
    });
}
let mT = (e) => {
    let { children: t, onDrop: a } = e,
        n = o.useRef(() => {}),
        l = o.useMemo(
            () => ({
                setDropHandler: (e) => {
                    n.current = e;
                },
            }),
            [],
        ),
        s = o.useCallback(
            (e) => {
                (a?.(e), n.current(e));
            },
            [a],
        );
    return (0, r.jsx)(mv.Provider, { value: l, children: (0, r.jsx)(u0, { onDrop: s, children: t }) });
};
var mO = a(663803),
    mR = a(815996),
    mw = a(335032);
function mM() {
    let e = (0, d.bG)([tT.A], () => tT.A.skipNumCategories);
    return (0, r.jsxs)("div", {
        className: mw.k,
        children: [
            (0, r.jsx)(p.E, { variant: "text-md/normal", children: "Hide first # of categories" }),
            (0, r.jsx)(mO.l, {
                value: e,
                onChange: (e) => {
                    (0, mR.ue)(e);
                },
                minValue: 0,
                maxValue: 100,
            }),
        ],
    });
}
var mL =
        (((n = {}).DEFAULT = "default"),
        (n.ORB_TAB = "orb_tab"),
        (n.FRAMES = "frames"),
        (n.FRAMES_PINNED = "frames_pinned"),
        n),
    mP = a(295811);
function mU() {
    let e = (0, d.bG)([mP.A], () => mP.A.getShopHomeConfigOverride()),
        t = [
            { id: "none", label: "DISABLED (no override)", value: void 0 },
            ...Object.values(mL).map((e) => ({ id: e, label: e, value: e })),
        ];
    return (0, r.jsx)(j.l, {
        label: "Shop Home Override",
        layout: "horizontal",
        options: t,
        value: e,
        onSelectionChange: (e) => {
            (0, mR.Or)(e);
        },
        selectionMode: "single",
    });
}
var mG = a(474200);
function mB() {
    let [e, t] = o.useState(void 0);
    return (0, r.jsxs)("div", {
        className: Y()(mG.kL, mG.fi),
        children: [
            (0, r.jsx)(f.k, {
                fullWidth: !0,
                label: "Shop Layout URL Override",
                value: e,
                onChange: (e) => ("" === e ? t(void 0) : t(e)),
                placeholder: "https://cdn.discordapp.com/assets/content/...",
            }),
            (0, r.jsxs)("div", {
                className: mG.o1,
                children: [
                    (0, r.jsx)(x.$, {
                        variant: "critical-primary",
                        text: "Clear",
                        onClick: () => {
                            (t(void 0), (0, mR.Aq)(void 0));
                        },
                    }),
                    (0, r.jsx)(x.$, {
                        variant: "primary",
                        text: "Set",
                        onClick: () => (0, mR.Aq)("" !== e ? e : void 0),
                    }),
                ],
            }),
        ],
    });
}
function mF(e) {
    let { className: t } = e,
        a = Object.keys(aM.M).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
    return null == a
        ? null
        : (0, r.jsx)("div", { className: t, style: { zIndex: 1 }, children: (0, r.jsx)(l$, { items: [a] }) });
}
var m$ = a(578797),
    mV = a(291052);
function mW(e) {
    let { title: t, expanded: a, onToggle: n, children: l } = e,
        s = o.useId();
    return (0, r.jsx)(ua.N, {
        isExpanded: a,
        className: mV.uW,
        collapsibleContent: (0, r.jsx)("div", { id: s, className: mV.f5, children: l }),
        children: () =>
            (0, r.jsxs)("button", {
                type: "button",
                onClick: n,
                "aria-expanded": a,
                "aria-controls": s,
                className: mV.bV,
                children: [
                    (0, r.jsx)(Z.D, { variant: "heading-md/bold", children: t }),
                    (0, r.jsx)(ix._, { size: "sm", color: "currentColor", className: Y()(mV.ai, { [mV.hg]: a }) }),
                ],
            }),
    });
}
function mz() {
    let e = (0, d.bG)([lY.A], () => lY.A.get("shop_disable_cache")),
        t = (0, d.bG)([lY.A], () => lY.A.get("shop_include_unpublished")),
        a = (0, m$.U)("DevToolsShopPanel"),
        [n, l] = o.useState(new Set()),
        s = o.useCallback((e) => {
            l((t) => {
                let a = new Set(t);
                return (a.has(e) ? a.delete(e) : a.add(e), a);
            });
        }, []),
        i = o.useCallback(() => {
            l((e) => {
                if (e.has("assets")) return e;
                let t = new Set(e);
                return (t.add("assets"), t);
            });
        }, []);
    return (0, r.jsx)(mT, {
        onDrop: i,
        children: (0, r.jsxs)("div", {
            className: mV.Lm,
            children: [
                (0, r.jsxs)("div", {
                    className: mV.dQ,
                    children: [
                        (0, r.jsx)(m.d, {
                            label: "Disable collectibles cache",
                            checked: e,
                            onChange: (e) => (0, lK.L)("shop_disable_cache", e),
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Show unpublished collectibles",
                            checked: t,
                            onChange: (e) => (0, lK.L)("shop_include_unpublished", e),
                        }),
                    ],
                }),
                (0, r.jsxs)(mW, {
                    title: "Layouts",
                    expanded: n.has("layouts"),
                    onToggle: () => s("layouts"),
                    children: [(0, r.jsx)(mF, {}), (0, r.jsx)(mU, {}), a && (0, r.jsx)(mB, {}), (0, r.jsx)(mM, {})],
                }),
                (0, r.jsx)(mW, {
                    title: "Assets",
                    expanded: n.has("assets"),
                    onToggle: () => s("assets"),
                    children: (0, r.jsx)(mI, {}),
                }),
            ],
        }),
    });
}
let mH = [
    { id: "unset", label: "Unset", value: cq.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET },
    { id: "all", label: "All", value: cq.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
    { id: "usersWithGame", label: "Users With Game", value: cq.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
    { id: "none", label: "None", value: cq.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
];
function mK() {
    let e = o.useRef(null),
        t = cX.TA.useSetting();
    return (0, r.jsx)("div", {
        ref: e,
        className: Y()(tZ.nd, ne.n),
        children: (0, r.jsxs)("div", {
            className: ne.k,
            children: [
                (0, r.jsx)(Z.D, { variant: "heading-lg/normal", children: "Settings" }),
                (0, r.jsx)(j.l, {
                    label: "Receive DMs In Game",
                    options: mH,
                    value: t,
                    onSelectionChange: cX.TA.updateSetting,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
var mY = a(828596),
    mq = a(937427),
    mJ = a(213682);
function mQ() {
    let e = (0, d.bG)([mq.A], () => mq.A.getPromotionIdOverride()),
        [t, a] = o.useState(e ?? ""),
        n = o.useCallback(() => {
            (a(""), (0, mY.J_)(void 0));
        }, []),
        l = o.useCallback(() => {
            let e = t.trim();
            (0, mY.J_)("" !== e ? e : void 0);
        }, [t]),
        s = o.useCallback((e) => {
            a(e);
        }, []);
    return (0, r.jsxs)("div", {
        className: mJ.k,
        children: [
            (0, r.jsx)(f.k, {
                fullWidth: !0,
                label: `Promotion ID Override (staff)${null != e ? ` \u{2014} active: ${e}` : ""}`,
                value: t,
                onChange: s,
                placeholder: "Paste a storefront promotion id",
            }),
            (0, r.jsxs)("div", {
                className: mJ.o,
                children: [
                    (0, r.jsx)(x.$, { variant: "critical-primary", text: "Clear", onClick: n }),
                    (0, r.jsx)(x.$, { variant: "primary", text: "Set", onClick: l }),
                ],
            }),
        ],
    });
}
var mX = a(209612);
function mZ() {
    return (0, r.jsx)("div", { className: mX.n, children: (0, r.jsx)(mQ, {}) });
}
var m0 = a(278416),
    m1 = a(53938);
function m2(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function m3(e) {
    let { store: t, dataGetter: a } = e,
        [n, l] = o.useState(a(t));
    return (
        o.useEffect(() => {
            function e() {
                return l(a(t));
            }
            return (
                e(),
                t.addChangeListener(e),
                () => {
                    t.removeChangeListener(e);
                }
            );
        }, [t, a]),
        (0, r.jsx)(g.Ip, { className: m1.Dx, children: (0, r.jsx)(nr.A, { data: n }) })
    );
}
function m6(e) {
    let { store: t } = e,
        [a, n] = o.useState(() => JSON.stringify(t.__getLocalVars(), null, 2)),
        [l, s] = o.useState(null),
        i = o.useCallback(() => {
            (n(JSON.stringify(t.__getLocalVars(), null, 2)), s(null));
        }, [t]);
    o.useEffect(() => (t.addChangeListener(i), () => t.removeChangeListener(i)), [t, i]);
    let d = o.useCallback(() => {
            let e;
            s(null);
            try {
                e = JSON.parse(a);
            } catch (e) {
                s(e instanceof SyntaxError ? e.message : "Invalid JSON");
                return;
            }
            let n = t.__getLocalVarsEditConfig?.();
            if (null == n) return void s("Store does not support editing");
            try {
                for (let e of n.preDispatches ?? []) tM.h.dispatch(e);
                (tM.h.dispatch({ ...n.buildPayload(e), type: n.actionType }), i());
            } catch (e) {
                s(e instanceof Error ? e.message : String(e));
            }
        }, [a, t, i]),
        c = o.useCallback(() => {
            let e = t.__getLocalVarsEditConfig?.();
            if (e?.getPurgeVars == null) return void s("Store does not support purge");
            s(null);
            try {
                let t = e.getPurgeVars();
                for (let t of e.preDispatches ?? []) tM.h.dispatch(t);
                (tM.h.dispatch({ ...e.buildPayload(t), type: e.actionType }), i());
            } catch (e) {
                s(e instanceof Error ? e.message : String(e));
            }
        }, [t, i]);
    return (0, r.jsxs)("div", {
        className: Y()(m1.Dx, m1.Ef),
        children: [
            (0, r.jsx)("textarea", {
                className: m1.Vz,
                value: a,
                onChange: (e) => n(e.target.value),
                spellCheck: !1,
                "aria-label": "Edit local variables as JSON",
            }),
            null != l && (0, r.jsx)("div", { className: m1.Xf, role: "alert", children: l }),
            (0, r.jsxs)("div", {
                className: m1.KA,
                children: [
                    (0, r.jsx)(x.$, { variant: "primary", size: "sm", text: "Apply", onClick: d }),
                    (0, r.jsx)(x.$, { variant: "secondary", size: "sm", text: "Refresh from store", onClick: i }),
                    t.__getLocalVarsEditConfig?.().getPurgeVars != null &&
                        (0, r.jsx)(x.$, { variant: "secondary", size: "sm", text: "Purge store", onClick: c }),
                ],
            }),
        ],
    });
}
let m5 = [
    {
        key: "Name",
        cellClassName: m1.__invalid_eventColumn,
        render(e) {
            let { store: t } = e;
            return t.getName();
        },
    },
];
function m8(e) {
    let { store: t, initialHeight: a } = e,
        n = o.useMemo(() => {
            let e;
            return (
                (e = [
                    {
                        id: "local",
                        name: "Local Variables",
                        group: nh.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVars
                                ? (0, r.jsxs)("div", {
                                      className: m1.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVars" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(m3, { store: t, dataGetter: (e) => e.__getLocalVars() });
                        },
                    },
                    {
                        id: "instance",
                        name: "Store Instance",
                        group: nh.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return (0, r.jsx)(m3, { store: t, dataGetter: (e) => e });
                        },
                    },
                ]),
                null != t.__getLocalVars &&
                    e.push({
                        id: "edit-local",
                        name: "Edit Local Variables",
                        group: nh.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVarsEditConfig
                                ? (0, r.jsxs)("div", {
                                      className: m1.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVarsEditConfig" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(m6, { store: t });
                        },
                    }),
                e
            );
        }, [t]),
        { TabBar: l, renderSelectedTab: s } = (0, nm.A)({ tabs: n }, []);
    return (0, r.jsxs)(nu, {
        className: m1.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(ni.Ay, {
                className: Y()(tZ.jr, m1.nZ),
                children: [
                    (0, r.jsx)(ni.Ay.Icon, { icon: m0.TagIcon, tooltip: t.getName() }),
                    (0, r.jsx)(ni.Ay.Title, { children: t.getName() }),
                ],
            }),
            s({ store: t }),
        ],
    });
}
function m4() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = d.il.getAll(),
        l = o
            .useMemo(() => n.map((e) => ({ key: e._dispatchToken, store: e })).sort(m2), [n])
            .filter((e) =>
                (function (e, t) {
                    let { store: a } = e;
                    return a.getName().toLowerCase().includes(t.toLowerCase());
                })(e, t),
            ),
        [s, i] = o.useState(),
        c = n.find((e) => e._dispatchToken === s);
    return (0, r.jsxs)("div", {
        ref: e,
        className: Y()(tZ.nd, m1.nd),
        children: [
            (0, r.jsx)("div", {
                className: m1.KE,
                children: (0, r.jsx)(nW.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, r.jsx)(t0, { columns: m5, data: l, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != c &&
                (0, r.jsx)(m8, { store: c, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }, s),
        ],
    });
}
var m9 = a(435462),
    m7 = a(8062),
    he = a(691540),
    ht = a(857250),
    ha = a(378604);
let hn = Object.values(l2.Ck).map((e) => ({ label: e, value: e, id: e })),
    hl = [
        { label: "top", value: l2.xJ.TOP, id: "top" },
        { label: "bottom", value: l2.xJ.BOTTOM, id: "bottom" },
    ],
    hs = Object.values(ex.BRT).map((e) => ({ label: e, value: e, id: e }));
function hi(e) {
    let { name: t, currentText: a, queueLength: n } = e,
        l = null != a;
    return (0, r.jsxs)("div", {
        className: Y()(ha.M_, { [ha.wl]: l }),
        children: [
            (0, r.jsx)(Z.D, { variant: "heading-sm/semibold", children: t }),
            (0, r.jsx)(p.E, {
                variant: "text-sm/normal",
                color: l ? "text-feedback-positive" : "text-muted",
                children: l ? `showing: \u{201C}${a}\u{201D}` : "idle",
            }),
            (0, r.jsxs)(p.E, { variant: "text-sm/normal", color: "text-muted", children: ["queued: ", n] }),
        ],
    });
}
function hr() {
    let [e, t] = o.useState("The quick brown fox jumps over the lazy dog"),
        [a, n] = o.useState(l2.Ck.SUCCESS),
        [l, s] = o.useState(l2.xJ.TOP),
        [i, d] = o.useState(ex.BRT.APP),
        [c, u] = o.useState(String(3e3)),
        m = m7.a[i],
        h = (0, he.WE)((e) => e.currentToastMap.get(i)),
        p = (0, he.WE)((e) => e.queuedToastsMap.get(i)?.length ?? 0),
        v = (0, m9.WE)((e) => e.currentToastMap.get(m)?.toast),
        j = (0, m9.WE)((e) => e.queuedToastsMap.get(m)?.length ?? 0);
    function b(e, t) {
        return (0, ht.o)(e, t, { position: l, appContext: i, duration: Number(c) > 0 ? Number(c) : 3e3 });
    }
    return (0, r.jsxs)(g.Ip, {
        className: ha.l$,
        children: [
            (0, r.jsxs)("section", {
                className: ha.uW,
                children: [
                    (0, r.jsx)(Z.D, { variant: "heading-md/semibold", children: "Toast stores" }),
                    (0, r.jsxs)("div", {
                        className: ha.zQ,
                        children: [
                            (0, r.jsx)(hi, { name: "Legacy store", currentText: h?.message, queueLength: p }),
                            (0, r.jsx)(hi, { name: "Mana store", currentText: v?.text, queueLength: j }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("section", {
                className: ha.uW,
                children: [
                    (0, r.jsx)(Z.D, { variant: "heading-md/semibold", children: "Config" }),
                    (0, r.jsxs)("div", {
                        className: ha.ne,
                        children: [
                            (0, r.jsx)(f.k, { label: "Text", value: e, onChange: t }),
                            (0, r.jsx)(a_.Z, {
                                label: "Type",
                                options: hn,
                                value: a,
                                onSelectionChange: n,
                                selectionMode: "single",
                            }),
                            (0, r.jsx)(a_.Z, {
                                label: "Position",
                                options: hl,
                                value: l,
                                onSelectionChange: s,
                                selectionMode: "single",
                            }),
                            (0, r.jsx)(a_.Z, {
                                label: "App context",
                                options: hs,
                                value: i,
                                onSelectionChange: d,
                                selectionMode: "single",
                            }),
                            (0, r.jsx)(f.k, { label: "Duration (ms)", value: c, onChange: u, type: "number" }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("section", {
                className: ha.uW,
                children: [
                    (0, r.jsx)(Z.D, { variant: "heading-md/semibold", children: "Show" }),
                    (0, r.jsxs)("div", {
                        className: ha.Uo,
                        children: [
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Show toast",
                                onClick: () => (0, l1.P)(b(e, a)),
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "secondary",
                                text: "Queue 3",
                                onClick: () => {
                                    ((0, l1.P)(b(`${e} (1 of 3)`, a)),
                                        (0, l1.P)(b(`${e} (2 of 3)`, a)),
                                        (0, l1.P)(b(`${e} (3 of 3)`, a)));
                                },
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "secondary",
                                text: "Every type",
                                onClick: () => {
                                    for (let t of Object.values(l2.Ck)) (0, l1.P)(b(`${t}: ${e}`, t));
                                },
                            }),
                            (0, r.jsx)(x.$, { variant: "secondary", text: "Pop current", onClick: () => (0, l1.V)(i) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var ho = a(91871),
    hd = a.n(ho);
let hc = [
        {
            key: "ID",
            cellClassName: n7.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "Bucket",
            cellClassName: n7.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "Timestamp",
            cellClassName: n7.QN,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    hu = [
        {
            id: "details",
            name: "Details",
            group: nh.fu.NONE,
            render: (e) => {
                let {
                        loggedTrigger: {
                            experimentId: t,
                            descriptor: a,
                            exposureType: n,
                            excluded: l,
                            timestamp: s,
                            location: i,
                            previouslyTracked: o,
                        },
                    } = e,
                    d = nU()(s);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(ni.Ay, {
                            className: Y()(tZ.jr, n7.nZ),
                            children: [
                                (0, r.jsx)(ni.Ay.Icon, { icon: nF.U, tooltip: t }),
                                (0, r.jsx)(ni.Ay.Title, { children: t }),
                            ],
                        }),
                        (0, r.jsxs)(n8, {
                            className: n7.ZK,
                            children: [
                                (0, r.jsx)(n4, {
                                    name: "Timestamp (local)",
                                    children: (0, r.jsx)("time", {
                                        dateTime: s.toISOString(),
                                        title: (0, nq.i$)(d, "LLLL"),
                                        children: (0, nq.mk)(d),
                                    }),
                                }),
                                "guild" === a.type &&
                                    (0, r.jsx)(n4, {
                                        name: "Guild ID",
                                        children: (0, r.jsx)("code", { children: a.guildId }),
                                    }),
                                (0, r.jsx)(n4, {
                                    name: "Bucket",
                                    children: (0, r.jsx)("code", { children: a.bucket }),
                                }),
                                (0, r.jsx)(n4, {
                                    name: "Revision",
                                    children: (0, r.jsx)("code", { children: a.revision }),
                                }),
                                (0, r.jsx)(n4, { name: "Override", children: (0, r.jsx)(n9, { value: a.override }) }),
                                (0, r.jsx)(n4, {
                                    name: "Exposure type",
                                    children: (0, r.jsx)("code", { children: n }),
                                }),
                                (0, r.jsx)(n4, { name: "Excluded", children: (0, r.jsx)(n9, { value: l }) }),
                                (0, r.jsx)(n4, { name: "Previously tracked", children: (0, r.jsx)(n9, { value: o }) }),
                                (0, r.jsx)(n4, { name: "Location", children: (0, r.jsx)("code", { children: i }) }),
                            ],
                        }),
                    ],
                });
            },
        },
    ];
function hm() {
    let [e, t] = o.useState(""),
        a = o.useRef(null),
        n = (0, d.yK)([n6], () => n6.loggedTriggers),
        l = o.useMemo(
            () =>
                n
                    .filter((t) => 0 === e.length || hd()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [n, e],
        ),
        [s, i] = o.useState(void 0),
        c = l.find((e) => e.key === s),
        { TabBar: u, renderSelectedTab: m } = (0, nm.A)({ tabs: hu }, []),
        h = (0, d.bG)([n6], () => n6.trackTriggers),
        x = o.useCallback((e) => {
            tM.h.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
        }, []),
        p = h ? "Stop Tracking" : "Start Tracking";
    return (0, r.jsxs)("div", {
        ref: a,
        className: Y()(tZ.nd, n7.nd),
        children: [
            (0, r.jsxs)("div", {
                className: n7.rh,
                children: [
                    (0, r.jsx)(sr.m, {
                        text: p,
                        children: (0, r.jsx)(eK.K, {
                            size: "sm",
                            variant: h ? "active" : "primary",
                            icon: h ? sd.PauseIcon : so.PlayIcon,
                            "aria-label": p,
                            onClick: () => x(!h),
                        }),
                    }),
                    (0, r.jsx)(nW.I, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, r.jsx)(eK.K, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": nS.intl.string(nS.t.VkKicb),
                        icon: nV.TrashIcon,
                        onClick: ee.eY,
                    }),
                ],
            }),
            (0, r.jsx)(t0, { columns: hc, data: l, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != c &&
                (0, r.jsxs)(nu, {
                    className: n7.rf,
                    minHeight: 100,
                    initialHeight: null != a.current ? a.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(u, {}), m({ loggedTrigger: c })],
                }),
        ],
    });
}
var hh = a(512950),
    hx = a(324861),
    hp = a(903162);
let hg = function () {
        let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, hx.A)();
        return (0, r.jsx)("div", {
            className: hp.k,
            children: (0, r.jsxs)(u.n, {
                label: "Virtual Currency Configuration",
                description: "Click the button below to reset your onboarding state for Virtual Currency.",
                children: [
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(x.$, {
                            text: "Reset Onboarding State",
                            onClick: () => {
                                (e(), t(), (0, a1.pX)(ex.BVt.APP));
                            },
                        }),
                    }),
                    (0, r.jsx)(hh.p, {
                        messageType: hh.Y.INFO,
                        children:
                            "Your may have to refresh your client after being redirected to the main application in order to see these",
                    }),
                ],
            }),
        });
    },
    hv = [
        ["codecH264", "H264"],
        ["codecH265", "H265"],
        ["codecAv1", "AV1"],
    ],
    hj = [
        ["encNvidiaDx11", "nvidia-dx11"],
        ["encNvidiaCuda", "nvidia-cuda"],
        ["encAmdDx11", "amd-dx11"],
        ["encIntelDx11", "intel-dx11"],
        ["encIntelCpu", "intel-cpu"],
        ["encWmfCpu", "wmf-cpu"],
        ["encWmfGpu", "wmf-gpu"],
        ["encWmfDx11", "wmf-dx11"],
    ],
    hf = [
        ["capGraphicsCapture", "deny-graphics-capture", "whenFalse"],
        ["capDxgi", "deny-dxgi", "whenFalse"],
        ["capGdi", "deny-gdi", "whenFalse"],
        ["capVideoHook", "deny-video-hook", "whenFalse"],
        ["gdiForceBitblt", "gdi-force-bitblt", "whenTrue"],
        ["bypassHybridGpuFpsRestriction", "bypass-hybrid-gpu-fps", "whenTrue"],
        ["allowHdr", "deny-hdr", "whenFalse"],
    ],
    hb = {
        codecH264: !0,
        codecH265: !0,
        codecAv1: !0,
        encNvidiaDx11: !0,
        encNvidiaCuda: !0,
        encAmdDx11: !0,
        encIntelDx11: !0,
        encIntelCpu: !0,
        encWmfCpu: !0,
        encWmfGpu: !0,
        encWmfDx11: !0,
        capGraphicsCapture: !0,
        capDxgi: !0,
        capGdi: !0,
        capVideoHook: !0,
        gdiForceBitblt: !1,
        bypassHybridGpuFpsRestriction: !1,
        allowHdr: !0,
    },
    hy = { ...hb };
function hE(e, t) {
    return t
        .filter((t) => {
            let [a] = t;
            return !e[a];
        })
        .map((e) => {
            let [, t] = e;
            return t;
        })
        .join(",");
}
let hC = !1;
function h_() {
    if (hC) return !0;
    if (!_.Ay.isEnabled()) return !1;
    try {
        let e = _.Ay.getMediaEngine();
        return (
            e.on(od.bg.Connection, () => {
                nn.A.isDeveloper && hS();
            }),
            e.once(od.bg.Destroy, () => {
                hC = !1;
            }),
            (hC = !0),
            !0
        );
    } catch {
        return !1;
    }
}
function hS() {
    if (nn.A.isDeveloper && h_())
        try {
            var e;
            let t =
                ((e = hy),
                {
                    overrideDeniedVideoCodecs: hE(e, hv),
                    overrideDeniedVideoEncoders: hE(e, hj),
                    captureOverrides: hf
                        .filter((t) => {
                            let [a, , n] = t;
                            return "whenFalse" === n ? !e[a] : !!e[a];
                        })
                        .map((e) => {
                            let [, t] = e;
                            return t;
                        })
                        .join(","),
                });
            _.Ay.getMediaEngine().eachConnection((e) => {
                e.setAudioVideoOverridesTransport(t);
            });
        } catch {}
}
class hN extends d.Ay.DeviceSettingsStore {
    static displayName = "AudioVideoOverridesStore";
    static persistKey = "AudioVideoOverridesStore";
    initialize(e) {
        (this.waitFor(nn.A),
            (hy = null != e ? { ...hb, ...e } : { ...hb }),
            hS(),
            hC ||
                _.Ay.addChangeListener(function e() {
                    h_() && (hS(), _.Ay.removeChangeListener(e));
                }));
    }
    getUserAgnosticState() {
        return hy;
    }
    getSnapshot() {
        return hy;
    }
}
let hA = new hN(tM.h, {
    AUDIO_VIDEO_OVERRIDES_UPDATE: function (e) {
        if (!nn.A.isDeveloper) return !1;
        ((hy = { ...hy, ...e.partial }), hS());
    },
});
var hk = a(731854);
let hD = [
        ["codecH264", "H264"],
        ["codecH265", "H265 / HEVC"],
        ["codecAv1", "AV1"],
    ],
    hI = [
        ["encNvidiaDx11", "NVIDIA Direct3D 11"],
        ["encNvidiaCuda", "NVIDIA CUDA"],
        ["encAmdDx11", "AMD Direct3D 11"],
        ["encIntelDx11", "Intel Direct3D 11"],
        ["encIntelCpu", "Intel CPU"],
        ["encWmfCpu", "Media Foundation CPU"],
        ["encWmfGpu", "Media Foundation GPU"],
        ["encWmfDx11", "Media Foundation Direct3D 11 (NYI)"],
    ],
    hT = [
        ["capGraphicsCapture", "WGC / Windows Graphics Capture"],
        ["capDxgi", "DDA / DXGI Output Duplication"],
        ["capGdi", "GDI / PrintWindow + BitBlt"],
        ["capVideoHook", "Video Hook"],
    ],
    hO = [
        ["bypassHybridGpuFpsRestriction", "WGC: Bypass Hybrid-GPU 60 FPS Restriction"],
        ["gdiForceBitblt", "GDI: Force Allow BitBlt"],
        ["allowHdr", "Allow HDR Capture"],
    ];
function hR(e) {
    let { title: t, toggles: a, state: n } = e;
    return (0, r.jsxs)(Q.B, {
        gap: 8,
        children: [
            (0, r.jsx)(p.E, { variant: "text-lg/bold", children: t }),
            a.map((e) => {
                let [t, a] = e;
                return (0, r.jsx)(
                    ou.S,
                    {
                        label: a,
                        checked: !!n[t],
                        onChange: () => {
                            var e;
                            return (
                                (e = { [t]: !n[t] }),
                                void tM.h.dispatch({ type: "AUDIO_VIDEO_OVERRIDES_UPDATE", partial: e })
                            );
                        },
                    },
                    t,
                );
            }),
        ],
    });
}
function hw() {
    let e = (0, d.bG)([hA], () => hA.getSnapshot()),
        t = (0, d.bG)([_.Ay], () => _.Ay.supports(hk.O5.VIDEO));
    return (0, r.jsxs)(g.Ip, {
        className: tZ.nd,
        children: [
            (0, r.jsx)(b.c, { gap: 16 }),
            (0, r.jsx)(hR, { title: "Video Codecs (Sender)", toggles: hD, state: e }),
            t
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(b.c, { gap: 16 }),
                          (0, r.jsx)(hR, { title: "Video Encoders", toggles: hI, state: e }),
                          (0, r.jsx)(b.c, { gap: 16 }),
                          (0, r.jsx)(hR, { title: "Capture Sources", toggles: hT, state: e }),
                          (0, r.jsx)(b.c, { gap: 16 }),
                          (0, r.jsx)(hR, { title: "Capture Options", toggles: hO, state: e }),
                      ],
                  })
                : null,
        ],
    });
}
var hM = a(109445);
function hL() {
    let [e, t] = o.useState(""),
        [a, n] = o.useState(""),
        [l, s] = o.useState({ status: "idle", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
        i = "processing" === l.status;
    return (0, r.jsx)(g.Ip, {
        className: tZ.nd,
        children: (0, r.jsxs)("div", {
            className: hM.l7,
            children: [
                (0, r.jsx)(p.E, { variant: "text-lg/bold", children: "Batch Audio Processor" }),
                (0, r.jsx)(p.E, {
                    variant: "text-sm/normal",
                    children:
                        "Process wav files through the Discord audio ingest pipeline (WebRTC APM, Krisp, voice filters) and write output to wav files.",
                }),
                (0, r.jsxs)(Q.B, {
                    direction: "horizontal",
                    align: "end",
                    gap: 8,
                    children: [
                        (0, r.jsx)(f.k, {
                            fullWidth: !0,
                            value: e,
                            onChange: t,
                            placeholder: "Input directory (wav files)",
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await y.A.fileManager.showOpenDialog({ properties: ["openDirectory"] });
                                e.length > 0 && t(e[0]);
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)(Q.B, {
                    direction: "horizontal",
                    align: "end",
                    gap: 8,
                    children: [
                        (0, r.jsx)(f.k, { fullWidth: !0, value: a, onChange: n, placeholder: "Output directory" }),
                        (0, r.jsx)(x.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await y.A.fileManager.showOpenDialog({
                                    properties: ["openDirectory", "createDirectory"],
                                });
                                e.length > 0 && n(e[0]);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(x.$, {
                    variant: i ? "critical-primary" : "primary",
                    text: i ? "Cancel" : "Start Processing",
                    onClick: i
                        ? function () {
                              (_.Ay.getMediaEngine().cancelBatchAudioProcessing(),
                                  s((e) => ({ ...e, status: "cancelled" })));
                          }
                        : function () {
                              "" !== e &&
                                  "" !== a &&
                                  (s({ status: "processing", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
                                  _.Ay.getMediaEngine().processBatchAudioFiles(
                                      e,
                                      a,
                                      (e, t, a, n) => {
                                          s((l) => ({
                                              ...l,
                                              current: t,
                                              total: a,
                                              log: [...l.log, { filename: e, success: n }],
                                          }));
                                      },
                                      (e, t) => {
                                          s((a) => ({
                                              ...a,
                                              status: "processing" === a.status ? "complete" : "cancelled",
                                              processed: e,
                                              failed: t,
                                          }));
                                      },
                                  ));
                          },
                    disabled: !i && ("" === e || "" === a),
                }),
                "idle" !== l.status &&
                    (0, r.jsxs)(Q.B, {
                        gap: 4,
                        children: [
                            (0, r.jsxs)(p.E, {
                                variant: "text-sm/semibold",
                                children: [
                                    "processing" === l.status && `Processing: ${l.current}/${l.total}`,
                                    "complete" === l.status && `Complete: ${l.processed} processed, ${l.failed} failed`,
                                    "cancelled" === l.status &&
                                        `Cancelled: ${l.processed} processed, ${l.failed} failed`,
                                ],
                            }),
                            l.log
                                .slice(-20)
                                .reverse()
                                .map((e, t) =>
                                    (0, r.jsx)(
                                        "div",
                                        {
                                            className: hM.TZ,
                                            children: (0, r.jsxs)(p.E, {
                                                variant: "text-xs/normal",
                                                className: e.success ? hM.$D : hM.uL,
                                                children: [e.success ? "OK" : "FAIL", " - ", e.filename],
                                            }),
                                        },
                                        t,
                                    ),
                                ),
                            l.log.length > 20 &&
                                (0, r.jsxs)(p.E, {
                                    variant: "text-xs/normal",
                                    children: ["...and ", l.log.length - 20, " more"],
                                }),
                        ],
                    }),
            ],
        }),
    });
}
var hP = a(207898),
    hU = a.n(hP),
    hG = a(32880),
    hB = a(827343),
    hF = a(964486),
    h$ = a(602674),
    hV = a(625841),
    hW = a(74848),
    hz = a(913367);
function hH(e) {
    let { recording: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(p.E, { variant: "text-sm/normal", children: ["Duration: ", t.audioBuffer.duration] }),
            (0, r.jsxs)(p.E, {
                variant: "text-sm/normal",
                children: ["Num Channels: ", t.audioBuffer.numberOfChannels],
            }),
            (0, r.jsxs)(p.E, { variant: "text-sm/normal", children: ["Sample Rate: ", t.audioBuffer.sampleRate] }),
            (0, r.jsxs)(p.E, { variant: "text-sm/normal", children: ["Noise Suppression: ", t.suppression] }),
            (0, r.jsxs)(p.E, {
                variant: "text-sm/normal",
                children: ["Krisp Suppression Level: ", t.krispSuppressionLevel],
            }),
            (0, r.jsxs)(p.E, {
                variant: "text-sm/normal",
                children: ["Echo Cancellation: ", String(t.echoCancellation)],
            }),
        ],
    });
}
function hK(e) {
    let { recording: t, playing: a, onPlay: n, onStop: l } = e;
    return (0, r.jsx)(ua.N, {
        collapsibleContent: (0, r.jsx)(hH, { recording: t }),
        children: (e) => {
            let { onClick: s } = e;
            return (0, r.jsxs)(q.D, {
                onClick: s,
                children: [
                    (0, r.jsxs)(p.E, {
                        variant: "text-sm/bold",
                        tag: "span",
                        children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()],
                    }),
                    (0, r.jsx)(q.D, {
                        tag: "span",
                        onClick: (e) => {
                            (e.stopPropagation(), a ? l() : n(t));
                        },
                        children: a
                            ? (0, r.jsx)(sd.PauseIcon, { size: "xxs" })
                            : (0, r.jsx)(so.PlayIcon, { size: "xxs" }),
                    }),
                    (0, r.jsx)(q.D, {
                        tag: "span",
                        onClick: (e) => {
                            let a, n, l;
                            (e.stopPropagation(),
                                (a = new Blob([hU()(t.audioBuffer)], { type: "audio/wav" })),
                                (n = URL.createObjectURL(a)),
                                ((l = document.createElement("a")).href = n),
                                (l.download = `${t.inputName}-${new Date(t.createdAt).toLocaleString()}.wav`),
                                l.click(),
                                URL.revokeObjectURL(n));
                        },
                        children: (0, r.jsx)(hG.DownloadIcon, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function hY() {
    let { name: e } = (0, hW.x5)(hk.oh.AUDIO_INPUT),
        [t, a] = o.useState(!1),
        [n, l] = o.useState([]),
        s = (0, d.bG)([_.Ay], () => _.Ay.getKrispSuppressionLevel()),
        [i, c] = o.useState(null),
        u = o.useRef(null),
        h = o.useRef(null),
        [x, v] = o.useState(0.5),
        {
            krispModels: f,
            krispModelOverride: b,
            inputMode: y,
            echoCancellation: E,
            autoThreshold: C,
            vadUseKrisp: S,
            vadKrispActivationThreshold: N,
            noiseCancellation: A,
            noiseSuppression: k,
            noiseSuppressionSupported: D,
            noiseCancellationSupported: I,
            noiseCancellationEnableStats: T,
        } = (0, d.cf)([_.Ay], () => ({
            krispModels: _.Ay.getKrispModels(),
            krispModelOverride: _.Ay.getKrispModelOverride(),
            echoCancellation: _.Ay.getEchoCancellation(),
            autoThreshold: _.Ay.getModeOptions().autoThreshold,
            vadUseKrisp: _.Ay.getModeOptions().vadUseKrisp,
            inputMode: _.Ay.getMode(),
            vadKrispActivationThreshold: _.Ay.getKrispVadActivationThreshold(),
            noiseCancellation: _.Ay.getNoiseCancellation(),
            noiseSuppression: _.Ay.getNoiseSuppression(),
            noiseSuppressionSupported: _.Ay.isNoiseSuppressionSupported(),
            noiseCancellationSupported: _.Ay.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: _.Ay.getKrispEnableStats(),
        })),
        O = A ? "KRISP" : k ? "STANDARD" : "NONE",
        R = (0, h$.v)(),
        w = o.useCallback(() => {
            (u.current?.stop(), (u.current = null), c(null));
        }, []);
    function M() {
        _.Ay.getMediaEngine().stopRecordingRawSamples();
    }
    function L(e) {
        if ((t && M(), w(), null == R)) return;
        let a = R.createBufferSource();
        ((a.buffer = e.audioBuffer),
            (h.current = R.createGain()),
            (h.current.gain.value = x),
            a.connect(h.current),
            h.current.connect(R.destination),
            (a.loop = !0),
            a.start(),
            (u.current = a),
            c(e));
    }
    (o.useEffect(() => {
        w();
    }, [w]),
        (0, hF.l0)(() => {
            hB.A.setMode(_.Ay.getMode(), { vadKrispActivationThreshold: void 0 });
        }));
    let P = [];
    return (
        I && P.push({ id: "krisp", label: "Krisp", value: "KRISP" }),
        D && P.push({ id: "standard", label: "Standard", value: "STANDARD" }),
        P.push({ id: "disabled", label: "Disabled", value: "NONE" }),
        (0, r.jsx)(g.Ip, {
            className: tZ.nd,
            children: (0, r.jsxs)("div", {
                className: hz.l,
                children: [
                    (0, r.jsx)(p.E, { variant: "text-lg/bold", children: "Krisp Tester" }),
                    (0, r.jsx)(hV.U, {
                        label: "Input Device",
                        deviceType: hk.oh.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, r.jsx)(j.l, {
                        label: "Noise Cancellation",
                        value: O,
                        onSelectionChange: (e) => {
                            (hB.A.setNoiseCancellation("KRISP" === e), hB.A.setNoiseSuppression("STANDARD" === e));
                        },
                        options: P,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    "KRISP" === O &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(uz.A, {
                                    label: "Krisp Suppression Level",
                                    initialValue: s,
                                    onValueChange: hB.A.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                }),
                                (0, r.jsx)(j.l, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    value: b,
                                    options: f.map((e) => ({ label: e, value: e, id: e })),
                                    onSelectionChange: (e) => {
                                        hB.A.setKrispModelOverride(e ?? "");
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(m.d, {
                                    label: "Enable Stats",
                                    checked: T,
                                    onChange: (e) => hB.A.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    y === hk.TB.VOICE_ACTIVITY &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(m.d, {
                                    label: "Auto Threshold",
                                    checked: C,
                                    onChange: (e) => hB.A.setMode(hk.TB.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                C &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(m.d, {
                                                label: "Use Krisp VAD",
                                                checked: S,
                                                onChange: (e) => hB.A.setMode(hk.TB.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            S &&
                                                (0, r.jsx)(uz.A, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    initialValue: N,
                                                    onValueChange: (e) =>
                                                        hB.A.setMode(hk.TB.VOICE_ACTIVITY, {
                                                            vadKrispActivationThreshold: e,
                                                        }),
                                                    minValue: 0,
                                                    maxValue: 1,
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    (0, r.jsx)(m.d, {
                        label: "Echo Cancellation",
                        checked: E,
                        onChange: (e) => hB.A.setEchoCancellation(e),
                    }),
                    (0, r.jsxs)(Q.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "Recorder" }),
                            (0, r.jsx)(nG.$n, {
                                color: t ? nG.$n.Colors.RED : nG.$n.Colors.BRAND,
                                onClick: t
                                    ? M
                                    : function () {
                                          (w(),
                                              a(!0),
                                              hB.A.setLoopback("krisp_test", !0),
                                              _.Ay.getMediaEngine().startRecordingRawSamples((t, n, i) => {
                                                  (a(!1), hB.A.setLoopback("krisp_test", !1));
                                                  let r = new AudioBuffer({
                                                      length: t.length,
                                                      sampleRate: i,
                                                      numberOfChannels: n,
                                                  });
                                                  for (let e = 0; e < n; e++) {
                                                      let a = new Float32Array(t.length / n);
                                                      for (let l = 0; l < t.length / n; l++)
                                                          a[l] = t[l * n + e] / 32768;
                                                      r.copyToChannel(a, e);
                                                  }
                                                  l((t) => [
                                                      ...t,
                                                      {
                                                          inputName: e,
                                                          audioBuffer: r,
                                                          createdAt: Date.now(),
                                                          suppression: O,
                                                          echoCancellation: E,
                                                          krispSuppressionLevel: s,
                                                      },
                                                  ]);
                                              }));
                                      },
                                children: t ? "Stop Recording" : "Start Recording",
                            }),
                        ],
                    }),
                    (0, r.jsx)(uz.A, {
                        label: "Volume",
                        initialValue: x,
                        asValueChanges: function (e) {
                            null != h.current && ((h.current.gain.value = e), v(e));
                        },
                        minValue: 0,
                        maxValue: 1,
                    }),
                    (0, r.jsxs)(Q.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(p.E, { variant: "text-sm/semibold", children: "Recordings" }),
                            n.map((e, t) =>
                                (0, r.jsx)(hK, { recording: e, playing: e === i, onPlay: L, onStop: w }, t),
                            ),
                        ],
                    }),
                ],
            }),
        })
    );
}
var hq = a(803306),
    hJ = a(243217),
    hQ = a(189213),
    hX = a(543767),
    hZ = a(935208),
    h0 = a(19886);
let h1 = [
    { id: "1week", label: "1 Week", value: 0 },
    { id: "1month", label: "1 Month (Bronze)", value: 1 },
    { id: "3months", label: "3 Months (Silver)", value: 3 },
    { id: "6months", label: "6 Months (Gold)", value: 6 },
    { id: "1year", label: "1 Year (Platinum)", value: 12 },
    { id: "2years", label: "2 Years (Diamond)", value: 24 },
    { id: "3years", label: "3 Years (Emerald)", value: 36 },
    { id: "5years", label: "5 Years (Ruby)", value: 60 },
    { id: "6years", label: "6 Years (Opal)", value: 72 },
];
function h2() {
    let [e, t] = o.useState(!1),
        a = (0, d.bG)([ec.default], () => ec.default.getCurrentUser()),
        n = (0, h0.Lh)(),
        l = (0, d.bG)([oh.A], () => oh.A.getPremiumTypeSubscription()),
        s = null != n ? (tP.VD[n]?.tenureReqNumMonths ?? 0) : 0,
        i = o.useCallback(
            async (e) => {
                let n = new Date();
                (e > 0 ? n.setMonth(n.getMonth() - e) : n.setDate(n.getDate() - 7), n.setDate(n.getDate() - 2));
                let s = {
                    subscription_status: ex.Dmq.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: hZ.default.fromTimestamp(n.getTime()),
                };
                (t(!0),
                    await l7.Bo.patch({ url: `/debug/subscriptions/${l.id}`, body: s, rejectWithError: (0, l7.fT)() }),
                    await (0, hq.eO)(a.id),
                    await (0, d3.hP)(),
                    t(!1));
            },
            [l, a],
        );
    if (null != a && null != l)
        return (0, r.jsx)(j.l, {
            label: "Tenure",
            hideLabel: !0,
            selectionMode: "single",
            disabled: e,
            value: s,
            options: h1,
            onSelectionChange: i,
        });
}
var h3 =
        (((l = {})[(l.DEFAULT = 0)] = "DEFAULT"),
        (l[(l.SUCCESSFUL = 1)] = "SUCCESSFUL"),
        (l[(l.FAILURE = 2)] = "FAILURE"),
        (l[(l.NONE = 3)] = "NONE"),
        l),
    h6 =
        (((s = {})[(s.REWIND = 1)] = "REWIND"),
        (s[(s.RENEW = 2)] = "RENEW"),
        (s[(s.CANCEL = 3)] = "CANCEL"),
        (s[(s.UNCANCEL = 4)] = "UNCANCEL"),
        (s[(s.TIME_TRAVEL = 5)] = "TIME_TRAVEL"),
        (s[(s.RESET = 6)] = "RESET"),
        (s[(s.PAY_INVOICE = 7)] = "PAY_INVOICE"),
        (s[(s.END = 8)] = "END"),
        (s[(s.RESUME = 9)] = "RESUME"),
        s);
async function h5(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetDate: n, paymentType: l, sendReminderEmail: s } = a;
    return (
        await l7.Bo.post({
            url: `/debug/subscriptions/${e}/transition`,
            body: {
                target_datetime: n?.toISOString(),
                payment_type: l ?? 0,
                transition: t,
                send_reminder_email: s ?? !1,
            },
            rejectWithError: !0,
        })
    ).body;
}
var h8 = a(601107);
let h4 = {
        [ex.Dmq.UNPAID]: "Unpaid",
        [ex.Dmq.ACTIVE]: "Active",
        [ex.Dmq.PAST_DUE]: "Past Due",
        [ex.Dmq.CANCELED]: "Canceled",
        [ex.Dmq.ENDED]: "Ended",
        [ex.Dmq.ACCOUNT_HOLD]: "Account Hold",
        [ex.Dmq.BILLING_RETRY]: "Billing Retry",
        [ex.Dmq.PAUSED]: "Paused",
        [ex.Dmq.PAUSE_PENDING]: "Pause Pending",
    },
    h9 = {
        [h8.qf.UNKNOWN]: "Unknown",
        [h8.qf.ADMIN]: "Admin",
        [h8.qf.USER]: "User",
        [h8.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [h8.qf.DEFERRED_START]: "Deferred Start",
        [h8.qf.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    h7 = [
        { id: "unpaid", label: "Unpaid", value: ex.Dmq.UNPAID },
        { id: "active", label: "Active", value: ex.Dmq.ACTIVE },
        { id: "pastDue", label: "Past Due", value: ex.Dmq.PAST_DUE },
        { id: "canceled", label: "Canceled", value: ex.Dmq.CANCELED },
        { id: "ended", label: "Ended", value: ex.Dmq.ENDED },
        { id: "accountHold", label: "Account Hold", value: ex.Dmq.ACCOUNT_HOLD },
        { id: "billingRetry", label: "Billing Retry", value: ex.Dmq.BILLING_RETRY },
        { id: "paused", label: "Paused", value: ex.Dmq.PAUSED },
        { id: "pausePending", label: "Pause Pending", value: ex.Dmq.PAUSE_PENDING },
    ];
function xe(e) {
    let { subscription: t, onClose: a, onUpdated: n, transitionState: l } = e,
        [s, i] = o.useState(nU()()),
        [d, c] = o.useState(nU()().format("HH:mm")),
        [m, h] = o.useState(!1),
        [x, g] = o.useState(void 0);
    async function v() {
        if (null == s) return void g("Please select a target date");
        let [e, l] = d.split(":").map(Number),
            i = s.clone().hours(e).minutes(l).seconds(0).milliseconds(0);
        (h(!0), g(void 0));
        try {
            (await h5(t.id, h6.TIME_TRAVEL, { targetDate: i, paymentType: h3.DEFAULT, sendReminderEmail: !1 }),
                n(),
                a());
        } catch (e) {
            g(e.body?.message || e.message || "Failed to time travel");
        } finally {
            h(!1);
        }
    }
    return (0, r.jsx)(hQ.a, {
        transitionState: l,
        onClose: function () {
            return (a(), Promise.resolve());
        },
        title: "Time Travel Subscription",
        size: "sm",
        actions: [
            { text: "Cancel", variant: "secondary", onClick: a },
            { text: "Time Travel", variant: "primary", onClick: v, disabled: m || null == s },
        ],
        children: (0, r.jsxs)(Q.B, {
            gap: 16,
            children: [
                (0, r.jsx)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children:
                        "Select the target date and time to travel the subscription to. This will adjust the subscription period and trigger any necessary invoice operations.",
                }),
                (0, r.jsx)(iL.J, { label: "Target Date", value: s, onSelect: i }),
                (0, r.jsx)(u.n, {
                    label: "Target Time (HH:mm)",
                    children: (0, r.jsx)("input", {
                        type: "time",
                        value: d,
                        onChange: function (e) {
                            c(e.target.value);
                        },
                        className: oU.Qn,
                    }),
                }),
                (0, r.jsxs)(Q.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: "Current Period",
                        }),
                        (0, r.jsxs)(Q.B, {
                            gap: 4,
                            children: [
                                (0, r.jsxs)(p.E, {
                                    variant: "text-xs/normal",
                                    className: oU.JX,
                                    children: ["Start: ", nU()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, r.jsxs)(p.E, {
                                    variant: "text-xs/normal",
                                    className: oU.JX,
                                    children: ["End: ", nU()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
                                }),
                            ],
                        }),
                    ],
                }),
                null != x && (0, r.jsx)(J.w, { type: "critical", children: x }),
            ],
        }),
    });
}
function xt(e) {
    let { subscription: t } = e,
        [a] = (0, hX.C8)({
            subscriptionId: null != t ? t.id : "",
            preventFetch: null == t || t.status !== ex.Dmq.PAST_DUE,
        }),
        { analyticsLocations: n } = (0, np.Ay)(tI.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return t.status !== ex.Dmq.PAST_DUE
        ? null
        : (0, r.jsx)(x.$, {
              variant: "critical-primary",
              text: "Open Past Due Checkout",
              size: "sm",
              disabled: null == a,
              onClick: () => {
                  null != a &&
                      (0, ct.A)({ initialPlanId: t.planIdFromItems, openInvoiceId: a.id, analyticsLocations: n });
              },
          });
}
let xa = [
    { id: "us", label: "United States (USD)", value: "US" },
    { id: "gb", label: "United Kingdom (GBP)", value: "GB" },
    { id: "de", label: "Germany (EUR)", value: "DE" },
    { id: "mx", label: "Mexico (MXN)", value: "MX" },
    { id: "jp", label: "Japan (JPY)", value: "JP" },
];
function xn(e) {
    let { subscription: t } = e,
        [a, n] = o.useState(!1),
        [l, s] = o.useState(null),
        [i, d] = o.useState("DE");
    if (t.status !== ex.Dmq.PAST_DUE) return null;
    function c(e) {
        return e?.body?.message ?? e?.message ?? "Something went wrong";
    }
    async function u() {
        n(!0);
        try {
            (await l7.Bo.post({ url: `/debug/subscriptions/${t.id}/send-past-due-email`, rejectWithError: !0 }),
                s({ type: "success", message: "Dunning email sent, check your inbox and click the link there." }));
        } catch (e) {
            s({ type: "critical", message: c(e) });
        }
        n(!1);
    }
    async function m() {
        n(!0);
        try {
            let { link: e } = (
                await l7.Bo.post({ url: `/debug/subscriptions/${t.id}/past-due-magic-link`, rejectWithError: !0 })
            ).body;
            (await navigator.clipboard.writeText(e), s({ type: "success", message: "Link copied to clipboard." }));
        } catch (e) {
            s({ type: "critical", message: c(e) });
        }
        n(!1);
    }
    async function h() {
        n(!0);
        try {
            (await l7.Bo.post({ url: "/debug/store-country", body: { country: i }, rejectWithError: !0 }),
                s({ type: "success", message: `Store country set to ${i}.` }));
        } catch (e) {
            s({ type: "critical", message: c(e) });
        }
        n(!1);
    }
    return (0, r.jsxs)(Q.B, {
        gap: 8,
        children: [
            (0, r.jsx)(p.E, { variant: "text-sm/bold", children: "Magic Link Testing" }),
            (0, r.jsx)(x.$, {
                variant: "primary",
                size: "sm",
                text: "Send Dunning Email Now",
                disabled: a,
                onClick: u,
            }),
            (0, r.jsx)(x.$, { variant: "secondary", size: "sm", text: "Copy Link Instead", disabled: a, onClick: m }),
            (0, r.jsx)(j.l, {
                label: "Store Country",
                hideLabel: !0,
                value: i,
                options: xa,
                onSelectionChange: d,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(x.$, {
                variant: "secondary",
                size: "sm",
                text: "Set Store Country (Void + Reissue Invoice)",
                disabled: a,
                onClick: h,
            }),
            null != l && (0, r.jsx)(J.w, { type: l.type, children: l.message }),
        ],
    });
}
function xl(e) {
    var t;
    let a,
        { subscription: n, onUpdated: l } = e,
        [s, i] = o.useState(!1),
        [d, c] = o.useState(!1),
        [m, h] = o.useState(!1),
        [g, v] = o.useState(!1),
        [f, b] = o.useState(null);
    function y(e) {
        let t = new Date(e);
        return hZ.default.fromTimestamp(t.getTime());
    }
    async function E(e) {
        let { status: t = n.status, premiumStreakStart: a, endedAt: s } = e,
            i = {
                subscription_status: t,
                ...(null != a ? { premium_streak_started_at: y(a) } : null),
                ...(null != s ? { ended_at: y(s) } : null),
            };
        (await l7.Bo.patch({ url: `/debug/subscriptions/${n.id}`, body: i, rejectWithError: !1 }), l());
    }
    async function C() {
        try {
            await h5(n.id, h6.RENEW, { targetDate: nU()(new Date()), paymentType: h3.DEFAULT, sendReminderEmail: !1 });
        } catch (e) {
            b(e.body?.message || e.message || "Failed to renew subscription");
        }
        l();
    }
    async function _() {
        try {
            await h5(n.id, h6.RENEW, { targetDate: nU()(new Date()), paymentType: h3.FAILURE, sendReminderEmail: !1 });
        } catch (e) {
            b(e.body?.message || e.message || "Failed to simulate failed renewal");
        }
        l();
    }
    let S = tP.hd[n.planIdFromItems]?.premiumType === tP.PremiumTypes.TIER_0,
        N = n.metadata?.ended_at,
        A = null != N ? new Date(N).toISOString().substring(0, 10) : "",
        k = [
            { id: "id", label: `ID: ${n.id}`, isDisabled: !1 },
            {
                id: "status",
                label: `Status: ${(null == t && (t = n.status), t in h4) ? h4[t] : `Unknown status ${t}`}`,
                isDisabled: !1,
            },
        ],
        D = n.hasActiveTrial,
        I = n.metadata?.active_discount_id != null;
    return (
        D && k.push({ id: "trial", label: "Has Trial", isDisabled: !1 }),
        I && k.push({ id: "active-discount", label: "Has Active Discount", isDisabled: !1 }),
        n.status !== ex.Dmq.ACTIVE &&
            k.push({
                id: "dates",
                label: `Dates: ${(0, nq.i$)(n.createdAt, "LL")} - ${(0, nq.i$)(n.currentPeriodEnd, "LL")}`,
                isDisabled: !1,
            }),
        n.status === ex.Dmq.PAUSED &&
            k.push({
                id: "pause-reason",
                label: `Pause Reason: ${n.pauseReason in h9 ? h9[n.pauseReason] : `Unknown pause reason ${n.pauseReason}`}`,
                isDisabled: !1,
            }),
        (0, r.jsx)("div", {
            className: Y()(sG.Nr, S ? sG.Qf : sG.C1),
            children: (0, r.jsxs)(u.n, {
                label: `Type: ${null == (a = n.planIdFromItems) ? "No plan id" : a in tP.hd ? tP.hd[a].name : `Unknown plan id ${a}`}`,
                className: oU.lI,
                children: [
                    (0, r.jsx)(oL.C, { items: k, label: "Subscription details" }),
                    D &&
                        (0, r.jsxs)("div", {
                            className: oU.VK,
                            children: [
                                (0, r.jsxs)(q.D, {
                                    onClick: function () {
                                        h(!m);
                                    },
                                    className: oU.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(p.E, {
                                                variant: "text-md/bold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, r.jsx)(sT.A, { direction: m ? sT.A.Directions.UP : sT.A.Directions.DOWN }),
                                    ],
                                }),
                                m &&
                                    (0, r.jsxs)("ul", {
                                        className: oU.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(p.E, { variant: "text-md/bold", children: "trial_id" }),
                                                    (0, r.jsx)(p.E, { variant: "text-sm/normal", children: n.trialId }),
                                                ],
                                            }),
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(p.E, {
                                                        variant: "text-md/bold",
                                                        children: "trial_ends_at",
                                                    }),
                                                    (0, r.jsx)(p.E, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            null != n.trialEndsAt
                                                                ? (0, nq.i$)(n.trialEndsAt, "LL")
                                                                : "N/A",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    I &&
                        (0, r.jsxs)("div", {
                            className: oU.VK,
                            children: [
                                (0, r.jsxs)(q.D, {
                                    onClick: function () {
                                        v(!g);
                                    },
                                    className: oU.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(p.E, {
                                                variant: "text-md/bold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, r.jsx)(sT.A, { direction: g ? sT.A.Directions.UP : sT.A.Directions.DOWN }),
                                    ],
                                }),
                                g &&
                                    (0, r.jsxs)("ul", {
                                        className: oU.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(p.E, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_id",
                                                    }),
                                                    (0, r.jsx)(p.E, {
                                                        variant: "text-sm/normal",
                                                        children: n.metadata?.active_discount_id,
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(p.E, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_expires_at",
                                                    }),
                                                    (0, r.jsx)(p.E, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            n.metadata?.active_discount_expires_at != null
                                                                ? (0, nq.i$)(
                                                                      new Date(n.metadata?.active_discount_expires_at),
                                                                      "LL",
                                                                  )
                                                                : "N/A",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    null != n.metadata &&
                        (0, r.jsxs)("div", {
                            className: oU.VK,
                            children: [
                                (0, r.jsxs)(q.D, {
                                    onClick: function () {
                                        i(!s);
                                    },
                                    className: oU.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(p.E, {
                                                variant: "text-md/bold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, r.jsx)(sT.A, { direction: s ? sT.A.Directions.UP : sT.A.Directions.DOWN }),
                                    ],
                                }),
                                s &&
                                    (0, r.jsx)("ul", {
                                        className: oU.j3,
                                        children: Object.entries(n.metadata).map((e) => {
                                            let [t, a] = e;
                                            return (0, r.jsxs)(
                                                "li",
                                                {
                                                    children: [
                                                        (0, r.jsx)(p.E, { variant: "text-md/bold", children: t }),
                                                        (0, r.jsx)(p.E, { variant: "text-sm/normal", children: a }),
                                                    ],
                                                },
                                                t,
                                            );
                                        }),
                                    }),
                            ],
                        }),
                    (0, r.jsxs)("div", {
                        className: oU.VK,
                        children: [
                            (0, r.jsxs)(q.D, {
                                onClick: function () {
                                    c(!d);
                                },
                                className: oU.Eh,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(p.E, {
                                            variant: "text-md/bold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, r.jsx)(sT.A, { direction: d ? sT.A.Directions.UP : sT.A.Directions.DOWN }),
                                ],
                            }),
                            d &&
                                (0, r.jsxs)(Q.B, {
                                    gap: 24,
                                    children: [
                                        (0, r.jsx)(j.l, {
                                            label: "Status",
                                            value: n.status,
                                            options: h7,
                                            onSelectionChange: (e) => {
                                                E({ status: e });
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsxs)("div", {
                                            children: [
                                                (0, r.jsxs)(Q.B, {
                                                    gap: 12,
                                                    children: [
                                                        (0, r.jsx)(x.$, {
                                                            variant: "primary",
                                                            size: "sm",
                                                            text: "Renew Subscription",
                                                            onClick: (e) => C(),
                                                        }),
                                                        (0, r.jsx)(x.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Simulate Failed Renewal (Past Due)",
                                                            onClick: (e) => _(),
                                                        }),
                                                        (0, r.jsx)(xt, { subscription: n }),
                                                        (0, r.jsx)(xn, { subscription: n }),
                                                        (0, r.jsx)(x.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Time Travel",
                                                            onClick: () => {
                                                                (0, eJ.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, r.jsx)(xe, {
                                                                            subscription: n,
                                                                            onUpdated: l,
                                                                            ...e,
                                                                        }),
                                                                    ),
                                                                );
                                                            },
                                                        }),
                                                    ],
                                                }),
                                                null !== f &&
                                                    (0, r.jsx)("div", {
                                                        className: oU.z3,
                                                        children: (0, r.jsx)(J.w, { type: "critical", children: f }),
                                                    }),
                                            ],
                                        }),
                                        (0, r.jsxs)(Q.B, {
                                            gap: 16,
                                            children: [
                                                (0, r.jsx)(iL.J, {
                                                    label: "Premium Streak Start Date",
                                                    value: nU()(n.premiumSince?.toISOString().substring(0, 10)),
                                                    onSelect: (e) => E({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, r.jsx)(h2, {}),
                                            ],
                                        }),
                                        (0, r.jsx)(iL.J, {
                                            label: "Metadata Ended At Date",
                                            value: "" !== A ? nU()(A) : void 0,
                                            onSelect: (e) => E({ endedAt: e.toISOString() }),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                ],
            }),
        })
    );
}
async function xs() {
    return (
        await l7.Bo.get({
            url: ex.Rsh.BILLING_SUBSCRIPTIONS,
            query: { include_inactive: !0, limit: 5 },
            rejectWithError: (0, l7.fT)(),
        })
    ).body.map((e) => hJ.A.createFromServer(e));
}
let xi = [
    { id: "nitro-monthly", label: "Nitro Monthly", value: tP.gD.PREMIUM_MONTH_TIER_2 },
    { id: "nitro-yearly", label: "Nitro Yearly", value: tP.gD.PREMIUM_YEAR_TIER_2 },
    { id: "nitro-classic-monthly", label: "Nitro Classic Monthly", value: tP.gD.PREMIUM_MONTH_TIER_1 },
    { id: "nitro-classic-yearly", label: "Nitro Classic Yearly", value: tP.gD.PREMIUM_YEAR_TIER_1 },
    { id: "basic-monthly", label: "Basic Monthly", value: tP.gD.PREMIUM_MONTH_TIER_0 },
    { id: "basic-yearly", label: "Basic Yearly", value: tP.gD.PREMIUM_YEAR_TIER_0 },
    { id: "reverse-trial-1week", label: "Reverse Trial 1-week", value: tP.gd },
    { id: "reverse-trial-2week", label: "Reverse Trial 2-week", value: tP.Uk },
    { id: "nitro-squad-monthly", label: "Nitro Squad Monthly", value: tP.gD.PREMIUM_GROUP_MONTH },
];
function xr() {
    let e = (0, d.bG)([oh.A], () => oh.A.getPremiumTypeSubscription()),
        t = (0, d.bG)([ec.default], () => ec.default.getCurrentUser()),
        [a, n] = o.useState("511651880837840896"),
        [l, s] = o.useState([]),
        [i, c] = o.useState(!1),
        u = o.useCallback(async () => {
            try {
                (c(!0), await (0, d3.hP)(), await (0, hq.eO)(t.id), s(await xs()));
            } finally {
                c(!1);
            }
        }, [t]);
    o.useEffect(() => {
        u();
    }, [u]);
    let m = o.useMemo(() => l.filter((e) => e.status !== ex.Dmq.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [l]);
    async function h() {
        (await l7.Bo.post({ url: "/debug/subscription", body: { plan_id: a }, rejectWithError: (0, l7.fT)() }),
            await u());
    }
    async function p() {
        (await l7.Bo.del({ url: "/debug/subscription", rejectWithError: (0, l7.fT)() }), await u());
    }
    return (0, r.jsx)(g.Ip, {
        className: tZ.nd,
        children: (0, r.jsxs)("div", {
            className: sG.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: sG.dL,
                    children: [
                        (0, r.jsx)(Z.D, {
                            variant: "heading-lg/semibold",
                            className: tZ.wx,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, r.jsx)(eK.K, {
                            "aria-label": "Refresh",
                            icon: sI.RefreshIcon,
                            size: "sm",
                            variant: "icon-only",
                            disabled: i,
                            onClick: u,
                        }),
                    ],
                }),
                (0, r.jsx)("section", {
                    className: Y()([sG.uW, sG.Uo]),
                    children:
                        null == e &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(j.l, {
                                    label: "Premium Plan",
                                    hideLabel: !0,
                                    value: a,
                                    options: xi,
                                    onSelectionChange: n,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Create Subscription",
                                    onClick: h,
                                }),
                            ],
                        }),
                }),
                null != e && (0, r.jsx)(xl, { subscription: e, onUpdated: u }),
                (0, r.jsx)(Z.D, { variant: "heading-lg/semibold", className: tZ.wx, children: "Bulk Actions" }),
                (0, r.jsx)("section", {
                    className: Y()([sG.uW, sG.Uo]),
                    children: (0, r.jsx)(x.$, {
                        variant: "primary",
                        size: "sm",
                        text: "End All Subscriptions",
                        onClick: p,
                    }),
                }),
                m.length > 0 &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(Z.D, {
                                variant: "heading-lg/semibold",
                                className: tZ.wx,
                                children: "Previous Subscriptions",
                            }),
                            m.map((e) => (0, r.jsx)(xl, { subscription: e, onUpdated: u }, e.id)),
                        ],
                    }),
            ],
        }),
    });
}
a(801541);
var xo = a(284009),
    xd = a.n(xo),
    xc = a(889137),
    xu = a(323889),
    xm = a(412703),
    xh = a(440703),
    xx = a(267548),
    xp = a(668824),
    xg = a(695366),
    xv = a(993077),
    xj = a(738822),
    xf = a(801365),
    xb = a(792620),
    xy = a(557637),
    xE = a(242939),
    xC = a(717695),
    x_ = a(322338),
    xS = a(127219),
    xN = a(262514),
    xA = a(976014),
    xk = a(317097),
    xD = a(452027),
    xI = a(922016),
    xT = a(714385),
    xO = a(581244);
let xR = function (e) {
    let { colorKey: t, value: a, onChange: n, title: l } = e,
        s = o.useRef(null);
    return (0, r.jsx)(xD.D, {
        label: l,
        children: (0, r.jsx)(xI.Y, {
            targetElementRef: s,
            renderPopout: (e) => (0, r.jsx)(ul.VN, { ...e, value: a, onChange: (e) => n(t, (0, xk.Hl)(e)) }),
            children: (e) =>
                (0, r.jsx)(q.D, {
                    ...e,
                    innerRef: s,
                    tag: "span",
                    "aria-label": "Select a color",
                    className: xO.O6,
                    style: { backgroundColor: a },
                    children: (0, r.jsx)(xT.d, { size: "xs", color: "currentColor", className: xO.WY }),
                }),
        }),
    });
};
var xw = a(346055);
let xM = function (e) {
    let { allowClicks: t = !1, children: a, withBorder: n = !1 } = e;
    return (0, r.jsx)(xw.M, {
        children: (0, r.jsx)(xv.Z, {
            className: Y()(xO.Rx, { [xO.aK]: n }),
            outline: n,
            children: (0, r.jsx)("div", {
                className: xO.AZ,
                onClickCapture: t
                    ? void 0
                    : function (e) {
                          e.stopPropagation();
                      },
                children: a,
            }),
        }),
    });
};
var xL = a(643374);
let xP = function (e) {
        let { assetKey: t, filters: a, initialValue: n, onFileChange: l, title: s } = e,
            [i, d] = o.useState(null),
            c = o.useRef(null);
        return (
            o.useEffect(
                () => () => {
                    null != c.current && URL.revokeObjectURL(c.current);
                },
                [],
            ),
            (0, r.jsx)(xD.D, {
                label: s,
                description: `Supported asset formats: ${a.join(", ")}`,
                children: (0, r.jsx)(xL.A, {
                    filename: i?.name ?? n ?? "",
                    filters: [{ name: s, extensions: a }],
                    buttonText: "Browse",
                    placeholder: "Select an asset",
                    onFileSelect: function (e) {
                        if ((d(e ?? null), null == e)) return;
                        let a = URL.createObjectURL(e);
                        c.current = a;
                        let n = new URL(a);
                        (n.searchParams.append("mimetype", e.type),
                            n.searchParams.append("name", e.name),
                            l(t, n.toString()));
                    },
                }),
            })
        );
    },
    xU = function (e) {
        let { assetKey: t, initialValue: a, onMessageChange: n, title: l } = e,
            [s, i] = o.useState("");
        return (
            o.useEffect(() => {
                i(a ?? "");
            }, [a]),
            (0, r.jsx)(f.k, {
                label: l,
                value: s,
                onChange: function (e) {
                    (i(e), n(t, e));
                },
            })
        );
    };
var xG = a(866157);
let xB = function (e) {
    let { onSelect: t, quest: a } = e,
        { quests: n } = (0, xG.mL)({ fetchPolicy: "cache-and-network", callerSource: "prefill_selector" }),
        l = [
            { id: "none", label: "NONE", value: null },
            ...n.map((e) => ({ id: e.id, label: e.config.messages.questName, value: e })),
        ];
    return (0, r.jsx)(j.l, {
        label: "Prefill with Quest",
        options: l,
        value: a,
        onSelectionChange: t,
        selectionMode: "single",
        fullWidth: !0,
    });
};
var xF = a(843282),
    x$ = a(714269);
let xV = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
    ],
    xW = function (e) {
        let { onSelect: t, taskDuration: a = 10, taskConfigV2: n } = e;
        return (0, r.jsxs)(Q.B, {
            gap: 20,
            children: [
                (0, r.jsx)(xF.Pw, {
                    label: "Task Type(s)",
                    className: x$.Z,
                    placeholder: "Select Task Preset",
                    options: xV,
                    renderOptionValue: (e) => e.map((e) => (0, r.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, r.jsx)("div", { children: e.label }),
                    isSelected: (e) => {
                        var t;
                        let a, l, s, i, r;
                        return (
                            e ===
                            ((t = n.tasks),
                            (a = xm.n.PLAY_ON_PLAYSTATION in t || xm.n.PLAY_ON_XBOX in t),
                            (l = xm.n.PLAY_ON_DESKTOP in t),
                            (s = xm.n.STREAM_ON_DESKTOP in t),
                            (i = xm.n.WATCH_VIDEO in t),
                            (r = xm.n.PLAY_ACTIVITY in t),
                            a && l ? 4 : a ? 3 : l ? 0 : s ? 1 : i ? 2 : r ? 5 : void 0)
                        );
                    },
                    select: (e) => {
                        t({
                            ...n,
                            tasks: (function (e, t) {
                                let a = {};
                                switch (e) {
                                    case 1:
                                        a[xm.n.STREAM_ON_DESKTOP] = { type: xm.n.STREAM_ON_DESKTOP, target: t };
                                        break;
                                    case 0:
                                        a[xm.n.PLAY_ON_DESKTOP] = { type: xm.n.PLAY_ON_DESKTOP, target: t };
                                        break;
                                    case 3:
                                        ((a[xm.n.PLAY_ON_PLAYSTATION] = {
                                            type: xm.n.PLAY_ON_PLAYSTATION,
                                            target: t,
                                            externalIds: [],
                                        }),
                                            (a[xm.n.PLAY_ON_XBOX] = {
                                                type: xm.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            }));
                                        break;
                                    case 4:
                                        ((a[xm.n.PLAY_ON_DESKTOP] = { type: xm.n.PLAY_ON_DESKTOP, target: t }),
                                            (a[xm.n.PLAY_ON_PLAYSTATION] = {
                                                type: xm.n.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                            (a[xm.n.PLAY_ON_XBOX] = {
                                                type: xm.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            }));
                                        break;
                                    case 2:
                                        a[xm.n.WATCH_VIDEO] = {
                                            type: xm.n.WATCH_VIDEO,
                                            target: t,
                                            assets: { video: { url: "" } },
                                            messages: { videoTitle: "" },
                                        };
                                        break;
                                    case 5:
                                        a[xm.n.PLAY_ACTIVITY] = { type: xm.n.PLAY_ACTIVITY, target: t };
                                }
                                return a;
                            })(e, a),
                        });
                    },
                    serialize: String,
                    "data-migration-pending": !0,
                }),
                (0, r.jsx)(f.k, {
                    label: "Task Duration",
                    value: String(a / da.A.Seconds.MINUTE),
                    onChange: function (e) {
                        let a = Number(e);
                        if (isNaN(a)) return;
                        a *= da.A.Seconds.MINUTE;
                        let l = Object.fromEntries(
                            Object.entries(n.tasks).map((e) => {
                                let [t, n] = e;
                                return [t, { ...n, target: a }];
                            }),
                        );
                        t({ ...n, tasks: l });
                    },
                }),
            ],
        });
    };
var xz = a(818348);
let xH = function () {
    let e = (0, ej.Ay)();
    return (0, r.jsx)(xD.D, {
        label: "Theme",
        children: (0, r.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
                (0, r.jsx)(ef.zy, {
                    theme: xz.NJ.LIGHT,
                    isSelected: e === xz.NJ.LIGHT,
                    onSelect: () => (0, c0.u_)({ theme: xz.NJ.LIGHT }),
                }),
                (0, r.jsx)(ef.zy, {
                    theme: xz.NJ.DARK,
                    isSelected: e === xz.NJ.DARK,
                    onSelect: () => (0, c0.u_)({ theme: xz.NJ.DARK }),
                }),
            ],
        }),
    });
};
var xK =
    (((i = {})[(i.UNENROLLED = 0)] = "UNENROLLED"),
    (i[(i.ENROLLED = 1)] = "ENROLLED"),
    (i[(i.COMPLETED_25 = 2)] = "COMPLETED_25"),
    (i[(i.COMPLETED_50 = 3)] = "COMPLETED_50"),
    (i[(i.COMPLETED_75 = 4)] = "COMPLETED_75"),
    (i[(i.COMPLETED_100 = 5)] = "COMPLETED_100"),
    (i[(i.CLAIMED = 6)] = "CLAIMED"),
    i);
let xY = function (e) {
    let { onChange: t, value: a } = e;
    return (0, r.jsx)(j.l, {
        label: "User State",
        options: [
            { id: "unenrolled", label: "Unenrolled", value: 0 },
            { id: "enrolled", label: "Enrolled", value: 1 },
            { id: "25%", label: "25% Complete", value: 2 },
            { id: "50%", label: "50% Complete", value: 3 },
            { id: "75%", label: "75% Complete", value: 4 },
            { id: "100%", label: "100% Complete", value: 5 },
            { id: "claimed", label: "Claimed", value: 6 },
        ],
        value: a,
        onSelectionChange: t,
        selectionMode: "single",
        fullWidth: !0,
    });
};
var xq = a(617986);
let xJ = ["png", "gif", "webp"],
    xQ = [...xJ, "jpg", "jpeg"],
    xX = Array.from(new Set([...xQ, "gif", "mp4", "webm"]));
function xZ() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { streamProgressSeconds: t = 0, completedAt: a = null, enrolledAt: n = null, claimedAt: l = null } = e;
    return {
        userId: "123",
        questId: "1193992107035983872",
        enrolledAt: n,
        completedAt: a,
        claimedAt: l,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {},
    };
}
let x0 = "1193992107035983872",
    x1 = {
        id: x0,
        preview: !0,
        config: {
            id: x0,
            configVersion: 2,
            startsAt: "2024-01-01T00:00:00+00:00",
            expiresAt: "2030-01-01T00:00:00+00:00",
            messages: { questName: "Sky Runners", gameTitle: "Sky Runners", gamePublisher: "Discord" },
            colors: { primary: "#B377F3", secondary: "#5865F2" },
            rewardsConfig: {
                assignmentMethod: 1,
                rewards: [
                    {
                        skuId: "",
                        asset: "reward.png",
                        assetVideo: null,
                        type: xh.l.REWARD_CODE,
                        messages: {
                            name: "Orange Buddy Jetpack",
                            nameWithArticle: "an Orange Buddy Jetpack",
                            redemptionInstructionsByPlatform: {
                                0: "This code can be used on any platform!",
                                1: "Redeem your code on your Xbox.",
                                2: "Redeem your code on your Playstation.",
                                3: "Redeem your code on your Switch.",
                                4: "Redeem your code on your PC.",
                            },
                        },
                    },
                ],
                rewardsExpireAt: "2030-01-01T00:00:00+00:00",
                platforms: [0, 4, 2, 3, 1],
            },
            assets: {
                hero: "hero.png",
                heroVideo: null,
                questBarHero: "quests_bar_hero.webm",
                questBarHeroVideo: null,
                gameTile: "game_tile.png",
                logotype: "game_logotype.png",
                questBarHeroBlurhash: null,
            },
            taskConfigV2: {
                joinOperator: xp.K.AND,
                tasks: {
                    [xm.n.PLAY_ON_DESKTOP]: { type: xm.n.PLAY_ON_DESKTOP, target: 300, applications: [{ id: "123" }] },
                },
            },
            features: [],
            sharePolicy: xx.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: null,
        targetedContent: [],
    };
function x2() {
    var e;
    let [t, n] = o.useState(x1),
        l = o.useCallback((e) => {
            n({ ...e, preview: !0 });
        }, []),
        [s, i] = o.useState(xK.UNENROLLED),
        [d, c] = o.useState(!1),
        [u, h] = o.useState(!1),
        [v, j] = o.useState(null),
        f =
            ((e = t.config),
            (0, xc.YW)(e)
                .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
                .exhaustive());
    function b(e, a) {
        if (
            "hero" === e ||
            "questBarHero" === e ||
            "gameTile" === e ||
            "logotype" === e ||
            "heroVideo" === e ||
            "questBarHeroVideo" === e
        ) {
            var n, s;
            l({
                ...t,
                config:
                    ((n = t.config),
                    (s = { [e]: a }),
                    (0, xc.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, assets: { ...e.assets, ...s } }))
                        .exhaustive()),
            });
        }
    }
    function y(e, a) {
        let n = t.config.taskConfigV2.tasks,
            s = n[xm.n.WATCH_VIDEO];
        if (null == s) return;
        let i = { ...s.assets };
        switch (e) {
            case "videoPlayerVideo":
                i.video = { url: a };
                break;
            case "videoPlayerVideoLowRes":
                i.videoLowRes = { url: a };
                break;
            case "videoPlayerThumbnail":
                i.video = { ...i.video, thumbnail: a };
                break;
            default:
                return;
        }
        l({
            ...t,
            config: {
                ...t.config,
                taskConfigV2: { ...t.config.taskConfigV2, tasks: { ...n, [xm.n.WATCH_VIDEO]: { ...s, assets: i } } },
            },
        });
    }
    function E(e, a) {
        if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
            var n, s;
            l({
                ...t,
                config:
                    ((n = t.config),
                    (s = { [e]: a }),
                    (0, xc.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, messages: { ...e.messages, ...s } }))
                        .exhaustive()),
            });
        }
    }
    function C(e, a, n) {
        if ("name" === e || "nameWithArticle" === e) {
            var s, i;
            l({
                ...t,
                config:
                    ((s = t.config),
                    (i = { [e]: a }),
                    (0, xc.YW)(s)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            rewardsConfig: {
                                ...e.rewardsConfig,
                                rewards: e.rewardsConfig.rewards.map((e, t) =>
                                    t === n ? { ...e, messages: { ...e.messages, ...i } } : e,
                                ),
                            },
                        }))
                        .exhaustive()),
            });
        }
    }
    function _(e, a) {
        l({ ...t, config: { ...t.config, colors: { ...t.config.colors, [e]: a } } });
    }
    function S() {
        (0, xf.tU)(t.config) && (0, xq.hJ)(t, xj.uF.GIFT_INVENTORY_FOR_YOU, xj.uF.INTERNAL_PREVIEW_TOOL, !0);
    }
    let N = o.useMemo(() => {
            for (let [e, a] of Object.entries(t.config.taskConfigV2.tasks)) if (null != a.target) return a.target;
            return 10 * da.A.Seconds.MINUTE;
        }, [t.config.taskConfigV2.tasks]),
        A = o.useMemo(() => xm.n.WATCH_VIDEO in t.config.taskConfigV2.tasks, [t.config.taskConfigV2.tasks]);
    xd()(!1 !== t.preview, "Preview config must have property preview: true");
    let k = t.config.taskConfigV2.tasks[xm.n.WATCH_VIDEO];
    return (0, r.jsxs)(g.Ip, {
        className: xO.kL,
        children: [
            (0, r.jsx)(Z.D, { variant: "heading-lg/bold", className: xO.R_, children: "Quest Preview Tool" }),
            (0, r.jsx)("div", {
                className: xO.OA,
                children: (0, r.jsx)(xB, {
                    onSelect: function (e) {
                        (j(e),
                            null == e ||
                                (i(
                                    (function (e) {
                                        if (null == e.userStatus) return xK.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return xK.CLAIMED;
                                        if (null != e.userStatus.completedAt) return xK.COMPLETED_100;
                                        let t = (0, xb.Yh)(e),
                                            a = t.progressSeconds,
                                            n = t.targetSeconds;
                                        return a / n >= 1
                                            ? xK.COMPLETED_100
                                            : a / n >= 0.75
                                              ? xK.COMPLETED_75
                                              : a / n >= 0.5
                                                ? xK.COMPLETED_50
                                                : a / n >= 0.25
                                                  ? xK.COMPLETED_25
                                                  : xK.ENROLLED;
                                    })(e),
                                ),
                                l(e)));
                    },
                    quest: v,
                }),
            }),
            (0, r.jsx)(Z.D, { variant: "heading-md/semibold", className: xO.fV, children: "Task Config" }),
            (0, r.jsx)("div", {
                className: xO.OA,
                children: (0, r.jsx)(xW, {
                    taskDuration: N,
                    taskConfigV2: t.config.taskConfigV2,
                    onSelect: function (e) {
                        l({ ...t, config: { ...t.config, taskConfigV2: e } });
                    },
                }),
            }),
            (0, r.jsx)(Z.D, { variant: "heading-md/semibold", className: xO.fV, children: "Messages" }),
            (0, r.jsxs)("div", {
                className: xO.OA,
                children: [
                    (0, r.jsx)(xU, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: E,
                        initialValue: t.config.messages.questName,
                    }),
                    (0, r.jsx)(xU, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: E,
                        initialValue: t.config.messages.gameTitle,
                    }),
                    (0, r.jsx)(xU, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: E,
                        initialValue: t.config.messages.gamePublisher,
                    }),
                    A &&
                        (0, r.jsx)(xU, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, a) {
                                let n = t.config.taskConfigV2.tasks,
                                    s = n[xm.n.WATCH_VIDEO];
                                if (null == s) return;
                                let i = { ...s.messages, [e]: a };
                                l({
                                    ...t,
                                    config: {
                                        ...t.config,
                                        taskConfigV2: {
                                            ...t.config.taskConfigV2,
                                            tasks: { ...n, [xm.n.WATCH_VIDEO]: { ...s, messages: i } },
                                        },
                                    },
                                });
                            },
                            initialValue: k?.messages.videoTitle,
                        }),
                ],
            }),
            (0, r.jsx)(Z.D, { variant: "heading-md/semibold", className: xO.fV, children: "Assets" }),
            (0, r.jsxs)("div", {
                className: xO.OA,
                children: [
                    (0, r.jsx)(xP, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: b,
                        filters: xX,
                        initialValue: t.config.assets.hero,
                    }),
                    (0, r.jsx)(xP, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: b,
                        filters: xX,
                        initialValue: t.config.assets.heroVideo ?? void 0,
                    }),
                    (0, r.jsx)(xP, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: b,
                        filters: xX,
                        initialValue: t.config.assets.questBarHero,
                    }),
                    (0, r.jsx)(xP, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: b,
                        filters: xX,
                        initialValue: t.config.assets.questBarHeroVideo ?? void 0,
                    }),
                    (0, r.jsx)(xP, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: b,
                        filters: [...xQ, "svg"],
                        initialValue: t.config.assets.gameTile,
                    }),
                    (0, r.jsx)(xP, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: b,
                        filters: [...xJ, "svg"],
                        initialValue: t.config.assets.logotype,
                    }),
                    A &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(xP, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: y,
                                    filters: xX,
                                    initialValue: k?.assets.video.url,
                                }),
                                (0, r.jsx)(xP, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: y,
                                    filters: xX,
                                    initialValue: k?.assets.videoLowRes?.url,
                                }),
                                (0, r.jsx)(xP, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: y,
                                    filters: xQ,
                                    initialValue: k?.assets.video.thumbnail,
                                }),
                            ],
                        }),
                ],
            }),
            f.map((e, a) =>
                (0, r.jsxs)(
                    "div",
                    {
                        children: [
                            (0, r.jsxs)(Z.D, {
                                variant: "heading-md/semibold",
                                className: xO.fV,
                                children: ["Reward #", a + 1],
                            }),
                            (0, r.jsxs)("div", {
                                className: xO.OA,
                                children: [
                                    (0, r.jsx)(xU, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, t) => C(e, t, a),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, r.jsx)(xU, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, t) => C(e, t, a),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== xh.l.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(xP, {
                                            title: "Asset",
                                            assetKey: "asset",
                                            onFileChange: (e, n) =>
                                                (function (e, a, n) {
                                                    if ("asset" === e) {
                                                        var s;
                                                        l({
                                                            ...t,
                                                            config:
                                                                ((s = t.config),
                                                                (0, xc.YW)(s)
                                                                    .with({ configVersion: 2 }, (e) => ({
                                                                        ...e,
                                                                        rewardsConfig: {
                                                                            ...e.rewardsConfig,
                                                                            rewards: e.rewardsConfig.rewards.map(
                                                                                (e, t) =>
                                                                                    t === n
                                                                                        ? { ...e, asset: a, skuId: "" }
                                                                                        : e,
                                                                            ),
                                                                        },
                                                                    }))
                                                                    .exhaustive()),
                                                        });
                                                    }
                                                })(e, n, a),
                                            filters: xX,
                                            initialValue: e.asset,
                                        }),
                                    (0, r.jsxs)(Q.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(Z.D, {
                                                variant: "heading-sm/semibold",
                                                children: "Claim Modal",
                                            }),
                                            (0, r.jsx)(x.$, {
                                                variant: "primary",
                                                text: "Open Reward Modal",
                                                onClick: S,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    },
                    a,
                ),
            ),
            (0, r.jsx)(Z.D, { variant: "heading-md/semibold", className: xO.fV, children: "Colors & Quest States" }),
            (0, r.jsxs)("div", {
                className: xO.OA,
                children: [
                    (0, r.jsxs)("div", {
                        className: xO.OA,
                        style: { marginBottom: 0 },
                        children: [
                            (0, r.jsx)(xR, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: _,
                                value: t.config.colors.primary,
                            }),
                            (0, r.jsx)(xR, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: _,
                                value: t.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: xO.OA, children: (0, r.jsx)(xH, {}) }),
                    (0, r.jsx)(xY, {
                        onChange: function (e) {
                            switch ((i(e), e)) {
                                case xK.UNENROLLED:
                                    l({ ...t, userStatus: null });
                                    break;
                                case xK.ENROLLED:
                                    l({ ...t, userStatus: xZ({ enrolledAt: new Date().toISOString() }) });
                                    break;
                                case xK.COMPLETED_25:
                                    l({
                                        ...t,
                                        userStatus: xZ({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * N,
                                        }),
                                    });
                                    break;
                                case xK.COMPLETED_50:
                                    l({
                                        ...t,
                                        userStatus: xZ({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * N,
                                        }),
                                    });
                                    break;
                                case xK.COMPLETED_75:
                                    l({
                                        ...t,
                                        userStatus: xZ({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * N,
                                        }),
                                    });
                                    break;
                                case xK.COMPLETED_100:
                                    l({
                                        ...t,
                                        userStatus: xZ({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: N,
                                        }),
                                    });
                                    break;
                                case xK.CLAIMED:
                                    l({
                                        ...t,
                                        userStatus: xZ({
                                            claimedAt: new Date().toISOString(),
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: N,
                                        }),
                                    });
                            }
                        },
                        value: s,
                    }),
                ],
            }),
            (0, r.jsx)(Z.D, { variant: "heading-lg/bold", className: xO.R_, children: "Component Previews" }),
            (0, r.jsxs)("div", {
                className: xO.$$,
                children: [
                    (0, r.jsxs)(xM, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(Z.D, { variant: "heading-sm/semibold", children: "Quest Bar" }),
                            (0, r.jsxs)("div", {
                                className: xO.l4,
                                children: [
                                    t.userStatus?.claimedAt != null &&
                                        (0, r.jsx)(p.E, {
                                            color: "text-subtle",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, r.jsx)("div", {
                                        className: xO.ok,
                                        children: (0, r.jsx)(xy.y5, {
                                            isPreview: !0,
                                            source: "preview",
                                            adCreativeId: "0",
                                            adCreativeType: xu.p.QUEST,
                                            children: (0, r.jsx)(xC.A, {
                                                children: (0, r.jsx)(xE.QuestBar, { quest: t }),
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(xM, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(Z.D, { variant: "heading-sm/semibold", children: "Quest Home Card" }),
                            (0, r.jsx)(xy.y5, {
                                isPreview: !0,
                                source: "preview",
                                adCreativeId: "0",
                                adCreativeType: xu.p.QUEST,
                                children: (0, r.jsx)(xA.Ay, {
                                    quest: t,
                                    className: xO.d,
                                    questContent: xj.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: xj.uF.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(xM, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(Z.D, { variant: "heading-sm/semibold", children: "Channel Call Header" }),
                            t.userStatus?.claimedAt != null &&
                                (0, r.jsx)(p.E, {
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children:
                                        "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                                }),
                            (0, r.jsx)("div", {
                                className: xO.l4,
                                children: (0, r.jsx)(xy.y5, {
                                    isPreview: !0,
                                    source: "preview",
                                    adCreativeId: "0",
                                    adCreativeType: xu.p.QUEST,
                                    children: (0, r.jsx)("div", {
                                        className: xO.Jr,
                                        children: (0, r.jsx)(x_.A, {
                                            channelId: "123",
                                            previewQuest: t,
                                            isParticipatingOverride: d,
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: xO.NY,
                        children: (0, r.jsx)(m.d, {
                            label: "Is Participating:",
                            checked: d,
                            onChange: function (e) {
                                c(e);
                            },
                        }),
                    }),
                    (0, r.jsxs)(xM, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(Z.D, { variant: "heading-sm/semibold", children: "Quest Card Embed" }),
                            u
                                ? (0, r.jsx)(xS.l, { questId: t.id })
                                : (0, r.jsx)(
                                      xN.M,
                                      {
                                          quest: t,
                                          location: xj.uF.QUESTS_EMBED,
                                          sourceQuestContent: xj.uF.INTERNAL_PREVIEW_TOOL,
                                      },
                                      t.id,
                                  ),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: xO.NY,
                        children: (0, r.jsx)(m.d, { label: "Invalid Quests Embed:", checked: u, onChange: h }),
                    }),
                    A &&
                        (0, r.jsxs)(xM, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, r.jsx)(Z.D, { variant: "heading-sm/semibold", children: "Video Player" }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        let e = performance.now();
                                        (0, eJ.openModalLazy)(async () => {
                                            let { default: n } = await Promise.all([
                                                a.e("348231"),
                                                a.e("808368"),
                                                a.e("171120"),
                                                a.e("392868"),
                                                a.e("263408"),
                                                a.e("77375"),
                                                a.e("479907"),
                                                a.e("119580"),
                                            ]).then(a.bind(a, 834135));
                                            return (a) =>
                                                (0, r.jsx)(n, {
                                                    ...a,
                                                    openStartClockTime: e,
                                                    videoSessionId: "fake-quest-session-id",
                                                    questId: t.id ?? "fake-quest-id",
                                                    overrideQuest: t,
                                                    autoplay: !0,
                                                    sourceQuestContent: xj.uF.INTERNAL_PREVIEW_TOOL,
                                                });
                                        });
                                    },
                                }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
class x3 extends o.Component {
    state = { error: null, renderKey: 0 };
    componentDidCatch(e) {
        this.setState({ error: e });
    }
    handleResetState = () => {
        this.setState((e) => ({ error: null, renderKey: e.renderKey + 1 }));
    };
    render() {
        let { error: e, renderKey: t } = this.state;
        return null != e
            ? (0, r.jsxs)("div", {
                  className: xO.TA,
                  children: [
                      (0, r.jsx)(xg.E, { className: xO.Yw }),
                      (0, r.jsx)(Z.D, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, r.jsx)(x.$, { variant: "secondary", text: "Reset", onClick: this.handleResetState }),
                      null != e.message &&
                          (0, r.jsx)(xv.Z, {
                              className: xO.Fx,
                              children: (0, r.jsx)("code", { className: xO.gJ, children: e.message }),
                          }),
                  ],
              })
            : (0, r.jsx)(x2, {}, t);
    }
}
var x6 = a(913122),
    x5 = a(839214),
    x8 = a(144009),
    x4 = a(450827),
    x9 = a(626584),
    x7 = a(174768),
    pe = a(205761),
    pt = a(860071),
    pa = a(696451),
    pn = a(149790),
    pl = a(926140);
let ps = new x9.A("SearchDebugUtils");
function pi() {
    ps.info("--------------------------");
}
function pr() {
    let e = x7.A.getProps();
    (ps.info("START Quick Switcher State"),
        ps.info(`Query: ${e.query}`),
        e.results.forEach((e) => {
            switch ((ps.info(`Result Type: ${e.type}`), e.type)) {
                case pl.rD.GUILD:
                    ps.info(`guild id: ${e.record.id}`);
                    break;
                case pl.rD.TEXT_CHANNEL:
                case pl.rD.VOICE_CHANNEL:
                    (ps.info(`channel type: ${e.record.type}`),
                        ps.info(`channel id: ${e.record.id}`),
                        ps.info(`name: ${e.record.name}`));
                    break;
                case pl.rD.DM:
                    (ps.info(`channel type: ${e.record.type}`),
                        ps.info(`channel id: ${e.record.id}`),
                        e.record.isDM() &&
                            (ps.info(`recipient id: ${e.record.getRecipientId()}`),
                            e.record.recipients.forEach((e) => {
                                let t = ec.default.getUser(e);
                                null != t &&
                                    (ps.info(`recipient username: ${t.username}`),
                                    ps.info(`recipient global name: ${eg.Ay.getGlobalName(t)}`),
                                    ps.info(`recipient nickname: ${aY.A.getNickname(t.id)}`));
                            })));
                    break;
                case pl.rD.GROUP_DM:
                    (ps.info(`channel type: ${e.record.type}`),
                        ps.info(`channel id: ${e.record.id}`),
                        ps.info(`name: ${(0, aH.m1)(e.record, ec.default, aY.A)}`),
                        e.record.isGroupDM() &&
                            (ps.info(`default name: ${(0, aH.ks)(e.record, ec.default, aY.A)}`),
                            ps.info(`recipient id: ${e.record.recipients}`),
                            e.record.recipients.forEach((e) => {
                                let t = ec.default.getUser(e);
                                null != t &&
                                    (ps.info(`recipient username: ${t.username}`),
                                    ps.info(`recipient global name: ${eg.Ay.getGlobalName(t)}`),
                                    ps.info(`recipient nickname: ${aY.A.getNickname(t.id)}`));
                            })));
                    break;
                case pl.rD.USER:
                    (ps.info(`user id: ${e.record.id}`),
                        ps.info(`username: ${e.record.username}`),
                        ps.info(`global name: ${eg.Ay.getGlobalName(e.record)}`),
                        ps.info(`nickname: ${aY.A.getNickname(e.record.id)}`),
                        ps.info(`guild nicknames: ${pa.Ay.getNicknames(e.record.id)}`));
            }
            (ps.info(`frecency score: ${pe.A.getScoreWithoutFetchingLatest(e.record.id)}`), pi());
        }),
        ps.info("END Quick Switcher State\n"));
}
async function po() {
    ps.info("START User Search Worker State");
    let e = await x4.A.requestDebugState();
    null == e
        ? ps.info("Unable to get debug state from User Search Worker")
        : (Object.entries(JSON.parse(e.users)).forEach((e) => {
              let [t, a] = e;
              (ps.info(`id: ${t}`),
                  ps.info(`username: ${a.username}`),
                  ps.info(`global name: ${a.globalName}`),
                  ps.info(`nickname: ${a.friendNickname}`),
                  Object.entries(a.nicknames).forEach((e) => {
                      let [t, a] = e;
                      (ps.info(`guild id: ${t}`), ps.info(`guild nickname: ${a}`));
                  }),
                  pi());
          }),
          ps.info("END User Search Worker State\n"));
}
async function pd() {
    let e = await x4.A.requestDebugState();
    if (null == e) throw Error("Unable to get debug state from User Search Worker");
    let t = JSON.parse(e.users),
        a = ec.default.getUsers(),
        n = new Set(Object.keys(t)),
        l = hZ.default.keys(a),
        s = [];
    return (
        l.forEach((e) => {
            n.has(e) || s.push(e);
        }),
        s
    );
}
async function pc(e) {
    let t = await x4.A.requestDebugState(),
        a = null != t ? JSON.parse(t.users)[e] : null,
        n = nE.A.getGuildIds(),
        l = [];
    n.forEach((t) => {
        let a = pa.Ay.getMember(t, e);
        null != a && l.push(a);
    });
    let s = pt.A.getDebugState(e);
    return { user: ec.default.getUser(e), searchWorkerUser: a, guildMembers: l, guildMemberRequests: s };
}
var pu = a(143919);
function pm(e) {
    let { isUploading: t, isSuccess: a, errorMessage: n, onClick: l, title: s } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(x.$, {
                variant: "primary",
                onClick: l,
                loading: t,
                disabled: t,
                text: t ? "Uploading\u2026" : s,
            }),
            null != n &&
                (0, r.jsx)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: pu.qS,
                    children: n,
                }),
            a &&
                (0, r.jsx)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: pu.qS,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
let ph = (0, x5.D)(() => ({
    includeFrecency: !0,
    includeFriends: !0,
    includeGDMs: !0,
    includeDMs: !0,
    includeQuickSwitcherState: !0,
    includeUserSearchWorkerState: !0,
    isUploading: !1,
    isSuccess: !1,
    errorMessage: null,
}));
function px() {
    let e = ph.useField("includeFrecency"),
        t = ph.useField("includeFriends"),
        a = ph.useField("includeDMs"),
        n = ph.useField("includeGDMs"),
        l = ph.useField("includeQuickSwitcherState"),
        s = ph.useField("includeUserSearchWorkerState"),
        i = ph.useField("isUploading"),
        d = ph.useField("isSuccess"),
        c = ph.useField("errorMessage"),
        h = o.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: a,
                includeDMs: n,
                includeQuickSwitcherState: l,
                includeUserSearchWorkerState: s,
                isUploading: i,
            } = ph.getState();
            if (!i)
                try {
                    let i, r, o, d, c, u, m, h, x, p, g, v;
                    (ph.setState({ isUploading: !0, errorMessage: null, isSuccess: !1 }),
                        t &&
                            ((i = aY.A.getFriendIDs()),
                            ps.info("START Discord Friends"),
                            i.forEach((e) => {
                                let t = ec.default.getUser(e);
                                if (null == t) return;
                                let a = t.username,
                                    n = eg.Ay.getGlobalName(t),
                                    l = aY.A.getNickname(t.id),
                                    s = pa.Ay.getNicknames(t.id);
                                (ps.info(`username: ${a}`),
                                    ps.info(`global name: ${n}`),
                                    ps.info(`nickname: ${l}`),
                                    ps.info(`guild nicknames: ${s}`),
                                    pi());
                            }),
                            ps.info("END Discord Friends\n")),
                        a &&
                            ((r = aK.A.getMutablePrivateChannels()),
                            (o = []),
                            (d = []),
                            Object.values(r).forEach((e) => {
                                (e.isGroupDM() && o.push(e), e.isDM() && d.push(e));
                            }),
                            ps.info("START Logging Group DM Channels"),
                            o.forEach((e) => {
                                let t = (0, aH.m1)(e, ec.default, aY.A),
                                    a = (0, aH.ks)(e, ec.default, aY.A);
                                (ps.info(`id: ${e.id}`),
                                    ps.info(`name: ${t}`),
                                    ps.info(`default name: ${a}`),
                                    ps.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = ec.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = eg.Ay.getGlobalName(t),
                                            l = aY.A.getNickname(t.id),
                                            s = pa.Ay.getNicknames(t.id);
                                        (ps.info(`username: ${a}`),
                                            ps.info(`global name: ${n}`),
                                            ps.info(`nickname: ${l}`),
                                            ps.info(`guild nicknames: ${s}`),
                                            pi());
                                    }));
                            }),
                            ps.info("END Logging Group DM Channels\n"),
                            ps.info("START Logging DM Channels"),
                            d.forEach((e) => {
                                let t = (0, aH.m1)(e, ec.default, aY.A);
                                (ps.info(`id: ${e.id}`), ps.info(`name: ${t}`));
                                let a = e.getRecipientId(),
                                    n = ec.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    s = eg.Ay.getGlobalName(n),
                                    i = aY.A.getNickname(n.id);
                                (ps.info(`username: ${l}`),
                                    ps.info(`global name: ${s}`),
                                    ps.info(`nickname: ${i}`),
                                    pi());
                            }),
                            ps.info("END Logging DM Channels\n")),
                        n &&
                            ((c = aK.A.getMutablePrivateChannels()),
                            (u = []),
                            (m = []),
                            Object.values(c).forEach((e) => {
                                (e.isGroupDM() && u.push(e), e.isDM() && m.push(e));
                            }),
                            ps.info("START Logging Group DM Channels"),
                            u.forEach((e) => {
                                let t = (0, aH.m1)(e, ec.default, aY.A),
                                    a = (0, aH.ks)(e, ec.default, aY.A);
                                (ps.info(`id: ${e.id}`),
                                    ps.info(`name: ${t}`),
                                    ps.info(`default name: ${a}`),
                                    ps.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = ec.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = eg.Ay.getGlobalName(t),
                                            l = aY.A.getNickname(t.id),
                                            s = pa.Ay.getNicknames(t.id);
                                        (ps.info(`username: ${a}`),
                                            ps.info(`global name: ${n}`),
                                            ps.info(`nickname: ${l}`),
                                            ps.info(`guild nicknames: ${s}`),
                                            pi());
                                    }));
                            }),
                            ps.info("END Logging Group DM Channels\n"),
                            ps.info("START Logging DM Channels"),
                            m.forEach((e) => {
                                let t = (0, aH.m1)(e, ec.default, aY.A);
                                (ps.info(`id: ${e.id}`), ps.info(`name: ${t}`));
                                let a = e.getRecipientId(),
                                    n = ec.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    s = eg.Ay.getGlobalName(n),
                                    i = aY.A.getNickname(n.id);
                                (ps.info(`username: ${l}`),
                                    ps.info(`global name: ${s}`),
                                    ps.info(`nickname: ${i}`),
                                    pi());
                            }),
                            ps.info("END Logging DM Channels\n")),
                        e &&
                            ((h = pe.A.getFrequentlyWithoutFetchingLatest()),
                            (x = []),
                            (p = []),
                            (g = []),
                            (v = []),
                            h.forEach((e) => {
                                (0, pn.fh)(e)
                                    ? x.push(e)
                                    : e.isDM()
                                      ? g.push(e)
                                      : e.isMultiUserDM()
                                        ? v.push(e)
                                        : p.push(e);
                            }),
                            ps.info("START Frecency"),
                            ps.info("Guilds"),
                            x.forEach((e) => {
                                let t = pe.A.getScoreWithoutFetchingLatest(e.id);
                                ps.info(`id: ${e.id} - name: ${e.name} - Frecency Score: ${t}`);
                            }),
                            pi(),
                            ps.info("DM Channels"),
                            g.forEach((e) => {
                                let t = pe.A.getScoreWithoutFetchingLatest(e.id);
                                ps.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            pi(),
                            ps.info("Group DM Channels"),
                            v.forEach((e) => {
                                let t = pe.A.getScoreWithoutFetchingLatest(e.id);
                                (ps.info(`id: ${e.id} - Frecency Score: ${t}`),
                                    ps.info(`default name: ${(0, aH.ks)(e, ec.default, aY.A)}`),
                                    ps.info(`name: ${(0, aH.m1)(e, ec.default, aY.A)}`));
                            }),
                            pi(),
                            ps.info("Guild Channels"),
                            p.forEach((e) => {
                                let t = pe.A.getScoreWithoutFetchingLatest(e.id);
                                ps.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            pi(),
                            ps.info("END Frecency\n")),
                        l && pr(),
                        s && po(),
                        await (0, x8.a)(ex.Umv.WEB_APP),
                        ph.setState({ isSuccess: !0, errorMessage: null }));
                } catch (t) {
                    let e = new x6.LG(t);
                    ph.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    ph.setState({ isUploading: !1 });
                }
        }, []);
    return (0, r.jsxs)(u.n, {
        label: "Debug Logs Snapshot",
        description:
            "Uploading a snapshot of the client state can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue.",
        children: [
            (0, r.jsx)(m.d, {
                label: "Frecency",
                description:
                    "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
                checked: e,
                onChange: () => ph.setState({ includeFrecency: !e }),
            }),
            (0, r.jsx)(m.d, {
                label: "Friends",
                description: "Includes all Discord Friend usernames, global names, and nicknames.",
                checked: t,
                onChange: () => ph.setState({ includeFriends: !t }),
            }),
            (0, r.jsx)(m.d, {
                label: "DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                checked: a,
                onChange: () => ph.setState({ includeDMs: !a }),
            }),
            (0, r.jsx)(m.d, {
                label: "Group DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                checked: n,
                onChange: () => ph.setState({ includeGDMs: !n }),
            }),
            (0, r.jsx)(m.d, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: l,
                onChange: () => ph.setState({ includeQuickSwitcherState: !l }),
            }),
            (0, r.jsx)(m.d, {
                label: "User Search Worker",
                description:
                    "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                checked: s,
                onChange: () => ph.setState({ includeUserSearchWorkerState: !s }),
            }),
            (0, r.jsx)(pm, {
                isUploading: i,
                isSuccess: d,
                errorMessage: c,
                onClick: h,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
let pp = (0, x5.D)(() => ({ userIds: [], isLoading: !1, isSuccess: !1, errorMessage: null, lastRunAt: null }));
function pg() {
    let e = pp.useField("userIds"),
        t = pp.useField("isLoading"),
        a = pp.useField("isSuccess"),
        n = pp.useField("errorMessage"),
        l = pp.useField("lastRunAt"),
        s = o.useCallback(async () => {
            pp.setState({ isLoading: !0, errorMessage: null, isSuccess: !1 });
            try {
                let e = await pd();
                pp.setState({ userIds: e, errorMessage: null, isSuccess: !0, lastRunAt: new Date().toISOString() });
            } catch (e) {
                pp.setState({ errorMessage: e, isSuccess: !1 });
            } finally {
                pp.setState({ isLoading: !1 });
            }
        }, []),
        i = o.useMemo(
            () =>
                e.map((e) => {
                    let t = ec.default.getUser(e),
                        a = null != t ? eg.Ay.getName(t) : "Unknown";
                    return (0, r.jsx)(
                        "div",
                        {
                            className: pu.J1,
                            children: (0, r.jsx)(p.E, { variant: "text-md/normal", children: `${a} (${e})` }),
                        },
                        e,
                    );
                }),
            [e],
        );
    return (0, r.jsx)(u.n, {
        label: "Diff User State",
        description: "Click to generate a diff between the client user state and the user worker state.",
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(x.$, { onClick: s, text: "Diff User State", loading: t, disabled: t }),
                (0, r.jsxs)("div", {
                    className: pu.N6,
                    children: [
                        null != n &&
                            (0, r.jsx)(p.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                className: pu.qS,
                                children: n,
                            }),
                        a &&
                            e.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(p.E, { variant: "text-md/normal", children: `Last run at: ${l}` }),
                                    (0, r.jsx)(p.E, {
                                        variant: "text-md/normal",
                                        children: "User IDs missing from Worker:",
                                    }),
                                    (0, r.jsx)("div", { className: pu.uk, children: i }),
                                ],
                            }),
                        a &&
                            0 === e.length &&
                            (0, r.jsx)(p.E, { variant: "text-md/normal", children: "No users missing from Worker" }),
                    ],
                }),
            ],
        }),
    });
}
let pv = (0, x5.D)(() => ({ isRecording: !1, isUploading: !1, isSuccess: !1, errorMessage: null }));
function pj() {
    let e = pv.useField("isRecording"),
        t = pv.useField("isUploading"),
        a = pv.useField("isSuccess"),
        n = pv.useField("errorMessage"),
        l = o.useRef([]),
        s = o.useRef(""),
        i = o.useCallback(() => {
            let { results: e, query: t } = x7.A.getProps();
            (l.current !== e || s.current !== t) && ((l.current = e), (s.current = t), pr());
        }, []);
    o.useEffect(() => {
        if (e) return (x7.A.addChangeListener(i), () => x7.A.removeChangeListener(i));
    }, [i, e]);
    let d = o.useCallback(async () => {
        let { isUploading: e } = pv.getState();
        if (!e)
            try {
                (pv.setState({ isRecording: !1, isUploading: !0, errorMessage: null, isSuccess: !1 }),
                    await (0, x8.a)(ex.Umv.WEB_APP),
                    pv.setState({ isSuccess: !0, errorMessage: null }));
            } catch (t) {
                let e = new x6.LG(t);
                pv.setState({ errorMessage: e.getAnyErrorMessage() });
            } finally {
                pv.setState({ isUploading: !1 });
            }
    }, []);
    return (0, r.jsxs)(u.n, {
        label: "Debug Logs Session",
        description:
            "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
        children: [
            (0, r.jsx)(hh.p, {
                messageType: hh.Y.INFO,
                children: "When you are done, please remember to upload the logs.",
            }),
            (0, r.jsxs)(nx.e, {
                children: [
                    (0, r.jsx)(x.$, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => pv.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, r.jsx)(pm, {
                        isUploading: t,
                        isSuccess: a,
                        errorMessage: n,
                        onClick: d,
                        title: "Upload Session Logs",
                    }),
                ],
            }),
        ],
    });
}
var pf = a(145497);
let pb = (0, x5.D)(() => ({ userId: null, state: null, loading: !1, error: null }));
function py(e) {
    let { title: t, guildIds: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: pu.J1,
                children: (0, r.jsx)(p.E, { variant: "text-sm/normal", children: t }),
            }),
            (0, r.jsxs)("div", {
                className: pu.uk,
                children: [
                    0 === a.length &&
                        (0, r.jsx)("div", {
                            className: pu.J1,
                            children: (0, r.jsx)(p.E, { variant: "text-sm/normal", children: "None" }),
                        }),
                    a.map((e) => {
                        let t = nE.A.getGuild(e);
                        return null == t
                            ? null
                            : (0, r.jsxs)(
                                  "div",
                                  {
                                      className: pu.J1,
                                      children: [
                                          (0, r.jsx)(pf.Ay, { guild: t, iconSize: 16 }),
                                          (0, r.jsx)(p.E, { variant: "text-sm/normal", children: t.name }),
                                      ],
                                  },
                                  e,
                              );
                    }),
                ],
            }),
        ],
    });
}
function pE(e) {
    let { userState: t } = e,
        { user: a, searchWorkerUser: n, guildMembers: l, guildMemberRequests: s } = t,
        i = o.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, r.jsx)(ih.y, { size: "sm", color: eQ.A.colors.STATUS_POSITIVE })
                : (0, r.jsx)(xg.E, { size: "sm", color: eQ.A.colors.ICON_FEEDBACK_CRITICAL });
        }, []);
    return (0, r.jsxs)("div", {
        className: pu.N6,
        children: [
            (0, r.jsxs)("div", {
                className: pu.J1,
                children: [
                    i({ ok: null != a }),
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        children: null != a ? "User exists in UserStore" : "User does not exist in UserStore",
                    }),
                ],
            }),
            null != a &&
                (0, r.jsx)("div", {
                    className: pu.uk,
                    children: (0, r.jsx)("div", {
                        className: pu.J1,
                        children: (0, r.jsx)(p.E, { variant: "text-sm/normal", children: `username: ${a.username}` }),
                    }),
                }),
            (0, r.jsxs)("div", {
                className: pu.J1,
                children: [
                    i({ ok: null != n }),
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        children:
                            null != n
                                ? "User exists in User Search Worker"
                                : "User does not exist in User Search Worker",
                    }),
                ],
            }),
            null != n &&
                (0, r.jsxs)("div", {
                    className: pu.uk,
                    children: [
                        (0, r.jsx)("div", {
                            className: pu.J1,
                            children: (0, r.jsx)(p.E, {
                                variant: "text-sm/normal",
                                children: `username: ${n.username}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: pu.J1,
                            children: (0, r.jsx)(p.E, {
                                variant: "text-sm/normal",
                                children: `global name: ${n.globalName ?? "\u2014"}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: pu.J1,
                            children: (0, r.jsx)(p.E, { variant: "text-sm/normal", children: "nicknames:" }),
                        }),
                        (0, r.jsxs)("div", {
                            className: pu.uk,
                            children: [
                                0 === Object.keys(n.nicknames).length &&
                                    (0, r.jsx)("div", {
                                        className: pu.J1,
                                        children: (0, r.jsx)(p.E, { variant: "text-sm/normal", children: "None" }),
                                    }),
                                Object.entries(n.nicknames).map((e) => {
                                    let [t, a] = e,
                                        n = nE.A.getGuild(t),
                                        l = aK.A.getChannel(t);
                                    return (0, r.jsxs)(
                                        "div",
                                        {
                                            className: pu.J1,
                                            children: [
                                                null != n && (0, r.jsx)(pf.Ay, { guild: n, iconSize: 16 }),
                                                null != n &&
                                                    (0, r.jsx)(p.E, { variant: "text-sm/normal", children: n.name }),
                                                null == n &&
                                                    null != l &&
                                                    (0, r.jsx)(p.E, {
                                                        variant: "text-sm/normal",
                                                        children: (0, aH.m1)(l, ec.default, aY.A),
                                                    }),
                                                (0, r.jsx)(p.E, { variant: "text-sm/normal", children: ` (${t})` }),
                                                null != a &&
                                                    "" !== a &&
                                                    (0, r.jsx)(p.E, { variant: "text-sm/normal", children: ` - ${a}` }),
                                            ],
                                        },
                                        t,
                                    );
                                }),
                            ],
                        }),
                    ],
                }),
            (0, r.jsxs)("div", {
                className: pu.J1,
                children: [
                    i({ ok: l.length > 0 }),
                    (0, r.jsx)(p.E, {
                        variant: "text-sm/normal",
                        children: l.length > 0 ? "Guild members exist:" : "No guild members exist",
                    }),
                ],
            }),
            l.length > 0 &&
                (0, r.jsx)("div", {
                    className: pu.uk,
                    children: l.map((e) => {
                        let t = nE.A.getGuild(e.guildId);
                        if (null == t) return null;
                        let a = e.nick ?? "";
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: pu.J1,
                                children: [
                                    (0, r.jsx)(pf.Ay, { guild: t, iconSize: 16 }),
                                    (0, r.jsxs)(p.E, {
                                        variant: "text-sm/normal",
                                        children: [t.name, "" !== a ? ` - ${a}` : ""],
                                    }),
                                ],
                            },
                            `${e.guildId}`,
                        );
                    }),
                }),
            (0, r.jsxs)("div", {
                className: pu.J1,
                children: [
                    (0, r.jsx)(un.CircleInformationIcon, { size: "sm" }),
                    (0, r.jsx)(p.E, { variant: "text-sm/normal", children: "GuildMemberRequesterStore State" }),
                ],
            }),
            null != s &&
                (0, r.jsxs)("div", {
                    className: pu.uk,
                    children: [
                        (0, r.jsx)(py, { title: "Pending Guild Member Requests:", guildIds: s.pendingRequestGuildIds }),
                        (0, r.jsx)(py, { title: "Sent Guild Member Requests:", guildIds: s.sentRequestGuildIds }),
                        (0, r.jsx)(py, {
                            title: "Unacknowledged Guild Member Requests:",
                            guildIds: s.unacknowledgedRequestGuildIds,
                        }),
                    ],
                }),
        ],
    });
}
function pC() {
    let e = o.useCallback((e) => {
            pb.setState({ userId: e, state: null });
        }, []),
        t = o.useCallback(async () => {
            let { userId: e, loading: t } = pb.getState();
            if (!t && null != e) {
                pb.setState({ loading: !0, error: null });
                try {
                    let t = await pc(e);
                    pb.setState({ state: t, loading: !1 });
                } catch (t) {
                    let e = new x6.LG(t);
                    pb.setState({ error: e.getAnyErrorMessage(), loading: !1 });
                } finally {
                    pb.setState({ loading: !1 });
                }
            }
        }, []),
        a = pb.useField("loading");
    return (0, r.jsxs)("div", {
        className: pu.$n,
        children: [
            (0, r.jsx)(f.k, { placeholder: "User ID", onChange: e }),
            (0, r.jsx)(x.$, { onClick: t, text: "Get Snapshot", loading: a, disabled: a }),
        ],
    });
}
function p_() {
    let e = pb.useField("state"),
        t = pb.useField("error");
    return (0, r.jsxs)(u.n, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, r.jsx)(pC, {}),
            null != t &&
                (0, r.jsx)(p.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: pu.qS,
                    children: t,
                }),
            null != e && (0, r.jsx)(pE, { userState: e }),
        ],
    });
}
function pS() {
    return (0, r.jsxs)(g.Ip, {
        className: pu.nd,
        children: [
            (0, r.jsx)(pj, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(px, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(p_, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(pg, {}),
        ],
    });
}
var pN = a(761508),
    pA = a(599147),
    pk = a(808411),
    pD = a(624716),
    pI = a(398590),
    pT = a(101715),
    pO = a(827703),
    pR = a(349738),
    pw = a(865868);
let pM = [
        { id: "virtual-currency", name: "Virtual Current (Orb) Components" },
        { id: "nitro", name: "Nitro Components" },
    ],
    pL = {
        "virtual-currency": function () {
            return (0, r.jsxs)(pR.Hq, {
                label: "Open New Revenue Storybook",
                direction: "vertical",
                children: [
                    (0, r.jsx)(p.E, {
                        variant: "text-md/normal",
                        color: "text-feedback-info",
                        style: { marginBottom: "8px" },
                        children: "This section is deprecated. Use button to open the new Revenue Storybook instead.",
                    }),
                    (0, r.jsx)(x.$, {
                        onClick: () => {
                            var e;
                            return (
                                (e = pO.RevenuePlaygroundCollectionId.VIRTUAL_CURRENCY),
                                void (pT.x.setState({ selectedCollection: e, selectedStory: null }),
                                (0, pI.id)(ex.zgK.COMPONENT_PLAYGROUND))
                            );
                        },
                        text: "Open New Revenue Storybook",
                    }),
                ],
            });
        },
        nitro: function () {
            return (0, r.jsxs)("div", { children: [(0, r.jsx)(pA.o, {}), (0, r.jsx)(pk.A, {}), (0, r.jsx)(pD.A, {})] });
        },
    };
function pP() {
    let [e, t] = o.useState("virtual-currency"),
        a = o.useMemo(() => pL[e], [e]);
    return (0, r.jsxs)("div", {
        className: Y()(tZ.nd, pw.kL),
        children: [
            (0, r.jsx)(pN.V, {
                className: pw.$H,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: pM.map((e) => (0, r.jsx)(pN.V.Item, { id: e.id, children: e.name }, e.id)),
            }),
            (0, r.jsx)(g.Ar, { children: (0, r.jsx)("div", { className: pw.Qs, children: (0, r.jsx)(a, {}) }) }),
        ],
    });
}
var pU = a(718446),
    pG = a(766075),
    pB = a(355097);
let pF = (0, x5.D)(() => ({ urlString: "", error: null })),
    p$ = Object.entries(pB.od).map((e) => {
        let [t, a] = e;
        return { id: t, label: a, value: t };
    });
function pV() {
    let [e, t] = o.useState(),
        a = pF.useField("urlString"),
        n = pF.useField("error"),
        l = o.useCallback(() => {
            let e = pF.getField("urlString");
            if (null == e || "" === e) return void pF.setState({ error: "URL is required" });
            let t = (0, pU.parseSettingsUrl)({ path: e });
            ((0, pU.trackParseSettingsUrl)(t, "devtools"), null == t.target)
                ? pF.setState({ error: "String did not match expected format" })
                : (0, pG.openUserSettings)(t.target, { path: t.path });
        }, []);
    return (0, r.jsxs)(u.n, {
        label: "Settings Deep Link Tool",
        children: [
            (0, r.jsx)(a_.Z, {
                label: "[optional] Choose a path",
                clearable: !0,
                value: e,
                placeholder: "Select a settings path",
                options: p$,
                selectionMode: "single",
                onSelectionChange: (e) => {
                    if ((t(e), null != e)) {
                        let [t, a] = pB.od[e].split("/");
                        pF.setState({ urlString: ex.BVt.SETTINGS(t, a), error: null });
                    }
                },
                fullWidth: !0,
            }),
            (0, r.jsx)(f.k, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                value: a,
                onChange: (e) => pF.setState({ urlString: e, error: null }),
            }),
            (0, r.jsxs)(nx.e, {
                children: [
                    (0, r.jsx)(x.$, {
                        variant: "primary",
                        onClick: l,
                        text: "Open User Settings for URL",
                        disabled: "" === a,
                    }),
                    (0, r.jsx)(x.$, {
                        variant: "secondary",
                        onClick: () => (0, nY.C)(`${window.location.origin}${a}`),
                        disabled: "" === a,
                        text: "Copy URL",
                    }),
                ],
            }),
            null != n && (0, r.jsx)(p.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
var pW = a(780964);
let pz = (0, x5.D)(() => ({ setting: pW.X.ACCOUNT_PANEL }));
function pH() {
    let e = pz.useField("setting"),
        t = o.useCallback(() => {
            (0, pG.openUserSettings)(e);
        }, [e]),
        a = o.useMemo(() => Object.values(pW.X).map((e) => ({ id: e, label: e, value: e })), []);
    return (0, r.jsxs)(u.n, {
        label: "Settings Navigation Tool",
        children: [
            (0, r.jsx)(a_.Z, {
                label: "Setting",
                placeholder: "Select a setting",
                value: e,
                onSelectionChange: (e) => pz.setState({ setting: e }),
                options: a,
                selectionMode: "single",
                clearable: !0,
            }),
            (0, r.jsx)(x.$, { variant: "primary", onClick: t, text: "Open User Settings" }),
        ],
    });
}
var pK = a(963935),
    pY = a(476088),
    pq = a(555738);
function pJ(e) {
    let { title: t, initExpanded: a, highlightMode: n = "none", children: l } = e,
        [s, i] = o.useState(a),
        d = o.useCallback(() => {
            i(!s);
        }, [s]),
        c = "migrated" === n || "migrated-root" === n ? void 0 : "text-feedback-warning";
    function u(e) {
        return (0, r.jsx)(p.E, { variant: e, color: c, children: t });
    }
    return null == l
        ? (0, r.jsx)("div", { className: pq.NF, children: u("text-md/normal") })
        : (0, r.jsxs)("div", {
              className: pq.NF,
              children: [
                  (0, r.jsxs)(q.D, {
                      className: pq.jr,
                      onClick: d,
                      children: [
                          u("text-md/bold"),
                          (0, r.jsx)(sT.A, {
                              direction: s ? sT.A.Directions.DOWN : sT.A.Directions.RIGHT,
                              className: pq.D,
                          }),
                      ],
                  }),
                  s && (0, r.jsx)("div", { className: pq.m4, children: l }),
              ],
          });
}
function pQ(e) {
    let { setting: t, depth: a, inheritedHighlightMode: n } = e,
        l = (function (e, t) {
            if ("migrated" === t) return "migrated";
            switch (e.type) {
                case pK.Z6.ROOT:
                    return "migrated-root";
                case pK.Z6.SECTION:
                case pK.Z6.PANEL:
                case pK.Z6.SIDEBAR_ITEM:
                    return "migrated";
                default:
                    return t ?? "migrated";
            }
        })(t, n),
        s = "migrated" === l ? "migrated" : void 0,
        i = null;
    return (
        (0, pK.nW)(t) &&
            t.layout.length > 0 &&
            (i = t.layout.map((e) => (0, r.jsx)(pQ, { setting: e, depth: a + 1, inheritedHighlightMode: s }, e.key))),
        (0, r.jsx)(pJ, { title: t.key, initExpanded: a <= 2, highlightMode: l, children: i })
    );
}
function pX() {
    let { node: e } = (0, eo.Ay)(pY.D, ""),
        t = (0, eo.KA)();
    return (0, r.jsxs)(u.n, {
        label: "Settings Tree",
        children: [
            (0, r.jsx)(m.d, {
                label: "Bypass Predicates",
                description: "Forces all migrated settings to be visible.",
                checked: t,
                onChange: eo.jL,
            }),
            (0, r.jsx)(pQ, { setting: e, depth: 1 }, e.key),
        ],
    });
}
var pZ = a(728564);
function p0() {
    return (0, r.jsxs)(g.Ip, {
        className: pZ.n,
        children: [
            (0, r.jsx)(pH, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(pV, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(pX, {}),
        ],
    });
}
function p1() {
    return o.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: nh.fu.EXPERIMENTS,
                tags: ["events", "impressions", "tracking"],
                render: () => (0, r.jsx)(lr, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: nh.fu.EXPERIMENTS,
                tags: ["experiments", "exposure", "buckets"],
                render: () => (0, r.jsx)(hm, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: nh.fu.EVENTS,
                tags: ["flux", "state"],
                render: () => (0, r.jsx)(m4, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: nh.fu.EVENTS,
                tags: ["flux", "actions"],
                render: () => (0, r.jsx)(sf, {}),
            },
        ];
        return (
            nn.A.isDeveloper &&
                (e.push({ id: "shop", name: "Shop Overrides", group: nh.fu.SHOP, render: () => (0, r.jsx)(mz, {}) }),
                e.push({
                    id: "storefront",
                    name: "Storefront Overrides",
                    group: nh.fu.STOREFRONT,
                    render: () => (0, r.jsx)(mZ, {}),
                }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: nh.fu.BILLING,
                    tags: ["gifts", "nitro", "boost", "sku", "collectibles"],
                    render: () => (0, r.jsx)(co, {}),
                }),
                e.push({
                    id: "shop_collectibles",
                    name: "Collectibles Preview",
                    group: nh.fu.SHOP,
                    render: () => (0, r.jsx)(tH, {}),
                }),
                e.push({
                    id: "shop_game_server_hosting",
                    name: "GSH",
                    group: nh.fu.SHOP,
                    tags: ["game server", "gsh", "highlight", "checkout"],
                    render: () => (0, r.jsx)(aw, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: nh.fu.DEVELOPMENT,
                    tags: ["captcha", "safety", "vibe", "vibing", "override", "premium type"],
                    render: () => (0, r.jsx)(uN, {}),
                }),
                e.push({
                    id: "routing_key",
                    name: "Routing Key",
                    group: nh.fu.DEVELOPMENT,
                    tags: ["routing", "traffic", "routing-key", "network"],
                    render: () => (0, r.jsx)(uP, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: nh.fu.DEVELOPMENT,
                    tags: ["secure frames", "encryption"],
                    render: () => (0, r.jsx)(sE, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: nh.fu.DEVELOPMENT,
                    tags: ["fps", "frames", "gateway", "telemetry"],
                    render: () => (0, r.jsx)(cR.Ay, {}),
                }),
                e.push({
                    id: "age_verification",
                    name: "Age Verification",
                    group: nh.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(nL, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: nh.fu.USERS,
                    tags: ["surveys"],
                    render: () => (0, r.jsx)(sk, {}),
                }),
                e.push({ id: "overlay", name: "Overlay v3", group: nh.fu.GAMES, render: () => (0, r.jsx)(dV, {}) }),
                e.push({
                    id: "generated_test_user",
                    name: "Generated Test Users",
                    group: nh.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(iM, {}),
                }),
                nl.isPlatformEmbedded &&
                    (e.push({
                        id: "detected_games",
                        name: "Detected Games",
                        group: nh.fu.GAMES,
                        render: () => (0, r.jsx)(l9, {}),
                    }),
                    e.push({
                        id: "running_game_detection",
                        name: "Running Game Detection",
                        group: nh.fu.GAMES,
                        tags: ["detection", "filter", "blocklist", "native"],
                        render: () => (0, r.jsx)(uV, {}),
                    }),
                    e.push({
                        id: "game_icon_extractor",
                        name: "Game Icon Extractor",
                        group: nh.fu.GAMES,
                        tags: ["ico", "icon", "png", "rtc"],
                        render: () => (0, r.jsx)(sY, {}),
                    }),
                    e.push({
                        id: "game_mode",
                        name: "Game Mode",
                        group: nh.fu.GAMES,
                        tags: ["fps", "frame rate", "throttle", "performance", "reduce motion"],
                        render: () => (0, r.jsx)(aC, {}),
                    })),
                e.push({
                    id: "detectable_cache",
                    name: "Detectable Cache",
                    group: nh.fu.GAMES,
                    tags: ["games", "cache", "skus", "stale"],
                    render: () => (0, r.jsx)(l0, {}),
                }),
                e.push({ id: "slayer_sdk", name: "Slayer SDK", group: nh.fu.GAMES, render: () => (0, r.jsx)(mK, {}) }),
                e.push({
                    id: "account_linking",
                    name: "Account Linking",
                    group: nh.fu.GAMES,
                    render: () => (0, r.jsx)(nk, {}),
                }),
                e.push({
                    id: "game_upsells",
                    name: "Game Upsells",
                    group: nh.fu.GAMES,
                    tags: ["dismissible", "cooldown", "dcf"],
                    render: () => (0, r.jsx)(aW, {}),
                }),
                e.push({
                    id: "slayer_storefront",
                    name: "Slayer Storefront",
                    group: nh.fu.GAMES,
                    render: () => (0, r.jsx)(na, {}),
                }),
                e.push({
                    id: "game_profile",
                    name: "Game Profile",
                    group: nh.fu.GAMES,
                    render: () => (0, r.jsx)(aT, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: nh.fu.USERS,
                    render: () => (0, r.jsx)(pS, {}),
                }),
                e.push({ id: "clips", name: "Clips", group: nh.fu.AUDIO_VIDEO, render: () => (0, r.jsx)(H, {}) })),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                e.push({
                    id: "partner_perks",
                    name: "Partner Perks",
                    group: nh.fu.PREMIUM,
                    tags: ["xgp"],
                    render: () => (0, r.jsx)(d0, {}),
                }),
            e.push({
                id: "rive",
                name: "Rive",
                group: nh.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(uI, {}),
            }),
            e.push({
                id: "gradient-contrast",
                name: "Tab Hover Gradient",
                group: nh.fu.UI,
                tags: ["accessibility", "contrast", "gradient", "wcag"],
                render: () => (0, r.jsx)(rx, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: nh.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(rq, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: nh.fu.UI,
                tags: ["i18n", "localization", "messages"],
                render: () => (0, r.jsx)(rL, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: nh.fu.UI,
                tags: ["tokens", "themes", "palette"],
                render: () => (0, r.jsx)(l_, {}),
            }),
            e.push({ id: "design_toggles", name: "Design Toggles", group: nh.fu.UI, render: () => (0, r.jsx)(lJ, {}) }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: nh.fu.UI,
                render: () => (0, r.jsx)(ut, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: nh.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(s2, { devSettingsCategory: ns.xW.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: nh.fu.USERS,
                tags: ["dm", "nux", "system dm"],
                render: () => (0, r.jsx)(oo, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: nh.fu.EXPERIMENTS,
                render: () => (0, r.jsx)(s2, { devSettingsCategory: ns.xW.REPORTING }),
            }),
            e.push({ id: "permissions", name: "Permissions", group: nh.fu.USERS, render: () => (0, r.jsx)(cY, {}) }),
            e.push({
                id: "modals",
                name: "Modals",
                group: nh.fu.UI,
                tags: ["dialogs", "popups"],
                render: () => (0, r.jsx)(oj, {}),
            }),
            e.push({
                id: "menus",
                name: "Menus",
                group: nh.fu.UI,
                tags: ["contextmenus", "popout"],
                render: () => (0, r.jsx)(r0, {}),
            }),
            e.push({
                id: "toasts",
                name: "Toasts",
                group: nh.fu.UI,
                tags: ["notifications", "snackbar", "mana"],
                render: () => (0, r.jsx)(hr, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: nh.fu.UI,
                tags: ["verification", "safety flow"],
                render: () => (0, r.jsx)(rW, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: nh.fu.USERS,
                tags: ["friends"],
                render: () => (0, r.jsx)(nO, {}),
            }),
            e.push({
                id: "channel_affinity",
                name: "Channel Affinity",
                group: nh.fu.USERS,
                tags: ["channels"],
                render: () => (0, r.jsx)(lC, {}),
            }),
            nn.A.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: nh.fu.USERS,
                    render: () => (0, r.jsx)(au, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: nh.fu.USERS,
                    render: () => (0, r.jsx)(a0, {}),
                })),
            e.push({ id: "dcf_overrides", name: "DCF Overrides", group: nh.fu.DCF, render: () => (0, r.jsx)(lH, {}) }),
            e.push({ id: "dcf_events", name: "DCF Events", group: nh.fu.DCF, render: () => (0, r.jsx)(lT, {}) }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: nh.fu.EXPERIMENTS,
                tags: ["coachmarks", "nux", "onboarding"],
                render: () => (0, r.jsx)(rT, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: nh.fu.PREMIUM,
                tags: ["nitro", "tenure", "badges", "level up", "perks", "sources", "bitmask"],
                render: () => (0, r.jsx)(cU, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: nh.fu.PREMIUM,
                    tags: ["discounts", "trials", "reverse trials", "churn"],
                    render: () => (0, r.jsx)(oM, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: nh.fu.BILLING,
                    tags: ["stripe", "cards", "test cards"],
                    render: () => (0, r.jsx)(cC, {}),
                }),
                e.push({
                    id: "orders",
                    name: "Orders",
                    group: nh.fu.BILLING,
                    tags: ["orders"],
                    render: () => (0, r.jsx)(oF, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: nh.fu.PREMIUM,
                    tags: ["nitro", "reverse trial"],
                    render: () => (0, r.jsx)(xr, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: nh.fu.PREMIUM,
                    tags: ["entitlements", "quests"],
                    render: () => (0, r.jsx)(sV, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: nh.fu.PREMIUM,
                tags: ["friends", "anniversary"],
                render: () => (0, r.jsx)(iV, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: nh.fu.AUDIO_VIDEO,
                tags: ["noise cancellation", "audio", "vad"],
                render: () => (0, r.jsx)(hY, {}),
            }),
            e.push({
                id: "av_overrides",
                name: "Overrides",
                group: nh.fu.AUDIO_VIDEO,
                tags: ["video", "capture", "encoder", "golive"],
                render: () => (0, r.jsx)(hw, {}),
            }),
            e.push({
                id: "batch_audio_processor",
                name: "Batch Audio Processor",
                group: nh.fu.AUDIO_VIDEO,
                tags: ["krisp", "noise cancellation", "wav", "batch", "audio processing", "ingest"],
                render: () => (0, r.jsx)(hL, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: nh.fu.BOOSTING,
                tags: ["boosting", "powerups", "server tag"],
                render: () => (0, r.jsx)(rA, {}),
            }),
            e.push({ id: "game_server", name: "Game Server", group: nh.fu.BOOSTING, render: () => (0, r.jsx)(sZ, {}) }),
            e.push({
                id: "language",
                name: "Language",
                group: nh.fu.UI,
                tags: ["locale"],
                render: () => (0, r.jsx)(rU, {}),
            }),
            e.push({
                id: "user_settings",
                name: "User Settings",
                group: nh.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(p0, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: nh.fu.QUESTS,
                render: () => (0, r.jsx)(a6, {}),
            }),
            e.push({
                id: "virtual_currency_config",
                name: "Virtual Currency Config",
                group: nh.fu.QUESTS,
                render: () => (0, r.jsx)(hg, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: nh.fu.BILLING,
                render: () => (0, r.jsx)(pP, {}),
            }),
            e.push({
                id: "quest_preview",
                name: "Quest Preview",
                group: nh.fu.QUESTS,
                render: () => (0, r.jsx)(x3, {}),
            }),
            e.push({
                id: "profile_theme_override",
                name: "Profile Theme Override",
                group: nh.fu.USERS,
                render: () => (0, r.jsx)(uo, {}),
            }),
            e.push({
                id: "application_widget",
                name: "Application Widget",
                group: nh.fu.USERS,
                render: () => (0, r.jsx)(lj, {}),
            }),
            e.push({
                id: "developer_portal",
                name: "Developer Portal",
                group: nh.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(sn, {}),
            }),
            e
        );
    }, []);
}
