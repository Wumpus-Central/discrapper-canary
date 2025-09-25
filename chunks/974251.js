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
    f = n(924557),
    m = n(435064),
    g = n(712114),
    b = n(266454),
    y = n(536442),
    C = n(79390),
    _ = n(216789),
    v = n(665906),
    x = n(695346),
    O = n(433355),
    j = n(819640),
    E = n(375954),
    S = n(496675),
    P = n(885110),
    I = n(585483),
    Z = n(358085),
    T = n(127654),
    N = n(316595),
    A = n(443603),
    w = n(193910),
    M = n(951211),
    R = n(981631),
    k = n(356659),
    L = n(921944),
    D = n(388032),
    U = n(935730);
function B(e) {
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
function F(e, t) {
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
    let { className: H, channel: V, draftType: G, editorTextContent: z, setValue: W, canOnlyUseTextCommands: q } = e,
        Y = (0, p.bp)(),
        K = i.useRef(null),
        X = i.useRef(null),
        J = (0, o.e7)([P.Z], () => P.Z.getActivities()),
        Q = (0, o.e7)([m.Z], () => m.Z.getSettings().clipsEnabled),
        $ = (0, o.e7)([m.Z], () => m.Z.getLastClipsSession()),
        ee = (0, o.Wu)([m.Z], () => m.Z.getNewClipIds()),
        et = (0, o.e7)([O.ZP], () => null == O.ZP.getCurrentSidebarChannelId(V.id)),
        { showClipsHeaderEntrypoint: en } = f.NV.useExperiment(
            { location: "ChannelAttachButton" },
            { autoTrackExposure: !1 },
        ),
        er = (0, o.e7)([y.qc], () => y.qc.hasHotspot(y.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
        ei = (0, c.s9z)((e) => (0, c.DEQ)(e, k.Qr)),
        el = (0, o.e7)([j.Z], () => j.Z.hasLayers()),
        ea = (0, o.e7)([m.Z], () => m.Z.hasClips()),
        [eo, es] = i.useState(null),
        ec = (0, f.Go)() && (Q || ea),
        eu = V.isPrivate(),
        ed = (0, o.e7)([S.Z], () => eu || (S.Z.can(R.Plq.ATTACH_FILES, V) && S.Z.can(R.Plq.SEND_MESSAGES, V))),
        ep = (0, d.Z)($);
    (null == ep ? void 0 : ep.newClipIds.length) !== (null == $ ? void 0 : $.newClipIds.length) &&
        (null != (t = null == $ ? void 0 : $.newClipIds.length) ? t : 0) > 0 &&
        null == eo &&
        er &&
        et &&
        !ei &&
        !en &&
        !el &&
        es("recentClips");
    let eh = (0, o.e7)([E.Z], () => E.Z.hasCurrentUserSentMessageSinceAppStart());
    function ef() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await n.e("57478").then(n.bind(n, 542055));
                return (t) => (0, r.jsx)(e, F(B({}, t), { channelId: V.id }));
            },
            { modalKey: k.Qr },
        ),
            es(null);
    }
    i.useEffect(() => {
        let e = () => {
            var e;
            return null == (e = K.current) ? void 0 : e.activateUploadDialogue();
        };
        return (
            I.S.subscribe(R.CkL.UPLOAD_FILE, e),
            () => {
                I.S.unsubscribe(R.CkL.UPLOAD_FILE, e);
            }
        );
    });
    let em = (0, v.NE)(V),
        eg = (0, v.Xu)(V),
        eb = !x.dN.useSetting() && !(0, Z.isAndroidWeb)() && null != window.ResizeObserver,
        ey = (0, C.UI)(null != V ? V : void 0),
        eC = (0, h.qB)(),
        e_ = (0, _.Us)({ location: "ChannelAttachButton" }),
        ev = null != (l = null == ee ? void 0 : ee.length) ? l : 0,
        ex = (0, M.Z)({
            canAttachFiles: ed,
            canStartThreads: em || eg,
            useSlate: eb,
            hasClips: ec,
            canUseApplicationCommands: !q,
            channel: V,
            activities: J,
            newClipsCount: ev,
            canPostPolls: ey,
            canLaunchActivities: eC,
            appContext: Y,
            canSendScheduledMessages: e_,
        });
    if (0 === ex.length) return null;
    let eO = (0, r.jsx)(c.svS, {
            size: "refresh_sm",
            color: "currentColor",
            colorClass: U.attachButtonPlus,
        }),
        ej = (0, r.jsx)(c.yRy, {
            targetElementRef: X,
            shouldShow: null != eo,
            animation: c.yRy.Animation.NONE,
            align: "recentClips" === eo ? "center" : "left",
            position: "top",
            positionKey: null != eo ? eo : "null",
            onRequestOpen: () => {
                eh && (0, b.Q3)(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: L.L.TAKE_ACTION }),
                    es("attachMenu");
            },
            onRequestClose: () => {
                (0, c.$sL)() ||
                    (eh && (0, b.Q3)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: L.L.TAKE_ACTION }), es(null));
            },
            renderPopout: (e) => {
                switch (eo) {
                    case "recentClips":
                        return (0, r.jsx)(
                            g.Z,
                            F(B({}, e), {
                                onOpenClips: ef,
                                lastClipsSession: $,
                            }),
                        );
                    case "attachMenu":
                        return (0, r.jsx)(
                            w.Z,
                            F(B({}, e), {
                                onClose: () => es(null),
                                options: ex,
                                channel: V,
                                onFileUpload: () => {
                                    var e;
                                    return null == (e = K.current) ? void 0 : e.activateUploadDialogue();
                                },
                                draftType: G,
                                editorTextContent: z,
                                setValue: W,
                                openClips: ef,
                            }),
                        );
                    default:
                        throw Error("Invalid popout type provided");
                }
            },
            children: (e) =>
                (0, r.jsx)(
                    A.Z,
                    F(
                        B(
                            {
                                ref: X,
                                className: a()(U.attachButton, H),
                                childClassName: U.attachButtonInner,
                                isActive: !1,
                                "aria-label": D.intl.string(D.t.d56gCQ),
                                onDoubleClick: ed
                                    ? () => {
                                          var e;
                                          return null == (e = K.current) ? void 0 : e.activateUploadDialogue();
                                      }
                                    : void 0,
                                "aria-haspopup": "menu",
                            },
                            e,
                        ),
                        { children: eO },
                    ),
                ),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: U.uploadInput,
                children: (0, r.jsx)(u.Z, {
                    ref: K,
                    onChange: (e) => {
                        var t, n, r;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, T.G)(V, [])
                                : (0, T.d)(t, V, G, {
                                      requireConfirm: !0,
                                      showLargeMessageDialog: r,
                                      origin: "file_picker",
                                  }),
                            I.S.dispatchToLastSubscribed(R.CkL.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: V.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, r.jsx)("div", {
                className: U.attachWrapper,
                children: (0, r.jsx)(N.Z, {
                    channel: V,
                    isOmniMenuOpen: "attachMenu" === eo,
                    openOmniMenu: () => es("attachMenu"),
                    enabled: eC,
                    animationContainerClassName: U.buttonAnimation,
                    glowClassName: U.buttonAnimationGlow,
                    trinketsClassName: U.buttonAnimationTrinkets,
                    children: ej,
                }),
            }),
        ],
    });
});
