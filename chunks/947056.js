n.d(t, { default: () => e1 });
var i,
    r = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    o = n(935462),
    c = n(717421),
    u = n(231723),
    d = n(43990),
    m = n(803842),
    p = n(652215);
let h = { [p.IWg.MODAL_CAROUSEL_NEXT]: m.$0, [p.IWg.MODAL_CAROUSEL_PREV]: m.$4, [p.IWg.CLOSE_MODAL]: m.cu },
    f = { [p.IWg.CLOSE_MODAL]: m.cu };
var E = n(775121),
    g = n(775602),
    x = n(625494),
    y = n(700331),
    A = n(454290),
    j = n(548411),
    C = n(554830),
    N = n(930125),
    I = n(338717),
    b = n(282108),
    v = n(302031),
    T = n(267102),
    O = n(452282),
    M = n(967758),
    S = n(415097),
    _ = n(17928),
    D = n(676737),
    P = (((i = {}).DEFAULT = "DEFAULT"), (i.FOCUS_SENSITIVE = "FOCUS_SENSITIVE"), (i.PINNED = "PINNED"), i);
let L = l.memo(function (e) {
    let { children: t, mode: n = "DEFAULT" } = e,
        { zoomed: i } = (0, A.Q)(),
        r = (0, _.bG)([g.Ay], () => g.Ay.keyboardModeEnabled);
    return t(s()(D.E3, { [D.R]: i && !r && "PINNED" !== n, [D.rB]: "FOCUS_SENSITIVE" === n }));
});
var k = n(827045);
let R = l.memo(function (e) {
    let { items: t, currentIndex: n, children: i } = e,
        a = t[n],
        o = t.length > 1,
        c = (0, T._o)(),
        u = (0, M.A)(o, { width: a.width, height: a.height }, c),
        [d, m] = l.useState(0);
    return (
        l.useEffect(() => {
            function e() {
                return m((e) => e + 1);
            }
            return (c.addEventListener("resize", e), () => c.removeEventListener("resize", e));
        }, [c]),
        l.useEffect(() => {
            if (t.length > 1) {
                let e = t[(0, O.U3)(n - 1, t.length)],
                    i = t[(0, O.U3)(n + 1, t.length)];
                ((0, S.Z)(e, !0), t.length > 2 && (0, S.Z)(i, !0));
            }
        }, [n, t]),
        (0, r.jsx)(L, {
            mode: P.PINNED,
            children: (e) =>
                (0, r.jsx)("div", {
                    className: s()(k.k4, e),
                    children: (0, r.jsx)(
                        "div",
                        { children: u.width > 0 && u.height > 0 && i(u.width, u.height) },
                        a.url,
                    ),
                }),
        })
    );
});
var w = n(331322),
    V = n(87221),
    U = n(689175),
    G = n(939249),
    F = n(607470),
    X = n(619517),
    W = n(644447),
    z = n(591818),
    q = n(838541),
    H = n(660183),
    B = n(280462);
