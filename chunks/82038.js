n.d(t, { c: () => g });
var i = n(621466),
    r = n(158954),
    l = n(775602),
    s = n(186111),
    o = n(430452),
    a = n(383501),
    d = n(203982),
    c = n(350535),
    u = n(652215);
let _ = new Set(["PageDown", "PageUp", "Home", "End", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]),
    A = new Set([
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
    E = new Set([
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
            if ((0, i.Cw)(n) || r.rxt.isActive() || A.has(t) || E.has(t) || I.has(t)) return !1;
            let g = null != n && "BODY" === n.tagName;
            if (
                (l.A.keyboardModeEnabled && !g && !/^[a-zA-Z0-9]$/.test(t)) ||
                d._.hasSubscribers(u.jej.MODAL_CLOSE) ||
                s.A.hasLayers()
            )
                return !1;
            if (
                "Tab" === t &&
                d._.hasSubscribers(u.jej.TEXTAREA_FOCUS) &&
                null != document.querySelector('[data-can-focus="true"]')
            )
                return e.preventDefault(), d._.dispatch(u.jej.TEXTAREA_FOCUS), !1;
            if (
                (a.A.isConnected() &&
                    o.Ay.getMode() === u.TBI.PUSH_TO_TALK &&
                    !o.Ay.isSelfMute() &&
                    Object.values(o.Ay.getShortcuts())
                        .map(c.pi)
                        .some((t) => t.map((e) => e.keyCode).includes(e.keyCode))) ||
                e.metaKey ||
                e.ctrlKey ||
                _.has(t)
            )
                return !1;
            let h = "Enter" === t && !e.shiftKey && !e.altKey;
            d._.dispatchToLastSubscribed(u.jej.TEXTAREA_FOCUS, { event: e, wasEnterPressed: h });
        },
    };
