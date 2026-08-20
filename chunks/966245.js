"use strict";
n.d(t, {
    ks: () => tG,
    UK: () => tK,
    Ez: () => tF,
    _z: () => tR,
    LL: () => tk,
    Uq: () => tZ,
    yR: () => tz,
    OZ: () => tB,
    $o: () => tM,
    bU: () => tP,
    Uk: () => t_,
    GN: () => tH,
    Y0: () => tY,
    P$: () => tw,
    _d: () => tD,
    gL: () => tL,
    Dk: () => tU,
    Ab: () => tV,
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
    h = n(834730),
    m = n(922016),
    f = n(259678),
    p = n(821609),
    g = n(289873),
    x = n(939249),
    A = n(582394),
    C = n(306788),
    E = n(297264),
    I = n(789645),
    y = n(364522),
    v = n(148494),
    S = n(334738),
    N = n(192308),
    _ = n(267102),
    T = n(619517),
    j = n(256905),
    b = n(536763),
    R = n(218394);
class O extends s.PureComponent {
    static defaultProps = { shouldLink: !0, autoPlay: !1, animated: !1 };
    onMouseEnter = (e) => {
        let { src: t, width: n, height: l, onMouseEnter: i, handlePreloadImage: s } = this.props;
        (i?.(e), null != s) ? s() : (0, b.A)({ src: t, width: n, height: l, options: this.props });
    };
    modalContext = (0, N.modalContextFromAppContext)(this.props.appContext);
    onCloseImage = () => {
        (0, N.closeModal)(j.K, this.modalContext);
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
            children: h,
            shouldHideMediaOptions: m = !1,
            sourceMetadata: f,
            analyticsSource: p,
            contentType: g,
            originalContentType: x,
        } = this.props;
        (0, c.vq)(e.currentTarget) && e.currentTarget.blur(),
            (0, j.R)({
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
                        children: h,
                        trigger: l,
                        sourceMetadata: f,
                        original: r ?? s,
                    },
                ],
                shouldHideMediaOptions: m,
                location: p ?? "LazyImageZoomable",
                contextKey: this.modalContext,
            });
    };
    render() {
        let { appContext: e, isWindowFocused: t, ...n } = this.props;
        return (0, i.jsx)(T.Ay, { ...n, onZoom: this.onZoom, onMouseEnter: this.onMouseEnter, shouldAnimate: t });
    }
}
function M(e) {
    let t = (0, _.Us)(),
        n = (0, R.j)();
    return (0, i.jsx)(O, { ...e, isWindowFocused: n, appContext: t });
}
var L = n(9578),
    w = n(56562),
    k = n(475743),
    P = n(564771),
    D = n(692051),
    U = n(915089),
    G = n(611371),
    V = n(453771),
    F = n(994064);
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
            onMute: h,
            mimeType: m,
            onPlay: f,
        } = this.props;
        return (0, i.jsx)(F.Ay, {
            src: e,
            fileName: n,
            fileSize: (0, V.Hb)(t),
            fileSizeBytes: t,
            type: F.Ay.Types.AUDIO,
            className: l,
            playable: s,
            volume: r,
            onMute: h,
            autoMute: d,
            onVolumeChange: o,
            onVolumeShow: u,
            onVolumeHide: c,
            renderLinkComponent: a,
            mimeType: m,
            onPlay: f,
        });
    }
}
var B = n(248643),
    W = n(156828),
    K = n(866665),
    z = n(408278),
    Z = n(900797),
    Y = n(847374),
    q = n(305866),
    J = n(732771),
    $ = n(387758),
    X = n(980707),
    Q = n(477782),
    ee = n(32880),
    et = n(365199),
    en = n(349288),
    el = n(26430),
    ei = n(224640),
    es = n(417964),
    er = n(639169),
    ea = n(157941),
    eo = n(768947),
    eu = n(255438),
    ec = n(375708),
    ed = n(810917),
    eh = n(969490);
