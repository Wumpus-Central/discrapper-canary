n.d(t, { Z: () => F }), n(388685), n(415506);
var r = n(255367),
    i = n(73800),
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
    b = n(540059),
    _ = n(605236),
    x = n(536442),
    y = n(79390),
    C = n(216789),
    v = n(665906),
    j = n(695346),
    O = n(433355),
    E = n(819640),
    I = n(375954),
    P = n(496675),
    S = n(885110),
    Z = n(585483),
    N = n(358085),
    T = n(127654),
    A = n(316595),
    w = n(193910),
    R = n(951211),
    k = n(981631),
    M = n(356659),
    L = n(921944),
    D = n(388032),
    U = n(911777);
function B(e) {
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
let F = i.memo(function (e) {
    var t, l;
    let { className: F, channel: H, draftType: V, editorTextContent: z, setValue: W, canOnlyUseTextCommands: Y } = e,
        q = (0, p.bp)(),
        K = i.useRef(null),
        X = i.useRef(null),
        Q = (0, o.e7)([S.Z], () => S.Z.getActivities()),
        J = (0, o.e7)([m.Z], () => m.Z.getSettings().clipsEnabled),
        $ = (0, o.e7)([m.Z], () => m.Z.getLastClipsSession()),
        ee = (0, o.Wu)([m.Z], () => m.Z.getNewClipIds()),
        et = (0, o.e7)([O.ZP], () => null == O.ZP.getCurrentSidebarChannelId(H.id)),
        { showClipsHeaderEntrypoint: en } = f.NV.useExperiment({ location: 'ChannelAttachButton' }, { autoTrackExposure: !1 }),
        er = (0, o.e7)([x.qc], () => x.qc.hasHotspot(x.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
        ei = (0, c.s9z)((e) => (0, c.DEQ)(e, M.Qr)),
        el = (0, o.e7)([E.Z], () => E.Z.hasLayers()),
        ea = (0, o.e7)([m.Z], () => m.Z.hasClips()),
        [eo, es] = i.useState(null),
        ec = (0, f.Go)() && (J || ea),
        eu = H.isPrivate(),
        ed = (0, o.e7)([P.Z], () => eu || (P.Z.can(k.Plq.ATTACH_FILES, H) && P.Z.can(k.Plq.SEND_MESSAGES, H))),
        ep = (0, d.Z)($);
    (null == ep ? void 0 : ep.newClipIds.length) !== (null == $ ? void 0 : $.newClipIds.length) && (null != (t = null == $ ? void 0 : $.newClipIds.length) ? t : 0) > 0 && null == eo && er && et && !ei && !en && !el && es('recentClips');
    let eh = (e, t, n) => {
            null != t && 'ETOOLARGE' === t.code
                ? (0, T.G)(H, [])
                : (0, T.d)(e, H, V, {
                      requireConfirm: !0,
                      showLargeMessageDialog: n
                  }),
                Z.S.dispatchToLastSubscribed(k.CkL.TEXTAREA_FOCUS);
        },
        ef = (0, o.e7)([I.Z], () => I.Z.hasCurrentUserSentMessageSinceAppStart());
    function em() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('2668'), n.e('71248')]).then(n.bind(n, 542055));
                return (t) => (0, r.jsx)(e, G(B({}, t), { channelId: H.id }));
            },
            { modalKey: M.Qr }
        ),
            es(null);
    }
    i.useEffect(() => {
        let e = () => {
            var e;
            return null == (e = K.current) ? void 0 : e.activateUploadDialogue();
        };
        return (
            Z.S.subscribe(k.CkL.UPLOAD_FILE, e),
            () => {
                Z.S.unsubscribe(k.CkL.UPLOAD_FILE, e);
            }
        );
    });
    let eg = (0, v.NE)(H),
        eb = (0, v.Xu)(H),
        e_ = !j.dN.useSetting() && !(0, N.isAndroidWeb)() && null != window.ResizeObserver,
        ex = (0, y.UI)(null != H ? H : void 0),
        ey = (0, h.qB)(),
        eC = (0, C.Us)({ location: 'ChannelAttachButton' }),
        ev = null != (l = null == ee ? void 0 : ee.length) ? l : 0,
        ej = (0, R.Z)({
            canAttachFiles: ed,
            canStartThreads: eg || eb,
            useSlate: e_,
            hasClips: ec,
            canUseApplicationCommands: !Y,
            channel: H,
            activities: Q,
            newClipsCount: ev,
            canPostPolls: ex,
            canLaunchActivities: ey,
            appContext: q,
            canSendScheduledMessages: eC
        }),
        eO = (0, b.Q3)('ChannelAttachButton'),
        eE = (0, b.R6)('ChannelAttachButton');
    if (0 === ej.length) return null;
    let eI = (0, r.jsx)(c.oFk, {
            size: eO ? 'refresh_sm' : void 0,
            color: 'currentColor',
            colorClass: U.attachButtonPlus
        }),
        eP = eO
            ? eE
                ? {
                      left: 12,
                      right: 6,
                      top: 0,
                      bottom: 0
                  }
                : 8
            : void 0,
        eS = (0, r.jsx)(c.yRy, {
            targetElementRef: X,
            shouldShow: null != eo,
            animation: c.yRy.Animation.NONE,
            align: 'recentClips' === eo ? 'center' : 'left',
            position: 'top',
            positionKey: null != eo ? eo : 'null',
            onRequestOpen: () => {
                ef && (0, _.EW)(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: L.L.TAKE_ACTION }), es('attachMenu');
            },
            onRequestClose: () => {
                (0, c.$sL)() || (ef && (0, _.EW)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: L.L.TAKE_ACTION }), es(null));
            },
            renderPopout: (e) => {
                switch (eo) {
                    case 'recentClips':
                        return (0, r.jsx)(
                            g.Z,
                            G(B({}, e), {
                                onOpenClips: em,
                                lastClipsSession: $
                            })
                        );
                    case 'attachMenu':
                        return (0, r.jsx)(
                            w.Z,
                            G(B({}, e), {
                                onClose: () => es(null),
                                options: ej,
                                channel: H,
                                onFileUpload: () => {
                                    var e;
                                    return null == (e = K.current) ? void 0 : e.activateUploadDialogue();
                                },
                                draftType: V,
                                editorTextContent: z,
                                setValue: W,
                                openClips: em
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
                        B(
                            {
                                buttonRef: X,
                                look: c.zxk.Looks.BLANK,
                                size: c.zxk.Sizes.NONE,
                                className: a()(U.attachButton, F),
                                innerClassName: U.attachButtonInner,
                                'aria-label': D.intl.string(D.t.d56gCQ),
                                onDoubleClick: ed
                                    ? () => {
                                          var e;
                                          return null == (e = K.current) ? void 0 : e.activateUploadDialogue();
                                      }
                                    : void 0,
                                focusProps: { offset: eP }
                            },
                            e
                        ),
                        { children: eI }
                    )
                )
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: U.uploadInput,
                children: (0, r.jsx)(u.Z, {
                    ref: K,
                    onChange: (e) => {
                        eh(e.currentTarget.files, e.currentTarget.err), (e.currentTarget.value = '');
                    },
                    multiple: H.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    'aria-hidden': !0
                })
            }),
            (0, r.jsx)('div', {
                className: U.attachWrapper,
                children: (0, r.jsx)(A.Z, {
                    channel: H,
                    isOmniMenuOpen: 'attachMenu' === eo,
                    openOmniMenu: () => es('attachMenu'),
                    enabled: ey,
                    animationContainerClassName: U.buttonAnimation,
                    glowClassName: U.buttonAnimationGlow,
                    trinketsClassName: U.buttonAnimationTrinkets,
                    children: eS
                })
            })
        ]
    });
});