function Z(e) {
    return `media-view-scroll-thumbnail-${e}`;
}
let K = l.memo(function (e) {
    let { item: t, enabledContentHarmTypeFlags: n = 0 } = e,
        i = (function (e) {
            if ("IMAGE" === e.type) return (0, W.E)({ proxyURL: e.proxyUrl, url: e.url });
            if ("VIDEO" === e.type) {
                if (null != e.poster) return e.poster;
                if (null != e.proxyUrl) return (0, z.VZ)(e.proxyUrl);
            }
            return null;
        })(t);
    return null == i && "VIDEO" === t.type
        ? (0, r.jsx)(F.A, {
              src: `${t.url}#t=1`,
              preload: "metadata",
              muted: !0,
              style: { width: 40, height: 40, objectFit: "cover" },
          })
        : null == i
          ? null
          : (0, b.qo)({ type: N.D.GenericMedia, media: t }, n)
            ? (0, r.jsx)(w.B, {
                  align: "center",
                  justify: "center",
                  className: B.cd,
                  style: { width: 40, height: 40 },
                  children: (0, r.jsx)(V.D, { size: "sm", color: "white" }),
              })
            : (0, r.jsx)(X.Ay, {
                  width: t.width ?? 40,
                  height: t.height ?? 40,
                  maxWidth: 40,
                  maxHeight: 40,
                  useFullWidth: !0,
                  src: i,
                  shouldAnimate: !1,
                  shouldRenderAccessory: !1,
                  srcIsAnimated: t.srcIsAnimated,
                  alt: t.alt,
                  mediaLayoutType: q.dG.MOSAIC,
              });
});
function Q(e) {
    let { items: t, currentIndex: n, onGalleryItemClick: i, className: a, enabledContentHarmTypeFlags: o } = e,
        c = l.useRef(null);
    return (
        l.useLayoutEffect(() => {
            let e = document.getElementById(Z(n));
            null != c.current &&
                null != e &&
                c.current.scrollIntoViewNode({ node: e, animate: !g.Ay.useReducedMotion, padding: 20 });
        }, [n]),
        (0, r.jsx)("div", {
            className: s()(B.IL, a),
            children: (0, r.jsx)(U.Ch, {
                orientation: "horizontal",
                className: s()(B.nV, a),
                ref: c,
                onClick: (e) => e.stopPropagation(),
                children: t.map((e, l) => {
                    let a = l === n,
                        c = a ? H.t["qv/U5V"] : H.t.zviMAG;
                    return (0, r.jsx)(
                        G.D,
                        {
                            id: Z(l),
                            className: s()(B.Qq, { [B.AD]: !a, [B.$1]: 0 === l, [B.HV]: l === t.length - 1 }),
                            "aria-label": H.intl.formatToPlainString(c, { pageNumber: l + 1, totalPages: t.length }),
                            onClick: () => i(l),
                            children: (0, r.jsx)(K, { item: e, enabledContentHarmTypeFlags: o }),
                        },
                        l,
                    );
                }),
            }),
        })
    );
}
var J = n(866665),
    Y = n(250109);
