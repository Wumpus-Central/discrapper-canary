n.d(t, {
    FB: function () {
        return T;
    },
    Pu: function () {
        return C;
    },
    Vt: function () {
        return u;
    },
    XX: function () {
        return S;
    },
    Zs: function () {
        return L;
    },
    c7: function () {
        return l;
    },
    eS: function () {
        return c;
    },
    fr: function () {
        return N;
    },
    ox: function () {
        return A;
    }
}),
    n(724458);
var i = n(913527),
    E = n.n(i),
    r = n(406432),
    _ = n(531441),
    I = n(800530),
    o = n(981631),
    s = n(959517),
    a = n(388032);
function S(e) {
    return E()().to(E()(e));
}
function c(e) {
    var t, n;
    return (0, r.CO)(e.filename) || (0, r.NU)(e.filename) ? ''.concat(s._j).concat(null !== (t = e.filename) && void 0 !== t ? t : '.png') : null !== (n = e.filename) && void 0 !== n ? n : '';
}
function N(e) {
    var t, n, i, E;
    if (null == e.fields) return;
    let r = e.fields.reduce((e, t) => ((e[t.rawName] = t.rawValue), e), {});
    return {
        header: null !== (t = r[I.I5.HEADER]) && void 0 !== t ? t : '',
        icon: r[I.I5.ICON_TYPE],
        body: null !== (n = r[I.I5.BODY]) && void 0 !== n ? n : '',
        ctas: (null !== (i = r[I.I5.CTAS]) && void 0 !== i ? i : '').split(',').filter((e) => '' !== e),
        timestamp: parseFloat(null !== (E = r[I.I5.TIMESTAMP]) && void 0 !== E ? E : 0),
        theme: r[I.I5.THEME],
        learn_more_link: r[I.I5.LEARN_MORE_LINK],
        classification_id: r[I.I5.CLASSIFICATION_ID]
    };
}
function u(e) {
    if (e.type === _.lK.MESSAGE) return '' === e.content && 0 === e.attachments.length;
    return !0;
}
let A = (e) =>
        ({
            [I.bK.DIDNT_VIOLATE_POLICY]: a.intl.string(a.t.mZffAg),
            [I.bK.TOO_STRICT_UNFAIR]: a.intl.string(a.t.wgZVAg),
            [I.bK.DONT_AGREE_PENALTY]: a.intl.string(a.t.eu8G4u),
            [I.bK.SOMETHING_ELSE]: a.intl.string(a.t.XU3s6u)
        })[e],
    l = (e) => (null == e || 0 === e.length ? '' : 1 === e.length ? e.toUpperCase() : ''.concat(e.charAt(0).toUpperCase()).concat(e.slice(1)));
function T(e) {
    return null != e && null != e.guild_metadata;
}
let L = (e) => {
    if (e === o.evJ.DSA_APPEAL_REQUEST_DEFLECTION) return a.intl.string(a.t['0qyXXF']);
    return a.intl.string(a.t.aPmsx8);
};
function C(e) {
    let t = e.max_expiration_time;
    if (null == t) return null;
    try {
        return new Date(t);
    } catch {
        return null;
    }
}
