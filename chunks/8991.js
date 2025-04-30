n.d(t, { E: () => s }), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282);
var r = n(200651);
n(192379);
var i = n(512969),
    l = n(979007),
    a = n(688357),
    o = n(981631);
function s() {
    let e = new URLSearchParams(location.search),
        t = e.get('q'),
        n = e.get('category_id');
    return (
        e.delete('page'),
        (0, r.jsxs)(i.rs, {
            children: [
                null != n && null == t
                    ? (0, r.jsx)(i.l_, {
                          path: o.Z5c.APPLICATION_DIRECTORY_SEARCH,
                          to: ''.concat(o.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(''.concat(n)))
                      })
                    : (0, r.jsx)(i.l_, {
                          path: o.Z5c.APPLICATION_DIRECTORY_SEARCH,
                          to: ''.concat(o.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, '?').concat(e.toString())
                      }),
                (0, r.jsx)(i.l_, {
                    path: o.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(':applicationId', ':skuId'),
                    to: o.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId')
                }),
                (0, r.jsx)(i.l_, {
                    path: o.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', a.c.STORE),
                    to: o.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(':applicationId', l.GlobalDiscoveryAppsSections.STORE)
                }),
                (0, r.jsx)(i.l_, {
                    path: o.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', a.c.PREMIUM_DEPRECATED),
                    to: o.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(':applicationId', l.GlobalDiscoveryAppsSections.STORE)
                }),
                (0, r.jsx)(i.l_, {
                    path: o.Z5c.APPLICATION_DIRECTORY_PROFILE(':applicationId'),
                    to: {
                        pathname: o.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(':applicationId'),
                        search: location.search
                    }
                }),
                (0, r.jsx)(i.l_, {
                    path: o.Z5c.APPLICATION_DIRECTORY,
                    to: o.Z5c.GLOBAL_DISCOVERY_APPS
                })
            ]
        })
    );
}
