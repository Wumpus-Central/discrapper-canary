n.d(t, { A: () => n6 }), n(938796);
var l = n(477900),
    i = n(582128),
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
    A = n(707554),
    p = n(140735),
    f = n(192308),
    C = n(465532),
    x = n(148494),
    E = n(414798),
    S = n(608299),
    I = n(119031),
    _ = n(820284),
    j = n(955572),
    y = n(775602),
    b = n(95561),
    N = n(211401),
    T = n(989837),
    v = n(500049),
    M = n(721768),
    R = n(459016),
    D = n(842209),
    L = n(861382),
    k = n(392054),
    P = n(168186),
    O = n(545152),
    G = n(972995),
    U = n(355622),
    w = n(408018);
n(321073), n(323874), n(14289), n(35956);
var F = n(950372),
    H = n(132500),
    B = n(661531),
    K = n(717421),
    V = n(259678),
    z = n(821609),
    W = n(834730),
    $ = n(559647),
    J = n(163328),
    q = n(980707),
    Z = n(477782),
    Y = n(241326),
    X = n(81369),
    Q = n(866665),
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
    eu = n(442152),
    eh = n(703007),
    em = n(2553),
    eg = n(946274),
    eA = n(135621),
    ep = n(406704),
    ef = n(885386),
    eC = n(31717),
    ex = n(638128),
    eE = n(522602),
    eS = n(515718),
    eI = n(723702),
    e_ = n(518960),
    ej = n(486319),
    ey = n(719442),
    eb = n(267102),
    eN = n(655098),
    eT = n(323350),
    ev = n(820066),
    eM = n(683167),
    eR = n(551483);
let eD = {
    ...U.oU.GENERIC_RICH_TEXTAREA,
    markdown: { disableBlockQuotes: !0, disableCodeBlocks: !0, disableInlineCode: !0 },
};
function eL(e) {
    let {
            channel: t,
            className: n,
            containerClassName: s,
            placeholder: a,
            spellCheck: r,
            title: o,
            onChange: c,
            onPlainTextChange: d,
            onEnter: u,
        } = e,
        h = i.useContext(eb.Ay),
        m = i.useRef(o),
        [g] = i.useState(() => {
            let e = (0, ey.ie)();
            return (
                (e.children = (0, w.x7)(o)),
                (e.selection = { anchor: eR.K, focus: eR.K }),
                (0, eM.a)({
                    editor: e,
                    chatInputType: eD,
                    channel: t,
                    windowContext: h,
                    previewMarkdown: !0,
                    updateState: (e, t, n) => {
                        let { value: l, selection: i } = n;
                        void 0 !== l && (e.children = l), null != i && (e.selection = i), e.onChange();
                    },
                }),
                !(function (e) {
                    let { insertText: t } = e;
                    (e.insertBreak = () => {}),
                        (e.insertSoftBreak = () => {}),
                        (e.insertText = (n) => {
                            let l = n.replace(/\r\n|\r|\n/g, " ");
                            (0, eT.WO)(ev.VW.richValue(e), { mode: "raw" }).length -
                                (null != e.selection && ey.Q6.isExpanded(e.selection)
                                    ? (0, eT.WO)(ev.VW.richValue(e), { mode: "raw", range: e.selection }).length
                                    : 0) +
                                l.length <=
                                eV && t(l);
                        });
                })(e),
                e
            );
        });
    i.useLayoutEffect(() => {
        g.onChange();
    }, [g]),
        i.useEffect(() => {
            o !== m.current &&
                ((m.current = o),
                (g.children = (0, w.x7)(o)),
                (g.selection = { anchor: eR.K, focus: eR.K }),
                g.onChange());
        }, [g, o]);
    let A = i.useCallback(
            (e) => {
                let t = (0, eT.WO)(e, { mode: "raw" }),
                    n = (0, eT.WO)(e, { mode: "plain" }),
                    l = t !== m.current;
                (m.current = t), d(n), l && c(t);
            },
            [c, d],
        ),
        p = i.useCallback(
            (e) => {
                "Enter" === e.key && (e.preventDefault(), e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || u());
            },
            [u],
        );
    return (0, l.jsx)(eN.A, {
        editor: g,
        channelId: t.id,
        guildId: t.guild_id,
        className: n,
        containerClassName: s,
        placeholder: a,
        spellCheck: r,
        "aria-multiline": !1,
        onChange: A,
        onKeyDown: p,
    });
}
var ek = n(392553),
    eP = n(123583),
    eO = n(273754),
    eG = n(851023),
    eU = n(822610),
    ew = n(652215);
n(827669), n(294920);
var eF = n(478644),
    eH = n(375708),
    eB = n(806686),
    eK = n(495088);
