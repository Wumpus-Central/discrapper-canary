n.d(t, { Z: () => V }), n(388685), n(415506);
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
    h = n(466721),
    f = n(924557),
    m = n(435064),
    g = n(712114),
    b = n(266454),
    C = n(536442),
    y = n(728285),
    _ = n(79390),
    v = n(216789),
    x = n(665906),
    O = n(695346),
    j = n(433355),
    E = n(819640),
    S = n(375954),
    P = n(496675),
    I = n(885110),
    Z = n(585483),
    T = n(358085),
    N = n(127654),
    A = n(316595),
    w = n(443603),
    M = n(193910),
    R = n(951211),
    L = n(981631),
    D = n(356659),
    k = n(921944),
    U = n(388032),
    B = n(90274);
function H(e) {
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
let V = r.memo(function (e) {
    var t, l;
    let { className: V, channel: G, draftType: z, editorTextContent: W, setValue: q, canOnlyUseTextCommands: Y } = e,
        K = (0, y.bp)(),
        X = r.useRef(null),
        J = r.useRef(null),
        Q = (0, o.e7)([I.Z], () => I.Z.getActivities()),
        $ = (0, o.e7)([m.Z], () => m.Z.getSettings().clipsEnabled),
        ee = (0, o.e7)([m.Z], () => m.Z.getLastClipsSession()),
        et = (0, o.Wu)([m.Z], () => m.Z.getNewClipIds()),
        en = (0, o.e7)([j.ZP], () => null == j.ZP.getCurrentSidebarChannelId(G.id)),
        { showClipsHeaderEntrypoint: ei } = f.NV.useExperiment(
            { location: "ChannelAttachButton" },
            { autoTrackExposure: !1 },
        ),
        er = (0, o.e7)([C.qc], () => C.qc.hasHotspot(C.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
        el = (0, c.s9z)((e) => (0, c.DEQ)(e, D.Qr)),
        ea = (0, o.e7)([E.Z], () => E.Z.hasLayers()),
        eo = (0, o.e7)([m.Z], () => m.Z.hasClips()),
        [es, ec] = r.useState(null),
        eu = (0, f.Go)() && ($ || eo),
        ed = G.isPrivate(),
        ep = (0, o.e7)([P.Z], () => ed || (P.Z.can(L.Plq.ATTACH_FILES, G) && P.Z.can(L.Plq.SEND_MESSAGES, G))),
        eh = (0, d.Z)(ee);
    (null == eh ? void 0 : eh.newClipIds.length) !== (null == ee ? void 0 : ee.newClipIds.length) &&
        (null != (t = null == ee ? void 0 : ee.newClipIds.length) ? t : 0) > 0 &&
        null == es &&
        er &&
        en &&
        !el &&
        !ei &&
        !ea &&
        ec("recentClips");
    let ef = (0, o.e7)([S.Z], () => S.Z.hasCurrentUserSentMessageSinceAppStart());
    function em() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await n.e("57478").then(n.bind(n, 542055));
                return (t) => (0, i.jsx)(e, F(H({}, t), { channelId: G.id }));
            },
            { modalKey: D.Qr },
        ),
            ec(null);
    }
    r.useEffect(() => {
        let e = () => {
            var e;
            return null == (e = X.current) ? void 0 : e.activateUploadDialogue();
        };
        return (
            Z.S.subscribe(L.CkL.UPLOAD_FILE, e),
            () => {
                Z.S.unsubscribe(L.CkL.UPLOAD_FILE, e);
            }
        );
    });
    let eg = (0, x.NE)(G),
        eb = (0, x.Xu)(G),
        eC = !O.dN.useSetting() && !(0, T.isAndroidWeb)() && null != window.ResizeObserver,
        ey = (0, _.UI)(null != G ? G : void 0),
        e_ = (0, p.qB)(),
        ev = (0, v.Us)({ location: "ChannelAttachButton" }),
        ex = h.C.useExperiment({ location: "ChannelAttachButton" }).enableAIFeatures,
        eO = null != (l = null == et ? void 0 : et.length) ? l : 0,
        ej = (0, R.Z)({
            canAttachFiles: ep,
            canStartThreads: eg || eb,
            useSlate: eC,
            hasClips: eu,
            canUseApplicationCommands: !Y,
            channel: G,
            activities: Q,
            newClipsCount: eO,
            canPostPolls: ey,
            canLaunchActivities: e_,
            appContext: K,
            canSendScheduledMessages: ev,
            canSummarizeThreads: ex,
        });
    if (0 === ej.length) return null;
    let eE = (0, i.jsx)(c.svS, {
            size: "refresh_sm",
            color: "currentColor",
            colorClass: B.attachButtonPlus,
        }),
        eS = (0, i.jsx)(c.yRy, {
            targetElementRef: J,
            shouldShow: null != es,
            animation: c.yRy.Animation.NONE,
            align: "recentClips" === es ? "center" : "left",
            position: "top",
            positionKey: null != es ? es : "null",
            onRequestOpen: () => {
                ef && (0, b.Q3)(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: k.L.TAKE_ACTION }),
                    ec("attachMenu");
            },
            onRequestClose: () => {
                (0, c.$sL)() ||
                    (ef && (0, b.Q3)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: k.L.TAKE_ACTION }), ec(null));
            },
            renderPopout: (e) => {
                switch (es) {
                    case "recentClips":
                        return (0, i.jsx)(
                            g.Z,
                            F(H({}, e), {
                                onOpenClips: em,
                                lastClipsSession: ee,
                            }),
                        );
                    case "attachMenu":
                        return (0, i.jsx)(
                            M.Z,
                            F(H({}, e), {
                                onClose: () => ec(null),
                                options: ej,
                                channel: G,
                                onFileUpload: () => {
                                    var e;
                                    return null == (e = X.current) ? void 0 : e.activateUploadDialogue();
                                },
                                draftType: z,
                                editorTextContent: W,
                                setValue: q,
                                openClips: em,
                            }),
                        );
                    default:
                        throw Error("Invalid popout type provided");
                }
            },
            children: (e) =>
                (0, i.jsx)(
                    w.Z,
                    F(
                        H(
                            {
                                ref: J,
                                className: a()(B.attachButton, V),
                                childClassName: B.attachButtonInner,
                                isActive: !1,
                                "aria-label": U.intl.string(U.t.d56gCa),
                                onDoubleClick: ep
                                    ? () => {
                                          var e;
                                          return null == (e = X.current) ? void 0 : e.activateUploadDialogue();
                                      }
                                    : void 0,
                                "aria-haspopup": "menu",
                            },
                            e,
                        ),
                        { children: eE },
                    ),
                ),
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: B.uploadInput,
                children: (0, i.jsx)(u.Z, {
                    ref: X,
                    onChange: (e) => {
                        var t, n, i;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, N.G)(G, [])
                                : (0, N.d)(t, G, z, {
                                      requireConfirm: !0,
                                      showLargeMessageDialog: i,
                                      origin: "file_picker",
                                  }),
                            Z.S.dispatchToLastSubscribed(L.CkL.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: G.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)("div", {
                className: B.attachWrapper,
                children: (0, i.jsx)(A.Z, {
                    channel: G,
                    isOmniMenuOpen: "attachMenu" === es,
                    openOmniMenu: () => ec("attachMenu"),
                    enabled: e_,
                    animationContainerClassName: B.buttonAnimation,
                    glowClassName: B.buttonAnimationGlow,
                    trinketsClassName: B.buttonAnimationTrinkets,
                    children: eS,
                }),
            }),
        ],
    });
});
