n.d(t, { A: () => nO }), n(938796);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    c = n(607399),
    d = n(478437),
    u = n(665260),
    h = n(17928),
    m = n(922016),
    p = n(568602),
    g = n(707554),
    A = n(140735),
    f = n(192308),
    _ = n(465532),
    E = n(720149),
    C = n(414798),
    x = n(608299),
    b = n(748934),
    S = n(820284),
    I = n(955572),
    y = n(775602),
    T = n(58149),
    v = n(211401),
    N = n(989837),
    j = n(500049),
    M = n(721768),
    R = n(258363),
    L = n(842209),
    D = n(861382),
    k = n(392054),
    P = n(168186),
    G = n(545152),
    O = n(972995),
    w = n(355622),
    U = n(408018);
n(321073), n(323874), n(14289), n(35956);
var F = n(419354),
    B = n(132500),
    H = n(661531),
    K = n(990078),
    V = n(717421),
    z = n(187322),
    W = n(821609),
    q = n(834730),
    $ = n(559647),
    J = n(163328),
    Z = n(550079),
    Y = n(477782),
    X = n(241326),
    Q = n(81369),
    ee = n(939249),
    et = n(750943),
    en = n(155718),
    ei = n(565150),
    el = n(793574),
    es = n(688810),
    ea = n(305070);
let er = (0, n(839214).D)(() => ({ channelDrafts: {} }));
function eo(e, t) {
    er.setState((n) => {
        let i = n.channelDrafts[e];
        return {
            channelDrafts: {
                ...n.channelDrafts,
                [e]: { heroFile: null, title: "", publish: !0, createThread: !0, ...i, ...t },
            },
        };
    });
}
var ec = n(598071),
    ed = n(101555),
    eu = n(731231),
    eh = n(703007),
    em = n(2553),
    ep = n(946274),
    eg = n(135621),
    eA = n(406704),
    ef = n(253932),
    e_ = n(31717),
    eE = n(638128),
    eC = n(522602),
    ex = n(515718),
    eb = n(723702),
    eS = n(518960),
    eI = n(486319),
    ey = n(383442),
    eT = n(729666),
    ev = n(201349),
    eN = n(851023),
    ej = n(822610),
    eM = n(652215);
n(827669), n(294920);
var eR = n(478644),
    eL = n(985018),
    eD = n(150679),
    ek = n(266599);
