(n.d(t, { Z: () => G }), n(388685), n(415506));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(704215),
    c = n(755721),
    u = n(481060),
    d = n(53281),
    p = n(110924),
    h = n(40851),
    f = n(595519),
    m = n(338390),
    g = n(924557),
    b = n(435064),
    _ = n(712114),
    y = n(266454),
    C = n(536442),
    x = n(79390),
    v = n(216789),
    O = n(665906),
    j = n(695346),
    E = n(433355),
    S = n(819640),
    I = n(375954),
    P = n(496675),
    Z = n(885110),
    T = n(585483),
    N = n(358085),
    A = n(127654),
    w = n(316595),
    R = n(193910),
    M = n(951211),
    D = n(981631),
    k = n(356659),
    L = n(921944),
    U = n(388032),
    B = n(911777);
function F(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
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
let G = i.memo(function (e) {
    var t, l;
    let { className: G, channel: V, draftType: z, editorTextContent: W, setValue: Y, canOnlyUseTextCommands: q } = e,
        K = (0, h.bp)(),
        X = i.useRef(null),
        Q = i.useRef(null),
        J = (0, o.e7)([Z.Z], () => Z.Z.getActivities()),
        $ = (0, o.e7)([b.Z], () => b.Z.getSettings().clipsEnabled),
        ee = (0, o.e7)([b.Z], () => b.Z.getLastClipsSession()),
        et = (0, o.Wu)([b.Z], () => b.Z.getNewClipIds()),
        en = (0, o.e7)([E.ZP], () => null == E.ZP.getCurrentSidebarChannelId(V.id)),
        { showClipsHeaderEntrypoint: er } = g.NV.useExperiment({ location: 'ChannelAttachButton' }, { autoTrackExposure: !1 }),
        ei = (0, o.e7)([C.qc], () => C.qc.hasHotspot(C.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
        el = (0, u.s9z)((e) => (0, u.DEQ)(e, k.Qr)),
        ea = (0, o.e7)([S.Z], () => S.Z.hasLayers()),
        eo = (0, o.e7)([b.Z], () => b.Z.hasClips()),
        [es, ec] = i.useState(null),
        eu = (0, g.Go)() && ($ || eo),
        ed = V.isPrivate(),
        ep = (0, o.e7)([P.Z], () => ed || (P.Z.can(D.Plq.ATTACH_FILES, V) && P.Z.can(D.Plq.SEND_MESSAGES, V))),
        eh = (0, p.Z)(ee);
    (null == eh ? void 0 : eh.newClipIds.length) !== (null == ee ? void 0 : ee.newClipIds.length) && (null != (t = null == ee ? void 0 : ee.newClipIds.length) ? t : 0) > 0 && null == es && ei && en && !el && !er && !ea && ec('recentClips');
    let ef = (e, t, n) => {
            (null != t && 'ETOOLARGE' === t.code
                ? (0, A.G)(V, [])
                : (0, A.d)(e, V, z, {
                      requireConfirm: !0,
                      showLargeMessageDialog: n
                  }),
                T.S.dispatchToLastSubscribed(D.CkL.TEXTAREA_FOCUS));
        },
        em = (0, o.e7)([I.Z], () => I.Z.hasCurrentUserSentMessageSinceAppStart());
    function eg() {
        ((0, u.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('2668'), n.e('72739')]).then(n.bind(n, 542055));
                return (t) => (0, r.jsx)(e, H(F({}, t), { channelId: V.id }));
            },
            { modalKey: k.Qr }
        ),
            ec(null));
    }
    i.useEffect(() => {
        let e = () => {
            var e;
            return null == (e = X.current) ? void 0 : e.activateUploadDialogue();
        };
        return (
            T.S.subscribe(D.CkL.UPLOAD_FILE, e),
            () => {
                T.S.unsubscribe(D.CkL.UPLOAD_FILE, e);
            }
        );
    });
    let eb = (0, O.NE)(V),
        e_ = (0, O.Xu)(V),
        ey = !j.dN.useSetting() && !(0, N.isAndroidWeb)() && null != window.ResizeObserver,
        eC = (0, x.UI)(null != V ? V : void 0),
        ex = (0, f.qB)(),
        ev = (0, v.Us)({ location: 'ChannelAttachButton' }),
        eO = null != (l = null == et ? void 0 : et.length) ? l : 0,
        ej = (0, M.Z)({
            canAttachFiles: ep,
            canStartThreads: eb || e_,
            useSlate: ey,
            hasClips: eu,
            canUseApplicationCommands: !q,
            channel: V,
            activities: J,
            newClipsCount: eO,
            canPostPolls: eC,
            canLaunchActivities: ex,
            appContext: K,
            canSendScheduledMessages: ev
        }),
        eE = (0, m.Z)('ChannelAttachButton');
    if (0 === ej.length) return null;
    let eS = 'refresh_sm',
        eI = eE
            ? (0, r.jsx)(u.svS, {
                  size: eS,
                  color: 'currentColor',
                  colorClass: B.attachButtonPlus
              })
            : (0, r.jsx)(u.oFk, {
                  size: eS,
                  color: 'currentColor',
                  colorClass: B.attachButtonPlus
              }),
        eP = (0, r.jsx)(u.yRy, {
            targetElementRef: Q,
            shouldShow: null != es,
            animation: u.yRy.Animation.NONE,
            align: 'recentClips' === es ? 'center' : 'left',
            position: 'top',
            positionKey: null != es ? es : 'null',
            onRequestOpen: () => {
                (em && (0, y.Q3)(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: L.L.TAKE_ACTION }), ec('attachMenu'));
            },
            onRequestClose: () => {
                (0, u.$sL)() || (em && (0, y.Q3)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: L.L.TAKE_ACTION }), ec(null));
            },
            renderPopout: (e) => {
                switch (es) {
                    case 'recentClips':
                        return (0, r.jsx)(
                            _.Z,
                            H(F({}, e), {
                                onOpenClips: eg,
                                lastClipsSession: ee
                            })
                        );
                    case 'attachMenu':
                        return (0, r.jsx)(
                            R.Z,
                            H(F({}, e), {
                                onClose: () => ec(null),
                                options: ej,
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
                    c.zx,
                    H(
                        F(
                            {
                                buttonRef: Q,
                                look: c.zx.Looks.BLANK,
                                size: c.zx.Sizes.NONE,
                                className: a()(B.attachButton, G),
                                innerClassName: B.attachButtonInner,
                                'aria-label': U.intl.string(U.t.d56gCQ),
                                onDoubleClick: ep
                                    ? () => {
                                          var e;
                                          return null == (e = X.current) ? void 0 : e.activateUploadDialogue();
                                      }
                                    : void 0,
                                focusProps: { offset: 8 }
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
                className: B.uploadInput,
                children: (0, r.jsx)(d.Z, {
                    ref: X,
                    onChange: (e) => {
                        (ef(e.currentTarget.files, e.currentTarget.err), (e.currentTarget.value = ''));
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
                    children: eP
                })
            })
        ]
    });
});
