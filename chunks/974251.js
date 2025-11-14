n.d(t, { Z: () => W }), n(388685), n(415506);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(704215),
    c = n(481060),
    u = n(53281),
    d = n(110924),
    p = n(595519),
    h = n(39952),
    f = n(533379),
    m = n(924557),
    g = n(435064),
    b = n(341569),
    y = n(712114),
    C = n(680056),
    v = n(266454),
    _ = n(536442),
    x = n(728285),
    j = n(79390),
    O = n(216789),
    E = n(665906),
    S = n(695346),
    P = n(433355),
    I = n(819640),
    Z = n(375954),
    T = n(496675),
    N = n(885110),
    A = n(585483),
    w = n(358085),
    M = n(127654),
    R = n(316595),
    L = n(443603),
    k = n(193910),
    D = n(951211),
    U = n(981631),
    B = n(356659),
    H = n(921944),
    F = n(388032),
    V = n(90274);
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
function z(e, t) {
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
let W = r.memo(function (e) {
    var t, l;
    let {
            className: W,
            channel: q,
            draftType: K,
            editorTextContent: Y,
            setValue: X,
            canOnlyUseTextCommands: J,
            chatInputType: Q,
        } = e,
        $ = (0, x.bp)(),
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
        ec = (0, o.e7)([_.qc], () => _.qc.hasHotspot(_.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
        eu = (0, c.s9z)((e) => (0, c.DEQ)(e, B.Qr)),
        ed = (0, o.e7)([I.Z], () => I.Z.hasLayers()),
        ep = (0, o.e7)([g.Z], () => g.Z.hasClips()),
        [eh, ef] = r.useState(null),
        em = (0, m.w9)() && (ei || ep),
        eg = q.isPrivate(),
        eb = (0, o.e7)([T.Z], () => eg || (T.Z.can(U.Plq.ATTACH_FILES, q) && T.Z.can(U.Plq.SEND_MESSAGES, q))),
        ey = (0, d.Z)(er);
    (null == ey ? void 0 : ey.newClipIds.length) !== (null == er ? void 0 : er.newClipIds.length) &&
        (null != (t = null == er ? void 0 : er.newClipIds.length) ? t : 0) > 0 &&
        null == eh &&
        ec &&
        ea &&
        !eu &&
        !eo &&
        !ed &&
        ef("recentClips");
    let eC = (0, o.e7)([Z.Z], () => Z.Z.hasCurrentUserSentMessageSinceAppStart());
    function ev() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e("61342"), n.e("69311")]).then(n.bind(n, 542055));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        z(G({}, t), {
                            channelId: q.id,
                            onClipClick: (e) => es({ clips: [e] }),
                        }),
                    );
            },
            { modalKey: B.Qr },
        ),
            ef(null);
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
    let e_ = (0, E.NE)(q),
        ex = (0, E.Xu)(q),
        ej = !S.dN.useSetting() && !(0, w.isAndroidWeb)() && null != window.ResizeObserver,
        eO = (0, f.R)({
            channel: q,
            chatInputType: Q,
        }),
        eE = (0, j.UI)(null != q ? q : void 0),
        eS = (0, p.qB)(),
        eP = (0, O.Us)({ location: "ChannelAttachButton" }),
        eI = (0, h.o)(),
        eZ = null != (l = null == el ? void 0 : el.length) ? l : 0,
        eT = (0, D.Z)({
            canAttachFiles: eb,
            canStartThreads: e_ || ex,
            useSlate: ej,
            hasClips: em,
            canUseApplicationCommands: !J,
            channel: q,
            activities: en,
            newClipsCount: eZ,
            canPostPolls: eE,
            canLaunchActivities: eS,
            appContext: $,
            canSendScheduledMessages: eP,
            canSummarizeThreads: eI,
            showAppLauncher: eO,
        });
    if (0 === eT.length) return null;
    let eN = (0, i.jsx)(c.svS, {
            size: "refresh_sm",
            color: "currentColor",
            colorClass: V.attachButtonPlus,
        }),
        eA = (0, i.jsx)(c.yRy, {
            targetElementRef: et,
            shouldShow: null != eh,
            animation: c.yRy.Animation.NONE,
            align: "recentClips" === eh ? "center" : "left",
            position: "top",
            positionKey: null != eh ? eh : "null",
            onRequestOpen: () => {
                eC && (0, v.Q3)(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: H.L.TAKE_ACTION }),
                    ef("attachMenu");
            },
            onRequestClose: () => {
                (0, c.$sL)() ||
                    (eC && (0, v.Q3)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: H.L.TAKE_ACTION }), ef(null));
            },
            renderPopout: (e) => {
                switch (eh) {
                    case "recentClips":
                        return (0, i.jsx)(
                            y.Z,
                            z(G({}, e), {
                                onOpenClips: ev,
                                lastClipsSession: er,
                            }),
                        );
                    case "attachMenu":
                        return (0, i.jsx)(
                            k.Z,
                            z(G({}, e), {
                                onClose: () => ef(null),
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
                    L.Z,
                    z(
                        G(
                            {
                                ref: et,
                                className: a()(V.attachButton, W),
                                childClassName: V.attachButtonInner,
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
                className: V.uploadInput,
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
                className: V.attachWrapper,
                children: (0, i.jsx)(R.Z, {
                    channel: q,
                    isOmniMenuOpen: "attachMenu" === eh,
                    openOmniMenu: () => ef("attachMenu"),
                    enabled: eS,
                    animationContainerClassName: V.buttonAnimation,
                    glowClassName: V.buttonAnimationGlow,
                    trinketsClassName: V.buttonAnimationTrinkets,
                    children: eA,
                }),
            }),
        ],
    });
});
