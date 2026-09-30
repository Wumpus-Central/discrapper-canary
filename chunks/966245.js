n.d(t, {
    ks: () => tF,
    UK: () => tZ,
    Ez: () => tH,
    _z: () => tL,
    LL: () => tD,
    Uq: () => tq,
    yR: () => tY,
    OZ: () => tK,
    $o: () => tk,
    bU: () => tU,
    Uk: () => tb,
    GN: () => tW,
    Y0: () => tJ,
    P$: () => tP,
    _d: () => tV,
    gL: () => tw,
    Dk: () => tG,
    Ab: () => tB,
});
var l,
    i = n(477900),
    s = n(582128),
    r = n(503698),
    a = n.n(r),
    o = n(435558),
    u = n.n(o),
    c = n(621466),
    d = n(17928),
    m = n(834730),
    h = n(922016),
    p = n(559106),
    f = n(821609),
    g = n(289873),
    x = n(939249),
    A = n(582394),
    C = n(306788),
    E = n(297264),
    I = n(789645),
    y = n(364522),
    S = n(148494),
    v = n(334738),
    N = n(192308),
    _ = n(267102),
    j = n(619517),
    b = n(256905),
    T = n(536763),
    R = n(218394);
class O extends s.PureComponent {
    static defaultProps = { shouldLink: !0, autoPlay: !1, animated: !1 };
    onMouseEnter = (e) => {
        let { src: t, width: n, height: l, onMouseEnter: i, handlePreloadImage: s } = this.props;
        (i?.(e), null != s) ? s() : (0, T.A)({ src: t, width: n, height: l, options: this.props });
    };
    modalContext = (0, N.modalContextFromAppContext)(this.props.appContext);
    onCloseImage = () => {
        (0, N.closeModal)(b.K, this.modalContext);
    };
    onZoom = (e, t) => {
        let { zoomThumbnailPlaceholder: n, trigger: l } = t;
        e.preventDefault();
        let {
            alt: i,
            src: s,
            original: r,
            width: a,
            height: o,
            animated: u,
            srcIsAnimated: d,
            children: m,
            shouldHideMediaOptions: h = !1,
            sourceMetadata: p,
            analyticsSource: f,
            contentType: g,
            originalContentType: x,
        } = this.props;
        ((0, c.vq)(e.currentTarget) && e.currentTarget.blur(),
            (0, b.R)({
                onClose: this.onCloseImage,
                items: [
                    {
                        url: s,
                        width: a,
                        height: o,
                        type: "IMAGE",
                        alt: i,
                        contentType: g,
                        originalContentType: x,
                        zoomThumbnailPlaceholder: n,
                        animated: u,
                        srcIsAnimated: d,
                        children: m,
                        trigger: l,
                        sourceMetadata: p,
                        original: r ?? s,
                    },
                ],
                shouldHideMediaOptions: h,
                location: f ?? "LazyImageZoomable",
                contextKey: this.modalContext,
            }));
    };
    render() {
        let { appContext: e, isWindowFocused: t, ...n } = this.props;
        return (0, i.jsx)(j.Ay, { ...n, onZoom: this.onZoom, onMouseEnter: this.onMouseEnter, shouldAnimate: t });
    }
}
function L(e) {
    let t = (0, _.Us)(),
        n = (0, R.j)();
    return (0, i.jsx)(O, { ...e, isWindowFocused: n, appContext: t });
}
var M = n(9578),
    k = n(56562),
    w = n(475743),
    P = n(564771),
    D = n(692051),
    U = n(915089),
    V = n(611371),
    G = n(453771),
    F = n(440014);
class B extends s.PureComponent {
    render() {
        let {
            src: e,
            fileSize: t,
            fileName: n,
            className: l,
            playable: s,
            volume: r,
            renderLinkComponent: a,
            onVolumeChange: o,
            onVolumeShow: u,
            onVolumeHide: c,
            autoMute: d,
            onMute: m,
            mimeType: h,
            onPlay: p,
        } = this.props;
        return (0, i.jsx)(F.Ay, {
            src: e,
            fileName: n,
            fileSize: (0, G.Hb)(t),
            fileSizeBytes: t,
            type: F.Ay.Types.AUDIO,
            className: l,
            playable: s,
            volume: r,
            onMute: m,
            autoMute: d,
            onVolumeChange: o,
            onVolumeShow: u,
            onVolumeHide: c,
            renderLinkComponent: a,
            mimeType: h,
            onPlay: p,
        });
    }
}
var H = n(248643),
    W = n(866665),
    K = n(408278),
    z = n(900797),
    Z = n(847374),
    Y = n(305866),
    q = n(453318),
    J = n(387758),
    $ = n(980707),
    X = n(477782),
    Q = n(32880),
    ee = n(365199),
    et = n(28863),
    en = n(26430),
    el = n(224640),
    ei = n(268218),
    es = n(417964),
    er = n(639169),
    ea = n(586172),
    eo = n(768947),
    eu = n(255438),
    ec = n(540168),
    ed = n(375708),
    em = n(810917);
let eh = new Set(["markdown", "md", "mkd", "mkdown"]),
    ep = (0, ei.Fe)({
        createPromise: () => Promise.all([n.e("759743"), n.e("207596"), n.e("636550")]).then(n.bind(n, 456262)),
        webpackId: 456262,
        name: "PlaintextFileMarkdownPreview",
        renderLoader: () => (0, i.jsx)(g.y, { className: em.u1 }),
    });
