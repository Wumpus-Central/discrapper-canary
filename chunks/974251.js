n(47120), n(411104);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    C = n(435064),
    x = n(712114),
    v = n(540059),
    _ = n(605236),
    I = n(536442),
    E = n(79390),
    b = n(665906),
    Z = n(706454),
    N = n(695346),
    S = n(433355),
    T = n(819640),
    j = n(375954),
    A = n(496675),
    y = n(885110),
    P = n(627553),
    M = n(38761),
    R = n(585483),
    L = n(358085),
    k = n(127654),
    O = n(316595),
    D = n(193910),
    w = n(951211),
    B = n(981631),
    U = n(356659),
    H = n(921944),
    G = n(388032),
    F = n(406843);
t.Z = l.memo(function (e) {
    var t, r;
    let V,
        { className: z, channel: W, draftType: K, editorTextContent: Y, setValue: q, canOnlyUseTextCommands: X } = e,
        J = (0, h.bp)(),
        Q = l.useRef(null),
        $ = (0, s.e7)([y.Z], () => y.Z.getActivities()),
        ee = (0, s.e7)([C.Z], () => C.Z.getSettings().clipsEnabled),
        et = (0, s.e7)([C.Z], () => C.Z.getLastClipsSession()),
        en = (0, s.Wu)([C.Z], () => C.Z.getNewClipIds()),
        ei = (0, s.e7)([S.ZP], () => null == S.ZP.getCurrentSidebarChannelId(W.id)),
        { showClipsHeaderEntrypoint: el } = g.NV.useExperiment({ location: 'ChannelAttachButton' }, { autoTrackExposure: !1 }),
        { enabled: er } = f.T.useExperiment({ location: 'ChannelAttachButton' }, { autoTrackExposure: !1 }),
        ea = (0, s.e7)([I.qc], () => I.qc.hasHotspot(I.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
        es = (0, c.useModalsStore)((e) => (0, c.hasModalOpenSelector)(e, U.Qr)),
        eo = (0, s.e7)([T.Z], () => T.Z.hasLayers()),
        ec = (0, s.e7)([C.Z], () => C.Z.hasClips()),
        [ed, eu] = l.useState(null),
        eh = (0, g.Go)() && (ee || ec),
        ep = W.isPrivate(),
        em = (0, s.e7)([A.Z], () => ep || (A.Z.can(B.Plq.ATTACH_FILES, W) && A.Z.can(B.Plq.SEND_MESSAGES, W))),
        ef = (0, s.e7)([Z.default], () => Z.default.locale),
        eg = ['en-US', 'en-GB'].includes(ef) ? G.intl.string(G.t.d56gCQ) : G.intl.string(G.t.PdRCRk),
        eC = (0, u.Z)(et);
    (null == eC ? void 0 : eC.newClipIds.length) !== (null == et ? void 0 : et.newClipIds.length) && (null !== (t = null == et ? void 0 : et.newClipIds.length) && void 0 !== t ? t : 0) > 0 && null == ed && ea && ei && !es && !el && !eo && eu('recentClips');
    let ex = (e, t, n) => {
            null != t && 'ETOOLARGE' === t.code
                ? (0, k.G)(W, [])
                : (0, k.d)(e, W, K, {
                      requireConfirm: !0,
                      showLargeMessageDialog: n
                  }),
                R.S.dispatchToLastSubscribed(B.CkL.TEXTAREA_FOCUS);
        },
        ev = (0, s.e7)([j.Z], () => j.Z.hasCurrentUserSentMessageSinceAppStart());
    function e_() {
        (0, c.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e('2668'), n.e('75272')]).then(n.bind(n, 542055));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        channelId: W.id
                    });
            },
            { modalKey: U.Qr }
        ),
            eu(null);
    }
    l.useEffect(() => {
        let e = () => {
            var e;
            return null === (e = Q.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
        };
        return (
            R.S.subscribe(B.CkL.UPLOAD_FILE, e),
            () => {
                R.S.unsubscribe(B.CkL.UPLOAD_FILE, e);
            }
        );
    });
    let eI = (0, b.NE)(W),
        eE = (0, b.Xu)(W),
        eb = !N.dN.useSetting() && !(0, L.isAndroidWeb)() && null != window.ResizeObserver,
        eZ = (0, E.UI)(null != W ? W : void 0),
        eN = (0, c.useRedesignIconContext)().enabled,
        eS = (0, p.qB)(W.id, 'ChannelAttachButton'),
        eT = null !== (r = null == en ? void 0 : en.length) && void 0 !== r ? r : 0,
        ej = (0, w.Z)({
            canAttachFiles: em,
            canStartThreads: eI || eE,
            useSlate: eb,
            hasClips: eh,
            canUseApplicationCommands: !X && !er,
            channel: W,
            activities: $,
            newClipsCount: eT,
            canPostPolls: eZ,
            canLaunchActivities: eS,
            appContext: J
        }),
        eA = (0, v.Q3)('ChannelAttachButton'),
        ey = (0, c.useToken)(c.tokens.modules.chat.INPUT_ICON_SIZE);
    if (0 === ej.length) return null;
    let eP = $.some((e) => (0, m.Z)(e, B.xjy.SYNC)),
        eM = $.some((e) => (0, m.Z)(e, B.xjy.JOIN) && !(0, m.Z)(e, B.xjy.EMBEDDED)) || eP;
    V = eN
        ? (0, i.jsx)(c.CirclePlusIcon, {
              size: eA ? 'refresh_sm' : void 0,
              color: 'currentColor',
              colorClass: F.attachButtonPlus
          })
        : eM
          ? (0, i.jsx)(M.Z, {
                className: F.__invalid_attachButtonIcon,
                foreground: F.attachButtonPlay,
                background: F.attachButtonPlus,
                width: ey,
                height: ey
            })
          : eT > 0
            ? (0, i.jsx)(P.Z, {
                  className: F.__invalid_attachButtonIcon,
                  foreground: F.attachButtonClip,
                  background: F.attachButtonPlus,
                  width: ey,
                  height: ey
              })
            : (0, i.jsx)(c.CirclePlusIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: F.__invalid_attachButtonIcon,
                  colorClass: F.attachButtonPlus
              });
    let eR = (0, i.jsx)(c.Popout, {
        shouldShow: null != ed,
        animation: c.Popout.Animation.NONE,
        align: 'recentClips' === ed ? 'center' : 'left',
        position: 'top',
        positionKey: null != ed ? ed : 'null',
        onRequestOpen: () => {
            ev && (0, _.EW)(o.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: H.L.TAKE_ACTION }), eu('attachMenu');
        },
        onRequestClose: () => {
            !(0, c.hasAnyModalOpen)() && (ev && (0, _.EW)(o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: H.L.TAKE_ACTION }), eu(null));
        },
        renderPopout: (e) => {
            switch (ed) {
                case 'recentClips':
                    return (0, i.jsx)(x.Z, {
                        ...e,
                        onOpenClips: e_,
                        lastClipsSession: et
                    });
                case 'attachMenu':
                    return (0, i.jsx)(D.Z, {
                        ...e,
                        onClose: () => eu(null),
                        options: ej,
                        channel: W,
                        onFileUpload: () => {
                            var e;
                            return null === (e = Q.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
                        },
                        draftType: K,
                        editorTextContent: Y,
                        setValue: q,
                        openClips: e_
                    });
                default:
                    throw Error('Invalid popout type provided');
            }
        },
        children: (e) =>
            (0, i.jsx)(c.Button, {
                look: c.Button.Looks.BLANK,
                size: c.Button.Sizes.NONE,
                className: a()(F.attachButton, z),
                innerClassName: F.attachButtonInner,
                'aria-label': eg,
                onDoubleClick: em
                    ? () => {
                          var e;
                          return null === (e = Q.current) || void 0 === e ? void 0 : e.activateUploadDialogue();
                      }
                    : void 0,
                ...e,
                children: V
            })
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: F.uploadInput,
                children: (0, i.jsx)(d.Z, {
                    ref: Q,
                    onChange: (e) => {
                        ex(e.currentTarget.files, e.currentTarget.err), (e.currentTarget.value = '');
                    },
                    multiple: W.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    'aria-hidden': !0
                })
            }),
            (0, i.jsx)('div', {
                className: F.attachWrapper,
                children: (0, i.jsx)(O.Z, {
                    channel: W,
                    isOmniMenuOpen: 'attachMenu' === ed,
                    openOmniMenu: () => eu('attachMenu'),
                    enabled: eS,
                    animationContainerClassName: F.buttonAnimation,
                    glowClassName: F.buttonAnimationGlow,
                    trinketsClassName: F.buttonAnimationTrinkets,
                    children: eR
                })
            })
        ]
    });
});
