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
    h = n(924557),
    f = n(435064),
    m = n(712114),
    g = n(266454),
    b = n(536442),
    C = n(728285),
    y = n(79390),
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
    N = n(127654),
    T = n(316595),
    A = n(443603),
    w = n(193910),
    M = n(951211),
    R = n(981631),
    k = n(356659),
    L = n(921944),
    D = n(388032),
    U = n(90274);
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
let V = r.memo(function (e) {
    var t, l;
    let { className: V, channel: F, draftType: G, editorTextContent: z, setValue: W, canOnlyUseTextCommands: q } = e,
        K = (0, C.bp)(),
        Y = r.useRef(null),
        X = r.useRef(null),
        J = (0, o.e7)([P.Z], () => P.Z.getActivities()),
        Q = (0, o.e7)([f.Z], () => f.Z.getSettings().clipsEnabled),
        $ = (0, o.e7)([f.Z], () => f.Z.getLastClipsSession()),
        ee = (0, o.Wu)([f.Z], () => f.Z.getNewClipIds()),
        et = (0, o.e7)([O.ZP], () => null == O.ZP.getCurrentSidebarChannelId(F.id)),
        { showClipsHeaderEntrypoint: en } = h.NV.useExperiment(
            { location: "ChannelAttachButton" },
            { autoTrackExposure: !1 },
        ),
        ei = (0, o.e7)([b.qc], () => b.qc.hasHotspot(b.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
        er = (0, c.s9z)((e) => (0, c.DEQ)(e, k.Qr)),
        el = (0, o.e7)([j.Z], () => j.Z.hasLayers()),
        ea = (0, o.e7)([f.Z], () => f.Z.hasClips()),
        [eo, es] = r.useState(null),
        ec = (0, h.Go)() && (Q || ea),
        eu = F.isPrivate(),
        ed = (0, o.e7)([S.Z], () => eu || (S.Z.can(R.Plq.ATTACH_FILES, F) && S.Z.can(R.Plq.SEND_MESSAGES, F))),
        ep = (0, d.Z)($);
    (null == ep ? void 0 : ep.newClipIds.length) !== (null == $ ? void 0 : $.newClipIds.length) &&
        (null != (t = null == $ ? void 0 : $.newClipIds.length) ? t : 0) > 0 &&
        null == eo &&
        ei &&
        et &&
        !er &&
        !en &&
        !el &&
        es("recentClips");
    let eh = (0, o.e7)([E.Z], () => E.Z.hasCurrentUserSentMessageSinceAppStart());
    function ef() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await n.e("57478").then(n.bind(n, 542055));
                return (t) => (0, i.jsx)(e, H(B({}, t), { channelId: F.id }));
            },
            { modalKey: k.Qr },
        ),
            es(null);
    }
    r.useEffect(() => {
        let e = () => {
            var e;
            return null == (e = Y.current) ? void 0 : e.activateUploadDialogue();
        };
        return (
            I.S.subscribe(R.CkL.UPLOAD_FILE, e),
            () => {
                I.S.unsubscribe(R.CkL.UPLOAD_FILE, e);
            }
        );
    });
    let em = (0, v.NE)(F),
        eg = (0, v.Xu)(F),
        eb = !x.dN.useSetting() && !(0, Z.isAndroidWeb)() && null != window.ResizeObserver,
        eC = (0, y.UI)(null != F ? F : void 0),
        ey = (0, p.qB)(),
        e_ = (0, _.Us)({ location: "ChannelAttachButton" }),
        ev = null != (l = null == ee ? void 0 : ee.length) ? l : 0,
        ex = (0, M.Z)({
            canAttachFiles: ed,
            canStartThreads: em || eg,
            useSlate: eb,
            hasClips: ec,
            canUseApplicationCommands: !q,
            channel: F,
            activities: J,
            newClipsCount: ev,
            canPostPolls: eC,
            canLaunchActivities: ey,
            appContext: K,
            canSendScheduledMessages: e_,
        });
    if (0 === ex.length) return null;
    let eO = (0, i.jsx)(c.svS, {
            size: "refresh_sm",
            color: "currentColor",
            colorClass: U.attachButtonPlus,
        }),
        ej = (0, i.jsx)(c.yRy, {
            targetElementRef: X,
            shouldShow: null != eo,
            animation: c.yRy.Animation.NONE,
            align: "recentClips" === eo ? "center" : "left",
            position: "top",
            positionKey: null != eo ? eo : "null",
            onRequestOpen: () => {
                eh && (0, g.Q3)(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: L.L.TAKE_ACTION }),
                    es("attachMenu");
            },
            onRequestClose: () => {
                (0, c.$sL)() ||
                    (eh && (0, g.Q3)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: L.L.TAKE_ACTION }), es(null));
            },
            renderPopout: (e) => {
                switch (eo) {
                    case "recentClips":
                        return (0, i.jsx)(
                            m.Z,
                            H(B({}, e), {
                                onOpenClips: ef,
                                lastClipsSession: $,
                            }),
                        );
                    case "attachMenu":
                        return (0, i.jsx)(
                            w.Z,
                            H(B({}, e), {
                                onClose: () => es(null),
                                options: ex,
                                channel: F,
                                onFileUpload: () => {
                                    var e;
                                    return null == (e = Y.current) ? void 0 : e.activateUploadDialogue();
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
                (0, i.jsx)(
                    A.Z,
                    H(
                        B(
                            {
                                ref: X,
                                className: a()(U.attachButton, V),
                                childClassName: U.attachButtonInner,
                                isActive: !1,
                                "aria-label": D.intl.string(D.t.d56gCQ),
                                onDoubleClick: ed
                                    ? () => {
                                          var e;
                                          return null == (e = Y.current) ? void 0 : e.activateUploadDialogue();
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
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: U.uploadInput,
                children: (0, i.jsx)(u.Z, {
                    ref: Y,
                    onChange: (e) => {
                        var t, n, i;
                        (t = e.currentTarget.files),
                            null != (n = e.currentTarget.err) && "ETOOLARGE" === n.code
                                ? (0, N.G)(F, [])
                                : (0, N.d)(t, F, G, {
                                      requireConfirm: !0,
                                      showLargeMessageDialog: i,
                                      origin: "file_picker",
                                  }),
                            I.S.dispatchToLastSubscribed(R.CkL.TEXTAREA_FOCUS),
                            (e.currentTarget.value = "");
                    },
                    multiple: F.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    "aria-hidden": !0,
                }),
            }),
            (0, i.jsx)("div", {
                className: U.attachWrapper,
                children: (0, i.jsx)(T.Z, {
                    channel: F,
                    isOmniMenuOpen: "attachMenu" === eo,
                    openOmniMenu: () => es("attachMenu"),
                    enabled: ey,
                    animationContainerClassName: U.buttonAnimation,
                    glowClassName: U.buttonAnimationGlow,
                    trinketsClassName: U.buttonAnimationTrinkets,
                    children: ej,
                }),
            }),
        ],
    });
});
