n.d(t, { v: () => i });
let r = (0, n(818083).B)({
    kind: 'user',
    id: '2024-04_genshin_user_signup',
    label: 'Genshin User Signup',
    defaultConfig: { showUserSignup: !1 },
    treatments: [
        {
            id: 1,
            label: 'Show user signup',
            config: { showUserSignup: !0 }
        }
    ]
});
function i(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { showUserSignup: n } = r.getCurrentConfig({ location: e }, { autoTrackExposure: t });
    return n;
}
