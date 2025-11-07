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
    f = n(39952),
    h = n(924557),
    m = n(435064),
    g = n(712114),
    b = n(680056),
    y = n(266454),
    C = n(536442),
    _ = n(728285),
    v = n(79390),
    x = n(216789),
    O = n(665906),
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
    F = n(388032),
    V = n(90274);
function B(e) {
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
function H(e, t) {
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
    let { className: G, channel: W, draftType: z, editorTextContent: q, setValue: Y, canOnlyUseTextCommands: K } = e,
        X = (0, _.bp)(),
        J = r.useRef(null),
        Q = r.useRef(null),
        $ = (0, o.e7)([Z.Z], () => Z.Z.getActivities()),
        ee = (0, o.e7)([m.Z], () => m.Z.getSettings().clipsEnabled),
        et = (0, o.e7)([m.Z], () => m.Z.getLastClipsSession()),
        en = (0, o.Wu)([m.Z], () => m.Z.getNewClipIds()),
        ei = (0, o.e7)([j.ZP], () => null == j.ZP.getCurrentSidebarChannelId(W.id)),
        { showClipsHeaderEntrypoint: er } = h.NV.useExperiment(
            { location: "ChannelAttachButton" },
            { autoTrackExposure: !1 },
        ),
        { onShareClick: el } = (0, b.Z)(W.id),
        ea = (0, o.e7)([C.qc], () => C.qc.hasHotspot(C.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
        eo = (0, c.s9z)((e) => (0, c.DEQ)(e, k.Qr)),
        es = (0, o.e7)([S.Z], () => S.Z.hasLayers()),
        ec = (0, o.e7)([m.Z], () => m.Z.hasClips()),
        [eu, ed] = r.useState(null),
        ep = (0, h.Go)() && (ee || ec),
        ef = W.isPrivate(),
        eh = (0, o.e7)([I.Z], () => ef || (I.Z.can(L.Plq.ATTACH_FILES, W) && I.Z.can(L.Plq.SEND_MESSAGES, W))),
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
                let { default: e } = await Promise.all([n.e("61342"), n.e("69311")]).then(n.bind(n, 542055));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        H(B({}, t), {
                            channelId: W.id,
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
            T.S.subscribe(L.CkL.UPLOAD_FILE, e),
            () => {
                T.S.unsubscribe(L.CkL.UPLOAD_FILE, e);
            }
        );
    });
    let ey = (0, O.NE)(W),
        eC = (0, O.Xu)(W),
        e_ = !E.dN.useSetting() && !(0, N.isAndroidWeb)() && null != window.ResizeObserver,
        ev = (0, v.UI)(null != W ? W : void 0),
        ex = (0, p.qB)(),
        eO = (0, x.Us)({ location: "ChannelAttachButton" }),
        eE = (0, f.o)(),
        ej = null != (l = null == en ? void 0 : en.length) ? l : 0,
        eS = (0, D.Z)({
            canAttachFiles: eh,
            canStartThreads: ey || eC,
            useSlate: e_,
            hasClips: ep,
            canUseApplicationCommands: !K,
            channel: W,
            activities: $,
            newClipsCount: ej,
            canPostPolls: ev,
            canLaunchActivities: ex,
            appContext: X,
            canSendScheduledMessages: eO,
            canSummarizeThreads: eE,
        });
    if (0 === eS.length) return null;
    let eP = (0, i.jsx)(c.svS, {
            size: "refresh_sm",
            color: "currentColor",
            colorClass: V.attachButtonPlus,
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
                            H(B({}, e), {
                                onOpenClips: eb,
                                lastClipsSession: et,
                            }),
                        );
                    case "attachMenu":
                        return (0, i.jsx)(
                            R.Z,
                            H(B({}, e), {
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
                (0, i.jsx)(
                    M.Z,
                    H(
                        B(
                            {
                                ref: Q,
                                className: a()(V.attachButton, G),
                                childClassName: V.attachButtonInner,
                                isActive: !1,
                                "aria-label": F.intl.string(F.t.d56gCa),
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
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: V.uploadInput,
                children: (0, i.jsx)(u.Z, {
                    ref: J,
                    onChange: (e) => {
                        var t, n, i;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, A.G)(W, [])
                                : (0, A.d)(t, W, z, {
                                      requireConfirm: !0,
                                      showLargeMessageDialog: i,
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
            (0, i.jsx)("div", {
                className: V.attachWrapper,
                children: (0, i.jsx)(w.Z, {
                    channel: W,
                    isOmniMenuOpen: "attachMenu" === eu,
                    openOmniMenu: () => ed("attachMenu"),
                    enabled: ex,
                    animationContainerClassName: V.buttonAnimation,
                    glowClassName: V.buttonAnimationGlow,
                    trinketsClassName: V.buttonAnimationTrinkets,
                    children: eI,
                }),
            }),
        ],
    });
});
