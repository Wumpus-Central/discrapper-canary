n.d(t, {
    ks: () => tB,
    UK: () => tq,
    Ez: () => tK,
    _z: () => tk,
    LL: () => tV,
    Uq: () => t$,
    yR: () => tJ,
    OZ: () => tZ,
    $o: () => tP,
    bU: () => tG,
    Uk: () => tR,
    GN: () => tz,
    Y0: () => tX,
    P$: () => tU,
    _d: () => tF,
    gL: () => tD,
    Dk: () => tH,
    Ab: () => tW,
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
class H extends s.PureComponent {
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
var B = n(248643),
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
    eu = n(255438);
let ec = (0, n(945810).mj)({
    name: "2026-09-markdown-file-preview",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function ed(e) {
    let { location: t, children: n } = e;
    return n(ec.useConfig({ location: t }).enabled);
}
var em = n(540168),
    eh = n(375708),
    ep = n(810917);
let ef = new Set(["markdown", "md", "mkd", "mkdown"]),
    eg = (0, ei.Fe)({
        createPromise: () => Promise.all([n.e("759743"), n.e("207596"), n.e("636550")]).then(n.bind(n, 456262)),
        webpackId: 456262,
        name: "PlaintextFileMarkdownPreview",
        renderLoader: () => (0, i.jsx)(g.y, { className: ep.u1 }),
    });
function ex(e) {
    let { text: t, language: n, wordWrap: l } = e;
    return (0, i.jsx)(em.d, { text: t, language: n, className: a()(ep.Xb, { [ep.Zw]: l }) });
}
function eA(e) {
    let { expanded: t, setExpanded: n, numLines: l, isWholeFile: s } = e,
        r = eh.intl.formatToPlainString(s ? eh.t.Go5Vvs : eh.t.yJcYan, { lines: l }),
        a = `${t ? eh.intl.string(eh.t.iTcuma) : eh.intl.string(eh.t.dcl9MQ)} (${r})`;
    return (0, i.jsx)("div", {
        className: ep.py,
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
function eC(e) {
    let { fileName: t, fileSize: n } = e,
        l = `${t} (${(0, eu.up)(n)})`;
    return (0, i.jsxs)("div", {
        className: ep.VI,
        children: [
            (0, i.jsx)("div", {
                className: ep.VW,
                children: (0, i.jsx)(W.m, {
                    text: l,
                    children: (0, i.jsx)(m.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: ep.Md,
                        children: t,
                    }),
                }),
            }),
            (0, i.jsx)(m.E, { variant: "text-xs/normal", color: "text-subtle", children: (0, eu.up)(n) }),
        ],
    });
}
function eE(e) {
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
                "aria-label": eh.intl.string(eh.t.utm4qs),
                children: (0, i.jsx)("div", {
                    className: ep.md,
                    children: (0, i.jsxs)(q.iS, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            (n(e), l());
                        },
                        options: Array.from(a).map((e) => ({ value: e, label: e, id: e })),
                        value: t,
                        children: [
                            (0, i.jsx)(q.a3, { placeholder: eh.intl.string(eh.t.GofftW) }),
                            (0, i.jsx)(q.X2, {}),
                        ],
                    }),
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(W.m, {
                ariaHidden: !0,
                text: eh.intl.string(eh.t.utm4qs),
                children: (0, i.jsx)(x.D, {
                    ...e,
                    className: ep.Qw,
                    "aria-label": eh.intl.string(eh.t.utm4qs),
                    children: (0, i.jsx)(J.G, { size: "sm", color: "currentColor", ref: r }),
                }),
            }),
    });
}
function eI(e) {
    let {
            wordWrap: t,
            setWordWrap: n,
            language: l,
            markdownEnabled: r,
            renderMarkdown: a,
            setRenderMarkdown: o,
            url: u,
            fileName: c,
        } = e,
        d = s.useRef(null),
        m = s.useRef(null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.Y, {
                targetElementRef: d,
                position: "top",
                align: "left",
                renderPopout: (e) => {
                    let { closePopout: s } = e;
                    return (0, i.jsx)($.W, {
                        "data-menu-migrated": !0,
                        navId: "plaintext-preview-overflow-menu",
                        onClose: s,
                        onSelect: () => {},
                        "aria-label": eh.intl.string(eh.t.PdRCRg),
                        children: (0, i.jsxs)(X.rX, {
                            children: [
                                (0, i.jsx)(X.Dr, {
                                    id: "download",
                                    label: eh.intl.string(eh.t["1WjMbC"]),
                                    icon: Q.DownloadIcon,
                                    action: () => {
                                        (m.current?.click(), s());
                                    },
                                }),
                                (0, i.jsx)(X.sL, {
                                    id: "word-wrap",
                                    label: eh.intl.string(eh.t.AMKNT1),
                                    checked: t,
                                    action: () => n(!t),
                                }),
                                r && ef.has(l)
                                    ? (0, i.jsx)(X.sL, {
                                          id: "render-markdown",
                                          label: eh.intl.string(eh.t.zstmkn),
                                          checked: a,
                                          action: () => o(!a),
                                      })
                                    : null,
                            ],
                        }),
                    });
                },
                children: (e) =>
                    (0, i.jsx)(W.m, {
                        ariaHidden: !0,
                        text: eh.intl.string(eh.t["UKOtz+"]),
                        children: (0, i.jsx)(x.D, {
                            ...e,
                            className: ep.IQ,
                            "aria-label": eh.intl.string(eh.t["UKOtz+"]),
                            children: (0, i.jsx)(ee.MoreHorizontalIcon, { ref: d, size: "sm", color: "currentColor" }),
                        }),
                    }),
            }),
            (0, i.jsx)(et.Anchor, {
                ref: m,
                href: u,
                download: c,
                className: ep.op,
                children: (0, i.jsx)(Q.DownloadIcon, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function ey(e) {
    return (0, i.jsx)(W.m, {
        ariaHidden: !0,
        text: eh.intl.string(eh.t["0PQYk3"]),
        children: (0, i.jsx)(x.D, {
            className: ep.R1,
            "aria-label": eh.intl.string(eh.t["0PQYk3"]),
            onClick: () => {
                (0, N.openModal)((t) => (0, i.jsx)(ev, { ...e, ...t }));
            },
            children: (0, i.jsx)(en._, { size: "sm", color: "currentColor" }),
        }),
    });
}
function eS(e) {
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
            markdownEnabled: h,
            renderMarkdown: p,
            setRenderMarkdown: f,
            bytesLeft: x,
            className: A,
        } = e,
        C = s?.split("\n"),
        E = C?.length ?? 0,
        I = r ? 100 : 6,
        S = 0 === x,
        v = h && p && ef.has(u),
        N = "";
    (S && r && E > I ? (N = "\n...") : S || (N = "..."),
        "" !== N &&
            (S
                ? (N += " " + eh.intl.formatToPlainString(eh.t.DQnFp2, { lines: E - I }))
                : (N += " " + eh.intl.formatToPlainString(eh.t["1+gGcK"], { formattedBytes: (0, eu.up)(x) }))));
    let _ = C?.slice(0, I).join("\n") ?? "",
        j = r || I < E;
    return (0, i.jsxs)("div", {
        className: a()(A, ep.kL),
        children: [
            (0, i.jsx)(y.Ip, {
                className: a()(ep.FS, { [ep.KQ]: !r && !v }),
                style: { "--custom-plaintext-preview-collapsed-lines": 6 },
                children:
                    null == s
                        ? (0, i.jsx)(g.y, { className: ep.u1 })
                        : v
                          ? (0, i.jsx)(eg, { text: _, notice: N.trim() })
                          : (0, i.jsx)(ex, { text: _ + N, language: u, wordWrap: d }),
            }),
            (0, i.jsxs)("div", {
                className: ep.qr,
                role: "group",
                "aria-label": eh.intl.string(eh.t.TlXA8e),
                children: [
                    j ? (0, i.jsx)(eA, { expanded: r, setExpanded: o, numLines: E, isWholeFile: S }) : null,
                    (0, i.jsx)(eC, { fileName: n, fileSize: l }),
                    (0, i.jsx)("div", { className: ep.Kb }),
                    (0, i.jsx)(eE, { language: u, setLanguage: c, align: "top" }),
                    null != s
                        ? (0, i.jsx)(ey, {
                              url: t,
                              fileName: n,
                              fileSize: l,
                              language: u,
                              wordWrap: d,
                              markdownEnabled: h,
                              renderMarkdown: p,
                              fileContents: s,
                              bytesLeft: x,
                          })
                        : null,
                    (0, i.jsx)(eI, {
                        wordWrap: d,
                        setWordWrap: m,
                        language: u,
                        markdownEnabled: h,
                        renderMarkdown: p,
                        setRenderMarkdown: f,
                        url: t,
                        fileName: n,
                    }),
                ],
            }),
        ],
    });
}
function ev(e) {
    let {
            url: t,
            fileName: n,
            fileSize: l,
            transitionState: r,
            language: a,
            wordWrap: o,
            markdownEnabled: u,
            renderMarkdown: d,
            fileContents: h,
            bytesLeft: p,
            onClose: f,
        } = e,
        [x, A] = s.useState(a),
        [C, E] = s.useState(o),
        [I, S] = s.useState(d),
        v = s.useRef(null),
        N = u && I && ef.has(x),
        _ = 0 !== p ? `... ${eh.intl.formatToPlainString(eh.t["1+gGcK"], { formattedBytes: (0, eu.up)(p) })}` : "";
    return (
        s.useEffect(() => {
            function e(e) {
                if ((e.metaKey || e.ctrlKey) && "a" === e.key && null != v.current) {
                    let t = document.activeElement;
                    if ((0, c.vq)(t, HTMLInputElement) || (0, c.vq)(t, HTMLTextAreaElement)) return;
                    e.preventDefault();
                    let n = window.getSelection();
                    if (null != n) {
                        let e = document.createRange();
                        (e.selectNodeContents(v.current), n.removeAllRanges(), n.addRange(e));
                    }
                }
            }
            return (document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e));
        }, []),
        (0, i.jsx)(el.d, {
            transitionState: r,
            "aria-label": eh.intl.string(eh.t["qxQjc+"]),
            size: "xxl",
            onClose: f,
            children: (0, i.jsxs)("div", {
                className: ep.jE,
                children: [
                    (0, i.jsx)(y.Ip, {
                        className: ep.ot,
                        children:
                            null == h
                                ? (0, i.jsx)(g.y, { className: ep.u1 })
                                : (0, i.jsx)("div", {
                                      ref: v,
                                      children: N
                                          ? (0, i.jsx)(eg, { text: h, notice: _ })
                                          : (0, i.jsx)(ex, { text: h + _, language: x, wordWrap: C }),
                                  }),
                    }),
                    (0, i.jsx)("div", {
                        role: "group",
                        "aria-label": eh.intl.string(eh.t.TlXA8e),
                        children: (0, i.jsxs)(m.E, {
                            color: "text-default",
                            className: ep.Hx,
                            variant: "text-sm/normal",
                            children: [
                                (0, i.jsx)(eC, { fileName: n, fileSize: l }),
                                (0, i.jsx)("div", { className: ep.Kb }),
                                (0, i.jsx)(eE, { language: x, setLanguage: A, align: "bottom" }),
                                (0, i.jsx)(eI, {
                                    wordWrap: C,
                                    setWordWrap: E,
                                    language: x,
                                    markdownEnabled: u,
                                    renderMarkdown: I,
                                    setRenderMarkdown: S,
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
let eN = s.memo(
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
        if (I) return (0, i.jsx)(P.A, { url: t, fileName: n, fileSize: l, onClick: u, onContextMenu: c, className: o });
        function y(e) {
            return (0, i.jsx)(eS, {
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
                markdownEnabled: e,
                renderMarkdown: x,
                setRenderMarkdown: A,
                className: a()(ep.mr, o),
            });
        }
        return ef.has(h) ? (0, i.jsx)(ed, { location: "PlaintextFilePreview", children: y }) : y(!1);
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
var e_ = n(863922),
    ej = n(822074),
    eb = n(534890),
    eT = n(442433),
    eR = n(640708),
    eO = n(941971),
    eL = n(707539),
    eM = n(576705),
    ek = n(573163),
    ew = n(340833),
    eP = n(913642),
    eD = n(935208),
    eU = n(453302);
n(321073);
var eV = n(97808),
    eG = n(778712),
    eF = n(707606),
    eH = n(403362),
    eB = n(439511);
let eW = (0, eF.A)(function (e) {
        let { member: t, empty: n, guildId: l } = e;
        return n || null == t
            ? (0, i.jsx)("div", { className: eB.pO })
            : (0, i.jsx)("div", {
                  className: eB.pO,
                  children: (0, i.jsx)(eV.eu, {
                      src: t.getAvatarURL(l, 16),
                      "aria-label": t.username,
                      size: eG._3.SIZE_16,
                      className: eB.pO,
                  }),
              });
    }),
    eK = function (e) {
        let { partySize: t, members: n, minAvatarsShown: l = 1, maxAvatarsShown: s = 2, guildId: r } = e,
            { totalSize: a, knownSize: o } = t;
        if (a < l) return null;
        let c = u()(n)
                .filter(eH.Vq)
                .take(s)
                .map((e) => (0, i.jsx)(eW, { member: e, guildId: r }, e.id))
                .value(),
            d = a - o;
        for (let e = 0; e < d && c.length < s; e++)
            c.push((0, i.jsx)(eW, { empty: !0, guildId: r }, `empty-member-${e}`));
        let m = Math.max(Math.min(a - c.length, 99), 0);
        if (1 === m) {
            let e = n[s];
            c.push((0, i.jsx)(eW, { member: e, guildId: r }, e.id));
        }
        return (0, i.jsx)("div", {
            className: eB.iE,
            children: (0, i.jsxs)("div", {
                className: eB.S3,
                children: [c, m > 1 ? (0, i.jsxs)("div", { className: eB.Hi, children: ["+", m] }) : null],
            }),
        });
    };
var ez = n(303727),
    eZ = n(681939);
function eY() {
    return (0, i.jsxs)("div", {
        className: eZ.kL,
        children: [
            (0, i.jsxs)("div", {
                className: eZ.zc,
                children: [
                    (0, i.jsx)("div", {
                        className: eZ.Kk,
                        children: (0, i.jsx)(C.K, {
                            size: "custom",
                            color: "currentColor",
                            className: eZ.l1,
                            width: 28,
                            height: 28,
                        }),
                    }),
                    (0, i.jsx)(ez.A, { className: eZ.uf }),
                ],
            }),
            (0, i.jsx)(E.D, {
                className: eZ.wx,
                variant: "heading-xl/semibold",
                children: eh.intl.string(eh.t.yJHJei),
            }),
            (0, i.jsx)(m.E, {
                className: eZ.Qq,
                color: "text-default",
                variant: "text-md/normal",
                children: eh.intl.string(eh.t.p2dIh6),
            }),
        ],
    });
}
var eq = n(652215),
    eJ = n(670455),
    e$ = n(750557);
function eX(e) {
    let { summary: t, channel: l, members: r, guildId: a, unread: o, onClick: u } = e,
        [c, h] = s.useState(!1),
        p = (0, eL.aK)(eD.default.extractTimestamp(t.startId)),
        f = (0, d.bG)([ej.A], () => ej.A.summaryFeedback(t));
    function g(e, n) {
        (e.stopPropagation(), (0, eU.A)({ summary: t, channel: l, rating: n }));
    }
    let A = eM.A.can(eq.xBc.MANAGE_MESSAGES, l);
    return (0, i.jsxs)(x.D, {
        className: e$.kL,
        onClick: u,
        onContextMenu: function (e) {
            A &&
                (0, eT.L3)(e, async () => {
                    let { default: e } = await n.e("443921").then(n.bind(n, 304232));
                    return (n) => (0, i.jsx)(e, { ...n, summary: t });
                });
        },
        onMouseEnter: () => h(!0),
        onMouseLeave: () => h(!1),
        children: [
            (0, i.jsx)(eO.A, { hovered: c, unread: o, className: e$.dM }),
            (0, i.jsx)("div", {
                className: e$.uV,
                children: (0, i.jsxs)("div", {
                    className: e$.Hw,
                    children: [
                        (0, i.jsx)(m.E, {
                            className: e$.vE,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: p,
                        }),
                        (0, i.jsx)(eR.A, { height: 4, width: 4, "aria-hidden": "true", className: e$.Om }),
                        (0, i.jsx)(eb.ChatIcon, { size: "xxs", color: "currentColor", className: e$.Kk }),
                        (0, i.jsx)(m.E, {
                            className: e$.U9,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: t.count,
                        }),
                        r.length > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(eR.A, { height: 4, width: 4, "aria-hidden": "true", className: e$.Om }),
                                    (0, i.jsx)(eK, {
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
                    className: e$.p_,
                    children: [
                        (0, i.jsx)(x.D, {
                            onClick: (e) => g(e, eJ.P0.GOOD),
                            children: (0, i.jsx)(eP.A, { className: e$.O1, width: 12, height: 12 }),
                        }),
                        (0, i.jsx)(x.D, {
                            onClick: (e) => g(e, eJ.P0.BAD),
                            children: (0, i.jsx)(ew.A, { className: e$.O1, width: 12, height: 12 }),
                        }),
                    ],
                }),
            (0, i.jsx)(m.E, { color: "text-strong", variant: "text-sm/semibold", className: e$.DD, children: t.topic }),
            (0, i.jsx)(m.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: e$.VA,
                children: t.summShort,
            }),
        ],
    });
}
function eQ(e) {
    let { summaries: t, summariesMembers: n, channel: l, selectTopic: r, setOpen: a } = e,
        o = (0, d.bG)([ek.Ay], () => ek.Ay.getOldestUnreadMessageId(l.id)),
        u = s.useCallback(
            (e) => {
                (r(e), a(!1));
            },
            [r, a],
        );
    return t.length < 1
        ? (0, i.jsx)(eY, {})
        : (0, i.jsx)(i.Fragment, {
              children: t.map((e, t) => {
                  let s = n[t] ?? [];
                  return (0, i.jsx)(
                      eX,
                      {
                          summary: e,
                          channel: l,
                          members: s,
                          guildId: l.guild_id,
                          unread: null != o && eD.default.compare(e.endId, o) > 0,
                          onClick: () => u(t),
                      },
                      t,
                  );
              }),
          });
}
var e0 = n(885386),
    e1 = n(113494),
    e2 = n(782134),
    e3 = n(775602),
    e8 = n(228366),
    e5 = n(713021);
let e7 = s.forwardRef(function (e, t) {
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
var e6 = n(20504),
    e4 = n(625494),
    e9 = n(927813),
    te = n(824744);
n(508300);
var tt = n(661531),
    tn = n(602853),
    tl = n(765671);
function ti(e, t) {
    let n = e.getBoundingClientRect();
    return Math.min(1, Math.max(0, (t.clientX - n.left) / n.width));
}
var ts = n(998304),
    tr = n(284009),
    ta = n.n(tr),
    to = n(722872);
class tu {
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
              ? to.easeOutQuint(e, this.animationDetails.lastValue, this.value, t)
              : to.easeOutBack(e, this.animationDetails.lastValue, this.value, t, 4);
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
let tc = [0.75, 1, 1.5, 2];
var td = n(587159);
let tm = [0, 0, 0, 0, 0];
function th(e) {
    let { showAll: t, currentTime: n, duration: l, numSegments: i } = e;
    return t ? i : Math.max(0, Math.round((n / l) * i));
}
function tp(e) {
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
function tf(e, t, n) {
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
function tg(e, t, n, l) {
    if (null == l) return [t, !1];
    let i = Math.min((n - l) / 200, 1);
    return 1 === i ? [t, !1] : [(0, ts.De)(e, t, i), !0];
}
function tx(e) {
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
        { ref: f, width: g } = (0, tl.Ay)(),
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
                                if ((ta()(e.length >= t, "Waveform smaller than samples"), e.length === t)) return e;
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
                    })(t ?? [], n) ?? tm,
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
            let n = (0, tn.r)(tt.A.colors.BACKGROUND_MOD_MUTED).hex(),
                l = (0, tn.r)(tt.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
                i = (0, tn.r)(tt.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
                s = (0, tn.r)(tt.A.unsafe_rawColors.BRAND_430).hex(),
                r = (0, tn.r)(tt.A.unsafe_rawColors.WHITE).hex(),
                a = t ? s : n,
                [o, u] = tf(a, t, e),
                [c, d] = tf(t ? r : e ? i : l, t, e),
                [m, h] = tf(e ? a : l, t, e);
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
                l = th({ showAll: !n, currentTime: e, duration: t, numSegments: C.length });
            A.current = C.map((e, t) => new tu(t < l ? e : 0));
        }, [C]),
        s.useEffect(() => {
            let e = A.current;
            if (null == e) return;
            let t = th({ showAll: !c, currentTime: o, duration: u, numSegments: C.length });
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
                    let [o, u] = tg(v, N, n, y.current);
                    ((r = r || u), (i.fillStyle = o));
                    for (let e = 0; e < C.length; e++)
                        tp({
                            context: i,
                            devicePixelRatio: S,
                            canvasHeight: a,
                            segmentValue: C[e],
                            segmentIndex: e,
                            constrainMin: !0,
                        });
                    i.fill();
                    let [m, h] = tg(b, T, n, y.current);
                    r = r || h;
                    let [p, g] = tg(_, j, n, y.current);
                    r = r || g;
                    for (let e = 0; e < s.length; e++) {
                        let t = s[e],
                            n = Math.max(t.getCurrentValue(), C[e] - 0.1);
                        (i.beginPath(),
                            (i.fillStyle = t.isReset ? m : p),
                            tp({
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
                    null != l && n?.(ti(l, e));
                }
            }, [t, r, i, n]),
            [
                r,
                s.useCallback(
                    (e) => {
                        e.preventDefault();
                        let i = t.current;
                        null != i && (a(!0), l?.(), n?.(ti(i, e)));
                    },
                    [t, l, n],
                ),
            ]
        );
    })({ ref: f, onDrag: m, onDragStart: h, onDragEnd: p });
    return (0, i.jsx)("canvas", {
        onMouseDown: L,
        className: a()(td.J, l),
        style: { width: x },
        ref: f,
        height: 32 * window.devicePixelRatio,
        width: (g ?? 0) * window.devicePixelRatio,
    });
}
var tA = n(672245);
let tC = s.lazy(() => n.e("594436").then(n.bind(n, 660207)));
function tE(e) {
    let { played: t, duration: n, currentTime: l } = e,
        s = null == n ? "--:--" : t ? (0, F.rB)(Math.ceil(n - l)) : (0, F.rB)(Math.ceil(n));
    return (0, i.jsx)(m.E, { variant: "text-sm/normal", className: tA.p0, tabularNumbers: !0, children: s });
}
let tI = s.memo(function (e) {
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
        I = s.useMemo(() => (null != C ? e5.Ay.getPlaybackPosition(C) : 0), [C]),
        y = (0, d.bG)([e5.Ay], () => e5.Ay.getPlaybackRate(e5.k0.VOICE_MESSAGE)),
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
        H = s.useCallback(() => {
            (L((e) => !e), P(!0));
        }, []),
        B = s.useCallback(() => {
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
                    e8.h.dispatch({ type: "MEDIA_PLAYBACK_POSITION_UPDATE", cacheKey: C, position: e, duration: c });
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
                let t = (0, te.w)(e, 1);
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
                    }, e9.A.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [O, M, K]),
        s.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: l } = el.current;
            if (e || O)
                if (O) ((et.current = performance.now()), l?.(!1, t, (E.current?.duration ?? 0) * e9.A.Millis.SECOND));
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
                    e4._.dispatch(eq.jej.VOICE_MESSAGE_PLAYBACK_STARTED, { src: n }),
                    e4._.subscribe(eq.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e),
                    () => {
                        e4._.unsubscribe(eq.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e);
                    }
                );
            function e(e) {
                let { src: t } = e;
                n !== t && L(!1);
            }
        }, [n, O, L]));
    let ei = O ? e1.PauseIcon : e2.PlayIcon,
        es = O ? eh.intl.string(eh.t["3XohGn"]) : eh.intl.string(eh.t.AlHqHT),
        er = eh.intl.formatToPlainString(eh.t.LgCPMt, { playbackRate: y }),
        ea = `${y.toString().replace(/^0/, "")}X`;
    t =
        "Safari" === platform.name
            ? (0, i.jsx)(s.Suspense, {
                  children: (0, i.jsx)(tC, {
                      ref: E,
                      className: tA.Zn,
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
            : (0, i.jsx)(e7, {
                  ref: E,
                  className: tA.Zn,
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
    let eo = (0, d.bG)([e3.Ay], () => e3.Ay.useReducedMotion);
    return (0, i.jsxs)("div", {
        className: a()(tA.kL, { [tA.he]: O }),
        onMouseEnter: B,
        role: "region",
        "aria-label": eh.intl.string(eh.t.c8U6xd),
        children: [
            (0, i.jsx)("div", {
                className: tA.Kl,
                children: (0, i.jsx)("div", { className: a()(tA.fq, { [tA.VN]: eo }) }),
            }),
            (0, i.jsx)(x.D, {
                className: tA.k0,
                onClick: H,
                "aria-label": es,
                children: (0, i.jsx)(ei, { className: tA.uZ, color: "currentColor", size: "sm" }),
            }),
            (0, i.jsx)(tx, {
                className: tA.ou,
                waveform: u,
                currentTime: N,
                duration: j ?? 1,
                playing: O,
                played: S,
                onDrag: ee,
                onDragStart: X,
                onDragEnd: Q,
            }),
            (0, i.jsx)(tE, { played: S, currentTime: N, duration: j }),
            (0, i.jsx)(x.D, {
                className: tA.LJ,
                onClick: () => {
                    var e, t;
                    let n;
                    return (
                        (n = (tc.indexOf(y) + 1) % tc.length),
                        void ((e = tc[n]),
                        (t = e5.k0.VOICE_MESSAGE),
                        e8.h.dispatch({ type: "MEDIA_PLAYBACK_RATE_UPDATE", rate: e, playbackType: t }))
                    );
                },
                "aria-label": er,
                children: (0, i.jsx)(m.E, { variant: "text-xs/semibold", className: tA.Sn, children: ea }),
            }),
            (0, i.jsx)(e6.A, {
                className: tA.bk,
                iconClassName: tA._j,
                iconColor: "currentColor",
                sliderWrapperClassName: tA.MQ,
                muted: T,
                value: (0, te.M)(V, 1),
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
var ty = n(287809),
    tS = n(147925),
    tv = n(174459),
    tN = n(587481),
    t_ = n(838541),
    tj = n(521732),
    tb = n(650583),
    tT = n(959760);
let tR = { delay: 300, position: "top" };
function tO(e) {
    return (t) => {
        (e?.(t), (0, tN.ls)(t));
    };
}
function tL(e) {
    return (t) => {
        (e?.(t), (0, tN.y5)(t));
    };
}
function tM(e) {
    let { altText: t, altButtonRef: n } = e;
    return (0, i.jsxs)("div", {
        role: "dialog",
        "aria-label": eh.intl.string(eh.t.fSiQ3A),
        className: tT.obt,
        tabIndex: -1,
        onKeyDown: (e) => {
            e.key === tb.N$.Escape && setTimeout(() => n.current?.focus(), 0);
        },
        children: [
            (0, i.jsx)(m.E, {
                variant: "text-xs/bold",
                color: "none",
                tag: "span",
                className: tT.k_Z,
                children: eh.intl.string(eh.t.fSiQ3A),
            }),
            (0, i.jsx)(m.E, { variant: "text-md/normal", color: "none", tag: "span", className: tT.a7V, children: t }),
        ],
    });
}
function tk(e) {
    let {
            alt: t,
            controlsVisible: n = !0,
            disableAltTextDisplay: l = !1,
            hiddenSpoilers: r = !1,
            reducedSizeAltTextButton: o = !1,
        } = e,
        [u, c] = s.useState(!1),
        d = s.useRef(null);
    return (n || u) && !l && e0._z.getSetting() && null != t && "" !== t && !0 !== r
        ? (0, i.jsx)("div", {
              className: tT.NOQ,
              children: (0, i.jsx)(h.Y, {
                  targetElementRef: d,
                  animation: h.Y.Animation.FADE,
                  renderPopout: () => (0, i.jsx)(tM, { altText: t, altButtonRef: d }),
                  children: (e) =>
                      (0, i.jsx)(p.vN, {
                          offset: 4,
                          children: (0, i.jsx)("button", {
                              ...e,
                              type: "button",
                              ref: d,
                              "aria-label": eh.intl.string(eh.t.fSiQ3A),
                              onMouseEnter: () => c(!0),
                              onMouseLeave: () => c(!1),
                              className: a()(tT.DV5, { [tT.yZ5]: !0, [tT.I54]: o }),
                              children: eh.intl.string(eh.t.jCV1Tz),
                          }),
                      }),
              }),
          })
        : null;
}
function tw(e) {
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
        x = tO(t),
        A = tL(n);
    ((l = null == l ? tN.v1 : l), (r = null == r ? tN.uj : r));
    let [C, E] = s.useState(!0),
        I = p === t_.dG.MOSAIC || !0 === h,
        y = C && !c && e0._z.getSetting() && null != a && "" !== a && !0 !== d;
    return (0, i.jsxs)(s.Fragment, {
        children: [
            (0, i.jsx)(B.A, {
                ...g,
                alt: a,
                autoMute: r,
                mediaLayoutType: p,
                onControlsHide: () => E(!1),
                onControlsShow: () => E(!0),
                onMute: A,
                onVolumeChange: x,
                renderLinkComponent: tG,
                renderOverlayContent: u,
                volume: l,
            }),
            null != o && o(),
            I &&
                (0, i.jsx)(tk, {
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
                    className: tT.R5R,
                    children: a,
                }),
        ],
    });
}
function tP(e) {
    return (0, i.jsx)(tw, { ...e });
}
function tD(e) {
    let {
            onVolumeChange: t,
            volume: n,
            onMute: l,
            onVolumeShow: r,
            onVolumeHide: a,
            renderAdjacentContent: o,
            ...u
        } = e,
        c = tO(t),
        d = tL(l);
    return (
        (n = null == n ? tN.v1 : n),
        (0, i.jsxs)(s.Fragment, {
            children: [
                (0, i.jsx)(H, {
                    ...u,
                    onVolumeChange: c,
                    onMute: d,
                    onVolumeShow: r,
                    onVolumeHide: a,
                    volume: n,
                    autoMute: function () {
                        return !1;
                    },
                    renderLinkComponent: tG,
                }),
                null != o && o(),
            ],
        })
    );
}
function tU(e) {
    let { onVolumeChange: t, volume: n, onMute: l, ...s } = e,
        r = tO(t),
        a = tL(l);
    return ((n = null == n ? tN.v1 : n), (0, i.jsx)(tI, { ...s, onVolumeChange: r, onMute: a, volume: n }));
}
function tV(e) {
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
        x = d === t_.dG.MOSAIC || !0 === g,
        A = !u && e0._z.getSetting() && null != t && "" !== t && !0 !== n,
        C = s.createRef();
    return (0, i.jsxs)("div", {
        className: a()(tT.foG, r),
        children: [
            (0, i.jsxs)("div", {
                className: a()(tT.ZSk, o),
                style: f,
                children: [(0, i.jsx)(L, { ...e }), null != l && l()],
            }),
            x &&
                A &&
                (0, i.jsx)("div", {
                    className: tT.Y1Z,
                    children: (0, i.jsx)(h.Y, {
                        targetElementRef: C,
                        animation: h.Y.Animation.FADE,
                        renderPopout: () => (0, i.jsx)(tM, { altText: t, altButtonRef: C }),
                        children: (e) =>
                            (0, i.jsx)(p.vN, {
                                offset: 4,
                                children: (0, i.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: C,
                                    "aria-label": eh.intl.string(eh.t.fSiQ3A),
                                    className: a()(tT.DV5, { [tT.I54]: c }),
                                    children: eh.intl.string(eh.t.jCV1Tz),
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
                    className: tT.R5R,
                    children: t,
                }),
        ],
    });
}
function tG(e) {
    return (0, i.jsx)(M.A, { ...e });
}
function tF(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, i.jsxs)(s.Fragment, { children: [(0, i.jsx)(eN, { ...n }), null != t && t()] });
}
function tH(e) {
    return (0, i.jsx)(P.A, { ...e });
}
var tB = (((l = {})[(l.OLD_MESSAGES = 0)] = "OLD_MESSAGES"), (l[(l.REPLY = 1)] = "REPLY"), l);
let tW = (e) => {
    let { type: t = 0, onClick: n, className: l } = e;
    return (0, i.jsx)(D.Y.Consumer, {
        children: (e) =>
            e.disableInteractions
                ? null
                : (0, i.jsxs)("div", {
                      onClick: n,
                      className: a()(tT.Sg2, l),
                      children: [
                          (0, i.jsx)("div", {
                              className: tT.$IB,
                              children: (function (e) {
                                  switch (e) {
                                      case 0:
                                          return eh.intl.string(eh.t["4EvBbw"]);
                                      case 1:
                                          return eh.intl.string(eh.t["1J6Xq7"]);
                                      default:
                                          return (0, eH.xb)(e);
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
                                                    return eh.intl.string(eh.t.gpoQsB);
                                                case 1:
                                                    return eh.intl.string(eh.t.k3RM8z);
                                                default:
                                                    return (0, eH.xb)(e);
                                            }
                                        })(t),
                                        onClick: n,
                                    }),
                                })
                              : (0, i.jsx)(g.y, {
                                    type: g.y.Type.PULSING_ELLIPSIS,
                                    className: tT.u1E,
                                    itemClassName: tT.$N2,
                                }),
                      ],
                  }),
    });
};
function tK(e) {
    let { onClick: t, loading: n, className: l } = e;
    return (0, i.jsx)(D.Y.Consumer, {
        children: (e) =>
            e.disableInteractions
                ? null
                : (0, i.jsxs)(x.D, {
                      className: a()(tT._5m, l),
                      onClick: t,
                      focusProps: { offset: { top: 4, right: 4, bottom: 12, left: 4 } },
                      children: [
                          (0, i.jsx)("div", { className: tT.$IB, children: eh.intl.string(eh.t["1zUvlw"]) }),
                          n
                              ? (0, i.jsx)(g.y, {
                                    type: g.y.Type.PULSING_ELLIPSIS,
                                    className: tT.u1E,
                                    itemClassName: tT.$N2,
                                })
                              : (0, i.jsx)("div", {
                                    className: a()(tT.hQH, tT.d3o),
                                    children: eh.intl.string(eh.t.TdQXA8),
                                }),
                      ],
                  }),
    });
}
function tz(e) {
    let { content: t, channelId: n } = e,
        [l] = s.useState(() => (0, U.Ld)("NewMessagesBarJumpToNewMessages_")),
        r = s.useCallback(() => {
            let e = ek.Ay.ackMessageId(n);
            null != e
                ? S.A.jumpToMessage({ channelId: n, messageId: e, offset: 1, context: "Mark As Read" })
                : S.A.jumpToMessage({
                      channelId: n,
                      messageId: eD.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [n]),
        o = s.useCallback(() => {
            (0, v.ack)(n, {
                section: eq.JJy.NEW_MESSAGES_BANNER,
                object: eq.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eq.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [n]),
        { disableInteractions: u } = s.useContext(D.Y);
    return u
        ? null
        : (0, i.jsxs)("div", {
              className: a()(tT.ebV, { [tT.y71]: u }),
              children: [
                  (0, i.jsx)(p.vN, {
                      offset: 4,
                      children: (0, i.jsx)("button", {
                          type: "button",
                          className: tT.$IB,
                          onClick: r,
                          "aria-label": eh.intl.string(eh.t.z0Mkp3),
                          "aria-describedby": l,
                          children: (0, i.jsx)("span", { id: l, className: tT.Lnh, children: t }),
                      }),
                  }),
                  (0, i.jsx)("div", {
                      className: tT._ov,
                      children: (0, i.jsx)(p.vN, {
                          offset: 4,
                          children: (0, i.jsxs)("button", {
                              type: "button",
                              onClick: o,
                              className: tT.hQH,
                              children: [
                                  (0, i.jsx)("span", { className: tT.vE$, children: eh.intl.string(eh.t.e6RscS) }),
                                  (0, i.jsx)(A.M, { size: "md", color: "currentColor", className: tT.t3N }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function tZ(e) {
    let { channel: t, content: n, scrollManager: l } = e,
        { disableInteractions: r } = s.useContext(D.Y),
        [o, h] = s.useState(null),
        p = s.useRef(null),
        [f, g] = s.useState(null),
        N = s.useRef(null),
        _ = (0, d.yK)([ej.A], () => ej.A.summaries(t.id) ?? [], [t]),
        j = (0, w.Ay)(_);
    s.useEffect(() => {
        u().isEqual(j, _) ||
            tv.default.track(eq.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
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
            [ty.default],
            () => _?.map((e) => e.people?.map((e) => ty.default.getUser(e) ?? null).filter(eH.Vq)) ?? [],
            [_],
            tY,
        ),
        T = (0, d.bG)([ej.A], () => ej.A.visibleSummaryIndex()) ?? -1,
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
                        (0, e_.C6)(null);
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
            (tv.default.track(eq.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tj.eh.PILL_DROPDOWN,
                    i = _[e];
                null != i &&
                    ((0, e_.sK)(t.id, i.id),
                    (0, e_.C6)(t.id, i.id),
                    l.removeAutomaticAnchorCallback(M),
                    l.addScrollCompleteCallback(function e() {
                        (l.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                l.addAutomaticAnchorCallback(M, !1);
                            }, 100));
                    }),
                    tv.default.track(eq.HAw.SUMMARIES_TOPIC_CLICKED, {
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
        H = s.useCallback((e) => {
            U(e);
            let t = N.current?.scrollTop;
            null != t && g(t);
        }, []);
    s.useEffect(() => {
        null != f && P && N.current?.scrollTo({ top: f });
    }, [f, P]);
    let B = s.useCallback(
        (e) => {
            ((0, c.vq)(e.target) && p.current?.contains(e.target)) ||
                (P &&
                    tv.default.track(eq.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                H(!1));
        },
        [P, _, t, H],
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
            (0, e_.$T)(t.id);
        }, [t.id]),
        s.useEffect(
            () => (
                document.addEventListener("mousedown", B),
                () => {
                    document.removeEventListener("mousedown", B);
                }
            ),
            [B],
        ));
    let W = s.useMemo(
            () => (0, i.jsx)(eQ, { channel: t, summaries: _, summariesMembers: b, selectTopic: F, setOpen: H }),
            [_, b, F, H, t],
        ),
        K = s.useCallback(() => {
            let e = ek.Ay.ackMessageId(t.id);
            null != e
                ? S.A.jumpToMessage({ channelId: t.id, messageId: e, offset: 1, context: "Mark As Read" })
                : S.A.jumpToMessage({
                      channelId: t.id,
                      messageId: eD.default.castChannelIdAsMessageId(t.id),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [t.id]),
        z = s.useCallback(() => {
            (0, v.ack)(t.id, {
                section: eq.JJy.NEW_TOPICS_BAR,
                object: eq.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eq.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [t.id]),
        Z = eh.intl.string(eh.t["38qwgO"]);
    return (
        _.length > 0 && (Z = "" === R || null == R ? eh.intl.string(eh.t.DwnFuG) : R),
        r
            ? null
            : (0, i.jsxs)("div", {
                  ref: p,
                  className: a()(tT.dw5, tT.jht),
                  children: [
                      (0, i.jsx)("div", {
                          className: tT.qmJ,
                          children: (0, i.jsx)(x.D, {
                              className: tT.TQl,
                              "aria-label": eh.intl.string(eh.t.RT3MPz),
                              onClick: G,
                              children: (0, i.jsxs)("div", {
                                  className: a()({ [tT.hNz]: !P, [tT.Apq]: P }),
                                  children: [
                                      (0, i.jsx)(C.K, { size: "xs", color: "currentColor", className: tT.VdQ }),
                                      (0, i.jsx)(m.E, {
                                          variant: "text-sm/medium",
                                          className: a()(tT.$Uj, tT.lc3),
                                          children: Z,
                                      }),
                                      (0, i.jsx)(tS.A, {
                                          width: 16,
                                          height: 16,
                                          direction: tS.A.Directions.DOWN,
                                          className: tT.HBW,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, i.jsx)(x.D, { onClick: K, className: tT.ijE, children: n }),
                      (0, i.jsxs)(x.D, {
                          onClick: z,
                          className: a()(tT.hQH, tT.NXP),
                          children: [
                              (0, i.jsx)("div", { className: tT.$Uj, children: eh.intl.string(eh.t.e6RscS) }),
                              (0, i.jsx)(A.M, { size: "md", color: "currentColor", className: tT.t3N }),
                          ],
                      }),
                      P &&
                          (0, i.jsxs)("div", {
                              className: tT.A1T,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: tT.kee,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: tT.Ney,
                                              children: [
                                                  (0, i.jsx)(C.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: tT.vlb,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, i.jsx)(E.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: eh.intl.string(eh.t.q21fUr),
                                                  }),
                                                  (0, i.jsx)(V.A, { className: tT.Zxm }),
                                              ],
                                          }),
                                          (0, i.jsx)(x.D, {
                                              "aria-label": eh.intl.string(eh.t.cpT0Cq),
                                              onClick: G,
                                              className: tT.oX1,
                                              children: (0, i.jsx)(I.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(y.Ip, { ref: N, className: tT.Pei, fade: !0, children: W }),
                              ],
                          }),
                  ],
              })
    );
}
function tY(e, t) {
    return (
        null != t &&
        e.length === t.length &&
        !e.some((e, n) => {
            var l;
            return null == (l = t[n]) || e.length !== l.length || !!e.some((e, t) => l[t] !== e);
        })
    );
}
function tq(e) {
    let { channel: t, scrollManager: n } = e,
        { disableInteractions: l } = s.useContext(D.Y),
        [r, o] = s.useState(null),
        h = s.useRef(null),
        [p, f] = s.useState(null),
        g = s.useRef(null),
        A = (0, d.yK)([ej.A], () => ej.A.summaries(t.id) ?? [], [t]),
        v = (0, w.Ay)(A);
    s.useEffect(() => {
        u().isEqual(v, A) ||
            tv.default.track(eq.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
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
            [ty.default],
            () => A?.map((e) => e.people?.map((e) => ty.default.getUser(e) ?? null).filter(eH.Vq)) ?? [],
            [A],
            tY,
        ),
        _ = (0, d.bG)([ej.A], () => ej.A.visibleSummaryIndex()) ?? -1,
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
                        (0, e_.C6)(null);
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
            (tv.default.track(eq.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tj.eh.PILL_DROPDOWN,
                    i = A[e];
                null != i &&
                    ((0, e_.sK)(t.id, i.id),
                    (0, e_.C6)(t.id, i.id),
                    n.removeAutomaticAnchorCallback(L),
                    n.addScrollCompleteCallback(function e() {
                        (n.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                n.addAutomaticAnchorCallback(L, !1);
                            }, 100));
                    }),
                    tv.default.track(eq.HAw.SUMMARIES_TOPIC_CLICKED, {
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
            G(_ - 1, tj.eh.PILL_NEXT_ARROW);
        }, [G, _]),
        H = s.useCallback(() => {
            G(_ + 1, tj.eh.PILL_PREVIOUS_ARROW);
        }, [_, G]),
        B = s.useCallback((e) => {
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
                    tv.default.track(eq.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                B(!1));
        },
        [M, A, t, B],
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
            (0, e_.$T)(t.id);
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
        () => (0, i.jsx)(eQ, { channel: t, summaries: A, summariesMembers: N, selectTopic: G, setOpen: B }),
        [A, N, G, B, t],
    );
    if (!(0, d.bG)([ej.A], () => ej.A.shouldShowTopicsBar())) return null;
    let z = eh.intl.string(eh.t["38qwgO"]);
    return (
        A.length > 0 && (z = "" === j || null == j ? eh.intl.string(eh.t.DwnFuG) : j),
        l
            ? null
            : (0, i.jsxs)("div", {
                  ref: h,
                  className: a()(tT.$T$, tT.jht),
                  children: [
                      (0, i.jsxs)("div", {
                          className: tT.sEF,
                          children: [
                              (0, i.jsx)(x.D, {
                                  className: tT.LPV,
                                  "aria-label": eh.intl.string(eh.t.RT3MPz),
                                  onClick: U,
                                  children: (0, i.jsxs)("div", {
                                      className: a()({ [tT.Nv2]: !M, [tT.Ann]: M }),
                                      children: [
                                          (0, i.jsx)(C.K, { size: "xs", color: "currentColor", className: tT.Npc }),
                                          (0, i.jsx)(m.E, {
                                              className: tT.r1V,
                                              variant: "text-sm/medium",
                                              children: z,
                                          }),
                                          (0, i.jsx)(tS.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tS.A.Directions.DOWN,
                                              className: tT._lP,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: tT.Ykg,
                                  children: [
                                      (0, i.jsx)(x.D, {
                                          "aria-label": eh.intl.string(eh.t["4huCnC"]),
                                          onClick: H,
                                          className: a()(tT.ZMY, tT.vzA, { [tT.jfO]: null == T }),
                                          children: (0, i.jsx)(tS.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tS.A.Directions.UP,
                                          }),
                                      }),
                                      (0, i.jsx)(x.D, {
                                          "aria-label": eh.intl.string(eh.t["58KOoF"]),
                                          onClick: F,
                                          className: a()(tT.ZMY, tT.mtW, { [tT.jfO]: null == b }),
                                          children: (0, i.jsx)(tS.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tS.A.Directions.DOWN,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      M &&
                          (0, i.jsxs)("div", {
                              className: tT.A1T,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: tT.kee,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: tT.Ney,
                                              children: [
                                                  (0, i.jsx)(C.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: tT.vlb,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, i.jsx)(E.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: eh.intl.string(eh.t.q21fUr),
                                                  }),
                                                  (0, i.jsx)(V.A, { className: tT.Zxm }),
                                              ],
                                          }),
                                          (0, i.jsx)(x.D, {
                                              "aria-label": eh.intl.string(eh.t.cpT0Cq),
                                              onClick: U,
                                              className: tT.oX1,
                                              children: (0, i.jsx)(I.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(y.Ip, { ref: g, className: tT.Pei, fade: !0, children: K }),
                              ],
                          }),
                  ],
              })
    );
}
function tJ(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, i.jsxs)("div", {
        className: tT.YLv,
        children: [
            (0, i.jsx)(m.E, {
                color: "none",
                variant: "text-sm/semibold",
                lineClamp: 1,
                className: tT.LdH,
                children: e,
            }),
            t &&
                (0, i.jsx)(m.E, {
                    className: tT.$oi,
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: eh.intl.string(eh.t["515vjG"]),
                }),
        ],
    });
}
function t$(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)("div", { className: a()(tT.jCT, n), children: t });
}
function tX(e) {
    let { className: t } = e;
    return (0, i.jsx)(t$, {
        className: t,
        children: (0, i.jsx)("div", { className: tT.wHG, children: (0, i.jsx)("div", { className: tT.j3g }) }),
    });
}
