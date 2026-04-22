n.d(t, { A: () => K }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n.n(l),
    r = n(311907),
    o = n(827734),
    d = n(990078),
    u = n(512950),
    c = n(834730),
    g = n(691885),
    m = n(452027),
    _ = n(408278),
    A = n(241326),
    h = n(243721),
    p = n(404778),
    x = n(885574),
    E = n(821609),
    T = n(331322),
    S = n(270003),
    f = n(475358),
    b = n(97260),
    C = n(117178),
    v = n(512513),
    N = n(915967),
    I = n(775121),
    y = n(734066),
    j = n(880144),
    O = n(680243),
    R = n(843401),
    L = n(430452),
    D = n(532624),
    P = n(975571),
    G = n(723702),
    M = n(350535),
    U = n(331969),
    k = n(173332),
    w = n(652215),
    V = n(650583),
    B = n(985018),
    F = n(802247),
    z = n(818050);
function H(e) {
    let { children: t } = e;
    return t([N.Q_.MESSAGE, N.Q_.NAVIGATION, N.Q_.DND, N.Q_.CHAT, N.Q_.VOICE_AND_VIDEO, N.Q_.MISCELLANEOUS]);
}
class Y extends s.PureComponent {
    handleActionChanged = (e) => {
        b.A.setKeybind({ ...this.props.keybind, action: e });
    };
    handleShortcutChange = (e) => {
        b.A.setKeybind({ ...this.props.keybind, shortcut: e });
    };
    handleDeleteKeybind = () => {
        b.A.deleteKeybind(this.props.keybind.id);
    };
    handleEnableDisable = () => {
        let { keybind: e } = this.props;
        b.A.setKeybind({ ...this.props.keybind, enabled: !e.enabled });
    };
    renderMessage() {
        let { keybind: e } = this.props,
            t = M.dI(e.shortcut);
        return I.A.hasBind(t)
            ? (0, i.jsx)(u.p, { messageType: u.Y.ERROR, children: B.intl.string(B.t["7lQlw3"]) })
            : V.Yy.has(t)
              ? (0, i.jsx)(u.p, {
                    messageType: u.Y.ERROR,
                    children: B.intl.format(B.t.MOIaNd, {
                        keyboardNavArticle: P.A.getArticleURL(w.MVz.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, i.jsx)(c.E, {
                    variant: "text-md/normal",
                    className: F.qD,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, i.jsxs)("div", {
            className: F.YI,
            children: [
                (0, i.jsxs)("div", {
                    className: F.PO,
                    children: [
                        (0, i.jsx)("div", {
                            className: F.AS,
                            children: (0, i.jsx)(g.l, {
                                selectionMode: "single",
                                label: B.intl.string(B.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onSelectionChange: this.handleActionChanged,
                                disabled: e,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: F.AS,
                            children: (0, i.jsx)(m.D, {
                                label: B.intl.string(B.t["1La4tC"]),
                                children: (0, i.jsx)(C.A, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            (0, i.jsx)("div", {
                                className: F.d9,
                                children: (0, i.jsx)(_.K, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: A.u,
                                    "aria-label": B.intl.string(B.t.qEHmmB),
                                }),
                            }),
                        (0, i.jsx)("div", {
                            className: F.ZW,
                            children: (0, i.jsx)(d.m, {
                                text: B.intl.string(B.t.uCD7qK),
                                children: (0, i.jsx)("div", {
                                    children: (0, i.jsx)(h.d, { checked: t, onChange: this.handleEnableDisable }),
                                }),
                            }),
                        }),
                    ],
                }),
                this.renderMessage(),
                this.renderExtraSettings(),
            ],
        });
    }
    renderExtraSettings() {
        let { action: e } = this.props.keybind;
        return e === w.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, i.jsx)(U.A, { keybind: this.props.keybind }) : void 0;
    }
}
class X extends s.PureComponent {
    get keybindActionTypes() {
        let {
                overlaySupported: e,
                canGoLive: t,
                allowSoundboard: n,
                enableClips: i,
                enableScreenshotKeybind: s,
            } = this.props,
            l = [
                { id: "unassigned", value: w.hCu.UNASSIGNED, label: B.intl.string(B.t["0Uh579"]) },
                { id: "push-to-talk", value: w.hCu.PUSH_TO_TALK, label: B.intl.string(B.t.Y5lgTP) },
                { id: "push-to-talk-priority", value: w.hCu.PUSH_TO_TALK_PRIORITY, label: B.intl.string(B.t.DkSwJ2) },
                { id: "push-to-mute", value: w.hCu.PUSH_TO_MUTE, label: B.intl.string(B.t.hSCRqd) },
                { id: "vad-priority", value: w.hCu.VAD_PRIORITY, label: B.intl.string(B.t["49d6Nd"]) },
                { id: "toggle-mute", value: w.hCu.TOGGLE_MUTE, label: B.intl.string(B.t.PlkYKD) },
                { id: "toggle-deafen", value: w.hCu.TOGGLE_DEAFEN, label: B.intl.string(B.t.NvGq1K) },
                { id: "toggle-voice-mode", value: w.hCu.TOGGLE_VOICE_MODE, label: B.intl.string(B.t.Wa5H9S) },
                { id: "toggle-streamer-mode", value: w.hCu.TOGGLE_STREAMER_MODE, label: B.intl.string(B.t.BK0Ncc) },
                { id: "toggle-camera", value: w.hCu.TOGGLE_CAMERA, label: B.intl.string(B.t.hf8JVT) },
            ];
        return (
            e &&
                (l.push({
                    id: "toggle-overlay-input-lock",
                    value: w.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: B.intl.string(B.t.VsAZcC),
                }),
                l.push({
                    id: "activate-overlay-region-text-widget",
                    value: w.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: B.intl.string(B.t.hurHWo),
                })),
            t &&
                ((0, G.isWindows)() || L.Ay.getUseSystemScreensharePicker()) &&
                l.push({
                    id: "toggle-go-live-streaming",
                    value: w.hCu.TOGGLE_GO_LIVE_STREAMING,
                    label: B.intl.string(B.t.ybdjJD),
                }),
            (0, G.isDesktop)() &&
                (l.push(
                    { id: "navigate-back", value: w.hCu.NAVIGATE_BACK, label: B.intl.string(B.t.gRSaOa) },
                    { id: "navigate-forward", value: w.hCu.NAVIGATE_FORWARD, label: B.intl.string(B.t.zOXpjU) },
                    {
                        id: "switch-to-voice-channel",
                        value: w.hCu.SWITCH_TO_VOICE_CHANNEL,
                        label: B.intl.string(B.t.ty7Lxy),
                    },
                    {
                        id: "disconnect-from-voice-channel",
                        value: w.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: B.intl.string(B.t.CV7mT7),
                    },
                ),
                n &&
                    l.push(
                        { id: "soundboard", value: w.hCu.SOUNDBOARD, label: B.intl.string(B.t.yPH4xm) },
                        { id: "soundboard-hold", value: w.hCu.SOUNDBOARD_HOLD, label: B.intl.string(B.t["1xFbP/"]) },
                    ),
                i &&
                    (l.push({ id: "save-clip", value: w.hCu.SAVE_CLIP, label: B.intl.string(B.t.U4URzP) }),
                    s &&
                        l.push({
                            id: "save-screenshot",
                            value: w.hCu.SAVE_SCREENSHOT,
                            label: B.intl.string(B.t["+WloFH"]),
                        }))),
            l
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n, enableScreenshotKeybind: i } = this.props,
            s = {
                [w.hCu.UNASSIGNED]: B.intl.string(B.t.rvlNLv),
                [w.hCu.PUSH_TO_MUTE]: B.intl.string(B.t.xtESim),
                [w.hCu.PUSH_TO_TALK]: B.intl.string(B.t.wTcBSy),
                [w.hCu.PUSH_TO_TALK_PRIORITY]: B.intl.string(B.t.FhHvWH),
                [w.hCu.TOGGLE_MUTE]: B.intl.string(B.t.X2fbUm),
                [w.hCu.TOGGLE_DEAFEN]: B.intl.string(B.t.MjREZV),
                [w.hCu.TOGGLE_VOICE_MODE]: B.intl.string(B.t.snm5YW),
                [w.hCu.TOGGLE_STREAMER_MODE]: B.intl.string(B.t.YszLLx),
                [w.hCu.VAD_PRIORITY]: B.intl.string(B.t.rSe8IZ),
                [w.hCu.TOGGLE_CAMERA]: B.intl.string(B.t.v1JBtL),
            };
        return (
            e && (s[w.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = B.intl.string(B.t.IoP5vc)),
            t && (0, G.isWindows)() && (s[w.hCu.TOGGLE_GO_LIVE_STREAMING] = B.intl.string(B.t.s4C238)),
            (0, G.isDesktop)() &&
                ((s[w.hCu.NAVIGATE_BACK] = B.intl.string(B.t.nKDlEt)),
                (s[w.hCu.NAVIGATE_FORWARD] = B.intl.string(B.t.DK0FFk)),
                (s[w.hCu.SOUNDBOARD] = (0, G.isWindows)() ? B.intl.string(B.t["5wJefL"]) : B.intl.string(B.t.gzjsSP)),
                (s[w.hCu.SOUNDBOARD_HOLD] = (0, G.isWindows)() ? B.intl.string(B.t.RRkZc9) : B.intl.string(B.t.laNlTl)),
                n &&
                    ((s[w.hCu.SAVE_CLIP] = B.intl.string(B.t.z3Wbam)),
                    i && (s[w.hCu.SAVE_SCREENSHOT] = B.intl.string(B.t.m0zd57)))),
            s
        );
    }
    handleAddKeybind = () => {
        b.A.addKeybind();
    };
    renderKeybinds(e) {
        return e.map((t, n) =>
            (0, i.jsxs)(
                s.Fragment,
                {
                    children: [
                        (0, i.jsx)(
                            Y,
                            {
                                keybind: t,
                                keybindDescriptions: this.keybindDescriptions,
                                keybindActionTypes: this.keybindActionTypes,
                            },
                            t.id,
                        ),
                        n !== e.length - 1 ? (0, i.jsx)(p.c, {}) : null,
                    ],
                },
                t.id,
            ),
        );
    }
    renderKeybindWarning() {
        return (0, i.jsxs)("div", {
            className: F.$e,
            children: [
                (0, i.jsx)(x.m, { size: "xs", color: o.A.colors.ICON_SUBTLE }),
                (0, i.jsx)(c.E, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: B.intl.string(B.t.NoKjWP),
                }),
            ],
        });
    }
    render() {
        let { enableClips: e, enableScreenshotKeybind: t } = this.props,
            n = a()(this.props.keybinds)
                .reject(
                    (e) =>
                        e.managed &&
                        ![w.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, w.hCu.SAVE_CLIP, w.hCu.SAVE_SCREENSHOT].includes(
                            e.action,
                        ),
                )
                .reject((t) => !e && (t.action === w.hCu.SAVE_CLIP || t.action === w.hCu.SAVE_SCREENSHOT))
                .reject((e) => !t && e.action === w.hCu.SAVE_SCREENSHOT)
                .reject(
                    (e) =>
                        !this.props.allowSoundboard &&
                        (e.action === w.hCu.SOUNDBOARD || e.action === w.hCu.SOUNDBOARD_HOLD),
                )
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value(),
            l = a()((0, N.Bx)())
                .filter((e) => e.description !== B.intl.string(B.t.HnNtEI))
                .groupBy((e) => e.group)
                .value();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(k.A, {
                    className: z.IE,
                    children: G.isPlatformEmbedded
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: F.OQ,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, i.jsx)("div", {
                                              className: F.c9,
                                              children: (0, i.jsx)(E.$, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: B.intl.string(B.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(R.A, { className: F.Qo, sourcePage: "keybinds" }),
                                  n.length > 0 &&
                                      (0, i.jsxs)(i.Fragment, {
                                          children: [(0, i.jsx)(p.c, {}), this.renderKeybinds(n)],
                                      }),
                                  (0, i.jsx)(p.c, {}),
                              ],
                          })
                        : (0, i.jsx)(u.p, {
                              messageType: u.Y.INFO,
                              className: F.Ly,
                              children: B.intl.format(B.t.mPi3F3, { downloadLink: w.X7G.DOWNLOAD }),
                          }),
                }),
                (0, i.jsxs)(T.B, {
                    gap: 48,
                    children: [
                        (0, i.jsx)(S.n, {
                            label: B.intl.string(B.t.Lz5KHI),
                            children: (0, i.jsx)("div", {
                                className: F.jh,
                                children: (0, i.jsxs)("div", {
                                    className: F.yZ,
                                    children: [
                                        (0, i.jsx)(c.E, {
                                            variant: "text-md/normal",
                                            children: B.intl.string(B.t.sMWLBj),
                                        }),
                                        (0, i.jsx)("div", {
                                            className: F.DM,
                                            children: (0, i.jsx)(f.e, { shortcut: v.z.binds["0"], className: F.LE }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, i.jsx)(H, {
                            children: (e) =>
                                (0, i.jsx)(i.Fragment, {
                                    children: e.map((e, t) => {
                                        let n = (0, N.Gm)(e),
                                            a = (0, N.zF)(e),
                                            r = l[e];
                                        return (0, i.jsx)(
                                            S.n,
                                            {
                                                label: n,
                                                description: a,
                                                children: (0, i.jsx)("div", {
                                                    className: F.jh,
                                                    children: r.map((e, t) =>
                                                        (0, i.jsxs)(
                                                            s.Fragment,
                                                            {
                                                                children: [
                                                                    0 !== t && (0, i.jsx)(p.c, {}),
                                                                    (0, i.jsxs)("div", {
                                                                        className: F.yZ,
                                                                        children: [
                                                                            (0, i.jsx)(c.E, {
                                                                                variant: "text-md/normal",
                                                                                children: e.description,
                                                                            }),
                                                                            (0, i.jsx)("div", {
                                                                                className: F.DM,
                                                                                children: e.binds.map((e) =>
                                                                                    (0, i.jsx)(
                                                                                        f.e,
                                                                                        {
                                                                                            shortcut: e,
                                                                                            className: F.LE,
                                                                                        },
                                                                                        e,
                                                                                    ),
                                                                                ),
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            },
                                                            e.description,
                                                        ),
                                                    ),
                                                }),
                                            },
                                            t,
                                        );
                                    }),
                                }),
                        }),
                    ],
                }),
            ],
        });
    }
}
function K() {
    s.useEffect(
        () => (
            b.A.enableAll(!1),
            () => {
                b.A.enableAll(!0);
            }
        ),
        [],
    );
    let e = (0, r.bG)([D.Ay], () => D.Ay.getState()),
        t = (0, r.bG)([L.Ay], () => (0, j.A)(L.Ay)),
        n = (0, r.bG)([O.A], () => O.A.isSupported),
        l = (0, y.sw)(),
        a = (0, y.BW)();
    return (0, i.jsx)(X, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, G.isWindows)(),
        enableClips: l,
        enableScreenshotKeybind: a,
    });
}
