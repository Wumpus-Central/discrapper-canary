n.d(t, { default: () => e7 });
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
let E = { [p.IWg.MODAL_CAROUSEL_NEXT]: m.$0, [p.IWg.MODAL_CAROUSEL_PREV]: m.$4, [p.IWg.CLOSE_MODAL]: m.cu },
    h = { [p.IWg.CLOSE_MODAL]: m.cu };
var f = n(775121),
    g = n(775602),
    x = n(625494),
    C = n(700331),
    y = n(454290),
    A = n(548411),
    j = n(554830),
    I = n(930125),
    N = n(338717),
    S = n(282108),
    b = n(302031),
    T = n(267102),
    O = n(452282),
    v = n(967758),
    M = n(415097),
    _ = n(17928),
    D = n(676737),
    k = (((i = {}).DEFAULT = "DEFAULT"), (i.FOCUS_SENSITIVE = "FOCUS_SENSITIVE"), (i.PINNED = "PINNED"), i);
let L = l.memo(function (e) {
    let { children: t, mode: n = "DEFAULT" } = e,
        { zoomed: i } = (0, y.Q)(),
        r = (0, _.bG)([g.Ay], () => g.Ay.keyboardModeEnabled);
    return t(s()(D.E3, { [D.R]: i && !r && "PINNED" !== n, [D.rB]: "FOCUS_SENSITIVE" === n }));
});
var P = n(827045);
let R = l.memo(function (e) {
    let { items: t, currentIndex: n, children: i } = e,
        a = t[n],
        o = t.length > 1,
        c = (0, T._o)(),
        u = (0, v.A)(o, { width: a.width, height: a.height }, c),
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
                ((0, M.Z)(e, !0), t.length > 2 && (0, M.Z)(i, !0));
            }
        }, [n, t]),
        (0, r.jsx)(L, {
            mode: k.PINNED,
            children: (e) =>
                (0, r.jsx)("div", {
                    className: s()(P.k4, e),
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
    U = n(87221),
    V = n(689175),
    F = n(939249),
    G = n(607470),
    X = n(619517),
    W = n(644447),
    z = n(591818),
    q = n(838541),
    H = n(375708),
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
        ? (0, r.jsx)(G.A, {
              src: `${t.url}#t=1`,
              preload: "metadata",
              muted: !0,
              style: { width: 40, height: 40, objectFit: "cover" },
          })
        : null == i
          ? null
          : (0, S.qo)({ type: I.D.GenericMedia, media: t }, n)
            ? (0, r.jsx)(w.B, {
                  align: "center",
                  justify: "center",
                  className: B.cd,
                  style: { width: 40, height: 40 },
                  children: (0, r.jsx)(U.D, { size: "sm", color: "white" }),
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
            children: (0, r.jsx)(V.Ch, {
                orientation: "horizontal",
                className: s()(B.nV, a),
                ref: c,
                onClick: (e) => e.stopPropagation(),
                children: t.map((e, l) => {
                    let a = l === n,
                        c = a ? H.t["qv/U5V"] : H.t.zviMAG;
                    return (0, r.jsx)(
                        F.D,
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
        children: (0, r.jsx)(F.D, {
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
        ? (0, r.jsx)(b.Bs.Provider, {
              value: a,
              children: (0, r.jsx)(
                  b.Ay,
                  {
                      type: b.Ay.Types.ATTACHMENT,
                      reason: N.Oc.EXPLICIT_CONTENT,
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
        { zoomed: m, setZoomed: E } = (0, y.Q)(),
        h = l.useCallback(
            (e) => {
                var i;
                (u((e = ((e % (i = t.length)) + i) % i)), (d.current = e), n?.(e), E(!1));
            },
            [n, t, E],
        );
    l.useEffect(() => {
        function e() {
            return h(d.current + 1);
        }
        function t() {
            return h(d.current - 1);
        }
        return (
            x._.subscribe(p.jej.MODAL_CAROUSEL_NEXT, e),
            x._.subscribe(p.jej.MODAL_CAROUSEL_PREV, t),
            () => {
                (x._.unsubscribe(p.jej.MODAL_CAROUSEL_NEXT, e), x._.unsubscribe(p.jej.MODAL_CAROUSEL_PREV, t));
            }
        );
    }, [h, E]);
    let f = t[c],
        g = (0, S.qo)({ type: I.D.GenericMedia, media: f }, a),
        N = o
            ? (e) => {
                  (e.stopPropagation(), e.preventDefault());
              }
            : () => C.l.markActionPerformed(C.N.CONTEXT_MENU_OPENED),
        b = t.length > 1;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(L, {
                children: (e) =>
                    b
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)($, {
                                      onClick: (e) => {
                                          (e.stopPropagation(), x._.dispatch(p.jej.MODAL_CAROUSEL_PREV));
                                      },
                                      icon: A.Z,
                                      tooltip: H.intl.string(H.t.vgfxaA),
                                      className: s()(ee.vi, e),
                                  }),
                                  (0, r.jsx)($, {
                                      onClick: (e) => {
                                          (e.stopPropagation(), x._.dispatch(p.jej.MODAL_CAROUSEL_NEXT));
                                      },
                                      icon: j.K,
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
                        src: f.url,
                        children: (n) =>
                            (0, r.jsx)(z.Ay, { media: f, maxWidth: e, maxHeight: t, obscured: n, onContextMenu: N }),
                    }),
            }),
            b &&
                (0, r.jsx)(L, {
                    children: (e) =>
                        (0, r.jsx)(Q, {
                            items: t,
                            currentIndex: c,
                            onGalleryItemClick: h,
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
    eE = n(408278),
    eh = n(92259),
    ef = n(218429),
    eg = n(292801),
    ex = n(376357),
    eC = n(857250),
    ey = n(97483),
    eA = n(32880),
    ej = n(811893),
    eI = n(980707),
    eN = n(477782),
    eS = n(624479),
    eb = n(173936),
    eT = n(922016),
    eO = n(365199),
    ev = n(50268),
    eM = n(843626),
    e_ = n(294454),
    eD = n(803316),
    ek = n(465856),
    eL = n(885386),
    eP = n(957565),
    eR = n(255438),
    ew = n(123917),
    eU = n(723702),
    eV = n(19575),
    eF = n(256905),
    eG = n(610365);
function eX() {
    (0, ep.closeModal)(eF.K);
}
function eW(e) {
    let { tooltipText: t, ...n } = e;
    return (0, r.jsx)(J.m, {
        text: t,
        position: "bottom",
        asContainer: !0,
        children: (0, r.jsx)(eE.K, { variant: "icon-only", "aria-label": t, size: "sm", ...n }),
    });
}
function ez() {
    let { zoomed: e, setZoomed: t } = (0, y.Q)();
    return (0, r.jsx)(eW, {
        onClick: () => {
            (C.l.markActionPerformed(e ? C.N.ZOOM_OUT_BUTTON_PRESSED : C.N.ZOOM_IN_BUTTON_PRESSED), t(!e));
        },
        tooltipText: e ? H.intl.string(H.t.vOFof8) : H.intl.string(H.t.Kt4gZ6),
        icon: e ? eh.V : ef.r,
    });
}
function eq(e) {
    let { item: t } = e,
        n = t.sourceMetadata?.message,
        i = t.sourceMetadata?.identifier,
        a = l.useCallback(() => {
            if (null != n && null != i) {
                if ((C.l.markActionPerformed(C.N.FORWARD_PRESSED), "embed" === i.type))
                    return void (0, e_.fO)({
                        message: n,
                        source: "media-viewer",
                        forwardOptions: { onlyEmbedIndices: [i.embedIndex] },
                        onRequestSent: eX,
                    });
                (0, e_.fO)({
                    message: n,
                    source: "media-viewer",
                    forwardOptions: { onlyAttachmentIds: [i.attachmentId] },
                    onRequestSent: eX,
                });
            }
        }, [n, i]);
    return null != n && null != i && (0, eM.p)(n)
        ? (0, r.jsx)(eW, { onClick: a, tooltipText: H.intl.string(H.t.I3ltXO), icon: eg.t })
        : null;
}
function eH(e) {
    let { item: t } = e,
        [n, i] = l.useState(!1),
        a = (0, eD.bc)(t.original, t.url),
        s = "VIDEO" === t.type,
        o = "IMAGE" === t.type,
        c = null != t.children,
        u = (0, eD.e7)(a, t.contentType, t.originalContentType);
    if (!(s || (eU.isPlatformEmbedded && !c && o && u))) return null;
    let d = (0, eD.XW)(a, t.contentType, t.originalContentType, eD.N7);
    async function m() {
        if (
            (C.l.markActionPerformed(C.N.SAVE_MEDIA_PRESSED),
            "VIDEO" === t.type && (0, ew.h)({ href: d }),
            "IMAGE" === t.type)
        ) {
            i(!0);
            try {
                let e = await eV.Ay.saveImage(d, t.contentType, eD.N7);
                if (e === eV._0.ERRORED) throw Error(`DesktopNativeUtils.saveImage errored for ${d}`);
                e === eV._0.SAVED &&
                    (C.l.trackMediaViewerImageSaved({ url: d, success: !0 }),
                    (0, ex.P)((0, eC.o)(H.intl.string(H.t.cqpdJW), ey.Ck.SUCCESS)));
            } catch (e) {
                (C.l.trackMediaViewerImageSaved({ url: d, success: !1 }),
                    (0, ex.P)((0, eC.o)(H.intl.string(H.t["8Ve/S0"]), ey.Ck.FAILURE)));
            } finally {
                i(!1);
            }
        }
    }
    return (0, r.jsx)(eW, {
        onClick: m,
        tooltipText: H.intl.string("VIDEO" === t.type ? H.t.JVuuz3 : H.t["S/xNKV"]),
        loading: n,
        icon: eA.DownloadIcon,
    });
}
function eB(e) {
    let { item: t } = e,
        n = (0, eD.bc)(t.original, t.url);
    if (!(0, eD.fW)(n)) return null;
    let i = (0, eD.XW)(n, t.contentType, t.originalContentType);
    return (0, r.jsx)(eW, {
        onClick: () => {
            (C.l.markActionPerformed(C.N.OPEN_LINK_PRESSED),
                C.l.trackMediaViewerLinkOpened({ href: i }),
                (0, ew.h)({ href: i }));
        },
        tooltipText: H.intl.string(H.t.q5jLJB),
        icon: ej.t,
    });
}
function eZ(e) {
    let { item: t, canCopyImage: n, canCopyLink: i, onClose: l, onSelect: a, src: s } = e,
        o = t.sourceMetadata?.identifier?.type === "attachment" ? t.sourceMetadata.identifier.attachmentId : null,
        c = (0, ev.A)({ id: o, label: H.intl.string(H.t.nwg3lR) }),
        u = (function (e) {
            let { alt: t, sourceMetadata: n, width: i, height: l } = e,
                a = eK(H.intl.string(H.t.ILJuBq), "name", { subtextLineClamp: 1 }),
                s = eK(H.intl.string(H.t["3Nf9u2"]), "size"),
                o = eK(H.intl.string(H.t.eOB2eR), "alt", { subtextLineClamp: 2 });
            if (n?.identifier?.type !== "attachment") return null;
            let c = (0, ek.A)(n.identifier),
                u = (0, eR.Xq)(n.identifier.size / 1e3);
            return (0, r.jsxs)(
                eN.Dr,
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
                C.l.markActionPerformed(C.N.COPY_IMAGE_PRESSED);
                let e = (0, eD.XW)(l, t.contentType, t.originalContentType, eD.N7);
                try {
                    (await eV.Ay.copyImage(e, t.originalContentType ?? t.contentType),
                        C.l.trackMediaViewerImageCopied({ url: e, success: !0 }),
                        (0, ex.P)((0, eC.o)(H.intl.string(H.t.bhUpvC), ey.Ck.SUCCESS)));
                } catch (t) {
                    (C.l.trackMediaViewerImageCopied({ url: e, success: !1 }),
                        (0, ex.P)((0, eC.o)(H.intl.string(H.t.PTPbjx), ey.Ck.FAILURE)));
                }
            }
            return (0, r.jsxs)(eN.rX, {
                children: [
                    n &&
                        (0, r.jsx)(
                            eN.Dr,
                            {
                                label: H.intl.string(H.t.tvUqWn),
                                id: "media-viewer-copy-image",
                                icon: eS.CopyIcon,
                                leadingAccessory: { type: "icon", icon: eS.CopyIcon },
                                action: a,
                            },
                            "media-viewer-copy-image",
                        ),
                    i &&
                        (0, r.jsx)(
                            eN.Dr,
                            {
                                id: "media-viewer-copy-link",
                                label: H.intl.string(H.t["92CPQ+"]),
                                icon: eb.LinkIcon,
                                leadingAccessory: { type: "icon", icon: eb.LinkIcon },
                                action: function () {
                                    C.l.markActionPerformed(C.N.COPY_LINK_PRESSED);
                                    let e = (0, eD.XW)(l, t.contentType, t.originalContentType);
                                    (0, eP.C)(
                                        e,
                                        () => {
                                            (C.l.trackMediaViewerLinkCopied({ href: e, success: !0 }),
                                                (0, ex.P)((0, eC.o)(H.intl.string(H.t["L/PwZf"]), ey.Ck.SUCCESS)));
                                        },
                                        () => {
                                            (C.l.trackMediaViewerLinkCopied({ href: e, success: !1 }),
                                                (0, ex.P)((0, eC.o)(H.intl.string(H.t.uVV00B), ey.Ck.FAILURE)));
                                        },
                                    );
                                },
                            },
                            "media-viewer-copy-link",
                        ),
                ],
            });
        })({ item: t, canCopyImage: n, canCopyLink: i, src: s });
    return (0, r.jsxs)(eI.W, {
        "data-menu-migrated": !0,
        navId: "image-menu",
        "aria-label": "placeholder",
        onClose: l,
        onSelect: a,
        children: [d, u, c],
    });
}
function eK(e, t, n) {
    let i = l.useCallback((e) => {
        (0, eP.C)(e, () =>
            (0, ex.P)({ message: H.intl.string(H.t.mGZ66D), type: ey.Ck.SUCCESS, id: "media-viewer-detail-copied" }),
        );
    }, []);
    return (l) => (null != l ? (0, r.jsx)(eN.Dr, { action: () => i(l), label: e, subtext: l, id: t, ...n }, t) : null);
}
function eQ(e) {
    let { item: t } = e,
        n = l.useRef(null),
        [i, a] = l.useState(!1),
        s = eL.Q_.useSetting(),
        o = "IMAGE" === t.type,
        c = null == t.children,
        u = !t.animated,
        d = (0, eD.bc)(t.original, t.url),
        m = (0, eD.PK)(d, t.contentType, t.originalContentType),
        p = o && c && u && m,
        E = (0, eD.fW)(d);
    return s || p || E || t.sourceMetadata?.identifier?.type === "attachment"
        ? (0, r.jsx)(eT.Y, {
              targetElementRef: n,
              shouldShow: i,
              align: "left",
              position: "top",
              spacing: 18,
              onRequestClose: () => a(!1),
              animation: eT.Y.Animation.NONE,
              renderPopout: () =>
                  (0, r.jsx)(eZ, { item: t, canCopyImage: p, canCopyLink: E, onClose: () => a(!1), src: d }),
              children: (e) => {
                  let { onClick: t } = e;
                  return (0, r.jsx)(eW, {
                      buttonRef: n,
                      tooltipText: H.intl.string(H.t["UKOtz+"]),
                      onClick: () => {
                          (C.l.markActionPerformed(C.N.MORE_BUTTON_PRESSED), a(!i));
                      },
                      icon: eO.MoreHorizontalIcon,
                  });
              },
          })
        : null;
}
let eJ = l.memo(function (e) {
    let { item: t, hideMediaOptions: n } = e,
        i = (0, _.bG)([g.Ay], () => g.Ay.keyboardModeEnabled),
        a = l.useRef(null),
        o = l.useCallback(() => {
            !i && a.current?.contains(document.activeElement) && document.activeElement.blur();
        }, [i]);
    return (
        ("IMAGE" === t.type || !n) &&
        (0, r.jsx)(L, {
            mode: k.FOCUS_SENSITIVE,
            children: (e) =>
                (0, r.jsxs)("div", {
                    ref: a,
                    className: s()(eG.uu, e),
                    onClick: (e) => e.stopPropagation(),
                    onMouseLeave: o,
                    children: [
                        "IMAGE" === t.type && (0, r.jsx)(ez, {}),
                        !n &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(eq, { item: t }),
                                    (0, r.jsx)(eH, { item: t }),
                                    (0, r.jsx)(eB, { item: t }),
                                    (0, r.jsx)(eQ, { item: t }),
                                ],
                            }),
                    ],
                }),
        })
    );
});
var eY = n(125256);
let e$ = l.memo(function (e) {
    let { message: t } = e,
        n = (0, _.bG)([ed.A], () => ed.A.getChannel(t.channel_id));
    if (null == n) return null;
    let i = (0, es.A)(t) ? new Date(em.default.extractTimestamp(t.id)) : t.timestamp;
    return (0, r.jsx)(L, {
        children: (e) =>
            (0, r.jsxs)(eo.A.Provider, {
                value: n.guild_id,
                children: [
                    (0, r.jsx)(ea.A, { user: t.author, size: ei._3.SIZE_40, className: s()(eY.Du, e) }),
                    (0, r.jsxs)("div", {
                        className: s()(eY.cy, e),
                        children: [
                            (0, r.jsx)(er.M, {
                                children: (0, r.jsx)("div", {
                                    className: eY.mG,
                                    children: (0, r.jsx)(eu.A, { className: eY.fh, message: t, channel: n }),
                                }),
                            }),
                            (0, r.jsx)(ec.A, { timestamp: i, className: eY.vE, tooltipPosition: "bottom" }),
                        ],
                    }),
                ],
            }),
    });
});
function e0(e) {
    let { item: t, hideMediaOptions: n, onClose: i } = e,
        l = t.sourceMetadata?.message;
    return (0, r.jsxs)("div", {
        className: eY.XV,
        children: [
            null != l && (0, r.jsx)(e$, { message: l }),
            (0, r.jsx)(eJ, { item: t, hideMediaOptions: n }),
            (0, r.jsx)(L, {
                mode: k.PINNED,
                children: (e) =>
                    (0, r.jsx)($, {
                        onClick: i,
                        icon: el.P,
                        tooltip: H.intl.string(H.t.cpT0Cq),
                        className: s()(eY.b, e),
                    }),
            }),
        ],
    });
}
var e1 = n(700535);
function e2(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    !0 === n || g.Ay.useReducedMotion ? e.set(t) : e.start(t);
}
function e7(e) {
    let {
            onClose: t,
            onIndexChange: n,
            items: i,
            startingIndex: a,
            enabledContentHarmTypeFlags: m,
            shouldHideMediaOptions: A = !1,
            transitionState: j,
            ...I
        } = e,
        [N, S] = l.useState(a ?? 0),
        [b, T] = l.useState(!1),
        [O, v] = (0, c.z)(() => ({
            scale: g.Ay.useReducedMotion ? 1 : 0.9,
            x: 0,
            y: 0,
            config: { friction: 30, tension: 300 },
        })),
        M = l.useRef(null);
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
        if (j !== _.current)
            switch (((_.current = j), j)) {
                case u.ip.ENTERING:
                    e2(O.scale, 1);
                    break;
                case u.ip.EXITING:
                    g.Ay.useReducedMotion || (e2(O.x, 0), e2(O.y, 0), e2(O.scale, 0.9));
            }
    }, [j, O]),
        j === u.ip.HIDDEN && b && (T(!1), O.x.set(0), O.y.set(0), O.scale.set(1)),
        l.useEffect(() => {
            function e() {
                (f.A.disable(), j === u.ip.ENTERED ? f.A.enableTemp(E) : f.A.enableTemp(h));
            }
            function t() {
                f.A.disableTemp();
            }
            (j === u.ip.ENTERED && (f.A.disable(), f.A.enableTemp(E)),
                j === u.ip.HIDDEN && (f.A.disable(), f.A.enableTemp(h)));
            let n = M.current?.ownerDocument?.defaultView;
            return (
                n?.addEventListener("focus", e),
                n?.addEventListener("blur", t),
                () => {
                    (n?.removeEventListener("focus", e), n?.removeEventListener("blur", t), f.A.disableTemp());
                }
            );
        }, [j]));
    let D = l.useCallback(
            (e) => {
                (S(e), n?.(e), C.l.markActionPerformed(C.N.SELECTED_ITEM_CHANGE));
            },
            [n],
        ),
        k = l.useMemo(
            () => ({
                scale: O.scale,
                x: O.x,
                y: O.y,
                setScale(e, t) {
                    e2(O.scale, e, t?.immediate);
                },
                setOffset(e, t, n) {
                    (e2(O.x, e, n?.immediate), e2(O.y, t, n?.immediate));
                },
                zoomed: b,
                setZoomed(e) {
                    (T(e), e2(O.scale, e ? 2.5 : 1), e || (e2(O.x, 0), e2(O.y, 0)));
                },
            }),
            [b, O],
        );
    return (0, r.jsx)(d.N, {
        theme: p.NJ8.ONYX,
        children: (e) =>
            (0, r.jsx)(o.EO, {
                "data-migration-pending": !0,
                hideShadow: !0,
                className: s()(e1.O, e),
                transitionState: j,
                ...I,
                size: o.rI.DYNAMIC,
                animation: o.WM.SUBTLE,
                fullscreenOnMobile: !1,
                onClick: t,
                "aria-label": H.intl.string(H.t.AMTX3j),
                parentComponent: "MediaViewerModal",
                children: (0, r.jsxs)(y.f.Provider, {
                    value: k,
                    children: [
                        (0, r.jsx)(e0, { item: i[N], hideMediaOptions: A, onClose: t }),
                        (0, r.jsx)("div", { style: { display: "none" }, ref: M }),
                        (0, r.jsx)(en, {
                            items: i,
                            startIndex: N,
                            onIndexChange: D,
                            enabledContentHarmTypeFlags: m,
                            shouldHideMediaOptions: A,
                        }),
                    ],
                }),
            }),
    });
}
