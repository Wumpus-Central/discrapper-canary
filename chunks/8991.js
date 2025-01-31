_.d(I, { E: () => P }), _(610138), _(216116), _(78328), _(815648), _(47120);
var a = _(200651);
_(192379);
var t = _(512969),
    O = _(979007),
    R = _(981631),
    E = _(272242);
function P() {
    let c = new URLSearchParams(location.search),
        I = c.get('q'),
        _ = c.get('category_id');
    return (
        c.delete('page'),
        (0, a.jsxs)(t.rs, {
            children: [
                null != _ && null == I
                    ? (0, a.jsx)(t.l_, {
                          path: R.Z5c.APPLICATION_DIRECTORY_SEARCH,
                          to: ''.concat(R.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(''.concat(_)))
                      })
                    : (0, a.jsx)(t.l_, {
                          path: R.Z5c.APPLICATION_DIRECTORY_SEARCH,
                          to: ''.concat(R.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, '?').concat(c.toString())
                      }),
                (0, a.jsx)(t.l_, {
                    path: R.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(':applicationId', ':skuId'),
                    to: R.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId')
                }),
                (0, a.jsx)(t.l_, {
                    path: R.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', E.c.STORE),
                    to: R.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(':applicationId', O.GlobalDiscoveryAppsSections.STORE)
                }),
                (0, a.jsx)(t.l_, {
                    path: R.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', E.c.PREMIUM_DEPRECATED),
                    to: R.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(':applicationId', O.GlobalDiscoveryAppsSections.STORE)
                }),
                (0, a.jsx)(t.l_, {
                    path: R.Z5c.APPLICATION_DIRECTORY_PROFILE(':applicationId'),
                    to: {
                        pathname: R.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(':applicationId'),
                        search: location.search
                    }
                }),
                (0, a.jsx)(t.l_, {
                    path: R.Z5c.APPLICATION_DIRECTORY,
                    to: R.Z5c.GLOBAL_DISCOVERY_APPS
                })
            ]
        })
    );
}