function eP(e, t, n) {
    let i = e.startsWith("attachment://"),
        l = e;
    if (i) {
        let t = e.slice(13);
        l = n ? `attachment://SPOILER_${t}` : e;
    }
    return {
        media: { url: l, proxyUrl: l, loadingState: en.TD.UNKNOWN, flags: 0 },
        description: t ?? void 0,
        spoiler: n,
    };
}
let eG = l.memo(
    l.forwardRef(function (e, t) {
        let n,
            {
                textValue: s,
                richValue: r,
                className: c,
                id: d,
                required: u,
                disabled: p,
                accessibilityLabel: g,
                channel: A,
                type: f,
                focused: _,
                onChange: E,
                onResize: C,
                onBlur: b,
                onFocus: S,
                onKeyDown: I,
                onSubmit: T,
                promptToUpload: v,
                canMentionRoles: N,
                canMentionChannels: j,
                maxCharacterCount: M,
                placeholder: R,
                "aria-describedby": L,
                "aria-labelledby": k,
                setEditorRef: P,
                autoCompletePosition: G,
                disableThemedBackground: O = !1,
                emojiPickerCloseOnModalOuterClick: U,
                parentModalKey: B,
            } = e,
            H = er.useField("channelDrafts")[A.id],
            K = H?.title ?? "",
            Z = H?.heroFile,
            Y = H?.publish ?? !0,
            X = H?.createThread ?? !0;
        o()(null != f, "chat input type must be set");
        let { analyticsLocations: Q } = (0, es.Ay)(el.A.CHANNEL_TEXT_AREA),
            ee = (0, ev.L0)(t),
            et = l.useRef(null),
            ei = l.useRef(null),
            ed = l.useRef(null),
            eh = l.useRef(null);
        P?.(ei.current);
        let { activeCommand: em } = (0, h.cf)([D.A], () => ({
                activeCommand: f.commands?.enabled ? D.A.getActiveCommand(A.id) : null,
                activeCommandSection: f.commands?.enabled ? D.A.getActiveCommandSection(A.id) : null,
            })),
            {
                isLurking: ep,
                isPendingMember: ex,
                disabled: eS,
                canAttachFiles: eN,
                canEveryoneSendMessages: eR,
            } = (0, ev.Sk)(A, f, em, p),
            eG = !ef.D_.useSetting() && !(0, eb.isAndroidWeb)() && null != window.ResizeObserver,
            eB = !eG || !f.commands?.enabled || !_ || "/" !== s,
            eH = (0, eg.A)(),
            { fontSize: eK } = (0, h.cf)([y.A], () => ({
                fontSize: y.A.fontSize,
                isSubmitButtonEnabled: y.A.isSubmitButtonEnabled,
            })),
            eV = (0, h.bG)([eE.A], () => eE.A.isEnabled()),
            ez = (0, eA.n)(A);
        (0, ev.N_)(f, eS, A.id);
        let { eventEmitter: eW, handleEditorSelectionChanged: eq } = (0, ev.ml)(ei, s, r),
            e$ = l.useCallback(
                (e) => {
                    let t = (e) => (e.shouldClear && (eo(A.id, { title: "", heroFile: null }), ei.current?.blur()), e),
                        n = [],
                        i = (K.length > 0 ? K : e.value.length > 0 ? e.value : eL.intl.string(eL.t["7Xm5QI"])).slice(
                            0,
                            eM.Ign,
                        );
                    if (null == Z)
                        return T({
                            ...e,
                            announcementSendOptions: { createThread: ez && X, threadName: i, publish: Y },
                        }).then(t);
                    n.push({ type: en.I5.MEDIA_GALLERY, items: [eP(`attachment://${Z.name}`, null, !1)], id: "82733" }),
                        e.value.length > 0 && n.push({ type: en.I5.TEXT_DISPLAY, content: e.value, id: "82744" });
                    let l = eC.A.getUploads(A.id, e_.C.ChannelMessage),
                        s = l.filter((e) => (e.isImage || e.isVideo) && e.filename !== Z?.name),
                        a = l.filter((e) => !e.isImage && !e.isVideo && e.filename !== Z?.name),
                        r = s.map((e) => eP(`attachment://${e.filename}`, e.description, e.spoiler));
                    return (
                        r.length > 0 && n.push({ type: en.I5.MEDIA_GALLERY, items: r, id: "82755" }),
                        a.forEach((e, t) => {
                            n.push({
                                type: en.I5.FILE,
                                file: eP(`attachment://${e.filename}`, e.description, e.spoiler).media,
                                id: `${82766 + t}`,
                                spoiler: e.spoiler,
                                name: null,
                                size: null,
                            });
                        }),
                        T({
                            ...e,
                            components: n,
                            announcementSendOptions: { createThread: ez && X, threadName: i, publish: Y },
                        }).then(t)
                    );
                },
                [T, K, Z, A.id, X, Y, ez],
            ),
            { submit: eJ, handleSubmit: eZ } = (0, ev.Zx)(e$, f, ei, eh, A.id),
            { autocompleteRef: eY, handleMaybeShowAutocomplete: eX, handleHideAutocomplete: eQ } = (0, ev.v7)(),
            e0 = l.useCallback(() => eh?.current?.hide(), []),
            { editorHeight: e1, handleResize: e2 } = (0, ev.ck)(C),
            {
                handleTab: e3,
                handleEnter: e4,
                handleMoveSelection: e7,
            } = ((n = l.useCallback(
                () => !!(!eB && et.current?.onTabOrEnter(!1)) || eY.current?.onTabOrEnter(!1) || !1,
                [eB],
            )),
            {
                handleTab: n,
                handleEnter: l.useCallback(
                    () => !!(!eB && et.current?.onTabOrEnter(!0)) || eY.current?.onTabOrEnter(!1) || !1,
                    [eB],
                ),
                handleMoveSelection: l.useCallback(
                    (e) => !!(!eB && et.current?.onMoveSelection(e)) || eY.current?.onMoveSelection(e) || !1,
                    [eB],
                ),
            }),
            {
                expressionPickerView: e6,
                shouldHideExpressionPicker: e5,
                handleOuterClick: e8,
            } = (0, ev.MD)(f, ei, A.id),
            { handleAutocompleteVisibilityChange: e9 } = (0, ev.uW)(f, A.id),
            te = (0, ev.NO)(ei),
            tt = (0, ev.Vu)(eJ, f, ei),
            tn = (0, ev.HG)(ei),
            ti = (0, ev.C)({
                editorRef: ei,
                disabled: eS,
                textValue: s,
                channelId: A.id,
                chatInputType: f,
                submit: e$,
            });
        (0, eI.R)(eW, A.guild_id, A.id);
        let [tl, ts] = l.useState(!1),
            ta = l.useCallback(() => {
                e8(), ts(!0);
            }, [e8]),
            tr = tl || s.length > 0 || null != Z || K.length > 0,
            { editorHeaderHeight: to, paddingTop: tc } = (0, V.z)({
                editorHeaderHeight: 122 * !!tr,
                paddingTop: 16 * !!tr,
                config: { tension: 120, friction: 15, clamp: !0 },
            }),
            td = l.useRef(null),
            [tu, th] = l.useState(!1),
            tm = l.useRef(!1),
            tp = l.useCallback(() => {
                tm.current = !0;
                let e = setTimeout(() => {
                    tm.current && th(!0);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tg = l.useCallback(() => {
                tm.current = !1;
                let e = setTimeout(() => {
                    tm.current || th(!1);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tA = l.useCallback(() => {
                if (null == Z) return;
                let e = eC.A.getUploads(A.id, f.drafts.type),
                    t = e.find((e) => e.filename === Z.name)?.id;
                null != t && x.A.remove(A.id, t, e_.C.ChannelMessage), eo(A.id, { heroFile: null });
            }, [A.id, Z, f.drafts.type]);
        return (0, i.jsx)(ec.Sv, {
            value: eW,
            children: (0, i.jsxs)(es.f5, {
                value: Q,
                children: [
                    (0, i.jsxs)("div", {
                        ref: ee,
                        className: a()(c, ek.gM),
                        onMouseDown: ta,
                        children: [
                            (0, i.jsx)("div", {
                                ref: ed,
                                onScroll: e0,
                                className: a()(ek.Ui, { [ek.k6]: !O }),
                                children: (0, i.jsxs)("div", {
                                    className: a()(ek.vW, eD.vW),
                                    children: [
                                        (0, i.jsxs)("div", {
                                            className: eD.rf,
                                            children: [
                                                (0, i.jsxs)(F.animated.div, {
                                                    className: eD.ov,
                                                    style: { height: to, paddingTop: tc },
                                                    children: [
                                                        null != Z
                                                            ? (0, i.jsx)(ew, { file: Z, onRemoveHeroImage: tA })
                                                            : null,
                                                        null != Z
                                                            ? null
                                                            : (0, i.jsx)(eF, {
                                                                  channel: A,
                                                                  onImageUploaded: (e) => eo(A.id, { heroFile: e }),
                                                                  onFocus: () => ts(!0),
                                                              }),
                                                        (0, i.jsx)("input", {
                                                            maxLength: 140,
                                                            className: eD.hz,
                                                            placeholder: eL.intl.string(eL.t.Z8fYjO),
                                                            value: K,
                                                            onChange: (e) => eo(A.id, { title: e.target.value }),
                                                        }),
                                                    ],
                                                }),
                                                (0, i.jsx)("div", {
                                                    className: eD.I6,
                                                    children: (0, i.jsx)(z.vN, {
                                                        ringTarget: ee,
                                                        ringClassName: ek.Rg,
                                                        children: (0, i.jsx)(ey.A, {
                                                            ref: ei,
                                                            id: d,
                                                            focused: _,
                                                            useSlate: eG,
                                                            textValue: s,
                                                            richValue: r,
                                                            disabled: eS,
                                                            placeholder: R,
                                                            required: u,
                                                            accessibilityLabel: g,
                                                            isPreviewing: (ep || ex) && eR,
                                                            channel: A,
                                                            type: w.oU.CREATE_ANNOUNCEMENT_POST,
                                                            canPasteFiles: eN,
                                                            uploadPromptCharacterCount: eM.CS1,
                                                            maxCharacterCount: M ?? eH,
                                                            allowNewLines: !0,
                                                            "aria-describedby": L,
                                                            onChange: E,
                                                            onResize: e2,
                                                            onBlur: b,
                                                            onFocus: S,
                                                            onKeyDown: I,
                                                            onSubmit: eJ,
                                                            onTab: e3,
                                                            onEnter: e4,
                                                            onMoveSelection: e7,
                                                            onSelectionChanged: eq,
                                                            onMaybeShowAutocomplete: eX,
                                                            onHideAutocomplete: eQ,
                                                            promptToUpload: v,
                                                            fontSize: eK,
                                                            spellcheckEnabled: eV,
                                                            canOnlyUseTextCommands: !1,
                                                            "aria-labelledby": k,
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)("div", {
                                            className: eD.KK,
                                            children: (0, i.jsx)(ej.A, {
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
                            (0, i.jsx)("div", { className: eD.yF }),
                            (0, i.jsxs)("div", {
                                className: eD.qr,
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: eD.j4,
                                        children: [
                                            (0, i.jsx)(eU, { channel: A }),
                                            (0, i.jsx)(eT.A, {
                                                type: w.oU.CREATE_ANNOUNCEMENT_POST,
                                                disabled: eS,
                                                channel: A,
                                                handleSubmit: eZ,
                                                isEmpty: 0 === s.trim().length,
                                                showAllButtons: !0,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)("div", {
                                        className: eD.j4,
                                        children: (0, i.jsx)("div", {
                                            ref: td,
                                            className: eD.Qo,
                                            onMouseEnter: tp,
                                            onMouseLeave: tg,
                                            children: (0, i.jsx)(m.Y, {
                                                targetElementRef: td,
                                                renderPopout: () =>
                                                    (0, i.jsx)(eO, { channelId: A.id, canCreateThread: ez }),
                                                shouldShow: tu,
                                                autoInvert: !0,
                                                nudgeAlignIntoViewport: !0,
                                                position: "top",
                                                align: "right",
                                                children: (e) =>
                                                    (0, i.jsx)(W.$, {
                                                        ...e,
                                                        onClick: () => {
                                                            eJ(
                                                                `${
                                                                    K.length > 0
                                                                        ? `# ${K}
`
                                                                        : ""
                                                                }${s}`,
                                                            );
                                                        },
                                                        disabled: 0 === s.length && 0 === K.length,
                                                        size: "sm",
                                                        "aria-label": eL.intl.string(eL.t.TXNS7S),
                                                        innerClassName: eD.jo,
                                                        text: (0, i.jsxs)("div", {
                                                            className: eD.f9,
                                                            children: [
                                                                (0, i.jsx)(q.E, {
                                                                    variant: "text-sm/semibold",
                                                                    color: "always-white",
                                                                    children: eL.intl.string(eL.t.TXNS7S),
                                                                }),
                                                                (0, i.jsxs)("div", {
                                                                    className: eD.pj,
                                                                    children: [
                                                                        (0, i.jsx)($.l, { size: "xs", color: "white" }),
                                                                        ez && X
                                                                            ? (0, i.jsx)(J.y, {
                                                                                  size: "xxs",
                                                                                  color: "white",
                                                                                  className: eD.Q5,
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
                            (0, i.jsx)(ea.A, {
                                targetRef: ee,
                                ref: eY,
                                channel: A,
                                canMentionRoles: N,
                                canMentionChannels: j,
                                useNewSlashCommands: eG,
                                canOnlyUseTextCommands: !1,
                                canSendStickers: !0,
                                textValue: s,
                                focused: _,
                                expressionPickerView: e6,
                                type: f,
                                editorRef: ei,
                                onSendMessage: eJ,
                                onSendSticker: () => {},
                                onVisibilityChange: e9,
                                editorHeight: e1,
                                setValue: (e, t) => E?.(null, e, t),
                                position: G,
                            }),
                        ],
                    }),
                    e5
                        ? null
                        : (0, i.jsx)(eu.A, {
                              positionTargetRef: ee,
                              type: f,
                              onSelectGIF: tt,
                              onSelectEmoji: te,
                              onSelectKaomoji: tn,
                              onSelectSticker: ti,
                              channel: A,
                              closeOnModalOuterClick: U,
                              parentModalKey: B,
                              position: "top",
                              align: "right",
                              positionLayerClassName: ek.BD,
                          }),
                ],
            }),
        });
    }),
);
function eO(e) {
    let { channelId: t, canCreateThread: n } = e,
        l = er.useField("channelDrafts")[t],
        s = l?.createThread ?? !0,
        a = l?.publish ?? !0;
    return (0, i.jsxs)(Z.W, {
        "data-menu-migrated": !0,
        "aria-label": eL.intl.string(eL.t["9WnJyo"]),
        navId: "send-announcement-options",
        onClose: eM.tEg,
        onSelect: eM.tEg,
        children: [
            (0, i.jsx)(Y.sL, {
                id: "create-thread",
                label: eL.intl.string(eL.t.rBIGBL),
                checked: n && s,
                disabled: !n,
                action: () => {
                    eo(t, { createThread: !s });
                },
            }),
            (0, i.jsx)(Y.sL, {
                id: "send-and-publish",
                label: eL.intl.string(eL.t.MFGE51),
                checked: a,
                action: () => {
                    eo(t, { publish: !a });
                },
            }),
        ],
    });
}
function ew(e) {
    let { file: t, onRemoveHeroImage: n } = e,
        [s, a] = l.useState();
    l.useEffect(() => {
        if (null == t || !1 === ["image/jpeg", "image/png", "image/webp", "image/gif"].includes(t.type)) return;
        let e = URL.createObjectURL(t);
        return (
            a(e),
            () => {
                a(void 0), URL.revokeObjectURL(e);
            }
        );
    }, [t]);
    let [r, o] = l.useState(!1),
        c = l.useCallback(() => {
            o(!0);
        }, []),
        d = l.useCallback(() => {
            o(!1);
        }, []);
    return null == s
        ? null
        : (0, i.jsxs)("div", {
              onMouseEnter: c,
              onMouseLeave: d,
              className: eD.Lb,
              "aria-hidden": !0,
              children: [
                  (0, i.jsx)("img", { src: s, alt: eL.intl.string(eL.t["2ePvR8"]), className: eD.c8 }),
                  r
                      ? (0, i.jsx)(ed.Ay, {
                            className: eD.jM,
                            children: (0, i.jsx)(eN.A, {
                                tooltip: eL.intl.string(eL.t.VjC21x),
                                onClick: n,
                                dangerous: !0,
                                children: (0, i.jsx)(X.u, {}),
                            }),
                        })
                      : null,
              ],
          });
}
function eU(e) {
    let { channel: t } = e;
    return (0, i.jsx)(eh.A, {
        "aria-label": eL.intl.string(eL.t["/IBYAq"]),
        className: eD.g$,
        size: "icon",
        color: "transparent",
        look: "blank",
        onChange: (e) => {
            (0, eS.R)(e.currentTarget.files, t, e_.C.ChannelMessage, { requireConfirm: !0, origin: "file_picker" }),
                (e.currentTarget.value = null);
        },
        children: (0, i.jsx)(Q.H, {
            size: "custom",
            width: 20,
            height: 20,
            color: H.A.colors.INTERACTIVE_TEXT_DEFAULT,
        }),
    });
}
function eF(e) {
    let { channel: t, onImageUploaded: n, onFocus: s } = e,
        a = l.useRef(null),
        r = async (e, i) => {
            let l = await (0, ex.bX)(e, i.name, i.type),
                s = { id: (0, B.A)(), file: l, platform: ei.xz.WEB, isThumbnail: !1, origin: "file_picker" };
            x.A.addFile({ file: s, channelId: t.id, draftType: e_.C.ChannelMessage }), n(l);
        },
        [o, c] = l.useState(!1),
        d = l.useCallback(() => {
            c(!0);
        }, []),
        u = l.useCallback(() => {
            c(!1);
        }, []);
    return (0, i.jsx)("div", {
        className: eD.qN,
        children: (0, i.jsx)(K.m, {
            asContainer: !0,
            text: eL.intl.string(eL.t["/IBYAq"]),
            position: "top",
            children: (0, i.jsxs)(ee.D, {
                className: eD.qN,
                onMouseOver: d,
                onMouseOut: u,
                onFocus: s,
                children: [
                    (0, i.jsx)(ep.Ay, {
                        ref: a,
                        onChange: r,
                        "aria-hidden": !0,
                        tabIndex: -1,
                        maxFileSizeBytes: eR.j,
                        onFileSizeError: () => (0, em.A)(eR.j),
                    }),
                    (0, i.jsx)(et.X, {
                        size: "md",
                        color: o ? H.A.colors.INTERACTIVE_TEXT_ACTIVE : H.A.colors.INTERACTIVE_TEXT_DEFAULT,
                    }),
                ],
            }),
        }),
    });
}
var eB = n(649671),
    eH = n(527078);
let eK = l.memo(function (e) {
    let { className: t, channel: n, section: l } = e,
        s = null != l ? (0, eB.Rg)(l) : null,
        r =
            null != s
                ? (0, i.jsx)(K.m, {
                      __unsupportedReactNodeAsText: l?.name ?? "",
                      position: "top",
                      children: (0, i.jsx)(s, { channel: n, section: l, width: 24, height: 24 }),
                  })
                : null;
    return (0, i.jsx)("div", {
        className: a()(t, eH.i),
        children: (0, i.jsx)("div", { className: eH.K, children: r }),
    });
});
var eV = n(192829),
    ez = n(35277);
let eW = (0, n(945810).mj)({
    kind: "user",
    name: "2026-02-announcement-composer",
    defaultConfig: { announcementComposer: !1 },
    variations: { 1: { announcementComposer: !0 } },
});
var eq = n(151271),
    e$ = n(81400),
    eJ = n(353182),
    eZ = n(402770);
function eY(e) {
    let {
        bannerIcon: t,
        bannerHeader: n,
        bannerSubtext: l,
        textStyles: s,
        headerStyles: r,
        containerStyles: o,
        children: c,
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(eZ.Ew, o),
        children: [
            (0, i.jsxs)("div", {
                className: a()(eZ.lt, s),
                children: [
                    null != t && ("string" == typeof t ? (0, i.jsx)("img", { src: t, alt: "", className: eZ.q3 }) : t),
                    (0, i.jsxs)("div", {
                        className: eZ._M,
                        children: [
                            (0, i.jsx)("div", { className: a()(eZ.U_, r), children: n }),
                            null != l && (0, i.jsx)("div", { className: eZ.mi, children: l }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: eZ.uu, children: c }),
        ],
    });
}
var eX = n(206835),
    eQ = n(495544),
    e0 = n(696451),
    e1 = n(229527),
    e2 = n(340837),
    e3 = n(355097),
    e4 = n(944089);
function e7(e) {
    let { guild: t } = e,
        n = (0, eX.A)({ scrollPosition: e3._F.GUILD_TAG });
    return (0, i.jsx)("div", {
        children: (0, i.jsx)(eY, {
            bannerIcon: (0, i.jsx)(eJ._, { size: "lg", color: "currentColor", className: e4.q3 }),
            bannerHeader: eL.intl.format(eL.t.GgMwjk, { guildName: t?.name ?? "" }),
            bannerSubtext: eL.intl.string(eL.t.ONjwD5),
            textStyles: e4.cI,
            headerStyles: e4.U_,
            children: (0, i.jsx)(W.$, {
                variant: "primary",
                size: "sm",
                text: eL.intl.string(eL.t.Viksoo),
                onClick: () => n(),
            }),
        }),
    });
}
function e6(e) {
    let { guild: t } = e,
        { analyticsLocations: n } = (0, es.Ay)(el.A.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [l, s] = (0, e$.j8)({ guildId: t?.id ?? eM.dJq, analyticsLocations: n }),
        a = s ? eL.intl.string(eL.t["9ph2v7"]) : eL.intl.string(eL.t.ldh9Cg),
        r = s ? eL.intl.string(eL.t["/PGQf0"]) : eL.intl.string(eL.t.WikgZ1);
    return (0, i.jsx)("div", {
        children: (0, i.jsx)(eY, {
            bannerIcon: (0, i.jsx)(eJ._, { size: "lg", color: "currentColor", className: e4.q3 }),
            bannerHeader: eL.intl.format(eL.t.kcYdTq, { guildName: t?.name ?? "" }),
            bannerSubtext: a,
            textStyles: e4.cI,
            headerStyles: e4.U_,
            children: (0, i.jsx)(W.$, {
                variant: "primary",
                size: "sm",
                text: r,
                onClick: () => {
                    l();
                },
            }),
        }),
    });
}
function e5(e) {
    let { guild: t } = e,
        n = (0, h.bG)([eQ.default, e0.Ay], () => {
            if (null == t) return new Set();
            let e = eQ.default.getId();
            return (0, e1.wj)(e0.Ay.getMember(t.id, e));
        }, [t]);
    return n.has(e2.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || n.has(e2.D.AUTOMOD_QUARANTINED_BIO)
        ? (0, i.jsx)(e6, { guild: t })
        : n.has(e2.D.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, i.jsx)(e7, { guild: t })
          : (0, i.jsx)(e6, { guild: t });
}
var e8 = n(554146),
    e9 = n(932001),
    te = n(153488),
    tt = n(776096),
    tn = n(498642),
    ti = n(71393),
    tl = n(232835),
    ts = n(576705),
    ta = n(927813),
    tr = n(935208),
    to = n(342220);
let tc = 90 * ta.A.Millis.DAY,
    td = 14 * ta.A.Millis.DAY;
var tu = n(49999),
    th = n(316031),
    tm = n(870136),
    tp = n(60270),
    tg = n(576470),
    tA = n(496431),
    tf = n(592713),
    t_ = n(264388),
    tE = n(534514),
    tC = n(30323);
function tx(e) {
    let { onClose: t, guildName: n } = e;
    return (0, i.jsxs)("div", {
        className: tC.kL,
        children: [
            (0, i.jsx)("div", {
                className: tC.zc,
                children: (0, i.jsx)(tp.g, {
                    size: "custom",
                    color: "currentColor",
                    className: tC.Kk,
                    width: 20,
                    height: 20,
                }),
            }),
            (0, i.jsxs)("div", {
                className: tC.wx,
                children: [
                    (0, i.jsx)(tE.D, {
                        variant: "heading-md/semibold",
                        className: tC.TK,
                        children: eL.intl.string(eL.t.LIIyeE),
                    }),
                    (0, i.jsx)(q.E, {
                        variant: "text-sm/normal",
                        children: eL.intl.format(eL.t["4/6vQh"], { guildName: n }),
                    }),
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: tC.x6,
                        children: (0, i.jsx)(W.$, {
                            variant: "primary",
                            text: eL.intl.string(eL.t.BddRzS),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var tb = n(200700),
    tS = n(989924);
function tI(e) {
    let { guild: t, disabledUntil: n } = e,
        [s, a] = (0, t_.n)(t.id);
    return (
        !(function (e) {
            let { communicationDisabledUntil: t, userId: n, guildId: i } = e ?? {},
                s = (0, tA.A)(null != t ? Date.parse(t) : Date.now()).seconds,
                a = (0, l.useRef)(null);
            (0, l.useEffect)(
                () =>
                    null == e || null == i || null == n
                        ? void clearTimeout(a.current)
                        : (s <= 0 &&
                              null == a.current &&
                              (a.current = setTimeout(() => {
                                  tf.A.clearGuildMemberTimeout(i, n);
                              }, 1e3)),
                          () => {
                              null != a.current && (clearTimeout(a.current), (a.current = null));
                          }),
                [i, n, s, t, e],
            );
        })((0, h.bG)([e0.Ay, eQ.default], () => e0.Ay.getMember(t.id, eQ.default.getId()), [t.id])),
        (0, i.jsxs)("div", {
            children: [
                s ? (0, i.jsx)(tx, { onClose: () => a(t.id), guildName: t.name }) : null,
                (0, i.jsx)(eY, {
                    bannerIcon: (0, i.jsx)(tp.g, { size: "md", color: "currentColor", className: tS.q3 }),
                    bannerHeader: eL.intl.string(eL.t["9UoK6Y"]),
                    bannerSubtext: eL.intl.format(eL.t["4ZwD5G"], { link: tb.MO }),
                    textStyles: tS.cI,
                    headerStyles: tS.U_,
                    children: (0, i.jsx)(q.E, {
                        variant: "text-sm/semibold",
                        children: (0, i.jsx)(tg.A, { deadline: new Date(n), showUnits: !0, stopAtOneSec: !0 }),
                    }),
                }),
            ],
        })
    );
}
var ty = n(429933),
    tT = n(415666),
    tv = n(513609),
    tN = n(301169),
    tj = n(780574),
    tM = n(751258),
    tR = n(451909),
    tL = n(195880),
    tD = n(926262),
    tk = n(186168),
    tP = n(537174),
    tG = n(512599),
    tO = n(3137),
    tw = n(559908);
n(142703);
var tU = n(765671),
    tF = n(741961),
    tB = n(459793),
    tH = n(103640);
function tK(e, t) {
    return e === t || (e?.channelId === t?.channelId && e?.value === t?.value && e?.multiplier === t?.multiplier);
}
var tV = n(51940);
let tz = l.memo(function (e) {
        let { channelId: t, width: n } = e,
            s = (0, h.bG)([y.A], () => y.A.useReducedMotion),
            a = (0, h.bG)([tw.Ay], () => tw.Ay.getMostRecentMessageCombo(t), [t]),
            [r, o] = l.useState(!1);
        l.useEffect(() => {
            if (a?.displayed) return;
            o(!1),
                setImmediate(() => {
                    o((null != a ? (0, tH.RL)(a.combo) : 0) > 0);
                });
            let e = setTimeout(() => {
                o(!1), null != a && (0, tG.Nu)(a);
            }, 2e3);
            return () => clearTimeout(e);
        }, [a]);
        let c = null != a ? "100%" : "200%",
            d = (0, V.z)(
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
            (0, i.jsx)(F.animated.div, {
                className: tV.Gi,
                style: d,
                children: (0, i.jsx)(q.E, { className: tV.fX, variant: "text-sm/bold", children: (0, tH.RL)(a.combo) }),
            })
        );
    }),
    tW = l.memo(function (e) {
        let { value: t, multiplier: n } = e,
            { color: s, square: r, flair: o } = l.useMemo(() => (0, tH.HN)(n), [n]);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(q.E, { className: tV.iR, variant: "text-sm/bold", children: t }),
                (0, i.jsxs)("div", {
                    className: tV._Z,
                    style: { color: s },
                    children: [
                        (0, i.jsx)(q.E, {
                            className: tV.On,
                            style: { color: s },
                            variant: "text-sm/bold",
                            children: eL.intl.format(eL.t["6bgVlq"], { multiplier: n }),
                        }),
                        r &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", { className: a()(tV.QA, tV.kb), style: { backgroundColor: s } }),
                                    (0, i.jsx)("div", { className: a()(tV.QA, tV.pG), style: { backgroundColor: s } }),
                                ],
                            }),
                        o &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", {
                                        className: a()(tV.ox, tV.kb),
                                        children: (0, i.jsx)(tB.A, { width: 24, height: 24 }),
                                    }),
                                    (0, i.jsx)("div", {
                                        className: a()(tV.ox, tV.pG),
                                        children: (0, i.jsx)(tB.A, { width: 24, height: 24 }),
                                    }),
                                ],
                            }),
                        1 === n &&
                            (0, i.jsx)(q.E, {
                                className: tV.uN,
                                variant: "text-sm/bold",
                                children: eL.intl.string(eL.t.b5Cpof),
                            }),
                    ],
                }),
            ],
        });
    }),
    tq = l.memo(function (e) {
        let t,
            { channelId: n } = e,
            s = (0, h.bG)([eQ.default], () => eQ.default.getId()),
            a = (0, h.bG)([tF.A], () => tF.A.isTyping(n, s), [n, s]),
            r = (0, h.bG)([tO.A], () => tO.A.isEnabled()),
            o = (0, h.bG)([tw.Ay], () => tw.Ay.isComboing(s, n), [n, s]),
            { ref: c, width: d = 0 } = (0, tU.Ay)(),
            [u, m] = l.useState(!1),
            p =
                ((t = (0, h.bG)([tO.A], () => !!tO.A.isEnabled() && tO.A.combosEnabled)),
                (0, h.bG)(
                    [tw.Ay, eQ.default],
                    () => (t ? tw.Ay.getUserCombo(eQ.default.getId(), n) : void 0),
                    [n, t],
                    tK,
                )),
            g = r && o && a;
        l.useEffect(() => {
            g && m(!0);
            let e = setTimeout(() => m(g), 1e3);
            return () => clearTimeout(e);
        }, [g]);
        let A = (0, V.z)({
                opacity: +!!u,
                transform: u ? "translateY(0)" : "translateY(100%)",
                pointerEvents: "none",
                config: F.config.stiff,
            }),
            f = l.useMemo(() => p ?? { value: 0, multiplier: 1 }, [p]),
            _ = l.useRef(f);
        l.useEffect(() => {
            (f.multiplier > 1 || f.value > 0) && (_.current = f);
        }, [f]);
        let { multiplier: E, value: C } = l.useMemo(
            () => ({ value: g ? f.value : _.current.value, multiplier: g ? f.multiplier : _.current.multiplier }),
            [g, f, _],
        );
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(tz, { channelId: n, width: d }),
                (0, i.jsx)(F.animated.div, {
                    ref: c,
                    className: tV.p_,
                    style: A,
                    children: (0, i.jsx)(tW, { value: C, multiplier: E }),
                }),
            ],
        });
    });
var t$ = n(208343),
    tJ = n(31408),
    tZ = n(810685),
    tY = n(806621),
    tX = n(831502);
let tQ = () =>
    (0, i.jsx)(eY, {
        bannerIcon: (0, i.jsx)(tZ.M, { alt: "", width: 80, height: 40 }),
        bannerHeader: eL.intl.string(eL.t.EouHwv),
        bannerSubtext: eL.intl.format(eL.t.PThBel, { appealLink: tX.q }),
    });
var t0 = n(118517),
    t1 = n(853145),
    t2 = n(226698),
    t3 = n(221314),
    t4 = n(81987);
let t7 = (e) => {
    let { channelId: t } = e,
        n = l.useCallback(() => {
            t2.A.reopenModReport(t);
        }, [t]);
    return (0, i.jsx)(eY, {
        bannerHeader: (0, i.jsx)(q.E, {
            variant: "text-md/medium",
            color: "text-muted",
            children: eL.intl.string(t3.default["0eUUeF"]),
        }),
        headerStyles: t4.U,
        containerStyles: t4.c,
        children: (0, i.jsx)(W.$, {
            variant: "secondary",
            size: "sm",
            text: eL.intl.string(t3.default["6quCi9"]),
            onClick: n,
        }),
    });
};
var t6 = n(151282),
    t5 = n(199160),
    t8 = n(970244),
    t9 = n(631576),
    ne = n(252263),
    nt = n(67259),
    nn = n(691540),
    ni = n(857250),
    nl = n(97483),
    ns = n(47167),
    na = n(734057),
    nr = n(994500),
    no = n(287809);
function nc(e) {
    let t = na.A.getChannel(e),
        n = null != t ? (0, ns.m1)(t, no.default, nr.A) : null,
        i = null == n ? eL.intl.string(eL.t.gi2swM) : eL.intl.formatToPlainString(eL.t.IFPJ6J, { channelName: n });
    (0, nn.P0)((0, ni.o)(i, nl.Ck.SUCCESS));
}
var nd = n(728321),
    nu = n(761640),
    nh = n(580745),
    nm = n(309010),
    np = n(954571),
    ng = n(147036),
    nA = n(234320),
    nf = n(625494),
    n_ = n(806150),
    nE = n(382287),
    nC = n(137577),
    nx = n(480870),
    nb = n(390756),
    nS = n(128783),
    nI = n(495359);
function ny() {
    return (0, i.jsxs)("div", {
        className: nI.kL,
        children: [
            (0, i.jsx)("div", { className: a()(nI.v9, nI.KJ) }),
            (0, i.jsx)("div", { className: a()(nI.v9, nI.rx) }),
        ],
    });
}
var nT = n(578434),
    nv = n(80683),
    nN = n(381941),
    nj = n(650583),
    nM = n(964623);
function nR(e) {
    e.preventDefault();
}
let nL = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function nD(e) {
    let { isSidebar: t, ...n } = e;
    return t ? (0, i.jsx)("section", { ...n, role: "complementary" }) : (0, i.jsx)("main", { ...n });
}
let nk = l.forwardRef((e, t) => (0, i.jsx)(nP, { ...e, ref: t }));
nk.displayName = "ChannelTextAreaForm";
class nP extends l.PureComponent {
    focusEditor() {
        this.editorRef?.focus();
    }
    submit() {
        this.editorRef?.submit();
    }
    isFirstChange = !0;
    editorRef = null;
    state = { ...(0, U.ur)(e_.A.getDraft(this.props.channel.id, e_.C.ChannelMessage)), contentWarningProps: null };
    componentDidMount() {
        e_.A.addChangeListener(this.draftDidChange);
    }
    componentWillUnmount() {
        e_.A.removeChangeListener(this.draftDidChange);
    }
    componentDidUpdate(e, t) {
        let { channel: n } = this.props,
            { textValue: i } = this.state;
        if (e.channel.id !== n.id) return void this.draftDidChange(this.props);
        if (e.hasModalOpen && !this.props.hasModalOpen) {
            let e = e_.A.getDraft(n.id, e_.C.ChannelMessage);
            e !== i && this.setState((0, U.ur)(e));
        }
        t.textValue.length < eM.uvi && i.length >= eM.uvi && np.default.track(eM.HAw.MESSAGE_LENGTH_LIMIT_REACHED, {});
    }
    draftDidChange = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.props,
                { textValue: n } = e.state,
                i = e_.A.getDraft(t.channel.id, e_.C.ChannelMessage);
            n !== i &&
                ("" === i || "" === n) &&
                e.setState((0, U.ur)(i), () => {
                    if (n !== i) {
                        let { onFocus: t } = e.props;
                        t?.();
                    }
                });
        };
    })();
    handleKeyDown = (e) => {
        let { keyboardModeEnabled: t, onKeyDown: n, channel: i } = this.props,
            l = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey,
            s = 0 !== this.state.textValue.length;
        switch (e.key) {
            case nj.dh.DELETE:
            case nj.dh.BACKSPACE:
                return void this.handleIncrementCombo("", 1);
            case nj.dh.ARROW_UP:
                if (l || s) return;
                if ((e.preventDefault(), t))
                    eC.A.getUploadCount(i.id, e_.C.ChannelMessage) > 0
                        ? nf._.dispatchToLastSubscribed(eM.jej.FOCUS_ATTACHMENT_AREA)
                        : nf._.dispatchToLastSubscribed(eM.jej.FOCUS_MESSAGES, { atEnd: !0 });
                else {
                    let { channel: e } = this.props,
                        t = tl.A.getLastChatCommandMessage(e.id),
                        n = tl.A.getLastEditableMessage(e.id);
                    null != t && null != n
                        ? tr.default.compare(n.id, t.id) > 0
                            ? this.handleEditLastMessage(n)
                            : this.handleRecallLastCommand(t)
                        : null != t
                          ? this.handleRecallLastCommand(t)
                          : null != n && this.handleEditLastMessage(n);
                }
                return;
            case nj.dh.ESCAPE:
                if (l || e.target !== e.currentTarget) return;
                if ((e.preventDefault(), t)) return void (0, I.Bm)();
                if (eC.A.getUploadCount(i.id, e_.C.ChannelMessage) > 0)
                    return void x.A.clearAll(i.id, e_.C.ChannelMessage);
        }
        n?.(e, s);
    };
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        E.A.startEditMessageRecord(t.id, e), T.Ay.trackWithMetadata(eM.HAw.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: i } = (0, P.Ez)(e.interactionData),
            { command: l, application: s } = L.EW({ channel: t, type: "channel" }, n);
        if (null != l) {
            let e =
                null != s
                    ? {
                          type: k.Hf.APPLICATION,
                          id: s.id,
                          icon: s.icon,
                          name: s?.bot?.username ?? s.name,
                          application: s,
                      }
                    : null;
            M.Gf({
                channelId: t.id,
                command: l,
                section: e,
                location: k.Oh.RECALL,
                initialValues: (0, R.getInitialValuesFromInteractionOptions)(l, i ?? []),
                commandOrigin: k.iw.CHAT,
            });
        }
    }
    handleIncrementCombo = (e, t) => {
        if (!this.props.poggermodeEnabled) return;
        let n = this.props.channel.id,
            i = eQ.default.getId(),
            l = tw.Ay.getUserCombo(i, n),
            s = (l?.value ?? 0) + 1;
        (0, tG.oG)({ channelId: n, userId: i, value: null != e ? e.length : s, multiplier: t });
    };
    handleTextareaChange = (e, t, n) => {
        let {
            keyboardModeEnabled: i,
            channel: { id: l },
        } = this.props;
        _.A.changeDraft(l, t, e_.C.ChannelMessage);
        let s = "" !== t && n !== this.state.richValue,
            a = s && !nL.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
        (this.isFirstChange = !1),
            a && this.state.textValue.length < t.length && this.handleIncrementCombo(),
            a ? C.A.startTyping(l) : "" === t && C.A.stopTyping(l),
            s && i && (0, I.Bm)(),
            this.setState({ textValue: t, richValue: n });
    };
    handleSendMessage = async (e) => {
        let {
            value: t,
            uploads: n,
            stickers: i,
            command: l,
            commandOptionValues: s,
            isGif: a,
            gifMetadata: r,
            components: o,
            announcementSendOptions: c,
        } = e;
        if (0 === (t = t.trim()).length && (null == i || 0 === i.length) && (null == n || 0 === n.length))
            return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
        let { guild: d, channel: h, pendingReply: m, chatInputType: p, threadsAlsoSendToChannel: g } = this.props,
            A = !1;
        if (null != l) {
            if (l.inputType === k.y$.BUILT_IN_INTEGRATION)
                return (
                    nf._.dispatch(eM.jej.SHAKE_APP, { duration: 200, intensity: 2 }),
                    Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                );
            let e = D.A.getCommandOrigin(h.id);
            if (null == e || e === k.iw.CHAT) {
                let { isAuthorized: e } = await (0, O.q)({
                    applicationId: l.applicationId,
                    channel: h,
                    commandIntegrationTypes: l.integration_types,
                });
                if (!e) return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
            } else if (e === k.iw.APPLICATION_LAUNCHER || e === k.iw.IMAGE_RECS_MENU || e === k.iw.IMAGE_RECS_SUBMENU) {
                let { location: t, sectionName: n } = (0, nb.bV)(l) ?? {},
                    i = e === k.iw.APPLICATION_LAUNCHER ? N.A.lastShownEntrypoint() : j.s4.TEXT,
                    { isAuthorized: s } = await (0, O.q)({
                        applicationId: l.applicationId,
                        channel: h,
                        commandIntegrationTypes: l.integration_types,
                        appLauncherContext: { location: t, sectionName: n, entrypoint: i },
                    });
                if (!s) return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
                (0, nb.My)(l);
            }
            let n = await (0, G.A)({ command: l, optionValues: s ?? {}, context: { guild: d, channel: h } });
            if (l.inputType !== k.y$.BUILT_IN_TEXT) return Promise.resolve({ shouldClear: !0, shouldRefocus: !0 });
            null != n && ((t = null != n.content && "" !== n.content ? n.content : t), (A = !0 === n.tts));
        }
        return (0, n_.i)({
            openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
            type: this.props.chatInputType,
            content: t,
            stickers: i,
            uploads: n,
            channel: h,
        }).then(async (e) => {
            let { valid: s, failureReason: f } = e;
            if (!s)
                if (f === eM.X8x.SLOWMODE_COOLDOWN)
                    return (
                        nf._.dispatch(eM.jej.SHAKE_APP, { duration: 200, intensity: 2 }),
                        nf._.dispatch(eM.jej.EMPHASIZE_SLOWMODE_COOLDOWN),
                        { shouldClear: !1, shouldRefocus: !0 }
                    );
                else return { shouldClear: !1, shouldRefocus: !1 };
            let C = (0, tM.S)(t, { channel: h, isEdit: !1 });
            null != C && (null != C.content && (t = C.content), null != C.tts && (A = C.tts));
            let b = tR.Ay.parse(h, t);
            (b.tts = b.tts || A), null != o && ((b.content = ""), (b.components = o));
            let S = {
                ...E.A.getSendMessageOptions({
                    content: t,
                    channelId: h.id,
                    uploads: n,
                    stickers: i,
                    command: l,
                    isGif: a,
                    pendingReply: m,
                    alsoForwardToChannelId: g ? (h.parent_id ?? void 0) : void 0,
                    scheduledTimestamp: this.props.pendingScheduledMessage?.scheduledTimestamp,
                }),
                location: nN.Hx.CHAT_INPUT,
            };
            if (
                (null != c && (S.announcementSendOptions = c),
                null != r && (S.gifMetadata = r),
                null != o && (S.flags = (0, u.UI)(S.flags ?? 0, eM.pr7.IS_COMPONENTS_V2)),
                a)
            )
                return (
                    E.A.sendMessage(h.id, b, void 0, S).then(() => {
                        g && nc(h.parent_id ?? void 0);
                    }),
                    (0, t0.Jx)(h.id),
                    ne.B({ channelId: h.id, enabled: !1 }),
                    { shouldClear: !1, shouldRefocus: !0 }
                );
            if (null != n && n.length > 0) {
                let e = (0, nE.LJ)(n);
                if ((0, nE.fJ)(e, d?.id)) return (0, eS.V)(h, e), { shouldClear: !1, shouldRefocus: !1 };
                (S.eagerDispatch = !1),
                    (S.attachmentsToUpload = n),
                    (S.onAttachmentUploadError = (e, i, l) => {
                        (0, tN.k)({ file: e, guildId: h.getGuildId(), analyticsLocations: [], code: i, reason: l }) &&
                            ("" !== t &&
                                "" === e_.A.getDraft(h.id, e_.C.ChannelMessage) &&
                                _.A.saveDraft(h.id, t, e_.C.ChannelMessage),
                            0 === eC.A.getUploadCount(h.id, e_.C.ChannelMessage) &&
                                x.A.setUploads({ channelId: h.id, uploads: n, draftType: e_.C.ChannelMessage }));
                    }),
                    x.A.clearAll(h.id, e_.C.ChannelMessage);
            }
            if (null != S.scheduledTimestamp)
                try {
                    await (0, t6.pr)({
                        channelId: h.id,
                        scheduledTimestamp: S.scheduledTimestamp,
                        messageSendData: {
                            channelId: h.id,
                            content: t,
                            nonce: (0, tL.m)(),
                            tts: A,
                            message_reference: S.messageReference,
                            allowed_mentions: S.allowedMentions,
                            flags: S.flags,
                        },
                        attachmentsToUpload: n,
                    }),
                        (0, t8.c_)(S.scheduledTimestamp);
                } catch (e) {
                    return (0, t8.kM)(e.message), { shouldClear: !1, shouldRefocus: !1 };
                }
            else
                E.A.sendMessage(h.id, b, void 0, S).then(() => {
                    g && nc(h.parent_id ?? void 0);
                });
            return (
                this.setState((0, U.N3)()),
                (0, t0.Jx)(h.id),
                (0, t9.x5)(h.id, p.drafts.type),
                ne.B({ channelId: h.id, enabled: !1 }),
                { shouldClear: !0, shouldRefocus: !0 }
            );
        });
    };
    handleSetValue = (e) => {
        let t = this.editorRef?.getSlateEditor();
        null != t && (ez.b.select(t, []), t.insertText(e), this.editorRef?.focus());
    };
    renderAttachButton = (e, t) =>
        (0, i.jsx)(eV.A, {
            className: t,
            channel: this.props.channel,
            draftType: e_.C.ChannelMessage,
            editorTextContent: this.state.textValue,
            setValue: this.handleSetValue,
            canOnlyUseTextCommands: e,
        });
    renderApplicationCommandIcon = (e, t, n) =>
        (0, i.jsx)(eK, { className: n, command: e, section: t, channel: this.props.channel });
    render() {
        let {
                channel: e,
                focused: t,
                onBlur: n,
                onFocus: l,
                onResize: s,
                highlighted: a,
                pendingReply: r,
                chatInputType: c,
                placeholder: d,
                accessibilityLabel: u,
                shakeIntensity: h,
                poggermodeEnabled: g,
                pendingScheduledMessage: A,
                announcementComposerEnabled: f,
            } = this.props,
            { contentWarningProps: _ } = this.state,
            E =
                e.type === eM.rbe.GUILD_ANNOUNCEMENT && f
                    ? (0, i.jsx)(eG, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: nM.gM,
                          channel: e,
                          placeholder: d,
                          accessibilityLabel: u,
                          pendingReply: r,
                          type: w.oU.CREATE_ANNOUNCEMENT_POST,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: s,
                          onFocus: l,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: eS.R,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                      })
                    : (0, i.jsx)(ev.Ay, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: nM.gM,
                          channel: e,
                          placeholder: d,
                          accessibilityLabel: u,
                          pendingReply: r,
                          type: c,
                          onChange: this.handleTextareaChange,
                          onSubmit: this.handleSendMessage,
                          onResize: s,
                          onFocus: l,
                          onBlur: n,
                          onKeyDown: this.handleKeyDown,
                          renderAttachButton: this.renderAttachButton,
                          renderApplicationCommandIcon: this.renderApplicationCommandIcon,
                          promptToUpload: eS.R,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                          pendingScheduledMessage: A,
                      });
        return (0, i.jsx)(m.Y, {
            targetElementRef: this.props.refInstance,
            position: "top",
            onRequestClose: () => {
                _?.onCancel?.(), this.setState({ contentWarningProps: null });
            },
            shouldShow: null != _,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    o()(null != _, "ChannelTextAreaForm > Popout > renderPopout: contentWarningProps cannot be null"),
                    (0, i.jsx)(tD.A, { onClose: t, ..._ })
                );
            },
            children: () =>
                g ? (0, i.jsx)(p.b, { isShaking: h > 0, intensity: h, className: nM.Xn, children: E }) : E,
        });
    }
}
class nG extends l.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: i } = t;
        return n.id !== i
            ? { textAreaFocused: null != n && !c.Fr && ts.A.can(eM.xBc.SEND_MESSAGES, n), currentChannelId: n.id }
            : null;
    }
    containerDomRef = l.createRef();
    refToChannelTextAreaFormComponent = l.createRef();
    inputFormRef = l.createRef();
    state = { textAreaFocused: !1, textAreaHighlighted: !1, currentChannelId: this.props.channel.id };
    dispatchGroupRef = l.createRef();
    componentDidMount() {
        nf._.subscribe(eM.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) &&
            (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        nf._.unsubscribe(eM.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
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
        let { keyboardModeEnabled: t, chatInputType: n, channel: i } = this.props;
        if (t)
            switch (e.key) {
                case nj.dh.ARROW_LEFT:
                    n === w.oU.SIDEBAR &&
                        nf._.dispatch(eM.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: nm.A.getChannelId() });
                    return;
                case nj.dh.ARROW_RIGHT:
                    n === w.oU.NORMAL &&
                        nf._.dispatch(eM.jej.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: nu.Ay.getCurrentSidebarChannelId(i.id),
                        });
            }
    };
    handleOpenExpressionPicker = (e) => {
        let { activeView: t } = e;
        (0, eq.bf)(t, this.props.chatInputType, this.props.channel.id);
    };
    handleOpenAppLauncher = (e) => {
        let { applicationId: t } = e;
        return v.R(j.s4.TEXT, this.props.chatInputType, { applicationId: t }, this.props.channel.id);
    };
    handleChatInteract = () => {
        this.dispatchGroupRef.current?.bumpDispatchPriority();
    };
    renderMessageBanner = (e) => {
        let {
            channel: t,
            showQuarantinedUserBanner: n,
            guild: l,
            communicationDisabledUntil: s,
            showAutomodUserProfileChatBlocker: a,
        } = e;
        return t.type === eM.rbe.DM && n
            ? (0, i.jsx)(tQ, {})
            : t.isModeratorReportChannel() && t.isArchivedThread()
              ? (0, i.jsx)(t7, { channelId: t.id })
              : null != s && (0, th.n)(s) && null != l && !ts.A.can(eM.xBc.ADMINISTRATOR, l)
                ? (0, i.jsx)(tI, { guild: l, disabledUntil: s })
                : a
                  ? (0, i.jsx)(e5, { guild: l })
                  : null;
    };
    render() {
        let e,
            {
                channel: t,
                guild: n,
                keyboardModeEnabled: l,
                hasModalOpen: s,
                pendingReply: r,
                threadsAlsoSendToChannel: o,
                chatInputType: c,
                placeholder: u,
                accessibilityLabel: h,
                showQuarantinedUserBanner: m,
                filterAfterTimestamp: p,
                communicationDisabledUntil: f,
                shakeIntensity: _,
                poggermodeEnabled: E,
                isSelectedResourceChannel: C,
                showAutomodUserProfileChatBlocker: x,
                pendingScheduledMessage: I,
                messagesTypingGradient: y,
                showLinkedLobbyApplicationLoadingIndicator: T,
                announcementComposerEnabled: v,
            } = this.props,
            { textAreaFocused: N, textAreaHighlighted: j } = this.state,
            M = c === w.oU.SIDEBAR;
        e =
            M && t.type === eM.rbe.GUILD_VOICE
                ? eL.t.pnnyFZ
                : M && t.type === eM.rbe.GUILD_STAGE_VOICE
                  ? eL.t.YInSkq
                  : d.k.THREADS.has(t.type)
                    ? eL.t["OkzL+Q"]
                    : eL.t.UbNmGc;
        let R = (0, i.jsx)("div", { className: nM.li, children: (0, i.jsx)(ny, {}) }),
            L = (0, i.jsx)("div", {
                className: nM.li,
                children: (0, i.jsx)(nd.A, {
                    childRef: this.containerDomRef,
                    tutorialId: "writing-messages",
                    position: "left",
                    offsetX: 75,
                    children: (0, i.jsx)(nk, {
                        ref: this.refToChannelTextAreaFormComponent,
                        refInstance: this.containerDomRef,
                        focused: N,
                        highlighted: j,
                        channel: t,
                        guild: n,
                        keyboardModeEnabled: l,
                        onFocus: this.handleInputFocus,
                        onBlur: this.handleInputBlur,
                        onKeyDown: this.handleInputKeyDown,
                        hasModalOpen: s,
                        pendingReply: r,
                        threadsAlsoSendToChannel: o,
                        chatInputType: c,
                        placeholder: u,
                        accessibilityLabel: h,
                        shakeIntensity: _,
                        poggermodeEnabled: E,
                        pendingScheduledMessage: I,
                        announcementComposerEnabled: v,
                    }),
                }),
            }),
            D = T ? R : L,
            k = (0, ns.m1)(t, no.default, nr.A);
        return (0, i.jsx)(
            S.A,
            {
                page: (0, ng.DJ)(this.props.channel),
                children: (0, i.jsx)(tv.di, {
                    children: (0, i.jsx)(tT.Xq, {
                        children: (0, i.jsxs)(nA.Ah, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, i.jsx)(nA.EG, { event: eM.jej.TEXTAREA_FOCUS, handler: this.handleInputFocus }),
                                (0, i.jsx)(nA.EG, { event: eM.jej.TEXTAREA_BLUR, handler: this.handleInputBlur }),
                                (0, i.jsx)(nA.EG, {
                                    event: eM.jej.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker,
                                }),
                                (0, i.jsx)(nA.EG, {
                                    event: eM.jej.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher,
                                }),
                                (0, i.jsxs)(nD, {
                                    isSidebar: M,
                                    className: nM.q2,
                                    "aria-label": eL.intl.formatToPlainString(e, { channelName: k }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    style: this.props.guildOfficialMessageStyle,
                                    children: [
                                        (0, i.jsx)(nS.A, { channel: t, guild: n, narrow: M }),
                                        (0, i.jsxs)(g.F, {
                                            component: (0, i.jsx)(A.A, {
                                                children: (0, i.jsx)(g.H, {
                                                    children: eL.intl.format(eL.t.eTzKkx, { channelName: k }),
                                                }),
                                            }),
                                            children: [
                                                (0, i.jsx)(tk.A, {
                                                    channel: t,
                                                    forceCozy: C,
                                                    filterAfterTimestamp: p,
                                                    showingQuarantineBanner: m,
                                                    typingGradient: y,
                                                    hideSummaries: c === w.oU.OVERLAY,
                                                }),
                                                C
                                                    ? null
                                                    : (this.renderMessageBanner({
                                                          channel: t,
                                                          showQuarantinedUserBanner: m,
                                                          guild: n,
                                                          communicationDisabledUntil: f,
                                                          showAutomodUserProfileChatBlocker: x,
                                                      }) ??
                                                      (0, i.jsxs)("form", {
                                                          ref: this.inputFormRef,
                                                          onSubmit: nR,
                                                          className: a()(nM.Zd, { [nM.Mf]: !T }),
                                                          children: [
                                                              E && (0, i.jsx)(tq, { channelId: t.id }),
                                                              t.isPrivate()
                                                                  ? (0, i.jsx)(nT.A, { channel: t, children: D })
                                                                  : (0, i.jsx)(nv.A, { channel: t, children: D }),
                                                              (0, i.jsx)(b.Ay, { channel: t, isInTextChannel: !0 }),
                                                          ],
                                                      })),
                                                (0, i.jsx)(tv.lr, {}),
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
let nO = l.memo(function (e) {
    var t, n;
    let s,
        a,
        r,
        o,
        c,
        { channel: d, guild: u, chatInputType: m, filterAfterTimestamp: p } = e,
        { placeholder: g, accessibilityLabel: A } = (0, nx.A)({ channel: d }),
        _ =
            ((t = no.default.getCurrentUser()),
            (s = (0, tY.r)(d)),
            (a = (0, h.bG)([tl.A], () => tl.A.getMessages(d.id).length > 0, [d])),
            null != t && t.hasFlag(eM.nhx.QUARANTINED) && s && !a),
        [C] = (0, tm.c)(u?.id),
        x = (0, e$.uZ)(u?.id),
        S = (0, h.bG)([no.default], () => no.default.getCurrentUser()),
        I = (0, h.bG)([e0.Ay], () => null != S && (e0.Ay.getMember(u?.id ?? eM.dJq, S?.id)?.isPending ?? !1)),
        T = (0, h.bG)([tO.A], () => tO.A.isEnabled()),
        v =
            ((n = d.id),
            (r = (0, t$.A)(tJ.uD.CHAT_INPUT)),
            (o = (0, h.bG)([tO.A], () => tO.A.isEnabled({ shakeLocation: tJ.uD.CHAT_INPUT }))),
            (0, h.bG)([tF.A, tw.Ay, eQ.default], () =>
                o && tF.A.isTyping(n, eQ.default.getId())
                    ? tw.Ay.getUserComboShakeIntensity(eQ.default.getId(), n, r)
                    : 0,
            )),
        N = (0, ty.A)(d.id),
        j = ((c = d.id), (0, h.bG)([t5.A], () => t5.A.getPendingScheduledMessage(c))),
        M = (0, h.bG)([nt.A], () => nt.A.getAlsoSendToChannel(d.id)),
        R = (0, h.bG)([tw.Ay, eQ.default], () => tw.Ay.getUserCombo(eQ.default.getId(), d.id)),
        L = (0, b.rj)(d),
        D = (0, b.aW)(d),
        k = L.length > 0 || d.rateLimitPerUser > 0 || null != R || null != D,
        { showLinkedLobbyApplicationLoadingIndicator: P } = (0, nC.A)(d.linkedLobby),
        G = eW.useConfig({ location: "ChannelChat" }).announcementComposer,
        O = (0, tP.A)((0, tj.GP)(u, "ChannelChat") ? (u?.officialMessageColor ?? nN.aj) : null);
    return (
        !(function (e) {
            let [t, n] = (function (e) {
                    let t = (0, h.bG)([tl.A], () => tl.A.isReady(e.id), [e.id]),
                        n = [],
                        i = (0, h.bG)([ti.A], () => ti.A.getGuild(e.guild_id)),
                        s = (function (e) {
                            let t = (0, h.bG)([ti.A], () => ti.A.getGuild(e.guild_id)),
                                n = (0, h.bG)([tn.A], () => tn.A.getMemberCount(t?.id) ?? 0),
                                i = (0, h.bG)([tl.A], () => tl.A.getLastMessage(e.id)),
                                s = (0, h.bG)([ts.A], () => null != t && ts.A.can(eM.xBc.ADMINISTRATOR, t)),
                                a = (0, h.bG)([tt.A], () => tt.A.getGuildAffinity(e.guild_id)?.score),
                                r = (0, h.bG)([te.A], () => te.A.hasConsented(eM.YAq.PERSONALIZATION)),
                                o = (0, to.A)(),
                                [c] = (0, e9.Wl)(e8.M.FIRST_BOOSTER_UPSELL_OVERSEER, {
                                    cooldownDurationMs: 0,
                                    numTimesToRecur: 3,
                                }),
                                d = c === e8.M.FIRST_BOOSTER_UPSELL_OVERSEER;
                            return l.useMemo(
                                () =>
                                    !(
                                        !d ||
                                        !r ||
                                        null == a ||
                                        a <= 17.06 ||
                                        e.type !== eM.rbe.GUILD_TEXT ||
                                        null == t ||
                                        tr.default.age(t.id) < tc ||
                                        null == t.premiumSubscriberCount ||
                                        0 !== t.premiumSubscriberCount ||
                                        n < 10 ||
                                        i?.id == null ||
                                        tr.default.age(i.id) > td
                                    ) &&
                                    (s || o),
                                [d, r, e.type, t, n, a, i?.id, s, o],
                            );
                        })(e);
                    t && s && n.push(e8.M.FIRST_BOOSTER_UPSELL);
                    let [a, r] = (0, e9.ww)(n, i?.id ?? eM.eGj);
                    return [a, r];
                })(e),
                i = l.useRef(null);
            l.useEffect(() => {
                null == t ||
                    ((null == i.current || i.current.visibleContent !== t || i.current.channelId !== e.id) &&
                        (t === e8.M.FIRST_BOOSTER_UPSELL &&
                            E.A.sendGuildBoostUpsellSystemMessage(e.id, { guildBoostUpsellType: en.Mk.FIRST_BOOSTER }),
                        (i.current = { visibleContent: t, channelId: e.id }),
                        n(tu.i.AUTO_DISMISS)));
            }, [t, e.id, n]);
        })(d),
        (0, i.jsx)(nG, {
            channel: d,
            guildOfficialMessageStyle: O,
            isEditing: null != (0, h.bG)([nh.A], () => nh.A.getEditingMessageId(d.id)),
            hasModalOpen: (0, f.useModalsStore)(f.hasAnyModalOpenSelector),
            guild: u,
            keyboardModeEnabled: (0, h.bG)([y.A], () => y.A.keyboardModeEnabled),
            pendingReply: (0, h.bG)([t1.A], () => t1.A.getPendingReply(d.id)),
            threadsAlsoSendToChannel: M,
            chatInputType: m,
            placeholder: g,
            accessibilityLabel: A,
            filterAfterTimestamp: p,
            showQuarantinedUserBanner: _,
            communicationDisabledUntil: C,
            shakeIntensity: v,
            poggermodeEnabled: T,
            isSelectedResourceChannel: N,
            showAutomodUserProfileChatBlocker: x && !I,
            pendingScheduledMessage: j,
            messagesTypingGradient: k,
            showLinkedLobbyApplicationLoadingIndicator: P,
            announcementComposerEnabled: G,
        })
    );
});
