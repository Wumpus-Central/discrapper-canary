n.d(t, { Z: () => d }), n(47120);
var r,
    i = n(442837),
    o = n(570140);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = {
        use_topic_dividers_in_chat: 'Use summary topics as divider content in chat instead of string formatted dates.',
        highlight_redesigned_icons: 'Highlight redesigned icons',
        alt_clips_1: 'Use alt clip icon 1',
        alt_clips_2: 'Use alt clip icon 2',
        profile_effect_debug_controls: 'Shop: Scrolls through profile effects with arrow up / down. Restart with R',
        shop_disable_cache: 'Shop: Disable shop cache',
        shop_include_unpublished: 'Shop: Show unpublished items in the shop',
        enable_avatar_decoration_uploads: 'Shop: Enable avatar decoration uploads',
        lottie_hover_multiple_loop: 'Lotties - continue playing the hover animation after mouse enter',
        ss01: 'Italic - straight forms (K,R,k)',
        ss02: 'Italic - straight l',
        ss03: 'Italic - full height forms (W,M)',
        ss04: 'Italic - alternate figures (3,4,5,6,7,8,9)'
    },
    l = {};
function c(e) {
    l[e.toggle] = e.value;
}
class u extends (r = i.ZP.DeviceSettingsStore) {
    getUserAgnosticState() {
        return { toggleStates: l };
    }
    initialize(e) {
        for (var t in s) {
            var n, r;
            let i = null != (r = null == e || null == (n = e.toggleStates) ? void 0 : n[t]) && r;
            l[t] = i;
        }
    }
    get(e) {
        var t;
        return null != (t = l[e]) && t;
    }
    set(e, t) {
        return (l[e] = t), t;
    }
    all() {
        return l;
    }
    allWithDescriptions() {
        return Object.entries(l).map((e) => {
            let [t, n] = e;
            return [t, n, s[t]];
        });
    }
}
a(u, 'displayName', 'DevToolsDesignTogglesStore'), a(u, 'persistKey', 'DevToolsDesignTogglesStore');
let d = new u(o.Z, { DEV_TOOLS_DESIGN_TOGGLE_WEB_SET: c });
