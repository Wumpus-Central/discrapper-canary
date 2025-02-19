n.d(t, { Z: () => q }), n(47120), n(411104);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(704215),
    c = n(481060),
    u = n(53281),
    d = n(110924),
    p = n(40851),
    h = n(595519),
    f = n(620662),
    m = n(424602),
    g = n(924557),
    b = n(435064),
    _ = n(712114),
    C = n(540059),
    v = n(605236),
    y = n(536442),
    x = n(79390),
    j = n(216789),
    O = n(665906),
    N = n(706454),
    E = n(695346),
    P = n(433355),
    I = n(819640),
    S = n(375954),
    Z = n(496675),
    T = n(885110),
    A = n(627553),
    w = n(38761),
    R = n(585483),
    k = n(358085),
    M = n(127654),
    L = n(316595),
    D = n(193910),
    W = n(951211),
    U = n(981631),
    B = n(356659),
    F = n(921944),
    H = n(388032),
    G = n(301096);
function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
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
let q = i.memo(function (e) {
    var t, l;
    let q,
        { className: Y, channel: K, draftType: X, editorTextContent: J, setValue: Q, canOnlyUseTextCommands: $ } = e,
        ee = (0, p.bp)(),
        et = i.useRef(null),
        en = (0, a.e7)([T.Z], () => T.Z.getActivities()),
        er = (0, a.e7)([b.Z], () => b.Z.getSettings().clipsEnabled),
        ei = (0, a.e7)([b.Z], () => b.Z.getLastClipsSession()),
        el = (0, a.Wu)([b.Z], () => b.Z.getNewClipIds()),
        eo = (0, a.e7)([P.ZP], () => null == P.ZP.getCurrentSidebarChannelId(K.id)),
        { showClipsHeaderEntrypoint: ea } = g.NV.useExperiment({ location: 'ChannelAttachButton' }, { autoTrackExposure: !1 }),
        { enabled: es } = m.T.useExperiment({ location: 'ChannelAttachButton' }, { autoTrackExposure: !1 }),
        ec = (0, a.e7)([y.qc], () => y.qc.hasHotspot(y.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
        eu = (0, c.s9z)((e) => (0, c.DEQ)(e, B.Qr)),
        ed = (0, a.e7)([I.Z], () => I.Z.hasLayers()),
        ep = (0, a.e7)([b.Z], () => b.Z.hasClips()),
        [eh, ef] = i.useState(null),
        em = (0, g.Go)() && (er || ep),
        eg = K.isPrivate(),
        eb = (0, a.e7)([Z.Z], () => eg || (Z.Z.can(U.Plq.ATTACH_FILES, K) && Z.Z.can(U.Plq.SEND_MESSAGES, K))),
        e_ = ['en-US', 'en-GB'].includes((0, a.e7)([N.default], () => N.default.locale)) ? H.NW.string(H.t.d56gCQ) : H.NW.string(H.t.PdRCRk),
        eC = (0, d.Z)(ei);
    (null == eC ? void 0 : eC.newClipIds.length) !== (null == ei ? void 0 : ei.newClipIds.length) && (null !== (t = null == ei ? void 0 : ei.newClipIds.length) && void 0 !== t ? t : 0) > 0 && null == eh && ec && eo && !eu && !ea && !ed && ef('recentClips');
    let ev = (e, t, n) => {
            null != t && 'ETOOLARGE' === t.code
                ? (0, M.G)(K, [])
                : (0, M.d)(e, K, X, {
                      requireConfirm: !0,
                      showLargeMessageDialog: n
                  }),
                R.S.dispatchToLastSubscribed(U.CkL.TEXTAREA_FOCUS);
        },
        ey = (0, a.e7)([S.Z], () => S.Z.hasCurrentUserSentMessageSinceAppStart());
    function ex() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('2668'), n.e('47240')]).then(n.bind(n, 542055));
                return (t) => (0, r.jsx)(e, z(V({}, t), { channelId: K.id }));
            },
            { modalKey: B.Qr }
        ),
            ef(null);
    }
    i.useEffect(() => {
        let e = () => {
            var e;
            return null === (e = et.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
        };
        return (
            R.S.subscribe(U.CkL.UPLOAD_FILE, e),
            () => {
                R.S.unsubscribe(U.CkL.UPLOAD_FILE, e);
            }
        );
    });
    let ej = (0, O.NE)(K),
        eO = (0, O.Xu)(K),
        eN = !E.dN.useSetting() && !(0, k.isAndroidWeb)() && null != window.ResizeObserver,
        eE = (0, x.UI)(null != K ? K : void 0),
        eP = (0, c.bWb)().enabled,
        eI = (0, h.qB)(K.id, 'ChannelAttachButton'),
        eS = (0, j.Us)({ location: 'ChannelAttachButton' }),
        eZ = null !== (l = null == el ? void 0 : el.length) && void 0 !== l ? l : 0,
        eT = (0, W.Z)({
            canAttachFiles: eb,
            canStartThreads: ej || eO,
            useSlate: eN,
            hasClips: em,
            canUseApplicationCommands: !$ && !es,
            channel: K,
            activities: en,
            newClipsCount: eZ,
            canPostPolls: eE,
            canLaunchActivities: eI,
            appContext: ee,
            canSendScheduledMessages: eS
        }),
        eA = (0, C.Q3)('ChannelAttachButton'),
        ew = (0, C.R6)('ChannelAttachButton'),
        eR = (0, c.dQu)(c.TVs.modules.chat.INPUT_ICON_SIZE);
    if (0 === eT.length) return null;
    let ek = en.some((e) => (0, f.Z)(e, U.xjy.SYNC)),
        eM = en.some((e) => (0, f.Z)(e, U.xjy.JOIN) && !(0, f.Z)(e, U.xjy.EMBEDDED)) || ek;
    q = eP
        ? (0, r.jsx)(c.oFk, {
              size: eA ? 'refresh_sm' : void 0,
              color: 'currentColor',
              colorClass: G.attachButtonPlus
          })
        : eM
          ? (0, r.jsx)(w.Z, {
                className: G.__invalid_attachButtonIcon,
                foreground: G.attachButtonPlay,
                background: G.attachButtonPlus,
                width: eR,
                height: eR
            })
          : eZ > 0
            ? (0, r.jsx)(A.Z, {
                  className: G.__invalid_attachButtonIcon,
                  foreground: G.attachButtonClip,
                  background: G.attachButtonPlus,
                  width: eR,
                  height: eR
              })
            : (0, r.jsx)(c.oFk, {
                  size: 'md',
                  color: 'currentColor',
                  className: G.__invalid_attachButtonIcon,
                  colorClass: G.attachButtonPlus
              });
    let eL = eA
            ? ew
                ? {
                      left: 8,
                      right: 4,
                      top: 4,
                      bottom: 4
                  }
                : 8
            : void 0,
        eD = (0, r.jsx)(c.yRy, {
            shouldShow: null != eh,
            animation: c.yRy.Animation.NONE,
            align: 'recentClips' === eh ? 'center' : 'left',
            position: 'top',
            positionKey: null != eh ? eh : 'null',
            onRequestOpen: () => {
                ey && (0, v.EW)(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: F.L.TAKE_ACTION }), ef('attachMenu');
            },
            onRequestClose: () => {
                (0, c.$sL)() || (ey && (0, v.EW)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: F.L.TAKE_ACTION }), ef(null));
            },
            renderPopout: (e) => {
                switch (eh) {
                    case 'recentClips':
                        return (0, r.jsx)(
                            _.Z,
                            z(V({}, e), {
                                onOpenClips: ex,
                                lastClipsSession: ei
                            })
                        );
                    case 'attachMenu':
                        return (0, r.jsx)(
                            D.Z,
                            z(V({}, e), {
                                onClose: () => ef(null),
                                options: eT,
                                channel: K,
                                onFileUpload: () => {
                                    var e;
                                    return null === (e = et.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
                                },
                                draftType: X,
                                editorTextContent: J,
                                setValue: Q,
                                openClips: ex
                            })
                        );
                    default:
                        throw Error('Invalid popout type provided');
                }
            },
            children: (e) =>
                (0, r.jsx)(
                    c.zxk,
                    z(
                        V(
                            {
                                look: c.zxk.Looks.BLANK,
                                size: c.zxk.Sizes.NONE,
                                className: o()(G.attachButton, Y),
                                innerClassName: G.attachButtonInner,
                                'aria-label': e_,
                                onDoubleClick: eb
                                    ? () => {
                                          var e;
                                          return null === (e = et.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
                                      }
                                    : void 0,
                                focusProps: { offset: eL }
                            },
                            e
                        ),
                        { children: q }
                    )
                )
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: G.uploadInput,
                children: (0, r.jsx)(u.Z, {
                    ref: et,
                    onChange: (e) => {
                        ev(e.currentTarget.files, e.currentTarget.err), (e.currentTarget.value = '');
                    },
                    multiple: K.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    'aria-hidden': !0
                })
            }),
            (0, r.jsx)('div', {
                className: G.attachWrapper,
                children: (0, r.jsx)(L.Z, {
                    channel: K,
                    isOmniMenuOpen: 'attachMenu' === eh,
                    openOmniMenu: () => ef('attachMenu'),
                    enabled: eI,
                    animationContainerClassName: G.buttonAnimation,
                    glowClassName: G.buttonAnimationGlow,
                    trinketsClassName: G.buttonAnimationTrinkets,
                    children: eD
                })
            })
        ]
    });
});
