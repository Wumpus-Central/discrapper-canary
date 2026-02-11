n.d(t, { c: () => g });
var i = n(621466),
    l = n(158954),
    r = n(775602),
    s = n(186111),
    o = n(430452),
    a = n(383501),
    d = n(203982),
    c = n(350535),
    u = n(652215);
let A = new Set(["PageDown", "PageUp", "Home", "End", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]),
    E = new Set([
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
    _ = new Set([
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
    I = new Set([
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
            let n = (0, i.BF)(e)?.activeElement;
            if ((0, i.Cw)(n) || l.rxt.isActive() || E.has(t) || _.has(t) || I.has(t)) return !1;
            let g = null != n && "BODY" === n.tagName;
            return (
                !(
                    (r.A.keyboardModeEnabled && !g && !/^[a-zA-Z0-9]$/.test(t)) ||
                    d._.hasSubscribers(u.jej.MODAL_CLOSE) ||
                    s.A.hasLayers()
                ) &&
                ("Tab" === t &&
                d._.hasSubscribers(u.jej.TEXTAREA_FOCUS) &&
                null != document.querySelector('[data-can-focus="true"]')
                    ? (e.preventDefault(), d._.dispatch(u.jej.TEXTAREA_FOCUS), !1)
                    : !(
                          a.A.isConnected() &&
                          o.Ay.getMode() === u.TBI.PUSH_TO_TALK &&
                          !o.Ay.isSelfMute() &&
                          Object.values(o.Ay.getShortcuts())
                              .map(c.pi)
                              .some((t) => t.map((e) => e.keyCode).includes(e.keyCode))
                      ) &&
                      void (
                          !e.metaKey &&
                          !e.ctrlKey &&
                          !A.has(t) &&
                          d._.dispatchToLastSubscribed(u.jej.TEXTAREA_FOCUS)
                      ))
            );
        },
    };
