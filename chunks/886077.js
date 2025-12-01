n.d(t, { U: () => g }), n(388685), n(35282);
var r = n(374470),
    i = n(793030),
    a = n(607070),
    o = n(819640),
    s = n(131951),
    l = n(19780),
    c = n(585483),
    u = n(13140),
    d = n(981631);
let f = "BODY",
    p = new Set(["PageDown", "PageUp", "Home", "End", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]),
    _ = new Set([
        "Alt",
        "AltGraph",
        "CapsLock",
        "Control",
        "Fn",
        "FnLock",
        "Hyper",
        "Meta",
        "NumLock",
        "OS",
        "ScrollLock",
        "Shift",
        "Super",
        "Symbol",
        "SymbolLock",
    ]),
    m = new Set([
        "F1",
        "F2",
        "F3",
        "F4",
        "F5",
        "F6",
        "F7",
        "F8",
        "F9",
        "F10",
        "F11",
        "F12",
        "F13",
        "F14",
        "F15",
        "F16",
        "F17",
        "F18",
        "F19",
        "F20",
        "Accept",
        "ContextMenu",
        "Find",
        "ZoomIn",
        "ZoomOut",
    ]),
    h = new Set([
        "ChannelDown",
        "ChannelUp",
        "MediaFastForward",
        "MediaPause",
        "MediaPlay",
        "MediaPlayPause",
        "MediaRecord",
        "MediaRewind",
        "MediaStop",
        "MediaTrackNext",
        "MediaTrackPrevious",
        "AudioBalanceLeft",
        "AudioBalanceRight",
        "AudioBassDown",
        "AudioBassBoostDown",
        "AudioBassBoostToggle",
        "AudioBassBoostUp",
        "AudioBassUp",
        "AudioFaderFront",
        "AudioFaderReader",
        "AudioSurroundModeNext",
        "AudioTrebleDown",
        "AudioTreblUp",
        "AudioVolumeDown",
        "AudioVolumeMute",
        "AudioVolumeUp",
        "VolumeUp",
        "VolumeDown",
        "VolumeMute",
    ]),
    g = {
        binds: ["any-character"],
        keydown(e, t) {
            var n;
            let g = null == (n = (0, r.uB)(e)) ? void 0 : n.activeElement;
            if ((0, r.VG)(g) || i.fCx.isActive() || _.has(t) || m.has(t) || h.has(t)) return !1;
            let E = null != g && g.tagName === f;
            return (
                !(
                    (a.Z.keyboardModeEnabled && !E && !/^[a-zA-Z0-9]$/.test(t)) ||
                    c.S.hasSubscribers(d.CkL.MODAL_CLOSE) ||
                    o.Z.hasLayers()
                ) &&
                ("Tab" === t &&
                c.S.hasSubscribers(d.CkL.TEXTAREA_FOCUS) &&
                null != document.querySelector('[data-can-focus="true"]')
                    ? (e.preventDefault(), c.S.dispatch(d.CkL.TEXTAREA_FOCUS), !1)
                    : !(
                          l.Z.isConnected() &&
                          s.Z.getMode() === d.pM4.PUSH_TO_TALK &&
                          !s.Z.isSelfMute() &&
                          Object.values(s.Z.getShortcuts())
                              .map(u.d2)
                              .some((t) => t.map((e) => e.keyCode).includes(e.keyCode))
                      ) &&
                      void (
                          !e.metaKey &&
                          !e.ctrlKey &&
                          !p.has(t) &&
                          c.S.dispatchToLastSubscribed(d.CkL.TEXTAREA_FOCUS)
                      ))
            );
        },
    };
