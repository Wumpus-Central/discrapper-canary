n.d(t, {
    ks: () => t$,
    UK: () => t3,
    Ez: () => tQ,
    _z: () => tH,
    LL: () => tZ,
    Uq: () => t6,
    yR: () => t8,
    OZ: () => t1,
    $o: () => tW,
    bU: () => tY,
    Uk: () => tU,
    GN: () => t0,
    Y0: () => t5,
    P$: () => tz,
    _d: () => tq,
    gL: () => tK,
    Dk: () => tJ,
    Ab: () => tX,
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
            children: h,
            shouldHideMediaOptions: m = !1,
            sourceMetadata: f,
            analyticsSource: p,
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
                        children: h,
                        trigger: l,
                        sourceMetadata: f,
                        original: r ?? s,
                    },
                ],
                shouldHideMediaOptions: m,
                location: p ?? "LazyImageZoomable",
                contextKey: this.modalContext,
            }));
    };
    render() {
        let { appContext: e, isWindowFocused: t, ...n } = this.props;
        return (0, i.jsx)(j.Ay, { ...n, onZoom: this.onZoom, onMouseEnter: this.onMouseEnter, shouldAnimate: t });
    }
}
function M(e) {
    let t = (0, _.Us)(),
        n = (0, R.j)();
    return (0, i.jsx)(O, { ...e, isWindowFocused: n, appContext: t });
}
var L = n(9578),
    k = n(56562),
    w = n(475743),
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
var B = n(248643);
n(321073);
var W = n(342324),
    K = n(156828),
    z = n(866665),
    Z = n(408278),
    Y = n(900797),
    q = n(847374),
    J = n(305866),
    $ = n(453318),
    X = n(387758),
    Q = n(980707),
    ee = n(477782),
    et = n(32880),
    en = n(365199),
    el = n(28863),
    ei = n(26430),
    es = n(224640),
    er = n(694403),
    ea = n(417964),
    eo = n(639169),
    eu = n(586172),
    ec = n(768947),
    ed = n(255438);