function em(e) {
    let { text: t, language: l, wordWrap: s } = e;
    function r() {
        return (0, i.jsx)("code", { className: a()(eh.kw, ed.Xb, "hljs", { [ed.Zw]: s }), children: t });
    }
    return (0, i.jsx)("pre", {
        children: (0, i.jsx)(ea.l, {
            location: "PlaintextFilePreview",
            code: t,
            lang: l,
            className: a()(eh.kw, ed.Xb, "hljs", { [ed.Zw]: s }),
            children: (0, i.jsx)(W.c2, {
                createPromise: () => Promise.all([n.e("818449"), n.e("175134")]).then(n.bind(n, 981776)),
                webpackId: 981776,
                render: (e) => {
                    if (!e.hasLanguage(l)) return r();
                    let n = e.highlight(l, t, !0);
                    return null == n
                        ? r()
                        : (0, i.jsx)("code", {
                              className: a()(eh.kw, ed.Xb, "hljs", n.language, { [ed.Zw]: s }),
                              dangerouslySetInnerHTML: { __html: n.value },
                          });
                },
                renderFallback: () => r(),
            }),
        }),
    });
}
function ef(e) {
    let { expanded: t, setExpanded: n, numLines: l, isWholeFile: s } = e,
        r = ec.intl.formatToPlainString(s ? ec.t.Go5Vvs : ec.t.yJcYan, { lines: l }),
        a = `${t ? ec.intl.string(ec.t.iTcuma) : ec.intl.string(ec.t.dcl9MQ)} (${r})`;
    return (0, i.jsx)("div", {
        className: ed.py,
        children: (0, i.jsx)(K.m, {
            text: a,
            children: (0, i.jsx)(z.K, {
                icon: t ? Z.t : Y.a,
                size: "md",
                variant: "secondary",
                onClick: () => n?.(!t),
                "aria-label": a,
            }),
        }),
    });
}
function ep(e) {
    let { fileName: t, fileSize: n } = e,
        l = `${t} (${(0, eu.up)(n)})`;
    return (0, i.jsxs)("div", {
        className: ed.VI,
        children: [
            (0, i.jsx)("div", {
                className: ed.VW,
                children: (0, i.jsx)(K.m, {
                    text: l,
                    children: (0, i.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: ed.Md,
                        children: t,
                    }),
                }),
            }),
            (0, i.jsx)(h.E, { variant: "text-xs/normal", color: "text-subtle", children: (0, eu.up)(n) }),
        ],
    });
}
function eg(e) {
    let { language: t, setLanguage: n, align: l } = e,
        r = s.useRef(null),
        a = ea.L.useConfig({ location: "LanguageSelect" }).enabled ? eo.No : er.Q;
    return (0, i.jsx)(m.Y, {
        targetElementRef: r,
        position: "left",
        align: l,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(q.l, {
                "aria-label": ec.intl.string(ec.t.utm4qs),
                children: (0, i.jsx)("div", {
                    className: ed.md,
                    children: (0, i.jsxs)(J.iS, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            n(e), l();
                        },
                        options: Array.from(a).map((e) => ({ value: e, label: e, id: e })),
                        value: t,
                        children: [
                            (0, i.jsx)(J.a3, { placeholder: ec.intl.string(ec.t.GofftW) }),
                            (0, i.jsx)(J.X2, {}),
                        ],
                    }),
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(K.m, {
                ariaHidden: !0,
                text: ec.intl.string(ec.t.utm4qs),
                children: (0, i.jsx)(x.D, {
                    ...e,
                    className: ed.Qw,
                    "aria-label": ec.intl.string(ec.t.utm4qs),
                    children: (0, i.jsx)($.G, { size: "sm", color: "currentColor", ref: r }),
                }),
            }),
    });
}
function ex(e) {
    let { wordWrap: t, setWordWrap: n, url: l, fileName: r } = e,
        a = s.useRef(null),
        o = s.useRef(null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.Y, {
                targetElementRef: a,
                position: "top",
                align: "left",
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, i.jsx)(X.W, {
                        "data-menu-migrated": !0,
                        navId: "plaintext-preview-overflow-menu",
                        onClose: l,
                        onSelect: () => {},
                        "aria-label": ec.intl.string(ec.t.PdRCRg),
                        children: (0, i.jsxs)(Q.rX, {
                            children: [
                                (0, i.jsx)(Q.Dr, {
                                    id: "download",
                                    label: ec.intl.string(ec.t["1WjMbC"]),
                                    icon: ee.DownloadIcon,
                                    action: () => {
                                        o.current?.click(), l();
                                    },
                                }),
                                (0, i.jsx)(Q.sL, {
                                    id: "word-wrap",
                                    label: ec.intl.string(ec.t.AMKNT1),
                                    checked: t,
                                    action: () => n(!t),
                                }),
                            ],
                        }),
                    });
                },
                children: (e) =>
                    (0, i.jsx)(K.m, {
                        ariaHidden: !0,
                        text: ec.intl.string(ec.t["UKOtz+"]),
                        children: (0, i.jsx)(x.D, {
                            ...e,
                            className: ed.IQ,
                            "aria-label": ec.intl.string(ec.t["UKOtz+"]),
                            children: (0, i.jsx)(et.MoreHorizontalIcon, { ref: a, size: "sm", color: "currentColor" }),
                        }),
                    }),
            }),
            (0, i.jsx)(en.Anchor, {
                ref: o,
                href: l,
                download: r,
                className: ed.op,
                children: (0, i.jsx)(ee.DownloadIcon, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function eA(e) {
    return (0, i.jsx)(K.m, {
        asContainer: !0,
        ariaHidden: !0,
        text: ec.intl.string(ec.t["0PQYk3"]),
        children: (0, i.jsx)(x.D, {
            className: ed.R1,
            "aria-label": ec.intl.string(ec.t["0PQYk3"]),
            onClick: () => {
                (0, N.openModal)((t) => (0, i.jsx)(eE, { ...e, ...t }));
            },
            children: (0, i.jsx)(el._, { size: "sm", color: "currentColor" }),
        }),
    });
}
function eC(e) {
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
            setWordWrap: h,
            bytesLeft: m,
            className: f,
        } = e,
        p = s?.split("\n"),
        x = p?.length ?? 0,
        A = r ? 100 : 6,
        C = 0 === m,
        E = "";
    C && r && x > A ? (E = "\n...") : C || (E = "..."),
        "" !== E &&
            (C
                ? (E += " " + ec.intl.formatToPlainString(ec.t.DQnFp2, { lines: x - A }))
                : (E += " " + ec.intl.formatToPlainString(ec.t["1+gGcK"], { formattedBytes: (0, eu.up)(m) })));
    let I = p?.slice(0, A).join("\n") + E,
        v = (0, es.sJ)(I),
        S = r || A < x;
    return (0, i.jsxs)("div", {
        className: a()(f, ed.kL),
        children: [
            (0, i.jsx)(y.Ip, {
                className: ed.FS,
                children:
                    null == s
                        ? (0, i.jsx)(g.y, { className: ed.u1 })
                        : (0, i.jsx)(em, { text: v, language: u, wordWrap: d }),
            }),
            (0, i.jsxs)("div", {
                className: ed.qr,
                role: "group",
                "aria-label": ec.intl.string(ec.t.TlXA8e),
                children: [
                    S ? (0, i.jsx)(ef, { expanded: r, setExpanded: o, numLines: x, isWholeFile: C }) : null,
                    (0, i.jsx)(ep, { fileName: n, fileSize: l }),
                    (0, i.jsx)("div", { className: ed.Kb }),
                    (0, i.jsx)(eg, { language: u, setLanguage: c, align: "top" }),
                    null != s
                        ? (0, i.jsx)(eA, {
                              url: t,
                              fileName: n,
                              fileSize: l,
                              language: u,
                              wordWrap: d,
                              fileContents: s,
                              bytesLeft: m,
                          })
                        : null,
                    (0, i.jsx)(ex, { wordWrap: d, setWordWrap: h, url: t, fileName: n }),
                ],
            }),
        ],
    });
}
function eE(e) {
    let {
            url: t,
            fileName: n,
            fileSize: l,
            transitionState: r,
            language: a,
            wordWrap: o,
            fileContents: u,
            bytesLeft: d,
            onClose: m,
        } = e,
        [f, p] = s.useState(a),
        [x, A] = s.useState(o),
        C = s.useRef(null),
        E = u ?? "";
    return (
        0 !== d && (E += `... ${ec.intl.formatToPlainString(ec.t["1+gGcK"], { formattedBytes: (0, eu.up)(d) })}`),
        s.useEffect(() => {
            function e(e) {
                if ((e.metaKey || e.ctrlKey) && "a" === e.key && null != C.current) {
                    let t = document.activeElement;
                    if ((0, c.vq)(t, HTMLInputElement) || (0, c.vq)(t, HTMLTextAreaElement)) return;
                    e.preventDefault();
                    let n = window.getSelection();
                    if (null != n) {
                        let e = document.createRange();
                        e.selectNodeContents(C.current), n.removeAllRanges(), n.addRange(e);
                    }
                }
            }
            return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);
        }, []),
        (0, i.jsx)(ei.d, {
            transitionState: r,
            "aria-label": ec.intl.string(ec.t["qxQjc+"]),
            size: "xxl",
            onClose: m,
            children: (0, i.jsxs)("div", {
                className: ed.jE,
                children: [
                    (0, i.jsx)(y.Ip, {
                        className: ed.ot,
                        children:
                            null == u
                                ? (0, i.jsx)(g.y, { className: ed.u1 })
                                : (0, i.jsx)("div", {
                                      ref: C,
                                      children: (0, i.jsx)(em, { text: E, language: f, wordWrap: x }),
                                  }),
                    }),
                    (0, i.jsx)("div", {
                        role: "group",
                        "aria-label": ec.intl.string(ec.t.TlXA8e),
                        children: (0, i.jsxs)(h.E, {
                            color: "text-default",
                            className: ed.Hx,
                            variant: "text-sm/normal",
                            children: [
                                (0, i.jsx)(ep, { fileName: n, fileSize: l }),
                                (0, i.jsx)("div", { className: ed.Kb }),
                                (0, i.jsx)(eg, { language: f, setLanguage: p, align: "bottom" }),
                                (0, i.jsx)(ex, { wordWrap: x, setWordWrap: A, url: t, fileName: n }),
                            ],
                        }),
                    }),
                ],
            }),
        })
    );
}
let eI = s.memo(
    function (e) {
        let { url: t, fileName: n, fileSize: l, contentType: r, className: o, onClick: u, onContextMenu: c } = e,
            [d, h] = s.useState(!1),
            [m, f] = s.useState(n.split(".").slice(-1)[0]),
            [p, g] = s.useState(!1),
            {
                fileContents: x,
                bytesLeft: A,
                hadError: C,
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
                                    u = parseInt(s.split("/")[1]) - parseInt(a);
                                r(0 === u ? i : i.slice(0, -1)), o(u), l(!1);
                            } catch (e) {
                                o(0), l(!0);
                            }
                        })();
                    }, [e, t]),
                    { fileContents: i, bytesLeft: a, hadError: n }
                );
            })(t, r);
        return C
            ? (0, i.jsx)(P.A, { url: t, fileName: n, fileSize: l, onClick: u, onContextMenu: c, className: o })
            : (0, i.jsx)(eC, {
                  url: t,
                  fileName: n,
                  fileSize: l,
                  fileContents: x,
                  bytesLeft: A,
                  expanded: d,
                  setExpanded: h,
                  language: m,
                  setLanguage: f,
                  wordWrap: p,
                  setWordWrap: g,
                  className: a()(ed.mr, o),
              });
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
var ey = n(863922),
    ev = n(822074),
    eS = n(534890),
    eN = n(442433),
    e_ = n(640708),
    eT = n(941971),
    ej = n(707539),
    eb = n(576705),
    eR = n(573163),
    eO = n(340833),
    eM = n(913642),
    eL = n(935208),
    ew = n(453302);
