n.d(t, { A: () => O }), n(323874), n(14289), n(35956);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(110259),
    o = n(877624),
    d = n(311907),
    c = n(554146),
    u = n(732955),
    A = n(397927),
    h = n(775602),
    _ = n(139286),
    m = n(871751),
    p = n(259407),
    g = n(915089),
    E = n(607470),
    f = n(367727),
    I = n(652176),
    C = n(954571),
    N = n(728458),
    T = n(652215),
    S = n(49999),
    x = n(985018),
    v = n(530811);
let b = [],
    y = (e) => {
        let { tagText: t, className: n } = e;
        return (0, i.jsx)(A.LpS, { className: l()(v.Tc, n), text: t });
    },
    L = (e) => {
        let { header: t, subHeader: n, imageSrc: r, tagText: a, wideStyle: s } = e;
        return (0, i.jsxs)("div", {
            className: l()(v.Vr, { [v.tF]: s }),
            children: [
                null != a ? (0, i.jsx)(y, { tagText: a, className: v.bX }) : null,
                (0, i.jsx)("img", { alt: "", className: l()(v._n, { [v.tF]: s }), src: r }),
                (0, i.jsxs)("div", {
                    className: v.Zz,
                    children: [
                        (0, i.jsx)(A.Heading, { variant: "heading-md/bold", className: v.Hf, children: t }),
                        (0, i.jsx)(A.Text, { variant: "text-md/normal", color: "text-subtle", children: n }),
                    ],
                }),
            ],
        });
    };
