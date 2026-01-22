n.d(t, { c: () => g }), n(896048), n(747238);
var r = n(621466),
    i = n(158954),
    a = n(775602),
    s = n(186111),
    o = n(430452),
    l = n(383501),
    c = n(203982),
    u = n(350535),
    d = n(652215);
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
    m = new Set([
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
            let g = null == (n = (0, r.BF)(e)) ? void 0 : n.activeElement;
            if ((0, r.Cw)(g) || i.rxt.isActive() || _.has(t) || h.has(t) || m.has(t)) return !1;
            let E = null != g && g.tagName === f;
            return (
                !(
                    (a.A.keyboardModeEnabled && !E && !/^[a-zA-Z0-9]$/.test(t)) ||
                    c._.hasSubscribers(d.jej.MODAL_CLOSE) ||
                    s.A.hasLayers()
                ) &&
                ("Tab" === t &&
                c._.hasSubscribers(d.jej.TEXTAREA_FOCUS) &&
                null != document.querySelector('[data-can-focus="true"]')
                    ? (e.preventDefault(), c._.dispatch(d.jej.TEXTAREA_FOCUS), !1)
                    : !(
                          l.A.isConnected() &&
                          o.A.getMode() === d.TBI.PUSH_TO_TALK &&
                          !o.A.isSelfMute() &&
                          Object.values(o.A.getShortcuts())
                              .map(u.pi)
                              .some((t) => t.map((e) => e.keyCode).includes(e.keyCode))
                      ) &&
                      void (
                          !e.metaKey &&
                          !e.ctrlKey &&
                          !p.has(t) &&
                          c._.dispatchToLastSubscribed(d.jej.TEXTAREA_FOCUS)
                      ))
            );
        },
    };
