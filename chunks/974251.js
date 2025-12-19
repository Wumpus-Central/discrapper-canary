n.d(t, { Z: () => z }), n(388685), n(415506);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(704215),
    c = n(481060),
    u = n(53281),
    d = n(110924),
    p = n(595519),
    f = n(39952),
    h = n(533379),
    m = n(924557),
    g = n(435064),
    b = n(341569),
    y = n(712114),
    C = n(680056),
    v = n(266454),
    x = n(536442),
    O = n(728285),
    E = n(79390),
    j = n(216789),
    S = n(665906),
    _ = n(695346),
    P = n(433355),
    I = n(819640),
    Z = n(375954),
    T = n(496675),
    N = n(885110),
    A = n(585483),
    w = n(358085),
    M = n(127654),
    R = n(316595),
    D = n(443603),
    k = n(193910),
    L = n(951211),
    U = n(981631),
    V = n(356659),
    H = n(921944),
    F = n(388032),
    B = n(815308);
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let z = r.memo(function (e) {
    var t, l;
    let {
            className: z,
            channel: q,
            draftType: K,
            editorTextContent: Y,
            setValue: X,
            canOnlyUseTextCommands: J,
            chatInputType: Q,
        } = e,
        $ = (0, O.bp)(),
        ee = r.useRef(null),
        et = r.useRef(null),
        en = (0, o.e7)([N.Z], () => N.Z.getActivities()),
        ei = (0, b.z8)(),
        er = (0, o.e7)([g.Z], () => g.Z.getLastClipsSession()),
        el = (0, o.Wu)([g.Z], () => g.Z.getNewClipIds()),
        ea = (0, o.e7)([P.ZP], () => null == P.ZP.getCurrentSidebarChannelId(q.id)),
        { showClipsHeaderEntrypoint: eo } = m.NV.useExperiment(
            { location: "ChannelAttachButton" },
            { autoTrackExposure: !1 },
        ),
        { onShareClick: es } = (0, C.Z)(q.id),
        ec = (0, o.e7)([x.qc], () => x.qc.hasHotspot(x.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
        eu = (0, c.s9z)((e) => (0, c.DEQ)(e, V.Qr)),
        ed = (0, o.e7)([I.Z], () => I.Z.hasLayers()),
        ep = (0, o.e7)([g.Z], () => g.Z.hasClips()),
        [ef, eh] = r.useState(null),
        em = (0, m.w9)() && (ei || ep),
        eg = q.isPrivate(),
        eb = (0, o.e7)([T.Z], () => eg || (T.Z.can(U.Plq.ATTACH_FILES, q) && T.Z.can(U.Plq.SEND_MESSAGES, q))),
        ey = (0, d.Z)(er);
    (null == ey ? void 0 : ey.newClipIds.length) !== (null == er ? void 0 : er.newClipIds.length) &&
        (null != (t = null == er ? void 0 : er.newClipIds.length) ? t : 0) > 0 &&
        null == ef &&
        ec &&
        ea &&
        !eu &&
        !eo &&
        !ed &&
        eh("recentClips");
    let eC = (0, o.e7)([Z.Z], () => Z.Z.hasCurrentUserSentMessageSinceAppStart());
    function ev() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e("61342"), n.e("3370")]).then(n.bind(n, 542055));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        W(G({}, t), {
                            channelId: q.id,
                            onClipClick: (e) => es({ clips: [e] }),
                        }),
                    );
            },
            { modalKey: V.Qr },
        ),
            eh(null);
    }
    r.useEffect(() => {
        let e = (e) => {
            let { channelId: t } = e;
            if (t === q.id) {
                var n;
                null == (n = ee.current) || n.activateUploadDialogue();
            }
        };
        return (
            A.S.subscribe(U.CkL.UPLOAD_FILE, e),
            () => {
                A.S.unsubscribe(U.CkL.UPLOAD_FILE, e);
            }
        );
    });
    let ex = (0, S.NE)(q),
        eO = (0, S.Xu)(q),
        eE = !_.dN.useSetting() && !(0, w.isAndroidWeb)() && null != window.ResizeObserver,
        ej = (0, h.R)({
            channel: q,
            chatInputType: Q,
        }),
        eS = (0, E.UI)(null != q ? q : void 0),
        e_ = (0, p.qB)(),
        eP = (0, j.Us)({ location: "ChannelAttachButton" }),
        eI = (0, f.o)(),
        eZ = null != (l = null == el ? void 0 : el.length) ? l : 0,
        eT = (0, L.Z)({
            canAttachFiles: eb,
            canStartThreads: ex || eO,
            useSlate: eE,
            hasClips: em,
            canUseApplicationCommands: !J,
            channel: q,
            activities: en,
            newClipsCount: eZ,
            canPostPolls: eS,
            canLaunchActivities: e_,
            appContext: $,
            canSendScheduledMessages: eP,
            canSummarizeThreads: eI,
            showAppLauncher: ej,
        });
    if (0 === eT.length) return null;
    let eN = (0, i.jsx)(c.svS, {
            size: "refresh_sm",
            color: "currentColor",
            colorClass: B.attachButtonPlus,
        }),
        eA = (0, i.jsx)(c.yRy, {
            targetElementRef: et,
            shouldShow: null != ef,
            animation: c.yRy.Animation.NONE,
            align: "recentClips" === ef ? "center" : "left",
            position: "top",
            positionKey: null != ef ? ef : "null",
            onRequestOpen: () => {
                eC && (0, v.Q3)(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: H.L.TAKE_ACTION }),
                    eh("attachMenu");
            },
            onRequestClose: () => {
                (0, c.$sL)() ||
                    (eC && (0, v.Q3)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: H.L.TAKE_ACTION }), eh(null));
            },
            renderPopout: (e) => {
                switch (ef) {
                    case "recentClips":
                        return (0, i.jsx)(
                            y.Z,
                            W(G({}, e), {
                                onOpenClips: ev,
                                lastClipsSession: er,
                            }),
                        );
                    case "attachMenu":
                        return (0, i.jsx)(
                            k.Z,
                            W(G({}, e), {
                                onClose: () => eh(null),
                                options: eT,
                                channel: q,
                                onFileUpload: () => {
                                    var e;
                                    return null == (e = ee.current) ? void 0 : e.activateUploadDialogue();
                                },
                                draftType: K,
                                editorTextContent: Y,
                                setValue: X,
                                openClips: ev,
                                chatInputType: Q,
                            }),
                        );
                    default:
                        throw Error("Invalid popout type provided");
                }
            },
            children: (e) =>
                (0, i.jsx)(
                    D.Z,
                    W(
                        G(
                            {
                                ref: et,
                                className: a()(B.attachButton, z),
                                childClassName: B.attachButtonInner,
                                isActive: !1,
                                "aria-label": F.intl.string(F.t.d56gCa),
                                onDoubleClick: eb
                                    ? () => {
                                          var e;
                                          return null == (e = ee.current) ? void 0 : e.activateUploadDialogue();
                                      }
                                    : void 0,
                                "aria-haspopup": "menu",
                            },
                            e,
                        ),
                        { children: eN },
                    ),
                ),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: B.uploadInput,
                children: (0, i.jsx)(u.Z, {
                    ref: ee,
                    onChange: (e) => {
                        var t, n, i;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, M.G)(q, [])
                                : (0, M.d)(t, q, K, {
                                      requireConfirm: !0,
                                      showLargeMessageDialog: i,
                                      origin: "file_picker",
                                  }),
                            A.S.dispatchToLastSubscribed(U.CkL.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: q.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)("div", {
                className: B.attachWrapper,
                children: (0, i.jsx)(R.Z, {
                    channel: q,
                    isOmniMenuOpen: "attachMenu" === ef,
                    openOmniMenu: () => eh("attachMenu"),
                    enabled: e_,
                    animationContainerClassName: B.buttonAnimation,
                    glowClassName: B.buttonAnimationGlow,
                    trinketsClassName: B.buttonAnimationTrinkets,
                    children: eA,
                }),
            }),
        ],
    });
});
