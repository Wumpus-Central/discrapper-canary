n.d(t, { Z: () => G }), n(388685), n(415506);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(704215),
    c = n(481060),
    u = n(53281),
    d = n(110924),
    p = n(595519),
    f = n(466721),
    h = n(924557),
    m = n(435064),
    g = n(712114),
    b = n(680056),
    _ = n(266454),
    y = n(536442),
    C = n(728285),
    v = n(79390),
    O = n(216789),
    x = n(665906),
    E = n(695346),
    j = n(433355),
    S = n(819640),
    P = n(375954),
    I = n(496675),
    Z = n(885110),
    T = n(585483),
    N = n(358085),
    A = n(127654),
    w = n(316595),
    M = n(443603),
    R = n(193910),
    D = n(951211),
    L = n(981631),
    k = n(356659),
    U = n(921944),
    B = n(388032),
    F = n(90274);
function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let G = i.memo(function (e) {
    var t, l;
    let { className: G, channel: W, draftType: z, editorTextContent: q, setValue: Y, canOnlyUseTextCommands: K } = e,
        X = (0, C.bp)(),
        J = i.useRef(null),
        Q = i.useRef(null),
        $ = (0, o.e7)([Z.Z], () => Z.Z.getActivities()),
        ee = (0, o.e7)([m.Z], () => m.Z.getSettings().clipsEnabled),
        et = (0, o.e7)([m.Z], () => m.Z.getLastClipsSession()),
        en = (0, o.Wu)([m.Z], () => m.Z.getNewClipIds()),
        er = (0, o.e7)([j.ZP], () => null == j.ZP.getCurrentSidebarChannelId(W.id)),
        { showClipsHeaderEntrypoint: ei } = h.NV.useExperiment(
            { location: "ChannelAttachButton" },
            { autoTrackExposure: !1 },
        ),
        { onShareClick: el } = (0, b.Z)(W.id),
        ea = (0, o.e7)([y.qc], () => y.qc.hasHotspot(y.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
        eo = (0, c.s9z)((e) => (0, c.DEQ)(e, k.Qr)),
        es = (0, o.e7)([S.Z], () => S.Z.hasLayers()),
        ec = (0, o.e7)([m.Z], () => m.Z.hasClips()),
        [eu, ed] = i.useState(null),
        ep = (0, h.Go)() && (ee || ec),
        ef = W.isPrivate(),
        eh = (0, o.e7)([I.Z], () => ef || (I.Z.can(L.Plq.ATTACH_FILES, W) && I.Z.can(L.Plq.SEND_MESSAGES, W))),
        em = (0, d.Z)(et);
    (null == em ? void 0 : em.newClipIds.length) !== (null == et ? void 0 : et.newClipIds.length) &&
        (null != (t = null == et ? void 0 : et.newClipIds.length) ? t : 0) > 0 &&
        null == eu &&
        ea &&
        er &&
        !eo &&
        !ei &&
        !es &&
        ed("recentClips");
    let eg = (0, o.e7)([P.Z], () => P.Z.hasCurrentUserSentMessageSinceAppStart());
    function eb() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e("61342"), n.e("69311")]).then(n.bind(n, 542055));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        H(V({}, t), {
                            channelId: W.id,
                            onClipClick: (e) => el({ clips: [e] }),
                        }),
                    );
            },
            { modalKey: k.Qr },
        ),
            ed(null);
    }
    i.useEffect(() => {
        let e = () => {
            var e;
            return null == (e = J.current) ? void 0 : e.activateUploadDialogue();
        };
        return (
            T.S.subscribe(L.CkL.UPLOAD_FILE, e),
            () => {
                T.S.unsubscribe(L.CkL.UPLOAD_FILE, e);
            }
        );
    });
    let e_ = (0, x.NE)(W),
        ey = (0, x.Xu)(W),
        eC = !E.dN.useSetting() && !(0, N.isAndroidWeb)() && null != window.ResizeObserver,
        ev = (0, v.UI)(null != W ? W : void 0),
        eO = (0, p.qB)(),
        ex = (0, O.Us)({ location: "ChannelAttachButton" }),
        eE = f.C.useExperiment({ location: "ChannelAttachButton" }).enableAIFeatures,
        ej = null != (l = null == en ? void 0 : en.length) ? l : 0,
        eS = (0, D.Z)({
            canAttachFiles: eh,
            canStartThreads: e_ || ey,
            useSlate: eC,
            hasClips: ep,
            canUseApplicationCommands: !K,
            channel: W,
            activities: $,
            newClipsCount: ej,
            canPostPolls: ev,
            canLaunchActivities: eO,
            appContext: X,
            canSendScheduledMessages: ex,
            canSummarizeThreads: eE,
        });
    if (0 === eS.length) return null;
    let eP = (0, r.jsx)(c.svS, {
            size: "refresh_sm",
            color: "currentColor",
            colorClass: F.attachButtonPlus,
        }),
        eI = (0, r.jsx)(c.yRy, {
            targetElementRef: Q,
            shouldShow: null != eu,
            animation: c.yRy.Animation.NONE,
            align: "recentClips" === eu ? "center" : "left",
            position: "top",
            positionKey: null != eu ? eu : "null",
            onRequestOpen: () => {
                eg && (0, _.Q3)(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: U.L.TAKE_ACTION }),
                    ed("attachMenu");
            },
            onRequestClose: () => {
                (0, c.$sL)() ||
                    (eg && (0, _.Q3)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: U.L.TAKE_ACTION }), ed(null));
            },
            renderPopout: (e) => {
                switch (eu) {
                    case "recentClips":
                        return (0, r.jsx)(
                            g.Z,
                            H(V({}, e), {
                                onOpenClips: eb,
                                lastClipsSession: et,
                            }),
                        );
                    case "attachMenu":
                        return (0, r.jsx)(
                            R.Z,
                            H(V({}, e), {
                                onClose: () => ed(null),
                                options: eS,
                                channel: W,
                                onFileUpload: () => {
                                    var e;
                                    return null == (e = J.current) ? void 0 : e.activateUploadDialogue();
                                },
                                draftType: z,
                                editorTextContent: q,
                                setValue: Y,
                                openClips: eb,
                            }),
                        );
                    default:
                        throw Error("Invalid popout type provided");
                }
            },
            children: (e) =>
                (0, r.jsx)(
                    M.Z,
                    H(
                        V(
                            {
                                ref: Q,
                                className: a()(F.attachButton, G),
                                childClassName: F.attachButtonInner,
                                isActive: !1,
                                "aria-label": B.intl.string(B.t.d56gCa),
                                onDoubleClick: eh
                                    ? () => {
                                          var e;
                                          return null == (e = J.current) ? void 0 : e.activateUploadDialogue();
                                      }
                                    : void 0,
                                "aria-haspopup": "menu",
                            },
                            e,
                        ),
                        { children: eP },
                    ),
                ),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: F.uploadInput,
                children: (0, r.jsx)(u.Z, {
                    ref: J,
                    onChange: (e) => {
                        var t, n, r;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, A.G)(W, [])
                                : (0, A.d)(t, W, z, {
                                      requireConfirm: !0,
                                      showLargeMessageDialog: r,
                                      origin: "file_picker",
                                  }),
                            T.S.dispatchToLastSubscribed(L.CkL.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: W.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, r.jsx)("div", {
                className: F.attachWrapper,
                children: (0, r.jsx)(w.Z, {
                    channel: W,
                    isOmniMenuOpen: "attachMenu" === eu,
                    openOmniMenu: () => ed("attachMenu"),
                    enabled: eO,
                    animationContainerClassName: F.buttonAnimation,
                    glowClassName: F.buttonAnimationGlow,
                    trinketsClassName: F.buttonAnimationTrinkets,
                    children: eI,
                }),
            }),
        ],
    });
});