let eh = (0, n(945810).mj)({
    name: "2026-09-markdown-file-preview",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function em(e) {
    let { location: t, children: n } = e;
    return n(eh.useConfig({ location: t }).enabled);
}
var ef = n(375708),
    ep = n(810917),
    eg = n(165648),
    ex = n(969490);
let eA = new W.A({ html: !1, linkify: !1, typographer: !1 }),
    eC = new Set(["markdown", "md", "mkd"]),
    eE = new Set([
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "ul",
        "ol",
        "li",
        "em",
        "strong",
        "s",
        "table",
        "thead",
        "tbody",
        "tr",
        "th",
        "td",
    ]);
function eI(e) {
    let { text: t, language: l, className: s } = e,
        r = a()(ex.kw, "hljs", s);
    function o() {
        return (0, i.jsx)("code", { className: r, children: t });
    }
    return (0, i.jsx)("pre", {
        children: (0, i.jsx)(eu.l, {
            location: "PlaintextFilePreview",
            code: t,
            lang: l,
            className: r,
            children: (0, i.jsx)(K.c2, {
                createPromise: () => Promise.all([n.e("818449"), n.e("175134")]).then(n.bind(n, 981776)),
                webpackId: 981776,
                renderFallback: o,
                render: (e) => {
                    if (null == l || !e.hasLanguage(l)) return o();
                    let n = e.highlight(l, t, !0);
                    return null == n
                        ? o()
                        : (0, i.jsx)("code", {
                              className: a()(r, n.language),
                              dangerouslySetInnerHTML: { __html: n.value },
                          });
                },
            }),
        }),
    });
}
function ey(e, t) {
    let { tag: n, attrs: l, children: r } = e,
        o = a()(ep.p_, { [ep.J2]: !0 === e.loose });
    switch (n) {
        case "a": {
            let e = (0, er.W1)(l.href ?? "");
            if (null == e) return (0, i.jsx)("span", { children: r }, t);
            return (0, i.jsx)(L.A, { href: e.target, title: l.title, children: r.length > 0 ? r : e.displayTarget }, t);
        }
        case "blockquote":
            return (0, i.jsxs)(
                "div",
                {
                    className: eg.h,
                    children: [(0, i.jsx)("div", { className: eg.r }), (0, i.jsx)("blockquote", { children: r })],
                },
                t,
            );
        case "ul":
            return (0, i.jsx)("ul", { className: o, children: r }, t);
        case "ol": {
            let e = null != l.start ? parseInt(l.start) : NaN,
                n = Number.isNaN(e) ? 1 : e,
                s = String(n + Math.max(r.length - 1, 0)).length;
            return (0, i.jsx)(
                "ol",
                { className: o, start: 1 === n ? void 0 : n, style: { "--totalCharacters": s }, children: r },
                t,
            );
        }
        case "th":
        case "td":
            return s.createElement(n, { key: t, style: { cssText: l.style } }, r);
        default:
            if (!eE.has(n)) return (0, i.jsx)("span", { children: r }, t);
            return s.createElement(n, { key: t }, r);
    }
}
function eS(e, t) {
    let n = e.pop(),
        l = e[e.length - 1];
    n.hidden ? l.children.push(...n.children) : l.children.push(ey(n, t));
}
function ev(e) {
    let { text: t } = e,
        n = s.useMemo(
            () =>
                (function e(t, n) {
                    let l = [{ tag: "", attrs: {}, children: [] }];
                    for (let s = 0; s < t.length && !(n.remaining <= 0); s++) {
                        n.remaining--;
                        let r = t[s],
                            a = l[l.length - 1];
                        if (1 === r.nesting) {
                            ("p" === r.tag &&
                                !r.hidden &&
                                "li" === a.tag &&
                                l.length >= 2 &&
                                (l[l.length - 2].loose = !0),
                                l.push({
                                    tag: r.tag,
                                    attrs: Object.fromEntries(
                                        (r.attrs ?? []).map((e) => {
                                            let [t, n] = e;
                                            return [t, String(n)];
                                        }),
                                    ),
                                    children: [],
                                    hidden: r.hidden,
                                }));
                            continue;
                        }
                        if (-1 === r.nesting) {
                            l.length > 1 && eS(l, s);
                            continue;
                        }
                        switch (r.type) {
                            case "inline":
                                a.children.push(...e(r.children ?? [], n));
                                break;
                            case "text":
                            case "text_special":
                                a.children.push(r.content);
                                break;
                            case "code_inline":
                                a.children.push((0, i.jsx)("code", { className: "inline", children: r.content }, s));
                                break;
                            case "fence":
                            case "code_block":
                                a.children.push(
                                    (0, i.jsx)(
                                        eI,
                                        {
                                            language: (function (e) {
                                                let t = e.trim().split(/\s+/)[0];
                                                return "" !== t ? t : void 0;
                                            })(r.info),
                                            text: r.content,
                                        },
                                        s,
                                    ),
                                );
                                break;
                            case "softbreak":
                                a.children.push(" ");
                                break;
                            case "hardbreak":
                                a.children.push((0, i.jsx)("br", {}, s));
                                break;
                            case "hr":
                                a.children.push((0, i.jsx)("hr", {}, s));
                                break;
                            case "image": {
                                let e = String(r.attrGet("src") ?? ""),
                                    t = "" !== r.content ? r.content : e;
                                a.children.push(
                                    ey(
                                        {
                                            tag: "a",
                                            attrs: { href: e, title: String(r.attrGet("title") ?? "") },
                                            children: [t],
                                        },
                                        s,
                                    ),
                                );
                                break;
                            }
                            default:
                                "" !== r.content && a.children.push(r.content);
                        }
                    }
                    for (; l.length > 1;) eS(l, t.length + l.length);
                    return (n.remaining <= 0 && l[0].children.push("\u2026"), l[0].children);
                })(eA.parse(t, {}), { remaining: 5e3 }),
            [t],
        );
    return (0, i.jsx)("div", { className: a()(eg.PT, ep.l_), children: n });
}
function eN(e) {
    let { text: t, language: n, wordWrap: l } = e;
    return (0, i.jsx)(eI, { text: t, language: n, className: a()(ep.Xb, { [ep.Zw]: l }) });
}
function e_(e) {
    let { expanded: t, setExpanded: n, numLines: l, isWholeFile: s } = e,
        r = ef.intl.formatToPlainString(s ? ef.t.Go5Vvs : ef.t.yJcYan, { lines: l }),
        a = `${t ? ef.intl.string(ef.t.iTcuma) : ef.intl.string(ef.t.dcl9MQ)} (${r})`;
    return (0, i.jsx)("div", {
        className: ep.py,
        children: (0, i.jsx)(z.m, {
            text: a,
            children: (0, i.jsx)(Z.K, {
                icon: t ? Y.t : q.a,
                size: "md",
                variant: "secondary",
                onClick: () => n?.(!t),
                "aria-label": a,
            }),
        }),
    });
}
function ej(e) {
    let { fileName: t, fileSize: n } = e,
        l = `${t} (${(0, ed.up)(n)})`;
    return (0, i.jsxs)("div", {
        className: ep.VI,
        children: [
            (0, i.jsx)("div", {
                className: ep.VW,
                children: (0, i.jsx)(z.m, {
                    text: l,
                    children: (0, i.jsx)(h.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: ep.Md,
                        children: t,
                    }),
                }),
            }),
            (0, i.jsx)(h.E, { variant: "text-xs/normal", color: "text-subtle", children: (0, ed.up)(n) }),
        ],
    });
}
function eb(e) {
    let { language: t, setLanguage: n, align: l } = e,
        r = s.useRef(null),
        a = eu.L.useConfig({ location: "LanguageSelect" }).enabled ? ec.No : eo.Q;
    return (0, i.jsx)(m.Y, {
        targetElementRef: r,
        position: "left",
        align: l,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, i.jsx)(J.l, {
                "aria-label": ef.intl.string(ef.t.utm4qs),
                children: (0, i.jsx)("div", {
                    className: ep.md,
                    children: (0, i.jsxs)($.iS, {
                        selectionMode: "single",
                        onSelectionChange: (e) => {
                            (n(e), l());
                        },
                        options: Array.from(a).map((e) => ({ value: e, label: e, id: e })),
                        value: t,
                        children: [
                            (0, i.jsx)($.a3, { placeholder: ef.intl.string(ef.t.GofftW) }),
                            (0, i.jsx)($.X2, {}),
                        ],
                    }),
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(z.m, {
                ariaHidden: !0,
                text: ef.intl.string(ef.t.utm4qs),
                children: (0, i.jsx)(x.D, {
                    ...e,
                    className: ep.Qw,
                    "aria-label": ef.intl.string(ef.t.utm4qs),
                    children: (0, i.jsx)(X.G, { size: "sm", color: "currentColor", ref: r }),
                }),
            }),
    });
}
function eT(e) {
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
        h = s.useRef(null);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.Y, {
                targetElementRef: d,
                position: "top",
                align: "left",
                renderPopout: (e) => {
                    let { closePopout: s } = e;
                    return (0, i.jsx)(Q.W, {
                        "data-menu-migrated": !0,
                        navId: "plaintext-preview-overflow-menu",
                        onClose: s,
                        onSelect: () => {},
                        "aria-label": ef.intl.string(ef.t.PdRCRg),
                        children: (0, i.jsxs)(ee.rX, {
                            children: [
                                (0, i.jsx)(ee.Dr, {
                                    id: "download",
                                    label: ef.intl.string(ef.t["1WjMbC"]),
                                    icon: et.DownloadIcon,
                                    action: () => {
                                        (h.current?.click(), s());
                                    },
                                }),
                                (0, i.jsx)(ee.sL, {
                                    id: "word-wrap",
                                    label: ef.intl.string(ef.t.AMKNT1),
                                    checked: t,
                                    action: () => n(!t),
                                }),
                                r && eC.has(l)
                                    ? (0, i.jsx)(ee.sL, {
                                          id: "render-markdown",
                                          label: ef.intl.string(ef.t.zstmkn),
                                          checked: a,
                                          action: () => o(!a),
                                      })
                                    : null,
                            ],
                        }),
                    });
                },
                children: (e) =>
                    (0, i.jsx)(z.m, {
                        ariaHidden: !0,
                        text: ef.intl.string(ef.t["UKOtz+"]),
                        children: (0, i.jsx)(x.D, {
                            ...e,
                            className: ep.IQ,
                            "aria-label": ef.intl.string(ef.t["UKOtz+"]),
                            children: (0, i.jsx)(en.MoreHorizontalIcon, { ref: d, size: "sm", color: "currentColor" }),
                        }),
                    }),
            }),
            (0, i.jsx)(el.Anchor, {
                ref: h,
                href: u,
                download: c,
                className: ep.op,
                children: (0, i.jsx)(et.DownloadIcon, { size: "sm", color: "currentColor" }),
            }),
        ],
    });
}
function eR(e) {
    return (0, i.jsx)(z.m, {
        asContainer: !0,
        ariaHidden: !0,
        text: ef.intl.string(ef.t["0PQYk3"]),
        children: (0, i.jsx)(x.D, {
            className: ep.R1,
            "aria-label": ef.intl.string(ef.t["0PQYk3"]),
            onClick: () => {
                (0, N.openModal)((t) => (0, i.jsx)(eM, { ...e, ...t }));
            },
            children: (0, i.jsx)(ei._, { size: "sm", color: "currentColor" }),
        }),
    });
}
function eO(e) {
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
            markdownEnabled: f,
            renderMarkdown: p,
            setRenderMarkdown: x,
            bytesLeft: A,
            className: C,
        } = e,
        E = s?.split("\n"),
        I = E?.length ?? 0,
        S = r ? 100 : 6,
        v = 0 === A,
        N = f && p && eC.has(u),
        _ = "";
    (v && r && I > S ? (_ = "\n...") : v || (_ = "..."),
        "" !== _ &&
            (v
                ? (_ += " " + ef.intl.formatToPlainString(ef.t.DQnFp2, { lines: I - S }))
                : (_ += " " + ef.intl.formatToPlainString(ef.t["1+gGcK"], { formattedBytes: (0, ed.up)(A) }))));
    let j = (0, ea.sJ)(E?.slice(0, S).join("\n") ?? ""),
        b = r || S < I;
    return (0, i.jsxs)("div", {
        className: a()(C, ep.kL),
        children: [
            (0, i.jsx)(y.Ip, {
                className: ep.FS,
                children:
                    null == s
                        ? (0, i.jsx)(g.y, { className: ep.u1 })
                        : N
                          ? (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(ev, { text: j }),
                                    "" !== _
                                        ? (0, i.jsx)(h.E, {
                                              variant: "text-sm/normal",
                                              color: "text-subtle",
                                              className: ep.VX,
                                              children: _.trim(),
                                          })
                                        : null,
                                ],
                            })
                          : (0, i.jsx)(eN, { text: j + _, language: u, wordWrap: d }),
            }),
            (0, i.jsxs)("div", {
                className: ep.qr,
                role: "group",
                "aria-label": ef.intl.string(ef.t.TlXA8e),
                children: [
                    b ? (0, i.jsx)(e_, { expanded: r, setExpanded: o, numLines: I, isWholeFile: v }) : null,
                    (0, i.jsx)(ej, { fileName: n, fileSize: l }),
                    (0, i.jsx)("div", { className: ep.Kb }),
                    (0, i.jsx)(eb, { language: u, setLanguage: c, align: "top" }),
                    null != s
                        ? (0, i.jsx)(eR, {
                              url: t,
                              fileName: n,
                              fileSize: l,
                              language: u,
                              wordWrap: d,
                              markdownEnabled: f,
                              renderMarkdown: p,
                              fileContents: s,
                              bytesLeft: A,
                          })
                        : null,
                    (0, i.jsx)(eT, {
                        wordWrap: d,
                        setWordWrap: m,
                        language: u,
                        markdownEnabled: f,
                        renderMarkdown: p,
                        setRenderMarkdown: x,
                        url: t,
                        fileName: n,
                    }),
                ],
            }),
        ],
    });
}
function eM(e) {
    let {
            url: t,
            fileName: n,
            fileSize: l,
            transitionState: r,
            language: a,
            wordWrap: o,
            markdownEnabled: u,
            renderMarkdown: d,
            fileContents: m,
            bytesLeft: f,
            onClose: p,
        } = e,
        [x, A] = s.useState(a),
        [C, E] = s.useState(o),
        [I, S] = s.useState(d),
        v = s.useRef(null),
        N = u && I && eC.has(x),
        _ = 0 !== f ? `... ${ef.intl.formatToPlainString(ef.t["1+gGcK"], { formattedBytes: (0, ed.up)(f) })}` : "";
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
        (0, i.jsx)(es.d, {
            transitionState: r,
            "aria-label": ef.intl.string(ef.t["qxQjc+"]),
            size: "xxl",
            onClose: p,
            children: (0, i.jsxs)("div", {
                className: ep.jE,
                children: [
                    (0, i.jsx)(y.Ip, {
                        className: ep.ot,
                        children:
                            null == m
                                ? (0, i.jsx)(g.y, { className: ep.u1 })
                                : (0, i.jsx)("div", {
                                      ref: v,
                                      children: N
                                          ? (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(ev, { text: m }),
                                                    "" !== _
                                                        ? (0, i.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: ep.VX,
                                                              children: _,
                                                          })
                                                        : null,
                                                ],
                                            })
                                          : (0, i.jsx)(eN, { text: m + _, language: x, wordWrap: C }),
                                  }),
                    }),
                    (0, i.jsx)("div", {
                        role: "group",
                        "aria-label": ef.intl.string(ef.t.TlXA8e),
                        children: (0, i.jsxs)(h.E, {
                            color: "text-default",
                            className: ep.Hx,
                            variant: "text-sm/normal",
                            children: [
                                (0, i.jsx)(ej, { fileName: n, fileSize: l }),
                                (0, i.jsx)("div", { className: ep.Kb }),
                                (0, i.jsx)(eb, { language: x, setLanguage: A, align: "bottom" }),
                                (0, i.jsx)(eT, {
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
let eL = s.memo(
    function (e) {
        let { url: t, fileName: n, fileSize: l, contentType: r, className: o, onClick: u, onContextMenu: c } = e,
            [d, h] = s.useState(!1),
            [m, f] = s.useState(n.split(".").slice(-1)[0]),
            [p, g] = s.useState(!1),
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
                                    u = parseInt(s.split("/")[1]) - parseInt(a);
                                (r(0 === u ? i : i.slice(0, -1)), o(u), l(!1));
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
            return (0, i.jsx)(eO, {
                url: t,
                fileName: n,
                fileSize: l,
                fileContents: C,
                bytesLeft: E,
                expanded: d,
                setExpanded: h,
                language: m,
                setLanguage: f,
                wordWrap: p,
                setWordWrap: g,
                markdownEnabled: e,
                renderMarkdown: x,
                setRenderMarkdown: A,
                className: a()(ep.mr, o),
            });
        }
        return eC.has(m) ? (0, i.jsx)(em, { location: "PlaintextFilePreview", children: y }) : y(!1);
    },
    (e, t) => e.url === t.url && e.className === t.className,
);
var ek = n(863922),
    ew = n(822074),
    eP = n(534890),
    eD = n(442433),
    eU = n(640708),
    eG = n(941971),
    eV = n(707539),
    eF = n(576705),
    eH = n(573163),
    eB = n(340833),
    eW = n(913642),
    eK = n(935208),
    ez = n(453302),
    eZ = n(97808),
    eY = n(778712),
    eq = n(707606),
    eJ = n(403362),
    e$ = n(439511);
let eX = (0, eq.A)(function (e) {
        let { member: t, empty: n, guildId: l } = e;
        return n || null == t
            ? (0, i.jsx)("div", { className: e$.pO })
            : (0, i.jsx)("div", {
                  className: e$.pO,
                  children: (0, i.jsx)(eZ.eu, {
                      src: t.getAvatarURL(l, 16),
                      "aria-label": t.username,
                      size: eY._3.SIZE_16,
                      className: e$.pO,
                  }),
              });
    }),
    eQ = function (e) {
        let { partySize: t, members: n, minAvatarsShown: l = 1, maxAvatarsShown: s = 2, guildId: r } = e,
            { totalSize: a, knownSize: o } = t;
        if (a < l) return null;
        let c = u()(n)
                .filter(eJ.Vq)
                .take(s)
                .map((e) => (0, i.jsx)(eX, { member: e, guildId: r }, e.id))
                .value(),
            d = a - o;
        for (let e = 0; e < d && c.length < s; e++)
            c.push((0, i.jsx)(eX, { empty: !0, guildId: r }, `empty-member-${e}`));
        let h = Math.max(Math.min(a - c.length, 99), 0);
        if (1 === h) {
            let e = n[s];
            c.push((0, i.jsx)(eX, { member: e, guildId: r }, e.id));
        }
        return (0, i.jsx)("div", {
            className: e$.iE,
            children: (0, i.jsxs)("div", {
                className: e$.S3,
                children: [c, h > 1 ? (0, i.jsxs)("div", { className: e$.Hi, children: ["+", h] }) : null],
            }),
        });
    };
var e0 = n(303727),
    e1 = n(681939);
function e2() {
    return (0, i.jsxs)("div", {
        className: e1.kL,
        children: [
            (0, i.jsxs)("div", {
                className: e1.zc,
                children: [
                    (0, i.jsx)("div", {
                        className: e1.Kk,
                        children: (0, i.jsx)(C.K, {
                            size: "custom",
                            color: "currentColor",
                            className: e1.l1,
                            width: 28,
                            height: 28,
                        }),
                    }),
                    (0, i.jsx)(e0.A, { className: e1.uf }),
                ],
            }),
            (0, i.jsx)(E.D, {
                className: e1.wx,
                variant: "heading-xl/semibold",
                children: ef.intl.string(ef.t.yJHJei),
            }),
            (0, i.jsx)(h.E, {
                className: e1.Qq,
                color: "text-default",
                variant: "text-md/normal",
                children: ef.intl.string(ef.t.p2dIh6),
            }),
        ],
    });
}
var e3 = n(652215),
    e8 = n(670455),
    e6 = n(750557);
function e5(e) {
    let { summary: t, channel: l, members: r, guildId: a, unread: o, onClick: u } = e,
        [c, m] = s.useState(!1),
        f = (0, eV.aK)(eK.default.extractTimestamp(t.startId)),
        p = (0, d.bG)([ew.A], () => ew.A.summaryFeedback(t));
    function g(e, n) {
        (e.stopPropagation(), (0, ez.A)({ summary: t, channel: l, rating: n }));
    }
    let A = eF.A.can(e3.xBc.MANAGE_MESSAGES, l);
    return (0, i.jsxs)(x.D, {
        className: e6.kL,
        onClick: u,
        onContextMenu: function (e) {
            A &&
                (0, eD.L3)(e, async () => {
                    let { default: e } = await n.e("443921").then(n.bind(n, 304232));
                    return (n) => (0, i.jsx)(e, { ...n, summary: t });
                });
        },
        onMouseEnter: () => m(!0),
        onMouseLeave: () => m(!1),
        children: [
            (0, i.jsx)(eG.A, { hovered: c, unread: o, className: e6.dM }),
            (0, i.jsx)("div", {
                className: e6.uV,
                children: (0, i.jsxs)("div", {
                    className: e6.Hw,
                    children: [
                        (0, i.jsx)(h.E, {
                            className: e6.vE,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: f,
                        }),
                        (0, i.jsx)(eU.A, { height: 4, width: 4, "aria-hidden": "true", className: e6.Om }),
                        (0, i.jsx)(eP.ChatIcon, { size: "xxs", color: "currentColor", className: e6.Kk }),
                        (0, i.jsx)(h.E, {
                            className: e6.U9,
                            color: "interactive-text-default",
                            variant: "text-xs/normal",
                            children: t.count,
                        }),
                        r.length > 0 &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(eU.A, { height: 4, width: 4, "aria-hidden": "true", className: e6.Om }),
                                    (0, i.jsx)(eQ, {
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
                    className: e6.p_,
                    children: [
                        (0, i.jsx)(x.D, {
                            onClick: (e) => g(e, e8.P0.GOOD),
                            children: (0, i.jsx)(eW.A, { className: e6.O1, width: 12, height: 12 }),
                        }),
                        (0, i.jsx)(x.D, {
                            onClick: (e) => g(e, e8.P0.BAD),
                            children: (0, i.jsx)(eB.A, { className: e6.O1, width: 12, height: 12 }),
                        }),
                    ],
                }),
            (0, i.jsx)(h.E, { color: "text-strong", variant: "text-sm/semibold", className: e6.DD, children: t.topic }),
            (0, i.jsx)(h.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: e6.VA,
                children: t.summShort,
            }),
        ],
    });
}
function e7(e) {
    let { summaries: t, summariesMembers: n, channel: l, selectTopic: r, setOpen: a } = e,
        o = (0, d.bG)([eH.Ay], () => eH.Ay.getOldestUnreadMessageId(l.id)),
        u = s.useCallback(
            (e) => {
                (r(e), a(!1));
            },
            [r, a],
        );
    return t.length < 1
        ? (0, i.jsx)(e2, {})
        : (0, i.jsx)(i.Fragment, {
              children: t.map((e, t) => {
                  let s = n[t] ?? [];
                  return (0, i.jsx)(
                      e5,
                      {
                          summary: e,
                          channel: l,
                          members: s,
                          guildId: l.guild_id,
                          unread: null != o && eK.default.compare(e.endId, o) > 0,
                          onClick: () => u(t),
                      },
                      t,
                  );
              }),
          });
}
var e4 = n(885386),
    e9 = n(113494),
    te = n(782134),
    tt = n(775602),
    tn = n(228366),
    tl = n(713021);
let ti = s.forwardRef(function (e, t) {
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
var ts = n(20504),
    tr = n(625494),
    ta = n(927813),
    to = n(824744);
n(508300);
var tu = n(661531),
    tc = n(602853),
    td = n(765671);
function th(e, t) {
    let n = e.getBoundingClientRect();
    return Math.min(1, Math.max(0, (t.clientX - n.left) / n.width));
}
var tm = n(998304),
    tf = n(284009),
    tp = n.n(tf),
    tg = n(722872);
class tx {
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
              ? tg.easeOutQuint(e, this.animationDetails.lastValue, this.value, t)
              : tg.easeOutBack(e, this.animationDetails.lastValue, this.value, t, 4);
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
let tA = [0.75, 1, 1.5, 2];
var tC = n(587159);
let tE = [0, 0, 0, 0, 0];
function tI(e) {
    let { showAll: t, currentTime: n, duration: l, numSegments: i } = e;
    return t ? i : Math.max(0, Math.round((n / l) * i));
}
function ty(e) {
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
function tS(e, t, n) {
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
function tv(e, t, n, l) {
    if (null == l) return [t, !1];
    let i = Math.min((n - l) / 200, 1);
    return 1 === i ? [t, !1] : [(0, tm.De)(e, t, i), !0];
}
function tN(e) {
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
        { ref: p, width: g } = (0, td.Ay)(),
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
                                if ((tp()(e.length >= t, "Waveform smaller than samples"), e.length === t)) return e;
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
                    })(t ?? [], n) ?? tE,
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
            let n = (0, tc.r)(tu.A.colors.BACKGROUND_MOD_MUTED).hex(),
                l = (0, tc.r)(tu.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
                i = (0, tc.r)(tu.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
                s = (0, tc.r)(tu.A.unsafe_rawColors.BRAND_430).hex(),
                r = (0, tc.r)(tu.A.unsafe_rawColors.WHITE).hex(),
                a = t ? s : n,
                [o, u] = tS(a, t, e),
                [c, d] = tS(t ? r : e ? i : l, t, e),
                [h, m] = tS(e ? a : l, t, e);
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
    (s.useEffect(() => {
        O.current = R;
    }),
        s.useEffect(() => {
            let { currentTime: e, duration: t, played: n } = O.current,
                l = tI({ showAll: !n, currentTime: e, duration: t, numSegments: C.length });
            A.current = C.map((e, t) => new tx(t < l ? e : 0));
        }, [C]),
        s.useEffect(() => {
            let e = A.current;
            if (null == e) return;
            let t = tI({ showAll: !c, currentTime: o, duration: u, numSegments: C.length });
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
                    ((E.current !== c || I.current !== d) && ((E.current = c), (I.current = d), (y.current = n)),
                        null != y.current && n > y.current + 200 && (y.current = null));
                    let a = l.height / S;
                    (i.clearRect(0, 0, l.width, l.height), i.beginPath());
                    let [o, u] = tv(v, N, n, y.current);
                    ((r = r || u), (i.fillStyle = o));
                    for (let e = 0; e < C.length; e++)
                        ty({
                            context: i,
                            devicePixelRatio: S,
                            canvasHeight: a,
                            segmentValue: C[e],
                            segmentIndex: e,
                            constrainMin: !0,
                        });
                    i.fill();
                    let [h, m] = tv(b, T, n, y.current);
                    r = r || m;
                    let [f, g] = tv(_, j, n, y.current);
                    r = r || g;
                    for (let e = 0; e < s.length; e++) {
                        let t = s[e],
                            n = Math.max(t.getCurrentValue(), C[e] - 0.1);
                        (i.beginPath(),
                            (i.fillStyle = t.isReset ? h : f),
                            ty({
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
        }, [p, S, C, g, o, u, c, d, v, N, _, j, b, T]));
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
                            (window.removeEventListener("mouseup", e), window.removeEventListener("mousemove", l));
                        }
                    );
                function e() {
                    (i?.(), a(!1));
                }
                function l(e) {
                    let l = t.current;
                    null != l && n?.(th(l, e));
                }
            }, [t, r, i, n]),
            [
                r,
                s.useCallback(
                    (e) => {
                        e.preventDefault();
                        let i = t.current;
                        null != i && (a(!0), l?.(), n?.(th(i, e)));
                    },
                    [t, l, n],
                ),
            ]
        );
    })({ ref: p, onDrag: h, onDragStart: m, onDragEnd: f });
    return (0, i.jsx)("canvas", {
        onMouseDown: M,
        className: a()(tC.J, l),
        style: { width: x },
        ref: p,
        height: 32 * window.devicePixelRatio,
        width: (g ?? 0) * window.devicePixelRatio,
    });
}
var t_ = n(672245);
let tj = s.lazy(() => n.e("594436").then(n.bind(n, 660207)));
function tb(e) {
    let { played: t, duration: n, currentTime: l } = e,
        s = null == n ? "--:--" : t ? (0, F.rB)(Math.ceil(n - l)) : (0, F.rB)(Math.ceil(n));
    return (0, i.jsx)(h.E, { variant: "text-sm/normal", className: t_.p0, tabularNumbers: !0, children: s });
}
let tT = s.memo(function (e) {
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
        I = s.useMemo(() => (null != C ? tl.Ay.getPlaybackPosition(C) : 0), [C]),
        y = (0, d.bG)([tl.Ay], () => tl.Ay.getPlaybackRate(tl.k0.VOICE_MESSAGE)),
        [S, v] = s.useState(I > 0),
        [N, _] = s.useState(I),
        [j, b] = s.useState(c),
        [T, R] = s.useState(!1),
        [O, M] = s.useState(!1),
        [L, k] = s.useState(!1),
        [w, P] = s.useState(!1),
        [D, U] = s.useState("none"),
        [G, V] = s.useState(() => ("function" == typeof l ? l() : l)),
        F = s.useRef(void 0),
        H = s.useCallback(() => {
            (M((e) => !e), P(!0));
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
                    tn.h.dispatch({ type: "MEDIA_PLAYBACK_POSITION_UPDATE", cacheKey: C, position: e, duration: c });
            },
            [C, c],
        ),
        z = s.useCallback(() => {
            (M(!1),
                null == F.current &&
                    (F.current = setTimeout(() => {
                        (v(!1), P(!1), (F.current = void 0));
                    }, 500)));
        }, []),
        Z = s.useCallback(() => {
            L || (K(0), z());
        }, [z, L, K]),
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
                let t = (0, to.w)(e, 1);
                (R(0 === t), V(t), r?.(t));
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
        en = { played: w, currentTime: N, onPause: g, onPlay: p },
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
                    !L &&
                    (e = setInterval(() => {
                        K(E.current?.currentTime ?? 0);
                    }, ta.A.Millis.SECOND)),
                () => {
                    null != e && clearInterval(e);
                }
            );
        }, [O, L, K]),
        s.useEffect(() => {
            let { played: e, currentTime: t, onPause: n, onPlay: l } = el.current;
            if (e || O)
                if (O) ((et.current = performance.now()), l?.(!1, t, (E.current?.duration ?? 0) * ta.A.Millis.SECOND));
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
                    tr._.dispatch(e3.jej.VOICE_MESSAGE_PLAYBACK_STARTED, { src: n }),
                    tr._.subscribe(e3.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e),
                    () => {
                        tr._.unsubscribe(e3.jej.VOICE_MESSAGE_PLAYBACK_STARTED, e);
                    }
                );
            function e(e) {
                let { src: t } = e;
                n !== t && M(!1);
            }
        }, [n, O, M]));
    let ei = O ? e9.PauseIcon : te.PlayIcon,
        es = O ? ef.intl.string(ef.t["3XohGn"]) : ef.intl.string(ef.t.AlHqHT),
        er = ef.intl.formatToPlainString(ef.t.LgCPMt, { playbackRate: y }),
        ea = `${y.toString().replace(/^0/, "")}X`;
    t =
        "Safari" === platform.name
            ? (0, i.jsx)(s.Suspense, {
                  children: (0, i.jsx)(tj, {
                      ref: E,
                      className: t_.Zn,
                      src: n,
                      preload: D,
                      playing: O && !L,
                      onEnded: Z,
                      onLoadedMetadata: W,
                      onError: q,
                      muted: T,
                      volume: G,
                      playbackRate: y,
                  }),
              })
            : (0, i.jsx)(ti, {
                  ref: E,
                  className: t_.Zn,
                  controls: !1,
                  preload: D,
                  onEnded: Z,
                  onLoadedMetadata: W,
                  onError: q,
                  muted: T,
                  volume: G,
                  playbackRate: y,
                  playing: O && !L,
                  children: (0, i.jsx)("source", { src: n }),
              });
    let eo = (0, d.bG)([tt.Ay], () => tt.Ay.useReducedMotion);
    return (0, i.jsxs)("div", {
        className: a()(t_.kL, { [t_.he]: O }),
        onMouseEnter: B,
        role: "region",
        "aria-label": ef.intl.string(ef.t.c8U6xd),
        children: [
            (0, i.jsx)("div", {
                className: t_.Kl,
                children: (0, i.jsx)("div", { className: a()(t_.fq, { [t_.VN]: eo }) }),
            }),
            (0, i.jsx)(x.D, {
                className: t_.k0,
                onClick: H,
                "aria-label": es,
                children: (0, i.jsx)(ei, { className: t_.uZ, color: "currentColor", size: "sm" }),
            }),
            (0, i.jsx)(tN, {
                className: t_.ou,
                waveform: u,
                currentTime: N,
                duration: j ?? 1,
                playing: O,
                played: S,
                onDrag: ee,
                onDragStart: X,
                onDragEnd: Q,
            }),
            (0, i.jsx)(tb, { played: S, currentTime: N, duration: j }),
            (0, i.jsx)(x.D, {
                className: t_.LJ,
                onClick: () => {
                    var e, t;
                    let n;
                    return (
                        (n = (tA.indexOf(y) + 1) % tA.length),
                        void ((e = tA[n]),
                        (t = tl.k0.VOICE_MESSAGE),
                        tn.h.dispatch({ type: "MEDIA_PLAYBACK_RATE_UPDATE", rate: e, playbackType: t }))
                    );
                },
                "aria-label": er,
                children: (0, i.jsx)(h.E, { variant: "text-xs/semibold", className: t_.Sn, children: ea }),
            }),
            (0, i.jsx)(ts.A, {
                className: t_.bk,
                iconClassName: t_._j,
                iconColor: "currentColor",
                sliderWrapperClassName: t_.MQ,
                muted: T,
                value: (0, to.M)(G, 1),
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
var tR = n(287809),
    tO = n(147925),
    tM = n(174459),
    tL = n(587481),
    tk = n(838541),
    tw = n(521732),
    tP = n(650583),
    tD = n(959760);
let tU = { delay: 300, position: "top" };
function tG(e) {
    return (t) => {
        (e?.(t), (0, tL.ls)(t));
    };
}
function tV(e) {
    return (t) => {
        (e?.(t), (0, tL.y5)(t));
    };
}
function tF(e) {
    let { altText: t, altButtonRef: n } = e;
    return (0, i.jsxs)("div", {
        role: "dialog",
        "aria-label": ef.intl.string(ef.t.fSiQ3A),
        className: tD.obt,
        tabIndex: -1,
        onKeyDown: (e) => {
            e.key === tP.N$.Escape && setTimeout(() => n.current?.focus(), 0);
        },
        children: [
            (0, i.jsx)(h.E, {
                variant: "text-xs/bold",
                color: "none",
                tag: "span",
                className: tD.k_Z,
                children: ef.intl.string(ef.t.fSiQ3A),
            }),
            (0, i.jsx)(h.E, { variant: "text-md/normal", color: "none", tag: "span", className: tD.a7V, children: t }),
        ],
    });
}
function tH(e) {
    let {
            alt: t,
            controlsVisible: n = !0,
            disableAltTextDisplay: l = !1,
            hiddenSpoilers: r = !1,
            reducedSizeAltTextButton: o = !1,
        } = e,
        [u, c] = s.useState(!1),
        d = s.useRef(null);
    return (n || u) && !l && e4._z.getSetting() && null != t && "" !== t && !0 !== r
        ? (0, i.jsx)("div", {
              className: tD.NOQ,
              children: (0, i.jsx)(m.Y, {
                  targetElementRef: d,
                  animation: m.Y.Animation.FADE,
                  renderPopout: () => (0, i.jsx)(tF, { altText: t, altButtonRef: d }),
                  children: (e) =>
                      (0, i.jsx)(f.vN, {
                          offset: 4,
                          children: (0, i.jsx)("button", {
                              ...e,
                              type: "button",
                              ref: d,
                              "aria-label": ef.intl.string(ef.t.fSiQ3A),
                              onMouseEnter: () => c(!0),
                              onMouseLeave: () => c(!1),
                              className: a()(tD.DV5, { [tD.yZ5]: !0, [tD.I54]: o }),
                              children: ef.intl.string(ef.t.jCV1Tz),
                          }),
                      }),
              }),
          })
        : null;
}
function tB(e) {
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
        x = tG(t),
        A = tV(n);
    ((l = null == l ? tL.v1 : l), (r = null == r ? tL.uj : r));
    let [C, E] = s.useState(!0),
        I = f === tk.dG.MOSAIC || !0 === m,
        y = C && !c && e4._z.getSetting() && null != a && "" !== a && !0 !== d;
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
                renderLinkComponent: tY,
                renderOverlayContent: u,
                volume: l,
            }),
            null != o && o(),
            I &&
                (0, i.jsx)(tH, {
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
                    className: tD.R5R,
                    children: a,
                }),
        ],
    });
}
function tW(e) {
    return (0, i.jsx)(tB, { ...e });
}
function tK(e) {
    let {
            onVolumeChange: t,
            volume: n,
            onMute: l,
            onVolumeShow: r,
            onVolumeHide: a,
            renderAdjacentContent: o,
            ...u
        } = e,
        c = tG(t),
        d = tV(l);
    return (
        (n = null == n ? tL.v1 : n),
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
                    renderLinkComponent: tY,
                }),
                null != o && o(),
            ],
        })
    );
}
function tz(e) {
    let { onVolumeChange: t, volume: n, onMute: l, ...s } = e,
        r = tG(t),
        a = tV(l);
    return ((n = null == n ? tL.v1 : n), (0, i.jsx)(tT, { ...s, onVolumeChange: r, onMute: a, volume: n }));
}
function tZ(e) {
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
        x = d === tk.dG.MOSAIC || !0 === g,
        A = !u && e4._z.getSetting() && null != t && "" !== t && !0 !== n,
        C = s.createRef();
    return (0, i.jsxs)("div", {
        className: a()(tD.foG, r),
        children: [
            (0, i.jsxs)("div", {
                className: a()(tD.ZSk, o),
                style: p,
                children: [(0, i.jsx)(M, { ...e }), null != l && l()],
            }),
            x &&
                A &&
                (0, i.jsx)("div", {
                    className: tD.Y1Z,
                    children: (0, i.jsx)(m.Y, {
                        targetElementRef: C,
                        animation: m.Y.Animation.FADE,
                        renderPopout: () => (0, i.jsx)(tF, { altText: t, altButtonRef: C }),
                        children: (e) =>
                            (0, i.jsx)(f.vN, {
                                offset: 4,
                                children: (0, i.jsx)("button", {
                                    ...e,
                                    type: "button",
                                    ref: C,
                                    "aria-label": ef.intl.string(ef.t.fSiQ3A),
                                    className: a()(tD.DV5, { [tD.I54]: c }),
                                    children: ef.intl.string(ef.t.jCV1Tz),
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
                    className: tD.R5R,
                    children: t,
                }),
        ],
    });
}
function tY(e) {
    return (0, i.jsx)(L.A, { ...e });
}
function tq(e) {
    let { renderAdjacentContent: t, ...n } = e;
    return (0, i.jsxs)(s.Fragment, { children: [(0, i.jsx)(eL, { ...n }), null != t && t()] });
}
function tJ(e) {
    return (0, i.jsx)(P.A, { ...e });
}
var t$ = (((l = {})[(l.OLD_MESSAGES = 0)] = "OLD_MESSAGES"), (l[(l.REPLY = 1)] = "REPLY"), l);
let tX = (e) => {
    let { type: t = 0, onClick: n, className: l } = e;
    return (0, i.jsx)(D.Y.Consumer, {
        children: (e) =>
            e.disableInteractions
                ? null
                : (0, i.jsxs)("div", {
                      onClick: n,
                      className: a()(tD.Sg2, l),
                      children: [
                          (0, i.jsx)("div", {
                              className: tD.$IB,
                              children: (function (e) {
                                  switch (e) {
                                      case 0:
                                          return ef.intl.string(ef.t["4EvBbw"]);
                                      case 1:
                                          return ef.intl.string(ef.t["1J6Xq7"]);
                                      default:
                                          return (0, eJ.xb)(e);
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
                                                    return ef.intl.string(ef.t.gpoQsB);
                                                case 1:
                                                    return ef.intl.string(ef.t.k3RM8z);
                                                default:
                                                    return (0, eJ.xb)(e);
                                            }
                                        })(t),
                                        onClick: n,
                                    }),
                                })
                              : (0, i.jsx)(g.y, {
                                    type: g.y.Type.PULSING_ELLIPSIS,
                                    className: tD.u1E,
                                    itemClassName: tD.$N2,
                                }),
                      ],
                  }),
    });
};
function tQ(e) {
    let { onClick: t, loading: n, className: l } = e;
    return (0, i.jsx)(D.Y.Consumer, {
        children: (e) =>
            e.disableInteractions
                ? null
                : (0, i.jsxs)(x.D, {
                      className: a()(tD._5m, l),
                      onClick: t,
                      focusProps: { offset: { top: 4, right: 4, bottom: 12, left: 4 } },
                      children: [
                          (0, i.jsx)("div", { className: tD.$IB, children: ef.intl.string(ef.t["1zUvlw"]) }),
                          n
                              ? (0, i.jsx)(g.y, {
                                    type: g.y.Type.PULSING_ELLIPSIS,
                                    className: tD.u1E,
                                    itemClassName: tD.$N2,
                                })
                              : (0, i.jsx)("div", {
                                    className: a()(tD.hQH, tD.d3o),
                                    children: ef.intl.string(ef.t.TdQXA8),
                                }),
                      ],
                  }),
    });
}
function t0(e) {
    let { content: t, channelId: n } = e,
        [l] = s.useState(() => (0, U.Ld)("NewMessagesBarJumpToNewMessages_")),
        r = s.useCallback(() => {
            let e = eH.Ay.ackMessageId(n);
            null != e
                ? S.A.jumpToMessage({ channelId: n, messageId: e, offset: 1, context: "Mark As Read" })
                : S.A.jumpToMessage({
                      channelId: n,
                      messageId: eK.default.castChannelIdAsMessageId(n),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [n]),
        o = s.useCallback(() => {
            (0, v.ack)(n, {
                section: e3.JJy.NEW_MESSAGES_BANNER,
                object: e3.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: e3.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [n]),
        { disableInteractions: u } = s.useContext(D.Y);
    return u
        ? null
        : (0, i.jsxs)("div", {
              className: a()(tD.ebV, { [tD.y71]: u }),
              children: [
                  (0, i.jsx)(f.vN, {
                      offset: 4,
                      children: (0, i.jsx)("button", {
                          type: "button",
                          className: tD.$IB,
                          onClick: r,
                          "aria-label": ef.intl.string(ef.t.z0Mkp3),
                          "aria-describedby": l,
                          children: (0, i.jsx)("span", { id: l, className: tD.Lnh, children: t }),
                      }),
                  }),
                  (0, i.jsx)("div", {
                      className: tD._ov,
                      children: (0, i.jsx)(f.vN, {
                          offset: 4,
                          children: (0, i.jsxs)("button", {
                              type: "button",
                              onClick: o,
                              className: tD.hQH,
                              children: [
                                  (0, i.jsx)("span", { className: tD.vE$, children: ef.intl.string(ef.t.e6RscS) }),
                                  (0, i.jsx)(A.M, { size: "md", color: "currentColor", className: tD.t3N }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function t1(e) {
    let { channel: t, content: n, scrollManager: l } = e,
        { disableInteractions: r } = s.useContext(D.Y),
        [o, m] = s.useState(null),
        f = s.useRef(null),
        [p, g] = s.useState(null),
        N = s.useRef(null),
        _ = (0, d.yK)([ew.A], () => ew.A.summaries(t.id) ?? [], [t]),
        j = (0, w.Ay)(_);
    s.useEffect(() => {
        u().isEqual(j, _) ||
            tM.default.track(e3.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
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
            [tR.default],
            () => _?.map((e) => e.people?.map((e) => tR.default.getUser(e) ?? null).filter(eJ.Vq)) ?? [],
            [_],
            t2,
        ),
        T = (0, d.bG)([ew.A], () => ew.A.visibleSummaryIndex()) ?? -1,
        R = _?.[T]?.topic;
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
                        (0, ek.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        L = s.useCallback(
            (e) => {
                (M(), O(e));
            },
            [O, M],
        ),
        [P, U] = s.useState(!1),
        V = s.useCallback(() => {
            (tM.default.track(e3.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tw.eh.PILL_DROPDOWN,
                    i = _[e];
                null != i &&
                    ((0, ek.sK)(t.id, i.id),
                    (0, ek.C6)(t.id, i.id),
                    l.removeAutomaticAnchorCallback(L),
                    l.addScrollCompleteCallback(function e() {
                        (l.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                l.addAutomaticAnchorCallback(L, !1);
                            }, 100));
                    }),
                    tM.default.track(e3.HAw.SUMMARIES_TOPIC_CLICKED, {
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
                    tM.default.track(e3.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
            l.addAutomaticAnchorCallback(L),
            () => {
                l.removeAutomaticAnchorCallback(L);
            }
        ),
        [l, L],
    ),
        s.useEffect(() => {
            (0, ek.$T)(t.id);
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
            () => (0, i.jsx)(e7, { channel: t, summaries: _, summariesMembers: b, selectTopic: F, setOpen: H }),
            [_, b, F, H, t],
        ),
        K = s.useCallback(() => {
            let e = eH.Ay.ackMessageId(t.id);
            null != e
                ? S.A.jumpToMessage({ channelId: t.id, messageId: e, offset: 1, context: "Mark As Read" })
                : S.A.jumpToMessage({
                      channelId: t.id,
                      messageId: eK.default.castChannelIdAsMessageId(t.id),
                      offset: 1,
                      context: "Mark As Read",
                  });
        }, [t.id]),
        z = s.useCallback(() => {
            (0, v.ack)(t.id, {
                section: e3.JJy.NEW_TOPICS_BAR,
                object: e3.ZSU.MARK_CHANNEL_AS_READ_BUTTON,
                objectType: e3.AnalyticsObjectTypes.ACK_MANUAL,
            });
        }, [t.id]),
        Z = ef.intl.string(ef.t["38qwgO"]);
    return (
        _.length > 0 && (Z = "" === R || null == R ? ef.intl.string(ef.t.DwnFuG) : R),
        r
            ? null
            : (0, i.jsxs)("div", {
                  ref: f,
                  className: a()(tD.dw5, tD.jht),
                  children: [
                      (0, i.jsx)("div", {
                          className: tD.qmJ,
                          children: (0, i.jsx)(x.D, {
                              className: tD.TQl,
                              "aria-label": ef.intl.string(ef.t.RT3MPz),
                              onClick: V,
                              children: (0, i.jsxs)("div", {
                                  className: a()({ [tD.hNz]: !P, [tD.Apq]: P }),
                                  children: [
                                      (0, i.jsx)(C.K, { size: "xs", color: "currentColor", className: tD.VdQ }),
                                      (0, i.jsx)(h.E, {
                                          variant: "text-sm/medium",
                                          className: a()(tD.$Uj, tD.lc3),
                                          children: Z,
                                      }),
                                      (0, i.jsx)(tO.A, {
                                          width: 16,
                                          height: 16,
                                          direction: tO.A.Directions.DOWN,
                                          className: tD.HBW,
                                      }),
                                  ],
                              }),
                          }),
                      }),
                      (0, i.jsx)(x.D, { onClick: K, className: tD.ijE, children: n }),
                      (0, i.jsxs)(x.D, {
                          onClick: z,
                          className: a()(tD.hQH, tD.NXP),
                          children: [
                              (0, i.jsx)("div", { className: tD.$Uj, children: ef.intl.string(ef.t.e6RscS) }),
                              (0, i.jsx)(A.M, { size: "md", color: "currentColor", className: tD.t3N }),
                          ],
                      }),
                      P &&
                          (0, i.jsxs)("div", {
                              className: tD.A1T,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: tD.kee,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: tD.Ney,
                                              children: [
                                                  (0, i.jsx)(C.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: tD.vlb,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, i.jsx)(E.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: ef.intl.string(ef.t.q21fUr),
                                                  }),
                                                  (0, i.jsx)(G.A, { className: tD.Zxm }),
                                              ],
                                          }),
                                          (0, i.jsx)(x.D, {
                                              "aria-label": ef.intl.string(ef.t.cpT0Cq),
                                              onClick: V,
                                              className: tD.oX1,
                                              children: (0, i.jsx)(I.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(y.Ip, { ref: N, className: tD.Pei, fade: !0, children: W }),
                              ],
                          }),
                  ],
              })
    );
}
function t2(e, t) {
    return (
        null != t &&
        e.length === t.length &&
        !e.some((e, n) => {
            var l;
            return null == (l = t[n]) || e.length !== l.length || !!e.some((e, t) => l[t] !== e);
        })
    );
}
function t3(e) {
    let { channel: t, scrollManager: n } = e,
        { disableInteractions: l } = s.useContext(D.Y),
        [r, o] = s.useState(null),
        m = s.useRef(null),
        [f, p] = s.useState(null),
        g = s.useRef(null),
        A = (0, d.yK)([ew.A], () => ew.A.summaries(t.id) ?? [], [t]),
        v = (0, w.Ay)(A);
    s.useEffect(() => {
        u().isEqual(v, A) ||
            tM.default.track(e3.HAw.SUMMARIES_TOPICS_PILL_VIEWED, {
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
            [tR.default],
            () => A?.map((e) => e.people?.map((e) => tR.default.getUser(e) ?? null).filter(eJ.Vq)) ?? [],
            [A],
            t2,
        ),
        _ = (0, d.bG)([ew.A], () => ew.A.visibleSummaryIndex()) ?? -1,
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
                        (0, ek.C6)(null);
                    },
                    1200,
                    { trailing: !1 },
                ),
            [],
        ),
        M = s.useCallback(
            (e) => {
                (O(), R(e));
            },
            [R, O],
        ),
        [L, P] = s.useState(!1),
        U = s.useCallback(() => {
            (tM.default.track(e3.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
                P(!L));
        }, [L, A, P, t]),
        V = s.useCallback(
            function (e) {
                let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tw.eh.PILL_DROPDOWN,
                    i = A[e];
                null != i &&
                    ((0, ek.sK)(t.id, i.id),
                    (0, ek.C6)(t.id, i.id),
                    n.removeAutomaticAnchorCallback(M),
                    n.addScrollCompleteCallback(function e() {
                        (n.removeScrollCompleteCallback(e),
                            setTimeout(() => {
                                n.addAutomaticAnchorCallback(M, !1);
                            }, 100));
                    }),
                    tM.default.track(e3.HAw.SUMMARIES_TOPIC_CLICKED, {
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
            [A, t, M, n],
        ),
        F = s.useCallback(() => {
            V(_ - 1, tw.eh.PILL_NEXT_ARROW);
        }, [V, _]),
        H = s.useCallback(() => {
            V(_ + 1, tw.eh.PILL_PREVIOUS_ARROW);
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
                    tM.default.track(e3.HAw.SUMMARIES_TOPICS_PILL_TOGGLED, {
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
    (s.useEffect(
        () => (
            n.addAutomaticAnchorCallback(M),
            () => {
                n.removeAutomaticAnchorCallback(M);
            }
        ),
        [n, M],
    ),
        s.useEffect(() => {
            (0, ek.$T)(t.id);
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
        () => (0, i.jsx)(e7, { channel: t, summaries: A, summariesMembers: N, selectTopic: V, setOpen: B }),
        [A, N, V, B, t],
    );
    if (!(0, d.bG)([ew.A], () => ew.A.shouldShowTopicsBar())) return null;
    let z = ef.intl.string(ef.t["38qwgO"]);
    return (
        A.length > 0 && (z = "" === j || null == j ? ef.intl.string(ef.t.DwnFuG) : j),
        l
            ? null
            : (0, i.jsxs)("div", {
                  ref: m,
                  className: a()(tD.$T$, tD.jht),
                  children: [
                      (0, i.jsxs)("div", {
                          className: tD.sEF,
                          children: [
                              (0, i.jsx)(x.D, {
                                  className: tD.LPV,
                                  "aria-label": ef.intl.string(ef.t.RT3MPz),
                                  onClick: U,
                                  children: (0, i.jsxs)("div", {
                                      className: a()({ [tD.Nv2]: !L, [tD.Ann]: L }),
                                      children: [
                                          (0, i.jsx)(C.K, { size: "xs", color: "currentColor", className: tD.Npc }),
                                          (0, i.jsx)(h.E, {
                                              className: tD.r1V,
                                              variant: "text-sm/medium",
                                              children: z,
                                          }),
                                          (0, i.jsx)(tO.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tO.A.Directions.DOWN,
                                              className: tD._lP,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, i.jsxs)("div", {
                                  className: tD.Ykg,
                                  children: [
                                      (0, i.jsx)(x.D, {
                                          "aria-label": ef.intl.string(ef.t["4huCnC"]),
                                          onClick: H,
                                          className: a()(tD.ZMY, tD.vzA, { [tD.jfO]: null == T }),
                                          children: (0, i.jsx)(tO.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tO.A.Directions.UP,
                                          }),
                                      }),
                                      (0, i.jsx)(x.D, {
                                          "aria-label": ef.intl.string(ef.t["58KOoF"]),
                                          onClick: F,
                                          className: a()(tD.ZMY, tD.mtW, { [tD.jfO]: null == b }),
                                          children: (0, i.jsx)(tO.A, {
                                              width: 16,
                                              height: 16,
                                              direction: tO.A.Directions.DOWN,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      L &&
                          (0, i.jsxs)("div", {
                              className: tD.A1T,
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: tD.kee,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: tD.Ney,
                                              children: [
                                                  (0, i.jsx)(C.K, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      className: tD.vlb,
                                                      width: 18,
                                                      height: 20,
                                                  }),
                                                  (0, i.jsx)(E.D, {
                                                      variant: "heading-md/bold",
                                                      color: "text-strong",
                                                      lineClamp: 1,
                                                      children: ef.intl.string(ef.t.q21fUr),
                                                  }),
                                                  (0, i.jsx)(G.A, { className: tD.Zxm }),
                                              ],
                                          }),
                                          (0, i.jsx)(x.D, {
                                              "aria-label": ef.intl.string(ef.t.cpT0Cq),
                                              onClick: U,
                                              className: tD.oX1,
                                              children: (0, i.jsx)(I.P, { size: "md", color: "currentColor" }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(y.Ip, { ref: g, className: tD.Pei, fade: !0, children: K }),
                              ],
                          }),
                  ],
              })
    );
}
function t8(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, i.jsxs)("div", {
        className: tD.YLv,
        children: [
            (0, i.jsx)(h.E, {
                color: "none",
                variant: "text-sm/semibold",
                lineClamp: 1,
                className: tD.LdH,
                children: e,
            }),
            t &&
                (0, i.jsx)(h.E, {
                    className: tD.$oi,
                    color: "text-muted",
                    variant: "text-sm/normal",
                    children: ef.intl.string(ef.t["515vjG"]),
                }),
        ],
    });
}
function t6(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)("div", { className: a()(tD.jCT, n), children: t });
}
function t5(e) {
    let { className: t } = e;
    return (0, i.jsx)(t6, {
        className: t,
        children: (0, i.jsx)("div", { className: tD.wHG, children: (0, i.jsx)("div", { className: tD.j3g }) }),
    });
}
