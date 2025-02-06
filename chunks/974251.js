n.d(t, { Z: () => z }), n(47120), n(411104);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(704215),
    c = n(481060),
    d = n(53281),
    u = n(110924),
    h = n(40851),
    p = n(595519),
    m = n(620662),
    f = n(424602),
    g = n(924557),
    _ = n(435064),
    C = n(712114),
    x = n(540059),
    v = n(605236),
    E = n(536442),
    I = n(79390),
    b = n(216789),
    Z = n(665906),
    N = n(706454),
    T = n(695346),
    S = n(433355),
    j = n(819640),
    y = n(375954),
    A = n(496675),
    P = n(885110),
    R = n(627553),
    M = n(38761),
    L = n(585483),
    k = n(358085),
    O = n(127654),
    D = n(316595),
    w = n(193910),
    U = n(951211),
    B = n(981631),
    F = n(356659),
    H = n(921944),
    G = n(388032),
    V = n(406843);
let z = l.memo(function (e) {
    var t, a;
    let z,
        { className: W, channel: Y, draftType: q, editorTextContent: K, setValue: X, canOnlyUseTextCommands: Q } = e,
        J = (0, h.bp)(),
        $ = l.useRef(null),
        ee = (0, s.e7)([P.Z], () => P.Z.getActivities()),
        et = (0, s.e7)([_.Z], () => _.Z.getSettings().clipsEnabled),
        en = (0, s.e7)([_.Z], () => _.Z.getLastClipsSession()),
        ei = (0, s.Wu)([_.Z], () => _.Z.getNewClipIds()),
        el = (0, s.e7)([S.ZP], () => null == S.ZP.getCurrentSidebarChannelId(Y.id)),
        { showClipsHeaderEntrypoint: ea } = g.NV.useExperiment({ location: 'ChannelAttachButton' }, { autoTrackExposure: !1 }),
        { enabled: er } = f.T.useExperiment({ location: 'ChannelAttachButton' }, { autoTrackExposure: !1 }),
        es = (0, s.e7)([E.qc], () => E.qc.hasHotspot(E.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
        eo = (0, c.s9z)((e) => (0, c.DEQ)(e, F.Qr)),
        ec = (0, s.e7)([j.Z], () => j.Z.hasLayers()),
        ed = (0, s.e7)([_.Z], () => _.Z.hasClips()),
        [eu, eh] = l.useState(null),
        ep = (0, g.Go)() && (et || ed),
        em = Y.isPrivate(),
        ef = (0, s.e7)([A.Z], () => em || (A.Z.can(B.Plq.ATTACH_FILES, Y) && A.Z.can(B.Plq.SEND_MESSAGES, Y))),
        eg = ['en-US', 'en-GB'].includes((0, s.e7)([N.default], () => N.default.locale)) ? G.intl.string(G.t.d56gCQ) : G.intl.string(G.t.PdRCRk),
        e_ = (0, u.Z)(en);
    (null == e_ ? void 0 : e_.newClipIds.length) !== (null == en ? void 0 : en.newClipIds.length) && (null !== (t = null == en ? void 0 : en.newClipIds.length) && void 0 !== t ? t : 0) > 0 && null == eu && es && el && !eo && !ea && !ec && eh('recentClips');
    let eC = (e, t, n) => {
            null != t && 'ETOOLARGE' === t.code
                ? (0, O.G)(Y, [])
                : (0, O.d)(e, Y, q, {
                      requireConfirm: !0,
                      showLargeMessageDialog: n
                  }),
                L.S.dispatchToLastSubscribed(B.CkL.TEXTAREA_FOCUS);
        },
        ex = (0, s.e7)([y.Z], () => y.Z.hasCurrentUserSentMessageSinceAppStart());
    function ev() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('2668'), n.e('75272')]).then(n.bind(n, 542055));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        channelId: Y.id
                    });
            },
            { modalKey: F.Qr }
        ),
            eh(null);
    }
    l.useEffect(() => {
        let e = () => {
            var e;
            return null === (e = $.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
        };
        return (
            L.S.subscribe(B.CkL.UPLOAD_FILE, e),
            () => {
                L.S.unsubscribe(B.CkL.UPLOAD_FILE, e);
            }
        );
    });
    let eE = (0, Z.NE)(Y),
        eI = (0, Z.Xu)(Y),
        eb = !T.dN.useSetting() && !(0, k.isAndroidWeb)() && null != window.ResizeObserver,
        eZ = (0, I.UI)(null != Y ? Y : void 0),
        eN = (0, c.bWb)().enabled,
        eT = (0, p.qB)(Y.id, 'ChannelAttachButton'),
        eS = (0, b.Us)({ location: 'ChannelAttachButton' }),
        ej = null !== (a = null == ei ? void 0 : ei.length) && void 0 !== a ? a : 0,
        ey = (0, U.Z)({
            canAttachFiles: ef,
            canStartThreads: eE || eI,
            useSlate: eb,
            hasClips: ep,
            canUseApplicationCommands: !Q && !er,
            channel: Y,
            activities: ee,
            newClipsCount: ej,
            canPostPolls: eZ,
            canLaunchActivities: eT,
            appContext: J,
            canSendScheduledMessages: eS
        }),
        eA = (0, x.Q3)('ChannelAttachButton'),
        eP = (0, x.R6)('ChannelAttachButton'),
        eR = (0, c.dQu)(c.TVs.modules.chat.INPUT_ICON_SIZE);
    if (0 === ey.length) return null;
    let eM = ee.some((e) => (0, m.Z)(e, B.xjy.SYNC)),
        eL = ee.some((e) => (0, m.Z)(e, B.xjy.JOIN) && !(0, m.Z)(e, B.xjy.EMBEDDED)) || eM;
    z = eN
        ? (0, i.jsx)(c.oFk, {
              size: eA ? 'refresh_sm' : void 0,
              color: 'currentColor',
              colorClass: V.attachButtonPlus
          })
        : eL
          ? (0, i.jsx)(M.Z, {
                className: V.__invalid_attachButtonIcon,
                foreground: V.attachButtonPlay,
                background: V.attachButtonPlus,
                width: eR,
                height: eR
            })
          : ej > 0
            ? (0, i.jsx)(R.Z, {
                  className: V.__invalid_attachButtonIcon,
                  foreground: V.attachButtonClip,
                  background: V.attachButtonPlus,
                  width: eR,
                  height: eR
              })
            : (0, i.jsx)(c.oFk, {
                  size: 'md',
                  color: 'currentColor',
                  className: V.__invalid_attachButtonIcon,
                  colorClass: V.attachButtonPlus
              });
    let ek = eA
            ? eP
                ? {
                      left: 8,
                      right: 4,
                      top: 4,
                      bottom: 4
                  }
                : 8
            : void 0,
        eO = (0, i.jsx)(c.yRy, {
            shouldShow: null != eu,
            animation: c.yRy.Animation.NONE,
            align: 'recentClips' === eu ? 'center' : 'left',
            position: 'top',
            positionKey: null != eu ? eu : 'null',
            onRequestOpen: () => {
                ex && (0, v.EW)(o.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: H.L.TAKE_ACTION }), eh('attachMenu');
            },
            onRequestClose: () => {
                (0, c.$sL)() || (ex && (0, v.EW)(o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: H.L.TAKE_ACTION }), eh(null));
            },
            renderPopout: (e) => {
                switch (eu) {
                    case 'recentClips':
                        return (0, i.jsx)(C.Z, {
                            ...e,
                            onOpenClips: ev,
                            lastClipsSession: en
                        });
                    case 'attachMenu':
                        return (0, i.jsx)(w.Z, {
                            ...e,
                            onClose: () => eh(null),
                            options: ey,
                            channel: Y,
                            onFileUpload: () => {
                                var e;
                                return null === (e = $.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
                            },
                            draftType: q,
                            editorTextContent: K,
                            setValue: X,
                            openClips: ev
                        });
                    default:
                        throw Error('Invalid popout type provided');
                }
            },
            children: (e) =>
                (0, i.jsx)(c.zxk, {
                    look: c.zxk.Looks.BLANK,
                    size: c.zxk.Sizes.NONE,
                    className: r()(V.attachButton, W),
                    innerClassName: V.attachButtonInner,
                    'aria-label': eg,
                    onDoubleClick: ef
                        ? () => {
                              var e;
                              return null === (e = $.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
                          }
                        : void 0,
                    focusProps: { offset: ek },
                    ...e,
                    children: z
                })
        });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: V.uploadInput,
                children: (0, i.jsx)(d.Z, {
                    ref: $,
                    onChange: (e) => {
                        eC(e.currentTarget.files, e.currentTarget.err), (e.currentTarget.value = '');
                    },
                    multiple: Y.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    'aria-hidden': !0
                })
            }),
            (0, i.jsx)('div', {
                className: V.attachWrapper,
                children: (0, i.jsx)(D.Z, {
                    channel: Y,
                    isOmniMenuOpen: 'attachMenu' === eu,
                    openOmniMenu: () => eh('attachMenu'),
                    enabled: eT,
                    animationContainerClassName: V.buttonAnimation,
                    glowClassName: V.buttonAnimationGlow,
                    trinketsClassName: V.buttonAnimationTrinkets,
                    children: eO
                })
            })
        ]
    });
});
