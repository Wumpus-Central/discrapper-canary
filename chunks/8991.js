c.d(e, {
    E: function () {
        return _;
    },
    p: function () {
        return O;
    }
}),
    c(610138),
    c(216116),
    c(78328),
    c(815648),
    c(47120);
var o = c(200651);
c(192379);
var a = c(512969),
    i = c(979007),
    I = c(981631),
    n = c(272242);
function _() {
    let t = new URLSearchParams(location.search),
        e = t.get('q'),
        c = t.get('category_id');
    return (
        t.delete('page'),
        (0, o.jsxs)(a.rs, {
            children: [
                null != c && null == e
                    ? (0, o.jsx)(a.l_, {
                          path: I.Z5c.APPLICATION_DIRECTORY_SEARCH,
                          to: ''.concat(I.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(''.concat(c)))
                      })
                    : (0, o.jsx)(a.l_, {
                          path: I.Z5c.APPLICATION_DIRECTORY_SEARCH,
                          to: ''.concat(I.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, '?').concat(t.toString())
                      }),
                (0, o.jsx)(a.l_, {
                    path: I.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(':applicationId', ':skuId'),
                    to: I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId')
                }),
                (0, o.jsx)(a.l_, {
                    path: I.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', n.ApplicationDirectoryProfileSections.STORE),
                    to: I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(':applicationId', i.GlobalDiscoveryAppsSections.STORE)
                }),
                (0, o.jsx)(a.l_, {
                    path: I.Z5c.APPLICATION_DIRECTORY_PROFILE(':applicationId'),
                    to: I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(':applicationId')
                }),
                (0, o.jsx)(a.l_, {
                    path: I.Z5c.APPLICATION_DIRECTORY,
                    to: I.Z5c.GLOBAL_DISCOVERY_APPS
                })
            ]
        })
    );
}
function O() {
    let t = new URLSearchParams(location.search);
    return (
        t.delete('page'),
        (0, o.jsxs)(a.rs, {
            children: [
                (0, o.jsx)(a.l_, {
                    path: I.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY(':categoryId'),
                    to: ''.concat(I.Z5c.APPLICATION_DIRECTORY_SEARCH, '?category_id=:categoryId')
                }),
                (0, o.jsx)(a.l_, {
                    path: I.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH,
                    to: ''.concat(I.Z5c.APPLICATION_DIRECTORY_SEARCH, '?').concat(t.toString())
                }),
                (0, o.jsx)(a.l_, {
                    path: I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(':applicationId', ':skuId'),
                    to: I.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(':applicationId', ':skuId')
                }),
                (0, o.jsx)(a.l_, {
                    path: I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(':applicationId', i.GlobalDiscoveryAppsSections.STORE),
                    to: I.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(':applicationId', n.ApplicationDirectoryProfileSections.STORE)
                }),
                (0, o.jsx)(a.l_, {
                    path: I.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(':applicationId'),
                    to: I.Z5c.APPLICATION_DIRECTORY_PROFILE(':applicationId')
                }),
                (0, o.jsx)(a.l_, {
                    path: I.Z5c.GLOBAL_DISCOVERY_APPS,
                    to: I.Z5c.APPLICATION_DIRECTORY
                })
            ]
        })
    );
}
