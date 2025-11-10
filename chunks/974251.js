n.d(t, { Z: () => z }), n(388685), n(415506);
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
    b = n(712114),
    y = n(680056),
    C = n(266454),
    v = n(536442),
    _ = n(728285),
    x = n(79390),
    j = n(216789),
    O = n(665906),
    E = n(695346),
    S = n(433355),
    P = n(819640),
    I = n(375954),
    Z = n(496675),
    T = n(885110),
    N = n(585483),
    A = n(358085),
    w = n(127654),
    M = n(316595),
    R = n(443603),
    L = n(193910),
    D = n(951211),
    k = n(981631),
    U = n(356659),
    B = n(921944),
    H = n(388032),
    V = n(90274);
function F(e) {
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
function G(e, t) {
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
            channel: W,
            draftType: q,
            editorTextContent: K,
            setValue: Y,
            canOnlyUseTextCommands: X,
            chatInputType: J,
        } = e,
        Q = (0, _.bp)(),
        $ = r.useRef(null),
        ee = r.useRef(null),
        et = (0, o.e7)([T.Z], () => T.Z.getActivities()),
        en = (0, o.e7)([g.Z], () => g.Z.getSettings().clipsEnabled),
        ei = (0, o.e7)([g.Z], () => g.Z.getLastClipsSession()),
        er = (0, o.Wu)([g.Z], () => g.Z.getNewClipIds()),
        el = (0, o.e7)([S.ZP], () => null == S.ZP.getCurrentSidebarChannelId(W.id)),
        { showClipsHeaderEntrypoint: ea } = m.NV.useExperiment(
            { location: "ChannelAttachButton" },
            { autoTrackExposure: !1 },
        ),
        { onShareClick: eo } = (0, y.Z)(W.id),
        es = (0, o.e7)([v.qc], () => v.qc.hasHotspot(v.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
        ec = (0, c.s9z)((e) => (0, c.DEQ)(e, U.Qr)),
        eu = (0, o.e7)([P.Z], () => P.Z.hasLayers()),
        ed = (0, o.e7)([g.Z], () => g.Z.hasClips()),
        [ep, eh] = r.useState(null),
        ef = (0, m.Go)() && (en || ed),
        em = W.isPrivate(),
        eg = (0, o.e7)([Z.Z], () => em || (Z.Z.can(k.Plq.ATTACH_FILES, W) && Z.Z.can(k.Plq.SEND_MESSAGES, W))),
        eb = (0, d.Z)(ei);
    (null == eb ? void 0 : eb.newClipIds.length) !== (null == ei ? void 0 : ei.newClipIds.length) &&
        (null != (t = null == ei ? void 0 : ei.newClipIds.length) ? t : 0) > 0 &&
        null == ep &&
        es &&
        el &&
        !ec &&
        !ea &&
        !eu &&
        eh("recentClips");
    let ey = (0, o.e7)([I.Z], () => I.Z.hasCurrentUserSentMessageSinceAppStart());
    function eC() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e("61342"), n.e("69311")]).then(n.bind(n, 542055));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        G(F({}, t), {
                            channelId: W.id,
                            onClipClick: (e) => eo({ clips: [e] }),
                        }),
                    );
            },
            { modalKey: U.Qr },
        ),
            eh(null);
    }
    r.useEffect(() => {
        let e = () => {
            var e;
            return null == (e = $.current) ? void 0 : e.activateUploadDialogue();
        };
        return (
            N.S.subscribe(k.CkL.UPLOAD_FILE, e),
            () => {
                N.S.unsubscribe(k.CkL.UPLOAD_FILE, e);
            }
        );
    });
    let ev = (0, O.NE)(W),
        e_ = (0, O.Xu)(W),
        ex = !E.dN.useSetting() && !(0, A.isAndroidWeb)() && null != window.ResizeObserver,
        ej = (0, f.R)({
            channel: W,
            chatInputType: J,
        }),
        eO = (0, x.UI)(null != W ? W : void 0),
        eE = (0, p.qB)(),
        eS = (0, j.Us)({ location: "ChannelAttachButton" }),
        eP = (0, h.o)(),
        eI = null != (l = null == er ? void 0 : er.length) ? l : 0,
        eZ = (0, D.Z)({
            canAttachFiles: eg,
            canStartThreads: ev || e_,
            useSlate: ex,
            hasClips: ef,
            canUseApplicationCommands: !X,
            channel: W,
            activities: et,
            newClipsCount: eI,
            canPostPolls: eO,
            canLaunchActivities: eE,
            appContext: Q,
            canSendScheduledMessages: eS,
            canSummarizeThreads: eP,
            showAppLauncher: ej,
        });
    if (0 === eZ.length) return null;
    let eT = (0, i.jsx)(c.svS, {
            size: "refresh_sm",
            color: "currentColor",
            colorClass: V.attachButtonPlus,
        }),
        eN = (0, i.jsx)(c.yRy, {
            targetElementRef: ee,
            shouldShow: null != ep,
            animation: c.yRy.Animation.NONE,
            align: "recentClips" === ep ? "center" : "left",
            position: "top",
            positionKey: null != ep ? ep : "null",
            onRequestOpen: () => {
                ey && (0, C.Q3)(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: B.L.TAKE_ACTION }),
                    eh("attachMenu");
            },
            onRequestClose: () => {
                (0, c.$sL)() ||
                    (ey && (0, C.Q3)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: B.L.TAKE_ACTION }), eh(null));
            },
            renderPopout: (e) => {
                switch (ep) {
                    case "recentClips":
                        return (0, i.jsx)(
                            b.Z,
                            G(F({}, e), {
                                onOpenClips: eC,
                                lastClipsSession: ei,
                            }),
                        );
                    case "attachMenu":
                        return (0, i.jsx)(
                            L.Z,
                            G(F({}, e), {
                                onClose: () => eh(null),
                                options: eZ,
                                channel: W,
                                onFileUpload: () => {
                                    var e;
                                    return null == (e = $.current) ? void 0 : e.activateUploadDialogue();
                                },
                                draftType: q,
                                editorTextContent: K,
                                setValue: Y,
                                openClips: eC,
                                chatInputType: J,
                            }),
                        );
                    default:
                        throw Error("Invalid popout type provided");
                }
            },
            children: (e) =>
                (0, i.jsx)(
                    R.Z,
                    G(
                        F(
                            {
                                ref: ee,
                                className: a()(V.attachButton, z),
                                childClassName: V.attachButtonInner,
                                isActive: !1,
                                "aria-label": H.intl.string(H.t.d56gCa),
                                onDoubleClick: eg
                                    ? () => {
                                          var e;
                                          return null == (e = $.current) ? void 0 : e.activateUploadDialogue();
                                      }
                                    : void 0,
                                "aria-haspopup": "menu",
                            },
                            e,
                        ),
                        { children: eT },
                    ),
                ),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: V.uploadInput,
                children: (0, i.jsx)(u.Z, {
                    ref: $,
                    onChange: (e) => {
                        var t, n, i;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, w.G)(W, [])
                                : (0, w.d)(t, W, q, {
                                      requireConfirm: !0,
                                      showLargeMessageDialog: i,
                                      origin: "file_picker",
                                  }),
                            N.S.dispatchToLastSubscribed(k.CkL.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: W.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)("div", {
                className: V.attachWrapper,
                children: (0, i.jsx)(M.Z, {
                    channel: W,
                    isOmniMenuOpen: "attachMenu" === ep,
                    openOmniMenu: () => eh("attachMenu"),
                    enabled: eE,
                    animationContainerClassName: V.buttonAnimation,
                    glowClassName: V.buttonAnimationGlow,
                    trinketsClassName: V.buttonAnimationTrinkets,
                    children: eN,
                }),
            }),
        ],
    });
});
