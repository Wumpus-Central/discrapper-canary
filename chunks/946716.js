"use strict";
s.d(t, { $: () => i });
var n = s(562465),
    r = s(319400),
    l = s(18572),
    a = s(652215);
let i = async (e) => {
    try {
        return (await n.Bo.get({ url: a.Rsh.COLLECTIBLES_SEARCH, query: e, rejectWithError: !0 })).body;
    } catch (t) {
        let e = new r.LG(t);
        throw ((0, l.o)(e), e);
    }
};
