n.d(t, { A: () => G }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n.n(l),
    a = n(311907),
    o = n(827734),
    d = n(435371),
    c = n(397927),
    u = n(97260),
    m = n(117178),
    g = n(512513),
    _ = n(915967),
    x = n(775121),
    h = n(734066),
    A = n(880144),
    p = n(680243),
    T = n(843401),
    f = n(430452),
    S = n(532624),
    E = n(975571),
    b = n(723702),
    C = n(350535),
    v = n(331969),
    N = n(173332),
    I = n(652215),
    j = n(650583),
    y = n(985018),
    O = n(802247),
    R = n(818050);
function L(e) {
    let { children: t } = e;
    return t([_.Q_.MESSAGE, _.Q_.NAVIGATION, _.Q_.DND, _.Q_.CHAT, _.Q_.VOICE_AND_VIDEO, _.Q_.MISCELLANEOUS]);
}
class P extends s.PureComponent {
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
            t = C.dI(e.shortcut);
        return x.A.hasBind(t)
            ? (0, i.jsx)(c.po8, { messageType: c.YCn.ERROR, children: y.intl.string(y.t["7lQlw3"]) })
            : j.Yy.has(t)
              ? (0, i.jsx)(c.po8, {
                    messageType: c.YCn.ERROR,
                    children: y.intl.format(y.t.MOIaNd, {
                        keyboardNavArticle: E.A.getArticleURL(I.MVz.KEYBOARD_NAVIGATION),
                    }),
                })
              : (0, i.jsx)(c.Text, {
                    variant: "text-md/normal",
                    className: O.qD,
                    children: this.props.keybindDescriptions[e.action],
                });
    }
    render() {
        let { managed: e, enabled: t } = this.props.keybind;
        return (0, i.jsxs)("div", {
            className: O.YI,
            children: [
                (0, i.jsxs)("div", {
                    className: O.PO,
                    children: [
                        (0, i.jsx)("div", {
                            className: O.AS,
                            children: (0, i.jsx)(c.l6P, {
                                selectionMode: "single",
                                label: y.intl.string(y.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onSelectionChange: this.handleActionChanged,
                                disabled: e,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: O.AS,
                            children: (0, i.jsx)(c.D0$, {
                                label: y.intl.string(y.t["1La4tC"]),
                                children: (0, i.jsx)(m.A, {
                                    defaultValue: this.props.keybind.shortcut,
                                    onChange: this.handleShortcutChange,
                                }),
                            }),
                        }),
                        !e &&
                            (0, i.jsx)("div", {
                                className: O.d9,
                                children: (0, i.jsx)(c.K0, {
                                    variant: "icon-only",
                                    onClick: this.handleDeleteKeybind,
                                    icon: c.ucK,
                                    "aria-label": y.intl.string(y.t.qEHmmB),
                                }),
                            }),
                        (0, i.jsx)("div", {
                            className: O.ZW,
                            children: (0, i.jsx)(d.m_, {
                                text: y.intl.string(y.t.uCD7qK),
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
        return e === I.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, i.jsx)(v.A, { keybind: this.props.keybind }) : void 0;
    }
}
class D extends s.PureComponent {
    get keybindActionTypes() {
        let {
                overlaySupported: e,
                canGoLive: t,
                allowSoundboard: n,
                enableClips: i,
                enableScreenshotKeybind: s,
            } = this.props,
            l = [
                { id: "unassigned", value: I.hCu.UNASSIGNED, label: y.intl.string(y.t["0Uh579"]) },
                { id: "push-to-talk", value: I.hCu.PUSH_TO_TALK, label: y.intl.string(y.t.Y5lgTP) },
                { id: "push-to-talk-priority", value: I.hCu.PUSH_TO_TALK_PRIORITY, label: y.intl.string(y.t.DkSwJ2) },
                { id: "push-to-mute", value: I.hCu.PUSH_TO_MUTE, label: y.intl.string(y.t.hSCRqd) },
                { id: "vad-priority", value: I.hCu.VAD_PRIORITY, label: y.intl.string(y.t["49d6Nd"]) },
                { id: "toggle-mute", value: I.hCu.TOGGLE_MUTE, label: y.intl.string(y.t.PlkYKD) },
                { id: "toggle-deafen", value: I.hCu.TOGGLE_DEAFEN, label: y.intl.string(y.t.NvGq1K) },
                { id: "toggle-voice-mode", value: I.hCu.TOGGLE_VOICE_MODE, label: y.intl.string(y.t.Wa5H9S) },
                { id: "toggle-streamer-mode", value: I.hCu.TOGGLE_STREAMER_MODE, label: y.intl.string(y.t.BK0Ncc) },
                { id: "toggle-camera", value: I.hCu.TOGGLE_CAMERA, label: y.intl.string(y.t.hf8JVT) },
            ];
        return (
            e &&
                (l.push({
                    id: "toggle-overlay-input-lock",
                    value: I.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: y.intl.string(y.t.VsAZcC),
                }),
                l.push({
                    id: "activate-overlay-region-text-widget",
                    value: I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: y.intl.string(y.t.hurHWo),
                })),
            t &&
                ((0, b.isWindows)() || f.Ay.getUseSystemScreensharePicker()) &&
                l.push({
                    id: "toggle-go-live-streaming",
                    value: I.hCu.TOGGLE_GO_LIVE_STREAMING,
                    label: y.intl.string(y.t.ybdjJD),
                }),
            (0, b.isDesktop)() &&
                (l.push(
                    { id: "navigate-back", value: I.hCu.NAVIGATE_BACK, label: y.intl.string(y.t.gRSaOa) },
                    { id: "navigate-forward", value: I.hCu.NAVIGATE_FORWARD, label: y.intl.string(y.t.zOXpjU) },
                    {
                        id: "switch-to-voice-channel",
                        value: I.hCu.SWITCH_TO_VOICE_CHANNEL,
                        label: y.intl.string(y.t.ty7Lxy),
                    },
                    {
                        id: "disconnect-from-voice-channel",
                        value: I.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: y.intl.string(y.t.CV7mT7),
                    },
                ),
                n &&
                    l.push(
                        { id: "soundboard", value: I.hCu.SOUNDBOARD, label: y.intl.string(y.t.yPH4xm) },
                        { id: "soundboard-hold", value: I.hCu.SOUNDBOARD_HOLD, label: y.intl.string(y.t["1xFbP/"]) },
                    ),
                i &&
                    (l.push({ id: "save-clip", value: I.hCu.SAVE_CLIP, label: y.intl.string(y.t.U4URzP) }),
                    s &&
                        l.push({
                            id: "save-screenshot",
                            value: I.hCu.SAVE_SCREENSHOT,
                            label: y.intl.string(y.t["+WloFH"]),
                        }))),
            l
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n, enableScreenshotKeybind: i } = this.props,
            s = {
                [I.hCu.UNASSIGNED]: y.intl.string(y.t.rvlNLv),
                [I.hCu.PUSH_TO_MUTE]: y.intl.string(y.t.xtESim),
                [I.hCu.PUSH_TO_TALK]: y.intl.string(y.t.wTcBSy),
                [I.hCu.PUSH_TO_TALK_PRIORITY]: y.intl.string(y.t.FhHvWH),
                [I.hCu.TOGGLE_MUTE]: y.intl.string(y.t.X2fbUm),
                [I.hCu.TOGGLE_DEAFEN]: y.intl.string(y.t.MjREZV),
                [I.hCu.TOGGLE_VOICE_MODE]: y.intl.string(y.t.snm5YW),
                [I.hCu.TOGGLE_STREAMER_MODE]: y.intl.string(y.t.YszLLx),
                [I.hCu.VAD_PRIORITY]: y.intl.string(y.t.rSe8IZ),
                [I.hCu.TOGGLE_CAMERA]: y.intl.string(y.t.v1JBtL),
            };
        return (
            e && (s[I.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = y.intl.string(y.t.IoP5vc)),
            t && (0, b.isWindows)() && (s[I.hCu.TOGGLE_GO_LIVE_STREAMING] = y.intl.string(y.t.s4C238)),
            (0, b.isDesktop)() &&
                ((s[I.hCu.NAVIGATE_BACK] = y.intl.string(y.t.nKDlEt)),
                (s[I.hCu.NAVIGATE_FORWARD] = y.intl.string(y.t.DK0FFk)),
                (s[I.hCu.SOUNDBOARD] = (0, b.isWindows)() ? y.intl.string(y.t["5wJefL"]) : y.intl.string(y.t.gzjsSP)),
                (s[I.hCu.SOUNDBOARD_HOLD] = (0, b.isWindows)() ? y.intl.string(y.t.RRkZc9) : y.intl.string(y.t.laNlTl)),
                n &&
                    ((s[I.hCu.SAVE_CLIP] = y.intl.string(y.t.z3Wbam)),
                    i && (s[I.hCu.SAVE_SCREENSHOT] = y.intl.string(y.t.m0zd57)))),
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
                            P,
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
            className: O.$e,
            children: [
                (0, i.jsx)(c.mir, { size: "xs", color: o.A.colors.ICON_SUBTLE }),
                (0, i.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "text-subtle",
                    children: y.intl.string(y.t.NoKjWP),
                }),
            ],
        });
    }
    render() {
        let { enableClips: e, enableScreenshotKeybind: t } = this.props,
            n = r()(this.props.keybinds)
                .reject(
                    (e) =>
                        e.managed &&
                        ![I.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, I.hCu.SAVE_CLIP, I.hCu.SAVE_SCREENSHOT].includes(
                            e.action,
                        ),
                )
                .reject((t) => !e && (t.action === I.hCu.SAVE_CLIP || t.action === I.hCu.SAVE_SCREENSHOT))
                .reject((e) => !t && e.action === I.hCu.SAVE_SCREENSHOT)
                .reject(
                    (e) =>
                        !this.props.allowSoundboard &&
                        (e.action === I.hCu.SOUNDBOARD || e.action === I.hCu.SOUNDBOARD_HOLD),
                )
                .sortBy((e) => e.id)
                .sortBy((e) => (!0 === e.managed ? -1 : 0))
                .value(),
            l = r()((0, _.Bx)())
                .filter((e) => e.description !== y.intl.string(y.t.HnNtEI))
                .groupBy((e) => e.group)
                .value();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(N.A, {
                    className: R.IE,
                    children: b.isPlatformEmbedded
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: O.OQ,
                                      children: [
                                          this.renderKeybindWarning(),
                                          (0, i.jsx)("div", {
                                              className: O.c9,
                                              children: (0, i.jsx)(c.Button, {
                                                  size: "md",
                                                  onClick: this.handleAddKeybind,
                                                  text: y.intl.string(y.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(T.A, { className: O.Qo, sourcePage: "keybinds" }),
                                  n.length > 0 &&
                                      (0, i.jsxs)(i.Fragment, {
                                          children: [(0, i.jsx)(c.cGx, {}), this.renderKeybinds(n)],
                                      }),
                                  (0, i.jsx)(c.cGx, {}),
                              ],
                          })
                        : (0, i.jsx)(c.po8, {
                              messageType: c.YCn.INFO,
                              className: O.Ly,
                              children: y.intl.format(y.t.mPi3F3, { downloadLink: I.X7G.DOWNLOAD }),
                          }),
                }),
                (0, i.jsxs)(c.BJc, {
                    gap: 48,
                    children: [
                        (0, i.jsx)(c.nVY, {
                            label: y.intl.string(y.t.Lz5KHI),
                            children: (0, i.jsx)("div", {
                                className: O.jh,
                                children: (0, i.jsxs)("div", {
                                    className: O.yZ,
                                    children: [
                                        (0, i.jsx)(c.Text, {
                                            variant: "text-md/normal",
                                            children: y.intl.string(y.t.sMWLBj),
                                        }),
                                        (0, i.jsx)("div", {
                                            className: O.DM,
                                            children: (0, i.jsx)(c.e7I, { shortcut: g.z.binds["0"], className: O.LE }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, i.jsx)(L, {
                            children: (e) =>
                                (0, i.jsx)(i.Fragment, {
                                    children: e.map((e, t) => {
                                        let n = (0, _.Gm)(e),
                                            r = (0, _.zF)(e),
                                            a = l[e];
                                        return (0, i.jsx)(
                                            c.nVY,
                                            {
                                                label: n,
                                                description: r,
                                                children: (0, i.jsx)("div", {
                                                    className: O.jh,
                                                    children: a.map((e, t) =>
                                                        (0, i.jsxs)(
                                                            s.Fragment,
                                                            {
                                                                children: [
                                                                    0 !== t && (0, i.jsx)(c.cGx, {}),
                                                                    (0, i.jsxs)("div", {
                                                                        className: O.yZ,
                                                                        children: [
                                                                            (0, i.jsx)(c.Text, {
                                                                                variant: "text-md/normal",
                                                                                children: e.description,
                                                                            }),
                                                                            (0, i.jsx)("div", {
                                                                                className: O.DM,
                                                                                children: e.binds.map((e) =>
                                                                                    (0, i.jsx)(
                                                                                        c.e7I,
                                                                                        {
                                                                                            shortcut: e,
                                                                                            className: O.LE,
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
function G() {
    s.useEffect(
        () => (
            u.A.enableAll(!1),
            () => {
                u.A.enableAll(!0);
            }
        ),
        [],
    );
    let e = (0, a.bG)([S.Ay], () => S.Ay.getState()),
        t = (0, a.bG)([f.Ay], () => (0, A.A)(f.Ay)),
        n = (0, a.bG)([p.A], () => p.A.isSupported),
        l = (0, h.sw)(),
        r = (0, h.BW)();
    return (0, i.jsx)(D, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, b.isWindows)(),
        enableClips: l,
        enableScreenshotKeybind: r,
    });
}
