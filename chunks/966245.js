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
    $o: () => tO,
    bU: () => tP,
    Uk: () => tN,
    GN: () => tH,
    Y0: () => tY,
    P$: () => tw,
    _d: () => tD,
    gL: () => tM,
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
    E = n(306788),
    C = n(297264),
    I = n(789645),
    y = n(364522),
    S = n(148494),
    v = n(334738),
    _ = n(192308),
    N = n(267102),
    T = n(619517),
    j = n(256905),
    b = n(536763),
    R = n(218394);
class L extends s.PureComponent {
    static defaultProps = { shouldLink: !0, autoPlay: !1, animated: !1 };
    onMouseEnter = (e) => {
        let { src: t, width: n, height: l, onMouseEnter: i, handlePreloadImage: s } = this.props;
        (i?.(e), null != s) ? s() : (0, b.A)({ src: t, width: n, height: l, options: this.props });
    };
    modalContext = (0, _.modalContextFromAppContext)(this.props.appContext);
    onCloseImage = () => {
        (0, _.closeModal)(j.K, this.modalContext);
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
function O(e) {
    let t = (0, N.Us)(),
        n = (0, R.j)();
    return (0, i.jsx)(L, { ...e, isWindowFocused: n, appContext: t });
}
var M = n(9578),
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
    $ = n(732771),
    J = n(387758),
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
    eh = n(521931);
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
                    children: (0, i.jsxs)($.iS, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            n(e), l();
                        },
                        options: Array.from(a).map((e) => ({ value: e, label: e, id: e })),
                        value: t,
                        children: [
                            (0, i.jsx)($.a3, { placeholder: ec.intl.string(ec.t.GofftW) }),
                            (0, i.jsx)($.X2, {}),
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
                    children: (0, i.jsx)(J.G, { size: "sm", color: "currentColor", ref: r }),
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
                (0, _.openModal)((t) => (0, i.jsx)(eC, { ...e, ...t }));
            },
            children: (0, i.jsx)(el._, { size: "sm", color: "currentColor" }),
        }),
    });
}
function eE(e) {
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
        E = 0 === m,
        C = "";
    E && r && x > A ? (C = "\n...") : E || (C = "..."),
        "" !== C &&
            (E
                ? (C += " " + ec.intl.formatToPlainString(ec.t.DQnFp2, { lines: x - A }))
                : (C += " " + ec.intl.formatToPlainString(ec.t["1+gGcK"], { formattedBytes: (0, eu.up)(m) })));
    let I = p?.slice(0, A).join("\n") + C,
        S = (0, es.sJ)(I),
        v = r || A < x;
    return (0, i.jsxs)("div", {
        className: a()(f, ed.kL),
        children: [
            (0, i.jsx)(y.Ip, {
                className: ed.FS,
                children:
                    null == s
                        ? (0, i.jsx)(g.y, { className: ed.u1 })
                        : (0, i.jsx)(em, { text: S, language: u, wordWrap: d }),
            }),
            (0, i.jsxs)("div", {
                className: ed.qr,
                role: "group",
                "aria-label": ec.intl.string(ec.t.TlXA8e),
                children: [
                    v ? (0, i.jsx)(ef, { expanded: r, setExpanded: o, numLines: x, isWholeFile: E }) : null,
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
function eC(e) {
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
        E = s.useRef(null),
        C = u ?? "";
    return (
        0 !== d && (C += `... ${ec.intl.formatToPlainString(ec.t["1+gGcK"], { formattedBytes: (0, eu.up)(d) })}`),
        s.useEffect(() => {
            function e(e) {
                if ((e.metaKey || e.ctrlKey) && "a" === e.key && null != E.current) {
                    let t = document.activeElement;
                    if ((0, c.vq)(t, HTMLInputElement) || (0, c.vq)(t, HTMLTextAreaElement)) return;
                    e.preventDefault();
                    let n = window.getSelection();
                    if (null != n) {
                        let e = document.createRange();
                        e.selectNodeContents(E.current), n.removeAllRanges(), n.addRange(e);
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
                                      ref: E,
                                      children: (0, i.jsx)(em, { text: C, language: f, wordWrap: x }),
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
                hadError: E,
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
        return E
            ? (0, i.jsx)(P.A, { url: t, fileName: n, fileSize: l, onClick: u, onContextMenu: c, className: o })
            : (0, i.jsx)(eE, {
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
    eS = n(822074),
    ev = n(534890),
    e_ = n(442433),
    eN = n(640708),
    eT = n(941971),
    ej = n(707539),
    eb = n(576705),
    eR = n(568548),
    eL = n(340833),
    eO = n(913642),
    eM = n(935208),
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
                        children: (0, i.jsx)(E.K, {
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
            (0, i.jsx)(C.D, {
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
        f = (0, ej.aK)(eM.default.extractTimestamp(t.startId)),
        p = (0, d.bG)([eS.A], () => eS.A.summaryFeedback(t));
    function g(e, n) {
        e.stopPropagation(), (0, ew.A)({ summary: t, channel: l, rating: n });
    }
    let A = eb.A.can(eK.xBc.MANAGE_MESSAGES, l);
    return (0, i.jsxs)(x.D, {
        className: eZ.kL,
        onClick: u,
        onContextMenu: function (e) {
            A &&
                (0, e_.L3)(e, async () => {
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
                        (0, i.jsx)(eN.A, { height: 4, width: 4, "aria-hidden": "true", className: eZ.Om }),
                        (0, i.jsx)(ev.ChatIcon, { size: "xxs", color: "currentColor", className: eZ.Kk }),
                        (0, i.jsx)(h.E, {
                            className: eZ.U9,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: t.count,
                        }),
                        r.length > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(eN.A, { height: 4, width: 4, "aria-hidden": "true", className: eZ.Om }),
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
                            children: (0, i.jsx)(eO.A, { className: eZ.O1, width: 12, height: 12 }),
                        }),
                        (0, i.jsx)(x.D, {
                            onClick: (e) => g(e, ez.P0.BAD),
                            children: (0, i.jsx)(eL.A, { className: eZ.O1, width: 12, height: 12 }),
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
                          unread: null != o && eM.default.compare(e.endId, o) > 0,
                          onClick: () => u(t),
                      },
                      t,
                  );
              }),
          });
}
var e$ = n(885386),
    eJ = n(113494),
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
var e8 = n(20504),
    e3 = n(625494),
    e5 = n(927813),
    e6 = n(824744);
n(508300);
var e7 = n(661531),
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
        E =
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
        C = s.useRef(c),
        I = s.useRef(d),
        y = s.useRef(null),
        S = window.devicePixelRatio,
        {
            lastBackgroundFillColor: v,
            backgroundFillColor: _,
            lastActiveFillColor: N,
            activeFillColor: T,
            lastInactiveFillColor: j,
            inactiveFillColor: b,
        } = (function (e, t) {
            let n = (0, e4.r)(e7.A.colors.BACKGROUND_MOD_MUTED).hex(),
                l = (0, e4.r)(e7.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
                i = (0, e4.r)(e7.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
                s = (0, e4.r)(e7.A.unsafe_rawColors.BRAND_430).hex(),
                r = (0, e4.r)(e7.A.unsafe_rawColors.WHITE).hex(),
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
        L = s.useRef(R);
    s.useEffect(() => {
        L.current = R;
    }),
        s.useEffect(() => {
            let { currentTime: e, duration: t, played: n } = L.current,
                l = tu({ showAll: !n, currentTime: e, duration: t, numSegments: E.length });
            A.current = E.map((e, t) => new ts(t < l ? e : 0));
        }, [E]),
        s.useEffect(() => {
            let e = A.current;
            if (null == e) return;
            let t = tu({ showAll: !c, currentTime: o, duration: u, numSegments: E.length });
            for (let n = 0; n < e.length; n++) {
                let l = e[n];
                if (n < t) {
                    l.animateTo(E[n]);
                    continue;
                }
                l.reset();
            }
        }, [E, o, u, c]),
        s.useEffect(() => {
            let e = null;
            return (
                (e = requestAnimationFrame(function t(n) {
                    let l = p.current,
                        i = l?.getContext("2d"),
                        s = A.current;
                    if (null == l || null == i || null == s) return;
                    let r = !1;
                    (C.current !== c || I.current !== d) && ((C.current = c), (I.current = d), (y.current = n)),
                        null != y.current && n > y.current + 200 && (y.current = null);
                    let a = l.height / S;
                    i.clearRect(0, 0, l.width, l.height), i.beginPath();
                    let [o, u] = th(v, _, n, y.current);
                    (r = r || u), (i.fillStyle = o);
                    for (let e = 0; e < E.length; e++)
                        tc({
                            context: i,
                            devicePixelRatio: S,
                            canvasHeight: a,
                            segmentValue: E[e],
                            segmentIndex: e,
                            constrainMin: !0,
                        });
                    i.fill();
                    let [h, m] = th(j, b, n, y.current);
                    r = r || m;
                    let [f, g] = th(N, T, n, y.current);
                    r = r || g;
                    for (let e = 0; e < s.length; e++) {
                        let t = s[e],
                            n = Math.max(t.getCurrentValue(), E[e] - 0.1);
                        i.beginPath(),
                            (i.fillStyle = t.isReset ? h : f),
                            tc({
                                context: i,
                                devicePixelRatio: S,
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
        }, [p, S, E, g, o, u, c, d, v, _, N, T, j, b]);
    let [, O] = (function (e) {
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
        onMouseDown: O,
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
            playbackCacheKey: E,
        } = e,
        C = s.useRef(null),
        I = s.useMemo(() => (null != E ? e1.Ay.getPlaybackPosition(E) : 0), [E]),
        y = (0, d.bG)([e1.Ay], () => e1.Ay.getPlaybackRate(e1.k0.VOICE_MESSAGE)),
        [S, v] = s.useState(I > 0),
        [_, N] = s.useState(I),
        [T, j] = s.useState(c),
        [b, R] = s.useState(!1),
        [L, O] = s.useState(!1),
        [M, w] = s.useState(!1),
        [k, P] = s.useState(!1),
        [D, U] = s.useState("none"),
        [G, V] = s.useState(() => ("function" == typeof l ? l() : l)),
        F = s.useRef(void 0),
        H = s.useCallback(() => {
            O((e) => !e), P(!0);
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
                    null != E &&
                    e0.h.dispatch({ type: "MEDIA_PLAYBACK_POSITION_UPDATE", cacheKey: E, position: e, duration: c });
            },
            [E, c],
        ),
        z = s.useCallback(() => {
            O(!1),
                null == F.current &&
                    (F.current = setTimeout(() => {
                        v(!1), P(!1), (F.current = void 0);
                    }, 500));
        }, []),
        Z = s.useCallback(() => {
            M || (K(0), z());
        }, [z, M, K]),
        Y = s.useCallback((e) => {
            let t = C.current;
            null != t && (N(e), (t.currentTime = e), v(!0));
        }, []),
        q = s.useCallback(() => {
            let e = C.current;
            if (null == e) return;
            let t = e.error;
            A?.(t);
        }, [A]),
        $ = s.useCallback(
            (e) => {
                let t = (0, e6.w)(e, 1);
                R(0 === t), V(t), r?.(t);
            },
            [r],
        ),
        J = s.useCallback(() => {
            R(!b), o?.(!b);
        }, [b, o]),
        X = s.useCallback(() => {
            w(!0);
        }, []),
        Q = s.useCallback(() => {
            w(!1), _ === T && z(), K(_);
        }, [_, T, z, K]),
        ee = s.useCallback(
            (e) => {
                let t = C.current;
                null == T || null == t || (Y(e * T), clearTimeout(F.current), (F.current = void 0));
            },
            [T, Y],
        );
    s.useEffect(() => {
        !S && L && v(!0);
    }, [L, S]);
    let et = s.useRef(null),
        en = { played: k, currentTime: _, onPause: g, onPlay: p },
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
                L &&
                    !M &&
                    (e = setInterval(() => {
                        K(C.current?.currentTime ?? 0);
                    }, e5.A.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [L, M, K]),
        s.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: l } = el.current;
            if (e || L)
                if (L) (et.current = performance.now()), l?.(!1, t, (C.current?.duration ?? 0) * e5.A.Millis.SECOND);
                else {
                    let e = performance.now(),
                        l = et.current;
                    n?.(t, null != l ? (e - l) / 1e3 : 0), K(t), (et.current = null);
                }
        }, [L, n, T, K]),
        s.useEffect(() => {
            let e;
            return (
                !(function t() {
                    let n = C.current;
                    null == n || (N(n.currentTime), L && (e = requestAnimationFrame(t)));
                })(),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [C, L, N]),
        s.useEffect(() => {
            if (L)
                return (
                    e3._.dispatch(eK.jej.VOICE_MESSAGE_PLAYBACK_STARTED, { src: n }),
                    e3._.subscribe(eK.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e),
                    () => {
                        e3._.unsubscribe(eK.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e);
                    }
                );
            function e(e) {
                let { src: t } = e;
                n !== t && O(!1);
            }
        }, [n, L, O]);
    let ei = L ? eJ.PauseIcon : eX.PlayIcon,
        es = L ? ec.intl.string(ec.t["3XohGn"]) : ec.intl.string(ec.t.AlHqHT),
        er = ec.intl.formatToPlainString(ec.t.LgCPMt, { playbackRate: y }),
        ea = `${y.toString().replace(/^0/, "")}X`;
    t =
        "Safari" === platform.name
            ? (0, i.jsx)(s.Suspense, {
                  children: (0, i.jsx)(tp, {
                      ref: C,
                      className: tf.Zn,
                      src: n,
                      preload: D,
                      playing: L && !M,
                      onEnded: Z,
                      onLoadedMetadata: W,
                      onError: q,
                      muted: b,
                      volume: G,
                      playbackRate: y,
                  }),
              })
            : (0, i.jsx)(e2, {
                  ref: C,
                  className: tf.Zn,
                  controls: !1,
                  preload: D,
                  onEnded: Z,
                  onLoadedMetadata: W,
                  onError: q,
                  muted: b,
                  volume: G,
                  playbackRate: y,
                  playing: L && !M,
                  children: (0, i.jsx)("source", { src: n }),
              });
    let eo = (0, d.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion);
    return (0, i.jsxs)("div", {
        className: a()(tf.kL, { [tf.he]: L }),
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
                currentTime: _,
                duration: T ?? 1,
                playing: L,
                played: S,
                onDrag: ee,
                onDragStart: X,
                onDragEnd: Q,
            }),
            (0, i.jsx)(tg, { played: S, currentTime: _, duration: T }),
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
            (0, i.jsx)(e8.A, {
                className: tf.bk,
                iconClassName: tf._j,
                iconColor: "currentColor",
                sliderWrapperClassName: tf.MQ,
                muted: b,
                value: (0, e6.M)(G, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: $,
                onToggleMute: J,
                onVolumeShow: m,
                onVolumeHide: f,
            }),
            t,
        ],
    });
});
var tA = n(287809),
    tE = n(147925),
    tC = n(174459),
    tI = n(587481),
    ty = n(838541),
    tS = n(521732),
    tv = n(650583),
    t_ = n(959760);
let tN = { delay: 300, position: "top" };
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
        className: t_.obt,
        tabIndex: -1,
        onKeyDown: (e) => {
            e.key === tv.N$.Escape && setTimeout(() => n.current?.focus(), 0);
        },
        children: [
            (0, i.jsx)(h.E, {
                variant: "text-xs/bold",
                color: "none",
                tag: "span",
                className: t_.k_Z,
                children: ec.intl.string(ec.t.fSiQ3A),
            }),
            (0, i.jsx)(h.E, { variant: "text-md/normal", color: "none", tag: "span", className: t_.a7V, children: t }),
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
    return (n || u) && !l && e$._z.getSetting() && null != t && "" !== t && !0 !== r
        ? (0, i.jsx)("div", {
              className: t_.NOQ,
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
                              className: a()(t_.DV5, { [t_.yZ5]: !0, [t_.I54]: o }),
                              children: ec.intl.string(ec.t.jCV1Tz),
                          }),
                      }),
              }),
          })
        : null;
}
function tL(e) {
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
    let [E, C] = s.useState(!0),
        I = f === ty.dG.MOSAIC || !0 === m,
        y = E && !c && e$._z.getSetting() && null != a && "" !== a && !0 !== d;
    return (0, i.jsxs)(s.Fragment, {
        children: [
            (0, i.jsx)(B.A, {
                ...g,
                alt: a,
                autoMute: r,
                mediaLayoutType: f,
                onControlsHide: () => C(!1),
                onControlsShow: () => C(!0),
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
                    controlsVisible: E,
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
                    className: t_.R5R,
                    children: a,
                }),
        ],
    });
}
function tO(e) {
    return (0, i.jsx)(tL, { ...e });
}
function tM(e) {
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
        A = !u && e$._z.getSetting() && null != t && "" !== t && !0 !== n,
        E = s.createRef();
    return (0, i.jsxs)("div", {
        className: a()(t_.foG, r),
        children: [
            (0, i.jsxs)("div", {
                className: a()(t_.ZSk, o),
                style: p,
                children: [(0, i.jsx)(O, { ...e }), null != l && l()],
            }),
            x &&
                A &&
                (0, i.jsx)("div", {
                    className: t_.Y1Z,
                    children: (0, i.jsx)(m.Y, {
                        targetElementRef: E,
                        animation: m.Y.Animation.FADE,
                        renderPopout: () => (0, i.jsx)(tb, { altText: t, altButtonRef: E }),
                        children: (e) =>
                            (0, i.jsx)(f.vN, {
                                offset: 4,
                                children: (0, i.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: E,
                                    "aria-label": ec.intl.string(ec.t.fSiQ3A),
                                    className: a()(t_.DV5, { [t_.I54]: c }),
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
                    className: t_.R5R,
                    children: t,
                }),
        ],
    });
}
function tP(e) {
    return (0, i.jsx)(M.A, { ...e });
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
                      className: a()(t_.Sg2, l),
                      children: [
                          (0, i.jsx)("div", {
                              className: t_.$IB,
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
                                    className: t_.u1E,
                                    itemClassName: t_.$N2,
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
                      className: a()(t_._5m, l),
                      onClick: t,
                      focusProps: { offset: { top: 4, right: 4, bottom: 12, left: 4 } },
                      children: [
                          (0, i.jsx)("div", { className: t_.$IB, children: ec.intl.string(ec.t["1zUvlw"]) }),
                          n
                              ? (0, i.jsx)(g.y, {
                                    type: g.y.Type.PULSING_ELLIPSIS,
                                    className: t_.u1E,
                                    itemClassName: t_.$N2,
                                })
                              : (0, i.jsx)("div", {
                                    className: a()(t_.hQH, t_.d3o),
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
                ? S.A.jumpToMessage({ channelId: n, messageId: e, offset: 1, context: "Mark As Read" })
                : S.A.jumpToMessage({
                      channelId: n,
                      messageId: eM.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [n]),
        o = s.useCallback(() => {
            (0, v.ack)(n, {
                section: eK.JJy.NEW_MESSAGES_BANNER,
                object: eK.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eK.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [n]),
        { disableInteractions: u } = s.useContext(D.Y);
    return u
        ? null
        : (0, i.jsxs)("div", {
              className: a()(t_.ebV, { [t_.y71]: u }),
              children: [
                  (0, i.jsx)(f.vN, {
                      offset: 4,
                      children: (0, i.jsx)("button", {
                          type: "button",
                          className: t_.$IB,
                          onClick: r,
                          "aria-label": ec.intl.string(ec.t.z0Mkp3),
                          "aria-describedby": l,
                          children: (0, i.jsx)("span", { id: l, className: t_.Lnh, children: t }),
                      }),
                  }),
                  (0, i.jsx)(f.vN, {
                      offset: 4,
                      within: !0,
                      children: (0, i.jsx)("div", {
                          className: t_._ov,
                          children: (0, i.jsxs)("button", {
                              type: "button",
                              onClick: o,
                              className: t_.hQH,
                              children: [
                                  (0, i.jsx)("span", { className: t_.vE$, children: ec.intl.string(ec.t.e6RscS) }),
                                  (0, i.jsx)(A.M, { size: "md", color: "currentColor", className: t_.t3N }),
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
        _ = s.useRef(null),
        N = (0, d.yK)([eS.A], () => eS.A.summaries(t.id) ?? [], [t]),
        T = (0, k.Ay)(N);
    s.useEffect(() => {
        u().isEqual(T, N) ||
            tC.default.track(eK.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
                num_summaries: N.length,
                message_counts: N.map((e) => e.count),
                start_message_ids: N.map((e) => e.startId),
                end_message_ids: N.map((e) => e.endId),
                num_participants: N.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            });
    }, [N, T, t.guild_id, t.id, t.type]);
    let j = (0, d.bG)(
            [tA.default],
            () => N?.map((e) => e.people?.map((e) => tA.default.getUser(e) ?? null).filter(eU.Vq)) ?? [],
            [N],
            tW,
        ),
        b = (0, d.bG)([eS.A], () => eS.A.visibleSummaryIndex()) ?? -1,
        R = N?.[b]?.topic;
    null == R && null == o && N?.length >= 1 && (R = N[0]?.topic);
    let L = s.useMemo(
            () =>
                u().debounce((e) => {
                    m(e?.id ?? null);
                }, 64),
            [m],
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
                O(), L(e);
            },
            [L, O],
        ),
        [P, U] = s.useState(!1),
        V = s.useCallback(() => {
            tC.default.track(eK.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                topics_dropdown_open: !P,
                num_summaries: N.length,
                message_counts: N.map((e) => e.count),
                start_message_ids: N.map((e) => e.startId),
                end_message_ids: N.map((e) => e.endId),
                num_participants: N.map((e) => e.people.length),
                guild_id: t.guild_id,
                channel_id: t.id,
                channel_type: t.type,
            }),
                U(!P);
        }, [P, N, U, t]),
        F = s.useCallback(
            function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tS.eh.PILL_DROPDOWN,
                    i = N[e];
                null != i &&
                    ((0, ey.sK)(t.id, i.id),
                    (0, ey.C6)(t.id, i.id),
                    l.removeAutomaticAnchorCallback(M),
                    l.addScrollCompleteCallback(function e() {
                        l.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                l.addAutomaticAnchorCallback(M, !1);
                            }, 100);
                    }),
                    tC.default.track(eK.HAw.SUMMARIES_TOPIC_CLICKED, {
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
                        jumpType: w.vx.ANIMATED,
                        context: "Summary Jump",
                    }));
            },
            [N, t, M, l],
        ),
        H = s.useCallback((e) => {
            U(e);
            let t = _.current?.scrollTop;
            null != t && g(t);
        }, []);
    s.useEffect(() => {
        null != p && P && _.current?.scrollTo({ top: p });
    }, [p, P]);
    let B = s.useCallback(
        (e) => {
            ((0, c.vq)(e.target) && f.current?.contains(e.target)) ||
                (P &&
                    tC.default.track(eK.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
                        topics_dropdown_open: !1,
                        num_summaries: N.length,
                        message_counts: N.map((e) => e.count),
                        start_message_ids: N.map((e) => e.startId),
                        end_message_ids: N.map((e) => e.endId),
                        num_participants: N.map((e) => e.people.length),
                        guild_id: t.guild_id,
                        channel_id: t.id,
                        channel_type: t.type,
                    }),
                H(!1));
        },
        [P, N, t, H],
    );
    s.useEffect(
        () => (
            l.addAutomaticAnchorCallback(M),
            () => {
                l.removeAutomaticAnchorCallback(M);
            }
        ),
        [l, M],
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
            () => (0, i.jsx)(eq, { channel: t, summaries: N, summariesMembers: j, selectTopic: F, setOpen: H }),
            [N, j, F, H, t],
        ),
        K = s.useCallback(() => {
            let e = eR.Ay.ackMessageId(t.id);
            null != e
                ? S.A.jumpToMessage({ channelId: t.id, messageId: e, offset: 1, context: "Mark As Read" })
                : S.A.jumpToMessage({
                      channelId: t.id,
                      messageId: eM.default.castChannelIdAsMessageId(t.id),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [t.id]),
        z = s.useCallback(() => {
            (0, v.ack)(t.id, {
                section: eK.JJy.NEW_TOPICS_BAR,
                object: eK.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: eK.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [t.id]),
        Z = ec.intl.string(ec.t["38qwgO"]);
    return (
        N.length > 0 && (Z = "" === R || null == R ? ec.intl.string(ec.t.DwnFuG) : R),
        r
            ? null
            : (0, i.jsxs)("div", {
                  ref: f,
                  className: a()(t_.dw5, t_.jht),
                  children: [
                      (0, i.jsx)("div", {
                          className: t_.qmJ,
                          children: (0, i.jsx)(x.D, {
                              className: t_.TQl,
                              "aria-label": ec.intl.string(ec.t.RT3MPz),
                              onClick: V,
                              children: (0, i.jsxs)("div", {
                                  className: a()({ [t_.hNz]: !P, [t_.Apq]: P }),
                                  children: [
                                      (0, i.jsx)(E.K, { size: "xs", color: "currentColor", className: t_.VdQ }),
                                      (0, i.jsx)(h.E, {
                                          variant: "text-sm/medium",
                                          className: a()(t_.$Uj, t_.lc3),
                                          children: Z,
                                      }),
                                      (0, i.jsx)(tE.A, {
                                          width: 16,
                                          height: 16,
                                          direction: tE.A.Directions.DOWN,
                                          className: t_.HBW,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, i.jsx)(x.D, { onClick: K, className: t_.ijE, children: n }),
                      (0, i.jsxs)(x.D, {
                          onClick: z,
                          className: a()(t_.hQH, t_.NXP),
                          children: [
                              (0, i.jsx)("div", { className: t_.$Uj, children: ec.intl.string(ec.t.e6RscS) }),
                              (0, i.jsx)(A.M, { size: "md", color: "currentColor", className: t_.t3N }),
                          ],
                      }),
                      P &&
                          (0, i.jsxs)("div", {
                              className: t_.A1T,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: t_.kee,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: t_.Ney,
                                              children: [
                                                  (0, i.jsx)(E.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: t_.vlb,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, i.jsx)(C.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: ec.intl.string(ec.t.q21fUr),
                                                  }),
                                                  (0, i.jsx)(G.A, { className: t_.Zxm }),
                                              ],
                                          }),
                                          (0, i.jsx)(x.D, {
                                              "aria-label": ec.intl.string(ec.t.cpT0Cq),
                                              onClick: V,
                                              className: t_.oX1,
                                              children: (0, i.jsx)(I.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(y.Ip, { ref: _, className: t_.Pei, fade: !0, children: W }),
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
        A = (0, d.yK)([eS.A], () => eS.A.summaries(t.id) ?? [], [t]),
        v = (0, k.Ay)(A);
    s.useEffect(() => {
        u().isEqual(v, A) ||
            tC.default.track(eK.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
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
    let _ = (0, d.bG)(
            [tA.default],
            () => A?.map((e) => e.people?.map((e) => tA.default.getUser(e) ?? null).filter(eU.Vq)) ?? [],
            [A],
            tW,
        ),
        N = (0, d.bG)([eS.A], () => eS.A.visibleSummaryIndex()) ?? -1,
        T = A?.[N]?.topic;
    null == T && null == r && A?.length >= 1 && (T = A[0]?.topic);
    let j = s.useMemo(() => u().get(A, N - 1), [N, A]),
        b = s.useMemo(() => u().get(A, N + 1), [N, A]),
        R = s.useMemo(
            () =>
                u().debounce((e) => {
                    o(e?.id ?? null);
                }, 64),
            [o],
        ),
        L = s.useMemo(
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
        O = s.useCallback(
            (e) => {
                L(), R(e);
            },
            [R, L],
        ),
        [M, P] = s.useState(!1),
        U = s.useCallback(() => {
            tC.default.track(eK.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                P(!M);
        }, [M, A, P, t]),
        V = s.useCallback(
            function (e) {
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tS.eh.PILL_DROPDOWN,
                    i = A[e];
                null != i &&
                    ((0, ey.sK)(t.id, i.id),
                    (0, ey.C6)(t.id, i.id),
                    n.removeAutomaticAnchorCallback(O),
                    n.addScrollCompleteCallback(function e() {
                        n.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                n.addAutomaticAnchorCallback(O, !1);
                            }, 100);
                    }),
                    tC.default.track(eK.HAw.SUMMARIES_TOPIC_CLICKED, {
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
                        jumpType: w.vx.ANIMATED,
                        context: "Summary Jump",
                    }));
            },
            [A, t, O, n],
        ),
        F = s.useCallback(() => {
            V(N - 1, tS.eh.PILL_NEXT_ARROW);
        }, [V, N]),
        H = s.useCallback(() => {
            V(N + 1, tS.eh.PILL_PREVIOUS_ARROW);
        }, [N, V]),
        B = s.useCallback((e) => {
            P(e);
            let t = g.current?.scrollTop;
            null != t && p(t);
        }, []);
    s.useEffect(() => {
        null != f && M && g.current?.scrollTo({ top: f });
    }, [f, M]);
    let W = s.useCallback(
        (e) => {
            ((0, c.vq)(e.target) && m.current?.contains(e.target)) ||
                (M &&
                    tC.default.track(eK.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
    s.useEffect(
        () => (
            n.addAutomaticAnchorCallback(O),
            () => {
                n.removeAutomaticAnchorCallback(O);
            }
        ),
        [n, O],
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
        () => (0, i.jsx)(eq, { channel: t, summaries: A, summariesMembers: _, selectTopic: V, setOpen: B }),
        [A, _, V, B, t],
    );
    if (!(0, d.bG)([eS.A], () => eS.A.shouldShowTopicsBar())) return null;
    let z = ec.intl.string(ec.t["38qwgO"]);
    return (
        A.length > 0 && (z = "" === T || null == T ? ec.intl.string(ec.t.DwnFuG) : T),
        l
            ? null
            : (0, i.jsxs)("div", {
                  ref: m,
                  className: a()(t_.$T$, t_.jht),
                  children: [
                      (0, i.jsxs)("div", {
                          className: t_.sEF,
                          children: [
                              (0, i.jsx)(x.D, {
                                  className: t_.LPV,
                                  "aria-label": ec.intl.string(ec.t.RT3MPz),
                                  onClick: U,
                                  children: (0, i.jsxs)("div", {
                                      className: a()({ [t_.Nv2]: !M, [t_.Ann]: M }),
                                      children: [
                                          (0, i.jsx)(E.K, { size: "xs", color: "currentColor", className: t_.Npc }),
                                          (0, i.jsx)(h.E, {
                                              className: t_.r1V,
                                              variant: "text-sm/medium",
                                              children: z,
                                          }),
                                          (0, i.jsx)(tE.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tE.A.Directions.DOWN,
                                              className: t_._lP,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: t_.Ykg,
                                  children: [
                                      (0, i.jsx)(x.D, {
                                          "aria-label": ec.intl.string(ec.t["4huCnC"]),
                                          onClick: H,
                                          className: a()(t_.ZMY, t_.vzA, { [t_.jfO]: null == b }),
                                          children: (0, i.jsx)(tE.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tE.A.Directions.UP,
                                          }),
                                      }),
                                      (0, i.jsx)(x.D, {
                                          "aria-label": ec.intl.string(ec.t["58KOoF"]),
                                          onClick: F,
                                          className: a()(t_.ZMY, t_.mtW, { [t_.jfO]: null == j }),
                                          children: (0, i.jsx)(tE.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tE.A.Directions.DOWN,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      M &&
                          (0, i.jsxs)("div", {
                              className: t_.A1T,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: t_.kee,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: t_.Ney,
                                              children: [
                                                  (0, i.jsx)(E.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: t_.vlb,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, i.jsx)(C.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: ec.intl.string(ec.t.q21fUr),
                                                  }),
                                                  (0, i.jsx)(G.A, { className: t_.Zxm }),
                                              ],
                                          }),
                                          (0, i.jsx)(x.D, {
                                              "aria-label": ec.intl.string(ec.t.cpT0Cq),
                                              onClick: U,
                                              className: t_.oX1,
                                              children: (0, i.jsx)(I.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(y.Ip, { ref: g, className: t_.Pei, fade: !0, children: K }),
                              ],
                          }),
                  ],
              })
    );
}
function tz(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, i.jsxs)("div", {
        className: t_.YLv,
        children: [
            (0, i.jsx)(h.E, {
                color: "none",
                variant: "text-sm/semibold",
                lineClamp: 1,
                className: t_.LdH,
                children: e,
            }),
            t &&
                (0, i.jsx)(h.E, {
                    className: t_.$oi,
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: ec.intl.string(ec.t["515vjG"]),
                }),
        ],
    });
}
function tZ(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)("div", { className: a()(t_.jCT, n), children: t });
}
function tY(e) {
    let { className: t } = e;
    return (0, i.jsx)(tZ, {
        className: t,
        children: (0, i.jsx)("div", { className: t_.wHG, children: (0, i.jsx)("div", { className: t_.j3g }) }),
    });
}