function $(e) {
    let { onClick: t, icon: n, tooltip: i, className: l } = e,
        a = n({ color: "currentColor", size: "custom", width: 20, height: 20 });
    return (0, r.jsx)(J.m, {
        text: i,
        position: "bottom",
        children: (0, r.jsx)(G.D, {
            onClick: (e) => {
                t(e);
            },
            "aria-label": i,
            className: s()(Y.x, l),
            children: (0, r.jsx)("div", { className: Y.h, children: a }),
        }),
    });
}
var ee = n(418450);
function et(e) {
    let { children: t, isObscured: n, src: i } = e,
        [a, o] = l.useState(!1),
        c = l.useCallback(() => {
            o((e) => !e);
        }, []);
    return n
        ? (0, r.jsx)(v.Bs.Provider, {
              value: a,
              children: (0, r.jsx)(
                  v.Ay,
                  {
                      type: v.Ay.Types.ATTACHMENT,
                      reason: I.Oc.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: c,
                      children: (e) => (0, r.jsx)("div", { className: s()(ee.JT, { [ee.Qr]: e }), children: t(e) }),
                  },
                  i,
              ),
          })
        : (0, r.jsx)(r.Fragment, { children: t(!1) });
}
function en(e) {
    let {
            items: t,
            onIndexChange: n,
            startIndex: i = 0,
            enabledContentHarmTypeFlags: a = 0,
            shouldHideMediaOptions: o = !1,
        } = e,
        [c, u] = l.useState(i),
        d = l.useRef(i),
        { zoomed: m, setZoomed: h } = (0, A.Q)(),
        f = l.useCallback(
            (e) => {
                var i;
                (u((e = ((e % (i = t.length)) + i) % i)), (d.current = e), n?.(e), h(!1));
            },
            [n, t, h],
        );
    l.useEffect(() => {
        function e() {
            return f(d.current + 1);
        }
        function t() {
            return f(d.current - 1);
        }
        return (
            x._.subscribe(p.jej.MODAL_CAROUSEL_NEXT, e),
            x._.subscribe(p.jej.MODAL_CAROUSEL_PREV, t),
            () => {
                (x._.unsubscribe(p.jej.MODAL_CAROUSEL_NEXT, e), x._.unsubscribe(p.jej.MODAL_CAROUSEL_PREV, t));
            }
        );
    }, [f, h]);
    let E = t[c],
        g = (0, b.qo)({ type: N.D.GenericMedia, media: E }, a),
        I = o
            ? (e) => {
                  (e.stopPropagation(), e.preventDefault());
              }
            : () => y.l.markActionPerformed(y.N.CONTEXT_MENU_OPENED),
        v = t.length > 1;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(L, {
                children: (e) =>
                    v
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)($, {
                                      onClick: (e) => {
                                          (e.stopPropagation(), x._.dispatch(p.jej.MODAL_CAROUSEL_PREV));
                                      },
                                      icon: j.Z,
                                      tooltip: H.intl.string(H.t.vgfxaA),
                                      className: s()(ee.vi, e),
                                  }),
                                  (0, r.jsx)($, {
                                      onClick: (e) => {
                                          (e.stopPropagation(), x._.dispatch(p.jej.MODAL_CAROUSEL_NEXT));
                                      },
                                      icon: C.K,
                                      tooltip: H.intl.string(H.t.XiOHRX),
                                      className: s()(ee.f8, e),
                                  }),
                              ],
                          })
                        : void 0,
            }),
            (0, r.jsx)(R, {
                items: t,
                currentIndex: c,
                children: (e, t) =>
                    (0, r.jsx)(et, {
                        isObscured: !m && g,
                        src: E.url,
                        children: (n) =>
                            (0, r.jsx)(z.Ay, { media: E, maxWidth: e, maxHeight: t, obscured: n, onContextMenu: I }),
                    }),
            }),
            v &&
                (0, r.jsx)(L, {
                    children: (e) =>
                        (0, r.jsx)(Q, {
                            items: t,
                            currentIndex: c,
                            onGalleryItemClick: f,
                            className: e,
                            enabledContentHarmTypeFlags: a,
                        }),
                }),
        ],
    });
}
var ei = n(778712),
    er = n(346055),
    el = n(789645),
    ea = n(966327),
    es = n(427930),
    eo = n(386467),
    ec = n(606049),
    eu = n(943220),
    ed = n(734057),
    em = n(935208),
    ep = n(192308),
    eh = n(408278),
    ef = n(92259),
    eE = n(218429),
    eg = n(292801),
    ex = n(858899),
    ey = n(32880),
    eA = n(811893),
    ej = n(980707),
    eC = n(477782),
    eN = n(624479),
    eI = n(173936),
    eb = n(922016),
    ev = n(365199),
    eT = n(50268),
    eO = n(843626),
    eM = n(294454),
    eS = n(803316),
    e_ = n(465856),
    eD = n(885386),
    eP = n(957565),
    eL = n(255438),
    ek = n(123917),
    eR = n(723702),
    ew = n(19575),
    eV = n(256905),
    eU = n(610365);
