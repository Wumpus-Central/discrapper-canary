t.d(n, {
    PG: () => s,
    W$: () => a,
    lg: () => d,
    ug: () => o,
    xh: () => r
});
var l,
    i,
    s = (((l = {})[(l.LANDING = 0)] = 'LANDING'), (l[(l.SAFETY_CHECK = 1)] = 'SAFETY_CHECK'), (l[(l.DEFAULT_CHANNELS = 2)] = 'DEFAULT_CHANNELS'), (l[(l.WELCOME_CARD = 3)] = 'WELCOME_CARD'), (l[(l.CUSTOMIZATION_QUESTIONS = 4)] = 'CUSTOMIZATION_QUESTIONS'), (l[(l.REVIEW = 5)] = 'REVIEW'), (l[(l.HOME_SETTINGS = 6)] = 'HOME_SETTINGS'), l);
let r = [0, 1, 2, 4, 6, 5];
var a = (((i = {})[(i.TOGGLE_ENABLED = 0)] = 'TOGGLE_ENABLED'), (i[(i.TOGGLE_DISABLED = 1)] = 'TOGGLE_DISABLED'), (i[(i.PREVIEW = 2)] = 'PREVIEW'), (i[(i.EDIT_DEFAULT_CHANNELS = 3)] = 'EDIT_DEFAULT_CHANNELS'), (i[(i.EDIT_CUSTOMIZATION_QUESTIONS = 4)] = 'EDIT_CUSTOMIZATION_QUESTIONS'), (i[(i.EDIT_HOME_SETTINGS = 5)] = 'EDIT_HOME_SETTINGS'), i);
let o = r.filter((e) => 0 !== e);
function d(e) {
    switch (e) {
        case 1:
            return 'Safety Check';
        case 2:
            return 'Default Channels';
        case 4:
            return 'Customization Questions';
        case 6:
            return 'Home Settings';
        default:
            return null;
    }
}
