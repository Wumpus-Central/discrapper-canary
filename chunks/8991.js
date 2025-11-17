n.d(t, { E: () => o }), n(65234), n(111804), n(490233), n(97749), n(388685), n(35282);
var r = n(54381);
n(473749);
var i = n(828700),
    l = n(979007),
    a = n(688357),
    s = n(981631);
function o() {
    let e = new URLSearchParams(location.search),
        t = e.get("q"),
        n = e.get("category_id");
    return (
        e.delete("page"),
        (0, r.jsxs)(i.rs, {
            children: [
                null != n && null == t
                    ? (0, r.jsx)(i.l_, {
                          path: s.Z5c.APPLICATION_DIRECTORY_SEARCH,
                          to: "".concat(s.Z5c.GLOBAL_DISCOVERY_APPS_CATEGORY("".concat(n))),
                      })
                    : (0, r.jsx)(i.l_, {
                          path: s.Z5c.APPLICATION_DIRECTORY_SEARCH,
                          to: "".concat(s.Z5c.GLOBAL_DISCOVERY_APPS_SEARCH, "?").concat(e.toString()),
                      }),
                (0, r.jsx)(i.l_, {
                    path: s.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(":applicationId", ":skuId"),
                    to: s.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(":applicationId", ":skuId"),
                }),
                (0, r.jsx)(i.l_, {
                    path: s.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(":applicationId", a.c.STORE),
                    to: s.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                        ":applicationId",
                        l.GlobalDiscoveryAppsSections.STORE,
                    ),
                }),
                (0, r.jsx)(i.l_, {
                    path: s.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(":applicationId", a.c.PREMIUM_DEPRECATED),
                    to: s.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                        ":applicationId",
                        l.GlobalDiscoveryAppsSections.STORE,
                    ),
                }),
                (0, r.jsx)(i.l_, {
                    path: s.Z5c.APPLICATION_DIRECTORY_PROFILE(":applicationId"),
                    to: {
                        pathname: s.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(":applicationId"),
                        search: location.search,
                    },
                }),
                (0, r.jsx)(i.l_, {
                    path: s.Z5c.APPLICATION_DIRECTORY,
                    to: s.Z5c.GLOBAL_DISCOVERY_APPS,
                }),
            ],
        })
    );
}
