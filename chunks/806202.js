n.d(t, { A: () => nw }), n(938796);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    c = n(607399),
    d = n(478437),
    u = n(665260),
    h = n(17928),
    m = n(922016),
    g = n(568602),
    p = n(707554),
    A = n(140735),
    f = n(192308),
    C = n(465532),
    E = n(720149),
    x = n(414798),
    S = n(608299),
    _ = n(119031),
    I = n(820284),
    j = n(955572),
    y = n(775602),
    b = n(95561),
    T = n(211401),
    N = n(989837),
    v = n(500049),
    M = n(721768),
    R = n(459016),
    D = n(842209),
    L = n(861382),
    P = n(392054),
    k = n(168186),
    O = n(545152),
    G = n(972995),
    U = n(355622),
    w = n(408018);
n(321073), n(323874), n(14289), n(35956);
var F = n(922139),
    H = n(835245),
    B = n(661531),
    V = n(990078),
    K = n(717421),
    z = n(187322),
    W = n(821609),
    q = n(834730),
    $ = n(559647),
    J = n(163328),
    Z = n(980707),
    Y = n(477782),
    X = n(241326),
    Q = n(81369),
    ee = n(939249),
    et = n(750943),
    en = n(155718),
    el = n(565150),
    ei = n(793574),
    es = n(688810),
    ea = n(305070);
let er = (0, n(839214).D)(() => ({ channelDrafts: {} }));
function eo(e, t) {
    er.setState((n) => {
        let l = n.channelDrafts[e];
        return {
            channelDrafts: {
                ...n.channelDrafts,
                [e]: { heroFile: null, title: "", publish: !0, createThread: !0, ...l, ...t },
            },
        };
    });
}
var ec = n(598071),
    ed = n(101555),
    eu = n(731231),
    eh = n(703007),
    em = n(2553),
    eg = n(946274),
    ep = n(135621),
    eA = n(406704),
    ef = n(885386),
    eC = n(31717),
    eE = n(638128),
    ex = n(522602),
    eS = n(515718),
    e_ = n(723702),
    eI = n(518960),
    ej = n(486319),
    ey = n(392553),
    eb = n(123583),
    eT = n(138617),
    eN = n(851023),
    ev = n(822610),
    eM = n(652215);
n(827669), n(294920);
var eR = n(478644),
    eD = n(375708),
    eL = n(150679),
    eP = n(266599);
