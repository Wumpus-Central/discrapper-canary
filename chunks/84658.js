n.d(t, {
    PG: () => i,
    W$: () => a,
    lg: () => c,
    ug: () => o,
    xh: () => s
});
var l,
    r,
    i = (((l = {})[(l.LANDING = 0)] = 'LANDING'), (l[(l.SAFETY_CHECK = 1)] = 'SAFETY_CHECK'), (l[(l.DEFAULT_CHANNELS = 2)] = 'DEFAULT_CHANNELS'), (l[(l.WELCOME_CARD = 3)] = 'WELCOME_CARD'), (l[(l.CUSTOMIZATION_QUESTIONS = 4)] = 'CUSTOMIZATION_QUESTIONS'), (l[(l.REVIEW = 5)] = 'REVIEW'), (l[(l.HOME_SETTINGS = 6)] = 'HOME_SETTINGS'), l);
let s = [0, 1, 2, 4, 6, 5];
var a = (((r = {})[(r.TOGGLE_ENABLED = 0)] = 'TOGGLE_ENABLED'), (r[(r.TOGGLE_DISABLED = 1)] = 'TOGGLE_DISABLED'), (r[(r.PREVIEW = 2)] = 'PREVIEW'), (r[(r.EDIT_DEFAULT_CHANNELS = 3)] = 'EDIT_DEFAULT_CHANNELS'), (r[(r.EDIT_CUSTOMIZATION_QUESTIONS = 4)] = 'EDIT_CUSTOMIZATION_QUESTIONS'), (r[(r.EDIT_HOME_SETTINGS = 5)] = 'EDIT_HOME_SETTINGS'), r);
let o = s.filter((e) => 0 !== e);
function c(e) {
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
