n.d(t, {
    c: () => A,
}),
    n(896048),
    n(747238);
var r = n(621466),
    i = n(158954),
    l = n(775602),
    s = n(186111),
    a = n(430452),
    o = n(383501),
    c = n(203982),
    d = n(350535),
    u = n(652215);
let _ = new Set(["PageDown", "PageUp", "Home", "End", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]),
    p = new Set([
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
    A = {
        binds: ["any-character"],
        keydown(e, t) {
            var n;
            let A = null == (n = (0, r.BF)(e)) ? void 0 : n.activeElement;
            if ((0, r.Cw)(A) || i.rxt.isActive() || p.has(t) || m.has(t) || g.has(t)) return !1;
            let f = null != A && "BODY" === A.tagName;
            return (
                !(
                    (l.A.keyboardModeEnabled && !f && !/^[a-zA-Z0-9]$/.test(t)) ||
                    c._.hasSubscribers(u.jej.MODAL_CLOSE) ||
                    s.A.hasLayers()
                ) &&
                ("Tab" === t &&
                c._.hasSubscribers(u.jej.TEXTAREA_FOCUS) &&
                null != document.querySelector('[data-can-focus="true"]')
                    ? (e.preventDefault(), c._.dispatch(u.jej.TEXTAREA_FOCUS), !1)
                    : !(
                          o.A.isConnected() &&
                          a.A.getMode() === u.TBI.PUSH_TO_TALK &&
                          !a.A.isSelfMute() &&
                          Object.values(a.A.getShortcuts())
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
