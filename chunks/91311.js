n.d(t, { Z: () => d }), n(47120);
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
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
let o = {
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
function u(e) {
    l[e.toggle] = e.value;
}
class c extends (i = r.ZP.DeviceSettingsStore) {
    getUserAgnosticState() {
        return { toggleStates: l };
    }
    initialize(e) {
        for (var t in o) {
            var n, i;
            let r = null !== (i = null == e ? void 0 : null === (n = e.toggleStates) || void 0 === n ? void 0 : n[t]) && void 0 !== i && i;
            l[t] = r;
        }
    }
    get(e) {
        var t;
        return null !== (t = l[e]) && void 0 !== t && t;
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
            return [t, n, o[t]];
        });
    }
}
s(c, 'displayName', 'DevToolsDesignTogglesStore'), s(c, 'persistKey', 'DevToolsDesignTogglesStore');
let d = new c(a.Z, { DEV_TOOLS_DESIGN_TOGGLE_WEB_SET: u });
