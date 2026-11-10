n.d(t, { default: () => X, H: () => J });
var r = n(477900),
    a = n(582128),
    o = n(517352),
    i = n(554146),
    l = n(47807),
    s = n(366010),
    c = n(212245),
    d = n(736653),
    u = n(793574),
    m = n(688810),
    _ = n(826673),
    p = n(856383),
    E = n(308588),
    N = n(821609),
    h = n(28863),
    A = n(543862),
    M = n(129230),
    T = n(637706),
    f = n(498470),
    O = n(652215),
    g = n(49999),
    b = n(792996),
    I = n(696918),
    x = n(693369);
(n(323874), n(14289), n(35956));
var L = n(503698),
    y = n.n(L),
    R = n(613412),
    v = n(855986),
    k = n(815021),
    C = n(935462),
    D = n(805251),
    P = n(534514),
    j = n(834730),
    S = n(315629),
    w = n(73153),
    G = n(775602),
    U = n(139286),
    H = n(693942),
    K = n(265705),
    V = n(915089),
    F = n(607470),
    $ = n(383055),
    Y = n(186111),
    W = n(774774),
    z = n(209012);
let B = [];
function q(e) {
    let { tagText: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: y()(z.Gr, n),
        children: (0, r.jsx)(D.E, { type: { text: t }, variant: "premium" }),
    });
}
function Q(e) {
    let { header: t, subHeader: n, subHeaderExtra: a, imageSrc: o, tagText: i, wideStyle: l } = e;
    return (0, r.jsxs)("div", {
        className: y()(z.Vr, { [z.tF]: l }),
        children: [
            null != i ? (0, r.jsx)(q, { tagText: i, className: z.bX }) : null,
            (0, r.jsx)("img", { alt: "", className: y()(z._n, { [z.tF]: l }), src: o }),
            (0, r.jsxs)("div", {
                className: y()(z.Zz, { [z.tF]: l }),
                children: [
                    (0, r.jsx)(P.D, { variant: "heading-sm/semibold", className: z.Hf, children: t }),
                    (0, r.jsxs)(j.E, { variant: "body-md/medium", color: "text-subtle", children: [n, a?.()] }),
                ],
            }),
        ],
    });
}
function Z(e) {
    let {
            componentId: t,
            componentType: n = o.oW.ANNOUNCEMENT_MODAL_VARIANT_1,
            promotionId: l,
            promotion: s,
            className: c,
            renderModalProps: d,
            heroArt: u,
            heroArtClassName: m,
            header: _,
            headerClassName: E,
            modalTopPill: N,
            subHeader: h,
            subHeaderExtra: T,
            featureCards: f,
            changeLogId: I,
            button: x,
            body: L,
            disclaimer: D,
            disclaimerExtra: q,
        } = e,
        { onClose: Z, transitionState: J } = d,
        X = (0, V.GV)(),
        ee = f.length % 2 == 0,
        et = (0, v.bG)([G.Ay], () => G.Ay.useReducedMotion),
        [en, er] = a.useState(Date.now()),
        [ea, eo] = a.useState(0),
        [ei, el] = a.useState(0),
        [es, ec] = a.useState(!1),
        [ed, eu] = a.useState(!0),
        em = a.useRef(en),
        e_ = a.useRef(ea),
        ep = a.useRef(ei),
        eE = a.useRef(es),
        eN = a.useRef(ed),
        [eh, eA] = a.useState(B),
        eM = a.useRef(!1),
        { promotionKey: eT } = null != s ? s : {};
    (0, U.A)({
        type: R.ImpressionTypes.MODAL,
        name: R.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_id: t, component_type: n, promotion_id: l },
    });
    let ef = a.useRef(null),
        eO = a.useRef(!1);
    function eg() {
        let e = Date.now(),
            t = e - em.current,
            n = e_.current,
            r = ep.current;
        return (eE.current && (eo((n += t)), eN.current || el((r += t))), er(e), [n, r]);
    }
    return (
        a.useEffect(() => {
            let e = ef.current?.getScrollerNode();
            if (null == e) return;
            function r() {
                eO.current ||
                    ef.current?.isScrolledToBottom() !== !0 ||
                    ((eO.current = !0),
                    M.default.track(O.HAw.PREMIUM_MARKETING_COMPONENT_BOTTOM_VIEWED, {
                        component_id: t,
                        component_type: n,
                        visible_on_mount: ef.current?.isScrolledToTop() ?? !1,
                        promotion_id: l,
                    }));
            }
            let a = new ResizeObserver(r);
            return (
                e.addEventListener("scroll", r, { passive: !0 }),
                a.observe(e),
                r(),
                () => {
                    (e.removeEventListener("scroll", r), a.disconnect());
                }
            );
        }, [t, n, l]),
        a.useEffect(() => {
            (!0 !== eM.current &&
                (async function () {
                    try {
                        if ("video" !== u.type || null == u.subtitles) return;
                        let e = u.subtitles?.map(async (e) => {
                            let t = await fetch(e.src);
                            if (!t.ok) throw Error(`Failed to fetch the subtitle file ${e.src}`);
                            let n = await t.text(),
                                r = new Blob([n], { type: "text/vtt" }),
                                a = URL.createObjectURL(r);
                            return { ...e, src: a };
                        });
                        eA(await Promise.all(e));
                    } catch (e) {
                        (p.A.captureException(e), eA(B));
                    }
                })(),
                (eM.current = !0));
        }, [u, eh]),
        a.useEffect(
            () => () => {
                null != eh &&
                    eh.forEach((e) => {
                        URL.revokeObjectURL(e.src);
                    });
            },
            [eh],
        ),
        a.useEffect(() => {
            ((em.current = en), (e_.current = ea), (ep.current = ei), (eE.current = es), (eN.current = ed));
        }, [en, ea, ei, es, ed]),
        a.useEffect(
            () => () => {
                if ("video" === u.type || "embed" === u.type) {
                    let [e, t] = eg();
                    (M.default.track(O.HAw.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: I,
                        seconds_played: Math.round(e / 1e3),
                    }),
                        M.default.track(O.HAw.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: I,
                            seconds_unmuted: Math.round(t / 1e3),
                        }));
                }
            },
            [I, u.type],
        ),
        a.useEffect(() => {
            if (Y.A.getLayers().includes(O.zgK.COMPONENT_PLAYGROUND)) return;
            (0, A.Vh)(i.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, { snowflakeId: l });
            let e = Date.now();
            return (
                M.default.track(O.HAw.CHANGE_LOG_OPENED, { change_log_id: I }),
                () => {
                    (M.default.track(O.HAw.CHANGE_LOG_CLOSED, {
                        change_log_id: I,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                    }),
                        (0, A.qr)(i.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, l, {
                            dismissAction: g.i.DISMISS,
                        }),
                        w.h.dispatch({
                            type: "PREMIUM_MARKETING_ANNOUNCEMENT_MODAL_DISMISSED",
                            promotionId: l,
                            promotionKey: eT,
                        }));
                }
            );
        }, [I, l, eT]),
        (0, r.jsx)(C.EO, {
            "data-migration-pending": !0,
            className: y()(z.zr, z.kv, c),
            transitionState: J,
            "aria-labelledby": X,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, r.jsxs)(S.h, {
                color: "nitro-pink",
                className: z.YV,
                children: [
                    (0, r.jsx)("div", {
                        className: z.cG,
                        children: (0, r.jsx)(k.J, { "data-migration-pending": !0, onClick: async () => await Z() }),
                    }),
                    (0, r.jsxs)(C.$m, {
                        "data-migration-pending": !0,
                        className: z.Qs,
                        scrollbarType: "auto",
                        overflow: "auto",
                        scrollerRef: ef,
                        children: [
                            (function () {
                                switch (u.type) {
                                    case "video":
                                        return (0, r.jsx)(F.A, {
                                            className: y()(z.Ki, m),
                                            autoPlay: !et,
                                            loop: !0,
                                            muted: !0,
                                            controls: !0,
                                            controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                                            src: u.src,
                                            poster: u.poster,
                                            onPlay: (e) => {
                                                (M.default.track(O.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
                                                    change_log_id: I,
                                                }),
                                                    er(Date.now()),
                                                    ec(!0),
                                                    eu(e.currentTarget.muted));
                                            },
                                            onEnded: (e) => {
                                                (eg(), eu(e.currentTarget.muted), ec(!1));
                                            },
                                            onVolumeChange: (e) => {
                                                (eg(), eu(e.currentTarget.muted));
                                            },
                                            onPause: (e) => {
                                                (eg(), eu(e.currentTarget.muted), ec(!1));
                                            },
                                            disablePictureInPicture: !0,
                                            children: eh?.map((e) => {
                                                let t = (0, b.getLanguages)().find((t) => t.code === e.locale);
                                                return null == t
                                                    ? null
                                                    : (0, r.jsx)(
                                                          "track",
                                                          {
                                                              label: t.englishName,
                                                              kind: "captions",
                                                              srcLang: t.code,
                                                              src: e.src,
                                                              default: e.isDefault,
                                                          },
                                                          e.locale,
                                                      );
                                            }),
                                        });
                                    case "embed":
                                        return (0, r.jsx)(K.rr, {
                                            className: y()(z.Ki, m),
                                            allowFullScreen: !1,
                                            href: u.href,
                                            thumbnail: u.thumbnail,
                                            video: u.embed,
                                            provider: H.mt.YOUTUBE,
                                            maxWidth: u.embed.width,
                                            maxHeight: u.embed.height,
                                            renderVideoComponent: $.$o,
                                            renderImageComponent: $.LL,
                                            renderLinkComponent: $.bU,
                                            onPlay: () => {
                                                M.default.track(O.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
                                                    change_log_id: I,
                                                });
                                            },
                                        });
                                    case "image":
                                        return (0, r.jsx)("img", { alt: "", className: y()(z.Ki, m), src: u.src });
                                    default:
                                        return null;
                                }
                            })(),
                            null != N && "" !== N
                                ? (0, r.jsx)(W.e4, {
                                      text: N,
                                      colorOptions: W.at.PREMIUM_TIER_2_WHITE_FILL,
                                      className: z.ON,
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: z.Z,
                                children: [
                                    (0, r.jsx)(P.D, { variant: "nitro-md", className: y()(z.TK, E), children: _ }),
                                    (0, r.jsxs)(j.E, {
                                        variant: "body-md/medium",
                                        color: "text-subtle",
                                        className: z.uI,
                                        children: [h, T?.()],
                                    }),
                                ],
                            }),
                            null != L &&
                                "" !== L &&
                                (0, r.jsx)(P.D, { variant: "heading-lg/semibold", className: z.G3, children: L }),
                            f.length > 0 &&
                                (0, r.jsx)("div", {
                                    className: z.IS,
                                    children: f.map((e, t) =>
                                        (0, r.jsx)(Q, { ...e, wideStyle: ee }, `${e.header}_${t}`),
                                    ),
                                }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: z.xQ,
                        children: [
                            x(),
                            null != D &&
                                "" !== D &&
                                (0, r.jsxs)(j.E, {
                                    variant: "body-xs/medium",
                                    color: "text-subtle",
                                    className: z.ed,
                                    children: [D, q?.()],
                                }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function J(e) {
    let { promotionId: t, properties: n, isPreview: r } = e,
        a = l.m.clone(n);
    if (!(0, x.lp)(a, o.oW.ANNOUNCEMENT_MODAL_VARIANT_1)) return null;
    {
        let { isDismissed: e } = (0, _.u$)(i.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, t);
        return !r && e ? null : (r && (a.properties.announcementModalVariant1.dismissKey = ""), a);
    }
}
function X(e) {
    let { componentId: t, componentType: n, promotionId: a, promotion: l, renderModalProps: _, properties: L } = e,
        { location: y } = (0, c.p)(),
        { analyticsLocations: R } = (0, m.Ay)(u.A.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL),
        v = (0, d.Ay)(),
        k = (0, s.q)(v);
    if ((0, x.lp)(L, o.oW.ANNOUNCEMENT_MODAL_VARIANT_1)) {
        let e = (function (e) {
            let t,
                {
                    componentId: n,
                    componentType: a,
                    promotionId: o,
                    promotion: l,
                    content: s,
                    renderModalProps: c,
                    analyticsLocations: d,
                    analyticsLocation: u,
                    isLightTheme: m,
                } = e,
                _ = `AnnouncementModalVariant1_${n}`,
                { onClose: x } = c,
                L = s.button?.copy ?? b.intl.string(b.t.YScQSF),
                y = s.button?.buttonAction;
            switch (y) {
                case E.d.OPEN_MARKETING_PAGE:
                    t = "jump_to_mkt_button";
                    break;
                case E.d.OPEN_SOCIAL_LAYER_STOREFRONT:
                    t = "jump_to_slayer_storefront_button";
                    break;
                case E.d.OPEN_SHOP:
                    t = "jump_to_shop_button";
                    break;
                default:
                    t = "get_nitro_button";
            }
            let R = (0, f.h)({
                    buttonAction: s.button?.buttonAction,
                    deeplinkSection: s.button?.deeplinkSection,
                    applicationId: s.button?.navigableStorefrontApplicationId?.value,
                    shopCollectionId: s.button?.shopCollectionId?.value,
                    analyticsLocations: d,
                    analyticsLocation: u,
                    onClose: x,
                }),
                v = (0, T.C)(s.helpArticle, s.helpArticleId),
                k =
                    null != v
                        ? () =>
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, r.jsx)(h.Anchor, { className: I.$T, href: v.url, children: v.linkText }),
                                  ],
                              })
                        : void 0,
                C = (0, T.C)(s.disclaimer?.disclaimerHelpArticle, ""),
                D =
                    null != C
                        ? () =>
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, r.jsx)(h.Anchor, { className: I.$T, href: C.url, children: C.linkText }),
                                  ],
                              })
                        : void 0,
                P = { type: "video", src: m ? s.heroArtVideoLinkLightTheme : s.videoLink };
            return (
                null != s.heroArtVideoSubtitles &&
                    (P.subtitles = s.heroArtVideoSubtitles.map((e) => ({
                        locale: e.locale,
                        src: e.link,
                        isDefault: !1,
                    }))),
                ("" !== s.heroArtImageLinkDarkTheme || "" !== s.heroArtImageLinkLightTheme) &&
                    (P = { type: "image", src: m ? s.heroArtImageLinkLightTheme : s.heroArtImageLinkDarkTheme }),
                {
                    componentId: n,
                    componentType: a,
                    promotionId: o,
                    promotion: l,
                    renderModalProps: c,
                    header: s.header,
                    modalTopPill: s.modalTopPill,
                    subHeader: s.subheader,
                    subHeaderExtra: k,
                    body: s.body,
                    heroArt: P,
                    featureCards: s.featureCards.map((e) => {
                        let t = (0, T.C)(e.helpArticle, ""),
                            n =
                                null != t
                                    ? () =>
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  "\xa0",
                                                  (0, r.jsx)(h.Anchor, {
                                                      className: I.$T,
                                                      href: t.url,
                                                      children: t.linkText,
                                                  }),
                                              ],
                                          })
                                    : void 0;
                        return {
                            header: e.header,
                            subHeader: e.body,
                            subHeaderExtra: n,
                            imageSrc: m ? e.imageLinkLightTheme : e.imageLink,
                            tagText: "" !== e.pill ? e.pill : void 0,
                        };
                    }),
                    changeLogId: _,
                    button: function () {
                        let e = Date.now(),
                            { icon: n, iconPosition: a } = (0, f.x)({ buttonAction: s.button?.buttonAction });
                        return (0, r.jsx)(N.$, {
                            variant: "expressive",
                            size: "md",
                            onClick: async function () {
                                M.default.track(O.HAw.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: _,
                                    cta_type: t,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: _,
                                });
                                try {
                                    (y === E.d.OPEN_MARKETING_PAGE ||
                                        y === E.d.OPEN_SOCIAL_LAYER_STOREFRONT ||
                                        y === E.d.OPEN_SHOP) &&
                                        (await (0, A.qr)(i.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, o, {
                                            dismissAction: g.i.TAKE_ACTION,
                                        }));
                                } catch (e) {
                                    p.A.captureException(e);
                                } finally {
                                    R();
                                }
                            },
                            text: L,
                            icon: n,
                            iconPosition: a,
                        });
                    },
                    disclaimer: s.disclaimer?.disclaimerText !== "" ? s.disclaimer?.disclaimerText : void 0,
                    disclaimerExtra: D,
                }
            );
        })({
            componentId: t,
            componentType: n,
            promotionId: a,
            promotion: l,
            content: L.properties.announcementModalVariant1,
            renderModalProps: _,
            analyticsLocations: R,
            analyticsLocation: y,
            isLightTheme: k,
        });
        return (0, r.jsx)(Z, { ...e });
    }
    return (
        p.A.captureMessage(
            `Property type ${L.properties.oneofKind} is not supported to render ServerDriveAnnouncementModal`,
        ),
        null
    );
}
