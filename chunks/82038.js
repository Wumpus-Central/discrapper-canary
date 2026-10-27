n.d(t, { c: () => f });
var i = n(621466),
    r = n(557361),
    a = n(775602),
    s = n(186111),
    l = n(360906),
    o = n(763827),
    d = n(625494),
    c = n(350535),
    u = n(652215);
let _ = new Set(["PageDown", "PageUp", "Home", "End", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]),
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
    f = {
        binds: ["any-character"],
        keydown(e, t) {
            let n = (0, i.BF)(e)?.activeElement;
            if ((0, i.Cw)(n) || r.rx.isActive() || E.has(t) || A.has(t) || h.has(t)) return !1;
            let f = null != n && "BODY" === n.tagName;
            if (
                (a.Ay.keyboardModeEnabled && !f && !/^[a-zA-Z0-9]$/.test(t)) ||
                d._.hasSubscribers(u.jej.MODAL_CLOSE) ||
                s.A.hasLayers()
            )
                return !1;
            if (
                "Tab" === t &&
                d._.hasSubscribers(u.jej.TEXTAREA_FOCUS) &&
                null != document.querySelector('[data-can-focus="true"]')
            )
                return (e.repeat || (e.preventDefault(), d._.dispatch(u.jej.TEXTAREA_FOCUS)), !1);
            if (
                (o.A.isConnected() &&
                    l.Ay.getMode() === u.TBI.PUSH_TO_TALK &&
                    !l.Ay.isSelfMute() &&
                    Object.values(l.Ay.getShortcuts())
                        .map(c.pi)
                        .some((t) => t.map((e) => e.keyCode).includes(e.keyCode))) ||
                e.metaKey ||
                e.ctrlKey ||
                _.has(t)
            )
                return !1;
            let I = "Enter" === t && !e.shiftKey && !e.altKey;
            d._.dispatchToLastSubscribed(u.jej.TEXTAREA_FOCUS, { event: e, wasEnterPressed: I });
        },
    };
