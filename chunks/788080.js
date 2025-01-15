n.d(t, {
    FB: function () {
        return g;
    },
    Pu: function () {
        return C;
    },
    Vt: function () {
        return f;
    },
    XX: function () {
        return u;
    },
    Zs: function () {
        return E;
    },
    c7: function () {
        return _;
    },
    eS: function () {
        return m;
    },
    fr: function () {
        return h;
    },
    ox: function () {
        return p;
    }
}),
    n(724458);
var i = n(913527),
    r = n.n(i),
    l = n(406432),
    a = n(531441),
    o = n(800530),
    s = n(981631),
    c = n(959517),
    d = n(388032);
function u(e) {
    return r()().to(r()(e));
}
function m(e) {
    var t, n;
    return (0, l.CO)(e.filename) || (0, l.NU)(e.filename) ? ''.concat(c._j).concat(null !== (t = e.filename) && void 0 !== t ? t : '.png') : null !== (n = e.filename) && void 0 !== n ? n : '';
}
function h(e) {
    var t, n, i, r;
    if (null == e.fields) return;
    let l = e.fields.reduce((e, t) => ((e[t.rawName] = t.rawValue), e), {});
    return {
        header: null !== (t = l[o.I5.HEADER]) && void 0 !== t ? t : '',
        icon: l[o.I5.ICON_TYPE],
        body: null !== (n = l[o.I5.BODY]) && void 0 !== n ? n : '',
        ctas: (null !== (i = l[o.I5.CTAS]) && void 0 !== i ? i : '').split(',').filter((e) => '' !== e),
        timestamp: parseFloat(null !== (r = l[o.I5.TIMESTAMP]) && void 0 !== r ? r : 0),
        theme: l[o.I5.THEME],
        learn_more_link: l[o.I5.LEARN_MORE_LINK],
        classification_id: l[o.I5.CLASSIFICATION_ID]
    };
}
function f(e) {
    if (e.type === a.lK.MESSAGE) return '' === e.content && 0 === e.attachments.length;
    return !0;
}
let p = (e) =>
        ({
            [o.bK.DIDNT_VIOLATE_POLICY]: d.intl.string(d.t.mZffAg),
            [o.bK.TOO_STRICT_UNFAIR]: d.intl.string(d.t.wgZVAg),
            [o.bK.DONT_AGREE_PENALTY]: d.intl.string(d.t.eu8G4u),
            [o.bK.SOMETHING_ELSE]: d.intl.string(d.t.XU3s6u)
        })[e],
    _ = (e) => (null == e || 0 === e.length ? '' : 1 === e.length ? e.toUpperCase() : ''.concat(e.charAt(0).toUpperCase()).concat(e.slice(1)));
function g(e) {
    return null != e && null != e.guild_metadata;
}
let E = (e) => {
    if (e === s.evJ.DSA_APPEAL_REQUEST_DEFLECTION) return d.intl.string(d.t['0qyXXF']);
    return d.intl.string(d.t.aPmsx8);
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
