a.d(t, { x: () => xQ }), a(321073);
var n,
    l,
    s,
    i,
    r = a(627968),
    o = a(64700),
    d = a(364522),
    c = a(611677),
    u = a(270003),
    m = a(532446),
    h = a(821609),
    x = a(691885),
    p = a(292666),
    g = a(404778),
    v = a(243721),
    j = a(952818),
    b = a(274372),
    f = a(372684),
    y = a(607814),
    E = a(871421),
    C = a(227628),
    _ = a(468550);
a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162), a(323874), a(14289), a(35956);
var S = a(139033),
    N = a(224640),
    A = a(20742),
    k = a(430993),
    I = a(696208),
    D = a(834730),
    T = a(192308),
    R = a(915703);
let O = [117, 117, 105, 100];
async function w(e) {
    let { default: t } = await a.e("25777").then(a.t.bind(a, 293384, 19)),
        n = t.createFile(!1),
        l = new Promise((e, t) => {
            (n.onReady = e), (n.onError = (e) => t(Error(e)));
        }),
        s = e.slice(0);
    if (((s.fileStart = 0), n.appendBuffer(s), n.flush(), await l, null == n.boxes)) return null;
    for (let e of n.boxes) {
        if ("uuid" !== e.type || "a1c8529933464db888f083f57a75a5ef" !== e.uuid) continue;
        let t = e.data;
        if (null == t) break;
        return {
            boxStart: e.start,
            boxSize: e.size,
            hdrSize: e.hdr_size,
            metadata: JSON.parse(new TextDecoder().decode(t)),
        };
    }
    return null;
}
function M(e) {
    let {
            filename: t,
            initialJson: a,
            fileBuffer: n,
            boxStart: l,
            boxSize: s,
            hdrSize: i,
            transitionState: d,
            onClose: c,
        } = e,
        u = o.useRef(null),
        [m, h] = o.useState(!1),
        [x, p] = o.useState(null);
    return (0, r.jsxs)(N.d, {
        transitionState: d,
        onClose: c,
        size: "xl",
        "aria-label": "Clip metadata",
        children: [
            (0, r.jsx)(A.rQ, { title: "Clip metadata", subtitle: t }),
            (0, r.jsxs)(k.c, {
                children: [
                    (0, r.jsx)("textarea", {
                        autoCorrect: "off",
                        autoCapitalize: "off",
                        autoComplete: "off",
                        spellCheck: "false",
                        ref: u,
                        defaultValue: a,
                        onInput: m ? void 0 : () => h(!0),
                        onChange: null != x ? () => p(null) : void 0,
                        rows: 20,
                        "aria-label": "Clip metadata JSON",
                        className: R.j,
                    }),
                    null != x &&
                        (0, r.jsx)(D.E, { variant: "text-sm/medium", color: "text-feedback-critical", children: x }),
                ],
            }),
            (0, r.jsx)(I.H, {
                actionsFullWidth: !0,
                actions: [
                    { text: "Cancel", onClick: c, variant: "secondary" },
                    {
                        text: "Save as...",
                        onClick: () => {
                            let e,
                                a = u.current?.value ?? "";
                            try {
                                e = JSON.parse(a);
                            } catch (e) {
                                p(e instanceof Error ? e.message : String(e));
                                return;
                            }
                            try {
                                var r;
                                let a,
                                    o,
                                    d = JSON.stringify(e),
                                    u = new TextEncoder().encode(d),
                                    m = (function (e, t, a, n, l) {
                                        let s = n + l.length;
                                        if (s > 0xffffffff)
                                            throw Error(
                                                "New uuid box exceeds 32-bit size; extended size encoding not implemented",
                                            );
                                        let i = new Uint8Array(s);
                                        new DataView(i.buffer).setUint32(0, s, !1),
                                            i.set(O, 4),
                                            i.set(new Uint8Array(e, t + 8, n - 8), 8),
                                            i.set(l, n);
                                        let r = new Uint8Array(e, 0, t),
                                            o = new Uint8Array(e, t + a),
                                            d = new Uint8Array(r.length + i.length + o.length);
                                        return d.set(r, 0), d.set(i, r.length), d.set(o, r.length + i.length), d.buffer;
                                    })(n, l, s, i, u);
                                (r = new Blob([m], { type: "video/mp4" })),
                                    (a = URL.createObjectURL(r)),
                                    ((o = document.createElement("a")).href = a),
                                    (o.download = t),
                                    o.click(),
                                    URL.revokeObjectURL(a),
                                    c();
                            } catch (e) {
                                p(e instanceof Error ? e.message : String(e));
                            }
                        },
                        variant: "primary",
                        disabled: !m,
                    },
                ],
            }),
        ],
    });
}
async function L(e) {
    try {
        let t = await e.arrayBuffer(),
            a = await w(t);
        if (null == a)
            return void (0, S.A)({
                title: "No metadata found",
                subtitle: `No clip metadata UUID box found in ${e.name}`,
            });
        let n = JSON.stringify(a.metadata, null, 2);
        (0, T.openModal)((l) =>
            (0, r.jsx)(M, {
                ...l,
                filename: e.name,
                initialJson: n,
                fileBuffer: t,
                boxStart: a.boxStart,
                boxSize: a.boxSize,
                hdrSize: a.hdrSize,
            }),
        );
    } catch (e) {
        (0, S.A)({ title: "Failed to parse clip metadata", subtitle: e instanceof Error ? e.message : String(e) });
    }
}
function P() {
    let e = o.useRef(null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("input", {
                ref: e,
                type: "file",
                accept: "video/mp4,.mp4",
                onChange: (e) => {
                    let t = e.target.files?.[0];
                    (e.target.value = ""), null != t && L(t);
                },
                className: R.Z,
            }),
            (0, r.jsx)(h.$, { text: "Open File", onClick: () => e.current?.click() }),
        ],
    });
}
function U() {
    let e = (0, C.MZ)((e) => e.isOpen),
        t = (0, _.sY)((e) => e.isOpen),
        a = o.useCallback((e) => {
            if (!e) return void (0, _.kF)();
            let t = j.Ay.getVisibleGame()?.id,
                a = b.A.getLastClipsSession()?.newClipIds[0],
                n = (null != a ? b.A.getClipById(a)?.applicationId : null) ?? b.A.getClips()[0]?.applicationId,
                l = t ?? n;
            null != l && (0, _.M8)(l);
        }, []),
        [n, l] = o.useState(f.rb.KILL),
        [s, i] = o.useState(1),
        [S, N] = o.useState(""),
        [A, k] = o.useState("");
    return (0, r.jsx)(d.Ip, {
        children: (0, r.jsxs)(c.l, {
            children: [
                (0, r.jsx)(u.n, {
                    label: "Send Test Signals",
                    children: (0, r.jsxs)(m.M, {
                        children: [
                            (0, r.jsx)(h.$, { text: "Manual", onClick: () => y.Ts({ type: f.Gy.MANUAL }) }),
                            (0, r.jsx)(h.$, {
                                text: "Distributed",
                                onClick: () =>
                                    y.Ts({
                                        type: f.Gy.DISTRIBUTED,
                                        remoteTriggerUserId: "123",
                                        remoteTriggerClipId: "456",
                                    }),
                            }),
                            (0, r.jsx)(h.$, {
                                text: "Phrase: Clip",
                                onClick: () => y.Ts({ type: f.Gy.PHRASE, text: "clip" }),
                            }),
                            (0, r.jsx)(h.$, {
                                text: "Yelling",
                                onClick: () => y.Ts({ type: f.Gy.YELLING, userId: "123" }),
                            }),
                            (0, r.jsx)(h.$, {
                                text: "Laughter",
                                onClick: () => y.Ts({ type: f.Gy.LAUGHTER, label: "laughter", confidence: 1 }),
                            }),
                            (0, r.jsx)(h.$, {
                                text: "Shouting",
                                onClick: () => y.Ts({ type: f.Gy.LAUGHTER, label: "shouting", confidence: 1 }),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)(u.n, {
                    label: "Game Event Creator",
                    children: [
                        (0, r.jsxs)(m.M, {
                            children: [
                                (0, r.jsx)(x.l, {
                                    label: "Event Type",
                                    value: n,
                                    onSelectionChange: (e) => l(e),
                                    options: [
                                        { id: "kill", label: "Kill", value: f.rb.KILL },
                                        { id: "multikill", label: "Multikill", value: f.rb.MULTIKILL },
                                        { id: "death", label: "Death", value: f.rb.DEATH },
                                        { id: "assist", label: "Assist", value: f.rb.ASSIST },
                                        { id: "item", label: "Item", value: f.rb.ITEM },
                                        { id: "victory", label: "Victory", value: f.rb.VICTORY },
                                        { id: "defeat", label: "Defeat", value: f.rb.DEFEAT },
                                        { id: "level_up", label: "Level Up", value: f.rb.LEVEL_UP },
                                        { id: "treasure", label: "Treasure", value: f.rb.TREASURE },
                                        { id: "objective_kill", label: "Objective Kill", value: f.rb.OBJECTIVE_KILL },
                                    ],
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(x.l, {
                                    label: "Importance",
                                    value: s,
                                    onSelectionChange: i,
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
                        (0, r.jsx)(p.k, {
                            label: "Title (optional)",
                            value: S,
                            onChange: N,
                            placeholder: "e.g., First Blood",
                        }),
                        (0, r.jsx)(p.k, {
                            label: "Description (optional)",
                            value: A,
                            onChange: k,
                            placeholder: "e.g., Killed enemy ADC in bot lane",
                        }),
                        (0, r.jsx)(h.$, {
                            text: "Create Game Event",
                            onClick: () => {
                                y.Ts({ type: f.Gy.GAME_EVENT, eventType: n, importance: s, title: S, description: A });
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            text: "stash decider data",
                            onClick: () => {
                                E.Ay.debugStashDeciderData();
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            text: "re-run ranking",
                            onClick: () => {
                                E.ih.debugRerunRanking();
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(u.n, { label: "Clip Metadata Tool", children: (0, r.jsx)(P, {}) }),
                (0, r.jsx)(g.c, {}),
                (0, r.jsxs)(u.n, {
                    label: "Reminder UI",
                    children: [
                        (0, r.jsx)(v.d, {
                            label: "Clips Quick Bar",
                            description: "Toggle the inline reminder quick bar above the account panel.",
                            checked: e,
                            onChange: (e) => (e ? (0, C.w9)() : (0, C.yj)()),
                        }),
                        (0, r.jsx)(v.d, {
                            label: "Clips Reminder",
                            description:
                                "Force-show the post-session ClipsReminder panel. Uses the running game's id if available, otherwise falls back to the most recent clip's application id.",
                            checked: t,
                            onChange: a,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var G = a(503698),
    F = a.n(G),
    B = a(939249),
    V = a(683071),
    $ = a(331322),
    W = a(811893),
    z = a(534514),
    H = a(17928),
    K = a(538064),
    Y = a(265059),
    q = a(902592),
    J = a(869146),
    Q = a(789645),
    X = a(589158),
    Z = a(65593),
    ee = a(740572),
    et = a(581298),
    ea = a(98596),
    en = a(287809),
    el = a(901139),
    es = a(641886),
    ei = a(780898),
    er = a(652215),
    eo = a(726267),
    ed = a(427262);
function ec(e) {
    let { nameplate: t } = e,
        a = (0, H.bG)([en.default], () => en.default.getCurrentUser()),
        n = ed.Ay.useName(a) ?? "";
    return (0, r.jsx)(eo.g, {
        username: n,
        selfMute: !1,
        selfDeaf: !1,
        serverMute: !1,
        serverDeaf: !1,
        suppress: !1,
        speaking: !1,
        streaming: !1,
        status: er.clD.ONLINE,
        currentUser: a,
        activities: [],
        applicationStream: void 0,
        userTag: "",
        speakingWhileMuted: !1,
        speakingWhilePTTInactive: !1,
        occluded: !1,
        dismissibleContents: { avatar: [], settings: [] },
        awaitingRemote: !1,
        nameplate: t,
        voiceChannel: null,
        isQuestBarEmpty: !0,
        isListenAlongVisible: !1,
    });
}
var eu = a(736653),
    em = a(653523),
    eh = a(915868);
function ex(e) {
    let { selected: t, onSelect: a } = e,
        n = (0, eu.Ay)();
    return (0, r.jsxs)("div", {
        className: eh.N,
        children: [
            (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "Preselected Gradient" }),
            (0, r.jsx)("div", {
                className: eh.Z,
                children: es.Z6.map((e) => {
                    let l = n !== er.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
                        s = t === e.name;
                    return (0, r.jsx)(
                        em.S4,
                        { onSelect: () => a(e), style: { background: l }, name: e.name, isSelected: s },
                        e.name,
                    );
                }),
            }),
        ],
    });
}
var ep = a(696157),
    eg = a(95701),
    ev = a(331884);
function ej(e) {
    let { selected: t, nameplate: a } = e,
        n = (0, ev.i)(),
        l = new eg.cq({ id: "0", type: er.rbe.DM, name: "self", guild_id: "0", recipients: [n.id] });
    return (0, r.jsx)(ep.th, { selected: t, channel: l, user: n, nameplate: a });
}
var eb = a(698638),
    ef = a(731027);
function ey() {
    let [e, t] = (0, o.useState)(!1),
        [a, n] = (0, o.useState)(!1),
        [l, s] = (0, o.useState)(null),
        { node: i } = (0, et.Ay)(ea.k, ""),
        d = (0, el.Ay)((e) => e.toolsCache),
        { setToolsCache: c, removeToolsCache: u } = (0, el.DE)(),
        { setImgCache: m } = (0, el.TW)(),
        x = (0, o.useCallback)(
            (e) => {
                let t = d[e];
                null != t
                    ? s({ previewToolKey: t.url, palette: t.palette, skuId: "0" })
                    : s((t) =>
                          null == t ? { previewToolKey: e, palette: es.Wj, skuId: "0" } : { ...t, previewToolKey: e },
                      );
            },
            [d],
        ),
        p = (0, o.useCallback)((e) => {
            s((t) => (null == t ? null : { ...t, palette: e }));
        }, []),
        g = (0, o.useCallback)(
            (e) => {
                u(e);
            },
            [u],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: ef.ne,
                children: [
                    (0, r.jsxs)("div", {
                        className: ef.gO,
                        children: [
                            (0, r.jsx)(h.$, {
                                size: "sm",
                                onClick: () => {
                                    n(!1), t((e) => !e);
                                },
                                variant: "secondary",
                                text: "Toggle Themes",
                            }),
                            (0, r.jsx)(h.$, {
                                size: "sm",
                                onClick: () => {
                                    t(!1), n((e) => !e);
                                },
                                variant: "secondary",
                                text: "Toggle Gradients",
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: ef.uQ,
                        children: [
                            e && (0, r.jsx)(ee.A, { node: i }),
                            a &&
                                (0, r.jsx)(ex, {
                                    selected: l?.palette?.name,
                                    onSelect: (e) => {
                                        l?.previewToolKey != null && c(l.previewToolKey, l.previewToolKey, e), p(e);
                                    },
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: ef.iW,
                children: [
                    (0, r.jsx)(eE, { nameplate: l }, l?.palette?.name),
                    (0, r.jsxs)("div", {
                        className: ef.Uo,
                        children: [
                            (0, r.jsx)(D.E, {
                                variant: "text-sm/semibold",
                                children: "Drag background image to screen",
                            }),
                            (0, r.jsx)(Z.A, {
                                title: "upload image",
                                description: "upload the background",
                                icons: eb.xi,
                                onDrop: async (e) => {
                                    let t = URL.createObjectURL(e[0]),
                                        a = e[0],
                                        n = await a.arrayBuffer();
                                    m(t, t, (0, ei.nI)(n)), c(t, t, es.Wj);
                                },
                            }),
                            (0, r.jsx)("div", {
                                className: ef.is,
                                children: Object.values(d).map((e) => {
                                    let { url: t } = e;
                                    return (0, r.jsx)(eC, { src: t, onSetStatic: x, removeAsset: g }, t);
                                }),
                            }),
                            (0, r.jsx)(eS, {
                                label: "gradient override",
                                onChange: (e) => p({ name: es.AK, darkBackground: e, lightBackground: e }),
                            }),
                            (0, r.jsx)(e_, { label: "set", onClick: () => {} }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eE(e) {
    let { nameplate: t } = e,
        [a, n] = (0, o.useState)(320),
        l = (0, o.useRef)(null),
        s = (0, o.useRef)(null),
        i = (0, o.useRef)(null),
        c = (0, o.useRef)(document),
        u = (0, o.useCallback)((e) => {
            if (null != l.current) {
                let t = l.current.getBoundingClientRect();
                n(Math.max(264, Math.min(432, e.clientX - t.left)));
            }
        }, []),
        m = (0, o.useCallback)(
            (e) => {
                e.preventDefault(), e.stopPropagation();
                let t = e.currentTarget.ownerDocument;
                c.current = t;
                let a = (e) => {
                        e.preventDefault(), u(e);
                    },
                    n = () => {
                        null != s.current && (t.removeEventListener("mousemove", s.current), (s.current = null)),
                            null != i.current && (t.removeEventListener("mouseup", i.current), (i.current = null));
                    };
                (s.current = a), (i.current = n), t.addEventListener("mousemove", a), t.addEventListener("mouseup", n);
            },
            [u],
        );
    return (
        (0, o.useEffect)(
            () => () => {
                null != s.current && (c.current.removeEventListener("mousemove", s.current), (s.current = null)),
                    null != i.current && (c.current.removeEventListener("mouseup", i.current), (i.current = null));
            },
            [],
        ),
        (0, r.jsx)(d.Ip, {
            className: ef.Fp,
            orientation: "horizontal",
            children: (0, r.jsxs)("div", {
                ref: l,
                className: ef.ey,
                style: { width: `${a}px` },
                children: [
                    (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "Memberlist" }),
                    (0, r.jsx)(eN, { nameplate: t }),
                    (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "DMs" }),
                    (0, r.jsx)(eA, { nameplate: t }),
                    (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "RTC" }),
                    (0, r.jsx)(ek, { nameplate: t }),
                    (0, r.jsx)("div", { className: ef.Di, onMouseDown: m }),
                ],
            }),
        })
    );
}
function eC(e) {
    let { src: t, onSetStatic: a, removeAsset: n } = e;
    return (0, r.jsxs)("div", {
        className: ef.xO,
        children: [
            (0, r.jsx)(B.D, {
                onClick: () => n(t),
                className: ef.yV,
                children: (0, r.jsx)(Q.P, { size: "custom", width: 16, height: 16, name: "x" }),
            }),
            (0, r.jsx)("img", { className: ef.Ez, src: t, alt: "" }),
            (0, r.jsx)("div", {
                className: ef.Lu,
                children: (0, r.jsx)(h.$, {
                    onClick: () => a(t),
                    size: "sm",
                    variant: "secondary",
                    text: "set nameplate",
                }),
            }),
        ],
    });
}
function e_(e) {
    let { label: t, onClick: a } = e;
    return (0, r.jsxs)("div", {
        className: ef.Uu,
        children: [
            (0, r.jsx)(D.E, { variant: "text-sm/normal", children: "coming soon" }),
            (0, r.jsx)(h.$, { variant: "secondary", size: "sm", text: t, disabled: !0, onClick: a }),
        ],
    });
}
function eS(e) {
    let { label: t, onChange: a } = e;
    return (0, r.jsxs)("div", {
        className: ef.Im,
        children: [
            (0, r.jsx)(D.E, { variant: "text-sm/normal", children: t }),
            (0, r.jsx)("input", {
                onChange: (e) => {
                    a(e.target.value);
                },
                className: ef.QL,
                placeholder: "#000000",
            }),
        ],
    });
}
function eN(e) {
    let { nameplate: t } = e,
        a = (0, H.bG)([en.default], () => en.default.getCurrentUser());
    return (0, r.jsx)("div", {
        className: ef.VH,
        children: (0, r.jsxs)("div", {
            className: ef.H1,
            children: [
                (0, r.jsx)(D.E, { className: ef.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(X.A, { nameplate: t, user: a, currentUser: a }),
                (0, r.jsx)(D.E, { className: ef.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(X.A, { nameplate: t, selected: !0, user: a, currentUser: a }),
                        (0, r.jsx)(X.A, { selected: !0, user: a, currentUser: a }),
                    ],
                }),
            ],
        }),
    });
}
function eA(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: ef.VH,
        children: (0, r.jsxs)("div", {
            className: ef.H1,
            children: [
                (0, r.jsx)(D.E, { className: ef.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(ej, { nameplate: t }),
                (0, r.jsx)(D.E, { className: ef.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(ej, { selected: !0, nameplate: t }), (0, r.jsx)(ej, { selected: !0 })],
                }),
            ],
        }),
    });
}
function ek(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: ef.VH,
        children: (0, r.jsx)("div", { className: ef.X2, children: (0, r.jsx)(ec, { nameplate: t }) }),
    });
}
a(508300);
var eI = a(835245),
    eD = a(157559),
    eT = a(780777),
    eR = a(993408),
    eO = a(315949),
    ew = a(559474),
    eM = a(816866),
    eL = a(87558),
    eP = a(575593),
    eU = a(631903),
    eG = a(408278),
    eF = a(972213),
    eB = a(43990),
    eV = a(661531),
    e$ = a(231723),
    eW = a(900686),
    ez = a(986687),
    eH = a(653901),
    eK = a(735438),
    eY = a.n(eK),
    eq = a(219220),
    eJ = a(480335);
let eQ = (e) => {
    let { profileEffect: t } = e,
        a = o.useMemo(() => (0, eK.cloneDeep)(t), [t]),
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
        { layerData: s } = (0, eq.A)({ skuId: "debug", layers: l.effects });
    return (0, r.jsx)(eJ.p, { profileEffect: l, layerData: s, skuId: "debug" });
};
var eX = a(960629),
    eZ = a(778765);
let e0 =
        "https://cdn.discordapp.com/assets/content/ad2a252a6866e1ecb3bab521e2baaabbf13ab2d1ecaa8af67862c53c91f76761.png",
    e1 = { [eL.qH.THUMBNAIL]: null, [eL.qH.STATIC]: null, [eL.qH.REDUCED_MOTION]: null },
    e2 = "debug",
    e8 = "reduced-motion-preview-modal",
    e3 = (e) => {
        let { transitionState: t, onClose: a, frameSrc: n, theme: l } = e;
        return (0, r.jsx)(N.d, {
            transitionState: t,
            size: "md",
            onClose: a,
            maxHeight: "viewport",
            children: (0, r.jsxs)("div", {
                className: eX.Xd,
                children: [
                    (0, r.jsx)("div", {
                        className: eX.y6,
                        children: (0, r.jsx)(eG.K, {
                            "aria-label": "Close",
                            onClick: a,
                            icon: eF.d,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: eX.rU,
                        children: [
                            (0, r.jsx)(eB.N, {
                                theme: l,
                                children: (e) =>
                                    (0, r.jsx)("img", {
                                        src: e0,
                                        alt: "",
                                        className: F()(eX.aM, e),
                                        "aria-hidden": !0,
                                    }),
                            }),
                            null != n &&
                                "" !== n &&
                                (0, r.jsx)("img", { src: n, className: eX.SD, alt: "Reduced motion preview" }),
                        ],
                    }),
                ],
            }),
        });
    },
    e6 = (e) => {
        let { type: t, frame: a, theme: n, onClear: l } = e,
            s = t === eL.qH.REDUCED_MOTION,
            i = s ? e0 : eZ.A,
            o = (0, r.jsx)(eB.N, {
                theme: n,
                children: (e) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("img", { src: i, alt: "", className: F()(eX.aM, e), "aria-hidden": !0 }),
                            a?.src != null &&
                                "" !== a.src &&
                                (0, r.jsx)("img", { src: a.src, className: F()(eX.SD, e), alt: "" }),
                        ],
                    }),
            });
        return (0, r.jsxs)("div", {
            className: eX.pK,
            children: [
                (0, r.jsx)(z.D, { variant: "heading-sm/bold", children: t }),
                s
                    ? (0, r.jsx)(B.D, {
                          className: F()(eX.zd, eX.eB),
                          onClick: () => {
                              (0, T.hasModalOpen)(e8)
                                  ? (0, T.closeModal)(e8)
                                  : (0, T.openModalLazy)(
                                        () =>
                                            Promise.resolve((e) =>
                                                (0, r.jsx)(e3, { ...e, frameSrc: a?.src ?? null, theme: n }),
                                            ),
                                        { modalKey: e8, onCloseRequest: () => (0, T.closeModal)(e8) },
                                    );
                          },
                          children: o,
                      })
                    : (0, r.jsx)("div", { className: eX.zd, children: o }),
                null != a && (0, r.jsx)(h.$, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: l }),
            ],
        });
    },
    e5 = (e) => {
        let { profileEffect: t } = e,
            { upsertProfileEffect: a } = (0, eM.wu)(),
            n = (0, H.bG)([en.default], () => en.default.getCurrentUser()),
            [l, s] = o.useState(!0),
            i = o.useRef({}),
            [d, c] = o.useState(!1),
            [u, m] = o.useState(!1),
            [x, p] = o.useState(8),
            [g, v] = o.useState([]),
            [j, b] = o.useState(e1),
            f = o.useRef([]),
            [y, E] = o.useState(t.name),
            C = y.toLowerCase().replace(/\s+/g, "_"),
            _ = o.useMemo(
                () => ({
                    type: eP.R.PROFILE_EFFECT,
                    skuId: e2,
                    title: e2,
                    description: e2,
                    accessibilityLabel: e2,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: g,
                    animationType: eU.l.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [g],
            ),
            S = d ? eV.A.themes.DARKER : eV.A.themes.LIGHT,
            N = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            A = (e, t) => {
                let a = N(t);
                null != a &&
                    (0, eL.Mz)(a, (t) => {
                        b((n) => ({ ...n, [e]: (0, eL.GT)(t, a) }));
                    });
            };
        o.useEffect(() => {
            let e = t.effects;
            e.length > 0 && v(e);
        }, [t.effects]),
            o.useEffect(() => {
                let e = t.stillFrames;
                null != e &&
                    Object.entries(e).forEach((e) => {
                        let [t, a] = e;
                        if (null != a) {
                            if ("" !== a.src && null != a.src && ("" === a.base64 || null == a.base64))
                                b((e) => ({ ...e, [t]: a }));
                            else if ("" !== a.base64 && null != a.base64) {
                                let e = (0, eL.fB)(a.base64);
                                (a.src = e), f.current.push(e), b((e) => ({ ...e, [t]: a }));
                            }
                        }
                    });
            }, [t.stillFrames]);
        let k = { profileEffect: t, upsertProfileEffect: a },
            I = o.useRef(k);
        return (o.useEffect(() => {
            I.current = k;
        }),
        o.useEffect(() => {
            let { profileEffect: e, upsertProfileEffect: t } = I.current;
            e.readonly || t({ skuId: e.skuId, name: y, effects: g, stillFrames: j });
        }, [g, j, y]),
        o.useEffect(
            () => () => {
                f.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (f.current = []);
            },
            [],
        ),
        null == n)
            ? (0, r.jsx)("div", {})
            : (0, r.jsxs)("div", {
                  className: eX.zr,
                  children: [
                      (0, r.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, r.jsx)(eT.A, {
                                  ref: (e) => {
                                      i.current.animated = e;
                                  },
                                  onChange: (e) => {
                                      let t = N(e);
                                      null != t &&
                                          (0, eL.Mz)(t, async (e) => {
                                              let a = await (0, eL.Ay)(e, t, g.length);
                                              v((e) => [...e, a]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eT.A, {
                                  ref: (e) => {
                                      i.current.thumbnail = e;
                                  },
                                  onChange: (e) => A(eL.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eT.A, {
                                  ref: (e) => {
                                      i.current.static = e;
                                  },
                                  onChange: (e) => A(eL.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eT.A, {
                                  ref: (e) => {
                                      i.current.reducedMotion = e;
                                  },
                                  onChange: (e) => A(eL.qH.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: eX.Vg,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: F()(eX.nM, eX.uW),
                                  children: [
                                      (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Profile Effect Name" }),
                                      (0, r.jsx)("input", {
                                          type: "text",
                                          value: y,
                                          className: eX.hF,
                                          onChange: (e) => {
                                              E(e.target.value);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eX.nM,
                                  children: [
                                      (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Dark Theme" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: d,
                                          className: eX.OO,
                                          onChange: () => {
                                              c(!d);
                                          },
                                      }),
                                      (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Show User Profile" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: u,
                                          className: eX.OO,
                                          onChange: () => {
                                              m(!u);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eX.nM,
                                  children: [
                                      (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Border Radius" }),
                                      (0, r.jsx)("input", {
                                          type: "range",
                                          min: 4,
                                          max: 24,
                                          step: 2,
                                          value: x,
                                          onChange: (e) => p(+e.target.value),
                                      }),
                                      (0, r.jsxs)(D.E, { variant: "text-sm/normal", children: [x, "px"] }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: F()(eX.nz, eX.VH),
                                  style: { borderRadius: x },
                                  children: [
                                      u
                                          ? (0, r.jsx)("div", {
                                                className: eX.jq,
                                                children: (0, r.jsx)(eH.A, {
                                                    user: n,
                                                    currentUser: n,
                                                    transitionState: e$.ip.ENTERED,
                                                    onClose: () => {},
                                                    themeContainerClassName: eX.JB,
                                                }),
                                            })
                                          : (0, r.jsx)(eB.N, {
                                                theme: S,
                                                children: (e) =>
                                                    (0, r.jsx)("div", {
                                                        className: F()(eX.aM, e),
                                                        children: (0, r.jsx)("img", { src: eZ.A, alt: "", width: 400 }),
                                                    }),
                                            }),
                                      l &&
                                          (0, r.jsx)("div", {
                                              className: eX.KJ,
                                              children: (0, r.jsx)(eQ, { profileEffect: _ }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  children:
                                      u &&
                                      (0, r.jsxs)("div", {
                                          className: F()(eX.f5, eX.VH),
                                          style: { borderRadius: x },
                                          children: [
                                              (0, r.jsx)(ez.A, {
                                                  user: n,
                                                  pendingAvatar: void 0,
                                                  pendingProfileEffect: null,
                                                  canUsePremiumCustomization: !0,
                                                  isTryItOut: !0,
                                              }),
                                              (0, r.jsx)(eQ, { profileEffect: _ }),
                                          ],
                                      }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: eX.nz,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: eX.nM,
                                          children: [
                                              (0, r.jsx)(h.$, {
                                                  variant: "active",
                                                  text: "Upload Animated Layer",
                                                  onClick: () => i.current.animated?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(D.E, {
                                                  variant: "text-sm/semibold",
                                                  children: "Make sure to upload the bottommost layer first!",
                                              }),
                                          ],
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: eX.nM,
                                          children: [
                                              (0, r.jsx)(h.$, {
                                                  variant: "active",
                                                  text: "Upload thumbnail.png",
                                                  onClick: () => i.current.thumbnail?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(h.$, {
                                                  variant: "active",
                                                  text: "Upload static.png",
                                                  onClick: () => i.current.static?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(h.$, {
                                                  variant: "active",
                                                  text: "Upload reduced_motion.png",
                                                  onClick: () => i.current.reducedMotion?.activateUploadDialogue(),
                                              }),
                                          ],
                                      }),
                                      (0, r.jsx)("div", {
                                          className: eX.q6,
                                          children: (0, r.jsx)("div", {
                                              className: eX.nM,
                                              children: (0, r.jsx)(h.$, {
                                                  variant: "primary",
                                                  text: "Replay Animation",
                                                  onClick: () => {
                                                      s(!1), setTimeout(() => s(!0), 100);
                                                  },
                                              }),
                                          }),
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: F()(eX.q6, eX.XA),
                                          children: [
                                              (0, r.jsx)(D.E, {
                                                  variant: "text-sm/semibold",
                                                  children: "Please download both configs for the drop package!",
                                              }),
                                              (0, r.jsx)(D.E, {
                                                  variant: "text-sm/bold",
                                                  color: "text-feedback-critical",
                                                  children: "WARNING: The full config is really big :0",
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: eX.nM,
                                                  children: [
                                                      (0, r.jsx)(eW.A, {
                                                          fileContents: () => (0, eL.rs)(g),
                                                          contentType: "text/plain",
                                                          fileName: `${C}_timing_config.txt`,
                                                          children: (0, r.jsx)(h.$, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Timing Config",
                                                          }),
                                                      }),
                                                      (0, r.jsx)(eW.A, {
                                                          fileContents: () =>
                                                              JSON.stringify({
                                                                  ...t,
                                                                  name: y,
                                                                  readonly: !1,
                                                                  effects: g,
                                                                  stillFrames: j,
                                                              }),
                                                          contentType: "text/plain",
                                                          fileName: `${C}_config.txt`,
                                                          children: (0, r.jsx)(h.$, {
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
                                          className: eX.uW,
                                          children: [
                                              (0, r.jsx)(z.D, { variant: "heading-lg/bold", children: "Still Frames" }),
                                              (0, r.jsx)("div", {
                                                  className: eX.mv,
                                                  children: Object.entries(j).map((e) => {
                                                      let [t, a] = e;
                                                      return (0, r.jsx)(
                                                          e6,
                                                          {
                                                              type: t,
                                                              frame: a,
                                                              theme: S,
                                                              onClear: () => {
                                                                  b((e) => ({ ...e, [t]: null }));
                                                              },
                                                          },
                                                          t,
                                                      );
                                                  }),
                                              }),
                                          ],
                                      }),
                                      g.some((e) => (e.randomizedSources ?? []).length > 0) &&
                                          (0, r.jsxs)("div", {
                                              className: F()(eX.uW, eX.l7),
                                              children: [
                                                  (0, r.jsx)(D.E, {
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
                                  className: F()(eX.Vg, eX.ZF),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: eX.cD,
                                          children: (0, r.jsx)(h.$, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: () => {
                                                  v([]), b(e1);
                                              },
                                          }),
                                      }),
                                      g.map((e, t) =>
                                          (0, r.jsxs)(
                                              "div",
                                              {
                                                  className: eX.ec,
                                                  children: [
                                                      (0, r.jsxs)("div", {
                                                          className: eX.D1,
                                                          children: [
                                                              (0, r.jsx)(z.D, {
                                                                  variant: "heading-md/bold",
                                                                  children: e.name,
                                                              }),
                                                              (0, r.jsx)("img", {
                                                                  src: e.src,
                                                                  className: eX.oq,
                                                                  alt: "",
                                                              }),
                                                              null != e.randomizedSources &&
                                                                  (0, r.jsxs)(r.Fragment, {
                                                                      children: [
                                                                          (0, r.jsx)(z.D, {
                                                                              variant: "heading-md/bold",
                                                                              children: "Alternatives",
                                                                          }),
                                                                          e.randomizedSources.map((e, t) =>
                                                                              (0, r.jsxs)(
                                                                                  "div",
                                                                                  {
                                                                                      children: [
                                                                                          null != e.filename &&
                                                                                              (0, r.jsx)(z.D, {
                                                                                                  variant:
                                                                                                      "heading-sm/semibold",
                                                                                                  children: e.filename,
                                                                                              }),
                                                                                          (0, r.jsx)("img", {
                                                                                              src: e.src,
                                                                                              className: eX.oq,
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
                                                          className: F()(eX.Vg, eX.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: eX.nz,
                                                                  children: [
                                                                      (0, r.jsx)(D.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: eX.hF,
                                                                          onChange: (e) => {
                                                                              v((a) => {
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
                                                                  className: eX.nz,
                                                                  children: [
                                                                      (0, r.jsx)(D.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: eX.hF,
                                                                          onChange: (e) => {
                                                                              v((a) => {
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
                                                          className: F()(eX.Vg, eX.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: eX.nz,
                                                                  children: [
                                                                      (0, r.jsx)(D.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: eX.OO,
                                                                          onChange: (e) => {
                                                                              v((a) => {
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
                                                                  className: eX.nz,
                                                                  children:
                                                                      e.loop &&
                                                                      (0, r.jsxs)(r.Fragment, {
                                                                          children: [
                                                                              (0, r.jsx)(D.E, {
                                                                                  variant: "text-md/bold",
                                                                                  children: "Loop Delay",
                                                                              }),
                                                                              (0, r.jsx)("input", {
                                                                                  type: "number",
                                                                                  value: e.loopDelay,
                                                                                  className: eX.hF,
                                                                                  onChange: (e) => {
                                                                                      v((a) => {
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
                                                          children: (0, r.jsx)(eT.A, {
                                                              ref: (e) => {
                                                                  i.current[`randomized-${t}`] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let a;
                                                                  null != (a = N(e)) &&
                                                                      (0, eL.Mz)(a, (e) => {
                                                                          v((n) => {
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
                                                          className: F()(eX.nM, eX._N),
                                                          children: [
                                                              (0, r.jsx)(h.$, {
                                                                  variant: "secondary",
                                                                  text: "Add Alternative",
                                                                  onClick: () =>
                                                                      i.current[
                                                                          `randomized-${t}`
                                                                      ]?.activateUploadDialogue(),
                                                              }),
                                                              (0, r.jsx)(h.$, {
                                                                  variant: "critical-secondary",
                                                                  text: "Remove Layer",
                                                                  onClick: () => {
                                                                      v((t) => t.filter((t) => t !== e));
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
    e9 = "Make sure you're only uploading text files!",
    e4 = (e) => {
        let { profileEffect: t, onClick: a } = e,
            { deleteProfileEffect: n } = (0, eM.wu)();
        return (0, r.jsxs)(B.D, {
            className: eX.B0,
            onClick: a,
            children: [
                (0, r.jsx)("div", { className: eX.yV, style: { backgroundImage: `url(${t.effects?.[0]?.base64})` } }),
                (0, r.jsxs)("div", {
                    className: eX.eL,
                    children: [
                        (0, r.jsx)(D.E, { variant: "text-md/bold", children: t.name }),
                        (0, r.jsx)(h.$, {
                            variant: "critical-secondary",
                            text: "Delete",
                            onClick: (e) => {
                                e.preventDefault(), e.stopPropagation(), n(t.skuId);
                            },
                        }),
                    ],
                }),
            ],
        });
    };
function e7() {
    let { profileEffects: e, upsertProfileEffect: t, clearAll: a } = (0, eM.wu)(),
        [n, l] = o.useState(),
        s = o.useRef(null),
        { categories: i } = (0, eO.A)(),
        d = o.useMemo(() => (0, eR.Wj)(i), [i]),
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
        x = o.useCallback(
            (e, a) => {
                if (null == a || !e.type.startsWith("text/")) return (0, ew.Ni)(e9);
                let [n, l] = a.split(",");
                if (!n.includes("text/plain")) return (0, ew.Ni)(e9);
                let s = JSON.parse(atob(l));
                (s.skuId = (0, eI.A)()), t(s), (0, ew.GF)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        g = o.useCallback(
            (e) => {
                e.currentTarget?.files == null
                    ? (0, ew.Ni)("Error uploading file. Try again!")
                    : (0, ew.KE)(e.currentTarget.files, x, ew.Ni);
            },
            [x],
        );
    return (0, r.jsxs)("div", {
        className: eX.zr,
        children: [
            null == n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eX.nz,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: F()(eX.uW, eX.nM),
                                    children: [
                                        (0, r.jsx)(z.D, {
                                            variant: "heading-xl/bold",
                                            children: "Custom Profile Effects",
                                        }),
                                        (0, r.jsx)(h.$, {
                                            variant: "critical-secondary",
                                            text: "Clear All",
                                            onClick: async () => {
                                                (await eD.A.confirm({
                                                    title: "Clear All Profile Effects",
                                                    body: "Are you sure you want to clear all profile effects? This cannot be undone.",
                                                    confirmText: "Clear All",
                                                    confirmVariant: "critical-primary",
                                                })) && (a(), (0, ew.GF)("All profile effects cleared!"));
                                            },
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: eX.Iv,
                                    children: Object.values(e).map((e) =>
                                        (0, r.jsx)(e4, { profileEffect: e, onClick: () => l(e) }, e.skuId),
                                    ),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: F()(eX.nM, eX._N, eX.uW),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: eX.au,
                                    children: [
                                        (0, r.jsx)(D.E, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: "Import Shared Config",
                                        }),
                                        (0, r.jsx)(eT.A, { ref: s, onChange: g, multiple: !1 }),
                                    ],
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Create New Effect",
                                    onClick: () => {
                                        t({ skuId: (0, eI.A)(), name: "New Profile Effect", effects: [] });
                                    },
                                }),
                            ],
                        }),
                        (0, r.jsx)("hr", {}),
                        (0, r.jsxs)("div", {
                            className: eX.uW,
                            children: [
                                (0, r.jsx)(z.D, { variant: "heading-xl/bold", children: "All Effects" }),
                                (0, r.jsx)(p.k, {
                                    value: c,
                                    onChange: (e) => {
                                        u(e);
                                    },
                                }),
                                (0, r.jsx)("div", {
                                    className: eX.xm,
                                    children: m.map((e) =>
                                        (0, r.jsx)(
                                            B.D,
                                            {
                                                className: eX.S5,
                                                style: { backgroundImage: `url(${e.thumbnailPreviewSrc})` },
                                                onClick: () => {
                                                    let t = {
                                                        [eL.qH.THUMBNAIL]:
                                                            null != e.thumbnailPreviewSrc &&
                                                            "" !== e.thumbnailPreviewSrc
                                                                ? {
                                                                      src: e.thumbnailPreviewSrc,
                                                                      name: "thumbnail.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [eL.qH.STATIC]:
                                                            null != e.staticFrameSrc && "" !== e.staticFrameSrc
                                                                ? {
                                                                      src: e.staticFrameSrc,
                                                                      name: "static.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [eL.qH.REDUCED_MOTION]:
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
                                                    className: eX.Hd,
                                                    children: (0, r.jsx)(D.E, {
                                                        variant: "text-md/normal",
                                                        color: "always-white",
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
            null != n && (0, r.jsx)(e5, { profileEffect: n }),
        ],
    });
}
var te = a(935399),
    tt = a(462887),
    ta = a(289873),
    tn = a(478016),
    tl = a(565645),
    ts = a(7584),
    ti = a(619499),
    tr = a(207803),
    to = a(84540),
    td = a(836602),
    tc = a(999291),
    tu = a(903209),
    tm = a(841702),
    th = a(892118),
    tx = a(744808),
    tp = a(643815),
    tg = a(626768),
    tv = a(464896);
function tj() {
    let e = (0, eu.Ay)();
    return (0, r.jsxs)("div", {
        className: tp.z3,
        children: [
            (0, r.jsx)("img", { src: (0, tt.M)(e) ? tg : tv, alt: "" }),
            (0, r.jsx)(D.E, {
                variant: "text-sm/normal",
                children:
                    "No frames found on your account. You must be granted test profile frame entitlements to use this tool.",
            }),
        ],
    });
}
function tb() {
    let e = (0, H.bG)([en.default], () => en.default.getCurrentUser()),
        t = (0, tc.Ay)(e?.id);
    o.useEffect(() => {
        e?.id != null && (0, tu.A)(e.id);
    }, [e?.id]);
    let { purchases: a, isFetchingPurchases: n } = (0, tm.Bf)(),
        l = o.useMemo(() => (0, eR.MG)(a, new Map()), [a]),
        [{ pendingProfileFrame: s }, i] = (0, H.yK)([td.A], () => [td.A.getPendingChanges(), td.A.showNotice()]),
        d = void 0 === s ? t?.profileFrame : s,
        c = null != d ? a.get(d.skuId) : void 0,
        u = (0, th.s)(c?.items[0]) ? c.items[0] : void 0;
    return (
        (0, te.l0)(tr.RE),
        (0, r.jsxs)("div", {
            className: tp.kL,
            children: [
                (0, r.jsxs)(z.D, {
                    variant: "heading-xl/bold",
                    children: [
                        (0, r.jsx)(tl.A, {
                            emojiName: ts.Ay.getByName("frame_with_picture")?.surrogates,
                            className: tp.Zg,
                        }),
                        "Profile Frames!",
                    ],
                }),
                0 === l.length && n && (0, r.jsx)(ta.y, {}),
                0 === l.length && !n && (0, r.jsx)(tj, {}),
                l.length > 0 &&
                    (0, r.jsxs)("div", {
                        className: tp.MK,
                        children: [
                            (0, r.jsx)(D.E, {
                                variant: "text-sm/normal",
                                children: "Select a frame to preview. Save to apply the frame to your main profile.",
                            }),
                            (0, r.jsxs)("ul", {
                                className: tp.p_,
                                children: [
                                    (0, r.jsx)(
                                        "li",
                                        {
                                            children: (0, r.jsx)(h.$, {
                                                text: "None",
                                                variant: "secondary",
                                                fullWidth: !0,
                                                icon: null == d ? tn.U : void 0,
                                                disabled: null == d,
                                                onClick: () => (0, to.p)({ profileFrame: null }),
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
                                                      children: (0, r.jsx)(h.$, {
                                                          text: t.name,
                                                          variant: "secondary",
                                                          fullWidth: !0,
                                                          icon: d?.skuId === e.skuId ? tn.U : void 0,
                                                          disabled: d?.skuId === e.skuId,
                                                          onClick: () => (0, to.p)({ profileFrame: e }),
                                                      }),
                                                  },
                                                  e.skuId,
                                              );
                                    }),
                                ],
                            }),
                            i && (0, r.jsx)(ti.A, {}),
                            (0, r.jsxs)("div", {
                                className: tp.VH,
                                children: [
                                    (0, r.jsx)(D.E, { variant: "text-sm/normal", children: "Preview:" }),
                                    (0, r.jsxs)("div", {
                                        className: tp.ME,
                                        children: [
                                            (0, r.jsx)("img", { src: eZ.A, alt: "" }),
                                            null != u && (0, r.jsx)(tx.A, { frame: u }),
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
var tf = a(702841),
    ty = a(793574),
    tE = a(590180),
    tC = a(4227),
    t_ = a(491438),
    tS = a(61750),
    tN = a(515770);
let tA = (e) => {
        let [t, a] = o.useState(0);
        return (
            o.useLayoutEffect(() => {
                let e = tC.A.getPurchase;
                return (
                    (tC.A.getPurchase = (e) => void 0),
                    tC.A.emitChange(),
                    a(1),
                    () => {
                        (tC.A.getPurchase = e), tC.A.emitChange();
                    }
                );
            }, []),
            (0, r.jsx)("div", { className: tN.Do, children: (0, r.jsx)(t_.A, { ...e }, t) })
        );
    },
    tk = () => {
        let e = (0, tf.bG)([en.default], () => en.default.getCurrentUser()),
            t = (0, tf.bG)([tE.A], () => tE.A.categories),
            a = (0, tf.bG)([tC.A], () => tC.A.purchases),
            n = (0, tf.bG)([tE.A], () => tE.A.lastSuccessfulFetch),
            l = t.size > 0 && a.size > 0 && null != n,
            { isFetching: s, categories: i } = (0, tm.Ay)({ logPerf: !1, stalePurchasesOK: !0, noOp: l }),
            d = l ? t : i,
            c = l || (!s && d.size > 0),
            [u, m] = o.useState(""),
            [x, g] = o.useState(null),
            [v, j] = o.useState(null);
        return (o.useEffect(() => {
            if ("" === u.trim() || !c) {
                g(null), j(null);
                return;
            }
            let e = tE.A.getProduct(u),
                t = tE.A.getCategoryForProduct(u);
            null != e && null != t ? (g(e), j(t)) : (g(null), j(null));
        }, [u, c]),
        s)
            ? (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Loading categories and collectibles..." })
            : null == e
              ? (0, r.jsx)(D.E, { variant: "text-md/normal", children: "No user found" })
              : (0, r.jsxs)("div", {
                    className: tN.kL,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tN.uW,
                            children: [
                                (0, r.jsx)(z.D, { variant: "heading-lg/semibold", children: "Product Configuration" }),
                                (0, r.jsxs)("div", {
                                    className: tN.qp,
                                    children: [
                                        (0, r.jsx)(D.E, {
                                            variant: "text-md/semibold",
                                            className: tN.NB,
                                            children: "Primary Product SKU ID",
                                        }),
                                        (0, r.jsx)(p.k, { value: u, onChange: m, placeholder: "Enter product SKU ID" }),
                                        !c &&
                                            "" !== u.trim() &&
                                            (0, r.jsx)(D.E, {
                                                variant: "text-sm/normal",
                                                className: tN.KQ,
                                                children: "Loading products...",
                                            }),
                                        c &&
                                            "" !== u.trim() &&
                                            null == x &&
                                            (0, r.jsx)(D.E, {
                                                variant: "text-sm/normal",
                                                className: tN.kc,
                                                children: "Product not found",
                                            }),
                                        null != x &&
                                            (0, r.jsxs)(D.E, {
                                                variant: "text-sm/normal",
                                                className: tN.xT,
                                                children: ["Found: ", x.name],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: tN.uW,
                            children: [
                                (0, r.jsx)(z.D, { variant: "heading-lg/semibold", children: "Product Preview" }),
                                null != x && null != v
                                    ? (0, r.jsxs)("div", {
                                          className: tN.i1,
                                          children: [
                                              (0, r.jsx)(tA, { skuId: x.skuId }),
                                              (0, r.jsx)(h.$, {
                                                  variant: "primary",
                                                  onClick: () => {
                                                      null != x &&
                                                          null != e &&
                                                          (0, tS.A)({
                                                              product: x,
                                                              analyticsLocations: [ty.A.COLLECTIBLES_SHOP_CARD],
                                                          });
                                                  },
                                                  text: "Show Collectibles Collected Modal",
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)("div", {
                                          className: tN.qf,
                                          children: (0, r.jsx)(D.E, {
                                              variant: "text-md/normal",
                                              className: tN.X2,
                                              children: "Enter a valid product SKU ID to see the preview",
                                          }),
                                      }),
                            ],
                        }),
                    ],
                });
    };
var tI = a(704804);
let tD = { profile_effects: 1, nameplates: 2, profile_frames: 3, product_preview: 4 },
    tT = (e) => {
        let { setTab: t } = e,
            a = (0, H.bG)([J.A], () => J.A.getWindowOpen(er.MLl.DEVTOOLS_POPOUT));
        return (0, r.jsxs)("div", {
            className: tI.Qs,
            children: [
                (0, r.jsx)(B.D, {
                    onClick: () => {
                        t(1);
                    },
                    children: (0, r.jsx)("div", {
                        className: F()(tI.vK, tI.Dg),
                        children: (0, r.jsx)(D.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Profile Effects",
                        }),
                    }),
                }),
                (0, r.jsx)(B.D, {
                    onClick: () => {
                        t(2);
                    },
                    children: (0, r.jsx)("div", {
                        className: F()(tI.vK, tI.st),
                        children: (0, r.jsx)(D.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Nameplates",
                        }),
                    }),
                }),
                (0, r.jsx)(B.D, {
                    onClick: () => {
                        t(3);
                    },
                    children: (0, r.jsx)("div", {
                        className: F()(tI.vK, tI.Dg),
                        children: (0, r.jsx)(D.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Profile Frames",
                        }),
                    }),
                }),
                (0, r.jsx)(B.D, {
                    onClick: () => {
                        t(4);
                    },
                    children: (0, r.jsx)("div", {
                        className: F()(tI.vK, tI.IP),
                        children: (0, r.jsx)(D.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Products",
                        }),
                    }),
                }),
                !a &&
                    (0, r.jsx)("div", {
                        style: { marginTop: 16 },
                        children: (0, r.jsx)(V.w, {
                            type: "warning",
                            children: (0, r.jsxs)($.B, {
                                gap: 8,
                                children: [
                                    (0, r.jsx)(D.E, { variant: "text-md/semibold", children: "Not enough space?" }),
                                    (0, r.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        children: "You can pop out the DevTools to see the full layout.",
                                    }),
                                    (0, r.jsx)(h.$, {
                                        size: "sm",
                                        icon: W.t,
                                        variant: "secondary",
                                        onClick: q.openDevToolsPopout,
                                        text: "Popout DevTools",
                                    }),
                                ],
                            }),
                        }),
                    }),
            ],
        });
    },
    tR = () => {
        let [e, t] = o.useState(() => {
            let e = Y.A.lastOpenSubTabId;
            return null != e && e in tD ? tD[e] : 0;
        });
        return (
            o.useEffect(() => {
                null != Y.A.lastOpenSubTabId && (0, K.Jt)({ lastOpenSubTabId: null });
            }, []),
            (0, r.jsxs)(d.Ip, {
                className: tI.iE,
                children: [
                    (0, r.jsxs)("div", {
                        className: tI.C$,
                        children: [
                            (0, r.jsx)(z.D, { variant: "heading-xxl/medium", children: "Collectibles DevTools" }),
                            0 !== e && (0, r.jsx)(h.$, { variant: "primary", onClick: () => t(0), text: "Back" }),
                        ],
                    }),
                    (() => {
                        switch (e) {
                            case 1:
                                return (0, r.jsx)(e7, {});
                            case 2:
                                return (0, r.jsx)(ey, {});
                            case 3:
                                return (0, r.jsx)(tb, {});
                            case 4:
                                return (0, r.jsx)(tk, {});
                            default:
                                return (0, r.jsx)(tT, { setTab: t });
                        }
                    })(),
                ],
            })
        );
    };
var tO = a(681154),
    tw = a(306264),
    tM = a(506774),
    tL = a(228366),
    tP = a(587895),
    tU = a(429913),
    tG = a(475825),
    tF = a(611190);
function tB(e) {
    let { columns: t, data: a, className: n, rowClassName: l, onClickRow: s, selectedRowKey: i, rowHeight: d = 40 } = e,
        c = o.useMemo(
            () =>
                t.map((e) => ({
                    renderHeader: () => (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: e.key }),
                    ...e,
                })),
            [t],
        ),
        u = 0 === a.length ? [1] : [a.length];
    return (0, r.jsx)("div", {
        className: tF.CZ,
        children: (0, r.jsx)(tG.OZ, {
            className: n,
            innerClassName: tF.tp,
            sections: u,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    n = tF.ZR;
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
                    u = F()(tF.jD, { [tF.wD]: o === i, rowClassName: l });
                return (0, r.jsx)(
                    B.D,
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
var tV = a(409626),
    t$ = a(692969),
    tW = a(760751),
    tz = a(403362),
    tH = a(435738),
    tK = a(99753),
    tY = a(975732),
    tq = a(574520),
    tJ = a(808323),
    tQ = a(832384),
    tX = a(424994),
    tZ = a(108565);
function t0(e) {
    let { id: t } = e,
        a = (0, H.bG)([en.default], () => en.default.getUser(t));
    return null == a
        ? null
        : (0, r.jsx)(B.D, {
              className: tZ._,
              onClick: function () {
                  (0, tY.openUserProfileModal)({ sourceAnalyticsLocations: [ty.A.DEV_TOOLS], userId: t });
              },
              children: (0, r.jsx)(D.E, { variant: "text-md/semibold", children: a.username }),
          });
}
function t1() {
    let e = (0, H.bG)([tK.A], () => tK.A.getFeed(tX.X1.GLOBAL_FEED)),
        t = (0, H.bG)([tK.A], () => tK.A.getFilters()),
        a = (0, H.cf)([tq.A], () => {
            let t = {};
            for (let a of e?.entries ?? []) t[(0, tq.$)(a.content)] = tq.A.canRenderContent(a.content);
            return t;
        }, [e]),
        n = (0, H.bG)([tH.A], () => tH.A.getImpressionCappedItemIds());
    if (null == t) return null;
    let l = e?.entries?.flatMap((e) => {
        let { content: l } = e;
        if (!(0, tJ.l)(t, l)) return [];
        let s = a[(0, tq.$)(l)];
        return (0, r.jsxs)(
            "li",
            {
                className: tZ.p,
                children: [
                    (0, r.jsx)(t0, { type: l.author_type, id: l.author_id }),
                    !s && (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Expired or no matching presence" }),
                    (0, tQ.I5)(l) &&
                        (0, r.jsxs)(D.E, { variant: "text-md/normal", children: ["Expired at ", l.expires_at] }),
                    n.has(l.id) && (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Impression capped" }),
                ],
            },
            l.id,
        );
    });
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(z.D, { variant: "heading-md/semibold", children: "Selected Content" }),
            null != l ? (0, r.jsx)("ul", { children: l }) : (0, r.jsx)("div", { children: "(none?)" }),
        ],
    });
}
var t2 = a(576470),
    t8 = a(85451);
function t3() {
    let e = (0, H.bG)([tK.A], () => tK.A.getFeed(tX.X1.GLOBAL_FEED)?.refresh_stale_inbox_after_ms != null),
        { loading: t, nextFetchDate: a } = (0, H.cf)(
            [tK.A],
            () => tK.A.getFeedState(tX.X1.GLOBAL_FEED) ?? { loading: !1 },
        ),
        n = (0, H.bG)([tK.A], () => tK.A.getLastFeedFetchDate(tX.X1.GLOBAL_FEED));
    return (0, r.jsxs)("div", {
        children: [
            t
                ? (0, r.jsx)(D.E, { variant: "text-md/normal", children: "(fetching)" })
                : (0, r.jsxs)(D.E, {
                      variant: "text-md/normal",
                      children: [
                          "Next fetch: ",
                          null != a ? (0, r.jsx)(t2.A, { deadline: a }) : e ? "(awaiting push)" : "(unscheduled)",
                      ],
                  }),
            (0, r.jsxs)(D.E, {
                variant: "text-md/normal",
                children: [
                    "Last fetch:",
                    " ",
                    null != n ? (0, r.jsx)(t8.z, { inline: !0, entry: { start: n.getTime() } }) : "(never)",
                ],
            }),
        ],
    });
}
var t6 = a(940247);
let t5 = [
    {
        key: "type",
        cellClassName: F()(t6.Hn, t6.T$),
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(D.E, { variant: "text-md/semibold", children: tO.ContentInventoryEntryType[t] });
        },
    },
    {
        key: "count",
        cellClassName: F()(t6.Hn, t6.MX),
        render(e) {
            let { entries: t } = e;
            return (0, r.jsx)("div", { children: (0, r.jsx)(D.E, { variant: "text-md/normal", children: t.length }) });
        },
    },
    {
        key: "only?",
        cellClassName: t6.Hn,
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(t9, { type: t });
        },
    },
];
function t9(e) {
    let { type: t } = e,
        a = (0, H.bG)([tK.A], () => tK.A.getFilters()),
        n = a?.types?.has(t) ?? !1;
    return (0, r.jsx)(v.d, {
        checked: n,
        onChange: function () {
            n
                ? tL.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: void 0 })
                : tL.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: { types: new Set([t]) } });
        },
    });
}
function t4() {
    var e;
    let t,
        a = (0, H.bG)([tK.A], () => tK.A.getFeed(tX.X1.GLOBAL_FEED)),
        n = (0, H.bG)([tK.A], () => tK.A.getDebugImpressionCappingDisabled()),
        l = (0, H.bG)([tH.A], () => tH.A.getDebugFastImpressionCappingEnabled()),
        s =
            ((e = a?.entries?.map((e) => e.content)),
            Object.keys((t = eY().groupBy(e, (e) => e.content_type))).map((e) => {
                let a = t[e];
                return { key: `${e}`, type: a[0].content_type, entries: a };
            })),
        i = (0, H.bG)([tK.A], () => tK.A.getFeedState(tX.X1.GLOBAL_FEED)?.loading === !0),
        [c, u] = o.useState(""),
        m = (0, H.bG)(
            [tW.A, tP.A],
            () => (parseInt(c) > 0 ? c : (tW.A.searchGamesByName(c)[0] ?? tP.A.getApplicationByName(c)?.id)),
            [c],
        ),
        x = (0, t$.A)({ applicationId: m, location: "DevToolsContentInventory", source: tV.Ob.DevTools }),
        g = Object.entries(tM.w.get("GameProfileModal") ?? {})
            .filter((e) => {
                let [t, a] = e;
                return a;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        v = (0, tU.A)(g).filter(tz.Vq);
    return (0, r.jsx)("div", {
        className: tF.nd,
        children: (0, r.jsxs)(d.Ip, {
            className: t6.Qs,
            children: [
                (0, r.jsxs)($.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(D.E, { variant: "text-md/semibold", children: "Inventory" }),
                        s.length > 0 && (0, r.jsx)(tB, { columns: t5, data: s }),
                        (0, r.jsx)(t3, {}),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Refresh Now",
                            fullWidth: !0,
                            onClick: function () {
                                tL.h.dispatch({
                                    type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                                    feedId: tX.X1.GLOBAL_FEED,
                                    feature: tw.M.INBOX,
                                });
                            },
                            loading: i,
                        }),
                    ],
                }),
                (0, r.jsxs)($.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(D.E, { variant: "text-md/semibold", children: "Impression Capping" }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Clear Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                tL.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Log Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                tL.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: n ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                tL.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: l ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                tL.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING" });
                            },
                        }),
                    ],
                }),
                !1,
                (0, r.jsx)(t1, {}),
                (0, r.jsxs)($.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(D.E, { variant: "text-md/semibold", children: "Game Profile" }),
                        (0, r.jsx)(p.k, {
                            placeholder: "App ID or full name",
                            onChange: (e) => (0 === e.length || e.length >= 18) && u(e),
                            onKeyDown: (e) => {
                                "Enter" === e.key && (c === e.currentTarget.value ? x?.(e) : u(e.currentTarget.value));
                            },
                            error:
                                c.length > 0 && null == x ? `No game profile for ${m ?? c + " - try by id"}.` : void 0,
                            helperText: null != x ? "Game profile found" : void 0,
                        }),
                        (0, r.jsx)("ul", {
                            children: v.map((e) =>
                                (0, r.jsx)(
                                    "li",
                                    { children: (0, r.jsx)(t7, { application: e }) },
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
let t7 = (e) => {
    let { application: t } = e,
        a = (0, t$.A)({ applicationId: t.id, location: "DevToolsContentInventory", source: tV.Ob.DevTools });
    return (0, r.jsx)(B.D, {
        onClick: a,
        children: (0, r.jsx)(D.E, { variant: "text-xs/normal", color: "text-muted", children: t.name }),
    });
};
var ae = a(783878),
    at = a(137177),
    aa = a(311043),
    an = a(569926),
    al = a(282435);
function as(e) {
    return al.Bf.get(e) ?? 0;
}
function ai(e) {
    let { gameId: t } = e,
        { data: a, isLoading: n } = (0, an.I)(t),
        l = (0, H.bG)([aa.A], () => aa.A.hasNoData(t), [t]);
    return n || (null == a && !l)
        ? (0, r.jsx)(D.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading\u2026" })
        : null == a
          ? (0, r.jsxs)(D.E, {
                variant: "text-sm/normal",
                color: "text-feedback-critical",
                children: ["No game found for ID ", t],
            })
          : (0, r.jsxs)($.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(at.A, { game: a, size: at.M.SMALL }),
                    (0, r.jsxs)($.B, {
                        gap: 0,
                        children: [
                            (0, r.jsx)(D.E, { variant: "text-md/semibold", children: a.name }),
                            (0, r.jsx)(D.E, { variant: "text-xxs/normal", color: "text-muted", children: a.id }),
                        ],
                    }),
                ],
            });
}
function ar() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(""),
        l = (0, H.bG)([tW.A], () => tW.A.games),
        s = o.useMemo(
            () =>
                l
                    .filter((e) => null != e.name && "" !== e.name)
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sort((e, t) => as(t.value) - as(e.value)),
            [l],
        ),
        i = o.useMemo(() => ({ baseSort: (e, t) => as(t.item.value) - as(e.item.value), keys: ["label"] }), []),
        d = o.useCallback((e) => {
            t(e), null != e && n("");
        }, []),
        c = o.useCallback((e) => {
            n(e), e.trim().length > 0 && t(null);
        }, []),
        u = a.trim(),
        m = u.length > 0 ? u : (e ?? void 0),
        x = (0, t$.A)({ gameId: m, location: "DevToolsGameProfile", source: tV.Ob.DevTools });
    return (0, r.jsx)("div", {
        className: tF.nd,
        children: (0, r.jsxs)($.B, {
            gap: 32,
            padding: 12,
            fullWidth: !1,
            children: [
                (0, r.jsxs)($.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(z.D, { variant: "heading-md/bold", children: "Game Profile" }),
                        (0, r.jsx)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "Search for a game by name, or paste a game ID, then open its profile.",
                        }),
                    ],
                }),
                (0, r.jsxs)($.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(z.D, { variant: "heading-sm/bold", children: "Search" }),
                        (0, r.jsx)(ae.Z, {
                            label: "Search games",
                            hideLabel: !0,
                            placeholder: "Search for a game\u2026",
                            options: s,
                            value: u.length > 0 ? void 0 : (e ?? void 0),
                            onSelectionChange: d,
                            selectionMode: "single",
                            clearable: !0,
                            matchSorterOptions: i,
                        }),
                    ],
                }),
                (0, r.jsxs)($.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(z.D, { variant: "heading-sm/bold", children: "Game ID" }),
                        (0, r.jsx)(p.k, {
                            label: "Game ID",
                            hideLabel: !0,
                            placeholder: "Paste a game ID",
                            value: a,
                            onChange: c,
                        }),
                        u.length > 0 && (0, r.jsx)(ai, { gameId: u }),
                    ],
                }),
                (0, r.jsx)(h.$, {
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
var ao = a(554146),
    ad = a(617617),
    ac = a(355898),
    au = a(644103),
    am = a(574560),
    ah = a(419590);
let ax = [ao.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL].map((e) => ({ id: String(e), label: ao.M[e], value: e }));
function ap() {
    let [e, t] = o.useState("dismissals"),
        [a, n] = o.useState(ao.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL),
        l = (0, H.bG)([ad.A], () => ad.A.settings.userContent?.recurringDismissibleContentStates[a] ?? null),
        s = (0, H.bG)([am.A], () => am.A.getAllGameUpsellDismissals(a)),
        i = o.useMemo(() => Object.keys(s ?? {}), [s]),
        d = (0, tU.A)(i),
        [c, u] = o.useState(""),
        [m, v] = o.useState([]);
    o.useEffect(
        () =>
            (0, au.Y)((e) => {
                v((t) => [e, ...t].slice(0, 100));
            }),
        [],
    );
    let j =
        l?.lastDismissedAtMs != null && "0" !== l.lastDismissedAtMs
            ? new Date(Number(l.lastDismissedAtMs)).toLocaleString()
            : "Never";
    return (0, r.jsxs)("div", {
        className: ah.nd,
        children: [
            (0, r.jsxs)("div", {
                className: ah.$H,
                children: [
                    (0, r.jsx)(B.D, {
                        className: F()(ah.V3, { [ah.u7]: "dismissals" === e }),
                        onClick: () => t("dismissals"),
                        children: "Dismissals",
                    }),
                    (0, r.jsxs)(B.D, {
                        className: F()(ah.V3, { [ah.u7]: "call-log" === e }),
                        onClick: () => t("call-log"),
                        children: ["Call Log ", m.length > 0 ? `(${m.length})` : ""],
                    }),
                ],
            }),
            "dismissals" === e
                ? (0, r.jsxs)("div", {
                      className: ah.Lj,
                      children: [
                          (0, r.jsx)("div", {
                              className: ah.uW,
                              children: (0, r.jsx)(x.l, {
                                  label: "Dismissible Content",
                                  value: a,
                                  onSelectionChange: (e) => n(e),
                                  options: ax,
                                  selectionMode: "single",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              className: ah.uW,
                              children: [
                                  (0, r.jsx)(z.D, { variant: "heading-md/bold", children: "Global DCF State" }),
                                  (0, r.jsxs)(D.E, { variant: "text-sm/normal", children: ["Last dismissed: ", j] }),
                                  (0, r.jsxs)(D.E, {
                                      variant: "text-sm/normal",
                                      children: ["Times dismissed: ", l?.numTimesDismissed ?? 0],
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: ah.uW,
                              children: [
                                  (0, r.jsx)(z.D, { variant: "heading-md/bold", children: "Mark as Dismissed" }),
                                  (0, r.jsx)(p.k, {
                                      label: "Game ID",
                                      value: c,
                                      onChange: (e) => u(e),
                                      placeholder: "Enter Game ID",
                                  }),
                                  (0, r.jsx)(h.$, {
                                      variant: "secondary",
                                      text: "Mark as Dismissed",
                                      disabled: "" === c.trim(),
                                      onClick: () => {
                                          (0, ac.M)([c.trim()], a), u("");
                                      },
                                  }),
                              ],
                          }),
                          (0, r.jsx)(g.c, {}),
                          (0, r.jsxs)("div", {
                              className: F()(ah.uW, ah.LY),
                              children: [
                                  (0, r.jsxs)(z.D, {
                                      variant: "heading-md/bold",
                                      children: ["Per-Game Dismissals (", i.length, ")"],
                                  }),
                                  0 === i.length
                                      ? (0, r.jsx)(D.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: "No dismissal data for this content type.",
                                        })
                                      : (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                i.map((e, t) => {
                                                    let n = d[t],
                                                        l = s?.[e];
                                                    if (null == l) return null;
                                                    let i = n?.getIconURL(32);
                                                    return (0, r.jsxs)(
                                                        "div",
                                                        {
                                                            className: ah.Nr,
                                                            children: [
                                                                (0, r.jsxs)("div", {
                                                                    className: ah.MY,
                                                                    children: [
                                                                        null != i &&
                                                                            (0, r.jsx)("img", {
                                                                                src: i,
                                                                                alt: "",
                                                                                className: ah.Z2,
                                                                            }),
                                                                        (0, r.jsxs)("div", {
                                                                            className: ah.qi,
                                                                            children: [
                                                                                (0, r.jsx)(D.E, {
                                                                                    variant: "text-sm/semibold",
                                                                                    children: n?.name ?? "Unknown App",
                                                                                }),
                                                                                (0, r.jsx)(D.E, {
                                                                                    variant: "text-xs/normal",
                                                                                    color: "text-muted",
                                                                                    children: e,
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        (0, r.jsx)(h.$, {
                                                                            variant: "secondary",
                                                                            text: "Clear",
                                                                            onClick: () => (0, ac.e)(e, a),
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, r.jsxs)(D.E, {
                                                                    variant: "text-xs/normal",
                                                                    children: [
                                                                        "Last dismissed: ",
                                                                        new Date(l.dismissedAt).toLocaleString(),
                                                                    ],
                                                                }),
                                                                (0, r.jsxs)(D.E, {
                                                                    variant: "text-xs/normal",
                                                                    children: ["Times dismissed: ", l.timesDismissed],
                                                                }),
                                                            ],
                                                        },
                                                        e,
                                                    );
                                                }),
                                                (0, r.jsx)(h.$, {
                                                    variant: "critical-primary",
                                                    text: "Clear All",
                                                    onClick: () => {
                                                        for (let e of i) (0, ac.e)(e, a);
                                                    },
                                                }),
                                            ],
                                        }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: ah.Lj,
                      children: (0, r.jsxs)("div", {
                          className: ah.uW,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: ah.aq,
                                  children: [
                                      (0, r.jsxs)(z.D, {
                                          variant: "heading-md/bold",
                                          children: ["Hook Calls (", m.length, ")"],
                                      }),
                                      (0, r.jsx)(h.$, { variant: "secondary", text: "Clear", onClick: () => v([]) }),
                                  ],
                              }),
                              0 === m.length
                                  ? (0, r.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "No calls recorded yet. Hook calls to useShouldShowGameUpsellForMultipleGames will appear here.",
                                    })
                                  : m.map((e, t) =>
                                        (0, r.jsxs)(
                                            "div",
                                            {
                                                className: ah.Nr,
                                                children: [
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-xs/semibold",
                                                        children: new Date(e.timestamp).toLocaleTimeString(),
                                                    }),
                                                    (0, r.jsxs)(D.E, {
                                                        variant: "text-xs/normal",
                                                        children: ["DC: ", ao.M[e.dismissibleContent]],
                                                    }),
                                                    (0, r.jsxs)(D.E, {
                                                        variant: "text-xs/normal",
                                                        children: [
                                                            "Apps: ",
                                                            e.applicationIds.length > 0
                                                                ? e.applicationIds.join(", ")
                                                                : "none",
                                                        ],
                                                    }),
                                                    (0, r.jsxs)(D.E, {
                                                        variant: "text-xs/normal",
                                                        children: [
                                                            "Eligible:",
                                                            " ",
                                                            e.eligibleToShow.length > 0
                                                                ? (0, r.jsx)("span", {
                                                                      className: ah.OK,
                                                                      children: e.eligibleToShow.join(", "),
                                                                  })
                                                                : "none",
                                                        ],
                                                    }),
                                                    e.disabled &&
                                                        (0, r.jsx)(D.E, {
                                                            variant: "text-xs/normal",
                                                            color: "text-muted",
                                                            children: "(disabled)",
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
var ag = a(696986),
    av = a(47167),
    aj = a(734057),
    ab = a(994500),
    af = a(310031),
    ay = a(394953),
    aE = a(131973);
let aC = [
        {
            key: "channelName",
            cellClassName: F()(aE.Hn, aE.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(D.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: F()(aE.Hn, aE.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(D.E, { variant: "text-md/normal", children: t });
            },
        },
    ],
    a_ = [
        {
            key: "channelName",
            cellClassName: F()(aE.Hn, aE.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(D.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "loadState",
            cellClassName: F()(aE.Hn, aE.C7),
            render(e) {
                let { loadState: t } = e;
                return (0, r.jsx)(D.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: F()(aE.Hn, aE.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(D.E, { variant: "text-md/normal", children: t });
            },
        },
    ];
function aS() {
    let { unreadRecentMentionsCount: e, unreadChannelIds: t } = (0, ay.U4)(),
        {
            isLoading: a,
            hasLoadedEver: n,
            hasPreloaded: l,
            hasMoreToLoad: s,
            isLoadingComplete: i,
        } = (0, tf.cf)([af.A], () => ({
            isLoading: af.A.isLoading,
            hasLoadedEver: af.A.hasLoadedEver,
            hasPreloaded: af.A.hasPreloaded,
            hasMoreToLoad: af.A.hasMoreToLoad,
            isLoadingComplete: af.A.isLoadingComplete,
        })),
        o = (0, tf.bG)([af.A], () => af.A.currentRequestAnalyticsPayload),
        c = (0, tf.cf)([af.A], () => af.A.getChannelInfoMap()),
        u = (0, tf.cf)([aj.A], () => {
            let e = {};
            return (
                Object.entries(c).forEach((t) => {
                    let [a] = t,
                        n = aj.A.getChannel(a);
                    e[a] = n ?? null;
                }),
                e
            );
        }),
        m = (0, tf.cf)([aj.A], () =>
            t.reduce((e, t) => {
                let a = aj.A.getChannel(t);
                return (e[t] = a ?? null), e;
            }, {}),
        ),
        h = (0, tf.bG)([af.A], () => af.A.getInboxMessages()),
        x = (0, tf.bG)([af.A], () => af.A.getDevOverrides().navOnClick);
    return (0, r.jsx)("div", {
        className: tF.nd,
        children: (0, r.jsxs)(d.Ip, {
            className: aE.Qs,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(z.D, { variant: "heading-lg/semibold", children: "Inbox" }),
                        (0, r.jsxs)("div", { children: ["Inbox Message Count: ", h.length] }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(z.D, { variant: "heading-lg/semibold", children: "Dev Overrides" }),
                        (0, r.jsx)("div", {
                            style: { display: "flex", alignItems: "center", marginTop: 8 },
                            children: (0, r.jsx)(v.d, {
                                label: "Nav On Click",
                                checked: !!x,
                                onChange: (e) => {
                                    tL.h.dispatch({ type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES", navOnClick: e });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(z.D, { variant: "heading-lg/semibold", children: "Unreads and Badging" }),
                        (0, r.jsx)(ag.h, { size: 8 }),
                        (0, r.jsxs)("div", { children: ["Unread Recent Mentions Count: ", e] }),
                        (0, r.jsxs)("div", { children: ["Unread Channel Count: ", t.length] }),
                        (0, r.jsx)(tB, {
                            columns: aC,
                            data: Object.entries(m).map((e) => {
                                let [t, a] = e;
                                return {
                                    key: t,
                                    channelId: t,
                                    channelName: null != a ? (0, av.m1)(a, en.default, ab.A) : "",
                                };
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(z.D, { variant: "heading-lg/semibold", children: "Store State" }),
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
                        (0, r.jsx)(z.D, { variant: "heading-lg/semibold", children: "Channel Info Map" }),
                        (0, r.jsxs)("div", { children: ["Total Channels: ", Object.keys(c).length] }),
                        (0, r.jsx)(tB, {
                            columns: a_,
                            data: Object.entries(c).map((e) => {
                                let t,
                                    [a, n] = e;
                                return {
                                    key: a,
                                    channelId: a,
                                    channelName: null != (t = u[a]) ? (0, av.m1)(t, en.default, ab.A) : "",
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
var aN = a(976860),
    aA = a(340124),
    ak = a(558147);
let aI = function () {
    return (0, r.jsxs)("div", {
        className: ak.k,
        children: [
            (0, r.jsx)(D.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                style: { marginBottom: "8px" },
                children: "Click the button below to clear your Minor Reward Capping History.",
            }),
            (0, r.jsx)(h.$, {
                onClick: () => {
                    (0, aA.Ov)(), (0, aN.pX)(er.BVt.QUEST_HOME);
                },
                text: "Clear History",
            }),
            (0, r.jsx)(D.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                children:
                    "Your may have to refresh your client after being redirected to the Quest Home in order to see these changes.",
            }),
        ],
    });
};
var aD = a(271866),
    aT = a(868511),
    aR = a(147964),
    aO = a(760716),
    aw = a(533406),
    aM = a(115093),
    aL = a(508319);
let aP = window.GLOBAL_ENV.RELEASE_CHANNEL === aM.B.STAGING ? "1438571444891025408" : "1346069614634864772";
function aU() {
    let e = (0, aO.i)((e) => e.overrideApplicationId),
        t = (0, aO.i)((e) => e.setOverrideApplicationId),
        a = null != e,
        [n, l] = o.useState(aP),
        [s, i] = o.useState(er.FYj),
        d = o.useCallback(
            (e) => {
                e ? t(n) : t(null);
            },
            [n, t],
        ),
        c = o.useCallback(
            (e) => {
                l(e), a && t(e);
            },
            [a, t],
        ),
        u = (0, aO.i)((e) => e.showSelfActivity),
        m = (0, aO.i)((e) => e.setShowSelfActivity),
        x = (0, aO.i)((e) => e.recommendationApplicationIds),
        g = (0, aO.i)((e) => e.setRecommendationApplicationIds),
        j = o.useCallback(
            (e) => {
                e ? g(s) : g(null);
            },
            [s, g],
        ),
        b = (0, H.bG)([aR.A], () => null != aR.A.testModeApplicationId),
        f = o.useCallback((e) => {
            e ? (0, T.openModal)((e) => (0, r.jsx)(aT.A, { ...e })) : aD.cL();
        }, []),
        y = (0, t$.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: n,
            source: tV.Ob.Embed,
            trackEntryPointImpression: !0,
        }),
        E = o.useCallback(
            (e) => {
                y?.(e);
            },
            [y],
        ),
        C = o.useCallback(() => {
            (0, aN.pX)(er.BVt.COLLECTIBLES_SHOP_GAME_SHOP(n));
        }, [n]),
        _ = o.useCallback(() => {
            (0, aw.openSocialLayerStorefrontAnnouncementModal)();
        }, []);
    return (0, r.jsx)("div", {
        className: F()(tF.nd, aL.n),
        children: (0, r.jsxs)("div", {
            className: aL.k,
            children: [
                (0, r.jsx)(p.k, { label: "Application ID", value: n, onChange: c }),
                (0, r.jsx)(z.D, { variant: "heading-lg/normal", children: "Activity Override" }),
                (0, r.jsx)(v.d, { label: "Override activity application ID", checked: a, onChange: d }),
                (0, r.jsx)(v.d, { label: "Show own voice activity (bypass self check)", checked: u, onChange: m }),
                (0, r.jsx)(v.d, { label: "Enable application test mode", checked: b, onChange: f }),
                (0, r.jsx)(h.$, { text: "Open Game Profile Modal", onClick: E }),
                (0, r.jsx)(h.$, { text: "Open Announcement Modal", onClick: _ }),
                (0, r.jsx)(h.$, { text: "Navigate to App Game Shop", onClick: C }),
                (0, r.jsx)(z.D, { variant: "heading-lg/normal", children: "Wishlists" }),
                (0, r.jsx)(p.k, {
                    label: "Recommendation application IDs",
                    value: s,
                    onChange: i,
                    disabled: null == x,
                }),
                (0, r.jsx)(v.d, {
                    label: "Enable recommendation application IDs override",
                    checked: null != x,
                    onChange: j,
                }),
            ],
        }),
    });
}
var aG = a(540999),
    aF = a(723702),
    aB = a(865116);
a(670812), a(772958);
var aV = a(58736);
a(558179), a(21574);
var a$ = a(788806),
    aW = a(302031);
let az = {
    base00: eV.A.colors.BACKGROUND_BASE_LOWER.css,
    base03: eV.A.colors.TEXT_FEEDBACK_WARNING.css,
    base07: eV.A.colors.TEXT_DEFAULT.css,
    base08: eV.A.colors.TEXT_MUTED.css,
    base09: eV.A.colors.TEXT_FEEDBACK_POSITIVE.css,
    base0B: eV.A.colors.TEXT_FEEDBACK_WARNING.css,
    base0D: eV.A.colors.TEXT_BRAND.css,
};
function aH(e) {
    let t = {};
    for (let [a, n] of Object.entries(e)) t[a] = n;
    return t;
}
let aK = aH(az),
    aY = aH(az);
function aq(e) {
    return er.AKn.test(e) ? (0, r.jsx)(aW.Ay, { type: aW.Ay.Types.TEXT, children: () => e }) : e;
}
function aJ(e) {
    let { data: t } = e,
        a = (0, eu.Ay)();
    return (0, r.jsx)("div", {
        className: tF.H$,
        children: (0, r.jsx)(a$.d, {
            data: t,
            theme: "light" === a ? aY : aK,
            invertTheme: !1,
            valueRenderer: aq,
            shouldExpandNode: () => !0,
        }),
    });
}
var aQ = a(761929),
    aX = a(804271);
function aZ(e) {
    let { resizableNode: t, minHeight: a, onResize: n } = e,
        l = (0, aQ.A)({
            minDimension: a,
            resizableDomNodeRef: t,
            onElementResize: n,
            orientation: aQ.R.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, r.jsx)("div", { onPointerDown: l, className: aX.Di });
}
function a0(e) {
    let { children: t, className: a, initialHeight: n, minHeight: l } = e,
        s = o.useRef(null),
        [i, d] = o.useState(n);
    return (0, r.jsxs)("div", {
        ref: s,
        className: aX.kL,
        style: { minHeight: l, height: i },
        children: [
            (0, r.jsx)(aZ, { resizableNode: s, minHeight: l, onResize: d }),
            (0, r.jsx)("div", { className: F()(aX.KZ, a), children: t }),
        ],
    });
}
var a1 = a(231643);
a(74601), a1.fu.NONE, a1.fu.NONE;
var a2 = a(824552),
    a8 = a(688810),
    a3 = a(975460),
    a6 = a(46225),
    a5 = a(487431),
    a9 = a(905552),
    a4 = a(546183),
    a7 = a(134861),
    ne = a(71393),
    nt = a(967198),
    na = a(157257),
    nn = a(942370),
    nl = a(375708),
    ns = a(458899),
    ni = a(100038);
function nr() {
    var e;
    let t,
        a,
        n = o.useRef(null),
        { analyticsLocations: l } = (0, a8.Ay)(ty.A.DEV_TOOLS),
        [s, i] = o.useState(""),
        d = (0, H.bG)([nt.A], () => nt.A.getGuildId()),
        c = (0, H.bG)([ne.A], () => ne.A.getGuild(d)),
        u = c?.gameApplicationIds ?? [],
        m = (0, tU.A)(u).filter((e) => null != e),
        x = (0, H.bG)([j.Ay, na.A], () => (0, a9.A)(j.Ay, na.A)),
        v = (0, tU.h)(s),
        b = (0, a3.g)(v),
        f = (0, H.yK)(
            [tP.A],
            () => v?.linkedGames?.map((e) => tP.A.getApplication(e.id)).filter((e) => null != e) ?? [],
        ),
        y = (0, a6.RD)(v, { allowedFlows: [nn._M.RPC], debug: !0 }),
        E = (0, a6.RD)(v, { allowedFlows: [nn._M.WEB], debug: !0 }),
        C = (0, H.bG)([a7.A], () => null != b && a7.A.isConnected(b.id)),
        _ = (0, a6.RD)(v, { debug: !0 }),
        { canDeauthorize: S, deauthorize: N } =
            ((e = _.connectionApp?.id),
            (t = (0, H.bG)([a4.default], () => a4.default.getNewestTokenForApplication(e))),
            (a = o.useCallback(() => {
                null != t && a2.A.delete(t.id);
            }, [t])),
            { canDeauthorize: null != t, deauthorize: a });
    return (0, r.jsxs)("div", {
        ref: n,
        className: F()(tF.nd, ni.nd),
        children: [
            (0, r.jsxs)("div", {
                className: ni.kL,
                children: [
                    (0, r.jsx)(z.D, { variant: "heading-lg/normal", children: "Guild Official Games" }),
                    null != c
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)(D.E, { variant: "text-md/normal", children: [c.name, " (", c.id, ")"] }),
                                  m.length > 0
                                      ? (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(D.E, {
                                                    variant: "text-sm/semibold",
                                                    children: "Official Games",
                                                }),
                                                m.map((e) =>
                                                    (0, r.jsx)(
                                                        h.$,
                                                        {
                                                            onClick: () => i(e.id),
                                                            variant: s === e.id ? "primary" : "secondary",
                                                            text: `${e.name} (${e.id})`,
                                                        },
                                                        e.id,
                                                    ),
                                                ),
                                            ],
                                        })
                                      : (0, r.jsx)(D.E, { variant: "text-md/normal", children: "No official games" }),
                              ],
                          })
                        : (0, r.jsx)(D.E, { variant: "text-md/normal", children: "No guild selected" }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: ni.kL,
                children: [
                    (0, r.jsx)(z.D, { variant: "heading-lg/normal", children: "Application" }),
                    (0, r.jsx)(p.k, { label: "Application ID", value: s, onChange: i }),
                    null != x && null != x.id
                        ? (0, r.jsx)(h.$, {
                              onClick: () => i(x.id),
                              variant: "primary",
                              text: `Use detected game: ${x.name} (${x.id})`,
                          })
                        : null,
                    (0, r.jsxs)(D.E, {
                        variant: "text-md/normal",
                        children: ["Application Name: ", null != v ? v.name : "N/A"],
                    }),
                    (0, r.jsxs)(D.E, {
                        variant: "text-md/normal",
                        children: [
                            "Linked Games:",
                            " ",
                            f.length > 0
                                ? f.map((e) => ((0, a3.t)(v)?.id === e.id ? `${e.name}*` : e.name)).join(", ")
                                : "N/A",
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(g.c, {}),
            (0, r.jsxs)("div", {
                className: ni.kL,
                children: [
                    (0, r.jsx)(z.D, { variant: "heading-lg/normal", children: "Authorization" }),
                    (0, r.jsx)(a5.VT, {
                        overallStatus: y.debug.isSubscribedToAuthorizeRequest
                            ? a5.nW.OVERALL_GOOD
                            : C
                              ? a5.nW.WARN
                              : a5.nW.OVERALL_BAD,
                        name: nl.intl.string(ns.default.AGLx00),
                        steps: [
                            {
                                status: C ? a5.nW.GOOD : a5.nW.BAD,
                                text: nl.intl.string(ns.default.kxF9br),
                                description: C ? null : nl.intl.string(ns.default.PFxxJa),
                                learnMoreLink: C
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: y.debug.isSubscribedToAuthorizeRequest
                                    ? a5.nW.GOOD
                                    : C
                                      ? a5.nW.WARN
                                      : a5.nW.BAD,
                                text: nl.intl.string(ns.default.S94dzs),
                                description:
                                    y.debug.isSubscribedToAuthorizeRequest || !C
                                        ? null
                                        : nl.intl.string(ns.default.aTULMB),
                                learnMoreLink:
                                    y.debug.isSubscribedToAuthorizeRequest || !C
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: _.chosenFlow === nn._M.RPC,
                    }),
                    (0, r.jsx)(a5.VT, {
                        overallStatus: E.debug.hasConnectionEntrypointUrl ? a5.nW.OVERALL_GOOD : a5.nW.OVERALL_BAD,
                        name: nl.intl.string(ns.default.K3ObrU),
                        steps: [
                            {
                                status: E.debug.hasConnectionEntrypointUrl ? a5.nW.GOOD : a5.nW.BAD,
                                text: nl.intl.string(ns.default["8a7IrV"]),
                                description: E.debug.hasConnectionEntrypointUrl
                                    ? nl.intl.formatToPlainString(ns.default["9iLeL2"], {
                                          url: E.connectionApp?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: _.chosenFlow === nn._M.WEB,
                    }),
                    (0, r.jsx)(a5.Sy, {
                        status: _.hasAlreadyLinked ? a5.nW.OVERALL_GOOD : a5.nW.OVERALL_BAD,
                        text: nl.intl.string(nl.t["Vu/zmQ"]),
                    }),
                    0 === _.debug.validFlows.length &&
                        (0, r.jsx)(D.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: nl.intl.string(ns.default.eg0mNa),
                        }),
                    (0, r.jsx)(h.$, {
                        disabled: !_.canStartAuthorization,
                        onClick: () => _.startAuthorization({ analyticsLocations: l }),
                        variant: "primary",
                        text: "Start Authorization",
                    }),
                    (0, r.jsx)(D.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children:
                            "This will start whichever authorization flow is available. RPC authorization takes precedence over web.",
                    }),
                    (0, r.jsx)(h.$, {
                        disabled: !y.canStartAuthorization,
                        onClick: () => y.startAuthorization({ analyticsLocations: l }),
                        variant: "secondary",
                        text: "Start In-App Authorization",
                    }),
                    (0, r.jsx)(h.$, {
                        disabled: !E.canStartAuthorization,
                        onClick: () => E.startAuthorization({ analyticsLocations: l }),
                        variant: "secondary",
                        text: "Start Web Authorization",
                    }),
                    (0, r.jsx)(h.$, { disabled: !S, onClick: N, variant: "critical-primary", text: "Deauthorize" }),
                ],
            }),
            v?.applicationAccountLinkBenefitConfig != null &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(g.c, {}),
                        (0, r.jsxs)("div", {
                            className: ni.kL,
                            children: [
                                (0, r.jsx)(z.D, { variant: "heading-lg/normal", children: "Reward Configuration" }),
                                (0, r.jsx)("div", {
                                    className: ni.Nr,
                                    children: (0, r.jsxs)("div", {
                                        className: ni.Tc,
                                        children: [
                                            null != v.applicationAccountLinkBenefitConfig.reward_image &&
                                                (0, r.jsx)("img", {
                                                    src: v.applicationAccountLinkBenefitConfig.reward_image,
                                                    alt: "Reward",
                                                    className: ni.L8,
                                                }),
                                            (0, r.jsx)(D.E, {
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
var no = a(427358),
    nd = a(228865);
let nc = [
    {
        key: "user",
        cellClassName: nd.iL,
        render(e) {
            let { user: t, key: a } = e;
            return t?.username ?? a;
        },
    },
    {
        key: "affinity",
        renderHeader: () => (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "COMMUNICATION AFFINITY" }),
        cellClassName: nd.nz,
        render(e) {
            let { affinity: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "vcProbability",
        renderHeader: () => (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "VOICE AFFINITY" }),
        cellClassName: nd.nz,
        render(e) {
            let { vcProbability: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "isFriend",
        renderHeader: () => (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "IS FRIEND" }),
        cellClassName: nd.nz,
        render(e) {
            let { isFriend: t } = e;
            return t.toString();
        },
    },
];
function nu() {
    let e = (0, H.yK)([no.A, en.default], () =>
        no.A.getUserAffinities().map((e) => {
            let { otherUserId: t, communicationProbability: a, vcProbability: n, isFriend: l } = e;
            return { user: en.default.getUser(t), affinity: a, vcProbability: n, isFriend: l, key: t };
        }),
    );
    return 0 === e.length ? null : (0, r.jsx)(tB, { className: tF.nd, columns: nc, rowClassName: nd.nM, data: e });
}
var nm = a(139716),
    nh = a(847599),
    nx = a(224381);
function np() {
    return (0, r.jsx)("div", {
        className: F()(tF.nd, nx.k),
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(z.D, { variant: "heading-lg/semibold", children: "Quick Actions" }),
                (0, r.jsx)(g.c, { gap: 16 }),
                (0, r.jsxs)("div", {
                    className: nx.h,
                    children: [
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Launch Age Verification Test Tool",
                            onClick: () =>
                                void (0, T.openModalLazy)(
                                    async () => {
                                        let { default: e } = await a.e("29079").then(a.bind(a, 357578));
                                        return (t) => (0, r.jsx)(e, { ...t });
                                    },
                                    { onCloseCallback: void 0 },
                                ),
                            fullWidth: !0,
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Launch Age Verification Modal",
                            onClick: () =>
                                nm.A.showAgeVerificationGetStartedModal({ entryPoint: nh.q1.DEV_TOOLS_QUICK_ACTIONS }),
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var ng = a(989349),
    nv = a.n(ng),
    nj = a(862482),
    nb = a(624479),
    nf = a(555704),
    ny = a(285796),
    nE = a(241326),
    nC = a(892547),
    n_ = a(297413),
    nS = a(379078),
    nN = a(704554),
    nA = a(957565),
    nk = a(58703),
    nI = a(80703),
    nD = a(495544);
let nT = 0,
    nR = [],
    nO = 0,
    nw = [],
    nM = !1;
class nL extends H.Ay.Store {
    static displayName = "AnalyticsLogStore";
    initialize() {
        this.waitFor(nD.default, aG.A);
    }
    get loggedEvents() {
        return nR;
    }
    get loggedEventsVersion() {
        return nO;
    }
    get loggedTriggers() {
        return nw;
    }
    get trackTriggers() {
        return nM;
    }
}
let nP = new nL(tL.h, {
    TRACK: function (e) {
        let { event: t, properties: a, fingerprint: n } = e;
        aG.A.isDeveloper &&
            (nR.push({
                key: (nT++).toString(),
                event: t,
                properties: a,
                fingerprint: null != n ? (0, nI.d)(n) : nD.default.getId(),
                timestamp: new Date(),
            }),
            nO++,
            nR.length > 500 && (nR = nR.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: a, exposureType: n, excluded: l, location: s, previouslyTracked: i } = e;
        !aG.A.isDeveloper ||
            (nM &&
                (nw = [
                    ...nw,
                    {
                        key: (0, eI.A)(),
                        experimentId: t,
                        descriptor: a,
                        exposureType: n,
                        excluded: l,
                        location: s,
                        previouslyTracked: i,
                        timestamp: new Date(),
                    },
                ]).length > 500 &&
                nw.shift());
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        nM = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        (nR = []), nO++, (nw = []);
    },
});
var nU = a(658675);
function nG(e) {
    let { className: t, children: a } = e;
    return (0, r.jsx)("dl", { className: F()(tF.qo, t), children: a });
}
let nF = (e) => {
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
                (0, r.jsx)("dt", { className: tF.Bz, children: t }),
                (0, r.jsxs)("dd", {
                    className: tF.Nw,
                    children: [
                        a,
                        null != n
                            ? (0, r.jsx)(B.D, {
                                  tag: "span",
                                  className: tF.nH,
                                  onClick: () => (0, nA.C)(n, () => s(!0)),
                                  children: l
                                      ? (0, r.jsx)(tn.U, { color: "currentColor", size: "sm" })
                                      : (0, r.jsx)(nb.T, { color: "currentColor", size: "sm" }),
                              })
                            : null,
                    ],
                }),
            ],
        })
    );
};
function nB(e) {
    let { value: t } = e;
    return (0, r.jsx)(nU.P, { checked: t });
}
var nV = a(453318);
let n$ = [
    {
        key: "event",
        cellClassName: nV.Hz,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "location",
        cellClassName: nV.QN,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function nW(e) {
    let { children: t } = e;
    return (0, r.jsx)(d.Ip, { className: nV._D, children: (0, r.jsx)("dl", { children: t }) });
}
function nz(e) {
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
            className: nV.fY,
            children: [
                (0, r.jsx)("dt", { className: nV.m2, children: t }),
                (0, r.jsx)("dd", { children: a }),
                (0, r.jsx)(B.D, {
                    tag: "span",
                    className: nV.nH,
                    onClick: () => (0, nA.C)(JSON.stringify(n), () => s(!0)),
                    children: l
                        ? (0, r.jsx)(tn.U, { color: "currentColor", size: "sm" })
                        : (0, r.jsx)(nb.T, { color: "currentColor", size: "sm" }),
                }),
            ],
        })
    );
}
let nH = new Set(["client_performance_cpu", "client_performance_memory"]),
    nK = [
        {
            id: "details",
            name: "Details",
            group: a1.fu.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: a, timestamp: n, fingerprint: l },
                        onClose: s,
                        filteredEvents: i,
                    } = e,
                    o = en.default.getUser(l),
                    d = nv()(n);
                return (0, r.jsxs)("div", {
                    className: nV.sw,
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, r.jsxs)(aV.Ay, {
                            className: F()(tF.jr, nV.nZ),
                            children: [
                                (0, r.jsx)(aV.Ay.Icon, { icon: nf.U, tooltip: t }),
                                (0, r.jsxs)(aV.Ay.Title, {
                                    wrapperClassName: nV.qd,
                                    children: [
                                        t,
                                        (0, r.jsx)(B.D, {
                                            tag: "span",
                                            className: nV.KE,
                                            onClick: () => (0, nA.C)(t),
                                            children: (0, r.jsx)(nb.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(aV.Ay.Icon, {
                                    icon: nb.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, nA.C)(
                                            JSON.stringify(
                                                { event: t, timestamp: n, fingerprint: l, user: o?.id, ...a },
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, r.jsx)(aV.Ay.Icon, { icon: ny.a, tooltip: "Close", onClick: s }),
                            ],
                        }),
                        (0, r.jsxs)(nG, {
                            className: nV.ZK,
                            children: [
                                (0, r.jsx)(nF, {
                                    name: "Timestamp (local)",
                                    copyValue: n.toISOString(),
                                    children: (0, r.jsxs)("time", {
                                        dateTime: n.toISOString(),
                                        title: (0, nk.i$)(d, "LLLL"),
                                        children: ["(", nv().locale(), ") ", (0, nk.mk)(d)],
                                    }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nF, {
                                        name: "User",
                                        copyValue: o.id,
                                        children: (0, r.jsx)(n_.A, { user: o }),
                                    }),
                                (0, r.jsx)(nF, {
                                    name: "Fingerprint",
                                    copyValue: l,
                                    children: (0, r.jsx)("code", { children: l }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(nW, {
                            children: Object.entries(a).map((e) => {
                                let [a, n] = e,
                                    l = nH.has(a)
                                        ? ((e, t, a) => {
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
                                                nz,
                                                {
                                                    name: `${a}:`,
                                                    copyValue: { [a]: n || null },
                                                    children:
                                                        null != n
                                                            ? (0, r.jsx)("code", { children: JSON.stringify(n) })
                                                            : (0, r.jsx)("code", {
                                                                  className: nV.HO,
                                                                  children: "null",
                                                              }),
                                                },
                                                a,
                                            ),
                                            null !== l &&
                                                null !== l.average &&
                                                (0, r.jsx)(
                                                    nz,
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
    nY = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(nY)
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
    nq = {
        searchType: nS.n.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: a } = e;
            return null != a.location ? [t, a.location] : t;
        },
        throttleMs: 100,
    };
function nJ() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (0, H.bG)([nP], () => nP.loggedEventsVersion),
        [l, s] = o.useState(() => Object.keys(nY)),
        [i, d] = o.useState(nP.loggedEvents),
        c = o.useCallback((e) => {
            d(e);
        }, []);
    (0, nN.RT)(t, nP.loggedEvents, c, nq, [n]);
    let u = i.filter((e) => {
            for (let t of l) if (nY[t].filter(e)) return !0;
            return !1;
        }),
        [m, h] = o.useState(void 0),
        x = u.find((e) => e.key === m),
        { TabBar: p, renderSelectedTab: g } = (0, a1.Ay)({ tabs: nK }, []);
    return (0, r.jsxs)("div", {
        ref: e,
        className: F()(tF.nd, nV.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nV.rh,
                children: [
                    (0, r.jsx)(nj.$n, {
                        className: nV.Q$,
                        look: nj.$n.Looks.BLANK,
                        size: nj.$n.Sizes.ICON,
                        onClick: K.eY,
                        children: (0, r.jsx)("span", {
                            title: nl.intl.string(nl.t.VkKicb),
                            children: (0, r.jsx)(nE.u, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": nl.intl.string(nl.t.VkKicb),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", { className: nV.Bi }),
                    (0, r.jsx)("div", {
                        className: nV.uW,
                        children: Object.entries(nY).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                B.D,
                                {
                                    className: F()(nV.pb, l.includes(t) && nV.bx),
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
                className: nV.rh,
                children: (0, r.jsx)(nC.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, r.jsx)(tB, { columns: n$, data: u, selectedRowKey: m, onClickRow: (e) => h(e.key) }),
            null != x &&
                (0, r.jsxs)(a0, {
                    className: nV.rf,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(p, {}), g({ loggedEvent: x, onClose: () => h(void 0), filteredEvents: u })],
                }),
        ],
    });
}
var nQ = a(382483),
    nX = a(385113),
    nZ = a(546989);
function n0(e) {
    let { config: t } = e,
        a = Object.entries(t.surfaces ?? {});
    return (0, r.jsxs)($.B, {
        gap: 8,
        padding: 8,
        className: nZ.lt,
        children: [
            (0, r.jsx)(D.E, { variant: "text-sm/semibold", color: "text-strong", children: t.display_name }),
            (0, r.jsxs)(D.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["Config ID: ", t.config_id],
            }),
            (0, r.jsxs)(D.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["App ID: ", t.application_id],
            }),
            (0, r.jsxs)(D.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", t.status] }),
            null != t.updated_at &&
                (0, r.jsxs)(D.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: ["Updated: ", t.updated_at],
                }),
            null != t.published_at &&
                (0, r.jsxs)(D.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: ["Published: ", t.published_at],
                }),
            (0, r.jsx)(g.c, {}),
            (0, r.jsxs)(D.E, {
                variant: "text-xs/semibold",
                color: "text-strong",
                children: ["Surfaces (", a.length, ")"],
            }),
            0 === a.length
                ? (0, r.jsx)(D.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: "No surfaces configured",
                  })
                : a.map((e) => {
                      let [t, a] = e;
                      return (0, r.jsxs)(
                          $.B,
                          {
                              gap: 4,
                              padding: 4,
                              className: nZ.YL,
                              children: [
                                  (0, r.jsx)(D.E, { variant: "text-xs/semibold", color: "text-default", children: t }),
                                  (0, r.jsxs)(D.E, {
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
function n1(e) {
    let { config: t, isSelected: a, onSelect: n } = e;
    return (0, r.jsxs)($.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: a ? nZ.FM : nZ.gt,
        children: [
            (0, r.jsx)(B.D, {
                className: nZ.Av,
                onClick: n,
                children: (0, r.jsxs)($.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(D.E, { variant: "text-sm/medium", color: "text-strong", children: t.display_name }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.config_id, " \xb7 ", t.application_id],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(h.$, {
                variant: "secondary",
                size: "sm",
                text: "Refetch",
                onClick: () => (0, nQ.un)(t.application_id, { force: !0 }),
            }),
        ],
    });
}
function n2() {
    let e = (0, H.bG)([nX.A], () => nX.A.getFeaturedFetchState());
    return (0, r.jsxs)($.B, {
        gap: 8,
        children: [
            (0, r.jsxs)($.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(D.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Featured Configs",
                    }),
                    (0, r.jsxs)(D.E, { variant: "text-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, r.jsx)(h.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, nQ.Wq)({ force: !0 }),
            }),
        ],
    });
}
function n8() {
    let e = (0, H.bG)([nX.A], () => nX.A.getDeveloperFetchState());
    return (0, r.jsxs)($.B, {
        gap: 8,
        children: [
            (0, r.jsxs)($.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(D.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Developer Configs",
                    }),
                    (0, r.jsxs)(D.E, { variant: "text-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, r.jsx)(h.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, nQ.i$)({ force: !0 }),
            }),
        ],
    });
}
function n3() {
    let [e, t] = o.useState(""),
        a = (0, H.bG)([nX.A], () => (e.length > 0 ? nX.A.getFetchState(e) : null)),
        n = (0, H.bG)([nX.A], () => (e.length > 0 ? nX.A.getConfigs(e) : null));
    return (0, r.jsxs)($.B, {
        gap: 8,
        children: [
            (0, r.jsx)(D.E, { variant: "text-md/semibold", color: "text-strong", children: "Fetch by Application ID" }),
            (0, r.jsx)(p.k, { placeholder: "Application ID", value: e, onChange: (e) => t(e) }),
            (0, r.jsx)(h.$, {
                variant: "primary",
                size: "sm",
                text: "Fetch",
                disabled: 0 === e.length,
                onClick: () => (0, nQ.un)(e, { force: !0 }),
            }),
            null != a &&
                (0, r.jsxs)(D.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", a] }),
            null != n &&
                n.length > 0 &&
                (0, r.jsx)($.B, { gap: 4, children: n.map((e) => (0, r.jsx)(n0, { config: e }, e.config_id)) }),
        ],
    });
}
function n6(e) {
    let { configs: t, selectedConfigId: a, onSelectConfig: n } = e,
        l = (0, H.bG)([nX.A], () => nX.A.getFeaturedFetchState());
    return (0, r.jsxs)($.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(D.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: ["All Loaded Configs (", t.length, ")"],
            }),
            l === nX.e.FETCHING &&
                (0, r.jsx)(D.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading..." }),
            t.map((e) =>
                (0, r.jsx)(
                    n1,
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
function n5(e) {
    let { config: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g.c, {}),
            (0, r.jsxs)($.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(D.E, { variant: "text-md/semibold", color: "text-strong", children: "Config Details" }),
                    (0, r.jsx)(n0, { config: t }),
                ],
            }),
        ],
    });
}
function n9() {
    let [e, t] = o.useState(null),
        a = Object.values((0, H.bG)([nX.A], () => nX.A.getAllConfigsByApplication())).flat(),
        n = null != e ? a.find((t) => t.config_id === e) : null;
    return (0, r.jsx)(d.Ar, {
        children: (0, r.jsxs)($.B, {
            gap: 16,
            padding: 8,
            className: nZ.zr,
            children: [
                (0, r.jsx)(z.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: "Application Widget Configs",
                }),
                (0, r.jsx)(n2, {}),
                (0, r.jsx)(g.c, {}),
                (0, r.jsx)(n8, {}),
                (0, r.jsx)(g.c, {}),
                (0, r.jsx)(n3, {}),
                (0, r.jsx)(g.c, {}),
                (0, r.jsx)(n6, { configs: a, selectedConfigId: e, onSelectConfig: t }),
                null != n && (0, r.jsx)(n5, { config: n }),
            ],
        }),
    });
}
var n4 = a(636537),
    n7 = a(153488),
    le = a(927813);
let lt = 12 * le.A.Millis.HOUR,
    la = new Map(),
    ln = !1,
    ll = Object.freeze({ channelAffinities: [], lastFetched: 0 }),
    ls = { ...ll };
function li() {
    la = new Map(ls.channelAffinities.map((e) => [e.channelId, e]));
}
class lr extends H.Ay.PersistedStore {
    static displayName = "ChannelAffinitiesV2Store";
    static persistKey = "ChannelAffinitiesStoreV2";
    initialize(e) {
        null != e && ((ls.channelAffinities = e.channelAffinities), (ls.lastFetched = e.lastFetched), li());
    }
    shouldFetch() {
        if (!ln) return Date.now() - ls.lastFetched > lt;
    }
    isFetching() {
        return ln;
    }
    getChannelAffinities() {
        return ls.channelAffinities;
    }
    getChannelAffinitiesMap() {
        return la;
    }
    getChannelAffinity(e) {
        return la.get(e);
    }
    compare(e, t) {
        return (la.get(t)?.score ?? 0) - (la.get(e)?.score ?? 0);
    }
    getState() {
        return ls;
    }
}
let lo = new lr(tL.h, {
    LOAD_CHANNEL_AFFINITIES_V2: function () {
        ln = !0;
    },
    LOAD_CHANNEL_AFFINITIES_V2_SUCCESS: function (e) {
        let { affineChannels: t } = e;
        (ls.lastFetched = Date.now()), (ln = !1), (ls.channelAffinities = t), li();
    },
    LOAD_CHANNEL_AFFINITIES_V2_FAILURE: function () {
        ln = !1;
    },
    LOGOUT: function () {
        (ls = { ...ll }), (la = new Map()), (ln = !1);
    },
});
var ld = a(332768);
let lc = [
    {
        key: "channel",
        cellClassName: ld._w,
        render(e) {
            let { channelName: t } = e;
            return t;
        },
    },
    {
        key: "score",
        renderHeader: () => (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "SCORE" }),
        cellClassName: ld.t6,
        render(e) {
            let { score: t } = e;
            return t.toFixed(5);
        },
    },
];
function lu() {
    o.useEffect(() => {
        !(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            lo.shouldFetch() && n7.A.hasConsented(er.YAq.PERSONALIZATION)
                ? (tL.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2" }),
                  n4.Bo.get({
                      url: er.Rsh.CHANNEL_AFFINITIES_V2,
                      retries: 3 * !!e,
                      oldFormErrors: !0,
                      rejectWithError: !1,
                  }).then(
                      (e) => {
                          let { body: t } = e;
                          tL.h.dispatch({
                              type: "LOAD_CHANNEL_AFFINITIES_V2_SUCCESS",
                              affineChannels: t.channel_affinities.map((e) => ({
                                  channelId: e.channel_id,
                                  score: e.score ?? 0,
                              })),
                          });
                      },
                      () => {
                          tL.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2_FAILURE" });
                      },
                  ))
                : Promise.resolve();
        })();
    }, []);
    let e = (0, H.yK)([lo, aj.A], () =>
        lo
            .getChannelAffinities()
            .map((e) => {
                let { channelId: t, score: a } = e;
                return { key: t, channelName: aj.A.getChannel(t)?.name ?? t, score: a };
            })
            .sort((e, t) => t.score - e.score),
    );
    return 0 === e.length ? null : (0, r.jsx)(tB, { className: tF.nd, columns: lc, rowClassName: ld.nM, data: e });
}
function lm() {
    return (0, r.jsxs)(D.E, {
        variant: "text-lg/normal",
        children: [
            "Under Construction",
            " ",
            (0, r.jsx)("span", { role: "img", "aria-label": "Construction", children: "\uD83D\uDEA7" }),
        ],
    });
}
var lh = a(105565),
    lx = a(558845),
    lp = a(206969);
let lg = (e) => {
        switch (e) {
            case lh.r.DC_DISMISSED:
                return "DISMISS:";
            case lh.r.DC_SHOWN:
                return "SHOW:";
            case lh.r.DC_SHOW_REQUEST:
                return "REQUEST TO SHOW:";
            default:
                return "UNKNOWN TYPE:";
        }
    },
    lv = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: a } = e;
                return `${t} ${ao.M[a]}`;
            },
        },
    ],
    lj = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return `${ao.M[t]}`;
            },
        },
    ];
function lb() {
    let e = (0, H.bG)([lh.A], () => lh.A.getDCFEvents()),
        t = (0, lx.Ay)((e) => e.candidates),
        a = (0, lx.Ay)((e) => e.lastWinnerTime),
        n = 0 !== a ? nv()(a).fromNow() : "n/a",
        l = (0, lx.Ay)((e) => (0 === e.lastWinnerTime ? null : e.recentlyShown[0])),
        s = e.map((e) => {
            let { eventType: t, dismissibleContent: a } = e;
            return { key: lg(t) + a.toString(), event: lg(t), dismissibleContent: a };
        }),
        i = Array.from(t.keys()).map((e) => ({ key: e.toString(), dismissibleContent: e }));
    return (0, r.jsxs)("div", {
        className: lp.KE,
        children: [
            (0, r.jsxs)("div", { className: lp.pq, children: ["Last winner time: ", n] }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("div", { className: lp.pq, children: ["Last winner: ", null != l ? ao.M[l] : "None"] }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("div", {
                className: lp.uI,
                children: (0, r.jsx)(tB, { className: lp.Th, columns: lj, data: i }),
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)(tB, { columns: lv, data: s }),
        ],
    });
}
var lf = a(689175),
    ly = a(541689),
    lE = a(199773);
function lC() {
    let e = (0, o.useCallback)((e) => {
        let t = new Set(l_());
        t.delete(e);
        let a = Array.from(t).slice(0, 4);
        a.unshift(e), tM.w.set("RecentDismissibleOverrides", a);
    }, []);
    return [l_(), e];
}
function l_() {
    return tM.w.get("RecentDismissibleOverrides") ?? [];
}
a(667532);
var lS = a(662546),
    lN = a(643278),
    lA = a(256787),
    lk = a(20439);
let lI = o.memo(function (e) {
    let { className: t, content: a, onChange: n } = e,
        l = ao.M[a],
        { isDismissed: s, handleToggleDismissState: i } = (0, lk.A)(l),
        [d, c] = o.useState(!1),
        u = o.useCallback(() => {
            n?.(a), i();
        }, [n, i, a]),
        m = o.useCallback(
            (e) => {
                e.preventDefault(), c(!0), navigator.clipboard.writeText(a.toLowerCase());
            },
            [a],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)($.B, {
                className: t,
                direction: "horizontal",
                align: "center",
                children: [
                    (0, r.jsx)(eG.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: d ? lS.O : lN.s,
                        onClick: m,
                        "aria-label": d ? "Copied" : "Copy",
                    }),
                    (0, r.jsx)(v.d, {
                        label: `${a.toLowerCase()} (${ao.M[a]})`,
                        description: (0, lA.Zm)(l)
                            ? (function (e) {
                                  let t = ad.A.settings.userContent?.recurringDismissibleContentStates?.[e];
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
            (0, r.jsx)(g.c, {}),
        ],
    });
});
function lD(e) {
    let { items: t, onChange: a } = e,
        [n, l] = lC(),
        s = (0, o.useCallback)(
            (e) => {
                l(e), a?.(e);
            },
            [l, a],
        );
    return (0, r.jsx)($.B, {
        gap: 16,
        children: t.filter((e) => isNaN(Number(e))).map((e) => (0, r.jsx)(lI, { content: e, onChange: s }, e)),
    });
}
function lT(e) {
    let { searchQuery: t = "" } = e,
        a = (0, lx.Ay)((e) => e.recentlyShown),
        [n, l] = lC(),
        s = n
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .filter((e) => !a.includes(ao.M[e]))
            .slice(0, 3);
    return 0 === s.length
        ? null
        : (0, r.jsx)(u.n, { label: "Recent Overrides", children: (0, r.jsx)(lD, { items: s }) });
}
function lR(e) {
    let { searchQuery: t = "" } = e,
        a = (0, lx.Ay)((e) => e.recentlyShown)
            .map((e) => ao.M[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .slice(0, 3);
    return 0 === a.length ? null : (0, r.jsx)(u.n, { label: "Recently Shown", children: (0, r.jsx)(lD, { items: a }) });
}
var lO = a(594061),
    lw = a(16795);
function lM() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: a,
        } = (0, H.cf)([lE.A], () => ({
            dailyCapReached: lE.A.hasUserHitDCCap(),
            dailyCapOverridden: lE.A.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: lE.A.newUserMinAgeRequiredOverridden,
        })),
        [n, l] = o.useState(""),
        [s, i] = o.useState(20),
        d = o.useMemo(
            () =>
                Object.keys(ao.M)
                    .filter((e) => e.toLowerCase().includes(n.toLowerCase()))
                    .reverse(),
            [n],
        ),
        c = o.useCallback(
            (e) => {
                let t = e.currentTarget;
                t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && s < d.length && i((e) => e + 100);
            },
            [s, d.length],
        );
    return (0, r.jsx)(lf.Ch, {
        onScroll: c,
        children: (0, r.jsxs)("div", {
            className: lw.KE,
            children: [
                (0, r.jsxs)(u.n, {
                    label: "Dismissible Content Overrides",
                    children: [
                        (0, r.jsxs)($.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Reset Daily Cap",
                                    onClick: () => (0, ly.Ab)(),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Undismiss All DCs",
                                    onClick: () => (0, lO.nT)(),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Dismiss All DCs",
                                    onClick: () => (0, lO.D1)(),
                                }),
                                (0, r.jsx)(D.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: `Daily Cap Reached: ${e ? "Yes" : "No"}`,
                                }),
                            ],
                        }),
                        (0, r.jsx)(v.d, {
                            label: "Override Dismissible Content Daily Cap",
                            checked: t,
                            onChange: ly.SE,
                        }),
                        (0, r.jsx)(v.d, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: a,
                            onChange: ly.U$,
                        }),
                    ],
                }),
                (0, r.jsx)(lR, {}),
                (0, r.jsx)(lT, {}),
                (0, r.jsxs)(u.n, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, r.jsx)(nC.I, { query: n, onChange: l, onClear: () => l("") }),
                        (0, r.jsx)(lD, { items: d.slice(0, s) }),
                    ],
                }),
            ],
        }),
    });
}
var lL = a(276086),
    lP = a(154323),
    lU = a(435312);
function lG() {
    let e = (0, H.bG)([lP.A], () => lP.A.allWithDescriptions(), [], H.My),
        t = o.useMemo(
            () =>
                e.map((e) => {
                    let [t, a, n] = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                v.d,
                                { label: n, description: t, checked: a, onChange: (e) => (0, lL.L)(t, e) },
                                t,
                            ),
                            (0, r.jsx)(g.c, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, r.jsxs)("div", {
        className: lU.kL,
        children: [
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: lU.x6,
                children: (0, r.jsx)(h.$, { variant: "primary", text: "Clear all", onClick: lL.$, fullWidth: !0 }),
            }),
            (0, r.jsx)("div", { className: lU.vu, children: t }),
        ],
    });
}
var lF = a(691540),
    lB = a(97483),
    lV = a(123292),
    l$ = a(780907),
    lW = a(56562);
let lz = [
    { label: "Wuthering Waves", value: "1247227126416146462" },
    { label: "Marvel Rivals", value: "1314395942253756416" },
    { label: "VALORANT", value: "700136079562375258" },
    { label: "League of Legends", value: "1402418696126992445" },
];
function lH(e) {
    let { runningGame: t, isDebugGame: a } = e,
        { data: n } = (0, an.I)(t.id);
    return (0, r.jsxs)($.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            null != n && (0, r.jsx)(at.A, { game: n }),
            (0, r.jsxs)($.B, {
                justify: "center",
                gap: 0,
                children: [
                    (0, r.jsx)(D.E, { variant: "text-md/normal", children: n?.name }),
                    a && (0, r.jsx)(D.E, { variant: "text-xxs/normal", children: "Debug" }),
                ],
            }),
        ],
    });
}
function lK() {
    let e = (0, H.bG)([j.Ay], () => j.Ay.getRunningGames()),
        t = (0, H.bG)([j.Ay], () => j.Ay.getDebugRunningGame()),
        [a, n] = (0, o.useState)(t?.id ?? ""),
        l = (0, o.useMemo)(
            () =>
                lz.map((e) => {
                    let { label: t, value: a } = e;
                    return { label: t, value: a, id: a };
                }),
            [],
        ),
        s = (e) => {
            if (null == e || "" === e) return void (0, l$.xt)(null);
            let t = tW.A.getDetectableGame(e),
                a = t?.executables[0],
                n = t?.thirdPartySkus[0]?.distributor;
            if (null == t || null == a)
                return (0, lF.P0)({
                    id: "devtools-set-debug-game-error",
                    type: lB.Ck.FAILURE,
                    message: "Invalid Game ID",
                });
            (0, l$.xt)({
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
                fullscreenType: lW.aI.UNKNOWN,
                cmdLine: "",
                nativeProcessObserverId: -1,
            });
        };
    return (0, r.jsxs)($.B, {
        gap: 32,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)($.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(z.D, { variant: "heading-md/bold", children: "Running Games" }),
                    e.length > 0 &&
                        (0, r.jsx)("div", {
                            children: e.map((e) =>
                                (0, r.jsx)(lH, { runningGame: e, isDebugGame: t?.id === e.id }, e.id),
                            ),
                        }),
                ],
            }),
            (0, r.jsx)(g.c, {}),
            (0, r.jsxs)($.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(z.D, { variant: "heading-md/bold", children: "Set Debug Running Game" }),
                    (0, r.jsx)(p.k, { label: "Custom Game ID", value: a, onChange: n }),
                    (0, r.jsx)(ae.Z, {
                        label: "Pick a Preset Game",
                        options: l,
                        value: t?.id ?? "",
                        onSelectionChange: (e) => {
                            s(e);
                        },
                        selectionMode: "single",
                        clearable: !0,
                    }),
                    (0, r.jsxs)($.B, {
                        direction: "horizontal",
                        gap: 16,
                        justify: "end",
                        align: "end",
                        children: [
                            null != t &&
                                (0, r.jsx)(lV.Q, { variant: "secondary", text: "Clear", onClick: () => s(null) }),
                            (0, r.jsx)(h.$, { variant: "primary", text: "Detect Game", onClick: () => s(a) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lY = a(240248),
    lq = a(658539);
function lJ() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        i = o.useCallback(async () => {
            try {
                t(!0), n(null), s(null);
                let e = await n4.Bo.put({
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
    return (0, r.jsxs)($.B, {
        direction: "vertical",
        gap: 4,
        children: [
            (0, r.jsx)(h.$, { variant: "primary", onClick: i, text: "Reset Onboarding", disabled: e, fullWidth: !0 }),
            !(0, lY.uJ)(a) && (0, r.jsx)(D.E, { variant: "text-md/normal", color: "status-positive", children: a }),
            !(0, lY.uJ)(l) && (0, r.jsx)(D.E, { variant: "text-md/normal", color: "status-danger", children: l }),
        ],
    });
}
function lQ() {
    return (0, r.jsx)("div", {
        className: lq.n,
        children: (0, r.jsx)($.B, { direction: "vertical", gap: 16, children: (0, r.jsx)(lJ, {}) }),
    });
}
a(172879);
var lX = a(985623),
    lZ = a.n(lX),
    l0 = a(990078),
    l1 = a(874804),
    l2 = a(782134),
    l8 = a(113494),
    l3 = a(603349),
    l6 = a(528458);
function l5(e) {
    return parseFloat(e.toFixed(3));
}
let l9 = [
    {
        key: "store",
        cellClassName: l6.lA,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "time",
        cellClassName: l6.i7,
        render(e) {
            let { trace: t } = e;
            return `${l5(t.time)} ms`;
        },
    },
];
function l4(e) {
    let { actionLog: t } = e,
        a = o.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, r.jsx)(d.Ip, { children: (0, r.jsx)(tB, { columns: l9, data: a }) });
}
let l7 = [
    {
        id: "action",
        name: "Action",
        group: a1.fu.NONE,
        render(e) {
            let { actionLog: t } = e,
                a = nv()(t.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(nG, {
                        className: l6.mP,
                        children: [
                            (0, r.jsx)(nF, {
                                name: "Created at",
                                children: (0, r.jsx)("time", {
                                    dateTime: t.createdAt?.toISOString(),
                                    title: (0, nk.i$)(a, "LLLL"),
                                    children: (0, nk.mk)(a),
                                }),
                            }),
                            (0, r.jsxs)(nF, { name: "Total Time", children: [l5(t.totalTime), " ms"] }),
                        ],
                    }),
                    (0, r.jsx)(d.Ip, { className: l6.Dx, children: (0, r.jsx)(aJ, { data: t.action }) }),
                ],
            });
        },
    },
    {
        id: "traces",
        name: "Store Handlers",
        group: a1.fu.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, r.jsx)(l4, { actionLog: t });
        },
    },
];
function se(e) {
    let { actionLog: t, initialHeight: a } = e,
        n = o.useMemo(
            () =>
                t.error
                    ? [
                          ...l7,
                          {
                              id: "error",
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(l3.A, { className: l6.ik }), "Error"],
                              }),
                              group: a1.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: F()(l6.u4, tF.KE),
                                              children: (0, r.jsx)("div", {
                                                  className: tF.R5,
                                                  children: (0, r.jsx)(nj.$n, {
                                                      className: tF.Q$,
                                                      size: nj.$n.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, r.jsx)(d.Ip, {
                                              className: l6.Dx,
                                              children: (0, r.jsx)(aJ, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : l7,
            [t],
        ),
        { TabBar: l, renderSelectedTab: s } = (0, a1.Ay)({ tabs: n }, [n]);
    return (0, r.jsxs)(a0, {
        className: l6.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(aV.Ay, {
                className: F()(tF.jr, l6.nZ),
                children: [
                    (0, r.jsx)(aV.Ay.Icon, { icon: l1.K, tooltip: t.name }),
                    (0, r.jsx)(aV.Ay.Title, {
                        wrapperClassName: F()(tF.qd, tF.ZE),
                        className: tF.Pz,
                        children: t.name,
                    }),
                    (0, r.jsx)(aV.Ay.Icon, {
                        icon: nb.T,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let a = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, a) => {
                                    var n;
                                    return (t[a] = ((n = e[a]), er.AKn.test(n) ? "REDACTED" : n)), t;
                                }, {}),
                                null,
                                2,
                            );
                            (0, nA.C)(a, () =>
                                (0, lF.P0)({
                                    id: "copy-action-log-name",
                                    type: lB.Ck.SUCCESS,
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
let st = [
        {
            key: "action",
            cellClassName: l6.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.error && (0, r.jsx)(l3.A, { className: l6.ik }), t.name],
                });
            },
        },
        {
            key: "total time",
            cellClassName: l6.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${l5(t.totalTime)} ms`;
            },
        },
        {
            key: "timestamp",
            cellClassName: l6.i7,
            render(e) {
                let { actionLog: t } = e;
                return nv()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    sa = {
        searchType: nS.n.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function sn() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (function (e) {
            let [t, a] = o.useState(e.logs);
            return (
                o.useEffect(() => {
                    let t = lZ()(() => {
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
        })(tL.h.actionLogger),
        l = o.useMemo(() => n.map((e) => ({ key: e.id.toString(), actionLog: e })).toReversed(), [n]),
        [s, i] = o.useState(l),
        [d, c] = o.useState(l),
        [u, m] = o.useState(!1),
        [h, x] = o.useState(),
        p = o.useCallback((e) => {
            c(e);
        }, []);
    (0, nN.RT)(t, u ? s : l, p, sa);
    let g = o.useCallback(
            (e) => {
                i(l), m(e);
            },
            [l],
        ),
        v = t.trim().length > 0,
        j = o.useMemo(() => (v ? d : u ? s : l), [l, d, v, u, s]),
        b = u ? "Enable Event Tracking" : "Pause Event Tracking";
    return (0, r.jsxs)("div", {
        ref: e,
        className: F()(tF.nd, l6.nd),
        children: [
            (0, r.jsxs)("div", {
                className: l6.KE,
                children: [
                    (0, r.jsx)(l0.m, {
                        text: b,
                        children: (0, r.jsx)(eG.K, {
                            size: "sm",
                            variant: u ? "primary" : "active",
                            icon: u ? l2.u : l8.E,
                            "aria-label": b,
                            onClick: () => g(!u),
                        }),
                    }),
                    (0, r.jsx)(nC.I, {
                        size: "sm",
                        query: t,
                        onChange: a,
                        onClear: () => a(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, r.jsx)(tB, {
                columns: st,
                data: j,
                selectedRowKey: h?.id.toString(),
                onClickRow: (e) => x(e.actionLog),
            }),
            null != h &&
                (0, r.jsx)(se, { actionLog: h, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
var sl = a(936388),
    ss = a(253009);
function si() {
    let e = o.useRef(null);
    return (0, r.jsx)("div", {
        ref: e,
        className: F()(tF.nd, ss.n),
        children: (0, r.jsx)(h.$, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: sl.A.clearUploadedKeyVersions,
        }),
    });
}
var sr = a(825484),
    so = a(37962),
    sd = a(881520),
    sc = a(670455),
    su = a(624872);
let sm = [
    { id: "seconds", label: "second(s)", value: 1e3 },
    { id: "minutes", label: "minute(s)", value: 6e4 },
    { id: "hours", label: "hour(s)", value: 36e5 },
    { id: "days", label: "day(s)", value: 864e5 },
];
function sh() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(0),
        [l, s] = o.useState(1e3),
        [i, d] = o.useState(0),
        c = (0, H.bG)([sd.A], () => (null === e ? null : (sd.A.getFeedbackConfig(sc.MW[e]) ?? so.u[sc.MW[e]]))),
        m = Object.entries(sc.MW),
        v = m.slice(m.length / 2).map((e) => {
            let [t] = e;
            return { id: t, label: t, value: t };
        }),
        j = o.useMemo(() => null != e && i >= 0 && i <= 100 && a >= 0, [e, i, a]);
    return (0, r.jsx)("div", {
        className: su.kL,
        children: (0, r.jsxs)($.B, {
            gap: 32,
            children: [
                (0, r.jsx)(x.l, {
                    label: "Feedback Survey",
                    options: v,
                    value: e,
                    onSelectionChange: t,
                    placeholder: "Select Feedback Survey",
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsxs)(u.n, {
                    label: "Override Survey Cooldown",
                    children: [
                        null != c &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "Current cooldown" }),
                                    (0, r.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        children: `${c.cooldown / 1e3} second(s) or`,
                                    }),
                                    (0, r.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        children: `${c.cooldown / 6e4} minute(s) or`,
                                    }),
                                    (0, r.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        children: `${c.cooldown / 36e5} hour(s) or`,
                                    }),
                                    (0, r.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        children: `${c.cooldown / 864e5} day(s)`,
                                    }),
                                ],
                            }),
                        (0, r.jsxs)($.B, {
                            direction: "horizontal",
                            align: "end",
                            children: [
                                (0, r.jsx)(p.k, {
                                    label: "Override cooldown",
                                    min: 0,
                                    value: a.toString(),
                                    type: "number",
                                    placeholder: "Duration length",
                                    onChange: (e) => n(parseFloat(e)),
                                }),
                                (0, r.jsx)(x.l, {
                                    label: "Override cooldown duration type",
                                    hideLabel: !0,
                                    options: sm,
                                    value: l,
                                    onSelectionChange: s,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(g.c, {}),
                (0, r.jsx)(u.n, {
                    label: "Override Survey Chance",
                    children: (0, r.jsx)(p.k, {
                        label: "Override chance",
                        description: null != c ? `Current chance: ${100 * c.chance}%` : void 0,
                        helperText: "As a percentage",
                        min: 0,
                        max: 100,
                        value: i.toString(),
                        type: "number",
                        onChange: (e) => d(parseFloat(e)),
                    }),
                }),
                (0, r.jsxs)(sr.e, {
                    children: [
                        (0, r.jsx)(h.$, {
                            variant: "critical-primary",
                            text: "Clear Override",
                            onClick: () =>
                                void (
                                    null != c &&
                                    tL.h.dispatch({ type: "FEEDBACK_OVERRIDE_CLEAR", feedbackType: c.feedbackType })
                                ),
                            disabled: !j,
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Update",
                            onClick: () =>
                                void (
                                    null != c &&
                                    tL.h.dispatch({
                                        type: "FEEDBACK_OVERRIDE_SET",
                                        feedbackType: c.feedbackType,
                                        cooldown: a * l,
                                        chance: i / 100,
                                    })
                                ),
                            disabled: !j,
                        }),
                    ],
                }),
                null == e &&
                    (0, r.jsx)(D.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: need to select a survey",
                    }),
                !(a >= 0) &&
                    (0, r.jsx)(D.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: cooldown needs to be a number greater than 0",
                    }),
                !(i >= 0 && i <= 100) &&
                    (0, r.jsx)(D.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: chance needs to be a number between 0 and 100",
                    }),
                (0, r.jsx)(D.E, {
                    variant: "text-sm/normal",
                    children: "Clear override resets a feedback survey to its default values",
                }),
            ],
        }),
    });
}
var sx = a(334279),
    sp = a(663417),
    sg = a(147925),
    sv = a(557009),
    sj = a(788868);
let sb = async () =>
        (
            await n4.Bo.get({
                url: er.Rsh.ENTITLEMENTS_FOR_APPLICATION(sj.tv),
                oldFormErrors: !0,
                query: { exclude_consumed: !0, exclude_ended: !0 },
                rejectWithError: !0,
            })
        ).body.map((e) => sv.A.createFromServer(e)),
    sf = async (e) => {
        await n4.Bo.post({
            url: "/debug/entitlements/fractional-premium",
            body: { count: 1, sku_id: e },
            rejectWithError: !1,
        });
    },
    sy = async (e) => {
        let t = "/debug/entitlements/fractional-premium";
        null != e && (t = `${t}/${e}`), await n4.Bo.del({ url: t, rejectWithError: !0 });
    },
    sE = async () => {
        await n4.Bo.post({ url: "/debug/entitlements/fulfillment", rejectWithError: !1 });
    },
    sC = () => {
        let [e, t] = o.useState([]),
            [a, n] = o.useState(!1),
            l = (0, o.useCallback)(async () => {
                try {
                    n(!0);
                    let e = await sb();
                    t(e);
                } finally {
                    n(!1);
                }
            }, []),
            s = (0, o.useCallback)(
                async (e) => {
                    await sf(e), await l();
                },
                [l],
            );
        return {
            grantFractionalPremium: s,
            deleteFractionalPremium: (0, o.useCallback)(
                async (e) => {
                    await sy(e), await l();
                },
                [l],
            ),
            triggerNextEntitlementFulfillment: (0, o.useCallback)(async () => {
                await sE(), await l();
            }, [l]),
            refreshEntitlementList: l,
            entitlements: e,
            loading: a,
        };
    };
var s_ = a(993606),
    sS = a(472020);
let sN = {
        [er.GD.QUEST_REWARD]: "Quest Reward",
        [er.GD.DEVELOPER_GIFT]: "Developer Gift",
        [er.GD.INVOICE]: "Invoice",
        [er.GD.REVERSE_TRIAL]: "Reverse Trial",
        [er.GD.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
        [er.GD.SUBSCRIPTION]: "Subscription",
        [er.GD.SUBSCRIPTION_MEMBER]: "Subscription Member",
    },
    sA = (e) => {
        let t,
            { entitlement: a, active: n, onDelete: l } = e,
            s = (e) => (null != e ? (0, nk.i$)(e, "LLL") : "---");
        return (0, r.jsxs)("div", {
            className: F()(s_.Nr, n ? sS.C1 : ""),
            children: [
                (0, r.jsxs)(D.E, { variant: "text-md/normal", children: ["ID: ", a.id, " "] }),
                !n &&
                    (0, r.jsxs)(D.E, {
                        variant: "text-md/normal",
                        children: ["SKU: ", sk.find((e) => e.value === a.skuId)?.label],
                    }),
                null != a.startsAt &&
                    null != a.endsAt &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(D.E, { variant: "text-md/normal", children: ["Start: ", s(a.startsAt), " "] }),
                            (0, r.jsxs)(D.E, { variant: "text-md/normal", children: ["End: ", s(a.endsAt), " "] }),
                        ],
                    }),
                (0, r.jsxs)(D.E, {
                    variant: "text-md/normal",
                    children: [
                        "Entitlement source type: ",
                        null != (t = a.sourceType) && t in sN ? sN[t] : `Unknown source type ${t}`,
                    ],
                }),
                n &&
                    null != l &&
                    (0, r.jsx)(nj.$n, {
                        className: s_.RW,
                        size: nj.$n.Sizes.TINY,
                        color: nj.$n.Colors.RED,
                        look: nj.$n.Looks.OUTLINED,
                        onClick: l,
                        children: "Delete",
                    }),
            ],
        });
    },
    sk = [
        { id: "1h", label: "1 hour", value: sx.j.PREMIUM_TIER_2_1_HOUR },
        { id: "1d", label: "1 day", value: sx.j.PREMIUM_TIER_2_1_DAY },
        { id: "3d", label: "3 days", value: sx.j.PREMIUM_TIER_2_3_DAY },
    ];
function sI() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(sx.j.PREMIUM_TIER_2_1_HOUR),
        [l, s] = o.useState([]),
        [i, c] = o.useState([]),
        {
            refreshEntitlementList: u,
            grantFractionalPremium: m,
            deleteFractionalPremium: p,
            triggerNextEntitlementFulfillment: g,
            entitlements: v,
            loading: j,
        } = sC();
    return (
        o.useEffect(() => {
            u();
        }, [u]),
        o.useEffect(() => {
            s(v.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === er.zF_.FRACTIONAL_REDEMPTION)),
                c(v.filter((e) => Object.values(sx.j).includes(e.skuId) && null == e.startsAt));
        }, [v]),
        (0, r.jsx)(d.Ip, {
            className: tF.nd,
            children: (0, r.jsxs)("div", {
                className: sS.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: sS.dL,
                        children: [
                            (0, r.jsx)(D.E, {
                                style: { marginBottom: "8px" },
                                variant: "text-lg/bold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, r.jsxs)(B.D, {
                                onClick: () => t(!e),
                                className: s_.As,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Info" }),
                                    }),
                                    (0, r.jsx)(sg.A, { direction: e ? sg.A.Directions.UP : sg.A.Directions.DOWN }),
                                ],
                            }),
                        ],
                    }),
                    e &&
                        (0, r.jsxs)("div", {
                            style: { margin: "8px 0" },
                            children: [
                                (0, r.jsx)(D.E, {
                                    variant: "text-md/normal",
                                    style: { fontStyle: "italic" },
                                    color: "text-muted",
                                    children:
                                        "Subscriptions paused by Fractional Nitro do not automatically resume in local or staging environments. Subscription has to be resumed manually via Admin.",
                                }),
                                (0, r.jsx)("br", {}),
                                (0, r.jsx)(D.E, {
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
                        className: F()([s_.uW, sS.Uo]),
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Fractional Premium SKU",
                                value: a,
                                options: sk,
                                onSelectionChange: n,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Grant Fractional Nitro",
                                onClick: () => m(a),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("section", {
                        className: s_.uW,
                        children: [
                            (0, r.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: sS.dL,
                                children: [
                                    (0, r.jsx)(D.E, {
                                        style: { marginBottom: "8px" },
                                        variant: "text-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: s_.GC,
                                        children: [
                                            (0, r.jsx)(nj.$n, {
                                                disabled: j,
                                                size: nj.$n.Sizes.TINY,
                                                color: nj.$n.Colors.PRIMARY,
                                                look: nj.$n.Looks.OUTLINED,
                                                onClick: () => g(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, r.jsx)(nj.$n, {
                                                disabled: j,
                                                size: nj.$n.Sizes.TINY,
                                                color: nj.$n.Colors.RED,
                                                look: nj.$n.Looks.OUTLINED,
                                                onClick: () => p(),
                                                children: "Delete all",
                                            }),
                                            (0, r.jsx)(nj.$n, {
                                                disabled: j,
                                                look: nj.$n.Looks.BLANK,
                                                size: nj.$n.Sizes.ICON,
                                                onClick: u,
                                                children: (0, r.jsx)("span", {
                                                    title: "Refresh",
                                                    children: (0, r.jsx)(sp.f, { size: "xs", color: "currentColor" }),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            l.length > 0 &&
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(D.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Active premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: l.map((e) =>
                                                (0, r.jsx)(
                                                    sA,
                                                    { entitlement: e, active: !0, onDelete: () => p(e.id) },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                            i.length > 0 &&
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(D.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Unconsumed Fractional Premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: i.map((e) => (0, r.jsx)(sA, { entitlement: e }, e.id)),
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
var sD = a(390544),
    sT = a(396748),
    sR = a(522055),
    sO = a(550546);
function sw() {
    let e = (0, H.bG)([nt.A], () => nt.A.getGuildId()),
        t = (0, H.bG)([ne.A], () => ne.A.getGuild(e)?.name),
        a = (0, H.bG)([sR.A], () => sR.A.getStateForGuild(e)?.instances),
        n = o.useMemo(() => Object.values(a ?? {})[0], [a]),
        l = o.useCallback(
            (t) => {
                null != n &&
                    null != e &&
                    tL.h.dispatch({
                        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                        guildId: e,
                        instance: { ...n, status: t },
                    });
            },
            [n, e],
        ),
        s = o.useMemo(
            () =>
                Object.values(sD.M).map((e) =>
                    (0, r.jsx)(
                        h.$,
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
                tL.h.dispatch({
                    type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                    guildId: e,
                    instance: { ...n, serverIP: void 0, port: void 0, gameServerPanelUrl: void 0 },
                });
        }, [n, e]);
    return null == e
        ? null
        : (0, r.jsxs)(d.Ip, {
              className: sO.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: sO.uW,
                      children: (0, r.jsx)(z.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                  }),
                  (0, r.jsxs)("div", {
                      className: sO.uW,
                      children: [
                          (0, r.jsx)(D.E, {
                              variant: "eyebrow",
                              children: `Set server state for first server: ${n?.name}`,
                          }),
                          (0, r.jsx)("div", { className: sO.UD, children: s }),
                          (0, r.jsx)(D.E, { variant: "eyebrow", children: "Remove Server Info" }),
                          (0, r.jsx)("div", {
                              className: sO.UD,
                              children: (0, r.jsx)(h.$, {
                                  variant: "primary",
                                  text: "Remove IP Address & Game Server Panel URL",
                                  onClick: i,
                              }),
                          }),
                          (0, r.jsx)(D.E, { variant: "eyebrow", children: "Reset server" }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              text: "Reset",
                              onClick: () => {
                                  (0, sT.cq)(e);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
function sM(e, t) {
    let a = "boolean" == typeof t ? t : !aB.Ay.get(e);
    tL.h.dispatch({ type: "DEV_TOOLS_DEV_SETTING_SET", toggle: e, value: a });
}
var sL = a(758585);
function sP(e) {
    let { devSettingsCategory: t } = e,
        a = (0, H.bG)([aB.Ay], () => aB.Ay.allByCategory(t), [t], H.My),
        n = o.useMemo(
            () =>
                a.map((e) => {
                    let [t, a, { label: n }] = e;
                    return (0, r.jsx)(v.d, { label: n, description: t, checked: a, onChange: (e) => sM(t, e) }, t);
                }),
            [a],
        );
    return (0, r.jsx)("div", { className: F()(tF.nd, sL.n), children: n });
}
var sU = a(950305),
    sG = a(231483),
    sF = a(597770),
    sB = a(433492),
    sV = a(695458),
    s$ = a(796140),
    sW = a(268791),
    sz = a(836480),
    sH = a(855473),
    sK = a(626258),
    sY = a(420854),
    sq = a(373846),
    sJ = a(657044),
    sQ = a(141060),
    sX = a(608599),
    sZ = a(685761),
    s0 = a(157225),
    s1 = a(362704),
    s2 = a(625903),
    s8 = a(628284),
    s3 = a(320448),
    s6 = a(562708),
    s5 = a(830215),
    s9 = a(381689),
    s4 = a(889227),
    s7 = a(499785),
    ie = a(315069);
class it extends ie.A {
    id;
    summary;
    userIds;
    password;
    constructor(e) {
        super(), (this.id = e.pool_id), (this.summary = e.summary), (this.userIds = e.user_ids);
    }
    static fromServer(e) {
        return new it(e);
    }
    setPassword(e) {
        return (this.password = e), this;
    }
}
let ia = { pools: null, users: null };
function il(e) {
    null == ia.users && (ia.users = new Map()), ia.users.set(e.id, new s4.A(e));
}
class is extends H.Ay.PersistedStore {
    static displayName = "GeneratedTestUsersStore";
    static persistKey = "GeneratedTestUsersStore";
    initialize(e) {
        null != e &&
            (null != e.pools && (ia.pools = new Map(Object.entries(e.pools))),
            null != e.users && (ia.users = new Map(Object.entries(e.users))));
    }
    getState() {
        return {
            pools: null != ia.pools ? Object.fromEntries(ia.pools) : null,
            users: null != ia.users ? Object.fromEntries(ia.users) : null,
        };
    }
    getUsersForPool(e) {
        return Array.from(ia.users?.values() ?? []).filter((t) => ia.pools?.get(e)?.userIds.includes(t.id));
    }
    getPool(e) {
        return ia.pools?.get(e) ?? null;
    }
    getUser(e) {
        return ia.users?.get(e) ?? null;
    }
    getPools() {
        return null === ia.pools ? null : Array.from(ia.pools.values());
    }
}
let ii = new is(tL.h, {
    GENERATED_POOL_BY_ID_FETCH_SUCCESS: function (e) {
        let { pool: t, users: a } = e;
        null == ia.pools && (ia.pools = new Map()), ia.pools.set(t.id, t), a.forEach(il);
    },
    GENERATED_POOL_REMOVE_FROM_LIST: function (e) {
        let { poolId: t } = e,
            a = ia.pools?.get(t);
        if (null == a) return !1;
        a.userIds.length > 0 &&
            a.userIds.forEach((e) => {
                ia.users?.delete(e);
            }),
            ia.pools?.delete(t);
    },
});
var ir = a(835002);
async function io(e, t) {
    return await s7.A.get({
        url: er.Rsh.GENERATED_POOL_BY_ID(e),
        trackedActionData: { event: s6.NetworkActionNames.USER_LOGIN },
        rejectWithError: !1,
    })
        .then((e) => {
            let { ok: a, body: n } = e;
            if (!a) return void s9.A.showFailedToast(ir.OB.GENERIC_ERROR);
            let { generated_pool: l, users: s } = n;
            tL.h.dispatch({
                type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                pool: it.fromServer(l).setPassword(t),
                users: s.map((e) => new s4.A(e)),
            });
        })
        .catch(() => (s9.A.showFailedToast(ir.OB.GENERIC_ERROR), null));
}
var id = a(844330),
    ic = a(290587);
let iu = [
        sU.n,
        sG.l,
        sF.o,
        sB.K,
        sV.m,
        s$.c,
        sW.$,
        sz.Q,
        sH.Z,
        sK.A,
        sY.E,
        sq.C,
        sJ._,
        sQ.i,
        sX.L,
        sZ.f,
        s0.N,
        s1.Y,
        s2.Z,
    ],
    im = [
        "text-default",
        "text-feedback-positive",
        "text-feedback-warning",
        "text-feedback-info",
        "text-feedback-critical",
    ],
    ih = () => {
        let [e, t] = o.useState(""),
            [a, n] = o.useState(""),
            [l, s] = o.useState(!1);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("form", {
                    onSubmit: async (l) => {
                        l.preventDefault(), s(!0);
                        try {
                            await io(e, a), t(""), n("");
                        } finally {
                            s(!1);
                        }
                    },
                    children: (0, r.jsxs)($.B, {
                        direction: "vertical",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, r.jsxs)($.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    (0, r.jsx)(p.k, {
                                        fullWidth: !0,
                                        value: e,
                                        onChange: t,
                                        placeholder: "Pool ID",
                                        disabled: l,
                                    }),
                                    (0, r.jsx)(p.k, {
                                        type: "password",
                                        fullWidth: !0,
                                        value: a,
                                        onChange: n,
                                        placeholder: "Password",
                                        disabled: l,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)($.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    (0, r.jsx)(h.$, {
                                        type: "button",
                                        size: "md",
                                        fullWidth: !0,
                                        variant: "secondary",
                                        text: "Clear",
                                        onClick: () => {
                                            t(""), n("");
                                        },
                                        disabled: 0 === e.length || 0 === a.length || l,
                                    }),
                                    (0, r.jsx)(h.$, {
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
                (0, r.jsx)(g.c, { gap: 4 }),
            ],
        });
    },
    ix = (e) => {
        let { pool: t } = e,
            { id: a, summary: n } = t,
            l = ii.getUsersForPool(a),
            s = (0, H.bG)([nD.default], () => nD.default.getId()),
            i = iu[Number(a) % iu.length],
            d = im[Number(a) % im.length],
            c = o.useCallback(() => {
                tL.h.dispatch({ type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId: a });
            }, [a]);
        return (0, r.jsx)($.B, {
            direction: "horizontal",
            align: "start",
            justify: "space-between",
            children: (0, r.jsx)(id.A, {
                icon: (0, r.jsx)(D.E, {
                    variant: "text-md/medium",
                    color: d,
                    className: ic.td,
                    children: (0, r.jsx)(i, { size: "custom", width: 24, height: 24, color: "currentColor" }),
                }),
                title: n,
                className: ic.JC,
                subtitle: `${l.length} users`,
                children: (0, r.jsxs)($.B, {
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
                                        0 !== a && (0, r.jsx)(g.c, { gap: 4 }),
                                        (0, r.jsx)(
                                            B.D,
                                            {
                                                onClick: (a) => {
                                                    a.stopPropagation(),
                                                        (function (e, t) {
                                                            let a = ii.getUser(t);
                                                            if (null == a) throw Error("User not found");
                                                            let n = ii.getPool(e)?.password;
                                                            if (null == n) throw Error("Pool password not found");
                                                            if (null == a.email) throw Error("User email not found");
                                                            s5.A.login({
                                                                login: a.email,
                                                                password: n,
                                                                isMultiAccount: !0,
                                                                source: "generated_test_user",
                                                            }).catch(
                                                                () => (s9.A.showFailedToast(ir.OB.GENERIC_ERROR), null),
                                                            );
                                                        })(t.id, e.id);
                                                },
                                                "aria-disabled": s === e.id,
                                                className: F()(ic.vk, { [ic.Pe]: s === e.id }),
                                                children: (0, r.jsxs)(
                                                    $.B,
                                                    {
                                                        direction: "horizontal",
                                                        align: "center",
                                                        justify: "space-between",
                                                        gap: 8,
                                                        padding: { right: 8 },
                                                        fullWidth: !1,
                                                        children: [
                                                            (0, r.jsxs)($.B, {
                                                                direction: "horizontal",
                                                                align: "center",
                                                                gap: 8,
                                                                fullWidth: !1,
                                                                className: F()({ [ic.WP]: s === e.id }),
                                                                children: [
                                                                    (0, r.jsx)(sU.n, {
                                                                        size: "custom",
                                                                        width: 20,
                                                                        height: 20,
                                                                        color: "currentColor",
                                                                    }),
                                                                    (0, r.jsxs)("div", {
                                                                        children: [
                                                                            (0, r.jsx)(D.E, {
                                                                                variant: "text-sm/normal",
                                                                                color: "text-default",
                                                                                children: e.username,
                                                                            }),
                                                                            (0, r.jsx)(D.E, {
                                                                                variant: "text-xs/normal",
                                                                                color: "text-muted",
                                                                                className: ic.c1,
                                                                                children: e.email,
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            s === e.id
                                                                ? (0, r.jsx)(D.E, {
                                                                      variant: "text-sm/normal",
                                                                      color: "text-feedback-positive",
                                                                      children: (0, r.jsx)(s8.y, {
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                                  })
                                                                : (0, r.jsx)(s3._, {
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
                            className: ic.UD,
                            children: (0, r.jsx)(h.$, {
                                icon: nE.u,
                                text: "",
                                size: "sm",
                                variant: "secondary",
                                onClick: c,
                            }),
                        }),
                    ],
                }),
            }),
        });
    };
function ip() {
    let e = (0, H.yK)([ii], () => ii.getPools() ?? []);
    return (0, r.jsxs)($.B, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: ic.kL,
        children: [
            (0, r.jsx)(ih, {}),
            (0, r.jsx)(d.Ip, { className: ic.Ik, children: e?.map((e) => (0, r.jsx)(ix, { pool: e }, e.id)) }),
        ],
    });
}
var ig = a(582306),
    iv = a(528153),
    ij = a(275759),
    ib = a(68013);
function iy(e) {
    let t = new Date(e);
    return (
        t.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " " +
        t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 })
    );
}
function iE() {
    let e = (0, H.bG)([ij.Ay], () => ij.Ay.getDevToolTotalFriendAnniversaries()),
        t = (0, H.bG)([ij.Ay], () => ij.Ay.getDevToolCurrentDate()),
        a = (0, H.bG)([ij.Ay], () => ij.Ay.getGiftUnreadNotificationLastDismissedTimes()),
        n = (0, H.bG)([ij.Ay], () => ij.Ay.getMessageGiftIntentLastShownMap()),
        l = (0, H.bG)([ij.Ay], () => ij.Ay.getHighestAffinityFriendAnniversaries()),
        s = (0, H.bG)([ij.Ay], () => ij.Ay.getHighAffinityFriendAnniversaries()),
        i = (0, H.bG)([ij.Ay], () => ij.Ay.getProfilePopoutGiftIntentsDismissMap()),
        o = (0, H.bG)([ad.A], () => {
            let e =
                ad.A.settings.userContent?.recurringDismissibleContentStates[ao.M.GIFT_INTENT_MESSAGE]
                    ?.lastDismissedAtMs;
            if (null == e || "0" === e) return null;
            let t = Number(e);
            return Number.isNaN(t) ? null : t;
        }),
        c = (e) => {
            tL.h.dispatch({ type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: e });
        },
        u = (e) => {
            let t = no.A.getUserAffinity(e);
            return t?.dmProbability != null ? `${(100 * t.dmProbability).toFixed(3)}%` : "N/A";
        };
    return (0, r.jsx)(d.Ip, {
        className: tF.nd,
        children: (0, r.jsxs)("div", {
            className: ib.l$,
            children: [
                (0, r.jsx)(D.E, { className: ib.Iv, variant: "text-lg/bold", children: "Friend Anniversary" }),
                (0, r.jsx)("div", {
                    className: ib.Pm,
                    children: (0, r.jsxs)($.B, {
                        gap: 8,
                        direction: "horizontal",
                        style: { flex: 1 },
                        children: [
                            (0, r.jsx)(x.l, {
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
                                    c(e);
                                },
                            }),
                            (0, r.jsx)(h.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Clear",
                                onClick: () => {
                                    c(null);
                                },
                            }),
                        ],
                    }),
                }),
                null != e &&
                    (0, r.jsx)("div", {
                        className: ib.Pm,
                        children: (0, r.jsxs)($.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(D.E, {
                                    variant: "text-xs/normal",
                                    children:
                                        "Affinity is the percent chance that User A will DM or GDM User B in the next 7 days.",
                                }),
                                (0, r.jsx)(D.E, {
                                    variant: "text-xs/normal",
                                    children:
                                        "The devtool automatically assigns users as high affinity regardless of actual affinity for testing.",
                                }),
                                l.length > 0 &&
                                    (0, r.jsxs)($.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(D.E, {
                                                variant: "text-xs/semibold",
                                                children:
                                                    "Highest Affinity Friend Anniversaries (Eligible for Notification):",
                                            }),
                                            l.map((e) => {
                                                let t = en.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, r.jsxs)(
                                                    D.E,
                                                    { variant: "text-xs/normal", children: [a, " (", u(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                                s.length > 0 &&
                                    (0, r.jsxs)($.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(D.E, {
                                                variant: "text-xs/semibold",
                                                children: "High Affinity Friend Anniversaries:",
                                            }),
                                            s.map((e) => {
                                                let t = en.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, r.jsxs)(
                                                    D.E,
                                                    { variant: "text-xs/normal", children: [a, " (", u(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                (0, r.jsx)("div", {
                    className: ib.Pm,
                    children: (0, r.jsxs)($.B, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, r.jsx)(ig.J, {
                                label: "Override current date used for cooldowns",
                                value: null != t ? nv()(t) : void 0,
                                onSelect: (e) => {
                                    let t = nv()(),
                                        a = e
                                            .clone()
                                            .hours(t.hours())
                                            .minutes(t.minutes())
                                            .seconds(t.seconds())
                                            .milliseconds(t.milliseconds());
                                    tL.h.dispatch({ type: "DEV_TOOLS_SET_CURRENT_DATE", date: a.valueOf() });
                                },
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Clear",
                                onClick: () => {
                                    tL.h.dispatch({ type: "DEV_TOOLS_RESET_CURRENT_DATE" });
                                },
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: ib.Pm,
                    children: (0, r.jsxs)($.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)($.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(D.E, {
                                        variant: "text-md/normal",
                                        children: "Reset DCF gift intent cooldown (global, 24h)",
                                    }),
                                    (0, r.jsx)(h.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            (0, lO._N)(ao.M.GIFT_INTENT_MESSAGE);
                                        },
                                    }),
                                ],
                            }),
                            (0, r.jsx)(D.E, {
                                variant: "text-xs/normal",
                                children: null != o ? `Dismissed at: ${iy(o)}` : "Not dismissed",
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: ib.Pm,
                    children: (0, r.jsxs)($.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)($.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(D.E, {
                                        variant: "text-md/normal",
                                        children: "Reset gift message cooldown (per-user, 14d)",
                                    }),
                                    (0, r.jsx)(h.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            tL.h.dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(n).length > 0 &&
                                (0, r.jsxs)($.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(D.E, {
                                            variant: "text-xs/semibold",
                                            children: "Gift Message Intent Last Shown:",
                                        }),
                                        Object.entries(n).map((e) => {
                                            let [t, a] = e,
                                                n = en.default.getUser(t),
                                                l = n?.username ?? `Unknown User (${t})`;
                                            return (0, r.jsxs)(
                                                D.E,
                                                { variant: "text-xs/normal", children: [l, ": ", iy(a)] },
                                                t,
                                            );
                                        }),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: ib.Pm,
                    children: (0, r.jsxs)($.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)($.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(D.E, {
                                        variant: "text-md/normal",
                                        children: "Reset gift notification cooldown",
                                    }),
                                    (0, r.jsx)(h.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            tL.h.dispatch({
                                                type: "DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET",
                                            });
                                        },
                                    }),
                                ],
                            }),
                            a.length > 0 &&
                                (0, r.jsxs)($.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(D.E, {
                                            variant: "text-xs/semibold",
                                            children: "Gift notification shown timestamps:",
                                        }),
                                        a.map((e, t) =>
                                            (0, r.jsx)(D.E, { variant: "text-xs/normal", children: iy(e) }, t),
                                        ),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: ib.Pm,
                    children: [
                        (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Send gift notification" }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Send",
                            onClick: () => {
                                iv.A.sendGiftingNotificationIfEligible();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: ib.Pm,
                    children: [
                        (0, r.jsx)(D.E, {
                            variant: "text-md/normal",
                            children: "Clear last seen friend anniversaries in All Friends",
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Clear",
                            onClick: () => {
                                tL.h.dispatch({ type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: ib.Pm,
                    children: (0, r.jsxs)($.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)($.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(D.E, {
                                        variant: "text-md/normal",
                                        children: "Reset profile popout gift intents dismiss",
                                    }),
                                    (0, r.jsx)(h.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            tL.h.dispatch({
                                                type: "DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET",
                                            });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(i).length > 0 &&
                                (0, r.jsxs)($.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(D.E, {
                                            variant: "text-xs/semibold",
                                            children: "Profile Popout Gift Intents Dismissed:",
                                        }),
                                        Object.entries(i).map((e) => {
                                            let [t, a] = e,
                                                n = en.default.getUser(t),
                                                l = n?.username ?? `Unknown User (${t})`;
                                            return (0, r.jsxs)(
                                                D.E,
                                                { variant: "text-xs/normal", children: [l, ": ", iy(a)] },
                                                t,
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
var iC = a(460890),
    i_ = a(349288),
    iS = a(517461),
    iN = a(214947),
    iA = a(403581),
    ik = a(34188);
let iI = [
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
var iD = a(3838);
let iT = [0, 0.5, 1],
    iR = ["Center", "Inner ring", "Outer ring"],
    iO = iT.length,
    iw = "ILLO_BLUE",
    iM = "ILLO_BLUE_40",
    iL = Array.from({ length: iO }, () => iM),
    iP = Array.from({ length: iO }, () => iw),
    iU = ["1", "0.5", "0"],
    iG = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i,
    iF = [
        { label: "Light", value: er.NJ8.LIGHT, id: er.NJ8.LIGHT },
        { label: "Dark", value: er.NJ8.DARK, id: er.NJ8.DARK },
        { label: "Darker", value: er.NJ8.DARKER, id: er.NJ8.DARKER },
        { label: "Midnight", value: er.NJ8.MIDNIGHT, id: er.NJ8.MIDNIGHT },
    ],
    iB = { [er.NJ8.MIDNIGHT]: er.NJ8.DARKER, [er.NJ8.DARKER]: er.NJ8.DARK, [er.NJ8.LIGHT]: er.NJ8.DARK },
    iV = { [er.NJ8.LIGHT]: "light", [er.NJ8.DARK]: "ash", [er.NJ8.DARKER]: "dark", [er.NJ8.MIDNIGHT]: "onyx" },
    i$ = [
        { id: "friends", icon: iN.$, text: "Friends" },
        { id: "nitro", icon: iA.t, text: "Nitro Home", nitroHoverGradient: !0 },
        { id: "shop", icon: ik.U, text: "Shop", useCustomGradient: !0 },
    ],
    iW = iI.map((e) => ({ label: e, value: e, id: e })),
    iz = Object.fromEntries(
        iI.map((e) => [
            e,
            Object.keys(eV.A.unsafe_rawColors)
                .filter((t) => String(t).startsWith(e + "_"))
                .sort(
                    (e, t) =>
                        parseInt(String(e).split("_").pop() ?? "0", 10) -
                        parseInt(String(t).split("_").pop() ?? "0", 10),
                )
                .map((e) => {
                    let t = String(e).split("_").pop() ?? e,
                        [a, n, l] = eV.A.unsafe_rawColors[e].resolve().rgba(),
                        s =
                            (0.299 * a + 0.587 * n + 0.114 * l) / 255 > 0.5
                                ? eV.A.unsafe_rawColors.OPACITY_BLACK_28
                                : eV.A.unsafe_rawColors.OPACITY_WHITE_28,
                        i = (0, r.jsx)("span", {
                            className: iD.oP,
                            style: { background: `rgb(${a}, ${n}, ${l})`, border: `1px solid ${s.css}` },
                        });
                    return { label: t, value: e, id: String(e), leading: i };
                }),
        ]),
    );
var iH = a(306327);
function iK(e, t, a) {
    return e.map((e, n) => (n === t ? a : e));
}
function iY(e, t) {
    let [a, n, l, s] = eV.A.unsafe_rawColors[e].resolve().rgba({ opacity: t });
    return { r: a, g: n, b: l, a: s };
}
function iq(e, t) {
    let a = eV.A.unsafe_rawColors[e].resolve();
    return null != t ? a.hex({ opacity: t }) : a.hex();
}
function iJ(e) {
    let { yaml: t, label: a } = e,
        n = o.useCallback(() => {
            navigator.clipboard.writeText(t);
        }, [t]);
    return (0, r.jsxs)($.B, {
        gap: 4,
        children: [
            (0, r.jsxs)($.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                justify: "space-between",
                children: [
                    (0, r.jsx)(D.E, { variant: "text-md/semibold", children: a }),
                    (0, r.jsx)(eG.K, {
                        icon: nb.T,
                        "aria-label": `Copy ${a} YAML`,
                        onClick: n,
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            (0, r.jsx)("pre", { className: iD.RP, children: t }),
        ],
    });
}
function iQ(e) {
    let { allResolvedStops: t } = e,
        a = o.useMemo(
            () =>
                iR.map((e, a) => {
                    let n;
                    return (
                        (n = iF
                            .map((e) => {
                                let n,
                                    l,
                                    { value: s } = e,
                                    i = iV[s],
                                    r = t[s];
                                return `  ${i}:
    color: ${-1 === ((l = (n = String(r.colors[a]).toLowerCase()).lastIndexOf("_"))) ? n.replace(/_/g, "-") : n.slice(0, l).replace(/_/g, "-") + "." + n.slice(l + 1)}
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
    return (0, r.jsxs)($.B, {
        gap: 16,
        children: [
            (0, r.jsx)(z.D, { variant: "heading-sm/semibold", children: "Token YAML" }),
            iR.map((e, t) => (0, r.jsx)(iJ, { yaml: a[t], label: e }, e)),
        ],
    });
}
function iX(e, t, a) {
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
    return new iH.A("srgb", [
        (e.r * (1 - r) + n * r) / 255,
        (e.g * (1 - r) + l * r) / 255,
        (e.b * (1 - r) + s * r) / 255,
    ]);
}
function iZ(e, t, a) {
    let n = a.map((e) => {
            let [t, a, n] = eV.A.unsafe_rawColors[e.color].resolve().rgba();
            return { r: t, g: a, b: n, opacity: e.opacity, position: e.position };
        }),
        l = 1 / 0,
        s = (e) => {
            e < l && (l = e);
        };
    for (let a of n) s(e.contrast(iX(t, n, a.position), "WCAG21"));
    for (let a = 0; a < n.length - 1; a++) {
        let { contrast: l } = (function (e, t, a, n, l) {
            let s = 1 / 0,
                i = n;
            for (let r = 0; r <= 100; r++) {
                let o = n + (r / 100) * (l - n),
                    d = a.contrast(iX(e, t, o), "WCAG21");
                d < s && ((s = d), (i = o));
            }
            return { contrast: s, position: i };
        })(t, n, e, n[a].position, n[a + 1].position);
        s(l);
    }
    return Math.round(100 * l) / 100;
}
function i0(e) {
    let [t, a, n] = eV.A.colors.TEXT_DEFAULT.resolve(e).rgba(),
        [l, s, i] = eV.A.colors.BACKGROUND_BASE_LOWEST.resolve(e).rgba(),
        [r, o, d, c] = eV.A.colors.INTERACTIVE_BACKGROUND_HOVER.resolve(e).rgba();
    return {
        text: new iH.A("srgb", [t / 255, a / 255, n / 255]),
        background: { r: l * (1 - c) + r * c, g: s * (1 - c) + o * c, b: i * (1 - c) + d * c },
    };
}
function i1() {
    return {
        colors: Array.from({ length: iO }, () => void 0),
        scales: Array.from({ length: iO }, () => void 0),
        opacities: Array.from({ length: iO }, () => void 0),
    };
}
function i2() {
    return {
        [er.NJ8.LIGHT]: i1(),
        [er.NJ8.DARK]: { colors: [...iL], scales: [...iP], opacities: [...iU] },
        [er.NJ8.DARKER]: i1(),
        [er.NJ8.MIDNIGHT]: i1(),
    };
}
function i8() {
    let e = (0, iC.G9)(),
        [t, a] = o.useState(er.NJ8.DARK),
        [n, l] = (0, iS.V)("DevToolsGradientContrastPanel_themeStops", i2()),
        s = n ?? i2(),
        [i, c] = o.useState(["", "", ""]),
        [u, m] = o.useState([null, null, null]),
        [x, g] = o.useState(null),
        { images: v, renderPickers: j } = (function () {
            let [e, t] = o.useState(null),
                a = o.useRef(null),
                n = o.useCallback((e) => {
                    let a = e.target.files?.[0];
                    if (null == a) return;
                    let n = new FileReader();
                    (n.onload = () => t({ src: n.result, name: a.name })), n.readAsDataURL(a), (e.target.value = "");
                }, []),
                l = o.useCallback(
                    () =>
                        (0, r.jsxs)($.B, {
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
                                              (0, r.jsx)(D.E, { variant: "text-sm/normal", children: e.name }),
                                              (0, r.jsx)(lV.Q, {
                                                  text: "Remove",
                                                  variant: "critical",
                                                  textVariant: "text-sm/medium",
                                                  onClick: () => t(null),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(h.$, {
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
                    iF.map((e) => {
                        let { value: t } = e;
                        return [
                            t,
                            (function (e, t) {
                                let a = [],
                                    n = [],
                                    l = [];
                                for (let s = 0; s < iO; s++) {
                                    let i,
                                        r,
                                        o,
                                        d = t;
                                    for (; null != d; ) {
                                        let t = e[d];
                                        if (
                                            ((i ??= t.colors[s]),
                                            (r ??= t.scales[s]),
                                            (o ??= t.opacities[s]),
                                            null != i && null != r && null != o)
                                        )
                                            break;
                                        d = iB[d];
                                    }
                                    a.push(i ?? iL[s]), n.push(r ?? iP[s]), l.push(o ?? iU[s]);
                                }
                                return { colors: a, scales: n, opacities: l };
                            })(s, t),
                        ];
                    }),
                ),
            [s],
        ),
        f = b[t],
        y = o.useCallback(
            (e) => {
                l({ ...s, [t]: e(s[t]) });
            },
            [t, l, s],
        ),
        E = o.useMemo(() => i0({ theme: t, saturation: 1 }), [t]),
        C = o.useMemo(() => {
            let e = [];
            for (let t = 0; t < iO; t++) {
                let a = parseFloat(f.opacities[t]);
                if (isNaN(a) || a < 0 || a > 1) return null;
                e.push({ color: f.colors[t], opacity: a, position: iT[t] });
            }
            return e;
        }, [f]),
        _ = o.useMemo(() => {
            if (null == C) return null;
            let { text: e, background: t } = E;
            return iR.map((a, n) =>
                iz[f.scales[n]].map((a) => {
                    let l = iZ(e, t, iK(C, n, { ...C[n], color: a.value }));
                    return { ...a, trailing: `(${l}:1)` };
                }),
            );
        }, [C, E, f.scales]),
        S = o.useMemo(() => {
            try {
                return iF.map((e) => {
                    let { value: t, label: a } = e,
                        n = b[t],
                        l = [];
                    for (let e = 0; e < iO; e++) {
                        let s = parseFloat(n.opacities[e]);
                        if (isNaN(s) || s < 0 || s > 1) return { theme: t, label: a, result: null };
                        l.push({ color: n.colors[e], opacity: s, position: iT[e] });
                    }
                    return {
                        theme: t,
                        label: a,
                        result: (function (e, t) {
                            let a,
                                { text: n, background: l } = i0(t),
                                s = iZ(n, l, e),
                                i = s >= 4.5;
                            if (!i)
                                for (let t = 0; t < e.length; t++) {
                                    let s = (function (e) {
                                        let t = String(e).match(/^(.+)_\d+$/);
                                        if (null == t) return null;
                                        let a = t[1];
                                        return iI.includes(a) ? a : null;
                                    })(e[t].color);
                                    if (null == s) continue;
                                    let i = parseInt(String(e[t].color).split("_").pop() ?? "0", 10),
                                        r = 1 / 0;
                                    for (let { value: o } of iz[s]) {
                                        if (o === e[t].color) continue;
                                        let s = iZ(n, l, iK(e, t, { ...e[t], color: o }));
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
    return (0, r.jsx)(d.Ar, {
        className: iD.XG,
        children: (0, r.jsxs)($.B, {
            gap: 24,
            padding: 8,
            className: iD.zr,
            children: [
                (0, r.jsx)(z.D, {
                    variant: "heading-lg/medium",
                    children: "Tab Hover Gradient Token Generator & Contrast Checker",
                }),
                (0, r.jsxs)($.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(D.E, {
                            variant: "text-md/normal",
                            children:
                                "Checks that tab hover gradients pass WCAG AA (4.5:1) contrast against the text in the tab, accounting for opacities and hover states.",
                        }),
                        (0, r.jsx)(D.E, {
                            variant: "text-sm/normal",
                            children:
                                "Pick colors for each gradient stop (center, inner ring, outer ring) per theme. Each color in the dropdown will show the minimum contrast ratio for the gradient if the color were selected. Dark-family themes inherit: values set on Dark cascade to Darker and Midnight unless overridden.",
                        }),
                        (0, r.jsx)(D.E, {
                            variant: "text-sm/normal",
                            children:
                                "Use the hex field to paste in a hex color \u2014 it will snap to the closest allowed token and show the deltaE distance.",
                        }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-sm/normal",
                            children: [
                                "Copy the generated YAML at the bottom to create your token definitions to be used by the",
                                " ",
                                (0, r.jsx)(i_.Anchor, {
                                    href: "https://design.discord.tools/foundations/color/token-pipeline",
                                    children: "token pipeline",
                                }),
                                ".",
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(ae.Z, {
                    selectionMode: "single",
                    label: "Theme",
                    value: t,
                    onSelectionChange: (e) => a(e),
                    closeOnSelect: !0,
                    options: iF,
                }),
                (0, r.jsxs)($.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(z.D, { variant: "heading-sm/semibold", children: "Gradient Stops" }),
                        (0, r.jsx)("div", {
                            className: iD.G9,
                            children: iR.map((e, t) => {
                                let a = "" !== i[t];
                                return (0, r.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            (0, r.jsxs)($.B, {
                                                gap: 0,
                                                className: iD.hi,
                                                children: [
                                                    (0, r.jsx)(D.E, { variant: "text-md/medium", children: e }),
                                                    (0, r.jsx)(lV.Q, {
                                                        variant: "secondary",
                                                        textVariant: "text-xs/normal",
                                                        text: `(${iq(f.colors[t], parseFloat(f.opacities[t]))})`,
                                                        onClick: () =>
                                                            navigator.clipboard.writeText(
                                                                iq(f.colors[t], parseFloat(f.opacities[t])),
                                                            ),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(ae.Z, {
                                                selectionMode: "single",
                                                label: "Scale",
                                                disabled: a,
                                                value: f.scales[t],
                                                onSelectionChange: (e) => {
                                                    let a = iz[e][0]?.value;
                                                    y((n) => ({
                                                        ...n,
                                                        scales: iK(n.scales, t, e),
                                                        colors: null != a ? iK(n.colors, t, a) : n.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: iW,
                                            }),
                                            (0, r.jsx)(ae.Z, {
                                                selectionMode: "single",
                                                label: "Value",
                                                disabled: a,
                                                value: f.colors[t],
                                                onSelectionChange: (e) =>
                                                    y((a) => ({ ...a, colors: iK(a.colors, t, e) })),
                                                closeOnSelect: !0,
                                                options: _?.[t] ?? iz[f.scales[t]],
                                            }),
                                            (0, r.jsx)(p.k, {
                                                label: "Opacity",
                                                name: `opacity-${t}`,
                                                value: f.opacities[t],
                                                onChange: (e) => y((a) => ({ ...a, opacities: iK(a.opacities, t, e) })),
                                                placeholder: "0\u20131",
                                            }),
                                            (0, r.jsx)(p.k, {
                                                label: `Hex${a && null != u[t] ? ` (dE: ${u[t]})` : ""}`,
                                                name: `hex-${t}`,
                                                value: i[t],
                                                onChange: (e) => {
                                                    c((a) => iK(a, t, e));
                                                    let a = (function (e) {
                                                        if (!iG.test(e)) return null;
                                                        try {
                                                            return new iH.A(e.startsWith("#") ? e : `#${e}`);
                                                        } catch {
                                                            return null;
                                                        }
                                                    })(e);
                                                    if (null != a) {
                                                        let e = (function (e) {
                                                            let t = iM,
                                                                a = iw,
                                                                n = 1 / 0;
                                                            for (let l of iI)
                                                                for (let s of iz[l]) {
                                                                    let i = e.deltaE(
                                                                        (function (e) {
                                                                            let [t, a, n] = eV.A.unsafe_rawColors[e]
                                                                                .resolve()
                                                                                .rgba();
                                                                            return new iH.A("srgb", [
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
                                                        m((a) => iK(a, t, e.deltaE)),
                                                            y((a) => ({
                                                                ...a,
                                                                scales: iK(a.scales, t, e.scale),
                                                                colors: iK(a.colors, t, e.color),
                                                            }));
                                                    } else m((e) => iK(e, t, null));
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
                (0, r.jsx)(z.D, { variant: "heading-sm/semibold", children: "Preview" }),
                (0, r.jsx)(iC.GE, {
                    value: { ...e, theme: t },
                    children: (0, r.jsx)(eB.N, {
                        theme: t,
                        children: (e) =>
                            (0, r.jsx)("div", {
                                className: e,
                                children: (0, r.jsx)($.B, {
                                    gap: 16,
                                    children: (0, r.jsx)("ul", {
                                        className: iD.$8,
                                        style: { background: eV.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: i$.map((e, t) =>
                                            (0, r.jsx)(
                                                ep.z9,
                                                {
                                                    route: "",
                                                    selected: x === e.id,
                                                    onClick: () => g(e.id),
                                                    icon: e.icon,
                                                    text: e.text,
                                                    showHoverGradient: !0,
                                                    nitroHoverGradient: "nitroHoverGradient" in e,
                                                    role: "listitem",
                                                    tabIndex: 0,
                                                    onFocus: () => {},
                                                    ...("useCustomGradient" in e && {
                                                        hoverGradientStart: iY(f.colors[0], parseFloat(f.opacities[0])),
                                                        hoverGradientMiddle: iY(
                                                            f.colors[1],
                                                            parseFloat(f.opacities[1]),
                                                        ),
                                                        hoverGradientEnd: iY(f.colors[2], parseFloat(f.opacities[2])),
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
                null != S &&
                    (0, r.jsxs)($.B, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(z.D, { variant: "heading-sm/semibold", children: "Results" }),
                            S.map((e) => {
                                let { theme: t, label: a, result: n } = e;
                                return null != n
                                    ? (0, r.jsxs)(
                                          $.B,
                                          {
                                              gap: 8,
                                              children: [
                                                  (0, r.jsx)(D.E, { variant: "text-md/semibold", children: a }),
                                                  (0, r.jsxs)(V.w, {
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
                                                      (0, r.jsxs)($.B, {
                                                          gap: 4,
                                                          children: [
                                                              (0, r.jsx)(D.E, {
                                                                  variant: "text-sm/semibold",
                                                                  children: "Suggestion:",
                                                              }),
                                                              (0, r.jsxs)(D.E, {
                                                                  variant: "text-sm/normal",
                                                                  children: [
                                                                      iR[n.suggestion.stopIndex],
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
                                                      (0, r.jsx)(D.E, {
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
                (0, r.jsx)(iQ, { allResolvedStops: b }),
            ],
        }),
    });
}
var i3 = a(820739),
    i6 = a(230135),
    i5 = a(45780),
    i9 = a(868652),
    i4 = a(859241);
let i7 = [
        ao.M.GUILD_POWERUP_PERKS_COACHMARK,
        ao.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        ao.M.GUILD_POWERUP_NOTIFICATION,
        ao.M.GUILD_TAG_AVAILABLE_COACHMARK,
        ao.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
    ],
    re = [
        ao.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        ao.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        ao.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        ao.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
        ao.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
    ],
    rt = [ao.V.ADOPT_CLAN_IDENTITY_NOTICE],
    ra = [
        ao.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        ao.M.VANITY_URL_POWERUP_ROLLBACK_MODAL,
        ao.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
    ];
function rn(e) {
    switch (e) {
        case ao.V.GUILD_POWERUP_LEVEL_1_COACHMARK:
            return "GUILD_POWERUP_LEVEL_1_COACHMARK";
        case ao.V.GUILD_POWERUP_LEVEL_2_COACHMARK:
            return "GUILD_POWERUP_LEVEL_2_COACHMARK";
        case ao.V.GUILD_POWERUP_LEVEL_3_COACHMARK:
            return "GUILD_POWERUP_LEVEL_3_COACHMARK";
        case ao.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK";
        case ao.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK";
        case ao.V.ADOPT_CLAN_IDENTITY_NOTICE:
            return "ADOPT_CLAN_IDENTITY_NOTICE";
        default:
            return String(e);
    }
}
var rl = a(41255);
async function rs(e, t, a) {
    await n4.Bo.patch({
        url: er.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
        body: { applied_boost_ids: t.map((e) => e.id), ends_at: a ? null : nv()().add(1, "day") },
        rejectWithError: !0,
    }),
        (0, i3.VU)(e),
        (0, i9.Xd)(e, !0);
}
async function ri(e) {
    await n4.Bo.post({ url: er.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e), rejectWithError: !0 });
}
function rr() {
    let e = (0, H.bG)([nt.A], () => nt.A.getGuildId()),
        t = (0, H.bG)([ne.A], () => ne.A.getGuild(e)?.name),
        a = (0, H.yK)([ad.A], () => [...re, ...rt].filter((t) => null != e && (0, i5.zs)(t, e))),
        n = (0, H.yK)([i4.A], () => (null != e ? (i4.A.getAppliedGuildBoostsForGuild(e) ?? []) : []));
    if (null != e)
        return (0, r.jsxs)(d.Ip, {
            className: rl.kL,
            children: [
                (0, r.jsx)("div", {
                    className: rl.uW,
                    children: (0, r.jsx)(z.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                }),
                (0, r.jsxs)("div", {
                    className: rl.uW,
                    children: [
                        (0, r.jsx)(D.E, {
                            variant: "eyebrow",
                            className: rl.wx,
                            children: "Reset Notification Indicators",
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Reset",
                            onClick: () => {
                                (0, i9.qM)();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: rl.uW,
                    children: [
                        (0, r.jsx)(D.E, { variant: "eyebrow", className: rl.wx, children: "Reset Progress Bar State" }),
                        (0, r.jsx)(h.$, { variant: "primary", text: "Reset", onClick: i6.O }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: rl.uW,
                    children: [
                        (0, r.jsx)(D.E, { variant: "eyebrow", children: "Set Warning State" }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Set Half Boosts expiring in 1 day",
                                    onClick: () => {
                                        rs(e, n.slice(Math.floor(n.length / 2)), !1);
                                    },
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        rs(e, n, !0);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: rl.uW,
                    children: [
                        (0, r.jsx)(D.E, { variant: "eyebrow", className: rl.wx, children: "Reset User Level DCs" }),
                        (0, r.jsx)($.B, {
                            gap: 16,
                            children: i7.map((e) => (0, r.jsx)(lI, { className: rl.z6, content: ao.M[e] }, ao.M[e])),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: rl.uW,
                    children: (0, r.jsx)(u.n, {
                        label: "Reset Guild Level DCs",
                        children: re.map((t) =>
                            (0, r.jsx)(
                                v.d,
                                {
                                    label: rn(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, i5._$)(t, e, !1)
                                            : ((0, lO._N)(ao.M.GUILD_POWERUP_NOTIFICATION), (0, i5.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: rl.uW,
                    children: (0, r.jsx)(u.n, {
                        label: "Reset Server Tag Guild Level DCs",
                        children: rt.map((t) =>
                            (0, r.jsx)(
                                v.d,
                                {
                                    label: rn(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, i5._$)(t, e, !1)
                                            : ((0, lO._N)(ao.M.GUILD_POWERUP_NOTIFICATION), (0, i5.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: rl.uW,
                    children: [
                        (0, r.jsx)(D.E, {
                            variant: "eyebrow",
                            className: rl.wx,
                            children: "Reset Powerup Rollback DCs",
                        }),
                        ra.map((e) => (0, r.jsx)(lI, { className: rl.z6, content: ao.M[e] }, ao.M[e])),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: rl.uW,
                    children: [
                        (0, r.jsx)(D.E, {
                            variant: "eyebrow",
                            className: rl.wx,
                            children: "Send Powerups System Message",
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                ri(e);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(h.$, {
                    variant: "primary",
                    text: "Reset GameServer ToS",
                    onClick: () => {
                        (0, sT.Wp)(!1);
                    },
                }),
            ],
        });
}
var ro = a(450510),
    rd = a(84393);
function rc(e) {
    let { hotspotLocation: t } = e,
        [a, n] = (0, H.yK)([ro.HP], () => [ro.HP.hasHotspot(t, !0), ro.HP.getHotspotOverride(t)]);
    return (0, r.jsx)(x.l, {
        label: t,
        errorMessage: a ? "Inactive" : void 0,
        successMessage: a ? "Active" : void 0,
        value: n,
        options: [
            { id: "none", value: void 0, label: "No Override" },
            { id: "active", value: !0, label: "Force Active" },
            { id: "inactive", value: !1, label: "Force Inactive" },
        ],
        onSelectionChange: (e) => (null != e ? (0, ro.Kl)(t, e) : (0, ro.LF)(t)),
        selectionMode: "single",
        fullWidth: !0,
    });
}
function ru() {
    return (0, r.jsx)(d.Ip, {
        className: tF.nd,
        children: (0, r.jsx)(u.n, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: rd.IN,
            children: (0, r.jsx)($.B, {
                gap: 20,
                children: Object.keys(ro._2)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, r.jsx)(rc, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
var rm = a(919523),
    rh = a(855522),
    rx = a(37646),
    rp = a(773669);
function rg() {
    let e = (0, H.bG)([rp.default], () => rp.default.locale),
        [t, a] = o.useState(),
        n = (0, rm.runtimeHashMessageKey)(t ?? ""),
        l = o.useMemo(() => nl.t[n], [n]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(aV.Ay, {
                children: [
                    (0, r.jsx)(aV.Ay.Icon, { icon: rx.U, tooltip: "Locale" }),
                    (0, r.jsx)(aV.Ay.Title, { children: "Locale" }),
                ],
            }),
            (0, r.jsxs)(nG, {
                children: [
                    (0, r.jsx)(nF, { name: "Active System", children: "@discord/intl" }),
                    (0, r.jsx)(nF, { name: "App", children: e }),
                    (0, r.jsx)(nF, { name: "System", children: nl.systemLocale }),
                    (0, r.jsx)(nF, { name: "@discord/intl", children: nl.intl.currentLocale }),
                    (0, r.jsx)(nF, { name: "common i18n", children: rh.A.getLocale() }),
                    (0, r.jsx)(nF, { name: "Moment", children: nv().locale() }),
                ],
            }),
            (0, r.jsxs)(aV.Ay, {
                children: [
                    (0, r.jsx)(aV.Ay.Icon, { icon: rx.U, tooltip: "Messages" }),
                    (0, r.jsx)(aV.Ay.Title, { children: "New System Messages" }),
                ],
            }),
            (0, r.jsx)(nG, {
                children: (0, r.jsx)(nF, { name: "Unique Rendered Main Messages", children: Object.keys(nl.t).length }),
            }),
            (0, r.jsx)("div", {
                style: { margin: 16 },
                children: (0, r.jsx)(p.k, {
                    onChange: function (e) {
                        a(e);
                    },
                    name: "Message name",
                    placeholder: "Find a message",
                }),
            }),
            (0, r.jsxs)(nG, {
                children: [
                    (0, r.jsx)(nF, { name: "Hashed key", children: n }),
                    (0, r.jsx)(nF, { name: "Exists?", children: null != l ? "yes" : "no" }),
                ],
            }),
            (0, r.jsx)(aJ, { data: l?.(e) }),
        ],
    });
}
var rv = a(434404);
function rj() {
    let { node: e } = (0, et.Ay)(rv.F, "");
    return (0, r.jsx)(d.Ip, {
        className: tF.nd,
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-8)" },
            children: (0, r.jsx)(ee.A, { node: e }, e.key),
        }),
    });
}
var rb = a(663066),
    rf = a(80556),
    ry = a(907135),
    rE = a(665095),
    rC = a(87404);
function r_() {
    return (0, r.jsx)(d.Ip, {
        className: tF.nd,
        children: (0, r.jsxs)("div", {
            className: sS.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: sS.uW,
                    children: [
                        (0, r.jsx)(z.D, { variant: "heading-md/semibold", children: "Verification Layer" }),
                        (0, r.jsx)("div", {
                            className: sS.bd,
                            children: (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open Verification Layer",
                                onClick: () => {
                                    (0, rb.B8)(() => (0, r.jsx)(rE.A, {}), { layerKey: rC._s, Layer: rf.Ay });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: sS.uW,
                    children: [
                        (0, r.jsx)(z.D, { variant: "heading-md/semibold", children: "Safety Flow" }),
                        (0, r.jsx)("div", {
                            className: sS.bd,
                            children: (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open Safety Flow",
                                onClick: () => {
                                    (0, rb.B8)(
                                        (e) => {
                                            let { closeLayer: t } = e;
                                            return (0, r.jsx)(ry.A, { onClose: t });
                                        },
                                        { layerKey: rC._s, Layer: rf.Ay },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: sS.uW,
                    children: [
                        (0, r.jsx)(z.D, { variant: "heading-md/semibold", children: "Layer Controls" }),
                        (0, r.jsx)("div", {
                            className: sS.bd,
                            children: (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Close All Layers",
                                onClick: () => {
                                    rb.xr.setState({ fullScreenLayers: [] });
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var rS = a(687813),
    rN = a(604121);
let rA = {
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_Messages_Opt.lottie":
        () => a.e("36508").then(a.t.bind(a, 655671, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_Notifications_Opt.lottie":
        () => a.e("5252").then(a.t.bind(a, 323823, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_Servers_CombinedEE.lottie":
        () => a.e("65154").then(a.t.bind(a, 670649, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_Servers_Opt.lottie":
        () => a.e("77248").then(a.t.bind(a, 342787, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Navigation_You_Opt.lottie": () =>
        a.e("93401").then(a.t.bind(a, 959328, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/Lottie_Requests_Messages.lottie": () =>
        a.e("48614").then(a.t.bind(a, 713893, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Activities.lottie": () =>
        a.e("32431").then(a.t.bind(a, 857778, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/AppsIcon.lottie": () =>
        a.e("37415").then(a.t.bind(a, 996858, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Camera.lottie": () =>
        a.e("75913").then(a.t.bind(a, 999344, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Deafen.lottie": () =>
        a.e("83690").then(a.t.bind(a, 433356, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/EndCall.lottie": () =>
        a.e("27847").then(a.t.bind(a, 72922, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/GIF.lottie": () =>
        a.e("32886").then(a.t.bind(a, 456309, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Gift.lottie": () =>
        a.e("43734").then(a.t.bind(a, 733813, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Microphone.lottie": () =>
        a.e("26620").then(a.t.bind(a, 890007, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/OrbsEarnSpend.lottie": () =>
        a.e("92568").then(a.t.bind(a, 149707, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/OrbsEarnSpendLightTheme.lottie": () =>
        a.e("82715").then(a.t.bind(a, 147734, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Screenshare.lottie": () =>
        a.e("29721").then(a.t.bind(a, 218048, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Settings.lottie": () =>
        a.e("94483").then(a.t.bind(a, 155806, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Soundboard.lottie": () =>
        a.e("50115").then(a.t.bind(a, 535662, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Sticker.lottie": () =>
        a.e("97473").then(a.t.bind(a, 956248, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/web/Waveform.lottie": () =>
        a.e("65373").then(a.t.bind(a, 914028, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge01.lottie":
        () => a.e("75199").then(a.t.bind(a, 904066, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge02.lottie":
        () => a.e("33900").then(a.t.bind(a, 185319, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge03.lottie":
        () => a.e("65405").then(a.t.bind(a, 743372, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge06.lottie":
        () => a.e("27648").then(a.t.bind(a, 195011, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge09.lottie":
        () => a.e("29095").then(a.t.bind(a, 619578, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge12.lottie":
        () => a.e("16512").then(a.t.bind(a, 676574, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge15.lottie":
        () => a.e("65404").then(a.t.bind(a, 384407, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge18.lottie":
        () => a.e("11817").then(a.t.bind(a, 110320, 17)),
    "discord_common/js/packages/tokens/tools/platforms/lottie/originals/native/gems/Lottie_NitroGems_Badge24.lottie":
        () => a.e("84996").then(a.t.bind(a, 248476, 17)),
    "discord_common/js/shared/animations/app/gifts/seasonal/box/box-action.lottiejson": () =>
        a.e("19534").then(a.t.bind(a, 87037, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/box/box-idle.lottiejson": () =>
        a.e("12250").then(a.t.bind(a, 553998, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/box/box-loop.lottiejson": () =>
        a.e("58526").then(a.t.bind(a, 138157, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/cake/cake-action.lottiejson": () =>
        a.e("64376").then(a.t.bind(a, 37259, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/cake/cake-idle.lottiejson": () =>
        a.e("30800").then(a.t.bind(a, 683891, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/cake/cake-loop.lottiejson": () =>
        a.e("52436").then(a.t.bind(a, 45887, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/chest/chest-action.lottiejson": () =>
        a.e("3086").then(a.t.bind(a, 118301, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/chest/chest-idle.lottiejson": () =>
        a.e("37690").then(a.t.bind(a, 733057, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/chest/chest-loop.lottiejson": () =>
        a.e("82078").then(a.t.bind(a, 553101, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/coffee/coffee-action.lottiejson": () =>
        a.e("51992").then(a.t.bind(a, 558251, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/coffee/coffee-idle.lottiejson": () =>
        a.e("64400").then(a.t.bind(a, 94995, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/coffee/coffee-loop.lottiejson": () =>
        a.e("39476").then(a.t.bind(a, 367327, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/gift_icon/seasonal-gifting-wumpus-action.lottiejson":
        () => a.e("27568").then(a.t.bind(a, 801952, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/gift_icon/seasonal-gifting-wumpus-loop.lottiejson":
        () => a.e("25676").then(a.t.bind(a, 322151, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/seasonal_wumpus/seasonal-wumpus-action.lottiejson":
        () => a.e("10803").then(a.t.bind(a, 27870, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/seasonal_wumpus/seasonal-wumpus-idle.lottiejson":
        () => a.e("10191").then(a.t.bind(a, 837074, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/seasonal_wumpus/seasonal-wumpus-loop.lottiejson":
        () => a.e("61223").then(a.t.bind(a, 547450, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/nitroween/halloween-action.lottiejson": () =>
        a.e("69842").then(a.t.bind(a, 809865, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/nitroween/halloween-idle.lottiejson": () =>
        a.e("99166").then(a.t.bind(a, 334829, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/box/box-action.lottiejson": () =>
        a.e("98287").then(a.t.bind(a, 380082, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/box/box-idle.lottiejson": () =>
        a.e("12427").then(a.t.bind(a, 676614, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/box/box-loop.lottiejson": () =>
        a.e("31939").then(a.t.bind(a, 900110, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/cake/cake-action.lottiejson": () =>
        a.e("71305").then(a.t.bind(a, 629456, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/cake/cake-idle.lottiejson": () =>
        a.e("70625").then(a.t.bind(a, 254424, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/cake/cake-loop.lottiejson": () =>
        a.e("33449").then(a.t.bind(a, 690576, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/chest/chest-action.lottiejson": () =>
        a.e("46791").then(a.t.bind(a, 690842, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/chest/chest-idle.lottiejson": () =>
        a.e("28115").then(a.t.bind(a, 755678, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/chest/chest-loop.lottiejson": () =>
        a.e("31272").then(a.t.bind(a, 778422, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/coffee/coffee-action.lottiejson": () =>
        a.e("58009").then(a.t.bind(a, 433504, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/coffee/coffee-idle.lottiejson": () =>
        a.e("2897").then(a.t.bind(a, 976584, 19)),
    "discord_common/js/shared/animations/app/gifts/standard/coffee/coffee-loop.lottiejson": () =>
        a.e("52793").then(a.t.bind(a, 858464, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Anime_v01_Lottie.lottiejson": () =>
        a.e("74149").then(a.t.bind(a, 965892, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Arcade_v01.lottiejson": () =>
        a.e("17087").then(a.t.bind(a, 44194, 19)),
    "discord_app/images/burst_reactions/BurstReaction_BlackHoles_v01.lottiejson": () =>
        a.e("4289").then(a.t.bind(a, 141208, 19)),
    "discord_app/images/burst_reactions/BurstReaction_BlastOff_v04.lottiejson": () =>
        a.e("77339").then(a.t.bind(a, 420054, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Crystal_v04.lottiejson": () =>
        a.e("66414").then(a.t.bind(a, 33565, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Fireworks_v03.lottiejson": () =>
        a.e("31165").then(a.t.bind(a, 414956, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Fusion_v03.lottiejson": () =>
        a.e("58541").then(a.t.bind(a, 221340, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Pop_v04.lottiejson": () =>
        a.e("10169").then(a.t.bind(a, 710208, 19)),
    "discord_app/images/burst_reactions/BurstReaction_PowerUp_v05.lottiejson": () =>
        a.e("76601").then(a.t.bind(a, 333984, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Puzzle_v01_Lottie.lottiejson": () =>
        a.e("84163").then(a.t.bind(a, 211342, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Spotlight_v01_Lottie.lottiejson": () =>
        a.e("52029").then(a.t.bind(a, 714316, 19)),
    "discord_app/images/burst_reactions/BurstReaction_StarBlast_v03.lottiejson": () =>
        a.e("23997").then(a.t.bind(a, 851404, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Tube_v01_Lottie.lottiejson": () =>
        a.e("67133").then(a.t.bind(a, 821644, 19)),
    "discord_app/images/burst_reactions/BurstReaction_UFO_v01_Lottie.lottiejson": () =>
        a.e("84765").then(a.t.bind(a, 51244, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Whirlwind_v01_Lottie.lottiejson": () =>
        a.e("35583").then(a.t.bind(a, 668994, 19)),
    "discord_app/images/burst_reactions/mobile/fullscreen/SuperReactions_Mobile_Send_Spotlight_v1.lottiejson": () =>
        a.e("47862").then(a.t.bind(a, 911573, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Anime_v1.lottiejson": () =>
        a.e("46711").then(a.t.bind(a, 23434, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Arcade_v1.lottiejson": () =>
        a.e("51153").then(a.t.bind(a, 743496, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_BlackHoles_v1.lottiejson": () =>
        a.e("32803").then(a.t.bind(a, 252462, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_BlastOff_v1.lottiejson": () =>
        a.e("19842").then(a.t.bind(a, 341529, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Crystal_v1.lottiejson": () =>
        a.e("85529").then(a.t.bind(a, 762464, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Fireworks_v1.lottiejson": () =>
        a.e("97197").then(a.t.bind(a, 47036, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Fusion_v1.lottiejson": () =>
        a.e("92933").then(a.t.bind(a, 279172, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Pop_v1.lottiejson": () =>
        a.e("5560").then(a.t.bind(a, 824888, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_PowerUp_v1.lottiejson": () =>
        a.e("63011").then(a.t.bind(a, 432302, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Puzzle_v1.lottiejson": () =>
        a.e("69845").then(a.t.bind(a, 854420, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Spotlight_v1.lottiejson": () =>
        a.e("88607").then(a.t.bind(a, 997730, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_StarBlast_v2.lottiejson": () =>
        a.e("96874").then(a.t.bind(a, 281073, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Tube_v1.lottiejson": () =>
        a.e("94147").then(a.t.bind(a, 192718, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_UFO_v2.lottiejson": () =>
        a.e("84992").then(a.t.bind(a, 513667, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Whirlwind_v1.lottiejson": () =>
        a.e("49693").then(a.t.bind(a, 754124, 19)),
    "discord_app/modules/guild_member_verification/images/islandMiddleAnimation.lottiejson": () =>
        a.e("44678").then(a.t.bind(a, 144759, 19)),
    "discord_app/modules/premium/web/animations/guild_sidebar_premium_entrypoint_dt.json": () =>
        a.e("15048").then(a.t.bind(a, 366043, 19)),
    "discord_app/modules/premium/web/animations/guild_sidebar_premium_entrypoint_lt.json": () =>
        a.e("12512").then(a.t.bind(a, 789091, 19)),
    "discord_common/js/shared/animations/app/activities/AppsIconWordlePromo.lottiejson": () =>
        a.e("51169").then(a.t.bind(a, 527613, 19)),
    "discord_common/js/shared/animations/app/nearby/nearby.lottiejson": () =>
        a.e("93780").then(a.t.bind(a, 957439, 19)),
    "discord_common/js/shared/animations/app/premium_guild_subscribe/dark.lottiejson": () =>
        a.e("45470").then(a.t.bind(a, 622637, 19)),
    "discord_common/js/shared/animations/app/premium_guild_subscribe/light.lottiejson": () =>
        a.e("23478").then(a.t.bind(a, 262037, 19)),
    "discord_common/js/shared/animations/app/premium_guild_subscription_system_message_easter_egg/index.lottiejson":
        () => a.e("98150").then(a.t.bind(a, 633343, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/hd_streaming.lottiejson": () =>
        a.e("20795").then(a.t.bind(a, 551574, 19)),
    "discord_common/js/shared/animations/app/premium-payment-tier-2/index.lottiejson": () =>
        a.e("69421").then(a.t.bind(a, 548375, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Bubbles_v03.lottiejson": () =>
        a.e("91770").then(a.t.bind(a, 95553, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Portal_v03.lottiejson": () =>
        a.e("96515").then(a.t.bind(a, 178862, 19)),
    "discord_app/images/burst_reactions/BurstReaction_Slime_v02.lottiejson": () =>
        a.e("9302").then(a.t.bind(a, 16341, 19)),
    "discord_app/images/burst_reactions/mobile/fullscreen/SuperReactions_Mobile_Send_Slime_v1.lottiejson": () =>
        a.e("47554").then(a.t.bind(a, 748761, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Bubbles_v2.lottiejson": () =>
        a.e("7739").then(a.t.bind(a, 106870, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Portal_v1.lottiejson": () =>
        a.e("79067").then(a.t.bind(a, 458486, 19)),
    "discord_app/images/burst_reactions/mobile/SuperReactions_Mobile_Slime_v2.lottiejson": () =>
        a.e("24584").then(a.t.bind(a, 388059, 19)),
    "discord_app/modules/app_launcher/native/images/onboarding_glow.lottiejson": () =>
        a.e("7985").then(a.t.bind(a, 9640, 19)),
    "discord_app/modules/global_discovery_apps/discovering-dabatouille-animation.lottiejson": () =>
        a.e("95947").then(a.t.bind(a, 604902, 19)),
    "discord_app/modules/guild_boosting/animations/animated_guild_icon.lottiejson": () =>
        a.e("24645").then(a.t.bind(a, 624420, 19)),
    "discord_app/modules/guild_member_verification/images/wavingHandLottieAnimation.lottiejson": () =>
        a.e("15423").then(a.t.bind(a, 155147, 19)),
    "discord_app/modules/guild_onboarding/native/animations/landing.lottiejson": () =>
        a.e("24093").then(a.t.bind(a, 280780, 19)),
    "discord_app/modules/guild_onboarding/web/animations/balloon-dog.lottiejson": () =>
        a.e("25961").then(a.t.bind(a, 739408, 19)),
    "discord_app/modules/guild_onboarding/web/animations/bubble-island-02.lottiejson": () =>
        a.e("87356").then(a.t.bind(a, 194199, 19)),
    "discord_app/modules/guild_onboarding/web/animations/grilling-island-02.lottiejson": () =>
        a.e("56026").then(a.t.bind(a, 113473, 19)),
    "discord_app/modules/guild_onboarding/web/animations/main-island-02.lottiejson": () =>
        a.e("16301").then(a.t.bind(a, 694268, 19)),
    "discord_app/modules/guild_onboarding/web/animations/waffle-island-02.lottiejson": () =>
        a.e("22191").then(a.t.bind(a, 896018, 19)),
    "discord_app/modules/poggermode/images/enable_animation.lottiejson": () =>
        a.e("4660").then(a.t.bind(a, 662336, 19)),
    "discord_app/modules/premium/powerups/web/images/server_boost_highlight.json": () =>
        a.e("67807").then(a.t.bind(a, 217762, 19)),
    "discord_app/modules/quests/images/confetti.lottiejson": () => a.e("40119").then(a.t.bind(a, 718698, 19)),
    "discord_app/modules/quests/web/images/quest_bar_background.json": () => a.e("37316").then(a.t.bind(a, 599279, 19)),
    "discord_app/modules/quests/web/images/quest_bar_sparkle.json": () => a.e("97536").then(a.t.bind(a, 478979, 19)),
    "discord_app/modules/self_mod/inappropriate_conversation/images/vibing_wumpus.lottiejson": () =>
        a.e("14823").then(a.t.bind(a, 718074, 19)),
    "discord_common/js/shared/animations/app/everyone_popout/dark.lottiejson": () =>
        a.e("35705").then(a.t.bind(a, 661022, 19)),
    "discord_common/js/shared/animations/app/everyone_popout/light.lottiejson": () =>
        a.e("92705").then(a.t.bind(a, 111992, 19)),
    "discord_common/js/shared/animations/app/gifts/seasonal/marketing/coachmark/seasonal-gifting-coachmark.lottiejson":
        () => a.e("61250").then(a.t.bind(a, 762361, 19)),
    "discord_common/js/shared/animations/app/playstation/playstation_connecting.lottiejson": () =>
        a.e("35066").then(a.t.bind(a, 844512, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/emoji.lottiejson": () =>
        a.e("17124").then(a.t.bind(a, 616175, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/interstitial_wheel_dark.lottiejson": () =>
        a.e("94675").then(a.t.bind(a, 735678, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/interstitial_wheel_light.lottiejson": () =>
        a.e("78465").then(a.t.bind(a, 247704, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/profile_customization.lottiejson": () =>
        a.e("62807").then(a.t.bind(a, 202282, 19)),
    "discord_common/js/shared/animations/app/premium_marketing_surface/unlock.lottiejson": () =>
        a.e("31838").then(a.t.bind(a, 650125, 19)),
    "discord_common/js/shared/animations/app/premium_marketing/index.lottiejson": () =>
        a.e("6954").then(a.t.bind(a, 964529, 19)),
    "discord_common/js/shared/animations/app/premium_payment_guild/index.lottiejson": () =>
        a.e("45870").then(a.t.bind(a, 738503, 19)),
    "discord_common/js/shared/animations/app/premium-activated-tier-1/premium-activated-tier-1.lottiejson": () =>
        a.e("5642").then(a.t.bind(a, 242993, 19)),
    "discord_common/js/shared/animations/app/premium-payment-tier-0/index.lottiejson": () =>
        a.e("78503").then(a.t.bind(a, 635489, 19)),
    "discord_common/js/shared/animations/app/premium-payment-tier-1/index.lottiejson": () =>
        a.e("19898").then(a.t.bind(a, 262546, 19)),
    "discord_common/js/shared/animations/app/xbox/voice_connect.lottiejson": () =>
        a.e("40348").then(a.t.bind(a, 971799, 19)),
    "discord_common/js/shared/animations/app/xbox/xbox_connecting.lottiejson": () =>
        a.e("76121").then(a.t.bind(a, 709376, 19)),
};
function rk(e) {
    let { default: t } = e;
    return fetch(t)
        .then((e) => e.arrayBuffer())
        .then(
            (e) =>
                new Promise((t, a) => {
                    let n = new Uint8Array(e);
                    rS.$1(n, (e, n) => {
                        null != e && a(e);
                        let l = Object.keys(n).reduce((e, t) => ({ ...e, [t]: JSON.parse(rS.he(n[t])) }), {}),
                            s = l["manifest.json"];
                        t(l[`animations/${s.animations[0].id}.json`]);
                    });
                }),
        );
}
function rI() {
    let [e, t] = o.useState(void 0),
        [a, n] = o.useState(400),
        [l, s] = o.useState(400);
    return (0, r.jsx)("div", {
        style: { margin: 24 },
        children: (0, r.jsxs)($.B, {
            gap: 24,
            children: [
                (0, r.jsx)(ae.Z, {
                    options: Object.keys(rA).map((e) => ({ id: e, label: e, value: e })),
                    value: e,
                    onSelectionChange: t,
                    selectionMode: "single",
                }),
                (0, r.jsxs)($.B, {
                    gap: 8,
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(p.k, { value: a.toString(), onChange: (e) => n(Number(e)), label: "Width" }),
                        (0, r.jsx)(p.k, { value: l.toString(), onChange: (e) => s(Number(e)), label: "Height" }),
                    ],
                }),
                (0, r.jsx)(h.$, {
                    size: "sm",
                    disabled: null == e,
                    onClick: async () => {
                        if (null == e) return;
                        let t = rA[e],
                            a = new Blob(
                                [
                                    JSON.stringify(
                                        e.endsWith(".lottie")
                                            ? await t().then(rk).then(eY().cloneDeep)
                                            : await t().then((e) => eY().cloneDeep(e.default)),
                                    ),
                                ],
                                { type: "application/json" },
                            ),
                            n = URL.createObjectURL(a),
                            l = document.createElement("a");
                        (l.href = n),
                            (l.download = `${e.split("/").pop()}.json`),
                            document.body.appendChild(l),
                            l.click(),
                            document.body.removeChild(l),
                            URL.revokeObjectURL(n);
                    },
                    text: "Download",
                }),
                null != e &&
                    (0, r.jsx)("div", {
                        style: { width: a, height: l },
                        children: (0, r.jsx)(
                            rN.a,
                            {
                                importData: () => {
                                    let t = rA[e];
                                    return e.endsWith(".lottie")
                                        ? t().then(rk).then(eY().cloneDeep)
                                        : t().then((e) => eY().cloneDeep(e.default));
                                },
                            },
                            e,
                        ),
                    }),
            ],
        }),
    });
}
var rD = a(442433),
    rT = a(395671);
let rR = {
        ClipsContextMenu: async () => {
            let { default: e } = await a.e("40638").then(a.bind(a, 785114));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        ActivityPopoutHeaderOverflowMenu: async () => {
            let { default: e } = await a.e("32986").then(a.bind(a, 728033)),
                t = new rT.kJ({
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
            return () => (0, r.jsx)(e, { application: t, channelId: "987654321", onClose: rD.Z_ });
        },
        GuildChannelListContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("9004"), a.e("19690"), a.e("45322"), a.e("10758")]).then(
                    a.bind(a, 455557),
                ),
                t = Object.values(ne.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
        },
        GuildContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e("98873"),
                    a.e("92267"),
                    a.e("69117"),
                    a.e("45768"),
                    a.e("93498"),
                    a.e("34796"),
                    a.e("80165"),
                    a.e("20860"),
                    a.e("93814"),
                    a.e("32485"),
                    a.e("96217"),
                    a.e("71425"),
                    a.e("99013"),
                    a.e("83475"),
                    a.e("17393"),
                    a.e("75154"),
                    a.e("12002"),
                    a.e("16538"),
                    a.e("49681"),
                    a.e("96382"),
                    a.e("22687"),
                    a.e("63202"),
                    a.e("82596"),
                    a.e("9004"),
                    a.e("49145"),
                    a.e("30997"),
                    a.e("28136"),
                    a.e("16084"),
                    a.e("43116"),
                    a.e("73669"),
                    a.e("22547"),
                    a.e("61058"),
                    a.e("50342"),
                    a.e("33097"),
                    a.e("10262"),
                    a.e("46313"),
                    a.e("43233"),
                    a.e("91643"),
                    a.e("63726"),
                    a.e("71329"),
                    a.e("56373"),
                    a.e("83827"),
                    a.e("42749"),
                    a.e("56026"),
                    a.e("16301"),
                    a.e("22191"),
                    a.e("25961"),
                    a.e("30501"),
                    a.e("8364"),
                    a.e("66147"),
                    a.e("74337"),
                    a.e("52823"),
                    a.e("56967"),
                    a.e("47011"),
                    a.e("31203"),
                    a.e("66913"),
                    a.e("81202"),
                    a.e("71719"),
                    a.e("19690"),
                    a.e("93767"),
                    a.e("13848"),
                    a.e("39214"),
                    a.e("99108"),
                    a.e("14878"),
                    a.e("88307"),
                    a.e("26508"),
                    a.e("61347"),
                    a.e("73091"),
                    a.e("69178"),
                    a.e("86692"),
                    a.e("52695"),
                    a.e("16373"),
                    a.e("24484"),
                    a.e("44943"),
                    a.e("32347"),
                    a.e("8458"),
                    a.e("11810"),
                    a.e("48111"),
                    a.e("90152"),
                    a.e("87973"),
                    a.e("57197"),
                    a.e("14863"),
                    a.e("84951"),
                    a.e("71167"),
                    a.e("12390"),
                    a.e("13446"),
                    a.e("61309"),
                    a.e("94529"),
                    a.e("50276"),
                    a.e("21300"),
                    a.e("66016"),
                    a.e("83518"),
                    a.e("17699"),
                    a.e("57032"),
                    a.e("72238"),
                    a.e("45322"),
                    a.e("94832"),
                    a.e("37038"),
                    a.e("26386"),
                    a.e("65338"),
                    a.e("52191"),
                    a.e("14656"),
                    a.e("39855"),
                    a.e("98356"),
                    a.e("32607"),
                    a.e("65011"),
                ]).then(a.bind(a, 860417)),
                t = Object.values(ne.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
        },
        GuildFolderContextMenu: async () => {
            let { default: e } = await a.e("32857").then(a.bind(a, 842112));
            return (t) => (0, r.jsx)(e, { ...t, folderId: 1, folderColor: void 0, folderName: void 0, unread: !1 });
        },
        DeveloperContextMenu: async () => {
            let { default: e } = await a.e("15687").then(a.bind(a, 646938));
            return (t) => (0, r.jsx)(e, { ...t, id: "123456789", label: "Copy Test ID" });
        },
        UserSettingsMenu: async () => {
            let { default: e } = await Promise.all([
                a.e("80182"),
                a.e("26132"),
                a.e("81202"),
                a.e("43456"),
                a.e("44491"),
            ]).then(a.bind(a, 907206));
            return (t) => (0, r.jsx)(e, { ...t, onClose: rD.Z_ });
        },
        ExpressionPickerContextMenu: async () => {
            let { default: e } = await a.e("46132").then(a.bind(a, 233503));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        ForumTagContextMenu: async () => {
            let { default: e } = await a.e("32612").then(a.bind(a, 960015)),
                t = { id: "123456789", name: "Test Forum Tag" };
            return () => (0, r.jsx)(e, { tag: t });
        },
        GuildRoleConnectionsModalContextMenu: async () => {
            let { default: e } = await a.e("68001").then(a.bind(a, 699896));
            return (t) =>
                (0, r.jsx)(e, {
                    ...t,
                    roleId: "123456789",
                    onLeaveRole: () => {
                        console.log("Leave role clicked"), (0, rD.Z_)();
                    },
                });
        },
        StaffOnlyEntryDebugMenu: async () => {
            let { default: e } = await Promise.all([a.e("86456"), a.e("89346")]).then(a.bind(a, 949881)),
                { ContentInventoryEntryType: t } = await Promise.resolve().then(a.bind(a, 681154)),
                { ContentInventoryAuthorType: n } = await Promise.resolve().then(a.bind(a, 6161)),
                l = en.default.getCurrentUser(),
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
                    a.e("17393"),
                    a.e("80165"),
                    a.e("11810"),
                    a.e("14656"),
                ]).then(a.bind(a, 892921)),
                t = Object.values(ne.A.getGuilds())[0];
            return null == t
                ? () => null
                : (a) =>
                      (0, r.jsx)(e, {
                          ...a,
                          addFormField: (e) => {
                              console.log("Add form field:", e), (0, rD.Z_)();
                          },
                          guild: t,
                          allowTerms: !0,
                      });
        },
        ChannelListThreadContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e("26132"),
                    a.e("38730"),
                    a.e("34971"),
                    a.e("43266"),
                    a.e("12255"),
                    a.e("63340"),
                    a.e("85802"),
                    a.e("65200"),
                    a.e("3869"),
                    a.e("51212"),
                    a.e("84615"),
                ]).then(a.bind(a, 612826)),
                t = ne.A.getGuilds(),
                n = null;
            for (let e of Object.values(t)) {
                for (let t of Object.values(aj.A.getMutableGuildChannelsForGuild(e.id))) {
                    let e = aj.A.getAllThreadsForParent(t.id);
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
                t = Object.values(ne.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rD.Z_ });
        },
        MembersTableJoinTypeContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("12002"), a.e("71719"), a.e("14878"), a.e("66016")]).then(
                    a.bind(a, 316173),
                ),
                t = Object.values(ne.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rD.Z_ });
        },
    },
    rO = {
        GuildShopSortOptions: o.lazy(async () => {
            let { default: e } = await Promise.all([a.e("83518"), a.e("55197"), a.e("50974")]).then(a.bind(a, 324269)),
                { default: t } = await a.e("55197").then(a.bind(a, 558060));
            return { default: () => (0, r.jsx)(t, { defaultSortOption: void 0, children: (0, r.jsx)(e, {}) }) };
        }),
    };
function rw() {
    let e = o.useMemo(
            () =>
                Object.keys(rR)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        t = o.useMemo(
            () =>
                Object.keys(rO)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        i = o.useCallback(
            (e) => {
                null != a && (0, rD.L3)(e, rR[a]);
            },
            [a],
        ),
        c = null != l ? rO[l] : null;
    return (0, r.jsx)(d.Ip, {
        className: tF.nd,
        children: (0, r.jsxs)($.B, {
            className: sS.l$,
            gap: 16,
            children: [
                (0, r.jsxs)($.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(D.E, { variant: "eyebrow", children: "Context Menus" }),
                        (0, r.jsx)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a menu and click Open to trigger it as a context menu at the button position.",
                        }),
                    ],
                }),
                (0, r.jsxs)($.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(ae.Z, {
                            label: "Open a Context Menu",
                            placeholder: "Select a menu",
                            options: e,
                            value: a,
                            onSelectionChange: n,
                            selectionMode: "single",
                        }),
                        (0, r.jsx)(h.$, { variant: "primary", text: "Open", disabled: null == a, onClick: i }),
                    ],
                }),
                (0, r.jsxs)($.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(D.E, { variant: "eyebrow", children: "Popout Menus" }),
                        (0, r.jsx)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a popout menu to render it. Click the rendered button to open the popout.",
                        }),
                    ],
                }),
                (0, r.jsx)($.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: (0, r.jsx)(ae.Z, {
                        label: "Render a Popout Menu",
                        placeholder: "Select a popout",
                        options: t,
                        value: l,
                        onSelectionChange: s,
                        selectionMode: "single",
                    }),
                }),
                null != c &&
                    (0, r.jsx)(o.Suspense, {
                        fallback: (0, r.jsx)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "Loading...",
                        }),
                        children: (0, r.jsx)(c, {}),
                    }),
            ],
        }),
    });
}
var rM = a(253506),
    rL = a(665260),
    rP = a(97808),
    rU = a(778712),
    rG = a(308528),
    rF = a(571694),
    rB = a(704844),
    rV = a(567761),
    r$ = a(716371),
    rW = a(323081);
function rz() {
    let e = (0, H.yK)([rV.default], () => rV.default.getSortedChannels()[1]),
        [t, a] = o.useState(e.length > 0 ? e[0].channelId : void 0),
        { selectedChannel: n, options: l } = (0, H.cf)([aj.A, en.default, ab.A], () => ({
            selectedChannel: aj.A.getChannel(t),
            options: e.map((e) => {
                let t = aj.A.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, av.m1)(t, en.default, ab.A) : e.channelId,
                    leading:
                        null != t
                            ? (0, r.jsx)(rP.eu, { src: (0, rF.Y)(t), "aria-hidden": !0, size: rU._3.SIZE_16 })
                            : void 0,
                };
            }),
        })),
        s = o.useCallback(() => {
            if (null == n || !n.isPrivate()) return;
            let e = (0, rL.PQ)(n.recipientFlags ?? 0, rM.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            rB.A.updatePrivateChannelRecipientFlags(n.id, e);
        }, [n]),
        i = !!n?.isPrivate() && (0, rL.Lt)(n.recipientFlags ?? 0, rM.o.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, r.jsxs)("div", {
        className: rW.gs,
        children: [
            (0, r.jsx)(ae.Z, {
                label: "In-Game NUX Message for DMs",
                selectionMode: "single",
                options: l,
                placeholder: "Select DM",
                value: t,
                onSelectionChange: a,
            }),
            (0, r.jsx)(h.$, {
                variant: "primary",
                size: "sm",
                text: i ? "Clear NUX Flag" : "Set NUX Flag",
                onClick: s,
                disabled: null == t,
            }),
        ],
    });
}
function rH() {
    let e = o.useCallback(() => {
        rG.A.openPrivateChannel({ recipientIds: [r$.K] });
    }, []);
    return (0, r.jsx)(h.$, { variant: "primary", size: "sm", text: "Open System DM", onClick: e });
}
function rK() {
    let e = (0, H.bG)([aB.Ay], () => aB.Ay.allByCategory(aB.xW.MESSAGING), [], H.My).map((e) => {
        let [t, a, { label: n }] = e;
        return (0, r.jsx)(v.d, { label: n, description: t, checked: a, onChange: (e) => sM(t, e) }, t);
    });
    return (0, r.jsxs)("div", {
        className: F()(tF.nd, rW.nd),
        children: [
            e,
            (0, r.jsx)("div", { className: rW.yF }),
            (0, r.jsx)(rz, {}),
            (0, r.jsx)("div", { className: rW.yF }),
            (0, r.jsx)(rH, {}),
        ],
    });
}
var rY = a(459838),
    rq = a(772707),
    rJ = a(150934),
    rQ = a(598653),
    rX = a(166403),
    rZ = a(625494),
    r0 = a(204925);
let r1 = {
    EmailEnterModal: async () => {
        let { default: e } = await a.e("29232").then(a.bind(a, 180275));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: nl.intl.string(nl.t.ZLRYGU),
                confirmButtonText: nl.intl.string(nl.t.PDTjLN),
                confirmButtonVariant: "primary",
            });
    },
    EmailPincodeModal: async () => {
        let { default: e } = await a.e("19840").then(a.bind(a, 79779));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: nl.intl.string(nl.t.H3Q7U8),
                onFormSubmit: () => {},
                onResend: () => {},
                onSuccess: () => {},
                confirmButtonText: nl.intl.string(nl.t["13ofGu"]),
                impression: { impressionName: s6.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
            });
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await Promise.all([a.e("58686"), a.e("34260"), a.e("18467")]).then(a.bind(a, 297102));
        return (t) => (0, r.jsx)(e, { ...t, entryPoint: nh.q1.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL });
    },
    ExistingUserAgeGatePrompt: async () => {
        let { default: e } = await Promise.all([a.e("93814"), a.e("82758"), a.e("80022"), a.e("10136")]).then(
            a.bind(a, 776971),
        );
        return (t) => (0, r.jsx)(e, { ...t, source: r0.w_.NSFW_SERVER });
    },
    ExistingUserAgeGateUnderage: async () => {
        let { default: e } = await a.e("80959").then(a.bind(a, 784578));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NewUserAgeGate: async () => {
        let { default: e } = await Promise.all([
            a.e("93814"),
            a.e("82758"),
            a.e("19623"),
            a.e("80022"),
            a.e("1143"),
        ]).then(a.bind(a, 284778));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NUFModal: async () => {
        let { default: e } = await Promise.all([
            a.e("92060"),
            a.e("97742"),
            a.e("93814"),
            a.e("19580"),
            a.e("75423"),
            a.e("56856"),
            a.e("82758"),
            a.e("99574"),
            a.e("80022"),
            a.e("50475"),
            a.e("93265"),
            a.e("58118"),
        ]).then(a.bind(a, 111185));
        return (t) => (0, r.jsx)(e, { ...t, onSlideChange: () => {} });
    },
    ClaimAccountModal: async () => {
        let { default: e } = await Promise.all([a.e("44293"), a.e("19623"), a.e("21007")]).then(a.bind(a, 888363));
        return (t) => (0, r.jsx)(e, { claimRequired: !0, ...t });
    },
    AutomatedUnderageAppealModal: async () => {
        let { default: e } = await Promise.all([a.e("51194"), a.e("9018")]).then(a.bind(a, 244321));
        return (t) => (0, r.jsx)(e, { ...t, classificationId: "123" });
    },
    AutomodRaidResolveModal: async () => {
        let { default: e } = await Promise.all([a.e("30758"), a.e("73669"), a.e("7133")]).then(a.bind(a, 580812));
        return (t) => (0, r.jsx)(e, { ...t, guildId: "123", messageId: null });
    },
    AutomodUserProfileQuarantineAlert: async () => {
        let { default: e } = await a.e("52343").then(a.bind(a, 725034));
        return (t) => (0, r.jsx)(e, { ...t, guildId: "123" });
    },
    PhoneVerificationModal: async () => {
        let { default: e } = await Promise.resolve().then(a.bind(a, 914724));
        return (t) => (0, r.jsx)(e, { error: null, working: !1, validPhone: !1, ...t });
    },
    VoiceSettingsModal: async () => {
        let { default: e } = await a.e("96531").then(a.bind(a, 880510));
        return (t) => (0, r.jsx)(e, { ...t, mediaEngineContext: rY.x.DEFAULT, subtitle: "Devtools subtitle" });
    },
    DynamicGraphicDemo: async () => {
        let { DynamicGraphicComponent: e } = await Promise.resolve().then(a.bind(a, 116833));
        return (t) =>
            (0, r.jsx)(rq.k, {
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
        let { default: e } = await Promise.all([a.e("59369"), a.e("82318")]).then(a.bind(a, 387101)),
            { OverlayToggledClientSettingType: t } = await Promise.resolve().then(a.bind(a, 810412));
        return (a) => (0, r.jsx)(e, { ...a, clientSettingType: t.LEGACY_GAME, gameId: "123456789" });
    },
    PremiumSubscriptionPauseModal: async () => {
        let { PremiumSubscriptionPauseModalSelect: e } = await Promise.all([a.e("22634"), a.e("80347")]).then(
                a.bind(a, 318998),
            ),
            { CancellationContext: t } = await Promise.resolve().then(a.bind(a, 916974)),
            { PremiumTypes: n } = await Promise.resolve().then(a.bind(a, 788868)),
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
        return (s.displayName = "PremiumSubscriptionPauseModalWrapper"), (e) => (0, r.jsx)(s, { ...e });
    },
    NewMemberActionModal: async () => {
        let { default: e } = await Promise.all([
                a.e("95959"),
                a.e("87973"),
                a.e("52191"),
                a.e("13949"),
                a.e("54569"),
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
        let { default: e } = await Promise.all([a.e("89573"), a.e("38035")]).then(a.bind(a, 14860)),
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
                (t.default.getDevicesForPlatform = (e) => (e === er.fg2.PLAYSTATION ? s : n.call(t.default, e))),
                    (t.default.getFetchingDevices = (e) => e !== er.fg2.PLAYSTATION && i.call(t.default, e)),
                    (t.default.getLastSelectedDeviceByPlatform = (e) =>
                        e === er.fg2.PLAYSTATION ? "device-1" : o.call(t.default, e)),
                    (t.default.getAwaitingRemoteSessionInfo = () => null);
                let c = a.onClose;
                return (
                    (a.onClose = async () => {
                        (t.default.getDevicesForPlatform = n),
                            (t.default.getFetchingDevices = i),
                            (t.default.getLastSelectedDeviceByPlatform = o),
                            (t.default.getAwaitingRemoteSessionInfo = d),
                            await c();
                    }),
                    (0, r.jsx)(e, { ...a, channel: l, platform: er.fg2.PLAYSTATION })
                );
            };
        return (i.displayName = "PlayStationModalWrapper"), i;
    },
    GameDetectionReportModal: async () => {
        let { default: e } = await Promise.all([a.e("57656"), a.e("27495")]).then(a.bind(a, 651930));
        return (t) => (0, r.jsx)(e, { ...t, detectedActivity: { application_id: "123456789", name: "Test Game" } });
    },
    AppealIngestionModal: async () => {
        let { default: e } = await Promise.all([a.e("7648"), a.e("92030"), a.e("51471")]).then(a.bind(a, 550560));
        return (t) => (0, r.jsx)(e, { ...t, classificationId: "123456789" });
    },
    CreateTagModal: async () => {
        let { default: e } = await Promise.all([a.e("50513"), a.e("47326")]).then(a.bind(a, 950989));
        return (t) => (0, r.jsx)(e, { ...t, channelId: "123456789", guildId: "987654321" });
    },
    CreateTagModalEdit: async () => {
        let { default: e } = await Promise.all([a.e("50513"), a.e("47326")]).then(a.bind(a, 950989)),
            t = { id: "tag-123", name: "Bug Report", emojiId: "123456789", emojiName: "\uD83D\uDC1B", moderated: !0 };
        return (a) => (0, r.jsx)(e, { ...a, channelId: "123456789", guildId: "987654321", tag: t });
    },
    ConfirmModal: async () => {
        let { ConfirmModal: e } = await a.e("4823").then(a.bind(a, 158954));
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
        let { default: e } = await Promise.all([a.e("80198"), a.e("10919")]).then(a.bind(a, 556506));
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
        let { default: e } = await Promise.all([a.e("80198"), a.e("10919")]).then(a.bind(a, 556506));
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
        let { default: e } = await Promise.all([a.e("80198"), a.e("10919")]).then(a.bind(a, 556506));
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
            } = await Promise.all([a.e("4823"), a.e("88017")]).then(a.bind(a, 844616)),
            { DisableCommunicationDuration: i, getFriendlyDurationString: o } = await Promise.resolve().then(
                a.bind(a, 200700),
            ),
            d = await Promise.resolve().then(a.t.bind(a, 64700, 19)),
            c = "TestUser";
        function u(a) {
            let [u, m] = d.useState(i.DURATION_60_SEC),
                [h, x] = d.useState(""),
                [p, g] = d.useState(!1),
                [v, j] = d.useState(!1),
                b = [
                    { value: i.DURATION_60_SEC, label: o(i.DURATION_60_SEC) },
                    { value: i.DURATION_5_MIN, label: o(i.DURATION_5_MIN) },
                    { value: i.DURATION_10_MIN, label: o(i.DURATION_10_MIN) },
                    { value: i.DURATION_1_HOUR, label: o(i.DURATION_1_HOUR) },
                    { value: i.DURATION_1_DAY, label: o(i.DURATION_1_DAY) },
                    { value: i.DURATION_1_WEEK, label: o(i.DURATION_1_WEEK) },
                ],
                f = d.useCallback(async () => {
                    g(!0),
                        console.log("GuildDisableCommunicationModal: Timing out user", {
                            user: c,
                            duration: o(u),
                            reason: null != h ? h : "No reason provided",
                            resolveFlag: v,
                        }),
                        await new Promise((e) => setTimeout(e, 1e3)),
                        g(!1),
                        a.onClose();
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
                                children: b.map((t) =>
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
                            (0, r.jsx)(e, { variant: "primary", text: "Timeout User", onClick: f, disabled: p }),
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
            } = await Promise.all([a.e("4823"), a.e("88017")]).then(a.bind(a, 844616)),
            s = await Promise.resolve().then(a.t.bind(a, 64700, 19)),
            i = "Level 3 Server Boost",
            o = 200,
            d = 60,
            c = 8;
        function u(a) {
            let [u, m] = s.useState(!1),
                [h, x] = s.useState(!1),
                p = s.useCallback(async () => {
                    x(!0),
                        console.log("GuildPowerupDeactivateModal: Deactivating powerup", {
                            powerup: i,
                            guildId: "123456789",
                        }),
                        await new Promise((e) => setTimeout(e, 2e3)),
                        x(!1),
                        a.onClose();
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
        let { default: e } = await a.e("92063").then(a.bind(a, 970018));
        return (t) =>
            (0, r.jsx)(e, {
                modalProps: t,
                onConfirm: (e) => {
                    console.log("DataHarvestModal: Requesting data export for:", e),
                        setTimeout(() => {
                            console.log("DataHarvestModal: Data export request submitted successfully");
                        }, 1e3);
                },
            });
    },
    EnableCommunityModal: async () => {
        let { default: e } = await Promise.all([a.e("90946"), a.e("52823"), a.e("82721"), a.e("74832")]).then(
            a.bind(a, 709779),
        );
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                onClose: async () => {
                    console.log("EnableCommunityModal: Closed"), await t.onClose();
                },
            });
    },
    DeprivateModal: async () => {
        let e = (await Promise.all([a.e("71006"), a.e("54857")]).then(a.bind(a, 147696))).default;
        return (t) => (0, r.jsx)(e, { ...t, guildId: "123456789012345678", startingChannelId: "987654321098765432" });
    },
    CameraPreviewModal: async () => {
        let { default: e } = await Promise.all([a.e("71425"), a.e("10534")]).then(a.bind(a, 308229));
        return (t) => (0, r.jsx)(e, { ...t, videoEnabled: !1, onEnable: () => console.log("Camera enabled") });
    },
    CameraPreviewModalWithVideo: async () => {
        let { default: e } = await Promise.all([a.e("71425"), a.e("10534")]).then(a.bind(a, 308229));
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
        let { default: e, SelectFriendsModalScreens: t } = await Promise.resolve().then(a.bind(a, 212737));
        return (a) => {
            let { onClose: n, ...l } = a;
            return (0, r.jsx)(e, {
                onClose: async () => {
                    console.log("SelectFriendsModal: Closed"), await n();
                },
                startingScreen: t.SELECT_FRIENDS,
                ...l,
            });
        };
    },
    SelectFriendsModalReminder: async () => {
        let { default: e, SelectFriendsModalScreens: t } = await Promise.resolve().then(a.bind(a, 212737));
        return (a) => {
            let { onClose: n, ...l } = a;
            return (0, r.jsx)(e, {
                onClose: async () => {
                    console.log("SelectFriendsModalReminder: Closed"), await n();
                },
                startingScreen: t.REMINDER,
                ...l,
            });
        };
    },
    AddFavoriteChannelModal: async () => {
        let { default: e } = await Promise.all([
            a.e("82052"),
            a.e("26366"),
            a.e("36946"),
            a.e("92639"),
            a.e("40963"),
            a.e("66031"),
            a.e("59839"),
        ]).then(a.bind(a, 889186));
        return (t) => (0, r.jsx)(e, { ...t, parentId: null });
    },
    ActivityShareMomentModal: async () => {
        let { default: e } = await Promise.all([
            a.e("82052"),
            a.e("44363"),
            a.e("97142"),
            a.e("36946"),
            a.e("92639"),
            a.e("40963"),
            a.e("90480"),
            a.e("66031"),
            a.e("94317"),
            a.e("21743"),
        ]).then(a.bind(a, 190930));
        return (t) =>
            (0, r.jsx)(e, { ...t, applicationId: "123456789", mediaUrl: "https://picsum.photos/400/300.jpg" });
    },
    CallUserConfirmationModal: async () => {
        let { default: e } = await a.e("19106").then(a.bind(a, 279673));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                onSubmit: () => {
                    console.log("CallUserConfirmationModal: Call confirmed"), t.onClose();
                },
            });
    },
    OptInReorderAttemptModal: async () => {
        let { default: e } = await Promise.all([a.e("57729"), a.e("97585"), a.e("24848")]).then(a.bind(a, 354643));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                onClose: () => (console.log("OptInReorderAttemptModal: Modal closed"), t.onClose()),
            });
    },
    GuildAntiRaidReportModal: async () => {
        let { default: e } = await Promise.all([a.e("73669"), a.e("64499")]).then(a.bind(a, 296222));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                guildId: "123456789",
                onClose: () => (console.log("GuildAntiRaidReportModal: Modal closed"), t.onClose()),
            });
    },
    ConsentCheckBoxModal: async () => {
        let { ConfirmModal: e } = await a.e("4823").then(a.bind(a, 158954)),
            { Text: t, Heading: n } = await Promise.all([a.e("4823"), a.e("88017")]).then(a.bind(a, 844616)),
            l = await Promise.resolve().then(a.t.bind(a, 64700, 19));
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
                                (0, r.jsx)(rJ.S, {
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
                                (0, r.jsx)(rJ.S, {
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
        return (s.displayName = "ConsentCheckBoxModalContent"), (e) => (0, r.jsx)(s, { ...e });
    },
    GuildRaidLockdownFeedbackModal: async () => {
        let { default: e } = await Promise.all([a.e("17393"), a.e("46313")]).then(a.bind(a, 336496));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                guildId: "123456789",
                onClose: () => (console.log("GuildRaidLockdownFeedbackModal: Modal closed"), t.onClose()),
            });
    },
    GuildVerificationLevelModal: async () => {
        let { default: e } = await Promise.all([a.e("70245"), a.e("78618"), a.e("70232")]).then(a.bind(a, 313003)),
            { dangerouslyConstructGuildRecordFromUntypedObject: t } = await Promise.resolve().then(a.bind(a, 860689)),
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
        let { default: e } = await Promise.all([a.e("70245"), a.e("78618"), a.e("70232")]).then(a.bind(a, 313003)),
            { dangerouslyConstructGuildRecordFromUntypedObject: t } = await Promise.resolve().then(a.bind(a, 860689)),
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
        let { EmojiAddModal: e } = await Promise.all([a.e("99801"), a.e("90410")]).then(a.bind(a, 126033));
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
        let { default: e } = await a.e("25894").then(a.bind(a, 166789));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    FamilyCenterAcceptLinkModal: async () => {
        let e = en.default.getUser("12345"),
            t = en.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("1697"), a.e("55738"), a.e("31385")]).then(a.bind(a, 58144));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterDeclineLinkModal: async () => {
        let e = en.default.getUser("12345"),
            t = en.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("1697"), a.e("55738"), a.e("84811")]).then(a.bind(a, 389094));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterCancelLinkModal: async () => {
        let e = en.default.getUser("12345"),
            t = en.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("1697"), a.e("55738"), a.e("17219")]).then(a.bind(a, 187278));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterDisconnectLinkModal: async () => {
        let e = en.default.getUser("12345"),
            t = en.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("1697"), a.e("55738"), a.e("43139")]).then(a.bind(a, 179950));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterQRCodeModal: async () => {
        let { default: e } = await Promise.all([
            a.e("32637"),
            a.e("72004"),
            a.e("98189"),
            a.e("48370"),
            a.e("72875"),
        ]).then(a.bind(a, 320742));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PremiumGroupFriendsSelectorModal: async () => {
        let { default: e } = await Promise.all([a.e("5040"), a.e("85579")]).then(a.bind(a, 785606)),
            t = rX.A.getPremiumGroupSubscription();
        return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, subscription: t });
    },
    PremiumGroupAcceptInviteModal: async () => {
        let { default: e } = await Promise.all([a.e("8731"), a.e("99910")]).then(a.bind(a, 826181));
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
        let { default: e } = await a.e("74575").then(a.bind(a, 218642));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    CaptchaTestModal: async () => {
        let { default: e } = await a.e("17724").then(a.bind(a, 563255));
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
                    console.log("PasswordConfirm: Password submitted:", e),
                        await new Promise((e) => setTimeout(e, 1e3));
                },
            });
    },
    BlockedDomainModal: async () => {
        let { default: e } = await Promise.all([a.e("80331"), a.e("20577"), a.e("35681"), a.e("20723")]).then(
            a.bind(a, 667934),
        );
        return (t) => (0, r.jsx)(e, { ...t, url: "https://example-phishing-site.com/malicious-page" });
    },
    DmSettingsUpsellModal: async () => {
        let { default: e } = await Promise.all([a.e("3793"), a.e("62684")]).then(a.bind(a, 228855)),
            t = Object.keys(ne.A.getGuilds())[0];
        return (a) => (0, r.jsx)(e, { ...a, guildId: t });
    },
    UrgentMessageModal: async () => {
        let { default: e } = await Promise.all([a.e("89913"), a.e("36724")]).then(a.bind(a, 531519));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    UserAgreementsModal: async () => {
        let { default: e } = await Promise.all([a.e("90775"), a.e("82911"), a.e("22220")]).then(a.bind(a, 639719));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    DisableRiskyPermsModal: async () => {
        let { default: e } = await Promise.all([a.e("24218"), a.e("52823"), a.e("71905")]).then(a.bind(a, 868952)),
            t = Object.values(ne.A.getGuilds())[0];
        return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
    },
    OtherFriendRequestsModal: async () => {
        let { default: e } = await Promise.all([a.e("99013"), a.e("9421"), a.e("73152"), a.e("25281")]).then(
            a.bind(a, 516259),
        );
        return (t) => (0, r.jsx)(e, { ...t });
    },
    AcceptInviteModal: async () => {
        let { default: e } = await Promise.all([
            a.e("99013"),
            a.e("31880"),
            a.e("51031"),
            a.e("91643"),
            a.e("74337"),
            a.e("7265"),
            a.e("86454"),
            a.e("25505"),
            a.e("83295"),
            a.e("55540"),
            a.e("79023"),
            a.e("6534"),
        ]).then(a.bind(a, 57375));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PremiumGroupSubscribeModal: async () => {
        let { default: e } = await Promise.all([a.e("99709"), a.e("69595")]).then(a.bind(a, 526710));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NewUserOnboarding: async () => {
        let { default: e } = await Promise.all([
            a.e("92060"),
            a.e("97742"),
            a.e("75078"),
            a.e("48010"),
            a.e("19580"),
            a.e("75423"),
            a.e("56856"),
            a.e("19623"),
            a.e("82721"),
            a.e("99574"),
            a.e("57794"),
            a.e("29574"),
        ]).then(a.bind(a, 655045));
        return (t) => (0, r.jsx)(e, { ...t });
    },
};
function r2() {
    let e = o.useMemo(
            () =>
                Object.keys(r1)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, a] = o.useState(null);
    return (0, r.jsx)(d.Ip, {
        className: tF.nd,
        children: (0, r.jsxs)("div", {
            className: sS.l$,
            children: [
                (0, r.jsx)("section", {
                    className: sS.uW,
                    children: (0, r.jsxs)($.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(ae.Z, {
                                label: "Open a Modal",
                                placeholder: "Select a modal",
                                options: e,
                                value: t,
                                onSelectionChange: a,
                                selectionMode: "single",
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open",
                                disabled: null == t,
                                onClick: () => null != t && (0, T.openModalLazy)(r1[t]),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("section", {
                    className: sS.uW,
                    children: [
                        (0, r.jsx)(z.D, { variant: "heading-md/semibold", children: "Wow moment" }),
                        (0, r.jsx)("div", {
                            className: sS.bd,
                            children: (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open",
                                onClick: () => {
                                    (0, rQ.o)(!0), rZ._.dispatch(er.jej.PREMIUM_SUBSCRIPTION_CREATED);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var r8 = a(933832),
    r3 = a(472229),
    r6 = a(694080),
    r5 = a(669316),
    r9 = a(354670),
    r4 = a(428262);
let r7 = async () => {
        try {
            let { body: e } = await n4.Bo.get({ url: er.Rsh.USER_OFFER_IDS, rejectWithError: !0 });
            return e;
        } catch (e) {
            return [];
        }
    },
    oe = async (e, t) => {
        try {
            await n4.Bo.post({ url: er.Rsh.CREATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, r6._D)();
        }
    },
    ot = async (e, t) => {
        try {
            await n4.Bo.del({ url: er.Rsh.UPDATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, r6._D)();
        }
    },
    oa = async () => {
        try {
            let { body: e } = await n4.Bo.get({ url: er.Rsh.USER_OFFERS, rejectWithError: !0 });
            return { trial: e.trial, discount: e.discount.map(r5.A.createFromServer) };
        } catch (e) {
            return { trial: [], discount: [] };
        }
    },
    on = async () => {
        try {
            await n4.Bo.del({ url: er.Rsh.USER_OFFERS, rejectWithError: !0 });
        } catch {
        } finally {
            await r9.A.forceReset(), await (0, r6._D)();
        }
    },
    ol = async (e) => {
        await n4.Bo.post({ url: er.Rsh.CREATE_REVERSE_TRIAL, body: { ends_at: e }, rejectWithError: !0 });
    };
function os(e) {
    let { offer: t, offerOptions: a, forceRefetch: n } = e,
        [l, s] = o.useState(!1),
        [i, d] = o.useState(!1),
        [c, u] = o.useState(!1),
        [m, h] = o.useState(!1);
    o.useEffect(() => {
        c && h(!0);
        let e = setTimeout(() => {
            h(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [c]);
    let { id: x, expires_at: p, redeemed_at: g, trial_id: v, subscription_trial: j, referrer: b } = t,
        f =
            a.find((e) => {
                let { value: t } = e;
                return t === v;
            })?.label ?? "Unknown";
    null != b && (f = `${f} from @${b.username}`);
    let y = null != p,
        E = null != p && new Date(p).getTime() < Date.now(),
        C = j?.sku_id === sj.pe.TIER_0,
        _ = async () => {
            u(!0), y ? await S({ expiresAt: null }) : await (0, r6.u1)(t), n(), u(!1);
        },
        S = async (e) => {
            u(!0);
            try {
                await n4.Bo.patch({
                    url: er.Rsh.UPDATE_USER_OFFER(x, "trial"),
                    body: {
                        ...("expiresAt" in e && { expires_at: e.expiresAt }),
                        ...("referrerId" in e && { referrer_id: e.referrerId }),
                    },
                    rejectWithError: !0,
                });
            } finally {
                n(), u(!1);
            }
        };
    o.useEffect(() => {
        if (l) {
            let e = setTimeout(() => {
                s(!1);
            }, 3e3);
            return () => {
                clearTimeout(e);
            };
        }
        if (i) {
            let e = setTimeout(() => {
                d(!1);
            }, 3e3);
            return () => {
                clearTimeout(e);
            };
        }
    }, [l, i]);
    let N = "Active";
    return (
        y && (N = "Acked"),
        E && (N = "Expired"),
        (0, r.jsxs)("div", {
            className: F()(sS.Nr, C ? sS.Qf : sS.C1),
            children: [
                (0, r.jsx)("div", {
                    className: F()(sS.nM, sS.S7),
                    children: (0, r.jsx)(z.D, { variant: "heading-lg/semibold", color: "always-white", children: f }),
                }),
                (0, r.jsxs)(B.D, {
                    className: F()(sS.nM, sS.QB),
                    onClick: () => {
                        (0, nA.C)(x, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(D.E, { variant: "eyebrow", color: "always-white", children: ["Offer: ", x] }),
                        l
                            ? (0, r.jsx)(r8.A, { size: "md", color: "currentColor", className: sS.Kk })
                            : (0, r.jsx)(nb.T, { size: "xs", color: "currentColor", className: sS.Kk }),
                    ],
                }),
                (0, r.jsxs)(B.D, {
                    className: F()(sS.nM, sS.QB),
                    onClick: () => {
                        (0, nA.C)(v, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(D.E, { variant: "eyebrow", color: "always-white", children: ["Trial: ", v] }),
                        i
                            ? (0, r.jsx)(r8.A, { size: "md", color: "currentColor", className: sS.Kk })
                            : (0, r.jsx)(nb.T, { size: "xs", color: "currentColor", className: sS.Kk }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: sS.nM,
                    children: (0, r.jsxs)(D.E, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, r4.re)({
                                intervalType: j?.interval ?? sj.WT.MONTH,
                                intervalCount: j?.interval_count ?? 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: sS.nM,
                    children: [
                        (0, r.jsxs)(D.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, r3.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nk.Xm)(p),
                            onChange: (e) => {
                                S({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: sS.nM,
                    children: [
                        (0, r.jsx)(D.E, { variant: "eyebrow", color: "always-white", children: "Referrer ID:" }),
                        (0, r.jsx)("input", {
                            type: "text",
                            value: b?.id ?? "",
                            onChange: (e) => S({ referrerId: e.target.value }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: sS.fC,
                    children: [
                        (0, r.jsx)(B.D, {
                            onClick: _,
                            className: F()(sS.qS, sS.vk, { [sS.R1]: y, [sS._7]: E }),
                            children: (0, r.jsx)(D.E, {
                                variant: "eyebrow",
                                color: "Acked" === N ? void 0 : "always-white",
                                children: N,
                            }),
                        }),
                        null != g &&
                            (0, r.jsx)("div", {
                                className: F()(sS.qS, sS.k3),
                                children: (0, r.jsx)(D.E, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Redeemed",
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(B.D, {
                    onClick: async () => {
                        u(!0), await ot(x, "trial"), n(), u(!1);
                    },
                    children: (0, r.jsx)(nE.u, { size: "md", color: "currentColor", className: F()(sS.Kk, sS.IT) }),
                }),
                (0, r.jsx)("div", { className: F()(sS.g4, { [sS.VP]: c || m }), children: (0, r.jsx)(ta.y, {}) }),
            ],
        })
    );
}
function oi(e) {
    let { offer: t, offerOptions: a, forceRefetch: n } = e,
        [l, s] = o.useState(!1),
        [i, d] = o.useState(!1),
        [c, u] = o.useState(!1),
        [m, h] = o.useState(!1);
    o.useEffect(() => {
        c && h(!0);
        let e = setTimeout(() => {
            h(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [c]);
    let { id: x, expiresAt: p, discountId: g, discount: v } = t,
        j =
            a.find((e) => {
                let { value: t } = e;
                return t === g;
            })?.label ?? "Unknown",
        b = null != p,
        f = t.hasExpired(),
        y = t.isApplied(),
        E = async () => {
            u(!0), b ? await C({ expiresAt: null }) : await (0, r6.u1)(void 0, t), n(), u(!1);
        },
        C = async (e) => {
            let { expiresAt: t } = e;
            u(!0);
            try {
                await n4.Bo.patch({
                    url: er.Rsh.UPDATE_USER_OFFER(x, "discount"),
                    body: { expires_at: t },
                    rejectWithError: !0,
                });
            } finally {
                n(), u(!1);
            }
        };
    o.useEffect(() => {
        if (l) {
            let e = setTimeout(() => {
                s(!1);
            }, 3e3);
            return () => {
                clearTimeout(e);
            };
        }
        if (i) {
            let e = setTimeout(() => {
                d(!1);
            }, 3e3);
            return () => {
                clearTimeout(e);
            };
        }
    }, [l, i]);
    let _ = "Active";
    return (
        f && (_ = "Expired"),
        b && (_ = "Acked"),
        (0, r.jsxs)("div", {
            className: F()(sS.Nr, sS.id),
            children: [
                (0, r.jsx)("div", {
                    className: F()(sS.nM, sS.S7),
                    children: (0, r.jsx)(z.D, { variant: "heading-lg/semibold", color: "text-default", children: j }),
                }),
                (0, r.jsxs)(B.D, {
                    className: F()(sS.nM, sS.QB),
                    onClick: () => {
                        (0, nA.C)(x, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(D.E, { variant: "eyebrow", color: "text-default", children: ["Offer: ", x] }),
                        l
                            ? (0, r.jsx)(r8.A, { size: "md", color: "currentColor", className: F()(sS.Kk, sS.mK) })
                            : (0, r.jsx)(nb.T, { size: "xs", color: "currentColor", className: sS.Kk }),
                    ],
                }),
                (0, r.jsxs)(B.D, {
                    className: F()(sS.nM, sS.QB),
                    onClick: () => {
                        (0, nA.C)(g, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(D.E, { variant: "eyebrow", color: "text-default", children: ["Discount: ", g] }),
                        i
                            ? (0, r.jsx)(r8.A, { size: "md", color: "currentColor", className: F()(sS.Kk, sS.mK) })
                            : (0, r.jsx)(nb.T, { size: "xs", color: "currentColor", className: sS.Kk }),
                    ],
                }),
                v?.amount != null &&
                    (0, r.jsx)("div", {
                        children: (0, r.jsxs)(D.E, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: [v.amount, "% off"],
                        }),
                    }),
                (0, r.jsxs)("div", {
                    className: sS.nM,
                    children: [
                        (0, r.jsxs)(D.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, r3.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nk.Xm)(p?.toISOString()),
                            onChange: (e) =>
                                C({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: sS.fC,
                    children: [
                        (0, r.jsx)(B.D, {
                            onClick: E,
                            className: F()(sS.qS, sS.vk, { [sS.R1]: b, [sS._7]: f }),
                            children: (0, r.jsx)(D.E, {
                                variant: "eyebrow",
                                color: "Acked" === _ ? void 0 : "always-white",
                                children: _,
                            }),
                        }),
                        y &&
                            (0, r.jsx)("div", {
                                className: F()(sS.qS, sS.k3),
                                children: (0, r.jsx)(D.E, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Applied",
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(B.D, {
                    className: sS.aR,
                    onClick: async () => {
                        u(!0), await ot(x, "discount"), n(), u(!1);
                    },
                    children: (0, r.jsx)(nE.u, { size: "md", color: "currentColor", className: F()(sS.Kk, sS.fy) }),
                }),
                (0, r.jsx)("div", { className: F()(sS.g4, { [sS.VP]: c || m }), children: (0, r.jsx)(ta.y, {}) }),
            ],
        })
    );
}
function or() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState([]),
        [l, s] = o.useState(),
        [i, c] = o.useState(),
        [u, m] = o.useState([]),
        [p, g] = o.useState([]),
        [v, j] = o.useState(!0),
        [b, f] = o.useState(10080),
        [y, E] = o.useState([]),
        { entitlements: C, deleteFractionalPremium: _, refreshEntitlementList: S } = sC();
    o.useEffect(() => {
        S();
    }, [S]),
        o.useEffect(() => {
            E(C.filter((e) => e.sourceType === er.GD.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [C]),
        o.useEffect(() => {
            (0 === e.length || 0 === a.length || v) &&
                r7().then((e) => {
                    let a = Object.keys(e.trial).map((t) => ({ label: t, value: e.trial[t] })),
                        r = Object.keys(e.discount).map((t) => ({ label: t, value: e.discount[t] }));
                    t(a), n(r), null == l && s(a[0].value), null == i && c(r[0].value);
                });
        }, [e, a, l, i, v]),
        o.useEffect(() => {
            v &&
                (j(!1),
                r9.A.forceReset(),
                (0, r6._D)(),
                oa().then((e) => {
                    m(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        g(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [v]);
    let N = async () => {
            null != l && (await oe(l, "trial"), j(!0));
        },
        A = async () => {
            null != i && (await oe(i, "discount"), j(!0));
        },
        k = async () => {
            await on(), j(!0);
        },
        I = async () => {
            let e = new Date(Date.now() + 60 * b * 1e3).toISOString();
            await ol(e), S();
        };
    return (0, r.jsx)(d.Ip, {
        className: tF.nd,
        children: (0, r.jsxs)("div", {
            className: sS.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: sS.uW,
                    children: [
                        (0, r.jsx)(z.D, { variant: "heading-md/semibold", children: "Utils" }),
                        (0, r.jsxs)("div", {
                            className: sS.Uo,
                            children: [
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear all User Offers",
                                    onClick: k,
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Mobile Trials DismissibleContent",
                                    onClick: () => (0, lO.xB)(ao.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Offer Nagbar DismissibleContent",
                                    onClick: () => (0, lO._N)(ao.M.NAGBAR_NOTICE_OFFER_EXPIRING),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Refresh DevTools",
                                    onClick: () => j(!0),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)("section", {
                    className: sS.uW,
                    children: (0, r.jsxs)("div", {
                        className: sS.bd,
                        children: [
                            (0, r.jsx)(x.l, {
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
                            (0, r.jsx)(h.$, { variant: "primary", text: "Create", onClick: N }),
                        ],
                    }),
                }),
                (0, r.jsx)("section", {
                    className: sS.uW,
                    children: (0, r.jsxs)("div", {
                        className: sS.bd,
                        children: [
                            (0, r.jsx)(x.l, {
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
                            (0, r.jsx)(h.$, { variant: "primary", text: "Create", onClick: A }),
                        ],
                    }),
                }),
                u.length > 0 &&
                    (0, r.jsxs)("section", {
                        className: sS.uW,
                        children: [
                            (0, r.jsx)(z.D, { variant: "heading-md/semibold", children: "Existing Trial Offers" }),
                            u.map((t) =>
                                (0, r.jsx)(os, { offer: t, offerOptions: e, forceRefetch: () => j(!0) }, t.id),
                            ),
                        ],
                    }),
                p.length > 0 &&
                    (0, r.jsxs)("section", {
                        className: sS.uW,
                        children: [
                            (0, r.jsx)(z.D, { variant: "heading-md/semibold", children: "Existing Discount Offers" }),
                            p.map((e) =>
                                (0, r.jsx)(oi, { offer: e, offerOptions: a, forceRefetch: () => j(!0) }, e.id),
                            ),
                        ],
                    }),
                (0, r.jsx)("section", {
                    className: sS.uW,
                    children: (0, r.jsxs)("div", {
                        className: sS.bd,
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Create a Reverse Trial Entitlement",
                                options: [
                                    { id: "5min", label: "5 minutes", value: 5 },
                                    { id: "1hour", label: "1 hour", value: 60 },
                                    { id: "1day", label: "1 day", value: 1440 },
                                    { id: "1week", label: "1 week", value: 10080 },
                                ],
                                value: b,
                                placeholder: "Reverse Trial Length",
                                onSelectionChange: f,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(h.$, { variant: "primary", text: "Create", onClick: I }),
                        ],
                    }),
                }),
                y.length > 0 &&
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(D.E, {
                                style: { marginTop: "15px" },
                                variant: "text-md/bold",
                                children: "Active reverse trial",
                            }),
                            (0, r.jsx)("div", {
                                children: y.map((e) =>
                                    (0, r.jsx)(sA, { entitlement: e, active: !0, onDelete: () => _(e.id) }, e.id),
                                ),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
var oo = a(528265),
    od = a(26279),
    oc = a(920526);
let ou = {
        [od.Re.UNSPECIFIED]: "Unspecified",
        [od.Re.DRAFT]: "Draft",
        [od.Re.SIGNED]: "Signed",
        [od.Re.DISCARDED]: "Discarded",
        [od.Re.SIGNING_IN_PROGRESS]: "Signing In Progress",
    },
    om = { [od.BM.UNSPECIFIED]: "Unspecified", [od.BM.ONE_TIME]: "One Time", [od.BM.SUBSCRIPTION]: "Subscription" };
function oh() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(!0),
        [l, s] = o.useState(null),
        i = o.useCallback(async () => {
            n(!0), s(null);
            try {
                let e = await n4.Bo.get({ url: `${er.Rsh.ORDER_LIST}?limit=5`, rejectWithError: !0 });
                t(e.body ?? []);
            } catch (e) {
                s(e instanceof Error ? e.message : "Failed to fetch orders");
            } finally {
                n(!1);
            }
        }, []);
    return (
        o.useEffect(() => {
            i();
        }, [i]),
        (0, r.jsx)(d.Ip, {
            className: tF.nd,
            children: (0, r.jsxs)("div", {
                className: sS.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: sS.dL,
                        style: { marginBottom: "16px" },
                        children: [
                            (0, r.jsxs)(D.E, { variant: "text-lg/bold", children: ["Orders (last ", 5, ")"] }),
                            (0, r.jsx)(h.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Refresh",
                                onClick: i,
                                loading: a,
                            }),
                        ],
                    }),
                    null != l && (0, r.jsx)(V.w, { type: "critical", children: l }),
                    !a &&
                        null != e &&
                        0 === e.length &&
                        (0, r.jsx)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "No orders found.",
                        }),
                    null != e && e.map((e) => (0, r.jsx)(ox, { order: e }, e.id)),
                ],
            }),
        })
    );
}
function ox(e) {
    let { order: t } = e,
        [a, n] = o.useState(!1),
        [l, s] = o.useState(!1),
        i = ou[t.status] ?? `Unknown (${t.status})`,
        d = [
            { id: "status", label: `Status: ${i}`, isDisabled: !1 },
            { id: "created", label: `Created: ${new Date(t.created_at).toLocaleString()}`, isDisabled: !1 },
        ],
        c = o.useCallback(() => {
            navigator.clipboard.writeText(t.id), s(!0), setTimeout(() => s(!1), 2e3);
        }, [t.id]);
    return (0, r.jsxs)("div", {
        className: sS.Nr,
        children: [
            (0, r.jsxs)($.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                style: { marginBottom: "4px" },
                children: [
                    (0, r.jsx)(D.E, { variant: "text-md/semibold", children: t.id }),
                    (0, r.jsx)(h.$, { variant: "secondary", size: "sm", text: l ? "Copied!" : "Copy ID", onClick: c }),
                ],
            }),
            (0, r.jsx)(oo.C, {
                items: d,
                label: "Order info",
                layout: "inline",
                selectionMode: "none",
                selectionBehavior: "replace",
                disabledKeys: new Set(),
            }),
            (0, r.jsxs)($.B, {
                direction: "vertical",
                gap: 4,
                style: { marginTop: "8px" },
                children: [
                    (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "Line Items" }),
                    0 === t.order_line_items.length
                        ? (0, r.jsx)(D.E, { variant: "text-xs/normal", color: "text-muted", children: "No line items" })
                        : t.order_line_items.map((e) =>
                              (0, r.jsxs)(
                                  $.B,
                                  {
                                      direction: "horizontal",
                                      gap: 12,
                                      children: [
                                          (0, r.jsxs)(D.E, {
                                              variant: "text-xs/normal",
                                              children: ["SKU: ", e.sku_id],
                                          }),
                                          (0, r.jsxs)(D.E, {
                                              variant: "text-xs/normal",
                                              children: ["Qty: ", e.quantity],
                                          }),
                                          (0, r.jsxs)(D.E, {
                                              variant: "text-xs/normal",
                                              children: [
                                                  "Type: ",
                                                  om[e.purchase_type] ?? `Unknown (${e.purchase_type})`,
                                              ],
                                          }),
                                          null != e.subscription_plan_id &&
                                              (0, r.jsxs)(D.E, {
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
                    className: oc.VK,
                    style: { marginTop: "8px" },
                    children: [
                        (0, r.jsxs)(B.D, {
                            onClick: () => n((e) => !e),
                            className: oc.Eh,
                            children: [
                                (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "Billing Facet" }),
                                (0, r.jsx)(sg.A, { direction: a ? sg.A.Directions.UP : sg.A.Directions.DOWN }),
                            ],
                        }),
                        a &&
                            (0, r.jsxs)("ul", {
                                className: oc.j3,
                                children: [
                                    (0, r.jsxs)("li", {
                                        children: [
                                            (0, r.jsx)(D.E, {
                                                variant: "text-xs/semibold",
                                                children: "payment_gateway",
                                            }),
                                            (0, r.jsx)(D.E, {
                                                variant: "text-xs/normal",
                                                children: String(t.billing_facet.payment_gateway),
                                            }),
                                        ],
                                    }),
                                    null != t.billing_facet.payment_source_id &&
                                        (0, r.jsxs)("li", {
                                            children: [
                                                (0, r.jsx)(D.E, {
                                                    variant: "text-xs/semibold",
                                                    children: "payment_source_id",
                                                }),
                                                (0, r.jsx)(D.E, {
                                                    variant: "text-xs/normal",
                                                    children: t.billing_facet.payment_source_id,
                                                }),
                                            ],
                                        }),
                                    null != t.billing_facet.invoice_preview &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(D.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "currency",
                                                        }),
                                                        (0, r.jsx)(D.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.currency,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(D.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "subtotal",
                                                        }),
                                                        (0, r.jsx)(D.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.subtotal,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(D.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "tax",
                                                        }),
                                                        (0, r.jsx)(D.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.tax,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(D.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "total",
                                                        }),
                                                        (0, r.jsx)(D.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.total,
                                                        }),
                                                    ],
                                                }),
                                                t.billing_facet.invoice_preview.line_items.length > 0 &&
                                                    (0, r.jsxs)("li", {
                                                        children: [
                                                            (0, r.jsx)(D.E, {
                                                                variant: "text-xs/semibold",
                                                                children: "invoice line items",
                                                            }),
                                                            (0, r.jsx)($.B, {
                                                                direction: "vertical",
                                                                gap: 4,
                                                                style: { marginTop: "4px" },
                                                                children:
                                                                    t.billing_facet.invoice_preview.line_items.map(
                                                                        (e) =>
                                                                            (0, r.jsxs)(
                                                                                $.B,
                                                                                {
                                                                                    direction: "horizontal",
                                                                                    gap: 12,
                                                                                    children: [
                                                                                        (0, r.jsxs)(D.E, {
                                                                                            variant: "text-xs/normal",
                                                                                            children: [
                                                                                                "ref: ",
                                                                                                e.ref_order_line_item_id,
                                                                                            ],
                                                                                        }),
                                                                                        (0, r.jsxs)(D.E, {
                                                                                            variant: "text-xs/normal",
                                                                                            children: [
                                                                                                "unit: ",
                                                                                                e.unit_price,
                                                                                            ],
                                                                                        }),
                                                                                        (0, r.jsxs)(D.E, {
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
var op = a(935462),
    og = a(260598),
    ov = a(93688),
    oj = a(717400),
    ob = a(676955),
    of = a(31300),
    oy = a(500060),
    oE = a(391973),
    oC = a(684013),
    o_ = a(765671),
    oS = a(235986),
    oN = a(742589),
    oA = a(41984),
    ok = a(181435),
    oI = a(435736),
    oD = a(296027),
    oT = a(515183),
    oR = a(489277),
    oO = a(127242),
    ow = a(869014),
    oM = a(528772),
    oL = a(38502),
    oP = a(532624),
    oU = a(773371),
    oG = a(996439),
    oF = a(350535),
    oB = a(9302),
    oV = a(644434),
    o$ = a(916441);
let oW = {
        [er.uss.CLICK_ZONE_DEBUG]: (e) => ({
            type: er.uss.CLICK_ZONE_DEBUG,
            id: (0, eI.A)(),
            layoutId: e,
            anchor: { top: 0.35, right: 0.35 },
            size: { width: 100, height: 100 },
            ...oL.A.getWidgetDefaultSettings(er.uss.CLICK_ZONE_DEBUG),
            pinned: !0,
        }),
        [er.uss.PERFORMANCE_DEBUG]: (e) => ({
            type: er.uss.PERFORMANCE_DEBUG,
            id: (0, eI.A)(),
            layoutId: e,
            anchor: { top: 0.1, right: 0.1 },
            size: { fixed: !1, width: "auto", height: "auto" },
            ...oL.A.getWidgetDefaultSettings(er.uss.PERFORMANCE_DEBUG),
            pinned: !0,
        }),
    },
    oz = {};
function oH(e) {
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
        (0, r.jsxs)(nj.$n, {
            look: nj.$n.Looks.LINK,
            color: nj.$n.Colors.LINK,
            size: nj.$n.Sizes.MIN,
            onClick: function () {
                (0, nA.C)(t, () => n(!0));
            },
            className: o$.DT,
            children: ["Application Id: ", t, " ", a ? nl.intl.string(nl.t.t5VZ88) : null],
        })
    );
}
let oK = o.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, H.bG)([j.Ay], () => j.Ay.getGameOrTransformedSubgameForPID(t.pid)),
            n = (0, H.bG)([na.A], () => na.A.getGameForPID(t.pid)),
            l = (0, H.bG)([j.Ay], () => (null == a ? null : j.Ay.getGameOverlayStatus(a)));
        return (0, r.jsxs)("div", {
            className: o$.st,
            children: [
                (0, r.jsx)(D.E, { variant: "text-md/bold", color: "text-strong", children: t.gameName }),
                (0, r.jsx)(D.E, { variant: "text-sm/bold", color: "text-subtle", children: t.pid }),
                (0, r.jsx)(D.E, { variant: "text-sm/normal", color: "text-subtle", children: a?.exeName }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["isLauncher: ", a?.isLauncher ? "Yes" : "No"],
                }),
                null != t.applicationId &&
                    (0, r.jsx)(D.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: (0, r.jsx)(oH, { id: t.applicationId }),
                    }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, oT.wR)(t.fullscreenType)],
                }),
                (0, r.jsxs)(D.E, { variant: "text-sm/normal", color: "text-default", children: ["state: ", t.state] }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"],
                }),
                (0, r.jsxs)("div", {
                    className: o$.st,
                    children: [
                        (0, r.jsxs)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["source: ", t.source],
                        }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["legacyEnabled: ", t.legacyEnabled ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["oopEnabled: ", t.oopEnabled ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["overlayMethod: ", (0, oT.gK)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != l &&
                    (0, r.jsxs)("div", {
                        className: o$.st,
                        children: [
                            (0, r.jsxs)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw source: ", l.source],
                            }),
                            (0, r.jsxs)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledLegacy: ", l.enabledLegacy ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledOOP: ", l.enabledOOP ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw overlayMethod: ", (0, oT.gK)(l.overlayMethod)],
                            }),
                        ],
                    }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hidden: ", a?.hidden ? "Yes" : "No"],
                }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hook: ", n?.hook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlay: ", n?.overlay ? "Yes" : "No"],
                }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlayCompatibilityHook: ", n?.overlayCompatibilityHook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["supportsOutOfProcessOverlay: ", n?.supportsOutOfProcessOverlay ? "Yes" : "No"],
                }),
            ],
        });
    }),
    oY = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, H.cf)([oU.default], () => oU.default.getOverlayPIDStatuses()),
            n = (0, H.cf)([oD.default], () => oD.default.getTrackedGames()),
            l = (0, H.bG)([oU.default], () => oU.default.isInputLocked(t), [t]),
            s = (0, H.bG)([oU.default], () => oU.default.DEV_isInputLockedV3(t), [t]),
            i = (0, H.bG)([oU.default], () => oU.default.DEV_isInputLocked(t), [t]),
            o = (0, H.bG)([oU.default], () => oU.default.isReady(t), [t]);
        return (0, r.jsxs)("div", {
            className: o$.st,
            children: [
                (0, r.jsx)(D.E, { variant: "text-md/semibold", color: "text-strong", children: `${t}` }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: [
                        "Screen Type Resolution: ",
                        ((e) => {
                            let t = n[e]?.timer;
                            if (null == t || null == t.screenTypeResolutionTimestamp) return "...";
                            let a = t.screenTypeResolutionTimestamp - t.startTrackingTimestamp;
                            return `${a.toFixed(2)}ms`;
                        })(t),
                    ],
                }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: [
                        "Window Creation: ",
                        ((e) => {
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
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: [
                        "Rendering: ",
                        ((e) => {
                            let t = n[e]?.timer;
                            if (null == t || null == t.overlayRenderingTimestamp || null == t.moduleTrackingTimestamp)
                                return "...";
                            let a = t.overlayRenderingTimestamp - t.moduleTrackingTimestamp;
                            return `${a.toFixed(2)}ms`;
                        })(t),
                    ],
                }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["Bridge Status: ", a.get(Number(t))],
                }),
                (0, r.jsxs)(D.E, { variant: "text-sm/normal", color: "text-strong", children: ["isInputLocked: ", l] }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV3: ", s],
                }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV2: ", i],
                }),
                (0, r.jsxs)(D.E, { variant: "text-sm/normal", color: "text-strong", children: ["isReady: ", o] }),
            ],
        });
    });
function oq(e) {
    let t,
        a = ((t = Object.values((0, H.yK)([oL.A], () => oL.A.getWidgetsForLayout(oV.G)))), t.find((t) => t.type === e));
    return [
        a,
        () => {
            if (null != a) (0, oE.uv)(a.id);
            else {
                let t = oW[e];
                if (null == t) return;
                let a = t(oV.G);
                (0, oE.jn)(a);
            }
        },
    ];
}
function oJ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? `${e.toFixed(2)}ms` : (0, nk.i$)(nv()(e), "h:mm:ss.SSS");
}
let oQ = o.memo(function (e) {
    let { pid: t, ...a } = e,
        n = (0, H.bG)([oD.default], () => {
            if (null == t) return "Unknown";
            let e = oD.default.getTrackedGameByPid(t)?.gameName;
            return null != e ? ((oz[t] = e), e) : (oz[t] ?? "Unknown");
        }, [t]);
    return (0, r.jsx)(D.E, { ...a, variant: "text-md/semibold", color: "text-strong", children: n });
});
function oX() {
    let e = (0, H.bG)([oO.A], () => oO.A.hasRenderDebugMode(oA.x7.TrackFocusPIDs)),
        t = (0, H.yK)([oD.default], () => oD.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, r.jsxs)("div", {
        className: o$.st,
        children: [
            (0, r.jsxs)("div", {
                className: o$.Iv,
                children: [
                    (0, r.jsx)(v.d, {
                        checked: e,
                        onChange: () =>
                            void oC.A.setRenderDebugMode(
                                !oO.A.hasRenderDebugMode(oA.x7.TrackFocusPIDs),
                                oA.x7.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, r.jsx)(B.D, {
                        className: o$.LL,
                        onClick: () => oC.A.clearTrackedPids(),
                        children: (0, r.jsx)(nE.u, { size: "md", color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsxs)(d.Ip, {
                className: F()(o$.st, o$.XG),
                children: [
                    0 === t.length &&
                        (0, r.jsx)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: "No recent focused pids",
                        }),
                    [...t].reverse().map((e) => {
                        let [t, a, n] = e;
                        return (0, r.jsx)(
                            o.Fragment,
                            {
                                children: (0, r.jsx)(l0.m, {
                                    position: "left",
                                    text: n === oA.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsxs)(D.E, {
                                            variant: "text-sm/medium",
                                            color: n === oA.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                                            children: [
                                                (0, r.jsx)(oQ, { pid: a, tag: "span" }),
                                                " - ",
                                                a?.toString() ?? "null",
                                                " @ ",
                                                oJ(t),
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
let oZ = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, H.bG)([oD.default, j.Ay], () => {
                if (null == t) return null;
                let e = oD.default.getTrackedGameByPid(t)?.fullscreenType;
                if (null != e) return e;
                let a = j.Ay.getGameOrTransformedSubgameForPID(t);
                return a?.fullscreenType ?? lW.aI.UNKNOWN;
            }, [t]);
        return (0, r.jsxs)(D.E, {
            variant: "text-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != a ? (0, oT.wR)(a) : "Unknown"],
        });
    }),
    o0 = o.memo(function () {
        let e = (0, H.cf)([oD.default], () => oD.default.getTrackedGames()),
            [t, a] = o.useState({}),
            n = o.useRef(null);
        return (
            o.useEffect(
                () => (
                    (n.current = setInterval(async () => {
                        let e = j.Ay.getRunningGames(),
                            t = [],
                            n = Date.now();
                        for (let a of e) t.push((0, oT.E1)(a.pid, 0).then((e) => [a.pid, e, n]));
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
                    }, +le.A.Millis.SECOND)),
                    () => clearInterval(n.current)
                ),
                [],
            ),
            (0, r.jsx)(l0.m, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (0, r.jsx)("div", {
                    children: (0, r.jsxs)(d.Ip, {
                        className: F()(o$.st, o$.XG),
                        children: [
                            0 === Object.keys(e).length &&
                                (0, r.jsx)(D.E, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: "No recent screen types",
                                }),
                            Object.values(e).map((e) =>
                                (0, r.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, r.jsx)(oQ, { tag: "div", pid: e.pid }),
                                            (0, r.jsx)(oZ, { pid: e.pid }),
                                            null != t[e.pid] &&
                                                [...t[e.pid]].reverse().map((t) => {
                                                    let { screenType: a, timestamp: n } = t;
                                                    return (0, r.jsx)(
                                                        D.E,
                                                        {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            children: `${a}:${(0, oT.wR)(a)} @ ${oJ(n)}`,
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
    o1 = o.memo(function () {
        let e = (0, H.cf)([oD.default], () => oD.default.getTrackedGames()),
            t = (0, oB.getPID)(),
            a = (0, H.bG)([oD.default], () => oD.default.isOverlayOOPEnabledForPid(t), [t]),
            [n, l] = (0, H.yK)([oM.A], () => [oM.A.enabled, oM.A.keepOpen]),
            s = (0, H.bG)([oU.default], () => oU.default.getFocusedPID()),
            i = (0, H.bG)([oU.default], () => oU.default.isFocusedPidOutOfProcess());
        return (0, r.jsxs)("div", {
            className: o$.st,
            children: [
                0 === Object.keys(e).length &&
                    (0, r.jsx)(D.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(e).map((e) => (0, r.jsx)(oY, { pid: e.pid }, e.pid)),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)(D.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["focusedPID: ", s?.toString() ?? "null"],
                        }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isFocusedPidOutOfProcess: ", i ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["processPid: ", t?.toString() ?? "unknown"],
                        }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isOOPEnabledForPid: ", a ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.enabled: ", n ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.keepOpen: ", l ? "Yes" : "No"],
                        }),
                    ],
                }),
            ],
        });
    }),
    o2 = [
        {
            mode: oA.x7.ClickZones,
            label: "Click Zone Debug Mode",
            tooltip: "Enables a red border around click zones to help with debugging.",
        },
        {
            mode: oA.x7.WidgetAreas,
            label: "Render Debug Mode",
            tooltip:
                "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        },
        {
            mode: oA.x7.WindowContainer,
            label: "Window Container Debug Mode",
            tooltip: "Enables a border the overlay window",
        },
        {
            mode: oA.x7.DisabledGPUBoost,
            label: "Disable GPU Boost",
            tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: oA.x7.ForceGPUBoost,
            label: "Force GPU Boost",
            tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: oA.x7.OverlayRafManagerForceEnabled,
            label: "Overlay SmartRAF",
            tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        },
        {
            mode: oA.x7.LegacyOverlayLogging,
            label: "Legacy Overlay Logging",
            tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console.",
        },
    ],
    o8 = o.memo(function () {
        let [e, t] = oq(er.uss.CLICK_ZONE_DEBUG),
            [a, n] = oq(er.uss.PERFORMANCE_DEBUG),
            l = (0, H.bG)([oO.A], () => oO.A.getRenderDebugModes()),
            [s, i] = o.useState({});
        return (
            o.useEffect(() => {
                let e = setInterval(() => {
                    i({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, r.jsx)("div", {
                className: o$.st,
                children: o2.map((s) => {
                    let i =
                            s.mode === oA.x7.OverlayRafManagerForceEnabled
                                ? `${s.label} (${ow.A.getLastRAFCallbackReason()})`
                                : s.label,
                        d = () =>
                            s.mode === oA.x7.ClickZones
                                ? null != e
                                : s.mode === oA.x7.WidgetAreas
                                  ? null != a
                                  : l.has(s.mode);
                    return (0, r.jsx)(
                        o.Fragment,
                        {
                            children: (0, r.jsx)(v.d, {
                                checked: d(),
                                onChange: () => {
                                    var e;
                                    let a = d();
                                    s.mode === oA.x7.ClickZones && t(),
                                        s.mode === oA.x7.WidgetAreas && n(),
                                        (e = s.mode),
                                        oC.A.setRenderDebugMode(!a, e);
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
    o3 = o.memo(function () {
        let e = (0, H.cf)([oD.default], () => oD.default.getTrackedGames()),
            t = (0, H.bG)([j.Ay], () => j.Ay.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                t.length > 0 &&
                    (0, r.jsx)(l0.m, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsxs)("div", {
                                className: o$.st,
                                children: [
                                    (0, r.jsx)(D.E, {
                                        variant: "text-md/bold",
                                        color: "text-feedback-critical",
                                        children: "Untracked Running Games",
                                    }),
                                    t.map((e) =>
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(
                                                    D.E,
                                                    {
                                                        variant: "text-sm/normal",
                                                        color: "text-feedback-critical",
                                                        children: `${e.pid} - ${e.name} (${e.exeName})`,
                                                    },
                                                    e.pid,
                                                ),
                                                (0, r.jsx)(oZ, { pid: e.pid }),
                                            ],
                                        }),
                                    ),
                                ],
                            }),
                        }),
                    }),
                (0, r.jsx)(l0.m, {
                    position: "left",
                    text: "The current running games process information",
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: o$.st,
                            children: [
                                0 === Object.keys(e).length &&
                                    (0, r.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: "No running games",
                                    }),
                                Object.values(e).map((e) => (0, r.jsx)(oK, { trackedGame: e }, e.pid)),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    o6 = o.memo(function () {
        let e = (0, H.bG)([oD.default], () => oD.default.getForcedRenderMode()),
            [t, a] = o.useState(e),
            n = [
                { label: oA.V6.UNSET, value: oA.V6.UNSET, id: oA.V6.UNSET },
                { label: oA.V6.IN_PROCESS_V2, value: oA.V6.IN_PROCESS_V2, id: oA.V6.IN_PROCESS_V2 },
                { label: oA.V6.OUT_OF_PROCESS_V3, value: oA.V6.OUT_OF_PROCESS_V3, id: oA.V6.OUT_OF_PROCESS_V3 },
                {
                    label: oA.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: oA.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    id: oA.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => ({ ...t, label: `${t.label} ${e === t.value ? "(current)" : ""}` }));
        return (0, r.jsx)(x.l, {
            label: "Override the overlay render mode",
            value: t,
            options: n,
            onSelectionChange: (e) => {
                a(e), oC.A.forceRenderMode(e);
            },
            selectionMode: "single",
            fullWidth: !0,
        });
    });
function o5(e) {
    let { modalProps: t, onClose: a } = e,
        [n, l] = o.useState(null);
    function s() {
        a(null);
    }
    return (0, r.jsxs)(op.EO, {
        size: op.rI.LARGE,
        "aria-label": "Breadcrumb Import",
        ...t,
        transitionState: t.transitionState,
        parentComponent: "BreadcrumbImportPanel",
        children: [
            (0, r.jsxs)(op.rQ, {
                align: oS.A.Align.CENTER,
                justify: oS.A.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(D.E, {
                        variant: "text-md/bold",
                        color: "text-feedback-critical",
                        children: "Breadcrumb Import",
                    }),
                    (0, r.jsx)(op.s_, { onClick: s }),
                ],
            }),
            (0, r.jsx)(op.$m, {
                children: (0, r.jsx)("div", {
                    className: o$.st,
                    children: (0, r.jsx)(og.f, { label: "Paste JSON Here", onChange: l, value: n ?? "", rows: 12 }),
                }),
            }),
            (0, r.jsx)(op.jl, {
                children: (0, r.jsxs)(sr.e, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Import",
                            onClick: function () {
                                a(n);
                            },
                        }),
                        (0, r.jsx)(h.$, { variant: "secondary", text: "Clear", onClick: s }),
                    ],
                }),
            }),
        ],
    });
}
let o9 = {
    native: { label: "Native", filter: (e) => e.type === ok.ON.NativeLegacy || e.type === ok.ON.NativeOOP },
    render: { label: "Render", filter: (e) => e.type === ok.ON.Renderer },
    flux: { label: "Flux", filter: (e) => e.type === ok.ON.Flux },
    client: { label: "Client", filter: (e) => e.type === ok.ON.OOPModule || e.type === ok.ON.LegacyModule },
};
function o4(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ok.QJ.Info;
    if (t === ok.QJ.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case ok.ON.NativeLegacy:
            return "var(--yellow-500)";
        case ok.ON.NativeOOP:
            return "var(--green-500)";
        case ok.ON.Flux:
            return "var(--brand-400)";
        case ok.ON.Renderer:
            return "var(--brand-500)";
        case ok.ON.LegacyModule:
            return "var(--yellow-300)";
        case ok.ON.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let o7 = [
    {
        key: "type",
        cellClassName: o$.SZ,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: a } = e,
                n = de(t);
            return (0, r.jsx)("div", {
                className: o$.g$,
                style: { color: o4(t, a) },
                children: (0, r.jsx)(n, { color: "currentColor", size: "sm" }),
            });
        },
    },
    {
        key: "name",
        cellClassName: o$.Cm,
        render(e) {
            let { name: t, type: a, logType: n } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(D.E, {
                        variant: "text-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case ok.QJ.Info:
                                    return "text-strong";
                                case ok.QJ.Warning:
                                    return "text-feedback-warning";
                                case ok.QJ.Error:
                                    return "text-feedback-critical";
                                default:
                                    return "text-subtle";
                            }
                        })(n),
                        children: t,
                    }),
                    (0, r.jsxs)(D.E, { variant: "text-sm/normal", color: "text-subtle", children: ["(", a, ")"] }),
                ],
            });
        },
    },
    {
        key: "timestamp",
        cellClassName: o$.DK,
        render(e) {
            let { timestamp: t } = e;
            return (0, nk.i$)(nv()(t), "h:mm:ss.SSS");
        },
    },
];
function de(e) {
    switch (e) {
        case ok.ON.NativeLegacy:
            return ov.W;
        case ok.ON.NativeOOP:
            return oj.q;
        case ok.ON.Renderer:
        case ok.ON.Flux:
            return ob.v;
        case ok.ON.LegacyModule:
            return of.k;
        case ok.ON.OOPModule:
            return oy.o;
        default:
            return of.k;
    }
}
function dt(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let da = ["__webpack_require__", "fn"],
    dn = ["web.js", "web.js.map"],
    dl = [
        {
            id: "details",
            name: "Details",
            group: a1.fu.NONE,
            render: (e) => {
                let { breadcrumb: t, onClose: a } = e,
                    { name: n, type: l, logType: s, nativeId: i, stack: o, data: c, timestamp: u, pid: m } = t,
                    h = nv()(u),
                    x = de(l);
                return (0, r.jsxs)(d.Ar, {
                    className: o$.bW,
                    children: [
                        (0, r.jsxs)(oN.A, {
                            className: F()(tF.jr, o$.nZ),
                            children: [
                                (0, r.jsx)("div", {
                                    style: { color: o4(l, s) },
                                    className: o$.nr,
                                    children: (0, r.jsx)(x, { color: "currentColor", size: "sm" }),
                                }),
                                (0, r.jsxs)(oN.A.Title, {
                                    wrapperClassName: o$.qd,
                                    children: [
                                        n,
                                        " (",
                                        l,
                                        ")",
                                        (0, r.jsx)(B.D, {
                                            tag: "span",
                                            className: o$.KE,
                                            onClick: () => (0, nA.C)(n),
                                            children: (0, r.jsx)(nb.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(oN.A.Icon, {
                                    icon: nb.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, nA.C)(dt(t));
                                    },
                                }),
                                (0, r.jsx)(oN.A.Icon, { icon: ny.a, tooltip: "Close", onClick: a }),
                            ],
                        }),
                        (0, r.jsxs)(nG, {
                            className: o$.ZK,
                            children: [
                                (0, r.jsx)(nF, {
                                    name: "Timestamp",
                                    copyValue: h.toISOString(),
                                    children: (0, r.jsx)("time", {
                                        dateTime: h.toISOString(),
                                        title: (0, nk.i$)(h, "LLLL"),
                                        children: (0, nk.i$)(h, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, r.jsx)(nF, {
                                    name: "Log Type",
                                    copyValue: s,
                                    children: (0, r.jsx)("code", { children: s }),
                                }),
                                (0, r.jsx)(nF, {
                                    name: "PID",
                                    copyValue: m?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: m?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(nF, {
                                    name: "Native ID",
                                    copyValue: i?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: i?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(nF, {
                                    name: "Data",
                                    copyValue: dt(c),
                                    children: (0, r.jsx)("code", { children: dt(c) }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nF, {
                                        name: "Stack Trace",
                                        copyValue: o,
                                        children: (0, r.jsx)("code", {
                                            children: o.split("\n").map((e, t) => {
                                                let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != a) {
                                                    let [, e, n, l, s] = a,
                                                        i = n.split(/[\\/]/).pop();
                                                    return da.includes(e.trim())
                                                        ? null
                                                        : (0, r.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, r.jsx)("span", {
                                                                          className: o$.e0,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !dn.includes(i ?? "") &&
                                                                          (0, r.jsxs)(r.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, r.jsxs)("span", {
                                                                                      className: o$.lz,
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
    ds = {
        searchType: nS.n.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: a, stack: n, data: l } = e,
                s = [t, a, JSON.stringify(l)];
            return null != n && s.push(n), s;
        },
        throttleMs: 100,
    };
function di() {
    let { ref: e, height: t } = (0, o_.Ay)(),
        a = (0, H.bG)([oO.A], () => oO.A.isModuleLoggingEnabled()),
        [n, l] = o.useState(a),
        [s, i] = o.useState(!1),
        [d, c] = o.useState(null),
        [u, m] = o.useState(Object.keys(o9)),
        [h, x] = (0, H.bG)([oO.A], () => oO.A.getOverlayLoggingBreadcrumbs(), [], oG.D),
        [p, g] = o.useState(null),
        v = p ?? h,
        j = null != p ? -1 : x;
    o.useEffect(() => {
        0 !== j &&
            (s
                ? c(v.reduce((e, t) => ("game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e), 0))
                : c(null));
    }, [s, v, j]);
    let [b, f] = o.useState(""),
        y = o.useMemo(
            () =>
                0 === j
                    ? []
                    : v.filter((e) => {
                          if (s && null != d && e.timestamp < d) return !1;
                          for (let t of u) {
                              let { filter: a } = o9[t];
                              if (a(e)) return !0;
                          }
                          return !1;
                      }),
            [v, u, d, s, j],
        ),
        [E, C] = o.useState(y),
        [_, S] = o.useState(null),
        N = o.useMemo(() => v.find((e) => e.key === _), [v, _]),
        A = o.useCallback((e) => {
            C(e);
        }, []),
        { renderSelectedTab: k } = (0, a1.Ay)({ tabs: dl }, []);
    (0, nN.RT)(b, y, A, ds, [v]);
    let I = o.useCallback((e) => {
            l(e), oC.A.setModuleLogging(e);
        }, []),
        [R, O] = o.useState(!1),
        w = o.useRef(null),
        M = o.useCallback(() => {
            (0, nA.C)(JSON.stringify(y)), O(!0);
        }, [y]);
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
            g(null != e ? JSON.parse(e) : null);
        }, []),
        P = o.useCallback(
            (e) => {
                if (e) return g(null);
                (0, T.openModal)(
                    (e) =>
                        (0, r.jsx)(o5, {
                            modalProps: e,
                            onClose: (t) => {
                                L(t), e.onClose();
                            },
                        }),
                    { modalKey: "breadcrumb-import-panel" },
                    e$.SY,
                );
            },
            [L],
        );
    return (0, r.jsxs)("div", {
        ref: e,
        className: o$.rh,
        children: [
            (0, r.jsxs)("div", {
                className: o$.st,
                children: [
                    (0, r.jsxs)("div", {
                        className: F()(o$._V, o$.XQ),
                        children: [
                            (0, r.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: o$.iR,
                                children: (0, r.jsx)(rJ.S, { label: "Poll Native", checked: n, onChange: (e) => I(e) }),
                            }),
                            (0, r.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: o$.iR,
                                children: (0, r.jsx)(rJ.S, {
                                    label: "Only Active Games",
                                    checked: s,
                                    onChange: (e) => i(e),
                                }),
                            }),
                            (0, r.jsxs)(B.D, {
                                className: o$.ny,
                                onClick: M,
                                children: [
                                    (0, r.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: R ? "Copied" : "Copy All",
                                    }),
                                    R
                                        ? (0, r.jsx)(r8.A, { size: "sm", color: eV.A.unsafe_rawColors.GREEN_330.css })
                                        : (0, r.jsx)(nb.T, { color: "currentColor", size: "sm" }),
                                ],
                            }),
                            (0, r.jsx)(B.D, {
                                className: o$.ny,
                                onClick: () => P(null != p),
                                children: (0, r.jsx)(D.E, {
                                    variant: "text-sm/normal",
                                    color: "currentColor",
                                    children: null != p ? "Clear" : "Import",
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: F()(o$._V, o$.XQ),
                        children: Object.entries(o9).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                B.D,
                                {
                                    className: F()(o$.pb, u.includes(t) && o$.bx),
                                    onClick: () => {
                                        m((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: (0, r.jsx)(D.E, {
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
                        className: o$._V,
                        children: (0, r.jsx)(nC.I, {
                            query: b,
                            onChange: f,
                            onClear: () => f(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: F()(o$.st, o$.CZ),
                children: (0, r.jsx)(tB, {
                    columns: o7,
                    data: E,
                    selectedRowKey: _ ?? void 0,
                    onClickRow: (e) => S(e.key),
                }),
            }),
            null != N &&
                (0, r.jsx)(a0, {
                    className: F()(o$.st, o$.rf),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: k({ breadcrumb: N, onClose: () => S(null) }),
                }),
        ],
    });
}
let dr = o.memo(function () {
        let e = (0, H.bG)([oR.A], () => oR.A.getPopoutInitializationStages());
        return (0, r.jsxs)("div", {
            className: o$.st,
            children: [
                (0, r.jsx)("div", {
                    className: o$.Iv,
                    children: (0, r.jsx)(D.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: "Popout Initialization Stages",
                    }),
                }),
                (0, r.jsx)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", { children: JSON.stringify(e, void 0, 2) }),
                }),
            ],
        });
    }),
    dd = o.memo(function () {
        let e = (0, H.bG)([oO.A], () => oO.A.isStateDebuggingEnabled()),
            t = (0, H.bG)([oO.A], () => oO.A.getDebuggingState());
        return (
            o.useEffect(
                () => (
                    oC.A.setStateDebugging(!0),
                    () => {
                        oC.A.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, r.jsxs)("div", {
                className: o$.st,
                children: [
                    (0, r.jsx)("div", {
                        className: o$.Iv,
                        children: (0, r.jsx)(v.d, {
                            checked: e,
                            onChange: () => oC.A.setStateDebugging(!e),
                            label: "Poll Native Module State",
                        }),
                    }),
                    (0, r.jsx)(D.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: (0, r.jsx)("pre", { children: JSON.stringify(t, void 0, 2) }),
                    }),
                ],
            })
        );
    });
function dc() {
    return (0, r.jsx)(d.Ar, {
        children: (0, r.jsxs)("div", {
            className: F()(tF.nd, o$.rf),
            children: [
                (0, r.jsx)(o8, {}),
                (0, r.jsx)(o6, {}),
                (0, r.jsx)(o3, {}),
                (0, r.jsx)(o1, {}),
                (0, r.jsx)(oX, {}),
                (0, r.jsx)(o0, {}),
                (0, r.jsx)(dr, {}),
                (0, r.jsx)(dd, {}),
            ],
        }),
    });
}
let du = (e) => {
        switch (e) {
            case "Disabled":
                return;
            case "False":
                return !1;
            case "True":
                return !0;
        }
    },
    dm = (e) => (null == e ? "Disabled" : e ? "True" : "False"),
    dh = o.memo(function () {
        let e = (0, oI.wW)(),
            t = (0, H.bG)([oP.Ay], () => oP.Ay.getOverlayKeybind());
        return (0, r.jsxs)("div", {
            className: o$.st,
            children: [
                (0, r.jsx)(z.D, { variant: "heading-lg/semibold", children: "Overlay Default Keybind Experiment" }),
                (0, r.jsx)(z.D, { variant: "heading-md/semibold", children: "Experiment State" }),
                (0, r.jsx)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", {
                        children: JSON.stringify({ ...e, overlayKeybind: (0, oF.dI)(t.shortcut) }, void 0, 2),
                    }),
                }),
                (0, r.jsx)(z.D, { variant: "heading-md/semibold", children: "Overrides" }),
                (0, r.jsx)(x.l, {
                    label: "Overlay User Status",
                    description: "Override whether the current user was a new or existing user",
                    value: dm(e.overrideIsNewOverlayUser),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Existing user", value: "False", id: "False" },
                        { label: "New user", value: "True", id: "True" },
                    ],
                    onSelectionChange: (e) => {
                        (0, oI.sw)(du(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(x.l, {
                    label: "Override Previous Keybind Status",
                    description: "Override whether the user's pre-experiment keybind was the default keybind",
                    value: dm(e.overrideIsUsingDefaultOverlayKeybind),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Using default keybind", value: "True", id: "True" },
                        { label: "Not using default keybind", value: "False", id: "False" },
                    ],
                    onSelectionChange: (e) => {
                        (0, oI.C3)(du(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(z.D, { variant: "heading-md/semibold", children: "Actions" }),
                (0, r.jsx)(h.$, { size: "sm", text: "Reset isNewOverlayUser", onClick: () => (0, oI.xc)() }),
                (0, r.jsx)(h.$, {
                    size: "sm",
                    text: "Reset isUsingDefaultOverlayKeybind",
                    onClick: () => (0, oI.tM)(),
                }),
            ],
        });
    });
function dx() {
    return (0, r.jsx)(d.Ar, {
        children: (0, r.jsx)("div", { className: F()(tF.nd, o$.rf), children: (0, r.jsx)(dh, {}) }),
    });
}
function dp() {
    let [e, t] = o.useState("state");
    return (
        o.useEffect(
            () => (
                tL.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !0 }),
                () => {
                    tL.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !1 });
                }
            ),
            [],
        ),
        (0, r.jsxs)("div", {
            className: F()(tF.nd, o$.nd),
            children: [
                (0, r.jsxs)("div", {
                    className: o$._V,
                    children: [
                        (0, r.jsx)(B.D, {
                            className: F()(o$.k0, "state" === e && o$.a),
                            onClick: () => t("state"),
                            children: (0, r.jsx)(D.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, r.jsx)(B.D, {
                            className: F()(o$.k0, "logging" === e && o$.a),
                            onClick: () => t("logging"),
                            children: (0, r.jsx)(D.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, r.jsx)(B.D, {
                            className: F()(o$.k0, "experiments" === e && o$.a),
                            onClick: () => t("experiments"),
                            children: (0, r.jsx)(D.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, r.jsx)(dc, {}),
                "logging" === e && (0, r.jsx)(di, {}),
                "experiments" === e && (0, r.jsx)(dx, {}),
            ],
        })
    );
}
var dg = a(488428),
    dv = a(73825),
    dj = a(753390),
    db = a(155506),
    df = a(944304),
    dy = a(300233),
    dE = a(599941),
    dC = a(817649),
    d_ = a(4630),
    dS = a(44120),
    dN = a(532794),
    dA = a(216678),
    dk = a(194509),
    dI = a(761705),
    dD = a(65738),
    dT = a(668072);
function dR(e) {
    let { selectedGuildForGuildSub: t } = e,
        a = (0, dE.uk)(t?.id)[0];
    return null != t && null != a
        ? (0, r.jsx)("div", {
              children: a.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(dC.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let dO = function () {
    let [e, t] = o.useState(sj.pe.TIER_2),
        [a, n] = o.useState(null),
        l = (0, H.yK)([ne.A], () => ne.A.getGuildsArray()),
        [s] = (0, H.yK)([rX.A], () => [rX.A.getPremiumSubscription()]),
        i = l.map((e) => ({ id: e.id, value: e, label: e.name })),
        [c, m] = o.useState(i.length > 0 ? i[0].value : null),
        [v, j] = o.useState(""),
        [b, f] = o.useState({ plan_id: sj.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        y = "true" !== b.gift && null != s,
        [E, C] = o.useState(i.length > 0 ? i[0].value : null),
        { analyticsLocations: _ } = (0, a8.Ay)(ty.A.PAYMENT_FLOW_TEST_PAGE),
        [S, N] = o.useState(""),
        [A, k] = o.useState(er.dJq),
        { balance: I, isFetching: T, error: R } = (0, dI.W)(),
        { isSubmitting: O, responseMessage: w, redeemVirtualCurrency: M } = (0, dI.Q)(),
        [L, P] = o.useState(er.dJq),
        [U, G] = o.useState(""),
        [F, B] = o.useState(er.dJq),
        [V, W] = o.useState(er.dJq);
    return (0, r.jsx)(a8.f5, {
        value: _,
        children: (0, r.jsx)(d.Ip, {
            className: dT.XG,
            children: (0, r.jsxs)($.B, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, r.jsxs)($.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Gift",
                                value: e,
                                options: [
                                    { id: "tier_2", value: sj.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: sj.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: sj.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => t(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(dk.A, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: nj.XD.PRIMARY,
                                look: nj.pR.FILLED,
                            }),
                        ],
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsxs)($.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Premium Select Plan",
                                value: a,
                                options: [
                                    { id: "tier_2", value: sj.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: sj.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: sj.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => n(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () => (0, dN.A)({ subscriptionTier: a, analyticsLocations: _ }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsxs)($.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Boost",
                                value: c,
                                options: i,
                                onSelectionChange: (e) => m(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            null != c
                                ? (0, r.jsx)(df.A, { guild: c, analyticsLocation: {} })
                                : (0, r.jsx)("div", { children: "No Guild to boost" }),
                        ],
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsxs)($.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(i_.Anchor, {
                                href: "https://i.dis.gd/createPromo",
                                children: "How to create promotion",
                            }),
                            (0, r.jsxs)($.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(p.k, {
                                        label: "Standalone: Trial Promotion Redemption",
                                        placeholder: "Promotion Code",
                                        value: v,
                                        onChange: (e) => j(e),
                                    }),
                                    (0, r.jsx)(l0.m, {
                                        text: "Need Promotion Code",
                                        shouldShow: v.length < 1,
                                        children: (0, r.jsx)(h.$, {
                                            variant: "primary",
                                            text: "Open Link",
                                            disabled: v.length < 1,
                                            onClick: () => {
                                                window.open(er.BVt.BILLING_PROMOTION_REDEMPTION(v));
                                            },
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Standalone: Gift/Subscription Purchase",
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Plan",
                                value: b.plan_id,
                                options: [
                                    { id: "tier_2", value: sj.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: sj.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: sj.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic" },
                                ],
                                onSelectionChange: (e) => {
                                    f((t) => ({ ...t, plan_id: e }));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(x.l, {
                                label: "Type",
                                value: b.gift,
                                options: [
                                    { id: "gift", value: "true", label: "Gift" },
                                    { id: "not_gift", value: "false", label: "Not Gift" },
                                ],
                                onSelectionChange: (e) => {
                                    f((t) => ({ ...t, gift: e }));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        ],
                    }),
                    (0, r.jsx)(l0.m, {
                        text: "Already subscribed",
                        shouldShow: y,
                        children: (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: y,
                            onClick: () => {
                                window.open(er.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + dg.stringify({ ...b }));
                            },
                        }),
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Redeem Virtual Currency for SKU",
                        children: [
                            (0, r.jsxs)($.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        children: "Virtual Currency Balance:",
                                    }),
                                    T
                                        ? (0, r.jsx)("div", {
                                              className: dT.wG,
                                              children: (0, r.jsx)(ta.y, { type: ta.t.SPINNING_CIRCLE }),
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: dT.dB,
                                              children: [
                                                  null !== R &&
                                                      (0, r.jsxs)(D.E, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              R.message,
                                                          ],
                                                      }),
                                                  (0, r.jsx)(dD.Gy, {
                                                      balance: I ?? 0,
                                                      balanceWidgetMode: dD.k7.SELECTED,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, r.jsx)(p.k, {
                                label: "SKU ID",
                                placeholder: "SKU ID",
                                value: L,
                                onChange: (e) => P(e),
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Redeem Virtual Currency for SKU",
                                loading: O,
                                onClick: () => M(L, (0, eI.A)()),
                            }),
                            null != w && (0, r.jsx)(D.E, { variant: "text-sm/normal", children: w }),
                        ],
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Creator Revenue",
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Premium Server Subscription For",
                                value: E,
                                options: i,
                                onSelectionChange: (e) => C(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(dy.H, {
                                guildId: E?.id,
                                children: (0, r.jsx)(dR, { selectedGuildForGuildSub: E }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsxs)($.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsxs)(u.n, {
                                label: "Activities & Application Payment Modals",
                                children: [
                                    (0, r.jsx)(p.k, {
                                        label: "Application Id",
                                        placeholder: "Application Id",
                                        value: S,
                                        onChange: N,
                                    }),
                                    (0, r.jsx)(p.k, {
                                        label: "Sku Id",
                                        placeholder: "Sku Id",
                                        value: A,
                                        onChange: (e) => k(e),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open App Subs Modal for Activity",
                                onClick: () =>
                                    (0, d_.openIAPPurchaseModal)({
                                        applicationId: S,
                                        skuId: A,
                                        openPremiumPaymentModal: () => !0,
                                        analyticsLocations: [],
                                        analyticsLocationObject: { page: er.liQ.IN_APP },
                                        context: er.BRT.APP,
                                    }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsx)($.B, {
                        direction: "vertical",
                        gap: 8,
                        children: (0, r.jsx)(u.n, {
                            label: "Standard Payment Modal Test",
                            children: (0, r.jsxs)($.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(p.k, {
                                        label: "Application Id",
                                        hideLabel: !0,
                                        placeholder: "Application Id",
                                        value: U,
                                        onChange: G,
                                    }),
                                    (0, r.jsx)(p.k, {
                                        label: "SKU ID",
                                        hideLabel: !0,
                                        placeholder: "SKU ID",
                                        value: F,
                                        onChange: (e) => B(e),
                                    }),
                                    (0, r.jsx)(h.$, {
                                        variant: "primary",
                                        text: "Open Premium Apps Payment Modal for SKU",
                                        onClick: () =>
                                            (0, dA.q)({
                                                applicationId: U,
                                                skuId: F,
                                                analyticsLocations: _,
                                                checkoutFlow: db.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                            }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsxs)($.B, {
                        direction: "horizontal",
                        align: "end",
                        gap: 8,
                        children: [
                            (0, r.jsx)(p.k, {
                                label: "Collectibles Payment Modal Test",
                                placeholder: "SKU ID",
                                value: V,
                                onChange: (e) => W(e),
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open Collectibles Payment Modal for SKU",
                                onClick: () => (0, dS.A)({ skuId: V, analyticsLocations: _ }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsx)(u.n, {
                        label: "Helpers",
                        children: (0, r.jsxs)($.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionPlanStore",
                                    onClick: () => (0, dv.YG)(),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, dj.uZ)(),
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsx)(u.n, {
                        label: "Dismissible Content Framework",
                        children: (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Reset DismissibleContentFrameworkStore",
                            onClick: () => (0, ly.Ab)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
var dw = a(219887),
    dM = a(459357),
    dL = a(885180),
    dP = a(742810),
    dU = a(500380),
    dG = a(102609),
    dF = a(710195),
    dB = a(211287),
    dV = a(295405),
    d$ = a(469040);
let dW = [
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
    dz = {
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
    dH = [
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
    dK = {
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
    dY = [
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
    dq = {
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
function dJ() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        [i, c] = o.useState(null),
        [u, m] = o.useState(null),
        [p, g] = o.useState("pm_card_us"),
        [v, j] = o.useState(!1),
        b = Object.values((0, tf.bG)([dV.A], () => dV.A.paymentSources)),
        f = dz[e],
        y = async () => {
            let t = p;
            "" === t && (t = "pm_card_us"),
                await n4.Bo.post({
                    url: "/debug/payment-source",
                    body: { token: t, address: "US" === e ? l : "CA" === e ? u : null },
                    rejectWithError: !1,
                }),
                await (0, dj.$o)();
        },
        E = async () => {
            await n4.Bo.del({ url: "/debug/payment-source", rejectWithError: !1 }), await (0, dj.$o)();
        },
        C = async () => {
            await n4.Bo.del({ url: "/debug/rate-limits", rejectWithError: !1 }), window.location.reload();
        };
    return (
        o.useEffect(() => {
            (0, dj.$o)();
        }, []),
        (0, r.jsx)(d.Ip, {
            className: tF.nd,
            children: (0, r.jsxs)("div", {
                className: sS.l$,
                children: [
                    (0, r.jsxs)(D.E, {
                        style: { marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: [" ", "Manage Payment Sources", " "],
                    }),
                    (0, r.jsxs)("div", {
                        className: sS.Uo,
                        children: [
                            (0, r.jsx)(ae.Z, {
                                selectionMode: "single",
                                label: "Card Type",
                                value: e,
                                options: dW
                                    .filter((e) => !("disabled" in e && e.disabled))
                                    .map((e) => {
                                        let { value: t, label: a } = e;
                                        return {
                                            id: t,
                                            value: t,
                                            label: a,
                                            leading: (0, r.jsx)("img", {
                                                alt: "",
                                                className: d$.bI,
                                                src: (0, dU.t)(t),
                                            }),
                                        };
                                    }),
                                onSelectionChange: (e) => {
                                    t(e), g(dz[e][0].value), j(1 === dz[e].length);
                                },
                            }),
                            "US" === e &&
                                (0, r.jsx)(x.l, {
                                    selectionMode: "single",
                                    label: "US Address",
                                    hideLabel: !0,
                                    value: a,
                                    options: dH.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        n(e), s(dK[e] ?? null);
                                    },
                                }),
                            "CA" === e &&
                                (0, r.jsx)(x.l, {
                                    selectionMode: "single",
                                    label: "CA Address",
                                    hideLabel: !0,
                                    value: i,
                                    options: dY.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        c(e), m(dq[e] ?? null);
                                    },
                                }),
                            (0, r.jsx)(x.l, {
                                selectionMode: "single",
                                label: "Card Token",
                                hideLabel: !0,
                                value: p,
                                options: f.map((e) => {
                                    let { value: t, label: a } = e;
                                    return { id: t, value: t, label: a };
                                }),
                                onSelectionChange: g,
                                disabled: v,
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                size: "sm",
                                text: "Create Stripe Credit Card",
                                onClick: y,
                            }),
                            b.length > 0 &&
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Delete All Payment Sources",
                                    onClick: E,
                                }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                size: "sm",
                                text: "Reset API Rate limits and reload app",
                                onClick: C,
                            }),
                        ],
                    }),
                    (0, r.jsx)(D.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Generate Gift Card PIN",
                    }),
                    (0, r.jsx)(d5, {}),
                    (0, r.jsx)(D.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Experiment Overrides",
                    }),
                    (0, r.jsx)(d8, {}),
                    (0, r.jsx)(D.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Existing Payment Sources",
                    }),
                    b.map((e) => (0, r.jsx)(d9, { paymentSource: e }, e.id)),
                ],
            }),
        })
    );
}
let dQ = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0)" },
        { id: "1", value: "1", label: "Treatment (1)" },
    ],
    dX = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Legacy checkout" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Unified checkout" },
    ],
    dZ = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Gift cards disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Gift cards enabled" },
    ],
    d0 = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Payment elements disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Payment elements enabled" },
    ],
    d1 = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Orb redemption via legacy" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Orb redemption via orders" },
    ];
function d2(e) {
    let { experimentName: t, options: a = dQ } = e,
        n = (0, tf.bG)([dF.A, nD.default], () => {
            let e = nD.default.getId(),
                a = dF.A.getAssignment("user", e, t);
            return a?.isOverride === !0 ? String(a.variantId) : "none";
        }),
        l = o.useCallback(
            (e) => {
                (0, dG.t$)(dG.l5.APEX, t, "none" === e ? null : Number(e));
            },
            [t],
        );
    return (0, r.jsx)(x.l, { selectionMode: "single", label: t, value: n, options: [...a], onSelectionChange: l });
}
function d8() {
    return (0, r.jsxs)($.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsx)(d2, { experimentName: dP.W2.definition.name, options: dX }),
            (0, r.jsx)(d2, { experimentName: dP._$.definition.name, options: dX }),
            (0, r.jsx)(d2, { experimentName: dM.A.definition.name, options: dZ }),
            (0, r.jsx)(d2, { experimentName: dL._.definition.name, options: d0 }),
            (0, r.jsx)(d2, { experimentName: dB.A.definition.name, options: d1 }),
        ],
    });
}
let d3 = [
        { id: "US", value: "US", label: "United States (USD)" },
        { id: "CA", value: "CA", label: "Canada (CAD)" },
        { id: "FR", value: "FR", label: "France (EUR)" },
        { id: "GB", value: "GB", label: "United Kingdom (GBP)" },
        { id: "DE", value: "DE", label: "Germany (EUR)" },
    ],
    d6 = { US: "usd", CA: "cad", FR: "eur", GB: "gbp", DE: "eur" };
function d5() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState("500"),
        [l, s] = o.useState(null),
        [i, d] = o.useState(!1),
        [c, u] = o.useState(!1),
        [m, g] = o.useState(null),
        v = parseInt(a, 10),
        j = !isNaN(v) && v >= 500 && v <= 5e3,
        b = async () => {
            if (j) {
                d(!0), g(null), s(null), u(!1);
                try {
                    let t = await n4.Bo.post({
                        url: "/billing/gift-card/create-on-demand-pin",
                        body: { country: e, currency: d6[e], amount: v },
                        rejectWithError: !0,
                    });
                    s(t.body.pin);
                } catch (e) {
                    g(e instanceof Error ? e.message : "Failed to generate PIN");
                } finally {
                    d(!1);
                }
            }
        };
    return (0, r.jsxs)($.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsxs)($.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, r.jsx)(x.l, {
                        selectionMode: "single",
                        label: "Gift Card Country",
                        value: e,
                        options: d3,
                        onSelectionChange: t,
                    }),
                    (0, r.jsx)(p.k, {
                        label: "Amount (500\u20135000)",
                        type: "number",
                        value: a,
                        onChange: n,
                        min: 500,
                        max: 5e3,
                    }),
                    (0, r.jsx)(h.$, {
                        variant: "primary",
                        size: "sm",
                        text: "Generate Gift Card PIN",
                        onClick: b,
                        loading: i,
                        disabled: !j,
                    }),
                ],
            }),
            null != l &&
                (0, r.jsxs)($.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(p.k, { label: "Generated PIN", value: l, onChange: () => {}, readOnly: !0 }),
                        (0, r.jsx)(h.$, {
                            variant: "secondary",
                            size: "sm",
                            text: c ? "Copied!" : "Copy",
                            onClick: () => {
                                navigator.clipboard.writeText(l), u(!0), setTimeout(() => u(!1), 2e3);
                            },
                        }),
                    ],
                }),
            null != m && (0, r.jsx)(V.w, { type: "critical", children: m }),
        ],
    });
}
function d9(e) {
    let { paymentSource: t } = e,
        a = async () => {
            await n4.Bo.patch({ url: er.Rsh.BILLING_PAYMENT_SOURCE(t.id), body: { default: !0 }, rejectWithError: !1 }),
                await (0, dj.$o)();
        };
    return (0, r.jsxs)("div", {
        className: sS.bd,
        children: [
            (0, r.jsx)(dw.A, { locale: "en-US", paymentSource: t, showLabels: !0, showPaymentSourceIcon: !0 }, t.id),
            (0, r.jsx)("img", { alt: t.country, className: d$.bI, src: (0, dU.t)(t.country) }),
            t.isDefault
                ? (0, r.jsx)(D.E, { variant: "text-sm/medium", children: "(Default)" })
                : (0, r.jsx)(h.$, { variant: "secondary", size: "sm", text: "Set as Default", onClick: a }),
        ],
    });
}
var d4 = a(706712),
    d7 = a(367727),
    ce = a(658878);
function ct() {
    return (0, r.jsx)(d.Ip, { className: ce.kL, children: (0, r.jsx)(ca, {}) });
}
function ca() {
    let e = o.useCallback(() => {
            (0, lO._N)(ao.M.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, d7.FZ)(ao.M.NITRO_TENURE_BADGE_LEVEL_UP),
        a = null != t ? new Date(t) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(z.D, { className: ce.wx, variant: "heading-lg/semibold", children: "Tenure Badges" }),
            (0, r.jsxs)("p", {
                children: [
                    "Level Up DC:\xa0",
                    null != a && (0, r.jsxs)("b", { children: ["Dismissed (", a.toLocaleDateString(), ")"] }),
                    null == a && (0, r.jsx)("b", { children: "Not Dismissed" }),
                ],
            }),
            (0, r.jsx)("div", {
                className: ce.PW,
                children: (0, r.jsx)(h.$, { variant: "primary", text: "Reset Level Up DC", onClick: e }),
            }),
        ],
    });
}
var cn = a(136722),
    cl = a(576705),
    cs = a(309010),
    ci = a(558393),
    cr = a(719366),
    co = a(447737);
function cd(e) {
    let { title: t, can: a } = e,
        n = a ? r8.A : Q.P,
        l = (0, r.jsx)("div", {
            className: F()(co.v_, a ? co.uU : co.Ss),
            children: (0, r.jsx)(n, { className: co.Kk }),
        });
    return (0, r.jsxs)("div", {
        className: co.z8,
        children: [
            l,
            (0, r.jsx)("div", {
                className: co.rv,
                children: (0, r.jsx)(D.E, { variant: "text-md/normal", children: t }),
            }),
        ],
    });
}
function cc() {
    let e = (0, H.bG)([cs.A], () => cs.A.getChannelId()),
        t = (0, H.bG)([nt.A], () => nt.A.getGuildId()),
        a = (0, H.bG)([aj.A], () => aj.A.getChannel(e)),
        n = (0, H.bG)([ne.A], () => ne.A.getGuild(t)),
        l = (0, H.bG)([cl.A], () => cl.A.computePermissions(a)),
        s = (0, H.bG)([cl.A], () => cl.A.computePermissions(n)),
        i = (0, av.Ay)(a, !0),
        o = null != a ? (0, cr.mW)(a, !1) : null,
        d = null != n ? ci.A.getGuildPermissionSpecMap(n) : null,
        c = Object.values(o ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = cn.zy(l, a);
            return (0, r.jsx)(cd, { title: t, can: n }, t);
        }),
        u = Object.values(d ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = cn.zy(s, a);
            return (0, r.jsx)(cd, { title: t, can: n }, t);
        });
    return (0, r.jsx)("div", {
        className: F()(tF.nd, co.nd),
        children: (0, r.jsxs)("div", {
            className: co.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: co.uW,
                    children: [
                        (0, r.jsx)(z.D, {
                            variant: "heading-md/semibold",
                            children: null != i ? `Permissions in ${i}` : "No channel selected",
                        }),
                        c,
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: co.uW,
                    children: [
                        (0, r.jsx)(z.D, {
                            variant: "heading-md/semibold",
                            children: null != n ? `Permissions in ${n.name}` : "No guild selected",
                        }),
                        u,
                    ],
                }),
            ],
        }),
    });
}
var cu = a(873298),
    cm = a(775602),
    ch = a(363195),
    cx = a(885386),
    cp = a(631670),
    cg = a(817281),
    cv = a(955572),
    cj = a(56348),
    cb = a(385803),
    cf = a(381941);
let cy = [er.NJ8.DARK, er.NJ8.LIGHT, er.NJ8.DARKER, er.NJ8.MIDNIGHT],
    cE = [cu.NS.COMPACT, cu.NS.COZY, cu.NS.DEFAULT];
function cC(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function c_() {
    let e,
        t =
            ((e = en.default.getCurrentUser()),
            r4.Ay.canUseClientThemes(e) ? Object.keys(cb.ag).map((e) => Number(e)) : []),
        a = t.length > 0 && Math.random() > 0.7;
    try {
        if (a) {
            let e,
                a = [...t, null],
                n = cC(a);
            if (null != n) {
                let t = cb.ag[n];
                e = t?.theme ?? er.NJ8.DARK;
            } else e = cC([er.NJ8.DARK, er.NJ8.DARKER, er.NJ8.MIDNIGHT]);
            await cg.u_(
                { theme: e, backgroundGradientPresetId: n ?? void 0, customUserThemeSettings: void 0 },
                lO.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = cC(cy);
            await cg.u_(
                { theme: e, backgroundGradientPresetId: void 0, customUserThemeSettings: void 0 },
                lO.Sb.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function cS() {
    let e = tC.A.purchases,
        t = (0, eR.x9)(e),
        a = (0, eR.$W)(e),
        n = t.length > 0,
        l = a.length > 0;
    if (n || l)
        try {
            let e = {};
            n && (e.avatarDecoration = cC([...t, null])), l && (e.nameplate = cC([...a, null])), (0, to.p)(e);
            let s = td.A.getPendingChanges(),
                i = (0, cj.Sk)(s);
            await (0, cp._L)(i).finally(cp.pZ);
        } catch (e) {}
}
function cN() {
    try {
        let e = cC(er.hH7.FONT_SIZES);
        (0, cv.XS)(e);
        let t = cC(cf.qh);
        (0, cv.AC)(t);
        let a = cC(cE);
        cx.Xi.updateSetting(a);
    } catch (e) {}
}
function cA() {
    (0, tm.Bf)();
    let e = (0, H.bG)([en.default], () => en.default.getCurrentUser()),
        t = cx.eh.useSetting(),
        a = (0, H.bG)([ch.A], () => ch.A.theme),
        n = t.backgroundGradientPresetId,
        l = (0, H.bG)([tC.A], () => tC.A.purchases),
        s = (0, eR.x9)(l),
        i = (0, eR.$W)(l),
        d = e?.avatarDecoration?.skuId,
        c = e?.collectibles?.nameplate?.skuId,
        u = null != d ? (s.find((e) => e.skuId === d) ?? null) : null,
        m = null != c ? (i.find((e) => e.skuId === c) ?? null) : null,
        x = (0, H.bG)([tE.A], () => tE.A.getProduct(u?.skuId)),
        p = (0, H.bG)([tE.A], () => tE.A.getProduct(m?.skuId)),
        g = (0, H.bG)([cm.A], () => cm.A.fontSize),
        v = (0, H.bG)([cm.A], () => cm.A.messageGroupSpacing),
        j = cx.Xi.useSetting();
    return (
        o.useEffect(() => {
            let e = en.default.getCurrentUser(),
                t = cx.eh.getSetting(),
                a = tC.A.purchases,
                n = (0, eR.x9)(a),
                l = (0, eR.$W)(a),
                s = ch.A.theme,
                i = t.backgroundGradientPresetId,
                r = e?.avatarDecoration?.skuId,
                o = e?.collectibles?.nameplate?.skuId,
                d = null != r ? (n.find((e) => e.skuId === r) ?? null) : null,
                c = null != o ? (l.find((e) => e.skuId === o) ?? null) : null,
                u = cm.A.fontSize,
                m = cm.A.messageGroupSpacing,
                h = cx.Xi.getSetting();
            return () => {
                try {
                    cg.u_(
                        { theme: s, backgroundGradientPresetId: i ?? void 0, customUserThemeSettings: void 0 },
                        lO.Sb.INFREQUENT_USER_ACTION,
                    ),
                        (0, to.p)({ avatarDecoration: d, nameplate: c });
                    let e = td.A.getPendingChanges(),
                        t = (0, cj.Sk)(e);
                    (0, cp._L)(t).finally(cp.pZ), (0, cv.XS)(u), (0, cv.AC)(m), cx.Xi.updateSetting(h);
                } catch (e) {}
            };
        }, []),
        (0, r.jsxs)("div", {
            className: lU.kL,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(z.D, {
                            variant: "heading-lg/semibold",
                            children: "Randomize customization settings",
                        }),
                        (0, r.jsx)(D.E, {
                            variant: "text-md/normal",
                            children:
                                "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state.",
                        }),
                        (0, r.jsx)(h.$, { variant: "primary", size: "sm", text: "Randomize Theme", onClick: c_ }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: cS,
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: cN,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(z.D, { variant: "heading-lg/semibold", children: "Current Settings" }),
                        (0, r.jsxs)(D.E, { variant: "text-md/normal", children: ["Theme: ", a] }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-md/normal",
                            children: ["Client Theme ID:", " ", null != n ? cb.ag[n]?.getName() : "None"],
                        }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-md/normal",
                            children: ["Avatar Decoration: ", x?.name ?? "None"],
                        }),
                        (0, r.jsxs)(D.E, { variant: "text-md/normal", children: ["Nameplate: ", p?.name ?? "None"] }),
                        (0, r.jsxs)(D.E, { variant: "text-md/normal", children: ["Font Size: ", g, "px"] }),
                        (0, r.jsxs)(D.E, { variant: "text-md/normal", children: ["Message Spacing: ", v] }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-md/normal",
                            children: [
                                "UI Density: ",
                                j,
                                " (",
                                (function (e) {
                                    switch (e) {
                                        case cu.NS.COMPACT:
                                            return "Compact";
                                        case cu.NS.COZY:
                                            return "Cozy";
                                        case cu.NS.DEFAULT:
                                            return "Default";
                                        case cu.NS.RESPONSIVE:
                                            return "Responsive";
                                        default:
                                            return "Unknown";
                                    }
                                })(j),
                                ")",
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var ck = a(885574),
    cI = a(311678),
    cD = a(508274),
    cT = a(837529);
let cR = [5793266, 2303016],
    cO = [
        { id: "nitro", label: "Nitro", value: "nitro" },
        { id: "non-nitro", label: "Non-Nitro", value: "non-nitro" },
    ];
function cw() {
    let { themeOverride: e, setThemeOverride: t, savedClientTheme: a, setSavedClientTheme: n } = (0, cT.Zt)(),
        l = (0, eu.Ay)(),
        s = (0, H.bG)([ad.A], () => ad.A.settings.appearance?.clientThemeSettings),
        i =
            s?.customUserThemeSettings != null &&
            null != s.customUserThemeSettings.colors &&
            s.customUserThemeSettings.colors.length > 0;
    function o() {
        null != a && ((0, cg.u_)({ theme: a.theme, customUserThemeSettings: a.customUserThemeSettings }), n(null));
    }
    return (0, r.jsx)(d.Ar, {
        children: (0, r.jsxs)($.B, {
            gap: 16,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(cI.N, {
                            collapsibleContent: (0, r.jsxs)($.B, {
                                gap: 8,
                                padding: 4,
                                children: [
                                    (0, r.jsx)(D.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children:
                                            "This panel allows you to override the theme and theme colors that are used when rendering user profiles. The overrides you set here will apply to all user profiles, not just your own.",
                                    }),
                                    (0, r.jsx)(D.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children:
                                            "The intended use case for this tool is to allow you to preview both Nitro and non-Nitro profile component styles across a variety of user profiles regardless of their Nitro status or chosen theme colors.",
                                    }),
                                ],
                            }),
                            children: (e) => {
                                let { onClick: t } = e;
                                return (0, r.jsx)(h.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "What is this?",
                                    icon: ck.m,
                                    onClick: t,
                                });
                            },
                        }),
                        (0, r.jsx)(g.c, {}),
                    ],
                }),
                null == e
                    ? (0, r.jsx)(h.$, {
                          variant: "primary",
                          text: "Enable Theme Override",
                          onClick: () => t({ mode: "nitro", themeType: null, themeColors: cR }),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(sr.e, {
                                  children: (0, r.jsx)(h.$, {
                                      variant: "critical-primary",
                                      text: "Clear Theme Override",
                                      onClick: function () {
                                          o(), t(null);
                                      },
                                  }),
                              }),
                              (0, r.jsx)(x.l, {
                                  label: "Profile Type",
                                  selectionMode: "single",
                                  value: e.mode,
                                  options: cO,
                                  onSelectionChange: (a) => t({ ...e, mode: a }),
                              }),
                              "nitro" === e.mode
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(v.d, {
                                                label: "Disable Banner",
                                                checked: !0 === e.disableBanner,
                                                onChange: (a) => t({ ...e, disableBanner: a }),
                                            }),
                                            (0, r.jsx)(h.$, {
                                                variant: "secondary",
                                                text: "Reset Colors",
                                                onClick: () => t({ ...e, themeColors: cR }),
                                            }),
                                            (0, r.jsxs)($.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Primary Color",
                                                    }),
                                                    (0, r.jsx)(cD.VN, {
                                                        wrapperComponentType: "div",
                                                        showEyeDropper: !0,
                                                        eagerUpdate: !0,
                                                        value: e.themeColors?.[0] ?? 0,
                                                        onChange: (a) =>
                                                            t({ ...e, themeColors: [a, e.themeColors?.[1] ?? null] }),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)($.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Secondary Color",
                                                    }),
                                                    (0, r.jsx)(cD.VN, {
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
                                  : (0, r.jsxs)($.B, {
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(x.l, {
                                                label: "Theme Type",
                                                selectionMode: "single",
                                                value: e.themeType,
                                                options: Object.values(er.NJ8).map((e) => ({
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
                                                        (0, r.jsx)(D.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-feedback-warning",
                                                            children:
                                                                "You have an active custom theme so setting a theme type does nothing.",
                                                        }),
                                                        (0, r.jsx)(D.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children:
                                                                "Your custom theme will be saved and can be restored manually, or automatically when you clear the override.",
                                                        }),
                                                        (0, r.jsx)(h.$, {
                                                            variant: "critical-secondary",
                                                            size: "sm",
                                                            text: "Use System Theme",
                                                            onClick: function () {
                                                                s?.customUserThemeSettings != null &&
                                                                    n({
                                                                        theme: l,
                                                                        customUserThemeSettings:
                                                                            s.customUserThemeSettings,
                                                                    }),
                                                                    (0, cg.u_)({ theme: "system" });
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            null != a &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsx)(D.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children:
                                                                "Your custom theme will be automatically restored when you clear the override.",
                                                        }),
                                                        (0, r.jsx)(h.$, {
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
var cM = a(141931),
    cL = a(306173),
    cP = a(587626),
    cU = a(237984),
    cG = a(43203),
    cF = a(349435),
    cB = a(674272),
    cV = a(466034),
    c$ = a(10094),
    cW = a(683760);
let cz = () => {
    let e = (0, H.bG)([en.default], () => en.default.getCurrentUser()),
        t = (0, H.bG)([cW.A], () => {
            let e = cW.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        a = (0, H.bG)([cW.A], () => cW.A.getPremiumTypeOverride());
    return (0, r.jsxs)($.B, {
        gap: 16,
        children: [
            (0, r.jsx)(x.l, {
                label: "Override Client-Side Premium Type",
                options: sj.Jm,
                value: a,
                onSelectionChange: (t) => {
                    (0, c$.O)(t, e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(lV.Q, {
                onClick: () => {
                    (0, c$.O)(sj.$I, e);
                },
                text: "Reset premium type override",
            }),
            (0, r.jsx)(ig.J, {
                label: "Override Client-Side Account Created At Date",
                value: nv()(t),
                onSelect: (e) => {
                    var t;
                    return (t = e.toISOString()), void (0, c$.Y)(new Date(t));
                },
            }),
            (0, r.jsx)(lV.Q, { onClick: () => (0, c$.Y)(void 0), text: "Reset account created at override" }),
        ],
    });
};
var cH = a(19575),
    cK = a(327337),
    cY = a(431804),
    cq = a(163653),
    cJ = a(373378);
function cQ() {
    throw Error("Send help");
}
function cX() {
    let e = cx.j0.useSetting(),
        [t, n] = o.useState(!1);
    return t
        ? {}
        : (0, r.jsxs)(d.Ip, {
              children: [
                  (0, r.jsx)("div", { className: F()(cq.N, cJ.SX), children: (0, r.jsx)(cz, {}) }),
                  (0, r.jsx)("div", {
                      className: F()(cq.N, cJ.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () => (0, cB.A)({ source: cY.y.KEYBIND }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: F()(cq.N, cJ.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e;
                              return (
                                  (e = cs.A.getChannelId() ?? "21154681615024128"),
                                  void (0, T.openModalLazy)(
                                      async () => {
                                          let { default: t } = await Promise.all([
                                              a.e("73220"),
                                              a.e("70940"),
                                              a.e("2033"),
                                              a.e("82830"),
                                              a.e("19959"),
                                          ]).then(a.bind(a, 131882));
                                          return (a) =>
                                              (0, r.jsx)(t, {
                                                  otherUserId: "9876543210",
                                                  channelId: e,
                                                  warningId: "test-warning-id",
                                                  warningType: cF._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                  ...a,
                                              });
                                      },
                                      { modalKey: cK.V },
                                  )
                              );
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: F()(cq.N, cJ.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Captcha Test Tool",
                          onClick: () =>
                              void (0, T.openModalLazy)(
                                  async () => {
                                      let { default: e } = await a.e("17724").then(a.bind(a, 563255));
                                      return (t) => (0, r.jsx)(e, { ...t });
                                  },
                                  { onCloseCallback: void 0 },
                              ),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: F()(cq.N, cJ.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Accept Invite Modal",
                          onClick: () => (0, cG.$)("fortnite", "DevTools Quick Actions"),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: F()(cq.N, cJ.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: cL.Oy,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: F()(cq.N, cJ.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Store Error",
                          onClick: () => {
                              let e = cP.A.getSocket();
                              tL.h.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((t) => {
                                  e.resetSocketOnDispatchError({ error: t, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
                              });
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: F()(cq.N, cJ.QB),
                      children: (0, r.jsx)(v.d, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => cx.j0.updateSetting(e),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: F()(cq.N, cJ.QB),
                      children: [
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, cU.o)(),
                          }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Reset Socket",
                              onClick: () => {
                                  cP.A.getSocket().close(), cP.A.getSocket().connect();
                              },
                          }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Clear Caches",
                              onClick: () => {
                                  tL.h.dispatch({
                                      type: "CLEAR_CACHES",
                                      reason: "Requested by user",
                                      preventWritingCachesAgainThisSession: !0,
                                      resetSocket: !0,
                                  });
                              },
                          }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Show TOTP Success",
                              onClick: () => (0, cV.sy)(!0),
                          }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Trigger Suspicious Sessions Notifications",
                              onClick: () => {
                                  n4.Bo.post({ url: er.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                              },
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: F()(cq.N, cJ.QB),
                      children: [
                          (0, r.jsx)(x.l, {
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
                              ],
                              onSelectionChange: (e) => null != e && cH.Ay.crash(e),
                          }),
                          (0, r.jsx)(x.l, {
                              label: "Trigger JS crash",
                              hideLabel: !0,
                              selectionMode: "single",
                              value: void 0,
                              options: [
                                  { label: "Native JS crash", value: void 0, id: "native_js_crash" },
                                  {
                                      label: "Delayed exception in renderer process",
                                      value: cM.qQ.RendererProcessDelayed,
                                      id: "delayed_exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in renderer process",
                                      value: cM.qQ.RendererProcess,
                                      id: "exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in main process",
                                      value: cM.qQ.MainProcess,
                                      id: "exception_in_main_process",
                                  },
                              ],
                              onSelectionChange: (e) => (null != e ? void cH.Ay.triggerJSException(e) : void 0),
                          }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "React Crash",
                              onClick: () => n(!0),
                          }),
                          (0, r.jsx)(h.$, { variant: "primary", size: "sm", text: "onClick Throw", onClick: cQ }),
                      ],
                  }),
              ],
          });
}
var cZ = a(593924),
    c0 = a(653887),
    c1 = a(105596);
function c2() {
    let e = Object.keys(cZ).map((e) => (0, r.jsx)(c6, { riveName: e }, e));
    return (0, r.jsx)(d.Ar, {
        style: { maxHeight: "100%" },
        children: (0, r.jsxs)($.B, {
            gap: 24,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsx)(z.D, { variant: "heading-lg/medium", children: "Rive Inspector" }),
                (0, r.jsx)(D.E, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to view the animation and interact with its data binding configuration.",
                }),
                (0, r.jsx)(c8, {}),
                (0, r.jsx)(z.D, { variant: "heading-lg/medium", children: "Rive Overrides" }),
                (0, r.jsx)(D.E, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to replace an existing Rive animation in the app with the new one. Useful for previewing updated versions of existing animations before uploading them via the Rive pipeline.",
                }),
                e,
            ],
        }),
    });
}
function c8() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        [i, d] = o.useState([]),
        c = o.useRef(null),
        [u, m] = o.useState(400),
        [h, x] = o.useState(400),
        g = o.useCallback(() => {
            setTimeout(() => {
                s(c.current?.getProperties() ?? {}), d(c.current?.getArtboards() ?? []), n({});
            }, 1e3);
        }, []),
        v = o.useCallback(
            (e, t) => {
                null != a && n((a) => ({ ...a, [e]: { type: l?.[e]?.type, value: t } }));
            },
            [l, a],
        ),
        j = o.useCallback((e) => {
            s(null), n(null), t(e);
        }, []);
    return (0, r.jsxs)($.B, {
        gap: 16,
        children: [
            (0, r.jsx)(c6, { riveName: "Rive inspector", onRiveLoad: j }),
            null != e &&
                (0, r.jsx)("div", {
                    style: { width: u, height: h },
                    children: (0, r.jsx)(c0._, { src: e, ref: c, onLoad: g, dynamicDataBinding: a ?? {} }),
                }),
            null != e && null == a ? (0, r.jsx)(ta.y, {}) : null,
            null != a &&
                (0, r.jsxs)($.B, {
                    children: [
                        (0, r.jsxs)($.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(z.D, { variant: "heading-lg/medium", children: "Dimensions" }),
                                (0, r.jsx)(p.k, {
                                    type: "number",
                                    label: "width",
                                    value: u.toString(),
                                    onChange: (e) => m(parseInt(e)),
                                }),
                                (0, r.jsx)(p.k, {
                                    type: "number",
                                    label: "height",
                                    value: h.toString(),
                                    onChange: (e) => x(parseInt(e)),
                                }),
                            ],
                        }),
                        (0, r.jsxs)($.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(z.D, { variant: "heading-lg/medium", children: "Data Binding" }),
                                Object.keys(l ?? {}).map((e) =>
                                    (0, r.jsx)(
                                        c3,
                                        {
                                            property: e,
                                            type: l?.[e]?.type,
                                            value: a?.[e]?.value ?? l?.[e]?.value,
                                            onChange: (t) => v(e, t),
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
function c3(e) {
    let { property: t, type: a, value: n, onChange: l, artboards: s } = e;
    return "string" === a
        ? (0, r.jsx)(p.k, { label: t, value: n, onChange: (e) => l(e) })
        : "number" === a
          ? (0, r.jsx)(p.k, { type: "number", label: t, value: n, onChange: (e) => l(parseInt(e)) })
          : "boolean" === a
            ? (0, r.jsx)(v.d, { label: t, checked: n, onChange: (e) => l(e) })
            : "trigger" === a
              ? (0, r.jsx)(h.$, { text: `Trigger ${t}`, onClick: () => l(Number.isSafeInteger(n) ? n + 1 : 1) })
              : "image" === a
                ? (0, r.jsx)(p.k, { label: t, value: n, onChange: (e) => l(e) })
                : "color" === a
                  ? (0, r.jsx)(ae.Z, {
                        selectionMode: "single",
                        label: t,
                        value: n,
                        onSelectionChange: (e) => l(e),
                        closeOnSelect: !0,
                        placeholder: "Select a color...",
                        options: Object.entries(eV.A.colors).map((e) => {
                            let [t, a] = e;
                            return { label: t, value: a, id: t };
                        }),
                    })
                  : "artboard" === a
                    ? (0, r.jsx)(ae.Z, {
                          selectionMode: "single",
                          label: t,
                          value: n,
                          onSelectionChange: (e) => l(e),
                          closeOnSelect: !0,
                          placeholder: "Select an artboard...",
                          options: s.map((e) => ({ label: e, value: e, id: e })),
                      })
                    : null;
}
function c6(e) {
    let { riveName: t, onRiveLoad: a } = e,
        n = cZ[t]?.riveSrc,
        l = null == n,
        s = o.useRef(null),
        i = (0, c1.Gy)(n);
    return (0, r.jsxs)(
        $.B,
        {
            gap: 8,
            children: [
                (0, r.jsx)("label", { children: t }),
                (0, r.jsxs)($.B, {
                    justify: "space-between",
                    direction: "horizontal",
                    align: "center",
                    children: [
                        (0, r.jsx)("input", {
                            type: "file",
                            accept: ".riv",
                            onChange: (e) => {
                                let t = e.target.files?.[0];
                                if (null == t) return;
                                let l = new FileReader();
                                (l.onload = (e) => {
                                    let t = e.target?.result;
                                    null != n && (0, c1.DS)(n, t), a?.(t);
                                }),
                                    l.readAsArrayBuffer(t);
                            },
                            ref: s,
                        }),
                        (0, r.jsx)(eG.K, {
                            "aria-label": `Clear override for ${t}`,
                            onClick: () => {
                                null != s.current && (s.current.value = ""),
                                    null != n && (0, c1.DS)(n, null),
                                    a?.(null);
                            },
                            icon: nE.u,
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
var c5 = a(290136),
    c9 = a(106236),
    c4 = a(629584),
    c7 = a(600239),
    ue = a(940622),
    ut = a(961895),
    ua = a(343991),
    un = a(842002);
let ul = () => {
        (0, T.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(a.bind(a, 343991));
                return (t) =>
                    (0, r.jsx)(e, {
                        title: "No image or video files found!",
                        help: "Please drop one or more image or video files.",
                        ...t,
                    });
            },
            { modalKey: ua.D },
        );
    },
    us = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    ui = (e) => {
        let { className: t, onDrop: a, children: n } = e,
            [l, s] = o.useState(!1),
            i = o.useRef(null),
            d = o.useCallback((e) => {
                us(e), s(!0), (0, T.closeModal)(ua.D);
            }, []),
            c = o.useCallback((e) => {
                us(e);
                let t = i.current,
                    a = e.relatedTarget;
                (null != a && (null == t || t.contains(a))) || s(!1);
            }, []),
            u = o.useCallback(
                async (e) => {
                    us(e), s(!1);
                    let t = e.dataTransfer;
                    if (null == t) return void ul();
                    let n = await Promise.all(
                        Array.from(t.items).map((e) => e.webkitGetAsEntry() ?? e.getAsEntry()),
                    ).then((e) => e.filter((e) => null != e));
                    n.length > 0 ? a(n) : ul();
                },
                [a],
            );
        return (0, r.jsxs)("div", {
            ref: i,
            className: F()(t, un.iE),
            onDragEnter: d,
            onDragOver: us,
            onDragLeave: c,
            onDrop: u,
            children: [
                n,
                l &&
                    (0, r.jsx)("div", {
                        className: un.d2,
                        children: (0, r.jsxs)("div", {
                            className: un.vW,
                            children: [
                                (0, r.jsx)(ut.A, { icons: eb.ir }),
                                (0, r.jsx)(z.D, { variant: "heading-lg/bold", children: "Upload Shop Assets" }),
                                (0, r.jsxs)("div", {
                                    className: un.GA,
                                    children: [
                                        (0, r.jsx)(D.E, {
                                            variant: "text-sm/normal",
                                            children: "Drop file(s) into this panel to preview Shop assets!",
                                        }),
                                        (0, r.jsxs)(D.E, {
                                            variant: "text-sm/normal",
                                            children: [
                                                "Click",
                                                (0, r.jsx)(c5.c, {
                                                    className: un.q4,
                                                    size: "xs",
                                                    color: eV.A.colors.TEXT_DEFAULT,
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
var ur = a(120301);
let uo = new Set([
        ew.RN.HERO_BANNER_STATIC,
        ew.RN.HERO_LOGO,
        ew.RN.PDP_BACKGROUND,
        ew.RN.LOGO,
        ew.RN.MOBILE_BANNER,
        ew.RN.MOBILE_BACKGROUND,
    ]),
    ud = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
    uc = { max: 5e6, warn: 2e6 },
    uu = { max: 3e6, warn: 1e6 },
    um = { max: 2e6, warn: 1e6 },
    uh = { max: 1e6, warn: 5e5 },
    ux = { max: 25e4, warn: 5e4 },
    up = {
        [ew.Jn.PROFILE_EFFECT]: uc,
        [ew.Jn.AVATAR_DECORATION]: uu,
        [ew.Jn.PROFILE_FRAME]: um,
        [ew.RN.HERO_BANNER_ANIMATED]: uc,
        [ew.RN.HERO_BANNER_RIVE]: uc,
        [ew.RN.CATALOG_BANNER_RIVE]: uc,
        [ew.RN.SHOP_BUTTON_BG_HOVER]: uu,
        [ew.RN.SHOP_BUTTON_BG_HOVER_DARK]: uu,
        [ew.RN.SHOP_BUTTON_BG_HOVER_LIGHT]: uu,
        [ew.RN.SHOP_BUTTON_BG_RESTING]: uu,
        [ew.RN.SHOP_BUTTON_BG_RESTING_DARK]: uu,
        [ew.RN.SHOP_BUTTON_BG_RESTING_LIGHT]: uu,
        [ew.RN.HERO_BANNER_STATIC]: um,
        [ew.RN.UPSELL_BANNER]: uh,
        [ew.RN.UPSELL_BANNER_POPOUT]: ux,
        [ew.RN.MOBILE_BANNER]: uh,
        [ew.RN.MOBILE_BACKGROUND]: ux,
        [ew.RN.MOBILE_HERO]: uh,
        [ew.RN.PDP_BACKGROUND]: ux,
        [ew.RN.LOGO]: ux,
        [ew.RN.TAB_TOOLTIP]: ux,
    },
    ug = [ew.Kx.COLLECTION],
    uv = [ew.Kx.AVATAR_DECORATIONS, ew.Kx.FRAMES, ew.Kx.NAMEPLATES, ew.Kx.PROFILE_EFFECTS],
    uj = async (e) => {
        let t = e.createReader(),
            a = await new Promise((e) => t.readEntries(e)),
            n = new Set();
        for (let e of a) e.isDirectory && n.add(e.name);
        let l = ug.filter((e) => !n.has(e));
        return uv.some((e) => n.has(e)) || l.push(`at least one of: ${uv.join(", ")}`), l;
    },
    ub = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/,
    uf = (e) => {
        let { names: t, addError: a } = e,
            n = t.filter((e) => !ub.test(e));
        n.length > 0 && a("File names must be in lowercase snake case", n);
    },
    uy = (e, t, a, n, l) => {
        let s = t.size,
            i = s > 1e6 ? `${(s / 1e6).toFixed(2)}MB` : `${(s / 1e3).toFixed(2)}KB`,
            r = `${l ?? t.name} - ${i}`;
        if (s > e.max) {
            let t = e.max > 1e6 ? `${Math.round(e.max / 1e6)}MB` : `${Math.round(e.max / 1e3)}KB`;
            a("Files exceed the recommended size limit - make sure they are optimized!", [`${r} (max: ${t})`]);
        } else s > e.warn && n("Files are a tad chonky - are you sure they're optimized?", [`${r}`]);
    },
    uE = (e, t, a, n) => {
        let l = up[e];
        if (null != l) for (let e of t) e.name.endsWith(".txt") || uy(l, e, a, n);
    },
    uC = (e) => {
        let t = ew.aL[e];
        return `${e} (${t.map((e) => `.${e}`).join(", ")})`;
    },
    u_ = ["png", "jpg"];
var uS = a(570956);
let uN = o.createContext({ setDropHandler: () => {} }),
    uA = [
        { name: "Preview", value: "preview" },
        { name: "Validate", value: "validate" },
    ],
    uk = { id: "none", label: "[none selected]", value: null },
    uI = { id: "none", label: "[none selected]", value: null },
    uD = () => {
        (0, T.hasModalOpen)(c7.k)
            ? (0, T.closeModal)(c7.k)
            : (0, T.openModalLazy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: c7.k, onCloseRequest: () => (0, T.closeModal)(c7.k) },
              );
    },
    uT = () => {
        (0, T.hasModalOpen)(c7.g)
            ? (0, T.closeModal)(c7.g)
            : (0, T.openModalLazy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: c7.g, onCloseRequest: () => (0, T.closeModal)(c7.g) },
              );
    },
    uR = () => {
        let e = (0, eM.pF)(),
            { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: a } = (0, ue.JE)(),
            n = o.useMemo(() => [uk, ...e.map((e) => ({ id: e.skuId, label: e.name, value: e.skuId }))], [e]);
        return (0, r.jsxs)("div", {
            className: uS.kO,
            children: [
                (0, r.jsx)(ag.h, { size: 16 }),
                (0, r.jsxs)("div", {
                    className: uS.wR,
                    children: [
                        (0, r.jsx)(z.D, { variant: "heading-md/bold", children: "Preview Profile Effect" }),
                        (0, r.jsx)(eG.K, {
                            variant: "icon-only",
                            size: "sm",
                            onClick: uT,
                            icon: c5.c,
                            "aria-label": "Open PFX preview instructions",
                        }),
                    ],
                }),
                (0, r.jsx)(x.l, {
                    label: "Profile Effect",
                    hideLabel: !0,
                    selectionMode: "single",
                    options: n,
                    value: t,
                    maxOptionsVisible: 30,
                    onSelectionChange: a,
                }),
            ],
        });
    },
    uO = () => {
        let e = (0, ue.bA)(),
            { previewProfileFrameKey: t, setPreviewProfileFrameKey: a } = (0, ue.JE)(),
            n = o.useMemo(() => [uI, ...e.map((e) => ({ id: e.key, label: e.key, value: e.key }))], [e]);
        return 0 === e.length
            ? null
            : (0, r.jsxs)("div", {
                  className: uS.kO,
                  children: [
                      (0, r.jsx)(ag.h, { size: 16 }),
                      (0, r.jsx)(z.D, { variant: "heading-md/bold", children: "Preview Profile Frame" }),
                      (0, r.jsx)(x.l, {
                          label: "Profile Frame",
                          hideLabel: !0,
                          selectionMode: "single",
                          options: n,
                          value: t,
                          maxOptionsVisible: 30,
                          onSelectionChange: a,
                      }),
                  ],
              });
    },
    uw = () => {
        let { previewAvatarDecorationKey: e, setPreviewAvatarDecorationKey: t } = (0, ue.JE)(),
            { avatarDecorationAssets: a } = (0, ue.NE)(),
            n = o.useMemo(() => a.map((e) => ({ id: e.name, label: e.name, value: e.name })), [a]);
        return 0 === a.length
            ? null
            : (0, r.jsxs)("div", {
                  className: uS.kO,
                  children: [
                      (0, r.jsx)(ag.h, { size: 16 }),
                      (0, r.jsx)(x.l, {
                          label: "Preview Avatar Decorations",
                          selectionMode: "single",
                          options: n,
                          value: e,
                          maxOptionsVisible: 30,
                          onSelectionChange: t,
                      }),
                  ],
              });
    },
    uM = new Set([ew.RN.HERO_BANNER_STATIC, ew.RN.HERO_BANNER_ANIMATED, ew.RN.HERO_BANNER_RIVE]),
    uL = (e) => {
        let { clearAssets: t, clearIgnoredFiles: a } = e,
            { collectionAssets: n } = (0, ue.NE)(),
            {
                deleteCollectionAsset: l,
                clearAssets: s,
                heroLogoMaxHeight: i,
                setHeroLogoMaxHeight: d,
                heroResponsive: c,
                setHeroResponsive: u,
            } = (0, ue.JE)(),
            m = o.useMemo(() => Object.values(n).map((e) => ({ label: e.name, value: e.type })), [n]),
            x = m.some((e) => e.value === ew.RN.HERO_LOGO),
            p = m.some((e) => uM.has(e.value)),
            g = o.useCallback((e) => l(e), [l]),
            j = o.useCallback(() => {
                s(), t(), a();
            }, [s, t, a]);
        return 0 === m.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(ag.h, { size: 16 }),
                      (x || p) &&
                          (0, r.jsxs)("div", {
                              className: uS.v7,
                              children: [
                                  x &&
                                      (0, r.jsxs)("div", {
                                          className: uS.cj,
                                          children: [
                                              (0, r.jsx)(D.E, {
                                                  variant: "text-md/normal",
                                                  className: uS.Me,
                                                  children: "Logo size",
                                              }),
                                              (0, r.jsx)(c9.A, {
                                                  className: uS.TQ,
                                                  minValue: 90,
                                                  maxValue: 200,
                                                  initialValue: i ?? 90,
                                                  handleSize: 10,
                                                  onValueChange: (e) => d(Math.round(e)),
                                                  onValueRender: (e) => `${Math.round(e)}px`,
                                                  "aria-label": "Hero logo max height",
                                              }),
                                              (0, r.jsx)(D.E, { variant: "text-sm/normal", children: `${i ?? 90}px` }),
                                          ],
                                      }),
                                  p &&
                                      (0, r.jsxs)("div", {
                                          className: uS.sy,
                                          children: [
                                              (0, r.jsx)(v.d, { checked: c, onChange: u }),
                                              (0, r.jsx)(D.E, {
                                                  variant: "text-md/normal",
                                                  children: "Responsive Hero",
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                      (0, r.jsx)(ag.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: uS.wR,
                          children: [
                              (0, r.jsx)(z.D, { variant: "heading-lg/bold", children: "Uploaded Assets" }),
                              (0, r.jsx)(h.$, {
                                  variant: "critical-primary",
                                  size: "sm",
                                  onClick: j,
                                  text: "Clear All",
                              }),
                          ],
                      }),
                      (0, r.jsx)("ul", {
                          children: m.map((e) =>
                              (0, r.jsxs)(
                                  "li",
                                  {
                                      className: uS._0,
                                      children: [
                                          (0, r.jsx)(eG.K, {
                                              variant: "icon-only",
                                              size: "sm",
                                              onClick: () => g(e.value),
                                              icon: Q.P,
                                              "aria-label": "Remove asset",
                                          }),
                                          (0, r.jsx)(D.E, { variant: "text-md/normal", children: e.label }),
                                      ],
                                  },
                                  e.value,
                              ),
                          ),
                      }),
                  ],
              });
    },
    uP = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: a } = e;
        return 0 === t.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(ag.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: uS.wR,
                          children: [
                              (0, r.jsx)(z.D, { variant: "heading-lg/bold", children: "Ignored Files" }),
                              (0, r.jsx)(h.$, { variant: "primary", size: "sm", onClick: a, text: "Clear" }),
                          ],
                      }),
                      (0, r.jsx)("ul", {
                          children: t.map((e, t) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      className: uS.yk,
                                      children: (0, r.jsx)(D.E, { variant: "text-md/normal", children: e }),
                                  },
                                  `${e}-${t}`,
                              ),
                          ),
                      }),
                  ],
              });
    },
    uU = () => {
        let {
                validateShopAssetPackage: e,
                reset: t,
                validationComplete: a,
                warnings: n,
                errors: l,
            } = (() => {
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
                        t(!1), s({}), n({});
                    }, []);
                return {
                    validationComplete: e,
                    errors: l,
                    warnings: a,
                    validateShopAssetPackage: o.useCallback(
                        async (e) => {
                            try {
                                var a;
                                if (0 === e.length) return void i("No files found");
                                if (e.length > 1) return void i("Uploaded multiple files. Expected 1 directory.");
                                let t = e[0];
                                if (!t.isDirectory) return void i("Uploaded a file. Expected a directory.");
                                let n = await uj(t);
                                n.length > 0 && i("Missing required directories", n),
                                    (a = await (0, ew.eg)([t])),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        for (let e of t.collectionFiles) {
                                            let t = (0, ew.pd)(e),
                                                l = null != t ? up[t] : null;
                                            null != l && uy(l, e, a, n);
                                        }
                                        uf({ names: t.collectionFiles.map((e) => e.name), addError: a });
                                        let l = new Set(
                                                t.collectionFiles.map((e) => (0, ew.pd)(e)).filter((e) => null != e),
                                            ),
                                            s = Array.from(uo)
                                                .filter((e) => !l.has(e))
                                                .map(uC);
                                        s.length > 0 && a("Missing required files", s);
                                        let i = Object.values(ew.RN)
                                            .filter((e) => !uo.has(e))
                                            .filter((e) => !l.has(e))
                                            .map(uC);
                                        i.length > 0 && n("Missing optional assets", i);
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        uf({ names: Object.keys(t.profileEffectFilesMap), addError: a }),
                                            Object.entries(t.profileEffectFilesMap).forEach((e) => {
                                                let [t, l] = e,
                                                    s = l.map((e) => e.name);
                                                uf({
                                                    names: s.map((e) => {
                                                        let t = e.indexOf("-");
                                                        return e.substring(0, t > 0 ? t : e.length);
                                                    }),
                                                    addError: a,
                                                }),
                                                    uE(ew.Jn.PROFILE_EFFECT, l, a, n);
                                                let i = ud
                                                    .filter(
                                                        (e) => !s.some((t) => t.startsWith(e) && t.endsWith(".png")),
                                                    )
                                                    .map((e) => `${t}/${e}`);
                                                i.length > 0 && a("Missing required PFX files with prefix", i),
                                                    s.some((e) => e.endsWith(".txt")) ||
                                                        a(
                                                            "PFX configs required - please include both exports! (exception: duplicate variant configs are optional)",
                                                            [t],
                                                        );
                                                let r = s
                                                    .filter(
                                                        (e) => !ud.some((t) => e.startsWith(t)) && !e.endsWith(".txt"),
                                                    )
                                                    .map((e) => `${t}/${e}`);
                                                r.length > 0 && n("Contains unrecognized files", r);
                                            });
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        uf({ names: t.avatarDecorationFiles.map((e) => e.name), addError: a }),
                                            uE(ew.Jn.AVATAR_DECORATION, t.avatarDecorationFiles, a, n);
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e,
                                            l = Object.keys(t.profileFrameDirsMap)
                                                .filter((e) => !ub.test(e))
                                                .map((e) => `${ew.Kx.FRAMES}/${e}`);
                                        l.length > 0 && a("File names must be in lowercase snake case", l);
                                        let s = up[ew.Jn.PROFILE_FRAME];
                                        Object.entries(t.profileFrameDirsMap).forEach((e) => {
                                            let [t, l] = e,
                                                i = `${ew.Kx.FRAMES}/${t}`,
                                                r = l.previewFile?.name.split(".").pop()?.toLowerCase();
                                            (null != l.previewFile && null != r && u_.includes(r)) ||
                                                a(
                                                    "Missing required preview file for profile frame (preview.png or preview.jpg)",
                                                    [`${i}/preview.{${u_.join("|")}}`],
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
                                                    );
                                            let o = [];
                                            for (let { file: e, folder: t } of (null == l.previewFile ||
                                                ub.test(l.previewFile.name) ||
                                                o.push(`${i}/${l.previewFile.name}`),
                                            l.layerFiles))
                                                ub.test(e.name) || o.push(`${i}/${t}/${e.name}`);
                                            o.length > 0 && a("File names must be in lowercase snake case", o);
                                            let d = [];
                                            for (let { file: e, folder: t } of l.layerFiles) {
                                                let { parsed: a, errorType: n } = (0, ur.Mf)(e.name);
                                                if (null == a) {
                                                    let a = null != n ? ur.h4[n] : "invalid";
                                                    d.push(`${i}/${t}/${e.name}: ${a}`);
                                                }
                                            }
                                            if (
                                                (d.length > 0 && a("Invalid profile frame layer filenames", d),
                                                null != s)
                                            )
                                                for (let { file: e, folder: t } of (null != l.previewFile &&
                                                    uy(s, l.previewFile, a, n, `${i}/${l.previewFile.name}`),
                                                l.layerFiles))
                                                    uy(s, e, a, n, `${i}/${t}/${e.name}`);
                                        });
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addWarning: a } = e;
                                        t.ignoredFilenames.length > 0 &&
                                            a("Contains unrecognized files", t.ignoredFilenames);
                                    })({ files: a, addError: i, addWarning: r });
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
            { setDropHandler: u } = o.useContext(uN),
            m = o.useCallback(
                (a) => {
                    t(), e(a);
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
                              className: uS._f,
                              children: [
                                  (0, r.jsx)(D.E, {
                                      variant: "text-md/normal",
                                      color: d ? "text-feedback-critical" : "text-default",
                                      children: `${s.length} errors`,
                                  }),
                                  (0, r.jsx)(D.E, {
                                      variant: "text-md/normal",
                                      color: c ? "text-feedback-warning" : "text-default",
                                      children: `${i.length} warnings`,
                                  }),
                                  (0, r.jsx)(h.$, { variant: "primary", size: "sm", onClick: t, text: "Reset" }),
                              ],
                          })
                        : (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Drop asset folder to validate." }),
                    (0, r.jsx)(ag.h, { size: 16 }),
                    d &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(z.D, { variant: "heading-lg/bold", children: "Errors" }),
                                (0, r.jsx)(ag.h, { size: 8 }),
                                (0, r.jsx)("ul", {
                                    className: uS.ck,
                                    children: s.map((e, t) => {
                                        let [a, n] = e;
                                        return (0, r.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-critical",
                                                        children: a,
                                                    }),
                                                    n.length > 0 &&
                                                        (0, r.jsx)("ul", {
                                                            className: uS.ck,
                                                            children: n.map((e, t) =>
                                                                (0, r.jsx)(
                                                                    "li",
                                                                    {
                                                                        children: (0, r.jsx)(D.E, {
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
                                (0, r.jsx)(z.D, { variant: "heading-lg/bold", children: "Warnings" }),
                                (0, r.jsx)(ag.h, { size: 8 }),
                                (0, r.jsx)("ul", {
                                    className: uS.ck,
                                    children: Object.entries(n).map((e, t) => {
                                        let [a, n] = e;
                                        return (0, r.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-warning",
                                                        children: a,
                                                    }),
                                                    n.length > 0 &&
                                                        (0, r.jsx)("ul", {
                                                            className: uS.ck,
                                                            children: n.map((e, t) =>
                                                                (0, r.jsx)(
                                                                    "li",
                                                                    {
                                                                        children: (0, r.jsx)(D.E, {
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
    },
    uG = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: a } = (0, ue.JE)(),
            { ignoredFilenames: n, clearAssets: l, clearIgnoredFilenames: s, processAndUpsertAssets: i } = (0, ew.ds)(),
            { setDropHandler: d } = o.useContext(uN),
            c = o.useCallback(
                (e) => {
                    a(), i(e);
                },
                [i, a],
            );
        return (
            o.useEffect(() => {
                d(c);
            }, [c, d]),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(D.E, {
                        variant: "text-md/normal",
                        children: "Drop files in this panel to begin preview.",
                    }),
                    (0, r.jsxs)("div", {
                        className: uS.sy,
                        children: [
                            (0, r.jsx)(v.d, { checked: e, onChange: (e) => t(e) }),
                            (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Enable Preview" }),
                            (0, r.jsx)(eG.K, {
                                variant: "icon-only",
                                size: "sm",
                                onClick: uD,
                                icon: c5.c,
                                "aria-label": "Open preview instructions",
                            }),
                        ],
                    }),
                    (0, r.jsx)(uR, {}),
                    (0, r.jsx)(uO, {}),
                    (0, r.jsx)(uw, {}),
                    (0, r.jsx)(uL, { clearAssets: l, clearIgnoredFiles: s }),
                    (0, r.jsx)(uP, { ignoredFiles: n, handleClearIgnoredFiles: s }),
                ],
            })
        );
    },
    uF = () => {
        let [e, t] = o.useState("preview");
        return (0, r.jsxs)("div", {
            className: uS.kL,
            children: [
                (0, r.jsx)(c4.I, {
                    options: uA,
                    value: e,
                    onChange: (e) => {
                        let { value: a } = e;
                        return t(a);
                    },
                    className: uS.Vj,
                    optionClassName: uS.UK,
                }),
                (0, r.jsx)(ag.h, { size: 8 }),
                "preview" === e && (0, r.jsx)(uG, {}),
                "validate" === e && (0, r.jsx)(uU, {}),
                (0, r.jsx)(ag.h, { size: 16 }),
            ],
        });
    },
    uB = (e) => {
        let { children: t } = e,
            [a, n] = o.useState(() => () => {}),
            l = o.useMemo(() => ({ setDropHandler: (e) => n(() => e) }), []);
        return (0, r.jsx)(uN.Provider, { value: l, children: (0, r.jsx)(ui, { onDrop: a, children: t }) });
    };
var uV = a(663803),
    u$ = a(859040),
    uW = a(679895);
let uz = () => {
    let e = (0, H.bG)([tE.A], () => tE.A.skipNumCategories);
    return (0, r.jsxs)("div", {
        className: uW.k,
        children: [
            (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Hide first # of categories" }),
            (0, r.jsx)(uV.l, {
                value: e,
                onChange: (e) => {
                    (0, u$.ue)(e);
                },
                minValue: 0,
                maxValue: 100,
            }),
        ],
    });
};
var uH =
        (((n = {}).DEFAULT = "default"),
        (n.DEFAULT_WITH_ORB_SHELF = "default_with_orb_shelf"),
        (n.ORB_TAB = "orb_tab"),
        (n.FRAMES = "frames"),
        (n.FRAMES_PINNED = "frames_pinned"),
        n),
    uK = a(295811),
    uY = a(437623);
let uq = () => {
        let e = (0, H.bG)([uK.A], () => uK.A.getShopHomeConfigOverride()),
            t = [
                { id: "none", label: "DISABLED (no override)", value: void 0 },
                ...Object.values(uH).map((e) => ({ id: e, label: e, value: e })),
            ];
        return (0, r.jsx)("div", {
            className: uY.kL,
            children: (0, r.jsx)(x.l, {
                label: "Shop Home Override",
                options: t,
                value: e,
                onSelectionChange: (e) => {
                    (0, u$.Or)(e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
        });
    },
    uJ = () => {
        let [e, t] = o.useState(void 0);
        return (0, r.jsxs)("div", {
            className: F()(uY.kL, uY.fi),
            children: [
                (0, r.jsx)(p.k, {
                    fullWidth: !0,
                    label: "Shop Layout URL Override",
                    value: e,
                    onChange: (e) => ("" === e ? t(void 0) : t(e)),
                    placeholder: "https://cdn.discordapp.com/assets/content/...",
                }),
                (0, r.jsxs)("div", {
                    className: uY.o1,
                    children: [
                        (0, r.jsx)(h.$, {
                            variant: "critical-primary",
                            text: "Clear",
                            onClick: () => {
                                t(void 0), (0, u$.Aq)(void 0);
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Set",
                            onClick: () => (0, u$.Aq)("" !== e ? e : void 0),
                        }),
                    ],
                }),
            ],
        });
    },
    uQ = (e) => {
        let { className: t } = e,
            a = Object.keys(ao.M).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
        return null == a
            ? null
            : (0, r.jsxs)("div", {
                  className: t,
                  children: [
                      (0, r.jsx)(z.D, { variant: "heading-md/semibold", children: "Shop Marketing" }),
                      (0, r.jsx)("div", { style: { zIndex: 1 }, children: (0, r.jsx)(lD, { items: [a] }) }),
                  ],
              });
    };
var uX = a(922529),
    uZ = a(881845);
let u0 = () => {
        let e = (0, H.bG)([lP.A], () => lP.A.get("shop_disable_cache")),
            t = (0, H.bG)([lP.A], () => lP.A.get("shop_include_unpublished"));
        return (0, r.jsx)(uB, {
            children: (0, r.jsxs)("div", {
                className: uZ.Lm,
                children: [
                    (0, r.jsxs)("div", {
                        className: uZ.gf,
                        children: [
                            (0, r.jsx)(v.d, {
                                label: "Disable collectibles cache",
                                checked: e,
                                onChange: (e) => (0, lL.L)("shop_disable_cache", e),
                            }),
                            (0, r.jsx)(v.d, {
                                label: "Show unpublished collectibles",
                                checked: t,
                                onChange: (e) => (0, lL.L)("shop_include_unpublished", e),
                            }),
                        ],
                    }),
                    (0, r.jsx)(uQ, { className: uZ._l }),
                    (0, r.jsxs)("div", {
                        className: uZ._l,
                        children: [
                            (0, r.jsx)(z.D, { variant: "heading-md/semibold", children: "Shop Overrides" }),
                            (0, r.jsx)(uq, {}),
                            (0, r.jsx)(uX.A, { className: uZ.yF }),
                            (0, r.jsx)(uJ, {}),
                            (0, r.jsx)(uX.A, { className: uZ.yF }),
                            (0, r.jsx)(uz, {}),
                            (0, r.jsx)(uX.A, { className: uZ.yF }),
                            (0, r.jsx)(uF, {}),
                        ],
                    }),
                ],
            }),
        });
    },
    u1 = [
        { id: "unset", label: "Unset", value: cu.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET },
        { id: "all", label: "All", value: cu.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
        { id: "usersWithGame", label: "Users With Game", value: cu.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
        { id: "none", label: "None", value: cu.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
    ];
function u2() {
    let e = o.useRef(null),
        t = cx.TA.useSetting();
    return (0, r.jsx)("div", {
        ref: e,
        className: F()(tF.nd, aL.n),
        children: (0, r.jsxs)("div", {
            className: aL.k,
            children: [
                (0, r.jsx)(z.D, { variant: "heading-lg/normal", children: "Settings" }),
                (0, r.jsx)(x.l, {
                    label: "Receive DMs In Game",
                    options: u1,
                    value: t,
                    onSelectionChange: cx.TA.updateSetting,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
var u8 = a(278416),
    u3 = a(477783);
function u6(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function u5(e) {
    let { store: t, dataGetter: a } = e,
        [n, l] = o.useState(a(t));
    return (
        o.useEffect(() => {
            let e = () => l(a(t));
            return (
                e(),
                t.addChangeListener(e),
                () => {
                    t.removeChangeListener(e);
                }
            );
        }, [t, a]),
        (0, r.jsx)(d.Ip, { className: u3.Dx, children: (0, r.jsx)(aJ, { data: n }) })
    );
}
function u9(e) {
    let { store: t } = e,
        [a, n] = o.useState(() => JSON.stringify(t.__getLocalVars(), null, 2)),
        [l, s] = o.useState(null),
        i = o.useCallback(() => {
            n(JSON.stringify(t.__getLocalVars(), null, 2)), s(null);
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
                for (let e of n.preDispatches ?? []) tL.h.dispatch(e);
                tL.h.dispatch({ ...n.buildPayload(e), type: n.actionType }), i();
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
                for (let t of e.preDispatches ?? []) tL.h.dispatch(t);
                tL.h.dispatch({ ...e.buildPayload(t), type: e.actionType }), i();
            } catch (e) {
                s(e instanceof Error ? e.message : String(e));
            }
        }, [t, i]);
    return (0, r.jsxs)("div", {
        className: F()(u3.Dx, u3.Ef),
        children: [
            (0, r.jsx)("textarea", {
                className: u3.Vz,
                value: a,
                onChange: (e) => n(e.target.value),
                spellCheck: !1,
                "aria-label": "Edit local variables as JSON",
            }),
            null != l && (0, r.jsx)("div", { className: u3.Xf, role: "alert", children: l }),
            (0, r.jsxs)("div", {
                className: u3.KA,
                children: [
                    (0, r.jsx)(h.$, { variant: "primary", size: "sm", text: "Apply", onClick: d }),
                    (0, r.jsx)(h.$, { variant: "secondary", size: "sm", text: "Refresh from store", onClick: i }),
                    t.__getLocalVarsEditConfig?.().getPurgeVars != null &&
                        (0, r.jsx)(h.$, { variant: "secondary", size: "sm", text: "Purge store", onClick: c }),
                ],
            }),
        ],
    });
}
let u4 = [
    {
        key: "name",
        cellClassName: u3.__invalid_eventColumn,
        render(e) {
            let { store: t } = e;
            return t.getName();
        },
    },
];
function u7(e) {
    let { store: t, initialHeight: a } = e,
        n = o.useMemo(() => {
            let e;
            return (
                (e = [
                    {
                        id: "local",
                        name: "Local Variables",
                        group: a1.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVars
                                ? (0, r.jsxs)("div", {
                                      className: u3.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVars" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(u5, { store: t, dataGetter: (e) => e.__getLocalVars() });
                        },
                    },
                    {
                        id: "instance",
                        name: "Store Instance",
                        group: a1.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return (0, r.jsx)(u5, { store: t, dataGetter: (e) => e });
                        },
                    },
                ]),
                null != t.__getLocalVars &&
                    e.push({
                        id: "edit-local",
                        name: "Edit Local Variables",
                        group: a1.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVarsEditConfig
                                ? (0, r.jsxs)("div", {
                                      className: u3.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVarsEditConfig" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(u9, { store: t });
                        },
                    }),
                e
            );
        }, [t]),
        { TabBar: l, renderSelectedTab: s } = (0, a1.Ay)({ tabs: n }, []);
    return (0, r.jsxs)(a0, {
        className: u3.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(aV.Ay, {
                className: F()(tF.jr, u3.nZ),
                children: [
                    (0, r.jsx)(aV.Ay.Icon, { icon: u8.g, tooltip: t.getName() }),
                    (0, r.jsx)(aV.Ay.Title, { children: t.getName() }),
                ],
            }),
            s({ store: t }),
        ],
    });
}
function me() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = H.il.getAll(),
        l = o
            .useMemo(() => n.map((e) => ({ key: e._dispatchToken, store: e })).sort(u6), [n])
            .filter((e) =>
                (function (e, t) {
                    let { store: a } = e;
                    return a.getName().toLowerCase().includes(t.toLowerCase());
                })(e, t),
            ),
        [s, i] = o.useState(),
        d = n.find((e) => e._dispatchToken === s);
    return (0, r.jsxs)("div", {
        ref: e,
        className: F()(tF.nd, u3.nd),
        children: [
            (0, r.jsx)("div", {
                className: u3.KE,
                children: (0, r.jsx)(nC.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, r.jsx)(tB, { columns: u4, data: l, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != d &&
                (0, r.jsx)(u7, { store: d, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }, s),
        ],
    });
}
var mt = a(91871),
    ma = a.n(mt);
let mn = [
        {
            key: "id",
            cellClassName: nV.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "bucket",
            cellClassName: nV.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "timestamp",
            cellClassName: nV.QN,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    ml = [
        {
            id: "details",
            name: "Details",
            group: a1.fu.NONE,
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
                    d = nv()(s);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(aV.Ay, {
                            className: F()(tF.jr, nV.nZ),
                            children: [
                                (0, r.jsx)(aV.Ay.Icon, { icon: nf.U, tooltip: t }),
                                (0, r.jsx)(aV.Ay.Title, { children: t }),
                            ],
                        }),
                        (0, r.jsxs)(nG, {
                            className: nV.ZK,
                            children: [
                                (0, r.jsx)(nF, {
                                    name: "Timestamp (local)",
                                    children: (0, r.jsx)("time", {
                                        dateTime: s.toISOString(),
                                        title: (0, nk.i$)(d, "LLLL"),
                                        children: (0, nk.mk)(d),
                                    }),
                                }),
                                "guild" === a.type &&
                                    (0, r.jsx)(nF, {
                                        name: "Guild ID",
                                        children: (0, r.jsx)("code", { children: a.guildId }),
                                    }),
                                (0, r.jsx)(nF, {
                                    name: "Bucket",
                                    children: (0, r.jsx)("code", { children: a.bucket }),
                                }),
                                (0, r.jsx)(nF, {
                                    name: "Revision",
                                    children: (0, r.jsx)("code", { children: a.revision }),
                                }),
                                (0, r.jsx)(nF, { name: "Override", children: (0, r.jsx)(nB, { value: a.override }) }),
                                (0, r.jsx)(nF, {
                                    name: "Exposure type",
                                    children: (0, r.jsx)("code", { children: n }),
                                }),
                                (0, r.jsx)(nF, { name: "Excluded", children: (0, r.jsx)(nB, { value: l }) }),
                                (0, r.jsx)(nF, { name: "Previously tracked", children: (0, r.jsx)(nB, { value: o }) }),
                                (0, r.jsx)(nF, { name: "Location", children: (0, r.jsx)("code", { children: i }) }),
                            ],
                        }),
                    ],
                });
            },
        },
    ];
function ms() {
    let [e, t] = o.useState(""),
        a = o.useRef(null),
        n = (0, H.yK)([nP], () => nP.loggedTriggers),
        l = o.useMemo(
            () =>
                n
                    .filter((t) => 0 === e.length || ma()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [n, e],
        ),
        [s, i] = o.useState(void 0),
        d = l.find((e) => e.key === s),
        { TabBar: c, renderSelectedTab: u } = (0, a1.Ay)({ tabs: ml }, []),
        m = (0, H.bG)([nP], () => nP.trackTriggers),
        h = o.useCallback((e) => {
            tL.h.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
        }, []),
        x = m ? "Stop Tracking" : "Start Tracking";
    return (0, r.jsxs)("div", {
        ref: a,
        className: F()(tF.nd, nV.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nV.rh,
                children: [
                    (0, r.jsx)(l0.m, {
                        text: x,
                        children: (0, r.jsx)(eG.K, {
                            size: "sm",
                            variant: m ? "active" : "primary",
                            icon: m ? l8.E : l2.u,
                            "aria-label": x,
                            onClick: () => h(!m),
                        }),
                    }),
                    (0, r.jsx)(nC.I, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, r.jsx)(eG.K, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": nl.intl.string(nl.t.VkKicb),
                        icon: nE.u,
                        onClick: K.eY,
                    }),
                ],
            }),
            (0, r.jsx)(tB, { columns: mn, data: l, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != d &&
                (0, r.jsxs)(a0, {
                    className: nV.rf,
                    minHeight: 100,
                    initialHeight: null != a.current ? a.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(c, {}), u({ loggedTrigger: d })],
                }),
        ],
    });
}
var mi = a(512950),
    mr = a(324861),
    mo = a(529607);
let md = function () {
    let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, mr.A)();
    return (0, r.jsx)("div", {
        className: mo.k,
        children: (0, r.jsxs)(u.n, {
            label: "Virtual Currency Configuration",
            description: "Click the button below to reset your onboarding state for Virtual Currency.",
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(h.$, {
                        text: "Reset Onboarding State",
                        onClick: () => {
                            e(), t(), (0, aN.pX)(er.BVt.APP);
                        },
                    }),
                }),
                (0, r.jsx)(mi.p, {
                    messageType: mi.Y.INFO,
                    children:
                        "Your may have to refresh your client after being redirected to the main application in order to see these",
                }),
            ],
        }),
    });
};
var mc = a(899e3),
    mu = a(761853),
    mm = a(731854);
let mh = [
        ["codecH264", "H264"],
        ["codecH265", "H265 / HEVC"],
        ["codecAv1", "AV1"],
    ],
    mx = [
        ["encNvidiaDx11", "NVIDIA Direct3D 11"],
        ["encNvidiaCuda", "NVIDIA CUDA"],
        ["encAmdDx11", "AMD Direct3D 11"],
        ["encIntelDx11", "Intel Direct3D 11"],
        ["encIntelCpu", "Intel CPU"],
        ["encWmfCpu", "Media Foundation CPU"],
        ["encWmfGpu", "Media Foundation GPU"],
        ["encWmfDx11", "Media Foundation Direct3D 11 (NYI)"],
    ],
    mp = [
        ["capGraphicsCapture", "WGC / Windows Graphics Capture"],
        ["capDxgi", "DDA / DXGI Output Duplication"],
        ["capGdi", "GDI / PrintWindow + BitBlt"],
        ["capVideoHook", "Video Hook"],
    ],
    mg = [
        ["bypassHybridGpuFpsRestriction", "WGC: Bypass Hybrid-GPU 60 FPS Restriction"],
        ["gdiForceBitblt", "GDI: Force Allow BitBlt"],
        ["allowHdr", "Allow HDR Capture"],
    ];
function mv(e) {
    let { title: t, toggles: a, state: n } = e;
    return (0, r.jsxs)($.B, {
        gap: 8,
        children: [
            (0, r.jsx)(D.E, { variant: "text-lg/bold", children: t }),
            a.map((e) => {
                let [t, a] = e;
                return (0, r.jsx)(rJ.S, { label: a, checked: !!n[t], onChange: () => (0, mc.yn)({ [t]: !n[t] }) }, t);
            }),
        ],
    });
}
function mj() {
    let e = (0, H.bG)([mc.Ay], () => mc.Ay.getSnapshot()),
        t = (0, H.bG)([mu.Ay], () => mu.Ay.supports(mm.O5.VIDEO));
    return (0, r.jsxs)(d.Ip, {
        className: tF.nd,
        children: [
            (0, r.jsx)(g.c, { gap: 16 }),
            (0, r.jsx)(mv, { title: "Video Codecs (Sender)", toggles: mh, state: e }),
            t
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(g.c, { gap: 16 }),
                          (0, r.jsx)(mv, { title: "Video Encoders", toggles: mx, state: e }),
                          (0, r.jsx)(g.c, { gap: 16 }),
                          (0, r.jsx)(mv, { title: "Capture Sources", toggles: mp, state: e }),
                          (0, r.jsx)(g.c, { gap: 16 }),
                          (0, r.jsx)(mv, { title: "Capture Options", toggles: mg, state: e }),
                      ],
                  })
                : null,
            (0, r.jsx)(g.c, { gap: 16 }),
            (0, r.jsx)(mv, {
                title: "Preview",
                toggles: [["alwaysShowCapturePreview", "Always Show (ignore main window focus)"]],
                state: e,
            }),
            (0, r.jsx)(g.c, { gap: 16 }),
        ],
    });
}
var mb = a(77729),
    mf = a(94406);
function my() {
    let [e, t] = o.useState(""),
        [a, n] = o.useState(""),
        [l, s] = o.useState({ status: "idle", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
        i = "processing" === l.status;
    return (0, r.jsx)(d.Ip, {
        className: tF.nd,
        children: (0, r.jsxs)("div", {
            className: mf.l7,
            children: [
                (0, r.jsx)(D.E, { variant: "text-lg/bold", children: "Batch Audio Processor" }),
                (0, r.jsx)(D.E, {
                    variant: "text-sm/normal",
                    children:
                        "Process wav files through the Discord audio ingest pipeline (WebRTC APM, Krisp, voice filters) and write output to wav files.",
                }),
                (0, r.jsxs)($.B, {
                    direction: "horizontal",
                    align: "end",
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.k, {
                            fullWidth: !0,
                            value: e,
                            onChange: t,
                            placeholder: "Input directory (wav files)",
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await mb.A.fileManager.showOpenDialog({ properties: ["openDirectory"] });
                                e.length > 0 && t(e[0]);
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)($.B, {
                    direction: "horizontal",
                    align: "end",
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.k, { fullWidth: !0, value: a, onChange: n, placeholder: "Output directory" }),
                        (0, r.jsx)(h.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await mb.A.fileManager.showOpenDialog({
                                    properties: ["openDirectory", "createDirectory"],
                                });
                                e.length > 0 && n(e[0]);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(h.$, {
                    variant: i ? "critical-primary" : "primary",
                    text: i ? "Cancel" : "Start Processing",
                    onClick: i
                        ? function () {
                              mu.Ay.getMediaEngine().cancelBatchAudioProcessing(),
                                  s((e) => ({ ...e, status: "cancelled" }));
                          }
                        : function () {
                              "" !== e &&
                                  "" !== a &&
                                  (s({ status: "processing", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
                                  mu.Ay.getMediaEngine().processBatchAudioFiles(
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
                    (0, r.jsxs)($.B, {
                        gap: 4,
                        children: [
                            (0, r.jsxs)(D.E, {
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
                                            className: mf.TZ,
                                            children: (0, r.jsxs)(D.E, {
                                                variant: "text-xs/normal",
                                                className: e.success ? mf.$D : mf.uL,
                                                children: [e.success ? "OK" : "FAIL", " - ", e.filename],
                                            }),
                                        },
                                        t,
                                    ),
                                ),
                            l.log.length > 20 &&
                                (0, r.jsxs)(D.E, {
                                    variant: "text-xs/normal",
                                    children: ["...and ", l.log.length - 20, " more"],
                                }),
                        ],
                    }),
            ],
        }),
    });
}
var mE = a(207898),
    mC = a.n(mE),
    m_ = a(32880),
    mS = a(827343),
    mN = a(964486),
    mA = a(602674),
    mk = a(625841),
    mI = a(74848),
    mD = a(586644);
function mT(e) {
    let { recording: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(D.E, { variant: "text-sm/normal", children: ["Duration: ", t.audioBuffer.duration] }),
            (0, r.jsxs)(D.E, {
                variant: "text-sm/normal",
                children: ["Num Channels: ", t.audioBuffer.numberOfChannels],
            }),
            (0, r.jsxs)(D.E, { variant: "text-sm/normal", children: ["Sample Rate: ", t.audioBuffer.sampleRate] }),
            (0, r.jsxs)(D.E, { variant: "text-sm/normal", children: ["Noise Suppression: ", t.suppression] }),
            (0, r.jsxs)(D.E, {
                variant: "text-sm/normal",
                children: ["Krisp Suppression Level: ", t.krispSuppressionLevel],
            }),
            (0, r.jsxs)(D.E, {
                variant: "text-sm/normal",
                children: ["Echo Cancellation: ", String(t.echoCancellation)],
            }),
        ],
    });
}
function mR(e) {
    let { recording: t, playing: a, onPlay: n, onStop: l } = e;
    return (0, r.jsx)(cI.N, {
        collapsibleContent: (0, r.jsx)(mT, { recording: t }),
        children: (e) => {
            let { onClick: s } = e;
            return (0, r.jsxs)(B.D, {
                onClick: s,
                children: [
                    (0, r.jsxs)(D.E, {
                        variant: "text-sm/bold",
                        tag: "span",
                        children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()],
                    }),
                    (0, r.jsx)(B.D, {
                        tag: "span",
                        onClick: (e) => {
                            e.stopPropagation(), a ? l() : n(t);
                        },
                        children: a ? (0, r.jsx)(l8.E, { size: "xxs" }) : (0, r.jsx)(l2.u, { size: "xxs" }),
                    }),
                    (0, r.jsx)(B.D, {
                        tag: "span",
                        onClick: (e) => {
                            let a, n, l;
                            e.stopPropagation(),
                                (a = new Blob([mC()(t.audioBuffer)], { type: "audio/wav" })),
                                (n = URL.createObjectURL(a)),
                                ((l = document.createElement("a")).href = n),
                                (l.download = `${t.inputName}-${new Date(t.createdAt).toLocaleString()}.wav`),
                                l.click(),
                                URL.revokeObjectURL(n);
                        },
                        children: (0, r.jsx)(m_.s, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function mO() {
    let { name: e } = (0, mI.x5)(mm.oh.AUDIO_INPUT),
        [t, a] = o.useState(!1),
        [n, l] = o.useState([]),
        s = (0, H.bG)([mu.Ay], () => mu.Ay.getKrispSuppressionLevel()),
        [i, c] = o.useState(null),
        u = o.useRef(null),
        m = o.useRef(null),
        [h, p] = o.useState(0.5),
        {
            krispModels: g,
            krispModelOverride: j,
            inputMode: b,
            echoCancellation: f,
            autoThreshold: y,
            vadUseKrisp: E,
            vadKrispActivationThreshold: C,
            noiseCancellation: _,
            noiseSuppression: S,
            noiseSuppressionSupported: N,
            noiseCancellationSupported: A,
            noiseCancellationEnableStats: k,
            vadDuringPreProcess: I,
        } = (0, H.cf)([mu.Ay], () => ({
            krispModels: mu.Ay.getKrispModels(),
            krispModelOverride: mu.Ay.getKrispModelOverride(),
            echoCancellation: mu.Ay.getEchoCancellation(),
            autoThreshold: mu.Ay.getModeOptions().autoThreshold,
            vadUseKrisp: mu.Ay.getModeOptions().vadUseKrisp,
            inputMode: mu.Ay.getMode(),
            vadKrispActivationThreshold: mu.Ay.getKrispVadActivationThreshold(),
            noiseCancellation: mu.Ay.getNoiseCancellation(),
            noiseSuppression: mu.Ay.getNoiseSuppression(),
            noiseSuppressionSupported: mu.Ay.isNoiseSuppressionSupported(),
            noiseCancellationSupported: mu.Ay.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: mu.Ay.getKrispEnableStats(),
            vadDuringPreProcess: mu.Ay.getModeOptions().vadDuringPreProcess,
        })),
        T = _ ? "KRISP" : S ? "STANDARD" : "NONE",
        R = (0, mA.v)(),
        O = o.useCallback(() => {
            u.current?.stop(), (u.current = null), c(null);
        }, []);
    function w() {
        mu.Ay.getMediaEngine().stopRecordingRawSamples();
    }
    function M(e) {
        if ((t && w(), O(), null == R)) return;
        let a = R.createBufferSource();
        (a.buffer = e.audioBuffer),
            (m.current = R.createGain()),
            (m.current.gain.value = h),
            a.connect(m.current),
            m.current.connect(R.destination),
            (a.loop = !0),
            a.start(),
            (u.current = a),
            c(e);
    }
    o.useEffect(() => {
        O();
    }, [O]),
        (0, mN.l0)(() => {
            mS.A.setMode(mu.Ay.getMode(), { vadDuringPreProcess: null, vadKrispActivationThreshold: void 0 });
        });
    let L = [];
    return (
        A && L.push({ id: "krisp", label: "Krisp", value: "KRISP" }),
        N && L.push({ id: "standard", label: "Standard", value: "STANDARD" }),
        L.push({ id: "disabled", label: "Disabled", value: "NONE" }),
        (0, r.jsx)(d.Ip, {
            className: tF.nd,
            children: (0, r.jsxs)("div", {
                className: mD.l,
                children: [
                    (0, r.jsx)(D.E, { variant: "text-lg/bold", children: "Krisp Tester" }),
                    (0, r.jsx)(mk.U, {
                        label: "Input Device",
                        deviceType: mm.oh.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, r.jsx)(x.l, {
                        label: "Noise Cancellation",
                        value: T,
                        onSelectionChange: (e) => {
                            mS.A.setNoiseCancellation("KRISP" === e), mS.A.setNoiseSuppression("STANDARD" === e);
                        },
                        options: L,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    "KRISP" === T &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(c9.A, {
                                    label: "Krisp Suppression Level",
                                    initialValue: s,
                                    onValueChange: mS.A.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                }),
                                (0, r.jsx)(x.l, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    value: j,
                                    options: g.map((e) => ({ label: e, value: e, id: e })),
                                    onSelectionChange: (e) => {
                                        mS.A.setKrispModelOverride(e ?? "");
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(v.d, {
                                    label: "Enable Stats",
                                    checked: k,
                                    onChange: (e) => mS.A.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    b === mm.TB.VOICE_ACTIVITY &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(v.d, {
                                    label: "Auto Threshold",
                                    checked: y,
                                    onChange: (e) => mS.A.setMode(mm.TB.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                y &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(v.d, {
                                                label: "Use Krisp VAD",
                                                checked: E,
                                                onChange: (e) => mS.A.setMode(mm.TB.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            E &&
                                                (0, r.jsx)(c9.A, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    initialValue: C,
                                                    onValueChange: (e) =>
                                                        mS.A.setMode(mm.TB.VOICE_ACTIVITY, {
                                                            vadKrispActivationThreshold: e,
                                                        }),
                                                    minValue: 0,
                                                    maxValue: 1,
                                                }),
                                        ],
                                    }),
                                (0, r.jsx)(v.d, {
                                    label: "Run Before Processing",
                                    checked: I ?? !1,
                                    onChange: (e) => mS.A.setMode(mm.TB.VOICE_ACTIVITY, { vadDuringPreProcess: e }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(v.d, {
                        label: "Echo Cancellation",
                        checked: f,
                        onChange: (e) => mS.A.setEchoCancellation(e),
                    }),
                    (0, r.jsxs)($.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "Recorder" }),
                            (0, r.jsx)(nj.$n, {
                                color: t ? nj.$n.Colors.RED : nj.$n.Colors.BRAND,
                                onClick: t
                                    ? w
                                    : function () {
                                          O(),
                                              a(!0),
                                              mS.A.setLoopback("krisp_test", !0),
                                              mu.Ay.getMediaEngine().startRecordingRawSamples((t, n, i) => {
                                                  a(!1), mS.A.setLoopback("krisp_test", !1);
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
                                                          suppression: T,
                                                          echoCancellation: f,
                                                          krispSuppressionLevel: s,
                                                      },
                                                  ]);
                                              });
                                      },
                                children: t ? "Stop Recording" : "Start Recording",
                            }),
                        ],
                    }),
                    (0, r.jsx)(c9.A, {
                        label: "Volume",
                        initialValue: h,
                        asValueChanges: function (e) {
                            null != m.current && ((m.current.gain.value = e), p(e));
                        },
                        minValue: 0,
                        maxValue: 1,
                    }),
                    (0, r.jsxs)($.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "Recordings" }),
                            n.map((e, t) =>
                                (0, r.jsx)(mR, { recording: e, playing: e === i, onPlay: M, onStop: O }, t),
                            ),
                        ],
                    }),
                ],
            }),
        })
    );
}
var mw = a(742158),
    mM = a(717558),
    mL = a(85448),
    mP = a(763827),
    mU = a(977997),
    mG = a(912312);
let mF = [
    { value: "line", label: "Line" },
    { value: "arc", label: "Arc" },
    { value: "grid", label: "Grid" },
    { value: "manual", label: "Manual" },
];
function mB(e, t) {
    let a = t / 2;
    return { x: a + (e.x / 7) * a, y: a + (e.z / 7) * a };
}
function mV(e, t) {
    let a = 7 / t,
        n = e / 2;
    return { zoom: a, pan: { x: n * (1 - a), y: n - n * (1 - t / 14) * a } };
}
function m$(e) {
    let {
            mode: t,
            computedPositions: a,
            otherUsers: n,
            distance: l,
            view: s,
            setView: i,
            canvasSize: d,
            setCanvasSize: c,
        } = e,
        u = o.useRef(null),
        m = o.useRef(null),
        [h, x] = o.useState(new Map()),
        [p, g] = o.useState(null),
        [v, j] = o.useState(!1);
    (0, mN.u5)(() => {
        let e = u.current;
        if (null == e) return;
        let t = !0,
            a = new ResizeObserver((e) => {
                let a = Math.floor(e[0].contentRect.width);
                a <= 0 || (t && ((t = !1), i(mV(a, l))), c(a));
            });
        return a.observe(e), () => a.disconnect();
    }),
        o.useEffect(() => {
            let e = u.current;
            if (null == e) return;
            let t = (t) => {
                t.preventDefault();
                let a = e.getBoundingClientRect(),
                    n = t.clientX - a.left,
                    l = t.clientY - a.top;
                i((e) => {
                    let { zoom: a, pan: s } = e,
                        i = Math.max(mW, Math.min(mz, a * Math.exp(-t.deltaY * mH))),
                        r = i / a;
                    return { zoom: i, pan: { x: n - (n - s.x) * r, y: l - (l - s.y) * r } };
                });
            };
            return e.addEventListener("wheel", t, { passive: !1 }), () => e.removeEventListener("wheel", t);
        }, [i]);
    let b = o.useMemo(() => {
        let e = new Map();
        if (0 === d) return e;
        if ("manual" === t)
            for (let t of n) {
                let a = h.get(t.userId);
                null != a && e.set(t.userId, a);
            }
        else
            n.forEach((t, n) => {
                n < a.length && e.set(t.userId, mB(a[n], d));
            });
        return e;
    }, [t, n, a, h, d]);
    o.useEffect(() => {
        if ("manual" === t || 0 === d) return;
        let e = new Map();
        n.forEach((t, n) => {
            n < a.length && e.set(t.userId, mB(a[n], d));
        }),
            x(e);
    }, [t, n, a, d]),
        o.useEffect(() => {
            let e = m.current;
            if (null == e || 0 === d) return;
            let t = e.getContext("2d");
            if (null != t) {
                t.setTransform(1, 0, 0, 1, 0, 0),
                    t.clearRect(0, 0, d, d),
                    (t.fillStyle = "#1e1f22"),
                    t.fillRect(0, 0, d, d),
                    t.setTransform(s.zoom, 0, 0, s.zoom, s.pan.x, s.pan.y),
                    (t.strokeStyle = "#2b2d31"),
                    (t.lineWidth = 1 / s.zoom);
                for (let e = 0; e <= 10; e++) {
                    let a = (e * d) / 10;
                    t.beginPath(),
                        t.moveTo(a, 0),
                        t.lineTo(a, d),
                        t.stroke(),
                        t.beginPath(),
                        t.moveTo(0, a),
                        t.lineTo(d, a),
                        t.stroke();
                }
                (t.fillStyle = "#23a559"),
                    t.beginPath(),
                    t.arc(d / 2, d / 2, 10 / s.zoom, 0, 2 * Math.PI),
                    t.fill(),
                    (t.fillStyle = "#ffffff"),
                    (t.font = `bold ${11 / s.zoom}px sans-serif`),
                    (t.textAlign = "center"),
                    t.fillText("You", d / 2, d / 2 - 16 / s.zoom);
            }
        }, [d, s]);
    let f = o.useCallback(
            (e, a) => {
                "manual" === t && 0 === e.button && g(a);
            },
            [t],
        ),
        y = o.useCallback((e) => {
            2 === e.button && j(!0);
        }, []),
        E = o.useCallback(
            (e) => {
                let t;
                if (v)
                    return void i((t) => ({
                        zoom: t.zoom,
                        pan: { x: t.pan.x + e.movementX, y: t.pan.y + e.movementY },
                    }));
                if (null == p) return;
                let a = m.current;
                if (null == a || 0 === d) return;
                let n = a.getBoundingClientRect(),
                    l = (e.clientX - n.left - s.pan.x) / s.zoom,
                    r = (e.clientY - n.top - s.pan.y) / s.zoom;
                x((e) => new Map(e).set(p, { x: l, y: r }));
                let o = { x: ((l - (t = d / 2)) / t) * 7, y: 0, z: ((r - t) / t) * 7 };
                mu.Ay.getMediaEngine().eachConnection((e) => {
                    e.setUserPosition(p, o);
                });
            },
            [v, p, d, s.pan.x, s.pan.y, s.zoom, i],
        ),
        C = o.useCallback(() => {
            g(null), j(!1);
        }, []),
        _ = v ? "grabbing" : "default";
    return (0, r.jsxs)("div", {
        ref: u,
        className: mG.BW,
        style: { cursor: _ },
        onMouseDown: y,
        onMouseMove: E,
        onMouseUp: C,
        onMouseLeave: C,
        onContextMenu: (e) => e.preventDefault(),
        children: [
            (0, r.jsx)("canvas", { ref: m, width: d, height: d, className: mG.Ji }),
            n.map((e) => {
                let a = b.get(e.userId);
                return null == a
                    ? null
                    : (0, r.jsx)(
                          mK,
                          {
                              userId: e.userId,
                              x: a.x * s.zoom + s.pan.x,
                              y: a.y * s.zoom + s.pan.y,
                              draggable: "manual" === t,
                              onMouseDown: f,
                          },
                          e.userId,
                      );
            }),
        ],
    });
}
let mW = 0.25,
    mz = 4,
    mH = 0.002;
function mK(e) {
    let { userId: t, x: a, y: n, draggable: l, onMouseDown: s } = e,
        i = (0, H.bG)([en.default], () => en.default.getUser(t)),
        o = (0, mM.A)({ userId: t });
    return null == i
        ? null
        : (0, r.jsx)(l0.m, {
              text: i.username,
              children: (0, r.jsx)("div", {
                  className: mG.my,
                  style: { left: a - 12, top: n - 12, cursor: l ? "grab" : "default" },
                  onMouseDown: (e) => s(e, t),
                  children: (0, r.jsx)(mL.A, {
                      userId: t,
                      size: rU._3.SIZE_24,
                      src: i.getAvatarURL(void 0, 24),
                      speaking: o,
                      ringing: !1,
                  }),
              }),
          });
}
function mY() {
    return mu.Ay.getMediaEngine().supports(mm.O5.SPATIAL_AUDIO)
        ? (0, r.jsx)(mq, {})
        : (0, r.jsx)(d.Ip, {
              className: tF.nd,
              children: (0, r.jsxs)("div", {
                  className: mG.kL,
                  children: [
                      (0, r.jsx)(z.D, { variant: "heading-lg/semibold", className: mG.R_, children: "Spatial Audio" }),
                      (0, r.jsx)(D.E, {
                          variant: "text-md/normal",
                          children: "Spatial audio is not supported by this client. Update Discord to enable.",
                      }),
                  ],
              }),
          });
}
function mq() {
    let e = (0, H.bG)([mu.Ay], () => mu.Ay.getAudioMixerSettings()),
        t = rY.x.DEFAULT,
        [a, n] = o.useState({ zoom: 1, pan: { x: 0, y: 0 } }),
        [l, s] = o.useState(0),
        i = (0, H.bG)([mP.A, aj.A], () => {
            let e = mP.A.getChannelId();
            return null != e ? aj.A.getChannel(e) : null;
        }),
        c = nD.default.getId(),
        u = i?.id,
        m = (0, H.yK)(
            [mU.A],
            () => (null == u ? [] : Object.values(mU.A.getVoiceStatesForChannel(u)).filter((e) => e.userId !== c)),
            [u, c],
        ),
        x = e.mode ?? "line",
        p = o.useMemo(
            () =>
                "manual" !== x
                    ? (function (e, t, a) {
                          if (0 === a) return [];
                          if (1 === a) return [{ x: 0, y: 0, z: -t.distance }];
                          switch (e) {
                              case "line": {
                                  let e = [];
                                  for (let n = 0; n < a; n++) {
                                      let l = n / (a - 1);
                                      e.push({ x: -t.spread / 2 + t.spread * l, y: 0, z: -t.distance });
                                  }
                                  return e;
                              }
                              case "arc": {
                                  let e = [],
                                      n = (t.arcAngle * Math.PI) / 180,
                                      l = n / 2;
                                  for (let s = 0; s < a; s++) {
                                      let i = Math.PI / 2 + l - (s / (a - 1)) * n;
                                      e.push({ x: t.distance * Math.cos(i), y: 0, z: -t.distance * Math.sin(i) });
                                  }
                                  return e;
                              }
                              case "grid": {
                                  let e = [],
                                      n = t.gridColumns;
                                  for (let l = 0; l < a; l++) {
                                      let a = l % n,
                                          s = Math.floor(l / n);
                                      e.push({
                                          x: (a - (n - 1) / 2) * t.gridSpacing,
                                          y: 0,
                                          z: -(t.distance + s * t.gridSpacing),
                                      });
                                  }
                                  return e;
                              }
                              default:
                                  return [];
                          }
                      })(x, e, m.length)
                    : [],
            [x, e, m.length],
        );
    o.useEffect(() => {
        "manual" === x ||
            mu.Ay.getMediaEngine().eachConnection((e) => {
                m.forEach((t, a) => {
                    a < p.length && e.setUserPosition(t.userId, p[a]);
                });
            });
    }, [x, p, m]);
    let j = o.useCallback(
            (a) => {
                mS.A.setAudioMixerSettings({ ...e, ...a }, t);
            },
            [e, t],
        ),
        b = o.useRef(null),
        f = o.useCallback(
            (e) => {
                null !== b.current && clearTimeout(b.current),
                    (b.current = window.setTimeout(() => {
                        j({ roomSize: e }), (b.current = null);
                    }, 500));
            },
            [j],
        );
    return (0, r.jsx)(d.Ip, {
        className: tF.nd,
        children: (0, r.jsxs)("div", {
            className: mG.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: mG.ne,
                    children: [
                        (0, r.jsx)(z.D, {
                            variant: "heading-lg/semibold",
                            className: mG.R_,
                            children: "Spatial Audio",
                        }),
                        (0, r.jsxs)("div", {
                            className: mG.nM,
                            children: [
                                (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Enabled" }),
                                (0, r.jsx)(v.d, { checked: e.enabled, onChange: (e) => j({ enabled: e }) }),
                            ],
                        }),
                        (0, r.jsx)(g.c, { className: mG.yF }),
                        (0, r.jsx)(mw.z, { className: mG.Pf, children: "Spatial Blend" }),
                        (0, r.jsx)(c9.A, {
                            className: mG.aw,
                            initialValue: e.spatialBlend,
                            value: e.spatialBlend,
                            minValue: 0,
                            maxValue: 1,
                            asValueChanges: (e) => j({ spatialBlend: e }),
                            onValueRender: (e) => e.toFixed(2),
                        }),
                        (0, r.jsx)(mw.z, { className: mG.Pf, children: "Room Size (m\xb2)" }),
                        (0, r.jsx)(c9.A, {
                            className: mG.aw,
                            initialValue: e.roomSize ?? 25,
                            value: e.roomSize ?? 25,
                            minValue: 10,
                            maxValue: 150,
                            asValueChanges: f,
                            onValueRender: (e) => e.toFixed(0),
                        }),
                        (0, r.jsx)(g.c, { className: mG.yF }),
                        (0, r.jsx)(mw.z, { className: mG.Pf, children: "Placement Mode" }),
                        (0, r.jsx)("div", {
                            className: mG.XU,
                            children: mF.map((t) => {
                                let { value: a, label: s } = t;
                                return (0, r.jsx)(
                                    "button",
                                    {
                                        className: `${mG._V} ${x === a ? mG.cB : ""}`,
                                        onClick: () => {
                                            j({ mode: a }), l > 0 && n(mV(l, e.distance));
                                        },
                                        children: s,
                                    },
                                    a,
                                );
                            }),
                        }),
                        "manual" !== x &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(mw.z, { className: mG.Pf, children: "Distance" }),
                                    (0, r.jsx)(c9.A, {
                                        className: mG.aw,
                                        initialValue: e.distance,
                                        value: e.distance,
                                        minValue: 1,
                                        maxValue: 10,
                                        asValueChanges: (e) => j({ distance: e }),
                                        onValueRender: (e) => e.toFixed(1),
                                    }),
                                ],
                            }),
                        "line" === x &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(mw.z, { className: mG.Pf, children: "Spread" }),
                                    (0, r.jsx)(c9.A, {
                                        className: mG.aw,
                                        initialValue: e.spread,
                                        value: e.spread,
                                        minValue: 0,
                                        maxValue: 10,
                                        asValueChanges: (e) => j({ spread: e }),
                                        onValueRender: (e) => e.toFixed(1),
                                    }),
                                ],
                            }),
                        "arc" === x &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(mw.z, { className: mG.Pf, children: "Arc Angle" }),
                                    (0, r.jsx)(c9.A, {
                                        className: mG.aw,
                                        initialValue: e.arcAngle ?? 180,
                                        value: e.arcAngle ?? 180,
                                        minValue: 0,
                                        maxValue: 180,
                                        asValueChanges: (e) => j({ arcAngle: e }),
                                        onValueRender: (e) => `${e.toFixed(0)}\xb0`,
                                    }),
                                ],
                            }),
                        "grid" === x &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(mw.z, { className: mG.Pf, children: "Columns" }),
                                    (0, r.jsx)(c9.A, {
                                        className: mG.aw,
                                        initialValue: e.gridColumns ?? 3,
                                        value: e.gridColumns ?? 3,
                                        minValue: 2,
                                        maxValue: 6,
                                        keyboardStep: 1,
                                        asValueChanges: (e) => j({ gridColumns: Math.round(e) }),
                                        onValueRender: (e) => e.toFixed(0),
                                    }),
                                    (0, r.jsx)(mw.z, { className: mG.Pf, children: "Spacing (m)" }),
                                    (0, r.jsx)(c9.A, {
                                        className: mG.aw,
                                        initialValue: e.gridSpacing ?? 1.5,
                                        value: e.gridSpacing ?? 1.5,
                                        minValue: 0.5,
                                        maxValue: 3,
                                        asValueChanges: (e) => j({ gridSpacing: e }),
                                        onValueRender: (e) => e.toFixed(1),
                                    }),
                                ],
                            }),
                        (0, r.jsx)(g.c, { className: mG.yF }),
                        (0, r.jsx)(h.$, {
                            variant: "secondary",
                            size: "sm",
                            text: "Reset to Defaults",
                            onClick: () => {
                                let a = { ...mu.bY, enabled: e.enabled };
                                mS.A.setAudioMixerSettings(a, t), l > 0 && n(mV(l, a.distance));
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(m$, {
                    mode: x,
                    computedPositions: p,
                    otherUsers: m,
                    distance: e.distance,
                    view: a,
                    setView: n,
                    canvasSize: l,
                    setCanvasSize: s,
                }),
            ],
        }),
    });
}
var mJ = a(803306),
    mQ = a(243217),
    mX = a(189213),
    mZ = a(935208),
    m0 = a(878784);
let m1 = [
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
function m2() {
    let [e, t] = o.useState(!1),
        a = (0, H.bG)([en.default], () => en.default.getCurrentUser()),
        n = (0, m0.Lh)(),
        l = (0, H.bG)([rX.A], () => rX.A.getPremiumTypeSubscription()),
        s = null != n ? (sj.VD[n]?.tenureReqNumMonths ?? 0) : 0,
        i = o.useCallback(
            async (e) => {
                let n = new Date();
                e > 0 ? n.setMonth(n.getMonth() - e) : n.setDate(n.getDate() - 7), n.setDate(n.getDate() - 2);
                let s = {
                    subscription_status: er.Dmq.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: mZ.default.fromTimestamp(n.getTime()),
                };
                t(!0),
                    await n4.Bo.patch({ url: `/debug/subscriptions/${l.id}`, body: s, rejectWithError: !1 }),
                    await (0, mJ.eO)(a.id),
                    await (0, dj.hP)(),
                    t(!1);
            },
            [l, a],
        );
    if (null != a && null != l)
        return (0, r.jsx)(x.l, {
            label: "Tenure",
            hideLabel: !0,
            selectionMode: "single",
            disabled: e,
            value: s,
            options: m1,
            onSelectionChange: i,
        });
}
var m8 =
        (((l = {})[(l.DEFAULT = 0)] = "DEFAULT"),
        (l[(l.SUCCESSFUL = 1)] = "SUCCESSFUL"),
        (l[(l.FAILURE = 2)] = "FAILURE"),
        (l[(l.NONE = 3)] = "NONE"),
        l),
    m3 =
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
async function m6(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetDate: n, paymentType: l, sendReminderEmail: s } = a;
    return (
        await n4.Bo.post({
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
var m5 = a(601107);
let m9 = {
        [er.Dmq.UNPAID]: "Unpaid",
        [er.Dmq.ACTIVE]: "Active",
        [er.Dmq.PAST_DUE]: "Past Due",
        [er.Dmq.CANCELED]: "Canceled",
        [er.Dmq.ENDED]: "Ended",
        [er.Dmq.ACCOUNT_HOLD]: "Account Hold",
        [er.Dmq.BILLING_RETRY]: "Billing Retry",
        [er.Dmq.PAUSED]: "Paused",
        [er.Dmq.PAUSE_PENDING]: "Pause Pending",
    },
    m4 = {
        [m5.qf.UNKNOWN]: "Unknown",
        [m5.qf.ADMIN]: "Admin",
        [m5.qf.USER]: "User",
        [m5.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [m5.qf.DEFERRED_START]: "Deferred Start",
        [m5.qf.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    m7 = [
        { id: "unpaid", label: "Unpaid", value: er.Dmq.UNPAID },
        { id: "active", label: "Active", value: er.Dmq.ACTIVE },
        { id: "pastDue", label: "Past Due", value: er.Dmq.PAST_DUE },
        { id: "canceled", label: "Canceled", value: er.Dmq.CANCELED },
        { id: "ended", label: "Ended", value: er.Dmq.ENDED },
        { id: "accountHold", label: "Account Hold", value: er.Dmq.ACCOUNT_HOLD },
        { id: "billingRetry", label: "Billing Retry", value: er.Dmq.BILLING_RETRY },
        { id: "paused", label: "Paused", value: er.Dmq.PAUSED },
        { id: "pausePending", label: "Pause Pending", value: er.Dmq.PAUSE_PENDING },
    ];
function he(e) {
    let { subscription: t, onClose: a, onUpdated: n, transitionState: l } = e,
        [s, i] = o.useState(nv()()),
        [d, c] = o.useState(nv()().format("HH:mm")),
        [m, h] = o.useState(!1),
        [x, p] = o.useState(void 0),
        g = async () => {
            if (null == s) return void p("Please select a target date");
            let [e, l] = d.split(":").map(Number),
                i = s.clone().hours(e).minutes(l).seconds(0).milliseconds(0);
            h(!0), p(void 0);
            try {
                await m6(t.id, m3.TIME_TRAVEL, { targetDate: i, paymentType: m8.DEFAULT, sendReminderEmail: !1 }),
                    n(),
                    a();
            } catch (e) {
                p(e.body?.message || e.message || "Failed to time travel");
            } finally {
                h(!1);
            }
        };
    return (0, r.jsx)(mX.Modal, {
        transitionState: l,
        onClose: () => (a(), Promise.resolve()),
        title: "Time Travel Subscription",
        size: "sm",
        actions: [
            { text: "Cancel", variant: "secondary", onClick: a },
            { text: "Time Travel", variant: "primary", onClick: g, disabled: m || null == s },
        ],
        children: (0, r.jsxs)($.B, {
            gap: 16,
            children: [
                (0, r.jsx)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children:
                        "Select the target date and time to travel the subscription to. This will adjust the subscription period and trigger any necessary invoice operations.",
                }),
                (0, r.jsx)(ig.J, { label: "Target Date", value: s, onSelect: i }),
                (0, r.jsx)(u.n, {
                    label: "Target Time (HH:mm)",
                    children: (0, r.jsx)("input", {
                        type: "time",
                        value: d,
                        onChange: (e) => {
                            c(e.target.value);
                        },
                        className: oc.Qn,
                    }),
                }),
                (0, r.jsxs)($.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(D.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: "Current Period",
                        }),
                        (0, r.jsxs)($.B, {
                            gap: 4,
                            children: [
                                (0, r.jsxs)(D.E, {
                                    variant: "text-xs/normal",
                                    className: oc.JX,
                                    children: ["Start: ", nv()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, r.jsxs)(D.E, {
                                    variant: "text-xs/normal",
                                    className: oc.JX,
                                    children: ["End: ", nv()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
                                }),
                            ],
                        }),
                    ],
                }),
                null != x && (0, r.jsx)(V.w, { type: "critical", children: x }),
            ],
        }),
    });
}
function ht(e) {
    var t;
    let a,
        { subscription: n, onUpdated: l } = e,
        [s, i] = o.useState(!1),
        [d, c] = o.useState(!1),
        [m, p] = o.useState(!1),
        [g, v] = o.useState(!1),
        [j, b] = o.useState(null),
        f = (e) => {
            let t = new Date(e);
            return mZ.default.fromTimestamp(t.getTime());
        },
        y = async (e) => {
            let { status: t = n.status, premiumStreakStart: a, endedAt: s } = e,
                i = {
                    subscription_status: t,
                    ...(null != a ? { premium_streak_started_at: f(a) } : null),
                    ...(null != s ? { ended_at: f(s) } : null),
                };
            await n4.Bo.patch({ url: `/debug/subscriptions/${n.id}`, body: i, rejectWithError: !1 }), l();
        },
        E = async () => {
            try {
                await m6(n.id, m3.RENEW, {
                    targetDate: nv()(new Date()),
                    paymentType: m8.DEFAULT,
                    sendReminderEmail: !1,
                });
            } catch (e) {
                b(e.body?.message || e.message || "Failed to renew subscription");
            }
            l();
        },
        C = sj.hd[n.planIdFromItems]?.premiumType === sj.PremiumTypes.TIER_0,
        _ = n.metadata?.ended_at,
        S = null != _ ? new Date(_).toISOString().substring(0, 10) : "",
        N = [
            { id: "id", label: `ID: ${n.id}`, isDisabled: !1 },
            {
                id: "status",
                label: `Status: ${(null == t && (t = n.status), t in m9) ? m9[t] : `Unknown status ${t}`}`,
                isDisabled: !1,
            },
        ],
        A = n.hasActiveTrial,
        k = n.metadata?.active_discount_id != null;
    return (
        A && N.push({ id: "trial", label: "Has Trial", isDisabled: !1 }),
        k && N.push({ id: "active-discount", label: "Has Active Discount", isDisabled: !1 }),
        n.status !== er.Dmq.ACTIVE &&
            N.push({
                id: "dates",
                label: `Dates: ${(0, nk.i$)(n.createdAt, "LL")} - ${(0, nk.i$)(n.currentPeriodEnd, "LL")}`,
                isDisabled: !1,
            }),
        n.status === er.Dmq.PAUSED &&
            N.push({
                id: "pause-reason",
                label: `Pause Reason: ${n.pauseReason in m4 ? m4[n.pauseReason] : `Unknown pause reason ${n.pauseReason}`}`,
                isDisabled: !1,
            }),
        (0, r.jsx)("div", {
            className: F()(sS.Nr, C ? sS.Qf : sS.C1),
            children: (0, r.jsxs)(u.n, {
                label: `Type: ${null == ((a = n.planIdFromItems)) ? "No plan id" : a in sj.hd ? sj.hd[a].name : `Unknown plan id ${a}`}`,
                className: oc.lI,
                children: [
                    (0, r.jsx)(oo.C, {
                        items: N,
                        label: "Tags",
                        selectionMode: "none",
                        selectionBehavior: "replace",
                        disabledKeys: new Set(),
                    }),
                    A &&
                        (0, r.jsxs)("div", {
                            className: oc.VK,
                            children: [
                                (0, r.jsxs)(B.D, {
                                    onClick: () => {
                                        p(!m);
                                    },
                                    className: oc.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(D.E, {
                                                variant: "text-md/bold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, r.jsx)(sg.A, { direction: m ? sg.A.Directions.UP : sg.A.Directions.DOWN }),
                                    ],
                                }),
                                m &&
                                    (0, r.jsxs)("ul", {
                                        className: oc.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(D.E, { variant: "text-md/bold", children: "trial_id" }),
                                                    (0, r.jsx)(D.E, { variant: "text-sm/normal", children: n.trialId }),
                                                ],
                                            }),
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-md/bold",
                                                        children: "trial_ends_at",
                                                    }),
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            null != n.trialEndsAt
                                                                ? (0, nk.i$)(n.trialEndsAt, "LL")
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
                            className: oc.VK,
                            children: [
                                (0, r.jsxs)(B.D, {
                                    onClick: () => {
                                        v(!g);
                                    },
                                    className: oc.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(D.E, {
                                                variant: "text-md/bold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, r.jsx)(sg.A, { direction: g ? sg.A.Directions.UP : sg.A.Directions.DOWN }),
                                    ],
                                }),
                                g &&
                                    (0, r.jsxs)("ul", {
                                        className: oc.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_id",
                                                    }),
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-sm/normal",
                                                        children: n.metadata?.active_discount_id,
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_expires_at",
                                                    }),
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            n.metadata?.active_discount_expires_at != null
                                                                ? (0, nk.i$)(
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
                            className: oc.VK,
                            children: [
                                (0, r.jsxs)(B.D, {
                                    onClick: () => {
                                        i(!s);
                                    },
                                    className: oc.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(D.E, {
                                                variant: "text-md/bold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, r.jsx)(sg.A, { direction: s ? sg.A.Directions.UP : sg.A.Directions.DOWN }),
                                    ],
                                }),
                                s &&
                                    (0, r.jsx)("ul", {
                                        className: oc.j3,
                                        children: Object.entries(n.metadata).map((e) => {
                                            let [t, a] = e;
                                            return (0, r.jsxs)(
                                                "li",
                                                {
                                                    children: [
                                                        (0, r.jsx)(D.E, { variant: "text-md/bold", children: t }),
                                                        (0, r.jsx)(D.E, { variant: "text-sm/normal", children: a }),
                                                    ],
                                                },
                                                t,
                                            );
                                        }),
                                    }),
                            ],
                        }),
                    (0, r.jsxs)("div", {
                        className: oc.VK,
                        children: [
                            (0, r.jsxs)(B.D, {
                                onClick: () => {
                                    c(!d);
                                },
                                className: oc.Eh,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(D.E, {
                                            variant: "text-md/bold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, r.jsx)(sg.A, { direction: d ? sg.A.Directions.UP : sg.A.Directions.DOWN }),
                                ],
                            }),
                            d &&
                                (0, r.jsxs)($.B, {
                                    gap: 24,
                                    children: [
                                        (0, r.jsx)(x.l, {
                                            label: "Status",
                                            value: n.status,
                                            options: m7,
                                            onSelectionChange: (e) => {
                                                y({ status: e });
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsxs)("div", {
                                            children: [
                                                (0, r.jsxs)($.B, {
                                                    gap: 12,
                                                    children: [
                                                        (0, r.jsx)(h.$, {
                                                            variant: "primary",
                                                            size: "sm",
                                                            text: "Renew Subscription",
                                                            onClick: (e) => E(),
                                                        }),
                                                        (0, r.jsx)(h.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Time Travel",
                                                            onClick: () => {
                                                                (0, T.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, r.jsx)(he, {
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
                                                null !== j &&
                                                    (0, r.jsx)("div", {
                                                        className: oc.z3,
                                                        children: (0, r.jsx)(V.w, { type: "critical", children: j }),
                                                    }),
                                            ],
                                        }),
                                        (0, r.jsxs)($.B, {
                                            gap: 16,
                                            children: [
                                                (0, r.jsx)(ig.J, {
                                                    label: "Premium Streak Start Date",
                                                    value: nv()(n.premiumSince?.toISOString().substring(0, 10)),
                                                    onSelect: (e) => y({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, r.jsx)(m2, {}),
                                            ],
                                        }),
                                        (0, r.jsx)(ig.J, {
                                            label: "Metadata Ended At Date",
                                            value: "" !== S ? nv()(S) : void 0,
                                            onSelect: (e) => y({ endedAt: e.toISOString() }),
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
let ha = async () =>
        (
            await n4.Bo.get({
                url: er.Rsh.BILLING_SUBSCRIPTIONS,
                query: { include_inactive: !0, limit: 5 },
                rejectWithError: !1,
            })
        ).body.map((e) => mQ.A.createFromServer(e)),
    hn = [
        { id: "nitro-monthly", label: "Nitro Monthly", value: sj.gD.PREMIUM_MONTH_TIER_2 },
        { id: "nitro-yearly", label: "Nitro Yearly", value: sj.gD.PREMIUM_YEAR_TIER_2 },
        { id: "nitro-classic-monthly", label: "Nitro Classic Monthly", value: sj.gD.PREMIUM_MONTH_TIER_1 },
        { id: "nitro-classic-yearly", label: "Nitro Classic Yearly", value: sj.gD.PREMIUM_YEAR_TIER_1 },
        { id: "basic-monthly", label: "Basic Monthly", value: sj.gD.PREMIUM_MONTH_TIER_0 },
        { id: "basic-yearly", label: "Basic Yearly", value: sj.gD.PREMIUM_YEAR_TIER_0 },
        { id: "reverse-trial-1week", label: "Reverse Trial 1-week", value: sj.gd },
        { id: "reverse-trial-2week", label: "Reverse Trial 2-week", value: sj.Uk },
        { id: "nitro-squad-monthly", label: "Nitro Squad Monthly", value: sj.gD.PREMIUM_GROUP_MONTH },
    ];
function hl() {
    let e = (0, H.bG)([rX.A], () => rX.A.getPremiumTypeSubscription()),
        t = (0, H.bG)([en.default], () => en.default.getCurrentUser()),
        [a, n] = o.useState("511651880837840896"),
        [l, s] = o.useState([]),
        [i, c] = o.useState(!1),
        u = o.useCallback(async () => {
            try {
                c(!0), await (0, dj.hP)(), await (0, mJ.eO)(t.id), s(await ha());
            } finally {
                c(!1);
            }
        }, [t]);
    o.useEffect(() => {
        u();
    }, [u]);
    let m = o.useMemo(() => l.filter((e) => e.status !== er.Dmq.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [l]),
        p = async () => {
            await n4.Bo.post({ url: "/debug/subscription", body: { plan_id: a }, rejectWithError: !1 }), await u();
        },
        g = async () => {
            await n4.Bo.del({ url: "/debug/subscription", rejectWithError: !1 }), await u();
        };
    return (0, r.jsx)(d.Ip, {
        className: tF.nd,
        children: (0, r.jsxs)("div", {
            className: sS.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: sS.dL,
                    children: [
                        (0, r.jsx)(z.D, {
                            variant: "heading-lg/semibold",
                            className: tF.wx,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, r.jsx)(eG.K, {
                            "aria-label": "Refresh",
                            icon: sp.f,
                            size: "sm",
                            variant: "icon-only",
                            disabled: i,
                            onClick: u,
                        }),
                    ],
                }),
                (0, r.jsx)("section", {
                    className: F()([sS.uW, sS.Uo]),
                    children:
                        null == e &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(x.l, {
                                    label: "Premium Plan",
                                    hideLabel: !0,
                                    value: a,
                                    options: hn,
                                    onSelectionChange: n,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Create Subscription",
                                    onClick: p,
                                }),
                            ],
                        }),
                }),
                null != e && (0, r.jsx)(ht, { subscription: e, onUpdated: u }),
                (0, r.jsx)(z.D, { variant: "heading-lg/semibold", className: tF.wx, children: "Bulk Actions" }),
                (0, r.jsx)("section", {
                    className: F()([sS.uW, sS.Uo]),
                    children: (0, r.jsx)(h.$, {
                        variant: "primary",
                        size: "sm",
                        text: "End All Subscriptions",
                        onClick: g,
                    }),
                }),
                m.length > 0 &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(z.D, {
                                variant: "heading-lg/semibold",
                                className: tF.wx,
                                children: "Previous Subscriptions",
                            }),
                            m.map((e) => (0, r.jsx)(ht, { subscription: e, onUpdated: u }, e.id)),
                        ],
                    }),
            ],
        }),
    });
}
a(801541);
var hs = a(284009),
    hi = a.n(hs),
    hr = a(889137),
    ho = a(412703),
    hd = a(440703),
    hc = a(267548),
    hu = a(668824),
    hm = a(695366),
    hh = a(359778),
    hx = a(507107),
    hp = a(801365),
    hg = a(792620),
    hv = a(241124),
    hj = a(732047),
    hb = a(717695),
    hf = a(961974),
    hy = a(127219),
    hE = a(262514),
    hC = a(291922),
    h_ = a(317097),
    hS = a(452027),
    hN = a(922016),
    hA = a(714385),
    hk = a(654003);
let hI = function (e) {
    let { colorKey: t, value: a, onChange: n, title: l } = e,
        s = o.useRef(null);
    return (0, r.jsx)(hS.D, {
        label: l,
        children: (0, r.jsx)(hN.Y, {
            targetElementRef: s,
            renderPopout: (e) => (0, r.jsx)(cD.VN, { ...e, value: a, onChange: (e) => n(t, (0, h_.Hl)(e)) }),
            children: (e) =>
                (0, r.jsx)(B.D, {
                    ...e,
                    innerRef: s,
                    tag: "span",
                    "aria-label": "Select a color",
                    className: hk.O6,
                    style: { backgroundColor: a },
                    children: (0, r.jsx)(hA.d, { size: "xs", color: "currentColor", className: hk.WY }),
                }),
        }),
    });
};
var hD = a(247928);
let hT = function (e) {
    let { allowClicks: t = !1, children: a, withBorder: n = !1 } = e;
    return (0, r.jsx)(hD.M, {
        children: (0, r.jsx)(hh.Z, {
            className: F()(hk.Rx, { [hk.aK]: n }),
            outline: n,
            children: (0, r.jsx)("div", {
                className: hk.AZ,
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
var hR = a(643374);
let hO = function (e) {
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
            (0, r.jsx)(hS.D, {
                label: s,
                description: `Supported asset formats: ${a.join(", ")}`,
                children: (0, r.jsx)(hR.A, {
                    filename: i?.name ?? n ?? "",
                    filters: [{ name: s, extensions: a }],
                    buttonText: "Browse",
                    placeholder: "Select an asset",
                    onFileSelect: function (e) {
                        if ((d(e ?? null), null == e)) return;
                        let a = URL.createObjectURL(e);
                        c.current = a;
                        let n = new URL(a);
                        n.searchParams.append("mimetype", e.type),
                            n.searchParams.append("name", e.name),
                            l(t, n.toString());
                    },
                }),
            })
        );
    },
    hw = function (e) {
        let { assetKey: t, initialValue: a, onMessageChange: n, title: l } = e,
            [s, i] = o.useState("");
        return (
            o.useEffect(() => {
                i(a ?? "");
            }, [a]),
            (0, r.jsx)(p.k, {
                label: l,
                value: s,
                onChange: function (e) {
                    i(e), n(t, e);
                },
            })
        );
    };
var hM = a(31587);
let hL = function (e) {
    let { onSelect: t, quest: a } = e,
        { quests: n } = (0, hM.mL)({ fetchPolicy: "cache-and-network", callerSource: "prefill_selector" }),
        l = [
            { id: "none", label: "NONE", value: null },
            ...n.map((e) => ({ id: e.id, label: e.config.messages.questName, value: e })),
        ];
    return (0, r.jsx)(x.l, {
        label: "Prefill with Quest",
        options: l,
        value: a,
        onSelectionChange: t,
        selectionMode: "single",
        fullWidth: !0,
    });
};
var hP = a(843282),
    hU = a(372822);
let hG = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
    ],
    hF = function (e) {
        let { onSelect: t, taskDuration: a = 10, taskConfigV2: n } = e;
        return (0, r.jsxs)($.B, {
            gap: 20,
            children: [
                (0, r.jsx)(hP.Pw, {
                    label: "Task Type(s)",
                    className: hU.Z,
                    placeholder: "Select Task Preset",
                    options: hG,
                    renderOptionValue: (e) => e.map((e) => (0, r.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, r.jsx)("div", { children: e.label }),
                    isSelected: (e) => {
                        var t;
                        let a, l, s, i, r;
                        return (
                            e ===
                            ((t = n.tasks),
                            (a = ho.n.PLAY_ON_PLAYSTATION in t || ho.n.PLAY_ON_XBOX in t),
                            (l = ho.n.PLAY_ON_DESKTOP in t),
                            (s = ho.n.STREAM_ON_DESKTOP in t),
                            (i = ho.n.WATCH_VIDEO in t),
                            (r = ho.n.PLAY_ACTIVITY in t),
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
                                        a[ho.n.STREAM_ON_DESKTOP] = { type: ho.n.STREAM_ON_DESKTOP, target: t };
                                        break;
                                    case 0:
                                        a[ho.n.PLAY_ON_DESKTOP] = { type: ho.n.PLAY_ON_DESKTOP, target: t };
                                        break;
                                    case 3:
                                        (a[ho.n.PLAY_ON_PLAYSTATION] = {
                                            type: ho.n.PLAY_ON_PLAYSTATION,
                                            target: t,
                                            externalIds: [],
                                        }),
                                            (a[ho.n.PLAY_ON_XBOX] = {
                                                type: ho.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 4:
                                        (a[ho.n.PLAY_ON_DESKTOP] = { type: ho.n.PLAY_ON_DESKTOP, target: t }),
                                            (a[ho.n.PLAY_ON_PLAYSTATION] = {
                                                type: ho.n.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                            (a[ho.n.PLAY_ON_XBOX] = {
                                                type: ho.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 2:
                                        a[ho.n.WATCH_VIDEO] = {
                                            type: ho.n.WATCH_VIDEO,
                                            target: t,
                                            assets: { video: { url: "" } },
                                            messages: { videoTitle: "" },
                                        };
                                        break;
                                    case 5:
                                        a[ho.n.PLAY_ACTIVITY] = { type: ho.n.PLAY_ACTIVITY, target: t };
                                }
                                return a;
                            })(e, a),
                        });
                    },
                    serialize: String,
                    "data-migration-pending": !0,
                }),
                (0, r.jsx)(p.k, {
                    label: "Task Duration",
                    value: String(a / le.A.Seconds.MINUTE),
                    onChange: function (e) {
                        let a = Number(e);
                        if (isNaN(a)) return;
                        a *= le.A.Seconds.MINUTE;
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
var hB = a(818348);
let hV = function () {
    let e = (0, eu.Ay)();
    return (0, r.jsx)(hS.D, {
        label: "Theme",
        children: (0, r.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
                (0, r.jsx)(em.zy, {
                    theme: hB.NJ.LIGHT,
                    isSelected: e === hB.NJ.LIGHT,
                    onSelect: () => (0, cg.u_)({ theme: hB.NJ.LIGHT }),
                }),
                (0, r.jsx)(em.zy, {
                    theme: hB.NJ.DARK,
                    isSelected: e === hB.NJ.DARK,
                    onSelect: () => (0, cg.u_)({ theme: hB.NJ.DARK }),
                }),
            ],
        }),
    });
};
var h$ =
    (((i = {})[(i.UNENROLLED = 0)] = "UNENROLLED"),
    (i[(i.ENROLLED = 1)] = "ENROLLED"),
    (i[(i.COMPLETED_25 = 2)] = "COMPLETED_25"),
    (i[(i.COMPLETED_50 = 3)] = "COMPLETED_50"),
    (i[(i.COMPLETED_75 = 4)] = "COMPLETED_75"),
    (i[(i.COMPLETED_100 = 5)] = "COMPLETED_100"),
    (i[(i.CLAIMED = 6)] = "CLAIMED"),
    i);
let hW = function (e) {
    let { onChange: t, value: a } = e;
    return (0, r.jsx)(x.l, {
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
var hz = a(617986);
let hH = ["png", "gif", "webp"],
    hK = [...hH, "jpg", "jpeg"],
    hY = Array.from(new Set([...hK, "gif", "mp4", "webm"]));
function hq() {
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
let hJ = "1193992107035983872",
    hQ = {
        id: hJ,
        preview: !0,
        config: {
            id: hJ,
            configVersion: 2,
            startsAt: "2024-01-01T00:00:00+00:00",
            expiresAt: "2030-01-01T00:00:00+00:00",
            application: { id: "123", name: "Sky Runners" },
            messages: { questName: "Sky Runners", gameTitle: "Sky Runners", gamePublisher: "Discord" },
            colors: { primary: "#B377F3", secondary: "#5865F2" },
            rewardsConfig: {
                assignmentMethod: 1,
                rewards: [
                    {
                        skuId: "",
                        asset: "reward.png",
                        assetVideo: null,
                        type: hd.l.REWARD_CODE,
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
                joinOperator: hu.K.AND,
                tasks: { [ho.n.PLAY_ON_DESKTOP]: { type: ho.n.PLAY_ON_DESKTOP, target: 300 } },
            },
            features: [],
            sharePolicy: hc.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: null,
        targetedContent: [],
    };
function hX() {
    var e;
    let [t, n] = o.useState(hQ),
        l = o.useCallback((e) => {
            n({ ...e, preview: !0 });
        }, []),
        [s, i] = o.useState(h$.UNENROLLED),
        [c, u] = o.useState(!1),
        [m, x] = o.useState(!1),
        [p, g] = o.useState(null),
        j =
            ((e = t.config),
            (0, hr.YW)(e)
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
                    (0, hr.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, assets: { ...e.assets, ...s } }))
                        .exhaustive()),
            });
        }
    }
    function f(e, a) {
        let n = t.config.taskConfigV2.tasks,
            s = n[ho.n.WATCH_VIDEO];
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
                taskConfigV2: { ...t.config.taskConfigV2, tasks: { ...n, [ho.n.WATCH_VIDEO]: { ...s, assets: i } } },
            },
        });
    }
    function y(e, a) {
        if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
            var n, s;
            l({
                ...t,
                config:
                    ((n = t.config),
                    (s = { [e]: a }),
                    (0, hr.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, messages: { ...e.messages, ...s } }))
                        .exhaustive()),
            });
        }
    }
    function E(e, a, n) {
        if ("name" === e || "nameWithArticle" === e) {
            var s, i;
            l({
                ...t,
                config:
                    ((s = t.config),
                    (i = { [e]: a }),
                    (0, hr.YW)(s)
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
    function C(e, a) {
        l({ ...t, config: { ...t.config, colors: { ...t.config.colors, [e]: a } } });
    }
    function _() {
        (0, hp.tU)(t.config) && (0, hz.hJ)(t, hx.uF.GIFT_INVENTORY_FOR_YOU, hx.uF.INTERNAL_PREVIEW_TOOL, !0);
    }
    let S = o.useMemo(() => {
            for (let [e, a] of Object.entries(t.config.taskConfigV2.tasks)) if (null != a.target) return a.target;
            return 10 * le.A.Seconds.MINUTE;
        }, [t.config.taskConfigV2.tasks]),
        N = o.useMemo(() => ho.n.WATCH_VIDEO in t.config.taskConfigV2.tasks, [t.config.taskConfigV2.tasks]);
    hi()(!1 !== t.preview && null != t.preview, "Preview config must have property preview: true");
    let A = t.config.taskConfigV2.tasks[ho.n.WATCH_VIDEO];
    return (0, r.jsxs)(d.Ip, {
        className: hk.kL,
        children: [
            (0, r.jsx)(z.D, { variant: "heading-lg/bold", className: hk.R_, children: "Quest Preview Tool" }),
            (0, r.jsx)("div", {
                className: hk.OA,
                children: (0, r.jsx)(hL, {
                    onSelect: function (e) {
                        g(e),
                            null == e ||
                                (i(
                                    (function (e) {
                                        if (null == e.userStatus) return h$.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return h$.CLAIMED;
                                        if (null != e.userStatus.completedAt) return h$.COMPLETED_100;
                                        let t = (0, hg.Yh)(e),
                                            a = t.progressSeconds,
                                            n = t.targetSeconds;
                                        return a / n >= 1
                                            ? h$.COMPLETED_100
                                            : a / n >= 0.75
                                              ? h$.COMPLETED_75
                                              : a / n >= 0.5
                                                ? h$.COMPLETED_50
                                                : a / n >= 0.25
                                                  ? h$.COMPLETED_25
                                                  : h$.ENROLLED;
                                    })(e),
                                ),
                                l(e));
                    },
                    quest: p,
                }),
            }),
            (0, r.jsx)(z.D, { variant: "heading-md/semibold", className: hk.fV, children: "Task Config" }),
            (0, r.jsx)("div", {
                className: hk.OA,
                children: (0, r.jsx)(hF, {
                    taskDuration: S,
                    taskConfigV2: t.config.taskConfigV2,
                    onSelect: function (e) {
                        l({ ...t, config: { ...t.config, taskConfigV2: e } });
                    },
                }),
            }),
            (0, r.jsx)(z.D, { variant: "heading-md/semibold", className: hk.fV, children: "Messages" }),
            (0, r.jsxs)("div", {
                className: hk.OA,
                children: [
                    (0, r.jsx)(hw, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: y,
                        initialValue: t.config.messages.questName,
                    }),
                    (0, r.jsx)(hw, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: y,
                        initialValue: t.config.messages.gameTitle,
                    }),
                    (0, r.jsx)(hw, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: y,
                        initialValue: t.config.messages.gamePublisher,
                    }),
                    N &&
                        (0, r.jsx)(hw, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, a) {
                                let n = t.config.taskConfigV2.tasks,
                                    s = n[ho.n.WATCH_VIDEO];
                                if (null == s) return;
                                let i = { ...s.messages, [e]: a };
                                l({
                                    ...t,
                                    config: {
                                        ...t.config,
                                        taskConfigV2: {
                                            ...t.config.taskConfigV2,
                                            tasks: { ...n, [ho.n.WATCH_VIDEO]: { ...s, messages: i } },
                                        },
                                    },
                                });
                            },
                            initialValue: A?.messages.videoTitle,
                        }),
                ],
            }),
            (0, r.jsx)(z.D, { variant: "heading-md/semibold", className: hk.fV, children: "Assets" }),
            (0, r.jsxs)("div", {
                className: hk.OA,
                children: [
                    (0, r.jsx)(hO, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: b,
                        filters: hY,
                        initialValue: t.config.assets.hero,
                    }),
                    (0, r.jsx)(hO, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: b,
                        filters: hY,
                        initialValue: t.config.assets.heroVideo ?? void 0,
                    }),
                    (0, r.jsx)(hO, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: b,
                        filters: hY,
                        initialValue: t.config.assets.questBarHero,
                    }),
                    (0, r.jsx)(hO, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: b,
                        filters: hY,
                        initialValue: t.config.assets.questBarHeroVideo ?? void 0,
                    }),
                    (0, r.jsx)(hO, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: b,
                        filters: [...hK, "svg"],
                        initialValue: t.config.assets.gameTile,
                    }),
                    (0, r.jsx)(hO, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: b,
                        filters: [...hH, "svg"],
                        initialValue: t.config.assets.logotype,
                    }),
                    N &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(hO, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: f,
                                    filters: hY,
                                    initialValue: A?.assets.video.url,
                                }),
                                (0, r.jsx)(hO, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: f,
                                    filters: hY,
                                    initialValue: A?.assets.videoLowRes?.url,
                                }),
                                (0, r.jsx)(hO, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: f,
                                    filters: hK,
                                    initialValue: A?.assets.video.thumbnail,
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
                            (0, r.jsxs)(z.D, {
                                variant: "heading-md/semibold",
                                className: hk.fV,
                                children: ["Reward #", a + 1],
                            }),
                            (0, r.jsxs)("div", {
                                className: hk.OA,
                                children: [
                                    (0, r.jsx)(hw, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, t) => E(e, t, a),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, r.jsx)(hw, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, t) => E(e, t, a),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== hd.l.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(hO, {
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
                                                                (0, hr.YW)(s)
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
                                            filters: hY,
                                            initialValue: e.asset,
                                        }),
                                    (0, r.jsxs)($.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(z.D, {
                                                variant: "heading-sm/semibold",
                                                children: "Claim Modal",
                                            }),
                                            (0, r.jsx)(h.$, {
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
            (0, r.jsx)(z.D, { variant: "heading-md/semibold", className: hk.fV, children: "Colors & Quest States" }),
            (0, r.jsxs)("div", {
                className: hk.OA,
                children: [
                    (0, r.jsxs)("div", {
                        className: hk.OA,
                        style: { marginBottom: 0 },
                        children: [
                            (0, r.jsx)(hI, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: C,
                                value: t.config.colors.primary,
                            }),
                            (0, r.jsx)(hI, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: C,
                                value: t.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: hk.OA, children: (0, r.jsx)(hV, {}) }),
                    (0, r.jsx)(hW, {
                        onChange: function (e) {
                            switch ((i(e), e)) {
                                case h$.UNENROLLED:
                                    l({ ...t, userStatus: null });
                                    break;
                                case h$.ENROLLED:
                                    l({ ...t, userStatus: hq({ enrolledAt: new Date().toISOString() }) });
                                    break;
                                case h$.COMPLETED_25:
                                    l({
                                        ...t,
                                        userStatus: hq({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * S,
                                        }),
                                    });
                                    break;
                                case h$.COMPLETED_50:
                                    l({
                                        ...t,
                                        userStatus: hq({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * S,
                                        }),
                                    });
                                    break;
                                case h$.COMPLETED_75:
                                    l({
                                        ...t,
                                        userStatus: hq({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * S,
                                        }),
                                    });
                                    break;
                                case h$.COMPLETED_100:
                                    l({
                                        ...t,
                                        userStatus: hq({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: S,
                                        }),
                                    });
                                    break;
                                case h$.CLAIMED:
                                    l({
                                        ...t,
                                        userStatus: hq({
                                            claimedAt: new Date().toISOString(),
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: S,
                                        }),
                                    });
                            }
                        },
                        value: s,
                    }),
                ],
            }),
            (0, r.jsx)(z.D, { variant: "heading-lg/bold", className: hk.R_, children: "Component Previews" }),
            (0, r.jsxs)("div", {
                className: hk.$$,
                children: [
                    (0, r.jsxs)(hT, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(z.D, { variant: "heading-sm/semibold", children: "Quest Bar" }),
                            (0, r.jsxs)("div", {
                                className: hk.l4,
                                children: [
                                    t.userStatus?.claimedAt != null &&
                                        (0, r.jsx)(D.E, {
                                            color: "text-subtle",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, r.jsx)("div", {
                                        className: hk.ok,
                                        children: (0, r.jsx)(hv.jY, {
                                            isPreview: !0,
                                            source: "preview",
                                            questId: "0",
                                            children: (0, r.jsx)(hb.A, { children: (0, r.jsx)(hj.Y, { quest: t }) }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(hT, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(z.D, { variant: "heading-sm/semibold", children: "Quest Home Card" }),
                            (0, r.jsx)(hv.jY, {
                                isPreview: !0,
                                source: "preview",
                                questId: "0",
                                children: (0, r.jsx)(hC.Ay, {
                                    quest: t,
                                    className: hk.d,
                                    questContent: hx.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: hx.uF.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(hT, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(z.D, { variant: "heading-sm/semibold", children: "Channel Call Header" }),
                            t.userStatus?.claimedAt != null &&
                                (0, r.jsx)(D.E, {
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children:
                                        "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                                }),
                            (0, r.jsx)("div", {
                                className: hk.l4,
                                children: (0, r.jsx)(hv.jY, {
                                    isPreview: !0,
                                    source: "preview",
                                    questId: "0",
                                    children: (0, r.jsx)("div", {
                                        className: hk.Jr,
                                        children: (0, r.jsx)(hf.A, {
                                            channelId: "123",
                                            previewQuest: t,
                                            isParticipatingOverride: c,
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: hk.NY,
                        children: (0, r.jsx)(v.d, {
                            label: "Is Participating:",
                            checked: c,
                            onChange: function (e) {
                                u(e);
                            },
                        }),
                    }),
                    (0, r.jsxs)(hT, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(z.D, { variant: "heading-sm/semibold", children: "Quest Card Embed" }),
                            m
                                ? (0, r.jsx)(hy.l, { questId: t.id })
                                : (0, r.jsx)(
                                      hE.M,
                                      {
                                          quest: t,
                                          location: hx.uF.QUESTS_EMBED,
                                          sourceQuestContent: hx.uF.INTERNAL_PREVIEW_TOOL,
                                      },
                                      t.id,
                                  ),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: hk.NY,
                        children: (0, r.jsx)(v.d, { label: "Invalid Quests Embed:", checked: m, onChange: x }),
                    }),
                    N &&
                        (0, r.jsxs)(hT, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, r.jsx)(z.D, { variant: "heading-sm/semibold", children: "Video Player" }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        let e = performance.now();
                                        (0, T.openModalLazy)(async () => {
                                            let { default: n } = await Promise.all([
                                                a.e("45768"),
                                                a.e("20071"),
                                                a.e("92868"),
                                                a.e("63408"),
                                                a.e("77375"),
                                                a.e("97199"),
                                            ]).then(a.bind(a, 834135));
                                            return (a) =>
                                                (0, r.jsx)(n, {
                                                    ...a,
                                                    openStartClockTime: e,
                                                    videoSessionId: "fake-quest-session-id",
                                                    questId: t.id ?? "fake-quest-id",
                                                    overrideQuest: t,
                                                    autoplay: !0,
                                                    sourceQuestContent: hx.uF.INTERNAL_PREVIEW_TOOL,
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
class hZ extends o.Component {
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
                  className: hk.TA,
                  children: [
                      (0, r.jsx)(hm.E, { className: hk.Yw }),
                      (0, r.jsx)(z.D, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, r.jsx)(h.$, { variant: "secondary", text: "Reset", onClick: this.handleResetState }),
                      null != e.message &&
                          (0, r.jsx)(hh.Z, {
                              className: hk.Fx,
                              children: (0, r.jsx)("code", { className: hk.gJ, children: e.message }),
                          }),
                  ],
              })
            : (0, r.jsx)(hX, {}, t);
    }
}
var h0 = a(913122),
    h1 = a(839214),
    h2 = a(77138),
    h8 = a(450827),
    h3 = a(626584),
    h6 = a(174768),
    h5 = a(205761),
    h9 = a(860071),
    h4 = a(696451),
    h7 = a(860689),
    xe = a(926140);
let xt = new h3.A("SearchDebugUtils");
function xa() {
    xt.info("--------------------------");
}
function xn() {
    let e = h6.A.getProps();
    xt.info("START Quick Switcher State"),
        xt.info(`Query: ${e.query}`),
        e.results.forEach((e) => {
            switch ((xt.info(`Result Type: ${e.type}`), e.type)) {
                case xe.rD.GUILD:
                    xt.info(`guild id: ${e.record.id}`);
                    break;
                case xe.rD.TEXT_CHANNEL:
                case xe.rD.VOICE_CHANNEL:
                    xt.info(`channel type: ${e.record.type}`),
                        xt.info(`channel id: ${e.record.id}`),
                        xt.info(`name: ${e.record.name}`);
                    break;
                case xe.rD.DM:
                    xt.info(`channel type: ${e.record.type}`),
                        xt.info(`channel id: ${e.record.id}`),
                        e.record.isDM() &&
                            (xt.info(`recipient id: ${e.record.getRecipientId()}`),
                            e.record.recipients.forEach((e) => {
                                let t = en.default.getUser(e);
                                null != t &&
                                    (xt.info(`recipient username: ${t.username}`),
                                    xt.info(`recipient global name: ${ed.Ay.getGlobalName(t)}`),
                                    xt.info(`recipient nickname: ${ab.A.getNickname(t.id)}`));
                            }));
                    break;
                case xe.rD.GROUP_DM:
                    xt.info(`channel type: ${e.record.type}`),
                        xt.info(`channel id: ${e.record.id}`),
                        xt.info(`name: ${(0, av.m1)(e.record, en.default, ab.A)}`),
                        e.record.isGroupDM() &&
                            (xt.info(`default name: ${(0, av.ks)(e.record, en.default, ab.A)}`),
                            xt.info(`recipient id: ${e.record.recipients}`),
                            e.record.recipients.forEach((e) => {
                                let t = en.default.getUser(e);
                                null != t &&
                                    (xt.info(`recipient username: ${t.username}`),
                                    xt.info(`recipient global name: ${ed.Ay.getGlobalName(t)}`),
                                    xt.info(`recipient nickname: ${ab.A.getNickname(t.id)}`));
                            }));
                    break;
                case xe.rD.USER:
                    xt.info(`user id: ${e.record.id}`),
                        xt.info(`username: ${e.record.username}`),
                        xt.info(`global name: ${ed.Ay.getGlobalName(e.record)}`),
                        xt.info(`nickname: ${ab.A.getNickname(e.record.id)}`),
                        xt.info(`guild nicknames: ${h4.Ay.getNicknames(e.record.id)}`);
            }
            xt.info(`frecency score: ${h5.A.getScoreWithoutFetchingLatest(e.record.id)}`), xa();
        }),
        xt.info("END Quick Switcher State\n");
}
async function xl() {
    xt.info("START User Search Worker State");
    let e = await h8.A.requestDebugState();
    null == e
        ? xt.info("Unable to get debug state from User Search Worker")
        : (Object.entries(JSON.parse(e.users)).forEach((e) => {
              let [t, a] = e;
              xt.info(`id: ${t}`),
                  xt.info(`username: ${a.username}`),
                  xt.info(`global name: ${a.globalName}`),
                  xt.info(`nickname: ${a.friendNickname}`),
                  Object.entries(a.nicknames).forEach((e) => {
                      let [t, a] = e;
                      xt.info(`guild id: ${t}`), xt.info(`guild nickname: ${a}`);
                  }),
                  xa();
          }),
          xt.info("END User Search Worker State\n"));
}
async function xs() {
    let e = await h8.A.requestDebugState();
    if (null == e) throw Error("Unable to get debug state from User Search Worker");
    let t = JSON.parse(e.users),
        a = en.default.getUsers(),
        n = new Set(Object.keys(t)),
        l = mZ.default.keys(a),
        s = [];
    return (
        l.forEach((e) => {
            n.has(e) || s.push(e);
        }),
        s
    );
}
async function xi(e) {
    let t = await h8.A.requestDebugState(),
        a = null != t ? JSON.parse(t.users)[e] : null,
        n = ne.A.getGuildIds(),
        l = [];
    n.forEach((t) => {
        let a = h4.Ay.getMember(t, e);
        null != a && l.push(a);
    });
    let s = h9.A.getDebugState(e);
    return { user: en.default.getUser(e), searchWorkerUser: a, guildMembers: l, guildMemberRequests: s };
}
var xr = a(714652);
function xo(e) {
    let { isUploading: t, isSuccess: a, errorMessage: n, onClick: l, title: s } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(h.$, {
                variant: "primary",
                onClick: l,
                loading: t,
                disabled: t,
                text: t ? "Uploading\u2026" : s,
            }),
            null != n &&
                (0, r.jsx)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: xr.qS,
                    children: n,
                }),
            a &&
                (0, r.jsx)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: xr.qS,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
let xd = (0, h1.D)(() => ({
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
function xc() {
    let e = xd.useField("includeFrecency"),
        t = xd.useField("includeFriends"),
        a = xd.useField("includeDMs"),
        n = xd.useField("includeGDMs"),
        l = xd.useField("includeQuickSwitcherState"),
        s = xd.useField("includeUserSearchWorkerState"),
        i = xd.useField("isUploading"),
        d = xd.useField("isSuccess"),
        c = xd.useField("errorMessage"),
        m = o.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: a,
                includeDMs: n,
                includeQuickSwitcherState: l,
                includeUserSearchWorkerState: s,
                isUploading: i,
            } = xd.getState();
            if (!i)
                try {
                    let i, r, o, d, c, u, m, h, x, p, g, v;
                    xd.setState({ isUploading: !0, errorMessage: null, isSuccess: !1 }),
                        t &&
                            ((i = ab.A.getFriendIDs()),
                            xt.info("START Discord Friends"),
                            i.forEach((e) => {
                                let t = en.default.getUser(e);
                                if (null == t) return;
                                let a = t.username,
                                    n = ed.Ay.getGlobalName(t),
                                    l = ab.A.getNickname(t.id),
                                    s = h4.Ay.getNicknames(t.id);
                                xt.info(`username: ${a}`),
                                    xt.info(`global name: ${n}`),
                                    xt.info(`nickname: ${l}`),
                                    xt.info(`guild nicknames: ${s}`),
                                    xa();
                            }),
                            xt.info("END Discord Friends\n")),
                        a &&
                            ((r = aj.A.getMutablePrivateChannels()),
                            (o = []),
                            (d = []),
                            Object.values(r).forEach((e) => {
                                e.isGroupDM() && o.push(e), e.isDM() && d.push(e);
                            }),
                            xt.info("START Logging Group DM Channels"),
                            o.forEach((e) => {
                                let t = (0, av.m1)(e, en.default, ab.A),
                                    a = (0, av.ks)(e, en.default, ab.A);
                                xt.info(`id: ${e.id}`),
                                    xt.info(`name: ${t}`),
                                    xt.info(`default name: ${a}`),
                                    xt.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = en.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = ed.Ay.getGlobalName(t),
                                            l = ab.A.getNickname(t.id),
                                            s = h4.Ay.getNicknames(t.id);
                                        xt.info(`username: ${a}`),
                                            xt.info(`global name: ${n}`),
                                            xt.info(`nickname: ${l}`),
                                            xt.info(`guild nicknames: ${s}`),
                                            xa();
                                    });
                            }),
                            xt.info("END Logging Group DM Channels\n"),
                            xt.info("START Logging DM Channels"),
                            d.forEach((e) => {
                                let t = (0, av.m1)(e, en.default, ab.A);
                                xt.info(`id: ${e.id}`), xt.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    n = en.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    s = ed.Ay.getGlobalName(n),
                                    i = ab.A.getNickname(n.id);
                                xt.info(`username: ${l}`),
                                    xt.info(`global name: ${s}`),
                                    xt.info(`nickname: ${i}`),
                                    xa();
                            }),
                            xt.info("END Logging DM Channels\n")),
                        n &&
                            ((c = aj.A.getMutablePrivateChannels()),
                            (u = []),
                            (m = []),
                            Object.values(c).forEach((e) => {
                                e.isGroupDM() && u.push(e), e.isDM() && m.push(e);
                            }),
                            xt.info("START Logging Group DM Channels"),
                            u.forEach((e) => {
                                let t = (0, av.m1)(e, en.default, ab.A),
                                    a = (0, av.ks)(e, en.default, ab.A);
                                xt.info(`id: ${e.id}`),
                                    xt.info(`name: ${t}`),
                                    xt.info(`default name: ${a}`),
                                    xt.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = en.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = ed.Ay.getGlobalName(t),
                                            l = ab.A.getNickname(t.id),
                                            s = h4.Ay.getNicknames(t.id);
                                        xt.info(`username: ${a}`),
                                            xt.info(`global name: ${n}`),
                                            xt.info(`nickname: ${l}`),
                                            xt.info(`guild nicknames: ${s}`),
                                            xa();
                                    });
                            }),
                            xt.info("END Logging Group DM Channels\n"),
                            xt.info("START Logging DM Channels"),
                            m.forEach((e) => {
                                let t = (0, av.m1)(e, en.default, ab.A);
                                xt.info(`id: ${e.id}`), xt.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    n = en.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    s = ed.Ay.getGlobalName(n),
                                    i = ab.A.getNickname(n.id);
                                xt.info(`username: ${l}`),
                                    xt.info(`global name: ${s}`),
                                    xt.info(`nickname: ${i}`),
                                    xa();
                            }),
                            xt.info("END Logging DM Channels\n")),
                        e &&
                            ((h = h5.A.getFrequentlyWithoutFetchingLatest()),
                            (x = []),
                            (p = []),
                            (g = []),
                            (v = []),
                            h.forEach((e) => {
                                (0, h7.fh)(e)
                                    ? x.push(e)
                                    : e.isDM()
                                      ? g.push(e)
                                      : e.isMultiUserDM()
                                        ? v.push(e)
                                        : p.push(e);
                            }),
                            xt.info("START Frecency"),
                            xt.info("Guilds"),
                            x.forEach((e) => {
                                let t = h5.A.getScoreWithoutFetchingLatest(e.id);
                                xt.info(`id: ${e.id} - name: ${e.name} - Frecency Score: ${t}`);
                            }),
                            xa(),
                            xt.info("DM Channels"),
                            g.forEach((e) => {
                                let t = h5.A.getScoreWithoutFetchingLatest(e.id);
                                xt.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            xa(),
                            xt.info("Group DM Channels"),
                            v.forEach((e) => {
                                let t = h5.A.getScoreWithoutFetchingLatest(e.id);
                                xt.info(`id: ${e.id} - Frecency Score: ${t}`),
                                    xt.info(`default name: ${(0, av.ks)(e, en.default, ab.A)}`),
                                    xt.info(`name: ${(0, av.m1)(e, en.default, ab.A)}`);
                            }),
                            xa(),
                            xt.info("Guild Channels"),
                            p.forEach((e) => {
                                let t = h5.A.getScoreWithoutFetchingLatest(e.id);
                                xt.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            xa(),
                            xt.info("END Frecency\n")),
                        l && xn(),
                        s && xl(),
                        await (0, h2.a)(er.Umv.WEB_APP),
                        xd.setState({ isSuccess: !0, errorMessage: null });
                } catch (t) {
                    let e = new h0.LG(t);
                    xd.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    xd.setState({ isUploading: !1 });
                }
        }, []);
    return (0, r.jsxs)(u.n, {
        label: "Debug Logs Snapshot",
        description:
            "Uploading a snapshot of the client state can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue.",
        children: [
            (0, r.jsx)(v.d, {
                label: "Frecency",
                description:
                    "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
                checked: e,
                onChange: () => xd.setState({ includeFrecency: !e }),
            }),
            (0, r.jsx)(v.d, {
                label: "Friends",
                description: "Includes all Discord Friend usernames, global names, and nicknames.",
                checked: t,
                onChange: () => xd.setState({ includeFriends: !t }),
            }),
            (0, r.jsx)(v.d, {
                label: "DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                checked: a,
                onChange: () => xd.setState({ includeDMs: !a }),
            }),
            (0, r.jsx)(v.d, {
                label: "Group DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                checked: n,
                onChange: () => xd.setState({ includeGDMs: !n }),
            }),
            (0, r.jsx)(v.d, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: l,
                onChange: () => xd.setState({ includeQuickSwitcherState: !l }),
            }),
            (0, r.jsx)(v.d, {
                label: "User Search Worker",
                description:
                    "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                checked: s,
                onChange: () => xd.setState({ includeUserSearchWorkerState: !s }),
            }),
            (0, r.jsx)(xo, {
                isUploading: i,
                isSuccess: d,
                errorMessage: c,
                onClick: m,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
let xu = (0, h1.D)(() => ({ userIds: [], isLoading: !1, isSuccess: !1, errorMessage: null, lastRunAt: null }));
function xm() {
    let e = xu.useField("userIds"),
        t = xu.useField("isLoading"),
        a = xu.useField("isSuccess"),
        n = xu.useField("errorMessage"),
        l = xu.useField("lastRunAt"),
        s = o.useCallback(async () => {
            xu.setState({ isLoading: !0, errorMessage: null, isSuccess: !1 });
            try {
                let e = await xs();
                xu.setState({ userIds: e, errorMessage: null, isSuccess: !0, lastRunAt: new Date().toISOString() });
            } catch (e) {
                xu.setState({ errorMessage: e, isSuccess: !1 });
            } finally {
                xu.setState({ isLoading: !1 });
            }
        }, []),
        i = o.useMemo(
            () =>
                e.map((e) => {
                    let t = en.default.getUser(e),
                        a = null != t ? ed.Ay.getName(t) : "Unknown";
                    return (0, r.jsx)(
                        "div",
                        {
                            className: xr.J1,
                            children: (0, r.jsx)(D.E, { variant: "text-md/normal", children: `${a} (${e})` }),
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
                (0, r.jsx)(h.$, { onClick: s, text: "Diff User State", loading: t, disabled: t }),
                (0, r.jsxs)("div", {
                    className: xr.N6,
                    children: [
                        null != n &&
                            (0, r.jsx)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                className: xr.qS,
                                children: n,
                            }),
                        a &&
                            e.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(D.E, { variant: "text-md/normal", children: `Last run at: ${l}` }),
                                    (0, r.jsx)(D.E, {
                                        variant: "text-md/normal",
                                        children: "User IDs missing from Worker:",
                                    }),
                                    (0, r.jsx)("div", { className: xr.uk, children: i }),
                                ],
                            }),
                        a &&
                            0 === e.length &&
                            (0, r.jsx)(D.E, { variant: "text-md/normal", children: "No users missing from Worker" }),
                    ],
                }),
            ],
        }),
    });
}
let xh = (0, h1.D)(() => ({ isRecording: !1, isUploading: !1, isSuccess: !1, errorMessage: null }));
function xx() {
    let e = xh.useField("isRecording"),
        t = xh.useField("isUploading"),
        a = xh.useField("isSuccess"),
        n = xh.useField("errorMessage"),
        l = o.useRef([]),
        s = o.useRef(""),
        i = o.useCallback(() => {
            let { results: e, query: t } = h6.A.getProps();
            (l.current !== e || s.current !== t) && ((l.current = e), (s.current = t), xn());
        }, []);
    o.useEffect(() => {
        if (e) return h6.A.addChangeListener(i), () => h6.A.removeChangeListener(i);
    }, [i, e]);
    let d = o.useCallback(async () => {
        let { isUploading: e } = xh.getState();
        if (!e)
            try {
                xh.setState({ isRecording: !1, isUploading: !0, errorMessage: null, isSuccess: !1 }),
                    await (0, h2.a)(er.Umv.WEB_APP),
                    xh.setState({ isSuccess: !0, errorMessage: null });
            } catch (t) {
                let e = new h0.LG(t);
                xh.setState({ errorMessage: e.getAnyErrorMessage() });
            } finally {
                xh.setState({ isUploading: !1 });
            }
    }, []);
    return (0, r.jsxs)(u.n, {
        label: "Debug Logs Session",
        description:
            "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
        children: [
            (0, r.jsx)(mi.p, {
                messageType: mi.Y.INFO,
                children: "When you are done, please remember to upload the logs.",
            }),
            (0, r.jsxs)(sr.e, {
                children: [
                    (0, r.jsx)(h.$, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => xh.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, r.jsx)(xo, {
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
var xp = a(145497);
let xg = (0, h1.D)(() => ({ userId: null, state: null, loading: !1, error: null }));
function xv(e) {
    let { title: t, guildIds: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: xr.J1,
                children: (0, r.jsx)(D.E, { variant: "text-sm/normal", children: t }),
            }),
            (0, r.jsxs)("div", {
                className: xr.uk,
                children: [
                    0 === a.length &&
                        (0, r.jsx)("div", {
                            className: xr.J1,
                            children: (0, r.jsx)(D.E, { variant: "text-sm/normal", children: "None" }),
                        }),
                    a.map((e) => {
                        let t = ne.A.getGuild(e);
                        return null == t
                            ? null
                            : (0, r.jsxs)(
                                  "div",
                                  {
                                      className: xr.J1,
                                      children: [
                                          (0, r.jsx)(xp.Ay, { guild: t, iconSize: 16 }),
                                          (0, r.jsx)(D.E, { variant: "text-sm/normal", children: t.name }),
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
function xj(e) {
    let { userState: t } = e,
        { user: a, searchWorkerUser: n, guildMembers: l, guildMemberRequests: s } = t,
        i = o.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, r.jsx)(s8.y, { size: "sm", color: eV.A.colors.STATUS_POSITIVE })
                : (0, r.jsx)(hm.E, { size: "sm", color: eV.A.colors.ICON_FEEDBACK_CRITICAL });
        }, []);
    return (0, r.jsxs)("div", {
        className: xr.N6,
        children: [
            (0, r.jsxs)("div", {
                className: xr.J1,
                children: [
                    i({ ok: null != a }),
                    (0, r.jsx)(D.E, {
                        variant: "text-sm/normal",
                        children: null != a ? "User exists in UserStore" : "User does not exist in UserStore",
                    }),
                ],
            }),
            null != a &&
                (0, r.jsx)("div", {
                    className: xr.uk,
                    children: (0, r.jsx)("div", {
                        className: xr.J1,
                        children: (0, r.jsx)(D.E, { variant: "text-sm/normal", children: `username: ${a.username}` }),
                    }),
                }),
            (0, r.jsxs)("div", {
                className: xr.J1,
                children: [
                    i({ ok: null != n }),
                    (0, r.jsx)(D.E, {
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
                    className: xr.uk,
                    children: [
                        (0, r.jsx)("div", {
                            className: xr.J1,
                            children: (0, r.jsx)(D.E, {
                                variant: "text-sm/normal",
                                children: `username: ${n.username}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: xr.J1,
                            children: (0, r.jsx)(D.E, {
                                variant: "text-sm/normal",
                                children: `global name: ${n.globalName ?? "\u2014"}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: xr.J1,
                            children: (0, r.jsx)(D.E, { variant: "text-sm/normal", children: "nicknames:" }),
                        }),
                        (0, r.jsxs)("div", {
                            className: xr.uk,
                            children: [
                                0 === Object.keys(n.nicknames).length &&
                                    (0, r.jsx)("div", {
                                        className: xr.J1,
                                        children: (0, r.jsx)(D.E, { variant: "text-sm/normal", children: "None" }),
                                    }),
                                Object.entries(n.nicknames).map((e) => {
                                    let [t, a] = e,
                                        n = ne.A.getGuild(t),
                                        l = aj.A.getChannel(t);
                                    return (0, r.jsxs)(
                                        "div",
                                        {
                                            className: xr.J1,
                                            children: [
                                                null != n && (0, r.jsx)(xp.Ay, { guild: n, iconSize: 16 }),
                                                null != n &&
                                                    (0, r.jsx)(D.E, { variant: "text-sm/normal", children: n.name }),
                                                null == n &&
                                                    null != l &&
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-sm/normal",
                                                        children: (0, av.m1)(l, en.default, ab.A),
                                                    }),
                                                (0, r.jsx)(D.E, { variant: "text-sm/normal", children: ` (${t})` }),
                                                null != a &&
                                                    "" !== a &&
                                                    (0, r.jsx)(D.E, { variant: "text-sm/normal", children: ` - ${a}` }),
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
                className: xr.J1,
                children: [
                    i({ ok: l.length > 0 }),
                    (0, r.jsx)(D.E, {
                        variant: "text-sm/normal",
                        children: l.length > 0 ? "Guild members exist:" : "No guild members exist",
                    }),
                ],
            }),
            l.length > 0 &&
                (0, r.jsx)("div", {
                    className: xr.uk,
                    children: l.map((e) => {
                        let t = ne.A.getGuild(e.guildId);
                        if (null == t) return null;
                        let a = e.nick ?? "";
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: xr.J1,
                                children: [
                                    (0, r.jsx)(xp.Ay, { guild: t, iconSize: 16 }),
                                    (0, r.jsxs)(D.E, {
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
                className: xr.J1,
                children: [
                    (0, r.jsx)(ck.m, { size: "sm" }),
                    (0, r.jsx)(D.E, { variant: "text-sm/normal", children: "GuildMemberRequesterStore State" }),
                ],
            }),
            null != s &&
                (0, r.jsxs)("div", {
                    className: xr.uk,
                    children: [
                        (0, r.jsx)(xv, { title: "Pending Guild Member Requests:", guildIds: s.pendingRequestGuildIds }),
                        (0, r.jsx)(xv, { title: "Sent Guild Member Requests:", guildIds: s.sentRequestGuildIds }),
                        (0, r.jsx)(xv, {
                            title: "Unacknowledged Guild Member Requests:",
                            guildIds: s.unacknowledgedRequestGuildIds,
                        }),
                    ],
                }),
        ],
    });
}
function xb() {
    let e = o.useCallback((e) => {
            xg.setState({ userId: e, state: null });
        }, []),
        t = o.useCallback(async () => {
            let { userId: e, loading: t } = xg.getState();
            if (!t && null != e) {
                xg.setState({ loading: !0, error: null });
                try {
                    let t = await xi(e);
                    xg.setState({ state: t, loading: !1 });
                } catch (t) {
                    let e = new h0.LG(t);
                    xg.setState({ error: e.getAnyErrorMessage(), loading: !1 });
                } finally {
                    xg.setState({ loading: !1 });
                }
            }
        }, []),
        a = xg.useField("loading");
    return (0, r.jsxs)("div", {
        className: xr.$n,
        children: [
            (0, r.jsx)(p.k, { placeholder: "User ID", onChange: e }),
            (0, r.jsx)(h.$, { onClick: t, text: "Get Snapshot", loading: a, disabled: a }),
        ],
    });
}
function xf() {
    let e = xg.useField("state"),
        t = xg.useField("error");
    return (0, r.jsxs)(u.n, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, r.jsx)(xb, {}),
            null != t &&
                (0, r.jsx)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: xr.qS,
                    children: t,
                }),
            null != e && (0, r.jsx)(xj, { userState: e }),
        ],
    });
}
function xy() {
    return (0, r.jsxs)(d.Ip, {
        className: xr.nd,
        children: [
            (0, r.jsx)(xx, {}),
            (0, r.jsx)(g.c, {}),
            (0, r.jsx)(xc, {}),
            (0, r.jsx)(g.c, {}),
            (0, r.jsx)(xf, {}),
            (0, r.jsx)(g.c, {}),
            (0, r.jsx)(xm, {}),
        ],
    });
}
var xE = a(761508),
    xC = a(599147),
    x_ = a(808411),
    xS = a(624716),
    xN = a(398590),
    xA = a(848281),
    xk = a(263419),
    xI = a(52822),
    xD = a(715561);
let xT = [
        { id: "virtual-currency", name: "Virtual Current (Orb) Components" },
        { id: "nitro", name: "Nitro Components" },
    ],
    xR = {
        "virtual-currency": function () {
            return (0, r.jsxs)(xI.Hq, {
                label: "Open New Revenue Storybook",
                direction: "vertical",
                children: [
                    (0, r.jsx)(D.E, {
                        variant: "text-md/normal",
                        color: "text-feedback-info",
                        style: { marginBottom: "8px" },
                        children: "This section is deprecated. Use button to open the new Revenue Storybook instead.",
                    }),
                    (0, r.jsx)(h.$, {
                        onClick: () => {
                            var e;
                            return (
                                (e = xk.RevenuePlaygroundCollectionId.VIRTUAL_CURRENCY),
                                void (xA.PlaygroundStore.setState({ selectedCollection: e, selectedStory: null }),
                                (0, xN.id)(er.zgK.COMPONENT_PLAYGROUND))
                            );
                        },
                        text: "Open New Revenue Storybook",
                    }),
                ],
            });
        },
        nitro: () =>
            (0, r.jsxs)("div", { children: [(0, r.jsx)(xC.o, {}), (0, r.jsx)(x_.A, {}), (0, r.jsx)(xS.A, {})] }),
    };
function xO() {
    let [e, t] = o.useState("virtual-currency"),
        a = o.useMemo(() => xR[e], [e]);
    return (0, r.jsxs)("div", {
        className: F()(tF.nd, xD.kL),
        children: [
            (0, r.jsx)(xE.V, {
                className: xD.$H,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: xT.map((e) => (0, r.jsx)(xE.V.Item, { id: e.id, children: e.name }, e.id)),
            }),
            (0, r.jsx)(d.Ar, { children: (0, r.jsx)("div", { className: xD.Qs, children: (0, r.jsx)(a, {}) }) }),
        ],
    });
}
var xw = a(718446),
    xM = a(766075),
    xL = a(355097);
let xP = (0, h1.D)(() => ({ urlString: "", error: null })),
    xU = Object.entries(xL.od).map((e) => {
        let [t, a] = e;
        return { id: t, label: a, value: t };
    });
function xG() {
    let [e, t] = o.useState(),
        a = xP.useField("urlString"),
        n = xP.useField("error"),
        l = o.useCallback(() => {
            let e = xP.getField("urlString");
            if (null == e || "" === e) return void xP.setState({ error: "URL is required" });
            let t = (0, xw.parseSettingsUrl)({ path: e });
            ((0, xw.trackParseSettingsUrl)(t, "devtools"), null == t.target)
                ? xP.setState({ error: "String did not match expected format" })
                : (0, xM.openUserSettings)(t.target, { path: t.path });
        }, []);
    return (0, r.jsxs)(u.n, {
        label: "Settings Deep Link Tool",
        children: [
            (0, r.jsx)(ae.Z, {
                label: "[optional] Choose a path",
                clearable: !0,
                value: e,
                placeholder: "Select a settings path",
                options: xU,
                selectionMode: "single",
                onSelectionChange: (e) => {
                    if ((t(e), null != e)) {
                        let [t, a] = xL.od[e].split("/");
                        xP.setState({ urlString: er.BVt.SETTINGS(t, a), error: null });
                    }
                },
                fullWidth: !0,
            }),
            (0, r.jsx)(p.k, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                value: a,
                onChange: (e) => xP.setState({ urlString: e, error: null }),
            }),
            (0, r.jsxs)(sr.e, {
                children: [
                    (0, r.jsx)(h.$, {
                        variant: "primary",
                        onClick: l,
                        text: "Open User Settings for URL",
                        disabled: "" === a,
                    }),
                    (0, r.jsx)(h.$, {
                        variant: "secondary",
                        onClick: () => (0, nA.C)(`${window.location.origin}${a}`),
                        disabled: "" === a,
                        text: "Copy URL",
                    }),
                ],
            }),
            null != n && (0, r.jsx)(D.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
var xF = a(780964);
let xB = (0, h1.D)(() => ({ setting: xF.X.ACCOUNT_PANEL }));
function xV() {
    let e = xB.useField("setting"),
        t = o.useCallback(() => {
            (0, xM.openUserSettings)(e);
        }, [e]),
        a = o.useMemo(() => Object.values(xF.X).map((e) => ({ id: e, label: e, value: e })), []);
    return (0, r.jsxs)(u.n, {
        label: "Settings Navigation Tool",
        children: [
            (0, r.jsx)(ae.Z, {
                label: "Setting",
                placeholder: "Select a setting",
                value: e,
                onSelectionChange: (e) => xB.setState({ setting: e }),
                options: a,
                selectionMode: "single",
                clearable: !0,
            }),
            (0, r.jsx)(h.$, { variant: "primary", onClick: t, text: "Open User Settings" }),
        ],
    });
}
var x$ = a(963935),
    xW = a(949901),
    xz = a(354237);
function xH(e) {
    let { title: t, initExpanded: a, highlightMode: n = "none", children: l } = e,
        [s, i] = o.useState(a),
        d = o.useCallback(() => {
            i(!s);
        }, [s]),
        c = "migrated" === n || "migrated-root" === n ? void 0 : "status-warning",
        u = (e) => (0, r.jsx)(D.E, { variant: e, color: c, children: t });
    return null == l
        ? (0, r.jsx)("div", { className: xz.NF, children: u("text-md/normal") })
        : (0, r.jsxs)("div", {
              className: xz.NF,
              children: [
                  (0, r.jsxs)(B.D, {
                      className: xz.jr,
                      onClick: d,
                      children: [
                          u("text-md/bold"),
                          (0, r.jsx)(sg.A, {
                              direction: s ? sg.A.Directions.DOWN : sg.A.Directions.RIGHT,
                              className: xz.D,
                          }),
                      ],
                  }),
                  s && (0, r.jsx)("div", { className: xz.m4, children: l }),
              ],
          });
}
function xK(e) {
    let { setting: t, depth: a, inheritedHighlightMode: n } = e,
        l = (function (e, t) {
            if ("migrated" === t) return "migrated";
            switch (e.type) {
                case x$.Z6.ROOT:
                    return "migrated-root";
                case x$.Z6.SECTION:
                case x$.Z6.PANEL:
                case x$.Z6.SIDEBAR_ITEM:
                    return "migrated";
                default:
                    return t ?? "migrated";
            }
        })(t, n),
        s = "migrated" === l ? "migrated" : void 0,
        i = null;
    return (
        (0, x$.nW)(t) &&
            t.layout.length > 0 &&
            (i = t.layout.map((e) => (0, r.jsx)(xK, { setting: e, depth: a + 1, inheritedHighlightMode: s }, e.key))),
        (0, r.jsx)(xH, { title: t.key, initExpanded: a <= 2, highlightMode: l, children: i })
    );
}
function xY() {
    let { node: e } = (0, et.Ay)(xW.D, ""),
        t = (0, et.KA)();
    return (0, r.jsxs)(u.n, {
        label: "Settings Tree",
        children: [
            (0, r.jsx)(v.d, {
                label: "Bypass Predicates",
                description: "Forces all migrated settings to be visible.",
                checked: t,
                onChange: et.jL,
            }),
            (0, r.jsx)(xK, { setting: e, depth: 1 }, e.key),
        ],
    });
}
var xq = a(355811);
function xJ() {
    return (0, r.jsxs)(d.Ip, {
        className: xq.n,
        children: [
            (0, r.jsx)(xV, {}),
            (0, r.jsx)(g.c, {}),
            (0, r.jsx)(xG, {}),
            (0, r.jsx)(g.c, {}),
            (0, r.jsx)(xY, {}),
        ],
    });
}
function xQ() {
    return o.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: a1.fu.EXPERIMENTS,
                tags: ["events", "impressions", "tracking"],
                render: () => (0, r.jsx)(nJ, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: a1.fu.EXPERIMENTS,
                tags: ["experiments", "exposure", "buckets"],
                render: () => (0, r.jsx)(ms, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: a1.fu.EVENTS,
                tags: ["flux", "state"],
                render: () => (0, r.jsx)(me, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: a1.fu.EVENTS,
                tags: ["flux", "actions"],
                render: () => (0, r.jsx)(sn, {}),
            },
        ];
        return (
            aG.A.isDeveloper &&
                (e.push({ id: "shop", name: "Shop Overrides", group: a1.fu.SHOP, render: () => (0, r.jsx)(u0, {}) }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: a1.fu.BILLING,
                    tags: ["gifts", "nitro", "boost", "sku", "collectibles"],
                    render: () => (0, r.jsx)(dO, {}),
                }),
                e.push({
                    id: "shop_collectibles",
                    name: "Collectibles Preview",
                    group: a1.fu.SHOP,
                    render: () => (0, r.jsx)(tR, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: a1.fu.DEVELOPMENT,
                    tags: ["captcha", "safety", "vibe", "vibing", "override", "premium type"],
                    render: () => (0, r.jsx)(cX, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: a1.fu.DEVELOPMENT,
                    tags: ["secure frames", "encryption"],
                    render: () => (0, r.jsx)(si, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: a1.fu.DEVELOPMENT,
                    tags: ["fps", "frames", "gateway", "telemetry"],
                    render: () => (0, r.jsx)(d4.Ay, {}),
                }),
                e.push({
                    id: "age_verification",
                    name: "Age Verification",
                    group: a1.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(np, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: a1.fu.USERS,
                    tags: ["surveys"],
                    render: () => (0, r.jsx)(sh, {}),
                }),
                e.push({ id: "overlay", name: "Overlay v3", group: a1.fu.GAMES, render: () => (0, r.jsx)(dp, {}) }),
                e.push({
                    id: "generated_test_user",
                    name: "Generated Test Users",
                    group: a1.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(ip, {}),
                }),
                aF.isPlatformEmbedded &&
                    e.push({
                        id: "detected_games",
                        name: "Detected Games",
                        group: a1.fu.GAMES,
                        render: () => (0, r.jsx)(lK, {}),
                    }),
                e.push({ id: "slayer_sdk", name: "Slayer SDK", group: a1.fu.GAMES, render: () => (0, r.jsx)(u2, {}) }),
                e.push({
                    id: "account_linking",
                    name: "Account Linking",
                    group: a1.fu.GAMES,
                    render: () => (0, r.jsx)(nr, {}),
                }),
                e.push({
                    id: "game_upsells",
                    name: "Game Upsells",
                    group: a1.fu.GAMES,
                    tags: ["dismissible", "cooldown", "dcf"],
                    render: () => (0, r.jsx)(ap, {}),
                }),
                e.push({
                    id: "slayer_storefront",
                    name: "Slayer Storefront",
                    group: a1.fu.GAMES,
                    render: () => (0, r.jsx)(aU, {}),
                }),
                e.push({
                    id: "game_profile",
                    name: "Game Profile",
                    group: a1.fu.GAMES,
                    render: () => (0, r.jsx)(ar, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: a1.fu.USERS,
                    render: () => (0, r.jsx)(xy, {}),
                }),
                e.push({ id: "clips", name: "Clips", group: a1.fu.AUDIO_VIDEO, render: () => (0, r.jsx)(U, {}) })),
            e.push({
                id: "rive",
                name: "Rive",
                group: a1.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(c2, {}),
            }),
            e.push({
                id: "gradient-contrast",
                name: "Tab Hover Gradient",
                group: a1.fu.UI,
                tags: ["accessibility", "contrast", "gradient", "wcag"],
                render: () => (0, r.jsx)(i8, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: a1.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(rI, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: a1.fu.UI,
                tags: ["i18n", "localization", "messages"],
                render: () => (0, r.jsx)(rg, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: a1.fu.UI,
                tags: ["tokens", "themes", "palette"],
                render: () => (0, r.jsx)(lm, {}),
            }),
            e.push({ id: "design_toggles", name: "Design Toggles", group: a1.fu.UI, render: () => (0, r.jsx)(lG, {}) }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: a1.fu.UI,
                render: () => (0, r.jsx)(cA, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: a1.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(sP, { devSettingsCategory: aB.xW.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: a1.fu.USERS,
                tags: ["dm", "nux", "system dm"],
                render: () => (0, r.jsx)(rK, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: a1.fu.EXPERIMENTS,
                render: () => (0, r.jsx)(sP, { devSettingsCategory: aB.xW.REPORTING }),
            }),
            e.push({ id: "permissions", name: "Permissions", group: a1.fu.USERS, render: () => (0, r.jsx)(cc, {}) }),
            e.push({
                id: "modals",
                name: "Modals",
                group: a1.fu.UI,
                tags: ["dialogs", "popups"],
                render: () => (0, r.jsx)(r2, {}),
            }),
            e.push({
                id: "menus",
                name: "Menus",
                group: a1.fu.UI,
                tags: ["contextmenus", "popout"],
                render: () => (0, r.jsx)(rw, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: a1.fu.UI,
                tags: ["verification", "safety flow"],
                render: () => (0, r.jsx)(r_, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: a1.fu.USERS,
                tags: ["friends"],
                render: () => (0, r.jsx)(nu, {}),
            }),
            e.push({
                id: "channel_affinity",
                name: "Channel Affinity",
                group: a1.fu.USERS,
                tags: ["channels"],
                render: () => (0, r.jsx)(lu, {}),
            }),
            aG.A.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: a1.fu.USERS,
                    render: () => (0, r.jsx)(t4, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: a1.fu.USERS,
                    render: () => (0, r.jsx)(aS, {}),
                })),
            e.push({ id: "dcf_overrides", name: "DCF Overrides", group: a1.fu.DCF, render: () => (0, r.jsx)(lM, {}) }),
            e.push({ id: "dcf_events", name: "DCF Events", group: a1.fu.DCF, render: () => (0, r.jsx)(lb, {}) }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: a1.fu.EXPERIMENTS,
                tags: ["coachmarks", "nux", "onboarding"],
                render: () => (0, r.jsx)(ru, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: a1.fu.PREMIUM,
                tags: ["nitro", "tenure", "badges", "level up"],
                render: () => (0, r.jsx)(ct, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: a1.fu.PREMIUM,
                    tags: ["discounts", "trials", "reverse trials", "churn"],
                    render: () => (0, r.jsx)(or, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: a1.fu.BILLING,
                    tags: ["stripe", "cards", "test cards"],
                    render: () => (0, r.jsx)(dJ, {}),
                }),
                e.push({
                    id: "orders",
                    name: "Orders",
                    group: a1.fu.BILLING,
                    tags: ["orders"],
                    render: () => (0, r.jsx)(oh, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: a1.fu.PREMIUM,
                    tags: ["nitro", "reverse trial"],
                    render: () => (0, r.jsx)(hl, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: a1.fu.PREMIUM,
                    tags: ["entitlements", "quests"],
                    render: () => (0, r.jsx)(sI, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: a1.fu.PREMIUM,
                tags: ["friends", "anniversary"],
                render: () => (0, r.jsx)(iE, {}),
            }),
            e.push({
                id: "spatial_audio",
                name: "Spatial Audio",
                group: a1.fu.AUDIO_VIDEO,
                tags: ["spatial", "hrtf", "steam audio", "3d"],
                render: () => (0, r.jsx)(mY, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: a1.fu.AUDIO_VIDEO,
                tags: ["noise cancellation", "audio", "vad"],
                render: () => (0, r.jsx)(mO, {}),
            }),
            e.push({
                id: "av_overrides",
                name: "Overrides",
                group: a1.fu.AUDIO_VIDEO,
                tags: ["video", "capture", "encoder", "golive"],
                render: () => (0, r.jsx)(mj, {}),
            }),
            e.push({
                id: "batch_audio_processor",
                name: "Batch Audio Processor",
                group: a1.fu.AUDIO_VIDEO,
                tags: ["krisp", "noise cancellation", "wav", "batch", "audio processing", "ingest"],
                render: () => (0, r.jsx)(my, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: a1.fu.BOOSTING,
                tags: ["boosting", "powerups", "server tag"],
                render: () => (0, r.jsx)(rr, {}),
            }),
            e.push({ id: "game_server", name: "Game Server", group: a1.fu.BOOSTING, render: () => (0, r.jsx)(sw, {}) }),
            e.push({
                id: "language",
                name: "Language",
                group: a1.fu.UI,
                tags: ["locale"],
                render: () => (0, r.jsx)(rj, {}),
            }),
            e.push({
                id: "user_settings",
                name: "User Settings",
                group: a1.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(xJ, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: a1.fu.QUESTS,
                render: () => (0, r.jsx)(aI, {}),
            }),
            e.push({
                id: "virtual_currency_config",
                name: "Virtual Currency Config",
                group: a1.fu.QUESTS,
                render: () => (0, r.jsx)(md, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: a1.fu.BILLING,
                render: () => (0, r.jsx)(xO, {}),
            }),
            e.push({
                id: "quest_preview",
                name: "Quest Preview",
                group: a1.fu.QUESTS,
                render: () => (0, r.jsx)(hZ, {}),
            }),
            e.push({
                id: "profile_theme_override",
                name: "Profile Theme Override",
                group: a1.fu.USERS,
                render: () => (0, r.jsx)(cw, {}),
            }),
            e.push({
                id: "application_widget",
                name: "Application Widget",
                group: a1.fu.USERS,
                render: () => (0, r.jsx)(n9, {}),
            }),
            e.push({
                id: "developer_portal",
                name: "Developer Portal",
                group: a1.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(lQ, {}),
            }),
            e
        );
    }, []);
}
