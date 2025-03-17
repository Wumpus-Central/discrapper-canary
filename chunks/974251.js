n.d(t, { Z: () => V }), n(47120), n(411104);
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
    m = n(924557),
    g = n(435064),
    b = n(712114),
    _ = n(540059),
    C = n(605236),
    v = n(536442),
    y = n(79390),
    x = n(216789),
    j = n(665906),
    O = n(695346),
    E = n(433355),
    N = n(819640),
    I = n(375954),
    P = n(496675),
    S = n(885110),
    Z = n(627553),
    T = n(38761),
    A = n(585483),
    w = n(358085),
    R = n(127654),
    M = n(316595),
    k = n(193910),
    L = n(951211),
    D = n(981631),
    W = n(356659),
    U = n(921944),
    B = n(388032),
    H = n(29779);
function F(e) {
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
function G(e, t) {
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
let V = i.memo(function (e) {
    var t, l;
    let V,
        { className: z, channel: Y, draftType: q, editorTextContent: K, setValue: X, canOnlyUseTextCommands: Q } = e,
        J = (0, p.bp)(),
        $ = i.useRef(null),
        ee = (0, a.e7)([S.Z], () => S.Z.getActivities()),
        et = (0, a.e7)([g.Z], () => g.Z.getSettings().clipsEnabled),
        en = (0, a.e7)([g.Z], () => g.Z.getLastClipsSession()),
        er = (0, a.Wu)([g.Z], () => g.Z.getNewClipIds()),
        ei = (0, a.e7)([E.ZP], () => null == E.ZP.getCurrentSidebarChannelId(Y.id)),
        { showClipsHeaderEntrypoint: el } = m.NV.useExperiment({ location: 'ChannelAttachButton' }, { autoTrackExposure: !1 }),
        eo = (0, a.e7)([v.qc], () => v.qc.hasHotspot(v.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
        ea = (0, c.s9z)((e) => (0, c.DEQ)(e, W.Qr)),
        es = (0, a.e7)([N.Z], () => N.Z.hasLayers()),
        ec = (0, a.e7)([g.Z], () => g.Z.hasClips()),
        [eu, ed] = i.useState(null),
        ep = (0, m.Go)() && (et || ec),
        eh = Y.isPrivate(),
        ef = (0, a.e7)([P.Z], () => eh || (P.Z.can(D.Plq.ATTACH_FILES, Y) && P.Z.can(D.Plq.SEND_MESSAGES, Y))),
        em = (0, d.Z)(en);
    (null == em ? void 0 : em.newClipIds.length) !== (null == en ? void 0 : en.newClipIds.length) && (null !== (t = null == en ? void 0 : en.newClipIds.length) && void 0 !== t ? t : 0) > 0 && null == eu && eo && ei && !ea && !el && !es && ed('recentClips');
    let eg = (e, t, n) => {
            null != t && 'ETOOLARGE' === t.code
                ? (0, R.G)(Y, [])
                : (0, R.d)(e, Y, q, {
                      requireConfirm: !0,
                      showLargeMessageDialog: n
                  }),
                A.S.dispatchToLastSubscribed(D.CkL.TEXTAREA_FOCUS);
        },
        eb = (0, a.e7)([I.Z], () => I.Z.hasCurrentUserSentMessageSinceAppStart());
    function e_() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('2668'), n.e('27003')]).then(n.bind(n, 542055));
                return (t) => (0, r.jsx)(e, G(F({}, t), { channelId: Y.id }));
            },
            { modalKey: W.Qr }
        ),
            ed(null);
    }
    i.useEffect(() => {
        let e = () => {
            var e;
            return null === (e = $.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
        };
        return (
            A.S.subscribe(D.CkL.UPLOAD_FILE, e),
            () => {
                A.S.unsubscribe(D.CkL.UPLOAD_FILE, e);
            }
        );
    });
    let eC = (0, j.NE)(Y),
        ev = (0, j.Xu)(Y),
        ey = !O.dN.useSetting() && !(0, w.isAndroidWeb)() && null != window.ResizeObserver,
        ex = (0, y.UI)(null != Y ? Y : void 0),
        ej = (0, c.bWb)().enabled,
        eO = (0, h.qB)(),
        eE = (0, x.Us)({ location: 'ChannelAttachButton' }),
        eN = null !== (l = null == er ? void 0 : er.length) && void 0 !== l ? l : 0,
        eI = (0, L.Z)({
            canAttachFiles: ef,
            canStartThreads: eC || ev,
            useSlate: ey,
            hasClips: ep,
            canUseApplicationCommands: !Q,
            channel: Y,
            activities: ee,
            newClipsCount: eN,
            canPostPolls: ex,
            canLaunchActivities: eO,
            appContext: J,
            canSendScheduledMessages: eE
        }),
        eP = (0, _.Q3)('ChannelAttachButton'),
        eS = (0, _.R6)('ChannelAttachButton'),
        eZ = (0, c.dQu)(c.TVs.modules.chat.INPUT_ICON_SIZE);
    if (0 === eI.length) return null;
    let eT = ee.some((e) => (0, f.Z)(e, D.xjy.SYNC)),
        eA = ee.some((e) => (0, f.Z)(e, D.xjy.JOIN) && !(0, f.Z)(e, D.xjy.EMBEDDED)) || eT;
    V = ej
        ? (0, r.jsx)(c.oFk, {
              size: eP ? 'refresh_sm' : void 0,
              color: 'currentColor',
              colorClass: H.attachButtonPlus
          })
        : eA
          ? (0, r.jsx)(T.Z, {
                className: H.__invalid_attachButtonIcon,
                foreground: H.attachButtonPlay,
                background: H.attachButtonPlus,
                width: eZ,
                height: eZ
            })
          : eN > 0
            ? (0, r.jsx)(Z.Z, {
                  className: H.__invalid_attachButtonIcon,
                  foreground: H.attachButtonClip,
                  background: H.attachButtonPlus,
                  width: eZ,
                  height: eZ
              })
            : (0, r.jsx)(c.oFk, {
                  size: 'md',
                  color: 'currentColor',
                  className: H.__invalid_attachButtonIcon,
                  colorClass: H.attachButtonPlus
              });
    let ew = eP
            ? eS
                ? {
                      left: 8,
                      right: 4,
                      top: 4,
                      bottom: 4
                  }
                : 8
            : void 0,
        eR = (0, r.jsx)(c.yRy, {
            shouldShow: null != eu,
            animation: c.yRy.Animation.NONE,
            align: 'recentClips' === eu ? 'center' : 'left',
            position: 'top',
            positionKey: null != eu ? eu : 'null',
            onRequestOpen: () => {
                eb && (0, C.EW)(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: U.L.TAKE_ACTION }), ed('attachMenu');
            },
            onRequestClose: () => {
                (0, c.$sL)() || (eb && (0, C.EW)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: U.L.TAKE_ACTION }), ed(null));
            },
            renderPopout: (e) => {
                switch (eu) {
                    case 'recentClips':
                        return (0, r.jsx)(
                            b.Z,
                            G(F({}, e), {
                                onOpenClips: e_,
                                lastClipsSession: en
                            })
                        );
                    case 'attachMenu':
                        return (0, r.jsx)(
                            k.Z,
                            G(F({}, e), {
                                onClose: () => ed(null),
                                options: eI,
                                channel: Y,
                                onFileUpload: () => {
                                    var e;
                                    return null === (e = $.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
                                },
                                draftType: q,
                                editorTextContent: K,
                                setValue: X,
                                openClips: e_
                            })
                        );
                    default:
                        throw Error('Invalid popout type provided');
                }
            },
            children: (e) =>
                (0, r.jsx)(
                    c.zxk,
                    G(
                        F(
                            {
                                look: c.zxk.Looks.BLANK,
                                size: c.zxk.Sizes.NONE,
                                className: o()(H.attachButton, z),
                                innerClassName: H.attachButtonInner,
                                'aria-label': B.NW.string(B.t.d56gCQ),
                                onDoubleClick: ef
                                    ? () => {
                                          var e;
                                          return null === (e = $.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
                                      }
                                    : void 0,
                                focusProps: { offset: ew }
                            },
                            e
                        ),
                        { children: V }
                    )
                )
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: H.uploadInput,
                children: (0, r.jsx)(u.Z, {
                    ref: $,
                    onChange: (e) => {
                        eg(e.currentTarget.files, e.currentTarget.err), (e.currentTarget.value = '');
                    },
                    multiple: Y.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    'aria-hidden': !0
                })
            }),
            (0, r.jsx)('div', {
                className: H.attachWrapper,
                children: (0, r.jsx)(M.Z, {
                    channel: Y,
                    isOmniMenuOpen: 'attachMenu' === eu,
                    openOmniMenu: () => ed('attachMenu'),
                    enabled: eO,
                    animationContainerClassName: H.buttonAnimation,
                    glowClassName: H.buttonAnimationGlow,
                    trinketsClassName: H.buttonAnimationTrinkets,
                    children: eR
                })
            })
        ]
    });
});
