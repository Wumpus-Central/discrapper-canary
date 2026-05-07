"use strict";
n.d(t, { c: () => E });
var i = n(621466),
    r = n(825437),
    s = n(775602),
    a = n(186111),
    o = n(235058),
    l = n(763827),
    u = n(625494),
    c = n(350535),
    d = n(652215);
let _ = new Set(["PageDown", "PageUp", "Home", "End", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]),
    f = new Set([
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
    h = new Set([
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
    p = new Set([
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
            if ((0, i.Cw)(n) || r.rx.isActive() || f.has(t) || h.has(t) || p.has(t)) return !1;
            let E = null != n && "BODY" === n.tagName;
            if (
                (s.A.keyboardModeEnabled && !E && !/^[a-zA-Z0-9]$/.test(t)) ||
                u._.hasSubscribers(d.jej.MODAL_CLOSE) ||
                a.A.hasLayers()
            )
                return !1;
            if (
                "Tab" === t &&
                u._.hasSubscribers(d.jej.TEXTAREA_FOCUS) &&
                null != document.querySelector('[data-can-focus="true"]')
            )
                return e.preventDefault(), u._.dispatch(d.jej.TEXTAREA_FOCUS), !1;
            if (
                (l.A.isConnected() &&
                    o.Ay.getMode() === d.TBI.PUSH_TO_TALK &&
                    !o.Ay.isSelfMute() &&
                    Object.values(o.Ay.getShortcuts())
                        .map(c.pi)
                        .some((t) => t.map((e) => e.keyCode).includes(e.keyCode))) ||
                e.metaKey ||
                e.ctrlKey ||
                _.has(t)
            )
                return !1;
            let m = "Enter" === t && !e.shiftKey && !e.altKey;
            u._.dispatchToLastSubscribed(d.jej.TEXTAREA_FOCUS, { event: e, wasEnterPressed: m });
        },
    };
