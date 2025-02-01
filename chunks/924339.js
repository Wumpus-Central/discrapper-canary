e.r(r), e.d(r, { default: () => O }), e(411104);
var o = e(200651);
e(192379);
var n = e(512722),
    a = e.n(n),
    l = e(593473),
    i = e(186231),
    u = e(159277),
    c = e(478677),
    d = e(457330),
    s = e(702493),
    A = e(77987),
    h = e(275759),
    I = e(710845),
    p = e(807675),
    T = e(69580),
    v = e(787025),
    _ = e(591759),
    w = e(981631),
    L = e(602091);
let P = new I.Z('LinkAuthorize');
async function N(t, r, e, o) {
    var n, l, i, u, s;
    let A = null;
    try {
        let { body: t } = await d.Z.authorize(o, { twoWayLinkType: c.g.WEB });
        A = t.url;
    } catch (t) {
        throw Error('error at authorize with code '.concat(null !== (l = null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.code) && void 0 !== l ? l : 0));
    }
    let I = null;
    try {
        a()(null != A, 'No URL in authorize response');
        let { state: t } = (0, h.xp)(A);
        a()(null != t, 'Authorize URL state query parameter must be present'), (I = t);
    } catch (t) {
        throw Error('error at authorize parsing callback params');
    }
    try {
        let n = await d.Z.completeTwoWayLink(o, t, r, I, e);
        return null == n ? void 0 : null === (i = n.body) || void 0 === i ? void 0 : i.redirect;
    } catch (t) {
        throw Error('error at callback with code '.concat(null !== (s = null == t ? void 0 : null === (u = t.body) || void 0 === u ? void 0 : u.code) && void 0 !== s ? s : 0));
    }
}
function f(t) {
    let { platformType: r } = t;
    (0, s.Z)();
    let e = (0, p.y)(window.location.search),
        { code: n, token_redirect_uri: a } = l.parse(window.location.search),
        u = async (t) => {
            let { location: e } = t;
            if (null == e) return;
            let { error: o } = l.parse(e),
                u = null;
            if (null == o && null != n)
                try {
                    u = await N(e, n, a, r);
                } catch (r) {
                    var c;
                    P.error('Error Creating Discord link', null == r ? void 0 : r.message);
                    let t = _.Z.toURLSafe(e);
                    if (null == t) return;
                    t.searchParams.delete('code'), t.searchParams.set('error', 'two_way_link_error'), t.searchParams.set('error_description', null !== (c = null == r ? void 0 : r.message) && void 0 !== c ? c : 'unknown_error'), (e = t.toString());
                }
            window.location = null == u || u === i.b.OAUTH_REDIRECT ? e : u;
        };
    return (0, o.jsx)(v.G, {
        removeChildWrapper: !0,
        children: (0, o.jsx)(T.OAuth2AuthorizeModal, {
            transitionState: L.Dv.ENTERED,
            ...e,
            showLogout: !0,
            callback: u
        })
    });
}
let O = (0, A.e)(function (t) {
    let { match: r } = t,
        e = r.params.type,
        { client_id: n = '' } = l.parse(window.location.search),
        a = e === w.ABu.PLAYSTATION && n === u.t.PLAYSTATION_APPLICATION_ID,
        i = e === w.ABu.PLAYSTATION_STAGING && n === u.t.PLAYSTATION_STAGING_APPLICATION_ID;
    return a || i ? (0, o.jsx)(f, { platformType: e }) : null;
});