n(321073);
var ek = n(97808),
    eP = n(778712),
    eD = n(707606),
    eU = n(403362),
    eG = n(439511);
let eV = (0, eD.A)(function (e) {
        let { member: t, empty: n, guildId: l } = e;
        return n || null == t
            ? (0, i.jsx)("div", { className: eG.pO })
            : (0, i.jsx)("div", {
                  className: eG.pO,
                  children: (0, i.jsx)(ek.eu, {
                      src: t.getAvatarURL(l, 16),
                      "aria-label": t.username,
                      size: eP._3.SIZE_16,
                      className: eG.pO,
                  }),
              });
    }),
    eF = function (e) {
        let { partySize: t, members: n, minAvatarsShown: l = 1, maxAvatarsShown: s = 2, guildId: r } = e,
            { totalSize: a, knownSize: o } = t;
        if (a < l) return null;
        let c = u()(n)
                .filter(eU.Vq)
                .take(s)
                .map((e) => (0, i.jsx)(eV, { member: e, guildId: r }, e.id))
                .value(),
            d = a - o;
        for (let e = 0; e < d && c.length < s; e++)
            c.push((0, i.jsx)(eV, { empty: !0, guildId: r }, `empty-member-${e}`));
        let h = Math.max(Math.min(a - c.length, 99), 0);
        if (1 === h) {
            let e = n[s];
            c.push((0, i.jsx)(eV, { member: e, guildId: r }, e.id));
        }
        return (0, i.jsx)("div", {
            className: eG.iE,
            children: (0, i.jsxs)("div", {
                className: eG.S3,
                children: [c, h > 1 ? (0, i.jsxs)("div", { className: eG.Hi, children: ["+", h] }) : null],
            }),
        });
    };
var eH = n(303727),
    eB = n(681939);
function eW() {
    return (0, i.jsxs)("div", {
        className: eB.kL,
        children: [
            (0, i.jsxs)("div", {
                className: eB.zc,
                children: [
                    (0, i.jsx)("div", {
                        className: eB.Kk,
                        children: (0, i.jsx)(C.K, {
                            size: "custom",
                            color: "currentColor",
                            className: eB.l1,
                            width: 28,
                            height: 28,
                        }),
                    }),
                    (0, i.jsx)(eH.A, { className: eB.uf }),
                ],
            }),
            (0, i.jsx)(E.D, {
                className: eB.wx,
                variant: "heading-xl/semibold",
                children: ec.intl.string(ec.t.yJHJei),
            }),
            (0, i.jsx)(h.E, {
                className: eB.Qq,
                color: "text-default",
                variant: "text-md/normal",
                children: ec.intl.string(ec.t.p2dIh6),
            }),
        ],
    });
}
var eK = n(652215),
    ez = n(670455),
    eZ = n(750557);
