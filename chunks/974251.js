n.d(t, { Z: () => H }), n(388685), n(415506);
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
    f = n(338390),
    m = n(924557),
    g = n(435064),
    b = n(712114),
    _ = n(540059),
    y = n(605236),
    C = n(536442),
    x = n(79390),
    v = n(216789),
    j = n(665906),
    O = n(695346),
    E = n(433355),
    I = n(819640),
    P = n(375954),
    S = n(496675),
    Z = n(885110),
    N = n(585483),
    T = n(358085),
    A = n(127654),
    w = n(316595),
    R = n(193910),
    M = n(951211),
    k = n(981631),
    L = n(356659),
    D = n(921944),
    U = n(388032),
    B = n(911777);
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
let H = i.memo(function (e) {
    var t, l;
    let { className: H, channel: V, draftType: z, editorTextContent: W, setValue: Y, canOnlyUseTextCommands: q } = e,
        K = (0, p.bp)(),
        X = i.useRef(null),
        Q = i.useRef(null),
        J = (0, o.e7)([Z.Z], () => Z.Z.getActivities()),
        $ = (0, o.e7)([g.Z], () => g.Z.getSettings().clipsEnabled),
        ee = (0, o.e7)([g.Z], () => g.Z.getLastClipsSession()),
        et = (0, o.Wu)([g.Z], () => g.Z.getNewClipIds()),
        en = (0, o.e7)([E.ZP], () => null == E.ZP.getCurrentSidebarChannelId(V.id)),
        { showClipsHeaderEntrypoint: er } = m.NV.useExperiment({ location: 'ChannelAttachButton' }, { autoTrackExposure: !1 }),
        ei = (0, o.e7)([C.qc], () => C.qc.hasHotspot(C.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
        el = (0, c.s9z)((e) => (0, c.DEQ)(e, L.Qr)),
        ea = (0, o.e7)([I.Z], () => I.Z.hasLayers()),
        eo = (0, o.e7)([g.Z], () => g.Z.hasClips()),
        [es, ec] = i.useState(null),
        eu = (0, m.Go)() && ($ || eo),
        ed = V.isPrivate(),
        ep = (0, o.e7)([S.Z], () => ed || (S.Z.can(k.Plq.ATTACH_FILES, V) && S.Z.can(k.Plq.SEND_MESSAGES, V))),
        eh = (0, d.Z)(ee);
    (null == eh ? void 0 : eh.newClipIds.length) !== (null == ee ? void 0 : ee.newClipIds.length) && (null != (t = null == ee ? void 0 : ee.newClipIds.length) ? t : 0) > 0 && null == es && ei && en && !el && !er && !ea && ec('recentClips');
    let ef = (e, t, n) => {
            null != t && 'ETOOLARGE' === t.code
                ? (0, A.G)(V, [])
                : (0, A.d)(e, V, z, {
                      requireConfirm: !0,
                      showLargeMessageDialog: n
                  }),
                N.S.dispatchToLastSubscribed(k.CkL.TEXTAREA_FOCUS);
        },
        em = (0, o.e7)([P.Z], () => P.Z.hasCurrentUserSentMessageSinceAppStart());
    function eg() {
        (0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('2668'), n.e('71248')]).then(n.bind(n, 542055));
                return (t) => (0, r.jsx)(e, G(F({}, t), { channelId: V.id }));
            },
            { modalKey: L.Qr }
        ),
            ec(null);
    }
    i.useEffect(() => {
        let e = () => {
            var e;
            return null == (e = X.current) ? void 0 : e.activateUploadDialogue();
        };
        return (
            N.S.subscribe(k.CkL.UPLOAD_FILE, e),
            () => {
                N.S.unsubscribe(k.CkL.UPLOAD_FILE, e);
            }
        );
    });
    let eb = (0, j.NE)(V),
        e_ = (0, j.Xu)(V),
        ey = !O.dN.useSetting() && !(0, T.isAndroidWeb)() && null != window.ResizeObserver,
        eC = (0, x.UI)(null != V ? V : void 0),
        ex = (0, h.qB)(),
        ev = (0, v.Us)({ location: 'ChannelAttachButton' }),
        ej = null != (l = null == et ? void 0 : et.length) ? l : 0,
        eO = (0, M.Z)({
            canAttachFiles: ep,
            canStartThreads: eb || e_,
            useSlate: ey,
            hasClips: eu,
            canUseApplicationCommands: !q,
            channel: V,
            activities: J,
            newClipsCount: ej,
            canPostPolls: eC,
            canLaunchActivities: ex,
            appContext: K,
            canSendScheduledMessages: ev
        }),
        eE = (0, _.Q3)('ChannelAttachButton'),
        eI = (0, _.R6)('ChannelAttachButton'),
        eP = (0, f.Z)('ChannelAttachButton');
    if (0 === eO.length) return null;
    let eS = eE ? 'refresh_sm' : void 0,
        eZ = eP
            ? (0, r.jsx)(c.svS, {
                  size: eS,
                  color: 'currentColor',
                  colorClass: B.attachButtonPlus
              })
            : (0, r.jsx)(c.oFk, {
                  size: eS,
                  color: 'currentColor',
                  colorClass: B.attachButtonPlus
              }),
        eN = eE
            ? eI
                ? {
                      left: 12,
                      right: 6,
                      top: 0,
                      bottom: 0
                  }
                : 8
            : void 0,
        eT = (0, r.jsx)(c.yRy, {
            targetElementRef: Q,
            shouldShow: null != es,
            animation: c.yRy.Animation.NONE,
            align: 'recentClips' === es ? 'center' : 'left',
            position: 'top',
            positionKey: null != es ? es : 'null',
            onRequestOpen: () => {
                em && (0, y.EW)(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: D.L.TAKE_ACTION }), ec('attachMenu');
            },
            onRequestClose: () => {
                (0, c.$sL)() || (em && (0, y.EW)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: D.L.TAKE_ACTION }), ec(null));
            },
            renderPopout: (e) => {
                switch (es) {
                    case 'recentClips':
                        return (0, r.jsx)(
                            b.Z,
                            G(F({}, e), {
                                onOpenClips: eg,
                                lastClipsSession: ee
                            })
                        );
                    case 'attachMenu':
                        return (0, r.jsx)(
                            R.Z,
                            G(F({}, e), {
                                onClose: () => ec(null),
                                options: eO,
                                channel: V,
                                onFileUpload: () => {
                                    var e;
                                    return null == (e = X.current) ? void 0 : e.activateUploadDialogue();
                                },
                                draftType: z,
                                editorTextContent: W,
                                setValue: Y,
                                openClips: eg
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
                                buttonRef: Q,
                                look: c.zxk.Looks.BLANK,
                                size: c.zxk.Sizes.NONE,
                                className: a()(B.attachButton, H),
                                innerClassName: B.attachButtonInner,
                                'aria-label': U.intl.string(U.t.d56gCQ),
                                onDoubleClick: ep
                                    ? () => {
                                          var e;
                                          return null == (e = X.current) ? void 0 : e.activateUploadDialogue();
                                      }
                                    : void 0,
                                focusProps: { offset: eN }
                            },
                            e
                        ),
                        { children: eZ }
                    )
                )
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: B.uploadInput,
                children: (0, r.jsx)(u.Z, {
                    ref: X,
                    onChange: (e) => {
                        ef(e.currentTarget.files, e.currentTarget.err), (e.currentTarget.value = '');
                    },
                    multiple: V.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    'aria-hidden': !0
                })
            }),
            (0, r.jsx)('div', {
                className: B.attachWrapper,
                children: (0, r.jsx)(w.Z, {
                    channel: V,
                    isOmniMenuOpen: 'attachMenu' === es,
                    openOmniMenu: () => ec('attachMenu'),
                    enabled: ex,
                    animationContainerClassName: B.buttonAnimation,
                    glowClassName: B.buttonAnimationGlow,
                    trinketsClassName: B.buttonAnimationTrinkets,
                    children: eT
                })
            })
        ]
    });
});
