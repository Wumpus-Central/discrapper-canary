n.d(t, { c: () => E });
var i = n(621466),
    s = n(158954),
    r = n(775602),
    a = n(186111),
    l = n(430452),
    o = n(383501),
    c = n(203982),
    d = n(350535),
    u = n(652215);
let _ = new Set(["PageDown", "PageUp", "Home", "End", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]),
    m = new Set([
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
    A = new Set([
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
    g = new Set([
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
    E = {
        binds: ["any-character"],
        keydown(e, t) {
            let n = (0, i.BF)(e)?.activeElement;
            if ((0, i.Cw)(n) || s.rxt.isActive() || m.has(t) || A.has(t) || g.has(t)) return !1;
            let E = null != n && "BODY" === n.tagName;
            return (
                !(
                    (r.A.keyboardModeEnabled && !E && !/^[a-zA-Z0-9]$/.test(t)) ||
                    c._.hasSubscribers(u.jej.MODAL_CLOSE) ||
                    a.A.hasLayers()
                ) &&
                ("Tab" === t &&
                c._.hasSubscribers(u.jej.TEXTAREA_FOCUS) &&
                null != document.querySelector('[data-can-focus="true"]')
                    ? (e.preventDefault(), c._.dispatch(u.jej.TEXTAREA_FOCUS), !1)
                    : !(
                          o.A.isConnected() &&
                          l.A.getMode() === u.TBI.PUSH_TO_TALK &&
                          !l.A.isSelfMute() &&
                          Object.values(l.A.getShortcuts())
                              .map(d.pi)
                              .some((t) => t.map((e) => e.keyCode).includes(e.keyCode))
                      ) &&
                      void (
                          !e.metaKey &&
                          !e.ctrlKey &&
                          !_.has(t) &&
                          c._.dispatchToLastSubscribed(u.jej.TEXTAREA_FOCUS)
                      ))
            );
        },
    };
