(n.d(t, { Z: () => W }), n(388685), n(415506));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(704215),
    c = n(481060),
    u = n(53281),
    d = n(110924),
    f = n(40851),
    _ = n(595519),
    p = n(338390),
    h = n(924557),
    m = n(435064),
    g = n(712114),
    E = n(266454),
    b = n(536442),
    y = n(79390),
    O = n(216789),
    v = n(665906),
    I = n(695346),
    T = n(433355),
    S = n(819640),
    A = n(375954),
    N = n(496675),
    C = n(885110),
    w = n(585483),
    R = n(358085),
    P = n(127654),
    D = n(316595),
    L = n(443603),
    x = n(193910),
    k = n(951211),
    j = n(981631),
    M = n(356659),
    U = n(921944),
    G = n(388032),
    B = n(911777);
function Z(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
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
                Z(e, t, n[t]);
            }));
    }
    return e;
}
function V(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Y(e) {
    var t, a;
    let { className: Z, channel: V, draftType: Y, editorTextContent: W, setValue: K, canOnlyUseTextCommands: z } = e,
        q = (0, f.bp)(),
        $ = i.useRef(null),
        X = i.useRef(null),
        Q = (0, s.e7)([C.Z], () => C.Z.getActivities()),
        J = (0, s.e7)([m.Z], () => m.Z.getSettings().clipsEnabled),
        ee = (0, s.e7)([m.Z], () => m.Z.getLastClipsSession()),
        et = (0, s.Wu)([m.Z], () => m.Z.getNewClipIds()),
        en = (0, s.e7)([T.ZP], () => null == T.ZP.getCurrentSidebarChannelId(V.id)),
        { showClipsHeaderEntrypoint: er } = h.NV.useExperiment({ location: 'ChannelAttachButton' }, { autoTrackExposure: !1 }),
        ei = (0, s.e7)([b.qc], () => b.qc.hasHotspot(b.v6.CLIPS_CHANNEL_ATTACH_REMINDER)),
        ea = (0, c.s9z)((e) => (0, c.DEQ)(e, M.Qr)),
        eo = (0, s.e7)([S.Z], () => S.Z.hasLayers()),
        es = (0, s.e7)([m.Z], () => m.Z.hasClips()),
        [el, ec] = i.useState(null),
        eu = (0, h.Go)() && (J || es),
        ed = V.isPrivate(),
        ef = (0, s.e7)([N.Z], () => ed || (N.Z.can(j.Plq.ATTACH_FILES, V) && N.Z.can(j.Plq.SEND_MESSAGES, V))),
        e_ = (0, d.Z)(ee);
    (null == e_ ? void 0 : e_.newClipIds.length) !== (null == ee ? void 0 : ee.newClipIds.length) && (null != (t = null == ee ? void 0 : ee.newClipIds.length) ? t : 0) > 0 && null == el && ei && en && !ea && !er && !eo && ec('recentClips');
    let ep = (e, t, n) => {
            (null != t && 'ETOOLARGE' === t.code
                ? (0, P.G)(V, [])
                : (0, P.d)(e, V, Y, {
                      requireConfirm: !0,
                      showLargeMessageDialog: n,
                      origin: 'file_picker'
                  }),
                w.S.dispatchToLastSubscribed(j.CkL.TEXTAREA_FOCUS));
        },
        eh = (e) => {
            (ep(e.currentTarget.files, e.currentTarget.err), (e.currentTarget.value = ''));
        },
        em = (0, s.e7)([A.Z], () => A.Z.hasCurrentUserSentMessageSinceAppStart());
    function eg() {
        ((0, c.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('2668'), n.e('72739')]).then(n.bind(n, 542055));
                return (t) => (0, r.jsx)(e, H(F({}, t), { channelId: V.id }));
            },
            { modalKey: M.Qr }
        ),
            ec(null));
    }
    i.useEffect(() => {
        let e = () => {
            var e;
            return null == (e = $.current) ? void 0 : e.activateUploadDialogue();
        };
        return (
            w.S.subscribe(j.CkL.UPLOAD_FILE, e),
            () => {
                w.S.unsubscribe(j.CkL.UPLOAD_FILE, e);
            }
        );
    });
    let eE = (0, v.NE)(V),
        eb = (0, v.Xu)(V),
        ey = eE || eb,
        eO = !I.dN.useSetting() && !(0, R.isAndroidWeb)() && null != window.ResizeObserver,
        ev = !z,
        eI = (0, y.UI)(null != V ? V : void 0),
        eT = (0, _.qB)(),
        eS = (0, O.Us)({ location: 'ChannelAttachButton' }),
        eA = null != (a = null == et ? void 0 : et.length) ? a : 0,
        eN = (0, k.Z)({
            canAttachFiles: ef,
            canStartThreads: ey,
            useSlate: eO,
            hasClips: eu,
            canUseApplicationCommands: ev,
            channel: V,
            activities: Q,
            newClipsCount: eA,
            canPostPolls: eI,
            canLaunchActivities: eT,
            appContext: q,
            canSendScheduledMessages: eS
        }),
        eC = (0, p.Z)('ChannelAttachButton');
    if (0 === eN.length) return null;
    let ew = 'refresh_sm',
        eR = eC
            ? (0, r.jsx)(c.svS, {
                  size: ew,
                  color: 'currentColor',
                  colorClass: B.attachButtonPlus
              })
            : (0, r.jsx)(c.oFk, {
                  size: ew,
                  color: 'currentColor',
                  colorClass: B.attachButtonPlus
              }),
        eP = (0, r.jsx)(c.yRy, {
            targetElementRef: X,
            shouldShow: null != el,
            animation: c.yRy.Animation.NONE,
            align: 'recentClips' === el ? 'center' : 'left',
            position: 'top',
            positionKey: null != el ? el : 'null',
            onRequestOpen: () => {
                (em && (0, E.Q3)(l.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: U.L.TAKE_ACTION }), ec('attachMenu'));
            },
            onRequestClose: () => {
                (0, c.$sL)() || (em && (0, E.Q3)(l.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: U.L.TAKE_ACTION }), ec(null));
            },
            renderPopout: (e) => {
                switch (el) {
                    case 'recentClips':
                        return (0, r.jsx)(
                            g.Z,
                            H(F({}, e), {
                                onOpenClips: eg,
                                lastClipsSession: ee
                            })
                        );
                    case 'attachMenu':
                        return (0, r.jsx)(
                            x.Z,
                            H(F({}, e), {
                                onClose: () => ec(null),
                                options: eN,
                                channel: V,
                                onFileUpload: () => {
                                    var e;
                                    return null == (e = $.current) ? void 0 : e.activateUploadDialogue();
                                },
                                draftType: Y,
                                editorTextContent: W,
                                setValue: K,
                                openClips: eg
                            })
                        );
                    default:
                        throw Error('Invalid popout type provided');
                }
            },
            children: (e) =>
                (0, r.jsx)(
                    L.Z,
                    H(
                        F(
                            {
                                ref: X,
                                className: o()(B.attachButton, Z),
                                childClassName: B.attachButtonInner,
                                isActive: !1,
                                'aria-label': G.intl.string(G.t.d56gCQ),
                                onDoubleClick: ef
                                    ? () => {
                                          var e;
                                          return null == (e = $.current) ? void 0 : e.activateUploadDialogue();
                                      }
                                    : void 0,
                                'aria-haspopup': 'menu'
                            },
                            e
                        ),
                        { children: eR }
                    )
                )
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: B.uploadInput,
                children: (0, r.jsx)(u.Z, {
                    ref: $,
                    onChange: eh,
                    multiple: V.rateLimitPerUser <= 0,
                    tabIndex: -1,
                    'aria-hidden': !0
                })
            }),
            (0, r.jsx)('div', {
                className: B.attachWrapper,
                children: (0, r.jsx)(D.Z, {
                    channel: V,
                    isOmniMenuOpen: 'attachMenu' === el,
                    openOmniMenu: () => ec('attachMenu'),
                    enabled: eT,
                    animationContainerClassName: B.buttonAnimation,
                    glowClassName: B.buttonAnimationGlow,
                    trinketsClassName: B.buttonAnimationTrinkets,
                    children: eP
                })
            })
        ]
    });
}
let W = i.memo(Y);
