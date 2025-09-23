n.d(t, { Z: () => H }), n(388685), n(415506);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(704215),
    c = n(481060),
    u = n(53281),
    d = n(110924),
    p = n(40851),
    h = n(595519),
    f = n(338390),
    m = n(924557),
    g = n(435064),
    b = n(712114),
    y = n(266454),
    C = n(536442),
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
    k = n(981631),
    L = n(356659),
    D = n(921944),
    U = n(388032),
    B = n(935730);
function F(e) {
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
function V(e, t) {
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
let H = i.memo(function (e) {
    var t, l;
    let { className: H, channel: G, draftType: z, editorTextContent: W, setValue: q, canOnlyUseTextCommands: Y } = e,
        K = (0, p.bp)(),
        X = i.useRef(null),
        J = i.useRef(null),
        Q = (0, o.e7)([I.Z], () => I.Z.getActivities()),
        $ = (0, o.e7)([g.Z], () => g.Z.getSettings().clipsEnabled),
        ee = (0, o.e7)([g.Z], () => g.Z.getLastClipsSession()),
        et = (0, o.Wu)([g.Z], () => g.Z.getNewClipIds()),
        en = (0, o.e7)([j.ZP], () => null == j.ZP.getCurrentSidebarChannelId(G.id)),
        { showClipsHeaderEntrypoint: er } = m.NV.useExperiment(
            { location: "ChannelAttachButton" },
            { autoTrackExposure: !1 },
        ),
        ei = (0, o.e7)([C.qc], () => C.qc.hasHotspot(C.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
        el = (0, c.s9z)((e) => (0, c.DEQ)(e, L.Qr)),
        ea = (0, o.e7)([E.Z], () => E.Z.hasLayers()),
        eo = (0, o.e7)([g.Z], () => g.Z.hasClips()),
        [es, ec] = i.useState(null),
        eu = (0, m.Go)() && ($ || eo),
        ed = G.isPrivate(),
        ep = (0, o.e7)([P.Z], () => ed || (P.Z.can(k.Plq.ATTACH_FILES, G) && P.Z.can(k.Plq.SEND_MESSAGES, G))),
        eh = (0, d.Z)(ee);
    (null == eh ? void 0 : eh.newClipIds.length) !== (null == ee ? void 0 : ee.newClipIds.length) &&
        (null != (t = null == ee ? void 0 : ee.newClipIds.length) ? t : 0) > 0 &&
        null == es &&
        ei &&
        en &&
        !el &&
        !er &&
        !ea &&
        ec("recentClips");
    let ef = (0, o.e7)([S.Z], () => S.Z.hasCurrentUserSentMessageSinceAppStart());
    function em() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await n.e("57478").then(n.bind(n, 542055));
                return (t) => (0, r.jsx)(e, V(F({}, t), { channelId: G.id }));
            },
            { modalKey: L.Qr },
        ),
            ec(null);
    }
    i.useEffect(() => {
        let e = () => {
            var e;
            return null == (e = X.current) ? void 0 : e.activateUploadDialogue();
        };
        return (
            Z.S.subscribe(k.CkL.UPLOAD_FILE, e),
            () => {
                Z.S.unsubscribe(k.CkL.UPLOAD_FILE, e);
            }
        );
    });
    let eg = (0, x.NE)(G),
        eb = (0, x.Xu)(G),
        ey = !O.dN.useSetting() && !(0, T.isAndroidWeb)() && null != window.ResizeObserver,
        eC = (0, _.UI)(null != G ? G : void 0),
        e_ = (0, h.qB)(),
        ev = (0, v.Us)({ location: "ChannelAttachButton" }),
        ex = null != (l = null == et ? void 0 : et.length) ? l : 0,
        eO = (0, R.Z)({
            canAttachFiles: ep,
            canStartThreads: eg || eb,
            useSlate: ey,
            hasClips: eu,
            canUseApplicationCommands: !Y,
            channel: G,
            activities: Q,
            newClipsCount: ex,
            canPostPolls: eC,
            canLaunchActivities: e_,
            appContext: K,
            canSendScheduledMessages: ev,
        }),
        ej = (0, f.Z)("ChannelAttachButton");
    if (0 === eO.length) return null;
    let eE = "refresh_sm",
        eS = ej
            ? (0, r.jsx)(c.svS, {
                  size: eE,
                  color: "currentColor",
                  colorClass: B.attachButtonPlus,
              })
            : (0, r.jsx)(c.oFk, {
                  size: eE,
                  color: "currentColor",
                  colorClass: B.attachButtonPlus,
              }),
        eP = (0, r.jsx)(c.yRy, {
            targetElementRef: J,
            shouldShow: null != es,
            animation: c.yRy.Animation.NONE,
            align: "recentClips" === es ? "center" : "left",
            position: "top",
            positionKey: null != es ? es : "null",
            onRequestOpen: () => {
                ef && (0, y.Q3)(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: D.L.TAKE_ACTION }),
                    ec("attachMenu");
            },
            onRequestClose: () => {
                (0, c.$sL)() ||
                    (ef && (0, y.Q3)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: D.L.TAKE_ACTION }), ec(null));
            },
            renderPopout: (e) => {
                switch (es) {
                    case "recentClips":
                        return (0, r.jsx)(
                            b.Z,
                            V(F({}, e), {
                                onOpenClips: em,
                                lastClipsSession: ee,
                            }),
                        );
                    case "attachMenu":
                        return (0, r.jsx)(
                            M.Z,
                            V(F({}, e), {
                                onClose: () => ec(null),
                                options: eO,
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
                (0, r.jsx)(
                    w.Z,
                    V(
                        F(
                            {
                                ref: J,
                                className: a()(B.attachButton, H),
                                childClassName: B.attachButtonInner,
                                isActive: !1,
                                "aria-label": U.intl.string(U.t.d56gCQ),
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
                        { children: eS },
                    ),
                ),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: B.uploadInput,
                children: (0, r.jsx)(u.Z, {
                    ref: X,
                    onChange: (e) => {
                        var t, n, r;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, N.G)(G, [])
                                : (0, N.d5)(t, G, z, {
                                      requireConfirm: !0,
                                      showLargeMessageDialog: r,
                                      origin: "file_picker",
                                  }),
                            Z.S.dispatchToLastSubscribed(k.CkL.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: G.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, r.jsx)("div", {
                className: B.attachWrapper,
                children: (0, r.jsx)(A.Z, {
                    channel: G,
                    isOmniMenuOpen: "attachMenu" === es,
                    openOmniMenu: () => ec("attachMenu"),
                    enabled: e_,
                    animationContainerClassName: B.buttonAnimation,
                    glowClassName: B.buttonAnimationGlow,
                    trinketsClassName: B.buttonAnimationTrinkets,
                    children: eP,
                }),
            }),
        ],
    });
});
