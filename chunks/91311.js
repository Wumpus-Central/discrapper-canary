var i,
    a = r(47120);
var o = r(442837),
    s = r(570140);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = {
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
    c = {};
function d(e) {
    c[e.toggle] = e.value;
}
class f extends (i = o.ZP.DeviceSettingsStore) {
    getUserAgnosticState() {
        return { toggleStates: c };
    }
    initialize(e) {
        for (var n in u) {
            var r, i;
            let a = null !== (i = null == e ? void 0 : null === (r = e.toggleStates) || void 0 === r ? void 0 : r[n]) && void 0 !== i && i;
            c[n] = a;
        }
    }
    get(e) {
        var n;
        return null !== (n = c[e]) && void 0 !== n && n;
    }
    set(e, n) {
        return (c[e] = n), n;
    }
    all() {
        return c;
    }
    allWithDescriptions() {
        return Object.entries(c).map((e) => {
            let [n, r] = e;
            return [n, r, u[n]];
        });
    }
}
l(f, 'displayName', 'DevToolsDesignTogglesStore'), l(f, 'persistKey', 'DevToolsDesignTogglesStore'), (n.Z = new f(s.Z, { DEV_TOOLS_DESIGN_TOGGLE_WEB_SET: d }));
