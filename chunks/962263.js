n.d(t, { default: () => J, H: () => Z });
var r = n(477900),
    a = n(582128),
    o = n(554146),
    i = n(804638),
    l = n(366010),
    s = n(212245),
    c = n(736653),
    d = n(793574),
    u = n(688810),
    m = n(826673),
    _ = n(856383),
    p = n(308588),
    h = n(821609),
    E = n(28863),
    N = n(543862),
    A = n(129230),
    M = n(637706),
    f = n(498470),
    T = n(652215),
    g = n(49999),
    b = n(792996),
    O = n(696918);
(n(323874), n(14289), n(35956));
var x = n(503698),
    I = n.n(x),
    L = n(613412),
    y = n(517352),
    v = n(855986),
    R = n(815021),
    k = n(935462),
    P = n(805251),
    C = n(534514),
    D = n(834730),
    j = n(315629),
    S = n(73153),
    w = n(775602),
    G = n(139286),
    H = n(693942),
    U = n(265705),
    K = n(915089),
    V = n(607470),
    F = n(383055),
    $ = n(186111),
    Y = n(774774),
    z = n(209012);
let B = [];
function W(e) {
    let { tagText: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: I()(z.Gr, n),
        children: (0, r.jsx)(P.E, { type: { text: t }, variant: "premium" }),
    });
}
function q(e) {
    let { header: t, subHeader: n, subHeaderExtra: a, imageSrc: o, tagText: i, wideStyle: l } = e;
    return (0, r.jsxs)("div", {
        className: I()(z.Vr, { [z.tF]: l }),
        children: [
            null != i ? (0, r.jsx)(W, { tagText: i, className: z.bX }) : null,
            (0, r.jsx)("img", { alt: "", className: I()(z._n, { [z.tF]: l }), src: o }),
            (0, r.jsxs)("div", {
                className: I()(z.Zz, { [z.tF]: l }),
                children: [
                    (0, r.jsx)(C.D, { variant: "heading-sm/semibold", className: z.Hf, children: t }),
                    (0, r.jsxs)(D.E, { variant: "body-md/medium", color: "text-subtle", children: [n, a?.()] }),
                ],
            }),
        ],
    });
}
function Q(e) {
    let {
            componentId: t,
            componentType: n = y.oW.ANNOUNCEMENT_MODAL_VARIANT_1,
            promotionId: i,
            promotion: l,
            className: s,
            renderModalProps: c,
            heroArt: d,
            heroArtClassName: u,
            header: m,
            headerClassName: p,
            modalTopPill: h,
            subHeader: E,
            subHeaderExtra: M,
            featureCards: f,
            changeLogId: O,
            button: x,
            body: P,
            disclaimer: W,
            disclaimerExtra: Q,
        } = e,
        { onClose: Z, transitionState: J } = c,
        X = (0, K.GV)(),
        ee = f.length % 2 == 0,
        et = (0, v.bG)([w.Ay], () => w.Ay.useReducedMotion),
        [en, er] = a.useState(Date.now()),
        [ea, eo] = a.useState(0),
        [ei, el] = a.useState(0),
        [es, ec] = a.useState(!1),
        [ed, eu] = a.useState(!0),
        em = a.useRef(en),
        e_ = a.useRef(ea),
        ep = a.useRef(ei),
        eh = a.useRef(es),
        eE = a.useRef(ed),
        [eN, eA] = a.useState(B),
        eM = a.useRef(!1),
        { promotionKey: ef } = null != l ? l : {};
    (0, G.A)({
        type: L.ImpressionTypes.MODAL,
        name: L.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_id: t, component_type: n, promotion_id: i },
    });
    let eT = a.useRef(null),
        eg = a.useRef(!1);
    function eb() {
        let e = Date.now(),
            t = e - em.current,
            n = e_.current,
            r = ep.current;
        return (eh.current && (eo((n += t)), eE.current || el((r += t))), er(e), [n, r]);
    }
    return (
        a.useEffect(() => {
            let e = eT.current?.getScrollerNode();
            if (null == e) return;
            function r() {
                eg.current ||
                    eT.current?.isScrolledToBottom() !== !0 ||
                    ((eg.current = !0),
                    A.default.track(T.HAw.PREMIUM_MARKETING_COMPONENT_BOTTOM_VIEWED, {
                        component_id: t,
                        component_type: n,
                        visible_on_mount: eT.current?.isScrolledToTop() ?? !1,
                        promotion_id: i,
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
        }, [t, n, i]),
        a.useEffect(() => {
            (!0 !== eM.current &&
                (async function () {
                    try {
                        if ("video" !== d.type || null == d.subtitles) return;
                        let e = d.subtitles?.map(async (e) => {
                            let t = await fetch(e.src);
                            if (!t.ok) throw Error(`Failed to fetch the subtitle file ${e.src}`);
                            let n = await t.text(),
                                r = new Blob([n], { type: "text/vtt" }),
                                a = URL.createObjectURL(r);
                            return { ...e, src: a };
                        });
                        eA(await Promise.all(e));
                    } catch (e) {
                        (_.A.captureException(e), eA(B));
                    }
                })(),
                (eM.current = !0));
        }, [d, eN]),
        a.useEffect(
            () => () => {
                null != eN &&
                    eN.forEach((e) => {
                        URL.revokeObjectURL(e.src);
                    });
            },
            [eN],
        ),
        a.useEffect(() => {
            ((em.current = en), (e_.current = ea), (ep.current = ei), (eh.current = es), (eE.current = ed));
        }, [en, ea, ei, es, ed]),
        a.useEffect(
            () => () => {
                if ("video" === d.type || "embed" === d.type) {
                    let [e, t] = eb();
                    (A.default.track(T.HAw.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: O,
                        seconds_played: Math.round(e / 1e3),
                    }),
                        A.default.track(T.HAw.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: O,
                            seconds_unmuted: Math.round(t / 1e3),
                        }));
                }
            },
            [O, d.type],
        ),
        a.useEffect(() => {
            if ($.A.getLayers().includes(T.zgK.COMPONENT_PLAYGROUND)) return;
            (0, N.Vh)(o.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, { snowflakeId: i });
            let e = Date.now();
            return (
                A.default.track(T.HAw.CHANGE_LOG_OPENED, { change_log_id: O }),
                () => {
                    (A.default.track(T.HAw.CHANGE_LOG_CLOSED, {
                        change_log_id: O,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                    }),
                        (0, N.qr)(o.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, i, {
                            dismissAction: g.i.DISMISS,
                        }),
                        S.h.dispatch({
                            type: "PREMIUM_MARKETING_ANNOUNCEMENT_MODAL_DISMISSED",
                            promotionId: i,
                            promotionKey: ef,
                        }));
                }
            );
        }, [O, i, ef]),
        (0, r.jsx)(k.EO, {
            "data-migration-pending": !0,
            className: I()(z.zr, z.kv, s),
            transitionState: J,
            "aria-labelledby": X,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, r.jsxs)(j.h, {
                color: "nitro-pink",
                className: z.YV,
                children: [
                    (0, r.jsx)("div", {
                        className: z.cG,
                        children: (0, r.jsx)(R.J, { "data-migration-pending": !0, onClick: async () => await Z() }),
                    }),
                    (0, r.jsxs)(k.$m, {
                        "data-migration-pending": !0,
                        className: z.Qs,
                        scrollbarType: "auto",
                        overflow: "auto",
                        scrollerRef: eT,
                        children: [
                            (function () {
                                switch (d.type) {
                                    case "video":
                                        return (0, r.jsx)(V.A, {
                                            className: I()(z.Ki, u),
                                            autoPlay: !et,
                                            loop: !0,
                                            muted: !0,
                                            controls: !0,
                                            controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                                            src: d.src,
                                            poster: d.poster,
                                            onPlay: (e) => {
                                                (A.default.track(T.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
                                                    change_log_id: O,
                                                }),
                                                    er(Date.now()),
                                                    ec(!0),
                                                    eu(e.currentTarget.muted));
                                            },
                                            onEnded: (e) => {
                                                (eb(), eu(e.currentTarget.muted), ec(!1));
                                            },
                                            onVolumeChange: (e) => {
                                                (eb(), eu(e.currentTarget.muted));
                                            },
                                            onPause: (e) => {
                                                (eb(), eu(e.currentTarget.muted), ec(!1));
                                            },
                                            disablePictureInPicture: !0,
                                            children: eN?.map((e) => {
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
                                        return (0, r.jsx)(U.rr, {
                                            className: I()(z.Ki, u),
                                            allowFullScreen: !1,
                                            href: d.href,
                                            thumbnail: d.thumbnail,
                                            video: d.embed,
                                            provider: H.mt.YOUTUBE,
                                            maxWidth: d.embed.width,
                                            maxHeight: d.embed.height,
                                            renderVideoComponent: F.$o,
                                            renderImageComponent: F.LL,
                                            renderLinkComponent: F.bU,
                                            onPlay: () => {
                                                A.default.track(T.HAw.CHANGE_LOG_VIDEO_INTERACTED, {
                                                    change_log_id: O,
                                                });
                                            },
                                        });
                                    case "image":
                                        return (0, r.jsx)("img", { alt: "", className: I()(z.Ki, u), src: d.src });
                                    default:
                                        return null;
                                }
                            })(),
                            null != h && "" !== h
                                ? (0, r.jsx)(Y.e4, {
                                      text: h,
                                      colorOptions: Y.at.PREMIUM_TIER_2_WHITE_FILL,
                                      className: z.ON,
                                  })
                                : null,
                            (0, r.jsxs)("div", {
                                className: z.Z,
                                children: [
                                    (0, r.jsx)(C.D, { variant: "nitro-md", className: I()(z.TK, p), children: m }),
                                    (0, r.jsxs)(D.E, {
                                        variant: "body-md/medium",
                                        color: "text-subtle",
                                        className: z.uI,
                                        children: [E, M?.()],
                                    }),
                                ],
                            }),
                            null != P &&
                                "" !== P &&
                                (0, r.jsx)(C.D, { variant: "heading-lg/semibold", className: z.G3, children: P }),
                            f.length > 0 &&
                                (0, r.jsx)("div", {
                                    className: z.IS,
                                    children: f.map((e, t) =>
                                        (0, r.jsx)(q, { ...e, wideStyle: ee }, `${e.header}_${t}`),
                                    ),
                                }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: z.xQ,
                        children: [
                            x(),
                            null != W &&
                                "" !== W &&
                                (0, r.jsxs)(D.E, {
                                    variant: "body-xs/medium",
                                    color: "text-subtle",
                                    className: z.ed,
                                    children: [W, Q?.()],
                                }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function Z(e) {
    let { promotionId: t, properties: n, isPreview: r } = e,
        a = i.m.clone(n);
    if ("announcementModalVariant1" !== a.properties.oneofKind) return null;
    {
        let { isDismissed: e } = (0, m.u$)(o.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, t);
        return !r && e ? null : (r && (a.properties.announcementModalVariant1.dismissKey = ""), a);
    }
}
function J(e) {
    let { componentId: t, promotionId: n, promotion: a, renderModalProps: i, properties: m } = e,
        { location: x } = (0, s.p)(),
        { analyticsLocations: I } = (0, u.Ay)(d.A.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL),
        L = (0, c.Ay)(),
        y = (0, l.q)(L);
    if ("announcementModalVariant1" === m.properties.oneofKind) {
        let e = (function (e) {
            let t,
                {
                    componentId: n,
                    promotionId: a,
                    promotion: i,
                    content: l,
                    renderModalProps: s,
                    analyticsLocations: c,
                    analyticsLocation: d,
                    isLightTheme: u,
                } = e,
                m = `AnnouncementModalVariant1_${n}`,
                { onClose: x } = s,
                I = l.button?.copy ?? b.intl.string(b.t.YScQSF),
                L = l.button?.buttonAction;
            switch (L) {
                case p.d.OPEN_MARKETING_PAGE:
                    t = "jump_to_mkt_button";
                    break;
                case p.d.OPEN_SOCIAL_LAYER_STOREFRONT:
                    t = "jump_to_slayer_storefront_button";
                    break;
                case p.d.OPEN_SHOP:
                    t = "jump_to_shop_button";
                    break;
                default:
                    t = "get_nitro_button";
            }
            let y = (0, f.h)({
                    buttonAction: l.button?.buttonAction,
                    deeplinkSection: l.button?.deeplinkSection,
                    applicationId: l.button?.navigableStorefrontApplicationId?.value,
                    shopCollectionId: l.button?.shopCollectionId?.value,
                    analyticsLocations: c,
                    analyticsLocation: d,
                    onClose: x,
                }),
                v = (0, M.C)(l.helpArticle, l.helpArticleId),
                R =
                    null != v
                        ? () =>
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, r.jsx)(E.Anchor, { className: O.$T, href: v.url, children: v.linkText }),
                                  ],
                              })
                        : void 0,
                k = (0, M.C)(l.disclaimer?.disclaimerHelpArticle, ""),
                P =
                    null != k
                        ? () =>
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      "\xa0",
                                      (0, r.jsx)(E.Anchor, { className: O.$T, href: k.url, children: k.linkText }),
                                  ],
                              })
                        : void 0,
                C = { type: "video", src: u ? l.heroArtVideoLinkLightTheme : l.videoLink };
            return (
                null != l.heroArtVideoSubtitles &&
                    (C.subtitles = l.heroArtVideoSubtitles.map((e) => ({
                        locale: e.locale,
                        src: e.link,
                        isDefault: !1,
                    }))),
                ("" !== l.heroArtImageLinkDarkTheme || "" !== l.heroArtImageLinkLightTheme) &&
                    (C = { type: "image", src: u ? l.heroArtImageLinkLightTheme : l.heroArtImageLinkDarkTheme }),
                {
                    componentId: n,
                    promotionId: a,
                    promotion: i,
                    renderModalProps: s,
                    header: l.header,
                    modalTopPill: l.modalTopPill,
                    subHeader: l.subheader,
                    subHeaderExtra: R,
                    body: l.body,
                    heroArt: C,
                    featureCards: l.featureCards.map((e) => {
                        let t = (0, M.C)(e.helpArticle, ""),
                            n =
                                null != t
                                    ? () =>
                                          (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  "\xa0",
                                                  (0, r.jsx)(E.Anchor, {
                                                      className: O.$T,
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
                            imageSrc: u ? e.imageLinkLightTheme : e.imageLink,
                            tagText: "" !== e.pill ? e.pill : void 0,
                        };
                    }),
                    changeLogId: m,
                    button: function () {
                        let e = Date.now(),
                            { icon: n, iconPosition: i } = (0, f.x)({ buttonAction: l.button?.buttonAction });
                        return (0, r.jsx)(h.$, {
                            variant: "expressive",
                            size: "md",
                            onClick: async function () {
                                A.default.track(T.HAw.CHANGE_LOG_CTA_CLICKED, {
                                    change_log_id: m,
                                    cta_type: t,
                                    seconds_open: Math.round((Date.now() - e) / 1e3),
                                    target: m,
                                });
                                try {
                                    (L === p.d.OPEN_MARKETING_PAGE ||
                                        L === p.d.OPEN_SOCIAL_LAYER_STOREFRONT ||
                                        L === p.d.OPEN_SHOP) &&
                                        (await (0, N.qr)(o.M.PREMIUM_MARKETING_MOMENT_DESKTOP_ANNOUNCEMENT_MODAL, a, {
                                            dismissAction: g.i.TAKE_ACTION,
                                        }));
                                } catch (e) {
                                    _.A.captureException(e);
                                } finally {
                                    y();
                                }
                            },
                            text: I,
                            icon: n,
                            iconPosition: i,
                        });
                    },
                    disclaimer: l.disclaimer?.disclaimerText !== "" ? l.disclaimer?.disclaimerText : void 0,
                    disclaimerExtra: P,
                }
            );
        })({
            componentId: t,
            promotionId: n,
            promotion: a,
            content: m.properties.announcementModalVariant1,
            renderModalProps: i,
            analyticsLocations: I,
            analyticsLocation: x,
            isLightTheme: y,
        });
        return (0, r.jsx)(Q, { ...e });
    }
    return (
        _.A.captureMessage(
            `Property type ${m.properties.oneofKind} is not supported to render ServerDriveAnnouncementModal`,
        ),
        null
    );
}
