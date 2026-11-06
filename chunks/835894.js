(a.d(t, { x: () => x2 }), a(321073));
var n,
    l,
    i,
    s,
    r = a(477900),
    o = a(582128),
    d = a(855986),
    c = a(314116),
    u = a(270003),
    m = a(143129),
    h = a(532446),
    p = a(821609),
    g = a(834730),
    x = a(95362),
    v = a(611677),
    b = a(404778),
    j = a(691885),
    f = a(95477),
    y = a(442433),
    E = a(77729),
    C = a(73153),
    S = a(865116);
function _(e, t) {
    let a = "boolean" == typeof t ? t : !S.Ay.get(e);
    C.h.dispatch({ type: "DEV_TOOLS_DEV_SETTING_SET", toggle: e, value: a });
}
var N = a(397369),
    A = a(905552),
    k = a(754712),
    I = a(157257),
    D = a(507868),
    T = a(419490),
    R = a(489496),
    O = a(325392),
    w = a(574206),
    M = a(564973),
    P = a(192308),
    L = a(945810);
let U = { enabled: !1 };
function G(e) {
    var t;
    return (
        (t = { variant: e, source: "devtools" }),
        (0, P.mM)(
            async () => {
                let { default: e } = await Promise.all([a.e(885653), a.e(220411)]).then(a.bind(a, 633906));
                return (a) => (0, r.jsx)(e, { ...a, ...t });
            },
            { modalKey: "clips-ea-announcement" },
        )
    );
}
(0, L.mj)({
    name: "2026-11-autoclips-ea-upsell",
    kind: "user",
    defaultConfig: U,
    variations: { 0: U, 1: { enabled: !0 } },
});
var B = a(227628),
    F = a(468550),
    $ = a(196765);
let V = (0, $.v)(() => ({ enabled: !1, pending: null, lastResult: null }));
function W(e) {
    V.setState({ enabled: e });
}
function H(e) {
    V.setState({ pending: e });
}
function z(e) {
    V.setState({ lastResult: e });
}
var K = a(781710),
    Y = a(696016),
    q = a(264572).hp;
function J() {
    let e = V((e) => e.enabled),
        t = V((e) => e.pending),
        a = V((e) => e.lastResult),
        n = o.useCallback(async (e, t, a, n) => {
            let l = k.Ay.getMediaEngine();
            if (null == l.setClipsPerfMonitoring) return (z("setClipsPerfMonitoring unsupported in this build"), null);
            H(n);
            try {
                let n = await l.setClipsPerfMonitoring(e, t, a);
                return (W(n.enabled), n);
            } catch (e) {
                return (z(`${n} failed: ${e instanceof Error ? e.message : String(e)}`), null);
            } finally {
                H(null);
            }
        }, []),
        l = o.useCallback(
            async (t) => {
                W(t);
                let a = await n(t, !1, !1, t ? "enable" : "disable");
                null != a ? z(`recorder ${a.enabled ? "enabled" : "disabled"}`) : W(e);
            },
            [n, e],
        ),
        i = o.useCallback(async () => {
            let t = await n(e, !0, !1, "save");
            if (null == t) return;
            if ("" === t.html) return void z("save: server returned empty html");
            let a = `clips-perf-${new Date().toISOString().replace(/[:.]/g, "-")}.html`;
            try {
                let e = q.from(t.html, "utf8"),
                    n = await E.A.fileManager.saveWithDialog2(e, a);
                if (null != n && !0 === n.canceledByUser) return void z("save: canceled");
                z(`saved ${t.eventCount} events (${t.html.length} bytes)`);
            } catch (e) {
                z(`save failed: ${e instanceof Error ? e.message : String(e)}`);
            }
        }, [n, e]),
        s = o.useCallback(async () => {
            let t = await n(e, !1, !0, "clear");
            null != t && z(`cleared ${t.eventCount} events`);
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
                    (0, r.jsx)(p.$, { text: "Save as file...", disabled: null != t, onClick: i }),
                    (0, r.jsx)(p.$, { text: "Clear recording", variant: "secondary", disabled: null != t, onClick: s }),
                ],
            }),
            (null != t || null != a) &&
                (0, r.jsx)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-muted",
                    children: null != t ? `working: ${t}...` : a,
                }),
        ],
    });
}
let Q = [
    { label: "Laughter Model", flag: Y.pZ.LAUGHTER },
    { label: "Shouting Model", flag: Y.pZ.SHOUTING },
    { label: "Events", flag: Y.pZ.GAME_EVENTS },
];
function X() {
    let e = (0, d.bG)([D.A], () => D.A.isStaffBypassDisabled()),
        t = (0, d.bG)([D.A], () => D.A.isStaffBypassActive()),
        a = (0, d.bG)([D.A], () => D.A.hasLoadedCapabilities()),
        n = (0, d.bG)([D.A], () => D.A.getGameCapabilities().size),
        l = (0, d.bG)([N.Ay], () => N.Ay.getVisibleGame()),
        i = l?.id,
        s = (0, d.bG)([D.A], () => D.A.getCapabilities(i), [i]),
        o = (0, d.bG)([D.A], () => null != i && D.A.getGameCapabilities().has(i), [i]),
        c = (0, d.bG)([D.A], () => D.A.isGameAllowed(i), [i]);
    return (0, r.jsxs)(u.n, {
        label: "Autoclipping Game Capabilities",
        children: [
            (0, r.jsx)(m.d, {
                label: "Ignore staff bypass",
                description:
                    "Staff normally get autoclipping for every game. Turn this on to be treated as a regular user, so autoclipping follows the server capabilities map. Resets to off each time Discord launches.",
                checked: e,
                onChange: R.jE,
            }),
            (0, r.jsxs)(g.E, {
                variant: "body-md/normal",
                children: ["capabilities: ", a ? `loaded, ${n} game(s)` : "not loaded yet"],
            }),
            (0, r.jsxs)(g.E, { variant: "body-md/normal", children: ["staff bypass active: ", String(t)] }),
            null == l
                ? (0, r.jsx)(g.E, { variant: "body-md/normal", children: "no visible game running" })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsxs)(g.E, { variant: "body-md/normal", children: [l.name, " (", l.id, ")"] }),
                          (0, r.jsxs)(g.E, {
                              variant: "body-md/normal",
                              children: ["autoclipping: ", c ? "Yes" : "No"],
                          }),
                          (0, r.jsxs)(g.E, {
                              variant: "body-md/normal",
                              children: ["in capabilities map: ", o ? "Yes" : "No", " (bitmask ", s, ")"],
                          }),
                          Q.map((e) => {
                              let { label: t, flag: a } = e;
                              return (0, r.jsxs)(
                                  g.E,
                                  { variant: "body-md/normal", children: [t, ": ", (s & a) != 0 ? "Yes" : "No"] },
                                  t,
                              );
                          }),
                          !o &&
                              c &&
                              (0, r.jsx)(g.E, {
                                  variant: "body-sm/normal",
                                  color: "text-muted",
                                  children:
                                      'This game isn\'t in the map \u2014 autoclipping is on via the staff bypass, so every capability above reads No. Turn on "Ignore staff bypass" to see what a regular user gets.',
                              }),
                      ],
                  }),
            (0, r.jsx)(p.$, {
                text: "refetch capabilities",
                variant: "secondary",
                disabled: null == i,
                onClick: () => {
                    null != i && M.b.refetchMany([i]);
                },
            }),
        ],
    });
}
function Z(e, t) {
    let a = new w.k(e);
    for (let e of t) a.recordSavedClip(e);
    return (a.end(), a);
}
function ee() {
    let e = (0, d.bG)([S.Ay], () => S.Ay.get("clips_ignore_platform_requirement")),
        t = (0, B.MZ)((e) => e.isOpen),
        n = (0, F.sY)((e) => e.isOpen),
        [l, i] = o.useState(3),
        s = o.useCallback((e) => {
            let t = Object.values(T.Ay.getClips()),
                a = t.find((e) => null != e.applicationId);
            if (a?.applicationId == null) return;
            let n = a.applicationId,
                l = t.filter((e) => e.applicationId === n).slice(0, e);
            (T.Ay.devSetLastClipsSession(Z(n, l)), (0, F.M8)(n));
        }, []),
        C = o.useCallback(
            (e) => {
                e ? s(l) : (0, F.kF)();
            },
            [s, l],
        ),
        k = o.useCallback(() => {
            let e = Object.values(T.Ay.getClips()),
                t = (0, A.A)(N.Ay, I.A),
                a =
                    (t?.id != null ? e.find((e) => e.applicationId === t.id) : void 0) ??
                    e.find((e) => null != e.applicationId);
            if (a?.applicationId == null) return;
            let n = a.applicationId,
                l = e.filter((e) => e.applicationId === n).slice(0, 10);
            (T.Ay.devSetLastClipsSession(Z(n, l)), (0, B.w9)());
        }, []),
        D = o.useCallback(
            (e) => {
                e ? k() : (0, B.yj)();
            },
            [k],
        ),
        w = o.useCallback(
            (e) => {
                (i(e), n && s(e));
            },
            [s, n],
        ),
        [M, P] = o.useState(Y.rb.KILL),
        [L, U] = o.useState(1),
        [$, V] = o.useState(""),
        W = (0, d.bG)([T.Ay], () => T.Ay.isAutoStashEnabled()),
        H = o.useCallback((e) => {
            e
                ? (0, c.A)({
                      title: "Stash all gaming sessions?",
                      subtitle:
                          "Every gaming session will be stashed to your Desktop (inside the `decider_stash` folder) when it ends. This setting is not persistent \u2014 it resets to off each time Discord launches.",
                      confirmText: "Enable",
                      variant: "primary",
                      onConfirm: () => {
                          R.mN(!0);
                      },
                  })
                : R.mN(!1);
        }, []),
        [z, q] = o.useState([]),
        [Q, ee] = o.useState(void 0),
        et = o.useCallback((e) => {
            (q(e), ee((t) => (null != t && e.includes(t) ? t : e[0])));
        }, []),
        ea = o.useCallback(async () => {
            let e = E.A?.clips?.debugListStashedClipDeciderSessions;
            null != e && et(await e());
        }, [et]);
    o.useEffect(() => {
        let e = !0,
            t = E.A?.clips?.debugListStashedClipDeciderSessions;
        if (null != t)
            return (
                t().then((t) => {
                    e && et(t);
                }),
                () => {
                    e = !1;
                }
            );
    }, [et]);
    let en = (0, d.bG)([T.Ay], () => T.Ay.getState().clipsSettings.enableAutoclipping),
        el = (0, d.bG)([T.Ay], () => T.Ay.getEnableAutoclipping());
    return (0, r.jsx)(x.Ip, {
        children: (0, r.jsxs)(v.l, {
            children: [
                (0, r.jsxs)(u.n, {
                    label: "EA announcement",
                    children: [
                        (0, r.jsx)(p.$, {
                            text: "Open EA announcement: expressive (Nitro)",
                            onClick: () => G("expressive_nitro"),
                        }),
                        (0, r.jsx)(p.$, {
                            text: "Open EA announcement: mode picker (Nitro)",
                            onClick: () => G("mode_picker"),
                        }),
                        (0, r.jsx)(p.$, {
                            text: "Open EA announcement: expressive (non-Nitro)",
                            onClick: () => G("expressive_non_nitro"),
                        }),
                    ],
                }),
                (0, r.jsx)(u.n, {
                    label: "Capture mode menu",
                    children: (0, r.jsx)(p.$, {
                        text: "Open capture mode menu",
                        onClick: (e) =>
                            (0, y.L3)(e, async () => {
                                let { default: e } = await a.e(827037).then(a.bind(a, 707116));
                                return (t) => (0, r.jsx)(e, { ...t });
                            }),
                    }),
                }),
                (0, r.jsx)(u.n, {
                    label: "Platform",
                    children: (0, r.jsx)(m.d, {
                        label: S.gO.clips_ignore_platform_requirement.label,
                        description:
                            "Show Clips settings and the library on unsupported platforms. Nitro is still required. Capture and export remain unsupported. Persists across restarts.",
                        checked: e,
                        onChange: (e) => _("clips_ignore_platform_requirement", e),
                    }),
                }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(u.n, {
                    label: "Send Test Signals",
                    children: (0, r.jsxs)(h.M, {
                        children: [
                            (0, r.jsx)(p.$, { text: "Manual", onClick: () => R.Ts({ type: Y.Gy.MANUAL }) }),
                            (0, r.jsx)(p.$, {
                                text: "Distributed",
                                onClick: () =>
                                    R.Ts({
                                        type: Y.Gy.DISTRIBUTED,
                                        remoteTriggerUserId: "123",
                                        remoteTriggerClipId: "456",
                                    }),
                            }),
                            (0, r.jsx)(p.$, {
                                text: "Shouting",
                                onClick: () => R.Ts({ type: Y.Gy.SHOUTING, userId: "123", confidence: 1 }),
                            }),
                            (0, r.jsx)(p.$, { text: "Laughter", onClick: () => O.A.debugCreateRankableLaughterClip() }),
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
                                    value: M,
                                    onSelectionChange: (e) => P(e),
                                    options: [
                                        { id: "kill", label: "Kill", value: Y.rb.KILL },
                                        { id: "multikill", label: "Multikill", value: Y.rb.MULTIKILL },
                                        { id: "death", label: "Death", value: Y.rb.DEATH },
                                        { id: "assist", label: "Assist", value: Y.rb.ASSIST },
                                        { id: "item", label: "Item", value: Y.rb.ITEM },
                                        { id: "victory", label: "Victory", value: Y.rb.VICTORY },
                                        { id: "defeat", label: "Defeat", value: Y.rb.DEFEAT },
                                        { id: "level_up", label: "Level Up", value: Y.rb.LEVEL_UP },
                                        { id: "treasure", label: "Treasure", value: Y.rb.TREASURE },
                                        { id: "objective_kill", label: "Objective Kill", value: Y.rb.OBJECTIVE_KILL },
                                    ],
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(j.l, {
                                    label: "Importance",
                                    value: L,
                                    onSelectionChange: U,
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
                            label: "Description (optional)",
                            value: $,
                            onChange: V,
                            placeholder: "e.g., Killed enemy ADC in bot lane",
                        }),
                        (0, r.jsx)(p.$, {
                            text: "Create Game Event",
                            onClick: () => {
                                R.Ts({ type: Y.Gy.GAME_EVENT, eventType: M, importance: L, description: $ });
                            },
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Auto-stash decider data",
                            description:
                                "Stashes every gaming session to your Desktop when it ends. Resets to off on each Discord launch.",
                            checked: W,
                            onChange: H,
                        }),
                        (0, r.jsx)(j.l, {
                            label: "Stash session (re-run ranking)",
                            value: Q,
                            onSelectionChange: (e) => ee(e),
                            options: z.map((e) => ({ id: e, label: e, value: e })),
                            placeholder: 0 === z.length ? "No stashed sessions" : "Most recent",
                            disabled: 0 === z.length,
                            selectionMode: "single",
                            fullWidth: !0,
                        }),
                        (0, r.jsxs)(h.M, {
                            children: [
                                (0, r.jsx)(p.$, {
                                    text: "re-run ranking",
                                    onClick: () => {
                                        O.i.debugRerunRanking(Q).catch((e) => {
                                            Y.GU.error("re-run ranking failed", e);
                                        });
                                    },
                                }),
                                (0, r.jsx)(p.$, {
                                    text: "run automontage",
                                    onClick: () => {
                                        O.i.debugRunAutoMontage(Q).catch((e) => {
                                            Y.GU.error("run automontage failed", e);
                                        });
                                    },
                                }),
                                (0, r.jsx)(p.$, {
                                    text: "refresh sessions",
                                    variant: "secondary",
                                    onClick: () => {
                                        ea();
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(u.n, { label: "Clip Metadata Tool", children: (0, r.jsx)(K.A, {}) }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(J, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(X, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsxs)(u.n, {
                    label: "Reminder UI",
                    children: [
                        (0, r.jsx)(m.d, {
                            label: "Clips Quick Bar",
                            description:
                                "Force-show the inline quick bar above the account panel. Fabricates a session (up to 10 clips) from your recent clips so it can be tested without capturing a real game session.",
                            checked: t,
                            onChange: D,
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Clips Reminder",
                            description:
                                "Force-show the post-session ClipsReminder panel. Fabricates a session from your most recent clips (and game) so it can be tested without capturing a real game session.",
                            checked: n,
                            onChange: C,
                        }),
                        (0, r.jsx)(j.l, {
                            label: "Clip count",
                            value: l,
                            onSelectionChange: w,
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
                                (0, r.jsxs)(g.E, {
                                    variant: "body-md/normal",
                                    children: ["autoclippingEnabled (internal): ", String(en)],
                                }),
                                (0, r.jsxs)(g.E, {
                                    variant: "body-md/normal",
                                    children: ["autoclippingEnabled (exposed): ", String(el)],
                                }),
                                (0, r.jsx)(p.$, {
                                    text: "unset autoclipping default",
                                    onClick: () => {
                                        R.uL(void 0, !1);
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
var et = a(503698),
    ea = a.n(et),
    en = a(939249),
    el = a(683071),
    ei = a(534514),
    es = a(538064),
    er = a(265059),
    eo = a(869146);
(a(323874), a(14289), a(35956));
var ed = a(789645),
    ec = a(110574),
    eu = a(65593),
    em = a(528689),
    eh = a(122088),
    ep = a(569386),
    eg = a(287809),
    ex = a(901139),
    ev = a(641886),
    eb = a(780898),
    ej = a(652215),
    ef = a(101150),
    ey = a(427262);
function eE(e) {
    let { nameplate: t } = e,
        a = (0, d.bG)([eg.default], () => eg.default.getCurrentUser()),
        n = ey.Ay.useName(a) ?? "";
    return (0, r.jsx)(ef.g, {
        username: n,
        selfMute: !1,
        selfDeaf: !1,
        serverMute: !1,
        serverDeaf: !1,
        suppress: !1,
        speaking: !1,
        playingSoundboard: !1,
        streaming: !1,
        status: ej.clD.ONLINE,
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
var eC = a(736653),
    eS = a(653523),
    e_ = a(475601);
function eN(e) {
    let { selected: t, onSelect: a } = e,
        n = (0, eC.Ay)();
    return (0, r.jsxs)("div", {
        className: e_.N,
        children: [
            (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "Preselected Gradient" }),
            (0, r.jsx)("div", {
                className: e_.Z,
                children: ev.Z6.map((e) => {
                    let l = n !== ej.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
                        i = t === e.name;
                    return (0, r.jsx)(
                        eS.S4,
                        { onSelect: () => a(e), style: { background: l }, name: e.name, isSelected: i },
                        e.name,
                    );
                }),
            }),
        ],
    });
}
var eA = a(181254),
    ek = a(95701),
    eI = a(331884);
function eD(e) {
    let { selected: t, nameplate: a } = e,
        n = (0, eI.i)(),
        l = new ek.cq({ id: "0", type: ej.rbe.DM, name: "self", guild_id: "0", recipients: [n.id] });
    return (0, r.jsx)(eA.th, { selected: t, channel: l, user: n, nameplate: a });
}
var eT = a(698638),
    eR = a(52940);
function eO() {
    let [e, t] = (0, o.useState)(!1),
        [a, n] = (0, o.useState)(!1),
        [l, i] = (0, o.useState)(null),
        { node: s } = (0, eh.Ay)(ep.k, ""),
        d = (0, ex.Ay)((e) => e.toolsCache),
        { setToolsCache: c, removeToolsCache: u } = (0, ex.DE)(),
        { setImgCache: m } = (0, ex.TW)(),
        h = (0, o.useCallback)(
            (e) => {
                let t = d[e];
                null != t
                    ? i({ previewToolKey: t.url, palette: t.palette, skuId: "0" })
                    : i((t) =>
                          null == t ? { previewToolKey: e, palette: ev.Wj, skuId: "0" } : { ...t, previewToolKey: e },
                      );
            },
            [d],
        ),
        x = (0, o.useCallback)((e) => {
            i((t) => (null == t ? null : { ...t, palette: e }));
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
                className: eR.ne,
                children: [
                    (0, r.jsxs)("div", {
                        className: eR.gO,
                        children: [
                            (0, r.jsx)(p.$, {
                                size: "sm",
                                onClick: () => {
                                    (n(!1), t((e) => !e));
                                },
                                variant: "secondary",
                                text: "Toggle Themes",
                            }),
                            (0, r.jsx)(p.$, {
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
                        className: eR.uQ,
                        children: [
                            e && (0, r.jsx)(em.A, { node: s }),
                            a &&
                                (0, r.jsx)(eN, {
                                    selected: l?.palette?.name,
                                    onSelect: (e) => {
                                        (l?.previewToolKey != null && c(l.previewToolKey, l.previewToolKey, e), x(e));
                                    },
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: eR.iW,
                children: [
                    (0, r.jsx)(ew, { nameplate: l }, l?.palette?.name),
                    (0, r.jsxs)("div", {
                        className: eR.Uo,
                        children: [
                            (0, r.jsx)(g.E, {
                                variant: "body-sm/semibold",
                                children: "Drag background image to screen",
                            }),
                            (0, r.jsx)(eu.A, {
                                title: "upload image",
                                description: "upload the background",
                                icons: eT.xi,
                                onDrop: async (e) => {
                                    let t = URL.createObjectURL(e[0]),
                                        a = e[0],
                                        n = await a.arrayBuffer();
                                    (m(t, t, (0, eb.nI)(n)), c(t, t, ev.Wj));
                                },
                            }),
                            (0, r.jsx)("div", {
                                className: eR.is,
                                children: Object.values(d).map((e) => {
                                    let { url: t } = e;
                                    return (0, r.jsx)(eM, { src: t, onSetStatic: h, removeAsset: v }, t);
                                }),
                            }),
                            (0, r.jsx)(eL, {
                                label: "gradient override",
                                onChange: (e) => x({ name: ev.AK, darkBackground: e, lightBackground: e }),
                            }),
                            (0, r.jsx)(eP, { label: "set", onClick: () => {} }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ew(e) {
    let { nameplate: t } = e,
        [a, n] = (0, o.useState)(320),
        l = (0, o.useRef)(null),
        i = (0, o.useRef)(null),
        s = (0, o.useRef)(null),
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
                    (null != i.current && (t.removeEventListener("mousemove", i.current), (i.current = null)),
                        null != s.current && (t.removeEventListener("mouseup", s.current), (s.current = null)));
                }
                ((d.current = t),
                    (i.current = a),
                    (s.current = n),
                    t.addEventListener("mousemove", a),
                    t.addEventListener("mouseup", n));
            },
            [c],
        );
    return (
        (0, o.useEffect)(
            () => () => {
                (null != i.current && (d.current.removeEventListener("mousemove", i.current), (i.current = null)),
                    null != s.current && (d.current.removeEventListener("mouseup", s.current), (s.current = null)));
            },
            [],
        ),
        (0, r.jsx)(x.Ip, {
            className: eR.Fp,
            orientation: "horizontal",
            children: (0, r.jsxs)("div", {
                ref: l,
                className: eR.ey,
                style: { width: `${a}px` },
                children: [
                    (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "Memberlist" }),
                    (0, r.jsx)(eU, { nameplate: t }),
                    (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "DMs" }),
                    (0, r.jsx)(eG, { nameplate: t }),
                    (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "RTC" }),
                    (0, r.jsx)(eB, { nameplate: t }),
                    (0, r.jsx)("div", { className: eR.Di, onMouseDown: u }),
                ],
            }),
        })
    );
}
function eM(e) {
    let { src: t, onSetStatic: a, removeAsset: n } = e;
    return (0, r.jsxs)("div", {
        className: eR.xO,
        children: [
            (0, r.jsx)(en.D, {
                onClick: () => n(t),
                className: eR.yV,
                children: (0, r.jsx)(ed.XSmallIcon, { size: "custom", width: 16, height: 16, name: "x" }),
            }),
            (0, r.jsx)("img", { className: eR.Ez, src: t, alt: "" }),
            (0, r.jsx)("div", {
                className: eR.Lu,
                children: (0, r.jsx)(p.$, {
                    onClick: () => a(t),
                    size: "sm",
                    variant: "secondary",
                    text: "set nameplate",
                }),
            }),
        ],
    });
}
function eP(e) {
    let { label: t, onClick: a } = e;
    return (0, r.jsxs)("div", {
        className: eR.Uu,
        children: [
            (0, r.jsx)(g.E, { variant: "body-sm/normal", children: "coming soon" }),
            (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: t, disabled: !0, onClick: a }),
        ],
    });
}
function eL(e) {
    let { label: t, onChange: a } = e;
    return (0, r.jsxs)("div", {
        className: eR.Im,
        children: [
            (0, r.jsx)(g.E, { variant: "body-sm/normal", children: t }),
            (0, r.jsx)("input", {
                onChange: (e) => {
                    a(e.target.value);
                },
                className: eR.QL,
                placeholder: "#000000",
            }),
        ],
    });
}
function eU(e) {
    let { nameplate: t } = e,
        a = (0, d.bG)([eg.default], () => eg.default.getCurrentUser());
    return (0, r.jsx)("div", {
        className: eR.VH,
        children: (0, r.jsxs)("div", {
            className: eR.H1,
            children: [
                (0, r.jsx)(g.E, { className: eR.Pf, variant: "body-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(ec.A, { nameplate: t, user: a, currentUser: a }),
                (0, r.jsx)(g.E, { className: eR.Pf, variant: "body-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(ec.A, { nameplate: t, selected: !0, user: a, currentUser: a }),
                        (0, r.jsx)(ec.A, { selected: !0, user: a, currentUser: a }),
                    ],
                }),
            ],
        }),
    });
}
function eG(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: eR.VH,
        children: (0, r.jsxs)("div", {
            className: eR.H1,
            children: [
                (0, r.jsx)(g.E, { className: eR.Pf, variant: "body-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(eD, { nameplate: t }),
                (0, r.jsx)(g.E, { className: eR.Pf, variant: "body-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(eD, { selected: !0, nameplate: t }), (0, r.jsx)(eD, { selected: !0 })],
                }),
            ],
        }),
    });
}
function eB(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: eR.VH,
        children: (0, r.jsx)("div", { className: eR.X2, children: (0, r.jsx)(eE, { nameplate: t }) }),
    });
}
a(508300);
var eF = a(115560),
    e$ = a(157559),
    eV = a(307955),
    eW = a(993408),
    eH = a(969951),
    ez = a(559474),
    eK = a(816866),
    eY = a(87558),
    eq = a(575593),
    eJ = a(631903),
    eQ = a(224640),
    eX = a(408278),
    eZ = a(972213),
    e0 = a(43990),
    e1 = a(646514),
    e2 = a(231723),
    e3 = a(900686),
    e6 = a(641318),
    e5 = a(927071),
    e8 = a(435558),
    e4 = a.n(e8),
    e9 = a(855915),
    e7 = a(971217);
let te = (e) => {
    let { profileEffect: t } = e,
        a = o.useMemo(() => (0, e8.cloneDeep)(t), [t]),
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
        i = "debug",
        { layerData: s } = (0, e9.A)({ skuId: i, layers: l.effects });
    return (0, r.jsx)(e7.p, { profileEffect: l, skuId: i, layerData: s });
};
var tt = a(586886),
    ta = a(778765);
let tn =
        "https://cdn.discordapp.com/assets/content/ad2a252a6866e1ecb3bab521e2baaabbf13ab2d1ecaa8af67862c53c91f76761.png",
    tl = { [eY.qH.THUMBNAIL]: null, [eY.qH.STATIC]: null, [eY.qH.REDUCED_MOTION]: null },
    ti = "debug",
    ts = "reduced-motion-preview-modal";
function tr(e) {
    let { transitionState: t, onClose: a, frameSrc: n, theme: l } = e;
    return (0, r.jsx)(eQ.d, {
        transitionState: t,
        size: "md",
        onClose: a,
        maxHeight: "viewport",
        children: (0, r.jsxs)("div", {
            className: tt.Xd,
            children: [
                (0, r.jsx)("div", {
                    className: tt.y6,
                    children: (0, r.jsx)(eX.K, {
                        "aria-label": "Close",
                        onClick: a,
                        icon: eZ.XLargeIcon,
                        variant: "overlay-secondary",
                        size: "sm",
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: tt.rU,
                    children: [
                        (0, r.jsx)(e0.N, {
                            theme: l,
                            children: (e) =>
                                (0, r.jsx)("img", { src: tn, alt: "", className: ea()(tt.aM, e), "aria-hidden": !0 }),
                        }),
                        null != n &&
                            "" !== n &&
                            (0, r.jsx)("img", { src: n, className: tt.SD, alt: "Reduced motion preview" }),
                    ],
                }),
            ],
        }),
    });
}
function to(e) {
    let { type: t, frame: a, theme: n, onClear: l } = e,
        i = t === eY.qH.REDUCED_MOTION,
        s = i ? tn : ta.A,
        o = (0, r.jsx)(e0.N, {
            theme: n,
            children: (e) =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("img", { src: s, alt: "", className: ea()(tt.aM, e), "aria-hidden": !0 }),
                        a?.src != null &&
                            "" !== a.src &&
                            (0, r.jsx)("img", { src: a.src, className: ea()(tt.SD, e), alt: "" }),
                    ],
                }),
        });
    return (0, r.jsxs)("div", {
        className: tt.pK,
        children: [
            (0, r.jsx)(ei.D, { variant: "heading-xs/semibold", children: t }),
            i
                ? (0, r.jsx)(en.D, {
                      className: ea()(tt.zd, tt.eB),
                      onClick: function () {
                          (0, P.kB)(ts)
                              ? (0, P.Oo)(ts)
                              : (0, P.mM)(
                                    () =>
                                        Promise.resolve((e) =>
                                            (0, r.jsx)(tr, { ...e, frameSrc: a?.src ?? null, theme: n }),
                                        ),
                                    { modalKey: ts, onCloseRequest: () => (0, P.Oo)(ts) },
                                );
                      },
                      children: o,
                  })
                : (0, r.jsx)("div", { className: tt.zd, children: o }),
            null != a && (0, r.jsx)(p.$, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: l }),
        ],
    });
}
let td = (e) => {
        let { profileEffect: t } = e,
            { upsertProfileEffect: a } = (0, eK.wu)(),
            n = (0, d.bG)([eg.default], () => eg.default.getCurrentUser()),
            [l, i] = o.useState(!0),
            s = o.useRef({}),
            [c, u] = o.useState(!1),
            [m, h] = o.useState(!1),
            [x, v] = o.useState(8),
            [b, j] = o.useState([]),
            [f, y] = o.useState(tl),
            E = o.useRef([]),
            [C, S] = o.useState(t.name),
            _ = C.toLowerCase().replace(/\s+/g, "_"),
            N = o.useMemo(
                () => ({
                    type: eq.R.PROFILE_EFFECT,
                    skuId: ti,
                    title: ti,
                    description: ti,
                    accessibilityLabel: ti,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: b,
                    animationType: eJ.l.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [b],
            ),
            A = c ? e1.A.themes.DARK : e1.A.themes.LIGHT;
        function k(e) {
            let t = e.currentTarget.files;
            return null == t ? null : t[0];
        }
        function I(e, t) {
            let a = k(t);
            null != a &&
                (0, eY.Mz)(a, (t) => {
                    y((n) => ({ ...n, [e]: (0, eY.GT)(t, a) }));
                });
        }
        (o.useEffect(() => {
            let e = t.effects;
            e.length > 0 &&
                j(
                    e.map((e) => ({
                        ...e,
                        name: e.name ?? (0, eY.XG)(e.src),
                        randomizedSources: e.randomizedSources?.map((e) => ({
                            ...e,
                            filename: e.filename ?? (0, eY.XG)(e.src),
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
                                let e = (0, eY.fB)(a.base64);
                                ((a.src = e), E.current.push(e), y((e) => ({ ...e, [t]: a })));
                            }
                        }
                    });
            }, [t.stillFrames]));
        let D = { profileEffect: t, upsertProfileEffect: a },
            T = o.useRef(D);
        return (o.useEffect(() => {
            T.current = D;
        }),
        o.useEffect(() => {
            let { profileEffect: e, upsertProfileEffect: t } = T.current;
            e.readonly || t({ skuId: e.skuId, name: C, effects: b, stillFrames: f });
        }, [b, f, C]),
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
                  className: tt.zr,
                  children: [
                      (0, r.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, r.jsx)(eV.A, {
                                  ref: (e) => {
                                      s.current.animated = e;
                                  },
                                  onChange: function (e) {
                                      let t = k(e);
                                      null != t &&
                                          (0, eY.Mz)(t, async (e) => {
                                              let a = await (0, eY.Ay)(e, t, b.length);
                                              j((e) => [...e, a]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eV.A, {
                                  ref: (e) => {
                                      s.current.thumbnail = e;
                                  },
                                  onChange: (e) => I(eY.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eV.A, {
                                  ref: (e) => {
                                      s.current.static = e;
                                  },
                                  onChange: (e) => I(eY.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eV.A, {
                                  ref: (e) => {
                                      s.current.reducedMotion = e;
                                  },
                                  onChange: (e) => I(eY.qH.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: tt.Vg,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: ea()(tt.nM, tt.uW),
                                  children: [
                                      (0, r.jsx)(g.E, { variant: "body-md/normal", children: "Profile Effect Name" }),
                                      (0, r.jsx)("input", {
                                          type: "text",
                                          value: C,
                                          className: tt.hF,
                                          onChange: (e) => {
                                              S(e.target.value);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: tt.nM,
                                  children: [
                                      (0, r.jsx)(g.E, { variant: "body-md/normal", children: "Dark Theme" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: c,
                                          className: tt.OO,
                                          onChange: () => {
                                              u(!c);
                                          },
                                      }),
                                      (0, r.jsx)(g.E, { variant: "body-md/normal", children: "Show User Profile" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: m,
                                          className: tt.OO,
                                          onChange: () => {
                                              h(!m);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: tt.nM,
                                  children: [
                                      (0, r.jsx)(g.E, { variant: "body-md/normal", children: "Border Radius" }),
                                      (0, r.jsx)("input", {
                                          type: "range",
                                          min: 4,
                                          max: 24,
                                          step: 2,
                                          value: x,
                                          onChange: (e) => v(+e.target.value),
                                      }),
                                      (0, r.jsxs)(g.E, { variant: "body-sm/normal", children: [x, "px"] }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: ea()(tt.nz, tt.VH),
                                  style: { borderRadius: x },
                                  children: [
                                      m
                                          ? (0, r.jsx)("div", {
                                                className: tt.jq,
                                                children: (0, r.jsx)(e5.A, {
                                                    user: n,
                                                    currentUser: n,
                                                    transitionState: e2.ip.ENTERED,
                                                    onClose: () => {},
                                                    themeContainerClassName: tt.JB,
                                                }),
                                            })
                                          : (0, r.jsx)(e0.N, {
                                                theme: A,
                                                children: (e) =>
                                                    (0, r.jsx)("div", {
                                                        className: ea()(tt.aM, e),
                                                        children: (0, r.jsx)("img", { src: ta.A, alt: "", width: 400 }),
                                                    }),
                                            }),
                                      l &&
                                          (0, r.jsx)("div", {
                                              className: tt.KJ,
                                              children: (0, r.jsx)(te, { profileEffect: N }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  children:
                                      m &&
                                      (0, r.jsxs)("div", {
                                          className: ea()(tt.f5, tt.VH),
                                          style: { borderRadius: x },
                                          children: [
                                              (0, r.jsx)(e6.A, {
                                                  user: n,
                                                  pendingAvatar: void 0,
                                                  pendingProfileEffect: null,
                                                  hideProfileFrame: !0,
                                                  canUsePremiumCustomization: !0,
                                                  isTryItOut: !0,
                                              }),
                                              (0, r.jsx)(te, { profileEffect: N }),
                                          ],
                                      }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: tt.nz,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: tt.nM,
                                          children: [
                                              (0, r.jsx)(p.$, {
                                                  variant: "active",
                                                  text: "Upload Animated Layer",
                                                  onClick: () => s.current.animated?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(g.E, {
                                                  variant: "body-sm/semibold",
                                                  children: "Make sure to upload the bottommost layer first!",
                                              }),
                                          ],
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: tt.nM,
                                          children: [
                                              (0, r.jsx)(p.$, {
                                                  variant: "active",
                                                  text: "Upload thumbnail.png",
                                                  onClick: () => s.current.thumbnail?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(p.$, {
                                                  variant: "active",
                                                  text: "Upload static.png",
                                                  onClick: () => s.current.static?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(p.$, {
                                                  variant: "active",
                                                  text: "Upload reduced_motion.png",
                                                  onClick: () => s.current.reducedMotion?.activateUploadDialogue(),
                                              }),
                                          ],
                                      }),
                                      (0, r.jsx)("div", {
                                          className: tt.q6,
                                          children: (0, r.jsx)("div", {
                                              className: tt.nM,
                                              children: (0, r.jsx)(p.$, {
                                                  variant: "primary",
                                                  text: "Replay Animation",
                                                  onClick: () => {
                                                      (i(!1), setTimeout(() => i(!0), 100));
                                                  },
                                              }),
                                          }),
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: ea()(tt.q6, tt.XA),
                                          children: [
                                              (0, r.jsx)(g.E, {
                                                  variant: "body-sm/semibold",
                                                  children: "Please download both configs for the drop package!",
                                              }),
                                              (0, r.jsx)(g.E, {
                                                  variant: "body-sm/semibold",
                                                  color: "text-feedback-critical",
                                                  children: "WARNING: The full config is really big :0",
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: tt.nM,
                                                  children: [
                                                      (0, r.jsx)(e3.A, {
                                                          fileContents: () => (0, eY.rs)(b),
                                                          contentType: "text/plain",
                                                          fileName: `${_}_timing_config.txt`,
                                                          children: (0, r.jsx)(p.$, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Timing Config",
                                                          }),
                                                      }),
                                                      (0, r.jsx)(e3.A, {
                                                          fileContents: function () {
                                                              return JSON.stringify({
                                                                  ...t,
                                                                  name: C,
                                                                  readonly: !1,
                                                                  effects: b,
                                                                  stillFrames: f,
                                                              });
                                                          },
                                                          contentType: "text/plain",
                                                          fileName: `${_}_config.txt`,
                                                          children: (0, r.jsx)(p.$, {
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
                                          className: tt.uW,
                                          children: [
                                              (0, r.jsx)(ei.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: "Still Frames",
                                              }),
                                              (0, r.jsx)("div", {
                                                  className: tt.mv,
                                                  children: Object.entries(f).map((e) => {
                                                      let [t, a] = e;
                                                      return (0, r.jsx)(
                                                          to,
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
                                      b.some((e) => (e.randomizedSources ?? []).length > 0) &&
                                          (0, r.jsxs)("div", {
                                              className: ea()(tt.uW, tt.l7),
                                              children: [
                                                  (0, r.jsx)(g.E, {
                                                      variant: "body-md/semibold",
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
                                  className: ea()(tt.Vg, tt.ZF),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: tt.cD,
                                          children: (0, r.jsx)(p.$, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: function () {
                                                  (j([]), y(tl));
                                              },
                                          }),
                                      }),
                                      b.map((e, t) =>
                                          (0, r.jsxs)(
                                              "div",
                                              {
                                                  className: tt.ec,
                                                  children: [
                                                      (0, r.jsxs)("div", {
                                                          className: tt.D1,
                                                          children: [
                                                              (0, r.jsx)(ei.D, {
                                                                  variant: "heading-sm/semibold",
                                                                  children: e.name,
                                                              }),
                                                              (0, r.jsx)("img", {
                                                                  src: e.src,
                                                                  className: tt.oq,
                                                                  alt: "",
                                                              }),
                                                              null != e.randomizedSources &&
                                                                  (0, r.jsxs)(r.Fragment, {
                                                                      children: [
                                                                          (0, r.jsx)(ei.D, {
                                                                              variant: "heading-sm/semibold",
                                                                              children: "Alternatives",
                                                                          }),
                                                                          e.randomizedSources.map((e, t) =>
                                                                              (0, r.jsxs)(
                                                                                  "div",
                                                                                  {
                                                                                      children: [
                                                                                          null != e.filename &&
                                                                                              (0, r.jsx)(ei.D, {
                                                                                                  variant:
                                                                                                      "heading-xs/semibold",
                                                                                                  children: e.filename,
                                                                                              }),
                                                                                          (0, r.jsx)("img", {
                                                                                              src: e.src,
                                                                                              className: tt.oq,
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
                                                          className: ea()(tt.Vg, tt.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: tt.nz,
                                                                  children: [
                                                                      (0, r.jsx)(g.E, {
                                                                          variant: "body-md/semibold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: tt.hF,
                                                                          onChange: (e) => {
                                                                              j((a) => {
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
                                                                  className: tt.nz,
                                                                  children: [
                                                                      (0, r.jsx)(g.E, {
                                                                          variant: "body-md/semibold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: tt.hF,
                                                                          onChange: (e) => {
                                                                              j((a) => {
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
                                                          className: ea()(tt.Vg, tt.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: tt.nz,
                                                                  children: [
                                                                      (0, r.jsx)(g.E, {
                                                                          variant: "body-md/semibold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: tt.OO,
                                                                          onChange: (e) => {
                                                                              j((a) => {
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
                                                                  className: tt.nz,
                                                                  children:
                                                                      e.loop &&
                                                                      (0, r.jsxs)(r.Fragment, {
                                                                          children: [
                                                                              (0, r.jsx)(g.E, {
                                                                                  variant: "body-md/semibold",
                                                                                  children: "Loop Delay",
                                                                              }),
                                                                              (0, r.jsx)("input", {
                                                                                  type: "number",
                                                                                  value: e.loopDelay,
                                                                                  className: tt.hF,
                                                                                  onChange: (e) => {
                                                                                      j((a) => {
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
                                                          children: (0, r.jsx)(eV.A, {
                                                              ref: (e) => {
                                                                  s.current[`randomized-${t}`] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let a;
                                                                  null != (a = k(e)) &&
                                                                      (0, eY.Mz)(a, (e) => {
                                                                          j((n) => {
                                                                              let l = [...n],
                                                                                  i = n[t];
                                                                              if (null == i) return n;
                                                                              let s = { ...i };
                                                                              return (
                                                                                  null == s.randomizedSources &&
                                                                                      (s.randomizedSources = []),
                                                                                  s.randomizedSources.push({
                                                                                      src: e,
                                                                                      filename: a.name,
                                                                                  }),
                                                                                  (l[t] = s),
                                                                                  l
                                                                              );
                                                                          });
                                                                      });
                                                              },
                                                              multiple: !1,
                                                          }),
                                                      }),
                                                      (0, r.jsxs)("div", {
                                                          className: ea()(tt.nM, tt._N),
                                                          children: [
                                                              (0, r.jsx)(p.$, {
                                                                  variant: "secondary",
                                                                  text: "Add Alternative",
                                                                  onClick: () =>
                                                                      s.current[
                                                                          `randomized-${t}`
                                                                      ]?.activateUploadDialogue(),
                                                              }),
                                                              (0, r.jsx)(p.$, {
                                                                  variant: "critical-secondary",
                                                                  text: "Remove Layer",
                                                                  onClick: () => {
                                                                      j((t) => t.filter((t) => t !== e));
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
    tc = "Make sure you're only uploading text files!";
function tu(e) {
    let { profileEffect: t, onClick: a } = e,
        { deleteProfileEffect: n } = (0, eK.wu)();
    return (0, r.jsxs)(en.D, {
        className: tt.B0,
        onClick: a,
        children: [
            (0, r.jsx)("div", { className: tt.yV, style: { backgroundImage: `url(${t.effects?.[0]?.base64})` } }),
            (0, r.jsxs)("div", {
                className: tt.eL,
                children: [
                    (0, r.jsx)(g.E, { variant: "body-md/semibold", children: t.name }),
                    (0, r.jsx)(p.$, {
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
function tm() {
    let { profileEffects: e, upsertProfileEffect: t, clearAll: a } = (0, eK.wu)(),
        [n, l] = o.useState(),
        i = o.useRef(null),
        { categories: s } = (0, eH.A)(),
        d = o.useMemo(() => (0, eW.Wj)(s), [s]),
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
                if (null == a || !e.type.startsWith("text/")) return (0, ez.Ni)(tc);
                let [n, l] = a.split(",");
                if (!n.includes("text/plain")) return (0, ez.Ni)(tc);
                let i = JSON.parse(atob(l));
                ((i.skuId = (0, eF.A)()), t(i), (0, ez.GF)("Profile Effect (maybe??) imported!"));
            },
            [t],
        ),
        x = o.useCallback(
            (e) => {
                e.currentTarget?.files == null
                    ? (0, ez.Ni)("Error uploading file. Try again!")
                    : (0, ez.KE)(e.currentTarget.files, h, ez.Ni);
            },
            [h],
        );
    return (0, r.jsxs)("div", {
        className: tt.zr,
        children: [
            null == n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: tt.nz,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: ea()(tt.uW, tt.nM),
                                    children: [
                                        (0, r.jsx)(ei.D, {
                                            variant: "heading-xl/semibold",
                                            children: "Custom Profile Effects",
                                        }),
                                        (0, r.jsx)(p.$, {
                                            variant: "critical-secondary",
                                            text: "Clear All",
                                            onClick: async () => {
                                                (await e$.A.confirm({
                                                    title: "Clear All Profile Effects",
                                                    body: "Are you sure you want to clear all profile effects? This cannot be undone.",
                                                    confirmText: "Clear All",
                                                    confirmVariant: "critical-primary",
                                                })) && (a(), (0, ez.GF)("All profile effects cleared!"));
                                            },
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: tt.Iv,
                                    children: Object.values(e).map((e) =>
                                        (0, r.jsx)(tu, { profileEffect: e, onClick: () => l(e) }, e.skuId),
                                    ),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: ea()(tt.nM, tt._N, tt.uW),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: tt.au,
                                    children: [
                                        (0, r.jsx)(g.E, {
                                            variant: "body-md/normal",
                                            color: "text-overlay-light",
                                            children: "Import Shared Config",
                                        }),
                                        (0, r.jsx)(eV.A, { ref: i, onChange: x, multiple: !1 }),
                                    ],
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Create New Effect",
                                    onClick: function () {
                                        t({ skuId: (0, eF.A)(), name: "New Profile Effect", effects: [] });
                                    },
                                }),
                            ],
                        }),
                        (0, r.jsx)("hr", {}),
                        (0, r.jsxs)("div", {
                            className: tt.uW,
                            children: [
                                (0, r.jsx)(ei.D, { variant: "heading-xl/semibold", children: "All Effects" }),
                                (0, r.jsx)(f.k, {
                                    value: c,
                                    onChange: (e) => {
                                        u(e);
                                    },
                                }),
                                (0, r.jsx)("div", {
                                    className: tt.xm,
                                    children: m.map((e) =>
                                        (0, r.jsx)(
                                            en.D,
                                            {
                                                className: tt.S5,
                                                style: { backgroundImage: `url(${e.thumbnailPreviewSrc})` },
                                                onClick: () => {
                                                    let t = {
                                                        [eY.qH.THUMBNAIL]:
                                                            null != e.thumbnailPreviewSrc &&
                                                            "" !== e.thumbnailPreviewSrc
                                                                ? {
                                                                      src: e.thumbnailPreviewSrc,
                                                                      name: "thumbnail.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [eY.qH.STATIC]:
                                                            null != e.staticFrameSrc && "" !== e.staticFrameSrc
                                                                ? {
                                                                      src: e.staticFrameSrc,
                                                                      name: "static.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [eY.qH.REDUCED_MOTION]:
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
                                                    className: tt.Hd,
                                                    children: (0, r.jsx)(g.E, {
                                                        variant: "body-md/normal",
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
            null != n && (0, r.jsx)(td, { profileEffect: n }),
        ],
    });
}
var th = a(935399),
    tp = a(462887),
    tg = a(289873),
    tx = a(478016),
    tv = a(565645),
    tb = a(7584),
    tj = a(974504),
    tf = a(207803),
    ty = a(84540),
    tE = a(836602),
    tC = a(527212),
    tS = a(917445),
    t_ = a(841702),
    tN = a(892118),
    tA = a(744808),
    tk = a(965452),
    tI = a(626768),
    tD = a(464896);
function tT() {
    let e = (0, eC.Ay)();
    return (0, r.jsxs)("div", {
        className: tk.z3,
        children: [
            (0, r.jsx)("img", { src: (0, tp.M)(e) ? tI : tD, alt: "" }),
            (0, r.jsx)(g.E, {
                variant: "body-sm/normal",
                children:
                    "No frames found on your account. You must be granted test profile frame entitlements to use this tool.",
            }),
        ],
    });
}
function tR() {
    let e = (0, d.bG)([eg.default], () => eg.default.getCurrentUser()),
        t = (0, tC.Ay)(e?.id);
    o.useEffect(() => {
        e?.id != null && (0, tS.A)(e.id);
    }, [e?.id]);
    let { purchases: a, isFetching: n } = (0, t_.b5)(),
        l = o.useMemo(() => (0, eW.MG)(a, new Map()), [a]),
        [{ pendingProfileFrame: i }, s] = (0, d.yK)([tE.A], () => [tE.A.getPendingChanges(), tE.A.showNotice()]),
        c = void 0 === i ? t?.profileFrame : i,
        u = null != c ? a.get(c.skuId) : void 0,
        m = (0, tN.s)(u?.items[0]) ? u.items[0] : void 0;
    return (
        (0, th.l0)(tf.RE),
        (0, r.jsxs)("div", {
            className: tk.kL,
            children: [
                (0, r.jsxs)(ei.D, {
                    variant: "heading-xl/semibold",
                    children: [
                        (0, r.jsx)(tv.A, {
                            emojiName: tb.Ay.getByName("frame_with_picture")?.surrogates,
                            className: tk.Zg,
                        }),
                        "Profile Frames!",
                    ],
                }),
                0 === l.length && n && (0, r.jsx)(tg.y, {}),
                0 === l.length && !n && (0, r.jsx)(tT, {}),
                l.length > 0 &&
                    (0, r.jsxs)("div", {
                        className: tk.MK,
                        children: [
                            (0, r.jsx)(g.E, {
                                variant: "body-sm/normal",
                                children: "Select a frame to preview. Save to apply the frame to your main profile.",
                            }),
                            (0, r.jsxs)("ul", {
                                className: tk.p_,
                                children: [
                                    (0, r.jsx)(
                                        "li",
                                        {
                                            children: (0, r.jsx)(p.$, {
                                                text: "None",
                                                variant: "secondary",
                                                fullWidth: !0,
                                                icon: null == c ? tx.CheckmarkSmallIcon : void 0,
                                                disabled: null == c,
                                                onClick: () => (0, ty.p)({ profileFrame: null }),
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
                                                      children: (0, r.jsx)(p.$, {
                                                          text: t.name,
                                                          variant: "secondary",
                                                          fullWidth: !0,
                                                          icon: c?.skuId === e.skuId ? tx.CheckmarkSmallIcon : void 0,
                                                          disabled: c?.skuId === e.skuId,
                                                          onClick: () => (0, ty.p)({ profileFrame: e }),
                                                      }),
                                                  },
                                                  e.skuId,
                                              );
                                    }),
                                ],
                            }),
                            s && (0, r.jsx)(tj.A, {}),
                            (0, r.jsxs)("div", {
                                className: tk.VH,
                                children: [
                                    (0, r.jsx)(g.E, { variant: "body-sm/normal", children: "Preview:" }),
                                    (0, r.jsxs)("div", {
                                        className: tk.ME,
                                        children: [
                                            (0, r.jsx)("img", { src: ta.A, alt: "" }),
                                            null != m && (0, r.jsx)(tA.A, { frame: m, isPreview: !0 }),
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
var tO = a(164636),
    tw = a(793574),
    tM = a(354328),
    tP = a(4227),
    tL = a(682301),
    tU = a(987421),
    tG = a(61750),
    tB = a(499454),
    tF = a(682901);
let t$ = "devtools-collectibles-gift";
var tV = a(80101);
let tW = /^\d{17,20}$/,
    tH = (e) => {
        let [t, a] = o.useState(0);
        return (
            o.useLayoutEffect(() => {
                let e = tP.A.getPurchase;
                return (
                    (tP.A.getPurchase = (e) => void 0),
                    tP.A.emitChange(),
                    a(1),
                    () => {
                        ((tP.A.getPurchase = e), tP.A.emitChange());
                    }
                );
            }, []),
            (0, r.jsx)("div", { className: tV.Do, children: (0, r.jsx)(tU.A, { ...e }, t) })
        );
    },
    tz = function () {
        let e = (0, tO.bG)([eg.default], () => eg.default.getCurrentUser());
        (0, t_.b5)();
        let t = (0, tM.A)("shop_include_unpublished"),
            [a, n] = o.useState(""),
            l = a.trim(),
            i = tW.test(l),
            {
                product: s,
                category: d,
                state: c,
            } = (0, tL.IK)(l, { shouldFetchProduct: i, seedCategoryStore: !0, includeUnpublished: t }),
            u = "loading" !== c;
        return null == e
            ? (0, r.jsx)(g.E, { variant: "body-md/normal", children: "No user found" })
            : (0, r.jsxs)("div", {
                  className: tV.kL,
                  children: [
                      (0, r.jsxs)("div", {
                          className: tV.uW,
                          children: [
                              (0, r.jsx)(ei.D, { variant: "heading-lg/semibold", children: "Product Configuration" }),
                              (0, r.jsxs)("div", {
                                  className: tV.qp,
                                  children: [
                                      (0, r.jsx)(g.E, {
                                          variant: "body-md/semibold",
                                          className: tV.NB,
                                          children: "Primary Product SKU ID",
                                      }),
                                      (0, r.jsx)(f.k, { value: a, onChange: n, placeholder: "Enter product SKU ID" }),
                                      !u &&
                                          i &&
                                          (0, r.jsx)(g.E, {
                                              variant: "body-sm/normal",
                                              className: tV.KQ,
                                              children: "Loading products...",
                                          }),
                                      u &&
                                          i &&
                                          null == s &&
                                          (0, r.jsx)(g.E, {
                                              variant: "body-sm/normal",
                                              className: tV.kc,
                                              children: "Product not found",
                                          }),
                                      null != s &&
                                          (0, r.jsxs)(g.E, {
                                              variant: "body-sm/normal",
                                              className: tV.xT,
                                              children: ["Found: ", s.name],
                                          }),
                                  ],
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: tV.uW,
                          children: [
                              (0, r.jsx)(ei.D, { variant: "heading-lg/semibold", children: "Product Preview" }),
                              null != s && null != d
                                  ? (0, r.jsxs)("div", {
                                        className: tV.i1,
                                        children: [
                                            (0, r.jsx)(tH, { skuId: s.skuId }),
                                            (0, r.jsx)(p.$, {
                                                variant: "primary",
                                                onClick: function () {
                                                    null != s &&
                                                        null != e &&
                                                        (0, tG.A)({
                                                            product: s,
                                                            analyticsLocations: [tw.A.COLLECTIBLES_SHOP_CARD],
                                                        });
                                                },
                                                text: "Show Collectibles Collected Modal",
                                            }),
                                            (0, r.jsx)(p.$, {
                                                variant: "primary",
                                                onClick: function () {
                                                    null != s &&
                                                        null != e &&
                                                        (async function (e) {
                                                            let { skuId: t, sender: a } = e,
                                                                n = {
                                                                    code: t$,
                                                                    user: { id: a.id },
                                                                    sku_id: t,
                                                                    uses: 0,
                                                                    max_uses: 1,
                                                                    expires_at: null,
                                                                    redeemed: !1,
                                                                    application_id: ej.FYj,
                                                                    gift_style: tF.o2.STANDARD_BOX,
                                                                };
                                                            (await C.h.dispatch({
                                                                type: "GIFT_CODE_RESOLVE_SUCCESS",
                                                                giftCode: n,
                                                            }),
                                                                (0, tB.h)({ processedCode: t$ }));
                                                        })({ skuId: s.skuId, sender: e });
                                                },
                                                text: "Show Gift Accept Modal",
                                            }),
                                        ],
                                    })
                                  : (0, r.jsx)("div", {
                                        className: tV.qf,
                                        children: (0, r.jsx)(g.E, {
                                            variant: "body-md/normal",
                                            className: tV.X2,
                                            children: "Enter a valid product SKU ID to see the preview",
                                        }),
                                    }),
                          ],
                      }),
                  ],
              });
    };
var tK = a(646695);
let tY = { profile_effects: 1, nameplates: 2, profile_frames: 3, product_preview: 4 };
function tq(e) {
    let { setTab: t } = e,
        n = (0, d.bG)([eo.A], () => eo.A.getWindowOpen(ej.MLl.DEVTOOLS_POPOUT));
    return (0, r.jsxs)("div", {
        className: tK.Qs,
        children: [
            (0, r.jsx)(en.D, {
                onClick: () => {
                    t(1);
                },
                children: (0, r.jsx)("div", {
                    className: ea()(tK.vK, tK.Dg),
                    children: (0, r.jsx)(g.E, {
                        variant: "body-md/semibold",
                        color: "text-overlay-light",
                        children: "Profile Effects",
                    }),
                }),
            }),
            (0, r.jsx)(en.D, {
                onClick: () => {
                    t(2);
                },
                children: (0, r.jsx)("div", {
                    className: ea()(tK.vK, tK.st),
                    children: (0, r.jsx)(g.E, {
                        variant: "body-md/semibold",
                        color: "text-overlay-light",
                        children: "Nameplates",
                    }),
                }),
            }),
            (0, r.jsx)(en.D, {
                onClick: () => {
                    t(3);
                },
                children: (0, r.jsx)("div", {
                    className: ea()(tK.vK, tK.BW),
                    children: (0, r.jsx)(g.E, {
                        variant: "body-md/semibold",
                        color: "text-overlay-light",
                        children: "Profile Frames",
                    }),
                }),
            }),
            (0, r.jsx)(en.D, {
                onClick: () => {
                    t(4);
                },
                children: (0, r.jsx)("div", {
                    className: ea()(tK.vK, tK.IP),
                    children: (0, r.jsx)(g.E, {
                        variant: "body-md/semibold",
                        color: "text-overlay-light",
                        children: "Products",
                    }),
                }),
            }),
            !n &&
                (0, r.jsx)("div", {
                    style: { marginTop: 16 },
                    children: (0, r.jsx)(el.w, {
                        type: "warning",
                        title: "Not enough space?",
                        message: "You can pop out the DevTools to see the full layout.",
                        action: {
                            text: "Popout DevTools",
                            onClick: () =>
                                Promise.all([a.e(868577), a.e(253209)])
                                    .then(a.bind(a, 902592))
                                    .then((e) => {
                                        let { openDevToolsPopout: t } = e;
                                        return t();
                                    }),
                        },
                        role: "none",
                    }),
                }),
        ],
    });
}
let tJ = function () {
    let [e, t] = o.useState(() => {
        let e = er.A.lastOpenSubTabId;
        return null != e && e in tY ? tY[e] : 0;
    });
    return (
        o.useEffect(() => {
            null != er.A.lastOpenSubTabId && (0, es.Jt)({ lastOpenSubTabId: null });
        }, []),
        (0, r.jsxs)(x.Ip, {
            className: tK.iE,
            children: [
                (0, r.jsxs)("div", {
                    className: tK.C$,
                    children: [
                        (0, r.jsx)(ei.D, { variant: "heading-xxl/medium", children: "Collectibles DevTools" }),
                        0 !== e && (0, r.jsx)(p.$, { variant: "primary", onClick: () => t(0), text: "Back" }),
                    ],
                }),
                (function () {
                    switch (e) {
                        case 1:
                            return (0, r.jsx)(tm, {});
                        case 2:
                            return (0, r.jsx)(eO, {});
                        case 3:
                            return (0, r.jsx)(tR, {});
                        case 4:
                            return (0, r.jsx)(tz, {});
                        default:
                            return (0, r.jsx)(tq, { setTab: t });
                    }
                })(),
            ],
        })
    );
};
var tQ = a(681154),
    tX = a(306264),
    tZ = a(506774),
    t0 = a(331322),
    t1 = a(587895),
    t2 = a(429913),
    t3 = a(475825),
    t6 = a(730441);
function t5(e) {
    let { columns: t, data: a, className: n, rowClassName: l, onClickRow: i, selectedRowKey: s, rowHeight: d = 40 } = e,
        c = o.useMemo(
            () =>
                t.map((e) => ({
                    renderHeader: () => (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: e.key }),
                    ...e,
                })),
            [t],
        ),
        u = 0 === a.length ? [1] : [a.length];
    return (0, r.jsx)("div", {
        className: t6.CZ,
        children: (0, r.jsx)(t3.OZ, {
            className: n,
            innerClassName: t6.tp,
            sections: u,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    n = t6.ZR;
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
                    u = ea()(t6.jD, { [t6.wD]: o === s, rowClassName: l });
                return (0, r.jsx)(
                    en.D,
                    {
                        className: u,
                        onClick: () => i?.(n),
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
var t8 = a(409626),
    t4 = a(692969),
    t9 = a(760751),
    t7 = a(403362),
    ae = a(435738),
    at = a(99753),
    aa = a(702476),
    an = a(574520),
    al = a(214693),
    ai = a(583846),
    as = a(424994),
    ar = a(14570);
function ao(e) {
    let { id: t } = e,
        a = (0, d.bG)([eg.default], () => eg.default.getUser(t));
    return null == a
        ? null
        : (0, r.jsx)(en.D, {
              className: ar._,
              onClick: function () {
                  (0, aa.openUserProfileModal)({ sourceAnalyticsLocations: [tw.A.DEV_TOOLS], userId: t });
              },
              children: (0, r.jsx)(g.E, { variant: "body-md/semibold", children: a.username }),
          });
}
function ad() {
    let e = (0, d.bG)([at.A], () => at.A.getFeed(as.X1.GLOBAL_FEED)),
        t = (0, d.bG)([at.A], () => at.A.getFilters()),
        a = (0, d.cf)(
            [an.A],
            () => {
                let t = {};
                for (let a of e?.entries ?? []) t[(0, an.$)(a.content)] = an.A.canRenderContent(a.content);
                return t;
            },
            [e],
        ),
        n = (0, d.bG)([ae.A], () => ae.A.getImpressionCappedItemIds());
    if (null == t) return null;
    let l = e?.entries?.flatMap((e) => {
        let { content: l } = e;
        if (!(0, al.l)(t, l)) return [];
        let i = a[(0, an.$)(l)];
        return (0, r.jsxs)(
            "li",
            {
                className: ar.p,
                children: [
                    (0, r.jsx)(ao, { type: l.author_type, id: l.author_id }),
                    !i && (0, r.jsx)(g.E, { variant: "body-md/normal", children: "Expired or no matching presence" }),
                    (0, ai.I5)(l) &&
                        (0, r.jsxs)(g.E, { variant: "body-md/normal", children: ["Expired at ", l.expires_at] }),
                    n.has(l.id) && (0, r.jsx)(g.E, { variant: "body-md/normal", children: "Impression capped" }),
                ],
            },
            l.id,
        );
    });
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: "Selected Content" }),
            null != l ? (0, r.jsx)("ul", { children: l }) : (0, r.jsx)("div", { children: "(none?)" }),
        ],
    });
}
var ac = a(576470),
    au = a(693879);
function am() {
    let e = (0, d.bG)([at.A], () => at.A.getFeed(as.X1.GLOBAL_FEED)?.refresh_stale_inbox_after_ms != null),
        { loading: t, nextFetchDate: a } = (0, d.cf)(
            [at.A],
            () => at.A.getFeedState(as.X1.GLOBAL_FEED) ?? { loading: !1 },
        ),
        n = (0, d.bG)([at.A], () => at.A.getLastFeedFetchDate(as.X1.GLOBAL_FEED));
    return (0, r.jsxs)("div", {
        children: [
            t
                ? (0, r.jsx)(g.E, { variant: "body-md/normal", children: "(fetching)" })
                : (0, r.jsxs)(g.E, {
                      variant: "body-md/normal",
                      children: [
                          "Next fetch: ",
                          null != a ? (0, r.jsx)(ac.A, { deadline: a }) : e ? "(awaiting push)" : "(unscheduled)",
                      ],
                  }),
            (0, r.jsxs)(g.E, {
                variant: "body-md/normal",
                children: [
                    "Last fetch:",
                    " ",
                    null != n ? (0, r.jsx)(au.z, { inline: !0, entry: { start: n.getTime() } }) : "(never)",
                ],
            }),
        ],
    });
}
var ah = a(225418);
let ap = [
    {
        key: "type",
        cellClassName: ea()(ah.Hn, ah.T$),
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(g.E, { variant: "body-md/semibold", children: tQ.ContentInventoryEntryType[t] });
        },
    },
    {
        key: "count",
        cellClassName: ea()(ah.Hn, ah.MX),
        render(e) {
            let { entries: t } = e;
            return (0, r.jsx)("div", { children: (0, r.jsx)(g.E, { variant: "body-md/normal", children: t.length }) });
        },
    },
    {
        key: "only?",
        cellClassName: ah.Hn,
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(ag, { type: t });
        },
    },
];
function ag(e) {
    let { type: t } = e,
        a = (0, d.bG)([at.A], () => at.A.getFilters()),
        n = a?.types?.has(t) ?? !1;
    return (0, r.jsx)(m.d, {
        checked: n,
        onChange: function () {
            n
                ? C.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: void 0 })
                : C.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: { types: new Set([t]) } });
        },
    });
}
function ax() {
    var e;
    let t,
        a = (0, d.bG)([at.A], () => at.A.getFeed(as.X1.GLOBAL_FEED)),
        n = (0, d.bG)([at.A], () => at.A.getDebugImpressionCappingDisabled()),
        l = (0, d.bG)([ae.A], () => ae.A.getDebugFastImpressionCappingEnabled()),
        i =
            ((e = a?.entries?.map((e) => e.content)),
            Object.keys((t = e4().groupBy(e, (e) => e.content_type))).map((e) => {
                let a = t[e];
                return { key: `${e}`, type: a[0].content_type, entries: a };
            })),
        s = (0, d.bG)([at.A], () => at.A.getFeedState(as.X1.GLOBAL_FEED)?.loading === !0),
        [c, u] = o.useState(""),
        m = (0, d.bG)(
            [t9.A, t1.A],
            () => (parseInt(c) > 0 ? c : (t9.A.searchGamesByName(c)[0] ?? t1.A.getApplicationByName(c)?.id)),
            [c],
        ),
        h = (0, t4.A)({
            applicationId: m,
            location: "DevToolsContentInventory",
            source: t8.GameProfileSources.DevTools,
        }),
        v = Object.entries(tZ.w.get("GameProfileModal") ?? {})
            .filter((e) => {
                let [t, a] = e;
                return a;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        b = (0, t2.A)(v).filter(t7.Vq);
    return (0, r.jsx)("div", {
        className: t6.nd,
        children: (0, r.jsxs)(x.Ip, {
            className: ah.Qs,
            children: [
                (0, r.jsxs)(t0.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(g.E, { variant: "body-md/semibold", children: "Inventory" }),
                        i.length > 0 && (0, r.jsx)(t5, { columns: ap, data: i }),
                        (0, r.jsx)(am, {}),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Refresh Now",
                            fullWidth: !0,
                            onClick: function () {
                                C.h.dispatch({
                                    type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                                    feedId: as.X1.GLOBAL_FEED,
                                    feature: tX.M.INBOX,
                                });
                            },
                            loading: s,
                        }),
                    ],
                }),
                (0, r.jsxs)(t0.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(g.E, { variant: "body-md/semibold", children: "Impression Capping" }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Clear Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                C.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Log Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                C.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: n ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                C.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: l ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                C.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING" });
                            },
                        }),
                    ],
                }),
                !1,
                (0, r.jsx)(ad, {}),
                (0, r.jsxs)(t0.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(g.E, { variant: "body-md/semibold", children: "Game Profile" }),
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
                            children: b.map((e) =>
                                (0, r.jsx)(
                                    "li",
                                    { children: (0, r.jsx)(av, { application: e }) },
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
function av(e) {
    let { application: t } = e,
        a = (0, t4.A)({
            applicationId: t.id,
            location: "DevToolsContentInventory",
            source: t8.GameProfileSources.DevTools,
        });
    return (0, r.jsx)(en.D, {
        onClick: a,
        children: (0, r.jsx)(g.E, { variant: "body-xs/normal", color: "text-muted", children: t.name }),
    });
}
var ab = a(267355),
    aj = a(887287),
    af = a(222506),
    ay = a(293432),
    aE = a(188321),
    aC = a(25202);
function aS(e) {
    let { label: t, value: a } = e;
    return (0, r.jsxs)(t0.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            (0, r.jsx)(g.E, { variant: "body-md/normal", color: "text-muted", children: t }),
            (0, r.jsx)(g.E, { variant: "body-md/medium", children: a }),
        ],
    });
}
function a_(e) {
    return e ? "yes" : "no";
}
function aN(e) {
    return e > 0 ? `${e} fps` : "uncapped";
}
function aA() {
    let e = (0, d.cf)([aE.A, aj.A, af.A, ay.A], () => ({
            storedEnabledChoice: aE.A.getStoredEnabledChoice(),
            hasRunningGame: aE.A.hasRunningGame,
            isThrottling: aE.A.isThrottling,
            frameRate: (0, aC.A)(),
            overlayFrameRate: (0, aC.j)(),
            isOverlayOpen: (0, ab.D)(),
            isDiscordFocused: aE.A.isDiscordFocused,
            isDiscordHovered: aE.A.isDiscordHovered,
        })),
        t = e.isThrottling
            ? null
            : !1 === e.storedEnabledChoice
              ? "Turned off in Settings > System > Game Mode."
              : e.hasRunningGame
                ? e.isDiscordFocused
                    ? "Relaxed: levers lift while Discord is focused."
                    : e.isDiscordHovered
                      ? "Relaxed: levers lift while the cursor is over Discord."
                      : "The 2026-08-game-mode experiment is off for this account."
                : "No non-launcher game is running.";
    return (0, r.jsxs)(t0.B, {
        gap: 32,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)(t0.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: "Status" }),
                    (0, r.jsx)(aS, { label: "Throttling", value: a_(e.isThrottling) }),
                    (0, r.jsx)(aS, { label: "Running game detected", value: a_(e.hasRunningGame) }),
                    (0, r.jsx)(aS, { label: "Discord focused", value: a_(e.isDiscordFocused) }),
                    (0, r.jsx)(aS, { label: "Discord hovered", value: a_(e.isDiscordHovered) }),
                    null != t && (0, r.jsx)(g.E, { variant: "body-sm/normal", color: "text-muted", children: t }),
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: "Set a debug running game from the Detected Games tab to simulate a game.",
                    }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(t0.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: "Applied Levers" }),
                    (0, r.jsx)(aS, { label: "Frame rate cap", value: aN(e.frameRate) }),
                    (0, r.jsx)(aS, { label: "Overlay frame rate cap", value: aN(e.overlayFrameRate) }),
                    (0, r.jsx)(aS, { label: "Reduce motion", value: a_(e.isThrottling) }),
                    (0, r.jsx)(aS, { label: "Pause animated media", value: a_(e.isThrottling) }),
                    (0, r.jsx)(aS, { label: "Overlay open", value: a_(e.isOverlayOpen) }),
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children:
                            "Levers key off Throttling, except the frame rate caps: the main cap also lifts while the overlay is open, and the overlay cap holds whenever game mode is active, ignoring focus and hover. Values live in GameModeConstants.tsx.",
                    }),
                ],
            }),
        ],
    });
}
var ak = a(890497),
    aI = a(769015),
    aD = a(311043),
    aT = a(454908),
    aR = a(282435);
function aO(e) {
    return aR.jN.get(e) ?? 0;
}
function aw(e) {
    let { gameId: t } = e,
        { data: a, isLoading: n } = (0, aT.I)(t),
        l = (0, d.bG)([aD.A], () => aD.A.hasNoData(t), [t]);
    return n || (null == a && !l)
        ? (0, r.jsx)(g.E, { variant: "body-sm/normal", color: "text-muted", children: "Loading\u2026" })
        : null == a
          ? (0, r.jsxs)(g.E, {
                variant: "body-sm/normal",
                color: "text-feedback-critical",
                children: ["No game found for ID ", t],
            })
          : (0, r.jsxs)(t0.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(aI.A, { game: a, size: aI.M.SMALL }),
                    (0, r.jsxs)(t0.B, {
                        gap: 0,
                        children: [
                            (0, r.jsx)(g.E, { variant: "body-md/semibold", children: a.name }),
                            (0, r.jsx)(g.E, { variant: "footnote/normal", color: "text-muted", children: a.id }),
                        ],
                    }),
                ],
            });
}
function aM() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(""),
        l = (0, d.bG)([t9.A], () => t9.A.games),
        i = o.useMemo(
            () =>
                l
                    .filter((e) => null != e.name && "" !== e.name)
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sort((e, t) => aO(t.value) - aO(e.value)),
            [l],
        ),
        s = o.useMemo(() => ({ baseSort: (e, t) => aO(t.item.value) - aO(e.item.value), keys: ["label"] }), []),
        c = o.useCallback((e) => {
            (t(e), null != e && n(""));
        }, []),
        u = o.useCallback((e) => {
            (n(e), e.trim().length > 0 && t(null));
        }, []),
        m = a.trim(),
        h = m.length > 0 ? m : (e ?? void 0),
        x = (0, t4.A)({ gameId: h, location: "DevToolsGameProfile", source: t8.GameProfileSources.DevTools });
    return (0, r.jsx)("div", {
        className: t6.nd,
        children: (0, r.jsxs)(t0.B, {
            gap: 32,
            padding: 12,
            fullWidth: !1,
            children: [
                (0, r.jsxs)(t0.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: "Game Profile" }),
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: "Search for a game by name, or paste a game ID, then open its profile.",
                        }),
                    ],
                }),
                (0, r.jsxs)(t0.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(ei.D, { variant: "heading-xs/semibold", children: "Search" }),
                        (0, r.jsx)(ak.Z, {
                            label: "Search games",
                            hideLabel: !0,
                            placeholder: "Search for a game\u2026",
                            options: i,
                            value: m.length > 0 ? void 0 : (e ?? void 0),
                            onSelectionChange: c,
                            selectionMode: "single",
                            clearable: !0,
                            matchSorterOptions: s,
                        }),
                    ],
                }),
                (0, r.jsxs)(t0.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(ei.D, { variant: "heading-xs/semibold", children: "Game ID" }),
                        (0, r.jsx)(f.k, {
                            label: "Game ID",
                            hideLabel: !0,
                            placeholder: "Paste a game ID",
                            value: a,
                            onChange: u,
                        }),
                        m.length > 0 && (0, r.jsx)(aw, { gameId: m }),
                    ],
                }),
                (0, r.jsx)(p.$, {
                    variant: "primary",
                    text: "Open Game Profile",
                    fullWidth: !0,
                    disabled: null == x,
                    onClick: x ?? void 0,
                }),
            ],
        }),
    });
}
var aP = a(923477),
    aL = a(750672);
function aU() {
    let e = (0, aP.O)((e) => e.requestHighlightFirstCard);
    return (0, r.jsxs)("div", {
        className: ea()(t6.nd, aL.k),
        children: [
            (0, r.jsx)(ei.D, { variant: "heading-lg/medium", children: "Game Server Hosting" }),
            (0, r.jsx)(g.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children:
                    'Replays the post-purchase scroll + highlight on the first card in the "Your game servers" list, exactly like clicking "View game server" after checkout. Open the Game Servers shop tab (/shop?tab=game-servers) with at least one owned server first.',
            }),
            (0, r.jsx)(p.$, { variant: "secondary", text: "Run post-purchase highlight (first card)", onClick: e }),
        ],
    });
}
var aG = a(554146),
    aB = a(594061),
    aF = a(617617),
    a$ = a(355898),
    aV = a(644103),
    aW = a(574560),
    aH = a(434265);
let az = [
        aG.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL,
        aG.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK,
        aG.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
    ].map((e) => ({ id: String(e), label: aG.M[e], value: e })),
    aK = { "global-cooldown": "global cooldown", "per-game-cooldown": "per-game cooldown", disabled: "disabled" };
function aY() {
    let [e, t] = o.useState("dismissals"),
        [a, n] = o.useState(aG.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL),
        l = (0, d.bG)([aF.A], () => aF.A.settings.userContent?.recurringDismissibleContentStates[a] ?? null),
        i = (0, d.bG)([aW.A], () => aW.A.getAllGameUpsellDismissals(a)),
        s = o.useMemo(() => Object.keys(i ?? {}), [i]),
        c = (0, t2.A)(s),
        [u, m] = o.useState(""),
        [h, x] = o.useState([]);
    o.useEffect(
        () =>
            (0, aV.Y)((e) => {
                x((t) => [e, ...t].slice(0, 100));
            }),
        [],
    );
    let v = o.useMemo(() => {
            let e = new Set();
            for (let t of h) for (let a of t.applicationIds) e.add(a);
            return [...e];
        }, [h]),
        y = (0, t2.A)(v),
        E = o.useMemo(() => Object.fromEntries(v.map((e, t) => [e, y[t]])), [v, y]),
        C =
            l?.lastDismissedAtMs != null && "0" !== l.lastDismissedAtMs
                ? new Date(Number(l.lastDismissedAtMs)).toLocaleString()
                : "Never";
    return (0, r.jsxs)("div", {
        className: aH.nd,
        children: [
            (0, r.jsxs)("div", {
                className: aH.$H,
                children: [
                    (0, r.jsx)(en.D, {
                        className: ea()(aH.V3, { [aH.u7]: "dismissals" === e }),
                        onClick: () => t("dismissals"),
                        children: "Dismissals",
                    }),
                    (0, r.jsxs)(en.D, {
                        className: ea()(aH.V3, { [aH.u7]: "call-log" === e }),
                        onClick: () => t("call-log"),
                        children: ["Call Log ", h.length > 0 ? `(${h.length})` : ""],
                    }),
                ],
            }),
            "dismissals" === e
                ? (0, r.jsxs)("div", {
                      className: aH.Lj,
                      children: [
                          (0, r.jsx)("div", {
                              className: aH.uW,
                              children: (0, r.jsx)(j.l, {
                                  label: "Dismissible Content",
                                  value: a,
                                  onSelectionChange: (e) => n(e),
                                  options: az,
                                  selectionMode: "single",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              className: aH.uW,
                              children: [
                                  (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: "Global DCF State" }),
                                  (0, r.jsxs)(g.E, { variant: "body-sm/normal", children: ["Last dismissed: ", C] }),
                                  (0, r.jsxs)(g.E, {
                                      variant: "body-sm/normal",
                                      children: ["Times dismissed: ", l?.numTimesDismissed ?? 0],
                                  }),
                                  (0, r.jsx)(p.$, {
                                      variant: "secondary",
                                      text: "Reset Global DCF State",
                                      onClick: () => (0, aB._N)(a),
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: aH.uW,
                              children: [
                                  (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: "Mark as Dismissed" }),
                                  (0, r.jsx)(f.k, {
                                      label: "Game ID",
                                      value: u,
                                      onChange: (e) => m(e),
                                      placeholder: "Enter Game ID",
                                  }),
                                  (0, r.jsx)(p.$, {
                                      variant: "secondary",
                                      text: "Mark as Dismissed",
                                      disabled: "" === u.trim(),
                                      onClick: () => {
                                          ((0, a$.M)([u.trim()], a), m(""));
                                      },
                                  }),
                              ],
                          }),
                          (0, r.jsx)(b.c, {}),
                          (0, r.jsxs)("div", {
                              className: ea()(aH.uW, aH.LY),
                              children: [
                                  (0, r.jsxs)(ei.D, {
                                      variant: "heading-sm/semibold",
                                      children: ["Per-Game Dismissals (", s.length, ")"],
                                  }),
                                  0 === s.length
                                      ? (0, r.jsx)(g.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: "No dismissal data for this content type.",
                                        })
                                      : (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                s.map((e, t) => {
                                                    let n = c[t],
                                                        l = i?.[e];
                                                    if (null == l) return null;
                                                    let s = n?.getIconURL(32);
                                                    return (0, r.jsxs)(
                                                        "div",
                                                        {
                                                            className: aH.Nr,
                                                            children: [
                                                                (0, r.jsxs)("div", {
                                                                    className: aH.MY,
                                                                    children: [
                                                                        null != s &&
                                                                            (0, r.jsx)("img", {
                                                                                src: s,
                                                                                alt: "",
                                                                                className: aH.Z2,
                                                                            }),
                                                                        (0, r.jsxs)("div", {
                                                                            className: aH.qi,
                                                                            children: [
                                                                                (0, r.jsx)(g.E, {
                                                                                    variant: "body-sm/semibold",
                                                                                    children: n?.name ?? "Unknown App",
                                                                                }),
                                                                                (0, r.jsx)(g.E, {
                                                                                    variant: "body-xs/normal",
                                                                                    color: "text-muted",
                                                                                    children: e,
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        (0, r.jsx)(p.$, {
                                                                            variant: "secondary",
                                                                            text: "Clear",
                                                                            onClick: () => (0, a$.e)(e, a),
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, r.jsxs)(g.E, {
                                                                    variant: "body-xs/normal",
                                                                    children: [
                                                                        "Last dismissed: ",
                                                                        new Date(l.dismissedAt).toLocaleString(),
                                                                    ],
                                                                }),
                                                                (0, r.jsxs)(g.E, {
                                                                    variant: "body-xs/normal",
                                                                    children: ["Times dismissed: ", l.timesDismissed],
                                                                }),
                                                            ],
                                                        },
                                                        e,
                                                    );
                                                }),
                                                (0, r.jsx)(p.$, {
                                                    variant: "critical-primary",
                                                    text: "Clear All",
                                                    onClick: () => {
                                                        for (let e of s) (0, a$.e)(e, a);
                                                    },
                                                }),
                                            ],
                                        }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: aH.Lj,
                      children: (0, r.jsxs)("div", {
                          className: aH.uW,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: aH.aq,
                                  children: [
                                      (0, r.jsxs)(ei.D, {
                                          variant: "heading-sm/semibold",
                                          children: ["Hook Calls (", h.length, ")"],
                                      }),
                                      (0, r.jsx)(p.$, { variant: "secondary", text: "Clear", onClick: () => x([]) }),
                                  ],
                              }),
                              0 === h.length
                                  ? (0, r.jsx)(g.E, {
                                        variant: "body-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "No calls recorded yet. Hook calls to useShouldShowGameUpsellForMultipleGames will appear here.",
                                    })
                                  : h.map((e, t) =>
                                        (0, r.jsxs)(
                                            "div",
                                            {
                                                className: aH.Nr,
                                                children: [
                                                    (0, r.jsxs)("div", {
                                                        className: aH.O9,
                                                        children: [
                                                            (0, r.jsx)(g.E, {
                                                                variant: "body-xs/semibold",
                                                                children: new Date(e.timestamp).toLocaleTimeString(),
                                                            }),
                                                            e.disabled &&
                                                                (0, r.jsx)("span", {
                                                                    className: aH.t7,
                                                                    children: "(disabled)",
                                                                }),
                                                            (0, r.jsx)(g.E, {
                                                                variant: "body-xs/normal",
                                                                color: "text-muted",
                                                                children: aG.M[e.dismissibleContent],
                                                            }),
                                                        ],
                                                    }),
                                                    0 === e.applicationIds.length
                                                        ? (0, r.jsx)(g.E, {
                                                              variant: "body-xs/normal",
                                                              color: "text-muted",
                                                              children: "No apps",
                                                          })
                                                        : e.applicationIds.map((t) => {
                                                              let a = E[t],
                                                                  n = a?.getIconURL(20),
                                                                  l = e.eligibleToShow.includes(t),
                                                                  i = e.excludedReasons[t];
                                                              return (0, r.jsxs)(
                                                                  "div",
                                                                  {
                                                                      className: aH.Ss,
                                                                      children: [
                                                                          null != n &&
                                                                              (0, r.jsx)("img", {
                                                                                  src: n,
                                                                                  alt: "",
                                                                                  className: aH.rb,
                                                                              }),
                                                                          (0, r.jsx)("span", {
                                                                              className: aH.Jd,
                                                                              children: a?.name ?? t,
                                                                          }),
                                                                          l
                                                                              ? (0, r.jsx)("span", {
                                                                                    className: aH.OK,
                                                                                    children: "eligible",
                                                                                })
                                                                              : null != i
                                                                                ? (0, r.jsx)("span", {
                                                                                      className: aH.t7,
                                                                                      children: aK[i],
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
var aq = a(696986),
    aJ = a(47167),
    aQ = a(734057),
    aX = a(994500),
    aZ = a(398269),
    a0 = a(394953),
    a1 = a(618216);
let a2 = [
        {
            key: "channelName",
            cellClassName: ea()(a1.Hn, a1.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(g.E, { variant: "body-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: ea()(a1.Hn, a1.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(g.E, { variant: "body-md/normal", children: t });
            },
        },
    ],
    a3 = [
        {
            key: "channelName",
            cellClassName: ea()(a1.Hn, a1.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(g.E, { variant: "body-md/normal", children: t });
            },
        },
        {
            key: "loadState",
            cellClassName: ea()(a1.Hn, a1.C7),
            render(e) {
                let { loadState: t } = e;
                return (0, r.jsx)(g.E, { variant: "body-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: ea()(a1.Hn, a1.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(g.E, { variant: "body-md/normal", children: t });
            },
        },
    ];
function a6() {
    let { unreadRecentMentionsCount: e, unreadChannelIds: t } = (0, a0.U4)(),
        {
            isLoading: a,
            hasLoadedEver: n,
            hasPreloaded: l,
            hasMoreToLoad: i,
            isLoadingComplete: s,
        } = (0, tO.cf)([aZ.A], () => ({
            isLoading: aZ.A.isLoading,
            hasLoadedEver: aZ.A.hasLoadedEver,
            hasPreloaded: aZ.A.hasPreloaded,
            hasMoreToLoad: aZ.A.hasMoreToLoad,
            isLoadingComplete: aZ.A.isLoadingComplete,
        })),
        o = (0, tO.bG)([aZ.A], () => aZ.A.currentRequestAnalyticsPayload),
        d = (0, tO.cf)([aZ.A], () => aZ.A.getChannelInfoMap()),
        c = (0, tO.cf)([aQ.A], () => {
            let e = {};
            return (
                Object.entries(d).forEach((t) => {
                    let [a] = t,
                        n = aQ.A.getChannel(a);
                    e[a] = n ?? null;
                }),
                e
            );
        }),
        u = (0, tO.cf)([aQ.A], () =>
            t.reduce((e, t) => {
                let a = aQ.A.getChannel(t);
                return ((e[t] = a ?? null), e);
            }, {}),
        ),
        h = (0, tO.bG)([aZ.A], () => aZ.A.getInboxMessages()),
        p = (0, tO.bG)([aZ.A], () => aZ.A.getDevOverrides().navOnClick);
    return (0, r.jsx)("div", {
        className: t6.nd,
        children: (0, r.jsxs)(x.Ip, {
            className: a1.Qs,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(ei.D, { variant: "heading-lg/semibold", children: "Inbox" }),
                        (0, r.jsxs)("div", { children: ["Inbox Message Count: ", h.length] }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(ei.D, { variant: "heading-lg/semibold", children: "Dev Overrides" }),
                        (0, r.jsx)("div", {
                            style: { display: "flex", alignItems: "center", marginTop: 8 },
                            children: (0, r.jsx)(m.d, {
                                label: "Nav On Click",
                                checked: !!p,
                                onChange: (e) => {
                                    C.h.dispatch({ type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES", navOnClick: e });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(ei.D, { variant: "heading-lg/semibold", children: "Unreads and Badging" }),
                        (0, r.jsx)(aq.h, { size: 8 }),
                        (0, r.jsxs)("div", { children: ["Unread Recent Mentions Count: ", e] }),
                        (0, r.jsxs)("div", { children: ["Unread Channel Count: ", t.length] }),
                        (0, r.jsx)(t5, {
                            columns: a2,
                            data: Object.entries(u).map((e) => {
                                let [t, a] = e;
                                return {
                                    key: t,
                                    channelId: t,
                                    channelName: null != a ? (0, aJ.m1)(a, eg.default, aX.A) : "",
                                };
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(ei.D, { variant: "heading-lg/semibold", children: "Store State" }),
                        (0, r.jsxs)("div", { children: ["Is Loading: ", a ? "\u2705" : "\u274C"] }),
                        (0, r.jsxs)("div", { children: ["Has Preloaded: ", l ? "\u2705" : "\u274C"] }),
                        (0, r.jsxs)("div", { children: ["Has Loaded Ever: ", n ? "\u2705" : "\u274C"] }),
                        (0, r.jsxs)("div", { children: ["Has More To Load: ", i ? "\u2705" : "\u274C"] }),
                        (0, r.jsxs)("div", { children: ["Is Loading Complete: ", s ? "\u2705" : "\u274C"] }),
                        (0, r.jsxs)("div", { children: ["Last Loading Trigger: ", o?.loadingTrigger] }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(ei.D, { variant: "heading-lg/semibold", children: "Channel Info Map" }),
                        (0, r.jsxs)("div", { children: ["Total Channels: ", Object.keys(d).length] }),
                        (0, r.jsx)(t5, {
                            columns: a3,
                            data: Object.entries(d).map((e) => {
                                let t,
                                    [a, n] = e;
                                return {
                                    key: a,
                                    channelId: a,
                                    channelName: null != (t = c[a]) ? (0, aJ.m1)(t, eg.default, aX.A) : "",
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
var a5 = a(976860),
    a8 = a(343559),
    a4 = a(786800);
let a9 = function () {
    return (0, r.jsxs)("div", {
        className: a4.k,
        children: [
            (0, r.jsx)(g.E, {
                variant: "body-md/normal",
                color: "text-feedback-info",
                style: { marginBottom: "8px" },
                children: "Click the button below to clear your Minor Reward Capping History.",
            }),
            (0, r.jsx)(p.$, {
                onClick: () => {
                    ((0, a8.Ov)(), (0, a5.pX)(ej.BVt.QUEST_HOME));
                },
                text: "Clear History",
            }),
            (0, r.jsx)(g.E, {
                variant: "body-md/normal",
                color: "text-feedback-info",
                children:
                    "Your may have to refresh your client after being redirected to the Quest Home in order to see these changes.",
            }),
        ],
    });
};
var a7 = a(271866),
    ne = a(868511),
    nt = a(147964),
    na = a(636116),
    nn = a(13981),
    nl = a(760716),
    ni = a(115093),
    ns = a(970628);
let nr = window.GLOBAL_ENV.RELEASE_CHANNEL === ni.B.STAGING ? "1438571444891025408" : "1346069614634864772";
function no() {
    let e = (0, nl.i)((e) => e.overrideApplicationId),
        t = (0, nl.i)((e) => e.setOverrideApplicationId),
        a = null != e,
        n = (0, nl.i)((e) => e.overrideNitroEligibilityForSocialLayerStorefront),
        l = (0, nl.i)((e) => e.setOverrideNitroEligibilityForSocialLayerStorefront),
        i = (0, nl.i)((e) => e.isNitroEligibleForSocialLayerStorefront),
        s = (0, nl.i)((e) => e.setIsNitroEligibleForSocialLayerStorefront),
        [c, u] = o.useState(nr),
        [h, g] = o.useState(ej.FYj),
        x = o.useCallback(
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
        b = (0, nl.i)((e) => e.showSelfActivity),
        j = (0, nl.i)((e) => e.setShowSelfActivity),
        y = (0, nl.i)((e) => e.recommendationApplicationIds),
        E = (0, nl.i)((e) => e.setRecommendationApplicationIds),
        C = o.useCallback(
            (e) => {
                e ? E(h) : E(null);
            },
            [h, E],
        ),
        S = (0, d.bG)([nt.A], () => null != nt.A.testModeApplicationId),
        _ = o.useCallback((e) => {
            e ? (0, P.qf)((e) => (0, r.jsx)(ne.A, { ...e })) : a7.cL();
        }, []),
        N = (0, t4.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: c,
            source: t8.GameProfileSources.Embed,
            trackEntryPointImpression: !0,
        }),
        A = o.useCallback(
            (e) => {
                N?.(e);
            },
            [N],
        ),
        k = o.useCallback(() => {
            (0, a5.pX)(ej.BVt.COLLECTIBLES_SHOP_GAME_SHOP(c));
        }, [c]);
    return (0, r.jsx)("div", {
        className: ea()(t6.nd, ns.n),
        children: (0, r.jsxs)("div", {
            className: ns.k,
            children: [
                (0, r.jsx)(f.k, { label: "Application ID", value: c, onChange: v }),
                (0, r.jsx)(ei.D, { variant: "heading-lg/medium", children: "Activity Override" }),
                (0, r.jsx)(m.d, { label: "Override activity application ID", checked: a, onChange: x }),
                (0, r.jsx)(m.d, { label: "Show own voice activity (bypass self check)", checked: b, onChange: j }),
                (0, r.jsx)(m.d, { label: "Enable application test mode", checked: S, onChange: _ }),
                (0, r.jsx)(p.$, { text: "Open Game Profile Modal", onClick: A }),
                (0, r.jsx)(p.$, { text: "Navigate to App Game Shop", onClick: k }),
                (0, r.jsx)(ei.D, { variant: "heading-lg/medium", children: "Game Exit Promo" }),
                Object.values(na.U3).map((e) =>
                    (0, r.jsx)(
                        p.$,
                        {
                            text: "Preview",
                            onClick: () => {
                                ((0, nn.ik)({ type: "replaced" }), (0, nn.sC)(e.id, { isPreview: !0 }));
                            },
                        },
                        e.id,
                    ),
                ),
                (0, r.jsx)(ei.D, { variant: "heading-lg/medium", children: "Wishlists" }),
                (0, r.jsx)(f.k, {
                    label: "Recommendation application IDs",
                    value: h,
                    onChange: g,
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
                (0, r.jsx)(m.d, { label: "Is nitro eligible for social layer storefront", checked: i, onChange: s }),
            ],
        }),
    });
}
var nd = a(540999),
    nc = a(723702);
(a(650750), a(772958));
var nu = a(58736);
(a(558179), a(21574));
var nm = a(231545),
    nh = a(761929),
    np = a(180808);
function ng(e) {
    let { resizableNode: t, minHeight: a, onResize: n } = e,
        l = (0, nh.A)({
            minDimension: a,
            resizableDomNodeRef: t,
            onElementResize: n,
            orientation: nh.R.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, r.jsx)("div", { onPointerDown: l, className: np.Di });
}
function nx(e) {
    let { children: t, className: a, initialHeight: n, minHeight: l } = e,
        i = o.useRef(null),
        [s, d] = o.useState(n);
    return (0, r.jsxs)("div", {
        ref: i,
        className: np.kL,
        style: { minHeight: l, height: s },
        children: [
            (0, r.jsx)(ng, { resizableNode: i, minHeight: l, onResize: d }),
            (0, r.jsx)("div", { className: ea()(np.KZ, a), children: t }),
        ],
    });
}
var nv = a(231643),
    nb = a(362688);
(a(140346), nb.fu.NONE, nb.fu.NONE);
var nj = a(825484),
    nf = a(688810),
    ny = a(975460),
    nE = a(724302),
    nC = a(487431),
    nS = a(712440),
    n_ = a(733110),
    nN = a(134861),
    nA = a(71393),
    nk = a(967198),
    nI = a(942370),
    nD = a(792996),
    nT = a(86495),
    nR = a(681135);
function nO() {
    var e;
    let t,
        a,
        n = o.useRef(null),
        { analyticsLocations: l } = (0, nf.Ay)(tw.A.DEV_TOOLS),
        [i, s] = o.useState(""),
        c = (0, d.bG)([nk.A], () => nk.A.getGuildId()),
        u = (0, d.bG)([nA.A], () => nA.A.getGuild(c)),
        m = u?.gameApplicationIds ?? [],
        h = (0, t2.A)(m).filter((e) => null != e),
        x = (0, d.bG)([N.Ay, I.A], () => (0, A.A)(N.Ay, I.A)),
        v = (0, t2.h)(i),
        j = (0, ny.g)(v),
        y = (0, d.yK)(
            [t1.A],
            () => v?.linkedGames?.map((e) => t1.A.getApplication(e.id)).filter((e) => null != e) ?? [],
        ),
        E = (0, nE.RD)(v, { allowedFlows: [nI._.RPC], debug: !0 }),
        C = (0, nE.RD)(v, { allowedFlows: [nI._.WEB], debug: !0 }),
        S = (0, d.bG)([nN.A], () => null != j && nN.A.isConnected(j.id)),
        _ = (0, nE.RD)(v, { debug: !0 }),
        { canDeauthorize: k, deauthorize: D } =
            ((e = _.connectionApp?.id),
            (t = (0, d.bG)([n_.A], () => n_.A.getNewestTokenForApplication(e))),
            (a = o.useCallback(() => {
                null != t && nS.A.delete(t.id);
            }, [t])),
            { canDeauthorize: null != t, deauthorize: a });
    return (0, r.jsxs)("div", {
        ref: n,
        className: ea()(t6.nd, nR.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nR.kL,
                children: [
                    (0, r.jsx)(ei.D, { variant: "heading-lg/medium", children: "Application" }),
                    (0, r.jsx)(f.k, { label: "Application ID", value: i, onChange: s }),
                    null != x && null != x.id
                        ? (0, r.jsx)(p.$, {
                              onClick: () => s(x.id),
                              variant: "primary",
                              text: `Use detected game: ${x.name} (${x.id})`,
                          })
                        : null,
                    null != u
                        ? h.length > 0
                            ? (0, r.jsxs)("div", {
                                  className: nR.Mc,
                                  children: [
                                      (0, r.jsxs)(g.E, {
                                          variant: "body-sm/semibold",
                                          color: "text-subtle",
                                          children: [u.name, " (", u.id, ") \xb7 Official games"],
                                      }),
                                      (0, r.jsx)(nj.e, {
                                          size: "sm",
                                          wrap: !0,
                                          children: h.map((e) =>
                                              (0, r.jsx)(
                                                  p.$,
                                                  {
                                                      onClick: () => s(e.id),
                                                      variant: i === e.id ? "primary" : "secondary",
                                                      text: `${e.name} (${e.id})`,
                                                  },
                                                  e.id,
                                              ),
                                          ),
                                      }),
                                  ],
                              })
                            : (0, r.jsxs)(g.E, {
                                  variant: "body-md/normal",
                                  color: "text-subtle",
                                  children: [u.name, " (", u.id, ") \xb7 No official games"],
                              })
                        : (0, r.jsx)(g.E, {
                              variant: "body-md/normal",
                              color: "text-subtle",
                              children: "No guild selected",
                          }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)("div", {
                        className: nR.J3,
                        children: [
                            (0, r.jsxs)(g.E, {
                                variant: "body-md/normal",
                                children: ["Application Name: ", null != v ? v.name : "N/A"],
                            }),
                            (0, r.jsxs)(g.E, {
                                variant: "body-md/normal",
                                children: [
                                    "Linked Games:",
                                    " ",
                                    y.length > 0
                                        ? y.map((e) => ((0, ny.t)(v)?.id === e.id ? `${e.name}*` : e.name)).join(", ")
                                        : "N/A",
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)("div", {
                className: nR.kL,
                children: [
                    (0, r.jsx)(ei.D, { variant: "heading-lg/medium", children: "Authorization status" }),
                    (0, r.jsx)(nC.VT, {
                        flow: nI._.RPC,
                        showGlobalFlowToggle: !0,
                        overallStatus: E.debug.isSubscribedToAuthorizeRequest
                            ? nC.nW.OVERALL_GOOD
                            : S
                              ? nC.nW.WARN
                              : nC.nW.OVERALL_BAD,
                        name: nD.intl.string(nT.default.AGLx00),
                        steps: [
                            {
                                status: S ? nC.nW.GOOD : nC.nW.BAD,
                                text: nD.intl.string(nT.default.kxF9br),
                                description: S ? null : nD.intl.string(nT.default.PFxxJa),
                                learnMoreLink: S
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: E.debug.isSubscribedToAuthorizeRequest
                                    ? nC.nW.GOOD
                                    : S
                                      ? nC.nW.WARN
                                      : nC.nW.BAD,
                                text: nD.intl.string(nT.default.S94dzs),
                                description:
                                    E.debug.isSubscribedToAuthorizeRequest || !S
                                        ? null
                                        : nD.intl.string(nT.default.aTULMB),
                                learnMoreLink:
                                    E.debug.isSubscribedToAuthorizeRequest || !S
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: _.chosenFlow === nI._.RPC,
                    }),
                    (0, r.jsx)(nC.VT, {
                        flow: nI._.WEB,
                        showGlobalFlowToggle: !0,
                        overallStatus: C.debug.hasConnectionEntrypointUrl ? nC.nW.OVERALL_GOOD : nC.nW.OVERALL_BAD,
                        name: nD.intl.string(nT.default.K3ObrU),
                        steps: [
                            {
                                status: C.debug.hasConnectionEntrypointUrl ? nC.nW.GOOD : nC.nW.BAD,
                                text: nD.intl.string(nT.default["8a7IrV"]),
                                description: C.debug.hasConnectionEntrypointUrl
                                    ? nD.intl.formatToPlainString(nT.default["9iLeL2"], {
                                          url: C.connectionApp?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: _.chosenFlow === nI._.WEB,
                    }),
                    (0, r.jsx)(nC.Sy, {
                        status: _.hasAlreadyLinked ? nC.nW.OVERALL_GOOD : nC.nW.OVERALL_BAD,
                        text: nD.intl.string(nD.t["Vu/zmQ"]),
                    }),
                    0 === _.debug.validFlows.length &&
                        (0, r.jsx)(g.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "body-md/medium",
                            children: nD.intl.string(nT.default.eg0mNa),
                        }),
                    (0, r.jsx)(p.$, {
                        disabled: !_.canStartAuthorization,
                        fullWidth: !0,
                        onClick: () => _.startAuthorization({ analyticsLocations: l }),
                        variant: "primary",
                        text: "Start Authorization",
                    }),
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children:
                            "This will start whichever authorization flow is available. RPC authorization takes precedence over web.",
                    }),
                    (0, r.jsxs)(nj.e, {
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(p.$, {
                                disabled: !E.canStartAuthorization,
                                onClick: () => E.startAuthorization({ analyticsLocations: l }),
                                variant: "secondary",
                                text: "Start In-App Authorization",
                            }),
                            (0, r.jsx)(p.$, {
                                disabled: !C.canStartAuthorization,
                                onClick: () => C.startAuthorization({ analyticsLocations: l }),
                                variant: "secondary",
                                text: "Start Web Authorization",
                            }),
                        ],
                    }),
                    (0, r.jsx)(p.$, {
                        disabled: !k,
                        fullWidth: !0,
                        onClick: D,
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
                            className: nR.kL,
                            children: [
                                (0, r.jsx)(ei.D, { variant: "heading-lg/medium", children: "Benefit configuration" }),
                                (0, r.jsx)("div", {
                                    className: nR.Nr,
                                    children: (0, r.jsxs)("div", {
                                        className: nR.Tc,
                                        children: [
                                            null != v.applicationAccountLinkBenefitConfig.reward_image &&
                                                (0, r.jsx)("img", {
                                                    src: v.applicationAccountLinkBenefitConfig.reward_image,
                                                    alt: "Reward",
                                                    className: nR.L8,
                                                }),
                                            (0, r.jsx)(g.E, {
                                                variant: "body-md/semibold",
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
var nw = a(812020),
    nM = a(584454),
    nP = a(404885);
function nL() {
    let e = (0, d.bG)([nw.A], () => nw.A.getDevToolsOverride()),
        t = (0, d.bG)([eg.default], () => (null != e ? (eg.default.getUser(e.otherUserId) ?? null) : null), [e]),
        [a, n] = o.useState(t?.username ?? ""),
        [l, i] = o.useState(e?.communicationProbability ?? 1),
        [s, c] = o.useState(e?.vcProbability ?? 1),
        u = a.trim(),
        m = (0, d.bG)([eg.default], () => (u.length > 0 ? (eg.default.findByTag(u) ?? null) : null), [u]),
        h = u.length > 0 && null == m,
        x = null != m && null != l && null != s;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(t0.B, {
                gap: 8,
                padding: 8,
                children: [
                    (0, r.jsx)(g.E, { variant: "body-md/semibold", children: "User Affinity Override" }),
                    (0, r.jsx)(g.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        children: "Injects a temporary affinity entry for the given user, resets on reload or logout.",
                    }),
                    (0, r.jsx)(f.k, {
                        label: "Target username",
                        value: a,
                        onChange: n,
                        placeholder: "pomelo_name",
                        error: h ? "No local user matches that username." : void 0,
                    }),
                    (0, r.jsxs)(t0.B, {
                        gap: 8,
                        direction: "horizontal",
                        align: "end",
                        children: [
                            (0, r.jsx)(nM.Q, {
                                label: "Comm. affinity",
                                mode: "decimal",
                                min: 0,
                                max: 1,
                                step: 0.1,
                                value: l,
                                onChange: i,
                            }),
                            (0, r.jsx)(nM.Q, {
                                label: "Voice affinity",
                                mode: "decimal",
                                min: 0,
                                max: 1,
                                step: 0.1,
                                value: s,
                                onChange: c,
                            }),
                            (0, r.jsxs)(nj.e, {
                                children: [
                                    (0, r.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: null == e ? "Apply" : "Update",
                                        onClick: function () {
                                            x &&
                                                null != m &&
                                                null != l &&
                                                null != s &&
                                                (0, nP.C)({
                                                    userId: m.id,
                                                    communicationProbability: l,
                                                    vcProbability: s,
                                                });
                                        },
                                        disabled: !x,
                                    }),
                                    (0, r.jsx)(p.$, {
                                        variant: "critical-secondary",
                                        size: "sm",
                                        text: "Clear",
                                        onClick: function () {
                                            ((0, nP.C)(null), n(""), i(1), c(1));
                                        },
                                        disabled: null == e,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    null != e &&
                        (0, r.jsxs)(g.E, {
                            variant: "body-xs/normal",
                            color: "text-feedback-positive",
                            children: ["Active: user ", t?.username ?? "unknown"],
                        }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
        ],
    });
}
var nU = a(541660);
function nG(e) {
    let { title: t, sortKey: a, activeSortKey: n, sortDir: l, onClick: i } = e,
        s = n === a ? ("desc" === l ? " \u25BC" : " \u25B2") : "";
    return (0, r.jsx)(en.D, {
        className: nU.K8,
        onClick: () => i(a),
        children: (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: t + s }),
    });
}
function nB() {
    let [e, t] = o.useState("affinity"),
        [a, n] = o.useState("desc"),
        l = o.useCallback(
            (a) => {
                e === a ? n((e) => ("asc" === e ? "desc" : "asc")) : (t(a), n("username" === a ? "asc" : "desc"));
            },
            [e],
        ),
        i = (0, d.yK)([nw.A, eg.default], () =>
            nw.A.getUserAffinities().map((e) => {
                let { otherUserId: t, communicationProbability: a, vcProbability: n, isFriend: l } = e;
                return { user: eg.default.getUser(t), affinity: a, vcProbability: n, isFriend: l, key: t };
            }),
        ),
        s = o.useMemo(
            () =>
                [...i].sort((t, n) => {
                    let l;
                    if ("username" === e) {
                        let e = t.user?.username ?? t.key,
                            a = n.user?.username ?? n.key;
                        l = e.localeCompare(a);
                    } else l = t[e] - n[e];
                    return "desc" === a ? -l : l;
                }),
            [i, e, a],
        ),
        c = o.useMemo(
            () => [
                {
                    key: "user",
                    cellClassName: nU.iL,
                    renderHeader: () =>
                        (0, r.jsx)(nG, {
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
                        (0, r.jsx)(nG, {
                            title: "COMMUNICATION AFFINITY",
                            sortKey: "affinity",
                            activeSortKey: e,
                            sortDir: a,
                            onClick: l,
                        }),
                    cellClassName: nU.nz,
                    render(e) {
                        let { affinity: t } = e;
                        return t.toFixed(5);
                    },
                },
                {
                    key: "vcProbability",
                    renderHeader: () =>
                        (0, r.jsx)(nG, {
                            title: "VOICE AFFINITY",
                            sortKey: "vcProbability",
                            activeSortKey: e,
                            sortDir: a,
                            onClick: l,
                        }),
                    cellClassName: nU.nz,
                    render(e) {
                        let { vcProbability: t } = e;
                        return t.toFixed(5);
                    },
                },
                {
                    key: "isFriend",
                    renderHeader: () => (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "IS FRIEND" }),
                    cellClassName: nU.nz,
                    render(e) {
                        let { isFriend: t } = e;
                        return t.toString();
                    },
                },
            ],
            [e, a, l],
        );
    return (0, r.jsxs)("div", {
        className: nU.nd,
        children: [(0, r.jsx)(nL, {}), i.length > 0 && (0, r.jsx)(t5, { columns: c, rowClassName: nU.nM, data: s })],
    });
}
var nF = a(536637),
    n$ = a.n(nF),
    nV = a(862482),
    nW = a(624479),
    nH = a(555704),
    nz = a(285796),
    nK = a(241326),
    nY = a(683438),
    nq = a(297413),
    nJ = a(379078),
    nQ = a(704554),
    nX = a(957565),
    nZ = a(5377),
    n0 = a(80703),
    n1 = a(46653);
let n2 = 0,
    n3 = [],
    n6 = 0,
    n5 = [],
    n8 = !1;
class n4 extends d.Ay.Store {
    static displayName = "AnalyticsLogStore";
    initialize() {
        this.waitFor(n1.default, nd.A);
    }
    get loggedEvents() {
        return n3;
    }
    get loggedEventsVersion() {
        return n6;
    }
    get loggedTriggers() {
        return n5;
    }
    get trackTriggers() {
        return n8;
    }
}
let n9 = new n4(C.h, {
    TRACK: function (e) {
        let { event: t, properties: a, fingerprint: n } = e;
        nd.A.isDeveloper &&
            (n3.push({
                key: (n2++).toString(),
                event: t,
                properties: a,
                fingerprint: null != n ? (0, n0.d)(n) : n1.default.getId(),
                timestamp: new Date(),
            }),
            n6++,
            n3.length > 500 && (n3 = n3.slice(-250)));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: a, exposureType: n, excluded: l, location: i, previouslyTracked: s } = e;
        !nd.A.isDeveloper ||
            (n8 &&
                (n5 = [
                    ...n5,
                    {
                        key: (0, eF.A)(),
                        experimentId: t,
                        descriptor: a,
                        exposureType: n,
                        excluded: l,
                        location: i,
                        previouslyTracked: s,
                        timestamp: new Date(),
                    },
                ]).length > 500 &&
                n5.shift());
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        n8 = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        ((n3 = []), n6++, (n5 = []));
    },
});
var n7 = a(658675);
function le(e) {
    let { className: t, children: a } = e;
    return (0, r.jsx)("dl", { className: ea()(t6.qo, t), children: a });
}
function lt(e) {
    let { name: t, children: a, copyValue: n } = e,
        [l, i] = o.useState(!1);
    return (
        o.useEffect(() => {
            if (l) {
                let e = setTimeout(() => i(!1), 1e3);
                return () => clearTimeout(e);
            }
        }, [l]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("dt", { className: t6.Bz, children: t }),
                (0, r.jsxs)("dd", {
                    className: t6.Nw,
                    children: [
                        a,
                        null != n
                            ? (0, r.jsx)(en.D, {
                                  tag: "span",
                                  className: t6.nH,
                                  onClick: () => (0, nX.C)(n, () => i(!0)),
                                  children: l
                                      ? (0, r.jsx)(tx.CheckmarkSmallIcon, { color: "currentColor", size: "sm" })
                                      : (0, r.jsx)(nW.CopyIcon, { color: "currentColor", size: "sm" }),
                              })
                            : null,
                    ],
                }),
            ],
        })
    );
}
function la(e) {
    let { value: t } = e;
    return (0, r.jsx)(n7.P, { checked: t });
}
var ln = a(412966);
let ll = [
    {
        key: "Event",
        cellClassName: ln.Hz,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "Location",
        cellClassName: ln.QN,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function li(e) {
    let { children: t } = e;
    return (0, r.jsx)(x.Ip, { orientation: "auto", className: ln._D, children: (0, r.jsx)("dl", { children: t }) });
}
function ls(e) {
    let { name: t, children: a, copyValue: n } = e,
        [l, i] = o.useState(!1);
    return (
        o.useEffect(() => {
            if (l) {
                let e = setTimeout(() => i(!1), 1e3);
                return () => clearTimeout(e);
            }
        }, [l]),
        (0, r.jsxs)("div", {
            className: ln.fY,
            children: [
                (0, r.jsx)("dt", { className: ln.m2, children: t }),
                (0, r.jsx)("dd", { children: a }),
                (0, r.jsx)(en.D, {
                    tag: "span",
                    className: ln.nH,
                    onClick: () => (0, nX.C)(JSON.stringify(n), () => i(!0)),
                    children: l
                        ? (0, r.jsx)(tx.CheckmarkSmallIcon, { color: "currentColor", size: "sm" })
                        : (0, r.jsx)(nW.CopyIcon, { color: "currentColor", size: "sm" }),
                }),
            ],
        })
    );
}
let lr = new Set(["client_performance_cpu", "client_performance_memory"]),
    lo = [
        {
            id: "details",
            name: "Details",
            group: nb.fu.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: a, timestamp: n, fingerprint: l },
                        onClose: i,
                        filteredEvents: s,
                    } = e,
                    o = eg.default.getUser(l),
                    d = n$()(n);
                return (0, r.jsxs)("div", {
                    className: ln.sw,
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, r.jsxs)(nu.Ay, {
                            className: ea()(t6.jr, ln.nZ),
                            children: [
                                (0, r.jsx)(nu.Ay.Icon, { icon: nH.AnalyticsIcon, tooltip: t }),
                                (0, r.jsxs)(nu.Ay.Title, {
                                    wrapperClassName: ln.qd,
                                    children: [
                                        t,
                                        (0, r.jsx)(en.D, {
                                            tag: "span",
                                            className: ln.KE,
                                            onClick: () => (0, nX.C)(t),
                                            children: (0, r.jsx)(nW.CopyIcon, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(nu.Ay.Icon, {
                                    icon: nW.CopyIcon,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, nX.C)(
                                            JSON.stringify(
                                                { event: t, timestamp: n, fingerprint: l, user: o?.id, ...a },
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, r.jsx)(nu.Ay.Icon, { icon: nz.CircleXIcon, tooltip: "Close", onClick: i }),
                            ],
                        }),
                        (0, r.jsxs)(le, {
                            className: ln.ZK,
                            children: [
                                (0, r.jsx)(lt, {
                                    name: "Timestamp (local)",
                                    copyValue: n.toISOString(),
                                    children: (0, r.jsxs)("time", {
                                        dateTime: n.toISOString(),
                                        title: (0, nZ.i$)(d, "LLLL"),
                                        children: ["(", n$().locale(), ") ", (0, nZ.mk)(d)],
                                    }),
                                }),
                                null != o &&
                                    (0, r.jsx)(lt, {
                                        name: "User",
                                        copyValue: o.id,
                                        children: (0, r.jsx)(nq.A, { user: o }),
                                    }),
                                (0, r.jsx)(lt, {
                                    name: "Fingerprint",
                                    copyValue: l,
                                    children: (0, r.jsx)("code", { children: l }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(li, {
                            children: Object.entries(a).map((e) => {
                                let [a, n] = e,
                                    l = lr.has(a)
                                        ? (function (e, t, a) {
                                              let n = e.filter((e) => e.event === t);
                                              if (0 === n.length) return { average: null, count: 0 };
                                              let l = null,
                                                  i = 0;
                                              for (let e of n) {
                                                  let t = e.properties[a];
                                                  "number" == typeof t && ((i += 1), null == l ? (l = t) : (l += t));
                                              }
                                              return { average: null !== l ? l / n.length : null, count: i };
                                          })(s, t, a)
                                        : null;
                                return (0, r.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, r.jsx)(
                                                ls,
                                                {
                                                    name: `${a}:`,
                                                    copyValue: { [a]: n || null },
                                                    children:
                                                        null != n
                                                            ? (0, r.jsx)("code", { children: JSON.stringify(n) })
                                                            : (0, r.jsx)("code", {
                                                                  className: ln.HO,
                                                                  children: "null",
                                                              }),
                                                },
                                                a,
                                            ),
                                            null !== l &&
                                                null !== l.average &&
                                                (0, r.jsx)(
                                                    ls,
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
    ld = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(ld)
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
    lc = {
        searchType: nJ.n.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: a } = e;
            return null != a.location ? [t, a.location] : t;
        },
        throttleMs: 100,
    };
function lu() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (0, d.bG)([n9], () => n9.loggedEventsVersion),
        [l, i] = o.useState(() => Object.keys(ld)),
        [s, c] = o.useState(n9.loggedEvents),
        u = o.useCallback((e) => {
            c(e);
        }, []);
    (0, nQ.RT)(t, n9.loggedEvents, u, lc, [n]);
    let m = s.filter((e) => {
            for (let t of l) if (ld[t].filter(e)) return !0;
            return !1;
        }),
        [h, p] = o.useState(void 0),
        g = m.find((e) => e.key === h),
        { TabBar: x, renderSelectedTab: v } = (0, nv.A)({ tabs: lo }, []);
    return (0, r.jsxs)("div", {
        ref: e,
        className: ea()(t6.nd, ln.nd),
        children: [
            (0, r.jsxs)("div", {
                className: ln.rh,
                children: [
                    (0, r.jsx)(nV.$n, {
                        className: ln.Q$,
                        look: nV.$n.Looks.BLANK,
                        size: nV.$n.Sizes.ICON,
                        onClick: es.eY,
                        children: (0, r.jsx)("span", {
                            title: nD.intl.string(nD.t.VkKicb),
                            children: (0, r.jsx)(nK.TrashIcon, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": nD.intl.string(nD.t.VkKicb),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", { className: ln.Bi }),
                    (0, r.jsx)("div", {
                        className: ln.uW,
                        children: Object.entries(ld).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                en.D,
                                {
                                    className: ea()(ln.pb, l.includes(t) && ln.bx),
                                    onClick: () => {
                                        i((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
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
                className: ln.rh,
                children: (0, r.jsx)(nY.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, r.jsx)(t5, { columns: ll, data: m, selectedRowKey: h, onClickRow: (e) => p(e.key) }),
            null != g &&
                (0, r.jsxs)(nx, {
                    className: ln.rf,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(x, {}), v({ loggedEvent: g, onClose: () => p(void 0), filteredEvents: m })],
                }),
        ],
    });
}
var lm = a(382483),
    lh = a(385113),
    lp = a(317672);
function lg(e) {
    let { config: t } = e,
        a = Object.entries(t.surfaces ?? {});
    return (0, r.jsxs)(t0.B, {
        gap: 8,
        padding: 8,
        className: lp.lt,
        children: [
            (0, r.jsx)(g.E, { variant: "body-sm/semibold", color: "text-strong", children: t.display_name }),
            (0, r.jsxs)(g.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                children: ["Config ID: ", t.config_id],
            }),
            (0, r.jsxs)(g.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                children: ["App ID: ", t.application_id],
            }),
            (0, r.jsxs)(g.E, { variant: "body-xs/normal", color: "text-muted", children: ["Status: ", t.status] }),
            null != t.updated_at &&
                (0, r.jsxs)(g.E, {
                    variant: "body-xs/normal",
                    color: "text-muted",
                    children: ["Updated: ", t.updated_at],
                }),
            null != t.published_at &&
                (0, r.jsxs)(g.E, {
                    variant: "body-xs/normal",
                    color: "text-muted",
                    children: ["Published: ", t.published_at],
                }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(g.E, {
                variant: "body-xs/semibold",
                color: "text-strong",
                children: ["Surfaces (", a.length, ")"],
            }),
            0 === a.length
                ? (0, r.jsx)(g.E, {
                      variant: "body-xs/normal",
                      color: "text-muted",
                      children: "No surfaces configured",
                  })
                : a.map((e) => {
                      let [t, a] = e;
                      return (0, r.jsxs)(
                          t0.B,
                          {
                              gap: 4,
                              padding: 4,
                              className: lp.YL,
                              children: [
                                  (0, r.jsx)(g.E, { variant: "body-xs/semibold", color: "text-default", children: t }),
                                  (0, r.jsxs)(g.E, {
                                      variant: "body-xs/normal",
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
function lx(e) {
    let { config: t, isSelected: a, onSelect: n } = e;
    return (0, r.jsxs)(t0.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: a ? lp.FM : lp.gt,
        children: [
            (0, r.jsx)(en.D, {
                className: lp.Av,
                onClick: n,
                children: (0, r.jsxs)(t0.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(g.E, { variant: "body-sm/medium", color: "text-strong", children: t.display_name }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-xs/normal",
                            color: "text-muted",
                            children: [t.config_id, " \xb7 ", t.application_id],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(p.$, {
                variant: "secondary",
                size: "sm",
                text: "Refetch",
                onClick: () => (0, lm.un)(t.application_id, { force: !0 }),
            }),
        ],
    });
}
function lv() {
    let e = (0, d.bG)([lh.A], () => lh.A.getFeaturedFetchState());
    return (0, r.jsxs)(t0.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(t0.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(g.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        children: "Featured Configs",
                    }),
                    (0, r.jsxs)(g.E, { variant: "body-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, r.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, lm.Wq)({ force: !0 }),
            }),
        ],
    });
}
function lb() {
    let e = (0, d.bG)([lh.A], () => lh.A.getDeveloperFetchState());
    return (0, r.jsxs)(t0.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(t0.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(g.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        children: "Developer Configs",
                    }),
                    (0, r.jsxs)(g.E, { variant: "body-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, r.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, lm.i$)({ force: !0 }),
            }),
        ],
    });
}
function lj() {
    let [e, t] = o.useState(""),
        a = (0, d.bG)([lh.A], () => (e.length > 0 ? lh.A.getFetchState(e) : null)),
        n = (0, d.bG)([lh.A], () => (e.length > 0 ? lh.A.getConfigs(e) : null));
    return (0, r.jsxs)(t0.B, {
        gap: 8,
        children: [
            (0, r.jsx)(g.E, { variant: "body-md/semibold", color: "text-strong", children: "Fetch by Application ID" }),
            (0, r.jsx)(f.k, { placeholder: "Application ID", value: e, onChange: (e) => t(e) }),
            (0, r.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Fetch",
                disabled: 0 === e.length,
                onClick: () => (0, lm.un)(e, { force: !0 }),
            }),
            null != a &&
                (0, r.jsxs)(g.E, { variant: "body-xs/normal", color: "text-muted", children: ["Status: ", a] }),
            null != n &&
                n.length > 0 &&
                (0, r.jsx)(t0.B, { gap: 4, children: n.map((e) => (0, r.jsx)(lg, { config: e }, e.config_id)) }),
        ],
    });
}
function lf(e) {
    let { configs: t, selectedConfigId: a, onSelectConfig: n } = e,
        l = (0, d.bG)([lh.A], () => lh.A.getFeaturedFetchState());
    return (0, r.jsxs)(t0.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(g.E, {
                variant: "body-md/semibold",
                color: "text-strong",
                children: ["All Loaded Configs (", t.length, ")"],
            }),
            l === lh.e.FETCHING &&
                (0, r.jsx)(g.E, { variant: "body-sm/normal", color: "text-muted", children: "Loading..." }),
            t.map((e) =>
                (0, r.jsx)(
                    lx,
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
function ly(e) {
    let { config: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(t0.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(g.E, { variant: "body-md/semibold", color: "text-strong", children: "Config Details" }),
                    (0, r.jsx)(lg, { config: t }),
                ],
            }),
        ],
    });
}
function lE() {
    let [e, t] = o.useState(null),
        a = Object.values((0, d.bG)([lh.A], () => lh.A.getAllConfigsByApplication())).flat(),
        n = null != e ? a.find((t) => t.config_id === e) : null;
    return (0, r.jsx)(x.Ar, {
        children: (0, r.jsxs)(t0.B, {
            gap: 16,
            padding: 8,
            className: lp.zr,
            children: [
                (0, r.jsx)(ei.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: "Application Widget Configs",
                }),
                (0, r.jsx)(p.$, {
                    size: "sm",
                    variant: "critical-secondary",
                    text: "Reset store",
                    onClick: () => C.h.dispatch({ type: "APPLICATION_WIDGET_CONFIG_DEBUG_RESET" }),
                }),
                (0, r.jsx)(lv, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(lb, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(lj, {}),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(lf, { configs: a, selectedConfigId: e, onSelectConfig: t }),
                null != n && (0, r.jsx)(ly, { config: n }),
            ],
        }),
    });
}
var lC = a(513520),
    lS = a(134460),
    l_ = a(468747);
let lN = [
    {
        key: "Channel",
        cellClassName: l_._w,
        render(e) {
            let { channelName: t } = e;
            return t;
        },
    },
    {
        key: "score",
        renderHeader: () => (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "SCORE" }),
        cellClassName: l_.t6,
        render(e) {
            let { score: t } = e;
            return t.toFixed(5);
        },
    },
];
function lA() {
    o.useEffect(() => {
        (0, lC.I)();
    }, []);
    let e = (0, d.yK)([lS.A, aQ.A], () =>
        lS.A.getChannelAffinities()
            .map((e) => {
                let { channelId: t, score: a } = e;
                return { key: t, channelName: aQ.A.getChannel(t)?.name ?? t, score: a };
            })
            .sort((e, t) => t.score - e.score),
    );
    return 0 === e.length ? null : (0, r.jsx)(t5, { className: t6.nd, columns: lN, rowClassName: l_.nM, data: e });
}
function lk() {
    return (0, r.jsxs)(g.E, {
        variant: "body-lg/normal",
        children: [
            "Under Construction",
            " ",
            (0, r.jsx)("span", { role: "img", "aria-label": "Construction", children: "\uD83D\uDEA7" }),
        ],
    });
}
var lI = a(105565),
    lD = a(517057),
    lT = a(333714);
function lR(e) {
    switch (e) {
        case lI.r.DC_DISMISSED:
            return "DISMISS:";
        case lI.r.DC_SHOWN:
            return "SHOW:";
        case lI.r.DC_SHOW_REQUEST:
            return "REQUEST TO SHOW:";
        default:
            return "UNKNOWN TYPE:";
    }
}
let lO = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: a } = e;
                return `${t} ${aG.M[a]}`;
            },
        },
    ],
    lw = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return `${aG.M[t]}`;
            },
        },
    ];
function lM() {
    let e = (0, d.bG)([lI.A], () => lI.A.getDCFEvents()),
        t = (0, lD.Ay)((e) => e.candidates),
        a = (0, lD.Ay)((e) => e.lastWinnerTime),
        n = 0 !== a ? n$()(a).fromNow() : "n/a",
        l = (0, lD.Ay)((e) => (0 === e.lastWinnerTime ? null : e.recentlyShown[0])),
        i = e.map((e) => {
            let { eventType: t, dismissibleContent: a } = e;
            return { key: lR(t) + a.toString(), event: lR(t), dismissibleContent: a };
        }),
        s = Array.from(t.keys()).map((e) => ({ key: e.toString(), dismissibleContent: e }));
    return (0, r.jsxs)("div", {
        className: lT.KE,
        children: [
            (0, r.jsxs)("div", { className: lT.pq, children: ["Last winner time: ", n] }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("div", { className: lT.pq, children: ["Last winner: ", null != l ? aG.M[l] : "None"] }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("div", {
                className: lT.uI,
                children: (0, r.jsx)(t5, { className: lT.Th, columns: lw, data: s }),
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)(t5, { columns: lO, data: i }),
        ],
    });
}
var lP = a(516521),
    lL = a(541689),
    lU = a(199773);
function lG() {
    let e = (0, o.useCallback)((e) => {
        let t = new Set(lB());
        t.delete(e);
        let a = Array.from(t).slice(0, 4);
        (a.unshift(e), tZ.w.set("RecentDismissibleOverrides", a));
    }, []);
    return [lB(), e];
}
function lB() {
    return tZ.w.get("RecentDismissibleOverrides") ?? [];
}
a(667532);
var lF = a(662546),
    l$ = a(643278),
    lV = a(256787),
    lW = a(20439);
let lH = o.memo(function (e) {
    let { className: t, content: a, onChange: n } = e,
        l = aG.M[a],
        { isDismissed: i, handleToggleDismissState: s } = (0, lW.A)(l),
        [d, c] = o.useState(!1),
        u = o.useCallback(() => {
            (n?.(a), s());
        }, [n, s, a]),
        h = o.useCallback(
            (e) => {
                (e.preventDefault(), c(!0), navigator.clipboard.writeText(a.toLowerCase()));
            },
            [a],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(t0.B, {
                className: t,
                direction: "horizontal",
                align: "center",
                children: [
                    (0, r.jsx)(eX.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: d ? lF.ClipboardCheckIcon : l$.ClipboardListIcon,
                        onClick: h,
                        "aria-label": d ? "Copied" : "Copy",
                    }),
                    (0, r.jsx)(m.d, {
                        label: `${a.toLowerCase()} (${aG.M[a]})`,
                        description: (0, lV.Zm)(l)
                            ? (function (e) {
                                  let t = aF.A.settings.userContent?.recurringDismissibleContentStates?.[e];
                                  if (null == t) return null;
                                  let a = [],
                                      { lastDismissedVersion: n, lastDismissedAtMs: l, lastDismissedObjectId: i } = t;
                                  if (
                                      (void 0 !== n && 0 !== n && a.push(`last_dismissed_version: ${n}`), void 0 !== l)
                                  ) {
                                      let e = Number(l),
                                          t = Number.isNaN(e) ? "n/a" : new Date(e).toLocaleString();
                                      a.push(`last_dismissed_at: ${t}`);
                                  }
                                  return (void 0 !== i && "0" !== i && a.push(`last_dismissed_object_id: ${i}`),
                                  0 === a.length)
                                      ? null
                                      : a.join(", ");
                              })(l)
                            : null,
                        checked: i,
                        onChange: u,
                    }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
        ],
    });
});
function lz(e) {
    let { items: t, onChange: a } = e,
        [n, l] = lG(),
        i = (0, o.useCallback)(
            (e) => {
                (l(e), a?.(e));
            },
            [l, a],
        );
    return (0, r.jsx)(t0.B, {
        gap: 16,
        children: t.filter((e) => isNaN(Number(e))).map((e) => (0, r.jsx)(lH, { content: e, onChange: i }, e)),
    });
}
function lK(e) {
    let { searchQuery: t = "" } = e,
        a = (0, lD.Ay)((e) => e.recentlyShown),
        [n, l] = lG(),
        i = n
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .filter((e) => !a.includes(aG.M[e]))
            .slice(0, 3);
    return 0 === i.length
        ? null
        : (0, r.jsx)(u.n, { label: "Recent Overrides", children: (0, r.jsx)(lz, { items: i }) });
}
function lY(e) {
    let { searchQuery: t = "" } = e,
        a = (0, lD.Ay)((e) => e.recentlyShown)
            .map((e) => aG.M[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .slice(0, 3);
    return 0 === a.length ? null : (0, r.jsx)(u.n, { label: "Recently Shown", children: (0, r.jsx)(lz, { items: a }) });
}
var lq = a(607734);
function lJ() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: a,
            upsellBackoffOverridden: n,
        } = (0, d.cf)([lU.A], () => ({
            dailyCapReached: lU.A.hasUserHitDCCap(),
            dailyCapOverridden: lU.A.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: lU.A.newUserMinAgeRequiredOverridden,
            upsellBackoffOverridden: lU.A.upsellBackoffOverridden,
        })),
        [l, i] = o.useState(""),
        [s, c] = o.useState(20),
        h = o.useMemo(
            () =>
                Object.keys(aG.M)
                    .filter((e) => e.toLowerCase().includes(l.toLowerCase()))
                    .reverse(),
            [l],
        ),
        x = o.useCallback(
            (e) => {
                let t = e.currentTarget;
                t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && s < h.length && c((e) => e + 100);
            },
            [s, h.length],
        );
    return (0, r.jsx)(lP.Ch, {
        onScroll: x,
        children: (0, r.jsxs)("div", {
            className: lq.KE,
            children: [
                (0, r.jsxs)(u.n, {
                    label: "Dismissible Content Overrides",
                    children: [
                        (0, r.jsxs)(t0.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset Daily Cap",
                                    onClick: () => (0, lL.Ab)(),
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Undismiss All DCs",
                                    onClick: () => (0, aB.nT)(),
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Dismiss All DCs",
                                    onClick: () => (0, aB.D1)(),
                                }),
                                (0, r.jsx)(g.E, {
                                    variant: "body-sm/normal",
                                    color: "text-subtle",
                                    children: `Daily Cap Reached: ${e ? "Yes" : "No"}`,
                                }),
                            ],
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Override Dismissible Content Daily Cap",
                            checked: t,
                            onChange: lL.SE,
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: a,
                            onChange: lL.U$,
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Override 60-Minute Backoff Between DC Displays",
                            checked: n,
                            onChange: lL.M1,
                        }),
                    ],
                }),
                (0, r.jsx)(lY, {}),
                (0, r.jsx)(lK, {}),
                (0, r.jsxs)(u.n, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, r.jsx)(nY.I, { query: l, onChange: i, onClear: () => i("") }),
                        (0, r.jsx)(lz, { items: h.slice(0, s) }),
                    ],
                }),
            ],
        }),
    });
}
var lQ = a(276086),
    lX = a(154323),
    lZ = a(504565);
function l0() {
    let e = (0, d.bG)([lX.A], () => lX.A.allWithDescriptions(), [], d.My),
        t = o.useMemo(
            () =>
                e.map((e) => {
                    let [t, a, n] = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                m.d,
                                { label: n, description: t, checked: a, onChange: (e) => (0, lQ.L)(t, e) },
                                t,
                            ),
                            (0, r.jsx)(b.c, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, r.jsxs)("div", {
        className: lZ.kL,
        children: [
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: lZ.x6,
                children: (0, r.jsx)(p.$, { variant: "primary", text: "Clear all", onClick: lQ.$, fullWidth: !0 }),
            }),
            (0, r.jsx)("div", { className: lZ.vu, children: t }),
        ],
    });
}
var l1 = a(106839);
function l2() {
    let e = (0, d.bG)([t9.A], () => t9.A.detectableGamesEtag),
        t = (0, d.bG)([t9.A], () => t9.A.lastFetched),
        a = (0, d.bG)([t9.A], () => t9.A.games.length);
    return (0, r.jsxs)(t0.B, {
        gap: 4,
        children: [
            (0, r.jsx)(ei.D, { variant: "heading-xs/semibold", children: "Cache Status" }),
            (0, r.jsxs)(g.E, {
                variant: "body-sm/normal",
                children: [(0, r.jsx)("strong", { children: "Total games:" }), " ", a],
            }),
            (0, r.jsxs)(g.E, {
                variant: "body-sm/normal",
                children: [
                    (0, r.jsx)("strong", { children: "ETag:" }),
                    " ",
                    "" === e ? "(empty)" : (0, r.jsx)("span", { className: l1.ti, children: e }),
                ],
            }),
            (0, r.jsxs)(g.E, {
                variant: "body-sm/normal",
                children: [
                    (0, r.jsx)("strong", { children: "Last fetched:" }),
                    " ",
                    null == t ? "never" : new Date(t).toLocaleString(),
                ],
            }),
        ],
    });
}
function l3(e) {
    let { game: t } = e,
        { data: a } = (0, aT.I)(t.id),
        n = null != a && a.name !== t.name;
    return (0, r.jsxs)(t0.B, {
        gap: 12,
        className: l1.f_,
        children: [
            (0, r.jsxs)(t0.B, {
                direction: "horizontal",
                gap: 12,
                align: "center",
                children: [
                    (0, r.jsx)(aI.A, { game: a, size: aI.M.LARGE }),
                    (0, r.jsxs)(t0.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(ei.D, { variant: "heading-lg/semibold", children: t.name }),
                            (0, r.jsx)(g.E, { variant: "body-sm/normal", color: "text-muted", children: t.id }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)(t0.B, {
                gap: 4,
                children: [
                    (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "GameStore" }),
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children:
                            null == a
                                ? "No record fetched. The icon above comes from here, not from the detectable payload, so it is blank."
                                : `name: ${a.name}`,
                    }),
                    n &&
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-feedback-critical",
                            children: "Differs from the detectable name above.",
                        }),
                ],
            }),
            (0, r.jsxs)(t0.B, {
                gap: 4,
                className: l1.Uq,
                children: [
                    (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "DetectableGameStore" }),
                    (0, r.jsx)("pre", { className: l1.aY, children: JSON.stringify(t, null, 2) }),
                ],
            }),
        ],
    });
}
function l6() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(""),
        l = (0, d.bG)([t9.A], () => t9.A.games),
        i = o.useMemo(
            () =>
                l.filter((e) => null != e.name && "" !== e.name).map((e) => ({ id: e.id, value: e.id, label: e.name })),
            [l],
        ),
        s = o.useCallback((e) => {
            (t(e), null != e && n(""));
        }, []),
        c = o.useCallback((e) => {
            (n(e), e.trim().length > 0 && t(null));
        }, []),
        u = a.trim(),
        m = u.length > 0 ? u : (e ?? void 0),
        h = (0, d.bG)([t9.A], () => (null != m ? (t9.A.getDetectableGame(m) ?? null) : null), [m]);
    return (0, r.jsx)("div", {
        className: ea()(t6.nd, l1.kL),
        children: (0, r.jsxs)(t0.B, {
            gap: 16,
            padding: 12,
            className: l1.rf,
            children: [
                (0, r.jsxs)(t0.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: "Detectable Cache" }),
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children:
                                "Inspect the local detectable games cache. Use this to verify whether a SKU or executable change has propagated to your client.",
                        }),
                    ],
                }),
                (0, r.jsx)(l2, {}),
                (0, r.jsxs)(t0.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(ei.D, { variant: "heading-xs/semibold", children: "Search" }),
                        (0, r.jsx)(ak.Z, {
                            label: "Search games",
                            hideLabel: !0,
                            placeholder: "Search for a game\u2026",
                            options: i,
                            value: u.length > 0 ? void 0 : (e ?? void 0),
                            onSelectionChange: s,
                            selectionMode: "single",
                            clearable: !0,
                        }),
                    ],
                }),
                (0, r.jsxs)(t0.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(ei.D, { variant: "heading-xs/semibold", children: "Game ID" }),
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
                                ? (0, r.jsx)(l3, { game: h })
                                : (0, r.jsxs)(g.E, {
                                      variant: "body-sm/normal",
                                      color: "text-feedback-critical",
                                      children: ["No entry in cache for ID ", m, "."],
                                  }),
                        ],
                    }),
            ],
        }),
    });
}
var l5 = a(858899),
    l8 = a(123292),
    l4 = a(273626),
    l9 = a(56562);
let l7 = [
    { label: "Wuthering Waves", value: "1247227126416146462" },
    { label: "Marvel Rivals", value: "1314395942253756416" },
    { label: "VALORANT", value: "700136079562375258" },
    { label: "League of Legends", value: "1402418696126992445" },
    { label: "World of Warcraft", value: "356875762940379136" },
];
function ie(e) {
    let { runningGame: t, isDebugGame: a } = e,
        { data: n } = (0, aT.I)(t.id);
    return (0, r.jsxs)(t0.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            null != n && (0, r.jsx)(aI.A, { game: n }),
            (0, r.jsxs)(t0.B, {
                justify: "center",
                gap: 0,
                children: [
                    (0, r.jsx)(g.E, { variant: "body-md/normal", children: n?.name }),
                    a && (0, r.jsx)(g.E, { variant: "footnote/normal", children: "Debug" }),
                ],
            }),
        ],
    });
}
function it() {
    let e = (0, d.bG)([N.Ay], () => N.Ay.getRunningGames()),
        t = (0, d.bG)([N.Ay], () => N.Ay.getDebugRunningGame()),
        [a, n] = (0, o.useState)(t?.id ?? ""),
        l = (0, o.useMemo)(
            () =>
                l7.map((e) => {
                    let { label: t, value: a } = e;
                    return { label: t, value: a, id: a };
                }),
            [],
        );
    function i(e) {
        if (null == e || "" === e) return void (0, l4.x)(null);
        let t = t9.A.getDetectableGame(e),
            a = t?.executables[0],
            n = t?.thirdPartySkus[0]?.distributor;
        if (null == t || null == a) return (0, l5.P0)({ text: "Invalid Game ID", variant: "critical" });
        (0, l4.x)({
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
            fullscreenType: l9.aI.UNKNOWN,
            cmdLine: "",
            nativeProcessObserverId: -1,
        });
    }
    return (0, r.jsxs)(t0.B, {
        gap: 32,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)(t0.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: "Running Games" }),
                    e.length > 0 &&
                        (0, r.jsx)("div", {
                            children: e.map((e) =>
                                (0, r.jsx)(ie, { runningGame: e, isDebugGame: t?.id === e.id }, e.id),
                            ),
                        }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(t0.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: "Set Debug Running Game" }),
                    (0, r.jsx)(f.k, { label: "Custom Game ID", value: a, onChange: n }),
                    (0, r.jsx)(ak.Z, {
                        label: "Pick a Preset Game",
                        options: l,
                        value: t?.id ?? "",
                        onSelectionChange: function (e) {
                            i(e);
                        },
                        selectionMode: "single",
                        clearable: !0,
                    }),
                    (0, r.jsxs)(t0.B, {
                        direction: "horizontal",
                        gap: 16,
                        justify: "end",
                        align: "end",
                        children: [
                            null != t &&
                                (0, r.jsx)(l8.Q, { variant: "secondary", text: "Clear", onClick: () => i(null) }),
                            (0, r.jsx)(p.$, { variant: "primary", text: "Detect Game", onClick: () => i(a) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var ia = a(620632),
    il = a(240248),
    ii = a(974009);
function is() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(null),
        [l, i] = o.useState(null),
        s = o.useCallback(async () => {
            try {
                (t(!0), n(null), i(null));
                let e = await ia.Bo.put({
                    url: "/users/@me/developer-portal/onboarding",
                    body: { completed: !1 },
                    rejectWithError: !0,
                });
                n(`${e.status}: ${e.text}`);
            } catch (e) {
                i(e instanceof Error ? e.message : String(e));
            } finally {
                t(!1);
            }
        }, []);
    return (0, r.jsxs)(t0.B, {
        direction: "vertical",
        gap: 4,
        children: [
            (0, r.jsx)(p.$, { variant: "primary", onClick: s, text: "Reset Onboarding", disabled: e, fullWidth: !0 }),
            !(0, il.uJ)(a) && (0, r.jsx)(g.E, { variant: "body-md/normal", color: "status-positive", children: a }),
            !(0, il.uJ)(l) &&
                (0, r.jsx)(g.E, { variant: "body-md/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function ir() {
    return (0, r.jsx)("div", {
        className: ii.n,
        children: (0, r.jsx)(t0.B, { direction: "vertical", gap: 16, children: (0, r.jsx)(is, {}) }),
    });
}
a(172879);
var io = a(64015),
    id = a.n(io),
    ic = a(874804),
    iu = a(866665),
    im = a(782134),
    ih = a(113494),
    ip = a(603349),
    ig = a(108715);
function ix(e) {
    return parseFloat(e.toFixed(3));
}
let iv = [
    {
        key: "Store",
        cellClassName: ig.lA,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "Time",
        cellClassName: ig.i7,
        render(e) {
            let { trace: t } = e;
            return `${ix(t.time)} ms`;
        },
    },
];
function ib(e) {
    let { actionLog: t } = e,
        a = o.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, r.jsx)(x.Ip, { children: (0, r.jsx)(t5, { columns: iv, data: a }) });
}
let ij = [
    {
        id: "action",
        name: "Action",
        group: nb.fu.NONE,
        render(e) {
            let { actionLog: t } = e,
                a = n$()(t.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(le, {
                        className: ig.mP,
                        children: [
                            (0, r.jsx)(lt, {
                                name: "Created at",
                                children: (0, r.jsx)("time", {
                                    dateTime: t.createdAt?.toISOString(),
                                    title: (0, nZ.i$)(a, "LLLL"),
                                    children: (0, nZ.mk)(a),
                                }),
                            }),
                            (0, r.jsxs)(lt, { name: "Total Time", children: [ix(t.totalTime), " ms"] }),
                        ],
                    }),
                    (0, r.jsx)(x.Ip, { className: ig.Dx, children: (0, r.jsx)(nm.A, { data: t.action }) }),
                ],
            });
        },
    },
    {
        id: "traces",
        name: "Store Handlers",
        group: nb.fu.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, r.jsx)(ib, { actionLog: t });
        },
    },
];
function iy(e) {
    let { actionLog: t, initialHeight: a } = e,
        n = o.useMemo(
            () =>
                t.error
                    ? [
                          ...ij,
                          {
                              id: "error",
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(ip.A, { className: ig.ik }), "Error"],
                              }),
                              group: nb.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: ea()(ig.u4, t6.KE),
                                              children: (0, r.jsx)("div", {
                                                  className: t6.R5,
                                                  children: (0, r.jsx)(nV.$n, {
                                                      className: t6.Q$,
                                                      size: nV.$n.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, r.jsx)(x.Ip, {
                                              className: ig.Dx,
                                              children: (0, r.jsx)(nm.A, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : ij,
            [t],
        ),
        { TabBar: l, renderSelectedTab: i } = (0, nv.A)({ tabs: n }, [n]);
    return (0, r.jsxs)(nx, {
        className: ig.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(nu.Ay, {
                className: ea()(t6.jr, ig.nZ),
                children: [
                    (0, r.jsx)(nu.Ay.Icon, { icon: ic.ReceiptIcon, tooltip: t.name }),
                    (0, r.jsx)(nu.Ay.Title, {
                        wrapperClassName: ea()(t6.qd, t6.ZE),
                        className: t6.Pz,
                        children: t.name,
                    }),
                    (0, r.jsx)(nu.Ay.Icon, {
                        icon: nW.CopyIcon,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let a = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, a) => {
                                    var n;
                                    return ((t[a] = ((n = e[a]), ej.AKn.test(n) ? "REDACTED" : n)), t);
                                }, {}),
                                null,
                                2,
                            );
                            (0, nX.C)(a, () =>
                                (0, l5.P0)({ text: "Copied action log data to clipboard", variant: "success" }),
                            );
                        },
                    }),
                ],
            }),
            i({ actionLog: t }),
        ],
    });
}
let iE = [
        {
            key: "Action",
            cellClassName: ig.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.error && (0, r.jsx)(ip.A, { className: ig.ik }), t.name],
                });
            },
        },
        {
            key: "Total Time",
            cellClassName: ig.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${ix(t.totalTime)} ms`;
            },
        },
        {
            key: "Timestamp",
            cellClassName: ig.i7,
            render(e) {
                let { actionLog: t } = e;
                return n$()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    iC = {
        searchType: nJ.n.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function iS() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (function (e) {
            let [t, a] = o.useState(e.logs);
            return (
                o.useEffect(() => {
                    let t = id()(() => {
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
        })(C.h.actionLogger),
        l = o.useMemo(() => n.map((e) => ({ key: e.id.toString(), actionLog: e })).toReversed(), [n]),
        [i, s] = o.useState(l),
        [d, c] = o.useState(l),
        [u, m] = o.useState(!1),
        [h, p] = o.useState(),
        g = o.useCallback((e) => {
            c(e);
        }, []);
    (0, nQ.RT)(t, u ? i : l, g, iC);
    let x = o.useCallback(
            (e) => {
                (s(l), m(e));
            },
            [l],
        ),
        v = t.trim().length > 0,
        b = o.useMemo(() => (v ? d : u ? i : l), [l, d, v, u, i]),
        j = u ? "Enable Event Tracking" : "Pause Event Tracking";
    return (0, r.jsxs)("div", {
        ref: e,
        className: ea()(t6.nd, ig.nd),
        children: [
            (0, r.jsxs)("div", {
                className: ig.KE,
                children: [
                    (0, r.jsx)(iu.m, {
                        text: j,
                        children: (0, r.jsx)(eX.K, {
                            size: "sm",
                            variant: u ? "primary" : "active",
                            icon: u ? im.PlayIcon : ih.PauseIcon,
                            "aria-label": j,
                            onClick: () => x(!u),
                        }),
                    }),
                    (0, r.jsx)(nY.I, {
                        size: "sm",
                        query: t,
                        onChange: a,
                        onClear: () => a(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, r.jsx)(t5, {
                columns: iE,
                data: b,
                selectedRowKey: h?.id.toString(),
                onClickRow: (e) => p(e.actionLog),
            }),
            null != h &&
                (0, r.jsx)(iy, { actionLog: h, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
var i_ = a(936388),
    iN = a(269248);
function iA() {
    let e = o.useRef(null);
    return (0, r.jsx)("div", {
        ref: e,
        className: ea()(t6.nd, iN.n),
        children: (0, r.jsx)(p.$, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: i_.A.clearUploadedKeyVersions,
        }),
    });
}
var ik = a(409181),
    iI = a(881520),
    iD = a(670455),
    iT = a(932661);
let iR = [
    { id: "seconds", label: "second(s)", value: 1e3 },
    { id: "minutes", label: "minute(s)", value: 6e4 },
    { id: "hours", label: "hour(s)", value: 36e5 },
    { id: "days", label: "day(s)", value: 864e5 },
];
function iO() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(0),
        [l, i] = o.useState(1e3),
        [s, c] = o.useState(0),
        m = (0, d.bG)([iI.A], () => (null === e ? null : (iI.A.getFeedbackConfig(iD.MW[e]) ?? ik.u[iD.MW[e]]))),
        h = Object.entries(iD.MW),
        x = h.slice(h.length / 2).map((e) => {
            let [t] = e;
            return { id: t, label: t, value: t };
        }),
        v = o.useMemo(() => null != e && s >= 0 && s <= 100 && a >= 0, [e, s, a]);
    return (0, r.jsx)("div", {
        className: iT.kL,
        children: (0, r.jsxs)(t0.B, {
            gap: 32,
            children: [
                (0, r.jsx)(j.l, {
                    label: "Feedback Survey",
                    options: x,
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
                                    (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "Current cooldown" }),
                                    (0, r.jsx)(g.E, {
                                        variant: "body-sm/normal",
                                        children: `${m.cooldown / 1e3} second(s) or`,
                                    }),
                                    (0, r.jsx)(g.E, {
                                        variant: "body-sm/normal",
                                        children: `${m.cooldown / 6e4} minute(s) or`,
                                    }),
                                    (0, r.jsx)(g.E, {
                                        variant: "body-sm/normal",
                                        children: `${m.cooldown / 36e5} hour(s) or`,
                                    }),
                                    (0, r.jsx)(g.E, {
                                        variant: "body-sm/normal",
                                        children: `${m.cooldown / 864e5} day(s)`,
                                    }),
                                ],
                            }),
                        (0, r.jsxs)(t0.B, {
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
                                    options: iR,
                                    value: l,
                                    onSelectionChange: i,
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
                        value: s.toString(),
                        type: "number",
                        onChange: (e) => c(parseFloat(e)),
                    }),
                }),
                (0, r.jsxs)(nj.e, {
                    children: [
                        (0, r.jsx)(p.$, {
                            variant: "critical-primary",
                            text: "Clear Override",
                            onClick: () =>
                                void (
                                    null != m &&
                                    C.h.dispatch({ type: "FEEDBACK_OVERRIDE_CLEAR", feedbackType: m.feedbackType })
                                ),
                            disabled: !v,
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Update",
                            onClick: () =>
                                void (
                                    null != m &&
                                    C.h.dispatch({
                                        type: "FEEDBACK_OVERRIDE_SET",
                                        feedbackType: m.feedbackType,
                                        cooldown: a * l,
                                        chance: s / 100,
                                    })
                                ),
                            disabled: !v,
                        }),
                    ],
                }),
                null == e &&
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: need to select a survey",
                    }),
                !(a >= 0) &&
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: cooldown needs to be a number greater than 0",
                    }),
                !(s >= 0 && s <= 100) &&
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: chance needs to be a number between 0 and 100",
                    }),
                (0, r.jsx)(g.E, {
                    variant: "body-sm/normal",
                    children: "Clear override resets a feedback survey to its default values",
                }),
            ],
        }),
    });
}
var iw = a(447732),
    iM = a(931093),
    iP = a(334279),
    iL = a(663417),
    iU = a(147925),
    iG = a(557009);
function iB() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState(!1),
        l = (0, o.useCallback)(async () => {
            try {
                n(!0);
                let e = await (async function () {
                    return (
                        await ia.Bo.get({
                            url: ej.Rsh.ENTITLEMENTS_FOR_APPLICATION(tF.tv),
                            oldFormErrors: !0,
                            query: { exclude_consumed: !0, exclude_ended: !0 },
                            rejectWithError: !0,
                        })
                    ).body.map((e) => iG.A.createFromServer(e));
                })();
                t(e);
            } finally {
                n(!1);
            }
        }, []),
        i = (0, o.useCallback)(
            async (e) => {
                (await (async function (e) {
                    await ia.Bo.post({
                        url: "/debug/entitlements/fractional-premium",
                        body: { count: 1, sku_id: e },
                        rejectWithError: !1,
                    });
                })(e),
                    await l());
            },
            [l],
        );
    return {
        grantFractionalPremium: i,
        deleteFractionalPremium: (0, o.useCallback)(
            async (e) => {
                (await (async function (e) {
                    let t = "/debug/entitlements/fractional-premium";
                    (null != e && (t = `${t}/${e}`), await ia.Bo.del({ url: t, rejectWithError: !0 }));
                })(e),
                    await l());
            },
            [l],
        ),
        triggerNextEntitlementFulfillment: (0, o.useCallback)(async () => {
            (await (async function () {
                await ia.Bo.post({ url: "/debug/entitlements/fulfillment", rejectWithError: !1 });
            })(),
                await l());
        }, [l]),
        refreshEntitlementList: l,
        entitlements: e,
        loading: a,
    };
}
var iF = a(267577),
    i$ = a(370109);
let iV = {
    [iw.G.QUEST_REWARD]: "Quest Reward",
    [iw.G.DEVELOPER_GIFT]: "Developer Gift",
    [iw.G.INVOICE]: "Invoice",
    [iw.G.REVERSE_TRIAL]: "Reverse Trial",
    [iw.G.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
    [iw.G.SUBSCRIPTION]: "Subscription",
    [iw.G.SUBSCRIPTION_MEMBER]: "Subscription Member",
};
function iW(e) {
    let t,
        { entitlement: a, active: n, onDelete: l } = e;
    function i(e) {
        return null != e ? (0, nZ.i$)(e, "LLL") : "---";
    }
    return (0, r.jsxs)("div", {
        className: ea()(iF.Nr, n ? i$.C1 : ""),
        children: [
            (0, r.jsxs)(g.E, { variant: "body-md/normal", children: ["ID: ", a.id, " "] }),
            !n &&
                (0, r.jsxs)(g.E, {
                    variant: "body-md/normal",
                    children: ["SKU: ", iH.find((e) => e.value === a.skuId)?.label],
                }),
            null != a.startsAt &&
                null != a.endsAt &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(g.E, { variant: "body-md/normal", children: ["Start: ", i(a.startsAt), " "] }),
                        (0, r.jsxs)(g.E, { variant: "body-md/normal", children: ["End: ", i(a.endsAt), " "] }),
                    ],
                }),
            (0, r.jsxs)(g.E, {
                variant: "body-md/normal",
                children: [
                    "Entitlement source type: ",
                    null != (t = a.sourceType) && t in iV ? iV[t] : `Unknown source type ${t}`,
                ],
            }),
            n &&
                null != l &&
                (0, r.jsx)(nV.$n, {
                    className: iF.RW,
                    size: nV.$n.Sizes.TINY,
                    color: nV.$n.Colors.RED,
                    look: nV.$n.Looks.OUTLINED,
                    onClick: l,
                    children: "Delete",
                }),
        ],
    });
}
let iH = [
    { id: "1h", label: "1 hour", value: iP.j.PREMIUM_TIER_2_1_HOUR },
    { id: "1d", label: "1 day", value: iP.j.PREMIUM_TIER_2_1_DAY },
    { id: "3d", label: "3 days", value: iP.j.PREMIUM_TIER_2_3_DAY },
];
function iz() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(iP.j.PREMIUM_TIER_2_1_HOUR),
        [l, i] = o.useState([]),
        [s, d] = o.useState([]),
        {
            refreshEntitlementList: c,
            grantFractionalPremium: u,
            deleteFractionalPremium: m,
            triggerNextEntitlementFulfillment: h,
            entitlements: v,
            loading: b,
        } = iB();
    return (
        o.useEffect(() => {
            c();
        }, [c]),
        o.useEffect(() => {
            (i(v.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === iM.z.FRACTIONAL_REDEMPTION)),
                d(v.filter((e) => Object.values(iP.j).includes(e.skuId) && null == e.startsAt)));
        }, [v]),
        (0, r.jsx)(x.Ip, {
            className: t6.nd,
            children: (0, r.jsxs)("div", {
                className: i$.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: i$.dL,
                        children: [
                            (0, r.jsx)(g.E, {
                                style: { marginBottom: "8px" },
                                variant: "body-lg/semibold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, r.jsxs)(en.D, {
                                onClick: () => t(!e),
                                className: iF.As,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(g.E, { variant: "body-md/normal", children: "Info" }),
                                    }),
                                    (0, r.jsx)(iU.A, { direction: e ? iU.A.Directions.UP : iU.A.Directions.DOWN }),
                                ],
                            }),
                        ],
                    }),
                    e &&
                        (0, r.jsxs)("div", {
                            style: { margin: "8px 0" },
                            children: [
                                (0, r.jsx)(g.E, {
                                    variant: "body-md/normal",
                                    style: { fontStyle: "italic" },
                                    color: "text-muted",
                                    children:
                                        "Subscriptions paused by Fractional Nitro do not automatically resume in local or staging environments. Subscription has to be resumed manually via Admin.",
                                }),
                                (0, r.jsx)("br", {}),
                                (0, r.jsx)(g.E, {
                                    variant: "body-md/normal",
                                    style: { fontStyle: "italic" },
                                    color: "text-muted",
                                    children:
                                        "Entitlement fulfillment tasks do not run automatically in local environments. This task is required to handle the scheduled unfulfillment of Fractional Nitro after it's time has elapsed.",
                                }),
                            ],
                        }),
                    (0, r.jsxs)("section", {
                        style: { marginBottom: "8px" },
                        className: ea()([iF.uW, i$.Uo]),
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Fractional Premium SKU",
                                value: a,
                                options: iH,
                                onSelectionChange: n,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Grant Fractional Nitro",
                                onClick: () => u(a),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("section", {
                        className: iF.uW,
                        children: [
                            (0, r.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: i$.dL,
                                children: [
                                    (0, r.jsx)(g.E, {
                                        style: { marginBottom: "8px" },
                                        variant: "body-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: iF.GC,
                                        children: [
                                            (0, r.jsx)(nV.$n, {
                                                disabled: b,
                                                size: nV.$n.Sizes.TINY,
                                                color: nV.$n.Colors.PRIMARY,
                                                look: nV.$n.Looks.OUTLINED,
                                                onClick: () => h(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, r.jsx)(nV.$n, {
                                                disabled: b,
                                                size: nV.$n.Sizes.TINY,
                                                color: nV.$n.Colors.RED,
                                                look: nV.$n.Looks.OUTLINED,
                                                onClick: () => m(),
                                                children: "Delete all",
                                            }),
                                            (0, r.jsx)(nV.$n, {
                                                disabled: b,
                                                look: nV.$n.Looks.BLANK,
                                                size: nV.$n.Sizes.ICON,
                                                onClick: c,
                                                children: (0, r.jsx)("span", {
                                                    title: "Refresh",
                                                    children: (0, r.jsx)(iL.RefreshIcon, {
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
                                        (0, r.jsx)(g.E, {
                                            style: { marginTop: "15px" },
                                            variant: "body-md/semibold",
                                            children: "Active premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: l.map((e) =>
                                                (0, r.jsx)(
                                                    iW,
                                                    { entitlement: e, active: !0, onDelete: () => m(e.id) },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                            s.length > 0 &&
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(g.E, {
                                            style: { marginTop: "15px" },
                                            variant: "body-md/semibold",
                                            children: "Unconsumed Fractional Premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: s.map((e) => (0, r.jsx)(iW, { entitlement: e }, e.id)),
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
var iK = a(832604),
    iY = a(264572).hp;
let iq = /[^a-zA-Z0-9_.-]+/g;
function iJ(e) {
    let { runningGame: t } = e,
        a = (0, iK.A)(t.pid, void 0),
        [n, l] = (0, o.useState)(!1),
        i = t.name ?? t.exeName ?? "",
        s = null != a && !n;
    return (0, r.jsxs)(t0.B, {
        direction: "horizontal",
        align: "center",
        justify: "space-between",
        gap: 12,
        children: [
            (0, r.jsxs)(t0.B, {
                direction: "horizontal",
                align: "center",
                gap: 12,
                fullWidth: !1,
                children: [
                    null != a
                        ? (0, r.jsx)("img", { src: a, alt: i, width: 48, height: 48 })
                        : (0, r.jsx)(g.E, { variant: "footnote/normal", color: "text-muted", children: "no icon" }),
                    (0, r.jsxs)(t0.B, {
                        direction: "vertical",
                        gap: 0,
                        fullWidth: !1,
                        children: [
                            (0, r.jsx)(g.E, { variant: "body-md/normal", children: i }),
                            (0, r.jsxs)(g.E, {
                                variant: "footnote/normal",
                                color: "text-muted",
                                children: [
                                    t.id ?? "(no id)",
                                    " \xb7 ",
                                    t.distributor ?? "unknown",
                                    ":",
                                    t.sku ?? "\u2014",
                                ],
                            }),
                            (0, r.jsx)(g.E, { variant: "footnote/normal", color: "text-muted", children: t.exePath }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(p.$, {
                variant: "primary",
                text: "Save Icon",
                onClick: async function () {
                    if (null != a) {
                        l(!0);
                        try {
                            let e,
                                t = await E.A.fileManager.saveWithDialog2(
                                    iY.from(a.slice(a.indexOf(",") + 1), "base64"),
                                    ((e = i.trim().replace(iq, "_")), `${e.length > 0 ? e : "icon"}.png`),
                                    void 0,
                                );
                            null == t ||
                                t.canceledByUser ||
                                (0, l5.P0)({ text: `Saved icon to ${t.directory}`, variant: "success" });
                        } catch {
                            (0, l5.P0)({ text: "Failed to save icon", variant: "critical" });
                        } finally {
                            l(!1);
                        }
                    }
                },
                disabled: !s,
            }),
        ],
    });
}
function iQ() {
    let e = (0, d.bG)([N.Ay], () => N.Ay.getRunningGames());
    return (0, r.jsxs)(t0.B, {
        gap: 16,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)(t0.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: "Game Icon Extractor" }),
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        children: "Save a running game's locally-detected icon as a PNG.",
                    }),
                ],
            }),
            (0, r.jsx)(b.c, {}),
            (0, r.jsxs)(t0.B, {
                gap: 12,
                children: [
                    (0, r.jsx)(ei.D, { variant: "heading-xs/semibold", children: "Running Games" }),
                    0 === e.length
                        ? (0, r.jsx)(g.E, {
                              variant: "body-sm/normal",
                              children: "No games detected. Launch a game first.",
                          })
                        : e.map((e) => (0, r.jsx)(iJ, { runningGame: e }, `${e.pid}-${e.exePath}`)),
                ],
            }),
        ],
    });
}
var iX = a(390544),
    iZ = a(940456),
    i0 = a(475669),
    i1 = a(486223);
function i2() {
    let e = (0, d.bG)([nk.A], () => nk.A.getGuildId()),
        t = (0, d.bG)([nA.A], () => nA.A.getGuild(e)?.name),
        a = (0, d.bG)([i0.A], () => i0.A.getStateForGuild(e)?.instances),
        n = o.useMemo(() => Object.values(a ?? {})[0], [a]),
        l = o.useCallback(
            (t) => {
                null != n &&
                    null != e &&
                    C.h.dispatch({
                        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                        guildId: e,
                        instance: { ...n, status: t },
                    });
            },
            [n, e],
        ),
        i = o.useMemo(
            () =>
                Object.values(iX.M).map((e) =>
                    (0, r.jsx)(
                        p.$,
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
        s = o.useCallback(() => {
            null != n &&
                null != e &&
                C.h.dispatch({
                    type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                    guildId: e,
                    instance: { ...n, serverIP: void 0, port: void 0, gameServerPanelUrl: void 0 },
                });
        }, [n, e]);
    return null == e
        ? null
        : (0, r.jsxs)(x.Ip, {
              className: i1.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: i1.uW,
                      children: (0, r.jsx)(ei.D, { variant: "heading-sm/medium", children: `Current guild: ${t}` }),
                  }),
                  (0, r.jsxs)("div", {
                      className: i1.uW,
                      children: [
                          (0, r.jsx)(g.E, {
                              variant: "body-sm/medium",
                              children: `Set server state for first server: ${n?.name}`,
                          }),
                          (0, r.jsx)("div", { className: i1.UD, children: i }),
                          (0, r.jsx)(g.E, { variant: "body-sm/medium", children: "Remove Server Info" }),
                          (0, r.jsx)("div", {
                              className: i1.UD,
                              children: (0, r.jsx)(p.$, {
                                  variant: "primary",
                                  text: "Remove IP Address & Game Server Panel URL",
                                  onClick: s,
                              }),
                          }),
                          (0, r.jsx)(g.E, { variant: "body-sm/medium", children: "Reset server" }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              text: "Reset",
                              onClick: () => {
                                  (0, iZ.cq)(e);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
var i3 = a(257446);
function i6(e) {
    let { devSettingsCategory: t } = e,
        a = (0, d.bG)([S.Ay], () => S.Ay.allByCategory(t), [t], d.My),
        n = o.useMemo(
            () =>
                a.map((e) => {
                    let [t, a, { label: n }] = e;
                    return (0, r.jsx)(m.d, { label: n, description: t, checked: a, onChange: (e) => _(t, e) }, t);
                }),
            [a],
        );
    return (0, r.jsx)("div", { className: ea()(t6.nd, i3.n), children: n });
}
var i5 = a(950305),
    i8 = a(231483),
    i4 = a(597770),
    i9 = a(433492),
    i7 = a(695458),
    se = a(796140),
    st = a(268791),
    sa = a(836480),
    sn = a(855473),
    sl = a(626258),
    si = a(420854),
    ss = a(373846),
    sr = a(657044),
    so = a(141060),
    sd = a(608599),
    sc = a(685761),
    su = a(157225),
    sm = a(362704),
    sh = a(625903),
    sp = a(628284),
    sg = a(320448),
    sx = a(613412),
    sv = a(830215),
    sb = a(662502),
    sj = a(619019),
    sf = a(499785),
    sy = a(315069);
class sE extends sy.A {
    id;
    summary;
    userIds;
    password;
    constructor(e) {
        (super(), (this.id = e.pool_id), (this.summary = e.summary), (this.userIds = e.user_ids));
    }
    static fromServer(e) {
        return new sE(e);
    }
    setPassword(e) {
        return ((this.password = e), this);
    }
}
let sC = { pools: null, users: null };
function sS(e) {
    (null == sC.users && (sC.users = new Map()), sC.users.set(e.id, new sj.A(e)));
}
class s_ extends d.Ay.PersistedStore {
    static displayName = "GeneratedTestUsersStore";
    static persistKey = "GeneratedTestUsersStore";
    initialize(e) {
        null != e &&
            (null != e.pools && (sC.pools = new Map(Object.entries(e.pools))),
            null != e.users && (sC.users = new Map(Object.entries(e.users))));
    }
    getState() {
        return {
            pools: null != sC.pools ? Object.fromEntries(sC.pools) : null,
            users: null != sC.users ? Object.fromEntries(sC.users) : null,
        };
    }
    getUsersForPool(e) {
        return Array.from(sC.users?.values() ?? []).filter((t) => sC.pools?.get(e)?.userIds.includes(t.id));
    }
    getPool(e) {
        return sC.pools?.get(e) ?? null;
    }
    getUser(e) {
        return sC.users?.get(e) ?? null;
    }
    getPools() {
        return null === sC.pools ? null : Array.from(sC.pools.values());
    }
}
let sN = new s_(C.h, {
    GENERATED_POOL_BY_ID_FETCH_SUCCESS: function (e) {
        let { pool: t, users: a } = e;
        (null == sC.pools && (sC.pools = new Map()), sC.pools.set(t.id, t), a.forEach(sS));
    },
    GENERATED_POOL_REMOVE_FROM_LIST: function (e) {
        let { poolId: t } = e,
            a = sC.pools?.get(t);
        if (null == a) return !1;
        (a.userIds.length > 0 &&
            a.userIds.forEach((e) => {
                sC.users?.delete(e);
            }),
            sC.pools?.delete(t));
    },
});
var sA = a(835002),
    sk = a(844330),
    sI = a(157416);
let sD = [
        i5.UserIcon,
        i8.ShieldIcon,
        i4.GiftIcon,
        i9.AchievementsIcon,
        i7.PiggyBankIcon,
        se.TreehouseIcon,
        st.SpeedometerIcon,
        sa.CompassIcon,
        sn.SignPostIcon,
        sl.CarIcon,
        si.TrainIcon,
        ss.TeacupIcon,
        sr.InventoryIcon,
        so.FoodIcon,
        sd.BurgerIcon,
        sc.MagicDoorIcon,
        su.PawPrintIcon,
        sm.RecordPlayerIcon,
        sh.SettingsIcon,
    ],
    sT = [
        "text-default",
        "text-feedback-positive",
        "text-feedback-warning",
        "text-feedback-info",
        "text-feedback-critical",
    ];
function sR() {
    let [e, t] = o.useState(""),
        [a, n] = o.useState(""),
        [l, i] = o.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("form", {
                onSubmit: async (l) => {
                    (l.preventDefault(), i(!0));
                    try {
                        (await (async function (e, t) {
                            return await sf.A.get({
                                url: ej.Rsh.GENERATED_POOL_BY_ID(e),
                                trackedActionData: { event: sx.NetworkActionNames.USER_LOGIN },
                                rejectWithError: !1,
                            })
                                .then((e) => {
                                    let { ok: a, body: n } = e;
                                    if (!a) return void sb.A.showFailedToast(sA.OB.GENERIC_ERROR);
                                    let { generated_pool: l, users: i } = n;
                                    C.h.dispatch({
                                        type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                                        pool: sE.fromServer(l).setPassword(t),
                                        users: i.map((e) => new sj.A(e)),
                                    });
                                })
                                .catch(() => (sb.A.showFailedToast(sA.OB.GENERIC_ERROR), null));
                        })(e, a),
                            t(""),
                            n(""));
                    } finally {
                        i(!1);
                    }
                },
                children: (0, r.jsxs)(t0.B, {
                    direction: "vertical",
                    align: "center",
                    gap: 8,
                    children: [
                        (0, r.jsxs)(t0.B, {
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
                                    revealable: !0,
                                    fullWidth: !0,
                                    value: a,
                                    onChange: n,
                                    placeholder: "Password",
                                    disabled: l,
                                }),
                            ],
                        }),
                        (0, r.jsxs)(t0.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            children: [
                                (0, r.jsx)(p.$, {
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
                                (0, r.jsx)(p.$, {
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
function sO(e) {
    let { pool: t } = e,
        { id: a, summary: n } = t,
        l = sN.getUsersForPool(a),
        i = (0, d.bG)([n1.default], () => n1.default.getId()),
        s = sD[Number(a) % sD.length],
        c = sT[Number(a) % sT.length],
        u = o.useCallback(() => {
            C.h.dispatch({ type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId: a });
        }, [a]);
    return (0, r.jsx)(t0.B, {
        direction: "horizontal",
        align: "start",
        justify: "space-between",
        children: (0, r.jsx)(sk.A, {
            icon: (0, r.jsx)(g.E, {
                variant: "body-md/medium",
                color: c,
                className: sI.td,
                children: (0, r.jsx)(s, { size: "custom", width: 24, height: 24, color: "currentColor" }),
            }),
            title: n,
            className: sI.JC,
            subtitle: `${l.length} users`,
            children: (0, r.jsxs)(t0.B, {
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
                                        en.D,
                                        {
                                            onClick: (a) => {
                                                (a.stopPropagation(),
                                                    (function (e, t) {
                                                        let a = sN.getUser(t);
                                                        if (null == a) throw Error("User not found");
                                                        let n = sN.getPool(e)?.password;
                                                        if (null == n) throw Error("Pool password not found");
                                                        if (null == a.email) throw Error("User email not found");
                                                        sv.A.login({
                                                            login: a.email,
                                                            password: n,
                                                            isMultiAccount: !0,
                                                            source: "generated_test_user",
                                                        }).catch(
                                                            () => (sb.A.showFailedToast(sA.OB.GENERIC_ERROR), null),
                                                        );
                                                    })(t.id, e.id));
                                            },
                                            "aria-disabled": i === e.id,
                                            className: ea()(sI.vk, { [sI.Pe]: i === e.id }),
                                            children: (0, r.jsxs)(
                                                t0.B,
                                                {
                                                    direction: "horizontal",
                                                    align: "center",
                                                    justify: "space-between",
                                                    gap: 8,
                                                    padding: { right: 8 },
                                                    fullWidth: !1,
                                                    children: [
                                                        (0, r.jsxs)(t0.B, {
                                                            direction: "horizontal",
                                                            align: "center",
                                                            gap: 8,
                                                            fullWidth: !1,
                                                            className: ea()({ [sI.WP]: i === e.id }),
                                                            children: [
                                                                (0, r.jsx)(i5.UserIcon, {
                                                                    size: "custom",
                                                                    width: 20,
                                                                    height: 20,
                                                                    color: "currentColor",
                                                                }),
                                                                (0, r.jsxs)("div", {
                                                                    children: [
                                                                        (0, r.jsx)(g.E, {
                                                                            variant: "body-sm/normal",
                                                                            color: "text-default",
                                                                            children: e.username,
                                                                        }),
                                                                        (0, r.jsx)(g.E, {
                                                                            variant: "body-xs/normal",
                                                                            color: "text-muted",
                                                                            className: sI.c1,
                                                                            children: e.email,
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        i === e.id
                                                            ? (0, r.jsx)(g.E, {
                                                                  variant: "body-sm/normal",
                                                                  color: "text-feedback-positive",
                                                                  children: (0, r.jsx)(sp.CircleCheckIcon, {
                                                                      size: "sm",
                                                                      color: "currentColor",
                                                                  }),
                                                              })
                                                            : (0, r.jsx)(sg.ChevronSmallRightIcon, {
                                                                  size: "sm",
                                                                  color: "currentColor",
                                                              }),
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
                        className: sI.UD,
                        children: (0, r.jsx)(p.$, {
                            icon: nK.TrashIcon,
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
function sw() {
    let e = (0, d.yK)([sN], () => sN.getPools() ?? []);
    return (0, r.jsxs)(t0.B, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: sI.kL,
        children: [
            (0, r.jsx)(sR, {}),
            (0, r.jsx)(x.Ip, { className: sI.Ik, children: e?.map((e) => (0, r.jsx)(sO, { pool: e }, e.id)) }),
        ],
    });
}
var sM = a(582306),
    sP = a(884883),
    sL = a(846466);
function sU(e) {
    let t = new Date(e);
    return (
        t.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " " +
        t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 })
    );
}
function sG(e, t) {
    return null != t ? `/users/@me/gift-intents/dismissals/${e}/${t}` : `/users/@me/gift-intents/dismissals/${e}`;
}
let sB = tF.np.FRIEND_ANNIVERSARY;
function sF(e) {
    return 403 === e?.status
        ? "Forbidden (403). This account is likely not in the backend-persistence experiment; clearing also requires a staff account."
        : e instanceof Error
          ? e.message
          : String(e);
}
function s$() {
    let e = (0, d.bG)([sP.A], () => sP.A.getDevToolTotalFriendAnniversaries()),
        t = (0, d.bG)([sP.A], () => sP.A.getDevToolCurrentDate()),
        a = (0, d.bG)([sP.A], () => sP.A.getMessageGiftIntentLastShownMap()),
        n = (0, d.bG)([sP.A], () => sP.A.getHighestAffinityFriendAnniversaries()),
        l = (0, d.bG)([sP.A], () => sP.A.getHighAffinityFriendAnniversaries()),
        i = (0, d.bG)([eg.default], () => eg.default.getCurrentUser()?.isStaff() ?? !1),
        s = (0, d.bG)(
            [aX.A],
            () => aX.A.getFriendIDs().filter((e) => !aX.A.isIgnored(e) && null != aX.A.getSince(e)).length,
        ),
        c = (0, d.bG)([aF.A], () => {
            let e = Number(aF.A.settings.userContent?.lastGiftIntentDismissedAtMs ?? "0");
            return Number.isNaN(e) || 0 === e ? null : e;
        }),
        [u, m] = o.useState([]),
        [h, v] = o.useState(null),
        [b, f] = o.useState(!1),
        [y, E] = o.useState(!1),
        [S, _] = o.useState(!1),
        [N, A] = o.useState(void 0),
        k = o.useCallback(async () => {
            E(!0);
            try {
                let { body: e } = await ia.Bo.get({ url: "/users/@me/gift-intent-dismissals", rejectWithError: !0 });
                (m(e.dismissals ?? []), v(null), f(!1));
            } catch (t) {
                let e = t.status;
                (v(sF(t)), f(403 === e), 403 === e && m([]));
            } finally {
                E(!1);
            }
        }, []);
    async function I(e) {
        _(!0);
        try {
            (await e(), v(null), await k());
        } catch (e) {
            v(sF(e));
        } finally {
            _(!1);
        }
    }
    o.useEffect(() => {
        k();
    }, [k, c]);
    let D = u.filter((e) => e.intent_type === sB),
        T = new Map(D.map((e) => [e.target_id, Number(e.dismissed_at_ms)])),
        R = Array.from(new Set([...Object.keys(a), ...T.keys()])),
        O = Array.from(new Set([...n, ...l])),
        w = O.map((e) => ({ id: e, value: e, label: eg.default.getUser(e)?.username ?? `Unknown User (${e})` })),
        M = y || S;
    function P(e) {
        C.h.dispatch({ type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: e });
    }
    function L(e) {
        let t = nw.A.getUserAffinity(e);
        return t?.dmProbability != null ? `${(100 * t.dmProbability).toFixed(3)}%` : "N/A";
    }
    return (0, r.jsx)(x.Ip, {
        className: t6.nd,
        children: (0, r.jsxs)("div", {
            className: sL.l$,
            children: [
                (0, r.jsx)(g.E, { className: sL.Iv, variant: "body-lg/semibold", children: "Friend Anniversary" }),
                (0, r.jsx)("div", {
                    className: sL.Pm,
                    children: (0, r.jsxs)(t0.B, {
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
                                    P(e);
                                },
                            }),
                            (0, r.jsx)(p.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Re-randomize",
                                disabled: null == e,
                                onClick: function () {
                                    C.h.dispatch({ type: "DEV_TOOLS_RESAMPLE_FRIEND_ANNIVERSARIES" });
                                },
                            }),
                            (0, r.jsx)(p.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Clear",
                                onClick: () => {
                                    P(null);
                                },
                            }),
                        ],
                    }),
                }),
                null != e &&
                    (0, r.jsx)("div", {
                        className: sL.Pm,
                        children: (0, r.jsxs)(t0.B, {
                            gap: 8,
                            children: [
                                0 === s
                                    ? (0, r.jsx)(g.E, {
                                          variant: "body-xs/normal",
                                          color: "text-feedback-warning",
                                          children:
                                              "No friends with an anniversary date, so no anniversaries can be generated.",
                                      })
                                    : (0, r.jsxs)(g.E, {
                                          variant: "body-xs/normal",
                                          children: [
                                              "Generated ",
                                              O.length,
                                              " of ",
                                              e,
                                              " requested",
                                              O.length < e
                                                  ? ` (only ${s} friend${1 === s ? "" : "s"} with an anniversary date).`
                                                  : ".",
                                          ],
                                      }),
                                (0, r.jsx)(g.E, {
                                    variant: "body-xs/normal",
                                    children:
                                        "Affinity is the percent chance that User A will DM or GDM User B in the next 7 days.",
                                }),
                                (0, r.jsx)(g.E, {
                                    variant: "body-xs/normal",
                                    children:
                                        "The devtool automatically assigns users as high affinity regardless of actual affinity for testing.",
                                }),
                                n.length > 0 &&
                                    (0, r.jsxs)(t0.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(g.E, {
                                                variant: "body-xs/semibold",
                                                children: "Highest Affinity Friend Anniversaries:",
                                            }),
                                            n.map((e) => {
                                                let t = eg.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, r.jsxs)(
                                                    g.E,
                                                    { variant: "body-xs/normal", children: [a, " (", L(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                                l.length > 0 &&
                                    (0, r.jsxs)(t0.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(g.E, {
                                                variant: "body-xs/semibold",
                                                children: "High Affinity Friend Anniversaries:",
                                            }),
                                            l.map((e) => {
                                                let t = eg.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, r.jsxs)(
                                                    g.E,
                                                    { variant: "body-xs/normal", children: [a, " (", L(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                (0, r.jsx)("div", {
                    className: sL.Pm,
                    children: (0, r.jsxs)(t0.B, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, r.jsx)(sM.J, {
                                label: "Override current date used for cooldowns",
                                value: null != t ? n$()(t) : void 0,
                                onSelect: function (e) {
                                    let t = n$()(),
                                        a = e
                                            .clone()
                                            .hours(t.hours())
                                            .minutes(t.minutes())
                                            .seconds(t.seconds())
                                            .milliseconds(t.milliseconds());
                                    C.h.dispatch({ type: "DEV_TOOLS_SET_CURRENT_DATE", date: a.valueOf() });
                                },
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Clear",
                                onClick: function () {
                                    C.h.dispatch({ type: "DEV_TOOLS_RESET_CURRENT_DATE" });
                                },
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: sL.Pm,
                    children: [
                        (0, r.jsx)(g.E, {
                            variant: "body-md/normal",
                            children: "Reset gift message cooldown (per-user, 14d)",
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Reset",
                            onClick: function () {
                                C.h.dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: sL.Pm,
                    children: [
                        (0, r.jsx)(g.E, {
                            variant: "body-md/normal",
                            children: "Clear last seen friend anniversaries in All Friends",
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Clear",
                            onClick: function () {
                                C.h.dispatch({ type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: sL.Pm,
                    children: (0, r.jsxs)(t0.B, {
                        gap: 12,
                        fullWidth: !0,
                        children: [
                            (0, r.jsx)(g.E, { variant: "body-md/semibold", children: "Backend dismissal sync" }),
                            (0, r.jsxs)(t0.B, {
                                gap: 4,
                                children: [
                                    b &&
                                        (0, r.jsx)(g.E, {
                                            variant: "body-xs/normal",
                                            color: "text-feedback-warning",
                                            children:
                                                "This account is not in the backend-persistence experiment, so nothing here will persist to the server.",
                                        }),
                                    !i &&
                                        (0, r.jsx)(g.E, {
                                            variant: "body-xs/normal",
                                            color: "text-feedback-warning",
                                            children: "Clearing server dismissals requires a staff account.",
                                        }),
                                    (0, r.jsxs)(g.E, {
                                        variant: "body-xs/normal",
                                        children: [
                                            "Server last recorded a dismissal:",
                                            " ",
                                            null != c ? sU(c) : "never",
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(t0.B, {
                                gap: 8,
                                direction: "horizontal",
                                align: "end",
                                children: [
                                    (0, r.jsx)(p.$, {
                                        size: "sm",
                                        variant: "secondary",
                                        text: "Refresh",
                                        onClick: () => {
                                            k();
                                        },
                                        disabled: M,
                                    }),
                                    (0, r.jsx)(p.$, {
                                        size: "sm",
                                        variant: "primary",
                                        text: "Clear all",
                                        onClick: function () {
                                            I(() => ia.Bo.del({ url: sG(sB), rejectWithError: !0 }));
                                        },
                                        disabled: M || !i || b || 0 === D.length,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(t0.B, {
                                gap: 8,
                                direction: "horizontal",
                                align: "end",
                                children: [
                                    (0, r.jsx)(j.l, {
                                        label: "Dismiss a generated anniversary on the server",
                                        selectionMode: "single",
                                        options: w,
                                        value: N,
                                        onSelectionChange: (e) => {
                                            A(e);
                                        },
                                    }),
                                    (0, r.jsx)(p.$, {
                                        size: "sm",
                                        variant: "secondary",
                                        text: "Dismiss on server",
                                        onClick: function () {
                                            null != N &&
                                                I(() =>
                                                    ia.Bo.post({
                                                        url: "/users/@me/gift-intents/dismiss",
                                                        body: { intent_type: sB, target_id: N },
                                                        rejectWithError: !0,
                                                    }),
                                                );
                                        },
                                        disabled: M || b || null == N,
                                    }),
                                ],
                            }),
                            0 === w.length &&
                                (0, r.jsx)(g.E, {
                                    variant: "body-xs/normal",
                                    children: "Generate friend anniversaries above to pick a target to dismiss.",
                                }),
                            null != h &&
                                (0, r.jsx)(g.E, {
                                    variant: "body-xs/normal",
                                    color: "text-feedback-critical",
                                    children: h,
                                }),
                            y && (0, r.jsx)(g.E, { variant: "body-xs/normal", children: "Loading..." }),
                            !y &&
                                0 === R.length &&
                                (0, r.jsx)(g.E, {
                                    variant: "body-xs/normal",
                                    children: "No dismissals recorded locally or on the server.",
                                }),
                            !y &&
                                R.length > 0 &&
                                (0, r.jsxs)(t0.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(g.E, {
                                            variant: "body-xs/semibold",
                                            children: "Local vs. server (per friend):",
                                        }),
                                        R.map((e) => {
                                            let t = eg.default.getUser(e),
                                                n = t?.username ?? `Unknown User (${e})`,
                                                l = a[e],
                                                s = T.get(e);
                                            return (0, r.jsxs)(
                                                t0.B,
                                                {
                                                    gap: 8,
                                                    direction: "horizontal",
                                                    justify: "space-between",
                                                    align: "center",
                                                    children: [
                                                        (0, r.jsxs)(g.E, {
                                                            variant: "body-xs/normal",
                                                            children: [
                                                                n,
                                                                ": local ",
                                                                null != l ? sU(l) : "none",
                                                                ", server",
                                                                " ",
                                                                null != s ? sU(s) : "none",
                                                            ],
                                                        }),
                                                        null != s &&
                                                            (0, r.jsx)(p.$, {
                                                                size: "sm",
                                                                variant: "secondary",
                                                                text: "Clear",
                                                                onClick: () => {
                                                                    I(() =>
                                                                        ia.Bo.del({
                                                                            url: sG(sB, e),
                                                                            rejectWithError: !0,
                                                                        }),
                                                                    );
                                                                },
                                                                disabled: M || !i || b,
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
var sV = a(116711),
    sW = a(28863),
    sH = a(517461),
    sz = a(214947),
    sK = a(403581),
    sY = a(34188),
    sq = a(577473);
let sJ = [
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
var sQ = a(277583);
let sX = [0, 0.5, 1],
    sZ = ["Center", "Inner ring", "Outer ring"],
    s0 = sX.length,
    s1 = "ILLO_BLUE",
    s2 = "ILLO_BLUE_40",
    s3 = Array.from({ length: s0 }, () => s2),
    s6 = Array.from({ length: s0 }, () => s1),
    s5 = ["1", "0.5", "0"],
    s8 = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i,
    s4 = [
        { label: "Light", value: ej.NJ8.LIGHT, id: ej.NJ8.LIGHT },
        { label: "Ash", value: ej.NJ8.ASH, id: ej.NJ8.ASH },
        { label: "Dark", value: ej.NJ8.DARK, id: ej.NJ8.DARK },
        { label: "Onyx", value: ej.NJ8.ONYX, id: ej.NJ8.ONYX },
    ],
    s9 = { [ej.NJ8.ASH]: ej.NJ8.DARK, [ej.NJ8.ONYX]: ej.NJ8.DARK, [ej.NJ8.LIGHT]: ej.NJ8.DARK },
    s7 = { [ej.NJ8.LIGHT]: "light", [ej.NJ8.ASH]: "ash", [ej.NJ8.DARK]: "dark", [ej.NJ8.ONYX]: "onyx" },
    re = sJ.map((e) => ({ label: e, value: e, id: e })),
    rt = Object.fromEntries(
        sJ.map((e) => [
            e,
            Object.keys(e1.A.unsafe_rawColors)
                .filter((t) => String(t).startsWith(e + "_"))
                .sort(
                    (e, t) =>
                        parseInt(String(e).split("_").pop() ?? "0", 10) -
                        parseInt(String(t).split("_").pop() ?? "0", 10),
                )
                .map((e) => {
                    let t = String(e).split("_").pop() ?? e,
                        [a, n, l] = e1.A.unsafe_rawColors[e].resolve().rgba(),
                        i =
                            (0.299 * a + 0.587 * n + 0.114 * l) / 255 > 0.5
                                ? e1.A.unsafe_rawColors.OPACITY_BLACK_28
                                : e1.A.unsafe_rawColors.OPACITY_WHITE_28,
                        s = (0, r.jsx)("span", {
                            className: sQ.oP,
                            style: { background: `rgb(${a}, ${n}, ${l})`, border: `1px solid ${i.css}` },
                        });
                    return { label: t, value: e, id: String(e), leading: s };
                }),
        ]),
    );
var ra = a(306327);
function rn(e, t, a) {
    return e.map((e, n) => (n === t ? a : e));
}
function rl(e, t) {
    let [a, n, l, i] = e1.A.unsafe_rawColors[e].resolve().rgba({ opacity: t });
    return { r: a, g: n, b: l, a: i };
}
function ri(e, t) {
    let a = e1.A.unsafe_rawColors[e].resolve();
    return null != t ? a.hex({ opacity: t }) : a.hex();
}
function rs(e) {
    let { yaml: t, label: a } = e,
        n = o.useCallback(() => {
            navigator.clipboard.writeText(t);
        }, [t]);
    return (0, r.jsxs)(t0.B, {
        gap: 4,
        children: [
            (0, r.jsxs)(t0.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                justify: "space-between",
                children: [
                    (0, r.jsx)(g.E, { variant: "body-md/semibold", children: a }),
                    (0, r.jsx)(eX.K, {
                        icon: nW.CopyIcon,
                        "aria-label": `Copy ${a} YAML`,
                        onClick: n,
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            (0, r.jsx)("pre", { className: sQ.RP, children: t }),
        ],
    });
}
function rr(e) {
    let { allResolvedStops: t } = e,
        a = o.useMemo(
            () =>
                sZ.map((e, a) => {
                    let n;
                    return (
                        (n = s4
                            .map((e) => {
                                let n,
                                    l,
                                    { value: i } = e,
                                    s = s7[i],
                                    r = t[i];
                                return `  ${s}:
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
    return (0, r.jsxs)(t0.B, {
        gap: 16,
        children: [
            (0, r.jsx)(ei.D, { variant: "heading-xs/semibold", children: "Token YAML" }),
            sZ.map((e, t) => (0, r.jsx)(rs, { yaml: a[t], label: e }, e)),
        ],
    });
}
function ro(e, t, a) {
    let {
            r: n,
            g: l,
            b: i,
            a: s,
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
        r = 0.5 * s;
    return new ra.A("srgb", [
        (e.r * (1 - r) + n * r) / 255,
        (e.g * (1 - r) + l * r) / 255,
        (e.b * (1 - r) + i * r) / 255,
    ]);
}
function rd(e, t, a) {
    var n;
    let l = a.map((e) => {
            let [t, a, n] = e1.A.unsafe_rawColors[e.color].resolve().rgba();
            return { r: t, g: a, b: n, opacity: e.opacity, position: e.position };
        }),
        i = 1 / 0;
    for (let a of l) (n = e.contrast(ro(t, l, a.position), "WCAG21")) < i && (i = n);
    for (let a = 0; a < l.length - 1; a++) {
        let { contrast: n } = (function (e, t, a, n, l) {
            let i = 1 / 0,
                s = n;
            for (let r = 0; r <= 100; r++) {
                let o = n + (r / 100) * (l - n),
                    d = a.contrast(ro(e, t, o), "WCAG21");
                d < i && ((i = d), (s = o));
            }
            return { contrast: i, position: s };
        })(t, l, e, l[a].position, l[a + 1].position);
        n < i && (i = n);
    }
    return Math.round(100 * i) / 100;
}
function rc(e) {
    let [t, a, n] = e1.A.colors.TEXT_DEFAULT.resolve(e).rgba(),
        [l, i, s] = e1.A.colors.BACKGROUND_BASE_LOWEST.resolve(e).rgba(),
        [r, o, d, c] = e1.A.colors.INTERACTIVE_BACKGROUND_HOVER.resolve(e).rgba();
    return {
        text: new ra.A("srgb", [t / 255, a / 255, n / 255]),
        background: { r: l * (1 - c) + r * c, g: i * (1 - c) + o * c, b: s * (1 - c) + d * c },
    };
}
function ru() {
    return {
        colors: Array.from({ length: s0 }, () => void 0),
        scales: Array.from({ length: s0 }, () => void 0),
        opacities: Array.from({ length: s0 }, () => void 0),
    };
}
function rm() {
    return {
        [ej.NJ8.LIGHT]: ru(),
        [ej.NJ8.ASH]: { colors: [...s3], scales: [...s6], opacities: [...s5] },
        [ej.NJ8.DARK]: ru(),
        [ej.NJ8.ONYX]: ru(),
    };
}
var rh = a(731466),
    rp = a(363839);
function rg() {
    let e = (0, sV.G9)(),
        [t, a] = o.useState(ej.NJ8.DARK),
        [n, l] = (0, sH.V)("DevToolsGradientContrastPanel_themeStops", rm()),
        i = n ?? rm(),
        [s, d] = o.useState(["", "", ""]),
        [c, u] = o.useState([null, null, null]),
        [m, h] = o.useState(null),
        [v, b] = o.useState(null),
        { images: j, renderPickers: y } = (function () {
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
                        (0, r.jsxs)(t0.B, {
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
                                              (0, r.jsx)(g.E, { variant: "body-sm/normal", children: e.name }),
                                              (0, r.jsx)(l8.Q, {
                                                  text: "Remove",
                                                  variant: "critical",
                                                  textVariant: "body-sm/medium",
                                                  onClick: () => t(null),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(p.$, {
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
        E = "shop" === v ? j.buttonBackground?.src : void 0,
        C = o.useMemo(
            () =>
                Object.fromEntries(
                    s4.map((e) => {
                        let { value: t } = e;
                        return [
                            t,
                            (function (e, t) {
                                let a = [],
                                    n = [],
                                    l = [];
                                for (let i = 0; i < s0; i++) {
                                    let s,
                                        r,
                                        o,
                                        d = t;
                                    for (; null != d;) {
                                        let t = e[d];
                                        if (
                                            ((s ??= t.colors[i]),
                                            (r ??= t.scales[i]),
                                            (o ??= t.opacities[i]),
                                            null != s && null != r && null != o)
                                        )
                                            break;
                                        d = s9[d];
                                    }
                                    (a.push(s ?? s3[i]), n.push(r ?? s6[i]), l.push(o ?? s5[i]));
                                }
                                return { colors: a, scales: n, opacities: l };
                            })(i, t),
                        ];
                    }),
                ),
            [i],
        ),
        S = C[t],
        _ = o.useCallback(
            (e) => {
                l({ ...i, [t]: e(i[t]) });
            },
            [t, l, i],
        ),
        N = o.useMemo(() => rc({ theme: t, saturation: 1 }), [t]),
        A = o.useMemo(() => {
            let e = [];
            for (let t = 0; t < s0; t++) {
                let a = parseFloat(S.opacities[t]);
                if (isNaN(a) || a < 0 || a > 1) return null;
                e.push({ color: S.colors[t], opacity: a, position: sX[t] });
            }
            return e;
        }, [S]),
        k = o.useMemo(() => {
            if (null == A) return null;
            let { text: e, background: t } = N;
            return sZ.map((a, n) =>
                rt[S.scales[n]].map((a) => {
                    let l = rd(e, t, rn(A, n, { ...A[n], color: a.value }));
                    return { ...a, trailing: `(${l}:1)` };
                }),
            );
        }, [A, N, S.scales]),
        I = o.useMemo(() => {
            try {
                return s4.map((e) => {
                    let { value: t, label: a } = e,
                        n = C[t],
                        l = [];
                    for (let e = 0; e < s0; e++) {
                        let i = parseFloat(n.opacities[e]);
                        if (isNaN(i) || i < 0 || i > 1) return { theme: t, label: a, result: null };
                        l.push({ color: n.colors[e], opacity: i, position: sX[e] });
                    }
                    return {
                        theme: t,
                        label: a,
                        result: (function (e, t) {
                            let a,
                                { text: n, background: l } = rc(t),
                                i = rd(n, l, e),
                                s = i >= 4.5;
                            if (!s)
                                for (let t = 0; t < e.length; t++) {
                                    let i = (function (e) {
                                        let t = String(e).match(/^(.+)_\d+$/);
                                        if (null == t) return null;
                                        let a = t[1];
                                        return sJ.includes(a) ? a : null;
                                    })(e[t].color);
                                    if (null == i) continue;
                                    let s = parseInt(String(e[t].color).split("_").pop() ?? "0", 10),
                                        r = 1 / 0;
                                    for (let { value: o } of rt[i]) {
                                        if (o === e[t].color) continue;
                                        let i = rd(n, l, rn(e, t, { ...e[t], color: o }));
                                        if (i >= 4.5) {
                                            let e = Math.abs(parseInt(String(o).split("_").pop() ?? "0", 10) - s);
                                            e < r &&
                                                ((r = e),
                                                (a = { stopIndex: t, suggestedColor: o, resultingMinContrast: i }));
                                        }
                                    }
                                }
                            return { passes: s, minContrastRatio: i, suggestion: a };
                        })(l, { theme: t, saturation: 1 }),
                    };
                });
            } catch {
                return null;
            }
        }, [C]);
    return (0, r.jsx)(x.Ar, {
        className: sQ.XG,
        children: (0, r.jsxs)(t0.B, {
            gap: 24,
            padding: 8,
            className: sQ.zr,
            children: [
                (0, r.jsx)(ei.D, {
                    variant: "heading-lg/medium",
                    children: "Tab Hover Gradient Token Generator & Contrast Checker",
                }),
                (0, r.jsxs)(t0.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(g.E, {
                            variant: "body-md/normal",
                            children:
                                "Checks that tab hover gradients pass WCAG AA (4.5:1) contrast against the text in the tab, accounting for opacities and hover states.",
                        }),
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/normal",
                            children:
                                "Pick colors for each gradient stop (center, inner ring, outer ring) per theme. Each color in the dropdown will show the minimum contrast ratio for the gradient if the color were selected. Dark-family themes inherit: values set on Dark cascade to Darker and Onyx unless overridden.",
                        }),
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/normal",
                            children:
                                "Use the hex field to paste in a hex color \u2014 it will snap to the closest allowed token and show the deltaE distance.",
                        }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            children: [
                                "Copy the generated YAML at the bottom to create your token definitions to be used by the",
                                " ",
                                (0, r.jsx)(sW.Anchor, {
                                    href: "https://design.discord.tools/foundations/color/token-pipeline",
                                    children: "token pipeline",
                                }),
                                ".",
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(ak.Z, {
                    selectionMode: "single",
                    label: "Theme",
                    value: t,
                    onSelectionChange: (e) => a(e),
                    closeOnSelect: !0,
                    options: s4,
                }),
                (0, r.jsxs)(t0.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(ei.D, { variant: "heading-xs/semibold", children: "Gradient Stops" }),
                        (0, r.jsx)("div", {
                            className: sQ.G9,
                            children: sZ.map((e, t) => {
                                let a = "" !== s[t];
                                return (0, r.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            (0, r.jsxs)(t0.B, {
                                                gap: 0,
                                                className: sQ.hi,
                                                children: [
                                                    (0, r.jsx)(g.E, { variant: "body-md/medium", children: e }),
                                                    (0, r.jsx)(l8.Q, {
                                                        variant: "secondary",
                                                        textVariant: "body-xs/normal",
                                                        text: `(${ri(S.colors[t], parseFloat(S.opacities[t]))})`,
                                                        onClick: () =>
                                                            navigator.clipboard.writeText(
                                                                ri(S.colors[t], parseFloat(S.opacities[t])),
                                                            ),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(ak.Z, {
                                                selectionMode: "single",
                                                label: "Scale",
                                                disabled: a,
                                                value: S.scales[t],
                                                onSelectionChange: (e) => {
                                                    let a = rt[e][0]?.value;
                                                    _((n) => ({
                                                        ...n,
                                                        scales: rn(n.scales, t, e),
                                                        colors: null != a ? rn(n.colors, t, a) : n.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: re,
                                            }),
                                            (0, r.jsx)(ak.Z, {
                                                selectionMode: "single",
                                                label: "Value",
                                                disabled: a,
                                                value: S.colors[t],
                                                onSelectionChange: (e) =>
                                                    _((a) => ({ ...a, colors: rn(a.colors, t, e) })),
                                                closeOnSelect: !0,
                                                options: k?.[t] ?? rt[S.scales[t]],
                                            }),
                                            (0, r.jsx)(f.k, {
                                                label: "Opacity",
                                                name: `opacity-${t}`,
                                                value: S.opacities[t],
                                                onChange: (e) => _((a) => ({ ...a, opacities: rn(a.opacities, t, e) })),
                                                placeholder: "0\u20131",
                                            }),
                                            (0, r.jsx)(f.k, {
                                                label: `Hex${a && null != c[t] ? ` (dE: ${c[t]})` : ""}`,
                                                name: `hex-${t}`,
                                                value: s[t],
                                                onChange: (e) => {
                                                    d((a) => rn(a, t, e));
                                                    let a = (function (e) {
                                                        if (!s8.test(e)) return null;
                                                        try {
                                                            return new ra.A(e.startsWith("#") ? e : `#${e}`);
                                                        } catch {
                                                            return null;
                                                        }
                                                    })(e);
                                                    if (null != a) {
                                                        let e = (function (e) {
                                                            let t = s2,
                                                                a = s1,
                                                                n = 1 / 0;
                                                            for (let l of sJ)
                                                                for (let i of rt[l]) {
                                                                    let s = e.deltaE(
                                                                        (function (e) {
                                                                            let [t, a, n] = e1.A.unsafe_rawColors[e]
                                                                                .resolve()
                                                                                .rgba();
                                                                            return new ra.A("srgb", [
                                                                                t / 255,
                                                                                a / 255,
                                                                                n / 255,
                                                                            ]);
                                                                        })(i.value),
                                                                        "2000",
                                                                    );
                                                                    s < n && ((n = s), (t = i.value), (a = l));
                                                                }
                                                            return {
                                                                color: t,
                                                                scale: a,
                                                                deltaE: Math.round(100 * n) / 100,
                                                            };
                                                        })(a);
                                                        (u((a) => rn(a, t, e.deltaE)),
                                                            _((a) => ({
                                                                ...a,
                                                                scales: rn(a.scales, t, e.scale),
                                                                colors: rn(a.colors, t, e.color),
                                                            })));
                                                    } else u((e) => rn(e, t, null));
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
                y(),
                (0, r.jsx)(ei.D, { variant: "heading-xs/semibold", children: "Preview" }),
                (0, r.jsx)(sV.GE, {
                    value: { ...e, theme: t },
                    children: (0, r.jsx)(e0.N, {
                        theme: t,
                        children: (e) =>
                            (0, r.jsx)("div", {
                                className: e,
                                children: (0, r.jsx)(t0.B, {
                                    gap: 16,
                                    children: (0, r.jsx)("ul", {
                                        className: sQ.$8,
                                        style: { background: e1.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: [
                                            { id: "friends", icon: sz.FriendsIcon, text: "Friends" },
                                            {
                                                id: "nitro",
                                                icon: sK.NitroWheelIcon,
                                                text: "Nitro Home",
                                                nitroHoverGradient: !0,
                                            },
                                            { id: "shop", icon: sY.ShopIcon, text: "Shop", useCustomGradient: !0 },
                                            {
                                                id: "quests",
                                                icon: sq.QuestsIcon,
                                                text: nD.intl.string(nD.t.JALI2K),
                                                useCustomGradient: !0,
                                            },
                                        ].map((e, t) =>
                                            (0, r.jsxs)(
                                                eA.z9,
                                                {
                                                    route: "",
                                                    selected: m === e.id,
                                                    onClick: () => h(e.id),
                                                    onMouseEnter: () => b(e.id),
                                                    onMouseLeave: () => b(null),
                                                    icon: e.icon,
                                                    text: e.text,
                                                    className: "quests" === e.id ? ea()(rp.iE, rp.XO, rp.VU) : void 0,
                                                    showHoverGradient: !0,
                                                    nitroHoverGradient: "nitroHoverGradient" in e,
                                                    role: "listitem",
                                                    tabIndex: 0,
                                                    onFocus: () => {},
                                                    ...("useCustomGradient" in e && {
                                                        hoverGradientStart: rl(S.colors[0], parseFloat(S.opacities[0])),
                                                        hoverGradientMiddle: rl(
                                                            S.colors[1],
                                                            parseFloat(S.opacities[1]),
                                                        ),
                                                        hoverGradientEnd: rl(S.colors[2], parseFloat(S.opacities[2])),
                                                    }),
                                                    ...{ "data-list-item-id": `devtools-preview-${t}` },
                                                    children: [
                                                        "quests" === e.id &&
                                                            j.buttonBackground?.src != null &&
                                                            (0, r.jsx)("img", {
                                                                src: j.buttonBackground.src,
                                                                className: rp.Nd,
                                                                alt: "",
                                                            }),
                                                        "shop" === e.id &&
                                                            null != E &&
                                                            (0, r.jsx)("div", {
                                                                className: rh.marketingButtonBackgroundNew,
                                                                children: (0, r.jsx)("img", {
                                                                    src: E,
                                                                    className: rh.marketingButtonBackgroundImage,
                                                                    alt: "",
                                                                    "aria-hidden": !0,
                                                                }),
                                                            }),
                                                    ],
                                                },
                                                e.id,
                                            ),
                                        ),
                                    }),
                                }),
                            }),
                    }),
                }),
                null != I &&
                    (0, r.jsxs)(t0.B, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(ei.D, { variant: "heading-xs/semibold", children: "Results" }),
                            I.map((e) => {
                                let { theme: t, label: a, result: n } = e;
                                return null != n
                                    ? (0, r.jsxs)(
                                          t0.B,
                                          {
                                              gap: 8,
                                              children: [
                                                  (0, r.jsx)(g.E, { variant: "body-md/semibold", children: a }),
                                                  (0, r.jsx)(el.w, {
                                                      type: n.passes ? "success" : "critical",
                                                      message: `${n.passes ? "\u2713 Passes" : "\u2717 Fails"} WCAG AA \u{2014} Min contrast: ${n.minContrastRatio} : 1`,
                                                      role: "status",
                                                  }),
                                                  !n.passes &&
                                                      null != n.suggestion &&
                                                      (0, r.jsxs)(t0.B, {
                                                          gap: 4,
                                                          children: [
                                                              (0, r.jsx)(g.E, {
                                                                  variant: "body-sm/semibold",
                                                                  children: "Suggestion:",
                                                              }),
                                                              (0, r.jsxs)(g.E, {
                                                                  variant: "body-sm/normal",
                                                                  children: [
                                                                      sZ[n.suggestion.stopIndex],
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
                                                      (0, r.jsx)(g.E, {
                                                          variant: "body-sm/normal",
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
                (0, r.jsx)(rr, { allResolvedStops: C }),
            ],
        }),
    });
}
var rx = a(559201),
    rv = a(230135),
    rb = a(45780),
    rj = a(533993),
    rf = a(859241);
let ry = [
        aG.M.GUILD_POWERUP_PERKS_COACHMARK,
        aG.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        aG.M.GUILD_POWERUP_NOTIFICATION,
        aG.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
        aG.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_BADGE,
    ],
    rE = [
        aG.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        aG.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        aG.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        aG.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
        aG.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
    ],
    rC = [aG.V.ADOPT_CLAN_IDENTITY_NOTICE];
function rS(e) {
    switch (e) {
        case aG.V.GUILD_POWERUP_LEVEL_1_COACHMARK:
            return "GUILD_POWERUP_LEVEL_1_COACHMARK";
        case aG.V.GUILD_POWERUP_LEVEL_2_COACHMARK:
            return "GUILD_POWERUP_LEVEL_2_COACHMARK";
        case aG.V.GUILD_POWERUP_LEVEL_3_COACHMARK:
            return "GUILD_POWERUP_LEVEL_3_COACHMARK";
        case aG.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK";
        case aG.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK";
        case aG.V.ADOPT_CLAN_IDENTITY_NOTICE:
            return "ADOPT_CLAN_IDENTITY_NOTICE";
        default:
            return String(e);
    }
}
var r_ = a(374336);
async function rN(e, t, a) {
    (await ia.Bo.patch({
        url: ej.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
        body: { applied_boost_ids: t.map((e) => e.id), ends_at: a ? null : n$()().add(1, "day") },
        rejectWithError: !0,
    }),
        (0, rx.VU)(e),
        (0, rj.Xd)(e, !0));
}
function rA() {
    let e = (0, d.bG)([nk.A], () => nk.A.getGuildId()),
        t = (0, d.bG)([nA.A], () => nA.A.getGuild(e)?.name),
        a = (0, d.yK)([aF.A], () => [...rE, ...rC].filter((t) => null != e && (0, rb.zs)(t, e))),
        n = (0, d.yK)([rf.A], () => (null != e ? (rf.A.getAppliedGuildBoostsForGuild(e) ?? []) : []));
    if (null != e)
        return (0, r.jsxs)(x.Ip, {
            className: r_.kL,
            children: [
                (0, r.jsx)("div", {
                    className: r_.uW,
                    children: (0, r.jsx)(ei.D, { variant: "heading-sm/medium", children: `Current guild: ${t}` }),
                }),
                (0, r.jsxs)("div", {
                    className: r_.uW,
                    children: [
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/medium",
                            className: r_.wx,
                            children: "Reset Notification Indicators",
                        }),
                        (0, r.jsx)(p.$, {
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
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/medium",
                            className: r_.wx,
                            children: "Reset Progress Bar State",
                        }),
                        (0, r.jsx)(p.$, { variant: "primary", text: "Reset", onClick: rv.O }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: r_.uW,
                    children: [
                        (0, r.jsx)(g.E, { variant: "body-sm/medium", children: "Set Warning State" }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Set Half Boosts expiring in 1 day",
                                    onClick: () => {
                                        rN(e, n.slice(Math.floor(n.length / 2)), !1);
                                    },
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        rN(e, n, !0);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: r_.uW,
                    children: [
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/medium",
                            className: r_.wx,
                            children: "Reset User Level DCs",
                        }),
                        (0, r.jsx)(t0.B, {
                            gap: 16,
                            children: ry.map((e) => (0, r.jsx)(lH, { className: r_.z6, content: aG.M[e] }, aG.M[e])),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: r_.uW,
                    children: (0, r.jsx)(u.n, {
                        label: "Reset Guild Level DCs",
                        children: rE.map((t) =>
                            (0, r.jsx)(
                                m.d,
                                {
                                    label: rS(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, rb._$)(t, e, !1)
                                            : ((0, aB._N)(aG.M.GUILD_POWERUP_NOTIFICATION), (0, rb.hk)(t, e));
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
                        children: rC.map((t) =>
                            (0, r.jsx)(
                                m.d,
                                {
                                    label: rS(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, rb._$)(t, e, !1)
                                            : ((0, aB._N)(aG.M.GUILD_POWERUP_NOTIFICATION), (0, rb.hk)(t, e));
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
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/medium",
                            className: r_.wx,
                            children: "Send Powerups System Message",
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                !(async function (e) {
                                    await ia.Bo.post({
                                        url: ej.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e),
                                        rejectWithError: !0,
                                    });
                                })(e);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(p.$, {
                    variant: "primary",
                    text: "Reset GameServer ToS",
                    onClick: () => {
                        (0, iZ.Wp)(!1);
                    },
                }),
            ],
        });
}
var rk = a(450510),
    rI = a(648048);
function rD(e) {
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
    return (0, r.jsx)(x.Ip, {
        className: t6.nd,
        children: (0, r.jsx)(u.n, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: rI.IN,
            children: (0, r.jsx)(t0.B, {
                gap: 20,
                children: Object.keys(rk._2)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, r.jsx)(rD, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
var rR = a(95498),
    rO = a(855522),
    rw = a(37646),
    rM = a(773669);
function rP() {
    let e = (0, d.bG)([rM.default], () => rM.default.locale),
        [t, a] = o.useState(),
        n = (0, rR.runtimeHashMessageKey)(t ?? ""),
        l = o.useMemo(() => nD.t[n], [n]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(nu.Ay, {
                children: [
                    (0, r.jsx)(nu.Ay.Icon, { icon: rw.LanguageIcon, tooltip: "Locale" }),
                    (0, r.jsx)(nu.Ay.Title, { children: "Locale" }),
                ],
            }),
            (0, r.jsxs)(le, {
                children: [
                    (0, r.jsx)(lt, { name: "Active System", children: "@discord/intl" }),
                    (0, r.jsx)(lt, { name: "App", children: e }),
                    (0, r.jsx)(lt, { name: "System", children: nD.systemLocale }),
                    (0, r.jsx)(lt, { name: "@discord/intl", children: nD.intl.currentLocale }),
                    (0, r.jsx)(lt, { name: "common i18n", children: rO.A.getLocale() }),
                    (0, r.jsx)(lt, { name: "Moment", children: n$().locale() }),
                ],
            }),
            (0, r.jsxs)(nu.Ay, {
                children: [
                    (0, r.jsx)(nu.Ay.Icon, { icon: rw.LanguageIcon, tooltip: "Messages" }),
                    (0, r.jsx)(nu.Ay.Title, { children: "New System Messages" }),
                ],
            }),
            (0, r.jsx)(le, {
                children: (0, r.jsx)(lt, { name: "Unique Rendered Main Messages", children: Object.keys(nD.t).length }),
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
            (0, r.jsxs)(le, {
                children: [
                    (0, r.jsx)(lt, { name: "Hashed key", children: n }),
                    (0, r.jsx)(lt, { name: "Exists?", children: null != l ? "yes" : "no" }),
                ],
            }),
            (0, r.jsx)(nm.A, { data: l?.(e) }),
        ],
    });
}
var rL = a(172471);
function rU() {
    let { node: e } = (0, eh.Ay)(rL.F, "");
    return (0, r.jsx)(x.Ip, {
        className: t6.nd,
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-8)" },
            children: (0, r.jsx)(em.A, { node: e }, e.key),
        }),
    });
}
var rG = a(361158),
    rB = a(80556),
    rF = a(129939),
    r$ = a(15e3),
    rV = a(87404);
function rW() {
    return (0, r.jsx)(x.Ip, {
        className: t6.nd,
        children: (0, r.jsxs)("div", {
            className: i$.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: i$.uW,
                    children: [
                        (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: "Verification Layer" }),
                        (0, r.jsx)("div", {
                            className: i$.bd,
                            children: (0, r.jsx)(p.$, {
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
                    className: i$.uW,
                    children: [
                        (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: "Safety Flow" }),
                        (0, r.jsx)("div", {
                            className: i$.bd,
                            children: (0, r.jsx)(p.$, {
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
                    className: i$.uW,
                    children: [
                        (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: "Layer Controls" }),
                        (0, r.jsx)("div", {
                            className: i$.bd,
                            children: (0, r.jsx)(p.$, {
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
var rH = a(687813),
    rz = a(604121);
let rK = {
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_Messages_Opt.lottie":
        () => a.e(136508).then(a.t.bind(a, 655671, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_Notifications_Opt.lottie":
        () => a.e(405252).then(a.t.bind(a, 323823, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_Servers_CombinedEE.lottie":
        () => a.e(565154).then(a.t.bind(a, 670649, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_Servers_Opt.lottie":
        () => a.e(277248).then(a.t.bind(a, 342787, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_You_Opt.lottie": () =>
        a.e(393401).then(a.t.bind(a, 959328, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Requests_Messages.lottie": () =>
        a.e(748614).then(a.t.bind(a, 713893, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Activities.lottie": () =>
        a.e(32431).then(a.t.bind(a, 857778, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/AppsIcon.lottie": () =>
        a.e(337415).then(a.t.bind(a, 996858, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Camera.lottie": () =>
        a.e(475913).then(a.t.bind(a, 999344, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Deafen.lottie": () =>
        a.e(61309).then(a.t.bind(a, 433356, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/EndCall.lottie": () =>
        a.e(727847).then(a.t.bind(a, 72922, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/GIF.lottie": () =>
        a.e(932886).then(a.t.bind(a, 456309, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Gift.lottie": () =>
        a.e(243734).then(a.t.bind(a, 733813, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Microphone.lottie": () =>
        a.e(926620).then(a.t.bind(a, 890007, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/OrbsEarnSpend.lottie": () =>
        a.e(492568).then(a.t.bind(a, 149707, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/OrbsEarnSpendLightTheme.lottie": () =>
        a.e(282715).then(a.t.bind(a, 147734, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Screenshare.lottie": () =>
        a.e(829721).then(a.t.bind(a, 218048, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Settings.lottie": () =>
        a.e(494483).then(a.t.bind(a, 155806, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Soundboard.lottie": () =>
        a.e(350115).then(a.t.bind(a, 535662, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Sticker.lottie": () =>
        a.e(897473).then(a.t.bind(a, 956248, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Waveform.lottie": () =>
        a.e(665373).then(a.t.bind(a, 914028, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge01.lottie":
        () => a.e(875199).then(a.t.bind(a, 904066, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge02.lottie":
        () => a.e(633900).then(a.t.bind(a, 185319, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge03.lottie":
        () => a.e(665405).then(a.t.bind(a, 743372, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge06.lottie":
        () => a.e(227648).then(a.t.bind(a, 195011, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge09.lottie":
        () => a.e(729095).then(a.t.bind(a, 619578, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge12.lottie":
        () => a.e(994131).then(a.t.bind(a, 676574, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge15.lottie":
        () => a.e(765404).then(a.t.bind(a, 384407, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge18.lottie":
        () => a.e(911817).then(a.t.bind(a, 110320, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge24.lottie":
        () => a.e(284996).then(a.t.bind(a, 248476, 17)),
    "discord_common/js/shared/animations/app/gifts/seasonal/box/box-action.lottiejson": () =>
        a.e(719534).then(a.t.bind(a, 87037, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/box/box-idle.lottiejson": () =>
        a.e(812250).then(a.t.bind(a, 553998, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/box/box-loop.lottiejson": () =>
        a.e(58526).then(a.t.bind(a, 138157, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/cake/cake-action.lottiejson": () =>
        a.e(964376).then(a.t.bind(a, 37259, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/cake/cake-idle.lottiejson": () =>
        a.e(730800).then(a.t.bind(a, 683891, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/cake/cake-loop.lottiejson": () =>
        a.e(852436).then(a.t.bind(a, 45887, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/chest/chest-action.lottiejson": () =>
        a.e(403086).then(a.t.bind(a, 118301, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/chest/chest-idle.lottiejson": () =>
        a.e(437690).then(a.t.bind(a, 733057, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/chest/chest-loop.lottiejson": () =>
        a.e(582078).then(a.t.bind(a, 553101, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/coffee/coffee-action.lottiejson": () =>
        a.e(751992).then(a.t.bind(a, 558251, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/coffee/coffee-idle.lottiejson": () =>
        a.e(264400).then(a.t.bind(a, 94995, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/coffee/coffee-loop.lottiejson": () =>
        a.e(239476).then(a.t.bind(a, 367327, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/gift_icon/seasonal-gifting-wumpus-action.lottiejson":
        () => a.e(827568).then(a.t.bind(a, 579571, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/gift_icon/seasonal-gifting-wumpus-loop.lottiejson":
        () => a.e(525676).then(a.t.bind(a, 322151, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/seasonal_wumpus/seasonal-wumpus-action.lottiejson":
        () => a.e(710803).then(a.t.bind(a, 27870, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/seasonal_wumpus/seasonal-wumpus-idle.lottiejson":
        () => a.e(410191).then(a.t.bind(a, 837074, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/seasonal_wumpus/seasonal-wumpus-loop.lottiejson":
        () => a.e(761223).then(a.t.bind(a, 547450, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/nitroween/halloween-action.lottiejson": () =>
        a.e(969842).then(a.t.bind(a, 809865, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/nitroween/halloween-idle.lottiejson": () =>
        a.e(699166).then(a.t.bind(a, 334829, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/box/box-action.lottiejson": () =>
        a.e(698287).then(a.t.bind(a, 380082, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/box/box-idle.lottiejson": () =>
        a.e(212427).then(a.t.bind(a, 676614, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/box/box-loop.lottiejson": () =>
        a.e(831939).then(a.t.bind(a, 900110, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/cake/cake-action.lottiejson": () =>
        a.e(371305).then(a.t.bind(a, 629456, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/cake/cake-idle.lottiejson": () =>
        a.e(170625).then(a.t.bind(a, 254424, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/cake/cake-loop.lottiejson": () =>
        a.e(233449).then(a.t.bind(a, 690576, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/chest/chest-action.lottiejson": () =>
        a.e(346791).then(a.t.bind(a, 690842, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/chest/chest-idle.lottiejson": () =>
        a.e(828115).then(a.t.bind(a, 755678, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/chest/chest-loop.lottiejson": () =>
        a.e(408891).then(a.t.bind(a, 778422, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/coffee/coffee-action.lottiejson": () =>
        a.e(958009).then(a.t.bind(a, 433504, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/coffee/coffee-idle.lottiejson": () =>
        a.e(702897).then(a.t.bind(a, 976584, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/coffee/coffee-loop.lottiejson": () =>
        a.e(252793).then(a.t.bind(a, 858464, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Anime_v01_Lottie.lottiejson": () =>
        a.e(674149).then(a.t.bind(a, 965892, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Arcade_v01.lottiejson": () =>
        a.e(739468).then(a.t.bind(a, 44194, 19)),
    "discord_app/images/burst_reactions/BurstReaction_BlackHoles_v01.lottiejson": () =>
        a.e(4289).then(a.t.bind(a, 141208, 19)),
    "discord_app/images/burst_reactions/BurstReaction_BlastOff_v04.lottiejson": () =>
        a.e(277339).then(a.t.bind(a, 420054, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Crystal_v04.lottiejson": () =>
        a.e(366414).then(a.t.bind(a, 33565, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Fireworks_v03.lottiejson": () =>
        a.e(331165).then(a.t.bind(a, 414956, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Fusion_v03.lottiejson": () =>
        a.e(158541).then(a.t.bind(a, 221340, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Pop_v04.lottiejson": () =>
        a.e(910169).then(a.t.bind(a, 710208, 19)),
    "discord_app/images/burst_reactions/BurstReaction_PowerUp_v05.lottiejson": () =>
        a.e(276601).then(a.t.bind(a, 333984, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Puzzle_v01_Lottie.lottiejson": () =>
        a.e(484163).then(a.t.bind(a, 211342, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Spotlight_v01_Lottie.lottiejson": () =>
        a.e(252029).then(a.t.bind(a, 714316, 19)),
    "discord_app/images/burst_reactions/BurstReaction_StarBlast_v03.lottiejson": () =>
        a.e(623997).then(a.t.bind(a, 851404, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Tube_v01_Lottie.lottiejson": () =>
        a.e(667133).then(a.t.bind(a, 821644, 19)),
    "discord_app/images/burst_reactions/BurstReaction_UFO_v01_Lottie.lottiejson": () =>
        a.e(684765).then(a.t.bind(a, 51244, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Whirlwind_v01_Lottie.lottiejson": () =>
        a.e(235583).then(a.t.bind(a, 668994, 19)),
    "discord_app/images/burst_reactions/mobile/fullscreen/SuperReactions_Mobile_Send_Spotlight_v1.lottiejson": () =>
        a.e(47862).then(a.t.bind(a, 911573, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Anime_v1.lottiejson": () =>
        a.e(946711).then(a.t.bind(a, 23434, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Arcade_v1.lottiejson": () =>
        a.e(751153).then(a.t.bind(a, 743496, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_BlackHoles_v1.lottiejson": () =>
        a.e(32803).then(a.t.bind(a, 252462, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_BlastOff_v1.lottiejson": () =>
        a.e(819842).then(a.t.bind(a, 341529, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Crystal_v1.lottiejson": () =>
        a.e(585529).then(a.t.bind(a, 762464, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Fireworks_v1.lottiejson": () =>
        a.e(697197).then(a.t.bind(a, 47036, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Fusion_v1.lottiejson": () =>
        a.e(192933).then(a.t.bind(a, 279172, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Pop_v1.lottiejson": () =>
        a.e(905560).then(a.t.bind(a, 824888, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_PowerUp_v1.lottiejson": () =>
        a.e(863011).then(a.t.bind(a, 432302, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Puzzle_v1.lottiejson": () =>
        a.e(369845).then(a.t.bind(a, 854420, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Spotlight_v1.lottiejson": () =>
        a.e(888607).then(a.t.bind(a, 997730, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_StarBlast_v2.lottiejson": () =>
        a.e(696874).then(a.t.bind(a, 281073, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Tube_v1.lottiejson": () =>
        a.e(894147).then(a.t.bind(a, 192718, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_UFO_v2.lottiejson": () =>
        a.e(84992).then(a.t.bind(a, 513667, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Whirlwind_v1.lottiejson": () =>
        a.e(349693).then(a.t.bind(a, 754124, 19)),
    "discord_app/modules/guild_member_verification/images/islandMiddleAnimation.lottiejson": () =>
        a.e(739900).then(a.t.bind(a, 144759, 19)),
    "discord_app/modules/premium/web/animations/guild_sidebar_premium_entrypoint_dt.json": () =>
        a.e(515048).then(a.t.bind(a, 366043, 19)),
    "discord_app/modules/premium/web/animations/guild_sidebar_premium_entrypoint_lt.json": () =>
        a.e(612512).then(a.t.bind(a, 789091, 19)),
    "discord_common/js/shared/animations/app/activities/AppsIconWordlePromo.lottiejson": () =>
        a.e(173550).then(a.t.bind(a, 527613, 19)),
    "discord_common/js/shared/animations/app/nearby/nearby.lottiejson": () => a.e(293780).then(a.t.bind(a, 957439, 19)),
    "discord_common/js/shared/animations/app/premium_guild_subscribe/dark.lottiejson": () =>
        a.e(245470).then(a.t.bind(a, 622637, 19)),
    "discord_common/js/shared/animations/app/premium_guild_subscribe/light.lottiejson": () =>
        a.e(23478).then(a.t.bind(a, 262037, 19)),
    "discord_common/js/shared/animations/app/premium_guild_subscription_system_message_easter_egg/index.lottiejson":
        () => a.e(698150).then(a.t.bind(a, 633343, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/hd_streaming.lottiejson": () =>
        a.e(520795).then(a.t.bind(a, 551574, 19)),
    "discord_common/js/shared/animations/app/premium-payment-tier-2/index.lottiejson": () =>
        a.e(869421).then(a.t.bind(a, 548375, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Bubbles_v03.lottiejson": () =>
        a.e(91770).then(a.t.bind(a, 95553, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Portal_v03.lottiejson": () =>
        a.e(196515).then(a.t.bind(a, 956481, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Slime_v02.lottiejson": () =>
        a.e(109302).then(a.t.bind(a, 16341, 19)),
    "discord_app/images/burst_reactions/mobile/fullscreen/SuperReactions_Mobile_Send_Slime_v1.lottiejson": () =>
        a.e(247554).then(a.t.bind(a, 748761, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Bubbles_v2.lottiejson": () =>
        a.e(807739).then(a.t.bind(a, 106870, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Portal_v1.lottiejson": () =>
        a.e(979067).then(a.t.bind(a, 458486, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Slime_v2.lottiejson": () =>
        a.e(924584).then(a.t.bind(a, 388059, 19)),
    "discord_app/modules/app_launcher/native/images/onboarding_glow.lottiejson": () =>
        a.e(507985).then(a.t.bind(a, 9640, 19)),
    "discord_app/modules/global_discovery_apps/discovering-dabatouille-animation.lottiejson": () =>
        a.e(995947).then(a.t.bind(a, 604902, 19)),
    "discord_app/modules/guild_boosting/animations/animated_guild_icon.lottiejson": () =>
        a.e(24645).then(a.t.bind(a, 624420, 19)),
    "discord_app/modules/guild_member_verification/images/wavingHandLottieAnimation.lottiejson": () =>
        a.e(515423).then(a.t.bind(a, 155147, 19)),
    "discord_app/modules/guild_onboarding/native/animations/landing.lottiejson": () =>
        a.e(124093).then(a.t.bind(a, 280780, 19)),
    "discord_app/modules/guild_onboarding/web/animations/balloon-dog.lottiejson": () =>
        a.e(225961).then(a.t.bind(a, 739408, 19)),
    "discord_app/modules/guild_onboarding/web/animations/bubble-island-02.lottiejson": () =>
        a.e(187356).then(a.t.bind(a, 194199, 19)),
    "discord_app/modules/guild_onboarding/web/animations/grilling-island-02.lottiejson": () =>
        a.e(556026).then(a.t.bind(a, 113473, 19)),
    "discord_app/modules/guild_onboarding/web/animations/main-island-02.lottiejson": () =>
        a.e(416301).then(a.t.bind(a, 694268, 19)),
    "discord_app/modules/guild_onboarding/web/animations/waffle-island-02.lottiejson": () =>
        a.e(722191).then(a.t.bind(a, 896018, 19)),
    "discord_app/modules/poggermode/images/enable_animation.lottiejson": () =>
        a.e(504660).then(a.t.bind(a, 662336, 19)),
    "discord_app/modules/premium/powerups/web/images/server_boost_highlight.json": () =>
        a.e(867807).then(a.t.bind(a, 217762, 19)),
    "discord_app/modules/quests/images/confetti.lottiejson": () => a.e(40119).then(a.t.bind(a, 718698, 19)),
    "discord_app/modules/quests/web/images/quest_bar_background.json": () => a.e(837316).then(a.t.bind(a, 599279, 19)),
    "discord_app/modules/quests/web/images/quest_bar_sparkle.json": () => a.e(897536).then(a.t.bind(a, 478979, 19)),
    "discord_app/modules/self_mod/inappropriate_conversation/images/vibing_wumpus.lottiejson": () =>
        a.e(114823).then(a.t.bind(a, 718074, 19)),
    "discord_common/js/shared/animations/app/everyone_popout/dark.lottiejson": () =>
        a.e(480467).then(a.t.bind(a, 661022, 19)),
    "discord_common/js/shared/animations/app/everyone_popout/light.lottiejson": () =>
        a.e(892705).then(a.t.bind(a, 111992, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/coachmark/seasonal-gifting-coachmark.lottiejson":
        () => a.e(561250).then(a.t.bind(a, 762361, 19)),
    "discord_common/js/shared/animations/app/playstation/playstation_connecting.lottiejson": () =>
        a.e(435066).then(a.t.bind(a, 844512, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/emoji.lottiejson": () =>
        a.e(717124).then(a.t.bind(a, 616175, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/interstitial_wheel_dark.lottiejson": () =>
        a.e(394675).then(a.t.bind(a, 735678, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/interstitial_wheel_light.lottiejson": () =>
        a.e(278465).then(a.t.bind(a, 247704, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/profile_customization.lottiejson": () =>
        a.e(762807).then(a.t.bind(a, 202282, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/unlock.lottiejson": () =>
        a.e(131838).then(a.t.bind(a, 650125, 19)),
    "discord_common/js/shared/animations/app/premium_marketing/index.lottiejson": () =>
        a.e(406954).then(a.t.bind(a, 964529, 19)),
    "discord_common/js/shared/animations/app/premium_payment_guild/index.lottiejson": () =>
        a.e(945870).then(a.t.bind(a, 738503, 19)),
    "discord_common/js/shared/animations/app/premium-activated-tier-1/premium-activated-tier-1.lottiejson": () =>
        a.e(505642).then(a.t.bind(a, 242993, 19)),
    "discord_common/js/shared/animations/app/premium-payment-tier-0/index.lottiejson": () =>
        a.e(678503).then(a.t.bind(a, 635489, 19)),
    "discord_common/js/shared/animations/app/premium-payment-tier-1/index.lottiejson": () =>
        a.e(119898).then(a.t.bind(a, 262546, 19)),
    "discord_common/js/shared/animations/app/xbox/voice_connect.lottiejson": () =>
        a.e(40348).then(a.t.bind(a, 971799, 19)),
    "discord_common/js/shared/animations/app/xbox/xbox_connecting.lottiejson": () =>
        a.e(876121).then(a.t.bind(a, 709376, 19)),
};
function rY(e) {
    let { default: t } = e;
    return fetch(t)
        .then((e) => e.arrayBuffer())
        .then(
            (e) =>
                new Promise((t, a) => {
                    let n = new Uint8Array(e);
                    rH.$1(n, (e, n) => {
                        null != e && a(e);
                        let l = Object.keys(n).reduce((e, t) => ({ ...e, [t]: JSON.parse(rH.strFromU8(n[t])) }), {}),
                            i = l["manifest.json"];
                        t(l[`animations/${i.animations[0].id}.json`]);
                    });
                }),
        );
}
function rq() {
    let [e, t] = o.useState(void 0),
        [a, n] = o.useState(400),
        [l, i] = o.useState(400);
    return (0, r.jsx)("div", {
        style: { margin: 24 },
        children: (0, r.jsxs)(t0.B, {
            gap: 24,
            children: [
                (0, r.jsx)(ak.Z, {
                    options: Object.keys(rK).map((e) => ({ id: e, label: e, value: e })),
                    value: e,
                    onSelectionChange: t,
                    selectionMode: "single",
                }),
                (0, r.jsxs)(t0.B, {
                    gap: 8,
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(f.k, { value: a.toString(), onChange: (e) => n(Number(e)), label: "Width" }),
                        (0, r.jsx)(f.k, { value: l.toString(), onChange: (e) => i(Number(e)), label: "Height" }),
                    ],
                }),
                (0, r.jsx)(p.$, {
                    size: "sm",
                    disabled: null == e,
                    onClick: async () => {
                        if (null == e) return;
                        let t = rK[e],
                            a = new Blob(
                                [
                                    JSON.stringify(
                                        e.endsWith(".lottie")
                                            ? await t().then(rY).then(e4().cloneDeep)
                                            : await t().then((e) => e4().cloneDeep(e.default)),
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
                            rz.a,
                            {
                                importData: () => {
                                    let t = rK[e];
                                    return e.endsWith(".lottie")
                                        ? t().then(rY).then(e4().cloneDeep)
                                        : t().then((e) => e4().cloneDeep(e.default));
                                },
                            },
                            e,
                        ),
                    }),
            ],
        }),
    });
}
var rJ = a(327891);
let rQ = {
        ClipsContextMenu: async () => {
            let { default: e } = await a.e(344751).then(a.bind(a, 575538));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        ActivityPopoutHeaderOverflowMenu: async () => {
            let { default: e } = await Promise.all([a.e(202622), a.e(588251), a.e(590559)]).then(a.bind(a, 913525)),
                t = new rJ.kJ({
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
            return () => (0, r.jsx)(e, { application: t, channelId: "987654321", onClose: y.Z_ });
        },
        GuildChannelListContextMenu: async () => {
            let { default: e } = await Promise.all([a.e(309004), a.e(419690), a.e(845322), a.e(110758)]).then(
                    a.bind(a, 455557),
                ),
                t = Object.values(nA.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
        },
        GuildContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e(876364),
                    a.e(668756),
                    a.e(996907),
                    a.e(8159),
                    a.e(361922),
                    a.e(307564),
                    a.e(965886),
                    a.e(231541),
                    a.e(301850),
                    a.e(936875),
                    a.e(862179),
                    a.e(722784),
                    a.e(906470),
                    a.e(774550),
                    a.e(923981),
                    a.e(331696),
                    a.e(806391),
                    a.e(817298),
                    a.e(707551),
                    a.e(424216),
                    a.e(840100),
                    a.e(551257),
                    a.e(173896),
                    a.e(57358),
                    a.e(722765),
                    a.e(156912),
                    a.e(754596),
                    a.e(191601),
                    a.e(232e3),
                    a.e(21486),
                    a.e(304419),
                    a.e(45268),
                    a.e(617281),
                    a.e(733199),
                    a.e(603977),
                    a.e(655327),
                    a.e(335532),
                    a.e(138545),
                    a.e(536490),
                    a.e(771137),
                    a.e(403655),
                    a.e(212037),
                    a.e(577154),
                    a.e(877730),
                    a.e(611899),
                    a.e(527552),
                    a.e(769266),
                    a.e(487873),
                    a.e(765626),
                    a.e(683302),
                    a.e(660608),
                    a.e(744554),
                    a.e(118203),
                    a.e(331212),
                    a.e(638259),
                    a.e(635958),
                    a.e(683621),
                    a.e(711162),
                    a.e(275179),
                    a.e(289789),
                    a.e(116125),
                    a.e(977412),
                    a.e(19385),
                    a.e(692811),
                    a.e(122218),
                    a.e(356664),
                    a.e(495861),
                    a.e(309004),
                    a.e(430997),
                    a.e(728136),
                    a.e(343116),
                    a.e(583518),
                    a.e(680029),
                    a.e(387634),
                    a.e(637038),
                    a.e(635864),
                    a.e(447864),
                    a.e(710727),
                    a.e(966016),
                    a.e(794704),
                    a.e(466147),
                    a.e(462984),
                    a.e(50342),
                    a.e(256373),
                    a.e(409391),
                    a.e(479971),
                    a.e(202622),
                    a.e(810262),
                    a.e(346313),
                    a.e(836681),
                    a.e(553203),
                    a.e(218489),
                    a.e(838336),
                    a.e(115368),
                    a.e(343233),
                    a.e(756684),
                    a.e(736621),
                    a.e(419690),
                    a.e(583827),
                    a.e(495748),
                    a.e(138728),
                    a.e(708364),
                    a.e(452823),
                    a.e(556967),
                    a.e(647011),
                    a.e(269178),
                    a.e(553584),
                    a.e(466913),
                    a.e(752695),
                    a.e(574534),
                    a.e(71719),
                    a.e(893767),
                    a.e(213848),
                    a.e(588307),
                    a.e(462500),
                    a.e(676376),
                    a.e(898358),
                    a.e(639855),
                    a.e(842935),
                    a.e(73091),
                    a.e(37786),
                    a.e(214530),
                    a.e(886692),
                    a.e(675933),
                    a.e(916373),
                    a.e(528038),
                    a.e(616658),
                    a.e(702210),
                    a.e(118504),
                    a.e(8458),
                    a.e(11810),
                    a.e(404332),
                    a.e(890152),
                    a.e(174337),
                    a.e(347871),
                    a.e(287973),
                    a.e(314863),
                    a.e(966308),
                    a.e(623386),
                    a.e(375428),
                    a.e(384951),
                    a.e(560165),
                    a.e(940661),
                    a.e(712390),
                    a.e(884063),
                    a.e(876401),
                    a.e(113446),
                    a.e(606053),
                    a.e(632607),
                    a.e(229030),
                    a.e(161309),
                    a.e(694529),
                    a.e(303807),
                    a.e(143330),
                    a.e(995210),
                    a.e(114751),
                    a.e(695152),
                    a.e(317699),
                    a.e(257032),
                    a.e(772238),
                    a.e(845322),
                    a.e(945651),
                    a.e(114748),
                    a.e(426386),
                    a.e(128219),
                    a.e(652191),
                    a.e(8422),
                    a.e(149409),
                    a.e(258640),
                    a.e(935277),
                ]).then(a.bind(a, 871638)),
                t = Object.values(nA.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
        },
        GuildFolderContextMenu: async () => {
            let { default: e } = await Promise.all([a.e(114748), a.e(459612)]).then(a.bind(a, 865815));
            return (t) => (0, r.jsx)(e, { ...t, folderId: 1, folderColor: void 0, folderName: void 0, unread: !1 });
        },
        DeveloperContextMenu: async () => {
            let { default: e } = await a.e(715687).then(a.bind(a, 646938));
            return (t) => (0, r.jsx)(e, { ...t, id: "123456789", label: "Copy Test ID" });
        },
        UserSettingsMenu: async () => {
            let { default: e } = await Promise.all([a.e(594045), a.e(926132), a.e(908501)]).then(a.bind(a, 351988));
            return (t) => (0, r.jsx)(e, { ...t, onClose: y.Z_ });
        },
        ExpressionPickerContextMenu: async () => {
            let { default: e } = await a.e(446132).then(a.bind(a, 233503));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        ForumTagContextMenu: async () => {
            let { default: e } = await a.e(432612).then(a.bind(a, 960015)),
                t = { id: "123456789", name: "Test Forum Tag" };
            return () => (0, r.jsx)(e, { tag: t });
        },
        GuildRoleConnectionsModalContextMenu: async () => {
            let { default: e } = await a.e(868001).then(a.bind(a, 699896));
            return (t) =>
                (0, r.jsx)(e, {
                    ...t,
                    roleId: "123456789",
                    onLeaveRole: () => {
                        (console.log("Leave role clicked"), (0, y.Z_)());
                    },
                });
        },
        StaffOnlyEntryDebugMenu: async () => {
            let { default: e } = await Promise.all([a.e(886456), a.e(789346)]).then(a.bind(a, 949881)),
                { ContentInventoryEntryType: t } = await Promise.resolve().then(a.bind(a, 681154)),
                { ContentInventoryAuthorType: n } = await Promise.resolve().then(a.bind(a, 6161)),
                l = eg.default.getCurrentUser(),
                i = {
                    id: "mock-entry-123",
                    author_id: l?.id ?? "123456789",
                    author_type: n.USER,
                    content_type: t.PLAYED_GAME,
                    participants: [],
                    traits: [],
                    extra: { type: "played_game_extra", game_name: "Test Game", application_id: "123456789" },
                };
            return () => (0, r.jsx)(e, { entry: i, requestId: "mock-request-123" });
        },
        AddQuestionsContextMenu: async () => {
            let { AddQuestionsContextMenu: e } = await Promise.all([
                    a.e(289789),
                    a.e(722765),
                    a.e(838336),
                    a.e(11810),
                ]).then(a.bind(a, 892921)),
                t = Object.values(nA.A.getGuilds())[0];
            return null == t
                ? () => null
                : (a) =>
                      (0, r.jsx)(e, {
                          ...a,
                          addFormField: (e) => {
                              (console.log("Add form field:", e), (0, y.Z_)());
                          },
                          guild: t,
                          allowTerms: !0,
                      });
        },
        ChannelListThreadContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e(926132),
                    a.e(491001),
                    a.e(947502),
                    a.e(343266),
                    a.e(965789),
                    a.e(412255),
                    a.e(63340),
                    a.e(697367),
                    a.e(536478),
                    a.e(703869),
                    a.e(426760),
                    a.e(420105),
                ]).then(a.bind(a, 949488)),
                t = nA.A.getGuilds(),
                n = null;
            for (let e of Object.values(t)) {
                for (let t of Object.values(aQ.A.getMutableGuildChannelsForGuild(e.id))) {
                    let e = aQ.A.getAllThreadsForParent(t.id);
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
            let { default: e } = await Promise.all([a.e(73091), a.e(945651)]).then(a.bind(a, 779662)),
                t = Object.values(nA.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: y.Z_ });
        },
        MembersTableJoinTypeContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e(118203),
                    a.e(966016),
                    a.e(71719),
                    a.e(462500),
                    a.e(945651),
                ]).then(a.bind(a, 311567)),
                t = Object.values(nA.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: y.Z_ });
        },
    },
    rX = {
        GuildShopSortOptions: o.lazy(async () => {
            let { default: e } = await Promise.all([a.e(583518), a.e(255197), a.e(250974)]).then(a.bind(a, 324269)),
                { default: t } = await a.e(255197).then(a.bind(a, 558060));
            return { default: () => (0, r.jsx)(t, { defaultSortOption: void 0, children: (0, r.jsx)(e, {}) }) };
        }),
    };
function rZ() {
    let e = o.useMemo(
            () =>
                Object.keys(rQ)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        t = o.useMemo(
            () =>
                Object.keys(rX)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [a, n] = o.useState(null),
        [l, i] = o.useState(null),
        s = o.useCallback(
            (e) => {
                null != a && (0, y.L3)(e, rQ[a]);
            },
            [a],
        ),
        d = null != l ? rX[l] : null;
    return (0, r.jsx)(x.Ip, {
        className: t6.nd,
        children: (0, r.jsxs)(t0.B, {
            className: i$.l$,
            gap: 16,
            children: [
                (0, r.jsxs)(t0.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(g.E, { variant: "body-sm/medium", children: "Context Menus" }),
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a menu and click Open to trigger it as a context menu at the button position.",
                        }),
                    ],
                }),
                (0, r.jsxs)(t0.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(ak.Z, {
                            label: "Open a Context Menu",
                            placeholder: "Select a menu",
                            options: e,
                            value: a,
                            onSelectionChange: n,
                            selectionMode: "single",
                        }),
                        (0, r.jsx)(p.$, { variant: "primary", text: "Open", disabled: null == a, onClick: s }),
                    ],
                }),
                (0, r.jsxs)(t0.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(g.E, { variant: "body-sm/medium", children: "Popout Menus" }),
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a popout menu to render it. Click the rendered button to open the popout.",
                        }),
                    ],
                }),
                (0, r.jsx)(t0.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: (0, r.jsx)(ak.Z, {
                        label: "Render a Popout Menu",
                        placeholder: "Select a popout",
                        options: t,
                        value: l,
                        onSelectionChange: i,
                        selectionMode: "single",
                    }),
                }),
                null != d &&
                    (0, r.jsx)(o.Suspense, {
                        fallback: (0, r.jsx)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: "Loading...",
                        }),
                        children: (0, r.jsx)(d, {}),
                    }),
            ],
        }),
    });
}
var r0 = a(253506),
    r1 = a(665260),
    r2 = a(97808),
    r3 = a(778712),
    r6 = a(308528),
    r5 = a(138399),
    r8 = a(571694),
    r4 = a(963852),
    r9 = a(704844),
    r7 = a(309010),
    oe = a(645959),
    ot = a(716371),
    oa = a(32946);
let on = [
    { id: "USER_JOIN", value: ej.lAJ.USER_JOIN, label: "User Join" },
    { id: "CHANNEL_PINNED_MESSAGE", value: ej.lAJ.CHANNEL_PINNED_MESSAGE, label: "Channel Pinned Message" },
    { id: "GUILD_BOOST", value: ej.lAJ.GUILD_BOOST, label: "Guild Boost" },
    { id: "GUILD_BOOST_TIER_1", value: ej.lAJ.GUILD_BOOST_TIER_1, label: "Guild Boost Tier 1" },
    { id: "GUILD_BOOST_TIER_2", value: ej.lAJ.GUILD_BOOST_TIER_2, label: "Guild Boost Tier 2" },
    { id: "GUILD_BOOST_TIER_3", value: ej.lAJ.GUILD_BOOST_TIER_3, label: "Guild Boost Tier 3" },
    { id: "THREAD_CREATED", value: ej.lAJ.THREAD_CREATED, label: "Thread Created" },
    { id: "CHANNEL_FOLLOW_ADD", value: ej.lAJ.CHANNEL_FOLLOW_ADD, label: "Channel Follow Add" },
    { id: "STAGE_START", value: ej.lAJ.STAGE_START, label: "Stage Start" },
    { id: "STAGE_END", value: ej.lAJ.STAGE_END, label: "Stage End" },
    { id: "STAGE_SPEAKER", value: ej.lAJ.STAGE_SPEAKER, label: "Stage Speaker" },
    { id: "STAGE_RAISE_HAND", value: ej.lAJ.STAGE_RAISE_HAND, label: "Stage Raise Hand" },
    { id: "STAGE_TOPIC", value: ej.lAJ.STAGE_TOPIC, label: "Stage Topic" },
    { id: "VOICE_SESSION", value: ej.lAJ.VOICE_SESSION, label: "Voice Session" },
    { id: "FRIEND_REQUEST_ACCEPTED", value: ej.lAJ.FRIEND_REQUEST_ACCEPTED, label: "Friend Request Accepted" },
    { id: "GUILD_DISCOVERY_DISQUALIFIED", value: ej.lAJ.GUILD_DISCOVERY_DISQUALIFIED, label: "Discovery Disqualified" },
    { id: "GUILD_DISCOVERY_REQUALIFIED", value: ej.lAJ.GUILD_DISCOVERY_REQUALIFIED, label: "Discovery Requalified" },
    {
        id: "GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING",
        value: ej.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING,
        label: "Discovery Grace Initial Warning",
    },
    {
        id: "GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING",
        value: ej.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING,
        label: "Discovery Grace Final Warning",
    },
    { id: "RECIPIENT_ADD", value: ej.lAJ.RECIPIENT_ADD, label: "Recipient Add" },
    { id: "RECIPIENT_REMOVE", value: ej.lAJ.RECIPIENT_REMOVE, label: "Recipient Remove" },
    { id: "CALL", value: ej.lAJ.CALL, label: "Call" },
];
function ol() {
    let [e, t] = o.useState(ej.lAJ.USER_JOIN),
        a = (0, d.bG)([r7.Ay], () => r7.Ay.getChannelId(), []),
        n = o.useCallback(() => {
            if (null == a || null == e) return;
            let t = (0, r4.Ay)({ channelId: a, content: "", type: e, state: ej.cmJ.SENT });
            r5.A.receiveMessage(a, t, !1);
        }, [a, e]),
        l = o.useCallback(() => {
            if (null != a)
                for (let { value: e } of on) {
                    let t = (0, r4.Ay)({ channelId: a, content: "", type: e, state: ej.cmJ.SENT });
                    r5.A.receiveMessage(a, t, !1);
                }
        }, [a]);
    return (0, r.jsxs)("div", {
        className: oa.gs,
        children: [
            (0, r.jsx)(ak.Z, {
                label: "Inject System Message",
                selectionMode: "single",
                options: on,
                placeholder: "Select type",
                value: e,
                onSelectionChange: t,
            }),
            (0, r.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Inject",
                onClick: n,
                disabled: null == a || null == e,
            }),
            (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: "Inject All", onClick: l, disabled: null == a }),
        ],
    });
}
function oi() {
    let e = (0, d.yK)([oe.A], () => oe.A.getSortedChannels()[1]),
        [t, a] = o.useState(e.length > 0 ? e[0].channelId : void 0),
        { selectedChannel: n, options: l } = (0, d.cf)([aQ.A, eg.default, aX.A], () => ({
            selectedChannel: aQ.A.getChannel(t),
            options: e.map((e) => {
                let t = aQ.A.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, aJ.m1)(t, eg.default, aX.A) : e.channelId,
                    leading:
                        null != t
                            ? (0, r.jsx)(r2.eu, { src: (0, r8.Y)(t), "aria-hidden": !0, size: r3._3.SIZE_16 })
                            : void 0,
                };
            }),
        })),
        i = o.useCallback(() => {
            if (null == n || !n.isPrivate()) return;
            let e = (0, r1.PQ)(n.recipientFlags ?? 0, r0.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            r9.A.updatePrivateChannelRecipientFlags(n.id, e);
        }, [n]),
        s = !!n?.isPrivate() && (0, r1.Lt)(n.recipientFlags ?? 0, r0.o.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, r.jsxs)("div", {
        className: oa.gs,
        children: [
            (0, r.jsx)(ak.Z, {
                label: "In-Game NUX Message for DMs",
                selectionMode: "single",
                options: l,
                placeholder: "Select DM",
                value: t,
                onSelectionChange: a,
            }),
            (0, r.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: s ? "Clear NUX Flag" : "Set NUX Flag",
                onClick: i,
                disabled: null == t,
            }),
        ],
    });
}
function os() {
    let e = o.useCallback(() => {
        r6.A.openPrivateChannel({ recipientIds: [ot.K] });
    }, []);
    return (0, r.jsx)(p.$, { variant: "primary", size: "sm", text: "Open System DM", onClick: e });
}
function or() {
    let e = (0, d.bG)([S.Ay], () => S.Ay.allByCategory(S.xW.MESSAGING), [], d.My).map((e) => {
        let [t, a, { label: n }] = e;
        return (0, r.jsx)(m.d, { label: n, description: t, checked: a, onChange: (e) => _(t, e) }, t);
    });
    return (0, r.jsxs)("div", {
        className: ea()(t6.nd, oa.nd),
        children: [
            e,
            (0, r.jsx)("div", { className: oa.yF }),
            (0, r.jsx)(ol, {}),
            (0, r.jsx)("div", { className: oa.yF }),
            (0, r.jsx)(oi, {}),
            (0, r.jsx)("div", { className: oa.yF }),
            (0, r.jsx)(os, {}),
        ],
    });
}
var oo = a(205693),
    od = a(772707),
    oc = a(150934),
    ou = a(171576),
    om = a(598653),
    oh = a(166403),
    op = a(188567),
    og = a(204925),
    ox = a(55010);
let ov = {
    EmailEnterModal: async () => {
        let { default: e } = await a.e(429232).then(a.bind(a, 180275));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: nD.intl.string(nD.t.ZLRYGU),
                confirmButtonText: nD.intl.string(nD.t.PDTjLN),
                confirmButtonVariant: "primary",
            });
    },
    EmailPincodeModal: async () => {
        let { default: e } = await a.e(919840).then(a.bind(a, 79779));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: nD.intl.string(nD.t.H3Q7U8),
                onFormSubmit: () => {},
                onResend: () => {},
                onSuccess: () => {},
                confirmButtonText: nD.intl.string(nD.t["13ofGu"]),
                impression: { impressionName: sx.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
            });
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await Promise.all([a.e(469663), a.e(518467)]).then(a.bind(a, 297102));
        return (t) => (0, r.jsx)(e, { ...t, entryPoint: ou.q1.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL });
    },
    AgeAssuranceGatePrompt: async () => {
        let { default: e } = await a.e(922337).then(a.bind(a, 361016));
        return (t) => (0, r.jsx)(e, { ...t, source: og.w_.NSFW_SERVER });
    },
    DateOfBirthGatePrompt: async () => {
        let { default: e } = await Promise.all([a.e(533651), a.e(682758), a.e(280022), a.e(991007)]).then(
            a.bind(a, 189282),
        );
        return (t) => (0, r.jsx)(e, { ...t, source: og.w_.NSFW_SERVER });
    },
    ExistingUserAgeGateUnderage: async () => {
        let { default: e } = await a.e(280959).then(a.bind(a, 784578));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NewUserAgeGate: async () => {
        let { default: e } = await Promise.all([a.e(533651), a.e(682758), a.e(319623), a.e(280022), a.e(401143)]).then(
            a.bind(a, 284778),
        );
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NUFModal: async () => {
        let { default: e } = await Promise.all([
            a.e(188406),
            a.e(315907),
            a.e(122326),
            a.e(533651),
            a.e(944492),
            a.e(419580),
            a.e(197804),
            a.e(756856),
            a.e(682758),
            a.e(548521),
            a.e(280022),
            a.e(320898),
            a.e(993265),
            a.e(258118),
        ]).then(a.bind(a, 109766));
        return (t) => (0, r.jsx)(e, { ...t, onSlideChange: () => {} });
    },
    ClaimAccountModal: async () => {
        let { default: e } = await Promise.all([a.e(213042), a.e(319623), a.e(121007)]).then(a.bind(a, 110744));
        return (t) => (0, r.jsx)(e, { claimRequired: !0, ...t });
    },
    AutomatedUnderageAppealModal: async () => {
        let { default: e } = await Promise.all([a.e(51194), a.e(909018)]).then(a.bind(a, 466702));
        return (t) => (0, r.jsx)(e, { ...t, classificationId: "123" });
    },
    AutomodRaidResolveModal: async () => {
        let { default: e } = await Promise.all([a.e(513221), a.e(710727), a.e(307133)]).then(a.bind(a, 580812));
        return (t) => (0, r.jsx)(e, { ...t, guildId: "123", messageId: null });
    },
    AutomodUserProfileQuarantineAlert: async () => {
        let { default: e } = await a.e(452343).then(a.bind(a, 725034));
        return (t) => (0, r.jsx)(e, { ...t, guildId: "123" });
    },
    PhoneVerificationModal: async () => {
        let { default: e } = await Promise.all([a.e(590275), a.e(766806), a.e(989545), a.e(757786)]).then(
            a.bind(a, 938401),
        );
        return (t) => (0, r.jsx)(e, { error: null, working: !1, validPhone: !1, ...t });
    },
    VoiceSettingsModal: async () => {
        let { default: e } = await a.e(796531).then(a.bind(a, 880510));
        return (t) => (0, r.jsx)(e, { ...t, mediaEngineContext: oo.x.DEFAULT, subtitle: "Devtools subtitle" });
    },
    DynamicGraphicDemo: async () => {
        let { DynamicGraphicComponent: e } = await Promise.resolve().then(a.bind(a, 116833));
        return (t) =>
            (0, r.jsx)(od.k, {
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
        let { default: e } = await Promise.all([a.e(914052), a.e(82318)]).then(a.bind(a, 387101)),
            { OverlayToggledClientSettingType: t } = await Promise.resolve().then(a.bind(a, 918825));
        return (a) => (0, r.jsx)(e, { ...a, clientSettingType: t.LEGACY_GAME, gameId: "123456789" });
    },
    PremiumSubscriptionPauseModal: async () => {
        let { PremiumSubscriptionPauseModalSelect: e } = await Promise.all([a.e(489361), a.e(80347)]).then(
                a.bind(a, 318998),
            ),
            { CancellationContext: t } = await Promise.resolve().then(a.bind(a, 916974)),
            { PremiumTypes: n } = await Promise.resolve().then(a.bind(a, 682901)),
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
            };
        function i(a) {
            let { ref: i, ...s } = a,
                [d, c] = o.useState(null),
                { onClose: u, transitionState: m } = s,
                h = o.useMemo(
                    () => ({
                        setStep: () => {},
                        premiumType: n.TIER_2,
                        onClose: u,
                        transitionState: m,
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
                        pauseDuration: d,
                        setPauseDuration: c,
                    }),
                    [u, m, d],
                );
            return (0, r.jsx)(t.Provider, { value: h, children: (0, r.jsx)(e, {}) });
        }
        return ((i.displayName = "PremiumSubscriptionPauseModalWrapper"), (e) => (0, r.jsx)(i, { ...e }));
    },
    NewMemberActionModal: async () => {
        let { default: e } = await Promise.all([a.e(266281), a.e(287973), a.e(652191), a.e(813949), a.e(354569)]).then(
                a.bind(a, 251632),
            ),
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
        let { default: e } = await Promise.all([a.e(187880), a.e(465694), a.e(861293)]).then(a.bind(a, 971642)),
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
            i = {
                "device-1": { id: "device-1", name: "PS5 - Living Room", platform: "playstation" },
                "device-2": { id: "device-2", name: "PS5 - Bedroom", platform: "playstation" },
                "device-3": { id: "device-3", name: "PS4 - Office", platform: "playstation" },
            },
            s = (a) => {
                let n = t.default.getDevicesForPlatform,
                    s = t.default.getFetchingDevices,
                    o = t.default.getLastSelectedDeviceByPlatform,
                    d = t.default.getAwaitingRemoteSessionInfo;
                ((t.default.getDevicesForPlatform = (e) => (e === ej.fg2.PLAYSTATION ? i : n.call(t.default, e))),
                    (t.default.getFetchingDevices = (e) => e !== ej.fg2.PLAYSTATION && s.call(t.default, e)),
                    (t.default.getLastSelectedDeviceByPlatform = (e) =>
                        e === ej.fg2.PLAYSTATION ? "device-1" : o.call(t.default, e)),
                    (t.default.getAwaitingRemoteSessionInfo = () => null));
                let c = a.onClose;
                return (
                    (a.onClose = async () => {
                        ((t.default.getDevicesForPlatform = n),
                            (t.default.getFetchingDevices = s),
                            (t.default.getLastSelectedDeviceByPlatform = o),
                            (t.default.getAwaitingRemoteSessionInfo = d),
                            await c());
                    }),
                    (0, r.jsx)(e, { ...a, channel: l, platform: ej.fg2.PLAYSTATION })
                );
            };
        return ((s.displayName = "PlayStationModalWrapper"), s);
    },
    GameDetectionReportModal: async () => {
        let { default: e } = await Promise.all([a.e(568035), a.e(627495)]).then(a.bind(a, 651930));
        return (t) => (0, r.jsx)(e, { ...t, detected: { applicationId: "123456789", name: "Test Game" } });
    },
    AppealIngestionModal: async () => {
        let { default: e } = await Promise.all([a.e(726464), a.e(637867), a.e(480098)]).then(a.bind(a, 894683));
        return (t) => (0, r.jsx)(e, { ...t, classificationId: "123456789" });
    },
    CreateTagModal: async () => {
        let { default: e } = await Promise.all([a.e(143172), a.e(347326)]).then(a.bind(a, 950989));
        return (t) => (0, r.jsx)(e, { ...t, channelId: "123456789", guildId: "987654321" });
    },
    CreateTagModalEdit: async () => {
        let { default: e } = await Promise.all([a.e(143172), a.e(347326)]).then(a.bind(a, 950989)),
            t = { id: "tag-123", name: "Bug Report", emojiId: "123456789", emojiName: "\uD83D\uDC1B", moderated: !0 };
        return (a) => (0, r.jsx)(e, { ...a, channelId: "123456789", guildId: "987654321", tag: t });
    },
    ConfirmModal: async () => {
        let { ConfirmModal: e } = await Promise.all([a.e(304823), a.e(223976), a.e(977260)]).then(a.bind(a, 397927));
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
        let { Alert: e } = await Promise.all([a.e(844331), a.e(542369)]).then(a.bind(a, 291064));
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
        let { Alert: e } = await Promise.all([a.e(844331), a.e(542369)]).then(a.bind(a, 291064));
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
        let { Alert: e } = await Promise.all([a.e(844331), a.e(542369)]).then(a.bind(a, 291064));
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
                ButtonGroup: i,
            } = await Promise.all([a.e(304823), a.e(223976), a.e(977260)]).then(a.bind(a, 397927)),
            { DisableCommunicationDuration: s, getFriendlyDurationString: o } = await Promise.resolve().then(
                a.bind(a, 200700),
            ),
            d = await Promise.resolve().then(a.t.bind(a, 582128, 19)),
            c = "TestUser";
        function u(a) {
            let [u, m] = d.useState(s.DURATION_60_SEC),
                [h, p] = d.useState(""),
                [g, x] = d.useState(!1),
                [v, b] = d.useState(!1),
                j = [
                    { value: s.DURATION_60_SEC, label: o(s.DURATION_60_SEC) },
                    { value: s.DURATION_5_MIN, label: o(s.DURATION_5_MIN) },
                    { value: s.DURATION_10_MIN, label: o(s.DURATION_10_MIN) },
                    { value: s.DURATION_1_HOUR, label: o(s.DURATION_1_HOUR) },
                    { value: s.DURATION_1_DAY, label: o(s.DURATION_1_DAY) },
                    { value: s.DURATION_1_WEEK, label: o(s.DURATION_1_WEEK) },
                ],
                f = d.useCallback(async () => {
                    (x(!0),
                        console.log("GuildDisableCommunicationModal: Timing out user", {
                            user: c,
                            duration: o(u),
                            reason: null != h ? h : "No reason provided",
                            resolveFlag: v,
                        }),
                        await new Promise((e) => setTimeout(e, 1e3)),
                        x(!1),
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
                        variant: "body-sm/normal",
                        className: "mb-4",
                        color: "text-subtle",
                        children: "This will temporarily disable the user's ability to communicate in this server.",
                    }),
                    (0, r.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            (0, r.jsx)(n, { variant: "heading-xs/semibold", className: "mb-2", children: "Duration" }),
                            (0, r.jsx)(i, {
                                children: j.map((t) =>
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
                                variant: "heading-xs/semibold",
                                className: "mb-2",
                                children: "Reason (Optional)",
                            }),
                            (0, r.jsx)("textarea", {
                                value: h,
                                onChange: (e) => p(e.target.value),
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
                        children: (0, r.jsx)(l, { checked: v, onChange: b, label: "Resolve associated mod report" }),
                    }),
                    (0, r.jsxs)("div", {
                        style: { display: "flex", gap: "8px", justifyContent: "flex-end" },
                        children: [
                            (0, r.jsx)(e, { variant: "secondary", text: "Cancel", onClick: a.onClose }),
                            (0, r.jsx)(e, { variant: "primary", text: "Timeout User", onClick: f, disabled: g }),
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
            } = await Promise.all([a.e(304823), a.e(223976), a.e(977260)]).then(a.bind(a, 397927)),
            i = await Promise.resolve().then(a.t.bind(a, 582128, 19)),
            s = "Level 3 Server Boost",
            o = 200,
            d = 60,
            c = 8;
        function u(a) {
            let [u, m] = i.useState(!1),
                [h, p] = i.useState(!1),
                g = i.useCallback(async () => {
                    (p(!0),
                        console.log("GuildPowerupDeactivateModal: Deactivating powerup", {
                            powerup: s,
                            guildId: "123456789",
                        }),
                        await new Promise((e) => setTimeout(e, 2e3)),
                        p(!1),
                        a.onClose());
                }, [a]);
            return (0, r.jsxs)("div", {
                style: { padding: "20px", maxWidth: "500px" },
                children: [
                    (0, r.jsxs)(n, { variant: "heading-lg/semibold", className: "mb-2", children: ["Deactivate ", s] }),
                    (0, r.jsxs)(t, {
                        variant: "body-sm/normal",
                        className: "mb-4",
                        color: "text-subtle",
                        children: [
                            "This will remove the ",
                            s,
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
                                variant: "heading-xs/semibold",
                                className: "mb-2",
                                children: "Current Features",
                            }),
                            (0, r.jsxs)("div", {
                                style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" },
                                children: [
                                    (0, r.jsxs)(t, {
                                        variant: "body-sm/normal",
                                        color: "text-subtle",
                                        children: ["\u2022 ", o, " emoji slots"],
                                    }),
                                    (0, r.jsxs)(t, {
                                        variant: "body-sm/normal",
                                        color: "text-subtle",
                                        children: ["\u2022 ", d, " sticker slots"],
                                    }),
                                    (0, r.jsxs)(t, {
                                        variant: "body-sm/normal",
                                        color: "text-subtle",
                                        children: ["\u2022 ", c, " sound slots"],
                                    }),
                                    (0, r.jsx)(t, {
                                        variant: "body-sm/normal",
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
                                variant: "body-sm/medium",
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
                                variant: "body-sm/medium",
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
                                onClick: g,
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
        let { default: e } = await a.e(292063).then(a.bind(a, 970018));
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
        let { default: e } = await Promise.all([a.e(443159), a.e(82721), a.e(553203), a.e(452823), a.e(761120)]).then(
            a.bind(a, 218595),
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
        let e = (await Promise.all([a.e(315273), a.e(254857)]).then(a.bind(a, 147696))).default;
        return (t) => (0, r.jsx)(e, { ...t, guildId: "123456789012345678", startingChannelId: "987654321098765432" });
    },
    CameraPreviewModal: async () => {
        let { default: e } = await Promise.all([a.e(650100), a.e(410534)]).then(a.bind(a, 308229));
        return (t) => (0, r.jsx)(e, { ...t, videoEnabled: !1, onEnable: () => console.log("Camera enabled") });
    },
    CameraPreviewModalWithVideo: async () => {
        let { default: e } = await Promise.all([a.e(650100), a.e(410534)]).then(a.bind(a, 308229));
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
            a.e(866475),
            a.e(937139),
            a.e(850979),
            a.e(236946),
            a.e(692639),
            a.e(890480),
            a.e(440963),
            a.e(766031),
            a.e(394317),
            a.e(79362),
            a.e(320914),
        ]).then(a.bind(a, 677993));
        return (t) => (0, r.jsx)(e, { ...t, parentId: null, source: "devtools" });
    },
    ActivityShareMomentModal: async () => {
        let { default: e } = await Promise.all([
            a.e(866475),
            a.e(937139),
            a.e(58243),
            a.e(236946),
            a.e(692639),
            a.e(890480),
            a.e(440963),
            a.e(766031),
            a.e(394317),
            a.e(521743),
        ]).then(a.bind(a, 190930));
        return (t) =>
            (0, r.jsx)(e, { ...t, applicationId: "123456789", mediaUrl: "https://picsum.photos/400/300.jpg" });
    },
    CallUserConfirmationModal: async () => {
        let { default: e } = await a.e(19106).then(a.bind(a, 502054));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                onSubmit: () => {
                    (console.log("CallUserConfirmationModal: Call confirmed"), t.onClose());
                },
            });
    },
    OptInReorderAttemptModal: async () => {
        let { default: e } = await Promise.all([a.e(57729), a.e(697585), a.e(24848)]).then(a.bind(a, 354643));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                onClose: () => (console.log("OptInReorderAttemptModal: Modal closed"), t.onClose()),
            });
    },
    GuildAntiRaidReportModal: async () => {
        let { default: e } = await Promise.all([a.e(710727), a.e(245535)]).then(a.bind(a, 935074));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                guildId: "123456789",
                onClose: () => (console.log("GuildAntiRaidReportModal: Modal closed"), t.onClose()),
            });
    },
    ConsentCheckBoxModal: async () => {
        let { ConfirmModal: e } = await Promise.all([a.e(304823), a.e(223976), a.e(977260)]).then(a.bind(a, 397927)),
            { Text: t, Heading: n } = await Promise.all([a.e(304823), a.e(223976), a.e(977260)]).then(
                a.bind(a, 397927),
            ),
            l = await Promise.resolve().then(a.t.bind(a, 582128, 19));
        function i(a) {
            let [i, s] = l.useState(!1),
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
                                    variant: "heading-sm/semibold",
                                    style: { marginBottom: "12px" },
                                    children: "Terms of Service Consent",
                                }),
                                (0, r.jsx)(oc.S, {
                                    label: "I agree to Discord's Terms of Service and Privacy Policy",
                                    checked: i,
                                    onChange: (e) => s(e),
                                    labelType: "secondary",
                                }),
                                (0, r.jsxs)(t, {
                                    variant: "body-sm/normal",
                                    color: "text-subtle",
                                    style: { marginTop: "8px" },
                                    children: ["Consent status: ", i ? "Agreed" : "Not agreed"],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(n, {
                                    variant: "heading-sm/semibold",
                                    style: { marginBottom: "12px" },
                                    children: "Promotional Email Consent",
                                }),
                                (0, r.jsx)(oc.S, {
                                    label: "I would like to receive promotional emails from Discord about new features, events, and other updates.",
                                    checked: o,
                                    onChange: (e) => d(e),
                                    labelType: "secondary",
                                }),
                                (0, r.jsxs)(t, {
                                    variant: "body-sm/normal",
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
        return ((i.displayName = "ConsentCheckBoxModalContent"), (e) => (0, r.jsx)(i, { ...e }));
    },
    GuildRaidLockdownFeedbackModal: async () => {
        let { default: e } = await Promise.all([a.e(660608), a.e(346313)]).then(a.bind(a, 336496));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                guildId: "123456789",
                onClose: () => (console.log("GuildRaidLockdownFeedbackModal: Modal closed"), t.onClose()),
            });
    },
    GuildVerificationLevelModal: async () => {
        let { default: e } = await Promise.all([a.e(955424), a.e(623386), a.e(78618), a.e(149409), a.e(970232)]).then(
                a.bind(a, 313003),
            ),
            { dangerouslyConstructGuildRecordFromUntypedObject: t } = await Promise.resolve().then(a.bind(a, 537975)),
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
        let { default: e } = await Promise.all([a.e(955424), a.e(623386), a.e(78618), a.e(149409), a.e(970232)]).then(
                a.bind(a, 313003),
            ),
            { dangerouslyConstructGuildRecordFromUntypedObject: t } = await Promise.resolve().then(a.bind(a, 537975)),
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
        let { EmojiAddModal: e } = await Promise.all([a.e(225560), a.e(990410)]).then(a.bind(a, 126033));
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
        let { default: e } = await a.e(425894).then(a.bind(a, 166789));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    VoiceCallFeedback: async () => {
        let { default: e } = await Promise.all([
                a.e(36781),
                a.e(713710),
                a.e(139032),
                a.e(155925),
                a.e(137381),
                a.e(259375),
                a.e(364174),
            ]).then(a.bind(a, 9501)),
            t = {
                channel_id: "123456789",
                channel_type: ej.rbe.GUILD_VOICE,
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
                a.e(36781),
                a.e(713710),
                a.e(139032),
                a.e(155925),
                a.e(137381),
                a.e(259375),
                a.e(617171),
                a.e(862767),
            ]).then(a.bind(a, 218738)),
            t = { ownerId: "987654321", guildId: "123456789", channelId: "123456789", streamType: ox.U4.GUILD },
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
        let e = eg.default.getUser("12345"),
            t = eg.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e(916131), a.e(155738), a.e(331385)]).then(a.bind(a, 58144));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterDeclineLinkModal: async () => {
        let e = eg.default.getUser("12345"),
            t = eg.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e(916131), a.e(155738), a.e(384811)]).then(a.bind(a, 389094));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterCancelLinkModal: async () => {
        let e = eg.default.getUser("12345"),
            t = eg.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e(916131), a.e(155738), a.e(817219)]).then(a.bind(a, 187278));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterDisconnectLinkModal: async () => {
        let e = eg.default.getUser("12345"),
            t = eg.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e(321855), a.e(943139)]).then(a.bind(a, 179950));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterQRCodeModal: async () => {
        let { default: e } = await Promise.all([a.e(683023), a.e(272875)]).then(a.bind(a, 320742));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PremiumGroupFriendsSelectorModal: async () => {
        let { default: e } = await Promise.all([a.e(634508), a.e(967884)]).then(a.bind(a, 307399)),
            t = oh.A.getPremiumGroupSubscription();
        return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, subscription: t });
    },
    PremiumGroupAcceptInviteModal: async () => {
        let { default: e } = await Promise.all([a.e(56498), a.e(134068)]).then(a.bind(a, 428959));
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
        let { default: e } = await a.e(474575).then(a.bind(a, 218642));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    CaptchaTestModal: async () => {
        let { default: e } = await a.e(842213).then(a.bind(a, 881092));
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
        let { default: e } = await Promise.all([a.e(364956), a.e(420577), a.e(335681), a.e(690611)]).then(
            a.bind(a, 443198),
        );
        return (t) => (0, r.jsx)(e, { ...t, url: "https://example-phishing-site.com/malicious-page" });
    },
    DmSettingsUpsellModal: async () => {
        let { default: e } = await Promise.all([a.e(494150), a.e(962684)]).then(a.bind(a, 228855)),
            t = Object.keys(nA.A.getGuilds())[0];
        return (a) => (0, r.jsx)(e, { ...a, guildId: t });
    },
    UrgentMessageModal: async () => {
        let { default: e } = await Promise.all([a.e(689913), a.e(758114)]).then(a.bind(a, 752313));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    UserAgreementsModal: async () => {
        let { default: e } = await Promise.all([a.e(50726), a.e(482911), a.e(922220)]).then(a.bind(a, 639719));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    DisableRiskyPermsModal: async () => {
        let { default: e } = await Promise.all([a.e(796057), a.e(553203), a.e(452823), a.e(971905)]).then(
                a.bind(a, 868952),
            ),
            t = Object.values(nA.A.getGuilds())[0];
        return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
    },
    OtherFriendRequestsModal: async () => {
        let { default: e } = await Promise.all([
            a.e(827776),
            a.e(249938),
            a.e(791370),
            a.e(548018),
            a.e(773152),
            a.e(625281),
        ]).then(a.bind(a, 516259));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    AcceptInviteModal: async () => {
        let { default: e } = await Promise.all([
            a.e(752924),
            a.e(807432),
            a.e(601495),
            a.e(807265),
            a.e(555603),
            a.e(799753),
            a.e(579023),
            a.e(248672),
        ]).then(a.bind(a, 654e3));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PremiumGroupSubscribeModal: async () => {
        let { default: e } = await Promise.all([a.e(499709), a.e(569595)]).then(a.bind(a, 526710));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NewUserOnboarding: async () => {
        let { default: e } = await Promise.all([
            a.e(188406),
            a.e(315907),
            a.e(122326),
            a.e(533651),
            a.e(260634),
            a.e(194399),
            a.e(419580),
            a.e(82721),
            a.e(197804),
            a.e(756856),
            a.e(319623),
            a.e(548521),
            a.e(695206),
            a.e(220626),
        ]).then(a.bind(a, 365097));
        return (t) => (0, r.jsx)(e, { ...t });
    },
};
function ob() {
    let e = o.useMemo(
            () =>
                Object.keys(ov)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, a] = o.useState(null);
    return (0, r.jsx)(x.Ip, {
        className: t6.nd,
        children: (0, r.jsxs)("div", {
            className: i$.l$,
            children: [
                (0, r.jsx)("section", {
                    className: i$.uW,
                    children: (0, r.jsxs)(t0.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(ak.Z, {
                                label: "Open a Modal",
                                placeholder: "Select a modal",
                                options: e,
                                value: t,
                                onSelectionChange: a,
                                selectionMode: "single",
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open",
                                disabled: null == t,
                                onClick: () => null != t && (0, P.mM)(ov[t]),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("section", {
                    className: i$.uW,
                    children: [
                        (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: "Wow moment" }),
                        (0, r.jsx)("div", {
                            className: i$.bd,
                            children: (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open",
                                onClick: function () {
                                    ((0, om.o)(!0), op._.dispatch(ej.jej.PREMIUM_SUBSCRIPTION_CREATED));
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var oj = a(933832),
    of = a(472229),
    oy = a(739053),
    oE = a(669316),
    oC = a(959165),
    oS = a(19191),
    o_ = a(722178);
async function oN(e, t) {
    try {
        await ia.Bo.post({ url: ej.Rsh.CREATE_USER_OFFER(e, t), rejectWithError: !0 });
    } catch {
    } finally {
        await (0, oy._D)();
    }
}
async function oA(e, t) {
    try {
        await ia.Bo.del({ url: ej.Rsh.UPDATE_USER_OFFER(e, t), rejectWithError: !0 });
    } catch {
    } finally {
        await (0, oy._D)();
    }
}
function ok(e) {
    let { acked: t, expired: a, inStore: n, onClick: l, secondaryBadge: i } = e,
        s = "Created";
    return (
        a ? (s = "Expired") : t ? (s = "Acked") : n && (s = "Active"),
        (0, r.jsxs)("div", {
            className: i$.fC,
            children: [
                (0, r.jsx)(en.D, {
                    onClick: l,
                    className: ea()(i$.qS, i$.vk, { [i$.vu]: n, [i$.R1]: t, [i$._7]: a }),
                    children: (0, r.jsxs)(g.E, {
                        variant: "body-sm/medium",
                        color: t ? void 0 : "text-overlay-light",
                        children: [s, n ? " *" : ""],
                    }),
                }),
                null != i &&
                    i.active &&
                    (0, r.jsx)("div", {
                        className: ea()(i$.qS, i$.k3),
                        children: (0, r.jsx)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-overlay-light",
                            children: i.label,
                        }),
                    }),
            ],
        })
    );
}
function oI(e) {
    let { offer: t, offerOptions: a, forceRefetch: n, inStore: l = !1 } = e,
        [i, s] = o.useState(!1),
        [d, c] = o.useState(!1),
        [u, m] = o.useState(!1),
        [h, p] = o.useState(!1);
    o.useEffect(() => {
        u && p(!0);
        let e = setTimeout(() => {
            p(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [u]);
    let { id: x, expiresAt: v, trialId: b, subscriptionTrial: j, referrer: f } = t,
        y =
            a.find((e) => {
                let { value: t } = e;
                return t === b;
            })?.label ?? "Unknown";
    null != f && (y = `${y} from @${f.username}`);
    let E = null != v,
        C = t.hasExpired,
        S = t.isRedeemed,
        _ = j?.skuId === tF.pe.TIER_0;
    async function N(e) {
        m(!0);
        try {
            await ia.Bo.patch({
                url: ej.Rsh.UPDATE_USER_OFFER(x, "trial"),
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
            if (i) {
                let e = setTimeout(() => {
                    s(!1);
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
        }, [i, d]),
        (0, r.jsxs)("div", {
            className: ea()(i$.Nr, _ ? i$.Qf : i$.C1),
            children: [
                (0, r.jsx)("div", {
                    className: ea()(i$.nM, i$.S7),
                    children: (0, r.jsx)(ei.D, {
                        variant: "heading-lg/semibold",
                        color: "text-overlay-light",
                        children: y,
                    }),
                }),
                (0, r.jsxs)(en.D, {
                    className: ea()(i$.nM, i$.QB),
                    onClick: () => {
                        (0, nX.C)(x, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-overlay-light",
                            children: ["Offer: ", x],
                        }),
                        i
                            ? (0, r.jsx)(oj.CheckmarkLargeIcon, { size: "md", color: "currentColor", className: i$.Kk })
                            : (0, r.jsx)(nW.CopyIcon, { size: "xs", color: "currentColor", className: i$.Kk }),
                    ],
                }),
                (0, r.jsxs)(en.D, {
                    className: ea()(i$.nM, i$.QB),
                    onClick: () => {
                        (0, nX.C)(b, () => c(!0));
                    },
                    children: [
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-overlay-light",
                            children: ["Trial: ", b],
                        }),
                        d
                            ? (0, r.jsx)(oj.CheckmarkLargeIcon, { size: "md", color: "currentColor", className: i$.Kk })
                            : (0, r.jsx)(nW.CopyIcon, { size: "xs", color: "currentColor", className: i$.Kk }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: i$.nM,
                    children: (0, r.jsxs)(g.E, {
                        variant: "body-sm/medium",
                        color: "text-overlay-light",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, o_.re)({
                                intervalType: j?.interval ?? tF.WT.MONTH,
                                intervalCount: j?.intervalCount ?? 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: i$.nM,
                    children: [
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-overlay-light",
                            children: ["Expires (", (0, of.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nZ.Xm)(v?.toISOString()),
                            onChange: (e) => {
                                N({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: i$.nM,
                    children: [
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-overlay-light",
                            children: "Referrer ID:",
                        }),
                        (0, r.jsx)("input", {
                            type: "text",
                            value: f?.id ?? "",
                            onChange: (e) => N({ referrerId: e.target.value }),
                        }),
                    ],
                }),
                (0, r.jsx)(ok, {
                    acked: E,
                    expired: C,
                    inStore: l,
                    onClick: async function () {
                        (m(!0), E ? await N({ expiresAt: null }) : await (0, oy.u1)(t), n(), m(!1));
                    },
                    secondaryBadge: { active: S, label: "Redeemed" },
                }),
                (0, r.jsx)(en.D, {
                    onClick: async () => {
                        (m(!0), await oA(x, "trial"), n(), m(!1));
                    },
                    children: (0, r.jsx)(nK.TrashIcon, {
                        size: "md",
                        color: "currentColor",
                        className: ea()(i$.Kk, i$.IT),
                    }),
                }),
                (0, r.jsx)("div", { className: ea()(i$.g4, { [i$.VP]: u || h }), children: (0, r.jsx)(tg.y, {}) }),
            ],
        })
    );
}
function oD(e) {
    let { offer: t, offerOptions: a, forceRefetch: n, inStore: l = !1 } = e,
        [i, s] = o.useState(!1),
        [d, c] = o.useState(!1),
        [u, m] = o.useState(!1),
        [h, p] = o.useState(!1);
    o.useEffect(() => {
        u && p(!0);
        let e = setTimeout(() => {
            p(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [u]);
    let { id: x, expiresAt: v, discountId: b, discount: j } = t,
        f =
            a.find((e) => {
                let { value: t } = e;
                return t === b;
            })?.label ?? "Unknown",
        y = null != v,
        E = t.hasExpired(),
        C = t.isApplied();
    async function S(e) {
        let { expiresAt: t } = e;
        m(!0);
        try {
            await ia.Bo.patch({
                url: ej.Rsh.UPDATE_USER_OFFER(x, "discount"),
                body: { expires_at: t },
                rejectWithError: !0,
            });
        } finally {
            (n(), m(!1));
        }
    }
    return (
        o.useEffect(() => {
            if (i) {
                let e = setTimeout(() => {
                    s(!1);
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
        }, [i, d]),
        (0, r.jsxs)("div", {
            className: ea()(i$.Nr, i$.id),
            children: [
                (0, r.jsx)("div", {
                    className: ea()(i$.nM, i$.S7),
                    children: (0, r.jsx)(ei.D, { variant: "heading-lg/semibold", color: "text-default", children: f }),
                }),
                (0, r.jsxs)(en.D, {
                    className: ea()(i$.nM, i$.QB),
                    onClick: () => {
                        (0, nX.C)(x, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: ["Offer: ", x],
                        }),
                        i
                            ? (0, r.jsx)(oj.CheckmarkLargeIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: ea()(i$.Kk, i$.mK),
                              })
                            : (0, r.jsx)(nW.CopyIcon, { size: "xs", color: "currentColor", className: i$.Kk }),
                    ],
                }),
                (0, r.jsxs)(en.D, {
                    className: ea()(i$.nM, i$.QB),
                    onClick: () => {
                        (0, nX.C)(b, () => c(!0));
                    },
                    children: [
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: ["Discount: ", b],
                        }),
                        d
                            ? (0, r.jsx)(oj.CheckmarkLargeIcon, {
                                  size: "md",
                                  color: "currentColor",
                                  className: ea()(i$.Kk, i$.mK),
                              })
                            : (0, r.jsx)(nW.CopyIcon, { size: "xs", color: "currentColor", className: i$.Kk }),
                    ],
                }),
                j?.amount != null &&
                    (0, r.jsx)("div", {
                        children: (0, r.jsxs)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-default",
                            children: [j.amount, "% off"],
                        }),
                    }),
                (0, r.jsxs)("div", {
                    className: i$.nM,
                    children: [
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-overlay-light",
                            children: ["Expires (", (0, of.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nZ.Xm)(v?.toISOString()),
                            onChange: (e) =>
                                S({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null }),
                        }),
                    ],
                }),
                (0, r.jsx)(ok, {
                    acked: y,
                    expired: E,
                    inStore: l,
                    onClick: async function () {
                        (m(!0), y ? await S({ expiresAt: null }) : await (0, oy.u1)(void 0, t), n(), m(!1));
                    },
                    secondaryBadge: { active: C, label: "Applied" },
                }),
                (0, r.jsx)(en.D, {
                    className: i$.aR,
                    onClick: async () => {
                        (m(!0), await oA(x, "discount"), n(), m(!1));
                    },
                    children: (0, r.jsx)(nK.TrashIcon, {
                        size: "md",
                        color: "currentColor",
                        className: ea()(i$.Kk, i$.fy),
                    }),
                }),
                (0, r.jsx)("div", { className: ea()(i$.g4, { [i$.VP]: u || h }), children: (0, r.jsx)(tg.y, {}) }),
            ],
        })
    );
}
function oT() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState([]),
        [l, i] = o.useState(),
        [s, c] = o.useState(),
        [u, m] = o.useState(!0),
        { discountOffers: h, trialOffers: v } = (0, d.cf)([oS.A], () => ({
            discountOffers: Object.values(oS.A.getState().userDiscountOffers).sort((e, t) => e.id.localeCompare(t.id)),
            trialOffers: Object.values(oS.A.getState().userTrialOffers).sort((e, t) => e.id.localeCompare(t.id)),
        })),
        [b, f] = o.useState([]),
        [y, E] = o.useState([]),
        [C, S] = o.useState(10080),
        [_, N] = o.useState([]),
        A = o.useMemo(() => new Set([...v, ...h].map((e) => e.id)), [v, h]),
        k = o.useMemo(() => [...v, ...b.filter((e) => !A.has(e.id))], [v, b, A]),
        I = o.useMemo(() => [...h, ...y.filter((e) => !A.has(e.id))], [h, y, A]),
        { entitlements: D, deleteFractionalPremium: T, refreshEntitlementList: R } = iB();
    return (
        o.useEffect(() => {
            R();
        }, [R]),
        o.useEffect(() => {
            N(D.filter((e) => e.sourceType === iw.G.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [D]),
        o.useEffect(() => {
            (0 === e.length || 0 === a.length || u) &&
                (async function () {
                    try {
                        let { body: e } = await ia.Bo.get({ url: ej.Rsh.USER_OFFER_IDS, rejectWithError: !0 });
                        return e;
                    } catch (e) {
                        return [];
                    }
                })().then((e) => {
                    let a = Object.keys(e.trial).map((t) => ({ label: t, value: e.trial[t] })),
                        r = Object.keys(e.discount).map((t) => ({ label: t, value: e.discount[t] }));
                    (t(a), n(r), null == l && i(a[0].value), null == s && c(r[0].value));
                });
        }, [e, a, l, s, u]),
        o.useEffect(() => {
            u &&
                (m(!1),
                oS.A.forceReset(),
                (0, oy._D)(),
                (async function () {
                    try {
                        let { body: e } = await ia.Bo.get({ url: ej.Rsh.USER_OFFERS, rejectWithError: !0 });
                        return {
                            trial: e.trial.map(oC.A.createFromServer),
                            discount: e.discount.map(oE.A.createFromServer),
                        };
                    } catch (e) {
                        return { trial: [], discount: [] };
                    }
                })().then((e) => {
                    (f(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        E(e.discount.sort((e, t) => e.id.localeCompare(t.id))));
                }));
        }, [u]),
        (0, r.jsx)(x.Ip, {
            className: t6.nd,
            children: (0, r.jsxs)("div", {
                className: i$.l$,
                children: [
                    (0, r.jsxs)("section", {
                        className: i$.uW,
                        children: [
                            (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: "Utils" }),
                            (0, r.jsxs)("div", {
                                className: i$.Uo,
                                children: [
                                    (0, r.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Clear all User Offers",
                                        onClick: async function () {
                                            (await (async function () {
                                                try {
                                                    await ia.Bo.del({ url: ej.Rsh.USER_OFFERS, rejectWithError: !0 });
                                                } catch {
                                                } finally {
                                                    (await oS.A.forceReset(), await (0, oy._D)());
                                                }
                                            })(),
                                                m(!0));
                                        },
                                    }),
                                    (0, r.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Clear Mobile Trials DismissibleContent",
                                        onClick: () => (0, aB.xB)(aG.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                    }),
                                    (0, r.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Clear Offer Nagbar DismissibleContent",
                                        onClick: () => (0, aB._N)(aG.M.NAGBAR_NOTICE_OFFER_EXPIRING),
                                    }),
                                    (0, r.jsx)(p.$, {
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
                        className: i$.uW,
                        children: (0, r.jsxs)("div", {
                            className: i$.bd,
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
                                    onSelectionChange: i,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Create",
                                    onClick: async function () {
                                        null != l && (await oN(l, "trial"), m(!0));
                                    },
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsx)("section", {
                        className: i$.uW,
                        children: (0, r.jsxs)("div", {
                            className: i$.bd,
                            children: [
                                (0, r.jsx)(j.l, {
                                    label: "Create a Discount Offer",
                                    options: a,
                                    formatOption: (e) => {
                                        let { label: t, value: a } = e;
                                        return { label: t, value: a, id: a };
                                    },
                                    value: s,
                                    placeholder: "Discount Type",
                                    onSelectionChange: c,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Create",
                                    onClick: async function () {
                                        null != s && (await oN(s, "discount"), m(!0));
                                    },
                                }),
                            ],
                        }),
                    }),
                    k.length > 0 &&
                        (0, r.jsxs)("section", {
                            className: i$.uW,
                            children: [
                                (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: "Existing Trial Offers" }),
                                (0, r.jsx)(g.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: "* indicates the offer is currently in UserOfferStore.",
                                }),
                                k.map((t) =>
                                    (0, r.jsx)(
                                        oI,
                                        { offer: t, offerOptions: e, forceRefetch: () => m(!0), inStore: A.has(t.id) },
                                        t.id,
                                    ),
                                ),
                            ],
                        }),
                    I.length > 0 &&
                        (0, r.jsxs)("section", {
                            className: i$.uW,
                            children: [
                                (0, r.jsx)(ei.D, {
                                    variant: "heading-sm/semibold",
                                    children: "Existing Discount Offers",
                                }),
                                (0, r.jsx)(g.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: "* indicates the offer is currently in UserOfferStore.",
                                }),
                                I.map((e) =>
                                    (0, r.jsx)(
                                        oD,
                                        { offer: e, offerOptions: a, forceRefetch: () => m(!0), inStore: A.has(e.id) },
                                        e.id,
                                    ),
                                ),
                            ],
                        }),
                    (0, r.jsx)("section", {
                        className: i$.uW,
                        children: (0, r.jsxs)("div", {
                            className: i$.bd,
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
                                    onSelectionChange: S,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Create",
                                    onClick: async function () {
                                        let e = new Date(Date.now() + 60 * C * 1e3).toISOString();
                                        (await (async function (e) {
                                            await ia.Bo.post({
                                                url: ej.Rsh.CREATE_REVERSE_TRIAL,
                                                body: { ends_at: e },
                                                rejectWithError: !0,
                                            });
                                        })(e),
                                            R());
                                    },
                                }),
                            ],
                        }),
                    }),
                    _.length > 0 &&
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(g.E, {
                                    style: { marginTop: "15px" },
                                    variant: "body-md/semibold",
                                    children: "Active reverse trial",
                                }),
                                (0, r.jsx)("div", {
                                    children: _.map((e) =>
                                        (0, r.jsx)(iW, { entitlement: e, active: !0, onDelete: () => T(e.id) }, e.id),
                                    ),
                                }),
                            ],
                        }),
                ],
            }),
        })
    );
}
var oR = a(431527),
    oO = a(26279),
    ow = a(628577);
let oM = {
        [oO.Re.UNSPECIFIED]: "Unspecified",
        [oO.Re.DRAFT]: "Draft",
        [oO.Re.SIGNED]: "Signed",
        [oO.Re.DISCARDED]: "Discarded",
        [oO.Re.SIGNING_IN_PROGRESS]: "Signing In Progress",
        [oO.Re.SIGNING_FAILED]: "Signing Failed",
    },
    oP = { [oO.BM.UNSPECIFIED]: "Unspecified", [oO.BM.ONE_TIME]: "One Time", [oO.BM.SUBSCRIPTION]: "Subscription" };
function oL() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(!0),
        [l, i] = o.useState(null),
        s = o.useCallback(async () => {
            (n(!0), i(null));
            try {
                let e = await ia.Bo.get({ url: `${ej.Rsh.ORDER_LIST}?limit=5`, rejectWithError: !0 });
                t(e.body ?? []);
            } catch (e) {
                i(e instanceof Error ? e.message : "Failed to fetch orders");
            } finally {
                n(!1);
            }
        }, []);
    o.useEffect(() => {
        s();
    }, [s]);
    let [d, c] = o.useState(!1),
        [u, m] = o.useState(null),
        [h, v] = o.useState(() => {
            let e = r7.Ay.getChannelId();
            return null != e ? e : "";
        }),
        b = o.useCallback(async () => {
            (c(!0), m(null));
            try {
                let e = h.trim(),
                    t = await ia.Bo.post({
                        url: ej.Rsh.DEBUG_TEMPORAL_INFRA_PROOF_OF_CONCEPT,
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
    return (0, r.jsx)(x.Ip, {
        className: t6.nd,
        children: (0, r.jsxs)("div", {
            className: i$.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: i$.dL,
                    style: { marginBottom: "16px" },
                    children: [
                        (0, r.jsxs)(g.E, { variant: "body-lg/semibold", children: ["Orders (last ", 5, ")"] }),
                        (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: "Refresh", onClick: s, loading: a }),
                    ],
                }),
                null != l && (0, r.jsx)(el.w, { type: "critical", message: l, role: "alert" }),
                !a &&
                    null != e &&
                    0 === e.length &&
                    (0, r.jsx)(g.E, { variant: "body-sm/normal", color: "text-muted", children: "No orders found." }),
                null != e && e.map((e) => (0, r.jsx)(oU, { order: e }, e.id)),
                (0, r.jsxs)(t0.B, {
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
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Run Temporal Infra Proof of Concept",
                            onClick: b,
                            loading: d,
                        }),
                        null != u && (0, r.jsx)(g.E, { variant: "body-xs/normal", color: "text-muted", children: u }),
                    ],
                }),
            ],
        }),
    });
}
function oU(e) {
    let { order: t } = e,
        [a, n] = o.useState(!1),
        [l, i] = o.useState(!1),
        s = oM[t.status] ?? `Unknown (${t.status})`,
        d = [
            { id: "status", label: `Status: ${s}`, isDisabled: !1 },
            { id: "revision", label: `Revision: ${t.revision}`, isDisabled: !1 },
            { id: "created", label: `Created: ${new Date(t.created_at).toLocaleString()}`, isDisabled: !1 },
        ],
        c = o.useCallback(() => {
            (navigator.clipboard.writeText(t.id), i(!0), setTimeout(() => i(!1), 2e3));
        }, [t.id]);
    return (0, r.jsxs)("div", {
        className: i$.Nr,
        children: [
            (0, r.jsxs)(t0.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                style: { marginBottom: "4px" },
                children: [
                    (0, r.jsx)(g.E, { variant: "body-md/semibold", children: t.id }),
                    (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: l ? "Copied!" : "Copy ID", onClick: c }),
                ],
            }),
            (0, r.jsx)(oR.C, { items: d, label: "Order information", layout: "inline" }),
            (0, r.jsxs)(t0.B, {
                direction: "vertical",
                gap: 4,
                style: { marginTop: "8px" },
                children: [
                    (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "Line Items" }),
                    0 === t.order_line_items.length
                        ? (0, r.jsx)(g.E, { variant: "body-xs/normal", color: "text-muted", children: "No line items" })
                        : t.order_line_items.map((e) =>
                              (0, r.jsxs)(
                                  t0.B,
                                  {
                                      direction: "horizontal",
                                      gap: 12,
                                      children: [
                                          (0, r.jsxs)(g.E, {
                                              variant: "body-xs/normal",
                                              children: ["SKU: ", e.sku_id],
                                          }),
                                          (0, r.jsxs)(g.E, {
                                              variant: "body-xs/normal",
                                              children: ["Qty: ", e.quantity],
                                          }),
                                          (0, r.jsxs)(g.E, {
                                              variant: "body-xs/normal",
                                              children: [
                                                  "Type: ",
                                                  oP[e.purchase_type] ?? `Unknown (${e.purchase_type})`,
                                              ],
                                          }),
                                          null != e.subscription_plan_id &&
                                              (0, r.jsxs)(g.E, {
                                                  variant: "body-xs/normal",
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
                    className: ow.VK,
                    style: { marginTop: "8px" },
                    children: [
                        (0, r.jsxs)(en.D, {
                            onClick: () => n((e) => !e),
                            className: ow.Eh,
                            children: [
                                (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "Billing Facet" }),
                                (0, r.jsx)(iU.A, { direction: a ? iU.A.Directions.UP : iU.A.Directions.DOWN }),
                            ],
                        }),
                        a &&
                            (0, r.jsxs)("ul", {
                                className: ow.j3,
                                children: [
                                    (0, r.jsxs)("li", {
                                        children: [
                                            (0, r.jsx)(g.E, {
                                                variant: "body-xs/semibold",
                                                children: "payment_gateway",
                                            }),
                                            (0, r.jsx)(g.E, {
                                                variant: "body-xs/normal",
                                                children: String(t.billing_facet.payment_gateway),
                                            }),
                                        ],
                                    }),
                                    null != t.billing_facet.payment_source_id &&
                                        (0, r.jsxs)("li", {
                                            children: [
                                                (0, r.jsx)(g.E, {
                                                    variant: "body-xs/semibold",
                                                    children: "payment_source_id",
                                                }),
                                                (0, r.jsx)(g.E, {
                                                    variant: "body-xs/normal",
                                                    children: t.billing_facet.payment_source_id,
                                                }),
                                            ],
                                        }),
                                    null != t.billing_facet.currency &&
                                        (0, r.jsxs)("li", {
                                            children: [
                                                (0, r.jsx)(g.E, {
                                                    variant: "body-xs/semibold",
                                                    children: "selected currency",
                                                }),
                                                (0, r.jsx)(g.E, {
                                                    variant: "body-xs/normal",
                                                    children: t.billing_facet.currency,
                                                }),
                                            ],
                                        }),
                                    null != t.billing_facet.invoice_preview &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(g.E, {
                                                            variant: "body-xs/semibold",
                                                            children: "currency",
                                                        }),
                                                        (0, r.jsx)(g.E, {
                                                            variant: "body-xs/normal",
                                                            children: t.billing_facet.invoice_preview.currency,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(g.E, {
                                                            variant: "body-xs/semibold",
                                                            children: "subtotal",
                                                        }),
                                                        (0, r.jsx)(g.E, {
                                                            variant: "body-xs/normal",
                                                            children: t.billing_facet.invoice_preview.subtotal,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(g.E, {
                                                            variant: "body-xs/semibold",
                                                            children: "tax",
                                                        }),
                                                        (0, r.jsx)(g.E, {
                                                            variant: "body-xs/normal",
                                                            children: t.billing_facet.invoice_preview.tax,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(g.E, {
                                                            variant: "body-xs/semibold",
                                                            children: "total",
                                                        }),
                                                        (0, r.jsx)(g.E, {
                                                            variant: "body-xs/normal",
                                                            children: t.billing_facet.invoice_preview.total,
                                                        }),
                                                    ],
                                                }),
                                                t.billing_facet.invoice_preview.line_items.length > 0 &&
                                                    (0, r.jsxs)("li", {
                                                        children: [
                                                            (0, r.jsx)(g.E, {
                                                                variant: "body-xs/semibold",
                                                                children: "invoice line items",
                                                            }),
                                                            (0, r.jsx)(t0.B, {
                                                                direction: "vertical",
                                                                gap: 4,
                                                                style: { marginTop: "4px" },
                                                                children:
                                                                    t.billing_facet.invoice_preview.line_items.map(
                                                                        (e) =>
                                                                            (0, r.jsxs)(
                                                                                t0.B,
                                                                                {
                                                                                    direction: "horizontal",
                                                                                    gap: 12,
                                                                                    children: [
                                                                                        (0, r.jsxs)(g.E, {
                                                                                            variant: "body-xs/normal",
                                                                                            children: [
                                                                                                "ref: ",
                                                                                                e.ref_order_line_item_id,
                                                                                            ],
                                                                                        }),
                                                                                        (0, r.jsxs)(g.E, {
                                                                                            variant: "body-xs/normal",
                                                                                            children: [
                                                                                                "unit: ",
                                                                                                e.unit_price,
                                                                                            ],
                                                                                        }),
                                                                                        (0, r.jsxs)(g.E, {
                                                                                            variant: "body-xs/normal",
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
var oG = a(935462),
    oB = a(103557),
    oF = a(93688),
    o$ = a(717400),
    oV = a(676955),
    oW = a(31300),
    oH = a(500060),
    oz = a(391973),
    oK = a(684013),
    oY = a(765671),
    oq = a(235986),
    oJ = a(742589),
    oQ = a(41984),
    oX = a(181435),
    oZ = a(435736),
    o0 = a(661886),
    o1 = a(861862),
    o2 = a(515183),
    o3 = a(127242),
    o6 = a(869014),
    o5 = a(528772),
    o8 = a(83880),
    o4 = a(532624),
    o9 = a(228342),
    o7 = a(927813),
    de = a(996439),
    dt = a(350535),
    da = a(9302),
    dn = a(644434),
    dl = a(998798);
let di = {
        [ej.uss.CLICK_ZONE_DEBUG]: (e) => ({
            type: ej.uss.CLICK_ZONE_DEBUG,
            id: (0, eF.A)(),
            layoutId: e,
            anchor: { top: 0.35, right: 0.35 },
            size: { width: 100, height: 100 },
            ...o8.A.getWidgetDefaultSettings(ej.uss.CLICK_ZONE_DEBUG),
            pinned: !0,
        }),
        [ej.uss.PERFORMANCE_DEBUG]: (e) => ({
            type: ej.uss.PERFORMANCE_DEBUG,
            id: (0, eF.A)(),
            layoutId: e,
            anchor: { top: 0.1, right: 0.1 },
            size: { fixed: !1, width: "auto", height: "auto" },
            ...o8.A.getWidgetDefaultSettings(ej.uss.PERFORMANCE_DEBUG),
            pinned: !0,
        }),
    },
    ds = {};
function dr(e) {
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
        (0, r.jsxs)(nV.$n, {
            look: nV.$n.Looks.LINK,
            color: nV.$n.Colors.LINK,
            size: nV.$n.Sizes.MIN,
            onClick: function () {
                (0, nX.C)(t, () => n(!0));
            },
            className: dl.DT,
            children: ["Game Id: ", t, " ", a ? nD.intl.string(nD.t.t5VZ88) : null],
        })
    );
}
let dd = o.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, d.bG)([N.Ay], () => N.Ay.getGameOrTransformedSubgameForPID(t.pid)),
            n = (0, d.bG)([I.A], () => I.A.getGameForPID(t.pid)),
            { data: l } = (0, aT.I)(n?.id),
            i = (0, d.bG)([N.Ay], () => (null == a ? null : N.Ay.getGameOverlayStatus(a)));
        return (0, r.jsxs)("div", {
            className: dl.st,
            children: [
                (0, r.jsx)(g.E, { variant: "body-md/semibold", color: "text-strong", children: t.gameName }),
                (0, r.jsx)(g.E, { variant: "body-sm/semibold", color: "text-subtle", children: t.pid }),
                (0, r.jsx)(g.E, { variant: "body-sm/normal", color: "text-subtle", children: a?.exeName }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: ["isLauncher: ", a?.isLauncher ? "Yes" : "No"],
                }),
                null != t.gameId &&
                    (0, r.jsx)(g.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        children: (0, r.jsx)(dr, { id: t.gameId }),
                    }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, o2.wR)(t.fullscreenType)],
                }),
                (0, r.jsxs)(g.E, { variant: "body-sm/normal", color: "text-default", children: ["state: ", t.state] }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"],
                }),
                (0, r.jsxs)("div", {
                    className: dl.st,
                    children: [
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: ["source: ", t.source],
                        }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: ["legacyEnabled: ", t.legacyEnabled ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: ["oopEnabled: ", t.oopEnabled ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: ["overlayMethod: ", (0, o2.gK)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != i &&
                    (0, r.jsxs)("div", {
                        className: dl.st,
                        children: [
                            (0, r.jsxs)(g.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: ["raw source: ", i.source],
                            }),
                            (0, r.jsxs)(g.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: ["raw enabledLegacy: ", i.enabledLegacy ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(g.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: ["raw enabledOOP: ", i.enabledOOP ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(g.E, {
                                variant: "body-sm/normal",
                                color: "text-default",
                                children: ["raw overlayMethod: ", (0, o2.gK)(i.overlayMethod)],
                            }),
                        ],
                    }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: ["hidden: ", a?.hidden ? "Yes" : "No"],
                }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: ["hook: ", l?.hook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: ["overlay: ", l?.overlay ? "Yes" : "No"],
                }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: ["overlayCompatibilityHook: ", l?.overlayCompatibilityHook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-default",
                    children: ["supportsOutOfProcessOverlay: ", l?.supportsOutOfProcessOverlay ? "Yes" : "No"],
                }),
            ],
        });
    }),
    dc = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, d.cf)([o9.default], () => o9.default.getOverlayPIDStatuses()),
            n = (0, d.cf)([o1.default], () => o1.default.getTrackedGames()),
            l = (0, d.bG)([o9.default], () => o9.default.isInputLocked(t), [t]),
            i = (0, d.bG)([o9.default], () => o9.default.DEV_isInputLockedV3(t), [t]),
            s = (0, d.bG)([o9.default], () => o9.default.DEV_isInputLocked(t), [t]),
            o = (0, d.bG)([o9.default], () => o9.default.isReady(t), [t]);
        return (0, r.jsxs)("div", {
            className: dl.st,
            children: [
                (0, r.jsx)(g.E, { variant: "body-md/semibold", color: "text-strong", children: `${t}` }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
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
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
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
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
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
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-strong",
                    children: ["Bridge Status: ", a.get(Number(t))],
                }),
                (0, r.jsxs)(g.E, { variant: "body-sm/normal", color: "text-strong", children: ["isInputLocked: ", l] }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV3: ", i],
                }),
                (0, r.jsxs)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV2: ", s],
                }),
                (0, r.jsxs)(g.E, { variant: "body-sm/normal", color: "text-strong", children: ["isReady: ", o] }),
            ],
        });
    });
function du(e) {
    var t;
    let a =
        ((t = Object.values((0, d.yK)([o8.A], () => o8.A.getWidgetsForLayout(dn.GJ)))), t.find((t) => t.type === e));
    return [
        a,
        function () {
            if (null != a) (0, oz.uv)(a.id);
            else {
                let t = di[e];
                if (null == t) return;
                let a = t(dn.GJ);
                (0, oz.jn)(a);
            }
        },
    ];
}
function dm(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? `${e.toFixed(2)}ms` : (0, nZ.i$)(n$()(e), "h:mm:ss.SSS");
}
let dh = o.memo(function (e) {
    let { pid: t, ...a } = e,
        n = (0, d.bG)(
            [o1.default],
            () => {
                if (null == t) return "Unknown";
                let e = o1.default.getTrackedGameByPid(t)?.gameName;
                return null != e ? ((ds[t] = e), e) : (ds[t] ?? "Unknown");
            },
            [t],
        );
    return (0, r.jsx)(g.E, { ...a, variant: "body-md/semibold", color: "text-strong", children: n });
});
function dp() {
    let e = (0, d.bG)([o3.A], () => o3.A.hasRenderDebugMode(oQ.x7.TrackFocusPIDs)),
        t = (0, d.yK)([o1.default], () => o1.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, r.jsxs)("div", {
        className: dl.st,
        children: [
            (0, r.jsxs)("div", {
                className: dl.Iv,
                children: [
                    (0, r.jsx)(m.d, {
                        checked: e,
                        onChange: () =>
                            void oK.A.setRenderDebugMode(
                                !o3.A.hasRenderDebugMode(oQ.x7.TrackFocusPIDs),
                                oQ.x7.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, r.jsx)(en.D, {
                        className: dl.LL,
                        onClick: () => oK.A.clearTrackedPids(),
                        children: (0, r.jsx)(nK.TrashIcon, { size: "md", color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsxs)(x.Ip, {
                className: ea()(dl.st, dl.XG),
                children: [
                    0 === t.length &&
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-default",
                            children: "No recent focused pids",
                        }),
                    [...t].reverse().map((e) => {
                        let [t, a, n] = e;
                        return (0, r.jsx)(
                            o.Fragment,
                            {
                                children: (0, r.jsx)(iu.m, {
                                    position: "left",
                                    text: n === oQ.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsxs)(g.E, {
                                            variant: "body-sm/medium",
                                            color: n === oQ.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                                            children: [
                                                (0, r.jsx)(dh, { pid: a, tag: "span" }),
                                                " - ",
                                                a?.toString() ?? "null",
                                                " @ ",
                                                dm(t),
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
let dg = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, d.bG)(
                [o1.default, N.Ay],
                () => {
                    if (null == t) return null;
                    let e = o1.default.getTrackedGameByPid(t)?.fullscreenType;
                    if (null != e) return e;
                    let a = N.Ay.getGameOrTransformedSubgameForPID(t);
                    return a?.fullscreenType ?? l9.aI.UNKNOWN;
                },
                [t],
            );
        return (0, r.jsxs)(g.E, {
            variant: "body-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != a ? (0, o2.wR)(a) : "Unknown"],
        });
    }),
    dx = o.memo(function () {
        let e = (0, d.cf)([o1.default], () => o1.default.getTrackedGames()),
            [t, a] = o.useState({}),
            n = o.useRef(null);
        return (
            o.useEffect(
                () => (
                    (n.current = setInterval(async () => {
                        let e = N.Ay.getRunningGames(),
                            t = [],
                            n = Date.now();
                        for (let a of e) t.push((0, o2.E1)(a.pid, 0).then((e) => [a.pid, e, n]));
                        let l = await Promise.all(t);
                        a((e) =>
                            l.reduce(
                                (e, t) => {
                                    let [a, n, l] = t;
                                    if (null == n || null == a) return e;
                                    let i = e[a] ?? [],
                                        s = i[i.length - 1]?.screenType;
                                    return (
                                        (0 === i.length || s !== n) &&
                                            (e[a] = [...i, { pid: a, screenType: n, timestamp: l }]),
                                        e
                                    );
                                },
                                { ...e },
                            ),
                        );
                    }, +o7.A.Millis.SECOND)),
                    () => clearInterval(n.current)
                ),
                [],
            ),
            (0, r.jsx)(iu.m, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (0, r.jsx)("div", {
                    children: (0, r.jsxs)(x.Ip, {
                        className: ea()(dl.st, dl.XG),
                        children: [
                            0 === Object.keys(e).length &&
                                (0, r.jsx)(g.E, {
                                    variant: "body-sm/normal",
                                    color: "text-default",
                                    children: "No recent screen types",
                                }),
                            Object.values(e).map((e) =>
                                (0, r.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, r.jsx)(dh, { tag: "div", pid: e.pid }),
                                            (0, r.jsx)(dg, { pid: e.pid }),
                                            null != t[e.pid] &&
                                                [...t[e.pid]].reverse().map((t) => {
                                                    let { screenType: a, timestamp: n } = t;
                                                    return (0, r.jsx)(
                                                        g.E,
                                                        {
                                                            variant: "body-xs/normal",
                                                            color: "text-default",
                                                            children: `${a}:${(0, o2.wR)(a)} @ ${dm(n)}`,
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
    dv = o.memo(function () {
        let e = (0, d.cf)([o1.default], () => o1.default.getTrackedGames()),
            t = (0, da.getPID)(),
            a = (0, d.bG)([o1.default], () => o1.default.isOverlayOOPEnabledForPid(t), [t]),
            [n, l] = (0, d.yK)([o5.A], () => [o5.A.enabled, o5.A.keepOpen]),
            i = (0, d.bG)([o9.default], () => o9.default.getFocusedPID()),
            s = (0, d.bG)([o9.default], () => o9.default.isFocusedPidOutOfProcess());
        return (0, r.jsxs)("div", {
            className: dl.st,
            children: [
                0 === Object.keys(e).length &&
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(e).map((e) => (0, r.jsx)(dc, { pid: e.pid }, e.pid)),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-strong",
                            children: ["focusedPID: ", i?.toString() ?? "null"],
                        }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            children: ["isFocusedPidOutOfProcess: ", s ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-strong",
                            children: ["processPid: ", t?.toString() ?? "unknown"],
                        }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            children: ["isOOPEnabledForPid: ", a ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.enabled: ", n ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.keepOpen: ", l ? "Yes" : "No"],
                        }),
                    ],
                }),
            ],
        });
    }),
    db = [
        {
            mode: oQ.x7.ClickZones,
            label: "Click Zone Debug Mode",
            tooltip: "Enables a red border around click zones to help with debugging.",
        },
        {
            mode: oQ.x7.WidgetAreas,
            label: "Render Debug Mode",
            tooltip:
                "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        },
        {
            mode: oQ.x7.WindowContainer,
            label: "Window Container Debug Mode",
            tooltip: "Enables a border the overlay window",
        },
        {
            mode: oQ.x7.DisabledGPUBoost,
            label: "Disable GPU Boost",
            tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: oQ.x7.ForceGPUBoost,
            label: "Force GPU Boost",
            tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: oQ.x7.OverlayRafManagerForceEnabled,
            label: "Overlay SmartRAF",
            tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        },
        {
            mode: oQ.x7.LegacyOverlayLogging,
            label: "Legacy Overlay Logging",
            tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console.",
        },
    ],
    dj = o.memo(function () {
        let [e, t] = du(ej.uss.CLICK_ZONE_DEBUG),
            [a, n] = du(ej.uss.PERFORMANCE_DEBUG),
            l = (0, d.bG)([o3.A], () => o3.A.getRenderDebugModes()),
            [i, s] = o.useState({});
        return (
            o.useEffect(() => {
                let e = setInterval(() => {
                    s({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, r.jsx)("div", {
                className: dl.st,
                children: db.map((i) => {
                    let s =
                        i.mode === oQ.x7.OverlayRafManagerForceEnabled
                            ? `${i.label} (${o6.A.getLastRAFCallbackReason()})`
                            : i.label;
                    function d() {
                        return i.mode === oQ.x7.ClickZones
                            ? null != e
                            : i.mode === oQ.x7.WidgetAreas
                              ? null != a
                              : l.has(i.mode);
                    }
                    return (0, r.jsx)(
                        o.Fragment,
                        {
                            children: (0, r.jsx)(m.d, {
                                checked: d(),
                                onChange: function () {
                                    var e;
                                    let a = d();
                                    (i.mode === oQ.x7.ClickZones && t(),
                                        i.mode === oQ.x7.WidgetAreas && n(),
                                        (e = i.mode),
                                        oK.A.setRenderDebugMode(!a, e));
                                },
                                label: s,
                                description: i.tooltip,
                            }),
                        },
                        i.mode,
                    );
                }),
            })
        );
    }),
    df = o.memo(function () {
        let e = (0, d.cf)([o1.default], () => o1.default.getTrackedGames()),
            t = (0, d.bG)([N.Ay], () => N.Ay.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                t.length > 0 &&
                    (0, r.jsx)(iu.m, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsxs)("div", {
                                className: dl.st,
                                children: [
                                    (0, r.jsx)(g.E, {
                                        variant: "body-md/semibold",
                                        color: "text-feedback-critical",
                                        children: "Untracked Running Games",
                                    }),
                                    t.map((e) =>
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(
                                                    g.E,
                                                    {
                                                        variant: "body-sm/normal",
                                                        color: "text-feedback-critical",
                                                        children: `${e.pid} - ${e.name} (${e.exeName})`,
                                                    },
                                                    e.pid,
                                                ),
                                                (0, r.jsx)(dg, { pid: e.pid }),
                                            ],
                                        }),
                                    ),
                                ],
                            }),
                        }),
                    }),
                (0, r.jsx)(iu.m, {
                    position: "left",
                    text: "The current running games process information",
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: dl.st,
                            children: [
                                0 === Object.keys(e).length &&
                                    (0, r.jsx)(g.E, {
                                        variant: "body-sm/normal",
                                        color: "text-default",
                                        children: "No running games",
                                    }),
                                Object.values(e).map((e) => (0, r.jsx)(dd, { trackedGame: e }, e.pid)),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    dy = o.memo(function () {
        let e = (0, d.bG)([o1.default], () => o1.default.getForcedRenderMode()),
            [t, a] = o.useState(e),
            n = [
                { label: oQ.V6.UNSET, value: oQ.V6.UNSET, id: oQ.V6.UNSET },
                { label: oQ.V6.IN_PROCESS_V2, value: oQ.V6.IN_PROCESS_V2, id: oQ.V6.IN_PROCESS_V2 },
                { label: oQ.V6.OUT_OF_PROCESS_V3, value: oQ.V6.OUT_OF_PROCESS_V3, id: oQ.V6.OUT_OF_PROCESS_V3 },
                {
                    label: oQ.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: oQ.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    id: oQ.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => ({ ...t, label: `${t.label} ${e === t.value ? "(current)" : ""}` }));
        return (0, r.jsx)(j.l, {
            label: "Override the overlay render mode",
            value: t,
            options: n,
            onSelectionChange: function (e) {
                (a(e), oK.A.forceRenderMode(e));
            },
            selectionMode: "single",
            fullWidth: !0,
        });
    });
function dE(e) {
    let { modalProps: t, onClose: a } = e,
        [n, l] = o.useState(null);
    function i() {
        a(null);
    }
    return (0, r.jsxs)(oG.EO, {
        size: oG.rI.LARGE,
        "aria-label": "Breadcrumb Import",
        ...t,
        transitionState: t.transitionState,
        parentComponent: "BreadcrumbImportPanel",
        children: [
            (0, r.jsxs)(oG.rQ, {
                align: oq.A.Align.CENTER,
                justify: oq.A.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(g.E, {
                        variant: "body-md/semibold",
                        color: "text-feedback-critical",
                        children: "Breadcrumb Import",
                    }),
                    (0, r.jsx)(oG.s_, { onClick: i }),
                ],
            }),
            (0, r.jsx)(oG.$m, {
                children: (0, r.jsx)("div", {
                    className: dl.st,
                    children: (0, r.jsx)(oB.f, { label: "Paste JSON Here", onChange: l, value: n ?? "", rows: 12 }),
                }),
            }),
            (0, r.jsx)(oG.jl, {
                children: (0, r.jsxs)(nj.e, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Import",
                            onClick: function () {
                                a(n);
                            },
                        }),
                        (0, r.jsx)(p.$, { variant: "secondary", text: "Clear", onClick: i }),
                    ],
                }),
            }),
        ],
    });
}
let dC = {
    native: { label: "Native", filter: (e) => e.type === oX.ON.NativeLegacy || e.type === oX.ON.NativeOOP },
    render: { label: "Render", filter: (e) => e.type === oX.ON.Renderer },
    flux: { label: "Flux", filter: (e) => e.type === oX.ON.Flux },
    client: { label: "Client", filter: (e) => e.type === oX.ON.OOPModule || e.type === oX.ON.LegacyModule },
};
function dS(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oX.QJ.Info;
    if (t === oX.QJ.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case oX.ON.NativeLegacy:
            return "var(--yellow-500)";
        case oX.ON.NativeOOP:
            return "var(--green-500)";
        case oX.ON.Flux:
            return "var(--brand-400)";
        case oX.ON.Renderer:
            return "var(--brand-500)";
        case oX.ON.LegacyModule:
            return "var(--yellow-300)";
        case oX.ON.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let d_ = [
    {
        key: "type",
        cellClassName: dl.SZ,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: a } = e,
                n = dN(t);
            return (0, r.jsx)("div", {
                className: dl.g$,
                style: { color: dS(t, a) },
                children: (0, r.jsx)(n, { color: "currentColor", size: "sm" }),
            });
        },
    },
    {
        key: "Name",
        cellClassName: dl.Cm,
        render(e) {
            let { name: t, type: a, logType: n } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(g.E, {
                        variant: "body-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case oX.QJ.Info:
                                    return "text-strong";
                                case oX.QJ.Warning:
                                    return "text-feedback-warning";
                                case oX.QJ.Error:
                                    return "text-feedback-critical";
                                default:
                                    return "text-subtle";
                            }
                        })(n),
                        children: t,
                    }),
                    (0, r.jsxs)(g.E, { variant: "body-sm/normal", color: "text-subtle", children: ["(", a, ")"] }),
                ],
            });
        },
    },
    {
        key: "Timestamp",
        cellClassName: dl.DK,
        render(e) {
            let { timestamp: t } = e;
            return (0, nZ.i$)(n$()(t), "h:mm:ss.SSS");
        },
    },
];
function dN(e) {
    switch (e) {
        case oX.ON.NativeLegacy:
            return oF.BrowserIcon;
        case oX.ON.NativeOOP:
            return o$.BrowserPlusIcon;
        case oX.ON.Renderer:
        case oX.ON.Flux:
            return oV.ScreenSystemRequirementsIcon;
        case oX.ON.LegacyModule:
            return oW.ScreenIcon;
        case oX.ON.OOPModule:
            return oH.ScreenStreamIcon;
        default:
            return oW.ScreenIcon;
    }
}
function dA(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let dk = ["__webpack_require__", "fn"],
    dI = ["web.js", "web.js.map"],
    dD = [
        {
            id: "details",
            name: "Details",
            group: nb.fu.NONE,
            render: (e) => {
                let { breadcrumb: t, onClose: a } = e,
                    { name: n, type: l, logType: i, nativeId: s, stack: o, data: d, timestamp: c, pid: u } = t,
                    m = n$()(c),
                    h = dN(l);
                return (0, r.jsxs)(x.Ar, {
                    className: dl.bW,
                    children: [
                        (0, r.jsxs)(oJ.A, {
                            className: ea()(t6.jr, dl.nZ),
                            children: [
                                (0, r.jsx)("div", {
                                    style: { color: dS(l, i) },
                                    className: dl.nr,
                                    children: (0, r.jsx)(h, { color: "currentColor", size: "sm" }),
                                }),
                                (0, r.jsxs)(oJ.A.Title, {
                                    wrapperClassName: dl.qd,
                                    children: [
                                        n,
                                        " (",
                                        l,
                                        ")",
                                        (0, r.jsx)(en.D, {
                                            tag: "span",
                                            className: dl.KE,
                                            onClick: () => (0, nX.C)(n),
                                            children: (0, r.jsx)(nW.CopyIcon, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(oJ.A.Icon, {
                                    icon: nW.CopyIcon,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, nX.C)(dA(t));
                                    },
                                }),
                                (0, r.jsx)(oJ.A.Icon, { icon: nz.CircleXIcon, tooltip: "Close", onClick: a }),
                            ],
                        }),
                        (0, r.jsxs)(le, {
                            className: dl.ZK,
                            children: [
                                (0, r.jsx)(lt, {
                                    name: "Timestamp",
                                    copyValue: m.toISOString(),
                                    children: (0, r.jsx)("time", {
                                        dateTime: m.toISOString(),
                                        title: (0, nZ.i$)(m, "LLLL"),
                                        children: (0, nZ.i$)(m, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, r.jsx)(lt, {
                                    name: "Log Type",
                                    copyValue: i,
                                    children: (0, r.jsx)("code", { children: i }),
                                }),
                                (0, r.jsx)(lt, {
                                    name: "PID",
                                    copyValue: u?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: u?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(lt, {
                                    name: "Native ID",
                                    copyValue: s?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: s?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(lt, {
                                    name: "Data",
                                    copyValue: dA(d),
                                    children: (0, r.jsx)("code", { children: dA(d) }),
                                }),
                                null != o &&
                                    (0, r.jsx)(lt, {
                                        name: "Stack Trace",
                                        copyValue: o,
                                        children: (0, r.jsx)("code", {
                                            children: o.split("\n").map((e, t) => {
                                                let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != a) {
                                                    let [, e, n, l, i] = a,
                                                        s = n.split(/[\\/]/).pop();
                                                    return dk.includes(e.trim())
                                                        ? null
                                                        : (0, r.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, r.jsx)("span", {
                                                                          className: dl.e0,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !dI.includes(s ?? "") &&
                                                                          (0, r.jsxs)(r.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, r.jsxs)("span", {
                                                                                      className: dl.lz,
                                                                                      title: n,
                                                                                      children: [s, ":", l, ":", i],
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
    dT = {
        searchType: nJ.n.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: a, stack: n, data: l } = e,
                i = [t, a, JSON.stringify(l)];
            return (null != n && i.push(n), i);
        },
        throttleMs: 100,
    };
function dR() {
    let { ref: e, height: t } = (0, oY.Ay)(),
        a = (0, d.bG)([o3.A], () => o3.A.isModuleLoggingEnabled()),
        [n, l] = o.useState(a),
        [i, s] = o.useState(!1),
        [c, u] = o.useState(null),
        [m, h] = o.useState(Object.keys(dC)),
        [p, x] = (0, d.bG)([o3.A], () => o3.A.getOverlayLoggingBreadcrumbs(), [], de.D),
        [v, b] = o.useState(null),
        j = v ?? p,
        f = null != v ? -1 : x;
    o.useEffect(() => {
        0 !== f &&
            (i
                ? u(j.reduce((e, t) => ("game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e), 0))
                : u(null));
    }, [i, j, f]);
    let [y, E] = o.useState(""),
        C = o.useMemo(
            () =>
                0 === f
                    ? []
                    : j.filter((e) => {
                          if (i && null != c && e.timestamp < c) return !1;
                          for (let t of m) {
                              let { filter: a } = dC[t];
                              if (a(e)) return !0;
                          }
                          return !1;
                      }),
            [j, m, c, i, f],
        ),
        [S, _] = o.useState(C),
        [N, A] = o.useState(null),
        k = o.useMemo(() => j.find((e) => e.key === N), [j, N]),
        I = o.useCallback((e) => {
            _(e);
        }, []),
        { renderSelectedTab: D } = (0, nv.A)({ tabs: dD }, []);
    (0, nQ.RT)(y, C, I, dT, [j]);
    let T = o.useCallback((e) => {
            (l(e), oK.A.setModuleLogging(e));
        }, []),
        [R, O] = o.useState(!1),
        w = o.useRef(null),
        M = o.useCallback(() => {
            ((0, nX.C)(JSON.stringify(C)), O(!0));
        }, [C]);
    o.useEffect(() => {
        if (R)
            return (
                (w.current = setTimeout(() => {
                    O(!1);
                }, 4e3)),
                () => {
                    null != w.current && clearTimeout(w.current);
                }
            );
    }, [R]);
    let L = o.useCallback((e) => {
            b(null != e ? JSON.parse(e) : null);
        }, []),
        U = o.useCallback(
            (e) => {
                if (e) return b(null);
                (0, P.qf)(
                    (e) =>
                        (0, r.jsx)(dE, {
                            modalProps: e,
                            onClose: (t) => {
                                (L(t), e.onClose());
                            },
                        }),
                    { modalKey: "breadcrumb-import-panel" },
                    e2.SY,
                );
            },
            [L],
        );
    return (0, r.jsxs)("div", {
        ref: e,
        className: dl.rh,
        children: [
            (0, r.jsxs)("div", {
                className: dl.st,
                children: [
                    (0, r.jsxs)("div", {
                        className: ea()(dl._V, dl.XQ),
                        children: [
                            (0, r.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: dl.iR,
                                children: (0, r.jsx)(oc.S, { label: "Poll Native", checked: n, onChange: (e) => T(e) }),
                            }),
                            (0, r.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: dl.iR,
                                children: (0, r.jsx)(oc.S, {
                                    label: "Only Active Games",
                                    checked: i,
                                    onChange: (e) => s(e),
                                }),
                            }),
                            (0, r.jsxs)(en.D, {
                                className: dl.ny,
                                onClick: M,
                                children: [
                                    (0, r.jsx)(g.E, {
                                        variant: "body-sm/normal",
                                        color: "text-subtle",
                                        children: R ? "Copied" : "Copy All",
                                    }),
                                    R
                                        ? (0, r.jsx)(oj.CheckmarkLargeIcon, {
                                              size: "sm",
                                              color: e1.A.unsafe_rawColors.GREEN_330.css,
                                          })
                                        : (0, r.jsx)(nW.CopyIcon, { color: "currentColor", size: "sm" }),
                                ],
                            }),
                            (0, r.jsx)(en.D, {
                                className: dl.ny,
                                onClick: () => U(null != v),
                                children: (0, r.jsx)(g.E, {
                                    variant: "body-sm/normal",
                                    color: "currentColor",
                                    children: null != v ? "Clear" : "Import",
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: ea()(dl._V, dl.XQ),
                        children: Object.entries(dC).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                en.D,
                                {
                                    className: ea()(dl.pb, m.includes(t) && dl.bx),
                                    onClick: () => {
                                        h((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: (0, r.jsx)(g.E, {
                                        variant: "body-sm/normal",
                                        color: "currentColor",
                                        children: a.label,
                                    }),
                                },
                                t,
                            );
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: dl._V,
                        children: (0, r.jsx)(nY.I, {
                            query: y,
                            onChange: E,
                            onClear: () => E(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: ea()(dl.st, dl.CZ),
                children: (0, r.jsx)(t5, {
                    columns: d_,
                    data: S,
                    selectedRowKey: N ?? void 0,
                    onClickRow: (e) => A(e.key),
                }),
            }),
            null != k &&
                (0, r.jsx)(nx, {
                    className: ea()(dl.st, dl.rf),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: D({ breadcrumb: k, onClose: () => A(null) }),
                }),
        ],
    });
}
let dO = o.memo(function () {
        let e = (0, d.bG)([o0.A], () => o0.A.getPopoutInitializationStages());
        return (0, r.jsxs)("div", {
            className: dl.st,
            children: [
                (0, r.jsx)("div", {
                    className: dl.Iv,
                    children: (0, r.jsx)(g.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        children: "Popout Initialization Stages",
                    }),
                }),
                (0, r.jsx)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", { children: JSON.stringify(e, void 0, 2) }),
                }),
            ],
        });
    }),
    dw = o.memo(function () {
        let e = (0, d.bG)([o3.A], () => o3.A.isStateDebuggingEnabled()),
            t = (0, d.bG)([o3.A], () => o3.A.getDebuggingState());
        return (
            o.useEffect(
                () => (
                    oK.A.setStateDebugging(!0),
                    () => {
                        oK.A.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, r.jsxs)("div", {
                className: dl.st,
                children: [
                    (0, r.jsx)("div", {
                        className: dl.Iv,
                        children: (0, r.jsx)(m.d, {
                            checked: e,
                            onChange: () => oK.A.setStateDebugging(!e),
                            label: "Poll Native Module State",
                        }),
                    }),
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: (0, r.jsx)("pre", { children: JSON.stringify(t, void 0, 2) }),
                    }),
                ],
            })
        );
    });
function dM() {
    return (0, r.jsx)(x.Ar, {
        children: (0, r.jsxs)("div", {
            className: ea()(t6.nd, dl.rf),
            children: [
                (0, r.jsx)(dj, {}),
                (0, r.jsx)(dy, {}),
                (0, r.jsx)(df, {}),
                (0, r.jsx)(dv, {}),
                (0, r.jsx)(dp, {}),
                (0, r.jsx)(dx, {}),
                (0, r.jsx)(dO, {}),
                (0, r.jsx)(dw, {}),
            ],
        }),
    });
}
function dP(e) {
    switch (e) {
        case "Disabled":
            return;
        case "False":
            return !1;
        case "True":
            return !0;
    }
}
function dL(e) {
    return null == e ? "Disabled" : e ? "True" : "False";
}
let dU = o.memo(function () {
    let e = (0, oZ.wW)(),
        t = (0, d.bG)([o4.Ay], () => o4.Ay.getOverlayKeybind());
    return (0, r.jsxs)("div", {
        className: dl.st,
        children: [
            (0, r.jsx)(ei.D, { variant: "heading-lg/semibold", children: "Overlay Default Keybind Experiment" }),
            (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: "Experiment State" }),
            (0, r.jsx)(g.E, {
                variant: "body-sm/normal",
                color: "text-subtle",
                children: (0, r.jsx)("pre", {
                    children: JSON.stringify({ ...e, overlayKeybind: (0, dt.dI)(t.shortcut) }, void 0, 2),
                }),
            }),
            (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: "Overrides" }),
            (0, r.jsx)(j.l, {
                label: "Overlay User Status",
                description: "Override whether the current user was a new or existing user",
                value: dL(e.overrideIsNewOverlayUser),
                options: [
                    { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                    { label: "Existing user", value: "False", id: "False" },
                    { label: "New user", value: "True", id: "True" },
                ],
                onSelectionChange: function (e) {
                    (0, oZ.sw)(dP(e));
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(j.l, {
                label: "Override Previous Keybind Status",
                description: "Override whether the user's pre-experiment keybind was the default keybind",
                value: dL(e.overrideIsUsingDefaultOverlayKeybind),
                options: [
                    { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                    { label: "Using default keybind", value: "True", id: "True" },
                    { label: "Not using default keybind", value: "False", id: "False" },
                ],
                onSelectionChange: function (e) {
                    (0, oZ.C3)(dP(e));
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: "Actions" }),
            (0, r.jsx)(p.$, { size: "sm", text: "Reset isNewOverlayUser", onClick: () => (0, oZ.xc)() }),
            (0, r.jsx)(p.$, { size: "sm", text: "Reset isUsingDefaultOverlayKeybind", onClick: () => (0, oZ.tM)() }),
        ],
    });
});
function dG() {
    return (0, r.jsx)(x.Ar, {
        children: (0, r.jsx)("div", { className: ea()(t6.nd, dl.rf), children: (0, r.jsx)(dU, {}) }),
    });
}
function dB() {
    let [e, t] = o.useState("state");
    return (
        o.useEffect(
            () => (
                C.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !0 }),
                () => {
                    C.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !1 });
                }
            ),
            [],
        ),
        (0, r.jsxs)("div", {
            className: ea()(t6.nd, dl.nd),
            children: [
                (0, r.jsxs)("div", {
                    className: dl._V,
                    children: [
                        (0, r.jsx)(en.D, {
                            className: ea()(dl.k0, "state" === e && dl.a),
                            onClick: () => t("state"),
                            children: (0, r.jsx)(g.E, {
                                variant: "body-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, r.jsx)(en.D, {
                            className: ea()(dl.k0, "logging" === e && dl.a),
                            onClick: () => t("logging"),
                            children: (0, r.jsx)(g.E, {
                                variant: "body-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, r.jsx)(en.D, {
                            className: ea()(dl.k0, "experiments" === e && dl.a),
                            onClick: () => t("experiments"),
                            children: (0, r.jsx)(g.E, {
                                variant: "body-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, r.jsx)(dM, {}),
                "logging" === e && (0, r.jsx)(dR, {}),
                "experiments" === e && (0, r.jsx)(dG, {}),
            ],
        })
    );
}
var dF = a(25409);
let d$ = { xbox_game_pass: "Xbox Game Pass" };
function dV(e) {
    return `/debug/partner-subs/${e}`;
}
async function dW(e, t) {
    await ia.Bo.post({ url: dV(e), body: t, rejectWithError: !0 });
}
function dH(e) {
    let { active: t } = e;
    return (0, r.jsx)("span", { className: `${dF.Od} ${t ? dF.xk : dF.kS}`, children: t ? "Active" : "Inactive" });
}
function dz(e) {
    let { partner: t, connectedAccount: a, onChanged: n } = e,
        [l, i] = o.useState(!1),
        s = { external_account_id: a.external_account_id },
        d = Object.keys(a.metadata).length > 0;
    async function c(e) {
        i(!0);
        try {
            await e();
        } finally {
            (await n(), i(!1));
        }
    }
    return (0, r.jsxs)(t0.B, {
        gap: 8,
        className: dF.nM,
        children: [
            (0, r.jsxs)(t0.B, {
                direction: "horizontal",
                align: "center",
                gap: 12,
                children: [
                    (0, r.jsx)("div", { className: dF.un, children: a.external_account_id }),
                    (0, r.jsx)(dH, { active: a.is_active }),
                    (0, r.jsxs)(t0.B, {
                        direction: "horizontal",
                        gap: 8,
                        fullWidth: !1,
                        className: dF.cm,
                        children: [
                            (0, r.jsx)(m.d, {
                                label: "",
                                checked: a.is_active,
                                onChange: (e) => c(() => dW(t, { ...s, is_active: e })),
                                disabled: l,
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Unlink",
                                onClick: () =>
                                    c(() =>
                                        (async function (e, t) {
                                            await ia.Bo.del({ url: dV(e), body: t, rejectWithError: !0 });
                                        })(t, s),
                                    ),
                                disabled: l,
                            }),
                        ],
                    }),
                ],
            }),
            d && (0, r.jsx)("div", { className: dF.en, children: JSON.stringify(a.metadata) }),
        ],
    });
}
function dK(e) {
    var t;
    let { listing: a, onChanged: n } = e,
        [l, i] = o.useState(""),
        [s, d] = o.useState(!0),
        [c, u] = o.useState(!1);
    return (0, r.jsxs)(t0.B, {
        gap: 12,
        className: dF.ns,
        children: [
            (0, r.jsxs)("div", {
                className: dF.CM,
                children: [
                    "Leave the id blank for a per-Discord-user default. Set the same id on multiple Discord accounts to test cross-account dedup of the ",
                    d$[(t = a.partner)] ?? t,
                    " membership.",
                ],
            }),
            (0, r.jsx)(f.k, {
                label: "External account id",
                placeholder: a.default_external_account_id,
                value: l,
                onChange: i,
            }),
            (0, r.jsx)(m.d, { label: "Active on link", checked: s, onChange: d }),
            (0, r.jsx)(t0.B, {
                direction: "horizontal",
                justify: "start",
                children: (0, r.jsx)(p.$, {
                    variant: "primary",
                    size: "sm",
                    text: "Link account",
                    onClick: async function () {
                        u(!0);
                        try {
                            let e = { is_active: s },
                                t = l.trim();
                            ("" !== t && (e.external_account_id = t), await dW(a.partner, e), i(""));
                        } finally {
                            (await n(), u(!1));
                        }
                    },
                    disabled: c,
                }),
            }),
        ],
    });
}
function dY(e) {
    var t;
    let { listing: a, onChanged: n } = e;
    return (0, r.jsxs)(t0.B, {
        gap: 8,
        className: dF.Oy,
        children: [
            (0, r.jsx)(ei.D, { variant: "heading-lg/semibold", children: d$[(t = a.partner)] ?? t }),
            (0, r.jsxs)(g.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: [
                    "Backed by the ",
                    (0, r.jsx)("code", { children: a.connection_type }),
                    " connected account.",
                ],
            }),
            (0, r.jsx)("div", { className: dF.U, children: "Linked accounts" }),
            0 === a.connected_accounts.length
                ? (0, r.jsx)("div", { className: dF.Ie, children: "None linked yet." })
                : a.connected_accounts.map((e) =>
                      (0, r.jsx)(dz, { partner: a.partner, connectedAccount: e, onChanged: n }, e.connection_id),
                  ),
            (0, r.jsx)("div", { className: dF.U, children: "Link a new account" }),
            (0, r.jsx)(dK, { listing: a, onChanged: n }),
        ],
    });
}
function dq() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState(null),
        l = o.useCallback(async () => {
            try {
                let e = await (async function () {
                    let { body: e } = await ia.Bo.get({ url: "/debug/partner-subs", rejectWithError: !0 });
                    return e;
                })();
                (t(e), n(null));
            } catch (e) {
                n(e instanceof Error ? e.message : String(e));
            }
        }, []);
    return (
        (0, th.Ay)(() => {
            l();
        }),
        (0, r.jsxs)(x.Ip, {
            className: ea()(t6.nd, dF.kL),
            children: [
                (0, r.jsx)(ei.D, { variant: "heading-lg/semibold", className: t6.wx, children: "Partner Perks" }),
                (0, r.jsxs)(t0.B, {
                    gap: 16,
                    children: [
                        null != a && (0, r.jsx)(g.E, { variant: "body-sm/normal", className: dF.kc, children: a }),
                        e.map((e) => (0, r.jsx)(dY, { listing: e, onChanged: l }, e.partner)),
                    ],
                }),
            ],
        })
    );
}
var dJ = a(488428),
    dQ = a(73825),
    dX = a(781300),
    dZ = a(589078),
    d0 = a(944304),
    d1 = a(300233),
    d2 = a(599941),
    d3 = a(31637),
    d6 = a(4630),
    d5 = a(44120),
    d8 = a(778705),
    d4 = a(216678),
    d9 = a(194509),
    d7 = a(672619),
    ce = a(533609),
    ct = a(397093);
function ca(e) {
    let { selectedGuildForGuildSub: t } = e,
        a = (0, d2.uk)(t?.id)[0];
    return null != t && null != a
        ? (0, r.jsx)("div", {
              children: a.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(d3.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let cn = function () {
    let [e, t] = o.useState(tF.pe.TIER_2),
        [a, n] = o.useState(null),
        l = (0, d.yK)([nA.A], () => nA.A.getGuildsArray()),
        [i] = (0, d.yK)([oh.A], () => [oh.A.getPremiumSubscription()]),
        s = l.map((e) => ({ id: e.id, value: e, label: e.name })),
        [c, m] = o.useState(s.length > 0 ? s[0].value : null),
        [h, v] = o.useState(""),
        [y, E] = o.useState({ plan_id: tF.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        C = "true" !== y.gift && null != i,
        [S, _] = o.useState(s.length > 0 ? s[0].value : null),
        { analyticsLocations: N } = (0, nf.Ay)(tw.A.PAYMENT_FLOW_TEST_PAGE),
        [A, k] = o.useState(""),
        [I, D] = o.useState(""),
        { balance: T, isFetching: R, error: O } = (0, d7.W0)(),
        { isSubmitting: w, responseMessage: M, redeemVirtualCurrency: P } = (0, d7.Qr)({ useOrdersAPI: !0 }),
        [L, U] = o.useState(""),
        [G, B] = o.useState(""),
        [F, $] = o.useState(""),
        [V, W] = o.useState("");
    return (0, r.jsx)(nf.f5, {
        value: N,
        children: (0, r.jsx)(x.Ip, {
            className: ct.XG,
            children: (0, r.jsxs)(t0.B, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, r.jsxs)(t0.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Gift",
                                value: e,
                                options: [
                                    { id: "tier_2", value: tF.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: tF.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: tF.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => t(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(d9.A, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: nV.XD.PRIMARY,
                                look: nV.pR.FILLED,
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(t0.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Premium Select Plan",
                                value: a,
                                options: [
                                    { id: "tier_2", value: tF.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: tF.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: tF.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => n(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () => (0, d8.A)({ subscriptionTier: a, analyticsLocations: N }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(t0.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Boost",
                                value: c,
                                options: s,
                                onSelectionChange: (e) => m(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            null != c
                                ? (0, r.jsx)(d0.A, { guild: c, analyticsLocation: {} })
                                : (0, r.jsx)("div", { children: "No Guild to boost" }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(t0.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(sW.Anchor, {
                                href: "https://i.dis.gd/createPromo",
                                children: "How to create promotion",
                            }),
                            (0, r.jsxs)(t0.B, {
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
                                    (0, r.jsx)(iu.m, {
                                        text: "Need Promotion Code",
                                        shouldShow: h.length < 1,
                                        children: (0, r.jsx)(p.$, {
                                            variant: "primary",
                                            text: "Open Link",
                                            disabled: h.length < 1,
                                            onClick: () => {
                                                window.open(ej.BVt.BILLING_PROMOTION_REDEMPTION(h));
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
                                    { id: "tier_2", value: tF.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: tF.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: tF.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic" },
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
                    (0, r.jsx)(iu.m, {
                        text: "Already subscribed",
                        shouldShow: C,
                        children: (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: C,
                            onClick: () => {
                                window.open(ej.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + dJ.As({ ...y }));
                            },
                        }),
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Redeem Virtual Currency for SKU",
                        children: [
                            (0, r.jsxs)(t0.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(g.E, {
                                        variant: "body-sm/normal",
                                        children: "Virtual Currency Balance:",
                                    }),
                                    R
                                        ? (0, r.jsx)("div", {
                                              className: ct.wG,
                                              children: (0, r.jsx)(tg.y, { type: tg.t.SPINNING_CIRCLE }),
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: ct.dB,
                                              children: [
                                                  null !== O &&
                                                      (0, r.jsxs)(g.E, {
                                                          variant: "body-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              O.message,
                                                          ],
                                                      }),
                                                  (0, r.jsx)(ce.Gy, {
                                                      balance: T ?? 0,
                                                      balanceWidgetMode: ce.k7.SELECTED,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, r.jsx)(f.k, {
                                label: "SKU ID",
                                placeholder: "SKU ID",
                                value: L,
                                onChange: (e) => U(e),
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Redeem Virtual Currency for SKU",
                                loading: w,
                                onClick: () => P(L, (0, eF.A)()),
                            }),
                            null != M && (0, r.jsx)(g.E, { variant: "body-sm/normal", children: M }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Creator Revenue",
                        children: [
                            (0, r.jsx)(j.l, {
                                label: "Premium Server Subscription For",
                                value: S,
                                options: s,
                                onSelectionChange: (e) => _(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(d1.H, {
                                guildId: S?.id,
                                children: (0, r.jsx)(ca, { selectedGuildForGuildSub: S }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(t0.B, {
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
                                        value: I,
                                        onChange: (e) => D(e),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open App Subs Modal for Activity",
                                onClick: () =>
                                    (0, d6.openIAPPurchaseModal)({
                                        applicationId: A,
                                        skuId: I,
                                        openPremiumPaymentModal: () => !0,
                                        analyticsLocations: [],
                                        analyticsLocationObject: { page: ej.liQ.IN_APP },
                                        context: ej.BRT.APP,
                                    }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsx)(t0.B, {
                        direction: "vertical",
                        gap: 8,
                        children: (0, r.jsx)(u.n, {
                            label: "Standard Payment Modal Test",
                            children: (0, r.jsxs)(t0.B, {
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
                                    (0, r.jsx)(p.$, {
                                        variant: "primary",
                                        text: "Open Premium Apps Payment Modal for SKU",
                                        onClick: () =>
                                            (0, d4.q)({
                                                applicationId: G,
                                                skuId: F,
                                                analyticsLocations: N,
                                                checkoutFlow: dZ.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                            }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsxs)(t0.B, {
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
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open Collectibles Payment Modal for SKU",
                                onClick: () => (0, d5.A)({ skuId: V, analyticsLocations: N }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsx)(u.n, {
                        label: "Helpers",
                        children: (0, r.jsxs)(t0.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionPlanStore",
                                    onClick: () => (0, dQ.YG)(),
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, dX.uZ)(),
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsx)(b.c, {}),
                    (0, r.jsx)(u.n, {
                        label: "Dismissible Content Framework",
                        children: (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Reset DismissibleContentFrameworkStore",
                            onClick: () => (0, lL.Ab)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
var cl = a(219887),
    ci = a(459357),
    cs = a(650314),
    cr = a(500380),
    co = a(102609),
    cd = a(50258),
    cc = a(295405),
    cu = a(548185);
let cm = [
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
    ch = {
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
    cp = [
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
    cg = {
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
    cx = [
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
    cv = {
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
function cb() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState(null),
        [l, i] = o.useState(null),
        [s, d] = o.useState(null),
        [c, u] = o.useState(null),
        [m, h] = o.useState("pm_card_us"),
        [v, b] = o.useState(!1),
        f = Object.values((0, tO.bG)([cc.A], () => cc.A.paymentSources)),
        y = ch[e];
    return (
        o.useEffect(() => {
            (0, dX.$o)();
        }, []),
        (0, r.jsx)(x.Ip, {
            className: t6.nd,
            children: (0, r.jsxs)("div", {
                className: i$.l$,
                children: [
                    (0, r.jsxs)(g.E, {
                        style: { marginBottom: "16px" },
                        variant: "body-lg/semibold",
                        children: [" ", "Manage Payment Sources", " "],
                    }),
                    (0, r.jsxs)("div", {
                        className: i$.Uo,
                        children: [
                            (0, r.jsx)(ak.Z, {
                                selectionMode: "single",
                                label: "Card Type",
                                value: e,
                                options: cm
                                    .filter((e) => !("disabled" in e && e.disabled))
                                    .map((e) => {
                                        let { value: t, label: a } = e;
                                        return {
                                            id: t,
                                            value: t,
                                            label: a,
                                            leading: (0, r.jsx)("img", {
                                                alt: "",
                                                className: cu.bI,
                                                src: (0, cr.t)(t),
                                            }),
                                        };
                                    }),
                                onSelectionChange: function (e) {
                                    (t(e), h(ch[e][0].value), b(1 === ch[e].length));
                                },
                            }),
                            "US" === e &&
                                (0, r.jsx)(j.l, {
                                    selectionMode: "single",
                                    label: "US Address",
                                    hideLabel: !0,
                                    value: a,
                                    options: cp.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: function (e) {
                                        (n(e), i(cg[e] ?? null));
                                    },
                                }),
                            "CA" === e &&
                                (0, r.jsx)(j.l, {
                                    selectionMode: "single",
                                    label: "CA Address",
                                    hideLabel: !0,
                                    value: s,
                                    options: cx.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: function (e) {
                                        (d(e), u(cv[e] ?? null));
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
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                size: "sm",
                                text: "Create Stripe Credit Card",
                                onClick: async function () {
                                    let t = m;
                                    ("" === t && (t = "pm_card_us"),
                                        await ia.Bo.post({
                                            url: "/debug/payment-source",
                                            body: { token: t, address: "US" === e ? l : "CA" === e ? c : null },
                                            rejectWithError: !1,
                                        }),
                                        await (0, dX.$o)());
                                },
                            }),
                            f.length > 0 &&
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Delete All Payment Sources",
                                    onClick: async function () {
                                        (await ia.Bo.del({ url: "/debug/payment-source", rejectWithError: !1 }),
                                            await (0, dX.$o)());
                                    },
                                }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                size: "sm",
                                text: "Reset API Rate limits and reload app",
                                onClick: async function () {
                                    (await ia.Bo.del({ url: "/debug/rate-limits", rejectWithError: !1 }),
                                        window.location.reload());
                                },
                            }),
                        ],
                    }),
                    (0, r.jsx)(g.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "body-lg/semibold",
                        children: "Generate Gift Card PIN",
                    }),
                    (0, r.jsx)(cN, {}),
                    (0, r.jsx)(g.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "body-lg/semibold",
                        children: "Experiment Overrides",
                    }),
                    (0, r.jsx)(cC, {}),
                    (0, r.jsx)(g.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "body-lg/semibold",
                        children: "Existing Payment Sources",
                    }),
                    f.map((e) => (0, r.jsx)(cA, { paymentSource: e }, e.id)),
                ],
            }),
        })
    );
}
let cj = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0)" },
        { id: "1", value: "1", label: "Treatment (1)" },
    ],
    cf = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Gift cards disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Gift cards enabled" },
    ],
    cy = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Express checkout disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Express checkout enabled: Review Footer" },
    ];
function cE(e) {
    let { experimentName: t, options: a = cj } = e,
        n = (0, tO.bG)([cd.A, n1.default], () => {
            let e = n1.default.getId(),
                a = cd.A.getAssignment("user", e, t);
            return a?.isOverride === !0 ? String(a.variantId) : "none";
        }),
        l = o.useCallback(
            (e) => {
                (0, co.t$)(co.l5.APEX, t, "none" === e ? null : Number(e));
            },
            [t],
        );
    return (0, r.jsx)(j.l, { selectionMode: "single", label: t, value: n, options: [...a], onSelectionChange: l });
}
function cC() {
    return (0, r.jsxs)(t0.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsx)(cE, { experimentName: ci.A.definition.name, options: cf }),
            (0, r.jsx)(cE, { experimentName: cs.I.definition.name, options: cy }),
        ],
    });
}
let cS = [
        { id: "US", value: "US", label: "United States (USD)" },
        { id: "CA", value: "CA", label: "Canada (CAD)" },
        { id: "FR", value: "FR", label: "France (EUR)" },
        { id: "GB", value: "GB", label: "United Kingdom (GBP)" },
        { id: "DE", value: "DE", label: "Germany (EUR)" },
    ],
    c_ = { US: "usd", CA: "cad", FR: "eur", GB: "gbp", DE: "eur" };
function cN() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState("500"),
        [l, i] = o.useState(null),
        [s, d] = o.useState(!1),
        [c, u] = o.useState(!1),
        [m, h] = o.useState(null),
        g = parseInt(a, 10),
        x = !isNaN(g) && g >= 500 && g <= 5e3;
    return (0, r.jsxs)(t0.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsxs)(t0.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, r.jsx)(j.l, {
                        selectionMode: "single",
                        label: "Gift Card Country",
                        value: e,
                        options: cS,
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
                    (0, r.jsx)(p.$, {
                        variant: "primary",
                        size: "sm",
                        text: "Generate Gift Card PIN",
                        onClick: async function () {
                            if (x) {
                                (d(!0), h(null), i(null), u(!1));
                                try {
                                    let t = await ia.Bo.post({
                                        url: "/billing/gift-card/create-on-demand-pin",
                                        body: { country: e, currency: c_[e], amount: g },
                                        rejectWithError: !0,
                                    });
                                    i(t.body.pin);
                                } catch (e) {
                                    h(e instanceof Error ? e.message : "Failed to generate PIN");
                                } finally {
                                    d(!1);
                                }
                            }
                        },
                        loading: s,
                        disabled: !x,
                    }),
                ],
            }),
            null != l &&
                (0, r.jsxs)(t0.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(f.k, { label: "Generated PIN", value: l, onChange: () => {}, readOnly: !0 }),
                        (0, r.jsx)(p.$, {
                            variant: "secondary",
                            size: "sm",
                            text: c ? "Copied!" : "Copy",
                            onClick: () => {
                                (navigator.clipboard.writeText(l), u(!0), setTimeout(() => u(!1), 2e3));
                            },
                        }),
                    ],
                }),
            null != m && (0, r.jsx)(el.w, { type: "critical", message: m, role: "alert" }),
        ],
    });
}
function cA(e) {
    let { paymentSource: t } = e;
    return (0, r.jsxs)("div", {
        className: i$.bd,
        children: [
            (0, r.jsx)(cl.A, { locale: "en-US", paymentSource: t, showLabels: !0, showPaymentSourceIcon: !0 }, t.id),
            (0, r.jsx)("img", { alt: t.country, className: cu.bI, src: (0, cr.t)(t.country) }),
            t.isDefault
                ? (0, r.jsx)(g.E, { variant: "body-sm/medium", children: "(Default)" })
                : (0, r.jsx)(p.$, {
                      variant: "secondary",
                      size: "sm",
                      text: "Set as Default",
                      onClick: async function () {
                          (await ia.Bo.patch({
                              url: ej.Rsh.BILLING_PAYMENT_SOURCE(t.id),
                              body: { default: !0 },
                              rejectWithError: !1,
                          }),
                              await (0, dX.$o)());
                      },
                  }),
        ],
    });
}
var ck = a(706712),
    cI = a(76573),
    cD = a(543862),
    cT = a(948325),
    cR = a(55373);
function cO() {
    return (0, r.jsxs)(x.Ip, { className: cR.kL, children: [(0, r.jsx)(cw, {}), (0, r.jsx)(cP, {})] });
}
function cw() {
    let e = (0, d.bG)([eg.default], () => eg.default.getCurrentUser()?.perks ?? null),
        t = o.useMemo(
            () =>
                null == e
                    ? []
                    : Object.values(cI.bb)
                          .filter((e) => "number" == typeof e && e !== cI.bb.UNSPECIFIED)
                          .filter((t) => (0, cT.Nh)(e, t))
                          .map((t) => ({
                              id: t,
                              name: cI.bb[t],
                              sources: (0, cT.kQ)(e, t)?.map((e) => cI.g$[e]) ?? [],
                          })),
            [e],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ei.D, { className: cR.wx, variant: "heading-lg/semibold", children: "Active Perks" }),
            (0, r.jsx)(cM, { perks: e, activePerks: t }),
            (0, r.jsx)(ei.D, { className: cR.m_, variant: "heading-sm/semibold", children: "Debug" }),
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
function cM(e) {
    let { perks: t, activePerks: a } = e;
    return null == t
        ? (0, r.jsx)("p", { className: cR.Qb, children: "No perks data available on the current user." })
        : 0 === a.length
          ? (0, r.jsx)("p", { className: cR.Qb, children: "No active perks." })
          : (0, r.jsxs)("table", {
                className: cR.Q,
                children: [
                    (0, r.jsx)("thead", {
                        children: (0, r.jsxs)("tr", {
                            children: [
                                (0, r.jsx)("th", { className: cR.Ts, children: "Perk" }),
                                (0, r.jsx)("th", { className: cR.Ts, children: "Sources" }),
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
                                            className: cR.iH,
                                            children: [(0, r.jsx)("code", { children: e.name }), " (", e.id, ")"],
                                        }),
                                        (0, r.jsx)("td", {
                                            className: cR.iH,
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
function cP() {
    let e = o.useCallback(() => {
            (0, aB._N)(aG.M.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, cD.FZ)(aG.M.NITRO_TENURE_BADGE_LEVEL_UP),
        a = null != t ? new Date(t) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ei.D, { className: cR.wx, variant: "heading-lg/semibold", children: "Tenure Badges" }),
            (0, r.jsxs)("p", {
                children: [
                    "Level Up DC:\xa0",
                    null != a && (0, r.jsxs)("b", { children: ["Dismissed (", a.toLocaleDateString(), ")"] }),
                    null == a && (0, r.jsx)("b", { children: "Not Dismissed" }),
                ],
            }),
            (0, r.jsx)("div", {
                className: cR.PW,
                children: (0, r.jsx)(p.$, { variant: "primary", text: "Reset Level Up DC", onClick: e }),
            }),
        ],
    });
}
var cL = a(136722),
    cU = a(576705),
    cG = a(558393),
    cB = a(290261),
    cF = a(643566);
function c$(e) {
    let { title: t, can: a } = e,
        n = a ? oj.CheckmarkLargeIcon : ed.XSmallIcon,
        l = (0, r.jsx)("div", {
            className: ea()(cF.v_, a ? cF.uU : cF.Ss),
            children: (0, r.jsx)(n, { className: cF.Kk }),
        });
    return (0, r.jsxs)("div", {
        className: cF.z8,
        children: [
            l,
            (0, r.jsx)("div", {
                className: cF.rv,
                children: (0, r.jsx)(g.E, { variant: "body-md/normal", children: t }),
            }),
        ],
    });
}
function cV() {
    let e = (0, d.bG)([r7.Ay], () => r7.Ay.getChannelId()),
        t = (0, d.bG)([nk.A], () => nk.A.getGuildId()),
        a = (0, d.bG)([aQ.A], () => aQ.A.getChannel(e)),
        n = (0, d.bG)([nA.A], () => nA.A.getGuild(t)),
        l = (0, d.bG)([cU.A], () => cU.A.computePermissions(a)),
        i = (0, d.bG)([cU.A], () => cU.A.computePermissions(n)),
        s = (0, aJ.Ay)(a, !0),
        o = null != a ? (0, cB.mW)(a, !1) : null,
        c = null != n ? cG.A.getGuildPermissionSpecMap(n) : null,
        u = Object.values(o ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = cL.zy(l, a);
            return (0, r.jsx)(c$, { title: t, can: n }, t);
        }),
        m = Object.values(c ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = cL.zy(i, a);
            return (0, r.jsx)(c$, { title: t, can: n }, t);
        });
    return (0, r.jsx)("div", {
        className: ea()(t6.nd, cF.nd),
        children: (0, r.jsxs)("div", {
            className: cF.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: cF.uW,
                    children: [
                        (0, r.jsx)(ei.D, {
                            variant: "heading-sm/semibold",
                            children: null != s ? `Permissions in ${s}` : "No channel selected",
                        }),
                        u,
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: cF.uW,
                    children: [
                        (0, r.jsx)(ei.D, {
                            variant: "heading-sm/semibold",
                            children: null != n ? `Permissions in ${n.name}` : "No guild selected",
                        }),
                        m,
                    ],
                }),
            ],
        }),
    });
}
var cW = a(873298),
    cH = a(775602),
    cz = a(413599),
    cK = a(253932),
    cY = a(631670),
    cq = a(817281),
    cJ = a(955572),
    cQ = a(189916),
    cX = a(435911),
    cZ = a(385803),
    c0 = a(381941);
let c1 = [ej.NJ8.ASH, ej.NJ8.LIGHT, ej.NJ8.DARK, ej.NJ8.ONYX],
    c2 = [cW.NS.COMPACT, cW.NS.COZY, cW.NS.DEFAULT];
function c3(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function c6() {
    let e,
        t =
            ((e = eg.default.getCurrentUser()),
            o_.Ay.canUseClientThemes(e)
                ? Object.keys(cZ.ag)
                      .map((e) => Number(e))
                      .filter((e) => !(0, cQ.oB)(e))
                : []),
        a = t.length > 0 && Math.random() > 0.7;
    try {
        if (a) {
            let e,
                a = [...t, null],
                n = c3(a);
            if (null != n) {
                let t = cZ.ag[n];
                e = t?.theme ?? ej.NJ8.DARK;
            } else e = c3([ej.NJ8.ASH, ej.NJ8.DARK, ej.NJ8.ONYX]);
            await cq.u_(
                { theme: e, backgroundGradientPresetId: n ?? void 0, customUserThemeSettings: void 0 },
                aB.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = c3(c1);
            await cq.u_(
                { theme: e, backgroundGradientPresetId: void 0, customUserThemeSettings: void 0 },
                aB.Sb.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function c5() {
    let e = tP.A.purchases,
        t = (0, eW.x9)(e),
        a = (0, eW.$W)(e),
        n = t.length > 0,
        l = a.length > 0;
    if (n || l)
        try {
            let e = {};
            (n && (e.avatarDecoration = c3([...t, null])), l && (e.nameplate = c3([...a, null])), (0, ty.p)(e));
            let i = tE.A.getPendingChanges(),
                s = (0, cX.Sk)(i);
            await (0, cY._L)(s).finally(cY.pZ);
        } catch (e) {}
}
function c8() {
    try {
        let e = c3(ej.hH7.FONT_SIZES);
        (0, cJ.XS)(e);
        let t = c3(c0.qh);
        (0, cJ.AC)(t);
        let a = c3(c2);
        cK.Xi.updateSetting(a);
    } catch (e) {}
}
function c4() {
    let { purchases: e } = (0, t_.b5)(),
        t = (0, d.bG)([eg.default], () => eg.default.getCurrentUser()),
        a = cK.eh.useSetting(),
        n = (0, d.bG)([cz.A], () => cz.A.theme),
        l = a.backgroundGradientPresetId,
        i = (0, eW.x9)(e),
        s = (0, eW.$W)(e),
        c = t?.avatarDecoration?.skuId,
        u = t?.collectibles?.nameplate?.skuId,
        m = null != c ? (i.find((e) => e.skuId === c) ?? null) : null,
        h = null != u ? (s.find((e) => e.skuId === u) ?? null) : null,
        x = null != m ? e.get(m.skuId)?.name : null,
        v = null != h ? e.get(h.skuId)?.name : null,
        b = (0, d.bG)([cH.Ay], () => cH.Ay.fontSize),
        j = (0, d.bG)([cH.Ay], () => cH.Ay.messageGroupSpacing),
        f = cK.Xi.useSetting();
    return (
        o.useEffect(() => {
            let e = eg.default.getCurrentUser(),
                t = cK.eh.getSetting(),
                a = tP.A.purchases,
                n = (0, eW.x9)(a),
                l = (0, eW.$W)(a),
                i = cz.A.theme,
                s = t.backgroundGradientPresetId,
                r = e?.avatarDecoration?.skuId,
                o = e?.collectibles?.nameplate?.skuId,
                d = null != r ? (n.find((e) => e.skuId === r) ?? null) : null,
                c = null != o ? (l.find((e) => e.skuId === o) ?? null) : null,
                u = cH.Ay.fontSize,
                m = cH.Ay.messageGroupSpacing,
                h = cK.Xi.getSetting();
            return () => {
                try {
                    (cq.u_(
                        { theme: i, backgroundGradientPresetId: s ?? void 0, customUserThemeSettings: void 0 },
                        aB.Sb.INFREQUENT_USER_ACTION,
                    ),
                        (0, ty.p)({ avatarDecoration: d, nameplate: c }));
                    let e = tE.A.getPendingChanges(),
                        t = (0, cX.Sk)(e);
                    ((0, cY._L)(t).finally(cY.pZ), (0, cJ.XS)(u), (0, cJ.AC)(m), cK.Xi.updateSetting(h));
                } catch (e) {}
            };
        }, []),
        (0, r.jsxs)("div", {
            className: lZ.kL,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(ei.D, {
                            variant: "heading-lg/semibold",
                            children: "Randomize customization settings",
                        }),
                        (0, r.jsx)(g.E, {
                            variant: "body-md/normal",
                            children:
                                "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state.",
                        }),
                        (0, r.jsx)(p.$, { variant: "primary", size: "sm", text: "Randomize Theme", onClick: c6 }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: c5,
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: c8,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(ei.D, { variant: "heading-lg/semibold", children: "Current Settings" }),
                        (0, r.jsxs)(g.E, { variant: "body-md/normal", children: ["Theme: ", n] }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-md/normal",
                            children: ["Client Theme ID:", " ", null != l ? cZ.ag[l]?.getName() : "None"],
                        }),
                        (0, r.jsxs)(g.E, { variant: "body-md/normal", children: ["Avatar Decoration: ", x ?? "None"] }),
                        (0, r.jsxs)(g.E, { variant: "body-md/normal", children: ["Nameplate: ", v ?? "None"] }),
                        (0, r.jsxs)(g.E, { variant: "body-md/normal", children: ["Font Size: ", b, "px"] }),
                        (0, r.jsxs)(g.E, { variant: "body-md/normal", children: ["Message Spacing: ", j] }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-md/normal",
                            children: [
                                "UI Density: ",
                                f,
                                " (",
                                (function (e) {
                                    switch (e) {
                                        case cW.NS.COMPACT:
                                            return "Compact";
                                        case cW.NS.COZY:
                                            return "Cozy";
                                        case cW.NS.DEFAULT:
                                            return "Default";
                                        case cW.NS.RESPONSIVE:
                                            return "Responsive";
                                        default:
                                            return "Unknown";
                                    }
                                })(f),
                                ")",
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var c9 = a(350835),
    c7 = a(155718),
    ue = a(365185),
    ut = a(611656),
    ua = a(980822),
    un = a(534465),
    ul = a(290863),
    ui = a(620678),
    us = a(705751),
    ur = a(747681);
let uo = { positive: "text-feedback-positive", critical: "text-feedback-critical", muted: "text-muted" };
function ud(e) {
    return null == e ? "Not set" : (us.S7[e] ?? `unknown (${e})`);
}
function uc(e) {
    return (0, d.cf)(
        [t1.A],
        () => ({
            isHydrated: null != e && t1.A.isHydrated(e),
            isFetching: null != e && t1.A.isFetchingApplication(e),
            didFail: null != e && t1.A.didFetchingApplicationFail(e),
        }),
        [e],
    );
}
function uu(e) {
    let { id: t } = e;
    return (0, r.jsx)(g.E, { tag: "span", variant: "mono-md/normal", selectable: !0, children: t });
}
function um(e) {
    let { label: t, children: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g.E, { variant: "body-sm/medium", color: "text-muted", children: t }),
            (0, r.jsx)(g.E, { variant: "body-sm/normal", className: ur.Uq, children: a }),
        ],
    });
}
function uh(e) {
    var t;
    let { link: a } = e,
        n = a.application;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(uu, { id: a.id }),
            " \xb7 ",
            ((t = a.type), c7.Mh[t] ?? `unknown (${t})`),
            " \xb7",
            " ",
            null != n ? `${n.name} (${ud(n.type)})` : "application missing, link is skipped",
        ],
    });
}
function up(e) {
    var t;
    let { user: a, activity: n } = e,
        [l, i] = o.useState(!1),
        s = (0, t2.h)(n.application_id),
        d = uc(n.application_id),
        c = (0, ue.A)({ activity: n, user: a }),
        u = (0, un.UE)({ user: a, activity: n, entry: c }),
        m = (0, t2.h)(u.applicationId),
        h = uc(u.applicationId),
        { gameId: x, gameRecord: v, isLoading: b } = (0, ua.A)({ applicationId: u.applicationId }),
        j = (0, t4.A)({
            location: "DevToolsPresenceResolution",
            source: t8.GameProfileSources.DevTools,
            trackEntryPointImpression: !1,
            ...u,
        }),
        f = (function (e) {
            let {
                activity: t,
                applicationId: a,
                application: n,
                didFail: l,
                isLoading: i,
                gameId: s,
                gameRecord: r,
                canOpen: o,
            } = e;
            return o
                ? { tone: "positive", text: `Opens the ${r?.name ?? "game"} profile.` }
                : null == a
                  ? null == t.application_id
                      ? { tone: "critical", text: "No application_id, so this is a name-only presence." }
                      : { tone: "muted", text: "Only PLAYING activities link to a game profile." }
                  : l
                    ? { tone: "critical", text: "Fetching the application failed." }
                    : i
                      ? { tone: "muted", text: "Resolving\u2026" }
                      : null == s
                        ? 0 === (n?.linkedGames ?? []).length
                            ? { tone: "critical", text: "The application has no linked games." }
                            : {
                                  tone: "critical",
                                  text: "The application has linked games, but none comes back as a GAME application.",
                              }
                        : null == r
                          ? { tone: "critical", text: `Linked game ${s} was not found.` }
                          : (0, ut.TC)(r)
                            ? { tone: "critical", text: `${r.name} is GAME_DISABLED.` }
                            : { tone: "critical", text: "The game profile cannot open." };
        })({
            activity: n,
            applicationId: u.applicationId,
            application: m,
            didFail: h.didFail,
            isLoading: b,
            gameId: x,
            gameRecord: v,
            canOpen: null != j,
        }),
        y = s?.linkedGames ?? [];
    return (0, r.jsxs)(t0.B, {
        gap: 12,
        fullWidth: !1,
        className: ur.Eb,
        children: [
            (0, r.jsxs)(t0.B, {
                gap: 4,
                children: [
                    (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: n.name }),
                    (0, r.jsxs)(g.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        children: [
                            null == (t = n.type) ? "Not set" : (c9.$[t] ?? `unknown (${t})`),
                            null != n.platform ? ` \xb7 ${n.platform}` : "",
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(g.E, { variant: "body-sm/semibold", color: uo[f.tone], children: f.text }),
            (0, r.jsxs)("div", {
                className: ur.zH,
                children: [
                    (0, r.jsx)(um, {
                        label: "Application",
                        children: null != n.application_id ? (0, r.jsx)(uu, { id: n.application_id }) : "None",
                    }),
                    null != n.application_id &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(um, { label: "Name", children: s?.name ?? "\u2014" }),
                                (0, r.jsx)(um, { label: "Type", children: ud(s?.type) }),
                                (0, r.jsx)(um, {
                                    label: "Record",
                                    children: d.didFail
                                        ? "Fetch failed"
                                        : null == s
                                          ? d.isFetching
                                              ? "Fetching\u2026"
                                              : "Not loaded"
                                          : d.isHydrated
                                            ? "Full"
                                            : "Partial, linked games may be missing",
                                }),
                                (0, r.jsx)(um, {
                                    label: "Linked games",
                                    children: y.length > 0 ? y.map((e) => (0, r.jsx)(uh, { link: e }, e.id)) : "None",
                                }),
                            ],
                        }),
                    (0, r.jsx)(um, {
                        label: "Profile uses",
                        children:
                            null == u.applicationId
                                ? "Nothing"
                                : null == c
                                  ? "The activity's application"
                                  : (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            "Content inventory entry ",
                                            (0, r.jsx)(uu, { id: c.id }),
                                            ", application ",
                                            (0, r.jsx)(uu, { id: u.applicationId }),
                                        ],
                                    }),
                    }),
                    (0, r.jsx)(um, {
                        label: "Resolves to",
                        children:
                            null != x
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [v?.name ?? "Unfetched game", " ", (0, r.jsx)(uu, { id: x })],
                                  })
                                : "Nothing",
                    }),
                ],
            }),
            (0, r.jsxs)(t0.B, {
                direction: "horizontal",
                gap: 16,
                align: "center",
                wrap: !0,
                children: [
                    (0, r.jsx)(p.$, {
                        variant: "secondary",
                        size: "sm",
                        text: "Open Game Profile",
                        disabled: null == j,
                        onClick: j ?? void 0,
                    }),
                    (0, r.jsx)(l8.Q, {
                        variant: "secondary",
                        textVariant: "body-sm/medium",
                        text: l ? "Hide raw activity" : "Show raw activity",
                        onClick: () => i(!l),
                    }),
                ],
            }),
            l &&
                (0, r.jsx)("div", {
                    className: ur.aY,
                    children: (0, r.jsx)(g.E, {
                        variant: "mono-md/normal",
                        selectable: !0,
                        children: JSON.stringify(n, null, 2),
                    }),
                }),
        ],
    });
}
function ug(e) {
    let { userId: t } = e,
        a = (0, d.bG)([eg.default], () => eg.default.getUser(t), [t]),
        n = (0, d.yK)([ul.A], () => ul.A.getActivities(t), [t]);
    return null == a
        ? (0, r.jsxs)(g.E, {
              variant: "body-sm/normal",
              color: "text-feedback-critical",
              children: ["User ", t, " is not loaded. Open their profile or a server you share with them first."],
          })
        : 0 === n.length
          ? (0, r.jsxs)(g.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: [
                    "No activities in PresenceStore for ",
                    a.username,
                    ". Presence only loads for friends and members of servers you have opened.",
                ],
            })
          : (0, r.jsxs)(t0.B, {
                gap: 12,
                children: [
                    (0, r.jsxs)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: [a.username, " \xb7 ", 1 === n.length ? "1 activity" : `${n.length} activities`],
                    }),
                    n.map((e, t) => (0, r.jsx)(up, { user: a, activity: e }, `${t}:${e.type}:${e.name}`)),
                ],
            });
}
function ux() {
    let e = (0, ui.Qy)((e) => e.input),
        t = (0, ui.Qy)((e) => e.setInput),
        a = e.trim();
    return (0, r.jsx)("div", {
        className: ea()(t6.nd, ur.kL),
        children: (0, r.jsxs)(t0.B, {
            gap: 24,
            padding: 12,
            fullWidth: !1,
            className: ur.rf,
            children: [
                (0, r.jsxs)(t0.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: "Presence Resolution" }),
                        (0, r.jsx)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children:
                                "See which application each activity comes from, its linked games, and whether the profile card can open a game profile. Open this from Inspect Presence in an activity's menu, or paste a user ID.",
                        }),
                    ],
                }),
                (0, r.jsxs)(t0.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(ei.D, { variant: "heading-xs/semibold", children: "User ID" }),
                        (0, r.jsx)(f.k, {
                            label: "User ID",
                            hideLabel: !0,
                            placeholder: "Paste a user ID",
                            value: e,
                            onChange: t,
                        }),
                    ],
                }),
                a.length > 0 && (0, r.jsx)(ug, { userId: a }),
            ],
        }),
    });
}
var uv = a(656513),
    ub = a(885574),
    uj = a(508274),
    uf = a(837529);
let uy = [5793266, 2303016],
    uE = [
        { id: "nitro", label: "Nitro", value: "nitro" },
        { id: "non-nitro", label: "Non-Nitro", value: "non-nitro" },
    ];
function uC() {
    let { themeOverride: e, setThemeOverride: t, savedClientTheme: a, setSavedClientTheme: n } = (0, uf.Zt)(),
        l = (0, eC.Ay)(),
        i = (0, d.bG)([aF.A], () => aF.A.settings.appearance?.clientThemeSettings),
        s =
            i?.customUserThemeSettings != null &&
            null != i.customUserThemeSettings.colors &&
            i.customUserThemeSettings.colors.length > 0;
    function o() {
        null != a && ((0, cq.u_)({ theme: a.theme, customUserThemeSettings: a.customUserThemeSettings }), n(null));
    }
    return (0, r.jsx)(x.Ar, {
        children: (0, r.jsxs)(t0.B, {
            gap: 16,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(uv.N, {
                            collapsibleContent: (0, r.jsxs)(t0.B, {
                                gap: 8,
                                padding: 4,
                                children: [
                                    (0, r.jsx)(g.E, {
                                        variant: "body-md/normal",
                                        color: "text-muted",
                                        children:
                                            "This panel allows you to override the theme and theme colors that are used when rendering user profiles. The overrides you set here will apply to all user profiles, not just your own.",
                                    }),
                                    (0, r.jsx)(g.E, {
                                        variant: "body-md/normal",
                                        color: "text-muted",
                                        children:
                                            "The intended use case for this tool is to allow you to preview both Nitro and non-Nitro profile component styles across a variety of user profiles regardless of their Nitro status or chosen theme colors.",
                                    }),
                                ],
                            }),
                            children: (e) => {
                                let { onClick: t } = e;
                                return (0, r.jsx)(p.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "What is this?",
                                    icon: ub.CircleInformationIcon,
                                    onClick: t,
                                });
                            },
                        }),
                        (0, r.jsx)(b.c, {}),
                    ],
                }),
                null == e
                    ? (0, r.jsx)(p.$, {
                          variant: "primary",
                          text: "Enable Theme Override",
                          onClick: () => t({ mode: "nitro", themeType: null, themeColors: uy }),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(nj.e, {
                                  children: (0, r.jsx)(p.$, {
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
                                  options: uE,
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
                                            (0, r.jsx)(p.$, {
                                                variant: "secondary",
                                                text: "Reset Colors",
                                                onClick: () => t({ ...e, themeColors: uy }),
                                            }),
                                            (0, r.jsxs)(t0.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(g.E, {
                                                        variant: "body-md/medium",
                                                        color: "text-strong",
                                                        children: "Primary Color",
                                                    }),
                                                    (0, r.jsx)(uj.VN, {
                                                        wrapperComponentType: "div",
                                                        showEyeDropper: !0,
                                                        eagerUpdate: !0,
                                                        value: e.themeColors?.[0] ?? 0,
                                                        onChange: (a) =>
                                                            t({ ...e, themeColors: [a, e.themeColors?.[1] ?? null] }),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)(t0.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(g.E, {
                                                        variant: "body-md/medium",
                                                        color: "text-strong",
                                                        children: "Secondary Color",
                                                    }),
                                                    (0, r.jsx)(uj.VN, {
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
                                  : (0, r.jsxs)(t0.B, {
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(j.l, {
                                                label: "Theme Type",
                                                selectionMode: "single",
                                                value: e.themeType,
                                                options: Object.values(ej.NJ8).map((e) => ({
                                                    id: e,
                                                    label: e,
                                                    value: e,
                                                })),
                                                onSelectionChange: (a) => t({ ...e, themeType: a }),
                                                clearable: !0,
                                                disabled: s,
                                            }),
                                            s &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsx)(g.E, {
                                                            variant: "body-sm/normal",
                                                            color: "text-feedback-warning",
                                                            children:
                                                                "You have an active custom theme so setting a theme type does nothing.",
                                                        }),
                                                        (0, r.jsx)(g.E, {
                                                            variant: "body-sm/normal",
                                                            color: "text-muted",
                                                            children:
                                                                "Your custom theme will be saved and can be restored manually, or automatically when you clear the override.",
                                                        }),
                                                        (0, r.jsx)(p.$, {
                                                            variant: "critical-secondary",
                                                            size: "sm",
                                                            text: "Use System Theme",
                                                            onClick: function () {
                                                                (i?.customUserThemeSettings != null &&
                                                                    n({
                                                                        theme: l,
                                                                        customUserThemeSettings:
                                                                            i.customUserThemeSettings,
                                                                    }),
                                                                    (0, cq.u_)({ theme: "system" }));
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            null != a &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsx)(g.E, {
                                                            variant: "body-sm/normal",
                                                            color: "text-muted",
                                                            children:
                                                                "Your custom theme will be automatically restored when you clear the override.",
                                                        }),
                                                        (0, r.jsx)(p.$, {
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
var uS = a(141931),
    u_ = a(306173),
    uN = a(142617),
    uA = a(719718),
    uk = a(925433),
    uI = a(225123),
    uD = a(237984),
    uT = a(43203),
    uR = a(349435),
    uO = a(674272),
    uw = a(466034),
    uM = a(10094),
    uP = a(683760);
function uL() {
    let e = (0, d.bG)([eg.default], () => eg.default.getCurrentUser()),
        t = (0, d.bG)([uP.A], () => {
            let e = uP.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        a = (0, d.bG)([uP.A], () => uP.A.getPremiumTypeOverride());
    return (0, r.jsxs)(t0.B, {
        gap: 16,
        children: [
            (0, r.jsx)(j.l, {
                label: "Override Client-Side Premium Type",
                options: tF.Jm,
                value: a,
                onSelectionChange: (t) => {
                    (0, uM.O)(t, e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(l8.Q, {
                onClick: () => {
                    (0, uM.O)(void 0, e);
                },
                text: "Reset premium type override",
            }),
            (0, r.jsx)(sM.J, {
                label: "Override Client-Side Account Created At Date",
                value: n$()(t),
                onSelect: (e) => {
                    var t;
                    return ((t = e.toISOString()), void (0, uM.Y)(new Date(t)));
                },
            }),
            (0, r.jsx)(l8.Q, { onClick: () => (0, uM.Y)(void 0), text: "Reset account created at override" }),
        ],
    });
}
var uU = a(253400),
    uG = a(327337),
    uB = a(431804),
    uF = a(377722),
    u$ = a(221851);
function uV() {
    throw Error("Send help");
}
function uW() {
    let e = cK.j0.useSetting(),
        t = (0, uN.FX)("DevToolsQuickActions"),
        n = (0, d.bG)([uA.A], () => uA.A.isFetching),
        [l, i] = o.useState(!1);
    return l
        ? {}
        : (0, r.jsxs)(x.Ip, {
              children: [
                  (0, r.jsx)("div", { className: ea()(uF.N, u$.SX), children: (0, r.jsx)(uL, {}) }),
                  (0, r.jsx)("div", {
                      className: ea()(uF.N, u$.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () => (0, uO.A)({ source: uB.y.KEYBIND }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: ea()(uF.N, u$.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e;
                              return (
                                  (e = r7.Ay.getChannelId() ?? "21154681615024128"),
                                  void (0, P.mM)(
                                      async () => {
                                          let { default: t } = await Promise.all([
                                              a.e(456510),
                                              a.e(770940),
                                              a.e(302033),
                                              a.e(882830),
                                              a.e(120884),
                                          ]).then(a.bind(a, 556127));
                                          return (a) =>
                                              (0, r.jsx)(t, {
                                                  otherUserId: "9876543210",
                                                  channelId: e,
                                                  warningId: "test-warning-id",
                                                  warningType: uR._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                  ...a,
                                              });
                                      },
                                      { modalKey: uG.V },
                                  )
                              );
                          },
                      }),
                  }),
                  t &&
                      (0, r.jsx)("div", {
                          className: ea()(uF.N, u$.QB),
                          children: (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Launch Checkpoint",
                              loading: n,
                              onClick: () => (0, uk.D)("devtools"),
                          }),
                      }),
                  (0, r.jsx)("div", {
                      className: ea()(uF.N, u$.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Captcha Test Tool",
                          onClick: () =>
                              void (0, P.mM)(
                                  async () => {
                                      let { default: e } = await a.e(842213).then(a.bind(a, 881092));
                                      return (t) => (0, r.jsx)(e, { ...t });
                                  },
                                  { onCloseCallback: void 0 },
                              ),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: ea()(uF.N, u$.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Accept Invite Modal",
                          onClick: () => (0, uT.$)("fortnite", "DevTools Quick Actions"),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: ea()(uF.N, u$.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: u_.Oy,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: ea()(uF.N, u$.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Store Error",
                          onClick: () => {
                              let e = uI.A.getSocket();
                              C.h.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((t) => {
                                  e.resetSocketOnDispatchError({ error: t, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
                              });
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: ea()(uF.N, u$.QB),
                      children: (0, r.jsx)(m.d, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => cK.j0.updateSetting(e),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: ea()(uF.N, u$.QB),
                      children: [
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, uD.o)(),
                          }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Reset Socket",
                              onClick: () => {
                                  (uI.A.getSocket().close(), uI.A.getSocket().connect());
                              },
                          }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Clear Caches",
                              onClick: () => {
                                  C.h.dispatch({
                                      type: "CLEAR_CACHES",
                                      reason: "Requested by user",
                                      preventWritingCachesAgainThisSession: !0,
                                      resetSocket: !0,
                                  });
                              },
                          }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Show TOTP Success",
                              onClick: () => (0, uw.sy)(!0),
                          }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Trigger Suspicious Sessions Notifications",
                              onClick: function () {
                                  ia.Bo.post({ url: ej.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                              },
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: ea()(uF.N, u$.QB),
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
                              onSelectionChange: (e) => null != e && uU.Ay.crash(e),
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
                                      value: uS.qQ.RendererProcessDelayed,
                                      id: "delayed_exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in renderer process",
                                      value: uS.qQ.RendererProcess,
                                      id: "exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in main process",
                                      value: uS.qQ.MainProcess,
                                      id: "exception_in_main_process",
                                  },
                              ],
                              onSelectionChange: (e) => (null != e ? void uU.Ay.triggerJSException(e) : void 0),
                          }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "React Crash",
                              onClick: () => i(!0),
                          }),
                          (0, r.jsx)(p.$, { variant: "primary", size: "sm", text: "onClick Throw", onClick: uV }),
                      ],
                  }),
              ],
          });
}
var uH = a(457112),
    uz = a(653887),
    uK = a(799226);
function uY() {
    let e = Object.keys(uH).map((e) => (0, r.jsx)(uQ, { riveName: e }, e));
    return (0, r.jsx)(x.Ar, {
        style: { maxHeight: "100%" },
        children: (0, r.jsxs)(t0.B, {
            gap: 24,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsx)(ei.D, { variant: "heading-lg/medium", children: "Rive Inspector" }),
                (0, r.jsx)(g.E, {
                    variant: "body-md/normal",
                    children:
                        "Upload a .riv file to view the animation and interact with its data binding configuration.",
                }),
                (0, r.jsx)(uq, {}),
                (0, r.jsx)(ei.D, { variant: "heading-lg/medium", children: "Rive Overrides" }),
                (0, r.jsx)(g.E, {
                    variant: "body-md/normal",
                    children:
                        "Upload a .riv file to replace an existing Rive animation in the app with the new one. Useful for previewing updated versions of existing animations before uploading them via the Rive pipeline.",
                }),
                e,
            ],
        }),
    });
}
function uq() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(null),
        [l, i] = o.useState(null),
        [s, d] = o.useState([]),
        c = o.useRef(null),
        [u, m] = o.useState(400),
        [h, p] = o.useState(400),
        g = o.useCallback(() => {
            setTimeout(() => {
                (i(c.current?.getProperties() ?? {}), d(c.current?.getArtboards() ?? []), n({}));
            }, 1e3);
        }, []),
        x = o.useCallback(
            (e, t) => {
                null != a && n((a) => ({ ...a, [e]: { type: l?.[e]?.type, value: t } }));
            },
            [l, a],
        ),
        v = o.useCallback((e) => {
            (i(null), n(null), t(e));
        }, []);
    return (0, r.jsxs)(t0.B, {
        gap: 16,
        children: [
            (0, r.jsx)(uQ, { riveName: "Rive inspector", onRiveLoad: v }),
            null != e &&
                (0, r.jsx)("div", {
                    style: { width: u, height: h },
                    children: (0, r.jsx)(uz._, { src: e, ref: c, onLoad: g, dynamicDataBinding: a ?? {} }),
                }),
            null != e && null == a ? (0, r.jsx)(tg.y, {}) : null,
            null != a &&
                (0, r.jsxs)(t0.B, {
                    children: [
                        (0, r.jsxs)(t0.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(ei.D, { variant: "heading-lg/medium", children: "Dimensions" }),
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
                                    onChange: (e) => p(parseInt(e)),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(t0.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(ei.D, { variant: "heading-lg/medium", children: "Data Binding" }),
                                Object.keys(l ?? {}).map((e) =>
                                    (0, r.jsx)(
                                        uJ,
                                        {
                                            property: e,
                                            type: l?.[e]?.type,
                                            value: a?.[e]?.value ?? l?.[e]?.value,
                                            onChange: (t) => x(e, t),
                                            artboards: s,
                                            values: l?.[e]?.values,
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
function uJ(e) {
    let { property: t, type: a, value: n, onChange: l, artboards: i, values: s } = e;
    switch (a) {
        case "string":
            return (0, r.jsx)(f.k, { label: t, value: n, onChange: (e) => l(e) });
        case "number":
            return (0, r.jsx)(f.k, { type: "number", label: t, value: n, onChange: (e) => l(parseInt(e)) });
        case "boolean":
            return (0, r.jsx)(m.d, { label: t, checked: n, onChange: (e) => l(e) });
        case "trigger":
            return (0, r.jsx)(p.$, { text: `Trigger ${t}`, onClick: () => l(Number.isSafeInteger(n) ? n + 1 : 1) });
        case "image":
            return (0, r.jsx)(f.k, { label: t, value: n, onChange: (e) => l(e) });
        case "color":
            return (0, r.jsx)(ak.Z, {
                selectionMode: "single",
                label: t,
                value: n,
                onSelectionChange: (e) => l(e),
                closeOnSelect: !0,
                placeholder: "Select a color...",
                options: Object.entries(e1.A.colors).map((e) => {
                    let [t, a] = e;
                    return { label: t, value: a, id: t };
                }),
            });
        case "artboard":
            return (0, r.jsx)(ak.Z, {
                selectionMode: "single",
                label: t,
                value: n,
                onSelectionChange: (e) => l(e),
                closeOnSelect: !0,
                placeholder: "Select an artboard...",
                options: i.map((e) => ({ label: e, value: e, id: e })),
            });
        case "enum":
            return (0, r.jsx)(ak.Z, {
                selectionMode: "single",
                label: t,
                value: n,
                onSelectionChange: (e) => l(e),
                closeOnSelect: !0,
                placeholder: "Select a value...",
                options: (s ?? []).map((e) => ({ label: e, value: e, id: e })),
            });
        default:
            return null;
    }
}
function uQ(e) {
    let { riveName: t, onRiveLoad: a } = e,
        n = uH[t]?.riveSrc,
        l = null == n,
        i = o.useRef(null),
        s = (0, uK.Gy)(n);
    return (0, r.jsxs)(
        t0.B,
        {
            gap: 8,
            children: [
                (0, r.jsx)("label", { children: t }),
                (0, r.jsxs)(t0.B, {
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
                                    (null != n && (0, uK.DS)(n, t), a?.(t));
                                }),
                                    l.readAsArrayBuffer(t));
                            },
                            ref: i,
                        }),
                        (0, r.jsx)(eX.K, {
                            "aria-label": `Clear override for ${t}`,
                            onClick: function () {
                                (null != i.current && (i.current.value = ""),
                                    null != n && (0, uK.DS)(n, null),
                                    a?.(null));
                            },
                            icon: nK.TrashIcon,
                            variant: "critical-primary",
                            size: "sm",
                            disabled: null == s && !l,
                        }),
                    ],
                }),
            ],
        },
        t,
    );
}
var uX = a(926919),
    uZ = a(513521),
    u0 = a(111162);
function u1() {
    let e = (0, d.bG)([u0.default], () => u0.default.routingKeyTags);
    return (0, r.jsx)(lP.Ch, {
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-16)" },
            children: (0, r.jsxs)(u.n, {
                label: "Routing Key",
                children: [
                    (0, r.jsx)(g.E, {
                        variant: "body-md/normal",
                        color: "text-muted",
                        children:
                            "A routing key is an opaque set of strings added to outbound network requests, which may be used for debugging and testing of the network path.",
                    }),
                    (0, r.jsxs)(t0.B, {
                        gap: 8,
                        children: [
                            (0, r.jsx)(ei.D, { variant: "heading-sm/medium", children: "Overrides" }),
                            (0, r.jsx)(g.E, {
                                variant: "body-sm/normal",
                                color: "text-muted",
                                children: "Manually configure the routing key values",
                            }),
                            (0, r.jsx)(uZ.A, {
                                tagsLabel: "Routing Key Values",
                                placeholder: "Enter new value...",
                                tags: e.map((e) => ({ id: e, label: e })),
                                onAddTag: function (t) {
                                    e.includes(t) || (0, uX.f)([...e, t]);
                                },
                                onRemoveTag: function (t) {
                                    (0, uX.f)(e.filter((e) => !t.has(e)));
                                },
                            }),
                            e.length > 0
                                ? (0, r.jsx)(p.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: "Clear all",
                                      onClick: () => (0, uX.f)([]),
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
        }),
    });
}
var u2 = a(344292);
function u3(e) {
    let { game: t, meta: a } = e;
    return (0, r.jsxs)("div", {
        className: u2.nM,
        children: [
            (0, r.jsxs)("div", {
                className: u2.uV,
                children: [
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/semibold",
                        className: u2._k,
                        children: null == t.name || "" === t.name ? "(no name)" : t.name,
                    }),
                    null != a && (0, r.jsx)(g.E, { variant: "body-xs/normal", className: u2.Bq, children: a }),
                ],
            }),
            (0, r.jsx)(g.E, {
                variant: "body-xs/normal",
                className: u2.C0,
                children: null == t.exePath || "" === t.exePath ? "(no path)" : t.exePath,
            }),
            (0, r.jsxs)(g.E, {
                variant: "body-xs/normal",
                className: u2.en,
                children: ["pid ", t.pid, " \xb7 ", t.id ?? "(no id)"],
            }),
        ],
    });
}
function u6(e) {
    let { title: t, count: a, entries: n, renderMeta: l } = e;
    return (0, r.jsxs)(t0.B, {
        gap: 4,
        children: [
            (0, r.jsxs)(ei.D, { variant: "heading-xs/semibold", children: [t, " (", a, ")"] }),
            0 === n.length
                ? (0, r.jsx)(g.E, { variant: "body-sm/normal", className: u2.Ie, children: "none" })
                : (0, r.jsx)(t0.B, {
                      gap: 0,
                      children: n.map((e) =>
                          (0, r.jsx)(
                              u3,
                              { game: e.game, meta: l?.(e.outcome) },
                              `${e.game.pid}-${e.game.id ?? e.game.exeName}`,
                          ),
                      ),
                  }),
        ],
    });
}
function u5(e) {
    return "blocked" !== e.kind
        ? null
        : null != e.matchedExe
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    "blocked by exe substring ",
                    (0, r.jsx)("span", { className: u2.ti, children: e.matchedExe }),
                ],
            })
          : null != e.matchedPattern
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      "blocked by pattern ",
                      (0, r.jsx)("span", { className: u2.ti, children: e.matchedPattern }),
                  ],
              })
            : "blocked (no reason captured)";
}
function u8(e) {
    return "observed_app" !== e.kind
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  "matched observed app",
                  " ",
                  (0, r.jsxs)("span", {
                      className: u2.ti,
                      children: [e.appName, e.streamerTool ? " (streamer tool)" : ""],
                  }),
              ],
          });
}
function u4() {
    var e;
    let t = (0, d.bG)([N.Ay], () => N.Ay.getDetectionDebug()),
        a = o.useMemo(() => {
            let e = [],
                a = [],
                n = [],
                l = [];
            if (null != t)
                for (let i of t.entries)
                    switch (i.outcome.kind) {
                        case "passed":
                            e.push(i);
                            break;
                        case "non_game":
                            a.push(i);
                            break;
                        case "observed_app":
                            n.push(i);
                            break;
                        case "blocked":
                            l.push(i);
                    }
            return { passed: e, nonGames: a, observedApps: n, blocked: l };
        }, [t]);
    return (0, r.jsx)("div", {
        className: ea()(t6.nd, u2.kL),
        children: (0, r.jsxs)(t0.B, {
            gap: 16,
            padding: 12,
            className: u2.rf,
            children: [
                (0, r.jsxs)(t0.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: "Running Game Detection" }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: [
                                "Inspect what native is reporting, which entries get filtered by the JS pipeline, and what ultimately lands in ",
                                (0, r.jsx)("code", { children: "RunningGameStore" }),
                                ". Updates whenever native reports a change.",
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)(t0.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(ei.D, { variant: "heading-xs/semibold", children: "Status" }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            children: [
                                (0, r.jsx)("strong", { children: "Last update:" }),
                                " ",
                                null == (e = t?.timestamp) ? "never" : new Date(e).toLocaleTimeString(),
                            ],
                        }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            children: [
                                (0, r.jsx)("strong", { children: "From native:" }),
                                " ",
                                t?.totalFromNative ?? 0,
                            ],
                        }),
                        (0, r.jsxs)(g.E, {
                            variant: "body-sm/normal",
                            children: [
                                (0, r.jsx)("strong", { children: "Passed to RunningGameStore:" }),
                                " ",
                                a.passed.length,
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(u6, { title: "Running games", count: a.passed.length, entries: a.passed }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(u6, { title: "Filtered: non-game", count: a.nonGames.length, entries: a.nonGames }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(u6, {
                    title: "Filtered: matched a hardcoded observed app",
                    count: a.observedApps.length,
                    entries: a.observedApps,
                    renderMeta: u8,
                }),
                (0, r.jsx)(b.c, {}),
                (0, r.jsx)(u6, {
                    title: "Filtered: blocklist",
                    count: a.blocked.length,
                    entries: a.blocked,
                    renderMeta: u5,
                }),
            ],
        }),
    });
}
var u9 = a(290136),
    u7 = a(893007),
    me = a(629584),
    mt = a(600239),
    ma = a(940622),
    mn = a(961895),
    ml = a(343991),
    mi = a(607027);
function ms() {
    (0, P.mM)(
        async () => {
            let { default: e } = await Promise.resolve().then(a.bind(a, 343991));
            return (t) =>
                (0, r.jsx)(e, {
                    title: "No image or video files found!",
                    help: "Please drop one or more image or video files.",
                    ...t,
                });
        },
        { modalKey: ml.D },
    );
}
function mr(e) {
    (e.stopPropagation(), e.preventDefault());
}
let mo = (e) => {
    let { className: t, onDrop: a, children: n } = e,
        [l, i] = o.useState(!1),
        s = o.useRef(null),
        d = o.useCallback((e) => {
            (mr(e), i(!0), (0, P.Oo)(ml.D));
        }, []),
        c = o.useCallback((e) => {
            mr(e);
            let t = s.current,
                a = e.relatedTarget;
            (null != a && (null == t || t.contains(a))) || i(!1);
        }, []),
        u = o.useCallback(
            async (e) => {
                (mr(e), i(!1));
                let t = e.dataTransfer;
                if (null == t) return void ms();
                let n = await Promise.all(Array.from(t.items).map((e) => e.webkitGetAsEntry() ?? e.getAsEntry())).then(
                    (e) => e.filter((e) => null != e),
                );
                n.length > 0 ? a(n) : ms();
            },
            [a],
        );
    return (0, r.jsxs)("div", {
        ref: s,
        className: ea()(t, mi.iE),
        onDragEnter: d,
        onDragOver: mr,
        onDragLeave: c,
        onDrop: u,
        children: [
            n,
            l &&
                (0, r.jsx)("div", {
                    className: mi.d2,
                    children: (0, r.jsxs)("div", {
                        className: mi.vW,
                        children: [
                            (0, r.jsx)(mn.A, { icons: eT.ir }),
                            (0, r.jsx)(ei.D, { variant: "heading-lg/semibold", children: "Upload Shop Assets" }),
                            (0, r.jsxs)("div", {
                                className: mi.GA,
                                children: [
                                    (0, r.jsx)(g.E, {
                                        variant: "body-sm/normal",
                                        children: "Drop file(s) into this panel to preview Shop assets!",
                                    }),
                                    (0, r.jsxs)(g.E, {
                                        variant: "body-sm/normal",
                                        children: [
                                            "Click",
                                            (0, r.jsx)(u9.CircleQuestionIcon, {
                                                className: mi.q4,
                                                size: "xs",
                                                color: e1.A.colors.TEXT_DEFAULT,
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
var md = a(374380),
    mc = a(597404),
    mu = a(455256);
let mm = new Set([
        ez.RN.HERO_BANNER_STATIC,
        ez.RN.HERO_LOGO,
        ez.RN.PDP_BACKGROUND,
        ez.RN.LOGO,
        ez.RN.MOBILE_BANNER,
        ez.RN.MOBILE_BACKGROUND,
    ]),
    mh = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
    mp = { max: 5e6, warn: 2e6 },
    mg = { max: 3e6, warn: 1e6 },
    mx = { max: 2e6, warn: 1e6 },
    mv = { max: 1e6, warn: 5e5 },
    mb = { max: 25e4, warn: 5e4 },
    mj = {
        [mu.J.PROFILE_EFFECT]: mp,
        [mu.J.AVATAR_DECORATION]: mg,
        [mu.J.PROFILE_FRAME]: mx,
        [ez.RN.HERO_BANNER_ANIMATED]: mp,
        [ez.RN.HERO_BANNER_RIVE]: mp,
        [ez.RN.CATALOG_BANNER_RIVE]: mp,
        [ez.RN.SHOP_BUTTON_BG_HOVER]: mg,
        [ez.RN.SHOP_BUTTON_BG_HOVER_DARK]: mg,
        [ez.RN.SHOP_BUTTON_BG_HOVER_LIGHT]: mg,
        [ez.RN.SHOP_BUTTON_BG_RESTING]: mg,
        [ez.RN.SHOP_BUTTON_BG_RESTING_DARK]: mg,
        [ez.RN.SHOP_BUTTON_BG_RESTING_LIGHT]: mg,
        [ez.RN.HERO_BANNER_STATIC]: mx,
        [ez.RN.UPSELL_BANNER]: mv,
        [ez.RN.UPSELL_BANNER_POPOUT]: mb,
        [ez.RN.MOBILE_BANNER]: mv,
        [ez.RN.MOBILE_BACKGROUND]: mb,
        [ez.RN.MOBILE_HERO]: mv,
        [ez.RN.PDP_BACKGROUND]: mb,
        [ez.RN.LOGO]: mb,
        [ez.RN.TAB_TOOLTIP]: mb,
    },
    mf = [ez.Kx.COLLECTION],
    my = [ez.Kx.AVATAR_DECORATIONS, ez.Kx.FRAMES, ez.Kx.NAMEPLATES, ez.Kx.PROFILE_EFFECTS],
    mE = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/;
function mC(e) {
    let { names: t, addError: a } = e,
        n = t.filter((e) => !mE.test(e));
    n.length > 0 && a("File names must be in lowercase snake case", n);
}
function mS(e, t, a, n, l) {
    let i = t.size,
        s = i > 1e6 ? `${(i / 1e6).toFixed(2)}MB` : `${(i / 1e3).toFixed(2)}KB`,
        r = `${l ?? t.name} - ${s}`;
    if (i > e.max) {
        let t = e.max > 1e6 ? `${Math.round(e.max / 1e6)}MB` : `${Math.round(e.max / 1e3)}KB`;
        a("Files exceed the recommended size limit - make sure they are optimized!", [`${r} (max: ${t})`]);
    } else i > e.warn && n("Files are a tad chonky - are you sure they're optimized?", [`${r}`]);
}
function m_(e, t, a, n) {
    let l = mj[e];
    if (null != l) for (let e of t) e.name.endsWith(".txt") || mS(l, e, a, n);
}
function mN(e) {
    let t = ez.aL[e];
    return `${e} (${t.map((e) => `.${e}`).join(", ")})`;
}
let mA = ["png", "jpg"];
async function mk(e, t) {
    if (e.length < 2) return null;
    let a = (
        await Promise.all(
            e.map(async (e) => {
                try {
                    return t(
                        await (async function (e) {
                            let t = URL.createObjectURL(e);
                            try {
                                return await (0, ez.Lv)(t);
                            } finally {
                                URL.revokeObjectURL(t);
                            }
                        })(e),
                    );
                } catch {
                    return null;
                }
            }),
        )
    ).filter((e) => null != e);
    return a.length < 2 || new Set(a).size <= 1 ? null : a;
}
function mI(e) {
    return e.map((e) => `${e}px`).join(", ");
}
var mD = a(275537);
let mT = o.createContext({ setDropHandler: () => {} }),
    mR = [
        { name: "Preview", value: "preview" },
        { name: "Validate", value: "validate" },
    ],
    mO = { id: "none", label: "[none selected]", value: null };
function mw() {
    (0, P.kB)(mt.k)
        ? (0, P.Oo)(mt.k)
        : (0, P.mM)(
              async () => {
                  let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                  return (t) => (0, r.jsx)(e, { ...t });
              },
              { modalKey: mt.k, onCloseRequest: () => (0, P.Oo)(mt.k) },
          );
}
function mM() {
    (0, P.kB)(mt.g)
        ? (0, P.Oo)(mt.g)
        : (0, P.mM)(
              async () => {
                  let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                  return (t) => (0, r.jsx)(e, { ...t });
              },
              { modalKey: mt.g, onCloseRequest: () => (0, P.Oo)(mt.g) },
          );
}
function mP() {
    let e = (0, eK.pF)(),
        { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: a } = (0, ma.JE)(),
        n = o.useMemo(() => [mO, ...e.map((e) => ({ id: e.skuId, label: e.name, value: e.skuId }))], [e]);
    return 0 === e.length
        ? null
        : (0, r.jsxs)("div", {
              className: mD.kO,
              children: [
                  (0, r.jsx)(aq.h, { size: 16 }),
                  (0, r.jsxs)("div", {
                      className: mD.wR,
                      children: [
                          (0, r.jsx)(ei.D, {
                              variant: "heading-xs/semibold",
                              children: `Profile Effect (${e.length} to preview)`,
                          }),
                          (0, r.jsx)(eX.K, {
                              variant: "icon-only",
                              size: "sm",
                              onClick: mM,
                              icon: u9.CircleQuestionIcon,
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
function mL() {
    let e = (0, ma.bA)(),
        { previewProfileFrameKey: t, setPreviewProfileFrameKey: a } = (0, ma.JE)(),
        n = o.useMemo(() => [mO, ...e.map((e) => ({ id: e.key, label: e.key, value: e.key }))], [e]);
    return 0 === e.length
        ? null
        : (0, r.jsxs)("div", {
              className: mD.kO,
              children: [
                  (0, r.jsx)(aq.h, { size: 16 }),
                  (0, r.jsx)(ei.D, {
                      variant: "heading-xs/semibold",
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
function mU() {
    let { previewAvatarDecorationKey: e, setPreviewAvatarDecorationKey: t } = (0, ma.JE)(),
        { avatarDecorationAssets: a } = (0, ma.NE)(),
        n = o.useMemo(() => [mO, ...a.map((e) => ({ id: e.name, label: e.name, value: e.name }))], [a]);
    return 0 === a.length
        ? null
        : (0, r.jsxs)("div", {
              className: mD.kO,
              children: [
                  (0, r.jsx)(aq.h, { size: 16 }),
                  (0, r.jsx)(ei.D, {
                      variant: "heading-xs/semibold",
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
let mG = new Set([ez.RN.HERO_BANNER_STATIC, ez.RN.HERO_BANNER_ANIMATED, ez.RN.HERO_BANNER_RIVE]);
function mB(e) {
    let { clearAssets: t, clearIgnoredFiles: a } = e,
        { collectionAssets: n } = (0, ma.NE)(),
        {
            deleteCollectionAsset: l,
            clearAssets: i,
            heroLogoMaxHeight: s,
            setHeroLogoMaxHeight: d,
            heroResponsive: c,
            setHeroResponsive: u,
        } = (0, ma.JE)(),
        h = o.useMemo(() => Object.values(n).map((e) => ({ label: e.name, value: e.type })), [n]),
        x = h.some((e) => e.value === ez.RN.HERO_LOGO),
        v = h.some((e) => mG.has(e.value)),
        b = o.useCallback((e) => l(e), [l]),
        j = o.useCallback(() => {
            (i(), t(), a());
        }, [i, t, a]);
    return 0 === h.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(aq.h, { size: 16 }),
                  (x || v) &&
                      (0, r.jsxs)("div", {
                          className: mD.v7,
                          children: [
                              x &&
                                  (0, r.jsxs)("div", {
                                      className: mD.cj,
                                      children: [
                                          (0, r.jsx)(g.E, {
                                              variant: "body-md/normal",
                                              className: mD.Me,
                                              children: "Logo size",
                                          }),
                                          (0, r.jsx)("div", {
                                              className: mD.TQ,
                                              children: (0, r.jsx)(u7.A, {
                                                  minValue: 90,
                                                  maxValue: 200,
                                                  defaultValue: s ?? 90,
                                                  onChangeEnd: (e) => d(Math.round(e)),
                                                  formatValue: (e) => `${Math.round(e)}px`,
                                                  "aria-label": "Hero logo max height",
                                              }),
                                          }),
                                          (0, r.jsx)(g.E, { variant: "body-sm/normal", children: `${s ?? 90}px` }),
                                      ],
                                  }),
                              v &&
                                  (0, r.jsxs)("div", {
                                      className: mD.sy,
                                      children: [
                                          (0, r.jsx)(m.d, { checked: c, onChange: u }),
                                          (0, r.jsx)(g.E, { variant: "body-md/normal", children: "Responsive Hero" }),
                                      ],
                                  }),
                          ],
                      }),
                  (0, r.jsx)(aq.h, { size: 16 }),
                  (0, r.jsxs)("div", {
                      className: mD.wR,
                      children: [
                          (0, r.jsx)(ei.D, { variant: "heading-lg/semibold", children: "Uploaded Assets" }),
                          (0, r.jsx)(p.$, { variant: "critical-primary", size: "sm", onClick: j, text: "Clear All" }),
                      ],
                  }),
                  (0, r.jsx)("ul", {
                      children: h.map((e) =>
                          (0, r.jsxs)(
                              "li",
                              {
                                  className: mD._0,
                                  children: [
                                      (0, r.jsx)(eX.K, {
                                          variant: "icon-only",
                                          size: "sm",
                                          onClick: () => b(e.value),
                                          icon: ed.XSmallIcon,
                                          "aria-label": "Remove asset",
                                      }),
                                      (0, r.jsx)(g.E, { variant: "body-md/normal", children: e.label }),
                                  ],
                              },
                              e.value,
                          ),
                      ),
                  }),
              ],
          });
}
function mF(e) {
    let { ignoredFiles: t, handleClearIgnoredFiles: a } = e;
    return 0 === t.length
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(aq.h, { size: 16 }),
                  (0, r.jsxs)("div", {
                      className: mD.wR,
                      children: [
                          (0, r.jsx)(ei.D, { variant: "heading-lg/semibold", children: "Ignored Files" }),
                          (0, r.jsx)(p.$, { variant: "primary", size: "sm", onClick: a, text: "Clear" }),
                      ],
                  }),
                  (0, r.jsx)("ul", {
                      children: t.map((e, t) =>
                          (0, r.jsx)(
                              "li",
                              {
                                  className: mD.yk,
                                  children: (0, r.jsx)(g.E, { variant: "body-md/normal", children: e }),
                              },
                              `${e}-${t}`,
                          ),
                      ),
                  }),
              ],
          });
}
function m$() {
    let {
            validateShopAssetPackage: e,
            reset: t,
            validationComplete: a,
            warnings: n,
            errors: l,
        } = (function () {
            let [e, t] = o.useState(!1),
                [a, n] = o.useState({}),
                [l, i] = o.useState({}),
                s = o.useCallback(function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    i((a) => {
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
                    (t(!1), i({}), n({}));
                }, []);
            return {
                validationComplete: e,
                errors: l,
                warnings: a,
                validateShopAssetPackage: o.useCallback(
                    async (e) => {
                        try {
                            if (0 === e.length) return void s("No files found");
                            if (e.length > 1) return void s("Uploaded multiple files. Expected 1 directory.");
                            let t = e[0];
                            if (!t.isDirectory) return void s("Uploaded a file. Expected a directory.");
                            let a = await (async function (e) {
                                let t = e.createReader(),
                                    a = await new Promise((e) => t.readEntries(e)),
                                    n = new Set();
                                for (let e of a) e.isDirectory && n.add(e.name);
                                let l = mf.filter((e) => !n.has(e));
                                return (my.some((e) => n.has(e)) || l.push(`at least one of: ${my.join(", ")}`), l);
                            })(t);
                            a.length > 0 && s("Missing required directories", a);
                            let n = await (0, ez.eg)([t]);
                            ((function (e) {
                                let { files: t, addError: a, addWarning: n } = e;
                                for (let e of t.collectionFiles) {
                                    let t = (0, ez.pd)(e),
                                        l = null != t ? mj[t] : null;
                                    null != l && mS(l, e, a, n);
                                }
                                mC({ names: t.collectionFiles.map((e) => e.name), addError: a });
                                let l = new Set(t.collectionFiles.map((e) => (0, ez.pd)(e)).filter((e) => null != e)),
                                    i = Array.from(mm)
                                        .filter((e) => !l.has(e))
                                        .map(mN);
                                i.length > 0 && a("Missing required files", i);
                                let s = Object.values(ez.RN)
                                    .filter((e) => !mm.has(e))
                                    .filter((e) => !l.has(e))
                                    .map(mN);
                                s.length > 0 && n("Missing optional assets", s);
                            })({ files: n, addError: s, addWarning: r }),
                                (function (e) {
                                    let { files: t, addError: a, addWarning: n } = e;
                                    (mC({ names: Object.keys(t.profileEffectFilesMap), addError: a }),
                                        Object.entries(t.profileEffectFilesMap).forEach((e) => {
                                            let [t, l] = e,
                                                i = l.map((e) => e.name);
                                            (mC({
                                                names: i.map((e) => {
                                                    let t = e.indexOf("-");
                                                    return e.substring(0, t > 0 ? t : e.length);
                                                }),
                                                addError: a,
                                            }),
                                                m_(mu.J.PROFILE_EFFECT, l, a, n));
                                            let s = mh
                                                .filter((e) => !i.some((t) => t.startsWith(e) && t.endsWith(".png")))
                                                .map((e) => `${t}/${e}`);
                                            (s.length > 0 && a("Missing required PFX files with prefix", s),
                                                i.some((e) => e.endsWith(".txt")) ||
                                                    a(
                                                        "PFX configs required - please include both exports! (exception: duplicate variant configs are optional)",
                                                        [t],
                                                    ));
                                            let r = i
                                                .filter((e) => !mh.some((t) => e.startsWith(t)) && !e.endsWith(".txt"))
                                                .map((e) => `${t}/${e}`);
                                            r.length > 0 && n("Contains unrecognized files", r);
                                        }));
                                })({ files: n, addError: s, addWarning: r }),
                                (function (e) {
                                    let { files: t, addError: a, addWarning: n } = e;
                                    (mC({ names: t.avatarDecorationFiles.map((e) => e.name), addError: a }),
                                        m_(mu.J.AVATAR_DECORATION, t.avatarDecorationFiles, a, n));
                                })({ files: n, addError: s, addWarning: r }),
                                (function (e) {
                                    let { files: t, addError: a, addWarning: n } = e,
                                        l = Object.keys(t.profileFrameDirsMap)
                                            .filter((e) => !mE.test(e))
                                            .map((e) => `${ez.Kx.FRAMES}/${e}`);
                                    l.length > 0 && a("File names must be in lowercase snake case", l);
                                    let i = mj[mu.J.PROFILE_FRAME];
                                    Object.entries(t.profileFrameDirsMap).forEach((e) => {
                                        let [t, l] = e,
                                            s = `${ez.Kx.FRAMES}/${t}`,
                                            r = l.previewFile?.name.split(".").pop()?.toLowerCase();
                                        ((null != l.previewFile && null != r && mA.includes(r)) ||
                                            a(
                                                "Missing required preview file for profile frame (preview.png or preview.jpg)",
                                                [`${s}/preview.{${mA.join("|")}}`],
                                            ),
                                            0 === l.layerFiles.length &&
                                                a(
                                                    "Profile frame must contain at least one foreground or background layer",
                                                    [`${s}/{foreground|background}/...`],
                                                ),
                                            l.unrecognizedSubdirs.length > 0 &&
                                                n(
                                                    "Profile frame contains unrecognized folders (expected foreground/, background/, or preview.png)",
                                                    l.unrecognizedSubdirs.map((e) => `${s}/${e}/`),
                                                ));
                                        let o = [];
                                        for (let { file: e, folder: t } of (null == l.previewFile ||
                                            mE.test(l.previewFile.name) ||
                                            o.push(`${s}/${l.previewFile.name}`),
                                        l.layerFiles))
                                            mE.test(e.name) || o.push(`${s}/${t}/${e.name}`);
                                        o.length > 0 && a("File names must be in lowercase snake case", o);
                                        let d = [];
                                        for (let { file: e, folder: t } of l.layerFiles) {
                                            let { parsed: a, errorType: n } = (0, mc.Mf)(e.name);
                                            if (null == a) {
                                                let a = null != n ? mc.h4[n] : "invalid";
                                                d.push(`${s}/${t}/${e.name}: ${a}`);
                                            }
                                        }
                                        if ((d.length > 0 && a("Invalid profile frame layer filenames", d), null != i))
                                            for (let { file: e, folder: t } of (null != l.previewFile &&
                                                mS(i, l.previewFile, a, n, `${s}/${l.previewFile.name}`),
                                            l.layerFiles))
                                                mS(i, e, a, n, `${s}/${t}/${e.name}`);
                                    });
                                })({ files: n, addError: s, addWarning: r }),
                                (function (e) {
                                    let { files: t, addWarning: a } = e;
                                    t.ignoredFilenames.length > 0 &&
                                        a("Contains unrecognized files", t.ignoredFilenames);
                                })({ files: n, addError: s, addWarning: r }),
                                await Promise.all([
                                    (async function (e, t) {
                                        for (let [a, n] of Object.entries(e.profileFrameDirsMap)) {
                                            let e = new Map();
                                            for (let { file: t } of n.layerFiles) {
                                                let { parsed: a } = (0, mc.Mf)(t.name);
                                                if (a?.type !== md.O.STAPLE) continue;
                                                let n = e.get(a.anchor) ?? [];
                                                (n.push(t), e.set(a.anchor, n));
                                            }
                                            for (let [n, l] of e) {
                                                let e = await mk(l, (e) => e.height);
                                                null != e &&
                                                    t(
                                                        "Staples with the same anchor (top/bottom) must all have the same height",
                                                        [`${a} (${String(n).toUpperCase()}) - ${mI(e)}`],
                                                    );
                                            }
                                        }
                                    })(n, s),
                                    (async function (e, t) {
                                        for (let [a, n] of Object.entries(e.profileFrameDirsMap)) {
                                            let e = n.layerFiles
                                                    .filter((e) => {
                                                        let { file: t } = e,
                                                            { parsed: a } = (0, mc.Mf)(t.name);
                                                        return (
                                                            a?.type === md.O.STAPLE ||
                                                            a?.type === md.O.BORDER ||
                                                            a?.type === md.O.RAIL
                                                        );
                                                    })
                                                    .map((e) => {
                                                        let { file: t } = e;
                                                        return t;
                                                    }),
                                                l = await mk(e, (e) => e.width);
                                            null != l &&
                                                t("All layers (staples, borders, rails) must have the same width", [
                                                    `${a} - ${mI(l)}`,
                                                ]);
                                        }
                                    })(n, s),
                                ]));
                        } finally {
                            t(!0);
                        }
                    },
                    [s, r],
                ),
                reset: d,
            };
        })(),
        i = Object.entries(l),
        s = Object.entries(n),
        d = i.length > 0,
        c = s.length > 0,
        { setDropHandler: u } = o.useContext(mT),
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
                          className: mD._f,
                          children: [
                              (0, r.jsx)(g.E, {
                                  variant: "body-md/normal",
                                  color: d ? "text-feedback-critical" : "text-default",
                                  children: `${i.length} errors`,
                              }),
                              (0, r.jsx)(g.E, {
                                  variant: "body-md/normal",
                                  color: c ? "text-feedback-warning" : "text-default",
                                  children: `${s.length} warnings`,
                              }),
                              (0, r.jsx)(p.$, { variant: "primary", size: "sm", onClick: t, text: "Reset" }),
                          ],
                      })
                    : (0, r.jsx)(g.E, { variant: "body-md/normal", children: "Drop asset folder to validate." }),
                (0, r.jsx)(aq.h, { size: 16 }),
                d &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(ei.D, { variant: "heading-lg/semibold", children: "Errors" }),
                            (0, r.jsx)(aq.h, { size: 8 }),
                            (0, r.jsx)("ul", {
                                className: mD.ck,
                                children: i.map((e, t) => {
                                    let [a, n] = e;
                                    return (0, r.jsxs)(
                                        "li",
                                        {
                                            children: [
                                                (0, r.jsx)(g.E, {
                                                    variant: "body-md/semibold",
                                                    color: "text-feedback-critical",
                                                    children: a,
                                                }),
                                                n.length > 0 &&
                                                    (0, r.jsx)("ul", {
                                                        className: mD.ck,
                                                        children: n.map((e, t) =>
                                                            (0, r.jsx)(
                                                                "li",
                                                                {
                                                                    children: (0, r.jsx)(g.E, {
                                                                        variant: "body-sm/normal",
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
                            (0, r.jsx)(ei.D, { variant: "heading-lg/semibold", children: "Warnings" }),
                            (0, r.jsx)(aq.h, { size: 8 }),
                            (0, r.jsx)("ul", {
                                className: mD.ck,
                                children: Object.entries(n).map((e, t) => {
                                    let [a, n] = e;
                                    return (0, r.jsxs)(
                                        "li",
                                        {
                                            children: [
                                                (0, r.jsx)(g.E, {
                                                    variant: "body-md/semibold",
                                                    color: "text-feedback-warning",
                                                    children: a,
                                                }),
                                                n.length > 0 &&
                                                    (0, r.jsx)("ul", {
                                                        className: mD.ck,
                                                        children: n.map((e, t) =>
                                                            (0, r.jsx)(
                                                                "li",
                                                                {
                                                                    children: (0, r.jsx)(g.E, {
                                                                        variant: "body-sm/normal",
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
function mV() {
    let { previewEnabled: e, setPreviewEnabled: t, clearAssets: a } = (0, ma.JE)(),
        { ignoredFilenames: n, clearAssets: l, clearIgnoredFilenames: i, processAndUpsertAssets: s } = (0, ez.ds)(),
        { setDropHandler: d } = o.useContext(mT),
        c = o.useCallback(
            (e) => {
                (a(), s(e));
            },
            [s, a],
        );
    return (
        o.useEffect(() => {
            d(c);
        }, [c, d]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: mD.sy,
                    children: [
                        (0, r.jsx)(m.d, { checked: e, onChange: (e) => t(e) }),
                        (0, r.jsx)(g.E, { variant: "body-md/normal", children: "Enable Preview" }),
                        (0, r.jsx)(eX.K, {
                            variant: "icon-only",
                            size: "sm",
                            onClick: mw,
                            icon: u9.CircleQuestionIcon,
                            "aria-label": "Open preview instructions",
                        }),
                    ],
                }),
                (0, r.jsx)(g.E, { variant: "body-md/normal", children: "Drop files in this panel to begin preview." }),
                (0, r.jsx)(mP, {}),
                (0, r.jsx)(mL, {}),
                (0, r.jsx)(mU, {}),
                (0, r.jsx)(mB, { clearAssets: l, clearIgnoredFiles: i }),
                (0, r.jsx)(mF, { ignoredFiles: n, handleClearIgnoredFiles: i }),
            ],
        })
    );
}
function mW() {
    let [e, t] = o.useState("preview");
    return (0, r.jsxs)("div", {
        className: mD.kL,
        children: [
            (0, r.jsx)(me.I, {
                options: mR,
                value: e,
                onChange: (e) => {
                    let { value: a } = e;
                    return t(a);
                },
                className: mD.Vj,
                optionClassName: mD.UK,
            }),
            (0, r.jsx)(aq.h, { size: 8 }),
            "preview" === e && (0, r.jsx)(mV, {}),
            "validate" === e && (0, r.jsx)(m$, {}),
            (0, r.jsx)(aq.h, { size: 16 }),
        ],
    });
}
let mH = (e) => {
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
        i = o.useCallback(
            (e) => {
                (a?.(e), n.current(e));
            },
            [a],
        );
    return (0, r.jsx)(mT.Provider, { value: l, children: (0, r.jsx)(mo, { onDrop: i, children: t }) });
};
var mz = a(663803),
    mK = a(110676),
    mY = a(590180),
    mq = a(335032);
function mJ() {
    let e = (0, d.bG)([mY.A], () => mY.A.skipNumCategories);
    return (0, r.jsxs)("div", {
        className: mq.k,
        children: [
            (0, r.jsx)(g.E, { variant: "body-md/normal", children: "Hide first # of categories" }),
            (0, r.jsx)(mz.l, {
                value: e,
                onChange: (e) => {
                    (0, mK.ue)(e);
                },
                minValue: 0,
                maxValue: 100,
            }),
        ],
    });
}
var mQ =
        (((n = {}).DEFAULT = "default"),
        (n.ORB_TAB = "orb_tab"),
        (n.FRAMES = "frames"),
        (n.FRAMES_PINNED = "frames_pinned"),
        n),
    mX = a(295811);
function mZ() {
    let e = (0, d.bG)([mX.A], () => mX.A.getShopHomeConfigOverride()),
        t = [
            { id: "none", label: "DISABLED (no override)", value: void 0 },
            ...Object.values(mQ).map((e) => ({ id: e, label: e, value: e })),
        ];
    return (0, r.jsx)(j.l, {
        label: "Shop Home Override",
        layout: "horizontal",
        options: t,
        value: e,
        onSelectionChange: (e) => {
            (0, mK.Or)(e);
        },
        selectionMode: "single",
    });
}
function m0(e) {
    let { className: t } = e,
        a = Object.keys(aG.M).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
    return null == a
        ? null
        : (0, r.jsx)("div", { className: t, style: { zIndex: 1 }, children: (0, r.jsx)(lz, { items: [a] }) });
}
var m1 = a(291052);
function m2(e) {
    let { title: t, expanded: a, onToggle: n, children: l } = e,
        i = o.useId();
    return (0, r.jsx)(uv.N, {
        isExpanded: a,
        className: m1.uW,
        collapsibleContent: (0, r.jsx)("div", { id: i, className: m1.f5, children: l }),
        children: () =>
            (0, r.jsxs)("button", {
                type: "button",
                onClick: n,
                "aria-expanded": a,
                "aria-controls": i,
                className: m1.bV,
                children: [
                    (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: t }),
                    (0, r.jsx)(sg.ChevronSmallRightIcon, {
                        size: "sm",
                        color: "currentColor",
                        className: ea()(m1.ai, { [m1.hg]: a }),
                    }),
                ],
            }),
    });
}
function m3() {
    let e = (0, d.bG)([lX.A], () => lX.A.get("shop_disable_cache")),
        t = (0, d.bG)([lX.A], () => lX.A.get("shop_include_unpublished")),
        [a, n] = o.useState(new Set()),
        l = o.useCallback((e) => {
            n((t) => {
                let a = new Set(t);
                return (a.has(e) ? a.delete(e) : a.add(e), a);
            });
        }, []),
        i = o.useCallback(() => {
            n((e) => {
                if (e.has("assets")) return e;
                let t = new Set(e);
                return (t.add("assets"), t);
            });
        }, []);
    return (0, r.jsx)(mH, {
        onDrop: i,
        children: (0, r.jsxs)("div", {
            className: m1.Lm,
            children: [
                (0, r.jsxs)("div", {
                    className: m1.dQ,
                    children: [
                        (0, r.jsx)(m.d, {
                            label: "Disable collectibles cache",
                            checked: e,
                            onChange: (e) => (0, lQ.L)("shop_disable_cache", e),
                        }),
                        (0, r.jsx)(m.d, {
                            label: "Show unpublished collectibles",
                            checked: t,
                            onChange: (e) => (0, lQ.L)("shop_include_unpublished", e),
                        }),
                    ],
                }),
                (0, r.jsxs)(m2, {
                    title: "Layouts",
                    expanded: a.has("layouts"),
                    onToggle: () => l("layouts"),
                    children: [(0, r.jsx)(m0, {}), (0, r.jsx)(mZ, {}), (0, r.jsx)(mJ, {})],
                }),
                (0, r.jsx)(m2, {
                    title: "Assets",
                    expanded: a.has("assets"),
                    onToggle: () => l("assets"),
                    children: (0, r.jsx)(mW, {}),
                }),
            ],
        }),
    });
}
let m6 = [
    { id: "unset", label: "Unset", value: cW.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET },
    { id: "all", label: "All", value: cW.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
    { id: "usersWithGame", label: "Users With Game", value: cW.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
    { id: "none", label: "None", value: cW.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
];
function m5() {
    let e = o.useRef(null),
        t = cK.TA.useSetting();
    return (0, r.jsx)("div", {
        ref: e,
        className: ea()(t6.nd, ns.n),
        children: (0, r.jsxs)("div", {
            className: ns.k,
            children: [
                (0, r.jsx)(ei.D, { variant: "heading-lg/medium", children: "Settings" }),
                (0, r.jsx)(j.l, {
                    label: "Receive DMs In Game",
                    options: m6,
                    value: t,
                    onSelectionChange: cK.TA.updateSetting,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
var m8 = a(828596),
    m4 = a(937427),
    m9 = a(213682);
function m7() {
    let e = (0, d.bG)([m4.A], () => m4.A.getPromotionIdOverride()),
        [t, a] = o.useState(e ?? ""),
        n = o.useCallback(() => {
            (a(""), (0, m8.J_)(void 0));
        }, []),
        l = o.useCallback(() => {
            let e = t.trim();
            (0, m8.J_)("" !== e ? e : void 0);
        }, [t]),
        i = o.useCallback((e) => {
            a(e);
        }, []);
    return (0, r.jsxs)("div", {
        className: m9.k,
        children: [
            (0, r.jsx)(f.k, {
                fullWidth: !0,
                label: `Promotion ID Override (staff)${null != e ? ` \u{2014} active: ${e}` : ""}`,
                value: t,
                onChange: i,
                placeholder: "Paste a storefront promotion id",
            }),
            (0, r.jsxs)("div", {
                className: m9.o,
                children: [
                    (0, r.jsx)(p.$, { variant: "critical-primary", text: "Clear", onClick: n }),
                    (0, r.jsx)(p.$, { variant: "primary", text: "Set", onClick: l }),
                ],
            }),
        ],
    });
}
var he = a(209612);
function ht() {
    return (0, r.jsx)("div", { className: he.n, children: (0, r.jsx)(m7, {}) });
}
var ha = a(278416),
    hn = a(53938);
function hl(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function hi(e) {
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
        (0, r.jsx)(x.Ip, { className: hn.Dx, children: (0, r.jsx)(nm.A, { data: n }) })
    );
}
function hs(e) {
    let { store: t } = e,
        [a, n] = o.useState(() => JSON.stringify(t.__getLocalVars(), null, 2)),
        [l, i] = o.useState(null),
        s = o.useCallback(() => {
            (n(JSON.stringify(t.__getLocalVars(), null, 2)), i(null));
        }, [t]);
    o.useEffect(() => (t.addChangeListener(s), () => t.removeChangeListener(s)), [t, s]);
    let d = o.useCallback(() => {
            let e;
            i(null);
            try {
                e = JSON.parse(a);
            } catch (e) {
                i(e instanceof SyntaxError ? e.message : "Invalid JSON");
                return;
            }
            let n = t.__getLocalVarsEditConfig?.();
            if (null == n) return void i("Store does not support editing");
            try {
                for (let e of n.preDispatches ?? []) C.h.dispatch(e);
                (C.h.dispatch({ ...n.buildPayload(e), type: n.actionType }), s());
            } catch (e) {
                i(e instanceof Error ? e.message : String(e));
            }
        }, [a, t, s]),
        c = o.useCallback(() => {
            let e = t.__getLocalVarsEditConfig?.();
            if (e?.getPurgeVars == null) return void i("Store does not support purge");
            i(null);
            try {
                let t = e.getPurgeVars();
                for (let t of e.preDispatches ?? []) C.h.dispatch(t);
                (C.h.dispatch({ ...e.buildPayload(t), type: e.actionType }), s());
            } catch (e) {
                i(e instanceof Error ? e.message : String(e));
            }
        }, [t, s]);
    return (0, r.jsxs)("div", {
        className: ea()(hn.Dx, hn.Ef),
        children: [
            (0, r.jsx)("textarea", {
                className: hn.Vz,
                value: a,
                onChange: (e) => n(e.target.value),
                spellCheck: !1,
                "aria-label": "Edit local variables as JSON",
            }),
            null != l && (0, r.jsx)("div", { className: hn.Xf, role: "alert", children: l }),
            (0, r.jsxs)("div", {
                className: hn.KA,
                children: [
                    (0, r.jsx)(p.$, { variant: "primary", size: "sm", text: "Apply", onClick: d }),
                    (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: "Refresh from store", onClick: s }),
                    t.__getLocalVarsEditConfig?.().getPurgeVars != null &&
                        (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: "Purge store", onClick: c }),
                ],
            }),
        ],
    });
}
let hr = [
    {
        key: "Name",
        cellClassName: hn.__invalid_eventColumn,
        render(e) {
            let { store: t } = e;
            return t.getName();
        },
    },
];
function ho(e) {
    let { store: t, initialHeight: a } = e,
        n = o.useMemo(() => {
            let e;
            return (
                (e = [
                    {
                        id: "local",
                        name: "Local Variables",
                        group: nb.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVars
                                ? (0, r.jsxs)("div", {
                                      className: hn.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVars" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(hi, { store: t, dataGetter: (e) => e.__getLocalVars() });
                        },
                    },
                    {
                        id: "instance",
                        name: "Store Instance",
                        group: nb.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return (0, r.jsx)(hi, { store: t, dataGetter: (e) => e });
                        },
                    },
                ]),
                null != t.__getLocalVars &&
                    e.push({
                        id: "edit-local",
                        name: "Edit Local Variables",
                        group: nb.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVarsEditConfig
                                ? (0, r.jsxs)("div", {
                                      className: hn.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVarsEditConfig" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(hs, { store: t });
                        },
                    }),
                e
            );
        }, [t]),
        { TabBar: l, renderSelectedTab: i } = (0, nv.A)({ tabs: n }, []);
    return (0, r.jsxs)(nx, {
        className: hn.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(nu.Ay, {
                className: ea()(t6.jr, hn.nZ),
                children: [
                    (0, r.jsx)(nu.Ay.Icon, { icon: ha.TagIcon, tooltip: t.getName() }),
                    (0, r.jsx)(nu.Ay.Title, { children: t.getName() }),
                ],
            }),
            i({ store: t }),
        ],
    });
}
function hd() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = d.il.getAll(),
        l = o
            .useMemo(() => n.map((e) => ({ key: e._dispatchToken, store: e })).sort(hl), [n])
            .filter((e) =>
                (function (e, t) {
                    let { store: a } = e;
                    return a.getName().toLowerCase().includes(t.toLowerCase());
                })(e, t),
            ),
        [i, s] = o.useState(),
        c = n.find((e) => e._dispatchToken === i);
    return (0, r.jsxs)("div", {
        ref: e,
        className: ea()(t6.nd, hn.nd),
        children: [
            (0, r.jsx)("div", {
                className: hn.KE,
                children: (0, r.jsx)(nY.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, r.jsx)(t5, { columns: hr, data: l, selectedRowKey: i, onClickRow: (e) => s(e.key) }),
            null != c &&
                (0, r.jsx)(ho, { store: c, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }, i),
        ],
    });
}
var hc = a(435462),
    hu = a(176781),
    hm = a(173936),
    hh = a(292801),
    hp = a(849516),
    hg = a(606096),
    hx = a(406810),
    hv = a(152367),
    hb = a(27232),
    hj = a(8062),
    hf = a(739187),
    hy = a(378604);
let hE = {
        message: {},
        success: { variant: "success" },
        failure: { variant: "critical" },
        clip: { icon: hu.ClipsIcon },
        link: { icon: hm.LinkIcon },
        forward: { icon: hh.ArrowAngleRightUpIcon, iconColor: e1.A.colors.ICON_FEEDBACK_POSITIVE },
        invite: { icon: hp.EnvelopeIcon, iconColor: e1.A.colors.ICON_BRAND },
        bookmark: { icon: hg.BookmarkIcon },
        clock: { icon: hx.ClockIcon },
        ai: { icon: hv.MagicWandIcon },
        favorite: { icon: hb.StarIcon },
    },
    hC = Object.keys(hE),
    hS = hC.map((e) => ({ label: e, value: e, id: e })),
    h_ = [
        { label: "top", value: "top", id: "top" },
        { label: "bottom", value: "bottom", id: "bottom" },
    ],
    hN = Object.values(ej.BRT).map((e) => ({ label: e, value: e, id: e }));
function hA(e) {
    let { name: t, currentText: a, queueLength: n } = e,
        l = null != a;
    return (0, r.jsxs)("div", {
        className: ea()(hy.M_, { [hy.wl]: l }),
        children: [
            (0, r.jsx)(ei.D, { variant: "heading-xs/semibold", children: t }),
            (0, r.jsx)(g.E, {
                variant: "body-sm/normal",
                color: l ? "text-feedback-positive" : "text-muted",
                children: l ? `showing: \u{201C}${a}\u{201D}` : "idle",
            }),
            (0, r.jsxs)(g.E, { variant: "body-sm/normal", color: "text-muted", children: ["queued: ", n] }),
        ],
    });
}
function hk() {
    let [e, t] = o.useState("The quick brown fox jumps over the lazy dog"),
        [a, n] = o.useState("success"),
        [l, i] = o.useState("top"),
        [s, d] = o.useState(ej.BRT.APP),
        [c, u] = o.useState(String(3e3)),
        m = hj.a[s],
        h = (0, hc.WE)((e) => e.currentToastMap.get(m)?.toast),
        g = (0, hc.WE)((e) => e.queuedToastsMap.get(m)?.length ?? 0);
    function v(e, t) {
        return { ...hE[t], text: e, surface: m, position: l, duration: Number(c) > 0 ? Number(c) : 3e3 };
    }
    return (0, r.jsxs)(x.Ip, {
        className: hy.l$,
        children: [
            (0, r.jsxs)("section", {
                className: hy.uW,
                children: [
                    (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: "Toast store" }),
                    (0, r.jsx)("div", {
                        className: hy.zQ,
                        children: (0, r.jsx)(hA, { name: "Mana store", currentText: h?.text, queueLength: g }),
                    }),
                ],
            }),
            (0, r.jsxs)("section", {
                className: hy.uW,
                children: [
                    (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: "Config" }),
                    (0, r.jsxs)("div", {
                        className: hy.ne,
                        children: [
                            (0, r.jsx)(f.k, { label: "Text", value: e, onChange: t }),
                            (0, r.jsx)(ak.Z, {
                                label: "Type",
                                options: hS,
                                value: a,
                                onSelectionChange: n,
                                selectionMode: "single",
                            }),
                            (0, r.jsx)(ak.Z, {
                                label: "Position",
                                options: h_,
                                value: l,
                                onSelectionChange: i,
                                selectionMode: "single",
                            }),
                            (0, r.jsx)(ak.Z, {
                                label: "App context",
                                options: hN,
                                value: s,
                                onSelectionChange: d,
                                selectionMode: "single",
                            }),
                            (0, r.jsx)(f.k, { label: "Duration (ms)", value: c, onChange: u, type: "number" }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("section", {
                className: hy.uW,
                children: [
                    (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", children: "Show" }),
                    (0, r.jsxs)("div", {
                        className: hy.Uo,
                        children: [
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Show toast",
                                onClick: () => (0, l5.P0)(v(e, a)),
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "secondary",
                                text: "Queue 3",
                                onClick: () => {
                                    ((0, l5.P0)(v(`${e} (1 of 3)`, a)),
                                        (0, l5.P0)(v(`${e} (2 of 3)`, a)),
                                        (0, l5.P0)(v(`${e} (3 of 3)`, a)));
                                },
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "secondary",
                                text: "Every type",
                                onClick: () => {
                                    for (let t of hC) (0, l5.P0)(v(`${t}: ${e}`, t));
                                },
                            }),
                            (0, r.jsx)(p.$, { variant: "secondary", text: "Pop current", onClick: () => (0, hf.V)(s) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var hI = a(91871),
    hD = a.n(hI);
let hT = [
        {
            key: "ID",
            cellClassName: ln.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "Bucket",
            cellClassName: ln.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "Timestamp",
            cellClassName: ln.QN,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    hR = [
        {
            id: "details",
            name: "Details",
            group: nb.fu.NONE,
            render: (e) => {
                let {
                        loggedTrigger: {
                            experimentId: t,
                            descriptor: a,
                            exposureType: n,
                            excluded: l,
                            timestamp: i,
                            location: s,
                            previouslyTracked: o,
                        },
                    } = e,
                    d = n$()(i);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(nu.Ay, {
                            className: ea()(t6.jr, ln.nZ),
                            children: [
                                (0, r.jsx)(nu.Ay.Icon, { icon: nH.AnalyticsIcon, tooltip: t }),
                                (0, r.jsx)(nu.Ay.Title, { children: t }),
                            ],
                        }),
                        (0, r.jsxs)(le, {
                            className: ln.ZK,
                            children: [
                                (0, r.jsx)(lt, {
                                    name: "Timestamp (local)",
                                    children: (0, r.jsx)("time", {
                                        dateTime: i.toISOString(),
                                        title: (0, nZ.i$)(d, "LLLL"),
                                        children: (0, nZ.mk)(d),
                                    }),
                                }),
                                "guild" === a.type &&
                                    (0, r.jsx)(lt, {
                                        name: "Guild ID",
                                        children: (0, r.jsx)("code", { children: a.guildId }),
                                    }),
                                (0, r.jsx)(lt, {
                                    name: "Bucket",
                                    children: (0, r.jsx)("code", { children: a.bucket }),
                                }),
                                (0, r.jsx)(lt, {
                                    name: "Revision",
                                    children: (0, r.jsx)("code", { children: a.revision }),
                                }),
                                (0, r.jsx)(lt, { name: "Override", children: (0, r.jsx)(la, { value: a.override }) }),
                                (0, r.jsx)(lt, {
                                    name: "Exposure type",
                                    children: (0, r.jsx)("code", { children: n }),
                                }),
                                (0, r.jsx)(lt, { name: "Excluded", children: (0, r.jsx)(la, { value: l }) }),
                                (0, r.jsx)(lt, { name: "Previously tracked", children: (0, r.jsx)(la, { value: o }) }),
                                (0, r.jsx)(lt, { name: "Location", children: (0, r.jsx)("code", { children: s }) }),
                            ],
                        }),
                    ],
                });
            },
        },
    ];
function hO() {
    let [e, t] = o.useState(""),
        a = o.useRef(null),
        n = (0, d.yK)([n9], () => n9.loggedTriggers),
        l = o.useMemo(
            () =>
                n
                    .filter((t) => 0 === e.length || hD()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [n, e],
        ),
        [i, s] = o.useState(void 0),
        c = l.find((e) => e.key === i),
        { TabBar: u, renderSelectedTab: m } = (0, nv.A)({ tabs: hR }, []),
        h = (0, d.bG)([n9], () => n9.trackTriggers),
        p = o.useCallback((e) => {
            C.h.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
        }, []),
        g = h ? "Stop Tracking" : "Start Tracking";
    return (0, r.jsxs)("div", {
        ref: a,
        className: ea()(t6.nd, ln.nd),
        children: [
            (0, r.jsxs)("div", {
                className: ln.rh,
                children: [
                    (0, r.jsx)(iu.m, {
                        text: g,
                        children: (0, r.jsx)(eX.K, {
                            size: "sm",
                            variant: h ? "active" : "primary",
                            icon: h ? ih.PauseIcon : im.PlayIcon,
                            "aria-label": g,
                            onClick: () => p(!h),
                        }),
                    }),
                    (0, r.jsx)(nY.I, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, r.jsx)(eX.K, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": nD.intl.string(nD.t.VkKicb),
                        icon: nK.TrashIcon,
                        onClick: es.eY,
                    }),
                ],
            }),
            (0, r.jsx)(t5, { columns: hT, data: l, selectedRowKey: i, onClickRow: (e) => s(e.key) }),
            null != c &&
                (0, r.jsxs)(nx, {
                    className: ln.rf,
                    minHeight: 100,
                    initialHeight: null != a.current ? a.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(u, {}), m({ loggedTrigger: c })],
                }),
        ],
    });
}
var hw = a(324861),
    hM = a(903162);
let hP = function () {
        let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, hw.A)();
        return (0, r.jsx)("div", {
            className: hM.k,
            children: (0, r.jsxs)(u.n, {
                label: "Virtual Currency Configuration",
                description: "Click the button below to reset your onboarding state for Virtual Currency.",
                children: [
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(p.$, {
                            text: "Reset Onboarding State",
                            onClick: () => {
                                (e(), t(), (0, a5.pX)(ej.BVt.APP));
                            },
                        }),
                    }),
                    (0, r.jsx)(el.w, {
                        type: "info",
                        message:
                            "Your may have to refresh your client after being redirected to the main application in order to see these",
                        role: "none",
                    }),
                ],
            }),
        });
    },
    hL = [
        ["codecH264", "H264"],
        ["codecH265", "H265"],
        ["codecAv1", "AV1"],
    ],
    hU = [
        ["encNvidiaDx11", "nvidia-dx11"],
        ["encNvidiaCuda", "nvidia-cuda"],
        ["encAmdDx11", "amd-dx11"],
        ["encIntelDx11", "intel-dx11"],
        ["encIntelCpu", "intel-cpu"],
        ["encWmfCpu", "wmf-cpu"],
        ["encWmfGpu", "wmf-gpu"],
        ["encWmfDx11", "wmf-dx11"],
    ],
    hG = [
        ["capGraphicsCapture", "deny-graphics-capture", "whenFalse"],
        ["capDxgi", "deny-dxgi", "whenFalse"],
        ["capGdi", "deny-gdi", "whenFalse"],
        ["capVideoHook", "deny-video-hook", "whenFalse"],
        ["gdiForceBitblt", "gdi-force-bitblt", "whenTrue"],
        ["bypassHybridGpuFpsRestriction", "bypass-hybrid-gpu-fps", "whenTrue"],
        ["allowHdr", "deny-hdr", "whenFalse"],
    ],
    hB = {
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
    hF = { ...hB };
function h$(e, t) {
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
let hV = !1;
function hW() {
    if (hV) return !0;
    if (!k.Ay.isEnabled()) return !1;
    try {
        let e = k.Ay.getMediaEngine();
        return (
            e.on(oo.bg.Connection, () => {
                nd.A.isDeveloper && hH();
            }),
            e.once(oo.bg.Destroy, () => {
                hV = !1;
            }),
            (hV = !0),
            !0
        );
    } catch {
        return !1;
    }
}
function hH() {
    if (nd.A.isDeveloper && hW())
        try {
            var e;
            let t =
                    ((e = hF),
                    {
                        overrideDeniedVideoCodecs: h$(e, hL),
                        overrideDeniedVideoEncoders: h$(e, hU),
                        captureOverrides: hG
                            .filter((t) => {
                                let [a, , n] = t;
                                return "whenFalse" === n ? !e[a] : !!e[a];
                            })
                            .map((e) => {
                                let [, t] = e;
                                return t;
                            })
                            .join(","),
                    }),
                a = k.Ay.getMediaEngine();
            (a.eachConnection((e) => {
                e.setAudioVideoOverridesTransport(t);
            }),
                a.setClipsCaptureOverrides(t.captureOverrides));
        } catch {}
}
class hz extends d.Ay.DeviceSettingsStore {
    static displayName = "AudioVideoOverridesStore";
    static persistKey = "AudioVideoOverridesStore";
    initialize(e) {
        (this.waitFor(nd.A),
            (hF = null != e ? { ...hB, ...e } : { ...hB }),
            hH(),
            hV ||
                k.Ay.addChangeListener(function e() {
                    hW() && (hH(), k.Ay.removeChangeListener(e));
                }));
    }
    getUserAgnosticState() {
        return hF;
    }
    getSnapshot() {
        return hF;
    }
}
let hK = new hz(C.h, {
    AUDIO_VIDEO_OVERRIDES_UPDATE: function (e) {
        if (!nd.A.isDeveloper) return !1;
        ((hF = { ...hF, ...e.partial }), hH());
    },
});
var hY = a(731854);
let hq = [
        ["codecH264", "H264"],
        ["codecH265", "H265 / HEVC"],
        ["codecAv1", "AV1"],
    ],
    hJ = [
        ["encNvidiaDx11", "NVIDIA Direct3D 11"],
        ["encNvidiaCuda", "NVIDIA CUDA"],
        ["encAmdDx11", "AMD Direct3D 11"],
        ["encIntelDx11", "Intel Direct3D 11"],
        ["encIntelCpu", "Intel CPU"],
        ["encWmfCpu", "Media Foundation CPU"],
        ["encWmfGpu", "Media Foundation GPU"],
        ["encWmfDx11", "Media Foundation Direct3D 11 (NYI)"],
    ],
    hQ = [
        ["capGraphicsCapture", "WGC / Windows Graphics Capture"],
        ["capDxgi", "DDA / DXGI Output Duplication"],
        ["capGdi", "GDI / PrintWindow + BitBlt"],
        ["capVideoHook", "Video Hook"],
    ],
    hX = [
        ["bypassHybridGpuFpsRestriction", "WGC: Bypass Hybrid-GPU 60 FPS Restriction"],
        ["gdiForceBitblt", "GDI: Force Allow BitBlt"],
        ["allowHdr", "Allow HDR Capture"],
    ];
function hZ(e) {
    let { title: t, toggles: a, state: n } = e;
    return (0, r.jsxs)(t0.B, {
        gap: 8,
        children: [
            (0, r.jsx)(g.E, { variant: "body-lg/semibold", children: t }),
            a.map((e) => {
                let [t, a] = e;
                return (0, r.jsx)(
                    oc.S,
                    {
                        label: a,
                        checked: !!n[t],
                        onChange: () => {
                            var e;
                            return (
                                (e = { [t]: !n[t] }),
                                void C.h.dispatch({ type: "AUDIO_VIDEO_OVERRIDES_UPDATE", partial: e })
                            );
                        },
                    },
                    t,
                );
            }),
        ],
    });
}
function h0() {
    let e = (0, d.bG)([hK], () => hK.getSnapshot()),
        t = (0, d.bG)([k.Ay], () => k.Ay.supports(hY.O5.VIDEO));
    return (0, r.jsxs)(x.Ip, {
        className: t6.nd,
        children: [
            (0, r.jsx)(b.c, { gap: 16 }),
            (0, r.jsx)(hZ, { title: "Video Codecs (Sender)", toggles: hq, state: e }),
            t
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(b.c, { gap: 16 }),
                          (0, r.jsx)(hZ, { title: "Video Encoders", toggles: hJ, state: e }),
                          (0, r.jsx)(b.c, { gap: 16 }),
                          (0, r.jsx)(hZ, { title: "Capture Sources", toggles: hQ, state: e }),
                          (0, r.jsx)(b.c, { gap: 16 }),
                          (0, r.jsx)(hZ, { title: "Capture Options", toggles: hX, state: e }),
                      ],
                  })
                : null,
        ],
    });
}
var h1 = a(109445);
function h2() {
    let [e, t] = o.useState(""),
        [a, n] = o.useState(""),
        [l, i] = o.useState({ status: "idle", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
        s = "processing" === l.status;
    return (0, r.jsx)(x.Ip, {
        className: t6.nd,
        children: (0, r.jsxs)("div", {
            className: h1.l7,
            children: [
                (0, r.jsx)(g.E, { variant: "body-lg/semibold", children: "Batch Audio Processor" }),
                (0, r.jsx)(g.E, {
                    variant: "body-sm/normal",
                    children:
                        "Process wav files through the Discord audio ingest pipeline (WebRTC APM, Krisp, voice filters) and write output to wav files.",
                }),
                (0, r.jsxs)(t0.B, {
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
                        (0, r.jsx)(p.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await E.A.fileManager.showOpenDialog({ properties: ["openDirectory"] });
                                e.length > 0 && t(e[0]);
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)(t0.B, {
                    direction: "horizontal",
                    align: "end",
                    gap: 8,
                    children: [
                        (0, r.jsx)(f.k, { fullWidth: !0, value: a, onChange: n, placeholder: "Output directory" }),
                        (0, r.jsx)(p.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await E.A.fileManager.showOpenDialog({
                                    properties: ["openDirectory", "createDirectory"],
                                });
                                e.length > 0 && n(e[0]);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(p.$, {
                    variant: s ? "critical-primary" : "primary",
                    text: s ? "Cancel" : "Start Processing",
                    onClick: s
                        ? function () {
                              (k.Ay.getMediaEngine().cancelBatchAudioProcessing(),
                                  i((e) => ({ ...e, status: "cancelled" })));
                          }
                        : function () {
                              "" !== e &&
                                  "" !== a &&
                                  (i({ status: "processing", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
                                  k.Ay.getMediaEngine().processBatchAudioFiles(
                                      e,
                                      a,
                                      (e, t, a, n) => {
                                          i((l) => ({
                                              ...l,
                                              current: t,
                                              total: a,
                                              log: [...l.log, { filename: e, success: n }],
                                          }));
                                      },
                                      (e, t) => {
                                          i((a) => ({
                                              ...a,
                                              status: "processing" === a.status ? "complete" : "cancelled",
                                              processed: e,
                                              failed: t,
                                          }));
                                      },
                                  ));
                          },
                    disabled: !s && ("" === e || "" === a),
                }),
                "idle" !== l.status &&
                    (0, r.jsxs)(t0.B, {
                        gap: 4,
                        children: [
                            (0, r.jsxs)(g.E, {
                                variant: "body-sm/semibold",
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
                                            className: h1.TZ,
                                            children: (0, r.jsxs)(g.E, {
                                                variant: "body-xs/normal",
                                                className: e.success ? h1.$D : h1.uL,
                                                children: [e.success ? "OK" : "FAIL", " - ", e.filename],
                                            }),
                                        },
                                        t,
                                    ),
                                ),
                            l.log.length > 20 &&
                                (0, r.jsxs)(g.E, {
                                    variant: "body-xs/normal",
                                    children: ["...and ", l.log.length - 20, " more"],
                                }),
                        ],
                    }),
            ],
        }),
    });
}
var h3 = a(395771),
    h6 = a(207228),
    h5 = a(533841);
let h8 = { appId: "0", appName: "DevTools" },
    h4 = { width: 0, height: 0, intervalMs: 1e3 },
    h9 = (0, $.v)(() => ({ latestUrl: null, received: 0, log: [] }));
function h7(e) {
    let t = h9.getState().latestUrl;
    (h9.setState((t) => {
        let a = {
            index: t.received + 1,
            receivedAt: Date.now(),
            encodeMs: e.encodeMs,
            width: e.width,
            height: e.height,
            format: e.mimeType.replace("image/", "").toUpperCase(),
            bytes: e.image.byteLength,
        };
        return {
            latestUrl: URL.createObjectURL(new Blob([e.image], { type: e.mimeType })),
            received: a.index,
            log: [a, ...t.log].slice(0, 200),
        };
    }),
        null != t && URL.revokeObjectURL(t));
}
function pe(e) {
    let { width: t, height: a, intervalMs: n } = e;
    return (0, h6.it)(h8, { ...(t > 0 || a > 0 ? { width: t, height: a } : {}), intervalMs: n }, h7);
}
let pt = {
    framesReceived: 0,
    framesProcessed: 0,
    framesFailed: 0,
    framesSkippedSource: 0,
    framesSkippedBusy: 0,
    framesSkippedInterval: 0,
    framesReleaseTimedOut: 0,
    processingUs: 0,
    encodeFailed: !1,
};
function pa(e) {
    let t = parseInt(e, 10);
    return Number.isFinite(t) && t > 0 ? t : 0;
}
function pn() {
    let [e, t] = (0, sH.V)("DevToolsConjurePanel_settings", h4),
        a = e ?? h4,
        { latestUrl: n, log: l } = h9(),
        i = (0, d.bG)([h3.A], () => h3.A.isCapturing()),
        s = (0, h6.y8)(),
        c = (function () {
            let [e, t] = o.useState(null);
            return (
                o.useEffect(() => {
                    let e = !1;
                    async function a() {
                        let a = await (0, h6.Az)();
                        e || t(a);
                    }
                    a();
                    let n = setInterval(a, 1e3);
                    return () => {
                        ((e = !0), clearInterval(n));
                    };
                }, []),
                e ?? pt
            );
        })(),
        u = c.encodeFailed && !i;
    function h(e) {
        let n = { ...a, ...e };
        (t(n), i && pe(n));
    }
    return (0, r.jsx)(x.Ip, {
        className: t6.nd,
        children: (0, r.jsxs)(t0.B, {
            gap: 12,
            className: h5.l7,
            children: [
                (0, r.jsx)(g.E, { variant: "body-lg/semibold", children: "Snapshot" }),
                !s &&
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        children: "This native build does not support snapshots.",
                    }),
                u &&
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        color: "text-feedback-critical",
                        children: "Snapshots turned off because PNG encoding failed. Turn capture on to try again.",
                    }),
                (0, r.jsxs)(t0.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "Stats" }),
                        (0, r.jsxs)(g.E, {
                            variant: "mono-md/bold",
                            children: [
                                "Received ",
                                c.framesReceived,
                                " \xb7 Processed ",
                                c.framesProcessed,
                                " \xb7 Avg processing",
                                " ",
                                (function (e) {
                                    let { framesProcessed: t, processingUs: a } = e;
                                    return t > 0 ? `${(a / t / 1e3).toFixed(1)} ms` : "-";
                                })(c),
                            ],
                        }),
                        (0, r.jsxs)(g.E, {
                            variant: "mono-md/bold",
                            color: "text-muted",
                            children: [
                                "Skipped: wrong source ",
                                c.framesSkippedSource,
                                " \xb7 busy ",
                                c.framesSkippedBusy,
                                " \xb7 interval",
                                " ",
                                c.framesSkippedInterval,
                                " \xb7 Release timed out ",
                                c.framesReleaseTimedOut,
                                " \xb7 Failed",
                                " ",
                                c.framesFailed,
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-muted",
                    children:
                        "PNG snapshots of the detected game. Frames from anything else being captured are dropped. 0x0 is the source resolution.",
                }),
                (0, r.jsxs)(t0.B, {
                    direction: "horizontal",
                    gap: 8,
                    children: [
                        (0, r.jsx)(f.k, {
                            label: "Width",
                            type: "number",
                            min: 0,
                            value: a.width.toString(),
                            onChange: (e) => h({ width: pa(e) }),
                        }),
                        (0, r.jsx)(f.k, {
                            label: "Height",
                            type: "number",
                            min: 0,
                            value: a.height.toString(),
                            onChange: (e) => h({ height: pa(e) }),
                        }),
                        (0, r.jsx)(f.k, {
                            label: "Interval (ms)",
                            type: "number",
                            min: 0,
                            value: a.intervalMs.toString(),
                            onChange: (e) => h({ intervalMs: pa(e) }),
                        }),
                    ],
                }),
                (0, r.jsx)(m.d, {
                    label: "Capture",
                    checked: i,
                    disabled: !s,
                    onChange: function (e) {
                        e ? pe(a) : (0, h6.ik)();
                    },
                }),
                null != n
                    ? (0, r.jsx)("img", { className: h5.P9, src: n, alt: "Latest snapshot" })
                    : (0, r.jsx)(g.E, { variant: "body-sm/normal", color: "text-muted", children: "No snapshot yet." }),
                l.length > 0 &&
                    (0, r.jsxs)(t0.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "Log" }),
                            (0, r.jsx)("div", {
                                className: h5.Rm,
                                children: l.map((e) =>
                                    (0, r.jsx)(
                                        g.E,
                                        {
                                            variant: "mono-md/bold",
                                            color: "text-muted",
                                            children: (function (e) {
                                                let t,
                                                    {
                                                        index: a,
                                                        receivedAt: n,
                                                        encodeMs: l,
                                                        width: i,
                                                        height: s,
                                                        format: r,
                                                        bytes: o,
                                                    } = e;
                                                return `#${a}  ${((t = new Date(n)), `${t.toLocaleTimeString(void 0, { hour12: !1 })}.${t.getMilliseconds().toString().padStart(3, "0")}`)}  encode ${l}ms  ${i}x${s}  ${r}  ${Math.round(o / 1024)} KiB`;
                                            })(e),
                                        },
                                        e.index,
                                    ),
                                ),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
var pl = a(207898),
    pi = a.n(pl),
    ps = a(32880),
    pr = a(827343),
    po = a(964486),
    pd = a(602674),
    pc = a(625841),
    pu = a(74848),
    pm = a(913367);
function ph(e) {
    return `${e.toFixed(0)}%`;
}
function pp(e) {
    let { recording: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(g.E, { variant: "body-sm/normal", children: ["Duration: ", t.audioBuffer.duration] }),
            (0, r.jsxs)(g.E, {
                variant: "body-sm/normal",
                children: ["Num Channels: ", t.audioBuffer.numberOfChannels],
            }),
            (0, r.jsxs)(g.E, { variant: "body-sm/normal", children: ["Sample Rate: ", t.audioBuffer.sampleRate] }),
            (0, r.jsxs)(g.E, { variant: "body-sm/normal", children: ["Noise Suppression: ", t.suppression] }),
            (0, r.jsxs)(g.E, {
                variant: "body-sm/normal",
                children: ["Krisp Suppression Level: ", t.krispSuppressionLevel],
            }),
            (0, r.jsxs)(g.E, {
                variant: "body-sm/normal",
                children: ["Echo Cancellation: ", String(t.echoCancellation)],
            }),
        ],
    });
}
function pg(e) {
    let { recording: t, playing: a, onPlay: n, onStop: l } = e;
    return (0, r.jsx)(uv.N, {
        collapsibleContent: (0, r.jsx)(pp, { recording: t }),
        children: (e) => {
            let { onClick: i } = e;
            return (0, r.jsxs)(en.D, {
                onClick: i,
                children: [
                    (0, r.jsxs)(g.E, {
                        variant: "body-sm/semibold",
                        tag: "span",
                        children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()],
                    }),
                    (0, r.jsx)(en.D, {
                        tag: "span",
                        onClick: (e) => {
                            (e.stopPropagation(), a ? l() : n(t));
                        },
                        children: a
                            ? (0, r.jsx)(ih.PauseIcon, { size: "xxs" })
                            : (0, r.jsx)(im.PlayIcon, { size: "xxs" }),
                    }),
                    (0, r.jsx)(en.D, {
                        tag: "span",
                        onClick: (e) => {
                            let a, n, l;
                            (e.stopPropagation(),
                                (a = new Blob([pi()(t.audioBuffer)], { type: "audio/wav" })),
                                (n = URL.createObjectURL(a)),
                                ((l = document.createElement("a")).href = n),
                                (l.download = `${t.inputName}-${new Date(t.createdAt).toLocaleString()}.wav`),
                                l.click(),
                                URL.revokeObjectURL(n));
                        },
                        children: (0, r.jsx)(ps.DownloadIcon, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function px() {
    let { name: e } = (0, pu.x5)(hY.oh.AUDIO_INPUT),
        [t, a] = o.useState(!1),
        [n, l] = o.useState([]),
        i = (0, d.bG)([k.Ay], () => k.Ay.getKrispSuppressionLevel()),
        [s, c] = o.useState(null),
        u = o.useRef(null),
        h = o.useRef(null),
        [p, v] = o.useState(0.5),
        {
            krispModels: b,
            krispModelOverride: f,
            inputMode: y,
            echoCancellation: E,
            autoThreshold: C,
            vadUseKrisp: S,
            vadKrispActivationThreshold: _,
            noiseCancellation: N,
            noiseSuppression: A,
            noiseSuppressionSupported: I,
            noiseCancellationSupported: D,
            noiseCancellationEnableStats: T,
        } = (0, d.cf)([k.Ay], () => ({
            krispModels: k.Ay.getKrispModels(),
            krispModelOverride: k.Ay.getKrispModelOverride(),
            echoCancellation: k.Ay.getEchoCancellation(),
            autoThreshold: k.Ay.getModeOptions().autoThreshold,
            vadUseKrisp: k.Ay.getModeOptions().vadUseKrisp,
            inputMode: k.Ay.getMode(),
            vadKrispActivationThreshold: k.Ay.getKrispVadActivationThreshold(),
            noiseCancellation: k.Ay.getNoiseCancellation(),
            noiseSuppression: k.Ay.getNoiseSuppression(),
            noiseSuppressionSupported: k.Ay.isNoiseSuppressionSupported(),
            noiseCancellationSupported: k.Ay.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: k.Ay.getKrispEnableStats(),
        })),
        R = N ? "KRISP" : A ? "STANDARD" : "NONE",
        O = (0, pd.v)(),
        w = o.useCallback(() => {
            (u.current?.stop(), (u.current = null), c(null));
        }, []);
    function M() {
        k.Ay.getMediaEngine().stopRecordingRawSamples();
    }
    function P(e) {
        if ((t && M(), w(), null == O)) return;
        let a = O.createBufferSource();
        ((a.buffer = e.audioBuffer),
            (h.current = O.createGain()),
            (h.current.gain.value = p),
            a.connect(h.current),
            h.current.connect(O.destination),
            (a.loop = !0),
            a.start(),
            (u.current = a),
            c(e));
    }
    (o.useEffect(() => {
        w();
    }, [w]),
        (0, po.l0)(() => {
            pr.default.setMode(k.Ay.getMode(), { vadKrispActivationThreshold: void 0 });
        }));
    let L = [];
    return (
        D && L.push({ id: "krisp", label: "Krisp", value: "KRISP" }),
        I && L.push({ id: "standard", label: "Standard", value: "STANDARD" }),
        L.push({ id: "disabled", label: "Disabled", value: "NONE" }),
        (0, r.jsx)(x.Ip, {
            className: t6.nd,
            children: (0, r.jsxs)("div", {
                className: pm.l,
                children: [
                    (0, r.jsx)(g.E, { variant: "body-lg/semibold", children: "Krisp Tester" }),
                    (0, r.jsx)(pc.U, {
                        label: "Input Device",
                        deviceType: hY.oh.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, r.jsx)(j.l, {
                        label: "Noise Cancellation",
                        value: R,
                        onSelectionChange: (e) => {
                            (pr.default.setNoiseCancellation("KRISP" === e),
                                pr.default.setNoiseSuppression("STANDARD" === e));
                        },
                        options: L,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    "KRISP" === R &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(u7.A, {
                                    label: "Krisp Suppression Level",
                                    defaultValue: i,
                                    onChangeEnd: pr.default.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                    formatValue: ph,
                                }),
                                (0, r.jsx)(j.l, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    value: f,
                                    options: b.map((e) => ({ label: e, value: e, id: e })),
                                    onSelectionChange: (e) => {
                                        pr.default.setKrispModelOverride(e ?? "");
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(m.d, {
                                    label: "Enable Stats",
                                    checked: T,
                                    onChange: (e) => pr.default.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    y === hY.TB.VOICE_ACTIVITY &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(m.d, {
                                    label: "Auto Threshold",
                                    checked: C,
                                    onChange: (e) => pr.default.setMode(hY.TB.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                C &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(m.d, {
                                                label: "Use Krisp VAD",
                                                checked: S,
                                                onChange: (e) =>
                                                    pr.default.setMode(hY.TB.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            S &&
                                                (0, r.jsx)(u7.A, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    defaultValue: _,
                                                    onChangeEnd: (e) =>
                                                        pr.default.setMode(hY.TB.VOICE_ACTIVITY, {
                                                            vadKrispActivationThreshold: e,
                                                        }),
                                                    minValue: 0,
                                                    maxValue: 1,
                                                    step: 0.01,
                                                    formatValue: (e) => ph(100 * e),
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    (0, r.jsx)(m.d, {
                        label: "Echo Cancellation",
                        checked: E,
                        onChange: (e) => pr.default.setEchoCancellation(e),
                    }),
                    (0, r.jsxs)(t0.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "Recorder" }),
                            (0, r.jsx)(nV.$n, {
                                color: t ? nV.$n.Colors.RED : nV.$n.Colors.BRAND,
                                onClick: t
                                    ? M
                                    : function () {
                                          (w(),
                                              a(!0),
                                              pr.default.setLoopback("krisp_test", !0),
                                              k.Ay.getMediaEngine().startRecordingRawSamples((t, n, s) => {
                                                  (a(!1), pr.default.setLoopback("krisp_test", !1));
                                                  let r = new AudioBuffer({
                                                      length: t.length,
                                                      sampleRate: s,
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
                                                          suppression: R,
                                                          echoCancellation: E,
                                                          krispSuppressionLevel: i,
                                                      },
                                                  ]);
                                              }));
                                      },
                                children: t ? "Stop Recording" : "Start Recording",
                            }),
                        ],
                    }),
                    (0, r.jsx)(u7.A, {
                        label: "Volume",
                        defaultValue: p,
                        onChange: function (e) {
                            null != h.current && ((h.current.gain.value = e), v(e));
                        },
                        minValue: 0,
                        maxValue: 1,
                        step: 0.01,
                        formatValue: (e) => ph(100 * e),
                    }),
                    (0, r.jsxs)(t0.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "Recordings" }),
                            n.map((e, t) =>
                                (0, r.jsx)(pg, { recording: e, playing: e === s, onPlay: P, onStop: w }, t),
                            ),
                        ],
                    }),
                ],
            }),
        })
    );
}
var pv = a(237528),
    pb = a(833473),
    pj = a(738566),
    pf = a(829997),
    py = a(598939);
let pE = {
        generic: { label: "Generic", material: { absorption: { low: 0.1, mid: 0.2, high: 0.3 }, scattering: 0.05 } },
        brick: { label: "Brick", material: { absorption: { low: 0.03, mid: 0.04, high: 0.07 }, scattering: 0.05 } },
        concrete: {
            label: "Concrete",
            material: { absorption: { low: 0.05, mid: 0.07, high: 0.08 }, scattering: 0.05 },
        },
        ceramic: { label: "Ceramic", material: { absorption: { low: 0.01, mid: 0.02, high: 0.02 }, scattering: 0.05 } },
        gravel: { label: "Gravel", material: { absorption: { low: 0.6, mid: 0.7, high: 0.8 }, scattering: 0.05 } },
        carpet: { label: "Carpet", material: { absorption: { low: 0.24, mid: 0.69, high: 0.73 }, scattering: 0.05 } },
        glass: { label: "Glass", material: { absorption: { low: 0.06, mid: 0.03, high: 0.02 }, scattering: 0.05 } },
        plaster: { label: "Plaster", material: { absorption: { low: 0.12, mid: 0.06, high: 0.04 }, scattering: 0.05 } },
        wood: { label: "Wood", material: { absorption: { low: 0.11, mid: 0.07, high: 0.06 }, scattering: 0.05 } },
        metal: { label: "Metal", material: { absorption: { low: 0.2, mid: 0.07, high: 0.06 }, scattering: 0.05 } },
        rock: { label: "Rock", material: { absorption: { low: 0.13, mid: 0.2, high: 0.24 }, scattering: 0.05 } },
    },
    pC = Object.entries(pE).map((e) => {
        let [t, { label: a }] = e;
        return { id: t, value: t, label: a };
    }),
    pS = o.createContext(null);
function p_(e) {
    let t = o.useContext(pS);
    if (null == t) throw Error("useSpatialAudioField must be used inside SpatialAudioEditorContext");
    return {
        value: e4().get(t.resolved, e),
        overridden: t.isOverridden(e),
        set: (a) => t.set(e, a),
        reset: () => t.reset(e),
    };
}
function pN(e, t) {
    let a = e4().cloneDeep(e),
        n = e4().toPath(t);
    e4().unset(a, n);
    for (let e = n.length - 1; e > 0; e--) {
        let t = n.slice(0, e);
        if (!e4().isEmpty(e4().get(a, t))) break;
        e4().unset(a, t);
    }
    return a;
}
function pA(e) {
    let { label: t, description: a, value: n, overridden: l, onReset: i, children: s } = e;
    return (0, r.jsxs)("div", {
        className: ea()(py.nM, { [py.Je]: l }),
        children: [
            (0, r.jsxs)("div", {
                className: py.uV,
                children: [
                    (0, r.jsx)(g.E, { variant: "body-md/medium", color: "text-strong", className: py.xZ, children: t }),
                    null != n ? (0, r.jsx)(g.E, { variant: "mono-md/bold", color: "text-muted", children: n }) : null,
                    (0, r.jsx)(pk, { overridden: l, onReset: i, label: t }),
                ],
            }),
            null != a ? (0, r.jsx)(g.E, { variant: "body-xs/normal", color: "text-subtle", children: a }) : null,
            s,
        ],
    });
}
function pk(e) {
    let { overridden: t, onReset: a, label: n } = e;
    return (0, r.jsx)("div", {
        className: ea()(py.cL, { [py.YF]: !t }),
        "aria-hidden": !t,
        children: (0, r.jsx)(l8.Q, {
            variant: "secondary",
            textVariant: "body-xs/medium",
            text: "Reset",
            "aria-label": `Reset ${n}`,
            disabled: !t,
            onClick: a,
        }),
    });
}
function pI(e) {
    let { path: t, label: a, description: n } = e,
        l = p_(t);
    return (0, r.jsxs)("div", {
        className: ea()(py.nM, py.jC, { [py.Je]: l.overridden }),
        children: [
            (0, r.jsx)("div", {
                className: py.L$,
                children: (0, r.jsx)(m.d, { label: a, description: n, checked: l.value, onChange: l.set }),
            }),
            (0, r.jsx)(pk, { overridden: l.overridden, onReset: l.reset, label: a }),
        ],
    });
}
function pD(e) {
    let { path: t, label: a, description: n, min: l, max: i, step: s, decimals: d, unit: c = "" } = e,
        u = p_(t),
        [m, h] = o.useState(null),
        [p, g] = o.useState(u.value);
    function x(e) {
        return e4().clamp(Math.round(e / s) * s, l, i);
    }
    function v(e) {
        return `${e.toFixed(d)}${c}`;
    }
    p !== u.value && (g(u.value), h(null));
    let b = m ?? u.value;
    return (0, r.jsx)(pA, {
        label: a,
        description: n,
        value: v(b),
        overridden: u.overridden,
        onReset: u.reset,
        children: (0, r.jsx)("div", {
            className: py.aw,
            children: (0, r.jsx)(u7.A, {
                value: b,
                minValue: l,
                maxValue: i,
                step: s,
                onChange: (e) => h(x(e)),
                onChangeEnd: (e) => {
                    (h(null), u.set(x(e)));
                },
                formatValue: (e) => v(x(e)),
                "aria-label": a,
            }),
        }),
    });
}
function pT(e) {
    let { label: t, value: a, onChange: n, min: l, max: i, step: s } = e,
        [d, c] = o.useState(null),
        [u, m] = o.useState(a);
    u !== a && (m(a), c(null));
    let h = d?.value != null;
    return (0, r.jsx)(nM.Q, {
        label: t,
        mode: "decimal",
        value: null != d ? d.value : a,
        min: l,
        max: i,
        step: s,
        error: h
            ? `Must be ${[null != l && `\u{2265} ${l}`, null != i && `\u{2264} ${i}`].filter(Boolean).join(" and ")}`
            : void 0,
        onBlur: () => c(null),
        onChange: (e) => {
            null == e || (null != l && e < l) || (null != i && e > i) ? c({ value: e }) : (c(null), n(e));
        },
    });
}
function pR(e) {
    let { keys: t, labels: a, value: n, onChange: l, min: i, max: s, step: o } = e;
    return (0, r.jsx)("div", {
        className: py.uY,
        children: t.map((e) =>
            (0, r.jsx)(
                pT,
                { label: a[e], value: n[e], min: i, max: s, step: o, onChange: (t) => l({ ...n, [e]: t }) },
                e,
            ),
        ),
    });
}
let pO = ["low", "mid", "high"],
    pw = { low: "Low", mid: "Mid", high: "High" },
    pM = ["x", "y", "z"],
    pP = { x: "X (m)", y: "Y (m)", z: "Z (m)" };
function pL(e) {
    let { path: t, label: a, description: n } = e,
        l = p_(t);
    return (0, r.jsx)(pA, {
        label: a,
        description: n,
        overridden: l.overridden,
        onReset: l.reset,
        children: (0, r.jsx)(pR, { keys: pO, labels: pw, value: l.value, onChange: l.set, min: 0, step: 1e-4 }),
    });
}
function pU(e) {
    let { path: t, label: a, description: n } = e,
        l = p_(t);
    return (0, r.jsx)(pA, {
        label: a,
        description: n,
        overridden: l.overridden,
        onReset: l.reset,
        children: (0, r.jsx)(pR, { keys: pM, labels: pP, value: l.value, onChange: l.set, step: 0.5 }),
    });
}
function pG() {
    let e = p_("binaural.hrtfFile"),
        [{ directory: t, files: a }, n] = o.useState(() => k.Ay.getMediaEngine().getSpatialAudioHrtfFiles()),
        l = "" !== e.value && !a.includes(e.value),
        i = [
            { id: "", value: "", label: "Built-in" },
            ...a.map((e) => ({ id: e, value: e, label: e })),
            ...(l ? [{ id: e.value, value: e.value, label: `${e.value} (missing)` }] : []),
        ];
    return (0, r.jsxs)(pA, {
        label: "HRTF",
        description:
            "A SOFA file to use in place of Steam Audio's built-in HRTF. Rebuilds the HRTF, and falls back to the built-in one if the file doesn't load.",
        overridden: e.overridden,
        onReset: e.reset,
        children: [
            (0, r.jsx)(j.l, {
                label: "HRTF file",
                hideLabel: !0,
                placeholder: "Built-in",
                selectionMode: "single",
                options: i,
                value: e.value,
                onSelectionChange: (t) => e.set(t),
                fullWidth: !0,
            }),
            null != t
                ? (0, r.jsxs)(t0.B, {
                      direction: "horizontal",
                      align: "center",
                      gap: 8,
                      wrap: !0,
                      children: [
                          (0, r.jsxs)(g.E, {
                              variant: "body-xs/normal",
                              color: "text-subtle",
                              children: [
                                  "Only .sofa files in ",
                                  (0, r.jsx)("code", { children: t }),
                                  " can be loaded.",
                              ],
                          }),
                          (0, r.jsx)(l8.Q, {
                              variant: "secondary",
                              textVariant: "body-xs/medium",
                              text: "Refresh",
                              onClick: () => n(k.Ay.getMediaEngine().getSpatialAudioHrtfFiles()),
                          }),
                          (0, r.jsx)(l8.Q, {
                              variant: "secondary",
                              textVariant: "body-xs/medium",
                              text: "Show folder",
                              onClick: () => E.A.fileManager.showItemInFolder(t),
                          }),
                      ],
                  })
                : (0, r.jsx)(g.E, {
                      variant: "body-xs/normal",
                      color: "text-subtle",
                      children: "This media engine can't load HRTF files.",
                  }),
        ],
    });
}
let pB = ["low", "mid", "high", "scattering"],
    pF = { low: "Absorb low", mid: "Absorb mid", high: "Absorb high", scattering: "Scattering" };
function p$(e) {
    var t;
    let { path: a, label: n } = e,
        l = p_(a),
        { absorption: i, scattering: s } = l.value,
        o = ((t = l.value), Object.keys(pE).find((e) => e4().isEqual(pE[e].material, t)));
    return (0, r.jsxs)(pA, {
        label: n,
        value: null != o ? pE[o].label : "Custom",
        overridden: l.overridden,
        onReset: l.reset,
        children: [
            (0, r.jsx)(j.l, {
                label: `${n} preset`,
                hideLabel: !0,
                placeholder: "Custom",
                selectionMode: "single",
                options: pC,
                value: o,
                onSelectionChange: (e) => l.set(pE[e].material),
                fullWidth: !0,
            }),
            (0, r.jsx)(pR, {
                keys: pB,
                labels: pF,
                value: { ...i, scattering: s },
                onChange: (e) => {
                    let { scattering: t, ...a } = e;
                    return l.set({ absorption: a, scattering: t });
                },
                min: 0,
                max: 1,
                step: 0.01,
            }),
        ],
    });
}
function pV() {
    let { value: e } = p_("reflections.room.minCorner"),
        { value: t } = p_("reflections.room.maxCorner"),
        a = t.x - e.x,
        n = t.y - e.y,
        l = t.z - e.z,
        i = a > 0 && n > 0 && l > 0;
    return (0, r.jsx)(g.E, {
        variant: "body-sm/normal",
        color: i ? "text-muted" : "text-feedback-critical",
        children: i
            ? `${a.toFixed(1)} \xd7 ${n.toFixed(1)} \xd7 ${l.toFixed(1)} m \xb7 floor ${(a * l).toFixed(1)} m\xb2`
            : "Every axis of the max corner must be greater than the min corner.",
    });
}
function pW(e) {
    let t,
        { overrideCount: a, onResetAll: n } = e,
        { supported: l, active: i } = (0, d.cf)([k.Ay, pb.A], () => ({
            supported: k.Ay.supports(hY.O5.SPATIAL_AUDIO),
            active: pb.A.isSpatialAudioActive(),
        }));
    return (
        (t = l
            ? i
                ? (0, r.jsx)(pv.v, { text: "Spatial on", variant: "greenLight" })
                : (0, r.jsx)(pv.v, { text: "Spatial off", variant: "grayLight" })
            : (0, r.jsx)(pv.v, { text: "Unsupported", variant: "redLight" })),
        (0, r.jsxs)(t0.B, {
            gap: 8,
            children: [
                (0, r.jsxs)(t0.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 8,
                    wrap: !0,
                    children: [
                        (0, r.jsxs)(t0.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 8,
                            children: [
                                (0, r.jsx)(ei.D, { variant: "heading-lg/semibold", children: "Spatial Audio" }),
                                t,
                                a > 0 ? (0, r.jsx)(pv.v, { text: `${a} overridden`, variant: "blurpleLight" }) : null,
                            ],
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "secondary",
                            size: "sm",
                            text: "Reset all",
                            disabled: 0 === a,
                            onClick: n,
                        }),
                    ],
                }),
                (0, r.jsx)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-subtle",
                    children:
                        "Live spatial audio overrides, layered over the defaults and the voice settings toggle. A spatial Frame replaces them when it starts and clears them when it stops. Fields and Reset compare against the selected profile. They apply immediately and last until the client reloads.",
                }),
                l
                    ? null
                    : (0, r.jsx)(g.E, {
                          variant: "body-sm/normal",
                          color: "text-feedback-critical",
                          children: "This media engine does not support spatial audio; changes here have no effect.",
                      }),
            ],
        })
    );
}
let pH = "DevToolsSpatialAudioProfiles",
    pz = "Default",
    pK = e4().omit(pf.X, "isSpatial");
function pY(e, t) {
    if (!e4().isPlainObject(e)) return {};
    let a = {};
    for (let [n, l] of Object.entries(t)) {
        let t = e[n];
        if (e4().isPlainObject(l) && e4().isEmpty(l)) {
            if (!e4().isPlainObject(t)) continue;
            let e = e4().pickBy(t, (e) => "number" == typeof e && Number.isFinite(e));
            e4().isEmpty(e) || (a[n] = e);
        } else if (e4().isPlainObject(l)) {
            let e = pY(t, l);
            e4().isEmpty(e) || (a[n] = e);
        } else typeof t == typeof l && ("number" != typeof t || Number.isFinite(t)) && (a[n] = t);
    }
    return a;
}
function pq(e, t) {
    return e4().merge(e4().cloneDeep(pf.X), { isSpatial: t }, e);
}
function pJ(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pf.X;
    return Object.entries(a).reduce((a, n) => {
        let [l, i] = n,
            s = e4().get(e, l),
            r = e4().get(t, l);
        return !e4().isPlainObject(i) || e4().isEmpty(i) || ["x", "low", "absorption"].some((e) => e in i)
            ? a + +!e4().isEqual(s, r)
            : a + pJ(s ?? {}, r ?? {}, i);
    }, 0);
}
let pQ = {};
function pX(e) {
    let {
            overrides: t,
            modified: a,
            profiles: { profiles: n, names: l, activeName: i, editableName: s, select: d, save: c, remove: u, add: m },
        } = e,
        [h, g] = o.useState(null);
    function x(e) {
        (c(e), g(null));
    }
    if (null != h) {
        let e = h.trim(),
            t = e === pz;
        return (0, r.jsxs)(t0.B, {
            direction: "horizontal",
            align: "end",
            gap: 8,
            children: [
                (0, r.jsx)("div", {
                    className: py.km,
                    children: (0, r.jsx)(f.k, {
                        label: "Profile name",
                        value: h,
                        onChange: g,
                        autoFocus: !0,
                        error: t ? `${pz} is built in and can't be overwritten` : void 0,
                        onKeyDown: (a) => {
                            ("Enter" === a.key && e.length > 0 && !t && x(e), "Escape" === a.key && g(null));
                        },
                    }),
                }),
                (0, r.jsx)(p.$, {
                    variant: "primary",
                    size: "sm",
                    text: e in n ? "Overwrite" : "Save",
                    disabled: 0 === e.length || t,
                    onClick: () => x(e),
                }),
                (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: "Cancel", onClick: () => g(null) }),
            ],
        });
    }
    return (0, r.jsxs)(t0.B, {
        direction: "horizontal",
        align: "end",
        gap: 8,
        wrap: !0,
        children: [
            (0, r.jsx)("div", {
                className: py.km,
                children: (0, r.jsx)(j.l, {
                    label: null != i && a ? "Profile (modified)" : "Profile",
                    placeholder: "Unsaved settings",
                    selectionMode: "single",
                    options: l.map((e) => ({ id: e, value: e, label: e })),
                    value: i,
                    onSelectionChange: d,
                    fullWidth: !0,
                }),
            }),
            (0, r.jsx)(p.$, {
                variant: "secondary",
                size: "sm",
                text: "Save",
                disabled: null == s || !a,
                onClick: () => null != s && x(s),
            }),
            (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: "Save as\u2026", onClick: () => g(s ?? "") }),
            (0, r.jsx)(p.$, {
                variant: "critical-secondary",
                size: "sm",
                text: "Delete",
                disabled: null == s,
                onClick: () => null != s && u(s),
            }),
            (0, r.jsx)(p.$, {
                variant: "secondary",
                size: "sm",
                text: "Import",
                onClick: async function () {
                    try {
                        let { name: e, settings: t } = (function (e) {
                            let t = Uint8Array.from(atob(e.trim()), (e) => e.charCodeAt(0)),
                                a = JSON.parse(new TextDecoder().decode(t));
                            if (!e4().isPlainObject(a)) throw Error("Not an exported profile");
                            let { name: n, settings: l } = a;
                            if ("string" != typeof n || !e4().isPlainObject(l)) throw Error("Not an exported profile");
                            return { name: n.trim(), settings: pY(l, pf.X) };
                        })(
                            await (nc.isPlatformEmbedded
                                ? Promise.resolve(uU.Ay.readClipboard())
                                : window.navigator.clipboard.readText()),
                        );
                        (0, l5.P0)({ text: `Switched to imported profile "${m(e, t)}"`, variant: "success" });
                    } catch {
                        (0, l5.P0)({
                            text: "Clipboard does not hold an exported spatial audio profile",
                            variant: "critical",
                        });
                    }
                },
            }),
            (0, r.jsx)(p.$, {
                variant: "secondary",
                size: "sm",
                text: "Export",
                onClick: function () {
                    var e;
                    let a;
                    (0, nX.C)(
                        ((e = i ?? "Untitled"),
                        (a = e4().merge(e4().cloneDeep(pK), pY(t, pf.X))),
                        btoa(
                            String.fromCharCode(...new TextEncoder().encode(JSON.stringify({ name: e, settings: a }))),
                        )),
                        () => (0, l5.P0)({ text: "Copied spatial audio profile to clipboard", variant: "success" }),
                        () => (0, l5.P0)({ text: "Could not copy to clipboard", variant: "critical" }),
                    );
                },
            }),
        ],
    });
}
function pZ() {
    let { overrides: e, spatialEnabled: t } = (0, d.cf)([pb.A], () => ({
            overrides: pb.A.getSpatialAudioOverrides(),
            spatialEnabled: pb.A.isSpatialAudioEnabled(),
        })),
        { enabled: a } = pj.A.useConfig({ location: "DevToolsSpatialAudioPanel" }),
        n = t && a,
        l = (function (e, t) {
            let [a, n] = o.useState(() => e4().omit(tZ.w.get(pH) ?? {}, pz)),
                l = [pz, ...Object.keys(a).sort((e, t) => e.localeCompare(t))];
            function i(e) {
                return e === pz ? pQ : a[e];
            }
            let [s, r] = o.useState(() => {
                let a = pq(e, t);
                return l.find((e) => 0 === pJ(a, pq(i(e), t)));
            });
            function d(e) {
                (n(e), tZ.w.set(pH, e));
            }
            return {
                profiles: a,
                names: l,
                activeName: s,
                baseline: (null != s ? i(s) : void 0) ?? pQ,
                editableName: s === pz ? void 0 : s,
                select(e) {
                    (r(e), pr.default.setSpatialAudioOverrides(e4().cloneDeep(i(e))));
                },
                save(t) {
                    (d({ ...a, [t]: e4().cloneDeep(e) }), r(t));
                },
                remove(e) {
                    (d(e4().omit(a, e)), r(void 0));
                },
                add(e, t) {
                    let n = (function (e, t) {
                        if (!t.includes(e)) return e;
                        let a = /^(.*?)\s+(\d+)$/.exec(e),
                            n = a?.[1] ?? e,
                            l = null != a ? Number(a[2]) + 1 : 1;
                        for (; t.includes(`${n} ${l}`);) l++;
                        return `${n} ${l}`;
                    })(e.length > 0 ? e : "Imported", l);
                    return (d({ ...a, [n]: t }), r(n), pr.default.setSpatialAudioOverrides(e4().cloneDeep(t)), n);
                },
            };
        })(e, n),
        { baseline: i } = l,
        s = o.useMemo(() => pq(e, n), [e, n]),
        c = o.useMemo(() => pq(i, n), [i, n]),
        m = pJ(s, c),
        h = o.useMemo(
            () => ({
                resolved: s,
                isOverridden: (e) => !e4().isEqual(e4().get(s, e), e4().get(c, e)),
                set: (t, a) =>
                    pr.default.setSpatialAudioOverrides(
                        "isSpatial" !== t || e4().has(i, t) || a !== e4().get(c, t)
                            ? e4().set(e4().cloneDeep(e), t, a)
                            : pN(e, t),
                    ),
                reset: (t) =>
                    pr.default.setSpatialAudioOverrides(
                        e4().has(i, t) ? e4().set(e4().cloneDeep(e), t, e4().cloneDeep(e4().get(i, t))) : pN(e, t),
                    ),
            }),
            [e, i, s, c],
        );
    return (0, r.jsx)(x.Ip, {
        className: t6.nd,
        children: (0, r.jsx)(pS.Provider, {
            value: h,
            children: (0, r.jsxs)("div", {
                className: py.kL,
                children: [
                    (0, r.jsx)(pX, { overrides: e, modified: m > 0, profiles: l }),
                    (0, r.jsx)(pW, {
                        overrideCount: m,
                        onResetAll: () => pr.default.setSpatialAudioOverrides(e4().cloneDeep(i)),
                    }),
                    (0, r.jsxs)(u.n, {
                        label: "Output",
                        children: [
                            (0, r.jsx)(pI, {
                                path: "isSpatial",
                                label: "Spatial audio",
                                description:
                                    "Overrides the voice settings toggle without saving it, bypassing the experiment. Still needs a supporting media engine.",
                            }),
                            (0, r.jsx)(pI, {
                                path: "limiterEnabled",
                                label: "Limiter",
                                description: "Runs the WebRTC limiter on the mixed output to keep it from clipping.",
                            }),
                        ],
                    }),
                    (0, r.jsxs)(u.n, {
                        label: "Binaural rendering",
                        children: [
                            (0, r.jsx)(pG, {}),
                            (0, r.jsx)(pD, {
                                path: "binaural.spatialBlend",
                                label: "Spatial blend",
                                description: "0 plays sources unspatialized, 1 fully through the HRTF.",
                                min: 0,
                                max: 1,
                                step: 0.01,
                                decimals: 2,
                            }),
                            (0, r.jsx)(pD, {
                                path: "binaural.hrtfVolume",
                                label: "HRTF volume",
                                description: "Linear gain applied to the HRTF data. Rebuilds the HRTF.",
                                min: 0,
                                max: 2,
                                step: 0.05,
                                decimals: 2,
                                unit: "\xd7",
                            }),
                            (0, r.jsx)(pI, {
                                path: "binaural.bilinearInterpolation",
                                label: "Bilinear interpolation",
                                description:
                                    "Interpolate between HRTF measurements instead of snapping to the nearest. Smoother moving sources, more CPU.",
                            }),
                            (0, r.jsx)(pI, {
                                path: "binaural.hrtfNormalization",
                                label: "HRTF normalization",
                                description: "RMS-normalize the HRTF frequency response. Rebuilds the HRTF.",
                            }),
                        ],
                    }),
                    (0, r.jsxs)(u.n, {
                        label: "Distance attenuation",
                        children: [
                            (0, r.jsx)(pI, {
                                path: "distanceAttenuation.enabled",
                                label: "Enabled",
                                description: "Inverse-distance falloff.",
                            }),
                            (0, r.jsx)(pD, {
                                path: "distanceAttenuation.minDistance",
                                label: "Min distance",
                                description:
                                    "Sources closer than this are not attenuated. Shared with the reflection simulation.",
                                min: 0.1,
                                max: 10,
                                step: 0.1,
                                decimals: 1,
                                unit: " m",
                            }),
                        ],
                    }),
                    (0, r.jsxs)(u.n, {
                        label: "Air absorption",
                        children: [
                            (0, r.jsx)(pI, {
                                path: "airAbsorption.enabled",
                                label: "Enabled",
                                description: "Frequency-dependent damping over distance.",
                            }),
                            (0, r.jsx)(pL, {
                                path: "airAbsorption.coefficients",
                                label: "Coefficients",
                                description: "Exponential decay per metre, per band.",
                            }),
                        ],
                    }),
                    (0, r.jsxs)(u.n, {
                        label: "Reflections",
                        children: [
                            (0, r.jsx)(pI, {
                                path: "reflections.enabled",
                                label: "Enabled",
                                description: "Simulate room reverb per source.",
                            }),
                            (0, r.jsx)(pD, {
                                path: "reflections.mixLevel",
                                label: "Mix level",
                                description:
                                    "Gain on the reflections before they are added to the direct sound. 1 is physically based.",
                                min: 0,
                                max: 2,
                                step: 0.01,
                                decimals: 2,
                                unit: "\xd7",
                            }),
                            (0, r.jsx)(pD, {
                                path: "reflections.durationSeconds",
                                label: "IR duration",
                                description: "Length of the simulated impulse response.",
                                min: 0.1,
                                max: 2,
                                step: 0.05,
                                decimals: 2,
                                unit: " s",
                            }),
                            (0, r.jsx)(pD, {
                                path: "reflections.numRays",
                                label: "Rays",
                                description: "Rays traced per simulation run.",
                                min: 64,
                                max: 4096,
                                step: 64,
                                decimals: 0,
                            }),
                            (0, r.jsx)(pD, {
                                path: "reflections.numBounces",
                                label: "Bounces",
                                description: "Reflections followed per ray.",
                                min: 1,
                                max: 64,
                                step: 1,
                                decimals: 0,
                            }),
                            (0, r.jsx)(pD, {
                                path: "reflections.irradianceMinDistance",
                                label: "Irradiance min distance",
                                description:
                                    "Closest a source counts as being to a surface. Raise it to tame reflections near walls.",
                                min: 0.1,
                                max: 5,
                                step: 0.1,
                                decimals: 1,
                                unit: " m",
                            }),
                            (0, r.jsx)(pI, {
                                path: "reflections.binauralDecode",
                                label: "Binaural decode",
                                description: "Decode the ambisonic reverb through the HRTF rather than panning it.",
                            }),
                        ],
                    }),
                    (0, r.jsxs)(u.n, {
                        label: "Room",
                        children: [
                            (0, r.jsx)(pV, {}),
                            (0, r.jsx)(pU, { path: "reflections.room.minCorner", label: "Min corner" }),
                            (0, r.jsx)(pU, { path: "reflections.room.maxCorner", label: "Max corner" }),
                            (0, r.jsx)(p$, { path: "reflections.room.floor", label: "Floor" }),
                            (0, r.jsx)(p$, { path: "reflections.room.ceiling", label: "Ceiling" }),
                            (0, r.jsx)(p$, { path: "reflections.room.walls", label: "Walls" }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var p0 = a(803306),
    p1 = a(191115),
    p2 = a(189213),
    p3 = a(543767),
    p6 = a(811091),
    p5 = a(105909);
let p8 = [
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
function p4() {
    let [e, t] = o.useState(!1),
        a = (0, d.bG)([eg.default], () => eg.default.getCurrentUser()),
        n = (0, p5.Lh)(),
        l = (0, d.bG)([oh.A], () => oh.A.getPremiumTypeSubscription()),
        i = null != n ? (tF.VD[n]?.tenureReqNumMonths ?? 0) : 0,
        s = o.useCallback(
            async (e) => {
                let n = new Date();
                (e > 0 ? n.setMonth(n.getMonth() - e) : n.setDate(n.getDate() - 7), n.setDate(n.getDate() - 2));
                let i = {
                    subscription_status: ej.Dmq.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: p6.default.fromTimestamp(n.getTime()),
                };
                (t(!0),
                    await ia.Bo.patch({ url: `/debug/subscriptions/${l.id}`, body: i, rejectWithError: (0, ia.fT)() }),
                    await (0, p0.eO)(a.id),
                    await (0, dX.hP)(),
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
            value: i,
            options: p8,
            onSelectionChange: s,
        });
}
var p9 =
        (((l = {})[(l.DEFAULT = 0)] = "DEFAULT"),
        (l[(l.SUCCESSFUL = 1)] = "SUCCESSFUL"),
        (l[(l.FAILURE = 2)] = "FAILURE"),
        (l[(l.NONE = 3)] = "NONE"),
        l),
    p7 =
        (((i = {})[(i.REWIND = 1)] = "REWIND"),
        (i[(i.RENEW = 2)] = "RENEW"),
        (i[(i.CANCEL = 3)] = "CANCEL"),
        (i[(i.UNCANCEL = 4)] = "UNCANCEL"),
        (i[(i.TIME_TRAVEL = 5)] = "TIME_TRAVEL"),
        (i[(i.RESET = 6)] = "RESET"),
        (i[(i.PAY_INVOICE = 7)] = "PAY_INVOICE"),
        (i[(i.END = 8)] = "END"),
        (i[(i.RESUME = 9)] = "RESUME"),
        i);
async function ge(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetDate: n, paymentType: l, sendReminderEmail: i } = a;
    return (
        await ia.Bo.post({
            url: `/debug/subscriptions/${e}/transition`,
            body: {
                target_datetime: n?.toISOString(),
                payment_type: l ?? 0,
                transition: t,
                send_reminder_email: i ?? !1,
            },
            rejectWithError: !0,
        })
    ).body;
}
var gt = a(601107);
let ga = {
        [ej.Dmq.UNPAID]: "Unpaid",
        [ej.Dmq.ACTIVE]: "Active",
        [ej.Dmq.PAST_DUE]: "Past Due",
        [ej.Dmq.CANCELED]: "Canceled",
        [ej.Dmq.ENDED]: "Ended",
        [ej.Dmq.ACCOUNT_HOLD]: "Account Hold",
        [ej.Dmq.BILLING_RETRY]: "Billing Retry",
        [ej.Dmq.PAUSED]: "Paused",
        [ej.Dmq.PAUSE_PENDING]: "Pause Pending",
    },
    gn = {
        [gt.qf.UNKNOWN]: "Unknown",
        [gt.qf.ADMIN]: "Admin",
        [gt.qf.USER]: "User",
        [gt.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [gt.qf.DEFERRED_START]: "Deferred Start",
        [gt.qf.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    gl = [
        { id: "unpaid", label: "Unpaid", value: ej.Dmq.UNPAID },
        { id: "active", label: "Active", value: ej.Dmq.ACTIVE },
        { id: "pastDue", label: "Past Due", value: ej.Dmq.PAST_DUE },
        { id: "canceled", label: "Canceled", value: ej.Dmq.CANCELED },
        { id: "ended", label: "Ended", value: ej.Dmq.ENDED },
        { id: "accountHold", label: "Account Hold", value: ej.Dmq.ACCOUNT_HOLD },
        { id: "billingRetry", label: "Billing Retry", value: ej.Dmq.BILLING_RETRY },
        { id: "paused", label: "Paused", value: ej.Dmq.PAUSED },
        { id: "pausePending", label: "Pause Pending", value: ej.Dmq.PAUSE_PENDING },
    ];
function gi(e) {
    let { subscription: t, onClose: a, onUpdated: n, transitionState: l } = e,
        [i, s] = o.useState(n$()()),
        [d, c] = o.useState(n$()().format("HH:mm")),
        [m, h] = o.useState(!1),
        [p, x] = o.useState(void 0);
    return (0, r.jsx)(p2.a, {
        transitionState: l,
        onClose: function () {
            return (a(), Promise.resolve());
        },
        title: "Time Travel Subscription",
        size: "sm",
        actions: [
            { text: "Cancel", variant: "secondary", onClick: a },
            {
                text: "Time Travel",
                variant: "primary",
                onClick: async function () {
                    if (null == i) return void x("Please select a target date");
                    let [e, l] = d.split(":").map(Number),
                        s = i.clone().hours(e).minutes(l).seconds(0).milliseconds(0);
                    (h(!0), x(void 0));
                    try {
                        (await ge(t.id, p7.TIME_TRAVEL, {
                            targetDate: s,
                            paymentType: p9.DEFAULT,
                            sendReminderEmail: !1,
                        }),
                            n(),
                            a());
                    } catch (e) {
                        x(e.body?.message || e.message || "Failed to time travel");
                    } finally {
                        h(!1);
                    }
                },
                disabled: m || null == i,
            },
        ],
        children: (0, r.jsxs)(t0.B, {
            gap: 16,
            children: [
                (0, r.jsx)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-muted",
                    children:
                        "Select the target date and time to travel the subscription to. This will adjust the subscription period and trigger any necessary invoice operations.",
                }),
                (0, r.jsx)(sM.J, { label: "Target Date", value: i, onSelect: s }),
                (0, r.jsx)(u.n, {
                    label: "Target Time (HH:mm)",
                    children: (0, r.jsx)("input", {
                        type: "time",
                        value: d,
                        onChange: function (e) {
                            c(e.target.value);
                        },
                        className: ow.Qn,
                    }),
                }),
                (0, r.jsxs)(t0.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(g.E, {
                            variant: "body-xs/semibold",
                            color: "text-muted",
                            children: "Current Period",
                        }),
                        (0, r.jsxs)(t0.B, {
                            gap: 4,
                            children: [
                                (0, r.jsxs)(g.E, {
                                    variant: "body-xs/normal",
                                    className: ow.JX,
                                    children: ["Start: ", n$()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, r.jsxs)(g.E, {
                                    variant: "body-xs/normal",
                                    className: ow.JX,
                                    children: ["End: ", n$()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
                                }),
                            ],
                        }),
                    ],
                }),
                null != p && (0, r.jsx)(el.w, { type: "critical", message: p, role: "alert" }),
            ],
        }),
    });
}
function gs(e) {
    let { subscription: t } = e,
        [a] = (0, p3.C8)({
            subscriptionId: null != t ? t.id : "",
            preventFetch: null == t || t.status !== ej.Dmq.PAST_DUE,
        }),
        { analyticsLocations: n } = (0, nf.Ay)(tw.A.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return t.status !== ej.Dmq.PAST_DUE
        ? null
        : (0, r.jsx)(p.$, {
              variant: "critical-primary",
              text: "Open Past Due Checkout",
              size: "sm",
              disabled: null == a,
              onClick: () => {
                  null != a &&
                      (0, d8.A)({ initialPlanId: t.planIdFromItems, openInvoiceId: a.id, analyticsLocations: n });
              },
          });
}
let gr = [
    { id: "us", label: "United States (USD)", value: "US" },
    { id: "gb", label: "United Kingdom (GBP)", value: "GB" },
    { id: "de", label: "Germany (EUR)", value: "DE" },
    { id: "mx", label: "Mexico (MXN)", value: "MX" },
    { id: "jp", label: "Japan (JPY)", value: "JP" },
];
function go(e) {
    let { subscription: t } = e,
        [a, n] = o.useState(!1),
        [l, i] = o.useState(null),
        [s, d] = o.useState("DE");
    if (t.status !== ej.Dmq.PAST_DUE) return null;
    function c(e) {
        return e?.body?.message ?? e?.message ?? "Something went wrong";
    }
    return (0, r.jsxs)(t0.B, {
        gap: 8,
        children: [
            (0, r.jsx)(g.E, { variant: "body-sm/semibold", children: "Magic Link Testing" }),
            (0, r.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Send Dunning Email Now",
                disabled: a,
                onClick: async function () {
                    n(!0);
                    try {
                        (await ia.Bo.post({
                            url: `/debug/subscriptions/${t.id}/send-past-due-email`,
                            rejectWithError: !0,
                        }),
                            i({
                                type: "success",
                                message: "Dunning email sent, check your inbox and click the link there.",
                                role: "status",
                            }));
                    } catch (e) {
                        i({ type: "critical", message: c(e), role: "alert" });
                    }
                    n(!1);
                },
            }),
            (0, r.jsx)(p.$, {
                variant: "secondary",
                size: "sm",
                text: "Copy Link Instead",
                disabled: a,
                onClick: async function () {
                    n(!0);
                    try {
                        let { link: e } = (
                            await ia.Bo.post({
                                url: `/debug/subscriptions/${t.id}/past-due-magic-link`,
                                rejectWithError: !0,
                            })
                        ).body;
                        (await navigator.clipboard.writeText(e),
                            i({ type: "success", message: "Link copied to clipboard.", role: "status" }));
                    } catch (e) {
                        i({ type: "critical", message: c(e), role: "alert" });
                    }
                    n(!1);
                },
            }),
            (0, r.jsx)(j.l, {
                label: "Store Country",
                hideLabel: !0,
                value: s,
                options: gr,
                onSelectionChange: d,
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(p.$, {
                variant: "secondary",
                size: "sm",
                text: "Set Store Country (Void + Reissue Invoice)",
                disabled: a,
                onClick: async function () {
                    n(!0);
                    try {
                        (await ia.Bo.post({ url: "/debug/store-country", body: { country: s }, rejectWithError: !0 }),
                            i({ type: "success", message: `Store country set to ${s}.`, role: "status" }));
                    } catch (e) {
                        i({ type: "critical", message: c(e), role: "alert" });
                    }
                    n(!1);
                },
            }),
            null != l && (0, r.jsx)(el.w, { type: l.type, message: l.message, role: l.role }),
        ],
    });
}
function gd(e) {
    var t;
    let a,
        { subscription: n, onUpdated: l } = e,
        [i, s] = o.useState(!1),
        [d, c] = o.useState(!1),
        [m, h] = o.useState(!1),
        [x, v] = o.useState(!1),
        [b, f] = o.useState(null);
    function y(e) {
        let t = new Date(e);
        return p6.default.fromTimestamp(t.getTime());
    }
    async function E(e) {
        let { status: t = n.status, premiumStreakStart: a, endedAt: i } = e,
            s = {
                subscription_status: t,
                ...(null != a ? { premium_streak_started_at: y(a) } : null),
                ...(null != i ? { ended_at: y(i) } : null),
            };
        (await ia.Bo.patch({ url: `/debug/subscriptions/${n.id}`, body: s, rejectWithError: !1 }), l());
    }
    let C = tF.hd[n.planIdFromItems]?.premiumType === tF.PremiumTypes.TIER_0,
        S = n.metadata?.ended_at,
        _ = null != S ? new Date(S).toISOString().substring(0, 10) : "",
        N = [
            { id: "id", label: `ID: ${n.id}`, isDisabled: !1 },
            {
                id: "status",
                label: `Status: ${(null == t && (t = n.status), t in ga) ? ga[t] : `Unknown status ${t}`}`,
                isDisabled: !1,
            },
        ],
        A = n.hasActiveTrial,
        k = n.metadata?.active_discount_id != null;
    return (
        A && N.push({ id: "trial", label: "Has Trial", isDisabled: !1 }),
        k && N.push({ id: "active-discount", label: "Has Active Discount", isDisabled: !1 }),
        n.status !== ej.Dmq.ACTIVE &&
            N.push({
                id: "dates",
                label: `Dates: ${(0, nZ.i$)(n.createdAt, "LL")} - ${(0, nZ.i$)(n.currentPeriodEnd, "LL")}`,
                isDisabled: !1,
            }),
        n.status === ej.Dmq.PAUSED &&
            N.push({
                id: "pause-reason",
                label: `Pause Reason: ${n.pauseReason in gn ? gn[n.pauseReason] : `Unknown pause reason ${n.pauseReason}`}`,
                isDisabled: !1,
            }),
        (0, r.jsx)("div", {
            className: ea()(i$.Nr, C ? i$.Qf : i$.C1),
            children: (0, r.jsxs)(u.n, {
                label: `Type: ${null == (a = n.planIdFromItems) ? "No plan id" : a in tF.hd ? tF.hd[a].name : `Unknown plan id ${a}`}`,
                className: ow.lI,
                children: [
                    (0, r.jsx)(oR.C, { items: N, label: "Subscription details" }),
                    A &&
                        (0, r.jsxs)("div", {
                            className: ow.VK,
                            children: [
                                (0, r.jsxs)(en.D, {
                                    onClick: function () {
                                        h(!m);
                                    },
                                    className: ow.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(g.E, {
                                                variant: "body-md/semibold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, r.jsx)(iU.A, { direction: m ? iU.A.Directions.UP : iU.A.Directions.DOWN }),
                                    ],
                                }),
                                m &&
                                    (0, r.jsxs)("ul", {
                                        className: ow.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(g.E, {
                                                        variant: "body-md/semibold",
                                                        children: "trial_id",
                                                    }),
                                                    (0, r.jsx)(g.E, { variant: "body-sm/normal", children: n.trialId }),
                                                ],
                                            }),
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(g.E, {
                                                        variant: "body-md/semibold",
                                                        children: "trial_ends_at",
                                                    }),
                                                    (0, r.jsx)(g.E, {
                                                        variant: "body-sm/normal",
                                                        children:
                                                            null != n.trialEndsAt
                                                                ? (0, nZ.i$)(n.trialEndsAt, "LL")
                                                                : "N/A",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    k &&
                        (0, r.jsxs)("div", {
                            className: ow.VK,
                            children: [
                                (0, r.jsxs)(en.D, {
                                    onClick: function () {
                                        v(!x);
                                    },
                                    className: ow.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(g.E, {
                                                variant: "body-md/semibold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, r.jsx)(iU.A, { direction: x ? iU.A.Directions.UP : iU.A.Directions.DOWN }),
                                    ],
                                }),
                                x &&
                                    (0, r.jsxs)("ul", {
                                        className: ow.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(g.E, {
                                                        variant: "body-md/semibold",
                                                        children: "active_discount_id",
                                                    }),
                                                    (0, r.jsx)(g.E, {
                                                        variant: "body-sm/normal",
                                                        children: n.metadata?.active_discount_id,
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(g.E, {
                                                        variant: "body-md/semibold",
                                                        children: "active_discount_expires_at",
                                                    }),
                                                    (0, r.jsx)(g.E, {
                                                        variant: "body-sm/normal",
                                                        children:
                                                            n.metadata?.active_discount_expires_at != null
                                                                ? (0, nZ.i$)(
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
                            className: ow.VK,
                            children: [
                                (0, r.jsxs)(en.D, {
                                    onClick: function () {
                                        s(!i);
                                    },
                                    className: ow.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(g.E, {
                                                variant: "body-md/semibold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, r.jsx)(iU.A, { direction: i ? iU.A.Directions.UP : iU.A.Directions.DOWN }),
                                    ],
                                }),
                                i &&
                                    (0, r.jsx)("ul", {
                                        className: ow.j3,
                                        children: Object.entries(n.metadata).map((e) => {
                                            let [t, a] = e;
                                            return (0, r.jsxs)(
                                                "li",
                                                {
                                                    children: [
                                                        (0, r.jsx)(g.E, { variant: "body-md/semibold", children: t }),
                                                        (0, r.jsx)(g.E, { variant: "body-sm/normal", children: a }),
                                                    ],
                                                },
                                                t,
                                            );
                                        }),
                                    }),
                            ],
                        }),
                    (0, r.jsxs)("div", {
                        className: ow.VK,
                        children: [
                            (0, r.jsxs)(en.D, {
                                onClick: function () {
                                    c(!d);
                                },
                                className: ow.Eh,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(g.E, {
                                            variant: "body-md/semibold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, r.jsx)(iU.A, { direction: d ? iU.A.Directions.UP : iU.A.Directions.DOWN }),
                                ],
                            }),
                            d &&
                                (0, r.jsxs)(t0.B, {
                                    gap: 24,
                                    children: [
                                        (0, r.jsx)(j.l, {
                                            label: "Status",
                                            value: n.status,
                                            options: gl,
                                            onSelectionChange: (e) => {
                                                E({ status: e });
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsxs)("div", {
                                            children: [
                                                (0, r.jsxs)(t0.B, {
                                                    gap: 12,
                                                    children: [
                                                        (0, r.jsx)(p.$, {
                                                            variant: "primary",
                                                            size: "sm",
                                                            text: "Renew Subscription",
                                                            onClick: (e) =>
                                                                (async function () {
                                                                    try {
                                                                        await ge(n.id, p7.RENEW, {
                                                                            targetDate: n$()(new Date()),
                                                                            paymentType: p9.DEFAULT,
                                                                            sendReminderEmail: !1,
                                                                        });
                                                                    } catch (e) {
                                                                        f(
                                                                            e.body?.message ||
                                                                                e.message ||
                                                                                "Failed to renew subscription",
                                                                        );
                                                                    }
                                                                    l();
                                                                })(),
                                                        }),
                                                        (0, r.jsx)(p.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Simulate Failed Renewal (Past Due)",
                                                            onClick: (e) =>
                                                                (async function () {
                                                                    try {
                                                                        await ge(n.id, p7.RENEW, {
                                                                            targetDate: n$()(new Date()),
                                                                            paymentType: p9.FAILURE,
                                                                            sendReminderEmail: !1,
                                                                        });
                                                                    } catch (e) {
                                                                        f(
                                                                            e.body?.message ||
                                                                                e.message ||
                                                                                "Failed to simulate failed renewal",
                                                                        );
                                                                    }
                                                                    l();
                                                                })(),
                                                        }),
                                                        (0, r.jsx)(gs, { subscription: n }),
                                                        (0, r.jsx)(go, { subscription: n }),
                                                        (0, r.jsx)(p.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Time Travel",
                                                            onClick: () => {
                                                                (0, P.mM)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, r.jsx)(gi, {
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
                                                null !== b &&
                                                    (0, r.jsx)("div", {
                                                        className: ow.z3,
                                                        children: (0, r.jsx)(el.w, {
                                                            type: "critical",
                                                            message: b,
                                                            role: "alert",
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, r.jsxs)(t0.B, {
                                            gap: 16,
                                            children: [
                                                (0, r.jsx)(sM.J, {
                                                    label: "Premium Streak Start Date",
                                                    value: n$()(n.premiumSince?.toISOString().substring(0, 10)),
                                                    onSelect: (e) => E({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, r.jsx)(p4, {}),
                                            ],
                                        }),
                                        (0, r.jsx)(sM.J, {
                                            label: "Metadata Ended At Date",
                                            value: "" !== _ ? n$()(_) : void 0,
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
let gc = [
    { id: "nitro-monthly", label: "Nitro Monthly", value: tF.gD.PREMIUM_MONTH_TIER_2 },
    { id: "nitro-yearly", label: "Nitro Yearly", value: tF.gD.PREMIUM_YEAR_TIER_2 },
    { id: "nitro-classic-monthly", label: "Nitro Classic Monthly", value: tF.gD.PREMIUM_MONTH_TIER_1 },
    { id: "nitro-classic-yearly", label: "Nitro Classic Yearly", value: tF.gD.PREMIUM_YEAR_TIER_1 },
    { id: "basic-monthly", label: "Basic Monthly", value: tF.gD.PREMIUM_MONTH_TIER_0 },
    { id: "basic-yearly", label: "Basic Yearly", value: tF.gD.PREMIUM_YEAR_TIER_0 },
    { id: "reverse-trial-1week", label: "Reverse Trial 1-week", value: tF.gd },
    { id: "reverse-trial-2week", label: "Reverse Trial 2-week", value: tF.Uk },
    { id: "nitro-squad-monthly", label: "Nitro Squad Monthly", value: tF.gD.PREMIUM_GROUP_MONTH },
];
function gu() {
    let e = (0, d.bG)([oh.A], () => oh.A.getPremiumTypeSubscription()),
        t = (0, d.bG)([eg.default], () => eg.default.getCurrentUser()),
        [a, n] = o.useState("511651880837840896"),
        [l, i] = o.useState([]),
        [s, c] = o.useState(!1),
        u = o.useCallback(async () => {
            try {
                (c(!0),
                    await (0, dX.hP)(),
                    await (0, p0.eO)(t.id),
                    i(
                        await (async function () {
                            return (
                                await ia.Bo.get({
                                    url: ej.Rsh.BILLING_SUBSCRIPTIONS,
                                    query: { include_inactive: !0, limit: 5 },
                                    rejectWithError: (0, ia.fT)(),
                                })
                            ).body.map((e) => p1.A.createFromServer(e));
                        })(),
                    ));
            } finally {
                c(!1);
            }
        }, [t]);
    o.useEffect(() => {
        u();
    }, [u]);
    let m = o.useMemo(() => l.filter((e) => e.status !== ej.Dmq.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [l]);
    return (0, r.jsx)(x.Ip, {
        className: t6.nd,
        children: (0, r.jsxs)("div", {
            className: i$.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: i$.dL,
                    children: [
                        (0, r.jsx)(ei.D, {
                            variant: "heading-lg/semibold",
                            className: t6.wx,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, r.jsx)(eX.K, {
                            "aria-label": "Refresh",
                            icon: iL.RefreshIcon,
                            size: "sm",
                            variant: "icon-only",
                            disabled: s,
                            onClick: u,
                        }),
                    ],
                }),
                (0, r.jsx)("section", {
                    className: ea()([i$.uW, i$.Uo]),
                    children:
                        null == e &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(j.l, {
                                    label: "Premium Plan",
                                    hideLabel: !0,
                                    value: a,
                                    options: gc,
                                    onSelectionChange: n,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Create Subscription",
                                    onClick: async function () {
                                        (await ia.Bo.post({
                                            url: "/debug/subscription",
                                            body: { plan_id: a },
                                            rejectWithError: (0, ia.fT)(),
                                        }),
                                            await u());
                                    },
                                }),
                            ],
                        }),
                }),
                null != e && (0, r.jsx)(gd, { subscription: e, onUpdated: u }),
                (0, r.jsx)(ei.D, { variant: "heading-lg/semibold", className: t6.wx, children: "Bulk Actions" }),
                (0, r.jsx)("section", {
                    className: ea()([i$.uW, i$.Uo]),
                    children: (0, r.jsx)(p.$, {
                        variant: "primary",
                        size: "sm",
                        text: "End All Subscriptions",
                        onClick: async function () {
                            (await ia.Bo.del({ url: "/debug/subscription", rejectWithError: (0, ia.fT)() }), await u());
                        },
                    }),
                }),
                m.length > 0 &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(ei.D, {
                                variant: "heading-lg/semibold",
                                className: t6.wx,
                                children: "Previous Subscriptions",
                            }),
                            m.map((e) => (0, r.jsx)(gd, { subscription: e, onUpdated: u }, e.id)),
                        ],
                    }),
            ],
        }),
    });
}
a(801541);
var gm = a(284009),
    gh = a.n(gm),
    gp = a(889137),
    gg = a(323889),
    gx = a(412703),
    gv = a(440703),
    gb = a(267548),
    gj = a(668824),
    gf = a(695366),
    gy = a(993077),
    gE = a(506988),
    gC = a(417404),
    gS = a(792620),
    g_ = a(557637),
    gN = a(66246),
    gA = a(717695),
    gk = a(10394),
    gI = a(127219),
    gD = a(107543),
    gT = a(793217),
    gR = a(317097),
    gO = a(452027),
    gw = a(265872),
    gM = a(714385),
    gP = a(581244);
let gL = function (e) {
    let { colorKey: t, value: a, onChange: n, title: l } = e,
        i = o.useRef(null);
    return (0, r.jsx)(gO.D, {
        label: l,
        children: (0, r.jsx)(gw.Y, {
            targetElementRef: i,
            renderPopout: (e) => (0, r.jsx)(uj.VN, { ...e, value: a, onChange: (e) => n(t, (0, gR.Hl)(e)) }),
            children: (e) =>
                (0, r.jsx)(en.D, {
                    ...e,
                    innerRef: i,
                    tag: "span",
                    "aria-label": "Select a color",
                    className: gP.O6,
                    style: { backgroundColor: a },
                    children: (0, r.jsx)(gM.EyeDropperIcon, { size: "xs", color: "currentColor", className: gP.WY }),
                }),
        }),
    });
};
var gU = a(346055);
let gG = function (e) {
    let { allowClicks: t = !1, children: a, withBorder: n = !1 } = e;
    return (0, r.jsx)(gU.M, {
        children: (0, r.jsx)(gy.Z, {
            className: ea()(gP.Rx, { [gP.aK]: n }),
            outline: n,
            children: (0, r.jsx)("div", {
                className: gP.AZ,
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
var gB = a(643374);
let gF = function (e) {
        let { assetKey: t, filters: a, initialValue: n, onFileChange: l, title: i } = e,
            [s, d] = o.useState(null),
            c = o.useRef(null);
        return (
            o.useEffect(
                () => () => {
                    null != c.current && URL.revokeObjectURL(c.current);
                },
                [],
            ),
            (0, r.jsx)(gO.D, {
                label: i,
                description: `Supported asset formats: ${a.join(", ")}`,
                children: (0, r.jsx)(gB.A, {
                    filename: s?.name ?? n ?? "",
                    filters: [{ name: i, extensions: a }],
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
    g$ = function (e) {
        let { assetKey: t, initialValue: a, onMessageChange: n, title: l } = e,
            [i, s] = o.useState("");
        return (
            o.useEffect(() => {
                s(a ?? "");
            }, [a]),
            (0, r.jsx)(f.k, {
                label: l,
                value: i,
                onChange: function (e) {
                    (s(e), n(t, e));
                },
            })
        );
    };
var gV = a(61387);
let gW = function (e) {
    let { onSelect: t, quest: a } = e,
        { quests: n } = (0, gV.mL)({ fetchPolicy: "cache-and-network", callerSource: "prefill_selector" }),
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
var gH = a(843282),
    gz = a(714269);
let gK = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
    ],
    gY = function (e) {
        let { onSelect: t, taskDuration: a = 10, taskConfigV2: n } = e;
        return (0, r.jsxs)(t0.B, {
            gap: 20,
            children: [
                (0, r.jsx)(gH.Pw, {
                    label: "Task Type(s)",
                    className: gz.Z,
                    placeholder: "Select Task Preset",
                    options: gK,
                    renderOptionValue: (e) => e.map((e) => (0, r.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, r.jsx)("div", { children: e.label }),
                    isSelected: (e) => {
                        var t;
                        let a, l, i, s, r;
                        return (
                            e ===
                            ((t = n.tasks),
                            (a = gx.n.PLAY_ON_PLAYSTATION in t || gx.n.PLAY_ON_XBOX in t),
                            (l = gx.n.PLAY_ON_DESKTOP in t),
                            (i = gx.n.STREAM_ON_DESKTOP in t),
                            (s = gx.n.WATCH_VIDEO in t),
                            (r = gx.n.PLAY_ACTIVITY in t),
                            a && l ? 4 : a ? 3 : l ? 0 : i ? 1 : s ? 2 : r ? 5 : void 0)
                        );
                    },
                    select: (e) => {
                        t({
                            ...n,
                            tasks: (function (e, t) {
                                let a = {};
                                switch (e) {
                                    case 1:
                                        a[gx.n.STREAM_ON_DESKTOP] = { type: gx.n.STREAM_ON_DESKTOP, target: t };
                                        break;
                                    case 0:
                                        a[gx.n.PLAY_ON_DESKTOP] = { type: gx.n.PLAY_ON_DESKTOP, target: t };
                                        break;
                                    case 3:
                                        ((a[gx.n.PLAY_ON_PLAYSTATION] = {
                                            type: gx.n.PLAY_ON_PLAYSTATION,
                                            target: t,
                                            externalIds: [],
                                        }),
                                            (a[gx.n.PLAY_ON_XBOX] = {
                                                type: gx.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            }));
                                        break;
                                    case 4:
                                        ((a[gx.n.PLAY_ON_DESKTOP] = { type: gx.n.PLAY_ON_DESKTOP, target: t }),
                                            (a[gx.n.PLAY_ON_PLAYSTATION] = {
                                                type: gx.n.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                            (a[gx.n.PLAY_ON_XBOX] = {
                                                type: gx.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            }));
                                        break;
                                    case 2:
                                        a[gx.n.WATCH_VIDEO] = {
                                            type: gx.n.WATCH_VIDEO,
                                            target: t,
                                            assets: { video: { url: "" } },
                                            messages: { videoTitle: "" },
                                        };
                                        break;
                                    case 5:
                                        a[gx.n.PLAY_ACTIVITY] = { type: gx.n.PLAY_ACTIVITY, target: t };
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
                    value: String(a / o7.A.Seconds.MINUTE),
                    onChange: function (e) {
                        let a = Number(e);
                        if (isNaN(a)) return;
                        a *= o7.A.Seconds.MINUTE;
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
var gq = a(818348);
let gJ = function () {
    let e = (0, eC.Ay)();
    return (0, r.jsx)(gO.D, {
        label: "Theme",
        children: (0, r.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
                (0, r.jsx)(eS.zy, {
                    theme: gq.NJ.LIGHT,
                    isSelected: e === gq.NJ.LIGHT,
                    onSelect: () => (0, cq.u_)({ theme: gq.NJ.LIGHT }),
                }),
                (0, r.jsx)(eS.zy, {
                    theme: gq.NJ.DARK,
                    isSelected: e === gq.NJ.DARK,
                    onSelect: () => (0, cq.u_)({ theme: gq.NJ.DARK }),
                }),
            ],
        }),
    });
};
var gQ =
    (((s = {})[(s.UNENROLLED = 0)] = "UNENROLLED"),
    (s[(s.ENROLLED = 1)] = "ENROLLED"),
    (s[(s.COMPLETED_25 = 2)] = "COMPLETED_25"),
    (s[(s.COMPLETED_50 = 3)] = "COMPLETED_50"),
    (s[(s.COMPLETED_75 = 4)] = "COMPLETED_75"),
    (s[(s.COMPLETED_100 = 5)] = "COMPLETED_100"),
    (s[(s.CLAIMED = 6)] = "CLAIMED"),
    s);
let gX = function (e) {
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
var gZ = a(321538);
let g0 = ["png", "gif", "webp"],
    g1 = [...g0, "jpg", "jpeg"],
    g2 = Array.from(new Set([...g1, "gif", "mp4", "webm"]));
function g3() {
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
let g6 = "1193992107035983872",
    g5 = {
        id: g6,
        preview: !0,
        config: {
            id: g6,
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
                        type: gv.l.REWARD_CODE,
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
                joinOperator: gj.K.AND,
                tasks: {
                    [gx.n.PLAY_ON_DESKTOP]: { type: gx.n.PLAY_ON_DESKTOP, target: 300, applications: [{ id: "123" }] },
                },
            },
            features: [],
            sharePolicy: gb.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: null,
        targetedContent: [],
    };
function g8() {
    var e;
    let [t, n] = o.useState(g5),
        l = o.useCallback((e) => {
            n({ ...e, preview: !0 });
        }, []),
        [i, s] = o.useState(gQ.UNENROLLED),
        [d, c] = o.useState(!1),
        [u, h] = o.useState(!1),
        [v, b] = o.useState(null),
        j =
            ((e = t.config),
            (0, gp.YW)(e)
                .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
                .exhaustive());
    function f(e, a) {
        if (
            "hero" === e ||
            "questBarHero" === e ||
            "gameTile" === e ||
            "logotype" === e ||
            "heroVideo" === e ||
            "questBarHeroVideo" === e
        ) {
            var n, i;
            l({
                ...t,
                config:
                    ((n = t.config),
                    (i = { [e]: a }),
                    (0, gp.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, assets: { ...e.assets, ...i } }))
                        .exhaustive()),
            });
        }
    }
    function y(e, a) {
        let n = t.config.taskConfigV2.tasks,
            i = n[gx.n.WATCH_VIDEO];
        if (null == i) return;
        let s = { ...i.assets };
        switch (e) {
            case "videoPlayerVideo":
                s.video = { url: a };
                break;
            case "videoPlayerVideoLowRes":
                s.videoLowRes = { url: a };
                break;
            case "videoPlayerThumbnail":
                s.video = { ...s.video, thumbnail: a };
                break;
            default:
                return;
        }
        l({
            ...t,
            config: {
                ...t.config,
                taskConfigV2: { ...t.config.taskConfigV2, tasks: { ...n, [gx.n.WATCH_VIDEO]: { ...i, assets: s } } },
            },
        });
    }
    function E(e, a) {
        if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
            var n, i;
            l({
                ...t,
                config:
                    ((n = t.config),
                    (i = { [e]: a }),
                    (0, gp.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, messages: { ...e.messages, ...i } }))
                        .exhaustive()),
            });
        }
    }
    function C(e, a, n) {
        if ("name" === e || "nameWithArticle" === e) {
            var i, s;
            l({
                ...t,
                config:
                    ((i = t.config),
                    (s = { [e]: a }),
                    (0, gp.YW)(i)
                        .with({ configVersion: 2 }, (e) => ({
                            ...e,
                            rewardsConfig: {
                                ...e.rewardsConfig,
                                rewards: e.rewardsConfig.rewards.map((e, t) =>
                                    t === n ? { ...e, messages: { ...e.messages, ...s } } : e,
                                ),
                            },
                        }))
                        .exhaustive()),
            });
        }
    }
    function S(e, a) {
        l({ ...t, config: { ...t.config, colors: { ...t.config.colors, [e]: a } } });
    }
    function _() {
        (0, gC.tU)(t.config) && (0, gZ.hJ)(t, gE.uF.GIFT_INVENTORY_FOR_YOU, gE.uF.INTERNAL_PREVIEW_TOOL, !0);
    }
    let N = o.useMemo(() => {
            for (let [e, a] of Object.entries(t.config.taskConfigV2.tasks)) if (null != a.target) return a.target;
            return 10 * o7.A.Seconds.MINUTE;
        }, [t.config.taskConfigV2.tasks]),
        A = o.useMemo(() => gx.n.WATCH_VIDEO in t.config.taskConfigV2.tasks, [t.config.taskConfigV2.tasks]);
    gh()(!1 !== t.preview, "Preview config must have property preview: true");
    let k = t.config.taskConfigV2.tasks[gx.n.WATCH_VIDEO];
    return (0, r.jsxs)(x.Ip, {
        className: gP.kL,
        children: [
            (0, r.jsx)(ei.D, { variant: "heading-lg/semibold", className: gP.R_, children: "Quest Preview Tool" }),
            (0, r.jsx)("div", {
                className: gP.OA,
                children: (0, r.jsx)(gW, {
                    onSelect: function (e) {
                        (b(e),
                            null == e ||
                                (s(
                                    (function (e) {
                                        if (null == e.userStatus) return gQ.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return gQ.CLAIMED;
                                        if (null != e.userStatus.completedAt) return gQ.COMPLETED_100;
                                        let t = (0, gS.Yh)(e),
                                            a = t.progressSeconds,
                                            n = t.targetSeconds;
                                        return a / n >= 1
                                            ? gQ.COMPLETED_100
                                            : a / n >= 0.75
                                              ? gQ.COMPLETED_75
                                              : a / n >= 0.5
                                                ? gQ.COMPLETED_50
                                                : a / n >= 0.25
                                                  ? gQ.COMPLETED_25
                                                  : gQ.ENROLLED;
                                    })(e),
                                ),
                                l(e)));
                    },
                    quest: v,
                }),
            }),
            (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", className: gP.fV, children: "Task Config" }),
            (0, r.jsx)("div", {
                className: gP.OA,
                children: (0, r.jsx)(gY, {
                    taskDuration: N,
                    taskConfigV2: t.config.taskConfigV2,
                    onSelect: function (e) {
                        l({ ...t, config: { ...t.config, taskConfigV2: e } });
                    },
                }),
            }),
            (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", className: gP.fV, children: "Messages" }),
            (0, r.jsxs)("div", {
                className: gP.OA,
                children: [
                    (0, r.jsx)(g$, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: E,
                        initialValue: t.config.messages.questName,
                    }),
                    (0, r.jsx)(g$, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: E,
                        initialValue: t.config.messages.gameTitle,
                    }),
                    (0, r.jsx)(g$, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: E,
                        initialValue: t.config.messages.gamePublisher,
                    }),
                    A &&
                        (0, r.jsx)(g$, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, a) {
                                let n = t.config.taskConfigV2.tasks,
                                    i = n[gx.n.WATCH_VIDEO];
                                if (null == i) return;
                                let s = { ...i.messages, [e]: a };
                                l({
                                    ...t,
                                    config: {
                                        ...t.config,
                                        taskConfigV2: {
                                            ...t.config.taskConfigV2,
                                            tasks: { ...n, [gx.n.WATCH_VIDEO]: { ...i, messages: s } },
                                        },
                                    },
                                });
                            },
                            initialValue: k?.messages.videoTitle,
                        }),
                ],
            }),
            (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", className: gP.fV, children: "Assets" }),
            (0, r.jsxs)("div", {
                className: gP.OA,
                children: [
                    (0, r.jsx)(gF, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: f,
                        filters: g2,
                        initialValue: t.config.assets.hero,
                    }),
                    (0, r.jsx)(gF, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: f,
                        filters: g2,
                        initialValue: t.config.assets.heroVideo ?? void 0,
                    }),
                    (0, r.jsx)(gF, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: f,
                        filters: g2,
                        initialValue: t.config.assets.questBarHero,
                    }),
                    (0, r.jsx)(gF, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: f,
                        filters: g2,
                        initialValue: t.config.assets.questBarHeroVideo ?? void 0,
                    }),
                    (0, r.jsx)(gF, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: f,
                        filters: [...g1, "svg"],
                        initialValue: t.config.assets.gameTile,
                    }),
                    (0, r.jsx)(gF, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: f,
                        filters: [...g0, "svg"],
                        initialValue: t.config.assets.logotype,
                    }),
                    A &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(gF, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: y,
                                    filters: g2,
                                    initialValue: k?.assets.video.url,
                                }),
                                (0, r.jsx)(gF, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: y,
                                    filters: g2,
                                    initialValue: k?.assets.videoLowRes?.url,
                                }),
                                (0, r.jsx)(gF, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: y,
                                    filters: g1,
                                    initialValue: k?.assets.video.thumbnail,
                                }),
                            ],
                        }),
                ],
            }),
            j.map((e, a) =>
                (0, r.jsxs)(
                    "div",
                    {
                        children: [
                            (0, r.jsxs)(ei.D, {
                                variant: "heading-sm/semibold",
                                className: gP.fV,
                                children: ["Reward #", a + 1],
                            }),
                            (0, r.jsxs)("div", {
                                className: gP.OA,
                                children: [
                                    (0, r.jsx)(g$, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, t) => C(e, t, a),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, r.jsx)(g$, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, t) => C(e, t, a),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== gv.l.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(gF, {
                                            title: "Asset",
                                            assetKey: "asset",
                                            onFileChange: (e, n) =>
                                                (function (e, a, n) {
                                                    if ("asset" === e) {
                                                        var i;
                                                        l({
                                                            ...t,
                                                            config:
                                                                ((i = t.config),
                                                                (0, gp.YW)(i)
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
                                            filters: g2,
                                            initialValue: e.asset,
                                        }),
                                    (0, r.jsxs)(t0.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(ei.D, {
                                                variant: "heading-xs/semibold",
                                                children: "Claim Modal",
                                            }),
                                            (0, r.jsx)(p.$, {
                                                variant: "primary",
                                                text: "Open Reward Modal",
                                                onClick: _,
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
            (0, r.jsx)(ei.D, { variant: "heading-sm/semibold", className: gP.fV, children: "Colors & Quest States" }),
            (0, r.jsxs)("div", {
                className: gP.OA,
                children: [
                    (0, r.jsxs)("div", {
                        className: gP.OA,
                        style: { marginBottom: 0 },
                        children: [
                            (0, r.jsx)(gL, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: S,
                                value: t.config.colors.primary,
                            }),
                            (0, r.jsx)(gL, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: S,
                                value: t.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: gP.OA, children: (0, r.jsx)(gJ, {}) }),
                    (0, r.jsx)(gX, {
                        onChange: function (e) {
                            switch ((s(e), e)) {
                                case gQ.UNENROLLED:
                                    l({ ...t, userStatus: null });
                                    break;
                                case gQ.ENROLLED:
                                    l({ ...t, userStatus: g3({ enrolledAt: new Date().toISOString() }) });
                                    break;
                                case gQ.COMPLETED_25:
                                    l({
                                        ...t,
                                        userStatus: g3({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * N,
                                        }),
                                    });
                                    break;
                                case gQ.COMPLETED_50:
                                    l({
                                        ...t,
                                        userStatus: g3({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * N,
                                        }),
                                    });
                                    break;
                                case gQ.COMPLETED_75:
                                    l({
                                        ...t,
                                        userStatus: g3({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * N,
                                        }),
                                    });
                                    break;
                                case gQ.COMPLETED_100:
                                    l({
                                        ...t,
                                        userStatus: g3({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: N,
                                        }),
                                    });
                                    break;
                                case gQ.CLAIMED:
                                    l({
                                        ...t,
                                        userStatus: g3({
                                            claimedAt: new Date().toISOString(),
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: N,
                                        }),
                                    });
                            }
                        },
                        value: i,
                    }),
                ],
            }),
            (0, r.jsx)(ei.D, { variant: "heading-lg/semibold", className: gP.R_, children: "Component Previews" }),
            (0, r.jsxs)("div", {
                className: gP.$$,
                children: [
                    (0, r.jsxs)(gG, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(ei.D, { variant: "heading-xs/semibold", children: "Quest Bar" }),
                            (0, r.jsxs)("div", {
                                className: gP.l4,
                                children: [
                                    t.userStatus?.claimedAt != null &&
                                        (0, r.jsx)(g.E, {
                                            color: "text-subtle",
                                            variant: "body-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, r.jsx)("div", {
                                        className: gP.ok,
                                        children: (0, r.jsx)(g_.y5, {
                                            isPreview: !0,
                                            source: "preview",
                                            adCreativeId: "0",
                                            adCreativeType: gg.p.QUEST,
                                            children: (0, r.jsx)(gA.A, {
                                                children: (0, r.jsx)(gN.QuestBarQuestContent, { quest: t }),
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(gG, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(ei.D, { variant: "heading-xs/semibold", children: "Quest Home Card" }),
                            (0, r.jsx)(g_.y5, {
                                isPreview: !0,
                                source: "preview",
                                adCreativeId: "0",
                                adCreativeType: gg.p.QUEST,
                                children: (0, r.jsx)(gT.Ay, {
                                    quest: t,
                                    className: gP.d,
                                    questContent: gE.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: gE.uF.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(gG, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(ei.D, { variant: "heading-xs/semibold", children: "Channel Call Header" }),
                            t.userStatus?.claimedAt != null &&
                                (0, r.jsx)(g.E, {
                                    color: "text-subtle",
                                    variant: "body-sm/normal",
                                    children:
                                        "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                                }),
                            (0, r.jsx)("div", {
                                className: gP.l4,
                                children: (0, r.jsx)(g_.y5, {
                                    isPreview: !0,
                                    source: "preview",
                                    adCreativeId: "0",
                                    adCreativeType: gg.p.QUEST,
                                    children: (0, r.jsx)("div", {
                                        className: gP.Jr,
                                        children: (0, r.jsx)(gk.A, {
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
                        className: gP.NY,
                        children: (0, r.jsx)(m.d, {
                            label: "Is Participating:",
                            checked: d,
                            onChange: function (e) {
                                c(e);
                            },
                        }),
                    }),
                    (0, r.jsxs)(gG, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(ei.D, { variant: "heading-xs/semibold", children: "Quest Card Embed" }),
                            u
                                ? (0, r.jsx)(gI.l, { questId: t.id })
                                : (0, r.jsx)(
                                      gD.M,
                                      {
                                          quest: t,
                                          location: gE.uF.QUESTS_EMBED,
                                          sourceQuestContent: gE.uF.INTERNAL_PREVIEW_TOOL,
                                      },
                                      t.id,
                                  ),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: gP.NY,
                        children: (0, r.jsx)(m.d, { label: "Invalid Quests Embed:", checked: u, onChange: h }),
                    }),
                    A &&
                        (0, r.jsxs)(gG, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, r.jsx)(ei.D, { variant: "heading-xs/semibold", children: "Video Player" }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        let e = performance.now();
                                        (0, P.mM)(async () => {
                                            let { default: n } = await Promise.all([
                                                a.e(651585),
                                                a.e(955628),
                                                a.e(572388),
                                                a.e(974119),
                                                a.e(392868),
                                                a.e(852701),
                                                a.e(263408),
                                                a.e(505453),
                                                a.e(182045),
                                                a.e(166631),
                                                a.e(708952),
                                            ]).then(a.bind(a, 491147));
                                            return (a) =>
                                                (0, r.jsx)(n, {
                                                    ...a,
                                                    openStartClockTime: e,
                                                    videoSessionId: "fake-quest-session-id",
                                                    questId: t.id ?? "fake-quest-id",
                                                    overrideQuest: t,
                                                    autoplay: !0,
                                                    sourceQuestContent: gE.uF.INTERNAL_PREVIEW_TOOL,
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
class g4 extends o.Component {
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
                  className: gP.TA,
                  children: [
                      (0, r.jsx)(gf.CircleErrorIcon, { className: gP.Yw }),
                      (0, r.jsx)(ei.D, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, r.jsx)(p.$, { variant: "secondary", text: "Reset", onClick: this.handleResetState }),
                      null != e.message &&
                          (0, r.jsx)(gy.Z, {
                              className: gP.Fx,
                              children: (0, r.jsx)("code", { className: gP.gJ, children: e.message }),
                          }),
                  ],
              })
            : (0, r.jsx)(g8, {}, t);
    }
}
var g9 = a(627784),
    g7 = a(839214),
    xe = a(497029),
    xt = a(450827),
    xa = a(626584),
    xn = a(174768),
    xl = a(205761),
    xi = a(949744),
    xs = a(696451),
    xr = a(537975),
    xo = a(926140);
let xd = new xa.A("SearchDebugUtils");
function xc() {
    xd.info("--------------------------");
}
function xu() {
    let e = xn.A.getProps();
    (xd.info("START Quick Switcher State"),
        xd.info(`Query: ${e.query}`),
        e.results.forEach((e) => {
            switch ((xd.info(`Result Type: ${e.type}`), e.type)) {
                case xo.rD.GUILD:
                    xd.info(`guild id: ${e.record.id}`);
                    break;
                case xo.rD.TEXT_CHANNEL:
                case xo.rD.VOICE_CHANNEL:
                    (xd.info(`channel type: ${e.record.type}`),
                        xd.info(`channel id: ${e.record.id}`),
                        xd.info(`name: ${e.record.name}`));
                    break;
                case xo.rD.DM:
                    (xd.info(`channel type: ${e.record.type}`),
                        xd.info(`channel id: ${e.record.id}`),
                        e.record.isDM() &&
                            (xd.info(`recipient id: ${e.record.getRecipientId()}`),
                            e.record.recipients.forEach((e) => {
                                let t = eg.default.getUser(e);
                                null != t &&
                                    (xd.info(`recipient username: ${t.username}`),
                                    xd.info(`recipient global name: ${ey.Ay.getGlobalName(t)}`),
                                    xd.info(`recipient nickname: ${aX.A.getNickname(t.id)}`));
                            })));
                    break;
                case xo.rD.GROUP_DM:
                    (xd.info(`channel type: ${e.record.type}`),
                        xd.info(`channel id: ${e.record.id}`),
                        xd.info(`name: ${(0, aJ.m1)(e.record, eg.default, aX.A)}`),
                        e.record.isGroupDM() &&
                            (xd.info(`default name: ${(0, aJ.ks)(e.record, eg.default, aX.A)}`),
                            xd.info(`recipient id: ${e.record.recipients}`),
                            e.record.recipients.forEach((e) => {
                                let t = eg.default.getUser(e);
                                null != t &&
                                    (xd.info(`recipient username: ${t.username}`),
                                    xd.info(`recipient global name: ${ey.Ay.getGlobalName(t)}`),
                                    xd.info(`recipient nickname: ${aX.A.getNickname(t.id)}`));
                            })));
                    break;
                case xo.rD.USER:
                    (xd.info(`user id: ${e.record.id}`),
                        xd.info(`username: ${e.record.username}`),
                        xd.info(`global name: ${ey.Ay.getGlobalName(e.record)}`),
                        xd.info(`nickname: ${aX.A.getNickname(e.record.id)}`),
                        xd.info(`guild nicknames: ${xs.Ay.getNicknames(e.record.id)}`));
            }
            (xd.info(`frecency score: ${xl.A.getScoreWithoutFetchingLatest(e.record.id)}`), xc());
        }),
        xd.info("END Quick Switcher State\n"));
}
var xm = a(143919);
function xh(e) {
    let { isUploading: t, isSuccess: a, errorMessage: n, onClick: l, title: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.$, {
                variant: "primary",
                onClick: l,
                loading: t,
                disabled: t,
                text: t ? "Uploading\u2026" : i,
            }),
            null != n &&
                (0, r.jsx)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-feedback-critical",
                    className: xm.qS,
                    children: n,
                }),
            a &&
                (0, r.jsx)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-feedback-positive",
                    className: xm.qS,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
let xp = (0, g7.D)(() => ({
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
function xg() {
    let e = xp.useField("includeFrecency"),
        t = xp.useField("includeFriends"),
        a = xp.useField("includeDMs"),
        n = xp.useField("includeGDMs"),
        l = xp.useField("includeQuickSwitcherState"),
        i = xp.useField("includeUserSearchWorkerState"),
        s = xp.useField("isUploading"),
        d = xp.useField("isSuccess"),
        c = xp.useField("errorMessage"),
        h = o.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: a,
                includeDMs: n,
                includeQuickSwitcherState: l,
                includeUserSearchWorkerState: i,
                isUploading: s,
            } = xp.getState();
            if (!s)
                try {
                    let s, r, o, d, c, u, m, h, p, g, x, v;
                    (xp.setState({ isUploading: !0, errorMessage: null, isSuccess: !1 }),
                        t &&
                            ((s = aX.A.getFriendIDs()),
                            xd.info("START Discord Friends"),
                            s.forEach((e) => {
                                let t = eg.default.getUser(e);
                                if (null == t) return;
                                let a = t.username,
                                    n = ey.Ay.getGlobalName(t),
                                    l = aX.A.getNickname(t.id),
                                    i = xs.Ay.getNicknames(t.id);
                                (xd.info(`username: ${a}`),
                                    xd.info(`global name: ${n}`),
                                    xd.info(`nickname: ${l}`),
                                    xd.info(`guild nicknames: ${i}`),
                                    xc());
                            }),
                            xd.info("END Discord Friends\n")),
                        a &&
                            ((r = aQ.A.getMutablePrivateChannels()),
                            (o = []),
                            (d = []),
                            Object.values(r).forEach((e) => {
                                (e.isGroupDM() && o.push(e), e.isDM() && d.push(e));
                            }),
                            xd.info("START Logging Group DM Channels"),
                            o.forEach((e) => {
                                let t = (0, aJ.m1)(e, eg.default, aX.A),
                                    a = (0, aJ.ks)(e, eg.default, aX.A);
                                (xd.info(`id: ${e.id}`),
                                    xd.info(`name: ${t}`),
                                    xd.info(`default name: ${a}`),
                                    xd.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = eg.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = ey.Ay.getGlobalName(t),
                                            l = aX.A.getNickname(t.id),
                                            i = xs.Ay.getNicknames(t.id);
                                        (xd.info(`username: ${a}`),
                                            xd.info(`global name: ${n}`),
                                            xd.info(`nickname: ${l}`),
                                            xd.info(`guild nicknames: ${i}`),
                                            xc());
                                    }));
                            }),
                            xd.info("END Logging Group DM Channels\n"),
                            xd.info("START Logging DM Channels"),
                            d.forEach((e) => {
                                let t = (0, aJ.m1)(e, eg.default, aX.A);
                                (xd.info(`id: ${e.id}`), xd.info(`name: ${t}`));
                                let a = e.getRecipientId(),
                                    n = eg.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    i = ey.Ay.getGlobalName(n),
                                    s = aX.A.getNickname(n.id);
                                (xd.info(`username: ${l}`),
                                    xd.info(`global name: ${i}`),
                                    xd.info(`nickname: ${s}`),
                                    xc());
                            }),
                            xd.info("END Logging DM Channels\n")),
                        n &&
                            ((c = aQ.A.getMutablePrivateChannels()),
                            (u = []),
                            (m = []),
                            Object.values(c).forEach((e) => {
                                (e.isGroupDM() && u.push(e), e.isDM() && m.push(e));
                            }),
                            xd.info("START Logging Group DM Channels"),
                            u.forEach((e) => {
                                let t = (0, aJ.m1)(e, eg.default, aX.A),
                                    a = (0, aJ.ks)(e, eg.default, aX.A);
                                (xd.info(`id: ${e.id}`),
                                    xd.info(`name: ${t}`),
                                    xd.info(`default name: ${a}`),
                                    xd.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = eg.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = ey.Ay.getGlobalName(t),
                                            l = aX.A.getNickname(t.id),
                                            i = xs.Ay.getNicknames(t.id);
                                        (xd.info(`username: ${a}`),
                                            xd.info(`global name: ${n}`),
                                            xd.info(`nickname: ${l}`),
                                            xd.info(`guild nicknames: ${i}`),
                                            xc());
                                    }));
                            }),
                            xd.info("END Logging Group DM Channels\n"),
                            xd.info("START Logging DM Channels"),
                            m.forEach((e) => {
                                let t = (0, aJ.m1)(e, eg.default, aX.A);
                                (xd.info(`id: ${e.id}`), xd.info(`name: ${t}`));
                                let a = e.getRecipientId(),
                                    n = eg.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    i = ey.Ay.getGlobalName(n),
                                    s = aX.A.getNickname(n.id);
                                (xd.info(`username: ${l}`),
                                    xd.info(`global name: ${i}`),
                                    xd.info(`nickname: ${s}`),
                                    xc());
                            }),
                            xd.info("END Logging DM Channels\n")),
                        e &&
                            ((h = xl.A.getFrequentlyWithoutFetchingLatest()),
                            (p = []),
                            (g = []),
                            (x = []),
                            (v = []),
                            h.forEach((e) => {
                                (0, xr.fh)(e)
                                    ? p.push(e)
                                    : e.isDM()
                                      ? x.push(e)
                                      : e.isMultiUserDM()
                                        ? v.push(e)
                                        : g.push(e);
                            }),
                            xd.info("START Frecency"),
                            xd.info("Guilds"),
                            p.forEach((e) => {
                                let t = xl.A.getScoreWithoutFetchingLatest(e.id);
                                xd.info(`id: ${e.id} - name: ${e.name} - Frecency Score: ${t}`);
                            }),
                            xc(),
                            xd.info("DM Channels"),
                            x.forEach((e) => {
                                let t = xl.A.getScoreWithoutFetchingLatest(e.id);
                                xd.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            xc(),
                            xd.info("Group DM Channels"),
                            v.forEach((e) => {
                                let t = xl.A.getScoreWithoutFetchingLatest(e.id);
                                (xd.info(`id: ${e.id} - Frecency Score: ${t}`),
                                    xd.info(`default name: ${(0, aJ.ks)(e, eg.default, aX.A)}`),
                                    xd.info(`name: ${(0, aJ.m1)(e, eg.default, aX.A)}`));
                            }),
                            xc(),
                            xd.info("Guild Channels"),
                            g.forEach((e) => {
                                let t = xl.A.getScoreWithoutFetchingLatest(e.id);
                                xd.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            xc(),
                            xd.info("END Frecency\n")),
                        l && xu(),
                        i &&
                            (async function () {
                                xd.info("START User Search Worker State");
                                let e = await xt.A.requestDebugState();
                                null == e
                                    ? xd.info("Unable to get debug state from User Search Worker")
                                    : (Object.entries(JSON.parse(e.users)).forEach((e) => {
                                          let [t, a] = e;
                                          (xd.info(`id: ${t}`),
                                              xd.info(`username: ${a.username}`),
                                              xd.info(`global name: ${a.globalName}`),
                                              xd.info(`nickname: ${a.friendNickname}`),
                                              Object.entries(a.nicknames).forEach((e) => {
                                                  let [t, a] = e;
                                                  (xd.info(`guild id: ${t}`), xd.info(`guild nickname: ${a}`));
                                              }),
                                              xc());
                                      }),
                                      xd.info("END User Search Worker State\n"));
                            })(),
                        await (0, xe.a)(ej.Umv.WEB_APP),
                        xp.setState({ isSuccess: !0, errorMessage: null }));
                } catch (t) {
                    let e = new g9.LG(t);
                    xp.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    xp.setState({ isUploading: !1 });
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
                onChange: () => xp.setState({ includeFrecency: !e }),
            }),
            (0, r.jsx)(m.d, {
                label: "Friends",
                description: "Includes all Discord Friend usernames, global names, and nicknames.",
                checked: t,
                onChange: () => xp.setState({ includeFriends: !t }),
            }),
            (0, r.jsx)(m.d, {
                label: "DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                checked: a,
                onChange: () => xp.setState({ includeDMs: !a }),
            }),
            (0, r.jsx)(m.d, {
                label: "Group DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                checked: n,
                onChange: () => xp.setState({ includeGDMs: !n }),
            }),
            (0, r.jsx)(m.d, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: l,
                onChange: () => xp.setState({ includeQuickSwitcherState: !l }),
            }),
            (0, r.jsx)(m.d, {
                label: "User Search Worker",
                description:
                    "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                checked: i,
                onChange: () => xp.setState({ includeUserSearchWorkerState: !i }),
            }),
            (0, r.jsx)(xh, {
                isUploading: s,
                isSuccess: d,
                errorMessage: c,
                onClick: h,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
let xx = (0, g7.D)(() => ({ userIds: [], isLoading: !1, isSuccess: !1, errorMessage: null, lastRunAt: null }));
function xv() {
    let e = xx.useField("userIds"),
        t = xx.useField("isLoading"),
        a = xx.useField("isSuccess"),
        n = xx.useField("errorMessage"),
        l = xx.useField("lastRunAt"),
        i = o.useCallback(async () => {
            xx.setState({ isLoading: !0, errorMessage: null, isSuccess: !1 });
            try {
                let e = await (async function () {
                    let e = await xt.A.requestDebugState();
                    if (null == e) throw Error("Unable to get debug state from User Search Worker");
                    let t = JSON.parse(e.users),
                        a = eg.default.getUsers(),
                        n = new Set(Object.keys(t)),
                        l = p6.default.keys(a),
                        i = [];
                    return (
                        l.forEach((e) => {
                            n.has(e) || i.push(e);
                        }),
                        i
                    );
                })();
                xx.setState({ userIds: e, errorMessage: null, isSuccess: !0, lastRunAt: new Date().toISOString() });
            } catch (e) {
                xx.setState({ errorMessage: e, isSuccess: !1 });
            } finally {
                xx.setState({ isLoading: !1 });
            }
        }, []),
        s = o.useMemo(
            () =>
                e.map((e) => {
                    let t = eg.default.getUser(e),
                        a = null != t ? ey.Ay.getName(t) : "Unknown";
                    return (0, r.jsx)(
                        "div",
                        {
                            className: xm.J1,
                            children: (0, r.jsx)(g.E, { variant: "body-md/normal", children: `${a} (${e})` }),
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
                (0, r.jsx)(p.$, { onClick: i, text: "Diff User State", loading: t, disabled: t }),
                (0, r.jsxs)("div", {
                    className: xm.N6,
                    children: [
                        null != n &&
                            (0, r.jsx)(g.E, {
                                variant: "body-sm/normal",
                                color: "text-feedback-critical",
                                className: xm.qS,
                                children: n,
                            }),
                        a &&
                            e.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(g.E, { variant: "body-md/normal", children: `Last run at: ${l}` }),
                                    (0, r.jsx)(g.E, {
                                        variant: "body-md/normal",
                                        children: "User IDs missing from Worker:",
                                    }),
                                    (0, r.jsx)("div", { className: xm.uk, children: s }),
                                ],
                            }),
                        a &&
                            0 === e.length &&
                            (0, r.jsx)(g.E, { variant: "body-md/normal", children: "No users missing from Worker" }),
                    ],
                }),
            ],
        }),
    });
}
let xb = (0, g7.D)(() => ({ isRecording: !1, isUploading: !1, isSuccess: !1, errorMessage: null }));
function xj() {
    let e = xb.useField("isRecording"),
        t = xb.useField("isUploading"),
        a = xb.useField("isSuccess"),
        n = xb.useField("errorMessage"),
        l = o.useRef([]),
        i = o.useRef(""),
        s = o.useCallback(() => {
            let { results: e, query: t } = xn.A.getProps();
            (l.current !== e || i.current !== t) && ((l.current = e), (i.current = t), xu());
        }, []);
    o.useEffect(() => {
        if (e) return (xn.A.addChangeListener(s), () => xn.A.removeChangeListener(s));
    }, [s, e]);
    let d = o.useCallback(async () => {
        let { isUploading: e } = xb.getState();
        if (!e)
            try {
                (xb.setState({ isRecording: !1, isUploading: !0, errorMessage: null, isSuccess: !1 }),
                    await (0, xe.a)(ej.Umv.WEB_APP),
                    xb.setState({ isSuccess: !0, errorMessage: null }));
            } catch (t) {
                let e = new g9.LG(t);
                xb.setState({ errorMessage: e.getAnyErrorMessage() });
            } finally {
                xb.setState({ isUploading: !1 });
            }
    }, []);
    return (0, r.jsxs)(u.n, {
        label: "Debug Logs Session",
        description:
            "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
        children: [
            (0, r.jsx)(el.w, {
                type: "info",
                message: "When you are done, please remember to upload the logs.",
                role: "none",
            }),
            (0, r.jsxs)(nj.e, {
                children: [
                    (0, r.jsx)(p.$, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => xb.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, r.jsx)(xh, {
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
var xf = a(145497);
let xy = (0, g7.D)(() => ({ userId: null, state: null, loading: !1, error: null }));
function xE(e) {
    let { title: t, guildIds: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: xm.J1,
                children: (0, r.jsx)(g.E, { variant: "body-sm/normal", children: t }),
            }),
            (0, r.jsxs)("div", {
                className: xm.uk,
                children: [
                    0 === a.length &&
                        (0, r.jsx)("div", {
                            className: xm.J1,
                            children: (0, r.jsx)(g.E, { variant: "body-sm/normal", children: "None" }),
                        }),
                    a.map((e) => {
                        let t = nA.A.getGuild(e);
                        return null == t
                            ? null
                            : (0, r.jsxs)(
                                  "div",
                                  {
                                      className: xm.J1,
                                      children: [
                                          (0, r.jsx)(xf.Ay, { guild: t, iconSize: 16 }),
                                          (0, r.jsx)(g.E, { variant: "body-sm/normal", children: t.name }),
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
function xC(e) {
    let { userState: t } = e,
        { user: a, searchWorkerUser: n, guildMembers: l, guildMemberRequests: i } = t,
        s = o.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, r.jsx)(sp.CircleCheckIcon, { size: "sm", color: e1.A.colors.STATUS_POSITIVE })
                : (0, r.jsx)(gf.CircleErrorIcon, { size: "sm", color: e1.A.colors.ICON_FEEDBACK_CRITICAL });
        }, []);
    return (0, r.jsxs)("div", {
        className: xm.N6,
        children: [
            (0, r.jsxs)("div", {
                className: xm.J1,
                children: [
                    s({ ok: null != a }),
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        children: null != a ? "User exists in UserStore" : "User does not exist in UserStore",
                    }),
                ],
            }),
            null != a &&
                (0, r.jsx)("div", {
                    className: xm.uk,
                    children: (0, r.jsx)("div", {
                        className: xm.J1,
                        children: (0, r.jsx)(g.E, { variant: "body-sm/normal", children: `username: ${a.username}` }),
                    }),
                }),
            (0, r.jsxs)("div", {
                className: xm.J1,
                children: [
                    s({ ok: null != n }),
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        children:
                            null != n
                                ? "User exists in User Search Worker"
                                : "User does not exist in User Search Worker",
                    }),
                ],
            }),
            null != n &&
                (0, r.jsxs)("div", {
                    className: xm.uk,
                    children: [
                        (0, r.jsx)("div", {
                            className: xm.J1,
                            children: (0, r.jsx)(g.E, {
                                variant: "body-sm/normal",
                                children: `username: ${n.username}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: xm.J1,
                            children: (0, r.jsx)(g.E, {
                                variant: "body-sm/normal",
                                children: `global name: ${n.globalName ?? "\u2014"}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: xm.J1,
                            children: (0, r.jsx)(g.E, { variant: "body-sm/normal", children: "nicknames:" }),
                        }),
                        (0, r.jsxs)("div", {
                            className: xm.uk,
                            children: [
                                0 === Object.keys(n.nicknames).length &&
                                    (0, r.jsx)("div", {
                                        className: xm.J1,
                                        children: (0, r.jsx)(g.E, { variant: "body-sm/normal", children: "None" }),
                                    }),
                                Object.entries(n.nicknames).map((e) => {
                                    let [t, a] = e,
                                        n = nA.A.getGuild(t),
                                        l = aQ.A.getChannel(t);
                                    return (0, r.jsxs)(
                                        "div",
                                        {
                                            className: xm.J1,
                                            children: [
                                                null != n && (0, r.jsx)(xf.Ay, { guild: n, iconSize: 16 }),
                                                null != n &&
                                                    (0, r.jsx)(g.E, { variant: "body-sm/normal", children: n.name }),
                                                null == n &&
                                                    null != l &&
                                                    (0, r.jsx)(g.E, {
                                                        variant: "body-sm/normal",
                                                        children: (0, aJ.m1)(l, eg.default, aX.A),
                                                    }),
                                                (0, r.jsx)(g.E, { variant: "body-sm/normal", children: ` (${t})` }),
                                                null != a &&
                                                    "" !== a &&
                                                    (0, r.jsx)(g.E, { variant: "body-sm/normal", children: ` - ${a}` }),
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
                className: xm.J1,
                children: [
                    s({ ok: l.length > 0 }),
                    (0, r.jsx)(g.E, {
                        variant: "body-sm/normal",
                        children: l.length > 0 ? "Guild members exist:" : "No guild members exist",
                    }),
                ],
            }),
            l.length > 0 &&
                (0, r.jsx)("div", {
                    className: xm.uk,
                    children: l.map((e) => {
                        let t = nA.A.getGuild(e.guildId);
                        if (null == t) return null;
                        let a = e.nick ?? "";
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: xm.J1,
                                children: [
                                    (0, r.jsx)(xf.Ay, { guild: t, iconSize: 16 }),
                                    (0, r.jsxs)(g.E, {
                                        variant: "body-sm/normal",
                                        children: [t.name, "" !== a ? ` - ${a}` : ""],
                                    }),
                                ],
                            },
                            `${e.guildId}`,
                        );
                    }),
                }),
            (0, r.jsxs)("div", {
                className: xm.J1,
                children: [
                    (0, r.jsx)(ub.CircleInformationIcon, { size: "sm" }),
                    (0, r.jsx)(g.E, { variant: "body-sm/normal", children: "GuildMemberRequesterStore State" }),
                ],
            }),
            null != i &&
                (0, r.jsxs)("div", {
                    className: xm.uk,
                    children: [
                        (0, r.jsx)(xE, { title: "Pending Guild Member Requests:", guildIds: i.pendingRequestGuildIds }),
                        (0, r.jsx)(xE, { title: "Sent Guild Member Requests:", guildIds: i.sentRequestGuildIds }),
                        (0, r.jsx)(xE, {
                            title: "Unacknowledged Guild Member Requests:",
                            guildIds: i.unacknowledgedRequestGuildIds,
                        }),
                    ],
                }),
        ],
    });
}
function xS() {
    let e = o.useCallback((e) => {
            xy.setState({ userId: e, state: null });
        }, []),
        t = o.useCallback(async () => {
            let { userId: e, loading: t } = xy.getState();
            if (!t && null != e) {
                xy.setState({ loading: !0, error: null });
                try {
                    let t = await (async function (e) {
                        let t = await xt.A.requestDebugState(),
                            a = null != t ? JSON.parse(t.users)[e] : null,
                            n = nA.A.getGuildIds(),
                            l = [];
                        n.forEach((t) => {
                            let a = xs.Ay.getMember(t, e);
                            null != a && l.push(a);
                        });
                        let i = xi.A.getDebugState(e);
                        return {
                            user: eg.default.getUser(e),
                            searchWorkerUser: a,
                            guildMembers: l,
                            guildMemberRequests: i,
                        };
                    })(e);
                    xy.setState({ state: t, loading: !1 });
                } catch (t) {
                    let e = new g9.LG(t);
                    xy.setState({ error: e.getAnyErrorMessage(), loading: !1 });
                } finally {
                    xy.setState({ loading: !1 });
                }
            }
        }, []),
        a = xy.useField("loading");
    return (0, r.jsxs)("div", {
        className: xm.$n,
        children: [
            (0, r.jsx)(f.k, { placeholder: "User ID", onChange: e }),
            (0, r.jsx)(p.$, { onClick: t, text: "Get Snapshot", loading: a, disabled: a }),
        ],
    });
}
function x_() {
    let e = xy.useField("state"),
        t = xy.useField("error");
    return (0, r.jsxs)(u.n, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, r.jsx)(xS, {}),
            null != t &&
                (0, r.jsx)(g.E, {
                    variant: "body-sm/normal",
                    color: "text-feedback-critical",
                    className: xm.qS,
                    children: t,
                }),
            null != e && (0, r.jsx)(xC, { userState: e }),
        ],
    });
}
function xN() {
    return (0, r.jsxs)(x.Ip, {
        className: xm.nd,
        children: [
            (0, r.jsx)(xj, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(xg, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(x_, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(xv, {}),
        ],
    });
}
var xA = a(761508),
    xk = a(36692),
    xI = a(808411),
    xD = a(624716),
    xT = a(398590),
    xR = a(101715),
    xO = a(582695),
    xw = a(713387),
    xM = a(865868);
let xP = [
        { id: "virtual-currency", name: "Virtual Current (Orb) Components" },
        { id: "nitro", name: "Nitro Components" },
    ],
    xL = {
        "virtual-currency": function () {
            return (0, r.jsxs)(xw.Hq, {
                label: "Open New Revenue Storybook",
                direction: "vertical",
                children: [
                    (0, r.jsx)(g.E, {
                        variant: "body-md/normal",
                        color: "text-feedback-info",
                        style: { marginBottom: "8px" },
                        children: "This section is deprecated. Use button to open the new Revenue Storybook instead.",
                    }),
                    (0, r.jsx)(p.$, {
                        onClick: () => {
                            var e;
                            return (
                                (e = xO.lB.VIRTUAL_CURRENCY),
                                void (xR.x.setState({ selectedCollection: e, selectedStory: null }),
                                (0, xT.id)(ej.zgK.COMPONENT_PLAYGROUND))
                            );
                        },
                        text: "Open New Revenue Storybook",
                    }),
                ],
            });
        },
        nitro: function () {
            return (0, r.jsxs)("div", { children: [(0, r.jsx)(xk.o, {}), (0, r.jsx)(xI.A, {}), (0, r.jsx)(xD.A, {})] });
        },
    };
function xU() {
    let [e, t] = o.useState("virtual-currency"),
        a = o.useMemo(() => xL[e], [e]);
    return (0, r.jsxs)("div", {
        className: ea()(t6.nd, xM.kL),
        children: [
            (0, r.jsx)(xA.V, {
                className: xM.$H,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: xP.map((e) => (0, r.jsx)(xA.V.Item, { id: e.id, children: e.name }, e.id)),
            }),
            (0, r.jsx)(x.Ar, { children: (0, r.jsx)("div", { className: xM.Qs, children: (0, r.jsx)(a, {}) }) }),
        ],
    });
}
var xG = a(718446),
    xB = a(766075),
    xF = a(355097);
let x$ = (0, g7.D)(() => ({ urlString: "", error: null })),
    xV = Object.entries(xF.od).map((e) => {
        let [t, a] = e;
        return { id: t, label: a, value: t };
    });
function xW() {
    let [e, t] = o.useState(),
        a = x$.useField("urlString"),
        n = x$.useField("error"),
        l = o.useCallback(() => {
            let e = x$.getField("urlString");
            if (null == e || "" === e) return void x$.setState({ error: "URL is required" });
            let t = (0, xG.parseSettingsUrl)({ path: e });
            ((0, xG.trackParseSettingsUrl)(t, "devtools"), null == t.target)
                ? x$.setState({ error: "String did not match expected format" })
                : (0, xB.openUserSettings)(t.target, { path: t.path });
        }, []);
    return (0, r.jsxs)(u.n, {
        label: "Settings Deep Link Tool",
        children: [
            (0, r.jsx)(ak.Z, {
                label: "[optional] Choose a path",
                clearable: !0,
                value: e,
                placeholder: "Select a settings path",
                options: xV,
                selectionMode: "single",
                onSelectionChange: (e) => {
                    if ((t(e), null != e)) {
                        let [t, a] = xF.od[e].split("/");
                        x$.setState({ urlString: ej.BVt.SETTINGS(t, a), error: null });
                    }
                },
                fullWidth: !0,
            }),
            (0, r.jsx)(f.k, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                value: a,
                onChange: (e) => x$.setState({ urlString: e, error: null }),
            }),
            (0, r.jsxs)(nj.e, {
                children: [
                    (0, r.jsx)(p.$, {
                        variant: "primary",
                        onClick: l,
                        text: "Open User Settings for URL",
                        disabled: "" === a,
                    }),
                    (0, r.jsx)(p.$, {
                        variant: "secondary",
                        onClick: () => (0, nX.C)(`${window.location.origin}${a}`),
                        disabled: "" === a,
                        text: "Copy URL",
                    }),
                ],
            }),
            null != n && (0, r.jsx)(g.E, { variant: "body-sm/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
var xH = a(780964);
let xz = (0, g7.D)(() => ({ setting: xH.X.ACCOUNT_PANEL }));
function xK() {
    let e = xz.useField("setting"),
        t = o.useCallback(() => {
            (0, xB.openUserSettings)(e);
        }, [e]),
        a = o.useMemo(() => Object.values(xH.X).map((e) => ({ id: e, label: e, value: e })), []);
    return (0, r.jsxs)(u.n, {
        label: "Settings Navigation Tool",
        children: [
            (0, r.jsx)(ak.Z, {
                label: "Setting",
                placeholder: "Select a setting",
                value: e,
                onSelectionChange: (e) => xz.setState({ setting: e }),
                options: a,
                selectionMode: "single",
                clearable: !0,
            }),
            (0, r.jsx)(p.$, { variant: "primary", onClick: t, text: "Open User Settings" }),
        ],
    });
}
var xY = a(963935),
    xq = a(158935),
    xJ = a(333357);
function xQ(e) {
    let { title: t, initExpanded: a, highlightMode: n = "none", children: l } = e,
        [i, s] = o.useState(a),
        d = o.useCallback(() => {
            s(!i);
        }, [i]),
        c = "migrated" === n || "migrated-root" === n ? void 0 : "text-feedback-warning";
    function u(e) {
        return (0, r.jsx)(g.E, { variant: e, color: c, children: t });
    }
    return null == l
        ? (0, r.jsx)("div", { className: xJ.NF, children: u("body-md/normal") })
        : (0, r.jsxs)("div", {
              className: xJ.NF,
              children: [
                  (0, r.jsxs)(en.D, {
                      className: xJ.jr,
                      onClick: d,
                      children: [
                          u("body-md/semibold"),
                          (0, r.jsx)(iU.A, {
                              direction: i ? iU.A.Directions.DOWN : iU.A.Directions.RIGHT,
                              className: xJ.D,
                          }),
                      ],
                  }),
                  i && (0, r.jsx)("div", { className: xJ.m4, children: l }),
              ],
          });
}
function xX(e) {
    let { setting: t, depth: a, inheritedHighlightMode: n } = e,
        l = (function (e, t) {
            if ("migrated" === t) return "migrated";
            switch (e.type) {
                case xY.Z6.ROOT:
                    return "migrated-root";
                case xY.Z6.SECTION:
                case xY.Z6.PANEL:
                case xY.Z6.SIDEBAR_ITEM:
                    return "migrated";
                default:
                    return t ?? "migrated";
            }
        })(t, n),
        i = "migrated" === l ? "migrated" : void 0,
        s = null;
    return (
        (0, xY.nW)(t) &&
            t.layout.length > 0 &&
            (s = t.layout.map((e) => (0, r.jsx)(xX, { setting: e, depth: a + 1, inheritedHighlightMode: i }, e.key))),
        (0, r.jsx)(xQ, { title: t.key, initExpanded: a <= 2, highlightMode: l, children: s })
    );
}
function xZ() {
    let { node: e } = (0, eh.Ay)(xq.D, ""),
        t = (0, eh.KA)();
    return (0, r.jsxs)(u.n, {
        label: "Settings Tree",
        children: [
            (0, r.jsx)(m.d, {
                label: "Bypass Predicates",
                description: "Forces all migrated settings to be visible.",
                checked: t,
                onChange: eh.jL,
            }),
            (0, r.jsx)(xX, { setting: e, depth: 1 }, e.key),
        ],
    });
}
var x0 = a(728564);
function x1() {
    return (0, r.jsxs)(x.Ip, {
        className: x0.n,
        children: [
            (0, r.jsx)(xK, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(xW, {}),
            (0, r.jsx)(b.c, {}),
            (0, r.jsx)(xZ, {}),
        ],
    });
}
function x2() {
    return o.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: nb.fu.EXPERIMENTS,
                tags: ["events", "impressions", "tracking"],
                render: () => (0, r.jsx)(lu, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: nb.fu.EXPERIMENTS,
                tags: ["experiments", "exposure", "buckets"],
                render: () => (0, r.jsx)(hO, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: nb.fu.EVENTS,
                tags: ["flux", "state"],
                render: () => (0, r.jsx)(hd, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: nb.fu.EVENTS,
                tags: ["flux", "actions"],
                render: () => (0, r.jsx)(iS, {}),
            },
        ];
        return (
            nd.A.isDeveloper &&
                (e.push({ id: "shop", name: "Shop Overrides", group: nb.fu.SHOP, render: () => (0, r.jsx)(m3, {}) }),
                e.push({
                    id: "storefront",
                    name: "Storefront Overrides",
                    group: nb.fu.STOREFRONT,
                    render: () => (0, r.jsx)(ht, {}),
                }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: nb.fu.BILLING,
                    tags: ["gifts", "nitro", "boost", "sku", "collectibles"],
                    render: () => (0, r.jsx)(cn, {}),
                }),
                e.push({
                    id: "shop_collectibles",
                    name: "Collectibles Preview",
                    group: nb.fu.SHOP,
                    render: () => (0, r.jsx)(tJ, {}),
                }),
                e.push({
                    id: "shop_game_server_hosting",
                    name: "GSH",
                    group: nb.fu.SHOP,
                    tags: ["game server", "gsh", "highlight", "checkout"],
                    render: () => (0, r.jsx)(aU, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: nb.fu.DEVELOPMENT,
                    tags: ["captcha", "safety", "checkpoint", "vibe", "vibing", "override", "premium type"],
                    render: () => (0, r.jsx)(uW, {}),
                }),
                e.push({
                    id: "routing_key",
                    name: "Routing Key",
                    group: nb.fu.DEVELOPMENT,
                    tags: ["routing", "traffic", "routing-key", "network"],
                    render: () => (0, r.jsx)(u1, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: nb.fu.DEVELOPMENT,
                    tags: ["secure frames", "encryption"],
                    render: () => (0, r.jsx)(iA, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: nb.fu.DEVELOPMENT,
                    tags: ["fps", "frames", "gateway", "telemetry"],
                    render: () => (0, r.jsx)(ck.Ay, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: nb.fu.USERS,
                    tags: ["surveys"],
                    render: () => (0, r.jsx)(iO, {}),
                }),
                e.push({ id: "overlay", name: "Overlay v3", group: nb.fu.GAMES, render: () => (0, r.jsx)(dB, {}) }),
                e.push({
                    id: "generated_test_user",
                    name: "Generated Test Users",
                    group: nb.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(sw, {}),
                }),
                nc.isPlatformEmbedded &&
                    (e.push({
                        id: "detected_games",
                        name: "Detected Games",
                        group: nb.fu.GAMES,
                        render: () => (0, r.jsx)(it, {}),
                    }),
                    e.push({
                        id: "running_game_detection",
                        name: "Running Game Detection",
                        group: nb.fu.GAMES,
                        tags: ["detection", "filter", "blocklist", "native"],
                        render: () => (0, r.jsx)(u4, {}),
                    }),
                    e.push({
                        id: "game_icon_extractor",
                        name: "Game Icon Extractor",
                        group: nb.fu.GAMES,
                        tags: ["ico", "icon", "png", "rtc"],
                        render: () => (0, r.jsx)(iQ, {}),
                    }),
                    e.push({
                        id: "game_mode",
                        name: "Game Mode",
                        group: nb.fu.GAMES,
                        tags: ["fps", "frame rate", "throttle", "performance", "reduce motion"],
                        render: () => (0, r.jsx)(aA, {}),
                    })),
                e.push({
                    id: "detectable_cache",
                    name: "Detectable Cache",
                    group: nb.fu.GAMES,
                    tags: ["games", "cache", "skus", "stale"],
                    render: () => (0, r.jsx)(l6, {}),
                }),
                e.push({ id: "slayer_sdk", name: "Slayer SDK", group: nb.fu.GAMES, render: () => (0, r.jsx)(m5, {}) }),
                e.push({
                    id: "account_linking",
                    name: "Account Linking",
                    group: nb.fu.GAMES,
                    render: () => (0, r.jsx)(nO, {}),
                }),
                e.push({
                    id: "game_upsells",
                    name: "Game Upsells",
                    group: nb.fu.GAMES,
                    tags: ["dismissible", "cooldown", "dcf"],
                    render: () => (0, r.jsx)(aY, {}),
                }),
                e.push({
                    id: "slayer_storefront",
                    name: "Slayer Storefront",
                    group: nb.fu.GAMES,
                    render: () => (0, r.jsx)(no, {}),
                }),
                e.push({
                    id: "game_profile",
                    name: "Game Profile",
                    group: nb.fu.GAMES,
                    render: () => (0, r.jsx)(aM, {}),
                }),
                e.push({
                    id: ui.NM,
                    name: "Presence Resolution",
                    group: nb.fu.GAMES,
                    tags: ["presence", "activity", "application", "linked games", "game profile"],
                    render: () => (0, r.jsx)(ux, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: nb.fu.USERS,
                    render: () => (0, r.jsx)(xN, {}),
                }),
                e.push({ id: "clips", name: "Clips", group: nb.fu.AUDIO_VIDEO, render: () => (0, r.jsx)(ee, {}) })),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                e.push({
                    id: "partner_perks",
                    name: "Partner Perks",
                    group: nb.fu.PREMIUM,
                    tags: ["xgp"],
                    render: () => (0, r.jsx)(dq, {}),
                }),
            e.push({
                id: "rive",
                name: "Rive",
                group: nb.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(uY, {}),
            }),
            e.push({
                id: "gradient-contrast",
                name: "Tab Hover Gradient",
                group: nb.fu.UI,
                tags: ["accessibility", "contrast", "gradient", "wcag", "shop", "quests", "artwork"],
                render: () => (0, r.jsx)(rg, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: nb.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(rq, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: nb.fu.UI,
                tags: ["i18n", "localization", "messages"],
                render: () => (0, r.jsx)(rP, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: nb.fu.UI,
                tags: ["tokens", "themes", "palette"],
                render: () => (0, r.jsx)(lk, {}),
            }),
            e.push({ id: "design_toggles", name: "Design Toggles", group: nb.fu.UI, render: () => (0, r.jsx)(l0, {}) }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: nb.fu.UI,
                render: () => (0, r.jsx)(c4, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: nb.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(i6, { devSettingsCategory: S.xW.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: nb.fu.USERS,
                tags: ["dm", "nux", "system dm"],
                render: () => (0, r.jsx)(or, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: nb.fu.EXPERIMENTS,
                render: () => (0, r.jsx)(i6, { devSettingsCategory: S.xW.REPORTING }),
            }),
            e.push({ id: "permissions", name: "Permissions", group: nb.fu.USERS, render: () => (0, r.jsx)(cV, {}) }),
            e.push({
                id: "modals",
                name: "Modals",
                group: nb.fu.UI,
                tags: ["dialogs", "popups"],
                render: () => (0, r.jsx)(ob, {}),
            }),
            e.push({
                id: "menus",
                name: "Menus",
                group: nb.fu.UI,
                tags: ["contextmenus", "popout"],
                render: () => (0, r.jsx)(rZ, {}),
            }),
            e.push({
                id: "toasts",
                name: "Toasts",
                group: nb.fu.UI,
                tags: ["notifications", "snackbar", "mana"],
                render: () => (0, r.jsx)(hk, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: nb.fu.UI,
                tags: ["verification", "safety flow"],
                render: () => (0, r.jsx)(rW, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: nb.fu.USERS,
                tags: ["friends"],
                render: () => (0, r.jsx)(nB, {}),
            }),
            e.push({
                id: "channel_affinity",
                name: "Channel Affinity",
                group: nb.fu.USERS,
                tags: ["channels"],
                render: () => (0, r.jsx)(lA, {}),
            }),
            nd.A.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: nb.fu.USERS,
                    render: () => (0, r.jsx)(ax, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: nb.fu.USERS,
                    render: () => (0, r.jsx)(a6, {}),
                })),
            e.push({ id: "dcf_overrides", name: "DCF Overrides", group: nb.fu.DCF, render: () => (0, r.jsx)(lJ, {}) }),
            e.push({ id: "dcf_events", name: "DCF Events", group: nb.fu.DCF, render: () => (0, r.jsx)(lM, {}) }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: nb.fu.EXPERIMENTS,
                tags: ["coachmarks", "nux", "onboarding"],
                render: () => (0, r.jsx)(rT, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: nb.fu.PREMIUM,
                tags: ["nitro", "tenure", "badges", "level up", "perks", "sources", "bitmask"],
                render: () => (0, r.jsx)(cO, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: nb.fu.PREMIUM,
                    tags: ["discounts", "trials", "reverse trials", "churn"],
                    render: () => (0, r.jsx)(oT, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: nb.fu.BILLING,
                    tags: ["stripe", "cards", "test cards"],
                    render: () => (0, r.jsx)(cb, {}),
                }),
                e.push({
                    id: "orders",
                    name: "Orders",
                    group: nb.fu.BILLING,
                    tags: ["orders"],
                    render: () => (0, r.jsx)(oL, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: nb.fu.PREMIUM,
                    tags: ["nitro", "reverse trial"],
                    render: () => (0, r.jsx)(gu, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: nb.fu.PREMIUM,
                    tags: ["entitlements", "quests"],
                    render: () => (0, r.jsx)(iz, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: nb.fu.PREMIUM,
                tags: ["friends", "anniversary"],
                render: () => (0, r.jsx)(s$, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: nb.fu.AUDIO_VIDEO,
                tags: ["noise cancellation", "audio", "vad"],
                render: () => (0, r.jsx)(px, {}),
            }),
            e.push({
                id: "av_overrides",
                name: "Overrides",
                group: nb.fu.AUDIO_VIDEO,
                tags: ["video", "capture", "encoder", "golive"],
                render: () => (0, r.jsx)(h0, {}),
            }),
            e.push({
                id: "spatial_audio",
                name: "Spatial Audio",
                group: nb.fu.AUDIO_VIDEO,
                tags: ["steam audio", "hrtf", "binaural", "reflections", "reverb", "room", "spatial audio"],
                render: () => (0, r.jsx)(pZ, {}),
            }),
            e.push({
                id: "conjure",
                name: "Conjure",
                group: nb.fu.AUDIO_VIDEO,
                tags: ["conjure", "capture", "screenshot", "png", "game"],
                render: () => (0, r.jsx)(pn, {}),
            }),
            e.push({
                id: "batch_audio_processor",
                name: "Batch Audio Processor",
                group: nb.fu.AUDIO_VIDEO,
                tags: ["krisp", "noise cancellation", "wav", "batch", "audio processing", "ingest"],
                render: () => (0, r.jsx)(h2, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: nb.fu.BOOSTING,
                tags: ["boosting", "powerups", "server tag"],
                render: () => (0, r.jsx)(rA, {}),
            }),
            e.push({ id: "game_server", name: "Game Server", group: nb.fu.BOOSTING, render: () => (0, r.jsx)(i2, {}) }),
            e.push({
                id: "language",
                name: "Language",
                group: nb.fu.UI,
                tags: ["locale"],
                render: () => (0, r.jsx)(rU, {}),
            }),
            e.push({
                id: "user_settings",
                name: "User Settings",
                group: nb.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(x1, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: nb.fu.QUESTS,
                render: () => (0, r.jsx)(a9, {}),
            }),
            e.push({
                id: "virtual_currency_config",
                name: "Virtual Currency Config",
                group: nb.fu.QUESTS,
                render: () => (0, r.jsx)(hP, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: nb.fu.BILLING,
                render: () => (0, r.jsx)(xU, {}),
            }),
            e.push({
                id: "quest_preview",
                name: "Quest Preview",
                group: nb.fu.QUESTS,
                render: () => (0, r.jsx)(g4, {}),
            }),
            e.push({
                id: "profile_theme_override",
                name: "Profile Theme Override",
                group: nb.fu.USERS,
                render: () => (0, r.jsx)(uC, {}),
            }),
            e.push({
                id: "application_widget",
                name: "Application Widget",
                group: nb.fu.USERS,
                render: () => (0, r.jsx)(lE, {}),
            }),
            e.push({
                id: "developer_portal",
                name: "Developer Portal",
                group: nb.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(ir, {}),
            }),
            e
        );
    }, []);
}