function eY(e) {
    let { summary: t, channel: l, members: r, guildId: a, unread: o, onClick: u } = e,
        [c, m] = s.useState(!1),
        f = (0, ej.aK)(eL.default.extractTimestamp(t.startId)),
        p = (0, d.bG)([ev.A], () => ev.A.summaryFeedback(t));
    function g(e, n) {
        e.stopPropagation(), (0, ew.A)({ summary: t, channel: l, rating: n });
    }
    let A = eb.A.can(eK.xBc.MANAGE_MESSAGES, l);
    return (0, i.jsxs)(x.D, {
        className: eZ.kL,
        onClick: u,
        onContextMenu: function (e) {
            A &&
                (0, eN.L3)(e, async () => {
                    let { default: e } = await n.e("443921").then(n.bind(n, 304232));
                    return (n) => (0, i.jsx)(e, { ...n, summary: t });
                });
        },
        onMouseEnter: () => m(!0),
        onMouseLeave: () => m(!1),
        children: [
            (0, i.jsx)(eT.A, { hovered: c, unread: o, className: eZ.dM }),
            (0, i.jsx)("div", {
                className: eZ.uV,
                children: (0, i.jsxs)("div", {
                    className: eZ.Hw,
                    children: [
                        (0, i.jsx)(h.E, {
                            className: eZ.vE,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: f,
                        }),
                        (0, i.jsx)(e_.A, { height: 4, width: 4, "aria-hidden": "true", className: eZ.Om }),
                        (0, i.jsx)(eS.ChatIcon, { size: "xxs", color: "currentColor", className: eZ.Kk }),
                        (0, i.jsx)(h.E, {
                            className: eZ.U9,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: t.count,
                        }),
                        r.length > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(e_.A, { height: 4, width: 4, "aria-hidden": "true", className: eZ.Om }),
                                    (0, i.jsx)(eF, {
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
                null == p &&
                (0, i.jsxs)("div", {
                    className: eZ.p_,
                    children: [
                        (0, i.jsx)(x.D, {
                            onClick: (e) => g(e, ez.P0.GOOD),
                            children: (0, i.jsx)(eM.A, { className: eZ.O1, width: 12, height: 12 }),
                        }),
                        (0, i.jsx)(x.D, {
                            onClick: (e) => g(e, ez.P0.BAD),
                            children: (0, i.jsx)(eO.A, { className: eZ.O1, width: 12, height: 12 }),
                        }),
                    ],
                }),
            (0, i.jsx)(h.E, { color: "text-strong", variant: "text-sm/semibold", className: eZ.DD, children: t.topic }),
            (0, i.jsx)(h.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: eZ.VA,
                children: t.summShort,
            }),
        ],
    });
}
function eq(e) {
    let { summaries: t, summariesMembers: n, channel: l, selectTopic: r, setOpen: a } = e,
        o = (0, d.bG)([eR.Ay], () => eR.Ay.getOldestUnreadMessageId(l.id)),
        u = s.useCallback(
            (e) => {
                r(e), a(!1);
            },
            [r, a],
        );
    return t.length < 1
        ? (0, i.jsx)(eW, {})
        : (0, i.jsx)(i.Fragment, {
              children: t.map((e, t) => {
                  let s = n[t] ?? [];
                  return (0, i.jsx)(
                      eY,
                      {
                          summary: e,
                          channel: l,
                          members: s,
                          guildId: l.guild_id,
                          unread: null != o && eL.default.compare(e.endId, o) > 0,
                          onClick: () => u(t),
                      },
                      t,
                  );
              }),
          });
}
var eJ = n(885386),
    e$ = n(113494),
    eX = n(782134),
    eQ = n(775602),
    e0 = n(228366),
    e1 = n(713021);
let e2 = s.forwardRef(function (e, t) {
    let n,
        l,
        { muted: r, volume: a, playing: o, playbackRate: u, ...c } = e,
        [d, h] =
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
        (0, i.jsx)("audio", { ref: h, ...c })
    );
});
var e3 = n(20504),
    e5 = n(625494),
    e8 = n(927813),
    e7 = n(824744);
n(508300);
var e6 = n(661531),
    e4 = n(602853),
    e9 = n(765671);
function te(e, t) {
    let n = e.getBoundingClientRect();
    return Math.min(1, Math.max(0, (t.clientX - n.left) / n.width));
}
var tt = n(998304),
    tn = n(284009),
    tl = n.n(tn),
    ti = n(722872);
class ts {
    value;
    animationDetails;
    isReset;
    constructor(e) {
        (this.value = e), (this.animationDetails = null), (this.isReset = !1);
    }
    getCurrentValue() {
        if (null == this.animationDetails) return this.value;
        let e = performance.now() - this.animationDetails.animationStart,
            t = this.value < this.animationDetails.lastValue ? 150 : 500;
        return e > t
            ? ((this.animationDetails = null), this.value)
            : this.value < this.animationDetails.lastValue
              ? ti.easeOutQuint(e, this.animationDetails.lastValue, this.value, t)
              : ti.easeOutBack(e, this.animationDetails.lastValue, this.value, t, 4);
    }
    animateTo(e) {
        (this.isReset = !1),
            this.value !== e &&
                ((this.animationDetails = { lastValue: this.value, animationStart: performance.now() }),
                (this.value = e));
    }
    isAnimating() {
        return null != this.animationDetails;
    }
    reset() {
        this.animateTo(0), (this.isReset = !0);
    }
}
let tr = [0.75, 1, 1.5, 2];
var ta = n(587159);
let to = [0, 0, 0, 0, 0];
function tu(e) {
    let { showAll: t, currentTime: n, duration: l, numSegments: i } = e;
    return t ? i : Math.max(0, Math.round((n / l) * i));
}
function tc(e) {
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
function td(e, t, n) {
    let [l, i] = s.useState(e),
        [r, a] = s.useState(e),
        o = s.useRef(r);
    return (
        s.useLayoutEffect(() => {
            o.current = r;
        }),
        s.useLayoutEffect(() => {
            i(o.current), a(e);
        }, [e, t, n]),
        [l, r]
    );
}
function th(e, t, n, l) {
    if (null == l) return [t, !1];
    let i = Math.min((n - l) / 200, 1);
    return 1 === i ? [t, !1] : [(0, tt.De)(e, t, i), !0];
}
function tm(e) {
    let t,
        n,
        {
            className: l,
            waveform: r,
            currentTime: o,
            duration: u,
            played: c,
            playing: d,
            onDrag: h,
            onDragStart: m,
            onDragEnd: f,
        } = e,
        { ref: p, width: g } = (0, e9.Ay)(),
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
                                if ((tl()(e.length >= t, "Waveform smaller than samples"), e.length === t)) return e;
                                let n = e.length / t,
                                    l = [],
                                    i = 0;
                                for (; l.length < t; ) {
                                    let t = Math.round((l.length + 1) * n),
                                        s = 0,
                                        r = 0;
                                    for (let n = i; n < t && n < e.length; n++) (s += e[n]), r++;
                                    (l[l.length] = s / r), (i = t);
                                }
                                return l;
                            })(e, t);
                        }
                    })(t ?? [], n) ?? to,
                [t, n],
            )),
        E = s.useRef(c),
        I = s.useRef(d),
        y = s.useRef(null),
        v = window.devicePixelRatio,
        {
            lastBackgroundFillColor: S,
            backgroundFillColor: N,
            lastActiveFillColor: _,
            activeFillColor: T,
            lastInactiveFillColor: j,
            inactiveFillColor: b,
        } = (function (e, t) {
            let n = (0, e4.r)(e6.A.colors.BACKGROUND_MOD_MUTED).hex(),
                l = (0, e4.r)(e6.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
                i = (0, e4.r)(e6.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
                s = (0, e4.r)(e6.A.unsafe_rawColors.BRAND_430).hex(),
                r = (0, e4.r)(e6.A.unsafe_rawColors.WHITE).hex(),
                a = t ? s : n,
                [o, u] = td(a, t, e),
                [c, d] = td(t ? r : e ? i : l, t, e),
                [h, m] = td(e ? a : l, t, e);
            return {
                lastBackgroundFillColor: o,
                backgroundFillColor: u,
                lastActiveFillColor: c,
                activeFillColor: d,
                lastInactiveFillColor: h,
                inactiveFillColor: m,
            };
        })(c, d),
        R = { currentTime: o, duration: u, played: c },
        O = s.useRef(R);
    s.useEffect(() => {
        O.current = R;
    }),
        s.useEffect(() => {
            let { currentTime: e, duration: t, played: n } = O.current,
                l = tu({ showAll: !n, currentTime: e, duration: t, numSegments: C.length });
            A.current = C.map((e, t) => new ts(t < l ? e : 0));
        }, [C]),
        s.useEffect(() => {
            let e = A.current;
            if (null == e) return;
            let t = tu({ showAll: !c, currentTime: o, duration: u, numSegments: C.length });
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
                    let l = p.current,
                        i = l?.getContext("2d"),
                        s = A.current;
                    if (null == l || null == i || null == s) return;
                    let r = !1;
                    (E.current !== c || I.current !== d) && ((E.current = c), (I.current = d), (y.current = n)),
                        null != y.current && n > y.current + 200 && (y.current = null);
                    let a = l.height / v;
                    i.clearRect(0, 0, l.width, l.height), i.beginPath();
                    let [o, u] = th(S, N, n, y.current);
                    (r = r || u), (i.fillStyle = o);
                    for (let e = 0; e < C.length; e++)
                        tc({
                            context: i,
                            devicePixelRatio: v,
                            canvasHeight: a,
                            segmentValue: C[e],
                            segmentIndex: e,
                            constrainMin: !0,
                        });
                    i.fill();
                    let [h, m] = th(j, b, n, y.current);
                    r = r || m;
                    let [f, g] = th(_, T, n, y.current);
                    r = r || g;
                    for (let e = 0; e < s.length; e++) {
                        let t = s[e],
                            n = Math.max(t.getCurrentValue(), C[e] - 0.1);
                        i.beginPath(),
                            (i.fillStyle = t.isReset ? h : f),
                            tc({
                                context: i,
                                devicePixelRatio: v,
                                canvasHeight: a,
                                segmentValue: n,
                                segmentIndex: e,
                                constrainMin: !t.isReset,
                            }),
                            (r = r || t.isAnimating()),
                            i.fill();
                    }
                    r && (e = requestAnimationFrame(t));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [p, v, C, g, o, u, c, d, S, N, _, T, j, b]);
    let [, M] = (function (e) {
        let { ref: t, onDrag: n, onDragStart: l, onDragEnd: i } = e,
            [r, a] = s.useState(!1);
        return (
            s.useEffect(() => {
                if (r)
                    return (
                        window.addEventListener("mouseup", e),
                        window.addEventListener("mousemove", l),
                        () => {
                            window.removeEventListener("mouseup", e), window.removeEventListener("mousemove", l);
                        }
                    );
                function e() {
                    i?.(), a(!1);
                }
                function l(e) {
                    let l = t.current;
                    null != l && n?.(te(l, e));
                }
            }, [t, r, i, n]),
            [
                r,
                s.useCallback(
                    (e) => {
                        e.preventDefault();
                        let i = t.current;
                        null != i && (a(!0), l?.(), n?.(te(i, e)));
                    },
                    [t, l, n],
                ),
            ]
        );
    })({ ref: p, onDrag: h, onDragStart: m, onDragEnd: f });
    return (0, i.jsx)("canvas", {
        onMouseDown: M,
        className: a()(ta.J, l),
        style: { width: x },
        ref: p,
        height: 32 * window.devicePixelRatio,
        width: (g ?? 0) * window.devicePixelRatio,
    });
}
var tf = n(672245);
let tp = s.lazy(() => n.e("594436").then(n.bind(n, 660207)));
function tg(e) {
    let { played: t, duration: n, currentTime: l } = e,
        s = null == n ? "--:--" : t ? (0, F.rB)(Math.ceil(n - l)) : (0, F.rB)(Math.ceil(n));
    return (0, i.jsx)(h.E, { variant: "text-sm/normal", className: tf.p0, tabularNumbers: !0, children: s });
}
let tx = s.memo(function (e) {
    let t,
        {
            src: n,
            volume: l = 1,
            onVolumeChange: r,
            onMute: o,
            waveform: u,
            durationSecs: c,
            onVolumeShow: m,
            onVolumeHide: f,
            onPlay: p,
            onPause: g,
            onError: A,
            playbackCacheKey: C,
        } = e,
        E = s.useRef(null),
        I = s.useMemo(() => (null != C ? e1.Ay.getPlaybackPosition(C) : 0), [C]),
        y = (0, d.bG)([e1.Ay], () => e1.Ay.getPlaybackRate(e1.k0.VOICE_MESSAGE)),
        [v, S] = s.useState(I > 0),
        [N, _] = s.useState(I),
        [T, j] = s.useState(c),
        [b, R] = s.useState(!1),
        [O, M] = s.useState(!1),
        [L, w] = s.useState(!1),
        [k, P] = s.useState(!1),
        [D, U] = s.useState("none"),
        [G, V] = s.useState(() => ("function" == typeof l ? l() : l)),
        F = s.useRef(void 0),
        H = s.useCallback(() => {
            M((e) => !e), P(!0);
        }, []),
        B = s.useCallback(() => {
            U("metadata");
        }, []),
        W = s.useCallback((e) => {
            let t = e.currentTarget.duration;
            isNaN(t) || j(t);
        }, []),
        K = s.useCallback(
            (e) => {
                null != c &&
                    null != C &&
                    e0.h.dispatch({ type: "MEDIA_PLAYBACK_POSITION_UPDATE", cacheKey: C, position: e, duration: c });
            },
            [C, c],
        ),
        z = s.useCallback(() => {
            M(!1),
                null == F.current &&
                    (F.current = setTimeout(() => {
                        S(!1), P(!1), (F.current = void 0);
                    }, 500));
        }, []),
        Z = s.useCallback(() => {
            L || (K(0), z());
        }, [z, L, K]),
        Y = s.useCallback((e) => {
            let t = E.current;
            null != t && (_(e), (t.currentTime = e), S(!0));
        }, []),
        q = s.useCallback(() => {
            let e = E.current;
            if (null == e) return;
            let t = e.error;
            A?.(t);
        }, [A]),
        J = s.useCallback(
            (e) => {
                let t = (0, e7.w)(e, 1);
                R(0 === t), V(t), r?.(t);
            },
            [r],
        ),
        $ = s.useCallback(() => {
            R(!b), o?.(!b);
        }, [b, o]),
        X = s.useCallback(() => {
            w(!0);
        }, []),
        Q = s.useCallback(() => {
            w(!1), N === T && z(), K(N);
        }, [N, T, z, K]),
        ee = s.useCallback(
            (e) => {
                let t = E.current;
                null == T || null == t || (Y(e * T), clearTimeout(F.current), (F.current = void 0));
            },
            [T, Y],
        );
    s.useEffect(() => {
        !v && O && S(!0);
    }, [O, v]);
    let et = s.useRef(null),
        en = { played: k, currentTime: N, onPause: g, onPlay: p },
        el = s.useRef(en);
    s.useEffect(() => {
        el.current = en;
    }),
        s.useEffect(() => {
            I > 0 && Y(I);
        }, [I, Y]),
        s.useEffect(() => {
            let e;
            return (
                O &&
                    !L &&
                    (e = setInterval(() => {
                        K(E.current?.currentTime ?? 0);
                    }, e8.A.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [O, L, K]),
        s.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: l } = el.current;
            if (e || O)
                if (O) (et.current = performance.now()), l?.(!1, t, (E.current?.duration ?? 0) * e8.A.Millis.SECOND);
                else {
                    let e = performance.now(),
                        l = et.current;
                    n?.(t, null != l ? (e - l) / 1e3 : 0), K(t), (et.current = null);
                }
        }, [O, n, T, K]),
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
                    e5._.dispatch(eK.jej.VOICE_MESSAGE_PLAYBACK_STARTED, { src: n }),
                    e5._.subscribe(eK.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e),
                    () => {
                        e5._.unsubscribe(eK.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e);
                    }
                );
            function e(e) {
                let { src: t } = e;
                n !== t && M(!1);
            }
        }, [n, O, M]);
    let ei = O ? e$.PauseIcon : eX.PlayIcon,
        es = O ? ec.intl.string(ec.t["3XohGn"]) : ec.intl.string(ec.t.AlHqHT),
        er = ec.intl.formatToPlainString(ec.t.LgCPMt, { playbackRate: y }),
        ea = `${y.toString().replace(/^0/, "")}X`;
    t =
        "Safari" === platform.name
            ? (0, i.jsx)(s.Suspense, {
                  children: (0, i.jsx)(tp, {
                      ref: E,
                      className: tf.Zn,
                      src: n,
                      preload: D,
                      playing: O && !L,
                      onEnded: Z,
                      onLoadedMetadata: W,
                      onError: q,
                      muted: b,
                      volume: G,
                      playbackRate: y,
                  }),
              })
            : (0, i.jsx)(e2, {
                  ref: E,
                  className: tf.Zn,
                  controls: !1,
                  preload: D,
                  onEnded: Z,
                  onLoadedMetadata: W,
                  onError: q,
                  muted: b,
                  volume: G,
                  playbackRate: y,
                  playing: O && !L,
                  children: (0, i.jsx)("source", { src: n }),
              });
    let eo = (0, d.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion);
    return (0, i.jsxs)("div", {
        className: a()(tf.kL, { [tf.he]: O }),
        onMouseEnter: B,
        role: "region",
        "aria-label": ec.intl.string(ec.t.c8U6xd),
        children: [
            (0, i.jsx)("div", {
                className: tf.Kl,
                children: (0, i.jsx)("div", { className: a()(tf.fq, { [tf.VN]: eo }) }),
            }),
            (0, i.jsx)(x.D, {
                className: tf.k0,
                onClick: H,
                "aria-label": es,
                children: (0, i.jsx)(ei, { className: tf.uZ, color: "currentColor", size: "sm" }),
            }),
            (0, i.jsx)(tm, {
                className: tf.ou,
                waveform: u,
                currentTime: N,
                duration: T ?? 1,
                playing: O,
                played: v,
                onDrag: ee,
                onDragStart: X,
                onDragEnd: Q,
            }),
            (0, i.jsx)(tg, { played: v, currentTime: N, duration: T }),
            (0, i.jsx)(x.D, {
                className: tf.LJ,
                onClick: () => {
                    var e, t;
                    let n;
                    return (
                        (n = (tr.indexOf(y) + 1) % tr.length),
                        void ((e = tr[n]),
                        (t = e1.k0.VOICE_MESSAGE),
                        e0.h.dispatch({ type: "MEDIA_PLAYBACK_RATE_UPDATE", rate: e, playbackType: t }))
                    );
                },
                "aria-label": er,
                children: (0, i.jsx)(h.E, { variant: "text-xs/semibold", className: tf.Sn, children: ea }),
            }),
            (0, i.jsx)(e3.A, {
                className: tf.bk,
                iconClassName: tf._j,
                iconColor: "currentColor",
                sliderWrapperClassName: tf.MQ,
                muted: b,
                value: (0, e7.M)(G, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: J,
                onToggleMute: $,
                onVolumeShow: m,
                onVolumeHide: f,
            }),
            t,
        ],
    });
});
var tA = n(287809),
    tC = n(147925),
    tE = n(174459),
    tI = n(587481),
    ty = n(838541),
    tv = n(521732),
    tS = n(650583),
    tN = n(959760);
let t_ = { delay: 300, position: "top" };
function tT(e) {
    return (t) => {
        e?.(t), (0, tI.ls)(t);
    };
}
function tj(e) {
    return (t) => {
        e?.(t), (0, tI.y5)(t);
    };
}
function tb(e) {
    let { altText: t, altButtonRef: n } = e;
    return (0, i.jsxs)("div", {
        role: "dialog",
        "aria-label": ec.intl.string(ec.t.fSiQ3A),
        className: tN.obt,
        tabIndex: -1,
        onKeyDown: (e) => {
            e.key === tS.N$.Escape && setTimeout(() => n.current?.focus(), 0);
        },
        children: [
            (0, i.jsx)(h.E, {
                variant: "text-xs/bold",
                color: "none",
                tag: "span",
                className: tN.k_Z,
                children: ec.intl.string(ec.t.fSiQ3A),
            }),
            (0, i.jsx)(h.E, { variant: "text-md/normal", color: "none", tag: "span", className: tN.a7V, children: t }),
        ],
    });
}
function tR(e) {
    let {
            alt: t,
            controlsVisible: n = !0,
            disableAltTextDisplay: l = !1,
            hiddenSpoilers: r = !1,
            reducedSizeAltTextButton: o = !1,
        } = e,
        [u, c] = s.useState(!1),
        d = s.useRef(null);
    return (n || u) && !l && eJ._z.getSetting() && null != t && "" !== t && !0 !== r
        ? (0, i.jsx)("div", {
              className: tN.NOQ,
              children: (0, i.jsx)(m.Y, {
                  targetElementRef: d,
                  animation: m.Y.Animation.FADE,
                  renderPopout: () => (0, i.jsx)(tb, { altText: t, altButtonRef: d }),
                  children: (e) =>
                      (0, i.jsx)(f.vN, {
                          offset: 4,
                          children: (0, i.jsx)("button", {
                              ...e,
                              type: "button",
                              ref: d,
                              "aria-label": ec.intl.string(ec.t.fSiQ3A),
                              onMouseEnter: () => c(!0),
                              onMouseLeave: () => c(!1),
                              className: a()(tN.DV5, { [tN.yZ5]: !0, [tN.I54]: o }),
                              children: ec.intl.string(ec.t.jCV1Tz),
                          }),
                      }),
              }),
          })
        : null;
}
function tO(e) {
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
            mosaicStyleAlt: m,
            mediaLayoutType: f,
            reducedSizeAltTextButton: p,
            ...g
        } = e,
        x = tT(t),
        A = tj(n);
    (l = null == l ? tI.v1 : l), (r = null == r ? tI.uj : r);
    let [C, E] = s.useState(!0),
        I = f === ty.dG.MOSAIC || !0 === m,
        y = C && !c && eJ._z.getSetting() && null != a && "" !== a && !0 !== d;
    return (0, i.jsxs)(s.Fragment, {
        children: [
            (0, i.jsx)(B.A, {
                ...g,
                alt: a,
                autoMute: r,
                mediaLayoutType: f,
                onControlsHide: () => E(!1),
                onControlsShow: () => E(!0),
                onMute: A,
                onVolumeChange: x,
                renderLinkComponent: tP,
                renderOverlayContent: u,
                volume: l,
            }),
            null != o && o(),
            I &&
                (0, i.jsx)(tR, {
                    alt: a,
                    controlsVisible: C,
                    disableAltTextDisplay: c,
                    hiddenSpoilers: d,
                    reducedSizeAltTextButton: p,
                }),
            !I &&
                y &&
                (0, i.jsx)(h.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: tN.R5R,
                    children: a,
                }),
        ],
    });
}
function tM(e) {
    return (0, i.jsx)(tO, { ...e });
}
function tL(e) {
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
        d = tj(l);
    return (
        (n = null == n ? tI.v1 : n),
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
                    renderLinkComponent: tP,
                }),
                null != o && o(),
            ],
        })
    );
}
function tw(e) {
    let { onVolumeChange: t, volume: n, onMute: l, ...s } = e,
        r = tT(t),
        a = tj(l);
    return (n = null == n ? tI.v1 : n), (0, i.jsx)(tx, { ...s, onVolumeChange: r, onMute: a, volume: n });
}
function tk(e) {
    let {
            alt: t,
            hiddenSpoilers: n,
            renderAdjacentContent: l,
            containerClassName: r,
            imageContainerClassName: o,
            disableAltTextDisplay: u = !1,
            reducedSizeAltTextButton: c = !1,
            mediaLayoutType: d,
            imageContainerStyle: p,
            mosaicStyleAlt: g,
        } = e,
        x = d === ty.dG.MOSAIC || !0 === g,
        A = !u && eJ._z.getSetting() && null != t && "" !== t && !0 !== n,
        C = s.createRef();
    return (0, i.jsxs)("div", {
        className: a()(tN.foG, r),
        children: [
            (0, i.jsxs)("div", {
                className: a()(tN.ZSk, o),
                style: p,
                children: [(0, i.jsx)(M, { ...e }), null != l && l()],
            }),
            x &&
                A &&
                (0, i.jsx)("div", {
                    className: tN.Y1Z,
                    children: (0, i.jsx)(m.Y, {
                        targetElementRef: C,
                        animation: m.Y.Animation.FADE,
                        renderPopout: () => (0, i.jsx)(tb, { altText: t, altButtonRef: C }),
                        children: (e) =>
                            (0, i.jsx)(f.vN, {
                                offset: 4,
                                children: (0, i.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: C,
                                    "aria-label": ec.intl.string(ec.t.fSiQ3A),
                                    className: a()(tN.DV5, { [tN.I54]: c }),
                                    children: ec.intl.string(ec.t.jCV1Tz),
                                }),
                            }),
                    }),
                }),
            !x &&
                A &&
                (0, i.jsx)(h.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    tag: "span",
                    className: tN.R5R,
                    children: t,
                }),
        ],
    });
}
function tP(e) {
    return (0, i.jsx)(L.A, { ...e });
}
function tD(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, i.jsxs)(s.Fragment, { children: [(0, i.jsx)(eI, { ...n }), null != t && t()] });
}
function tU(e) {
    return (0, i.jsx)(P.A, { ...e });
}
var tG = (((l = {})[(l.OLD_MESSAGES = 0)] = "OLD_MESSAGES"), (l[(l.REPLY = 1)] = "REPLY"), l);
let tV = (e) => {
    let { type: t = 0, onClick: n, className: l } = e;
    return (0, i.jsx)(D.Y.Consumer, {
        children: (e) =>
            e.disableInteractions
                ? null
                : (0, i.jsxs)("div", {
                      onClick: n,
                      className: a()(tN.Sg2, l),
                      children: [
                          (0, i.jsx)("div", {
                              className: tN.$IB,
                              children: (function (e) {
                                  switch (e) {
                                      case 0:
                                          return ec.intl.string(ec.t["4EvBbw"]);
                                      case 1:
                                          return ec.intl.string(ec.t["1J6Xq7"]);
                                      default:
                                          return (0, eU.xb)(e);
                                  }
                              })(t),
                          }),
                          null != n
                              ? (0, i.jsx)(f.vN, {
                                    offset: -2,
                                    children: (0, i.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: (function (e) {
                                            switch (e) {
                                                case 0:
                                                    return ec.intl.string(ec.t.gpoQsB);
                                                case 1:
                                                    return ec.intl.string(ec.t.k3RM8z);
                                                default:
                                                    return (0, eU.xb)(e);
                                            }
                                        })(t),
                                        onClick: n,
                                    }),
                                })
                              : (0, i.jsx)(g.y, {
                                    type: g.y.Type.PULSING_ELLIPSIS,
                                    className: tN.u1E,
                                    itemClassName: tN.$N2,
                                }),
                      ],
                  }),
    });
};
function tF(e) {
    let { onClick: t, loading: n, className: l } = e;
    return (0, i.jsx)(D.Y.Consumer, {
        children: (e) =>
            e.disableInteractions
                ? null
                : (0, i.jsxs)(x.D, {
                      className: a()(tN._5m, l),
                      onClick: t,
                      focusProps: { offset: { top: 4, right: 4, bottom: 12, left: 4 } },
                      children: [
                          (0, i.jsx)("div", { className: tN.$IB, children: ec.intl.string(ec.t["1zUvlw"]) }),
                          n
                              ? (0, i.jsx)(g.y, {
                                    type: g.y.Type.PULSING_ELLIPSIS,
                                    className: tN.u1E,
                                    itemClassName: tN.$N2,
                                })
                              : (0, i.jsx)("div", {
                                    className: a()(tN.hQH, tN.d3o),
                                    children: ec.intl.string(ec.t.TdQXA8),
                                }),
                      ],
                  }),
    });
}
function tH(e) {
    let { content: t, channelId: n } = e,
        [l] = s.useState(() => (0, U.Ld)("NewMessagesBarJumpToNewMessages_")),
        r = s.useCallback(() => {
            let e = eR.Ay.ackMessageId(n);
            null != e
                ? v.A.jumpToMessage({ channelId: n, messageId: e, offset: 1, context: "Mark As Read" })
                : v.A.jumpToMessage({
                      channelId: n,
                      messageId: eL.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [n]),
        o = s.useCallback(() => {
            (0, S.ack)(n, {
                section: eK.JJy.NEW_MESSAGES_BANNER,
                object: eK.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eK.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [n]),
        { disableInteractions: u } = s.useContext(D.Y);
    return u
        ? null
        : (0, i.jsxs)("div", {
              className: a()(tN.ebV, { [tN.y71]: u }),
              children: [
                  (0, i.jsx)(f.vN, {
                      offset: 4,
                      children: (0, i.jsx)("button", {
                          type: "button",
                          className: tN.$IB,
                          onClick: r,
                          "aria-label": ec.intl.string(ec.t.z0Mkp3),
                          "aria-describedby": l,
                          children: (0, i.jsx)("span", { id: l, className: tN.Lnh, children: t }),
                      }),
                  }),
                  (0, i.jsx)(f.vN, {
                      offset: 4,
                      within: !0,
                      children: (0, i.jsx)("div", {
                          className: tN._ov,
                          children: (0, i.jsxs)("button", {
                              type: "button",
                              onClick: o,
                              className: tN.hQH,
                              children: [
                                  (0, i.jsx)("span", { className: tN.vE$, children: ec.intl.string(ec.t.e6RscS) }),
                                  (0, i.jsx)(A.M, { size: "md", color: "currentColor", className: tN.t3N }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function tB(e) {
    let { channel: t, content: n, scrollManager: l } = e,
        { disableInteractions: r } = s.useContext(D.Y),
        [o, m] = s.useState(null),
        f = s.useRef(null),
        [p, g] = s.useState(null),
        N = s.useRef(null),
        _ = (0, d.yK)([ev.A], () => ev.A.summaries(t.id) ?? [], [t]),
        T = (0, k.Ay)(_);
    s.useEffect(() => {
        u().isEqual(T, _) ||
            tE.default.track(eK.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: _.length,
                message_counts: _.map((e) => e.count),
                start_message_ids: _.map((e) => e.startId),
                end_message_ids: _.map((e) => e.endId),
                num_participants: _.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [_, T, t.guild_id, t.id, t.type]);
    let j = (0, d.bG)(
            [tA.default],
            () => _?.map((e) => e.people?.map((e) => tA.default.getUser(e) ?? null).filter(eU.Vq)) ?? [],
            [_],
            tW,
        ),
        b = (0, d.bG)([ev.A], () => ev.A.visibleSummaryIndex()) ?? -1,
        R = _?.[b]?.topic;
    null == R && null == o && _?.length >= 1 && (R = _[0]?.topic);
    let O = s.useMemo(
            () =>
                u().debounce((e) => {
                    m(e?.id ?? null);
                }, 64),
            [m],
        ),
        M = s.useMemo(
            () =>
                u().throttle(
                    () => {
                        (0, ey.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        L = s.useCallback(
            (e) => {
                M(), O(e);
            },
            [O, M],
        ),
        [P, U] = s.useState(!1),
        V = s.useCallback(() => {
            tE.default.track(eK.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                U(!P);
        }, [P, _, U, t]),
        F = s.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tv.eh.PILL_DROPDOWN,
                    i = _[e];
                null != i &&
                    ((0, ey.sK)(t.id, i.id),
                    (0, ey.C6)(t.id, i.id),
                    l.removeAutomaticAnchorCallback(L),
                    l.addScrollCompleteCallback(function e() {
                        l.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                l.addAutomaticAnchorCallback(L, !1);
                            }, 100);
                    }),
                    tE.default.track(eK.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: n,
                        message_id: i.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    v.A.jumpToMessage({
                        channelId: t.id,
                        messageId: i.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: w.vx.ANIMATED,
                        context: "Summary Jump",
                    }));
            },
            [_, t, L, l],
        ),
        H = s.useCallback((e) => {
            U(e);
            let t = N.current?.scrollTop;
            null != t && g(t);
        }, []);
    s.useEffect(() => {
        null != p && P && N.current?.scrollTo({ top: p });
    }, [p, P]);
    let B = s.useCallback(
        (e) => {
            ((0, c.vq)(e.target) && f.current?.contains(e.target)) ||
                (P &&
                    tE.default.track(eK.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
    s.useEffect(
        () => (
            l.addAutomaticAnchorCallback(L),
            () => {
                l.removeAutomaticAnchorCallback(L);
            }
        ),
        [l, L],
    ),
        s.useEffect(() => {
            (0, ey.$T)(t.id);
        }, [t.id]),
        s.useEffect(
            () => (
                document.addEventListener("mousedown", B),
                () => {
                    document.removeEventListener("mousedown", B);
                }
            ),
            [B],
        );
    let W = s.useMemo(
            () => (0, i.jsx)(eq, { channel: t, summaries: _, summariesMembers: j, selectTopic: F, setOpen: H }),
            [_, j, F, H, t],
        ),
        K = s.useCallback(() => {
            let e = eR.Ay.ackMessageId(t.id);
            null != e
                ? v.A.jumpToMessage({ channelId: t.id, messageId: e, offset: 1, context: "Mark As Read" })
                : v.A.jumpToMessage({
                      channelId: t.id,
                      messageId: eL.default.castChannelIdAsMessageId(t.id),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [t.id]),
        z = s.useCallback(() => {
            (0, S.ack)(t.id, {
                section: eK.JJy.NEW_TOPICS_BAR,
                object: eK.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eK.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [t.id]),
        Z = ec.intl.string(ec.t["38qwgO"]);
    return (
        _.length > 0 && (Z = "" === R || null == R ? ec.intl.string(ec.t.DwnFuG) : R),
        r
            ? null
            : (0, i.jsxs)("div", {
                  ref: f,
                  className: a()(tN.dw5, tN.jht),
                  children: [
                      (0, i.jsx)("div", {
                          className: tN.qmJ,
                          children: (0, i.jsx)(x.D, {
                              className: tN.TQl,
                              "aria-label": ec.intl.string(ec.t.RT3MPz),
                              onClick: V,
                              children: (0, i.jsxs)("div", {
                                  className: a()({ [tN.hNz]: !P, [tN.Apq]: P }),
                                  children: [
                                      (0, i.jsx)(C.K, { size: "xs", color: "currentColor", className: tN.VdQ }),
                                      (0, i.jsx)(h.E, {
                                          variant: "text-sm/medium",
                                          className: a()(tN.$Uj, tN.lc3),
                                          children: Z,
                                      }),
                                      (0, i.jsx)(tC.A, {
                                          width: 16,
                                          height: 16,
                                          direction: tC.A.Directions.DOWN,
                                          className: tN.HBW,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, i.jsx)(x.D, { onClick: K, className: tN.ijE, children: n }),
                      (0, i.jsxs)(x.D, {
                          onClick: z,
                          className: a()(tN.hQH, tN.NXP),
                          children: [
                              (0, i.jsx)("div", { className: tN.$Uj, children: ec.intl.string(ec.t.e6RscS) }),
                              (0, i.jsx)(A.M, { size: "md", color: "currentColor", className: tN.t3N }),
                          ],
                      }),
                      P &&
                          (0, i.jsxs)("div", {
                              className: tN.A1T,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: tN.kee,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: tN.Ney,
                                              children: [
                                                  (0, i.jsx)(C.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: tN.vlb,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, i.jsx)(E.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: ec.intl.string(ec.t.q21fUr),
                                                  }),
                                                  (0, i.jsx)(G.A, { className: tN.Zxm }),
                                              ],
                                          }),
                                          (0, i.jsx)(x.D, {
                                              "aria-label": ec.intl.string(ec.t.cpT0Cq),
                                              onClick: V,
                                              className: tN.oX1,
                                              children: (0, i.jsx)(I.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(y.Ip, { ref: N, className: tN.Pei, fade: !0, children: W }),
                              ],
                          }),
                  ],
              })
    );
}
function tW(e, t) {
    return (
        null != t &&
        e.length === t.length &&
        !e.some((e, n) => {
            var l;
            return null == (l = t[n]) || e.length !== l.length || !!e.some((e, t) => l[t] !== e);
        })
    );
}
function tK(e) {
    let { channel: t, scrollManager: n } = e,
        { disableInteractions: l } = s.useContext(D.Y),
        [r, o] = s.useState(null),
        m = s.useRef(null),
        [f, p] = s.useState(null),
        g = s.useRef(null),
        A = (0, d.yK)([ev.A], () => ev.A.summaries(t.id) ?? [], [t]),
        S = (0, k.Ay)(A);
    s.useEffect(() => {
        u().isEqual(S, A) ||
            tE.default.track(eK.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: A.length,
                message_counts: A.map((e) => e.count),
                start_message_ids: A.map((e) => e.startId),
                end_message_ids: A.map((e) => e.endId),
                num_participants: A.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [A, S, t.guild_id, t.id, t.type]);
    let N = (0, d.bG)(
            [tA.default],
            () => A?.map((e) => e.people?.map((e) => tA.default.getUser(e) ?? null).filter(eU.Vq)) ?? [],
            [A],
            tW,
        ),
        _ = (0, d.bG)([ev.A], () => ev.A.visibleSummaryIndex()) ?? -1,
        T = A?.[_]?.topic;
    null == T && null == r && A?.length >= 1 && (T = A[0]?.topic);
    let j = s.useMemo(() => u().get(A, _ - 1), [_, A]),
        b = s.useMemo(() => u().get(A, _ + 1), [_, A]),
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
                        (0, ey.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        M = s.useCallback(
            (e) => {
                O(), R(e);
            },
            [R, O],
        ),
        [L, P] = s.useState(!1),
        U = s.useCallback(() => {
            tE.default.track(eK.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !L,
                num_summaries: A.length,
                message_counts: A.map((e) => e.count),
                start_message_ids: A.map((e) => e.startId),
                end_message_ids: A.map((e) => e.endId),
                num_participants: A.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                P(!L);
        }, [L, A, P, t]),
        V = s.useCallback(
            function (e) {
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tv.eh.PILL_DROPDOWN,
                    i = A[e];
                null != i &&
                    ((0, ey.sK)(t.id, i.id),
                    (0, ey.C6)(t.id, i.id),
                    n.removeAutomaticAnchorCallback(M),
                    n.addScrollCompleteCallback(function e() {
                        n.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                n.addAutomaticAnchorCallback(M, !1);
                            }, 100);
                    }),
                    tE.default.track(eK.HAw.SUMMARIES_TOPIC_CLICKED, {
                        source: l,
                        message_id: i.startId,
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                    v.A.jumpToMessage({
                        channelId: t.id,
                        messageId: i.startId,
                        flash: !0,
                        offset: 0,
                        jumpType: w.vx.ANIMATED,
                        context: "Summary Jump",
                    }));
            },
            [A, t, M, n],
        ),
        F = s.useCallback(() => {
            V(_ - 1, tv.eh.PILL_NEXT_ARROW);
        }, [V, _]),
        H = s.useCallback(() => {
            V(_ + 1, tv.eh.PILL_PREVIOUS_ARROW);
        }, [_, V]),
        B = s.useCallback((e) => {
            P(e);
            let t = g.current?.scrollTop;
            null != t && p(t);
        }, []);
    s.useEffect(() => {
        null != f && L && g.current?.scrollTo({ top: f });
    }, [f, L]);
    let W = s.useCallback(
        (e) => {
            ((0, c.vq)(e.target) && m.current?.contains(e.target)) ||
                (L &&
                    tE.default.track(eK.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
        [L, A, t, B],
    );
    s.useEffect(
        () => (
            n.addAutomaticAnchorCallback(M),
            () => {
                n.removeAutomaticAnchorCallback(M);
            }
        ),
        [n, M],
    ),
        s.useEffect(() => {
            (0, ey.$T)(t.id);
        }, [t.id]),
        s.useEffect(
            () => (
                document.addEventListener("mousedown", W),
                () => {
                    document.removeEventListener("mousedown", W);
                }
            ),
            [W],
        );
    let K = s.useMemo(
        () => (0, i.jsx)(eq, { channel: t, summaries: A, summariesMembers: N, selectTopic: V, setOpen: B }),
        [A, N, V, B, t],
    );
    if (!(0, d.bG)([ev.A], () => ev.A.shouldShowTopicsBar())) return null;
    let z = ec.intl.string(ec.t["38qwgO"]);
    return (
        A.length > 0 && (z = "" === T || null == T ? ec.intl.string(ec.t.DwnFuG) : T),
        l
            ? null
            : (0, i.jsxs)("div", {
                  ref: m,
                  className: a()(tN.$T$, tN.jht),
                  children: [
                      (0, i.jsxs)("div", {
                          className: tN.sEF,
                          children: [
                              (0, i.jsx)(x.D, {
                                  className: tN.LPV,
                                  "aria-label": ec.intl.string(ec.t.RT3MPz),
                                  onClick: U,
                                  children: (0, i.jsxs)("div", {
                                      className: a()({ [tN.Nv2]: !L, [tN.Ann]: L }),
                                      children: [
                                          (0, i.jsx)(C.K, { size: "xs", color: "currentColor", className: tN.Npc }),
                                          (0, i.jsx)(h.E, {
                                              className: tN.r1V,
                                              variant: "text-sm/medium",
                                              children: z,
                                          }),
                                          (0, i.jsx)(tC.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tC.A.Directions.DOWN,
                                              className: tN._lP,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: tN.Ykg,
                                  children: [
                                      (0, i.jsx)(x.D, {
                                          "aria-label": ec.intl.string(ec.t["4huCnC"]),
                                          onClick: H,
                                          className: a()(tN.ZMY, tN.vzA, { [tN.jfO]: null == b }),
                                          children: (0, i.jsx)(tC.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tC.A.Directions.UP,
                                          }),
                                      }),
                                      (0, i.jsx)(x.D, {
                                          "aria-label": ec.intl.string(ec.t["58KOoF"]),
                                          onClick: F,
                                          className: a()(tN.ZMY, tN.mtW, { [tN.jfO]: null == j }),
                                          children: (0, i.jsx)(tC.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tC.A.Directions.DOWN,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      L &&
                          (0, i.jsxs)("div", {
                              className: tN.A1T,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: tN.kee,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: tN.Ney,
                                              children: [
                                                  (0, i.jsx)(C.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: tN.vlb,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, i.jsx)(E.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: ec.intl.string(ec.t.q21fUr),
                                                  }),
                                                  (0, i.jsx)(G.A, { className: tN.Zxm }),
                                              ],
                                          }),
                                          (0, i.jsx)(x.D, {
                                              "aria-label": ec.intl.string(ec.t.cpT0Cq),
                                              onClick: U,
                                              className: tN.oX1,
                                              children: (0, i.jsx)(I.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(y.Ip, { ref: g, className: tN.Pei, fade: !0, children: K }),
                              ],
                          }),
                  ],
              })
    );
}
function tz(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, i.jsxs)("div", {
        className: tN.YLv,
        children: [
            (0, i.jsx)(h.E, {
                color: "none",
                variant: "text-sm/semibold",
                lineClamp: 1,
                className: tN.LdH,
                children: e,
            }),
            t &&
                (0, i.jsx)(h.E, {
                    className: tN.$oi,
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: ec.intl.string(ec.t["515vjG"]),
                }),
        ],
    });
}
function tZ(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)("div", { className: a()(tN.jCT, n), children: t });
}
function tY(e) {
    let { className: t } = e;
    return (0, i.jsx)(tZ, {
        className: t,
        children: (0, i.jsx)("div", { className: tN.wHG, children: (0, i.jsx)("div", { className: tN.j3g }) }),
    });
}
