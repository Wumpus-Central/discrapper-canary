n.d(t, { c: () => p });
var i = n(621466),
    r = n(557361),
    a = n(775602),
    s = n(186111),
    l = n(999926),
    o = n(763827),
    d = n(625494),
    c = n(350535),
    u = n(652215);
let _ = new Set(["Enter", " "]),
    E = new Set([
        "button",
        "checkbox",
        "link",
        "menuitem",
        "menuitemcheckbox",
        "menuitemradio",
        "option",
        "radio",
        "switch",
        "tab",
        "treeitem",
    ]),
    A = new Set(["PageDown", "PageUp", "Home", "End", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]),
    h = new Set([
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
    f = new Set([
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
    p = {
        binds: ["any-character"],
        keydown(e, t) {
            let n = (0, i.BF)(e)?.activeElement;
            if (
                (0, i.Cw)(n) ||
                (_.has(t) &&
                    (function (e) {
                        if (null == e) return !1;
                        let t = e.getAttribute("role");
                        return null != t
                            ? E.has(t)
                            : "BUTTON" === e.tagName || ("A" === e.tagName && e.hasAttribute("href"));
                    })(n)) ||
                r.rx.isActive() ||
                h.has(t) ||
                f.has(t) ||
                I.has(t)
            )
                return !1;
            let p = null != n && "BODY" === n.tagName;
            if (
                (a.Ay.keyboardModeEnabled && !p && !/^[a-zA-Z0-9]$/.test(t)) ||
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
                A.has(t)
            )
                return !1;
            let T = "Enter" === t && !e.shiftKey && !e.altKey;
            d._.dispatchToLastSubscribed(u.jej.TEXTAREA_FOCUS, { event: e, wasEnterPressed: T });
        },
    };
