var i = n(855986),
    l = n(73153),
    s = n(653868);
let r = new Map();
class a extends i.Ay.Store {
    static displayName = "GameOrganizationCharacterEligibilityStore";
    getCharacters(e) {
        return r.get(e) ?? null;
    }
}
let o = new a(l.h, {
    GAME_ORGANIZATION_CHARACTER_ELIGIBILITY_FETCH_SUCCESS: function (e) {
        let { code: t, characters: n } = e;
        (r = new Map(r)).set(t, n.map(s.w6));
    },
    LOGOUT: function () {
        if (0 === r.size) return !1;
        r = new Map();
    },
});
n.d(t, {}, { A: o });