function O(e) {
    let {
            componentId: t,
            promotionId: n,
            className: a,
            renderModalProps: y,
            heroArt: O,
            heroArtClassName: R,
            modalTopExtra: P,
            header: j,
            headerClassName: D,
            subHeader: w,
            subHeaderExtra: M,
            featureCards: U,
            changeLogId: G,
            button: k,
            body: V,
        } = e,
        { onClose: B, transitionState: H } = y,
        F = (0, g.GV)(),
        Y = U.length % 2 == 0,
        W = (0, d.bG)([h.A], () => h.A.useReducedMotion),
        [q, z] = r.useState(Date.now()),
        [K, $] = r.useState(0),
        [Q, X] = r.useState(0),
        [Z, J] = r.useState(!1),
        [ee, et] = r.useState(!0),
        en = r.useRef(q),
        ei = r.useRef(K),
        er = r.useRef(Q),
        ea = r.useRef(Z),
        el = r.useRef(ee),
        [es, eo] = r.useState(b),
        ed = r.useRef(!1);
    function ec() {
        let e = Date.now(),
            t = e - en.current,
            n = ei.current,
            i = er.current;
        return ea.current && ($((n += t)), el.current || X((i += t))), z(e), [n, i];
    }
    return (
        (0, _.A)({
            type: s.ImpressionTypes.MODAL,
            name: s.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_id: t, component_type: o.C.ANNOUNCEMENT_MODAL },
        }),
        r.useEffect(() => {
            let e = async () => {
                try {
                    if ("video" !== O.type || null == O.subtitles) return;
                    let e = O.subtitles?.map(async (e) => {
                        let t = await fetch(e.src);
                        if (!t.ok) throw Error(`Failed to fetch the subtitle file ${e.src}`);
                        let n = await t.text(),
                            i = new Blob([n], { type: "text/vtt" }),
                            r = URL.createObjectURL(i);
                        return { ...e, src: r };
                    });
                    eo(await Promise.all(e));
                } catch (e) {
                    N.A.captureException(e), eo(b);
                }
            };
            !0 !== ed.current && e(), (ed.current = !0);
        }, [O, es]),
        r.useEffect(
            () => () => {
                null != es &&
                    es.forEach((e) => {
                        URL.revokeObjectURL(e.src);
                    });
            },
            [es],
        ),
        r.useEffect(() => {
            (en.current = q), (ei.current = K), (er.current = Q), (ea.current = Z), (el.current = ee);
        }, [q, K, Q, Z, ee]),
        r.useEffect(
            () => () => {
                if ("video" === O.type || "embed" === O.type) {
                    let [e, t] = ec();
                    C.default.track(T.HAw.CHANGE_LOG_VIDEO_PLAYED, {
                        change_log_id: G,
                        seconds_played: Math.round(e / 1e3),
                    }),
                        C.default.track(T.HAw.CHANGE_LOG_VIDEO_UNMUTE, {
                            change_log_id: G,
                            seconds_unmuted: Math.round(t / 1e3),
                        });
                }
            },
            [G, O.type],
        ),
        r.useEffect(() => {
            (0, f.Vh)(c.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL);
            let e = Date.now();
            return (
                C.default.track(T.HAw.CHANGE_LOG_OPENED, { change_log_id: G }),
                () => {
                    C.default.track(T.HAw.CHANGE_LOG_CLOSED, {
                        change_log_id: G,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                    }),
                        (0, f.qr)(c.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, n, { dismissAction: S.i.DISMISS });
                }
            );
        }, [G, n]),
        (0, i.jsx)(A.EOs, {
            "data-migration-pending": !0,
            className: l()(v.zr, v.kv, a),
            transitionState: H,
            "aria-labelledby": F,
            parentComponent: "PremiumAnnouncementModalVariant1",
            children: (0, i.jsxs)(A.hLv, {
                color: "nitro-pink",
                children: [
                    (0, i.jsx)("div", {
                        className: v.cG,
                        children: (0, i.jsx)(u.JnF, { "data-migration-pending": !0, onClick: async () => await B() }),
                    }),
                    P?.(),
                    (0, i.jsxs)(A.$mQ, {
                        "data-migration-pending": !0,
                        className: v.Qs,
                        children: [
                            "video" === O.type
                                ? (0, i.jsx)(E.A, {
                                      className: l()(v.Ki, R),
                                      autoPlay: !W,
                                      loop: !0,
                                      muted: !0,
                                      controls: !0,
                                      controlsList: "nofullscreen nodownload noremoteplayback noplaybackrate",
                                      src: O.src,
                                      poster: O.poster,
                                      onPlay: (e) => {
                                          C.default.track(T.HAw.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: G }),
                                              z(Date.now()),
                                              J(!0),
                                              et(e.currentTarget.muted);
                                      },
                                      onEnded: (e) => {
                                          ec(), et(e.currentTarget.muted), J(!1);
                                      },
                                      onVolumeChange: (e) => {
                                          ec(), et(e.currentTarget.muted);
                                      },
                                      onPause: (e) => {
                                          ec(), et(e.currentTarget.muted), J(!1);
                                      },
                                      disablePictureInPicture: !0,
                                      children: es?.map((e) => {
                                          let t = (0, x.getLanguages)().find((t) => t.code === e.locale);
                                          return null == t
                                              ? null
                                              : (0, i.jsx)(
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
                                  })
                                : "embed" === O.type
                                  ? (0, i.jsx)(m.rr, {
                                        className: l()(v.Ki, R),
                                        allowFullScreen: !1,
                                        href: O.href,
                                        thumbnail: O.thumbnail,
                                        video: O.embed,
                                        provider: p.mt.YOUTUBE,
                                        maxWidth: O.embed.width,
                                        maxHeight: O.embed.height,
                                        renderVideoComponent: I.$o,
                                        renderImageComponent: I.LL,
                                        renderLinkComponent: I.bU,
                                        onPlay: () => {
                                            C.default.track(T.HAw.CHANGE_LOG_VIDEO_INTERACTED, { change_log_id: G });
                                        },
                                    })
                                  : "image" === O.type
                                    ? (0, i.jsx)("img", { alt: "", className: l()(v.Ki, R), src: O.src })
                                    : null,
                            (0, i.jsx)(A.Heading, { variant: "display-md", className: l()(v.TK, D), children: j }),
                            (0, i.jsxs)(A.Text, {
                                variant: "text-md/normal",
                                color: "text-subtle",
                                className: v.uI,
                                children: [w, M?.()],
                            }),
                            null != V &&
                                "" !== V &&
                                (0, i.jsx)(A.Heading, { variant: "heading-lg/semibold", className: v.G3, children: V }),
                            U.length > 0 &&
                                (0, i.jsx)("div", {
                                    className: l()(v.IS, { [v.tF]: Y }),
                                    children: U.map((e, t) =>
                                        (0, i.jsx)(L, { ...e, wideStyle: Y }, `${e.header}_${t}`),
                                    ),
                                }),
                            (0, i.jsx)("div", { className: v.UD, children: k() }),
                        ],
                    }),
                ],
            }),
        })
    );
}
