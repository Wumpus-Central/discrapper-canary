n.d(t, { Z: () => G }), n(388685), n(415506);
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
    f = n(924557),
    m = n(435064),
    g = n(712114),
    b = n(680056),
    y = n(266454),
    C = n(536442),
    v = n(728285),
    _ = n(79390),
    x = n(216789),
    O = n(665906),
    j = n(695346),
    E = n(433355),
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
    L = n(951211),
    D = n(981631),
    k = n(356659),
    U = n(921944),
    B = n(388032),
    H = n(935730);
function V(e) {
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
function F(e, t) {
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
let G = r.memo(function (e) {
    var t, l;
    let { className: G, channel: z, draftType: W, editorTextContent: q, setValue: K, canOnlyUseTextCommands: Y } = e,
        X = (0, v.bp)(),
        J = r.useRef(null),
        Q = r.useRef(null),
        $ = (0, o.e7)([Z.Z], () => Z.Z.getActivities()),
        ee = (0, o.e7)([m.Z], () => m.Z.getSettings().clipsEnabled),
        et = (0, o.e7)([m.Z], () => m.Z.getLastClipsSession()),
        en = (0, o.Wu)([m.Z], () => m.Z.getNewClipIds()),
        ei = (0, o.e7)([E.ZP], () => null == E.ZP.getCurrentSidebarChannelId(z.id)),
        { showClipsHeaderEntrypoint: er } = f.NV.useExperiment(
            { location: "ChannelAttachButton" },
            { autoTrackExposure: !1 },
        ),
        { onShareClick: el } = (0, b.Z)(z.id),
        ea = (0, o.e7)([C.qc], () => C.qc.hasHotspot(C.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
        eo = (0, c.s9z)((e) => (0, c.DEQ)(e, k.Qr)),
        es = (0, o.e7)([S.Z], () => S.Z.hasLayers()),
        ec = (0, o.e7)([m.Z], () => m.Z.hasClips()),
        [eu, ed] = r.useState(null),
        ep = (0, f.Go)() && (ee || ec),
        eh = z.isPrivate(),
        ef = (0, o.e7)([I.Z], () => eh || (I.Z.can(D.Plq.ATTACH_FILES, z) && I.Z.can(D.Plq.SEND_MESSAGES, z))),
        em = (0, d.Z)(et);
    (null == em ? void 0 : em.newClipIds.length) !== (null == et ? void 0 : et.newClipIds.length) &&
        (null != (t = null == et ? void 0 : et.newClipIds.length) ? t : 0) > 0 &&
        null == eu &&
        ea &&
        ei &&
        !eo &&
        !er &&
        !es &&
        ed("recentClips");
    let eg = (0, o.e7)([P.Z], () => P.Z.hasCurrentUserSentMessageSinceAppStart());
    function eb() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e("61342"), n.e("9260")]).then(n.bind(n, 542055));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        F(V({}, t), {
                            channelId: z.id,
                            onClipClick: (e) => el({ clips: [e] }),
                        }),
                    );
            },
            { modalKey: k.Qr },
        ),
            ed(null);
    }
    r.useEffect(() => {
        let e = () => {
            var e;
            return null == (e = J.current) ? void 0 : e.activateUploadDialogue();
        };
        return (
            T.S.subscribe(D.CkL.UPLOAD_FILE, e),
            () => {
                T.S.unsubscribe(D.CkL.UPLOAD_FILE, e);
            }
        );
    });
    let ey = (0, O.NE)(z),
        eC = (0, O.Xu)(z),
        ev = !j.dN.useSetting() && !(0, N.isAndroidWeb)() && null != window.ResizeObserver,
        e_ = (0, _.UI)(null != z ? z : void 0),
        ex = (0, p.qB)(),
        eO = (0, x.Us)({ location: "ChannelAttachButton" }),
        ej = (0, h.o)(),
        eE = null != (l = null == en ? void 0 : en.length) ? l : 0,
        eS = (0, L.Z)({
            canAttachFiles: ef,
            canStartThreads: ey || eC,
            useSlate: ev,
            hasClips: ep,
            canUseApplicationCommands: !Y,
            channel: z,
            activities: $,
            newClipsCount: eE,
            canPostPolls: e_,
            canLaunchActivities: ex,
            appContext: X,
            canSendScheduledMessages: eO,
            canSummarizeThreads: ej,
        });
    if (0 === eS.length) return null;
    let eP = (0, i.jsx)(c.svS, {
            size: "refresh_sm",
            color: "currentColor",
            colorClass: H.attachButtonPlus,
        }),
        eI = (0, i.jsx)(c.yRy, {
            targetElementRef: Q,
            shouldShow: null != eu,
            animation: c.yRy.Animation.NONE,
            align: "recentClips" === eu ? "center" : "left",
            position: "top",
            positionKey: null != eu ? eu : "null",
            onRequestOpen: () => {
                eg && (0, y.Q3)(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: U.L.TAKE_ACTION }),
                    ed("attachMenu");
            },
            onRequestClose: () => {
                (0, c.$sL)() ||
                    (eg && (0, y.Q3)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: U.L.TAKE_ACTION }), ed(null));
            },
            renderPopout: (e) => {
                switch (eu) {
                    case "recentClips":
                        return (0, i.jsx)(
                            g.Z,
                            F(V({}, e), {
                                onOpenClips: eb,
                                lastClipsSession: et,
                            }),
                        );
                    case "attachMenu":
                        return (0, i.jsx)(
                            R.Z,
                            F(V({}, e), {
                                onClose: () => ed(null),
                                options: eS,
                                channel: z,
                                onFileUpload: () => {
                                    var e;
                                    return null == (e = J.current) ? void 0 : e.activateUploadDialogue();
                                },
                                draftType: W,
                                editorTextContent: q,
                                setValue: K,
                                openClips: eb,
                            }),
                        );
                    default:
                        throw Error("Invalid popout type provided");
                }
            },
            children: (e) =>
                (0, i.jsx)(
                    M.Z,
                    F(
                        V(
                            {
                                ref: Q,
                                className: a()(H.attachButton, G),
                                childClassName: H.attachButtonInner,
                                isActive: !1,
                                "aria-label": B.intl.string(B.t.d56gCa),
                                onDoubleClick: ef
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
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: H.uploadInput,
                children: (0, i.jsx)(u.Z, {
                    ref: J,
                    onChange: (e) => {
                        var t, n, i;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, A.G)(z, [])
                                : (0, A.d)(t, z, W, {
                                      requireConfirm: !0,
                                      showLargeMessageDialog: i,
                                      origin: "file_picker",
                                  }),
                            T.S.dispatchToLastSubscribed(D.CkL.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: z.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)("div", {
                className: H.attachWrapper,
                children: (0, i.jsx)(w.Z, {
                    channel: z,
                    isOmniMenuOpen: "attachMenu" === eu,
                    openOmniMenu: () => ed("attachMenu"),
                    enabled: ex,
                    animationContainerClassName: H.buttonAnimation,
                    glowClassName: H.buttonAnimationGlow,
                    trinketsClassName: H.buttonAnimationTrinkets,
                    children: eI,
                }),
            }),
        ],
    });
});
