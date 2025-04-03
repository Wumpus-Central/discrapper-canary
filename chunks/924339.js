t.r(r), t.d(r, { default: () => A }), t(411104), t(301563);
var n = t(200651);
t(192379);
var o = t(512722),
    a = t.n(o),
    l = t(593473),
    c = t(186231),
    i = t(159277),
    u = t(478677),
    s = t(457330),
    p = t(702493),
    d = t(77987),
    b = t(275759),
    f = t(710845),
    y = t(807675),
    O = t(69580),
    h = t(787025),
    w = t(591759),
    v = t(981631),
    P = t(602091);
let g = new f.Z('LinkAuthorize');
async function j(e, r, t, n) {
    var o, l, c, i, p;
    let d = null;
    try {
        let { body: e } = await s.Z.authorize(n, { twoWayLinkType: u.g.WEB });
        d = e.url;
    } catch (e) {
        throw Error('error at authorize with code '.concat(null != (l = null == e || null == (o = e.body) ? void 0 : o.code) ? l : 0));
    }
    let f = null;
    try {
        a()(null != d, 'No URL in authorize response');
        let { state: e } = (0, b.xp)(d);
        a()(null != e, 'Authorize URL state query parameter must be present'), (f = e);
    } catch (e) {
        throw Error('error at authorize parsing callback params');
    }
    try {
        let o = await s.Z.completeTwoWayLink(n, e, r, f, t);
        return null == o || null == (c = o.body) ? void 0 : c.redirect;
    } catch (e) {
        throw Error('error at callback with code '.concat(null != (p = null == e || null == (i = e.body) ? void 0 : i.code) ? p : 0));
    }
}
function m(e) {
    var r, t;
    let { platformType: o } = e;
    (0, p.Z)();
    let a = (0, y.y)(window.location.search),
        { code: i, token_redirect_uri: u } = l.parse(window.location.search),
        s = async (e) => {
            let { location: r } = e;
            if (null == r) return;
            let { error: t } = l.parse(r),
                n = null;
            if (null == t && null != i)
                try {
                    n = await j(r, i, u, o);
                } catch (t) {
                    var a;
                    g.error('Error Creating Discord link', null == t ? void 0 : t.message);
                    let e = w.Z.toURLSafe(r);
                    if (null == e) return;
                    e.searchParams.delete('code'), e.searchParams.set('error', 'two_way_link_error'), e.searchParams.set('error_description', null != (a = null == t ? void 0 : t.message) ? a : 'unknown_error'), (r = e.toString());
                }
            window.location = null == n || n === c.b.OAUTH_REDIRECT ? r : n;
        };
    return (0, n.jsx)(h.G, {
        removeChildWrapper: !0,
        children: (0, n.jsx)(
            O.OAuth2AuthorizeModal,
            ((r = (function (e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            })
                        )),
                        n.forEach(function (r) {
                            var n;
                            (n = t[r]),
                                r in e
                                    ? Object.defineProperty(e, r, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[r] = n);
                        });
                }
                return e;
            })({ transitionState: P.Dv.ENTERED }, a)),
            (t = t =
                {
                    showLogout: !0,
                    callback: s
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
                : (function (e, r) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, n);
                      }
                      return t;
                  })(Object(t)).forEach(function (e) {
                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
                  }),
            r)
        )
    });
}
let A = (0, d.e)(function (e) {
    let { match: r } = e,
        t = r.params.type,
        { client_id: o = '' } = l.parse(window.location.search),
        a = t === v.ABu.PLAYSTATION && o === i.t.PLAYSTATION_APPLICATION_ID,
        c = t === v.ABu.PLAYSTATION_STAGING && o === i.t.PLAYSTATION_STAGING_APPLICATION_ID;
    return a || c ? (0, n.jsx)(m, { platformType: t }) : null;
});
