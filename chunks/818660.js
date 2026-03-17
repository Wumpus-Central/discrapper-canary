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
    _ = n(117178),
    m = n(512513),
    g = n(915967),
    A = n(775121),
    h = n(734066),
    x = n(880144),
    p = n(168943),
    T = n(680243),
    E = n(843401),
    S = n(430452),
    C = n(532624),
    f = n(975571),
    b = n(723702),
    N = n(350535),
    I = n(790174),
    v = n(331969),
    j = n(652215),
    y = n(650583),
    R = n(985018),
    O = n(688414),
    P = n(473169);
function D(e) {
    let { children: t } = e;
    return t([g.Q_.MESSAGE, g.Q_.NAVIGATION, g.Q_.DND, g.Q_.CHAT, g.Q_.VOICE_AND_VIDEO, g.Q_.MISCELLANEOUS]);
}
class L extends s.PureComponent {
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
            t = N.dI(e.shortcut);
        return A.A.hasBind(t)
            ? (0, i.jsx)(c.po8, { messageType: c.YCn.ERROR, children: R.intl.string(R.t["7lQlw3"]) })
            : y.Yy.has(t)
              ? (0, i.jsx)(c.po8, {
                    messageType: c.YCn.ERROR,
                    children: R.intl.format(R.t.MOIaNd, {
                        keyboardNavArticle: f.A.getArticleURL(j.MVz.KEYBOARD_NAVIGATION),
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
                                label: R.intl.string(R.t.UUpAD6),
                                value: this.props.keybind.action,
                                options: this.props.keybindActionTypes,
                                onSelectionChange: this.handleActionChanged,
                                disabled: e,
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: O.AS,
                            children: (0, i.jsx)(c.D0$, {
                                label: R.intl.string(R.t["1La4tC"]),
                                children: (0, i.jsx)(_.A, {
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
                                    "aria-label": R.intl.string(R.t.qEHmmB),
                                }),
                            }),
                        (0, i.jsx)("div", {
                            className: O.ZW,
                            children: (0, i.jsx)(d.m_, {
                                text: R.intl.string(R.t.uCD7qK),
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
        return e === j.hCu.SWITCH_TO_VOICE_CHANNEL ? (0, i.jsx)(v.A, { keybind: this.props.keybind }) : void 0;
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
                { id: "unassigned", value: j.hCu.UNASSIGNED, label: R.intl.string(R.t["0Uh579"]) },
                { id: "push-to-talk", value: j.hCu.PUSH_TO_TALK, label: R.intl.string(R.t.Y5lgTP) },
                { id: "push-to-talk-priority", value: j.hCu.PUSH_TO_TALK_PRIORITY, label: R.intl.string(R.t.DkSwJ2) },
                { id: "push-to-mute", value: j.hCu.PUSH_TO_MUTE, label: R.intl.string(R.t.hSCRqd) },
                { id: "vad-priority", value: j.hCu.VAD_PRIORITY, label: R.intl.string(R.t["49d6Nd"]) },
                { id: "toggle-mute", value: j.hCu.TOGGLE_MUTE, label: R.intl.string(R.t.PlkYKD) },
                { id: "toggle-deafen", value: j.hCu.TOGGLE_DEAFEN, label: R.intl.string(R.t.NvGq1K) },
                { id: "toggle-voice-mode", value: j.hCu.TOGGLE_VOICE_MODE, label: R.intl.string(R.t.Wa5H9S) },
                { id: "toggle-streamer-mode", value: j.hCu.TOGGLE_STREAMER_MODE, label: R.intl.string(R.t.BK0Ncc) },
            ];
        return (
            (0, p.L)() && l.push({ id: "toggle-camera", value: j.hCu.TOGGLE_CAMERA, label: R.intl.string(R.t.hf8JVT) }),
            e &&
                (l.push({
                    id: "toggle-overlay-input-lock",
                    value: j.hCu.TOGGLE_OVERLAY_INPUT_LOCK,
                    label: R.intl.string(R.t.VsAZcC),
                }),
                l.push({
                    id: "activate-overlay-region-text-widget",
                    value: j.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
                    label: R.intl.string(R.t.hurHWo),
                })),
            t &&
                ((0, b.isWindows)() || S.Ay.getUseSystemScreensharePicker()) &&
                l.push({
                    id: "toggle-go-live-streaming",
                    value: j.hCu.TOGGLE_GO_LIVE_STREAMING,
                    label: R.intl.string(R.t.ybdjJD),
                }),
            (0, b.isDesktop)() &&
                (l.push(
                    { id: "navigate-back", value: j.hCu.NAVIGATE_BACK, label: R.intl.string(R.t.gRSaOa) },
                    { id: "navigate-forward", value: j.hCu.NAVIGATE_FORWARD, label: R.intl.string(R.t.zOXpjU) },
                    {
                        id: "switch-to-voice-channel",
                        value: j.hCu.SWITCH_TO_VOICE_CHANNEL,
                        label: R.intl.string(R.t.ty7Lxy),
                    },
                    {
                        id: "disconnect-from-voice-channel",
                        value: j.hCu.DISCONNECT_FROM_VOICE_CHANNEL,
                        label: R.intl.string(R.t.CV7mT7),
                    },
                ),
                n &&
                    l.push(
                        { id: "soundboard", value: j.hCu.SOUNDBOARD, label: R.intl.string(R.t.yPH4xm) },
                        { id: "soundboard-hold", value: j.hCu.SOUNDBOARD_HOLD, label: R.intl.string(R.t["1xFbP/"]) },
                    ),
                i &&
                    (l.push({ id: "save-clip", value: j.hCu.SAVE_CLIP, label: R.intl.string(R.t.U4URzP) }),
                    s &&
                        l.push({
                            id: "save-screenshot",
                            value: j.hCu.SAVE_SCREENSHOT,
                            label: R.intl.string(R.t["+WloFH"]),
                        }))),
            l
        );
    }
    get keybindDescriptions() {
        let { overlaySupported: e, canGoLive: t, enableClips: n, enableScreenshotKeybind: i } = this.props,
            s = {
                [j.hCu.UNASSIGNED]: R.intl.string(R.t.rvlNLv),
                [j.hCu.PUSH_TO_MUTE]: R.intl.string(R.t.xtESim),
                [j.hCu.PUSH_TO_TALK]: R.intl.string(R.t.wTcBSy),
                [j.hCu.PUSH_TO_TALK_PRIORITY]: R.intl.string(R.t.FhHvWH),
                [j.hCu.TOGGLE_MUTE]: R.intl.string(R.t.X2fbUm),
                [j.hCu.TOGGLE_DEAFEN]: R.intl.string(R.t.MjREZV),
                [j.hCu.TOGGLE_VOICE_MODE]: R.intl.string(R.t.snm5YW),
                [j.hCu.TOGGLE_STREAMER_MODE]: R.intl.string(R.t.YszLLx),
                [j.hCu.VAD_PRIORITY]: R.intl.string(R.t.rSe8IZ),
            };
        return (
            (0, p.L)() && (s[j.hCu.TOGGLE_CAMERA] = R.intl.string(R.t.v1JBtL)),
            e && (s[j.hCu.TOGGLE_OVERLAY_INPUT_LOCK] = R.intl.string(R.t.IoP5vc)),
            t && (0, b.isWindows)() && (s[j.hCu.TOGGLE_GO_LIVE_STREAMING] = R.intl.string(R.t.s4C238)),
            (0, b.isDesktop)() &&
                ((s[j.hCu.NAVIGATE_BACK] = R.intl.string(R.t.nKDlEt)),
                (s[j.hCu.NAVIGATE_FORWARD] = R.intl.string(R.t.DK0FFk)),
                (s[j.hCu.SOUNDBOARD] = (0, b.isWindows)() ? R.intl.string(R.t["5wJefL"]) : R.intl.string(R.t.gzjsSP)),
                (s[j.hCu.SOUNDBOARD_HOLD] = (0, b.isWindows)() ? R.intl.string(R.t.RRkZc9) : R.intl.string(R.t.laNlTl)),
                n &&
                    ((s[j.hCu.SAVE_CLIP] = R.intl.string(R.t.z3Wbam)),
                    i && (s[j.hCu.SAVE_SCREENSHOT] = R.intl.string(R.t.m0zd57)))),
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
                            L,
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
                    children: R.intl.string(R.t.NoKjWP),
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
                .filter((e) => e.description !== R.intl.string(R.t.HnNtEI))
                .groupBy((e) => e.group)
                .value();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(I.A, {
                    title: R.intl.string(R.t.T9DA2K),
                    className: P.IE,
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
                                                  text: R.intl.string(R.t.zk6Xbs),
                                                  variant: "primary",
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(E.A, { className: O.Qo, sourcePage: "keybinds" }),
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
                              children: R.intl.format(R.t.mPi3F3, { downloadLink: j.X7G.DOWNLOAD }),
                          }),
                }),
                (0, i.jsxs)(c.BJc, {
                    gap: 48,
                    children: [
                        (0, i.jsx)(c.nVY, {
                            label: R.intl.string(R.t.Lz5KHI),
                            children: (0, i.jsx)("div", {
                                className: O.jh,
                                children: (0, i.jsxs)("div", {
                                    className: O.yZ,
                                    children: [
                                        (0, i.jsx)(c.Text, {
                                            variant: "text-md/normal",
                                            children: R.intl.string(R.t.sMWLBj),
                                        }),
                                        (0, i.jsx)("div", {
                                            className: O.DM,
                                            children: (0, i.jsx)(c.e7I, { shortcut: m.z.binds["0"], className: O.LE }),
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, i.jsx)(D, {
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
                                                    className: O.jh,
                                                    children: r.map((e, t) =>
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
    let e = (0, r.bG)([C.Ay], () => C.Ay.getState()),
        t = (0, r.bG)([S.Ay], () => (0, x.A)(S.Ay)),
        n = (0, r.bG)([T.A], () => T.A.isSupported),
        l = (0, h.sw)(),
        a = (0, h.BW)();
    return (0, i.jsx)(G, {
        keybinds: e,
        canGoLive: t,
        overlaySupported: n,
        allowSoundboard: (0, b.isWindows)(),
        enableClips: l,
        enableScreenshotKeybind: a,
    });
}