function ek(e, t, n) {
    let l = e.startsWith("attachment://"),
        i = e;
    if (l) {
        let t = e.slice(13);
        i = n ? `attachment://SPOILER_${t}` : e;
    }
    return {
        media: { url: i, proxyUrl: i, loadingState: en.TD.UNKNOWN, flags: 0 },
        description: t ?? void 0,
        spoiler: n,
    };
}
let eO = i.memo(
    i.forwardRef(function (e, t) {
        let n,
            {
                textValue: s,
                richValue: r,
                className: c,
                id: d,
                required: u,
                disabled: g,
                accessibilityLabel: p,
                channel: A,
                type: f,
                focused: C,
                onChange: E,
                onResize: x,
                onBlur: _,
                onFocus: I,
                onKeyDown: j,
                onSubmit: b,
                promptToUpload: T,
                canMentionRoles: N,
                canMentionChannels: v,
                maxCharacterCount: M,
                placeholder: R,
                "aria-describedby": D,
                "aria-labelledby": P,
                setEditorRef: k,
                autoCompletePosition: O,
                disableThemedBackground: G = !1,
                emojiPickerCloseOnModalOuterClick: w,
                parentModalKey: H,
            } = e,
            B = er.useField("channelDrafts")[A.id],
            V = B?.title ?? "",
            Z = B?.heroFile,
            Y = B?.publish ?? !0,
            X = B?.createThread ?? !0;
        o()(null != f, "chat input type must be set");
        let { analyticsLocations: Q } = (0, es.Ay)(ei.A.CHANNEL_TEXT_AREA),
            ee = (0, eT.L0)(t),
            et = i.useRef(null),
            el = i.useRef(null),
            ed = i.useRef(null),
            eh = i.useRef(null);
        k?.(el.current);
        let { activeCommand: em } = (0, h.cf)([L.A], () => ({
                activeCommand: f.commands?.enabled ? L.A.getActiveCommand(A.id) : null,
                activeCommandSection: f.commands?.enabled ? L.A.getActiveCommandSection(A.id) : null,
            })),
            {
                isLurking: eg,
                isPendingMember: eS,
                disabled: eI,
                canAttachFiles: eN,
                canEveryoneSendMessages: eR,
            } = (0, eT.Sk)(A, f, em, g),
            eO = !ef.D_.useSetting() && !(0, e_.isAndroidWeb)() && null != window.ResizeObserver,
            eH = !eO || !f.commands?.enabled || !C || "/" !== s,
            eB = (0, ep.A)(),
            { fontSize: eV } = (0, h.cf)([y.Ay], () => ({
                fontSize: y.Ay.fontSize,
                isSubmitButtonEnabled: y.Ay.isSubmitButtonEnabled,
            })),
            eK = (0, h.bG)([eE.A], () => eE.A.isEnabled()),
            ez = (0, eA.n)(A);
        (0, eT.N_)(f, eI, A.id);
        let { eventEmitter: eW, handleEditorSelectionChanged: eq } = (0, eT.ml)(el, s, r),
            e$ = i.useCallback(
                (e) => {
                    let t = (e) => (e.shouldClear && (eo(A.id, { title: "", heroFile: null }), el.current?.blur()), e),
                        n = [],
                        l = (V.length > 0 ? V : e.value.length > 0 ? e.value : eD.intl.string(eD.t["7Xm5QI"])).slice(
                            0,
                            eM.Ign,
                        );
                    if (null == Z)
                        return b({
                            ...e,
                            announcementSendOptions: { createThread: ez && X, threadName: l, publish: Y },
                        }).then(t);
                    n.push({ type: en.I5.MEDIA_GALLERY, items: [ek(`attachment://${Z.name}`, null, !1)], id: "82733" }),
                        e.value.length > 0 && n.push({ type: en.I5.TEXT_DISPLAY, content: e.value, id: "82744" });
                    let i = ex.A.getUploads(A.id, eC.C.ChannelMessage),
                        s = i.filter((e) => (e.isImage || e.isVideo) && e.filename !== Z?.name),
                        a = i.filter((e) => !e.isImage && !e.isVideo && e.filename !== Z?.name),
                        r = s.map((e) => ek(`attachment://${e.filename}`, e.description, e.spoiler));
                    return (
                        r.length > 0 && n.push({ type: en.I5.MEDIA_GALLERY, items: r, id: "82755" }),
                        a.forEach((e, t) => {
                            n.push({
                                type: en.I5.FILE,
                                file: ek(`attachment://${e.filename}`, e.description, e.spoiler).media,
                                id: `${82766 + t}`,
                                spoiler: e.spoiler,
                                name: null,
                                size: null,
                            });
                        }),
                        b({
                            ...e,
                            components: n,
                            announcementSendOptions: { createThread: ez && X, threadName: l, publish: Y },
                        }).then(t)
                    );
                },
                [b, V, Z, A.id, X, Y, ez],
            ),
            { submit: eJ, handleSubmit: eZ } = (0, eT.Zx)(e$, f, el, eh, A.id),
            { autocompleteRef: eY, handleMaybeShowAutocomplete: eX, handleHideAutocomplete: eQ } = (0, eT.v7)(),
            e0 = i.useCallback(() => eh?.current?.hide(), []),
            { editorHeight: e1, handleResize: e2 } = (0, eT.ck)(x),
            {
                handleTab: e3,
                handleEnter: e4,
                handleMoveSelection: e7,
            } = ((n = i.useCallback(
                () => !!(!eH && et.current?.onTabOrEnter(!1)) || eY.current?.onTabOrEnter(!1) || !1,
                [eH],
            )),
            {
                handleTab: n,
                handleEnter: i.useCallback(
                    () => !!(!eH && et.current?.onTabOrEnter(!0)) || eY.current?.onTabOrEnter(!1) || !1,
                    [eH],
                ),
                handleMoveSelection: i.useCallback(
                    (e) => !!(!eH && et.current?.onMoveSelection(e)) || eY.current?.onMoveSelection(e) || !1,
                    [eH],
                ),
            }),
            {
                expressionPickerView: e5,
                shouldHideExpressionPicker: e8,
                handleOuterClick: e6,
            } = (0, eT.MD)(f, el, A.id),
            { handleAutocompleteVisibilityChange: e9 } = (0, eT.uW)(f, A.id),
            te = (0, eT.NO)(el),
            tt = (0, eT.Vu)(eJ, f, el),
            tn = (0, eT.HG)(el),
            tl = (0, eT.C)({
                editorRef: el,
                disabled: eI,
                textValue: s,
                channelId: A.id,
                chatInputType: f,
                submit: e$,
            });
        (0, ej.R)(eW, A.guild_id, A.id);
        let [ti, ts] = i.useState(!1),
            ta = i.useCallback(() => {
                e6(), ts(!0);
            }, [e6]),
            tr = ti || s.length > 0 || null != Z || V.length > 0,
            { editorHeaderHeight: to, paddingTop: tc } = (0, K.z)({
                editorHeaderHeight: 122 * !!tr,
                paddingTop: 16 * !!tr,
                config: { tension: 120, friction: 15, clamp: !0 },
            }),
            td = i.useRef(null),
            [tu, th] = i.useState(!1),
            tm = i.useRef(!1),
            tg = i.useCallback(() => {
                tm.current = !0;
                let e = setTimeout(() => {
                    tm.current && th(!0);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tp = i.useCallback(() => {
                tm.current = !1;
                let e = setTimeout(() => {
                    tm.current || th(!1);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tA = i.useCallback(() => {
                if (null == Z) return;
                let e = ex.A.getUploads(A.id, f.drafts.type),
                    t = e.find((e) => e.filename === Z.name)?.id;
                null != t && S.A.remove(A.id, t, eC.C.ChannelMessage), eo(A.id, { heroFile: null });
            }, [A.id, Z, f.drafts.type]);
        return (0, l.jsx)(ec.Sv, {
            value: eW,
            children: (0, l.jsxs)(es.f5, {
                value: Q,
                children: [
                    (0, l.jsxs)("div", {
                        ref: ee,
                        className: a()(c, eP.gM),
                        onMouseDown: ta,
                        children: [
                            (0, l.jsx)("div", {
                                ref: ed,
                                onScroll: e0,
                                className: a()(eP.Ui, { [eP.k6]: !G }),
                                children: (0, l.jsxs)("div", {
                                    className: a()(eP.vW, eL.vW),
                                    children: [
                                        (0, l.jsxs)("div", {
                                            className: eL.rf,
                                            children: [
                                                (0, l.jsxs)(F.animated.div, {
                                                    className: eL.ov,
                                                    style: { height: to, paddingTop: tc },
                                                    children: [
                                                        null != Z
                                                            ? (0, l.jsx)(eU, { file: Z, onRemoveHeroImage: tA })
                                                            : null,
                                                        null != Z
                                                            ? null
                                                            : (0, l.jsx)(eF, {
                                                                  channel: A,
                                                                  onImageUploaded: (e) => eo(A.id, { heroFile: e }),
                                                                  onFocus: () => ts(!0),
                                                              }),
                                                        (0, l.jsx)("input", {
                                                            maxLength: 140,
                                                            className: eL.hz,
                                                            placeholder: eD.intl.string(eD.t.Z8fYjO),
                                                            value: V,
                                                            onChange: (e) => eo(A.id, { title: e.target.value }),
                                                        }),
                                                    ],
                                                }),
                                                (0, l.jsx)("div", {
                                                    className: eL.I6,
                                                    children: (0, l.jsx)(z.vN, {
                                                        ringTarget: ee,
                                                        ringClassName: eP.Rg,
                                                        children: (0, l.jsx)(ey.A, {
                                                            ref: el,
                                                            id: d,
                                                            focused: C,
                                                            useSlate: eO,
                                                            textValue: s,
                                                            richValue: r,
                                                            disabled: eI,
                                                            placeholder: R,
                                                            required: u,
                                                            accessibilityLabel: p,
                                                            isPreviewing: (eg || eS) && eR,
                                                            channel: A,
                                                            type: U.oU.CREATE_ANNOUNCEMENT_POST,
                                                            canPasteFiles: eN,
                                                            uploadPromptCharacterCount: eM.CS1,
                                                            maxCharacterCount: M ?? eB,
                                                            allowNewLines: !0,
                                                            "aria-describedby": D,
                                                            onChange: E,
                                                            onResize: e2,
                                                            onBlur: _,
                                                            onFocus: I,
                                                            onKeyDown: j,
                                                            onSubmit: eJ,
                                                            onTab: e3,
                                                            onEnter: e4,
                                                            onMoveSelection: e7,
                                                            onSelectionChanged: eq,
                                                            onMaybeShowAutocomplete: eX,
                                                            onHideAutocomplete: eQ,
                                                            promptToUpload: T,
                                                            fontSize: eV,
                                                            spellcheckEnabled: eK,
                                                            canOnlyUseTextCommands: !1,
                                                            "aria-labelledby": P,
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, l.jsx)("div", {
                                            className: eL.KK,
                                            children: (0, l.jsx)(ev.A, {
                                                channelId: A.id,
                                                type: f,
                                                canAttachFiles: eN,
                                                ignoreFile: Z?.name,
                                                smallAttachments: !0,
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                            (0, l.jsx)("div", { className: eL.yF }),
                            (0, l.jsxs)("div", {
                                className: eL.qr,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: eL.j4,
                                        children: [
                                            (0, l.jsx)(ew, { channel: A }),
                                            (0, l.jsx)(eb.A, {
                                                type: U.oU.CREATE_ANNOUNCEMENT_POST,
                                                disabled: eI,
                                                channel: A,
                                                handleSubmit: eZ,
                                                isEmpty: 0 === s.trim().length,
                                                showAllButtons: !0,
                                                expressionButtonsHidden: !1,
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)("div", {
                                        className: eL.j4,
                                        children: (0, l.jsx)("div", {
                                            ref: td,
                                            className: eL.Qo,
                                            onMouseEnter: tg,
                                            onMouseLeave: tp,
                                            children: (0, l.jsx)(m.Y, {
                                                targetElementRef: td,
                                                renderPopout: () =>
                                                    (0, l.jsx)(eG, { channelId: A.id, canCreateThread: ez }),
                                                shouldShow: tu,
                                                autoInvert: !0,
                                                nudgeAlignIntoViewport: !0,
                                                position: "top",
                                                align: "right",
                                                children: (e) =>
                                                    (0, l.jsx)(W.$, {
                                                        ...e,
                                                        onClick: () => {
                                                            eJ(
                                                                `${
                                                                    V.length > 0
                                                                        ? `# ${V}
`
                                                                        : ""
                                                                }${s}`,
                                                            );
                                                        },
                                                        disabled: 0 === s.length && 0 === V.length,
                                                        size: "sm",
                                                        "aria-label": eD.intl.string(eD.t.TXNS7S),
                                                        innerClassName: eL.jo,
                                                        text: (0, l.jsxs)("div", {
                                                            className: eL.f9,
                                                            children: [
                                                                (0, l.jsx)(q.E, {
                                                                    variant: "text-sm/semibold",
                                                                    color: "always-white",
                                                                    children: eD.intl.string(eD.t.TXNS7S),
                                                                }),
                                                                (0, l.jsxs)("div", {
                                                                    className: eL.pj,
                                                                    children: [
                                                                        (0, l.jsx)($.l, { size: "xs", color: "white" }),
                                                                        ez && X
                                                                            ? (0, l.jsx)(J.y, {
                                                                                  size: "xxs",
                                                                                  color: "white",
                                                                                  className: eL.Q5,
                                                                              })
                                                                            : null,
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(ea.A, {
                                targetRef: ee,
                                ref: eY,
                                channel: A,
                                canMentionRoles: N,
                                canMentionChannels: v,
                                useNewSlashCommands: eO,
                                canOnlyUseTextCommands: !1,
                                canSendStickers: !0,
                                textValue: s,
                                focused: C,
                                expressionPickerView: e5,
                                type: f,
                                editorRef: el,
                                onSendMessage: eJ,
                                onSendSticker: () => {},
                                onVisibilityChange: e9,
                                editorHeight: e1,
                                setValue: (e, t) => E?.(null, e, t),
                                position: O,
                            }),
                        ],
                    }),
                    e8
                        ? null
                        : (0, l.jsx)(eu.A, {
                              positionTargetRef: ee,
                              type: f,
                              onSelectGIF: tt,
                              onSelectEmoji: te,
                              onSelectKaomoji: tn,
                              onSelectSticker: tl,
                              channel: A,
                              closeOnModalOuterClick: w,
                              parentModalKey: H,
                              position: "top",
                              align: "right",
                              positionLayerClassName: eP.BD,
                          }),
                ],
            }),
        });
    }),
);
function eG(e) {
    let { channelId: t, canCreateThread: n } = e,
        i = er.useField("channelDrafts")[t],
        s = i?.createThread ?? !0,
        a = i?.publish ?? !0;
    return (0, l.jsxs)(Z.W, {
        "data-menu-migrated": !0,
        "aria-label": eD.intl.string(eD.t["9WnJyo"]),
        navId: "send-announcement-options",
        onClose: eM.tEg,
        onSelect: eM.tEg,
        children: [
            (0, l.jsx)(Y.sL, {
                id: "create-thread",
                label: eD.intl.string(eD.t.rBIGBL),
                checked: n && s,
                disabled: !n,
                action: () => {
                    eo(t, { createThread: !s });
                },
            }),
            (0, l.jsx)(Y.sL, {
                id: "send-and-publish",
                label: eD.intl.string(eD.t.MFGE51),
                checked: a,
                action: () => {
                    eo(t, { publish: !a });
                },
            }),
        ],
    });
}
function eU(e) {
    let { file: t, onRemoveHeroImage: n } = e,
        [s, a] = i.useState();
    i.useEffect(() => {
        if (null == t || !1 === ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(t.type)) return;
        let e = URL.createObjectURL(t);
        return (
            a(e),
            () => {
                a(void 0), URL.revokeObjectURL(e);
            }
        );
    }, [t]);
    let [r, o] = i.useState(!1),
        c = i.useCallback(() => {
            o(!0);
        }, []),
        d = i.useCallback(() => {
            o(!1);
        }, []);
    return null == s
        ? null
        : (0, l.jsxs)("div", {
              onMouseEnter: c,
              onMouseLeave: d,
              className: eL.Lb,
              "aria-hidden": !0,
              children: [
                  (0, l.jsx)("img", { src: s, alt: eD.intl.string(eD.t["2ePvR8"]), className: eL.c8 }),
                  r
                      ? (0, l.jsx)(ed.Ay, {
                            className: eL.jM,
                            children: (0, l.jsx)(eN.A, {
                                tooltip: eD.intl.string(eD.t.VjC21x),
                                onClick: n,
                                dangerous: !0,
                                children: (0, l.jsx)(X.u, {}),
                            }),
                        })
                      : null,
              ],
          });
}
function ew(e) {
    let { channel: t } = e;
    return (0, l.jsx)(eh.A, {
        "aria-label": eD.intl.string(eD.t["/IBYAq"]),
        className: eL.g$,
        size: "icon",
        color: "transparent",
        look: "blank",
        onChange: (e) => {
            (0, eI.R)(e.currentTarget.files, t, eC.C.ChannelMessage, { requireConfirm: !0, origin: "file_picker" }),
                (e.currentTarget.value = null);
        },
        children: (0, l.jsx)(Q.H, {
            size: "custom",
            width: 20,
            height: 20,
            color: B.A.colors.INTERACTIVE_TEXT_DEFAULT,
        }),
    });
}
function eF(e) {
    let { channel: t, onImageUploaded: n, onFocus: s } = e,
        a = i.useRef(null),
        r = async (e, l) => {
            let i = await (0, eS.bX)(e, l.name, l.type),
                s = { id: (0, H.A)(), file: i, platform: el.xz.WEB, isThumbnail: !1, origin: "file_picker" };
            S.A.addFile({ file: s, channelId: t.id, draftType: eC.C.ChannelMessage }), n(i);
        },
        [o, c] = i.useState(!1),
        d = i.useCallback(() => {
            c(!0);
        }, []),
        u = i.useCallback(() => {
            c(!1);
        }, []);
    return (0, l.jsx)("div", {
        className: eL.qN,
        children: (0, l.jsx)(V.m, {
            asContainer: !0,
            text: eD.intl.string(eD.t["/IBYAq"]),
            position: "top",
            children: (0, l.jsxs)(ee.D, {
                className: eL.qN,
                onMouseOver: d,
                onMouseOut: u,
                onFocus: s,
                children: [
                    (0, l.jsx)(eg.Ay, {
                        ref: a,
                        onChange: r,
                        "aria-hidden": !0,
                        tabIndex: -1,
                        maxFileSizeBytes: eR.j,
                        onFileSizeError: () => (0, em.A)(eR.j),
                    }),
                    (0, l.jsx)(et.X, {
                        size: "md",
                        color: o ? B.A.colors.INTERACTIVE_TEXT_ACTIVE : B.A.colors.INTERACTIVE_TEXT_DEFAULT,
                    }),
                ],
            }),
        }),
    });
}
var eH = n(664929),
    eB = n(527078);
let eV = i.memo(function (e) {
    let { className: t, channel: n, section: i } = e,
        s = null != i ? (0, eH.Rg)(i) : null,
        r =
            null != s
                ? (0, l.jsx)(V.m, {
                      __unsupportedReactNodeAsText: i?.name ?? "",
                      position: "top",
                      children: (0, l.jsx)(s, { channel: n, section: i, width: 24, height: 24 }),
                  })
                : null;
    return (0, l.jsx)("div", {
        className: a()(t, eB.i),
        children: (0, l.jsx)("div", { className: eB.K, children: r }),
    });
});
var eK = n(703966),
    ez = n(35277);
let eW = (0, n(945810).mj)({
    kind: "user",
    name: "2026-02-announcement-composer",
    defaultConfig: { announcementComposer: !1 },
    variations: { 1: { announcementComposer: !0 } },
});
var eq = n(319365),
    e$ = n(151271),
    eJ = n(81400),
    eZ = n(353182),
    eY = n(402770);
function eX(e) {
    let {
        bannerIcon: t,
        bannerHeader: n,
        bannerSubtext: i,
        textStyles: s,
        headerStyles: r,
        containerStyles: o,
        children: c,
    } = e;
    return (0, l.jsxs)("div", {
        className: a()(eY.Ew, o),
        children: [
            (0, l.jsxs)("div", {
                className: a()(eY.lt, s),
                children: [
                    null != t && ("string" == typeof t ? (0, l.jsx)("img", { src: t, alt: "", className: eY.q3 }) : t),
                    (0, l.jsxs)("div", {
                        className: eY._M,
                        children: [
                            (0, l.jsx)("div", { className: a()(eY.U_, r), children: n }),
                            null != i && (0, l.jsx)("div", { className: eY.mi, children: i }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: eY.uu, children: c }),
        ],
    });
}
var eQ = n(206835),
    e0 = n(495544),
    e1 = n(696451),
    e2 = n(229527),
    e3 = n(340837),
    e4 = n(355097),
    e7 = n(944089);
function e5(e) {
    let { guild: t } = e,
        n = (0, eQ.A)({ scrollPosition: e4._F.GUILD_TAG });
    return (0, l.jsx)("div", {
        children: (0, l.jsx)(eX, {
            bannerIcon: (0, l.jsx)(eZ._, { size: "lg", color: "currentColor", className: e7.q3 }),
            bannerHeader: eD.intl.format(eD.t.GgMwjk, { guildName: t?.name ?? "" }),
            bannerSubtext: eD.intl.string(eD.t.ONjwD5),
            textStyles: e7.cI,
            headerStyles: e7.U_,
            children: (0, l.jsx)(W.$, {
                variant: "primary",
                size: "sm",
                text: eD.intl.string(eD.t.Viksoo),
                onClick: () => n(),
            }),
        }),
    });
}
function e8(e) {
    let { guild: t } = e,
        { analyticsLocations: n } = (0, es.Ay)(ei.A.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [i, s] = (0, eJ.j8)({ guildId: t?.id ?? eM.dJq, analyticsLocations: n }),
        a = s ? eD.intl.string(eD.t["9ph2v7"]) : eD.intl.string(eD.t.ldh9Cg),
        r = s ? eD.intl.string(eD.t["/PGQf0"]) : eD.intl.string(eD.t.WikgZ1);
    return (0, l.jsx)("div", {
        children: (0, l.jsx)(eX, {
            bannerIcon: (0, l.jsx)(eZ._, { size: "lg", color: "currentColor", className: e7.q3 }),
            bannerHeader: eD.intl.format(eD.t.kcYdTq, { guildName: t?.name ?? "" }),
            bannerSubtext: a,
            textStyles: e7.cI,
            headerStyles: e7.U_,
            children: (0, l.jsx)(W.$, {
                variant: "primary",
                size: "sm",
                text: r,
                onClick: () => {
                    i();
                },
            }),
        }),
    });
}
function e6(e) {
    let { guild: t } = e,
        n = (0, h.bG)([e0.default, e1.Ay], () => {
            if (null == t) return new Set();
            let e = e0.default.getId();
            return (0, e2.wj)(e1.Ay.getMember(t.id, e));
        }, [t]);
    return n.has(e3.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || n.has(e3.D.AUTOMOD_QUARANTINED_BIO)
        ? (0, l.jsx)(e8, { guild: t })
        : n.has(e3.D.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, l.jsx)(e5, { guild: t })
          : (0, l.jsx)(e8, { guild: t });
}
var e9 = n(554146),
    te = n(131607),
    tt = n(153488),
    tn = n(776096),
    tl = n(498642),
    ti = n(71393),
    ts = n(232835),
    ta = n(576705),
    tr = n(927813),
    to = n(935208),
    tc = n(342220);
let td = 90 * tr.A.Millis.DAY,
    tu = 14 * tr.A.Millis.DAY;
var th = n(49999),
    tm = n(316031),
    tg = n(870136),
    tp = n(60270),
    tA = n(576470),
    tf = n(496431),
    tC = n(592713),
    tE = n(264388),
    tx = n(534514),
    tS = n(30323);
function t_(e) {
    let { onClose: t, guildName: n } = e;
    return (0, l.jsxs)("div", {
        className: tS.kL,
        children: [
            (0, l.jsx)("div", {
                className: tS.zc,
                children: (0, l.jsx)(tp.g, {
                    size: "custom",
                    color: "currentColor",
                    className: tS.Kk,
                    width: 20,
                    height: 20,
                }),
            }),
            (0, l.jsxs)("div", {
                className: tS.wx,
                children: [
                    (0, l.jsx)(tx.D, {
                        variant: "heading-md/semibold",
                        className: tS.TK,
                        children: eD.intl.string(eD.t.LIIyeE),
                    }),
                    (0, l.jsx)(q.E, {
                        variant: "text-sm/normal",
                        children: eD.intl.format(eD.t["4/6vQh"], { guildName: n }),
                    }),
                    (0, l.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: tS.x6,
                        children: (0, l.jsx)(W.$, {
                            variant: "primary",
                            text: eD.intl.string(eD.t.BddRzS),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var tI = n(200700),
    tj = n(989924);
function ty(e) {
    let { guild: t, disabledUntil: n } = e,
        [s, a] = (0, tE.n)(t.id);
    return (
        !(function (e) {
            let { communicationDisabledUntil: t, userId: n, guildId: l } = e ?? {},
                s = (0, tf.A)(null != t ? Date.parse(t) : Date.now()).seconds,
                a = (0, i.useRef)(null);
            (0, i.useEffect)(
                () =>
                    null == e || null == l || null == n
                        ? void clearTimeout(a.current)
                        : (s <= 0 &&
                              null == a.current &&
                              (a.current = setTimeout(() => {
                                  tC.A.clearGuildMemberTimeout(l, n);
                              }, 1e3)),
                          () => {
                              null != a.current && (clearTimeout(a.current), (a.current = null));
                          }),
                [l, n, s, t, e],
            );
        })((0, h.bG)([e1.Ay, e0.default], () => e1.Ay.getMember(t.id, e0.default.getId()), [t.id])),
        (0, l.jsxs)("div", {
            children: [
                s ? (0, l.jsx)(t_, { onClose: () => a(t.id), guildName: t.name }) : null,
                (0, l.jsx)(eX, {
                    bannerIcon: (0, l.jsx)(tp.g, { size: "md", color: "currentColor", className: tj.q3 }),
                    bannerHeader: eD.intl.string(eD.t["9UoK6Y"]),
                    bannerSubtext: eD.intl.format(eD.t["4ZwD5G"], { link: tI.MO }),
                    textStyles: tj.cI,
                    headerStyles: tj.U_,
                    children: (0, l.jsx)(q.E, {
                        variant: "text-sm/semibold",
                        children: (0, l.jsx)(tA.A, { deadline: new Date(n), showUnits: !0, stopAtOneSec: !0 }),
                    }),
                }),
            ],
        })
    );
}
var tb = n(429933),
    tT = n(650336),
    tN = n(513609),
    tv = n(567231),
    tM = n(521427),
    tR = n(751258),
    tD = n(451909),
    tL = n(195880),
    tP = n(926262),
    tk = n(212676),
    tO = n(537174),
    tG = n(512599),
    tU = n(3137),
    tw = n(559908);
n(142703);
var tF = n(765671),
    tH = n(741961),
    tB = n(459793),
    tV = n(103640);
function tK(e, t) {
    return e === t || (e?.channelId === t?.channelId && e?.value === t?.value && e?.multiplier === t?.multiplier);
}
var tz = n(51940);
let tW = i.memo(function (e) {
        let { channelId: t, width: n } = e,
            s = (0, h.bG)([y.Ay], () => y.Ay.useReducedMotion),
            a = (0, h.bG)([tw.Ay], () => tw.Ay.getMostRecentMessageCombo(t), [t]),
            [r, o] = i.useState(!1);
        i.useEffect(() => {
            if (a?.displayed) return;
            o(!1),
                setImmediate(() => {
                    o((null != a ? (0, tV.RL)(a.combo) : 0) > 0);
                });
            let e = setTimeout(() => {
                o(!1), null != a && (0, tG.Nu)(a);
            }, 2e3);
            return () => clearTimeout(e);
        }, [a]);
        let c = null != a ? "100%" : "200%",
            d = (0, K.z)(
                {
                    opacity: +!!r,
                    translateY: r ? "0" : c,
                    pointerEvents: "none",
                    width: n,
                    config: s ? F.config.stiff : F.config.slow,
                },
                "animate-always",
            );
        return (
            null != a &&
            (0, l.jsx)(F.animated.div, {
                className: tz.Gi,
                style: d,
                children: (0, l.jsx)(q.E, { className: tz.fX, variant: "text-sm/bold", children: (0, tV.RL)(a.combo) }),
            })
        );
    }),
    tq = i.memo(function (e) {
        let { value: t, multiplier: n } = e,
            { color: s, square: r, flair: o } = i.useMemo(() => (0, tV.HN)(n), [n]);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(q.E, { className: tz.iR, variant: "text-sm/bold", children: t }),
                (0, l.jsxs)("div", {
                    className: tz._Z,
                    style: { color: s },
                    children: [
                        (0, l.jsx)(q.E, {
                            className: tz.On,
                            style: { color: s },
                            variant: "text-sm/bold",
                            children: eD.intl.format(eD.t["6bgVlq"], { multiplier: n }),
                        }),
                        r &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)("div", { className: a()(tz.QA, tz.kb), style: { backgroundColor: s } }),
                                    (0, l.jsx)("div", { className: a()(tz.QA, tz.pG), style: { backgroundColor: s } }),
                                ],
                            }),
                        o &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)("div", {
                                        className: a()(tz.ox, tz.kb),
                                        children: (0, l.jsx)(tB.A, { width: 24, height: 24 }),
                                    }),
                                    (0, l.jsx)("div", {
                                        className: a()(tz.ox, tz.pG),
                                        children: (0, l.jsx)(tB.A, { width: 24, height: 24 }),
                                    }),
                                ],
                            }),
                        1 === n &&
                            (0, l.jsx)(q.E, {
                                className: tz.uN,
                                variant: "text-sm/bold",
                                children: eD.intl.string(eD.t.b5Cpof),
                            }),
                    ],
                }),
            ],
        });
    }),
    t$ = i.memo(function (e) {
        let t,
            { channelId: n } = e,
            s = (0, h.bG)([e0.default], () => e0.default.getId()),
            a = (0, h.bG)([tH.A], () => tH.A.isTyping(n, s), [n, s]),
            r = (0, h.bG)([tU.A], () => tU.A.isEnabled()),
            o = (0, h.bG)([tw.Ay], () => tw.Ay.isComboing(s, n), [n, s]),
            { ref: c, width: d = 0 } = (0, tF.Ay)(),
            [u, m] = i.useState(!1),
            g =
                ((t = (0, h.bG)([tU.A], () => !!tU.A.isEnabled() && tU.A.combosEnabled)),
                (0, h.bG)(
                    [tw.Ay, e0.default],
                    () => (t ? tw.Ay.getUserCombo(e0.default.getId(), n) : void 0),
                    [n, t],
                    tK,
                )),
            p = r && o && a;
        i.useEffect(() => {
            p && m(!0);
            let e = setTimeout(() => m(p), 1e3);
            return () => clearTimeout(e);
        }, [p]);
        let A = (0, K.z)({
                opacity: +!!u,
                transform: u ? "translateY(0)" : "translateY(100%)",
                pointerEvents: "none",
                config: F.config.stiff,
            }),
            f = i.useMemo(() => g ?? { value: 0, multiplier: 1 }, [g]),
            C = i.useRef(f);
        i.useEffect(() => {
            (f.multiplier > 1 || f.value > 0) && (C.current = f);
        }, [f]);
        let { multiplier: E, value: x } = i.useMemo(
            () => ({ value: p ? f.value : C.current.value, multiplier: p ? f.multiplier : C.current.multiplier }),
            [p, f, C],
        );
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tW, { channelId: n, width: d }),
                (0, l.jsx)(F.animated.div, {
                    ref: c,
                    className: tz.p_,
                    style: A,
                    children: (0, l.jsx)(tq, { value: x, multiplier: E }),
                }),
            ],
        });
    });
var tJ = n(208343),
    tZ = n(31408),
    tY = n(810685),
    tX = n(806621),
    tQ = n(831502);
let t0 = () =>
    (0, l.jsx)(eX, {
        bannerIcon: (0, l.jsx)(tY.M, { alt: "", width: 80, height: 40 }),
        bannerHeader: eD.intl.string(eD.t.EouHwv),
        bannerSubtext: eD.intl.format(eD.t.PThBel, { appealLink: tQ.q }),
    });
var t1 = n(118517),
    t2 = n(853145),
    t3 = n(226698),
    t4 = n(221314),
    t7 = n(81987);
let t5 = (e) => {
    let { channelId: t } = e,
        n = i.useCallback(() => {
            t3.A.reopenModReport(t);
        }, [t]);
    return (0, l.jsx)(eX, {
        bannerHeader: (0, l.jsx)(q.E, {
            variant: "text-md/medium",
            color: "text-muted",
            children: eD.intl.string(t4.default["0eUUeF"]),
        }),
        headerStyles: t7.U,
        containerStyles: t7.c,
        children: (0, l.jsx)(W.$, {
            variant: "secondary",
            size: "sm",
            text: eD.intl.string(t4.default["6quCi9"]),
            onClick: n,
        }),
    });
};
var t8 = n(151282),
    t6 = n(199160),
    t9 = n(970244),
    ne = n(631576),
    nt = n(252263),
    nn = n(67259),
    nl = n(691540),
    ni = n(857250),
    ns = n(97483),
    na = n(47167),
    nr = n(734057),
    no = n(994500),
    nc = n(287809);
function nd(e) {
    let t = nr.A.getChannel(e),
        n = null != t ? (0, na.m1)(t, nc.default, no.A) : null,
        l = null == n ? eD.intl.string(eD.t.gi2swM) : eD.intl.formatToPlainString(eD.t.IFPJ6J, { channelName: n });
    (0, nl.P0)((0, ni.o)(l, ns.Ck.SUCCESS));
}
var nu = n(728321),
    nh = n(761640),
    nm = n(580745),
    ng = n(309010),
    np = n(174459),
    nA = n(871237),
    nf = n(11939),
    nC = n(625494),
    nE = n(806150),
    nx = n(382287),
    nS = n(137577),
    n_ = n(480870),
    nI = n(390756),
    nj = n(128783),
    ny = n(495359);
function nb() {
    return (0, l.jsxs)("div", {
        className: ny.kL,
        children: [
            (0, l.jsx)("div", { className: a()(ny.v9, ny.KJ) }),
            (0, l.jsx)("div", { className: a()(ny.v9, ny.rx) }),
        ],
    });
}
var nT = n(578434),
    nN = n(80683),
    nv = n(381941),
    nM = n(650583),
    nR = n(964623);
function nD(e) {
    e.preventDefault();
}
let nL = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function nP(e) {
    let { isSidebar: t, ...n } = e;
    return t ? (0, l.jsx)("section", { ...n, role: "complementary" }) : (0, l.jsx)("main", { ...n });
}
let nk = i.forwardRef((e, t) => (0, l.jsx)(nO, { ...e, ref: t }));
nk.displayName = "ChannelTextAreaForm";
class nO extends i.PureComponent {
    focusEditor() {
        this.editorRef?.focus();
    }
    submit() {
        this.editorRef?.submit();
    }
    isFirstChange = !0;
    editorRef = null;
    state = { ...(0, w.ur)(eC.A.getDraft(this.props.channel.id, eC.C.ChannelMessage)), contentWarningProps: null };
    componentDidMount() {
        eC.A.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        eC.A.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: l } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = eC.A.getDraft(n.id, eC.C.ChannelMessage);
            e !== l && this.setState((0, w.ur)(e));
        }
        t.textValue.length < eM.uvi && l.length >= eM.uvi && np.default.track(eM.HAw.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    draftDidChange = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.props,
                { textValue: n } = e.state,
                l = eC.A.getDraft(t.channel.id, eC.C.ChannelMessage);
            n !== l &&
                ("" === l || "" === n) &&
                e.setState((0, w.ur)(l), () => {
                    if (n !== l) {
                        let { onFocus: t } = e.props;
                        t?.();
                    }
                });
        };
    })();
    handleKeyDown = (e) => {
        let { keyboardModeEnabled: t, onKeyDown: n, channel: l } = this.props,
            i = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
            s = 0 !== this.state.textValue.length;
        switch (e.key) {
            case nM.dh.DELETE:
            case nM.dh.BACKSPACE:
                return void this.handleIncrementCombo("", 1);
            case nM.dh.ARROW_UP:
                if (i || s) return;
                if ((e.preventDefault(), t))
                    ex.A.getUploadCount(l.id, eC.C.ChannelMessage) > 0
                        ? nC._.dispatchToLastSubscribed(eM.jej.FOCUS_ATTACHMENT_AREA)
                        : nC._.dispatchToLastSubscribed(eM.jej.FOCUS_MESSAGES, { atEnd: !0 });
                else {
                    let { channel: e } = this.props,
                        t = ts.A.getLastChatCommandMessage(e.id),
                        n = ts.A.getLastEditableMessage(e.id);
                    null != t && null != n
                        ? to.default.compare(n.id, t.id) > 0
                            ? this.handleEditLastMessage(n)
                            : this.handleRecallLastCommand(t)
                        : null != t
                          ? this.handleRecallLastCommand(t)
                          : null != n && this.handleEditLastMessage(n);
                }
                return;
            case nM.dh.ESCAPE:
                if (i || e.target !== e.currentTarget) return;
                if ((e.preventDefault(), t)) return void (0, j.Bm)();
                if (ex.A.getUploadCount(l.id, eC.C.ChannelMessage) > 0)
                    return void S.A.clearAll(l.id, eC.C.ChannelMessage);
        }
        n?.(e, s);
    };
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        E.A.startEditMessageRecord(t.id, e), b.Ay.trackWithMetadata(eM.HAw.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: l } = (0, k.Ez)(e.interactionData),
            { command: i, application: s } = D.EW({ channel: t, type: "channel" }, n);
        if (null != i) {
            let e =
                null != s
                    ? {
                          type: P.Hf.APPLICATION,
                          id: s.id,
                          icon: s.icon,
                          name: s?.bot?.username ?? s.name,
                          application: s,
                      }
                    : null;
            M.Gf({
                channelId: t.id,
                command: i,
                section: e,
                location: P.Oh.RECALL,
                initialValues: (0, R.getInitialValuesFromInteractionOptions)(i, l ?? []),
                commandOrigin: P.iw.CHAT,
            });
        }
    }
    handleIncrementCombo = (e, t) => {
        if (!this.props.poggermodeEnabled) return;
        let n = this.props.channel.id,
            l = e0.default.getId(),
            i = tw.Ay.getUserCombo(l, n),
            s = (i?.value ?? 0) + 1;
        (0, tG.oG)({ channelId: n, userId: l, value: null != e ? e.length : s, multiplier: t });
    };
    handleTextareaChange = (e, t, n) => {
        let {
            keyboardModeEnabled: l,
            channel: { id: i },
        } = this.props;
        C.A.changeDraft(i, t, eC.C.ChannelMessage);
        let s = "" !== t && n !== this.state.richValue,
            a = s && !nL.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
        (this.isFirstChange = !1),
            a && this.state.textValue.length < t.length && this.handleIncrementCombo(),
            a ? x.A.startTyping(i) : "" === t && x.A.stopTyping(i),
            s && l && (0, j.Bm)(),
            this.setState({ textValue: t, richValue: n });
    };
    handleSendMessage = async (e) => {
        let {
            value: t,
            uploads: n,
            stickers: l,
            command: i,
            commandOptionValues: s,
            isGif: a,
            gifMetadata: r,
            components: o,
            announcementSendOptions: c,
        } = e;
        if (0 === (t = t.trim()).length && (null == l || 0 === l.length) && (null == n || 0 === n.length))
            return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
        let { guild: d, channel: h, pendingReply: m, chatInputType: g, threadsAlsoSendToChannel: p } = this.props,
            A = !1;
        if (null != i) {
            if (i.inputType === P.y$.BUILT_IN_INTEGRATION)
                return (
                    nC._.dispatch(eM.jej.SHAKE_APP, { duration: 200, intensity: 2 }),
                    Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                );
            let e = L.A.getCommandOrigin(h.id);
            if (null == e || e === P.iw.CHAT) {
                let { isAuthorized: e } = await (0, G.q)({
                    applicationId: i.applicationId,
                    channel: h,
                    commandIntegrationTypes: i.integration_types,
                });
                if (!e) return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
            } else if (e === P.iw.APPLICATION_LAUNCHER || e === P.iw.IMAGE_RECS_MENU || e === P.iw.IMAGE_RECS_SUBMENU) {
                let { location: t, sectionName: n } = (0, nI.bV)(i) ?? {},
                    l = e === P.iw.APPLICATION_LAUNCHER ? N.A.lastShownEntrypoint() : v.s4.TEXT,
                    { isAuthorized: s } = await (0, G.q)({
                        applicationId: i.applicationId,
                        channel: h,
                        commandIntegrationTypes: i.integration_types,
                        appLauncherContext: { location: t, sectionName: n, entrypoint: l },
                    });
                if (!s) return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
                (0, nI.My)(i);
            }
            let n = await (0, O.A)({ command: i, optionValues: s ?? {}, context: { guild: d, channel: h } });
            if (i.inputType !== P.y$.BUILT_IN_TEXT) return Promise.resolve({ shouldClear: !0, shouldRefocus: !0 });
            null != n && ((t = null != n.content && "" !== n.content ? n.content : t), (A = !0 === n.tts));
        }
        return (0, nE.i)({
            openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
            type: this.props.chatInputType,
            content: t,
            stickers: l,
            uploads: n,
            channel: h,
        }).then(async (e) => {
            let { valid: s, failureReason: f } = e;
            if (!s)
                if (f === eM.X8x.SLOWMODE_COOLDOWN)
                    return (
                        nC._.dispatch(eM.jej.SHAKE_APP, { duration: 200, intensity: 2 }),
                        nC._.dispatch(eM.jej.EMPHASIZE_SLOWMODE_COOLDOWN),
                        { shouldClear: !1, shouldRefocus: !0 }
                    );
                else return { shouldClear: !1, shouldRefocus: !1 };
            let x = (0, tR.S)(t, { channel: h, isEdit: !1 });
            null != x && (null != x.content && (t = x.content), null != x.tts && (A = x.tts));
            let _ = tD.Ay.parse(h, t);
            (_.tts = _.tts || A), null != o && ((_.content = ""), (_.components = o));
            let I = {
                ...E.A.getSendMessageOptions({
                    content: t,
                    channelId: h.id,
                    uploads: n,
                    stickers: l,
                    command: i,
                    isGif: a,
                    pendingReply: m,
                    alsoForwardToChannelId: p ? (h.parent_id ?? void 0) : void 0,
                    scheduledTimestamp: this.props.pendingScheduledMessage?.scheduledTimestamp,
                }),
                location: nv.Hx.CHAT_INPUT,
            };
            if (
                (null != c && (I.announcementSendOptions = c),
                null != r && (I.gifMetadata = r),
                null != o && (I.flags = (0, u.UI)(I.flags ?? 0, eM.pr7.IS_COMPONENTS_V2)),
                a)
            )
                return (
                    E.A.sendMessage(h.id, _, void 0, I).then(() => {
                        p && nd(h.parent_id ?? void 0);
                    }),
                    (0, t1.Jx)(h.id),
                    nt.B({ channelId: h.id, enabled: !1 }),
                    { shouldClear: !1, shouldRefocus: !0 }
                );
            if (null != n && n.length > 0) {
                let e = (0, nx.LJ)(n);
                if ((0, nx.fJ)(e, d?.id)) return (0, eI.V)(h, e), { shouldClear: !1, shouldRefocus: !1 };
                (I.eagerDispatch = !1),
                    (I.attachmentsToUpload = n),
                    (I.onAttachmentUploadError = (e, l, i) => {
                        (0, tv.k)({ file: e, guildId: h.getGuildId(), analyticsLocations: [], code: l, reason: i }) &&
                            ("" !== t &&
                                "" === eC.A.getDraft(h.id, eC.C.ChannelMessage) &&
                                C.A.saveDraft(h.id, t, eC.C.ChannelMessage),
                            0 === ex.A.getUploadCount(h.id, eC.C.ChannelMessage) &&
                                S.A.setUploads({ channelId: h.id, uploads: n, draftType: eC.C.ChannelMessage }));
                    }),
                    S.A.clearAll(h.id, eC.C.ChannelMessage);
            }
            if (null != I.scheduledTimestamp)
                try {
                    await (0, t8.pr)({
                        channelId: h.id,
                        scheduledTimestamp: I.scheduledTimestamp,
                        messageSendData: {
                            channelId: h.id,
                            content: t,
                            nonce: (0, tL.m)(),
                            tts: A,
                            message_reference: I.messageReference,
                            allowed_mentions: I.allowedMentions,
                            flags: I.flags,
                        },
                        attachmentsToUpload: n,
                    }),
                        (0, t9.c_)(I.scheduledTimestamp);
                } catch (e) {
                    return (0, t9.kM)(e.message), { shouldClear: !1, shouldRefocus: !1 };
                }
            else
                E.A.sendMessage(h.id, _, void 0, I).then(() => {
                    p && nd(h.parent_id ?? void 0);
                });
            return (
                this.setState((0, w.N3)()),
                (0, t1.Jx)(h.id),
                (0, ne.x5)(h.id, g.drafts.type),
                nt.B({ channelId: h.id, enabled: !1 }),
                { shouldClear: !0, shouldRefocus: !0 }
            );
        });
    };
    handleSetValue = (e) => {
        let t = this.editorRef?.getSlateEditor();
        null != t && (ez.b.select(t, []), t.insertText(e), this.editorRef?.focus());
    };
    renderAttachButton = (e, t) =>
        (0, l.jsx)(eK.A, {
            className: t,
            channel: this.props.channel,
            draftType: eC.C.ChannelMessage,
            editorTextContent: this.state.textValue,
            setValue: this.handleSetValue,
            canOnlyUseTextCommands: e,
            chatInputType: this.props.chatInputType,
        });
    renderApplicationCommandIcon = (e, t, n) =>
        (0, l.jsx)(eV, { className: n, command: e, section: t, channel: this.props.channel });
    render() {
        let {
                channel: e,
                focused: t,
                onBlur: n,
                onFocus: i,
                onResize: s,
                highlighted: a,
                pendingReply: r,
                chatInputType: c,
                placeholder: d,
                accessibilityLabel: u,
                shakeIntensity: h,
                poggermodeEnabled: p,
                pendingScheduledMessage: A,
                announcementComposerEnabled: f,
            } = this.props,
            { contentWarningProps: C } = this.state,
            E =
                e.type === eM.rbe.GUILD_ANNOUNCEMENT && f
                    ? (0, l.jsx)(eO, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: nR.gM,
                          channel: e,
                          placeholder: d,
                          accessibilityLabel: u,
                          pendingReply: r,
                          type: U.oU.CREATE_ANNOUNCEMENT_POST,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: s,
                          onFocus: i,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: eI.R,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                      })
                    : (0, l.jsx)(eT.Ay, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: nR.gM,
                          channel: e,
                          placeholder: d,
                          accessibilityLabel: u,
                          pendingReply: r,
                          type: c,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: s,
                          onFocus: i,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: eI.R,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                          pendingScheduledMessage: A,
                      });
        return (0, l.jsx)(m.Y, {
            targetElementRef: this.props.refInstance,
            position: "top",
            onRequestClose: () => {
                C?.onCancel?.(), this.setState({ contentWarningProps: null });
            },
            shouldShow: null != C,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    o()(null != C, "ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null"),
                    (0, l.jsx)(tP.A, { onClose: t, ...C })
                );
            },
            children: () =>
                p ? (0, l.jsx)(g.b, { isShaking: h > 0, intensity: h, className: nR.Xn, children: E }) : E,
        });
    }
}
class nG extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: l } = t;
        return n.id !== l
            ? { textAreaFocused: null != n && !c.Fr && ta.A.can(eM.xBc.SEND_MESSAGES, n), currentChannelId: n.id }
            : null;
    }
    containerDomRef = i.createRef();
    refToChannelTextAreaFormComponent = i.createRef();
    inputFormRef = i.createRef();
    state = { textAreaFocused: !1, textAreaHighlighted: !1, currentChannelId: this.props.channel.id };
    dispatchGroupRef = i.createRef();
    componentDidMount() {
        nC._.subscribe(eM.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) &&
            (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        nC._.unsubscribe(eM.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    handleRequestFocus = (e) => {
        e.channelId === this.props.channel.id &&
            (this.state.textAreaFocused
                ? this.refToChannelTextAreaFormComponent.current?.focusEditor()
                : this.setState({ textAreaFocused: !0 }));
    };
    handleInputFocus = (e) => {
        this.dispatchGroupRef.current?.bumpDispatchPriority(),
            e?.highlight != null
                ? this.setState({ textAreaFocused: !0, textAreaHighlighted: e?.highlight })
                : this.setState({ textAreaFocused: !0 }),
            e?.wasEnterPressed &&
                (e?.event?.preventDefault(), this.refToChannelTextAreaFormComponent.current?.submit());
    };
    handleInputBlur = () => {
        (document.hasFocus() || this.props.hasModalOpen) &&
            this.setState({ textAreaFocused: !1, textAreaHighlighted: !1 });
    };
    handleInputKeyDown = (e, t) => {
        this.state.textAreaHighlighted && this.setState({ textAreaHighlighted: !1 }), t || this._handleMoveToPane(e);
    };
    handleKeyDown = (e) => {
        this.inputFormRef.current?.contains(e.target) || this._handleMoveToPane(e);
    };
    _handleMoveToPane = (e) => {
        let { keyboardModeEnabled: t, chatInputType: n, channel: l } = this.props;
        if (t)
            switch (e.key) {
                case nM.dh.ARROW_LEFT:
                    n === U.oU.SIDEBAR &&
                        nC._.dispatch(eM.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: ng.A.getChannelId() });
                    return;
                case nM.dh.ARROW_RIGHT:
                    n === U.oU.NORMAL &&
                        nC._.dispatch(eM.jej.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: nh.Ay.getCurrentSidebarChannelId(l.id),
                        });
            }
    };
    handleOpenExpressionPicker = (e) => {
        let { activeView: t } = e;
        (0, e$.bf)(t, this.props.chatInputType, this.props.channel.id);
    };
    handleOpenAppLauncher = (e) => {
        let { applicationId: t } = e;
        return T.R(v.s4.TEXT, this.props.chatInputType, { applicationId: t }, this.props.channel.id);
    };
    handleChatInteract = () => {
        this.dispatchGroupRef.current?.bumpDispatchPriority();
    };
    renderMessageBanner = (e) => {
        let {
            channel: t,
            showQuarantinedUserBanner: n,
            guild: i,
            communicationDisabledUntil: s,
            showAutomodUserProfileChatBlocker: a,
        } = e;
        return t.type === eM.rbe.DM && n
            ? (0, l.jsx)(t0, {})
            : t.isModeratorReportChannel() && t.isArchivedThread()
              ? (0, l.jsx)(t5, { channelId: t.id })
              : null != s && (0, tm.n)(s) && null != i && !ta.A.can(eM.xBc.ADMINISTRATOR, i)
                ? (0, l.jsx)(ty, { guild: i, disabledUntil: s })
                : a
                  ? (0, l.jsx)(e6, { guild: i })
                  : null;
    };
    render() {
        let e,
            {
                channel: t,
                guild: n,
                keyboardModeEnabled: i,
                hasModalOpen: s,
                pendingReply: r,
                threadsAlsoSendToChannel: o,
                chatInputType: c,
                placeholder: u,
                accessibilityLabel: h,
                showQuarantinedUserBanner: m,
                filterAfterTimestamp: g,
                communicationDisabledUntil: f,
                shakeIntensity: C,
                poggermodeEnabled: E,
                isSelectedResourceChannel: x,
                showAutomodUserProfileChatBlocker: S,
                pendingScheduledMessage: _,
                messagesTypingGradient: j,
                showLinkedLobbyApplicationLoadingIndicator: y,
                announcementComposerEnabled: b,
            } = this.props,
            { textAreaFocused: T, textAreaHighlighted: N } = this.state,
            v = c === U.oU.SIDEBAR;
        e =
            v && t.type === eM.rbe.GUILD_VOICE
                ? eD.t.pnnyFZ
                : v && t.type === eM.rbe.GUILD_STAGE_VOICE
                  ? eD.t.YInSkq
                  : d.k.THREADS.has(t.type)
                    ? eD.t["OkzL+Q"]
                    : eD.t.UbNmGc;
        let M = (0, l.jsx)("div", { className: nR.li, children: (0, l.jsx)(nb, {}) }),
            R = (0, l.jsx)("div", {
                className: nR.li,
                children: (0, l.jsx)(nu.A, {
                    childRef: this.containerDomRef,
                    tutorialId: "writing-messages",
                    position: "left",
                    offsetX: 75,
                    children: (0, l.jsx)(nk, {
                        ref: this.refToChannelTextAreaFormComponent,
                        refInstance: this.containerDomRef,
                        focused: T,
                        highlighted: N,
                        channel: t,
                        guild: n,
                        keyboardModeEnabled: i,
                        onFocus: this.handleInputFocus,
                        onBlur: this.handleInputBlur,
                        onKeyDown: this.handleInputKeyDown,
                        hasModalOpen: s,
                        pendingReply: r,
                        threadsAlsoSendToChannel: o,
                        chatInputType: c,
                        placeholder: u,
                        accessibilityLabel: h,
                        shakeIntensity: C,
                        poggermodeEnabled: E,
                        pendingScheduledMessage: _,
                        announcementComposerEnabled: b,
                    }),
                }),
            }),
            D = y ? M : R,
            L = (0, na.m1)(t, nc.default, no.A);
        return (0, l.jsx)(
            I.A,
            {
                page: (0, nA.DJ)(this.props.channel),
                children: (0, l.jsx)(tN.di, {
                    children: (0, l.jsx)(tT.Xq, {
                        children: (0, l.jsxs)(nf.Ah, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, l.jsx)(nf.EG, { event: eM.jej.TEXTAREA_FOCUS, handler: this.handleInputFocus }),
                                (0, l.jsx)(nf.EG, { event: eM.jej.TEXTAREA_BLUR, handler: this.handleInputBlur }),
                                (0, l.jsx)(nf.EG, {
                                    event: eM.jej.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker,
                                }),
                                (0, l.jsx)(nf.EG, {
                                    event: eM.jej.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher,
                                }),
                                (0, l.jsxs)(nP, {
                                    isSidebar: v,
                                    className: nR.q2,
                                    "aria-label": eD.intl.formatToPlainString(e, { channelName: L }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    style: this.props.guildOfficialMessageStyle,
                                    children: [
                                        (0, l.jsx)(nj.A, { channel: t, guild: n, narrow: v }),
                                        (0, l.jsxs)(p.F, {
                                            component: (0, l.jsx)(A.A, {
                                                children: (0, l.jsx)(p.H, {
                                                    children: eD.intl.format(eD.t.eTzKkx, { channelName: L }),
                                                }),
                                            }),
                                            children: [
                                                (0, l.jsxs)(eq.h1, {
                                                    children: [
                                                        (0, l.jsx)(tk.A, {
                                                            channel: t,
                                                            forceCozy: x,
                                                            filterAfterTimestamp: g,
                                                            showingQuarantineBanner: m,
                                                            typingGradient: j,
                                                            hideSummaries: c === U.oU.OVERLAY,
                                                        }),
                                                        x
                                                            ? null
                                                            : (this.renderMessageBanner({
                                                                  channel: t,
                                                                  showQuarantinedUserBanner: m,
                                                                  guild: n,
                                                                  communicationDisabledUntil: f,
                                                                  showAutomodUserProfileChatBlocker: S,
                                                              }) ??
                                                              (0, l.jsxs)("form", {
                                                                  ref: this.inputFormRef,
                                                                  onSubmit: nD,
                                                                  className: a()(nR.Zd, { [nR.Mf]: !y }),
                                                                  children: [
                                                                      E && (0, l.jsx)(t$, { channelId: t.id }),
                                                                      t.isPrivate()
                                                                          ? (0, l.jsx)(nT.A, {
                                                                                channel: t,
                                                                                children: D,
                                                                            })
                                                                          : (0, l.jsx)(nN.A, {
                                                                                channel: t,
                                                                                children: D,
                                                                            }),
                                                                      (0, l.jsx)(nU, { channel: t }),
                                                                  ],
                                                              })),
                                                    ],
                                                }),
                                                (0, l.jsx)(tN.lr, {}),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            },
            `messages-${t.id}`,
        );
    }
}
function nU(e) {
    let { channel: t } = e,
        { isFocused: n } = (0, eq.D7)();
    return n ? null : (0, l.jsx)(_.Ay, { channel: t, isInTextChannel: !0 });
}
let nw = i.memo(function (e) {
    var t, n;
    let s,
        a,
        r,
        o,
        c,
        { channel: d, guild: u, chatInputType: m, filterAfterTimestamp: g } = e,
        { placeholder: p, accessibilityLabel: A } = (0, n_.A)({ channel: d }),
        C =
            ((t = nc.default.getCurrentUser()),
            (s = (0, tX.r)(d)),
            (a = (0, h.bG)([ts.A], () => ts.A.getMessages(d.id).length > 0, [d])),
            null != t && t.hasFlag(eM.nhx.QUARANTINED) && s && !a),
        [x] = (0, tg.c)(u?.id),
        S = (0, eJ.uZ)(u?.id),
        I = (0, h.bG)([nc.default], () => nc.default.getCurrentUser()),
        j = (0, h.bG)([e1.Ay], () => null != I && (e1.Ay.getMember(u?.id ?? eM.dJq, I?.id)?.isPending ?? !1)),
        b = (0, h.bG)([tU.A], () => tU.A.isEnabled()),
        T =
            ((n = d.id),
            (r = (0, tJ.A)(tZ.uD.CHAT_INPUT)),
            (o = (0, h.bG)([tU.A], () => tU.A.isEnabled({ shakeLocation: tZ.uD.CHAT_INPUT }))),
            (0, h.bG)([tH.A, tw.Ay, e0.default], () =>
                o && tH.A.isTyping(n, e0.default.getId())
                    ? tw.Ay.getUserComboShakeIntensity(e0.default.getId(), n, r)
                    : 0,
            )),
        N = (0, tb.A)(d.id),
        v = ((c = d.id), (0, h.bG)([t6.A], () => t6.A.getPendingScheduledMessage(c))),
        M = (0, h.bG)([nn.A], () => nn.A.getAlsoSendToChannel(d.id)),
        R = (0, h.bG)([tw.Ay, e0.default], () => tw.Ay.getUserCombo(e0.default.getId(), d.id)),
        D = (0, _.rj)(d),
        L = (0, _.aW)(d),
        P = D.length > 0 || d.rateLimitPerUser > 0 || null != R || null != L,
        { showLinkedLobbyApplicationLoadingIndicator: k } = (0, nS.A)(d.linkedLobby),
        O = eW.useConfig({ location: "ChannelChat" }).announcementComposer,
        G = (0, tO.A)((0, tM.GP)(u, "ChannelChat") ? (u?.officialMessageColor ?? nv.aj) : null);
    return (
        !(function (e) {
            let [t, n] = (function (e) {
                    let t = (0, h.bG)([ts.A], () => ts.A.isReady(e.id), [e.id]),
                        n = [],
                        l = (0, h.bG)([ti.A], () => ti.A.getGuild(e.guild_id)),
                        s = (function (e) {
                            let t = (0, h.bG)([ti.A], () => ti.A.getGuild(e.guild_id)),
                                n = (0, h.bG)([tl.A], () => tl.A.getMemberCount(t?.id) ?? 0),
                                l = (0, h.bG)([ts.A], () => ts.A.getLastMessage(e.id)),
                                s = (0, h.bG)([ta.A], () => null != t && ta.A.can(eM.xBc.ADMINISTRATOR, t)),
                                a = (0, h.bG)([tn.A], () => tn.A.getGuildAffinity(e.guild_id)?.score),
                                r = (0, h.bG)([tt.A], () => tt.A.hasConsented(eM.YAq.PERSONALIZATION)),
                                o = (0, tc.A)(),
                                [c] = (0, te.Wl)(e9.M.FIRST_BOOSTER_UPSELL_OVERSEER, {
                                    cooldownDurationMs: 0,
                                    numTimesToRecur: 3,
                                }),
                                d = c === e9.M.FIRST_BOOSTER_UPSELL_OVERSEER;
                            return i.useMemo(
                                () =>
                                    !(
                                        !d ||
                                        !r ||
                                        null == a ||
                                        a <= 17.06 ||
                                        e.type !== eM.rbe.GUILD_TEXT ||
                                        null == t ||
                                        to.default.age(t.id) < td ||
                                        null == t.premiumSubscriberCount ||
                                        0 !== t.premiumSubscriberCount ||
                                        n < 10 ||
                                        l?.id == null ||
                                        to.default.age(l.id) > tu
                                    ) &&
                                    (s || o),
                                [d, r, e.type, t, n, a, l?.id, s, o],
                            );
                        })(e);
                    t && s && n.push(e9.M.FIRST_BOOSTER_UPSELL);
                    let [a, r] = (0, te.ww)(n, l?.id ?? eM.eGj);
                    return [a, r];
                })(e),
                l = i.useRef(null);
            i.useEffect(() => {
                null == t ||
                    ((null == l.current || l.current.visibleContent !== t || l.current.channelId !== e.id) &&
                        (t === e9.M.FIRST_BOOSTER_UPSELL &&
                            E.A.sendGuildBoostUpsellSystemMessage(e.id, { guildBoostUpsellType: en.Mk.FIRST_BOOSTER }),
                        (l.current = { visibleContent: t, channelId: e.id }),
                        n(th.i.AUTO_DISMISS)));
            }, [t, e.id, n]);
        })(d),
        (0, l.jsx)(nG, {
            channel: d,
            guildOfficialMessageStyle: G,
            isEditing: null != (0, h.bG)([nm.A], () => nm.A.getEditingMessageId(d.id)),
            hasModalOpen: (0, f.useModalsStore)(f.hasAnyModalOpenSelector),
            guild: u,
            keyboardModeEnabled: (0, h.bG)([y.Ay], () => y.Ay.keyboardModeEnabled),
            pendingReply: (0, h.bG)([t2.A], () => t2.A.getPendingReply(d.id)),
            threadsAlsoSendToChannel: M,
            chatInputType: m,
            placeholder: p,
            accessibilityLabel: A,
            filterAfterTimestamp: g,
            showQuarantinedUserBanner: C,
            communicationDisabledUntil: x,
            shakeIntensity: T,
            poggermodeEnabled: b,
            isSelectedResourceChannel: N,
            showAutomodUserProfileChatBlocker: S && !j,
            pendingScheduledMessage: v,
            messagesTypingGradient: P,
            showLinkedLobbyApplicationLoadingIndicator: k,
            announcementComposerEnabled: O,
        })
    );
});