let eV = 140;
function ez(e, t, n) {
    return {
        media: { url: e, proxyUrl: e, loadingState: en.TD.UNKNOWN, flags: 0 },
        description: t ?? void 0,
        spoiler: n,
    };
}
let eW = i.memo(
    i.forwardRef(function (e, t) {
        let n,
            s,
            {
                textValue: r,
                richValue: c,
                className: d,
                id: u,
                required: g,
                disabled: A,
                accessibilityLabel: p,
                channel: f,
                type: C,
                focused: x,
                onChange: E,
                onResize: I,
                onBlur: _,
                onFocus: j,
                onKeyDown: b,
                onSubmit: N,
                promptToUpload: T,
                canMentionRoles: v,
                canMentionChannels: M,
                maxCharacterCount: R,
                placeholder: D,
                "aria-describedby": k,
                "aria-labelledby": P,
                setEditorRef: O,
                autoCompletePosition: G,
                disableThemedBackground: w = !1,
                emojiPickerCloseOnModalOuterClick: H,
                parentModalKey: B,
            } = e,
            q = er.useField("channelDrafts")[f.id],
            Z = q?.title ?? "",
            Y = q?.heroFile,
            X = q?.publish ?? !0,
            Q = q?.createThread ?? !0;
        o()(null != C, "chat input type must be set");
        let { analyticsLocations: ee } = (0, es.Ay)(ei.A.CHANNEL_TEXT_AREA),
            et = (0, eO.L0)(t),
            el = i.useRef(null),
            ed = i.useRef(null),
            eh = i.useRef(null),
            em = i.useRef(null),
            eg = i.useRef(Z);
        O?.(ed.current);
        let { activeCommand: eS } = (0, h.cf)([L.A], () => ({
                activeCommand: C.commands?.enabled ? L.A.getActiveCommand(f.id) : null,
                activeCommandSection: C.commands?.enabled ? L.A.getActiveCommandSection(f.id) : null,
            })),
            {
                isLurking: e_,
                isPendingMember: ey,
                disabled: eb,
                canAttachFiles: eN,
                canEveryoneSendMessages: eT,
            } = (0, eO.Sk)(f, C, eS, A),
            ev = !ef.D_.useSetting() && !(0, eI.isAndroidWeb)() && null != window.ResizeObserver,
            eM = !ev || !C.commands?.enabled || !x || "/" !== r,
            eR = (0, eA.A)(),
            { fontSize: eD } = (0, h.cf)([y.Ay], () => ({
                fontSize: y.Ay.fontSize,
                isSubmitButtonEnabled: y.Ay.isSubmitButtonEnabled,
            })),
            eG = (0, h.bG)([ex.A], () => ex.A.isEnabled());
        i.useEffect(() => {
            ev || (eg.current = Z);
        }, [Z, ev]);
        let eF = i.useCallback((e) => eo(f.id, { title: e }), [f.id]),
            eW = i.useCallback((e) => {
                eg.current = e;
            }, []),
            eY = i.useCallback(() => ed.current?.focus(), []),
            eX = (0, ep.n)(f);
        (0, eO.N_)(C, eb, f.id);
        let { eventEmitter: eQ, handleEditorSelectionChanged: e0 } = (0, eO.ml)(ed, r, c),
            e1 = i.useCallback(
                (e) => {
                    function t(e) {
                        return (
                            e.shouldClear &&
                                (eo(f.id, { title: "", heroFile: null }), (eg.current = ""), ed.current?.blur()),
                            e
                        );
                    }
                    let n = [],
                        l = `${
                            Z.length > 0
                                ? `# ${Z}
`
                                : ""
                        }${e.value}`,
                        i = (
                            eg.current.length > 0
                                ? eg.current
                                : e.value.length > 0
                                  ? e.value
                                  : eH.intl.string(eH.t["7Xm5QI"])
                        ).slice(0, ew.Ign);
                    if (null == Y)
                        return N({
                            ...e,
                            value: l,
                            announcementSendOptions: { createThread: eX && Q, threadName: i, publish: X },
                        }).then(t);
                    n.push({ type: en.I5.MEDIA_GALLERY, items: [ez(`attachment://${Y.name}`, null, !1)], id: "82733" }),
                        l.length > 0 && n.push({ type: en.I5.TEXT_DISPLAY, content: l, id: "82744" });
                    let s = eE.A.getUploads(f.id, eC.C.ChannelMessage),
                        a = s.filter((e) => (e.isImage || e.isVideo) && e.filename !== Y?.name),
                        r = s.filter((e) => !e.isImage && !e.isVideo && e.filename !== Y?.name),
                        o = a.map((e) => ez(`attachment://${e.filename}`, e.description, e.spoiler));
                    return (
                        o.length > 0 && n.push({ type: en.I5.MEDIA_GALLERY, items: o, id: "82755" }),
                        r.forEach((e, t) => {
                            n.push({
                                type: en.I5.FILE,
                                file: ez(`attachment://${e.filename}`, e.description, e.spoiler).media,
                                id: `${82766 + t}`,
                                spoiler: e.spoiler,
                                name: null,
                                size: null,
                            });
                        }),
                        N({
                            ...e,
                            value: l,
                            components: n,
                            announcementSendOptions: { createThread: eX && Q, threadName: i, publish: X },
                        }).then(t)
                    );
                },
                [N, Z, Y, f.id, Q, X, eX],
            ),
            { submit: e2, handleSubmit: e3 } = (0, eO.Zx)(e1, C, ed, em, f.id),
            { autocompleteRef: e4, handleMaybeShowAutocomplete: e7, handleHideAutocomplete: e8 } = (0, eO.v7)(),
            e5 = i.useCallback(() => em?.current?.hide(), []),
            { editorHeight: e6, handleResize: e9 } = (0, eO.ck)(I),
            {
                handleTab: te,
                handleEnter: tt,
                handleSpace: tn,
                handleMoveSelection: tl,
            } = ((n = i.useCallback(
                () => !!(!eM && el.current?.onTabOrEnter(!1)) || e4.current?.onTabOrEnter(!1) || !1,
                [eM],
            )),
            (s = i.useCallback(
                () => !!(!eM && el.current?.onTabOrEnter(!0)) || e4.current?.onTabOrEnter(!1) || !1,
                [eM],
            )),
            {
                handleTab: n,
                handleEnter: s,
                handleSpace: i.useCallback(() => e4.current?.onSpace() || !1, [e4]),
                handleMoveSelection: i.useCallback(
                    (e) => !!(!eM && el.current?.onMoveSelection(e)) || e4.current?.onMoveSelection(e) || !1,
                    [eM],
                ),
            }),
            {
                expressionPickerView: ti,
                shouldHideExpressionPicker: ts,
                handleOuterClick: ta,
            } = (0, eO.MD)(C, ed, f.id),
            { handleAutocompleteVisibilityChange: tr } = (0, eO.uW)(C, f.id),
            to = (0, eO.NO)(ed),
            tc = (0, eO.Vu)(e2, C, ed),
            td = (0, eO.C)({
                editorRef: ed,
                disabled: eb,
                textValue: r,
                channelId: f.id,
                chatInputType: C,
                submit: e1,
            });
        (0, ej.R)(eQ, f.guild_id, f.id);
        let [tu, th] = i.useState(!1),
            tm = i.useCallback(() => {
                ta(), th(!0);
            }, [ta]),
            tg = tu || r.length > 0 || null != Y || Z.length > 0,
            { editorHeaderHeight: tA, paddingTop: tp } = (0, K.z)({
                editorHeaderHeight: 122 * !!tg,
                paddingTop: 16 * !!tg,
                config: { tension: 120, friction: 15, clamp: !0 },
            }),
            tf = i.useRef(null),
            [tC, tx] = i.useState(!1),
            tE = i.useRef(!1),
            tS = i.useCallback(() => {
                tE.current = !0;
                let e = setTimeout(() => {
                    tE.current && tx(!0);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            tI = i.useCallback(() => {
                tE.current = !1;
                let e = setTimeout(() => {
                    tE.current || tx(!1);
                }, 100);
                return () => clearTimeout(e);
            }, []),
            t_ = i.useCallback(() => {
                if (null == Y) return;
                let e = eE.A.getUploads(f.id, C.drafts.type),
                    t = e.find((e) => e.filename === Y.name)?.id;
                null != t && S.A.remove(f.id, t, eC.C.ChannelMessage), eo(f.id, { heroFile: null });
            }, [f.id, Y, C.drafts.type]);
        return (0, l.jsx)(ec.Sv, {
            value: eQ,
            children: (0, l.jsxs)(es.f5, {
                value: ee,
                children: [
                    (0, l.jsxs)("div", {
                        ref: et,
                        className: a()(d, eK.gM),
                        onMouseDown: tm,
                        children: [
                            (0, l.jsx)("div", {
                                ref: eh,
                                onScroll: e5,
                                className: a()(eK.Ui, { [eK.k6]: !w }),
                                children: (0, l.jsxs)("div", {
                                    className: a()(eK.vW, eB.vW),
                                    children: [
                                        (0, l.jsxs)("div", {
                                            className: eB.rf,
                                            children: [
                                                (0, l.jsxs)(F.animated.div, {
                                                    className: eB.ov,
                                                    style: { height: tA, paddingTop: tp },
                                                    children: [
                                                        null != Y
                                                            ? (0, l.jsx)(eJ, { file: Y, onRemoveHeroImage: t_ })
                                                            : null,
                                                        null != Y
                                                            ? null
                                                            : (0, l.jsx)(eZ, {
                                                                  channel: f,
                                                                  onImageUploaded: (e) => eo(f.id, { heroFile: e }),
                                                                  onFocus: () => th(!0),
                                                              }),
                                                        ev
                                                            ? (0, l.jsx)(
                                                                  eL,
                                                                  {
                                                                      channel: f,
                                                                      className: eB.A$,
                                                                      containerClassName: eB.Py,
                                                                      placeholder: eH.intl.string(eH.t.Z8fYjO),
                                                                      spellCheck: eG,
                                                                      title: Z,
                                                                      onChange: eF,
                                                                      onPlainTextChange: eW,
                                                                      onEnter: eY,
                                                                  },
                                                                  f.id,
                                                              )
                                                            : (0, l.jsx)("input", {
                                                                  maxLength: eV,
                                                                  className: eB.hz,
                                                                  placeholder: eH.intl.string(eH.t.Z8fYjO),
                                                                  value: Z,
                                                                  onChange: (e) => eo(f.id, { title: e.target.value }),
                                                              }),
                                                    ],
                                                }),
                                                (0, l.jsx)("div", {
                                                    className: eB.I6,
                                                    children: (0, l.jsx)(V.vN, {
                                                        ringTarget: et,
                                                        ringClassName: eK.Rg,
                                                        children: (0, l.jsx)(ek.A, {
                                                            ref: ed,
                                                            id: u,
                                                            focused: x,
                                                            useSlate: ev,
                                                            textValue: r,
                                                            richValue: c,
                                                            disabled: eb,
                                                            placeholder: D,
                                                            required: g,
                                                            accessibilityLabel: p,
                                                            isPreviewing: (e_ || ey) && eT,
                                                            channel: f,
                                                            type: U.oU.CREATE_ANNOUNCEMENT_POST,
                                                            canPasteFiles: eN,
                                                            uploadPromptCharacterCount: ew.CS1,
                                                            maxCharacterCount: R ?? eR,
                                                            allowNewLines: !0,
                                                            "aria-describedby": k,
                                                            onChange: E,
                                                            onResize: e9,
                                                            onBlur: _,
                                                            onFocus: j,
                                                            onKeyDown: b,
                                                            onSubmit: e2,
                                                            onTab: te,
                                                            onEnter: tt,
                                                            onSpace: tn,
                                                            onMoveSelection: tl,
                                                            onSelectionChanged: e0,
                                                            onMaybeShowAutocomplete: e7,
                                                            onHideAutocomplete: e8,
                                                            promptToUpload: T,
                                                            fontSize: eD,
                                                            spellcheckEnabled: eG,
                                                            canOnlyUseTextCommands: !1,
                                                            "aria-labelledby": P,
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, l.jsx)("div", {
                                            className: eB.KK,
                                            children: (0, l.jsx)(eU.A, {
                                                channelId: f.id,
                                                type: C,
                                                canAttachFiles: eN,
                                                ignoreFile: Y?.name,
                                                smallAttachments: !0,
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                            (0, l.jsx)("div", { className: eB.yF }),
                            (0, l.jsxs)("div", {
                                className: eB.qr,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: eB.j4,
                                        children: [
                                            (0, l.jsx)(eq, { channel: f }),
                                            (0, l.jsx)(eP.A, {
                                                type: U.oU.CREATE_ANNOUNCEMENT_POST,
                                                disabled: eb,
                                                channel: f,
                                                handleSubmit: e3,
                                                isEmpty: 0 === r.trim().length,
                                                showAllButtons: !0,
                                                expressionButtonsHidden: !1,
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)("div", {
                                        className: eB.j4,
                                        children: (0, l.jsx)("div", {
                                            ref: tf,
                                            className: eB.Qo,
                                            onMouseEnter: tS,
                                            onMouseLeave: tI,
                                            children: (0, l.jsx)(m.Y, {
                                                targetElementRef: tf,
                                                renderPopout: () =>
                                                    (0, l.jsx)(e$, { channelId: f.id, canCreateThread: eX }),
                                                shouldShow: tC,
                                                autoInvert: !0,
                                                nudgeAlignIntoViewport: !0,
                                                position: "top",
                                                align: "right",
                                                children: (e) =>
                                                    (0, l.jsx)(z.$, {
                                                        ...e,
                                                        onClick: () => {
                                                            e2(r);
                                                        },
                                                        disabled: 0 === r.length && 0 === Z.length,
                                                        size: "sm",
                                                        "aria-label": eH.intl.string(eH.t.TXNS7S),
                                                        innerClassName: eB.jo,
                                                        text: (0, l.jsxs)("div", {
                                                            className: eB.f9,
                                                            children: [
                                                                (0, l.jsx)(W.E, {
                                                                    variant: "text-sm/semibold",
                                                                    color: "text-overlay-light",
                                                                    children: eH.intl.string(eH.t.TXNS7S),
                                                                }),
                                                                (0, l.jsxs)("div", {
                                                                    className: eB.pj,
                                                                    children: [
                                                                        (0, l.jsx)($.SendMessageIcon, {
                                                                            size: "xs",
                                                                            color: "white",
                                                                        }),
                                                                        eX && Q
                                                                            ? (0, l.jsx)(J.y, {
                                                                                  size: "xxs",
                                                                                  color: "white",
                                                                                  className: eB.Q5,
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
                                targetRef: et,
                                ref: e4,
                                channel: f,
                                canMentionRoles: v,
                                canMentionChannels: M,
                                useNewSlashCommands: ev,
                                canOnlyUseTextCommands: !1,
                                canSendStickers: !0,
                                textValue: r,
                                focused: x,
                                expressionPickerView: ti,
                                type: C,
                                editorRef: ed,
                                onSendMessage: e2,
                                onSendSticker: () => {},
                                onVisibilityChange: tr,
                                editorHeight: e6,
                                setValue: (e, t) => E?.(null, e, t),
                                position: G,
                            }),
                        ],
                    }),
                    ts
                        ? null
                        : (0, l.jsx)(eu.A, {
                              positionTargetRef: et,
                              type: C,
                              onSelectGIF: tc,
                              onSelectEmoji: to,
                              onSelectSticker: td,
                              channel: f,
                              closeOnModalOuterClick: H,
                              parentModalKey: B,
                              position: "top",
                              align: "right",
                              positionLayerClassName: eK.BD,
                          }),
                ],
            }),
        });
    }),
);
function e$(e) {
    let { channelId: t, canCreateThread: n } = e,
        i = er.useField("channelDrafts")[t],
        s = i?.createThread ?? !0,
        a = i?.publish ?? !0;
    return (0, l.jsxs)(q.W, {
        "data-menu-migrated": !0,
        "aria-label": eH.intl.string(eH.t["9WnJyo"]),
        navId: "send-announcement-options",
        onClose: ew.tEg,
        onSelect: ew.tEg,
        children: [
            (0, l.jsx)(Z.sL, {
                id: "create-thread",
                label: eH.intl.string(eH.t.rBIGBL),
                checked: n && s,
                disabled: !n,
                action: () => {
                    eo(t, { createThread: !s });
                },
            }),
            (0, l.jsx)(Z.sL, {
                id: "send-and-publish",
                label: eH.intl.string(eH.t.MFGE51),
                checked: a,
                action: () => {
                    eo(t, { publish: !a });
                },
            }),
        ],
    });
}
function eJ(e) {
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
              className: eB.Lb,
              "aria-hidden": !0,
              children: [
                  (0, l.jsx)("img", { src: s, alt: eH.intl.string(eH.t["2ePvR8"]), className: eB.c8 }),
                  r
                      ? (0, l.jsx)(ed.Ay, {
                            className: eB.jM,
                            children: (0, l.jsx)(eG.A, {
                                tooltip: eH.intl.string(eH.t.VjC21x),
                                onClick: n,
                                dangerous: !0,
                                children: (0, l.jsx)(Y.TrashIcon, {}),
                            }),
                        })
                      : null,
              ],
          });
}
function eq(e) {
    let { channel: t } = e;
    return (0, l.jsx)(eh.A, {
        "aria-label": eH.intl.string(eH.t["/IBYAq"]),
        className: eB.g$,
        size: "icon",
        color: "transparent",
        look: "blank",
        onChange: function (e) {
            (0, e_.R)(e.currentTarget.files, t, eC.C.ChannelMessage, { requireConfirm: !0, origin: "file_picker" }),
                (e.currentTarget.value = null);
        },
        children: (0, l.jsx)(X.H, {
            size: "custom",
            width: 20,
            height: 20,
            color: B.A.colors.INTERACTIVE_TEXT_DEFAULT,
        }),
    });
}
function eZ(e) {
    let { channel: t, onImageUploaded: n, onFocus: s } = e,
        a = i.useRef(null);
    async function r(e, l) {
        let i = await (0, eS.bX)(e, l.name, l.type),
            s = { id: (0, H.A)(), file: i, platform: el.xz.WEB, isThumbnail: !1, origin: "file_picker" };
        S.A.addFile({ file: s, channelId: t.id, draftType: eC.C.ChannelMessage }), n(i);
    }
    let [o, c] = i.useState(!1),
        d = i.useCallback(() => {
            c(!0);
        }, []),
        u = i.useCallback(() => {
            c(!1);
        }, []);
    return (0, l.jsx)("div", {
        className: eB.qN,
        children: (0, l.jsx)(Q.m, {
            asContainer: !0,
            text: eH.intl.string(eH.t["/IBYAq"]),
            position: "top",
            children: (0, l.jsxs)(ee.D, {
                className: eB.qN,
                onMouseOver: d,
                onMouseOut: u,
                onFocus: s,
                children: [
                    (0, l.jsx)(eg.Ay, {
                        ref: a,
                        onChange: r,
                        "aria-hidden": !0,
                        tabIndex: -1,
                        maxFileSizeBytes: eF.j,
                        onFileSizeError: () => (0, em.A)(eF.j),
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
var eY = n(664929),
    eX = n(742287);
let eQ = i.memo(function (e) {
    let { className: t, channel: n, section: i } = e,
        s = null != i ? (0, eY.Rg)(i) : null,
        r =
            null != s
                ? (0, l.jsx)(Q.m, {
                      __unsupportedReactNodeAsText: i?.name ?? "",
                      position: "top",
                      children: (0, l.jsx)(s, { channel: n, section: i, width: 24, height: 24 }),
                  })
                : null;
    return (0, l.jsx)("div", {
        className: a()(t, eX.i),
        children: (0, l.jsx)("div", { className: eX.K, children: r }),
    });
});
var e0 = n(588158),
    e1 = n(35277);
let e2 = (0, n(945810).mj)({
    kind: "user",
    name: "2026-02-announcement-composer",
    defaultConfig: { announcementComposer: !1 },
    variations: { 1: { announcementComposer: !0 } },
});
var e3 = n(319365),
    e4 = n(151271),
    e7 = n(407278),
    e8 = n(81400),
    e5 = n(353182),
    e6 = n(727875);
function e9(e) {
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
        className: a()(e6.Ew, o),
        children: [
            (0, l.jsxs)("div", {
                className: a()(e6.lt, s),
                children: [
                    null != t && ("string" == typeof t ? (0, l.jsx)("img", { src: t, alt: "", className: e6.q3 }) : t),
                    (0, l.jsxs)("div", {
                        className: e6._M,
                        children: [
                            (0, l.jsx)("div", { className: a()(e6.U_, r), children: n }),
                            null != i && (0, l.jsx)("div", { className: e6.mi, children: i }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)("div", { className: e6.uu, children: c }),
        ],
    });
}
var te = n(206835),
    tt = n(280450),
    tn = n(696451),
    tl = n(229527),
    ti = n(340837),
    ts = n(355097),
    ta = n(364634);
function tr(e) {
    let { guild: t } = e,
        n = (0, te.A)({ scrollPosition: ts._F.GUILD_TAG });
    return (0, l.jsx)("div", {
        children: (0, l.jsx)(e9, {
            bannerIcon: (0, l.jsx)(e5._, { size: "lg", color: "currentColor", className: ta.q3 }),
            bannerHeader: eH.intl.format(eH.t.GgMwjk, { guildName: t?.name ?? "" }),
            bannerSubtext: eH.intl.string(eH.t.ONjwD5),
            textStyles: ta.cI,
            headerStyles: ta.U_,
            children: (0, l.jsx)(z.$, {
                variant: "primary",
                size: "sm",
                text: eH.intl.string(eH.t.Viksoo),
                onClick: () => n(),
            }),
        }),
    });
}
function to(e) {
    let { guild: t } = e,
        { analyticsLocations: n } = (0, es.Ay)(ei.A.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [i, s] = (0, e8.j8)({ guildId: t?.id ?? ew.dJq, analyticsLocations: n }),
        a = s ? eH.intl.string(eH.t["9ph2v7"]) : eH.intl.string(eH.t.ldh9Cg),
        r = s ? eH.intl.string(eH.t["/PGQf0"]) : eH.intl.string(eH.t.WikgZ1);
    return (0, l.jsx)("div", {
        children: (0, l.jsx)(e9, {
            bannerIcon: (0, l.jsx)(e5._, { size: "lg", color: "currentColor", className: ta.q3 }),
            bannerHeader: eH.intl.format(eH.t.kcYdTq, { guildName: t?.name ?? "" }),
            bannerSubtext: a,
            textStyles: ta.cI,
            headerStyles: ta.U_,
            children: (0, l.jsx)(z.$, {
                variant: "primary",
                size: "sm",
                text: r,
                onClick: function () {
                    i();
                },
            }),
        }),
    });
}
function tc(e) {
    let { guild: t } = e,
        n = (0, h.bG)([tt.default, tn.Ay], () => {
            if (null == t) return new Set();
            let e = tt.default.getId();
            return (0, tl.wj)(tn.Ay.getMember(t.id, e));
        }, [t]);
    return n.has(ti.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || n.has(ti.D.AUTOMOD_QUARANTINED_BIO)
        ? (0, l.jsx)(to, { guild: t })
        : n.has(ti.D.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, l.jsx)(tr, { guild: t })
          : (0, l.jsx)(to, { guild: t });
}
var td = n(554146),
    tu = n(131607),
    th = n(153488),
    tm = n(776096),
    tg = n(498642),
    tA = n(71393),
    tp = n(232835),
    tf = n(576705),
    tC = n(927813),
    tx = n(935208),
    tE = n(342220);
let tS = 90 * tC.A.Millis.DAY,
    tI = 14 * tC.A.Millis.DAY;
var t_ = n(49999),
    tj = n(316031),
    ty = n(870136),
    tb = n(60270),
    tN = n(576470),
    tT = n(496431),
    tv = n(592713),
    tM = n(264388),
    tR = n(297264),
    tD = n(542290);
function tL(e) {
    let { onClose: t, guildName: n } = e;
    return (0, l.jsxs)("div", {
        className: tD.kL,
        children: [
            (0, l.jsx)("div", {
                className: tD.zc,
                children: (0, l.jsx)(tb.g, {
                    size: "custom",
                    color: "currentColor",
                    className: tD.Kk,
                    width: 20,
                    height: 20,
                }),
            }),
            (0, l.jsxs)("div", {
                className: tD.wx,
                children: [
                    (0, l.jsx)(tR.D, {
                        variant: "heading-md/semibold",
                        className: tD.TK,
                        children: eH.intl.string(eH.t.LIIyeE),
                    }),
                    (0, l.jsx)(W.E, {
                        variant: "text-sm/normal",
                        children: eH.intl.format(eH.t["4/6vQh"], { guildName: n }),
                    }),
                    (0, l.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: tD.x6,
                        children: (0, l.jsx)(z.$, {
                            variant: "primary",
                            text: eH.intl.string(eH.t.BddRzS),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
var tk = n(200700),
    tP = n(481161);
function tO(e) {
    let { guild: t, disabledUntil: n } = e,
        [s, a] = (0, tM.n)(t.id);
    return (
        !(function (e) {
            let { communicationDisabledUntil: t, userId: n, guildId: l } = e ?? {},
                s = (0, tT.A)(null != t ? Date.parse(t) : Date.now()).seconds,
                a = (0, i.useRef)(null);
            (0, i.useEffect)(
                () =>
                    null == e || null == l || null == n
                        ? void clearTimeout(a.current)
                        : (s <= 0 &&
                              null == a.current &&
                              (a.current = setTimeout(() => {
                                  tv.A.clearGuildMemberTimeout(l, n);
                              }, 1e3)),
                          () => {
                              null != a.current && (clearTimeout(a.current), (a.current = null));
                          }),
                [l, n, s, t, e],
            );
        })((0, h.bG)([tn.Ay, tt.default], () => tn.Ay.getMember(t.id, tt.default.getId()), [t.id])),
        (0, l.jsxs)("div", {
            children: [
                s ? (0, l.jsx)(tL, { onClose: () => a(t.id), guildName: t.name }) : null,
                (0, l.jsx)(e9, {
                    bannerIcon: (0, l.jsx)(tb.g, { size: "md", color: "currentColor", className: tP.q3 }),
                    bannerHeader: eH.intl.string(eH.t["9UoK6Y"]),
                    bannerSubtext: eH.intl.format(eH.t["4ZwD5G"], { link: tk.MO }),
                    textStyles: tP.cI,
                    headerStyles: tP.U_,
                    children: (0, l.jsx)(W.E, {
                        variant: "text-sm/semibold",
                        children: (0, l.jsx)(tN.A, { deadline: new Date(n), showUnits: !0, stopAtOneSec: !0 }),
                    }),
                }),
            ],
        })
    );
}
var tG = n(429933),
    tU = n(650336),
    tw = n(513609),
    tF = n(176781),
    tH = n(268378),
    tB = n(273692);
function tK() {
    return (0, l.jsx)(e9, {
        textStyles: tB.U,
        bannerIcon: (0, l.jsx)(tF.x, { size: "lg" }),
        bannerHeader: eH.intl.string(tH.default.unC18Z),
        bannerSubtext: eH.intl.string(tH.default["7mR8Bv"]),
    });
}
var tV = n(823099),
    tz = n(959698),
    tW = n(521427),
    t$ = n(751258),
    tJ = n(451909),
    tq = n(926262),
    tZ = n(10822),
    tY = n(537174),
    tX = n(973196),
    tQ = n(671210),
    t0 = n(308718);
function t1() {
    return (0, l.jsx)(e9, {
        containerStyles: t0.k,
        bannerHeader: eH.intl.string(tQ.default.e7ydX0),
        bannerSubtext: eH.intl.string(tQ.default.POfugg),
    });
}
var t2 = n(512599),
    t3 = n(3137),
    t4 = n(559908);
n(142703);
var t7 = n(765671),
    t8 = n(741961),
    t5 = n(459793),
    t6 = n(103640);
function t9(e, t) {
    return e === t || (e?.channelId === t?.channelId && e?.value === t?.value && e?.multiplier === t?.multiplier);
}
var ne = n(93219);
let nt = i.memo(function (e) {
        let { channelId: t, width: n } = e,
            s = (0, h.bG)([y.Ay], () => y.Ay.useReducedMotion),
            a = (0, h.bG)([t4.Ay], () => t4.Ay.getMostRecentMessageCombo(t), [t]),
            [r, o] = i.useState(!1);
        i.useEffect(() => {
            if (a?.displayed) return;
            o(!1),
                setImmediate(() => {
                    o((null != a ? (0, t6.RL)(a.combo) : 0) > 0);
                });
            let e = setTimeout(() => {
                o(!1), null != a && (0, t2.Nu)(a);
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
                className: ne.Gi,
                style: d,
                children: (0, l.jsx)(W.E, { className: ne.fX, variant: "text-sm/bold", children: (0, t6.RL)(a.combo) }),
            })
        );
    }),
    nn = i.memo(function (e) {
        let { value: t, multiplier: n } = e,
            { color: s, square: r, flair: o } = i.useMemo(() => (0, t6.HN)(n), [n]);
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(W.E, { className: ne.iR, variant: "text-sm/bold", children: t }),
                (0, l.jsxs)("div", {
                    className: ne._Z,
                    style: { color: s },
                    children: [
                        (0, l.jsx)(W.E, {
                            className: ne.On,
                            style: { color: s },
                            variant: "text-sm/bold",
                            children: eH.intl.format(eH.t["6bgVlq"], { multiplier: n }),
                        }),
                        r &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)("div", { className: a()(ne.QA, ne.kb), style: { backgroundColor: s } }),
                                    (0, l.jsx)("div", { className: a()(ne.QA, ne.pG), style: { backgroundColor: s } }),
                                ],
                            }),
                        o &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)("div", {
                                        className: a()(ne.ox, ne.kb),
                                        children: (0, l.jsx)(t5.A, { width: 24, height: 24 }),
                                    }),
                                    (0, l.jsx)("div", {
                                        className: a()(ne.ox, ne.pG),
                                        children: (0, l.jsx)(t5.A, { width: 24, height: 24 }),
                                    }),
                                ],
                            }),
                        1 === n &&
                            (0, l.jsx)(W.E, {
                                className: ne.uN,
                                variant: "text-sm/bold",
                                children: eH.intl.string(eH.t.b5Cpof),
                            }),
                    ],
                }),
            ],
        });
    }),
    nl = i.memo(function (e) {
        let t,
            { channelId: n } = e,
            s = (0, h.bG)([tt.default], () => tt.default.getId()),
            a = (0, h.bG)([t8.A], () => t8.A.isTyping(n, s), [n, s]),
            r = (0, h.bG)([t3.A], () => t3.A.isEnabled()),
            o = (0, h.bG)([t4.Ay], () => t4.Ay.isComboing(s, n), [n, s]),
            { ref: c, width: d = 0 } = (0, t7.Ay)(),
            [u, m] = i.useState(!1),
            g =
                ((t = (0, h.bG)([t3.A], () => !!t3.A.isEnabled() && t3.A.combosEnabled)),
                (0, h.bG)(
                    [t4.Ay, tt.default],
                    () => (t ? t4.Ay.getUserCombo(tt.default.getId(), n) : void 0),
                    [n, t],
                    t9,
                )),
            A = r && o && a;
        i.useEffect(() => {
            A && m(!0);
            let e = setTimeout(() => m(A), 1e3);
            return () => clearTimeout(e);
        }, [A]);
        let p = (0, K.z)({
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
        let { multiplier: x, value: E } = i.useMemo(
            () => ({ value: A ? f.value : C.current.value, multiplier: A ? f.multiplier : C.current.multiplier }),
            [A, f, C],
        );
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(nt, { channelId: n, width: d }),
                (0, l.jsx)(F.animated.div, {
                    ref: c,
                    className: ne.p_,
                    style: p,
                    children: (0, l.jsx)(nn, { value: E, multiplier: x }),
                }),
            ],
        });
    });
var ni = n(208343),
    ns = n(31408),
    na = n(810685),
    nr = n(806621);
let no = function (e, t) {
    let n = (0, nr.r)(t),
        l = (0, h.bG)([tp.A], () => tp.A.getMessages(t.id).length > 0, [t]);
    return null != e && e.hasFlag(ew.nhx.QUARANTINED) && n && !l;
};
var nc = n(831502);
let nd = function () {
    return (0, l.jsx)(e9, {
        bannerIcon: (0, l.jsx)(na.M, { alt: "", width: 80, height: 40 }),
        bannerHeader: eH.intl.string(eH.t.EouHwv),
        bannerSubtext: eH.intl.format(eH.t.PThBel, { appealLink: nc.q }),
    });
};
var nu = n(118517),
    nh = n(853145),
    nm = n(226698),
    ng = n(39470),
    nA = n(985632);
let np = function (e) {
    let { channelId: t } = e,
        n = i.useCallback(() => {
            nm.A.reopenModReport(t);
        }, [t]);
    return (0, l.jsx)(e9, {
        bannerHeader: (0, l.jsx)(W.E, {
            variant: "text-md/medium",
            color: "text-muted",
            children: eH.intl.string(ng.default["0eUUeF"]),
        }),
        headerStyles: nA.U,
        containerStyles: nA.c,
        children: (0, l.jsx)(z.$, {
            variant: "secondary",
            size: "sm",
            text: eH.intl.string(ng.default["6quCi9"]),
            onClick: n,
        }),
    });
};
var nf = n(631576),
    nC = n(252263),
    nx = n(67259),
    nE = n(691540),
    nS = n(857250),
    nI = n(97483),
    n_ = n(47167),
    nj = n(734057),
    ny = n(994500),
    nb = n(287809);
function nN(e) {
    let t = nj.A.getChannel(e),
        n = null != t ? (0, n_.m1)(t, nb.default, ny.A) : null,
        l = null == n ? eH.intl.string(eH.t.gi2swM) : eH.intl.formatToPlainString(eH.t.IFPJ6J, { channelName: n });
    (0, nE.P0)((0, nS.o)(l, nI.Ck.SUCCESS));
}
var nT = n(728321),
    nv = n(761640),
    nM = n(580745),
    nR = n(309010),
    nD = n(174459),
    nL = n(147036),
    nk = n(234320),
    nP = n(625494),
    nO = n(806150),
    nG = n(382287),
    nU = n(137577),
    nw = n(480870),
    nF = n(390756),
    nH = n(128783),
    nB = n(549400);
function nK() {
    return (0, l.jsxs)("div", {
        className: nB.kL,
        children: [
            (0, l.jsx)("div", { className: a()(nB.v9, nB.KJ) }),
            (0, l.jsx)("div", { className: a()(nB.v9, nB.rx) }),
        ],
    });
}
var nV = n(578434),
    nz = n(80683),
    nW = n(336590),
    n$ = n(92650),
    nJ = n(378570),
    nq = n(138298),
    nZ = n(260771);
function nY(e) {
    let { channel: t } = e,
        n = (0, nW.k)(),
        s = (0, h.bG)([nb.default], () => nb.default.getUser(t.getRecipientId())),
        a = i.useCallback(() => {
            (0, nE.P0)((0, nS.o)(eH.intl.string(eH.t["EDYbS+"]), nI.Ck.FAILURE));
        }, []),
        r = i.useCallback(() => {
            nq.A.closeChannelSidebar(nv.fe);
        }, []),
        o = i.useCallback(() => {
            nq.A.closeChannelSidebar(nv.fe), n && (0, nJ.iN)(t.id);
        }, [t.id, n]),
        {
            acceptMessageRequest: c,
            rejectMessageRequest: d,
            isAcceptLoading: u,
            isRejectLoading: m,
            isUserProfileLoading: g,
            isOptimisticAccepted: A,
            isOptimisticRejected: p,
        } = (0, n$.t)({ user: s, onAcceptSuccess: o, onRejectSuccess: r, onError: a }),
        f = u || m || g || A || p;
    return (0, l.jsxs)("div", {
        className: nZ.kL,
        children: [
            (0, l.jsx)(W.E, {
                className: nZ.VA,
                variant: "text-md/medium",
                color: "text-muted",
                children: eH.intl.string(eH.t.YQ0uUE),
            }),
            (0, l.jsxs)("div", {
                className: nZ.o1,
                children: [
                    (0, l.jsx)(z.$, {
                        variant: "secondary",
                        size: "sm",
                        text: eH.intl.string(eH.t.BVN4pL),
                        onClick: () => d(t.id),
                        disabled: f,
                        loading: m || p,
                    }),
                    (0, l.jsx)(z.$, {
                        variant: "primary",
                        size: "sm",
                        text: eH.intl.string(eH.t.Kz8Pwr),
                        onClick: () => c(t.id),
                        disabled: f,
                        loading: u || g || A,
                    }),
                ],
            }),
        ],
    });
}
var nX = n(381941),
    nQ = n(650583),
    n0 = n(999900);
function n1(e) {
    e.preventDefault();
}
let n2 = /^\+(?!\w+):?(?!:)(\w+)?:?$/;
function n3(e) {
    let { isSidebar: t, ...n } = e;
    return t ? (0, l.jsx)("section", { ...n, role: "complementary" }) : (0, l.jsx)("main", { ...n });
}
let n4 = i.forwardRef((e, t) => (0, l.jsx)(n7, { ...e, ref: t }));
n4.displayName = "ChannelTextAreaForm";
class n7 extends i.PureComponent {
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
        t.textValue.length < ew.uvi && l.length >= ew.uvi && nD.default.track(ew.HAw.MESSAGE_LENGTH_LIMIT_REACHED, {});
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
            case nQ.dh.DELETE:
            case nQ.dh.BACKSPACE:
                return void this.handleIncrementCombo("", 1);
            case nQ.dh.ARROW_UP:
                if (i || s) return;
                if ((e.preventDefault(), t))
                    eE.A.getUploadCount(l.id, eC.C.ChannelMessage) > 0
                        ? nP._.dispatchToLastSubscribed(ew.jej.FOCUS_ATTACHMENT_AREA)
                        : nP._.dispatchToLastSubscribed(ew.jej.FOCUS_MESSAGES, { atEnd: !0 });
                else {
                    let { channel: e } = this.props,
                        t = tp.A.getLastChatCommandMessage(e.id),
                        n = tp.A.getLastEditableMessage(e.id);
                    null != t && null != n
                        ? tx.default.compare(n.id, t.id) > 0
                            ? this.handleEditLastMessage(n)
                            : this.handleRecallLastCommand(t)
                        : null != t
                          ? this.handleRecallLastCommand(t)
                          : null != n && this.handleEditLastMessage(n);
                }
                return;
            case nQ.dh.ESCAPE:
                if (i || e.target !== e.currentTarget) return;
                if ((e.preventDefault(), t)) return void (0, j.Bm)();
                if (eE.A.getUploadCount(l.id, eC.C.ChannelMessage) > 0)
                    return void S.A.clearAll(l.id, eC.C.ChannelMessage);
        }
        n?.(e, s);
    };
    handleEditLastMessage(e) {
        let { channel: t } = this.props;
        x.A.startEditMessageRecord(t.id, e), b.Ay.trackWithMetadata(ew.HAw.MESSAGE_EDIT_UP_ARROW);
    }
    handleRecallLastCommand(e) {
        if (null == e.interactionData) return;
        let { channel: t } = this.props,
            { commandKey: n, interactionOptions: l } = (0, P.Ez)(e.interactionData),
            { command: i, application: s } = D.EW({ channel: t, type: "channel" }, n);
        if (null != i) {
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
                command: i,
                section: e,
                location: k.Oh.RECALL,
                initialValues: (0, R.getInitialValuesFromInteractionOptions)(i, l ?? []),
                commandOrigin: k.iw.CHAT,
            });
        }
    }
    handleIncrementCombo = (e, t) => {
        if (!this.props.poggermodeEnabled) return;
        let n = this.props.channel.id,
            l = tt.default.getId(),
            i = t4.Ay.getUserCombo(l, n),
            s = (i?.value ?? 0) + 1;
        (0, t2.oG)({ channelId: n, userId: l, value: null != e ? e.length : s, multiplier: t });
    };
    handleTextareaChange = (e, t, n) => {
        let {
            keyboardModeEnabled: l,
            chatInputType: i,
            channel: { id: s },
        } = this.props;
        if (i === U.oU.NORMAL && s !== nR.Ay.getChannelId()) return;
        C.A.changeDraft(s, t, eC.C.ChannelMessage);
        let a = "" !== t && n !== this.state.richValue,
            r = a && !n2.test(t) && !t.startsWith("/") && (!this.isFirstChange || t !== this.state.textValue);
        (this.isFirstChange = !1),
            r && this.state.textValue.length < t.length && this.handleIncrementCombo(),
            r ? E.A.startTyping(s) : "" === t && E.A.stopTyping(s),
            a && l && (0, j.Bm)(),
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
        let { guild: d, channel: h, pendingReply: m, chatInputType: g, threadsAlsoSendToChannel: A } = this.props,
            p = !1;
        if (null != i) {
            if (i.inputType === k.y$.BUILT_IN_INTEGRATION)
                return (
                    nP._.dispatch(ew.jej.SHAKE_APP, { duration: 200, intensity: 2 }),
                    Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })
                );
            let e = L.A.getCommandOrigin(h.id);
            if (null == e || e === k.iw.CHAT) {
                let { isAuthorized: e } = await (0, G.q)({
                    applicationId: i.applicationId,
                    channel: h,
                    commandIntegrationTypes: i.integration_types,
                });
                if (!e) return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
            } else if (e === k.iw.APPLICATION_LAUNCHER || e === k.iw.IMAGE_RECS_MENU || e === k.iw.IMAGE_RECS_SUBMENU) {
                let { location: t, sectionName: n } = (0, nF.bV)(i) ?? {},
                    l = e === k.iw.APPLICATION_LAUNCHER ? T.A.lastShownEntrypoint() : v.s4.TEXT,
                    { isAuthorized: s } = await (0, G.q)({
                        applicationId: i.applicationId,
                        channel: h,
                        commandIntegrationTypes: i.integration_types,
                        appLauncherContext: { location: t, sectionName: n, entrypoint: l },
                    });
                if (!s) return Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
                (0, nF.My)(i);
            }
            let n = await (0, O.A)({ command: i, optionValues: s ?? {}, context: { guild: d, channel: h } });
            if (i.inputType !== k.y$.BUILT_IN_TEXT) return Promise.resolve({ shouldClear: !0, shouldRefocus: !0 });
            null != n && ((t = null != n.content && "" !== n.content ? n.content : t), (p = !0 === n.tts));
        }
        return (0, nO.i)({
            openWarningPopout: (e) => this.setState({ contentWarningProps: e }),
            type: this.props.chatInputType,
            content: t,
            hasStickers: null != l && l.length > 0,
            hasAttachments: null != n && n.length > 0,
            channel: h,
        }).then((e) => {
            let { valid: s, failureReason: f } = e;
            if (!s)
                if (f === ew.X8x.SLOWMODE_COOLDOWN)
                    return (
                        nP._.dispatch(ew.jej.SHAKE_APP, { duration: 200, intensity: 2 }),
                        nP._.dispatch(ew.jej.EMPHASIZE_SLOWMODE_COOLDOWN),
                        { shouldClear: !1, shouldRefocus: !0 }
                    );
                else return { shouldClear: !1, shouldRefocus: !1 };
            let E = (0, t$.S)(t, { channel: h, isEdit: !1 });
            null != E && (null != E.content && (t = E.content), null != E.tts && (p = E.tts));
            let I = tJ.Ay.parse(h, t);
            (I.tts = I.tts || p), null != o && ((I.content = ""), (I.components = o));
            let _ = {
                ...x.A.getSendMessageOptions({
                    content: t,
                    channelId: h.id,
                    uploads: n,
                    stickers: l,
                    command: i,
                    isGif: a,
                    pendingReply: m,
                    alsoForwardToChannelId: A ? (h.parent_id ?? void 0) : void 0,
                    scheduledTimestamp: this.props.scheduledMessageDraft?.scheduledTimestamp,
                }),
                location: nX.Hx.CHAT_INPUT,
            };
            if (
                (null != c && (_.announcementSendOptions = c),
                null != r && (_.gifMetadata = r),
                null != o && (_.flags = (0, u.UI)(_.flags ?? 0, ew.pr7.IS_COMPONENTS_V2)),
                a)
            )
                return (
                    x.A.sendMessage(h.id, I, void 0, _).then(() => {
                        A && nN(h.parent_id ?? void 0);
                    }),
                    (0, nu.Jx)(h.id),
                    nC.B({ channelId: h.id, enabled: !1 }),
                    { shouldClear: !1, shouldRefocus: !0 }
                );
            function j() {
                "" !== t &&
                    "" === eC.A.getDraft(h.id, eC.C.ChannelMessage) &&
                    C.A.saveDraft(h.id, t, eC.C.ChannelMessage),
                    null != n &&
                        n.length > 0 &&
                        0 === eE.A.getUploadCount(h.id, eC.C.ChannelMessage) &&
                        S.A.setUploads({ channelId: h.id, uploads: n, draftType: eC.C.ChannelMessage });
            }
            if (null != n && n.length > 0) {
                let e = (0, nG.LJ)(n);
                if ((0, nG.fJ)(e, d?.id)) return (0, e_.V)(h, e), { shouldClear: !1, shouldRefocus: !1 };
                (_.eagerDispatch = !1),
                    (_.attachmentsToUpload = n),
                    (_.onAttachmentUploadError = (e, t, n) => {
                        (0, tV.k)({ file: e, guildId: h.getGuildId(), analyticsLocations: [], code: t, reason: n }) &&
                            j();
                    }),
                    S.A.clearAll(h.id, eC.C.ChannelMessage);
            }
            return (
                x.A.sendMessage(h.id, I, void 0, _)
                    .then(() => {
                        A && nN(h.parent_id ?? void 0);
                    })
                    .catch((e) => {
                        throw ((null != _.scheduledTimestamp || !1 === _.eagerDispatch) && j(), e);
                    }),
                this.setState((0, w.N3)()),
                (0, nu.Jx)(h.id),
                (0, nf.x5)(h.id, g.drafts.type),
                nC.B({ channelId: h.id, enabled: !1 }),
                { shouldClear: !0, shouldRefocus: !0 }
            );
        });
    };
    handleSetValue = (e) => {
        let t = this.editorRef?.getSlateEditor();
        null != t && (e1.b.select(t, []), t.insertText(e), this.editorRef?.focus());
    };
    renderAttachButton = (e, t) =>
        (0, l.jsx)(e0.A, {
            className: t,
            channel: this.props.channel,
            draftType: eC.C.ChannelMessage,
            editorTextContent: this.state.textValue,
            setValue: this.handleSetValue,
            canOnlyUseTextCommands: e,
            chatInputType: this.props.chatInputType,
        });
    renderApplicationCommandIcon = (e, t, n) =>
        (0, l.jsx)(eQ, { className: n, command: e, section: t, channel: this.props.channel });
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
                poggermodeEnabled: A,
                scheduledMessageDraft: p,
                announcementComposerEnabled: f,
            } = this.props,
            { contentWarningProps: C } = this.state,
            x =
                e.type === ew.rbe.GUILD_ANNOUNCEMENT && f
                    ? (0, l.jsx)(eW, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: n0.gM,
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
                          promptToUpload: e_.R,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                      })
                    : (0, l.jsx)(eO.Ay, {
                          ref: this.props.refInstance,
                          textValue: this.state.textValue,
                          richValue: this.state.richValue,
                          focused: t,
                          className: n0.gM,
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
                          promptToUpload: e_.R,
                          highlighted: a,
                          setEditorRef: (e) => (this.editorRef = e),
                          scheduledMessageDraft: p,
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
                    (0, l.jsx)(tq.A, { onClose: t, ...C })
                );
            },
            children: () =>
                A ? (0, l.jsx)(g.b, { isShaking: h > 0, intensity: h, className: n0.Xn, children: x }) : x,
        });
    }
}
class n8 extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let { channel: n } = e,
            { currentChannelId: l } = t;
        return n.id !== l
            ? { textAreaFocused: null != n && !c.Fr && tf.A.can(ew.xBc.SEND_MESSAGES, n), currentChannelId: n.id }
            : null;
    }
    containerDomRef = i.createRef();
    refToChannelTextAreaFormComponent = i.createRef();
    inputFormRef = i.createRef();
    state = { textAreaFocused: !1, textAreaHighlighted: !1, currentChannelId: this.props.channel.id };
    dispatchGroupRef = i.createRef();
    componentDidMount() {
        nP._.subscribe(ew.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
    }
    componentDidUpdate(e) {
        (this.props.isEditing !== e.isEditing || this.props.hasModalOpen !== e.hasModalOpen) &&
            (this.props.isEditing || this.props.hasModalOpen ? this.handleInputBlur() : this.handleInputFocus());
    }
    componentWillUnmount() {
        nP._.unsubscribe(ew.jej.FOCUS_CHANNEL_TEXT_AREA, this.handleRequestFocus);
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
                case nQ.dh.ARROW_LEFT:
                    n === U.oU.SIDEBAR &&
                        nP._.dispatch(ew.jej.FOCUS_CHANNEL_TEXT_AREA, { channelId: nR.Ay.getChannelId() });
                    return;
                case nQ.dh.ARROW_RIGHT:
                    n === U.oU.NORMAL &&
                        nP._.dispatch(ew.jej.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: nv.Ay.getCurrentSidebarChannelId(l.id),
                        });
            }
    };
    handleOpenExpressionPicker = (e) => {
        let { activeView: t } = e;
        (0, e4.bf)(t, this.props.chatInputType, this.props.channel.id);
    };
    handleOpenAppLauncher = (e) => {
        let { applicationId: t } = e;
        return N.R(v.s4.TEXT, this.props.chatInputType, { applicationId: t }, this.props.channel.id);
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
        return t.isMediaThread()
            ? (0, l.jsx)(tK, {})
            : this.props.restrictedPreview && t.type === ew.rbe.DM
              ? (0, l.jsx)(nY, { channel: t })
              : t.type === ew.rbe.DM && n
                ? (0, l.jsx)(nd, {})
                : t.isModeratorReportChannel() && t.isArchivedThread()
                  ? (0, l.jsx)(np, { channelId: t.id })
                  : null != s && (0, tj.n)(s) && null != i && !tf.A.can(ew.xBc.ADMINISTRATOR, i)
                    ? (0, l.jsx)(tO, { guild: i, disabledUntil: s })
                    : a
                      ? (0, l.jsx)(tc, { guild: i })
                      : this.props.isOverlayTextEntryDisabled
                        ? (0, l.jsx)(t1, {})
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
                poggermodeEnabled: x,
                isSelectedResourceChannel: E,
                showAutomodUserProfileChatBlocker: S,
                scheduledMessageDraft: I,
                messagesTypingGradient: j,
                showLinkedLobbyApplicationLoadingIndicator: y,
                announcementComposerEnabled: b,
            } = this.props,
            { textAreaFocused: N, textAreaHighlighted: T } = this.state,
            v = c === U.oU.SIDEBAR;
        e =
            v && t.type === ew.rbe.GUILD_VOICE
                ? eH.t.pnnyFZ
                : v && t.type === ew.rbe.GUILD_STAGE_VOICE
                  ? eH.t.YInSkq
                  : d.k.THREADS.has(t.type)
                    ? eH.t["OkzL+Q"]
                    : eH.t.UbNmGc;
        let M = (0, l.jsx)("div", { className: n0.li, children: (0, l.jsx)(nK, {}) }),
            R = (0, l.jsx)("div", {
                className: n0.li,
                children: (0, l.jsx)(nT.A, {
                    childRef: this.containerDomRef,
                    tutorialId: "writing-messages",
                    position: "left",
                    offsetX: 75,
                    children: (0, l.jsx)(n4, {
                        ref: this.refToChannelTextAreaFormComponent,
                        refInstance: this.containerDomRef,
                        focused: N,
                        highlighted: T,
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
                        poggermodeEnabled: x,
                        scheduledMessageDraft: I,
                        announcementComposerEnabled: b,
                    }),
                }),
            }),
            D = y ? M : R,
            L = (0, n_.m1)(t, nb.default, ny.A);
        return (0, l.jsx)(
            _.A,
            {
                page: (0, nL.DJ)(this.props.channel),
                children: (0, l.jsx)(tw.di, {
                    children: (0, l.jsx)(tU.Xq, {
                        children: (0, l.jsxs)(nk.Ah, {
                            ref: this.dispatchGroupRef,
                            children: [
                                (0, l.jsx)(nk.EG, { event: ew.jej.TEXTAREA_FOCUS, handler: this.handleInputFocus }),
                                (0, l.jsx)(nk.EG, { event: ew.jej.TEXTAREA_BLUR, handler: this.handleInputBlur }),
                                (0, l.jsx)(nk.EG, {
                                    event: ew.jej.OPEN_EXPRESSION_PICKER,
                                    handler: this.handleOpenExpressionPicker,
                                }),
                                (0, l.jsx)(nk.EG, {
                                    event: ew.jej.OPEN_APP_LAUNCHER,
                                    handler: this.handleOpenAppLauncher,
                                }),
                                (0, l.jsxs)(n3, {
                                    isSidebar: v,
                                    className: n0.q2,
                                    "aria-label": eH.intl.formatToPlainString(e, { channelName: L }),
                                    onMouseDown: this.handleChatInteract,
                                    onKeyDown: this.handleKeyDown,
                                    onFocus: this.handleChatInteract,
                                    style: this.props.guildOfficialMessageStyle,
                                    children: [
                                        (0, l.jsx)(nH.A, { channel: t, guild: n, narrow: v }),
                                        (0, l.jsxs)(A.F, {
                                            component: (0, l.jsx)(p.A, {
                                                children: (0, l.jsx)(A.H, {
                                                    children: eH.intl.format(eH.t.eTzKkx, { channelName: L }),
                                                }),
                                            }),
                                            children: [
                                                (0, l.jsxs)(e3.h1, {
                                                    children: [
                                                        (0, l.jsx)(tZ.A, {
                                                            channel: t,
                                                            forceCozy: E,
                                                            filterAfterTimestamp: g,
                                                            showingQuarantineBanner: m,
                                                            typingGradient: j,
                                                            hideSummaries: c === U.oU.OVERLAY,
                                                        }),
                                                        E
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
                                                                  onSubmit: n1,
                                                                  className: a()(n0.Zd, { [n0.Mf]: !y }),
                                                                  children: [
                                                                      x && (0, l.jsx)(nl, { channelId: t.id }),
                                                                      t.isPrivate()
                                                                          ? (0, l.jsx)(nV.A, {
                                                                                channel: t,
                                                                                children: D,
                                                                            })
                                                                          : (0, l.jsx)(nz.A, {
                                                                                channel: t,
                                                                                children: D,
                                                                            }),
                                                                      (0, l.jsx)(n5, { channel: t }),
                                                                  ],
                                                              })),
                                                    ],
                                                }),
                                                (0, l.jsx)(tw.lr, {}),
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
function n5(e) {
    let { channel: t } = e,
        { isFocused: n } = (0, e3.D7)();
    return n ? null : (0, l.jsx)(I.Ay, { channel: t, isInTextChannel: !0 });
}
let n6 = i.memo(function (e) {
    var t, n;
    let s,
        a,
        { channel: r, guild: o, chatInputType: c, filterAfterTimestamp: d } = e,
        { placeholder: u, accessibilityLabel: m } = (0, nw.A)({ channel: r }),
        g = (0, tX.A)(),
        A = no(nb.default.getCurrentUser(), r),
        [p] = (0, ty.c)(o?.id),
        C = (0, e8.uZ)(o?.id),
        E = (0, h.bG)([nb.default], () => nb.default.getCurrentUser()),
        S = (0, h.bG)([tn.Ay], () => null != E && (tn.Ay.getMember(o?.id ?? ew.dJq, E?.id)?.isPending ?? !1)),
        _ = (0, h.bG)([t3.A], () => t3.A.isEnabled()),
        j =
            ((t = r.id),
            (s = (0, ni.A)(ns.uD.CHAT_INPUT)),
            (a = (0, h.bG)([t3.A], () => t3.A.isEnabled({ shakeLocation: ns.uD.CHAT_INPUT }))),
            (0, h.bG)([t8.A, t4.Ay, tt.default], () =>
                a && t8.A.isTyping(t, tt.default.getId())
                    ? t4.Ay.getUserComboShakeIntensity(tt.default.getId(), t, s)
                    : 0,
            )),
        b = (0, tG.A)(r.id),
        N = ((n = r.id), (0, h.bG)([eC.A], () => eC.A.getScheduledMessage(n))),
        T = (0, h.bG)([nx.A], () => nx.A.getAlsoSendToChannel(r.id)),
        v = (0, h.bG)([t4.Ay, tt.default], () => t4.Ay.getUserCombo(tt.default.getId(), r.id)),
        M = (0, I.rj)(r),
        R = (0, I.aW)(r),
        D = (0, e7.L)(r.id),
        L = M.length > 0 || r.rateLimitPerUser > 0 || null != v || null != R || D,
        { showLinkedLobbyApplicationLoadingIndicator: k } = (0, nU.A)(r.linkedLobby),
        P = e2.useConfig({ location: "ChannelChat" }).announcementComposer,
        O = (0, tY.A)((0, tW.GP)(o, "ChannelChat") ? (o?.officialMessageColor ?? nX.aj) : null);
    !(function (e) {
        let [t, n] = (function (e) {
                let t = (0, h.bG)([tp.A], () => tp.A.isReady(e.id), [e.id]),
                    n = [],
                    l = (0, h.bG)([tA.A], () => tA.A.getGuild(e.guild_id)),
                    s = (function (e) {
                        let t = (0, h.bG)([tA.A], () => tA.A.getGuild(e.guild_id)),
                            n = (0, h.bG)([tg.A], () => tg.A.getMemberCount(t?.id) ?? 0),
                            l = (0, h.bG)([tp.A], () => tp.A.getLastMessage(e.id)),
                            s = (0, h.bG)([tf.A], () => null != t && tf.A.can(ew.xBc.ADMINISTRATOR, t)),
                            a = (0, h.bG)([tm.A], () => tm.A.getGuildAffinity(e.guild_id)?.score),
                            r = (0, h.bG)([th.A], () => th.A.hasConsented(ew.YAq.PERSONALIZATION)),
                            o = (0, tE.A)(),
                            [c] = (0, tu.Wl)(td.M.FIRST_BOOSTER_UPSELL_OVERSEER, {
                                cooldownDurationMs: 0,
                                numTimesToRecur: 3,
                            }),
                            d = c === td.M.FIRST_BOOSTER_UPSELL_OVERSEER;
                        return i.useMemo(
                            () =>
                                !(
                                    !d ||
                                    !r ||
                                    null == a ||
                                    a <= 17.06 ||
                                    e.type !== ew.rbe.GUILD_TEXT ||
                                    null == t ||
                                    tx.default.age(t.id) < tS ||
                                    null == t.premiumSubscriberCount ||
                                    0 !== t.premiumSubscriberCount ||
                                    n < 10 ||
                                    l?.id == null ||
                                    tx.default.age(l.id) > tI
                                ) &&
                                (s || o),
                            [d, r, e.type, t, n, a, l?.id, s, o],
                        );
                    })(e);
                t && s && n.push(td.M.FIRST_BOOSTER_UPSELL);
                let [a, r] = (0, tu.ww)(n, l?.id ?? ew.eGj);
                return [a, r];
            })(e),
            l = i.useRef(null);
        i.useEffect(() => {
            null == t ||
                ((null == l.current || l.current.visibleContent !== t || l.current.channelId !== e.id) &&
                    (t === td.M.FIRST_BOOSTER_UPSELL &&
                        x.A.sendGuildBoostUpsellSystemMessage(e.id, { guildBoostUpsellType: en.Mk.FIRST_BOOSTER }),
                    (l.current = { visibleContent: t, channelId: e.id }),
                    n(t_.i.AUTO_DISMISS)));
        }, [t, e.id, n]);
    })(r);
    let G = (0, tz.U)();
    return (0, l.jsx)(n8, {
        channel: r,
        restrictedPreview: G,
        guildOfficialMessageStyle: O,
        isEditing: null != (0, h.bG)([nM.A], () => nM.A.getEditingMessageId(r.id)),
        hasModalOpen: (0, f.useModalsStore)(f.hasAnyModalOpenSelector),
        guild: o,
        keyboardModeEnabled: (0, h.bG)([y.Ay], () => y.Ay.keyboardModeEnabled),
        pendingReply: (0, h.bG)([nh.A], () => nh.A.getPendingReply(r.id)),
        threadsAlsoSendToChannel: T,
        chatInputType: c,
        isOverlayTextEntryDisabled: g,
        placeholder: u,
        accessibilityLabel: m,
        filterAfterTimestamp: d,
        showQuarantinedUserBanner: A,
        communicationDisabledUntil: p,
        shakeIntensity: j,
        poggermodeEnabled: _,
        isSelectedResourceChannel: b,
        showAutomodUserProfileChatBlocker: C && !S,
        scheduledMessageDraft: N,
        messagesTypingGradient: L,
        showLinkedLobbyApplicationLoadingIndicator: k,
        announcementComposerEnabled: P,
    });
});
