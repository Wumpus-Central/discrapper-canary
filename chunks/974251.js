(n.d(t, { Z: () => G }), n(388685), n(415506));
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
    _ = n(266454),
    y = n(536442),
    C = n(79390),
    x = n(216789),
    v = n(665906),
    j = n(695346),
    O = n(433355),
    E = n(819640),
    S = n(375954),
    P = n(496675),
    I = n(885110),
    Z = n(585483),
    T = n(358085),
    N = n(127654),
    A = n(316595),
    w = n(443603),
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
        K = (0, p.bp)(),
        X = i.useRef(null),
        Q = i.useRef(null),
        J = (0, o.e7)([I.Z], () => I.Z.getActivities()),
        $ = (0, o.e7)([g.Z], () => g.Z.getSettings().clipsEnabled),
        ee = (0, o.e7)([g.Z], () => g.Z.getLastClipsSession()),
        et = (0, o.Wu)([g.Z], () => g.Z.getNewClipIds()),
        en = (0, o.e7)([O.ZP], () => null == O.ZP.getCurrentSidebarChannelId(V.id)),
        { showClipsHeaderEntrypoint: er } = m.NV.useExperiment({ location: 'ChannelAttachButton' }, { autoTrackExposure: !1 }),
        ei = (0, o.e7)([y.qc], () => y.qc.hasHotspot(y.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
        el = (0, c.s9z)((e) => (0, c.DEQ)(e, k.Qr)),
        ea = (0, o.e7)([E.Z], () => E.Z.hasLayers()),
        eo = (0, o.e7)([g.Z], () => g.Z.hasClips()),
        [es, ec] = i.useState(null),
        eu = (0, m.Go)() && ($ || eo),
        ed = V.isPrivate(),
        ep = (0, o.e7)([P.Z], () => ed || (P.Z.can(D.Plq.ATTACH_FILES, V) && P.Z.can(D.Plq.SEND_MESSAGES, V))),
        eh = (0, d.Z)(ee);
    (null == eh ? void 0 : eh.newClipIds.length) !== (null == ee ? void 0 : ee.newClipIds.length) && (null != (t = null == ee ? void 0 : ee.newClipIds.length) ? t : 0) > 0 && null == es && ei && en && !el && !er && !ea && ec('recentClips');
    let ef = (e, t, n) => {
            (null != t && 'ETOOLARGE' === t.code
                ? (0, N.G)(V, [])
                : (0, N.d)(e, V, z, {
                      requireConfirm: !0,
                      showLargeMessageDialog: n
                  }),
                Z.S.dispatchToLastSubscribed(D.CkL.TEXTAREA_FOCUS));
        },
        em = (0, o.e7)([S.Z], () => S.Z.hasCurrentUserSentMessageSinceAppStart());
    function eg() {
        ((0, c.ZDy)(
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
            Z.S.subscribe(D.CkL.UPLOAD_FILE, e),
            () => {
                Z.S.unsubscribe(D.CkL.UPLOAD_FILE, e);
            }
        );
    });
    let eb = (0, v.NE)(V),
        e_ = (0, v.Xu)(V),
        ey = !j.dN.useSetting() && !(0, T.isAndroidWeb)() && null != window.ResizeObserver,
        eC = (0, C.UI)(null != V ? V : void 0),
        ex = (0, h.qB)(),
        ev = (0, x.Us)({ location: 'ChannelAttachButton' }),
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
        eE = (0, f.Z)('ChannelAttachButton');
    if (0 === eO.length) return null;
    let eS = 'refresh_sm',
        eP = eE
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
        eI = (0, r.jsx)(c.yRy, {
            targetElementRef: Q,
            shouldShow: null != es,
            animation: c.yRy.Animation.NONE,
            align: 'recentClips' === es ? 'center' : 'left',
            position: 'top',
            positionKey: null != es ? es : 'null',
            onRequestOpen: () => {
                (em && (0, _.Q3)(s.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: L.L.TAKE_ACTION }), ec('attachMenu'));
            },
            onRequestClose: () => {
                (0, c.$sL)() || (em && (0, _.Q3)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: L.L.TAKE_ACTION }), ec(null));
            },
            renderPopout: (e) => {
                switch (es) {
                    case 'recentClips':
                        return (0, r.jsx)(
                            b.Z,
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
                    w.Z,
                    H(
                        F(
                            {
                                ref: Q,
                                className: a()(B.attachButton, G),
                                childClassName: B.attachButtonInner,
                                isActive: !1,
                                'aria-label': U.intl.string(U.t.d56gCQ),
                                onDoubleClick: ep
                                    ? () => {
                                          var e;
                                          return null == (e = X.current) ? void 0 : e.activateUploadDialogue();
                                      }
                                    : void 0,
                                'aria-haspopup': 'menu'
                            },
                            e
                        ),
                        { children: eP }
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
                        (ef(e.currentTarget.files, e.currentTarget.err), (e.currentTarget.value = ''));
                    },
                    multiple: V.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    'aria-hidden': !0
                })
            }),
            (0, r.jsx)('div', {
                className: B.attachWrapper,
                children: (0, r.jsx)(A.Z, {
                    channel: V,
                    isOmniMenuOpen: 'attachMenu' === es,
                    openOmniMenu: () => ec('attachMenu'),
                    enabled: ex,
                    animationContainerClassName: B.buttonAnimation,
                    glowClassName: B.buttonAnimationGlow,
                    trinketsClassName: B.buttonAnimationTrinkets,
                    children: eI
                })
            })
        ]
    });
});
