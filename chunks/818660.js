n.d(t, { A: () => M }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n.n(l),
    r = n(311907),
    o = n(827734),
    d = n(435371),
    c = n(397927),
    u = n(97260),
    m = n(117178),
    _ = n(512513),
    g = n(915967),
    x = n(775121),
    A = n(734066),
    h = n(880144),
    p = n(168943),
    f = n(680243),
    T = n(843401),
    S = n(430452),
    E = n(532624),
    b = n(975571),
    C = n(723702),
    v = n(350535),
    N = n(790174),
    I = n(331969),
    j = n(652215),
    y = n(650583),
    O = n(985018),
    R = n(688414),
    L = n(473169);
function P(e) {
    let { children: t } = e;
    return t([g.Q_.MESSAGE, g.Q_.NAVIGATION, g.Q_.DND, g.Q_.CHAT, g.Q_.VOICE_AND_VIDEO, g.Q_.MISCELLANEOUS]);
}
class D extends s.PureComponent {
    handleActionChanged = (e) => {
        u.A.setKeybind({ ...this.props.keybind, action: e });
    };
    handleShortcutChange = (e) => {
        u.A.setKeybind({ ...this.props.keybind, shortcut: e });
    };
    handleDeleteKeybind = () => {
        u.A.deleteKeybind(this.props.keybind.id);
    };
    handleEnableDisable = () => {
        let { keybind: e } = this.props;
        u.A.setKeybind({ ...this.props.keybind, enabled: !e.enabled });
    };
    renderMessage() {
        let { keybind: e } = this.props,
            t = v.dI(e.shortcut);
        return x.A.hasBind(t)
            ? (0, i.jsx)(c.po8, { messageType: c.YCn.ERROR, children: O.intl.string(O.t["7lQlw3"]) })
            : y.Yy.has(t)
              ? (0, i.jsx)(c.po8, {
                    messageType: c.YCn.ERROR,
                    children: O.intl.format(O.t.MOIaNd, {
                        keyboardNavArticle: b.A.getArticleURL(j.MVz.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, i.jsx)(c.Text, {
                    variant: "text-md/normal",
                    className: R.qD,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, i.jsxs)("div", {
            className: R.YI,
            children: [
                (0, i.jsxs)("div", {
                    className: R.PO,
                    children: [
                        (0, i.jsx)("div", {
                            className: R.AS,
                            children: (0, i.jsx)(c.l6P, {
                                selectionMode: "single",
                                label: O.intl.string(O.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onSelectionChange: this.handleActionChanged,
                                disabled: e,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: R.AS,
                            children: (0, i.jsx)(c.D0$, {
                                label: O.intl.string(O.t["1La4tC"]),
                                children: (0, i.jsx)(m.A, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            (0, i.jsx)("div", {
                                className: R.d9,
                                children: (0, i.jsx)(c.K0, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: c.ucK,
                                    "aria-label": O.intl.string(O.t.qEHmmB),
                                }),
                            }),
                        (0, i.jsx)("div", {
                            className: R.ZW,
                            children: (0, i.jsx)(d.m_, {
                                text: O.intl.string(O.t.uCD7qK),
                                children: (0, i.jsx)("div", {
                                    children: (0, i.jsx)(c.dOG, { checked: t, onChange: this.handleEnableDisable }),
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
        return e === j.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, i.jsx)(I.A, { keybind: this.props.keybind }) : void 0;
    }
}
class G extends s.PureComponent {
    get keybindActionTypes() {
        let {
                overlaySupported: e,
                canGoLive: t,
                allowSoundboard: n,
                enableClips: i,
                enableScreenshotKeybind: s,
            } = this.props,
            l = [
                { id: "unassigned", value: j.hCu.UNASSIGNED, label: O.intl.string(O.t["0Uh579"]) },
                { id: "push-to-talk", value: j.hCu.PUSH_TO_TALK, label: O.intl.string(O.t.Y5lgTP) },
                { id: "push-to-talk-priority", value: j.hCu.PUSH_TO_TALK_PRIORITY, label: O.intl.string(O.t.DkSwJ2) },
                { id: "push-to-mute", value: j.hCu.PUSH_TO_MUTE, label: O.intl.string(O.t.hSCRqd) },
                { id: "vad-priority", value: j.hCu.VAD_PRIORITY, label: O.intl.string(O.t["49d6Nd"]) },
                { id: "toggle-mute", value: j.hCu.TOGGLE_MUTE, label: O.intl.string(O.t.PlkYKD) },
                { id: "toggle-deafen", value: j.hCu.TOGGLE_DEAFEN, label: O.intl.string(O.t.NvGq1K) },
                { id: "toggle-voice-mode", value: j.hCu.TOGGLE_VOICE_MODE, label: O.intl.string(O.t.Wa5H9S) },
                { id: "toggle-streamer-mode", value: j.hCu.TOGGLE_STREAMER_MODE, label: O.intl.string(O.t.BK0Ncc) },
            ];
        return (
            (0, p.L)() && l.push({ id: "toggle-camera", value: j.hCu.TOGGLE_CAMERA, label: O.intl.string(O.t.hf8JVT) }),
            e &&
                (l.push({
                    id: "toggle-overlay-input-lock",
                    value: j.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: O.intl.string(O.t.VsAZcC),
                }),
                l.push({
                    id: "activate-overlay-region-text-widget",
                    value: j.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: O.intl.string(O.t.hurHWo),
                })),
            t &&
                ((0, C.isWindows)() || S.Ay.getUseSystemScreensharePicker()) &&
                l.push({
                    id: "toggle-go-live-streaming",
                    value: j.hCu.TOGGLE_GO_LIVE_STREAMING,
                    label: O.intl.string(O.t.ybdjJD),
                }),
            (0, C.isDesktop)() &&
                (l.push(
                    { id: "navigate-back", value: j.hCu.NAVIGATE_BACK, label: O.intl.string(O.t.gRSaOa) },
                    { id: "navigate-forward", value: j.hCu.NAVIGATE_FORWARD, label: O.intl.string(O.t.zOXpjU) },
                    {
                        id: "switch-to-voice-channel",
                        value: j.hCu.SWITCH_TO_VOICE_CHANNEL,
                        label: O.intl.string(O.t.ty7Lxy),
                    },
                    {
                        id: "disconnect-from-voice-channel",
                        value: j.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: O.intl.string(O.t.CV7mT7),
                    },
                ),
                n &&
                    l.push(
                        { id: "soundboard", value: j.hCu.SOUNDBOARD, label: O.intl.string(O.t.yPH4xm) },
                        { id: "soundboard-hold", value: j.hCu.SOUNDBOARD_HOLD, label: O.intl.string(O.t["1xFbP/"]) },
                    ),
                i &&
                    (l.push({ id: "save-clip", value: j.hCu.SAVE_CLIP, label: O.intl.string(O.t.U4URzP) }),
                    s &&
                        l.push({
                            id: "save-screenshot",
                            value: j.hCu.SAVE_SCREENSHOT,
                            label: O.intl.string(O.t["+WloFH"]),
                        }))),
            l
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n, enableScreenshotKeybind: i } = this.props,
            s = {
                [j.hCu.UNASSIGNED]: O.intl.string(O.t.rvlNLv),
                [j.hCu.PUSH_TO_MUTE]: O.intl.string(O.t.xtESim),
                [j.hCu.PUSH_TO_TALK]: O.intl.string(O.t.wTcBSy),
                [j.hCu.PUSH_TO_TALK_PRIORITY]: O.intl.string(O.t.FhHvWH),
                [j.hCu.TOGGLE_MUTE]: O.intl.string(O.t.X2fbUm),
                [j.hCu.TOGGLE_DEAFEN]: O.intl.string(O.t.MjREZV),
                [j.hCu.TOGGLE_VOICE_MODE]: O.intl.string(O.t.snm5YW),
                [j.hCu.TOGGLE_STREAMER_MODE]: O.intl.string(O.t.YszLLx),
                [j.hCu.VAD_PRIORITY]: O.intl.string(O.t.rSe8IZ),
            };
        return (
            (0, p.L)() && (s[j.hCu.TOGGLE_CAMERA] = O.intl.string(O.t.v1JBtL)),
            e && (s[j.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = O.intl.string(O.t.IoP5vc)),
            t && (0, C.isWindows)() && (s[j.hCu.TOGGLE_GO_LIVE_STREAMING] = O.intl.string(O.t.s4C238)),
            (0, C.isDesktop)() &&
                ((s[j.hCu.NAVIGATE_BACK] = O.intl.string(O.t.nKDlEt)),
                (s[j.hCu.NAVIGATE_FORWARD] = O.intl.string(O.t.DK0FFk)),
                (s[j.hCu.SOUNDBOARD] = (0, C.isWindows)() ? O.intl.string(O.t["5wJefL"]) : O.intl.string(O.t.gzjsSP)),
                (s[j.hCu.SOUNDBOARD_HOLD] = (0, C.isWindows)() ? O.intl.string(O.t.RRkZc9) : O.intl.string(O.t.laNlTl)),
                n &&
                    ((s[j.hCu.SAVE_CLIP] = O.intl.string(O.t.z3Wbam)),
                    i && (s[j.hCu.SAVE_SCREENSHOT] = O.intl.string(O.t.m0zd57)))),
            s
        );
    }
    handleAddKeybind = () => {
        u.A.addKeybind();
    };
    renderKeybinds(e) {
        return e.map((t, n) =>
            (0, i.jsxs)(
                s.Fragment,
                {
                    children: [
                        (0, i.jsx)(
                            D,
                            {
                                keybind: t,
                                keybindDescriptions: this.keybindDescriptions,
                                keybindActionTypes: this.keybindActionTypes,
                            },
                            t.id,
                        ),
                        n !== e.length - 1 ? (0, i.jsx)(c.cGx, {}) : null,
                    ],
                },
                t.id,
            ),
        );
    }
    renderKeybindWarning() {
        return (0, i.jsxs)("div", {
            className: R.$e,
            children: [
                (0, i.jsx)(c.mir, { size: "xs", color: o.A.colors.ICON_SUBTLE }),
                (0, i.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: O.intl.string(O.t.NoKjWP),
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
                        ![j.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, j.hCu.SAVE_CLIP, j.hCu.SAVE_SCREENSHOT].includes(
                            e.action,
                        ),
                )
                .reject((t) => !e && (t.action === j.hCu.SAVE_CLIP || t.action === j.hCu.SAVE_SCREENSHOT))
                .reject((e) => !t && e.action === j.hCu.SAVE_SCREENSHOT)
                .reject(
                    (e) =>
                        !this.props.allowSoundboard &&
                        (e.action === j.hCu.SOUNDBOARD || e.action === j.hCu.SOUNDBOARD_HOLD),
                )
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value(),
            l = a()((0, g.Bx)())
                .filter((e) => e.description !== O.intl.string(O.t.HnNtEI))
                .groupBy((e) => e.group)
                .value();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(N.A, {
                    className: L.IE,
                    children: C.isPlatformEmbedded
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: R.OQ,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, i.jsx)("div", {
                                              className: R.c9,
                                              children: (0, i.jsx)(c.Button, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: O.intl.string(O.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(T.A, { className: R.Qo, sourcePage: "keybinds" }),
                                  n.length > 0 &&
                                      (0, i.jsxs)(i.Fragment, {
                                          children: [(0, i.jsx)(c.cGx, {}), this.renderKeybinds(n)],
                                      }),
                                  (0, i.jsx)(c.cGx, {}),
                              ],
                          })
                        : (0, i.jsx)(c.po8, {
                              messageType: c.YCn.INFO,
                              className: R.Ly,
                              children: O.intl.format(O.t.mPi3F3, { downloadLink: j.X7G.DOWNLOAD }),
                          }),
                }),
                (0, i.jsxs)(c.BJc, {
                    gap: 48,
                    children: [
                        (0, i.jsx)(c.nVY, {
                            label: O.intl.string(O.t.Lz5KHI),
                            children: (0, i.jsx)("div", {
                                className: R.jh,
                                children: (0, i.jsxs)("div", {
                                    className: R.yZ,
                                    children: [
                                        (0, i.jsx)(c.Text, {
                                            variant: "text-md/normal",
                                            children: O.intl.string(O.t.sMWLBj),
                                        }),
                                        (0, i.jsx)("div", {
                                            className: R.DM,
                                            children: (0, i.jsx)(c.e7I, { shortcut: _.z.binds["0"], className: R.LE }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, i.jsx)(P, {
                            children: (e) =>
                                (0, i.jsx)(i.Fragment, {
                                    children: e.map((e, t) => {
                                        let n = (0, g.Gm)(e),
                                            a = (0, g.zF)(e),
                                            r = l[e];
                                        return (0, i.jsx)(
                                            c.nVY,
                                            {
                                                label: n,
                                                description: a,
                                                children: (0, i.jsx)("div", {
                                                    className: R.jh,
                                                    children: r.map((e, t) =>
                                                        (0, i.jsxs)(
                                                            s.Fragment,
                                                            {
                                                                children: [
                                                                    0 !== t && (0, i.jsx)(c.cGx, {}),
                                                                    (0, i.jsxs)("div", {
                                                                        className: R.yZ,
                                                                        children: [
                                                                            (0, i.jsx)(c.Text, {
                                                                                variant: "text-md/normal",
                                                                                children: e.description,
                                                                            }),
                                                                            (0, i.jsx)("div", {
                                                                                className: R.DM,
                                                                                children: e.binds.map((e) =>
                                                                                    (0, i.jsx)(
                                                                                        c.e7I,
                                                                                        {
                                                                                            shortcut: e,
                                                                                            className: R.LE,
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
function M() {
    s.useEffect(
        () => (
            u.A.enableAll(!1),
            () => {
                u.A.enableAll(!0);
            }
        ),
        [],
    );
    let e = (0, r.bG)([E.Ay], () => E.Ay.getState()),
        t = (0, r.bG)([S.Ay], () => (0, h.A)(S.Ay)),
        n = (0, r.bG)([f.A], () => f.A.isSupported),
        l = (0, A.sw)(),
        a = (0, A.BW)();
    return (0, i.jsx)(G, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, C.isWindows)(),
        enableClips: l,
        enableScreenshotKeybind: a,
    });
}