function ef(e) {
    let { text: t, language: n, wordWrap: l } = e;
    return (0, i.jsx)(ec.d, { text: t, language: n, className: a()(em.Xb, { [em.Zw]: l }) });
}
function eg(e) {
    let { expanded: t, setExpanded: n, numLines: l, isWholeFile: s } = e,
        r = ed.intl.formatToPlainString(s ? ed.t.Go5Vvs : ed.t.yJcYan, { lines: l }),
        a = `${t ? ed.intl.string(ed.t.iTcuma) : ed.intl.string(ed.t.dcl9MQ)} (${r})`;
    return (0, i.jsx)("div", {
        className: em.py,
        children: (0, i.jsx)(W.m, {
            text: a,
            children: (0, i.jsx)(K.K, {
                icon: t ? z.t : Z.a,
                size: "md",
                variant: "secondary",
                onClick: () => n?.(!t),
                "aria-label": a,
            }),
        }),
    });
}
function ex(e) {
    let { fileName: t, fileSize: n } = e,
        l = `${t} (${(0, eu.up)(n)})`;
    return (0, i.jsxs)("div", {
        className: em.VI,
        children: [
            (0, i.jsx)("div", {
                className: em.VW,
                children: (0, i.jsx)(W.m, {
                    text: l,
                    children: (0, i.jsx)(m.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: em.Md,
                        children: t,
                    }),
                }),
            }),
            (0, i.jsx)(m.E, { variant: "text-xs/normal", color: "text-subtle", children: (0, eu.up)(n) }),
        ],
    });
}
function eA(e) {
    let { language: t, setLanguage: n, align: l } = e,
        r = s.useRef(null),
        a = ea.L.useConfig({ location: "LanguageSelect" }).enabled ? eo.No : er.Q;
    return (0, i.jsx)(h.Y, {
        targetElementRef: r,
        position: "left",
        align: l,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(Y.l, {
                "aria-label": ed.intl.string(ed.t.utm4qs),
                children: (0, i.jsx)("div", {
                    className: em.md,
                    children: (0, i.jsxs)(q.iS, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            (n(e), l());
                        },
                        options: Array.from(a).map((e) => ({ value: e, label: e, id: e })),
                        value: t,
                        children: [
                            (0, i.jsx)(q.a3, { placeholder: ed.intl.string(ed.t.GofftW) }),
                            (0, i.jsx)(q.X2, {}),
                        ],
                    }),
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(W.m, {
                ariaHidden: !0,
                text: ed.intl.string(ed.t.utm4qs),
                children: (0, i.jsx)(x.D, {
                    ...e,
                    className: em.Qw,
                    "aria-label": ed.intl.string(ed.t.utm4qs),
                    children: (0, i.jsx)(J.G, { size: "sm", color: "currentColor", ref: r }),
                }),
            }),
    });
}
function eC(e) {
    let { wordWrap: t, setWordWrap: n, language: l, renderMarkdown: r, setRenderMarkdown: a, url: o, fileName: u } = e,
        c = s.useRef(null),
        d = s.useRef(null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.Y, {
                targetElementRef: c,
                position: "top",
                align: "left",
                renderPopout: (e) => {
                    let { closePopout: s } = e;
                    return (0, i.jsx)($.W, {
                        "data-menu-migrated": !0,
                        navId: "plaintext-preview-overflow-menu",
                        onClose: s,
                        onSelect: () => {},
                        "aria-label": ed.intl.string(ed.t.PdRCRg),
                        children: (0, i.jsxs)(X.rX, {
                            children: [
                                (0, i.jsx)(X.Dr, {
                                    id: "download",
                                    label: ed.intl.string(ed.t["1WjMbC"]),
                                    icon: Q.DownloadIcon,
                                    action: () => {
                                        (d.current?.click(), s());
                                    },
                                }),
                                (0, i.jsx)(X.sL, {
                                    id: "word-wrap",
                                    label: ed.intl.string(ed.t.AMKNT1),
                                    checked: t,
                                    action: () => n(!t),
                                }),
                                eh.has(l)
                                    ? (0, i.jsx)(X.sL, {
                                          id: "render-markdown",
                                          label: ed.intl.string(ed.t.zstmkn),
                                          checked: r,
                                          action: () => a(!r),
                                      })
                                    : null,
                            ],
                        }),
                    });
                },
                children: (e) =>
                    (0, i.jsx)(W.m, {
                        ariaHidden: !0,
                        text: ed.intl.string(ed.t["UKOtz+"]),
                        children: (0, i.jsx)(x.D, {
                            ...e,
                            className: em.IQ,
                            "aria-label": ed.intl.string(ed.t["UKOtz+"]),
                            children: (0, i.jsx)(ee.MoreHorizontalIcon, { ref: c, size: "sm", color: "currentColor" }),
                        }),
                    }),
            }),
            (0, i.jsx)(et.Anchor, {
                ref: d,
                href: o,
                download: u,
                className: em.op,
                children: (0, i.jsx)(Q.DownloadIcon, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function eE(e) {
    return (0, i.jsx)(W.m, {
        ariaHidden: !0,
        text: ed.intl.string(ed.t["0PQYk3"]),
        children: (0, i.jsx)(x.D, {
            className: em.R1,
            "aria-label": ed.intl.string(ed.t["0PQYk3"]),
            onClick: () => {
                (0, N.openModal)((t) => (0, i.jsx)(ey, { ...e, ...t }));
            },
            children: (0, i.jsx)(en._, { size: "sm", color: "currentColor" }),
        }),
    });
}
function eI(e) {
    let {
            url: t,
            fileName: n,
            fileSize: l,
            fileContents: s,
            expanded: r,
            setExpanded: o,
            language: u,
            setLanguage: c,
            wordWrap: d,
            setWordWrap: m,
            renderMarkdown: h,
            setRenderMarkdown: p,
            bytesLeft: f,
            className: x,
        } = e,
        A = s?.split("\n"),
        C = A?.length ?? 0,
        E = r ? 100 : 6,
        I = 0 === f,
        S = h && eh.has(u),
        v = "";
    (I && r && C > E ? (v = "\n...") : I || (v = "..."),
        "" !== v &&
            (I
                ? (v += " " + ed.intl.formatToPlainString(ed.t.DQnFp2, { lines: C - E }))
                : (v += " " + ed.intl.formatToPlainString(ed.t["1+gGcK"], { formattedBytes: (0, eu.up)(f) }))));
    let N = A?.slice(0, E).join("\n") ?? "",
        _ = r || E < C;
    return (0, i.jsxs)("div", {
        className: a()(x, em.kL),
        children: [
            (0, i.jsx)(y.Ip, {
                className: a()(em.FS, { [em.KQ]: !r && !S }),
                style: { "--custom-plaintext-preview-collapsed-lines": 6 },
                children:
                    null == s
                        ? (0, i.jsx)(g.y, { className: em.u1 })
                        : S
                          ? (0, i.jsx)(ep, { text: N, notice: v.trim() })
                          : (0, i.jsx)(ef, { text: N + v, language: u, wordWrap: d }),
            }),
            (0, i.jsxs)("div", {
                className: em.qr,
                role: "group",
                "aria-label": ed.intl.string(ed.t.TlXA8e),
                children: [
                    _ ? (0, i.jsx)(eg, { expanded: r, setExpanded: o, numLines: C, isWholeFile: I }) : null,
                    (0, i.jsx)(ex, { fileName: n, fileSize: l }),
                    (0, i.jsx)("div", { className: em.Kb }),
                    (0, i.jsx)(eA, { language: u, setLanguage: c, align: "top" }),
                    null != s
                        ? (0, i.jsx)(eE, {
                              url: t,
                              fileName: n,
                              fileSize: l,
                              language: u,
                              wordWrap: d,
                              renderMarkdown: h,
                              fileContents: s,
                              bytesLeft: f,
                          })
                        : null,
                    (0, i.jsx)(eC, {
                        wordWrap: d,
                        setWordWrap: m,
                        language: u,
                        renderMarkdown: h,
                        setRenderMarkdown: p,
                        url: t,
                        fileName: n,
                    }),
                ],
            }),
        ],
    });
}
function ey(e) {
    let {
            url: t,
            fileName: n,
            fileSize: l,
            transitionState: r,
            language: a,
            wordWrap: o,
            renderMarkdown: u,
            fileContents: d,
            bytesLeft: h,
            onClose: p,
        } = e,
        [f, x] = s.useState(a),
        [A, C] = s.useState(o),
        [E, I] = s.useState(u),
        S = s.useRef(null),
        v = E && eh.has(f),
        N = 0 !== h ? `... ${ed.intl.formatToPlainString(ed.t["1+gGcK"], { formattedBytes: (0, eu.up)(h) })}` : "";
    return (
        s.useEffect(() => {
            function e(e) {
                if ((e.metaKey || e.ctrlKey) && "a" === e.key && null != S.current) {
                    let t = document.activeElement;
                    if ((0, c.vq)(t, HTMLInputElement) || (0, c.vq)(t, HTMLTextAreaElement)) return;
                    e.preventDefault();
                    let n = window.getSelection();
                    if (null != n) {
                        let e = document.createRange();
                        (e.selectNodeContents(S.current), n.removeAllRanges(), n.addRange(e));
                    }
                }
            }
            return (document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e));
        }, []),
        (0, i.jsx)(el.d, {
            transitionState: r,
            "aria-label": ed.intl.string(ed.t["qxQjc+"]),
            size: "xxl",
            onClose: p,
            children: (0, i.jsxs)("div", {
                className: em.jE,
                children: [
                    (0, i.jsx)(y.Ip, {
                        className: em.ot,
                        children:
                            null == d
                                ? (0, i.jsx)(g.y, { className: em.u1 })
                                : (0, i.jsx)("div", {
                                      ref: S,
                                      children: v
                                          ? (0, i.jsx)(ep, { text: d, notice: N })
                                          : (0, i.jsx)(ef, { text: d + N, language: f, wordWrap: A }),
                                  }),
                    }),
                    (0, i.jsx)("div", {
                        role: "group",
                        "aria-label": ed.intl.string(ed.t.TlXA8e),
                        children: (0, i.jsxs)(m.E, {
                            color: "text-default",
                            className: em.Hx,
                            variant: "text-sm/normal",
                            children: [
                                (0, i.jsx)(ex, { fileName: n, fileSize: l }),
                                (0, i.jsx)("div", { className: em.Kb }),
                                (0, i.jsx)(eA, { language: f, setLanguage: x, align: "bottom" }),
                                (0, i.jsx)(eC, {
                                    wordWrap: A,
                                    setWordWrap: C,
                                    language: f,
                                    renderMarkdown: E,
                                    setRenderMarkdown: I,
                                    url: t,
                                    fileName: n,
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        })
    );
}
let eS = s.memo(
    function (e) {
        let { url: t, fileName: n, fileSize: l, contentType: r, className: o, onClick: u, onContextMenu: c } = e,
            [d, m] = s.useState(!1),
            [h, p] = s.useState(n.split(".").slice(-1)[0]),
            [f, g] = s.useState(!0),
            [x, A] = s.useState(!0),
            {
                fileContents: C,
                bytesLeft: E,
                hadError: I,
            } = (function (e, t) {
                let [n, l] = s.useState(!1),
                    [i, r] = s.useState(null),
                    [a, o] = s.useState(1);
                return (
                    s.useEffect(() => {
                        !(async function () {
                            try {
                                let n = await fetch(e, { headers: { Range: "bytes=0-50000", Accept: "text/plain" } }),
                                    i = (function (e) {
                                        let t = "utf-8",
                                            n = e?.split("charset=").slice(-1)[0] ?? t;
                                        try {
                                            return new TextDecoder(n);
                                        } catch (l) {
                                            if (e?.startsWith("text") || n.toLowerCase().includes("utf"))
                                                return new TextDecoder(t);
                                            throw l;
                                        }
                                    })(t).decode(await n.arrayBuffer()),
                                    s = n.headers.get("content-range") ?? "0",
                                    a = n.headers.get("content-length") ?? "1",
                                    u = parseInt(s.split("/")[1]) - parseInt(a),
                                    c = 0 === u ? i : i.slice(0, -1);
                                (r((0, es.sJ)(c)), o(u), l(!1));
                            } catch (e) {
                                (o(0), l(!0));
                            }
                        })();
                    }, [e, t]),
                    { fileContents: i, bytesLeft: a, hadError: n }
                );
            })(t, r);
        return I
            ? (0, i.jsx)(P.A, { url: t, fileName: n, fileSize: l, onClick: u, onContextMenu: c, className: o })
            : (0, i.jsx)(eI, {
                  url: t,
                  fileName: n,
                  fileSize: l,
                  fileContents: C,
                  bytesLeft: E,
                  expanded: d,
                  setExpanded: m,
                  language: h,
                  setLanguage: p,
                  wordWrap: f,
                  setWordWrap: g,
                  renderMarkdown: x,
                  setRenderMarkdown: A,
                  className: a()(em.mr, o),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
var ev = n(863922),
    eN = n(822074),
    e_ = n(534890),
    ej = n(442433),
    eb = n(640708),
    eT = n(941971),
    eR = n(707539),
    eO = n(576705),
    eL = n(573163),
    eM = n(340833),
    ek = n(913642),
    ew = n(935208),
    eP = n(453302);
n(321073);
var eD = n(97808),
    eU = n(778712),
    eV = n(707606),
    eG = n(403362),
    eF = n(439511);
let eB = (0, eV.A)(function (e) {
        let { member: t, empty: n, guildId: l } = e;
        return n || null == t
            ? (0, i.jsx)("div", { className: eF.pO })
            : (0, i.jsx)("div", {
                  className: eF.pO,
                  children: (0, i.jsx)(eD.eu, {
                      src: t.getAvatarURL(l, 16),
                      "aria-label": t.username,
                      size: eU._3.SIZE_16,
                      className: eF.pO,
                  }),
              });
    }),
    eH = function (e) {
        let { partySize: t, members: n, minAvatarsShown: l = 1, maxAvatarsShown: s = 2, guildId: r } = e,
            { totalSize: a, knownSize: o } = t;
        if (a < l) return null;
        let c = u()(n)
                .filter(eG.Vq)
                .take(s)
                .map((e) => (0, i.jsx)(eB, { member: e, guildId: r }, e.id))
                .value(),
            d = a - o;
        for (let e = 0; e < d && c.length < s; e++)
            c.push((0, i.jsx)(eB, { empty: !0, guildId: r }, `empty-member-${e}`));
        let m = Math.max(Math.min(a - c.length, 99), 0);
        if (1 === m) {
            let e = n[s];
            c.push((0, i.jsx)(eB, { member: e, guildId: r }, e.id));
        }
        return (0, i.jsx)("div", {
            className: eF.iE,
            children: (0, i.jsxs)("div", {
                className: eF.S3,
                children: [c, m > 1 ? (0, i.jsxs)("div", { className: eF.Hi, children: ["+", m] }) : null],
            }),
        });
    };
var eW = n(303727),
    eK = n(681939);
function ez() {
    return (0, i.jsxs)("div", {
        className: eK.kL,
        children: [
            (0, i.jsxs)("div", {
                className: eK.zc,
                children: [
                    (0, i.jsx)("div", {
                        className: eK.Kk,
                        children: (0, i.jsx)(C.K, {
                            size: "custom",
                            color: "currentColor",
                            className: eK.l1,
                            width: 28,
                            height: 28,
                        }),
                    }),
                    (0, i.jsx)(eW.A, { className: eK.uf }),
                ],
            }),
            (0, i.jsx)(E.D, {
                className: eK.wx,
                variant: "heading-xl/semibold",
                children: ed.intl.string(ed.t.yJHJei),
            }),
            (0, i.jsx)(m.E, {
                className: eK.Qq,
                color: "text-default",
                variant: "text-md/normal",
                children: ed.intl.string(ed.t.p2dIh6),
            }),
        ],
    });
}
var eZ = n(652215),
    eY = n(670455),
    eq = n(750557);
function eJ(e) {
    let { summary: t, channel: l, members: r, guildId: a, unread: o, onClick: u } = e,
        [c, h] = s.useState(!1),
        p = (0, eR.aK)(ew.default.extractTimestamp(t.startId)),
        f = (0, d.bG)([eN.A], () => eN.A.summaryFeedback(t));
    function g(e, n) {
        (e.stopPropagation(), (0, eP.A)({ summary: t, channel: l, rating: n }));
    }
    let A = eO.A.can(eZ.xBc.MANAGE_MESSAGES, l);
    return (0, i.jsxs)(x.D, {
        className: eq.kL,
        onClick: u,
        onContextMenu: function (e) {
            A &&
                (0, ej.L3)(e, async () => {
                    let { default: e } = await n.e("443921").then(n.bind(n, 304232));
                    return (n) => (0, i.jsx)(e, { ...n, summary: t });
                });
        },
        onMouseEnter: () => h(!0),
        onMouseLeave: () => h(!1),
        children: [
            (0, i.jsx)(eT.A, { hovered: c, unread: o, className: eq.dM }),
            (0, i.jsx)("div", {
                className: eq.uV,
                children: (0, i.jsxs)("div", {
                    className: eq.Hw,
                    children: [
                        (0, i.jsx)(m.E, {
                            className: eq.vE,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: p,
                        }),
                        (0, i.jsx)(eb.A, { height: 4, width: 4, "aria-hidden": "true", className: eq.Om }),
                        (0, i.jsx)(e_.ChatIcon, { size: "xxs", color: "currentColor", className: eq.Kk }),
                        (0, i.jsx)(m.E, {
                            className: eq.U9,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: t.count,
                        }),
                        r.length > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(eb.A, { height: 4, width: 4, "aria-hidden": "true", className: eq.Om }),
                                    (0, i.jsx)(eH, {
                                        partySize: { knownSize: r.length, totalSize: r.length },
                                        maxAvatarsShown: 3,
                                        members: r,
                                        guildId: a,
                                    }),
                                ],
                            }),
                    ],
                }),
            }),
            c &&
                null == f &&
                (0, i.jsxs)("div", {
                    className: eq.p_,
                    children: [
                        (0, i.jsx)(x.D, {
                            onClick: (e) => g(e, eY.P0.GOOD),
                            children: (0, i.jsx)(ek.A, { className: eq.O1, width: 12, height: 12 }),
                        }),
                        (0, i.jsx)(x.D, {
                            onClick: (e) => g(e, eY.P0.BAD),
                            children: (0, i.jsx)(eM.A, { className: eq.O1, width: 12, height: 12 }),
                        }),
                    ],
                }),
            (0, i.jsx)(m.E, { color: "text-strong", variant: "text-sm/semibold", className: eq.DD, children: t.topic }),
            (0, i.jsx)(m.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: eq.VA,
                children: t.summShort,
            }),
        ],
    });
}
function e$(e) {
    let { summaries: t, summariesMembers: n, channel: l, selectTopic: r, setOpen: a } = e,
        o = (0, d.bG)([eL.Ay], () => eL.Ay.getOldestUnreadMessageId(l.id)),
        u = s.useCallback(
            (e) => {
                (r(e), a(!1));
            },
            [r, a],
        );
    return t.length < 1
        ? (0, i.jsx)(ez, {})
        : (0, i.jsx)(i.Fragment, {
              children: t.map((e, t) => {
                  let s = n[t] ?? [];
                  return (0, i.jsx)(
                      eJ,
                      {
                          summary: e,
                          channel: l,
                          members: s,
                          guildId: l.guild_id,
                          unread: null != o && ew.default.compare(e.endId, o) > 0,
                          onClick: () => u(t),
                      },
                      t,
                  );
              }),
          });
}
var eX = n(885386),
    eQ = n(113494),
    e0 = n(782134),
    e1 = n(775602),
    e2 = n(228366),
    e3 = n(713021);
let e6 = s.forwardRef(function (e, t) {
    let n,
        l,
        { muted: r, volume: a, playing: o, playbackRate: u, ...c } = e,
        [d, m] =
            ((n = s.useRef(null)),
            (l = s.useCallback(
                (e) => {
                    null != t && ("function" == typeof t ? t(e) : (t.current = e), (n.current = e));
                },
                [t],
            )),
            [n, l]);
    return (
        s.useEffect(() => {
            let e = d.current;
            null == e || (void 0 !== r && (e.muted = r));
        }, [d, r]),
        s.useEffect(() => {
            let e = d.current;
            null == e || (void 0 !== a && (e.volume = a));
        }, [d, a]),
        s.useEffect(() => {
            let e = d.current;
            null == e || (null != u && (e.playbackRate = u));
        }, [d, u]),
        s.useEffect(() => {
            let e = d.current;
            null == e || (void 0 !== o && (o ? e.play() : e.pause()));
        }, [d, o]),
        (0, i.jsx)("audio", { ref: m, ...c })
    );
});
var e8 = n(20504),
    e7 = n(625494),
    e5 = n(927813),
    e4 = n(824744);
n(508300);
var e9 = n(661531),
    te = n(602853),
    tt = n(765671);
function tn(e, t) {
    let n = e.getBoundingClientRect();
    return Math.min(1, Math.max(0, (t.clientX - n.left) / n.width));
}
var tl = n(998304),
    ti = n(284009),
    ts = n.n(ti),
    tr = n(722872);
class ta {
    value;
    animationDetails;
    isReset;
    constructor(e) {
        ((this.value = e), (this.animationDetails = null), (this.isReset = !1));
    }
    getCurrentValue() {
        if (null == this.animationDetails) return this.value;
        let e = performance.now() - this.animationDetails.animationStart,
            t = this.value < this.animationDetails.lastValue ? 150 : 500;
        return e > t
            ? ((this.animationDetails = null), this.value)
            : this.value < this.animationDetails.lastValue
              ? tr.easeOutQuint(e, this.animationDetails.lastValue, this.value, t)
              : tr.easeOutBack(e, this.animationDetails.lastValue, this.value, t, 4);
    }
    animateTo(e) {
        ((this.isReset = !1),
            this.value !== e &&
                ((this.animationDetails = { lastValue: this.value, animationStart: performance.now() }),
                (this.value = e)));
    }
    isAnimating() {
        return null != this.animationDetails;
    }
    reset() {
        (this.animateTo(0), (this.isReset = !0));
    }
}
let to = [0.75, 1, 1.5, 2];
var tu = n(587159);
let tc = [0, 0, 0, 0, 0];
function td(e) {
    let { showAll: t, currentTime: n, duration: l, numSegments: i } = e;
    return t ? i : Math.max(0, Math.round((n / l) * i));
}
function tm(e) {
    var t, n, l, i;
    let { context: s, devicePixelRatio: r, canvasHeight: a, segmentValue: o, segmentIndex: u, constrainMin: c } = e,
        d = c ? 22 * o + 2 : 24 * o;
    0 !== d &&
        ((t = 6 * u * r),
        (n = (a / 2 - d / 2) * r),
        (l = d * r),
        (i = +r),
        s.moveTo(t, n + i),
        s.lineTo(t, n + l - i),
        s.arc(t + i, n + l - i, i, Math.PI, 0, !0),
        s.lineTo(t + 2 * i, n + i),
        s.arc(t + i, n + i, i, 0, Math.PI, !0),
        s.closePath());
}
function th(e, t, n) {
    let [l, i] = s.useState(e),
        [r, a] = s.useState(e),
        o = s.useRef(r);
    return (
        s.useLayoutEffect(() => {
            o.current = r;
        }),
        s.useLayoutEffect(() => {
            (i(o.current), a(e));
        }, [e, t, n]),
        [l, r]
    );
}
function tp(e, t, n, l) {
    if (null == l) return [t, !1];
    let i = Math.min((n - l) / 200, 1);
    return 1 === i ? [t, !1] : [(0, tl.De)(e, t, i), !0];
}
function tf(e) {
    let t,
        n,
        {
            className: l,
            waveform: r,
            currentTime: o,
            duration: u,
            played: c,
            playing: d,
            onDrag: m,
            onDragStart: h,
            onDragEnd: p,
        } = e,
        { ref: f, width: g } = (0, tt.Ay)(),
        x = s.useMemo(
            () =>
                6 *
                    Math.floor(
                        ((u <= 0.5 ? 40 : u >= 45 ? 294 : ((Math.min(u, 45) - 0.5) / 44.5) * 254 + 40) + 4) / 6,
                    ) -
                4,
            [u],
        ),
        A = s.useRef(void 0),
        C =
            ((t = s.useMemo(
                () =>
                    (function (e) {
                        let t;
                        if (null == e) return;
                        try {
                            t = window.atob(e);
                        } catch (e) {
                            return;
                        }
                        let n = [];
                        for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e) / 255;
                        return n;
                    })(r),
                [r],
            )),
            (n = s.useMemo(
                () =>
                    (function (e) {
                        if (null != e) return Math.floor((e + 4) / 6);
                    })(g),
                [g],
            )),
            s.useMemo(
                () =>
                    (function (e, t) {
                        if (null != e && null != t) {
                            if (e.length < t) {
                                let n = t - e.length;
                                return e.concat(Array(n).fill(0));
                            }
                            return (function (e, t) {
                                if ((ts()(e.length >= t, "Waveform smaller than samples"), e.length === t)) return e;
                                let n = e.length / t,
                                    l = [],
                                    i = 0;
                                for (; l.length < t;) {
                                    let t = Math.round((l.length + 1) * n),
                                        s = 0,
                                        r = 0;
                                    for (let n = i; n < t && n < e.length; n++) ((s += e[n]), r++);
                                    ((l[l.length] = s / r), (i = t));
                                }
                                return l;
                            })(e, t);
                        }
                    })(t ?? [], n) ?? tc,
                [t, n],
            )),
        E = s.useRef(c),
        I = s.useRef(d),
        y = s.useRef(null),
        S = window.devicePixelRatio,
        {
            lastBackgroundFillColor: v,
            backgroundFillColor: N,
            lastActiveFillColor: _,
            activeFillColor: j,
            lastInactiveFillColor: b,
            inactiveFillColor: T,
        } = (function (e, t) {
            let n = (0, te.r)(e9.A.colors.BACKGROUND_MOD_MUTED).hex(),
                l = (0, te.r)(e9.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
                i = (0, te.r)(e9.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
                s = (0, te.r)(e9.A.unsafe_rawColors.BRAND_430).hex(),
                r = (0, te.r)(e9.A.unsafe_rawColors.WHITE).hex(),
                a = t ? s : n,
                [o, u] = th(a, t, e),
                [c, d] = th(t ? r : e ? i : l, t, e),
                [m, h] = th(e ? a : l, t, e);
            return {
                lastBackgroundFillColor: o,
                backgroundFillColor: u,
                lastActiveFillColor: c,
                activeFillColor: d,
                lastInactiveFillColor: m,
                inactiveFillColor: h,
            };
        })(c, d),
        R = { currentTime: o, duration: u, played: c },
        O = s.useRef(R);
    (s.useEffect(() => {
        O.current = R;
    }),
        s.useEffect(() => {
            let { currentTime: e, duration: t, played: n } = O.current,
                l = td({ showAll: !n, currentTime: e, duration: t, numSegments: C.length });
            A.current = C.map((e, t) => new ta(t < l ? e : 0));
        }, [C]),
        s.useEffect(() => {
            let e = A.current;
            if (null == e) return;
            let t = td({ showAll: !c, currentTime: o, duration: u, numSegments: C.length });
            for (let n = 0; n < e.length; n++) {
                let l = e[n];
                if (n < t) {
                    l.animateTo(C[n]);
                    continue;
                }
                l.reset();
            }
        }, [C, o, u, c]),
        s.useEffect(() => {
            let e = null;
            return (
                (e = requestAnimationFrame(function t(n) {
                    let l = f.current,
                        i = l?.getContext("2d"),
                        s = A.current;
                    if (null == l || null == i || null == s) return;
                    let r = !1;
                    ((E.current !== c || I.current !== d) && ((E.current = c), (I.current = d), (y.current = n)),
                        null != y.current && n > y.current + 200 && (y.current = null));
                    let a = l.height / S;
                    (i.clearRect(0, 0, l.width, l.height), i.beginPath());
                    let [o, u] = tp(v, N, n, y.current);
                    ((r = r || u), (i.fillStyle = o));
                    for (let e = 0; e < C.length; e++)
                        tm({
                            context: i,
                            devicePixelRatio: S,
                            canvasHeight: a,
                            segmentValue: C[e],
                            segmentIndex: e,
                            constrainMin: !0,
                        });
                    i.fill();
                    let [m, h] = tp(b, T, n, y.current);
                    r = r || h;
                    let [p, g] = tp(_, j, n, y.current);
                    r = r || g;
                    for (let e = 0; e < s.length; e++) {
                        let t = s[e],
                            n = Math.max(t.getCurrentValue(), C[e] - 0.1);
                        (i.beginPath(),
                            (i.fillStyle = t.isReset ? m : p),
                            tm({
                                context: i,
                                devicePixelRatio: S,
                                canvasHeight: a,
                                segmentValue: n,
                                segmentIndex: e,
                                constrainMin: !t.isReset,
                            }),
                            (r = r || t.isAnimating()),
                            i.fill());
                    }
                    r && (e = requestAnimationFrame(t));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [f, S, C, g, o, u, c, d, v, N, _, j, b, T]));
    let [, L] = (function (e) {
        let { ref: t, onDrag: n, onDragStart: l, onDragEnd: i } = e,
            [r, a] = s.useState(!1);
        return (
            s.useEffect(() => {
                if (r)
                    return (
                        window.addEventListener("mouseup", e),
                        window.addEventListener("mousemove", l),
                        () => {
                            (window.removeEventListener("mouseup", e), window.removeEventListener("mousemove", l));
                        }
                    );
                function e() {
                    (i?.(), a(!1));
                }
                function l(e) {
                    let l = t.current;
                    null != l && n?.(tn(l, e));
                }
            }, [t, r, i, n]),
            [
                r,
                s.useCallback(
                    (e) => {
                        e.preventDefault();
                        let i = t.current;
                        null != i && (a(!0), l?.(), n?.(tn(i, e)));
                    },
                    [t, l, n],
                ),
            ]
        );
    })({ ref: f, onDrag: m, onDragStart: h, onDragEnd: p });
    return (0, i.jsx)("canvas", {
        onMouseDown: L,
        className: a()(tu.J, l),
        style: { width: x },
        ref: f,
        height: 32 * window.devicePixelRatio,
        width: (g ?? 0) * window.devicePixelRatio,
    });
}
var tg = n(672245);
let tx = s.lazy(() => n.e("594436").then(n.bind(n, 660207)));
function tA(e) {
    let { played: t, duration: n, currentTime: l } = e,
        s = null == n ? "--:--" : t ? (0, F.rB)(Math.ceil(n - l)) : (0, F.rB)(Math.ceil(n));
    return (0, i.jsx)(m.E, { variant: "text-sm/normal", className: tg.p0, tabularNumbers: !0, children: s });
}
let tC = s.memo(function (e) {
    let t,
        {
            src: n,
            volume: l = 1,
            onVolumeChange: r,
            onMute: o,
            waveform: u,
            durationSecs: c,
            onVolumeShow: h,
            onVolumeHide: p,
            onPlay: f,
            onPause: g,
            onError: A,
            playbackCacheKey: C,
        } = e,
        E = s.useRef(null),
        I = s.useMemo(() => (null != C ? e3.Ay.getPlaybackPosition(C) : 0), [C]),
        y = (0, d.bG)([e3.Ay], () => e3.Ay.getPlaybackRate(e3.k0.VOICE_MESSAGE)),
        [S, v] = s.useState(I > 0),
        [N, _] = s.useState(I),
        [j, b] = s.useState(c),
        [T, R] = s.useState(!1),
        [O, L] = s.useState(!1),
        [M, k] = s.useState(!1),
        [w, P] = s.useState(!1),
        [D, U] = s.useState("none"),
        [V, G] = s.useState(() => ("function" == typeof l ? l() : l)),
        F = s.useRef(void 0),
        B = s.useCallback(() => {
            (L((e) => !e), P(!0));
        }, []),
        H = s.useCallback(() => {
            U("metadata");
        }, []),
        W = s.useCallback((e) => {
            let t = e.currentTarget.duration;
            isNaN(t) || b(t);
        }, []),
        K = s.useCallback(
            (e) => {
                null != c &&
                    null != C &&
                    e2.h.dispatch({ type: "MEDIA_PLAYBACK_POSITION_UPDATE", cacheKey: C, position: e, duration: c });
            },
            [C, c],
        ),
        z = s.useCallback(() => {
            (L(!1),
                null == F.current &&
                    (F.current = setTimeout(() => {
                        (v(!1), P(!1), (F.current = void 0));
                    }, 500)));
        }, []),
        Z = s.useCallback(() => {
            M || (K(0), z());
        }, [z, M, K]),
        Y = s.useCallback((e) => {
            let t = E.current;
            null != t && (_(e), (t.currentTime = e), v(!0));
        }, []),
        q = s.useCallback(() => {
            let e = E.current;
            if (null == e) return;
            let t = e.error;
            A?.(t);
        }, [A]),
        J = s.useCallback(
            (e) => {
                let t = (0, e4.w)(e, 1);
                (R(0 === t), G(t), r?.(t));
            },
            [r],
        ),
        $ = s.useCallback(() => {
            (R(!T), o?.(!T));
        }, [T, o]),
        X = s.useCallback(() => {
            k(!0);
        }, []),
        Q = s.useCallback(() => {
            (k(!1), N === j && z(), K(N));
        }, [N, j, z, K]),
        ee = s.useCallback(
            (e) => {
                let t = E.current;
                null == j || null == t || (Y(e * j), clearTimeout(F.current), (F.current = void 0));
            },
            [j, Y],
        );
    s.useEffect(() => {
        !S && O && v(!0);
    }, [O, S]);
    let et = s.useRef(null),
        en = { played: w, currentTime: N, onPause: g, onPlay: f },
        el = s.useRef(en);
    (s.useEffect(() => {
        el.current = en;
    }),
        s.useEffect(() => {
            I > 0 && Y(I);
        }, [I, Y]),
        s.useEffect(() => {
            let e;
            return (
                O &&
                    !M &&
                    (e = setInterval(() => {
                        K(E.current?.currentTime ?? 0);
                    }, e5.A.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [O, M, K]),
        s.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: l } = el.current;
            if (e || O)
                if (O) ((et.current = performance.now()), l?.(!1, t, (E.current?.duration ?? 0) * e5.A.Millis.SECOND));
                else {
                    let e = performance.now(),
                        l = et.current;
                    (n?.(t, null != l ? (e - l) / 1e3 : 0), K(t), (et.current = null));
                }
        }, [O, n, j, K]),
        s.useEffect(() => {
            let e;
            return (
                !(function t() {
                    let n = E.current;
                    null == n || (_(n.currentTime), O && (e = requestAnimationFrame(t)));
                })(),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [E, O, _]),
        s.useEffect(() => {
            if (O)
                return (
                    e7._.dispatch(eZ.jej.VOICE_MESSAGE_PLAYBACK_STARTED, { src: n }),
                    e7._.subscribe(eZ.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e),
                    () => {
                        e7._.unsubscribe(eZ.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e);
                    }
                );
            function e(e) {
                let { src: t } = e;
                n !== t && L(!1);
            }
        }, [n, O, L]));
    let ei = O ? eQ.PauseIcon : e0.PlayIcon,
        es = O ? ed.intl.string(ed.t["3XohGn"]) : ed.intl.string(ed.t.AlHqHT),
        er = ed.intl.formatToPlainString(ed.t.LgCPMt, { playbackRate: y }),
        ea = `${y.toString().replace(/^0/, "")}X`;
    t =
        "Safari" === platform.name
            ? (0, i.jsx)(s.Suspense, {
                  children: (0, i.jsx)(tx, {
                      ref: E,
                      className: tg.Zn,
                      src: n,
                      preload: D,
                      playing: O && !M,
                      onEnded: Z,
                      onLoadedMetadata: W,
                      onError: q,
                      muted: T,
                      volume: V,
                      playbackRate: y,
                  }),
              })
            : (0, i.jsx)(e6, {
                  ref: E,
                  className: tg.Zn,
                  controls: !1,
                  preload: D,
                  onEnded: Z,
                  onLoadedMetadata: W,
                  onError: q,
                  muted: T,
                  volume: V,
                  playbackRate: y,
                  playing: O && !M,
                  children: (0, i.jsx)("source", { src: n }),
              });
    let eo = (0, d.bG)([e1.Ay], () => e1.Ay.useReducedMotion);
    return (0, i.jsxs)("div", {
        className: a()(tg.kL, { [tg.he]: O }),
        onMouseEnter: H,
        role: "region",
        "aria-label": ed.intl.string(ed.t.c8U6xd),
        children: [
            (0, i.jsx)("div", {
                className: tg.Kl,
                children: (0, i.jsx)("div", { className: a()(tg.fq, { [tg.VN]: eo }) }),
            }),
            (0, i.jsx)(x.D, {
                className: tg.k0,
                onClick: B,
                "aria-label": es,
                children: (0, i.jsx)(ei, { className: tg.uZ, color: "currentColor", size: "sm" }),
            }),
            (0, i.jsx)(tf, {
                className: tg.ou,
                waveform: u,
                currentTime: N,
                duration: j ?? 1,
                playing: O,
                played: S,
                onDrag: ee,
                onDragStart: X,
                onDragEnd: Q,
            }),
            (0, i.jsx)(tA, { played: S, currentTime: N, duration: j }),
            (0, i.jsx)(x.D, {
                className: tg.LJ,
                onClick: () => {
                    var e, t;
                    let n;
                    return (
                        (n = (to.indexOf(y) + 1) % to.length),
                        void ((e = to[n]),
                        (t = e3.k0.VOICE_MESSAGE),
                        e2.h.dispatch({ type: "MEDIA_PLAYBACK_RATE_UPDATE", rate: e, playbackType: t }))
                    );
                },
                "aria-label": er,
                children: (0, i.jsx)(m.E, { variant: "text-xs/semibold", className: tg.Sn, children: ea }),
            }),
            (0, i.jsx)(e8.A, {
                className: tg.bk,
                iconClassName: tg._j,
                iconColor: "currentColor",
                sliderWrapperClassName: tg.MQ,
                muted: T,
                value: (0, e4.M)(V, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: J,
                onToggleMute: $,
                onVolumeShow: h,
                onVolumeHide: p,
            }),
            t,
        ],
    });
});
var tE = n(287809),
    tI = n(147925),
    ty = n(174459),
    tS = n(587481),
    tv = n(838541),
    tN = n(521732),
    t_ = n(650583),
    tj = n(959760);
let tb = { delay: 300, position: "top" };
function tT(e) {
    return (t) => {
        (e?.(t), (0, tS.ls)(t));
    };
}
function tR(e) {
    return (t) => {
        (e?.(t), (0, tS.y5)(t));
    };
}
function tO(e) {
    let { altText: t, altButtonRef: n } = e;
    return (0, i.jsxs)("div", {
        role: "dialog",
        "aria-label": ed.intl.string(ed.t.fSiQ3A),
        className: tj.obt,
        tabIndex: -1,
        onKeyDown: (e) => {
            e.key === t_.N$.Escape && setTimeout(() => n.current?.focus(), 0);
        },
        children: [
            (0, i.jsx)(m.E, {
                variant: "text-xs/bold",
                color: "none",
                tag: "span",
                className: tj.k_Z,
                children: ed.intl.string(ed.t.fSiQ3A),
            }),
            (0, i.jsx)(m.E, { variant: "text-md/normal", color: "none", tag: "span", className: tj.a7V, children: t }),
        ],
    });
}
function tL(e) {
    let {
            alt: t,
            controlsVisible: n = !0,
            disableAltTextDisplay: l = !1,
            hiddenSpoilers: r = !1,
            reducedSizeAltTextButton: o = !1,
        } = e,
        [u, c] = s.useState(!1),
        d = s.useRef(null);
    return (n || u) && !l && eX._z.getSetting() && null != t && "" !== t && !0 !== r
        ? (0, i.jsx)("div", {
              className: tj.NOQ,
              children: (0, i.jsx)(h.Y, {
                  targetElementRef: d,
                  animation: h.Y.Animation.FADE,
                  renderPopout: () => (0, i.jsx)(tO, { altText: t, altButtonRef: d }),
                  children: (e) =>
                      (0, i.jsx)(p.vN, {
                          offset: 4,
                          children: (0, i.jsx)("button", {
                              ...e,
                              type: "button",
                              ref: d,
                              "aria-label": ed.intl.string(ed.t.fSiQ3A),
                              onMouseEnter: () => c(!0),
                              onMouseLeave: () => c(!1),
                              className: a()(tj.DV5, { [tj.yZ5]: !0, [tj.I54]: o }),
                              children: ed.intl.string(ed.t.jCV1Tz),
                          }),
                      }),
              }),
          })
        : null;
}
function tM(e) {
    let {
            onVolumeChange: t,
            onMute: n,
            volume: l,
            autoMute: r,
            alt: a,
            renderAdjacentContent: o,
            renderOverlayContent: u,
            disableAltTextDisplay: c = !1,
            hiddenSpoilers: d,
            mosaicStyleAlt: h,
            mediaLayoutType: p,
            reducedSizeAltTextButton: f,
            ...g
        } = e,
        x = tT(t),
        A = tR(n);
    ((l = null == l ? tS.v1 : l), (r = null == r ? tS.uj : r));
    let [C, E] = s.useState(!0),
        I = p === tv.dG.MOSAIC || !0 === h,
        y = C && !c && eX._z.getSetting() && null != a && "" !== a && !0 !== d;
    return (0, i.jsxs)(s.Fragment, {
        children: [
            (0, i.jsx)(H.A, {
                ...g,
                alt: a,
                autoMute: r,
                mediaLayoutType: p,
                onControlsHide: () => E(!1),
                onControlsShow: () => E(!0),
                onMute: A,
                onVolumeChange: x,
                renderLinkComponent: tU,
                renderOverlayContent: u,
                volume: l,
            }),
            null != o && o(),
            I &&
                (0, i.jsx)(tL, {
                    alt: a,
                    controlsVisible: C,
                    disableAltTextDisplay: c,
                    hiddenSpoilers: d,
                    reducedSizeAltTextButton: f,
                }),
            !I &&
                y &&
                (0, i.jsx)(m.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: tj.R5R,
                    children: a,
                }),
        ],
    });
}
function tk(e) {
    return (0, i.jsx)(tM, { ...e });
}
function tw(e) {
    let {
            onVolumeChange: t,
            volume: n,
            onMute: l,
            onVolumeShow: r,
            onVolumeHide: a,
            renderAdjacentContent: o,
            ...u
        } = e,
        c = tT(t),
        d = tR(l);
    return (
        (n = null == n ? tS.v1 : n),
        (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(B, {
                    ...u,
                    onVolumeChange: c,
                    onMute: d,
                    onVolumeShow: r,
                    onVolumeHide: a,
                    volume: n,
                    autoMute: function () {
                        return !1;
                    },
                    renderLinkComponent: tU,
                }),
                null != o && o(),
            ],
        })
    );
}
function tP(e) {
    let { onVolumeChange: t, volume: n, onMute: l, ...s } = e,
        r = tT(t),
        a = tR(l);
    return ((n = null == n ? tS.v1 : n), (0, i.jsx)(tC, { ...s, onVolumeChange: r, onMute: a, volume: n }));
}
function tD(e) {
    let {
            alt: t,
            hiddenSpoilers: n,
            renderAdjacentContent: l,
            containerClassName: r,
            imageContainerClassName: o,
            disableAltTextDisplay: u = !1,
            reducedSizeAltTextButton: c = !1,
            mediaLayoutType: d,
            imageContainerStyle: f,
            mosaicStyleAlt: g,
        } = e,
        x = d === tv.dG.MOSAIC || !0 === g,
        A = !u && eX._z.getSetting() && null != t && "" !== t && !0 !== n,
        C = s.createRef();
    return (0, i.jsxs)("div", {
        className: a()(tj.foG, r),
        children: [
            (0, i.jsxs)("div", {
                className: a()(tj.ZSk, o),
                style: f,
                children: [(0, i.jsx)(L, { ...e }), null != l && l()],
            }),
            x &&
                A &&
                (0, i.jsx)("div", {
                    className: tj.Y1Z,
                    children: (0, i.jsx)(h.Y, {
                        targetElementRef: C,
                        animation: h.Y.Animation.FADE,
                        renderPopout: () => (0, i.jsx)(tO, { altText: t, altButtonRef: C }),
                        children: (e) =>
                            (0, i.jsx)(p.vN, {
                                offset: 4,
                                children: (0, i.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: C,
                                    "aria-label": ed.intl.string(ed.t.fSiQ3A),
                                    className: a()(tj.DV5, { [tj.I54]: c }),
                                    children: ed.intl.string(ed.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !x &&
                A &&
                (0, i.jsx)(m.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: tj.R5R,
                    children: t,
                }),
        ],
    });
}
function tU(e) {
    return (0, i.jsx)(M.A, { ...e });
}
function tV(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, i.jsxs)(s.Fragment, { children: [(0, i.jsx)(eS, { ...n }), null != t && t()] });
}
function tG(e) {
    return (0, i.jsx)(P.A, { ...e });
}
var tF = (((l = {})[(l.OLD_MESSAGES = 0)] = "OLD_MESSAGES"), (l[(l.REPLY = 1)] = "REPLY"), l);
let tB = (e) => {
    let { type: t = 0, onClick: n, className: l } = e;
    return (0, i.jsx)(D.Y.Consumer, {
        children: (e) =>
            e.disableInteractions
                ? null
                : (0, i.jsxs)("div", {
                      onClick: n,
                      className: a()(tj.Sg2, l),
                      children: [
                          (0, i.jsx)("div", {
                              className: tj.$IB,
                              children: (function (e) {
                                  switch (e) {
                                      case 0:
                                          return ed.intl.string(ed.t["4EvBbw"]);
                                      case 1:
                                          return ed.intl.string(ed.t["1J6Xq7"]);
                                      default:
                                          return (0, eG.xb)(e);
                                  }
                              })(t),
                          }),
                          null != n
                              ? (0, i.jsx)(p.vN, {
                                    offset: -2,
                                    children: (0, i.jsx)(f.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: (function (e) {
                                            switch (e) {
                                                case 0:
                                                    return ed.intl.string(ed.t.gpoQsB);
                                                case 1:
                                                    return ed.intl.string(ed.t.k3RM8z);
                                                default:
                                                    return (0, eG.xb)(e);
                                            }
                                        })(t),
                                        onClick: n,
                                    }),
                                })
                              : (0, i.jsx)(g.y, {
                                    type: g.y.Type.PULSING_ELLIPSIS,
                                    className: tj.u1E,
                                    itemClassName: tj.$N2,
                                }),
                      ],
                  }),
    });
};
function tH(e) {
    let { onClick: t, loading: n, className: l } = e;
    return (0, i.jsx)(D.Y.Consumer, {
        children: (e) =>
            e.disableInteractions
                ? null
                : (0, i.jsxs)(x.D, {
                      className: a()(tj._5m, l),
                      onClick: t,
                      focusProps: { offset: { top: 4, right: 4, bottom: 12, left: 4 } },
                      children: [
                          (0, i.jsx)("div", { className: tj.$IB, children: ed.intl.string(ed.t["1zUvlw"]) }),
                          n
                              ? (0, i.jsx)(g.y, {
                                    type: g.y.Type.PULSING_ELLIPSIS,
                                    className: tj.u1E,
                                    itemClassName: tj.$N2,
                                })
                              : (0, i.jsx)("div", {
                                    className: a()(tj.hQH, tj.d3o),
                                    children: ed.intl.string(ed.t.TdQXA8),
                                }),
                      ],
                  }),
    });
}
function tW(e) {
    let { content: t, channelId: n } = e,
        [l] = s.useState(() => (0, U.Ld)("NewMessagesBarJumpToNewMessages_")),
        r = s.useCallback(() => {
            let e = eL.Ay.ackMessageId(n);
            null != e
                ? S.A.jumpToMessage({ channelId: n, messageId: e, offset: 1, context: "Mark As Read" })
                : S.A.jumpToMessage({
                      channelId: n,
                      messageId: ew.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [n]),
        o = s.useCallback(() => {
            (0, v.ack)(n, {
                section: eZ.JJy.NEW_MESSAGES_BANNER,
                object: eZ.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eZ.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [n]),
        { disableInteractions: u } = s.useContext(D.Y);
    return u
        ? null
        : (0, i.jsxs)("div", {
              className: a()(tj.ebV, { [tj.y71]: u }),
              children: [
                  (0, i.jsx)(p.vN, {
                      offset: 4,
                      children: (0, i.jsx)("button", {
                          type: "button",
                          className: tj.$IB,
                          onClick: r,
                          "aria-label": ed.intl.string(ed.t.z0Mkp3),
                          "aria-describedby": l,
                          children: (0, i.jsx)("span", { id: l, className: tj.Lnh, children: t }),
                      }),
                  }),
                  (0, i.jsx)("div", {
                      className: tj._ov,
                      children: (0, i.jsx)(p.vN, {
                          offset: 4,
                          children: (0, i.jsxs)("button", {
                              type: "button",
                              onClick: o,
                              className: tj.hQH,
                              children: [
                                  (0, i.jsx)("span", { className: tj.vE$, children: ed.intl.string(ed.t.e6RscS) }),
                                  (0, i.jsx)(A.M, { size: "md", color: "currentColor", className: tj.t3N }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function tK(e) {
    let { channel: t, content: n, scrollManager: l } = e,
        { disableInteractions: r } = s.useContext(D.Y),
        [o, h] = s.useState(null),
        p = s.useRef(null),
        [f, g] = s.useState(null),
        N = s.useRef(null),
        _ = (0, d.yK)([eN.A], () => eN.A.summaries(t.id) ?? [], [t]),
        j = (0, w.Ay)(_);
    s.useEffect(() => {
        u().isEqual(j, _) ||
            ty.default.track(eZ.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: _.length,
                message_counts: _.map((e) => e.count),
                start_message_ids: _.map((e) => e.startId),
                end_message_ids: _.map((e) => e.endId),
                num_participants: _.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [_, j, t.guild_id, t.id, t.type]);
    let b = (0, d.bG)(
            [tE.default],
            () => _?.map((e) => e.people?.map((e) => tE.default.getUser(e) ?? null).filter(eG.Vq)) ?? [],
            [_],
            tz,
        ),
        T = (0, d.bG)([eN.A], () => eN.A.visibleSummaryIndex()) ?? -1,
        R = _?.[T]?.topic;
    null == R && null == o && _?.length >= 1 && (R = _[0]?.topic);
    let O = s.useMemo(
            () =>
                u().debounce((e) => {
                    h(e?.id ?? null);
                }, 64),
            [h],
        ),
        L = s.useMemo(
            () =>
                u().throttle(
                    () => {
                        (0, ev.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        M = s.useCallback(
            (e) => {
                (L(), O(e));
            },
            [O, L],
        ),
        [P, U] = s.useState(!1),
        G = s.useCallback(() => {
            (ty.default.track(eZ.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !P,
                num_summaries: _.length,
                message_counts: _.map((e) => e.count),
                start_message_ids: _.map((e) => e.startId),
                end_message_ids: _.map((e) => e.endId),
                num_participants: _.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                U(!P));
        }, [P, _, U, t]),
        F = s.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tN.eh.PILL_DROPDOWN,
                    i = _[e];
                null != i &&
                    ((0, ev.sK)(t.id, i.id),
                    (0, ev.C6)(t.id, i.id),
                    l.removeAutomaticAnchorCallback(M),
                    l.addScrollCompleteCallback(function e() {
                        (l.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                l.addAutomaticAnchorCallback(M, !1);
                            }, 100));
                    }),
                    ty.default.track(eZ.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: n,
                        message_id: i.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    S.A.jumpToMessage({
                        channelId: t.id,
                        messageId: i.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: k.vx.ANIMATED,
                        context: "Summary Jump",
                    }));
            },
            [_, t, M, l],
        ),
        B = s.useCallback((e) => {
            U(e);
            let t = N.current?.scrollTop;
            null != t && g(t);
        }, []);
    s.useEffect(() => {
        null != f && P && N.current?.scrollTo({ top: f });
    }, [f, P]);
    let H = s.useCallback(
        (e) => {
            ((0, c.vq)(e.target) && p.current?.contains(e.target)) ||
                (P &&
                    ty.default.track(eZ.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: _.length,
                        message_counts: _.map((e) => e.count),
                        start_message_ids: _.map((e) => e.startId),
                        end_message_ids: _.map((e) => e.endId),
                        num_participants: _.map((e) => e.people.length),
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                B(!1));
        },
        [P, _, t, B],
    );
    (s.useEffect(
        () => (
            l.addAutomaticAnchorCallback(M),
            () => {
                l.removeAutomaticAnchorCallback(M);
            }
        ),
        [l, M],
    ),
        s.useEffect(() => {
            (0, ev.$T)(t.id);
        }, [t.id]),
        s.useEffect(
            () => (
                document.addEventListener("mousedown", H),
                () => {
                    document.removeEventListener("mousedown", H);
                }
            ),
            [H],
        ));
    let W = s.useMemo(
            () => (0, i.jsx)(e$, { channel: t, summaries: _, summariesMembers: b, selectTopic: F, setOpen: B }),
            [_, b, F, B, t],
        ),
        K = s.useCallback(() => {
            let e = eL.Ay.ackMessageId(t.id);
            null != e
                ? S.A.jumpToMessage({ channelId: t.id, messageId: e, offset: 1, context: "Mark As Read" })
                : S.A.jumpToMessage({
                      channelId: t.id,
                      messageId: ew.default.castChannelIdAsMessageId(t.id),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [t.id]),
        z = s.useCallback(() => {
            (0, v.ack)(t.id, {
                section: eZ.JJy.NEW_TOPICS_BAR,
                object: eZ.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eZ.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [t.id]),
        Z = ed.intl.string(ed.t["38qwgO"]);
    return (
        _.length > 0 && (Z = "" === R || null == R ? ed.intl.string(ed.t.DwnFuG) : R),
        r
            ? null
            : (0, i.jsxs)("div", {
                  ref: p,
                  className: a()(tj.dw5, tj.jht),
                  children: [
                      (0, i.jsx)("div", {
                          className: tj.qmJ,
                          children: (0, i.jsx)(x.D, {
                              className: tj.TQl,
                              "aria-label": ed.intl.string(ed.t.RT3MPz),
                              onClick: G,
                              children: (0, i.jsxs)("div", {
                                  className: a()({ [tj.hNz]: !P, [tj.Apq]: P }),
                                  children: [
                                      (0, i.jsx)(C.K, { size: "xs", color: "currentColor", className: tj.VdQ }),
                                      (0, i.jsx)(m.E, {
                                          variant: "text-sm/medium",
                                          className: a()(tj.$Uj, tj.lc3),
                                          children: Z,
                                      }),
                                      (0, i.jsx)(tI.A, {
                                          width: 16,
                                          height: 16,
                                          direction: tI.A.Directions.DOWN,
                                          className: tj.HBW,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, i.jsx)(x.D, { onClick: K, className: tj.ijE, children: n }),
                      (0, i.jsxs)(x.D, {
                          onClick: z,
                          className: a()(tj.hQH, tj.NXP),
                          children: [
                              (0, i.jsx)("div", { className: tj.$Uj, children: ed.intl.string(ed.t.e6RscS) }),
                              (0, i.jsx)(A.M, { size: "md", color: "currentColor", className: tj.t3N }),
                          ],
                      }),
                      P &&
                          (0, i.jsxs)("div", {
                              className: tj.A1T,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: tj.kee,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: tj.Ney,
                                              children: [
                                                  (0, i.jsx)(C.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: tj.vlb,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, i.jsx)(E.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: ed.intl.string(ed.t.q21fUr),
                                                  }),
                                                  (0, i.jsx)(V.A, { className: tj.Zxm }),
                                              ],
                                          }),
                                          (0, i.jsx)(x.D, {
                                              "aria-label": ed.intl.string(ed.t.cpT0Cq),
                                              onClick: G,
                                              className: tj.oX1,
                                              children: (0, i.jsx)(I.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(y.Ip, { ref: N, className: tj.Pei, fade: !0, children: W }),
                              ],
                          }),
                  ],
              })
    );
}
function tz(e, t) {
    return (
        null != t &&
        e.length === t.length &&
        !e.some((e, n) => {
            var l;
            return null == (l = t[n]) || e.length !== l.length || !!e.some((e, t) => l[t] !== e);
        })
    );
}
function tZ(e) {
    let { channel: t, scrollManager: n } = e,
        { disableInteractions: l } = s.useContext(D.Y),
        [r, o] = s.useState(null),
        h = s.useRef(null),
        [p, f] = s.useState(null),
        g = s.useRef(null),
        A = (0, d.yK)([eN.A], () => eN.A.summaries(t.id) ?? [], [t]),
        v = (0, w.Ay)(A);
    s.useEffect(() => {
        u().isEqual(v, A) ||
            ty.default.track(eZ.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: A.length,
                message_counts: A.map((e) => e.count),
                start_message_ids: A.map((e) => e.startId),
                end_message_ids: A.map((e) => e.endId),
                num_participants: A.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [A, v, t.guild_id, t.id, t.type]);
    let N = (0, d.bG)(
            [tE.default],
            () => A?.map((e) => e.people?.map((e) => tE.default.getUser(e) ?? null).filter(eG.Vq)) ?? [],
            [A],
            tz,
        ),
        _ = (0, d.bG)([eN.A], () => eN.A.visibleSummaryIndex()) ?? -1,
        j = A?.[_]?.topic;
    null == j && null == r && A?.length >= 1 && (j = A[0]?.topic);
    let b = s.useMemo(() => u().get(A, _ - 1), [_, A]),
        T = s.useMemo(() => u().get(A, _ + 1), [_, A]),
        R = s.useMemo(
            () =>
                u().debounce((e) => {
                    o(e?.id ?? null);
                }, 64),
            [o],
        ),
        O = s.useMemo(
            () =>
                u().throttle(
                    () => {
                        (0, ev.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        L = s.useCallback(
            (e) => {
                (O(), R(e));
            },
            [R, O],
        ),
        [M, P] = s.useState(!1),
        U = s.useCallback(() => {
            (ty.default.track(eZ.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !M,
                num_summaries: A.length,
                message_counts: A.map((e) => e.count),
                start_message_ids: A.map((e) => e.startId),
                end_message_ids: A.map((e) => e.endId),
                num_participants: A.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                P(!M));
        }, [M, A, P, t]),
        G = s.useCallback(
            function (e) {
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tN.eh.PILL_DROPDOWN,
                    i = A[e];
                null != i &&
                    ((0, ev.sK)(t.id, i.id),
                    (0, ev.C6)(t.id, i.id),
                    n.removeAutomaticAnchorCallback(L),
                    n.addScrollCompleteCallback(function e() {
                        (n.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                n.addAutomaticAnchorCallback(L, !1);
                            }, 100));
                    }),
                    ty.default.track(eZ.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: l,
                        message_id: i.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    S.A.jumpToMessage({
                        channelId: t.id,
                        messageId: i.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: k.vx.ANIMATED,
                        context: "Summary Jump",
                    }));
            },
            [A, t, L, n],
        ),
        F = s.useCallback(() => {
            G(_ - 1, tN.eh.PILL_NEXT_ARROW);
        }, [G, _]),
        B = s.useCallback(() => {
            G(_ + 1, tN.eh.PILL_PREVIOUS_ARROW);
        }, [_, G]),
        H = s.useCallback((e) => {
            P(e);
            let t = g.current?.scrollTop;
            null != t && f(t);
        }, []);
    s.useEffect(() => {
        null != p && M && g.current?.scrollTo({ top: p });
    }, [p, M]);
    let W = s.useCallback(
        (e) => {
            ((0, c.vq)(e.target) && h.current?.contains(e.target)) ||
                (M &&
                    ty.default.track(eZ.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: A.length,
                        message_counts: A.map((e) => e.count),
                        start_message_ids: A.map((e) => e.startId),
                        end_message_ids: A.map((e) => e.endId),
                        num_participants: A.map((e) => e.people.length),
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                H(!1));
        },
        [M, A, t, H],
    );
    (s.useEffect(
        () => (
            n.addAutomaticAnchorCallback(L),
            () => {
                n.removeAutomaticAnchorCallback(L);
            }
        ),
        [n, L],
    ),
        s.useEffect(() => {
            (0, ev.$T)(t.id);
        }, [t.id]),
        s.useEffect(
            () => (
                document.addEventListener("mousedown", W),
                () => {
                    document.removeEventListener("mousedown", W);
                }
            ),
            [W],
        ));
    let K = s.useMemo(
        () => (0, i.jsx)(e$, { channel: t, summaries: A, summariesMembers: N, selectTopic: G, setOpen: H }),
        [A, N, G, H, t],
    );
    if (!(0, d.bG)([eN.A], () => eN.A.shouldShowTopicsBar())) return null;
    let z = ed.intl.string(ed.t["38qwgO"]);
    return (
        A.length > 0 && (z = "" === j || null == j ? ed.intl.string(ed.t.DwnFuG) : j),
        l
            ? null
            : (0, i.jsxs)("div", {
                  ref: h,
                  className: a()(tj.$T$, tj.jht),
                  children: [
                      (0, i.jsxs)("div", {
                          className: tj.sEF,
                          children: [
                              (0, i.jsx)(x.D, {
                                  className: tj.LPV,
                                  "aria-label": ed.intl.string(ed.t.RT3MPz),
                                  onClick: U,
                                  children: (0, i.jsxs)("div", {
                                      className: a()({ [tj.Nv2]: !M, [tj.Ann]: M }),
                                      children: [
                                          (0, i.jsx)(C.K, { size: "xs", color: "currentColor", className: tj.Npc }),
                                          (0, i.jsx)(m.E, {
                                              className: tj.r1V,
                                              variant: "text-sm/medium",
                                              children: z,
                                          }),
                                          (0, i.jsx)(tI.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tI.A.Directions.DOWN,
                                              className: tj._lP,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: tj.Ykg,
                                  children: [
                                      (0, i.jsx)(x.D, {
                                          "aria-label": ed.intl.string(ed.t["4huCnC"]),
                                          onClick: B,
                                          className: a()(tj.ZMY, tj.vzA, { [tj.jfO]: null == T }),
                                          children: (0, i.jsx)(tI.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tI.A.Directions.UP,
                                          }),
                                      }),
                                      (0, i.jsx)(x.D, {
                                          "aria-label": ed.intl.string(ed.t["58KOoF"]),
                                          onClick: F,
                                          className: a()(tj.ZMY, tj.mtW, { [tj.jfO]: null == b }),
                                          children: (0, i.jsx)(tI.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tI.A.Directions.DOWN,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      M &&
                          (0, i.jsxs)("div", {
                              className: tj.A1T,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: tj.kee,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: tj.Ney,
                                              children: [
                                                  (0, i.jsx)(C.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: tj.vlb,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, i.jsx)(E.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: ed.intl.string(ed.t.q21fUr),
                                                  }),
                                                  (0, i.jsx)(V.A, { className: tj.Zxm }),
                                              ],
                                          }),
                                          (0, i.jsx)(x.D, {
                                              "aria-label": ed.intl.string(ed.t.cpT0Cq),
                                              onClick: U,
                                              className: tj.oX1,
                                              children: (0, i.jsx)(I.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(y.Ip, { ref: g, className: tj.Pei, fade: !0, children: K }),
                              ],
                          }),
                  ],
              })
    );
}
function tY(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, i.jsxs)("div", {
        className: tj.YLv,
        children: [
            (0, i.jsx)(m.E, {
                color: "none",
                variant: "text-sm/semibold",
                lineClamp: 1,
                className: tj.LdH,
                children: e,
            }),
            t &&
                (0, i.jsx)(m.E, {
                    className: tj.$oi,
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: ed.intl.string(ed.t["515vjG"]),
                }),
        ],
    });
}
function tq(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)("div", { className: a()(tj.jCT, n), children: t });
}
function tJ(e) {
    let { className: t } = e;
    return (0, i.jsx)(tq, {
        className: t,
        children: (0, i.jsx)("div", { className: tj.wHG, children: (0, i.jsx)("div", { className: tj.j3g }) }),
    });
}
