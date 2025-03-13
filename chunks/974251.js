n.d(t, { Z: () => z }), n(47120), n(411104);
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
    E = n(695346),
    N = n(433355),
    I = n(819640),
    P = n(375954),
    S = n(496675),
    Z = n(885110),
    T = n(627553),
    A = n(38761),
    w = n(585483),
    R = n(358085),
    M = n(127654),
    k = n(316595),
    L = n(193910),
    D = n(951211),
    W = n(981631),
    U = n(356659),
    B = n(921944),
    H = n(388032),
    F = n(29779);
function G(e) {
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
let z = i.memo(function (e) {
    var t, l;
    let z,
        { className: Y, channel: q, draftType: K, editorTextContent: X, setValue: Q, canOnlyUseTextCommands: J } = e,
        $ = (0, p.bp)(),
        ee = i.useRef(null),
        et = (0, a.e7)([Z.Z], () => Z.Z.getActivities()),
        en = (0, a.e7)([b.Z], () => b.Z.getSettings().clipsEnabled),
        er = (0, a.e7)([b.Z], () => b.Z.getLastClipsSession()),
        ei = (0, a.Wu)([b.Z], () => b.Z.getNewClipIds()),
        el = (0, a.e7)([N.ZP], () => null == N.ZP.getCurrentSidebarChannelId(q.id)),
        { showClipsHeaderEntrypoint: eo } = g.NV.useExperiment({ location: 'ChannelAttachButton' }, { autoTrackExposure: !1 }),
        { enabled: ea } = m.T.useExperiment({ location: 'ChannelAttachButton' }, { autoTrackExposure: !1 }),
        es = (0, a.e7)([y.qc], () => y.qc.hasHotspot(y.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
        ec = (0, c.s9z)((e) => (0, c.DEQ)(e, U.Qr)),
        eu = (0, a.e7)([I.Z], () => I.Z.hasLayers()),
        ed = (0, a.e7)([b.Z], () => b.Z.hasClips()),
        [ep, eh] = i.useState(null),
        ef = (0, g.Go)() && (en || ed),
        em = q.isPrivate(),
        eg = (0, a.e7)([S.Z], () => em || (S.Z.can(W.Plq.ATTACH_FILES, q) && S.Z.can(W.Plq.SEND_MESSAGES, q))),
        eb = (0, d.Z)(er);
    (null == eb ? void 0 : eb.newClipIds.length) !== (null == er ? void 0 : er.newClipIds.length) && (null !== (t = null == er ? void 0 : er.newClipIds.length) && void 0 !== t ? t : 0) > 0 && null == ep && es && el && !ec && !eo && !eu && eh('recentClips');
    let e_ = (e, t, n) => {
            null != t && 'ETOOLARGE' === t.code
                ? (0, M.G)(q, [])
                : (0, M.d)(e, q, K, {
                      requireConfirm: !0,
                      showLargeMessageDialog: n
                  }),
                w.S.dispatchToLastSubscribed(W.CkL.TEXTAREA_FOCUS);
        },
        eC = (0, a.e7)([P.Z], () => P.Z.hasCurrentUserSentMessageSinceAppStart());
    function ev() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('2668'), n.e('27003')]).then(n.bind(n, 542055));
                return (t) => (0, r.jsx)(e, V(G({}, t), { channelId: q.id }));
            },
            { modalKey: U.Qr }
        ),
            eh(null);
    }
    i.useEffect(() => {
        let e = () => {
            var e;
            return null === (e = ee.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
        };
        return (
            w.S.subscribe(W.CkL.UPLOAD_FILE, e),
            () => {
                w.S.unsubscribe(W.CkL.UPLOAD_FILE, e);
            }
        );
    });
    let ey = (0, O.NE)(q),
        ex = (0, O.Xu)(q),
        ej = !E.dN.useSetting() && !(0, R.isAndroidWeb)() && null != window.ResizeObserver,
        eO = (0, x.UI)(null != q ? q : void 0),
        eE = (0, c.bWb)().enabled,
        eN = (0, h.qB)(q.id, 'ChannelAttachButton'),
        eI = (0, j.Us)({ location: 'ChannelAttachButton' }),
        eP = null !== (l = null == ei ? void 0 : ei.length) && void 0 !== l ? l : 0,
        eS = (0, D.Z)({
            canAttachFiles: eg,
            canStartThreads: ey || ex,
            useSlate: ej,
            hasClips: ef,
            canUseApplicationCommands: !J && !ea,
            channel: q,
            activities: et,
            newClipsCount: eP,
            canPostPolls: eO,
            canLaunchActivities: eN,
            appContext: $,
            canSendScheduledMessages: eI
        }),
        eZ = (0, C.Q3)('ChannelAttachButton'),
        eT = (0, C.R6)('ChannelAttachButton'),
        eA = (0, c.dQu)(c.TVs.modules.chat.INPUT_ICON_SIZE);
    if (0 === eS.length) return null;
    let ew = et.some((e) => (0, f.Z)(e, W.xjy.SYNC)),
        eR = et.some((e) => (0, f.Z)(e, W.xjy.JOIN) && !(0, f.Z)(e, W.xjy.EMBEDDED)) || ew;
    z = eE
        ? (0, r.jsx)(c.oFk, {
              size: eZ ? 'refresh_sm' : void 0,
              color: 'currentColor',
              colorClass: F.attachButtonPlus
          })
        : eR
          ? (0, r.jsx)(A.Z, {
                className: F.__invalid_attachButtonIcon,
                foreground: F.attachButtonPlay,
                background: F.attachButtonPlus,
                width: eA,
                height: eA
            })
          : eP > 0
            ? (0, r.jsx)(T.Z, {
                  className: F.__invalid_attachButtonIcon,
                  foreground: F.attachButtonClip,
                  background: F.attachButtonPlus,
                  width: eA,
                  height: eA
              })
            : (0, r.jsx)(c.oFk, {
                  size: 'md',
                  color: 'currentColor',
                  className: F.__invalid_attachButtonIcon,
                  colorClass: F.attachButtonPlus
              });
    let eM = eZ
            ? eT
                ? {
                      left: 8,
                      right: 4,
                      top: 4,
                      bottom: 4
                  }
                : 8
            : void 0,
        ek = (0, r.jsx)(c.yRy, {
            shouldShow: null != ep,
            animation: c.yRy.Animation.NONE,
            align: 'recentClips' === ep ? 'center' : 'left',
            position: 'top',
            positionKey: null != ep ? ep : 'null',
            onRequestOpen: () => {
                eC && (0, v.EW)(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: B.L.TAKE_ACTION }), eh('attachMenu');
            },
            onRequestClose: () => {
                (0, c.$sL)() || (eC && (0, v.EW)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: B.L.TAKE_ACTION }), eh(null));
            },
            renderPopout: (e) => {
                switch (ep) {
                    case 'recentClips':
                        return (0, r.jsx)(
                            _.Z,
                            V(G({}, e), {
                                onOpenClips: ev,
                                lastClipsSession: er
                            })
                        );
                    case 'attachMenu':
                        return (0, r.jsx)(
                            L.Z,
                            V(G({}, e), {
                                onClose: () => eh(null),
                                options: eS,
                                channel: q,
                                onFileUpload: () => {
                                    var e;
                                    return null === (e = ee.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
                                },
                                draftType: K,
                                editorTextContent: X,
                                setValue: Q,
                                openClips: ev
                            })
                        );
                    default:
                        throw Error('Invalid popout type provided');
                }
            },
            children: (e) =>
                (0, r.jsx)(
                    c.zxk,
                    V(
                        G(
                            {
                                look: c.zxk.Looks.BLANK,
                                size: c.zxk.Sizes.NONE,
                                className: o()(F.attachButton, Y),
                                innerClassName: F.attachButtonInner,
                                'aria-label': H.NW.string(H.t.d56gCQ),
                                onDoubleClick: eg
                                    ? () => {
                                          var e;
                                          return null === (e = ee.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
                                      }
                                    : void 0,
                                focusProps: { offset: eM }
                            },
                            e
                        ),
                        { children: z }
                    )
                )
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: F.uploadInput,
                children: (0, r.jsx)(u.Z, {
                    ref: ee,
                    onChange: (e) => {
                        e_(e.currentTarget.files, e.currentTarget.err), (e.currentTarget.value = '');
                    },
                    multiple: q.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    'aria-hidden': !0
                })
            }),
            (0, r.jsx)('div', {
                className: F.attachWrapper,
                children: (0, r.jsx)(k.Z, {
                    channel: q,
                    isOmniMenuOpen: 'attachMenu' === ep,
                    openOmniMenu: () => eh('attachMenu'),
                    enabled: eN,
                    animationContainerClassName: F.buttonAnimation,
                    glowClassName: F.buttonAnimationGlow,
                    trinketsClassName: F.buttonAnimationTrinkets,
                    children: ek
                })
            })
        ]
    });
});
