a.d(t, { x: () => xF }), a(321073);
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
    g = a(372684),
    v = a(607814),
    j = a(871421);
a(393431), a(532706), a(42231), a(232424), a(949626), a(767709), a(65162), a(323874), a(14289), a(35956);
var b = a(139033),
    f = a(224640),
    y = a(20742),
    _ = a(430993),
    E = a(696208),
    C = a(834730),
    S = a(192308),
    N = a(140791);
let A = [117, 117, 105, 100];
async function k(e) {
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
function D(e) {
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
    return (0, r.jsxs)(f.d, {
        transitionState: d,
        onClose: c,
        size: "xl",
        "aria-label": "Clip metadata",
        children: [
            (0, r.jsx)(y.rQ, { title: "Clip metadata", subtitle: t }),
            (0, r.jsxs)(_.c, {
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
                        className: N.j,
                    }),
                    null != x &&
                        (0, r.jsx)(C.E, { variant: "text-sm/medium", color: "text-feedback-critical", children: x }),
                ],
            }),
            (0, r.jsx)(E.H, {
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
                                            i.set(A, 4),
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
async function I(e) {
    try {
        let t = await e.arrayBuffer(),
            a = await k(t);
        if (null == a)
            return void (0, b.A)({
                title: "No metadata found",
                subtitle: `No clip metadata UUID box found in ${e.name}`,
            });
        let n = JSON.stringify(a.metadata, null, 2);
        (0, S.openModal)((l) =>
            (0, r.jsx)(D, {
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
        (0, b.A)({ title: "Failed to parse clip metadata", subtitle: e instanceof Error ? e.message : String(e) });
    }
}
function T() {
    let e = o.useRef(null);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("input", {
                ref: e,
                type: "file",
                accept: "video/mp4,.mp4",
                onChange: (e) => {
                    let t = e.target.files?.[0];
                    (e.target.value = ""), null != t && I(t);
                },
                className: N.Z,
            }),
            (0, r.jsx)(h.$, { text: "Open File", onClick: () => e.current?.click() }),
        ],
    });
}
function R() {
    let [e, t] = o.useState(g.rb.KILL),
        [a, n] = o.useState(1),
        [l, s] = o.useState(""),
        [i, b] = o.useState("");
    return (0, r.jsx)(d.Ip, {
        children: (0, r.jsxs)(c.l, {
            children: [
                (0, r.jsx)(u.n, {
                    label: "Send Test Signals",
                    children: (0, r.jsxs)(m.M, {
                        children: [
                            (0, r.jsx)(h.$, { text: "Manual", onClick: () => v.Ts({ type: g.Gy.MANUAL }) }),
                            (0, r.jsx)(h.$, {
                                text: "Distributed",
                                onClick: () =>
                                    v.Ts({
                                        type: g.Gy.DISTRIBUTED,
                                        remoteTriggerUserId: "123",
                                        remoteTriggerClipId: "456",
                                    }),
                            }),
                            (0, r.jsx)(h.$, {
                                text: "Phrase: Clip",
                                onClick: () => v.Ts({ type: g.Gy.PHRASE, text: "clip" }),
                            }),
                            (0, r.jsx)(h.$, {
                                text: "Yelling",
                                onClick: () => v.Ts({ type: g.Gy.YELLING, userId: "123" }),
                            }),
                            (0, r.jsx)(h.$, {
                                text: "Laughter",
                                onClick: () => v.Ts({ type: g.Gy.LAUGHTER, label: "laughter", confidence: 1 }),
                            }),
                            (0, r.jsx)(h.$, {
                                text: "Shouting",
                                onClick: () => v.Ts({ type: g.Gy.LAUGHTER, label: "shouting", confidence: 1 }),
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
                                    value: e,
                                    onSelectionChange: (e) => t(e),
                                    options: [
                                        { id: "kill", label: "Kill", value: g.rb.KILL },
                                        { id: "multikill", label: "Multikill", value: g.rb.MULTIKILL },
                                        { id: "death", label: "Death", value: g.rb.DEATH },
                                        { id: "assist", label: "Assist", value: g.rb.ASSIST },
                                        { id: "item", label: "Item", value: g.rb.ITEM },
                                        { id: "victory", label: "Victory", value: g.rb.VICTORY },
                                        { id: "defeat", label: "Defeat", value: g.rb.DEFEAT },
                                        { id: "level_up", label: "Level Up", value: g.rb.LEVEL_UP },
                                        { id: "treasure", label: "Treasure", value: g.rb.TREASURE },
                                        { id: "objective_kill", label: "Objective Kill", value: g.rb.OBJECTIVE_KILL },
                                    ],
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(x.l, {
                                    label: "Importance",
                                    value: a,
                                    onSelectionChange: n,
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
                            value: l,
                            onChange: s,
                            placeholder: "e.g., First Blood",
                        }),
                        (0, r.jsx)(p.k, {
                            label: "Description (optional)",
                            value: i,
                            onChange: b,
                            placeholder: "e.g., Killed enemy ADC in bot lane",
                        }),
                        (0, r.jsx)(h.$, {
                            text: "Create Game Event",
                            onClick: () => {
                                v.Ts({ type: g.Gy.GAME_EVENT, eventType: e, importance: a, title: l, description: i });
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            text: "stash decider data",
                            onClick: () => {
                                j.Ay.debugStashDeciderData();
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            text: "re-run ranking",
                            onClick: () => {
                                j.ih.debugRerunRanking();
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(u.n, { label: "Clip Metadata Tool", children: (0, r.jsx)(T, {}) }),
            ],
        }),
    });
}
var O = a(503698),
    w = a.n(O),
    M = a(939249),
    L = a(683071),
    P = a(331322),
    U = a(811893),
    G = a(534514),
    B = a(17928),
    F = a(538064),
    V = a(265059),
    $ = a(902592),
    W = a(869146),
    z = a(789645),
    H = a(589158),
    K = a(65593),
    Y = a(740572),
    q = a(581298),
    J = a(98596),
    Q = a(287809),
    X = a(901139),
    Z = a(641886),
    ee = a(780898),
    et = a(652215),
    ea = a(224196),
    en = a(427262);
function el(e) {
    let { nameplate: t } = e,
        a = (0, B.bG)([Q.default], () => Q.default.getCurrentUser()),
        n = en.Ay.useName(a) ?? "";
    return (0, r.jsx)(ea.g, {
        username: n,
        selfMute: !1,
        selfDeaf: !1,
        serverMute: !1,
        serverDeaf: !1,
        suppress: !1,
        speaking: !1,
        streaming: !1,
        status: et.clD.ONLINE,
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
var es = a(736653),
    ei = a(653523),
    er = a(809948);
function eo(e) {
    let { selected: t, onSelect: a } = e,
        n = (0, es.Ay)();
    return (0, r.jsxs)("div", {
        className: er.N,
        children: [
            (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: "Preselected Gradient" }),
            (0, r.jsx)("div", {
                className: er.Z,
                children: Z.Z6.map((e) => {
                    let l = n !== et.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
                        s = t === e.name;
                    return (0, r.jsx)(
                        ei.S4,
                        { onSelect: () => a(e), style: { background: l }, name: e.name, isSelected: s },
                        e.name,
                    );
                }),
            }),
        ],
    });
}
var ed = a(696157),
    ec = a(95701),
    eu = a(331884);
function em(e) {
    let { selected: t, nameplate: a } = e,
        n = (0, eu.i)(),
        l = new ec.cq({ id: "0", type: et.rbe.DM, name: "self", guild_id: "0", recipients: [n.id] });
    return (0, r.jsx)(ed.th, { selected: t, channel: l, user: n, nameplate: a });
}
var eh = a(698638),
    ex = a(877203);
function ep() {
    let [e, t] = (0, o.useState)(!1),
        [a, n] = (0, o.useState)(!1),
        [l, s] = (0, o.useState)(null),
        { node: i } = (0, q.Ay)(J.k, ""),
        d = (0, X.Ay)((e) => e.toolsCache),
        { setToolsCache: c, removeToolsCache: u } = (0, X.DE)(),
        { setImgCache: m } = (0, X.TW)(),
        x = (0, o.useCallback)(
            (e) => {
                let t = d[e];
                null != t
                    ? s({ previewToolKey: t.url, palette: t.palette, skuId: "0" })
                    : s((t) =>
                          null == t ? { previewToolKey: e, palette: Z.Wj, skuId: "0" } : { ...t, previewToolKey: e },
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
                className: ex.ne,
                children: [
                    (0, r.jsxs)("div", {
                        className: ex.gO,
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
                        className: ex.uQ,
                        children: [
                            e && (0, r.jsx)(Y.A, { node: i }),
                            a &&
                                (0, r.jsx)(eo, {
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
                className: ex.iW,
                children: [
                    (0, r.jsx)(eg, { nameplate: l }, l?.palette?.name),
                    (0, r.jsxs)("div", {
                        className: ex.Uo,
                        children: [
                            (0, r.jsx)(C.E, {
                                variant: "text-sm/semibold",
                                children: "Drag background image to screen",
                            }),
                            (0, r.jsx)(K.A, {
                                title: "upload image",
                                description: "upload the background",
                                icons: eh.xi,
                                onDrop: async (e) => {
                                    let t = URL.createObjectURL(e[0]),
                                        a = e[0],
                                        n = await a.arrayBuffer();
                                    m(t, t, (0, ee.nI)(n)), c(t, t, Z.Wj);
                                },
                            }),
                            (0, r.jsx)("div", {
                                className: ex.is,
                                children: Object.values(d).map((e) => {
                                    let { url: t } = e;
                                    return (0, r.jsx)(ev, { src: t, onSetStatic: x, removeAsset: g }, t);
                                }),
                            }),
                            (0, r.jsx)(eb, {
                                label: "gradient override",
                                onChange: (e) => p({ name: Z.AK, darkBackground: e, lightBackground: e }),
                            }),
                            (0, r.jsx)(ej, { label: "set", onClick: () => {} }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eg(e) {
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
            className: ex.Fp,
            orientation: "horizontal",
            children: (0, r.jsxs)("div", {
                ref: l,
                className: ex.ey,
                style: { width: `${a}px` },
                children: [
                    (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: "Memberlist" }),
                    (0, r.jsx)(ef, { nameplate: t }),
                    (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: "DMs" }),
                    (0, r.jsx)(ey, { nameplate: t }),
                    (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: "RTC" }),
                    (0, r.jsx)(e_, { nameplate: t }),
                    (0, r.jsx)("div", { className: ex.Di, onMouseDown: m }),
                ],
            }),
        })
    );
}
function ev(e) {
    let { src: t, onSetStatic: a, removeAsset: n } = e;
    return (0, r.jsxs)("div", {
        className: ex.xO,
        children: [
            (0, r.jsx)(M.D, {
                onClick: () => n(t),
                className: ex.yV,
                children: (0, r.jsx)(z.P, { size: "custom", width: 16, height: 16, name: "x" }),
            }),
            (0, r.jsx)("img", { className: ex.Ez, src: t, alt: "" }),
            (0, r.jsx)("div", {
                className: ex.Lu,
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
function ej(e) {
    let { label: t, onClick: a } = e;
    return (0, r.jsxs)("div", {
        className: ex.Uu,
        children: [
            (0, r.jsx)(C.E, { variant: "text-sm/normal", children: "coming soon" }),
            (0, r.jsx)(h.$, { variant: "secondary", size: "sm", text: t, disabled: !0, onClick: a }),
        ],
    });
}
function eb(e) {
    let { label: t, onChange: a } = e;
    return (0, r.jsxs)("div", {
        className: ex.Im,
        children: [
            (0, r.jsx)(C.E, { variant: "text-sm/normal", children: t }),
            (0, r.jsx)("input", {
                onChange: (e) => {
                    a(e.target.value);
                },
                className: ex.QL,
                placeholder: "#000000",
            }),
        ],
    });
}
function ef(e) {
    let { nameplate: t } = e,
        a = (0, B.bG)([Q.default], () => Q.default.getCurrentUser());
    return (0, r.jsx)("div", {
        className: ex.VH,
        children: (0, r.jsxs)("div", {
            className: ex.H1,
            children: [
                (0, r.jsx)(C.E, { className: ex.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(H.A, { nameplate: t, user: a, currentUser: a }),
                (0, r.jsx)(C.E, { className: ex.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(H.A, { nameplate: t, selected: !0, user: a, currentUser: a }),
                        (0, r.jsx)(H.A, { selected: !0, user: a, currentUser: a }),
                    ],
                }),
            ],
        }),
    });
}
function ey(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: ex.VH,
        children: (0, r.jsxs)("div", {
            className: ex.H1,
            children: [
                (0, r.jsx)(C.E, { className: ex.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(em, { nameplate: t }),
                (0, r.jsx)(C.E, { className: ex.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(em, { selected: !0, nameplate: t }), (0, r.jsx)(em, { selected: !0 })],
                }),
            ],
        }),
    });
}
function e_(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: ex.VH,
        children: (0, r.jsx)("div", { className: ex.X2, children: (0, r.jsx)(el, { nameplate: t }) }),
    });
}
a(508300);
var eE = a(835245),
    eC = a(157559),
    eS = a(780777),
    eN = a(993408),
    eA = a(315949),
    ek = a(559474),
    eD = a(816866),
    eI = a(87558),
    eT = a(575593),
    eR = a(631903),
    eO = a(408278),
    ew = a(972213),
    eM = a(43990),
    eL = a(661531),
    eP = a(231723),
    eU = a(900686),
    eG = a(986687),
    eB = a(653901),
    eF = a(735438),
    eV = a.n(eF),
    e$ = a(219220),
    eW = a(480335);
let ez = (e) => {
    let { profileEffect: t } = e,
        a = o.useMemo(() => (0, eF.cloneDeep)(t), [t]),
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
        { layerData: s } = (0, e$.A)({ skuId: "debug", layers: l.effects });
    return (0, r.jsx)(eW.p, { profileEffect: l, layerData: s, skuId: "debug" });
};
var eH = a(314485),
    eK = a(778765);
let eY =
        "https://cdn.discordapp.com/assets/content/ad2a252a6866e1ecb3bab521e2baaabbf13ab2d1ecaa8af67862c53c91f76761.png",
    eq = { [eI.qH.THUMBNAIL]: null, [eI.qH.STATIC]: null, [eI.qH.REDUCED_MOTION]: null },
    eJ = "debug",
    eQ = "reduced-motion-preview-modal",
    eX = (e) => {
        let { transitionState: t, onClose: a, frameSrc: n, theme: l } = e;
        return (0, r.jsx)(f.d, {
            transitionState: t,
            size: "md",
            onClose: a,
            maxHeight: "viewport",
            children: (0, r.jsxs)("div", {
                className: eH.Xd,
                children: [
                    (0, r.jsx)("div", {
                        className: eH.y6,
                        children: (0, r.jsx)(eO.K, {
                            "aria-label": "Close",
                            onClick: a,
                            icon: ew.d,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: eH.rU,
                        children: [
                            (0, r.jsx)(eM.N, {
                                theme: l,
                                children: (e) =>
                                    (0, r.jsx)("img", {
                                        src: eY,
                                        alt: "",
                                        className: w()(eH.aM, e),
                                        "aria-hidden": !0,
                                    }),
                            }),
                            null != n &&
                                "" !== n &&
                                (0, r.jsx)("img", { src: n, className: eH.SD, alt: "Reduced motion preview" }),
                        ],
                    }),
                ],
            }),
        });
    },
    eZ = (e) => {
        let { type: t, frame: a, theme: n, onClear: l } = e,
            s = t === eI.qH.REDUCED_MOTION,
            i = s ? eY : eK.A,
            o = (0, r.jsx)(eM.N, {
                theme: n,
                children: (e) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("img", { src: i, alt: "", className: w()(eH.aM, e), "aria-hidden": !0 }),
                            a?.src != null &&
                                "" !== a.src &&
                                (0, r.jsx)("img", { src: a.src, className: w()(eH.SD, e), alt: "" }),
                        ],
                    }),
            });
        return (0, r.jsxs)("div", {
            className: eH.pK,
            children: [
                (0, r.jsx)(G.D, { variant: "heading-sm/bold", children: t }),
                s
                    ? (0, r.jsx)(M.D, {
                          className: w()(eH.zd, eH.eB),
                          onClick: () => {
                              (0, S.hasModalOpen)(eQ)
                                  ? (0, S.closeModal)(eQ)
                                  : (0, S.openModalLazy)(
                                        () =>
                                            Promise.resolve((e) =>
                                                (0, r.jsx)(eX, { ...e, frameSrc: a?.src ?? null, theme: n }),
                                            ),
                                        { modalKey: eQ, onCloseRequest: () => (0, S.closeModal)(eQ) },
                                    );
                          },
                          children: o,
                      })
                    : (0, r.jsx)("div", { className: eH.zd, children: o }),
                null != a && (0, r.jsx)(h.$, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: l }),
            ],
        });
    },
    e0 = (e) => {
        let { profileEffect: t } = e,
            { upsertProfileEffect: a } = (0, eD.wu)(),
            n = (0, B.bG)([Q.default], () => Q.default.getCurrentUser()),
            [l, s] = o.useState(!0),
            i = o.useRef({}),
            [d, c] = o.useState(!1),
            [u, m] = o.useState(!1),
            [x, p] = o.useState(8),
            [g, v] = o.useState([]),
            [j, b] = o.useState(eq),
            f = o.useRef([]),
            [y, _] = o.useState(t.name),
            E = y.toLowerCase().replace(/\s+/g, "_"),
            S = o.useMemo(
                () => ({
                    type: eT.R.PROFILE_EFFECT,
                    skuId: eJ,
                    title: eJ,
                    description: eJ,
                    accessibilityLabel: eJ,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: g,
                    animationType: eR.l.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [g],
            ),
            N = d ? eL.A.themes.DARKER : eL.A.themes.LIGHT,
            A = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            k = (e, t) => {
                let a = A(t);
                null != a &&
                    (0, eI.Mz)(a, (t) => {
                        b((n) => ({ ...n, [e]: (0, eI.GT)(t, a) }));
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
                                let e = (0, eI.fB)(a.base64);
                                (a.src = e), f.current.push(e), b((e) => ({ ...e, [t]: a }));
                            }
                        }
                    });
            }, [t.stillFrames]);
        let D = { profileEffect: t, upsertProfileEffect: a },
            I = o.useRef(D);
        return (o.useEffect(() => {
            I.current = D;
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
                  className: eH.zr,
                  children: [
                      (0, r.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, r.jsx)(eS.A, {
                                  ref: (e) => {
                                      i.current.animated = e;
                                  },
                                  onChange: (e) => {
                                      let t = A(e);
                                      null != t &&
                                          (0, eI.Mz)(t, async (e) => {
                                              let a = await (0, eI.Ay)(e, t, g.length);
                                              v((e) => [...e, a]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eS.A, {
                                  ref: (e) => {
                                      i.current.thumbnail = e;
                                  },
                                  onChange: (e) => k(eI.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eS.A, {
                                  ref: (e) => {
                                      i.current.static = e;
                                  },
                                  onChange: (e) => k(eI.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eS.A, {
                                  ref: (e) => {
                                      i.current.reducedMotion = e;
                                  },
                                  onChange: (e) => k(eI.qH.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: eH.Vg,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: w()(eH.nM, eH.uW),
                                  children: [
                                      (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Profile Effect Name" }),
                                      (0, r.jsx)("input", {
                                          type: "text",
                                          value: y,
                                          className: eH.hF,
                                          onChange: (e) => {
                                              _(e.target.value);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eH.nM,
                                  children: [
                                      (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Dark Theme" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: d,
                                          className: eH.OO,
                                          onChange: () => {
                                              c(!d);
                                          },
                                      }),
                                      (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Show User Profile" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: u,
                                          className: eH.OO,
                                          onChange: () => {
                                              m(!u);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eH.nM,
                                  children: [
                                      (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Border Radius" }),
                                      (0, r.jsx)("input", {
                                          type: "range",
                                          min: 4,
                                          max: 24,
                                          step: 2,
                                          value: x,
                                          onChange: (e) => p(+e.target.value),
                                      }),
                                      (0, r.jsxs)(C.E, { variant: "text-sm/normal", children: [x, "px"] }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: w()(eH.nz, eH.VH),
                                  style: { borderRadius: x },
                                  children: [
                                      u
                                          ? (0, r.jsx)("div", {
                                                className: eH.jq,
                                                children: (0, r.jsx)(eB.A, {
                                                    user: n,
                                                    currentUser: n,
                                                    transitionState: eP.ip.ENTERED,
                                                    onClose: () => {},
                                                    themeContainerClassName: eH.JB,
                                                }),
                                            })
                                          : (0, r.jsx)(eM.N, {
                                                theme: N,
                                                children: (e) =>
                                                    (0, r.jsx)("div", {
                                                        className: w()(eH.aM, e),
                                                        children: (0, r.jsx)("img", { src: eK.A, alt: "", width: 400 }),
                                                    }),
                                            }),
                                      l &&
                                          (0, r.jsx)("div", {
                                              className: eH.KJ,
                                              children: (0, r.jsx)(ez, { profileEffect: S }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  children:
                                      u &&
                                      (0, r.jsxs)("div", {
                                          className: w()(eH.f5, eH.VH),
                                          style: { borderRadius: x },
                                          children: [
                                              (0, r.jsx)(eG.A, {
                                                  user: n,
                                                  pendingAvatar: void 0,
                                                  pendingProfileEffect: null,
                                                  canUsePremiumCustomization: !0,
                                                  isTryItOut: !0,
                                              }),
                                              (0, r.jsx)(ez, { profileEffect: S }),
                                          ],
                                      }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: eH.nz,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: eH.nM,
                                          children: [
                                              (0, r.jsx)(h.$, {
                                                  variant: "active",
                                                  text: "Upload Animated Layer",
                                                  onClick: () => i.current.animated?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(C.E, {
                                                  variant: "text-sm/semibold",
                                                  children: "Make sure to upload the bottommost layer first!",
                                              }),
                                          ],
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: eH.nM,
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
                                          className: eH.q6,
                                          children: (0, r.jsx)("div", {
                                              className: eH.nM,
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
                                          className: w()(eH.q6, eH.XA),
                                          children: [
                                              (0, r.jsx)(C.E, {
                                                  variant: "text-sm/semibold",
                                                  children: "Please download both configs for the drop package!",
                                              }),
                                              (0, r.jsx)(C.E, {
                                                  variant: "text-sm/bold",
                                                  color: "text-feedback-critical",
                                                  children: "WARNING: The full config is really big :0",
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: eH.nM,
                                                  children: [
                                                      (0, r.jsx)(eU.A, {
                                                          fileContents: () => (0, eI.rs)(g),
                                                          contentType: "text/plain",
                                                          fileName: `${E}_timing_config.txt`,
                                                          children: (0, r.jsx)(h.$, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Timing Config",
                                                          }),
                                                      }),
                                                      (0, r.jsx)(eU.A, {
                                                          fileContents: () =>
                                                              JSON.stringify({
                                                                  ...t,
                                                                  name: y,
                                                                  readonly: !1,
                                                                  effects: g,
                                                                  stillFrames: j,
                                                              }),
                                                          contentType: "text/plain",
                                                          fileName: `${E}_config.txt`,
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
                                          className: eH.uW,
                                          children: [
                                              (0, r.jsx)(G.D, { variant: "heading-lg/bold", children: "Still Frames" }),
                                              (0, r.jsx)("div", {
                                                  className: eH.mv,
                                                  children: Object.entries(j).map((e) => {
                                                      let [t, a] = e;
                                                      return (0, r.jsx)(
                                                          eZ,
                                                          {
                                                              type: t,
                                                              frame: a,
                                                              theme: N,
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
                                              className: w()(eH.uW, eH.l7),
                                              children: [
                                                  (0, r.jsx)(C.E, {
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
                                  className: w()(eH.Vg, eH.ZF),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: eH.cD,
                                          children: (0, r.jsx)(h.$, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: () => {
                                                  v([]), b(eq);
                                              },
                                          }),
                                      }),
                                      g.map((e, t) =>
                                          (0, r.jsxs)(
                                              "div",
                                              {
                                                  className: eH.ec,
                                                  children: [
                                                      (0, r.jsxs)("div", {
                                                          className: eH.D1,
                                                          children: [
                                                              (0, r.jsx)(G.D, {
                                                                  variant: "heading-md/bold",
                                                                  children: e.name,
                                                              }),
                                                              (0, r.jsx)("img", {
                                                                  src: e.src,
                                                                  className: eH.oq,
                                                                  alt: "",
                                                              }),
                                                              null != e.randomizedSources &&
                                                                  (0, r.jsxs)(r.Fragment, {
                                                                      children: [
                                                                          (0, r.jsx)(G.D, {
                                                                              variant: "heading-md/bold",
                                                                              children: "Alternatives",
                                                                          }),
                                                                          e.randomizedSources.map((e, t) =>
                                                                              (0, r.jsxs)(
                                                                                  "div",
                                                                                  {
                                                                                      children: [
                                                                                          null != e.filename &&
                                                                                              (0, r.jsx)(G.D, {
                                                                                                  variant:
                                                                                                      "heading-sm/semibold",
                                                                                                  children: e.filename,
                                                                                              }),
                                                                                          (0, r.jsx)("img", {
                                                                                              src: e.src,
                                                                                              className: eH.oq,
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
                                                          className: w()(eH.Vg, eH.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: eH.nz,
                                                                  children: [
                                                                      (0, r.jsx)(C.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: eH.hF,
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
                                                                  className: eH.nz,
                                                                  children: [
                                                                      (0, r.jsx)(C.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: eH.hF,
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
                                                          className: w()(eH.Vg, eH.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: eH.nz,
                                                                  children: [
                                                                      (0, r.jsx)(C.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: eH.OO,
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
                                                                  className: eH.nz,
                                                                  children:
                                                                      e.loop &&
                                                                      (0, r.jsxs)(r.Fragment, {
                                                                          children: [
                                                                              (0, r.jsx)(C.E, {
                                                                                  variant: "text-md/bold",
                                                                                  children: "Loop Delay",
                                                                              }),
                                                                              (0, r.jsx)("input", {
                                                                                  type: "number",
                                                                                  value: e.loopDelay,
                                                                                  className: eH.hF,
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
                                                          children: (0, r.jsx)(eS.A, {
                                                              ref: (e) => {
                                                                  i.current[`randomized-${t}`] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let a;
                                                                  null != (a = A(e)) &&
                                                                      (0, eI.Mz)(a, (e) => {
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
                                                          className: w()(eH.nM, eH._N),
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
    e1 = "Make sure you're only uploading text files!",
    e2 = (e) => {
        let { profileEffect: t, onClick: a } = e,
            { deleteProfileEffect: n } = (0, eD.wu)();
        return (0, r.jsxs)(M.D, {
            className: eH.B0,
            onClick: a,
            children: [
                (0, r.jsx)("div", { className: eH.yV, style: { backgroundImage: `url(${t.effects?.[0]?.base64})` } }),
                (0, r.jsxs)("div", {
                    className: eH.eL,
                    children: [
                        (0, r.jsx)(C.E, { variant: "text-md/bold", children: t.name }),
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
function e8() {
    let { profileEffects: e, upsertProfileEffect: t, clearAll: a } = (0, eD.wu)(),
        [n, l] = o.useState(),
        s = o.useRef(null),
        { categories: i } = (0, eA.A)(),
        d = o.useMemo(() => (0, eN.Wj)(i), [i]),
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
                if (null == a || !e.type.startsWith("text/")) return (0, ek.Ni)(e1);
                let [n, l] = a.split(",");
                if (!n.includes("text/plain")) return (0, ek.Ni)(e1);
                let s = JSON.parse(atob(l));
                (s.skuId = (0, eE.A)()), t(s), (0, ek.GF)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        g = o.useCallback(
            (e) => {
                e.currentTarget?.files == null
                    ? (0, ek.Ni)("Error uploading file. Try again!")
                    : (0, ek.KE)(e.currentTarget.files, x, ek.Ni);
            },
            [x],
        );
    return (0, r.jsxs)("div", {
        className: eH.zr,
        children: [
            null == n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eH.nz,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: w()(eH.uW, eH.nM),
                                    children: [
                                        (0, r.jsx)(G.D, {
                                            variant: "heading-xl/bold",
                                            children: "Custom Profile Effects",
                                        }),
                                        (0, r.jsx)(h.$, {
                                            variant: "critical-secondary",
                                            text: "Clear All",
                                            onClick: async () => {
                                                (await eC.A.confirm({
                                                    title: "Clear All Profile Effects",
                                                    body: "Are you sure you want to clear all profile effects? This cannot be undone.",
                                                    confirmText: "Clear All",
                                                    confirmVariant: "critical-primary",
                                                })) && (a(), (0, ek.GF)("All profile effects cleared!"));
                                            },
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: eH.Iv,
                                    children: Object.values(e).map((e) =>
                                        (0, r.jsx)(e2, { profileEffect: e, onClick: () => l(e) }, e.skuId),
                                    ),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: w()(eH.nM, eH._N, eH.uW),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: eH.au,
                                    children: [
                                        (0, r.jsx)(C.E, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: "Import Shared Config",
                                        }),
                                        (0, r.jsx)(eS.A, { ref: s, onChange: g, multiple: !1 }),
                                    ],
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Create New Effect",
                                    onClick: () => {
                                        t({ skuId: (0, eE.A)(), name: "New Profile Effect", effects: [] });
                                    },
                                }),
                            ],
                        }),
                        (0, r.jsx)("hr", {}),
                        (0, r.jsxs)("div", {
                            className: eH.uW,
                            children: [
                                (0, r.jsx)(G.D, { variant: "heading-xl/bold", children: "All Effects" }),
                                (0, r.jsx)(p.k, {
                                    value: c,
                                    onChange: (e) => {
                                        u(e);
                                    },
                                }),
                                (0, r.jsx)("div", {
                                    className: eH.xm,
                                    children: m.map((e) =>
                                        (0, r.jsx)(
                                            M.D,
                                            {
                                                className: eH.S5,
                                                style: { backgroundImage: `url(${e.thumbnailPreviewSrc})` },
                                                onClick: () => {
                                                    let t = {
                                                        [eI.qH.THUMBNAIL]:
                                                            null != e.thumbnailPreviewSrc &&
                                                            "" !== e.thumbnailPreviewSrc
                                                                ? {
                                                                      src: e.thumbnailPreviewSrc,
                                                                      name: "thumbnail.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [eI.qH.STATIC]:
                                                            null != e.staticFrameSrc && "" !== e.staticFrameSrc
                                                                ? {
                                                                      src: e.staticFrameSrc,
                                                                      name: "static.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [eI.qH.REDUCED_MOTION]:
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
                                                    className: eH.Hd,
                                                    children: (0, r.jsx)(C.E, {
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
            null != n && (0, r.jsx)(e0, { profileEffect: n }),
        ],
    });
}
var e3 = a(935399),
    e6 = a(462887),
    e5 = a(289873),
    e4 = a(478016),
    e9 = a(565645),
    e7 = a(7584),
    te = a(619499),
    tt = a(207803),
    ta = a(84540),
    tn = a(836602),
    tl = a(999291),
    ts = a(903209),
    ti = a(841702),
    tr = a(892118),
    to = a(744808),
    td = a(725287),
    tc = a(626768),
    tu = a(464896);
function tm() {
    let e = (0, es.Ay)();
    return (0, r.jsxs)("div", {
        className: td.z3,
        children: [
            (0, r.jsx)("img", { src: (0, e6.M)(e) ? tc : tu, alt: "" }),
            (0, r.jsx)(C.E, {
                variant: "text-sm/normal",
                children:
                    "No frames found on your account. You must be granted test profile frame entitlements to use this tool.",
            }),
        ],
    });
}
function th() {
    let e = (0, B.bG)([Q.default], () => Q.default.getCurrentUser()),
        t = (0, tl.Ay)(e?.id);
    o.useEffect(() => {
        e?.id != null && (0, ts.A)(e.id);
    }, [e?.id]);
    let { purchases: a, isFetchingPurchases: n } = (0, ti.Bf)(),
        l = o.useMemo(() => (0, eN.MG)(a, new Map()), [a]),
        [{ pendingProfileFrame: s }, i] = (0, B.yK)([tn.A], () => [tn.A.getPendingChanges(), tn.A.showNotice()]),
        d = void 0 === s ? t?.profileFrame : s,
        c = null != d ? a.get(d.skuId) : void 0,
        u = (0, tr.s)(c?.items[0]) ? c.items[0] : void 0;
    return (
        (0, e3.l0)(tt.RE),
        (0, r.jsxs)("div", {
            className: td.kL,
            children: [
                (0, r.jsxs)(G.D, {
                    variant: "heading-xl/bold",
                    children: [
                        (0, r.jsx)(e9.A, {
                            emojiName: e7.Ay.getByName("frame_with_picture")?.surrogates,
                            className: td.Zg,
                        }),
                        "Profile Frames!",
                    ],
                }),
                0 === l.length && n && (0, r.jsx)(e5.y, {}),
                0 === l.length && !n && (0, r.jsx)(tm, {}),
                l.length > 0 &&
                    (0, r.jsxs)("div", {
                        className: td.MK,
                        children: [
                            (0, r.jsx)(C.E, {
                                variant: "text-sm/normal",
                                children: "Select a frame to preview. Save to apply the frame to your main profile.",
                            }),
                            (0, r.jsxs)("ul", {
                                className: td.p_,
                                children: [
                                    (0, r.jsx)(
                                        "li",
                                        {
                                            children: (0, r.jsx)(h.$, {
                                                text: "None",
                                                variant: "secondary",
                                                fullWidth: !0,
                                                icon: null == d ? e4.U : void 0,
                                                disabled: null == d,
                                                onClick: () => (0, ta.p)({ profileFrame: null }),
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
                                                          icon: d?.skuId === e.skuId ? e4.U : void 0,
                                                          disabled: d?.skuId === e.skuId,
                                                          onClick: () => (0, ta.p)({ profileFrame: e }),
                                                      }),
                                                  },
                                                  e.skuId,
                                              );
                                    }),
                                ],
                            }),
                            i && (0, r.jsx)(te.A, {}),
                            (0, r.jsxs)("div", {
                                className: td.VH,
                                children: [
                                    (0, r.jsx)(C.E, { variant: "text-sm/normal", children: "Preview:" }),
                                    (0, r.jsxs)("div", {
                                        className: td.ME,
                                        children: [
                                            (0, r.jsx)("img", { src: eK.A, alt: "" }),
                                            null != u && (0, r.jsx)(to.A, { frame: u }),
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
var tx = a(702841),
    tp = a(793574),
    tg = a(590180),
    tv = a(4227),
    tj = a(491438),
    tb = a(61750),
    tf = a(328762);
let ty = (e) => {
        let [t, a] = o.useState(0);
        return (
            o.useLayoutEffect(() => {
                let e = tv.A.getPurchase;
                return (
                    (tv.A.getPurchase = (e) => void 0),
                    tv.A.emitChange(),
                    a(1),
                    () => {
                        (tv.A.getPurchase = e), tv.A.emitChange();
                    }
                );
            }, []),
            (0, r.jsx)("div", { className: tf.Do, children: (0, r.jsx)(tj.A, { ...e }, t) })
        );
    },
    t_ = () => {
        let e = (0, tx.bG)([Q.default], () => Q.default.getCurrentUser()),
            t = (0, tx.bG)([tg.A], () => tg.A.categories),
            a = (0, tx.bG)([tv.A], () => tv.A.purchases),
            n = (0, tx.bG)([tg.A], () => tg.A.lastSuccessfulFetch),
            l = t.size > 0 && a.size > 0 && null != n,
            { isFetching: s, categories: i } = (0, ti.Ay)({ logPerf: !1, stalePurchasesOK: !0, noOp: l }),
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
            let e = tg.A.getProduct(u),
                t = tg.A.getCategoryForProduct(u);
            null != e && null != t ? (g(e), j(t)) : (g(null), j(null));
        }, [u, c]),
        s)
            ? (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Loading categories and collectibles..." })
            : null == e
              ? (0, r.jsx)(C.E, { variant: "text-md/normal", children: "No user found" })
              : (0, r.jsxs)("div", {
                    className: tf.kL,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tf.uW,
                            children: [
                                (0, r.jsx)(G.D, { variant: "heading-lg/semibold", children: "Product Configuration" }),
                                (0, r.jsxs)("div", {
                                    className: tf.qp,
                                    children: [
                                        (0, r.jsx)(C.E, {
                                            variant: "text-md/semibold",
                                            className: tf.NB,
                                            children: "Primary Product SKU ID",
                                        }),
                                        (0, r.jsx)(p.k, { value: u, onChange: m, placeholder: "Enter product SKU ID" }),
                                        !c &&
                                            "" !== u.trim() &&
                                            (0, r.jsx)(C.E, {
                                                variant: "text-sm/normal",
                                                className: tf.KQ,
                                                children: "Loading products...",
                                            }),
                                        c &&
                                            "" !== u.trim() &&
                                            null == x &&
                                            (0, r.jsx)(C.E, {
                                                variant: "text-sm/normal",
                                                className: tf.kc,
                                                children: "Product not found",
                                            }),
                                        null != x &&
                                            (0, r.jsxs)(C.E, {
                                                variant: "text-sm/normal",
                                                className: tf.xT,
                                                children: ["Found: ", x.name],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: tf.uW,
                            children: [
                                (0, r.jsx)(G.D, { variant: "heading-lg/semibold", children: "Product Preview" }),
                                null != x && null != v
                                    ? (0, r.jsxs)("div", {
                                          className: tf.i1,
                                          children: [
                                              (0, r.jsx)(ty, { skuId: x.skuId }),
                                              (0, r.jsx)(h.$, {
                                                  variant: "primary",
                                                  onClick: () => {
                                                      null != x &&
                                                          null != e &&
                                                          (0, tb.A)({
                                                              product: x,
                                                              analyticsLocations: [tp.A.COLLECTIBLES_SHOP_CARD],
                                                          });
                                                  },
                                                  text: "Show Collectibles Collected Modal",
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)("div", {
                                          className: tf.qf,
                                          children: (0, r.jsx)(C.E, {
                                              variant: "text-md/normal",
                                              className: tf.X2,
                                              children: "Enter a valid product SKU ID to see the preview",
                                          }),
                                      }),
                            ],
                        }),
                    ],
                });
    };
var tE = a(410724);
let tC = { profile_effects: 1, nameplates: 2, profile_frames: 3, product_preview: 4 },
    tS = (e) => {
        let { setTab: t } = e,
            a = (0, B.bG)([W.A], () => W.A.getWindowOpen(et.MLl.DEVTOOLS_POPOUT));
        return (0, r.jsxs)("div", {
            className: tE.Qs,
            children: [
                (0, r.jsx)(M.D, {
                    onClick: () => {
                        t(1);
                    },
                    children: (0, r.jsx)("div", {
                        className: w()(tE.vK, tE.Dg),
                        children: (0, r.jsx)(C.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Profile Effects",
                        }),
                    }),
                }),
                (0, r.jsx)(M.D, {
                    onClick: () => {
                        t(2);
                    },
                    children: (0, r.jsx)("div", {
                        className: w()(tE.vK, tE.st),
                        children: (0, r.jsx)(C.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Nameplates",
                        }),
                    }),
                }),
                (0, r.jsx)(M.D, {
                    onClick: () => {
                        t(3);
                    },
                    children: (0, r.jsx)("div", {
                        className: w()(tE.vK, tE.Dg),
                        children: (0, r.jsx)(C.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Profile Frames",
                        }),
                    }),
                }),
                (0, r.jsx)(M.D, {
                    onClick: () => {
                        t(4);
                    },
                    children: (0, r.jsx)("div", {
                        className: w()(tE.vK, tE.IP),
                        children: (0, r.jsx)(C.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Products",
                        }),
                    }),
                }),
                !a &&
                    (0, r.jsx)("div", {
                        style: { marginTop: 16 },
                        children: (0, r.jsx)(L.w, {
                            type: "warning",
                            children: (0, r.jsxs)(P.B, {
                                gap: 8,
                                children: [
                                    (0, r.jsx)(C.E, { variant: "text-md/semibold", children: "Not enough space?" }),
                                    (0, r.jsx)(C.E, {
                                        variant: "text-sm/normal",
                                        children: "You can pop out the DevTools to see the full layout.",
                                    }),
                                    (0, r.jsx)(h.$, {
                                        size: "sm",
                                        icon: U.t,
                                        variant: "secondary",
                                        onClick: $.openDevToolsPopout,
                                        text: "Popout DevTools",
                                    }),
                                ],
                            }),
                        }),
                    }),
            ],
        });
    },
    tN = () => {
        let [e, t] = o.useState(() => {
            let e = V.A.lastOpenSubTabId;
            return null != e && e in tC ? tC[e] : 0;
        });
        return (
            o.useEffect(() => {
                null != V.A.lastOpenSubTabId && (0, F.Jt)({ lastOpenSubTabId: null });
            }, []),
            (0, r.jsxs)(d.Ip, {
                className: tE.iE,
                children: [
                    (0, r.jsxs)("div", {
                        className: tE.C$,
                        children: [
                            (0, r.jsx)(G.D, { variant: "heading-xxl/medium", children: "Collectibles DevTools" }),
                            0 !== e && (0, r.jsx)(h.$, { variant: "primary", onClick: () => t(0), text: "Back" }),
                        ],
                    }),
                    (() => {
                        switch (e) {
                            case 1:
                                return (0, r.jsx)(e8, {});
                            case 2:
                                return (0, r.jsx)(ep, {});
                            case 3:
                                return (0, r.jsx)(th, {});
                            case 4:
                                return (0, r.jsx)(t_, {});
                            default:
                                return (0, r.jsx)(tS, { setTab: t });
                        }
                    })(),
                ],
            })
        );
    };
var tA = a(681154),
    tk = a(306264),
    tD = a(506774),
    tI = a(243721),
    tT = a(228366),
    tR = a(587895),
    tO = a(429913),
    tw = a(475825),
    tM = a(505206);
function tL(e) {
    let { columns: t, data: a, className: n, rowClassName: l, onClickRow: s, selectedRowKey: i, rowHeight: d = 40 } = e,
        c = o.useMemo(
            () =>
                t.map((e) => ({
                    renderHeader: () => (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: e.key }),
                    ...e,
                })),
            [t],
        ),
        u = 0 === a.length ? [1] : [a.length];
    return (0, r.jsx)("div", {
        className: tM.CZ,
        children: (0, r.jsx)(tw.OZ, {
            className: n,
            innerClassName: tM.tp,
            sections: u,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    n = tM.ZR;
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
                    u = w()(tM.jD, { [tM.wD]: o === i, rowClassName: l });
                return (0, r.jsx)(
                    M.D,
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
var tP = a(409626),
    tU = a(692969),
    tG = a(760751),
    tB = a(403362),
    tF = a(435738),
    tV = a(99753),
    t$ = a(975732),
    tW = a(574520),
    tz = a(808323),
    tH = a(832384),
    tK = a(424994),
    tY = a(330837);
function tq(e) {
    let { id: t } = e,
        a = (0, B.bG)([Q.default], () => Q.default.getUser(t));
    return null == a
        ? null
        : (0, r.jsx)(M.D, {
              className: tY._,
              onClick: function () {
                  (0, t$.openUserProfileModal)({ sourceAnalyticsLocations: [tp.A.DEV_TOOLS], userId: t });
              },
              children: (0, r.jsx)(C.E, { variant: "text-md/semibold", children: a.username }),
          });
}
function tJ() {
    let e = (0, B.bG)([tV.A], () => tV.A.getFeed(tK.X1.GLOBAL_FEED)),
        t = (0, B.bG)([tV.A], () => tV.A.getFilters()),
        a = (0, B.cf)([tW.A], () => {
            let t = {};
            for (let a of e?.entries ?? []) t[(0, tW.$)(a.content)] = tW.A.canRenderContent(a.content);
            return t;
        }, [e]),
        n = (0, B.bG)([tF.A], () => tF.A.getImpressionCappedItemIds());
    if (null == t) return null;
    let l = e?.entries?.flatMap((e) => {
        let { content: l } = e;
        if (!(0, tz.l)(t, l)) return [];
        let s = a[(0, tW.$)(l)];
        return (0, r.jsxs)(
            "li",
            {
                className: tY.p,
                children: [
                    (0, r.jsx)(tq, { type: l.author_type, id: l.author_id }),
                    !s && (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Expired or no matching presence" }),
                    (0, tH.I5)(l) &&
                        (0, r.jsxs)(C.E, { variant: "text-md/normal", children: ["Expired at ", l.expires_at] }),
                    n.has(l.id) && (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Impression capped" }),
                ],
            },
            l.id,
        );
    });
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(G.D, { variant: "heading-md/semibold", children: "Selected Content" }),
            null != l ? (0, r.jsx)("ul", { children: l }) : (0, r.jsx)("div", { children: "(none?)" }),
        ],
    });
}
var tQ = a(576470),
    tX = a(85451);
function tZ() {
    let e = (0, B.bG)([tV.A], () => tV.A.getFeed(tK.X1.GLOBAL_FEED)?.refresh_stale_inbox_after_ms != null),
        { loading: t, nextFetchDate: a } = (0, B.cf)(
            [tV.A],
            () => tV.A.getFeedState(tK.X1.GLOBAL_FEED) ?? { loading: !1 },
        ),
        n = (0, B.bG)([tV.A], () => tV.A.getLastFeedFetchDate(tK.X1.GLOBAL_FEED));
    return (0, r.jsxs)("div", {
        children: [
            t
                ? (0, r.jsx)(C.E, { variant: "text-md/normal", children: "(fetching)" })
                : (0, r.jsxs)(C.E, {
                      variant: "text-md/normal",
                      children: [
                          "Next fetch: ",
                          null != a ? (0, r.jsx)(tQ.A, { deadline: a }) : e ? "(awaiting push)" : "(unscheduled)",
                      ],
                  }),
            (0, r.jsxs)(C.E, {
                variant: "text-md/normal",
                children: [
                    "Last fetch:",
                    " ",
                    null != n ? (0, r.jsx)(tX.z, { inline: !0, entry: { start: n.getTime() } }) : "(never)",
                ],
            }),
        ],
    });
}
var t0 = a(866839);
let t1 = [
    {
        key: "type",
        cellClassName: w()(t0.Hn, t0.T$),
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(C.E, { variant: "text-md/semibold", children: tA.ContentInventoryEntryType[t] });
        },
    },
    {
        key: "count",
        cellClassName: w()(t0.Hn, t0.MX),
        render(e) {
            let { entries: t } = e;
            return (0, r.jsx)("div", { children: (0, r.jsx)(C.E, { variant: "text-md/normal", children: t.length }) });
        },
    },
    {
        key: "only?",
        cellClassName: t0.Hn,
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(t2, { type: t });
        },
    },
];
function t2(e) {
    let { type: t } = e,
        a = (0, B.bG)([tV.A], () => tV.A.getFilters()),
        n = a?.types?.has(t) ?? !1;
    return (0, r.jsx)(tI.d, {
        checked: n,
        onChange: function () {
            n
                ? tT.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: void 0 })
                : tT.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: { types: new Set([t]) } });
        },
    });
}
function t8() {
    var e;
    let t,
        a = (0, B.bG)([tV.A], () => tV.A.getFeed(tK.X1.GLOBAL_FEED)),
        n = (0, B.bG)([tV.A], () => tV.A.getDebugImpressionCappingDisabled()),
        l = (0, B.bG)([tF.A], () => tF.A.getDebugFastImpressionCappingEnabled()),
        s =
            ((e = a?.entries?.map((e) => e.content)),
            Object.keys((t = eV().groupBy(e, (e) => e.content_type))).map((e) => {
                let a = t[e];
                return { key: `${e}`, type: a[0].content_type, entries: a };
            })),
        i = (0, B.bG)([tV.A], () => tV.A.getFeedState(tK.X1.GLOBAL_FEED)?.loading === !0),
        [c, u] = o.useState(""),
        m = (0, B.bG)(
            [tG.A, tR.A],
            () => (parseInt(c) > 0 ? c : (tG.A.searchGamesByName(c)[0] ?? tR.A.getApplicationByName(c)?.id)),
            [c],
        ),
        x = (0, tU.A)({ applicationId: m, location: "DevToolsContentInventory", source: tP.Ob.DevTools }),
        g = Object.entries(tD.w.get("GameProfileModal") ?? {})
            .filter((e) => {
                let [t, a] = e;
                return a;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        v = (0, tO.A)(g).filter(tB.Vq);
    return (0, r.jsx)("div", {
        className: tM.nd,
        children: (0, r.jsxs)(d.Ip, {
            className: t0.Qs,
            children: [
                (0, r.jsxs)(P.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(C.E, { variant: "text-md/semibold", children: "Inventory" }),
                        s.length > 0 && (0, r.jsx)(tL, { columns: t1, data: s }),
                        (0, r.jsx)(tZ, {}),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Refresh Now",
                            fullWidth: !0,
                            onClick: function () {
                                tT.h.dispatch({
                                    type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                                    feedId: tK.X1.GLOBAL_FEED,
                                    feature: tk.M.INBOX,
                                });
                            },
                            loading: i,
                        }),
                    ],
                }),
                (0, r.jsxs)(P.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(C.E, { variant: "text-md/semibold", children: "Impression Capping" }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Clear Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                tT.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Log Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                tT.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: n ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                tT.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: l ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                tT.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING" });
                            },
                        }),
                    ],
                }),
                !1,
                (0, r.jsx)(tJ, {}),
                (0, r.jsxs)(P.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(C.E, { variant: "text-md/semibold", children: "Game Profile" }),
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
                                    { children: (0, r.jsx)(t3, { application: e }) },
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
let t3 = (e) => {
    let { application: t } = e,
        a = (0, tU.A)({ applicationId: t.id, location: "DevToolsContentInventory", source: tP.Ob.DevTools });
    return (0, r.jsx)(M.D, {
        onClick: a,
        children: (0, r.jsx)(C.E, { variant: "text-xs/normal", color: "text-muted", children: t.name }),
    });
};
var t6 = a(783878),
    t5 = a(137177),
    t4 = a(311043),
    t9 = a(569926),
    t7 = a(282435);
function ae(e) {
    return t7.Bf.get(e) ?? 0;
}
function at(e) {
    let { gameId: t } = e,
        { data: a, isLoading: n } = (0, t9.I)(t),
        l = (0, B.bG)([t4.A], () => t4.A.hasNoData(t), [t]);
    return n || (null == a && !l)
        ? (0, r.jsx)(C.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading\u2026" })
        : null == a
          ? (0, r.jsxs)(C.E, {
                variant: "text-sm/normal",
                color: "text-feedback-critical",
                children: ["No game found for ID ", t],
            })
          : (0, r.jsxs)(P.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(t5.A, { game: a, size: t5.M.SMALL }),
                    (0, r.jsxs)(P.B, {
                        gap: 0,
                        children: [
                            (0, r.jsx)(C.E, { variant: "text-md/semibold", children: a.name }),
                            (0, r.jsx)(C.E, { variant: "text-xxs/normal", color: "text-muted", children: a.id }),
                        ],
                    }),
                ],
            });
}
function aa() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(""),
        l = (0, B.bG)([tG.A], () => tG.A.games),
        s = o.useMemo(
            () =>
                l
                    .filter((e) => null != e.name && "" !== e.name)
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sort((e, t) => ae(t.value) - ae(e.value)),
            [l],
        ),
        i = o.useMemo(() => ({ baseSort: (e, t) => ae(t.item.value) - ae(e.item.value), keys: ["label"] }), []),
        d = o.useCallback((e) => {
            t(e), null != e && n("");
        }, []),
        c = o.useCallback((e) => {
            n(e), e.trim().length > 0 && t(null);
        }, []),
        u = a.trim(),
        m = u.length > 0 ? u : (e ?? void 0),
        x = (0, tU.A)({ gameId: m, location: "DevToolsGameProfile", source: tP.Ob.DevTools });
    return (0, r.jsx)("div", {
        className: tM.nd,
        children: (0, r.jsxs)(P.B, {
            gap: 32,
            padding: 12,
            fullWidth: !1,
            children: [
                (0, r.jsxs)(P.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(G.D, { variant: "heading-md/bold", children: "Game Profile" }),
                        (0, r.jsx)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "Search for a game by name, or paste a game ID, then open its profile.",
                        }),
                    ],
                }),
                (0, r.jsxs)(P.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(G.D, { variant: "heading-sm/bold", children: "Search" }),
                        (0, r.jsx)(t6.Z, {
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
                (0, r.jsxs)(P.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(G.D, { variant: "heading-sm/bold", children: "Game ID" }),
                        (0, r.jsx)(p.k, {
                            label: "Game ID",
                            hideLabel: !0,
                            placeholder: "Paste a game ID",
                            value: a,
                            onChange: c,
                        }),
                        u.length > 0 && (0, r.jsx)(at, { gameId: u }),
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
var an = a(554146),
    al = a(404778),
    as = a(617617),
    ai = a(355898),
    ar = a(644103),
    ao = a(574560),
    ad = a(994182);
let ac = [an.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL].map((e) => ({ id: String(e), label: an.M[e], value: e }));
function au() {
    let [e, t] = o.useState("dismissals"),
        [a, n] = o.useState(an.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL),
        l = (0, B.bG)([as.A], () => as.A.settings.userContent?.recurringDismissibleContentStates[a] ?? null),
        s = (0, B.bG)([ao.A], () => ao.A.getAllGameUpsellDismissals(a)),
        i = o.useMemo(() => Object.keys(s ?? {}), [s]),
        d = (0, tO.A)(i),
        [c, u] = o.useState(""),
        [m, g] = o.useState([]);
    o.useEffect(
        () =>
            (0, ar.Y)((e) => {
                g((t) => [e, ...t].slice(0, 100));
            }),
        [],
    );
    let v =
        l?.lastDismissedAtMs != null && "0" !== l.lastDismissedAtMs
            ? new Date(Number(l.lastDismissedAtMs)).toLocaleString()
            : "Never";
    return (0, r.jsxs)("div", {
        className: ad.nd,
        children: [
            (0, r.jsxs)("div", {
                className: ad.$H,
                children: [
                    (0, r.jsx)(M.D, {
                        className: w()(ad.V3, { [ad.u7]: "dismissals" === e }),
                        onClick: () => t("dismissals"),
                        children: "Dismissals",
                    }),
                    (0, r.jsxs)(M.D, {
                        className: w()(ad.V3, { [ad.u7]: "call-log" === e }),
                        onClick: () => t("call-log"),
                        children: ["Call Log ", m.length > 0 ? `(${m.length})` : ""],
                    }),
                ],
            }),
            "dismissals" === e
                ? (0, r.jsxs)("div", {
                      className: ad.Lj,
                      children: [
                          (0, r.jsx)("div", {
                              className: ad.uW,
                              children: (0, r.jsx)(x.l, {
                                  label: "Dismissible Content",
                                  value: a,
                                  onSelectionChange: (e) => n(e),
                                  options: ac,
                                  selectionMode: "single",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              className: ad.uW,
                              children: [
                                  (0, r.jsx)(G.D, { variant: "heading-md/bold", children: "Global DCF State" }),
                                  (0, r.jsxs)(C.E, { variant: "text-sm/normal", children: ["Last dismissed: ", v] }),
                                  (0, r.jsxs)(C.E, {
                                      variant: "text-sm/normal",
                                      children: ["Times dismissed: ", l?.numTimesDismissed ?? 0],
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: ad.uW,
                              children: [
                                  (0, r.jsx)(G.D, { variant: "heading-md/bold", children: "Mark as Dismissed" }),
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
                                          (0, ai.M)([c.trim()], a), u("");
                                      },
                                  }),
                              ],
                          }),
                          (0, r.jsx)(al.c, {}),
                          (0, r.jsxs)("div", {
                              className: w()(ad.uW, ad.LY),
                              children: [
                                  (0, r.jsxs)(G.D, {
                                      variant: "heading-md/bold",
                                      children: ["Per-Game Dismissals (", i.length, ")"],
                                  }),
                                  0 === i.length
                                      ? (0, r.jsx)(C.E, {
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
                                                            className: ad.Nr,
                                                            children: [
                                                                (0, r.jsxs)("div", {
                                                                    className: ad.MY,
                                                                    children: [
                                                                        null != i &&
                                                                            (0, r.jsx)("img", {
                                                                                src: i,
                                                                                alt: "",
                                                                                className: ad.Z2,
                                                                            }),
                                                                        (0, r.jsxs)("div", {
                                                                            className: ad.qi,
                                                                            children: [
                                                                                (0, r.jsx)(C.E, {
                                                                                    variant: "text-sm/semibold",
                                                                                    children: n?.name ?? "Unknown App",
                                                                                }),
                                                                                (0, r.jsx)(C.E, {
                                                                                    variant: "text-xs/normal",
                                                                                    color: "text-muted",
                                                                                    children: e,
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        (0, r.jsx)(h.$, {
                                                                            variant: "secondary",
                                                                            text: "Clear",
                                                                            onClick: () => (0, ai.e)(e, a),
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, r.jsxs)(C.E, {
                                                                    variant: "text-xs/normal",
                                                                    children: [
                                                                        "Last dismissed: ",
                                                                        new Date(l.dismissedAt).toLocaleString(),
                                                                    ],
                                                                }),
                                                                (0, r.jsxs)(C.E, {
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
                                                        for (let e of i) (0, ai.e)(e, a);
                                                    },
                                                }),
                                            ],
                                        }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: ad.Lj,
                      children: (0, r.jsxs)("div", {
                          className: ad.uW,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: ad.aq,
                                  children: [
                                      (0, r.jsxs)(G.D, {
                                          variant: "heading-md/bold",
                                          children: ["Hook Calls (", m.length, ")"],
                                      }),
                                      (0, r.jsx)(h.$, { variant: "secondary", text: "Clear", onClick: () => g([]) }),
                                  ],
                              }),
                              0 === m.length
                                  ? (0, r.jsx)(C.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "No calls recorded yet. Hook calls to useShouldShowGameUpsellForMultipleGames will appear here.",
                                    })
                                  : m.map((e, t) =>
                                        (0, r.jsxs)(
                                            "div",
                                            {
                                                className: ad.Nr,
                                                children: [
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-xs/semibold",
                                                        children: new Date(e.timestamp).toLocaleTimeString(),
                                                    }),
                                                    (0, r.jsxs)(C.E, {
                                                        variant: "text-xs/normal",
                                                        children: ["DC: ", an.M[e.dismissibleContent]],
                                                    }),
                                                    (0, r.jsxs)(C.E, {
                                                        variant: "text-xs/normal",
                                                        children: [
                                                            "Apps: ",
                                                            e.applicationIds.length > 0
                                                                ? e.applicationIds.join(", ")
                                                                : "none",
                                                        ],
                                                    }),
                                                    (0, r.jsxs)(C.E, {
                                                        variant: "text-xs/normal",
                                                        children: [
                                                            "Eligible:",
                                                            " ",
                                                            e.eligibleToShow.length > 0
                                                                ? (0, r.jsx)("span", {
                                                                      className: ad.OK,
                                                                      children: e.eligibleToShow.join(", "),
                                                                  })
                                                                : "none",
                                                        ],
                                                    }),
                                                    e.disabled &&
                                                        (0, r.jsx)(C.E, {
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
var am = a(696986),
    ah = a(47167),
    ax = a(734057),
    ap = a(994500),
    ag = a(310031),
    av = a(394953),
    aj = a(732421);
let ab = [
        {
            key: "channelName",
            cellClassName: w()(aj.Hn, aj.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(C.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: w()(aj.Hn, aj.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(C.E, { variant: "text-md/normal", children: t });
            },
        },
    ],
    af = [
        {
            key: "channelName",
            cellClassName: w()(aj.Hn, aj.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(C.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "loadState",
            cellClassName: w()(aj.Hn, aj.C7),
            render(e) {
                let { loadState: t } = e;
                return (0, r.jsx)(C.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: w()(aj.Hn, aj.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(C.E, { variant: "text-md/normal", children: t });
            },
        },
    ];
function ay() {
    let { unreadRecentMentionsCount: e, unreadChannelIds: t } = (0, av.U4)(),
        {
            isLoading: a,
            hasLoadedEver: n,
            hasPreloaded: l,
            hasMoreToLoad: s,
            isLoadingComplete: i,
        } = (0, tx.cf)([ag.A], () => ({
            isLoading: ag.A.isLoading,
            hasLoadedEver: ag.A.hasLoadedEver,
            hasPreloaded: ag.A.hasPreloaded,
            hasMoreToLoad: ag.A.hasMoreToLoad,
            isLoadingComplete: ag.A.isLoadingComplete,
        })),
        o = (0, tx.bG)([ag.A], () => ag.A.currentRequestAnalyticsPayload),
        c = (0, tx.cf)([ag.A], () => ag.A.getChannelInfoMap()),
        u = (0, tx.cf)([ax.A], () => {
            let e = {};
            return (
                Object.entries(c).forEach((t) => {
                    let [a] = t,
                        n = ax.A.getChannel(a);
                    e[a] = n ?? null;
                }),
                e
            );
        }),
        m = (0, tx.cf)([ax.A], () =>
            t.reduce((e, t) => {
                let a = ax.A.getChannel(t);
                return (e[t] = a ?? null), e;
            }, {}),
        ),
        h = (0, tx.bG)([ag.A], () => ag.A.getInboxMessages()),
        x = (0, tx.bG)([ag.A], () => ag.A.getDevOverrides().navOnClick);
    return (0, r.jsx)("div", {
        className: tM.nd,
        children: (0, r.jsxs)(d.Ip, {
            className: aj.Qs,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(G.D, { variant: "heading-lg/semibold", children: "Inbox" }),
                        (0, r.jsxs)("div", { children: ["Inbox Message Count: ", h.length] }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(G.D, { variant: "heading-lg/semibold", children: "Dev Overrides" }),
                        (0, r.jsx)("div", {
                            style: { display: "flex", alignItems: "center", marginTop: 8 },
                            children: (0, r.jsx)(tI.d, {
                                label: "Nav On Click",
                                checked: !!x,
                                onChange: (e) => {
                                    tT.h.dispatch({ type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES", navOnClick: e });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(G.D, { variant: "heading-lg/semibold", children: "Unreads and Badging" }),
                        (0, r.jsx)(am.h, { size: 8 }),
                        (0, r.jsxs)("div", { children: ["Unread Recent Mentions Count: ", e] }),
                        (0, r.jsxs)("div", { children: ["Unread Channel Count: ", t.length] }),
                        (0, r.jsx)(tL, {
                            columns: ab,
                            data: Object.entries(m).map((e) => {
                                let [t, a] = e;
                                return {
                                    key: t,
                                    channelId: t,
                                    channelName: null != a ? (0, ah.m1)(a, Q.default, ap.A) : "",
                                };
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(G.D, { variant: "heading-lg/semibold", children: "Store State" }),
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
                        (0, r.jsx)(G.D, { variant: "heading-lg/semibold", children: "Channel Info Map" }),
                        (0, r.jsxs)("div", { children: ["Total Channels: ", Object.keys(c).length] }),
                        (0, r.jsx)(tL, {
                            columns: af,
                            data: Object.entries(c).map((e) => {
                                let t,
                                    [a, n] = e;
                                return {
                                    key: a,
                                    channelId: a,
                                    channelName: null != (t = u[a]) ? (0, ah.m1)(t, Q.default, ap.A) : "",
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
var a_ = a(976860),
    aE = a(340124),
    aC = a(988483);
let aS = function () {
    return (0, r.jsxs)("div", {
        className: aC.k,
        children: [
            (0, r.jsx)(C.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                style: { marginBottom: "8px" },
                children: "Click the button below to clear your Minor Reward Capping History.",
            }),
            (0, r.jsx)(h.$, {
                onClick: () => {
                    (0, aE.Ov)(), (0, a_.pX)(et.BVt.QUEST_HOME);
                },
                text: "Clear History",
            }),
            (0, r.jsx)(C.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                children:
                    "Your may have to refresh your client after being redirected to the Quest Home in order to see these changes.",
            }),
        ],
    });
};
var aN = a(271866),
    aA = a(868511),
    ak = a(147964),
    aD = a(760716),
    aI = a(533406),
    aT = a(115093),
    aR = a(11039);
let aO = window.GLOBAL_ENV.RELEASE_CHANNEL === aT.B.STAGING ? "1438571444891025408" : "1346069614634864772";
function aw() {
    let e = (0, aD.i)((e) => e.overrideApplicationId),
        t = (0, aD.i)((e) => e.setOverrideApplicationId),
        a = null != e,
        [n, l] = o.useState(aO),
        [s, i] = o.useState(et.FYj),
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
        u = (0, aD.i)((e) => e.showSelfActivity),
        m = (0, aD.i)((e) => e.setShowSelfActivity),
        x = (0, aD.i)((e) => e.recommendationApplicationIds),
        g = (0, aD.i)((e) => e.setRecommendationApplicationIds),
        v = o.useCallback(
            (e) => {
                e ? g(s) : g(null);
            },
            [s, g],
        ),
        j = (0, B.bG)([ak.A], () => null != ak.A.testModeApplicationId),
        b = o.useCallback((e) => {
            e ? (0, S.openModal)((e) => (0, r.jsx)(aA.A, { ...e })) : aN.cL();
        }, []),
        f = (0, tU.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: n,
            source: tP.Ob.Embed,
            trackEntryPointImpression: !0,
        }),
        y = o.useCallback(
            (e) => {
                f?.(e);
            },
            [f],
        ),
        _ = o.useCallback(() => {
            (0, a_.pX)(et.BVt.COLLECTIBLES_SHOP_GAME_SHOP(n));
        }, [n]),
        E = o.useCallback(() => {
            (0, aI.openSocialLayerStorefrontAnnouncementModal)();
        }, []);
    return (0, r.jsx)("div", {
        className: w()(tM.nd, aR.n),
        children: (0, r.jsxs)("div", {
            className: aR.k,
            children: [
                (0, r.jsx)(p.k, { label: "Application ID", value: n, onChange: c }),
                (0, r.jsx)(G.D, { variant: "heading-lg/normal", children: "Activity Override" }),
                (0, r.jsx)(tI.d, { label: "Override activity application ID", checked: a, onChange: d }),
                (0, r.jsx)(tI.d, { label: "Show own voice activity (bypass self check)", checked: u, onChange: m }),
                (0, r.jsx)(tI.d, { label: "Enable application test mode", checked: j, onChange: b }),
                (0, r.jsx)(h.$, { text: "Open Game Profile Modal", onClick: y }),
                (0, r.jsx)(h.$, { text: "Open Announcement Modal", onClick: E }),
                (0, r.jsx)(h.$, { text: "Navigate to App Game Shop", onClick: _ }),
                (0, r.jsx)(G.D, { variant: "heading-lg/normal", children: "Wishlists" }),
                (0, r.jsx)(p.k, {
                    label: "Recommendation application IDs",
                    value: s,
                    onChange: i,
                    disabled: null == x,
                }),
                (0, r.jsx)(tI.d, {
                    label: "Enable recommendation application IDs override",
                    checked: null != x,
                    onChange: v,
                }),
            ],
        }),
    });
}
var aM = a(540999),
    aL = a(723702),
    aP = a(865116);
a(670812), a(772958);
var aU = a(58736);
a(558179), a(21574);
var aG = a(788806),
    aB = a(302031);
let aF = {
    base00: eL.A.colors.BACKGROUND_BASE_LOWER.css,
    base03: eL.A.colors.TEXT_FEEDBACK_WARNING.css,
    base07: eL.A.colors.TEXT_DEFAULT.css,
    base08: eL.A.colors.TEXT_MUTED.css,
    base09: eL.A.colors.TEXT_FEEDBACK_POSITIVE.css,
    base0B: eL.A.colors.TEXT_FEEDBACK_WARNING.css,
    base0D: eL.A.colors.TEXT_BRAND.css,
};
function aV(e) {
    let t = {};
    for (let [a, n] of Object.entries(e)) t[a] = n;
    return t;
}
let a$ = aV(aF),
    aW = aV(aF);
function az(e) {
    return et.AKn.test(e) ? (0, r.jsx)(aB.Ay, { type: aB.Ay.Types.TEXT, children: () => e }) : e;
}
function aH(e) {
    let { data: t } = e,
        a = (0, es.Ay)();
    return (0, r.jsx)("div", {
        className: tM.H$,
        children: (0, r.jsx)(aG.d, {
            data: t,
            theme: "light" === a ? aW : a$,
            invertTheme: !1,
            valueRenderer: az,
            shouldExpandNode: () => !0,
        }),
    });
}
var aK = a(761929),
    aY = a(23599);
function aq(e) {
    let { resizableNode: t, minHeight: a, onResize: n } = e,
        l = (0, aK.A)({
            minDimension: a,
            resizableDomNodeRef: t,
            onElementResize: n,
            orientation: aK.R.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, r.jsx)("div", { onPointerDown: l, className: aY.Di });
}
function aJ(e) {
    let { children: t, className: a, initialHeight: n, minHeight: l } = e,
        s = o.useRef(null),
        [i, d] = o.useState(n);
    return (0, r.jsxs)("div", {
        ref: s,
        className: aY.kL,
        style: { minHeight: l, height: i },
        children: [
            (0, r.jsx)(aq, { resizableNode: s, minHeight: l, onResize: d }),
            (0, r.jsx)("div", { className: w()(aY.KZ, a), children: t }),
        ],
    });
}
var aQ = a(231643);
a(895017), aQ.fu.NONE, aQ.fu.NONE;
var aX = a(824552),
    aZ = a(688810),
    a0 = a(975460),
    a1 = a(46225),
    a2 = a(487431),
    a8 = a(952818),
    a3 = a(905552),
    a6 = a(546183),
    a5 = a(134861),
    a4 = a(71393),
    a9 = a(967198),
    a7 = a(157257),
    ne = a(942370),
    nt = a(375708),
    na = a(311350),
    nn = a(325126);
function nl() {
    var e;
    let t,
        a,
        n = o.useRef(null),
        { analyticsLocations: l } = (0, aZ.Ay)(tp.A.DEV_TOOLS),
        [s, i] = o.useState(""),
        d = (0, B.bG)([a9.A], () => a9.A.getGuildId()),
        c = (0, B.bG)([a4.A], () => a4.A.getGuild(d)),
        u = c?.gameApplicationIds ?? [],
        m = (0, tO.A)(u).filter((e) => null != e),
        x = (0, B.bG)([a8.Ay, a7.A], () => (0, a3.A)(a8.Ay, a7.A)),
        g = (0, tO.h)(s),
        v = (0, a0.g)(g),
        j = (0, B.yK)(
            [tR.A],
            () => g?.linkedGames?.map((e) => tR.A.getApplication(e.id)).filter((e) => null != e) ?? [],
        ),
        b = (0, a1.RD)(g, { allowedFlows: [ne._M.RPC], debug: !0 }),
        f = (0, a1.RD)(g, { allowedFlows: [ne._M.WEB], debug: !0 }),
        y = (0, B.bG)([a5.A], () => null != v && a5.A.isConnected(v.id)),
        _ = (0, a1.RD)(g, { debug: !0 }),
        { canDeauthorize: E, deauthorize: S } =
            ((e = _.connectionApp?.id),
            (t = (0, B.bG)([a6.default], () => a6.default.getNewestTokenForApplication(e))),
            (a = o.useCallback(() => {
                null != t && aX.A.delete(t.id);
            }, [t])),
            { canDeauthorize: null != t, deauthorize: a });
    return (0, r.jsxs)("div", {
        ref: n,
        className: w()(tM.nd, nn.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nn.kL,
                children: [
                    (0, r.jsx)(G.D, { variant: "heading-lg/normal", children: "Guild Official Games" }),
                    null != c
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)(C.E, { variant: "text-md/normal", children: [c.name, " (", c.id, ")"] }),
                                  m.length > 0
                                      ? (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(C.E, {
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
                                      : (0, r.jsx)(C.E, { variant: "text-md/normal", children: "No official games" }),
                              ],
                          })
                        : (0, r.jsx)(C.E, { variant: "text-md/normal", children: "No guild selected" }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: nn.kL,
                children: [
                    (0, r.jsx)(G.D, { variant: "heading-lg/normal", children: "Application" }),
                    (0, r.jsx)(p.k, { label: "Application ID", value: s, onChange: i }),
                    null != x && null != x.id
                        ? (0, r.jsx)(h.$, {
                              onClick: () => i(x.id),
                              variant: "primary",
                              text: `Use detected game: ${x.name} (${x.id})`,
                          })
                        : null,
                    (0, r.jsxs)(C.E, {
                        variant: "text-md/normal",
                        children: ["Application Name: ", null != g ? g.name : "N/A"],
                    }),
                    (0, r.jsxs)(C.E, {
                        variant: "text-md/normal",
                        children: [
                            "Linked Games:",
                            " ",
                            j.length > 0
                                ? j.map((e) => ((0, a0.t)(g)?.id === e.id ? `${e.name}*` : e.name)).join(", ")
                                : "N/A",
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(al.c, {}),
            (0, r.jsxs)("div", {
                className: nn.kL,
                children: [
                    (0, r.jsx)(G.D, { variant: "heading-lg/normal", children: "Authorization" }),
                    (0, r.jsx)(a2.VT, {
                        overallStatus: b.debug.isSubscribedToAuthorizeRequest
                            ? a2.nW.OVERALL_GOOD
                            : y
                              ? a2.nW.WARN
                              : a2.nW.OVERALL_BAD,
                        name: nt.intl.string(na.default.AGLx00),
                        steps: [
                            {
                                status: y ? a2.nW.GOOD : a2.nW.BAD,
                                text: nt.intl.string(na.default.kxF9br),
                                description: y ? null : nt.intl.string(na.default.PFxxJa),
                                learnMoreLink: y
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: b.debug.isSubscribedToAuthorizeRequest
                                    ? a2.nW.GOOD
                                    : y
                                      ? a2.nW.WARN
                                      : a2.nW.BAD,
                                text: nt.intl.string(na.default.S94dzs),
                                description:
                                    b.debug.isSubscribedToAuthorizeRequest || !y
                                        ? null
                                        : nt.intl.string(na.default.aTULMB),
                                learnMoreLink:
                                    b.debug.isSubscribedToAuthorizeRequest || !y
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: _.chosenFlow === ne._M.RPC,
                    }),
                    (0, r.jsx)(a2.VT, {
                        overallStatus: f.debug.hasConnectionEntrypointUrl ? a2.nW.OVERALL_GOOD : a2.nW.OVERALL_BAD,
                        name: nt.intl.string(na.default.K3ObrU),
                        steps: [
                            {
                                status: f.debug.hasConnectionEntrypointUrl ? a2.nW.GOOD : a2.nW.BAD,
                                text: nt.intl.string(na.default["8a7IrV"]),
                                description: f.debug.hasConnectionEntrypointUrl
                                    ? nt.intl.formatToPlainString(na.default["9iLeL2"], {
                                          url: f.connectionApp?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: _.chosenFlow === ne._M.WEB,
                    }),
                    (0, r.jsx)(a2.Sy, {
                        status: _.hasAlreadyLinked ? a2.nW.OVERALL_GOOD : a2.nW.OVERALL_BAD,
                        text: nt.intl.string(nt.t["Vu/zmQ"]),
                    }),
                    0 === _.debug.validFlows.length &&
                        (0, r.jsx)(C.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: nt.intl.string(na.default.eg0mNa),
                        }),
                    (0, r.jsx)(h.$, {
                        disabled: !_.canStartAuthorization,
                        onClick: () => _.startAuthorization({ analyticsLocations: l }),
                        variant: "primary",
                        text: "Start Authorization",
                    }),
                    (0, r.jsx)(C.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children:
                            "This will start whichever authorization flow is available. RPC authorization takes precedence over web.",
                    }),
                    (0, r.jsx)(h.$, {
                        disabled: !b.canStartAuthorization,
                        onClick: () => b.startAuthorization({ analyticsLocations: l }),
                        variant: "secondary",
                        text: "Start In-App Authorization",
                    }),
                    (0, r.jsx)(h.$, {
                        disabled: !f.canStartAuthorization,
                        onClick: () => f.startAuthorization({ analyticsLocations: l }),
                        variant: "secondary",
                        text: "Start Web Authorization",
                    }),
                    (0, r.jsx)(h.$, { disabled: !E, onClick: S, variant: "critical-primary", text: "Deauthorize" }),
                ],
            }),
            g?.applicationAccountLinkBenefitConfig != null &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(al.c, {}),
                        (0, r.jsxs)("div", {
                            className: nn.kL,
                            children: [
                                (0, r.jsx)(G.D, { variant: "heading-lg/normal", children: "Reward Configuration" }),
                                (0, r.jsx)("div", {
                                    className: nn.Nr,
                                    children: (0, r.jsxs)("div", {
                                        className: nn.Tc,
                                        children: [
                                            null != g.applicationAccountLinkBenefitConfig.reward_image &&
                                                (0, r.jsx)("img", {
                                                    src: g.applicationAccountLinkBenefitConfig.reward_image,
                                                    alt: "Reward",
                                                    className: nn.L8,
                                                }),
                                            (0, r.jsx)(C.E, {
                                                variant: "text-md/semibold",
                                                children:
                                                    g.applicationAccountLinkBenefitConfig.reward_name ??
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
var ns = a(427358),
    ni = a(465153);
let nr = [
    {
        key: "user",
        cellClassName: ni.iL,
        render(e) {
            let { user: t, key: a } = e;
            return t?.username ?? a;
        },
    },
    {
        key: "affinity",
        renderHeader: () => (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: "COMMUNICATION AFFINITY" }),
        cellClassName: ni.nz,
        render(e) {
            let { affinity: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "vcProbability",
        renderHeader: () => (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: "VOICE AFFINITY" }),
        cellClassName: ni.nz,
        render(e) {
            let { vcProbability: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "isFriend",
        renderHeader: () => (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: "IS FRIEND" }),
        cellClassName: ni.nz,
        render(e) {
            let { isFriend: t } = e;
            return t.toString();
        },
    },
];
function no() {
    let e = (0, B.yK)([ns.A, Q.default], () =>
        ns.A.getUserAffinities().map((e) => {
            let { otherUserId: t, communicationProbability: a, vcProbability: n, isFriend: l } = e;
            return { user: Q.default.getUser(t), affinity: a, vcProbability: n, isFriend: l, key: t };
        }),
    );
    return 0 === e.length ? null : (0, r.jsx)(tL, { className: tM.nd, columns: nr, rowClassName: ni.nM, data: e });
}
var nd = a(139716),
    nc = a(847599),
    nu = a(282621);
function nm() {
    return (0, r.jsx)("div", {
        className: w()(tM.nd, nu.k),
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(G.D, { variant: "heading-lg/semibold", children: "Quick Actions" }),
                (0, r.jsx)(al.c, { gap: 16 }),
                (0, r.jsxs)("div", {
                    className: nu.h,
                    children: [
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Launch Age Verification Test Tool",
                            onClick: () =>
                                void (0, S.openModalLazy)(
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
                                nd.A.showAgeVerificationGetStartedModal({ entryPoint: nc.q1.DEV_TOOLS_QUICK_ACTIONS }),
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var nh = a(989349),
    nx = a.n(nh),
    np = a(862482),
    ng = a(624479),
    nv = a(555704),
    nj = a(285796),
    nb = a(241326),
    nf = a(892547),
    ny = a(297413),
    n_ = a(379078),
    nE = a(704554),
    nC = a(957565),
    nS = a(58703),
    nN = a(80703),
    nA = a(495544);
let nk = 0,
    nD = [],
    nI = 0,
    nT = [],
    nR = !1;
class nO extends B.Ay.Store {
    static displayName = "AnalyticsLogStore";
    initialize() {
        this.waitFor(nA.default, aM.A);
    }
    get loggedEvents() {
        return nD;
    }
    get loggedEventsVersion() {
        return nI;
    }
    get loggedTriggers() {
        return nT;
    }
    get trackTriggers() {
        return nR;
    }
}
let nw = new nO(tT.h, {
    TRACK: function (e) {
        let { event: t, properties: a, fingerprint: n } = e;
        aM.A.isDeveloper &&
            (nD.push({
                key: (nk++).toString(),
                event: t,
                properties: a,
                fingerprint: null != n ? (0, nN.d)(n) : nA.default.getId(),
                timestamp: new Date(),
            }),
            nI++,
            nD.length > 500 && (nD = nD.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: a, exposureType: n, excluded: l, location: s, previouslyTracked: i } = e;
        !aM.A.isDeveloper ||
            (nR &&
                (nT = [
                    ...nT,
                    {
                        key: (0, eE.A)(),
                        experimentId: t,
                        descriptor: a,
                        exposureType: n,
                        excluded: l,
                        location: s,
                        previouslyTracked: i,
                        timestamp: new Date(),
                    },
                ]).length > 500 &&
                nT.shift());
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        nR = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        (nD = []), nI++, (nT = []);
    },
});
var nM = a(658675);
function nL(e) {
    let { className: t, children: a } = e;
    return (0, r.jsx)("dl", { className: w()(tM.qo, t), children: a });
}
let nP = (e) => {
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
                (0, r.jsx)("dt", { className: tM.Bz, children: t }),
                (0, r.jsxs)("dd", {
                    className: tM.Nw,
                    children: [
                        a,
                        null != n
                            ? (0, r.jsx)(M.D, {
                                  tag: "span",
                                  className: tM.nH,
                                  onClick: () => (0, nC.C)(n, () => s(!0)),
                                  children: l
                                      ? (0, r.jsx)(e4.U, { color: "currentColor", size: "sm" })
                                      : (0, r.jsx)(ng.T, { color: "currentColor", size: "sm" }),
                              })
                            : null,
                    ],
                }),
            ],
        })
    );
};
function nU(e) {
    let { value: t } = e;
    return (0, r.jsx)(nM.P, { checked: t });
}
var nG = a(733657);
let nB = [
    {
        key: "event",
        cellClassName: nG.Hz,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "location",
        cellClassName: nG.QN,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function nF(e) {
    let { children: t } = e;
    return (0, r.jsx)(d.Ip, { className: nG._D, children: (0, r.jsx)("dl", { children: t }) });
}
function nV(e) {
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
            className: nG.fY,
            children: [
                (0, r.jsx)("dt", { className: nG.m2, children: t }),
                (0, r.jsx)("dd", { children: a }),
                (0, r.jsx)(M.D, {
                    tag: "span",
                    className: nG.nH,
                    onClick: () => (0, nC.C)(JSON.stringify(n), () => s(!0)),
                    children: l
                        ? (0, r.jsx)(e4.U, { color: "currentColor", size: "sm" })
                        : (0, r.jsx)(ng.T, { color: "currentColor", size: "sm" }),
                }),
            ],
        })
    );
}
let n$ = new Set(["client_performance_cpu", "client_performance_memory"]),
    nW = [
        {
            id: "details",
            name: "Details",
            group: aQ.fu.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: a, timestamp: n, fingerprint: l },
                        onClose: s,
                        filteredEvents: i,
                    } = e,
                    o = Q.default.getUser(l),
                    d = nx()(n);
                return (0, r.jsxs)("div", {
                    className: nG.sw,
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, r.jsxs)(aU.Ay, {
                            className: w()(tM.jr, nG.nZ),
                            children: [
                                (0, r.jsx)(aU.Ay.Icon, { icon: nv.U, tooltip: t }),
                                (0, r.jsxs)(aU.Ay.Title, {
                                    wrapperClassName: nG.qd,
                                    children: [
                                        t,
                                        (0, r.jsx)(M.D, {
                                            tag: "span",
                                            className: nG.KE,
                                            onClick: () => (0, nC.C)(t),
                                            children: (0, r.jsx)(ng.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(aU.Ay.Icon, {
                                    icon: ng.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, nC.C)(
                                            JSON.stringify(
                                                { event: t, timestamp: n, fingerprint: l, user: o?.id, ...a },
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, r.jsx)(aU.Ay.Icon, { icon: nj.a, tooltip: "Close", onClick: s }),
                            ],
                        }),
                        (0, r.jsxs)(nL, {
                            className: nG.ZK,
                            children: [
                                (0, r.jsx)(nP, {
                                    name: "Timestamp (local)",
                                    copyValue: n.toISOString(),
                                    children: (0, r.jsxs)("time", {
                                        dateTime: n.toISOString(),
                                        title: (0, nS.i$)(d, "LLLL"),
                                        children: ["(", nx().locale(), ") ", (0, nS.mk)(d)],
                                    }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nP, {
                                        name: "User",
                                        copyValue: o.id,
                                        children: (0, r.jsx)(ny.A, { user: o }),
                                    }),
                                (0, r.jsx)(nP, {
                                    name: "Fingerprint",
                                    copyValue: l,
                                    children: (0, r.jsx)("code", { children: l }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(nF, {
                            children: Object.entries(a).map((e) => {
                                let [a, n] = e,
                                    l = n$.has(a)
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
                                                nV,
                                                {
                                                    name: `${a}:`,
                                                    copyValue: { [a]: n || null },
                                                    children:
                                                        null != n
                                                            ? (0, r.jsx)("code", { children: JSON.stringify(n) })
                                                            : (0, r.jsx)("code", {
                                                                  className: nG.HO,
                                                                  children: "null",
                                                              }),
                                                },
                                                a,
                                            ),
                                            null !== l &&
                                                null !== l.average &&
                                                (0, r.jsx)(
                                                    nV,
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
    nz = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(nz)
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
    nH = {
        searchType: n_.n.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: a } = e;
            return null != a.location ? [t, a.location] : t;
        },
        throttleMs: 100,
    };
function nK() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (0, B.bG)([nw], () => nw.loggedEventsVersion),
        [l, s] = o.useState(() => Object.keys(nz)),
        [i, d] = o.useState(nw.loggedEvents),
        c = o.useCallback((e) => {
            d(e);
        }, []);
    (0, nE.RT)(t, nw.loggedEvents, c, nH, [n]);
    let u = i.filter((e) => {
            for (let t of l) if (nz[t].filter(e)) return !0;
            return !1;
        }),
        [m, h] = o.useState(void 0),
        x = u.find((e) => e.key === m),
        { TabBar: p, renderSelectedTab: g } = (0, aQ.Ay)({ tabs: nW }, []);
    return (0, r.jsxs)("div", {
        ref: e,
        className: w()(tM.nd, nG.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nG.rh,
                children: [
                    (0, r.jsx)(np.$n, {
                        className: nG.Q$,
                        look: np.$n.Looks.BLANK,
                        size: np.$n.Sizes.ICON,
                        onClick: F.eY,
                        children: (0, r.jsx)("span", {
                            title: nt.intl.string(nt.t.VkKicb),
                            children: (0, r.jsx)(nb.u, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": nt.intl.string(nt.t.VkKicb),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", { className: nG.Bi }),
                    (0, r.jsx)("div", {
                        className: nG.uW,
                        children: Object.entries(nz).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                M.D,
                                {
                                    className: w()(nG.pb, l.includes(t) && nG.bx),
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
                className: nG.rh,
                children: (0, r.jsx)(nf.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, r.jsx)(tL, { columns: nB, data: u, selectedRowKey: m, onClickRow: (e) => h(e.key) }),
            null != x &&
                (0, r.jsxs)(aJ, {
                    className: nG.rf,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(p, {}), g({ loggedEvent: x, onClose: () => h(void 0), filteredEvents: u })],
                }),
        ],
    });
}
var nY = a(382483),
    nq = a(385113),
    nJ = a(315117);
function nQ(e) {
    let { config: t } = e,
        a = Object.entries(t.surfaces ?? {});
    return (0, r.jsxs)(P.B, {
        gap: 8,
        padding: 8,
        className: nJ.lt,
        children: [
            (0, r.jsx)(C.E, { variant: "text-sm/semibold", color: "text-strong", children: t.display_name }),
            (0, r.jsxs)(C.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["Config ID: ", t.config_id],
            }),
            (0, r.jsxs)(C.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["App ID: ", t.application_id],
            }),
            (0, r.jsxs)(C.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", t.status] }),
            null != t.updated_at &&
                (0, r.jsxs)(C.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: ["Updated: ", t.updated_at],
                }),
            null != t.published_at &&
                (0, r.jsxs)(C.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: ["Published: ", t.published_at],
                }),
            (0, r.jsx)(al.c, {}),
            (0, r.jsxs)(C.E, {
                variant: "text-xs/semibold",
                color: "text-strong",
                children: ["Surfaces (", a.length, ")"],
            }),
            0 === a.length
                ? (0, r.jsx)(C.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: "No surfaces configured",
                  })
                : a.map((e) => {
                      let [t, a] = e;
                      return (0, r.jsxs)(
                          P.B,
                          {
                              gap: 4,
                              padding: 4,
                              className: nJ.YL,
                              children: [
                                  (0, r.jsx)(C.E, { variant: "text-xs/semibold", color: "text-default", children: t }),
                                  (0, r.jsxs)(C.E, {
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
function nX(e) {
    let { config: t, isSelected: a, onSelect: n } = e;
    return (0, r.jsxs)(P.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: a ? nJ.FM : nJ.gt,
        children: [
            (0, r.jsx)(M.D, {
                className: nJ.Av,
                onClick: n,
                children: (0, r.jsxs)(P.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(C.E, { variant: "text-sm/medium", color: "text-strong", children: t.display_name }),
                        (0, r.jsxs)(C.E, {
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
                onClick: () => (0, nY.un)(t.application_id, { force: !0 }),
            }),
        ],
    });
}
function nZ() {
    let e = (0, B.bG)([nq.A], () => nq.A.getFeaturedFetchState());
    return (0, r.jsxs)(P.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(P.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(C.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Featured Configs",
                    }),
                    (0, r.jsxs)(C.E, { variant: "text-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, r.jsx)(h.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, nY.Wq)({ force: !0 }),
            }),
        ],
    });
}
function n0() {
    let e = (0, B.bG)([nq.A], () => nq.A.getDeveloperFetchState());
    return (0, r.jsxs)(P.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(P.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(C.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Developer Configs",
                    }),
                    (0, r.jsxs)(C.E, { variant: "text-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, r.jsx)(h.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, nY.i$)({ force: !0 }),
            }),
        ],
    });
}
function n1() {
    let [e, t] = o.useState(""),
        a = (0, B.bG)([nq.A], () => (e.length > 0 ? nq.A.getFetchState(e) : null)),
        n = (0, B.bG)([nq.A], () => (e.length > 0 ? nq.A.getConfigs(e) : null));
    return (0, r.jsxs)(P.B, {
        gap: 8,
        children: [
            (0, r.jsx)(C.E, { variant: "text-md/semibold", color: "text-strong", children: "Fetch by Application ID" }),
            (0, r.jsx)(p.k, { placeholder: "Application ID", value: e, onChange: (e) => t(e) }),
            (0, r.jsx)(h.$, {
                variant: "primary",
                size: "sm",
                text: "Fetch",
                disabled: 0 === e.length,
                onClick: () => (0, nY.un)(e, { force: !0 }),
            }),
            null != a &&
                (0, r.jsxs)(C.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", a] }),
            null != n &&
                n.length > 0 &&
                (0, r.jsx)(P.B, { gap: 4, children: n.map((e) => (0, r.jsx)(nQ, { config: e }, e.config_id)) }),
        ],
    });
}
function n2(e) {
    let { configs: t, selectedConfigId: a, onSelectConfig: n } = e,
        l = (0, B.bG)([nq.A], () => nq.A.getFeaturedFetchState());
    return (0, r.jsxs)(P.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(C.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: ["All Loaded Configs (", t.length, ")"],
            }),
            l === nq.e.FETCHING &&
                (0, r.jsx)(C.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading..." }),
            t.map((e) =>
                (0, r.jsx)(
                    nX,
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
function n8(e) {
    let { config: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(al.c, {}),
            (0, r.jsxs)(P.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(C.E, { variant: "text-md/semibold", color: "text-strong", children: "Config Details" }),
                    (0, r.jsx)(nQ, { config: t }),
                ],
            }),
        ],
    });
}
function n3() {
    let [e, t] = o.useState(null),
        a = Object.values((0, B.bG)([nq.A], () => nq.A.getAllConfigsByApplication())).flat(),
        n = null != e ? a.find((t) => t.config_id === e) : null;
    return (0, r.jsx)(d.Ar, {
        children: (0, r.jsxs)(P.B, {
            gap: 16,
            padding: 8,
            className: nJ.zr,
            children: [
                (0, r.jsx)(G.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: "Application Widget Configs",
                }),
                (0, r.jsx)(nZ, {}),
                (0, r.jsx)(al.c, {}),
                (0, r.jsx)(n0, {}),
                (0, r.jsx)(al.c, {}),
                (0, r.jsx)(n1, {}),
                (0, r.jsx)(al.c, {}),
                (0, r.jsx)(n2, { configs: a, selectedConfigId: e, onSelectConfig: t }),
                null != n && (0, r.jsx)(n8, { config: n }),
            ],
        }),
    });
}
var n6 = a(636537),
    n5 = a(153488),
    n4 = a(927813);
let n9 = 12 * n4.A.Millis.HOUR,
    n7 = new Map(),
    le = !1,
    lt = Object.freeze({ channelAffinities: [], lastFetched: 0 }),
    la = { ...lt };
function ln() {
    n7 = new Map(la.channelAffinities.map((e) => [e.channelId, e]));
}
class ll extends B.Ay.PersistedStore {
    static displayName = "ChannelAffinitiesV2Store";
    static persistKey = "ChannelAffinitiesStoreV2";
    initialize(e) {
        null != e && ((la.channelAffinities = e.channelAffinities), (la.lastFetched = e.lastFetched), ln());
    }
    shouldFetch() {
        if (!le) return Date.now() - la.lastFetched > n9;
    }
    isFetching() {
        return le;
    }
    getChannelAffinities() {
        return la.channelAffinities;
    }
    getChannelAffinitiesMap() {
        return n7;
    }
    getChannelAffinity(e) {
        return n7.get(e);
    }
    compare(e, t) {
        return (n7.get(t)?.score ?? 0) - (n7.get(e)?.score ?? 0);
    }
    getState() {
        return la;
    }
}
let ls = new ll(tT.h, {
    LOAD_CHANNEL_AFFINITIES_V2: function () {
        le = !0;
    },
    LOAD_CHANNEL_AFFINITIES_V2_SUCCESS: function (e) {
        let { affineChannels: t } = e;
        (la.lastFetched = Date.now()), (le = !1), (la.channelAffinities = t), ln();
    },
    LOAD_CHANNEL_AFFINITIES_V2_FAILURE: function () {
        le = !1;
    },
    LOGOUT: function () {
        (la = { ...lt }), (n7 = new Map()), (le = !1);
    },
});
var li = a(907360);
let lr = [
    {
        key: "channel",
        cellClassName: li._w,
        render(e) {
            let { channelName: t } = e;
            return t;
        },
    },
    {
        key: "score",
        renderHeader: () => (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: "SCORE" }),
        cellClassName: li.t6,
        render(e) {
            let { score: t } = e;
            return t.toFixed(5);
        },
    },
];
function lo() {
    o.useEffect(() => {
        !(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            ls.shouldFetch() && n5.A.hasConsented(et.YAq.PERSONALIZATION)
                ? (tT.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2" }),
                  n6.Bo.get({
                      url: et.Rsh.CHANNEL_AFFINITIES_V2,
                      retries: 3 * !!e,
                      oldFormErrors: !0,
                      rejectWithError: !1,
                  }).then(
                      (e) => {
                          let { body: t } = e;
                          tT.h.dispatch({
                              type: "LOAD_CHANNEL_AFFINITIES_V2_SUCCESS",
                              affineChannels: t.channel_affinities.map((e) => ({
                                  channelId: e.channel_id,
                                  score: e.score ?? 0,
                              })),
                          });
                      },
                      () => {
                          tT.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2_FAILURE" });
                      },
                  ))
                : Promise.resolve();
        })();
    }, []);
    let e = (0, B.yK)([ls, ax.A], () =>
        ls
            .getChannelAffinities()
            .map((e) => {
                let { channelId: t, score: a } = e;
                return { key: t, channelName: ax.A.getChannel(t)?.name ?? t, score: a };
            })
            .sort((e, t) => t.score - e.score),
    );
    return 0 === e.length ? null : (0, r.jsx)(tL, { className: tM.nd, columns: lr, rowClassName: li.nM, data: e });
}
function ld() {
    return (0, r.jsxs)(C.E, {
        variant: "text-lg/normal",
        children: [
            "Under Construction",
            " ",
            (0, r.jsx)("span", { role: "img", "aria-label": "Construction", children: "\uD83D\uDEA7" }),
        ],
    });
}
var lc = a(105565),
    lu = a(558845),
    lm = a(193337);
let lh = (e) => {
        switch (e) {
            case lc.r.DC_DISMISSED:
                return "DISMISS:";
            case lc.r.DC_SHOWN:
                return "SHOW:";
            case lc.r.DC_SHOW_REQUEST:
                return "REQUEST TO SHOW:";
            default:
                return "UNKNOWN TYPE:";
        }
    },
    lx = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: a } = e;
                return `${t} ${an.M[a]}`;
            },
        },
    ],
    lp = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return `${an.M[t]}`;
            },
        },
    ];
function lg() {
    let e = (0, B.bG)([lc.A], () => lc.A.getDCFEvents()),
        t = (0, lu.Ay)((e) => e.candidates),
        a = (0, lu.Ay)((e) => e.lastWinnerTime),
        n = 0 !== a ? nx()(a).fromNow() : "n/a",
        l = (0, lu.Ay)((e) => (0 === e.lastWinnerTime ? null : e.recentlyShown[0])),
        s = e.map((e) => {
            let { eventType: t, dismissibleContent: a } = e;
            return { key: lh(t) + a.toString(), event: lh(t), dismissibleContent: a };
        }),
        i = Array.from(t.keys()).map((e) => ({ key: e.toString(), dismissibleContent: e }));
    return (0, r.jsxs)("div", {
        className: lm.KE,
        children: [
            (0, r.jsxs)("div", { className: lm.pq, children: ["Last winner time: ", n] }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("div", { className: lm.pq, children: ["Last winner: ", null != l ? an.M[l] : "None"] }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("div", {
                className: lm.uI,
                children: (0, r.jsx)(tL, { className: lm.Th, columns: lp, data: i }),
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)(tL, { columns: lx, data: s }),
        ],
    });
}
var lv = a(689175),
    lj = a(541689),
    lb = a(199773);
function lf() {
    let e = (0, o.useCallback)((e) => {
        let t = new Set(ly());
        t.delete(e);
        let a = Array.from(t).slice(0, 4);
        a.unshift(e), tD.w.set("RecentDismissibleOverrides", a);
    }, []);
    return [ly(), e];
}
function ly() {
    return tD.w.get("RecentDismissibleOverrides") ?? [];
}
a(667532);
var l_ = a(662546),
    lE = a(643278),
    lC = a(256787),
    lS = a(20439);
let lN = o.memo(function (e) {
    let { className: t, content: a, onChange: n } = e,
        l = an.M[a],
        { isDismissed: s, handleToggleDismissState: i } = (0, lS.A)(l),
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
            (0, r.jsxs)(P.B, {
                className: t,
                direction: "horizontal",
                align: "center",
                children: [
                    (0, r.jsx)(eO.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: d ? l_.O : lE.s,
                        onClick: m,
                        "aria-label": d ? "Copied" : "Copy",
                    }),
                    (0, r.jsx)(tI.d, {
                        label: `${a.toLowerCase()} (${an.M[a]})`,
                        description: (0, lC.Zm)(l)
                            ? (function (e) {
                                  let t = as.A.settings.userContent?.recurringDismissibleContentStates?.[e];
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
            (0, r.jsx)(al.c, {}),
        ],
    });
});
function lA(e) {
    let { items: t, onChange: a } = e,
        [n, l] = lf(),
        s = (0, o.useCallback)(
            (e) => {
                l(e), a?.(e);
            },
            [l, a],
        );
    return (0, r.jsx)(P.B, {
        gap: 16,
        children: t.filter((e) => isNaN(Number(e))).map((e) => (0, r.jsx)(lN, { content: e, onChange: s }, e)),
    });
}
function lk(e) {
    let { searchQuery: t = "" } = e,
        a = (0, lu.Ay)((e) => e.recentlyShown),
        [n, l] = lf(),
        s = n
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .filter((e) => !a.includes(an.M[e]))
            .slice(0, 3);
    return 0 === s.length
        ? null
        : (0, r.jsx)(u.n, { label: "Recent Overrides", children: (0, r.jsx)(lA, { items: s }) });
}
function lD(e) {
    let { searchQuery: t = "" } = e,
        a = (0, lu.Ay)((e) => e.recentlyShown)
            .map((e) => an.M[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .slice(0, 3);
    return 0 === a.length ? null : (0, r.jsx)(u.n, { label: "Recently Shown", children: (0, r.jsx)(lA, { items: a }) });
}
var lI = a(594061),
    lT = a(268571);
function lR() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: a,
        } = (0, B.cf)([lb.A], () => ({
            dailyCapReached: lb.A.hasUserHitDCCap(),
            dailyCapOverridden: lb.A.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: lb.A.newUserMinAgeRequiredOverridden,
        })),
        [n, l] = o.useState(""),
        [s, i] = o.useState(20),
        d = o.useMemo(
            () =>
                Object.keys(an.M)
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
    return (0, r.jsx)(lv.Ch, {
        onScroll: c,
        children: (0, r.jsxs)("div", {
            className: lT.KE,
            children: [
                (0, r.jsxs)(u.n, {
                    label: "Dismissible Content Overrides",
                    children: [
                        (0, r.jsxs)(P.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Reset Daily Cap",
                                    onClick: () => (0, lj.Ab)(),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Undismiss All DCs",
                                    onClick: () => (0, lI.nT)(),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Dismiss All DCs",
                                    onClick: () => (0, lI.D1)(),
                                }),
                                (0, r.jsx)(C.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: `Daily Cap Reached: ${e ? "Yes" : "No"}`,
                                }),
                            ],
                        }),
                        (0, r.jsx)(tI.d, {
                            label: "Override Dismissible Content Daily Cap",
                            checked: t,
                            onChange: lj.SE,
                        }),
                        (0, r.jsx)(tI.d, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: a,
                            onChange: lj.U$,
                        }),
                    ],
                }),
                (0, r.jsx)(lD, {}),
                (0, r.jsx)(lk, {}),
                (0, r.jsxs)(u.n, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, r.jsx)(nf.I, { query: n, onChange: l, onClear: () => l("") }),
                        (0, r.jsx)(lA, { items: d.slice(0, s) }),
                    ],
                }),
            ],
        }),
    });
}
var lO = a(276086),
    lw = a(154323),
    lM = a(155248);
function lL() {
    let e = (0, B.bG)([lw.A], () => lw.A.allWithDescriptions(), [], B.My),
        t = o.useMemo(
            () =>
                e.map((e) => {
                    let [t, a, n] = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                tI.d,
                                { label: n, description: t, checked: a, onChange: (e) => (0, lO.L)(t, e) },
                                t,
                            ),
                            (0, r.jsx)(al.c, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, r.jsxs)("div", {
        className: lM.kL,
        children: [
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: lM.x6,
                children: (0, r.jsx)(h.$, { variant: "primary", text: "Clear all", onClick: lO.$, fullWidth: !0 }),
            }),
            (0, r.jsx)("div", { className: lM.vu, children: t }),
        ],
    });
}
var lP = a(691540),
    lU = a(97483),
    lG = a(123292),
    lB = a(780907),
    lF = a(56562);
let lV = [
    { label: "Wuthering Waves", value: "1247227126416146462" },
    { label: "Marvel Rivals", value: "1314395942253756416" },
    { label: "VALORANT", value: "700136079562375258" },
    { label: "League of Legends", value: "1402418696126992445" },
];
function l$(e) {
    let { runningGame: t, isDebugGame: a } = e,
        { data: n } = (0, t9.I)(t.id);
    return (0, r.jsxs)(P.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            null != n && (0, r.jsx)(t5.A, { game: n }),
            (0, r.jsxs)(P.B, {
                justify: "center",
                gap: 0,
                children: [
                    (0, r.jsx)(C.E, { variant: "text-md/normal", children: n?.name }),
                    a && (0, r.jsx)(C.E, { variant: "text-xxs/normal", children: "Debug" }),
                ],
            }),
        ],
    });
}
function lW() {
    let e = (0, B.bG)([a8.Ay], () => a8.Ay.getRunningGames()),
        t = (0, B.bG)([a8.Ay], () => a8.Ay.getDebugRunningGame()),
        [a, n] = (0, o.useState)(t?.id ?? ""),
        l = (0, o.useMemo)(
            () =>
                lV.map((e) => {
                    let { label: t, value: a } = e;
                    return { label: t, value: a, id: a };
                }),
            [],
        ),
        s = (e) => {
            if (null == e || "" === e) return void (0, lB.xt)(null);
            let t = tG.A.getDetectableGame(e),
                a = t?.executables[0],
                n = t?.thirdPartySkus[0]?.distributor;
            if (null == t || null == a)
                return (0, lP.P0)({
                    id: "devtools-set-debug-game-error",
                    type: lU.Ck.FAILURE,
                    message: "Invalid Game ID",
                });
            (0, lB.xt)({
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
                fullscreenType: lF.aI.UNKNOWN,
                cmdLine: "",
                nativeProcessObserverId: -1,
            });
        };
    return (0, r.jsxs)(P.B, {
        gap: 32,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)(P.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(G.D, { variant: "heading-md/bold", children: "Running Games" }),
                    e.length > 0 &&
                        (0, r.jsx)("div", {
                            children: e.map((e) =>
                                (0, r.jsx)(l$, { runningGame: e, isDebugGame: t?.id === e.id }, e.id),
                            ),
                        }),
                ],
            }),
            (0, r.jsx)(al.c, {}),
            (0, r.jsxs)(P.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(G.D, { variant: "heading-md/bold", children: "Set Debug Running Game" }),
                    (0, r.jsx)(p.k, { label: "Custom Game ID", value: a, onChange: n }),
                    (0, r.jsx)(t6.Z, {
                        label: "Pick a Preset Game",
                        options: l,
                        value: t?.id ?? "",
                        onSelectionChange: (e) => {
                            s(e);
                        },
                        selectionMode: "single",
                        clearable: !0,
                    }),
                    (0, r.jsxs)(P.B, {
                        direction: "horizontal",
                        gap: 16,
                        justify: "end",
                        align: "end",
                        children: [
                            null != t &&
                                (0, r.jsx)(lG.Q, { variant: "secondary", text: "Clear", onClick: () => s(null) }),
                            (0, r.jsx)(h.$, { variant: "primary", text: "Detect Game", onClick: () => s(a) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lz = a(240248),
    lH = a(769195);
function lK() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        i = o.useCallback(async () => {
            try {
                t(!0), n(null), s(null);
                let e = await n6.Bo.put({
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
    return (0, r.jsxs)(P.B, {
        direction: "vertical",
        gap: 4,
        children: [
            (0, r.jsx)(h.$, { variant: "primary", onClick: i, text: "Reset Onboarding", disabled: e, fullWidth: !0 }),
            !(0, lz.uJ)(a) && (0, r.jsx)(C.E, { variant: "text-md/normal", color: "status-positive", children: a }),
            !(0, lz.uJ)(l) && (0, r.jsx)(C.E, { variant: "text-md/normal", color: "status-danger", children: l }),
        ],
    });
}
function lY() {
    return (0, r.jsx)("div", {
        className: lH.n,
        children: (0, r.jsx)(P.B, { direction: "vertical", gap: 16, children: (0, r.jsx)(lK, {}) }),
    });
}
a(172879);
var lq = a(985623),
    lJ = a.n(lq),
    lQ = a(990078),
    lX = a(874804),
    lZ = a(782134),
    l0 = a(113494),
    l1 = a(603349),
    l2 = a(155466);
function l8(e) {
    return parseFloat(e.toFixed(3));
}
let l3 = [
    {
        key: "store",
        cellClassName: l2.lA,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "time",
        cellClassName: l2.i7,
        render(e) {
            let { trace: t } = e;
            return `${l8(t.time)} ms`;
        },
    },
];
function l6(e) {
    let { actionLog: t } = e,
        a = o.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, r.jsx)(d.Ip, { children: (0, r.jsx)(tL, { columns: l3, data: a }) });
}
let l5 = [
    {
        id: "action",
        name: "Action",
        group: aQ.fu.NONE,
        render(e) {
            let { actionLog: t } = e,
                a = nx()(t.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(nL, {
                        className: l2.mP,
                        children: [
                            (0, r.jsx)(nP, {
                                name: "Created at",
                                children: (0, r.jsx)("time", {
                                    dateTime: t.createdAt?.toISOString(),
                                    title: (0, nS.i$)(a, "LLLL"),
                                    children: (0, nS.mk)(a),
                                }),
                            }),
                            (0, r.jsxs)(nP, { name: "Total Time", children: [l8(t.totalTime), " ms"] }),
                        ],
                    }),
                    (0, r.jsx)(d.Ip, { className: l2.Dx, children: (0, r.jsx)(aH, { data: t.action }) }),
                ],
            });
        },
    },
    {
        id: "traces",
        name: "Store Handlers",
        group: aQ.fu.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, r.jsx)(l6, { actionLog: t });
        },
    },
];
function l4(e) {
    let { actionLog: t, initialHeight: a } = e,
        n = o.useMemo(
            () =>
                t.error
                    ? [
                          ...l5,
                          {
                              id: "error",
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(l1.A, { className: l2.ik }), "Error"],
                              }),
                              group: aQ.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: w()(l2.u4, tM.KE),
                                              children: (0, r.jsx)("div", {
                                                  className: tM.R5,
                                                  children: (0, r.jsx)(np.$n, {
                                                      className: tM.Q$,
                                                      size: np.$n.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, r.jsx)(d.Ip, {
                                              className: l2.Dx,
                                              children: (0, r.jsx)(aH, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : l5,
            [t],
        ),
        { TabBar: l, renderSelectedTab: s } = (0, aQ.Ay)({ tabs: n }, [n]);
    return (0, r.jsxs)(aJ, {
        className: l2.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(aU.Ay, {
                className: w()(tM.jr, l2.nZ),
                children: [
                    (0, r.jsx)(aU.Ay.Icon, { icon: lX.K, tooltip: t.name }),
                    (0, r.jsx)(aU.Ay.Title, {
                        wrapperClassName: w()(tM.qd, tM.ZE),
                        className: tM.Pz,
                        children: t.name,
                    }),
                    (0, r.jsx)(aU.Ay.Icon, {
                        icon: ng.T,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let a = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, a) => {
                                    var n;
                                    return (t[a] = ((n = e[a]), et.AKn.test(n) ? "REDACTED" : n)), t;
                                }, {}),
                                null,
                                2,
                            );
                            (0, nC.C)(a, () =>
                                (0, lP.P0)({
                                    id: "copy-action-log-name",
                                    type: lU.Ck.SUCCESS,
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
let l9 = [
        {
            key: "action",
            cellClassName: l2.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.error && (0, r.jsx)(l1.A, { className: l2.ik }), t.name],
                });
            },
        },
        {
            key: "total time",
            cellClassName: l2.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${l8(t.totalTime)} ms`;
            },
        },
        {
            key: "timestamp",
            cellClassName: l2.i7,
            render(e) {
                let { actionLog: t } = e;
                return nx()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    l7 = {
        searchType: n_.n.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function se() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (function (e) {
            let [t, a] = o.useState(e.logs);
            return (
                o.useEffect(() => {
                    let t = lJ()(() => {
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
        })(tT.h.actionLogger),
        l = o.useMemo(() => n.map((e) => ({ key: e.id.toString(), actionLog: e })).toReversed(), [n]),
        [s, i] = o.useState(l),
        [d, c] = o.useState(l),
        [u, m] = o.useState(!1),
        [h, x] = o.useState(),
        p = o.useCallback((e) => {
            c(e);
        }, []);
    (0, nE.RT)(t, u ? s : l, p, l7);
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
        className: w()(tM.nd, l2.nd),
        children: [
            (0, r.jsxs)("div", {
                className: l2.KE,
                children: [
                    (0, r.jsx)(lQ.m, {
                        text: b,
                        children: (0, r.jsx)(eO.K, {
                            size: "sm",
                            variant: u ? "primary" : "active",
                            icon: u ? lZ.u : l0.E,
                            "aria-label": b,
                            onClick: () => g(!u),
                        }),
                    }),
                    (0, r.jsx)(nf.I, {
                        size: "sm",
                        query: t,
                        onChange: a,
                        onClear: () => a(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, r.jsx)(tL, {
                columns: l9,
                data: j,
                selectedRowKey: h?.id.toString(),
                onClickRow: (e) => x(e.actionLog),
            }),
            null != h &&
                (0, r.jsx)(l4, { actionLog: h, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
var st = a(936388),
    sa = a(132369);
function sn() {
    let e = o.useRef(null);
    return (0, r.jsx)("div", {
        ref: e,
        className: w()(tM.nd, sa.n),
        children: (0, r.jsx)(h.$, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: st.A.clearUploadedKeyVersions,
        }),
    });
}
var sl = a(825484),
    ss = a(37962),
    si = a(881520),
    sr = a(670455),
    so = a(861160);
let sd = [
    { id: "seconds", label: "second(s)", value: 1e3 },
    { id: "minutes", label: "minute(s)", value: 6e4 },
    { id: "hours", label: "hour(s)", value: 36e5 },
    { id: "days", label: "day(s)", value: 864e5 },
];
function sc() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(0),
        [l, s] = o.useState(1e3),
        [i, d] = o.useState(0),
        c = (0, B.bG)([si.A], () => (null === e ? null : (si.A.getFeedbackConfig(sr.MW[e]) ?? ss.u[sr.MW[e]]))),
        m = Object.entries(sr.MW),
        g = m.slice(m.length / 2).map((e) => {
            let [t] = e;
            return { id: t, label: t, value: t };
        }),
        v = o.useMemo(() => null != e && i >= 0 && i <= 100 && a >= 0, [e, i, a]);
    return (0, r.jsx)("div", {
        className: so.kL,
        children: (0, r.jsxs)(P.B, {
            gap: 32,
            children: [
                (0, r.jsx)(x.l, {
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
                        null != c &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: "Current cooldown" }),
                                    (0, r.jsx)(C.E, {
                                        variant: "text-sm/normal",
                                        children: `${c.cooldown / 1e3} second(s) or`,
                                    }),
                                    (0, r.jsx)(C.E, {
                                        variant: "text-sm/normal",
                                        children: `${c.cooldown / 6e4} minute(s) or`,
                                    }),
                                    (0, r.jsx)(C.E, {
                                        variant: "text-sm/normal",
                                        children: `${c.cooldown / 36e5} hour(s) or`,
                                    }),
                                    (0, r.jsx)(C.E, {
                                        variant: "text-sm/normal",
                                        children: `${c.cooldown / 864e5} day(s)`,
                                    }),
                                ],
                            }),
                        (0, r.jsxs)(P.B, {
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
                                    options: sd,
                                    value: l,
                                    onSelectionChange: s,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(al.c, {}),
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
                (0, r.jsxs)(sl.e, {
                    children: [
                        (0, r.jsx)(h.$, {
                            variant: "critical-primary",
                            text: "Clear Override",
                            onClick: () =>
                                void (
                                    null != c &&
                                    tT.h.dispatch({ type: "FEEDBACK_OVERRIDE_CLEAR", feedbackType: c.feedbackType })
                                ),
                            disabled: !v,
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Update",
                            onClick: () =>
                                void (
                                    null != c &&
                                    tT.h.dispatch({
                                        type: "FEEDBACK_OVERRIDE_SET",
                                        feedbackType: c.feedbackType,
                                        cooldown: a * l,
                                        chance: i / 100,
                                    })
                                ),
                            disabled: !v,
                        }),
                    ],
                }),
                null == e &&
                    (0, r.jsx)(C.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: need to select a survey",
                    }),
                !(a >= 0) &&
                    (0, r.jsx)(C.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: cooldown needs to be a number greater than 0",
                    }),
                !(i >= 0 && i <= 100) &&
                    (0, r.jsx)(C.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: chance needs to be a number between 0 and 100",
                    }),
                (0, r.jsx)(C.E, {
                    variant: "text-sm/normal",
                    children: "Clear override resets a feedback survey to its default values",
                }),
            ],
        }),
    });
}
var su = a(334279),
    sm = a(663417),
    sh = a(147925),
    sx = a(557009),
    sp = a(788868);
let sg = async () =>
        (
            await n6.Bo.get({
                url: et.Rsh.ENTITLEMENTS_FOR_APPLICATION(sp.tv),
                oldFormErrors: !0,
                query: { exclude_consumed: !0, exclude_ended: !0 },
                rejectWithError: !0,
            })
        ).body.map((e) => sx.A.createFromServer(e)),
    sv = async (e) => {
        await n6.Bo.post({
            url: "/debug/entitlements/fractional-premium",
            body: { count: 1, sku_id: e },
            rejectWithError: !1,
        });
    },
    sj = async (e) => {
        let t = "/debug/entitlements/fractional-premium";
        null != e && (t = `${t}/${e}`), await n6.Bo.del({ url: t, rejectWithError: !0 });
    },
    sb = async () => {
        await n6.Bo.post({ url: "/debug/entitlements/fulfillment", rejectWithError: !1 });
    },
    sf = () => {
        let [e, t] = o.useState([]),
            [a, n] = o.useState(!1),
            l = (0, o.useCallback)(async () => {
                try {
                    n(!0);
                    let e = await sg();
                    t(e);
                } finally {
                    n(!1);
                }
            }, []),
            s = (0, o.useCallback)(
                async (e) => {
                    await sv(e), await l();
                },
                [l],
            );
        return {
            grantFractionalPremium: s,
            deleteFractionalPremium: (0, o.useCallback)(
                async (e) => {
                    await sj(e), await l();
                },
                [l],
            ),
            triggerNextEntitlementFulfillment: (0, o.useCallback)(async () => {
                await sb(), await l();
            }, [l]),
            refreshEntitlementList: l,
            entitlements: e,
            loading: a,
        };
    };
var sy = a(51846),
    s_ = a(214868);
let sE = {
        [et.GD.QUEST_REWARD]: "Quest Reward",
        [et.GD.DEVELOPER_GIFT]: "Developer Gift",
        [et.GD.INVOICE]: "Invoice",
        [et.GD.REVERSE_TRIAL]: "Reverse Trial",
        [et.GD.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
        [et.GD.SUBSCRIPTION]: "Subscription",
        [et.GD.SUBSCRIPTION_MEMBER]: "Subscription Member",
    },
    sC = (e) => {
        let t,
            { entitlement: a, active: n, onDelete: l } = e,
            s = (e) => (null != e ? (0, nS.i$)(e, "LLL") : "---");
        return (0, r.jsxs)("div", {
            className: w()(sy.Nr, n ? s_.C1 : ""),
            children: [
                (0, r.jsxs)(C.E, { variant: "text-md/normal", children: ["ID: ", a.id, " "] }),
                !n &&
                    (0, r.jsxs)(C.E, {
                        variant: "text-md/normal",
                        children: ["SKU: ", sS.find((e) => e.value === a.skuId)?.label],
                    }),
                null != a.startsAt &&
                    null != a.endsAt &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(C.E, { variant: "text-md/normal", children: ["Start: ", s(a.startsAt), " "] }),
                            (0, r.jsxs)(C.E, { variant: "text-md/normal", children: ["End: ", s(a.endsAt), " "] }),
                        ],
                    }),
                (0, r.jsxs)(C.E, {
                    variant: "text-md/normal",
                    children: [
                        "Entitlement source type: ",
                        null != (t = a.sourceType) && t in sE ? sE[t] : `Unknown source type ${t}`,
                    ],
                }),
                n &&
                    null != l &&
                    (0, r.jsx)(np.$n, {
                        className: sy.RW,
                        size: np.$n.Sizes.TINY,
                        color: np.$n.Colors.RED,
                        look: np.$n.Looks.OUTLINED,
                        onClick: l,
                        children: "Delete",
                    }),
            ],
        });
    },
    sS = [
        { id: "1h", label: "1 hour", value: su.j.PREMIUM_TIER_2_1_HOUR },
        { id: "1d", label: "1 day", value: su.j.PREMIUM_TIER_2_1_DAY },
        { id: "3d", label: "3 days", value: su.j.PREMIUM_TIER_2_3_DAY },
    ];
function sN() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(su.j.PREMIUM_TIER_2_1_HOUR),
        [l, s] = o.useState([]),
        [i, c] = o.useState([]),
        {
            refreshEntitlementList: u,
            grantFractionalPremium: m,
            deleteFractionalPremium: p,
            triggerNextEntitlementFulfillment: g,
            entitlements: v,
            loading: j,
        } = sf();
    return (
        o.useEffect(() => {
            u();
        }, [u]),
        o.useEffect(() => {
            s(v.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === et.zF_.FRACTIONAL_REDEMPTION)),
                c(v.filter((e) => Object.values(su.j).includes(e.skuId) && null == e.startsAt));
        }, [v]),
        (0, r.jsx)(d.Ip, {
            className: tM.nd,
            children: (0, r.jsxs)("div", {
                className: s_.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: s_.dL,
                        children: [
                            (0, r.jsx)(C.E, {
                                style: { marginBottom: "8px" },
                                variant: "text-lg/bold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, r.jsxs)(M.D, {
                                onClick: () => t(!e),
                                className: sy.As,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Info" }),
                                    }),
                                    (0, r.jsx)(sh.A, { direction: e ? sh.A.Directions.UP : sh.A.Directions.DOWN }),
                                ],
                            }),
                        ],
                    }),
                    e &&
                        (0, r.jsxs)("div", {
                            style: { margin: "8px 0" },
                            children: [
                                (0, r.jsx)(C.E, {
                                    variant: "text-md/normal",
                                    style: { fontStyle: "italic" },
                                    color: "text-muted",
                                    children:
                                        "Subscriptions paused by Fractional Nitro do not automatically resume in local or staging environments. Subscription has to be resumed manually via Admin.",
                                }),
                                (0, r.jsx)("br", {}),
                                (0, r.jsx)(C.E, {
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
                        className: w()([sy.uW, s_.Uo]),
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Fractional Premium SKU",
                                value: a,
                                options: sS,
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
                        className: sy.uW,
                        children: [
                            (0, r.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: s_.dL,
                                children: [
                                    (0, r.jsx)(C.E, {
                                        style: { marginBottom: "8px" },
                                        variant: "text-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: sy.GC,
                                        children: [
                                            (0, r.jsx)(np.$n, {
                                                disabled: j,
                                                size: np.$n.Sizes.TINY,
                                                color: np.$n.Colors.PRIMARY,
                                                look: np.$n.Looks.OUTLINED,
                                                onClick: () => g(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, r.jsx)(np.$n, {
                                                disabled: j,
                                                size: np.$n.Sizes.TINY,
                                                color: np.$n.Colors.RED,
                                                look: np.$n.Looks.OUTLINED,
                                                onClick: () => p(),
                                                children: "Delete all",
                                            }),
                                            (0, r.jsx)(np.$n, {
                                                disabled: j,
                                                look: np.$n.Looks.BLANK,
                                                size: np.$n.Sizes.ICON,
                                                onClick: u,
                                                children: (0, r.jsx)("span", {
                                                    title: "Refresh",
                                                    children: (0, r.jsx)(sm.f, { size: "xs", color: "currentColor" }),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            l.length > 0 &&
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(C.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Active premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: l.map((e) =>
                                                (0, r.jsx)(
                                                    sC,
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
                                        (0, r.jsx)(C.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Unconsumed Fractional Premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: i.map((e) => (0, r.jsx)(sC, { entitlement: e }, e.id)),
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
var sA = a(390544),
    sk = a(396748),
    sD = a(522055),
    sI = a(661202);
function sT() {
    let e = (0, B.bG)([a9.A], () => a9.A.getGuildId()),
        t = (0, B.bG)([a4.A], () => a4.A.getGuild(e)?.name),
        a = (0, B.bG)([sD.A], () => sD.A.getStateForGuild(e)?.instances),
        n = o.useMemo(() => Object.values(a ?? {})[0], [a]),
        l = o.useCallback(
            (t) => {
                null != n &&
                    null != e &&
                    tT.h.dispatch({
                        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                        guildId: e,
                        instance: { ...n, status: t },
                    });
            },
            [n, e],
        ),
        s = o.useMemo(
            () =>
                Object.values(sA.M).map((e) =>
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
                tT.h.dispatch({
                    type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                    guildId: e,
                    instance: { ...n, serverIP: void 0, port: void 0, gameServerPanelUrl: void 0 },
                });
        }, [n, e]);
    return null == e
        ? null
        : (0, r.jsxs)(d.Ip, {
              className: sI.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: sI.uW,
                      children: (0, r.jsx)(G.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                  }),
                  (0, r.jsxs)("div", {
                      className: sI.uW,
                      children: [
                          (0, r.jsx)(C.E, {
                              variant: "eyebrow",
                              children: `Set server state for first server: ${n?.name}`,
                          }),
                          (0, r.jsx)("div", { className: sI.UD, children: s }),
                          (0, r.jsx)(C.E, { variant: "eyebrow", children: "Remove Server Info" }),
                          (0, r.jsx)("div", {
                              className: sI.UD,
                              children: (0, r.jsx)(h.$, {
                                  variant: "primary",
                                  text: "Remove IP Address & Game Server Panel URL",
                                  onClick: i,
                              }),
                          }),
                          (0, r.jsx)(C.E, { variant: "eyebrow", children: "Reset server" }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              text: "Reset",
                              onClick: () => {
                                  (0, sk.cq)(e);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
function sR(e, t) {
    let a = "boolean" == typeof t ? t : !aP.Ay.get(e);
    tT.h.dispatch({ type: "DEV_TOOLS_DEV_SETTING_SET", toggle: e, value: a });
}
var sO = a(460281);
function sw(e) {
    let { devSettingsCategory: t } = e,
        a = (0, B.bG)([aP.Ay], () => aP.Ay.allByCategory(t), [t], B.My),
        n = o.useMemo(
            () =>
                a.map((e) => {
                    let [t, a, { label: n }] = e;
                    return (0, r.jsx)(tI.d, { label: n, description: t, checked: a, onChange: (e) => sR(t, e) }, t);
                }),
            [a],
        );
    return (0, r.jsx)("div", { className: w()(tM.nd, sO.n), children: n });
}
var sM = a(950305),
    sL = a(231483),
    sP = a(597770),
    sU = a(433492),
    sG = a(695458),
    sB = a(796140),
    sF = a(268791),
    sV = a(836480),
    s$ = a(855473),
    sW = a(626258),
    sz = a(420854),
    sH = a(373846),
    sK = a(657044),
    sY = a(141060),
    sq = a(608599),
    sJ = a(685761),
    sQ = a(157225),
    sX = a(362704),
    sZ = a(625903),
    s0 = a(628284),
    s1 = a(320448),
    s2 = a(562708),
    s8 = a(830215),
    s3 = a(381689),
    s6 = a(889227),
    s5 = a(499785),
    s4 = a(315069);
class s9 extends s4.A {
    id;
    summary;
    userIds;
    password;
    constructor(e) {
        super(), (this.id = e.pool_id), (this.summary = e.summary), (this.userIds = e.user_ids);
    }
    static fromServer(e) {
        return new s9(e);
    }
    setPassword(e) {
        return (this.password = e), this;
    }
}
let s7 = { pools: null, users: null };
function ie(e) {
    null == s7.users && (s7.users = new Map()), s7.users.set(e.id, new s6.A(e));
}
class it extends B.Ay.PersistedStore {
    static displayName = "GeneratedTestUsersStore";
    static persistKey = "GeneratedTestUsersStore";
    initialize(e) {
        null != e &&
            (null != e.pools && (s7.pools = new Map(Object.entries(e.pools))),
            null != e.users && (s7.users = new Map(Object.entries(e.users))));
    }
    getState() {
        return {
            pools: null != s7.pools ? Object.fromEntries(s7.pools) : null,
            users: null != s7.users ? Object.fromEntries(s7.users) : null,
        };
    }
    getUsersForPool(e) {
        return Array.from(s7.users?.values() ?? []).filter((t) => s7.pools?.get(e)?.userIds.includes(t.id));
    }
    getPool(e) {
        return s7.pools?.get(e) ?? null;
    }
    getUser(e) {
        return s7.users?.get(e) ?? null;
    }
    getPools() {
        return null === s7.pools ? null : Array.from(s7.pools.values());
    }
}
let ia = new it(tT.h, {
    GENERATED_POOL_BY_ID_FETCH_SUCCESS: function (e) {
        let { pool: t, users: a } = e;
        null == s7.pools && (s7.pools = new Map()), s7.pools.set(t.id, t), a.forEach(ie);
    },
    GENERATED_POOL_REMOVE_FROM_LIST: function (e) {
        let { poolId: t } = e,
            a = s7.pools?.get(t);
        if (null == a) return !1;
        a.userIds.length > 0 &&
            a.userIds.forEach((e) => {
                s7.users?.delete(e);
            }),
            s7.pools?.delete(t);
    },
});
var il = a(835002);
async function is(e, t) {
    return await s5.A.get({
        url: et.Rsh.GENERATED_POOL_BY_ID(e),
        trackedActionData: { event: s2.NetworkActionNames.USER_LOGIN },
        rejectWithError: !1,
    })
        .then((e) => {
            let { ok: a, body: n } = e;
            if (!a) return void s3.A.showFailedToast(il.OB.GENERIC_ERROR);
            let { generated_pool: l, users: s } = n;
            tT.h.dispatch({
                type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                pool: s9.fromServer(l).setPassword(t),
                users: s.map((e) => new s6.A(e)),
            });
        })
        .catch(() => (s3.A.showFailedToast(il.OB.GENERIC_ERROR), null));
}
var ii = a(844330),
    ir = a(277851);
let io = [
        sM.n,
        sL.l,
        sP.o,
        sU.K,
        sG.m,
        sB.c,
        sF.$,
        sV.Q,
        s$.Z,
        sW.A,
        sz.E,
        sH.C,
        sK._,
        sY.i,
        sq.L,
        sJ.f,
        sQ.N,
        sX.Y,
        sZ.Z,
    ],
    id = [
        "text-default",
        "text-feedback-positive",
        "text-feedback-warning",
        "text-feedback-info",
        "text-feedback-critical",
    ],
    ic = () => {
        let [e, t] = o.useState(""),
            [a, n] = o.useState(""),
            [l, s] = o.useState(!1);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("form", {
                    onSubmit: async (l) => {
                        l.preventDefault(), s(!0);
                        try {
                            await is(e, a), t(""), n("");
                        } finally {
                            s(!1);
                        }
                    },
                    children: (0, r.jsxs)(P.B, {
                        direction: "vertical",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, r.jsxs)(P.B, {
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
                            (0, r.jsxs)(P.B, {
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
                (0, r.jsx)(al.c, { gap: 4 }),
            ],
        });
    },
    iu = (e) => {
        let { pool: t } = e,
            { id: a, summary: n } = t,
            l = ia.getUsersForPool(a),
            s = (0, B.bG)([nA.default], () => nA.default.getId()),
            i = io[Number(a) % io.length],
            d = id[Number(a) % id.length],
            c = o.useCallback(() => {
                tT.h.dispatch({ type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId: a });
            }, [a]);
        return (0, r.jsx)(P.B, {
            direction: "horizontal",
            align: "start",
            justify: "space-between",
            children: (0, r.jsx)(ii.A, {
                icon: (0, r.jsx)(C.E, {
                    variant: "text-md/medium",
                    color: d,
                    className: ir.td,
                    children: (0, r.jsx)(i, { size: "custom", width: 24, height: 24, color: "currentColor" }),
                }),
                title: n,
                className: ir.JC,
                subtitle: `${l.length} users`,
                children: (0, r.jsxs)(P.B, {
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
                                        0 !== a && (0, r.jsx)(al.c, { gap: 4 }),
                                        (0, r.jsx)(
                                            M.D,
                                            {
                                                onClick: (a) => {
                                                    a.stopPropagation(),
                                                        (function (e, t) {
                                                            let a = ia.getUser(t);
                                                            if (null == a) throw Error("User not found");
                                                            let n = ia.getPool(e)?.password;
                                                            if (null == n) throw Error("Pool password not found");
                                                            if (null == a.email) throw Error("User email not found");
                                                            s8.A.login({
                                                                login: a.email,
                                                                password: n,
                                                                isMultiAccount: !0,
                                                                source: "generated_test_user",
                                                            }).catch(
                                                                () => (s3.A.showFailedToast(il.OB.GENERIC_ERROR), null),
                                                            );
                                                        })(t.id, e.id);
                                                },
                                                "aria-disabled": s === e.id,
                                                className: w()(ir.vk, { [ir.Pe]: s === e.id }),
                                                children: (0, r.jsxs)(
                                                    P.B,
                                                    {
                                                        direction: "horizontal",
                                                        align: "center",
                                                        justify: "space-between",
                                                        gap: 8,
                                                        padding: { right: 8 },
                                                        fullWidth: !1,
                                                        children: [
                                                            (0, r.jsxs)(P.B, {
                                                                direction: "horizontal",
                                                                align: "center",
                                                                gap: 8,
                                                                fullWidth: !1,
                                                                className: w()({ [ir.WP]: s === e.id }),
                                                                children: [
                                                                    (0, r.jsx)(sM.n, {
                                                                        size: "custom",
                                                                        width: 20,
                                                                        height: 20,
                                                                        color: "currentColor",
                                                                    }),
                                                                    (0, r.jsxs)("div", {
                                                                        children: [
                                                                            (0, r.jsx)(C.E, {
                                                                                variant: "text-sm/normal",
                                                                                color: "text-default",
                                                                                children: e.username,
                                                                            }),
                                                                            (0, r.jsx)(C.E, {
                                                                                variant: "text-xs/normal",
                                                                                color: "text-muted",
                                                                                className: ir.c1,
                                                                                children: e.email,
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            s === e.id
                                                                ? (0, r.jsx)(C.E, {
                                                                      variant: "text-sm/normal",
                                                                      color: "text-feedback-positive",
                                                                      children: (0, r.jsx)(s0.y, {
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                                  })
                                                                : (0, r.jsx)(s1._, {
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
                            className: ir.UD,
                            children: (0, r.jsx)(h.$, {
                                icon: nb.u,
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
function im() {
    let e = (0, B.yK)([ia], () => ia.getPools() ?? []);
    return (0, r.jsxs)(P.B, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: ir.kL,
        children: [
            (0, r.jsx)(ic, {}),
            (0, r.jsx)(d.Ip, { className: ir.Ik, children: e?.map((e) => (0, r.jsx)(iu, { pool: e }, e.id)) }),
        ],
    });
}
var ih = a(582306),
    ix = a(528153),
    ip = a(275759),
    ig = a(888429);
function iv(e) {
    let t = new Date(e);
    return (
        t.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " " +
        t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 })
    );
}
function ij() {
    let e = (0, B.bG)([ip.Ay], () => ip.Ay.getDevToolTotalFriendAnniversaries()),
        t = (0, B.bG)([ip.Ay], () => ip.Ay.getDevToolCurrentDate()),
        a = (0, B.bG)([ip.Ay], () => ip.Ay.getGiftUnreadNotificationLastDismissedTimes()),
        n = (0, B.bG)([ip.Ay], () => ip.Ay.getMessageGiftIntentLastShownMap()),
        l = (0, B.bG)([ip.Ay], () => ip.Ay.getHighestAffinityFriendAnniversaries()),
        s = (0, B.bG)([ip.Ay], () => ip.Ay.getHighAffinityFriendAnniversaries()),
        i = (0, B.bG)([ip.Ay], () => ip.Ay.getProfilePopoutGiftIntentsDismissMap()),
        o = (0, B.bG)([as.A], () => {
            let e =
                as.A.settings.userContent?.recurringDismissibleContentStates[an.M.GIFT_INTENT_MESSAGE]
                    ?.lastDismissedAtMs;
            if (null == e || "0" === e) return null;
            let t = Number(e);
            return Number.isNaN(t) ? null : t;
        }),
        c = (e) => {
            tT.h.dispatch({ type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: e });
        },
        u = (e) => {
            let t = ns.A.getUserAffinity(e);
            return t?.dmProbability != null ? `${(100 * t.dmProbability).toFixed(3)}%` : "N/A";
        };
    return (0, r.jsx)(d.Ip, {
        className: tM.nd,
        children: (0, r.jsxs)("div", {
            className: ig.l$,
            children: [
                (0, r.jsx)(C.E, { className: ig.Iv, variant: "text-lg/bold", children: "Friend Anniversary" }),
                (0, r.jsx)("div", {
                    className: ig.Pm,
                    children: (0, r.jsxs)(P.B, {
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
                        className: ig.Pm,
                        children: (0, r.jsxs)(P.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(C.E, {
                                    variant: "text-xs/normal",
                                    children:
                                        "Affinity is the percent chance that User A will DM or GDM User B in the next 7 days.",
                                }),
                                (0, r.jsx)(C.E, {
                                    variant: "text-xs/normal",
                                    children:
                                        "The devtool automatically assigns users as high affinity regardless of actual affinity for testing.",
                                }),
                                l.length > 0 &&
                                    (0, r.jsxs)(P.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(C.E, {
                                                variant: "text-xs/semibold",
                                                children:
                                                    "Highest Affinity Friend Anniversaries (Eligible for Notification):",
                                            }),
                                            l.map((e) => {
                                                let t = Q.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, r.jsxs)(
                                                    C.E,
                                                    { variant: "text-xs/normal", children: [a, " (", u(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                                s.length > 0 &&
                                    (0, r.jsxs)(P.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(C.E, {
                                                variant: "text-xs/semibold",
                                                children: "High Affinity Friend Anniversaries:",
                                            }),
                                            s.map((e) => {
                                                let t = Q.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, r.jsxs)(
                                                    C.E,
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
                    className: ig.Pm,
                    children: (0, r.jsxs)(P.B, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, r.jsx)(ih.J, {
                                label: "Override current date used for cooldowns",
                                value: null != t ? nx()(t) : void 0,
                                onSelect: (e) => {
                                    let t = nx()(),
                                        a = e
                                            .clone()
                                            .hours(t.hours())
                                            .minutes(t.minutes())
                                            .seconds(t.seconds())
                                            .milliseconds(t.milliseconds());
                                    tT.h.dispatch({ type: "DEV_TOOLS_SET_CURRENT_DATE", date: a.valueOf() });
                                },
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Clear",
                                onClick: () => {
                                    tT.h.dispatch({ type: "DEV_TOOLS_RESET_CURRENT_DATE" });
                                },
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: ig.Pm,
                    children: (0, r.jsxs)(P.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(P.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(C.E, {
                                        variant: "text-md/normal",
                                        children: "Reset DCF gift intent cooldown (global, 24h)",
                                    }),
                                    (0, r.jsx)(h.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            (0, lI._N)(an.M.GIFT_INTENT_MESSAGE);
                                        },
                                    }),
                                ],
                            }),
                            (0, r.jsx)(C.E, {
                                variant: "text-xs/normal",
                                children: null != o ? `Dismissed at: ${iv(o)}` : "Not dismissed",
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: ig.Pm,
                    children: (0, r.jsxs)(P.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(P.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(C.E, {
                                        variant: "text-md/normal",
                                        children: "Reset gift message cooldown (per-user, 14d)",
                                    }),
                                    (0, r.jsx)(h.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            tT.h.dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(n).length > 0 &&
                                (0, r.jsxs)(P.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(C.E, {
                                            variant: "text-xs/semibold",
                                            children: "Gift Message Intent Last Shown:",
                                        }),
                                        Object.entries(n).map((e) => {
                                            let [t, a] = e,
                                                n = Q.default.getUser(t),
                                                l = n?.username ?? `Unknown User (${t})`;
                                            return (0, r.jsxs)(
                                                C.E,
                                                { variant: "text-xs/normal", children: [l, ": ", iv(a)] },
                                                t,
                                            );
                                        }),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: ig.Pm,
                    children: (0, r.jsxs)(P.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(P.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(C.E, {
                                        variant: "text-md/normal",
                                        children: "Reset gift notification cooldown",
                                    }),
                                    (0, r.jsx)(h.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            tT.h.dispatch({
                                                type: "DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET",
                                            });
                                        },
                                    }),
                                ],
                            }),
                            a.length > 0 &&
                                (0, r.jsxs)(P.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(C.E, {
                                            variant: "text-xs/semibold",
                                            children: "Gift notification shown timestamps:",
                                        }),
                                        a.map((e, t) =>
                                            (0, r.jsx)(C.E, { variant: "text-xs/normal", children: iv(e) }, t),
                                        ),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: ig.Pm,
                    children: [
                        (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Send gift notification" }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Send",
                            onClick: () => {
                                ix.A.sendGiftingNotificationIfEligible();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: ig.Pm,
                    children: [
                        (0, r.jsx)(C.E, {
                            variant: "text-md/normal",
                            children: "Clear last seen friend anniversaries in All Friends",
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Clear",
                            onClick: () => {
                                tT.h.dispatch({ type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: ig.Pm,
                    children: (0, r.jsxs)(P.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(P.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(C.E, {
                                        variant: "text-md/normal",
                                        children: "Reset profile popout gift intents dismiss",
                                    }),
                                    (0, r.jsx)(h.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            tT.h.dispatch({
                                                type: "DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET",
                                            });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(i).length > 0 &&
                                (0, r.jsxs)(P.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(C.E, {
                                            variant: "text-xs/semibold",
                                            children: "Profile Popout Gift Intents Dismissed:",
                                        }),
                                        Object.entries(i).map((e) => {
                                            let [t, a] = e,
                                                n = Q.default.getUser(t),
                                                l = n?.username ?? `Unknown User (${t})`;
                                            return (0, r.jsxs)(
                                                C.E,
                                                { variant: "text-xs/normal", children: [l, ": ", iv(a)] },
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
var ib = a(460890),
    iy = a(349288),
    i_ = a(517461),
    iE = a(214947),
    iC = a(403581),
    iS = a(34188);
let iN = [
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
var iA = a(545406);
let ik = [0, 0.5, 1],
    iD = ["Center", "Inner ring", "Outer ring"],
    iI = ik.length,
    iT = "ILLO_BLUE",
    iR = "ILLO_BLUE_40",
    iO = Array.from({ length: iI }, () => iR),
    iw = Array.from({ length: iI }, () => iT),
    iM = ["1", "0.5", "0"],
    iL = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i,
    iP = [
        { label: "Light", value: et.NJ8.LIGHT, id: et.NJ8.LIGHT },
        { label: "Dark", value: et.NJ8.DARK, id: et.NJ8.DARK },
        { label: "Darker", value: et.NJ8.DARKER, id: et.NJ8.DARKER },
        { label: "Midnight", value: et.NJ8.MIDNIGHT, id: et.NJ8.MIDNIGHT },
    ],
    iU = { [et.NJ8.MIDNIGHT]: et.NJ8.DARKER, [et.NJ8.DARKER]: et.NJ8.DARK, [et.NJ8.LIGHT]: et.NJ8.DARK },
    iG = { [et.NJ8.LIGHT]: "light", [et.NJ8.DARK]: "ash", [et.NJ8.DARKER]: "dark", [et.NJ8.MIDNIGHT]: "onyx" },
    iB = [
        { id: "friends", icon: iE.$, text: "Friends" },
        { id: "nitro", icon: iC.t, text: "Nitro Home", nitroHoverGradient: !0 },
        { id: "shop", icon: iS.U, text: "Shop", useCustomGradient: !0 },
    ],
    iF = iN.map((e) => ({ label: e, value: e, id: e })),
    iV = Object.fromEntries(
        iN.map((e) => [
            e,
            Object.keys(eL.A.unsafe_rawColors)
                .filter((t) => String(t).startsWith(e + "_"))
                .sort(
                    (e, t) =>
                        parseInt(String(e).split("_").pop() ?? "0", 10) -
                        parseInt(String(t).split("_").pop() ?? "0", 10),
                )
                .map((e) => {
                    let t = String(e).split("_").pop() ?? e,
                        [a, n, l] = eL.A.unsafe_rawColors[e].resolve().rgba(),
                        s =
                            (0.299 * a + 0.587 * n + 0.114 * l) / 255 > 0.5
                                ? eL.A.unsafe_rawColors.OPACITY_BLACK_28
                                : eL.A.unsafe_rawColors.OPACITY_WHITE_28,
                        i = (0, r.jsx)("span", {
                            className: iA.oP,
                            style: { background: `rgb(${a}, ${n}, ${l})`, border: `1px solid ${s.css}` },
                        });
                    return { label: t, value: e, id: String(e), leading: i };
                }),
        ]),
    );
var i$ = a(306327);
function iW(e, t, a) {
    return e.map((e, n) => (n === t ? a : e));
}
function iz(e, t) {
    let [a, n, l, s] = eL.A.unsafe_rawColors[e].resolve().rgba({ opacity: t });
    return { r: a, g: n, b: l, a: s };
}
function iH(e, t) {
    let a = eL.A.unsafe_rawColors[e].resolve();
    return null != t ? a.hex({ opacity: t }) : a.hex();
}
function iK(e) {
    let { yaml: t, label: a } = e,
        n = o.useCallback(() => {
            navigator.clipboard.writeText(t);
        }, [t]);
    return (0, r.jsxs)(P.B, {
        gap: 4,
        children: [
            (0, r.jsxs)(P.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                justify: "space-between",
                children: [
                    (0, r.jsx)(C.E, { variant: "text-md/semibold", children: a }),
                    (0, r.jsx)(eO.K, {
                        icon: ng.T,
                        "aria-label": `Copy ${a} YAML`,
                        onClick: n,
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            (0, r.jsx)("pre", { className: iA.RP, children: t }),
        ],
    });
}
function iY(e) {
    let { allResolvedStops: t } = e,
        a = o.useMemo(
            () =>
                iD.map((e, a) => {
                    let n;
                    return (
                        (n = iP
                            .map((e) => {
                                let n,
                                    l,
                                    { value: s } = e,
                                    i = iG[s],
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
    return (0, r.jsxs)(P.B, {
        gap: 16,
        children: [
            (0, r.jsx)(G.D, { variant: "heading-sm/semibold", children: "Token YAML" }),
            iD.map((e, t) => (0, r.jsx)(iK, { yaml: a[t], label: e }, e)),
        ],
    });
}
function iq(e, t, a) {
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
    return new i$.A("srgb", [
        (e.r * (1 - r) + n * r) / 255,
        (e.g * (1 - r) + l * r) / 255,
        (e.b * (1 - r) + s * r) / 255,
    ]);
}
function iJ(e, t, a) {
    let n = a.map((e) => {
            let [t, a, n] = eL.A.unsafe_rawColors[e.color].resolve().rgba();
            return { r: t, g: a, b: n, opacity: e.opacity, position: e.position };
        }),
        l = 1 / 0,
        s = (e) => {
            e < l && (l = e);
        };
    for (let a of n) s(e.contrast(iq(t, n, a.position), "WCAG21"));
    for (let a = 0; a < n.length - 1; a++) {
        let { contrast: l } = (function (e, t, a, n, l) {
            let s = 1 / 0,
                i = n;
            for (let r = 0; r <= 100; r++) {
                let o = n + (r / 100) * (l - n),
                    d = a.contrast(iq(e, t, o), "WCAG21");
                d < s && ((s = d), (i = o));
            }
            return { contrast: s, position: i };
        })(t, n, e, n[a].position, n[a + 1].position);
        s(l);
    }
    return Math.round(100 * l) / 100;
}
function iQ(e) {
    let [t, a, n] = eL.A.colors.TEXT_DEFAULT.resolve(e).rgba(),
        [l, s, i] = eL.A.colors.BACKGROUND_BASE_LOWEST.resolve(e).rgba(),
        [r, o, d, c] = eL.A.colors.INTERACTIVE_BACKGROUND_HOVER.resolve(e).rgba();
    return {
        text: new i$.A("srgb", [t / 255, a / 255, n / 255]),
        background: { r: l * (1 - c) + r * c, g: s * (1 - c) + o * c, b: i * (1 - c) + d * c },
    };
}
function iX() {
    return {
        colors: Array.from({ length: iI }, () => void 0),
        scales: Array.from({ length: iI }, () => void 0),
        opacities: Array.from({ length: iI }, () => void 0),
    };
}
function iZ() {
    return {
        [et.NJ8.LIGHT]: iX(),
        [et.NJ8.DARK]: { colors: [...iO], scales: [...iw], opacities: [...iM] },
        [et.NJ8.DARKER]: iX(),
        [et.NJ8.MIDNIGHT]: iX(),
    };
}
function i0() {
    let e = (0, ib.G9)(),
        [t, a] = o.useState(et.NJ8.DARK),
        [n, l] = (0, i_.V)("DevToolsGradientContrastPanel_themeStops", iZ()),
        s = n ?? iZ(),
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
                        (0, r.jsxs)(P.B, {
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
                                              (0, r.jsx)(C.E, { variant: "text-sm/normal", children: e.name }),
                                              (0, r.jsx)(lG.Q, {
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
                    iP.map((e) => {
                        let { value: t } = e;
                        return [
                            t,
                            (function (e, t) {
                                let a = [],
                                    n = [],
                                    l = [];
                                for (let s = 0; s < iI; s++) {
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
                                        d = iU[d];
                                    }
                                    a.push(i ?? iO[s]), n.push(r ?? iw[s]), l.push(o ?? iM[s]);
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
        _ = o.useMemo(() => iQ({ theme: t, saturation: 1 }), [t]),
        E = o.useMemo(() => {
            let e = [];
            for (let t = 0; t < iI; t++) {
                let a = parseFloat(f.opacities[t]);
                if (isNaN(a) || a < 0 || a > 1) return null;
                e.push({ color: f.colors[t], opacity: a, position: ik[t] });
            }
            return e;
        }, [f]),
        S = o.useMemo(() => {
            if (null == E) return null;
            let { text: e, background: t } = _;
            return iD.map((a, n) =>
                iV[f.scales[n]].map((a) => {
                    let l = iJ(e, t, iW(E, n, { ...E[n], color: a.value }));
                    return { ...a, trailing: `(${l}:1)` };
                }),
            );
        }, [E, _, f.scales]),
        N = o.useMemo(() => {
            try {
                return iP.map((e) => {
                    let { value: t, label: a } = e,
                        n = b[t],
                        l = [];
                    for (let e = 0; e < iI; e++) {
                        let s = parseFloat(n.opacities[e]);
                        if (isNaN(s) || s < 0 || s > 1) return { theme: t, label: a, result: null };
                        l.push({ color: n.colors[e], opacity: s, position: ik[e] });
                    }
                    return {
                        theme: t,
                        label: a,
                        result: (function (e, t) {
                            let a,
                                { text: n, background: l } = iQ(t),
                                s = iJ(n, l, e),
                                i = s >= 4.5;
                            if (!i)
                                for (let t = 0; t < e.length; t++) {
                                    let s = (function (e) {
                                        let t = String(e).match(/^(.+)_\d+$/);
                                        if (null == t) return null;
                                        let a = t[1];
                                        return iN.includes(a) ? a : null;
                                    })(e[t].color);
                                    if (null == s) continue;
                                    let i = parseInt(String(e[t].color).split("_").pop() ?? "0", 10),
                                        r = 1 / 0;
                                    for (let { value: o } of iV[s]) {
                                        if (o === e[t].color) continue;
                                        let s = iJ(n, l, iW(e, t, { ...e[t], color: o }));
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
        className: iA.XG,
        children: (0, r.jsxs)(P.B, {
            gap: 24,
            padding: 8,
            className: iA.zr,
            children: [
                (0, r.jsx)(G.D, {
                    variant: "heading-lg/medium",
                    children: "Tab Hover Gradient Token Generator & Contrast Checker",
                }),
                (0, r.jsxs)(P.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(C.E, {
                            variant: "text-md/normal",
                            children:
                                "Checks that tab hover gradients pass WCAG AA (4.5:1) contrast against the text in the tab, accounting for opacities and hover states.",
                        }),
                        (0, r.jsx)(C.E, {
                            variant: "text-sm/normal",
                            children:
                                "Pick colors for each gradient stop (center, inner ring, outer ring) per theme. Each color in the dropdown will show the minimum contrast ratio for the gradient if the color were selected. Dark-family themes inherit: values set on Dark cascade to Darker and Midnight unless overridden.",
                        }),
                        (0, r.jsx)(C.E, {
                            variant: "text-sm/normal",
                            children:
                                "Use the hex field to paste in a hex color \u2014 it will snap to the closest allowed token and show the deltaE distance.",
                        }),
                        (0, r.jsxs)(C.E, {
                            variant: "text-sm/normal",
                            children: [
                                "Copy the generated YAML at the bottom to create your token definitions to be used by the",
                                " ",
                                (0, r.jsx)(iy.Anchor, {
                                    href: "https://design.discord.tools/foundations/color/token-pipeline",
                                    children: "token pipeline",
                                }),
                                ".",
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(t6.Z, {
                    selectionMode: "single",
                    label: "Theme",
                    value: t,
                    onSelectionChange: (e) => a(e),
                    closeOnSelect: !0,
                    options: iP,
                }),
                (0, r.jsxs)(P.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(G.D, { variant: "heading-sm/semibold", children: "Gradient Stops" }),
                        (0, r.jsx)("div", {
                            className: iA.G9,
                            children: iD.map((e, t) => {
                                let a = "" !== i[t];
                                return (0, r.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            (0, r.jsxs)(P.B, {
                                                gap: 0,
                                                className: iA.hi,
                                                children: [
                                                    (0, r.jsx)(C.E, { variant: "text-md/medium", children: e }),
                                                    (0, r.jsx)(lG.Q, {
                                                        variant: "secondary",
                                                        textVariant: "text-xs/normal",
                                                        text: `(${iH(f.colors[t], parseFloat(f.opacities[t]))})`,
                                                        onClick: () =>
                                                            navigator.clipboard.writeText(
                                                                iH(f.colors[t], parseFloat(f.opacities[t])),
                                                            ),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(t6.Z, {
                                                selectionMode: "single",
                                                label: "Scale",
                                                disabled: a,
                                                value: f.scales[t],
                                                onSelectionChange: (e) => {
                                                    let a = iV[e][0]?.value;
                                                    y((n) => ({
                                                        ...n,
                                                        scales: iW(n.scales, t, e),
                                                        colors: null != a ? iW(n.colors, t, a) : n.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: iF,
                                            }),
                                            (0, r.jsx)(t6.Z, {
                                                selectionMode: "single",
                                                label: "Value",
                                                disabled: a,
                                                value: f.colors[t],
                                                onSelectionChange: (e) =>
                                                    y((a) => ({ ...a, colors: iW(a.colors, t, e) })),
                                                closeOnSelect: !0,
                                                options: S?.[t] ?? iV[f.scales[t]],
                                            }),
                                            (0, r.jsx)(p.k, {
                                                label: "Opacity",
                                                name: `opacity-${t}`,
                                                value: f.opacities[t],
                                                onChange: (e) => y((a) => ({ ...a, opacities: iW(a.opacities, t, e) })),
                                                placeholder: "0\u20131",
                                            }),
                                            (0, r.jsx)(p.k, {
                                                label: `Hex${a && null != u[t] ? ` (dE: ${u[t]})` : ""}`,
                                                name: `hex-${t}`,
                                                value: i[t],
                                                onChange: (e) => {
                                                    c((a) => iW(a, t, e));
                                                    let a = (function (e) {
                                                        if (!iL.test(e)) return null;
                                                        try {
                                                            return new i$.A(e.startsWith("#") ? e : `#${e}`);
                                                        } catch {
                                                            return null;
                                                        }
                                                    })(e);
                                                    if (null != a) {
                                                        let e = (function (e) {
                                                            let t = iR,
                                                                a = iT,
                                                                n = 1 / 0;
                                                            for (let l of iN)
                                                                for (let s of iV[l]) {
                                                                    let i = e.deltaE(
                                                                        (function (e) {
                                                                            let [t, a, n] = eL.A.unsafe_rawColors[e]
                                                                                .resolve()
                                                                                .rgba();
                                                                            return new i$.A("srgb", [
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
                                                        m((a) => iW(a, t, e.deltaE)),
                                                            y((a) => ({
                                                                ...a,
                                                                scales: iW(a.scales, t, e.scale),
                                                                colors: iW(a.colors, t, e.color),
                                                            }));
                                                    } else m((e) => iW(e, t, null));
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
                (0, r.jsx)(G.D, { variant: "heading-sm/semibold", children: "Preview" }),
                (0, r.jsx)(ib.GE, {
                    value: { ...e, theme: t },
                    children: (0, r.jsx)(eM.N, {
                        theme: t,
                        children: (e) =>
                            (0, r.jsx)("div", {
                                className: e,
                                children: (0, r.jsx)(P.B, {
                                    gap: 16,
                                    children: (0, r.jsx)("ul", {
                                        className: iA.$8,
                                        style: { background: eL.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: iB.map((e, t) =>
                                            (0, r.jsx)(
                                                ed.z9,
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
                                                        hoverGradientStart: iz(f.colors[0], parseFloat(f.opacities[0])),
                                                        hoverGradientMiddle: iz(
                                                            f.colors[1],
                                                            parseFloat(f.opacities[1]),
                                                        ),
                                                        hoverGradientEnd: iz(f.colors[2], parseFloat(f.opacities[2])),
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
                    (0, r.jsxs)(P.B, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(G.D, { variant: "heading-sm/semibold", children: "Results" }),
                            N.map((e) => {
                                let { theme: t, label: a, result: n } = e;
                                return null != n
                                    ? (0, r.jsxs)(
                                          P.B,
                                          {
                                              gap: 8,
                                              children: [
                                                  (0, r.jsx)(C.E, { variant: "text-md/semibold", children: a }),
                                                  (0, r.jsxs)(L.w, {
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
                                                      (0, r.jsxs)(P.B, {
                                                          gap: 4,
                                                          children: [
                                                              (0, r.jsx)(C.E, {
                                                                  variant: "text-sm/semibold",
                                                                  children: "Suggestion:",
                                                              }),
                                                              (0, r.jsxs)(C.E, {
                                                                  variant: "text-sm/normal",
                                                                  children: [
                                                                      iD[n.suggestion.stopIndex],
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
                                                      (0, r.jsx)(C.E, {
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
                (0, r.jsx)(iY, { allResolvedStops: b }),
            ],
        }),
    });
}
var i1 = a(820739),
    i2 = a(230135),
    i8 = a(45780),
    i3 = a(868652),
    i6 = a(859241);
let i5 = [
        an.M.GUILD_POWERUP_PERKS_COACHMARK,
        an.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        an.M.GUILD_POWERUP_NOTIFICATION,
        an.M.GUILD_TAG_AVAILABLE_COACHMARK,
        an.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
    ],
    i4 = [
        an.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        an.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        an.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        an.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
        an.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
    ],
    i9 = [an.V.ADOPT_CLAN_IDENTITY_NOTICE],
    i7 = [
        an.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        an.M.VANITY_URL_POWERUP_ROLLBACK_MODAL,
        an.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
    ];
function re(e) {
    switch (e) {
        case an.V.GUILD_POWERUP_LEVEL_1_COACHMARK:
            return "GUILD_POWERUP_LEVEL_1_COACHMARK";
        case an.V.GUILD_POWERUP_LEVEL_2_COACHMARK:
            return "GUILD_POWERUP_LEVEL_2_COACHMARK";
        case an.V.GUILD_POWERUP_LEVEL_3_COACHMARK:
            return "GUILD_POWERUP_LEVEL_3_COACHMARK";
        case an.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK";
        case an.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK";
        case an.V.ADOPT_CLAN_IDENTITY_NOTICE:
            return "ADOPT_CLAN_IDENTITY_NOTICE";
        default:
            return String(e);
    }
}
var rt = a(861671);
async function ra(e, t, a) {
    await n6.Bo.patch({
        url: et.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
        body: { applied_boost_ids: t.map((e) => e.id), ends_at: a ? null : nx()().add(1, "day") },
        rejectWithError: !0,
    }),
        (0, i1.VU)(e),
        (0, i3.Xd)(e, !0);
}
async function rn(e) {
    await n6.Bo.post({ url: et.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e), rejectWithError: !0 });
}
function rl() {
    let e = (0, B.bG)([a9.A], () => a9.A.getGuildId()),
        t = (0, B.bG)([a4.A], () => a4.A.getGuild(e)?.name),
        a = (0, B.yK)([as.A], () => [...i4, ...i9].filter((t) => null != e && (0, i8.zs)(t, e))),
        n = (0, B.yK)([i6.A], () => (null != e ? (i6.A.getAppliedGuildBoostsForGuild(e) ?? []) : []));
    if (null != e)
        return (0, r.jsxs)(d.Ip, {
            className: rt.kL,
            children: [
                (0, r.jsx)("div", {
                    className: rt.uW,
                    children: (0, r.jsx)(G.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                }),
                (0, r.jsxs)("div", {
                    className: rt.uW,
                    children: [
                        (0, r.jsx)(C.E, {
                            variant: "eyebrow",
                            className: rt.wx,
                            children: "Reset Notification Indicators",
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Reset",
                            onClick: () => {
                                (0, i3.qM)();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: rt.uW,
                    children: [
                        (0, r.jsx)(C.E, { variant: "eyebrow", className: rt.wx, children: "Reset Progress Bar State" }),
                        (0, r.jsx)(h.$, { variant: "primary", text: "Reset", onClick: i2.O }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: rt.uW,
                    children: [
                        (0, r.jsx)(C.E, { variant: "eyebrow", children: "Set Warning State" }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Set Half Boosts expiring in 1 day",
                                    onClick: () => {
                                        ra(e, n.slice(Math.floor(n.length / 2)), !1);
                                    },
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        ra(e, n, !0);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: rt.uW,
                    children: [
                        (0, r.jsx)(C.E, { variant: "eyebrow", className: rt.wx, children: "Reset User Level DCs" }),
                        (0, r.jsx)(P.B, {
                            gap: 16,
                            children: i5.map((e) => (0, r.jsx)(lN, { className: rt.z6, content: an.M[e] }, an.M[e])),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: rt.uW,
                    children: (0, r.jsx)(u.n, {
                        label: "Reset Guild Level DCs",
                        children: i4.map((t) =>
                            (0, r.jsx)(
                                tI.d,
                                {
                                    label: re(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, i8._$)(t, e, !1)
                                            : ((0, lI._N)(an.M.GUILD_POWERUP_NOTIFICATION), (0, i8.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: rt.uW,
                    children: (0, r.jsx)(u.n, {
                        label: "Reset Server Tag Guild Level DCs",
                        children: i9.map((t) =>
                            (0, r.jsx)(
                                tI.d,
                                {
                                    label: re(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, i8._$)(t, e, !1)
                                            : ((0, lI._N)(an.M.GUILD_POWERUP_NOTIFICATION), (0, i8.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: rt.uW,
                    children: [
                        (0, r.jsx)(C.E, {
                            variant: "eyebrow",
                            className: rt.wx,
                            children: "Reset Powerup Rollback DCs",
                        }),
                        i7.map((e) => (0, r.jsx)(lN, { className: rt.z6, content: an.M[e] }, an.M[e])),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: rt.uW,
                    children: [
                        (0, r.jsx)(C.E, {
                            variant: "eyebrow",
                            className: rt.wx,
                            children: "Send Powerups System Message",
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                rn(e);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(h.$, {
                    variant: "primary",
                    text: "Reset GameServer ToS",
                    onClick: () => {
                        (0, sk.Wp)(!1);
                    },
                }),
            ],
        });
}
var rs = a(450510),
    ri = a(320681);
function rr(e) {
    let { hotspotLocation: t } = e,
        [a, n] = (0, B.yK)([rs.HP], () => [rs.HP.hasHotspot(t, !0), rs.HP.getHotspotOverride(t)]);
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
        onSelectionChange: (e) => (null != e ? (0, rs.Kl)(t, e) : (0, rs.LF)(t)),
        selectionMode: "single",
        fullWidth: !0,
    });
}
function ro() {
    return (0, r.jsx)(d.Ip, {
        className: tM.nd,
        children: (0, r.jsx)(u.n, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: ri.IN,
            children: (0, r.jsx)(P.B, {
                gap: 20,
                children: Object.keys(rs._2)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, r.jsx)(rr, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
var rd = a(919523),
    rc = a(855522),
    ru = a(37646),
    rm = a(773669);
function rh() {
    let e = (0, B.bG)([rm.default], () => rm.default.locale),
        [t, a] = o.useState(),
        n = (0, rd.runtimeHashMessageKey)(t ?? ""),
        l = o.useMemo(() => nt.t[n], [n]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(aU.Ay, {
                children: [
                    (0, r.jsx)(aU.Ay.Icon, { icon: ru.U, tooltip: "Locale" }),
                    (0, r.jsx)(aU.Ay.Title, { children: "Locale" }),
                ],
            }),
            (0, r.jsxs)(nL, {
                children: [
                    (0, r.jsx)(nP, { name: "Active System", children: "@discord/intl" }),
                    (0, r.jsx)(nP, { name: "App", children: e }),
                    (0, r.jsx)(nP, { name: "System", children: nt.systemLocale }),
                    (0, r.jsx)(nP, { name: "@discord/intl", children: nt.intl.currentLocale }),
                    (0, r.jsx)(nP, { name: "common i18n", children: rc.A.getLocale() }),
                    (0, r.jsx)(nP, { name: "Moment", children: nx().locale() }),
                ],
            }),
            (0, r.jsxs)(aU.Ay, {
                children: [
                    (0, r.jsx)(aU.Ay.Icon, { icon: ru.U, tooltip: "Messages" }),
                    (0, r.jsx)(aU.Ay.Title, { children: "New System Messages" }),
                ],
            }),
            (0, r.jsx)(nL, {
                children: (0, r.jsx)(nP, { name: "Unique Rendered Main Messages", children: Object.keys(nt.t).length }),
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
            (0, r.jsxs)(nL, {
                children: [
                    (0, r.jsx)(nP, { name: "Hashed key", children: n }),
                    (0, r.jsx)(nP, { name: "Exists?", children: null != l ? "yes" : "no" }),
                ],
            }),
            (0, r.jsx)(aH, { data: l?.(e) }),
        ],
    });
}
var rx = a(434404);
function rp() {
    let { node: e } = (0, q.Ay)(rx.F, "");
    return (0, r.jsx)(d.Ip, {
        className: tM.nd,
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-8)" },
            children: (0, r.jsx)(Y.A, { node: e }, e.key),
        }),
    });
}
var rg = a(663066),
    rv = a(80556),
    rj = a(907135),
    rb = a(665095),
    rf = a(87404);
function ry() {
    return (0, r.jsx)(d.Ip, {
        className: tM.nd,
        children: (0, r.jsxs)("div", {
            className: s_.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: s_.uW,
                    children: [
                        (0, r.jsx)(G.D, { variant: "heading-md/semibold", children: "Verification Layer" }),
                        (0, r.jsx)("div", {
                            className: s_.bd,
                            children: (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open Verification Layer",
                                onClick: () => {
                                    (0, rg.B8)(() => (0, r.jsx)(rb.A, {}), { layerKey: rf._s, Layer: rv.Ay });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: s_.uW,
                    children: [
                        (0, r.jsx)(G.D, { variant: "heading-md/semibold", children: "Safety Flow" }),
                        (0, r.jsx)("div", {
                            className: s_.bd,
                            children: (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open Safety Flow",
                                onClick: () => {
                                    (0, rg.B8)(
                                        (e) => {
                                            let { closeLayer: t } = e;
                                            return (0, r.jsx)(rj.A, { onClose: t });
                                        },
                                        { layerKey: rf._s, Layer: rv.Ay },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: s_.uW,
                    children: [
                        (0, r.jsx)(G.D, { variant: "heading-md/semibold", children: "Layer Controls" }),
                        (0, r.jsx)("div", {
                            className: s_.bd,
                            children: (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Close All Layers",
                                onClick: () => {
                                    rg.xr.setState({ fullScreenLayers: [] });
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var r_ = a(687813),
    rE = a(604121);
let rC = {
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
        () => a.e("94131").then(a.t.bind(a, 676574, 17)),
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
        () => a.e("10803").then(a.t.bind(a, 805489, 19)),
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
        a.e("73550").then(a.t.bind(a, 527613, 19)),
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
        a.e("80467").then(a.t.bind(a, 661022, 19)),
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
function rS(e) {
    let { default: t } = e;
    return fetch(t)
        .then((e) => e.arrayBuffer())
        .then(
            (e) =>
                new Promise((t, a) => {
                    let n = new Uint8Array(e);
                    r_.$1(n, (e, n) => {
                        null != e && a(e);
                        let l = Object.keys(n).reduce((e, t) => ({ ...e, [t]: JSON.parse(r_.he(n[t])) }), {}),
                            s = l["manifest.json"];
                        t(l[`animations/${s.animations[0].id}.json`]);
                    });
                }),
        );
}
function rN() {
    let [e, t] = o.useState(void 0),
        [a, n] = o.useState(400),
        [l, s] = o.useState(400);
    return (0, r.jsx)("div", {
        style: { margin: 24 },
        children: (0, r.jsxs)(P.B, {
            gap: 24,
            children: [
                (0, r.jsx)(t6.Z, {
                    options: Object.keys(rC).map((e) => ({ id: e, label: e, value: e })),
                    value: e,
                    onSelectionChange: t,
                    selectionMode: "single",
                }),
                (0, r.jsxs)(P.B, {
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
                        let t = rC[e],
                            a = new Blob(
                                [
                                    JSON.stringify(
                                        e.endsWith(".lottie")
                                            ? await t().then(rS).then(eV().cloneDeep)
                                            : await t().then((e) => eV().cloneDeep(e.default)),
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
                            rE.a,
                            {
                                importData: () => {
                                    let t = rC[e];
                                    return e.endsWith(".lottie")
                                        ? t().then(rS).then(eV().cloneDeep)
                                        : t().then((e) => eV().cloneDeep(e.default));
                                },
                            },
                            e,
                        ),
                    }),
            ],
        }),
    });
}
var rA = a(442433),
    rk = a(395671);
let rD = {
        ClipsContextMenu: async () => {
            let { default: e } = await a.e("40638").then(a.bind(a, 562733));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        ActivityPopoutHeaderOverflowMenu: async () => {
            let { default: e } = await a.e("32986").then(a.bind(a, 728033)),
                t = new rk.kJ({
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
            return () => (0, r.jsx)(e, { application: t, channelId: "987654321", onClose: rA.Z_ });
        },
        GuildChannelListContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("9004"), a.e("19690"), a.e("45322"), a.e("10758")]).then(
                    a.bind(a, 455557),
                ),
                t = Object.values(a4.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
        },
        GuildContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e("57181"),
                    a.e("71541"),
                    a.e("50671"),
                    a.e("39528"),
                    a.e("96165"),
                    a.e("7468"),
                    a.e("61836"),
                    a.e("16874"),
                    a.e("87845"),
                    a.e("22773"),
                    a.e("58406"),
                    a.e("58682"),
                    a.e("57563"),
                    a.e("64290"),
                    a.e("45970"),
                    a.e("4974"),
                    a.e("89694"),
                    a.e("96821"),
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
                    a.e("16237"),
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
                    a.e("70284"),
                    a.e("94529"),
                    a.e("93305"),
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
                t = Object.values(a4.A.getGuilds())[0];
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
                a.e("30006"),
                a.e("26132"),
                a.e("81202"),
                a.e("43456"),
                a.e("44491"),
            ]).then(a.bind(a, 907206));
            return (t) => (0, r.jsx)(e, { ...t, onClose: rA.Z_ });
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
                        console.log("Leave role clicked"), (0, rA.Z_)();
                    },
                });
        },
        StaffOnlyEntryDebugMenu: async () => {
            let { default: e } = await Promise.all([a.e("86456"), a.e("89346")]).then(a.bind(a, 949881)),
                { ContentInventoryEntryType: t } = await Promise.resolve().then(a.bind(a, 681154)),
                { ContentInventoryAuthorType: n } = await Promise.resolve().then(a.bind(a, 6161)),
                l = Q.default.getCurrentUser(),
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
                    a.e("64290"),
                    a.e("16874"),
                    a.e("11810"),
                    a.e("14656"),
                ]).then(a.bind(a, 892921)),
                t = Object.values(a4.A.getGuilds())[0];
            return null == t
                ? () => null
                : (a) =>
                      (0, r.jsx)(e, {
                          ...a,
                          addFormField: (e) => {
                              console.log("Add form field:", e), (0, rA.Z_)();
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
                    a.e("40959"),
                    a.e("85802"),
                    a.e("65200"),
                    a.e("26250"),
                    a.e("51212"),
                    a.e("84615"),
                ]).then(a.bind(a, 612826)),
                t = a4.A.getGuilds(),
                n = null;
            for (let e of Object.values(t)) {
                for (let t of Object.values(ax.A.getMutableGuildChannelsForGuild(e.id))) {
                    let e = ax.A.getAllThreadsForParent(t.id);
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
                t = Object.values(a4.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rA.Z_ });
        },
        MembersTableJoinTypeContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("4974"), a.e("71719"), a.e("14878"), a.e("66016")]).then(
                    a.bind(a, 316173),
                ),
                t = Object.values(a4.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rA.Z_ });
        },
    },
    rI = {
        GuildShopSortOptions: o.lazy(async () => {
            let { default: e } = await Promise.all([a.e("83518"), a.e("55197"), a.e("50974")]).then(a.bind(a, 324269)),
                { default: t } = await a.e("55197").then(a.bind(a, 558060));
            return { default: () => (0, r.jsx)(t, { defaultSortOption: void 0, children: (0, r.jsx)(e, {}) }) };
        }),
    };
function rT() {
    let e = o.useMemo(
            () =>
                Object.keys(rD)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        t = o.useMemo(
            () =>
                Object.keys(rI)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        i = o.useCallback(
            (e) => {
                null != a && (0, rA.L3)(e, rD[a]);
            },
            [a],
        ),
        c = null != l ? rI[l] : null;
    return (0, r.jsx)(d.Ip, {
        className: tM.nd,
        children: (0, r.jsxs)(P.B, {
            className: s_.l$,
            gap: 16,
            children: [
                (0, r.jsxs)(P.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(C.E, { variant: "eyebrow", children: "Context Menus" }),
                        (0, r.jsx)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a menu and click Open to trigger it as a context menu at the button position.",
                        }),
                    ],
                }),
                (0, r.jsxs)(P.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(t6.Z, {
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
                (0, r.jsxs)(P.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(C.E, { variant: "eyebrow", children: "Popout Menus" }),
                        (0, r.jsx)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a popout menu to render it. Click the rendered button to open the popout.",
                        }),
                    ],
                }),
                (0, r.jsx)(P.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: (0, r.jsx)(t6.Z, {
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
                        fallback: (0, r.jsx)(C.E, {
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
var rR = a(253506),
    rO = a(665260),
    rw = a(97808),
    rM = a(778712),
    rL = a(308528),
    rP = a(571694),
    rU = a(704844),
    rG = a(567761),
    rB = a(716371),
    rF = a(825801);
function rV() {
    let e = (0, B.yK)([rG.default], () => rG.default.getSortedChannels()[1]),
        [t, a] = o.useState(e.length > 0 ? e[0].channelId : void 0),
        { selectedChannel: n, options: l } = (0, B.cf)([ax.A, Q.default, ap.A], () => ({
            selectedChannel: ax.A.getChannel(t),
            options: e.map((e) => {
                let t = ax.A.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, ah.m1)(t, Q.default, ap.A) : e.channelId,
                    leading:
                        null != t
                            ? (0, r.jsx)(rw.eu, { src: (0, rP.Y)(t), "aria-hidden": !0, size: rM._3.SIZE_16 })
                            : void 0,
                };
            }),
        })),
        s = o.useCallback(() => {
            if (null == n || !n.isPrivate()) return;
            let e = (0, rO.PQ)(n.recipientFlags ?? 0, rR.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            rU.A.updatePrivateChannelRecipientFlags(n.id, e);
        }, [n]),
        i = !!n?.isPrivate() && (0, rO.Lt)(n.recipientFlags ?? 0, rR.o.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, r.jsxs)("div", {
        className: rF.gs,
        children: [
            (0, r.jsx)(t6.Z, {
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
function r$() {
    let e = o.useCallback(() => {
        rL.A.openPrivateChannel({ recipientIds: [rB.K] });
    }, []);
    return (0, r.jsx)(h.$, { variant: "primary", size: "sm", text: "Open System DM", onClick: e });
}
function rW() {
    let e = (0, B.bG)([aP.Ay], () => aP.Ay.allByCategory(aP.xW.MESSAGING), [], B.My).map((e) => {
        let [t, a, { label: n }] = e;
        return (0, r.jsx)(tI.d, { label: n, description: t, checked: a, onChange: (e) => sR(t, e) }, t);
    });
    return (0, r.jsxs)("div", {
        className: w()(tM.nd, rF.nd),
        children: [
            e,
            (0, r.jsx)("div", { className: rF.yF }),
            (0, r.jsx)(rV, {}),
            (0, r.jsx)("div", { className: rF.yF }),
            (0, r.jsx)(r$, {}),
        ],
    });
}
var rz = a(459838),
    rH = a(772707),
    rK = a(150934),
    rY = a(598653),
    rq = a(166403),
    rJ = a(625494),
    rQ = a(204925);
let rX = {
    EmailEnterModal: async () => {
        let { default: e } = await a.e("29232").then(a.bind(a, 180275));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: nt.intl.string(nt.t.ZLRYGU),
                confirmButtonText: nt.intl.string(nt.t.PDTjLN),
                confirmButtonVariant: "primary",
            });
    },
    EmailPincodeModal: async () => {
        let { default: e } = await a.e("19840").then(a.bind(a, 79779));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: nt.intl.string(nt.t.H3Q7U8),
                onFormSubmit: () => {},
                onResend: () => {},
                onSuccess: () => {},
                confirmButtonText: nt.intl.string(nt.t["13ofGu"]),
                impression: { impressionName: s2.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
            });
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await Promise.all([a.e("54398"), a.e("34260"), a.e("18467")]).then(a.bind(a, 297102));
        return (t) => (0, r.jsx)(e, { ...t, entryPoint: nc.q1.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL });
    },
    ExistingUserAgeGatePrompt: async () => {
        let { default: e } = await Promise.all([a.e("71541"), a.e("82758"), a.e("80022"), a.e("10136")]).then(
            a.bind(a, 776971),
        );
        return (t) => (0, r.jsx)(e, { ...t, source: rQ.w_.NSFW_SERVER });
    },
    ExistingUserAgeGateUnderage: async () => {
        let { default: e } = await a.e("80959").then(a.bind(a, 784578));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NewUserAgeGate: async () => {
        let { default: e } = await Promise.all([
            a.e("71541"),
            a.e("82758"),
            a.e("19623"),
            a.e("80022"),
            a.e("1143"),
        ]).then(a.bind(a, 284778));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NUFModal: async () => {
        let { default: e } = await Promise.all([
            a.e("7839"),
            a.e("66234"),
            a.e("71541"),
            a.e("19580"),
            a.e("97804"),
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
        let { default: e } = await Promise.all([a.e("40933"), a.e("19623"), a.e("21007")]).then(a.bind(a, 888363));
        return (t) => (0, r.jsx)(e, { claimRequired: !0, ...t });
    },
    AutomatedUnderageAppealModal: async () => {
        let { default: e } = await Promise.all([a.e("51194"), a.e("9018")]).then(a.bind(a, 244321));
        return (t) => (0, r.jsx)(e, { ...t, classificationId: "123" });
    },
    AutomodRaidResolveModal: async () => {
        let { default: e } = await Promise.all([a.e("65606"), a.e("73669"), a.e("7133")]).then(a.bind(a, 580812));
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
        return (t) => (0, r.jsx)(e, { ...t, mediaEngineContext: rz.x.DEFAULT, subtitle: "Devtools subtitle" });
    },
    DynamicGraphicDemo: async () => {
        let { DynamicGraphicComponent: e } = await Promise.resolve().then(a.bind(a, 116833));
        return (t) =>
            (0, r.jsx)(rH.k, {
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
        let { default: e } = await Promise.all([a.e("76982"), a.e("82318")]).then(a.bind(a, 387101)),
            { OverlayToggledClientSettingType: t } = await Promise.resolve().then(a.bind(a, 810412));
        return (a) => (0, r.jsx)(e, { ...a, clientSettingType: t.LEGACY_GAME, gameId: "123456789" });
    },
    PremiumSubscriptionPauseModal: async () => {
        let { PremiumSubscriptionPauseModalSelect: e } = await Promise.all([a.e("34218"), a.e("80347")]).then(
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
                a.e("58203"),
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
        let { default: e } = await Promise.all([a.e("25861"), a.e("38035")]).then(a.bind(a, 14860)),
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
                (t.default.getDevicesForPlatform = (e) => (e === et.fg2.PLAYSTATION ? s : n.call(t.default, e))),
                    (t.default.getFetchingDevices = (e) => e !== et.fg2.PLAYSTATION && i.call(t.default, e)),
                    (t.default.getLastSelectedDeviceByPlatform = (e) =>
                        e === et.fg2.PLAYSTATION ? "device-1" : o.call(t.default, e)),
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
                    (0, r.jsx)(e, { ...a, channel: l, platform: et.fg2.PLAYSTATION })
                );
            };
        return (i.displayName = "PlayStationModalWrapper"), i;
    },
    GameDetectionReportModal: async () => {
        let { default: e } = await Promise.all([a.e("56600"), a.e("27495")]).then(a.bind(a, 651930));
        return (t) => (0, r.jsx)(e, { ...t, detectedActivity: { application_id: "123456789", name: "Test Game" } });
    },
    AppealIngestionModal: async () => {
        let { default: e } = await Promise.all([a.e("57352"), a.e("92030"), a.e("51471")]).then(a.bind(a, 550560));
        return (t) => (0, r.jsx)(e, { ...t, classificationId: "123456789" });
    },
    CreateTagModal: async () => {
        let { default: e } = await Promise.all([a.e("2225"), a.e("47326")]).then(a.bind(a, 950989));
        return (t) => (0, r.jsx)(e, { ...t, channelId: "123456789", guildId: "987654321" });
    },
    CreateTagModalEdit: async () => {
        let { default: e } = await Promise.all([a.e("2225"), a.e("47326")]).then(a.bind(a, 950989)),
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
        let { default: e } = await Promise.all([a.e("31910"), a.e("10919")]).then(a.bind(a, 556506));
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
        let { default: e } = await Promise.all([a.e("31910"), a.e("10919")]).then(a.bind(a, 556506));
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
        let { default: e } = await Promise.all([a.e("31910"), a.e("10919")]).then(a.bind(a, 556506));
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
        let { default: e } = await Promise.all([a.e("1378"), a.e("52823"), a.e("82721"), a.e("74832")]).then(
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
        let e = (await Promise.all([a.e("54545"), a.e("54857")]).then(a.bind(a, 147696))).default;
        return (t) => (0, r.jsx)(e, { ...t, guildId: "123456789012345678", startingChannelId: "987654321098765432" });
    },
    CameraPreviewModal: async () => {
        let { default: e } = await Promise.all([a.e("66759"), a.e("10534")]).then(a.bind(a, 308229));
        return (t) => (0, r.jsx)(e, { ...t, videoEnabled: !1, onEnable: () => console.log("Camera enabled") });
    },
    CameraPreviewModalWithVideo: async () => {
        let { default: e } = await Promise.all([a.e("66759"), a.e("10534")]).then(a.bind(a, 308229));
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
            a.e("24092"),
            a.e("94494"),
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
            a.e("24092"),
            a.e("22230"),
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
                                (0, r.jsx)(rK.S, {
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
                                (0, r.jsx)(rK.S, {
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
        let { default: e } = await Promise.all([a.e("64290"), a.e("46313")]).then(a.bind(a, 336496));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                guildId: "123456789",
                onClose: () => (console.log("GuildRaidLockdownFeedbackModal: Modal closed"), t.onClose()),
            });
    },
    GuildVerificationLevelModal: async () => {
        let { default: e } = await Promise.all([a.e("83013"), a.e("78618"), a.e("70232")]).then(a.bind(a, 313003)),
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
        let { default: e } = await Promise.all([a.e("83013"), a.e("78618"), a.e("70232")]).then(a.bind(a, 313003)),
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
        let { EmojiAddModal: e } = await Promise.all([a.e("74585"), a.e("90410")]).then(a.bind(a, 126033));
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
        let e = Q.default.getUser("12345"),
            t = Q.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("53385"), a.e("55738"), a.e("31385")]).then(a.bind(a, 58144));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterDeclineLinkModal: async () => {
        let e = Q.default.getUser("12345"),
            t = Q.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("53385"), a.e("55738"), a.e("84811")]).then(a.bind(a, 389094));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterCancelLinkModal: async () => {
        let e = Q.default.getUser("12345"),
            t = Q.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("53385"), a.e("55738"), a.e("17219")]).then(a.bind(a, 187278));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterDisconnectLinkModal: async () => {
        let e = Q.default.getUser("12345"),
            t = Q.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("53385"), a.e("55738"), a.e("43139")]).then(a.bind(a, 179950));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterQRCodeModal: async () => {
        let { default: e } = await Promise.all([
            a.e("88453"),
            a.e("30244"),
            a.e("98189"),
            a.e("48370"),
            a.e("72875"),
        ]).then(a.bind(a, 320742));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PremiumGroupFriendsSelectorModal: async () => {
        let { default: e } = await Promise.all([a.e("44616"), a.e("85579")]).then(a.bind(a, 785606)),
            t = rq.A.getPremiumGroupSubscription();
        return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, subscription: t });
    },
    PremiumGroupAcceptInviteModal: async () => {
        let { default: e } = await Promise.all([a.e("65243"), a.e("99910")]).then(a.bind(a, 826181));
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
        let { default: e } = await Promise.all([a.e("83307"), a.e("20577"), a.e("58062"), a.e("20723")]).then(
            a.bind(a, 667934),
        );
        return (t) => (0, r.jsx)(e, { ...t, url: "https://example-phishing-site.com/malicious-page" });
    },
    DmSettingsUpsellModal: async () => {
        let { default: e } = await Promise.all([a.e("26065"), a.e("62684")]).then(a.bind(a, 228855)),
            t = Object.keys(a4.A.getGuilds())[0];
        return (a) => (0, r.jsx)(e, { ...a, guildId: t });
    },
    UrgentMessageModal: async () => {
        let { default: e } = await Promise.all([a.e("89913"), a.e("36724")]).then(a.bind(a, 531519));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    UserAgreementsModal: async () => {
        let { default: e } = await Promise.all([a.e("37777"), a.e("82911"), a.e("22220")]).then(a.bind(a, 639719));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    DisableRiskyPermsModal: async () => {
        let { default: e } = await Promise.all([a.e("59066"), a.e("52823"), a.e("71905")]).then(a.bind(a, 868952)),
            t = Object.values(a4.A.getGuilds())[0];
        return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
    },
    OtherFriendRequestsModal: async () => {
        let { default: e } = await Promise.all([a.e("89326"), a.e("73152"), a.e("25281")]).then(a.bind(a, 516259));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    AcceptInviteModal: async () => {
        let { default: e } = await Promise.all([
            a.e("64290"),
            a.e("35316"),
            a.e("74275"),
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
            a.e("7839"),
            a.e("66234"),
            a.e("7850"),
            a.e("16138"),
            a.e("19580"),
            a.e("97804"),
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
function rZ() {
    let e = o.useMemo(
            () =>
                Object.keys(rX)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, a] = o.useState(null);
    return (0, r.jsx)(d.Ip, {
        className: tM.nd,
        children: (0, r.jsxs)("div", {
            className: s_.l$,
            children: [
                (0, r.jsx)("section", {
                    className: s_.uW,
                    children: (0, r.jsxs)(P.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(t6.Z, {
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
                                onClick: () => null != t && (0, S.openModalLazy)(rX[t]),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("section", {
                    className: s_.uW,
                    children: [
                        (0, r.jsx)(G.D, { variant: "heading-md/semibold", children: "Wow moment" }),
                        (0, r.jsx)("div", {
                            className: s_.bd,
                            children: (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open",
                                onClick: () => {
                                    (0, rY.o)(!0), rJ._.dispatch(et.jej.PREMIUM_SUBSCRIPTION_CREATED);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var r0 = a(933832),
    r1 = a(472229),
    r2 = a(694080),
    r8 = a(669316),
    r3 = a(354670),
    r6 = a(428262);
let r5 = async () => {
        try {
            let { body: e } = await n6.Bo.get({ url: et.Rsh.USER_OFFER_IDS, rejectWithError: !0 });
            return e;
        } catch (e) {
            return [];
        }
    },
    r4 = async (e, t) => {
        try {
            await n6.Bo.post({ url: et.Rsh.CREATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, r2._D)();
        }
    },
    r9 = async (e, t) => {
        try {
            await n6.Bo.del({ url: et.Rsh.UPDATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, r2._D)();
        }
    },
    r7 = async () => {
        try {
            let { body: e } = await n6.Bo.get({ url: et.Rsh.USER_OFFERS, rejectWithError: !0 });
            return { trial: e.trial, discount: e.discount.map(r8.A.createFromServer) };
        } catch (e) {
            return { trial: [], discount: [] };
        }
    },
    oe = async () => {
        try {
            await n6.Bo.del({ url: et.Rsh.USER_OFFERS, rejectWithError: !0 });
        } catch {
        } finally {
            await r3.A.forceReset(), await (0, r2._D)();
        }
    },
    ot = async (e) => {
        await n6.Bo.post({ url: et.Rsh.CREATE_REVERSE_TRIAL, body: { ends_at: e }, rejectWithError: !0 });
    };
function oa(e) {
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
        _ = null != p && new Date(p).getTime() < Date.now(),
        E = j?.sku_id === sp.pe.TIER_0,
        S = async () => {
            u(!0), y ? await N({ expiresAt: null }) : await (0, r2.u1)(t), n(), u(!1);
        },
        N = async (e) => {
            u(!0);
            try {
                await n6.Bo.patch({
                    url: et.Rsh.UPDATE_USER_OFFER(x, "trial"),
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
    let A = "Active";
    return (
        y && (A = "Acked"),
        _ && (A = "Expired"),
        (0, r.jsxs)("div", {
            className: w()(s_.Nr, E ? s_.Qf : s_.C1),
            children: [
                (0, r.jsx)("div", {
                    className: w()(s_.nM, s_.S7),
                    children: (0, r.jsx)(G.D, { variant: "heading-lg/semibold", color: "always-white", children: f }),
                }),
                (0, r.jsxs)(M.D, {
                    className: w()(s_.nM, s_.QB),
                    onClick: () => {
                        (0, nC.C)(x, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(C.E, { variant: "eyebrow", color: "always-white", children: ["Offer: ", x] }),
                        l
                            ? (0, r.jsx)(r0.A, { size: "md", color: "currentColor", className: s_.Kk })
                            : (0, r.jsx)(ng.T, { size: "xs", color: "currentColor", className: s_.Kk }),
                    ],
                }),
                (0, r.jsxs)(M.D, {
                    className: w()(s_.nM, s_.QB),
                    onClick: () => {
                        (0, nC.C)(v, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(C.E, { variant: "eyebrow", color: "always-white", children: ["Trial: ", v] }),
                        i
                            ? (0, r.jsx)(r0.A, { size: "md", color: "currentColor", className: s_.Kk })
                            : (0, r.jsx)(ng.T, { size: "xs", color: "currentColor", className: s_.Kk }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: s_.nM,
                    children: (0, r.jsxs)(C.E, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, r6.re)({
                                intervalType: j?.interval ?? sp.WT.MONTH,
                                intervalCount: j?.interval_count ?? 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: s_.nM,
                    children: [
                        (0, r.jsxs)(C.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, r1.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nS.Xm)(p),
                            onChange: (e) => {
                                N({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: s_.nM,
                    children: [
                        (0, r.jsx)(C.E, { variant: "eyebrow", color: "always-white", children: "Referrer ID:" }),
                        (0, r.jsx)("input", {
                            type: "text",
                            value: b?.id ?? "",
                            onChange: (e) => N({ referrerId: e.target.value }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: s_.fC,
                    children: [
                        (0, r.jsx)(M.D, {
                            onClick: S,
                            className: w()(s_.qS, s_.vk, { [s_.R1]: y, [s_._7]: _ }),
                            children: (0, r.jsx)(C.E, {
                                variant: "eyebrow",
                                color: "Acked" === A ? void 0 : "always-white",
                                children: A,
                            }),
                        }),
                        null != g &&
                            (0, r.jsx)("div", {
                                className: w()(s_.qS, s_.k3),
                                children: (0, r.jsx)(C.E, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Redeemed",
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(M.D, {
                    onClick: async () => {
                        u(!0), await r9(x, "trial"), n(), u(!1);
                    },
                    children: (0, r.jsx)(nb.u, { size: "md", color: "currentColor", className: w()(s_.Kk, s_.IT) }),
                }),
                (0, r.jsx)("div", { className: w()(s_.g4, { [s_.VP]: c || m }), children: (0, r.jsx)(e5.y, {}) }),
            ],
        })
    );
}
function on(e) {
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
        _ = async () => {
            u(!0), b ? await E({ expiresAt: null }) : await (0, r2.u1)(void 0, t), n(), u(!1);
        },
        E = async (e) => {
            let { expiresAt: t } = e;
            u(!0);
            try {
                await n6.Bo.patch({
                    url: et.Rsh.UPDATE_USER_OFFER(x, "discount"),
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
    let S = "Active";
    return (
        f && (S = "Expired"),
        b && (S = "Acked"),
        (0, r.jsxs)("div", {
            className: w()(s_.Nr, s_.id),
            children: [
                (0, r.jsx)("div", {
                    className: w()(s_.nM, s_.S7),
                    children: (0, r.jsx)(G.D, { variant: "heading-lg/semibold", color: "text-default", children: j }),
                }),
                (0, r.jsxs)(M.D, {
                    className: w()(s_.nM, s_.QB),
                    onClick: () => {
                        (0, nC.C)(x, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(C.E, { variant: "eyebrow", color: "text-default", children: ["Offer: ", x] }),
                        l
                            ? (0, r.jsx)(r0.A, { size: "md", color: "currentColor", className: w()(s_.Kk, s_.mK) })
                            : (0, r.jsx)(ng.T, { size: "xs", color: "currentColor", className: s_.Kk }),
                    ],
                }),
                (0, r.jsxs)(M.D, {
                    className: w()(s_.nM, s_.QB),
                    onClick: () => {
                        (0, nC.C)(g, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(C.E, { variant: "eyebrow", color: "text-default", children: ["Discount: ", g] }),
                        i
                            ? (0, r.jsx)(r0.A, { size: "md", color: "currentColor", className: w()(s_.Kk, s_.mK) })
                            : (0, r.jsx)(ng.T, { size: "xs", color: "currentColor", className: s_.Kk }),
                    ],
                }),
                v?.amount != null &&
                    (0, r.jsx)("div", {
                        children: (0, r.jsxs)(C.E, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: [v.amount, "% off"],
                        }),
                    }),
                (0, r.jsxs)("div", {
                    className: s_.nM,
                    children: [
                        (0, r.jsxs)(C.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, r1.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nS.Xm)(p?.toISOString()),
                            onChange: (e) =>
                                E({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: s_.fC,
                    children: [
                        (0, r.jsx)(M.D, {
                            onClick: _,
                            className: w()(s_.qS, s_.vk, { [s_.R1]: b, [s_._7]: f }),
                            children: (0, r.jsx)(C.E, {
                                variant: "eyebrow",
                                color: "Acked" === S ? void 0 : "always-white",
                                children: S,
                            }),
                        }),
                        y &&
                            (0, r.jsx)("div", {
                                className: w()(s_.qS, s_.k3),
                                children: (0, r.jsx)(C.E, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Applied",
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(M.D, {
                    className: s_.aR,
                    onClick: async () => {
                        u(!0), await r9(x, "discount"), n(), u(!1);
                    },
                    children: (0, r.jsx)(nb.u, { size: "md", color: "currentColor", className: w()(s_.Kk, s_.fy) }),
                }),
                (0, r.jsx)("div", { className: w()(s_.g4, { [s_.VP]: c || m }), children: (0, r.jsx)(e5.y, {}) }),
            ],
        })
    );
}
function ol() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState([]),
        [l, s] = o.useState(),
        [i, c] = o.useState(),
        [u, m] = o.useState([]),
        [p, g] = o.useState([]),
        [v, j] = o.useState(!0),
        [b, f] = o.useState(10080),
        [y, _] = o.useState([]),
        { entitlements: E, deleteFractionalPremium: S, refreshEntitlementList: N } = sf();
    o.useEffect(() => {
        N();
    }, [N]),
        o.useEffect(() => {
            _(E.filter((e) => e.sourceType === et.GD.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [E]),
        o.useEffect(() => {
            (0 === e.length || 0 === a.length || v) &&
                r5().then((e) => {
                    let a = Object.keys(e.trial).map((t) => ({ label: t, value: e.trial[t] })),
                        r = Object.keys(e.discount).map((t) => ({ label: t, value: e.discount[t] }));
                    t(a), n(r), null == l && s(a[0].value), null == i && c(r[0].value);
                });
        }, [e, a, l, i, v]),
        o.useEffect(() => {
            v &&
                (j(!1),
                r3.A.forceReset(),
                (0, r2._D)(),
                r7().then((e) => {
                    m(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        g(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [v]);
    let A = async () => {
            null != l && (await r4(l, "trial"), j(!0));
        },
        k = async () => {
            null != i && (await r4(i, "discount"), j(!0));
        },
        D = async () => {
            await oe(), j(!0);
        },
        I = async () => {
            let e = new Date(Date.now() + 60 * b * 1e3).toISOString();
            await ot(e), N();
        };
    return (0, r.jsx)(d.Ip, {
        className: tM.nd,
        children: (0, r.jsxs)("div", {
            className: s_.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: s_.uW,
                    children: [
                        (0, r.jsx)(G.D, { variant: "heading-md/semibold", children: "Utils" }),
                        (0, r.jsxs)("div", {
                            className: s_.Uo,
                            children: [
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear all User Offers",
                                    onClick: D,
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Mobile Trials DismissibleContent",
                                    onClick: () => (0, lI.xB)(an.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Offer Nagbar DismissibleContent",
                                    onClick: () => (0, lI._N)(an.M.NAGBAR_NOTICE_OFFER_EXPIRING),
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
                    className: s_.uW,
                    children: (0, r.jsxs)("div", {
                        className: s_.bd,
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
                            (0, r.jsx)(h.$, { variant: "primary", text: "Create", onClick: A }),
                        ],
                    }),
                }),
                (0, r.jsx)("section", {
                    className: s_.uW,
                    children: (0, r.jsxs)("div", {
                        className: s_.bd,
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
                            (0, r.jsx)(h.$, { variant: "primary", text: "Create", onClick: k }),
                        ],
                    }),
                }),
                u.length > 0 &&
                    (0, r.jsxs)("section", {
                        className: s_.uW,
                        children: [
                            (0, r.jsx)(G.D, { variant: "heading-md/semibold", children: "Existing Trial Offers" }),
                            u.map((t) =>
                                (0, r.jsx)(oa, { offer: t, offerOptions: e, forceRefetch: () => j(!0) }, t.id),
                            ),
                        ],
                    }),
                p.length > 0 &&
                    (0, r.jsxs)("section", {
                        className: s_.uW,
                        children: [
                            (0, r.jsx)(G.D, { variant: "heading-md/semibold", children: "Existing Discount Offers" }),
                            p.map((e) =>
                                (0, r.jsx)(on, { offer: e, offerOptions: a, forceRefetch: () => j(!0) }, e.id),
                            ),
                        ],
                    }),
                (0, r.jsx)("section", {
                    className: s_.uW,
                    children: (0, r.jsxs)("div", {
                        className: s_.bd,
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
                            (0, r.jsx)(C.E, {
                                style: { marginTop: "15px" },
                                variant: "text-md/bold",
                                children: "Active reverse trial",
                            }),
                            (0, r.jsx)("div", {
                                children: y.map((e) =>
                                    (0, r.jsx)(sC, { entitlement: e, active: !0, onDelete: () => S(e.id) }, e.id),
                                ),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
var os = a(528265),
    oi = a(26279),
    or = a(142798);
let oo = {
        [oi.Re.UNSPECIFIED]: "Unspecified",
        [oi.Re.DRAFT]: "Draft",
        [oi.Re.SIGNED]: "Signed",
        [oi.Re.DISCARDED]: "Discarded",
        [oi.Re.SIGNING_IN_PROGRESS]: "Signing In Progress",
    },
    od = { [oi.BM.UNSPECIFIED]: "Unspecified", [oi.BM.ONE_TIME]: "One Time", [oi.BM.SUBSCRIPTION]: "Subscription" };
function oc() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(!0),
        [l, s] = o.useState(null),
        i = o.useCallback(async () => {
            n(!0), s(null);
            try {
                let e = await n6.Bo.get({ url: `${et.Rsh.ORDER_LIST}?limit=5`, rejectWithError: !0 });
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
            className: tM.nd,
            children: (0, r.jsxs)("div", {
                className: s_.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: s_.dL,
                        style: { marginBottom: "16px" },
                        children: [
                            (0, r.jsxs)(C.E, { variant: "text-lg/bold", children: ["Orders (last ", 5, ")"] }),
                            (0, r.jsx)(h.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Refresh",
                                onClick: i,
                                loading: a,
                            }),
                        ],
                    }),
                    null != l && (0, r.jsx)(L.w, { type: "critical", children: l }),
                    !a &&
                        null != e &&
                        0 === e.length &&
                        (0, r.jsx)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "No orders found.",
                        }),
                    null != e && e.map((e) => (0, r.jsx)(ou, { order: e }, e.id)),
                ],
            }),
        })
    );
}
function ou(e) {
    let { order: t } = e,
        [a, n] = o.useState(!1),
        [l, s] = o.useState(!1),
        i = oo[t.status] ?? `Unknown (${t.status})`,
        d = [
            { id: "status", label: `Status: ${i}`, isDisabled: !1 },
            { id: "created", label: `Created: ${new Date(t.created_at).toLocaleString()}`, isDisabled: !1 },
        ],
        c = o.useCallback(() => {
            navigator.clipboard.writeText(t.id), s(!0), setTimeout(() => s(!1), 2e3);
        }, [t.id]);
    return (0, r.jsxs)("div", {
        className: s_.Nr,
        children: [
            (0, r.jsxs)(P.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                style: { marginBottom: "4px" },
                children: [
                    (0, r.jsx)(C.E, { variant: "text-md/semibold", children: t.id }),
                    (0, r.jsx)(h.$, { variant: "secondary", size: "sm", text: l ? "Copied!" : "Copy ID", onClick: c }),
                ],
            }),
            (0, r.jsx)(os.C, {
                items: d,
                label: "Order info",
                layout: "inline",
                selectionMode: "none",
                selectionBehavior: "replace",
                disabledKeys: new Set(),
            }),
            (0, r.jsxs)(P.B, {
                direction: "vertical",
                gap: 4,
                style: { marginTop: "8px" },
                children: [
                    (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: "Line Items" }),
                    0 === t.order_line_items.length
                        ? (0, r.jsx)(C.E, { variant: "text-xs/normal", color: "text-muted", children: "No line items" })
                        : t.order_line_items.map((e) =>
                              (0, r.jsxs)(
                                  P.B,
                                  {
                                      direction: "horizontal",
                                      gap: 12,
                                      children: [
                                          (0, r.jsxs)(C.E, {
                                              variant: "text-xs/normal",
                                              children: ["SKU: ", e.sku_id],
                                          }),
                                          (0, r.jsxs)(C.E, {
                                              variant: "text-xs/normal",
                                              children: ["Qty: ", e.quantity],
                                          }),
                                          (0, r.jsxs)(C.E, {
                                              variant: "text-xs/normal",
                                              children: [
                                                  "Type: ",
                                                  od[e.purchase_type] ?? `Unknown (${e.purchase_type})`,
                                              ],
                                          }),
                                          null != e.subscription_plan_id &&
                                              (0, r.jsxs)(C.E, {
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
                    className: or.VK,
                    style: { marginTop: "8px" },
                    children: [
                        (0, r.jsxs)(M.D, {
                            onClick: () => n((e) => !e),
                            className: or.Eh,
                            children: [
                                (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: "Billing Facet" }),
                                (0, r.jsx)(sh.A, { direction: a ? sh.A.Directions.UP : sh.A.Directions.DOWN }),
                            ],
                        }),
                        a &&
                            (0, r.jsxs)("ul", {
                                className: or.j3,
                                children: [
                                    (0, r.jsxs)("li", {
                                        children: [
                                            (0, r.jsx)(C.E, {
                                                variant: "text-xs/semibold",
                                                children: "payment_gateway",
                                            }),
                                            (0, r.jsx)(C.E, {
                                                variant: "text-xs/normal",
                                                children: String(t.billing_facet.payment_gateway),
                                            }),
                                        ],
                                    }),
                                    null != t.billing_facet.payment_source_id &&
                                        (0, r.jsxs)("li", {
                                            children: [
                                                (0, r.jsx)(C.E, {
                                                    variant: "text-xs/semibold",
                                                    children: "payment_source_id",
                                                }),
                                                (0, r.jsx)(C.E, {
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
                                                        (0, r.jsx)(C.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "currency",
                                                        }),
                                                        (0, r.jsx)(C.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.currency,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(C.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "subtotal",
                                                        }),
                                                        (0, r.jsx)(C.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.subtotal,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(C.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "tax",
                                                        }),
                                                        (0, r.jsx)(C.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.tax,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(C.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "total",
                                                        }),
                                                        (0, r.jsx)(C.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.total,
                                                        }),
                                                    ],
                                                }),
                                                t.billing_facet.invoice_preview.line_items.length > 0 &&
                                                    (0, r.jsxs)("li", {
                                                        children: [
                                                            (0, r.jsx)(C.E, {
                                                                variant: "text-xs/semibold",
                                                                children: "invoice line items",
                                                            }),
                                                            (0, r.jsx)(P.B, {
                                                                direction: "vertical",
                                                                gap: 4,
                                                                style: { marginTop: "4px" },
                                                                children:
                                                                    t.billing_facet.invoice_preview.line_items.map(
                                                                        (e) =>
                                                                            (0, r.jsxs)(
                                                                                P.B,
                                                                                {
                                                                                    direction: "horizontal",
                                                                                    gap: 12,
                                                                                    children: [
                                                                                        (0, r.jsxs)(C.E, {
                                                                                            variant: "text-xs/normal",
                                                                                            children: [
                                                                                                "ref: ",
                                                                                                e.ref_order_line_item_id,
                                                                                            ],
                                                                                        }),
                                                                                        (0, r.jsxs)(C.E, {
                                                                                            variant: "text-xs/normal",
                                                                                            children: [
                                                                                                "unit: ",
                                                                                                e.unit_price,
                                                                                            ],
                                                                                        }),
                                                                                        (0, r.jsxs)(C.E, {
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
var om = a(935462),
    oh = a(260598),
    ox = a(93688),
    op = a(717400),
    og = a(676955),
    ov = a(31300),
    oj = a(500060),
    ob = a(391973),
    of = a(684013),
    oy = a(765671),
    o_ = a(235986),
    oE = a(742589),
    oC = a(41984),
    oS = a(181435),
    oN = a(435736),
    oA = a(296027),
    ok = a(515183),
    oD = a(489277),
    oI = a(127242),
    oT = a(869014),
    oR = a(528772),
    oO = a(38502),
    ow = a(532624),
    oM = a(773371),
    oL = a(996439),
    oP = a(350535),
    oU = a(9302),
    oG = a(644434),
    oB = a(618137);
let oF = {
        [et.uss.CLICK_ZONE_DEBUG]: (e) => ({
            type: et.uss.CLICK_ZONE_DEBUG,
            id: (0, eE.A)(),
            layoutId: e,
            anchor: { top: 0.35, right: 0.35 },
            size: { width: 100, height: 100 },
            ...oO.A.getWidgetDefaultSettings(et.uss.CLICK_ZONE_DEBUG),
            pinned: !0,
        }),
        [et.uss.PERFORMANCE_DEBUG]: (e) => ({
            type: et.uss.PERFORMANCE_DEBUG,
            id: (0, eE.A)(),
            layoutId: e,
            anchor: { top: 0.1, right: 0.1 },
            size: { fixed: !1, width: "auto", height: "auto" },
            ...oO.A.getWidgetDefaultSettings(et.uss.PERFORMANCE_DEBUG),
            pinned: !0,
        }),
    },
    oV = {};
function o$(e) {
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
        (0, r.jsxs)(np.$n, {
            look: np.$n.Looks.LINK,
            color: np.$n.Colors.LINK,
            size: np.$n.Sizes.MIN,
            onClick: function () {
                (0, nC.C)(t, () => n(!0));
            },
            className: oB.DT,
            children: ["Application Id: ", t, " ", a ? nt.intl.string(nt.t.t5VZ88) : null],
        })
    );
}
let oW = o.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, B.bG)([a8.Ay], () => a8.Ay.getGameOrTransformedSubgameForPID(t.pid)),
            n = (0, B.bG)([a7.A], () => a7.A.getGameForPID(t.pid)),
            l = (0, B.bG)([a8.Ay], () => (null == a ? null : a8.Ay.getGameOverlayStatus(a)));
        return (0, r.jsxs)("div", {
            className: oB.st,
            children: [
                (0, r.jsx)(C.E, { variant: "text-md/bold", color: "text-strong", children: t.gameName }),
                (0, r.jsx)(C.E, { variant: "text-sm/bold", color: "text-subtle", children: t.pid }),
                (0, r.jsx)(C.E, { variant: "text-sm/normal", color: "text-subtle", children: a?.exeName }),
                (0, r.jsxs)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["isLauncher: ", a?.isLauncher ? "Yes" : "No"],
                }),
                null != t.applicationId &&
                    (0, r.jsx)(C.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: (0, r.jsx)(o$, { id: t.applicationId }),
                    }),
                (0, r.jsxs)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, ok.wR)(t.fullscreenType)],
                }),
                (0, r.jsxs)(C.E, { variant: "text-sm/normal", color: "text-default", children: ["state: ", t.state] }),
                (0, r.jsxs)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"],
                }),
                (0, r.jsxs)("div", {
                    className: oB.st,
                    children: [
                        (0, r.jsxs)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["source: ", t.source],
                        }),
                        (0, r.jsxs)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["legacyEnabled: ", t.legacyEnabled ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["oopEnabled: ", t.oopEnabled ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["overlayMethod: ", (0, ok.gK)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != l &&
                    (0, r.jsxs)("div", {
                        className: oB.st,
                        children: [
                            (0, r.jsxs)(C.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw source: ", l.source],
                            }),
                            (0, r.jsxs)(C.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledLegacy: ", l.enabledLegacy ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(C.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledOOP: ", l.enabledOOP ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(C.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw overlayMethod: ", (0, ok.gK)(l.overlayMethod)],
                            }),
                        ],
                    }),
                (0, r.jsxs)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hidden: ", a?.hidden ? "Yes" : "No"],
                }),
                (0, r.jsxs)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hook: ", n?.hook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlay: ", n?.overlay ? "Yes" : "No"],
                }),
                (0, r.jsxs)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlayCompatibilityHook: ", n?.overlayCompatibilityHook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["supportsOutOfProcessOverlay: ", n?.supportsOutOfProcessOverlay ? "Yes" : "No"],
                }),
            ],
        });
    }),
    oz = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, B.cf)([oM.default], () => oM.default.getOverlayPIDStatuses()),
            n = (0, B.cf)([oA.default], () => oA.default.getTrackedGames()),
            l = (0, B.bG)([oM.default], () => oM.default.isInputLocked(t), [t]),
            s = (0, B.bG)([oM.default], () => oM.default.DEV_isInputLockedV3(t), [t]),
            i = (0, B.bG)([oM.default], () => oM.default.DEV_isInputLocked(t), [t]),
            o = (0, B.bG)([oM.default], () => oM.default.isReady(t), [t]);
        return (0, r.jsxs)("div", {
            className: oB.st,
            children: [
                (0, r.jsx)(C.E, { variant: "text-md/semibold", color: "text-strong", children: `${t}` }),
                (0, r.jsxs)(C.E, {
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
                (0, r.jsxs)(C.E, {
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
                (0, r.jsxs)(C.E, {
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
                (0, r.jsxs)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["Bridge Status: ", a.get(Number(t))],
                }),
                (0, r.jsxs)(C.E, { variant: "text-sm/normal", color: "text-strong", children: ["isInputLocked: ", l] }),
                (0, r.jsxs)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV3: ", s],
                }),
                (0, r.jsxs)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV2: ", i],
                }),
                (0, r.jsxs)(C.E, { variant: "text-sm/normal", color: "text-strong", children: ["isReady: ", o] }),
            ],
        });
    });
function oH(e) {
    let t,
        a = ((t = Object.values((0, B.yK)([oO.A], () => oO.A.getWidgetsForLayout(oG.G)))), t.find((t) => t.type === e));
    return [
        a,
        () => {
            if (null != a) (0, ob.uv)(a.id);
            else {
                let t = oF[e];
                if (null == t) return;
                let a = t(oG.G);
                (0, ob.jn)(a);
            }
        },
    ];
}
function oK(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? `${e.toFixed(2)}ms` : (0, nS.i$)(nx()(e), "h:mm:ss.SSS");
}
let oY = o.memo(function (e) {
    let { pid: t, ...a } = e,
        n = (0, B.bG)([oA.default], () => {
            if (null == t) return "Unknown";
            let e = oA.default.getTrackedGameByPid(t)?.gameName;
            return null != e ? ((oV[t] = e), e) : (oV[t] ?? "Unknown");
        }, [t]);
    return (0, r.jsx)(C.E, { ...a, variant: "text-md/semibold", color: "text-strong", children: n });
});
function oq() {
    let e = (0, B.bG)([oI.A], () => oI.A.hasRenderDebugMode(oC.x7.TrackFocusPIDs)),
        t = (0, B.yK)([oA.default], () => oA.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, r.jsxs)("div", {
        className: oB.st,
        children: [
            (0, r.jsxs)("div", {
                className: oB.Iv,
                children: [
                    (0, r.jsx)(tI.d, {
                        checked: e,
                        onChange: () =>
                            void of.A.setRenderDebugMode(
                                !oI.A.hasRenderDebugMode(oC.x7.TrackFocusPIDs),
                                oC.x7.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, r.jsx)(M.D, {
                        className: oB.LL,
                        onClick: () => of.A.clearTrackedPids(),
                        children: (0, r.jsx)(nb.u, { size: "md", color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsxs)(d.Ip, {
                className: w()(oB.st, oB.XG),
                children: [
                    0 === t.length &&
                        (0, r.jsx)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: "No recent focused pids",
                        }),
                    [...t].reverse().map((e) => {
                        let [t, a, n] = e;
                        return (0, r.jsx)(
                            o.Fragment,
                            {
                                children: (0, r.jsx)(lQ.m, {
                                    position: "left",
                                    text: n === oC.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsxs)(C.E, {
                                            variant: "text-sm/medium",
                                            color: n === oC.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                                            children: [
                                                (0, r.jsx)(oY, { pid: a, tag: "span" }),
                                                " - ",
                                                a?.toString() ?? "null",
                                                " @ ",
                                                oK(t),
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
let oJ = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, B.bG)([oA.default, a8.Ay], () => {
                if (null == t) return null;
                let e = oA.default.getTrackedGameByPid(t)?.fullscreenType;
                if (null != e) return e;
                let a = a8.Ay.getGameOrTransformedSubgameForPID(t);
                return a?.fullscreenType ?? lF.aI.UNKNOWN;
            }, [t]);
        return (0, r.jsxs)(C.E, {
            variant: "text-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != a ? (0, ok.wR)(a) : "Unknown"],
        });
    }),
    oQ = o.memo(function () {
        let e = (0, B.cf)([oA.default], () => oA.default.getTrackedGames()),
            [t, a] = o.useState({}),
            n = o.useRef(null);
        return (
            o.useEffect(
                () => (
                    (n.current = setInterval(async () => {
                        let e = a8.Ay.getRunningGames(),
                            t = [],
                            n = Date.now();
                        for (let a of e) t.push((0, ok.E1)(a.pid, 0).then((e) => [a.pid, e, n]));
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
                    }, +n4.A.Millis.SECOND)),
                    () => clearInterval(n.current)
                ),
                [],
            ),
            (0, r.jsx)(lQ.m, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (0, r.jsx)("div", {
                    children: (0, r.jsxs)(d.Ip, {
                        className: w()(oB.st, oB.XG),
                        children: [
                            0 === Object.keys(e).length &&
                                (0, r.jsx)(C.E, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: "No recent screen types",
                                }),
                            Object.values(e).map((e) =>
                                (0, r.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, r.jsx)(oY, { tag: "div", pid: e.pid }),
                                            (0, r.jsx)(oJ, { pid: e.pid }),
                                            null != t[e.pid] &&
                                                [...t[e.pid]].reverse().map((t) => {
                                                    let { screenType: a, timestamp: n } = t;
                                                    return (0, r.jsx)(
                                                        C.E,
                                                        {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            children: `${a}:${(0, ok.wR)(a)} @ ${oK(n)}`,
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
    oX = o.memo(function () {
        let e = (0, B.cf)([oA.default], () => oA.default.getTrackedGames()),
            t = (0, oU.getPID)(),
            a = (0, B.bG)([oA.default], () => oA.default.isOverlayOOPEnabledForPid(t), [t]),
            [n, l] = (0, B.yK)([oR.A], () => [oR.A.enabled, oR.A.keepOpen]),
            s = (0, B.bG)([oM.default], () => oM.default.getFocusedPID()),
            i = (0, B.bG)([oM.default], () => oM.default.isFocusedPidOutOfProcess());
        return (0, r.jsxs)("div", {
            className: oB.st,
            children: [
                0 === Object.keys(e).length &&
                    (0, r.jsx)(C.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(e).map((e) => (0, r.jsx)(oz, { pid: e.pid }, e.pid)),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)(C.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["focusedPID: ", s?.toString() ?? "null"],
                        }),
                        (0, r.jsxs)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isFocusedPidOutOfProcess: ", i ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(C.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["processPid: ", t?.toString() ?? "unknown"],
                        }),
                        (0, r.jsxs)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isOOPEnabledForPid: ", a ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.enabled: ", n ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.keepOpen: ", l ? "Yes" : "No"],
                        }),
                    ],
                }),
            ],
        });
    }),
    oZ = [
        {
            mode: oC.x7.ClickZones,
            label: "Click Zone Debug Mode",
            tooltip: "Enables a red border around click zones to help with debugging.",
        },
        {
            mode: oC.x7.WidgetAreas,
            label: "Render Debug Mode",
            tooltip:
                "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        },
        {
            mode: oC.x7.WindowContainer,
            label: "Window Container Debug Mode",
            tooltip: "Enables a border the overlay window",
        },
        {
            mode: oC.x7.DisabledGPUBoost,
            label: "Disable GPU Boost",
            tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: oC.x7.ForceGPUBoost,
            label: "Force GPU Boost",
            tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: oC.x7.OverlayRafManagerForceEnabled,
            label: "Overlay SmartRAF",
            tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        },
        {
            mode: oC.x7.LegacyOverlayLogging,
            label: "Legacy Overlay Logging",
            tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console.",
        },
    ],
    o0 = o.memo(function () {
        let [e, t] = oH(et.uss.CLICK_ZONE_DEBUG),
            [a, n] = oH(et.uss.PERFORMANCE_DEBUG),
            l = (0, B.bG)([oI.A], () => oI.A.getRenderDebugModes()),
            [s, i] = o.useState({});
        return (
            o.useEffect(() => {
                let e = setInterval(() => {
                    i({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, r.jsx)("div", {
                className: oB.st,
                children: oZ.map((s) => {
                    let i =
                            s.mode === oC.x7.OverlayRafManagerForceEnabled
                                ? `${s.label} (${oT.A.getLastRAFCallbackReason()})`
                                : s.label,
                        d = () =>
                            s.mode === oC.x7.ClickZones
                                ? null != e
                                : s.mode === oC.x7.WidgetAreas
                                  ? null != a
                                  : l.has(s.mode);
                    return (0, r.jsx)(
                        o.Fragment,
                        {
                            children: (0, r.jsx)(tI.d, {
                                checked: d(),
                                onChange: () => {
                                    var e;
                                    let a = d();
                                    s.mode === oC.x7.ClickZones && t(),
                                        s.mode === oC.x7.WidgetAreas && n(),
                                        (e = s.mode),
                                        of.A.setRenderDebugMode(!a, e);
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
    o1 = o.memo(function () {
        let e = (0, B.cf)([oA.default], () => oA.default.getTrackedGames()),
            t = (0, B.bG)([a8.Ay], () => a8.Ay.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                t.length > 0 &&
                    (0, r.jsx)(lQ.m, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsxs)("div", {
                                className: oB.st,
                                children: [
                                    (0, r.jsx)(C.E, {
                                        variant: "text-md/bold",
                                        color: "text-feedback-critical",
                                        children: "Untracked Running Games",
                                    }),
                                    t.map((e) =>
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(
                                                    C.E,
                                                    {
                                                        variant: "text-sm/normal",
                                                        color: "text-feedback-critical",
                                                        children: `${e.pid} - ${e.name} (${e.exeName})`,
                                                    },
                                                    e.pid,
                                                ),
                                                (0, r.jsx)(oJ, { pid: e.pid }),
                                            ],
                                        }),
                                    ),
                                ],
                            }),
                        }),
                    }),
                (0, r.jsx)(lQ.m, {
                    position: "left",
                    text: "The current running games process information",
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: oB.st,
                            children: [
                                0 === Object.keys(e).length &&
                                    (0, r.jsx)(C.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: "No running games",
                                    }),
                                Object.values(e).map((e) => (0, r.jsx)(oW, { trackedGame: e }, e.pid)),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    o2 = o.memo(function () {
        let e = (0, B.bG)([oA.default], () => oA.default.getForcedRenderMode()),
            [t, a] = o.useState(e),
            n = [
                { label: oC.V6.UNSET, value: oC.V6.UNSET, id: oC.V6.UNSET },
                { label: oC.V6.IN_PROCESS_V2, value: oC.V6.IN_PROCESS_V2, id: oC.V6.IN_PROCESS_V2 },
                { label: oC.V6.OUT_OF_PROCESS_V3, value: oC.V6.OUT_OF_PROCESS_V3, id: oC.V6.OUT_OF_PROCESS_V3 },
                {
                    label: oC.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: oC.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    id: oC.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => ({ ...t, label: `${t.label} ${e === t.value ? "(current)" : ""}` }));
        return (0, r.jsx)(x.l, {
            label: "Override the overlay render mode",
            value: t,
            options: n,
            onSelectionChange: (e) => {
                a(e), of.A.forceRenderMode(e);
            },
            selectionMode: "single",
            fullWidth: !0,
        });
    });
function o8(e) {
    let { modalProps: t, onClose: a } = e,
        [n, l] = o.useState(null);
    function s() {
        a(null);
    }
    return (0, r.jsxs)(om.EO, {
        size: om.rI.LARGE,
        "aria-label": "Breadcrumb Import",
        ...t,
        transitionState: t.transitionState,
        parentComponent: "BreadcrumbImportPanel",
        children: [
            (0, r.jsxs)(om.rQ, {
                align: o_.A.Align.CENTER,
                justify: o_.A.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(C.E, {
                        variant: "text-md/bold",
                        color: "text-feedback-critical",
                        children: "Breadcrumb Import",
                    }),
                    (0, r.jsx)(om.s_, { onClick: s }),
                ],
            }),
            (0, r.jsx)(om.$m, {
                children: (0, r.jsx)("div", {
                    className: oB.st,
                    children: (0, r.jsx)(oh.f, { label: "Paste JSON Here", onChange: l, value: n ?? "", rows: 12 }),
                }),
            }),
            (0, r.jsx)(om.jl, {
                children: (0, r.jsxs)(sl.e, {
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
let o3 = {
    native: { label: "Native", filter: (e) => e.type === oS.ON.NativeLegacy || e.type === oS.ON.NativeOOP },
    render: { label: "Render", filter: (e) => e.type === oS.ON.Renderer },
    flux: { label: "Flux", filter: (e) => e.type === oS.ON.Flux },
    client: { label: "Client", filter: (e) => e.type === oS.ON.OOPModule || e.type === oS.ON.LegacyModule },
};
function o6(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oS.QJ.Info;
    if (t === oS.QJ.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case oS.ON.NativeLegacy:
            return "var(--yellow-500)";
        case oS.ON.NativeOOP:
            return "var(--green-500)";
        case oS.ON.Flux:
            return "var(--brand-400)";
        case oS.ON.Renderer:
            return "var(--brand-500)";
        case oS.ON.LegacyModule:
            return "var(--yellow-300)";
        case oS.ON.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let o5 = [
    {
        key: "type",
        cellClassName: oB.SZ,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: a } = e,
                n = o4(t);
            return (0, r.jsx)("div", {
                className: oB.g$,
                style: { color: o6(t, a) },
                children: (0, r.jsx)(n, { color: "currentColor", size: "sm" }),
            });
        },
    },
    {
        key: "name",
        cellClassName: oB.Cm,
        render(e) {
            let { name: t, type: a, logType: n } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(C.E, {
                        variant: "text-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case oS.QJ.Info:
                                    return "text-strong";
                                case oS.QJ.Warning:
                                    return "text-feedback-warning";
                                case oS.QJ.Error:
                                    return "text-feedback-critical";
                                default:
                                    return "text-subtle";
                            }
                        })(n),
                        children: t,
                    }),
                    (0, r.jsxs)(C.E, { variant: "text-sm/normal", color: "text-subtle", children: ["(", a, ")"] }),
                ],
            });
        },
    },
    {
        key: "timestamp",
        cellClassName: oB.DK,
        render(e) {
            let { timestamp: t } = e;
            return (0, nS.i$)(nx()(t), "h:mm:ss.SSS");
        },
    },
];
function o4(e) {
    switch (e) {
        case oS.ON.NativeLegacy:
            return ox.W;
        case oS.ON.NativeOOP:
            return op.q;
        case oS.ON.Renderer:
        case oS.ON.Flux:
            return og.v;
        case oS.ON.LegacyModule:
            return ov.k;
        case oS.ON.OOPModule:
            return oj.o;
        default:
            return ov.k;
    }
}
function o9(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let o7 = ["__webpack_require__", "fn"],
    de = ["web.js", "web.js.map"],
    dt = [
        {
            id: "details",
            name: "Details",
            group: aQ.fu.NONE,
            render: (e) => {
                let { breadcrumb: t, onClose: a } = e,
                    { name: n, type: l, logType: s, nativeId: i, stack: o, data: c, timestamp: u, pid: m } = t,
                    h = nx()(u),
                    x = o4(l);
                return (0, r.jsxs)(d.Ar, {
                    className: oB.bW,
                    children: [
                        (0, r.jsxs)(oE.A, {
                            className: w()(tM.jr, oB.nZ),
                            children: [
                                (0, r.jsx)("div", {
                                    style: { color: o6(l, s) },
                                    className: oB.nr,
                                    children: (0, r.jsx)(x, { color: "currentColor", size: "sm" }),
                                }),
                                (0, r.jsxs)(oE.A.Title, {
                                    wrapperClassName: oB.qd,
                                    children: [
                                        n,
                                        " (",
                                        l,
                                        ")",
                                        (0, r.jsx)(M.D, {
                                            tag: "span",
                                            className: oB.KE,
                                            onClick: () => (0, nC.C)(n),
                                            children: (0, r.jsx)(ng.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(oE.A.Icon, {
                                    icon: ng.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, nC.C)(o9(t));
                                    },
                                }),
                                (0, r.jsx)(oE.A.Icon, { icon: nj.a, tooltip: "Close", onClick: a }),
                            ],
                        }),
                        (0, r.jsxs)(nL, {
                            className: oB.ZK,
                            children: [
                                (0, r.jsx)(nP, {
                                    name: "Timestamp",
                                    copyValue: h.toISOString(),
                                    children: (0, r.jsx)("time", {
                                        dateTime: h.toISOString(),
                                        title: (0, nS.i$)(h, "LLLL"),
                                        children: (0, nS.i$)(h, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, r.jsx)(nP, {
                                    name: "Log Type",
                                    copyValue: s,
                                    children: (0, r.jsx)("code", { children: s }),
                                }),
                                (0, r.jsx)(nP, {
                                    name: "PID",
                                    copyValue: m?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: m?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(nP, {
                                    name: "Native ID",
                                    copyValue: i?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: i?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(nP, {
                                    name: "Data",
                                    copyValue: o9(c),
                                    children: (0, r.jsx)("code", { children: o9(c) }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nP, {
                                        name: "Stack Trace",
                                        copyValue: o,
                                        children: (0, r.jsx)("code", {
                                            children: o.split("\n").map((e, t) => {
                                                let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != a) {
                                                    let [, e, n, l, s] = a,
                                                        i = n.split(/[\\/]/).pop();
                                                    return o7.includes(e.trim())
                                                        ? null
                                                        : (0, r.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, r.jsx)("span", {
                                                                          className: oB.e0,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !de.includes(i ?? "") &&
                                                                          (0, r.jsxs)(r.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, r.jsxs)("span", {
                                                                                      className: oB.lz,
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
    da = {
        searchType: n_.n.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: a, stack: n, data: l } = e,
                s = [t, a, JSON.stringify(l)];
            return null != n && s.push(n), s;
        },
        throttleMs: 100,
    };
function dn() {
    let { ref: e, height: t } = (0, oy.Ay)(),
        a = (0, B.bG)([oI.A], () => oI.A.isModuleLoggingEnabled()),
        [n, l] = o.useState(a),
        [s, i] = o.useState(!1),
        [d, c] = o.useState(null),
        [u, m] = o.useState(Object.keys(o3)),
        [h, x] = (0, B.bG)([oI.A], () => oI.A.getOverlayLoggingBreadcrumbs(), [], oL.D),
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
                              let { filter: a } = o3[t];
                              if (a(e)) return !0;
                          }
                          return !1;
                      }),
            [v, u, d, s, j],
        ),
        [_, E] = o.useState(y),
        [N, A] = o.useState(null),
        k = o.useMemo(() => v.find((e) => e.key === N), [v, N]),
        D = o.useCallback((e) => {
            E(e);
        }, []),
        { renderSelectedTab: I } = (0, aQ.Ay)({ tabs: dt }, []);
    (0, nE.RT)(b, y, D, da, [v]);
    let T = o.useCallback((e) => {
            l(e), of.A.setModuleLogging(e);
        }, []),
        [R, O] = o.useState(!1),
        L = o.useRef(null),
        P = o.useCallback(() => {
            (0, nC.C)(JSON.stringify(y)), O(!0);
        }, [y]);
    o.useEffect(() => {
        if (R)
            return (
                (L.current = setTimeout(() => {
                    O(!1);
                }, 4e3)),
                () => {
                    null != L.current && clearTimeout(L.current);
                }
            );
    }, [R]);
    let U = o.useCallback((e) => {
            g(null != e ? JSON.parse(e) : null);
        }, []),
        G = o.useCallback(
            (e) => {
                if (e) return g(null);
                (0, S.openModal)(
                    (e) =>
                        (0, r.jsx)(o8, {
                            modalProps: e,
                            onClose: (t) => {
                                U(t), e.onClose();
                            },
                        }),
                    { modalKey: "breadcrumb-import-panel" },
                    eP.SY,
                );
            },
            [U],
        );
    return (0, r.jsxs)("div", {
        ref: e,
        className: oB.rh,
        children: [
            (0, r.jsxs)("div", {
                className: oB.st,
                children: [
                    (0, r.jsxs)("div", {
                        className: w()(oB._V, oB.XQ),
                        children: [
                            (0, r.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: oB.iR,
                                children: (0, r.jsx)(rK.S, { label: "Poll Native", checked: n, onChange: (e) => T(e) }),
                            }),
                            (0, r.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: oB.iR,
                                children: (0, r.jsx)(rK.S, {
                                    label: "Only Active Games",
                                    checked: s,
                                    onChange: (e) => i(e),
                                }),
                            }),
                            (0, r.jsxs)(M.D, {
                                className: oB.ny,
                                onClick: P,
                                children: [
                                    (0, r.jsx)(C.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: R ? "Copied" : "Copy All",
                                    }),
                                    R
                                        ? (0, r.jsx)(r0.A, { size: "sm", color: eL.A.unsafe_rawColors.GREEN_330.css })
                                        : (0, r.jsx)(ng.T, { color: "currentColor", size: "sm" }),
                                ],
                            }),
                            (0, r.jsx)(M.D, {
                                className: oB.ny,
                                onClick: () => G(null != p),
                                children: (0, r.jsx)(C.E, {
                                    variant: "text-sm/normal",
                                    color: "currentColor",
                                    children: null != p ? "Clear" : "Import",
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: w()(oB._V, oB.XQ),
                        children: Object.entries(o3).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                M.D,
                                {
                                    className: w()(oB.pb, u.includes(t) && oB.bx),
                                    onClick: () => {
                                        m((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: (0, r.jsx)(C.E, {
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
                        className: oB._V,
                        children: (0, r.jsx)(nf.I, {
                            query: b,
                            onChange: f,
                            onClear: () => f(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: w()(oB.st, oB.CZ),
                children: (0, r.jsx)(tL, {
                    columns: o5,
                    data: _,
                    selectedRowKey: N ?? void 0,
                    onClickRow: (e) => A(e.key),
                }),
            }),
            null != k &&
                (0, r.jsx)(aJ, {
                    className: w()(oB.st, oB.rf),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: I({ breadcrumb: k, onClose: () => A(null) }),
                }),
        ],
    });
}
let dl = o.memo(function () {
        let e = (0, B.bG)([oD.A], () => oD.A.getPopoutInitializationStages());
        return (0, r.jsxs)("div", {
            className: oB.st,
            children: [
                (0, r.jsx)("div", {
                    className: oB.Iv,
                    children: (0, r.jsx)(C.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: "Popout Initialization Stages",
                    }),
                }),
                (0, r.jsx)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", { children: JSON.stringify(e, void 0, 2) }),
                }),
            ],
        });
    }),
    ds = o.memo(function () {
        let e = (0, B.bG)([oI.A], () => oI.A.isStateDebuggingEnabled()),
            t = (0, B.bG)([oI.A], () => oI.A.getDebuggingState());
        return (
            o.useEffect(
                () => (
                    of.A.setStateDebugging(!0),
                    () => {
                        of.A.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, r.jsxs)("div", {
                className: oB.st,
                children: [
                    (0, r.jsx)("div", {
                        className: oB.Iv,
                        children: (0, r.jsx)(tI.d, {
                            checked: e,
                            onChange: () => of.A.setStateDebugging(!e),
                            label: "Poll Native Module State",
                        }),
                    }),
                    (0, r.jsx)(C.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: (0, r.jsx)("pre", { children: JSON.stringify(t, void 0, 2) }),
                    }),
                ],
            })
        );
    });
function di() {
    return (0, r.jsx)(d.Ar, {
        children: (0, r.jsxs)("div", {
            className: w()(tM.nd, oB.rf),
            children: [
                (0, r.jsx)(o0, {}),
                (0, r.jsx)(o2, {}),
                (0, r.jsx)(o1, {}),
                (0, r.jsx)(oX, {}),
                (0, r.jsx)(oq, {}),
                (0, r.jsx)(oQ, {}),
                (0, r.jsx)(dl, {}),
                (0, r.jsx)(ds, {}),
            ],
        }),
    });
}
let dr = (e) => {
        switch (e) {
            case "Disabled":
                return;
            case "False":
                return !1;
            case "True":
                return !0;
        }
    },
    dd = (e) => (null == e ? "Disabled" : e ? "True" : "False"),
    dc = o.memo(function () {
        let e = (0, oN.wW)(),
            t = (0, B.bG)([ow.Ay], () => ow.Ay.getOverlayKeybind());
        return (0, r.jsxs)("div", {
            className: oB.st,
            children: [
                (0, r.jsx)(G.D, { variant: "heading-lg/semibold", children: "Overlay Default Keybind Experiment" }),
                (0, r.jsx)(G.D, { variant: "heading-md/semibold", children: "Experiment State" }),
                (0, r.jsx)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", {
                        children: JSON.stringify({ ...e, overlayKeybind: (0, oP.dI)(t.shortcut) }, void 0, 2),
                    }),
                }),
                (0, r.jsx)(G.D, { variant: "heading-md/semibold", children: "Overrides" }),
                (0, r.jsx)(x.l, {
                    label: "Overlay User Status",
                    description: "Override whether the current user was a new or existing user",
                    value: dd(e.overrideIsNewOverlayUser),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Existing user", value: "False", id: "False" },
                        { label: "New user", value: "True", id: "True" },
                    ],
                    onSelectionChange: (e) => {
                        (0, oN.sw)(dr(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(x.l, {
                    label: "Override Previous Keybind Status",
                    description: "Override whether the user's pre-experiment keybind was the default keybind",
                    value: dd(e.overrideIsUsingDefaultOverlayKeybind),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Using default keybind", value: "True", id: "True" },
                        { label: "Not using default keybind", value: "False", id: "False" },
                    ],
                    onSelectionChange: (e) => {
                        (0, oN.C3)(dr(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(G.D, { variant: "heading-md/semibold", children: "Actions" }),
                (0, r.jsx)(h.$, { size: "sm", text: "Reset isNewOverlayUser", onClick: () => (0, oN.xc)() }),
                (0, r.jsx)(h.$, {
                    size: "sm",
                    text: "Reset isUsingDefaultOverlayKeybind",
                    onClick: () => (0, oN.tM)(),
                }),
            ],
        });
    });
function du() {
    return (0, r.jsx)(d.Ar, {
        children: (0, r.jsx)("div", { className: w()(tM.nd, oB.rf), children: (0, r.jsx)(dc, {}) }),
    });
}
function dm() {
    let [e, t] = o.useState("state");
    return (
        o.useEffect(
            () => (
                tT.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !0 }),
                () => {
                    tT.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !1 });
                }
            ),
            [],
        ),
        (0, r.jsxs)("div", {
            className: w()(tM.nd, oB.nd),
            children: [
                (0, r.jsxs)("div", {
                    className: oB._V,
                    children: [
                        (0, r.jsx)(M.D, {
                            className: w()(oB.k0, "state" === e && oB.a),
                            onClick: () => t("state"),
                            children: (0, r.jsx)(C.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, r.jsx)(M.D, {
                            className: w()(oB.k0, "logging" === e && oB.a),
                            onClick: () => t("logging"),
                            children: (0, r.jsx)(C.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, r.jsx)(M.D, {
                            className: w()(oB.k0, "experiments" === e && oB.a),
                            onClick: () => t("experiments"),
                            children: (0, r.jsx)(C.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, r.jsx)(di, {}),
                "logging" === e && (0, r.jsx)(dn, {}),
                "experiments" === e && (0, r.jsx)(du, {}),
            ],
        })
    );
}
var dh = a(488428),
    dx = a(73825),
    dp = a(753390),
    dg = a(210561),
    dv = a(944304),
    dj = a(300233),
    db = a(599941),
    df = a(817649),
    dy = a(4630),
    d_ = a(44120),
    dE = a(532794),
    dC = a(216678),
    dS = a(194509),
    dN = a(761705),
    dA = a(65738),
    dk = a(265768);
function dD(e) {
    let { selectedGuildForGuildSub: t } = e,
        a = (0, db.uk)(t?.id)[0];
    return null != t && null != a
        ? (0, r.jsx)("div", {
              children: a.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(df.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let dI = function () {
    let [e, t] = o.useState(sp.pe.TIER_2),
        [a, n] = o.useState(null),
        l = (0, B.yK)([a4.A], () => a4.A.getGuildsArray()),
        [s] = (0, B.yK)([rq.A], () => [rq.A.getPremiumSubscription()]),
        i = l.map((e) => ({ id: e.id, value: e, label: e.name })),
        [c, m] = o.useState(i.length > 0 ? i[0].value : null),
        [g, v] = o.useState(""),
        [j, b] = o.useState({ plan_id: sp.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        f = "true" !== j.gift && null != s,
        [y, _] = o.useState(i.length > 0 ? i[0].value : null),
        { analyticsLocations: E } = (0, aZ.Ay)(tp.A.PAYMENT_FLOW_TEST_PAGE),
        [S, N] = o.useState(""),
        [A, k] = o.useState(et.dJq),
        { balance: D, isFetching: I, error: T } = (0, dN.W)(),
        { isSubmitting: R, responseMessage: O, redeemVirtualCurrency: w } = (0, dN.Q)(),
        [M, L] = o.useState(et.dJq),
        [U, G] = o.useState(""),
        [F, V] = o.useState(et.dJq),
        [$, W] = o.useState(et.dJq);
    return (0, r.jsx)(aZ.f5, {
        value: E,
        children: (0, r.jsx)(d.Ip, {
            className: dk.XG,
            children: (0, r.jsxs)(P.B, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, r.jsxs)(P.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Gift",
                                value: e,
                                options: [
                                    { id: "tier_2", value: sp.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: sp.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: sp.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => t(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(dS.A, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: np.XD.PRIMARY,
                                look: np.pR.FILLED,
                            }),
                        ],
                    }),
                    (0, r.jsx)(al.c, {}),
                    (0, r.jsxs)(P.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Premium Select Plan",
                                value: a,
                                options: [
                                    { id: "tier_2", value: sp.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: sp.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: sp.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => n(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () => (0, dE.A)({ subscriptionTier: a, analyticsLocations: E }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(al.c, {}),
                    (0, r.jsxs)(P.B, {
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
                                ? (0, r.jsx)(dv.A, { guild: c, analyticsLocation: {} })
                                : (0, r.jsx)("div", { children: "No Guild to boost" }),
                        ],
                    }),
                    (0, r.jsx)(al.c, {}),
                    (0, r.jsxs)(P.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(iy.Anchor, {
                                href: "https://i.dis.gd/createPromo",
                                children: "How to create promotion",
                            }),
                            (0, r.jsxs)(P.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(p.k, {
                                        label: "Standalone: Trial Promotion Redemption",
                                        placeholder: "Promotion Code",
                                        value: g,
                                        onChange: (e) => v(e),
                                    }),
                                    (0, r.jsx)(lQ.m, {
                                        text: "Need Promotion Code",
                                        shouldShow: g.length < 1,
                                        children: (0, r.jsx)(h.$, {
                                            variant: "primary",
                                            text: "Open Link",
                                            disabled: g.length < 1,
                                            onClick: () => {
                                                window.open(et.BVt.BILLING_PROMOTION_REDEMPTION(g));
                                            },
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(al.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Standalone: Gift/Subscription Purchase",
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Plan",
                                value: j.plan_id,
                                options: [
                                    { id: "tier_2", value: sp.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: sp.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: sp.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic" },
                                ],
                                onSelectionChange: (e) => {
                                    b((t) => ({ ...t, plan_id: e }));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(x.l, {
                                label: "Type",
                                value: j.gift,
                                options: [
                                    { id: "gift", value: "true", label: "Gift" },
                                    { id: "not_gift", value: "false", label: "Not Gift" },
                                ],
                                onSelectionChange: (e) => {
                                    b((t) => ({ ...t, gift: e }));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        ],
                    }),
                    (0, r.jsx)(lQ.m, {
                        text: "Already subscribed",
                        shouldShow: f,
                        children: (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: f,
                            onClick: () => {
                                window.open(et.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + dh.stringify({ ...j }));
                            },
                        }),
                    }),
                    (0, r.jsx)(al.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Redeem Virtual Currency for SKU",
                        children: [
                            (0, r.jsxs)(P.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(C.E, {
                                        variant: "text-sm/normal",
                                        children: "Virtual Currency Balance:",
                                    }),
                                    I
                                        ? (0, r.jsx)("div", {
                                              className: dk.wG,
                                              children: (0, r.jsx)(e5.y, { type: e5.t.SPINNING_CIRCLE }),
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: dk.dB,
                                              children: [
                                                  null !== T &&
                                                      (0, r.jsxs)(C.E, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              T.message,
                                                          ],
                                                      }),
                                                  (0, r.jsx)(dA.Gy, {
                                                      balance: D ?? 0,
                                                      balanceWidgetMode: dA.k7.SELECTED,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, r.jsx)(p.k, {
                                label: "SKU ID",
                                placeholder: "SKU ID",
                                value: M,
                                onChange: (e) => L(e),
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Redeem Virtual Currency for SKU",
                                loading: R,
                                onClick: () => w(M, (0, eE.A)()),
                            }),
                            null != O && (0, r.jsx)(C.E, { variant: "text-sm/normal", children: O }),
                        ],
                    }),
                    (0, r.jsx)(al.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Creator Revenue",
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Premium Server Subscription For",
                                value: y,
                                options: i,
                                onSelectionChange: (e) => _(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(dj.H, {
                                guildId: y?.id,
                                children: (0, r.jsx)(dD, { selectedGuildForGuildSub: y }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(al.c, {}),
                    (0, r.jsxs)(P.B, {
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
                                    (0, dy.openIAPPurchaseModal)({
                                        applicationId: S,
                                        skuId: A,
                                        openPremiumPaymentModal: () => !0,
                                        analyticsLocations: [],
                                        analyticsLocationObject: { page: et.liQ.IN_APP },
                                        context: et.BRT.APP,
                                    }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(al.c, {}),
                    (0, r.jsx)(P.B, {
                        direction: "vertical",
                        gap: 8,
                        children: (0, r.jsx)(u.n, {
                            label: "Standard Payment Modal Test",
                            children: (0, r.jsxs)(P.B, {
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
                                        onChange: (e) => V(e),
                                    }),
                                    (0, r.jsx)(h.$, {
                                        variant: "primary",
                                        text: "Open Standard Payment Modal for SKU",
                                        onClick: () =>
                                            (0, dC.A)({
                                                applicationId: U,
                                                skuId: F,
                                                analyticsLocations: E,
                                                checkoutFlow: dg.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                            }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, r.jsx)(al.c, {}),
                    (0, r.jsxs)(P.B, {
                        direction: "horizontal",
                        align: "end",
                        gap: 8,
                        children: [
                            (0, r.jsx)(p.k, {
                                label: "Collectibles Payment Modal Test",
                                placeholder: "SKU ID",
                                value: $,
                                onChange: (e) => W(e),
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open Collectibles Payment Modal for SKU",
                                onClick: () => (0, d_.A)({ skuId: $, analyticsLocations: E }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(al.c, {}),
                    (0, r.jsx)(u.n, {
                        label: "Helpers",
                        children: (0, r.jsxs)(P.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionPlanStore",
                                    onClick: () => (0, dx.YG)(),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, dp.uZ)(),
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsx)(al.c, {}),
                    (0, r.jsx)(u.n, {
                        label: "Dismissible Content Framework",
                        children: (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Reset DismissibleContentFrameworkStore",
                            onClick: () => (0, lj.Ab)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
var dT = a(219887),
    dR = a(459357),
    dO = a(885180),
    dw = a(742810),
    dM = a(500380),
    dL = a(102609),
    dP = a(710195),
    dU = a(211287),
    dG = a(295405),
    dB = a(188976);
let dF = [
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
    dV = {
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
    d$ = [
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
    dW = {
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
    dz = [
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
    dH = {
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
function dK() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        [i, c] = o.useState(null),
        [u, m] = o.useState(null),
        [p, g] = o.useState("pm_card_us"),
        [v, j] = o.useState(!1),
        b = Object.values((0, tx.bG)([dG.A], () => dG.A.paymentSources)),
        f = dV[e],
        y = async () => {
            let t = p;
            "" === t && (t = "pm_card_us"),
                await n6.Bo.post({
                    url: "/debug/payment-source",
                    body: { token: t, address: "US" === e ? l : "CA" === e ? u : null },
                    rejectWithError: !1,
                }),
                await (0, dp.$o)();
        },
        _ = async () => {
            await n6.Bo.del({ url: "/debug/payment-source", rejectWithError: !1 }), await (0, dp.$o)();
        },
        E = async () => {
            await n6.Bo.del({ url: "/debug/rate-limits", rejectWithError: !1 }), window.location.reload();
        };
    return (
        o.useEffect(() => {
            (0, dp.$o)();
        }, []),
        (0, r.jsx)(d.Ip, {
            className: tM.nd,
            children: (0, r.jsxs)("div", {
                className: s_.l$,
                children: [
                    (0, r.jsxs)(C.E, {
                        style: { marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: [" ", "Manage Payment Sources", " "],
                    }),
                    (0, r.jsxs)("div", {
                        className: s_.Uo,
                        children: [
                            (0, r.jsx)(t6.Z, {
                                selectionMode: "single",
                                label: "Card Type",
                                value: e,
                                options: dF
                                    .filter((e) => !("disabled" in e && e.disabled))
                                    .map((e) => {
                                        let { value: t, label: a } = e;
                                        return {
                                            id: t,
                                            value: t,
                                            label: a,
                                            leading: (0, r.jsx)("img", {
                                                alt: "",
                                                className: dB.bI,
                                                src: (0, dM.t)(t),
                                            }),
                                        };
                                    }),
                                onSelectionChange: (e) => {
                                    t(e), g(dV[e][0].value), j(1 === dV[e].length);
                                },
                            }),
                            "US" === e &&
                                (0, r.jsx)(x.l, {
                                    selectionMode: "single",
                                    label: "US Address",
                                    hideLabel: !0,
                                    value: a,
                                    options: d$.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        n(e), s(dW[e] ?? null);
                                    },
                                }),
                            "CA" === e &&
                                (0, r.jsx)(x.l, {
                                    selectionMode: "single",
                                    label: "CA Address",
                                    hideLabel: !0,
                                    value: i,
                                    options: dz.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        c(e), m(dH[e] ?? null);
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
                                    onClick: _,
                                }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                size: "sm",
                                text: "Reset API Rate limits and reload app",
                                onClick: E,
                            }),
                        ],
                    }),
                    (0, r.jsx)(C.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Generate Gift Card PIN",
                    }),
                    (0, r.jsx)(d8, {}),
                    (0, r.jsx)(C.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Experiment Overrides",
                    }),
                    (0, r.jsx)(d0, {}),
                    (0, r.jsx)(C.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Existing Payment Sources",
                    }),
                    b.map((e) => (0, r.jsx)(d3, { paymentSource: e }, e.id)),
                ],
            }),
        })
    );
}
let dY = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0)" },
        { id: "1", value: "1", label: "Treatment (1)" },
    ],
    dq = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Legacy checkout" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Unified checkout" },
    ],
    dJ = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Gift cards disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Gift cards enabled" },
    ],
    dQ = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Payment elements disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Payment elements enabled" },
    ],
    dX = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Orb redemption via legacy" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Orb redemption via orders" },
    ];
function dZ(e) {
    let { experimentName: t, options: a = dY } = e,
        n = (0, tx.bG)([dP.A, nA.default], () => {
            let e = nA.default.getId(),
                a = dP.A.getAssignment("user", e, t);
            return a?.isOverride === !0 ? String(a.variantId) : "none";
        }),
        l = o.useCallback(
            (e) => {
                (0, dL.t$)(dL.l5.APEX, t, "none" === e ? null : Number(e));
            },
            [t],
        );
    return (0, r.jsx)(x.l, { selectionMode: "single", label: t, value: n, options: [...a], onSelectionChange: l });
}
function d0() {
    return (0, r.jsxs)(P.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsx)(dZ, { experimentName: dw.W2.definition.name, options: dq }),
            (0, r.jsx)(dZ, { experimentName: dw._$.definition.name, options: dq }),
            (0, r.jsx)(dZ, { experimentName: dR.A.definition.name, options: dJ }),
            (0, r.jsx)(dZ, { experimentName: dO._.definition.name, options: dQ }),
            (0, r.jsx)(dZ, { experimentName: dU.A.definition.name, options: dX }),
        ],
    });
}
let d1 = [
        { id: "US", value: "US", label: "United States (USD)" },
        { id: "CA", value: "CA", label: "Canada (CAD)" },
        { id: "FR", value: "FR", label: "France (EUR)" },
        { id: "GB", value: "GB", label: "United Kingdom (GBP)" },
        { id: "DE", value: "DE", label: "Germany (EUR)" },
    ],
    d2 = { US: "usd", CA: "cad", FR: "eur", GB: "gbp", DE: "eur" };
function d8() {
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
                    let t = await n6.Bo.post({
                        url: "/billing/gift-card/create-on-demand-pin",
                        body: { country: e, currency: d2[e], amount: v },
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
    return (0, r.jsxs)(P.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsxs)(P.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, r.jsx)(x.l, {
                        selectionMode: "single",
                        label: "Gift Card Country",
                        value: e,
                        options: d1,
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
                (0, r.jsxs)(P.B, {
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
            null != m && (0, r.jsx)(L.w, { type: "critical", children: m }),
        ],
    });
}
function d3(e) {
    let { paymentSource: t } = e,
        a = async () => {
            await n6.Bo.patch({ url: et.Rsh.BILLING_PAYMENT_SOURCE(t.id), body: { default: !0 }, rejectWithError: !1 }),
                await (0, dp.$o)();
        };
    return (0, r.jsxs)("div", {
        className: s_.bd,
        children: [
            (0, r.jsx)(dT.A, { locale: "en-US", paymentSource: t, showLabels: !0, showPaymentSourceIcon: !0 }, t.id),
            (0, r.jsx)("img", { alt: t.country, className: dB.bI, src: (0, dM.t)(t.country) }),
            t.isDefault
                ? (0, r.jsx)(C.E, { variant: "text-sm/medium", children: "(Default)" })
                : (0, r.jsx)(h.$, { variant: "secondary", size: "sm", text: "Set as Default", onClick: a }),
        ],
    });
}
var d6 = a(706712),
    d5 = a(367727),
    d4 = a(845886);
function d9() {
    return (0, r.jsx)(d.Ip, { className: d4.kL, children: (0, r.jsx)(d7, {}) });
}
function d7() {
    let e = o.useCallback(() => {
            (0, lI._N)(an.M.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, d5.FZ)(an.M.NITRO_TENURE_BADGE_LEVEL_UP),
        a = null != t ? new Date(t) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(G.D, { className: d4.wx, variant: "heading-lg/semibold", children: "Tenure Badges" }),
            (0, r.jsxs)("p", {
                children: [
                    "Level Up DC:\xa0",
                    null != a && (0, r.jsxs)("b", { children: ["Dismissed (", a.toLocaleDateString(), ")"] }),
                    null == a && (0, r.jsx)("b", { children: "Not Dismissed" }),
                ],
            }),
            (0, r.jsx)("div", {
                className: d4.PW,
                children: (0, r.jsx)(h.$, { variant: "primary", text: "Reset Level Up DC", onClick: e }),
            }),
        ],
    });
}
var ce = a(136722),
    ct = a(576705),
    ca = a(309010),
    cn = a(558393),
    cl = a(719366),
    cs = a(842681);
function ci(e) {
    let { title: t, can: a } = e,
        n = a ? r0.A : z.P,
        l = (0, r.jsx)("div", {
            className: w()(cs.v_, a ? cs.uU : cs.Ss),
            children: (0, r.jsx)(n, { className: cs.Kk }),
        });
    return (0, r.jsxs)("div", {
        className: cs.z8,
        children: [
            l,
            (0, r.jsx)("div", {
                className: cs.rv,
                children: (0, r.jsx)(C.E, { variant: "text-md/normal", children: t }),
            }),
        ],
    });
}
function cr() {
    let e = (0, B.bG)([ca.A], () => ca.A.getChannelId()),
        t = (0, B.bG)([a9.A], () => a9.A.getGuildId()),
        a = (0, B.bG)([ax.A], () => ax.A.getChannel(e)),
        n = (0, B.bG)([a4.A], () => a4.A.getGuild(t)),
        l = (0, B.bG)([ct.A], () => ct.A.computePermissions(a)),
        s = (0, B.bG)([ct.A], () => ct.A.computePermissions(n)),
        i = (0, ah.Ay)(a, !0),
        o = null != a ? (0, cl.mW)(a, !1) : null,
        d = null != n ? cn.A.getGuildPermissionSpecMap(n) : null,
        c = Object.values(o ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = ce.zy(l, a);
            return (0, r.jsx)(ci, { title: t, can: n }, t);
        }),
        u = Object.values(d ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = ce.zy(s, a);
            return (0, r.jsx)(ci, { title: t, can: n }, t);
        });
    return (0, r.jsx)("div", {
        className: w()(tM.nd, cs.nd),
        children: (0, r.jsxs)("div", {
            className: cs.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: cs.uW,
                    children: [
                        (0, r.jsx)(G.D, {
                            variant: "heading-md/semibold",
                            children: null != i ? `Permissions in ${i}` : "No channel selected",
                        }),
                        c,
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: cs.uW,
                    children: [
                        (0, r.jsx)(G.D, {
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
var co = a(873298),
    cd = a(775602),
    cc = a(363195),
    cu = a(885386),
    cm = a(631670),
    ch = a(817281),
    cx = a(955572),
    cp = a(56348),
    cg = a(385803),
    cv = a(381941);
let cj = [et.NJ8.DARK, et.NJ8.LIGHT, et.NJ8.DARKER, et.NJ8.MIDNIGHT],
    cb = [co.NS.COMPACT, co.NS.COZY, co.NS.DEFAULT];
function cf(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function cy() {
    let e,
        t =
            ((e = Q.default.getCurrentUser()),
            r6.Ay.canUseClientThemes(e) ? Object.keys(cg.ag).map((e) => Number(e)) : []),
        a = t.length > 0 && Math.random() > 0.7;
    try {
        if (a) {
            let e,
                a = [...t, null],
                n = cf(a);
            if (null != n) {
                let t = cg.ag[n];
                e = t?.theme ?? et.NJ8.DARK;
            } else e = cf([et.NJ8.DARK, et.NJ8.DARKER, et.NJ8.MIDNIGHT]);
            await ch.u_(
                { theme: e, backgroundGradientPresetId: n ?? void 0, customUserThemeSettings: void 0 },
                lI.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = cf(cj);
            await ch.u_(
                { theme: e, backgroundGradientPresetId: void 0, customUserThemeSettings: void 0 },
                lI.Sb.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function c_() {
    let e = tv.A.purchases,
        t = (0, eN.x9)(e),
        a = (0, eN.$W)(e),
        n = t.length > 0,
        l = a.length > 0;
    if (n || l)
        try {
            let e = {};
            n && (e.avatarDecoration = cf([...t, null])), l && (e.nameplate = cf([...a, null])), (0, ta.p)(e);
            let s = tn.A.getPendingChanges(),
                i = (0, cp.Sk)(s);
            await (0, cm._L)(i).finally(cm.pZ);
        } catch (e) {}
}
function cE() {
    try {
        let e = cf(et.hH7.FONT_SIZES);
        (0, cx.XS)(e);
        let t = cf(cv.qh);
        (0, cx.AC)(t);
        let a = cf(cb);
        cu.Xi.updateSetting(a);
    } catch (e) {}
}
function cC() {
    (0, ti.Bf)();
    let e = (0, B.bG)([Q.default], () => Q.default.getCurrentUser()),
        t = cu.eh.useSetting(),
        a = (0, B.bG)([cc.A], () => cc.A.theme),
        n = t.backgroundGradientPresetId,
        l = (0, B.bG)([tv.A], () => tv.A.purchases),
        s = (0, eN.x9)(l),
        i = (0, eN.$W)(l),
        d = e?.avatarDecoration?.skuId,
        c = e?.collectibles?.nameplate?.skuId,
        u = null != d ? (s.find((e) => e.skuId === d) ?? null) : null,
        m = null != c ? (i.find((e) => e.skuId === c) ?? null) : null,
        x = (0, B.bG)([tg.A], () => tg.A.getProduct(u?.skuId)),
        p = (0, B.bG)([tg.A], () => tg.A.getProduct(m?.skuId)),
        g = (0, B.bG)([cd.A], () => cd.A.fontSize),
        v = (0, B.bG)([cd.A], () => cd.A.messageGroupSpacing),
        j = cu.Xi.useSetting();
    return (
        o.useEffect(() => {
            let e = Q.default.getCurrentUser(),
                t = cu.eh.getSetting(),
                a = tv.A.purchases,
                n = (0, eN.x9)(a),
                l = (0, eN.$W)(a),
                s = cc.A.theme,
                i = t.backgroundGradientPresetId,
                r = e?.avatarDecoration?.skuId,
                o = e?.collectibles?.nameplate?.skuId,
                d = null != r ? (n.find((e) => e.skuId === r) ?? null) : null,
                c = null != o ? (l.find((e) => e.skuId === o) ?? null) : null,
                u = cd.A.fontSize,
                m = cd.A.messageGroupSpacing,
                h = cu.Xi.getSetting();
            return () => {
                try {
                    ch.u_(
                        { theme: s, backgroundGradientPresetId: i ?? void 0, customUserThemeSettings: void 0 },
                        lI.Sb.INFREQUENT_USER_ACTION,
                    ),
                        (0, ta.p)({ avatarDecoration: d, nameplate: c });
                    let e = tn.A.getPendingChanges(),
                        t = (0, cp.Sk)(e);
                    (0, cm._L)(t).finally(cm.pZ), (0, cx.XS)(u), (0, cx.AC)(m), cu.Xi.updateSetting(h);
                } catch (e) {}
            };
        }, []),
        (0, r.jsxs)("div", {
            className: lM.kL,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(G.D, {
                            variant: "heading-lg/semibold",
                            children: "Randomize customization settings",
                        }),
                        (0, r.jsx)(C.E, {
                            variant: "text-md/normal",
                            children:
                                "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state.",
                        }),
                        (0, r.jsx)(h.$, { variant: "primary", size: "sm", text: "Randomize Theme", onClick: cy }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: c_,
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: cE,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(G.D, { variant: "heading-lg/semibold", children: "Current Settings" }),
                        (0, r.jsxs)(C.E, { variant: "text-md/normal", children: ["Theme: ", a] }),
                        (0, r.jsxs)(C.E, {
                            variant: "text-md/normal",
                            children: ["Client Theme ID:", " ", null != n ? cg.ag[n]?.getName() : "None"],
                        }),
                        (0, r.jsxs)(C.E, {
                            variant: "text-md/normal",
                            children: ["Avatar Decoration: ", x?.name ?? "None"],
                        }),
                        (0, r.jsxs)(C.E, { variant: "text-md/normal", children: ["Nameplate: ", p?.name ?? "None"] }),
                        (0, r.jsxs)(C.E, { variant: "text-md/normal", children: ["Font Size: ", g, "px"] }),
                        (0, r.jsxs)(C.E, { variant: "text-md/normal", children: ["Message Spacing: ", v] }),
                        (0, r.jsxs)(C.E, {
                            variant: "text-md/normal",
                            children: [
                                "UI Density: ",
                                j,
                                " (",
                                (function (e) {
                                    switch (e) {
                                        case co.NS.COMPACT:
                                            return "Compact";
                                        case co.NS.COZY:
                                            return "Cozy";
                                        case co.NS.DEFAULT:
                                            return "Default";
                                        case co.NS.RESPONSIVE:
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
var cS = a(885574),
    cN = a(311678),
    cA = a(508274),
    ck = a(837529);
let cD = [5793266, 2303016],
    cI = [
        { id: "nitro", label: "Nitro", value: "nitro" },
        { id: "non-nitro", label: "Non-Nitro", value: "non-nitro" },
    ];
function cT() {
    let { themeOverride: e, setThemeOverride: t, savedClientTheme: a, setSavedClientTheme: n } = (0, ck.Zt)(),
        l = (0, es.Ay)(),
        s = (0, B.bG)([as.A], () => as.A.settings.appearance?.clientThemeSettings),
        i =
            s?.customUserThemeSettings != null &&
            null != s.customUserThemeSettings.colors &&
            s.customUserThemeSettings.colors.length > 0;
    function o() {
        null != a && ((0, ch.u_)({ theme: a.theme, customUserThemeSettings: a.customUserThemeSettings }), n(null));
    }
    return (0, r.jsx)(d.Ar, {
        children: (0, r.jsxs)(P.B, {
            gap: 16,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(cN.N, {
                            collapsibleContent: (0, r.jsxs)(P.B, {
                                gap: 8,
                                padding: 4,
                                children: [
                                    (0, r.jsx)(C.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children:
                                            "This panel allows you to override the theme and theme colors that are used when rendering user profiles. The overrides you set here will apply to all user profiles, not just your own.",
                                    }),
                                    (0, r.jsx)(C.E, {
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
                                    icon: cS.m,
                                    onClick: t,
                                });
                            },
                        }),
                        (0, r.jsx)(al.c, {}),
                    ],
                }),
                null == e
                    ? (0, r.jsx)(h.$, {
                          variant: "primary",
                          text: "Enable Theme Override",
                          onClick: () => t({ mode: "nitro", themeType: null, themeColors: cD }),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(sl.e, {
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
                                  options: cI,
                                  onSelectionChange: (a) => t({ ...e, mode: a }),
                              }),
                              "nitro" === e.mode
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(tI.d, {
                                                label: "Disable Banner",
                                                checked: !0 === e.disableBanner,
                                                onChange: (a) => t({ ...e, disableBanner: a }),
                                            }),
                                            (0, r.jsx)(h.$, {
                                                variant: "secondary",
                                                text: "Reset Colors",
                                                onClick: () => t({ ...e, themeColors: cD }),
                                            }),
                                            (0, r.jsxs)(P.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Primary Color",
                                                    }),
                                                    (0, r.jsx)(cA.VN, {
                                                        wrapperComponentType: "div",
                                                        showEyeDropper: !0,
                                                        eagerUpdate: !0,
                                                        value: e.themeColors?.[0] ?? 0,
                                                        onChange: (a) =>
                                                            t({ ...e, themeColors: [a, e.themeColors?.[1] ?? null] }),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)(P.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Secondary Color",
                                                    }),
                                                    (0, r.jsx)(cA.VN, {
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
                                  : (0, r.jsxs)(P.B, {
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(x.l, {
                                                label: "Theme Type",
                                                selectionMode: "single",
                                                value: e.themeType,
                                                options: Object.values(et.NJ8).map((e) => ({
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
                                                        (0, r.jsx)(C.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-feedback-warning",
                                                            children:
                                                                "You have an active custom theme so setting a theme type does nothing.",
                                                        }),
                                                        (0, r.jsx)(C.E, {
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
                                                                    (0, ch.u_)({ theme: "system" });
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            null != a &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsx)(C.E, {
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
var cR = a(141931),
    cO = a(306173),
    cw = a(587626),
    cM = a(237984),
    cL = a(43203),
    cP = a(349435),
    cU = a(674272),
    cG = a(466034),
    cB = a(10094),
    cF = a(683760);
let cV = () => {
    let e = (0, B.bG)([Q.default], () => Q.default.getCurrentUser()),
        t = (0, B.bG)([cF.A], () => {
            let e = cF.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        a = (0, B.bG)([cF.A], () => cF.A.getPremiumTypeOverride());
    return (0, r.jsxs)(P.B, {
        gap: 16,
        children: [
            (0, r.jsx)(x.l, {
                label: "Override Client-Side Premium Type",
                options: sp.Jm,
                value: a,
                onSelectionChange: (t) => {
                    (0, cB.O)(t, e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(lG.Q, {
                onClick: () => {
                    (0, cB.O)(sp.$I, e);
                },
                text: "Reset premium type override",
            }),
            (0, r.jsx)(ih.J, {
                label: "Override Client-Side Account Created At Date",
                value: nx()(t),
                onSelect: (e) => {
                    var t;
                    return (t = e.toISOString()), void (0, cB.Y)(new Date(t));
                },
            }),
            (0, r.jsx)(lG.Q, { onClick: () => (0, cB.Y)(void 0), text: "Reset account created at override" }),
        ],
    });
};
var c$ = a(19575),
    cW = a(327337),
    cz = a(431804),
    cH = a(865349),
    cK = a(818050);
function cY() {
    throw Error("Send help");
}
function cq() {
    let e = cu.j0.useSetting(),
        [t, n] = o.useState(!1);
    return t
        ? {}
        : (0, r.jsxs)(d.Ip, {
              children: [
                  (0, r.jsx)("div", { className: w()(cH.N, cK.SX), children: (0, r.jsx)(cV, {}) }),
                  (0, r.jsx)("div", {
                      className: w()(cH.N, cK.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () => (0, cU.A)({ source: cz.y.KEYBIND }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: w()(cH.N, cK.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e;
                              return (
                                  (e = ca.A.getChannelId() ?? "21154681615024128"),
                                  void (0, S.openModalLazy)(
                                      async () => {
                                          let { default: t } = await Promise.all([
                                              a.e("25028"),
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
                                                  warningType: cP._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                  ...a,
                                              });
                                      },
                                      { modalKey: cW.V },
                                  )
                              );
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: w()(cH.N, cK.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Captcha Test Tool",
                          onClick: () =>
                              void (0, S.openModalLazy)(
                                  async () => {
                                      let { default: e } = await a.e("17724").then(a.bind(a, 563255));
                                      return (t) => (0, r.jsx)(e, { ...t });
                                  },
                                  { onCloseCallback: void 0 },
                              ),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: w()(cH.N, cK.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Accept Invite Modal",
                          onClick: () => (0, cL.$)("fortnite", "DevTools Quick Actions"),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: w()(cH.N, cK.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: cO.Oy,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: w()(cH.N, cK.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Store Error",
                          onClick: () => {
                              let e = cw.A.getSocket();
                              tT.h.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((t) => {
                                  e.resetSocketOnDispatchError({ error: t, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
                              });
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: w()(cH.N, cK.QB),
                      children: (0, r.jsx)(tI.d, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => cu.j0.updateSetting(e),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: w()(cH.N, cK.QB),
                      children: [
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, cM.o)(),
                          }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Reset Socket",
                              onClick: () => {
                                  cw.A.getSocket().close(), cw.A.getSocket().connect();
                              },
                          }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Clear Caches",
                              onClick: () => {
                                  tT.h.dispatch({
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
                              onClick: () => (0, cG.sy)(!0),
                          }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Trigger Suspicious Sessions Notifications",
                              onClick: () => {
                                  n6.Bo.post({ url: et.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                              },
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: w()(cH.N, cK.QB),
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
                              onSelectionChange: (e) => null != e && c$.Ay.crash(e),
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
                                      value: cR.qQ.RendererProcessDelayed,
                                      id: "delayed_exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in renderer process",
                                      value: cR.qQ.RendererProcess,
                                      id: "exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in main process",
                                      value: cR.qQ.MainProcess,
                                      id: "exception_in_main_process",
                                  },
                              ],
                              onSelectionChange: (e) => (null != e ? void c$.Ay.triggerJSException(e) : void 0),
                          }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "React Crash",
                              onClick: () => n(!0),
                          }),
                          (0, r.jsx)(h.$, { variant: "primary", size: "sm", text: "onClick Throw", onClick: cY }),
                      ],
                  }),
              ],
          });
}
var cJ = a(593924),
    cQ = a(653887),
    cX = a(105596);
function cZ() {
    let e = Object.keys(cJ).map((e) => (0, r.jsx)(c2, { riveName: e }, e));
    return (0, r.jsx)(d.Ar, {
        style: { maxHeight: "100%" },
        children: (0, r.jsxs)(P.B, {
            gap: 24,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsx)(G.D, { variant: "heading-lg/medium", children: "Rive Inspector" }),
                (0, r.jsx)(C.E, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to view the animation and interact with its data binding configuration.",
                }),
                (0, r.jsx)(c0, {}),
                (0, r.jsx)(G.D, { variant: "heading-lg/medium", children: "Rive Overrides" }),
                (0, r.jsx)(C.E, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to replace an existing Rive animation in the app with the new one. Useful for previewing updated versions of existing animations before uploading them via the Rive pipeline.",
                }),
                e,
            ],
        }),
    });
}
function c0() {
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
    return (0, r.jsxs)(P.B, {
        gap: 16,
        children: [
            (0, r.jsx)(c2, { riveName: "Rive inspector", onRiveLoad: j }),
            null != e &&
                (0, r.jsx)("div", {
                    style: { width: u, height: h },
                    children: (0, r.jsx)(cQ._, { src: e, ref: c, onLoad: g, dynamicDataBinding: a ?? {} }),
                }),
            null != e && null == a ? (0, r.jsx)(e5.y, {}) : null,
            null != a &&
                (0, r.jsxs)(P.B, {
                    children: [
                        (0, r.jsxs)(P.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(G.D, { variant: "heading-lg/medium", children: "Dimensions" }),
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
                        (0, r.jsxs)(P.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(G.D, { variant: "heading-lg/medium", children: "Data Binding" }),
                                Object.keys(l ?? {}).map((e) =>
                                    (0, r.jsx)(
                                        c1,
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
function c1(e) {
    let { property: t, type: a, value: n, onChange: l, artboards: s } = e;
    return "string" === a
        ? (0, r.jsx)(p.k, { label: t, value: n, onChange: (e) => l(e) })
        : "number" === a
          ? (0, r.jsx)(p.k, { type: "number", label: t, value: n, onChange: (e) => l(parseInt(e)) })
          : "boolean" === a
            ? (0, r.jsx)(tI.d, { label: t, checked: n, onChange: (e) => l(e) })
            : "trigger" === a
              ? (0, r.jsx)(h.$, { text: `Trigger ${t}`, onClick: () => l(Number.isSafeInteger(n) ? n + 1 : 1) })
              : "image" === a
                ? (0, r.jsx)(p.k, { label: t, value: n, onChange: (e) => l(e) })
                : "color" === a
                  ? (0, r.jsx)(t6.Z, {
                        selectionMode: "single",
                        label: t,
                        value: n,
                        onSelectionChange: (e) => l(e),
                        closeOnSelect: !0,
                        placeholder: "Select a color...",
                        options: Object.entries(eL.A.colors).map((e) => {
                            let [t, a] = e;
                            return { label: t, value: a, id: t };
                        }),
                    })
                  : "artboard" === a
                    ? (0, r.jsx)(t6.Z, {
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
function c2(e) {
    let { riveName: t, onRiveLoad: a } = e,
        n = cJ[t]?.riveSrc,
        l = null == n,
        s = o.useRef(null),
        i = (0, cX.Gy)(n);
    return (0, r.jsxs)(
        P.B,
        {
            gap: 8,
            children: [
                (0, r.jsx)("label", { children: t }),
                (0, r.jsxs)(P.B, {
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
                                    null != n && (0, cX.DS)(n, t), a?.(t);
                                }),
                                    l.readAsArrayBuffer(t);
                            },
                            ref: s,
                        }),
                        (0, r.jsx)(eO.K, {
                            "aria-label": `Clear override for ${t}`,
                            onClick: () => {
                                null != s.current && (s.current.value = ""),
                                    null != n && (0, cX.DS)(n, null),
                                    a?.(null);
                            },
                            icon: nb.u,
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
var c8 = a(290136),
    c3 = a(106236),
    c6 = a(629584),
    c5 = a(600239),
    c4 = a(940622),
    c9 = a(961895),
    c7 = a(343991),
    ue = a(699666);
let ut = () => {
        (0, S.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(a.bind(a, 343991));
                return (t) =>
                    (0, r.jsx)(e, {
                        title: "No image or video files found!",
                        help: "Please drop one or more image or video files.",
                        ...t,
                    });
            },
            { modalKey: c7.D },
        );
    },
    ua = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    un = (e) => {
        let { className: t, onDrop: a, children: n } = e,
            [l, s] = o.useState(!1),
            i = o.useRef(null),
            d = o.useCallback((e) => {
                ua(e), s(!0), (0, S.closeModal)(c7.D);
            }, []),
            c = o.useCallback((e) => {
                ua(e);
                let t = i.current,
                    a = e.relatedTarget;
                (null != a && (null == t || t.contains(a))) || s(!1);
            }, []),
            u = o.useCallback(
                async (e) => {
                    ua(e), s(!1);
                    let t = e.dataTransfer;
                    if (null == t) return void ut();
                    let n = await Promise.all(
                        Array.from(t.items).map((e) => e.webkitGetAsEntry() ?? e.getAsEntry()),
                    ).then((e) => e.filter((e) => null != e));
                    n.length > 0 ? a(n) : ut();
                },
                [a],
            );
        return (0, r.jsxs)("div", {
            ref: i,
            className: w()(t, ue.iE),
            onDragEnter: d,
            onDragOver: ua,
            onDragLeave: c,
            onDrop: u,
            children: [
                n,
                l &&
                    (0, r.jsx)("div", {
                        className: ue.d2,
                        children: (0, r.jsxs)("div", {
                            className: ue.vW,
                            children: [
                                (0, r.jsx)(c9.A, { icons: eh.ir }),
                                (0, r.jsx)(G.D, { variant: "heading-lg/bold", children: "Upload Shop Assets" }),
                                (0, r.jsxs)("div", {
                                    className: ue.GA,
                                    children: [
                                        (0, r.jsx)(C.E, {
                                            variant: "text-sm/normal",
                                            children: "Drop file(s) into this panel to preview Shop assets!",
                                        }),
                                        (0, r.jsxs)(C.E, {
                                            variant: "text-sm/normal",
                                            children: [
                                                "Click",
                                                (0, r.jsx)(c8.c, {
                                                    className: ue.q4,
                                                    size: "xs",
                                                    color: eL.A.colors.TEXT_DEFAULT,
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
    },
    ul = new Set([
        ek.RN.HERO_BANNER_STATIC,
        ek.RN.HERO_LOGO,
        ek.RN.PDP_BACKGROUND,
        ek.RN.LOGO,
        ek.RN.MOBILE_BANNER,
        ek.RN.MOBILE_BACKGROUND,
    ]),
    us = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
    ui = { max: 5e6, warn: 2e6 },
    ur = { max: 3e6, warn: 1e6 },
    uo = { max: 2e6, warn: 1e6 },
    ud = { max: 1e6, warn: 5e5 },
    uc = { max: 25e4, warn: 5e4 },
    uu = {
        [ek.Jn.PROFILE_EFFECT]: ui,
        [ek.Jn.AVATAR_DECORATION]: ur,
        [ek.RN.HERO_BANNER_ANIMATED]: ui,
        [ek.RN.HERO_BANNER_RIVE]: ui,
        [ek.RN.CATALOG_BANNER_RIVE]: ui,
        [ek.RN.SHOP_BUTTON_BG_HOVER]: ur,
        [ek.RN.SHOP_BUTTON_BG_HOVER_DARK]: ur,
        [ek.RN.SHOP_BUTTON_BG_HOVER_LIGHT]: ur,
        [ek.RN.SHOP_BUTTON_BG_RESTING]: ur,
        [ek.RN.SHOP_BUTTON_BG_RESTING_DARK]: ur,
        [ek.RN.SHOP_BUTTON_BG_RESTING_LIGHT]: ur,
        [ek.RN.HERO_BANNER_STATIC]: uo,
        [ek.RN.UPSELL_BANNER]: ud,
        [ek.RN.UPSELL_BANNER_POPOUT]: uc,
        [ek.RN.MOBILE_BANNER]: ud,
        [ek.RN.MOBILE_BACKGROUND]: uc,
        [ek.RN.MOBILE_HERO]: ud,
        [ek.RN.PDP_BACKGROUND]: uc,
        [ek.RN.LOGO]: uc,
        [ek.RN.TAB_TOOLTIP]: uc,
    },
    um = async (e) => {
        let t = Object.values(ek.Kx),
            a = new Set(),
            n = e.createReader();
        for (let e of await new Promise((e) => n.readEntries(e))) e.isDirectory && t.includes(e.name) && a.add(e.name);
        return t.filter((e) => !a.has(e));
    },
    uh = (e) => {
        let { names: t, addError: a } = e,
            n = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/,
            l = t.filter((e) => !n.test(e));
        l.length > 0 && a("File names must be in lowercase snake case", l);
    },
    ux = (e, t, a, n) => {
        let l = t.size,
            s = l > 1e6 ? `${(l / 1e6).toFixed(2)}MB` : `${(l / 1e3).toFixed(2)}KB`,
            i = `${t.name} - ${s}`;
        if (l > e.max) {
            let t = e.max > 1e6 ? `${Math.round(e.max / 1e6)}MB` : `${Math.round(e.max / 1e3)}KB`;
            a("Files exceed the recommended size limit - make sure they are optimized!", [`${i} (max: ${t})`]);
        } else l > e.warn && n("Files are a tad chonky - are you sure they're optimized?", [`${i}`]);
    },
    up = (e, t, a, n) => {
        let l = uu[e];
        if (null != l) for (let e of t) e.name.endsWith(".txt") || ux(l, e, a, n);
    },
    ug = (e) => {
        let t = ek.aL[e];
        return `${e} (${t.map((e) => `.${e}`).join(", ")})`;
    };
var uv = a(981388);
let uj = o.createContext({ setDropHandler: () => {} }),
    ub = [
        { name: "Preview", value: "preview" },
        { name: "Validate", value: "validate" },
    ],
    uf = { id: "none", label: "[none selected]", value: null },
    uy = () => {
        (0, S.hasModalOpen)(c5.k)
            ? (0, S.closeModal)(c5.k)
            : (0, S.openModalLazy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: c5.k, onCloseRequest: () => (0, S.closeModal)(c5.k) },
              );
    },
    u_ = () => {
        (0, S.hasModalOpen)(c5.g)
            ? (0, S.closeModal)(c5.g)
            : (0, S.openModalLazy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: c5.g, onCloseRequest: () => (0, S.closeModal)(c5.g) },
              );
    },
    uE = () => {
        let e = (0, eD.pF)(),
            { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: a } = (0, c4.JE)(),
            n = o.useMemo(() => [uf, ...e.map((e) => ({ id: e.skuId, label: e.name, value: e.skuId }))], [e]);
        return (0, r.jsxs)("div", {
            className: uv.kO,
            children: [
                (0, r.jsx)(am.h, { size: 16 }),
                (0, r.jsxs)("div", {
                    className: uv.wR,
                    children: [
                        (0, r.jsx)(G.D, { variant: "heading-md/bold", children: "Preview Profile Effect" }),
                        (0, r.jsx)(eO.K, {
                            variant: "icon-only",
                            size: "sm",
                            onClick: u_,
                            icon: c8.c,
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
    uC = () => {
        let { previewAvatarDecorationKey: e, setPreviewAvatarDecorationKey: t } = (0, c4.JE)(),
            { avatarDecorationAssets: a } = (0, c4.NE)(),
            n = o.useMemo(() => a.map((e) => ({ id: e.name, label: e.name, value: e.name })), [a]);
        return 0 === a.length
            ? null
            : (0, r.jsxs)("div", {
                  className: uv.kO,
                  children: [
                      (0, r.jsx)(am.h, { size: 16 }),
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
    uS = new Set([ek.RN.HERO_BANNER_STATIC, ek.RN.HERO_BANNER_ANIMATED, ek.RN.HERO_BANNER_RIVE]),
    uN = (e) => {
        let { clearAssets: t, clearIgnoredFiles: a } = e,
            { collectionAssets: n } = (0, c4.NE)(),
            {
                deleteCollectionAsset: l,
                clearAssets: s,
                heroLogoMaxHeight: i,
                setHeroLogoMaxHeight: d,
                heroResponsive: c,
                setHeroResponsive: u,
            } = (0, c4.JE)(),
            m = o.useMemo(() => Object.values(n).map((e) => ({ label: e.name, value: e.type })), [n]),
            x = m.some((e) => e.value === ek.RN.HERO_LOGO),
            p = m.some((e) => uS.has(e.value)),
            g = o.useCallback((e) => l(e), [l]),
            v = o.useCallback(() => {
                s(), t(), a();
            }, [s, t, a]);
        return 0 === m.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(am.h, { size: 16 }),
                      (x || p) &&
                          (0, r.jsxs)("div", {
                              className: uv.v7,
                              children: [
                                  x &&
                                      (0, r.jsxs)("div", {
                                          className: uv.cj,
                                          children: [
                                              (0, r.jsx)(C.E, {
                                                  variant: "text-md/normal",
                                                  className: uv.Me,
                                                  children: "Logo size",
                                              }),
                                              (0, r.jsx)(c3.A, {
                                                  className: uv.TQ,
                                                  minValue: 90,
                                                  maxValue: 200,
                                                  initialValue: i ?? 90,
                                                  handleSize: 10,
                                                  onValueChange: (e) => d(Math.round(e)),
                                                  onValueRender: (e) => `${Math.round(e)}px`,
                                                  "aria-label": "Hero logo max height",
                                              }),
                                              (0, r.jsx)(C.E, { variant: "text-sm/normal", children: `${i ?? 90}px` }),
                                          ],
                                      }),
                                  p &&
                                      (0, r.jsxs)("div", {
                                          className: uv.sy,
                                          children: [
                                              (0, r.jsx)(tI.d, { checked: c, onChange: u }),
                                              (0, r.jsx)(C.E, {
                                                  variant: "text-md/normal",
                                                  children: "Responsive Hero",
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                      (0, r.jsx)(am.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: uv.wR,
                          children: [
                              (0, r.jsx)(G.D, { variant: "heading-lg/bold", children: "Uploaded Assets" }),
                              (0, r.jsx)(h.$, {
                                  variant: "critical-primary",
                                  size: "sm",
                                  onClick: v,
                                  text: "Clear All",
                              }),
                          ],
                      }),
                      (0, r.jsx)("ul", {
                          children: m.map((e) =>
                              (0, r.jsxs)(
                                  "li",
                                  {
                                      className: uv._0,
                                      children: [
                                          (0, r.jsx)(eO.K, {
                                              variant: "icon-only",
                                              size: "sm",
                                              onClick: () => g(e.value),
                                              icon: z.P,
                                              "aria-label": "Remove asset",
                                          }),
                                          (0, r.jsx)(C.E, { variant: "text-md/normal", children: e.label }),
                                      ],
                                  },
                                  e.value,
                              ),
                          ),
                      }),
                  ],
              });
    },
    uA = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: a } = e;
        return 0 === t.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(am.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: uv.wR,
                          children: [
                              (0, r.jsx)(G.D, { variant: "heading-lg/bold", children: "Ignored Files" }),
                              (0, r.jsx)(h.$, { variant: "primary", size: "sm", onClick: a, text: "Clear" }),
                          ],
                      }),
                      (0, r.jsx)("ul", {
                          children: t.map((e, t) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      className: uv.yk,
                                      children: (0, r.jsx)(C.E, { variant: "text-md/normal", children: e }),
                                  },
                                  `${e}-${t}`,
                              ),
                          ),
                      }),
                  ],
              });
    },
    uk = () => {
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
                                let n = await um(t);
                                if (n.length > 0) return void i("Missing required directories", n);
                                (a = await (0, ek.eg)([t])),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        for (let e of t.collectionFiles) {
                                            let t = (0, ek.pd)(e),
                                                l = null != t ? uu[t] : null;
                                            null != l && ux(l, e, a, n);
                                        }
                                        uh({ names: t.collectionFiles.map((e) => e.name), addError: a });
                                        let l = new Set(
                                                t.collectionFiles.map((e) => (0, ek.pd)(e)).filter((e) => null != e),
                                            ),
                                            s = Array.from(ul)
                                                .filter((e) => !l.has(e))
                                                .map(ug);
                                        s.length > 0 && a("Missing required files", s);
                                        let i = Object.values(ek.RN)
                                            .filter((e) => !ul.has(e))
                                            .filter((e) => !l.has(e))
                                            .map(ug);
                                        i.length > 0 && n("Missing optional assets", i);
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        uh({ names: Object.keys(t.profileEffectFilesMap), addError: a }),
                                            Object.entries(t.profileEffectFilesMap).forEach((e) => {
                                                let [t, l] = e,
                                                    s = l.map((e) => e.name);
                                                uh({
                                                    names: s.map((e) => {
                                                        let t = e.indexOf("-");
                                                        return e.substring(0, t > 0 ? t : e.length);
                                                    }),
                                                    addError: a,
                                                }),
                                                    up(ek.Jn.PROFILE_EFFECT, l, a, n);
                                                let i = us
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
                                                        (e) => !us.some((t) => e.startsWith(t)) && !e.endsWith(".txt"),
                                                    )
                                                    .map((e) => `${t}/${e}`);
                                                r.length > 0 && n("Contains unrecognized files", r);
                                            });
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        uh({ names: t.avatarDecorationFiles.map((e) => e.name), addError: a }),
                                            up(ek.Jn.AVATAR_DECORATION, t.avatarDecorationFiles, a, n);
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
            { setDropHandler: u } = o.useContext(uj),
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
                              className: uv._f,
                              children: [
                                  (0, r.jsx)(C.E, {
                                      variant: "text-md/normal",
                                      color: d ? "text-feedback-critical" : "text-default",
                                      children: `${s.length} errors`,
                                  }),
                                  (0, r.jsx)(C.E, {
                                      variant: "text-md/normal",
                                      color: c ? "text-feedback-warning" : "text-default",
                                      children: `${i.length} warnings`,
                                  }),
                                  (0, r.jsx)(h.$, { variant: "primary", size: "sm", onClick: t, text: "Reset" }),
                              ],
                          })
                        : (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Drop asset folder to validate." }),
                    (0, r.jsx)(am.h, { size: 16 }),
                    d &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(G.D, { variant: "heading-lg/bold", children: "Errors" }),
                                (0, r.jsx)(am.h, { size: 8 }),
                                (0, r.jsx)("ul", {
                                    className: uv.ck,
                                    children: s.map((e, t) => {
                                        let [a, n] = e;
                                        return (0, r.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-critical",
                                                        children: a,
                                                    }),
                                                    n.length > 0 &&
                                                        (0, r.jsx)("ul", {
                                                            className: uv.ck,
                                                            children: n.map((e, t) =>
                                                                (0, r.jsx)(
                                                                    "li",
                                                                    {
                                                                        children: (0, r.jsx)(C.E, {
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
                                (0, r.jsx)(G.D, { variant: "heading-lg/bold", children: "Warnings" }),
                                (0, r.jsx)(am.h, { size: 8 }),
                                (0, r.jsx)("ul", {
                                    className: uv.ck,
                                    children: Object.entries(n).map((e, t) => {
                                        let [a, n] = e;
                                        return (0, r.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-warning",
                                                        children: a,
                                                    }),
                                                    n.length > 0 &&
                                                        (0, r.jsx)("ul", {
                                                            className: uv.ck,
                                                            children: n.map((e, t) =>
                                                                (0, r.jsx)(
                                                                    "li",
                                                                    {
                                                                        children: (0, r.jsx)(C.E, {
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
    uD = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: a } = (0, c4.JE)(),
            { ignoredFilenames: n, clearAssets: l, clearIgnoredFilenames: s, processAndUpsertAssets: i } = (0, ek.ds)(),
            { setDropHandler: d } = o.useContext(uj),
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
                    (0, r.jsx)(C.E, {
                        variant: "text-md/normal",
                        children: "Drop files in this panel to begin preview.",
                    }),
                    (0, r.jsxs)("div", {
                        className: uv.sy,
                        children: [
                            (0, r.jsx)(tI.d, { checked: e, onChange: (e) => t(e) }),
                            (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Enable Preview" }),
                            (0, r.jsx)(eO.K, {
                                variant: "icon-only",
                                size: "sm",
                                onClick: uy,
                                icon: c8.c,
                                "aria-label": "Open preview instructions",
                            }),
                        ],
                    }),
                    (0, r.jsx)(uE, {}),
                    (0, r.jsx)(uC, {}),
                    (0, r.jsx)(uN, { clearAssets: l, clearIgnoredFiles: s }),
                    (0, r.jsx)(uA, { ignoredFiles: n, handleClearIgnoredFiles: s }),
                ],
            })
        );
    },
    uI = () => {
        let [e, t] = o.useState("preview");
        return (0, r.jsxs)("div", {
            className: uv.kL,
            children: [
                (0, r.jsx)(c6.I, {
                    options: ub,
                    value: e,
                    onChange: (e) => {
                        let { value: a } = e;
                        return t(a);
                    },
                    className: uv.Vj,
                    optionClassName: uv.UK,
                }),
                (0, r.jsx)(am.h, { size: 8 }),
                "preview" === e && (0, r.jsx)(uD, {}),
                "validate" === e && (0, r.jsx)(uk, {}),
                (0, r.jsx)(am.h, { size: 16 }),
            ],
        });
    },
    uT = (e) => {
        let { children: t } = e,
            [a, n] = o.useState(() => () => {}),
            l = o.useMemo(() => ({ setDropHandler: (e) => n(() => e) }), []);
        return (0, r.jsx)(uj.Provider, { value: l, children: (0, r.jsx)(un, { onDrop: a, children: t }) });
    };
var uR = a(663803),
    uO = a(859040),
    uw = a(385815);
let uM = () => {
    let e = (0, B.bG)([tg.A], () => tg.A.skipNumCategories);
    return (0, r.jsxs)("div", {
        className: uw.k,
        children: [
            (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Hide first # of categories" }),
            (0, r.jsx)(uR.l, {
                value: e,
                onChange: (e) => {
                    (0, uO.ue)(e);
                },
                minValue: 0,
                maxValue: 100,
            }),
        ],
    });
};
var uL =
        (((n = {}).DEFAULT = "default"),
        (n.DEFAULT_WITH_ORB_SHELF = "default_with_orb_shelf"),
        (n.ORB_TAB = "orb_tab"),
        (n.FRAMES = "frames"),
        (n.FRAMES_PINNED = "frames_pinned"),
        n),
    uP = a(295811),
    uU = a(172471);
let uG = () => {
        let e = (0, B.bG)([uP.A], () => uP.A.getShopHomeConfigOverride()),
            t = [
                { id: "none", label: "DISABLED (no override)", value: void 0 },
                ...Object.values(uL).map((e) => ({ id: e, label: e, value: e })),
            ];
        return (0, r.jsx)("div", {
            className: uU.kL,
            children: (0, r.jsx)(x.l, {
                label: "Shop Home Override",
                options: t,
                value: e,
                onSelectionChange: (e) => {
                    (0, uO.Or)(e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
        });
    },
    uB = () => {
        let [e, t] = o.useState(void 0);
        return (0, r.jsxs)("div", {
            className: w()(uU.kL, uU.fi),
            children: [
                (0, r.jsx)(p.k, {
                    fullWidth: !0,
                    label: "Shop Layout URL Override",
                    value: e,
                    onChange: (e) => ("" === e ? t(void 0) : t(e)),
                    placeholder: "https://cdn.discordapp.com/assets/content/...",
                }),
                (0, r.jsxs)("div", {
                    className: uU.o1,
                    children: [
                        (0, r.jsx)(h.$, {
                            variant: "critical-primary",
                            text: "Clear",
                            onClick: () => {
                                t(void 0), (0, uO.Aq)(void 0);
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Set",
                            onClick: () => (0, uO.Aq)("" !== e ? e : void 0),
                        }),
                    ],
                }),
            ],
        });
    },
    uF = (e) => {
        let { className: t } = e,
            a = Object.keys(an.M).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
        return null == a
            ? null
            : (0, r.jsxs)("div", {
                  className: t,
                  children: [
                      (0, r.jsx)(G.D, { variant: "heading-md/semibold", children: "Shop Marketing" }),
                      (0, r.jsx)("div", { style: { zIndex: 1 }, children: (0, r.jsx)(lA, { items: [a] }) }),
                  ],
              });
    };
var uV = a(922529),
    u$ = a(628917);
let uW = () => {
        let e = (0, B.bG)([lw.A], () => lw.A.get("shop_disable_cache")),
            t = (0, B.bG)([lw.A], () => lw.A.get("shop_include_unpublished"));
        return (0, r.jsx)(uT, {
            children: (0, r.jsxs)("div", {
                className: u$.Lm,
                children: [
                    (0, r.jsxs)("div", {
                        className: u$.gf,
                        children: [
                            (0, r.jsx)(tI.d, {
                                label: "Disable collectibles cache",
                                checked: e,
                                onChange: (e) => (0, lO.L)("shop_disable_cache", e),
                            }),
                            (0, r.jsx)(tI.d, {
                                label: "Show unpublished collectibles",
                                checked: t,
                                onChange: (e) => (0, lO.L)("shop_include_unpublished", e),
                            }),
                        ],
                    }),
                    (0, r.jsx)(uF, { className: u$._l }),
                    (0, r.jsxs)("div", {
                        className: u$._l,
                        children: [
                            (0, r.jsx)(G.D, { variant: "heading-md/semibold", children: "Shop Overrides" }),
                            (0, r.jsx)(uG, {}),
                            (0, r.jsx)(uV.A, { className: u$.yF }),
                            (0, r.jsx)(uB, {}),
                            (0, r.jsx)(uV.A, { className: u$.yF }),
                            (0, r.jsx)(uM, {}),
                            (0, r.jsx)(uV.A, { className: u$.yF }),
                            (0, r.jsx)(uI, {}),
                        ],
                    }),
                ],
            }),
        });
    },
    uz = [
        { id: "unset", label: "Unset", value: co.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET },
        { id: "all", label: "All", value: co.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
        { id: "usersWithGame", label: "Users With Game", value: co.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
        { id: "none", label: "None", value: co.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
    ];
function uH() {
    let e = o.useRef(null),
        t = cu.TA.useSetting();
    return (0, r.jsx)("div", {
        ref: e,
        className: w()(tM.nd, aR.n),
        children: (0, r.jsxs)("div", {
            className: aR.k,
            children: [
                (0, r.jsx)(G.D, { variant: "heading-lg/normal", children: "Settings" }),
                (0, r.jsx)(x.l, {
                    label: "Receive DMs In Game",
                    options: uz,
                    value: t,
                    onSelectionChange: cu.TA.updateSetting,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
var uK = a(278416),
    uY = a(220631);
function uq(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function uJ(e) {
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
        (0, r.jsx)(d.Ip, { className: uY.Dx, children: (0, r.jsx)(aH, { data: n }) })
    );
}
function uQ(e) {
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
                for (let e of n.preDispatches ?? []) tT.h.dispatch(e);
                tT.h.dispatch({ ...n.buildPayload(e), type: n.actionType }), i();
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
                for (let t of e.preDispatches ?? []) tT.h.dispatch(t);
                tT.h.dispatch({ ...e.buildPayload(t), type: e.actionType }), i();
            } catch (e) {
                s(e instanceof Error ? e.message : String(e));
            }
        }, [t, i]);
    return (0, r.jsxs)("div", {
        className: w()(uY.Dx, uY.Ef),
        children: [
            (0, r.jsx)("textarea", {
                className: uY.Vz,
                value: a,
                onChange: (e) => n(e.target.value),
                spellCheck: !1,
                "aria-label": "Edit local variables as JSON",
            }),
            null != l && (0, r.jsx)("div", { className: uY.Xf, role: "alert", children: l }),
            (0, r.jsxs)("div", {
                className: uY.KA,
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
let uX = [
    {
        key: "name",
        cellClassName: uY.__invalid_eventColumn,
        render(e) {
            let { store: t } = e;
            return t.getName();
        },
    },
];
function uZ(e) {
    let { store: t, initialHeight: a } = e,
        n = o.useMemo(() => {
            let e;
            return (
                (e = [
                    {
                        id: "local",
                        name: "Local Variables",
                        group: aQ.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVars
                                ? (0, r.jsxs)("div", {
                                      className: uY.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVars" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(uJ, { store: t, dataGetter: (e) => e.__getLocalVars() });
                        },
                    },
                    {
                        id: "instance",
                        name: "Store Instance",
                        group: aQ.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return (0, r.jsx)(uJ, { store: t, dataGetter: (e) => e });
                        },
                    },
                ]),
                null != t.__getLocalVars &&
                    e.push({
                        id: "edit-local",
                        name: "Edit Local Variables",
                        group: aQ.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVarsEditConfig
                                ? (0, r.jsxs)("div", {
                                      className: uY.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVarsEditConfig" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(uQ, { store: t });
                        },
                    }),
                e
            );
        }, [t]),
        { TabBar: l, renderSelectedTab: s } = (0, aQ.Ay)({ tabs: n }, []);
    return (0, r.jsxs)(aJ, {
        className: uY.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(aU.Ay, {
                className: w()(tM.jr, uY.nZ),
                children: [
                    (0, r.jsx)(aU.Ay.Icon, { icon: uK.g, tooltip: t.getName() }),
                    (0, r.jsx)(aU.Ay.Title, { children: t.getName() }),
                ],
            }),
            s({ store: t }),
        ],
    });
}
function u0() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = B.il.getAll(),
        l = o
            .useMemo(() => n.map((e) => ({ key: e._dispatchToken, store: e })).sort(uq), [n])
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
        className: w()(tM.nd, uY.nd),
        children: [
            (0, r.jsx)("div", {
                className: uY.KE,
                children: (0, r.jsx)(nf.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, r.jsx)(tL, { columns: uX, data: l, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != d &&
                (0, r.jsx)(uZ, { store: d, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }, s),
        ],
    });
}
var u1 = a(91871),
    u2 = a.n(u1);
let u8 = [
        {
            key: "id",
            cellClassName: nG.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "bucket",
            cellClassName: nG.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "timestamp",
            cellClassName: nG.QN,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    u3 = [
        {
            id: "details",
            name: "Details",
            group: aQ.fu.NONE,
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
                    d = nx()(s);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(aU.Ay, {
                            className: w()(tM.jr, nG.nZ),
                            children: [
                                (0, r.jsx)(aU.Ay.Icon, { icon: nv.U, tooltip: t }),
                                (0, r.jsx)(aU.Ay.Title, { children: t }),
                            ],
                        }),
                        (0, r.jsxs)(nL, {
                            className: nG.ZK,
                            children: [
                                (0, r.jsx)(nP, {
                                    name: "Timestamp (local)",
                                    children: (0, r.jsx)("time", {
                                        dateTime: s.toISOString(),
                                        title: (0, nS.i$)(d, "LLLL"),
                                        children: (0, nS.mk)(d),
                                    }),
                                }),
                                "guild" === a.type &&
                                    (0, r.jsx)(nP, {
                                        name: "Guild ID",
                                        children: (0, r.jsx)("code", { children: a.guildId }),
                                    }),
                                (0, r.jsx)(nP, {
                                    name: "Bucket",
                                    children: (0, r.jsx)("code", { children: a.bucket }),
                                }),
                                (0, r.jsx)(nP, {
                                    name: "Revision",
                                    children: (0, r.jsx)("code", { children: a.revision }),
                                }),
                                (0, r.jsx)(nP, { name: "Override", children: (0, r.jsx)(nU, { value: a.override }) }),
                                (0, r.jsx)(nP, {
                                    name: "Exposure type",
                                    children: (0, r.jsx)("code", { children: n }),
                                }),
                                (0, r.jsx)(nP, { name: "Excluded", children: (0, r.jsx)(nU, { value: l }) }),
                                (0, r.jsx)(nP, { name: "Previously tracked", children: (0, r.jsx)(nU, { value: o }) }),
                                (0, r.jsx)(nP, { name: "Location", children: (0, r.jsx)("code", { children: i }) }),
                            ],
                        }),
                    ],
                });
            },
        },
    ];
function u6() {
    let [e, t] = o.useState(""),
        a = o.useRef(null),
        n = (0, B.yK)([nw], () => nw.loggedTriggers),
        l = o.useMemo(
            () =>
                n
                    .filter((t) => 0 === e.length || u2()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [n, e],
        ),
        [s, i] = o.useState(void 0),
        d = l.find((e) => e.key === s),
        { TabBar: c, renderSelectedTab: u } = (0, aQ.Ay)({ tabs: u3 }, []),
        m = (0, B.bG)([nw], () => nw.trackTriggers),
        h = o.useCallback((e) => {
            tT.h.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
        }, []),
        x = m ? "Stop Tracking" : "Start Tracking";
    return (0, r.jsxs)("div", {
        ref: a,
        className: w()(tM.nd, nG.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nG.rh,
                children: [
                    (0, r.jsx)(lQ.m, {
                        text: x,
                        children: (0, r.jsx)(eO.K, {
                            size: "sm",
                            variant: m ? "active" : "primary",
                            icon: m ? l0.E : lZ.u,
                            "aria-label": x,
                            onClick: () => h(!m),
                        }),
                    }),
                    (0, r.jsx)(nf.I, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, r.jsx)(eO.K, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": nt.intl.string(nt.t.VkKicb),
                        icon: nb.u,
                        onClick: F.eY,
                    }),
                ],
            }),
            (0, r.jsx)(tL, { columns: u8, data: l, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != d &&
                (0, r.jsxs)(aJ, {
                    className: nG.rf,
                    minHeight: 100,
                    initialHeight: null != a.current ? a.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(c, {}), u({ loggedTrigger: d })],
                }),
        ],
    });
}
var u5 = a(512950),
    u4 = a(324861),
    u9 = a(243655);
let u7 = function () {
    let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, u4.A)();
    return (0, r.jsx)("div", {
        className: u9.k,
        children: (0, r.jsxs)(u.n, {
            label: "Virtual Currency Configuration",
            description: "Click the button below to reset your onboarding state for Virtual Currency.",
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(h.$, {
                        text: "Reset Onboarding State",
                        onClick: () => {
                            e(), t(), (0, a_.pX)(et.BVt.APP);
                        },
                    }),
                }),
                (0, r.jsx)(u5.p, {
                    messageType: u5.Y.INFO,
                    children:
                        "Your may have to refresh your client after being redirected to the main application in order to see these",
                }),
            ],
        }),
    });
};
var me = a(899e3),
    mt = a(761853),
    ma = a(731854);
let mn = [
        ["codecH264", "H264"],
        ["codecH265", "H265 / HEVC"],
        ["codecAv1", "AV1"],
    ],
    ml = [
        ["encNvidiaDx11", "NVIDIA Direct3D 11"],
        ["encNvidiaCuda", "NVIDIA CUDA"],
        ["encAmdDx11", "AMD Direct3D 11"],
        ["encIntelDx11", "Intel Direct3D 11"],
        ["encIntelCpu", "Intel CPU"],
        ["encWmfCpu", "Media Foundation CPU"],
        ["encWmfGpu", "Media Foundation GPU"],
        ["encWmfDx11", "Media Foundation Direct3D 11 (NYI)"],
    ],
    ms = [
        ["capGraphicsCapture", "WGC / Windows Graphics Capture"],
        ["capDxgi", "DDA / DXGI Output Duplication"],
        ["capGdi", "GDI / PrintWindow + BitBlt"],
        ["capVideoHook", "Video Hook"],
    ],
    mi = [
        ["bypassHybridGpuFpsRestriction", "WGC: Bypass Hybrid-GPU 60 FPS Restriction"],
        ["gdiForceBitblt", "GDI: Force Allow BitBlt"],
        ["allowHdr", "Allow HDR Capture"],
    ];
function mr(e) {
    let { title: t, toggles: a, state: n } = e;
    return (0, r.jsxs)(P.B, {
        gap: 8,
        children: [
            (0, r.jsx)(C.E, { variant: "text-lg/bold", children: t }),
            a.map((e) => {
                let [t, a] = e;
                return (0, r.jsx)(rK.S, { label: a, checked: !!n[t], onChange: () => (0, me.yn)({ [t]: !n[t] }) }, t);
            }),
        ],
    });
}
function mo() {
    let e = (0, B.bG)([me.Ay], () => me.Ay.getSnapshot()),
        t = (0, B.bG)([mt.Ay], () => mt.Ay.supports(ma.O5.VIDEO));
    return (0, r.jsxs)(d.Ip, {
        className: tM.nd,
        children: [
            (0, r.jsx)(al.c, { gap: 16 }),
            (0, r.jsx)(mr, { title: "Video Codecs (Sender)", toggles: mn, state: e }),
            t
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(al.c, { gap: 16 }),
                          (0, r.jsx)(mr, { title: "Video Encoders", toggles: ml, state: e }),
                          (0, r.jsx)(al.c, { gap: 16 }),
                          (0, r.jsx)(mr, { title: "Capture Sources", toggles: ms, state: e }),
                          (0, r.jsx)(al.c, { gap: 16 }),
                          (0, r.jsx)(mr, { title: "Capture Options", toggles: mi, state: e }),
                      ],
                  })
                : null,
            (0, r.jsx)(al.c, { gap: 16 }),
            (0, r.jsx)(mr, {
                title: "Preview",
                toggles: [["alwaysShowCapturePreview", "Always Show (ignore main window focus)"]],
                state: e,
            }),
            (0, r.jsx)(al.c, { gap: 16 }),
        ],
    });
}
var md = a(77729),
    mc = a(36934);
function mu() {
    let [e, t] = o.useState(""),
        [a, n] = o.useState(""),
        [l, s] = o.useState({ status: "idle", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
        i = "processing" === l.status;
    return (0, r.jsx)(d.Ip, {
        className: tM.nd,
        children: (0, r.jsxs)("div", {
            className: mc.l7,
            children: [
                (0, r.jsx)(C.E, { variant: "text-lg/bold", children: "Batch Audio Processor" }),
                (0, r.jsx)(C.E, {
                    variant: "text-sm/normal",
                    children:
                        "Process wav files through the Discord audio ingest pipeline (WebRTC APM, Krisp, voice filters) and write output to wav files.",
                }),
                (0, r.jsxs)(P.B, {
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
                                let e = await md.A.fileManager.showOpenDialog({ properties: ["openDirectory"] });
                                e.length > 0 && t(e[0]);
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)(P.B, {
                    direction: "horizontal",
                    align: "end",
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.k, { fullWidth: !0, value: a, onChange: n, placeholder: "Output directory" }),
                        (0, r.jsx)(h.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await md.A.fileManager.showOpenDialog({
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
                              mt.Ay.getMediaEngine().cancelBatchAudioProcessing(),
                                  s((e) => ({ ...e, status: "cancelled" }));
                          }
                        : function () {
                              "" !== e &&
                                  "" !== a &&
                                  (s({ status: "processing", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
                                  mt.Ay.getMediaEngine().processBatchAudioFiles(
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
                    (0, r.jsxs)(P.B, {
                        gap: 4,
                        children: [
                            (0, r.jsxs)(C.E, {
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
                                            className: mc.TZ,
                                            children: (0, r.jsxs)(C.E, {
                                                variant: "text-xs/normal",
                                                className: e.success ? mc.$D : mc.uL,
                                                children: [e.success ? "OK" : "FAIL", " - ", e.filename],
                                            }),
                                        },
                                        t,
                                    ),
                                ),
                            l.log.length > 20 &&
                                (0, r.jsxs)(C.E, {
                                    variant: "text-xs/normal",
                                    children: ["...and ", l.log.length - 20, " more"],
                                }),
                        ],
                    }),
            ],
        }),
    });
}
var mm = a(207898),
    mh = a.n(mm),
    mx = a(32880),
    mp = a(827343),
    mg = a(964486),
    mv = a(602674),
    mj = a(625841),
    mb = a(74848),
    mf = a(573908);
function my(e) {
    let { recording: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(C.E, { variant: "text-sm/normal", children: ["Duration: ", t.audioBuffer.duration] }),
            (0, r.jsxs)(C.E, {
                variant: "text-sm/normal",
                children: ["Num Channels: ", t.audioBuffer.numberOfChannels],
            }),
            (0, r.jsxs)(C.E, { variant: "text-sm/normal", children: ["Sample Rate: ", t.audioBuffer.sampleRate] }),
            (0, r.jsxs)(C.E, { variant: "text-sm/normal", children: ["Noise Suppression: ", t.suppression] }),
            (0, r.jsxs)(C.E, {
                variant: "text-sm/normal",
                children: ["Krisp Suppression Level: ", t.krispSuppressionLevel],
            }),
            (0, r.jsxs)(C.E, {
                variant: "text-sm/normal",
                children: ["Echo Cancellation: ", String(t.echoCancellation)],
            }),
        ],
    });
}
function m_(e) {
    let { recording: t, playing: a, onPlay: n, onStop: l } = e;
    return (0, r.jsx)(cN.N, {
        collapsibleContent: (0, r.jsx)(my, { recording: t }),
        children: (e) => {
            let { onClick: s } = e;
            return (0, r.jsxs)(M.D, {
                onClick: s,
                children: [
                    (0, r.jsxs)(C.E, {
                        variant: "text-sm/bold",
                        tag: "span",
                        children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()],
                    }),
                    (0, r.jsx)(M.D, {
                        tag: "span",
                        onClick: (e) => {
                            e.stopPropagation(), a ? l() : n(t);
                        },
                        children: a ? (0, r.jsx)(l0.E, { size: "xxs" }) : (0, r.jsx)(lZ.u, { size: "xxs" }),
                    }),
                    (0, r.jsx)(M.D, {
                        tag: "span",
                        onClick: (e) => {
                            let a, n, l;
                            e.stopPropagation(),
                                (a = new Blob([mh()(t.audioBuffer)], { type: "audio/wav" })),
                                (n = URL.createObjectURL(a)),
                                ((l = document.createElement("a")).href = n),
                                (l.download = `${t.inputName}-${new Date(t.createdAt).toLocaleString()}.wav`),
                                l.click(),
                                URL.revokeObjectURL(n);
                        },
                        children: (0, r.jsx)(mx.s, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function mE() {
    let { name: e } = (0, mb.x5)(ma.oh.AUDIO_INPUT),
        [t, a] = o.useState(!1),
        [n, l] = o.useState([]),
        s = (0, B.bG)([mt.Ay], () => mt.Ay.getKrispSuppressionLevel()),
        [i, c] = o.useState(null),
        u = o.useRef(null),
        m = o.useRef(null),
        [h, p] = o.useState(0.5),
        {
            krispModels: g,
            krispModelOverride: v,
            inputMode: j,
            echoCancellation: b,
            autoThreshold: f,
            vadUseKrisp: y,
            vadKrispActivationThreshold: _,
            noiseCancellation: E,
            noiseSuppression: S,
            noiseSuppressionSupported: N,
            noiseCancellationSupported: A,
            noiseCancellationEnableStats: k,
            vadDuringPreProcess: D,
        } = (0, B.cf)([mt.Ay], () => ({
            krispModels: mt.Ay.getKrispModels(),
            krispModelOverride: mt.Ay.getKrispModelOverride(),
            echoCancellation: mt.Ay.getEchoCancellation(),
            autoThreshold: mt.Ay.getModeOptions().autoThreshold,
            vadUseKrisp: mt.Ay.getModeOptions().vadUseKrisp,
            inputMode: mt.Ay.getMode(),
            vadKrispActivationThreshold: mt.Ay.getKrispVadActivationThreshold(),
            noiseCancellation: mt.Ay.getNoiseCancellation(),
            noiseSuppression: mt.Ay.getNoiseSuppression(),
            noiseSuppressionSupported: mt.Ay.isNoiseSuppressionSupported(),
            noiseCancellationSupported: mt.Ay.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: mt.Ay.getKrispEnableStats(),
            vadDuringPreProcess: mt.Ay.getModeOptions().vadDuringPreProcess,
        })),
        I = E ? "KRISP" : S ? "STANDARD" : "NONE",
        T = (0, mv.v)(),
        R = o.useCallback(() => {
            u.current?.stop(), (u.current = null), c(null);
        }, []);
    function O() {
        mt.Ay.getMediaEngine().stopRecordingRawSamples();
    }
    function w(e) {
        if ((t && O(), R(), null == T)) return;
        let a = T.createBufferSource();
        (a.buffer = e.audioBuffer),
            (m.current = T.createGain()),
            (m.current.gain.value = h),
            a.connect(m.current),
            m.current.connect(T.destination),
            (a.loop = !0),
            a.start(),
            (u.current = a),
            c(e);
    }
    o.useEffect(() => {
        R();
    }, [R]),
        (0, mg.l0)(() => {
            mp.A.setMode(mt.Ay.getMode(), { vadDuringPreProcess: null, vadKrispActivationThreshold: void 0 });
        });
    let M = [];
    return (
        A && M.push({ id: "krisp", label: "Krisp", value: "KRISP" }),
        N && M.push({ id: "standard", label: "Standard", value: "STANDARD" }),
        M.push({ id: "disabled", label: "Disabled", value: "NONE" }),
        (0, r.jsx)(d.Ip, {
            className: tM.nd,
            children: (0, r.jsxs)("div", {
                className: mf.l,
                children: [
                    (0, r.jsx)(C.E, { variant: "text-lg/bold", children: "Krisp Tester" }),
                    (0, r.jsx)(mj.U, {
                        label: "Input Device",
                        deviceType: ma.oh.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, r.jsx)(x.l, {
                        label: "Noise Cancellation",
                        value: I,
                        onSelectionChange: (e) => {
                            mp.A.setNoiseCancellation("KRISP" === e), mp.A.setNoiseSuppression("STANDARD" === e);
                        },
                        options: M,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    "KRISP" === I &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(c3.A, {
                                    label: "Krisp Suppression Level",
                                    initialValue: s,
                                    onValueChange: mp.A.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                }),
                                (0, r.jsx)(x.l, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    value: v,
                                    options: g.map((e) => ({ label: e, value: e, id: e })),
                                    onSelectionChange: (e) => {
                                        mp.A.setKrispModelOverride(e ?? "");
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(tI.d, {
                                    label: "Enable Stats",
                                    checked: k,
                                    onChange: (e) => mp.A.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    j === ma.TB.VOICE_ACTIVITY &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(tI.d, {
                                    label: "Auto Threshold",
                                    checked: f,
                                    onChange: (e) => mp.A.setMode(ma.TB.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                f &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(tI.d, {
                                                label: "Use Krisp VAD",
                                                checked: y,
                                                onChange: (e) => mp.A.setMode(ma.TB.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            y &&
                                                (0, r.jsx)(c3.A, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    initialValue: _,
                                                    onValueChange: (e) =>
                                                        mp.A.setMode(ma.TB.VOICE_ACTIVITY, {
                                                            vadKrispActivationThreshold: e,
                                                        }),
                                                    minValue: 0,
                                                    maxValue: 1,
                                                }),
                                        ],
                                    }),
                                (0, r.jsx)(tI.d, {
                                    label: "Run Before Processing",
                                    checked: D ?? !1,
                                    onChange: (e) => mp.A.setMode(ma.TB.VOICE_ACTIVITY, { vadDuringPreProcess: e }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(tI.d, {
                        label: "Echo Cancellation",
                        checked: b,
                        onChange: (e) => mp.A.setEchoCancellation(e),
                    }),
                    (0, r.jsxs)(P.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: "Recorder" }),
                            (0, r.jsx)(np.$n, {
                                color: t ? np.$n.Colors.RED : np.$n.Colors.BRAND,
                                onClick: t
                                    ? O
                                    : function () {
                                          R(),
                                              a(!0),
                                              mp.A.setLoopback("krisp_test", !0),
                                              mt.Ay.getMediaEngine().startRecordingRawSamples((t, n, i) => {
                                                  a(!1), mp.A.setLoopback("krisp_test", !1);
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
                                                          suppression: I,
                                                          echoCancellation: b,
                                                          krispSuppressionLevel: s,
                                                      },
                                                  ]);
                                              });
                                      },
                                children: t ? "Stop Recording" : "Start Recording",
                            }),
                        ],
                    }),
                    (0, r.jsx)(c3.A, {
                        label: "Volume",
                        initialValue: h,
                        asValueChanges: function (e) {
                            null != m.current && ((m.current.gain.value = e), p(e));
                        },
                        minValue: 0,
                        maxValue: 1,
                    }),
                    (0, r.jsxs)(P.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: "Recordings" }),
                            n.map((e, t) =>
                                (0, r.jsx)(m_, { recording: e, playing: e === i, onPlay: w, onStop: R }, t),
                            ),
                        ],
                    }),
                ],
            }),
        })
    );
}
var mC = a(742158),
    mS = a(717558),
    mN = a(85448),
    mA = a(763827),
    mk = a(977997),
    mD = a(647160);
let mI = [
    { value: "line", label: "Line" },
    { value: "arc", label: "Arc" },
    { value: "grid", label: "Grid" },
    { value: "manual", label: "Manual" },
];
function mT(e, t) {
    let a = t / 2;
    return { x: a + (e.x / 7) * a, y: a + (e.z / 7) * a };
}
function mR(e, t) {
    let a = 7 / t,
        n = e / 2;
    return { zoom: a, pan: { x: n * (1 - a), y: n - n * (1 - t / 14) * a } };
}
function mO(e) {
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
    (0, mg.u5)(() => {
        let e = u.current;
        if (null == e) return;
        let t = !0,
            a = new ResizeObserver((e) => {
                let a = Math.floor(e[0].contentRect.width);
                a <= 0 || (t && ((t = !1), i(mR(a, l))), c(a));
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
                        i = Math.max(mw, Math.min(mM, a * Math.exp(-t.deltaY * mL))),
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
                n < a.length && e.set(t.userId, mT(a[n], d));
            });
        return e;
    }, [t, n, a, h, d]);
    o.useEffect(() => {
        if ("manual" === t || 0 === d) return;
        let e = new Map();
        n.forEach((t, n) => {
            n < a.length && e.set(t.userId, mT(a[n], d));
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
        _ = o.useCallback(
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
                mt.Ay.getMediaEngine().eachConnection((e) => {
                    e.setUserPosition(p, o);
                });
            },
            [v, p, d, s.pan.x, s.pan.y, s.zoom, i],
        ),
        E = o.useCallback(() => {
            g(null), j(!1);
        }, []),
        C = v ? "grabbing" : "default";
    return (0, r.jsxs)("div", {
        ref: u,
        className: mD.BW,
        style: { cursor: C },
        onMouseDown: y,
        onMouseMove: _,
        onMouseUp: E,
        onMouseLeave: E,
        onContextMenu: (e) => e.preventDefault(),
        children: [
            (0, r.jsx)("canvas", { ref: m, width: d, height: d, className: mD.Ji }),
            n.map((e) => {
                let a = b.get(e.userId);
                return null == a
                    ? null
                    : (0, r.jsx)(
                          mP,
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
let mw = 0.25,
    mM = 4,
    mL = 0.002;
function mP(e) {
    let { userId: t, x: a, y: n, draggable: l, onMouseDown: s } = e,
        i = (0, B.bG)([Q.default], () => Q.default.getUser(t)),
        o = (0, mS.A)({ userId: t });
    return null == i
        ? null
        : (0, r.jsx)(lQ.m, {
              text: i.username,
              children: (0, r.jsx)("div", {
                  className: mD.my,
                  style: { left: a - 12, top: n - 12, cursor: l ? "grab" : "default" },
                  onMouseDown: (e) => s(e, t),
                  children: (0, r.jsx)(mN.A, {
                      userId: t,
                      size: rM._3.SIZE_24,
                      src: i.getAvatarURL(void 0, 24),
                      speaking: o,
                      ringing: !1,
                  }),
              }),
          });
}
function mU() {
    return mt.Ay.getMediaEngine().supports(ma.O5.SPATIAL_AUDIO)
        ? (0, r.jsx)(mG, {})
        : (0, r.jsx)(d.Ip, {
              className: tM.nd,
              children: (0, r.jsxs)("div", {
                  className: mD.kL,
                  children: [
                      (0, r.jsx)(G.D, { variant: "heading-lg/semibold", className: mD.R_, children: "Spatial Audio" }),
                      (0, r.jsx)(C.E, {
                          variant: "text-md/normal",
                          children: "Spatial audio is not supported by this client. Update Discord to enable.",
                      }),
                  ],
              }),
          });
}
function mG() {
    let e = (0, B.bG)([mt.Ay], () => mt.Ay.getAudioMixerSettings()),
        t = rz.x.DEFAULT,
        [a, n] = o.useState({ zoom: 1, pan: { x: 0, y: 0 } }),
        [l, s] = o.useState(0),
        i = (0, B.bG)([mA.A, ax.A], () => {
            let e = mA.A.getChannelId();
            return null != e ? ax.A.getChannel(e) : null;
        }),
        c = nA.default.getId(),
        u = i?.id,
        m = (0, B.yK)(
            [mk.A],
            () => (null == u ? [] : Object.values(mk.A.getVoiceStatesForChannel(u)).filter((e) => e.userId !== c)),
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
            mt.Ay.getMediaEngine().eachConnection((e) => {
                m.forEach((t, a) => {
                    a < p.length && e.setUserPosition(t.userId, p[a]);
                });
            });
    }, [x, p, m]);
    let g = o.useCallback(
            (a) => {
                mp.A.setAudioMixerSettings({ ...e, ...a }, t);
            },
            [e, t],
        ),
        v = o.useRef(null),
        j = o.useCallback(
            (e) => {
                null !== v.current && clearTimeout(v.current),
                    (v.current = window.setTimeout(() => {
                        g({ roomSize: e }), (v.current = null);
                    }, 500));
            },
            [g],
        );
    return (0, r.jsx)(d.Ip, {
        className: tM.nd,
        children: (0, r.jsxs)("div", {
            className: mD.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: mD.ne,
                    children: [
                        (0, r.jsx)(G.D, {
                            variant: "heading-lg/semibold",
                            className: mD.R_,
                            children: "Spatial Audio",
                        }),
                        (0, r.jsxs)("div", {
                            className: mD.nM,
                            children: [
                                (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Enabled" }),
                                (0, r.jsx)(tI.d, { checked: e.enabled, onChange: (e) => g({ enabled: e }) }),
                            ],
                        }),
                        (0, r.jsx)(al.c, { className: mD.yF }),
                        (0, r.jsx)(mC.z, { className: mD.Pf, children: "Spatial Blend" }),
                        (0, r.jsx)(c3.A, {
                            className: mD.aw,
                            initialValue: e.spatialBlend,
                            value: e.spatialBlend,
                            minValue: 0,
                            maxValue: 1,
                            asValueChanges: (e) => g({ spatialBlend: e }),
                            onValueRender: (e) => e.toFixed(2),
                        }),
                        (0, r.jsx)(mC.z, { className: mD.Pf, children: "Room Size (m\xb2)" }),
                        (0, r.jsx)(c3.A, {
                            className: mD.aw,
                            initialValue: e.roomSize ?? 25,
                            value: e.roomSize ?? 25,
                            minValue: 10,
                            maxValue: 150,
                            asValueChanges: j,
                            onValueRender: (e) => e.toFixed(0),
                        }),
                        (0, r.jsx)(al.c, { className: mD.yF }),
                        (0, r.jsx)(mC.z, { className: mD.Pf, children: "Placement Mode" }),
                        (0, r.jsx)("div", {
                            className: mD.XU,
                            children: mI.map((t) => {
                                let { value: a, label: s } = t;
                                return (0, r.jsx)(
                                    "button",
                                    {
                                        className: `${mD._V} ${x === a ? mD.cB : ""}`,
                                        onClick: () => {
                                            g({ mode: a }), l > 0 && n(mR(l, e.distance));
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
                                    (0, r.jsx)(mC.z, { className: mD.Pf, children: "Distance" }),
                                    (0, r.jsx)(c3.A, {
                                        className: mD.aw,
                                        initialValue: e.distance,
                                        value: e.distance,
                                        minValue: 1,
                                        maxValue: 10,
                                        asValueChanges: (e) => g({ distance: e }),
                                        onValueRender: (e) => e.toFixed(1),
                                    }),
                                ],
                            }),
                        "line" === x &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(mC.z, { className: mD.Pf, children: "Spread" }),
                                    (0, r.jsx)(c3.A, {
                                        className: mD.aw,
                                        initialValue: e.spread,
                                        value: e.spread,
                                        minValue: 0,
                                        maxValue: 10,
                                        asValueChanges: (e) => g({ spread: e }),
                                        onValueRender: (e) => e.toFixed(1),
                                    }),
                                ],
                            }),
                        "arc" === x &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(mC.z, { className: mD.Pf, children: "Arc Angle" }),
                                    (0, r.jsx)(c3.A, {
                                        className: mD.aw,
                                        initialValue: e.arcAngle ?? 180,
                                        value: e.arcAngle ?? 180,
                                        minValue: 0,
                                        maxValue: 180,
                                        asValueChanges: (e) => g({ arcAngle: e }),
                                        onValueRender: (e) => `${e.toFixed(0)}\xb0`,
                                    }),
                                ],
                            }),
                        "grid" === x &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(mC.z, { className: mD.Pf, children: "Columns" }),
                                    (0, r.jsx)(c3.A, {
                                        className: mD.aw,
                                        initialValue: e.gridColumns ?? 3,
                                        value: e.gridColumns ?? 3,
                                        minValue: 2,
                                        maxValue: 6,
                                        keyboardStep: 1,
                                        asValueChanges: (e) => g({ gridColumns: Math.round(e) }),
                                        onValueRender: (e) => e.toFixed(0),
                                    }),
                                    (0, r.jsx)(mC.z, { className: mD.Pf, children: "Spacing (m)" }),
                                    (0, r.jsx)(c3.A, {
                                        className: mD.aw,
                                        initialValue: e.gridSpacing ?? 1.5,
                                        value: e.gridSpacing ?? 1.5,
                                        minValue: 0.5,
                                        maxValue: 3,
                                        asValueChanges: (e) => g({ gridSpacing: e }),
                                        onValueRender: (e) => e.toFixed(1),
                                    }),
                                ],
                            }),
                        (0, r.jsx)(al.c, { className: mD.yF }),
                        (0, r.jsx)(h.$, {
                            variant: "secondary",
                            size: "sm",
                            text: "Reset to Defaults",
                            onClick: () => {
                                let a = { ...mt.bY, enabled: e.enabled };
                                mp.A.setAudioMixerSettings(a, t), l > 0 && n(mR(l, a.distance));
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(mO, {
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
var mB = a(803306),
    mF = a(243217),
    mV = a(189213),
    m$ = a(935208),
    mW = a(878784);
let mz = [
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
function mH() {
    let [e, t] = o.useState(!1),
        a = (0, B.bG)([Q.default], () => Q.default.getCurrentUser()),
        n = (0, mW.Lh)(),
        l = (0, B.bG)([rq.A], () => rq.A.getPremiumTypeSubscription()),
        s = null != n ? (sp.VD[n]?.tenureReqNumMonths ?? 0) : 0,
        i = o.useCallback(
            async (e) => {
                let n = new Date();
                e > 0 ? n.setMonth(n.getMonth() - e) : n.setDate(n.getDate() - 7), n.setDate(n.getDate() - 2);
                let s = {
                    subscription_status: et.Dmq.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: m$.default.fromTimestamp(n.getTime()),
                };
                t(!0),
                    await n6.Bo.patch({ url: `/debug/subscriptions/${l.id}`, body: s, rejectWithError: !1 }),
                    await (0, mB.eO)(a.id),
                    await (0, dp.hP)(),
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
            options: mz,
            onSelectionChange: i,
        });
}
var mK =
        (((l = {})[(l.DEFAULT = 0)] = "DEFAULT"),
        (l[(l.SUCCESSFUL = 1)] = "SUCCESSFUL"),
        (l[(l.FAILURE = 2)] = "FAILURE"),
        (l[(l.NONE = 3)] = "NONE"),
        l),
    mY =
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
async function mq(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetDate: n, paymentType: l, sendReminderEmail: s } = a;
    return (
        await n6.Bo.post({
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
var mJ = a(601107);
let mQ = {
        [et.Dmq.UNPAID]: "Unpaid",
        [et.Dmq.ACTIVE]: "Active",
        [et.Dmq.PAST_DUE]: "Past Due",
        [et.Dmq.CANCELED]: "Canceled",
        [et.Dmq.ENDED]: "Ended",
        [et.Dmq.ACCOUNT_HOLD]: "Account Hold",
        [et.Dmq.BILLING_RETRY]: "Billing Retry",
        [et.Dmq.PAUSED]: "Paused",
        [et.Dmq.PAUSE_PENDING]: "Pause Pending",
    },
    mX = {
        [mJ.qf.UNKNOWN]: "Unknown",
        [mJ.qf.ADMIN]: "Admin",
        [mJ.qf.USER]: "User",
        [mJ.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [mJ.qf.DEFERRED_START]: "Deferred Start",
        [mJ.qf.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    mZ = [
        { id: "unpaid", label: "Unpaid", value: et.Dmq.UNPAID },
        { id: "active", label: "Active", value: et.Dmq.ACTIVE },
        { id: "pastDue", label: "Past Due", value: et.Dmq.PAST_DUE },
        { id: "canceled", label: "Canceled", value: et.Dmq.CANCELED },
        { id: "ended", label: "Ended", value: et.Dmq.ENDED },
        { id: "accountHold", label: "Account Hold", value: et.Dmq.ACCOUNT_HOLD },
        { id: "billingRetry", label: "Billing Retry", value: et.Dmq.BILLING_RETRY },
        { id: "paused", label: "Paused", value: et.Dmq.PAUSED },
        { id: "pausePending", label: "Pause Pending", value: et.Dmq.PAUSE_PENDING },
    ];
function m0(e) {
    let { subscription: t, onClose: a, onUpdated: n, transitionState: l } = e,
        [s, i] = o.useState(nx()()),
        [d, c] = o.useState(nx()().format("HH:mm")),
        [m, h] = o.useState(!1),
        [x, p] = o.useState(void 0),
        g = async () => {
            if (null == s) return void p("Please select a target date");
            let [e, l] = d.split(":").map(Number),
                i = s.clone().hours(e).minutes(l).seconds(0).milliseconds(0);
            h(!0), p(void 0);
            try {
                await mq(t.id, mY.TIME_TRAVEL, { targetDate: i, paymentType: mK.DEFAULT, sendReminderEmail: !1 }),
                    n(),
                    a();
            } catch (e) {
                p(e.body?.message || e.message || "Failed to time travel");
            } finally {
                h(!1);
            }
        };
    return (0, r.jsx)(mV.Modal, {
        transitionState: l,
        onClose: () => (a(), Promise.resolve()),
        title: "Time Travel Subscription",
        size: "sm",
        actions: [
            { text: "Cancel", variant: "secondary", onClick: a },
            { text: "Time Travel", variant: "primary", onClick: g, disabled: m || null == s },
        ],
        children: (0, r.jsxs)(P.B, {
            gap: 16,
            children: [
                (0, r.jsx)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children:
                        "Select the target date and time to travel the subscription to. This will adjust the subscription period and trigger any necessary invoice operations.",
                }),
                (0, r.jsx)(ih.J, { label: "Target Date", value: s, onSelect: i }),
                (0, r.jsx)(u.n, {
                    label: "Target Time (HH:mm)",
                    children: (0, r.jsx)("input", {
                        type: "time",
                        value: d,
                        onChange: (e) => {
                            c(e.target.value);
                        },
                        className: or.Qn,
                    }),
                }),
                (0, r.jsxs)(P.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(C.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: "Current Period",
                        }),
                        (0, r.jsxs)(P.B, {
                            gap: 4,
                            children: [
                                (0, r.jsxs)(C.E, {
                                    variant: "text-xs/normal",
                                    className: or.JX,
                                    children: ["Start: ", nx()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, r.jsxs)(C.E, {
                                    variant: "text-xs/normal",
                                    className: or.JX,
                                    children: ["End: ", nx()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
                                }),
                            ],
                        }),
                    ],
                }),
                null != x && (0, r.jsx)(L.w, { type: "critical", children: x }),
            ],
        }),
    });
}
function m1(e) {
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
            return m$.default.fromTimestamp(t.getTime());
        },
        y = async (e) => {
            let { status: t = n.status, premiumStreakStart: a, endedAt: s } = e,
                i = {
                    subscription_status: t,
                    ...(null != a ? { premium_streak_started_at: f(a) } : null),
                    ...(null != s ? { ended_at: f(s) } : null),
                };
            await n6.Bo.patch({ url: `/debug/subscriptions/${n.id}`, body: i, rejectWithError: !1 }), l();
        },
        _ = async () => {
            try {
                await mq(n.id, mY.RENEW, {
                    targetDate: nx()(new Date()),
                    paymentType: mK.DEFAULT,
                    sendReminderEmail: !1,
                });
            } catch (e) {
                b(e.body?.message || e.message || "Failed to renew subscription");
            }
            l();
        },
        E = sp.hd[n.planIdFromItems]?.premiumType === sp.PremiumTypes.TIER_0,
        N = n.metadata?.ended_at,
        A = null != N ? new Date(N).toISOString().substring(0, 10) : "",
        k = [
            { id: "id", label: `ID: ${n.id}`, isDisabled: !1 },
            {
                id: "status",
                label: `Status: ${(null == t && (t = n.status), t in mQ) ? mQ[t] : `Unknown status ${t}`}`,
                isDisabled: !1,
            },
        ],
        D = n.hasActiveTrial,
        I = n.metadata?.active_discount_id != null;
    return (
        D && k.push({ id: "trial", label: "Has Trial", isDisabled: !1 }),
        I && k.push({ id: "active-discount", label: "Has Active Discount", isDisabled: !1 }),
        n.status !== et.Dmq.ACTIVE &&
            k.push({
                id: "dates",
                label: `Dates: ${(0, nS.i$)(n.createdAt, "LL")} - ${(0, nS.i$)(n.currentPeriodEnd, "LL")}`,
                isDisabled: !1,
            }),
        n.status === et.Dmq.PAUSED &&
            k.push({
                id: "pause-reason",
                label: `Pause Reason: ${n.pauseReason in mX ? mX[n.pauseReason] : `Unknown pause reason ${n.pauseReason}`}`,
                isDisabled: !1,
            }),
        (0, r.jsx)("div", {
            className: w()(s_.Nr, E ? s_.Qf : s_.C1),
            children: (0, r.jsxs)(u.n, {
                label: `Type: ${null == ((a = n.planIdFromItems)) ? "No plan id" : a in sp.hd ? sp.hd[a].name : `Unknown plan id ${a}`}`,
                className: or.lI,
                children: [
                    (0, r.jsx)(os.C, {
                        items: k,
                        label: "Tags",
                        selectionMode: "none",
                        selectionBehavior: "replace",
                        disabledKeys: new Set(),
                    }),
                    D &&
                        (0, r.jsxs)("div", {
                            className: or.VK,
                            children: [
                                (0, r.jsxs)(M.D, {
                                    onClick: () => {
                                        p(!m);
                                    },
                                    className: or.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(C.E, {
                                                variant: "text-md/bold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, r.jsx)(sh.A, { direction: m ? sh.A.Directions.UP : sh.A.Directions.DOWN }),
                                    ],
                                }),
                                m &&
                                    (0, r.jsxs)("ul", {
                                        className: or.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(C.E, { variant: "text-md/bold", children: "trial_id" }),
                                                    (0, r.jsx)(C.E, { variant: "text-sm/normal", children: n.trialId }),
                                                ],
                                            }),
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-md/bold",
                                                        children: "trial_ends_at",
                                                    }),
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            null != n.trialEndsAt
                                                                ? (0, nS.i$)(n.trialEndsAt, "LL")
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
                            className: or.VK,
                            children: [
                                (0, r.jsxs)(M.D, {
                                    onClick: () => {
                                        v(!g);
                                    },
                                    className: or.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(C.E, {
                                                variant: "text-md/bold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, r.jsx)(sh.A, { direction: g ? sh.A.Directions.UP : sh.A.Directions.DOWN }),
                                    ],
                                }),
                                g &&
                                    (0, r.jsxs)("ul", {
                                        className: or.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_id",
                                                    }),
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-sm/normal",
                                                        children: n.metadata?.active_discount_id,
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_expires_at",
                                                    }),
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            n.metadata?.active_discount_expires_at != null
                                                                ? (0, nS.i$)(
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
                            className: or.VK,
                            children: [
                                (0, r.jsxs)(M.D, {
                                    onClick: () => {
                                        i(!s);
                                    },
                                    className: or.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(C.E, {
                                                variant: "text-md/bold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, r.jsx)(sh.A, { direction: s ? sh.A.Directions.UP : sh.A.Directions.DOWN }),
                                    ],
                                }),
                                s &&
                                    (0, r.jsx)("ul", {
                                        className: or.j3,
                                        children: Object.entries(n.metadata).map((e) => {
                                            let [t, a] = e;
                                            return (0, r.jsxs)(
                                                "li",
                                                {
                                                    children: [
                                                        (0, r.jsx)(C.E, { variant: "text-md/bold", children: t }),
                                                        (0, r.jsx)(C.E, { variant: "text-sm/normal", children: a }),
                                                    ],
                                                },
                                                t,
                                            );
                                        }),
                                    }),
                            ],
                        }),
                    (0, r.jsxs)("div", {
                        className: or.VK,
                        children: [
                            (0, r.jsxs)(M.D, {
                                onClick: () => {
                                    c(!d);
                                },
                                className: or.Eh,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(C.E, {
                                            variant: "text-md/bold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, r.jsx)(sh.A, { direction: d ? sh.A.Directions.UP : sh.A.Directions.DOWN }),
                                ],
                            }),
                            d &&
                                (0, r.jsxs)(P.B, {
                                    gap: 24,
                                    children: [
                                        (0, r.jsx)(x.l, {
                                            label: "Status",
                                            value: n.status,
                                            options: mZ,
                                            onSelectionChange: (e) => {
                                                y({ status: e });
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsxs)("div", {
                                            children: [
                                                (0, r.jsxs)(P.B, {
                                                    gap: 12,
                                                    children: [
                                                        (0, r.jsx)(h.$, {
                                                            variant: "primary",
                                                            size: "sm",
                                                            text: "Renew Subscription",
                                                            onClick: (e) => _(),
                                                        }),
                                                        (0, r.jsx)(h.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Time Travel",
                                                            onClick: () => {
                                                                (0, S.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, r.jsx)(m0, {
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
                                                        className: or.z3,
                                                        children: (0, r.jsx)(L.w, { type: "critical", children: j }),
                                                    }),
                                            ],
                                        }),
                                        (0, r.jsxs)(P.B, {
                                            gap: 16,
                                            children: [
                                                (0, r.jsx)(ih.J, {
                                                    label: "Premium Streak Start Date",
                                                    value: nx()(n.premiumSince?.toISOString().substring(0, 10)),
                                                    onSelect: (e) => y({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, r.jsx)(mH, {}),
                                            ],
                                        }),
                                        (0, r.jsx)(ih.J, {
                                            label: "Metadata Ended At Date",
                                            value: "" !== A ? nx()(A) : void 0,
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
let m2 = async () =>
        (
            await n6.Bo.get({
                url: et.Rsh.BILLING_SUBSCRIPTIONS,
                query: { include_inactive: !0, limit: 5 },
                rejectWithError: !1,
            })
        ).body.map((e) => mF.A.createFromServer(e)),
    m8 = [
        { id: "nitro-monthly", label: "Nitro Monthly", value: sp.gD.PREMIUM_MONTH_TIER_2 },
        { id: "nitro-yearly", label: "Nitro Yearly", value: sp.gD.PREMIUM_YEAR_TIER_2 },
        { id: "nitro-classic-monthly", label: "Nitro Classic Monthly", value: sp.gD.PREMIUM_MONTH_TIER_1 },
        { id: "nitro-classic-yearly", label: "Nitro Classic Yearly", value: sp.gD.PREMIUM_YEAR_TIER_1 },
        { id: "basic-monthly", label: "Basic Monthly", value: sp.gD.PREMIUM_MONTH_TIER_0 },
        { id: "basic-yearly", label: "Basic Yearly", value: sp.gD.PREMIUM_YEAR_TIER_0 },
        { id: "reverse-trial-1week", label: "Reverse Trial 1-week", value: sp.gd },
        { id: "reverse-trial-2week", label: "Reverse Trial 2-week", value: sp.Uk },
        { id: "nitro-squad-monthly", label: "Nitro Squad Monthly", value: sp.gD.PREMIUM_GROUP_MONTH },
    ];
function m3() {
    let e = (0, B.bG)([rq.A], () => rq.A.getPremiumTypeSubscription()),
        t = (0, B.bG)([Q.default], () => Q.default.getCurrentUser()),
        [a, n] = o.useState("511651880837840896"),
        [l, s] = o.useState([]),
        [i, c] = o.useState(!1),
        u = o.useCallback(async () => {
            try {
                c(!0), await (0, dp.hP)(), await (0, mB.eO)(t.id), s(await m2());
            } finally {
                c(!1);
            }
        }, [t]);
    o.useEffect(() => {
        u();
    }, [u]);
    let m = o.useMemo(() => l.filter((e) => e.status !== et.Dmq.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [l]),
        p = async () => {
            await n6.Bo.post({ url: "/debug/subscription", body: { plan_id: a }, rejectWithError: !1 }), await u();
        },
        g = async () => {
            await n6.Bo.del({ url: "/debug/subscription", rejectWithError: !1 }), await u();
        };
    return (0, r.jsx)(d.Ip, {
        className: tM.nd,
        children: (0, r.jsxs)("div", {
            className: s_.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: s_.dL,
                    children: [
                        (0, r.jsx)(G.D, {
                            variant: "heading-lg/semibold",
                            className: tM.wx,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, r.jsx)(eO.K, {
                            "aria-label": "Refresh",
                            icon: sm.f,
                            size: "sm",
                            variant: "icon-only",
                            disabled: i,
                            onClick: u,
                        }),
                    ],
                }),
                (0, r.jsx)("section", {
                    className: w()([s_.uW, s_.Uo]),
                    children:
                        null == e &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(x.l, {
                                    label: "Premium Plan",
                                    hideLabel: !0,
                                    value: a,
                                    options: m8,
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
                null != e && (0, r.jsx)(m1, { subscription: e, onUpdated: u }),
                (0, r.jsx)(G.D, { variant: "heading-lg/semibold", className: tM.wx, children: "Bulk Actions" }),
                (0, r.jsx)("section", {
                    className: w()([s_.uW, s_.Uo]),
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
                            (0, r.jsx)(G.D, {
                                variant: "heading-lg/semibold",
                                className: tM.wx,
                                children: "Previous Subscriptions",
                            }),
                            m.map((e) => (0, r.jsx)(m1, { subscription: e, onUpdated: u }, e.id)),
                        ],
                    }),
            ],
        }),
    });
}
a(801541);
var m6 = a(284009),
    m5 = a.n(m6),
    m4 = a(889137),
    m9 = a(412703),
    m7 = a(440703),
    he = a(267548),
    ht = a(668824),
    ha = a(695366),
    hn = a(359778),
    hl = a(507107),
    hs = a(801365),
    hi = a(792620),
    hr = a(241124),
    ho = a(28082),
    hd = a(717695),
    hc = a(961974),
    hu = a(127219),
    hm = a(262514),
    hh = a(291922),
    hx = a(317097),
    hp = a(452027),
    hg = a(922016),
    hv = a(714385),
    hj = a(359923);
let hb = function (e) {
    let { colorKey: t, value: a, onChange: n, title: l } = e,
        s = o.useRef(null);
    return (0, r.jsx)(hp.D, {
        label: l,
        children: (0, r.jsx)(hg.Y, {
            targetElementRef: s,
            renderPopout: (e) => (0, r.jsx)(cA.VN, { ...e, value: a, onChange: (e) => n(t, (0, hx.Hl)(e)) }),
            children: (e) =>
                (0, r.jsx)(M.D, {
                    ...e,
                    innerRef: s,
                    tag: "span",
                    "aria-label": "Select a color",
                    className: hj.O6,
                    style: { backgroundColor: a },
                    children: (0, r.jsx)(hv.d, { size: "xs", color: "currentColor", className: hj.WY }),
                }),
        }),
    });
};
var hf = a(247928);
let hy = function (e) {
    let { allowClicks: t = !1, children: a, withBorder: n = !1 } = e;
    return (0, r.jsx)(hf.M, {
        children: (0, r.jsx)(hn.Z, {
            className: w()(hj.Rx, { [hj.aK]: n }),
            outline: n,
            children: (0, r.jsx)("div", {
                className: hj.AZ,
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
var h_ = a(643374);
let hE = function (e) {
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
            (0, r.jsx)(hp.D, {
                label: s,
                description: `Supported asset formats: ${a.join(", ")}`,
                children: (0, r.jsx)(h_.A, {
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
    hC = function (e) {
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
var hS = a(31587);
let hN = function (e) {
    let { onSelect: t, quest: a } = e,
        { quests: n } = (0, hS.mL)({ fetchPolicy: "cache-and-network", callerSource: "prefill_selector" }),
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
var hA = a(843282),
    hk = a(972886);
let hD = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
    ],
    hI = function (e) {
        let { onSelect: t, taskDuration: a = 10, taskConfigV2: n } = e;
        return (0, r.jsxs)(P.B, {
            gap: 20,
            children: [
                (0, r.jsx)(hA.Pw, {
                    label: "Task Type(s)",
                    className: hk.Z,
                    placeholder: "Select Task Preset",
                    options: hD,
                    renderOptionValue: (e) => e.map((e) => (0, r.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, r.jsx)("div", { children: e.label }),
                    isSelected: (e) => {
                        var t;
                        let a, l, s, i, r;
                        return (
                            e ===
                            ((t = n.tasks),
                            (a = m9.n.PLAY_ON_PLAYSTATION in t || m9.n.PLAY_ON_XBOX in t),
                            (l = m9.n.PLAY_ON_DESKTOP in t),
                            (s = m9.n.STREAM_ON_DESKTOP in t),
                            (i = m9.n.WATCH_VIDEO in t),
                            (r = m9.n.PLAY_ACTIVITY in t),
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
                                        a[m9.n.STREAM_ON_DESKTOP] = { type: m9.n.STREAM_ON_DESKTOP, target: t };
                                        break;
                                    case 0:
                                        a[m9.n.PLAY_ON_DESKTOP] = { type: m9.n.PLAY_ON_DESKTOP, target: t };
                                        break;
                                    case 3:
                                        (a[m9.n.PLAY_ON_PLAYSTATION] = {
                                            type: m9.n.PLAY_ON_PLAYSTATION,
                                            target: t,
                                            externalIds: [],
                                        }),
                                            (a[m9.n.PLAY_ON_XBOX] = {
                                                type: m9.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 4:
                                        (a[m9.n.PLAY_ON_DESKTOP] = { type: m9.n.PLAY_ON_DESKTOP, target: t }),
                                            (a[m9.n.PLAY_ON_PLAYSTATION] = {
                                                type: m9.n.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                            (a[m9.n.PLAY_ON_XBOX] = {
                                                type: m9.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 2:
                                        a[m9.n.WATCH_VIDEO] = {
                                            type: m9.n.WATCH_VIDEO,
                                            target: t,
                                            assets: { video: { url: "" } },
                                            messages: { videoTitle: "" },
                                        };
                                        break;
                                    case 5:
                                        a[m9.n.PLAY_ACTIVITY] = { type: m9.n.PLAY_ACTIVITY, target: t };
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
                    value: String(a / n4.A.Seconds.MINUTE),
                    onChange: function (e) {
                        let a = Number(e);
                        if (isNaN(a)) return;
                        a *= n4.A.Seconds.MINUTE;
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
var hT = a(818348);
let hR = function () {
    let e = (0, es.Ay)();
    return (0, r.jsx)(hp.D, {
        label: "Theme",
        children: (0, r.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
                (0, r.jsx)(ei.zy, {
                    theme: hT.NJ.LIGHT,
                    isSelected: e === hT.NJ.LIGHT,
                    onSelect: () => (0, ch.u_)({ theme: hT.NJ.LIGHT }),
                }),
                (0, r.jsx)(ei.zy, {
                    theme: hT.NJ.DARK,
                    isSelected: e === hT.NJ.DARK,
                    onSelect: () => (0, ch.u_)({ theme: hT.NJ.DARK }),
                }),
            ],
        }),
    });
};
var hO =
    (((i = {})[(i.UNENROLLED = 0)] = "UNENROLLED"),
    (i[(i.ENROLLED = 1)] = "ENROLLED"),
    (i[(i.COMPLETED_25 = 2)] = "COMPLETED_25"),
    (i[(i.COMPLETED_50 = 3)] = "COMPLETED_50"),
    (i[(i.COMPLETED_75 = 4)] = "COMPLETED_75"),
    (i[(i.COMPLETED_100 = 5)] = "COMPLETED_100"),
    (i[(i.CLAIMED = 6)] = "CLAIMED"),
    i);
let hw = function (e) {
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
var hM = a(617986);
let hL = ["png", "gif", "webp"],
    hP = [...hL, "jpg", "jpeg"],
    hU = Array.from(new Set([...hP, "gif", "mp4", "webm"]));
function hG() {
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
let hB = "1193992107035983872",
    hF = {
        id: hB,
        preview: !0,
        config: {
            id: hB,
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
                        type: m7.l.REWARD_CODE,
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
                joinOperator: ht.K.AND,
                tasks: { [m9.n.PLAY_ON_DESKTOP]: { type: m9.n.PLAY_ON_DESKTOP, target: 300 } },
            },
            features: [],
            sharePolicy: he.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: null,
        targetedContent: [],
    };
function hV() {
    var e;
    let [t, n] = o.useState(hF),
        l = o.useCallback((e) => {
            n({ ...e, preview: !0 });
        }, []),
        [s, i] = o.useState(hO.UNENROLLED),
        [c, u] = o.useState(!1),
        [m, x] = o.useState(!1),
        [p, g] = o.useState(null),
        v =
            ((e = t.config),
            (0, m4.YW)(e)
                .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
                .exhaustive());
    function j(e, a) {
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
                    (0, m4.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, assets: { ...e.assets, ...s } }))
                        .exhaustive()),
            });
        }
    }
    function b(e, a) {
        let n = t.config.taskConfigV2.tasks,
            s = n[m9.n.WATCH_VIDEO];
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
                taskConfigV2: { ...t.config.taskConfigV2, tasks: { ...n, [m9.n.WATCH_VIDEO]: { ...s, assets: i } } },
            },
        });
    }
    function f(e, a) {
        if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
            var n, s;
            l({
                ...t,
                config:
                    ((n = t.config),
                    (s = { [e]: a }),
                    (0, m4.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, messages: { ...e.messages, ...s } }))
                        .exhaustive()),
            });
        }
    }
    function y(e, a, n) {
        if ("name" === e || "nameWithArticle" === e) {
            var s, i;
            l({
                ...t,
                config:
                    ((s = t.config),
                    (i = { [e]: a }),
                    (0, m4.YW)(s)
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
    function E() {
        (0, hs.tU)(t.config) && (0, hM.hJ)(t, hl.uF.GIFT_INVENTORY_FOR_YOU, hl.uF.INTERNAL_PREVIEW_TOOL, !0);
    }
    let N = o.useMemo(() => {
            for (let [e, a] of Object.entries(t.config.taskConfigV2.tasks)) if (null != a.target) return a.target;
            return 10 * n4.A.Seconds.MINUTE;
        }, [t.config.taskConfigV2.tasks]),
        A = o.useMemo(() => m9.n.WATCH_VIDEO in t.config.taskConfigV2.tasks, [t.config.taskConfigV2.tasks]);
    m5()(!1 !== t.preview && null != t.preview, "Preview config must have property preview: true");
    let k = t.config.taskConfigV2.tasks[m9.n.WATCH_VIDEO];
    return (0, r.jsxs)(d.Ip, {
        className: hj.kL,
        children: [
            (0, r.jsx)(G.D, { variant: "heading-lg/bold", className: hj.R_, children: "Quest Preview Tool" }),
            (0, r.jsx)("div", {
                className: hj.OA,
                children: (0, r.jsx)(hN, {
                    onSelect: function (e) {
                        g(e),
                            null == e ||
                                (i(
                                    (function (e) {
                                        if (null == e.userStatus) return hO.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return hO.CLAIMED;
                                        if (null != e.userStatus.completedAt) return hO.COMPLETED_100;
                                        let t = (0, hi.Yh)(e),
                                            a = t.progressSeconds,
                                            n = t.targetSeconds;
                                        return a / n >= 1
                                            ? hO.COMPLETED_100
                                            : a / n >= 0.75
                                              ? hO.COMPLETED_75
                                              : a / n >= 0.5
                                                ? hO.COMPLETED_50
                                                : a / n >= 0.25
                                                  ? hO.COMPLETED_25
                                                  : hO.ENROLLED;
                                    })(e),
                                ),
                                l(e));
                    },
                    quest: p,
                }),
            }),
            (0, r.jsx)(G.D, { variant: "heading-md/semibold", className: hj.fV, children: "Task Config" }),
            (0, r.jsx)("div", {
                className: hj.OA,
                children: (0, r.jsx)(hI, {
                    taskDuration: N,
                    taskConfigV2: t.config.taskConfigV2,
                    onSelect: function (e) {
                        l({ ...t, config: { ...t.config, taskConfigV2: e } });
                    },
                }),
            }),
            (0, r.jsx)(G.D, { variant: "heading-md/semibold", className: hj.fV, children: "Messages" }),
            (0, r.jsxs)("div", {
                className: hj.OA,
                children: [
                    (0, r.jsx)(hC, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: f,
                        initialValue: t.config.messages.questName,
                    }),
                    (0, r.jsx)(hC, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: f,
                        initialValue: t.config.messages.gameTitle,
                    }),
                    (0, r.jsx)(hC, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: f,
                        initialValue: t.config.messages.gamePublisher,
                    }),
                    A &&
                        (0, r.jsx)(hC, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, a) {
                                let n = t.config.taskConfigV2.tasks,
                                    s = n[m9.n.WATCH_VIDEO];
                                if (null == s) return;
                                let i = { ...s.messages, [e]: a };
                                l({
                                    ...t,
                                    config: {
                                        ...t.config,
                                        taskConfigV2: {
                                            ...t.config.taskConfigV2,
                                            tasks: { ...n, [m9.n.WATCH_VIDEO]: { ...s, messages: i } },
                                        },
                                    },
                                });
                            },
                            initialValue: k?.messages.videoTitle,
                        }),
                ],
            }),
            (0, r.jsx)(G.D, { variant: "heading-md/semibold", className: hj.fV, children: "Assets" }),
            (0, r.jsxs)("div", {
                className: hj.OA,
                children: [
                    (0, r.jsx)(hE, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: j,
                        filters: hU,
                        initialValue: t.config.assets.hero,
                    }),
                    (0, r.jsx)(hE, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: j,
                        filters: hU,
                        initialValue: t.config.assets.heroVideo ?? void 0,
                    }),
                    (0, r.jsx)(hE, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: j,
                        filters: hU,
                        initialValue: t.config.assets.questBarHero,
                    }),
                    (0, r.jsx)(hE, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: j,
                        filters: hU,
                        initialValue: t.config.assets.questBarHeroVideo ?? void 0,
                    }),
                    (0, r.jsx)(hE, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: j,
                        filters: [...hP, "svg"],
                        initialValue: t.config.assets.gameTile,
                    }),
                    (0, r.jsx)(hE, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: j,
                        filters: [...hL, "svg"],
                        initialValue: t.config.assets.logotype,
                    }),
                    A &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(hE, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: b,
                                    filters: hU,
                                    initialValue: k?.assets.video.url,
                                }),
                                (0, r.jsx)(hE, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: b,
                                    filters: hU,
                                    initialValue: k?.assets.videoLowRes?.url,
                                }),
                                (0, r.jsx)(hE, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: b,
                                    filters: hP,
                                    initialValue: k?.assets.video.thumbnail,
                                }),
                            ],
                        }),
                ],
            }),
            v.map((e, a) =>
                (0, r.jsxs)(
                    "div",
                    {
                        children: [
                            (0, r.jsxs)(G.D, {
                                variant: "heading-md/semibold",
                                className: hj.fV,
                                children: ["Reward #", a + 1],
                            }),
                            (0, r.jsxs)("div", {
                                className: hj.OA,
                                children: [
                                    (0, r.jsx)(hC, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, t) => y(e, t, a),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, r.jsx)(hC, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, t) => y(e, t, a),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== m7.l.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(hE, {
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
                                                                (0, m4.YW)(s)
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
                                            filters: hU,
                                            initialValue: e.asset,
                                        }),
                                    (0, r.jsxs)(P.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(G.D, {
                                                variant: "heading-sm/semibold",
                                                children: "Claim Modal",
                                            }),
                                            (0, r.jsx)(h.$, {
                                                variant: "primary",
                                                text: "Open Reward Modal",
                                                onClick: E,
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
            (0, r.jsx)(G.D, { variant: "heading-md/semibold", className: hj.fV, children: "Colors & Quest States" }),
            (0, r.jsxs)("div", {
                className: hj.OA,
                children: [
                    (0, r.jsxs)("div", {
                        className: hj.OA,
                        style: { marginBottom: 0 },
                        children: [
                            (0, r.jsx)(hb, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: _,
                                value: t.config.colors.primary,
                            }),
                            (0, r.jsx)(hb, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: _,
                                value: t.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: hj.OA, children: (0, r.jsx)(hR, {}) }),
                    (0, r.jsx)(hw, {
                        onChange: function (e) {
                            switch ((i(e), e)) {
                                case hO.UNENROLLED:
                                    l({ ...t, userStatus: null });
                                    break;
                                case hO.ENROLLED:
                                    l({ ...t, userStatus: hG({ enrolledAt: new Date().toISOString() }) });
                                    break;
                                case hO.COMPLETED_25:
                                    l({
                                        ...t,
                                        userStatus: hG({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * N,
                                        }),
                                    });
                                    break;
                                case hO.COMPLETED_50:
                                    l({
                                        ...t,
                                        userStatus: hG({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * N,
                                        }),
                                    });
                                    break;
                                case hO.COMPLETED_75:
                                    l({
                                        ...t,
                                        userStatus: hG({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * N,
                                        }),
                                    });
                                    break;
                                case hO.COMPLETED_100:
                                    l({
                                        ...t,
                                        userStatus: hG({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: N,
                                        }),
                                    });
                                    break;
                                case hO.CLAIMED:
                                    l({
                                        ...t,
                                        userStatus: hG({
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
            (0, r.jsx)(G.D, { variant: "heading-lg/bold", className: hj.R_, children: "Component Previews" }),
            (0, r.jsxs)("div", {
                className: hj.$$,
                children: [
                    (0, r.jsxs)(hy, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(G.D, { variant: "heading-sm/semibold", children: "Quest Bar" }),
                            (0, r.jsxs)("div", {
                                className: hj.l4,
                                children: [
                                    t.userStatus?.claimedAt != null &&
                                        (0, r.jsx)(C.E, {
                                            color: "text-subtle",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, r.jsx)("div", {
                                        className: hj.ok,
                                        children: (0, r.jsx)(hr.jY, {
                                            isPreview: !0,
                                            source: "preview",
                                            questId: "0",
                                            children: (0, r.jsx)(hd.A, { children: (0, r.jsx)(ho.Y, { quest: t }) }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(hy, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(G.D, { variant: "heading-sm/semibold", children: "Quest Home Card" }),
                            (0, r.jsx)(hr.jY, {
                                isPreview: !0,
                                source: "preview",
                                questId: "0",
                                children: (0, r.jsx)(hh.Ay, {
                                    quest: t,
                                    className: hj.d,
                                    questContent: hl.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: hl.uF.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(hy, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(G.D, { variant: "heading-sm/semibold", children: "Channel Call Header" }),
                            t.userStatus?.claimedAt != null &&
                                (0, r.jsx)(C.E, {
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children:
                                        "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                                }),
                            (0, r.jsx)("div", {
                                className: hj.l4,
                                children: (0, r.jsx)(hr.jY, {
                                    isPreview: !0,
                                    source: "preview",
                                    questId: "0",
                                    children: (0, r.jsx)("div", {
                                        className: hj.Jr,
                                        children: (0, r.jsx)(hc.A, {
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
                        className: hj.NY,
                        children: (0, r.jsx)(tI.d, {
                            label: "Is Participating:",
                            checked: c,
                            onChange: function (e) {
                                u(e);
                            },
                        }),
                    }),
                    (0, r.jsxs)(hy, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(G.D, { variant: "heading-sm/semibold", children: "Quest Card Embed" }),
                            m
                                ? (0, r.jsx)(hu.l, { questId: t.id })
                                : (0, r.jsx)(
                                      hm.M,
                                      {
                                          quest: t,
                                          location: hl.uF.QUESTS_EMBED,
                                          sourceQuestContent: hl.uF.INTERNAL_PREVIEW_TOOL,
                                      },
                                      t.id,
                                  ),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: hj.NY,
                        children: (0, r.jsx)(tI.d, { label: "Invalid Quests Embed:", checked: m, onChange: x }),
                    }),
                    A &&
                        (0, r.jsxs)(hy, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, r.jsx)(G.D, { variant: "heading-sm/semibold", children: "Video Player" }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        let e = performance.now();
                                        (0, S.openModalLazy)(async () => {
                                            let { default: n } = await Promise.all([
                                                a.e("31430"),
                                                a.e("81273"),
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
                                                    sourceQuestContent: hl.uF.INTERNAL_PREVIEW_TOOL,
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
class h$ extends o.Component {
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
                  className: hj.TA,
                  children: [
                      (0, r.jsx)(ha.E, { className: hj.Yw }),
                      (0, r.jsx)(G.D, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, r.jsx)(h.$, { variant: "secondary", text: "Reset", onClick: this.handleResetState }),
                      null != e.message &&
                          (0, r.jsx)(hn.Z, {
                              className: hj.Fx,
                              children: (0, r.jsx)("code", { className: hj.gJ, children: e.message }),
                          }),
                  ],
              })
            : (0, r.jsx)(hV, {}, t);
    }
}
var hW = a(913122),
    hz = a(839214),
    hH = a(77138),
    hK = a(450827),
    hY = a(626584),
    hq = a(174768),
    hJ = a(205761),
    hQ = a(860071),
    hX = a(696451),
    hZ = a(860689),
    h0 = a(926140);
let h1 = new hY.A("SearchDebugUtils");
function h2() {
    h1.info("--------------------------");
}
function h8() {
    let e = hq.A.getProps();
    h1.info("START Quick Switcher State"),
        h1.info(`Query: ${e.query}`),
        e.results.forEach((e) => {
            switch ((h1.info(`Result Type: ${e.type}`), e.type)) {
                case h0.rD.GUILD:
                    h1.info(`guild id: ${e.record.id}`);
                    break;
                case h0.rD.TEXT_CHANNEL:
                case h0.rD.VOICE_CHANNEL:
                    h1.info(`channel type: ${e.record.type}`),
                        h1.info(`channel id: ${e.record.id}`),
                        h1.info(`name: ${e.record.name}`);
                    break;
                case h0.rD.DM:
                    h1.info(`channel type: ${e.record.type}`),
                        h1.info(`channel id: ${e.record.id}`),
                        e.record.isDM() &&
                            (h1.info(`recipient id: ${e.record.getRecipientId()}`),
                            e.record.recipients.forEach((e) => {
                                let t = Q.default.getUser(e);
                                null != t &&
                                    (h1.info(`recipient username: ${t.username}`),
                                    h1.info(`recipient global name: ${en.Ay.getGlobalName(t)}`),
                                    h1.info(`recipient nickname: ${ap.A.getNickname(t.id)}`));
                            }));
                    break;
                case h0.rD.GROUP_DM:
                    h1.info(`channel type: ${e.record.type}`),
                        h1.info(`channel id: ${e.record.id}`),
                        h1.info(`name: ${(0, ah.m1)(e.record, Q.default, ap.A)}`),
                        e.record.isGroupDM() &&
                            (h1.info(`default name: ${(0, ah.ks)(e.record, Q.default, ap.A)}`),
                            h1.info(`recipient id: ${e.record.recipients}`),
                            e.record.recipients.forEach((e) => {
                                let t = Q.default.getUser(e);
                                null != t &&
                                    (h1.info(`recipient username: ${t.username}`),
                                    h1.info(`recipient global name: ${en.Ay.getGlobalName(t)}`),
                                    h1.info(`recipient nickname: ${ap.A.getNickname(t.id)}`));
                            }));
                    break;
                case h0.rD.USER:
                    h1.info(`user id: ${e.record.id}`),
                        h1.info(`username: ${e.record.username}`),
                        h1.info(`global name: ${en.Ay.getGlobalName(e.record)}`),
                        h1.info(`nickname: ${ap.A.getNickname(e.record.id)}`),
                        h1.info(`guild nicknames: ${hX.Ay.getNicknames(e.record.id)}`);
            }
            h1.info(`frecency score: ${hJ.A.getScoreWithoutFetchingLatest(e.record.id)}`), h2();
        }),
        h1.info("END Quick Switcher State\n");
}
async function h3() {
    h1.info("START User Search Worker State");
    let e = await hK.A.requestDebugState();
    null == e
        ? h1.info("Unable to get debug state from User Search Worker")
        : (Object.entries(JSON.parse(e.users)).forEach((e) => {
              let [t, a] = e;
              h1.info(`id: ${t}`),
                  h1.info(`username: ${a.username}`),
                  h1.info(`global name: ${a.globalName}`),
                  h1.info(`nickname: ${a.friendNickname}`),
                  Object.entries(a.nicknames).forEach((e) => {
                      let [t, a] = e;
                      h1.info(`guild id: ${t}`), h1.info(`guild nickname: ${a}`);
                  }),
                  h2();
          }),
          h1.info("END User Search Worker State\n"));
}
async function h6() {
    let e = await hK.A.requestDebugState();
    if (null == e) throw Error("Unable to get debug state from User Search Worker");
    let t = JSON.parse(e.users),
        a = Q.default.getUsers(),
        n = new Set(Object.keys(t)),
        l = m$.default.keys(a),
        s = [];
    return (
        l.forEach((e) => {
            n.has(e) || s.push(e);
        }),
        s
    );
}
async function h5(e) {
    let t = await hK.A.requestDebugState(),
        a = null != t ? JSON.parse(t.users)[e] : null,
        n = a4.A.getGuildIds(),
        l = [];
    n.forEach((t) => {
        let a = hX.Ay.getMember(t, e);
        null != a && l.push(a);
    });
    let s = hQ.A.getDebugState(e);
    return { user: Q.default.getUser(e), searchWorkerUser: a, guildMembers: l, guildMemberRequests: s };
}
var h4 = a(929948);
function h9(e) {
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
                (0, r.jsx)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: h4.qS,
                    children: n,
                }),
            a &&
                (0, r.jsx)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: h4.qS,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
let h7 = (0, hz.D)(() => ({
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
function xe() {
    let e = h7.useField("includeFrecency"),
        t = h7.useField("includeFriends"),
        a = h7.useField("includeDMs"),
        n = h7.useField("includeGDMs"),
        l = h7.useField("includeQuickSwitcherState"),
        s = h7.useField("includeUserSearchWorkerState"),
        i = h7.useField("isUploading"),
        d = h7.useField("isSuccess"),
        c = h7.useField("errorMessage"),
        m = o.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: a,
                includeDMs: n,
                includeQuickSwitcherState: l,
                includeUserSearchWorkerState: s,
                isUploading: i,
            } = h7.getState();
            if (!i)
                try {
                    let i, r, o, d, c, u, m, h, x, p, g, v;
                    h7.setState({ isUploading: !0, errorMessage: null, isSuccess: !1 }),
                        t &&
                            ((i = ap.A.getFriendIDs()),
                            h1.info("START Discord Friends"),
                            i.forEach((e) => {
                                let t = Q.default.getUser(e);
                                if (null == t) return;
                                let a = t.username,
                                    n = en.Ay.getGlobalName(t),
                                    l = ap.A.getNickname(t.id),
                                    s = hX.Ay.getNicknames(t.id);
                                h1.info(`username: ${a}`),
                                    h1.info(`global name: ${n}`),
                                    h1.info(`nickname: ${l}`),
                                    h1.info(`guild nicknames: ${s}`),
                                    h2();
                            }),
                            h1.info("END Discord Friends\n")),
                        a &&
                            ((r = ax.A.getMutablePrivateChannels()),
                            (o = []),
                            (d = []),
                            Object.values(r).forEach((e) => {
                                e.isGroupDM() && o.push(e), e.isDM() && d.push(e);
                            }),
                            h1.info("START Logging Group DM Channels"),
                            o.forEach((e) => {
                                let t = (0, ah.m1)(e, Q.default, ap.A),
                                    a = (0, ah.ks)(e, Q.default, ap.A);
                                h1.info(`id: ${e.id}`),
                                    h1.info(`name: ${t}`),
                                    h1.info(`default name: ${a}`),
                                    h1.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = Q.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = en.Ay.getGlobalName(t),
                                            l = ap.A.getNickname(t.id),
                                            s = hX.Ay.getNicknames(t.id);
                                        h1.info(`username: ${a}`),
                                            h1.info(`global name: ${n}`),
                                            h1.info(`nickname: ${l}`),
                                            h1.info(`guild nicknames: ${s}`),
                                            h2();
                                    });
                            }),
                            h1.info("END Logging Group DM Channels\n"),
                            h1.info("START Logging DM Channels"),
                            d.forEach((e) => {
                                let t = (0, ah.m1)(e, Q.default, ap.A);
                                h1.info(`id: ${e.id}`), h1.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    n = Q.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    s = en.Ay.getGlobalName(n),
                                    i = ap.A.getNickname(n.id);
                                h1.info(`username: ${l}`),
                                    h1.info(`global name: ${s}`),
                                    h1.info(`nickname: ${i}`),
                                    h2();
                            }),
                            h1.info("END Logging DM Channels\n")),
                        n &&
                            ((c = ax.A.getMutablePrivateChannels()),
                            (u = []),
                            (m = []),
                            Object.values(c).forEach((e) => {
                                e.isGroupDM() && u.push(e), e.isDM() && m.push(e);
                            }),
                            h1.info("START Logging Group DM Channels"),
                            u.forEach((e) => {
                                let t = (0, ah.m1)(e, Q.default, ap.A),
                                    a = (0, ah.ks)(e, Q.default, ap.A);
                                h1.info(`id: ${e.id}`),
                                    h1.info(`name: ${t}`),
                                    h1.info(`default name: ${a}`),
                                    h1.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = Q.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = en.Ay.getGlobalName(t),
                                            l = ap.A.getNickname(t.id),
                                            s = hX.Ay.getNicknames(t.id);
                                        h1.info(`username: ${a}`),
                                            h1.info(`global name: ${n}`),
                                            h1.info(`nickname: ${l}`),
                                            h1.info(`guild nicknames: ${s}`),
                                            h2();
                                    });
                            }),
                            h1.info("END Logging Group DM Channels\n"),
                            h1.info("START Logging DM Channels"),
                            m.forEach((e) => {
                                let t = (0, ah.m1)(e, Q.default, ap.A);
                                h1.info(`id: ${e.id}`), h1.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    n = Q.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    s = en.Ay.getGlobalName(n),
                                    i = ap.A.getNickname(n.id);
                                h1.info(`username: ${l}`),
                                    h1.info(`global name: ${s}`),
                                    h1.info(`nickname: ${i}`),
                                    h2();
                            }),
                            h1.info("END Logging DM Channels\n")),
                        e &&
                            ((h = hJ.A.getFrequentlyWithoutFetchingLatest()),
                            (x = []),
                            (p = []),
                            (g = []),
                            (v = []),
                            h.forEach((e) => {
                                (0, hZ.fh)(e)
                                    ? x.push(e)
                                    : e.isDM()
                                      ? g.push(e)
                                      : e.isMultiUserDM()
                                        ? v.push(e)
                                        : p.push(e);
                            }),
                            h1.info("START Frecency"),
                            h1.info("Guilds"),
                            x.forEach((e) => {
                                let t = hJ.A.getScoreWithoutFetchingLatest(e.id);
                                h1.info(`id: ${e.id} - name: ${e.name} - Frecency Score: ${t}`);
                            }),
                            h2(),
                            h1.info("DM Channels"),
                            g.forEach((e) => {
                                let t = hJ.A.getScoreWithoutFetchingLatest(e.id);
                                h1.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            h2(),
                            h1.info("Group DM Channels"),
                            v.forEach((e) => {
                                let t = hJ.A.getScoreWithoutFetchingLatest(e.id);
                                h1.info(`id: ${e.id} - Frecency Score: ${t}`),
                                    h1.info(`default name: ${(0, ah.ks)(e, Q.default, ap.A)}`),
                                    h1.info(`name: ${(0, ah.m1)(e, Q.default, ap.A)}`);
                            }),
                            h2(),
                            h1.info("Guild Channels"),
                            p.forEach((e) => {
                                let t = hJ.A.getScoreWithoutFetchingLatest(e.id);
                                h1.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            h2(),
                            h1.info("END Frecency\n")),
                        l && h8(),
                        s && h3(),
                        await (0, hH.a)(et.Umv.WEB_APP),
                        h7.setState({ isSuccess: !0, errorMessage: null });
                } catch (t) {
                    let e = new hW.LG(t);
                    h7.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    h7.setState({ isUploading: !1 });
                }
        }, []);
    return (0, r.jsxs)(u.n, {
        label: "Debug Logs Snapshot",
        description:
            "Uploading a snapshot of the client state can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue.",
        children: [
            (0, r.jsx)(tI.d, {
                label: "Frecency",
                description:
                    "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
                checked: e,
                onChange: () => h7.setState({ includeFrecency: !e }),
            }),
            (0, r.jsx)(tI.d, {
                label: "Friends",
                description: "Includes all Discord Friend usernames, global names, and nicknames.",
                checked: t,
                onChange: () => h7.setState({ includeFriends: !t }),
            }),
            (0, r.jsx)(tI.d, {
                label: "DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                checked: a,
                onChange: () => h7.setState({ includeDMs: !a }),
            }),
            (0, r.jsx)(tI.d, {
                label: "Group DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                checked: n,
                onChange: () => h7.setState({ includeGDMs: !n }),
            }),
            (0, r.jsx)(tI.d, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: l,
                onChange: () => h7.setState({ includeQuickSwitcherState: !l }),
            }),
            (0, r.jsx)(tI.d, {
                label: "User Search Worker",
                description:
                    "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                checked: s,
                onChange: () => h7.setState({ includeUserSearchWorkerState: !s }),
            }),
            (0, r.jsx)(h9, {
                isUploading: i,
                isSuccess: d,
                errorMessage: c,
                onClick: m,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
let xt = (0, hz.D)(() => ({ userIds: [], isLoading: !1, isSuccess: !1, errorMessage: null, lastRunAt: null }));
function xa() {
    let e = xt.useField("userIds"),
        t = xt.useField("isLoading"),
        a = xt.useField("isSuccess"),
        n = xt.useField("errorMessage"),
        l = xt.useField("lastRunAt"),
        s = o.useCallback(async () => {
            xt.setState({ isLoading: !0, errorMessage: null, isSuccess: !1 });
            try {
                let e = await h6();
                xt.setState({ userIds: e, errorMessage: null, isSuccess: !0, lastRunAt: new Date().toISOString() });
            } catch (e) {
                xt.setState({ errorMessage: e, isSuccess: !1 });
            } finally {
                xt.setState({ isLoading: !1 });
            }
        }, []),
        i = o.useMemo(
            () =>
                e.map((e) => {
                    let t = Q.default.getUser(e),
                        a = null != t ? en.Ay.getName(t) : "Unknown";
                    return (0, r.jsx)(
                        "div",
                        {
                            className: h4.J1,
                            children: (0, r.jsx)(C.E, { variant: "text-md/normal", children: `${a} (${e})` }),
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
                    className: h4.N6,
                    children: [
                        null != n &&
                            (0, r.jsx)(C.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                className: h4.qS,
                                children: n,
                            }),
                        a &&
                            e.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(C.E, { variant: "text-md/normal", children: `Last run at: ${l}` }),
                                    (0, r.jsx)(C.E, {
                                        variant: "text-md/normal",
                                        children: "User IDs missing from Worker:",
                                    }),
                                    (0, r.jsx)("div", { className: h4.uk, children: i }),
                                ],
                            }),
                        a &&
                            0 === e.length &&
                            (0, r.jsx)(C.E, { variant: "text-md/normal", children: "No users missing from Worker" }),
                    ],
                }),
            ],
        }),
    });
}
let xn = (0, hz.D)(() => ({ isRecording: !1, isUploading: !1, isSuccess: !1, errorMessage: null }));
function xl() {
    let e = xn.useField("isRecording"),
        t = xn.useField("isUploading"),
        a = xn.useField("isSuccess"),
        n = xn.useField("errorMessage"),
        l = o.useRef([]),
        s = o.useRef(""),
        i = o.useCallback(() => {
            let { results: e, query: t } = hq.A.getProps();
            (l.current !== e || s.current !== t) && ((l.current = e), (s.current = t), h8());
        }, []);
    o.useEffect(() => {
        if (e) return hq.A.addChangeListener(i), () => hq.A.removeChangeListener(i);
    }, [i, e]);
    let d = o.useCallback(async () => {
        let { isUploading: e } = xn.getState();
        if (!e)
            try {
                xn.setState({ isRecording: !1, isUploading: !0, errorMessage: null, isSuccess: !1 }),
                    await (0, hH.a)(et.Umv.WEB_APP),
                    xn.setState({ isSuccess: !0, errorMessage: null });
            } catch (t) {
                let e = new hW.LG(t);
                xn.setState({ errorMessage: e.getAnyErrorMessage() });
            } finally {
                xn.setState({ isUploading: !1 });
            }
    }, []);
    return (0, r.jsxs)(u.n, {
        label: "Debug Logs Session",
        description:
            "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
        children: [
            (0, r.jsx)(u5.p, {
                messageType: u5.Y.INFO,
                children: "When you are done, please remember to upload the logs.",
            }),
            (0, r.jsxs)(sl.e, {
                children: [
                    (0, r.jsx)(h.$, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => xn.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, r.jsx)(h9, {
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
var xs = a(145497);
let xi = (0, hz.D)(() => ({ userId: null, state: null, loading: !1, error: null }));
function xr(e) {
    let { title: t, guildIds: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: h4.J1,
                children: (0, r.jsx)(C.E, { variant: "text-sm/normal", children: t }),
            }),
            (0, r.jsxs)("div", {
                className: h4.uk,
                children: [
                    0 === a.length &&
                        (0, r.jsx)("div", {
                            className: h4.J1,
                            children: (0, r.jsx)(C.E, { variant: "text-sm/normal", children: "None" }),
                        }),
                    a.map((e) => {
                        let t = a4.A.getGuild(e);
                        return null == t
                            ? null
                            : (0, r.jsxs)(
                                  "div",
                                  {
                                      className: h4.J1,
                                      children: [
                                          (0, r.jsx)(xs.Ay, { guild: t, iconSize: 16 }),
                                          (0, r.jsx)(C.E, { variant: "text-sm/normal", children: t.name }),
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
function xo(e) {
    let { userState: t } = e,
        { user: a, searchWorkerUser: n, guildMembers: l, guildMemberRequests: s } = t,
        i = o.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, r.jsx)(s0.y, { size: "sm", color: eL.A.colors.STATUS_POSITIVE })
                : (0, r.jsx)(ha.E, { size: "sm", color: eL.A.colors.ICON_FEEDBACK_CRITICAL });
        }, []);
    return (0, r.jsxs)("div", {
        className: h4.N6,
        children: [
            (0, r.jsxs)("div", {
                className: h4.J1,
                children: [
                    i({ ok: null != a }),
                    (0, r.jsx)(C.E, {
                        variant: "text-sm/normal",
                        children: null != a ? "User exists in UserStore" : "User does not exist in UserStore",
                    }),
                ],
            }),
            null != a &&
                (0, r.jsx)("div", {
                    className: h4.uk,
                    children: (0, r.jsx)("div", {
                        className: h4.J1,
                        children: (0, r.jsx)(C.E, { variant: "text-sm/normal", children: `username: ${a.username}` }),
                    }),
                }),
            (0, r.jsxs)("div", {
                className: h4.J1,
                children: [
                    i({ ok: null != n }),
                    (0, r.jsx)(C.E, {
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
                    className: h4.uk,
                    children: [
                        (0, r.jsx)("div", {
                            className: h4.J1,
                            children: (0, r.jsx)(C.E, {
                                variant: "text-sm/normal",
                                children: `username: ${n.username}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: h4.J1,
                            children: (0, r.jsx)(C.E, {
                                variant: "text-sm/normal",
                                children: `global name: ${n.globalName ?? "\u2014"}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: h4.J1,
                            children: (0, r.jsx)(C.E, { variant: "text-sm/normal", children: "nicknames:" }),
                        }),
                        (0, r.jsxs)("div", {
                            className: h4.uk,
                            children: [
                                0 === Object.keys(n.nicknames).length &&
                                    (0, r.jsx)("div", {
                                        className: h4.J1,
                                        children: (0, r.jsx)(C.E, { variant: "text-sm/normal", children: "None" }),
                                    }),
                                Object.entries(n.nicknames).map((e) => {
                                    let [t, a] = e,
                                        n = a4.A.getGuild(t),
                                        l = ax.A.getChannel(t);
                                    return (0, r.jsxs)(
                                        "div",
                                        {
                                            className: h4.J1,
                                            children: [
                                                null != n && (0, r.jsx)(xs.Ay, { guild: n, iconSize: 16 }),
                                                null != n &&
                                                    (0, r.jsx)(C.E, { variant: "text-sm/normal", children: n.name }),
                                                null == n &&
                                                    null != l &&
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-sm/normal",
                                                        children: (0, ah.m1)(l, Q.default, ap.A),
                                                    }),
                                                (0, r.jsx)(C.E, { variant: "text-sm/normal", children: ` (${t})` }),
                                                null != a &&
                                                    "" !== a &&
                                                    (0, r.jsx)(C.E, { variant: "text-sm/normal", children: ` - ${a}` }),
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
                className: h4.J1,
                children: [
                    i({ ok: l.length > 0 }),
                    (0, r.jsx)(C.E, {
                        variant: "text-sm/normal",
                        children: l.length > 0 ? "Guild members exist:" : "No guild members exist",
                    }),
                ],
            }),
            l.length > 0 &&
                (0, r.jsx)("div", {
                    className: h4.uk,
                    children: l.map((e) => {
                        let t = a4.A.getGuild(e.guildId);
                        if (null == t) return null;
                        let a = e.nick ?? "";
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: h4.J1,
                                children: [
                                    (0, r.jsx)(xs.Ay, { guild: t, iconSize: 16 }),
                                    (0, r.jsxs)(C.E, {
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
                className: h4.J1,
                children: [
                    (0, r.jsx)(cS.m, { size: "sm" }),
                    (0, r.jsx)(C.E, { variant: "text-sm/normal", children: "GuildMemberRequesterStore State" }),
                ],
            }),
            null != s &&
                (0, r.jsxs)("div", {
                    className: h4.uk,
                    children: [
                        (0, r.jsx)(xr, { title: "Pending Guild Member Requests:", guildIds: s.pendingRequestGuildIds }),
                        (0, r.jsx)(xr, { title: "Sent Guild Member Requests:", guildIds: s.sentRequestGuildIds }),
                        (0, r.jsx)(xr, {
                            title: "Unacknowledged Guild Member Requests:",
                            guildIds: s.unacknowledgedRequestGuildIds,
                        }),
                    ],
                }),
        ],
    });
}
function xd() {
    let e = o.useCallback((e) => {
            xi.setState({ userId: e, state: null });
        }, []),
        t = o.useCallback(async () => {
            let { userId: e, loading: t } = xi.getState();
            if (!t && null != e) {
                xi.setState({ loading: !0, error: null });
                try {
                    let t = await h5(e);
                    xi.setState({ state: t, loading: !1 });
                } catch (t) {
                    let e = new hW.LG(t);
                    xi.setState({ error: e.getAnyErrorMessage(), loading: !1 });
                } finally {
                    xi.setState({ loading: !1 });
                }
            }
        }, []),
        a = xi.useField("loading");
    return (0, r.jsxs)("div", {
        className: h4.$n,
        children: [
            (0, r.jsx)(p.k, { placeholder: "User ID", onChange: e }),
            (0, r.jsx)(h.$, { onClick: t, text: "Get Snapshot", loading: a, disabled: a }),
        ],
    });
}
function xc() {
    let e = xi.useField("state"),
        t = xi.useField("error");
    return (0, r.jsxs)(u.n, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, r.jsx)(xd, {}),
            null != t &&
                (0, r.jsx)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: h4.qS,
                    children: t,
                }),
            null != e && (0, r.jsx)(xo, { userState: e }),
        ],
    });
}
function xu() {
    return (0, r.jsxs)(d.Ip, {
        className: h4.nd,
        children: [
            (0, r.jsx)(xl, {}),
            (0, r.jsx)(al.c, {}),
            (0, r.jsx)(xe, {}),
            (0, r.jsx)(al.c, {}),
            (0, r.jsx)(xc, {}),
            (0, r.jsx)(al.c, {}),
            (0, r.jsx)(xa, {}),
        ],
    });
}
var xm = a(761508),
    xh = a(599147),
    xx = a(808411),
    xp = a(624716),
    xg = a(398590),
    xv = a(848281),
    xj = a(263419),
    xb = a(52822),
    xf = a(642153);
let xy = [
        { id: "virtual-currency", name: "Virtual Current (Orb) Components" },
        { id: "nitro", name: "Nitro Components" },
    ],
    x_ = {
        "virtual-currency": function () {
            return (0, r.jsxs)(xb.Hq, {
                label: "Open New Revenue Storybook",
                direction: "vertical",
                children: [
                    (0, r.jsx)(C.E, {
                        variant: "text-md/normal",
                        color: "text-feedback-info",
                        style: { marginBottom: "8px" },
                        children: "This section is deprecated. Use button to open the new Revenue Storybook instead.",
                    }),
                    (0, r.jsx)(h.$, {
                        onClick: () => {
                            var e;
                            return (
                                (e = xj.RevenuePlaygroundCollectionId.VIRTUAL_CURRENCY),
                                void (xv.PlaygroundStore.setState({ selectedCollection: e, selectedStory: null }),
                                (0, xg.id)(et.zgK.COMPONENT_PLAYGROUND))
                            );
                        },
                        text: "Open New Revenue Storybook",
                    }),
                ],
            });
        },
        nitro: () =>
            (0, r.jsxs)("div", { children: [(0, r.jsx)(xh.o, {}), (0, r.jsx)(xx.A, {}), (0, r.jsx)(xp.A, {})] }),
    };
function xE() {
    let [e, t] = o.useState("virtual-currency"),
        a = o.useMemo(() => x_[e], [e]);
    return (0, r.jsxs)("div", {
        className: w()(tM.nd, xf.kL),
        children: [
            (0, r.jsx)(xm.V, {
                className: xf.$H,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: xy.map((e) => (0, r.jsx)(xm.V.Item, { id: e.id, children: e.name }, e.id)),
            }),
            (0, r.jsx)(d.Ar, { children: (0, r.jsx)("div", { className: xf.Qs, children: (0, r.jsx)(a, {}) }) }),
        ],
    });
}
var xC = a(718446),
    xS = a(766075),
    xN = a(355097);
let xA = (0, hz.D)(() => ({ urlString: "", error: null })),
    xk = Object.entries(xN.od).map((e) => {
        let [t, a] = e;
        return { id: t, label: a, value: t };
    });
function xD() {
    let [e, t] = o.useState(),
        a = xA.useField("urlString"),
        n = xA.useField("error"),
        l = o.useCallback(() => {
            let e = xA.getField("urlString");
            if (null == e || "" === e) return void xA.setState({ error: "URL is required" });
            let t = (0, xC.parseSettingsUrl)({ path: e });
            ((0, xC.trackParseSettingsUrl)(t, "devtools"), null == t.target)
                ? xA.setState({ error: "String did not match expected format" })
                : (0, xS.openUserSettings)(t.target, { path: t.path });
        }, []);
    return (0, r.jsxs)(u.n, {
        label: "Settings Deep Link Tool",
        children: [
            (0, r.jsx)(t6.Z, {
                label: "[optional] Choose a path",
                clearable: !0,
                value: e,
                placeholder: "Select a settings path",
                options: xk,
                selectionMode: "single",
                onSelectionChange: (e) => {
                    if ((t(e), null != e)) {
                        let [t, a] = xN.od[e].split("/");
                        xA.setState({ urlString: et.BVt.SETTINGS(t, a), error: null });
                    }
                },
                fullWidth: !0,
            }),
            (0, r.jsx)(p.k, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                value: a,
                onChange: (e) => xA.setState({ urlString: e, error: null }),
            }),
            (0, r.jsxs)(sl.e, {
                children: [
                    (0, r.jsx)(h.$, {
                        variant: "primary",
                        onClick: l,
                        text: "Open User Settings for URL",
                        disabled: "" === a,
                    }),
                    (0, r.jsx)(h.$, {
                        variant: "secondary",
                        onClick: () => (0, nC.C)(`${window.location.origin}${a}`),
                        disabled: "" === a,
                        text: "Copy URL",
                    }),
                ],
            }),
            null != n && (0, r.jsx)(C.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
var xI = a(780964);
let xT = (0, hz.D)(() => ({ setting: xI.X.ACCOUNT_PANEL }));
function xR() {
    let e = xT.useField("setting"),
        t = o.useCallback(() => {
            (0, xS.openUserSettings)(e);
        }, [e]),
        a = o.useMemo(() => Object.values(xI.X).map((e) => ({ id: e, label: e, value: e })), []);
    return (0, r.jsxs)(u.n, {
        label: "Settings Navigation Tool",
        children: [
            (0, r.jsx)(t6.Z, {
                label: "Setting",
                placeholder: "Select a setting",
                value: e,
                onSelectionChange: (e) => xT.setState({ setting: e }),
                options: a,
                selectionMode: "single",
                clearable: !0,
            }),
            (0, r.jsx)(h.$, { variant: "primary", onClick: t, text: "Open User Settings" }),
        ],
    });
}
var xO = a(963935),
    xw = a(710142),
    xM = a(53181);
function xL(e) {
    let { title: t, initExpanded: a, highlightMode: n = "none", children: l } = e,
        [s, i] = o.useState(a),
        d = o.useCallback(() => {
            i(!s);
        }, [s]),
        c = "migrated" === n || "migrated-root" === n ? void 0 : "status-warning",
        u = (e) => (0, r.jsx)(C.E, { variant: e, color: c, children: t });
    return null == l
        ? (0, r.jsx)("div", { className: xM.NF, children: u("text-md/normal") })
        : (0, r.jsxs)("div", {
              className: xM.NF,
              children: [
                  (0, r.jsxs)(M.D, {
                      className: xM.jr,
                      onClick: d,
                      children: [
                          u("text-md/bold"),
                          (0, r.jsx)(sh.A, {
                              direction: s ? sh.A.Directions.DOWN : sh.A.Directions.RIGHT,
                              className: xM.D,
                          }),
                      ],
                  }),
                  s && (0, r.jsx)("div", { className: xM.m4, children: l }),
              ],
          });
}
function xP(e) {
    let { setting: t, depth: a, inheritedHighlightMode: n } = e,
        l = (function (e, t) {
            if ("migrated" === t) return "migrated";
            switch (e.type) {
                case xO.Z6.ROOT:
                    return "migrated-root";
                case xO.Z6.SECTION:
                case xO.Z6.PANEL:
                case xO.Z6.SIDEBAR_ITEM:
                    return "migrated";
                default:
                    return t ?? "migrated";
            }
        })(t, n),
        s = "migrated" === l ? "migrated" : void 0,
        i = null;
    return (
        (0, xO.nW)(t) &&
            t.layout.length > 0 &&
            (i = t.layout.map((e) => (0, r.jsx)(xP, { setting: e, depth: a + 1, inheritedHighlightMode: s }, e.key))),
        (0, r.jsx)(xL, { title: t.key, initExpanded: a <= 2, highlightMode: l, children: i })
    );
}
function xU() {
    let { node: e } = (0, q.Ay)(xw.D, ""),
        t = (0, q.KA)();
    return (0, r.jsxs)(u.n, {
        label: "Settings Tree",
        children: [
            (0, r.jsx)(tI.d, {
                label: "Bypass Predicates",
                description: "Forces all migrated settings to be visible.",
                checked: t,
                onChange: q.jL,
            }),
            (0, r.jsx)(xP, { setting: e, depth: 1 }, e.key),
        ],
    });
}
var xG = a(168803);
function xB() {
    return (0, r.jsxs)(d.Ip, {
        className: xG.n,
        children: [
            (0, r.jsx)(xR, {}),
            (0, r.jsx)(al.c, {}),
            (0, r.jsx)(xD, {}),
            (0, r.jsx)(al.c, {}),
            (0, r.jsx)(xU, {}),
        ],
    });
}
function xF() {
    return o.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: aQ.fu.EXPERIMENTS,
                tags: ["events", "impressions", "tracking"],
                render: () => (0, r.jsx)(nK, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: aQ.fu.EXPERIMENTS,
                tags: ["experiments", "exposure", "buckets"],
                render: () => (0, r.jsx)(u6, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: aQ.fu.EVENTS,
                tags: ["flux", "state"],
                render: () => (0, r.jsx)(u0, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: aQ.fu.EVENTS,
                tags: ["flux", "actions"],
                render: () => (0, r.jsx)(se, {}),
            },
        ];
        return (
            aM.A.isDeveloper &&
                (e.push({ id: "shop", name: "Shop Overrides", group: aQ.fu.SHOP, render: () => (0, r.jsx)(uW, {}) }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: aQ.fu.BILLING,
                    tags: ["gifts", "nitro", "boost", "sku", "collectibles"],
                    render: () => (0, r.jsx)(dI, {}),
                }),
                e.push({
                    id: "shop_collectibles",
                    name: "Collectibles Preview",
                    group: aQ.fu.SHOP,
                    render: () => (0, r.jsx)(tN, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: aQ.fu.DEVELOPMENT,
                    tags: ["captcha", "safety", "vibe", "vibing", "override", "premium type"],
                    render: () => (0, r.jsx)(cq, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: aQ.fu.DEVELOPMENT,
                    tags: ["secure frames", "encryption"],
                    render: () => (0, r.jsx)(sn, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: aQ.fu.DEVELOPMENT,
                    tags: ["fps", "frames", "gateway", "telemetry"],
                    render: () => (0, r.jsx)(d6.Ay, {}),
                }),
                e.push({
                    id: "age_verification",
                    name: "Age Verification",
                    group: aQ.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(nm, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: aQ.fu.USERS,
                    tags: ["surveys"],
                    render: () => (0, r.jsx)(sc, {}),
                }),
                e.push({ id: "overlay", name: "Overlay v3", group: aQ.fu.GAMES, render: () => (0, r.jsx)(dm, {}) }),
                e.push({
                    id: "generated_test_user",
                    name: "Generated Test Users",
                    group: aQ.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(im, {}),
                }),
                aL.isPlatformEmbedded &&
                    e.push({
                        id: "detected_games",
                        name: "Detected Games",
                        group: aQ.fu.GAMES,
                        render: () => (0, r.jsx)(lW, {}),
                    }),
                e.push({ id: "slayer_sdk", name: "Slayer SDK", group: aQ.fu.GAMES, render: () => (0, r.jsx)(uH, {}) }),
                e.push({
                    id: "account_linking",
                    name: "Account Linking",
                    group: aQ.fu.GAMES,
                    render: () => (0, r.jsx)(nl, {}),
                }),
                e.push({
                    id: "game_upsells",
                    name: "Game Upsells",
                    group: aQ.fu.GAMES,
                    tags: ["dismissible", "cooldown", "dcf"],
                    render: () => (0, r.jsx)(au, {}),
                }),
                e.push({
                    id: "slayer_storefront",
                    name: "Slayer Storefront",
                    group: aQ.fu.GAMES,
                    render: () => (0, r.jsx)(aw, {}),
                }),
                e.push({
                    id: "game_profile",
                    name: "Game Profile",
                    group: aQ.fu.GAMES,
                    render: () => (0, r.jsx)(aa, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: aQ.fu.USERS,
                    render: () => (0, r.jsx)(xu, {}),
                }),
                e.push({ id: "clips", name: "Clips", group: aQ.fu.AUDIO_VIDEO, render: () => (0, r.jsx)(R, {}) })),
            e.push({
                id: "rive",
                name: "Rive",
                group: aQ.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(cZ, {}),
            }),
            e.push({
                id: "gradient-contrast",
                name: "Tab Hover Gradient",
                group: aQ.fu.UI,
                tags: ["accessibility", "contrast", "gradient", "wcag"],
                render: () => (0, r.jsx)(i0, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: aQ.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(rN, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: aQ.fu.UI,
                tags: ["i18n", "localization", "messages"],
                render: () => (0, r.jsx)(rh, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: aQ.fu.UI,
                tags: ["tokens", "themes", "palette"],
                render: () => (0, r.jsx)(ld, {}),
            }),
            e.push({ id: "design_toggles", name: "Design Toggles", group: aQ.fu.UI, render: () => (0, r.jsx)(lL, {}) }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: aQ.fu.UI,
                render: () => (0, r.jsx)(cC, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: aQ.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(sw, { devSettingsCategory: aP.xW.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: aQ.fu.USERS,
                tags: ["dm", "nux", "system dm"],
                render: () => (0, r.jsx)(rW, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: aQ.fu.EXPERIMENTS,
                render: () => (0, r.jsx)(sw, { devSettingsCategory: aP.xW.REPORTING }),
            }),
            e.push({ id: "permissions", name: "Permissions", group: aQ.fu.USERS, render: () => (0, r.jsx)(cr, {}) }),
            e.push({
                id: "modals",
                name: "Modals",
                group: aQ.fu.UI,
                tags: ["dialogs", "popups"],
                render: () => (0, r.jsx)(rZ, {}),
            }),
            e.push({
                id: "menus",
                name: "Menus",
                group: aQ.fu.UI,
                tags: ["contextmenus", "popout"],
                render: () => (0, r.jsx)(rT, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: aQ.fu.UI,
                tags: ["verification", "safety flow"],
                render: () => (0, r.jsx)(ry, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: aQ.fu.USERS,
                tags: ["friends"],
                render: () => (0, r.jsx)(no, {}),
            }),
            e.push({
                id: "channel_affinity",
                name: "Channel Affinity",
                group: aQ.fu.USERS,
                tags: ["channels"],
                render: () => (0, r.jsx)(lo, {}),
            }),
            aM.A.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: aQ.fu.USERS,
                    render: () => (0, r.jsx)(t8, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: aQ.fu.USERS,
                    render: () => (0, r.jsx)(ay, {}),
                })),
            e.push({ id: "dcf_overrides", name: "DCF Overrides", group: aQ.fu.DCF, render: () => (0, r.jsx)(lR, {}) }),
            e.push({ id: "dcf_events", name: "DCF Events", group: aQ.fu.DCF, render: () => (0, r.jsx)(lg, {}) }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: aQ.fu.EXPERIMENTS,
                tags: ["coachmarks", "nux", "onboarding"],
                render: () => (0, r.jsx)(ro, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: aQ.fu.PREMIUM,
                tags: ["nitro", "tenure", "badges", "level up"],
                render: () => (0, r.jsx)(d9, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: aQ.fu.PREMIUM,
                    tags: ["discounts", "trials", "reverse trials", "churn"],
                    render: () => (0, r.jsx)(ol, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: aQ.fu.BILLING,
                    tags: ["stripe", "cards", "test cards"],
                    render: () => (0, r.jsx)(dK, {}),
                }),
                e.push({
                    id: "orders",
                    name: "Orders",
                    group: aQ.fu.BILLING,
                    tags: ["orders"],
                    render: () => (0, r.jsx)(oc, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: aQ.fu.PREMIUM,
                    tags: ["nitro", "reverse trial"],
                    render: () => (0, r.jsx)(m3, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: aQ.fu.PREMIUM,
                    tags: ["entitlements", "quests"],
                    render: () => (0, r.jsx)(sN, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: aQ.fu.PREMIUM,
                tags: ["friends", "anniversary"],
                render: () => (0, r.jsx)(ij, {}),
            }),
            e.push({
                id: "spatial_audio",
                name: "Spatial Audio",
                group: aQ.fu.AUDIO_VIDEO,
                tags: ["spatial", "hrtf", "steam audio", "3d"],
                render: () => (0, r.jsx)(mU, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: aQ.fu.AUDIO_VIDEO,
                tags: ["noise cancellation", "audio", "vad"],
                render: () => (0, r.jsx)(mE, {}),
            }),
            e.push({
                id: "av_overrides",
                name: "Overrides",
                group: aQ.fu.AUDIO_VIDEO,
                tags: ["video", "capture", "encoder", "golive"],
                render: () => (0, r.jsx)(mo, {}),
            }),
            e.push({
                id: "batch_audio_processor",
                name: "Batch Audio Processor",
                group: aQ.fu.AUDIO_VIDEO,
                tags: ["krisp", "noise cancellation", "wav", "batch", "audio processing", "ingest"],
                render: () => (0, r.jsx)(mu, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: aQ.fu.BOOSTING,
                tags: ["boosting", "powerups", "server tag"],
                render: () => (0, r.jsx)(rl, {}),
            }),
            e.push({ id: "game_server", name: "Game Server", group: aQ.fu.BOOSTING, render: () => (0, r.jsx)(sT, {}) }),
            e.push({
                id: "language",
                name: "Language",
                group: aQ.fu.UI,
                tags: ["locale"],
                render: () => (0, r.jsx)(rp, {}),
            }),
            e.push({
                id: "user_settings",
                name: "User Settings",
                group: aQ.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(xB, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: aQ.fu.QUESTS,
                render: () => (0, r.jsx)(aS, {}),
            }),
            e.push({
                id: "virtual_currency_config",
                name: "Virtual Currency Config",
                group: aQ.fu.QUESTS,
                render: () => (0, r.jsx)(u7, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: aQ.fu.BILLING,
                render: () => (0, r.jsx)(xE, {}),
            }),
            e.push({
                id: "quest_preview",
                name: "Quest Preview",
                group: aQ.fu.QUESTS,
                render: () => (0, r.jsx)(h$, {}),
            }),
            e.push({
                id: "profile_theme_override",
                name: "Profile Theme Override",
                group: aQ.fu.USERS,
                render: () => (0, r.jsx)(cT, {}),
            }),
            e.push({
                id: "application_widget",
                name: "Application Widget",
                group: aQ.fu.USERS,
                render: () => (0, r.jsx)(n3, {}),
            }),
            e.push({
                id: "developer_portal",
                name: "Developer Portal",
                group: aQ.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(lY, {}),
            }),
            e
        );
    }, []);
}