function eG() {
    (0, ep.closeModal)(eV.K);
}
function eF(e) {
    let { tooltipText: t, ...n } = e;
    return (0, r.jsx)(J.m, {
        text: t,
        position: "bottom",
        asContainer: !0,
        children: (0, r.jsx)(eh.K, { variant: "icon-only", "aria-label": t, size: "sm", ...n }),
    });
}
function eX() {
    let { zoomed: e, setZoomed: t } = (0, A.Q)();
    return (0, r.jsx)(eF, {
        onClick: () => {
            (y.l.markActionPerformed(e ? y.N.ZOOM_OUT_BUTTON_PRESSED : y.N.ZOOM_IN_BUTTON_PRESSED), t(!e));
        },
        tooltipText: e ? H.intl.string(H.t.vOFof8) : H.intl.string(H.t.Kt4gZ6),
        icon: e ? ef.V : eE.r,
    });
}
function eW(e) {
    let { item: t } = e,
        n = t.sourceMetadata?.message,
        i = t.sourceMetadata?.identifier,
        a = l.useCallback(() => {
            if (null != n && null != i) {
                if ((y.l.markActionPerformed(y.N.FORWARD_PRESSED), "embed" === i.type))
                    return void (0, eM.fO)({
                        message: n,
                        source: "media-viewer",
                        forwardOptions: { onlyEmbedIndices: [i.embedIndex] },
                        onRequestSent: eG,
                    });
                (0, eM.fO)({
                    message: n,
                    source: "media-viewer",
                    forwardOptions: { onlyAttachmentIds: [i.attachmentId] },
                    onRequestSent: eG,
                });
            }
        }, [n, i]);
    return null != n && null != i && (0, eO.p)(n)
        ? (0, r.jsx)(eF, { onClick: a, tooltipText: H.intl.string(H.t.I3ltXO), icon: eg.t })
        : null;
}
function ez(e) {
    let { item: t } = e,
        [n, i] = l.useState(!1),
        a = (0, eS.bc)(t.original, t.url),
        s = "VIDEO" === t.type,
        o = "IMAGE" === t.type,
        c = null != t.children,
        u = (0, eS.e7)(a, t.contentType, t.originalContentType);
    if (!(s || (eR.isPlatformEmbedded && !c && o && u))) return null;
    let d = (0, eS.XW)(a, t.contentType, t.originalContentType, eS.N7);
    async function m() {
        if (
            (y.l.markActionPerformed(y.N.SAVE_MEDIA_PRESSED),
            "VIDEO" === t.type && (0, ek.h)({ href: d }),
            "IMAGE" === t.type)
        ) {
            i(!0);
            try {
                let e = await ew.Ay.saveImage(d, t.contentType, eS.N7);
                if (e === ew._0.ERRORED) throw Error(`DesktopNativeUtils.saveImage errored for ${d}`);
                e === ew._0.SAVED &&
                    (y.l.trackMediaViewerImageSaved({ url: d, success: !0 }),
                    (0, ex.P0)({ text: H.intl.string(H.t.cqpdJW), variant: "success" }));
            } catch (e) {
                (y.l.trackMediaViewerImageSaved({ url: d, success: !1 }),
                    (0, ex.P0)({ text: H.intl.string(H.t["8Ve/S0"]), variant: "critical" }));
            } finally {
                i(!1);
            }
        }
    }
    return (0, r.jsx)(eF, {
        onClick: m,
        tooltipText: H.intl.string("VIDEO" === t.type ? H.t.JVuuz3 : H.t["S/xNKV"]),
        loading: n,
        icon: ey.DownloadIcon,
    });
}
function eq(e) {
    let { item: t } = e,
        n = (0, eS.bc)(t.original, t.url);
    if (!(0, eS.fW)(n)) return null;
    let i = (0, eS.XW)(n, t.contentType, t.originalContentType);
    return (0, r.jsx)(eF, {
        onClick: () => {
            (y.l.markActionPerformed(y.N.OPEN_LINK_PRESSED),
                y.l.trackMediaViewerLinkOpened({ href: i }),
                (0, ek.h)({ href: i }));
        },
        tooltipText: H.intl.string(H.t.q5jLJB),
        icon: eA.t,
    });
}
function eH(e) {
    let { item: t, canCopyImage: n, canCopyLink: i, onClose: l, onSelect: a, src: s } = e,
        o = t.sourceMetadata?.identifier?.type === "attachment" ? t.sourceMetadata.identifier.attachmentId : null,
        c = (0, eT.A)({ id: o, label: H.intl.string(H.t.nwg3lR) }),
        u = (function (e) {
            let { alt: t, sourceMetadata: n, width: i, height: l } = e,
                a = eB(H.intl.string(H.t.ILJuBq), "name", { subtextLineClamp: 1 }),
                s = eB(H.intl.string(H.t["3Nf9u2"]), "size"),
                o = eB(H.intl.string(H.t.eOB2eR), "alt", { subtextLineClamp: 2 });
            if (n?.identifier?.type !== "attachment") return null;
            let c = (0, e_.A)(n.identifier),
                u = (0, eL.Xq)(n.identifier.size / 1e3);
            return (0, r.jsxs)(
                eC.Dr,
                {
                    id: "media-viewer-details",
                    label: H.intl.string(H.t.sqBLa9),
                    children: [
                        a(c),
                        s(H.intl.formatToPlainString(H.t.DTdonA, { width: i, height: l, fileSize: u })),
                        o(t),
                    ],
                },
                "media-viewer-details",
            );
        })(t),
        d = (function (e) {
            let { item: t, canCopyImage: n, canCopyLink: i, src: l } = e;
            async function a() {
                y.l.markActionPerformed(y.N.COPY_IMAGE_PRESSED);
                let e = (0, eS.XW)(l, t.contentType, t.originalContentType, eS.N7);
                try {
                    (await ew.Ay.copyImage(e, t.originalContentType ?? t.contentType),
                        y.l.trackMediaViewerImageCopied({ url: e, success: !0 }),
                        (0, ex.P0)({ text: H.intl.string(H.t.bhUpvC), variant: "success" }));
                } catch (t) {
                    (y.l.trackMediaViewerImageCopied({ url: e, success: !1 }),
                        (0, ex.P0)({ text: H.intl.string(H.t.PTPbjx), variant: "critical" }));
                }
            }
            return (0, r.jsxs)(eC.rX, {
                children: [
                    n &&
                        (0, r.jsx)(
                            eC.Dr,
                            {
                                label: H.intl.string(H.t.tvUqWn),
                                id: "media-viewer-copy-image",
                                icon: eN.CopyIcon,
                                leadingAccessory: { type: "icon", icon: eN.CopyIcon },
                                action: a,
                            },
                            "media-viewer-copy-image",
                        ),
                    i &&
                        (0, r.jsx)(
                            eC.Dr,
                            {
                                id: "media-viewer-copy-link",
                                label: H.intl.string(H.t["92CPQ+"]),
                                icon: eI.LinkIcon,
                                leadingAccessory: { type: "icon", icon: eI.LinkIcon },
                                action: function () {
                                    y.l.markActionPerformed(y.N.COPY_LINK_PRESSED);
                                    let e = (0, eS.XW)(l, t.contentType, t.originalContentType);
                                    (0, eP.C)(
                                        e,
                                        () => {
                                            (y.l.trackMediaViewerLinkCopied({ href: e, success: !0 }),
                                                (0, ex.P0)({ text: H.intl.string(H.t["L/PwZf"]), variant: "success" }));
                                        },
                                        () => {
                                            (y.l.trackMediaViewerLinkCopied({ href: e, success: !1 }),
                                                (0, ex.P0)({ text: H.intl.string(H.t.uVV00B), variant: "critical" }));
                                        },
                                    );
                                },
                            },
                            "media-viewer-copy-link",
                        ),
                ],
            });
        })({ item: t, canCopyImage: n, canCopyLink: i, src: s });
    return (0, r.jsxs)(ej.W, {
        "data-menu-migrated": !0,
        navId: "image-menu",
        "aria-label": "placeholder",
        onClose: l,
        onSelect: a,
        children: [d, u, c],
    });
}
function eB(e, t, n) {
    let i = l.useCallback((e) => {
        (0, eP.C)(e, () => (0, ex.P0)({ text: H.intl.string(H.t.mGZ66D), variant: "success" }));
    }, []);
    return (l) => (null != l ? (0, r.jsx)(eC.Dr, { action: () => i(l), label: e, subtext: l, id: t, ...n }, t) : null);
}
function eZ(e) {
    let { item: t } = e,
        n = l.useRef(null),
        [i, a] = l.useState(!1),
        s = eD.Q_.useSetting(),
        o = "IMAGE" === t.type,
        c = null == t.children,
        u = !t.animated,
        d = (0, eS.bc)(t.original, t.url),
        m = (0, eS.PK)(d, t.contentType, t.originalContentType),
        p = o && c && u && m,
        h = (0, eS.fW)(d);
    return s || p || h || t.sourceMetadata?.identifier?.type === "attachment"
        ? (0, r.jsx)(eb.Y, {
              targetElementRef: n,
              shouldShow: i,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => a(!1),
              animation: eb.Y.Animation.NONE,
              renderPopout: () =>
                  (0, r.jsx)(eH, { item: t, canCopyImage: p, canCopyLink: h, onClose: () => a(!1), src: d }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, r.jsx)(eF, {
                      buttonRef: n,
                      tooltipText: H.intl.string(H.t["UKOtz+"]),
                      onClick: () => {
                          (y.l.markActionPerformed(y.N.MORE_BUTTON_PRESSED), a(!i));
                      },
                      icon: ev.MoreHorizontalIcon,
                  });
              },
          })
        : null;
}
let eK = l.memo(function (e) {
    let { item: t, hideMediaOptions: n } = e,
        i = (0, _.bG)([g.Ay], () => g.Ay.keyboardModeEnabled),
        a = l.useRef(null),
        o = l.useCallback(() => {
            !i && a.current?.contains(document.activeElement) && document.activeElement.blur();
        }, [i]);
    return (
        ("IMAGE" === t.type || !n) &&
        (0, r.jsx)(L, {
            mode: P.FOCUS_SENSITIVE,
            children: (e) =>
                (0, r.jsxs)("div", {
                    ref: a,
                    className: s()(eU.uu, e),
                    onClick: (e) => e.stopPropagation(),
                    onMouseLeave: o,
                    children: [
                        "IMAGE" === t.type && (0, r.jsx)(eX, {}),
                        !n &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(eW, { item: t }),
                                    (0, r.jsx)(ez, { item: t }),
                                    (0, r.jsx)(eq, { item: t }),
                                    (0, r.jsx)(eZ, { item: t }),
                                ],
                            }),
                    ],
                }),
        })
    );
});
var eQ = n(125256);
let eJ = l.memo(function (e) {
    let { message: t } = e,
        n = (0, _.bG)([ed.A], () => ed.A.getChannel(t.channel_id));
    if (null == n) return null;
    let i = (0, es.A)(t) ? new Date(em.default.extractTimestamp(t.id)) : t.timestamp;
    return (0, r.jsx)(L, {
        children: (e) =>
            (0, r.jsxs)(eo.A.Provider, {
                value: n.guild_id,
                children: [
                    (0, r.jsx)(ea.A, { user: t.author, size: ei._3.SIZE_40, className: s()(eQ.Du, e) }),
                    (0, r.jsxs)("div", {
                        className: s()(eQ.cy, e),
                        children: [
                            (0, r.jsx)(er.M, {
                                children: (0, r.jsx)("div", {
                                    className: eQ.mG,
                                    children: (0, r.jsx)(eu.A, { className: eQ.fh, message: t, channel: n }),
                                }),
                            }),
                            (0, r.jsx)(ec.A, { timestamp: i, className: eQ.vE, tooltipPosition: "bottom" }),
                        ],
                    }),
                ],
            }),
    });
});
function eY(e) {
    let { item: t, hideMediaOptions: n, onClose: i } = e,
        l = t.sourceMetadata?.message;
    return (0, r.jsxs)("div", {
        className: eQ.XV,
        children: [
            null != l && (0, r.jsx)(eJ, { message: l }),
            (0, r.jsx)(eK, { item: t, hideMediaOptions: n }),
            (0, r.jsx)(L, {
                mode: P.PINNED,
                children: (e) =>
                    (0, r.jsx)($, {
                        onClick: i,
                        icon: el.P,
                        tooltip: H.intl.string(H.t.cpT0Cq),
                        className: s()(eQ.b, e),
                    }),
            }),
        ],
    });
}
var e$ = n(700535);
function e0(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    !0 === n || g.Ay.useReducedMotion ? e.set(t) : e.start(t);
}
function e1(e) {
    let {
            onClose: t,
            onIndexChange: n,
            items: i,
            startingIndex: a,
            enabledContentHarmTypeFlags: m,
            shouldHideMediaOptions: j = !1,
            transitionState: C,
            ...N
        } = e,
        [I, b] = l.useState(a ?? 0),
        [v, T] = l.useState(!1),
        [O, M] = (0, c.z)(() => ({
            scale: g.Ay.useReducedMotion ? 1 : 0.9,
            x: 0,
            y: 0,
            config: { friction: 30, tension: 300 },
        })),
        S = l.useRef(null);
    l.useEffect(() => {
        if (null != t)
            return (
                x._.subscribe(p.jej.MEDIA_MODAL_CLOSE, t),
                () => {
                    x._.unsubscribe(p.jej.MEDIA_MODAL_CLOSE, t);
                }
            );
    }, [t]);
    let _ = l.useRef(null);
    (l.useEffect(() => {
        if (C !== _.current)
            switch (((_.current = C), C)) {
                case u.ip.ENTERING:
                    e0(O.scale, 1);
                    break;
                case u.ip.EXITING:
                    g.Ay.useReducedMotion || (e0(O.x, 0), e0(O.y, 0), e0(O.scale, 0.9));
            }
    }, [C, O]),
        C === u.ip.HIDDEN && v && (T(!1), O.x.set(0), O.y.set(0), O.scale.set(1)),
        l.useEffect(() => {
            function e() {
                (E.A.disable(), C === u.ip.ENTERED ? E.A.enableTemp(h) : E.A.enableTemp(f));
            }
            function t() {
                E.A.disableTemp();
            }
            (C === u.ip.ENTERED && (E.A.disable(), E.A.enableTemp(h)),
                C === u.ip.HIDDEN && (E.A.disable(), E.A.enableTemp(f)));
            let n = S.current?.ownerDocument?.defaultView;
            return (
                n?.addEventListener("focus", e),
                n?.addEventListener("blur", t),
                () => {
                    (n?.removeEventListener("focus", e), n?.removeEventListener("blur", t), E.A.disableTemp());
                }
            );
        }, [C]));
    let D = l.useCallback(
            (e) => {
                (b(e), n?.(e), y.l.markActionPerformed(y.N.SELECTED_ITEM_CHANGE));
            },
            [n],
        ),
        P = l.useMemo(
            () => ({
                scale: O.scale,
                x: O.x,
                y: O.y,
                setScale(e, t) {
                    e0(O.scale, e, t?.immediate);
                },
                setOffset(e, t, n) {
                    (e0(O.x, e, n?.immediate), e0(O.y, t, n?.immediate));
                },
                zoomed: v,
                setZoomed(e) {
                    (T(e), e0(O.scale, e ? 2.5 : 1), e || (e0(O.x, 0), e0(O.y, 0)));
                },
            }),
            [v, O],
        );
    return (0, r.jsx)(d.N, {
        theme: p.NJ8.ONYX,
        children: (e) =>
            (0, r.jsx)(o.EO, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: s()(e$.O, e),
                transitionState: C,
                ...N,
                size: o.rI.DYNAMIC,
                animation: o.WM.SUBTLE,
                fullscreenOnMobile: !1,
                onClick: t,
                "aria-label": H.intl.string(H.t.AMTX3j),
                parentComponent: "MediaViewerModal",
                children: (0, r.jsxs)(A.f.Provider, {
                    value: P,
                    children: [
                        (0, r.jsx)(eY, { item: i[I], hideMediaOptions: j, onClose: t }),
                        (0, r.jsx)("div", { style: { display: "none" }, ref: S }),
                        (0, r.jsx)(en, {
                            items: i,
                            startIndex: I,
                            onIndexChange: D,
                            enabledContentHarmTypeFlags: m,
                            shouldHideMediaOptions: j,
                        }),
                    ],
                }),
            }),
    });
}
